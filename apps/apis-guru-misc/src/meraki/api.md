<h1 id="meraki-dashboard-api">Meraki Dashboard API v0.0.0-streaming</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.

> Date: 05 March, 2023
>
> [Recent Updates](https://meraki.io/whats-new/)

---

[API Documentation](https://meraki.io/api)

[Community Support](https://meraki.io/community)

[Meraki Homepage](https://www.meraki.com)

Base URLs:

* <a href="https://api.meraki.com/api/v0">https://api.meraki.com/api/v0</a>

Web: <a href="https://meraki.io/community">Meraki Developer Community</a> 

# Authentication

* API Key (meraki_api_key)
    - Parameter Name: **X-Cisco-Meraki-API-Key**, in: header.

<h1 id="meraki-dashboard-api-api-usage">API usage</h1>

## List the API requests made by an organization

<a id="opIdgetOrganizationApiRequests"></a>

> Code samples

```bash
curl https://example.com/organizations/string/apiRequests \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/apiRequests`

List the API requests made by an organization

<h3 id="list-the-api-requests-made-by-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 31 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|adminId|query|string|false|Filter the results by the ID of the admin who made the API requests|
|path|query|string|false|Filter the results by the path of the API requests|
|method|query|string|false|Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')|
|responseCode|query|integer|false|Filter the results by the response code of the API requests|
|sourceIp|query|string|false|Filter the results by the IP address of the originating API request|

> Example responses

> 200 Response

```json
[
  {
    "adminId": "212406",
    "host": "api.meraki.com",
    "method": "GET",
    "path": "/api/v0/organizations/33349/apiRequests",
    "queryString": "timespan=604800",
    "responseCode": 200,
    "sourceIp": "123.123.123.1",
    "ts": "2019-02-20T17:31:23Z",
    "userAgent": "PostmanRuntime/7.6.0"
  }
]
```

<h3 id="list-the-api-requests-made-by-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-api-requests-made-by-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return an aggregated overview of API requests data

<a id="opIdgetOrganizationApiRequestsOverview"></a>

> Code samples

```bash
curl https://example.com/organizations/string/apiRequests/overview \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/apiRequests/overview`

Return an aggregated overview of API requests data

<h3 id="return-an-aggregated-overview-of-api-requests-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 31 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.|

> Example responses

> 200 Response

```json
{
  "responseCodeCounts": {
    "200": 50000,
    "201": 4000,
    "204": 1000,
    "400": 3500,
    "404": 1500,
    "429": 10000
  }
}
```

<h3 id="return-an-aggregated-overview-of-api-requests-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-action-batches">Action batches</h1>

## Return the list of action batches in the organization

<a id="opIdgetOrganizationActionBatches"></a>

> Code samples

```bash
curl https://example.com/organizations/string/actionBatches \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/actionBatches`

Return the list of action batches in the organization

<h3 id="return-the-list-of-action-batches-in-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|status|query|string|false|Filter batches by status. Valid types are pending, completed, and failed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|completed|
|status|failed|
|status|pending|

> Example responses

> 200 Response

```json
[
  {
    "actions": [
      {
        "body": {
          "name": "Group 1"
        },
        "operation": "create",
        "resource": "/networks/L_XXXXX/groupPolicies"
      }
    ],
    "confirmed": true,
    "id": "123",
    "organizationId": "2930418",
    "status": {
      "completed": true,
      "createdResources": [
        {
          "id": 100,
          "uri": "/networks/L_XXXXX/groupPolicies/100"
        }
      ],
      "errors": [],
      "failed": false
    },
    "synchronous": false
  }
]
```

<h3 id="return-the-list-of-action-batches-in-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-list-of-action-batches-in-the-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create an action batch

<a id="opIdcreateOrganizationActionBatch"></a>

> Code samples

```bash
curl https://example.com/organizations/string/actionBatches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "actions": [
      {
        "body": {
          "name": "Group 1"
        },
        "operation": "create",
        "resource": "/networks/L_XXXXX/groupPolicies"
      }
    ],
    "confirmed": true,
    "synchronous": false
  }'
```

`POST /organizations/{organizationId}/actionBatches`

Create an action batch

> Body parameter

```json
{
  "actions": [
    {
      "body": {
        "name": "Group 1"
      },
      "operation": "create",
      "resource": "/networks/L_XXXXX/groupPolicies"
    }
  ],
  "confirmed": true,
  "synchronous": false
}
```

<h3 id="create-an-action-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» actions|body|[object]|true|A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)|
|» » body|body|object|false|The body of the action|
|» » operation|body|string|true|The operation to be used|
|» » resource|body|string|true|Unique identifier for the resource to be acted on|
|» confirmed|body|boolean|false|Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false.|
|» synchronous|body|boolean|false|Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false.|

> Example responses

> 201 Response

```json
{
  "actions": [
    {
      "body": {
        "name": "Group 1"
      },
      "operation": "create",
      "resource": "/networks/L_XXXXX/groupPolicies"
    }
  ],
  "confirmed": true,
  "id": "123",
  "organizationId": "2930418",
  "status": {
    "completed": true,
    "createdResources": [
      {
        "id": 100,
        "uri": "/networks/L_XXXXX/groupPolicies/100"
      }
    ],
    "errors": [],
    "failed": false
  },
  "synchronous": false
}
```

<h3 id="create-an-action-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update an action batch

<a id="opIdupdateOrganizationActionBatch"></a>

> Code samples

```bash
curl https://example.com/organizations/string/actionBatches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "confirmed": true,
    "synchronous": false
  }'
```

`PUT /organizations/{organizationId}/actionBatches/{actionBatchId}`

Update an action batch

> Body parameter

```json
{
  "confirmed": true,
  "synchronous": false
}
```

<h3 id="update-an-action-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|actionBatchId|path|string|true|none|
|body|body|object|false|none|
|» confirmed|body|boolean|false|A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.|
|» synchronous|body|boolean|false|Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "body": {
        "name": "Group 1"
      },
      "operation": "create",
      "resource": "/networks/L_XXXXX/groupPolicies"
    }
  ],
  "confirmed": true,
  "id": "123",
  "organizationId": "2930418",
  "status": {
    "completed": false,
    "createdResources": [],
    "errors": [],
    "failed": false
  },
  "synchronous": false
}
```

<h3 id="update-an-action-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete an action batch

<a id="opIddeleteOrganizationActionBatch"></a>

> Code samples

```bash
curl https://example.com/organizations/string/actionBatches/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /organizations/{organizationId}/actionBatches/{actionBatchId}`

Delete an action batch

<h3 id="delete-an-action-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|actionBatchId|path|string|true|none|

<h3 id="delete-an-action-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-admins">Admins</h1>

## List the dashboard administrators in this organization

<a id="opIdgetOrganizationAdmins"></a>

> Code samples

```bash
curl https://example.com/organizations/string/admins \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/admins`

List the dashboard administrators in this organization

<h3 id="list-the-dashboard-administrators-in-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accountStatus": "ok",
    "authenticationMethod": "Email",
    "email": "miles@meraki.com",
    "hasApiKey": true,
    "id": "212406",
    "lastActive": 1526087474,
    "name": "Miles Meraki",
    "networks": [
      {
        "access": "full",
        "id": "N_24329156"
      }
    ],
    "orgAccess": "none",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ],
    "twoFactorAuthEnabled": false
  }
]
```

<h3 id="list-the-dashboard-administrators-in-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-dashboard-administrators-in-this-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a new dashboard administrator

<a id="opIdcreateOrganizationAdmin"></a>

> Code samples

```bash
curl https://example.com/organizations/string/admins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "email": "miles@meraki.com",
    "name": "Miles Meraki",
    "orgAccess": "none",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ]
  }'
```

`POST /organizations/{organizationId}/admins`

Create a new dashboard administrator

> Body parameter

```json
{
  "email": "miles@meraki.com",
  "name": "Miles Meraki",
  "orgAccess": "none",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="create-a-new-dashboard-administrator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» authenticationMethod|body|string|false|The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication|
|» email|body|string|true|The email of the dashboard administrator. This attribute can not be updated.|
|» name|body|string|true|The name of the dashboard administrator|
|» networks|body|[object]|false|The list of networks that the dashboard administrator has privileges on|
|» » access|body|string|true|The privilege of the dashboard administrator on the network|
|» » id|body|string|true|The network ID|
|» orgAccess|body|string|true|The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'|
|» tags|body|[object]|false|The list of tags that the dashboard administrator has privileges on|
|» » access|body|string|true|The privilege of the dashboard administrator on the tag|
|» » tag|body|string|true|The name of the tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authenticationMethod|Cisco SecureX Sign-On|
|» authenticationMethod|Email|
|» orgAccess|enterprise|
|» orgAccess|full|
|» orgAccess|none|
|» orgAccess|read-only|

> Example responses

> 201 Response

```json
{
  "accountStatus": "ok",
  "authenticationMethod": "Email",
  "email": "miles@meraki.com",
  "hasApiKey": true,
  "id": "212406",
  "lastActive": 1526087474,
  "name": "Miles Meraki",
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ],
  "twoFactorAuthEnabled": false
}
```

<h3 id="create-a-new-dashboard-administrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update an administrator

<a id="opIdupdateOrganizationAdmin"></a>

> Code samples

```bash
curl https://example.com/organizations/string/admins/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "Miles Meraki",
    "orgAccess": "none",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ]
  }'
```

`PUT /organizations/{organizationId}/admins/{adminId}`

Update an administrator

> Body parameter

```json
{
  "name": "Miles Meraki",
  "orgAccess": "none",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="update-an-administrator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|adminId|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|The name of the dashboard administrator|
|» networks|body|[object]|false|The list of networks that the dashboard administrator has privileges on|
|» » access|body|string|true|The privilege of the dashboard administrator on the network|
|» » id|body|string|true|The network ID|
|» orgAccess|body|string|false|The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'|
|» tags|body|[object]|false|The list of tags that the dashboard administrator has privileges on|
|» » access|body|string|true|The privilege of the dashboard administrator on the tag|
|» » tag|body|string|true|The name of the tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» orgAccess|enterprise|
|» orgAccess|full|
|» orgAccess|none|
|» orgAccess|read-only|

> Example responses

> 200 Response

```json
{
  "accountStatus": "ok",
  "authenticationMethod": "Email",
  "email": "miles@meraki.com",
  "hasApiKey": true,
  "id": "212406",
  "lastActive": 1526087474,
  "name": "Miles Meraki",
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ],
  "twoFactorAuthEnabled": false
}
```

<h3 id="update-an-administrator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Revoke all access for a dashboard administrator within this organization

<a id="opIddeleteOrganizationAdmin"></a>

> Code samples

```bash
curl https://example.com/organizations/string/admins/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /organizations/{organizationId}/admins/{adminId}`

Revoke all access for a dashboard administrator within this organization

<h3 id="revoke-all-access-for-a-dashboard-administrator-within-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|adminId|path|string|true|none|

<h3 id="revoke-all-access-for-a-dashboard-administrator-within-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-alert-settings">Alert settings</h1>

## Return the alert configuration for this network

<a id="opIdgetNetworkAlertSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/alertSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/alertSettings`

Return the alert configuration for this network

<h3 id="return-the-alert-configuration-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "alerts": [
    {
      "alertDestinations": {
        "allAdmins": false,
        "emails": [
          "miles@meraki.com"
        ],
        "httpServerIds": [
          "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
        ],
        "snmp": false
      },
      "enabled": true,
      "filters": {
        "timeout": 60
      },
      "type": "gatewayDown"
    }
  ],
  "defaultDestinations": {
    "allAdmins": true,
    "emails": [
      "miles@meraki.com"
    ],
    "httpServerIds": [
      "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
    ],
    "snmp": true
  }
}
```

<h3 id="return-the-alert-configuration-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the alert configuration for this network

<a id="opIdupdateNetworkAlertSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/alertSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "alerts": [
      {
        "alertDestinations": {
          "allAdmins": false,
          "emails": [
            "miles@meraki.com"
          ],
          "httpServerIds": [
            "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
          ],
          "snmp": false
        },
        "enabled": true,
        "filters": {
          "timeout": 60
        },
        "type": "gatewayDown"
      }
    ],
    "defaultDestinations": {
      "allAdmins": true,
      "emails": [
        "miles@meraki.com"
      ],
      "httpServerIds": [
        "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
      ],
      "snmp": true
    }
  }'
```

`PUT /networks/{networkId}/alertSettings`

Update the alert configuration for this network

> Body parameter

```json
{
  "alerts": [
    {
      "alertDestinations": {
        "allAdmins": false,
        "emails": [
          "miles@meraki.com"
        ],
        "httpServerIds": [
          "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
        ],
        "snmp": false
      },
      "enabled": true,
      "filters": {
        "timeout": 60
      },
      "type": "gatewayDown"
    }
  ],
  "defaultDestinations": {
    "allAdmins": true,
    "emails": [
      "miles@meraki.com"
    ],
    "httpServerIds": [
      "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
    ],
    "snmp": true
  }
}
```

<h3 id="update-the-alert-configuration-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» alerts|body|[object]|false|Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.|
|» » alertDestinations|body|object|false|A hash of destinations for this specific alert|
|» » » allAdmins|body|boolean|false|If true, then all network admins will receive emails for this alert|
|» » » emails|body|[string]|false|A list of emails that will receive information about the alert|
|» » » httpServerIds|body|[string]|false|A list of HTTP server IDs to send a Webhook to for this alert|
|» » » snmp|body|boolean|false|If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network|
|» » enabled|body|boolean|false|A boolean depicting if the alert is turned on or off|
|» » filters|body|object|false|A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.|
|» » type|body|string|true|The type of alert|
|» defaultDestinations|body|object|false|The network-wide destinations for all alerts on the network.|
|» » allAdmins|body|boolean|false|If true, then all network admins will receive emails.|
|» » emails|body|[string]|false|A list of emails that will recieve the alert(s).|
|» » httpServerIds|body|[string]|false|A list of HTTP server IDs to send a Webhook to|
|» » snmp|body|boolean|false|If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.|

> Example responses

> 200 Response

```json
{
  "alerts": [
    {
      "alertDestinations": {
        "allAdmins": false,
        "emails": [
          "miles@meraki.com"
        ],
        "httpServerIds": [
          "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
        ],
        "snmp": false
      },
      "enabled": true,
      "filters": {
        "timeout": 60
      },
      "type": "gatewayDown"
    }
  ],
  "defaultDestinations": {
    "allAdmins": true,
    "emails": [
      "miles@meraki.com"
    ],
    "httpServerIds": [
      "aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vd2ViaG9va3M="
    ],
    "snmp": true
  }
}
```

<h3 id="update-the-alert-configuration-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-bluetooth-clients">Bluetooth clients</h1>

## List the Bluetooth clients seen by APs in this network

<a id="opIdgetNetworkBluetoothClients"></a>

> Code samples

```bash
curl https://example.com/networks/string/bluetoothClients \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/bluetoothClients`

List the Bluetooth clients seen by APs in this network

<h3 id="list-the-bluetooth-clients-seen-by-aps-in-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 7 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|includeConnectivityHistory|query|boolean|false|Include the connectivity history for this client|

> Example responses

> 200 Response

```json
[
  {
    "deviceName": "Bose QuietComfort 35",
    "id": "1284392014819",
    "inSightAlert": false,
    "lastSeen": 1526087474,
    "mac": "22:33:44:55:66:77",
    "manufacturer": "Bose",
    "name": "Miles's phone",
    "networkId": "N_24329156",
    "outOfSightAlert": false,
    "seenByDeviceMac": "00:11:22:33:44:55",
    "tags": [
      "tag1",
      "tag2"
    ]
  }
]
```

<h3 id="list-the-bluetooth-clients-seen-by-aps-in-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-bluetooth-clients-seen-by-aps-in-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a Bluetooth client

<a id="opIdgetNetworkBluetoothClient"></a>

> Code samples

```bash
curl https://example.com/networks/string/bluetoothClients/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/bluetoothClients/{bluetoothClientId}`

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

<h3 id="return-a-bluetooth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|bluetoothClientId|path|string|true|none|
|includeConnectivityHistory|query|boolean|false|Include the connectivity history for this client|
|connectivityHistoryTimespan|query|integer|false|The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.|

> Example responses

> 200 Response

```json
{
  "deviceName": "Bose QuietComfort 35",
  "id": "1284392014819",
  "inSightAlert": false,
  "lastSeen": 1526087474,
  "mac": "22:33:44:55:66:77",
  "manufacturer": "Bose",
  "name": "Miles's phone",
  "networkId": "N_24329156",
  "outOfSightAlert": false,
  "seenByDeviceMac": "00:11:22:33:44:55",
  "tags": [
    "tag1",
    "tag2"
  ]
}
```

<h3 id="return-a-bluetooth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-bluetooth-settings">Bluetooth settings</h1>

## Update the bluetooth settings for a wireless device

<a id="opIdupdateDeviceWirelessBluetoothSettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/wireless/bluetooth/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "major": 13,
    "minor": 125,
    "uuid": "00000000-0000-0000-000-000000000000"
  }'
```

`PUT /devices/{serial}/wireless/bluetooth/settings`

Update the bluetooth settings for a wireless device

> Body parameter

```json
{
  "major": 13,
  "minor": 125,
  "uuid": "00000000-0000-0000-000-000000000000"
}
```

<h3 id="update-the-bluetooth-settings-for-a-wireless-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|false|none|
|» major|body|integer|false|Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|
|» minor|body|integer|false|Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|
|» uuid|body|string|false|Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|

> Example responses

> 200 Response

```json
{
  "major": 13,
  "minor": 125,
  "uuid": "00000000-0000-0000-000-000000000000"
}
```

<h3 id="update-the-bluetooth-settings-for-a-wireless-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-bluetooth-settings-for-a-wireless-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|major|integer|false|none|Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|
|minor|integer|false|none|Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|
|uuid|string|false|none|Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the Bluetooth settings for a network. &lt;a href=&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.

<a id="opIdgetNetworkBluetoothSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/bluetoothSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/bluetoothSettings`

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

<h3 id="return-the-bluetooth-settings-for-a-network-a-hrefhttpsdocumentationmerakicommrbluetoothbluetoothlowenergyblebluetooth-settingsa-must-be-enabled-on-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "advertisingEnabled": true,
  "major": 1,
  "majorMinorAssignmentMode": "Non-unique",
  "minor": 1,
  "scanningEnabled": true,
  "uuid": "00000000-0000-0000-000-000000000000"
}
```

<h3 id="return-the-bluetooth-settings-for-a-network-a-hrefhttpsdocumentationmerakicommrbluetoothbluetoothlowenergyblebluetooth-settingsa-must-be-enabled-on-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-bluetooth-settings-for-a-network-a-hrefhttpsdocumentationmerakicommrbluetoothbluetoothlowenergyblebluetooth-settingsa-must-be-enabled-on-the-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisingEnabled|boolean|false|none|Whether APs will advertise beacons.|
|major|integer|false|none|The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|majorMinorAssignmentMode|string|false|none|The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')|
|minor|integer|false|none|The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|scanningEnabled|boolean|false|none|Whether APs will scan for Bluetooth enabled clients.|
|uuid|string|false|none|The UUID to be used in the beacon identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the Bluetooth settings for a network

<a id="opIdupdateNetworkBluetoothSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/bluetoothSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "advertisingEnabled": true,
    "major": 1,
    "majorMinorAssignmentMode": "Non-unique",
    "minor": 1,
    "scanningEnabled": true,
    "uuid": "00000000-0000-0000-000-000000000000"
  }'
```

`PUT /networks/{networkId}/bluetoothSettings`

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

> Body parameter

```json
{
  "advertisingEnabled": true,
  "major": 1,
  "majorMinorAssignmentMode": "Non-unique",
  "minor": 1,
  "scanningEnabled": true,
  "uuid": "00000000-0000-0000-000-000000000000"
}
```

<h3 id="update-the-bluetooth-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» advertisingEnabled|body|boolean|false|Whether APs will advertise beacons.|
|» major|body|integer|false|The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|» majorMinorAssignmentMode|body|string|false|The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')|
|» minor|body|integer|false|The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|» scanningEnabled|body|boolean|false|Whether APs will scan for Bluetooth enabled clients.|
|» uuid|body|string|false|The UUID to be used in the beacon identifier.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» majorMinorAssignmentMode|Non-unique|
|» majorMinorAssignmentMode|Unique|

> Example responses

> 200 Response

```json
{
  "advertisingEnabled": true,
  "major": 1,
  "majorMinorAssignmentMode": "Non-unique",
  "minor": 1,
  "scanningEnabled": true,
  "uuid": "00000000-0000-0000-000-000000000000"
}
```

<h3 id="update-the-bluetooth-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-bluetooth-settings-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisingEnabled|boolean|false|none|Whether APs will advertise beacons.|
|major|integer|false|none|The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|majorMinorAssignmentMode|string|false|none|The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique')|
|minor|integer|false|none|The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode.|
|scanningEnabled|boolean|false|none|Whether APs will scan for Bluetooth enabled clients.|
|uuid|string|false|none|The UUID to be used in the beacon identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-camera-quality-retention-profiles">Camera quality retention profiles</h1>

## List the quality retention profiles for this network

<a id="opIdgetNetworkCameraQualityRetentionProfiles"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/qualityRetentionProfiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/camera/qualityRetentionProfiles`

List the quality retention profiles for this network

<h3 id="list-the-quality-retention-profiles-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "audioRecordingEnabled": false,
    "cloudArchiveEnabled": false,
    "id": "1234",
    "maxRetentionDays": 7,
    "motionBasedRetentionEnabled": false,
    "motionDetectorVersion": 2,
    "name": "Sample quality retention profile",
    "networkId": "N_24329156",
    "restrictedBandwidthModeEnabled": true,
    "scheduleId": null,
    "videoSettings": {
      "MV12/MV22/MV72": {
        "quality": "High",
        "resolution": "1920x1080"
      },
      "MV12WE": {
        "quality": "High",
        "resolution": "1920x1080"
      },
      "MV21/MV71": {
        "quality": "High",
        "resolution": "1280x720"
      },
      "MV32": {
        "quality": "Enhanced",
        "resolution": "1080x1080"
      }
    }
  }
]
```

<h3 id="list-the-quality-retention-profiles-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-quality-retention-profiles-for-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Creates new quality retention profile for this network.

<a id="opIdcreateNetworkCameraQualityRetentionProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/qualityRetentionProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "Sample quality retention profile"
  }'
```

`POST /networks/{networkId}/camera/qualityRetentionProfiles`

Creates new quality retention profile for this network.

> Body parameter

```json
{
  "name": "Sample quality retention profile"
}
```

<h3 id="creates-new-quality-retention-profile-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» audioRecordingEnabled|body|boolean|false|Whether or not to record audio. Can be either true or false. Defaults to false.|
|» cloudArchiveEnabled|body|boolean|false|Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.|
|» maxRetentionDays|body|integer|false|The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.|
|» motionBasedRetentionEnabled|body|boolean|false|Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.|
|» motionDetectorVersion|body|integer|false|The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.|
|» name|body|string|true|The name of the new profile. Must be unique. This parameter is required.|
|» restrictedBandwidthModeEnabled|body|boolean|false|Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.|
|» scheduleId|body|string|false|Schedule for which this camera will record video, or 'null' to always record.|
|» videoSettings|body|object|false|Video quality and resolution settings for all the camera models.|
|» » MV12/MV22/MV72|body|object|false|Quality and resolution for MV12/MV22/MV72 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720' or '1920x1080'.|
|» » MV12WE|body|object|false|Quality and resolution for MV12WE camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720' or '1920x1080'.|
|» » MV13|body|object|false|Quality and resolution for MV13 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.|
|» » MV21/MV71|body|object|false|Quality and resolution for MV21/MV71 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720'.|
|» » MV22X/MV72X|body|object|false|Quality and resolution for MV22X/MV72X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.|
|» » MV32|body|object|false|Quality and resolution for MV32 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.|
|» » MV33|body|object|false|Quality and resolution for MV33 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.|
|» » MV52|body|object|false|Quality and resolution for MV52 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.|
|» » MV63|body|object|false|Quality and resolution for MV63 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.|
|» » MV63X|body|object|false|Quality and resolution for MV63X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.|
|» » MV93|body|object|false|Quality and resolution for MV93 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.|
|» » MV93X|body|object|false|Quality and resolution for MV93X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2058x2058|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » resolution|3840x2160|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » resolution|3840x2160|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » resolution|2880x2880|

> Example responses

> 200 Response

```json
{
  "audioRecordingEnabled": false,
  "cloudArchiveEnabled": false,
  "id": "1234",
  "maxRetentionDays": 7,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "name": "Sample quality retention profile",
  "networkId": "N_24329156",
  "restrictedBandwidthModeEnabled": true,
  "scheduleId": null,
  "videoSettings": {
    "MV12/MV22/MV72": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV12WE": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV21/MV71": {
      "quality": "High",
      "resolution": "1280x720"
    },
    "MV32": {
      "quality": "Enhanced",
      "resolution": "1080x1080"
    }
  }
}
```

<h3 id="creates-new-quality-retention-profile-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Retrieve a single quality retention profile

<a id="opIdgetNetworkCameraQualityRetentionProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/qualityRetentionProfiles/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`

Retrieve a single quality retention profile

<h3 id="retrieve-a-single-quality-retention-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qualityRetentionProfileId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "audioRecordingEnabled": false,
  "cloudArchiveEnabled": false,
  "id": "1234",
  "maxRetentionDays": 7,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "name": "Sample quality retention profile",
  "networkId": "N_24329156",
  "restrictedBandwidthModeEnabled": true,
  "scheduleId": null,
  "videoSettings": {
    "MV12/MV22/MV72": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV12WE": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV21/MV71": {
      "quality": "High",
      "resolution": "1280x720"
    },
    "MV32": {
      "quality": "Enhanced",
      "resolution": "1080x1080"
    }
  }
}
```

<h3 id="retrieve-a-single-quality-retention-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update an existing quality retention profile for this network.

<a id="opIdupdateNetworkCameraQualityRetentionProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/qualityRetentionProfiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{}'
```

`PUT /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`

Update an existing quality retention profile for this network.

> Body parameter

```json
{}
```

<h3 id="update-an-existing-quality-retention-profile-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qualityRetentionProfileId|path|string|true|none|
|body|body|object|false|none|
|» audioRecordingEnabled|body|boolean|false|Whether or not to record audio. Can be either true or false. Defaults to false.|
|» cloudArchiveEnabled|body|boolean|false|Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false.|
|» maxRetentionDays|body|integer|false|The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days.|
|» motionBasedRetentionEnabled|body|boolean|false|Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.|
|» motionDetectorVersion|body|integer|false|The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.|
|» name|body|string|false|The name of the new profile. Must be unique.|
|» restrictedBandwidthModeEnabled|body|boolean|false|Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras.|
|» scheduleId|body|string|false|Schedule for which this camera will record video, or 'null' to always record.|
|» videoSettings|body|object|false|Video quality and resolution settings for all the camera models.|
|» » MV12/MV22/MV72|body|object|false|Quality and resolution for MV12/MV22/MV72 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720' or '1920x1080'.|
|» » MV12WE|body|object|false|Quality and resolution for MV12WE camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720' or '1920x1080'.|
|» » MV13|body|object|false|Quality and resolution for MV13 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.|
|» » MV21/MV71|body|object|false|Quality and resolution for MV21/MV71 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720'.|
|» » MV22X/MV72X|body|object|false|Quality and resolution for MV22X/MV72X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.|
|» » MV32|body|object|false|Quality and resolution for MV32 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.|
|» » MV33|body|object|false|Quality and resolution for MV33 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.|
|» » MV52|body|object|false|Quality and resolution for MV52 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.|
|» » MV63|body|object|false|Quality and resolution for MV63 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.|
|» » MV63X|body|object|false|Quality and resolution for MV63X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.|
|» » MV93|body|object|false|Quality and resolution for MV93 camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.|
|» » MV93X|body|object|false|Quality and resolution for MV93X camera models.|
|» » » quality|body|string|true|Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.|
|» » » resolution|body|string|true|Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2058x2058|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1280x720|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » resolution|3840x2160|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1920x1080|
|» » » resolution|2688x1512|
|» » » resolution|3840x2160|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » quality|Enhanced|
|» » » quality|High|
|» » » quality|Standard|
|» » » resolution|1080x1080|
|» » » resolution|2112x2112|
|» » » resolution|2880x2880|

> Example responses

> 200 Response

```json
{
  "audioRecordingEnabled": false,
  "cloudArchiveEnabled": false,
  "id": "1234",
  "maxRetentionDays": 7,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "name": "Sample quality retention profile",
  "networkId": "N_24329156",
  "restrictedBandwidthModeEnabled": true,
  "scheduleId": null,
  "videoSettings": {
    "MV12/MV22/MV72": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV12WE": {
      "quality": "High",
      "resolution": "1920x1080"
    },
    "MV21/MV71": {
      "quality": "High",
      "resolution": "1280x720"
    },
    "MV32": {
      "quality": "Enhanced",
      "resolution": "1080x1080"
    }
  }
}
```

<h3 id="update-an-existing-quality-retention-profile-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete an existing quality retention profile for this network.

<a id="opIddeleteNetworkCameraQualityRetentionProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/qualityRetentionProfiles/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}`

Delete an existing quality retention profile for this network.

<h3 id="delete-an-existing-quality-retention-profile-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qualityRetentionProfileId|path|string|true|none|

<h3 id="delete-an-existing-quality-retention-profile-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-cameras">Cameras</h1>

## Returns quality and retention settings for the given camera

<a id="opIdgetDeviceCameraQualityAndRetentionSettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/qualityAndRetentionSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/qualityAndRetentionSettings`

Returns quality and retention settings for the given camera

<h3 id="returns-quality-and-retention-settings-for-the-given-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "audioRecordingEnabled": false,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "profileId": "1234",
  "quality": "Standard",
  "resolution": "1280x720",
  "restrictedBandwidthModeEnabled": false
}
```

<h3 id="returns-quality-and-retention-settings-for-the-given-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update quality and retention settings for the given camera

<a id="opIdupdateDeviceCameraQualityAndRetentionSettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/qualityAndRetentionSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "audioRecordingEnabled": false,
    "motionBasedRetentionEnabled": false,
    "motionDetectorVersion": 2,
    "profileId": "1234",
    "quality": "Standard",
    "resolution": "1280x720",
    "restrictedBandwidthModeEnabled": false
  }'
```

`PUT /devices/{serial}/camera/qualityAndRetentionSettings`

Update quality and retention settings for the given camera

> Body parameter

```json
{
  "audioRecordingEnabled": false,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "profileId": "1234",
  "quality": "Standard",
  "resolution": "1280x720",
  "restrictedBandwidthModeEnabled": false
}
```

<h3 id="update-quality-and-retention-settings-for-the-given-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|false|none|
|» audioRecordingEnabled|body|boolean|false|Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera|
|» motionBasedRetentionEnabled|body|boolean|false|Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera|
|» motionDetectorVersion|body|integer|false|The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.|
|» profileId|body|string|false|The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.|
|» quality|body|string|false|Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.|
|» resolution|body|string|false|Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080' or '2058x2058'. Not all resolutions are supported by every camera model.|
|» restrictedBandwidthModeEnabled|body|boolean|false|Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» motionDetectorVersion|1|
|» motionDetectorVersion|2|
|» quality|Enhanced|
|» quality|High|
|» quality|Standard|
|» resolution|1080x1080|
|» resolution|1280x720|
|» resolution|1920x1080|
|» resolution|2058x2058|

> Example responses

> 200 Response

```json
{
  "audioRecordingEnabled": false,
  "motionBasedRetentionEnabled": false,
  "motionDetectorVersion": 2,
  "profileId": "1234",
  "quality": "Standard",
  "resolution": "1280x720",
  "restrictedBandwidthModeEnabled": false
}
```

<h3 id="update-quality-and-retention-settings-for-the-given-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns video settings for the given camera

<a id="opIdgetDeviceCameraVideoSettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/video/settings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/video/settings`

Returns video settings for the given camera

<h3 id="returns-video-settings-for-the-given-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "externalRtspEnabled": true,
  "rtspUrl": "rtsp://10.0.0.1:9000/live"
}
```

<h3 id="returns-video-settings-for-the-given-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update video settings for the given camera

<a id="opIdupdateDeviceCameraVideoSettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/video/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "externalRtspEnabled": true
  }'
```

`PUT /devices/{serial}/camera/video/settings`

Update video settings for the given camera

> Body parameter

```json
{
  "externalRtspEnabled": true
}
```

<h3 id="update-video-settings-for-the-given-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|false|none|
|» externalRtspEnabled|body|boolean|false|Boolean indicating if external rtsp stream is exposed|

> Example responses

> 200 Response

```json
{
  "externalRtspEnabled": true,
  "rtspUrl": "rtsp://10.0.0.1:9000/live"
}
```

<h3 id="update-video-settings-for-the-given-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns a list of all camera recording schedules.

<a id="opIdgetNetworkCameraSchedules"></a>

> Code samples

```bash
curl https://example.com/networks/string/camera/schedules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/camera/schedules`

Returns a list of all camera recording schedules.

<h3 id="returns-a-list-of-all-camera-recording-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "123",
    "name": "Weekday schedule"
  },
  {
    "id": "124",
    "name": "Office hours"
  }
]
```

<h3 id="returns-a-list-of-all-camera-recording-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="returns-a-list-of-all-camera-recording-schedules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Generate a snapshot of what the camera sees at the specified time and return a link to that image.

<a id="opIdgenerateNetworkCameraSnapshot"></a>

> Code samples

```bash
curl https://example.com/networks/string/cameras/string/snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "fullframe": false,
    "timestamp": "2021-04-30T15:18:08Z"
  }'
```

`POST /networks/{networkId}/cameras/{serial}/snapshot`

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

> Body parameter

```json
{
  "fullframe": false,
  "timestamp": "2021-04-30T15:18:08Z"
}
```

<h3 id="generate-a-snapshot-of-what-the-camera-sees-at-the-specified-time-and-return-a-link-to-that-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|body|body|object|false|none|
|» fullframe|body|boolean|false|[optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.|
|» timestamp|body|string(date-time)|false|[optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.|

> Example responses

> 202 Response

```json
{
  "expiry": "Access to the image will expire at 2018-12-11T03:12:39Z.",
  "url": "https://spn4.meraki.com/stream/jpeg/snapshot/b2d123asdf423qd22d2"
}
```

<h3 id="generate-a-snapshot-of-what-the-camera-sees-at-the-specified-time-and-return-a-link-to-that-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns video link to the specified camera

<a id="opIdgetNetworkCameraVideoLink"></a>

> Code samples

```bash
curl https://example.com/networks/string/cameras/string/videoLink \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/cameras/{serial}/videoLink`

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

<h3 id="returns-video-link-to-the-specified-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|timestamp|query|string|false|[optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time.|

> Example responses

> 200 Response

```json
{
  "url": "https://nxx.meraki.com/office-cameras/n/bs0a1k/manage/nodes/new_list/29048243992402?timestamp=1535732570077"
}
```

<h3 id="returns-video-link-to-the-specified-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-change-log">Change log</h1>

## View the Change Log for your organization

<a id="opIdgetOrganizationConfigurationChanges"></a>

> Code samples

```bash
curl https://example.com/organizations/string/configurationChanges \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/configurationChanges`

View the Change Log for your organization

<h3 id="view-the-change-log-for-your-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 365 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 365 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|networkId|query|string|false|Filters on the given network|
|adminId|query|string|false|Filters on the given Admin|

> Example responses

> 200 Response

```json
[
  {
    "adminEmail": "miles@meraki.com",
    "adminId": "212406",
    "adminName": "Miles Meraki",
    "label": "PUT /api/v1/organizations/2930418",
    "newValue": "{\"id\":\"2930418\",\"name\":\"My organization changed\",\"url\":\"https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview\"}",
    "oldValue": "{\"id\":\"2930418\",\"name\":\"My organization\",\"url\":\"https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview\"}",
    "page": "via API",
    "ts": "2018-02-11T00:00:00.090210Z"
  }
]
```

<h3 id="view-the-change-log-for-your-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="view-the-change-log-for-your-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-clients">Clients</h1>

## List the clients of a device, up to a maximum of a month ago

<a id="opIdgetDeviceClients"></a>

> Code samples

```bash
curl https://example.com/devices/string/clients \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/clients`

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

<h3 id="list-the-clients-of-a-device-up-to-a-maximum-of-a-month-ago-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.|

> Example responses

> 200 Response

