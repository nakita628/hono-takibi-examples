<h1 id="google-play-emm-api">Google Play EMM API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages the deployment of apps to Android Enterprise devices.

Base URLs:

* <a href="https://androidenterprise.googleapis.com/">https://androidenterprise.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/android/work/play/emm-api">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidenterprise|Manage corporate Android devices|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidenterprise|Manage corporate Android devices|

<h1 id="google-play-emm-api-devices">devices</h1>

## androidenterprise.devices.list

<a id="opIdandroidenterprise.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices`

Retrieves the IDs of all of a user's devices.

<h3 id="androidenterprisedeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "device": [
    {
      "androidId": "string",
      "device": "string",
      "latestBuildFingerprint": "string",
      "maker": "string",
      "managementType": "managedDevice",
      "model": "string",
      "policy": {
        "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
        "deviceReportPolicy": "deviceReportPolicyUnspecified",
        "maintenanceWindow": {
          "durationMs": "string",
          "startTimeAfterMidnightMs": "string"
        },
        "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
        "productPolicy": [
          {
            "autoInstallPolicy": {
              "autoInstallConstraint": [
                {
                  "chargingStateConstraint": "chargingStateConstraintUnspecified",
                  "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
                  "networkTypeConstraint": "networkTypeConstraintUnspecified"
                }
              ],
              "autoInstallMode": "autoInstallModeUnspecified",
              "autoInstallPriority": 0,
              "minimumVersionCode": 0
            },
            "autoUpdateMode": "autoUpdateModeUnspecified",
            "enterpriseAuthenticationAppLinkConfigs": [
              {
                "uri": "string"
              }
            ],
            "managedConfiguration": {
              "configurationVariables": {
                "mcmId": "string",
                "variableSet": [
                  {
                    "placeholder": "string",
                    "userValue": "string"
                  }
                ]
              },
              "kind": "string",
              "managedProperty": [
                {
                  "key": "string",
                  "valueBool": true,
                  "valueBundle": {},
                  "valueBundleArray": [
                    {}
                  ],
                  "valueInteger": 0,
                  "valueString": "string",
                  "valueStringArray": [
                    "string"
                  ]
                }
              ],
              "productId": "string"
            },
            "productId": "string",
            "trackIds": [
              "string"
            ],
            "tracks": [
              "appTrackUnspecified"
            ]
          }
        ]
      },
      "product": "string",
      "report": {
        "appState": [
          {
            "keyedAppState": [
              {
                "data": "string",
                "key": "string",
                "message": "string",
                "severity": "severityUnknown",
                "stateTimestampMillis": "string"
              }
            ],
            "packageName": "string"
          }
        ],
        "lastUpdatedTimestampMillis": "string"
      },
      "retailBrand": "string",
      "sdkVersion": 0
    }
  ]
}
```

<h3 id="androidenterprisedeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DevicesListResponse](#schemadeviceslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.devices.get

<a id="opIdandroidenterprise.devices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}`

Retrieves the details of a device.

<h3 id="androidenterprisedevicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The ID of the device.|
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
  "androidId": "string",
  "device": "string",
  "latestBuildFingerprint": "string",
  "maker": "string",
  "managementType": "managedDevice",
  "model": "string",
  "policy": {
    "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
    "deviceReportPolicy": "deviceReportPolicyUnspecified",
    "maintenanceWindow": {
      "durationMs": "string",
      "startTimeAfterMidnightMs": "string"
    },
    "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
    "productPolicy": [
      {
        "autoInstallPolicy": {
          "autoInstallConstraint": [
            {
              "chargingStateConstraint": "chargingStateConstraintUnspecified",
              "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
              "networkTypeConstraint": "networkTypeConstraintUnspecified"
            }
          ],
          "autoInstallMode": "autoInstallModeUnspecified",
          "autoInstallPriority": 0,
          "minimumVersionCode": 0
        },
        "autoUpdateMode": "autoUpdateModeUnspecified",
        "enterpriseAuthenticationAppLinkConfigs": [
          {
            "uri": "string"
          }
        ],
        "managedConfiguration": {
          "configurationVariables": {
            "mcmId": "string",
            "variableSet": [
              {
                "placeholder": "string",
                "userValue": "string"
              }
            ]
          },
          "kind": "string",
          "managedProperty": [
            {
              "key": "string",
              "valueBool": true,
              "valueBundle": {},
              "valueBundleArray": [
                {}
              ],
              "valueInteger": 0,
              "valueString": "string",
              "valueStringArray": [
                "string"
              ]
            }
          ],
          "productId": "string"
        },
        "productId": "string",
        "trackIds": [
          "string"
        ],
        "tracks": [
          "appTrackUnspecified"
        ]
      }
    ]
  },
  "product": "string",
  "report": {
    "appState": [
      {
        "keyedAppState": [
          {
            "data": "string",
            "key": "string",
            "message": "string",
            "severity": "severityUnknown",
            "stateTimestampMillis": "string"
          }
        ],
        "packageName": "string"
      }
    ],
    "lastUpdatedTimestampMillis": "string"
  },
  "retailBrand": "string",
  "sdkVersion": 0
}
```

<h3 id="androidenterprisedevicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.devices.update

<a id="opIdandroidenterprise.devices.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "androidId": "string",
    "device": "string",
    "latestBuildFingerprint": "string",
    "maker": "string",
    "managementType": "managedDevice",
    "model": "string",
    "policy": {
      "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
      "deviceReportPolicy": "deviceReportPolicyUnspecified",
      "maintenanceWindow": {
        "durationMs": "string",
        "startTimeAfterMidnightMs": "string"
      },
      "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
      "productPolicy": [
        {
          "autoInstallPolicy": {
            "autoInstallConstraint": [
              {
                "chargingStateConstraint": "chargingStateConstraintUnspecified",
                "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
                "networkTypeConstraint": "networkTypeConstraintUnspecified"
              }
            ],
            "autoInstallMode": "autoInstallModeUnspecified",
            "autoInstallPriority": 0,
            "minimumVersionCode": 0
          },
          "autoUpdateMode": "autoUpdateModeUnspecified",
          "enterpriseAuthenticationAppLinkConfigs": [
            {
              "uri": "string"
            }
          ],
          "managedConfiguration": {
            "configurationVariables": {
              "mcmId": "string",
              "variableSet": [
                {
                  "placeholder": "string",
                  "userValue": "string"
                }
              ]
            },
            "kind": "string",
            "managedProperty": [
              {
                "key": "string",
                "valueBool": true,
                "valueBundle": {},
                "valueBundleArray": [
                  {}
                ],
                "valueInteger": 0,
                "valueString": "string",
                "valueStringArray": [
                  "string"
                ]
              }
            ],
            "productId": "string"
          },
          "productId": "string",
          "trackIds": [
            "string"
          ],
          "tracks": [
            "appTrackUnspecified"
          ]
        }
      ]
    },
    "product": "string",
    "report": {
      "appState": [
        {
          "keyedAppState": [
            {
              "data": "string",
              "key": "string",
              "message": "string",
              "severity": "severityUnknown",
              "stateTimestampMillis": "string"
            }
          ],
          "packageName": "string"
        }
      ],
      "lastUpdatedTimestampMillis": "string"
    },
    "retailBrand": "string",
    "sdkVersion": 0
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}`

Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

> Body parameter

```json
{
  "androidId": "string",
  "device": "string",
  "latestBuildFingerprint": "string",
  "maker": "string",
  "managementType": "managedDevice",
  "model": "string",
  "policy": {
    "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
    "deviceReportPolicy": "deviceReportPolicyUnspecified",
    "maintenanceWindow": {
      "durationMs": "string",
      "startTimeAfterMidnightMs": "string"
    },
    "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
    "productPolicy": [
      {
        "autoInstallPolicy": {
          "autoInstallConstraint": [
            {
              "chargingStateConstraint": "chargingStateConstraintUnspecified",
              "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
              "networkTypeConstraint": "networkTypeConstraintUnspecified"
            }
          ],
          "autoInstallMode": "autoInstallModeUnspecified",
          "autoInstallPriority": 0,
          "minimumVersionCode": 0
        },
        "autoUpdateMode": "autoUpdateModeUnspecified",
        "enterpriseAuthenticationAppLinkConfigs": [
          {
            "uri": "string"
          }
        ],
        "managedConfiguration": {
          "configurationVariables": {
            "mcmId": "string",
            "variableSet": [
              {
                "placeholder": "string",
                "userValue": "string"
              }
            ]
          },
          "kind": "string",
          "managedProperty": [
            {
              "key": "string",
              "valueBool": true,
              "valueBundle": {},
              "valueBundleArray": [
                {}
              ],
              "valueInteger": 0,
              "valueString": "string",
              "valueStringArray": [
                "string"
              ]
            }
          ],
          "productId": "string"
        },
        "productId": "string",
        "trackIds": [
          "string"
        ],
        "tracks": [
          "appTrackUnspecified"
        ]
      }
    ]
  },
  "product": "string",
  "report": {
    "appState": [
      {
        "keyedAppState": [
          {
            "data": "string",
            "key": "string",
            "message": "string",
            "severity": "severityUnknown",
            "stateTimestampMillis": "string"
          }
        ],
        "packageName": "string"
      }
    ],
    "lastUpdatedTimestampMillis": "string"
  },
  "retailBrand": "string",
  "sdkVersion": 0
}
```

<h3 id="androidenterprisedevicesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The ID of the device.|
|updateMask|query|string|false|Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...|
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
|body|body|[Device](#schemadevice)|false|none|
|» androidId|body|string|false|The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".|
|» device|body|string|false|The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named "device" per logs/wireless/android/android_checkin.proto)|
|» latestBuildFingerprint|body|string|false|The build fingerprint of the device if known.|
|» maker|body|string|false|The manufacturer of the device. This comes from android.os.Build.MANUFACTURER.|
|» managementType|body|string|false|Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC. |
|» model|body|string|false|The model name of the device. This comes from android.os.Build.MODEL.|
|» policy|body|[Policy](#schemapolicy)|false|The policy enforced on the device.|
|» product|body|string|false|The product name of the device. This comes from android.os.Build.PRODUCT.|
|» report|body|[DeviceReport](#schemadevicereport)|false|The device report updated with the latest app states.|
|» retailBrand|body|string|false|Retail brand for the device, if set. See https://developer.android.com/reference/android/os/Build.html#BRAND|
|» sdkVersion|body|integer(int32)|false|API compatibility version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» managementType|managedDevice|
|» managementType|managedProfile|
|» managementType|containerApp|
|» managementType|unmanagedProfile|

> Example responses

> 200 Response

```json
{
  "androidId": "string",
  "device": "string",
  "latestBuildFingerprint": "string",
  "maker": "string",
  "managementType": "managedDevice",
  "model": "string",
  "policy": {
    "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
    "deviceReportPolicy": "deviceReportPolicyUnspecified",
    "maintenanceWindow": {
      "durationMs": "string",
      "startTimeAfterMidnightMs": "string"
    },
    "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
    "productPolicy": [
      {
        "autoInstallPolicy": {
          "autoInstallConstraint": [
            {
              "chargingStateConstraint": "chargingStateConstraintUnspecified",
              "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
              "networkTypeConstraint": "networkTypeConstraintUnspecified"
            }
          ],
          "autoInstallMode": "autoInstallModeUnspecified",
          "autoInstallPriority": 0,
          "minimumVersionCode": 0
        },
        "autoUpdateMode": "autoUpdateModeUnspecified",
        "enterpriseAuthenticationAppLinkConfigs": [
          {
            "uri": "string"
          }
        ],
        "managedConfiguration": {
          "configurationVariables": {
            "mcmId": "string",
            "variableSet": [
              {
                "placeholder": "string",
                "userValue": "string"
              }
            ]
          },
          "kind": "string",
          "managedProperty": [
            {
              "key": "string",
              "valueBool": true,
              "valueBundle": {},
              "valueBundleArray": [
                {}
              ],
              "valueInteger": 0,
              "valueString": "string",
              "valueStringArray": [
                "string"
              ]
            }
          ],
          "productId": "string"
        },
        "productId": "string",
        "trackIds": [
          "string"
        ],
        "tracks": [
          "appTrackUnspecified"
        ]
      }
    ]
  },
  "product": "string",
  "report": {
    "appState": [
      {
        "keyedAppState": [
          {
            "data": "string",
            "key": "string",
            "message": "string",
            "severity": "severityUnknown",
            "stateTimestampMillis": "string"
          }
        ],
        "packageName": "string"
      }
    ],
    "lastUpdatedTimestampMillis": "string"
  },
  "retailBrand": "string",
  "sdkVersion": 0
}
```

<h3 id="androidenterprisedevicesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.devices.forceReportUpload

<a id="opIdandroidenterprise.devices.forceReportUpload"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/forceReportUpload \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload`

Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.

<h3 id="androidenterprisedevicesforcereportupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The ID of the device.|
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

<h3 id="androidenterprisedevicesforcereportupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.devices.getState

<a id="opIdandroidenterprise.devices.getState"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/state \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state`

Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

<h3 id="androidenterprisedevicesgetstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The ID of the device.|
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
  "accountState": "enabled"
}
```

<h3 id="androidenterprisedevicesgetstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceState](#schemadevicestate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.devices.setState

<a id="opIdandroidenterprise.devices.setState"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountState": "enabled"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state`

Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

> Body parameter

```json
{
  "accountState": "enabled"
}
```

<h3 id="androidenterprisedevicessetstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The ID of the device.|
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
|body|body|[DeviceState](#schemadevicestate)|false|none|
|» accountState|body|string|false|The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» accountState|enabled|
|» accountState|disabled|

> Example responses

> 200 Response

```json
{
  "accountState": "enabled"
}
```

<h3 id="androidenterprisedevicessetstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceState](#schemadevicestate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-enterprises">enterprises</h1>

## androidenterprise.enterprises.list

<a id="opIdandroidenterprise.enterprises.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/androidenterprise/v1/enterprises?domain=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises`

Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

<h3 id="androidenterpriseenterpriseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|Required. The exact primary domain name of the enterprise to look up.|
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
  "enterprise": [
    {
      "administrator": [
        {
          "email": "string"
        }
      ],
      "googleAuthenticationSettings": {
        "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
        "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
      },
      "id": "string",
      "name": "string",
      "primaryDomain": "string"
    }
  ]
}
```

<h3 id="androidenterpriseenterpriseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EnterprisesListResponse](#schemaenterpriseslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.acknowledgeNotificationSet

<a id="opIdandroidenterprise.enterprises.acknowledgeNotificationSet"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/acknowledgeNotificationSet \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/acknowledgeNotificationSet`

Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

<h3 id="androidenterpriseenterprisesacknowledgenotificationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notificationSetId|query|string|false|The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.|
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

<h3 id="androidenterpriseenterprisesacknowledgenotificationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.completeSignup

<a id="opIdandroidenterprise.enterprises.completeSignup"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/completeSignup \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/completeSignup`

Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

<h3 id="androidenterpriseenterprisescompletesignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|completionToken|query|string|false|The Completion token initially returned by GenerateSignupUrl.|
|enterpriseToken|query|string|false|The Enterprise token appended to the Callback URL.|
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
  "administrator": [
    {
      "email": "string"
    }
  ],
  "googleAuthenticationSettings": {
    "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
    "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
  },
  "id": "string",
  "name": "string",
  "primaryDomain": "string"
}
```

<h3 id="androidenterpriseenterprisescompletesignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Enterprise](#schemaenterprise)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.enroll

<a id="opIdandroidenterprise.enterprises.enroll"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/androidenterprise/v1/enterprises/enroll?token=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "administrator": [
      {
        "email": "string"
      }
    ],
    "id": "string",
    "name": "string",
    "primaryDomain": "string"
  }'
```

`POST /androidenterprise/v1/enterprises/enroll`

Enrolls an enterprise with the calling EMM.

> Body parameter

```json
{
  "administrator": [
    {
      "email": "string"
    }
  ],
  "id": "string",
  "name": "string",
  "primaryDomain": "string"
}
```

<h3 id="androidenterpriseenterprisesenroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Required. The token provided by the enterprise to register the EMM.|
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
|body|body|[Enterprise](#schemaenterprise)|false|none|
|» administrator|body|[[Administrator](#schemaadministrator)]|false|Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.|
|» id|body|string|false|The unique ID for the enterprise.|
|» name|body|string|false|The name of the enterprise, for example, "Example, Inc".|
|» primaryDomain|body|string|false|The enterprise's primary domain, such as "example.com".|

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
  "administrator": [
    {
      "email": "string"
    }
  ],
  "googleAuthenticationSettings": {
    "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
    "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
  },
  "id": "string",
  "name": "string",
  "primaryDomain": "string"
}
```

<h3 id="androidenterpriseenterprisesenroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Enterprise](#schemaenterprise)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.pullNotificationSet

