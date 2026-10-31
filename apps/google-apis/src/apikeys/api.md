<h1 id="api-keys-api">API Keys API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages the API keys associated with developer projects.

Base URLs:

* <a href="https://apikeys.googleapis.com/">https://apikeys.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/api-keys/docs">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="api-keys-api-keys">keys</h1>

## apikeys.keys.lookupKey

<a id="opIdapikeys.keys.lookupKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/keys:lookupKey \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/keys:lookupKey`

Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

<h3 id="apikeyskeyslookupkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyString|query|string|false|Required. Finds the project that owns the key string value.|
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
  "name": "string",
  "parent": "string"
}
```

<h3 id="apikeyskeyslookupkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V2LookupKeyResponse](#schemav2lookupkeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

<h1 id="api-keys-api-projects">projects</h1>

## apikeys.projects.locations.keys.get

<a id="opIdapikeys.projects.locations.keys.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

<h3 id="apikeysprojectslocationskeysget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the API key to get.|
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
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "keyString": "string",
  "name": "string",
  "restrictions": {
    "androidKeyRestrictions": {
      "allowedApplications": [
        {
          "packageName": "string",
          "sha1Fingerprint": "string"
        }
      ]
    },
    "apiTargets": [
      {
        "methods": [
          "string"
        ],
        "service": "string"
      }
    ],
    "browserKeyRestrictions": {
      "allowedReferrers": [
        "string"
      ]
    },
    "iosKeyRestrictions": {
      "allowedBundleIds": [
        "string"
      ]
    },
    "serverKeyRestrictions": {
      "allowedIps": [
        "string"
      ]
    }
  },
  "uid": "string",
  "updateTime": "string"
}
```

<h3 id="apikeysprojectslocationskeysget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V2Key](#schemav2key)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## apikeys.projects.locations.keys.delete

<a id="opIdapikeys.projects.locations.keys.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.

<h3 id="apikeysprojectslocationskeysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the API key to be deleted.|
|etag|query|string|false|Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency.|
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

<h3 id="apikeysprojectslocationskeysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apikeys.projects.locations.keys.patch

<a id="opIdapikeys.projects.locations.keys.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "restrictions": {
      "androidKeyRestrictions": {
        "allowedApplications": [
          {
            "packageName": "string",
            "sha1Fingerprint": "string"
          }
        ]
      },
      "apiTargets": [
        {
          "methods": [
            "string"
          ],
          "service": "string"
        }
      ],
      "browserKeyRestrictions": {
        "allowedReferrers": [
          "string"
        ]
      },
      "iosKeyRestrictions": {
        "allowedBundleIds": [
          "string"
        ]
      },
      "serverKeyRestrictions": {
        "allowedIps": [
          "string"
        ]
      }
    }
  }'
```

`PATCH /v2/{name}`

Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "restrictions": {
    "androidKeyRestrictions": {
      "allowedApplications": [
        {
          "packageName": "string",
          "sha1Fingerprint": "string"
        }
      ]
    },
    "apiTargets": [
      {
        "methods": [
          "string"
        ],
        "service": "string"
      }
    ],
    "browserKeyRestrictions": {
      "allowedReferrers": [
        "string"
      ]
    },
    "iosKeyRestrictions": {
      "allowedBundleIds": [
        "string"
      ]
    },
    "serverKeyRestrictions": {
      "allowedIps": [
        "string"
      ]
    }
  }
}
```

<h3 id="apikeysprojectslocationskeyspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.|
|updateMask|query|string|false|The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: `display_name`, `restrictions`, and `annotations`. If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.|
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
|body|body|[V2Key](#schemav2key)|false|none|
|» annotations|body|object|false|Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|Human-readable display name of this key that you can modify. The maximum length is 63 characters.|
|» restrictions|body|[V2Restrictions](#schemav2restrictions)|false|Key restrictions.|

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

<h3 id="apikeysprojectslocationskeyspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apikeys.projects.locations.keys.getKeyString

<a id="opIdapikeys.projects.locations.keys.getKeyString"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/keyString \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/keyString`

Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

<h3 id="apikeysprojectslocationskeysgetkeystring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the API key to be retrieved.|
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
  "keyString": "string"
}
```

<h3 id="apikeysprojectslocationskeysgetkeystring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V2GetKeyStringResponse](#schemav2getkeystringresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## apikeys.projects.locations.keys.undelete

<a id="opIdapikeys.projects.locations.keys.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:undelete`

Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

> Body parameter

```json
{}
```

<h3 id="apikeysprojectslocationskeysundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the API key to be undeleted.|
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
|body|body|[V2UndeleteKeyRequest](#schemav2undeletekeyrequest)|false|none|

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

<h3 id="apikeysprojectslocationskeysundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apikeys.projects.locations.keys.list

<a id="opIdapikeys.projects.locations.keys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/keys`

Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

<h3 id="apikeysprojectslocationskeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Lists all API keys associated with this project.|
|pageSize|query|integer|false|Optional. Specifies the maximum number of results to be returned at a time.|
|pageToken|query|string|false|Optional. Requests a specific page of results.|
|showDeleted|query|boolean|false|Optional. Indicate that keys deleted in the past 30 days should also be returned.|
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
  "keys": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "keyString": "string",
      "name": "string",
      "restrictions": {
        "androidKeyRestrictions": {
          "allowedApplications": [
            {
              "packageName": "string",
              "sha1Fingerprint": "string"
            }
          ]
        },
        "apiTargets": [
          {
            "methods": [
              "string"
            ],
            "service": "string"
          }
        ],
        "browserKeyRestrictions": {
          "allowedReferrers": [
            "string"
          ]
        },
        "iosKeyRestrictions": {
          "allowedBundleIds": [
            "string"
          ]
        },
        "serverKeyRestrictions": {
          "allowedIps": [
            "string"
          ]
        }
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apikeysprojectslocationskeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[V2ListKeysResponse](#schemav2listkeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## apikeys.projects.locations.keys.create

<a id="opIdapikeys.projects.locations.keys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/keys \
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
    "restrictions": {
      "androidKeyRestrictions": {
        "allowedApplications": [
          {
            "packageName": "string",
            "sha1Fingerprint": "string"
          }
        ]
      },
      "apiTargets": [
        {
          "methods": [
            "string"
          ],
          "service": "string"
        }
      ],
      "browserKeyRestrictions": {
        "allowedReferrers": [
          "string"
        ]
      },
      "iosKeyRestrictions": {
        "allowedBundleIds": [
          "string"
        ]
      },
      "serverKeyRestrictions": {
        "allowedIps": [
          "string"
        ]
      }
    }
  }'
```

`POST /v2/{parent}/keys`

Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "restrictions": {
    "androidKeyRestrictions": {
      "allowedApplications": [
        {
          "packageName": "string",
          "sha1Fingerprint": "string"
        }
      ]
    },
    "apiTargets": [
      {
        "methods": [
          "string"
        ],
        "service": "string"
      }
    ],
    "browserKeyRestrictions": {
      "allowedReferrers": [
        "string"
      ]
    },
    "iosKeyRestrictions": {
      "allowedBundleIds": [
        "string"
      ]
    },
    "serverKeyRestrictions": {
      "allowedIps": [
        "string"
      ]
    }
  }
}
```

<h3 id="apikeysprojectslocationskeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project in which the API key is created.|
|keyId|query|string|false|User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. The id must NOT be a UUID-like string.|
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
|body|body|[V2Key](#schemav2key)|false|none|
|» annotations|body|object|false|Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|Human-readable display name of this key that you can modify. The maximum length is 63 characters.|
|» restrictions|body|[V2Restrictions](#schemav2restrictions)|false|Key restrictions.|

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

<h3 id="apikeysprojectslocationskeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

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

<h2 id="tocS_V2AndroidApplication">V2AndroidApplication</h2>
<!-- backwards compatibility -->
<a id="schemav2androidapplication"></a>
<a id="schema_V2AndroidApplication"></a>
<a id="tocSv2androidapplication"></a>
<a id="tocsv2androidapplication"></a>

```json
{
  "packageName": "string",
  "sha1Fingerprint": "string"
}
```

Identifier of an Android application for key use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|string|false|none|The package name of the application.|
|sha1Fingerprint|string|false|none|The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.|

<h2 id="tocS_V2AndroidKeyRestrictions">V2AndroidKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemav2androidkeyrestrictions"></a>
<a id="schema_V2AndroidKeyRestrictions"></a>
<a id="tocSv2androidkeyrestrictions"></a>
<a id="tocsv2androidkeyrestrictions"></a>

```json
{
  "allowedApplications": [
    {
      "packageName": "string",
      "sha1Fingerprint": "string"
    }
  ]
}
```

The Android apps that are allowed to use the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedApplications|[[V2AndroidApplication](#schemav2androidapplication)]|false|none|A list of Android applications that are allowed to make API calls with this key.|

<h2 id="tocS_V2ApiTarget">V2ApiTarget</h2>
<!-- backwards compatibility -->
<a id="schemav2apitarget"></a>
<a id="schema_V2ApiTarget"></a>
<a id="tocSv2apitarget"></a>
<a id="tocsv2apitarget"></a>

```json
{
  "methods": [
    "string"
  ],
  "service": "string"
}
```

A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|[string]|false|none|Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`|
|service|string|false|none|The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use [`gcloud services list`](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project.|

<h2 id="tocS_V2BrowserKeyRestrictions">V2BrowserKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemav2browserkeyrestrictions"></a>
<a id="schema_V2BrowserKeyRestrictions"></a>
<a id="tocSv2browserkeyrestrictions"></a>
<a id="tocsv2browserkeyrestrictions"></a>

```json
{
  "allowedReferrers": [
    "string"
  ]
}
```

The HTTP referrers (websites) that are allowed to use the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedReferrers|[string]|false|none|A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.|

<h2 id="tocS_V2GetKeyStringResponse">V2GetKeyStringResponse</h2>
<!-- backwards compatibility -->
<a id="schemav2getkeystringresponse"></a>
<a id="schema_V2GetKeyStringResponse"></a>
<a id="tocSv2getkeystringresponse"></a>
<a id="tocsv2getkeystringresponse"></a>

```json
{
  "keyString": "string"
}
```

Response message for `GetKeyString` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyString|string|false|none|An encrypted and signed value of the key.|

<h2 id="tocS_V2IosKeyRestrictions">V2IosKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemav2ioskeyrestrictions"></a>
<a id="schema_V2IosKeyRestrictions"></a>
<a id="tocSv2ioskeyrestrictions"></a>
<a id="tocsv2ioskeyrestrictions"></a>

```json
{
  "allowedBundleIds": [
    "string"
  ]
}
```

The iOS apps that are allowed to use the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedBundleIds|[string]|false|none|A list of bundle IDs that are allowed when making API calls with this key.|

<h2 id="tocS_V2Key">V2Key</h2>
<!-- backwards compatibility -->
<a id="schemav2key"></a>
<a id="schema_V2Key"></a>
<a id="tocSv2key"></a>
<a id="tocsv2key"></a>

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
  "keyString": "string",
  "name": "string",
  "restrictions": {
    "androidKeyRestrictions": {
      "allowedApplications": [
        {
          "packageName": "string",
          "sha1Fingerprint": "string"
        }
      ]
    },
    "apiTargets": [
      {
        "methods": [
          "string"
        ],
        "service": "string"
      }
    ],
    "browserKeyRestrictions": {
      "allowedReferrers": [
        "string"
      ]
    },
    "iosKeyRestrictions": {
      "allowedBundleIds": [
        "string"
      ]
    },
    "serverKeyRestrictions": {
      "allowedIps": [
        "string"
      ]
    }
  },
  "uid": "string",
  "updateTime": "string"
}
```

The representation of a key managed by the API Keys API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.|
|createTime|string(google-datetime)|false|read-only|Output only. A timestamp identifying the time this key was originally created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty.|
|displayName|string|false|none|Human-readable display name of this key that you can modify. The maximum length is 63 characters.|
|etag|string|false|read-only|Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154.|
|keyString|string|false|read-only|Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.|
|name|string|false|read-only|Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.|
|restrictions|[V2Restrictions](#schemav2restrictions)|false|none|Key restrictions.|
|uid|string|false|read-only|Output only. Unique id in UUID4 format.|
|updateTime|string(google-datetime)|false|read-only|Output only. A timestamp identifying the time this key was last updated.|

<h2 id="tocS_V2ListKeysResponse">V2ListKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemav2listkeysresponse"></a>
<a id="schema_V2ListKeysResponse"></a>
<a id="tocSv2listkeysresponse"></a>
<a id="tocsv2listkeysresponse"></a>

```json
{
  "keys": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "keyString": "string",
      "name": "string",
      "restrictions": {
        "androidKeyRestrictions": {
          "allowedApplications": [
            {
              "packageName": "string",
              "sha1Fingerprint": "string"
            }
          ]
        },
        "apiTargets": [
          {
            "methods": [
              "string"
            ],
            "service": "string"
          }
        ],
        "browserKeyRestrictions": {
          "allowedReferrers": [
            "string"
          ]
        },
        "iosKeyRestrictions": {
          "allowedBundleIds": [
            "string"
          ]
        },
        "serverKeyRestrictions": {
          "allowedIps": [
            "string"
          ]
        }
      },
      "uid": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for `ListKeys` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[V2Key](#schemav2key)]|false|none|A list of API keys.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

<h2 id="tocS_V2LookupKeyResponse">V2LookupKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemav2lookupkeyresponse"></a>
<a id="schema_V2LookupKeyResponse"></a>
<a id="tocSv2lookupkeyresponse"></a>
<a id="tocsv2lookupkeyresponse"></a>

```json
{
  "name": "string",
  "parent": "string"
}
```

Response message for `LookupKey` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the API key. If the API key has been purged, resource name is empty.|
|parent|string|false|none|The project that owns the key with the value specified in the request.|

<h2 id="tocS_V2Restrictions">V2Restrictions</h2>
<!-- backwards compatibility -->
<a id="schemav2restrictions"></a>
<a id="schema_V2Restrictions"></a>
<a id="tocSv2restrictions"></a>
<a id="tocsv2restrictions"></a>

```json
{
  "androidKeyRestrictions": {
    "allowedApplications": [
      {
        "packageName": "string",
        "sha1Fingerprint": "string"
      }
    ]
  },
  "apiTargets": [
    {
      "methods": [
        "string"
      ],
      "service": "string"
    }
  ],
  "browserKeyRestrictions": {
    "allowedReferrers": [
      "string"
    ]
  },
  "iosKeyRestrictions": {
    "allowedBundleIds": [
      "string"
    ]
  },
  "serverKeyRestrictions": {
    "allowedIps": [
      "string"
    ]
  }
}
```

Describes the restrictions on the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidKeyRestrictions|[V2AndroidKeyRestrictions](#schemav2androidkeyrestrictions)|false|none|The Android apps that are allowed to use the key.|
|apiTargets|[[V2ApiTarget](#schemav2apitarget)]|false|none|A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.|
|browserKeyRestrictions|[V2BrowserKeyRestrictions](#schemav2browserkeyrestrictions)|false|none|The HTTP referrers (websites) that are allowed to use the key.|
|iosKeyRestrictions|[V2IosKeyRestrictions](#schemav2ioskeyrestrictions)|false|none|The iOS apps that are allowed to use the key.|
|serverKeyRestrictions|[V2ServerKeyRestrictions](#schemav2serverkeyrestrictions)|false|none|The IP addresses of callers that are allowed to use the key.|

<h2 id="tocS_V2ServerKeyRestrictions">V2ServerKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemav2serverkeyrestrictions"></a>
<a id="schema_V2ServerKeyRestrictions"></a>
<a id="tocSv2serverkeyrestrictions"></a>
<a id="tocsv2serverkeyrestrictions"></a>

```json
{
  "allowedIps": [
    "string"
  ]
}
```

The IP addresses of callers that are allowed to use the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedIps|[string]|false|none|A list of the caller IP addresses that are allowed to make API calls with this key.|

<h2 id="tocS_V2UndeleteKeyRequest">V2UndeleteKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemav2undeletekeyrequest"></a>
<a id="schema_V2UndeleteKeyRequest"></a>
<a id="tocSv2undeletekeyrequest"></a>
<a id="tocsv2undeletekeyrequest"></a>

```json
{}
```

Request message for `UndeleteKey` method.
