<h1 id="iotvas-api">IoTVAS API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IOTVAS API enables you to discover IoT/Connected devices in the network and provides 
    detailed real-time risk analysis, including firmware vulnerability analysis without requiring the user to upload the firmware file.
    Please visit the [signup page](https://iotvas-api.firmalyzer.com/portal/signup) to create an API key.
    IoTVAS API can be easily integrated with vulnerability scanning and network port scanner tools. For example,
    we have also released the [IOTVAS NSE script](https://github.com/firmalyzer/iotvas-nmap) that turns the nmap port scanner 
    to a IoT/connected device discovery and real-time risk assessment tool. For more infromation on IoTVAS and other 
    solutions please visit [Firmalyzer web site](https://www.firmalyzer.com).

Base URLs:

* <a href="https://api.apis.guru/api/v1">https://api.apis.guru/api/v1</a>

# Authentication

* API Key (api-key-header)
    - Parameter Name: **x-api-key**, in: header.

<h1 id="iotvas-api-device">device</h1>

## Detect iot device by service banners and mac address

<a id="opIddetect_device"></a>

> Code samples

```bash
curl https://example.com/device/detect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}" \
  -d '{
    "ftp_banner": "AXIS P3346 Fixed Dome Network Camera 5.20 (2017) ready.",
    "hostname": "",
    "http_response": "",
    "https_response": "",
    "nic_mac": "",
    "snmp_sysdescr": "",
    "snmp_sysoid": "",
    "telnet_banner": "",
    "upnp_response": ""
  }'
```

`POST /device/detect`

Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information

> Body parameter

```json
{
  "ftp_banner": "AXIS P3346 Fixed Dome Network Camera 5.20 (2017) ready.",
  "hostname": "",
  "http_response": "",
  "https_response": "",
  "nic_mac": "",
  "snmp_sysdescr": "",
  "snmp_sysoid": "",
  "telnet_banner": "",
  "upnp_response": ""
}
```

<h3 id="detect-iot-device-by-service-banners-and-mac-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceFeatures](#schemadevicefeatures)|true|none|
|» ftp_banner|body|string|false|none|
|» hostname|body|string|false|none|
|» http_response|body|string|false|none|
|» https_response|body|string|false|none|
|» nic_mac|body|string|false|none|
|» snmp_sysdescr|body|string|false|none|
|» snmp_sysoid|body|string|false|none|
|» telnet_banner|body|string|false|none|
|» upnp_response|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "cve_list": [
    {
      "cve_id": "string",
      "cvss": 0
    }
  ],
  "device_type": "string",
  "firmware_info": {
    "download_url": "string",
    "name": "string",
    "release_date": "string",
    "sha2": "string",
    "version": "string"
  },
  "firmware_version": "string",
  "is_discontinued": true,
  "latest_firmware_info": {
    "download_url": "string",
    "name": "string",
    "release_date": "string",
    "sha2": "string",
    "version": "string"
  },
  "manufacturer": "string",
  "model_name": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="detect-iot-device-by-service-banners-and-mac-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeviceInfo](#schemadeviceinfo)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

<h1 id="iotvas-api-firmware">firmware</h1>

## Get default accounts and password hashes of a firmware

<a id="opIdget_accounts"></a>

> Code samples

```bash
curl https://example.com/firmware/af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175/accounts \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/accounts`

<h3 id="get-default-accounts-and-password-hashes-of-a-firmware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "gid": 0,
    "hash_algorithm": "string",
    "home_dir": "string",
    "name": "string",
    "pwd_hash": "string",
    "shell": "string",
    "uid": 0
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-default-accounts-and-password-hashes-of-a-firmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-default-accounts-and-password-hashes-of-a-firmware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DefaultAccount](#schemadefaultaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get default OS configuration issues of a device firmware

<a id="opIdget_config_issues"></a>

> Code samples

```bash
curl https://example.com/firmware/aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c/config-issues \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/config-issues`

<h3 id="get-default-os-configuration-issues-of-a-device-firmware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "config_file": "string",
    "issues": [
      "string"
    ],
    "service_name": "string",
    "suggestions": [
      "string"
    ]
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-default-os-configuration-issues-of-a-device-firmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-default-os-configuration-issues-of-a-device-firmware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConfigIssue](#schemaconfigissue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get expired digital certificates embedded in a device firmware

<a id="opIdget_expired_certs"></a>

> Code samples

```bash
curl https://example.com/firmware/ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e/expired-certs \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/expired-certs`

<h3 id="get-expired-digital-certificates-embedded-in-a-device-firmware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "file_hash": "string",
    "file_name": "string",
    "public_key": {
      "algorithm": "string",
      "bits": 0
    },
    "subject_name": "string",
    "thumb_print": "string",
    "valid_from": "string",
    "valid_to": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-expired-digital-certificates-embedded-in-a-device-firmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-expired-digital-certificates-embedded-in-a-device-firmware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExpiredCert](#schemaexpiredcert)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get private crypto keys embedded in a device firmware

<a id="opIdget_private_keys"></a>

> Code samples

```bash
curl https://example.com/firmware/90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b/private-keys \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/private-keys`

<h3 id="get-private-crypto-keys-embedded-in-a-device-firmware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "algorithm": "string",
    "bits": 0,
    "file_hash": "string",
    "file_name": "string",
    "pem_type": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-private-crypto-keys-embedded-in-a-device-firmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-private-crypto-keys-embedded-in-a-device-firmware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CryptoKey](#schemacryptokey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get iot device firmware risk analysis

<a id="opIdget_risk"></a>

> Code samples

```bash
curl https://example.com/firmware/af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175/risk \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/risk`

<h3 id="get-iot-device-firmware-risk-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
{
  "risk_summary": {
    "client_tools_risk": "string",
    "crypto_risk": "string",
    "kernel_risk": "string",
    "net_services_risk": "string"
  },
  "vulnerable_components": [
    {
      "category": "string",
      "cvss_max": 0,
      "name": "string",
      "version": "string",
      "vulnerabilities": [
        {
          "cve_id": "string",
          "cvss": 0
        }
      ]
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-iot-device-firmware-risk-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FirmwareRisk](#schemafirmwarerisk)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware

<a id="opIdget_weak_certs"></a>

> Code samples

```bash
curl https://example.com/firmware/52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c/weak-certs \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/weak-certs`

<h3 id="get-certificates-with-weak-fingerprinting-algorithms-that-are-mebedded-in-a-device-firmware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "file_hash": "string",
    "file_name": "string",
    "sign_algorithm": "string",
    "subject_name": "string",
    "thumb_print": "string",
    "valid_from": "string",
    "valid_to": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-certificates-with-weak-fingerprinting-algorithms-that-are-mebedded-in-a-device-firmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-certificates-with-weak-fingerprinting-algorithms-that-are-mebedded-in-a-device-firmware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WeakCert](#schemaweakcert)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

## Get weak crypto keys with short length

<a id="opIdget_weak_keys"></a>

> Code samples

```bash
curl https://example.com/firmware/852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e/weak-keys \
  -H 'Accept: application/json' \
  -H "x-api-key: ${API_KEY}"
```

`GET /firmware/{firmware_hash}/weak-keys`

<h3 id="get-weak-crypto-keys-with-short-length-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firmware_hash|path|string|true|SHA2 hash of device firmware|

> Example responses

> 200 Response

```json
[
  {
    "algorithm": "string",
    "bits": 0,
    "file_hash": "string",
    "file_name": "string",
    "pem_type": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="get-weak-crypto-keys-with-short-length-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-weak-crypto-keys-with-short-length-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CryptoKey](#schemacryptokey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key-header
</aside>

# Schemas

<h2 id="tocS_ConfigIssue">ConfigIssue</h2>
<!-- backwards compatibility -->
<a id="schemaconfigissue"></a>
<a id="schema_ConfigIssue"></a>
<a id="tocSconfigissue"></a>
<a id="tocsconfigissue"></a>

```json
{
  "config_file": "string",
  "issues": [
    "string"
  ],
  "service_name": "string",
  "suggestions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_file|string|false|none|none|
|issues|[string]|false|none|none|
|service_name|string \| null|false|none|none|
|suggestions|[string]|false|none|none|

<h2 id="tocS_CryptoKey">CryptoKey</h2>
<!-- backwards compatibility -->
<a id="schemacryptokey"></a>
<a id="schema_CryptoKey"></a>
<a id="tocScryptokey"></a>
<a id="tocscryptokey"></a>

```json
{
  "algorithm": "string",
  "bits": 0,
  "file_hash": "string",
  "file_name": "string",
  "pem_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string \| null|false|none|none|
|bits|integer \| null|false|none|none|
|file_hash|string|false|none|none|
|file_name|string|false|none|none|
|pem_type|string \| null|false|none|none|

<h2 id="tocS_DefaultAccount">DefaultAccount</h2>
<!-- backwards compatibility -->
<a id="schemadefaultaccount"></a>
<a id="schema_DefaultAccount"></a>
<a id="tocSdefaultaccount"></a>
<a id="tocsdefaultaccount"></a>

```json
{
  "gid": 0,
  "hash_algorithm": "string",
  "home_dir": "string",
  "name": "string",
  "pwd_hash": "string",
  "shell": "string",
  "uid": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gid|integer \| null|false|none|none|
|hash_algorithm|string \| null|false|none|none|
|home_dir|string \| null|false|none|none|
|name|string|false|none|none|
|pwd_hash|string \| null|false|none|none|
|shell|string \| null|false|none|none|
|uid|integer \| null|false|none|none|

<h2 id="tocS_DeviceFeatures">DeviceFeatures</h2>
<!-- backwards compatibility -->
<a id="schemadevicefeatures"></a>
<a id="schema_DeviceFeatures"></a>
<a id="tocSdevicefeatures"></a>
<a id="tocsdevicefeatures"></a>

```json
{
  "ftp_banner": "AXIS P3346 Fixed Dome Network Camera 5.20 (2017) ready.",
  "hostname": "",
  "http_response": "",
  "https_response": "",
  "nic_mac": "",
  "snmp_sysdescr": "",
  "snmp_sysoid": "",
  "telnet_banner": "",
  "upnp_response": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ftp_banner|string|false|none|none|
|hostname|string|false|none|none|
|http_response|string|false|none|none|
|https_response|string|false|none|none|
|nic_mac|string|false|none|none|
|snmp_sysdescr|string|false|none|none|
|snmp_sysoid|string|false|none|none|
|telnet_banner|string|false|none|none|
|upnp_response|string|false|none|none|

<h2 id="tocS_DeviceInfo">DeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinfo"></a>
<a id="schema_DeviceInfo"></a>
<a id="tocSdeviceinfo"></a>
<a id="tocsdeviceinfo"></a>

```json
{
  "cve_list": [
    {
      "cve_id": "string",
      "cvss": 0
    }
  ],
  "device_type": "string",
  "firmware_info": {
    "download_url": "string",
    "name": "string",
    "release_date": "string",
    "sha2": "string",
    "version": "string"
  },
  "firmware_version": "string",
  "is_discontinued": true,
  "latest_firmware_info": {
    "download_url": "string",
    "name": "string",
    "release_date": "string",
    "sha2": "string",
    "version": "string"
  },
  "manufacturer": "string",
  "model_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve_list|[[Vulnerability](#schemavulnerability)]|false|none|none|
|device_type|string \| null|false|none|none|
|firmware_info|object \| null|false|none|none|
|firmware_version|string \| null|false|none|none|
|is_discontinued|boolean \| null|false|none|none|
|latest_firmware_info|object \| null|false|none|none|
|manufacturer|string \| null|false|none|none|
|model_name|string \| null|false|none|none|

<h2 id="tocS_ExpiredCert">ExpiredCert</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredcert"></a>
<a id="schema_ExpiredCert"></a>
<a id="tocSexpiredcert"></a>
<a id="tocsexpiredcert"></a>

```json
{
  "file_hash": "string",
  "file_name": "string",
  "public_key": {
    "algorithm": "string",
    "bits": 0
  },
  "subject_name": "string",
  "thumb_print": "string",
  "valid_from": "string",
  "valid_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|false|none|none|
|file_name|string|false|none|none|
|public_key|object \| null|false|none|none|
|subject_name|string \| null|false|none|none|
|thumb_print|string \| null|false|none|none|
|valid_from|string \| null|false|none|none|
|valid_to|string \| null|false|none|none|

<h2 id="tocS_FirmwareInfo">FirmwareInfo</h2>
<!-- backwards compatibility -->
<a id="schemafirmwareinfo"></a>
<a id="schema_FirmwareInfo"></a>
<a id="tocSfirmwareinfo"></a>
<a id="tocsfirmwareinfo"></a>

```json
{
  "download_url": "string",
  "name": "string",
  "release_date": "string",
  "sha2": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_url|string \| null|false|none|none|
|name|string \| null|false|none|none|
|release_date|string \| null|false|none|none|
|sha2|string \| null|false|none|none|
|version|string \| null|false|none|none|

<h2 id="tocS_FirmwareRisk">FirmwareRisk</h2>
<!-- backwards compatibility -->
<a id="schemafirmwarerisk"></a>
<a id="schema_FirmwareRisk"></a>
<a id="tocSfirmwarerisk"></a>
<a id="tocsfirmwarerisk"></a>

```json
{
  "risk_summary": {
    "client_tools_risk": "string",
    "crypto_risk": "string",
    "kernel_risk": "string",
    "net_services_risk": "string"
  },
  "vulnerable_components": [
    {
      "category": "string",
      "cvss_max": 0,
      "name": "string",
      "version": "string",
      "vulnerabilities": [
        {
          "cve_id": "string",
          "cvss": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|risk_summary|object|false|none|none|
|vulnerable_components|[[VulnerableComponent](#schemavulnerablecomponent)]|false|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_PublicKey">PublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapublickey"></a>
<a id="schema_PublicKey"></a>
<a id="tocSpublickey"></a>
<a id="tocspublickey"></a>

```json
{
  "algorithm": "string",
  "bits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|bits|integer \| null|false|none|none|

<h2 id="tocS_RiskSummary">RiskSummary</h2>
<!-- backwards compatibility -->
<a id="schemarisksummary"></a>
<a id="schema_RiskSummary"></a>
<a id="tocSrisksummary"></a>
<a id="tocsrisksummary"></a>

```json
{
  "client_tools_risk": "string",
  "crypto_risk": "string",
  "kernel_risk": "string",
  "net_services_risk": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_tools_risk|string|false|none|none|
|crypto_risk|string|false|none|none|
|kernel_risk|string|false|none|none|
|net_services_risk|string|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Vulnerability">Vulnerability</h2>
<!-- backwards compatibility -->
<a id="schemavulnerability"></a>
<a id="schema_Vulnerability"></a>
<a id="tocSvulnerability"></a>
<a id="tocsvulnerability"></a>

```json
{
  "cve_id": "string",
  "cvss": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve_id|string|false|none|none|
|cvss|number|false|none|none|

<h2 id="tocS_VulnerableComponent">VulnerableComponent</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablecomponent"></a>
<a id="schema_VulnerableComponent"></a>
<a id="tocSvulnerablecomponent"></a>
<a id="tocsvulnerablecomponent"></a>

```json
{
  "category": "string",
  "cvss_max": 0,
  "name": "string",
  "version": "string",
  "vulnerabilities": [
    {
      "cve_id": "string",
      "cvss": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|cvss_max|number|false|none|none|
|name|string|false|none|none|
|version|string|false|none|none|
|vulnerabilities|[[Vulnerability](#schemavulnerability)]|false|none|none|

<h2 id="tocS_WeakCert">WeakCert</h2>
<!-- backwards compatibility -->
<a id="schemaweakcert"></a>
<a id="schema_WeakCert"></a>
<a id="tocSweakcert"></a>
<a id="tocsweakcert"></a>

```json
{
  "file_hash": "string",
  "file_name": "string",
  "sign_algorithm": "string",
  "subject_name": "string",
  "thumb_print": "string",
  "valid_from": "string",
  "valid_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_hash|string|false|none|none|
|file_name|string|false|none|none|
|sign_algorithm|string \| null|false|none|none|
|subject_name|string \| null|false|none|none|
|thumb_print|string \| null|false|none|none|
|valid_from|string \| null|false|none|none|
|valid_to|string \| null|false|none|none|