```json
[
  {
    "description": "Miles's phone",
    "dhcpHostname": "MilesPhone",
    "id": "k74272e",
    "ip": "1.2.3.4",
    "mac": "22:33:44:55:66:77",
    "mdnsName": "Miles's phone",
    "switchport": null,
    "usage": {
      "recv": 61,
      "sent": 138
    },
    "user": "milesmeraki",
    "vlan": 255
  }
]
```

<h3 id="list-the-clients-of-a-device-up-to-a-maximum-of-a-month-ago-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-clients-of-a-device-up-to-a-maximum-of-a-month-ago-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the clients that have used this network in the timespan

<a id="opIdgetNetworkClients"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients`

List the clients that have used this network in the timespan

<h3 id="list-the-clients-that-have-used-this-network-in-the-timespan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
{
  "description": "Miles's phone",
  "firstSeen": 1518365681,
  "groupPolicy8021x": "Student_Access",
  "id": "k74272e",
  "ip": "1.2.3.4",
  "ip6": "2001:db8:3c4d:15::1",
  "ip6Local": "fe80:0:0:0:1430:aac1:6826:75ab",
  "lastSeen": 1526087474,
  "mac": "22:33:44:55:66:77",
  "manufacturer": "Apple",
  "notes": "My AP's note",
  "os": "iOS",
  "recentDeviceMac": "22:33:44:55:66:77",
  "recentDeviceName": "Q234-ABCD-5678",
  "recentDeviceSerial": "00:11:22:33:44:55",
  "smInstalled": true,
  "ssid": "My SSID",
  "status": "Online",
  "switchport": "My switch port",
  "usage": {
    "recv": 61,
    "sent": 138
  },
  "user": "milesmeraki",
  "vlan": "100"
}
```

<h3 id="list-the-clients-that-have-used-this-network-in-the-timespan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-clients-that-have-used-this-network-in-the-timespan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Short description of the client|
|firstSeen|integer|false|none|Timestamp client was first seen in the network|
|groupPolicy8021x|string|false|none|802.1x group policy of the client|
|id|string|false|none|The ID of the client|
|ip|string|false|none|The IP address of the client|
|ip6|string|false|none|The IPv6 address of the client|
|ip6Local|string|false|none|Local IPv6 address of the client|
|lastSeen|integer|false|none|Timestamp client was last seen in the network|
|mac|string|false|none|The MAC address of the client|
|manufacturer|string|false|none|Manufacturer of the client|
|notes|string|false|none|Notes on the client|
|os|string|false|none|The operating system of the client|
|recentDeviceMac|string|false|none|The MAC address of the node that the device was last connected to|
|recentDeviceName|string|false|none|The name of the node the device was last connected to|
|recentDeviceSerial|string|false|none|The serial of the node the device was last connected to|
|smInstalled|boolean|false|none|Status of SM for the client|
|ssid|string|false|none|The name of the SSID that the client is connected to|
|status|string|false|none|The connection status of the client|
|switchport|string|false|none|The switch port that the client is connected to|
|usage|object|false|none|Usage, sent and received|
|» recv|number(float)|false|none|Usage received by the client|
|» sent|number(float)|false|none|Usage sent by the client|
|user|string|false|none|The username of the user of the client|
|vlan|string|false|none|The name of the VLAN that the client is connected to|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Offline|
|status|Online|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Provisions a client with a name and policy

<a id="opIdprovisionNetworkClients"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/provision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "devicePolicy": "Group policy",
    "groupPolicyId": "101",
    "mac": "00:11:22:33:44:55",
    "name": "Miles'\''s phone"
  }'
```

`POST /networks/{networkId}/clients/provision`

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

> Body parameter

```json
{
  "devicePolicy": "Group policy",
  "groupPolicyId": "101",
  "mac": "00:11:22:33:44:55",
  "name": "Miles's phone"
}
```

<h3 id="provisions-a-client-with-a-name-and-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.|
|» groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» mac|body|string|true|The MAC address of the client. Required.|
|» name|body|string|false|The display name for the client. Optional. Limited to 255 bytes.|
|» policiesBySecurityAppliance|body|object|false|An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)|
|» » devicePolicy|body|string|false|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required.|
|» policiesBySsid|body|object|false|An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy|
|» » 0|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 1|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 2|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 3|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 4|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 5|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 6|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 7|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 8|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 9|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 10|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 11|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 12|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 13|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|
|» » 14|body|object|false|The number for the SSID|
|» » » devicePolicy|body|string|true|The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» » » groupPolicyId|body|string|false|The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» devicePolicy|Allowed|
|» devicePolicy|Blocked|
|» devicePolicy|Group policy|
|» devicePolicy|Normal|
|» devicePolicy|Per connection|
|» devicePolicy|Whitelisted|
|» » devicePolicy|Blocked|
|» » devicePolicy|Normal|
|» » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|
|» » » devicePolicy|Blocked|
|» » » devicePolicy|Group policy|
|» » » devicePolicy|Normal|
|» » » devicePolicy|Whitelisted|

> Example responses

> 201 Response

```json
{
  "clientId": "k74272e",
  "devicePolicy": "Group policy",
  "groupPolicyId": "101",
  "mac": "00:11:22:33:44:55",
  "name": "Miles's phone"
}
```

<h3 id="provisions-a-client-with-a-name-and-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the client associated with the given identifier

<a id="opIdgetNetworkClient"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}`

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<h3 id="return-the-client-associated-with-the-given-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cdp": null,
  "clientVpnConnections": [
    {
      "connectedAt": 1522613355,
      "disconnectedAt": 1522613360,
      "remoteIp": "1.2.3.4"
    }
  ],
  "description": "Miles's phone",
  "firstSeen": 1518365681,
  "id": "k74272e",
  "ip": "1.2.3.4",
  "ip6": "",
  "lastSeen": 1526087474,
  "lldp": [
    [
      "System name",
      "Some system name"
    ],
    [
      "System description",
      "Some system description"
    ],
    [
      "Port ID",
      "1"
    ],
    [
      "Chassis ID",
      "00:18:0a:00:00:00"
    ],
    [
      "Port description",
      "eth0"
    ],
    [
      "System capabilities",
      "Two-port MAC Relay"
    ]
  ],
  "mac": "22:33:44:55:66:77",
  "manufacturer": "Apple",
  "os": "iOS",
  "recentDeviceMac": "00:11:22:33:44:55",
  "smInstalled": true,
  "ssid": "My SSID",
  "status": "Online",
  "switchport": null,
  "user": "null",
  "vlan": "255",
  "wirelessCapabilities": "802.11ac - 2.4 and 5 GHz"
}
```

<h3 id="return-the-client-associated-with-the-given-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the events associated with this client

<a id="opIdgetNetworkClientEvents"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/events \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/events`

Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<h3 id="return-the-events-associated-with-this-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 100. Default is 100.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "details": {
      "on_packet": "true",
      "vap": "1"
    },
    "deviceSerial": "Q234-ABCD-5678",
    "occurredAt": 1518365681,
    "type": "l3roaming_assoc_start"
  }
]
```

<h3 id="return-the-events-associated-with-this-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-events-associated-with-this-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the latency history for a client

<a id="opIdgetNetworkClientLatencyHistory"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/latencyHistory \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/latencyHistory`

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

<h3 id="return-the-latency-history-for-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 791 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 791 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.|
|resolution|query|integer|false|The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.|

> Example responses

> 200 Response

```json
[
  {
    "latencyBinsByCategory": {
      "backgroundTraffic": {
        "0.5": 41750,
        "1.0": 21552,
        "1024.0": 0,
        "128.0": 0,
        "16.0": 0,
        "2.0": 59940,
        "2048.0": 0,
        "256.0": 1896,
        "32.0": 9954,
        "4.0": 146622,
        "512.0": 0,
        "64.0": 0,
        "8.0": 57354
      },
      "bestEffortTraffic": {
        "0.5": 1840899,
        "1.0": 1644506,
        "1024.0": 4943,
        "128.0": 191977,
        "16.0": 1329568,
        "2.0": 629958,
        "2048.0": 12072,
        "256.0": 30560,
        "32.0": 282168,
        "4.0": 449564,
        "512.0": 26032,
        "64.0": 97573,
        "8.0": 2009658
      },
      "videoTraffic": {
        "0.5": 0,
        "1.0": 0,
        "1024.0": 0,
        "128.0": 0,
        "16.0": 0,
        "2.0": 0,
        "2048.0": 0,
        "256.0": 0,
        "32.0": 0,
        "4.0": 0,
        "512.0": 0,
        "64.0": 0,
        "8.0": 0
      },
      "voiceTraffic": {
        "0.5": 716,
        "1.0": 948,
        "1024.0": 0,
        "128.0": 0,
        "16.0": 0,
        "2.0": 474,
        "2048.0": 0,
        "256.0": 0,
        "32.0": 0,
        "4.0": 78,
        "512.0": 0,
        "64.0": 0,
        "8.0": 0
      }
    },
    "t0": 1550534400,
    "t1": 1550620800
  }
]
```

<h3 id="return-the-latency-history-for-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-latency-history-for-a-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the policy assigned to a client on the network

<a id="opIdgetNetworkClientPolicy"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/policy \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/policy`

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<h3 id="return-the-policy-assigned-to-a-client-on-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "groupPolicyId": "101",
  "mac": "00:11:22:33:44:55",
  "type": "Group policy"
}
```

<h3 id="return-the-policy-assigned-to-a-client-on-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the policy assigned to a client on the network

<a id="opIdupdateNetworkClientPolicy"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "groupPolicyId": "101",
    "mac": "00:11:22:33:44:55",
    "type": "Group policy"
  }'
```

`PUT /networks/{networkId}/clients/{clientId}/policy`

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

> Body parameter

```json
{
  "groupPolicyId": "101",
  "mac": "00:11:22:33:44:55",
  "type": "Group policy"
}
```

<h3 id="update-the-policy-assigned-to-a-client-on-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|body|body|object|true|none|
|» devicePolicy|body|string|true|The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.|
|» groupPolicyId|body|string|false|[optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID.|

> Example responses

> 200 Response

```json
{
  "groupPolicyId": "101",
  "mac": "00:11:22:33:44:55",
  "type": "Group policy"
}
```

<h3 id="update-the-policy-assigned-to-a-client-on-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the splash authorization for a client, for each SSID they've associated with through splash

<a id="opIdgetNetworkClientSplashAuthorizationStatus"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/splashAuthorizationStatus \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus`

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<h3 id="return-the-splash-authorization-for-a-client-for-each-ssid-theyve-associated-with-through-splash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ssids": {
    "0": {
      "authorizedAt": "2017-07-19 16:24:13 UTC",
      "expiresAt": "2017-07-20 16:24:13 UTC",
      "isAuthorized": true
    },
    "2": {
      "isAuthorized": false
    }
  }
}
```

<h3 id="return-the-splash-authorization-for-a-client-for-each-ssid-theyve-associated-with-through-splash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a client's splash authorization

<a id="opIdupdateNetworkClientSplashAuthorizationStatus"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/splashAuthorizationStatus \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ssids": {
      "0": {
        "isAuthorized": true
      },
      "2": {
        "isAuthorized": false
      }
    }
  }'
```

`PUT /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus`

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

> Body parameter

```json
{
  "ssids": {
    "0": {
      "isAuthorized": true
    },
    "2": {
      "isAuthorized": false
    }
  }
}
```

<h3 id="update-a-clients-splash-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|body|body|object|true|none|
|» ssids|body|object|true|The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs|
|» » 0|body|object|false|Splash authorization for SSID 0|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 1|body|object|false|Splash authorization for SSID 1|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 2|body|object|false|Splash authorization for SSID 2|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 3|body|object|false|Splash authorization for SSID 3|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 4|body|object|false|Splash authorization for SSID 4|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 5|body|object|false|Splash authorization for SSID 5|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 6|body|object|false|Splash authorization for SSID 6|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 7|body|object|false|Splash authorization for SSID 7|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 8|body|object|false|Splash authorization for SSID 8|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 9|body|object|false|Splash authorization for SSID 9|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 10|body|object|false|Splash authorization for SSID 10|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 11|body|object|false|Splash authorization for SSID 11|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 12|body|object|false|Splash authorization for SSID 12|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 13|body|object|false|Splash authorization for SSID 13|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|
|» » 14|body|object|false|Splash authorization for SSID 14|
|» » » isAuthorized|body|boolean|false|New authorization status for the SSID (true, false).|

> Example responses

> 200 Response

```json
{
  "ssids": {
    "0": {
      "authorizedAt": "2017-07-19 16:24:13 UTC",
      "expiresAt": "2017-07-20 16:24:13 UTC",
      "isAuthorized": true
    },
    "2": {
      "isAuthorized": false
    }
  }
}
```

<h3 id="update-a-clients-splash-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the client's daily usage history

<a id="opIdgetNetworkClientUsageHistory"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/usageHistory \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/usageHistory`

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<h3 id="return-the-clients-daily-usage-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "received": 680,
    "sent": 500,
    "ts": 1518365681
  }
]
```

<h3 id="return-the-clients-daily-usage-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-clients-daily-usage-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-config-templates">Config templates</h1>

## List the configuration templates for this organization

<a id="opIdgetOrganizationConfigTemplates"></a>

> Code samples

```bash
curl https://example.com/organizations/string/configTemplates \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/configTemplates`

List the configuration templates for this organization

<h3 id="list-the-configuration-templates-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "N_24329156",
    "name": "My config template",
    "productTypes": [
      "appliance",
      "switch",
      "wireless"
    ],
    "timeZone": "America/Los_Angeles"
  }
]
```

<h3 id="list-the-configuration-templates-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-configuration-templates-for-this-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Remove a configuration template

<a id="opIddeleteOrganizationConfigTemplate"></a>

> Code samples

```bash
curl https://example.com/organizations/string/configTemplates/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /organizations/{organizationId}/configTemplates/{configTemplateId}`

Remove a configuration template

<h3 id="remove-a-configuration-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|configTemplateId|path|string|true|none|

<h3 id="remove-a-configuration-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-content-filtering-categories">Content filtering categories</h1>

## List all available content filtering categories for an MX network

<a id="opIdgetNetworkContentFilteringCategories"></a>

> Code samples

```bash
curl https://example.com/networks/string/contentFiltering/categories \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/contentFiltering/categories`

List all available content filtering categories for an MX network

<h3 id="list-all-available-content-filtering-categories-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "id": "meraki:contentFiltering/category/1",
      "name": "Real Estate"
    },
    {
      "id": "meraki:contentFiltering/category/3",
      "name": "Financial Services"
    },
    "...",
    {
      "id": "meraki:contentFiltering/category/11",
      "name": "Adult and Pornography"
    }
  ]
}
```

<h3 id="list-all-available-content-filtering-categories-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-content-filtering-rules">Content filtering rules</h1>

## Return the content filtering settings for an MX network

<a id="opIdgetNetworkContentFiltering"></a>

> Code samples

```bash
curl https://example.com/networks/string/contentFiltering \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/contentFiltering`

Return the content filtering settings for an MX network

<h3 id="return-the-content-filtering-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "allowedUrlPatterns": [
    "http://www.example.org",
    "http://help.com.au"
  ],
  "blockedUrlCategories": [
    {
      "id": "meraki:contentFiltering/category/1",
      "name": "Real Estate"
    },
    {
      "id": "meraki:contentFiltering/category/7",
      "name": "Shopping"
    }
  ],
  "blockedUrlPatterns": [
    "http://www.example.com",
    "http://www.betting.com"
  ],
  "urlCategoryListSize": "topSites"
}
```

<h3 id="return-the-content-filtering-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the content filtering settings for an MX network

<a id="opIdupdateNetworkContentFiltering"></a>

> Code samples

```bash
curl https://example.com/networks/string/contentFiltering \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "allowedUrlPatterns": [
      "http://www.example.org",
      "http://help.com.au"
    ],
    "blockedUrlCategories": [
      "meraki:contentFiltering/category/1",
      "meraki:contentFiltering/category/7"
    ],
    "blockedUrlPatterns": [
      "http://www.example.com",
      "http://www.betting.com"
    ],
    "urlCategoryListSize": "topSites"
  }'
```

`PUT /networks/{networkId}/contentFiltering`

Update the content filtering settings for an MX network

> Body parameter

```json
{
  "allowedUrlPatterns": [
    "http://www.example.org",
    "http://help.com.au"
  ],
  "blockedUrlCategories": [
    "meraki:contentFiltering/category/1",
    "meraki:contentFiltering/category/7"
  ],
  "blockedUrlPatterns": [
    "http://www.example.com",
    "http://www.betting.com"
  ],
  "urlCategoryListSize": "topSites"
}
```

<h3 id="update-the-content-filtering-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» allowedUrlPatterns|body|[string]|false|A list of URL patterns that are allowed|
|» blockedUrlCategories|body|[string]|false|A list of URL categories to block|
|» blockedUrlPatterns|body|[string]|false|A list of URL patterns that are blocked|
|» urlCategoryListSize|body|string|false|URL category list size which is either 'topSites' or 'fullList'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» urlCategoryListSize|fullList|
|» urlCategoryListSize|topSites|

> Example responses

> 200 Response

```json
{
  "allowedUrlPatterns": [
    "http://www.example.org",
    "http://help.com.au"
  ],
  "blockedUrlCategories": [
    {
      "id": "meraki:contentFiltering/category/1",
      "name": "Real Estate"
    },
    {
      "id": "meraki:contentFiltering/category/7",
      "name": "Shopping"
    }
  ],
  "blockedUrlPatterns": [
    "http://www.example.com",
    "http://www.betting.com"
  ],
  "urlCategoryListSize": "topSites"
}
```

<h3 id="update-the-content-filtering-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-devices">Devices</h1>

## Cycle a set of switch ports

<a id="opIdcycleDeviceSwitchPorts"></a>

> Code samples

```bash
curl https://example.com/devices/string/switch/ports/cycle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ports": [
      "1",
      "2-5",
      "1_MA-MOD-8X10G_1",
      "1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8"
    ]
  }'
```

`POST /devices/{serial}/switch/ports/cycle`

Cycle a set of switch ports

> Body parameter

```json
{
  "ports": [
    "1",
    "2-5",
    "1_MA-MOD-8X10G_1",
    "1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8"
  ]
}
```

<h3 id="cycle-a-set-of-switch-ports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|true|none|
|» ports|body|[string]|true|List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]|

> Example responses

> 200 Response

```json
{
  "ports": [
    "1",
    "2-5",
    "1_MA-MOD-8X10G_1",
    "1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8"
  ]
}
```

<h3 id="cycle-a-set-of-switch-ports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the devices in a network

<a id="opIdgetNetworkDevices"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices`

List the devices in a network

<h3 id="list-the-devices-in-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "address": "1600 Pennsylvania Ave",
    "beaconIdParams": {
      "major": 5,
      "minor": 3,
      "uuid": "00000000-0000-0000-0000-000000000000"
    },
    "firmware": "wireless-25-14",
    "floorPlanId": "g_1234567",
    "lanIp": "1.2.3.4",
    "lat": 37.4180951010362,
    "lng": -122.098531723022,
    "mac": "00:11:22:33:44:55",
    "model": "MR34",
    "name": "My AP",
    "networkId": "N_24329156",
    "notes": "My AP's note",
    "serial": "Q234-ABCD-5678",
    "tags": " recently-added "
  }
]
```

<h3 id="list-the-devices-in-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-devices-in-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)

<a id="opIdclaimNetworkDevices"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "serials": [
      "Q234-ABCD-0001",
      "Q234-ABCD-0002",
      "Q234-ABCD-0003"
    ]
  }'
```

`POST /networks/{networkId}/devices/claim`

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)

> Body parameter

```json
{
  "serials": [
    "Q234-ABCD-0001",
    "Q234-ABCD-0002",
    "Q234-ABCD-0003"
  ]
}
```

<h3 id="claim-devices-into-a-network-note-for-recently-claimed-devices-it-may-take-a-few-minutes-for-api-requests-against-that-device-to-succeed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» serial|body|string|false|[DEPRECATED] The serial of a device to claim|
|» serials|body|[string]|false|A list of serials of devices to claim|

<h3 id="claim-devices-into-a-network-note-for-recently-claimed-devices-it-may-take-a-few-minutes-for-api-requests-against-that-device-to-succeed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a single device

<a id="opIdgetNetworkDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}`

Return a single device

<h3 id="return-a-single-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "address": "1600 Pennsylvania Ave",
  "beaconIdParams": {
    "major": 5,
    "minor": 3,
    "uuid": "00000000-0000-0000-0000-000000000000"
  },
  "firmware": "wireless-25-14",
  "floorPlanId": "g_1234567",
  "lanIp": "1.2.3.4",
  "lat": 37.4180951010362,
  "lng": -122.098531723022,
  "mac": "00:11:22:33:44:55",
  "model": "MR34",
  "name": "My AP",
  "networkId": "N_24329156",
  "notes": "My AP's note",
  "serial": "Q234-ABCD-5678",
  "tags": " recently-added "
}
```

<h3 id="return-a-single-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the attributes of a device

<a id="opIdupdateNetworkDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "lat": 37.4180951010362,
    "lng": -122.098531723022,
    "mac": "00:11:22:33:44:55",
    "name": "My AP",
    "serial": "Q234-ABCD-5678",
    "tags": " recently-added "
  }'
```

`PUT /networks/{networkId}/devices/{serial}`

Update the attributes of a device

> Body parameter

```json
{
  "lat": 37.4180951010362,
  "lng": -122.098531723022,
  "mac": "00:11:22:33:44:55",
  "name": "My AP",
  "serial": "Q234-ABCD-5678",
  "tags": " recently-added "
}
```

<h3 id="update-the-attributes-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|body|body|object|false|none|
|» address|body|string|false|The address of a device|
|» floorPlanId|body|string|false|The floor plan to associate to this device. null disassociates the device from the floorplan.|
|» lat|body|number(float)|false|The latitude of a device|
|» lng|body|number(float)|false|The longitude of a device|
|» moveMapMarker|body|boolean|false|Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.|
|» name|body|string|false|The name of a device|
|» notes|body|string|false|The notes for the device. String. Limited to 255 characters.|
|» switchProfileId|body|string|false|The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.|
|» tags|body|string|false|The tags of a device|

> Example responses

> 200 Response

```json
{
  "address": "1600 Pennsylvania Ave",
  "beaconIdParams": {
    "major": 5,
    "minor": 3,
    "uuid": "00000000-0000-0000-0000-000000000000"
  },
  "firmware": "wireless-25-14",
  "floorPlanId": "g_1234567",
  "lanIp": "1.2.3.4",
  "lat": 37.4180951010362,
  "lng": -122.098531723022,
  "mac": "00:11:22:33:44:55",
  "model": "MR34",
  "name": "My AP",
  "networkId": "N_24329156",
  "notes": "My AP's note",
  "serial": "Q234-ABCD-5678",
  "tags": " recently-added "
}
```

<h3 id="update-the-attributes-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Get the uplink loss percentage and latency in milliseconds for a wired network device.

<a id="opIdgetNetworkDeviceLossAndLatencyHistory"></a>

> Code samples

```bash
curl 'https://example.com/networks/string/devices/string/lossAndLatencyHistory?ip=string' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/lossAndLatencyHistory`

Get the uplink loss percentage and latency in milliseconds for a wired network device.

<h3 id="get-the-uplink-loss-percentage-and-latency-in-milliseconds-for-a-wired-network-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 60 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 31 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.|
|resolution|query|integer|false|The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.|
|uplink|query|string|false|The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.|
|ip|query|string|true|The destination IP used to obtain the requested stats. This is required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|uplink|cellular|
|uplink|wan1|
|uplink|wan2|

> Example responses

> 200 Response

```json
[
  {
    "endTime": "2018-10-09T22:19:27Z",
    "latencyMs": 324.12,
    "lossPercent": 5.23,
    "startTime": "2018-10-09T22:18:27Z"
  },
  {
    "endTime": "2018-10-09T22:20:27Z",
    "latencyMs": 43,
    "lossPercent": 1,
    "startTime": "2018-10-09T22:19:27Z"
  },
  {
    "endTime": "2018-10-09T22:21:27Z",
    "latencyMs": 44.02,
    "lossPercent": 0.01,
    "startTime": "2018-10-09T22:20:27Z"
  }
]
```

<h3 id="get-the-uplink-loss-percentage-and-latency-in-milliseconds-for-a-wired-network-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="get-the-uplink-loss-percentage-and-latency-in-milliseconds-for-a-wired-network-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the performance score for a single MX

<a id="opIdgetNetworkDevicePerformance"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/performance \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/performance`

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

<h3 id="return-the-performance-score-for-a-single-mx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "perfScore": 10
}
```

<h3 id="return-the-performance-score-for-a-single-mx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Reboot a device

<a id="opIdrebootNetworkDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/reboot \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/devices/{serial}/reboot`

Reboot a device

<h3 id="reboot-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="reboot-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Remove a single device

<a id="opIdremoveNetworkDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/remove \
  -X POST \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/devices/{serial}/remove`

Remove a single device

<h3 id="remove-a-single-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

<h3 id="remove-a-single-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the uplink information for a device.

<a id="opIdgetNetworkDeviceUplink"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/uplink \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/uplink`

Return the uplink information for a device.

<h3 id="return-the-uplink-information-for-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "dns": "8.8.8.8, 8.8.4.4",
    "gateway": "1.2.3.5",
    "interface": "WAN 1",
    "ip": "1.2.3.4",
    "publicIp": "123.123.123.1",
    "status": "Active",
    "usingStaticIp": false
  }
]
```

<h3 id="return-the-uplink-information-for-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-uplink-information-for-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the devices in an organization

<a id="opIdgetOrganizationDevices"></a>

> Code samples

```bash
curl https://example.com/organizations/string/devices \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/devices`

List the devices in an organization

<h3 id="list-the-devices-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|configurationUpdatedAfter|query|string|false|Filter results by whether or not the device's configuration has been updated after the given timestamp|

> Example responses

> 200 Response

```json
[
  {
    "address": "1600 Pennsylvania Ave",
    "firmware": "wireless-25-14",
    "lanIp": "1.2.3.4",
    "lat": 37.4180951010362,
    "lng": -122.098531723022,
    "mac": "00:11:22:33:44:55",
    "model": "MR34",
    "name": "My AP",
    "networkId": "N_24329156",
    "notes": "My AP's note",
    "serial": "Q234-ABCD-5678",
    "tags": " recently-added "
  }
]
```

<h3 id="list-the-devices-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-devices-in-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-events">Events</h1>

## List the events for the network

<a id="opIdgetNetworkEvents"></a>

> Code samples

```bash
curl https://example.com/networks/string/events \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/events`

List the events for the network

<h3 id="list-the-events-for-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|productType|query|string|false|The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental|
|includedEventTypes|query|[string]|false|A list of event types. The returned events will be filtered to only include events with these types.|
|excludedEventTypes|query|[string]|false|A list of event types. The returned events will be filtered to exclude events with these types.|
|deviceMac|query|string|false|The MAC address of the Meraki device which the list of events will be filtered with|
|deviceSerial|query|string|false|The serial of the Meraki device which the list of events will be filtered with|
|deviceName|query|string|false|The name of the Meraki device which the list of events will be filtered with|
|clientIp|query|string|false|The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.|
|clientMac|query|string|false|The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.|
|clientName|query|string|false|The name, or partial name, of the client which the list of events will be filtered with|
|smDeviceMac|query|string|false|The MAC address of the Systems Manager device which the list of events will be filtered with|
|smDeviceName|query|string|false|The name of the Systems Manager device which the list of events will be filtered with|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "clientDescription": "Miles's phone",
      "clientId": "k74272e",
      "clientMac": "22:33:44:55:66:77",
      "description": "802.11 association",
      "deviceName": "My AP",
      "deviceSerial": "Q234-ABCD-5678",
      "eventData": {
        "aid": "2104009183",
        "channel": "36",
        "client_ip": "1.2.3.4",
        "client_mac": "22:33:44:55:66:77",
        "radio": "1",
        "rssi": "12",
        "vap": "1"
      },
      "networkId": "N_24329156",
      "occurredAt": "2018-02-11T00:00:00.090210Z",
      "ssidName": "My SSID",
      "ssidNumber": 1,
      "type": "association"
    }
  ],
  "message": "Some error",
  "pageEndAt": "2018-02-11T00:00:00.090210Z",
  "pageStartAt": "2018-02-11T00:00:00.090210Z"
}
```

<h3 id="list-the-events-for-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the event type to human-readable description

<a id="opIdgetNetworkEventsEventTypes"></a>

> Code samples

```bash
curl https://example.com/networks/string/events/eventTypes \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/events/eventTypes`

List the event type to human-readable description

<h3 id="list-the-event-type-to-human-readable-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "category": "802.11",
    "description": "802.11 association",
    "type": "association"
  }
]
```

<h3 id="list-the-event-type-to-human-readable-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-event-type-to-human-readable-description-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-firewalled-services">Firewalled services</h1>

## List the appliance services and their accessibility rules

<a id="opIdgetNetworkFirewalledServices"></a>

> Code samples

```bash
curl https://example.com/networks/string/firewalledServices \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/firewalledServices`

List the appliance services and their accessibility rules

<h3 id="list-the-appliance-services-and-their-accessibility-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "access": "restricted",
    "allowedIps": [
      "123.123.123.1"
    ],
    "service": "web"
  }
]
```

<h3 id="list-the-appliance-services-and-their-accessibility-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-appliance-services-and-their-accessibility-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

<a id="opIdgetNetworkFirewalledService"></a>

> Code samples

```bash
curl https://example.com/networks/string/firewalledServices/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/firewalledServices/{service}`

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

<h3 id="return-the-accessibility-settings-of-the-given-service-icmp-web-or-snmp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|service|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "access": "restricted",
  "allowedIps": [
    "123.123.123.1"
  ],
  "service": "web"
}
```

<h3 id="return-the-accessibility-settings-of-the-given-service-icmp-web-or-snmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

<a id="opIdupdateNetworkFirewalledService"></a>

> Code samples

```bash
curl https://example.com/networks/string/firewalledServices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "access": "restricted",
    "allowedIps": [
      "123.123.123.1"
    ]
  }'
```

`PUT /networks/{networkId}/firewalledServices/{service}`

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

> Body parameter

```json
{
  "access": "restricted",
  "allowedIps": [
    "123.123.123.1"
  ]
}
```

<h3 id="updates-the-accessibility-settings-for-the-given-service-icmp-web-or-snmp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|service|path|string|true|none|
|body|body|object|true|none|
|» access|body|string|true|A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are "blocked" (no remote IPs can access the service), "restricted" (only whitelisted IPs can access the service), and "unrestriced" (any remote IP can access the service). This field is required|
|» allowedIps|body|[string]|false|An array of whitelisted IPs that can access the service. This field is required if "access" is set to "restricted". Otherwise this field is ignored|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» access|blocked|
|» access|restricted|
|» access|unrestricted|

> Example responses

> 200 Response

```json
{
  "access": "restricted",
  "allowedIps": [
    "123.123.123.1"
  ],
  "service": "web"
}
```

<h3 id="updates-the-accessibility-settings-for-the-given-service-icmp-web-or-snmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-floor-plans">Floor plans</h1>

## List the floor plans that belong to your network

<a id="opIdgetNetworkFloorPlans"></a>

> Code samples

```bash
curl https://example.com/networks/string/floorPlans \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/floorPlans`

List the floor plans that belong to your network

<h3 id="list-the-floor-plans-that-belong-to-your-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "bottomLeftCorner": {
      "lat": 37.7696461495,
      "lng": -122.3880815506
    },
    "bottomRightCorner": {
      "lat": 37.771524649766654,
      "lng": -122.38795275055205
    },
    "center": {
      "lat": 37.770040510499996,
      "lng": -122.38714009525
    },
    "devices": [
      {
        "address": "1600 Pennsylvania Ave",
        "beaconIdParams": {
          "major": 5,
          "minor": 3,
          "uuid": "00000000-0000-0000-0000-000000000000"
        },
        "firmware": "wireless-25-14",
        "floorPlanId": "g_1234567",
        "lanIp": "1.2.3.4",
        "lat": 37.4180951010362,
        "lng": -122.098531723022,
        "mac": "00:11:22:33:44:55",
        "model": "MR34",
        "name": "My AP",
        "networkId": "N_24329156",
        "notes": "My AP's note",
        "serial": "Q234-ABCD-5678",
        "tags": " recently-added "
      }
    ],
    "floorPlanId": "g_1234567",
    "height": 150.1,
    "imageExtension": "png",
    "imageMd5": "2a9edd3f4ffd80130c647d13eacb59f3",
    "imageUrl": "https://meraki-na.s3.amazonaws.com/assets/...",
    "imageUrlExpiresAt": "2019-06-11 16:04:54 +00:00",
    "name": "HQ Floor Plan",
    "topLeftCorner": {
      "lat": 37.769700101836364,
      "lng": -122.3888684251381
    },
    "topRightCorner": {
      "lat": 37.77157860210302,
      "lng": -122.38873962509012
    },
    "width": 100
  }
]
```

<h3 id="list-the-floor-plans-that-belong-to-your-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-floor-plans-that-belong-to-your-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Upload a floor plan

<a id="opIdcreateNetworkFloorPlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/floorPlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{}'
```

`POST /networks/{networkId}/floorPlans`

Upload a floor plan

> Body parameter

```json
{}
```

<h3 id="upload-a-floor-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» bottomLeftCorner|body|object|false|The longitude and latitude of the bottom left corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» bottomRightCorner|body|object|false|The longitude and latitude of the bottom right corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» center|body|object|false|The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» imageContents|body|string(byte)|true|The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.|
|» name|body|string|true|The name of your floor plan.|
|» topLeftCorner|body|object|false|The longitude and latitude of the top left corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» topRightCorner|body|object|false|The longitude and latitude of the top right corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|

> Example responses

> 201 Response

```json
{
  "bottomLeftCorner": {
    "lat": 37.7696461495,
    "lng": -122.3880815506
  },
  "bottomRightCorner": {
    "lat": 37.771524649766654,
    "lng": -122.38795275055205
  },
  "center": {
    "lat": 37.770040510499996,
    "lng": -122.38714009525
  },
  "devices": [
    {
      "address": "1600 Pennsylvania Ave",
      "beaconIdParams": {
        "major": 5,
        "minor": 3,
        "uuid": "00000000-0000-0000-0000-000000000000"
      },
      "firmware": "wireless-25-14",
      "floorPlanId": "g_1234567",
      "lanIp": "1.2.3.4",
      "lat": 37.4180951010362,
      "lng": -122.098531723022,
      "mac": "00:11:22:33:44:55",
      "model": "MR34",
      "name": "My AP",
      "networkId": "N_24329156",
      "notes": "My AP's note",
      "serial": "Q234-ABCD-5678",
      "tags": " recently-added "
    }
  ],
  "floorPlanId": "g_1234567",
  "height": 150.1,
  "imageExtension": "png",
  "imageMd5": "2a9edd3f4ffd80130c647d13eacb59f3",
  "imageUrl": "https://meraki-na.s3.amazonaws.com/assets/...",
  "imageUrlExpiresAt": "2019-06-11 16:04:54 +00:00",
  "name": "HQ Floor Plan",
  "topLeftCorner": {
    "lat": 37.769700101836364,
    "lng": -122.3888684251381
  },
  "topRightCorner": {
    "lat": 37.77157860210302,
    "lng": -122.38873962509012
  },
  "width": 100
}
```

<h3 id="upload-a-floor-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Find a floor plan by ID

<a id="opIdgetNetworkFloorPlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/floorPlans/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/floorPlans/{floorPlanId}`

Find a floor plan by ID

<h3 id="find-a-floor-plan-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|floorPlanId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bottomLeftCorner": {
    "lat": 37.7696461495,
    "lng": -122.3880815506
  },
  "bottomRightCorner": {
    "lat": 37.771524649766654,
    "lng": -122.38795275055205
  },
  "center": {
    "lat": 37.770040510499996,
    "lng": -122.38714009525
  },
  "devices": [
    {
      "address": "1600 Pennsylvania Ave",
      "beaconIdParams": {
        "major": 5,
        "minor": 3,
        "uuid": "00000000-0000-0000-0000-000000000000"
      },
      "firmware": "wireless-25-14",
      "floorPlanId": "g_1234567",
      "lanIp": "1.2.3.4",
      "lat": 37.4180951010362,
      "lng": -122.098531723022,
      "mac": "00:11:22:33:44:55",
      "model": "MR34",
      "name": "My AP",
      "networkId": "N_24329156",
      "notes": "My AP's note",
      "serial": "Q234-ABCD-5678",
      "tags": " recently-added "
    }
  ],
  "floorPlanId": "g_1234567",
  "height": 150.1,
  "imageExtension": "png",
  "imageMd5": "2a9edd3f4ffd80130c647d13eacb59f3",
  "imageUrl": "https://meraki-na.s3.amazonaws.com/assets/...",
  "imageUrlExpiresAt": "2019-06-11 16:04:54 +00:00",
  "name": "HQ Floor Plan",
  "topLeftCorner": {
    "lat": 37.769700101836364,
    "lng": -122.3888684251381
  },
  "topRightCorner": {
    "lat": 37.77157860210302,
    "lng": -122.38873962509012
  },
  "width": 100
}
```

<h3 id="find-a-floor-plan-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a floor plan's geolocation and other meta data

<a id="opIdupdateNetworkFloorPlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/floorPlans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{}'
```

