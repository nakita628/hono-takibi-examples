<h1 id="access-context-manager-api">Access Context Manager API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for setting attribute based access control to requests to Google Cloud services.

Base URLs:

* <a href="https://accesscontextmanager.googleapis.com/">https://accesscontextmanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/access-context-manager/docs/reference/rest/">External documentation</a>

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

<h1 id="access-context-manager-api-accesspolicies">accessPolicies</h1>

## accesscontextmanager.accessPolicies.list

<a id="opIdaccesscontextmanager.accessPolicies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accessPolicies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/accessPolicies`

List all AccessPolicies under a container.

<h3 id="accesscontextmanageraccesspolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Number of AccessPolicy instances to include in the list. Default 100.|
|pageToken|query|string|false|Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results.|
|parent|query|string|false|Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}`|
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
  "accessPolicies": [
    {
      "name": "string",
      "parent": "string",
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="accesscontextmanageraccesspolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccessPoliciesResponse](#schemalistaccesspoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.create

<a id="opIdaccesscontextmanager.accessPolicies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/accessPolicies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "parent": "string",
    "title": "string"
  }'
```

`POST /v1beta/accessPolicies`

Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.

> Body parameter

```json
{
  "name": "string",
  "parent": "string",
  "title": "string"
}
```

<h3 id="accesscontextmanageraccesspoliciescreate-parameters">Parameters</h3>

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
|body|body|[AccessPolicy](#schemaaccesspolicy)|false|none|
|» name|body|string|false|Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}`|
|» parent|body|string|false|Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`|
|» title|body|string|false|Required. Human readable title. Does not affect behavior.|

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

<h3 id="accesscontextmanageraccesspoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.servicePerimeters.delete

<a id="opIdaccesscontextmanager.accessPolicies.servicePerimeters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta/{name}`

Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.

<h3 id="accesscontextmanageraccesspoliciesserviceperimetersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}`|
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

<h3 id="accesscontextmanageraccesspoliciesserviceperimetersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.servicePerimeters.patch

<a id="opIdaccesscontextmanager.accessPolicies.servicePerimeters.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "perimeterType": "PERIMETER_TYPE_REGULAR",
    "status": {
      "accessLevels": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "restrictedServices": [
        "string"
      ],
      "unrestrictedServices": [
        "string"
      ],
      "vpcAccessibleServices": {
        "allowedServices": [
          "string"
        ],
        "enableRestriction": true
      }
    },
    "title": "string"
  }'
```

`PATCH /v1beta/{name}`

Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "perimeterType": "PERIMETER_TYPE_REGULAR",
  "status": {
    "accessLevels": [
      "string"
    ],
    "resources": [
      "string"
    ],
    "restrictedServices": [
      "string"
    ],
    "unrestrictedServices": [
      "string"
    ],
    "vpcAccessibleServices": {
      "allowedServices": [
        "string"
      ],
      "enableRestriction": true
    }
  },
  "title": "string"
}
```

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.|
|updateMask|query|string|false|Required. Mask to control which fields get updated. Must be non-empty.|
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
|body|body|[ServicePerimeter](#schemaserviceperimeter)|false|none|
|» description|body|string|false|Description of the `ServicePerimeter` and its use. Does not affect behavior.|
|» name|body|string|false|Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.|
|» perimeterType|body|string|false|Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty.|
|» status|body|[ServicePerimeterConfig](#schemaserviceperimeterconfig)|false|Current ServicePerimeter configuration. Specifies sets of resources, restricted/unrestricted services and access levels that determine perimeter content and boundaries.|
|» title|body|string|false|Human readable title. Must be unique within the Policy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» perimeterType|PERIMETER_TYPE_REGULAR|
|» perimeterType|PERIMETER_TYPE_BRIDGE|

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

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.accessLevels.list

<a id="opIdaccesscontextmanager.accessPolicies.accessLevels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/accessLevels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/accessLevels`

List all Access Levels for an access policy.

<h3 id="accesscontextmanageraccesspoliciesaccesslevelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}`|
|accessLevelFormat|query|string|false|Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined.|
|pageSize|query|integer|false|Number of Access Levels to include in the list. Default 100.|
|pageToken|query|string|false|Next page token for the next batch of Access Level instances. Defaults to the first page of results.|
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
|accessLevelFormat|LEVEL_FORMAT_UNSPECIFIED|
|accessLevelFormat|AS_DEFINED|
|accessLevelFormat|CEL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accessLevels": [
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
  ],
  "nextPageToken": "string"
}
```

<h3 id="accesscontextmanageraccesspoliciesaccesslevelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccessLevelsResponse](#schemalistaccesslevelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.accessLevels.create

<a id="opIdaccesscontextmanager.accessPolicies.accessLevels.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/accessLevels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
  }'
```

