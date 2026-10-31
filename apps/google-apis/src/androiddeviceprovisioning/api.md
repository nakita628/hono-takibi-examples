<h1 id="android-device-provisioning-partner-api">Android Device Provisioning Partner API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Automates Android zero-touch enrollment for device resellers, customers, and EMMs.

Base URLs:

* <a href="https://androiddeviceprovisioning.googleapis.com/">https://androiddeviceprovisioning.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/zero-touch/">External documentation</a>

<h1 id="android-device-provisioning-partner-api-customers">customers</h1>

## androiddeviceprovisioning.customers.list

<a id="opIdandroiddeviceprovisioning.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/customers \
  -H 'Accept: application/json'
```

`GET /v1/customers`

Lists the user's customer accounts.

<h3 id="androiddeviceprovisioningcustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).|
|pageToken|query|string|false|A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator|
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
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androiddeviceprovisioningcustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomerListCustomersResponse](#schemacustomerlistcustomersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.configurations.delete

<a id="opIdandroiddeviceprovisioning.customers.configurations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.

<h3 id="androiddeviceprovisioningcustomersconfigurationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.|
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

<h3 id="androiddeviceprovisioningcustomersconfigurationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.configurations.patch

<a id="opIdandroiddeviceprovisioning.customers.configurations.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "companyName": "string",
    "configurationName": "string",
    "contactEmail": "string",
    "contactPhone": "string",
    "customMessage": "string",
    "dpcExtras": "string",
    "dpcResourcePath": "string",
    "isDefault": true
  }'
```

`PATCH /v1/{name}`

Updates a configuration's field values.

> Body parameter

```json
{
  "companyName": "string",
  "configurationName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "customMessage": "string",
  "dpcExtras": "string",
  "dpcResourcePath": "string",
  "isDefault": true
}
```

<h3 id="androiddeviceprovisioningcustomersconfigurationspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.|
|updateMask|query|string|false|Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.|
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
|body|body|[Configuration](#schemaconfiguration)|false|none|
|» companyName|body|string|false|Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.|
|» configurationName|body|string|false|Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.|
|» contactEmail|body|string|false|Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.|
|» contactPhone|body|string|false|Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.|
|» customMessage|body|string|false|A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.|
|» dpcExtras|body|string|false|The JSON-formatted EMM provisioning extras that are passed to the DPC.|
|» dpcResourcePath|body|string|false|Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.|
|» isDefault|body|boolean|false|Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.|

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
  "companyName": "string",
  "configurationId": "string",
  "configurationName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "customMessage": "string",
  "dpcExtras": "string",
  "dpcResourcePath": "string",
  "isDefault": true,
  "name": "string"
}
```

<h3 id="androiddeviceprovisioningcustomersconfigurationspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Configuration](#schemaconfiguration)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.configurations.list

<a id="opIdandroiddeviceprovisioning.customers.configurations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/configurations \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/configurations`

Lists a customer's configurations.

<h3 id="androiddeviceprovisioningcustomersconfigurationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.|
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
  "configurations": [
    {
      "companyName": "string",
      "configurationId": "string",
      "configurationName": "string",
      "contactEmail": "string",
      "contactPhone": "string",
      "customMessage": "string",
      "dpcExtras": "string",
      "dpcResourcePath": "string",
      "isDefault": true,
      "name": "string"
    }
  ]
}
```

<h3 id="androiddeviceprovisioningcustomersconfigurationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomerListConfigurationsResponse](#schemacustomerlistconfigurationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.configurations.create

<a id="opIdandroiddeviceprovisioning.customers.configurations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "companyName": "string",
    "configurationName": "string",
    "contactEmail": "string",
    "contactPhone": "string",
    "customMessage": "string",
    "dpcExtras": "string",
    "dpcResourcePath": "string",
    "isDefault": true
  }'
```

`POST /v1/{parent}/configurations`

Creates a new configuration. Once created, a customer can apply the configuration to devices.

> Body parameter

```json
{
  "companyName": "string",
  "configurationName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "customMessage": "string",
  "dpcExtras": "string",
  "dpcResourcePath": "string",
  "isDefault": true
}
```

<h3 id="androiddeviceprovisioningcustomersconfigurationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator|
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
|body|body|[Configuration](#schemaconfiguration)|false|none|
|» companyName|body|string|false|Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.|
|» configurationName|body|string|false|Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.|
|» contactEmail|body|string|false|Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.|
|» contactPhone|body|string|false|Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.|
|» customMessage|body|string|false|A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.|
|» dpcExtras|body|string|false|The JSON-formatted EMM provisioning extras that are passed to the DPC.|
|» dpcResourcePath|body|string|false|Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.|
|» isDefault|body|boolean|false|Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.|

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
  "companyName": "string",
  "configurationId": "string",
  "configurationName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "customMessage": "string",
  "dpcExtras": "string",
  "dpcResourcePath": "string",
  "isDefault": true,
  "name": "string"
}
```

<h3 id="androiddeviceprovisioningcustomersconfigurationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Configuration](#schemaconfiguration)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.devices.list

<a id="opIdandroiddeviceprovisioning.customers.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/devices`

Lists a customer's devices.

<h3 id="androiddeviceprovisioningcustomersdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.|
|pageSize|query|string|false|The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.|
|pageToken|query|string|false|A token specifying which result page to return.|
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
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androiddeviceprovisioningcustomersdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomerListDevicesResponse](#schemacustomerlistdevicesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.devices.applyConfiguration

<a id="opIdandroiddeviceprovisioning.customers.devices.applyConfiguration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices:applyConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configuration": "string",
    "device": {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      }
    }
  }'