`PUT /networks/{networkId}/floorPlans/{floorPlanId}`

Update a floor plan's geolocation and other meta data

> Body parameter

```json
{}
```

<h3 id="update-a-floor-plans-geolocation-and-other-meta-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|floorPlanId|path|string|true|none|
|body|body|object|false|none|
|» bottomLeftCorner|body|object|false|The longitude and latitude of the bottom left corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» bottomRightCorner|body|object|false|The longitude and latitude of the bottom right corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» center|body|object|false|The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» imageContents|body|string(byte)|false|The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image.|
|» name|body|string|false|The name of your floor plan.|
|» topLeftCorner|body|object|false|The longitude and latitude of the top left corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|
|» topRightCorner|body|object|false|The longitude and latitude of the top right corner of your floor plan.|
|» » lat|body|number(float)|false|Latitude|
|» » lng|body|number(float)|false|Longitude|

> Example responses

> 200 Response

```json
{
  "bottomLeftCorner": {
    "lat": 37.7696461495,
    "lng": -122.3880815506
  },
  "bottomRightCorner": {
    "lat": 37.771524649766654,
    "lng": -122.38795275055205
  },
  "center": {
    "lat": 37.770040510499996,
    "lng": -122.38714009525
  },
  "devices": [
    {
      "address": "1600 Pennsylvania Ave",
      "beaconIdParams": {
        "major": 5,
        "minor": 3,
        "uuid": "00000000-0000-0000-0000-000000000000"
      },
      "firmware": "wireless-25-14",
      "floorPlanId": "g_1234567",
      "lanIp": "1.2.3.4",
      "lat": 37.4180951010362,
      "lng": -122.098531723022,
      "mac": "00:11:22:33:44:55",
      "model": "MR34",
      "name": "My AP",
      "networkId": "N_24329156",
      "notes": "My AP's note",
      "serial": "Q234-ABCD-5678",
      "tags": " recently-added "
    }
  ],
  "floorPlanId": "g_1234567",
  "height": 150.1,
  "imageExtension": "png",
  "imageMd5": "2a9edd3f4ffd80130c647d13eacb59f3",
  "imageUrl": "https://meraki-na.s3.amazonaws.com/assets/...",
  "imageUrlExpiresAt": "2019-06-11 16:04:54 +00:00",
  "name": "HQ Floor Plan",
  "topLeftCorner": {
    "lat": 37.769700101836364,
    "lng": -122.3888684251381
  },
  "topRightCorner": {
    "lat": 37.77157860210302,
    "lng": -122.38873962509012
  },
  "width": 100
}
```

<h3 id="update-a-floor-plans-geolocation-and-other-meta-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Destroy a floor plan

<a id="opIddeleteNetworkFloorPlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/floorPlans/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/floorPlans/{floorPlanId}`

Destroy a floor plan

<h3 id="destroy-a-floor-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|floorPlanId|path|string|true|none|

<h3 id="destroy-a-floor-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-intrusion-settings">Intrusion settings</h1>

## Returns all supported intrusion settings for an MX network

<a id="opIdgetNetworkSecurityIntrusionSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/security/intrusionSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/security/intrusionSettings`

Returns all supported intrusion settings for an MX network

<h3 id="returns-all-supported-intrusion-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "idsRulesets": "balanced",
  "mode": "prevention",
  "protectedNetworks": {
    "excludedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8"
    ],
    "includedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.254.0.0/16",
      "172.16.0.0/12"
    ],
    "useDefault": false
  }
}
```

<h3 id="returns-all-supported-intrusion-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Set the supported intrusion settings for an MX network

<a id="opIdupdateNetworkSecurityIntrusionSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/security/intrusionSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "idsRulesets": "balanced",
    "mode": "prevention",
    "protectedNetworks": {
      "excludedCidr": [
        "10.0.0.0/8",
        "127.0.0.0/8"
      ],
      "includedCidr": [
        "10.0.0.0/8",
        "127.0.0.0/8",
        "169.254.0.0/16",
        "172.16.0.0/12"
      ],
      "useDefault": false
    }
  }'
```

`PUT /networks/{networkId}/security/intrusionSettings`

Set the supported intrusion settings for an MX network

> Body parameter

```json
{
  "idsRulesets": "balanced",
  "mode": "prevention",
  "protectedNetworks": {
    "excludedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8"
    ],
    "includedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.254.0.0/16",
      "172.16.0.0/12"
    ],
    "useDefault": false
  }
}
```

<h3 id="set-the-supported-intrusion-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» idsRulesets|body|string|false|Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved|
|» mode|body|string|false|Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)|
|» protectedNetworks|body|object|false|Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode|
|» » excludedCidr|body|[string]|false|list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)|
|» » includedCidr|body|[string]|false|list of IP addresses or subnets being protected (required if 'useDefault' is false)|
|» » useDefault|body|boolean|false|true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» idsRulesets|balanced|
|» idsRulesets|connectivity|
|» idsRulesets|security|
|» mode|detection|
|» mode|disabled|
|» mode|prevention|

> Example responses

> 200 Response

```json
{
  "idsRulesets": "balanced",
  "mode": "prevention",
  "protectedNetworks": {
    "excludedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8"
    ],
    "includedCidr": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.254.0.0/16",
      "172.16.0.0/12"
    ],
    "useDefault": false
  }
}
```

<h3 id="set-the-supported-intrusion-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns all supported intrusion settings for an organization

<a id="opIdgetOrganizationSecurityIntrusionSettings"></a>

> Code samples

```bash
curl https://example.com/organizations/string/security/intrusionSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/security/intrusionSettings`

Returns all supported intrusion settings for an organization

<h3 id="returns-all-supported-intrusion-settings-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "whitelistedRules": [
    {
      "message": "SQL sa login failed",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/688"
    },
    {
      "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/5805"
    }
  ]
}
```

<h3 id="returns-all-supported-intrusion-settings-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Sets supported intrusion settings for an organization

<a id="opIdupdateOrganizationSecurityIntrusionSettings"></a>

> Code samples

```bash
curl https://example.com/organizations/string/security/intrusionSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "whitelistedRules": [
      {
        "message": "SQL sa login failed",
        "ruleId": "meraki:intrusion/snort/GID/01/SID/688"
      },
      {
        "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines",
        "ruleId": "meraki:intrusion/snort/GID/01/SID/5805"
      }
    ]
  }'
```

`PUT /organizations/{organizationId}/security/intrusionSettings`

Sets supported intrusion settings for an organization

> Body parameter

```json
{
  "whitelistedRules": [
    {
      "message": "SQL sa login failed",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/688"
    },
    {
      "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/5805"
    }
  ]
}
```

<h3 id="sets-supported-intrusion-settings-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» whitelistedRules|body|[object]|true|Sets a list of specific SNORT signatures to allow|
|» » message|body|string|false|Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET|
|» » ruleId|body|string|true|A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents|

> Example responses

> 200 Response

```json
{
  "whitelistedRules": [
    {
      "message": "SQL sa login failed",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/688"
    },
    {
      "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines",
      "ruleId": "meraki:intrusion/snort/GID/01/SID/5805"
    }
  ]
}
```

<h3 id="sets-supported-intrusion-settings-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-licenses">Licenses</h1>

## Return an overview of the license state for an organization

<a id="opIdgetOrganizationLicenseState"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenseState \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/licenseState`

Return an overview of the license state for an organization

<h3 id="return-an-overview-of-the-license-state-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "expirationDate": "Feb 8, 2020 UTC",
  "licensedDeviceCounts": {
    "MS": 100
  },
  "status": "OK"
}
```

<h3 id="return-an-overview-of-the-license-state-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the licenses for an organization

<a id="opIdgetOrganizationLicenses"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenses \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/licenses`

List the licenses for an organization

<h3 id="list-the-licenses-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|deviceSerial|query|string|false|Filter the licenses to those assigned to a particular device|
|networkId|query|string|false|Filter the licenses to those assigned in a particular network|
|state|query|string|false|Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|active|
|state|expired|
|state|expiring|
|state|recentlyQueued|
|state|unused|
|state|unusedActive|

> Example responses

> 200 Response

```json
[
  {
    "activationDate": "2019-09-01T15:01:46Z",
    "claimDate": "2019-08-29T12:40:10Z",
    "deviceSerial": "Q234-ABCD-5678",
    "durationInDays": 365,
    "expirationDate": "2020-10-30T15:01:46Z",
    "headLicenseId": "1234",
    "id": "1234",
    "licenseKey": "Z21234567890",
    "licenseType": "MX64-ENT",
    "networkId": "N_24329156",
    "orderNumber": "4C1234567",
    "permanentlyQueuedLicenses": [
      {
        "durationInDays": 60,
        "id": "5678",
        "licenseKey": "Z21234567890",
        "licenseType": "MX64-ENT",
        "orderNumber": "4C1234567"
      }
    ],
    "seatCount": null,
    "state": "active",
    "totalDurationInDays": 425
  }
]
```

<h3 id="list-the-licenses-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-licenses-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Assign SM seats to a network

<a id="opIdassignOrganizationLicensesSeats"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenses/assignSeats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "licenseId": "1234",
    "networkId": "N_24329156",
    "seatCount": 20
  }'
```

`POST /organizations/{organizationId}/licenses/assignSeats`

Assign SM seats to a network. This will increase the managed SM device limit of the network

> Body parameter

```json
{
  "licenseId": "1234",
  "networkId": "N_24329156",
  "seatCount": 20
}
```

<h3 id="assign-sm-seats-to-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» licenseId|body|string|true|The ID of the SM license to assign seats from|
|» networkId|body|string|true|The ID of the SM network to assign the seats to|
|» seatCount|body|integer|true|The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license|

> Example responses

> 200 Response

```json
{
  "resultingLicenses": [
    {
      "activationDate": "2019-09-01T15:01:46Z",
      "claimDate": "2019-08-29T12:40:10Z",
      "deviceSerial": null,
      "durationInDays": 365,
      "expirationDate": "2020-08-31T15:01:46Z",
      "headLicenseId": "1234",
      "id": "1234",
      "licenseKey": "Z21234567890",
      "licenseType": "SME",
      "networkId": "N_24329156",
      "orderNumber": "4C1234567",
      "permanentlyQueuedLicenses": [],
      "seatCount": 25,
      "state": "active",
      "totalDurationInDays": 365
    }
  ]
}
```

<h3 id="assign-sm-seats-to-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Move SM seats to another organization

<a id="opIdmoveOrganizationLicensesSeats"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenses/moveSeats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "destOrganizationId": "2930418",
    "licenseId": "1234",
    "seatCount": 20
  }'
```

`POST /organizations/{organizationId}/licenses/moveSeats`

Move SM seats to another organization

> Body parameter

```json
{
  "destOrganizationId": "2930418",
  "licenseId": "1234",
  "seatCount": 20
}
```

<h3 id="move-sm-seats-to-another-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» destOrganizationId|body|string|true|The ID of the organization to move the SM seats to|
|» licenseId|body|string|true|The ID of the SM license to move the seats from|
|» seatCount|body|integer|true|The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license|

> Example responses

> 200 Response

```json
{
  "destOrganizationId": "2930418",
  "licenseId": "1234",
  "seatCount": 20
}
```

<h3 id="move-sm-seats-to-another-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Renew SM seats of a license

<a id="opIdrenewOrganizationLicensesSeats"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenses/renewSeats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "licenseIdToRenew": "123",
    "unusedLicenseId": "1234"
  }'
```

`POST /organizations/{organizationId}/licenses/renewSeats`

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

> Body parameter

```json
{
  "licenseIdToRenew": "123",
  "unusedLicenseId": "1234"
}
```

<h3 id="renew-sm-seats-of-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» licenseIdToRenew|body|string|true|The ID of the SM license to renew. This license must already be assigned to an SM network|
|» unusedLicenseId|body|string|true|The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'|

> Example responses

> 200 Response

```json
{
  "resultingLicenses": [
    {
      "activationDate": "2019-09-01T15:01:46Z",
      "claimDate": "2019-08-29T12:40:10Z",
      "deviceSerial": null,
      "durationInDays": 365,
      "expirationDate": "2020-08-31T15:01:46Z",
      "headLicenseId": "1234",
      "id": "1234",
      "licenseKey": "Z21234567890",
      "licenseType": "SME",
      "networkId": "N_24329156",
      "orderNumber": "4C1234567",
      "permanentlyQueuedLicenses": [],
      "seatCount": 25,
      "state": "active",
      "totalDurationInDays": 365
    }
  ]
}
```

<h3 id="renew-sm-seats-of-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Display a license

<a id="opIdgetOrganizationLicense"></a>

> Code samples

```bash
curl https://example.com/organizations/string/licenses/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/licenses/{licenseId}`

Display a license

<h3 id="display-a-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|licenseId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "activationDate": "2019-09-01T15:01:46Z",
  "claimDate": "2019-08-29T12:40:10Z",
  "deviceSerial": "Q234-ABCD-5678",
  "durationInDays": 365,
  "expirationDate": "2020-10-30T15:01:46Z",
  "headLicenseId": "1234",
  "id": "1234",
  "licenseKey": "Z21234567890",
  "licenseType": "MX64-ENT",
  "networkId": "N_24329156",
  "orderNumber": "4C1234567",
  "permanentlyQueuedLicenses": [
    {
      "durationInDays": 60,
      "id": "5678",
      "licenseKey": "Z21234567890",
      "licenseType": "MX64-ENT",
      "orderNumber": "4C1234567"
    }
  ],
  "seatCount": null,
  "state": "active",
  "totalDurationInDays": 425
}
```

<h3 id="display-a-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-link-aggregations">Link aggregations</h1>

## List link aggregation groups

<a id="opIdgetNetworkSwitchLinkAggregations"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/linkAggregations \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/linkAggregations`

List link aggregation groups

<h3 id="list-link-aggregation-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "NDU2N18yXzM=",
    "switchPorts": [
      {
        "portId": "1",
        "serial": "Q234-ABCD-0001"
      },
      {
        "portId": "2",
        "serial": "Q234-ABCD-0002"
      },
      {
        "portId": "3",
        "serial": "Q234-ABCD-0003"
      },
      {
        "portId": "4",
        "serial": "Q234-ABCD-0004"
      },
      {
        "portId": "5",
        "serial": "Q234-ABCD-0005"
      },
      {
        "portId": "6",
        "serial": "Q234-ABCD-0006"
      },
      {
        "portId": "7",
        "serial": "Q234-ABCD-0007"
      },
      {
        "portId": "8",
        "serial": "Q234-ABCD-0008"
      }
    ]
  }
]
```

<h3 id="list-link-aggregation-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-link-aggregation-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a link aggregation group

<a id="opIdcreateNetworkSwitchLinkAggregation"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/linkAggregations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "switchPorts": [
      {
        "portId": "1",
        "serial": "Q234-ABCD-0001"
      },
      {
        "portId": "2",
        "serial": "Q234-ABCD-0002"
      },
      {
        "portId": "3",
        "serial": "Q234-ABCD-0003"
      },
      {
        "portId": "4",
        "serial": "Q234-ABCD-0004"
      },
      {
        "portId": "5",
        "serial": "Q234-ABCD-0005"
      },
      {
        "portId": "6",
        "serial": "Q234-ABCD-0006"
      },
      {
        "portId": "7",
        "serial": "Q234-ABCD-0007"
      },
      {
        "portId": "8",
        "serial": "Q234-ABCD-0008"
      }
    ]
  }'
```

`POST /networks/{networkId}/switch/linkAggregations`

Create a link aggregation group

> Body parameter

```json
{
  "switchPorts": [
    {
      "portId": "1",
      "serial": "Q234-ABCD-0001"
    },
    {
      "portId": "2",
      "serial": "Q234-ABCD-0002"
    },
    {
      "portId": "3",
      "serial": "Q234-ABCD-0003"
    },
    {
      "portId": "4",
      "serial": "Q234-ABCD-0004"
    },
    {
      "portId": "5",
      "serial": "Q234-ABCD-0005"
    },
    {
      "portId": "6",
      "serial": "Q234-ABCD-0006"
    },
    {
      "portId": "7",
      "serial": "Q234-ABCD-0007"
    },
    {
      "portId": "8",
      "serial": "Q234-ABCD-0008"
    }
  ]
}
```

<h3 id="create-a-link-aggregation-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» switchPorts|body|[object]|false|Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.|
|» » portId|body|string|true|Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").|
|» » serial|body|string|true|Serial number of the switch.|
|» switchProfilePorts|body|[object]|false|Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.|
|» » portId|body|string|true|Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").|
|» » profile|body|string|true|Profile identifier.|

> Example responses

> 201 Response

```json
{
  "id": "NDU2N18yXzM=",
  "switchPorts": [
    {
      "portId": "1",
      "serial": "Q234-ABCD-0001"
    },
    {
      "portId": "2",
      "serial": "Q234-ABCD-0002"
    },
    {
      "portId": "3",
      "serial": "Q234-ABCD-0003"
    },
    {
      "portId": "4",
      "serial": "Q234-ABCD-0004"
    },
    {
      "portId": "5",
      "serial": "Q234-ABCD-0005"
    },
    {
      "portId": "6",
      "serial": "Q234-ABCD-0006"
    },
    {
      "portId": "7",
      "serial": "Q234-ABCD-0007"
    },
    {
      "portId": "8",
      "serial": "Q234-ABCD-0008"
    }
  ]
}
```

<h3 id="create-a-link-aggregation-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a link aggregation group

<a id="opIdupdateNetworkSwitchLinkAggregation"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/linkAggregations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "id": "NDU2N18yXzM=",
    "switchPorts": [
      {
        "portId": "1",
        "serial": "Q234-ABCD-0001"
      },
      {
        "portId": "2",
        "serial": "Q234-ABCD-0002"
      },
      {
        "portId": "3",
        "serial": "Q234-ABCD-0003"
      },
      {
        "portId": "4",
        "serial": "Q234-ABCD-0004"
      },
      {
        "portId": "5",
        "serial": "Q234-ABCD-0005"
      },
      {
        "portId": "6",
        "serial": "Q234-ABCD-0006"
      },
      {
        "portId": "7",
        "serial": "Q234-ABCD-0007"
      },
      {
        "portId": "8",
        "serial": "Q234-ABCD-0008"
      }
    ]
  }'
```

`PUT /networks/{networkId}/switch/linkAggregations/{linkAggregationId}`

Update a link aggregation group

> Body parameter

```json
{
  "id": "NDU2N18yXzM=",
  "switchPorts": [
    {
      "portId": "1",
      "serial": "Q234-ABCD-0001"
    },
    {
      "portId": "2",
      "serial": "Q234-ABCD-0002"
    },
    {
      "portId": "3",
      "serial": "Q234-ABCD-0003"
    },
    {
      "portId": "4",
      "serial": "Q234-ABCD-0004"
    },
    {
      "portId": "5",
      "serial": "Q234-ABCD-0005"
    },
    {
      "portId": "6",
      "serial": "Q234-ABCD-0006"
    },
    {
      "portId": "7",
      "serial": "Q234-ABCD-0007"
    },
    {
      "portId": "8",
      "serial": "Q234-ABCD-0008"
    }
  ]
}
```

<h3 id="update-a-link-aggregation-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|linkAggregationId|path|string|true|none|
|body|body|object|false|none|
|» switchPorts|body|[object]|false|Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.|
|» » portId|body|string|true|Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").|
|» » serial|body|string|true|Serial number of the switch.|
|» switchProfilePorts|body|[object]|false|Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported.|
|» » portId|body|string|true|Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").|
|» » profile|body|string|true|Profile identifier.|

> Example responses

> 200 Response

```json
{
  "id": "NDU2N18yXzM=",
  "switchPorts": [
    {
      "portId": "1",
      "serial": "Q234-ABCD-0001"
    },
    {
      "portId": "2",
      "serial": "Q234-ABCD-0002"
    },
    {
      "portId": "3",
      "serial": "Q234-ABCD-0003"
    },
    {
      "portId": "4",
      "serial": "Q234-ABCD-0004"
    },
    {
      "portId": "5",
      "serial": "Q234-ABCD-0005"
    },
    {
      "portId": "6",
      "serial": "Q234-ABCD-0006"
    },
    {
      "portId": "7",
      "serial": "Q234-ABCD-0007"
    },
    {
      "portId": "8",
      "serial": "Q234-ABCD-0008"
    }
  ]
}
```

<h3 id="update-a-link-aggregation-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Split a link aggregation group into separate ports

<a id="opIddeleteNetworkSwitchLinkAggregation"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/linkAggregations/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/switch/linkAggregations/{linkAggregationId}`

Split a link aggregation group into separate ports

<h3 id="split-a-link-aggregation-group-into-separate-ports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|linkAggregationId|path|string|true|none|

<h3 id="split-a-link-aggregation-group-into-separate-ports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mg-lan-settings">MG LAN settings</h1>

## Show the LAN Settings of a MG

<a id="opIdgetDeviceCellularGatewaySettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/cellularGateway/settings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/cellularGateway/settings`

Show the LAN Settings of a MG

<h3 id="show-the-lan-settings-of-a-mg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "deviceLanIp": "192.168.0.33",
  "deviceName": "name of the MG",
  "deviceSubnet": "192.168.0.32/27",
  "fixedIpAssignments": [
    {
      "ip": "192.168.0.10",
      "mac": "0b:00:00:00:00:ac",
      "name": "server 1"
    },
    {
      "ip": "192.168.0.20",
      "mac": "0b:00:00:00:00:ab",
      "name": "server 2"
    }
  ],
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ]
}
```

<h3 id="show-the-lan-settings-of-a-mg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the LAN Settings for a single MG.

<a id="opIdupdateDeviceCellularGatewaySettings"></a>

> Code samples

```bash
curl https://example.com/devices/string/cellularGateway/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "deviceLanIp": "192.168.0.33",
    "deviceName": "name of the MG",
    "deviceSubnet": "192.168.0.32/27",
    "fixedIpAssignments": [
      {
        "ip": "192.168.0.10",
        "mac": "0b:00:00:00:00:ac",
        "name": "server 1"
      },
      {
        "ip": "192.168.0.20",
        "mac": "0b:00:00:00:00:ab",
        "name": "server 2"
      }
    ],
    "reservedIpRanges": [
      {
        "comment": "A reserved IP range",
        "end": "192.168.1.1",
        "start": "192.168.1.0"
      }
    ]
  }'
```

`PUT /devices/{serial}/cellularGateway/settings`

Update the LAN Settings for a single MG.

> Body parameter

```json
{
  "deviceLanIp": "192.168.0.33",
  "deviceName": "name of the MG",
  "deviceSubnet": "192.168.0.32/27",
  "fixedIpAssignments": [
    {
      "ip": "192.168.0.10",
      "mac": "0b:00:00:00:00:ac",
      "name": "server 1"
    },
    {
      "ip": "192.168.0.20",
      "mac": "0b:00:00:00:00:ab",
      "name": "server 2"
    }
  ],
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ]
}
```

<h3 id="update-the-lan-settings-for-a-single-mg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|false|none|
|» fixedIpAssignments|body|[object]|false|list of all fixed IP assignments for a single MG|
|» » ip|body|string|true|The IP address you want to assign to a specific server or device|
|» » mac|body|string|true|The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address|
|» » name|body|string|false|A descriptive name of the assignment|
|» reservedIpRanges|body|[object]|false|list of all reserved IP ranges for a single MG|
|» » comment|body|string|true|Comment explaining the reserved IP range|
|» » end|body|string|true|Ending IP included in the reserved range of IPs|
|» » start|body|string|true|Starting IP included in the reserved range of IPs|

> Example responses

> 200 Response

```json
{
  "deviceLanIp": "192.168.0.33",
  "deviceName": "name of the MG",
  "deviceSubnet": "192.168.0.32/27",
  "fixedIpAssignments": [
    {
      "ip": "192.168.0.10",
      "mac": "0b:00:00:00:00:ac",
      "name": "server 1"
    },
    {
      "ip": "192.168.0.20",
      "mac": "0b:00:00:00:00:ab",
      "name": "server 2"
    }
  ],
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ]
}
```

<h3 id="update-the-lan-settings-for-a-single-mg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mg-port-forwarding-rules">MG port forwarding rules</h1>

## Returns the port forwarding rules for a single MG.

<a id="opIdgetDeviceCellularGatewaySettingsPortForwardingRules"></a>

> Code samples

```bash
curl https://example.com/devices/string/cellularGateway/settings/portForwardingRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/cellularGateway/settings/portForwardingRules`

Returns the port forwarding rules for a single MG.

<h3 id="returns-the-port-forwarding-rules-for-a-single-mg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "access": "any",
      "lanIp": "172.31.128.5",
      "localPort": "4",
      "name": "test",
      "protocol": "tcp",
      "publicPort": "11-12",
      "uplink": "both"
    },
    {
      "access": "restricted",
      "allowedIps": [
        "10.10.10.10",
        "10.10.10.11"
      ],
      "lanIp": "172.31.128.5",
      "localPort": "5",
      "name": "test 2",
      "protocol": "tcp",
      "publicPort": "99",
      "uplink": "both"
    }
  ]
}
```

<h3 id="returns-the-port-forwarding-rules-for-a-single-mg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Updates the port forwarding rules for a single MG.

<a id="opIdupdateDeviceCellularGatewaySettingsPortForwardingRules"></a>

> Code samples

```bash
curl https://example.com/devices/string/cellularGateway/settings/portForwardingRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "access": "any",
        "lanIp": "172.31.128.5",
        "localPort": "4",
        "name": "test",
        "protocol": "tcp",
        "publicPort": "11-12",
        "uplink": "both"
      },
      {
        "access": "restricted",
        "allowedIps": [
          "10.10.10.10",
          "10.10.10.11"
        ],
        "lanIp": "172.31.128.5",
        "localPort": "5",
        "name": "test 2",
        "protocol": "tcp",
        "publicPort": "99",
        "uplink": "both"
      }
    ]
  }'
```

`PUT /devices/{serial}/cellularGateway/settings/portForwardingRules`

Updates the port forwarding rules for a single MG.

> Body parameter

```json
{
  "rules": [
    {
      "access": "any",
      "lanIp": "172.31.128.5",
      "localPort": "4",
      "name": "test",
      "protocol": "tcp",
      "publicPort": "11-12",
      "uplink": "both"
    },
    {
      "access": "restricted",
      "allowedIps": [
        "10.10.10.10",
        "10.10.10.11"
      ],
      "lanIp": "172.31.128.5",
      "localPort": "5",
      "name": "test 2",
      "protocol": "tcp",
      "publicPort": "99",
      "uplink": "both"
    }
  ]
}
```

<h3 id="updates-the-port-forwarding-rules-for-a-single-mg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An array of port forwarding params|
|» » access|body|string|true|`any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.|
|» » allowedIps|body|[string]|false|An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.|
|» » lanIp|body|string|true|The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN|
|» » localPort|body|string|true|A port or port ranges that will receive the forwarded traffic from the WAN|
|» » name|body|string|false|A descriptive name for the rule|
|» » protocol|body|string|true|TCP or UDP|
|» » publicPort|body|string|true|A port or port ranges that will be forwarded to the host on the LAN|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "access": "any",
      "lanIp": "172.31.128.5",
      "localPort": "4",
      "name": "test",
      "protocol": "tcp",
      "publicPort": "11-12",
      "uplink": "both"
    },
    {
      "access": "restricted",
      "allowedIps": [
        "10.10.10.10",
        "10.10.10.11"
      ],
      "lanIp": "172.31.128.5",
      "localPort": "5",
      "name": "test 2",
      "protocol": "tcp",
      "publicPort": "99",
      "uplink": "both"
    }
  ]
}
```

<h3 id="updates-the-port-forwarding-rules-for-a-single-mg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mr-l3-firewall">MR L3 firewall</h1>

## Return the L3 firewall rules for an SSID on an MR network

<a id="opIdgetNetworkSsidL3FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string/l3FirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/ssids/{number}/l3FirewallRules`

Return the L3 firewall rules for an SSID on an MR network

<h3 id="return-the-l3-firewall-rules-for-an-ssid-on-an-mr-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp"
  }
]
```

<h3 id="return-the-l3-firewall-rules-for-an-ssid-on-an-mr-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-l3-firewall-rules-for-an-ssid-on-an-mr-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the L3 firewall rules of an SSID on an MR network

<a id="opIdupdateNetworkSsidL3FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string/l3FirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "comment": "Allow TCP traffic to subnet with HTTP servers.",
        "destCidr": "192.168.1.0/24",
        "destPort": "443",
        "policy": "allow",
        "protocol": "tcp"
      }
    ]
  }'
```

`PUT /networks/{networkId}/ssids/{number}/l3FirewallRules`

Update the L3 firewall rules of an SSID on an MR network

> Body parameter

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp"
    }
  ]
}
```

<h3 id="update-the-l3-firewall-rules-of-an-ssid-on-an-mr-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|
|body|body|object|false|none|
|» allowLanAccess|body|boolean|false|Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)|
|» rules|body|[object]|false|An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)|
|» » comment|body|string|false|Description of the rule (optional)|
|» » destCidr|body|string|true|Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'|
|» » destPort|body|string|false|Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'|
|» » policy|body|string|true|'allow' or 'deny' traffic specified by this rule|
|» » protocol|body|string|true|The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|allow|
|» » policy|deny|
|» » protocol|any|
|» » protocol|icmp|
|» » protocol|icmp6|
|» » protocol|tcp|
|» » protocol|udp|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp"
  }
]
```

<h3 id="update-the-l3-firewall-rules-of-an-ssid-on-an-mr-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-l3-firewall-rules-of-an-ssid-on-an-mr-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mv-sense">MV Sense</h1>

## Returns live state from camera of analytics zones

<a id="opIdgetDeviceCameraAnalyticsLive"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/analytics/live \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/analytics/live`

Returns live state from camera of analytics zones

<h3 id="returns-live-state-from-camera-of-analytics-zones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ts": "2018-08-15T18:32:38.123Z",
  "zones": {
    "0": {
      "person": 0
    }
  }
}
```

<h3 id="returns-live-state-from-camera-of-analytics-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns an overview of aggregate analytics data for a timespan

<a id="opIdgetDeviceCameraAnalyticsOverview"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/analytics/overview \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/analytics/overview`

Returns an overview of aggregate analytics data for a timespan

<h3 id="returns-an-overview-of-aggregate-analytics-data-for-a-timespan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 365 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.|
|objectType|query|string|false|[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|objectType|person|
|objectType|vehicle|

> Example responses

> 200 Response

```json
[
  {
    "averageCount": 5,
    "endTs": "2018-08-15T18:33:38.123Z",
    "entrances": 254,
    "startTs": "2018-08-15T18:32:38.123Z",
    "zoneId": 0
  }
]
```

<h3 id="returns-an-overview-of-aggregate-analytics-data-for-a-timespan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="returns-an-overview-of-aggregate-analytics-data-for-a-timespan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns most recent record for analytics zones

<a id="opIdgetDeviceCameraAnalyticsRecent"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/analytics/recent \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/analytics/recent`

Returns most recent record for analytics zones

<h3 id="returns-most-recent-record-for-analytics-zones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|objectType|query|string|false|[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|objectType|person|
|objectType|vehicle|

> Example responses

> 200 Response

```json
[
  {
    "averageCount": 2.54,
    "endTs": "2018-08-15T18:33:38.123Z",
    "entrances": 10,
    "startTs": "2018-08-15T18:32:38.123Z",
    "zoneId": 0
  }
]
```

<h3 id="returns-most-recent-record-for-analytics-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="returns-most-recent-record-for-analytics-zones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns all configured analytic zones for this camera

<a id="opIdgetDeviceCameraAnalyticsZones"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/analytics/zones \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/analytics/zones`

Returns all configured analytic zones for this camera

<h3 id="returns-all-configured-analytic-zones-for-this-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "0",
    "label": "Full Frame",
    "regionOfInterest": {
      "x0": "0.00",
      "x1": "1.00",
      "y0": "0.00",
      "y1": "1.00"
    },
    "type": "occupancy"
  }
]
```

<h3 id="returns-all-configured-analytic-zones-for-this-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="returns-all-configured-analytic-zones-for-this-camera-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return historical records for analytic zones

<a id="opIdgetDeviceCameraAnalyticsZoneHistory"></a>

> Code samples

```bash
curl https://example.com/devices/string/camera/analytics/zones/string/history \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/camera/analytics/zones/{zoneId}/history`

Return historical records for analytic zones

<h3 id="return-historical-records-for-analytic-zones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|zoneId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 365 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.|
|resolution|query|integer|false|The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.|
|objectType|query|string|false|[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|objectType|person|
|objectType|vehicle|

> Example responses

> 200 Response

```json
[
  {
    "averageCount": 1.5,
    "endTs": "2018-08-15T18:33:38.123Z",
    "entrances": 5,
    "startTs": "2018-08-15T18:32:38.123Z"
  }
]
```

<h3 id="return-historical-records-for-analytic-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-historical-records-for-analytic-zones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-11-nat-rules">MX 1:1 NAT rules</h1>

## Return the 1:1 NAT mapping rules for an MX network

<a id="opIdgetNetworkOneToOneNatRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/oneToOneNatRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/oneToOneNatRules`

Return the 1:1 NAT mapping rules for an MX network

<h3 id="return-the-11-nat-mapping-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "allowedInbound": [
        {
          "allowedIps": [
            "10.82.112.0/24",
            "10.82.0.0/16"
          ],
          "destinationPorts": [
            "80"
          ],
          "protocol": "tcp"
        },
        {
          "allowedIps": [
            "10.81.110.5",
            "10.81.0.0/16"
          ],
          "destinationPorts": [
            "8080"
          ],
          "protocol": "udp"
        }
      ],
      "lanIp": "192.168.128.22",
      "name": "Service behind NAT",
      "publicIp": "146.12.3.33",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="return-the-11-nat-mapping-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Set the 1:1 NAT mapping rules for an MX network

<a id="opIdupdateNetworkOneToOneNatRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/oneToOneNatRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "allowedInbound": [
          {
            "allowedIps": [
              "10.82.112.0/24",
              "10.82.0.0/16"
            ],
            "destinationPorts": [
              "80"
            ],
            "protocol": "tcp"
          },
          {
            "allowedIps": [
              "10.81.110.5",
              "10.81.0.0/16"
            ],
            "destinationPorts": [
              "8080"
            ],
            "protocol": "udp"
          }
        ],
        "lanIp": "192.168.128.22",
        "name": "Service behind NAT",
        "publicIp": "146.12.3.33",
        "uplink": "internet1"
      }
    ]
  }'
