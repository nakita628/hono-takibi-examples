<h1 id="google-vault-api">Google Vault API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Retention and eDiscovery for Google Workspace. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. For example, to download an export, an account needs the **Manage Exports** privilege and the matter shared with them.

Base URLs:

* <a href="https://vault.googleapis.com/">https://vault.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/vault">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/ediscovery|Manage your eDiscovery data|
|https://www.googleapis.com/auth/ediscovery.readonly|View your eDiscovery data|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/ediscovery|Manage your eDiscovery data|
|https://www.googleapis.com/auth/ediscovery.readonly|View your eDiscovery data|

<h1 id="google-vault-api-matters">matters</h1>

## vault.matters.list

<a id="opIdvault.matters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters`

Lists matters the requestor has access to.

<h3 id="vaultmatterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The number of matters to return in the response. Default and maximum are 100.|
|pageToken|query|string|false|The pagination token as returned in the response.|
|state|query|string|false|If set, lists only matters with the specified state. The default lists matters of all states.|
|view|query|string|false|Specifies how much information about the matter to return in response.|
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
|state|STATE_UNSPECIFIED|
|state|OPEN|
|state|CLOSED|
|state|DELETED|
|view|VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "matters": [
    {
      "description": "string",
      "matterId": "string",
      "matterPermissions": [
        {
          "accountId": "string",
          "role": "ROLE_UNSPECIFIED"
        }
      ],
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="vaultmatterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMattersResponse](#schemalistmattersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.create

<a id="opIdvault.matters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1/matters`

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

> Body parameter

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmatterscreate-parameters">Parameters</h3>

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
|body|body|[Matter](#schemamatter)|false|none|
|» description|body|string|false|An optional description for the matter.|
|» matterId|body|string|false|The matter ID, which is generated by the server. Leave blank when creating a matter.|
|» matterPermissions|body|[[MatterPermission](#schemamatterpermission)]|false|Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.|
|» name|body|string|false|The name of the matter.|
|» state|body|string|false|The state of the matter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|OPEN|
|» state|CLOSED|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmatterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Matter](#schemamatter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.get

<a id="opIdvault.matters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}`

Gets the specified matter.

<h3 id="vaultmattersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|view|query|string|false|Specifies how much information about the matter to return in the response.|
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
|view|VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmattersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Matter](#schemamatter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.update

<a id="opIdvault.matters.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`PUT /v1/matters/{matterId}`

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

> Body parameter

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmattersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[Matter](#schemamatter)|false|none|
|» description|body|string|false|An optional description for the matter.|
|» matterId|body|string|false|The matter ID, which is generated by the server. Leave blank when creating a matter.|
|» matterPermissions|body|[[MatterPermission](#schemamatterpermission)]|false|Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.|
|» name|body|string|false|The name of the matter.|
|» state|body|string|false|The state of the matter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|OPEN|
|» state|CLOSED|
|» state|DELETED|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmattersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Matter](#schemamatter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.delete

<a id="opIdvault.matters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/matters/{matterId}`

Deletes the specified matter. Returns the matter with updated state.

<h3 id="vaultmattersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID|
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
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmattersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Matter](#schemamatter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.exports.list

<a id="opIdvault.matters.exports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/exports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/exports`

Lists details about the exports in the specified matter.

<h3 id="vaultmattersexportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|pageSize|query|integer|false|The number of exports to return in the response.|
|pageToken|query|string|false|The pagination token as returned in the response.|
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
  "exports": [
    {
      "cloudStorageSink": {
        "files": [
          {
            "bucketName": "string",
            "md5Hash": "string",
            "objectName": "string",
            "size": "string"
          }
        ]
      },
      "createTime": "string",
      "exportOptions": {
        "driveOptions": {
          "includeAccessInfo": true
        },
        "groupsOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        },
        "hangoutsChatOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        },
        "mailOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
          "showConfidentialModeContent": true,
          "useNewExport": true
        },
        "region": "EXPORT_REGION_UNSPECIFIED",
        "voiceOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        }
      },
      "id": "string",
      "matterId": "string",
      "name": "string",
      "query": {
        "accountInfo": {
          "emails": [
            "string"
          ]
        },
        "corpus": "CORPUS_TYPE_UNSPECIFIED",
        "dataScope": "DATA_SCOPE_UNSPECIFIED",
        "driveOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "includeSharedDrives": true,
          "includeTeamDrives": true,
          "versionDate": "string"
        },
        "endTime": "string",
        "hangoutsChatInfo": {
          "roomId": [
            "string"
          ]
        },
        "hangoutsChatOptions": {
          "includeRooms": true
        },
        "mailOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "excludeDrafts": true
        },
        "method": "SEARCH_METHOD_UNSPECIFIED",
        "orgUnitInfo": {
          "orgUnitId": "string"
        },
        "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
        "sharedDriveInfo": {
          "sharedDriveIds": [
            "string"
          ]
        },
        "sitesUrlInfo": {
          "urls": [
            "string"
          ]
        },
        "startTime": "string",
        "teamDriveInfo": {
          "teamDriveIds": [
            "string"
          ]
        },
        "terms": "string",
        "timeZone": "string",
        "voiceOptions": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "requester": {
        "displayName": "string",
        "email": "string"
      },
      "stats": {
        "exportedArtifactCount": "string",
        "sizeInBytes": "string",
        "totalArtifactCount": "string"
      },
      "status": "EXPORT_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="vaultmattersexportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExportsResponse](#schemalistexportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.exports.create

<a id="opIdvault.matters.exports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudStorageSink": {
      "files": [
        {
          "bucketName": "string",
          "md5Hash": "string",
          "objectName": "string",
          "size": "string"
        }
      ]
    },
    "createTime": "string",
    "exportOptions": {
      "driveOptions": {
        "includeAccessInfo": true
      },
      "groupsOptions": {
        "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
      },
      "hangoutsChatOptions": {
        "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
      },
      "mailOptions": {
        "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
        "showConfidentialModeContent": true,
        "useNewExport": true
      },
      "region": "EXPORT_REGION_UNSPECIFIED",
      "voiceOptions": {
        "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
      }
    },
    "id": "string",
    "matterId": "string",
    "name": "string",
    "query": {
      "accountInfo": {
        "emails": [
          "string"
        ]
      },
      "corpus": "CORPUS_TYPE_UNSPECIFIED",
      "dataScope": "DATA_SCOPE_UNSPECIFIED",
      "driveOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "includeSharedDrives": true,
        "includeTeamDrives": true,
        "versionDate": "string"
      },
      "endTime": "string",
      "hangoutsChatInfo": {
        "roomId": [
          "string"
        ]
      },
      "hangoutsChatOptions": {
        "includeRooms": true
      },
      "mailOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "excludeDrafts": true
      },
      "method": "SEARCH_METHOD_UNSPECIFIED",
      "orgUnitInfo": {
        "orgUnitId": "string"
      },
      "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
      "sharedDriveInfo": {
        "sharedDriveIds": [
          "string"
        ]
      },
      "sitesUrlInfo": {
        "urls": [
          "string"
        ]
      },
      "startTime": "string",
      "teamDriveInfo": {
        "teamDriveIds": [
          "string"
        ]
      },
      "terms": "string",
      "timeZone": "string",
      "voiceOptions": {
        "coveredData": [
          "COVERED_DATA_UNSPECIFIED"
        ]
      }
    },
    "requester": {
      "displayName": "string",
      "email": "string"
    },
    "stats": {
      "exportedArtifactCount": "string",
      "sizeInBytes": "string",
      "totalArtifactCount": "string"
    },
    "status": "EXPORT_STATUS_UNSPECIFIED"
  }'
```

`POST /v1/matters/{matterId}/exports`

Creates an export.

> Body parameter

```json
{
  "cloudStorageSink": {
    "files": [
      {
        "bucketName": "string",
        "md5Hash": "string",
        "objectName": "string",
        "size": "string"
      }
    ]
  },
  "createTime": "string",
  "exportOptions": {
    "driveOptions": {
      "includeAccessInfo": true
    },
    "groupsOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "hangoutsChatOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "mailOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
      "showConfidentialModeContent": true,
      "useNewExport": true
    },
    "region": "EXPORT_REGION_UNSPECIFIED",
    "voiceOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    }
  },
  "id": "string",
  "matterId": "string",
  "name": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "requester": {
    "displayName": "string",
    "email": "string"
  },
  "stats": {
    "exportedArtifactCount": "string",
    "sizeInBytes": "string",
    "totalArtifactCount": "string"
  },
  "status": "EXPORT_STATUS_UNSPECIFIED"
}
```

<h3 id="vaultmattersexportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[Export](#schemaexport)|false|none|
|» cloudStorageSink|body|[CloudStorageSink](#schemacloudstoragesink)|false|Output only. The sink for export files in Cloud Storage.|
|» createTime|body|string(google-datetime)|false|Output only. The time when the export was created.|
|» exportOptions|body|[ExportOptions](#schemaexportoptions)|false|Additional export options.|
|» id|body|string|false|Output only. The generated export ID.|
|» matterId|body|string|false|Output only. The matter ID.|
|» name|body|string|false|The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.|
|» query|body|[Query](#schemaquery)|false|The query parameters used to create the export.|
|» requester|body|[UserInfo](#schemauserinfo)|false|Output only. The requester of the export.|
|» stats|body|[ExportStats](#schemaexportstats)|false|Output only. Details about the export progress and size.|
|» status|body|string|false|Output only. The status of the export.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|EXPORT_STATUS_UNSPECIFIED|
|» status|COMPLETED|
|» status|FAILED|
|» status|IN_PROGRESS|

> Example responses

> 200 Response

```json
{
  "cloudStorageSink": {
    "files": [
      {
        "bucketName": "string",
        "md5Hash": "string",
        "objectName": "string",
        "size": "string"
      }
    ]
  },
  "createTime": "string",
  "exportOptions": {
    "driveOptions": {
      "includeAccessInfo": true
    },
    "groupsOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "hangoutsChatOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "mailOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
      "showConfidentialModeContent": true,
      "useNewExport": true
    },
    "region": "EXPORT_REGION_UNSPECIFIED",
    "voiceOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    }
  },
  "id": "string",
  "matterId": "string",
  "name": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "requester": {
    "displayName": "string",
    "email": "string"
  },
  "stats": {
    "exportedArtifactCount": "string",
    "sizeInBytes": "string",
    "totalArtifactCount": "string"
  },
  "status": "EXPORT_STATUS_UNSPECIFIED"
}
```

<h3 id="vaultmattersexportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Export](#schemaexport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.exports.get

<a id="opIdvault.matters.exports.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/exports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/exports/{exportId}`

Gets an export.

<h3 id="vaultmattersexportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|exportId|path|string|true|The export ID.|
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
  "cloudStorageSink": {
    "files": [
      {
        "bucketName": "string",
        "md5Hash": "string",
        "objectName": "string",
        "size": "string"
      }
    ]
  },
  "createTime": "string",
  "exportOptions": {
    "driveOptions": {
      "includeAccessInfo": true
    },
    "groupsOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "hangoutsChatOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "mailOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
      "showConfidentialModeContent": true,
      "useNewExport": true
    },
    "region": "EXPORT_REGION_UNSPECIFIED",
    "voiceOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    }
  },
  "id": "string",
  "matterId": "string",
  "name": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "requester": {
    "displayName": "string",
    "email": "string"
  },
  "stats": {
    "exportedArtifactCount": "string",
    "sizeInBytes": "string",
    "totalArtifactCount": "string"
  },
  "status": "EXPORT_STATUS_UNSPECIFIED"
}
```

<h3 id="vaultmattersexportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Export](#schemaexport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.exports.delete

<a id="opIdvault.matters.exports.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/exports/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/matters/{matterId}/exports/{exportId}`

Deletes an export.

<h3 id="vaultmattersexportsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|exportId|path|string|true|The export ID.|
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

<h3 id="vaultmattersexportsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.list

<a id="opIdvault.matters.holds.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/holds`

Lists the holds in a matter.

<h3 id="vaultmattersholdslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|pageSize|query|integer|false|The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.|
|pageToken|query|string|false|The pagination token as returned in the response. An empty token means start from the beginning.|
|view|query|string|false|The amount of detail to return for a hold.|
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
|view|HOLD_VIEW_UNSPECIFIED|
|view|BASIC_HOLD|
|view|FULL_HOLD|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "holds": [
    {
      "accounts": [
        {
          "accountId": "string",
          "email": "string",
          "firstName": "string",
          "holdTime": "string",
          "lastName": "string"
        }
      ],
      "corpus": "CORPUS_TYPE_UNSPECIFIED",
      "holdId": "string",
      "name": "string",
      "orgUnit": {
        "holdTime": "string",
        "orgUnitId": "string"
      },
      "query": {
        "driveQuery": {
          "includeSharedDriveFiles": true,
          "includeTeamDriveFiles": true
        },
        "groupsQuery": {
          "endTime": "string",
          "startTime": "string",
          "terms": "string"
        },
        "hangoutsChatQuery": {
          "includeRooms": true
        },
        "mailQuery": {
          "endTime": "string",
          "startTime": "string",
          "terms": "string"
        },
        "voiceQuery": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="vaultmattersholdslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHoldsResponse](#schemalistholdsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.holds.create

<a id="opIdvault.matters.holds.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accounts": [
      {
        "accountId": "string",
        "email": "string",
        "firstName": "string",
        "holdTime": "string",
        "lastName": "string"
      }
    ],
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "holdId": "string",
    "name": "string",
    "orgUnit": {
      "holdTime": "string",
      "orgUnitId": "string"
    },
    "query": {
      "driveQuery": {
        "includeSharedDriveFiles": true,
        "includeTeamDriveFiles": true
      },
      "groupsQuery": {
        "endTime": "string",
        "startTime": "string",
        "terms": "string"
      },
      "hangoutsChatQuery": {
        "includeRooms": true
      },
      "mailQuery": {
        "endTime": "string",
        "startTime": "string",
        "terms": "string"
      },
      "voiceQuery": {
        "coveredData": [
          "COVERED_DATA_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  }'
```

`POST /v1/matters/{matterId}/holds`

Creates a hold in the specified matter.

> Body parameter

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="vaultmattersholdscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[Hold](#schemahold)|false|none|
|» accounts|body|[[HeldAccount](#schemaheldaccount)]|false|If set, the hold applies to the specified accounts and **orgUnit** must be empty.|
|» corpus|body|string|false|The service to be searched.|
|» holdId|body|string|false|The unique immutable ID of the hold. Assigned during creation.|
|» name|body|string|false|The name of the hold.|
|» orgUnit|body|[HeldOrgUnit](#schemaheldorgunit)|false|If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**.|
|» query|body|[CorpusQuery](#schemacorpusquery)|false|Service-specific options. If set, **CorpusQuery** must match **CorpusType**.|
|» updateTime|body|string(google-datetime)|false|The last time this hold was modified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» corpus|CORPUS_TYPE_UNSPECIFIED|
|» corpus|DRIVE|
|» corpus|MAIL|
|» corpus|GROUPS|
|» corpus|HANGOUTS_CHAT|
|» corpus|VOICE|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="vaultmattersholdscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Hold](#schemahold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.get

<a id="opIdvault.matters.holds.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/holds/{holdId}`

Gets the specified hold.

<h3 id="vaultmattersholdsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
|view|query|string|false|The amount of detail to return for a hold.|
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
|view|HOLD_VIEW_UNSPECIFIED|
|view|BASIC_HOLD|
|view|FULL_HOLD|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="vaultmattersholdsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Hold](#schemahold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.holds.update

<a id="opIdvault.matters.holds.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accounts": [
      {
        "accountId": "string",
        "email": "string",
        "firstName": "string",
        "holdTime": "string",
        "lastName": "string"
      }
    ],
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "holdId": "string",
    "name": "string",
    "orgUnit": {
      "holdTime": "string",
      "orgUnitId": "string"
    },
    "query": {
      "driveQuery": {
        "includeSharedDriveFiles": true,
        "includeTeamDriveFiles": true
      },
      "groupsQuery": {
        "endTime": "string",
        "startTime": "string",
        "terms": "string"
      },
      "hangoutsChatQuery": {
        "includeRooms": true
      },
      "mailQuery": {
        "endTime": "string",
        "startTime": "string",
        "terms": "string"
      },
      "voiceQuery": {
        "coveredData": [
          "COVERED_DATA_UNSPECIFIED"
        ]
      }
    },
    "updateTime": "string"
  }'
```

`PUT /v1/matters/{matterId}/holds/{holdId}`

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

> Body parameter

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="vaultmattersholdsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The ID of the hold.|
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
|body|body|[Hold](#schemahold)|false|none|
|» accounts|body|[[HeldAccount](#schemaheldaccount)]|false|If set, the hold applies to the specified accounts and **orgUnit** must be empty.|
|» corpus|body|string|false|The service to be searched.|
|» holdId|body|string|false|The unique immutable ID of the hold. Assigned during creation.|
|» name|body|string|false|The name of the hold.|
|» orgUnit|body|[HeldOrgUnit](#schemaheldorgunit)|false|If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**.|
|» query|body|[CorpusQuery](#schemacorpusquery)|false|Service-specific options. If set, **CorpusQuery** must match **CorpusType**.|
|» updateTime|body|string(google-datetime)|false|The last time this hold was modified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» corpus|CORPUS_TYPE_UNSPECIFIED|
|» corpus|DRIVE|
|» corpus|MAIL|
|» corpus|GROUPS|
|» corpus|HANGOUTS_CHAT|
|» corpus|VOICE|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

<h3 id="vaultmattersholdsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Hold](#schemahold)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.delete

<a id="opIdvault.matters.holds.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/matters/{matterId}/holds/{holdId}`

Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.

<h3 id="vaultmattersholdsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
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

<h3 id="vaultmattersholdsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.accounts.list

<a id="opIdvault.matters.holds.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/holds/{holdId}/accounts`

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

<h3 id="vaultmattersholdsaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
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
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ]
}
```

<h3 id="vaultmattersholdsaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHeldAccountsResponse](#schemalistheldaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.holds.accounts.create

<a id="opIdvault.matters.holds.accounts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "email": "string",
    "firstName": "string",
    "holdTime": "string",
    "lastName": "string"
  }'
```

`POST /v1/matters/{matterId}/holds/{holdId}/accounts`

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

> Body parameter

```json
{
  "accountId": "string",
  "email": "string",
  "firstName": "string",
  "holdTime": "string",
  "lastName": "string"
}
```

<h3 id="vaultmattersholdsaccountscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
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
|body|body|[HeldAccount](#schemaheldaccount)|false|none|
|» accountId|body|string|false|The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).|
|» email|body|string|false|The primary email address of the account. If used as an input, this takes precedence over **accountId**.|
|» firstName|body|string|false|Output only. The first name of the account holder.|
|» holdTime|body|string(google-datetime)|false|Output only. When the account was put on hold.|
|» lastName|body|string|false|Output only. The last name of the account holder.|

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
  "accountId": "string",
  "email": "string",
  "firstName": "string",
  "holdTime": "string",
  "lastName": "string"
}
```

<h3 id="vaultmattersholdsaccountscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HeldAccount](#schemaheldaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.accounts.delete

<a id="opIdvault.matters.holds.accounts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string/accounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}`

Removes an account from a hold.

<h3 id="vaultmattersholdsaccountsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
|accountId|path|string|true|The ID of the account to remove from the hold.|
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

<h3 id="vaultmattersholdsaccountsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.addHeldAccounts

<a id="opIdvault.matters.holds.addHeldAccounts"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string:addHeldAccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "string"
    ],
    "emails": [
      "string"
    ]
  }'
```

`POST /v1/matters/{matterId}/holds/{holdId}:addHeldAccounts`

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ],
  "emails": [
    "string"
  ]
}
```

<h3 id="vaultmattersholdsaddheldaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
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
|body|body|[AddHeldAccountsRequest](#schemaaddheldaccountsrequest)|false|none|
|» accountIds|body|[string]|false|A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.|
|» emails|body|[string]|false|A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.|

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
  "responses": [
    {
      "account": {
        "accountId": "string",
        "email": "string",
        "firstName": "string",
        "holdTime": "string",
        "lastName": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

<h3 id="vaultmattersholdsaddheldaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AddHeldAccountsResponse](#schemaaddheldaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.holds.removeHeldAccounts

<a id="opIdvault.matters.holds.removeHeldAccounts"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/holds/string:removeHeldAccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIds": [
      "string"
    ]
  }'
```

`POST /v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts`

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

> Body parameter

```json
{
  "accountIds": [
    "string"
  ]
}
```

<h3 id="vaultmattersholdsremoveheldaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
|holdId|path|string|true|The hold ID.|
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
|body|body|[RemoveHeldAccountsRequest](#schemaremoveheldaccountsrequest)|false|none|
|» accountIds|body|[string]|false|The account IDs of the accounts to remove from the hold.|

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
  "statuses": [
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
  ]
}
```

<h3 id="vaultmattersholdsremoveheldaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RemoveHeldAccountsResponse](#schemaremoveheldaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.savedQueries.list

<a id="opIdvault.matters.savedQueries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/savedQueries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/savedQueries`

Lists the saved queries in a matter.

<h3 id="vaultmatterssavedquerieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The ID of the matter to get the saved queries for.|
|pageSize|query|integer|false|The maximum number of saved queries to return.|
|pageToken|query|string|false|The pagination token as returned in the previous response. An empty token means start from the beginning.|
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
  "savedQueries": [
    {
      "createTime": "string",
      "displayName": "string",
      "matterId": "string",
      "query": {
        "accountInfo": {
          "emails": [
            "string"
          ]
        },
        "corpus": "CORPUS_TYPE_UNSPECIFIED",
        "dataScope": "DATA_SCOPE_UNSPECIFIED",
        "driveOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "includeSharedDrives": true,
          "includeTeamDrives": true,
          "versionDate": "string"
        },
        "endTime": "string",
        "hangoutsChatInfo": {
          "roomId": [
            "string"
          ]
        },
        "hangoutsChatOptions": {
          "includeRooms": true
        },
        "mailOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "excludeDrafts": true
        },
        "method": "SEARCH_METHOD_UNSPECIFIED",
        "orgUnitInfo": {
          "orgUnitId": "string"
        },
        "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
        "sharedDriveInfo": {
          "sharedDriveIds": [
            "string"
          ]
        },
        "sitesUrlInfo": {
          "urls": [
            "string"
          ]
        },
        "startTime": "string",
        "teamDriveInfo": {
          "teamDriveIds": [
            "string"
          ]
        },
        "terms": "string",
        "timeZone": "string",
        "voiceOptions": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "savedQueryId": "string"
    }
  ]
}
```

<h3 id="vaultmatterssavedquerieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSavedQueriesResponse](#schemalistsavedqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.savedQueries.create

<a id="opIdvault.matters.savedQueries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/savedQueries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "displayName": "string",
    "matterId": "string",
    "query": {
      "accountInfo": {
        "emails": [
          "string"
        ]
      },
      "corpus": "CORPUS_TYPE_UNSPECIFIED",
      "dataScope": "DATA_SCOPE_UNSPECIFIED",
      "driveOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "includeSharedDrives": true,
        "includeTeamDrives": true,
        "versionDate": "string"
      },
      "endTime": "string",
      "hangoutsChatInfo": {
        "roomId": [
          "string"
        ]
      },
      "hangoutsChatOptions": {
        "includeRooms": true
      },
      "mailOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "excludeDrafts": true
      },
      "method": "SEARCH_METHOD_UNSPECIFIED",
      "orgUnitInfo": {
        "orgUnitId": "string"
      },
      "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
      "sharedDriveInfo": {
        "sharedDriveIds": [
          "string"
        ]
      },
      "sitesUrlInfo": {
        "urls": [
          "string"
        ]
      },
      "startTime": "string",
      "teamDriveInfo": {
        "teamDriveIds": [
          "string"
        ]
      },
      "terms": "string",
      "timeZone": "string",
      "voiceOptions": {
        "coveredData": [
          "COVERED_DATA_UNSPECIFIED"
        ]
      }
    },
    "savedQueryId": "string"
  }'
```

`POST /v1/matters/{matterId}/savedQueries`

Creates a saved query.

> Body parameter

```json
{
  "createTime": "string",
  "displayName": "string",
  "matterId": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "savedQueryId": "string"
}
```

<h3 id="vaultmatterssavedqueriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The ID of the matter to create the saved query in.|
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
|body|body|[SavedQuery](#schemasavedquery)|false|none|
|» createTime|body|string(google-datetime)|false|Output only. The server-generated timestamp when the saved query was created.|
|» displayName|body|string|false|The name of the saved query.|
|» matterId|body|string|false|Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.|
|» query|body|[Query](#schemaquery)|false|The search parameters of the saved query.|
|» savedQueryId|body|string|false|A unique identifier for the saved query.|

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
  "createTime": "string",
  "displayName": "string",
  "matterId": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "savedQueryId": "string"
}
```

<h3 id="vaultmatterssavedqueriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedQuery](#schemasavedquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.savedQueries.get

<a id="opIdvault.matters.savedQueries.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/savedQueries/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/matters/{matterId}/savedQueries/{savedQueryId}`

Retrieves the specified saved query.

<h3 id="vaultmatterssavedqueriesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The ID of the matter to get the saved query from.|
|savedQueryId|path|string|true|ID of the saved query to retrieve.|
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
  "createTime": "string",
  "displayName": "string",
  "matterId": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "savedQueryId": "string"
}
```

<h3 id="vaultmatterssavedqueriesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedQuery](#schemasavedquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery.readonly )
</aside>

## vault.matters.savedQueries.delete

<a id="opIdvault.matters.savedQueries.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string/savedQueries/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/matters/{matterId}/savedQueries/{savedQueryId}`

Deletes the specified saved query.

<h3 id="vaultmatterssavedqueriesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The ID of the matter to delete the saved query from.|
|savedQueryId|path|string|true|ID of the saved query to delete.|
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

<h3 id="vaultmatterssavedqueriesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.addPermissions

<a id="opIdvault.matters.addPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:addPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ccMe": true,
    "matterPermission": {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    },
    "sendEmails": true
  }'
