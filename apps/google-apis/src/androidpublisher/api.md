<h1 id="google-play-android-developer-api">Google Play Android Developer API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Lets Android application developers access their Google Play accounts. At a high level, the expected workflow is to "insert" an Edit, make changes as necessary, and then "commit" it.

Base URLs:

* <a href="https://androidpublisher.googleapis.com/">https://androidpublisher.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/android-publisher">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

<h1 id="google-play-android-developer-api-applications">applications</h1>

## androidpublisher.applications.deviceTierConfigs.list

<a id="opIdandroidpublisher.applications.deviceTierConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/deviceTierConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/deviceTierConfigs`

Returns created device tier configs, ordered by descending creation time.

<h3 id="androidpublisherapplicationsdevicetierconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|pageSize|query|integer|false|The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.|
|pageToken|query|string|false|A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.|
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
  "deviceTierConfigs": [
    {
      "deviceGroups": [
        {
          "deviceSelectors": [
            {
              "deviceRam": {
                "maxBytes": "string",
                "minBytes": "string"
              },
              "excludedDeviceIds": [
                {
                  "buildBrand": "string",
                  "buildDevice": "string"
                }
              ],
              "forbiddenSystemFeatures": [
                {
                  "name": "string"
                }
              ],
              "includedDeviceIds": [
                {
                  "buildBrand": "string",
                  "buildDevice": "string"
                }
              ],
              "requiredSystemFeatures": [
                {
                  "name": "string"
                }
              ]
            }
          ],
          "name": "string"
        }
      ],
      "deviceTierConfigId": "string",
      "deviceTierSet": {
        "deviceTiers": [
          {
            "deviceGroupNames": [
              "string"
            ],
            "level": 0
          }
        ]
      },
      "userCountrySets": [
        {
          "countryCodes": [
            "string"
          ],
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androidpublisherapplicationsdevicetierconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeviceTierConfigsResponse](#schemalistdevicetierconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.applications.deviceTierConfigs.create

<a id="opIdandroidpublisher.applications.deviceTierConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/deviceTierConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceGroups": [
      {
        "deviceSelectors": [
          {
            "deviceRam": {
              "maxBytes": "string",
              "minBytes": "string"
            },
            "excludedDeviceIds": [
              {
                "buildBrand": "string",
                "buildDevice": "string"
              }
            ],
            "forbiddenSystemFeatures": [
              {
                "name": "string"
              }
            ],
            "includedDeviceIds": [
              {
                "buildBrand": "string",
                "buildDevice": "string"
              }
            ],
            "requiredSystemFeatures": [
              {
                "name": "string"
              }
            ]
          }
        ],
        "name": "string"
      }
    ],
    "deviceTierSet": {
      "deviceTiers": [
        {
          "deviceGroupNames": [
            "string"
          ],
          "level": 0
        }
      ]
    },
    "userCountrySets": [
      {
        "countryCodes": [
          "string"
        ],
        "name": "string"
      }
    ]
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/deviceTierConfigs`

Creates a new device tier config for an app.

> Body parameter

```json
{
  "deviceGroups": [
    {
      "deviceSelectors": [
        {
          "deviceRam": {
            "maxBytes": "string",
            "minBytes": "string"
          },
          "excludedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "forbiddenSystemFeatures": [
            {
              "name": "string"
            }
          ],
          "includedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "requiredSystemFeatures": [
            {
              "name": "string"
            }
          ]
        }
      ],
      "name": "string"
    }
  ],
  "deviceTierSet": {
    "deviceTiers": [
      {
        "deviceGroupNames": [
          "string"
        ],
        "level": 0
      }
    ]
  },
  "userCountrySets": [
    {
      "countryCodes": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

<h3 id="androidpublisherapplicationsdevicetierconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|allowUnknownDevices|query|boolean|false|Whether the service should accept device IDs that are unknown to Play's device catalog.|
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
|body|body|[DeviceTierConfig](#schemadevicetierconfig)|false|none|
|» deviceGroups|body|[[DeviceGroup](#schemadevicegroup)]|false|Definition of device groups for the app.|
|» deviceTierSet|body|[DeviceTierSet](#schemadevicetierset)|false|Definition of the set of device tiers for the app.|
|» userCountrySets|body|[[UserCountrySet](#schemausercountryset)]|false|Definition of user country sets for the app.|

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
  "deviceGroups": [
    {
      "deviceSelectors": [
        {
          "deviceRam": {
            "maxBytes": "string",
            "minBytes": "string"
          },
          "excludedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "forbiddenSystemFeatures": [
            {
              "name": "string"
            }
          ],
          "includedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "requiredSystemFeatures": [
            {
              "name": "string"
            }
          ]
        }
      ],
      "name": "string"
    }
  ],
  "deviceTierConfigId": "string",
  "deviceTierSet": {
    "deviceTiers": [
      {
        "deviceGroupNames": [
          "string"
        ],
        "level": 0
      }
    ]
  },
  "userCountrySets": [
    {
      "countryCodes": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

<h3 id="androidpublisherapplicationsdevicetierconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceTierConfig](#schemadevicetierconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.applications.deviceTierConfigs.get

<a id="opIdandroidpublisher.applications.deviceTierConfigs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/deviceTierConfigs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}`

Returns a particular device tier config.

<h3 id="androidpublisherapplicationsdevicetierconfigsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|deviceTierConfigId|path|string|true|Required. Id of an existing device tier config.|
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
  "deviceGroups": [
    {
      "deviceSelectors": [
        {
          "deviceRam": {
            "maxBytes": "string",
            "minBytes": "string"
          },
          "excludedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "forbiddenSystemFeatures": [
            {
              "name": "string"
            }
          ],
          "includedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "requiredSystemFeatures": [
            {
              "name": "string"
            }
          ]
        }
      ],
      "name": "string"
    }
  ],
  "deviceTierConfigId": "string",
  "deviceTierSet": {
    "deviceTiers": [
      {
        "deviceGroupNames": [
          "string"
        ],
        "level": 0
      }
    ]
  },
  "userCountrySets": [
    {
      "countryCodes": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

<h3 id="androidpublisherapplicationsdevicetierconfigsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceTierConfig](#schemadevicetierconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-edits">edits</h1>

## androidpublisher.edits.insert

<a id="opIdandroidpublisher.edits.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/edits`

Creates a new edit for an app.

> Body parameter

```json
{}
```

<h3 id="androidpublishereditsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
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
|body|body|[AppEdit](#schemaappedit)|false|none|

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
  "expiryTimeSeconds": "string",
  "id": "string"
}
```

<h3 id="androidpublishereditsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppEdit](#schemaappedit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.get

<a id="opIdandroidpublisher.edits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}`

Gets an app edit.

<h3 id="androidpublishereditsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "expiryTimeSeconds": "string",
  "id": "string"
}
```

<h3 id="androidpublishereditsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppEdit](#schemaappedit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.delete

<a id="opIdandroidpublisher.edits.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/edits/{editId}`

Deletes an app edit.

<h3 id="androidpublishereditsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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

<h3 id="androidpublishereditsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.apks.list

<a id="opIdandroidpublisher.edits.apks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks`

Lists all current APKs of the app and edit.

<h3 id="androidpublishereditsapkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "apks": [
    {
      "binary": {
        "sha1": "string",
        "sha256": "string"
      },
      "versionCode": 0
    }
  ],
  "kind": "string"
}
```

<h3 id="androidpublishereditsapkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApksListResponse](#schemaapkslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.apks.upload

<a id="opIdandroidpublisher.edits.apks.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks`

Uploads an APK and adds to the current edit.

<h3 id="androidpublishereditsapksupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "binary": {
    "sha1": "string",
    "sha256": "string"
  },
  "versionCode": 0
}
```

<h3 id="androidpublishereditsapksupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Apk](#schemaapk)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.apks.addexternallyhosted

<a id="opIdandroidpublisher.edits.apks.addexternallyhosted"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/externallyHosted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externallyHostedApk": {
      "applicationLabel": "string",
      "certificateBase64s": [
        "string"
      ],
      "externallyHostedUrl": "string",
      "fileSha1Base64": "string",
      "fileSha256Base64": "string",
      "fileSize": "string",
      "iconBase64": "string",
      "maximumSdk": 0,
      "minimumSdk": 0,
      "nativeCodes": [
        "string"
      ],
      "packageName": "string",
      "usesFeatures": [
        "string"
      ],
      "usesPermissions": [
        {
          "maxSdkVersion": 0,
          "name": "string"
        }
      ],
      "versionCode": 0,
      "versionName": "string"
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted`

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

> Body parameter

```json
{
  "externallyHostedApk": {
    "applicationLabel": "string",
    "certificateBase64s": [
      "string"
    ],
    "externallyHostedUrl": "string",
    "fileSha1Base64": "string",
    "fileSha256Base64": "string",
    "fileSize": "string",
    "iconBase64": "string",
    "maximumSdk": 0,
    "minimumSdk": 0,
    "nativeCodes": [
      "string"
    ],
    "packageName": "string",
    "usesFeatures": [
      "string"
    ],
    "usesPermissions": [
      {
        "maxSdkVersion": 0,
        "name": "string"
      }
    ],
    "versionCode": 0,
    "versionName": "string"
  }
}
```

<h3 id="androidpublishereditsapksaddexternallyhosted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
|body|body|[ApksAddExternallyHostedRequest](#schemaapksaddexternallyhostedrequest)|false|none|
|» externallyHostedApk|body|[ExternallyHostedApk](#schemaexternallyhostedapk)|false|The definition of the externally-hosted APK and where it is located.|

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
  "externallyHostedApk": {
    "applicationLabel": "string",
    "certificateBase64s": [
      "string"
    ],
    "externallyHostedUrl": "string",
    "fileSha1Base64": "string",
    "fileSha256Base64": "string",
    "fileSize": "string",
    "iconBase64": "string",
    "maximumSdk": 0,
    "minimumSdk": 0,
    "nativeCodes": [
      "string"
    ],
    "packageName": "string",
    "usesFeatures": [
      "string"
    ],
    "usesPermissions": [
      {
        "maxSdkVersion": 0,
        "name": "string"
      }
    ],
    "versionCode": 0,
    "versionName": "string"
  }
}
```

<h3 id="androidpublishereditsapksaddexternallyhosted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApksAddExternallyHostedResponse](#schemaapksaddexternallyhostedresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.deobfuscationfiles.upload

<a id="opIdandroidpublisher.edits.deobfuscationfiles.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/0/deobfuscationFiles/deobfuscationFileTypeUnspecified \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}`

Uploads a new deobfuscation file and attaches to the specified APK.

<h3 id="androidpublishereditsdeobfuscationfilesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Unique identifier for the Android app.|
|editId|path|string|true|Unique identifier for this edit.|
|apkVersionCode|path|integer|true|The version code of the APK whose Deobfuscation File is being uploaded.|
|deobfuscationFileType|path|string|true|The type of the deobfuscation file.|
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
|deobfuscationFileType|deobfuscationFileTypeUnspecified|
|deobfuscationFileType|proguard|
|deobfuscationFileType|nativeCode|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deobfuscationFile": {
    "symbolType": "deobfuscationFileTypeUnspecified"
  }
}
```

<h3 id="androidpublishereditsdeobfuscationfilesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeobfuscationFilesUploadResponse](#schemadeobfuscationfilesuploadresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.expansionfiles.get

<a id="opIdandroidpublisher.edits.expansionfiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/0/expansionFiles/expansionFileTypeUnspecified \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}`

Fetches the expansion file configuration for the specified APK.

<h3 id="androidpublishereditsexpansionfilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|apkVersionCode|path|integer|true|The version code of the APK whose expansion file configuration is being read or modified.|
|expansionFileType|path|string|true|The file type of the file configuration which is being read or modified.|
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
|expansionFileType|expansionFileTypeUnspecified|
|expansionFileType|main|
|expansionFileType|patch|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

<h3 id="androidpublishereditsexpansionfilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExpansionFile](#schemaexpansionfile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.expansionfiles.update

<a id="opIdandroidpublisher.edits.expansionfiles.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/0/expansionFiles/expansionFileTypeUnspecified \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fileSize": "string",
    "referencesVersion": 0
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}`

Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

> Body parameter

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

<h3 id="androidpublishereditsexpansionfilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|apkVersionCode|path|integer|true|The version code of the APK whose expansion file configuration is being read or modified.|
|expansionFileType|path|string|true|The file type of the file configuration which is being read or modified.|
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
|body|body|[ExpansionFile](#schemaexpansionfile)|false|none|
|» fileSize|body|string(int64)|false|If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.|
|» referencesVersion|body|integer(int32)|false|If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expansionFileType|expansionFileTypeUnspecified|
|expansionFileType|main|
|expansionFileType|patch|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

<h3 id="androidpublishereditsexpansionfilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExpansionFile](#schemaexpansionfile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.expansionfiles.upload

<a id="opIdandroidpublisher.edits.expansionfiles.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/0/expansionFiles/expansionFileTypeUnspecified \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}`

Uploads a new expansion file and attaches to the specified APK.

<h3 id="androidpublishereditsexpansionfilesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|apkVersionCode|path|integer|true|The version code of the APK whose expansion file configuration is being read or modified.|
|expansionFileType|path|string|true|The file type of the expansion file configuration which is being updated.|
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
|expansionFileType|expansionFileTypeUnspecified|
|expansionFileType|main|
|expansionFileType|patch|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "expansionFile": {
    "fileSize": "string",
    "referencesVersion": 0
  }
}
```

<h3 id="androidpublishereditsexpansionfilesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExpansionFilesUploadResponse](#schemaexpansionfilesuploadresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.expansionfiles.patch

<a id="opIdandroidpublisher.edits.expansionfiles.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/apks/0/expansionFiles/expansionFileTypeUnspecified \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fileSize": "string",
    "referencesVersion": 0
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}`

Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

> Body parameter

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

<h3 id="androidpublishereditsexpansionfilespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|apkVersionCode|path|integer|true|The version code of the APK whose expansion file configuration is being read or modified.|
|expansionFileType|path|string|true|The file type of the expansion file configuration which is being updated.|
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
|body|body|[ExpansionFile](#schemaexpansionfile)|false|none|
|» fileSize|body|string(int64)|false|If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.|
|» referencesVersion|body|integer(int32)|false|If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|expansionFileType|expansionFileTypeUnspecified|
|expansionFileType|main|
|expansionFileType|patch|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

<h3 id="androidpublishereditsexpansionfilespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExpansionFile](#schemaexpansionfile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.bundles.list

<a id="opIdandroidpublisher.edits.bundles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/bundles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles`

Lists all current Android App Bundles of the app and edit.

<h3 id="androidpublishereditsbundleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "bundles": [
    {
      "sha1": "string",
      "sha256": "string",
      "versionCode": 0
    }
  ],
  "kind": "string"
}
```

<h3 id="androidpublishereditsbundleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BundlesListResponse](#schemabundleslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.bundles.upload

<a id="opIdandroidpublisher.edits.bundles.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/bundles \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles`

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

<h3 id="androidpublishereditsbundlesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|ackBundleInstallationWarning|query|boolean|false|Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).|
|deviceTierConfigId|query|string|false|Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.|
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
  "sha1": "string",
  "sha256": "string",
  "versionCode": 0
}
```

<h3 id="androidpublishereditsbundlesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Bundle](#schemabundle)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.countryavailability.get

<a id="opIdandroidpublisher.edits.countryavailability.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/countryAvailability/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}`

Gets country availability.

<h3 id="androidpublishereditscountryavailabilityget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|The track to read from.|
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
  "countries": [
    {
      "countryCode": "string"
    }
  ],
  "restOfWorld": true,
  "syncWithProduction": true
}
```

<h3 id="androidpublishereditscountryavailabilityget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TrackCountryAvailability](#schematrackcountryavailability)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.details.get

<a id="opIdandroidpublisher.edits.details.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/details`

Gets details of an app.

<h3 id="androidpublishereditsdetailsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

<h3 id="androidpublishereditsdetailsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppDetails](#schemaappdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.details.update