```

`PUT /networks/{networkId}/oneToOneNatRules`

Set the 1:1 NAT mapping rules for an MX network

> Body parameter

```json
{
  "rules": [
    {
      "allowedInbound": [
        {
          "allowedIps": [
            "10.82.112.0/24",
            "10.82.0.0/16"
          ],
          "destinationPorts": [
            "80"
          ],
          "protocol": "tcp"
        },
        {
          "allowedIps": [
            "10.81.110.5",
            "10.81.0.0/16"
          ],
          "destinationPorts": [
            "8080"
          ],
          "protocol": "udp"
        }
      ],
      "lanIp": "192.168.128.22",
      "name": "Service behind NAT",
      "publicIp": "146.12.3.33",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="set-the-11-nat-mapping-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» rules|body|[object]|true|An array of 1:1 nat rules|
|» » allowedInbound|body|[object]|false|The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource|
|» » » allowedIps|body|[string]|false|An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any'|
|» » » destinationPorts|body|[string]|false|An array of ports or port ranges that will be forwarded to the host on the LAN|
|» » » protocol|body|string|false|Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'|
|» » lanIp|body|string|true|The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN|
|» » name|body|string|false|A descriptive name for the rule|
|» » publicIp|body|string|false|The IP address that will be used to access the internal resource from the WAN|
|» » uplink|body|string|false|The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » protocol|any|
|» » » protocol|icmp-ping|
|» » » protocol|tcp|
|» » » protocol|udp|
|» » uplink|internet1|
|» » uplink|internet2|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "allowedInbound": [
        {
          "allowedIps": [
            "10.82.112.0/24",
            "10.82.0.0/16"
          ],
          "destinationPorts": [
            "80"
          ],
          "protocol": "tcp"
        },
        {
          "allowedIps": [
            "10.81.110.5",
            "10.81.0.0/16"
          ],
          "destinationPorts": [
            "8080"
          ],
          "protocol": "udp"
        }
      ],
      "lanIp": "192.168.128.22",
      "name": "Service behind NAT",
      "publicIp": "146.12.3.33",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="set-the-11-nat-mapping-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-1many-nat-rules">MX 1:Many NAT rules</h1>

## Return the 1:Many NAT mapping rules for an MX network

<a id="opIdgetNetworkOneToManyNatRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/oneToManyNatRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/oneToManyNatRules`

Return the 1:Many NAT mapping rules for an MX network

<h3 id="return-the-1many-nat-mapping-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "portRules": [
        {
          "allowedIps": [
            "any"
          ],
          "localIp": "192.168.128.1",
          "localPort": "443",
          "name": "Rule 1",
          "protocol": "tcp",
          "publicPort": "9443"
        },
        {
          "allowedIps": [
            "10.82.110.0/24",
            "10.82.111.0/24"
          ],
          "localIp": "192.168.128.1",
          "localPort": "80",
          "name": "Rule 2",
          "protocol": "tcp",
          "publicPort": "8080"
        }
      ],
      "publicIp": "146.11.11.13",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="return-the-1many-nat-mapping-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Set the 1:Many NAT mapping rules for an MX network

<a id="opIdupdateNetworkOneToManyNatRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/oneToManyNatRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "portRules": [
          {
            "allowedIps": [
              "any"
            ],
            "localIp": "192.168.128.1",
            "localPort": "443",
            "name": "Rule 1",
            "protocol": "tcp",
            "publicPort": "9443"
          },
          {
            "allowedIps": [
              "10.82.110.0/24",
              "10.82.111.0/24"
            ],
            "localIp": "192.168.128.1",
            "localPort": "80",
            "name": "Rule 2",
            "protocol": "tcp",
            "publicPort": "8080"
          }
        ],
        "publicIp": "146.11.11.13",
        "uplink": "internet1"
      }
    ]
  }'
```

`PUT /networks/{networkId}/oneToManyNatRules`

Set the 1:Many NAT mapping rules for an MX network

> Body parameter

```json
{
  "rules": [
    {
      "portRules": [
        {
          "allowedIps": [
            "any"
          ],
          "localIp": "192.168.128.1",
          "localPort": "443",
          "name": "Rule 1",
          "protocol": "tcp",
          "publicPort": "9443"
        },
        {
          "allowedIps": [
            "10.82.110.0/24",
            "10.82.111.0/24"
          ],
          "localIp": "192.168.128.1",
          "localPort": "80",
          "name": "Rule 2",
          "protocol": "tcp",
          "publicPort": "8080"
        }
      ],
      "publicIp": "146.11.11.13",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="set-the-1many-nat-mapping-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» rules|body|[object]|true|An array of 1:Many nat rules|
|» » portRules|body|[object]|true|An array of associated forwarding rules|
|» » » allowedIps|body|[string]|false|Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or 'any'|
|» » » localIp|body|string|false|Local IP address to which traffic will be forwarded|
|» » » localPort|body|string|false|Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port|
|» » » name|body|string|false|A description of the rule|
|» » » protocol|body|string|false|'tcp' or 'udp'|
|» » » publicPort|body|string|false|Destination port of the traffic that is arriving on the WAN|
|» » publicIp|body|string|true|The IP address that will be used to access the internal resource from the WAN|
|» » uplink|body|string|true|The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » protocol|tcp|
|» » » protocol|udp|
|» » uplink|internet1|
|» » uplink|internet2|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "portRules": [
        {
          "allowedIps": [
            "any"
          ],
          "localIp": "192.168.128.1",
          "localPort": "443",
          "name": "Rule 1",
          "protocol": "tcp",
          "publicPort": "9443"
        },
        {
          "allowedIps": [
            "10.82.110.0/24",
            "10.82.111.0/24"
          ],
          "localIp": "192.168.128.1",
          "localPort": "80",
          "name": "Rule 2",
          "protocol": "tcp",
          "publicPort": "8080"
        }
      ],
      "publicIp": "146.11.11.13",
      "uplink": "internet1"
    }
  ]
}
```

<h3 id="set-the-1many-nat-mapping-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-l3-inbound-firewall">MX L3 inbound firewall</h1>

## Return the inbound firewall rules for an MX network

<a id="opIdgetNetworkApplianceFirewallInboundFirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/appliance/firewall/inboundFirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/appliance/firewall/inboundFirewallRules`

Return the inbound firewall rules for an MX network

<h3 id="return-the-inbound-firewall-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ],
  "syslogDefaultRule": true
}
```

<h3 id="return-the-inbound-firewall-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the inbound firewall rules of an MX network

<a id="opIdupdateNetworkApplianceFirewallInboundFirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/appliance/firewall/inboundFirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "comment": "Allow TCP traffic to subnet with HTTP servers.",
        "destCidr": "192.168.1.0/24",
        "destPort": "443",
        "policy": "allow",
        "protocol": "tcp",
        "srcCidr": "Any",
        "srcPort": "Any",
        "syslogEnabled": false
      }
    ]
  }'
```

`PUT /networks/{networkId}/appliance/firewall/inboundFirewallRules`

Update the inbound firewall rules of an MX network

> Body parameter

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ]
}
```

<h3 id="update-the-inbound-firewall-rules-of-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An ordered array of the firewall rules (not including the default rule)|
|» » comment|body|string|false|Description of the rule (optional)|
|» » destCidr|body|string|true|Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'|
|» » destPort|body|string|false|Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'|
|» » policy|body|string|true|'allow' or 'deny' traffic specified by this rule|
|» » protocol|body|string|true|The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')|
|» » srcCidr|body|string|true|Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)|
|» » srcPort|body|string|false|Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'|
|» » syslogEnabled|body|boolean|false|Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)|
|» syslogDefaultRule|body|boolean|false|Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|allow|
|» » policy|deny|
|» » protocol|any|
|» » protocol|icmp|
|» » protocol|icmp6|
|» » protocol|tcp|
|» » protocol|udp|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ],
  "syslogDefaultRule": true
}
```

<h3 id="update-the-inbound-firewall-rules-of-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-l3-outbound-firewall">MX L3 outbound firewall</h1>

## Return the L3 firewall rules for an MX network

<a id="opIdgetNetworkL3FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/l3FirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/l3FirewallRules`

Return the L3 firewall rules for an MX network

<h3 id="return-the-l3-firewall-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="return-the-l3-firewall-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-l3-firewall-rules-for-an-mx-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the L3 firewall rules of an MX network

<a id="opIdupdateNetworkL3FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/l3FirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "comment": "Allow TCP traffic to subnet with HTTP servers.",
        "destCidr": "192.168.1.0/24",
        "destPort": "443",
        "policy": "allow",
        "protocol": "tcp",
        "srcCidr": "Any",
        "srcPort": "Any",
        "syslogEnabled": false
      }
    ]
  }'
```

`PUT /networks/{networkId}/l3FirewallRules`

Update the L3 firewall rules of an MX network

> Body parameter

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ]
}
```

<h3 id="update-the-l3-firewall-rules-of-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An ordered array of the firewall rules (not including the default rule)|
|» » comment|body|string|false|Description of the rule (optional)|
|» » destCidr|body|string|true|Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'|
|» » destPort|body|string|false|Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'|
|» » policy|body|string|true|'allow' or 'deny' traffic specified by this rule|
|» » protocol|body|string|true|The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')|
|» » srcCidr|body|string|true|Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)|
|» » srcPort|body|string|false|Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'|
|» » syslogEnabled|body|boolean|false|Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)|
|» syslogDefaultRule|body|boolean|false|Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|allow|
|» » policy|deny|
|» » protocol|any|
|» » protocol|icmp|
|» » protocol|icmp6|
|» » protocol|tcp|
|» » protocol|udp|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="update-the-l3-firewall-rules-of-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-l3-firewall-rules-of-an-mx-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-l7-application-categories">MX L7 application categories</h1>

## Return the L7 firewall application categories and their associated applications for an MX network

<a id="opIdgetNetworkL7FirewallRulesApplicationCategories"></a>

> Code samples

```bash
curl https://example.com/networks/string/l7FirewallRules/applicationCategories \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/l7FirewallRules/applicationCategories`

Return the L7 firewall application categories and their associated applications for an MX network

<h3 id="return-the-l7-firewall-application-categories-and-their-associated-applications-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "applicationCategories": [
    {
      "applications": [
        {
          "id": "meraki:layer7/application/5",
          "name": "Advertising.com"
        },
        {
          "id": "meraki:layer7/application/0",
          "name": "AppNexus"
        },
        {
          "id": "meraki:layer7/application/1",
          "name": "Brightroll"
        }
      ],
      "id": "meraki:layer7/category/24",
      "name": "Advertising"
    }
  ]
}
```

<h3 id="return-the-l7-firewall-application-categories-and-their-associated-applications-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-l7-firewall">MX L7 firewall</h1>

## List the MX L7 firewall rules for an MX network

<a id="opIdgetNetworkL7FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/l7FirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/l7FirewallRules`

List the MX L7 firewall rules for an MX network

<h3 id="list-the-mx-l7-firewall-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "policy": "deny",
      "type": "host",
      "value": "google.com"
    },
    {
      "policy": "deny",
      "type": "port",
      "value": "23"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24:5555"
    }
  ]
}
```

<h3 id="list-the-mx-l7-firewall-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the MX L7 firewall rules for an MX network

<a id="opIdupdateNetworkL7FirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/l7FirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "policy": "deny",
        "type": "host",
        "value": "google.com"
      },
      {
        "policy": "deny",
        "type": "port",
        "value": "23"
      },
      {
        "policy": "deny",
        "type": "ipRange",
        "value": "10.11.12.00/24"
      },
      {
        "policy": "deny",
        "type": "ipRange",
        "value": "10.11.12.00/24:5555"
      }
    ]
  }'
```

`PUT /networks/{networkId}/l7FirewallRules`

Update the MX L7 firewall rules for an MX network

> Body parameter

```json
{
  "rules": [
    {
      "policy": "deny",
      "type": "host",
      "value": "google.com"
    },
    {
      "policy": "deny",
      "type": "port",
      "value": "23"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24:5555"
    }
  ]
}
```

<h3 id="update-the-mx-l7-firewall-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An ordered array of the MX L7 firewall rules|
|» » policy|body|string|false|'Deny' traffic specified by this rule|
|» » type|body|string|false|Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'|
|» » value|body|string|false|The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|deny|
|» » type|application|
|» » type|applicationCategory|
|» » type|host|
|» » type|ipRange|
|» » type|port|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "policy": "deny",
      "type": "host",
      "value": "google.com"
    },
    {
      "policy": "deny",
      "type": "port",
      "value": "23"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24"
    },
    {
      "policy": "deny",
      "type": "ipRange",
      "value": "10.11.12.00/24:5555"
    }
  ]
}
```

<h3 id="update-the-mx-l7-firewall-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-vlan-ports">MX VLAN ports</h1>

## List per-port VLAN settings for all ports of a MX.

<a id="opIdgetNetworkAppliancePorts"></a>

> Code samples

```bash
curl https://example.com/networks/string/appliancePorts \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/appliancePorts`

List per-port VLAN settings for all ports of a MX.

<h3 id="list-per-port-vlan-settings-for-all-ports-of-a-mx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accessPolicy": "open",
    "dropUntaggedTraffic": false,
    "enabled": true,
    "number": 1,
    "type": "access",
    "vlan": 3
  }
]
```

<h3 id="list-per-port-vlan-settings-for-all-ports-of-a-mx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-per-port-vlan-settings-for-all-ports-of-a-mx-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return per-port VLAN settings for a single MX port.

<a id="opIdgetNetworkAppliancePort"></a>

> Code samples

```bash
curl https://example.com/networks/string/appliancePorts/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/appliancePorts/{appliancePortId}`

Return per-port VLAN settings for a single MX port.

<h3 id="return-per-port-vlan-settings-for-a-single-mx-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|appliancePortId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessPolicy": "open",
  "dropUntaggedTraffic": false,
  "enabled": true,
  "number": 1,
  "type": "access",
  "vlan": 3
}
```

<h3 id="return-per-port-vlan-settings-for-a-single-mx-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the per-port VLAN settings for a single MX port.

<a id="opIdupdateNetworkAppliancePort"></a>

> Code samples

```bash
curl https://example.com/networks/string/appliancePorts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "accessPolicy": "open",
    "dropUntaggedTraffic": false,
    "enabled": true,
    "type": "access",
    "vlan": 3
  }'
```

`PUT /networks/{networkId}/appliancePorts/{appliancePortId}`

Update the per-port VLAN settings for a single MX port.

> Body parameter

```json
{
  "accessPolicy": "open",
  "dropUntaggedTraffic": false,
  "enabled": true,
  "type": "access",
  "vlan": 3
}
```

<h3 id="update-the-per-port-vlan-settings-for-a-single-mx-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|appliancePortId|path|string|true|none|
|body|body|object|false|none|
|» accessPolicy|body|string|false|The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing.|
|» allowedVlans|body|string|false|Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port.|
|» dropUntaggedTraffic|body|boolean|false|Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true.|
|» enabled|body|boolean|false|The status of the port|
|» type|body|string|false|The type of the port: 'access' or 'trunk'.|
|» vlan|body|integer|false|Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode.|

> Example responses

> 200 Response

```json
{
  "accessPolicy": "open",
  "dropUntaggedTraffic": false,
  "enabled": true,
  "number": 1,
  "type": "access",
  "vlan": 3
}
```

<h3 id="update-the-per-port-vlan-settings-for-a-single-mx-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-vpn-firewall">MX VPN firewall</h1>

## Return the firewall rules for an organization's site-to-site VPN

<a id="opIdgetOrganizationVpnFirewallRules"></a>

> Code samples

```bash
curl https://example.com/organizations/string/vpnFirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/vpnFirewallRules`

Return the firewall rules for an organization's site-to-site VPN

<h3 id="return-the-firewall-rules-for-an-organizations-site-to-site-vpn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="return-the-firewall-rules-for-an-organizations-site-to-site-vpn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-firewall-rules-for-an-organizations-site-to-site-vpn-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the firewall rules of an organization's site-to-site VPN

<a id="opIdupdateOrganizationVpnFirewallRules"></a>

> Code samples

```bash
curl https://example.com/organizations/string/vpnFirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "comment": "Allow TCP traffic to subnet with HTTP servers.",
        "destCidr": "192.168.1.0/24",
        "destPort": "443",
        "policy": "allow",
        "protocol": "tcp",
        "srcCidr": "Any",
        "srcPort": "Any",
        "syslogEnabled": false
      }
    ]
  }'
```

`PUT /organizations/{organizationId}/vpnFirewallRules`

Update the firewall rules of an organization's site-to-site VPN

> Body parameter

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ]
}
```

<h3 id="update-the-firewall-rules-of-an-organizations-site-to-site-vpn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An ordered array of the firewall rules (not including the default rule)|
|» » comment|body|string|false|Description of the rule (optional)|
|» » destCidr|body|string|true|Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)|
|» » destPort|body|string|false|Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'|
|» » policy|body|string|true|'allow' or 'deny' traffic specified by this rule|
|» » protocol|body|string|true|The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')|
|» » srcCidr|body|string|true|Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)|
|» » srcPort|body|string|false|Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'|
|» » syslogEnabled|body|boolean|false|Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)|
|» syslogDefaultRule|body|boolean|false|Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|allow|
|» » policy|deny|
|» » protocol|any|
|» » protocol|icmp|
|» » protocol|icmp6|
|» » protocol|tcp|
|» » protocol|udp|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="update-the-firewall-rules-of-an-organizations-site-to-site-vpn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-firewall-rules-of-an-organizations-site-to-site-vpn-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-cellular-firewall">MX cellular firewall</h1>

## Return the cellular firewall rules for an MX network

<a id="opIdgetNetworkCellularFirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/cellularFirewallRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/cellularFirewallRules`

Return the cellular firewall rules for an MX network

<h3 id="return-the-cellular-firewall-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="return-the-cellular-firewall-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-cellular-firewall-rules-for-an-mx-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the cellular firewall rules of an MX network

<a id="opIdupdateNetworkCellularFirewallRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/cellularFirewallRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "comment": "Allow TCP traffic to subnet with HTTP servers.",
        "destCidr": "192.168.1.0/24",
        "destPort": "443",
        "policy": "allow",
        "protocol": "tcp",
        "srcCidr": "Any",
        "srcPort": "Any",
        "syslogEnabled": false
      }
    ]
  }'
```

`PUT /networks/{networkId}/cellularFirewallRules`

Update the cellular firewall rules of an MX network

> Body parameter

```json
{
  "rules": [
    {
      "comment": "Allow TCP traffic to subnet with HTTP servers.",
      "destCidr": "192.168.1.0/24",
      "destPort": "443",
      "policy": "allow",
      "protocol": "tcp",
      "srcCidr": "Any",
      "srcPort": "Any",
      "syslogEnabled": false
    }
  ]
}
```

<h3 id="update-the-cellular-firewall-rules-of-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» rules|body|[object]|false|An ordered array of the firewall rules (not including the default rule)|
|» » comment|body|string|false|Description of the rule (optional)|
|» » destCidr|body|string|true|Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'|
|» » destPort|body|string|false|Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'|
|» » policy|body|string|true|'allow' or 'deny' traffic specified by this rule|
|» » protocol|body|string|true|The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')|
|» » srcCidr|body|string|true|Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)|
|» » srcPort|body|string|false|Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'|
|» » syslogEnabled|body|boolean|false|Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » policy|allow|
|» » policy|deny|
|» » protocol|any|
|» » protocol|icmp|
|» » protocol|icmp6|
|» » protocol|tcp|
|» » protocol|udp|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Allow TCP traffic to subnet with HTTP servers.",
    "destCidr": "192.168.1.0/24",
    "destPort": "443",
    "policy": "allow",
    "protocol": "tcp",
    "srcCidr": "Any",
    "srcPort": "Any",
    "syslogEnabled": false
  }
]
```

<h3 id="update-the-cellular-firewall-rules-of-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-cellular-firewall-rules-of-an-mx-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-port-forwarding-rules">MX port forwarding rules</h1>

## Return the port forwarding rules for an MX network

<a id="opIdgetNetworkPortForwardingRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/portForwardingRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/portForwardingRules`

Return the port forwarding rules for an MX network

<h3 id="return-the-port-forwarding-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "allowedIps": [
        "any"
      ],
      "lanIp": "192.168.128.1",
      "localPort": "442-443",
      "name": "Description of Port Forwarding Rule",
      "protocol": "tcp",
      "publicPort": "8100-8101",
      "uplink": "both"
    }
  ]
}
```

<h3 id="return-the-port-forwarding-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the port forwarding rules for an MX network

<a id="opIdupdateNetworkPortForwardingRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/portForwardingRules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "rules": [
      {
        "allowedIps": [
          "any"
        ],
        "lanIp": "192.168.128.1",
        "localPort": "442-443",
        "name": "Description of Port Forwarding Rule",
        "protocol": "tcp",
        "publicPort": "8100-8101",
        "uplink": "both"
      }
    ]
  }'
```

`PUT /networks/{networkId}/portForwardingRules`

Update the port forwarding rules for an MX network

> Body parameter

```json
{
  "rules": [
    {
      "allowedIps": [
        "any"
      ],
      "lanIp": "192.168.128.1",
      "localPort": "442-443",
      "name": "Description of Port Forwarding Rule",
      "protocol": "tcp",
      "publicPort": "8100-8101",
      "uplink": "both"
    }
  ]
}
```

<h3 id="update-the-port-forwarding-rules-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» rules|body|[object]|true|An array of port forwarding params|
|» » allowedIps|body|[string]|true|An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any)|
|» » lanIp|body|string|true|The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN|
|» » localPort|body|string|true|A port or port ranges that will receive the forwarded traffic from the WAN|
|» » name|body|string|false|A descriptive name for the rule|
|» » protocol|body|string|true|TCP or UDP|
|» » publicPort|body|string|true|A port or port ranges that will be forwarded to the host on the LAN|
|» » uplink|body|string|false|The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » protocol|tcp|
|» » protocol|udp|
|» » uplink|both|
|» » uplink|internet1|
|» » uplink|internet2|

> Example responses

> 200 Response

```json
{
  "rules": [
    {
      "allowedIps": [
        "any"
      ],
      "lanIp": "192.168.128.1",
      "localPort": "442-443",
      "name": "Description of Port Forwarding Rule",
      "protocol": "tcp",
      "publicPort": "8100-8101",
      "uplink": "both"
    }
  ]
}
```

<h3 id="update-the-port-forwarding-rules-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-static-routes">MX static routes</h1>

## List the static routes for an MX or teleworker network

<a id="opIdgetNetworkStaticRoutes"></a>

> Code samples

```bash
curl https://example.com/networks/string/staticRoutes \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/staticRoutes`

List the static routes for an MX or teleworker network

<h3 id="list-the-static-routes-for-an-mx-or-teleworker-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "enabled": true,
    "fixedIpAssignments": {
      "22:33:44:55:66:77": {
        "ip": "1.2.3.4",
        "name": "Some client name"
      }
    },
    "gatewayIp": "1.2.3.5",
    "id": "d7fa4948-7921-4dfa-af6b-ae8b16c20c39",
    "ipVersion": 4,
    "name": "My route",
    "networkId": "N_24329156",
    "reservedIpRanges": [
      {
        "comment": "A reserved IP range",
        "end": "192.168.1.1",
        "start": "192.168.1.0"
      }
    ],
    "subnet": "192.168.1.0/24"
  }
]
```

<h3 id="list-the-static-routes-for-an-mx-or-teleworker-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-static-routes-for-an-mx-or-teleworker-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a static route for an MX or teleworker network

<a id="opIdcreateNetworkStaticRoute"></a>

> Code samples

```bash
curl https://example.com/networks/string/staticRoutes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "gatewayIp": "1.2.3.5",
    "name": "My route",
    "subnet": "192.168.1.0/24"
  }'
```

`POST /networks/{networkId}/staticRoutes`

Add a static route for an MX or teleworker network

> Body parameter

```json
{
  "gatewayIp": "1.2.3.5",
  "name": "My route",
  "subnet": "192.168.1.0/24"
}
```

<h3 id="add-a-static-route-for-an-mx-or-teleworker-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» gatewayIp|body|string|true|The gateway IP (next hop) of the static route|
|» name|body|string|true|The name of the new static route|
|» subnet|body|string|true|The subnet of the static route|

> Example responses

> 201 Response

```json
{
  "enabled": true,
  "fixedIpAssignments": {},
  "gatewayIp": "1.2.3.5",
  "id": "d7fa4948-7921-4dfa-af6b-ae8b16c20c39",
  "ipVersion": 4,
  "name": "My route",
  "networkId": "N_24329156",
  "reservedIpRanges": [],
  "subnet": "192.168.1.0/24"
}
```

<h3 id="add-a-static-route-for-an-mx-or-teleworker-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a static route for an MX or teleworker network

<a id="opIdgetNetworkStaticRoute"></a>

> Code samples

```bash
curl https://example.com/networks/string/staticRoutes/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/staticRoutes/{staticRouteId}`

Return a static route for an MX or teleworker network

<h3 id="return-a-static-route-for-an-mx-or-teleworker-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|staticRouteId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "gatewayIp": "1.2.3.5",
  "id": "d7fa4948-7921-4dfa-af6b-ae8b16c20c39",
  "ipVersion": 4,
  "name": "My route",
  "networkId": "N_24329156",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24"
}
```

<h3 id="return-a-static-route-for-an-mx-or-teleworker-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a static route for an MX or teleworker network

<a id="opIdupdateNetworkStaticRoute"></a>

> Code samples

```bash
curl https://example.com/networks/string/staticRoutes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "fixedIpAssignments": {
      "22:33:44:55:66:77": {
        "ip": "1.2.3.4",
        "name": "Some client name"
      }
    },
    "name": "My route",
    "reservedIpRanges": [
      {
        "comment": "A reserved IP range",
        "end": "192.168.1.1",
        "start": "192.168.1.0"
      }
    ],
    "subnet": "192.168.1.0/24"
  }'
```

`PUT /networks/{networkId}/staticRoutes/{staticRouteId}`

Update a static route for an MX or teleworker network

> Body parameter

```json
{
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "name": "My route",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24"
}
```

<h3 id="update-a-static-route-for-an-mx-or-teleworker-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|staticRouteId|path|string|true|none|
|body|body|object|false|none|
|» enabled|body|boolean|false|The enabled state of the static route|
|» fixedIpAssignments|body|object|false|The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.|
|» gatewayIp|body|string|false|The gateway IP (next hop) of the static route|
|» name|body|string|false|The name of the static route|
|» reservedIpRanges|body|[object]|false|The DHCP reserved IP ranges on the static route|
|» » comment|body|string|true|A text comment for the reserved range|
|» » end|body|string|true|The last IP in the reserved range|
|» » start|body|string|true|The first IP in the reserved range|
|» subnet|body|string|false|The subnet of the static route|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "gatewayIp": "1.2.3.5",
  "id": "d7fa4948-7921-4dfa-af6b-ae8b16c20c39",
  "ipVersion": 4,
  "name": "My route",
  "networkId": "N_24329156",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24"
}
```

<h3 id="update-a-static-route-for-an-mx-or-teleworker-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a static route from an MX or teleworker network

<a id="opIddeleteNetworkStaticRoute"></a>

> Code samples

```bash
curl https://example.com/networks/string/staticRoutes/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/staticRoutes/{staticRouteId}`

Delete a static route from an MX or teleworker network

<h3 id="delete-a-static-route-from-an-mx-or-teleworker-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|staticRouteId|path|string|true|none|

<h3 id="delete-a-static-route-from-an-mx-or-teleworker-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-mx-warm-spare-settings">MX warm spare settings</h1>

## Swap MX primary and warm spare appliances

<a id="opIdswapNetworkWarmSpare"></a>

> Code samples

```bash
curl https://example.com/networks/string/swapWarmSpare \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/swapWarmSpare`

Swap MX primary and warm spare appliances

<h3 id="swap-mx-primary-and-warm-spare-appliances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="swap-mx-primary-and-warm-spare-appliances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return MX warm spare settings

<a id="opIdgetNetworkWarmSpareSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/warmSpareSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/warmSpareSettings`

Return MX warm spare settings

<h3 id="return-mx-warm-spare-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "primarySerial": "Q234-ABCD-5678",
  "spareSerial": "Q234-ABCD-5678",
  "uplinkMode": "virtual",
  "wan1": {
    "ip": "1.2.3.4",
    "subnet": "192.168.1.0/24"
  },
  "wan2": {
    "ip": "1.2.3.4",
    "subnet": "192.168.128.0/24"
  }
}
```

<h3 id="return-mx-warm-spare-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update MX warm spare settings

<a id="opIdupdateNetworkWarmSpareSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/warmSpareSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "enabled": true,
    "spareSerial": "Q234-ABCD-5678",
    "uplinkMode": "virtual",
    "virtualIp1": "1.2.3.4",
    "virtualIp2": "1.2.3.4"
  }'
```

`PUT /networks/{networkId}/warmSpareSettings`

Update MX warm spare settings

> Body parameter

```json
{
  "enabled": true,
  "spareSerial": "Q234-ABCD-5678",
  "uplinkMode": "virtual",
  "virtualIp1": "1.2.3.4",
  "virtualIp2": "1.2.3.4"
}
```

<h3 id="update-mx-warm-spare-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» enabled|body|boolean|true|Enable warm spare|
|» spareSerial|body|string|false|Serial number of the warm spare appliance|
|» uplinkMode|body|string|false|Uplink mode, either virtual or public|
|» virtualIp1|body|string|false|The WAN 1 shared IP|
|» virtualIp2|body|string|false|The WAN 2 shared IP|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "primarySerial": "Q234-ABCD-5678",
  "spareSerial": "Q234-ABCD-5678",
  "uplinkMode": "virtual",
  "wan1": {
    "ip": "1.2.3.4",
    "subnet": "192.168.1.0/24"
  },
  "wan2": {
    "ip": "1.2.3.4",
    "subnet": "192.168.128.0/24"
  }
}
```

<h3 id="update-mx-warm-spare-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-malware-settings">Malware settings</h1>

## Returns all supported malware settings for an MX network

<a id="opIdgetNetworkSecurityMalwareSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/security/malwareSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/security/malwareSettings`

Returns all supported malware settings for an MX network

<h3 id="returns-all-supported-malware-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "allowedFiles": [
    {
      "comment": "allow ZIP file",
      "sha256": "e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503"
    }
  ],
  "allowedUrls": [
    {
      "comment": "allow example.org",
      "url": "example.org"
    },
    {
      "comment": "allow help.com.au",
      "url": "help.com.au"
    }
  ],
  "mode": "enabled"
}
```

<h3 id="returns-all-supported-malware-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Set the supported malware settings for an MX network

<a id="opIdupdateNetworkSecurityMalwareSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/security/malwareSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "allowedFiles": [
      {
        "comment": "allow ZIP file",
        "sha256": "e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503"
      }
    ],
    "allowedUrls": [
      {
        "comment": "allow example.org",
        "url": "example.org"
      },
      {
        "comment": "allow help.com.au",
        "url": "help.com.au"
      }
    ],
    "mode": "enabled"
  }'
```

`PUT /networks/{networkId}/security/malwareSettings`

Set the supported malware settings for an MX network

> Body parameter

```json
{
  "allowedFiles": [
    {
      "comment": "allow ZIP file",
      "sha256": "e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503"
    }
  ],
  "allowedUrls": [
    {
      "comment": "allow example.org",
      "url": "example.org"
    },
    {
      "comment": "allow help.com.au",
      "url": "help.com.au"
    }
  ],
  "mode": "enabled"
}
```

<h3 id="set-the-supported-malware-settings-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» allowedFiles|body|[object]|false|The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing|
|» » comment|body|string|true|Comment about the allowed entity|
|» » sha256|body|string|true|The file sha256 hash to allow|
|» allowedUrls|body|[object]|false|The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing|
|» » comment|body|string|true|Comment about the allowed entity|
|» » url|body|string|true|The url to allow|
|» mode|body|string|true|Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|disabled|
|» mode|enabled|

> Example responses

> 200 Response

```json
{
  "allowedFiles": [
    {
      "comment": "allow ZIP file",
      "sha256": "e82c5f7d75004727e1f3b94426b9a11c8bc4c312a9170ac9a73abace40aef503"
    }
  ],
  "allowedUrls": [
    {
      "comment": "allow example.org",
      "url": "example.org"
    },
    {
      "comment": "allow help.com.au",
      "url": "help.com.au"
    }
  ],
  "mode": "enabled"
}
```

<h3 id="set-the-supported-malware-settings-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-meraki-auth-users">Meraki auth users</h1>

## List the splash or RADIUS users configured under Meraki Authentication for a network

<a id="opIdgetNetworkMerakiAuthUsers"></a>

> Code samples

```bash
curl https://example.com/networks/string/merakiAuthUsers \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/merakiAuthUsers`

List the splash or RADIUS users configured under Meraki Authentication for a network

<h3 id="list-the-splash-or-radius-users-configured-under-meraki-authentication-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accountType": "Guest",
    "authorizations": [
      {
        "authorizedByEmail": "miles@meraki.com",
        "authorizedByName": "Miles Meraki",
        "authorizedZone": "Store WiFi",
        "expiresAt": 1526087474
      }
    ],
    "createdAt": 1518365681,
    "email": "miles@meraki.com",
    "id": "aGlAaGkuY29t",
    "name": "Miles Meraki"
  }
]
```

<h3 id="list-the-splash-or-radius-users-configured-under-meraki-authentication-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-splash-or-radius-users-configured-under-meraki-authentication-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the Meraki Auth splash or RADIUS user

<a id="opIdgetNetworkMerakiAuthUser"></a>

> Code samples

```bash
curl https://example.com/networks/string/merakiAuthUsers/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}`

Return the Meraki Auth splash or RADIUS user

<h3 id="return-the-meraki-auth-splash-or-radius-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|merakiAuthUserId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accountType": "Guest",
  "authorizations": [
    {
      "authorizedByEmail": "miles@meraki.com",
      "authorizedByName": "Miles Meraki",
      "authorizedZone": "Store WiFi",
      "expiresAt": 1526087474
    }
  ],
  "createdAt": 1518365681,
  "email": "miles@meraki.com",
  "id": "aGlAaGkuY29t",
  "name": "Miles Meraki"
}
```

<h3 id="return-the-meraki-auth-splash-or-radius-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-monitored-media-servers">Monitored media servers</h1>

## List the monitored media servers for this organization

<a id="opIdgetOrganizationInsightMonitoredMediaServers"></a>

> Code samples

```bash
curl https://example.com/organizations/string/insight/monitoredMediaServers \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/insight/monitoredMediaServers`

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

<h3 id="list-the-monitored-media-servers-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "address": "123.123.123.1",
    "id": "1284392014819",
    "name": "Sample VoIP Provider"
  }
]
```

<h3 id="list-the-monitored-media-servers-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-monitored-media-servers-for-this-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a media server to be monitored for this organization

<a id="opIdcreateOrganizationInsightMonitoredMediaServer"></a>

> Code samples

```bash
curl https://example.com/organizations/string/insight/monitoredMediaServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "address": "123.123.123.1",
    "name": "Sample VoIP Provider"
  }'
```

`POST /organizations/{organizationId}/insight/monitoredMediaServers`

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

> Body parameter

```json
{
  "address": "123.123.123.1",
  "name": "Sample VoIP Provider"
}
```

<h3 id="add-a-media-server-to-be-monitored-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» address|body|string|true|The IP address (IPv4 only) or hostname of the media server to monitor|
|» name|body|string|true|The name of the VoIP provider|

> Example responses

> 201 Response

```json
{
  "address": "123.123.123.1",
  "id": "1284392014819",
  "name": "Sample VoIP Provider"
}
```

<h3 id="add-a-media-server-to-be-monitored-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a monitored media server for this organization

<a id="opIdgetOrganizationInsightMonitoredMediaServer"></a>

> Code samples

```bash
curl https://example.com/organizations/string/insight/monitoredMediaServers/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

<h3 id="return-a-monitored-media-server-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|monitoredMediaServerId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "address": "123.123.123.1",
  "id": "1284392014819",
  "name": "Sample VoIP Provider"
}
```

<h3 id="return-a-monitored-media-server-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a monitored media server for this organization

<a id="opIdupdateOrganizationInsightMonitoredMediaServer"></a>

> Code samples

```bash
curl https://example.com/organizations/string/insight/monitoredMediaServers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "address": "123.123.123.1",
    "name": "Sample VoIP Provider"
  }'
```

`PUT /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

> Body parameter

```json
{
  "address": "123.123.123.1",
  "name": "Sample VoIP Provider"
}
```

<h3 id="update-a-monitored-media-server-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|monitoredMediaServerId|path|string|true|none|
|body|body|object|false|none|
|» address|body|string|false|The IP address (IPv4 only) or hostname of the media server to monitor|
|» name|body|string|false|The name of the VoIP provider|

> Example responses

> 200 Response

```json
{
  "address": "123.123.123.1",
  "id": "1284392014819",
  "name": "Sample VoIP Provider"
}
```

<h3 id="update-a-monitored-media-server-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a monitored media server from this organization

<a id="opIddeleteOrganizationInsightMonitoredMediaServer"></a>

> Code samples

```bash
curl https://example.com/organizations/string/insight/monitoredMediaServers/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}`

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

<h3 id="delete-a-monitored-media-server-from-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|monitoredMediaServerId|path|string|true|none|

<h3 id="delete-a-monitored-media-server-from-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-named-tag-scope">Named tag scope</h1>

## List the target groups in this network

<a id="opIdgetNetworkSmTargetGroups"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/targetGroups \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/targetGroups`

List the target groups in this network

<h3 id="list-the-target-groups-in-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|withDetails|query|boolean|false|Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response|

> Example responses

> 200 Response

```json
[
  {
    "name": "My target group",
    "scope": "none",
    "tags": "[]",
    "type": "devices"
  }
]
```

<h3 id="list-the-target-groups-in-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-target-groups-in-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a target group

<a id="opIdcreateNetworkSmTargetGroup"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/targetGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "My target group",
    "scope": "none",
    "tags": "[]",
    "type": "devices"
  }'
```

`POST /networks/{networkId}/sm/targetGroups`

Add a target group

> Body parameter