```

`POST /v1/matters/{matterId}:addPermissions`

Adds an account as a matter collaborator.

> Body parameter

```json
{
  "ccMe": true,
  "matterPermission": {
    "accountId": "string",
    "role": "ROLE_UNSPECIFIED"
  },
  "sendEmails": true
}
```

<h3 id="vaultmattersaddpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[AddMatterPermissionsRequest](#schemaaddmatterpermissionsrequest)|false|none|
|» ccMe|body|boolean|false|Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**.|
|» matterPermission|body|[MatterPermission](#schemamatterpermission)|false|The account and its role to add.|
|» sendEmails|body|boolean|false|To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**.|

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
  "accountId": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

<h3 id="vaultmattersaddpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MatterPermission](#schemamatterpermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.close

<a id="opIdvault.matters.close"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/matters/{matterId}:close`

Closes the specified matter. Returns the matter with updated state.

> Body parameter

```json
{}
```

<h3 id="vaultmattersclose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[CloseMatterRequest](#schemaclosematterrequest)|false|none|

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
  "matter": {
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="vaultmattersclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CloseMatterResponse](#schemaclosematterresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.count

<a id="opIdvault.matters.count"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:count \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": {
      "accountInfo": {
        "emails": [
          "string"
        ]
      },
      "corpus": "CORPUS_TYPE_UNSPECIFIED",
      "dataScope": "DATA_SCOPE_UNSPECIFIED",
      "driveOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "includeSharedDrives": true,
        "includeTeamDrives": true,
        "versionDate": "string"
      },
      "endTime": "string",
      "hangoutsChatInfo": {
        "roomId": [
          "string"
        ]
      },
      "hangoutsChatOptions": {
        "includeRooms": true
      },
      "mailOptions": {
        "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
        "excludeDrafts": true
      },
      "method": "SEARCH_METHOD_UNSPECIFIED",
      "orgUnitInfo": {
        "orgUnitId": "string"
      },
      "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
      "sharedDriveInfo": {
        "sharedDriveIds": [
          "string"
        ]
      },
      "sitesUrlInfo": {
        "urls": [
          "string"
        ]
      },
      "startTime": "string",
      "teamDriveInfo": {
        "teamDriveIds": [
          "string"
        ]
      },
      "terms": "string",
      "timeZone": "string",
      "voiceOptions": {
        "coveredData": [
          "COVERED_DATA_UNSPECIFIED"
        ]
      }
    },
    "view": "COUNT_RESULT_VIEW_UNSPECIFIED"
  }'