<a id="opIdandroidenterprise.enterprises.pullNotificationSet"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/pullNotificationSet \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/pullNotificationSet`

Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

<h3 id="androidenterpriseenterprisespullnotificationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestMode|query|string|false|The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.|
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
|requestMode|waitForNotifications|
|requestMode|returnImmediately|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "notification": [
    {
      "appRestrictionsSchemaChangeEvent": {
        "productId": "string"
      },
      "appUpdateEvent": {
        "productId": "string"
      },
      "deviceReportUpdateEvent": {
        "deviceId": "string",
        "report": {
          "appState": [
            {
              "keyedAppState": [
                {
                  "data": "string",
                  "key": "string",
                  "message": "string",
                  "severity": "severityUnknown",
                  "stateTimestampMillis": "string"
                }
              ],
              "packageName": "string"
            }
          ],
          "lastUpdatedTimestampMillis": "string"
        },
        "userId": "string"
      },
      "enterpriseId": "string",
      "installFailureEvent": {
        "deviceId": "string",
        "failureDetails": "string",
        "failureReason": "unknown",
        "productId": "string",
        "userId": "string"
      },
      "newDeviceEvent": {
        "deviceId": "string",
        "dpcPackageName": "string",
        "managementType": "managedDevice",
        "userId": "string"
      },
      "newPermissionsEvent": {
        "approvedPermissions": [
          "string"
        ],
        "productId": "string",
        "requestedPermissions": [
          "string"
        ]
      },
      "notificationType": "unknown",
      "productApprovalEvent": {
        "approved": "unknown",
        "productId": "string"
      },
      "productAvailabilityChangeEvent": {
        "availabilityStatus": "unknown",
        "productId": "string"
      },
      "timestampMillis": "string"
    }
  ],
  "notificationSetId": "string"
}
```

<h3 id="androidenterpriseenterprisespullnotificationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[NotificationSet](#schemanotificationset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.generateSignupUrl

<a id="opIdandroidenterprise.enterprises.generateSignupUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/signupUrl \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/signupUrl`

Generates a sign-up URL.

<h3 id="androidenterpriseenterprisesgeneratesignupurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callbackUrl|query|string|false|The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.|
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
  "completionToken": "string",
  "kind": "string",
  "url": "string"
}
```

<h3 id="androidenterpriseenterprisesgeneratesignupurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SignupInfo](#schemasignupinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.get

<a id="opIdandroidenterprise.enterprises.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}`

Retrieves the name and domain of an enterprise.

<h3 id="androidenterpriseenterprisesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "administrator": [
    {
      "email": "string"
    }
  ],
  "googleAuthenticationSettings": {
    "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
    "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
  },
  "id": "string",
  "name": "string",
  "primaryDomain": "string"
}
```

<h3 id="androidenterpriseenterprisesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Enterprise](#schemaenterprise)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.setAccount

<a id="opIdandroidenterprise.enterprises.setAccount"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/account \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountEmail": "string"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/account`

Sets the account that will be used to authenticate to the API as the enterprise.

> Body parameter

```json
{
  "accountEmail": "string"
}
```

<h3 id="androidenterpriseenterprisessetaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[EnterpriseAccount](#schemaenterpriseaccount)|false|none|
|» accountEmail|body|string|false|The email address of the service account.|

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
  "accountEmail": "string"
}
```

<h3 id="androidenterpriseenterprisessetaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EnterpriseAccount](#schemaenterpriseaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.createEnrollmentToken

<a id="opIdandroidenterprise.enterprises.createEnrollmentToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/createEnrollmentToken \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/createEnrollmentToken`

Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.

<h3 id="androidenterpriseenterprisescreateenrollmenttoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|deviceType|query|string|false|Whether it’s a dedicated device or a knowledge worker device.|
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
|deviceType|unknown|
|deviceType|dedicatedDevice|
|deviceType|knowledgeWorker|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "enrollmentToken": "string"
}
```

<h3 id="androidenterpriseenterprisescreateenrollmenttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateEnrollmentTokenResponse](#schemacreateenrollmenttokenresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.createWebToken

<a id="opIdandroidenterprise.enterprises.createWebToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/createWebToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "managedConfigurations": {
      "enabled": true
    },
    "parent": "string",
    "permission": [
      "unknown"
    ],
    "playSearch": {
      "approveApps": true,
      "enabled": true
    },
    "privateApps": {
      "enabled": true
    },
    "storeBuilder": {
      "enabled": true
    },
    "webApps": {
      "enabled": true
    },
    "zeroTouch": {
      "enabled": true
    }
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/createWebToken`

Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.

> Body parameter

```json
{
  "managedConfigurations": {
    "enabled": true
  },
  "parent": "string",
  "permission": [
    "unknown"
  ],
  "playSearch": {
    "approveApps": true,
    "enabled": true
  },
  "privateApps": {
    "enabled": true
  },
  "storeBuilder": {
    "enabled": true
  },
  "webApps": {
    "enabled": true
  },
  "zeroTouch": {
    "enabled": true
  }
}
```

<h3 id="androidenterpriseenterprisescreatewebtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[AdministratorWebTokenSpec](#schemaadministratorwebtokenspec)|false|none|
|» managedConfigurations|body|[AdministratorWebTokenSpecManagedConfigurations](#schemaadministratorwebtokenspecmanagedconfigurations)|false|Options for displaying the Managed Configuration page.|
|» parent|body|string|false|The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs.|
|» permission|body|[string]|false|Deprecated. Use PlaySearch.approveApps.|
|» playSearch|body|[AdministratorWebTokenSpecPlaySearch](#schemaadministratorwebtokenspecplaysearch)|false|Options for displaying the managed Play Search apps page.|
|» privateApps|body|[AdministratorWebTokenSpecPrivateApps](#schemaadministratorwebtokenspecprivateapps)|false|Options for displaying the Private Apps page.|
|» storeBuilder|body|[AdministratorWebTokenSpecStoreBuilder](#schemaadministratorwebtokenspecstorebuilder)|false|Options for displaying the Organize apps page.|
|» webApps|body|[AdministratorWebTokenSpecWebApps](#schemaadministratorwebtokenspecwebapps)|false|Options for displaying the Web Apps page.|
|» zeroTouch|body|[AdministratorWebTokenSpecZeroTouch](#schemaadministratorwebtokenspeczerotouch)|false|Options for displaying the Zero Touch page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» permission|unknown|
|» permission|approveApps|
|» permission|manageMcm|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

<h3 id="androidenterpriseenterprisescreatewebtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AdministratorWebToken](#schemaadministratorwebtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.sendTestPushNotification

<a id="opIdandroidenterprise.enterprises.sendTestPushNotification"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/sendTestPushNotification \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification`

Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

<h3 id="androidenterpriseenterprisessendtestpushnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "messageId": "string",
  "topicName": "string"
}
```

<h3 id="androidenterpriseenterprisessendtestpushnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EnterprisesSendTestPushNotificationResponse](#schemaenterprisessendtestpushnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.getServiceAccount

<a id="opIdandroidenterprise.enterprises.getServiceAccount"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/serviceAccount \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount`

Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.

<h3 id="androidenterpriseenterprisesgetserviceaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|keyType|query|string|false|The type of credential to return with the service account. Required.|
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
|keyType|googleCredentials|
|keyType|pkcs12|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "key": {
    "data": "string",
    "id": "string",
    "publicData": "string",
    "type": "googleCredentials"
  },
  "name": "string"
}
```

<h3 id="androidenterpriseenterprisesgetserviceaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServiceAccount](#schemaserviceaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.getStoreLayout

<a id="opIdandroidenterprise.enterprises.getStoreLayout"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout`

Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

<h3 id="androidenterpriseenterprisesgetstorelayout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "homepageId": "string",
  "storeLayoutType": "unknown"
}
```

<h3 id="androidenterpriseenterprisesgetstorelayout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreLayout](#schemastorelayout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.setStoreLayout

<a id="opIdandroidenterprise.enterprises.setStoreLayout"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "homepageId": "string",
    "storeLayoutType": "unknown"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout`

Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

> Body parameter

```json
{
  "homepageId": "string",
  "storeLayoutType": "unknown"
}
```

<h3 id="androidenterpriseenterprisessetstorelayout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[StoreLayout](#schemastorelayout)|false|none|
|» homepageId|body|string|false|The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic".|
|» storeLayoutType|body|string|false|The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» storeLayoutType|unknown|
|» storeLayoutType|basic|
|» storeLayoutType|custom|

> Example responses

> 200 Response

```json
{
  "homepageId": "string",
  "storeLayoutType": "unknown"
}
```

<h3 id="androidenterpriseenterprisessetstorelayout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreLayout](#schemastorelayout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.enterprises.unenroll

<a id="opIdandroidenterprise.enterprises.unenroll"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/unenroll \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/unenroll`

Unenrolls an enterprise from the calling EMM.

<h3 id="androidenterpriseenterprisesunenroll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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

<h3 id="androidenterpriseenterprisesunenroll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-entitlements">entitlements</h1>

## androidenterprise.entitlements.list

<a id="opIdandroidenterprise.entitlements.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/entitlements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements`

Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterpriseentitlementslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "entitlement": [
    {
      "productId": "string",
      "reason": "free"
    }
  ]
}
```

<h3 id="androidenterpriseentitlementslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EntitlementsListResponse](#schemaentitlementslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.entitlements.get

<a id="opIdandroidenterprise.entitlements.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/entitlements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}`

Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterpriseentitlementsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|entitlementId|path|string|true|The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".|
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
  "productId": "string",
  "reason": "free"
}
```

<h3 id="androidenterpriseentitlementsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Entitlement](#schemaentitlement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.entitlements.update

<a id="opIdandroidenterprise.entitlements.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/entitlements/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "productId": "string",
    "reason": "free"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}`

Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

> Body parameter

```json
{
  "productId": "string",
  "reason": "free"
}
```

<h3 id="androidenterpriseentitlementsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|entitlementId|path|string|true|The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".|
|install|query|boolean|false|Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.|
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
|body|body|[Entitlement](#schemaentitlement)|false|none|
|» productId|body|string|false|The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".|
|» reason|body|string|false|The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» reason|free|
|» reason|groupLicense|
|» reason|userPurchase|

> Example responses

> 200 Response

```json
{
  "productId": "string",
  "reason": "free"
}
```

<h3 id="androidenterpriseentitlementsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Entitlement](#schemaentitlement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.entitlements.delete

<a id="opIdandroidenterprise.entitlements.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/entitlements/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}`

Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterpriseentitlementsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|entitlementId|path|string|true|The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".|
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

<h3 id="androidenterpriseentitlementsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-grouplicenses">grouplicenses</h1>

## androidenterprise.grouplicenses.list

<a id="opIdandroidenterprise.grouplicenses.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/groupLicenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses`

Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterprisegrouplicenseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "groupLicense": [
    {
      "acquisitionKind": "free",
      "approval": "approved",
      "numProvisioned": 0,
      "numPurchased": 0,
      "permissions": "currentApproved",
      "productId": "string"
    }
  ]
}
```

<h3 id="androidenterprisegrouplicenseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GroupLicensesListResponse](#schemagrouplicenseslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.grouplicenses.get

<a id="opIdandroidenterprise.grouplicenses.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/groupLicenses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}`

Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterprisegrouplicensesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|groupLicenseId|path|string|true|The ID of the product the group license is for, e.g. "app:com.google.android.gm".|
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
  "acquisitionKind": "free",
  "approval": "approved",
  "numProvisioned": 0,
  "numPurchased": 0,
  "permissions": "currentApproved",
  "productId": "string"
}
```

<h3 id="androidenterprisegrouplicensesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GroupLicense](#schemagrouplicense)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-grouplicenseusers">grouplicenseusers</h1>

## androidenterprise.grouplicenseusers.list

<a id="opIdandroidenterprise.grouplicenseusers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/groupLicenses/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users`

Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterprisegrouplicenseuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|groupLicenseId|path|string|true|The ID of the product the group license is for, e.g. "app:com.google.android.gm".|
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
  "user": [
    {
      "accountIdentifier": "string",
      "accountType": "deviceAccount",
      "displayName": "string",
      "id": "string",
      "managementType": "googleManaged",
      "primaryEmail": "string"
    }
  ]
}
```

<h3 id="androidenterprisegrouplicenseuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GroupLicenseUsersListResponse](#schemagrouplicenseuserslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-installs">installs</h1>

## androidenterprise.installs.list

<a id="opIdandroidenterprise.installs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/installs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs`

Retrieves the details of all apps installed on the specified device.

<h3 id="androidenterpriseinstallslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
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
  "install": [
    {
      "installState": "installed",
      "productId": "string",
      "versionCode": 0
    }
  ]
}
```

<h3 id="androidenterpriseinstallslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InstallsListResponse](#schemainstallslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.installs.get

<a id="opIdandroidenterprise.installs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/installs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}`

Retrieves details of an installation of an app on a device.

<h3 id="androidenterpriseinstallsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|installId|path|string|true|The ID of the product represented by the install, e.g. "app:com.google.android.gm".|
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
  "installState": "installed",
  "productId": "string",
  "versionCode": 0
}
```

<h3 id="androidenterpriseinstallsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Install](#schemainstall)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.installs.update

<a id="opIdandroidenterprise.installs.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/installs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "installState": "installed",
    "productId": "string",
    "versionCode": 0
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}`

Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

> Body parameter

```json
{
  "installState": "installed",
  "productId": "string",
  "versionCode": 0
}
```

<h3 id="androidenterpriseinstallsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|installId|path|string|true|The ID of the product represented by the install, e.g. "app:com.google.android.gm".|
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
|body|body|[Install](#schemainstall)|false|none|
|» installState|body|string|false|Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.|
|» productId|body|string|false|The ID of the product that the install is for. For example, "app:com.google.android.gm".|
|» versionCode|body|integer(int32)|false|The version of the installed product. Guaranteed to be set only if the install state is "installed".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» installState|installed|
|» installState|installPending|

> Example responses

> 200 Response

```json
{
  "installState": "installed",
  "productId": "string",
  "versionCode": 0
}
```

<h3 id="androidenterpriseinstallsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Install](#schemainstall)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.installs.delete

<a id="opIdandroidenterprise.installs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/installs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}`

Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.

<h3 id="androidenterpriseinstallsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|installId|path|string|true|The ID of the product represented by the install, e.g. "app:com.google.android.gm".|
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

<h3 id="androidenterpriseinstallsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-managedconfigurationsfordevice">managedconfigurationsfordevice</h1>

## androidenterprise.managedconfigurationsfordevice.list

<a id="opIdandroidenterprise.managedconfigurationsfordevice.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/managedConfigurationsForDevice \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice`

Lists all the per-device managed configurations for the specified device. Only the ID is set.

<h3 id="androidenterprisemanagedconfigurationsfordevicelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
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
  "managedConfigurationForDevice": [
    {
      "configurationVariables": {
        "mcmId": "string",
        "variableSet": [
          {
            "placeholder": "string",
            "userValue": "string"
          }
        ]
      },
      "kind": "string",
      "managedProperty": [
        {
          "key": "string",
          "valueBool": true,
          "valueBundle": {},
          "valueBundleArray": [
            {}
          ],
          "valueInteger": 0,
          "valueString": "string",
          "valueStringArray": [
            "string"
          ]
        }
      ],
      "productId": "string"
    }
  ]
}
```

<h3 id="androidenterprisemanagedconfigurationsfordevicelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfigurationsForDeviceListResponse](#schemamanagedconfigurationsfordevicelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsfordevice.get

<a id="opIdandroidenterprise.managedconfigurationsfordevice.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/managedConfigurationsForDevice/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}`

Retrieves details of a per-device managed configuration.

<h3 id="androidenterprisemanagedconfigurationsfordeviceget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|managedConfigurationForDeviceId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsfordeviceget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfiguration](#schemamanagedconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsfordevice.update

