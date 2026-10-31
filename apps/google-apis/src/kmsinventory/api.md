<h1 id="kms-inventory-api">KMS Inventory API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://kmsinventory.googleapis.com/">https://kmsinventory.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/kms/">External documentation</a>

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

<h1 id="kms-inventory-api-organizations">organizations</h1>

## kmsinventory.organizations.protectedResources.search

<a id="opIdkmsinventory.organizations.protectedResources.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/protectedResources:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{scope}/protectedResources:search`

Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

<h3 id="kmsinventoryorganizationsprotectedresourcessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|path|string|true|Required. Resource name of the organization. Example: organizations/123|
|cryptoKey|query|string|false|Required. The resource name of the CryptoKey.|
|pageSize|query|integer|false|The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500.|
|pageToken|query|string|false|A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "protectedResources": [
    {
      "cloudProduct": "string",
      "createTime": "string",
      "cryptoKeyVersion": "string",
      "cryptoKeyVersions": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "project": "string",
      "projectId": "string",
      "resourceType": "string"
    }
  ]
}
```

<h3 id="kmsinventoryorganizationsprotectedresourcessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse](#schemagooglecloudkmsinventoryv1searchprotectedresourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="kms-inventory-api-projects">projects</h1>

## kmsinventory.projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary

<a id="opIdkmsinventory.projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/protectedResourcesSummary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/protectedResourcesSummary`

Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

<h3 id="kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKey.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "cloudProducts": {
    "property1": "string",
    "property2": "string"
  },
  "locations": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "projectCount": 0,
  "resourceCount": "string",
  "resourceTypes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudKmsInventoryV1ProtectedResourcesSummary](#schemagooglecloudkmsinventoryv1protectedresourcessummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## kmsinventory.projects.cryptoKeys.list

<a id="opIdkmsinventory.projects.cryptoKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/cryptoKeys`

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

<h3 id="kmsinventoryprojectscryptokeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*`|
|pageSize|query|integer|false|Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|Optional. Pass this into a subsequent request in order to receive the next page of results.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "cryptoKeys": [
    {
      "createTime": "string",
      "cryptoKeyBackend": "string",
      "destroyScheduledDuration": "string",
      "importOnly": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nextRotationTime": "string",
      "primary": {
        "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
        "attestation": {
          "certChains": {
            "caviumCerts": [
              "string"
            ],
            "googleCardCerts": [
              "string"
            ],
            "googlePartitionCerts": [
              "string"
            ]
          },
          "content": "string",
          "format": "ATTESTATION_FORMAT_UNSPECIFIED"
        },
        "createTime": "string",
        "destroyEventTime": "string",
        "destroyTime": "string",
        "externalDestructionFailureReason": "string",
        "externalProtectionLevelOptions": {
          "ekmConnectionKeyPath": "string",
          "externalKeyUri": "string"
        },
        "generateTime": "string",
        "generationFailureReason": "string",
        "importFailureReason": "string",
        "importJob": "string",
        "importTime": "string",
        "name": "string",
        "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
        "reimportEligible": true,
        "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
      },
      "purpose": "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
      "rotationPeriod": "string",
      "versionTemplate": {
        "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
        "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="kmsinventoryprojectscryptokeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudKmsInventoryV1ListCryptoKeysResponse](#schemagooglecloudkmsinventoryv1listcryptokeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudKmsInventoryV1ListCryptoKeysResponse">GoogleCloudKmsInventoryV1ListCryptoKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsinventoryv1listcryptokeysresponse"></a>
<a id="schema_GoogleCloudKmsInventoryV1ListCryptoKeysResponse"></a>
<a id="tocSgooglecloudkmsinventoryv1listcryptokeysresponse"></a>
<a id="tocsgooglecloudkmsinventoryv1listcryptokeysresponse"></a>

```json
{
  "cryptoKeys": [
    {
      "createTime": "string",
      "cryptoKeyBackend": "string",
      "destroyScheduledDuration": "string",
      "importOnly": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nextRotationTime": "string",
      "primary": {
        "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
        "attestation": {
          "certChains": {
            "caviumCerts": [
              "string"
            ],
            "googleCardCerts": [
              "string"
            ],
            "googlePartitionCerts": [
              "string"
            ]
          },
          "content": "string",
          "format": "ATTESTATION_FORMAT_UNSPECIFIED"
        },
        "createTime": "string",
        "destroyEventTime": "string",
        "destroyTime": "string",
        "externalDestructionFailureReason": "string",
        "externalProtectionLevelOptions": {
          "ekmConnectionKeyPath": "string",
          "externalKeyUri": "string"
        },
        "generateTime": "string",
        "generationFailureReason": "string",
        "importFailureReason": "string",
        "importJob": "string",
        "importTime": "string",
        "name": "string",
        "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
        "reimportEligible": true,
        "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
      },
      "purpose": "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
      "rotationPeriod": "string",
      "versionTemplate": {
        "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
        "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for KeyDashboardService.ListCryptoKeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKeys|[[GoogleCloudKmsV1CryptoKey](#schemagooglecloudkmsv1cryptokey)]|false|none|The list of CryptoKeys.|
|nextPageToken|string|false|none|The page token returned from the previous response if the next page is desired.|

<h2 id="tocS_GoogleCloudKmsInventoryV1ProtectedResource">GoogleCloudKmsInventoryV1ProtectedResource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsinventoryv1protectedresource"></a>
<a id="schema_GoogleCloudKmsInventoryV1ProtectedResource"></a>
<a id="tocSgooglecloudkmsinventoryv1protectedresource"></a>
<a id="tocsgooglecloudkmsinventoryv1protectedresource"></a>

```json
{
  "cloudProduct": "string",
  "createTime": "string",
  "cryptoKeyVersion": "string",
  "cryptoKeyVersions": [
    "string"
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "project": "string",
  "projectId": "string",
  "resourceType": "string"
}
```

Metadata about a resource protected by a Cloud KMS key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudProduct|string|false|none|The Cloud product that owns the resource. Example: `compute`|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.|
|cryptoKeyVersion|string|false|none|The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions.|
|cryptoKeyVersions|[string]|false|none|The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version.|
|labels|object|false|none|A key-value pair of the resource's labels (v1) to their values.|
|location|string|false|none|Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.|
|name|string|false|none|The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.|
|project|string|false|none|Format: `projects/{PROJECT_NUMBER}`.|
|projectId|string|false|none|The ID of the project that owns the resource.|
|resourceType|string|false|none|Example: `compute.googleapis.com/Disk`|

<h2 id="tocS_GoogleCloudKmsInventoryV1ProtectedResourcesSummary">GoogleCloudKmsInventoryV1ProtectedResourcesSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsinventoryv1protectedresourcessummary"></a>
<a id="schema_GoogleCloudKmsInventoryV1ProtectedResourcesSummary"></a>
<a id="tocSgooglecloudkmsinventoryv1protectedresourcessummary"></a>
<a id="tocsgooglecloudkmsinventoryv1protectedresourcessummary"></a>

```json
{
  "cloudProducts": {
    "property1": "string",
    "property2": "string"
  },
  "locations": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "projectCount": 0,
  "resourceCount": "string",
  "resourceTypes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudProducts|object|false|none|The number of resources protected by the key grouped by Cloud product.|
|locations|object|false|none|The number of resources protected by the key grouped by region.|
|name|string|false|none|The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary|
|projectCount|integer(int32)|false|none|The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.|
|resourceCount|string(int64)|false|none|The total number of protected resources in the same Cloud organization as the key.|
|resourceTypes|object|false|none|The number of resources protected by the key grouped by resource type.|

<h2 id="tocS_GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse">GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsinventoryv1searchprotectedresourcesresponse"></a>
<a id="schema_GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse"></a>
<a id="tocSgooglecloudkmsinventoryv1searchprotectedresourcesresponse"></a>
<a id="tocsgooglecloudkmsinventoryv1searchprotectedresourcesresponse"></a>

```json
{
  "nextPageToken": "string",
  "protectedResources": [
    {
      "cloudProduct": "string",
      "createTime": "string",
      "cryptoKeyVersion": "string",
      "cryptoKeyVersions": [
        "string"
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "project": "string",
      "projectId": "string",
      "resourceType": "string"
    }
  ]
}
```

Response message for KeyTrackingService.SearchProtectedResources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|protectedResources|[[GoogleCloudKmsInventoryV1ProtectedResource](#schemagooglecloudkmsinventoryv1protectedresource)]|false|none|Protected resources for this page.|

<h2 id="tocS_GoogleCloudKmsV1CryptoKey">GoogleCloudKmsV1CryptoKey</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1cryptokey"></a>
<a id="schema_GoogleCloudKmsV1CryptoKey"></a>
<a id="tocSgooglecloudkmsv1cryptokey"></a>
<a id="tocsgooglecloudkmsv1cryptokey"></a>

```json
{
  "createTime": "string",
  "cryptoKeyBackend": "string",
  "destroyScheduledDuration": "string",
  "importOnly": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nextRotationTime": "string",
  "primary": {
    "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
    "attestation": {
      "certChains": {
        "caviumCerts": [
          "string"
        ],
        "googleCardCerts": [
          "string"
        ],
        "googlePartitionCerts": [
          "string"
        ]
      },
      "content": "string",
      "format": "ATTESTATION_FORMAT_UNSPECIFIED"
    },
    "createTime": "string",
    "destroyEventTime": "string",
    "destroyTime": "string",
    "externalDestructionFailureReason": "string",
    "externalProtectionLevelOptions": {
      "ekmConnectionKeyPath": "string",
      "externalKeyUri": "string"
    },
    "generateTime": "string",
    "generationFailureReason": "string",
    "importFailureReason": "string",
    "importJob": "string",
    "importTime": "string",
    "name": "string",
    "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
    "reimportEligible": true,
    "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
  },
  "purpose": "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
  "rotationPeriod": "string",
  "versionTemplate": {
    "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
    "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
  }
}
```

A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this CryptoKey was created.|
|cryptoKeyBackend|string|false|none|Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/*/locations/*/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.|
|destroyScheduledDuration|string(google-duration)|false|none|Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.|
|importOnly|boolean|false|none|Immutable. Whether this key may contain imported versions only.|
|labels|object|false|none|Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).|
|name|string|false|read-only|Output only. The resource name for this CryptoKey in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`.|
|nextRotationTime|string(google-datetime)|false|none|At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.|
|primary|[GoogleCloudKmsV1CryptoKeyVersion](#schemagooglecloudkmsv1cryptokeyversion)|false|none|Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey's primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.|
|purpose|string|false|none|Immutable. The immutable purpose of this CryptoKey.|
|rotationPeriod|string(google-duration)|false|none|next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.|
|versionTemplate|[GoogleCloudKmsV1CryptoKeyVersionTemplate](#schemagooglecloudkmsv1cryptokeyversiontemplate)|false|none|A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|CRYPTO_KEY_PURPOSE_UNSPECIFIED|
|purpose|ENCRYPT_DECRYPT|
|purpose|ASYMMETRIC_SIGN|
|purpose|ASYMMETRIC_DECRYPT|
|purpose|MAC|

<h2 id="tocS_GoogleCloudKmsV1CryptoKeyVersion">GoogleCloudKmsV1CryptoKeyVersion</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1cryptokeyversion"></a>
<a id="schema_GoogleCloudKmsV1CryptoKeyVersion"></a>
<a id="tocSgooglecloudkmsv1cryptokeyversion"></a>
<a id="tocsgooglecloudkmsv1cryptokeyversion"></a>

```json
{
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "attestation": {
    "certChains": {
      "caviumCerts": [
        "string"
      ],
      "googleCardCerts": [
        "string"
      ],
      "googlePartitionCerts": [
        "string"
      ]
    },
    "content": "string",
    "format": "ATTESTATION_FORMAT_UNSPECIFIED"
  },
  "createTime": "string",
  "destroyEventTime": "string",
  "destroyTime": "string",
  "externalDestructionFailureReason": "string",
  "externalProtectionLevelOptions": {
    "ekmConnectionKeyPath": "string",
    "externalKeyUri": "string"
  },
  "generateTime": "string",
  "generationFailureReason": "string",
  "importFailureReason": "string",
  "importJob": "string",
  "importTime": "string",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "reimportEligible": true,
  "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
}
```

A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|read-only|Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.|
|attestation|[GoogleCloudKmsV1KeyOperationAttestation](#schemagooglecloudkmsv1keyoperationattestation)|false|none|Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this CryptoKeyVersion was created.|
|destroyEventTime|string(google-datetime)|false|read-only|Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.|
|destroyTime|string(google-datetime)|false|read-only|Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.|
|externalDestructionFailureReason|string|false|read-only|Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.|
|externalProtectionLevelOptions|[GoogleCloudKmsV1ExternalProtectionLevelOptions](#schemagooglecloudkmsv1externalprotectionleveloptions)|false|none|ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.|
|generateTime|string(google-datetime)|false|read-only|Output only. The time this CryptoKeyVersion's key material was generated.|
|generationFailureReason|string|false|read-only|Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.|
|importFailureReason|string|false|read-only|Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.|
|importJob|string|false|read-only|Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.|
|importTime|string(google-datetime)|false|read-only|Output only. The time at which this CryptoKeyVersion's key material was most recently imported.|
|name|string|false|read-only|Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.|
|protectionLevel|string|false|read-only|Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.|
|reimportEligible|boolean|false|read-only|Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.|
|state|string|false|none|The current state of the CryptoKeyVersion.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED|
|algorithm|GOOGLE_SYMMETRIC_ENCRYPTION|
|algorithm|RSA_SIGN_PSS_2048_SHA256|
|algorithm|RSA_SIGN_PSS_3072_SHA256|
|algorithm|RSA_SIGN_PSS_4096_SHA256|
|algorithm|RSA_SIGN_PSS_4096_SHA512|
|algorithm|RSA_SIGN_PKCS1_2048_SHA256|
|algorithm|RSA_SIGN_PKCS1_3072_SHA256|
|algorithm|RSA_SIGN_PKCS1_4096_SHA256|
|algorithm|RSA_SIGN_PKCS1_4096_SHA512|
|algorithm|RSA_SIGN_RAW_PKCS1_2048|
|algorithm|RSA_SIGN_RAW_PKCS1_3072|
|algorithm|RSA_SIGN_RAW_PKCS1_4096|
|algorithm|RSA_DECRYPT_OAEP_2048_SHA256|
|algorithm|RSA_DECRYPT_OAEP_3072_SHA256|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA256|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA512|
|algorithm|RSA_DECRYPT_OAEP_2048_SHA1|
|algorithm|RSA_DECRYPT_OAEP_3072_SHA1|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA1|
|algorithm|EC_SIGN_P256_SHA256|
|algorithm|EC_SIGN_P384_SHA384|
|algorithm|EC_SIGN_SECP256K1_SHA256|
|algorithm|HMAC_SHA256|
|algorithm|HMAC_SHA1|
|algorithm|HMAC_SHA384|
|algorithm|HMAC_SHA512|
|algorithm|HMAC_SHA224|
|algorithm|EXTERNAL_SYMMETRIC_ENCRYPTION|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|
|state|CRYPTO_KEY_VERSION_STATE_UNSPECIFIED|
|state|PENDING_GENERATION|
|state|ENABLED|
|state|DISABLED|
|state|DESTROYED|
|state|DESTROY_SCHEDULED|
|state|PENDING_IMPORT|
|state|IMPORT_FAILED|
|state|GENERATION_FAILED|
|state|PENDING_EXTERNAL_DESTRUCTION|
|state|EXTERNAL_DESTRUCTION_FAILED|

<h2 id="tocS_GoogleCloudKmsV1CryptoKeyVersionTemplate">GoogleCloudKmsV1CryptoKeyVersionTemplate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1cryptokeyversiontemplate"></a>
<a id="schema_GoogleCloudKmsV1CryptoKeyVersionTemplate"></a>
<a id="tocSgooglecloudkmsv1cryptokeyversiontemplate"></a>
<a id="tocsgooglecloudkmsv1cryptokeyversiontemplate"></a>

```json
{
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT.|
|protectionLevel|string|false|none|ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED|
|algorithm|GOOGLE_SYMMETRIC_ENCRYPTION|
|algorithm|RSA_SIGN_PSS_2048_SHA256|
|algorithm|RSA_SIGN_PSS_3072_SHA256|
|algorithm|RSA_SIGN_PSS_4096_SHA256|
|algorithm|RSA_SIGN_PSS_4096_SHA512|
|algorithm|RSA_SIGN_PKCS1_2048_SHA256|
|algorithm|RSA_SIGN_PKCS1_3072_SHA256|
|algorithm|RSA_SIGN_PKCS1_4096_SHA256|
|algorithm|RSA_SIGN_PKCS1_4096_SHA512|
|algorithm|RSA_SIGN_RAW_PKCS1_2048|
|algorithm|RSA_SIGN_RAW_PKCS1_3072|
|algorithm|RSA_SIGN_RAW_PKCS1_4096|
|algorithm|RSA_DECRYPT_OAEP_2048_SHA256|
|algorithm|RSA_DECRYPT_OAEP_3072_SHA256|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA256|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA512|
|algorithm|RSA_DECRYPT_OAEP_2048_SHA1|
|algorithm|RSA_DECRYPT_OAEP_3072_SHA1|
|algorithm|RSA_DECRYPT_OAEP_4096_SHA1|
|algorithm|EC_SIGN_P256_SHA256|
|algorithm|EC_SIGN_P384_SHA384|
|algorithm|EC_SIGN_SECP256K1_SHA256|
|algorithm|HMAC_SHA256|
|algorithm|HMAC_SHA1|
|algorithm|HMAC_SHA384|
|algorithm|HMAC_SHA512|
|algorithm|HMAC_SHA224|
|algorithm|EXTERNAL_SYMMETRIC_ENCRYPTION|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_GoogleCloudKmsV1ExternalProtectionLevelOptions">GoogleCloudKmsV1ExternalProtectionLevelOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1externalprotectionleveloptions"></a>
<a id="schema_GoogleCloudKmsV1ExternalProtectionLevelOptions"></a>
<a id="tocSgooglecloudkmsv1externalprotectionleveloptions"></a>
<a id="tocsgooglecloudkmsv1externalprotectionleveloptions"></a>

```json
{
  "ekmConnectionKeyPath": "string",
  "externalKeyUri": "string"
}
```

ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ekmConnectionKeyPath|string|false|none|The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection.|
|externalKeyUri|string|false|none|The URI for an external resource that this CryptoKeyVersion represents.|

<h2 id="tocS_GoogleCloudKmsV1KeyOperationAttestation">GoogleCloudKmsV1KeyOperationAttestation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1keyoperationattestation"></a>
<a id="schema_GoogleCloudKmsV1KeyOperationAttestation"></a>
<a id="tocSgooglecloudkmsv1keyoperationattestation"></a>
<a id="tocsgooglecloudkmsv1keyoperationattestation"></a>

```json
{
  "certChains": {
    "caviumCerts": [
      "string"
    ],
    "googleCardCerts": [
      "string"
    ],
    "googlePartitionCerts": [
      "string"
    ]
  },
  "content": "string",
  "format": "ATTESTATION_FORMAT_UNSPECIFIED"
}
```

Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certChains|[GoogleCloudKmsV1KeyOperationAttestationCertificateChains](#schemagooglecloudkmsv1keyoperationattestationcertificatechains)|false|none|Output only. The certificate chains needed to validate the attestation|
|content|string(byte)|false|read-only|Output only. The attestation data provided by the HSM when the key operation was performed.|
|format|string|false|read-only|Output only. The format of the attestation data.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|ATTESTATION_FORMAT_UNSPECIFIED|
|format|CAVIUM_V1_COMPRESSED|
|format|CAVIUM_V2_COMPRESSED|

<h2 id="tocS_GoogleCloudKmsV1KeyOperationAttestationCertificateChains">GoogleCloudKmsV1KeyOperationAttestationCertificateChains</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudkmsv1keyoperationattestationcertificatechains"></a>
<a id="schema_GoogleCloudKmsV1KeyOperationAttestationCertificateChains"></a>
<a id="tocSgooglecloudkmsv1keyoperationattestationcertificatechains"></a>
<a id="tocsgooglecloudkmsv1keyoperationattestationcertificatechains"></a>

```json
{
  "caviumCerts": [
    "string"
  ],
  "googleCardCerts": [
    "string"
  ],
  "googlePartitionCerts": [
    "string"
  ]
}
```

Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caviumCerts|[string]|false|none|Cavium certificate chain corresponding to the attestation.|
|googleCardCerts|[string]|false|none|Google card certificate chain corresponding to the attestation.|
|googlePartitionCerts|[string]|false|none|Google partition certificate chain corresponding to the attestation.|