```

`POST /v1/matters/{matterId}:count`

Counts the accounts processed by the specified query.

> Body parameter

```json
{
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "view": "COUNT_RESULT_VIEW_UNSPECIFIED"
}
```

<h3 id="vaultmatterscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[CountArtifactsRequest](#schemacountartifactsrequest)|false|none|
|» query|body|[Query](#schemaquery)|false|The search query.|
|» view|body|string|false|Sets the granularity of the count results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» view|COUNT_RESULT_VIEW_UNSPECIFIED|
|» view|TOTAL_COUNT|
|» view|ALL|

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

<h3 id="vaultmatterscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.removePermissions

<a id="opIdvault.matters.removePermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:removePermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string"
  }'
```

`POST /v1/matters/{matterId}:removePermissions`

Removes an account as a matter collaborator.

> Body parameter

```json
{
  "accountId": "string"
}
```

<h3 id="vaultmattersremovepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[RemoveMatterPermissionsRequest](#schemaremovematterpermissionsrequest)|false|none|
|» accountId|body|string|false|The account ID.|

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

<h3 id="vaultmattersremovepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.reopen

<a id="opIdvault.matters.reopen"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:reopen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/matters/{matterId}:reopen`

Reopens the specified matter. Returns the matter with updated state.

> Body parameter

```json
{}
```

<h3 id="vaultmattersreopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[ReopenMatterRequest](#schemareopenmatterrequest)|false|none|

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
  "matter": {
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="vaultmattersreopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReopenMatterResponse](#schemareopenmatterresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

## vault.matters.undelete

<a id="opIdvault.matters.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/matters/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/matters/{matterId}:undelete`