`POST /v1beta/{parent}/accessLevels`

Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.

> Body parameter

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

<h3 id="accesscontextmanageraccesspoliciesaccesslevelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}`|
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
|body|body|[AccessLevel](#schemaaccesslevel)|false|none|
|» basic|body|[BasicLevel](#schemabasiclevel)|false|A `BasicLevel` composed of `Conditions`.|
|» custom|body|[CustomLevel](#schemacustomlevel)|false|A `CustomLevel` written in the Common Expression Language.|
|» description|body|string|false|Description of the `AccessLevel` and its use. Does not affect behavior.|
|» name|body|string|false|Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.|
|» title|body|string|false|Human readable title. Must be unique within the Policy.|

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

<h3 id="accesscontextmanageraccesspoliciesaccesslevelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.servicePerimeters.list

<a id="opIdaccesscontextmanager.accessPolicies.servicePerimeters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/servicePerimeters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{parent}/servicePerimeters`

List all Service Perimeters for an access policy.

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}`|
|pageSize|query|integer|false|Number of Service Perimeters to include in the list. Default 100.|
|pageToken|query|string|false|Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results.|
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
  "servicePerimeters": [
    {
      "description": "string",
      "name": "string",
      "perimeterType": "PERIMETER_TYPE_REGULAR",
      "status": {
        "accessLevels": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "restrictedServices": [
          "string"
        ],
        "unrestrictedServices": [
          "string"
        ],
        "vpcAccessibleServices": {
          "allowedServices": [
            "string"
          ],
          "enableRestriction": true
        }
      },
      "title": "string"
    }
  ]
}
```

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListServicePerimetersResponse](#schemalistserviceperimetersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## accesscontextmanager.accessPolicies.servicePerimeters.create

<a id="opIdaccesscontextmanager.accessPolicies.servicePerimeters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string/servicePerimeters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "perimeterType": "PERIMETER_TYPE_REGULAR",
    "status": {
      "accessLevels": [
        "string"
      ],
      "resources": [
        "string"
      ],
      "restrictedServices": [
        "string"
      ],
      "unrestrictedServices": [
        "string"
      ],
      "vpcAccessibleServices": {
        "allowedServices": [
          "string"
        ],
        "enableRestriction": true
      }
    },
    "title": "string"
  }'
```

`POST /v1beta/{parent}/servicePerimeters`

Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "perimeterType": "PERIMETER_TYPE_REGULAR",
  "status": {
    "accessLevels": [
      "string"
    ],
    "resources": [
      "string"
    ],
    "restrictedServices": [
      "string"
    ],
    "unrestrictedServices": [
      "string"
    ],
    "vpcAccessibleServices": {
      "allowedServices": [
        "string"
      ],
      "enableRestriction": true
    }
  },
  "title": "string"
}
```

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}`|
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
|body|body|[ServicePerimeter](#schemaserviceperimeter)|false|none|
|» description|body|string|false|Description of the `ServicePerimeter` and its use. Does not affect behavior.|
|» name|body|string|false|Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.|
|» perimeterType|body|string|false|Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty.|
|» status|body|[ServicePerimeterConfig](#schemaserviceperimeterconfig)|false|Current ServicePerimeter configuration. Specifies sets of resources, restricted/unrestricted services and access levels that determine perimeter content and boundaries.|
|» title|body|string|false|Human readable title. Must be unique within the Policy.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» perimeterType|PERIMETER_TYPE_REGULAR|
|» perimeterType|PERIMETER_TYPE_BRIDGE|

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

<h3 id="accesscontextmanageraccesspoliciesserviceperimeterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="access-context-manager-api-operations">operations</h1>

## accesscontextmanager.operations.get

<a id="opIdaccesscontextmanager.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="accesscontextmanageroperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|accessLevelFormat|query|string|false|Whether to return `BasicLevels` in the Cloud Common Expression Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where Access Levels are returned as `BasicLevels` or `CustomLevels` based on how they were created. If set to CEL, all Access Levels are returned as `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent `CustomLevels`.|
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
|accessLevelFormat|LEVEL_FORMAT_UNSPECIFIED|
|accessLevelFormat|AS_DEFINED|
|accessLevelFormat|CEL|
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