<a id="opIdandroidpublisher.edits.details.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/details \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contactEmail": "string",
    "contactPhone": "string",
    "contactWebsite": "string",
    "defaultLanguage": "string"
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/edits/{editId}/details`

Updates details of an app.

> Body parameter

```json
{
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

<h3 id="androidpublishereditsdetailsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
|body|body|[AppDetails](#schemaappdetails)|false|none|
|» contactEmail|body|string|false|The user-visible support email for this app.|
|» contactPhone|body|string|false|The user-visible support telephone number for this app.|
|» contactWebsite|body|string|false|The user-visible website for this app.|
|» defaultLanguage|body|string|false|Default language code, in BCP 47 format (eg "en-US").|

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
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

<h3 id="androidpublishereditsdetailsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppDetails](#schemaappdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.details.patch

<a id="opIdandroidpublisher.edits.details.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/details \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contactEmail": "string",
    "contactPhone": "string",
    "contactWebsite": "string",
    "defaultLanguage": "string"
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/edits/{editId}/details`

Patches details of an app.

> Body parameter

```json
{
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

<h3 id="androidpublishereditsdetailspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
|body|body|[AppDetails](#schemaappdetails)|false|none|
|» contactEmail|body|string|false|The user-visible support email for this app.|
|» contactPhone|body|string|false|The user-visible support telephone number for this app.|
|» contactWebsite|body|string|false|The user-visible website for this app.|
|» defaultLanguage|body|string|false|Default language code, in BCP 47 format (eg "en-US").|

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
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

<h3 id="androidpublishereditsdetailspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppDetails](#schemaappdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.list

<a id="opIdandroidpublisher.edits.listings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings`

Lists all localized store listings.

<h3 id="androidpublishereditslistingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "kind": "string",
  "listings": [
    {
      "fullDescription": "string",
      "language": "string",
      "shortDescription": "string",
      "title": "string",
      "video": "string"
    }
  ]
}
```

<h3 id="androidpublishereditslistingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListingsListResponse](#schemalistingslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.deleteall

<a id="opIdandroidpublisher.edits.listings.deleteall"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings`

Deletes all store listings.

<h3 id="androidpublishereditslistingsdeleteall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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

<h3 id="androidpublishereditslistingsdeleteall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.get

<a id="opIdandroidpublisher.edits.listings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}`

Gets a localized store listing.

<h3 id="androidpublishereditslistingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
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
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

<h3 id="androidpublishereditslistingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.update

<a id="opIdandroidpublisher.edits.listings.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fullDescription": "string",
    "language": "string",
    "shortDescription": "string",
    "title": "string",
    "video": "string"
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}`

Creates or updates a localized store listing.

> Body parameter

```json
{
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

<h3 id="androidpublishereditslistingsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
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
|body|body|[Listing](#schemalisting)|false|none|
|» fullDescription|body|string|false|Full description of the app.|
|» language|body|string|false|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
|» shortDescription|body|string|false|Short description of the app.|
|» title|body|string|false|Localized title of the app.|
|» video|body|string|false|URL of a promotional YouTube video for the app.|

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
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

<h3 id="androidpublishereditslistingsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.delete

<a id="opIdandroidpublisher.edits.listings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}`

Deletes a localized store listing.

<h3 id="androidpublishereditslistingsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
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

<h3 id="androidpublishereditslistingsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.listings.patch

<a id="opIdandroidpublisher.edits.listings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fullDescription": "string",
    "language": "string",
    "shortDescription": "string",
    "title": "string",
    "video": "string"
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}`

Patches a localized store listing.

> Body parameter

```json
{
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

<h3 id="androidpublishereditslistingspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
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
|body|body|[Listing](#schemalisting)|false|none|
|» fullDescription|body|string|false|Full description of the app.|
|» language|body|string|false|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
|» shortDescription|body|string|false|Short description of the app.|
|» title|body|string|false|Localized title of the app.|
|» video|body|string|false|URL of a promotional YouTube video for the app.|

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
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

<h3 id="androidpublishereditslistingspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.images.list

<a id="opIdandroidpublisher.edits.images.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string/appImageTypeUnspecified \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}`

Lists all images. The response may be empty.

<h3 id="androidpublishereditsimageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.|
|imageType|path|string|true|Type of the Image. Providing an image type that refers to no images will return an empty response.|
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
|imageType|appImageTypeUnspecified|
|imageType|phoneScreenshots|
|imageType|sevenInchScreenshots|
|imageType|tenInchScreenshots|
|imageType|tvScreenshots|
|imageType|wearScreenshots|
|imageType|icon|
|imageType|featureGraphic|
|imageType|tvBanner|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "id": "string",
      "sha1": "string",
      "sha256": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="androidpublishereditsimageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImagesListResponse](#schemaimageslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.images.upload

<a id="opIdandroidpublisher.edits.images.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string/appImageTypeUnspecified \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}`

Uploads an image of the specified language and image type, and adds to the edit.

<h3 id="androidpublishereditsimagesupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.|
|imageType|path|string|true|Type of the Image.|
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
|imageType|appImageTypeUnspecified|
|imageType|phoneScreenshots|
|imageType|sevenInchScreenshots|
|imageType|tenInchScreenshots|
|imageType|tvScreenshots|
|imageType|wearScreenshots|
|imageType|icon|
|imageType|featureGraphic|
|imageType|tvBanner|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "image": {
    "id": "string",
    "sha1": "string",
    "sha256": "string",
    "url": "string"
  }
}
```

<h3 id="androidpublishereditsimagesupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImagesUploadResponse](#schemaimagesuploadresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.images.deleteall

<a id="opIdandroidpublisher.edits.images.deleteall"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string/appImageTypeUnspecified \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}`

Deletes all images for the specified language and image type. Returns an empty response if no images are found.

<h3 id="androidpublishereditsimagesdeleteall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.|
|imageType|path|string|true|Type of the Image. Providing an image type that refers to no images is a no-op.|
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
|imageType|appImageTypeUnspecified|
|imageType|phoneScreenshots|
|imageType|sevenInchScreenshots|
|imageType|tenInchScreenshots|
|imageType|tvScreenshots|
|imageType|wearScreenshots|
|imageType|icon|
|imageType|featureGraphic|
|imageType|tvBanner|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "deleted": [
    {
      "id": "string",
      "sha1": "string",
      "sha256": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="androidpublishereditsimagesdeleteall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImagesDeleteAllResponse](#schemaimagesdeleteallresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.images.delete

<a id="opIdandroidpublisher.edits.images.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/listings/string/appImageTypeUnspecified/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}`

Deletes the image (specified by id) from the edit.

<h3 id="androidpublishereditsimagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|language|path|string|true|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
|imageType|path|string|true|Type of the Image.|
|imageId|path|string|true|Unique identifier an image within the set of images attached to this edit.|
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
|imageType|appImageTypeUnspecified|
|imageType|phoneScreenshots|
|imageType|sevenInchScreenshots|
|imageType|tenInchScreenshots|
|imageType|tvScreenshots|
|imageType|wearScreenshots|
|imageType|icon|
|imageType|featureGraphic|
|imageType|tvBanner|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="androidpublishereditsimagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.testers.get

<a id="opIdandroidpublisher.edits.testers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/testers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}`

Gets testers. Note: Testers resource does not support email lists.

<h3 id="androidpublishereditstestersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|The track to read from.|
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
  "googleGroups": [
    "string"
  ]
}
```

<h3 id="androidpublishereditstestersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Testers](#schematesters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.testers.update

<a id="opIdandroidpublisher.edits.testers.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/testers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "googleGroups": [
      "string"
    ]
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}`

Updates testers. Note: Testers resource does not support email lists.

> Body parameter

```json
{
  "googleGroups": [
    "string"
  ]
}
```

<h3 id="androidpublishereditstestersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|The track to update.|
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
|body|body|[Testers](#schematesters)|false|none|
|» googleGroups|body|[string]|false|All testing Google Groups, as email addresses.|

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
  "googleGroups": [
    "string"
  ]
}
```

<h3 id="androidpublishereditstestersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Testers](#schematesters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.testers.patch

<a id="opIdandroidpublisher.edits.testers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/testers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "googleGroups": [
      "string"
    ]
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}`

Patches testers. Note: Testers resource does not support email lists.

> Body parameter

```json
{
  "googleGroups": [
    "string"
  ]
}
```

<h3 id="androidpublishereditstesterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|The track to update.|
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
|body|body|[Testers](#schematesters)|false|none|
|» googleGroups|body|[string]|false|All testing Google Groups, as email addresses.|

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
  "googleGroups": [
    "string"
  ]
}
```

<h3 id="androidpublishereditstesterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Testers](#schematesters)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.tracks.list

<a id="opIdandroidpublisher.edits.tracks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks`

Lists all tracks.

<h3 id="androidpublishereditstrackslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "kind": "string",
  "tracks": [
    {
      "releases": [
        {
          "countryTargeting": {
            "countries": [
              "string"
            ],
            "includeRestOfWorld": true
          },
          "inAppUpdatePriority": 0,
          "name": "string",
          "releaseNotes": [
            {
              "language": "string",
              "text": "string"
            }
          ],
          "status": "statusUnspecified",
          "userFraction": 0,
          "versionCodes": [
            "string"
          ]
        }
      ],
      "track": "string"
    }
  ]
}
```

<h3 id="androidpublishereditstrackslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TracksListResponse](#schematrackslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.tracks.get

<a id="opIdandroidpublisher.edits.tracks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/tracks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}`

Gets a track.

<h3 id="androidpublishereditstracksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|
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
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

<h3 id="androidpublishereditstracksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Track](#schematrack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.tracks.update

<a id="opIdandroidpublisher.edits.tracks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/tracks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "releases": [
      {
        "countryTargeting": {
          "countries": [
            "string"
          ],
          "includeRestOfWorld": true
        },
        "inAppUpdatePriority": 0,
        "name": "string",
        "releaseNotes": [
          {
            "language": "string",
            "text": "string"
          }
        ],
        "status": "statusUnspecified",
        "userFraction": 0,
        "versionCodes": [
          "string"
        ]
      }
    ],
    "track": "string"
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}`

Updates a track.

> Body parameter

```json
{
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

<h3 id="androidpublishereditstracksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|
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
|body|body|[Track](#schematrack)|false|none|
|» releases|body|[[TrackRelease](#schematrackrelease)]|false|In a read request, represents all active releases in the track. In an update request, represents desired changes.|
|» track|body|string|false|Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|

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
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

<h3 id="androidpublishereditstracksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Track](#schematrack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.tracks.patch

<a id="opIdandroidpublisher.edits.tracks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string/tracks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "releases": [
      {
        "countryTargeting": {
          "countries": [
            "string"
          ],
          "includeRestOfWorld": true
        },
        "inAppUpdatePriority": 0,
        "name": "string",
        "releaseNotes": [
          {
            "language": "string",
            "text": "string"
          }
        ],
        "status": "statusUnspecified",
        "userFraction": 0,
        "versionCodes": [
          "string"
        ]
      }
    ],
    "track": "string"
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}`

Patches a track.

> Body parameter

```json
{
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

<h3 id="androidpublishereditstrackspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|track|path|string|true|Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|
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
|body|body|[Track](#schematrack)|false|none|
|» releases|body|[[TrackRelease](#schematrackrelease)]|false|In a read request, represents all active releases in the track. In an update request, represents desired changes.|
|» track|body|string|false|Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|

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
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

<h3 id="androidpublishereditstrackspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Track](#schematrack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.commit

<a id="opIdandroidpublisher.edits.commit"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string:commit \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}:commit`

Commits an app edit.

<h3 id="androidpublishereditscommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
|changesNotSentForReview|query|boolean|false|Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.|
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
  "expiryTimeSeconds": "string",
  "id": "string"
}
```

<h3 id="androidpublishereditscommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppEdit](#schemaappedit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.edits.validate

<a id="opIdandroidpublisher.edits.validate"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/edits/string:validate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/edits/{editId}:validate`

Validates an app edit.

<h3 id="androidpublishereditsvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|editId|path|string|true|Identifier of the edit.|
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
  "expiryTimeSeconds": "string",
  "id": "string"
}
```

<h3 id="androidpublishereditsvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppEdit](#schemaappedit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-externaltransactions">externaltransactions</h1>

## androidpublisher.externaltransactions.getexternaltransaction

<a id="opIdandroidpublisher.externaltransactions.getexternaltransaction"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/{name}`

Gets an existing external transaction.

<h3 id="androidpublisherexternaltransactionsgetexternaltransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction}|
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
  "currentPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "currentTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "externalTransactionId": "string",
  "oneTimeTransaction": {
    "externalTransactionToken": "string"
  },
  "originalPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "originalTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "packageName": "string",
  "recurringTransaction": {
    "externalSubscription": {
      "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
    },
    "externalTransactionToken": "string",
    "initialExternalTransactionId": "string"
  },
  "testPurchase": {},
  "transactionState": "TRANSACTION_STATE_UNSPECIFIED",
  "transactionTime": "string",
  "userTaxAddress": {
    "regionCode": "string"
  }
}
```

<h3 id="androidpublisherexternaltransactionsgetexternaltransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExternalTransaction](#schemaexternaltransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.externaltransactions.refundexternaltransaction

<a id="opIdandroidpublisher.externaltransactions.refundexternaltransaction"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string:refund \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fullRefund": {},
    "partialRefund": {
      "refundId": "string",
      "refundPreTaxAmount": {
        "currency": "string",
        "priceMicros": "string"
      }
    },
    "refundTime": "string"
  }'
```

`POST /androidpublisher/v3/{name}:refund`

Refunds or partially refunds an existing external transaction.

> Body parameter

```json
{
  "fullRefund": {},
  "partialRefund": {
    "refundId": "string",
    "refundPreTaxAmount": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "refundTime": "string"
}
```

<h3 id="androidpublisherexternaltransactionsrefundexternaltransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction}|
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
|body|body|[RefundExternalTransactionRequest](#schemarefundexternaltransactionrequest)|false|none|
|» fullRefund|body|[FullRefund](#schemafullrefund)|false|A full-amount refund.|
|» partialRefund|body|[PartialRefund](#schemapartialrefund)|false|A partial refund.|
|» refundTime|body|string(google-datetime)|false|Required. The time that the transaction was refunded.|

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
  "currentPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "currentTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "externalTransactionId": "string",
  "oneTimeTransaction": {
    "externalTransactionToken": "string"
  },
  "originalPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "originalTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "packageName": "string",
  "recurringTransaction": {
    "externalSubscription": {
      "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
    },
    "externalTransactionToken": "string",
    "initialExternalTransactionId": "string"
  },
  "testPurchase": {},
  "transactionState": "TRANSACTION_STATE_UNSPECIFIED",
  "transactionTime": "string",
  "userTaxAddress": {
    "regionCode": "string"
  }
}
```

<h3 id="androidpublisherexternaltransactionsrefundexternaltransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExternalTransaction](#schemaexternaltransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.externaltransactions.createexternaltransaction

<a id="opIdandroidpublisher.externaltransactions.createexternaltransaction"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string/externalTransactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "oneTimeTransaction": {
      "externalTransactionToken": "string"
    },
    "originalPreTaxAmount": {
      "currency": "string",
      "priceMicros": "string"
    },
    "originalTaxAmount": {
      "currency": "string",
      "priceMicros": "string"
    },
    "recurringTransaction": {
      "externalSubscription": {
        "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
      },
      "externalTransactionToken": "string",
      "initialExternalTransactionId": "string"
    },
    "transactionTime": "string",
    "userTaxAddress": {
      "regionCode": "string"
    }
  }'
```

`POST /androidpublisher/v3/{parent}/externalTransactions`

Creates a new external transaction.

> Body parameter

```json
{
  "oneTimeTransaction": {
    "externalTransactionToken": "string"
  },
  "originalPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "originalTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "recurringTransaction": {
    "externalSubscription": {
      "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
    },
    "externalTransactionToken": "string",
    "initialExternalTransactionId": "string"
  },
  "transactionTime": "string",
  "userTaxAddress": {
    "regionCode": "string"
  }
}
```

<h3 id="androidpublisherexternaltransactionscreateexternaltransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this external transaction will be created. Format: applications/{package_name}|
|externalTransactionId|query|string|false|Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-z0-9_-/.|
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
|body|body|[ExternalTransaction](#schemaexternaltransaction)|false|none|
|» oneTimeTransaction|body|[OneTimeExternalTransaction](#schemaonetimeexternaltransaction)|false|This is a one-time transaction and not part of a subscription.|
|» originalPreTaxAmount|body|[Price](#schemaprice)|false|Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied.|
|» originalTaxAmount|body|[Price](#schemaprice)|false|Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied.|
|» recurringTransaction|body|[RecurringExternalTransaction](#schemarecurringexternaltransaction)|false|This transaction is part of a recurring series of transactions.|
|» transactionTime|body|string(google-datetime)|false|Required. The time when the transaction was completed.|
|» userTaxAddress|body|[ExternalTransactionAddress](#schemaexternaltransactionaddress)|false|Required. User address for tax computation.|

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
  "currentPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "currentTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "externalTransactionId": "string",
  "oneTimeTransaction": {
    "externalTransactionToken": "string"
  },
  "originalPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "originalTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "packageName": "string",
  "recurringTransaction": {
    "externalSubscription": {
      "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
    },
    "externalTransactionToken": "string",
    "initialExternalTransactionId": "string"
  },
  "testPurchase": {},
  "transactionState": "TRANSACTION_STATE_UNSPECIFIED",
  "transactionTime": "string",
  "userTaxAddress": {
    "regionCode": "string"
  }
}
```

<h3 id="androidpublisherexternaltransactionscreateexternaltransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExternalTransaction](#schemaexternaltransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-generatedapks">generatedapks</h1>

## androidpublisher.generatedapks.list

<a id="opIdandroidpublisher.generatedapks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/generatedApks/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}`

Returns download metadata for all APKs that were generated from a given app bundle.

<h3 id="androidpublishergeneratedapkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|integer|true|Version code of the app bundle.|
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
  "generatedApks": [
    {
      "certificateSha256Hash": "string",
      "generatedAssetPackSlices": [
        {
          "downloadId": "string",
          "moduleName": "string",
          "sliceId": "string",
          "version": "string"
        }
      ],
      "generatedSplitApks": [
        {
          "downloadId": "string",
          "moduleName": "string",
          "splitId": "string",
          "variantId": 0
        }
      ],
      "generatedStandaloneApks": [
        {
          "downloadId": "string",
          "variantId": 0
        }
      ],
      "generatedUniversalApk": {
        "downloadId": "string"
      }
    }
  ]
}
```

<h3 id="androidpublishergeneratedapkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GeneratedApksListResponse](#schemageneratedapkslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.generatedapks.download

<a id="opIdandroidpublisher.generatedapks.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/generatedApks/0/downloads/string:download \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download`

Downloads a single signed APK generated from an app bundle.

<h3 id="androidpublishergeneratedapksdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|integer|true|Version code of the app bundle.|
|downloadId|path|string|true|Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.|
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

<h3 id="androidpublishergeneratedapksdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-grants">grants</h1>

## androidpublisher.grants.create

<a id="opIdandroidpublisher.grants.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string/grants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appLevelPermissions": [
      "APP_LEVEL_PERMISSION_UNSPECIFIED"
    ],
    "name": "string",
    "packageName": "string"
  }'
```

`POST /androidpublisher/v3/{parent}/grants`

Grant access for a user to the given package.

> Body parameter

```json
{
  "appLevelPermissions": [
    "APP_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "name": "string",
  "packageName": "string"
}
```

<h3 id="androidpublishergrantscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The user which needs permission. Format: developers/{developer}/users/{user}|
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
|body|body|[Grant](#schemagrant)|false|none|
|» appLevelPermissions|body|[string]|false|The permissions granted to the user for this app.|
|» name|body|string|false|Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.|
|» packageName|body|string|false|Immutable. The package name of the app. This will be empty for draft apps.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» appLevelPermissions|APP_LEVEL_PERMISSION_UNSPECIFIED|
|» appLevelPermissions|CAN_ACCESS_APP|
|» appLevelPermissions|CAN_VIEW_FINANCIAL_DATA|
|» appLevelPermissions|CAN_MANAGE_PERMISSIONS|
|» appLevelPermissions|CAN_REPLY_TO_REVIEWS|
|» appLevelPermissions|CAN_MANAGE_PUBLIC_APKS|
|» appLevelPermissions|CAN_MANAGE_TRACK_APKS|
|» appLevelPermissions|CAN_MANAGE_TRACK_USERS|
|» appLevelPermissions|CAN_MANAGE_PUBLIC_LISTING|
|» appLevelPermissions|CAN_MANAGE_DRAFT_APPS|
|» appLevelPermissions|CAN_MANAGE_ORDERS|
|» appLevelPermissions|CAN_MANAGE_APP_CONTENT|

> Example responses

> 200 Response

```json
{
  "appLevelPermissions": [
    "APP_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "name": "string",
  "packageName": "string"
}
```

<h3 id="androidpublishergrantscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Grant](#schemagrant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-inappproducts">inappproducts</h1>

## androidpublisher.inappproducts.list

<a id="opIdandroidpublisher.inappproducts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/inappproducts`

Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.

<h3 id="androidpublisherinappproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|maxResults|query|integer|false|Deprecated and ignored. The page size is determined by the server.|
|startIndex|query|integer|false|Deprecated and ignored. Set the `token` parameter to retrieve the next page.|
|token|query|string|false|Pagination token. If empty, list starts at the first product.|
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
  "inappproduct": [
    {
      "defaultLanguage": "string",
      "defaultPrice": {
        "currency": "string",
        "priceMicros": "string"
      },
      "gracePeriod": "string",
      "listings": {
        "property1": {
          "benefits": [
            "string"
          ],
          "description": "string",
          "title": "string"
        },
        "property2": {
          "benefits": [
            "string"
          ],
          "description": "string",
          "title": "string"
        }
      },
      "managedProductTaxesAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      },
      "packageName": "string",
      "prices": {
        "property1": {
          "currency": "string",
          "priceMicros": "string"
        },
        "property2": {
          "currency": "string",
          "priceMicros": "string"
        }
      },
      "purchaseType": "purchaseTypeUnspecified",
      "sku": "string",
      "status": "statusUnspecified",
      "subscriptionPeriod": "string",
      "subscriptionTaxesAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      },
      "trialPeriod": "string"
    }
  ],
  "kind": "string",
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

<h3 id="androidpublisherinappproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InappproductsListResponse](#schemainappproductslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.inappproducts.insert

<a id="opIdandroidpublisher.inappproducts.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultLanguage": "string",
    "defaultPrice": {
      "currency": "string",
      "priceMicros": "string"
    },
    "gracePeriod": "string",
    "listings": {
      "property1": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      },
      "property2": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      }
    },
    "managedProductTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "packageName": "string",
    "prices": {
      "property1": {
        "currency": "string",
        "priceMicros": "string"
      },
      "property2": {
        "currency": "string",
        "priceMicros": "string"
      }
    },
    "purchaseType": "purchaseTypeUnspecified",
    "sku": "string",
    "status": "statusUnspecified",
    "subscriptionPeriod": "string",
    "subscriptionTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "trialPeriod": "string"
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/inappproducts`

Creates an in-app product (i.e. a managed product or a subscription).

> Body parameter

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|autoConvertMissingPrices|query|boolean|false|If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.|
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
|body|body|[InAppProduct](#schemainappproduct)|false|none|
|» defaultLanguage|body|string|false|Default language of the localized data, as defined by BCP-47. e.g. "en-US".|
|» defaultPrice|body|[Price](#schemaprice)|false|Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.|
|» gracePeriod|body|string|false|Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).|
|» listings|body|object|false|List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".|
|» » **additionalProperties**|body|[InAppProductListing](#schemainappproductlisting)|false|Store listing of a single in-app product.|
|» managedProductTaxesAndComplianceSettings|body|[ManagedProductTaxAndComplianceSettings](#schemamanagedproducttaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to managed products.|
|» packageName|body|string|false|Package name of the parent app.|
|» prices|body|object|false|Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.|
|» » **additionalProperties**|body|[Price](#schemaprice)|false|Definition of a price, i.e. currency and units.|
|» purchaseType|body|string|false|The type of the product, e.g. a recurring subscription.|
|» sku|body|string|false|Stock-keeping-unit (SKU) of the product, unique within an app.|
|» status|body|string|false|The status of the product, e.g. whether it's active.|
|» subscriptionPeriod|body|string|false|Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).|
|» subscriptionTaxesAndComplianceSettings|body|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to subscription products.|
|» trialPeriod|body|string|false|Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» purchaseType|purchaseTypeUnspecified|
|» purchaseType|managedUser|
|» purchaseType|subscription|
|» status|statusUnspecified|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InAppProduct](#schemainappproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.inappproducts.get

<a id="opIdandroidpublisher.inappproducts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/inappproducts/{sku}`

Gets an in-app product, which can be a managed product or a subscription.

<h3 id="androidpublisherinappproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|sku|path|string|true|Unique identifier for the in-app product.|
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
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InAppProduct](#schemainappproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.inappproducts.update

<a id="opIdandroidpublisher.inappproducts.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultLanguage": "string",
    "defaultPrice": {
      "currency": "string",
      "priceMicros": "string"
    },
    "gracePeriod": "string",
    "listings": {
      "property1": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      },
      "property2": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      }
    },
    "managedProductTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "packageName": "string",
    "prices": {
      "property1": {
        "currency": "string",
        "priceMicros": "string"
      },
      "property2": {
        "currency": "string",
        "priceMicros": "string"
      }
    },
    "purchaseType": "purchaseTypeUnspecified",
    "sku": "string",
    "status": "statusUnspecified",
    "subscriptionPeriod": "string",
    "subscriptionTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "trialPeriod": "string"
  }'
```

`PUT /androidpublisher/v3/applications/{packageName}/inappproducts/{sku}`

Updates an in-app product (i.e. a managed product or a subscription).

> Body parameter

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|sku|path|string|true|Unique identifier for the in-app product.|
|allowMissing|query|boolean|false|If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.|
|autoConvertMissingPrices|query|boolean|false|If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.|
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
|body|body|[InAppProduct](#schemainappproduct)|false|none|
|» defaultLanguage|body|string|false|Default language of the localized data, as defined by BCP-47. e.g. "en-US".|
|» defaultPrice|body|[Price](#schemaprice)|false|Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.|
|» gracePeriod|body|string|false|Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).|
|» listings|body|object|false|List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".|
|» » **additionalProperties**|body|[InAppProductListing](#schemainappproductlisting)|false|Store listing of a single in-app product.|
|» managedProductTaxesAndComplianceSettings|body|[ManagedProductTaxAndComplianceSettings](#schemamanagedproducttaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to managed products.|
|» packageName|body|string|false|Package name of the parent app.|
|» prices|body|object|false|Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.|
|» » **additionalProperties**|body|[Price](#schemaprice)|false|Definition of a price, i.e. currency and units.|
|» purchaseType|body|string|false|The type of the product, e.g. a recurring subscription.|
|» sku|body|string|false|Stock-keeping-unit (SKU) of the product, unique within an app.|
|» status|body|string|false|The status of the product, e.g. whether it's active.|
|» subscriptionPeriod|body|string|false|Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).|
|» subscriptionTaxesAndComplianceSettings|body|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to subscription products.|
|» trialPeriod|body|string|false|Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» purchaseType|purchaseTypeUnspecified|
|» purchaseType|managedUser|
|» purchaseType|subscription|
|» status|statusUnspecified|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InAppProduct](#schemainappproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.inappproducts.delete

<a id="opIdandroidpublisher.inappproducts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/inappproducts/{sku}`

Deletes an in-app product (i.e. a managed product or a subscription).

<h3 id="androidpublisherinappproductsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|sku|path|string|true|Unique identifier for the in-app product.|
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

<h3 id="androidpublisherinappproductsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.inappproducts.patch

<a id="opIdandroidpublisher.inappproducts.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/inappproducts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultLanguage": "string",
    "defaultPrice": {
      "currency": "string",
      "priceMicros": "string"
    },
    "gracePeriod": "string",
    "listings": {
      "property1": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      },
      "property2": {
        "benefits": [
          "string"
        ],
        "description": "string",
        "title": "string"
      }
    },
    "managedProductTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "packageName": "string",
    "prices": {
      "property1": {
        "currency": "string",
        "priceMicros": "string"
      },
      "property2": {
        "currency": "string",
        "priceMicros": "string"
      }
    },
    "purchaseType": "purchaseTypeUnspecified",
    "sku": "string",
    "status": "statusUnspecified",
    "subscriptionPeriod": "string",
    "subscriptionTaxesAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    },
    "trialPeriod": "string"
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/inappproducts/{sku}`

Patches an in-app product (i.e. a managed product or a subscription).

> Body parameter

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|sku|path|string|true|Unique identifier for the in-app product.|
|autoConvertMissingPrices|query|boolean|false|If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.|
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
|body|body|[InAppProduct](#schemainappproduct)|false|none|
|» defaultLanguage|body|string|false|Default language of the localized data, as defined by BCP-47. e.g. "en-US".|
|» defaultPrice|body|[Price](#schemaprice)|false|Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.|
|» gracePeriod|body|string|false|Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).|
|» listings|body|object|false|List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".|
|» » **additionalProperties**|body|[InAppProductListing](#schemainappproductlisting)|false|Store listing of a single in-app product.|
|» managedProductTaxesAndComplianceSettings|body|[ManagedProductTaxAndComplianceSettings](#schemamanagedproducttaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to managed products.|
|» packageName|body|string|false|Package name of the parent app.|
|» prices|body|object|false|Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.|
|» » **additionalProperties**|body|[Price](#schemaprice)|false|Definition of a price, i.e. currency and units.|
|» purchaseType|body|string|false|The type of the product, e.g. a recurring subscription.|
|» sku|body|string|false|Stock-keeping-unit (SKU) of the product, unique within an app.|
|» status|body|string|false|The status of the product, e.g. whether it's active.|
|» subscriptionPeriod|body|string|false|Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).|
|» subscriptionTaxesAndComplianceSettings|body|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|Details about taxes and legal compliance. Only applicable to subscription products.|
|» trialPeriod|body|string|false|Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» purchaseType|purchaseTypeUnspecified|
|» purchaseType|managedUser|
|» purchaseType|subscription|
|» status|statusUnspecified|
|» status|active|
|» status|inactive|

> Example responses

> 200 Response

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

<h3 id="androidpublisherinappproductspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InAppProduct](#schemainappproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-internalappsharingartifacts">internalappsharingartifacts</h1>

## androidpublisher.internalappsharingartifacts.uploadapk

<a id="opIdandroidpublisher.internalappsharingartifacts.uploadapk"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/internalappsharing/string/artifacts/apk \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk`

Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

<h3 id="androidpublisherinternalappsharingartifactsuploadapk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
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
  "certificateFingerprint": "string",
  "downloadUrl": "string",
  "sha256": "string"
}
```

<h3 id="androidpublisherinternalappsharingartifactsuploadapk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InternalAppSharingArtifact](#schemainternalappsharingartifact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.internalappsharingartifacts.uploadbundle

<a id="opIdandroidpublisher.internalappsharingartifacts.uploadbundle"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/internalappsharing/string/artifacts/bundle \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle`

Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

<h3 id="androidpublisherinternalappsharingartifactsuploadbundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
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
  "certificateFingerprint": "string",
  "downloadUrl": "string",
  "sha256": "string"
}
```

<h3 id="androidpublisherinternalappsharingartifactsuploadbundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InternalAppSharingArtifact](#schemainternalappsharingartifact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-monetization">monetization</h1>

## androidpublisher.monetization.convertRegionPrices

<a id="opIdandroidpublisher.monetization.convertRegionPrices"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/pricing:convertRegionPrices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "price": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices`

Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.

> Body parameter

```json
{
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

<h3 id="androidpublishermonetizationconvertregionprices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The app package name.|
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
|body|body|[ConvertRegionPricesRequest](#schemaconvertregionpricesrequest)|false|none|
|» price|body|[Money](#schemamoney)|false|The intital price to convert other regions from. Tax exclusive.|

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
  "convertedOtherRegionsPrice": {
    "eurPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "usdPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "convertedRegionPrices": {
    "property1": {
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string",
      "taxAmount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "property2": {
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string",
      "taxAmount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationconvertregionprices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConvertRegionPricesResponse](#schemaconvertregionpricesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.list

<a id="opIdandroidpublisher.monetization.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/subscriptions`

Lists all subscriptions under a given app.