Undeletes the specified matter. Returns the matter with updated state.

> Body parameter

```json
{}
```

<h3 id="vaultmattersundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matterId|path|string|true|The matter ID.|
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
|body|body|[UndeleteMatterRequest](#schemaundeletematterrequest)|false|none|

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
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="vaultmattersundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Matter](#schemamatter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/ediscovery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/ediscovery )
</aside>

<h1 id="google-vault-api-operations">operations</h1>

## vault.operations.list

<a id="opIdvault.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="vaultoperationslist-parameters">Parameters</h3>

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

<h3 id="vaultoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## vault.operations.delete

<a id="opIdvault.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="vaultoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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

<h3 id="vaultoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## vault.operations.cancel

<a id="opIdvault.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="vaultoperationscancel-parameters">Parameters</h3>

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

<h3 id="vaultoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccountCount">AccountCount</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcount"></a>
<a id="schema_AccountCount"></a>
<a id="tocSaccountcount"></a>
<a id="tocsaccountcount"></a>

```json
{
  "account": {
    "displayName": "string",
    "email": "string"
  },
  "count": "string"
}
```

The results count for each account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[UserInfo](#schemauserinfo)|false|none|Account owner.|
|count|string(int64)|false|none|The number of results (messages or files) found for this account.|

<h2 id="tocS_AccountCountError">AccountCountError</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcounterror"></a>
<a id="schema_AccountCountError"></a>
<a id="tocSaccountcounterror"></a>
<a id="tocsaccountcounterror"></a>

```json
{
  "account": {
    "displayName": "string",
    "email": "string"
  },
  "errorType": "ERROR_TYPE_UNSPECIFIED"
}
```

An error that occurred when querying a specific account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[UserInfo](#schemauserinfo)|false|none|Account owner.|
|errorType|string|false|none|Account query error.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorType|ERROR_TYPE_UNSPECIFIED|
|errorType|WILDCARD_TOO_BROAD|
|errorType|TOO_MANY_TERMS|
|errorType|LOCATION_UNAVAILABLE|
|errorType|UNKNOWN|
|errorType|DEADLINE_EXCEEDED|

<h2 id="tocS_AccountInfo">AccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountinfo"></a>
<a id="schema_AccountInfo"></a>
<a id="tocSaccountinfo"></a>
<a id="tocsaccountinfo"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

The accounts to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|A set of accounts to search.|

<h2 id="tocS_AddHeldAccountResult">AddHeldAccountResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddheldaccountresult"></a>
<a id="schema_AddHeldAccountResult"></a>
<a id="tocSaddheldaccountresult"></a>
<a id="tocsaddheldaccountresult"></a>

```json
{
  "account": {
    "accountId": "string",
    "email": "string",
    "firstName": "string",
    "holdTime": "string",
    "lastName": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The status of each account creation, and the **HeldAccount**, if successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[HeldAccount](#schemaheldaccount)|false|none|Returned when the account was successfully created.|
|status|[Status](#schemastatus)|false|none|Reports the request status. If it failed, returns an error message.|

<h2 id="tocS_AddHeldAccountsRequest">AddHeldAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddheldaccountsrequest"></a>
<a id="schema_AddHeldAccountsRequest"></a>
<a id="tocSaddheldaccountsrequest"></a>
<a id="tocsaddheldaccountsrequest"></a>

```json
{
  "accountIds": [
    "string"
  ],
  "emails": [
    "string"
  ]
}
```

Add a list of accounts to a hold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[string]|false|none|A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.|
|emails|[string]|false|none|A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both.|

<h2 id="tocS_AddHeldAccountsResponse">AddHeldAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddheldaccountsresponse"></a>
<a id="schema_AddHeldAccountsResponse"></a>
<a id="tocSaddheldaccountsresponse"></a>
<a id="tocsaddheldaccountsresponse"></a>

```json
{
  "responses": [
    {
      "account": {
        "accountId": "string",
        "email": "string",
        "firstName": "string",
        "holdTime": "string",
        "lastName": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

Response for batch create held accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AddHeldAccountResult](#schemaaddheldaccountresult)]|false|none|The list of responses, in the same order as the batch request.|

<h2 id="tocS_AddMatterPermissionsRequest">AddMatterPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddmatterpermissionsrequest"></a>
<a id="schema_AddMatterPermissionsRequest"></a>
<a id="tocSaddmatterpermissionsrequest"></a>
<a id="tocsaddmatterpermissionsrequest"></a>

```json
{
  "ccMe": true,
  "matterPermission": {
    "accountId": "string",
    "role": "ROLE_UNSPECIFIED"
  },
  "sendEmails": true
}
```

Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ccMe|boolean|false|none|Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**.|
|matterPermission|[MatterPermission](#schemamatterpermission)|false|none|The account and its role to add.|
|sendEmails|boolean|false|none|To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**.|

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

<h2 id="tocS_CloseMatterRequest">CloseMatterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclosematterrequest"></a>
<a id="schema_CloseMatterRequest"></a>
<a id="tocSclosematterrequest"></a>
<a id="tocsclosematterrequest"></a>

```json
{}
```

Close a matter by ID.

<h2 id="tocS_CloseMatterResponse">CloseMatterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclosematterresponse"></a>
<a id="schema_CloseMatterResponse"></a>
<a id="tocSclosematterresponse"></a>
<a id="tocsclosematterresponse"></a>

```json
{
  "matter": {
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Response to a CloseMatterRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matter|[Matter](#schemamatter)|false|none|The updated matter, with state **CLOSED**.|

<h2 id="tocS_CloudStorageFile">CloudStorageFile</h2>
<!-- backwards compatibility -->
<a id="schemacloudstoragefile"></a>
<a id="schema_CloudStorageFile"></a>
<a id="tocScloudstoragefile"></a>
<a id="tocscloudstoragefile"></a>

```json
{
  "bucketName": "string",
  "md5Hash": "string",
  "objectName": "string",
  "size": "string"
}
```

The export file in Cloud Storage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|The name of the Cloud Storage bucket for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name.|
|md5Hash|string|false|none|The md5 hash of the file.|
|objectName|string|false|none|The name of the Cloud Storage object for the export file. You can use this value in the [Cloud Storage JSON or XML APIs](https://cloud.google.com/storage/docs/apis).|
|size|string(int64)|false|none|The export file size.|

<h2 id="tocS_CloudStorageSink">CloudStorageSink</h2>
<!-- backwards compatibility -->
<a id="schemacloudstoragesink"></a>
<a id="schema_CloudStorageSink"></a>
<a id="tocScloudstoragesink"></a>
<a id="tocscloudstoragesink"></a>

```json
{
  "files": [
    {
      "bucketName": "string",
      "md5Hash": "string",
      "objectName": "string",
      "size": "string"
    }
  ]
}
```

Export sink for Cloud Storage files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[CloudStorageFile](#schemacloudstoragefile)]|false|none|Output only. The exported files in Cloud Storage.|

<h2 id="tocS_CorpusQuery">CorpusQuery</h2>
<!-- backwards compatibility -->
<a id="schemacorpusquery"></a>
<a id="schema_CorpusQuery"></a>
<a id="tocScorpusquery"></a>
<a id="tocscorpusquery"></a>

```json
{
  "driveQuery": {
    "includeSharedDriveFiles": true,
    "includeTeamDriveFiles": true
  },
  "groupsQuery": {
    "endTime": "string",
    "startTime": "string",
    "terms": "string"
  },
  "hangoutsChatQuery": {
    "includeRooms": true
  },
  "mailQuery": {
    "endTime": "string",
    "startTime": "string",
    "terms": "string"
  },
  "voiceQuery": {
    "coveredData": [
      "COVERED_DATA_UNSPECIFIED"
    ]
  }
}
```

Service-specific options for holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveQuery|[HeldDriveQuery](#schemahelddrivequery)|false|none|Service-specific options for Drive holds. If set, **CorpusType** must be **DRIVE**.|
|groupsQuery|[HeldGroupsQuery](#schemaheldgroupsquery)|false|none|Service-specific options for Groups holds. If set, **CorpusType** must be **GROUPS**.|
|hangoutsChatQuery|[HeldHangoutsChatQuery](#schemaheldhangoutschatquery)|false|none|Service-specific options for Chat holds. If set, **CorpusType** must be **HANGOUTS_CHAT**.|
|mailQuery|[HeldMailQuery](#schemaheldmailquery)|false|none|Service-specific options for Gmail holds. If set, **CorpusType** must be **MAIL**.|
|voiceQuery|[HeldVoiceQuery](#schemaheldvoicequery)|false|none|Service-specific options for Voice holds. If set, **CorpusType** must be **VOICE**.|

<h2 id="tocS_CountArtifactsMetadata">CountArtifactsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacountartifactsmetadata"></a>
<a id="schema_CountArtifactsMetadata"></a>
<a id="tocScountartifactsmetadata"></a>
<a id="tocscountartifactsmetadata"></a>

```json
{
  "endTime": "string",
  "matterId": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "startTime": "string"
}
```

Long running operation metadata for CountArtifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End time of count operation. Available when operation is done.|
|matterId|string|false|none|The matter ID of the associated matter.|
|query|[Query](#schemaquery)|false|none|The search query from the request.|
|startTime|string(google-datetime)|false|none|Creation time of count operation.|

<h2 id="tocS_CountArtifactsRequest">CountArtifactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacountartifactsrequest"></a>
<a id="schema_CountArtifactsRequest"></a>
<a id="tocScountartifactsrequest"></a>
<a id="tocscountartifactsrequest"></a>

```json
{
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "view": "COUNT_RESULT_VIEW_UNSPECIFIED"
}
```

Count artifacts request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[Query](#schemaquery)|false|none|The search query.|
|view|string|false|none|Sets the granularity of the count results.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|COUNT_RESULT_VIEW_UNSPECIFIED|
|view|TOTAL_COUNT|
|view|ALL|

<h2 id="tocS_CountArtifactsResponse">CountArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacountartifactsresponse"></a>
<a id="schema_CountArtifactsResponse"></a>
<a id="tocScountartifactsresponse"></a>
<a id="tocscountartifactsresponse"></a>

```json
{
  "groupsCountResult": {
    "accountCountErrors": [
      {
        "account": {
          "displayName": "string",
          "email": "string"
        },
        "errorType": "ERROR_TYPE_UNSPECIFIED"
      }
    ],
    "accountCounts": [
      {
        "account": {
          "displayName": "string",
          "email": "string"
        },
        "count": "string"
      }
    ],
    "matchingAccountsCount": "string",
    "nonQueryableAccounts": [
      "string"
    ],
    "queriedAccountsCount": "string"
  },
  "mailCountResult": {
    "accountCountErrors": [
      {
        "account": {
          "displayName": "string",
          "email": "string"
        },
        "errorType": "ERROR_TYPE_UNSPECIFIED"
      }
    ],
    "accountCounts": [
      {
        "account": {
          "displayName": "string",
          "email": "string"
        },
        "count": "string"
      }
    ],
    "matchingAccountsCount": "string",
    "nonQueryableAccounts": [
      "string"
    ],
    "queriedAccountsCount": "string"
  },
  "totalCount": "string"
}
```

Definition of the response for method CountArtifacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupsCountResult|[GroupsCountResult](#schemagroupscountresult)|false|none|Count metrics for Groups.|
|mailCountResult|[MailCountResult](#schemamailcountresult)|false|none|Count metrics for Gmail and classic Hangouts.|
|totalCount|string(int64)|false|none|Total count of messages.|

<h2 id="tocS_DriveExportOptions">DriveExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemadriveexportoptions"></a>
<a id="schema_DriveExportOptions"></a>
<a id="tocSdriveexportoptions"></a>
<a id="tocsdriveexportoptions"></a>

```json
{
  "includeAccessInfo": true
}
```

Options for Drive exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeAccessInfo|boolean|false|none|To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**.|

<h2 id="tocS_DriveOptions">DriveOptions</h2>
<!-- backwards compatibility -->
<a id="schemadriveoptions"></a>
<a id="schema_DriveOptions"></a>
<a id="tocSdriveoptions"></a>
<a id="tocsdriveoptions"></a>

```json
{
  "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
  "includeSharedDrives": true,
  "includeTeamDrives": true,
  "versionDate": "string"
}
```

Additional options for Drive search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientSideEncryptedOption|string|false|none|Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive.|
|includeSharedDrives|boolean|false|none|Set to **true** to include shared drives.|
|includeTeamDrives|boolean|false|none|Set to true to include Team Drive.|
|versionDate|string(google-datetime)|false|none|Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_ANY|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED|

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

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "cloudStorageSink": {
    "files": [
      {
        "bucketName": "string",
        "md5Hash": "string",
        "objectName": "string",
        "size": "string"
      }
    ]
  },
  "createTime": "string",
  "exportOptions": {
    "driveOptions": {
      "includeAccessInfo": true
    },
    "groupsOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "hangoutsChatOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    },
    "mailOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
      "showConfidentialModeContent": true,
      "useNewExport": true
    },
    "region": "EXPORT_REGION_UNSPECIFIED",
    "voiceOptions": {
      "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
    }
  },
  "id": "string",
  "matterId": "string",
  "name": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "requester": {
    "displayName": "string",
    "email": "string"
  },
  "stats": {
    "exportedArtifactCount": "string",
    "sizeInBytes": "string",
    "totalArtifactCount": "string"
  },
  "status": "EXPORT_STATUS_UNSPECIFIED"
}
```

An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudStorageSink|[CloudStorageSink](#schemacloudstoragesink)|false|none|Output only. The sink for export files in Cloud Storage.|
|createTime|string(google-datetime)|false|none|Output only. The time when the export was created.|
|exportOptions|[ExportOptions](#schemaexportoptions)|false|none|Additional export options.|
|id|string|false|none|Output only. The generated export ID.|
|matterId|string|false|none|Output only. The matter ID.|
|name|string|false|none|The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports.|
|query|[Query](#schemaquery)|false|none|The query parameters used to create the export.|
|requester|[UserInfo](#schemauserinfo)|false|none|Output only. The requester of the export.|
|stats|[ExportStats](#schemaexportstats)|false|none|Output only. Details about the export progress and size.|
|status|string|false|none|Output only. The status of the export.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|EXPORT_STATUS_UNSPECIFIED|
|status|COMPLETED|
|status|FAILED|
|status|IN_PROGRESS|

<h2 id="tocS_ExportOptions">ExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemaexportoptions"></a>
<a id="schema_ExportOptions"></a>
<a id="tocSexportoptions"></a>
<a id="tocsexportoptions"></a>

```json
{
  "driveOptions": {
    "includeAccessInfo": true
  },
  "groupsOptions": {
    "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
  },
  "hangoutsChatOptions": {
    "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
  },
  "mailOptions": {
    "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
    "showConfidentialModeContent": true,
    "useNewExport": true
  },
  "region": "EXPORT_REGION_UNSPECIFIED",
  "voiceOptions": {
    "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
  }
}
```

Additional options for exports

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driveOptions|[DriveExportOptions](#schemadriveexportoptions)|false|none|Options for Drive exports.|
|groupsOptions|[GroupsExportOptions](#schemagroupsexportoptions)|false|none|Options for Groups exports.|
|hangoutsChatOptions|[HangoutsChatExportOptions](#schemahangoutschatexportoptions)|false|none|Options for Chat exports.|
|mailOptions|[MailExportOptions](#schemamailexportoptions)|false|none|Options for Gmail exports.|
|region|string|false|none|The requested data region for the export.|
|voiceOptions|[VoiceExportOptions](#schemavoiceexportoptions)|false|none|Options for Voice exports.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|EXPORT_REGION_UNSPECIFIED|
|region|ANY|
|region|US|
|region|EUROPE|

<h2 id="tocS_ExportStats">ExportStats</h2>
<!-- backwards compatibility -->
<a id="schemaexportstats"></a>
<a id="schema_ExportStats"></a>
<a id="tocSexportstats"></a>
<a id="tocsexportstats"></a>

```json
{
  "exportedArtifactCount": "string",
  "sizeInBytes": "string",
  "totalArtifactCount": "string"
}
```

Progress information for an export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportedArtifactCount|string(int64)|false|none|The number of messages or files already processed for export.|
|sizeInBytes|string(int64)|false|none|The size of export in bytes.|
|totalArtifactCount|string(int64)|false|none|The number of messages or files to be exported.|

<h2 id="tocS_GroupsCountResult">GroupsCountResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupscountresult"></a>
<a id="schema_GroupsCountResult"></a>
<a id="tocSgroupscountresult"></a>
<a id="tocsgroupscountresult"></a>

```json
{
  "accountCountErrors": [
    {
      "account": {
        "displayName": "string",
        "email": "string"
      },
      "errorType": "ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "accountCounts": [
    {
      "account": {
        "displayName": "string",
        "email": "string"
      },
      "count": "string"
    }
  ],
  "matchingAccountsCount": "string",
  "nonQueryableAccounts": [
    "string"
  ],
  "queriedAccountsCount": "string"
}
```

Groups specific count metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCountErrors|[[AccountCountError](#schemaaccountcounterror)]|false|none|Error occurred when querying these accounts.|
|accountCounts|[[AccountCount](#schemaaccountcount)]|false|none|Subtotal count per matching account that have more than zero messages.|
|matchingAccountsCount|string(int64)|false|none|Total number of accounts that can be queried and have more than zero messages.|
|nonQueryableAccounts|[string]|false|none|When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.|
|queriedAccountsCount|string(int64)|false|none|Total number of accounts involved in this count operation.|

<h2 id="tocS_GroupsExportOptions">GroupsExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemagroupsexportoptions"></a>
<a id="schema_GroupsExportOptions"></a>
<a id="tocSgroupsexportoptions"></a>
<a id="tocsgroupsexportoptions"></a>

```json
{
  "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
}
```

Options for Groups exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportFormat|string|false|none|The file format for exported messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportFormat|EXPORT_FORMAT_UNSPECIFIED|
|exportFormat|MBOX|
|exportFormat|PST|

<h2 id="tocS_HangoutsChatExportOptions">HangoutsChatExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemahangoutschatexportoptions"></a>
<a id="schema_HangoutsChatExportOptions"></a>
<a id="tocShangoutschatexportoptions"></a>
<a id="tocshangoutschatexportoptions"></a>

```json
{
  "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
}
```

Options for Chat exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportFormat|string|false|none|The file format for exported messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportFormat|EXPORT_FORMAT_UNSPECIFIED|
|exportFormat|MBOX|
|exportFormat|PST|

<h2 id="tocS_HangoutsChatInfo">HangoutsChatInfo</h2>
<!-- backwards compatibility -->
<a id="schemahangoutschatinfo"></a>
<a id="schema_HangoutsChatInfo"></a>
<a id="tocShangoutschatinfo"></a>
<a id="tocshangoutschatinfo"></a>

```json
{
  "roomId": [
    "string"
  ]
}
```

The Chat spaces to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roomId|[string]|false|none|A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/chat). There is a limit of exporting from 500 Chat spaces per request.|

<h2 id="tocS_HangoutsChatOptions">HangoutsChatOptions</h2>
<!-- backwards compatibility -->
<a id="schemahangoutschatoptions"></a>
<a id="schema_HangoutsChatOptions"></a>
<a id="tocShangoutschatoptions"></a>
<a id="tocshangoutschatoptions"></a>

```json
{
  "includeRooms": true
}
```

Additional options for Google Chat search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeRooms|boolean|false|none|For searches by account or organizational unit, set to **true** to include rooms.|

<h2 id="tocS_HeldAccount">HeldAccount</h2>
<!-- backwards compatibility -->
<a id="schemaheldaccount"></a>
<a id="schema_HeldAccount"></a>
<a id="tocSheldaccount"></a>
<a id="tocsheldaccount"></a>

```json
{
  "accountId": "string",
  "email": "string",
  "firstName": "string",
  "holdTime": "string",
  "lastName": "string"
}
```

An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).|
|email|string|false|none|The primary email address of the account. If used as an input, this takes precedence over **accountId**.|
|firstName|string|false|none|Output only. The first name of the account holder.|
|holdTime|string(google-datetime)|false|none|Output only. When the account was put on hold.|
|lastName|string|false|none|Output only. The last name of the account holder.|

<h2 id="tocS_HeldDriveQuery">HeldDriveQuery</h2>
<!-- backwards compatibility -->
<a id="schemahelddrivequery"></a>
<a id="schema_HeldDriveQuery"></a>
<a id="tocShelddrivequery"></a>
<a id="tocshelddrivequery"></a>

```json
{
  "includeSharedDriveFiles": true,
  "includeTeamDriveFiles": true
}
```

Options for Drive holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeSharedDriveFiles|boolean|false|none|To include files in shared drives in the hold, set to **true**.|
|includeTeamDriveFiles|boolean|false|none|To include files in Team Drives in the hold, set to **true**.|

<h2 id="tocS_HeldGroupsQuery">HeldGroupsQuery</h2>
<!-- backwards compatibility -->
<a id="schemaheldgroupsquery"></a>
<a id="schema_HeldGroupsQuery"></a>
<a id="tocSheldgroupsquery"></a>
<a id="tocsheldgroupsquery"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "terms": "string"
}
```

Query options for group holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|startTime|string(google-datetime)|false|none|The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|terms|string|false|none|The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.|

<h2 id="tocS_HeldHangoutsChatQuery">HeldHangoutsChatQuery</h2>
<!-- backwards compatibility -->
<a id="schemaheldhangoutschatquery"></a>
<a id="schema_HeldHangoutsChatQuery"></a>
<a id="tocSheldhangoutschatquery"></a>
<a id="tocsheldhangoutschatquery"></a>

```json
{
  "includeRooms": true
}
```

Options for Chat holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeRooms|boolean|false|none|To include messages in Chat spaces the user was a member of, set to **true**.|

<h2 id="tocS_HeldMailQuery">HeldMailQuery</h2>
<!-- backwards compatibility -->
<a id="schemaheldmailquery"></a>
<a id="schema_HeldMailQuery"></a>
<a id="tocSheldmailquery"></a>
<a id="tocsheldmailquery"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "terms": "string"
}
```

Query options for Gmail holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|startTime|string(google-datetime)|false|none|The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|terms|string|false|none|The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.|

<h2 id="tocS_HeldOrgUnit">HeldOrgUnit</h2>
<!-- backwards compatibility -->
<a id="schemaheldorgunit"></a>
<a id="schema_HeldOrgUnit"></a>
<a id="tocSheldorgunit"></a>
<a id="tocsheldorgunit"></a>

```json
{
  "holdTime": "string",
  "orgUnitId": "string"
}
```

The organizational unit covered by a hold. This structure is immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holdTime|string(google-datetime)|false|none|When the organizational unit was put on hold. This property is immutable.|
|orgUnitId|string|false|none|The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).|

<h2 id="tocS_HeldVoiceQuery">HeldVoiceQuery</h2>
<!-- backwards compatibility -->
<a id="schemaheldvoicequery"></a>
<a id="schema_HeldVoiceQuery"></a>
<a id="tocSheldvoicequery"></a>
<a id="tocsheldvoicequery"></a>

```json
{
  "coveredData": [
    "COVERED_DATA_UNSPECIFIED"
  ]
}
```

Options for Voice holds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coveredData|[string]|false|none|A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|coveredData|COVERED_DATA_UNSPECIFIED|
|coveredData|TEXT_MESSAGES|
|coveredData|VOICEMAILS|
|coveredData|CALL_LOGS|

<h2 id="tocS_Hold">Hold</h2>
<!-- backwards compatibility -->
<a id="schemahold"></a>
<a id="schema_Hold"></a>
<a id="tocShold"></a>
<a id="tocshold"></a>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ],
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "holdId": "string",
  "name": "string",
  "orgUnit": {
    "holdTime": "string",
    "orgUnitId": "string"
  },
  "query": {
    "driveQuery": {
      "includeSharedDriveFiles": true,
      "includeTeamDriveFiles": true
    },
    "groupsQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "hangoutsChatQuery": {
      "includeRooms": true
    },
    "mailQuery": {
      "endTime": "string",
      "startTime": "string",
      "terms": "string"
    },
    "voiceQuery": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "updateTime": "string"
}
```

A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[HeldAccount](#schemaheldaccount)]|false|none|If set, the hold applies to the specified accounts and **orgUnit** must be empty.|
|corpus|string|false|none|The service to be searched.|
|holdId|string|false|none|The unique immutable ID of the hold. Assigned during creation.|
|name|string|false|none|The name of the hold.|
|orgUnit|[HeldOrgUnit](#schemaheldorgunit)|false|none|If set, the hold applies to all members of the organizational unit and **accounts** must be empty. This property is mutable. For Groups holds, set **accounts**.|
|query|[CorpusQuery](#schemacorpusquery)|false|none|Service-specific options. If set, **CorpusQuery** must match **CorpusType**.|
|updateTime|string(google-datetime)|false|none|The last time this hold was modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|corpus|CORPUS_TYPE_UNSPECIFIED|
|corpus|DRIVE|
|corpus|MAIL|
|corpus|GROUPS|
|corpus|HANGOUTS_CHAT|
|corpus|VOICE|

<h2 id="tocS_ListExportsResponse">ListExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexportsresponse"></a>
<a id="schema_ListExportsResponse"></a>
<a id="tocSlistexportsresponse"></a>
<a id="tocslistexportsresponse"></a>

```json
{
  "exports": [
    {
      "cloudStorageSink": {
        "files": [
          {
            "bucketName": "string",
            "md5Hash": "string",
            "objectName": "string",
            "size": "string"
          }
        ]
      },
      "createTime": "string",
      "exportOptions": {
        "driveOptions": {
          "includeAccessInfo": true
        },
        "groupsOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        },
        "hangoutsChatOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        },
        "mailOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
          "showConfidentialModeContent": true,
          "useNewExport": true
        },
        "region": "EXPORT_REGION_UNSPECIFIED",
        "voiceOptions": {
          "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
        }
      },
      "id": "string",
      "matterId": "string",
      "name": "string",
      "query": {
        "accountInfo": {
          "emails": [
            "string"
          ]
        },
        "corpus": "CORPUS_TYPE_UNSPECIFIED",
        "dataScope": "DATA_SCOPE_UNSPECIFIED",
        "driveOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "includeSharedDrives": true,
          "includeTeamDrives": true,
          "versionDate": "string"
        },
        "endTime": "string",
        "hangoutsChatInfo": {
          "roomId": [
            "string"
          ]
        },
        "hangoutsChatOptions": {
          "includeRooms": true
        },
        "mailOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "excludeDrafts": true
        },
        "method": "SEARCH_METHOD_UNSPECIFIED",
        "orgUnitInfo": {
          "orgUnitId": "string"
        },
        "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
        "sharedDriveInfo": {
          "sharedDriveIds": [
            "string"
          ]
        },
        "sitesUrlInfo": {
          "urls": [
            "string"
          ]
        },
        "startTime": "string",
        "teamDriveInfo": {
          "teamDriveIds": [
            "string"
          ]
        },
        "terms": "string",
        "timeZone": "string",
        "voiceOptions": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "requester": {
        "displayName": "string",
        "email": "string"
      },
      "stats": {
        "exportedArtifactCount": "string",
        "sizeInBytes": "string",
        "totalArtifactCount": "string"
      },
      "status": "EXPORT_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The exports for a matter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exports|[[Export](#schemaexport)]|false|none|The list of exports.|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list.|

<h2 id="tocS_ListHeldAccountsResponse">ListHeldAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistheldaccountsresponse"></a>
<a id="schema_ListHeldAccountsResponse"></a>
<a id="tocSlistheldaccountsresponse"></a>
<a id="tocslistheldaccountsresponse"></a>

```json
{
  "accounts": [
    {
      "accountId": "string",
      "email": "string",
      "firstName": "string",
      "holdTime": "string",
      "lastName": "string"
    }
  ]
}
```

Returns a list of the accounts covered by a hold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[HeldAccount](#schemaheldaccount)]|false|none|The held accounts on a hold.|

<h2 id="tocS_ListHoldsResponse">ListHoldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistholdsresponse"></a>
<a id="schema_ListHoldsResponse"></a>
<a id="tocSlistholdsresponse"></a>
<a id="tocslistholdsresponse"></a>

```json
{
  "holds": [
    {
      "accounts": [
        {
          "accountId": "string",
          "email": "string",
          "firstName": "string",
          "holdTime": "string",
          "lastName": "string"
        }
      ],
      "corpus": "CORPUS_TYPE_UNSPECIFIED",
      "holdId": "string",
      "name": "string",
      "orgUnit": {
        "holdTime": "string",
        "orgUnitId": "string"
      },
      "query": {
        "driveQuery": {
          "includeSharedDriveFiles": true,
          "includeTeamDriveFiles": true
        },
        "groupsQuery": {
          "endTime": "string",
          "startTime": "string",
          "terms": "string"
        },
        "hangoutsChatQuery": {
          "includeRooms": true
        },
        "mailQuery": {
          "endTime": "string",
          "startTime": "string",
          "terms": "string"
        },
        "voiceQuery": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The holds for a matter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holds|[[Hold](#schemahold)]|false|none|The list of holds.|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.|

<h2 id="tocS_ListMattersResponse">ListMattersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmattersresponse"></a>
<a id="schema_ListMattersResponse"></a>
<a id="tocSlistmattersresponse"></a>
<a id="tocslistmattersresponse"></a>

```json
{
  "matters": [
    {
      "description": "string",
      "matterId": "string",
      "matterPermissions": [
        {
          "accountId": "string",
          "role": "ROLE_UNSPECIFIED"
        }
      ],
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Provides the list of matters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matters|[[Matter](#schemamatter)]|false|none|List of matters.|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list.|

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

<h2 id="tocS_ListSavedQueriesResponse">ListSavedQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsavedqueriesresponse"></a>
<a id="schema_ListSavedQueriesResponse"></a>
<a id="tocSlistsavedqueriesresponse"></a>
<a id="tocslistsavedqueriesresponse"></a>

```json
{
  "nextPageToken": "string",
  "savedQueries": [
    {
      "createTime": "string",
      "displayName": "string",
      "matterId": "string",
      "query": {
        "accountInfo": {
          "emails": [
            "string"
          ]
        },
        "corpus": "CORPUS_TYPE_UNSPECIFIED",
        "dataScope": "DATA_SCOPE_UNSPECIFIED",
        "driveOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "includeSharedDrives": true,
          "includeTeamDrives": true,
          "versionDate": "string"
        },
        "endTime": "string",
        "hangoutsChatInfo": {
          "roomId": [
            "string"
          ]
        },
        "hangoutsChatOptions": {
          "includeRooms": true
        },
        "mailOptions": {
          "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
          "excludeDrafts": true
        },
        "method": "SEARCH_METHOD_UNSPECIFIED",
        "orgUnitInfo": {
          "orgUnitId": "string"
        },
        "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
        "sharedDriveInfo": {
          "sharedDriveIds": [
            "string"
          ]
        },
        "sitesUrlInfo": {
          "urls": [
            "string"
          ]
        },
        "startTime": "string",
        "teamDriveInfo": {
          "teamDriveIds": [
            "string"
          ]
        },
        "terms": "string",
        "timeZone": "string",
        "voiceOptions": {
          "coveredData": [
            "COVERED_DATA_UNSPECIFIED"
          ]
        }
      },
      "savedQueryId": "string"
    }
  ]
}
```

Definition of the response for method ListSaveQuery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list.|
|savedQueries|[[SavedQuery](#schemasavedquery)]|false|none|List of saved queries.|

<h2 id="tocS_MailCountResult">MailCountResult</h2>
<!-- backwards compatibility -->
<a id="schemamailcountresult"></a>
<a id="schema_MailCountResult"></a>
<a id="tocSmailcountresult"></a>
<a id="tocsmailcountresult"></a>

```json
{
  "accountCountErrors": [
    {
      "account": {
        "displayName": "string",
        "email": "string"
      },
      "errorType": "ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "accountCounts": [
    {
      "account": {
        "displayName": "string",
        "email": "string"
      },
      "count": "string"
    }
  ],
  "matchingAccountsCount": "string",
  "nonQueryableAccounts": [
    "string"
  ],
  "queriedAccountsCount": "string"
}
```

Gmail and classic Hangouts-specific count metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCountErrors|[[AccountCountError](#schemaaccountcounterror)]|false|none|Errors occurred when querying these accounts.|
|accountCounts|[[AccountCount](#schemaaccountcount)]|false|none|Subtotal count per matching account that have more than zero messages.|
|matchingAccountsCount|string(int64)|false|none|Total number of accounts that can be queried and have more than zero messages.|
|nonQueryableAccounts|[string]|false|none|When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set.|
|queriedAccountsCount|string(int64)|false|none|Total number of accounts involved in this count operation.|

<h2 id="tocS_MailExportOptions">MailExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemamailexportoptions"></a>
<a id="schema_MailExportOptions"></a>
<a id="tocSmailexportoptions"></a>
<a id="tocsmailexportoptions"></a>

```json
{
  "exportFormat": "EXPORT_FORMAT_UNSPECIFIED",
  "showConfidentialModeContent": true,
  "useNewExport": true
}
```

Options for Gmail exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportFormat|string|false|none|The file format for exported messages.|
|showConfidentialModeContent|boolean|false|none|To export confidential mode content, set to **true**.|
|useNewExport|boolean|false|none|To use the new export system, set to **true**.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportFormat|EXPORT_FORMAT_UNSPECIFIED|
|exportFormat|MBOX|
|exportFormat|PST|

<h2 id="tocS_MailOptions">MailOptions</h2>
<!-- backwards compatibility -->
<a id="schemamailoptions"></a>
<a id="schema_MailOptions"></a>
<a id="tocSmailoptions"></a>
<a id="tocsmailoptions"></a>

```json
{
  "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
  "excludeDrafts": true
}
```

Additional options for Gmail search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientSideEncryptedOption|string|false|none|Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both.|
|excludeDrafts|boolean|false|none|Set to **true** to exclude drafts.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_ANY|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED|
|clientSideEncryptedOption|CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED|

<h2 id="tocS_Matter">Matter</h2>
<!-- backwards compatibility -->
<a id="schemamatter"></a>
<a id="schema_Matter"></a>
<a id="tocSmatter"></a>
<a id="tocsmatter"></a>

```json
{
  "description": "string",
  "matterId": "string",
  "matterPermissions": [
    {
      "accountId": "string",
      "role": "ROLE_UNSPECIFIED"
    }
  ],
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description for the matter.|
|matterId|string|false|none|The matter ID, which is generated by the server. Leave blank when creating a matter.|
|matterPermissions|[[MatterPermission](#schemamatterpermission)]|false|none|Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have.|
|name|string|false|none|The name of the matter.|
|state|string|false|none|The state of the matter.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|OPEN|
|state|CLOSED|
|state|DELETED|

<h2 id="tocS_MatterPermission">MatterPermission</h2>
<!-- backwards compatibility -->
<a id="schemamatterpermission"></a>
<a id="schema_MatterPermission"></a>
<a id="tocSmatterpermission"></a>
<a id="tocsmatterpermission"></a>

```json
{
  "accountId": "string",
  "role": "ROLE_UNSPECIFIED"
}
```

Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/).|
|role|string|false|none|The user's role for the matter.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|COLLABORATOR|
|role|OWNER|

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

<h2 id="tocS_OrgUnitInfo">OrgUnitInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorgunitinfo"></a>
<a id="schema_OrgUnitInfo"></a>
<a id="tocSorgunitinfo"></a>
<a id="tocsorgunitinfo"></a>

```json
{
  "orgUnitId": "string"
}
```

The organizational unit to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orgUnitId|string|false|none|The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/).|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "accountInfo": {
    "emails": [
      "string"
    ]
  },
  "corpus": "CORPUS_TYPE_UNSPECIFIED",
  "dataScope": "DATA_SCOPE_UNSPECIFIED",
  "driveOptions": {
    "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
    "includeSharedDrives": true,
    "includeTeamDrives": true,
    "versionDate": "string"
  },
  "endTime": "string",
  "hangoutsChatInfo": {
    "roomId": [
      "string"
    ]
  },
  "hangoutsChatOptions": {
    "includeRooms": true
  },
  "mailOptions": {
    "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
    "excludeDrafts": true
  },
  "method": "SEARCH_METHOD_UNSPECIFIED",
  "orgUnitInfo": {
    "orgUnitId": "string"
  },
  "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
  "sharedDriveInfo": {
    "sharedDriveIds": [
      "string"
    ]
  },
  "sitesUrlInfo": {
    "urls": [
      "string"
    ]
  },
  "startTime": "string",
  "teamDriveInfo": {
    "teamDriveIds": [
      "string"
    ]
  },
  "terms": "string",
  "timeZone": "string",
  "voiceOptions": {
    "coveredData": [
      "COVERED_DATA_UNSPECIFIED"
    ]
  }
}
```

The query definition used for search and export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountInfo|[AccountInfo](#schemaaccountinfo)|false|none|Required when **SearchMethod** is **ACCOUNT**.|
|corpus|string|false|none|The Google Workspace service to search.|
|dataScope|string|false|none|The data source to search.|
|driveOptions|[DriveOptions](#schemadriveoptions)|false|none|Set Drive search-specific options.|
|endTime|string(google-datetime)|false|none|The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|hangoutsChatInfo|[HangoutsChatInfo](#schemahangoutschatinfo)|false|none|Required when **SearchMethod** is **ROOM**. (read-only)|
|hangoutsChatOptions|[HangoutsChatOptions](#schemahangoutschatoptions)|false|none|Set Chat search-specific options. (read-only)|
|mailOptions|[MailOptions](#schemamailoptions)|false|none|Set Gmail search-specific options.|
|method|string|false|none|The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**.|
|orgUnitInfo|[OrgUnitInfo](#schemaorgunitinfo)|false|none|Required when **SearchMethod** is **ORG_UNIT**.|
|searchMethod|string|false|none|The search method to use.|
|sharedDriveInfo|[SharedDriveInfo](#schemashareddriveinfo)|false|none|Required when **SearchMethod** is **SHARED_DRIVE**.|
|sitesUrlInfo|[SitesUrlInfo](#schemasitesurlinfo)|false|none|Required when **SearchMethod** is **SITES_URL**.|
|startTime|string(google-datetime)|false|none|The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.|
|teamDriveInfo|[TeamDriveInfo](#schemateamdriveinfo)|false|none|Required when **SearchMethod** is **TEAM_DRIVE**.|
|terms|string|false|none|Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results.|
|timeZone|string|false|none|The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time).|
|voiceOptions|[VoiceOptions](#schemavoiceoptions)|false|none|Set Voice search-specific options.|

#### Enumerated Values

|Property|Value|
|---|---|
|corpus|CORPUS_TYPE_UNSPECIFIED|
|corpus|DRIVE|
|corpus|MAIL|
|corpus|GROUPS|
|corpus|HANGOUTS_CHAT|
|corpus|VOICE|
|dataScope|DATA_SCOPE_UNSPECIFIED|
|dataScope|ALL_DATA|
|dataScope|HELD_DATA|
|dataScope|UNPROCESSED_DATA|
|method|SEARCH_METHOD_UNSPECIFIED|
|method|ACCOUNT|
|method|ORG_UNIT|
|method|TEAM_DRIVE|
|method|ENTIRE_ORG|
|method|ROOM|
|method|SITES_URL|
|method|SHARED_DRIVE|
|searchMethod|SEARCH_METHOD_UNSPECIFIED|
|searchMethod|ACCOUNT|
|searchMethod|ORG_UNIT|
|searchMethod|TEAM_DRIVE|
|searchMethod|ENTIRE_ORG|
|searchMethod|ROOM|
|searchMethod|SITES_URL|
|searchMethod|SHARED_DRIVE|

<h2 id="tocS_RemoveHeldAccountsRequest">RemoveHeldAccountsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveheldaccountsrequest"></a>
<a id="schema_RemoveHeldAccountsRequest"></a>
<a id="tocSremoveheldaccountsrequest"></a>
<a id="tocsremoveheldaccountsrequest"></a>

```json
{
  "accountIds": [
    "string"
  ]
}
```

Remove a list of accounts from a hold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[string]|false|none|The account IDs of the accounts to remove from the hold.|

<h2 id="tocS_RemoveHeldAccountsResponse">RemoveHeldAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveheldaccountsresponse"></a>
<a id="schema_RemoveHeldAccountsResponse"></a>
<a id="tocSremoveheldaccountsresponse"></a>
<a id="tocsremoveheldaccountsresponse"></a>

```json
{
  "statuses": [
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
  ]
}
```

Response for batch delete held accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|[[Status](#schemastatus)]|false|none|A list of statuses for the deleted accounts. Results have the same order as the request.|

<h2 id="tocS_RemoveMatterPermissionsRequest">RemoveMatterPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovematterpermissionsrequest"></a>
<a id="schema_RemoveMatterPermissionsRequest"></a>
<a id="tocSremovematterpermissionsrequest"></a>
<a id="tocsremovematterpermissionsrequest"></a>

```json
{
  "accountId": "string"
}
```

Remove an account as a matter collaborator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account ID.|

<h2 id="tocS_ReopenMatterRequest">ReopenMatterRequest</h2>
<!-- backwards compatibility -->
<a id="schemareopenmatterrequest"></a>
<a id="schema_ReopenMatterRequest"></a>
<a id="tocSreopenmatterrequest"></a>
<a id="tocsreopenmatterrequest"></a>

```json
{}
```

Reopen a matter by ID.

<h2 id="tocS_ReopenMatterResponse">ReopenMatterResponse</h2>
<!-- backwards compatibility -->
<a id="schemareopenmatterresponse"></a>
<a id="schema_ReopenMatterResponse"></a>
<a id="tocSreopenmatterresponse"></a>
<a id="tocsreopenmatterresponse"></a>

```json
{
  "matter": {
    "description": "string",
    "matterId": "string",
    "matterPermissions": [
      {
        "accountId": "string",
        "role": "ROLE_UNSPECIFIED"
      }
    ],
    "name": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Response to a ReopenMatterRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matter|[Matter](#schemamatter)|false|none|The updated matter, with state **OPEN**.|

<h2 id="tocS_SavedQuery">SavedQuery</h2>
<!-- backwards compatibility -->
<a id="schemasavedquery"></a>
<a id="schema_SavedQuery"></a>
<a id="tocSsavedquery"></a>
<a id="tocssavedquery"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "matterId": "string",
  "query": {
    "accountInfo": {
      "emails": [
        "string"
      ]
    },
    "corpus": "CORPUS_TYPE_UNSPECIFIED",
    "dataScope": "DATA_SCOPE_UNSPECIFIED",
    "driveOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "includeSharedDrives": true,
      "includeTeamDrives": true,
      "versionDate": "string"
    },
    "endTime": "string",
    "hangoutsChatInfo": {
      "roomId": [
        "string"
      ]
    },
    "hangoutsChatOptions": {
      "includeRooms": true
    },
    "mailOptions": {
      "clientSideEncryptedOption": "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
      "excludeDrafts": true
    },
    "method": "SEARCH_METHOD_UNSPECIFIED",
    "orgUnitInfo": {
      "orgUnitId": "string"
    },
    "searchMethod": "SEARCH_METHOD_UNSPECIFIED",
    "sharedDriveInfo": {
      "sharedDriveIds": [
        "string"
      ]
    },
    "sitesUrlInfo": {
      "urls": [
        "string"
      ]
    },
    "startTime": "string",
    "teamDriveInfo": {
      "teamDriveIds": [
        "string"
      ]
    },
    "terms": "string",
    "timeZone": "string",
    "voiceOptions": {
      "coveredData": [
        "COVERED_DATA_UNSPECIFIED"
      ]
    }
  },
  "savedQueryId": "string"
}
```

The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The server-generated timestamp when the saved query was created.|
|displayName|string|false|none|The name of the saved query.|
|matterId|string|false|none|Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL.|
|query|[Query](#schemaquery)|false|none|The search parameters of the saved query.|
|savedQueryId|string|false|none|A unique identifier for the saved query.|

<h2 id="tocS_SharedDriveInfo">SharedDriveInfo</h2>
<!-- backwards compatibility -->
<a id="schemashareddriveinfo"></a>
<a id="schema_SharedDriveInfo"></a>
<a id="tocSshareddriveinfo"></a>
<a id="tocsshareddriveinfo"></a>

```json
{
  "sharedDriveIds": [
    "string"
  ]
}
```

The shared drives to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharedDriveIds|[string]|false|none|A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive).|

<h2 id="tocS_SitesUrlInfo">SitesUrlInfo</h2>
<!-- backwards compatibility -->
<a id="schemasitesurlinfo"></a>
<a id="schema_SitesUrlInfo"></a>
<a id="tocSsitesurlinfo"></a>
<a id="tocssitesurlinfo"></a>

```json
{
  "urls": [
    "string"
  ]
}
```

The published site URLs of new Google Sites to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[string]|false|none|A list of published site URLs.|

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

<h2 id="tocS_TeamDriveInfo">TeamDriveInfo</h2>
<!-- backwards compatibility -->
<a id="schemateamdriveinfo"></a>
<a id="schema_TeamDriveInfo"></a>
<a id="tocSteamdriveinfo"></a>
<a id="tocsteamdriveinfo"></a>

```json
{
  "teamDriveIds": [
    "string"
  ]
}
```

Team Drives to search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamDriveIds|[string]|false|none|List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive).|

<h2 id="tocS_UndeleteMatterRequest">UndeleteMatterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletematterrequest"></a>
<a id="schema_UndeleteMatterRequest"></a>
<a id="tocSundeletematterrequest"></a>
<a id="tocsundeletematterrequest"></a>

```json
{}
```

Undelete a matter by ID.

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "displayName": "string",
  "email": "string"
}
```

User's information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The displayed name of the user.|
|email|string|false|none|The email address of the user.|

<h2 id="tocS_VoiceExportOptions">VoiceExportOptions</h2>
<!-- backwards compatibility -->
<a id="schemavoiceexportoptions"></a>
<a id="schema_VoiceExportOptions"></a>
<a id="tocSvoiceexportoptions"></a>
<a id="tocsvoiceexportoptions"></a>

```json
{
  "exportFormat": "EXPORT_FORMAT_UNSPECIFIED"
}
```

The options for Voice exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exportFormat|string|false|none|The file format for exported text messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|exportFormat|EXPORT_FORMAT_UNSPECIFIED|
|exportFormat|MBOX|
|exportFormat|PST|

<h2 id="tocS_VoiceOptions">VoiceOptions</h2>
<!-- backwards compatibility -->
<a id="schemavoiceoptions"></a>
<a id="schema_VoiceOptions"></a>
<a id="tocSvoiceoptions"></a>
<a id="tocsvoiceoptions"></a>

```json
{
  "coveredData": [
    "COVERED_DATA_UNSPECIFIED"
  ]
}
```

Additional options for Voice search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coveredData|[string]|false|none|Datatypes to search|

#### Enumerated Values

|Property|Value|
|---|---|
|coveredData|COVERED_DATA_UNSPECIFIED|
|coveredData|TEXT_MESSAGES|
|coveredData|VOICEMAILS|
|coveredData|CALL_LOGS|