```json
{
  "name": "My target group",
  "scope": "none",
  "tags": "[]",
  "type": "devices"
}
```

<h3 id="add-a-target-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|The name of this target group|
|» scope|body|string|false|The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.|

> Example responses

> 201 Response

```json
{
  "name": "My target group",
  "scope": "none",
  "tags": "[]",
  "type": "devices"
}
```

<h3 id="add-a-target-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a target group

<a id="opIdgetNetworkSmTargetGroup"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/targetGroups/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/targetGroups/{targetGroupId}`

Return a target group

<h3 id="return-a-target-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|targetGroupId|path|string|true|none|
|withDetails|query|boolean|false|Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response|

> Example responses

> 200 Response

```json
{
  "name": "My target group",
  "scope": "none",
  "tags": "[]",
  "type": "devices"
}
```

<h3 id="return-a-target-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a target group

<a id="opIdupdateNetworkSmTargetGroup"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/targetGroups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "My target group",
    "scope": "none",
    "tags": "[]",
    "type": "devices"
  }'
```

`PUT /networks/{networkId}/sm/targetGroups/{targetGroupId}`

Update a target group

> Body parameter

```json
{
  "name": "My target group",
  "scope": "none",
  "tags": "[]",
  "type": "devices"
}
```

<h3 id="update-a-target-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|targetGroupId|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|The name of this target group|
|» scope|body|string|false|The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty.|

> Example responses

> 200 Response

```json
{
  "name": "My target group",
  "scope": "none",
  "tags": "[]",
  "type": "devices"
}
```

<h3 id="update-a-target-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a target group from a network

<a id="opIddeleteNetworkSmTargetGroup"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/targetGroups/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/sm/targetGroups/{targetGroupId}`

Delete a target group from a network

<h3 id="delete-a-target-group-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|targetGroupId|path|string|true|none|

<h3 id="delete-a-target-group-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-networks">Networks</h1>

## Return a network

<a id="opIdgetNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}`

Return a network

<h3 id="return-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "disableMyMerakiCom": false,
  "enrollmentString": "my-enrollment-string",
  "id": "N_24329156",
  "name": "Main Office",
  "organizationId": "2930418",
  "productTypes": [
    "appliance",
    "switch",
    "wireless"
  ],
  "tags": " tag1 tag2 ",
  "timeZone": "America/Los_Angeles",
  "type": "combined"
}
```

<h3 id="return-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a network

<a id="opIdupdateNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "disableMyMerakiCom": false,
    "name": "Main Office",
    "tags": " tag1 tag2 ",
    "timeZone": "America/Los_Angeles"
  }'
```

`PUT /networks/{networkId}`

Update a network

> Body parameter

```json
{
  "disableMyMerakiCom": false,
  "name": "Main Office",
  "tags": " tag1 tag2 ",
  "timeZone": "America/Los_Angeles"
}
```

<h3 id="update-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» disableMyMerakiCom|body|boolean|false|Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)|
|» disableRemoteStatusPage|body|boolean|false|Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false|
|» enrollmentString|body|string|false|A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.|
|» name|body|string|false|The name of the network|
|» tags|body|string|false|A space-separated list of tags to be applied to the network|
|» timeZone|body|string|false|The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>|

> Example responses

> 200 Response

```json
{
  "disableMyMerakiCom": false,
  "enrollmentString": "my-enrollment-string",
  "id": "N_24329156",
  "name": "Main Office",
  "organizationId": "2930418",
  "productTypes": [
    "appliance",
    "switch",
    "wireless"
  ],
  "tags": " tag1 tag2 ",
  "timeZone": "America/Los_Angeles",
  "type": "combined"
}
```

<h3 id="update-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a network

<a id="opIddeleteNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}`

Delete a network

<h3 id="delete-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

<h3 id="delete-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List Air Marshal scan results from a network

<a id="opIdgetNetworkAirMarshal"></a>

> Code samples

```bash
curl https://example.com/networks/string/airMarshal \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/airMarshal`

List Air Marshal scan results from a network

<h3 id="list-air-marshal-scan-results-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.|

> Example responses

> 200 Response

```json
[
  {
    "bssids": [
      {
        "bssid": "00:11:22:33:44:55",
        "contained": false,
        "detectedBy": [
          {
            "device": "Q234-ABCD-5678",
            "rssi": 17
          }
        ]
      }
    ],
    "channels": [
      36,
      40
    ],
    "firstSeen": 1518365681,
    "lastSeen": 1526087474,
    "ssid": "linksys",
    "wiredLastSeen": 1526087474,
    "wiredMacs": [
      "00:11:22:33:44:55"
    ],
    "wiredVlans": [
      0,
      108
    ]
  }
]
```

<h3 id="list-air-marshal-scan-results-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-air-marshal-scan-results-from-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Bind a network to a template.

<a id="opIdbindNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string/bind \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "autoBind": false,
    "configTemplateId": "N_23952905"
  }'
```

`POST /networks/{networkId}/bind`

Bind a network to a template.

> Body parameter

```json
{
  "autoBind": false,
  "configTemplateId": "N_23952905"
}
```

<h3 id="bind-a-network-to-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» autoBind|body|boolean|false|Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model.|
|» configTemplateId|body|string|true|The ID of the template to which the network should be bound.|

<h3 id="bind-a-network-to-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the site-to-site VPN settings of a network

<a id="opIdgetNetworkSiteToSiteVpn"></a>

> Code samples

```bash
curl https://example.com/networks/string/siteToSiteVpn \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/siteToSiteVpn`

Return the site-to-site VPN settings of a network. Only valid for MX networks.

<h3 id="return-the-site-to-site-vpn-settings-of-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "hubs": [
    {
      "hubId": "N_4901849",
      "useDefaultRoute": true
    },
    {
      "hubId": "N_1892489",
      "useDefaultRoute": false
    }
  ],
  "mode": "spoke",
  "peerSgtCapable": true,
  "subnets": [
    {
      "localSubnet": "192.168.1.0/24",
      "useVpn": true
    },
    {
      "localSubnet": "192.168.128.0/24",
      "useVpn": true
    }
  ]
}
```

<h3 id="return-the-site-to-site-vpn-settings-of-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the site-to-site VPN settings of a network

<a id="opIdupdateNetworkSiteToSiteVpn"></a>

> Code samples

```bash
curl https://example.com/networks/string/siteToSiteVpn \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "hubs": [
      {
        "hubId": "N_4901849",
        "useDefaultRoute": true
      },
      {
        "hubId": "N_1892489",
        "useDefaultRoute": false
      }
    ],
    "mode": "spoke",
    "peerSgtCapable": true,
    "subnets": [
      {
        "localSubnet": "192.168.1.0/24",
        "useVpn": true
      },
      {
        "localSubnet": "192.168.128.0/24",
        "useVpn": true
      }
    ]
  }'
```

`PUT /networks/{networkId}/siteToSiteVpn`

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

> Body parameter

```json
{
  "hubs": [
    {
      "hubId": "N_4901849",
      "useDefaultRoute": true
    },
    {
      "hubId": "N_1892489",
      "useDefaultRoute": false
    }
  ],
  "mode": "spoke",
  "peerSgtCapable": true,
  "subnets": [
    {
      "localSubnet": "192.168.1.0/24",
      "useVpn": true
    },
    {
      "localSubnet": "192.168.128.0/24",
      "useVpn": true
    }
  ]
}
```

<h3 id="update-the-site-to-site-vpn-settings-of-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» hubs|body|[object]|false|The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.|
|» » hubId|body|string|true|The network ID of the hub.|
|» » useDefaultRoute|body|boolean|false|Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub.|
|» mode|body|string|true|The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'|
|» subnets|body|[object]|false|The list of subnets and their VPN presence.|
|» » localSubnet|body|string|true|The CIDR notation subnet used within the VPN|
|» » useVpn|body|boolean|false|Indicates the presence of the subnet in the VPN|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|hub|
|» mode|none|
|» mode|spoke|

> Example responses

> 200 Response

```json
{
  "hubs": [
    {
      "hubId": "N_4901849",
      "useDefaultRoute": true
    },
    {
      "hubId": "N_1892489",
      "useDefaultRoute": false
    }
  ],
  "mode": "spoke",
  "peerSgtCapable": true,
  "subnets": [
    {
      "localSubnet": "192.168.1.0/24",
      "useVpn": true
    },
    {
      "localSubnet": "192.168.128.0/24",
      "useVpn": true
    }
  ]
}
```

<h3 id="update-the-site-to-site-vpn-settings-of-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Split a combined network into individual networks for each type of device

<a id="opIdsplitNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string/split \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/split`

Split a combined network into individual networks for each type of device

<h3 id="split-a-combined-network-into-individual-networks-for-each-type-of-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "resultingNetworks": [
    {
      "disableMyMerakiCom": false,
      "enrollmentString": "my-enrollment-string",
      "id": "N_1234",
      "name": "Main Office - switch",
      "organizationId": "2930418",
      "productTypes": [
        "switch"
      ],
      "tags": " tag1 tag2 ",
      "timeZone": "America/Los_Angeles",
      "type": "switch"
    },
    {
      "disableMyMerakiCom": false,
      "enrollmentString": "my-enrollment-string",
      "id": "N_5678",
      "name": "Main Office - wireless",
      "organizationId": "2930418",
      "productTypes": [
        "wireless"
      ],
      "tags": " tag1 tag2 ",
      "timeZone": "America/Los_Angeles",
      "type": "wireless"
    }
  ]
}
```

<h3 id="split-a-combined-network-into-individual-networks-for-each-type-of-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the traffic analysis data for this network

<a id="opIdgetNetworkTraffic"></a>

> Code samples

```bash
curl https://example.com/networks/string/traffic \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/traffic`

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

<h3 id="return-the-traffic-analysis-data-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 30 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.|
|deviceType|query|string|false|Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deviceType|appliance|
|deviceType|combined|
|deviceType|switch|
|deviceType|wireless|

> Example responses

> 200 Response

```json
[
  {
    "activeTime": 77000,
    "application": "Gmail",
    "destination": null,
    "flows": 300,
    "numClients": 7,
    "port": 443,
    "protocol": "TCP",
    "recv": 61,
    "sent": 138
  }
]
```

<h3 id="return-the-traffic-analysis-data-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-traffic-analysis-data-for-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Unbind a network from a template.

<a id="opIdunbindNetwork"></a>

> Code samples

```bash
curl https://example.com/networks/string/unbind \
  -X POST \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/unbind`

Unbind a network from a template.

<h3 id="unbind-a-network-from-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

<h3 id="unbind-a-network-from-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the networks in an organization

<a id="opIdgetOrganizationNetworks"></a>

> Code samples

```bash
curl https://example.com/organizations/string/networks \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/networks`

List the networks in an organization

<h3 id="list-the-networks-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|configTemplateId|query|string|false|An optional parameter that is the ID of a config template. Will return all networks bound to that template.|

> Example responses

> 200 Response

```json
[
  {
    "disableMyMerakiCom": false,
    "enrollmentString": "my-enrollment-string",
    "id": "N_24329156",
    "name": "Main Office",
    "organizationId": "2930418",
    "productTypes": [
      "appliance",
      "switch",
      "wireless"
    ],
    "tags": " tag1 tag2 ",
    "timeZone": "America/Los_Angeles",
    "type": "combined"
  }
]
```

<h3 id="list-the-networks-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-networks-in-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a network

<a id="opIdcreateOrganizationNetwork"></a>

> Code samples

```bash
curl https://example.com/organizations/string/networks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "disableMyMerakiCom": false,
    "name": "Main Office",
    "tags": " tag1 tag2 ",
    "timeZone": "America/Los_Angeles",
    "type": "appliance switch camera"
  }'
```

`POST /organizations/{organizationId}/networks`

Create a network

> Body parameter

```json
{
  "disableMyMerakiCom": false,
  "name": "Main Office",
  "tags": " tag1 tag2 ",
  "timeZone": "America/Los_Angeles",
  "type": "appliance switch camera"
}
```

<h3 id="create-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» copyFromNetworkId|body|string|false|The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.|
|» disableMyMerakiCom|body|boolean|false|Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)|
|» disableRemoteStatusPage|body|boolean|false|Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false|
|» name|body|string|true|The name of the new network|
|» tags|body|string|false|A space-separated list of tags to be applied to the network|
|» timeZone|body|string|false|The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>|
|» type|body|string|true|The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.|

> Example responses

> 201 Response

```json
{
  "disableMyMerakiCom": false,
  "enrollmentString": "my-enrollment-string",
  "id": "N_24329156",
  "name": "Main Office",
  "organizationId": "2930418",
  "productTypes": [
    "appliance",
    "switch",
    "wireless"
  ],
  "tags": " tag1 tag2 ",
  "timeZone": "America/Los_Angeles",
  "type": "combined"
}
```

<h3 id="create-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Combine multiple networks into a single network

<a id="opIdcombineOrganizationNetworks"></a>

> Code samples

```bash
curl https://example.com/organizations/string/networks/combine \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "Long Island Office",
    "networkIds": [
      "N_1234",
      "N_5678"
    ]
  }'
```

`POST /organizations/{organizationId}/networks/combine`

Combine multiple networks into a single network

> Body parameter

```json
{
  "name": "Long Island Office",
  "networkIds": [
    "N_1234",
    "N_5678"
  ]
}
```

<h3 id="combine-multiple-networks-into-a-single-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» enrollmentString|body|string|false|A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.|
|» name|body|string|true|The name of the combined network|
|» networkIds|body|[string]|true|A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network|

> Example responses

> 200 Response

```json
{
  "resultingNetwork": {
    "disableMyMerakiCom": false,
    "enrollmentString": "my-enrollment-string",
    "id": "N_24329156",
    "name": "Main Office",
    "organizationId": "2930418",
    "productTypes": [
      "appliance",
      "switch",
      "wireless"
    ],
    "tags": " tag1 tag2 ",
    "timeZone": "America/Los_Angeles",
    "type": "combined"
  }
}
```

<h3 id="combine-multiple-networks-into-a-single-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-openapi-spec">OpenAPI Spec</h1>

## Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

<a id="opIdgetOrganizationOpenapiSpec"></a>

> Code samples

```bash
curl https://example.com/organizations/string/openapiSpec \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/openapiSpec`

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

<h3 id="return-the-openapi-20-specification-of-the-organizations-api-documentation-in-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "info": {
    "description": "This collection of API calls provides an easy way to interact with a Cisco Meraki network",
    "title": "Meraki Dashboard API",
    "version": "v0"
  },
  "paths": {
    "/organizations": {
      "get": {
        "description": "List the organizations that the user has privileges on",
        "operationId": "getOrganizations",
        "responses": {
          "200": {
            "description": "Successful operation",
            "examples": {
              "application/json": [
                {
                  "id": "2930418",
                  "name": "My organization"
                }
              ]
            }
          }
        }
      }
    }
  },
  "swagger": "2.0"
}
```

<h3 id="return-the-openapi-20-specification-of-the-organizations-api-documentation-in-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-organizations">Organizations</h1>

## List the organizations that the user has privileges on

<a id="opIdgetOrganizations"></a>

> Code samples

```bash
curl https://example.com/organizations \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations`

List the organizations that the user has privileges on

> Example responses

> 200 Response

```json
[
  {
    "id": "2930418",
    "name": "My organization",
    "url": "https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview"
  }
]
```

<h3 id="list-the-organizations-that-the-user-has-privileges-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-organizations-that-the-user-has-privileges-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return an organization

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://example.com/organizations/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}`

Return an organization

<h3 id="return-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "2930418",
  "name": "My organization",
  "url": "https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview"
}
```

<h3 id="return-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Claim a list of devices, licenses, and/or orders into an organization

<a id="opIdclaimIntoOrganization"></a>

> Code samples

```bash
curl https://example.com/organizations/string/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "licenses": [
      {
        "key": "Z2XXXXXXXXXX",
        "mode": "addDevices"
      }
    ],
    "orders": [
      "4CXXXXXXX"
    ],
    "serials": [
      "Q234-ABCD-5678"
    ]
  }'
```

`POST /organizations/{organizationId}/claim`

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

> Body parameter

```json
{
  "licenses": [
    {
      "key": "Z2XXXXXXXXXX",
      "mode": "addDevices"
    }
  ],
  "orders": [
    "4CXXXXXXX"
  ],
  "serials": [
    "Q234-ABCD-5678"
  ]
}
```

<h3 id="claim-a-list-of-devices-licenses-andor-orders-into-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|false|none|
|» licenses|body|[object]|false|The licenses that should be claimed|
|» » key|body|string|true|The key of the license|
|» » mode|body|string|false|Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled.|
|» orders|body|[string]|false|The numbers of the orders that should be claimed|
|» serials|body|[string]|false|The serials of the devices that should be claimed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » mode|addDevices|
|» » mode|renew|

> Example responses

> 200 Response

```json
{
  "licenses": [
    {
      "key": "Z2XXXXXXXXXX",
      "mode": "addDevices"
    }
  ],
  "orders": [
    "4CXXXXXXX"
  ],
  "serials": [
    "Q234-ABCD-5678"
  ]
}
```

<h3 id="claim-a-list-of-devices-licenses-andor-orders-into-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a new organization by cloning the addressed organization

<a id="opIdcloneOrganization"></a>

> Code samples

```bash
curl https://example.com/organizations/string/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "My organization"
  }'
```

`POST /organizations/{organizationId}/clone`

Create a new organization by cloning the addressed organization

> Body parameter

```json
{
  "name": "My organization"
}
```

<h3 id="create-a-new-organization-by-cloning-the-addressed-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the new organization|

> Example responses

> 201 Response

```json
{
  "id": "2930418",
  "name": "My organization",
  "url": "https://dashboard.meraki.com/o/VjjsAd/manage/organization/overview"
}
```

<h3 id="create-a-new-organization-by-cloning-the-addressed-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the status of every Meraki device in the organization

<a id="opIdgetOrganizationDeviceStatuses"></a>

> Code samples

```bash
curl https://example.com/organizations/string/deviceStatuses \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/deviceStatuses`

List the status of every Meraki device in the organization

<h3 id="list-the-status-of-every-meraki-device-in-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "lanIp": "1.2.3.4",
    "mac": "00:11:22:33:44:55",
    "name": "My AP",
    "networkId": "N_24329156",
    "publicIp": "123.123.123.1",
    "serial": "Q234-ABCD-5678",
    "status": "online"
  }
]
```

<h3 id="list-the-status-of-every-meraki-device-in-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-status-of-every-meraki-device-in-the-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the inventory for an organization

<a id="opIdgetOrganizationInventory"></a>

> Code samples

```bash
curl https://example.com/organizations/string/inventory \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/inventory`

Return the inventory for an organization

<h3 id="return-the-inventory-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|includeLicenseInfo|query|boolean|false|When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false.|

> Example responses

> 200 Response

```json
[
  {
    "claimedAt": 1518365681,
    "mac": "00:11:22:33:44:55",
    "model": "MR34",
    "name": "My AP",
    "networkId": "N_24329156",
    "publicIp": "123.123.123.1",
    "serial": "Q234-ABCD-5678"
  }
]
```

<h3 id="return-the-inventory-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-inventory-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the third party VPN peers for an organization

<a id="opIdgetOrganizationThirdPartyVPNPeers"></a>

> Code samples

```bash
curl https://example.com/organizations/string/thirdPartyVPNPeers \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/thirdPartyVPNPeers`

Return the third party VPN peers for an organization

<h3 id="return-the-third-party-vpn-peers-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "ikeVersion": "2",
    "ipsecPolicies": {
      "childAuthAlgo": [
        "sha1"
      ],
      "childCipherAlgo": [
        "aes128"
      ],
      "childLifetime": 28800,
      "childPfsGroup": [
        "disabled"
      ],
      "ikeAuthAlgo": [
        "sha1"
      ],
      "ikeCipherAlgo": [
        "tripledes"
      ],
      "ikeDiffieHellmanGroup": [
        "group2"
      ],
      "ikeLifetime": 28800,
      "ikePrfAlgo": [
        "prfsha1"
      ]
    },
    "name": "My peer 1",
    "networkTags": [
      "all"
    ],
    "privateSubnets": [
      "192.168.1.0/24",
      "192.168.128.0/24"
    ],
    "publicIp": "123.123.123.1",
    "secret": "asdf1234"
  },
  {
    "ikeVersion": "1",
    "ipsecPoliciesPreset": "default",
    "name": "My peer 2",
    "networkTags": [
      "none"
    ],
    "privateSubnets": [
      "192.168.2.0/24",
      "192.168.129.0/24"
    ],
    "publicIp": "123.123.123.2",
    "remoteId": "miles@meraki.com",
    "secret": "asdf56785678567856785678"
  }
]
```

<h3 id="return-the-third-party-vpn-peers-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-third-party-vpn-peers-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the third party VPN peers for an organization

<a id="opIdupdateOrganizationThirdPartyVPNPeers"></a>

> Code samples

```bash
curl https://example.com/organizations/string/thirdPartyVPNPeers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "peers": [
      {
        "ikeVersion": "2",
        "ipsecPolicies": {
          "childAuthAlgo": [
            "sha1"
          ],
          "childCipherAlgo": [
            "aes128"
          ],
          "childLifetime": 28800,
          "childPfsGroup": [
            "disabled"
          ],
          "ikeAuthAlgo": [
            "sha1"
          ],
          "ikeCipherAlgo": [
            "tripledes"
          ],
          "ikeDiffieHellmanGroup": [
            "group2"
          ],
          "ikeLifetime": 28800,
          "ikePrfAlgo": [
            "prfsha1"
          ]
        },
        "name": "My peer 1",
        "networkTags": [
          "all"
        ],
        "privateSubnets": [
          "192.168.1.0/24",
          "192.168.128.0/24"
        ],
        "publicIp": "123.123.123.1",
        "secret": "asdf1234"
      },
      {
        "ikeVersion": "1",
        "ipsecPoliciesPreset": "default",
        "name": "My peer 2",
        "networkTags": [
          "none"
        ],
        "privateSubnets": [
          "192.168.2.0/24",
          "192.168.129.0/24"
        ],
        "publicIp": "123.123.123.2",
        "remoteId": "miles@meraki.com",
        "secret": "asdf56785678567856785678"
      }
    ]
  }'
```

`PUT /organizations/{organizationId}/thirdPartyVPNPeers`

Update the third party VPN peers for an organization

> Body parameter

```json
{
  "peers": [
    {
      "ikeVersion": "2",
      "ipsecPolicies": {
        "childAuthAlgo": [
          "sha1"
        ],
        "childCipherAlgo": [
          "aes128"
        ],
        "childLifetime": 28800,
        "childPfsGroup": [
          "disabled"
        ],
        "ikeAuthAlgo": [
          "sha1"
        ],
        "ikeCipherAlgo": [
          "tripledes"
        ],
        "ikeDiffieHellmanGroup": [
          "group2"
        ],
        "ikeLifetime": 28800,
        "ikePrfAlgo": [
          "prfsha1"
        ]
      },
      "name": "My peer 1",
      "networkTags": [
        "all"
      ],
      "privateSubnets": [
        "192.168.1.0/24",
        "192.168.128.0/24"
      ],
      "publicIp": "123.123.123.1",
      "secret": "asdf1234"
    },
    {
      "ikeVersion": "1",
      "ipsecPoliciesPreset": "default",
      "name": "My peer 2",
      "networkTags": [
        "none"
      ],
      "privateSubnets": [
        "192.168.2.0/24",
        "192.168.129.0/24"
      ],
      "publicIp": "123.123.123.2",
      "remoteId": "miles@meraki.com",
      "secret": "asdf56785678567856785678"
    }
  ]
}
```

<h3 id="update-the-third-party-vpn-peers-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» peers|body|[object]|true|The list of VPN peers|
|» » ikeVersion|body|string|false|[optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted.|
|» » ipsecPolicies|body|object|false|Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.|
|» » » childAuthAlgo|body|[string]|false|This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'|
|» » » childCipherAlgo|body|[string]|false|This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null'|
|» » » childLifetime|body|integer|false|The lifetime of the Phase 2 SA in seconds.|
|» » » childPfsGroup|body|[string]|false|This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1'|
|» » » ikeAuthAlgo|body|[string]|false|This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5'|
|» » » ikeCipherAlgo|body|[string]|false|This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des'|
|» » » ikeDiffieHellmanGroup|body|[string]|false|This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1'|
|» » » ikeLifetime|body|integer|false|The lifetime of the Phase 1 SA in seconds.|
|» » » ikePrfAlgo|body|[string]|false|[optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm.|
|» » ipsecPoliciesPreset|body|string|false|One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored.|
|» » name|body|string|true|The name of the VPN peer|
|» » networkTags|body|[string]|false|A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all'].|
|» » privateSubnets|body|[string]|true|The list of the private subnets of the VPN peer|
|» » publicIp|body|string|true|The public IP of the VPN peer|
|» » remoteId|body|string|false|[optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN.|
|» » secret|body|string|true|The shared secret with the VPN peer|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » ikeVersion|1|
|» » ikeVersion|2|
|» » » ikePrfAlgo|default|
|» » » ikePrfAlgo|prfmd5|
|» » » ikePrfAlgo|prfsha1|
|» » » ikePrfAlgo|prfsha256|

> Example responses

> 200 Response

```json
[
  {
    "ikeVersion": "2",
    "ipsecPolicies": {
      "childAuthAlgo": [
        "sha1"
      ],
      "childCipherAlgo": [
        "aes128"
      ],
      "childLifetime": 28800,
      "childPfsGroup": [
        "disabled"
      ],
      "ikeAuthAlgo": [
        "sha1"
      ],
      "ikeCipherAlgo": [
        "tripledes"
      ],
      "ikeDiffieHellmanGroup": [
        "group2"
      ],
      "ikeLifetime": 28800,
      "ikePrfAlgo": [
        "prfsha1"
      ]
    },
    "name": "My peer 1",
    "networkTags": [
      "all"
    ],
    "privateSubnets": [
      "192.168.1.0/24",
      "192.168.128.0/24"
    ],
    "publicIp": "123.123.123.1",
    "secret": "asdf1234"
  },
  {
    "ikeVersion": "1",
    "ipsecPoliciesPreset": "default",
    "name": "My peer 2",
    "networkTags": [
      "none"
    ],
    "privateSubnets": [
      "192.168.2.0/24",
      "192.168.129.0/24"
    ],
    "publicIp": "123.123.123.2",
    "remoteId": "miles@meraki.com",
    "secret": "asdf56785678567856785678"
  }
]
```

<h3 id="update-the-third-party-vpn-peers-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-third-party-vpn-peers-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

<a id="opIdgetOrganizationUplinksLossAndLatency"></a>

> Code samples

```bash
curl https://example.com/organizations/string/uplinksLossAndLatency \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/uplinksLossAndLatency`

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

<h3 id="return-the-uplink-loss-and-latency-for-every-mx-in-the-organization-from-at-latest-2-minutes-ago-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 60 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.|
|uplink|query|string|false|Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.|
|ip|query|string|false|Optional filter for a specific destination IP. Default will return all destination IPs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|uplink|cellular|
|uplink|wan1|
|uplink|wan2|

> Example responses

> 200 Response

```json
[
  {
    "ip": "8.8.8.8",
    "networkId": "N_12345",
    "serial": "Q2AB-CDEF-GHIJ",
    "timeSeries": [
      {
        "latencyMs": 194.9,
        "lossPercent": 5.3,
        "ts": "2019-01-31T18:46:13Z"
      }
    ],
    "uplink": "wan1"
  }
]
```

<h3 id="return-the-uplink-loss-and-latency-for-every-mx-in-the-organization-from-at-latest-2-minutes-ago-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-uplink-loss-and-latency-for-every-mx-in-the-organization-from-at-latest-2-minutes-ago-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-pii">PII</h1>

## List the keys required to access Personally Identifiable Information (PII) for a given identifier

<a id="opIdgetNetworkPiiPiiKeys"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/piiKeys \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/pii/piiKeys`

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/piiKeys
```

<h3 id="list-the-keys-required-to-access-personally-identifiable-information-pii-for-a-given-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|username|query|string|false|The username of a Systems Manager user|
|email|query|string|false|The email of a network user account or a Systems Manager device|
|mac|query|string|false|The MAC of a network client device or a Systems Manager device|
|serial|query|string|false|The serial of a Systems Manager device|
|imei|query|string|false|The IMEI of a Systems Manager device|
|bluetoothMac|query|string|false|The MAC of a Bluetooth client|

> Example responses

> 200 Response

```json
{
  "N_1234": {
    "bluetoothMacs": [
      "00:77:00:77:00:77"
    ],
    "emails": [
      "fake@example.com"
    ],
    "imeis": [
      "990000862471854"
    ],
    "macs": [
      "00:77:00:77:00:77"
    ],
    "serials": [
      "abcd1234"
    ],
    "usernames": [
      "fakename"
    ]
  }
}
```

<h3 id="list-the-keys-required-to-access-personally-identifiable-information-pii-for-a-given-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the PII requests for this network or organization

<a id="opIdgetNetworkPiiRequests"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/requests \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/pii/requests`

List the PII requests for this network or organization

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

<h3 id="list-the-pii-requests-for-this-network-or-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "completedAt": 1524702227,
    "createdAt": 1524692227,
    "datasets": "['usage', 'events']",
    "id": "1234",
    "mac": "00:77:00:77:00:77",
    "networkId": "N_1234",
    "organizationWide": false,
    "status": "Completed",
    "type": "delete"
  }
]
```

<h3 id="list-the-pii-requests-for-this-network-or-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-pii-requests-for-this-network-or-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Submit a new delete or restrict processing PII request

<a id="opIdcreateNetworkPiiRequest"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "datasets": [
      "usage",
      "events"
    ],
    "mac": "00:77:00:77:00:77",
    "type": "delete"
  }'
```

`POST /networks/{networkId}/pii/requests`

Submit a new delete or restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests
```

> Body parameter

```json
{
  "datasets": [
    "usage",
    "events"
  ],
  "mac": "00:77:00:77:00:77",
  "type": "delete"
}
```

<h3 id="submit-a-new-delete-or-restrict-processing-pii-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» datasets|body|[string]|false|The datasets related to the provided key that should be deleted. Only applies to "delete" requests. The value "all" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user)|
|» email|body|string|false|The email of a network user account. Only applies to "delete" requests.|
|» mac|body|string|false|The MAC of a network client device. Applies to both "restrict processing" and "delete" requests.|
|» smDeviceId|body|string|false|The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device.|
|» smUserId|body|string|false|The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user.|
|» type|body|string|false|One of "delete" or "restrict processing"|
|» username|body|string|false|The username of a network log in. Only applies to "delete" requests.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|delete|
|» type|restrict processing|

> Example responses

> 201 Response

```json
{
  "completedAt": null,
  "createdAt": 1524692227,
  "datasets": "['usage', 'events']",
  "id": "1234",
  "mac": "00:77:00:77:00:77",
  "networkId": "N_1234",
  "organizationWide": false,
  "status": "Not visible in Dashboard; database deletion in process",
  "type": "delete"
}
```

<h3 id="submit-a-new-delete-or-restrict-processing-pii-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a PII request

<a id="opIdgetNetworkPiiRequest"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/requests/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/pii/requests/{requestId}`

Return a PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

<h3 id="return-a-pii-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|requestId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "completedAt": 1524702227,
  "createdAt": 1524692227,
  "datasets": "['usage', 'events']",
  "id": "1234",
  "mac": "00:77:00:77:00:77",
  "networkId": "N_1234",
  "organizationWide": false,
  "status": "Completed",
  "type": "delete"
}
```

<h3 id="return-a-pii-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a restrict processing PII request

<a id="opIddeleteNetworkPiiRequest"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/requests/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/pii/requests/{requestId}`

Delete a restrict processing PII request

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/requests/{requestId}
```

<h3 id="delete-a-restrict-processing-pii-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|requestId|path|string|true|none|

<h3 id="delete-a-restrict-processing-pii-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

<a id="opIdgetNetworkPiiSmDevicesForKey"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/smDevicesForKey \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/pii/smDevicesForKey`

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smDevicesForKey
```

<h3 id="given-a-piece-of-personally-identifiable-information-pii-return-the-systems-manager-device-ids-associated-with-that-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|username|query|string|false|The username of a Systems Manager user|
|email|query|string|false|The email of a network user account or a Systems Manager device|
|mac|query|string|false|The MAC of a network client device or a Systems Manager device|
|serial|query|string|false|The serial of a Systems Manager device|
|imei|query|string|false|The IMEI of a Systems Manager device|
|bluetoothMac|query|string|false|The MAC of a Bluetooth client|

> Example responses

> 200 Response

```json
{
  "N_1234": [
    "1099541095293",
    "8348382288234"
  ]
}
```

<h3 id="given-a-piece-of-personally-identifiable-information-pii-return-the-systems-manager-device-ids-associated-with-that-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

<a id="opIdgetNetworkPiiSmOwnersForKey"></a>

> Code samples

```bash
curl https://example.com/networks/string/pii/smOwnersForKey \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/pii/smOwnersForKey`

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.

## ALTERNATE PATH

```
/organizations/{organizationId}/pii/smOwnersForKey
```

<h3 id="given-a-piece-of-personally-identifiable-information-pii-return-the-systems-manager-owner-ids-associated-with-that-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|username|query|string|false|The username of a Systems Manager user|
|email|query|string|false|The email of a network user account or a Systems Manager device|
|mac|query|string|false|The MAC of a network client device or a Systems Manager device|
|serial|query|string|false|The serial of a Systems Manager device|
|imei|query|string|false|The IMEI of a Systems Manager device|
|bluetoothMac|query|string|false|The MAC of a Bluetooth client|

> Example responses

> 200 Response

```json
{
  "N_1234": [
    "1099541095293"
  ]
}
```

<h3 id="given-a-piece-of-personally-identifiable-information-pii-return-the-systems-manager-owner-ids-associated-with-that-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-radio-settings">Radio settings</h1>

## List the non-basic RF profiles for this network

<a id="opIdgetNetworkWirelessRfProfiles"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/rfProfiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/wireless/rfProfiles`

List the non-basic RF profiles for this network

<h3 id="list-the-non-basic-rf-profiles-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|includeTemplateProfiles|query|boolean|false|If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.|

> Example responses

> 200 Response

```json
[
  {
    "afcEnabled": true,
    "apBandSettings": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true
    },
    "bandSelectionType": "ap",
    "clientBalancingEnabled": true,
    "fiveGhzSettings": {
      "channelWidth": "auto",
      "maxPower": 30,
      "minBitrate": 12,
      "minPower": 8,
      "rxsop": null,
      "validAutoChannels": [
        36,
        40,
        44,
        48,
        52,
        56,
        60,
        64,
        100,
        104,
        108,
        112,
        116,
        120,
        124,
        128,
        132,
        136,
        140,
        144,
        149,
        153,
        157,
        161,
        165
      ]
    },
    "id": "1234",
    "minBitrateType": "band",
    "name": "Some Custom RF Profile",
    "networkId": "N_24329156",
    "perSsidSettings": {
      "0": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 0"
      },
      "1": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 1"
      },
      "2": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 2"
      },
      "3": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 3"
      },
      "4": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 4"
      },
      "5": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 5"
      },
      "6": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 6"
      },
      "7": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 7"
      },
      "8": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 8"
      },
      "9": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 9"
      },
      "10": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 10"
      },
      "11": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 11"
      },
      "12": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 12"
      },
      "13": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 13"
      },
      "14": {
        "bandOperationMode": "dual",
        "bandSteeringEnabled": true,
        "minBitrate": 11,
        "name": "SSID 14"
      }
    },
    "transmission": {
      "enabled": true
    },
    "twoFourGhzSettings": {
      "axEnabled": true,
      "maxPower": 30,
      "minBitrate": 11,
      "minPower": 5,
      "rxsop": null,
      "validAutoChannels": [
        1,
        6,
        11
      ]
    }
  }
]
```

<h3 id="list-the-non-basic-rf-profiles-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-non-basic-rf-profiles-for-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Creates new RF profile for this network

<a id="opIdcreateNetworkWirelessRfProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/rfProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{}'
```

`POST /networks/{networkId}/wireless/rfProfiles`

Creates new RF profile for this network

> Body parameter

```json
{}
```