<h3 id="androidpublishermonetizationsubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) for which the subscriptions should be read.|
|pageSize|query|integer|false|The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.|
|showArchived|query|boolean|false|Whether archived subscriptions should be included in the response. Defaults to false.|
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
  "subscriptions": [
    {
      "archived": true,
      "basePlans": [
        {
          "autoRenewingBasePlanType": {
            "billingPeriodDuration": "string",
            "gracePeriodDuration": "string",
            "legacyCompatible": true,
            "legacyCompatibleSubscriptionOfferId": "string",
            "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
            "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
          },
          "basePlanId": "string",
          "offerTags": [
            {
              "tag": "string"
            }
          ],
          "otherRegionsConfig": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "newSubscriberAvailability": true,
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "prepaidBasePlanType": {
            "billingPeriodDuration": "string",
            "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
          },
          "regionalConfigs": [
            {
              "newSubscriberAvailability": true,
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "regionCode": "string"
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "listings": [
        {
          "benefits": [
            "string"
          ],
          "description": "string",
          "languageCode": "string",
          "title": "string"
        }
      ],
      "packageName": "string",
      "productId": "string",
      "taxAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      }
    }
  ]
}
```

<h3 id="androidpublishermonetizationsubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSubscriptionsResponse](#schemalistsubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.create

<a id="opIdandroidpublisher.monetization.subscriptions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basePlans": [
      {
        "autoRenewingBasePlanType": {
          "billingPeriodDuration": "string",
          "gracePeriodDuration": "string",
          "legacyCompatible": true,
          "legacyCompatibleSubscriptionOfferId": "string",
          "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
          "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
        },
        "basePlanId": "string",
        "offerTags": [
          {
            "tag": "string"
          }
        ],
        "otherRegionsConfig": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "newSubscriberAvailability": true,
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "prepaidBasePlanType": {
          "billingPeriodDuration": "string",
          "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
        },
        "regionalConfigs": [
          {
            "newSubscriberAvailability": true,
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "regionCode": "string"
          }
        ]
      }
    ],
    "listings": [
      {
        "benefits": [
          "string"
        ],
        "description": "string",
        "languageCode": "string",
        "title": "string"
      }
    ],
    "packageName": "string",
    "productId": "string",
    "taxAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions`

Creates a new subscription. Newly added base plans will remain in draft state until activated.

> Body parameter

```json
{
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ]
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.|
|productId|query|string|false|Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.|
|regionsVersion.version|query|string|false|Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.|
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
|body|body|[Subscription](#schemasubscription)|false|none|
|» basePlans|body|[[BasePlan](#schemabaseplan)]|false|The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.|
|» listings|body|[[SubscriptionListing](#schemasubscriptionlisting)]|false|Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.|
|» packageName|body|string|false|Immutable. Package name of the parent app.|
|» productId|body|string|false|Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.|
|» taxAndComplianceSettings|body|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|Details about taxes and legal compliance.|

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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.get

<a id="opIdandroidpublisher.monetization.subscriptions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}`

Reads a single subscription.

<h3 id="androidpublishermonetizationsubscriptionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the subscription to get.|
|productId|path|string|true|Required. The unique product ID of the subscription to get.|
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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.delete

<a id="opIdandroidpublisher.monetization.subscriptions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}`

Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.

<h3 id="androidpublishermonetizationsubscriptionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the app of the subscription to delete.|
|productId|path|string|true|Required. The unique product ID of the subscription to delete.|
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

<h3 id="androidpublishermonetizationsubscriptionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.patch

<a id="opIdandroidpublisher.monetization.subscriptions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basePlans": [
      {
        "autoRenewingBasePlanType": {
          "billingPeriodDuration": "string",
          "gracePeriodDuration": "string",
          "legacyCompatible": true,
          "legacyCompatibleSubscriptionOfferId": "string",
          "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
          "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
        },
        "basePlanId": "string",
        "offerTags": [
          {
            "tag": "string"
          }
        ],
        "otherRegionsConfig": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "newSubscriberAvailability": true,
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "prepaidBasePlanType": {
          "billingPeriodDuration": "string",
          "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
        },
        "regionalConfigs": [
          {
            "newSubscriberAvailability": true,
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "regionCode": "string"
          }
        ]
      }
    ],
    "listings": [
      {
        "benefits": [
          "string"
        ],
        "description": "string",
        "languageCode": "string",
        "title": "string"
      }
    ],
    "packageName": "string",
    "productId": "string",
    "taxAndComplianceSettings": {
      "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
      "taxRateInfoByRegionCode": {
        "property1": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        },
        "property2": {
          "eligibleForStreamingServiceTaxRate": true,
          "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
          "taxTier": "TAX_TIER_UNSPECIFIED"
        }
      }
    }
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}`

Updates an existing subscription.

> Body parameter

```json
{
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ]
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Immutable. Package name of the parent app.|
|productId|path|string|true|Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.|
|regionsVersion.version|query|string|false|Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.|
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
|body|body|[Subscription](#schemasubscription)|false|none|
|» basePlans|body|[[BasePlan](#schemabaseplan)]|false|The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.|
|» listings|body|[[SubscriptionListing](#schemasubscriptionlisting)]|false|Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.|
|» packageName|body|string|false|Immutable. Package name of the parent app.|
|» productId|body|string|false|Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.|
|» taxAndComplianceSettings|body|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|Details about taxes and legal compliance.|

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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.delete

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}`

Deletes a base plan. Can only be done for draft base plans. This action is irreversible.

<h3 id="androidpublishermonetizationsubscriptionsbaseplansdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the base plan to delete.|
|productId|path|string|true|Required. The parent subscription (ID) of the base plan to delete.|
|basePlanId|path|string|true|Required. The unique offer ID of the base plan to delete.|
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

<h3 id="androidpublishermonetizationsubscriptionsbaseplansdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.list

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers`

Lists all offers under a given subscription.

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) for which the subscriptions should be read.|
|productId|path|string|true|Required. The parent subscription (ID) for which the offers should be read.|
|basePlanId|path|string|true|Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription.|
|pageSize|query|integer|false|The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.|
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
  "subscriptionOffers": [
    {
      "basePlanId": "string",
      "offerId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "otherRegionsNewSubscriberAvailability": true
      },
      "packageName": "string",
      "phases": [
        {
          "duration": "string",
          "otherRegionsConfig": {
            "absoluteDiscounts": {
              "eurPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "usdPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "otherRegionsPrices": {
              "eurPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "usdPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "relativeDiscount": 0
          },
          "recurrenceCount": 0,
          "regionalConfigs": [
            {
              "absoluteDiscount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "regionCode": "string",
              "relativeDiscount": 0
            }
          ]
        }
      ],
      "productId": "string",
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "targeting": {
        "acquisitionRule": {
          "scope": {
            "specificSubscriptionInApp": "string"
          }
        },
        "upgradeRule": {
          "billingPeriodDuration": "string",
          "oncePerUser": true,
          "scope": {
            "specificSubscriptionInApp": "string"
          }
        }
      }
    }
  ]
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSubscriptionOffersResponse](#schemalistsubscriptionoffersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.create

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basePlanId": "string",
    "offerId": "string",
    "offerTags": [
      {
        "tag": "string"
      }
    ],
    "otherRegionsConfig": {
      "otherRegionsNewSubscriberAvailability": true
    },
    "packageName": "string",
    "phases": [
      {
        "duration": "string",
        "otherRegionsConfig": {
          "absoluteDiscounts": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "otherRegionsPrices": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "relativeDiscount": 0
        },
        "recurrenceCount": 0,
        "regionalConfigs": [
          {
            "absoluteDiscount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "regionCode": "string",
            "relativeDiscount": 0
          }
        ]
      }
    ],
    "productId": "string",
    "regionalConfigs": [
      {
        "newSubscriberAvailability": true,
        "regionCode": "string"
      }
    ],
    "targeting": {
      "acquisitionRule": {
        "scope": {
          "specificSubscriptionInApp": "string"
        }
      },
      "upgradeRule": {
        "billingPeriodDuration": "string",
        "oncePerUser": true,
        "scope": {
          "specificSubscriptionInApp": "string"
        }
      }
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers`

Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.

> Body parameter

```json
{
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.|
|productId|path|string|true|Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.|
|basePlanId|path|string|true|Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.|
|offerId|query|string|false|Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.|
|regionsVersion.version|query|string|false|Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.|
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
|body|body|[SubscriptionOffer](#schemasubscriptionoffer)|false|none|
|» basePlanId|body|string|false|Required. Immutable. The ID of the base plan to which this offer is an extension.|
|» offerId|body|string|false|Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.|
|» offerTags|body|[[OfferTag](#schemaoffertag)]|false|List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.|
|» otherRegionsConfig|body|[OtherRegionsSubscriptionOfferConfig](#schemaotherregionssubscriptionofferconfig)|false|The configuration for any new locations Play may launch in the future.|
|» packageName|body|string|false|Required. Immutable. The package name of the app the parent subscription belongs to.|
|» phases|body|[[SubscriptionOfferPhase](#schemasubscriptionofferphase)]|false|Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.|
|» productId|body|string|false|Required. Immutable. The ID of the parent subscription this offer belongs to.|
|» regionalConfigs|body|[[RegionalSubscriptionOfferConfig](#schemaregionalsubscriptionofferconfig)]|false|Required. The region-specific configuration of this offer. Must contain at least one entry.|
|» targeting|body|[SubscriptionOfferTargeting](#schemasubscriptionoffertargeting)|false|The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.|

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
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionOffer](#schemasubscriptionoffer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.get

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}`

Reads a single offer

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the offer to get.|
|productId|path|string|true|Required. The parent subscription (ID) of the offer to get.|
|basePlanId|path|string|true|Required. The parent base plan (ID) of the offer to get.|
|offerId|path|string|true|Required. The unique offer ID of the offer to get.|
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
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionOffer](#schemasubscriptionoffer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.delete

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}`

Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the offer to delete.|
|productId|path|string|true|Required. The parent subscription (ID) of the offer to delete.|
|basePlanId|path|string|true|Required. The parent base plan (ID) of the offer to delete.|
|offerId|path|string|true|Required. The unique offer ID of the offer to delete.|
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

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.patch

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basePlanId": "string",
    "offerId": "string",
    "offerTags": [
      {
        "tag": "string"
      }
    ],
    "otherRegionsConfig": {
      "otherRegionsNewSubscriberAvailability": true
    },
    "packageName": "string",
    "phases": [
      {
        "duration": "string",
        "otherRegionsConfig": {
          "absoluteDiscounts": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "otherRegionsPrices": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "relativeDiscount": 0
        },
        "recurrenceCount": 0,
        "regionalConfigs": [
          {
            "absoluteDiscount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "regionCode": "string",
            "relativeDiscount": 0
          }
        ]
      }
    ],
    "productId": "string",
    "regionalConfigs": [
      {
        "newSubscriberAvailability": true,
        "regionCode": "string"
      }
    ],
    "targeting": {
      "acquisitionRule": {
        "scope": {
          "specificSubscriptionInApp": "string"
        }
      },
      "upgradeRule": {
        "billingPeriodDuration": "string",
        "oncePerUser": true,
        "scope": {
          "specificSubscriptionInApp": "string"
        }
      }
    }
  }'
```

`PATCH /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}`

Updates an existing subscription offer.

> Body parameter

```json
{
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. Immutable. The package name of the app the parent subscription belongs to.|
|productId|path|string|true|Required. Immutable. The ID of the parent subscription this offer belongs to.|
|basePlanId|path|string|true|Required. Immutable. The ID of the base plan to which this offer is an extension.|
|offerId|path|string|true|Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.|
|regionsVersion.version|query|string|false|Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.|
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
|body|body|[SubscriptionOffer](#schemasubscriptionoffer)|false|none|
|» basePlanId|body|string|false|Required. Immutable. The ID of the base plan to which this offer is an extension.|
|» offerId|body|string|false|Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.|
|» offerTags|body|[[OfferTag](#schemaoffertag)]|false|List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.|
|» otherRegionsConfig|body|[OtherRegionsSubscriptionOfferConfig](#schemaotherregionssubscriptionofferconfig)|false|The configuration for any new locations Play may launch in the future.|
|» packageName|body|string|false|Required. Immutable. The package name of the app the parent subscription belongs to.|
|» phases|body|[[SubscriptionOfferPhase](#schemasubscriptionofferphase)]|false|Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.|
|» productId|body|string|false|Required. Immutable. The ID of the parent subscription this offer belongs to.|
|» regionalConfigs|body|[[RegionalSubscriptionOfferConfig](#schemaregionalsubscriptionofferconfig)]|false|Required. The region-specific configuration of this offer. Must contain at least one entry.|
|» targeting|body|[SubscriptionOfferTargeting](#schemasubscriptionoffertargeting)|false|The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.|

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
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansofferspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionOffer](#schemasubscriptionoffer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.activate

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate`

Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.

> Body parameter

```json
{}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the offer to activate.|
|productId|path|string|true|Required. The parent subscription (ID) of the offer to activate.|
|basePlanId|path|string|true|Required. The parent base plan (ID) of the offer to activate.|
|offerId|path|string|true|Required. The unique offer ID of the offer to activate.|
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
|body|body|[ActivateSubscriptionOfferRequest](#schemaactivatesubscriptionofferrequest)|false|none|

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
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionOffer](#schemasubscriptionoffer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.offers.deactivate

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.offers.deactivate"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string/offers/string:deactivate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate`

Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.

> Body parameter

```json
{}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the offer to deactivate.|
|productId|path|string|true|Required. The parent subscription (ID) of the offer to deactivate.|
|basePlanId|path|string|true|Required. The parent base plan (ID) of the offer to deactivate.|
|offerId|path|string|true|Required. The unique offer ID of the offer to deactivate.|
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
|body|body|[DeactivateSubscriptionOfferRequest](#schemadeactivatesubscriptionofferrequest)|false|none|

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
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansoffersdeactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionOffer](#schemasubscriptionoffer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.activate

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate`

Activates a base plan. Once activated, base plans will be available to new subscribers.

> Body parameter

```json
{}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the base plan to activate.|
|productId|path|string|true|Required. The parent subscription (ID) of the base plan to activate.|
|basePlanId|path|string|true|Required. The unique base plan ID of the base plan to activate.|
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
|body|body|[ActivateBasePlanRequest](#schemaactivatebaseplanrequest)|false|none|

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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.deactivate

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.deactivate"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string:deactivate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate`

Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription

> Body parameter

```json
{}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansdeactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the base plan to deactivate.|
|productId|path|string|true|Required. The parent subscription (ID) of the base plan to deactivate.|
|basePlanId|path|string|true|Required. The unique base plan ID of the base plan to deactivate.|
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
|body|body|[DeactivateBasePlanRequest](#schemadeactivatebaseplanrequest)|false|none|

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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansdeactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.basePlans.migratePrices

<a id="opIdandroidpublisher.monetization.subscriptions.basePlans.migratePrices"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string/basePlans/string:migratePrices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "regionalPriceMigrations": [
      {
        "oldestAllowedPriceVersionTime": "string",
        "regionCode": "string"
      }
    ],
    "regionsVersion": {
      "version": "string"
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices`

Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.

> Body parameter

```json
{
  "regionalPriceMigrations": [
    {
      "oldestAllowedPriceVersionTime": "string",
      "regionCode": "string"
    }
  ],
  "regionsVersion": {
    "version": "string"
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsbaseplansmigrateprices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.|
|productId|path|string|true|Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.|
|basePlanId|path|string|true|Required. The unique base plan ID of the base plan to update prices on.|
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
|body|body|[MigrateBasePlanPricesRequest](#schemamigratebaseplanpricesrequest)|false|none|
|» regionalPriceMigrations|body|[[RegionalPriceMigrationConfig](#schemaregionalpricemigrationconfig)]|false|Required. The regional prices to update.|
|» regionsVersion|body|[RegionsVersion](#schemaregionsversion)|false|Required. The version of the available regions being used for the regional_price_migrations.|

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

<h3 id="androidpublishermonetizationsubscriptionsbaseplansmigrateprices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MigrateBasePlanPricesResponse](#schemamigratebaseplanpricesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.monetization.subscriptions.archive

<a id="opIdandroidpublisher.monetization.subscriptions.archive"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/subscriptions/string:archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive`

Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.

> Body parameter

```json
{}
```

<h3 id="androidpublishermonetizationsubscriptionsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Required. The parent app (package name) of the app of the subscription to delete.|
|productId|path|string|true|Required. The unique product ID of the subscription to delete.|
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
|body|body|[ArchiveSubscriptionRequest](#schemaarchivesubscriptionrequest)|false|none|

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
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="androidpublishermonetizationsubscriptionsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-orders">orders</h1>

## androidpublisher.orders.refund

<a id="opIdandroidpublisher.orders.refund"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/orders/string:refund \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund`

Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

<h3 id="androidpublisherordersrefund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').|
|orderId|path|string|true|The order ID provided to the user when the subscription or in-app order was purchased.|
|revoke|query|boolean|false|Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).|
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

<h3 id="androidpublisherordersrefund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-purchases">purchases</h1>

## androidpublisher.purchases.products.get

<a id="opIdandroidpublisher.purchases.products.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/products/string/tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}`

Checks the purchase and consumption status of an inapp item.

<h3 id="androidpublisherpurchasesproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application the inapp product was sold in (for example, 'com.some.thing').|
|productId|path|string|true|The inapp product SKU (for example, 'com.some.thing.inapp1').|
|token|path|string|true|The token provided to the user's device when the inapp product was purchased.|
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
  "acknowledgementState": 0,
  "consumptionState": 0,
  "developerPayload": "string",
  "kind": "string",
  "obfuscatedExternalAccountId": "string",
  "obfuscatedExternalProfileId": "string",
  "orderId": "string",
  "productId": "string",
  "purchaseState": 0,
  "purchaseTimeMillis": "string",
  "purchaseToken": "string",
  "purchaseType": 0,
  "quantity": 0,
  "regionCode": "string"
}
```

<h3 id="androidpublisherpurchasesproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductPurchase](#schemaproductpurchase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.products.acknowledge

<a id="opIdandroidpublisher.purchases.products.acknowledge"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/products/string/tokens/string:acknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "developerPayload": "string"
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge`

Acknowledges a purchase of an inapp item.

> Body parameter

```json
{
  "developerPayload": "string"
}
```

<h3 id="androidpublisherpurchasesproductsacknowledge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application the inapp product was sold in (for example, 'com.some.thing').|
|productId|path|string|true|The inapp product SKU (for example, 'com.some.thing.inapp1').|
|token|path|string|true|The token provided to the user's device when the inapp product was purchased.|
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
|body|body|[ProductPurchasesAcknowledgeRequest](#schemaproductpurchasesacknowledgerequest)|false|none|
|» developerPayload|body|string|false|Payload to attach to the purchase.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="androidpublisherpurchasesproductsacknowledge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.products.consume

<a id="opIdandroidpublisher.purchases.products.consume"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/products/string/tokens/string:consume \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume`

Consumes a purchase for an inapp item.

<h3 id="androidpublisherpurchasesproductsconsume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application the inapp product was sold in (for example, 'com.some.thing').|
|productId|path|string|true|The inapp product SKU (for example, 'com.some.thing.inapp1').|
|token|path|string|true|The token provided to the user's device when the inapp product was purchased.|
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

<h3 id="androidpublisherpurchasesproductsconsume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.get

<a id="opIdandroidpublisher.purchases.subscriptions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}`

Checks whether a user's subscription purchase is valid and returns its expiry time.

<h3 id="androidpublisherpurchasessubscriptionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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
  "acknowledgementState": 0,
  "autoRenewing": true,
  "autoResumeTimeMillis": "string",
  "cancelReason": 0,
  "cancelSurveyResult": {
    "cancelSurveyReason": 0,
    "userInputCancelReason": "string"
  },
  "countryCode": "string",
  "developerPayload": "string",
  "emailAddress": "string",
  "expiryTimeMillis": "string",
  "externalAccountId": "string",
  "familyName": "string",
  "givenName": "string",
  "introductoryPriceInfo": {
    "introductoryPriceAmountMicros": "string",
    "introductoryPriceCurrencyCode": "string",
    "introductoryPriceCycles": 0,
    "introductoryPricePeriod": "string"
  },
  "kind": "string",
  "linkedPurchaseToken": "string",
  "obfuscatedExternalAccountId": "string",
  "obfuscatedExternalProfileId": "string",
  "orderId": "string",
  "paymentState": 0,
  "priceAmountMicros": "string",
  "priceChange": {
    "newPrice": {
      "currency": "string",
      "priceMicros": "string"
    },
    "state": 0
  },
  "priceCurrencyCode": "string",
  "profileId": "string",
  "profileName": "string",
  "promotionCode": "string",
  "promotionType": 0,
  "purchaseType": 0,
  "startTimeMillis": "string",
  "userCancellationTimeMillis": "string"
}
```

<h3 id="androidpublisherpurchasessubscriptionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionPurchase](#schemasubscriptionpurchase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.acknowledge

<a id="opIdandroidpublisher.purchases.subscriptions.acknowledge"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string:acknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "developerPayload": "string"
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge`

Acknowledges a subscription purchase.

> Body parameter

```json
{
  "developerPayload": "string"
}
```

<h3 id="androidpublisherpurchasessubscriptionsacknowledge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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
|body|body|[SubscriptionPurchasesAcknowledgeRequest](#schemasubscriptionpurchasesacknowledgerequest)|false|none|
|» developerPayload|body|string|false|Payload to attach to the purchase.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="androidpublisherpurchasessubscriptionsacknowledge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.cancel

<a id="opIdandroidpublisher.purchases.subscriptions.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string:cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel`

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

<h3 id="androidpublisherpurchasessubscriptionscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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

<h3 id="androidpublisherpurchasessubscriptionscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.defer

<a id="opIdandroidpublisher.purchases.subscriptions.defer"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string:defer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deferralInfo": {
      "desiredExpiryTimeMillis": "string",
      "expectedExpiryTimeMillis": "string"
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer`

Defers a user's subscription purchase until a specified future expiration time.

> Body parameter

```json
{
  "deferralInfo": {
    "desiredExpiryTimeMillis": "string",
    "expectedExpiryTimeMillis": "string"
  }
}
```

<h3 id="androidpublisherpurchasessubscriptionsdefer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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
|body|body|[SubscriptionPurchasesDeferRequest](#schemasubscriptionpurchasesdeferrequest)|false|none|
|» deferralInfo|body|[SubscriptionDeferralInfo](#schemasubscriptiondeferralinfo)|false|The information about the new desired expiry time for the subscription.|

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
  "newExpiryTimeMillis": "string"
}
```

<h3 id="androidpublisherpurchasessubscriptionsdefer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionPurchasesDeferResponse](#schemasubscriptionpurchasesdeferresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.refund

<a id="opIdandroidpublisher.purchases.subscriptions.refund"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string:refund \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund`

Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

<h3 id="androidpublisherpurchasessubscriptionsrefund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|"The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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

<h3 id="androidpublisherpurchasessubscriptionsrefund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptions.revoke

<a id="opIdandroidpublisher.purchases.subscriptions.revoke"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptions/string/tokens/string:revoke \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke`

Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

<h3 id="androidpublisherpurchasessubscriptionsrevoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which this subscription was purchased (for example, 'com.some.thing').|
|subscriptionId|path|string|true|The purchased subscription ID (for example, 'monthly001').|
|token|path|string|true|The token provided to the user's device when the subscription was purchased.|
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

<h3 id="androidpublisherpurchasessubscriptionsrevoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.subscriptionsv2.get

<a id="opIdandroidpublisher.purchases.subscriptionsv2.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/subscriptionsv2/tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}`

Get metadata about a subscription

<h3 id="androidpublisherpurchasessubscriptionsv2get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package of the application for which this subscription was purchased (for example, 'com.some.thing').|
|token|path|string|true|Required. The token provided to the user's device when the subscription was purchased.|
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
  "acknowledgementState": "ACKNOWLEDGEMENT_STATE_UNSPECIFIED",
  "canceledStateContext": {
    "developerInitiatedCancellation": {},
    "replacementCancellation": {},
    "systemInitiatedCancellation": {},
    "userInitiatedCancellation": {
      "cancelSurveyResult": {
        "reason": "CANCEL_SURVEY_REASON_UNSPECIFIED",
        "reasonUserInput": "string"
      },
      "cancelTime": "string"
    }
  },
  "externalAccountIdentifiers": {
    "externalAccountId": "string",
    "obfuscatedExternalAccountId": "string",
    "obfuscatedExternalProfileId": "string"
  },
  "kind": "string",
  "latestOrderId": "string",
  "lineItems": [
    {
      "autoRenewingPlan": {
        "autoRenewEnabled": true,
        "priceChangeDetails": {
          "expectedNewPriceChargeTime": "string",
          "newPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "priceChangeMode": "PRICE_CHANGE_MODE_UNSPECIFIED",
          "priceChangeState": "PRICE_CHANGE_STATE_UNSPECIFIED"
        }
      },
      "expiryTime": "string",
      "offerDetails": {
        "basePlanId": "string",
        "offerId": "string",
        "offerTags": [
          "string"
        ]
      },
      "prepaidPlan": {
        "allowExtendAfterTime": "string"
      },
      "productId": "string"
    }
  ],
  "linkedPurchaseToken": "string",
  "pausedStateContext": {
    "autoResumeTime": "string"
  },
  "regionCode": "string",
  "startTime": "string",
  "subscribeWithGoogleInfo": {
    "emailAddress": "string",
    "familyName": "string",
    "givenName": "string",
    "profileId": "string",
    "profileName": "string"
  },
  "subscriptionState": "SUBSCRIPTION_STATE_UNSPECIFIED",
  "testPurchase": {}
}
```

<h3 id="androidpublisherpurchasessubscriptionsv2get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionPurchaseV2](#schemasubscriptionpurchasev2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.purchases.voidedpurchases.list

<a id="opIdandroidpublisher.purchases.voidedpurchases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/purchases/voidedpurchases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases`

Lists the purchases that were canceled, refunded or charged-back.

<h3 id="androidpublisherpurchasesvoidedpurchaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').|
|endTime|query|string|false|The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.|
|maxResults|query|integer|false|Defines how many results the list operation should return. The default number depends on the resource collection.|
|startIndex|query|integer|false|Defines the index of the first element to return. This can only be used if indexed paging is enabled.|
|startTime|query|string|false|The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.|
|token|query|string|false|Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.|
|type|query|integer|false|The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.|
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
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  },
  "voidedPurchases": [
    {
      "kind": "string",
      "orderId": "string",
      "purchaseTimeMillis": "string",
      "purchaseToken": "string",
      "voidedReason": 0,
      "voidedSource": 0,
      "voidedTimeMillis": "string"
    }
  ]
}
```

<h3 id="androidpublisherpurchasesvoidedpurchaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VoidedPurchasesListResponse](#schemavoidedpurchaseslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-reviews">reviews</h1>

## androidpublisher.reviews.list

<a id="opIdandroidpublisher.reviews.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/reviews \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/reviews`

Lists all reviews.

<h3 id="androidpublisherreviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|maxResults|query|integer|false|How many results the list operation should return.|
|startIndex|query|integer|false|The index of the first element to return.|
|token|query|string|false|Pagination token. If empty, list starts at the first review.|
|translationLanguage|query|string|false|Language localization code.|
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
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "reviews": [
    {
      "authorName": "string",
      "comments": [
        {
          "developerComment": {
            "lastModified": {
              "nanos": 0,
              "seconds": "string"
            },
            "text": "string"
          },
          "userComment": {
            "androidOsVersion": 0,
            "appVersionCode": 0,
            "appVersionName": "string",
            "device": "string",
            "deviceMetadata": {
              "cpuMake": "string",
              "cpuModel": "string",
              "deviceClass": "string",
              "glEsVersion": 0,
              "manufacturer": "string",
              "nativePlatform": "string",
              "productName": "string",
              "ramMb": 0,
              "screenDensityDpi": 0,
              "screenHeightPx": 0,
              "screenWidthPx": 0
            },
            "lastModified": {
              "nanos": 0,
              "seconds": "string"
            },
            "originalText": "string",
            "reviewerLanguage": "string",
            "starRating": 0,
            "text": "string",
            "thumbsDownCount": 0,
            "thumbsUpCount": 0
          }
        }
      ],
      "reviewId": "string"
    }
  ],
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

<h3 id="androidpublisherreviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReviewsListResponse](#schemareviewslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.reviews.get

<a id="opIdandroidpublisher.reviews.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/reviews/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/reviews/{reviewId}`

Gets a single review.

<h3 id="androidpublisherreviewsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|reviewId|path|string|true|Unique identifier for a review.|
|translationLanguage|query|string|false|Language localization code.|
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
  "authorName": "string",
  "comments": [
    {
      "developerComment": {
        "lastModified": {
          "nanos": 0,
          "seconds": "string"
        },
        "text": "string"
      },
      "userComment": {
        "androidOsVersion": 0,
        "appVersionCode": 0,
        "appVersionName": "string",
        "device": "string",
        "deviceMetadata": {
          "cpuMake": "string",
          "cpuModel": "string",
          "deviceClass": "string",
          "glEsVersion": 0,
          "manufacturer": "string",
          "nativePlatform": "string",
          "productName": "string",
          "ramMb": 0,
          "screenDensityDpi": 0,
          "screenHeightPx": 0,
          "screenWidthPx": 0
        },
        "lastModified": {
          "nanos": 0,
          "seconds": "string"
        },
        "originalText": "string",
        "reviewerLanguage": "string",
        "starRating": 0,
        "text": "string",
        "thumbsDownCount": 0,
        "thumbsUpCount": 0
      }
    }
  ],
  "reviewId": "string"
}
```

<h3 id="androidpublisherreviewsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Review](#schemareview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.reviews.reply

<a id="opIdandroidpublisher.reviews.reply"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/reviews/string:reply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "replyText": "string"
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply`

Replies to a single review, or updates an existing reply.

> Body parameter

```json
{
  "replyText": "string"
}
```

<h3 id="androidpublisherreviewsreply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|reviewId|path|string|true|Unique identifier for a review.|
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
|body|body|[ReviewsReplyRequest](#schemareviewsreplyrequest)|false|none|
|» replyText|body|string|false|The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.|

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
  "result": {
    "lastEdited": {
      "nanos": 0,
      "seconds": "string"
    },
    "replyText": "string"
  }
}
```

<h3 id="androidpublisherreviewsreply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReviewsReplyResponse](#schemareviewsreplyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-systemapks">systemapks</h1>

## androidpublisher.systemapks.variants.list

<a id="opIdandroidpublisher.systemapks.variants.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/systemApks/string/variants \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants`

Returns the list of previously created system APK variants.

<h3 id="androidpublishersystemapksvariantslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|string|true|The version code of the App Bundle.|
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
  "variants": [
    {
      "deviceSpec": {
        "screenDensity": 0,
        "supportedAbis": [
          "string"
        ],
        "supportedLocales": [
          "string"
        ]
      },
      "variantId": 0
    }
  ]
}
```

<h3 id="androidpublishersystemapksvariantslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SystemApksListResponse](#schemasystemapkslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.systemapks.variants.create

<a id="opIdandroidpublisher.systemapks.variants.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/systemApks/string/variants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceSpec": {
      "screenDensity": 0,
      "supportedAbis": [
        "string"
      ],
      "supportedLocales": [
        "string"
      ]
    }
  }'
```

`POST /androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants`

Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.

> Body parameter

```json
{
  "deviceSpec": {
    "screenDensity": 0,
    "supportedAbis": [
      "string"
    ],
    "supportedLocales": [
      "string"
    ]
  }
}
```

<h3 id="androidpublishersystemapksvariantscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|string|true|The version code of the App Bundle.|
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
|body|body|[Variant](#schemavariant)|false|none|
|» deviceSpec|body|[DeviceSpec](#schemadevicespec)|false|The device spec used to generate the APK.|

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
  "deviceSpec": {
    "screenDensity": 0,
    "supportedAbis": [
      "string"
    ],
    "supportedLocales": [
      "string"
    ]
  },
  "variantId": 0
}
```

<h3 id="androidpublishersystemapksvariantscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Variant](#schemavariant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.systemapks.variants.get

<a id="opIdandroidpublisher.systemapks.variants.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/systemApks/string/variants/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}`

Returns a previously created system APK variant.

<h3 id="androidpublishersystemapksvariantsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|string|true|The version code of the App Bundle.|
|variantId|path|integer|true|The ID of a previously created system APK variant.|
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
  "deviceSpec": {
    "screenDensity": 0,
    "supportedAbis": [
      "string"
    ],
    "supportedLocales": [
      "string"
    ]
  },
  "variantId": 0
}
```

<h3 id="androidpublishersystemapksvariantsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Variant](#schemavariant)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.systemapks.variants.download

<a id="opIdandroidpublisher.systemapks.variants.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/applications/string/systemApks/string/variants/0:download \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download`

Downloads a previously created system APK which is suitable for inclusion in a system image.

<h3 id="androidpublishersystemapksvariantsdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|packageName|path|string|true|Package name of the app.|
|versionCode|path|string|true|The version code of the App Bundle.|
|variantId|path|integer|true|The ID of a previously created system APK variant.|
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

<h3 id="androidpublishersystemapksvariantsdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-android-developer-api-users">users</h1>

## androidpublisher.users.delete

<a id="opIdandroidpublisher.users.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidpublisher/v3/{name}`

Removes all access for the user to the given developer account.

<h3 id="androidpublisherusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the user to delete. Format: developers/{developer}/users/{email}|
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

<h3 id="androidpublisherusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.users.patch

<a id="opIdandroidpublisher.users.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "developerAccountPermissions": [
      "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
    ],
    "email": "string",
    "expirationTime": "string",
    "name": "string"
  }'
```

`PATCH /androidpublisher/v3/{name}`

Updates access for the user to the developer account.

> Body parameter

```json
{
  "developerAccountPermissions": [
    "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "email": "string",
  "expirationTime": "string",
  "name": "string"
}
```

<h3 id="androidpublisheruserspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".|
|updateMask|query|string|false|Optional. The list of fields to be updated.|
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
|body|body|[User](#schemauser)|false|none|
|» developerAccountPermissions|body|[string]|false|Permissions for the user which apply across the developer account.|
|» email|body|string|false|Immutable. The user's email address.|
|» expirationTime|body|string(google-datetime)|false|The time at which the user's access expires, if set. When setting this value, it must always be in the future.|
|» name|body|string|false|Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» developerAccountPermissions|DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED|
|» developerAccountPermissions|CAN_SEE_ALL_APPS|
|» developerAccountPermissions|CAN_VIEW_FINANCIAL_DATA_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PERMISSIONS_GLOBAL|
|» developerAccountPermissions|CAN_EDIT_GAMES_GLOBAL|
|» developerAccountPermissions|CAN_PUBLISH_GAMES_GLOBAL|
|» developerAccountPermissions|CAN_REPLY_TO_REVIEWS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PUBLIC_APKS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_TRACK_APKS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_TRACK_USERS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PUBLIC_LISTING_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_DRAFT_APPS_GLOBAL|
|» developerAccountPermissions|CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL|
|» developerAccountPermissions|CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_ORDERS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_APP_CONTENT_GLOBAL|

> Example responses

> 200 Response

```json
{
  "accessState": "ACCESS_STATE_UNSPECIFIED",
  "developerAccountPermissions": [
    "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "email": "string",
  "expirationTime": "string",
  "grants": [
    {
      "appLevelPermissions": [
        "APP_LEVEL_PERMISSION_UNSPECIFIED"
      ],
      "name": "string",
      "packageName": "string"
    }
  ],
  "name": "string",
  "partial": true
}
```

<h3 id="androidpublisheruserspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.users.list

<a id="opIdandroidpublisher.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidpublisher/v3/{parent}/users`

Lists all users with access to a developer account.

<h3 id="androidpublisheruserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The developer account to fetch users from. Format: developers/{developer}|
|pageSize|query|integer|false|The maximum number of results to return. This must be set to -1 to disable pagination.|
|pageToken|query|string|false|A token received from a previous call to this method, in order to retrieve further results.|
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
  "users": [
    {
      "accessState": "ACCESS_STATE_UNSPECIFIED",
      "developerAccountPermissions": [
        "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
      ],
      "email": "string",
      "expirationTime": "string",
      "grants": [
        {
          "appLevelPermissions": [
            "APP_LEVEL_PERMISSION_UNSPECIFIED"
          ],
          "name": "string",
          "packageName": "string"
        }
      ],
      "name": "string",
      "partial": true
    }
  ]
}
```

<h3 id="androidpublisheruserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUsersResponse](#schemalistusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## androidpublisher.users.create

<a id="opIdandroidpublisher.users.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidpublisher/v3/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "developerAccountPermissions": [
      "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
    ],
    "email": "string",
    "expirationTime": "string",
    "name": "string"
  }'
```

`POST /androidpublisher/v3/{parent}/users`

Grant access for a user to the given developer account.

> Body parameter

```json
{
  "developerAccountPermissions": [
    "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "email": "string",
  "expirationTime": "string",
  "name": "string"
}
```

<h3 id="androidpublisheruserscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The developer account to add the user to. Format: developers/{developer}|
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
|body|body|[User](#schemauser)|false|none|
|» developerAccountPermissions|body|[string]|false|Permissions for the user which apply across the developer account.|
|» email|body|string|false|Immutable. The user's email address.|
|» expirationTime|body|string(google-datetime)|false|The time at which the user's access expires, if set. When setting this value, it must always be in the future.|
|» name|body|string|false|Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» developerAccountPermissions|DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED|
|» developerAccountPermissions|CAN_SEE_ALL_APPS|
|» developerAccountPermissions|CAN_VIEW_FINANCIAL_DATA_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PERMISSIONS_GLOBAL|
|» developerAccountPermissions|CAN_EDIT_GAMES_GLOBAL|
|» developerAccountPermissions|CAN_PUBLISH_GAMES_GLOBAL|
|» developerAccountPermissions|CAN_REPLY_TO_REVIEWS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PUBLIC_APKS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_TRACK_APKS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_TRACK_USERS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_PUBLIC_LISTING_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_DRAFT_APPS_GLOBAL|
|» developerAccountPermissions|CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL|
|» developerAccountPermissions|CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_ORDERS_GLOBAL|
|» developerAccountPermissions|CAN_MANAGE_APP_CONTENT_GLOBAL|

> Example responses

> 200 Response

```json
{
  "accessState": "ACCESS_STATE_UNSPECIFIED",
  "developerAccountPermissions": [
    "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "email": "string",
  "expirationTime": "string",
  "grants": [
    {
      "appLevelPermissions": [
        "APP_LEVEL_PERMISSION_UNSPECIFIED"
      ],
      "name": "string",
      "packageName": "string"
    }
  ],
  "name": "string",
  "partial": true
}
```

<h3 id="androidpublisheruserscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

# Schemas

<h2 id="tocS_AcquisitionTargetingRule">AcquisitionTargetingRule</h2>
<!-- backwards compatibility -->
<a id="schemaacquisitiontargetingrule"></a>
<a id="schema_AcquisitionTargetingRule"></a>
<a id="tocSacquisitiontargetingrule"></a>
<a id="tocsacquisitiontargetingrule"></a>

```json
{
  "scope": {
    "specificSubscriptionInApp": "string"
  }
}
```

Represents a targeting rule of the form: User never had {scope} before.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|[TargetingRuleScope](#schematargetingrulescope)|false|none|Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "any subscription in app".|

<h2 id="tocS_ActivateBasePlanRequest">ActivateBasePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivatebaseplanrequest"></a>
<a id="schema_ActivateBasePlanRequest"></a>
<a id="tocSactivatebaseplanrequest"></a>
<a id="tocsactivatebaseplanrequest"></a>

```json
{}
```

Request message for ActivateBasePlan.

<h2 id="tocS_ActivateSubscriptionOfferRequest">ActivateSubscriptionOfferRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivatesubscriptionofferrequest"></a>
<a id="schema_ActivateSubscriptionOfferRequest"></a>
<a id="tocSactivatesubscriptionofferrequest"></a>
<a id="tocsactivatesubscriptionofferrequest"></a>

```json
{}
```

Request message for ActivateSubscriptionOffer.

<h2 id="tocS_Apk">Apk</h2>
<!-- backwards compatibility -->
<a id="schemaapk"></a>
<a id="schema_Apk"></a>
<a id="tocSapk"></a>
<a id="tocsapk"></a>

```json
{
  "binary": {
    "sha1": "string",
    "sha256": "string"
  },
  "versionCode": 0
}
```

Information about an APK. The resource for ApksService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binary|[ApkBinary](#schemaapkbinary)|false|none|Information about the binary payload of this APK.|
|versionCode|integer(int32)|false|none|The version code of the APK, as specified in the manifest file.|

<h2 id="tocS_ApkBinary">ApkBinary</h2>
<!-- backwards compatibility -->
<a id="schemaapkbinary"></a>
<a id="schema_ApkBinary"></a>
<a id="tocSapkbinary"></a>
<a id="tocsapkbinary"></a>

```json
{
  "sha1": "string",
  "sha256": "string"
}
```

Represents the binary payload of an APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha1|string|false|none|A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.|
|sha256|string|false|none|A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.|

<h2 id="tocS_ApksAddExternallyHostedRequest">ApksAddExternallyHostedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapksaddexternallyhostedrequest"></a>
<a id="schema_ApksAddExternallyHostedRequest"></a>
<a id="tocSapksaddexternallyhostedrequest"></a>
<a id="tocsapksaddexternallyhostedrequest"></a>

```json
{
  "externallyHostedApk": {
    "applicationLabel": "string",
    "certificateBase64s": [
      "string"
    ],
    "externallyHostedUrl": "string",
    "fileSha1Base64": "string",
    "fileSha256Base64": "string",
    "fileSize": "string",
    "iconBase64": "string",
    "maximumSdk": 0,
    "minimumSdk": 0,
    "nativeCodes": [
      "string"
    ],
    "packageName": "string",
    "usesFeatures": [
      "string"
    ],
    "usesPermissions": [
      {
        "maxSdkVersion": 0,
        "name": "string"
      }
    ],
    "versionCode": 0,
    "versionName": "string"
  }
}
```

Request to create a new externally hosted APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externallyHostedApk|[ExternallyHostedApk](#schemaexternallyhostedapk)|false|none|The definition of the externally-hosted APK and where it is located.|

<h2 id="tocS_ApksAddExternallyHostedResponse">ApksAddExternallyHostedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapksaddexternallyhostedresponse"></a>
<a id="schema_ApksAddExternallyHostedResponse"></a>
<a id="tocSapksaddexternallyhostedresponse"></a>
<a id="tocsapksaddexternallyhostedresponse"></a>

```json
{
  "externallyHostedApk": {
    "applicationLabel": "string",
    "certificateBase64s": [
      "string"
    ],
    "externallyHostedUrl": "string",
    "fileSha1Base64": "string",
    "fileSha256Base64": "string",
    "fileSize": "string",
    "iconBase64": "string",
    "maximumSdk": 0,
    "minimumSdk": 0,
    "nativeCodes": [
      "string"
    ],
    "packageName": "string",
    "usesFeatures": [
      "string"
    ],
    "usesPermissions": [
      {
        "maxSdkVersion": 0,
        "name": "string"
      }
    ],
    "versionCode": 0,
    "versionName": "string"
  }
}
```

Response for creating a new externally hosted APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externallyHostedApk|[ExternallyHostedApk](#schemaexternallyhostedapk)|false|none|The definition of the externally-hosted APK and where it is located.|

<h2 id="tocS_ApksListResponse">ApksListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapkslistresponse"></a>
<a id="schema_ApksListResponse"></a>
<a id="tocSapkslistresponse"></a>
<a id="tocsapkslistresponse"></a>

```json
{
  "apks": [
    {
      "binary": {
        "sha1": "string",
        "sha256": "string"
      },
      "versionCode": 0
    }
  ],
  "kind": "string"
}
```

Response listing all APKs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apks|[[Apk](#schemaapk)]|false|none|All APKs.|
|kind|string|false|none|The kind of this response ("androidpublisher#apksListResponse").|

<h2 id="tocS_AppDetails">AppDetails</h2>
<!-- backwards compatibility -->
<a id="schemaappdetails"></a>
<a id="schema_AppDetails"></a>
<a id="tocSappdetails"></a>
<a id="tocsappdetails"></a>

```json
{
  "contactEmail": "string",
  "contactPhone": "string",
  "contactWebsite": "string",
  "defaultLanguage": "string"
}
```

The app details. The resource for DetailsService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactEmail|string|false|none|The user-visible support email for this app.|
|contactPhone|string|false|none|The user-visible support telephone number for this app.|
|contactWebsite|string|false|none|The user-visible website for this app.|
|defaultLanguage|string|false|none|Default language code, in BCP 47 format (eg "en-US").|

<h2 id="tocS_AppEdit">AppEdit</h2>
<!-- backwards compatibility -->
<a id="schemaappedit"></a>
<a id="schema_AppEdit"></a>
<a id="tocSappedit"></a>
<a id="tocsappedit"></a>

```json
{
  "expiryTimeSeconds": "string",
  "id": "string"
}
```

An app edit. The resource for EditsService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiryTimeSeconds|string|false|read-only|Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.|
|id|string|false|read-only|Output only. Identifier of the edit. Can be used in subsequent API calls.|

<h2 id="tocS_ArchiveSubscriptionRequest">ArchiveSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchivesubscriptionrequest"></a>
<a id="schema_ArchiveSubscriptionRequest"></a>
<a id="tocSarchivesubscriptionrequest"></a>
<a id="tocsarchivesubscriptionrequest"></a>

```json
{}
```

Request message for ArchiveSubscription.

<h2 id="tocS_AutoRenewingBasePlanType">AutoRenewingBasePlanType</h2>
<!-- backwards compatibility -->
<a id="schemaautorenewingbaseplantype"></a>
<a id="schema_AutoRenewingBasePlanType"></a>
<a id="tocSautorenewingbaseplantype"></a>
<a id="tocsautorenewingbaseplantype"></a>

```json
{
  "billingPeriodDuration": "string",
  "gracePeriodDuration": "string",
  "legacyCompatible": true,
  "legacyCompatibleSubscriptionOfferId": "string",
  "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
  "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
}
```

Represents a base plan that automatically renews at the end of its subscription period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingPeriodDuration|string|false|none|Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.|
|gracePeriodDuration|string|false|none|Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.|
|legacyCompatible|boolean|false|none|Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription.|
|legacyCompatibleSubscriptionOfferId|string|false|none|Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string.|
|prorationMode|string|false|none|The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.|
|resubscribeState|string|false|none|Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|prorationMode|SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED|
|prorationMode|SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE|
|prorationMode|SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY|
|resubscribeState|RESUBSCRIBE_STATE_UNSPECIFIED|
|resubscribeState|RESUBSCRIBE_STATE_ACTIVE|
|resubscribeState|RESUBSCRIBE_STATE_INACTIVE|

<h2 id="tocS_AutoRenewingPlan">AutoRenewingPlan</h2>
<!-- backwards compatibility -->
<a id="schemaautorenewingplan"></a>
<a id="schema_AutoRenewingPlan"></a>
<a id="tocSautorenewingplan"></a>
<a id="tocsautorenewingplan"></a>

```json
{
  "autoRenewEnabled": true,
  "priceChangeDetails": {
    "expectedNewPriceChargeTime": "string",
    "newPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "priceChangeMode": "PRICE_CHANGE_MODE_UNSPECIFIED",
    "priceChangeState": "PRICE_CHANGE_STATE_UNSPECIFIED"
  }
}
```

Information related to an auto renewing plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenewEnabled|boolean|false|none|If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription|
|priceChangeDetails|[SubscriptionItemPriceChangeDetails](#schemasubscriptionitempricechangedetails)|false|none|The information of the last price change for the item since subscription signup.|

<h2 id="tocS_BasePlan">BasePlan</h2>
<!-- backwards compatibility -->
<a id="schemabaseplan"></a>
<a id="schema_BasePlan"></a>
<a id="tocSbaseplan"></a>
<a id="tocsbaseplan"></a>

```json
{
  "autoRenewingBasePlanType": {
    "billingPeriodDuration": "string",
    "gracePeriodDuration": "string",
    "legacyCompatible": true,
    "legacyCompatibleSubscriptionOfferId": "string",
    "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
    "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
  },
  "basePlanId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "eurPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "newSubscriberAvailability": true,
    "usdPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "prepaidBasePlanType": {
    "billingPeriodDuration": "string",
    "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
  },
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

A single base plan for a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenewingBasePlanType|[AutoRenewingBasePlanType](#schemaautorenewingbaseplantype)|false|none|Set when the base plan automatically renews at a regular interval.|
|basePlanId|string|false|none|Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters.|
|offerTags|[[OfferTag](#schemaoffertag)]|false|none|List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library.|
|otherRegionsConfig|[OtherRegionsBasePlanConfig](#schemaotherregionsbaseplanconfig)|false|none|Pricing information for any new locations Play may launch in the future. If omitted, the BasePlan will not be automatically available any new locations Play may launch in the future.|
|prepaidBasePlanType|[PrepaidBasePlanType](#schemaprepaidbaseplantype)|false|none|Set when the base plan does not automatically renew at the end of the billing period.|
|regionalConfigs|[[RegionalBasePlanConfig](#schemaregionalbaseplanconfig)]|false|none|Region-specific information for this base plan.|
|state|string|false|read-only|Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_Bundle">Bundle</h2>
<!-- backwards compatibility -->
<a id="schemabundle"></a>
<a id="schema_Bundle"></a>
<a id="tocSbundle"></a>
<a id="tocsbundle"></a>

```json
{
  "sha1": "string",
  "sha256": "string",
  "versionCode": 0
}
```

Information about an app bundle. The resource for BundlesService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha1|string|false|none|A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.|
|sha256|string|false|none|A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.|
|versionCode|integer(int32)|false|none|The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.|

<h2 id="tocS_BundlesListResponse">BundlesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemabundleslistresponse"></a>
<a id="schema_BundlesListResponse"></a>
<a id="tocSbundleslistresponse"></a>
<a id="tocsbundleslistresponse"></a>

```json
{
  "bundles": [
    {
      "sha1": "string",
      "sha256": "string",
      "versionCode": 0
    }
  ],
  "kind": "string"
}
```

Response listing all app bundles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|[[Bundle](#schemabundle)]|false|none|All app bundles.|
|kind|string|false|none|The kind of this response ("androidpublisher#bundlesListResponse").|

<h2 id="tocS_CancelSurveyResult">CancelSurveyResult</h2>
<!-- backwards compatibility -->
<a id="schemacancelsurveyresult"></a>
<a id="schema_CancelSurveyResult"></a>
<a id="tocScancelsurveyresult"></a>
<a id="tocscancelsurveyresult"></a>

```json
{
  "reason": "CANCEL_SURVEY_REASON_UNSPECIFIED",
  "reasonUserInput": "string"
}
```

Result of the cancel survey when the subscription was canceled by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason the user selected in the cancel survey.|
|reasonUserInput|string|false|none|Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|CANCEL_SURVEY_REASON_UNSPECIFIED|
|reason|CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE|
|reason|CANCEL_SURVEY_REASON_TECHNICAL_ISSUES|
|reason|CANCEL_SURVEY_REASON_COST_RELATED|
|reason|CANCEL_SURVEY_REASON_FOUND_BETTER_APP|
|reason|CANCEL_SURVEY_REASON_OTHERS|

<h2 id="tocS_CanceledStateContext">CanceledStateContext</h2>
<!-- backwards compatibility -->
<a id="schemacanceledstatecontext"></a>
<a id="schema_CanceledStateContext"></a>
<a id="tocScanceledstatecontext"></a>
<a id="tocscanceledstatecontext"></a>

```json
{
  "developerInitiatedCancellation": {},
  "replacementCancellation": {},
  "systemInitiatedCancellation": {},
  "userInitiatedCancellation": {
    "cancelSurveyResult": {
      "reason": "CANCEL_SURVEY_REASON_UNSPECIFIED",
      "reasonUserInput": "string"
    },
    "cancelTime": "string"
  }
}
```

Information specific to a subscription in canceled state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerInitiatedCancellation|[DeveloperInitiatedCancellation](#schemadeveloperinitiatedcancellation)|false|none|Subscription was canceled by the developer.|
|replacementCancellation|[ReplacementCancellation](#schemareplacementcancellation)|false|none|Subscription was replaced by a new subscription.|
|systemInitiatedCancellation|[SystemInitiatedCancellation](#schemasysteminitiatedcancellation)|false|none|Subscription was canceled by the system, for example because of a billing problem.|
|userInitiatedCancellation|[UserInitiatedCancellation](#schemauserinitiatedcancellation)|false|none|Subscription was canceled by user.|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "developerComment": {
    "lastModified": {
      "nanos": 0,
      "seconds": "string"
    },
    "text": "string"
  },
  "userComment": {
    "androidOsVersion": 0,
    "appVersionCode": 0,
    "appVersionName": "string",
    "device": "string",
    "deviceMetadata": {
      "cpuMake": "string",
      "cpuModel": "string",
      "deviceClass": "string",
      "glEsVersion": 0,
      "manufacturer": "string",
      "nativePlatform": "string",
      "productName": "string",
      "ramMb": 0,
      "screenDensityDpi": 0,
      "screenHeightPx": 0,
      "screenWidthPx": 0
    },
    "lastModified": {
      "nanos": 0,
      "seconds": "string"
    },
    "originalText": "string",
    "reviewerLanguage": "string",
    "starRating": 0,
    "text": "string",
    "thumbsDownCount": 0,
    "thumbsUpCount": 0
  }
}
```

An entry of conversation between user and developer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerComment|[DeveloperComment](#schemadevelopercomment)|false|none|A comment from a developer.|
|userComment|[UserComment](#schemausercomment)|false|none|A comment from a user.|

<h2 id="tocS_ConvertRegionPricesRequest">ConvertRegionPricesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconvertregionpricesrequest"></a>
<a id="schema_ConvertRegionPricesRequest"></a>
<a id="tocSconvertregionpricesrequest"></a>
<a id="tocsconvertregionpricesrequest"></a>

```json
{
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Request message for ConvertRegionPrices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[Money](#schemamoney)|false|none|The intital price to convert other regions from. Tax exclusive.|

<h2 id="tocS_ConvertRegionPricesResponse">ConvertRegionPricesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconvertregionpricesresponse"></a>
<a id="schema_ConvertRegionPricesResponse"></a>
<a id="tocSconvertregionpricesresponse"></a>
<a id="tocsconvertregionpricesresponse"></a>

```json
{
  "convertedOtherRegionsPrice": {
    "eurPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "usdPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "convertedRegionPrices": {
    "property1": {
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string",
      "taxAmount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "property2": {
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string",
      "taxAmount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    }
  }
}
```

Response message for ConvertRegionPrices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertedOtherRegionsPrice|[ConvertedOtherRegionsPrice](#schemaconvertedotherregionsprice)|false|none|Converted other regions prices in USD and EUR, to use for countries where Play doesn't support a country's local currency.|
|convertedRegionPrices|object|false|none|Map from region code to converted region price.|

<h2 id="tocS_ConvertedOtherRegionsPrice">ConvertedOtherRegionsPrice</h2>
<!-- backwards compatibility -->
<a id="schemaconvertedotherregionsprice"></a>
<a id="schema_ConvertedOtherRegionsPrice"></a>
<a id="tocSconvertedotherregionsprice"></a>
<a id="tocsconvertedotherregionsprice"></a>

```json
{
  "eurPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "usdPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Converted other regions prices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eurPrice|[Money](#schemamoney)|false|none|Price in EUR to use for the "Other regions" location exclusive of taxes.|
|usdPrice|[Money](#schemamoney)|false|none|Price in USD to use for the "Other regions" location exclusive of taxes.|

<h2 id="tocS_ConvertedRegionPrice">ConvertedRegionPrice</h2>
<!-- backwards compatibility -->
<a id="schemaconvertedregionprice"></a>
<a id="schema_ConvertedRegionPrice"></a>
<a id="tocSconvertedregionprice"></a>
<a id="tocsconvertedregionprice"></a>

```json
{
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "regionCode": "string",
  "taxAmount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

A converted region price.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[Money](#schemamoney)|false|none|The converted price tax inclusive.|
|regionCode|string|false|none|The region code of the region.|
|taxAmount|[Money](#schemamoney)|false|none|The tax amount of the converted price.|

<h2 id="tocS_CountryTargeting">CountryTargeting</h2>
<!-- backwards compatibility -->
<a id="schemacountrytargeting"></a>
<a id="schema_CountryTargeting"></a>
<a id="tocScountrytargeting"></a>
<a id="tocscountrytargeting"></a>

```json
{
  "countries": [
    "string"
  ],
  "includeRestOfWorld": true
}
```

Country targeting specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[string]|false|none|Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).|
|includeRestOfWorld|boolean|false|none|Include "rest of world" as well as explicitly targeted countries.|

<h2 id="tocS_DeactivateBasePlanRequest">DeactivateBasePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatebaseplanrequest"></a>
<a id="schema_DeactivateBasePlanRequest"></a>
<a id="tocSdeactivatebaseplanrequest"></a>
<a id="tocsdeactivatebaseplanrequest"></a>

```json
{}
```

Request message for DeactivateBasePlan.

<h2 id="tocS_DeactivateSubscriptionOfferRequest">DeactivateSubscriptionOfferRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatesubscriptionofferrequest"></a>
<a id="schema_DeactivateSubscriptionOfferRequest"></a>
<a id="tocSdeactivatesubscriptionofferrequest"></a>
<a id="tocsdeactivatesubscriptionofferrequest"></a>

```json
{}
```

Request message for DeactivateSubscriptionOffer.

<h2 id="tocS_DeobfuscationFile">DeobfuscationFile</h2>
<!-- backwards compatibility -->
<a id="schemadeobfuscationfile"></a>
<a id="schema_DeobfuscationFile"></a>
<a id="tocSdeobfuscationfile"></a>
<a id="tocsdeobfuscationfile"></a>

```json
{
  "symbolType": "deobfuscationFileTypeUnspecified"
}
```

Represents a deobfuscation file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbolType|string|false|none|The type of the deobfuscation file.|

#### Enumerated Values

|Property|Value|
|---|---|
|symbolType|deobfuscationFileTypeUnspecified|
|symbolType|proguard|
|symbolType|nativeCode|

<h2 id="tocS_DeobfuscationFilesUploadResponse">DeobfuscationFilesUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeobfuscationfilesuploadresponse"></a>
<a id="schema_DeobfuscationFilesUploadResponse"></a>
<a id="tocSdeobfuscationfilesuploadresponse"></a>
<a id="tocsdeobfuscationfilesuploadresponse"></a>

```json
{
  "deobfuscationFile": {
    "symbolType": "deobfuscationFileTypeUnspecified"
  }
}
```

Responses for the upload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deobfuscationFile|[DeobfuscationFile](#schemadeobfuscationfile)|false|none|The uploaded Deobfuscation File configuration.|

<h2 id="tocS_DeveloperComment">DeveloperComment</h2>
<!-- backwards compatibility -->
<a id="schemadevelopercomment"></a>
<a id="schema_DeveloperComment"></a>
<a id="tocSdevelopercomment"></a>
<a id="tocsdevelopercomment"></a>

```json
{
  "lastModified": {
    "nanos": 0,
    "seconds": "string"
  },
  "text": "string"
}
```

Developer entry from conversation between user and developer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastModified|[Timestamp](#schematimestamp)|false|none|The last time at which this comment was updated.|
|text|string|false|none|The content of the comment, i.e. reply body.|

<h2 id="tocS_DeveloperInitiatedCancellation">DeveloperInitiatedCancellation</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperinitiatedcancellation"></a>
<a id="schema_DeveloperInitiatedCancellation"></a>
<a id="tocSdeveloperinitiatedcancellation"></a>
<a id="tocsdeveloperinitiatedcancellation"></a>

```json
{}
```

Information specific to cancellations initiated by developers.

<h2 id="tocS_DeviceGroup">DeviceGroup</h2>
<!-- backwards compatibility -->
<a id="schemadevicegroup"></a>
<a id="schema_DeviceGroup"></a>
<a id="tocSdevicegroup"></a>
<a id="tocsdevicegroup"></a>

```json
{
  "deviceSelectors": [
    {
      "deviceRam": {
        "maxBytes": "string",
        "minBytes": "string"
      },
      "excludedDeviceIds": [
        {
          "buildBrand": "string",
          "buildDevice": "string"
        }
      ],
      "forbiddenSystemFeatures": [
        {
          "name": "string"
        }
      ],
      "includedDeviceIds": [
        {
          "buildBrand": "string",
          "buildDevice": "string"
        }
      ],
      "requiredSystemFeatures": [
        {
          "name": "string"
        }
      ]
    }
  ],
  "name": "string"
}
```

A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceSelectors|[[DeviceSelector](#schemadeviceselector)]|false|none|Device selectors for this group. A device matching any of the selectors is included in this group.|
|name|string|false|none|The name of the group.|

<h2 id="tocS_DeviceId">DeviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_DeviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
{
  "buildBrand": "string",
  "buildDevice": "string"
}
```

Identifier of a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildBrand|string|false|none|Value of Build.BRAND.|
|buildDevice|string|false|none|Value of Build.DEVICE.|

<h2 id="tocS_DeviceMetadata">DeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadevicemetadata"></a>
<a id="schema_DeviceMetadata"></a>
<a id="tocSdevicemetadata"></a>
<a id="tocsdevicemetadata"></a>

```json
{
  "cpuMake": "string",
  "cpuModel": "string",
  "deviceClass": "string",
  "glEsVersion": 0,
  "manufacturer": "string",
  "nativePlatform": "string",
  "productName": "string",
  "ramMb": 0,
  "screenDensityDpi": 0,
  "screenHeightPx": 0,
  "screenWidthPx": 0
}
```

Characteristics of the user's device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuMake|string|false|none|Device CPU make, e.g. "Qualcomm"|
|cpuModel|string|false|none|Device CPU model, e.g. "MSM8974"|
|deviceClass|string|false|none|Device class (e.g. tablet)|
|glEsVersion|integer(int32)|false|none|OpenGL version|
|manufacturer|string|false|none|Device manufacturer (e.g. Motorola)|
|nativePlatform|string|false|none|Comma separated list of native platforms (e.g. "arm", "arm7")|
|productName|string|false|none|Device model name (e.g. Droid)|
|ramMb|integer(int32)|false|none|Device RAM in Megabytes, e.g. "2048"|
|screenDensityDpi|integer(int32)|false|none|Screen density in DPI|
|screenHeightPx|integer(int32)|false|none|Screen height in pixels|
|screenWidthPx|integer(int32)|false|none|Screen width in pixels|

<h2 id="tocS_DeviceRam">DeviceRam</h2>
<!-- backwards compatibility -->
<a id="schemadeviceram"></a>
<a id="schema_DeviceRam"></a>
<a id="tocSdeviceram"></a>
<a id="tocsdeviceram"></a>

```json
{
  "maxBytes": "string",
  "minBytes": "string"
}
```

Conditions about a device's RAM capabilities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxBytes|string(int64)|false|none|Maximum RAM in bytes (bound excluded).|
|minBytes|string(int64)|false|none|Minimum RAM in bytes (bound included).|

<h2 id="tocS_DeviceSelector">DeviceSelector</h2>
<!-- backwards compatibility -->
<a id="schemadeviceselector"></a>
<a id="schema_DeviceSelector"></a>
<a id="tocSdeviceselector"></a>
<a id="tocsdeviceselector"></a>

```json
{
  "deviceRam": {
    "maxBytes": "string",
    "minBytes": "string"
  },
  "excludedDeviceIds": [
    {
      "buildBrand": "string",
      "buildDevice": "string"
    }
  ],
  "forbiddenSystemFeatures": [
    {
      "name": "string"
    }
  ],
  "includedDeviceIds": [
    {
      "buildBrand": "string",
      "buildDevice": "string"
    }
  ],
  "requiredSystemFeatures": [
    {
      "name": "string"
    }
  ]
}
```

Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceRam|[DeviceRam](#schemadeviceram)|false|none|Conditions on the device's RAM.|
|excludedDeviceIds|[[DeviceId](#schemadeviceid)]|false|none|Device models excluded by this selector, even if they match all other conditions.|
|forbiddenSystemFeatures|[[SystemFeature](#schemasystemfeature)]|false|none|A device that has any of these system features is excluded by this selector, even if it matches all other conditions.|
|includedDeviceIds|[[DeviceId](#schemadeviceid)]|false|none|Device models included by this selector.|
|requiredSystemFeatures|[[SystemFeature](#schemasystemfeature)]|false|none|A device needs to have all these system features to be included by the selector.|

<h2 id="tocS_DeviceSpec">DeviceSpec</h2>
<!-- backwards compatibility -->
<a id="schemadevicespec"></a>
<a id="schema_DeviceSpec"></a>
<a id="tocSdevicespec"></a>
<a id="tocsdevicespec"></a>

```json
{
  "screenDensity": 0,
  "supportedAbis": [
    "string"
  ],
  "supportedLocales": [
    "string"
  ]
}
```

The device spec used to generate a system APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|screenDensity|integer(uint32)|false|none|Screen dpi.|
|supportedAbis|[string]|false|none|Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".|
|supportedLocales|[string]|false|none|All installed locales represented as BCP-47 strings, e.g. "en-US".|

<h2 id="tocS_DeviceTier">DeviceTier</h2>
<!-- backwards compatibility -->
<a id="schemadevicetier"></a>
<a id="schema_DeviceTier"></a>
<a id="tocSdevicetier"></a>
<a id="tocsdevicetier"></a>

```json
{
  "deviceGroupNames": [
    "string"
  ],
  "level": 0
}
```

A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceGroupNames|[string]|false|none|Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration.|
|level|integer(int32)|false|none|The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration.|

<h2 id="tocS_DeviceTierConfig">DeviceTierConfig</h2>
<!-- backwards compatibility -->
<a id="schemadevicetierconfig"></a>
<a id="schema_DeviceTierConfig"></a>
<a id="tocSdevicetierconfig"></a>
<a id="tocsdevicetierconfig"></a>

```json
{
  "deviceGroups": [
    {
      "deviceSelectors": [
        {
          "deviceRam": {
            "maxBytes": "string",
            "minBytes": "string"
          },
          "excludedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "forbiddenSystemFeatures": [
            {
              "name": "string"
            }
          ],
          "includedDeviceIds": [
            {
              "buildBrand": "string",
              "buildDevice": "string"
            }
          ],
          "requiredSystemFeatures": [
            {
              "name": "string"
            }
          ]
        }
      ],
      "name": "string"
    }
  ],
  "deviceTierConfigId": "string",
  "deviceTierSet": {
    "deviceTiers": [
      {
        "deviceGroupNames": [
          "string"
        ],
        "level": 0
      }
    ]
  },
  "userCountrySets": [
    {
      "countryCodes": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

Configuration describing device targeting criteria for the content of an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceGroups|[[DeviceGroup](#schemadevicegroup)]|false|none|Definition of device groups for the app.|
|deviceTierConfigId|string(int64)|false|read-only|Output only. The device tier config ID.|
|deviceTierSet|[DeviceTierSet](#schemadevicetierset)|false|none|Definition of the set of device tiers for the app.|
|userCountrySets|[[UserCountrySet](#schemausercountryset)]|false|none|Definition of user country sets for the app.|

<h2 id="tocS_DeviceTierSet">DeviceTierSet</h2>
<!-- backwards compatibility -->
<a id="schemadevicetierset"></a>
<a id="schema_DeviceTierSet"></a>
<a id="tocSdevicetierset"></a>
<a id="tocsdevicetierset"></a>

```json
{
  "deviceTiers": [
    {
      "deviceGroupNames": [
        "string"
      ],
      "level": 0
    }
  ]
}
```

A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceTiers|[[DeviceTier](#schemadevicetier)]|false|none|Device tiers belonging to the set.|

<h2 id="tocS_ExpansionFile">ExpansionFile</h2>
<!-- backwards compatibility -->
<a id="schemaexpansionfile"></a>
<a id="schema_ExpansionFile"></a>
<a id="tocSexpansionfile"></a>
<a id="tocsexpansionfile"></a>

```json
{
  "fileSize": "string",
  "referencesVersion": 0
}
```

An expansion file. The resource for ExpansionFilesService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSize|string(int64)|false|none|If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.|
|referencesVersion|integer(int32)|false|none|If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.|

<h2 id="tocS_ExpansionFilesUploadResponse">ExpansionFilesUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexpansionfilesuploadresponse"></a>
<a id="schema_ExpansionFilesUploadResponse"></a>
<a id="tocSexpansionfilesuploadresponse"></a>
<a id="tocsexpansionfilesuploadresponse"></a>

```json
{
  "expansionFile": {
    "fileSize": "string",
    "referencesVersion": 0
  }
}
```

Response for uploading an expansion file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expansionFile|[ExpansionFile](#schemaexpansionfile)|false|none|The uploaded expansion file configuration.|

<h2 id="tocS_ExternalAccountIdentifiers">ExternalAccountIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaexternalaccountidentifiers"></a>
<a id="schema_ExternalAccountIdentifiers"></a>
<a id="tocSexternalaccountidentifiers"></a>
<a id="tocsexternalaccountidentifiers"></a>

```json
{
  "externalAccountId": "string",
  "obfuscatedExternalAccountId": "string",
  "obfuscatedExternalProfileId": "string"
}
```

User account identifier in the third-party service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalAccountId|string|false|none|User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.|
|obfuscatedExternalAccountId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.|
|obfuscatedExternalProfileId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.|

<h2 id="tocS_ExternalSubscription">ExternalSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaexternalsubscription"></a>
<a id="schema_ExternalSubscription"></a>
<a id="tocSexternalsubscription"></a>
<a id="tocsexternalsubscription"></a>

```json
{
  "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
}
```

Details of an external subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptionType|string|false|none|Required. The type of the external subscription.|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptionType|SUBSCRIPTION_TYPE_UNSPECIFIED|
|subscriptionType|RECURRING|
|subscriptionType|PREPAID|

<h2 id="tocS_ExternalTransaction">ExternalTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaexternaltransaction"></a>
<a id="schema_ExternalTransaction"></a>
<a id="tocSexternaltransaction"></a>
<a id="tocsexternaltransaction"></a>

```json
{
  "createTime": "string",
  "currentPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "currentTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "externalTransactionId": "string",
  "oneTimeTransaction": {
    "externalTransactionToken": "string"
  },
  "originalPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "originalTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  },
  "packageName": "string",
  "recurringTransaction": {
    "externalSubscription": {
      "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
    },
    "externalTransactionToken": "string",
    "initialExternalTransactionId": "string"
  },
  "testPurchase": {},
  "transactionState": "TRANSACTION_STATE_UNSPECIFIED",
  "transactionTime": "string",
  "userTaxAddress": {
    "regionCode": "string"
  }
}
```

The details of an external transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when this transaction was created. This is the time when Google was notified of the transaction.|
|currentPreTaxAmount|[Price](#schemaprice)|false|none|Output only. The current transaction amount before tax. This represents the current pre-tax amount including any refunds that may have been applied to this transaction.|
|currentTaxAmount|[Price](#schemaprice)|false|none|Output only. The current tax amount. This represents the current tax amount including any refunds that may have been applied to this transaction.|
|externalTransactionId|string|false|read-only|Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction.|
|oneTimeTransaction|[OneTimeExternalTransaction](#schemaonetimeexternaltransaction)|false|none|This is a one-time transaction and not part of a subscription.|
|originalPreTaxAmount|[Price](#schemaprice)|false|none|Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied.|
|originalTaxAmount|[Price](#schemaprice)|false|none|Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied.|
|packageName|string|false|read-only|Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app').|
|recurringTransaction|[RecurringExternalTransaction](#schemarecurringexternaltransaction)|false|none|This transaction is part of a recurring series of transactions.|
|testPurchase|[ExternalTransactionTestPurchase](#schemaexternaltransactiontestpurchase)|false|none|Output only. If set, this transaction was a test purchase. Google will not charge for a test transaction.|
|transactionState|string|false|read-only|Output only. The current state of the transaction.|
|transactionTime|string(google-datetime)|false|none|Required. The time when the transaction was completed.|
|userTaxAddress|[ExternalTransactionAddress](#schemaexternaltransactionaddress)|false|none|Required. User address for tax computation.|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionState|TRANSACTION_STATE_UNSPECIFIED|
|transactionState|TRANSACTION_REPORTED|
|transactionState|TRANSACTION_CANCELED|

<h2 id="tocS_ExternalTransactionAddress">ExternalTransactionAddress</h2>
<!-- backwards compatibility -->
<a id="schemaexternaltransactionaddress"></a>
<a id="schema_ExternalTransactionAddress"></a>
<a id="tocSexternaltransactionaddress"></a>
<a id="tocsexternaltransactionaddress"></a>

```json
{
  "regionCode": "string"
}
```

User's address for the external transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionCode|string|false|none|Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes).|

<h2 id="tocS_ExternalTransactionTestPurchase">ExternalTransactionTestPurchase</h2>
<!-- backwards compatibility -->
<a id="schemaexternaltransactiontestpurchase"></a>
<a id="schema_ExternalTransactionTestPurchase"></a>
<a id="tocSexternaltransactiontestpurchase"></a>
<a id="tocsexternaltransactiontestpurchase"></a>

```json
{}
```

Represents a transaction performed using a test account. These transactions will not be charged by Google.

<h2 id="tocS_ExternallyHostedApk">ExternallyHostedApk</h2>
<!-- backwards compatibility -->
<a id="schemaexternallyhostedapk"></a>
<a id="schema_ExternallyHostedApk"></a>
<a id="tocSexternallyhostedapk"></a>
<a id="tocsexternallyhostedapk"></a>

```json
{
  "applicationLabel": "string",
  "certificateBase64s": [
    "string"
  ],
  "externallyHostedUrl": "string",
  "fileSha1Base64": "string",
  "fileSha256Base64": "string",
  "fileSize": "string",
  "iconBase64": "string",
  "maximumSdk": 0,
  "minimumSdk": 0,
  "nativeCodes": [
    "string"
  ],
  "packageName": "string",
  "usesFeatures": [
    "string"
  ],
  "usesPermissions": [
    {
      "maxSdkVersion": 0,
      "name": "string"
    }
  ],
  "versionCode": 0,
  "versionName": "string"
}
```

Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationLabel|string|false|none|The application label.|
|certificateBase64s|[string]|false|none|A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array.|
|externallyHostedUrl|string|false|none|The URL at which the APK is hosted. This must be an https URL.|
|fileSha1Base64|string|false|none|The sha1 checksum of this APK, represented as a base64 encoded byte array.|
|fileSha256Base64|string|false|none|The sha256 checksum of this APK, represented as a base64 encoded byte array.|
|fileSize|string(int64)|false|none|The file size in bytes of this APK.|
|iconBase64|string|false|none|The icon image from the APK, as a base64 encoded byte array.|
|maximumSdk|integer(int32)|false|none|The maximum SDK supported by this APK (optional).|
|minimumSdk|integer(int32)|false|none|The minimum SDK targeted by this APK.|
|nativeCodes|[string]|false|none|The native code environments supported by this APK (optional).|
|packageName|string|false|none|The package name.|
|usesFeatures|[string]|false|none|The features required by this APK (optional).|
|usesPermissions|[[UsesPermission](#schemausespermission)]|false|none|The permissions requested by this APK.|
|versionCode|integer(int32)|false|none|The version code of this APK.|
|versionName|string|false|none|The version name of this APK.|

<h2 id="tocS_FullRefund">FullRefund</h2>
<!-- backwards compatibility -->
<a id="schemafullrefund"></a>
<a id="schema_FullRefund"></a>
<a id="tocSfullrefund"></a>
<a id="tocsfullrefund"></a>

```json
{}
```

A full refund of the remaining amount of a transaction.

<h2 id="tocS_GeneratedApksListResponse">GeneratedApksListResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratedapkslistresponse"></a>
<a id="schema_GeneratedApksListResponse"></a>
<a id="tocSgeneratedapkslistresponse"></a>
<a id="tocsgeneratedapkslistresponse"></a>

```json
{
  "generatedApks": [
    {
      "certificateSha256Hash": "string",
      "generatedAssetPackSlices": [
        {
          "downloadId": "string",
          "moduleName": "string",
          "sliceId": "string",
          "version": "string"
        }
      ],
      "generatedSplitApks": [
        {
          "downloadId": "string",
          "moduleName": "string",
          "splitId": "string",
          "variantId": 0
        }
      ],
      "generatedStandaloneApks": [
        {
          "downloadId": "string",
          "variantId": 0
        }
      ],
      "generatedUniversalApk": {
        "downloadId": "string"
      }
    }
  ]
}
```

Response to list generated APKs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generatedApks|[[GeneratedApksPerSigningKey](#schemageneratedapkspersigningkey)]|false|none|All generated APKs, grouped by the APK signing key.|

<h2 id="tocS_GeneratedApksPerSigningKey">GeneratedApksPerSigningKey</h2>
<!-- backwards compatibility -->
<a id="schemageneratedapkspersigningkey"></a>
<a id="schema_GeneratedApksPerSigningKey"></a>
<a id="tocSgeneratedapkspersigningkey"></a>
<a id="tocsgeneratedapkspersigningkey"></a>

```json
{
  "certificateSha256Hash": "string",
  "generatedAssetPackSlices": [
    {
      "downloadId": "string",
      "moduleName": "string",
      "sliceId": "string",
      "version": "string"
    }
  ],
  "generatedSplitApks": [
    {
      "downloadId": "string",
      "moduleName": "string",
      "splitId": "string",
      "variantId": 0
    }
  ],
  "generatedStandaloneApks": [
    {
      "downloadId": "string",
      "variantId": 0
    }
  ],
  "generatedUniversalApk": {
    "downloadId": "string"
  }
}
```

Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateSha256Hash|string|false|none|SHA256 hash of the APK signing public key certificate.|
|generatedAssetPackSlices|[[GeneratedAssetPackSlice](#schemageneratedassetpackslice)]|false|none|List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash.|
|generatedSplitApks|[[GeneratedSplitApk](#schemageneratedsplitapk)]|false|none|List of generated split APKs, signed with a key corresponding to certificate_sha256_hash.|
|generatedStandaloneApks|[[GeneratedStandaloneApk](#schemageneratedstandaloneapk)]|false|none|List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash.|
|generatedUniversalApk|[GeneratedUniversalApk](#schemagenerateduniversalapk)|false|none|Generated universal APK, signed with a key corresponding to certificate_sha256_hash. This field is not set if no universal APK was generated for this signing key.|

<h2 id="tocS_GeneratedAssetPackSlice">GeneratedAssetPackSlice</h2>
<!-- backwards compatibility -->
<a id="schemageneratedassetpackslice"></a>
<a id="schema_GeneratedAssetPackSlice"></a>
<a id="tocSgeneratedassetpackslice"></a>
<a id="tocsgeneratedassetpackslice"></a>

```json
{
  "downloadId": "string",
  "moduleName": "string",
  "sliceId": "string",
  "version": "string"
}
```

Download metadata for an asset pack slice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadId|string|false|none|Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.|
|moduleName|string|false|none|Name of the module that this asset slice belongs to.|
|sliceId|string|false|none|Asset slice ID.|
|version|string(int64)|false|none|Asset module version.|

<h2 id="tocS_GeneratedSplitApk">GeneratedSplitApk</h2>
<!-- backwards compatibility -->
<a id="schemageneratedsplitapk"></a>
<a id="schema_GeneratedSplitApk"></a>
<a id="tocSgeneratedsplitapk"></a>
<a id="tocsgeneratedsplitapk"></a>

```json
{
  "downloadId": "string",
  "moduleName": "string",
  "splitId": "string",
  "variantId": 0
}
```

Download metadata for a split APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadId|string|false|none|Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.|
|moduleName|string|false|none|Name of the module that this APK belongs to.|
|splitId|string|false|none|Split ID. Empty for the main split of the base module.|
|variantId|integer(int32)|false|none|ID of the generated variant.|

<h2 id="tocS_GeneratedStandaloneApk">GeneratedStandaloneApk</h2>
<!-- backwards compatibility -->
<a id="schemageneratedstandaloneapk"></a>
<a id="schema_GeneratedStandaloneApk"></a>
<a id="tocSgeneratedstandaloneapk"></a>
<a id="tocsgeneratedstandaloneapk"></a>

```json
{
  "downloadId": "string",
  "variantId": 0
}
```

Download metadata for a standalone APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadId|string|false|none|Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.|
|variantId|integer(int32)|false|none|ID of the generated variant.|

<h2 id="tocS_GeneratedUniversalApk">GeneratedUniversalApk</h2>
<!-- backwards compatibility -->
<a id="schemagenerateduniversalapk"></a>
<a id="schema_GeneratedUniversalApk"></a>
<a id="tocSgenerateduniversalapk"></a>
<a id="tocsgenerateduniversalapk"></a>

```json
{
  "downloadId": "string"
}
```

Download metadata for a universal APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadId|string|false|none|Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.|

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "appLevelPermissions": [
    "APP_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "name": "string",
  "packageName": "string"
}
```

An access grant resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appLevelPermissions|[string]|false|none|The permissions granted to the user for this app.|
|name|string|false|none|Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.|
|packageName|string|false|none|Immutable. The package name of the app. This will be empty for draft apps.|

#### Enumerated Values

|Property|Value|
|---|---|
|appLevelPermissions|APP_LEVEL_PERMISSION_UNSPECIFIED|
|appLevelPermissions|CAN_ACCESS_APP|
|appLevelPermissions|CAN_VIEW_FINANCIAL_DATA|
|appLevelPermissions|CAN_MANAGE_PERMISSIONS|
|appLevelPermissions|CAN_REPLY_TO_REVIEWS|
|appLevelPermissions|CAN_MANAGE_PUBLIC_APKS|
|appLevelPermissions|CAN_MANAGE_TRACK_APKS|
|appLevelPermissions|CAN_MANAGE_TRACK_USERS|
|appLevelPermissions|CAN_MANAGE_PUBLIC_LISTING|
|appLevelPermissions|CAN_MANAGE_DRAFT_APPS|
|appLevelPermissions|CAN_MANAGE_ORDERS|
|appLevelPermissions|CAN_MANAGE_APP_CONTENT|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "id": "string",
  "sha1": "string",
  "sha256": "string",
  "url": "string"
}
```

An uploaded image. The resource for ImagesService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A unique id representing this image.|
|sha1|string|false|none|A sha1 hash of the image.|
|sha256|string|false|none|A sha256 hash of the image.|
|url|string|false|none|A URL that will serve a preview of the image.|

<h2 id="tocS_ImagesDeleteAllResponse">ImagesDeleteAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimagesdeleteallresponse"></a>
<a id="schema_ImagesDeleteAllResponse"></a>
<a id="tocSimagesdeleteallresponse"></a>
<a id="tocsimagesdeleteallresponse"></a>

```json
{
  "deleted": [
    {
      "id": "string",
      "sha1": "string",
      "sha256": "string",
      "url": "string"
    }
  ]
}
```

Response for deleting all images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|[[Image](#schemaimage)]|false|none|The deleted images.|

<h2 id="tocS_ImagesListResponse">ImagesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimageslistresponse"></a>
<a id="schema_ImagesListResponse"></a>
<a id="tocSimageslistresponse"></a>
<a id="tocsimageslistresponse"></a>

```json
{
  "images": [
    {
      "id": "string",
      "sha1": "string",
      "sha256": "string",
      "url": "string"
    }
  ]
}
```

Response listing all images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[Image](#schemaimage)]|false|none|All listed Images.|

<h2 id="tocS_ImagesUploadResponse">ImagesUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimagesuploadresponse"></a>
<a id="schema_ImagesUploadResponse"></a>
<a id="tocSimagesuploadresponse"></a>
<a id="tocsimagesuploadresponse"></a>

```json
{
  "image": {
    "id": "string",
    "sha1": "string",
    "sha256": "string",
    "url": "string"
  }
}
```

Response for uploading an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|The uploaded image.|

<h2 id="tocS_InAppProduct">InAppProduct</h2>
<!-- backwards compatibility -->
<a id="schemainappproduct"></a>
<a id="schema_InAppProduct"></a>
<a id="tocSinappproduct"></a>
<a id="tocsinappproduct"></a>

```json
{
  "defaultLanguage": "string",
  "defaultPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "gracePeriod": "string",
  "listings": {
    "property1": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    },
    "property2": {
      "benefits": [
        "string"
      ],
      "description": "string",
      "title": "string"
    }
  },
  "managedProductTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "packageName": "string",
  "prices": {
    "property1": {
      "currency": "string",
      "priceMicros": "string"
    },
    "property2": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "purchaseType": "purchaseTypeUnspecified",
  "sku": "string",
  "status": "statusUnspecified",
  "subscriptionPeriod": "string",
  "subscriptionTaxesAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  },
  "trialPeriod": "string"
}
```

An in-app product. The resource for InappproductsService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLanguage|string|false|none|Default language of the localized data, as defined by BCP-47. e.g. "en-US".|
|defaultPrice|[Price](#schemaprice)|false|none|Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.|
|gracePeriod|string|false|none|Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).|
|listings|object|false|none|List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".|
|managedProductTaxesAndComplianceSettings|[ManagedProductTaxAndComplianceSettings](#schemamanagedproducttaxandcompliancesettings)|false|none|Details about taxes and legal compliance. Only applicable to managed products.|
|packageName|string|false|none|Package name of the parent app.|
|prices|object|false|none|Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.|
|purchaseType|string|false|none|The type of the product, e.g. a recurring subscription.|
|sku|string|false|none|Stock-keeping-unit (SKU) of the product, unique within an app.|
|status|string|false|none|The status of the product, e.g. whether it's active.|
|subscriptionPeriod|string|false|none|Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).|
|subscriptionTaxesAndComplianceSettings|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|none|Details about taxes and legal compliance. Only applicable to subscription products.|
|trialPeriod|string|false|none|Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).|

#### Enumerated Values

|Property|Value|
|---|---|
|purchaseType|purchaseTypeUnspecified|
|purchaseType|managedUser|
|purchaseType|subscription|
|status|statusUnspecified|
|status|active|
|status|inactive|

<h2 id="tocS_InAppProductListing">InAppProductListing</h2>
<!-- backwards compatibility -->
<a id="schemainappproductlisting"></a>
<a id="schema_InAppProductListing"></a>
<a id="tocSinappproductlisting"></a>
<a id="tocsinappproductlisting"></a>

```json
{
  "benefits": [
    "string"
  ],
  "description": "string",
  "title": "string"
}
```

Store listing of a single in-app product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefits|[string]|false|none|Localized entitlement benefits for a subscription.|
|description|string|false|none|Description for the store listing.|
|title|string|false|none|Title for the store listing.|

<h2 id="tocS_InappproductsListResponse">InappproductsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemainappproductslistresponse"></a>
<a id="schema_InappproductsListResponse"></a>
<a id="tocSinappproductslistresponse"></a>
<a id="tocsinappproductslistresponse"></a>

```json
{
  "inappproduct": [
    {
      "defaultLanguage": "string",
      "defaultPrice": {
        "currency": "string",
        "priceMicros": "string"
      },
      "gracePeriod": "string",
      "listings": {
        "property1": {
          "benefits": [
            "string"
          ],
          "description": "string",
          "title": "string"
        },
        "property2": {
          "benefits": [
            "string"
          ],
          "description": "string",
          "title": "string"
        }
      },
      "managedProductTaxesAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      },
      "packageName": "string",
      "prices": {
        "property1": {
          "currency": "string",
          "priceMicros": "string"
        },
        "property2": {
          "currency": "string",
          "priceMicros": "string"
        }
      },
      "purchaseType": "purchaseTypeUnspecified",
      "sku": "string",
      "status": "statusUnspecified",
      "subscriptionPeriod": "string",
      "subscriptionTaxesAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      },
      "trialPeriod": "string"
    }
  ],
  "kind": "string",
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

Response listing all in-app products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inappproduct|[[InAppProduct](#schemainappproduct)]|false|none|All in-app products.|
|kind|string|false|none|The kind of this response ("androidpublisher#inappproductsListResponse").|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Deprecated and unset.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Pagination token, to handle a number of products that is over one page.|

<h2 id="tocS_InternalAppSharingArtifact">InternalAppSharingArtifact</h2>
<!-- backwards compatibility -->
<a id="schemainternalappsharingartifact"></a>
<a id="schema_InternalAppSharingArtifact"></a>
<a id="tocSinternalappsharingartifact"></a>
<a id="tocsinternalappsharingartifact"></a>

```json
{
  "certificateFingerprint": "string",
  "downloadUrl": "string",
  "sha256": "string"
}
```

An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateFingerprint|string|false|none|The sha256 fingerprint of the certificate used to sign the generated artifact.|
|downloadUrl|string|false|none|The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.|
|sha256|string|false|none|The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.|

<h2 id="tocS_IntroductoryPriceInfo">IntroductoryPriceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaintroductorypriceinfo"></a>
<a id="schema_IntroductoryPriceInfo"></a>
<a id="tocSintroductorypriceinfo"></a>
<a id="tocsintroductorypriceinfo"></a>

```json
{
  "introductoryPriceAmountMicros": "string",
  "introductoryPriceCurrencyCode": "string",
  "introductoryPriceCycles": 0,
  "introductoryPricePeriod": "string"
}
```

Contains the introductory price information for a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|introductoryPriceAmountMicros|string(int64)|false|none|Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.|
|introductoryPriceCurrencyCode|string|false|none|ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".|
|introductoryPriceCycles|integer(int32)|false|none|The number of billing period to offer introductory pricing.|
|introductoryPricePeriod|string|false|none|Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).|

<h2 id="tocS_ListDeviceTierConfigsResponse">ListDeviceTierConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicetierconfigsresponse"></a>
<a id="schema_ListDeviceTierConfigsResponse"></a>
<a id="tocSlistdevicetierconfigsresponse"></a>
<a id="tocslistdevicetierconfigsresponse"></a>

```json
{
  "deviceTierConfigs": [
    {
      "deviceGroups": [
        {
          "deviceSelectors": [
            {
              "deviceRam": {
                "maxBytes": "string",
                "minBytes": "string"
              },
              "excludedDeviceIds": [
                {
                  "buildBrand": "string",
                  "buildDevice": "string"
                }
              ],
              "forbiddenSystemFeatures": [
                {
                  "name": "string"
                }
              ],
              "includedDeviceIds": [
                {
                  "buildBrand": "string",
                  "buildDevice": "string"
                }
              ],
              "requiredSystemFeatures": [
                {
                  "name": "string"
                }
              ]
            }
          ],
          "name": "string"
        }
      ],
      "deviceTierConfigId": "string",
      "deviceTierSet": {
        "deviceTiers": [
          {
            "deviceGroupNames": [
              "string"
            ],
            "level": 0
          }
        ]
      },
      "userCountrySets": [
        {
          "countryCodes": [
            "string"
          ],
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response listing existing device tier configs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceTierConfigs|[[DeviceTierConfig](#schemadevicetierconfig)]|false|none|Device tier configs created by the developer.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListSubscriptionOffersResponse">ListSubscriptionOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionoffersresponse"></a>
<a id="schema_ListSubscriptionOffersResponse"></a>
<a id="tocSlistsubscriptionoffersresponse"></a>
<a id="tocslistsubscriptionoffersresponse"></a>

```json
{
  "nextPageToken": "string",
  "subscriptionOffers": [
    {
      "basePlanId": "string",
      "offerId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "otherRegionsNewSubscriberAvailability": true
      },
      "packageName": "string",
      "phases": [
        {
          "duration": "string",
          "otherRegionsConfig": {
            "absoluteDiscounts": {
              "eurPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "usdPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "otherRegionsPrices": {
              "eurPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "usdPrice": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              }
            },
            "relativeDiscount": 0
          },
          "recurrenceCount": 0,
          "regionalConfigs": [
            {
              "absoluteDiscount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "regionCode": "string",
              "relativeDiscount": 0
            }
          ]
        }
      ],
      "productId": "string",
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED",
      "targeting": {
        "acquisitionRule": {
          "scope": {
            "specificSubscriptionInApp": "string"
          }
        },
        "upgradeRule": {
          "billingPeriodDuration": "string",
          "oncePerUser": true,
          "scope": {
            "specificSubscriptionInApp": "string"
          }
        }
      }
    }
  ]
}
```

Response message for ListSubscriptionOffers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|subscriptionOffers|[[SubscriptionOffer](#schemasubscriptionoffer)]|false|none|The subscription offers from the specified subscription.|

<h2 id="tocS_ListSubscriptionsResponse">ListSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscriptionsresponse"></a>
<a id="schema_ListSubscriptionsResponse"></a>
<a id="tocSlistsubscriptionsresponse"></a>
<a id="tocslistsubscriptionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "subscriptions": [
    {
      "archived": true,
      "basePlans": [
        {
          "autoRenewingBasePlanType": {
            "billingPeriodDuration": "string",
            "gracePeriodDuration": "string",
            "legacyCompatible": true,
            "legacyCompatibleSubscriptionOfferId": "string",
            "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
            "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
          },
          "basePlanId": "string",
          "offerTags": [
            {
              "tag": "string"
            }
          ],
          "otherRegionsConfig": {
            "eurPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "newSubscriberAvailability": true,
            "usdPrice": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            }
          },
          "prepaidBasePlanType": {
            "billingPeriodDuration": "string",
            "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
          },
          "regionalConfigs": [
            {
              "newSubscriberAvailability": true,
              "price": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "regionCode": "string"
            }
          ],
          "state": "STATE_UNSPECIFIED"
        }
      ],
      "listings": [
        {
          "benefits": [
            "string"
          ],
          "description": "string",
          "languageCode": "string",
          "title": "string"
        }
      ],
      "packageName": "string",
      "productId": "string",
      "taxAndComplianceSettings": {
        "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
        "taxRateInfoByRegionCode": {
          "property1": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          },
          "property2": {
            "eligibleForStreamingServiceTaxRate": true,
            "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
            "taxTier": "TAX_TIER_UNSPECIFIED"
          }
        }
      }
    }
  ]
}
```

Response message for ListSubscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|subscriptions|[[Subscription](#schemasubscription)]|false|none|The subscriptions from the specified app.|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "nextPageToken": "string",
  "users": [
    {
      "accessState": "ACCESS_STATE_UNSPECIFIED",
      "developerAccountPermissions": [
        "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
      ],
      "email": "string",
      "expirationTime": "string",
      "grants": [
        {
          "appLevelPermissions": [
            "APP_LEVEL_PERMISSION_UNSPECIFIED"
          ],
          "name": "string",
          "packageName": "string"
        }
      ],
      "name": "string",
      "partial": true
    }
  ]
}
```

A response containing one or more users with access to an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return.|
|users|[[User](#schemauser)]|false|none|The resulting users.|

<h2 id="tocS_Listing">Listing</h2>
<!-- backwards compatibility -->
<a id="schemalisting"></a>
<a id="schema_Listing"></a>
<a id="tocSlisting"></a>
<a id="tocslisting"></a>

```json
{
  "fullDescription": "string",
  "language": "string",
  "shortDescription": "string",
  "title": "string",
  "video": "string"
}
```

A localized store listing. The resource for ListingsService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullDescription|string|false|none|Full description of the app.|
|language|string|false|none|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
|shortDescription|string|false|none|Short description of the app.|
|title|string|false|none|Localized title of the app.|
|video|string|false|none|URL of a promotional YouTube video for the app.|

<h2 id="tocS_ListingsListResponse">ListingsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistingslistresponse"></a>
<a id="schema_ListingsListResponse"></a>
<a id="tocSlistingslistresponse"></a>
<a id="tocslistingslistresponse"></a>

```json
{
  "kind": "string",
  "listings": [
    {
      "fullDescription": "string",
      "language": "string",
      "shortDescription": "string",
      "title": "string",
      "video": "string"
    }
  ]
}
```

Response listing all localized listings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of this response ("androidpublisher#listingsListResponse").|
|listings|[[Listing](#schemalisting)]|false|none|All localized listings.|

<h2 id="tocS_LocalizedText">LocalizedText</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedtext"></a>
<a id="schema_LocalizedText"></a>
<a id="tocSlocalizedtext"></a>
<a id="tocslocalizedtext"></a>

```json
{
  "language": "string",
  "text": "string"
}
```

Localized text in given language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).|
|text|string|false|none|The text in the given language.|

<h2 id="tocS_ManagedProductTaxAndComplianceSettings">ManagedProductTaxAndComplianceSettings</h2>
<!-- backwards compatibility -->
<a id="schemamanagedproducttaxandcompliancesettings"></a>
<a id="schema_ManagedProductTaxAndComplianceSettings"></a>
<a id="tocSmanagedproducttaxandcompliancesettings"></a>
<a id="tocsmanagedproducttaxandcompliancesettings"></a>

```json
{
  "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
  "taxRateInfoByRegionCode": {
    "property1": {
      "eligibleForStreamingServiceTaxRate": true,
      "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
      "taxTier": "TAX_TIER_UNSPECIFIED"
    },
    "property2": {
      "eligibleForStreamingServiceTaxRate": true,
      "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
      "taxTier": "TAX_TIER_UNSPECIFIED"
    }
  }
}
```

Details about taxation and legal compliance for managed products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eeaWithdrawalRightType|string|false|none|Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.|
|taxRateInfoByRegionCode|object|false|none|A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".|

#### Enumerated Values

|Property|Value|
|---|---|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_DIGITAL_CONTENT|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_SERVICE|

<h2 id="tocS_MigrateBasePlanPricesRequest">MigrateBasePlanPricesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamigratebaseplanpricesrequest"></a>
<a id="schema_MigrateBasePlanPricesRequest"></a>
<a id="tocSmigratebaseplanpricesrequest"></a>
<a id="tocsmigratebaseplanpricesrequest"></a>

```json
{
  "regionalPriceMigrations": [
    {
      "oldestAllowedPriceVersionTime": "string",
      "regionCode": "string"
    }
  ],
  "regionsVersion": {
    "version": "string"
  }
}
```

Request message for MigrateBasePlanPrices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionalPriceMigrations|[[RegionalPriceMigrationConfig](#schemaregionalpricemigrationconfig)]|false|none|Required. The regional prices to update.|
|regionsVersion|[RegionsVersion](#schemaregionsversion)|false|none|Required. The version of the available regions being used for the regional_price_migrations.|

<h2 id="tocS_MigrateBasePlanPricesResponse">MigrateBasePlanPricesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamigratebaseplanpricesresponse"></a>
<a id="schema_MigrateBasePlanPricesResponse"></a>
<a id="tocSmigratebaseplanpricesresponse"></a>
<a id="tocsmigratebaseplanpricesresponse"></a>

```json
{}
```

Response message for MigrateBasePlanPrices.

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_OfferDetails">OfferDetails</h2>
<!-- backwards compatibility -->
<a id="schemaofferdetails"></a>
<a id="schema_OfferDetails"></a>
<a id="tocSofferdetails"></a>
<a id="tocsofferdetails"></a>

```json
{
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    "string"
  ]
}
```

Offer details information related to a purchase line item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePlanId|string|false|none|The base plan ID. Present for all base plan and offers.|
|offerId|string|false|none|The offer ID. Only present for discounted offers.|
|offerTags|[string]|false|none|The latest offer tags associated with the offer. It includes tags inherited from the base plan.|

<h2 id="tocS_OfferTag">OfferTag</h2>
<!-- backwards compatibility -->
<a id="schemaoffertag"></a>
<a id="schema_OfferTag"></a>
<a id="tocSoffertag"></a>
<a id="tocsoffertag"></a>

```json
{
  "tag": "string"
}
```

Represents a custom tag specified for base plans and subscription offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters.|

<h2 id="tocS_OneTimeExternalTransaction">OneTimeExternalTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaonetimeexternaltransaction"></a>
<a id="schema_OneTimeExternalTransaction"></a>
<a id="tocSonetimeexternaltransaction"></a>
<a id="tocsonetimeexternaltransaction"></a>

```json
{
  "externalTransactionToken": "string"
}
```

Represents a one-time transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalTransactionToken|string|false|none|Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched.|

<h2 id="tocS_OtherRegionsBasePlanConfig">OtherRegionsBasePlanConfig</h2>
<!-- backwards compatibility -->
<a id="schemaotherregionsbaseplanconfig"></a>
<a id="schema_OtherRegionsBasePlanConfig"></a>
<a id="tocSotherregionsbaseplanconfig"></a>
<a id="tocsotherregionsbaseplanconfig"></a>

```json
{
  "eurPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "newSubscriberAvailability": true,
  "usdPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Pricing information for any new locations Play may launch in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eurPrice|[Money](#schemamoney)|false|none|Required. Price in EUR to use for any new locations Play may launch in.|
|newSubscriberAvailability|boolean|false|none|Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false.|
|usdPrice|[Money](#schemamoney)|false|none|Required. Price in USD to use for any new locations Play may launch in.|

<h2 id="tocS_OtherRegionsSubscriptionOfferConfig">OtherRegionsSubscriptionOfferConfig</h2>
<!-- backwards compatibility -->
<a id="schemaotherregionssubscriptionofferconfig"></a>
<a id="schema_OtherRegionsSubscriptionOfferConfig"></a>
<a id="tocSotherregionssubscriptionofferconfig"></a>
<a id="tocsotherregionssubscriptionofferconfig"></a>

```json
{
  "otherRegionsNewSubscriberAvailability": true
}
```

Configuration for any new locations Play may launch in specified on a subscription offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otherRegionsNewSubscriberAvailability|boolean|false|none|Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false.|

<h2 id="tocS_OtherRegionsSubscriptionOfferPhaseConfig">OtherRegionsSubscriptionOfferPhaseConfig</h2>
<!-- backwards compatibility -->
<a id="schemaotherregionssubscriptionofferphaseconfig"></a>
<a id="schema_OtherRegionsSubscriptionOfferPhaseConfig"></a>
<a id="tocSotherregionssubscriptionofferphaseconfig"></a>
<a id="tocsotherregionssubscriptionofferphaseconfig"></a>

```json
{
  "absoluteDiscounts": {
    "eurPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "usdPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "otherRegionsPrices": {
    "eurPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "usdPrice": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  },
  "relativeDiscount": 0
}
```

Configuration for any new locations Play may launch in for a single offer phase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteDiscounts|[OtherRegionsSubscriptionOfferPhasePrices](#schemaotherregionssubscriptionofferphaseprices)|false|none|The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for any new locations Play may launch in.|
|otherRegionsPrices|[OtherRegionsSubscriptionOfferPhasePrices](#schemaotherregionssubscriptionofferphaseprices)|false|none|The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for any new locations Play may launch in.|
|relativeDiscount|number(double)|false|none|The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in.|

<h2 id="tocS_OtherRegionsSubscriptionOfferPhasePrices">OtherRegionsSubscriptionOfferPhasePrices</h2>
<!-- backwards compatibility -->
<a id="schemaotherregionssubscriptionofferphaseprices"></a>
<a id="schema_OtherRegionsSubscriptionOfferPhasePrices"></a>
<a id="tocSotherregionssubscriptionofferphaseprices"></a>
<a id="tocsotherregionssubscriptionofferphaseprices"></a>

```json
{
  "eurPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "usdPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Pricing information for any new locations Play may launch in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eurPrice|[Money](#schemamoney)|false|none|Required. Price in EUR to use for any new locations Play may launch in.|
|usdPrice|[Money](#schemamoney)|false|none|Required. Price in USD to use for any new locations Play may launch in.|

<h2 id="tocS_PageInfo">PageInfo</h2>
<!-- backwards compatibility -->
<a id="schemapageinfo"></a>
<a id="schema_PageInfo"></a>
<a id="tocSpageinfo"></a>
<a id="tocspageinfo"></a>

```json
{
  "resultPerPage": 0,
  "startIndex": 0,
  "totalResults": 0
}
```

Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultPerPage|integer(int32)|false|none|Maximum number of results returned in one page. ! The number of results included in the API response.|
|startIndex|integer(int32)|false|none|Index of the first result returned in the current page.|
|totalResults|integer(int32)|false|none|Total number of results available on the backend ! The total number of results in the result set.|

<h2 id="tocS_PartialRefund">PartialRefund</h2>
<!-- backwards compatibility -->
<a id="schemapartialrefund"></a>
<a id="schema_PartialRefund"></a>
<a id="tocSpartialrefund"></a>
<a id="tocspartialrefund"></a>

```json
{
  "refundId": "string",
  "refundPreTaxAmount": {
    "currency": "string",
    "priceMicros": "string"
  }
}
```

A partial refund of a transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refundId|string|false|none|Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction.|
|refundPreTaxAmount|[Price](#schemaprice)|false|none|Required. The pre-tax amount of the partial refund. Should be less than the remaining pre-tax amount of the transaction.|

<h2 id="tocS_PausedStateContext">PausedStateContext</h2>
<!-- backwards compatibility -->
<a id="schemapausedstatecontext"></a>
<a id="schema_PausedStateContext"></a>
<a id="tocSpausedstatecontext"></a>
<a id="tocspausedstatecontext"></a>

```json
{
  "autoResumeTime": "string"
}
```

Information specific to a subscription in paused state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoResumeTime|string(google-datetime)|false|none|Time at which the subscription will be automatically resumed.|

<h2 id="tocS_PrepaidBasePlanType">PrepaidBasePlanType</h2>
<!-- backwards compatibility -->
<a id="schemaprepaidbaseplantype"></a>
<a id="schema_PrepaidBasePlanType"></a>
<a id="tocSprepaidbaseplantype"></a>
<a id="tocsprepaidbaseplantype"></a>

```json
{
  "billingPeriodDuration": "string",
  "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
}
```

Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingPeriodDuration|string|false|none|Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.|
|timeExtension|string|false|none|Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeExtension|TIME_EXTENSION_UNSPECIFIED|
|timeExtension|TIME_EXTENSION_ACTIVE|
|timeExtension|TIME_EXTENSION_INACTIVE|

<h2 id="tocS_PrepaidPlan">PrepaidPlan</h2>
<!-- backwards compatibility -->
<a id="schemaprepaidplan"></a>
<a id="schema_PrepaidPlan"></a>
<a id="tocSprepaidplan"></a>
<a id="tocsprepaidplan"></a>

```json
{
  "allowExtendAfterTime": "string"
}
```

Information related to a prepaid plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExtendAfterTime|string(google-datetime)|false|none|If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans.|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "currency": "string",
  "priceMicros": "string"
}
```

Definition of a price, i.e. currency and units.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java|
|priceMicros|string|false|none|Price in 1/million of the currency base unit, represented as a string.|

<h2 id="tocS_ProductPurchase">ProductPurchase</h2>
<!-- backwards compatibility -->
<a id="schemaproductpurchase"></a>
<a id="schema_ProductPurchase"></a>
<a id="tocSproductpurchase"></a>
<a id="tocsproductpurchase"></a>

```json
{
  "acknowledgementState": 0,
  "consumptionState": 0,
  "developerPayload": "string",
  "kind": "string",
  "obfuscatedExternalAccountId": "string",
  "obfuscatedExternalProfileId": "string",
  "orderId": "string",
  "productId": "string",
  "purchaseState": 0,
  "purchaseTimeMillis": "string",
  "purchaseToken": "string",
  "purchaseType": 0,
  "quantity": 0,
  "regionCode": "string"
}
```

A ProductPurchase resource indicates the status of a user's inapp product purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementState|integer(int32)|false|none|The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged|
|consumptionState|integer(int32)|false|none|The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed|
|developerPayload|string|false|none|A developer-specified string that contains supplemental information about an order.|
|kind|string|false|none|This kind represents an inappPurchase object in the androidpublisher service.|
|obfuscatedExternalAccountId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.|
|obfuscatedExternalProfileId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.|
|orderId|string|false|none|The order id associated with the purchase of the inapp product.|
|productId|string|false|none|The inapp product SKU. May not be present.|
|purchaseState|integer(int32)|false|none|The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending|
|purchaseTimeMillis|string(int64)|false|none|The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).|
|purchaseToken|string|false|none|The purchase token generated to identify this purchase. May not be present.|
|purchaseType|integer(int32)|false|none|The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)|
|quantity|integer(int32)|false|none|The quantity associated with the purchase of the inapp product. If not present, the quantity is 1.|
|regionCode|string|false|none|ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.|

<h2 id="tocS_ProductPurchasesAcknowledgeRequest">ProductPurchasesAcknowledgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproductpurchasesacknowledgerequest"></a>
<a id="schema_ProductPurchasesAcknowledgeRequest"></a>
<a id="tocSproductpurchasesacknowledgerequest"></a>
<a id="tocsproductpurchasesacknowledgerequest"></a>

```json
{
  "developerPayload": "string"
}
```

Request for the product.purchases.acknowledge API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerPayload|string|false|none|Payload to attach to the purchase.|

<h2 id="tocS_RecurringExternalTransaction">RecurringExternalTransaction</h2>
<!-- backwards compatibility -->
<a id="schemarecurringexternaltransaction"></a>
<a id="schema_RecurringExternalTransaction"></a>
<a id="tocSrecurringexternaltransaction"></a>
<a id="tocsrecurringexternaltransaction"></a>

```json
{
  "externalSubscription": {
    "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED"
  },
  "externalTransactionToken": "string",
  "initialExternalTransactionId": "string"
}
```

Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalSubscription|[ExternalSubscription](#schemaexternalsubscription)|false|none|Details of an external subscription.|
|externalTransactionToken|string|false|none|Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase.|
|initialExternalTransactionId|string|false|none|The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions.|

<h2 id="tocS_RefundExternalTransactionRequest">RefundExternalTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundexternaltransactionrequest"></a>
<a id="schema_RefundExternalTransactionRequest"></a>
<a id="tocSrefundexternaltransactionrequest"></a>
<a id="tocsrefundexternaltransactionrequest"></a>

```json
{
  "fullRefund": {},
  "partialRefund": {
    "refundId": "string",
    "refundPreTaxAmount": {
      "currency": "string",
      "priceMicros": "string"
    }
  },
  "refundTime": "string"
}
```

A request to refund an existing external transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullRefund|[FullRefund](#schemafullrefund)|false|none|A full-amount refund.|
|partialRefund|[PartialRefund](#schemapartialrefund)|false|none|A partial refund.|
|refundTime|string(google-datetime)|false|none|Required. The time that the transaction was refunded.|

<h2 id="tocS_RegionalBasePlanConfig">RegionalBasePlanConfig</h2>
<!-- backwards compatibility -->
<a id="schemaregionalbaseplanconfig"></a>
<a id="schema_RegionalBasePlanConfig"></a>
<a id="tocSregionalbaseplanconfig"></a>
<a id="tocsregionalbaseplanconfig"></a>

```json
{
  "newSubscriberAvailability": true,
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "regionCode": "string"
}
```

Configuration for a base plan specific to a region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newSubscriberAvailability|boolean|false|none|Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.|
|price|[Money](#schemamoney)|false|none|The price of the base plan in the specified region. Must be set if the base plan is available to new subscribers. Must be set in the currency that is linked to the specified region.|
|regionCode|string|false|none|Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".|

<h2 id="tocS_RegionalPriceMigrationConfig">RegionalPriceMigrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaregionalpricemigrationconfig"></a>
<a id="schema_RegionalPriceMigrationConfig"></a>
<a id="tocSregionalpricemigrationconfig"></a>
<a id="tocsregionalpricemigrationconfig"></a>

```json
{
  "oldestAllowedPriceVersionTime": "string",
  "regionCode": "string"
}
```

Configuration for a price migration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oldestAllowedPriceVersionTime|string(google-datetime)|false|none|Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers who are on a price that was created before this cutoff time will be migrated to the currently-offered price. These subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.|
|regionCode|string|false|none|Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".|

<h2 id="tocS_RegionalSubscriptionOfferConfig">RegionalSubscriptionOfferConfig</h2>
<!-- backwards compatibility -->
<a id="schemaregionalsubscriptionofferconfig"></a>
<a id="schema_RegionalSubscriptionOfferConfig"></a>
<a id="tocSregionalsubscriptionofferconfig"></a>
<a id="tocsregionalsubscriptionofferconfig"></a>

```json
{
  "newSubscriberAvailability": true,
  "regionCode": "string"
}
```

Configuration for a subscription offer in a single region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newSubscriberAvailability|boolean|false|none|Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false.|
|regionCode|string|false|none|Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".|

<h2 id="tocS_RegionalSubscriptionOfferPhaseConfig">RegionalSubscriptionOfferPhaseConfig</h2>
<!-- backwards compatibility -->
<a id="schemaregionalsubscriptionofferphaseconfig"></a>
<a id="schema_RegionalSubscriptionOfferPhaseConfig"></a>
<a id="tocSregionalsubscriptionofferphaseconfig"></a>
<a id="tocsregionalsubscriptionofferphaseconfig"></a>

```json
{
  "absoluteDiscount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "regionCode": "string",
  "relativeDiscount": 0
}
```

Configuration for a single phase of a subscription offer in a single region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteDiscount|[Money](#schemamoney)|false|none|The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for this region.|
|price|[Money](#schemamoney)|false|none|The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for this region.|
|regionCode|string|false|none|Required. Immutable. The region to which this config applies.|
|relativeDiscount|number(double)|false|none|The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region.|

<h2 id="tocS_RegionalTaxRateInfo">RegionalTaxRateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaregionaltaxrateinfo"></a>
<a id="schema_RegionalTaxRateInfo"></a>
<a id="tocSregionaltaxrateinfo"></a>
<a id="tocsregionaltaxrateinfo"></a>

```json
{
  "eligibleForStreamingServiceTaxRate": true,
  "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
  "taxTier": "TAX_TIER_UNSPECIFIED"
}
```

Specified details about taxation in a given geographical region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibleForStreamingServiceTaxRate|boolean|false|none|You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States.|
|streamingTaxType|string|false|none|To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).|
|taxTier|string|false|none|Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).|

#### Enumerated Values

|Property|Value|
|---|---|
|streamingTaxType|STREAMING_TAX_TYPE_UNSPECIFIED|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_VIDEO_SALES|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_AUDIO_SALES|
|streamingTaxType|STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL|
|taxTier|TAX_TIER_UNSPECIFIED|
|taxTier|TAX_TIER_BOOKS_1|
|taxTier|TAX_TIER_NEWS_1|
|taxTier|TAX_TIER_NEWS_2|
|taxTier|TAX_TIER_MUSIC_OR_AUDIO_1|
|taxTier|TAX_TIER_LIVE_OR_BROADCAST_1|

<h2 id="tocS_RegionsVersion">RegionsVersion</h2>
<!-- backwards compatibility -->
<a id="schemaregionsversion"></a>
<a id="schema_RegionsVersion"></a>
<a id="tocSregionsversion"></a>
<a id="tocsregionsversion"></a>

```json
{
  "version": "string"
}
```

The version of the available regions being used for the specified resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.|

<h2 id="tocS_ReplacementCancellation">ReplacementCancellation</h2>
<!-- backwards compatibility -->
<a id="schemareplacementcancellation"></a>
<a id="schema_ReplacementCancellation"></a>
<a id="tocSreplacementcancellation"></a>
<a id="tocsreplacementcancellation"></a>

```json
{}
```

Information specific to cancellations caused by subscription replacement.

<h2 id="tocS_Review">Review</h2>
<!-- backwards compatibility -->
<a id="schemareview"></a>
<a id="schema_Review"></a>
<a id="tocSreview"></a>
<a id="tocsreview"></a>

```json
{
  "authorName": "string",
  "comments": [
    {
      "developerComment": {
        "lastModified": {
          "nanos": 0,
          "seconds": "string"
        },
        "text": "string"
      },
      "userComment": {
        "androidOsVersion": 0,
        "appVersionCode": 0,
        "appVersionName": "string",
        "device": "string",
        "deviceMetadata": {
          "cpuMake": "string",
          "cpuModel": "string",
          "deviceClass": "string",
          "glEsVersion": 0,
          "manufacturer": "string",
          "nativePlatform": "string",
          "productName": "string",
          "ramMb": 0,
          "screenDensityDpi": 0,
          "screenHeightPx": 0,
          "screenWidthPx": 0
        },
        "lastModified": {
          "nanos": 0,
          "seconds": "string"
        },
        "originalText": "string",
        "reviewerLanguage": "string",
        "starRating": 0,
        "text": "string",
        "thumbsDownCount": 0,
        "thumbsUpCount": 0
      }
    }
  ],
  "reviewId": "string"
}
```

An Android app review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorName|string|false|none|The name of the user who wrote the review.|
|comments|[[Comment](#schemacomment)]|false|none|A repeated field containing comments for the review.|
|reviewId|string|false|none|Unique identifier for this review.|

<h2 id="tocS_ReviewReplyResult">ReviewReplyResult</h2>
<!-- backwards compatibility -->
<a id="schemareviewreplyresult"></a>
<a id="schema_ReviewReplyResult"></a>
<a id="tocSreviewreplyresult"></a>
<a id="tocsreviewreplyresult"></a>

```json
{
  "lastEdited": {
    "nanos": 0,
    "seconds": "string"
  },
  "replyText": "string"
}
```

The result of replying/updating a reply to review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastEdited|[Timestamp](#schematimestamp)|false|none|The time at which the reply took effect.|
|replyText|string|false|none|The reply text that was applied.|

<h2 id="tocS_ReviewsListResponse">ReviewsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemareviewslistresponse"></a>
<a id="schema_ReviewsListResponse"></a>
<a id="tocSreviewslistresponse"></a>
<a id="tocsreviewslistresponse"></a>

```json
{
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "reviews": [
    {
      "authorName": "string",
      "comments": [
        {
          "developerComment": {
            "lastModified": {
              "nanos": 0,
              "seconds": "string"
            },
            "text": "string"
          },
          "userComment": {
            "androidOsVersion": 0,
            "appVersionCode": 0,
            "appVersionName": "string",
            "device": "string",
            "deviceMetadata": {
              "cpuMake": "string",
              "cpuModel": "string",
              "deviceClass": "string",
              "glEsVersion": 0,
              "manufacturer": "string",
              "nativePlatform": "string",
              "productName": "string",
              "ramMb": 0,
              "screenDensityDpi": 0,
              "screenHeightPx": 0,
              "screenWidthPx": 0
            },
            "lastModified": {
              "nanos": 0,
              "seconds": "string"
            },
            "originalText": "string",
            "reviewerLanguage": "string",
            "starRating": 0,
            "text": "string",
            "thumbsDownCount": 0,
            "thumbsUpCount": 0
          }
        }
      ],
      "reviewId": "string"
    }
  ],
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

Response listing reviews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Information about the current page.|
|reviews|[[Review](#schemareview)]|false|none|List of reviews.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Pagination token, to handle a number of products that is over one page.|

<h2 id="tocS_ReviewsReplyRequest">ReviewsReplyRequest</h2>
<!-- backwards compatibility -->
<a id="schemareviewsreplyrequest"></a>
<a id="schema_ReviewsReplyRequest"></a>
<a id="tocSreviewsreplyrequest"></a>
<a id="tocsreviewsreplyrequest"></a>

```json
{
  "replyText": "string"
}
```

Request to reply to review or update existing reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replyText|string|false|none|The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.|

<h2 id="tocS_ReviewsReplyResponse">ReviewsReplyResponse</h2>
<!-- backwards compatibility -->
<a id="schemareviewsreplyresponse"></a>
<a id="schema_ReviewsReplyResponse"></a>
<a id="tocSreviewsreplyresponse"></a>
<a id="tocsreviewsreplyresponse"></a>

```json
{
  "result": {
    "lastEdited": {
      "nanos": 0,
      "seconds": "string"
    },
    "replyText": "string"
  }
}
```

Response on status of replying to a review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[ReviewReplyResult](#schemareviewreplyresult)|false|none|The result of replying/updating a reply to review.|

<h2 id="tocS_SubscribeWithGoogleInfo">SubscribeWithGoogleInfo</h2>
<!-- backwards compatibility -->
<a id="schemasubscribewithgoogleinfo"></a>
<a id="schema_SubscribeWithGoogleInfo"></a>
<a id="tocSsubscribewithgoogleinfo"></a>
<a id="tocssubscribewithgoogleinfo"></a>

```json
{
  "emailAddress": "string",
  "familyName": "string",
  "givenName": "string",
  "profileId": "string",
  "profileName": "string"
}
```

Information associated with purchases made with 'Subscribe with Google'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailAddress|string|false|none|The email address of the user when the subscription was purchased.|
|familyName|string|false|none|The family name of the user when the subscription was purchased.|
|givenName|string|false|none|The given name of the user when the subscription was purchased.|
|profileId|string|false|none|The Google profile id of the user when the subscription was purchased.|
|profileName|string|false|none|The profile name of the user when the subscription was purchased.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "archived": true,
  "basePlans": [
    {
      "autoRenewingBasePlanType": {
        "billingPeriodDuration": "string",
        "gracePeriodDuration": "string",
        "legacyCompatible": true,
        "legacyCompatibleSubscriptionOfferId": "string",
        "prorationMode": "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
        "resubscribeState": "RESUBSCRIBE_STATE_UNSPECIFIED"
      },
      "basePlanId": "string",
      "offerTags": [
        {
          "tag": "string"
        }
      ],
      "otherRegionsConfig": {
        "eurPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "newSubscriberAvailability": true,
        "usdPrice": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        }
      },
      "prepaidBasePlanType": {
        "billingPeriodDuration": "string",
        "timeExtension": "TIME_EXTENSION_UNSPECIFIED"
      },
      "regionalConfigs": [
        {
          "newSubscriberAvailability": true,
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "listings": [
    {
      "benefits": [
        "string"
      ],
      "description": "string",
      "languageCode": "string",
      "title": "string"
    }
  ],
  "packageName": "string",
  "productId": "string",
  "taxAndComplianceSettings": {
    "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    "taxRateInfoByRegionCode": {
      "property1": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      },
      "property2": {
        "eligibleForStreamingServiceTaxRate": true,
        "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
        "taxTier": "TAX_TIER_UNSPECIFIED"
      }
    }
  }
}
```

A single subscription for an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|read-only|Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in.|
|basePlans|[[BasePlan](#schemabaseplan)]|false|none|The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.|
|listings|[[SubscriptionListing](#schemasubscriptionlisting)]|false|none|Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.|
|packageName|string|false|none|Immutable. Package name of the parent app.|
|productId|string|false|none|Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.|
|taxAndComplianceSettings|[SubscriptionTaxAndComplianceSettings](#schemasubscriptiontaxandcompliancesettings)|false|none|Details about taxes and legal compliance.|

<h2 id="tocS_SubscriptionCancelSurveyResult">SubscriptionCancelSurveyResult</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncancelsurveyresult"></a>
<a id="schema_SubscriptionCancelSurveyResult"></a>
<a id="tocSsubscriptioncancelsurveyresult"></a>
<a id="tocssubscriptioncancelsurveyresult"></a>

```json
{
  "cancelSurveyReason": 0,
  "userInputCancelReason": "string"
}
```

Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelSurveyReason|integer(int32)|false|none|The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app|
|userInputCancelReason|string|false|none|The customized input cancel reason from the user. Only present when cancelReason is 0.|

<h2 id="tocS_SubscriptionDeferralInfo">SubscriptionDeferralInfo</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondeferralinfo"></a>
<a id="schema_SubscriptionDeferralInfo"></a>
<a id="tocSsubscriptiondeferralinfo"></a>
<a id="tocssubscriptiondeferralinfo"></a>

```json
{
  "desiredExpiryTimeMillis": "string",
  "expectedExpiryTimeMillis": "string"
}
```

A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredExpiryTimeMillis|string(int64)|false|none|The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.|
|expectedExpiryTimeMillis|string(int64)|false|none|The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.|

<h2 id="tocS_SubscriptionItemPriceChangeDetails">SubscriptionItemPriceChangeDetails</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionitempricechangedetails"></a>
<a id="schema_SubscriptionItemPriceChangeDetails"></a>
<a id="tocSsubscriptionitempricechangedetails"></a>
<a id="tocssubscriptionitempricechangedetails"></a>

```json
{
  "expectedNewPriceChargeTime": "string",
  "newPrice": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "priceChangeMode": "PRICE_CHANGE_MODE_UNSPECIFIED",
  "priceChangeState": "PRICE_CHANGE_STATE_UNSPECIFIED"
}
```

Price change related information of a subscription item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedNewPriceChargeTime|string(google-datetime)|false|none|The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause.|
|newPrice|[Money](#schemamoney)|false|none|New recurring price for the subscription item.|
|priceChangeMode|string|false|none|Price change mode specifies how the subscription item price is changing.|
|priceChangeState|string|false|none|State the price change is currently in.|

#### Enumerated Values

|Property|Value|
|---|---|
|priceChangeMode|PRICE_CHANGE_MODE_UNSPECIFIED|
|priceChangeMode|PRICE_DECREASE|
|priceChangeMode|PRICE_INCREASE|
|priceChangeState|PRICE_CHANGE_STATE_UNSPECIFIED|
|priceChangeState|OUTSTANDING|
|priceChangeState|CONFIRMED|
|priceChangeState|APPLIED|

<h2 id="tocS_SubscriptionListing">SubscriptionListing</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlisting"></a>
<a id="schema_SubscriptionListing"></a>
<a id="tocSsubscriptionlisting"></a>
<a id="tocssubscriptionlisting"></a>

```json
{
  "benefits": [
    "string"
  ],
  "description": "string",
  "languageCode": "string",
  "title": "string"
}
```

The consumer-visible metadata of a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefits|[string]|false|none|A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits.|
|description|string|false|none|The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text.|
|languageCode|string|false|none|Required. The language of this listing, as defined by BCP-47, e.g. "en-US".|
|title|string|false|none|Required. The title of this subscription in the language of this listing. Plain text.|

<h2 id="tocS_SubscriptionOffer">SubscriptionOffer</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionoffer"></a>
<a id="schema_SubscriptionOffer"></a>
<a id="tocSsubscriptionoffer"></a>
<a id="tocssubscriptionoffer"></a>

```json
{
  "basePlanId": "string",
  "offerId": "string",
  "offerTags": [
    {
      "tag": "string"
    }
  ],
  "otherRegionsConfig": {
    "otherRegionsNewSubscriberAvailability": true
  },
  "packageName": "string",
  "phases": [
    {
      "duration": "string",
      "otherRegionsConfig": {
        "absoluteDiscounts": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "otherRegionsPrices": {
          "eurPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "usdPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          }
        },
        "relativeDiscount": 0
      },
      "recurrenceCount": 0,
      "regionalConfigs": [
        {
          "absoluteDiscount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "regionCode": "string",
          "relativeDiscount": 0
        }
      ]
    }
  ],
  "productId": "string",
  "regionalConfigs": [
    {
      "newSubscriberAvailability": true,
      "regionCode": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "targeting": {
    "acquisitionRule": {
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    },
    "upgradeRule": {
      "billingPeriodDuration": "string",
      "oncePerUser": true,
      "scope": {
        "specificSubscriptionInApp": "string"
      }
    }
  }
}
```

A single, temporary offer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basePlanId|string|false|none|Required. Immutable. The ID of the base plan to which this offer is an extension.|
|offerId|string|false|none|Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.|
|offerTags|[[OfferTag](#schemaoffertag)]|false|none|List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.|
|otherRegionsConfig|[OtherRegionsSubscriptionOfferConfig](#schemaotherregionssubscriptionofferconfig)|false|none|The configuration for any new locations Play may launch in the future.|
|packageName|string|false|none|Required. Immutable. The package name of the app the parent subscription belongs to.|
|phases|[[SubscriptionOfferPhase](#schemasubscriptionofferphase)]|false|none|Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.|
|productId|string|false|none|Required. Immutable. The ID of the parent subscription this offer belongs to.|
|regionalConfigs|[[RegionalSubscriptionOfferConfig](#schemaregionalsubscriptionofferconfig)]|false|none|Required. The region-specific configuration of this offer. Must contain at least one entry.|
|state|string|false|read-only|Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.|
|targeting|[SubscriptionOfferTargeting](#schemasubscriptionoffertargeting)|false|none|The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_SubscriptionOfferPhase">SubscriptionOfferPhase</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionofferphase"></a>
<a id="schema_SubscriptionOfferPhase"></a>
<a id="tocSsubscriptionofferphase"></a>
<a id="tocssubscriptionofferphase"></a>

```json
{
  "duration": "string",
  "otherRegionsConfig": {
    "absoluteDiscounts": {
      "eurPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "usdPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "otherRegionsPrices": {
      "eurPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "usdPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      }
    },
    "relativeDiscount": 0
  },
  "recurrenceCount": 0,
  "regionalConfigs": [
    {
      "absoluteDiscount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "regionCode": "string",
      "relativeDiscount": 0
    }
  ]
}
```

A single phase of a subscription offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|false|none|Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format.|
|otherRegionsConfig|[OtherRegionsSubscriptionOfferPhaseConfig](#schemaotherregionssubscriptionofferphaseconfig)|false|none|Pricing information for any new locations Play may launch in.|
|recurrenceCount|integer(int32)|false|none|Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase.|
|regionalConfigs|[[RegionalSubscriptionOfferPhaseConfig](#schemaregionalsubscriptionofferphaseconfig)]|false|none|Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config.|

<h2 id="tocS_SubscriptionOfferTargeting">SubscriptionOfferTargeting</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionoffertargeting"></a>
<a id="schema_SubscriptionOfferTargeting"></a>
<a id="tocSsubscriptionoffertargeting"></a>
<a id="tocssubscriptionoffertargeting"></a>

```json
{
  "acquisitionRule": {
    "scope": {
      "specificSubscriptionInApp": "string"
    }
  },
  "upgradeRule": {
    "billingPeriodDuration": "string",
    "oncePerUser": true,
    "scope": {
      "specificSubscriptionInApp": "string"
    }
  }
}
```

Defines the rule a user needs to satisfy to receive this offer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquisitionRule|[AcquisitionTargetingRule](#schemaacquisitiontargetingrule)|false|none|Offer targeting rule for new user acquisition.|
|upgradeRule|[UpgradeTargetingRule](#schemaupgradetargetingrule)|false|none|Offer targeting rule for upgrading users' existing plans.|

<h2 id="tocS_SubscriptionPriceChange">SubscriptionPriceChange</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpricechange"></a>
<a id="schema_SubscriptionPriceChange"></a>
<a id="tocSsubscriptionpricechange"></a>
<a id="tocssubscriptionpricechange"></a>

```json
{
  "newPrice": {
    "currency": "string",
    "priceMicros": "string"
  },
  "state": 0
}
```

Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPrice|[Price](#schemaprice)|false|none|The new price the subscription will renew with if the price change is accepted by the user.|
|state|integer(int32)|false|none|The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.|

<h2 id="tocS_SubscriptionPurchase">SubscriptionPurchase</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchase"></a>
<a id="schema_SubscriptionPurchase"></a>
<a id="tocSsubscriptionpurchase"></a>
<a id="tocssubscriptionpurchase"></a>

```json
{
  "acknowledgementState": 0,
  "autoRenewing": true,
  "autoResumeTimeMillis": "string",
  "cancelReason": 0,
  "cancelSurveyResult": {
    "cancelSurveyReason": 0,
    "userInputCancelReason": "string"
  },
  "countryCode": "string",
  "developerPayload": "string",
  "emailAddress": "string",
  "expiryTimeMillis": "string",
  "externalAccountId": "string",
  "familyName": "string",
  "givenName": "string",
  "introductoryPriceInfo": {
    "introductoryPriceAmountMicros": "string",
    "introductoryPriceCurrencyCode": "string",
    "introductoryPriceCycles": 0,
    "introductoryPricePeriod": "string"
  },
  "kind": "string",
  "linkedPurchaseToken": "string",
  "obfuscatedExternalAccountId": "string",
  "obfuscatedExternalProfileId": "string",
  "orderId": "string",
  "paymentState": 0,
  "priceAmountMicros": "string",
  "priceChange": {
    "newPrice": {
      "currency": "string",
      "priceMicros": "string"
    },
    "state": 0
  },
  "priceCurrencyCode": "string",
  "profileId": "string",
  "profileName": "string",
  "promotionCode": "string",
  "promotionType": 0,
  "purchaseType": 0,
  "startTimeMillis": "string",
  "userCancellationTimeMillis": "string"
}
```

A SubscriptionPurchase resource indicates the status of a user's subscription purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementState|integer(int32)|false|none|The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged|
|autoRenewing|boolean|false|none|Whether the subscription will automatically be renewed when it reaches its current expiry time.|
|autoResumeTimeMillis|string(int64)|false|none|Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription.|
|cancelReason|integer(int32)|false|none|The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer|
|cancelSurveyResult|[SubscriptionCancelSurveyResult](#schemasubscriptioncancelsurveyresult)|false|none|Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).|
|countryCode|string|false|none|ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.|
|developerPayload|string|false|none|A developer-specified string that contains supplemental information about an order.|
|emailAddress|string|false|none|The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.|
|expiryTimeMillis|string(int64)|false|none|Time at which the subscription will expire, in milliseconds since the Epoch.|
|externalAccountId|string|false|none|User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.|
|familyName|string|false|none|The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.|
|givenName|string|false|none|The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.|
|introductoryPriceInfo|[IntroductoryPriceInfo](#schemaintroductorypriceinfo)|false|none|Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price. This field does not indicate the subscription is currently in introductory price period.|
|kind|string|false|none|This kind represents a subscriptionPurchase object in the androidpublisher service.|
|linkedPurchaseToken|string|false|none|The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.|
|obfuscatedExternalAccountId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.|
|obfuscatedExternalProfileId|string|false|none|An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.|
|orderId|string|false|none|The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order.|
|paymentState|integer(int32)|false|none|The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions.|
|priceAmountMicros|string(int64)|false|none|Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.|
|priceChange|[SubscriptionPriceChange](#schemasubscriptionpricechange)|false|none|The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied. Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned.|
|priceCurrencyCode|string|false|none|ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".|
|profileId|string|false|none|The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.|
|profileName|string|false|none|The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.|
|promotionCode|string|false|none|The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased.|
|promotionType|integer(int32)|false|none|The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code|
|purchaseType|integer(int32)|false|none|The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code)|
|startTimeMillis|string(int64)|false|none|Time at which the subscription was granted, in milliseconds since the Epoch.|
|userCancellationTimeMillis|string(int64)|false|none|The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.|

<h2 id="tocS_SubscriptionPurchaseLineItem">SubscriptionPurchaseLineItem</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchaselineitem"></a>
<a id="schema_SubscriptionPurchaseLineItem"></a>
<a id="tocSsubscriptionpurchaselineitem"></a>
<a id="tocssubscriptionpurchaselineitem"></a>

```json
{
  "autoRenewingPlan": {
    "autoRenewEnabled": true,
    "priceChangeDetails": {
      "expectedNewPriceChargeTime": "string",
      "newPrice": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "priceChangeMode": "PRICE_CHANGE_MODE_UNSPECIFIED",
      "priceChangeState": "PRICE_CHANGE_STATE_UNSPECIFIED"
    }
  },
  "expiryTime": "string",
  "offerDetails": {
    "basePlanId": "string",
    "offerId": "string",
    "offerTags": [
      "string"
    ]
  },
  "prepaidPlan": {
    "allowExtendAfterTime": "string"
  },
  "productId": "string"
}
```

Item-level info for a subscription purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRenewingPlan|[AutoRenewingPlan](#schemaautorenewingplan)|false|none|The item is auto renewing.|
|expiryTime|string(google-datetime)|false|none|Time at which the subscription expired or will expire unless the access is extended (ex. renews).|
|offerDetails|[OfferDetails](#schemaofferdetails)|false|none|The offer details for this item.|
|prepaidPlan|[PrepaidPlan](#schemaprepaidplan)|false|none|The item is prepaid.|
|productId|string|false|none|The purchased product ID (for example, 'monthly001').|

<h2 id="tocS_SubscriptionPurchaseV2">SubscriptionPurchaseV2</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchasev2"></a>
<a id="schema_SubscriptionPurchaseV2"></a>
<a id="tocSsubscriptionpurchasev2"></a>
<a id="tocssubscriptionpurchasev2"></a>

```json
{
  "acknowledgementState": "ACKNOWLEDGEMENT_STATE_UNSPECIFIED",
  "canceledStateContext": {
    "developerInitiatedCancellation": {},
    "replacementCancellation": {},
    "systemInitiatedCancellation": {},
    "userInitiatedCancellation": {
      "cancelSurveyResult": {
        "reason": "CANCEL_SURVEY_REASON_UNSPECIFIED",
        "reasonUserInput": "string"
      },
      "cancelTime": "string"
    }
  },
  "externalAccountIdentifiers": {
    "externalAccountId": "string",
    "obfuscatedExternalAccountId": "string",
    "obfuscatedExternalProfileId": "string"
  },
  "kind": "string",
  "latestOrderId": "string",
  "lineItems": [
    {
      "autoRenewingPlan": {
        "autoRenewEnabled": true,
        "priceChangeDetails": {
          "expectedNewPriceChargeTime": "string",
          "newPrice": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "priceChangeMode": "PRICE_CHANGE_MODE_UNSPECIFIED",
          "priceChangeState": "PRICE_CHANGE_STATE_UNSPECIFIED"
        }
      },
      "expiryTime": "string",
      "offerDetails": {
        "basePlanId": "string",
        "offerId": "string",
        "offerTags": [
          "string"
        ]
      },
      "prepaidPlan": {
        "allowExtendAfterTime": "string"
      },
      "productId": "string"
    }
  ],
  "linkedPurchaseToken": "string",
  "pausedStateContext": {
    "autoResumeTime": "string"
  },
  "regionCode": "string",
  "startTime": "string",
  "subscribeWithGoogleInfo": {
    "emailAddress": "string",
    "familyName": "string",
    "givenName": "string",
    "profileId": "string",
    "profileName": "string"
  },
  "subscriptionState": "SUBSCRIPTION_STATE_UNSPECIFIED",
  "testPurchase": {}
}
```

Indicates the status of a user's subscription purchase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementState|string|false|none|The acknowledgement state of the subscription.|
|canceledStateContext|[CanceledStateContext](#schemacanceledstatecontext)|false|none|Additional context around canceled subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_CANCELED.|
|externalAccountIdentifiers|[ExternalAccountIdentifiers](#schemaexternalaccountidentifiers)|false|none|User account identifier in the third-party service.|
|kind|string|false|none|This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service.|
|latestOrderId|string|false|none|The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token.|
|lineItems|[[SubscriptionPurchaseLineItem](#schemasubscriptionpurchaselineitem)]|false|none|Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan.|
|linkedPurchaseToken|string|false|none|The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription.|
|pausedStateContext|[PausedStateContext](#schemapausedstatecontext)|false|none|Additional context around paused subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_PAUSED.|
|regionCode|string|false|none|ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.|
|startTime|string(google-datetime)|false|none|Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup).|
|subscribeWithGoogleInfo|[SubscribeWithGoogleInfo](#schemasubscribewithgoogleinfo)|false|none|User profile associated with purchases made with 'Subscribe with Google'.|
|subscriptionState|string|false|none|The current state of the subscription.|
|testPurchase|[TestPurchase](#schematestpurchase)|false|none|Only present if this subscription purchase is a test purchase.|

#### Enumerated Values

|Property|Value|
|---|---|
|acknowledgementState|ACKNOWLEDGEMENT_STATE_UNSPECIFIED|
|acknowledgementState|ACKNOWLEDGEMENT_STATE_PENDING|
|acknowledgementState|ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED|
|subscriptionState|SUBSCRIPTION_STATE_UNSPECIFIED|
|subscriptionState|SUBSCRIPTION_STATE_PENDING|
|subscriptionState|SUBSCRIPTION_STATE_ACTIVE|
|subscriptionState|SUBSCRIPTION_STATE_PAUSED|
|subscriptionState|SUBSCRIPTION_STATE_IN_GRACE_PERIOD|
|subscriptionState|SUBSCRIPTION_STATE_ON_HOLD|
|subscriptionState|SUBSCRIPTION_STATE_CANCELED|
|subscriptionState|SUBSCRIPTION_STATE_EXPIRED|

<h2 id="tocS_SubscriptionPurchasesAcknowledgeRequest">SubscriptionPurchasesAcknowledgeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchasesacknowledgerequest"></a>
<a id="schema_SubscriptionPurchasesAcknowledgeRequest"></a>
<a id="tocSsubscriptionpurchasesacknowledgerequest"></a>
<a id="tocssubscriptionpurchasesacknowledgerequest"></a>

```json
{
  "developerPayload": "string"
}
```

Request for the purchases.subscriptions.acknowledge API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerPayload|string|false|none|Payload to attach to the purchase.|

<h2 id="tocS_SubscriptionPurchasesDeferRequest">SubscriptionPurchasesDeferRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchasesdeferrequest"></a>
<a id="schema_SubscriptionPurchasesDeferRequest"></a>
<a id="tocSsubscriptionpurchasesdeferrequest"></a>
<a id="tocssubscriptionpurchasesdeferrequest"></a>

```json
{
  "deferralInfo": {
    "desiredExpiryTimeMillis": "string",
    "expectedExpiryTimeMillis": "string"
  }
}
```

Request for the purchases.subscriptions.defer API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deferralInfo|[SubscriptionDeferralInfo](#schemasubscriptiondeferralinfo)|false|none|The information about the new desired expiry time for the subscription.|

<h2 id="tocS_SubscriptionPurchasesDeferResponse">SubscriptionPurchasesDeferResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionpurchasesdeferresponse"></a>
<a id="schema_SubscriptionPurchasesDeferResponse"></a>
<a id="tocSsubscriptionpurchasesdeferresponse"></a>
<a id="tocssubscriptionpurchasesdeferresponse"></a>

```json
{
  "newExpiryTimeMillis": "string"
}
```

Response for the purchases.subscriptions.defer API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newExpiryTimeMillis|string(int64)|false|none|The new expiry time for the subscription in milliseconds since the Epoch.|

<h2 id="tocS_SubscriptionTaxAndComplianceSettings">SubscriptionTaxAndComplianceSettings</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiontaxandcompliancesettings"></a>
<a id="schema_SubscriptionTaxAndComplianceSettings"></a>
<a id="tocSsubscriptiontaxandcompliancesettings"></a>
<a id="tocssubscriptiontaxandcompliancesettings"></a>

```json
{
  "eeaWithdrawalRightType": "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
  "taxRateInfoByRegionCode": {
    "property1": {
      "eligibleForStreamingServiceTaxRate": true,
      "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
      "taxTier": "TAX_TIER_UNSPECIFIED"
    },
    "property2": {
      "eligibleForStreamingServiceTaxRate": true,
      "streamingTaxType": "STREAMING_TAX_TYPE_UNSPECIFIED",
      "taxTier": "TAX_TIER_UNSPECIFIED"
    }
  }
}
```

Details about taxation, Google Play policy and legal compliance for subscription products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eeaWithdrawalRightType|string|false|none|Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.|
|taxRateInfoByRegionCode|object|false|none|A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".|

#### Enumerated Values

|Property|Value|
|---|---|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_DIGITAL_CONTENT|
|eeaWithdrawalRightType|WITHDRAWAL_RIGHT_SERVICE|

<h2 id="tocS_SystemApksListResponse">SystemApksListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemapkslistresponse"></a>
<a id="schema_SystemApksListResponse"></a>
<a id="tocSsystemapkslistresponse"></a>
<a id="tocssystemapkslistresponse"></a>

```json
{
  "variants": [
    {
      "deviceSpec": {
        "screenDensity": 0,
        "supportedAbis": [
          "string"
        ],
        "supportedLocales": [
          "string"
        ]
      },
      "variantId": 0
    }
  ]
}
```

Response to list previously created system APK variants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variants|[[Variant](#schemavariant)]|false|none|All system APK variants created.|

<h2 id="tocS_SystemFeature">SystemFeature</h2>
<!-- backwards compatibility -->
<a id="schemasystemfeature"></a>
<a id="schema_SystemFeature"></a>
<a id="tocSsystemfeature"></a>
<a id="tocssystemfeature"></a>

```json
{
  "name": "string"
}
```

Representation of a system feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the feature.|

<h2 id="tocS_SystemInitiatedCancellation">SystemInitiatedCancellation</h2>
<!-- backwards compatibility -->
<a id="schemasysteminitiatedcancellation"></a>
<a id="schema_SystemInitiatedCancellation"></a>
<a id="tocSsysteminitiatedcancellation"></a>
<a id="tocssysteminitiatedcancellation"></a>

```json
{}
```

Information specific to cancellations initiated by Google system.

<h2 id="tocS_TargetingRuleScope">TargetingRuleScope</h2>
<!-- backwards compatibility -->
<a id="schematargetingrulescope"></a>
<a id="schema_TargetingRuleScope"></a>
<a id="tocStargetingrulescope"></a>
<a id="tocstargetingrulescope"></a>

```json
{
  "specificSubscriptionInApp": "string"
}
```

Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|specificSubscriptionInApp|string|false|none|The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app.|

<h2 id="tocS_TestPurchase">TestPurchase</h2>
<!-- backwards compatibility -->
<a id="schematestpurchase"></a>
<a id="schema_TestPurchase"></a>
<a id="tocStestpurchase"></a>
<a id="tocstestpurchase"></a>

```json
{}
```

Whether this subscription purchase is a test purchase.

<h2 id="tocS_Testers">Testers</h2>
<!-- backwards compatibility -->
<a id="schematesters"></a>
<a id="schema_Testers"></a>
<a id="tocStesters"></a>
<a id="tocstesters"></a>

```json
{
  "googleGroups": [
    "string"
  ]
}
```

The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleGroups|[string]|false|none|All testing Google Groups, as email addresses.|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
{
  "nanos": 0,
  "seconds": "string"
}
```

A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nanos|integer(int32)|false|none|Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.|
|seconds|string(int64)|false|none|Represents seconds of UTC time since Unix epoch.|

<h2 id="tocS_TokenPagination">TokenPagination</h2>
<!-- backwards compatibility -->
<a id="schematokenpagination"></a>
<a id="schema_TokenPagination"></a>
<a id="tocStokenpagination"></a>
<a id="tocstokenpagination"></a>

```json
{
  "nextPageToken": "string",
  "previousPageToken": "string"
}
```

Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.|
|previousPageToken|string|false|none|none|

<h2 id="tocS_Track">Track</h2>
<!-- backwards compatibility -->
<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>

```json
{
  "releases": [
    {
      "countryTargeting": {
        "countries": [
          "string"
        ],
        "includeRestOfWorld": true
      },
      "inAppUpdatePriority": 0,
      "name": "string",
      "releaseNotes": [
        {
          "language": "string",
          "text": "string"
        }
      ],
      "status": "statusUnspecified",
      "userFraction": 0,
      "versionCodes": [
        "string"
      ]
    }
  ],
  "track": "string"
}
```

A track configuration. The resource for TracksService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releases|[[TrackRelease](#schematrackrelease)]|false|none|In a read request, represents all active releases in the track. In an update request, represents desired changes.|
|track|string|false|none|Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)|

<h2 id="tocS_TrackCountryAvailability">TrackCountryAvailability</h2>
<!-- backwards compatibility -->
<a id="schematrackcountryavailability"></a>
<a id="schema_TrackCountryAvailability"></a>
<a id="tocStrackcountryavailability"></a>
<a id="tocstrackcountryavailability"></a>

```json
{
  "countries": [
    {
      "countryCode": "string"
    }
  ],
  "restOfWorld": true,
  "syncWithProduction": true
}
```

Resource for per-track country availability information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[TrackTargetedCountry](#schematracktargetedcountry)]|false|none|A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country.|
|restOfWorld|boolean|false|none|Whether artifacts in this track are available to "rest of the world" countries.|
|syncWithProduction|boolean|false|none|Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track.|

<h2 id="tocS_TrackRelease">TrackRelease</h2>
<!-- backwards compatibility -->
<a id="schematrackrelease"></a>
<a id="schema_TrackRelease"></a>
<a id="tocStrackrelease"></a>
<a id="tocstrackrelease"></a>

```json
{
  "countryTargeting": {
    "countries": [
      "string"
    ],
    "includeRestOfWorld": true
  },
  "inAppUpdatePriority": 0,
  "name": "string",
  "releaseNotes": [
    {
      "language": "string",
      "text": "string"
    }
  ],
  "status": "statusUnspecified",
  "userFraction": 0,
  "versionCodes": [
    "string"
  ]
}
```

A release within a track.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryTargeting|[CountryTargeting](#schemacountrytargeting)|false|none|Restricts a release to a specific set of countries.|
|inAppUpdatePriority|integer(int32)|false|none|In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.|
|name|string|false|none|The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.|
|releaseNotes|[[LocalizedText](#schemalocalizedtext)]|false|none|A description of what is new in this release.|
|status|string|false|none|The status of the release.|
|userFraction|number(double)|false|none|Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".|
|versionCodes|[string(int64)]|false|none|Version codes of all APKs in the release. Must include version codes to retain from previous releases.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|statusUnspecified|
|status|draft|
|status|inProgress|
|status|halted|
|status|completed|

<h2 id="tocS_TrackTargetedCountry">TrackTargetedCountry</h2>
<!-- backwards compatibility -->
<a id="schematracktargetedcountry"></a>
<a id="schema_TrackTargetedCountry"></a>
<a id="tocStracktargetedcountry"></a>
<a id="tocstracktargetedcountry"></a>

```json
{
  "countryCode": "string"
}
```

Representation of a single country where the contents of a track are available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|The country to target, as a two-letter CLDR code.|

<h2 id="tocS_TracksListResponse">TracksListResponse</h2>
<!-- backwards compatibility -->
<a id="schematrackslistresponse"></a>
<a id="schema_TracksListResponse"></a>
<a id="tocStrackslistresponse"></a>
<a id="tocstrackslistresponse"></a>

```json
{
  "kind": "string",
  "tracks": [
    {
      "releases": [
        {
          "countryTargeting": {
            "countries": [
              "string"
            ],
            "includeRestOfWorld": true
          },
          "inAppUpdatePriority": 0,
          "name": "string",
          "releaseNotes": [
            {
              "language": "string",
              "text": "string"
            }
          ],
          "status": "statusUnspecified",
          "userFraction": 0,
          "versionCodes": [
            "string"
          ]
        }
      ],
      "track": "string"
    }
  ]
}
```

Response listing all tracks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of this response ("androidpublisher#tracksListResponse").|
|tracks|[[Track](#schematrack)]|false|none|All tracks.|

<h2 id="tocS_UpgradeTargetingRule">UpgradeTargetingRule</h2>
<!-- backwards compatibility -->
<a id="schemaupgradetargetingrule"></a>
<a id="schema_UpgradeTargetingRule"></a>
<a id="tocSupgradetargetingrule"></a>
<a id="tocsupgradetargetingrule"></a>

```json
{
  "billingPeriodDuration": "string",
  "oncePerUser": true,
  "scope": {
    "specificSubscriptionInApp": "string"
  }
}
```

Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingPeriodDuration|string|false|none|The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched.|
|oncePerUser|boolean|false|none|Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer.|
|scope|[TargetingRuleScope](#schematargetingrulescope)|false|none|Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "specific subscription in app".|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "accessState": "ACCESS_STATE_UNSPECIFIED",
  "developerAccountPermissions": [
    "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
  ],
  "email": "string",
  "expirationTime": "string",
  "grants": [
    {
      "appLevelPermissions": [
        "APP_LEVEL_PERMISSION_UNSPECIFIED"
      ],
      "name": "string",
      "packageName": "string"
    }
  ],
  "name": "string",
  "partial": true
}
```

A user resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessState|string|false|read-only|Output only. The state of the user's access to the Play Console.|
|developerAccountPermissions|[string]|false|none|Permissions for the user which apply across the developer account.|
|email|string|false|none|Immutable. The user's email address.|
|expirationTime|string(google-datetime)|false|none|The time at which the user's access expires, if set. When setting this value, it must always be in the future.|
|grants|[[Grant](#schemagrant)]|false|read-only|Output only. Per-app permissions for the user.|
|name|string|false|none|Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".|
|partial|boolean|false|read-only|Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessState|ACCESS_STATE_UNSPECIFIED|
|accessState|INVITED|
|accessState|INVITATION_EXPIRED|
|accessState|ACCESS_GRANTED|
|accessState|ACCESS_EXPIRED|
|developerAccountPermissions|DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED|
|developerAccountPermissions|CAN_SEE_ALL_APPS|
|developerAccountPermissions|CAN_VIEW_FINANCIAL_DATA_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_PERMISSIONS_GLOBAL|
|developerAccountPermissions|CAN_EDIT_GAMES_GLOBAL|
|developerAccountPermissions|CAN_PUBLISH_GAMES_GLOBAL|
|developerAccountPermissions|CAN_REPLY_TO_REVIEWS_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_PUBLIC_APKS_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_TRACK_APKS_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_TRACK_USERS_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_PUBLIC_LISTING_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_DRAFT_APPS_GLOBAL|
|developerAccountPermissions|CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL|
|developerAccountPermissions|CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_ORDERS_GLOBAL|
|developerAccountPermissions|CAN_MANAGE_APP_CONTENT_GLOBAL|

<h2 id="tocS_UserComment">UserComment</h2>
<!-- backwards compatibility -->
<a id="schemausercomment"></a>
<a id="schema_UserComment"></a>
<a id="tocSusercomment"></a>
<a id="tocsusercomment"></a>

```json
{
  "androidOsVersion": 0,
  "appVersionCode": 0,
  "appVersionName": "string",
  "device": "string",
  "deviceMetadata": {
    "cpuMake": "string",
    "cpuModel": "string",
    "deviceClass": "string",
    "glEsVersion": 0,
    "manufacturer": "string",
    "nativePlatform": "string",
    "productName": "string",
    "ramMb": 0,
    "screenDensityDpi": 0,
    "screenHeightPx": 0,
    "screenWidthPx": 0
  },
  "lastModified": {
    "nanos": 0,
    "seconds": "string"
  },
  "originalText": "string",
  "reviewerLanguage": "string",
  "starRating": 0,
  "text": "string",
  "thumbsDownCount": 0,
  "thumbsUpCount": 0
}
```

User entry from conversation between user and developer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidOsVersion|integer(int32)|false|none|Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.|
|appVersionCode|integer(int32)|false|none|Integer version code of the app as installed at the time the review was written. May be absent.|
|appVersionName|string|false|none|String version name of the app as installed at the time the review was written. May be absent.|
|device|string|false|none|Codename for the reviewer's device, e.g. klte, flounder. May be absent.|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|Information about the characteristics of the user's device.|
|lastModified|[Timestamp](#schematimestamp)|false|none|The last time at which this comment was updated.|
|originalText|string|false|none|Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.|
|reviewerLanguage|string|false|none|Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.|
|starRating|integer(int32)|false|none|The star rating associated with the review, from 1 to 5.|
|text|string|false|none|The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.|
|thumbsDownCount|integer(int32)|false|none|Number of users who have given this review a thumbs down.|
|thumbsUpCount|integer(int32)|false|none|Number of users who have given this review a thumbs up.|

<h2 id="tocS_UserCountrySet">UserCountrySet</h2>
<!-- backwards compatibility -->
<a id="schemausercountryset"></a>
<a id="schema_UserCountrySet"></a>
<a id="tocSusercountryset"></a>
<a id="tocsusercountryset"></a>

```json
{
  "countryCodes": [
    "string"
  ],
  "name": "string"
}
```

A set of user countries. A country set determines what variation of app content gets served to a specific location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCodes|[string]|false|none|List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia.|
|name|string|false|none|Country set name.|

<h2 id="tocS_UserInitiatedCancellation">UserInitiatedCancellation</h2>
<!-- backwards compatibility -->
<a id="schemauserinitiatedcancellation"></a>
<a id="schema_UserInitiatedCancellation"></a>
<a id="tocSuserinitiatedcancellation"></a>
<a id="tocsuserinitiatedcancellation"></a>

```json
{
  "cancelSurveyResult": {
    "reason": "CANCEL_SURVEY_REASON_UNSPECIFIED",
    "reasonUserInput": "string"
  },
  "cancelTime": "string"
}
```

Information specific to cancellations initiated by users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelSurveyResult|[CancelSurveyResult](#schemacancelsurveyresult)|false|none|Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).|
|cancelTime|string(google-datetime)|false|none|The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access.|

<h2 id="tocS_UsesPermission">UsesPermission</h2>
<!-- backwards compatibility -->
<a id="schemausespermission"></a>
<a id="schema_UsesPermission"></a>
<a id="tocSusespermission"></a>
<a id="tocsusespermission"></a>

```json
{
  "maxSdkVersion": 0,
  "name": "string"
}
```

A permission used by this APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxSdkVersion|integer(int32)|false|none|Optionally, the maximum SDK version for which the permission is required.|
|name|string|false|none|The name of the permission requested.|

<h2 id="tocS_Variant">Variant</h2>
<!-- backwards compatibility -->
<a id="schemavariant"></a>
<a id="schema_Variant"></a>
<a id="tocSvariant"></a>
<a id="tocsvariant"></a>

```json
{
  "deviceSpec": {
    "screenDensity": 0,
    "supportedAbis": [
      "string"
    ],
    "supportedLocales": [
      "string"
    ]
  },
  "variantId": 0
}
```

APK that is suitable for inclusion in a system image. The resource of SystemApksService.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceSpec|[DeviceSpec](#schemadevicespec)|false|none|The device spec used to generate the APK.|
|variantId|integer(uint32)|false|read-only|Output only. The ID of a previously created system APK variant.|

<h2 id="tocS_VoidedPurchase">VoidedPurchase</h2>
<!-- backwards compatibility -->
<a id="schemavoidedpurchase"></a>
<a id="schema_VoidedPurchase"></a>
<a id="tocSvoidedpurchase"></a>
<a id="tocsvoidedpurchase"></a>

```json
{
  "kind": "string",
  "orderId": "string",
  "purchaseTimeMillis": "string",
  "purchaseToken": "string",
  "voidedReason": 0,
  "voidedSource": 0,
  "voidedTimeMillis": "string"
}
```

A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|This kind represents a voided purchase object in the androidpublisher service.|
|orderId|string|false|none|The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal.|
|purchaseTimeMillis|string(int64)|false|none|The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).|
|purchaseToken|string|false|none|The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).|
|voidedReason|integer(int32)|false|none|The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback|
|voidedSource|integer(int32)|false|none|The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google|
|voidedTimeMillis|string(int64)|false|none|The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).|

<h2 id="tocS_VoidedPurchasesListResponse">VoidedPurchasesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoidedpurchaseslistresponse"></a>
<a id="schema_VoidedPurchasesListResponse"></a>
<a id="tocSvoidedpurchaseslistresponse"></a>
<a id="tocsvoidedpurchaseslistresponse"></a>

```json
{
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  },
  "voidedPurchases": [
    {
      "kind": "string",
      "orderId": "string",
      "purchaseTimeMillis": "string",
      "purchaseToken": "string",
      "voidedReason": 0,
      "voidedSource": 0,
      "voidedTimeMillis": "string"
    }
  ]
}
```

Response for the voidedpurchases.list API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Pagination information for token pagination.|
|voidedPurchases|[[VoidedPurchase](#schemavoidedpurchase)]|false|none|none|