<a id="opIdandroidenterprise.managedconfigurationsfordevice.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/managedConfigurationsForDevice/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "configurationVariables": {
      "mcmId": "string",
      "variableSet": [
        {
          "placeholder": "string",
          "userValue": "string"
        }
      ]
    },
    "kind": "string",
    "managedProperty": [
      {
        "key": "string",
        "valueBool": true,
        "valueBundle": {},
        "valueBundleArray": [
          {}
        ],
        "valueInteger": 0,
        "valueString": "string",
        "valueStringArray": [
          "string"
        ]
      }
    ],
    "productId": "string"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}`

Adds or updates a per-device managed configuration for an app for the specified device.

> Body parameter

```json
{
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsfordeviceupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|managedConfigurationForDeviceId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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
|body|body|[ManagedConfiguration](#schemamanagedconfiguration)|false|none|
|» configurationVariables|body|[ConfigurationVariables](#schemaconfigurationvariables)|false|Contains the ID of the managed configuration profile and the set of configuration variables (if any) defined for the user.|
|» kind|body|string|false|Deprecated.|
|» managedProperty|body|[[ManagedProperty](#schemamanagedproperty)]|false|The set of managed properties for this configuration.|
|» productId|body|string|false|The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".|

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
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsfordeviceupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfiguration](#schemamanagedconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsfordevice.delete

<a id="opIdandroidenterprise.managedconfigurationsfordevice.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/devices/string/managedConfigurationsForDevice/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}`

Removes a per-device managed configuration for an app for the specified device.

<h3 id="androidenterprisemanagedconfigurationsfordevicedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|deviceId|path|string|true|The Android ID of the device.|
|managedConfigurationForDeviceId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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

<h3 id="androidenterprisemanagedconfigurationsfordevicedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-managedconfigurationsforuser">managedconfigurationsforuser</h1>

## androidenterprise.managedconfigurationsforuser.list

<a id="opIdandroidenterprise.managedconfigurationsforuser.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/managedConfigurationsForUser \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser`

Lists all the per-user managed configurations for the specified user. Only the ID is set.

<h3 id="androidenterprisemanagedconfigurationsforuserlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "managedConfigurationForUser": [
    {
      "configurationVariables": {
        "mcmId": "string",
        "variableSet": [
          {
            "placeholder": "string",
            "userValue": "string"
          }
        ]
      },
      "kind": "string",
      "managedProperty": [
        {
          "key": "string",
          "valueBool": true,
          "valueBundle": {},
          "valueBundleArray": [
            {}
          ],
          "valueInteger": 0,
          "valueString": "string",
          "valueStringArray": [
            "string"
          ]
        }
      ],
      "productId": "string"
    }
  ]
}
```

<h3 id="androidenterprisemanagedconfigurationsforuserlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfigurationsForUserListResponse](#schemamanagedconfigurationsforuserlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsforuser.get

<a id="opIdandroidenterprise.managedconfigurationsforuser.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/managedConfigurationsForUser/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}`

Retrieves details of a per-user managed configuration for an app for the specified user.

<h3 id="androidenterprisemanagedconfigurationsforuserget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|managedConfigurationForUserId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsforuserget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfiguration](#schemamanagedconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsforuser.update

<a id="opIdandroidenterprise.managedconfigurationsforuser.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/managedConfigurationsForUser/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "configurationVariables": {
      "mcmId": "string",
      "variableSet": [
        {
          "placeholder": "string",
          "userValue": "string"
        }
      ]
    },
    "kind": "string",
    "managedProperty": [
      {
        "key": "string",
        "valueBool": true,
        "valueBundle": {},
        "valueBundleArray": [
          {}
        ],
        "valueInteger": 0,
        "valueString": "string",
        "valueStringArray": [
          "string"
        ]
      }
    ],
    "productId": "string"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}`

Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

> Body parameter

```json
{
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsforuserupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|managedConfigurationForUserId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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
|body|body|[ManagedConfiguration](#schemamanagedconfiguration)|false|none|
|» configurationVariables|body|[ConfigurationVariables](#schemaconfigurationvariables)|false|Contains the ID of the managed configuration profile and the set of configuration variables (if any) defined for the user.|
|» kind|body|string|false|Deprecated.|
|» managedProperty|body|[[ManagedProperty](#schemamanagedproperty)]|false|The set of managed properties for this configuration.|
|» productId|body|string|false|The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".|

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
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterprisemanagedconfigurationsforuserupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfiguration](#schemamanagedconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.managedconfigurationsforuser.delete

<a id="opIdandroidenterprise.managedconfigurationsforuser.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/managedConfigurationsForUser/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}`

Removes a per-user managed configuration for an app for the specified user.

<h3 id="androidenterprisemanagedconfigurationsforuserdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
|managedConfigurationForUserId|path|string|true|The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".|
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

<h3 id="androidenterprisemanagedconfigurationsforuserdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-managedconfigurationssettings">managedconfigurationssettings</h1>

## androidenterprise.managedconfigurationssettings.list

<a id="opIdandroidenterprise.managedconfigurationssettings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/managedConfigurationsSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings`

Lists all the managed configurations settings for the specified app.

<h3 id="androidenterprisemanagedconfigurationssettingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product for which the managed configurations settings applies to.|
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
  "managedConfigurationsSettings": [
    {
      "lastUpdatedTimestampMillis": "string",
      "mcmId": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="androidenterprisemanagedconfigurationssettingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ManagedConfigurationsSettingsListResponse](#schemamanagedconfigurationssettingslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-permissions">permissions</h1>

## androidenterprise.permissions.get

<a id="opIdandroidenterprise.permissions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/permissions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/permissions/{permissionId}`

Retrieves details of an Android app permission for display to an enterprise admin.

<h3 id="androidenterprisepermissionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permissionId|path|string|true|The ID of the permission.|
|language|query|string|false|The BCP47 tag for the user's preferred language (e.g. "en-US", "de")|
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
  "name": "string",
  "permissionId": "string"
}
```

<h3 id="androidenterprisepermissionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Permission](#schemapermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-products">products</h1>

## androidenterprise.products.list

<a id="opIdandroidenterprise.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/products`

Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

<h3 id="androidenterpriseproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|approved|query|boolean|false|Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.|
|language|query|string|false|The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.|
|maxResults|query|integer|false|Defines how many results the list operation should return. The default number depends on the resource collection.|
|query|query|string|false|The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).|
|token|query|string|false|Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.|
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
  "product": [
    {
      "appRestrictionsSchema": {
        "kind": "string",
        "restrictions": [
          {
            "defaultValue": {
              "type": "bool",
              "valueBool": true,
              "valueInteger": 0,
              "valueMultiselect": [
                "string"
              ],
              "valueString": "string"
            },
            "description": "string",
            "entry": [
              "string"
            ],
            "entryValue": [
              "string"
            ],
            "key": "string",
            "nestedRestriction": [
              {}
            ],
            "restrictionType": "bool",
            "title": "string"
          }
        ]
      },
      "appTracks": [
        {
          "trackAlias": "string",
          "trackId": "string"
        }
      ],
      "appVersion": [
        {
          "isProduction": true,
          "track": "appTrackUnspecified",
          "trackId": [
            "string"
          ],
          "versionCode": 0,
          "versionString": "string"
        }
      ],
      "authorName": "string",
      "availableCountries": [
        "string"
      ],
      "availableTracks": [
        "appTrackUnspecified"
      ],
      "category": "string",
      "contentRating": "ratingUnknown",
      "description": "string",
      "detailsUrl": "string",
      "distributionChannel": "publicGoogleHosted",
      "features": [
        "featureUnknown"
      ],
      "iconUrl": "string",
      "lastUpdatedTimestampMillis": "string",
      "minAndroidSdkVersion": 0,
      "permissions": [
        {
          "permissionId": "string",
          "state": "required"
        }
      ],
      "productId": "string",
      "productPricing": "unknown",
      "recentChanges": "string",
      "requiresContainerApp": true,
      "screenshotUrls": [
        "string"
      ],
      "signingCertificate": {
        "certificateHashSha1": "string",
        "certificateHashSha256": "string"
      },
      "smallIconUrl": "string",
      "title": "string",
      "workDetailsUrl": "string"
    }
  ],
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

<h3 id="androidenterpriseproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductsListResponse](#schemaproductslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.get

<a id="opIdandroidenterprise.products.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}`

Retrieves details of a product for display to an enterprise admin.

<h3 id="androidenterpriseproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product, e.g. "app:com.google.android.gm".|
|language|query|string|false|The BCP47 tag for the user's preferred language (e.g. "en-US", "de").|
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
  "appRestrictionsSchema": {
    "kind": "string",
    "restrictions": [
      {
        "defaultValue": {
          "type": "bool",
          "valueBool": true,
          "valueInteger": 0,
          "valueMultiselect": [
            "string"
          ],
          "valueString": "string"
        },
        "description": "string",
        "entry": [
          "string"
        ],
        "entryValue": [
          "string"
        ],
        "key": "string",
        "nestedRestriction": [
          {}
        ],
        "restrictionType": "bool",
        "title": "string"
      }
    ]
  },
  "appTracks": [
    {
      "trackAlias": "string",
      "trackId": "string"
    }
  ],
  "appVersion": [
    {
      "isProduction": true,
      "track": "appTrackUnspecified",
      "trackId": [
        "string"
      ],
      "versionCode": 0,
      "versionString": "string"
    }
  ],
  "authorName": "string",
  "availableCountries": [
    "string"
  ],
  "availableTracks": [
    "appTrackUnspecified"
  ],
  "category": "string",
  "contentRating": "ratingUnknown",
  "description": "string",
  "detailsUrl": "string",
  "distributionChannel": "publicGoogleHosted",
  "features": [
    "featureUnknown"
  ],
  "iconUrl": "string",
  "lastUpdatedTimestampMillis": "string",
  "minAndroidSdkVersion": 0,
  "permissions": [
    {
      "permissionId": "string",
      "state": "required"
    }
  ],
  "productId": "string",
  "productPricing": "unknown",
  "recentChanges": "string",
  "requiresContainerApp": true,
  "screenshotUrls": [
    "string"
  ],
  "signingCertificate": {
    "certificateHashSha1": "string",
    "certificateHashSha256": "string"
  },
  "smallIconUrl": "string",
  "title": "string",
  "workDetailsUrl": "string"
}
```

<h3 id="androidenterpriseproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Product](#schemaproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.getAppRestrictionsSchema

<a id="opIdandroidenterprise.products.getAppRestrictionsSchema"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/appRestrictionsSchema \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema`

Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

<h3 id="androidenterpriseproductsgetapprestrictionsschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product.|
|language|query|string|false|The BCP47 tag for the user's preferred language (e.g. "en-US", "de").|
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
  "restrictions": [
    {
      "defaultValue": {
        "type": "bool",
        "valueBool": true,
        "valueInteger": 0,
        "valueMultiselect": [
          "string"
        ],
        "valueString": "string"
      },
      "description": "string",
      "entry": [
        "string"
      ],
      "entryValue": [
        "string"
      ],
      "key": "string",
      "nestedRestriction": [
        {}
      ],
      "restrictionType": "bool",
      "title": "string"
    }
  ]
}
```

<h3 id="androidenterpriseproductsgetapprestrictionsschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AppRestrictionsSchema](#schemaapprestrictionsschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.approve

<a id="opIdandroidenterprise.products.approve"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "approvalUrlInfo": {
      "approvalUrl": "string"
    },
    "approvedPermissions": "currentPermissionsOnly"
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve`

 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

> Body parameter

```json
{
  "approvalUrlInfo": {
    "approvalUrl": "string"
  },
  "approvedPermissions": "currentPermissionsOnly"
}
```

<h3 id="androidenterpriseproductsapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product.|
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
|body|body|[ProductsApproveRequest](#schemaproductsapproverequest)|false|none|
|» approvalUrlInfo|body|[ApprovalUrlInfo](#schemaapprovalurlinfo)|false|The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated.|
|» approvedPermissions|body|string|false|Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» approvedPermissions|currentPermissionsOnly|
|» approvedPermissions|allPermissions|

<h3 id="androidenterpriseproductsapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.generateApprovalUrl

<a id="opIdandroidenterprise.products.generateApprovalUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/generateApprovalUrl \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl`

Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

<h3 id="androidenterpriseproductsgenerateapprovalurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product.|
|languageCode|query|string|false|The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".|
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
  "url": "string"
}
```

<h3 id="androidenterpriseproductsgenerateapprovalurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductsGenerateApprovalUrlResponse](#schemaproductsgenerateapprovalurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.getPermissions

<a id="opIdandroidenterprise.products.getPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions`

Retrieves the Android app permissions required by this app.

<h3 id="androidenterpriseproductsgetpermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product.|
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
  "permission": [
    {
      "permissionId": "string",
      "state": "required"
    }
  ],
  "productId": "string"
}
```

<h3 id="androidenterpriseproductsgetpermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductPermissions](#schemaproductpermissions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.products.unapprove

<a id="opIdandroidenterprise.products.unapprove"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/products/string/unapprove \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove`

Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterpriseproductsunapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|productId|path|string|true|The ID of the product.|
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

<h3 id="androidenterpriseproductsunapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-serviceaccountkeys">serviceaccountkeys</h1>

## androidenterprise.serviceaccountkeys.list

<a id="opIdandroidenterprise.serviceaccountkeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/serviceAccountKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys`

Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

<h3 id="androidenterpriseserviceaccountkeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "serviceAccountKey": [
    {
      "data": "string",
      "id": "string",
      "publicData": "string",
      "type": "googleCredentials"
    }
  ]
}
```

<h3 id="androidenterpriseserviceaccountkeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServiceAccountKeysListResponse](#schemaserviceaccountkeyslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.serviceaccountkeys.insert

<a id="opIdandroidenterprise.serviceaccountkeys.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/serviceAccountKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "id": "string",
    "publicData": "string",
    "type": "googleCredentials"
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys`

Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.

> Body parameter

```json
{
  "data": "string",
  "id": "string",
  "publicData": "string",
  "type": "googleCredentials"
}
```

<h3 id="androidenterpriseserviceaccountkeysinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[ServiceAccountKey](#schemaserviceaccountkey)|false|none|
|» data|body|string|false|The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.|
|» id|body|string|false|An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.|
|» publicData|body|string|false|Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.|
|» type|body|string|false|The file format of the generated key data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|googleCredentials|
|» type|pkcs12|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "id": "string",
  "publicData": "string",
  "type": "googleCredentials"
}
```

<h3 id="androidenterpriseserviceaccountkeysinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ServiceAccountKey](#schemaserviceaccountkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.serviceaccountkeys.delete

<a id="opIdandroidenterprise.serviceaccountkeys.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/serviceAccountKeys/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}`

Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

<h3 id="androidenterpriseserviceaccountkeysdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|keyId|path|string|true|The ID of the key.|
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

<h3 id="androidenterpriseserviceaccountkeysdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-storelayoutclusters">storelayoutclusters</h1>

## androidenterprise.storelayoutclusters.list

<a id="opIdandroidenterprise.storelayoutclusters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters`

Retrieves the details of all clusters on the specified page.

<h3 id="androidenterprisestorelayoutclusterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
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
  "cluster": [
    {
      "id": "string",
      "name": [
        {
          "locale": "string",
          "text": "string"
        }
      ],
      "orderInPage": "string",
      "productId": [
        "string"
      ]
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutclusterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreLayoutClustersListResponse](#schemastorelayoutclusterslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutclusters.insert

<a id="opIdandroidenterprise.storelayoutclusters.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": [
      {
        "locale": "string",
        "text": "string"
      }
    ],
    "orderInPage": "string",
    "productId": [
      "string"
    ]
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters`

Inserts a new cluster in a page.

> Body parameter

```json
{
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

<h3 id="androidenterprisestorelayoutclustersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
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
|body|body|[StoreCluster](#schemastorecluster)|false|none|
|» id|body|string|false|Unique ID of this cluster. Assigned by the server. Immutable once assigned.|
|» name|body|[[LocalizedText](#schemalocalizedtext)]|false|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|
|» orderInPage|body|string|false|String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.|
|» productId|body|[string]|false|List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.|

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
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

<h3 id="androidenterprisestorelayoutclustersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreCluster](#schemastorecluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutclusters.get

<a id="opIdandroidenterprise.storelayoutclusters.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}`

Retrieves details of a cluster.

<h3 id="androidenterprisestorelayoutclustersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
|clusterId|path|string|true|The ID of the cluster.|
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
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

<h3 id="androidenterprisestorelayoutclustersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreCluster](#schemastorecluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutclusters.update

<a id="opIdandroidenterprise.storelayoutclusters.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string/clusters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": [
      {
        "locale": "string",
        "text": "string"
      }
    ],
    "orderInPage": "string",
    "productId": [
      "string"
    ]
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}`

Updates a cluster.

> Body parameter

```json
{
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

<h3 id="androidenterprisestorelayoutclustersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
|clusterId|path|string|true|The ID of the cluster.|
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
|body|body|[StoreCluster](#schemastorecluster)|false|none|
|» id|body|string|false|Unique ID of this cluster. Assigned by the server. Immutable once assigned.|
|» name|body|[[LocalizedText](#schemalocalizedtext)]|false|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|
|» orderInPage|body|string|false|String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.|
|» productId|body|[string]|false|List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.|

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
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

<h3 id="androidenterprisestorelayoutclustersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreCluster](#schemastorecluster)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutclusters.delete

<a id="opIdandroidenterprise.storelayoutclusters.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string/clusters/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}`

Deletes a cluster.

<h3 id="androidenterprisestorelayoutclustersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
|clusterId|path|string|true|The ID of the cluster.|
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

<h3 id="androidenterprisestorelayoutclustersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-storelayoutpages">storelayoutpages</h1>

## androidenterprise.storelayoutpages.list

<a id="opIdandroidenterprise.storelayoutpages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages`

Retrieves the details of all pages in the store.

<h3 id="androidenterprisestorelayoutpageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "page": [
    {
      "id": "string",
      "link": [
        "string"
      ],
      "name": [
        {
          "locale": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StoreLayoutPagesListResponse](#schemastorelayoutpageslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutpages.insert

<a id="opIdandroidenterprise.storelayoutpages.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "link": [
      "string"
    ],
    "name": [
      {
        "locale": "string",
        "text": "string"
      }
    ]
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages`

Inserts a new store page.

> Body parameter

```json
{
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpagesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[StorePage](#schemastorepage)|false|none|
|» id|body|string|false|Unique ID of this page. Assigned by the server. Immutable once assigned.|
|» link|body|[string]|false|Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.|
|» name|body|[[LocalizedText](#schemalocalizedtext)]|false|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|

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
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpagesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StorePage](#schemastorepage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutpages.get

<a id="opIdandroidenterprise.storelayoutpages.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}`

Retrieves details of a store page.

<h3 id="androidenterprisestorelayoutpagesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
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
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpagesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StorePage](#schemastorepage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutpages.update

<a id="opIdandroidenterprise.storelayoutpages.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "link": [
      "string"
    ],
    "name": [
      {
        "locale": "string",
        "text": "string"
      }
    ]
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}`

Updates the content of a store page.

> Body parameter

```json
{
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
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
|body|body|[StorePage](#schemastorepage)|false|none|
|» id|body|string|false|Unique ID of this page. Assigned by the server. Immutable once assigned.|
|» link|body|[string]|false|Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.|
|» name|body|[[LocalizedText](#schemalocalizedtext)]|false|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|

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
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

<h3 id="androidenterprisestorelayoutpagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StorePage](#schemastorepage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.storelayoutpages.delete

<a id="opIdandroidenterprise.storelayoutpages.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/storeLayout/pages/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}`

Deletes a store page.

<h3 id="androidenterprisestorelayoutpagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|pageId|path|string|true|The ID of the page.|
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

<h3 id="androidenterprisestorelayoutpagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-users">users</h1>

## androidenterprise.users.list

<a id="opIdandroidenterprise.users.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/androidenterprise/v1/enterprises/string/users?email=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users`

Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

<h3 id="androidenterpriseuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|email|query|string|true|Required. The exact primary email address of the user to look up.|
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
  "user": [
    {
      "accountIdentifier": "string",
      "accountType": "deviceAccount",
      "displayName": "string",
      "id": "string",
      "managementType": "googleManaged",
      "primaryEmail": "string"
    }
  ]
}
```

<h3 id="androidenterpriseuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UsersListResponse](#schemauserslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.insert

<a id="opIdandroidenterprise.users.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIdentifier": "string",
    "accountType": "deviceAccount",
    "displayName": "string",
    "id": "string",
    "managementType": "googleManaged",
    "primaryEmail": "string"
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/users`

Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

> Body parameter

```json
{
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

<h3 id="androidenterpriseusersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|» accountIdentifier|body|string|false|A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.|
|» accountType|body|string|false|The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.|
|» displayName|body|string|false|The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update|
|» id|body|string|false|The unique ID for the user.|
|» managementType|body|string|false|The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.|
|» primaryEmail|body|string|false|The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» accountType|deviceAccount|
|» accountType|userAccount|
|» managementType|googleManaged|
|» managementType|emmManaged|

> Example responses

> 200 Response

```json
{
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

<h3 id="androidenterpriseusersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.get

<a id="opIdandroidenterprise.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}`

Retrieves a user's details.

<h3 id="androidenterpriseusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

<h3 id="androidenterpriseusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.update

<a id="opIdandroidenterprise.users.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountIdentifier": "string",
    "accountType": "deviceAccount",
    "displayName": "string",
    "id": "string",
    "managementType": "googleManaged",
    "primaryEmail": "string"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}`

Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

> Body parameter

```json
{
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

<h3 id="androidenterpriseusersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
|» accountIdentifier|body|string|false|A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.|
|» accountType|body|string|false|The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.|
|» displayName|body|string|false|The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update|
|» id|body|string|false|The unique ID for the user.|
|» managementType|body|string|false|The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.|
|» primaryEmail|body|string|false|The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» accountType|deviceAccount|
|» accountType|userAccount|
|» managementType|googleManaged|
|» managementType|emmManaged|

> Example responses

> 200 Response

```json
{
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

<h3 id="androidenterpriseusersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.delete

<a id="opIdandroidenterprise.users.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}`

Deleted an EMM-managed user.

<h3 id="androidenterpriseusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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

<h3 id="androidenterpriseusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.generateAuthenticationToken

<a id="opIdandroidenterprise.users.generateAuthenticationToken"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/authenticationToken \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken`

Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.

<h3 id="androidenterpriseusersgenerateauthenticationtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "token": "string"
}
```

<h3 id="androidenterpriseusersgenerateauthenticationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AuthenticationToken](#schemaauthenticationtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.getAvailableProductSet

<a id="opIdandroidenterprise.users.getAvailableProductSet"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/availableProductSet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet`

Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

<h3 id="androidenterpriseusersgetavailableproductset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
  "productId": [
    "string"
  ],
  "productSetBehavior": "unknown",
  "productVisibility": [
    {
      "productId": "string",
      "trackIds": [
        "string"
      ],
      "tracks": [
        "appTrackUnspecified"
      ]
    }
  ]
}
```

<h3 id="androidenterpriseusersgetavailableproductset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductSet](#schemaproductset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.setAvailableProductSet

<a id="opIdandroidenterprise.users.setAvailableProductSet"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/availableProductSet \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "productId": [
      "string"
    ],
    "productSetBehavior": "unknown",
    "productVisibility": [
      {
        "productId": "string",
        "trackIds": [
          "string"
        ],
        "tracks": [
          "appTrackUnspecified"
        ]
      }
    ]
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet`

Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

> Body parameter

```json
{
  "productId": [
    "string"
  ],
  "productSetBehavior": "unknown",
  "productVisibility": [
    {
      "productId": "string",
      "trackIds": [
        "string"
      ],
      "tracks": [
        "appTrackUnspecified"
      ]
    }
  ]
}
```

<h3 id="androidenterpriseuserssetavailableproductset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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
|body|body|[ProductSet](#schemaproductset)|false|none|
|» productId|body|[string]|false|The list of product IDs making up the set of products.|
|» productSetBehavior|body|string|false|The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.|
|» productVisibility|body|[[ProductVisibility](#schemaproductvisibility)]|false|Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» productSetBehavior|unknown|
|» productSetBehavior|whitelist|
|» productSetBehavior|includeAll|
|» productSetBehavior|allApproved|

> Example responses

> 200 Response

```json
{
  "productId": [
    "string"
  ],
  "productSetBehavior": "unknown",
  "productVisibility": [
    {
      "productId": "string",
      "trackIds": [
        "string"
      ],
      "tracks": [
        "appTrackUnspecified"
      ]
    }
  ]
}
```

<h3 id="androidenterpriseuserssetavailableproductset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ProductSet](#schemaproductset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.users.revokeDeviceAccess

<a id="opIdandroidenterprise.users.revokeDeviceAccess"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/users/string/deviceAccess \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess`

Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.

<h3 id="androidenterpriseusersrevokedeviceaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|userId|path|string|true|The ID of the user.|
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

<h3 id="androidenterpriseusersrevokedeviceaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

<h1 id="google-play-emm-api-webapps">webapps</h1>

## androidenterprise.webapps.list

<a id="opIdandroidenterprise.webapps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/webApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/webApps`

Retrieves the details of all web apps for a given enterprise.

<h3 id="androidenterprisewebappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
  "webApp": [
    {
      "displayMode": "displayModeUnspecified",
      "icons": [
        {
          "imageData": "string"
        }
      ],
      "isPublished": true,
      "startUrl": "string",
      "title": "string",
      "versionCode": "string",
      "webAppId": "string"
    }
  ]
}
```

<h3 id="androidenterprisewebappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebAppsListResponse](#schemawebappslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.webapps.insert

<a id="opIdandroidenterprise.webapps.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/webApps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayMode": "displayModeUnspecified",
    "icons": [
      {
        "imageData": "string"
      }
    ],
    "isPublished": true,
    "startUrl": "string",
    "title": "string",
    "versionCode": "string",
    "webAppId": "string"
  }'
```

`POST /androidenterprise/v1/enterprises/{enterpriseId}/webApps`

Creates a new web app for the enterprise.

> Body parameter

```json
{
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

<h3 id="androidenterprisewebappsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
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
|body|body|[WebApp](#schemawebapp)|false|none|
|» displayMode|body|string|false|The display mode of the web app. Possible values include: - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device's status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. |
|» icons|body|[[WebAppIcon](#schemawebappicon)]|false|A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used.|
|» isPublished|body|boolean|false|A flag whether the app has been published to the Play store yet.|
|» startUrl|body|string|false|The start URL, i.e. the URL that should load when the user opens the application.|
|» title|body|string|false|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|» versionCode|body|string(int64)|false|The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|
|» webAppId|body|string|false|The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» displayMode|displayModeUnspecified|
|» displayMode|minimalUi|
|» displayMode|standalone|
|» displayMode|fullScreen|

> Example responses

> 200 Response

```json
{
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

<h3 id="androidenterprisewebappsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.webapps.get

<a id="opIdandroidenterprise.webapps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/webApps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}`

Gets an existing web app.

<h3 id="androidenterprisewebappsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|webAppId|path|string|true|The ID of the web app.|
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
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

<h3 id="androidenterprisewebappsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.webapps.update

<a id="opIdandroidenterprise.webapps.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/webApps/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayMode": "displayModeUnspecified",
    "icons": [
      {
        "imageData": "string"
      }
    ],
    "isPublished": true,
    "startUrl": "string",
    "title": "string",
    "versionCode": "string",
    "webAppId": "string"
  }'
```

`PUT /androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}`

Updates an existing web app.

> Body parameter

```json
{
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

<h3 id="androidenterprisewebappsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|webAppId|path|string|true|The ID of the web app.|
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
|body|body|[WebApp](#schemawebapp)|false|none|
|» displayMode|body|string|false|The display mode of the web app. Possible values include: - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device's status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. |
|» icons|body|[[WebAppIcon](#schemawebappicon)]|false|A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used.|
|» isPublished|body|boolean|false|A flag whether the app has been published to the Play store yet.|
|» startUrl|body|string|false|The start URL, i.e. the URL that should load when the user opens the application.|
|» title|body|string|false|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|» versionCode|body|string(int64)|false|The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|
|» webAppId|body|string|false|The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» displayMode|displayModeUnspecified|
|» displayMode|minimalUi|
|» displayMode|standalone|
|» displayMode|fullScreen|

> Example responses

> 200 Response

```json
{
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

<h3 id="androidenterprisewebappsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

## androidenterprise.webapps.delete

<a id="opIdandroidenterprise.webapps.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/androidenterprise/v1/enterprises/string/webApps/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}`

Deletes an existing web app.

<h3 id="androidenterprisewebappsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterpriseId|path|string|true|The ID of the enterprise.|
|webAppId|path|string|true|The ID of the web app.|
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

<h3 id="androidenterprisewebappsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidenterprise ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidenterprise )
</aside>

# Schemas

<h2 id="tocS_Administrator">Administrator</h2>
<!-- backwards compatibility -->
<a id="schemaadministrator"></a>
<a id="schema_Administrator"></a>
<a id="tocSadministrator"></a>
<a id="tocsadministrator"></a>

```json
{
  "email": "string"
}
```

This represents an enterprise admin who can manage the enterprise in the managed Google Play store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The admin's email address.|

<h2 id="tocS_AdministratorWebToken">AdministratorWebToken</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtoken"></a>
<a id="schema_AdministratorWebToken"></a>
<a id="tocSadministratorwebtoken"></a>
<a id="tocsadministratorwebtoken"></a>

```json
{
  "token": "string"
}
```

A token authorizing an admin to access an iframe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|An opaque token to be passed to the Play front-end to generate an iframe.|

<h2 id="tocS_AdministratorWebTokenSpec">AdministratorWebTokenSpec</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspec"></a>
<a id="schema_AdministratorWebTokenSpec"></a>
<a id="tocSadministratorwebtokenspec"></a>
<a id="tocsadministratorwebtokenspec"></a>

```json
{
  "managedConfigurations": {
    "enabled": true
  },
  "parent": "string",
  "permission": [
    "unknown"
  ],
  "playSearch": {
    "approveApps": true,
    "enabled": true
  },
  "privateApps": {
    "enabled": true
  },
  "storeBuilder": {
    "enabled": true
  },
  "webApps": {
    "enabled": true
  },
  "zeroTouch": {
    "enabled": true
  }
}
```

Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedConfigurations|[AdministratorWebTokenSpecManagedConfigurations](#schemaadministratorwebtokenspecmanagedconfigurations)|false|none|Options for displaying the Managed Configuration page.|
|parent|string|false|none|The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs.|
|permission|[string]|false|none|Deprecated. Use PlaySearch.approveApps.|
|playSearch|[AdministratorWebTokenSpecPlaySearch](#schemaadministratorwebtokenspecplaysearch)|false|none|Options for displaying the managed Play Search apps page.|
|privateApps|[AdministratorWebTokenSpecPrivateApps](#schemaadministratorwebtokenspecprivateapps)|false|none|Options for displaying the Private Apps page.|
|storeBuilder|[AdministratorWebTokenSpecStoreBuilder](#schemaadministratorwebtokenspecstorebuilder)|false|none|Options for displaying the Organize apps page.|
|webApps|[AdministratorWebTokenSpecWebApps](#schemaadministratorwebtokenspecwebapps)|false|none|Options for displaying the Web Apps page.|
|zeroTouch|[AdministratorWebTokenSpecZeroTouch](#schemaadministratorwebtokenspeczerotouch)|false|none|Options for displaying the Zero Touch page.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|unknown|
|permission|approveApps|
|permission|manageMcm|

<h2 id="tocS_AdministratorWebTokenSpecManagedConfigurations">AdministratorWebTokenSpecManagedConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspecmanagedconfigurations"></a>
<a id="schema_AdministratorWebTokenSpecManagedConfigurations"></a>
<a id="tocSadministratorwebtokenspecmanagedconfigurations"></a>
<a id="tocsadministratorwebtokenspecmanagedconfigurations"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Managed Configuration page is displayed. Default is true.|

<h2 id="tocS_AdministratorWebTokenSpecPlaySearch">AdministratorWebTokenSpecPlaySearch</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspecplaysearch"></a>
<a id="schema_AdministratorWebTokenSpecPlaySearch"></a>
<a id="tocSadministratorwebtokenspecplaysearch"></a>
<a id="tocsadministratorwebtokenspecplaysearch"></a>

```json
{
  "approveApps": true,
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approveApps|boolean|false|none|Allow access to the iframe in approve mode. Default is false.|
|enabled|boolean|false|none|Whether the managed Play Search apps page is displayed. Default is true.|

<h2 id="tocS_AdministratorWebTokenSpecPrivateApps">AdministratorWebTokenSpecPrivateApps</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspecprivateapps"></a>
<a id="schema_AdministratorWebTokenSpecPrivateApps"></a>
<a id="tocSadministratorwebtokenspecprivateapps"></a>
<a id="tocsadministratorwebtokenspecprivateapps"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Private Apps page is displayed. Default is true.|

<h2 id="tocS_AdministratorWebTokenSpecStoreBuilder">AdministratorWebTokenSpecStoreBuilder</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspecstorebuilder"></a>
<a id="schema_AdministratorWebTokenSpecStoreBuilder"></a>
<a id="tocSadministratorwebtokenspecstorebuilder"></a>
<a id="tocsadministratorwebtokenspecstorebuilder"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Organize apps page is displayed. Default is true.|

<h2 id="tocS_AdministratorWebTokenSpecWebApps">AdministratorWebTokenSpecWebApps</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspecwebapps"></a>
<a id="schema_AdministratorWebTokenSpecWebApps"></a>
<a id="tocSadministratorwebtokenspecwebapps"></a>
<a id="tocsadministratorwebtokenspecwebapps"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the Web Apps page is displayed. Default is true.|

<h2 id="tocS_AdministratorWebTokenSpecZeroTouch">AdministratorWebTokenSpecZeroTouch</h2>
<!-- backwards compatibility -->
<a id="schemaadministratorwebtokenspeczerotouch"></a>
<a id="schema_AdministratorWebTokenSpecZeroTouch"></a>
<a id="tocSadministratorwebtokenspeczerotouch"></a>
<a id="tocsadministratorwebtokenspeczerotouch"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether zero-touch embedded UI is usable with this token. If enabled, the admin can link zero-touch customers to this enterprise.|

<h2 id="tocS_AppRestrictionsSchema">AppRestrictionsSchema</h2>
<!-- backwards compatibility -->
<a id="schemaapprestrictionsschema"></a>
<a id="schema_AppRestrictionsSchema"></a>
<a id="tocSapprestrictionsschema"></a>
<a id="tocsapprestrictionsschema"></a>

```json
{
  "kind": "string",
  "restrictions": [
    {
      "defaultValue": {
        "type": "bool",
        "valueBool": true,
        "valueInteger": 0,
        "valueMultiselect": [
          "string"
        ],
        "valueString": "string"
      },
      "description": "string",
      "entry": [
        "string"
      ],
      "entryValue": [
        "string"
      ],
      "key": "string",
      "nestedRestriction": [
        {}
      ],
      "restrictionType": "bool",
      "title": "string"
    }
  ]
}
```

Represents the list of app restrictions available to be pre-configured for the product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Deprecated.|
|restrictions|[[AppRestrictionsSchemaRestriction](#schemaapprestrictionsschemarestriction)]|false|none|The set of restrictions that make up this schema.|

<h2 id="tocS_AppRestrictionsSchemaChangeEvent">AppRestrictionsSchemaChangeEvent</h2>
<!-- backwards compatibility -->
<a id="schemaapprestrictionsschemachangeevent"></a>
<a id="schema_AppRestrictionsSchemaChangeEvent"></a>
<a id="tocSapprestrictionsschemachangeevent"></a>
<a id="tocsapprestrictionsschemachangeevent"></a>

```json
{
  "productId": "string"
}
```

An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present.|

<h2 id="tocS_AppRestrictionsSchemaRestriction">AppRestrictionsSchemaRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaapprestrictionsschemarestriction"></a>
<a id="schema_AppRestrictionsSchemaRestriction"></a>
<a id="tocSapprestrictionsschemarestriction"></a>
<a id="tocsapprestrictionsschemarestriction"></a>

```json
{
  "defaultValue": {
    "type": "bool",
    "valueBool": true,
    "valueInteger": 0,
    "valueMultiselect": [
      "string"
    ],
    "valueString": "string"
  },
  "description": "string",
  "entry": [
    "string"
  ],
  "entryValue": [
    "string"
  ],
  "key": "string",
  "nestedRestriction": [
    {
      "defaultValue": {
        "type": "bool",
        "valueBool": true,
        "valueInteger": 0,
        "valueMultiselect": [
          "string"
        ],
        "valueString": "string"
      },
      "description": "string",
      "entry": [
        "string"
      ],
      "entryValue": [
        "string"
      ],
      "key": "string",
      "nestedRestriction": [
        {}
      ],
      "restrictionType": "bool",
      "title": "string"
    }
  ],
  "restrictionType": "bool",
  "title": "string"
}
```

A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|[AppRestrictionsSchemaRestrictionRestrictionValue](#schemaapprestrictionsschemarestrictionrestrictionvalue)|false|none|The default value of the restriction. bundle and bundleArray restrictions never have a default value.|
|description|string|false|none|A longer description of the restriction, giving more detail of what it affects.|
|entry|[string]|false|none|For choice or multiselect restrictions, the list of possible entries' human-readable names.|
|entryValue|[string]|false|none|For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction.|
|key|string|false|none|The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".|
|nestedRestriction|[[AppRestrictionsSchemaRestriction](#schemaapprestrictionsschemarestriction)]|false|none|For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep.|
|restrictionType|string|false|none|The type of the restriction.|
|title|string|false|none|The name of the restriction.|

#### Enumerated Values

|Property|Value|
|---|---|
|restrictionType|bool|
|restrictionType|string|
|restrictionType|integer|
|restrictionType|choice|
|restrictionType|multiselect|
|restrictionType|hidden|
|restrictionType|bundle|
|restrictionType|bundleArray|

<h2 id="tocS_AppRestrictionsSchemaRestrictionRestrictionValue">AppRestrictionsSchemaRestrictionRestrictionValue</h2>
<!-- backwards compatibility -->
<a id="schemaapprestrictionsschemarestrictionrestrictionvalue"></a>
<a id="schema_AppRestrictionsSchemaRestrictionRestrictionValue"></a>
<a id="tocSapprestrictionsschemarestrictionrestrictionvalue"></a>
<a id="tocsapprestrictionsschemarestrictionrestrictionvalue"></a>

```json
{
  "type": "bool",
  "valueBool": true,
  "valueInteger": 0,
  "valueMultiselect": [
    "string"
  ],
  "valueString": "string"
}
```

A typed value for the restriction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of the value being provided.|
|valueBool|boolean|false|none|The boolean value - this will only be present if type is bool.|
|valueInteger|integer(int32)|false|none|The integer value - this will only be present if type is integer.|
|valueMultiselect|[string]|false|none|The list of string values - this will only be present if type is multiselect.|
|valueString|string|false|none|The string value - this will be present for types string, choice and hidden.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bool|
|type|string|
|type|integer|
|type|choice|
|type|multiselect|
|type|hidden|
|type|bundle|
|type|bundleArray|

<h2 id="tocS_AppState">AppState</h2>
<!-- backwards compatibility -->
<a id="schemaappstate"></a>
<a id="schema_AppState"></a>
<a id="tocSappstate"></a>
<a id="tocsappstate"></a>

```json
{
  "keyedAppState": [
    {
      "data": "string",
      "key": "string",
      "message": "string",
      "severity": "severityUnknown",
      "stateTimestampMillis": "string"
    }
  ],
  "packageName": "string"
}
```

List of states set by the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyedAppState|[[KeyedAppState](#schemakeyedappstate)]|false|none|List of keyed app states. This field will always be present.|
|packageName|string|false|none|The package name of the app. This field will always be present.|

<h2 id="tocS_AppUpdateEvent">AppUpdateEvent</h2>
<!-- backwards compatibility -->
<a id="schemaappupdateevent"></a>
<a id="schema_AppUpdateEvent"></a>
<a id="tocSappupdateevent"></a>
<a id="tocsappupdateevent"></a>

```json
{
  "productId": "string"
}
```

An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present.|

<h2 id="tocS_AppVersion">AppVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappversion"></a>
<a id="schema_AppVersion"></a>
<a id="tocSappversion"></a>
<a id="tocsappversion"></a>

```json
{
  "isProduction": true,
  "track": "appTrackUnspecified",
  "trackId": [
    "string"
  ],
  "versionCode": 0,
  "versionString": "string"
}
```

This represents a single version of the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isProduction|boolean|false|none|True if this version is a production APK.|
|track|string|false|none|Deprecated, use trackId instead.|
|trackId|[string]|false|none|Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead).|
|versionCode|integer(int32)|false|none|Unique increasing identifier for the app version.|
|versionString|string|false|none|The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").|

#### Enumerated Values

|Property|Value|
|---|---|
|track|appTrackUnspecified|
|track|production|
|track|beta|
|track|alpha|

<h2 id="tocS_ApprovalUrlInfo">ApprovalUrlInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalurlinfo"></a>
<a id="schema_ApprovalUrlInfo"></a>
<a id="tocSapprovalurlinfo"></a>
<a id="tocsapprovalurlinfo"></a>

```json
{
  "approvalUrl": "string"
}
```

Information on an approval URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalUrl|string|false|none|A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.|

<h2 id="tocS_AuthenticationToken">AuthenticationToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtoken"></a>
<a id="schema_AuthenticationToken"></a>
<a id="tocSauthenticationtoken"></a>
<a id="tocsauthenticationtoken"></a>

```json
{
  "token": "string"
}
```

An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.|

<h2 id="tocS_AutoInstallConstraint">AutoInstallConstraint</h2>
<!-- backwards compatibility -->
<a id="schemaautoinstallconstraint"></a>
<a id="schema_AutoInstallConstraint"></a>
<a id="tocSautoinstallconstraint"></a>
<a id="tocsautoinstallconstraint"></a>

```json
{
  "chargingStateConstraint": "chargingStateConstraintUnspecified",
  "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
  "networkTypeConstraint": "networkTypeConstraintUnspecified"
}
```

The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargingStateConstraint|string|false|none|Charging state constraint.|
|deviceIdleStateConstraint|string|false|none|Device idle state constraint.|
|networkTypeConstraint|string|false|none|Network type constraint.|

#### Enumerated Values

|Property|Value|
|---|---|
|chargingStateConstraint|chargingStateConstraintUnspecified|
|chargingStateConstraint|chargingNotRequired|
|chargingStateConstraint|chargingRequired|
|deviceIdleStateConstraint|deviceIdleStateConstraintUnspecified|
|deviceIdleStateConstraint|deviceIdleNotRequired|
|deviceIdleStateConstraint|deviceIdleRequired|
|networkTypeConstraint|networkTypeConstraintUnspecified|
|networkTypeConstraint|anyNetwork|
|networkTypeConstraint|unmeteredNetwork|

<h2 id="tocS_AutoInstallPolicy">AutoInstallPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaautoinstallpolicy"></a>
<a id="schema_AutoInstallPolicy"></a>
<a id="tocSautoinstallpolicy"></a>
<a id="tocsautoinstallpolicy"></a>

```json
{
  "autoInstallConstraint": [
    {
      "chargingStateConstraint": "chargingStateConstraintUnspecified",
      "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
      "networkTypeConstraint": "networkTypeConstraintUnspecified"
    }
  ],
  "autoInstallMode": "autoInstallModeUnspecified",
  "autoInstallPriority": 0,
  "minimumVersionCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoInstallConstraint|[[AutoInstallConstraint](#schemaautoinstallconstraint)]|false|none|The constraints for auto-installing the app. You can specify a maximum of one constraint.|
|autoInstallMode|string|false|none|The auto-install mode. If unset defaults to "doNotAutoInstall".|
|autoInstallPriority|integer(int32)|false|none|The priority of the install, as an unsigned integer. A lower number means higher priority.|
|minimumVersionCode|integer(int32)|false|none|The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoInstallMode|autoInstallModeUnspecified|
|autoInstallMode|doNotAutoInstall|
|autoInstallMode|autoInstallOnce|
|autoInstallMode|forceAutoInstall|

<h2 id="tocS_ConfigurationVariables">ConfigurationVariables</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationvariables"></a>
<a id="schema_ConfigurationVariables"></a>
<a id="tocSconfigurationvariables"></a>
<a id="tocsconfigurationvariables"></a>

```json
{
  "mcmId": "string",
  "variableSet": [
    {
      "placeholder": "string",
      "userValue": "string"
    }
  ]
}
```

A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mcmId|string|false|none|The ID of the managed configurations settings.|
|variableSet|[[VariableSet](#schemavariableset)]|false|none|The variable set that is attributed to the user.|

<h2 id="tocS_CreateEnrollmentTokenResponse">CreateEnrollmentTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateenrollmenttokenresponse"></a>
<a id="schema_CreateEnrollmentTokenResponse"></a>
<a id="tocScreateenrollmenttokenresponse"></a>
<a id="tocscreateenrollmenttokenresponse"></a>

```json
{
  "enrollmentToken": "string"
}
```

Response message for create enrollment token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enrollmentToken|string|false|none|Enrollment token.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "androidId": "string",
  "device": "string",
  "latestBuildFingerprint": "string",
  "maker": "string",
  "managementType": "managedDevice",
  "model": "string",
  "policy": {
    "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
    "deviceReportPolicy": "deviceReportPolicyUnspecified",
    "maintenanceWindow": {
      "durationMs": "string",
      "startTimeAfterMidnightMs": "string"
    },
    "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
    "productPolicy": [
      {
        "autoInstallPolicy": {
          "autoInstallConstraint": [
            {
              "chargingStateConstraint": "chargingStateConstraintUnspecified",
              "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
              "networkTypeConstraint": "networkTypeConstraintUnspecified"
            }
          ],
          "autoInstallMode": "autoInstallModeUnspecified",
          "autoInstallPriority": 0,
          "minimumVersionCode": 0
        },
        "autoUpdateMode": "autoUpdateModeUnspecified",
        "enterpriseAuthenticationAppLinkConfigs": [
          {
            "uri": "string"
          }
        ],
        "managedConfiguration": {
          "configurationVariables": {
            "mcmId": "string",
            "variableSet": [
              {
                "placeholder": "string",
                "userValue": "string"
              }
            ]
          },
          "kind": "string",
          "managedProperty": [
            {
              "key": "string",
              "valueBool": true,
              "valueBundle": {},
              "valueBundleArray": [
                {}
              ],
              "valueInteger": 0,
              "valueString": "string",
              "valueStringArray": [
                "string"
              ]
            }
          ],
          "productId": "string"
        },
        "productId": "string",
        "trackIds": [
          "string"
        ],
        "tracks": [
          "appTrackUnspecified"
        ]
      }
    ]
  },
  "product": "string",
  "report": {
    "appState": [
      {
        "keyedAppState": [
          {
            "data": "string",
            "key": "string",
            "message": "string",
            "severity": "severityUnknown",
            "stateTimestampMillis": "string"
          }
        ],
        "packageName": "string"
      }
    ],
    "lastUpdatedTimestampMillis": "string"
  },
  "retailBrand": "string",
  "sdkVersion": 0
}
```

A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidId|string|false|none|The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".|
|device|string|false|none|The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named "device" per logs/wireless/android/android_checkin.proto)|
|latestBuildFingerprint|string|false|none|The build fingerprint of the device if known.|
|maker|string|false|none|The manufacturer of the device. This comes from android.os.Build.MANUFACTURER.|
|managementType|string|false|none|Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC. |
|model|string|false|none|The model name of the device. This comes from android.os.Build.MODEL.|
|policy|[Policy](#schemapolicy)|false|none|The policy enforced on the device.|
|product|string|false|none|The product name of the device. This comes from android.os.Build.PRODUCT.|
|report|[DeviceReport](#schemadevicereport)|false|none|The device report updated with the latest app states.|
|retailBrand|string|false|none|Retail brand for the device, if set. See https://developer.android.com/reference/android/os/Build.html#BRAND|
|sdkVersion|integer(int32)|false|none|API compatibility version.|

#### Enumerated Values

|Property|Value|
|---|---|
|managementType|managedDevice|
|managementType|managedProfile|
|managementType|containerApp|
|managementType|unmanagedProfile|

<h2 id="tocS_DeviceReport">DeviceReport</h2>
<!-- backwards compatibility -->
<a id="schemadevicereport"></a>
<a id="schema_DeviceReport"></a>
<a id="tocSdevicereport"></a>
<a id="tocsdevicereport"></a>

```json
{
  "appState": [
    {
      "keyedAppState": [
        {
          "data": "string",
          "key": "string",
          "message": "string",
          "severity": "severityUnknown",
          "stateTimestampMillis": "string"
        }
      ],
      "packageName": "string"
    }
  ],
  "lastUpdatedTimestampMillis": "string"
}
```

Device report updated with the latest app states for managed apps on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appState|[[AppState](#schemaappstate)]|false|none|List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present.|
|lastUpdatedTimestampMillis|string(int64)|false|none|The timestamp of the last report update in milliseconds since epoch. This field will always be present.|

<h2 id="tocS_DeviceReportUpdateEvent">DeviceReportUpdateEvent</h2>
<!-- backwards compatibility -->
<a id="schemadevicereportupdateevent"></a>
<a id="schema_DeviceReportUpdateEvent"></a>
<a id="tocSdevicereportupdateevent"></a>
<a id="tocsdevicereportupdateevent"></a>

```json
{
  "deviceId": "string",
  "report": {
    "appState": [
      {
        "keyedAppState": [
          {
            "data": "string",
            "key": "string",
            "message": "string",
            "severity": "severityUnknown",
            "stateTimestampMillis": "string"
          }
        ],
        "packageName": "string"
      }
    ],
    "lastUpdatedTimestampMillis": "string"
  },
  "userId": "string"
}
```

An event generated when an updated device report is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The Android ID of the device. This field will always be present.|
|report|[DeviceReport](#schemadevicereport)|false|none|The device report updated with the latest app states. This field will always be present.|
|userId|string|false|none|The ID of the user. This field will always be present.|

<h2 id="tocS_DeviceState">DeviceState</h2>
<!-- backwards compatibility -->
<a id="schemadevicestate"></a>
<a id="schema_DeviceState"></a>
<a id="tocSdevicestate"></a>
<a id="tocsdevicestate"></a>

```json
{
  "accountState": "enabled"
}
```

The state of a user's device, as accessed by the getState and setState methods on device resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountState|string|false|none|The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountState|enabled|
|accountState|disabled|

<h2 id="tocS_DevicesListResponse">DevicesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeviceslistresponse"></a>
<a id="schema_DevicesListResponse"></a>
<a id="tocSdeviceslistresponse"></a>
<a id="tocsdeviceslistresponse"></a>

```json
{
  "device": [
    {
      "androidId": "string",
      "device": "string",
      "latestBuildFingerprint": "string",
      "maker": "string",
      "managementType": "managedDevice",
      "model": "string",
      "policy": {
        "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
        "deviceReportPolicy": "deviceReportPolicyUnspecified",
        "maintenanceWindow": {
          "durationMs": "string",
          "startTimeAfterMidnightMs": "string"
        },
        "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
        "productPolicy": [
          {
            "autoInstallPolicy": {
              "autoInstallConstraint": [
                {
                  "chargingStateConstraint": "chargingStateConstraintUnspecified",
                  "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
                  "networkTypeConstraint": "networkTypeConstraintUnspecified"
                }
              ],
              "autoInstallMode": "autoInstallModeUnspecified",
              "autoInstallPriority": 0,
              "minimumVersionCode": 0
            },
            "autoUpdateMode": "autoUpdateModeUnspecified",
            "enterpriseAuthenticationAppLinkConfigs": [
              {
                "uri": "string"
              }
            ],
            "managedConfiguration": {
              "configurationVariables": {
                "mcmId": "string",
                "variableSet": [
                  {
                    "placeholder": "string",
                    "userValue": "string"
                  }
                ]
              },
              "kind": "string",
              "managedProperty": [
                {
                  "key": "string",
                  "valueBool": true,
                  "valueBundle": {},
                  "valueBundleArray": [
                    {}
                  ],
                  "valueInteger": 0,
                  "valueString": "string",
                  "valueStringArray": [
                    "string"
                  ]
                }
              ],
              "productId": "string"
            },
            "productId": "string",
            "trackIds": [
              "string"
            ],
            "tracks": [
              "appTrackUnspecified"
            ]
          }
        ]
      },
      "product": "string",
      "report": {
        "appState": [
          {
            "keyedAppState": [
              {
                "data": "string",
                "key": "string",
                "message": "string",
                "severity": "severityUnknown",
                "stateTimestampMillis": "string"
              }
            ],
            "packageName": "string"
          }
        ],
        "lastUpdatedTimestampMillis": "string"
      },
      "retailBrand": "string",
      "sdkVersion": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[[Device](#schemadevice)]|false|none|A managed device.|

<h2 id="tocS_Enterprise">Enterprise</h2>
<!-- backwards compatibility -->
<a id="schemaenterprise"></a>
<a id="schema_Enterprise"></a>
<a id="tocSenterprise"></a>
<a id="tocsenterprise"></a>

```json
{
  "administrator": [
    {
      "email": "string"
    }
  ],
  "googleAuthenticationSettings": {
    "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
    "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
  },
  "id": "string",
  "name": "string",
  "primaryDomain": "string"
}
```

An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|administrator|[[Administrator](#schemaadministrator)]|false|none|Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.|
|googleAuthenticationSettings|[GoogleAuthenticationSettings](#schemagoogleauthenticationsettings)|false|none|Output only. Settings for Google-provided user authentication.|
|id|string|false|none|The unique ID for the enterprise.|
|name|string|false|none|The name of the enterprise, for example, "Example, Inc".|
|primaryDomain|string|false|none|The enterprise's primary domain, such as "example.com".|

<h2 id="tocS_EnterpriseAccount">EnterpriseAccount</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseaccount"></a>
<a id="schema_EnterpriseAccount"></a>
<a id="tocSenterpriseaccount"></a>
<a id="tocsenterpriseaccount"></a>

```json
{
  "accountEmail": "string"
}
```

A service account that can be used to authenticate as the enterprise to API calls that require such authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountEmail|string|false|none|The email address of the service account.|

<h2 id="tocS_EnterpriseAuthenticationAppLinkConfig">EnterpriseAuthenticationAppLinkConfig</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseauthenticationapplinkconfig"></a>
<a id="schema_EnterpriseAuthenticationAppLinkConfig"></a>
<a id="tocSenterpriseauthenticationapplinkconfig"></a>
<a id="tocsenterpriseauthenticationapplinkconfig"></a>

```json
{
  "uri": "string"
}
```

An authentication URL configuration for the authenticator app of an identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|An authentication url.|

<h2 id="tocS_EnterprisesListResponse">EnterprisesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseslistresponse"></a>
<a id="schema_EnterprisesListResponse"></a>
<a id="tocSenterpriseslistresponse"></a>
<a id="tocsenterpriseslistresponse"></a>

```json
{
  "enterprise": [
    {
      "administrator": [
        {
          "email": "string"
        }
      ],
      "googleAuthenticationSettings": {
        "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
        "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
      },
      "id": "string",
      "name": "string",
      "primaryDomain": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprise|[[Enterprise](#schemaenterprise)]|false|none|An enterprise.|

<h2 id="tocS_EnterprisesSendTestPushNotificationResponse">EnterprisesSendTestPushNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenterprisessendtestpushnotificationresponse"></a>
<a id="schema_EnterprisesSendTestPushNotificationResponse"></a>
<a id="tocSenterprisessendtestpushnotificationresponse"></a>
<a id="tocsenterprisessendtestpushnotificationresponse"></a>

```json
{
  "messageId": "string",
  "topicName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|The message ID of the test push notification that was sent.|
|topicName|string|false|none|The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.|

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "productId": "string",
  "reason": "free"
}
```

The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device. The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created. If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted. If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling Installs.delete() before deleting the entitlement. Entitlements for apps that a user pays for on an unmanaged profile have "userPurchase" as the entitlement reason. These entitlements cannot be removed via the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|none|The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".|
|reason|string|false|none|The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|free|
|reason|groupLicense|
|reason|userPurchase|

<h2 id="tocS_EntitlementsListResponse">EntitlementsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementslistresponse"></a>
<a id="schema_EntitlementsListResponse"></a>
<a id="tocSentitlementslistresponse"></a>
<a id="tocsentitlementslistresponse"></a>

```json
{
  "entitlement": [
    {
      "productId": "string",
      "reason": "free"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement|[[Entitlement](#schemaentitlement)]|false|none|An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.|

<h2 id="tocS_GoogleAuthenticationSettings">GoogleAuthenticationSettings</h2>
<!-- backwards compatibility -->
<a id="schemagoogleauthenticationsettings"></a>
<a id="schema_GoogleAuthenticationSettings"></a>
<a id="tocSgoogleauthenticationsettings"></a>
<a id="tocsgoogleauthenticationsettings"></a>

```json
{
  "dedicatedDevicesAllowed": "dedicatedDevicesAllowedUnspecified",
  "googleAuthenticationRequired": "googleAuthenticationRequiredUnspecified"
}
```

Contains settings for Google-provided user authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dedicatedDevicesAllowed|string|false|none|Whether dedicated devices are allowed.|
|googleAuthenticationRequired|string|false|none|Whether Google authentication is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|dedicatedDevicesAllowed|dedicatedDevicesAllowedUnspecified|
|dedicatedDevicesAllowed|disallowed|
|dedicatedDevicesAllowed|allowed|
|googleAuthenticationRequired|googleAuthenticationRequiredUnspecified|
|googleAuthenticationRequired|notRequired|
|googleAuthenticationRequired|required|

<h2 id="tocS_GroupLicense">GroupLicense</h2>
<!-- backwards compatibility -->
<a id="schemagrouplicense"></a>
<a id="schema_GroupLicense"></a>
<a id="tocSgrouplicense"></a>
<a id="tocsgrouplicense"></a>

```json
{
  "acquisitionKind": "free",
  "approval": "approved",
  "numProvisioned": 0,
  "numPurchased": 0,
  "permissions": "currentApproved",
  "productId": "string"
}
```

Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquisitionKind|string|false|none|How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products).|
|approval|string|false|none|Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created.|
|numProvisioned|integer(int32)|false|none|The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.|
|numPurchased|integer(int32)|false|none|The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free").|
|permissions|string|false|none|The permission approval status of the product. This field is only set if the product is approved. Possible states are: - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review. |
|productId|string|false|none|The ID of the product that the license is for. For example, "app:com.google.android.gm".|

#### Enumerated Values

|Property|Value|
|---|---|
|acquisitionKind|free|
|acquisitionKind|bulkPurchase|
|approval|approved|
|approval|unapproved|
|permissions|currentApproved|
|permissions|needsReapproval|
|permissions|allCurrentAndFutureApproved|

<h2 id="tocS_GroupLicenseUsersListResponse">GroupLicenseUsersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrouplicenseuserslistresponse"></a>
<a id="schema_GroupLicenseUsersListResponse"></a>
<a id="tocSgrouplicenseuserslistresponse"></a>
<a id="tocsgrouplicenseuserslistresponse"></a>

```json
{
  "user": [
    {
      "accountIdentifier": "string",
      "accountType": "deviceAccount",
      "displayName": "string",
      "id": "string",
      "managementType": "googleManaged",
      "primaryEmail": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[[User](#schemauser)]|false|none|A user of an enterprise.|

<h2 id="tocS_GroupLicensesListResponse">GroupLicensesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrouplicenseslistresponse"></a>
<a id="schema_GroupLicensesListResponse"></a>
<a id="tocSgrouplicenseslistresponse"></a>
<a id="tocsgrouplicenseslistresponse"></a>

```json
{
  "groupLicense": [
    {
      "acquisitionKind": "free",
      "approval": "approved",
      "numProvisioned": 0,
      "numPurchased": 0,
      "permissions": "currentApproved",
      "productId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupLicense|[[GroupLicense](#schemagrouplicense)]|false|none|A group license for a product approved for use in the enterprise.|

<h2 id="tocS_Install">Install</h2>
<!-- backwards compatibility -->
<a id="schemainstall"></a>
<a id="schema_Install"></a>
<a id="tocSinstall"></a>
<a id="tocsinstall"></a>

```json
{
  "installState": "installed",
  "productId": "string",
  "versionCode": 0
}
```

The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending). The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails. The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version. Note that it is not possible to force the installation of a specific version of an app: the version code is read-only. If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created. The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installState|string|false|none|Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.|
|productId|string|false|none|The ID of the product that the install is for. For example, "app:com.google.android.gm".|
|versionCode|integer(int32)|false|none|The version of the installed product. Guaranteed to be set only if the install state is "installed".|

#### Enumerated Values

|Property|Value|
|---|---|
|installState|installed|
|installState|installPending|

<h2 id="tocS_InstallFailureEvent">InstallFailureEvent</h2>
<!-- backwards compatibility -->
<a id="schemainstallfailureevent"></a>
<a id="schema_InstallFailureEvent"></a>
<a id="tocSinstallfailureevent"></a>
<a id="tocsinstallfailureevent"></a>

```json
{
  "deviceId": "string",
  "failureDetails": "string",
  "failureReason": "unknown",
  "productId": "string",
  "userId": "string"
}
```

An event generated when an app installation failed on a device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The Android ID of the device. This field will always be present.|
|failureDetails|string|false|none|Additional details on the failure if applicable.|
|failureReason|string|false|none|The reason for the installation failure. This field will always be present.|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.|
|userId|string|false|none|The ID of the user. This field will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureReason|unknown|
|failureReason|timeout|

<h2 id="tocS_InstallsListResponse">InstallsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemainstallslistresponse"></a>
<a id="schema_InstallsListResponse"></a>
<a id="tocSinstallslistresponse"></a>
<a id="tocsinstallslistresponse"></a>

```json
{
  "install": [
    {
      "installState": "installed",
      "productId": "string",
      "versionCode": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|install|[[Install](#schemainstall)]|false|none|An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.|

<h2 id="tocS_KeyedAppState">KeyedAppState</h2>
<!-- backwards compatibility -->
<a id="schemakeyedappstate"></a>
<a id="schema_KeyedAppState"></a>
<a id="tocSkeyedappstate"></a>
<a id="tocskeyedappstate"></a>

```json
{
  "data": "string",
  "key": "string",
  "message": "string",
  "severity": "severityUnknown",
  "stateTimestampMillis": "string"
}
```

Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it.|
|key|string|false|none|Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present.|
|message|string|false|none|Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it.|
|severity|string|false|none|Severity of the app state. This field will always be present.|
|stateTimestampMillis|string(int64)|false|none|Timestamp of when the app set the state in milliseconds since epoch. This field will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|severityUnknown|
|severity|severityInfo|
|severity|severityError|

<h2 id="tocS_LocalizedText">LocalizedText</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedtext"></a>
<a id="schema_LocalizedText"></a>
<a id="tocSlocalizedtext"></a>
<a id="tocslocalizedtext"></a>

```json
{
  "locale": "string",
  "text": "string"
}
```

A localized string with its locale.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|The BCP47 tag for a locale. (e.g. "en-US", "de").|
|text|string|false|none|The text localized in the associated locale.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "durationMs": "string",
  "startTimeAfterMidnightMs": "string"
}
```

Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationMs|string(int64)|false|none|Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive).|
|startTimeAfterMidnightMs|string(int64)|false|none|Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight.|

<h2 id="tocS_ManagedConfiguration">ManagedConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfiguration"></a>
<a id="schema_ManagedConfiguration"></a>
<a id="tocSmanagedconfiguration"></a>
<a id="tocsmanagedconfiguration"></a>

```json
{
  "configurationVariables": {
    "mcmId": "string",
    "variableSet": [
      {
        "placeholder": "string",
        "userValue": "string"
      }
    ]
  },
  "kind": "string",
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ],
  "productId": "string"
}
```

A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationVariables|[ConfigurationVariables](#schemaconfigurationvariables)|false|none|Contains the ID of the managed configuration profile and the set of configuration variables (if any) defined for the user.|
|kind|string|false|none|Deprecated.|
|managedProperty|[[ManagedProperty](#schemamanagedproperty)]|false|none|The set of managed properties for this configuration.|
|productId|string|false|none|The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".|

<h2 id="tocS_ManagedConfigurationsForDeviceListResponse">ManagedConfigurationsForDeviceListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfigurationsfordevicelistresponse"></a>
<a id="schema_ManagedConfigurationsForDeviceListResponse"></a>
<a id="tocSmanagedconfigurationsfordevicelistresponse"></a>
<a id="tocsmanagedconfigurationsfordevicelistresponse"></a>

```json
{
  "managedConfigurationForDevice": [
    {
      "configurationVariables": {
        "mcmId": "string",
        "variableSet": [
          {
            "placeholder": "string",
            "userValue": "string"
          }
        ]
      },
      "kind": "string",
      "managedProperty": [
        {
          "key": "string",
          "valueBool": true,
          "valueBundle": {},
          "valueBundleArray": [
            {}
          ],
          "valueInteger": 0,
          "valueString": "string",
          "valueStringArray": [
            "string"
          ]
        }
      ],
      "productId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedConfigurationForDevice|[[ManagedConfiguration](#schemamanagedconfiguration)]|false|none|A managed configuration for an app on a specific device.|

<h2 id="tocS_ManagedConfigurationsForUserListResponse">ManagedConfigurationsForUserListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfigurationsforuserlistresponse"></a>
<a id="schema_ManagedConfigurationsForUserListResponse"></a>
<a id="tocSmanagedconfigurationsforuserlistresponse"></a>
<a id="tocsmanagedconfigurationsforuserlistresponse"></a>

```json
{
  "managedConfigurationForUser": [
    {
      "configurationVariables": {
        "mcmId": "string",
        "variableSet": [
          {
            "placeholder": "string",
            "userValue": "string"
          }
        ]
      },
      "kind": "string",
      "managedProperty": [
        {
          "key": "string",
          "valueBool": true,
          "valueBundle": {},
          "valueBundleArray": [
            {}
          ],
          "valueInteger": 0,
          "valueString": "string",
          "valueStringArray": [
            "string"
          ]
        }
      ],
      "productId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedConfigurationForUser|[[ManagedConfiguration](#schemamanagedconfiguration)]|false|none|A managed configuration for an app for a specific user.|

<h2 id="tocS_ManagedConfigurationsSettings">ManagedConfigurationsSettings</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfigurationssettings"></a>
<a id="schema_ManagedConfigurationsSettings"></a>
<a id="tocSmanagedconfigurationssettings"></a>
<a id="tocsmanagedconfigurationssettings"></a>

```json
{
  "lastUpdatedTimestampMillis": "string",
  "mcmId": "string",
  "name": "string"
}
```

A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdatedTimestampMillis|string(int64)|false|none|The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z.|
|mcmId|string|false|none|The ID of the managed configurations settings.|
|name|string|false|none|The name of the managed configurations settings.|

<h2 id="tocS_ManagedConfigurationsSettingsListResponse">ManagedConfigurationsSettingsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfigurationssettingslistresponse"></a>
<a id="schema_ManagedConfigurationsSettingsListResponse"></a>
<a id="tocSmanagedconfigurationssettingslistresponse"></a>
<a id="tocsmanagedconfigurationssettingslistresponse"></a>

```json
{
  "managedConfigurationsSettings": [
    {
      "lastUpdatedTimestampMillis": "string",
      "mcmId": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedConfigurationsSettings|[[ManagedConfigurationsSettings](#schemamanagedconfigurationssettings)]|false|none|A managed configurations settings for an app that may be assigned to a group of users in an enterprise.|

<h2 id="tocS_ManagedProperty">ManagedProperty</h2>
<!-- backwards compatibility -->
<a id="schemamanagedproperty"></a>
<a id="schema_ManagedProperty"></a>
<a id="tocSmanagedproperty"></a>
<a id="tocsmanagedproperty"></a>

```json
{
  "key": "string",
  "valueBool": true,
  "valueBundle": {
    "managedProperty": [
      {}
    ]
  },
  "valueBundleArray": [
    {
      "managedProperty": [
        {}
      ]
    }
  ],
  "valueInteger": 0,
  "valueString": "string",
  "valueStringArray": [
    "string"
  ]
}
```

A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The unique key that identifies the property.|
|valueBool|boolean|false|none|The boolean value - this will only be present if type of the property is bool.|
|valueBundle|[ManagedPropertyBundle](#schemamanagedpropertybundle)|false|none|The bundle of managed properties - this will only be present if type of the property is bundle.|
|valueBundleArray|[[ManagedPropertyBundle](#schemamanagedpropertybundle)]|false|none|The list of bundles of properties - this will only be present if type of the property is bundle_array.|
|valueInteger|integer(int32)|false|none|The integer value - this will only be present if type of the property is integer.|
|valueString|string|false|none|The string value - this will only be present if type of the property is string, choice or hidden.|
|valueStringArray|[string]|false|none|The list of string values - this will only be present if type of the property is multiselect.|

<h2 id="tocS_ManagedPropertyBundle">ManagedPropertyBundle</h2>
<!-- backwards compatibility -->
<a id="schemamanagedpropertybundle"></a>
<a id="schema_ManagedPropertyBundle"></a>
<a id="tocSmanagedpropertybundle"></a>
<a id="tocsmanagedpropertybundle"></a>

```json
{
  "managedProperty": [
    {
      "key": "string",
      "valueBool": true,
      "valueBundle": {},
      "valueBundleArray": [
        {}
      ],
      "valueInteger": 0,
      "valueString": "string",
      "valueStringArray": [
        "string"
      ]
    }
  ]
}
```

A bundle of managed properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managedProperty|[[ManagedProperty](#schemamanagedproperty)]|false|none|The list of managed properties.|

<h2 id="tocS_NewDeviceEvent">NewDeviceEvent</h2>
<!-- backwards compatibility -->
<a id="schemanewdeviceevent"></a>
<a id="schema_NewDeviceEvent"></a>
<a id="tocSnewdeviceevent"></a>
<a id="tocsnewdeviceevent"></a>

```json
{
  "deviceId": "string",
  "dpcPackageName": "string",
  "managementType": "managedDevice",
  "userId": "string"
}
```

An event generated when a new device is ready to be managed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The Android ID of the device. This field will always be present.|
|dpcPackageName|string|false|none|Policy app on the device.|
|managementType|string|false|none|Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner. |
|userId|string|false|none|The ID of the user. This field will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|managementType|managedDevice|
|managementType|managedProfile|

<h2 id="tocS_NewPermissionsEvent">NewPermissionsEvent</h2>
<!-- backwards compatibility -->
<a id="schemanewpermissionsevent"></a>
<a id="schema_NewPermissionsEvent"></a>
<a id="tocSnewpermissionsevent"></a>
<a id="tocsnewpermissionsevent"></a>

```json
{
  "approvedPermissions": [
    "string"
  ],
  "productId": "string",
  "requestedPermissions": [
    "string"
  ]
}
```

An event generated when new permissions are added to an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvedPermissions|[string]|false|none|The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions.|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present.|
|requestedPermissions|[string]|false|none|The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "appRestrictionsSchemaChangeEvent": {
    "productId": "string"
  },
  "appUpdateEvent": {
    "productId": "string"
  },
  "deviceReportUpdateEvent": {
    "deviceId": "string",
    "report": {
      "appState": [
        {
          "keyedAppState": [
            {
              "data": "string",
              "key": "string",
              "message": "string",
              "severity": "severityUnknown",
              "stateTimestampMillis": "string"
            }
          ],
          "packageName": "string"
        }
      ],
      "lastUpdatedTimestampMillis": "string"
    },
    "userId": "string"
  },
  "enterpriseId": "string",
  "installFailureEvent": {
    "deviceId": "string",
    "failureDetails": "string",
    "failureReason": "unknown",
    "productId": "string",
    "userId": "string"
  },
  "newDeviceEvent": {
    "deviceId": "string",
    "dpcPackageName": "string",
    "managementType": "managedDevice",
    "userId": "string"
  },
  "newPermissionsEvent": {
    "approvedPermissions": [
      "string"
    ],
    "productId": "string",
    "requestedPermissions": [
      "string"
    ]
  },
  "notificationType": "unknown",
  "productApprovalEvent": {
    "approved": "unknown",
    "productId": "string"
  },
  "productAvailabilityChangeEvent": {
    "availabilityStatus": "unknown",
    "productId": "string"
  },
  "timestampMillis": "string"
}
```

A notification of one event relating to an enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appRestrictionsSchemaChangeEvent|[AppRestrictionsSchemaChangeEvent](#schemaapprestrictionsschemachangeevent)|false|none|Notifications about new app restrictions schema changes.|
|appUpdateEvent|[AppUpdateEvent](#schemaappupdateevent)|false|none|Notifications about app updates.|
|deviceReportUpdateEvent|[DeviceReportUpdateEvent](#schemadevicereportupdateevent)|false|none|Notifications about device report updates.|
|enterpriseId|string|false|none|The ID of the enterprise for which the notification is sent. This will always be present.|
|installFailureEvent|[InstallFailureEvent](#schemainstallfailureevent)|false|none|Notifications about an app installation failure.|
|newDeviceEvent|[NewDeviceEvent](#schemanewdeviceevent)|false|none|Notifications about new devices.|
|newPermissionsEvent|[NewPermissionsEvent](#schemanewpermissionsevent)|false|none|Notifications about new app permissions.|
|notificationType|string|false|none|Type of the notification.|
|productApprovalEvent|[ProductApprovalEvent](#schemaproductapprovalevent)|false|none|Notifications about changes to a product's approval status.|
|productAvailabilityChangeEvent|[ProductAvailabilityChangeEvent](#schemaproductavailabilitychangeevent)|false|none|Notifications about product availability changes.|
|timestampMillis|string(int64)|false|none|The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationType|unknown|
|notificationType|testNotification|
|notificationType|productApproval|
|notificationType|installFailure|
|notificationType|appUpdate|
|notificationType|newPermissions|
|notificationType|appRestricionsSchemaChange|
|notificationType|productAvailabilityChange|
|notificationType|newDevice|
|notificationType|deviceReportUpdate|

<h2 id="tocS_NotificationSet">NotificationSet</h2>
<!-- backwards compatibility -->
<a id="schemanotificationset"></a>
<a id="schema_NotificationSet"></a>
<a id="tocSnotificationset"></a>
<a id="tocsnotificationset"></a>

```json
{
  "notification": [
    {
      "appRestrictionsSchemaChangeEvent": {
        "productId": "string"
      },
      "appUpdateEvent": {
        "productId": "string"
      },
      "deviceReportUpdateEvent": {
        "deviceId": "string",
        "report": {
          "appState": [
            {
              "keyedAppState": [
                {
                  "data": "string",
                  "key": "string",
                  "message": "string",
                  "severity": "severityUnknown",
                  "stateTimestampMillis": "string"
                }
              ],
              "packageName": "string"
            }
          ],
          "lastUpdatedTimestampMillis": "string"
        },
        "userId": "string"
      },
      "enterpriseId": "string",
      "installFailureEvent": {
        "deviceId": "string",
        "failureDetails": "string",
        "failureReason": "unknown",
        "productId": "string",
        "userId": "string"
      },
      "newDeviceEvent": {
        "deviceId": "string",
        "dpcPackageName": "string",
        "managementType": "managedDevice",
        "userId": "string"
      },
      "newPermissionsEvent": {
        "approvedPermissions": [
          "string"
        ],
        "productId": "string",
        "requestedPermissions": [
          "string"
        ]
      },
      "notificationType": "unknown",
      "productApprovalEvent": {
        "approved": "unknown",
        "productId": "string"
      },
      "productAvailabilityChangeEvent": {
        "availabilityStatus": "unknown",
        "productId": "string"
      },
      "timestampMillis": "string"
    }
  ],
  "notificationSetId": "string"
}
```

A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification|[[Notification](#schemanotification)]|false|none|The notifications received, or empty if no notifications are present.|
|notificationSetId|string|false|none|The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.|

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

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "description": "string",
  "name": "string",
  "permissionId": "string"
}
```

A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created. The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A longer description of the Permissions resource, giving more details of what it affects.|
|name|string|false|none|The name of the permission.|
|permissionId|string|false|none|An opaque string uniquely identifying the permission.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "autoUpdatePolicy": "autoUpdatePolicyUnspecified",
  "deviceReportPolicy": "deviceReportPolicyUnspecified",
  "maintenanceWindow": {
    "durationMs": "string",
    "startTimeAfterMidnightMs": "string"
  },
  "productAvailabilityPolicy": "productAvailabilityPolicyUnspecified",
  "productPolicy": [
    {
      "autoInstallPolicy": {
        "autoInstallConstraint": [
          {
            "chargingStateConstraint": "chargingStateConstraintUnspecified",
            "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
            "networkTypeConstraint": "networkTypeConstraintUnspecified"
          }
        ],
        "autoInstallMode": "autoInstallModeUnspecified",
        "autoInstallPriority": 0,
        "minimumVersionCode": 0
      },
      "autoUpdateMode": "autoUpdateModeUnspecified",
      "enterpriseAuthenticationAppLinkConfigs": [
        {
          "uri": "string"
        }
      ],
      "managedConfiguration": {
        "configurationVariables": {
          "mcmId": "string",
          "variableSet": [
            {
              "placeholder": "string",
              "userValue": "string"
            }
          ]
        },
        "kind": "string",
        "managedProperty": [
          {
            "key": "string",
            "valueBool": true,
            "valueBundle": {},
            "valueBundleArray": [
              {}
            ],
            "valueInteger": 0,
            "valueString": "string",
            "valueStringArray": [
              "string"
            ]
          }
        ],
        "productId": "string"
      },
      "productId": "string",
      "trackIds": [
        "string"
      ],
      "tracks": [
        "appTrackUnspecified"
      ]
    }
  ]
}
```

The device policy for a given managed device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoUpdatePolicy|string|false|none|Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect. "choiceToTheUser" allows the device's user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.|
|deviceReportPolicy|string|false|none|Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".|
|maintenanceWindow|[MaintenanceWindow](#schemamaintenancewindow)|false|none|The maintenance window defining when apps running in the foreground should be updated.|
|productAvailabilityPolicy|string|false|none|The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.|
|productPolicy|[[ProductPolicy](#schemaproductpolicy)]|false|none|The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoUpdatePolicy|autoUpdatePolicyUnspecified|
|autoUpdatePolicy|choiceToTheUser|
|autoUpdatePolicy|never|
|autoUpdatePolicy|wifiOnly|
|autoUpdatePolicy|always|
|deviceReportPolicy|deviceReportPolicyUnspecified|
|deviceReportPolicy|deviceReportDisabled|
|deviceReportPolicy|deviceReportEnabled|
|productAvailabilityPolicy|productAvailabilityPolicyUnspecified|
|productAvailabilityPolicy|whitelist|
|productAvailabilityPolicy|all|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "appRestrictionsSchema": {
    "kind": "string",
    "restrictions": [
      {
        "defaultValue": {
          "type": "bool",
          "valueBool": true,
          "valueInteger": 0,
          "valueMultiselect": [
            "string"
          ],
          "valueString": "string"
        },
        "description": "string",
        "entry": [
          "string"
        ],
        "entryValue": [
          "string"
        ],
        "key": "string",
        "nestedRestriction": [
          {}
        ],
        "restrictionType": "bool",
        "title": "string"
      }
    ]
  },
  "appTracks": [
    {
      "trackAlias": "string",
      "trackId": "string"
    }
  ],
  "appVersion": [
    {
      "isProduction": true,
      "track": "appTrackUnspecified",
      "trackId": [
        "string"
      ],
      "versionCode": 0,
      "versionString": "string"
    }
  ],
  "authorName": "string",
  "availableCountries": [
    "string"
  ],
  "availableTracks": [
    "appTrackUnspecified"
  ],
  "category": "string",
  "contentRating": "ratingUnknown",
  "description": "string",
  "detailsUrl": "string",
  "distributionChannel": "publicGoogleHosted",
  "features": [
    "featureUnknown"
  ],
  "iconUrl": "string",
  "lastUpdatedTimestampMillis": "string",
  "minAndroidSdkVersion": 0,
  "permissions": [
    {
      "permissionId": "string",
      "state": "required"
    }
  ],
  "productId": "string",
  "productPricing": "unknown",
  "recentChanges": "string",
  "requiresContainerApp": true,
  "screenshotUrls": [
    "string"
  ],
  "signingCertificate": {
    "certificateHashSha1": "string",
    "certificateHashSha256": "string"
  },
  "smallIconUrl": "string",
  "title": "string",
  "workDetailsUrl": "string"
}
```

A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appRestrictionsSchema|[AppRestrictionsSchema](#schemaapprestrictionsschema)|false|none|The app restriction schema|
|appTracks|[[TrackInfo](#schematrackinfo)]|false|none|The tracks visible to the enterprise.|
|appVersion|[[AppVersion](#schemaappversion)]|false|none|App versions currently available for this product.|
|authorName|string|false|none|The name of the author of the product (for example, the app developer).|
|availableCountries|[string]|false|none|The countries which this app is available in.|
|availableTracks|[string]|false|none|Deprecated, use appTracks instead.|
|category|string|false|none|The app category (e.g. RACING, SOCIAL, etc.)|
|contentRating|string|false|none|The content rating for this app.|
|description|string|false|none|The localized promotional description, if available.|
|detailsUrl|string|false|none|A link to the (consumer) Google Play details page for the product.|
|distributionChannel|string|false|none|How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.|
|features|[string]|false|none|Noteworthy features (if any) of this product.|
|iconUrl|string|false|none|A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.|
|lastUpdatedTimestampMillis|string(int64)|false|none|The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch.|
|minAndroidSdkVersion|integer(int32)|false|none|The minimum Android SDK necessary to run the app.|
|permissions|[[ProductPermission](#schemaproductpermission)]|false|none|A list of permissions required by the app.|
|productId|string|false|none|A string of the form *app:<package name>*. For example, app:com.google.android.gm represents the Gmail app.|
|productPricing|string|false|none|Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).|
|recentChanges|string|false|none|A description of the recent changes made to the app.|
|requiresContainerApp|boolean|false|none|Deprecated.|
|screenshotUrls|[string]|false|none|A list of screenshot links representing the app.|
|signingCertificate|[ProductSigningCertificate](#schemaproductsigningcertificate)|false|none|The certificate used to sign this product.|
|smallIconUrl|string|false|none|A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.|
|title|string|false|none|The name of the product.|
|workDetailsUrl|string|false|none|A link to the managed Google Play details page for the product, for use by an Enterprise admin.|

#### Enumerated Values

|Property|Value|
|---|---|
|availableTracks|appTrackUnspecified|
|availableTracks|production|
|availableTracks|beta|
|availableTracks|alpha|
|contentRating|ratingUnknown|
|contentRating|all|
|contentRating|preTeen|
|contentRating|teen|
|contentRating|mature|
|distributionChannel|publicGoogleHosted|
|distributionChannel|privateGoogleHosted|
|distributionChannel|privateSelfHosted|
|features|featureUnknown|
|features|vpnApp|
|productPricing|unknown|
|productPricing|free|
|productPricing|freeWithInAppPurchase|
|productPricing|paid|

<h2 id="tocS_ProductApprovalEvent">ProductApprovalEvent</h2>
<!-- backwards compatibility -->
<a id="schemaproductapprovalevent"></a>
<a id="schema_ProductApprovalEvent"></a>
<a id="tocSproductapprovalevent"></a>
<a id="tocsproductapprovalevent"></a>

```json
{
  "approved": "unknown",
  "productId": "string"
}
```

An event generated when a product's approval status is changed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|string|false|none|Whether the product was approved or unapproved. This field will always be present.|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|approved|unknown|
|approved|approved|
|approved|unapproved|

<h2 id="tocS_ProductAvailabilityChangeEvent">ProductAvailabilityChangeEvent</h2>
<!-- backwards compatibility -->
<a id="schemaproductavailabilitychangeevent"></a>
<a id="schema_ProductAvailabilityChangeEvent"></a>
<a id="tocSproductavailabilitychangeevent"></a>
<a id="tocsproductavailabilitychangeevent"></a>

```json
{
  "availabilityStatus": "unknown",
  "productId": "string"
}
```

An event generated whenever a product's availability changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilityStatus|string|false|none|The new state of the product. This field will always be present.|
|productId|string|false|none|The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.|

#### Enumerated Values

|Property|Value|
|---|---|
|availabilityStatus|unknown|
|availabilityStatus|available|
|availabilityStatus|removed|
|availabilityStatus|unpublished|

<h2 id="tocS_ProductPermission">ProductPermission</h2>
<!-- backwards compatibility -->
<a id="schemaproductpermission"></a>
<a id="schema_ProductPermission"></a>
<a id="tocSproductpermission"></a>
<a id="tocsproductpermission"></a>

```json
{
  "permissionId": "string",
  "state": "required"
}
```

A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionId|string|false|none|An opaque string uniquely identifying the permission.|
|state|string|false|none|Whether the permission has been accepted or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|required|
|state|accepted|

<h2 id="tocS_ProductPermissions">ProductPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaproductpermissions"></a>
<a id="schema_ProductPermissions"></a>
<a id="tocSproductpermissions"></a>
<a id="tocsproductpermissions"></a>

```json
{
  "permission": [
    {
      "permissionId": "string",
      "state": "required"
    }
  ],
  "productId": "string"
}
```

Information about the permissions required by a specific app and whether they have been accepted by the enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|[[ProductPermission](#schemaproductpermission)]|false|none|The permissions required by the app.|
|productId|string|false|none|The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".|

<h2 id="tocS_ProductPolicy">ProductPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaproductpolicy"></a>
<a id="schema_ProductPolicy"></a>
<a id="tocSproductpolicy"></a>
<a id="tocsproductpolicy"></a>

```json
{
  "autoInstallPolicy": {
    "autoInstallConstraint": [
      {
        "chargingStateConstraint": "chargingStateConstraintUnspecified",
        "deviceIdleStateConstraint": "deviceIdleStateConstraintUnspecified",
        "networkTypeConstraint": "networkTypeConstraintUnspecified"
      }
    ],
    "autoInstallMode": "autoInstallModeUnspecified",
    "autoInstallPriority": 0,
    "minimumVersionCode": 0
  },
  "autoUpdateMode": "autoUpdateModeUnspecified",
  "enterpriseAuthenticationAppLinkConfigs": [
    {
      "uri": "string"
    }
  ],
  "managedConfiguration": {
    "configurationVariables": {
      "mcmId": "string",
      "variableSet": [
        {
          "placeholder": "string",
          "userValue": "string"
        }
      ]
    },
    "kind": "string",
    "managedProperty": [
      {
        "key": "string",
        "valueBool": true,
        "valueBundle": {},
        "valueBundleArray": [
          {}
        ],
        "valueInteger": 0,
        "valueString": "string",
        "valueStringArray": [
          "string"
        ]
      }
    ],
    "productId": "string"
  },
  "productId": "string",
  "trackIds": [
    "string"
  ],
  "tracks": [
    "appTrackUnspecified"
  ]
}
```

The policy for a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoInstallPolicy|[AutoInstallPolicy](#schemaautoinstallpolicy)|false|none|The auto-install policy for the product.|
|autoUpdateMode|string|false|none|The auto-update mode for the product.|
|enterpriseAuthenticationAppLinkConfigs|[[EnterpriseAuthenticationAppLinkConfig](#schemaenterpriseauthenticationapplinkconfig)]|false|none|An authentication URL configuration for the authenticator app of an identity provider. This helps to launch the identity provider's authenticator app during the authentication happening in a private app using Android WebView. Authenticator app should already be the [default handler](https://developer.android.com/training/app-links/verify-site-associations) for the authentication url on the device.|
|managedConfiguration|[ManagedConfiguration](#schemamanagedconfiguration)|false|none|The managed configuration for the product.|
|productId|string|false|none|The ID of the product. For example, "app:com.google.android.gm".|
|trackIds|[string]|false|none|Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get.|
|tracks|[string]|false|none|Deprecated. Use trackIds instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoUpdateMode|autoUpdateModeUnspecified|
|autoUpdateMode|autoUpdateDefault|
|autoUpdateMode|autoUpdatePostponed|
|autoUpdateMode|autoUpdateHighPriority|
|tracks|appTrackUnspecified|
|tracks|production|
|tracks|beta|
|tracks|alpha|

<h2 id="tocS_ProductSet">ProductSet</h2>
<!-- backwards compatibility -->
<a id="schemaproductset"></a>
<a id="schema_ProductSet"></a>
<a id="tocSproductset"></a>
<a id="tocsproductset"></a>

```json
{
  "productId": [
    "string"
  ],
  "productSetBehavior": "unknown",
  "productVisibility": [
    {
      "productId": "string",
      "trackIds": [
        "string"
      ],
      "tracks": [
        "appTrackUnspecified"
      ]
    }
  ]
}
```

A set of products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|[string]|false|none|The list of product IDs making up the set of products.|
|productSetBehavior|string|false|none|The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.|
|productVisibility|[[ProductVisibility](#schemaproductvisibility)]|false|none|Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.|

#### Enumerated Values

|Property|Value|
|---|---|
|productSetBehavior|unknown|
|productSetBehavior|whitelist|
|productSetBehavior|includeAll|
|productSetBehavior|allApproved|

<h2 id="tocS_ProductSigningCertificate">ProductSigningCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaproductsigningcertificate"></a>
<a id="schema_ProductSigningCertificate"></a>
<a id="tocSproductsigningcertificate"></a>
<a id="tocsproductsigningcertificate"></a>

```json
{
  "certificateHashSha1": "string",
  "certificateHashSha256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateHashSha1|string|false|none|The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.)|
|certificateHashSha256|string|false|none|The base64 urlsafe encoded SHA2-256 hash of the certificate.|

<h2 id="tocS_ProductVisibility">ProductVisibility</h2>
<!-- backwards compatibility -->
<a id="schemaproductvisibility"></a>
<a id="schema_ProductVisibility"></a>
<a id="tocSproductvisibility"></a>
<a id="tocsproductvisibility"></a>

```json
{
  "productId": "string",
  "trackIds": [
    "string"
  ],
  "tracks": [
    "appTrackUnspecified"
  ]
}
```

A product to be made visible to a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|false|none|The product ID to make visible to the user. Required for each item in the productVisibility list.|
|trackIds|[string]|false|none|Grants the user visibility to the specified product track(s), identified by trackIds.|
|tracks|[string]|false|none|Deprecated. Use trackIds instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|tracks|appTrackUnspecified|
|tracks|production|
|tracks|beta|
|tracks|alpha|

<h2 id="tocS_ProductsApproveRequest">ProductsApproveRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproductsapproverequest"></a>
<a id="schema_ProductsApproveRequest"></a>
<a id="tocSproductsapproverequest"></a>
<a id="tocsproductsapproverequest"></a>

```json
{
  "approvalUrlInfo": {
    "approvalUrl": "string"
  },
  "approvedPermissions": "currentPermissionsOnly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalUrlInfo|[ApprovalUrlInfo](#schemaapprovalurlinfo)|false|none|The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated.|
|approvedPermissions|string|false|none|Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvedPermissions|currentPermissionsOnly|
|approvedPermissions|allPermissions|

<h2 id="tocS_ProductsGenerateApprovalUrlResponse">ProductsGenerateApprovalUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductsgenerateapprovalurlresponse"></a>
<a id="schema_ProductsGenerateApprovalUrlResponse"></a>
<a id="tocSproductsgenerateapprovalurlresponse"></a>
<a id="tocsproductsgenerateapprovalurlresponse"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.|

<h2 id="tocS_ProductsListResponse">ProductsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproductslistresponse"></a>
<a id="schema_ProductsListResponse"></a>
<a id="tocSproductslistresponse"></a>
<a id="tocsproductslistresponse"></a>

```json
{
  "pageInfo": {
    "resultPerPage": 0,
    "startIndex": 0,
    "totalResults": 0
  },
  "product": [
    {
      "appRestrictionsSchema": {
        "kind": "string",
        "restrictions": [
          {
            "defaultValue": {
              "type": "bool",
              "valueBool": true,
              "valueInteger": 0,
              "valueMultiselect": [
                "string"
              ],
              "valueString": "string"
            },
            "description": "string",
            "entry": [
              "string"
            ],
            "entryValue": [
              "string"
            ],
            "key": "string",
            "nestedRestriction": [
              {}
            ],
            "restrictionType": "bool",
            "title": "string"
          }
        ]
      },
      "appTracks": [
        {
          "trackAlias": "string",
          "trackId": "string"
        }
      ],
      "appVersion": [
        {
          "isProduction": true,
          "track": "appTrackUnspecified",
          "trackId": [
            "string"
          ],
          "versionCode": 0,
          "versionString": "string"
        }
      ],
      "authorName": "string",
      "availableCountries": [
        "string"
      ],
      "availableTracks": [
        "appTrackUnspecified"
      ],
      "category": "string",
      "contentRating": "ratingUnknown",
      "description": "string",
      "detailsUrl": "string",
      "distributionChannel": "publicGoogleHosted",
      "features": [
        "featureUnknown"
      ],
      "iconUrl": "string",
      "lastUpdatedTimestampMillis": "string",
      "minAndroidSdkVersion": 0,
      "permissions": [
        {
          "permissionId": "string",
          "state": "required"
        }
      ],
      "productId": "string",
      "productPricing": "unknown",
      "recentChanges": "string",
      "requiresContainerApp": true,
      "screenshotUrls": [
        "string"
      ],
      "signingCertificate": {
        "certificateHashSha1": "string",
        "certificateHashSha256": "string"
      },
      "smallIconUrl": "string",
      "title": "string",
      "workDetailsUrl": "string"
    }
  ],
  "tokenPagination": {
    "nextPageToken": "string",
    "previousPageToken": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|product|[[Product](#schemaproduct)]|false|none|Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Pagination information for token pagination.|

<h2 id="tocS_ServiceAccount">ServiceAccount</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccount"></a>
<a id="schema_ServiceAccount"></a>
<a id="tocSserviceaccount"></a>
<a id="tocsserviceaccount"></a>

```json
{
  "key": {
    "data": "string",
    "id": "string",
    "publicData": "string",
    "type": "googleCredentials"
  },
  "name": "string"
}
```

A service account identity, including the name and credentials that can be used to authenticate as the service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[ServiceAccountKey](#schemaserviceaccountkey)|false|none|Credentials that can be used to authenticate as this ServiceAccount.|
|name|string|false|none|The account name of the service account, in the form of an email address. Assigned by the server.|

<h2 id="tocS_ServiceAccountKey">ServiceAccountKey</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountkey"></a>
<a id="schema_ServiceAccountKey"></a>
<a id="tocSserviceaccountkey"></a>
<a id="tocsserviceaccountkey"></a>

```json
{
  "data": "string",
  "id": "string",
  "publicData": "string",
  "type": "googleCredentials"
}
```

Credentials that can be used to authenticate as a service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.|
|id|string|false|none|An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.|
|publicData|string|false|none|Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.|
|type|string|false|none|The file format of the generated key data.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|googleCredentials|
|type|pkcs12|

<h2 id="tocS_ServiceAccountKeysListResponse">ServiceAccountKeysListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountkeyslistresponse"></a>
<a id="schema_ServiceAccountKeysListResponse"></a>
<a id="tocSserviceaccountkeyslistresponse"></a>
<a id="tocsserviceaccountkeyslistresponse"></a>

```json
{
  "serviceAccountKey": [
    {
      "data": "string",
      "id": "string",
      "publicData": "string",
      "type": "googleCredentials"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccountKey|[[ServiceAccountKey](#schemaserviceaccountkey)]|false|none|The service account credentials.|

<h2 id="tocS_SignupInfo">SignupInfo</h2>
<!-- backwards compatibility -->
<a id="schemasignupinfo"></a>
<a id="schema_SignupInfo"></a>
<a id="tocSsignupinfo"></a>
<a id="tocssignupinfo"></a>

```json
{
  "completionToken": "string",
  "kind": "string",
  "url": "string"
}
```

A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionToken|string|false|none|An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.|
|kind|string|false|none|Deprecated.|
|url|string|false|none|A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.|

<h2 id="tocS_StoreCluster">StoreCluster</h2>
<!-- backwards compatibility -->
<a id="schemastorecluster"></a>
<a id="schema_StoreCluster"></a>
<a id="tocSstorecluster"></a>
<a id="tocsstorecluster"></a>

```json
{
  "id": "string",
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ],
  "orderInPage": "string",
  "productId": [
    "string"
  ]
}
```

Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique ID of this cluster. Assigned by the server. Immutable once assigned.|
|name|[[LocalizedText](#schemalocalizedtext)]|false|none|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|
|orderInPage|string|false|none|String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.|
|productId|[string]|false|none|List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.|

<h2 id="tocS_StoreLayout">StoreLayout</h2>
<!-- backwards compatibility -->
<a id="schemastorelayout"></a>
<a id="schema_StoreLayout"></a>
<a id="tocSstorelayout"></a>
<a id="tocsstorelayout"></a>

```json
{
  "homepageId": "string",
  "storeLayoutType": "unknown"
}
```

General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homepageId|string|false|none|The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic".|
|storeLayoutType|string|false|none|The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|storeLayoutType|unknown|
|storeLayoutType|basic|
|storeLayoutType|custom|

<h2 id="tocS_StoreLayoutClustersListResponse">StoreLayoutClustersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemastorelayoutclusterslistresponse"></a>
<a id="schema_StoreLayoutClustersListResponse"></a>
<a id="tocSstorelayoutclusterslistresponse"></a>
<a id="tocsstorelayoutclusterslistresponse"></a>

```json
{
  "cluster": [
    {
      "id": "string",
      "name": [
        {
          "locale": "string",
          "text": "string"
        }
      ],
      "orderInPage": "string",
      "productId": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[[StoreCluster](#schemastorecluster)]|false|none|A store cluster of an enterprise.|

<h2 id="tocS_StoreLayoutPagesListResponse">StoreLayoutPagesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemastorelayoutpageslistresponse"></a>
<a id="schema_StoreLayoutPagesListResponse"></a>
<a id="tocSstorelayoutpageslistresponse"></a>
<a id="tocsstorelayoutpageslistresponse"></a>

```json
{
  "page": [
    {
      "id": "string",
      "link": [
        "string"
      ],
      "name": [
        {
          "locale": "string",
          "text": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[[StorePage](#schemastorepage)]|false|none|A store page of an enterprise.|

<h2 id="tocS_StorePage">StorePage</h2>
<!-- backwards compatibility -->
<a id="schemastorepage"></a>
<a id="schema_StorePage"></a>
<a id="tocSstorepage"></a>
<a id="tocsstorepage"></a>

```json
{
  "id": "string",
  "link": [
    "string"
  ],
  "name": [
    {
      "locale": "string",
      "text": "string"
    }
  ]
}
```

Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique ID of this page. Assigned by the server. Immutable once assigned.|
|link|[string]|false|none|Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.|
|name|[[LocalizedText](#schemalocalizedtext)]|false|none|Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.|

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

<h2 id="tocS_TrackInfo">TrackInfo</h2>
<!-- backwards compatibility -->
<a id="schematrackinfo"></a>
<a id="schema_TrackInfo"></a>
<a id="tocStrackinfo"></a>
<a id="tocstrackinfo"></a>

```json
{
  "trackAlias": "string",
  "trackId": "string"
}
```

Id to name association of a track.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackAlias|string|false|none|A modifiable name for a track. This is the visible name in the play developer console.|
|trackId|string|false|none|Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "accountIdentifier": "string",
  "accountType": "deviceAccount",
  "displayName": "string",
  "id": "string",
  "managementType": "googleManaged",
  "primaryEmail": "string"
}
```

A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentifier|string|false|none|A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.|
|accountType|string|false|none|The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.|
|displayName|string|false|none|The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update|
|id|string|false|none|The unique ID for the user.|
|managementType|string|false|none|The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.|
|primaryEmail|string|false|none|The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|deviceAccount|
|accountType|userAccount|
|managementType|googleManaged|
|managementType|emmManaged|

<h2 id="tocS_UsersListResponse">UsersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserslistresponse"></a>
<a id="schema_UsersListResponse"></a>
<a id="tocSuserslistresponse"></a>
<a id="tocsuserslistresponse"></a>

```json
{
  "user": [
    {
      "accountIdentifier": "string",
      "accountType": "deviceAccount",
      "displayName": "string",
      "id": "string",
      "managementType": "googleManaged",
      "primaryEmail": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[[User](#schemauser)]|false|none|A user of an enterprise.|

<h2 id="tocS_VariableSet">VariableSet</h2>
<!-- backwards compatibility -->
<a id="schemavariableset"></a>
<a id="schema_VariableSet"></a>
<a id="tocSvariableset"></a>
<a id="tocsvariableset"></a>

```json
{
  "placeholder": "string",
  "userValue": "string"
}
```

A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeholder|string|false|none|The placeholder string; defined by EMM.|
|userValue|string|false|none|The value of the placeholder, specific to the user.|

<h2 id="tocS_WebApp">WebApp</h2>
<!-- backwards compatibility -->
<a id="schemawebapp"></a>
<a id="schema_WebApp"></a>
<a id="tocSwebapp"></a>
<a id="tocswebapp"></a>

```json
{
  "displayMode": "displayModeUnspecified",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "isPublished": true,
  "startUrl": "string",
  "title": "string",
  "versionCode": "string",
  "webAppId": "string"
}
```

A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayMode|string|false|none|The display mode of the web app. Possible values include: - "minimalUi", the device's status bar, navigation bar, the app's URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device's status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device's status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. |
|icons|[[WebAppIcon](#schemawebappicon)]|false|none|A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used.|
|isPublished|boolean|false|none|A flag whether the app has been published to the Play store yet.|
|startUrl|string|false|none|The start URL, i.e. the URL that should load when the user opens the application.|
|title|string|false|none|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|versionCode|string(int64)|false|none|The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|
|webAppId|string|false|none|The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id.|

#### Enumerated Values

|Property|Value|
|---|---|
|displayMode|displayModeUnspecified|
|displayMode|minimalUi|
|displayMode|standalone|
|displayMode|fullScreen|

<h2 id="tocS_WebAppIcon">WebAppIcon</h2>
<!-- backwards compatibility -->
<a id="schemawebappicon"></a>
<a id="schema_WebAppIcon"></a>
<a id="tocSwebappicon"></a>
<a id="tocswebappicon"></a>

```json
{
  "imageData": "string"
}
```

Icon for a web app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageData|string|false|none|The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. |

<h2 id="tocS_WebAppsListResponse">WebAppsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebappslistresponse"></a>
<a id="schema_WebAppsListResponse"></a>
<a id="tocSwebappslistresponse"></a>
<a id="tocswebappslistresponse"></a>

```json
{
  "webApp": [
    {
      "displayMode": "displayModeUnspecified",
      "icons": [
        {
          "imageData": "string"
        }
      ],
      "isPublished": true,
      "startUrl": "string",
      "title": "string",
      "versionCode": "string",
      "webAppId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webApp|[[WebApp](#schemawebapp)]|false|none|The manifest describing a web app.|