<h3 id="creates-new-rf-profile-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» apBandSettings|body|object|false|Settings that will be enabled if selectionType is set to 'ap'.|
|» » bandOperationMode|body|string|false|Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual.|
|» » bandSteeringEnabled|body|boolean|false|Steers client to most open band. Can be either true or false. Defaults to true.|
|» bandSelectionType|body|string|true|Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.|
|» clientBalancingEnabled|body|boolean|false|Steers client to best available access point. Can be either true or false. Defaults to true.|
|» fiveGhzSettings|body|object|false|Settings related to 5Ghz band|
|» » channelWidth|body|string|false|Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto.|
|» » maxPower|body|integer|false|Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30.|
|» » minBitrate|body|integer|false|Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12.|
|» » minPower|body|integer|false|Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8.|
|» » rxsop|body|integer|false|The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.|
|» » validAutoChannels|body|[integer]|false|Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165].|
|» minBitrateType|body|string|false|Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band.|
|» name|body|string|true|The name of the new profile. Must be unique. This param is required on creation.|
|» twoFourGhzSettings|body|object|false|Settings related to 2.4Ghz band|
|» » axEnabled|body|boolean|false|Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true.|
|» » maxPower|body|integer|false|Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30.|
|» » minBitrate|body|number(float)|false|Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11.|
|» » minPower|body|integer|false|Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5.|
|» » rxsop|body|integer|false|The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.|
|» » validAutoChannels|body|[integer]|false|Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. Defaults to [1, 6, 11].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » bandOperationMode|2.4ghz|
|» » bandOperationMode|5ghz|
|» » bandOperationMode|dual|
|» bandSelectionType|ap|
|» bandSelectionType|ssid|
|» minBitrateType|band|
|» minBitrateType|ssid|

> Example responses

> 201 Response

```json
{
  "afcEnabled": true,
  "apBandSettings": {
    "bandOperationMode": "dual",
    "bandSteeringEnabled": true
  },
  "bandSelectionType": "ap",
  "clientBalancingEnabled": true,
  "fiveGhzSettings": {
    "channelWidth": "auto",
    "maxPower": 30,
    "minBitrate": 12,
    "minPower": 8,
    "rxsop": null,
    "validAutoChannels": [
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      100,
      104,
      108,
      112,
      116,
      120,
      124,
      128,
      132,
      136,
      140,
      144,
      149,
      153,
      157,
      161,
      165
    ]
  },
  "id": "1234",
  "minBitrateType": "band",
  "name": "Some Custom RF Profile",
  "networkId": "N_24329156",
  "perSsidSettings": {
    "0": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 0"
    },
    "1": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 1"
    },
    "2": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 2"
    },
    "3": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 3"
    },
    "4": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 4"
    },
    "5": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 5"
    },
    "6": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 6"
    },
    "7": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 7"
    },
    "8": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 8"
    },
    "9": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 9"
    },
    "10": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 10"
    },
    "11": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 11"
    },
    "12": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 12"
    },
    "13": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 13"
    },
    "14": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 14"
    }
  },
  "transmission": {
    "enabled": true
  },
  "twoFourGhzSettings": {
    "axEnabled": true,
    "maxPower": 30,
    "minBitrate": 11,
    "minPower": 5,
    "rxsop": null,
    "validAutoChannels": [
      1,
      6,
      11
    ]
  }
}
```

<h3 id="creates-new-rf-profile-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a RF profile

<a id="opIdgetNetworkWirelessRfProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/rfProfiles/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/wireless/rfProfiles/{rfProfileId}`

Return a RF profile

<h3 id="return-a-rf-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|rfProfileId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "afcEnabled": true,
  "apBandSettings": {
    "bandOperationMode": "dual",
    "bandSteeringEnabled": true
  },
  "bandSelectionType": "ap",
  "clientBalancingEnabled": true,
  "fiveGhzSettings": {
    "channelWidth": "auto",
    "maxPower": 30,
    "minBitrate": 12,
    "minPower": 8,
    "rxsop": null,
    "validAutoChannels": [
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      100,
      104,
      108,
      112,
      116,
      120,
      124,
      128,
      132,
      136,
      140,
      144,
      149,
      153,
      157,
      161,
      165
    ]
  },
  "id": "1234",
  "minBitrateType": "band",
  "name": "Some Custom RF Profile",
  "networkId": "N_24329156",
  "perSsidSettings": {
    "0": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 0"
    },
    "1": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 1"
    },
    "2": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 2"
    },
    "3": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 3"
    },
    "4": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 4"
    },
    "5": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 5"
    },
    "6": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 6"
    },
    "7": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 7"
    },
    "8": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 8"
    },
    "9": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 9"
    },
    "10": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 10"
    },
    "11": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 11"
    },
    "12": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 12"
    },
    "13": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 13"
    },
    "14": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 14"
    }
  },
  "transmission": {
    "enabled": true
  },
  "twoFourGhzSettings": {
    "axEnabled": true,
    "maxPower": 30,
    "minBitrate": 11,
    "minPower": 5,
    "rxsop": null,
    "validAutoChannels": [
      1,
      6,
      11
    ]
  }
}
```

<h3 id="return-a-rf-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Updates specified RF profile for this network

<a id="opIdupdateNetworkWirelessRfProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/rfProfiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{}'
```

`PUT /networks/{networkId}/wireless/rfProfiles/{rfProfileId}`

Updates specified RF profile for this network

> Body parameter

```json
{}
```

<h3 id="updates-specified-rf-profile-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|rfProfileId|path|string|true|none|
|body|body|object|false|none|
|» apBandSettings|body|object|false|Settings that will be enabled if selectionType is set to 'ap'.|
|» » bandOperationMode|body|string|false|Choice between 'dual', '2.4ghz' or '5ghz'.|
|» » bandSteeringEnabled|body|boolean|false|Steers client to most open band. Can be either true or false.|
|» bandSelectionType|body|string|false|Band selection can be set to either 'ssid' or 'ap'.|
|» clientBalancingEnabled|body|boolean|false|Steers client to best available access point. Can be either true or false.|
|» fiveGhzSettings|body|object|false|Settings related to 5Ghz band|
|» » channelWidth|body|string|false|Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'.|
|» » maxPower|body|integer|false|Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30.|
|» » minBitrate|body|integer|false|Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'.|
|» » minPower|body|integer|false|Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30.|
|» » rxsop|body|integer|false|The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.|
|» » validAutoChannels|body|[integer]|false|Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.|
|» minBitrateType|body|string|false|Minimum bitrate can be set to either 'band' or 'ssid'.|
|» name|body|string|false|The name of the new profile. Must be unique.|
|» twoFourGhzSettings|body|object|false|Settings related to 2.4Ghz band|
|» » axEnabled|body|boolean|false|Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering.|
|» » maxPower|body|integer|false|Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.|
|» » minBitrate|body|number(float)|false|Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'.|
|» » minPower|body|integer|false|Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30.|
|» » rxsop|body|integer|false|The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default.|
|» » validAutoChannels|body|[integer]|false|Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » bandOperationMode|2.4ghz|
|» » bandOperationMode|5ghz|
|» » bandOperationMode|dual|
|» bandSelectionType|ap|
|» bandSelectionType|ssid|
|» minBitrateType|band|
|» minBitrateType|ssid|

> Example responses

> 200 Response

```json
{
  "afcEnabled": true,
  "apBandSettings": {
    "bandOperationMode": "dual",
    "bandSteeringEnabled": true
  },
  "bandSelectionType": "ap",
  "clientBalancingEnabled": true,
  "fiveGhzSettings": {
    "channelWidth": "auto",
    "maxPower": 30,
    "minBitrate": 12,
    "minPower": 8,
    "rxsop": null,
    "validAutoChannels": [
      36,
      40,
      44,
      48,
      52,
      56,
      60,
      64,
      100,
      104,
      108,
      112,
      116,
      120,
      124,
      128,
      132,
      136,
      140,
      144,
      149,
      153,
      157,
      161,
      165
    ]
  },
  "id": "1234",
  "minBitrateType": "band",
  "name": "Some Custom RF Profile",
  "networkId": "N_24329156",
  "perSsidSettings": {
    "0": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 0"
    },
    "1": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 1"
    },
    "2": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 2"
    },
    "3": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 3"
    },
    "4": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 4"
    },
    "5": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 5"
    },
    "6": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 6"
    },
    "7": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 7"
    },
    "8": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 8"
    },
    "9": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 9"
    },
    "10": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 10"
    },
    "11": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 11"
    },
    "12": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 12"
    },
    "13": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 13"
    },
    "14": {
      "bandOperationMode": "dual",
      "bandSteeringEnabled": true,
      "minBitrate": 11,
      "name": "SSID 14"
    }
  },
  "transmission": {
    "enabled": true
  },
  "twoFourGhzSettings": {
    "axEnabled": true,
    "maxPower": 30,
    "minBitrate": 11,
    "minPower": 5,
    "rxsop": null,
    "validAutoChannels": [
      1,
      6,
      11
    ]
  }
}
```

<h3 id="updates-specified-rf-profile-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a RF Profile

<a id="opIddeleteNetworkWirelessRfProfile"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/rfProfiles/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/wireless/rfProfiles/{rfProfileId}`

Delete a RF Profile

<h3 id="delete-a-rf-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|rfProfileId|path|string|true|none|

<h3 id="delete-a-rf-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-saml-roles">SAML roles</h1>

## List the SAML roles for this organization

<a id="opIdgetOrganizationSamlRoles"></a>

> Code samples

```bash
curl https://example.com/organizations/string/samlRoles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/samlRoles`

List the SAML roles for this organization

<h3 id="list-the-saml-roles-for-this-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "1284392014819",
    "networks": [
      {
        "access": "full",
        "id": "N_24329156"
      }
    ],
    "orgAccess": "none",
    "role": "myrole",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ]
  }
]
```

<h3 id="list-the-saml-roles-for-this-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-saml-roles-for-this-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a SAML role

<a id="opIdcreateOrganizationSamlRole"></a>

> Code samples

```bash
curl https://example.com/organizations/string/samlRoles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "networks": [
      {
        "access": "full",
        "id": "N_24329156"
      }
    ],
    "orgAccess": "none",
    "role": "myrole",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ]
  }'
```

`POST /organizations/{organizationId}/samlRoles`

Create a SAML role

> Body parameter

```json
{
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "role": "myrole",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="create-a-saml-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|object|true|none|
|» networks|body|[object]|false|The list of networks that the SAML administrator has privileges on|
|» » access|body|string|true|The privilege of the SAML administrator on the network|
|» » id|body|string|true|The network ID|
|» orgAccess|body|string|true|The privilege of the SAML administrator on the organization|
|» role|body|string|true|The role of the SAML administrator|
|» tags|body|[object]|false|The list of tags that the SAML administrator has privleges on|
|» » access|body|string|true|The privilege of the SAML administrator on the tag|
|» » tag|body|string|true|The name of the tag|

> Example responses

> 201 Response

```json
{
  "id": "1284392014819",
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "role": "myrole",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="create-a-saml-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a SAML role

<a id="opIdgetOrganizationSamlRole"></a>

> Code samples

```bash
curl https://example.com/organizations/string/samlRoles/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/samlRoles/{samlRoleId}`

Return a SAML role

<h3 id="return-a-saml-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|samlRoleId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "1284392014819",
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "role": "myrole",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="return-a-saml-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a SAML role

<a id="opIdupdateOrganizationSamlRole"></a>

> Code samples

```bash
curl https://example.com/organizations/string/samlRoles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "networks": [
      {
        "access": "full",
        "id": "N_24329156"
      }
    ],
    "orgAccess": "none",
    "tags": [
      {
        "access": "read-only",
        "tag": "west"
      }
    ]
  }'
```

`PUT /organizations/{organizationId}/samlRoles/{samlRoleId}`

Update a SAML role

> Body parameter

```json
{
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="update-a-saml-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|samlRoleId|path|string|true|none|
|body|body|object|false|none|
|» networks|body|[object]|false|The list of networks that the SAML administrator has privileges on|
|» » access|body|string|true|The privilege of the SAML administrator on the network|
|» » id|body|string|true|The network ID|
|» orgAccess|body|string|false|The privilege of the SAML administrator on the organization|
|» role|body|string|false|The role of the SAML administrator|
|» tags|body|[object]|false|The list of tags that the SAML administrator has privleges on|
|» » access|body|string|true|The privilege of the SAML administrator on the tag|
|» » tag|body|string|true|The name of the tag|

> Example responses

> 200 Response

```json
{
  "id": "1284392014819",
  "networks": [
    {
      "access": "full",
      "id": "N_24329156"
    }
  ],
  "orgAccess": "none",
  "role": "myrole",
  "tags": [
    {
      "access": "read-only",
      "tag": "west"
    }
  ]
}
```

<h3 id="update-a-saml-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-sm">SM</h1>

## Bypass activation lock attempt

<a id="opIdcreateNetworkSmBypassActivationLockAttempt"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/bypassActivationLockAttempts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ids": [
      "1284392014819",
      "2983092129865"
    ]
  }'
```

`POST /networks/{networkId}/sm/bypassActivationLockAttempts`

Bypass activation lock attempt

> Body parameter

```json
{
  "ids": [
    "1284392014819",
    "2983092129865"
  ]
}
```

<h3 id="bypass-activation-lock-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» ids|body|[string]|true|The ids of the devices to attempt activation lock bypass.|

> Example responses

> 201 Response

```json
{
  "data": {},
  "id": "1234",
  "status": "pending"
}
```

<h3 id="bypass-activation-lock-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Bypass activation lock attempt status

<a id="opIdgetNetworkSmBypassActivationLockAttempt"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/bypassActivationLockAttempts/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}`

Bypass activation lock attempt status

<h3 id="bypass-activation-lock-attempt-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|attemptId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "2090938209": {
      "errors": [
        "Activation lock bypass code not known for this device"
      ],
      "success": false
    },
    "38290139892": {
      "success": true
    }
  },
  "id": "1234",
  "status": "complete"
}
```

<h3 id="bypass-activation-lock-attempt-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Modify the fields of a device

<a id="opIdupdateNetworkSmDeviceFields"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/device/fields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "deviceFields": {
      "name": "Miles'\''s phone",
      "notes": "Here'\''s some info about my device"
    },
    "id": "1284392014819"
  }'
```

`PUT /networks/{networkId}/sm/device/fields`

Modify the fields of a device

> Body parameter

```json
{
  "deviceFields": {
    "name": "Miles's phone",
    "notes": "Here's some info about my device"
  },
  "id": "1284392014819"
}
```

<h3 id="modify-the-fields-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» deviceFields|body|object|true|The new fields of the device. Each field of this object is optional.|
|» » name|body|string|false|New name for the device|
|» » notes|body|string|false|New notes for the device|
|» id|body|string|false|The id of the device to be modified.|
|» serial|body|string|false|The serial of the device to be modified.|
|» wifiMac|body|string|false|The wifiMac of the device to be modified.|

> Example responses

> 200 Response

```json
{
  "success": [
    {
      "id": "1284392014819",
      "name": "Miles's phone",
      "notes": "Here's some info about my device",
      "serial": "F5XKHEBX",
      "wifiMac": "00:11:22:33:44:55"
    }
  ]
}
```

<h3 id="modify-the-fields-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Wipe a device

<a id="opIdwipeNetworkSmDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/device/wipe \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "id": "1284392014819"
  }'
```

`PUT /networks/{networkId}/sm/device/wipe`

Wipe a device

> Body parameter

```json
{
  "id": "1284392014819"
}
```

<h3 id="wipe-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» id|body|string|false|The id of the device to be wiped.|
|» pin|body|integer|false|The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices.|
|» serial|body|string|false|The serial of the device to be wiped.|
|» wifiMac|body|string|false|The wifiMac of the device to be wiped.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="wipe-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Refresh the details of a device

<a id="opIdrefreshNetworkSmDeviceDetails"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/device/string/refreshDetails \
  -X POST \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/sm/device/{deviceId}/refreshDetails`

Refresh the details of a device

<h3 id="refresh-the-details-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

<h3 id="refresh-the-details-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the devices enrolled in an SM network with various specified fields and filters

<a id="opIdgetNetworkSmDevices"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/devices \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/devices`

List the devices enrolled in an SM network with various specified fields and filters

<h3 id="list-the-devices-enrolled-in-an-sm-network-with-various-specified-fields-and-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|fields|query|string|false|Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.<br>    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,<br>    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,<br>    ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,<br>    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,<br>    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,<br>    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion.|
|wifiMacs|query|string|false|Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values.|
|serials|query|string|false|Filter devices by serial(s). Multiple serials can be passed in as comma separated values.|
|ids|query|string|false|Filter devices by id(s). Multiple ids can be passed in as comma separated values.|
|scope|query|string|false|Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values.|
|batchSize|query|integer|false|Number of devices to return, 1000 is the default as well as the max.|
|batchToken|query|string|false|If the network has more devices than the batch size, a batch token will be returned<br>    as a part of the device list. To see the remainder of the devices, pass in the batchToken as a parameter in the next request.<br>    Requests made with the batchToken do not require additional parameters as the batchToken includes the parameters passed in<br>    with the original request. Additional parameters passed in with the batchToken will be ignored.|

> Example responses

> 200 Response

```json
{
  "batchToken": "MMbCbpHZtG3TKUCr9B9uc5",
  "devices": [
    {
      "id": "1284392014819",
      "ip": "1.2.3.4",
      "name": "Miles's phone",
      "osName": "iOS 9.3.5",
      "serialNumber": "F5XKHEBX",
      "ssid": "My SSID",
      "systemModel": "iPhone",
      "tags": [
        "tag1",
        "tag2"
      ],
      "uuid": "3d990628ede4c628d52",
      "wifiMac": "00:11:22:33:44:55"
    }
  ]
}
```

<h3 id="list-the-devices-enrolled-in-an-sm-network-with-various-specified-fields-and-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Force check-in a set of devices

<a id="opIdcheckinNetworkSmDevices"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/devices/checkin \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ids": "\"1284392014819\""
  }'
```

`PUT /networks/{networkId}/sm/devices/checkin`

Force check-in a set of devices

> Body parameter

```json
{
  "ids": "\"1284392014819\""
}
```

<h3 id="force-check-in-a-set-of-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» ids|body|string|false|The ids of the devices to be checked-in.|
|» scope|body|string|false|The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be checked-in.|
|» serials|body|string|false|The serials of the devices to be checked-in.|
|» wifiMacs|body|string|false|The wifiMacs of the devices to be checked-in.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="force-check-in-a-set-of-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add, delete, or update the tags of a set of devices

<a id="opIdupdateNetworkSmDevicesTags"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/devices/tags \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "scope": "withAny, old_tag",
    "tags": "tag1,tag2",
    "updateAction": "add"
  }'
```

`PUT /networks/{networkId}/sm/devices/tags`

Add, delete, or update the tags of a set of devices

> Body parameter

```json
{
  "scope": "withAny, old_tag",
  "tags": "tag1,tag2",
  "updateAction": "add"
}
```

<h3 id="add-delete-or-update-the-tags-of-a-set-of-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» ids|body|string|false|The ids of the devices to be modified.|
|» scope|body|string|false|The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified.|
|» serials|body|string|false|The serials of the devices to be modified.|
|» tags|body|string|true|The tags to be added, deleted, or updated.|
|» updateAction|body|string|true|One of add, delete, or update. Only devices that have been modified will be returned.|
|» wifiMacs|body|string|false|The wifiMacs of the devices to be modified.|

> Example responses

> 200 Response

```json
{
  "success": [
    {
      "id": "1284392014819",
      "serial": "F5XKHEBX",
      "tags": [
        "tag1",
        "tag2"
      ],
      "wifiMac": "00:11:22:33:44:55"
    }
  ]
}
```

<h3 id="add-delete-or-update-the-tags-of-a-set-of-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Unenroll a device

<a id="opIdunenrollNetworkSmDevice"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/devices/string/unenroll \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`POST /networks/{networkId}/sm/devices/{deviceId}/unenroll`

Unenroll a device

<h3 id="unenroll-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="unenroll-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List all the profiles in the network

<a id="opIdgetNetworkSmProfiles"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/profiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/profiles`

List all the profiles in the network

<h3 id="list-all-the-profiles-in-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "profiles": [
    {
      "id": "1234",
      "payload_description": "API docs test",
      "payload_display_name": "API Profile",
      "payload_identifier": "com.meraki.sm.1",
      "payload_types": [
        "Privacy",
        "Document"
      ],
      "scope": "some",
      "tags": [
        "tag1",
        "tag2"
      ],
      "wifis": []
    }
  ]
}
```

<h3 id="list-all-the-profiles-in-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Get the profiles associated with a user

<a id="opIdgetNetworkSmUserDeviceProfiles"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/user/string/deviceProfiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/user/{userId}/deviceProfiles`

Get the profiles associated with a user

<h3 id="get-the-profiles-associated-with-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "deviceId": "1234",
    "id": "1284392014819",
    "isEncrypted": true,
    "isManaged": true,
    "name": "My profile",
    "profileData": "{}",
    "profileIdentifier": "com.test.app",
    "version": "0.0.1"
  }
]
```

<h3 id="get-the-profiles-associated-with-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="get-the-profiles-associated-with-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Get a list of softwares associated with a user

<a id="opIdgetNetworkSmUserSoftwares"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/user/string/softwares \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/user/{userId}/softwares`

Get a list of softwares associated with a user

<h3 id="get-a-list-of-softwares-associated-with-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "appId": "1234",
    "bundleSize": null,
    "createdAt": "2018-02-11T00:00:00Z",
    "deviceId": "1234",
    "dynamicSize": null,
    "id": "1284392014819",
    "identifier": "com.test.app",
    "installedAt": "2018-05-12T00:00:00Z",
    "iosRedemptionCode": null,
    "isManaged": true,
    "itunesId": null,
    "licenseKey": null,
    "name": "My app",
    "path": "/Path/to/app.app",
    "redemptionCode": null,
    "shortVersion": null,
    "status": null,
    "toInstall": null,
    "toUninstall": false,
    "uninstalledAt": null,
    "updatedAt": "2018-05-12T00:00:00Z",
    "vendor": "Apple",
    "version": "0.1"
  }
]
```

<h3 id="get-a-list-of-softwares-associated-with-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="get-a-list-of-softwares-associated-with-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the owners in an SM network with various specified fields and filters

<a id="opIdgetNetworkSmUsers"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/users \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/users`

List the owners in an SM network with various specified fields and filters

<h3 id="list-the-owners-in-an-sm-network-with-various-specified-fields-and-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|ids|query|string|false|Filter users by id(s). Multiple ids can be passed in as comma separated values.|
|usernames|query|string|false|Filter users by username(s). Multiple usernames can be passed in as comma separated values.|
|emails|query|string|false|Filter users by email(s). Multiple emails can be passed in as comma separated values.|
|scope|query|string|false|Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags as comma separated values.|

> Example responses

> 200 Response

```json
[
  {
    "adGroups": [],
    "asmGroups": [],
    "azureAdGroups": [],
    "displayName": "Miles Meraki <miles@meraki.com>",
    "email": "miles@meraki.com",
    "fullName": "Miles Meraki",
    "hasIdentityCertificate": false,
    "hasPassword": false,
    "id": "1234",
    "isExternal": false,
    "samlGroups": [],
    "tags": [
      "tag1",
      "tag2"
    ],
    "userThumbnail": "https://s3.amazonaws.com/image.extension",
    "username": ""
  }
]
```

<h3 id="list-the-owners-in-an-sm-network-with-various-specified-fields-and-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-owners-in-an-sm-network-with-various-specified-fields-and-filters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the client's daily cellular data usage history

<a id="opIdgetNetworkSmCellularUsageHistory"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/cellularUsageHistory \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/cellularUsageHistory`

Return the client's daily cellular data usage history. Usage data is in kilobytes.

<h3 id="return-the-clients-daily-cellular-data-usage-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "received": 61,
    "sent": 138,
    "ts": 1526087474
  }
]
```

<h3 id="return-the-clients-daily-cellular-data-usage-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-clients-daily-cellular-data-usage-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the certs on a device

<a id="opIdgetNetworkSmCerts"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/certs \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/certs`

List the certs on a device

<h3 id="list-the-certs-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "certPem": "-----BEGIN CERTIFICATE-----\n-----END CERTIFICATE-----\n",
    "deviceId": "1234",
    "id": "15",
    "issuer": "",
    "name": "My Cert",
    "notValidAfter": "May 12, 2018",
    "notValidBefore": "Feb 11, 2018",
    "subject": ""
  }
]
```

<h3 id="list-the-certs-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-certs-on-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Get the profiles associated with a device

<a id="opIdgetNetworkSmDeviceProfiles"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/deviceProfiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/deviceProfiles`

Get the profiles associated with a device

<h3 id="get-the-profiles-associated-with-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "deviceId": "1234",
    "id": "1284392014819",
    "isEncrypted": true,
    "isManaged": true,
    "name": "My profile",
    "profileData": "{}",
    "profileIdentifier": "com.test.app",
    "version": "0.0.1"
  }
]
```

<h3 id="get-the-profiles-associated-with-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="get-the-profiles-associated-with-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the network adapters of a device

<a id="opIdgetNetworkSmNetworkAdapters"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/networkAdapters \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/networkAdapters`

List the network adapters of a device

<h3 id="list-the-network-adapters-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "dhcpServer": "123.123.123.1",
    "dnsServer": "8.8.8.8, 8.8.4.4",
    "gateway": "1.2.3.5",
    "id": "1284392014819",
    "ip": "1.2.3.4",
    "mac": "00:11:22:33:44:55",
    "name": "en0",
    "subnet": "255.255.255.0"
  }
]
```

<h3 id="list-the-network-adapters-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-network-adapters-of-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the restrictions on a device

<a id="opIdgetNetworkSmRestrictions"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/restrictions \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/restrictions`

List the restrictions on a device

<h3 id="list-the-restrictions-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "profile": "com.meraki.sm.1",
    "restrictions": {
      "myRestriction": {
        "value": true
      }
    }
  }
]
```

<h3 id="list-the-restrictions-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-restrictions-on-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the security centers on a device

<a id="opIdgetNetworkSmSecurityCenters"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/securityCenters \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/securityCenters`

List the security centers on a device

<h3 id="list-the-security-centers-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "antiVirusName": "meraki_av",
    "fireWallName": "meraki_fw",
    "hasAntiVirus": true,
    "hasFireWallInstalled": true,
    "id": "1284392014819",
    "isAutoLoginDisabled": true,
    "isDiskEncrypted": true,
    "isFireWallEnabled": true,
    "isRooted": true,
    "runningProcs": "/software,/software_2"
  }
]
```

<h3 id="list-the-security-centers-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-security-centers-on-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Get a list of softwares associated with a device

<a id="opIdgetNetworkSmSoftwares"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/softwares \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/softwares`

Get a list of softwares associated with a device

<h3 id="get-a-list-of-softwares-associated-with-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "appId": "1234",
    "bundleSize": null,
    "createdAt": "2018-02-11T00:00:00Z",
    "deviceId": "1234",
    "dynamicSize": null,
    "id": "1284392014819",
    "identifier": "com.test.app",
    "installedAt": "2018-05-12T00:00:00Z",
    "iosRedemptionCode": null,
    "isManaged": true,
    "itunesId": null,
    "licenseKey": null,
    "name": "My app",
    "path": "/Path/to/app.app",
    "redemptionCode": null,
    "shortVersion": null,
    "status": null,
    "toInstall": null,
    "toUninstall": false,
    "uninstalledAt": null,
    "updatedAt": "2018-05-12T00:00:00Z",
    "vendor": "Apple",
    "version": "0.1"
  }
]
```

<h3 id="get-a-list-of-softwares-associated-with-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="get-a-list-of-softwares-associated-with-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the saved SSID names on a device

<a id="opIdgetNetworkSmWlanLists"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/wlanLists \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/sm/{deviceId}/wlanLists`

List the saved SSID names on a device

<h3 id="list-the-saved-ssid-names-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|deviceId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "2018-02-11T00:00:00Z",
    "id": "1284392014819",
    "xml": "Preferred networks on en0:"
  }
]
```

<h3 id="list-the-saved-ssid-names-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-saved-ssid-names-on-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Lock a set of devices

<a id="opIdlockNetworkSmDevices"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/devices/lock \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ids": "\"1284392014819\""
  }'
```

`PUT /networks/{network_id}/sm/devices/lock`

Lock a set of devices

> Body parameter

```json
{
  "ids": "\"1284392014819\""
}
```

<h3 id="lock-a-set-of-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|string|true|none|
|body|body|object|false|none|
|» ids|body|string|false|The ids of the devices to be locked.|
|» pin|body|integer|false|The pin number for locking macOS devices (a six digit number). Required only for macOS devices.|
|» scope|body|string|false|The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped.|
|» serials|body|string|false|The serials of the devices to be locked.|
|» wifiMacs|body|string|false|The wifiMacs of the devices to be locked.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="lock-a-set-of-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

<a id="opIdgetNetworkSmConnectivity"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/connectivity \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{network_id}/sm/{id}/connectivity`

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

<h3 id="returns-historical-connectivity-data-whether-a-device-is-regularly-checking-in-to-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|string|true|none|
|id|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "firstSeenAt": 1518365681,
    "lastSeenAt": 1526087474
  }
]
```

<h3 id="returns-historical-connectivity-data-whether-a-device-is-regularly-checking-in-to-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="returns-historical-connectivity-data-whether-a-device-is-regularly-checking-in-to-dashboard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return historical records of various Systems Manager network connection details for desktop devices.

<a id="opIdgetNetworkSmDesktopLogs"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/desktopLogs \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{network_id}/sm/{id}/desktopLogs`

Return historical records of various Systems Manager network connection details for desktop devices.

<h3 id="return-historical-records-of-various-systems-manager-network-connection-details-for-desktop-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|string|true|none|
|id|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "dhcpServer": "1.2.3.4",
    "dnsServer": "8",
    "gateway": "1.2.3.5",
    "ip": "1.2.3.4",
    "measuredAt": 1526087474,
    "networkDevice": "NIC",
    "networkDriver": "Driver",
    "networkMTU": "1500",
    "publicIP": "123.123.123.1",
    "subnet": "192.168.1.0/24",
    "ts": 1526087474,
    "user": "milesmeraki",
    "wifiAuth": "wpa-psk",
    "wifiBssid": "00:11:22:33:44:55",
    "wifiChannel": "11",
    "wifiNoise": "-99",
    "wifiRssi": "-11",
    "wifiSsid": "ssid"
  }
]
```

<h3 id="return-historical-records-of-various-systems-manager-network-connection-details-for-desktop-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-historical-records-of-various-systems-manager-network-connection-details-for-desktop-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return historical records of commands sent to Systems Manager devices

<a id="opIdgetNetworkSmDeviceCommandLogs"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/deviceCommandLogs \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{network_id}/sm/{id}/deviceCommandLogs`

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

<h3 id="return-historical-records-of-commands-sent-to-systems-manager-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|string|true|none|
|id|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "action": "UpdateProfile",
    "dashboardUser": "Miles Meraki",
    "details": "{}",
    "name": "My profile",
    "ts": 1526087474
  }
]
```

<h3 id="return-historical-records-of-commands-sent-to-systems-manager-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-historical-records-of-commands-sent-to-systems-manager-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return historical records of various Systems Manager client metrics for desktop devices.

<a id="opIdgetNetworkSmPerformanceHistory"></a>

> Code samples

```bash
curl https://example.com/networks/string/sm/string/performanceHistory \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{network_id}/sm/{id}/performanceHistory`

Return historical records of various Systems Manager client metrics for desktop devices.

<h3 id="return-historical-records-of-various-systems-manager-client-metrics-for-desktop-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|string|true|none|
|id|path|string|true|none|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "cpuPercentUsed": 0.95,
    "diskUsage": {
      "c": {
        "space": 9096,
        "used": 2048
      }
    },
    "memActive": 1024,
    "memFree": 1024,
    "memInactive": 2048,
    "memWired": 4096,
    "networkReceived": 512,
    "networkSent": 512,
    "swapUsed": 768,
    "ts": 1526087474
  }
]
```

<h3 id="return-historical-records-of-various-systems-manager-client-metrics-for-desktop-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-historical-records-of-various-systems-manager-client-metrics-for-desktop-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-snmp-settings">SNMP settings</h1>

## Return the SNMP settings for a network

<a id="opIdgetNetworkSnmpSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/snmpSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/snmpSettings`

Return the SNMP settings for a network

<h3 id="return-the-snmp-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "access": "users",
  "users": [
    {
      "passphrase": "hunter2",
      "username": "AzureDiamond"
    }
  ]
}
```

<h3 id="return-the-snmp-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the SNMP settings for an organization

<a id="opIdgetOrganizationSnmp"></a>

> Code samples

```bash
curl https://example.com/organizations/string/snmp \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/snmp`

Return the SNMP settings for an organization

<h3 id="return-the-snmp-settings-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "hostname": "snmp.meraki.com",
  "peerIps": "123.123.123.1",
  "port": 443,
  "v2cEnabled": false,
  "v3AuthMode": "SHA",
  "v3Enabled": true,
  "v3PrivMode": "AES128"
}
```

<h3 id="return-the-snmp-settings-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-ssids">SSIDs</h1>

## Return the SSID statuses of an access point

<a id="opIdgetNetworkDeviceWirelessStatus"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/wireless/status \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/wireless/status`

Return the SSID statuses of an access point

<h3 id="return-the-ssid-statuses-of-an-access-point-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "basicServiceSets": [
    {
      "band": "2.4 GHz",
      "broadcasting": true,
      "bssid": "8A:15:04:00:00:00",
      "channel": 11,
      "channelWidth": "20 MHz",
      "enabled": true,
      "power": "18 dBm",
      "ssidName": "My SSID",
      "ssidNumber": 0,
      "visible": true
    },
    {
      "band": "5 GHz",
      "broadcasting": true,
      "bssid": "8A:15:14:00:00:00",
      "channel": 64,
      "channelWidth": "40 MHz",
      "enabled": true,
      "power": "18 dBm",
      "ssidName": "My SSID",
      "ssidNumber": 0,
      "visible": true
    },
    {
      "band": "6 GHz",
      "broadcasting": true,
      "bssid": "8A:15:24:00:00:00",
      "channel": 145,
      "channelWidth": "80 MHz",
      "enabled": true,
      "power": "18 dBm",
      "ssidName": "My SSID",
      "ssidNumber": 0,
      "visible": true
    }
  ]
}
```

<h3 id="return-the-ssid-statuses-of-an-access-point-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the SSIDs in a network

<a id="opIdgetNetworkSsids"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/ssids`

List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.

<h3 id="list-the-ssids-in-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "adminSplashUrl": "http://example.com",
    "authMode": "8021x-radius",
    "availabilityTags": [
      "test-tag"
    ],
    "availableOnAllAps": false,
    "bandSelection": "5 GHz band only",
    "enabled": true,
    "encryptionMode": "wpa-eap",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "name": "My SSID",
    "number": 0,
    "perClientBandwidthLimitDown": 0,
    "perClientBandwidthLimitUp": 0,
    "radiusAccountingEnabled": false,
    "radiusAttributeForGroupPolicies": "Filter-Id",
    "radiusEnabled": true,
    "radiusFailoverPolicy": "null",
    "radiusLoadBalancingPolicy": "null",
    "radiusServers": [
      {
        "host": "0.0.0.0",
        "port": 3000
      }
    ],
    "splashPage": "Click-through splash page",
    "splashTimeout": "30 minutes",
    "ssidAdminAccessible": false,
    "visible": true,
    "walledGardenEnabled": true,
    "walledGardenRanges": "example.com",
    "wpaEncryptionMode": "WPA2 only"
  }
]
```

<h3 id="list-the-ssids-in-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-ssids-in-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a single SSID

<a id="opIdgetNetworkSsid"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/ssids/{number}`

Return a single SSID

<h3 id="return-a-single-ssid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "adminSplashUrl": "http://example.com",
  "authMode": "8021x-radius",
  "availabilityTags": [
    "test-tag"
  ],
  "availableOnAllAps": false,
  "bandSelection": "5 GHz band only",
  "enabled": true,
  "encryptionMode": "wpa-eap",
  "ipAssignmentMode": "NAT mode",
  "minBitrate": 11,
  "name": "My SSID",
  "number": 0,
  "perClientBandwidthLimitDown": 0,
  "perClientBandwidthLimitUp": 0,
  "radiusAccountingEnabled": false,
  "radiusAttributeForGroupPolicies": "Filter-Id",
  "radiusEnabled": true,
  "radiusFailoverPolicy": "null",
  "radiusLoadBalancingPolicy": "null",
  "radiusServers": [
    {
      "host": "0.0.0.0",
      "port": 3000
    }
  ],
  "splashPage": "Click-through splash page",
  "splashTimeout": "30 minutes",
  "ssidAdminAccessible": false,
  "visible": true,
  "walledGardenEnabled": true,
  "walledGardenRanges": "example.com",
  "wpaEncryptionMode": "WPA2 only"
}
```

<h3 id="return-a-single-ssid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the attributes of an SSID

<a id="opIdupdateNetworkSsid"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "enabled": true,
    "name": "My SSID"
  }'
```