<h3 id="accesscontextmanageroperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AccessContextManagerOperationMetadata">AccessContextManagerOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontextmanageroperationmetadata"></a>
<a id="schema_AccessContextManagerOperationMetadata"></a>
<a id="tocSaccesscontextmanageroperationmetadata"></a>
<a id="tocsaccesscontextmanageroperationmetadata"></a>

```json
{}
```

Metadata of Access Context Manager's Long Running Operations.

<h2 id="tocS_AccessLevel">AccessLevel</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslevel"></a>
<a id="schema_AccessLevel"></a>
<a id="tocSaccesslevel"></a>
<a id="tocsaccesslevel"></a>

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
|basic|[BasicLevel](#schemabasiclevel)|false|none|A `BasicLevel` composed of `Conditions`.|
|custom|[CustomLevel](#schemacustomlevel)|false|none|A `CustomLevel` written in the Common Expression Language.|
|description|string|false|none|Description of the `AccessLevel` and its use. Does not affect behavior.|
|name|string|false|none|Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.|
|title|string|false|none|Human readable title. Must be unique within the Policy.|

<h2 id="tocS_AccessPolicy">AccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicy"></a>
<a id="schema_AccessPolicy"></a>
<a id="tocSaccesspolicy"></a>
<a id="tocsaccesspolicy"></a>

```json
{
  "name": "string",
  "parent": "string",
  "title": "string"
}
```

`AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}`|
|parent|string|false|none|Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`|
|title|string|false|none|Required. Human readable title. Does not affect behavior.|

<h2 id="tocS_BasicLevel">BasicLevel</h2>
<!-- backwards compatibility -->
<a id="schemabasiclevel"></a>
<a id="schema_BasicLevel"></a>
<a id="tocSbasiclevel"></a>
<a id="tocsbasiclevel"></a>

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
|conditions|[[Condition](#schemacondition)]|false|none|Required. A list of requirements for the `AccessLevel` to be granted.|

#### Enumerated Values

|Property|Value|
|---|---|
|combiningFunction|AND|
|combiningFunction|OR|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

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
|devicePolicy|[DevicePolicy](#schemadevicepolicy)|false|none|Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed.|
|ipSubnetworks|[string]|false|none|CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed.|
|members|[string]|false|none|The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user.|
|negate|boolean|false|none|Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false.|
|regions|[string]|false|none|The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes.|
|requiredAccessLevels|[string]|false|none|A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"`|

<h2 id="tocS_CustomLevel">CustomLevel</h2>
<!-- backwards compatibility -->
<a id="schemacustomlevel"></a>
<a id="schema_CustomLevel"></a>
<a id="tocScustomlevel"></a>
<a id="tocscustomlevel"></a>

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

<h2 id="tocS_DevicePolicy">DevicePolicy</h2>
<!-- backwards compatibility -->
<a id="schemadevicepolicy"></a>
<a id="schema_DevicePolicy"></a>
<a id="tocSdevicepolicy"></a>
<a id="tocsdevicepolicy"></a>

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
|osConstraints|[[OsConstraint](#schemaosconstraint)]|false|none|Allowed OS versions, an empty list allows all types and all versions.|
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

<h2 id="tocS_ListAccessLevelsResponse">ListAccessLevelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesslevelsresponse"></a>
<a id="schema_ListAccessLevelsResponse"></a>
<a id="tocSlistaccesslevelsresponse"></a>
<a id="tocslistaccesslevelsresponse"></a>

```json
{
  "accessLevels": [
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
  ],
  "nextPageToken": "string"
}
```

A response to `ListAccessLevelsRequest`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevels|[[AccessLevel](#schemaaccesslevel)]|false|none|List of the Access Level instances.|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If the value is empty, no further results remain.|

<h2 id="tocS_ListAccessPoliciesResponse">ListAccessPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspoliciesresponse"></a>
<a id="schema_ListAccessPoliciesResponse"></a>
<a id="tocSlistaccesspoliciesresponse"></a>
<a id="tocslistaccesspoliciesresponse"></a>

```json
{
  "accessPolicies": [
    {
      "name": "string",
      "parent": "string",
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A response to `ListAccessPoliciesRequest`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPolicies|[[AccessPolicy](#schemaaccesspolicy)]|false|none|List of the AccessPolicy instances.|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If the value is empty, no further results remain.|

<h2 id="tocS_ListServicePerimetersResponse">ListServicePerimetersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceperimetersresponse"></a>
<a id="schema_ListServicePerimetersResponse"></a>
<a id="tocSlistserviceperimetersresponse"></a>
<a id="tocslistserviceperimetersresponse"></a>

```json
{
  "nextPageToken": "string",
  "servicePerimeters": [
    {
      "description": "string",
      "name": "string",
      "perimeterType": "PERIMETER_TYPE_REGULAR",
      "status": {
        "accessLevels": [
          "string"
        ],
        "resources": [
          "string"
        ],
        "restrictedServices": [
          "string"
        ],
        "unrestrictedServices": [
          "string"
        ],
        "vpcAccessibleServices": {
          "allowedServices": [
            "string"
          ],
          "enableRestriction": true
        }
      },
      "title": "string"
    }
  ]
}
```

A response to `ListServicePerimetersRequest`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The pagination token to retrieve the next page of results. If the value is empty, no further results remain.|
|servicePerimeters|[[ServicePerimeter](#schemaserviceperimeter)]|false|none|List of the Service Perimeter instances.|

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

<h2 id="tocS_OsConstraint">OsConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaosconstraint"></a>
<a id="schema_OsConstraint"></a>
<a id="tocSosconstraint"></a>
<a id="tocsosconstraint"></a>

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

<h2 id="tocS_ServicePerimeter">ServicePerimeter</h2>
<!-- backwards compatibility -->
<a id="schemaserviceperimeter"></a>
<a id="schema_ServicePerimeter"></a>
<a id="tocSserviceperimeter"></a>
<a id="tocsserviceperimeter"></a>

```json
{
  "description": "string",
  "name": "string",
  "perimeterType": "PERIMETER_TYPE_REGULAR",
  "status": {
    "accessLevels": [
      "string"
    ],
    "resources": [
      "string"
    ],
    "restrictedServices": [
      "string"
    ],
    "unrestrictedServices": [
      "string"
    ],
    "vpcAccessibleServices": {
      "allowedServices": [
        "string"
      ],
      "enableRestriction": true
    }
  },
  "title": "string"
}
```

`ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the `ServicePerimeter` and its use. Does not affect behavior.|
|name|string|false|none|Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.|
|perimeterType|string|false|none|Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty.|
|status|[ServicePerimeterConfig](#schemaserviceperimeterconfig)|false|none|Current ServicePerimeter configuration. Specifies sets of resources, restricted/unrestricted services and access levels that determine perimeter content and boundaries.|
|title|string|false|none|Human readable title. Must be unique within the Policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|perimeterType|PERIMETER_TYPE_REGULAR|
|perimeterType|PERIMETER_TYPE_BRIDGE|

<h2 id="tocS_ServicePerimeterConfig">ServicePerimeterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserviceperimeterconfig"></a>
<a id="schema_ServicePerimeterConfig"></a>
<a id="tocSserviceperimeterconfig"></a>
<a id="tocsserviceperimeterconfig"></a>

```json
{
  "accessLevels": [
    "string"
  ],
  "resources": [
    "string"
  ],
  "restrictedServices": [
    "string"
  ],
  "unrestrictedServices": [
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
|resources|[string]|false|none|A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}`|
|restrictedServices|[string]|false|none|Google Cloud services that are subject to the Service Perimeter restrictions. Must contain a list of services. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions.|
|unrestrictedServices|[string]|false|none|Google Cloud services that are not subject to the Service Perimeter restrictions. Deprecated. Must be set to a single wildcard "*". The wildcard means that unless explicitly specified by "restricted_services" list, any service is treated as unrestricted.|
|vpcAccessibleServices|[VpcAccessibleServices](#schemavpcaccessibleservices)|false|none|Beta. Configuration for APIs allowed within Perimeter.|

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

<h2 id="tocS_VpcAccessibleServices">VpcAccessibleServices</h2>
<!-- backwards compatibility -->
<a id="schemavpcaccessibleservices"></a>
<a id="schema_VpcAccessibleServices"></a>
<a id="tocSvpcaccessibleservices"></a>
<a id="tocsvpcaccessibleservices"></a>

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