```

`POST /v1/{parent}/devices:applyConfiguration`

Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.

> Body parameter

```json
{
  "configuration": "string",
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

<h3 id="androiddeviceprovisioningcustomersdevicesapplyconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.|
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
|body|body|[CustomerApplyConfigurationRequest](#schemacustomerapplyconfigurationrequest)|false|none|
|» configuration|body|string|false|Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.|
|» device|body|[DeviceReference](#schemadevicereference)|false|Required. The device the configuration is applied to. There are custom validations in ApplyConfigurationRequestValidator|

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

<h3 id="androiddeviceprovisioningcustomersdevicesapplyconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.devices.removeConfiguration

<a id="opIdandroiddeviceprovisioning.customers.devices.removeConfiguration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices:removeConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "device": {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      }
    }
  }'
```

`POST /v1/{parent}/devices:removeConfiguration`

Removes a configuration from device.

> Body parameter

```json
{
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

<h3 id="androiddeviceprovisioningcustomersdevicesremoveconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.|
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
|body|body|[CustomerRemoveConfigurationRequest](#schemacustomerremoveconfigurationrequest)|false|none|
|» device|body|[DeviceReference](#schemadevicereference)|false|Required. The device to remove the configuration from. There are custom validations in RemoveConfigurationRequestValidator|

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

<h3 id="androiddeviceprovisioningcustomersdevicesremoveconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.devices.unclaim

<a id="opIdandroiddeviceprovisioning.customers.devices.unclaim"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices:unclaim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "device": {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      }
    }
  }'
```

`POST /v1/{parent}/devices:unclaim`

Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.

> Body parameter

```json
{
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

<h3 id="androiddeviceprovisioningcustomersdevicesunclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.|
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
|body|body|[CustomerUnclaimDeviceRequest](#schemacustomerunclaimdevicerequest)|false|none|
|» device|body|[DeviceReference](#schemadevicereference)|false|Required. The device to unclaim. There are custom validations in UnclaimDeviceRequestValidator.|

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

<h3 id="androiddeviceprovisioningcustomersdevicesunclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.customers.dpcs.list

<a id="opIdandroiddeviceprovisioning.customers.dpcs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dpcs \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/dpcs`

Lists the DPCs (device policy controllers) that support zero-touch enrollment.

<h3 id="androiddeviceprovisioningcustomersdpcslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.|
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
  "dpcs": [
    {
      "dpcName": "string",
      "name": "string",
      "packageName": "string"
    }
  ]
}
```

<h3 id="androiddeviceprovisioningcustomersdpcslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomerListDpcsResponse](#schemacustomerlistdpcsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="android-device-provisioning-partner-api-partners">partners</h1>

## androiddeviceprovisioning.partners.devices.metadata

<a id="opIdandroiddeviceprovisioning.partners.devices.metadata"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices/string/metadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "deviceMetadata": {
      "entries": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata`

Updates reseller metadata associated with the device. Android devices only.

> Body parameter

```json
{
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metadataOwnerId|path|string|true|Required. The owner of the newly set metadata. Set this to the partner ID.|
|deviceId|path|string|true|Required. The ID of the device.|
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
|body|body|[UpdateDeviceMetadataRequest](#schemaupdatedevicemetadatarequest)|false|none|
|» deviceMetadata|body|[DeviceMetadata](#schemadevicemetadata)|false|Required. The metadata to attach to the device.|

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
  "entries": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeviceMetadata](#schemadevicemetadata)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.customers.list

<a id="opIdandroiddeviceprovisioning.partners.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/customers \
  -H 'Accept: application/json'
```

`GET /v1/partners/{partnerId}/customers`

Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.

<h3 id="androiddeviceprovisioningpartnerscustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
|pageSize|query|integer|false|The maximum number of results to be returned. If not specified or 0, all the records are returned.|
|pageToken|query|string|false|A token identifying a page of results returned by the server.|
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
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="androiddeviceprovisioningpartnerscustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCustomersResponse](#schemalistcustomersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.claim

<a id="opIdandroiddeviceprovisioning.partners.devices.claim"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "customerId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "deviceMetadata": {
      "entries": {
        "property1": "string",
        "property2": "string"
      }
    },
    "googleWorkspaceCustomerId": "string",
    "preProvisioningToken": "string",
    "sectionType": "SECTION_TYPE_UNSPECIFIED",
    "simlockProfileId": "string"
  }'
```

`POST /v1/partners/{partnerId}/devices:claim`

Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.

> Body parameter

```json
{
  "customerId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  },
  "googleWorkspaceCustomerId": "string",
  "preProvisioningToken": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "simlockProfileId": "string"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
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
|body|body|[ClaimDeviceRequest](#schemaclaimdevicerequest)|false|none|
|» customerId|body|string(int64)|false|The ID of the customer for whom the device is being claimed.|
|» deviceIdentifier|body|[DeviceIdentifier](#schemadeviceidentifier)|false|Required. Required. The device identifier of the device to claim.|
|» deviceMetadata|body|[DeviceMetadata](#schemadevicemetadata)|false|Optional. The metadata to attach to the device.|
|» googleWorkspaceCustomerId|body|string|false|The Google Workspace customer ID.|
|» preProvisioningToken|body|string|false|Optional. Must and can only be set for Chrome OS devices.|
|» sectionType|body|string|false|Required. The section type of the device's provisioning record.|
|» simlockProfileId|body|string(int64)|false|Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» sectionType|SECTION_TYPE_UNSPECIFIED|
|» sectionType|SECTION_TYPE_SIM_LOCK|
|» sectionType|SECTION_TYPE_ZERO_TOUCH|

> Example responses

> 200 Response

```json
{
  "deviceId": "string",
  "deviceName": "string"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClaimDeviceResponse](#schemaclaimdeviceresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.claimAsync

<a id="opIdandroiddeviceprovisioning.partners.devices.claimAsync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:claimAsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "claims": [
      {
        "customerId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "deviceMetadata": {
          "entries": {
            "property1": "string",
            "property2": "string"
          }
        },
        "googleWorkspaceCustomerId": "string",
        "preProvisioningToken": "string",
        "sectionType": "SECTION_TYPE_UNSPECIFIED",
        "simlockProfileId": "string"
      }
    ]
  }'
```

`POST /v1/partners/{partnerId}/devices:claimAsync`

Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

> Body parameter

```json
{
  "claims": [
    {
      "customerId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "googleWorkspaceCustomerId": "string",
      "preProvisioningToken": "string",
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "simlockProfileId": "string"
    }
  ]
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesclaimasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
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
|body|body|[ClaimDevicesRequest](#schemaclaimdevicesrequest)|false|none|
|» claims|body|[[PartnerClaim](#schemapartnerclaim)]|false|Required. A list of device claims.|

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

<h3 id="androiddeviceprovisioningpartnersdevicesclaimasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.findByIdentifier

<a id="opIdandroiddeviceprovisioning.partners.devices.findByIdentifier"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:findByIdentifier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "limit": "string",
    "pageToken": "string"
  }'
```

`POST /v1/partners/{partnerId}/devices:findByIdentifier`

Finds devices by hardware identifiers, such as IMEI.

> Body parameter

```json
{
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "limit": "string",
  "pageToken": "string"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesfindbyidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
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
|body|body|[FindDevicesByDeviceIdentifierRequest](#schemafinddevicesbydeviceidentifierrequest)|false|none|
|» deviceIdentifier|body|[DeviceIdentifier](#schemadeviceidentifier)|false|Required. Required. The device identifier to search for.|
|» limit|body|string(int64)|false|Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.|
|» pageToken|body|string|false|A token specifying which result page to return.|

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
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesfindbyidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FindDevicesByDeviceIdentifierResponse](#schemafinddevicesbydeviceidentifierresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.findByOwner

<a id="opIdandroiddeviceprovisioning.partners.devices.findByOwner"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:findByOwner \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "customerId": [
      "string"
    ],
    "googleWorkspaceCustomerId": [
      "string"
    ],
    "limit": "string",
    "pageToken": "string",
    "sectionType": "SECTION_TYPE_UNSPECIFIED"
  }'
```

`POST /v1/partners/{partnerId}/devices:findByOwner`

Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.

> Body parameter

```json
{
  "customerId": [
    "string"
  ],
  "googleWorkspaceCustomerId": [
    "string"
  ],
  "limit": "string",
  "pageToken": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesfindbyowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
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
|body|body|[FindDevicesByOwnerRequest](#schemafinddevicesbyownerrequest)|false|none|
|» customerId|body|[string(int64)]|false|The list of customer IDs to search for.|
|» googleWorkspaceCustomerId|body|[string]|false|The list of IDs of Google Workspace accounts to search for.|
|» limit|body|string(int64)|false|Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.|
|» pageToken|body|string|false|A token specifying which result page to return.|
|» sectionType|body|string|false|Required. The section type of the device's provisioning record.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» sectionType|SECTION_TYPE_UNSPECIFIED|
|» sectionType|SECTION_TYPE_SIM_LOCK|
|» sectionType|SECTION_TYPE_ZERO_TOUCH|

> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesfindbyowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FindDevicesByOwnerResponse](#schemafinddevicesbyownerresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.unclaim

<a id="opIdandroiddeviceprovisioning.partners.devices.unclaim"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:unclaim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "sectionType": "SECTION_TYPE_UNSPECIFIED",
    "vacationModeDays": 0,
    "vacationModeExpireTime": "string"
  }'
```

`POST /v1/partners/{partnerId}/devices:unclaim`

Unclaims a device from a customer and removes it from zero-touch enrollment.

> Body parameter

```json
{
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "vacationModeDays": 0,
  "vacationModeExpireTime": "string"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesunclaim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The ID of the reseller partner.|
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
|body|body|[UnclaimDeviceRequest](#schemaunclaimdevicerequest)|false|none|
|» deviceId|body|string(int64)|false|Required. The device ID returned by `ClaimDevice`.|
|» deviceIdentifier|body|[DeviceIdentifier](#schemadeviceidentifier)|false|Required. The device identifier you used when you claimed this device.|
|» sectionType|body|string|false|Required. The section type of the device's provisioning record.|
|» vacationModeDays|body|integer(int32)|false|The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)|
|» vacationModeExpireTime|body|string(google-datetime)|false|The expiration time of the vacation unlock.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» sectionType|SECTION_TYPE_UNSPECIFIED|
|» sectionType|SECTION_TYPE_SIM_LOCK|
|» sectionType|SECTION_TYPE_ZERO_TOUCH|

> Example responses

> 200 Response

```json
{}
```

<h3 id="androiddeviceprovisioningpartnersdevicesunclaim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.unclaimAsync

<a id="opIdandroiddeviceprovisioning.partners.devices.unclaimAsync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:unclaimAsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "unclaims": [
      {
        "deviceId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "sectionType": "SECTION_TYPE_UNSPECIFIED",
        "vacationModeDays": 0,
        "vacationModeExpireTime": "string"
      }
    ]
  }'
```

`POST /v1/partners/{partnerId}/devices:unclaimAsync`

Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

> Body parameter

```json
{
  "unclaims": [
    {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "vacationModeDays": 0,
      "vacationModeExpireTime": "string"
    }
  ]
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesunclaimasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The reseller partner ID.|
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
|body|body|[UnclaimDevicesRequest](#schemaunclaimdevicesrequest)|false|none|
|» unclaims|body|[[PartnerUnclaim](#schemapartnerunclaim)]|false|Required. The list of devices to unclaim.|

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

<h3 id="androiddeviceprovisioningpartnersdevicesunclaimasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.updateMetadataAsync

<a id="opIdandroiddeviceprovisioning.partners.devices.updateMetadataAsync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/partners/string/devices:updateMetadataAsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "updates": [
      {
        "deviceId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "deviceMetadata": {
          "entries": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  }'
```

`POST /v1/partners/{partnerId}/devices:updateMetadataAsync`

Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.

> Body parameter

```json
{
  "updates": [
    {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesupdatemetadataasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partnerId|path|string|true|Required. The reseller partner ID.|
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
|body|body|[UpdateDeviceMetadataInBatchRequest](#schemaupdatedevicemetadatainbatchrequest)|false|none|
|» updates|body|[[UpdateMetadataArguments](#schemaupdatemetadataarguments)]|false|Required. The list of metadata updates.|

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

<h3 id="androiddeviceprovisioningpartnersdevicesupdatemetadataasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.devices.get

<a id="opIdandroiddeviceprovisioning.partners.devices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets a device.

<h3 id="androiddeviceprovisioningpartnersdevicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.|
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
  "claims": [
    {
      "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
      "googleWorkspaceCustomerId": "string",
      "ownerCompanyId": "string",
      "resellerId": "string",
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "vacationModeExpireTime": "string",
      "vacationModeStartTime": "string"
    }
  ],
  "configuration": "string",
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  },
  "name": "string"
}
```

<h3 id="androiddeviceprovisioningpartnersdevicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Device](#schemadevice)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.vendors.customers.list

<a id="opIdandroiddeviceprovisioning.partners.vendors.customers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customers \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/customers`

Lists the customers of the vendor.

<h3 id="androiddeviceprovisioningpartnersvendorscustomerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.|
|pageSize|query|integer|false|The maximum number of results to be returned.|
|pageToken|query|string|false|A token identifying a page of results returned by the server.|
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
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="androiddeviceprovisioningpartnersvendorscustomerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVendorCustomersResponse](#schemalistvendorcustomersresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.customers.create

<a id="opIdandroiddeviceprovisioning.partners.customers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "customer": {
      "adminEmails": [
        "string"
      ],
      "companyName": "string",
      "languageCode": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true
    }
  }'
```

`POST /v1/{parent}/customers`

Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.

> Body parameter

```json
{
  "customer": {
    "adminEmails": [
      "string"
    ],
    "companyName": "string",
    "languageCode": "string",
    "ownerEmails": [
      "string"
    ],
    "skipWelcomeEmail": true
  }
}
```

<h3 id="androiddeviceprovisioningpartnerscustomerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.|
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
|body|body|[CreateCustomerRequest](#schemacreatecustomerrequest)|false|none|
|» customer|body|[Company](#schemacompany)|false|Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that's associated with a Google Account. The values for `companyId` and `name` must be empty.|

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
  "adminEmails": [
    "string"
  ],
  "companyId": "string",
  "companyName": "string",
  "googleWorkspaceAccount": {
    "customerId": "string",
    "preProvisioningTokens": [
      "string"
    ]
  },
  "languageCode": "string",
  "name": "string",
  "ownerEmails": [
    "string"
  ],
  "skipWelcomeEmail": true,
  "termsStatus": "TERMS_STATUS_UNSPECIFIED"
}
```

<h3 id="androiddeviceprovisioningpartnerscustomerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Company](#schemacompany)|

<aside class="success">
This operation does not require authentication
</aside>

## androiddeviceprovisioning.partners.vendors.list

<a id="opIdandroiddeviceprovisioning.partners.vendors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/vendors \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/vendors`

Lists the vendors of the partner.

<h3 id="androiddeviceprovisioningpartnersvendorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name in the format `partners/[PARTNER_ID]`.|
|pageSize|query|integer|false|The maximum number of results to be returned.|
|pageToken|query|string|false|A token identifying a page of results returned by the server.|
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
  "totalSize": 0,
  "vendors": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ]
}
```

<h3 id="androiddeviceprovisioningpartnersvendorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVendorsResponse](#schemalistvendorsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ClaimDeviceRequest">ClaimDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdevicerequest"></a>
<a id="schema_ClaimDeviceRequest"></a>
<a id="tocSclaimdevicerequest"></a>
<a id="tocsclaimdevicerequest"></a>

```json
{
  "customerId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  },
  "googleWorkspaceCustomerId": "string",
  "preProvisioningToken": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "simlockProfileId": "string"
}
```

Request message to claim a device on behalf of a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string(int64)|false|none|The ID of the customer for whom the device is being claimed.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. Required. The device identifier of the device to claim.|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|Optional. The metadata to attach to the device.|
|googleWorkspaceCustomerId|string|false|none|The Google Workspace customer ID.|
|preProvisioningToken|string|false|none|Optional. Must and can only be set for Chrome OS devices.|
|sectionType|string|false|none|Required. The section type of the device's provisioning record.|
|simlockProfileId|string(int64)|false|none|Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_ClaimDeviceResponse">ClaimDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdeviceresponse"></a>
<a id="schema_ClaimDeviceResponse"></a>
<a id="tocSclaimdeviceresponse"></a>
<a id="tocsclaimdeviceresponse"></a>

```json
{
  "deviceId": "string",
  "deviceName": "string"
}
```

Response message containing device id of the claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|The device ID of the claimed device.|
|deviceName|string|false|none|The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.|

<h2 id="tocS_ClaimDevicesRequest">ClaimDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclaimdevicesrequest"></a>
<a id="schema_ClaimDevicesRequest"></a>
<a id="tocSclaimdevicesrequest"></a>
<a id="tocsclaimdevicesrequest"></a>

```json
{
  "claims": [
    {
      "customerId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "googleWorkspaceCustomerId": "string",
      "preProvisioningToken": "string",
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "simlockProfileId": "string"
    }
  ]
}
```

Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claims|[[PartnerClaim](#schemapartnerclaim)]|false|none|Required. A list of device claims.|

<h2 id="tocS_Company">Company</h2>
<!-- backwards compatibility -->
<a id="schemacompany"></a>
<a id="schema_Company"></a>
<a id="tocScompany"></a>
<a id="tocscompany"></a>

```json
{
  "adminEmails": [
    "string"
  ],
  "companyId": "string",
  "companyName": "string",
  "googleWorkspaceAccount": {
    "customerId": "string",
    "preProvisioningTokens": [
      "string"
    ]
  },
  "languageCode": "string",
  "name": "string",
  "ownerEmails": [
    "string"
  ],
  "skipWelcomeEmail": true,
  "termsStatus": "TERMS_STATUS_UNSPECIFIED"
}
```

A reseller, vendor, or customer in the zero-touch reseller and customer APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminEmails|[string]|false|none|Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.|
|companyId|string(int64)|false|read-only|Output only. The ID of the company. Assigned by the server.|
|companyName|string|false|none|Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.|
|googleWorkspaceAccount|[GoogleWorkspaceAccount](#schemagoogleworkspaceaccount)|false|none|Output only. The Google Workspace account associated with this customer. Only used for customer Companies.|
|languageCode|string|false|none|Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi)|
|name|string|false|read-only|Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server.|
|ownerEmails|[string]|false|none|Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.|
|skipWelcomeEmail|boolean|false|none|Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer.|
|termsStatus|string|false|read-only|Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.|

#### Enumerated Values

|Property|Value|
|---|---|
|termsStatus|TERMS_STATUS_UNSPECIFIED|
|termsStatus|TERMS_STATUS_NOT_ACCEPTED|
|termsStatus|TERMS_STATUS_ACCEPTED|
|termsStatus|TERMS_STATUS_STALE|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "companyName": "string",
  "configurationId": "string",
  "configurationName": "string",
  "contactEmail": "string",
  "contactPhone": "string",
  "customMessage": "string",
  "dpcExtras": "string",
  "dpcResourcePath": "string",
  "isDefault": true,
  "name": "string"
}
```

A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.|
|configurationId|string(int64)|false|read-only|Output only. The ID of the configuration. Assigned by the server.|
|configurationName|string|false|none|Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.|
|contactEmail|string|false|none|Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.|
|contactPhone|string|false|none|Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.|
|customMessage|string|false|none|A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.|
|dpcExtras|string|false|none|The JSON-formatted EMM provisioning extras that are passed to the DPC.|
|dpcResourcePath|string|false|none|Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.|
|isDefault|boolean|false|none|Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.|
|name|string|false|read-only|Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.|

<h2 id="tocS_CreateCustomerRequest">CreateCustomerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomerrequest"></a>
<a id="schema_CreateCustomerRequest"></a>
<a id="tocScreatecustomerrequest"></a>
<a id="tocscreatecustomerrequest"></a>

```json
{
  "customer": {
    "adminEmails": [
      "string"
    ],
    "companyId": "string",
    "companyName": "string",
    "googleWorkspaceAccount": {
      "customerId": "string",
      "preProvisioningTokens": [
        "string"
      ]
    },
    "languageCode": "string",
    "name": "string",
    "ownerEmails": [
      "string"
    ],
    "skipWelcomeEmail": true,
    "termsStatus": "TERMS_STATUS_UNSPECIFIED"
  }
}
```

Request message to create a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|[Company](#schemacompany)|false|none|Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that's associated with a Google Account. The values for `companyId` and `name` must be empty.|

<h2 id="tocS_CustomerApplyConfigurationRequest">CustomerApplyConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomerapplyconfigurationrequest"></a>
<a id="schema_CustomerApplyConfigurationRequest"></a>
<a id="tocScustomerapplyconfigurationrequest"></a>
<a id="tocscustomerapplyconfigurationrequest"></a>

```json
{
  "configuration": "string",
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

Request message for customer to assign a configuration to device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|string|false|none|Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.|
|device|[DeviceReference](#schemadevicereference)|false|none|Required. The device the configuration is applied to. There are custom validations in ApplyConfigurationRequestValidator|

<h2 id="tocS_CustomerListConfigurationsResponse">CustomerListConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlistconfigurationsresponse"></a>
<a id="schema_CustomerListConfigurationsResponse"></a>
<a id="tocScustomerlistconfigurationsresponse"></a>
<a id="tocscustomerlistconfigurationsresponse"></a>

```json
{
  "configurations": [
    {
      "companyName": "string",
      "configurationId": "string",
      "configurationName": "string",
      "contactEmail": "string",
      "contactPhone": "string",
      "customMessage": "string",
      "dpcExtras": "string",
      "dpcResourcePath": "string",
      "isDefault": true,
      "name": "string"
    }
  ]
}
```

Response message of customer's listing configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurations|[[Configuration](#schemaconfiguration)]|false|none|The configurations.|

<h2 id="tocS_CustomerListCustomersResponse">CustomerListCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlistcustomersresponse"></a>
<a id="schema_CustomerListCustomersResponse"></a>
<a id="tocScustomerlistcustomersresponse"></a>
<a id="tocscustomerlistcustomersresponse"></a>

```json
{
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing my customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customers|[[Company](#schemacompany)]|false|none|The customer accounts the calling user is a member of.|
|nextPageToken|string|false|none|A token used to access the next page of results. Omitted if no further results are available.|

<h2 id="tocS_CustomerListDevicesResponse">CustomerListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlistdevicesresponse"></a>
<a id="schema_CustomerListDevicesResponse"></a>
<a id="tocScustomerlistdevicesresponse"></a>
<a id="tocscustomerlistdevicesresponse"></a>

```json
{
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message of customer's liting devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|The customer's devices.|
|nextPageToken|string|false|none|A token used to access the next page of results. Omitted if no further results are available.|

<h2 id="tocS_CustomerListDpcsResponse">CustomerListDpcsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerlistdpcsresponse"></a>
<a id="schema_CustomerListDpcsResponse"></a>
<a id="tocScustomerlistdpcsresponse"></a>
<a id="tocscustomerlistdpcsresponse"></a>

```json
{
  "dpcs": [
    {
      "dpcName": "string",
      "name": "string",
      "packageName": "string"
    }
  ]
}
```

Response message of customer's listing DPCs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpcs|[[Dpc](#schemadpc)]|false|none|The list of DPCs available to the customer that support zero-touch enrollment.|

<h2 id="tocS_CustomerRemoveConfigurationRequest">CustomerRemoveConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomerremoveconfigurationrequest"></a>
<a id="schema_CustomerRemoveConfigurationRequest"></a>
<a id="tocScustomerremoveconfigurationrequest"></a>
<a id="tocscustomerremoveconfigurationrequest"></a>

```json
{
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

Request message for customer to remove the configuration from device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[DeviceReference](#schemadevicereference)|false|none|Required. The device to remove the configuration from. There are custom validations in RemoveConfigurationRequestValidator|

<h2 id="tocS_CustomerUnclaimDeviceRequest">CustomerUnclaimDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacustomerunclaimdevicerequest"></a>
<a id="schema_CustomerUnclaimDeviceRequest"></a>
<a id="tocScustomerunclaimdevicerequest"></a>
<a id="tocscustomerunclaimdevicerequest"></a>

```json
{
  "device": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    }
  }
}
```

Request message for customer to unclaim a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[DeviceReference](#schemadevicereference)|false|none|Required. The device to unclaim. There are custom validations in UnclaimDeviceRequestValidator.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "claims": [
    {
      "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
      "googleWorkspaceCustomerId": "string",
      "ownerCompanyId": "string",
      "resellerId": "string",
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "vacationModeExpireTime": "string",
      "vacationModeStartTime": "string"
    }
  ],
  "configuration": "string",
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  },
  "name": "string"
}
```

An Android or Chrome OS device registered for zero-touch enrollment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claims|[[DeviceClaim](#schemadeviceclaim)]|false|read-only|Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.|
|configuration|string|false|none|Not available to resellers.|
|deviceId|string(int64)|false|read-only|Output only. The ID of the device. Assigned by the server.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|The hardware IDs that identify a manufactured device. To learn more, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|The metadata attached to the device. Structured as key-value pairs. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).|
|name|string|false|read-only|Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.|

<h2 id="tocS_DeviceClaim">DeviceClaim</h2>
<!-- backwards compatibility -->
<a id="schemadeviceclaim"></a>
<a id="schema_DeviceClaim"></a>
<a id="tocSdeviceclaim"></a>
<a id="tocsdeviceclaim"></a>

```json
{
  "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
  "googleWorkspaceCustomerId": "string",
  "ownerCompanyId": "string",
  "resellerId": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "vacationModeExpireTime": "string",
  "vacationModeStartTime": "string"
}
```

A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalService|string|false|none|The Additional service registered for the device.|
|googleWorkspaceCustomerId|string|false|none|The ID of the Google Workspace account that owns the Chrome OS device.|
|ownerCompanyId|string(int64)|false|none|The ID of the Customer that purchased the device.|
|resellerId|string(int64)|false|none|The ID of the reseller that claimed the device.|
|sectionType|string|false|read-only|Output only. The type of claim made on the device.|
|vacationModeExpireTime|string(google-datetime)|false|none|The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'.|
|vacationModeStartTime|string(google-datetime)|false|none|The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'.|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalService|ADDITIONAL_SERVICE_UNSPECIFIED|
|additionalService|DEVICE_PROTECTION|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_DeviceIdentifier">DeviceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemadeviceidentifier"></a>
<a id="schema_DeviceIdentifier"></a>
<a id="tocSdeviceidentifier"></a>
<a id="tocsdeviceidentifier"></a>

```json
{
  "chromeOsAttestedDeviceId": "string",
  "deviceType": "DEVICE_TYPE_UNSPECIFIED",
  "imei": "string",
  "manufacturer": "string",
  "meid": "string",
  "model": "string",
  "serialNumber": "string"
}
```

Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromeOsAttestedDeviceId|string|false|none|An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices.|
|deviceType|string|false|none|The type of the device|
|imei|string|false|none|The device’s IMEI number. Validated on input.|
|manufacturer|string|false|none|The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).|
|meid|string|false|none|The device’s MEID number.|
|model|string|false|none|The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible).|
|serialNumber|string|false|none|The manufacturer's serial number for the device. This value might not be unique across different device models.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceType|DEVICE_TYPE_UNSPECIFIED|
|deviceType|DEVICE_TYPE_ANDROID|
|deviceType|DEVICE_TYPE_CHROME_OS|

<h2 id="tocS_DeviceMetadata">DeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadevicemetadata"></a>
<a id="schema_DeviceMetadata"></a>
<a id="tocSdevicemetadata"></a>
<a id="tocsdevicemetadata"></a>

```json
{
  "entries": {
    "property1": "string",
    "property2": "string"
  }
}
```

Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|object|false|none|Metadata entries recorded as key-value pairs.|

<h2 id="tocS_DeviceReference">DeviceReference</h2>
<!-- backwards compatibility -->
<a id="schemadevicereference"></a>
<a id="schema_DeviceReference"></a>
<a id="tocSdevicereference"></a>
<a id="tocsdevicereference"></a>

```json
{
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  }
}
```

A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|The ID of the device.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|The hardware IDs of the device.|

<h2 id="tocS_DevicesLongRunningOperationMetadata">DevicesLongRunningOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeviceslongrunningoperationmetadata"></a>
<a id="schema_DevicesLongRunningOperationMetadata"></a>
<a id="tocSdeviceslongrunningoperationmetadata"></a>
<a id="tocsdeviceslongrunningoperationmetadata"></a>

```json
{
  "devicesCount": 0,
  "processingStatus": "BATCH_PROCESS_STATUS_UNSPECIFIED",
  "progress": 0
}
```

Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicesCount|integer(int32)|false|none|The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates.|
|processingStatus|string|false|none|The processing status of the operation.|
|progress|integer(int32)|false|none|The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingStatus|BATCH_PROCESS_STATUS_UNSPECIFIED|
|processingStatus|BATCH_PROCESS_PENDING|
|processingStatus|BATCH_PROCESS_IN_PROGRESS|
|processingStatus|BATCH_PROCESS_PROCESSED|

<h2 id="tocS_DevicesLongRunningOperationResponse">DevicesLongRunningOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeviceslongrunningoperationresponse"></a>
<a id="schema_DevicesLongRunningOperationResponse"></a>
<a id="tocSdeviceslongrunningoperationresponse"></a>
<a id="tocsdeviceslongrunningoperationresponse"></a>

```json
{
  "perDeviceStatus": [
    {
      "claim": {
        "customerId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "deviceMetadata": {
          "entries": {
            "property1": "string",
            "property2": "string"
          }
        },
        "googleWorkspaceCustomerId": "string",
        "preProvisioningToken": "string",
        "sectionType": "SECTION_TYPE_UNSPECIFIED",
        "simlockProfileId": "string"
      },
      "result": {
        "deviceId": "string",
        "errorIdentifier": "string",
        "errorMessage": "string",
        "status": "SINGLE_DEVICE_STATUS_UNSPECIFIED"
      },
      "unclaim": {
        "deviceId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "sectionType": "SECTION_TYPE_UNSPECIFIED",
        "vacationModeDays": 0,
        "vacationModeExpireTime": "string"
      },
      "updateMetadata": {
        "deviceId": "string",
        "deviceIdentifier": {
          "chromeOsAttestedDeviceId": "string",
          "deviceType": "DEVICE_TYPE_UNSPECIFIED",
          "imei": "string",
          "manufacturer": "string",
          "meid": "string",
          "model": "string",
          "serialNumber": "string"
        },
        "deviceMetadata": {
          "entries": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  ],
  "successCount": 0
}
```

Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perDeviceStatus|[[OperationPerDevice](#schemaoperationperdevice)]|false|none|The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request.|
|successCount|integer(int32)|false|none|A summary of how many items in the operation the server processed successfully. Updated as the operation progresses.|

<h2 id="tocS_Dpc">Dpc</h2>
<!-- backwards compatibility -->
<a id="schemadpc"></a>
<a id="schema_Dpc"></a>
<a id="tocSdpc"></a>
<a id="tocsdpc"></a>

```json
{
  "dpcName": "string",
  "name": "string",
  "packageName": "string"
}
```

An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpcName|string|false|read-only|Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface.|
|name|string|false|read-only|Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`).|
|packageName|string|false|read-only|Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier.|

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

<h2 id="tocS_FindDevicesByDeviceIdentifierRequest">FindDevicesByDeviceIdentifierRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinddevicesbydeviceidentifierrequest"></a>
<a id="schema_FindDevicesByDeviceIdentifierRequest"></a>
<a id="tocSfinddevicesbydeviceidentifierrequest"></a>
<a id="tocsfinddevicesbydeviceidentifierrequest"></a>

```json
{
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "limit": "string",
  "pageToken": "string"
}
```

Request to find devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. Required. The device identifier to search for.|
|limit|string(int64)|false|none|Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.|
|pageToken|string|false|none|A token specifying which result page to return.|

<h2 id="tocS_FindDevicesByDeviceIdentifierResponse">FindDevicesByDeviceIdentifierResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinddevicesbydeviceidentifierresponse"></a>
<a id="schema_FindDevicesByDeviceIdentifierResponse"></a>
<a id="tocSfinddevicesbydeviceidentifierresponse"></a>
<a id="tocsfinddevicesbydeviceidentifierresponse"></a>

```json
{
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response containing found devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|Found devices.|
|nextPageToken|string|false|none|A token used to access the next page of results. Omitted if no further results are available.|
|totalSize|integer(int32)|false|none|The total count of items in the list irrespective of pagination.|

<h2 id="tocS_FindDevicesByOwnerRequest">FindDevicesByOwnerRequest</h2>
<!-- backwards compatibility -->
<a id="schemafinddevicesbyownerrequest"></a>
<a id="schema_FindDevicesByOwnerRequest"></a>
<a id="tocSfinddevicesbyownerrequest"></a>
<a id="tocsfinddevicesbyownerrequest"></a>

```json
{
  "customerId": [
    "string"
  ],
  "googleWorkspaceCustomerId": [
    "string"
  ],
  "limit": "string",
  "pageToken": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED"
}
```

Request to find devices by customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|[string(int64)]|false|none|The list of customer IDs to search for.|
|googleWorkspaceCustomerId|[string]|false|none|The list of IDs of Google Workspace accounts to search for.|
|limit|string(int64)|false|none|Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.|
|pageToken|string|false|none|A token specifying which result page to return.|
|sectionType|string|false|none|Required. The section type of the device's provisioning record.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_FindDevicesByOwnerResponse">FindDevicesByOwnerResponse</h2>
<!-- backwards compatibility -->
<a id="schemafinddevicesbyownerresponse"></a>
<a id="schema_FindDevicesByOwnerResponse"></a>
<a id="tocSfinddevicesbyownerresponse"></a>
<a id="tocsfinddevicesbyownerresponse"></a>

```json
{
  "devices": [
    {
      "claims": [
        {
          "additionalService": "ADDITIONAL_SERVICE_UNSPECIFIED",
          "googleWorkspaceCustomerId": "string",
          "ownerCompanyId": "string",
          "resellerId": "string",
          "sectionType": "SECTION_TYPE_UNSPECIFIED",
          "vacationModeExpireTime": "string",
          "vacationModeStartTime": "string"
        }
      ],
      "configuration": "string",
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response containing found devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|The customer's devices.|
|nextPageToken|string|false|none|A token used to access the next page of results. Omitted if no further results are available.|
|totalSize|integer(int32)|false|none|The total count of items in the list irrespective of pagination.|

<h2 id="tocS_GoogleWorkspaceAccount">GoogleWorkspaceAccount</h2>
<!-- backwards compatibility -->
<a id="schemagoogleworkspaceaccount"></a>
<a id="schema_GoogleWorkspaceAccount"></a>
<a id="tocSgoogleworkspaceaccount"></a>
<a id="tocsgoogleworkspaceaccount"></a>

```json
{
  "customerId": "string",
  "preProvisioningTokens": [
    "string"
  ]
}
```

A Google Workspace customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string|false|none|Required. The customer ID.|
|preProvisioningTokens|[string]|false|read-only|Output only. The pre-provisioning tokens previously used to claim devices.|

<h2 id="tocS_ListCustomersResponse">ListCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomersresponse"></a>
<a id="schema_ListCustomersResponse"></a>
<a id="tocSlistcustomersresponse"></a>
<a id="tocslistcustomersresponse"></a>

```json
{
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message of all customers related to this partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customers|[[Company](#schemacompany)]|false|none|List of customers related to this reseller partner.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Omitted if no further results are available.|
|totalSize|integer(int32)|false|none|The total count of items in the list irrespective of pagination.|

<h2 id="tocS_ListVendorCustomersResponse">ListVendorCustomersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvendorcustomersresponse"></a>
<a id="schema_ListVendorCustomersResponse"></a>
<a id="tocSlistvendorcustomersresponse"></a>
<a id="tocslistvendorcustomersresponse"></a>

```json
{
  "customers": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message to list customers of the vendor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customers|[[Company](#schemacompany)]|false|none|List of customers of the vendor.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Omitted if no further results are available.|
|totalSize|integer(int32)|false|none|The total count of items in the list irrespective of pagination.|

<h2 id="tocS_ListVendorsResponse">ListVendorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvendorsresponse"></a>
<a id="schema_ListVendorsResponse"></a>
<a id="tocSlistvendorsresponse"></a>
<a id="tocslistvendorsresponse"></a>

```json
{
  "nextPageToken": "string",
  "totalSize": 0,
  "vendors": [
    {
      "adminEmails": [
        "string"
      ],
      "companyId": "string",
      "companyName": "string",
      "googleWorkspaceAccount": {
        "customerId": "string",
        "preProvisioningTokens": [
          "string"
        ]
      },
      "languageCode": "string",
      "name": "string",
      "ownerEmails": [
        "string"
      ],
      "skipWelcomeEmail": true,
      "termsStatus": "TERMS_STATUS_UNSPECIFIED"
    }
  ]
}
```

Response message to list vendors of the partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Omitted if no further results are available.|
|totalSize|integer(int32)|false|none|The total count of items in the list irrespective of pagination.|
|vendors|[[Company](#schemacompany)]|false|none|List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object.|

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
|error|[Status](#schemastatus)|false|none|This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`.|
|metadata|object|false|none|This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.|

<h2 id="tocS_OperationPerDevice">OperationPerDevice</h2>
<!-- backwards compatibility -->
<a id="schemaoperationperdevice"></a>
<a id="schema_OperationPerDevice"></a>
<a id="tocSoperationperdevice"></a>
<a id="tocsoperationperdevice"></a>

```json
{
  "claim": {
    "customerId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "deviceMetadata": {
      "entries": {
        "property1": "string",
        "property2": "string"
      }
    },
    "googleWorkspaceCustomerId": "string",
    "preProvisioningToken": "string",
    "sectionType": "SECTION_TYPE_UNSPECIFIED",
    "simlockProfileId": "string"
  },
  "result": {
    "deviceId": "string",
    "errorIdentifier": "string",
    "errorMessage": "string",
    "status": "SINGLE_DEVICE_STATUS_UNSPECIFIED"
  },
  "unclaim": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "sectionType": "SECTION_TYPE_UNSPECIFIED",
    "vacationModeDays": 0,
    "vacationModeExpireTime": "string"
  },
  "updateMetadata": {
    "deviceId": "string",
    "deviceIdentifier": {
      "chromeOsAttestedDeviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "imei": "string",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "serialNumber": "string"
    },
    "deviceMetadata": {
      "entries": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

A task for each device in the operation. Corresponds to each device change in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claim|[PartnerClaim](#schemapartnerclaim)|false|none|A copy of the original device-claim request received by the server.|
|result|[PerDeviceStatusInBatch](#schemaperdevicestatusinbatch)|false|none|The processing result for each device.|
|unclaim|[PartnerUnclaim](#schemapartnerunclaim)|false|none|A copy of the original device-unclaim request received by the server.|
|updateMetadata|[UpdateMetadataArguments](#schemaupdatemetadataarguments)|false|none|A copy of the original metadata-update request received by the server.|

<h2 id="tocS_PartnerClaim">PartnerClaim</h2>
<!-- backwards compatibility -->
<a id="schemapartnerclaim"></a>
<a id="schema_PartnerClaim"></a>
<a id="tocSpartnerclaim"></a>
<a id="tocspartnerclaim"></a>

```json
{
  "customerId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  },
  "googleWorkspaceCustomerId": "string",
  "preProvisioningToken": "string",
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "simlockProfileId": "string"
}
```

Identifies one claim request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string(int64)|false|none|The ID of the customer for whom the device is being claimed.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. Required. Device identifier of the device.|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|Required. The metadata to attach to the device at claim.|
|googleWorkspaceCustomerId|string|false|none|The Google Workspace customer ID.|
|preProvisioningToken|string|false|none|Optional. Must and can only be set for Chrome OS devices.|
|sectionType|string|false|none|Required. The section type of the device's provisioning record.|
|simlockProfileId|string(int64)|false|none|Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_PartnerUnclaim">PartnerUnclaim</h2>
<!-- backwards compatibility -->
<a id="schemapartnerunclaim"></a>
<a id="schema_PartnerUnclaim"></a>
<a id="tocSpartnerunclaim"></a>
<a id="tocspartnerunclaim"></a>

```json
{
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "vacationModeDays": 0,
  "vacationModeExpireTime": "string"
}
```

Identifies one unclaim request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|Required. Device ID of the device.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. Device identifier of the device.|
|sectionType|string|false|none|Required. The section type of the device's provisioning record.|
|vacationModeDays|integer(int32)|false|none|Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)|
|vacationModeExpireTime|string(google-datetime)|false|none|Optional. The expiration time of the vacation unlock.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_PerDeviceStatusInBatch">PerDeviceStatusInBatch</h2>
<!-- backwards compatibility -->
<a id="schemaperdevicestatusinbatch"></a>
<a id="schema_PerDeviceStatusInBatch"></a>
<a id="tocSperdevicestatusinbatch"></a>
<a id="tocsperdevicestatusinbatch"></a>

```json
{
  "deviceId": "string",
  "errorIdentifier": "string",
  "errorMessage": "string",
  "status": "SINGLE_DEVICE_STATUS_UNSPECIFIED"
}
```

Captures the processing status for each device in the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|If processing succeeds, the device ID of the device.|
|errorIdentifier|string|false|none|If processing fails, the error type.|
|errorMessage|string|false|none|If processing fails, a developer message explaining what went wrong.|
|status|string|false|none|The result status of the device after processing.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|SINGLE_DEVICE_STATUS_UNSPECIFIED|
|status|SINGLE_DEVICE_STATUS_UNKNOWN_ERROR|
|status|SINGLE_DEVICE_STATUS_OTHER_ERROR|
|status|SINGLE_DEVICE_STATUS_SUCCESS|
|status|SINGLE_DEVICE_STATUS_PERMISSION_DENIED|
|status|SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER|
|status|SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE|
|status|SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS|
|status|SINGLE_DEVICE_STATUS_INVALID_TOKEN|
|status|SINGLE_DEVICE_STATUS_REVOKED_TOKEN|

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

<h2 id="tocS_UnclaimDeviceRequest">UnclaimDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimdevicerequest"></a>
<a id="schema_UnclaimDeviceRequest"></a>
<a id="tocSunclaimdevicerequest"></a>
<a id="tocsunclaimdevicerequest"></a>

```json
{
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "sectionType": "SECTION_TYPE_UNSPECIFIED",
  "vacationModeDays": 0,
  "vacationModeExpireTime": "string"
}
```

Request message to unclaim a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|Required. The device ID returned by `ClaimDevice`.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. The device identifier you used when you claimed this device.|
|sectionType|string|false|none|Required. The section type of the device's provisioning record.|
|vacationModeDays|integer(int32)|false|none|The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)|
|vacationModeExpireTime|string(google-datetime)|false|none|The expiration time of the vacation unlock.|

#### Enumerated Values

|Property|Value|
|---|---|
|sectionType|SECTION_TYPE_UNSPECIFIED|
|sectionType|SECTION_TYPE_SIM_LOCK|
|sectionType|SECTION_TYPE_ZERO_TOUCH|

<h2 id="tocS_UnclaimDevicesRequest">UnclaimDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunclaimdevicesrequest"></a>
<a id="schema_UnclaimDevicesRequest"></a>
<a id="tocSunclaimdevicesrequest"></a>
<a id="tocsunclaimdevicesrequest"></a>

```json
{
  "unclaims": [
    {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "sectionType": "SECTION_TYPE_UNSPECIFIED",
      "vacationModeDays": 0,
      "vacationModeExpireTime": "string"
    }
  ]
}
```

Request to unclaim devices asynchronously in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unclaims|[[PartnerUnclaim](#schemapartnerunclaim)]|false|none|Required. The list of devices to unclaim.|

<h2 id="tocS_UpdateDeviceMetadataInBatchRequest">UpdateDeviceMetadataInBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicemetadatainbatchrequest"></a>
<a id="schema_UpdateDeviceMetadataInBatchRequest"></a>
<a id="tocSupdatedevicemetadatainbatchrequest"></a>
<a id="tocsupdatedevicemetadatainbatchrequest"></a>

```json
{
  "updates": [
    {
      "deviceId": "string",
      "deviceIdentifier": {
        "chromeOsAttestedDeviceId": "string",
        "deviceType": "DEVICE_TYPE_UNSPECIFIED",
        "imei": "string",
        "manufacturer": "string",
        "meid": "string",
        "model": "string",
        "serialNumber": "string"
      },
      "deviceMetadata": {
        "entries": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

Request to update device metadata in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updates|[[UpdateMetadataArguments](#schemaupdatemetadataarguments)]|false|none|Required. The list of metadata updates.|

<h2 id="tocS_UpdateDeviceMetadataRequest">UpdateDeviceMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicemetadatarequest"></a>
<a id="schema_UpdateDeviceMetadataRequest"></a>
<a id="tocSupdatedevicemetadatarequest"></a>
<a id="tocsupdatedevicemetadatarequest"></a>

```json
{
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Request to set metadata for a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|Required. The metadata to attach to the device.|

<h2 id="tocS_UpdateMetadataArguments">UpdateMetadataArguments</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemetadataarguments"></a>
<a id="schema_UpdateMetadataArguments"></a>
<a id="tocSupdatemetadataarguments"></a>
<a id="tocsupdatemetadataarguments"></a>

```json
{
  "deviceId": "string",
  "deviceIdentifier": {
    "chromeOsAttestedDeviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "imei": "string",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "serialNumber": "string"
  },
  "deviceMetadata": {
    "entries": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Identifies metadata updates to one device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|none|Required. Device ID of the device.|
|deviceIdentifier|[DeviceIdentifier](#schemadeviceidentifier)|false|none|Required. Device identifier.|
|deviceMetadata|[DeviceMetadata](#schemadevicemetadata)|false|none|Required. The metadata to update.|