`PUT /networks/{networkId}/ssids/{number}`

Update the attributes of an SSID

> Body parameter

```json
{
  "enabled": true,
  "name": "My SSID"
}
```

<h3 id="update-the-attributes-of-an-ssid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|
|body|body|object|false|none|
|» apTagsAndVlanIds|body|[object]|false|The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'|
|» » tags|body|string|false|Comma-separated list of AP tags|
|» » vlanId|body|integer|false|Numerical identifier that is assigned to the VLAN|
|» authMode|body|string|false|The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')|
|» availabilityTags|body|[string]|false|Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.|
|» availableOnAllAps|body|boolean|false|Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.|
|» bandSelection|body|string|false|The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')|
|» concentratorNetworkId|body|string|false|The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'.|
|» defaultVlanId|body|integer|false|The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'|
|» disassociateClientsOnVpnFailover|body|boolean|false|Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'.|
|» enabled|body|boolean|false|Whether or not the SSID is enabled|
|» encryptionMode|body|string|false|The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'|
|» enterpriseAdminAccess|body|string|false|Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')|
|» ipAssignmentMode|body|string|false|The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')|
|» lanIsolationEnabled|body|boolean|false|Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.|
|» minBitrate|body|number(float)|false|The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')|
|» name|body|string|false|The name of the SSID|
|» perClientBandwidthLimitDown|body|integer|false|The download bandwidth limit in Kbps. (0 represents no limit.)|
|» perClientBandwidthLimitUp|body|integer|false|The upload bandwidth limit in Kbps. (0 represents no limit.)|
|» psk|body|string|false|The passkey for the SSID. This param is only valid if the authMode is 'psk'|
|» radiusAccountingEnabled|body|boolean|false|Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'|
|» radiusAccountingServers|body|[object]|false|The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'|
|» » host|body|string|true|IP address to which the APs will send RADIUS accounting messages|
|» » port|body|integer|false|Port on the RADIUS server that is listening for accounting messages|
|» » secret|body|string|false|Shared key used to authenticate messages between the APs and RADIUS server|
|» radiusAttributeForGroupPolicies|body|string|false|Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message|
|» radiusCoaEnabled|body|boolean|false|If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.|
|» radiusFailoverPolicy|body|string|false|This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')|
|» radiusLoadBalancingPolicy|body|string|false|This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')|
|» radiusOverride|body|boolean|false|If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.|
|» radiusServers|body|[object]|false|The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'|
|» » host|body|string|true|IP address of your RADIUS server|
|» » port|body|integer|false|UDP port the RADIUS server listens on for Access-requests|
|» » secret|body|string|false|RADIUS client shared secret|
|» secondaryConcentratorNetworkId|body|string|false|The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)|
|» splashPage|body|string|false|The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.|
|» useVlanTagging|body|boolean|false|Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'|
|» visible|body|boolean|false|Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true|
|» vlanId|body|integer|false|The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'|
|» walledGardenEnabled|body|boolean|false|Allow access to a configurable list of IP ranges, which users may access prior to sign-on.|
|» walledGardenRanges|body|string|false|Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden.|
|» wpaEncryptionMode|body|string|false|The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authMode|8021x-google|
|» authMode|8021x-localradius|
|» authMode|8021x-meraki|
|» authMode|8021x-nac|
|» authMode|8021x-radius|
|» authMode|ipsk-with-radius|
|» authMode|ipsk-without-radius|
|» authMode|open|
|» authMode|open-enhanced|
|» authMode|open-with-nac|
|» authMode|open-with-radius|
|» authMode|psk|
|» encryptionMode|wep|
|» encryptionMode|wpa|
|» enterpriseAdminAccess|access disabled|
|» enterpriseAdminAccess|access enabled|
|» radiusFailoverPolicy|Allow access|
|» radiusFailoverPolicy|Deny access|
|» radiusLoadBalancingPolicy|Round robin|
|» radiusLoadBalancingPolicy|Strict priority order|
|» splashPage|Billing|
|» splashPage|Cisco ISE|
|» splashPage|Click-through splash page|
|» splashPage|Facebook Wi-Fi|
|» splashPage|Google Apps domain|
|» splashPage|Google OAuth|
|» splashPage|None|
|» splashPage|Password-protected with Active Directory|
|» splashPage|Password-protected with LDAP|
|» splashPage|Password-protected with Meraki RADIUS|
|» splashPage|Password-protected with custom RADIUS|
|» splashPage|SMS authentication|
|» splashPage|Sponsored guest|
|» splashPage|Systems Manager Sentry|
|» wpaEncryptionMode|WPA1 and WPA2|
|» wpaEncryptionMode|WPA1 only|
|» wpaEncryptionMode|WPA2 only|
|» wpaEncryptionMode|WPA3 Transition Mode|
|» wpaEncryptionMode|WPA3 only|

> Example responses

> 200 Response

```json
{
  "adminSplashUrl": "http://example.com",
  "authMode": "8021x-radius",
  "availabilityTags": [
    "test-tag"
  ],
  "availableOnAllAps": false,
  "bandSelection": "5 GHz band only",
  "enabled": true,
  "encryptionMode": "wpa-eap",
  "ipAssignmentMode": "NAT mode",
  "minBitrate": 11,
  "name": "My SSID",
  "number": 0,
  "perClientBandwidthLimitDown": 0,
  "perClientBandwidthLimitUp": 0,
  "radiusAccountingEnabled": false,
  "radiusAttributeForGroupPolicies": "Filter-Id",
  "radiusEnabled": true,
  "radiusFailoverPolicy": "null",
  "radiusLoadBalancingPolicy": "null",
  "radiusServers": [
    {
      "host": "0.0.0.0",
      "port": 3000
    }
  ],
  "splashPage": "Click-through splash page",
  "splashTimeout": "30 minutes",
  "ssidAdminAccessible": false,
  "visible": true,
  "walledGardenEnabled": true,
  "walledGardenRanges": "example.com",
  "wpaEncryptionMode": "WPA2 only"
}
```

<h3 id="update-the-attributes-of-an-ssid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-security-events">Security events</h1>

## List the security events (intrusion detection only) for a network

<a id="opIdgetNetworkSecurityEvents"></a>

> Code samples

```bash
curl https://example.com/networks/string/securityEvents \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/securityEvents`

List the security events (intrusion detection only) for a network

<h3 id="list-the-security-events-intrusion-detection-only-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 365 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "blocked": true,
    "classification": "4",
    "clientMac": "A1:B2:C3:D4:E5:F6",
    "destIp": "10.20.30.40:80",
    "deviceMac": "00:18:0a:01:02:03",
    "message": "SERVER-WEBAPP JBoss JMX console access attempt",
    "priority": "2",
    "protocol": "tcp/ip",
    "ruleId": "meraki:intrusion/snort/GID/1/SID/26267",
    "sigSource": "",
    "signature": "1:21516:9",
    "srcIp": "1.2.3.4:34195",
    "ts": 1547683314.270398
  },
  {
    "blocked": true,
    "classification": "33",
    "clientMac": "A1:B2:C3:D4:E5:F6",
    "destIp": "10.20.30.40:80",
    "deviceMac": "00:18:0a:01:02:03",
    "message": "POLICY-OTHER Adobe ColdFusion admin interface access attempt",
    "priority": "1",
    "protocol": "tcp/ip",
    "ruleId": "meraki:intrusion/snort/GID/1/SID/26267",
    "sigSource": "",
    "signature": "1:25975:2",
    "srcIp": "1.2.3.4:56023",
    "ts": 1547683827.723265
  }
]
```

<h3 id="list-the-security-events-intrusion-detection-only-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-security-events-intrusion-detection-only-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List the security events (intrusion detection only) for an organization

<a id="opIdgetOrganizationSecurityEvents"></a>

> Code samples

```bash
curl https://example.com/organizations/string/securityEvents \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/securityEvents`

List the security events (intrusion detection only) for an organization

<h3 id="list-the-security-events-intrusion-detection-only-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 365 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.|
|perPage|query|integer|false|The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.|
|startingAfter|query|string|false|A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|
|endingBefore|query|string|false|A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.|

> Example responses

> 200 Response

```json
[
  {
    "blocked": true,
    "classification": "4",
    "clientMac": "A1:B2:C3:D4:E5:F6",
    "destIp": "10.20.30.40:80",
    "deviceMac": "00:18:0a:01:02:03",
    "message": "SERVER-WEBAPP JBoss JMX console access attempt",
    "priority": "2",
    "protocol": "tcp/ip",
    "ruleId": "meraki:intrusion/snort/GID/1/SID/26267",
    "sigSource": "",
    "signature": "1:21516:9",
    "srcIp": "1.2.3.4:34195",
    "ts": 1547683314.270398
  },
  {
    "blocked": true,
    "classification": "33",
    "clientMac": "A1:B2:C3:D4:E5:F6",
    "destIp": "10.20.30.40:80",
    "deviceMac": "00:18:0a:01:02:03",
    "message": "POLICY-OTHER Adobe ColdFusion admin interface access attempt",
    "priority": "1",
    "protocol": "tcp/ip",
    "ruleId": "meraki:intrusion/snort/GID/1/SID/26267",
    "sigSource": "",
    "signature": "1:25975:2",
    "srcIp": "1.2.3.4:56023",
    "ts": 1547683827.723265
  }
]
```

<h3 id="list-the-security-events-intrusion-detection-only-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-security-events-intrusion-detection-only-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-splash-login-attempts">Splash login attempts</h1>

## List the splash login attempts for a network

<a id="opIdgetNetworkSplashLoginAttempts"></a>

> Code samples

```bash
curl https://example.com/networks/string/splashLoginAttempts \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/splashLoginAttempts`

List the splash login attempts for a network

<h3 id="list-the-splash-login-attempts-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|ssidNumber|query|integer|false|Only return the login attempts for the specified SSID|
|loginIdentifier|query|string|false|The username, email, or phone number used during login|
|timespan|query|integer|false|The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ssidNumber|0|
|ssidNumber|1|
|ssidNumber|2|
|ssidNumber|3|
|ssidNumber|4|
|ssidNumber|5|
|ssidNumber|6|
|ssidNumber|7|
|ssidNumber|8|
|ssidNumber|9|
|ssidNumber|10|
|ssidNumber|11|
|ssidNumber|12|
|ssidNumber|13|
|ssidNumber|14|

> Example responses

> 200 Response

```json
[
  {
    "authorization": "success",
    "clientId": "k74272e",
    "clientMac": "22:33:44:55:66:77",
    "gatewayDeviceMac": "00:11:22:33:44:55",
    "login": "miles@meraki.com",
    "loginAt": 1518365681,
    "name": "Miles Meraki",
    "ssid": "My SSID"
  }
]
```

<h3 id="list-the-splash-login-attempts-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-splash-login-attempts-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-splash-settings">Splash settings</h1>

## Display the splash page settings for the given SSID

<a id="opIdgetNetworkSsidSplashSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string/splashSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/ssids/{number}/splashSettings`

Display the splash page settings for the given SSID

<h3 id="display-the-splash-page-settings-for-the-given-ssid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "splashPage": "Click-through splash page",
  "splashUrl": "https://www.custom_splash_url.com",
  "ssidNumber": 0,
  "useSplashUrl": true
}
```

<h3 id="display-the-splash-page-settings-for-the-given-ssid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Modify the splash page settings for the given SSID

<a id="opIdupdateNetworkSsidSplashSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/ssids/string/splashSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "splashUrl": "https://www.custom_splash_url.com",
    "useSplashUrl": true
  }'
```

`PUT /networks/{networkId}/ssids/{number}/splashSettings`

Modify the splash page settings for the given SSID

> Body parameter

```json
{
  "splashUrl": "https://www.custom_splash_url.com",
  "useSplashUrl": true
}
```

<h3 id="modify-the-splash-page-settings-for-the-given-ssid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|number|path|string|true|none|
|body|body|object|false|none|
|» splashUrl|body|string|false|[optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'|
|» useSplashUrl|body|boolean|false|[optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.|

> Example responses

> 200 Response

```json
{
  "splashPage": "Click-through splash page",
  "splashUrl": "https://www.custom_splash_url.com",
  "ssidNumber": 0,
  "useSplashUrl": true
}
```

<h3 id="modify-the-splash-page-settings-for-the-given-ssid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-access-policies">Switch access policies</h1>

## List the access policies for this network

<a id="opIdgetNetworkAccessPolicies"></a>

> Code samples

```bash
curl https://example.com/networks/string/accessPolicies \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/accessPolicies`

List the access policies for this network. Only valid for MS networks.

<h3 id="list-the-access-policies-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accessType": "8021.x",
    "guestVlan": 3700,
    "name": "My access policy",
    "number": 1,
    "radiusServers": [
      {
        "ip": "1.2.3.4",
        "port": 1337
      },
      {
        "ip": "2.3.4.5",
        "port": 1337
      }
    ]
  }
]
```

<h3 id="list-the-access-policies-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-access-policies-for-this-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-port-schedules">Switch port schedules</h1>

## List switch port schedules

<a id="opIdgetNetworkSwitchPortSchedules"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/portSchedules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/portSchedules`

List switch port schedules

<h3 id="list-switch-port-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "1234",
    "name": "Weekdays schedule",
    "networkId": "N_24329156",
    "portSchedule": {
      "friday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "monday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "saturday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "sunday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "thursday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "tuesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "wednesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      }
    }
  }
]
```

<h3 id="list-switch-port-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-switch-port-schedules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a switch port schedule

<a id="opIdcreateNetworkSwitchPortSchedule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/portSchedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "Weekdays schedule",
    "portSchedule": {
      "friday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "monday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "saturday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "sunday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "thursday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "tuesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "wednesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      }
    }
  }'
```

`POST /networks/{networkId}/switch/portSchedules`

Add a switch port schedule

> Body parameter

```json
{
  "name": "Weekdays schedule",
  "portSchedule": {
    "friday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "monday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "saturday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "sunday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "thursday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "tuesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "wednesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    }
  }
}
```

<h3 id="add-a-switch-port-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|The name for your port schedule. Required|
|» portSchedule|body|object|false|    The schedule for switch port scheduling. Schedules are applied to days of the week.<br>    When it's empty, default schedule with all days of a week are configured.<br>    Any unspecified day in the schedule is added as a default schedule configuration of the day.<br>|
|» » friday|body|object|false|The schedule object for Friday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » monday|body|object|false|The schedule object for Monday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » saturday|body|object|false|The schedule object for Saturday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » sunday|body|object|false|The schedule object for Sunday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » thursday|body|object|false|The schedule object for Thursday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » tuesday|body|object|false|The schedule object for Tuesday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » wednesday|body|object|false|The schedule object for Wednesday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|

> Example responses

> 201 Response

```json
{
  "id": "1234",
  "name": "Weekdays schedule",
  "networkId": "N_24329156",
  "portSchedule": {
    "friday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "monday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "saturday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "sunday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "thursday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "tuesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "wednesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    }
  }
}
```

<h3 id="add-a-switch-port-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a switch port schedule

<a id="opIdupdateNetworkSwitchPortSchedule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/portSchedules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "Weekdays schedule",
    "portSchedule": {
      "friday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "monday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "saturday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "sunday": {
        "active": false,
        "from": "0:00",
        "to": "24:00"
      },
      "thursday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "tuesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      },
      "wednesday": {
        "active": true,
        "from": "9:00",
        "to": "17:00"
      }
    }
  }'
```

`PUT /networks/{networkId}/switch/portSchedules/{portScheduleId}`

Update a switch port schedule

> Body parameter

```json
{
  "name": "Weekdays schedule",
  "portSchedule": {
    "friday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "monday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "saturday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "sunday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "thursday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "tuesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "wednesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    }
  }
}
```

<h3 id="update-a-switch-port-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|portScheduleId|path|string|true|none|
|body|body|object|false|none|
|» name|body|string|false|The name for your port schedule.|
|» portSchedule|body|object|false|    The schedule for switch port scheduling. Schedules are applied to days of the week.<br>    When it's empty, default schedule with all days of a week are configured.<br>    Any unspecified day in the schedule is added as a default schedule configuration of the day.<br>|
|» » friday|body|object|false|The schedule object for Friday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » monday|body|object|false|The schedule object for Monday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » saturday|body|object|false|The schedule object for Saturday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » sunday|body|object|false|The schedule object for Sunday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » thursday|body|object|false|The schedule object for Thursday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » tuesday|body|object|false|The schedule object for Tuesday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|
|» » wednesday|body|object|false|The schedule object for Wednesday.|
|» » » active|body|boolean|false|Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.|
|» » » from|body|string|false|The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.|
|» » » to|body|string|false|The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.|

> Example responses

> 200 Response

```json
{
  "id": "1234",
  "name": "Weekdays schedule",
  "networkId": "N_24329156",
  "portSchedule": {
    "friday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "monday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "saturday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "sunday": {
      "active": false,
      "from": "0:00",
      "to": "24:00"
    },
    "thursday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "tuesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    },
    "wednesday": {
      "active": true,
      "from": "9:00",
      "to": "17:00"
    }
  }
}
```

<h3 id="update-a-switch-port-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a switch port schedule

<a id="opIddeleteNetworkSwitchPortSchedule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/portSchedules/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/switch/portSchedules/{portScheduleId}`

Delete a switch port schedule

<h3 id="delete-a-switch-port-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|portScheduleId|path|string|true|none|

<h3 id="delete-a-switch-port-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-ports">Switch ports</h1>

## Return the status for all the ports of a switch

<a id="opIdgetDeviceSwitchPortStatuses"></a>

> Code samples

```bash
curl https://example.com/devices/string/switchPortStatuses \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/switchPortStatuses`

Return the status for all the ports of a switch

<h3 id="return-the-status-for-all-the-ports-of-a-switch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 31 days from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.|

> Example responses

> 200 Response

```json
[
  {
    "cdp": {
      "address": "10.0,0.1",
      "capabilities": "Switch",
      "deviceId": "0c8ddbddee:ff",
      "managementAddress": "10.0.0.100",
      "nativeVlan": 1,
      "platform": "MS350-24X",
      "portId": "Port 20",
      "systemName": "",
      "version": "1",
      "vtpManagementDomain": ""
    },
    "clientCount": 10,
    "duplex": "full",
    "enabled": true,
    "errors": [
      "PoE overload",
      "Very high proportion of CRC errors"
    ],
    "isUplink": false,
    "lldp": {
      "chassisId": "0c:8d:db:dd:ee:ff",
      "managementAddress": "10.0.0.100",
      "managementVlan": 1,
      "portDescription": "Port 20",
      "portId": "20",
      "portVlan": 1,
      "systemCapabilities": "switch",
      "systemDescription": "MS350-24X Cloud Managed PoE Switch",
      "systemName": "MS350-24X - Test"
    },
    "portId": "1",
    "powerUsageInWh": 55.9,
    "securePort": {
      "active": true,
      "authenticationStatus": "Authentication in progress",
      "configOverrides": {
        "allowedVlans": "all",
        "type": "trunk",
        "vlan": 12,
        "voiceVlan": 34
      },
      "enabled": true
    },
    "speed": "10 Gbps",
    "status": "Connected",
    "trafficInKbps": {
      "recv": 1,
      "sent": 1.2,
      "total": 2.2
    },
    "usageInKb": {
      "recv": 17859,
      "sent": 23008,
      "total": 40867
    },
    "warnings": [
      "SecureConnect authentication in progress",
      "PoE port was denied power",
      "High proportion of CRC errors"
    ]
  }
]
```

<h3 id="return-the-status-for-all-the-ports-of-a-switch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-status-for-all-the-ports-of-a-switch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the packet counters for all the ports of a switch

<a id="opIdgetDeviceSwitchPortStatusesPackets"></a>

> Code samples

```bash
curl https://example.com/devices/string/switchPortStatuses/packets \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /devices/{serial}/switchPortStatuses/packets`

Return the packet counters for all the ports of a switch

<h3 id="return-the-packet-counters-for-all-the-ports-of-a-switch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 1 day from today.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.|

> Example responses

> 200 Response

```json
[
  {
    "packets": [
      {
        "desc": "Total",
        "ratePerSec": {
          "recv": 0,
          "sent": 1,
          "total": 1
        },
        "recv": 7946,
        "sent": 104135,
        "total": 112081
      },
      {
        "desc": "Broadcast",
        "ratePerSec": {
          "recv": 0,
          "sent": 0,
          "total": 0
        },
        "recv": 514,
        "sent": 30370,
        "total": 30884
      },
      {
        "desc": "Multicast",
        "ratePerSec": {
          "recv": 0,
          "sent": 0,
          "total": 0
        },
        "recv": 771,
        "sent": 66849,
        "total": 67620
      },
      {
        "desc": "CRC align errors",
        "ratePerSec": {
          "recv": 0,
          "sent": 0,
          "total": 0
        },
        "recv": 0,
        "sent": 0,
        "total": 0
      }
    ],
    "portId": "1"
  }
]
```

<h3 id="return-the-packet-counters-for-all-the-ports-of-a-switch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="return-the-packet-counters-for-all-the-ports-of-a-switch-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-profiles">Switch profiles</h1>

## List the switch profiles for your switch template configuration

<a id="opIdgetOrganizationConfigTemplateSwitchProfiles"></a>

> Code samples

```bash
curl https://example.com/organizations/string/configTemplates/string/switchProfiles \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /organizations/{organizationId}/configTemplates/{configTemplateId}/switchProfiles`

List the switch profiles for your switch template configuration

<h3 id="list-the-switch-profiles-for-your-switch-template-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|configTemplateId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "model": "MS450-24",
    "name": "A Simple Switch Profile",
    "switchProfileId": "1234"
  }
]
```

<h3 id="list-the-switch-profiles-for-your-switch-template-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-switch-profiles-for-your-switch-template-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-settings">Switch settings</h1>

## Returns the switch network settings

<a id="opIdgetNetworkSwitchSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings`

Returns the switch network settings

<h3 id="returns-the-switch-network-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "powerExceptions": [
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0001"
    },
    {
      "powerType": "combined",
      "serial": "Q234-ABCD-0002"
    },
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0003"
    },
    {
      "powerType": "useNetworkSetting",
      "serial": "Q234-ABCD-0004"
    }
  ],
  "useCombinedPower": false,
  "vlan": 100
}
```

<h3 id="returns-the-switch-network-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update switch network settings

<a id="opIdupdateNetworkSwitchSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "powerExceptions": [
      {
        "powerType": "redundant",
        "serial": "Q234-ABCD-0001"
      },
      {
        "powerType": "combined",
        "serial": "Q234-ABCD-0002"
      },
      {
        "powerType": "redundant",
        "serial": "Q234-ABCD-0003"
      },
      {
        "powerType": "useNetworkSetting",
        "serial": "Q234-ABCD-0004"
      }
    ],
    "useCombinedPower": false,
    "vlan": 100
  }'
```

`PUT /networks/{networkId}/switch/settings`

Update switch network settings

> Body parameter

```json
{
  "powerExceptions": [
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0001"
    },
    {
      "powerType": "combined",
      "serial": "Q234-ABCD-0002"
    },
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0003"
    },
    {
      "powerType": "useNetworkSetting",
      "serial": "Q234-ABCD-0004"
    }
  ],
  "useCombinedPower": false,
  "vlan": 100
}
```

<h3 id="update-switch-network-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» powerExceptions|body|[object]|false|Exceptions on a per switch basis to "useCombinedPower"|
|» » powerType|body|string|true|Per switch exception (combined, redundant, useNetworkSetting)|
|» » serial|body|string|true|Serial number of the switch|
|» useCombinedPower|body|boolean|false|The use Combined Power as the default behavior of secondary power supplies on supported devices.|
|» vlan|body|integer|false|Management VLAN|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » powerType|combined|
|» » powerType|redundant|
|» » powerType|useNetworkSetting|

> Example responses

> 200 Response

```json
{
  "powerExceptions": [
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0001"
    },
    {
      "powerType": "combined",
      "serial": "Q234-ABCD-0002"
    },
    {
      "powerType": "redundant",
      "serial": "Q234-ABCD-0003"
    },
    {
      "powerType": "useNetworkSetting",
      "serial": "Q234-ABCD-0004"
    }
  ],
  "useCombinedPower": false,
  "vlan": 100
}
```

<h3 id="update-switch-network-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the MTU configuration

<a id="opIdgetNetworkSwitchSettingsMtu"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/mtu \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/mtu`

Return the MTU configuration

<h3 id="return-the-mtu-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "defaultMtuSize": 9578,
  "overrides": [
    {
      "mtuSize": 1500,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "mtuSize": 1600,
      "switchProfiles": [
        "1284392014819",
        "2983092129865"
      ]
    }
  ]
}
```

<h3 id="return-the-mtu-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the MTU configuration

<a id="opIdupdateNetworkSwitchSettingsMtu"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/mtu \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "defaultMtuSize": 9578,
    "overrides": [
      {
        "mtuSize": 1500,
        "switches": [
          "Q234-ABCD-0001",
          "Q234-ABCD-0002",
          "Q234-ABCD-0003"
        ]
      },
      {
        "mtuSize": 1600,
        "switchProfiles": [
          "1284392014819",
          "2983092129865"
        ]
      }
    ]
  }'
```

`PUT /networks/{networkId}/switch/settings/mtu`

Update the MTU configuration

> Body parameter

```json
{
  "defaultMtuSize": 9578,
  "overrides": [
    {
      "mtuSize": 1500,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "mtuSize": 1600,
      "switchProfiles": [
        "1284392014819",
        "2983092129865"
      ]
    }
  ]
}
```

<h3 id="update-the-mtu-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» defaultMtuSize|body|integer|false|MTU size for the entire network. Default value is 9578.|
|» overrides|body|[object]|false|Override MTU size for individual switches or switch profiles. An empty array will clear overrides.|
|» » mtuSize|body|integer|true|MTU size for the switches or switch profiles.|
|» » switchProfiles|body|[string]|false|List of switch profile IDs. Applicable only for template network.|
|» » switches|body|[string]|false|List of switch serials. Applicable only for switch network.|

> Example responses

> 200 Response

```json
{
  "defaultMtuSize": 9578,
  "overrides": [
    {
      "mtuSize": 1500,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "mtuSize": 1600,
      "switchProfiles": [
        "1284392014819",
        "2983092129865"
      ]
    }
  ]
}
```

<h3 id="update-the-mtu-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return multicast settings for a network

<a id="opIdgetNetworkSwitchSettingsMulticast"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/multicast \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/multicast`

Return multicast settings for a network

<h3 id="return-multicast-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "defaultSettings": {
    "floodUnknownMulticastTrafficEnabled": true,
    "igmpSnoopingEnabled": true
  },
  "overrides": [
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "stacks": [
        "789102",
        "123456",
        "129102"
      ]
    }
  ]
}
```

<h3 id="return-multicast-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update multicast settings for a network

<a id="opIdupdateNetworkSwitchSettingsMulticast"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/multicast \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "defaultSettings": {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true
    },
    "overrides": [
      {
        "floodUnknownMulticastTrafficEnabled": true,
        "igmpSnoopingEnabled": true,
        "switches": [
          "Q234-ABCD-0001",
          "Q234-ABCD-0002",
          "Q234-ABCD-0003"
        ]
      },
      {
        "floodUnknownMulticastTrafficEnabled": true,
        "igmpSnoopingEnabled": true,
        "stacks": [
          "789102",
          "123456",
          "129102"
        ]
      }
    ]
  }'
```

`PUT /networks/{networkId}/switch/settings/multicast`

Update multicast settings for a network

> Body parameter

```json
{
  "defaultSettings": {
    "floodUnknownMulticastTrafficEnabled": true,
    "igmpSnoopingEnabled": true
  },
  "overrides": [
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "stacks": [
        "789102",
        "123456",
        "129102"
      ]
    }
  ]
}
```

<h3 id="update-multicast-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» defaultSettings|body|object|false|Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.|
|» » floodUnknownMulticastTrafficEnabled|body|boolean|false|Flood unknown multicast traffic setting for entire network|
|» » igmpSnoopingEnabled|body|boolean|false|IGMP snooping setting for entire network|
|» overrides|body|[object]|false|Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.|
|» » floodUnknownMulticastTrafficEnabled|body|boolean|true|Flood unknown multicast traffic setting for switches, switch stacks or switch profiles|
|» » igmpSnoopingEnabled|body|boolean|true|IGMP snooping setting for switches, switch stacks or switch profiles|
|» » stacks|body|[string]|false|List of switch stack ids for non-template network|
|» » switchProfiles|body|[string]|false|List of switch profiles ids for template network|
|» » switches|body|[string]|false|List of switch serials for non-template network|

> Example responses

> 200 Response

```json
{
  "defaultSettings": {
    "floodUnknownMulticastTrafficEnabled": true,
    "igmpSnoopingEnabled": true
  },
  "overrides": [
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "switches": [
        "Q234-ABCD-0001",
        "Q234-ABCD-0002",
        "Q234-ABCD-0003"
      ]
    },
    {
      "floodUnknownMulticastTrafficEnabled": true,
      "igmpSnoopingEnabled": true,
      "stacks": [
        "789102",
        "123456",
        "129102"
      ]
    }
  ]
}
```

<h3 id="update-multicast-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List quality of service rules

<a id="opIdgetNetworkSwitchSettingsQosRules"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/qosRules`

List quality of service rules

<h3 id="list-quality-of-service-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "dscp": 0,
    "dstPort": 3000,
    "dstPortRange": "3000-3100",
    "id": "1284392014819",
    "protocol": "TCP",
    "srcPort": 2000,
    "srcPortRange": "70-80",
    "vlan": 100
  }
]
```

<h3 id="list-quality-of-service-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-quality-of-service-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a quality of service rule

<a id="opIdcreateNetworkSwitchSettingsQosRule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "dscp": 0,
    "dstPort": 3000,
    "dstPortRange": "3000-3100",
    "protocol": "TCP",
    "srcPort": 2000,
    "srcPortRange": "70-80",
    "vlan": 100
  }'
```

`POST /networks/{networkId}/switch/settings/qosRules`

Add a quality of service rule

> Body parameter

```json
{
  "dscp": 0,
  "dstPort": 3000,
  "dstPortRange": "3000-3100",
  "protocol": "TCP",
  "srcPort": 2000,
  "srcPortRange": "70-80",
  "vlan": 100
}
```

<h3 id="add-a-quality-of-service-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» dscp|body|integer|false|DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0|
|» dstPort|body|integer|false|The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.|
|» dstPortRange|body|string|false|The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80|
|» protocol|body|string|false|The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY"|
|» srcPort|body|integer|false|The source port of the incoming packet. Applicable only if protocol is TCP or UDP.|
|» srcPortRange|body|string|false|The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80|
|» vlan|body|integer|true|The VLAN of the incoming packet. A null value will match any VLAN.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|ANY|
|» protocol|TCP|
|» protocol|UDP|

> Example responses

> 201 Response

```json
{
  "dscp": 0,
  "dstPort": 3000,
  "dstPortRange": "3000-3100",
  "id": "1284392014819",
  "protocol": "TCP",
  "srcPort": 2000,
  "srcPortRange": "70-80",
  "vlan": 100
}
```

<h3 id="add-a-quality-of-service-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the quality of service rule IDs by order in which they will be processed by the switch

<a id="opIdgetNetworkSwitchSettingsQosRulesOrder"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules/order \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/qosRules/order`

Return the quality of service rule IDs by order in which they will be processed by the switch

<h3 id="return-the-quality-of-service-rule-ids-by-order-in-which-they-will-be-processed-by-the-switch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ruleIds": [
    "1284392014819",
    "2983092129865"
  ]
}
```

<h3 id="return-the-quality-of-service-rule-ids-by-order-in-which-they-will-be-processed-by-the-switch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the order in which the rules should be processed by the switch

<a id="opIdupdateNetworkSwitchSettingsQosRulesOrder"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules/order \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ruleIds": [
      "1284392014819",
      "2983092129865"
    ]
  }'
```

`PUT /networks/{networkId}/switch/settings/qosRules/order`

Update the order in which the rules should be processed by the switch

> Body parameter

```json
{
  "ruleIds": [
    "1284392014819",
    "2983092129865"
  ]
}
```

<h3 id="update-the-order-in-which-the-rules-should-be-processed-by-the-switch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» ruleIds|body|[string]|true|A list of quality of service rule IDs arranged in order in which they should be processed by the switch.|

> Example responses

> 200 Response

```json
{
  "ruleIds": [
    "1284392014819",
    "2983092129865"
  ]
}
```

<h3 id="update-the-order-in-which-the-rules-should-be-processed-by-the-switch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a quality of service rule

<a id="opIdgetNetworkSwitchSettingsQosRule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/qosRules/{qosRuleId}`

Return a quality of service rule

<h3 id="return-a-quality-of-service-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qosRuleId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dscp": 0,
  "dstPort": 3000,
  "dstPortRange": "3000-3100",
  "id": "1284392014819",
  "protocol": "TCP",
  "srcPort": 2000,
  "srcPortRange": "70-80",
  "vlan": 100
}
```

<h3 id="return-a-quality-of-service-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a quality of service rule

<a id="opIdupdateNetworkSwitchSettingsQosRule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "dscp": 0,
    "dstPort": 3000,
    "dstPortRange": "3000-3100",
    "protocol": "TCP",
    "srcPort": 2000,
    "srcPortRange": "70-80",
    "vlan": 100
  }'
```

`PUT /networks/{networkId}/switch/settings/qosRules/{qosRuleId}`

Update a quality of service rule

> Body parameter

```json
{
  "dscp": 0,
  "dstPort": 3000,
  "dstPortRange": "3000-3100",
  "protocol": "TCP",
  "srcPort": 2000,
  "srcPortRange": "70-80",
  "vlan": 100
}
```

<h3 id="update-a-quality-of-service-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qosRuleId|path|string|true|none|
|body|body|object|false|none|
|» dscp|body|integer|false|DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0.|
|» dstPort|body|integer|false|The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.|
|» dstPortRange|body|string|false|The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80|
|» protocol|body|string|false|The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY".|
|» srcPort|body|integer|false|The source port of the incoming packet. Applicable only if protocol is TCP or UDP.|
|» srcPortRange|body|string|false|The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80|
|» vlan|body|integer|false|The VLAN of the incoming packet. A null value will match any VLAN.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|ANY|
|» protocol|TCP|
|» protocol|UDP|

> Example responses

> 200 Response

```json
{
  "dscp": 0,
  "dstPort": 3000,
  "dstPortRange": "3000-3100",
  "id": "1284392014819",
  "protocol": "TCP",
  "srcPort": 2000,
  "srcPortRange": "70-80",
  "vlan": 100
}
```

<h3 id="update-a-quality-of-service-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a quality of service rule

<a id="opIddeleteNetworkSwitchSettingsQosRule"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/qosRules/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/switch/settings/qosRules/{qosRuleId}`

Delete a quality of service rule

<h3 id="delete-a-quality-of-service-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|qosRuleId|path|string|true|none|

<h3 id="delete-a-quality-of-service-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return the storm control configuration for a switch network

<a id="opIdgetNetworkSwitchSettingsStormControl"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/stormControl \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switch/settings/stormControl`

Return the storm control configuration for a switch network

<h3 id="return-the-storm-control-configuration-for-a-switch-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "broadcastThreshold": 30,
  "multicastThreshold": 30,
  "unknownUnicastThreshold": 30
}
```

<h3 id="return-the-storm-control-configuration-for-a-switch-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the storm control configuration for a switch network

<a id="opIdupdateNetworkSwitchSettingsStormControl"></a>

> Code samples

```bash
curl https://example.com/networks/string/switch/settings/stormControl \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "broadcastThreshold": 30,
    "multicastThreshold": 30,
    "unknownUnicastThreshold": 30
  }'
```

`PUT /networks/{networkId}/switch/settings/stormControl`

Update the storm control configuration for a switch network

> Body parameter

```json
{
  "broadcastThreshold": 30,
  "multicastThreshold": 30,
  "unknownUnicastThreshold": 30
}
```

<h3 id="update-the-storm-control-configuration-for-a-switch-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» broadcastThreshold|body|integer|false|Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.|
|» multicastThreshold|body|integer|false|Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.|
|» unknownUnicastThreshold|body|integer|false|Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.|

> Example responses

> 200 Response

```json
{
  "broadcastThreshold": 30,
  "multicastThreshold": 30,
  "unknownUnicastThreshold": 30
}
```

<h3 id="update-the-storm-control-configuration-for-a-switch-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-switch-stacks">Switch stacks</h1>

## List the switch stacks in a network

<a id="opIdgetNetworkSwitchStacks"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switchStacks`

List the switch stacks in a network

