<h1 id="cloud-key-management-service-kms-api">Cloud Key Management Service (KMS) API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.

Base URLs:

* <a href="https://cloudkms.googleapis.com/">https://cloudkms.googleapis.com/</a>

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
|https://www.googleapis.com/auth/cloudkms|View and manage your keys and secrets stored in Cloud Key Management Service|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloudkms|View and manage your keys and secrets stored in Cloud Key Management Service|

<h1 id="cloud-key-management-service-kms-api-projects">projects</h1>

## cloudkms.projects.locations.generateRandomBytes

<a id="opIdcloudkms.projects.locations.generateRandomBytes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generateRandomBytes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "lengthBytes": 0,
    "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
  }'
```

`POST /v1/{location}:generateRandomBytes`

Generate random bytes using the Cloud KMS randomness source in the provided location.

> Body parameter

```json
{
  "lengthBytes": 0,
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationsgeneraterandombytes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".|
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
|body|body|[GenerateRandomBytesRequest](#schemageneraterandombytesrequest)|false|none|
|» lengthBytes|body|integer(int32)|false|The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.|
|» protectionLevel|body|string|false|The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|» protectionLevel|SOFTWARE|
|» protectionLevel|HSM|
|» protectionLevel|EXTERNAL|
|» protectionLevel|EXTERNAL_VPC|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "dataCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationsgeneraterandombytes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GenerateRandomBytesResponse](#schemageneraterandombytesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.get

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Returns metadata for a given ImportJob.

<h3 id="cloudkmsprojectslocationskeyringsimportjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the ImportJob to get.|
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
  "expireEventTime": "string",
  "expireTime": "string",
  "generateTime": "string",
  "importMethod": "IMPORT_METHOD_UNSPECIFIED",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "publicKey": {
    "pem": "string"
  },
  "state": "IMPORT_JOB_STATE_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalProtectionLevelOptions": {
      "ekmConnectionKeyPath": "string",
      "externalKeyUri": "string"
    },
    "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
  }'
```

`PATCH /v1/{name}`

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

> Body parameter

```json
{
  "externalProtectionLevelOptions": {
    "ekmConnectionKeyPath": "string",
    "externalKeyUri": "string"
  },
  "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.|
|updateMask|query|string|false|Required. List of fields to be updated in this request.|
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
|body|body|[CryptoKeyVersion](#schemacryptokeyversion)|false|none|
|» externalProtectionLevelOptions|body|[ExternalProtectionLevelOptions](#schemaexternalprotectionleveloptions)|false|ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.|
|» state|body|string|false|The current state of the CryptoKeyVersion.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|CRYPTO_KEY_VERSION_STATE_UNSPECIFIED|
|» state|PENDING_GENERATION|
|» state|ENABLED|
|» state|DISABLED|
|» state|DESTROYED|
|» state|DESTROY_SCHEDULED|
|» state|PENDING_IMPORT|
|» state|IMPORT_FAILED|
|» state|GENERATION_FAILED|
|» state|PENDING_EXTERNAL_DESTRUCTION|
|» state|EXTERNAL_DESTRUCTION_FAILED|

> Example responses

> 200 Response

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKeyVersion](#schemacryptokeyversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.list

<a id="opIdcloudkms.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="cloudkmsprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="cloudkmsprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/publicKey \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/publicKey`

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the CryptoKeyVersion public key to get.|
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
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "name": "string",
  "pem": "string",
  "pemCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublicKey](#schemapublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:asymmetricDecrypt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ciphertext": "string",
    "ciphertextCrc32c": "string"
  }'
```

`POST /v1/{name}:asymmetricDecrypt`

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

> Body parameter

```json
{
  "ciphertext": "string",
  "ciphertextCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to use for decryption.|
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
|body|body|[AsymmetricDecryptRequest](#schemaasymmetricdecryptrequest)|false|none|
|» ciphertext|body|string(byte)|false|Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP.|
|» ciphertextCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "plaintext": "string",
  "plaintextCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedCiphertextCrc32c": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AsymmetricDecryptResponse](#schemaasymmetricdecryptresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:asymmetricSign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "dataCrc32c": "string",
    "digest": {
      "sha256": "string",
      "sha384": "string",
      "sha512": "string"
    },
    "digestCrc32c": "string"
  }'
```

`POST /v1/{name}:asymmetricSign`

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

> Body parameter

```json
{
  "data": "string",
  "dataCrc32c": "string",
  "digest": {
    "sha256": "string",
    "sha384": "string",
    "sha512": "string"
  },
  "digestCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to use for signing.|
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
|body|body|[AsymmetricSignRequest](#schemaasymmetricsignrequest)|false|none|
|» data|body|string(byte)|false|Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.|
|» dataCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|» digest|body|[Digest](#schemadigest)|false|Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm. This field may not be supplied if AsymmetricSignRequest.data is supplied.|
|» digestCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "signature": "string",
  "signatureCrc32c": "string",
  "verifiedDataCrc32c": true,
  "verifiedDigestCrc32c": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AsymmetricSignResponse](#schemaasymmetricsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.decrypt

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.decrypt"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:decrypt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalAuthenticatedData": "string",
    "additionalAuthenticatedDataCrc32c": "string",
    "ciphertext": "string",
    "ciphertextCrc32c": "string"
  }'
```

`POST /v1/{name}:decrypt`

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

> Body parameter

```json
{
  "additionalAuthenticatedData": "string",
  "additionalAuthenticatedDataCrc32c": "string",
  "ciphertext": "string",
  "ciphertextCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeysdecrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.|
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
|body|body|[DecryptRequest](#schemadecryptrequest)|false|none|
|» additionalAuthenticatedData|body|string(byte)|false|Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data.|
|» additionalAuthenticatedDataCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|» ciphertext|body|string(byte)|false|Required. The encrypted data originally returned in EncryptResponse.ciphertext.|
|» ciphertextCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "plaintext": "string",
  "plaintextCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "usedPrimary": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeysdecrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DecryptResponse](#schemadecryptresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:destroy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:destroy`

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

> Body parameter

```json
{}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to destroy.|
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
|body|body|[DestroyCryptoKeyVersionRequest](#schemadestroycryptokeyversionrequest)|false|none|

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKeyVersion](#schemacryptokeyversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.encrypt

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.encrypt"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:encrypt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalAuthenticatedData": "string",
    "additionalAuthenticatedDataCrc32c": "string",
    "plaintext": "string",
    "plaintextCrc32c": "string"
  }'
```

`POST /v1/{name}:encrypt`

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

> Body parameter

```json
{
  "additionalAuthenticatedData": "string",
  "additionalAuthenticatedDataCrc32c": "string",
  "plaintext": "string",
  "plaintextCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeysencrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version.|
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
|body|body|[EncryptRequest](#schemaencryptrequest)|false|none|
|» additionalAuthenticatedData|body|string(byte)|false|Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.|
|» additionalAuthenticatedDataCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|» plaintext|body|string(byte)|false|Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.|
|» plaintextCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "ciphertext": "string",
  "ciphertextCrc32c": "string",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedAdditionalAuthenticatedDataCrc32c": true,
  "verifiedPlaintextCrc32c": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeysencrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EncryptResponse](#schemaencryptresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:macSign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "dataCrc32c": "string"
  }'
```

`POST /v1/{name}:macSign`

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

> Body parameter

```json
{
  "data": "string",
  "dataCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to use for signing.|
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
|body|body|[MacSignRequest](#schemamacsignrequest)|false|none|
|» data|body|string(byte)|false|Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm.|
|» dataCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "mac": "string",
  "macCrc32c": "string",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedDataCrc32c": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MacSignResponse](#schemamacsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:macVerify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "dataCrc32c": "string",
    "mac": "string",
    "macCrc32c": "string"
  }'
```

`POST /v1/{name}:macVerify`

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

> Body parameter

```json
{
  "data": "string",
  "dataCrc32c": "string",
  "mac": "string",
  "macCrc32c": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to use for verification.|
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
|body|body|[MacVerifyRequest](#schemamacverifyrequest)|false|none|
|» data|body|string(byte)|false|Required. The data used previously as a MacSignRequest.data to generate the MAC tag.|
|» dataCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|» mac|body|string(byte)|false|Required. The signature to verify.|
|» macCrc32c|body|string(int64)|false|Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

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
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "success": true,
  "verifiedDataCrc32c": true,
  "verifiedMacCrc32c": true,
  "verifiedSuccessIntegrity": true
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MacVerifyResponse](#schemamacverifyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:restore`

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

> Body parameter

```json
{}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKeyVersion to restore.|
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
|body|body|[RestoreCryptoKeyVersionRequest](#schemarestorecryptokeyversionrequest)|false|none|

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKeyVersion](#schemacryptokeyversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:updatePrimaryVersion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cryptoKeyVersionId": "string"
  }'
```

`POST /v1/{name}:updatePrimaryVersion`

Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.

> Body parameter

```json
{
  "cryptoKeyVersionId": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the CryptoKey to update.|
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
|body|body|[UpdateCryptoKeyPrimaryVersionRequest](#schemaupdatecryptokeyprimaryversionrequest)|false|none|
|» cryptoKeyVersionId|body|string|false|Required. The id of the child CryptoKeyVersion to use as primary.|

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKey](#schemacryptokey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.ekmConnections.verifyConnectivity

<a id="opIdcloudkms.projects.locations.ekmConnections.verifyConnectivity"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:verifyConnectivity \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:verifyConnectivity`

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

<h3 id="cloudkmsprojectslocationsekmconnectionsverifyconnectivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the EkmConnection to verify.|
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

<h3 id="cloudkmsprojectslocationsekmconnectionsverifyconnectivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerifyConnectivityResponse](#schemaverifyconnectivityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeyVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/cryptoKeyVersions`

Lists CryptoKeyVersions.

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the CryptoKey to list, in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`.|
|filter|query|string|false|Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|orderBy|query|string|false|Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|pageSize|query|integer|false|Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.|
|view|query|string|false|The fields to include in the response.|
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
|view|CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED|
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
  "cryptoKeyVersions": [
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
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCryptoKeyVersionsResponse](#schemalistcryptokeyversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeyVersions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalProtectionLevelOptions": {
      "ekmConnectionKeyPath": "string",
      "externalKeyUri": "string"
    },
    "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/cryptoKeyVersions`

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

> Body parameter

```json
{
  "externalProtectionLevelOptions": {
    "ekmConnectionKeyPath": "string",
    "externalKeyUri": "string"
  },
  "state": "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the CryptoKey associated with the CryptoKeyVersions.|
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
|body|body|[CryptoKeyVersion](#schemacryptokeyversion)|false|none|
|» externalProtectionLevelOptions|body|[ExternalProtectionLevelOptions](#schemaexternalprotectionleveloptions)|false|ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.|
|» state|body|string|false|The current state of the CryptoKeyVersion.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|CRYPTO_KEY_VERSION_STATE_UNSPECIFIED|
|» state|PENDING_GENERATION|
|» state|ENABLED|
|» state|DISABLED|
|» state|DESTROYED|
|» state|DESTROY_SCHEDULED|
|» state|PENDING_IMPORT|
|» state|IMPORT_FAILED|
|» state|GENERATION_FAILED|
|» state|PENDING_EXTERNAL_DESTRUCTION|
|» state|EXTERNAL_DESTRUCTION_FAILED|

> Example responses

> 200 Response

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKeyVersion](#schemacryptokeyversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeyVersions:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
    "cryptoKeyVersion": "string",
    "importJob": "string",
    "rsaAesWrappedKey": "string",
    "wrappedKey": "string"
  }'
```

`POST /v1/{parent}/cryptoKeyVersions:import`

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

> Body parameter

```json
{
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "cryptoKeyVersion": "string",
  "importJob": "string",
  "rsaAesWrappedKey": "string",
  "wrappedKey": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion.|
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
|body|body|[ImportCryptoKeyVersionRequest](#schemaimportcryptokeyversionrequest)|false|none|
|» algorithm|body|string|false|Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.|
|» cryptoKeyVersion|body|string|false|Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.|
|» importJob|body|string|false|Required. The name of the ImportJob that was used to wrap this key material.|
|» rsaAesWrappedKey|body|string(byte)|false|Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.|
|» wrappedKey|body|string(byte)|false|Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» algorithm|CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED|
|» algorithm|GOOGLE_SYMMETRIC_ENCRYPTION|
|» algorithm|RSA_SIGN_PSS_2048_SHA256|
|» algorithm|RSA_SIGN_PSS_3072_SHA256|
|» algorithm|RSA_SIGN_PSS_4096_SHA256|
|» algorithm|RSA_SIGN_PSS_4096_SHA512|
|» algorithm|RSA_SIGN_PKCS1_2048_SHA256|
|» algorithm|RSA_SIGN_PKCS1_3072_SHA256|
|» algorithm|RSA_SIGN_PKCS1_4096_SHA256|
|» algorithm|RSA_SIGN_PKCS1_4096_SHA512|
|» algorithm|RSA_SIGN_RAW_PKCS1_2048|
|» algorithm|RSA_SIGN_RAW_PKCS1_3072|
|» algorithm|RSA_SIGN_RAW_PKCS1_4096|
|» algorithm|RSA_DECRYPT_OAEP_2048_SHA256|
|» algorithm|RSA_DECRYPT_OAEP_3072_SHA256|
|» algorithm|RSA_DECRYPT_OAEP_4096_SHA256|
|» algorithm|RSA_DECRYPT_OAEP_4096_SHA512|
|» algorithm|RSA_DECRYPT_OAEP_2048_SHA1|
|» algorithm|RSA_DECRYPT_OAEP_3072_SHA1|
|» algorithm|RSA_DECRYPT_OAEP_4096_SHA1|
|» algorithm|EC_SIGN_P256_SHA256|
|» algorithm|EC_SIGN_P384_SHA384|
|» algorithm|EC_SIGN_SECP256K1_SHA256|
|» algorithm|HMAC_SHA256|
|» algorithm|HMAC_SHA1|
|» algorithm|HMAC_SHA384|
|» algorithm|HMAC_SHA512|
|» algorithm|HMAC_SHA224|
|» algorithm|EXTERNAL_SYMMETRIC_ENCRYPTION|

> Example responses

> 200 Response

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKeyVersion](#schemacryptokeyversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.list

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/cryptoKeys`

Lists CryptoKeys.

<h3 id="cloudkmsprojectslocationskeyringscryptokeyslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`.|
|filter|query|string|false|Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|orderBy|query|string|false|Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|pageSize|query|integer|false|Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.|
|versionView|query|string|false|The fields of the primary version to include in the response.|
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
|versionView|CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED|
|versionView|FULL|
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
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCryptoKeysResponse](#schemalistcryptokeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.cryptoKeys.create

<a id="opIdcloudkms.projects.locations.keyRings.cryptoKeys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/cryptoKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cryptoKeyBackend": "string",
    "destroyScheduledDuration": "string",
    "importOnly": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "nextRotationTime": "string",
    "purpose": "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
    "rotationPeriod": "string",
    "versionTemplate": {
      "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
      "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/cryptoKeys`

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

> Body parameter

```json
{
  "cryptoKeyBackend": "string",
  "destroyScheduledDuration": "string",
  "importOnly": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "nextRotationTime": "string",
  "purpose": "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
  "rotationPeriod": "string",
  "versionTemplate": {
    "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
    "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
  }
}
```

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the KeyRing associated with the CryptoKeys.|
|cryptoKeyId|query|string|false|Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`|
|skipInitialVersionCreation|query|boolean|false|If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.|
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
|body|body|[CryptoKey](#schemacryptokey)|false|none|
|» cryptoKeyBackend|body|string|false|Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/*/locations/*/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.|
|» destroyScheduledDuration|body|string(google-duration)|false|Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.|
|» importOnly|body|boolean|false|Immutable. Whether this key may contain imported versions only.|
|» labels|body|object|false|Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).|
|» » **additionalProperties**|body|string|false|none|
|» nextRotationTime|body|string(google-datetime)|false|At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.|
|» purpose|body|string|false|Immutable. The immutable purpose of this CryptoKey.|
|» rotationPeriod|body|string(google-duration)|false|next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.|
|» versionTemplate|body|[CryptoKeyVersionTemplate](#schemacryptokeyversiontemplate)|false|A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» purpose|CRYPTO_KEY_PURPOSE_UNSPECIFIED|
|» purpose|ENCRYPT_DECRYPT|
|» purpose|ASYMMETRIC_SIGN|
|» purpose|ASYMMETRIC_DECRYPT|
|» purpose|MAC|

> Example responses

> 200 Response

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

<h3 id="cloudkmsprojectslocationskeyringscryptokeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CryptoKey](#schemacryptokey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.ekmConnections.list

<a id="opIdcloudkms.projects.locations.ekmConnections.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/ekmConnections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/ekmConnections`

Lists EkmConnections.

<h3 id="cloudkmsprojectslocationsekmconnectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*/locations/*`.|
|filter|query|string|false|Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|orderBy|query|string|false|Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|pageSize|query|integer|false|Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token.|
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
  "ekmConnections": [
    {
      "createTime": "string",
      "cryptoSpacePath": "string",
      "etag": "string",
      "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
      "name": "string",
      "serviceResolvers": [
        {
          "endpointFilter": "string",
          "hostname": "string",
          "serverCertificates": [
            {
              "issuer": "string",
              "notAfterTime": "string",
              "notBeforeTime": "string",
              "parsed": true,
              "rawDer": "string",
              "serialNumber": "string",
              "sha256Fingerprint": "string",
              "subject": "string",
              "subjectAlternativeDnsNames": [
                "string"
              ]
            }
          ],
          "serviceDirectoryService": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="cloudkmsprojectslocationsekmconnectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEkmConnectionsResponse](#schemalistekmconnectionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.ekmConnections.create

<a id="opIdcloudkms.projects.locations.ekmConnections.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/ekmConnections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cryptoSpacePath": "string",
    "etag": "string",
    "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
    "serviceResolvers": [
      {
        "endpointFilter": "string",
        "hostname": "string",
        "serverCertificates": [
          {
            "rawDer": "string"
          }
        ],
        "serviceDirectoryService": "string"
      }
    ]
  }'
```

`POST /v1/{parent}/ekmConnections`

Creates a new EkmConnection in a given Project and Location.

> Body parameter

```json
{
  "cryptoSpacePath": "string",
  "etag": "string",
  "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
  "serviceResolvers": [
    {
      "endpointFilter": "string",
      "hostname": "string",
      "serverCertificates": [
        {
          "rawDer": "string"
        }
      ],
      "serviceDirectoryService": "string"
    }
  ]
}
```

<h3 id="cloudkmsprojectslocationsekmconnectionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location associated with the EkmConnection, in the format `projects/*/locations/*`.|
|ekmConnectionId|query|string|false|Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.|
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
|body|body|[EkmConnection](#schemaekmconnection)|false|none|
|» cryptoSpacePath|body|string|false|Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.|
|» etag|body|string|false|Optional. Etag of the currently stored EkmConnection.|
|» keyManagementMode|body|string|false|Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.|
|» serviceResolvers|body|[[ServiceResolver](#schemaserviceresolver)]|false|A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» keyManagementMode|KEY_MANAGEMENT_MODE_UNSPECIFIED|
|» keyManagementMode|MANUAL|
|» keyManagementMode|CLOUD_KMS|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "cryptoSpacePath": "string",
  "etag": "string",
  "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
  "name": "string",
  "serviceResolvers": [
    {
      "endpointFilter": "string",
      "hostname": "string",
      "serverCertificates": [
        {
          "issuer": "string",
          "notAfterTime": "string",
          "notBeforeTime": "string",
          "parsed": true,
          "rawDer": "string",
          "serialNumber": "string",
          "sha256Fingerprint": "string",
          "subject": "string",
          "subjectAlternativeDnsNames": [
            "string"
          ]
        }
      ],
      "serviceDirectoryService": "string"
    }
  ]
}
```

<h3 id="cloudkmsprojectslocationsekmconnectionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EkmConnection](#schemaekmconnection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.list

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/importJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/importJobs`

Lists ImportJobs.

<h3 id="cloudkmsprojectslocationskeyringsimportjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`.|
|filter|query|string|false|Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|orderBy|query|string|false|Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|pageSize|query|integer|false|Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.|
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
  "importJobs": [
    {
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
      "expireEventTime": "string",
      "expireTime": "string",
      "generateTime": "string",
      "importMethod": "IMPORT_METHOD_UNSPECIFIED",
      "name": "string",
      "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
      "publicKey": {
        "pem": "string"
      },
      "state": "IMPORT_JOB_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListImportJobsResponse](#schemalistimportjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.create

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/importJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "importMethod": "IMPORT_METHOD_UNSPECIFIED",
    "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/importJobs`

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

> Body parameter

```json
{
  "importMethod": "IMPORT_METHOD_UNSPECIFIED",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the KeyRing associated with the ImportJobs.|
|importJobId|query|string|false|Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`|
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
|body|body|[ImportJob](#schemaimportjob)|false|none|
|» importMethod|body|string|false|Required. Immutable. The wrapping method to be used for incoming key material.|
|» protectionLevel|body|string|false|Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» importMethod|IMPORT_METHOD_UNSPECIFIED|
|» importMethod|RSA_OAEP_3072_SHA1_AES_256|
|» importMethod|RSA_OAEP_4096_SHA1_AES_256|
|» importMethod|RSA_OAEP_3072_SHA256_AES_256|
|» importMethod|RSA_OAEP_4096_SHA256_AES_256|
|» importMethod|RSA_OAEP_3072_SHA256|
|» importMethod|RSA_OAEP_4096_SHA256|
|» protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|» protectionLevel|SOFTWARE|
|» protectionLevel|HSM|
|» protectionLevel|EXTERNAL|
|» protectionLevel|EXTERNAL_VPC|

> Example responses

> 200 Response

```json
{
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
  "expireEventTime": "string",
  "expireTime": "string",
  "generateTime": "string",
  "importMethod": "IMPORT_METHOD_UNSPECIFIED",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "publicKey": {
    "pem": "string"
  },
  "state": "IMPORT_JOB_STATE_UNSPECIFIED"
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ImportJob](#schemaimportjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.list

<a id="opIdcloudkms.projects.locations.keyRings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keyRings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/keyRings`

Lists KeyRings.

<h3 id="cloudkmsprojectslocationskeyringslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`.|
|filter|query|string|false|Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|orderBy|query|string|false|Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).|
|pageSize|query|integer|false|Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.|
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
  "keyRings": [
    {
      "createTime": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="cloudkmsprojectslocationskeyringslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListKeyRingsResponse](#schemalistkeyringsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.create

<a id="opIdcloudkms.projects.locations.keyRings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keyRings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{parent}/keyRings`

Create a new KeyRing in a given Project and Location.

> Body parameter

```json
{}
```

<h3 id="cloudkmsprojectslocationskeyringscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`.|
|keyRingId|query|string|false|Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`|
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
|body|body|[KeyRing](#schemakeyring)|false|none|

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
  "name": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[KeyRing](#schemakeyring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.getIamPolicy

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="cloudkmsprojectslocationskeyringsimportjobsgetiampolicy-parameters">Parameters</h3>

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="cloudkmsprojectslocationskeyringsimportjobsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.setIamPolicy

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
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
    },
    "updateMask": "string"
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobssetiampolicy-parameters">Parameters</h3>

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
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="cloudkmsprojectslocationskeyringsimportjobssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

## cloudkms.projects.locations.keyRings.importJobs.testIamPermissions

<a id="opIdcloudkms.projects.locations.keyRings.importJobs.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
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

`POST /v1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudkmsprojectslocationskeyringsimportjobstestiampermissions-parameters">Parameters</h3>

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

<h3 id="cloudkmsprojectslocationskeyringsimportjobstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloudkms ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloudkms )
</aside>

# Schemas

<h2 id="tocS_AsymmetricDecryptRequest">AsymmetricDecryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemaasymmetricdecryptrequest"></a>
<a id="schema_AsymmetricDecryptRequest"></a>
<a id="tocSasymmetricdecryptrequest"></a>
<a id="tocsasymmetricdecryptrequest"></a>

```json
{
  "ciphertext": "string",
  "ciphertextCrc32c": "string"
}
```

Request message for KeyManagementService.AsymmetricDecrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphertext|string(byte)|false|none|Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP.|
|ciphertextCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_AsymmetricDecryptResponse">AsymmetricDecryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasymmetricdecryptresponse"></a>
<a id="schema_AsymmetricDecryptResponse"></a>
<a id="tocSasymmetricdecryptresponse"></a>
<a id="tocsasymmetricdecryptresponse"></a>

```json
{
  "plaintext": "string",
  "plaintextCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedCiphertextCrc32c": true
}
```

Response message for KeyManagementService.AsymmetricDecrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plaintext|string(byte)|false|none|The decrypted data originally encrypted with the matching public key.|
|plaintextCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used in decryption.|
|verifiedCiphertextCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_AsymmetricSignRequest">AsymmetricSignRequest</h2>
<!-- backwards compatibility -->
<a id="schemaasymmetricsignrequest"></a>
<a id="schema_AsymmetricSignRequest"></a>
<a id="tocSasymmetricsignrequest"></a>
<a id="tocsasymmetricsignrequest"></a>

```json
{
  "data": "string",
  "dataCrc32c": "string",
  "digest": {
    "sha256": "string",
    "sha384": "string",
    "sha512": "string"
  },
  "digestCrc32c": "string"
}
```

Request message for KeyManagementService.AsymmetricSign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.|
|dataCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|digest|[Digest](#schemadigest)|false|none|Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm. This field may not be supplied if AsymmetricSignRequest.data is supplied.|
|digestCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_AsymmetricSignResponse">AsymmetricSignResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasymmetricsignresponse"></a>
<a id="schema_AsymmetricSignResponse"></a>
<a id="tocSasymmetricsignresponse"></a>
<a id="tocsasymmetricsignresponse"></a>

```json
{
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "signature": "string",
  "signatureCrc32c": "string",
  "verifiedDataCrc32c": true,
  "verifiedDigestCrc32c": true
}
```

Response message for KeyManagementService.AsymmetricSign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used for signing.|
|signature|string(byte)|false|none|The created signature.|
|signatureCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|verifiedDataCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.|
|verifiedDigestCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

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

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "issuer": "string",
  "notAfterTime": "string",
  "notBeforeTime": "string",
  "parsed": true,
  "rawDer": "string",
  "serialNumber": "string",
  "sha256Fingerprint": "string",
  "subject": "string",
  "subjectAlternativeDnsNames": [
    "string"
  ]
}
```

A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|false|read-only|Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.|
|notAfterTime|string(google-datetime)|false|read-only|Output only. The certificate is not valid after this time. Only present if parsed is true.|
|notBeforeTime|string(google-datetime)|false|read-only|Output only. The certificate is not valid before this time. Only present if parsed is true.|
|parsed|boolean|false|read-only|Output only. True if the certificate was parsed successfully.|
|rawDer|string(byte)|false|none|Required. The raw certificate bytes in DER format.|
|serialNumber|string|false|read-only|Output only. The certificate serial number as a hex string. Only present if parsed is true.|
|sha256Fingerprint|string|false|read-only|Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.|
|subject|string|false|read-only|Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.|
|subjectAlternativeDnsNames|[string]|false|read-only|Output only. The subject Alternative DNS names. Only present if parsed is true.|

<h2 id="tocS_CertificateChains">CertificateChains</h2>
<!-- backwards compatibility -->
<a id="schemacertificatechains"></a>
<a id="schema_CertificateChains"></a>
<a id="tocScertificatechains"></a>
<a id="tocscertificatechains"></a>

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

<h2 id="tocS_CryptoKey">CryptoKey</h2>
<!-- backwards compatibility -->
<a id="schemacryptokey"></a>
<a id="schema_CryptoKey"></a>
<a id="tocScryptokey"></a>
<a id="tocscryptokey"></a>

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
|primary|[CryptoKeyVersion](#schemacryptokeyversion)|false|none|Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey's primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.|
|purpose|string|false|none|Immutable. The immutable purpose of this CryptoKey.|
|rotationPeriod|string(google-duration)|false|none|next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.|
|versionTemplate|[CryptoKeyVersionTemplate](#schemacryptokeyversiontemplate)|false|none|A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|CRYPTO_KEY_PURPOSE_UNSPECIFIED|
|purpose|ENCRYPT_DECRYPT|
|purpose|ASYMMETRIC_SIGN|
|purpose|ASYMMETRIC_DECRYPT|
|purpose|MAC|

<h2 id="tocS_CryptoKeyVersion">CryptoKeyVersion</h2>
<!-- backwards compatibility -->
<a id="schemacryptokeyversion"></a>
<a id="schema_CryptoKeyVersion"></a>
<a id="tocScryptokeyversion"></a>
<a id="tocscryptokeyversion"></a>

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
|attestation|[KeyOperationAttestation](#schemakeyoperationattestation)|false|none|Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this CryptoKeyVersion was created.|
|destroyEventTime|string(google-datetime)|false|read-only|Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.|
|destroyTime|string(google-datetime)|false|read-only|Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.|
|externalDestructionFailureReason|string|false|read-only|Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.|
|externalProtectionLevelOptions|[ExternalProtectionLevelOptions](#schemaexternalprotectionleveloptions)|false|none|ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.|
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

<h2 id="tocS_CryptoKeyVersionTemplate">CryptoKeyVersionTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacryptokeyversiontemplate"></a>
<a id="schema_CryptoKeyVersionTemplate"></a>
<a id="tocScryptokeyversiontemplate"></a>
<a id="tocscryptokeyversiontemplate"></a>

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

<h2 id="tocS_DecryptRequest">DecryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecryptrequest"></a>
<a id="schema_DecryptRequest"></a>
<a id="tocSdecryptrequest"></a>
<a id="tocsdecryptrequest"></a>

```json
{
  "additionalAuthenticatedData": "string",
  "additionalAuthenticatedDataCrc32c": "string",
  "ciphertext": "string",
  "ciphertextCrc32c": "string"
}
```

Request message for KeyManagementService.Decrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalAuthenticatedData|string(byte)|false|none|Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data.|
|additionalAuthenticatedDataCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|ciphertext|string(byte)|false|none|Required. The encrypted data originally returned in EncryptResponse.ciphertext.|
|ciphertextCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_DecryptResponse">DecryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecryptresponse"></a>
<a id="schema_DecryptResponse"></a>
<a id="tocSdecryptresponse"></a>
<a id="tocsdecryptresponse"></a>

```json
{
  "plaintext": "string",
  "plaintextCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "usedPrimary": true
}
```

Response message for KeyManagementService.Decrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plaintext|string(byte)|false|none|The decrypted data originally supplied in EncryptRequest.plaintext.|
|plaintextCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used in decryption.|
|usedPrimary|boolean|false|none|Whether the Decryption was performed using the primary key version.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_DestroyCryptoKeyVersionRequest">DestroyCryptoKeyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadestroycryptokeyversionrequest"></a>
<a id="schema_DestroyCryptoKeyVersionRequest"></a>
<a id="tocSdestroycryptokeyversionrequest"></a>
<a id="tocsdestroycryptokeyversionrequest"></a>

```json
{}
```

Request message for KeyManagementService.DestroyCryptoKeyVersion.

<h2 id="tocS_Digest">Digest</h2>
<!-- backwards compatibility -->
<a id="schemadigest"></a>
<a id="schema_Digest"></a>
<a id="tocSdigest"></a>
<a id="tocsdigest"></a>

```json
{
  "sha256": "string",
  "sha384": "string",
  "sha512": "string"
}
```

A Digest holds a cryptographic message digest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256|string(byte)|false|none|A message digest produced with the SHA-256 algorithm.|
|sha384|string(byte)|false|none|A message digest produced with the SHA-384 algorithm.|
|sha512|string(byte)|false|none|A message digest produced with the SHA-512 algorithm.|

<h2 id="tocS_EkmConfig">EkmConfig</h2>
<!-- backwards compatibility -->
<a id="schemaekmconfig"></a>
<a id="schema_EkmConfig"></a>
<a id="tocSekmconfig"></a>
<a id="tocsekmconfig"></a>

```json
{
  "defaultEkmConnection": "string",
  "name": "string"
}
```

An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultEkmConnection|string|false|none|Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default.|
|name|string|false|read-only|Output only. The resource name for the EkmConfig in the format `projects/*/locations/*/ekmConfig`.|

<h2 id="tocS_EkmConnection">EkmConnection</h2>
<!-- backwards compatibility -->
<a id="schemaekmconnection"></a>
<a id="schema_EkmConnection"></a>
<a id="tocSekmconnection"></a>
<a id="tocsekmconnection"></a>

```json
{
  "createTime": "string",
  "cryptoSpacePath": "string",
  "etag": "string",
  "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
  "name": "string",
  "serviceResolvers": [
    {
      "endpointFilter": "string",
      "hostname": "string",
      "serverCertificates": [
        {
          "issuer": "string",
          "notAfterTime": "string",
          "notBeforeTime": "string",
          "parsed": true,
          "rawDer": "string",
          "serialNumber": "string",
          "sha256Fingerprint": "string",
          "subject": "string",
          "subjectAlternativeDnsNames": [
            "string"
          ]
        }
      ],
      "serviceDirectoryService": "string"
    }
  ]
}
```

An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the EkmConnection was created.|
|cryptoSpacePath|string|false|none|Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.|
|etag|string|false|none|Optional. Etag of the currently stored EkmConnection.|
|keyManagementMode|string|false|none|Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.|
|name|string|false|read-only|Output only. The resource name for the EkmConnection in the format `projects/*/locations/*/ekmConnections/*`.|
|serviceResolvers|[[ServiceResolver](#schemaserviceresolver)]|false|none|A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|keyManagementMode|KEY_MANAGEMENT_MODE_UNSPECIFIED|
|keyManagementMode|MANUAL|
|keyManagementMode|CLOUD_KMS|

<h2 id="tocS_EncryptRequest">EncryptRequest</h2>
<!-- backwards compatibility -->
<a id="schemaencryptrequest"></a>
<a id="schema_EncryptRequest"></a>
<a id="tocSencryptrequest"></a>
<a id="tocsencryptrequest"></a>

```json
{
  "additionalAuthenticatedData": "string",
  "additionalAuthenticatedDataCrc32c": "string",
  "plaintext": "string",
  "plaintextCrc32c": "string"
}
```

Request message for KeyManagementService.Encrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalAuthenticatedData|string(byte)|false|none|Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.|
|additionalAuthenticatedDataCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|plaintext|string(byte)|false|none|Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.|
|plaintextCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_EncryptResponse">EncryptResponse</h2>
<!-- backwards compatibility -->
<a id="schemaencryptresponse"></a>
<a id="schema_EncryptResponse"></a>
<a id="tocSencryptresponse"></a>
<a id="tocsencryptresponse"></a>

```json
{
  "ciphertext": "string",
  "ciphertextCrc32c": "string",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedAdditionalAuthenticatedDataCrc32c": true,
  "verifiedPlaintextCrc32c": true
}
```

Response message for KeyManagementService.Encrypt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphertext|string(byte)|false|none|The encrypted data.|
|ciphertextCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|name|string|false|none|The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used in encryption.|
|verifiedAdditionalAuthenticatedDataCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.|
|verifiedPlaintextCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

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

<h2 id="tocS_ExternalProtectionLevelOptions">ExternalProtectionLevelOptions</h2>
<!-- backwards compatibility -->
<a id="schemaexternalprotectionleveloptions"></a>
<a id="schema_ExternalProtectionLevelOptions"></a>
<a id="tocSexternalprotectionleveloptions"></a>
<a id="tocsexternalprotectionleveloptions"></a>

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

<h2 id="tocS_GenerateRandomBytesRequest">GenerateRandomBytesRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneraterandombytesrequest"></a>
<a id="schema_GenerateRandomBytesRequest"></a>
<a id="tocSgeneraterandombytesrequest"></a>
<a id="tocsgeneraterandombytesrequest"></a>

```json
{
  "lengthBytes": 0,
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

Request message for KeyManagementService.GenerateRandomBytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lengthBytes|integer(int32)|false|none|The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.|
|protectionLevel|string|false|none|The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_GenerateRandomBytesResponse">GenerateRandomBytesResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneraterandombytesresponse"></a>
<a id="schema_GenerateRandomBytesResponse"></a>
<a id="tocSgeneraterandombytesresponse"></a>
<a id="tocsgeneraterandombytesresponse"></a>

```json
{
  "data": "string",
  "dataCrc32c": "string"
}
```

Response message for KeyManagementService.GenerateRandomBytes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|The generated data.|
|dataCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_ImportCryptoKeyVersionRequest">ImportCryptoKeyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportcryptokeyversionrequest"></a>
<a id="schema_ImportCryptoKeyVersionRequest"></a>
<a id="tocSimportcryptokeyversionrequest"></a>
<a id="tocsimportcryptokeyversionrequest"></a>

```json
{
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "cryptoKeyVersion": "string",
  "importJob": "string",
  "rsaAesWrappedKey": "string",
  "wrappedKey": "string"
}
```

Request message for KeyManagementService.ImportCryptoKeyVersion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.|
|cryptoKeyVersion|string|false|none|Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.|
|importJob|string|false|none|Required. The name of the ImportJob that was used to wrap this key material.|
|rsaAesWrappedKey|string(byte)|false|none|Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.|
|wrappedKey|string(byte)|false|none|Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.|

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

<h2 id="tocS_ImportJob">ImportJob</h2>
<!-- backwards compatibility -->
<a id="schemaimportjob"></a>
<a id="schema_ImportJob"></a>
<a id="tocSimportjob"></a>
<a id="tocsimportjob"></a>

```json
{
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
  "expireEventTime": "string",
  "expireTime": "string",
  "generateTime": "string",
  "importMethod": "IMPORT_METHOD_UNSPECIFIED",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "publicKey": {
    "pem": "string"
  },
  "state": "IMPORT_JOB_STATE_UNSPECIFIED"
}
```

An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[KeyOperationAttestation](#schemakeyoperationattestation)|false|none|Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this ImportJob was created.|
|expireEventTime|string(google-datetime)|false|read-only|Output only. The time this ImportJob expired. Only present if state is EXPIRED.|
|expireTime|string(google-datetime)|false|read-only|Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.|
|generateTime|string(google-datetime)|false|read-only|Output only. The time this ImportJob's key material was generated.|
|importMethod|string|false|none|Required. Immutable. The wrapping method to be used for incoming key material.|
|name|string|false|read-only|Output only. The resource name for this ImportJob in the format `projects/*/locations/*/keyRings/*/importJobs/*`.|
|protectionLevel|string|false|none|Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.|
|publicKey|[WrappingPublicKey](#schemawrappingpublickey)|false|none|Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE.|
|state|string|false|read-only|Output only. The current state of the ImportJob, indicating if it can be used.|

#### Enumerated Values

|Property|Value|
|---|---|
|importMethod|IMPORT_METHOD_UNSPECIFIED|
|importMethod|RSA_OAEP_3072_SHA1_AES_256|
|importMethod|RSA_OAEP_4096_SHA1_AES_256|
|importMethod|RSA_OAEP_3072_SHA256_AES_256|
|importMethod|RSA_OAEP_4096_SHA256_AES_256|
|importMethod|RSA_OAEP_3072_SHA256|
|importMethod|RSA_OAEP_4096_SHA256|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|
|state|IMPORT_JOB_STATE_UNSPECIFIED|
|state|PENDING_GENERATION|
|state|ACTIVE|
|state|EXPIRED|

<h2 id="tocS_KeyOperationAttestation">KeyOperationAttestation</h2>
<!-- backwards compatibility -->
<a id="schemakeyoperationattestation"></a>
<a id="schema_KeyOperationAttestation"></a>
<a id="tocSkeyoperationattestation"></a>
<a id="tocskeyoperationattestation"></a>

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
|certChains|[CertificateChains](#schemacertificatechains)|false|none|Output only. The certificate chains needed to validate the attestation|
|content|string(byte)|false|read-only|Output only. The attestation data provided by the HSM when the key operation was performed.|
|format|string|false|read-only|Output only. The format of the attestation data.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|ATTESTATION_FORMAT_UNSPECIFIED|
|format|CAVIUM_V1_COMPRESSED|
|format|CAVIUM_V2_COMPRESSED|

<h2 id="tocS_KeyRing">KeyRing</h2>
<!-- backwards compatibility -->
<a id="schemakeyring"></a>
<a id="schema_KeyRing"></a>
<a id="tocSkeyring"></a>
<a id="tocskeyring"></a>

```json
{
  "createTime": "string",
  "name": "string"
}
```

A KeyRing is a toplevel logical grouping of CryptoKeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this KeyRing was created.|
|name|string|false|read-only|Output only. The resource name for the KeyRing in the format `projects/*/locations/*/keyRings/*`.|

<h2 id="tocS_ListCryptoKeyVersionsResponse">ListCryptoKeyVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcryptokeyversionsresponse"></a>
<a id="schema_ListCryptoKeyVersionsResponse"></a>
<a id="tocSlistcryptokeyversionsresponse"></a>
<a id="tocslistcryptokeyversionsresponse"></a>

```json
{
  "cryptoKeyVersions": [
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
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for KeyManagementService.ListCryptoKeyVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKeyVersions|[[CryptoKeyVersion](#schemacryptokeyversion)]|false|none|The list of CryptoKeyVersions.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.|
|totalSize|integer(int32)|false|none|The total number of CryptoKeyVersions that matched the query.|

<h2 id="tocS_ListCryptoKeysResponse">ListCryptoKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcryptokeysresponse"></a>
<a id="schema_ListCryptoKeysResponse"></a>
<a id="tocSlistcryptokeysresponse"></a>
<a id="tocslistcryptokeysresponse"></a>

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
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for KeyManagementService.ListCryptoKeys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKeys|[[CryptoKey](#schemacryptokey)]|false|none|The list of CryptoKeys.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.|
|totalSize|integer(int32)|false|none|The total number of CryptoKeys that matched the query.|

<h2 id="tocS_ListEkmConnectionsResponse">ListEkmConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistekmconnectionsresponse"></a>
<a id="schema_ListEkmConnectionsResponse"></a>
<a id="tocSlistekmconnectionsresponse"></a>
<a id="tocslistekmconnectionsresponse"></a>

```json
{
  "ekmConnections": [
    {
      "createTime": "string",
      "cryptoSpacePath": "string",
      "etag": "string",
      "keyManagementMode": "KEY_MANAGEMENT_MODE_UNSPECIFIED",
      "name": "string",
      "serviceResolvers": [
        {
          "endpointFilter": "string",
          "hostname": "string",
          "serverCertificates": [
            {
              "issuer": "string",
              "notAfterTime": "string",
              "notBeforeTime": "string",
              "parsed": true,
              "rawDer": "string",
              "serialNumber": "string",
              "sha256Fingerprint": "string",
              "subject": "string",
              "subjectAlternativeDnsNames": [
                "string"
              ]
            }
          ],
          "serviceDirectoryService": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for EkmService.ListEkmConnections.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ekmConnections|[[EkmConnection](#schemaekmconnection)]|false|none|The list of EkmConnections.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results.|
|totalSize|integer(int32)|false|none|The total number of EkmConnections that matched the query.|

<h2 id="tocS_ListImportJobsResponse">ListImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportjobsresponse"></a>
<a id="schema_ListImportJobsResponse"></a>
<a id="tocSlistimportjobsresponse"></a>
<a id="tocslistimportjobsresponse"></a>

```json
{
  "importJobs": [
    {
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
      "expireEventTime": "string",
      "expireTime": "string",
      "generateTime": "string",
      "importMethod": "IMPORT_METHOD_UNSPECIFIED",
      "name": "string",
      "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
      "publicKey": {
        "pem": "string"
      },
      "state": "IMPORT_JOB_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for KeyManagementService.ListImportJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importJobs|[[ImportJob](#schemaimportjob)]|false|none|The list of ImportJobs.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.|
|totalSize|integer(int32)|false|none|The total number of ImportJobs that matched the query.|

<h2 id="tocS_ListKeyRingsResponse">ListKeyRingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeyringsresponse"></a>
<a id="schema_ListKeyRingsResponse"></a>
<a id="tocSlistkeyringsresponse"></a>
<a id="tocslistkeyringsresponse"></a>

```json
{
  "keyRings": [
    {
      "createTime": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for KeyManagementService.ListKeyRings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyRings|[[KeyRing](#schemakeyring)]|false|none|The list of KeyRings.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.|
|totalSize|integer(int32)|false|none|The total number of KeyRings that matched the query.|

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

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "ekmAvailable": true,
  "hsmAvailable": true
}
```

Cloud KMS metadata for the given google.cloud.location.Location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ekmAvailable|boolean|false|none|Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location.|
|hsmAvailable|boolean|false|none|Indicates whether CryptoKeys with protection_level HSM can be created in this location.|

<h2 id="tocS_MacSignRequest">MacSignRequest</h2>
<!-- backwards compatibility -->
<a id="schemamacsignrequest"></a>
<a id="schema_MacSignRequest"></a>
<a id="tocSmacsignrequest"></a>
<a id="tocsmacsignrequest"></a>

```json
{
  "data": "string",
  "dataCrc32c": "string"
}
```

Request message for KeyManagementService.MacSign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm.|
|dataCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_MacSignResponse">MacSignResponse</h2>
<!-- backwards compatibility -->
<a id="schemamacsignresponse"></a>
<a id="schema_MacSignResponse"></a>
<a id="tocSmacsignresponse"></a>
<a id="tocsmacsignresponse"></a>

```json
{
  "mac": "string",
  "macCrc32c": "string",
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "verifiedDataCrc32c": true
}
```

Response message for KeyManagementService.MacSign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mac|string(byte)|false|none|The created signature.|
|macCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|name|string|false|none|The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used for signing.|
|verifiedDataCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_MacVerifyRequest">MacVerifyRequest</h2>
<!-- backwards compatibility -->
<a id="schemamacverifyrequest"></a>
<a id="schema_MacVerifyRequest"></a>
<a id="tocSmacverifyrequest"></a>
<a id="tocsmacverifyrequest"></a>

```json
{
  "data": "string",
  "dataCrc32c": "string",
  "mac": "string",
  "macCrc32c": "string"
}
```

Request message for KeyManagementService.MacVerify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|Required. The data used previously as a MacSignRequest.data to generate the MAC tag.|
|dataCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|
|mac|string(byte)|false|none|Required. The signature to verify.|
|macCrc32c|string(int64)|false|none|Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.|

<h2 id="tocS_MacVerifyResponse">MacVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemamacverifyresponse"></a>
<a id="schema_MacVerifyResponse"></a>
<a id="tocSmacverifyresponse"></a>
<a id="tocsmacverifyresponse"></a>

```json
{
  "name": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED",
  "success": true,
  "verifiedDataCrc32c": true,
  "verifiedMacCrc32c": true,
  "verifiedSuccessIntegrity": true
}
```

Response message for KeyManagementService.MacVerify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion used for verification.|
|success|boolean|false|none|This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful.|
|verifiedDataCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.|
|verifiedMacCrc32c|boolean|false|none|Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries.|
|verifiedSuccessIntegrity|boolean|false|none|Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries.|

#### Enumerated Values

|Property|Value|
|---|---|
|protectionLevel|PROTECTION_LEVEL_UNSPECIFIED|
|protectionLevel|SOFTWARE|
|protectionLevel|HSM|
|protectionLevel|EXTERNAL|
|protectionLevel|EXTERNAL_VPC|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PublicKey">PublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapublickey"></a>
<a id="schema_PublicKey"></a>
<a id="tocSpublickey"></a>
<a id="tocspublickey"></a>

```json
{
  "algorithm": "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
  "name": "string",
  "pem": "string",
  "pemCrc32c": "string",
  "protectionLevel": "PROTECTION_LEVEL_UNSPECIFIED"
}
```

The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|The Algorithm associated with this key.|
|name|string|false|none|The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta.|
|pem|string|false|none|The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).|
|pemCrc32c|string(int64)|false|none|Integrity verification field. A CRC32C checksum of the returned PublicKey.pem. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta.|
|protectionLevel|string|false|none|The ProtectionLevel of the CryptoKeyVersion public key.|

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

<h2 id="tocS_RestoreCryptoKeyVersionRequest">RestoreCryptoKeyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestorecryptokeyversionrequest"></a>
<a id="schema_RestoreCryptoKeyVersionRequest"></a>
<a id="tocSrestorecryptokeyversionrequest"></a>
<a id="tocsrestorecryptokeyversionrequest"></a>

```json
{}
```

Request message for KeyManagementService.RestoreCryptoKeyVersion.

<h2 id="tocS_ServiceResolver">ServiceResolver</h2>
<!-- backwards compatibility -->
<a id="schemaserviceresolver"></a>
<a id="schema_ServiceResolver"></a>
<a id="tocSserviceresolver"></a>
<a id="tocsserviceresolver"></a>

```json
{
  "endpointFilter": "string",
  "hostname": "string",
  "serverCertificates": [
    {
      "issuer": "string",
      "notAfterTime": "string",
      "notBeforeTime": "string",
      "parsed": true,
      "rawDer": "string",
      "serialNumber": "string",
      "sha256Fingerprint": "string",
      "subject": "string",
      "subjectAlternativeDnsNames": [
        "string"
      ]
    }
  ],
  "serviceDirectoryService": "string"
}
```

A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointFilter|string|false|none|Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.|
|hostname|string|false|none|Required. The hostname of the EKM replica used at TLS and HTTP layers.|
|serverCertificates|[[Certificate](#schemacertificate)]|false|none|Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.|
|serviceDirectoryService|string|false|none|Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/*/locations/*/namespaces/*/services/*`.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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

<h2 id="tocS_UpdateCryptoKeyPrimaryVersionRequest">UpdateCryptoKeyPrimaryVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecryptokeyprimaryversionrequest"></a>
<a id="schema_UpdateCryptoKeyPrimaryVersionRequest"></a>
<a id="tocSupdatecryptokeyprimaryversionrequest"></a>
<a id="tocsupdatecryptokeyprimaryversionrequest"></a>

```json
{
  "cryptoKeyVersionId": "string"
}
```

Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKeyVersionId|string|false|none|Required. The id of the child CryptoKeyVersion to use as primary.|

<h2 id="tocS_VerifyConnectivityResponse">VerifyConnectivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyconnectivityresponse"></a>
<a id="schema_VerifyConnectivityResponse"></a>
<a id="tocSverifyconnectivityresponse"></a>
<a id="tocsverifyconnectivityresponse"></a>

```json
{}
```

Response message for EkmService.VerifyConnectivity.

<h2 id="tocS_WrappingPublicKey">WrappingPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemawrappingpublickey"></a>
<a id="schema_WrappingPublicKey"></a>
<a id="tocSwrappingpublickey"></a>
<a id="tocswrappingpublickey"></a>

```json
{
  "pem": "string"
}
```

The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pem|string|false|none|The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).|