<h3 id="list-the-switch-stacks-in-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "8473",
    "name": "A cool stack",
    "serials": [
      "QBZY-XWVU-TSRQ",
      "QBAB-CDEF-GHIJ"
    ]
  }
]
```

<h3 id="list-the-switch-stacks-in-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-switch-stacks-in-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Create a stack

<a id="opIdcreateNetworkSwitchStack"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "name": "A cool stack",
    "serials": [
      "QBZY-XWVU-TSRQ",
      "QBAB-CDEF-GHIJ"
    ]
  }'
```

`POST /networks/{networkId}/switchStacks`

Create a stack

> Body parameter

```json
{
  "name": "A cool stack",
  "serials": [
    "QBZY-XWVU-TSRQ",
    "QBAB-CDEF-GHIJ"
  ]
}
```

<h3 id="create-a-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|The name of the new stack|
|» serials|body|[string]|true|An array of switch serials to be added into the new stack|

> Example responses

> 201 Response

```json
{
  "id": "8473",
  "name": "A cool stack",
  "serials": [
    "QBZY-XWVU-TSRQ",
    "QBAB-CDEF-GHIJ"
  ]
}
```

<h3 id="create-a-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Show a switch stack

<a id="opIdgetNetworkSwitchStack"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/switchStacks/{switchStackId}`

Show a switch stack

<h3 id="show-a-switch-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|switchStackId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "8473",
  "name": "A cool stack",
  "serials": [
    "QBZY-XWVU-TSRQ",
    "QBAB-CDEF-GHIJ"
  ]
}
```

<h3 id="show-a-switch-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a stack

<a id="opIddeleteNetworkSwitchStack"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/switchStacks/{switchStackId}`

Delete a stack

<h3 id="delete-a-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|switchStackId|path|string|true|none|

<h3 id="delete-a-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a switch to a stack

<a id="opIdaddNetworkSwitchStack"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks/string/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "serial": "QBZY-XWVU-TSRQ"
  }'
```

`POST /networks/{networkId}/switchStacks/{switchStackId}/add`

Add a switch to a stack

> Body parameter

```json
{
  "serial": "QBZY-XWVU-TSRQ"
}
```

<h3 id="add-a-switch-to-a-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|switchStackId|path|string|true|none|
|body|body|object|true|none|
|» serial|body|string|true|The serial of the switch to be added|

> Example responses

> 200 Response

```json
{
  "id": "8473",
  "name": "A cool stack",
  "serials": [
    "QBZY-XWVU-TSRQ",
    "QBAB-CDEF-GHIJ"
  ]
}
```

<h3 id="add-a-switch-to-a-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Remove a switch from a stack

<a id="opIdremoveNetworkSwitchStack"></a>

> Code samples

```bash
curl https://example.com/networks/string/switchStacks/string/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "serial": "QBZY-XWVU-TSRQ"
  }'
```

`POST /networks/{networkId}/switchStacks/{switchStackId}/remove`

Remove a switch from a stack

> Body parameter

```json
{
  "serial": "QBZY-XWVU-TSRQ"
}
```

<h3 id="remove-a-switch-from-a-stack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|switchStackId|path|string|true|none|
|body|body|object|true|none|
|» serial|body|string|true|The serial of the switch to be removed|

> Example responses

> 200 Response

```json
{
  "id": "8473",
  "name": "A cool stack",
  "serials": [
    "QBAB-CDEF-GHIJ"
  ]
}
```

<h3 id="remove-a-switch-from-a-stack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-syslog-servers">Syslog servers</h1>

## List the syslog servers for a network

<a id="opIdgetNetworkSyslogServers"></a>

> Code samples

```bash
curl https://example.com/networks/string/syslogServers \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/syslogServers`

List the syslog servers for a network

<h3 id="list-the-syslog-servers-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "host": "1.2.3.4",
    "port": 443,
    "roles": [
      "Wireless event log",
      "URLs"
    ]
  }
]
```

<h3 id="list-the-syslog-servers-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-syslog-servers-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the syslog servers for a network

<a id="opIdupdateNetworkSyslogServers"></a>

> Code samples

```bash
curl https://example.com/networks/string/syslogServers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "servers": [
      {
        "host": "1.2.3.4",
        "port": 443,
        "roles": [
          "Wireless event log",
          "URLs"
        ]
      }
    ]
  }'
```

`PUT /networks/{networkId}/syslogServers`

Update the syslog servers for a network

> Body parameter

```json
{
  "servers": [
    {
      "host": "1.2.3.4",
      "port": 443,
      "roles": [
        "Wireless event log",
        "URLs"
      ]
    }
  ]
}
```

<h3 id="update-the-syslog-servers-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» servers|body|[object]|true|A list of the syslog servers for this network|
|» » host|body|string|true|The IP address of the syslog server|
|» » port|body|integer|true|The port of the syslog server|
|» » roles|body|[string]|true|A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'|

> Example responses

> 200 Response

```json
[
  {
    "host": "1.2.3.4",
    "port": 443,
    "roles": [
      "Wireless event log",
      "URLs"
    ]
  }
]
```

<h3 id="update-the-syslog-servers-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="update-the-syslog-servers-for-a-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-traffic-shaping-uplink-settings">Traffic shaping uplink settings</h1>

## Returns the uplink settings for your MX network.

<a id="opIdgetNetworkUplinkSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/uplinkSettings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/uplinkSettings`

Returns the uplink settings for your MX network.

<h3 id="returns-the-uplink-settings-for-your-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bandwidthLimits": {
    "cellular": {
      "limitDown": 51200,
      "limitUp": 51200
    },
    "wan1": {
      "limitDown": 1000000,
      "limitUp": 1000000
    },
    "wan2": {
      "limitDown": 1000000,
      "limitUp": 1000000
    }
  }
}
```

<h3 id="returns-the-uplink-settings-for-your-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Updates the uplink settings for your MX network.

<a id="opIdupdateNetworkUplinkSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/uplinkSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "bandwidthLimits": {
      "cellular": {
        "limitDown": 51200,
        "limitUp": 51200
      },
      "wan1": {
        "limitDown": 1000000,
        "limitUp": 1000000
      },
      "wan2": {
        "limitDown": 1000000,
        "limitUp": 1000000
      }
    }
  }'
```

`PUT /networks/{networkId}/uplinkSettings`

Updates the uplink settings for your MX network.

> Body parameter

```json
{
  "bandwidthLimits": {
    "cellular": {
      "limitDown": 51200,
      "limitUp": 51200
    },
    "wan1": {
      "limitDown": 1000000,
      "limitUp": 1000000
    },
    "wan2": {
      "limitDown": 1000000,
      "limitUp": 1000000
    }
  }
}
```

<h3 id="updates-the-uplink-settings-for-your-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» bandwidthLimits|body|object|false|A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)|
|» » cellular|body|object|false|The bandwidth settings for the 'cellular' uplink|
|» » » limitDown|body|integer|false|The maximum download limit (integer, in Kbps). null indicates no limit|
|» » » limitUp|body|integer|false|The maximum upload limit (integer, in Kbps). null indicates no limit|
|» » wan1|body|object|false|The bandwidth settings for the 'wan1' uplink|
|» » » limitDown|body|integer|false|The maximum download limit (integer, in Kbps). null indicates no limit|
|» » » limitUp|body|integer|false|The maximum upload limit (integer, in Kbps). null indicates no limit|
|» » wan2|body|object|false|The bandwidth settings for the 'wan2' uplink|
|» » » limitDown|body|integer|false|The maximum download limit (integer, in Kbps). null indicates no limit|
|» » » limitUp|body|integer|false|The maximum upload limit (integer, in Kbps). null indicates no limit|

> Example responses

> 200 Response

```json
{
  "bandwidthLimits": {
    "cellular": {
      "limitDown": 51200,
      "limitUp": 51200
    },
    "wan1": {
      "limitDown": 1000000,
      "limitUp": 1000000
    },
    "wan2": {
      "limitDown": 1000000,
      "limitUp": 1000000
    }
  }
}
```

<h3 id="updates-the-uplink-settings-for-your-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-vlans">VLANs</h1>

## List the VLANs for an MX network

<a id="opIdgetNetworkVlans"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlans \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/vlans`

List the VLANs for an MX network

<h3 id="list-the-vlans-for-an-mx-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "applianceIp": "192.168.1.2",
    "cidr": "192.168.1.0/24",
    "dhcpBootFilename": "sample.file",
    "dhcpBootNextServer": "1.2.3.4",
    "dhcpBootOptionsEnabled": false,
    "dhcpHandling": "Run a DHCP server",
    "dhcpLeaseTime": "1 day",
    "dhcpOptions": [
      {
        "code": "5",
        "type": "text",
        "value": "five"
      }
    ],
    "dhcpRelayServerIps": [
      "192.168.1.0/24",
      "192.168.128.0/24"
    ],
    "dnsNameservers": "google_dns",
    "fixedIpAssignments": {
      "22:33:44:55:66:77": {
        "ip": "1.2.3.4",
        "name": "Some client name"
      }
    },
    "groupPolicyId": "101",
    "id": "1234",
    "ipv6": {
      "enabled": true,
      "prefixAssignments": [
        {
          "autonomous": false,
          "origin": {
            "interfaces": [
              "wan0"
            ],
            "type": "internet"
          },
          "staticApplianceIp6": "2001:db8:3c4d:15::1",
          "staticPrefix": "2001:db8:3c4d:15::/64"
        }
      ]
    },
    "mandatoryDhcp": {
      "enabled": true
    },
    "mask": 28,
    "name": "My VLAN",
    "networkId": "N_24329156",
    "reservedIpRanges": [
      {
        "comment": "A reserved IP range",
        "end": "192.168.1.1",
        "start": "192.168.1.0"
      }
    ],
    "subnet": "192.168.1.0/24",
    "templateVlanType": "same",
    "vpnNatSubnet": "192.168.1.0/24"
  }
]
```

<h3 id="list-the-vlans-for-an-mx-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-the-vlans-for-an-mx-network-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Add a VLAN

<a id="opIdcreateNetworkVlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "applianceIp": "192.168.1.2",
    "groupPolicyId": "101",
    "id": "1234",
    "name": "My VLAN",
    "subnet": "192.168.1.0/24"
  }'
```

`POST /networks/{networkId}/vlans`

Add a VLAN

> Body parameter

```json
{
  "applianceIp": "192.168.1.2",
  "groupPolicyId": "101",
  "id": "1234",
  "name": "My VLAN",
  "subnet": "192.168.1.0/24"
}
```

<h3 id="add-a-vlan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» applianceIp|body|string|true|The local IP of the appliance on the VLAN|
|» groupPolicyId|body|string|false|The id of the desired group policy to apply to the VLAN|
|» id|body|string|true|The VLAN ID of the new VLAN (must be between 1 and 4094)|
|» name|body|string|true|The name of the new VLAN|
|» subnet|body|string|true|The subnet of the VLAN|

> Example responses

> 201 Response

```json
{
  "applianceIp": "192.168.1.2",
  "cidr": "192.168.1.0/24",
  "dhcpBootFilename": "sample.file",
  "dhcpBootNextServer": "1.2.3.4",
  "dhcpBootOptionsEnabled": false,
  "dhcpHandling": "Run a DHCP server",
  "dhcpLeaseTime": "1 day",
  "dhcpOptions": [],
  "dnsNameservers": "google_dns",
  "fixedIpAssignments": {},
  "groupPolicyId": "101",
  "id": "1234",
  "ipv6": {
    "enabled": true,
    "prefixAssignments": [
      {
        "autonomous": false,
        "origin": {
          "interfaces": [
            "wan0"
          ],
          "type": "internet"
        },
        "staticApplianceIp6": "2001:db8:3c4d:15::1",
        "staticPrefix": "2001:db8:3c4d:15::/64"
      }
    ]
  },
  "mandatoryDhcp": {
    "enabled": true
  },
  "mask": 28,
  "name": "My VLAN",
  "networkId": "N_24329156",
  "reservedIpRanges": [],
  "subnet": "192.168.1.0/24",
  "templateVlanType": "same"
}
```

<h3 id="add-a-vlan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Return a VLAN

<a id="opIdgetNetworkVlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlans/string \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/vlans/{vlanId}`

Return a VLAN

<h3 id="return-a-vlan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|vlanId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "applianceIp": "192.168.1.2",
  "cidr": "192.168.1.0/24",
  "dhcpBootFilename": "sample.file",
  "dhcpBootNextServer": "1.2.3.4",
  "dhcpBootOptionsEnabled": false,
  "dhcpHandling": "Run a DHCP server",
  "dhcpLeaseTime": "1 day",
  "dhcpOptions": [
    {
      "code": "5",
      "type": "text",
      "value": "five"
    }
  ],
  "dhcpRelayServerIps": [
    "192.168.1.0/24",
    "192.168.128.0/24"
  ],
  "dnsNameservers": "google_dns",
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "groupPolicyId": "101",
  "id": "1234",
  "ipv6": {
    "enabled": true,
    "prefixAssignments": [
      {
        "autonomous": false,
        "origin": {
          "interfaces": [
            "wan0"
          ],
          "type": "internet"
        },
        "staticApplianceIp6": "2001:db8:3c4d:15::1",
        "staticPrefix": "2001:db8:3c4d:15::/64"
      }
    ]
  },
  "mandatoryDhcp": {
    "enabled": true
  },
  "mask": 28,
  "name": "My VLAN",
  "networkId": "N_24329156",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24",
  "templateVlanType": "same",
  "vpnNatSubnet": "192.168.1.0/24"
}
```

<h3 id="return-a-vlan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update a VLAN

<a id="opIdupdateNetworkVlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlans/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "applianceIp": "192.168.1.2",
    "cidr": "192.168.1.0/24",
    "dhcpBootFilename": "sample.file",
    "dhcpBootNextServer": "1.2.3.4",
    "dhcpBootOptionsEnabled": false,
    "dhcpHandling": "Run a DHCP server",
    "dhcpLeaseTime": "1 day",
    "dhcpOptions": [
      {
        "code": "5",
        "type": "text",
        "value": "five"
      }
    ],
    "dhcpRelayServerIps": [
      "192.168.1.0/24",
      "192.168.128.0/24"
    ],
    "dnsNameservers": "google_dns",
    "fixedIpAssignments": {
      "22:33:44:55:66:77": {
        "ip": "1.2.3.4",
        "name": "Some client name"
      }
    },
    "groupPolicyId": "101",
    "ipv6": {
      "enabled": true,
      "prefixAssignments": [
        {
          "autonomous": false,
          "origin": {
            "interfaces": [
              "wan0"
            ],
            "type": "internet"
          },
          "staticApplianceIp6": "2001:db8:3c4d:15::1",
          "staticPrefix": "2001:db8:3c4d:15::/64"
        }
      ]
    },
    "mandatoryDhcp": {
      "enabled": true
    },
    "mask": 28,
    "name": "My VLAN",
    "reservedIpRanges": [
      {
        "comment": "A reserved IP range",
        "end": "192.168.1.1",
        "start": "192.168.1.0"
      }
    ],
    "subnet": "192.168.1.0/24",
    "templateVlanType": "same",
    "vpnNatSubnet": "192.168.1.0/24"
  }'
```

`PUT /networks/{networkId}/vlans/{vlanId}`

Update a VLAN

> Body parameter

```json
{
  "applianceIp": "192.168.1.2",
  "cidr": "192.168.1.0/24",
  "dhcpBootFilename": "sample.file",
  "dhcpBootNextServer": "1.2.3.4",
  "dhcpBootOptionsEnabled": false,
  "dhcpHandling": "Run a DHCP server",
  "dhcpLeaseTime": "1 day",
  "dhcpOptions": [
    {
      "code": "5",
      "type": "text",
      "value": "five"
    }
  ],
  "dhcpRelayServerIps": [
    "192.168.1.0/24",
    "192.168.128.0/24"
  ],
  "dnsNameservers": "google_dns",
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "groupPolicyId": "101",
  "ipv6": {
    "enabled": true,
    "prefixAssignments": [
      {
        "autonomous": false,
        "origin": {
          "interfaces": [
            "wan0"
          ],
          "type": "internet"
        },
        "staticApplianceIp6": "2001:db8:3c4d:15::1",
        "staticPrefix": "2001:db8:3c4d:15::/64"
      }
    ]
  },
  "mandatoryDhcp": {
    "enabled": true
  },
  "mask": 28,
  "name": "My VLAN",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24",
  "templateVlanType": "same",
  "vpnNatSubnet": "192.168.1.0/24"
}
```

<h3 id="update-a-vlan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|vlanId|path|string|true|none|
|body|body|object|false|none|
|» applianceIp|body|string|false|The local IP of the appliance on the VLAN|
|» dhcpBootFilename|body|string|false|DHCP boot option for boot filename|
|» dhcpBootNextServer|body|string|false|DHCP boot option to direct boot clients to the server to load the boot file from|
|» dhcpBootOptionsEnabled|body|boolean|false|Use DHCP boot options specified in other properties|
|» dhcpHandling|body|string|false|The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'|
|» dhcpLeaseTime|body|string|false|The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'|
|» dhcpOptions|body|[object]|false|The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.|
|» » code|body|string|true|The code for the DHCP option. This should be an integer between 2 and 254.|
|» » type|body|string|true|The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'|
|» » value|body|string|true|The value for the DHCP option|
|» dhcpRelayServerIps|body|[string]|false|The IPs of the DHCP servers that DHCP requests should be relayed to|
|» dnsNameservers|body|string|false|The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names|
|» fixedIpAssignments|body|object|false|The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.|
|» groupPolicyId|body|string|false|The id of the desired group policy to apply to the VLAN|
|» name|body|string|false|The name of the VLAN|
|» reservedIpRanges|body|[object]|false|The DHCP reserved IP ranges on the VLAN|
|» » comment|body|string|true|A text comment for the reserved range|
|» » end|body|string|true|The last IP in the reserved range|
|» » start|body|string|true|The first IP in the reserved range|
|» subnet|body|string|false|The subnet of the VLAN|
|» vpnNatSubnet|body|string|false|The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dhcpHandling|Do not respond to DHCP requests|
|» dhcpHandling|Relay DHCP to another server|
|» dhcpHandling|Run a DHCP server|
|» dhcpLeaseTime|1 day|
|» dhcpLeaseTime|1 hour|
|» dhcpLeaseTime|1 week|
|» dhcpLeaseTime|12 hours|
|» dhcpLeaseTime|30 minutes|
|» dhcpLeaseTime|4 hours|
|» » type|hex|
|» » type|integer|
|» » type|ip|
|» » type|text|

> Example responses

> 200 Response

```json
{
  "applianceIp": "192.168.1.2",
  "cidr": "192.168.1.0/24",
  "dhcpBootFilename": "sample.file",
  "dhcpBootNextServer": "1.2.3.4",
  "dhcpBootOptionsEnabled": false,
  "dhcpHandling": "Run a DHCP server",
  "dhcpLeaseTime": "1 day",
  "dhcpOptions": [
    {
      "code": "5",
      "type": "text",
      "value": "five"
    }
  ],
  "dhcpRelayServerIps": [
    "192.168.1.0/24",
    "192.168.128.0/24"
  ],
  "dnsNameservers": "google_dns",
  "fixedIpAssignments": {
    "22:33:44:55:66:77": {
      "ip": "1.2.3.4",
      "name": "Some client name"
    }
  },
  "groupPolicyId": "101",
  "id": "1234",
  "ipv6": {
    "enabled": true,
    "prefixAssignments": [
      {
        "autonomous": false,
        "origin": {
          "interfaces": [
            "wan0"
          ],
          "type": "internet"
        },
        "staticApplianceIp6": "2001:db8:3c4d:15::1",
        "staticPrefix": "2001:db8:3c4d:15::/64"
      }
    ]
  },
  "mandatoryDhcp": {
    "enabled": true
  },
  "mask": 28,
  "name": "My VLAN",
  "networkId": "N_24329156",
  "reservedIpRanges": [
    {
      "comment": "A reserved IP range",
      "end": "192.168.1.1",
      "start": "192.168.1.0"
    }
  ],
  "subnet": "192.168.1.0/24",
  "templateVlanType": "same",
  "vpnNatSubnet": "192.168.1.0/24"
}
```

<h3 id="update-a-vlan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Delete a VLAN from a network

<a id="opIddeleteNetworkVlan"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlans/string \
  -X DELETE \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`DELETE /networks/{networkId}/vlans/{vlanId}`

Delete a VLAN from a network

<h3 id="delete-a-vlan-from-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|vlanId|path|string|true|none|

<h3 id="delete-a-vlan-from-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Returns the enabled status of VLANs for the network

<a id="opIdgetNetworkVlansEnabledState"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlansEnabledState \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/vlansEnabledState`

Returns the enabled status of VLANs for the network

<h3 id="returns-the-enabled-status-of-vlans-for-the-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "networkId": "N_24329156"
}
```

<h3 id="returns-the-enabled-status-of-vlans-for-the-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Enable/Disable VLANs for the given network

<a id="opIdupdateNetworkVlansEnabledState"></a>

> Code samples

```bash
curl https://example.com/networks/string/vlansEnabledState \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "enabled": true
  }'
```

`PUT /networks/{networkId}/vlansEnabledState`

Enable/Disable VLANs for the given network

> Body parameter

```json
{
  "enabled": true
}
```

<h3 id="enabledisable-vlans-for-the-given-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|true|none|
|» enabled|body|boolean|true|Boolean indicating whether to enable (true) or disable (false) VLANs for the network|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "networkId": "N_24329156"
}
```

<h3 id="enabledisable-vlans-for-the-given-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-wireless-health">Wireless health</h1>

## Aggregated connectivity info for this network, grouped by clients

<a id="opIdgetNetworkClientsConnectionStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/connectionStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/connectionStats`

Aggregated connectivity info for this network, grouped by clients

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
[
  {
    "connectionStats": {
      "assoc": 0,
      "auth": 4,
      "dhcp": 0,
      "dns": 0,
      "success": 10
    },
    "mac": "00:61:71:c8:51:27"
  },
  {
    "connectionStats": {
      "assoc": 0,
      "auth": 1,
      "dhcp": 0,
      "dns": 0,
      "success": 24
    },
    "mac": "1c:4d:70:7f:5e:5e"
  },
  {
    "connectionStats": {
      "assoc": 1,
      "auth": 0,
      "dhcp": 0,
      "dns": 0,
      "success": 16
    },
    "mac": "1c:4d:70:81:8d:0a"
  }
]
```

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated latency info for this network, grouped by clients

<a id="opIdgetNetworkClientsLatencyStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/latencyStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/latencyStats`

Aggregated latency info for this network, grouped by clients

<h3 id="aggregated-latency-info-for-this-network-grouped-by-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|fields|query|string|false|Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
[
  {
    "latencyStats": {
      "backgroundTraffic": {
        "avg": 606.52,
        "rawDistribution": {
          "0": 1234,
          "1": 2345,
          "2": 3456,
          "4": 4567,
          "8": 5678,
          "16": 6789,
          "32": 7890,
          "64": 8901,
          "128": 9012,
          "256": 83,
          "512": 1234,
          "1024": 2345,
          "2048": 9999
        }
      },
      "bestEffortTraffic": "same shape as backgroundTraffic",
      "videoTraffic": "same shape as backgroundTraffic",
      "voiceTraffic": "same shape as backgroundTraffic"
    },
    "mac": "00:61:71:c8:51:27"
  },
  {
    "latencyStats": {
      "backgroundTraffic": {
        "avg": 606.52,
        "rawDistribution": {
          "0": 1234,
          "1": 2345,
          "2": 3456,
          "4": 4567,
          "8": 5678,
          "16": 6789,
          "32": 7890,
          "64": 8901,
          "128": 9012,
          "256": 83,
          "512": 1234,
          "1024": 2345,
          "2048": 9999
        }
      },
      "bestEffortTraffic": "same shape as backgroundTraffic",
      "videoTraffic": "same shape as backgroundTraffic",
      "voiceTraffic": "same shape as backgroundTraffic"
    },
    "mac": "1c:4d:70:7f:5e:5e"
  },
  {
    "latencyStats": {
      "backgroundTraffic": {
        "avg": 606.52,
        "rawDistribution": {
          "0": 1234,
          "1": 2345,
          "2": 3456,
          "4": 4567,
          "8": 5678,
          "16": 6789,
          "32": 7890,
          "64": 8901,
          "128": 9012,
          "256": 83,
          "512": 1234,
          "1024": 2345,
          "2048": 9999
        }
      },
      "bestEffortTraffic": "same shape as backgroundTraffic",
      "videoTraffic": "same shape as backgroundTraffic",
      "voiceTraffic": "same shape as backgroundTraffic"
    },
    "mac": "1c:4d:70:81:8d:0a"
  }
]
```

<h3 id="aggregated-latency-info-for-this-network-grouped-by-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="aggregated-latency-info-for-this-network-grouped-by-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated connectivity info for a given client on this network

<a id="opIdgetNetworkClientConnectionStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/connectionStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/connectionStats`

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

<h3 id="aggregated-connectivity-info-for-a-given-client-on-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "connectionStats": {
    "assoc": 0,
    "auth": 4,
    "dhcp": 0,
    "dns": 0,
    "success": 10
  },
  "mac": "00:61:71:c8:51:27"
}
```

<h3 id="aggregated-connectivity-info-for-a-given-client-on-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated latency info for a given client on this network

<a id="opIdgetNetworkClientLatencyStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/clients/string/latencyStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/clients/{clientId}/latencyStats`

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

<h3 id="aggregated-latency-info-for-a-given-client-on-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|clientId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|fields|query|string|false|Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "latencyStats": {
    "backgroundTraffic": {
      "avg": 606.52,
      "rawDistribution": {
        "0": 1234,
        "1": 2345,
        "2": 3456,
        "4": 4567,
        "8": 5678,
        "16": 6789,
        "32": 7890,
        "64": 8901,
        "128": 9012,
        "256": 83,
        "512": 1234,
        "1024": 2345,
        "2048": 9999
      }
    },
    "bestEffortTraffic": "same shape as backgroundTraffic",
    "videoTraffic": "same shape as backgroundTraffic",
    "voiceTraffic": "same shape as backgroundTraffic"
  },
  "mac": "00:61:71:c8:51:27"
}
```

<h3 id="aggregated-latency-info-for-a-given-client-on-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated connectivity info for this network

<a id="opIdgetNetworkConnectionStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/connectionStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/connectionStats`

Aggregated connectivity info for this network

<h3 id="aggregated-connectivity-info-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "assoc": 1,
  "auth": 5,
  "dhcp": 0,
  "dns": 0,
  "success": 51
}
```

<h3 id="aggregated-connectivity-info-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated connectivity info for this network, grouped by node

<a id="opIdgetNetworkDevicesConnectionStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/connectionStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/connectionStats`

Aggregated connectivity info for this network, grouped by node

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
[
  {
    "connectionStats": {
      "assoc": 0,
      "auth": 1,
      "dhcp": 0,
      "dns": 0,
      "success": 43
    },
    "serial": "Q2JC-2MJM-FHRD"
  },
  {
    "connectionStats": {
      "assoc": 1,
      "auth": 4,
      "dhcp": 0,
      "dns": 0,
      "success": 8
    },
    "serial": "Q2FJ-3SHB-Y2K2"
  }
]
```

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="aggregated-connectivity-info-for-this-network-grouped-by-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated latency info for this network, grouped by node

<a id="opIdgetNetworkDevicesLatencyStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/latencyStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/latencyStats`

Aggregated latency info for this network, grouped by node

<h3 id="aggregated-latency-info-for-this-network-grouped-by-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|fields|query|string|false|Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
[
  {
    "latencyStats": {
      "backgroundTraffic": {
        "avg": 606.52,
        "rawDistribution": {
          "0": 1234,
          "1": 2345,
          "2": 3456,
          "4": 4567,
          "8": 5678,
          "16": 6789,
          "32": 7890,
          "64": 8901,
          "128": 9012,
          "256": 83,
          "512": 1234,
          "1024": 2345,
          "2048": 9999
        }
      },
      "bestEffortTraffic": "same shape as backgroundTraffic",
      "videoTraffic": "same shape as backgroundTraffic",
      "voiceTraffic": "same shape as backgroundTraffic"
    },
    "serial": "Q2JC-2MJM-FHRD"
  },
  {
    "latencyStats": {
      "backgroundTraffic": {
        "avg": 606.52,
        "rawDistribution": {
          "0": 1234,
          "1": 2345,
          "2": 3456,
          "4": 4567,
          "8": 5678,
          "16": 6789,
          "32": 7890,
          "64": 8901,
          "128": 9012,
          "256": 83,
          "512": 1234,
          "1024": 2345,
          "2048": 9999
        }
      },
      "bestEffortTraffic": "same shape as backgroundTraffic",
      "videoTraffic": "same shape as backgroundTraffic",
      "voiceTraffic": "same shape as backgroundTraffic"
    },
    "serial": "Q2FJ-3SHB-Y2K2"
  }
]
```

<h3 id="aggregated-latency-info-for-this-network-grouped-by-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="aggregated-latency-info-for-this-network-grouped-by-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated connectivity info for a given AP on this network

<a id="opIdgetNetworkDeviceConnectionStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/connectionStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/connectionStats`

Aggregated connectivity info for a given AP on this network

<h3 id="aggregated-connectivity-info-for-a-given-ap-on-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "connectionStats": {
    "assoc": 0,
    "auth": 1,
    "dhcp": 0,
    "dns": 0,
    "success": 43
  },
  "serial": "Q2JC-2MJM-FHRD"
}
```

<h3 id="aggregated-connectivity-info-for-a-given-ap-on-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated latency info for a given AP on this network

<a id="opIdgetNetworkDeviceLatencyStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/devices/string/latencyStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/devices/{serial}/latencyStats`

Aggregated latency info for a given AP on this network

<h3 id="aggregated-latency-info-for-a-given-ap-on-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|serial|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|fields|query|string|false|Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "latencyStats": {
    "backgroundTraffic": {
      "avg": 606.52,
      "rawDistribution": {
        "0": 1234,
        "1": 2345,
        "2": 3456,
        "4": 4567,
        "8": 5678,
        "16": 6789,
        "32": 7890,
        "64": 8901,
        "128": 9012,
        "256": 83,
        "512": 1234,
        "1024": 2345,
        "2048": 9999
      }
    },
    "bestEffortTraffic": "same shape as backgroundTraffic",
    "videoTraffic": "same shape as backgroundTraffic",
    "voiceTraffic": "same shape as backgroundTraffic"
  },
  "serial": "Q2JC-2MJM-FHRD"
}
```

<h3 id="aggregated-latency-info-for-a-given-ap-on-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## List of all failed client connection events on this network in a given time range

<a id="opIdgetNetworkFailedConnections"></a>

> Code samples

```bash
curl https://example.com/networks/string/failedConnections \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/failedConnections`

List of all failed client connection events on this network in a given time range

<h3 id="list-of-all-failed-client-connection-events-on-this-network-in-a-given-time-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|serial|query|string|false|Filter by AP|
|clientId|query|string|false|Filter by client MAC|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
[
  {
    "clientMac": "00:61:71:c8:51:27",
    "failureStep": "auth",
    "serial": "Q2JC-2MJM-FHRD",
    "ssidNumber": 0,
    "ts": 1532032592,
    "type": "802.1X auth fail",
    "vlan": -1
  },
  {
    "clientMac": "00:61:71:c8:51:27",
    "failureStep": "auth",
    "nodeId": "Q2FJ-3SHB-Y2K2",
    "ssidNumber": 0,
    "ts": 1532032593,
    "type": "802.1X auth fail",
    "vlan": -1
  },
  {
    "clientMac": "00:61:71:c8:51:27",
    "failureStep": "auth",
    "nodeId": "Q2FJ-3SHB-Y2K2",
    "ssidNumber": 0,
    "ts": 1532032594,
    "type": "802.1X auth fail",
    "vlan": -1
  },
  {
    "clientMac": "00:61:71:c8:51:27",
    "failureStep": "auth",
    "nodeId": "Q2FJ-3SHB-Y2K2",
    "ssidNumber": 0,
    "ts": 1532032595,
    "type": "802.1X auth fail",
    "vlan": -1
  },
  {
    "clientMac": "1c:4d:70:7f:5e:5e",
    "failureStep": "assoc",
    "nodeId": "Q2FJ-3SHB-Y2K2",
    "ssidNumber": 0,
    "ts": 1532032592,
    "type": "802.1X auth fail",
    "vlan": -1
  },
  {
    "clientMac": "1c:4d:70:81:8d:0a",
    "failureStep": "auth",
    "nodeId": "Q2FJ-3SHB-Y2K2",
    "ssidNumber": 0,
    "ts": 1532032595,
    "type": "802.1X auth fail",
    "vlan": -1
  }
]
```

<h3 id="list-of-all-failed-client-connection-events-on-this-network-in-a-given-time-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<h3 id="list-of-all-failed-client-connection-events-on-this-network-in-a-given-time-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Aggregated latency info for this network

<a id="opIdgetNetworkLatencyStats"></a>

> Code samples

```bash
curl https://example.com/networks/string/latencyStats \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/latencyStats`

Aggregated latency info for this network

<h3 id="aggregated-latency-info-for-this-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|t0|query|string|false|The beginning of the timespan for the data. The maximum lookback period is 180 days from today.|
|t1|query|string|false|The end of the timespan for the data. t1 can be a maximum of 7 days after t0.|
|timespan|query|number(float)|false|The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.|
|band|query|string|false|Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.|
|ssid|query|integer|false|Filter results by SSID|
|vlan|query|integer|false|Filter results by VLAN|
|apTag|query|string|false|Filter results by AP Tag|
|fields|query|string|false|Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|band|2.4|
|band|5|

> Example responses

> 200 Response

```json
{
  "backgroundTraffic": {
    "avg": 606.52,
    "rawDistribution": {
      "0": 1234,
      "1": 2345,
      "2": 3456,
      "4": 4567,
      "8": 5678,
      "16": 6789,
      "32": 7890,
      "64": 8901,
      "128": 9012,
      "256": 83,
      "512": 1234,
      "1024": 2345,
      "2048": 9999
    }
  },
  "bestEffortTraffic": "same shape as backgroundTraffic",
  "videoTraffic": "same shape as backgroundTraffic",
  "voiceTraffic": "same shape as backgroundTraffic"
}
```

<h3 id="aggregated-latency-info-for-this-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

<h1 id="meraki-dashboard-api-wireless-settings">Wireless settings</h1>

## Return the wireless settings for a network

<a id="opIdgetNetworkWirelessSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/settings \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}"
```

`GET /networks/{networkId}/wireless/settings`

Return the wireless settings for a network

<h3 id="return-the-wireless-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ipv6BridgeEnabled": false,
  "ledLightsOn": false,
  "locationAnalyticsEnabled": false,
  "meshingEnabled": true,
  "upgradeStrategy": "minimizeUpgradeTime"
}
```

<h3 id="return-the-wireless-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>

## Update the wireless settings for a network

<a id="opIdupdateNetworkWirelessSettings"></a>

> Code samples

```bash
curl https://example.com/networks/string/wireless/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Cisco-Meraki-API-Key: ${API_KEY}" \
  -d '{
    "ipv6BridgeEnabled": false,
    "ledLightsOn": false,
    "locationAnalyticsEnabled": false,
    "meshingEnabled": true,
    "upgradeStrategy": "minimizeUpgradeTime"
  }'
```

`PUT /networks/{networkId}/wireless/settings`

Update the wireless settings for a network

> Body parameter

```json
{
  "ipv6BridgeEnabled": false,
  "ledLightsOn": false,
  "locationAnalyticsEnabled": false,
  "meshingEnabled": true,
  "upgradeStrategy": "minimizeUpgradeTime"
}
```

<h3 id="update-the-wireless-settings-for-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|networkId|path|string|true|none|
|body|body|object|false|none|
|» ipv6BridgeEnabled|body|boolean|false|Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)|
|» ledLightsOn|body|boolean|false|Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)|
|» locationAnalyticsEnabled|body|boolean|false|Toggle for enabling or disabling location analytics for your network|
|» meshingEnabled|body|boolean|false|Toggle for enabling or disabling meshing in a network|
|» upgradeStrategy|body|string|false|The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» upgradeStrategy|minimizeClientDowntime|
|» upgradeStrategy|minimizeUpgradeTime|

> Example responses

> 200 Response

```json
{
  "ipv6BridgeEnabled": false,
  "ledLightsOn": false,
  "locationAnalyticsEnabled": false,
  "meshingEnabled": true,
  "upgradeStrategy": "minimizeUpgradeTime"
}
```

<h3 id="update-the-wireless-settings-for-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
meraki_api_key
</aside>
