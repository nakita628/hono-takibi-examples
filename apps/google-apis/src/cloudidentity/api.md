<h1 id="cloud-identity-api">Cloud Identity API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for provisioning and managing identity resources.

Base URLs:

* <a href="https://cloudidentity.googleapis.com/">https://cloudidentity.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/identity/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-identity.devices|Private Service: https://www.googleapis.com/auth/cloud-identity.devices|
|https://www.googleapis.com/auth/cloud-identity.devices.lookup|See your device details|
|https://www.googleapis.com/auth/cloud-identity.devices.readonly|Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly|
|https://www.googleapis.com/auth/cloud-identity.groups|See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group|
|https://www.googleapis.com/auth/cloud-identity.groups.readonly|See any Cloud Identity Groups that you can access, including group members and their emails|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-identity.devices|Private Service: https://www.googleapis.com/auth/cloud-identity.devices|
|https://www.googleapis.com/auth/cloud-identity.devices.lookup|See your device details|
|https://www.googleapis.com/auth/cloud-identity.devices.readonly|Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly|
|https://www.googleapis.com/auth/cloud-identity.groups|See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group|
|https://www.googleapis.com/auth/cloud-identity.groups.readonly|See any Cloud Identity Groups that you can access, including group members and their emails|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="cloud-identity-api-customers">customers</h1>

## cloudidentity.customers.userinvitations.cancel

<a id="opIdcloudidentity.customers.userinvitations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Cancels a UserInvitation that was already sent.

> Body parameter

```json
{}
```

<h3 id="cloudidentitycustomersuserinvitationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CancelUserInvitationRequest](#schemacanceluserinvitationrequest)|false|none|

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

<h3 id="cloudidentitycustomersuserinvitationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## cloudidentity.customers.userinvitations.isInvitableUser

<a id="opIdcloudidentity.customers.userinvitations.isInvitableUser"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:isInvitableUser \
  -H 'Accept: application/json'
```

`GET /v1beta1/{name}:isInvitableUser`

Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.

<h3 id="cloudidentitycustomersuserinvitationsisinvitableuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "isInvitableUser": true
}
```

<h3 id="cloudidentitycustomersuserinvitationsisinvitableuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IsInvitableUserResponse](#schemaisinvitableuserresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## cloudidentity.customers.userinvitations.send

<a id="opIdcloudidentity.customers.userinvitations.send"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1beta1/{name}:send`

Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.

> Body parameter

```json
{}
```

<h3 id="cloudidentitycustomersuserinvitationssend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SendUserInvitationRequest](#schemasenduserinvitationrequest)|false|none|

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

<h3 id="cloudidentitycustomersuserinvitationssend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## cloudidentity.customers.userinvitations.list

<a id="opIdcloudidentity.customers.userinvitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userinvitations \
  -H 'Accept: application/json'
```

`GET /v1beta1/{parent}/userinvitations`

Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.

<h3 id="cloudidentitycustomersuserinvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with.|
|filter|query|string|false|Optional. A query string for filtering `UserInvitation` results by their current state, in the format: `"state=='invited'"`.|
|orderBy|query|string|false|Optional. The sort order of the list results. You can sort the results in descending order based on either email or last update timestamp but not both, using `order_by="email desc"`. Currently, sorting is supported for `update_time asc`, `update_time desc`, `email asc`, and `email desc`. If not specified, results will be returned based on `email asc` order.|
|pageSize|query|integer|false|Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListUserInvitations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "userInvitations": [
    {
      "mailsSentCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="cloudidentitycustomersuserinvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUserInvitationsResponse](#schemalistuserinvitationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cloud-identity-api-devices">devices</h1>

## cloudidentity.devices.list

<a id="opIdcloudidentity.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/devices`

Lists/Searches devices.

<h3 id="cloudidentitydeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|query|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer.|
|filter|query|string|false|Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.|
|orderBy|query|string|false|Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally to specify results to be sorted in descending order. Default order is ascending.|
|pageSize|query|integer|false|Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.|
|view|query|string|false|Optional. The view to use for the List request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|view|COMPANY_INVENTORY|
|view|USER_ASSIGNED_DEVICES|
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
      "androidSpecificAttributes": {
        "enabledUnknownSources": true,
        "ownerProfileAccount": true,
        "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
        "supportsWorkProfile": true
      },
      "assetTag": "string",
      "basebandVersion": "string",
      "bootloaderVersion": "string",
      "brand": "string",
      "buildNumber": "string",
      "clientTypes": [
        "CLIENT_TYPE_UNSPECIFIED"
      ],
      "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
      "createTime": "string",
      "deviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "enabledDeveloperOptions": true,
      "enabledUsbDebugging": true,
      "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
      "endpointVerificationSpecificAttributes": {
        "certificateAttributes": [
          {
            "certificateTemplate": {
              "id": "string",
              "majorVersion": 0,
              "minorVersion": 0
            },
            "fingerprint": "string",
            "issuer": "string",
            "serialNumber": "string",
            "subject": "string",
            "thumbprint": "string",
            "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
            "validityExpirationTime": "string",
            "validityStartTime": "string"
          }
        ]
      },
      "hostname": "string",
      "imei": "string",
      "kernelVersion": "string",
      "lastSyncTime": "string",
      "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "name": "string",
      "networkOperator": "string",
      "osVersion": "string",
      "otherAccounts": [
        "string"
      ],
      "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
      "releaseVersion": "string",
      "securityPatchTime": "string",
      "serialNumber": "string",
      "wifiMacAddresses": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitydeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDevicesResponse](#schemalistdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.readonly )
</aside>

## cloudidentity.devices.create

<a id="opIdcloudidentity.devices.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string",
    "device": {
      "assetTag": "string",
      "clientTypes": [
        "CLIENT_TYPE_UNSPECIFIED"
      ],
      "deviceId": "string",
      "hostname": "string",
      "lastSyncTime": "string",
      "serialNumber": "string",
      "wifiMacAddresses": [
        "string"
      ]
    }
  }'
```

`POST /v1beta1/devices`

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

> Body parameter

```json
{
  "customer": "string",
  "device": {
    "assetTag": "string",
    "clientTypes": [
      "CLIENT_TYPE_UNSPECIFIED"
    ],
    "deviceId": "string",
    "hostname": "string",
    "lastSyncTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

<h3 id="cloudidentitydevicescreate-parameters">Parameters</h3>

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
|body|body|[CreateDeviceRequest](#schemacreatedevicerequest)|false|none|
|» customer|body|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|
|» device|body|[Device](#schemadevice)|false|Required. The device to be created. The name field within this device is ignored in the create method. A new name is created by the method, and returned within the response. Only the fields `device_type`, `serial_number` and `asset_tag` (if present) are used to create the device. All other fields are ignored. The `device_type` and `serial_number` fields are required.|

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

<h3 id="cloudidentitydevicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices )
</aside>

## cloudidentity.devices.deviceUsers.approve

<a id="opIdcloudidentity.devices.deviceUsers.approve"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:approve \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string"
  }'
```

`POST /v1beta1/{name}:approve`

Approves device to access user data.

> Body parameter

```json
{
  "customer": "string"
}
```

<h3 id="cloudidentitydevicesdeviceusersapprove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ApproveDeviceUserRequest](#schemaapprovedeviceuserrequest)|false|none|
|» customer|body|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

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

<h3 id="cloudidentitydevicesdeviceusersapprove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices )
</aside>

## cloudidentity.devices.deviceUsers.block

<a id="opIdcloudidentity.devices.deviceUsers.block"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string"
  }'
```

`POST /v1beta1/{name}:block`

Blocks device from accessing user data

> Body parameter

```json
{
  "customer": "string"
}
```

<h3 id="cloudidentitydevicesdeviceusersblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BlockDeviceUserRequest](#schemablockdeviceuserrequest)|false|none|
|» customer|body|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

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

<h3 id="cloudidentitydevicesdeviceusersblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices )
</aside>

## cloudidentity.devices.deviceUsers.cancelWipe

<a id="opIdcloudidentity.devices.deviceUsers.cancelWipe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancelWipe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string"
  }'
```

`POST /v1beta1/{name}:cancelWipe`

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

> Body parameter

```json
{
  "customer": "string"
}
```

<h3 id="cloudidentitydevicesdeviceuserscancelwipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CancelWipeDeviceUserRequest](#schemacancelwipedeviceuserrequest)|false|none|
|» customer|body|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

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

<h3 id="cloudidentitydevicesdeviceuserscancelwipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices )
</aside>

## cloudidentity.devices.deviceUsers.wipe

<a id="opIdcloudidentity.devices.deviceUsers.wipe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:wipe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string"
  }'
```

`POST /v1beta1/{name}:wipe`

Wipes the user's account on a device.

> Body parameter

```json
{
  "customer": "string"
}
```

<h3 id="cloudidentitydevicesdeviceuserswipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[WipeDeviceUserRequest](#schemawipedeviceuserrequest)|false|none|
|» customer|body|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

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

<h3 id="cloudidentitydevicesdeviceuserswipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices )
</aside>

## cloudidentity.devices.deviceUsers.list

<a id="opIdcloudidentity.devices.deviceUsers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/deviceUsers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/deviceUsers`

Lists/Searches DeviceUsers.

<h3 id="cloudidentitydevicesdeviceuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}|
|customer|query|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|
|filter|query|string|false|Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.|
|orderBy|query|string|false|Optional. Order specification for devices in the response.|
|pageSize|query|integer|false|Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "deviceUsers": [
    {
      "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
      "createTime": "string",
      "firstSyncTime": "string",
      "languageCode": "string",
      "lastSyncTime": "string",
      "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
      "name": "string",
      "passwordState": "PASSWORD_STATE_UNSPECIFIED",
      "userAgent": "string",
      "userEmail": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitydevicesdeviceuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDeviceUsersResponse](#schemalistdeviceusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.readonly )
</aside>

## cloudidentity.devices.deviceUsers.lookup

<a id="opIdcloudidentity.devices.deviceUsers.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}:lookup`

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

<h3 id="cloudidentitydevicesdeviceuserslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.|
|androidId|query|string|false|Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).|
|pageSize|query|integer|false|The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.|
|pageToken|query|string|false|A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.|
|rawResourceId|query|string|false|Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json|
|userId|query|string|false|The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "customer": "string",
  "names": [
    "string"
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitydevicesdeviceuserslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LookupSelfDeviceUsersResponse](#schemalookupselfdeviceusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.lookup ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.devices.lookup )
</aside>

<h1 id="cloud-identity-api-groups">groups</h1>

## cloudidentity.groups.list

<a id="opIdcloudidentity.groups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/groups`

Lists the `Group` resources under a customer or namespace.

<h3 id="cloudidentitygroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous list request, if any.|
|parent|query|string|false|Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)|
|view|query|string|false|The level of detail to be returned. If unspecified, defaults to `View.BASIC`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "groups": [
    {
      "additionalGroupKeys": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dynamicGroupMetadata": {
        "queries": [
          {
            "query": "string",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "status": {
          "status": "STATUS_UNSPECIFIED",
          "statusTime": "string"
        }
      },
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "posixGroups": [
        {
          "gid": "string",
          "name": "string",
          "systemId": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitygroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGroupsResponse](#schemalistgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.create

<a id="opIdcloudidentity.groups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "dynamicGroupMetadata": {
      "queries": [
        {
          "query": "string",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ]
    },
    "groupKey": {
      "id": "string",
      "namespace": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "posixGroups": [
      {
        "gid": "string",
        "name": "string",
        "systemId": "string"
      }
    ]
  }'
```

`POST /v1beta1/groups`

Creates a `Group`.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "dynamicGroupMetadata": {
    "queries": [
      {
        "query": "string",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ]
  },
  "groupKey": {
    "id": "string",
    "namespace": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "posixGroups": [
    {
      "gid": "string",
      "name": "string",
      "systemId": "string"
    }
  ]
}
```

<h3 id="cloudidentitygroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|initialGroupConfig|query|string|false|Required. The initial configuration option for the `Group`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Group](#schemagroup)|false|none|
|» description|body|string|false|An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.|
|» displayName|body|string|false|The display name of the `Group`.|
|» dynamicGroupMetadata|body|[DynamicGroupMetadata](#schemadynamicgroupmetadata)|false|Optional. Dynamic group metadata like queries and status.|
|» groupKey|body|[EntityKey](#schemaentitykey)|false|Required. The `EntityKey` of the `Group`.|
|» labels|body|object|false|Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)|
|» posixGroups|body|[[PosixGroup](#schemaposixgroup)]|false|Optional. The POSIX groups associated with the `Group`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|initialGroupConfig|INITIAL_GROUP_CONFIG_UNSPECIFIED|
|initialGroupConfig|WITH_INITIAL_OWNER|
|initialGroupConfig|EMPTY|
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

<h3 id="cloudidentitygroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.lookup

<a id="opIdcloudidentity.groups.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/groups:lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/groups:lookup`

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.

<h3 id="cloudidentitygroupslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey.id|query|string|false|The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.|
|groupKey.namespace|query|string|false|The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "name": "string"
}
```

<h3 id="cloudidentitygroupslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LookupGroupNameResponse](#schemalookupgroupnameresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.search

<a id="opIdcloudidentity.groups.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/groups:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/groups:search`

Searches for `Group` resources matching a specified query.

<h3 id="cloudidentitygroupssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderBy|query|string|false|The ordering of groups for the display name or email in the search groups response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending name: order_by="display_name" Sort by the descending group key email: order_by="group_key desc"|
|pageSize|query|integer|false|The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous search request, if any.|
|query|query|string|false|Required. The search query. * Must be specified in [Common Expression Language](https://opensource.google/projects/cel). * Must contain equality operators on the parent, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) * Can contain optional inclusion operators on `labels` such as `'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). * Can contain an optional equality operator on `domain_name`. e.g. `domain_name == 'abc.com'` * Can contain optional `startsWith/contains/equality` operators on `group_key`, e.g. `group_key.startsWith('dev')`, `group_key.contains('dev'), group_key == 'dev@abc.com'` * Can contain optional `startsWith/contains/equality` operators on `display_name`, such as `display_name.startsWith('dev')` , `display_name.contains('dev')`, `display_name == 'dev'`|
|view|query|string|false|The level of detail to be returned. If unspecified, defaults to `View.BASIC`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "groups": [
    {
      "additionalGroupKeys": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dynamicGroupMetadata": {
        "queries": [
          {
            "query": "string",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "status": {
          "status": "STATUS_UNSPECIFIED",
          "statusTime": "string"
        }
      },
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "posixGroups": [
        {
          "gid": "string",
          "name": "string",
          "systemId": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitygroupssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchGroupsResponse](#schemasearchgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.modifyMembershipRoles

<a id="opIdcloudidentity.groups.memberships.modifyMembershipRoles"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:modifyMembershipRoles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addRoles": [
      {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {}
        }
      }
    ],
    "removeRoles": [
      "string"
    ],
    "updateRolesParams": [
      {
        "fieldMask": "string",
        "membershipRole": {
          "expiryDetail": {
            "expireTime": "string"
          },
          "name": "string",
          "restrictionEvaluations": {
            "memberRestrictionEvaluation": {}
          }
        }
      }
    ]
  }'
```

`POST /v1beta1/{name}:modifyMembershipRoles`

Modifies the `MembershipRole`s of a `Membership`.

> Body parameter

```json
{
  "addRoles": [
    {
      "expiryDetail": {
        "expireTime": "string"
      },
      "name": "string",
      "restrictionEvaluations": {
        "memberRestrictionEvaluation": {}
      }
    }
  ],
  "removeRoles": [
    "string"
  ],
  "updateRolesParams": [
    {
      "fieldMask": "string",
      "membershipRole": {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {}
        }
      }
    }
  ]
}
```

<h3 id="cloudidentitygroupsmembershipsmodifymembershiproles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ModifyMembershipRolesRequest](#schemamodifymembershiprolesrequest)|false|none|
|» addRoles|body|[[MembershipRole](#schemamembershiprole)]|false|The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.|
|» removeRoles|body|[string]|false|The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.|
|» updateRolesParams|body|[[UpdateMembershipRolesParams](#schemaupdatemembershiprolesparams)]|false|The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.|

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
  "membership": {
    "createTime": "string",
    "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
    "memberKey": {
      "id": "string",
      "namespace": "string"
    },
    "name": "string",
    "preferredMemberKey": {
      "id": "string",
      "namespace": "string"
    },
    "roles": [
      {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {
            "state": "STATE_UNSPECIFIED"
          }
        }
      }
    ],
    "type": "TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

<h3 id="cloudidentitygroupsmembershipsmodifymembershiproles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ModifyMembershipRolesResponse](#schemamodifymembershiprolesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.create

<a id="opIdcloudidentity.groups.memberships.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "memberKey": {
      "id": "string",
      "namespace": "string"
    },
    "preferredMemberKey": {
      "id": "string",
      "namespace": "string"
    },
    "roles": [
      {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {}
        }
      }
    ]
  }'
```

`POST /v1beta1/{parent}/memberships`

Creates a `Membership`.

> Body parameter

```json
{
  "memberKey": {
    "id": "string",
    "namespace": "string"
  },
  "preferredMemberKey": {
    "id": "string",
    "namespace": "string"
  },
  "roles": [
    {
      "expiryDetail": {
        "expireTime": "string"
      },
      "name": "string",
      "restrictionEvaluations": {
        "memberRestrictionEvaluation": {}
      }
    }
  ]
}
```

<h3 id="cloudidentitygroupsmembershipscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Membership](#schemamembership)|false|none|
|» memberKey|body|[EntityKey](#schemaentitykey)|false|Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.|
|» preferredMemberKey|body|[EntityKey](#schemaentitykey)|false|Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.|
|» roles|body|[[MembershipRole](#schemamembershiprole)]|false|The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.|

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

<h3 id="cloudidentitygroupsmembershipscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.checkTransitiveMembership

<a id="opIdcloudidentity.groups.memberships.checkTransitiveMembership"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:checkTransitiveMembership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:checkTransitiveMembership`

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

<h3 id="cloudidentitygroupsmembershipschecktransitivemembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group_id}`, where `group_id` is the unique id assigned to the Group to which the Membership belongs to.|
|query|query|string|false|Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "hasMembership": true
}
```

<h3 id="cloudidentitygroupsmembershipschecktransitivemembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckTransitiveMembershipResponse](#schemachecktransitivemembershipresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.getMembershipGraph

<a id="opIdcloudidentity.groups.memberships.getMembershipGraph"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:getMembershipGraph \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:getMembershipGraph`

Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.

<h3 id="cloudidentitygroupsmembershipsgetmembershipgraph-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group to which the Membership belongs to. group_id can be a wildcard collection id "-". When a group_id is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.|
|query|query|string|false|Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="cloudidentitygroupsmembershipsgetmembershipgraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.lookup

<a id="opIdcloudidentity.groups.memberships.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:lookup`

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

<h3 id="cloudidentitygroupsmembershipslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`.|
|memberKey.id|query|string|false|The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.|
|memberKey.namespace|query|string|false|The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "name": "string"
}
```

<h3 id="cloudidentitygroupsmembershipslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LookupMembershipNameResponse](#schemalookupmembershipnameresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.searchDirectGroups

<a id="opIdcloudidentity.groups.memberships.searchDirectGroups"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:searchDirectGroups \
  -H 'Accept: application/json'
```

`GET /v1beta1/{parent}/memberships:searchDirectGroups`

Searches direct groups of a member.

<h3 id="cloudidentitygroupsmembershipssearchdirectgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: groups/{group_id}, where group_id is always '-' as this API will search across all groups for a given member.|
|orderBy|query|string|false|The ordering of membership relation for the display name or email in the response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending display name: order_by="group_name" or order_by="group_name asc". Sort by the descending display name: order_by="group_name desc". Sort by the ascending group key: order_by="group_key" or order_by="group_key asc". Sort by the descending group key: order_by="group_key desc".|
|pageSize|query|integer|false|The default page size is 200 (max 1000).|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any|
|query|query|string|false|Required. A CEL expression that MUST include member specification AND label(s). Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && 'label_value' in labels`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "memberships": [
    {
      "description": "string",
      "displayName": "string",
      "group": "string",
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "membership": "string",
      "roles": [
        {
          "expiryDetail": {
            "expireTime": "string"
          },
          "name": "string",
          "restrictionEvaluations": {
            "memberRestrictionEvaluation": {
              "state": "STATE_UNSPECIFIED"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitygroupsmembershipssearchdirectgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchDirectGroupsResponse](#schemasearchdirectgroupsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## cloudidentity.groups.memberships.searchTransitiveGroups

<a id="opIdcloudidentity.groups.memberships.searchTransitiveGroups"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:searchTransitiveGroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:searchTransitiveGroups`

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

<h3 id="cloudidentitygroupsmembershipssearchtransitivegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is always '-' as this API will search across all groups for a given member.|
|pageSize|query|integer|false|The default page size is 200 (max 1000).|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
|query|query|string|false|Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels` Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissons on the input customer. Example query: `member_key_id == 'member_key_id_value' && in labels && parent == 'customers/C046psxkn'`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "memberships": [
    {
      "displayName": "string",
      "group": "string",
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "relationType": "RELATION_TYPE_UNSPECIFIED",
      "roles": [
        {
          "role": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitygroupsmembershipssearchtransitivegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchTransitiveGroupsResponse](#schemasearchtransitivegroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.groups.memberships.searchTransitiveMemberships

<a id="opIdcloudidentity.groups.memberships.searchTransitiveMemberships"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships:searchTransitiveMemberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships:searchTransitiveMemberships`

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

<h3 id="cloudidentitygroupsmembershipssearchtransitivememberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.|
|pageSize|query|integer|false|The default page size is 200 (max 1000).|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "memberships": [
    {
      "member": "string",
      "preferredMemberKey": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "relationType": "RELATION_TYPE_UNSPECIFIED",
      "roles": [
        {
          "role": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentitygroupsmembershipssearchtransitivememberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchTransitiveMembershipsResponse](#schemasearchtransitivemembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-identity-api-inboundsamlssoprofiles">inboundSamlSsoProfiles</h1>

## cloudidentity.inboundSamlSsoProfiles.list

<a id="opIdcloudidentity.inboundSamlSsoProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/inboundSamlSsoProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/inboundSamlSsoProfiles`

Lists InboundSamlSsoProfiles for a customer.

<h3 id="cloudidentityinboundsamlssoprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to.|
|pageSize|query|integer|false|The maximum number of InboundSamlSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value.|
|pageToken|query|string|false|A page token, received from a previous `ListInboundSamlSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSamlSsoProfiles` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "inboundSamlSsoProfiles": [
    {
      "customer": "string",
      "displayName": "string",
      "idpConfig": {
        "changePasswordUri": "string",
        "entityId": "string",
        "logoutRedirectUri": "string",
        "singleSignOnServiceUri": "string"
      },
      "name": "string",
      "spConfig": {
        "assertionConsumerServiceUri": "string",
        "entityId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentityinboundsamlssoprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInboundSamlSsoProfilesResponse](#schemalistinboundsamlssoprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSamlSsoProfiles.create

<a id="opIdcloudidentity.inboundSamlSsoProfiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/inboundSamlSsoProfiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string",
    "displayName": "string",
    "idpConfig": {
      "changePasswordUri": "string",
      "entityId": "string",
      "logoutRedirectUri": "string",
      "singleSignOnServiceUri": "string"
    },
    "spConfig": {}
  }'
```

`POST /v1beta1/inboundSamlSsoProfiles`

Creates an InboundSamlSsoProfile for a customer.

> Body parameter

```json
{
  "customer": "string",
  "displayName": "string",
  "idpConfig": {
    "changePasswordUri": "string",
    "entityId": "string",
    "logoutRedirectUri": "string",
    "singleSignOnServiceUri": "string"
  },
  "spConfig": {}
}
```

<h3 id="cloudidentityinboundsamlssoprofilescreate-parameters">Parameters</h3>

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
|body|body|[InboundSamlSsoProfile](#schemainboundsamlssoprofile)|false|none|
|» customer|body|string|false|Immutable. The customer. For example: `customers/C0123abc`.|
|» displayName|body|string|false|Human-readable name of the SAML SSO profile.|
|» idpConfig|body|[SamlIdpConfig](#schemasamlidpconfig)|false|SAML identity provider configuration.|
|» spConfig|body|[SamlSpConfig](#schemasamlspconfig)|false|SAML service provider configuration for this SAML SSO profile. These are the service provider details provided by Google that should be configured on the corresponding identity provider.|

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

<h3 id="cloudidentityinboundsamlssoprofilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSamlSsoProfiles.idpCredentials.list

<a id="opIdcloudidentity.inboundSamlSsoProfiles.idpCredentials.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/idpCredentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/idpCredentials`

Returns a list of IdpCredentials in an InboundSamlSsoProfile.

<h3 id="cloudidentityinboundsamlssoprofilesidpcredentialslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of `IdpCredential`s. Format: `inboundSamlSsoProfiles/{sso_profile_id}`|
|pageSize|query|integer|false|The maximum number of `IdpCredential`s to return. The service may return fewer than this value.|
|pageToken|query|string|false|A page token, received from a previous `ListIdpCredentials` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdpCredentials` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "idpCredentials": [
    {
      "dsaKeyInfo": {
        "keySize": 0
      },
      "name": "string",
      "rsaKeyInfo": {
        "keySize": 0
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentityinboundsamlssoprofilesidpcredentialslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListIdpCredentialsResponse](#schemalistidpcredentialsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSamlSsoProfiles.idpCredentials.add

<a id="opIdcloudidentity.inboundSamlSsoProfiles.idpCredentials.add"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/idpCredentials:add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pemData": "string"
  }'
```

`POST /v1beta1/{parent}/idpCredentials:add`

Adds an IdpCredential. Up to 2 credentials are allowed.

> Body parameter

```json
{
  "pemData": "string"
}
```

<h3 id="cloudidentityinboundsamlssoprofilesidpcredentialsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The InboundSamlSsoProfile that owns the IdpCredential. Format: `inboundSamlSsoProfiles/{sso_profile_id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AddIdpCredentialRequest](#schemaaddidpcredentialrequest)|false|none|
|» pemData|body|string|false|PEM encoded x509 certificate containing the public key for verifying IdP signatures.|

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

<h3 id="cloudidentityinboundsamlssoprofilesidpcredentialsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-identity-api-inboundssoassignments">inboundSsoAssignments</h1>

## cloudidentity.inboundSsoAssignments.list

<a id="opIdcloudidentity.inboundSsoAssignments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/inboundSsoAssignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/inboundSsoAssignments`

Lists the InboundSsoAssignments for a `Customer`.

<h3 id="cloudidentityinboundssoassignmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|A CEL expression to filter the results. The only supported filter is filtering by customer. For example: `customer==customers/C0123abc`. Omitting the filter or specifying a filter of `customer==customers/my_customer` will return the assignments for the customer that the caller (authenticated user) belongs to.|
|pageSize|query|integer|false|The maximum number of assignments to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as having this maximum value. This may increase in the futue.|
|pageToken|query|string|false|A page token, received from a previous `ListInboundSsoAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSsoAssignments` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "inboundSsoAssignments": [
    {
      "customer": "string",
      "name": "string",
      "rank": 0,
      "samlSsoInfo": {
        "inboundSamlSsoProfile": "string"
      },
      "signInBehavior": {
        "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
      },
      "ssoMode": "SSO_MODE_UNSPECIFIED",
      "targetGroup": "string",
      "targetOrgUnit": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudidentityinboundssoassignmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInboundSsoAssignmentsResponse](#schemalistinboundssoassignmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSsoAssignments.create

<a id="opIdcloudidentity.inboundSsoAssignments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/inboundSsoAssignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string",
    "rank": 0,
    "samlSsoInfo": {
      "inboundSamlSsoProfile": "string"
    },
    "signInBehavior": {
      "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
    },
    "ssoMode": "SSO_MODE_UNSPECIFIED",
    "targetGroup": "string",
    "targetOrgUnit": "string"
  }'
```

`POST /v1beta1/inboundSsoAssignments`

Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.

> Body parameter

```json
{
  "customer": "string",
  "rank": 0,
  "samlSsoInfo": {
    "inboundSamlSsoProfile": "string"
  },
  "signInBehavior": {
    "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
  },
  "ssoMode": "SSO_MODE_UNSPECIFIED",
  "targetGroup": "string",
  "targetOrgUnit": "string"
}
```

<h3 id="cloudidentityinboundssoassignmentscreate-parameters">Parameters</h3>

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
|body|body|[InboundSsoAssignment](#schemainboundssoassignment)|false|none|
|» customer|body|string|false|Immutable. The customer. For example: `customers/C0123abc`.|
|» rank|body|integer(int32)|false|Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.|
|» samlSsoInfo|body|[SamlSsoInfo](#schemasamlssoinfo)|false|SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`.|
|» signInBehavior|body|[SignInBehavior](#schemasigninbehavior)|false|Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.|
|» ssoMode|body|string|false|Inbound SSO behavior.|
|» targetGroup|body|string|false|Immutable. Must be of the form `groups/{group}`.|
|» targetOrgUnit|body|string|false|Immutable. Must be of the form `orgUnits/{org_unit}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» ssoMode|SSO_MODE_UNSPECIFIED|
|» ssoMode|SSO_OFF|
|» ssoMode|SAML_SSO|
|» ssoMode|DOMAIN_WIDE_SAML_IF_ENABLED|

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

<h3 id="cloudidentityinboundssoassignmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSsoAssignments.get

<a id="opIdcloudidentity.inboundSsoAssignments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets an InboundSsoAssignment.

<h3 id="cloudidentityinboundssoassignmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to fetch. Format: `inboundSsoAssignments/{assignment}`|
|readMask|query|string|false|Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "customer": "string",
  "name": "string",
  "rank": 0,
  "samlSsoInfo": {
    "inboundSamlSsoProfile": "string"
  },
  "signInBehavior": {
    "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
  },
  "ssoMode": "SSO_MODE_UNSPECIFIED",
  "targetGroup": "string",
  "targetOrgUnit": "string"
}
```

<h3 id="cloudidentityinboundssoassignmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InboundSsoAssignment](#schemainboundssoassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSsoAssignments.delete

<a id="opIdcloudidentity.inboundSsoAssignments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.

<h3 id="cloudidentityinboundssoassignmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to delete. Format: `inboundSsoAssignments/{assignment}`|
|customer|query|string|false|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="cloudidentityinboundssoassignmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudidentity.inboundSsoAssignments.patch

<a id="opIdcloudidentity.inboundSsoAssignments.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customer": "string",
    "rank": 0,
    "samlSsoInfo": {
      "inboundSamlSsoProfile": "string"
    },
    "signInBehavior": {
      "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
    },
    "ssoMode": "SSO_MODE_UNSPECIFIED",
    "targetGroup": "string",
    "targetOrgUnit": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.

> Body parameter

```json
{
  "customer": "string",
  "rank": 0,
  "samlSsoInfo": {
    "inboundSamlSsoProfile": "string"
  },
  "signInBehavior": {
    "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
  },
  "ssoMode": "SSO_MODE_UNSPECIFIED",
  "targetGroup": "string",
  "targetOrgUnit": "string"
}
```

<h3 id="cloudidentityinboundssoassignmentspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.|
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
|body|body|[InboundSsoAssignment](#schemainboundssoassignment)|false|none|
|» customer|body|string|false|Immutable. The customer. For example: `customers/C0123abc`.|
|» rank|body|integer(int32)|false|Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.|
|» samlSsoInfo|body|[SamlSsoInfo](#schemasamlssoinfo)|false|SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`.|
|» signInBehavior|body|[SignInBehavior](#schemasigninbehavior)|false|Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.|
|» ssoMode|body|string|false|Inbound SSO behavior.|
|» targetGroup|body|string|false|Immutable. Must be of the form `groups/{group}`.|
|» targetOrgUnit|body|string|false|Immutable. Must be of the form `orgUnits/{org_unit}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» ssoMode|SSO_MODE_UNSPECIFIED|
|» ssoMode|SSO_OFF|
|» ssoMode|SAML_SSO|
|» ssoMode|DOMAIN_WIDE_SAML_IF_ENABLED|

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

<h3 id="cloudidentityinboundssoassignmentspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-identity-api-orgunits">orgUnits</h1>

## cloudidentity.orgUnits.memberships.move

<a id="opIdcloudidentity.orgUnits.memberships.move"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "customer": "string",
    "destinationOrgUnit": "string"
  }'
```

`POST /v1beta1/{name}:move`

Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.

> Body parameter

```json
{
  "customer": "string",
  "destinationOrgUnit": "string"
}
```

<h3 id="cloudidentityorgunitsmembershipsmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). To manage a Membership without specifying source `orgUnitId`, this API also supports the wildcard character '-' for `$orgUnitId` per https://google.aip.dev/159. The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of OrgMembership.EntityType, and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[MoveOrgMembershipRequest](#schemamoveorgmembershiprequest)|false|none|
|» customer|body|string|false|Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.|
|» destinationOrgUnit|body|string|false|Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).|

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

<h3 id="cloudidentityorgunitsmembershipsmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="success">
This operation does not require authentication
</aside>

## cloudidentity.orgUnits.memberships.list

<a id="opIdcloudidentity.orgUnits.memberships.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/memberships`

List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)

<h3 id="cloudidentityorgunitsmembershipslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Immutable. OrgUnit which is queried for a list of memberships. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).|
|customer|query|string|false|Required. Immutable. Customer that this OrgMembership belongs to. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.|
|filter|query|string|false|The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the `type` (e.g., `type == 'shared_drive'`).|
|pageSize|query|integer|false|The maximum number of results to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will default to 50. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as 100.|
|pageToken|query|string|false|A page token, received from a previous `OrgMembershipsService.ListOrgMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrgMembershipsRequest` must match the call that provided the page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|pageSize|BASIC|
|pageSize|FULL|
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
  "orgMemberships": [
    {
      "member": "string",
      "memberUri": "string",
      "name": "string",
      "type": "ENTITY_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="cloudidentityorgunitsmembershipslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOrgMembershipsResponse](#schemalistorgmembershipsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-identity.groups.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AddIdpCredentialOperationMetadata">AddIdpCredentialOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaaddidpcredentialoperationmetadata"></a>
<a id="schema_AddIdpCredentialOperationMetadata"></a>
<a id="tocSaddidpcredentialoperationmetadata"></a>
<a id="tocsaddidpcredentialoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSamlSsoProfilesService.AddIdpCredential.

<h2 id="tocS_AddIdpCredentialRequest">AddIdpCredentialRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddidpcredentialrequest"></a>
<a id="schema_AddIdpCredentialRequest"></a>
<a id="tocSaddidpcredentialrequest"></a>
<a id="tocsaddidpcredentialrequest"></a>

```json
{
  "pemData": "string"
}
```

The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pemData|string|false|none|PEM encoded x509 certificate containing the public key for verifying IdP signatures.|

<h2 id="tocS_AndroidAttributes">AndroidAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaandroidattributes"></a>
<a id="schema_AndroidAttributes"></a>
<a id="tocSandroidattributes"></a>
<a id="tocsandroidattributes"></a>

```json
{
  "enabledUnknownSources": true,
  "ownerProfileAccount": true,
  "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
  "supportsWorkProfile": true
}
```

Resource representing the Android specific attributes of a Device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledUnknownSources|boolean|false|none|Whether applications from unknown sources can be installed on device.|
|ownerProfileAccount|boolean|false|none|Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.|
|ownershipPrivilege|string|false|none|Ownership privileges on device.|
|supportsWorkProfile|boolean|false|none|Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|ownershipPrivilege|OWNERSHIP_PRIVILEGE_UNSPECIFIED|
|ownershipPrivilege|DEVICE_ADMINISTRATOR|
|ownershipPrivilege|PROFILE_OWNER|
|ownershipPrivilege|DEVICE_OWNER|

<h2 id="tocS_ApproveDeviceUserRequest">ApproveDeviceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapprovedeviceuserrequest"></a>
<a id="schema_ApproveDeviceUserRequest"></a>
<a id="tocSapprovedeviceuserrequest"></a>
<a id="tocsapprovedeviceuserrequest"></a>

```json
{
  "customer": "string"
}
```

Request message for approving the device to access user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

<h2 id="tocS_ApproveDeviceUserResponse">ApproveDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapprovedeviceuserresponse"></a>
<a id="schema_ApproveDeviceUserResponse"></a>
<a id="tocSapprovedeviceuserresponse"></a>
<a id="tocsapprovedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for approving the device to access user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[DeviceUser](#schemadeviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_BlockDeviceUserRequest">BlockDeviceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceuserrequest"></a>
<a id="schema_BlockDeviceUserRequest"></a>
<a id="tocSblockdeviceuserrequest"></a>
<a id="tocsblockdeviceuserrequest"></a>

```json
{
  "customer": "string"
}
```

Request message for blocking account on device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

<h2 id="tocS_BlockDeviceUserResponse">BlockDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemablockdeviceuserresponse"></a>
<a id="schema_BlockDeviceUserResponse"></a>
<a id="tocSblockdeviceuserresponse"></a>
<a id="tocsblockdeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for blocking the device from accessing user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[DeviceUser](#schemadeviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_CancelUserInvitationRequest">CancelUserInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceluserinvitationrequest"></a>
<a id="schema_CancelUserInvitationRequest"></a>
<a id="tocScanceluserinvitationrequest"></a>
<a id="tocscanceluserinvitationrequest"></a>

```json
{}
```

Request to cancel sent invitation for target email in UserInvitation.

<h2 id="tocS_CancelWipeDeviceRequest">CancelWipeDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelwipedevicerequest"></a>
<a id="schema_CancelWipeDeviceRequest"></a>
<a id="tocScancelwipedevicerequest"></a>
<a id="tocscancelwipedevicerequest"></a>

```json
{
  "customer": "string"
}
```

Request message for cancelling an unfinished device wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

<h2 id="tocS_CancelWipeDeviceResponse">CancelWipeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelwipedeviceresponse"></a>
<a id="schema_CancelWipeDeviceResponse"></a>
<a id="tocScancelwipedeviceresponse"></a>
<a id="tocscancelwipedeviceresponse"></a>

```json
{
  "device": {
    "androidSpecificAttributes": {
      "enabledUnknownSources": true,
      "ownerProfileAccount": true,
      "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
      "supportsWorkProfile": true
    },
    "assetTag": "string",
    "basebandVersion": "string",
    "bootloaderVersion": "string",
    "brand": "string",
    "buildNumber": "string",
    "clientTypes": [
      "CLIENT_TYPE_UNSPECIFIED"
    ],
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "deviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "enabledDeveloperOptions": true,
    "enabledUsbDebugging": true,
    "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
    "endpointVerificationSpecificAttributes": {
      "certificateAttributes": [
        {
          "certificateTemplate": {
            "id": "string",
            "majorVersion": 0,
            "minorVersion": 0
          },
          "fingerprint": "string",
          "issuer": "string",
          "serialNumber": "string",
          "subject": "string",
          "thumbprint": "string",
          "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
          "validityExpirationTime": "string",
          "validityStartTime": "string"
        }
      ]
    },
    "hostname": "string",
    "imei": "string",
    "kernelVersion": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "name": "string",
    "networkOperator": "string",
    "osVersion": "string",
    "otherAccounts": [
      "string"
    ],
    "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
    "releaseVersion": "string",
    "securityPatchTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

Response message for cancelling an unfinished device wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[Device](#schemadevice)|false|none|Resultant Device object for the action. Note that asset tags will not be returned in the device object.|

<h2 id="tocS_CancelWipeDeviceUserRequest">CancelWipeDeviceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelwipedeviceuserrequest"></a>
<a id="schema_CancelWipeDeviceUserRequest"></a>
<a id="tocScancelwipedeviceuserrequest"></a>
<a id="tocscancelwipedeviceuserrequest"></a>

```json
{
  "customer": "string"
}
```

Request message for cancelling an unfinished user account wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

<h2 id="tocS_CancelWipeDeviceUserResponse">CancelWipeDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelwipedeviceuserresponse"></a>
<a id="schema_CancelWipeDeviceUserResponse"></a>
<a id="tocScancelwipedeviceuserresponse"></a>
<a id="tocscancelwipedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for cancelling an unfinished user account wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[DeviceUser](#schemadeviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_CertificateAttributes">CertificateAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacertificateattributes"></a>
<a id="schema_CertificateAttributes"></a>
<a id="tocScertificateattributes"></a>
<a id="tocscertificateattributes"></a>

```json
{
  "certificateTemplate": {
    "id": "string",
    "majorVersion": 0,
    "minorVersion": 0
  },
  "fingerprint": "string",
  "issuer": "string",
  "serialNumber": "string",
  "subject": "string",
  "thumbprint": "string",
  "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
  "validityExpirationTime": "string",
  "validityStartTime": "string"
}
```

Stores information about a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateTemplate|[CertificateTemplate](#schemacertificatetemplate)|false|none|The X.509 extension for CertificateTemplate.|
|fingerprint|string|false|none|The encoded certificate fingerprint.|
|issuer|string|false|none|The name of the issuer of this certificate.|
|serialNumber|string|false|none|Serial number of the certificate, Example: "123456789".|
|subject|string|false|none|The subject name of this certificate.|
|thumbprint|string|false|none|The certificate thumbprint.|
|validationState|string|false|none|Validation state of this certificate.|
|validityExpirationTime|string(google-datetime)|false|none|Certificate not valid at or after this timestamp.|
|validityStartTime|string(google-datetime)|false|none|Certificate not valid before this timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|validationState|CERTIFICATE_VALIDATION_STATE_UNSPECIFIED|
|validationState|VALIDATION_SUCCESSFUL|
|validationState|VALIDATION_FAILED|

<h2 id="tocS_CertificateTemplate">CertificateTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetemplate"></a>
<a id="schema_CertificateTemplate"></a>
<a id="tocScertificatetemplate"></a>
<a id="tocscertificatetemplate"></a>

```json
{
  "id": "string",
  "majorVersion": 0,
  "minorVersion": 0
}
```

CertificateTemplate (v3 Extension in X.509).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047".|
|majorVersion|integer(int32)|false|none|The Major version of the template. Example: 100.|
|minorVersion|integer(int32)|false|none|The minor version of the template. Example: 12.|

<h2 id="tocS_CheckTransitiveMembershipResponse">CheckTransitiveMembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemachecktransitivemembershipresponse"></a>
<a id="schema_CheckTransitiveMembershipResponse"></a>
<a id="tocSchecktransitivemembershipresponse"></a>
<a id="tocschecktransitivemembershipresponse"></a>

```json
{
  "hasMembership": true
}
```

The response message for MembershipsService.CheckTransitiveMembership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMembership|boolean|false|none|Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths.|

<h2 id="tocS_ClientState">ClientState</h2>
<!-- backwards compatibility -->
<a id="schemaclientstate"></a>
<a id="schema_ClientState"></a>
<a id="tocSclientstate"></a>
<a id="tocsclientstate"></a>

```json
{
  "assetTags": [
    "string"
  ],
  "complianceState": "COMPLIANCE_STATE_UNSPECIFIED",
  "createTime": "string",
  "customId": "string",
  "etag": "string",
  "healthScore": "HEALTH_SCORE_UNSPECIFIED",
  "keyValuePairs": {
    "property1": {
      "boolValue": true,
      "numberValue": 0,
      "stringValue": "string"
    },
    "property2": {
      "boolValue": true,
      "numberValue": 0,
      "stringValue": "string"
    }
  },
  "lastUpdateTime": "string",
  "managed": "MANAGED_STATE_UNSPECIFIED",
  "name": "string",
  "ownerType": "OWNER_TYPE_UNSPECIFIED",
  "scoreReason": "string"
}
```

Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetTags|[string]|false|none|The caller can specify asset tags for this resource|
|complianceState|string|false|none|The compliance state of the resource as specified by the API client.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the client state data was created.|
|customId|string|false|none|This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.|
|etag|string|false|none|The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest|
|healthScore|string|false|none|The Health score of the resource|
|keyValuePairs|object|false|none|The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. The time the client state data was last updated.|
|managed|string|false|none|The management state of the resource as specified by the API client.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data.|
|ownerType|string|false|read-only|Output only. The owner of the ClientState|
|scoreReason|string|false|none|A descriptive cause of the health score.|

#### Enumerated Values

|Property|Value|
|---|---|
|complianceState|COMPLIANCE_STATE_UNSPECIFIED|
|complianceState|COMPLIANT|
|complianceState|NON_COMPLIANT|
|healthScore|HEALTH_SCORE_UNSPECIFIED|
|healthScore|VERY_POOR|
|healthScore|POOR|
|healthScore|NEUTRAL|
|healthScore|GOOD|
|healthScore|VERY_GOOD|
|managed|MANAGED_STATE_UNSPECIFIED|
|managed|MANAGED|
|managed|UNMANAGED|
|ownerType|OWNER_TYPE_UNSPECIFIED|
|ownerType|OWNER_TYPE_CUSTOMER|
|ownerType|OWNER_TYPE_PARTNER|

<h2 id="tocS_CreateDeviceRequest">CreateDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedevicerequest"></a>
<a id="schema_CreateDeviceRequest"></a>
<a id="tocScreatedevicerequest"></a>
<a id="tocscreatedevicerequest"></a>

```json
{
  "customer": "string",
  "device": {
    "androidSpecificAttributes": {
      "enabledUnknownSources": true,
      "ownerProfileAccount": true,
      "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
      "supportsWorkProfile": true
    },
    "assetTag": "string",
    "basebandVersion": "string",
    "bootloaderVersion": "string",
    "brand": "string",
    "buildNumber": "string",
    "clientTypes": [
      "CLIENT_TYPE_UNSPECIFIED"
    ],
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "deviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "enabledDeveloperOptions": true,
    "enabledUsbDebugging": true,
    "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
    "endpointVerificationSpecificAttributes": {
      "certificateAttributes": [
        {
          "certificateTemplate": {
            "id": "string",
            "majorVersion": 0,
            "minorVersion": 0
          },
          "fingerprint": "string",
          "issuer": "string",
          "serialNumber": "string",
          "subject": "string",
          "thumbprint": "string",
          "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
          "validityExpirationTime": "string",
          "validityStartTime": "string"
        }
      ]
    },
    "hostname": "string",
    "imei": "string",
    "kernelVersion": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "name": "string",
    "networkOperator": "string",
    "osVersion": "string",
    "otherAccounts": [
      "string"
    ],
    "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
    "releaseVersion": "string",
    "securityPatchTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

Request message for creating a Company Owned device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|
|device|[Device](#schemadevice)|false|none|Required. The device to be created. The name field within this device is ignored in the create method. A new name is created by the method, and returned within the response. Only the fields `device_type`, `serial_number` and `asset_tag` (if present) are used to create the device. All other fields are ignored. The `device_type` and `serial_number` fields are required.|

<h2 id="tocS_CreateInboundSamlSsoProfileOperationMetadata">CreateInboundSamlSsoProfileOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboundsamlssoprofileoperationmetadata"></a>
<a id="schema_CreateInboundSamlSsoProfileOperationMetadata"></a>
<a id="tocScreateinboundsamlssoprofileoperationmetadata"></a>
<a id="tocscreateinboundsamlssoprofileoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSamlSsoProfilesService.CreateInboundSamlSsoProfile.

<h2 id="tocS_CreateInboundSsoAssignmentOperationMetadata">CreateInboundSsoAssignmentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboundssoassignmentoperationmetadata"></a>
<a id="schema_CreateInboundSsoAssignmentOperationMetadata"></a>
<a id="tocScreateinboundssoassignmentoperationmetadata"></a>
<a id="tocscreateinboundssoassignmentoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSsoAssignmentsService.CreateInboundSsoAssignment.

<h2 id="tocS_CustomAttributeValue">CustomAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomattributevalue"></a>
<a id="schema_CustomAttributeValue"></a>
<a id="tocScustomattributevalue"></a>
<a id="tocscustomattributevalue"></a>

```json
{
  "boolValue": true,
  "numberValue": 0,
  "stringValue": "string"
}
```

Additional custom attribute values may be one of these types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Represents a boolean value.|
|numberValue|number(double)|false|none|Represents a double value.|
|stringValue|string|false|none|Represents a string value.|

<h2 id="tocS_DeleteIdpCredentialOperationMetadata">DeleteIdpCredentialOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidpcredentialoperationmetadata"></a>
<a id="schema_DeleteIdpCredentialOperationMetadata"></a>
<a id="tocSdeleteidpcredentialoperationmetadata"></a>
<a id="tocsdeleteidpcredentialoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSamlSsoProfilesService.DeleteIdpCredential.

<h2 id="tocS_DeleteInboundSamlSsoProfileOperationMetadata">DeleteInboundSamlSsoProfileOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinboundsamlssoprofileoperationmetadata"></a>
<a id="schema_DeleteInboundSamlSsoProfileOperationMetadata"></a>
<a id="tocSdeleteinboundsamlssoprofileoperationmetadata"></a>
<a id="tocsdeleteinboundsamlssoprofileoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSamlSsoProfilesService.DeleteInboundSamlSsoProfile.

<h2 id="tocS_DeleteInboundSsoAssignmentOperationMetadata">DeleteInboundSsoAssignmentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinboundssoassignmentoperationmetadata"></a>
<a id="schema_DeleteInboundSsoAssignmentOperationMetadata"></a>
<a id="tocSdeleteinboundssoassignmentoperationmetadata"></a>
<a id="tocsdeleteinboundssoassignmentoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSsoAssignmentsService.DeleteInboundSsoAssignment.

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "androidSpecificAttributes": {
    "enabledUnknownSources": true,
    "ownerProfileAccount": true,
    "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    "supportsWorkProfile": true
  },
  "assetTag": "string",
  "basebandVersion": "string",
  "bootloaderVersion": "string",
  "brand": "string",
  "buildNumber": "string",
  "clientTypes": [
    "CLIENT_TYPE_UNSPECIFIED"
  ],
  "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
  "createTime": "string",
  "deviceId": "string",
  "deviceType": "DEVICE_TYPE_UNSPECIFIED",
  "enabledDeveloperOptions": true,
  "enabledUsbDebugging": true,
  "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
  "endpointVerificationSpecificAttributes": {
    "certificateAttributes": [
      {
        "certificateTemplate": {
          "id": "string",
          "majorVersion": 0,
          "minorVersion": 0
        },
        "fingerprint": "string",
        "issuer": "string",
        "serialNumber": "string",
        "subject": "string",
        "thumbprint": "string",
        "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
        "validityExpirationTime": "string",
        "validityStartTime": "string"
      }
    ]
  },
  "hostname": "string",
  "imei": "string",
  "kernelVersion": "string",
  "lastSyncTime": "string",
  "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
  "manufacturer": "string",
  "meid": "string",
  "model": "string",
  "name": "string",
  "networkOperator": "string",
  "osVersion": "string",
  "otherAccounts": [
    "string"
  ],
  "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
  "releaseVersion": "string",
  "securityPatchTime": "string",
  "serialNumber": "string",
  "wifiMacAddresses": [
    "string"
  ]
}
```

A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidSpecificAttributes|[AndroidAttributes](#schemaandroidattributes)|false|none|Output only. Attributes specific to Android devices.|
|assetTag|string|false|none|Asset tag of the device.|
|basebandVersion|string|false|read-only|Output only. Baseband version of the device.|
|bootloaderVersion|string|false|read-only|Output only. Device bootloader version. Example: 0.6.7.|
|brand|string|false|read-only|Output only. Device brand. Example: Samsung.|
|buildNumber|string|false|read-only|Output only. Build number of the device.|
|clientTypes|[string]|false|none|List of the clients the device is reporting to.|
|compromisedState|string|false|read-only|Output only. Represents whether the Device is compromised.|
|createTime|string(google-datetime)|false|read-only|Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.|
|deviceId|string|false|none|Unique identifier for the device.|
|deviceType|string|false|read-only|Output only. Type of device.|
|enabledDeveloperOptions|boolean|false|read-only|Output only. Whether developer options is enabled on device.|
|enabledUsbDebugging|boolean|false|read-only|Output only. Whether USB debugging is enabled on device.|
|encryptionState|string|false|read-only|Output only. Device encryption state.|
|endpointVerificationSpecificAttributes|[EndpointVerificationSpecificAttributes](#schemaendpointverificationspecificattributes)|false|none|Output only. Attributes specific to Endpoint Verification devices.|
|hostname|string|false|none|Host name of the device.|
|imei|string|false|read-only|Output only. IMEI number of device if GSM device; empty otherwise.|
|kernelVersion|string|false|read-only|Output only. Kernel version of the device.|
|lastSyncTime|string(google-datetime)|false|none|Most recent time when device synced with this service.|
|managementState|string|false|read-only|Output only. Management state of the device|
|manufacturer|string|false|read-only|Output only. Device manufacturer. Example: Motorola.|
|meid|string|false|read-only|Output only. MEID number of device if CDMA device; empty otherwise.|
|model|string|false|read-only|Output only. Model name of device. Example: Pixel 3.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device.|
|networkOperator|string|false|read-only|Output only. Mobile or network operator of device, if available.|
|osVersion|string|false|read-only|Output only. OS version of the device. Example: Android 8.1.0.|
|otherAccounts|[string]|false|read-only|Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if \|ownership_privilege\| is \|PROFILE_OWNER\| or \|DEVICE_OWNER\|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".|
|ownerType|string|false|read-only|Output only. Whether the device is owned by the company or an individual|
|releaseVersion|string|false|read-only|Output only. OS release version. Example: 6.0.|
|securityPatchTime|string(google-datetime)|false|read-only|Output only. OS security patch update time on device.|
|serialNumber|string|false|none|Serial Number of device. Example: HT82V1A01076.|
|wifiMacAddresses|[string]|false|none|WiFi MAC addresses of device.|

#### Enumerated Values

|Property|Value|
|---|---|
|clientTypes|CLIENT_TYPE_UNSPECIFIED|
|clientTypes|DRIVE_FS|
|clientTypes|FUNDAMENTAL|
|clientTypes|ENDPOINT_VERIFICATION|
|clientTypes|WINDOWS_ADVANCED|
|clientTypes|GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS|
|compromisedState|COMPROMISED_STATE_UNSPECIFIED|
|compromisedState|COMPROMISED|
|compromisedState|UNCOMPROMISED|
|deviceType|DEVICE_TYPE_UNSPECIFIED|
|deviceType|ANDROID|
|deviceType|IOS|
|deviceType|GOOGLE_SYNC|
|deviceType|WINDOWS|
|deviceType|MAC_OS|
|deviceType|LINUX|
|deviceType|CHROME_OS|
|encryptionState|ENCRYPTION_STATE_UNSPECIFIED|
|encryptionState|UNSUPPORTED_BY_DEVICE|
|encryptionState|ENCRYPTED|
|encryptionState|NOT_ENCRYPTED|
|managementState|MANAGEMENT_STATE_UNSPECIFIED|
|managementState|APPROVED|
|managementState|BLOCKED|
|managementState|PENDING|
|managementState|UNPROVISIONED|
|managementState|WIPING|
|managementState|WIPED|
|ownerType|DEVICE_OWNERSHIP_UNSPECIFIED|
|ownerType|COMPANY|
|ownerType|BYOD|

<h2 id="tocS_DeviceUser">DeviceUser</h2>
<!-- backwards compatibility -->
<a id="schemadeviceuser"></a>
<a id="schema_DeviceUser"></a>
<a id="tocSdeviceuser"></a>
<a id="tocsdeviceuser"></a>

```json
{
  "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
  "createTime": "string",
  "firstSyncTime": "string",
  "languageCode": "string",
  "lastSyncTime": "string",
  "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
  "name": "string",
  "passwordState": "PASSWORD_STATE_UNSPECIFIED",
  "userAgent": "string",
  "userEmail": "string"
}
```

Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compromisedState|string|false|none|Compromised State of the DeviceUser object|
|createTime|string(google-datetime)|false|none|When the user first signed in to the device|
|firstSyncTime|string(google-datetime)|false|read-only|Output only. Most recent time when user registered with this service.|
|languageCode|string|false|read-only|Output only. Default locale used on device, in IETF BCP-47 format.|
|lastSyncTime|string(google-datetime)|false|read-only|Output only. Last time when user synced with policies.|
|managementState|string|false|read-only|Output only. Management state of the user on the device.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where `device_user_id` uniquely identifies a user's use of a device.|
|passwordState|string|false|none|Password state of the DeviceUser object|
|userAgent|string|false|read-only|Output only. User agent on the device for this specific user|
|userEmail|string|false|none|Email address of the user registered on the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|compromisedState|COMPROMISED_STATE_UNSPECIFIED|
|compromisedState|COMPROMISED|
|compromisedState|NOT_COMPROMISED|
|managementState|MANAGEMENT_STATE_UNSPECIFIED|
|managementState|WIPING|
|managementState|WIPED|
|managementState|APPROVED|
|managementState|BLOCKED|
|managementState|PENDING_APPROVAL|
|managementState|UNENROLLED|
|passwordState|PASSWORD_STATE_UNSPECIFIED|
|passwordState|PASSWORD_SET|
|passwordState|PASSWORD_NOT_SET|

<h2 id="tocS_DsaPublicKeyInfo">DsaPublicKeyInfo</h2>
<!-- backwards compatibility -->
<a id="schemadsapublickeyinfo"></a>
<a id="schema_DsaPublicKeyInfo"></a>
<a id="tocSdsapublickeyinfo"></a>
<a id="tocsdsapublickeyinfo"></a>

```json
{
  "keySize": 0
}
```

Information of a DSA public key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keySize|integer(int32)|false|none|Key size in bits (size of parameter P).|

<h2 id="tocS_DynamicGroupMetadata">DynamicGroupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadynamicgroupmetadata"></a>
<a id="schema_DynamicGroupMetadata"></a>
<a id="tocSdynamicgroupmetadata"></a>
<a id="tocsdynamicgroupmetadata"></a>

```json
{
  "queries": [
    {
      "query": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "status": {
    "status": "STATUS_UNSPECIFIED",
    "statusTime": "string"
  }
}
```

Dynamic group metadata like queries and status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|[[DynamicGroupQuery](#schemadynamicgroupquery)]|false|none|Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 100 dynamic groups.|
|status|[DynamicGroupStatus](#schemadynamicgroupstatus)|false|none|Output only. Status of the dynamic group.|

<h2 id="tocS_DynamicGroupQuery">DynamicGroupQuery</h2>
<!-- backwards compatibility -->
<a id="schemadynamicgroupquery"></a>
<a id="schema_DynamicGroupQuery"></a>
<a id="tocSdynamicgroupquery"></a>
<a id="tocsdynamicgroupquery"></a>

```json
{
  "query": "string",
  "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
}
```

Defines a query on a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')`|
|resourceType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|RESOURCE_TYPE_UNSPECIFIED|
|resourceType|USER|

<h2 id="tocS_DynamicGroupStatus">DynamicGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemadynamicgroupstatus"></a>
<a id="schema_DynamicGroupStatus"></a>
<a id="tocSdynamicgroupstatus"></a>
<a id="tocsdynamicgroupstatus"></a>

```json
{
  "status": "STATUS_UNSPECIFIED",
  "statusTime": "string"
}
```

The current status of a dynamic group along with timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status of the dynamic group.|
|statusTime|string(google-datetime)|false|none|The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|UP_TO_DATE|
|status|UPDATING_MEMBERSHIPS|
|status|INVALID_QUERY|

<h2 id="tocS_EndpointVerificationSpecificAttributes">EndpointVerificationSpecificAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaendpointverificationspecificattributes"></a>
<a id="schema_EndpointVerificationSpecificAttributes"></a>
<a id="tocSendpointverificationspecificattributes"></a>
<a id="tocsendpointverificationspecificattributes"></a>

```json
{
  "certificateAttributes": [
    {
      "certificateTemplate": {
        "id": "string",
        "majorVersion": 0,
        "minorVersion": 0
      },
      "fingerprint": "string",
      "issuer": "string",
      "serialNumber": "string",
      "subject": "string",
      "thumbprint": "string",
      "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
      "validityExpirationTime": "string",
      "validityStartTime": "string"
    }
  ]
}
```

Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateAttributes|[[CertificateAttributes](#schemacertificateattributes)]|false|none|Details of certificates.|

<h2 id="tocS_EntityKey">EntityKey</h2>
<!-- backwards compatibility -->
<a id="schemaentitykey"></a>
<a id="schema_EntityKey"></a>
<a id="tocSentitykey"></a>
<a id="tocsentitykey"></a>

```json
{
  "id": "string",
  "namespace": "string"
}
```

A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.|
|namespace|string|false|none|The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.|

<h2 id="tocS_ExpiryDetail">ExpiryDetail</h2>
<!-- backwards compatibility -->
<a id="schemaexpirydetail"></a>
<a id="schema_ExpiryDetail"></a>
<a id="tocSexpirydetail"></a>
<a id="tocsexpirydetail"></a>

```json
{
  "expireTime": "string"
}
```

The `MembershipRole` expiry details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The time at which the `MembershipRole` will expire.|

<h2 id="tocS_GetMembershipGraphResponse">GetMembershipGraphResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmembershipgraphresponse"></a>
<a id="schema_GetMembershipGraphResponse"></a>
<a id="tocSgetmembershipgraphresponse"></a>
<a id="tocsgetmembershipgraphresponse"></a>

```json
{
  "adjacencyList": [
    {
      "edges": [
        {
          "createTime": "string",
          "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
          "memberKey": {
            "id": "string",
            "namespace": "string"
          },
          "name": "string",
          "preferredMemberKey": {
            "id": "string",
            "namespace": "string"
          },
          "roles": [
            {
              "expiryDetail": {
                "expireTime": "string"
              },
              "name": "string",
              "restrictionEvaluations": {
                "memberRestrictionEvaluation": {
                  "state": "STATE_UNSPECIFIED"
                }
              }
            }
          ],
          "type": "TYPE_UNSPECIFIED",
          "updateTime": "string"
        }
      ],
      "group": "string"
    }
  ],
  "groups": [
    {
      "additionalGroupKeys": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dynamicGroupMetadata": {
        "queries": [
          {
            "query": "string",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "status": {
          "status": "STATUS_UNSPECIFIED",
          "statusTime": "string"
        }
      },
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "posixGroups": [
        {
          "gid": "string",
          "name": "string",
          "systemId": "string"
        }
      ],
      "updateTime": "string"
    }
  ]
}
```

The response message for MembershipsService.GetMembershipGraph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjacencyList|[[MembershipAdjacencyList](#schemamembershipadjacencylist)]|false|none|The membership graph's path information represented as an adjacency list.|
|groups|[[Group](#schemagroup)]|false|none|The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1AndroidAttributes">GoogleAppsCloudidentityDevicesV1AndroidAttributes</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1androidattributes"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1AndroidAttributes"></a>
<a id="tocSgoogleappscloudidentitydevicesv1androidattributes"></a>
<a id="tocsgoogleappscloudidentitydevicesv1androidattributes"></a>

```json
{
  "enabledUnknownSources": true,
  "ownerProfileAccount": true,
  "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
  "supportsWorkProfile": true
}
```

Resource representing the Android specific attributes of a Device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledUnknownSources|boolean|false|none|Whether applications from unknown sources can be installed on device.|
|ownerProfileAccount|boolean|false|none|Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.|
|ownershipPrivilege|string|false|none|Ownership privileges on device.|
|supportsWorkProfile|boolean|false|none|Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|ownershipPrivilege|OWNERSHIP_PRIVILEGE_UNSPECIFIED|
|ownershipPrivilege|DEVICE_ADMINISTRATOR|
|ownershipPrivilege|PROFILE_OWNER|
|ownershipPrivilege|DEVICE_OWNER|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1approvedeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1approvedeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1approvedeviceusermetadata"></a>

```json
{}
```

Metadata for ApproveDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse">GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1approvedeviceuserresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1approvedeviceuserresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1approvedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for approving the device to access user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[GoogleAppsCloudidentityDevicesV1DeviceUser](#schemagoogleappscloudidentitydevicesv1deviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1blockdeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1blockdeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1blockdeviceusermetadata"></a>

```json
{}
```

Metadata for BlockDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse">GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1blockdeviceuserresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1blockdeviceuserresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1blockdeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for blocking the device from accessing user data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[GoogleAppsCloudidentityDevicesV1DeviceUser](#schemagoogleappscloudidentitydevicesv1deviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata">GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1cancelwipedevicemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1cancelwipedevicemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1cancelwipedevicemetadata"></a>

```json
{}
```

Metadata for CancelWipeDevice LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse">GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1cancelwipedeviceresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1cancelwipedeviceresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1cancelwipedeviceresponse"></a>

```json
{
  "device": {
    "androidSpecificAttributes": {
      "enabledUnknownSources": true,
      "ownerProfileAccount": true,
      "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
      "supportsWorkProfile": true
    },
    "assetTag": "string",
    "basebandVersion": "string",
    "bootloaderVersion": "string",
    "brand": "string",
    "buildNumber": "string",
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "deviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "enabledDeveloperOptions": true,
    "enabledUsbDebugging": true,
    "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
    "imei": "string",
    "kernelVersion": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "name": "string",
    "networkOperator": "string",
    "osVersion": "string",
    "otherAccounts": [
      "string"
    ],
    "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
    "releaseVersion": "string",
    "securityPatchTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

Response message for cancelling an unfinished device wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[GoogleAppsCloudidentityDevicesV1Device](#schemagoogleappscloudidentitydevicesv1device)|false|none|Resultant Device object for the action. Note that asset tags will not be returned in the device object.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1cancelwipedeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1cancelwipedeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1cancelwipedeviceusermetadata"></a>

```json
{}
```

Metadata for CancelWipeDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse">GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1cancelwipedeviceuserresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1cancelwipedeviceuserresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1cancelwipedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for cancelling an unfinished user account wipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[GoogleAppsCloudidentityDevicesV1DeviceUser](#schemagoogleappscloudidentitydevicesv1deviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1ClientState">GoogleAppsCloudidentityDevicesV1ClientState</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1clientstate"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1ClientState"></a>
<a id="tocSgoogleappscloudidentitydevicesv1clientstate"></a>
<a id="tocsgoogleappscloudidentitydevicesv1clientstate"></a>

```json
{
  "assetTags": [
    "string"
  ],
  "complianceState": "COMPLIANCE_STATE_UNSPECIFIED",
  "createTime": "string",
  "customId": "string",
  "etag": "string",
  "healthScore": "HEALTH_SCORE_UNSPECIFIED",
  "keyValuePairs": {
    "property1": {
      "boolValue": true,
      "numberValue": 0,
      "stringValue": "string"
    },
    "property2": {
      "boolValue": true,
      "numberValue": 0,
      "stringValue": "string"
    }
  },
  "lastUpdateTime": "string",
  "managed": "MANAGED_STATE_UNSPECIFIED",
  "name": "string",
  "ownerType": "OWNER_TYPE_UNSPECIFIED",
  "scoreReason": "string"
}
```

Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetTags|[string]|false|none|The caller can specify asset tags for this resource|
|complianceState|string|false|none|The compliance state of the resource as specified by the API client.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the client state data was created.|
|customId|string|false|none|This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.|
|etag|string|false|none|The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest|
|healthScore|string|false|none|The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.|
|keyValuePairs|object|false|none|The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. The time the client state data was last updated.|
|managed|string|false|none|The management state of the resource as specified by the API client.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')|
|ownerType|string|false|read-only|Output only. The owner of the ClientState|
|scoreReason|string|false|none|A descriptive cause of the health score.|

#### Enumerated Values

|Property|Value|
|---|---|
|complianceState|COMPLIANCE_STATE_UNSPECIFIED|
|complianceState|COMPLIANT|
|complianceState|NON_COMPLIANT|
|healthScore|HEALTH_SCORE_UNSPECIFIED|
|healthScore|VERY_POOR|
|healthScore|POOR|
|healthScore|NEUTRAL|
|healthScore|GOOD|
|healthScore|VERY_GOOD|
|managed|MANAGED_STATE_UNSPECIFIED|
|managed|MANAGED|
|managed|UNMANAGED|
|ownerType|OWNER_TYPE_UNSPECIFIED|
|ownerType|OWNER_TYPE_CUSTOMER|
|ownerType|OWNER_TYPE_PARTNER|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata">GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1createdevicemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1createdevicemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1createdevicemetadata"></a>

```json
{}
```

Metadata for CreateDevice LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1CustomAttributeValue">GoogleAppsCloudidentityDevicesV1CustomAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1customattributevalue"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1CustomAttributeValue"></a>
<a id="tocSgoogleappscloudidentitydevicesv1customattributevalue"></a>
<a id="tocsgoogleappscloudidentitydevicesv1customattributevalue"></a>

```json
{
  "boolValue": true,
  "numberValue": 0,
  "stringValue": "string"
}
```

Additional custom attribute values may be one of these types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Represents a boolean value.|
|numberValue|number(double)|false|none|Represents a double value.|
|stringValue|string|false|none|Represents a string value.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata">GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1deletedevicemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1deletedevicemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1deletedevicemetadata"></a>

```json
{}
```

Metadata for DeleteDevice LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1deletedeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1deletedeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1deletedeviceusermetadata"></a>

```json
{}
```

Metadata for DeleteDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1Device">GoogleAppsCloudidentityDevicesV1Device</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1device"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1Device"></a>
<a id="tocSgoogleappscloudidentitydevicesv1device"></a>
<a id="tocsgoogleappscloudidentitydevicesv1device"></a>

```json
{
  "androidSpecificAttributes": {
    "enabledUnknownSources": true,
    "ownerProfileAccount": true,
    "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    "supportsWorkProfile": true
  },
  "assetTag": "string",
  "basebandVersion": "string",
  "bootloaderVersion": "string",
  "brand": "string",
  "buildNumber": "string",
  "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
  "createTime": "string",
  "deviceId": "string",
  "deviceType": "DEVICE_TYPE_UNSPECIFIED",
  "enabledDeveloperOptions": true,
  "enabledUsbDebugging": true,
  "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
  "imei": "string",
  "kernelVersion": "string",
  "lastSyncTime": "string",
  "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
  "manufacturer": "string",
  "meid": "string",
  "model": "string",
  "name": "string",
  "networkOperator": "string",
  "osVersion": "string",
  "otherAccounts": [
    "string"
  ],
  "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
  "releaseVersion": "string",
  "securityPatchTime": "string",
  "serialNumber": "string",
  "wifiMacAddresses": [
    "string"
  ]
}
```

 A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidSpecificAttributes|[GoogleAppsCloudidentityDevicesV1AndroidAttributes](#schemagoogleappscloudidentitydevicesv1androidattributes)|false|none|Output only. Attributes specific to Android devices.|
|assetTag|string|false|none|Asset tag of the device.|
|basebandVersion|string|false|read-only|Output only. Baseband version of the device.|
|bootloaderVersion|string|false|read-only|Output only. Device bootloader version. Example: 0.6.7.|
|brand|string|false|read-only|Output only. Device brand. Example: Samsung.|
|buildNumber|string|false|read-only|Output only. Build number of the device.|
|compromisedState|string|false|read-only|Output only. Represents whether the Device is compromised.|
|createTime|string(google-datetime)|false|read-only|Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.|
|deviceId|string|false|none|Unique identifier for the device.|
|deviceType|string|false|read-only|Output only. Type of device.|
|enabledDeveloperOptions|boolean|false|read-only|Output only. Whether developer options is enabled on device.|
|enabledUsbDebugging|boolean|false|read-only|Output only. Whether USB debugging is enabled on device.|
|encryptionState|string|false|read-only|Output only. Device encryption state.|
|imei|string|false|read-only|Output only. IMEI number of device if GSM device; empty otherwise.|
|kernelVersion|string|false|read-only|Output only. Kernel version of the device.|
|lastSyncTime|string(google-datetime)|false|none|Most recent time when device synced with this service.|
|managementState|string|false|read-only|Output only. Management state of the device|
|manufacturer|string|false|read-only|Output only. Device manufacturer. Example: Motorola.|
|meid|string|false|read-only|Output only. MEID number of device if CDMA device; empty otherwise.|
|model|string|false|read-only|Output only. Model name of device. Example: Pixel 3.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device.|
|networkOperator|string|false|read-only|Output only. Mobile or network operator of device, if available.|
|osVersion|string|false|read-only|Output only. OS version of the device. Example: Android 8.1.0.|
|otherAccounts|[string]|false|read-only|Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if \|ownership_privilege\| is \|PROFILE_OWNER\| or \|DEVICE_OWNER\|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".|
|ownerType|string|false|read-only|Output only. Whether the device is owned by the company or an individual|
|releaseVersion|string|false|read-only|Output only. OS release version. Example: 6.0.|
|securityPatchTime|string(google-datetime)|false|read-only|Output only. OS security patch update time on device.|
|serialNumber|string|false|none|Serial Number of device. Example: HT82V1A01076.|
|wifiMacAddresses|[string]|false|none|WiFi MAC addresses of device.|

#### Enumerated Values

|Property|Value|
|---|---|
|compromisedState|COMPROMISED_STATE_UNSPECIFIED|
|compromisedState|COMPROMISED|
|compromisedState|UNCOMPROMISED|
|deviceType|DEVICE_TYPE_UNSPECIFIED|
|deviceType|ANDROID|
|deviceType|IOS|
|deviceType|GOOGLE_SYNC|
|deviceType|WINDOWS|
|deviceType|MAC_OS|
|deviceType|LINUX|
|deviceType|CHROME_OS|
|encryptionState|ENCRYPTION_STATE_UNSPECIFIED|
|encryptionState|UNSUPPORTED_BY_DEVICE|
|encryptionState|ENCRYPTED|
|encryptionState|NOT_ENCRYPTED|
|managementState|MANAGEMENT_STATE_UNSPECIFIED|
|managementState|APPROVED|
|managementState|BLOCKED|
|managementState|PENDING|
|managementState|UNPROVISIONED|
|managementState|WIPING|
|managementState|WIPED|
|ownerType|DEVICE_OWNERSHIP_UNSPECIFIED|
|ownerType|COMPANY|
|ownerType|BYOD|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1DeviceUser">GoogleAppsCloudidentityDevicesV1DeviceUser</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1deviceuser"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1DeviceUser"></a>
<a id="tocSgoogleappscloudidentitydevicesv1deviceuser"></a>
<a id="tocsgoogleappscloudidentitydevicesv1deviceuser"></a>

```json
{
  "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
  "createTime": "string",
  "firstSyncTime": "string",
  "languageCode": "string",
  "lastSyncTime": "string",
  "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
  "name": "string",
  "passwordState": "PASSWORD_STATE_UNSPECIFIED",
  "userAgent": "string",
  "userEmail": "string"
}
```

Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compromisedState|string|false|none|Compromised State of the DeviceUser object|
|createTime|string(google-datetime)|false|none|When the user first signed in to the device|
|firstSyncTime|string(google-datetime)|false|read-only|Output only. Most recent time when user registered with this service.|
|languageCode|string|false|read-only|Output only. Default locale used on device, in IETF BCP-47 format.|
|lastSyncTime|string(google-datetime)|false|read-only|Output only. Last time when user synced with policies.|
|managementState|string|false|read-only|Output only. Management state of the user on the device.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device.|
|passwordState|string|false|none|Password state of the DeviceUser object|
|userAgent|string|false|read-only|Output only. User agent on the device for this specific user|
|userEmail|string|false|none|Email address of the user registered on the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|compromisedState|COMPROMISED_STATE_UNSPECIFIED|
|compromisedState|COMPROMISED|
|compromisedState|NOT_COMPROMISED|
|managementState|MANAGEMENT_STATE_UNSPECIFIED|
|managementState|WIPING|
|managementState|WIPED|
|managementState|APPROVED|
|managementState|BLOCKED|
|managementState|PENDING_APPROVAL|
|managementState|UNENROLLED|
|passwordState|PASSWORD_STATE_UNSPECIFIED|
|passwordState|PASSWORD_SET|
|passwordState|PASSWORD_NOT_SET|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata">GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1listendpointappsmetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1listendpointappsmetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1listendpointappsmetadata"></a>

```json
{}
```

Metadata for ListEndpointApps LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1signoutdeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1signoutdeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1signoutdeviceusermetadata"></a>

```json
{}
```

Metadata for SignoutDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata">GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1updateclientstatemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1updateclientstatemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1updateclientstatemetadata"></a>

```json
{}
```

Metadata for UpdateClientState LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata">GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1updatedevicemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1updatedevicemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1updatedevicemetadata"></a>

```json
{}
```

Metadata for UpdateDevice LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata">GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1wipedevicemetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1wipedevicemetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1wipedevicemetadata"></a>

```json
{}
```

Metadata for WipeDevice LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1WipeDeviceResponse">GoogleAppsCloudidentityDevicesV1WipeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1wipedeviceresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1WipeDeviceResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1wipedeviceresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1wipedeviceresponse"></a>

```json
{
  "device": {
    "androidSpecificAttributes": {
      "enabledUnknownSources": true,
      "ownerProfileAccount": true,
      "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
      "supportsWorkProfile": true
    },
    "assetTag": "string",
    "basebandVersion": "string",
    "bootloaderVersion": "string",
    "brand": "string",
    "buildNumber": "string",
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "deviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "enabledDeveloperOptions": true,
    "enabledUsbDebugging": true,
    "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
    "imei": "string",
    "kernelVersion": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "name": "string",
    "networkOperator": "string",
    "osVersion": "string",
    "otherAccounts": [
      "string"
    ],
    "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
    "releaseVersion": "string",
    "securityPatchTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

Response message for wiping all data on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[GoogleAppsCloudidentityDevicesV1Device](#schemagoogleappscloudidentitydevicesv1device)|false|none|Resultant Device object for the action. Note that asset tags will not be returned in the device object.|

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata">GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1wipedeviceusermetadata"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata"></a>
<a id="tocSgoogleappscloudidentitydevicesv1wipedeviceusermetadata"></a>
<a id="tocsgoogleappscloudidentitydevicesv1wipedeviceusermetadata"></a>

```json
{}
```

Metadata for WipeDeviceUser LRO.

<h2 id="tocS_GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse">GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleappscloudidentitydevicesv1wipedeviceuserresponse"></a>
<a id="schema_GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse"></a>
<a id="tocSgoogleappscloudidentitydevicesv1wipedeviceuserresponse"></a>
<a id="tocsgoogleappscloudidentitydevicesv1wipedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for wiping the user's account from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[GoogleAppsCloudidentityDevicesV1DeviceUser](#schemagoogleappscloudidentitydevicesv1deviceuser)|false|none|Resultant DeviceUser object for the action.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "additionalGroupKeys": [
    {
      "id": "string",
      "namespace": "string"
    }
  ],
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "dynamicGroupMetadata": {
    "queries": [
      {
        "query": "string",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ],
    "status": {
      "status": "STATUS_UNSPECIFIED",
      "statusTime": "string"
    }
  },
  "groupKey": {
    "id": "string",
    "namespace": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "parent": "string",
  "posixGroups": [
    {
      "gid": "string",
      "name": "string",
      "systemId": "string"
    }
  ],
  "updateTime": "string"
}
```

A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalGroupKeys|[[EntityKey](#schemaentitykey)]|false|read-only|Output only. Additional group keys associated with the Group.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the `Group` was created.|
|description|string|false|none|An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.|
|displayName|string|false|none|The display name of the `Group`.|
|dynamicGroupMetadata|[DynamicGroupMetadata](#schemadynamicgroupmetadata)|false|none|Optional. Dynamic group metadata like queries and status.|
|groupKey|[EntityKey](#schemaentitykey)|false|none|Required. The `EntityKey` of the `Group`.|
|labels|object|false|none|Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value.|
|name|string|false|read-only|Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.|
|parent|string|false|none|Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)|
|posixGroups|[[PosixGroup](#schemaposixgroup)]|false|none|Optional. The POSIX groups associated with the `Group`.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the `Group` was last updated.|

<h2 id="tocS_GroupRelation">GroupRelation</h2>
<!-- backwards compatibility -->
<a id="schemagrouprelation"></a>
<a id="schema_GroupRelation"></a>
<a id="tocSgrouprelation"></a>
<a id="tocsgrouprelation"></a>

```json
{
  "displayName": "string",
  "group": "string",
  "groupKey": {
    "id": "string",
    "namespace": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "relationType": "RELATION_TYPE_UNSPECIFIED",
  "roles": [
    {
      "role": "string"
    }
  ]
}
```

Message representing a transitive group of a user or a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name for this group.|
|group|string|false|none|Resource name for this group.|
|groupKey|[EntityKey](#schemaentitykey)|false|none|Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.|
|labels|object|false|none|Labels for Group resource.|
|relationType|string|false|none|The relation between the member and the transitive group.|
|roles|[[TransitiveMembershipRole](#schematransitivemembershiprole)]|false|none|Membership roles of the member for the group.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationType|RELATION_TYPE_UNSPECIFIED|
|relationType|DIRECT|
|relationType|INDIRECT|
|relationType|DIRECT_AND_INDIRECT|

<h2 id="tocS_IdpCredential">IdpCredential</h2>
<!-- backwards compatibility -->
<a id="schemaidpcredential"></a>
<a id="schema_IdpCredential"></a>
<a id="tocSidpcredential"></a>
<a id="tocsidpcredential"></a>

```json
{
  "dsaKeyInfo": {
    "keySize": 0
  },
  "name": "string",
  "rsaKeyInfo": {
    "keySize": 0
  },
  "updateTime": "string"
}
```

Credential for verifying signatures produced by the Identity Provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dsaKeyInfo|[DsaPublicKeyInfo](#schemadsapublickeyinfo)|false|none|Output only. Information of a DSA public key.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential.|
|rsaKeyInfo|[RsaPublicKeyInfo](#schemarsapublickeyinfo)|false|none|Output only. Information of a RSA public key.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the `IdpCredential` was last updated.|

<h2 id="tocS_InboundSamlSsoProfile">InboundSamlSsoProfile</h2>
<!-- backwards compatibility -->
<a id="schemainboundsamlssoprofile"></a>
<a id="schema_InboundSamlSsoProfile"></a>
<a id="tocSinboundsamlssoprofile"></a>
<a id="tocsinboundsamlssoprofile"></a>

```json
{
  "customer": "string",
  "displayName": "string",
  "idpConfig": {
    "changePasswordUri": "string",
    "entityId": "string",
    "logoutRedirectUri": "string",
    "singleSignOnServiceUri": "string"
  },
  "name": "string",
  "spConfig": {
    "assertionConsumerServiceUri": "string",
    "entityId": "string"
  }
}
```

A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Immutable. The customer. For example: `customers/C0123abc`.|
|displayName|string|false|none|Human-readable name of the SAML SSO profile.|
|idpConfig|[SamlIdpConfig](#schemasamlidpconfig)|false|none|SAML identity provider configuration.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile.|
|spConfig|[SamlSpConfig](#schemasamlspconfig)|false|none|SAML service provider configuration for this SAML SSO profile. These are the service provider details provided by Google that should be configured on the corresponding identity provider.|

<h2 id="tocS_InboundSsoAssignment">InboundSsoAssignment</h2>
<!-- backwards compatibility -->
<a id="schemainboundssoassignment"></a>
<a id="schema_InboundSsoAssignment"></a>
<a id="tocSinboundssoassignment"></a>
<a id="tocsinboundssoassignment"></a>

```json
{
  "customer": "string",
  "name": "string",
  "rank": 0,
  "samlSsoInfo": {
    "inboundSamlSsoProfile": "string"
  },
  "signInBehavior": {
    "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
  },
  "ssoMode": "SSO_MODE_UNSPECIFIED",
  "targetGroup": "string",
  "targetOrgUnit": "string"
}
```

Targets with "set" SSO assignments and their respective assignments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Immutable. The customer. For example: `customers/C0123abc`.|
|name|string|false|read-only|Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.|
|rank|integer(int32)|false|none|Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.|
|samlSsoInfo|[SamlSsoInfo](#schemasamlssoinfo)|false|none|SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`.|
|signInBehavior|[SignInBehavior](#schemasigninbehavior)|false|none|Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.|
|ssoMode|string|false|none|Inbound SSO behavior.|
|targetGroup|string|false|none|Immutable. Must be of the form `groups/{group}`.|
|targetOrgUnit|string|false|none|Immutable. Must be of the form `orgUnits/{org_unit}`.|

#### Enumerated Values

|Property|Value|
|---|---|
|ssoMode|SSO_MODE_UNSPECIFIED|
|ssoMode|SSO_OFF|
|ssoMode|SAML_SSO|
|ssoMode|DOMAIN_WIDE_SAML_IF_ENABLED|

<h2 id="tocS_IsInvitableUserResponse">IsInvitableUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaisinvitableuserresponse"></a>
<a id="schema_IsInvitableUserResponse"></a>
<a id="tocSisinvitableuserresponse"></a>
<a id="tocsisinvitableuserresponse"></a>

```json
{
  "isInvitableUser": true
}
```

Response for IsInvitableUser RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isInvitableUser|boolean|false|none|Returns true if the email address is invitable.|

<h2 id="tocS_ListClientStatesResponse">ListClientStatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientstatesresponse"></a>
<a id="schema_ListClientStatesResponse"></a>
<a id="tocSlistclientstatesresponse"></a>
<a id="tocslistclientstatesresponse"></a>

```json
{
  "clientStates": [
    {
      "assetTags": [
        "string"
      ],
      "complianceState": "COMPLIANCE_STATE_UNSPECIFIED",
      "createTime": "string",
      "customId": "string",
      "etag": "string",
      "healthScore": "HEALTH_SCORE_UNSPECIFIED",
      "keyValuePairs": {
        "property1": {
          "boolValue": true,
          "numberValue": 0,
          "stringValue": "string"
        },
        "property2": {
          "boolValue": true,
          "numberValue": 0,
          "stringValue": "string"
        }
      },
      "lastUpdateTime": "string",
      "managed": "MANAGED_STATE_UNSPECIFIED",
      "name": "string",
      "ownerType": "OWNER_TYPE_UNSPECIFIED",
      "scoreReason": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message that is returned in LRO result of ListClientStates Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientStates|[[ClientState](#schemaclientstate)]|false|none|Client states meeting the list restrictions.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. Empty if there are no more results.|

<h2 id="tocS_ListDeviceUsersResponse">ListDeviceUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceusersresponse"></a>
<a id="schema_ListDeviceUsersResponse"></a>
<a id="tocSlistdeviceusersresponse"></a>
<a id="tocslistdeviceusersresponse"></a>

```json
{
  "deviceUsers": [
    {
      "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
      "createTime": "string",
      "firstSyncTime": "string",
      "languageCode": "string",
      "lastSyncTime": "string",
      "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
      "name": "string",
      "passwordState": "PASSWORD_STATE_UNSPECIFIED",
      "userAgent": "string",
      "userEmail": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message that is returned from the ListDeviceUsers method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUsers|[[DeviceUser](#schemadeviceuser)]|false|none|Devices meeting the list restrictions.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. Empty if there are no more results.|

<h2 id="tocS_ListDevicesResponse">ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresponse"></a>
<a id="schema_ListDevicesResponse"></a>
<a id="tocSlistdevicesresponse"></a>
<a id="tocslistdevicesresponse"></a>

```json
{
  "devices": [
    {
      "androidSpecificAttributes": {
        "enabledUnknownSources": true,
        "ownerProfileAccount": true,
        "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
        "supportsWorkProfile": true
      },
      "assetTag": "string",
      "basebandVersion": "string",
      "bootloaderVersion": "string",
      "brand": "string",
      "buildNumber": "string",
      "clientTypes": [
        "CLIENT_TYPE_UNSPECIFIED"
      ],
      "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
      "createTime": "string",
      "deviceId": "string",
      "deviceType": "DEVICE_TYPE_UNSPECIFIED",
      "enabledDeveloperOptions": true,
      "enabledUsbDebugging": true,
      "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
      "endpointVerificationSpecificAttributes": {
        "certificateAttributes": [
          {
            "certificateTemplate": {
              "id": "string",
              "majorVersion": 0,
              "minorVersion": 0
            },
            "fingerprint": "string",
            "issuer": "string",
            "serialNumber": "string",
            "subject": "string",
            "thumbprint": "string",
            "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
            "validityExpirationTime": "string",
            "validityStartTime": "string"
          }
        ]
      },
      "hostname": "string",
      "imei": "string",
      "kernelVersion": "string",
      "lastSyncTime": "string",
      "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "name": "string",
      "networkOperator": "string",
      "osVersion": "string",
      "otherAccounts": [
        "string"
      ],
      "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
      "releaseVersion": "string",
      "securityPatchTime": "string",
      "serialNumber": "string",
      "wifiMacAddresses": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message that is returned from the ListDevices method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|Devices meeting the list restrictions.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. Empty if there are no more results.|

<h2 id="tocS_ListGroupsResponse">ListGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupsresponse"></a>
<a id="schema_ListGroupsResponse"></a>
<a id="tocSlistgroupsresponse"></a>
<a id="tocslistgroupsresponse"></a>

```json
{
  "groups": [
    {
      "additionalGroupKeys": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dynamicGroupMetadata": {
        "queries": [
          {
            "query": "string",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "status": {
          "status": "STATUS_UNSPECIFIED",
          "statusTime": "string"
        }
      },
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "posixGroups": [
        {
          "gid": "string",
          "name": "string",
          "systemId": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for GroupsService.ListGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[Group](#schemagroup)]|false|none|The `Group` resources under the specified `parent`.|
|nextPageToken|string|false|none|A continuation token to retrieve the next page of results, or empty if there are no more results available.|

<h2 id="tocS_ListIdpCredentialsResponse">ListIdpCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidpcredentialsresponse"></a>
<a id="schema_ListIdpCredentialsResponse"></a>
<a id="tocSlistidpcredentialsresponse"></a>
<a id="tocslistidpcredentialsresponse"></a>

```json
{
  "idpCredentials": [
    {
      "dsaKeyInfo": {
        "keySize": 0
      },
      "name": "string",
      "rsaKeyInfo": {
        "keySize": 0
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idpCredentials|[[IdpCredential](#schemaidpcredential)]|false|none|The IdpCredentials from the specified InboundSamlSsoProfile.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListInboundSamlSsoProfilesResponse">ListInboundSamlSsoProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinboundsamlssoprofilesresponse"></a>
<a id="schema_ListInboundSamlSsoProfilesResponse"></a>
<a id="tocSlistinboundsamlssoprofilesresponse"></a>
<a id="tocslistinboundsamlssoprofilesresponse"></a>

```json
{
  "inboundSamlSsoProfiles": [
    {
      "customer": "string",
      "displayName": "string",
      "idpConfig": {
        "changePasswordUri": "string",
        "entityId": "string",
        "logoutRedirectUri": "string",
        "singleSignOnServiceUri": "string"
      },
      "name": "string",
      "spConfig": {
        "assertionConsumerServiceUri": "string",
        "entityId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSamlSsoProfiles|[[InboundSamlSsoProfile](#schemainboundsamlssoprofile)]|false|none|List of InboundSamlSsoProfiles.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListInboundSsoAssignmentsResponse">ListInboundSsoAssignmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinboundssoassignmentsresponse"></a>
<a id="schema_ListInboundSsoAssignmentsResponse"></a>
<a id="tocSlistinboundssoassignmentsresponse"></a>
<a id="tocslistinboundssoassignmentsresponse"></a>

```json
{
  "inboundSsoAssignments": [
    {
      "customer": "string",
      "name": "string",
      "rank": 0,
      "samlSsoInfo": {
        "inboundSamlSsoProfile": "string"
      },
      "signInBehavior": {
        "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
      },
      "ssoMode": "SSO_MODE_UNSPECIFIED",
      "targetGroup": "string",
      "targetOrgUnit": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSsoAssignments|[[InboundSsoAssignment](#schemainboundssoassignment)]|false|none|The assignments.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListMembershipsResponse">ListMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmembershipsresponse"></a>
<a id="schema_ListMembershipsResponse"></a>
<a id="tocSlistmembershipsresponse"></a>
<a id="tocslistmembershipsresponse"></a>

```json
{
  "memberships": [
    {
      "createTime": "string",
      "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
      "memberKey": {
        "id": "string",
        "namespace": "string"
      },
      "name": "string",
      "preferredMemberKey": {
        "id": "string",
        "namespace": "string"
      },
      "roles": [
        {
          "expiryDetail": {
            "expireTime": "string"
          },
          "name": "string",
          "restrictionEvaluations": {
            "memberRestrictionEvaluation": {
              "state": "STATE_UNSPECIFIED"
            }
          }
        }
      ],
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for MembershipsService.ListMemberships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[Membership](#schemamembership)]|false|none|The `Membership`s under the specified `parent`.|
|nextPageToken|string|false|none|A continuation token to retrieve the next page of results, or empty if there are no more results available.|

<h2 id="tocS_ListOrgMembershipsResponse">ListOrgMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorgmembershipsresponse"></a>
<a id="schema_ListOrgMembershipsResponse"></a>
<a id="tocSlistorgmembershipsresponse"></a>
<a id="tocslistorgmembershipsresponse"></a>

```json
{
  "nextPageToken": "string",
  "orgMemberships": [
    {
      "member": "string",
      "memberUri": "string",
      "name": "string",
      "type": "ENTITY_TYPE_UNSPECIFIED"
    }
  ]
}
```

The response message for OrgMembershipsService.ListOrgMemberships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|orgMemberships|[[OrgMembership](#schemaorgmembership)]|false|none|The non-vacuous membership in an orgUnit.|

<h2 id="tocS_ListUserInvitationsResponse">ListUserInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserinvitationsresponse"></a>
<a id="schema_ListUserInvitationsResponse"></a>
<a id="tocSlistuserinvitationsresponse"></a>
<a id="tocslistuserinvitationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "userInvitations": [
    {
      "mailsSentCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

Response message for UserInvitation listing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call.|
|userInvitations|[[UserInvitation](#schemauserinvitation)]|false|none|The list of UserInvitation resources.|

<h2 id="tocS_LookupGroupNameResponse">LookupGroupNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookupgroupnameresponse"></a>
<a id="schema_LookupGroupNameResponse"></a>
<a id="tocSlookupgroupnameresponse"></a>
<a id="tocslookupgroupnameresponse"></a>

```json
{
  "name": "string"
}
```

The response message for GroupsService.LookupGroupName.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`.|

<h2 id="tocS_LookupMembershipNameResponse">LookupMembershipNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookupmembershipnameresponse"></a>
<a id="schema_LookupMembershipNameResponse"></a>
<a id="tocSlookupmembershipnameresponse"></a>
<a id="tocslookupmembershipnameresponse"></a>

```json
{
  "name": "string"
}
```

The response message for MembershipsService.LookupMembershipName.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`.|

<h2 id="tocS_LookupSelfDeviceUsersResponse">LookupSelfDeviceUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalookupselfdeviceusersresponse"></a>
<a id="schema_LookupSelfDeviceUsersResponse"></a>
<a id="tocSlookupselfdeviceusersresponse"></a>
<a id="tocslookupselfdeviceusersresponse"></a>

```json
{
  "customer": "string",
  "names": [
    "string"
  ],
  "nextPageToken": "string"
}
```

Response containing resource names of the DeviceUsers associated with the caller's credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|The customer Id that may be passed back to other Devices API methods such as List, Get, etc.|
|names|[string]|false|none|[Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID|
|nextPageToken|string|false|none|Token to retrieve the next page of results. Empty if there are no more results.|

<h2 id="tocS_MemberRelation">MemberRelation</h2>
<!-- backwards compatibility -->
<a id="schemamemberrelation"></a>
<a id="schema_MemberRelation"></a>
<a id="tocSmemberrelation"></a>
<a id="tocsmemberrelation"></a>

```json
{
  "member": "string",
  "preferredMemberKey": [
    {
      "id": "string",
      "namespace": "string"
    }
  ],
  "relationType": "RELATION_TYPE_UNSPECIFIED",
  "roles": [
    {
      "role": "string"
    }
  ]
}
```

Message representing a transitive membership of a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|string|false|none|Resource name for this member.|
|preferredMemberKey|[[EntityKey](#schemaentitykey)]|false|none|Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.|
|relationType|string|false|none|The relation between the group and the transitive membership.|
|roles|[[TransitiveMembershipRole](#schematransitivemembershiprole)]|false|none|The membership role details (i.e name of role and expiry time).|

#### Enumerated Values

|Property|Value|
|---|---|
|relationType|RELATION_TYPE_UNSPECIFIED|
|relationType|DIRECT|
|relationType|INDIRECT|
|relationType|DIRECT_AND_INDIRECT|

<h2 id="tocS_MemberRestriction">MemberRestriction</h2>
<!-- backwards compatibility -->
<a id="schemamemberrestriction"></a>
<a id="schema_MemberRestriction"></a>
<a id="tocSmemberrestriction"></a>
<a id="tocsmemberrestriction"></a>

```json
{
  "evaluation": {
    "state": "STATE_UNSPECIFIED"
  },
  "query": "string"
}
```

The definition of MemberRestriction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluation|[RestrictionEvaluation](#schemarestrictionevaluation)|false|none|The evaluated state of this restriction on a group.|
|query|string|false|none|Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `\|\|` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 \|\| member.type == 3`|

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "createTime": "string",
  "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
  "memberKey": {
    "id": "string",
    "namespace": "string"
  },
  "name": "string",
  "preferredMemberKey": {
    "id": "string",
    "namespace": "string"
  },
  "roles": [
    {
      "expiryDetail": {
        "expireTime": "string"
      },
      "name": "string",
      "restrictionEvaluations": {
        "memberRestrictionEvaluation": {
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ],
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the `Membership` was created.|
|deliverySetting|string|false|read-only|Output only. Delivery setting associated with the membership.|
|memberKey|[EntityKey](#schemaentitykey)|false|none|Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.|
|name|string|false|read-only|Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.|
|preferredMemberKey|[EntityKey](#schemaentitykey)|false|none|Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.|
|roles|[[MembershipRole](#schemamembershiprole)]|false|none|The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.|
|type|string|false|read-only|Output only. The type of the membership.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the `Membership` was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|deliverySetting|DELIVERY_SETTING_UNSPECIFIED|
|deliverySetting|ALL_MAIL|
|deliverySetting|DIGEST|
|deliverySetting|DAILY|
|deliverySetting|NONE|
|deliverySetting|DISABLED|
|type|TYPE_UNSPECIFIED|
|type|USER|
|type|SERVICE_ACCOUNT|
|type|GROUP|
|type|SHARED_DRIVE|
|type|OTHER|

<h2 id="tocS_MembershipAdjacencyList">MembershipAdjacencyList</h2>
<!-- backwards compatibility -->
<a id="schemamembershipadjacencylist"></a>
<a id="schema_MembershipAdjacencyList"></a>
<a id="tocSmembershipadjacencylist"></a>
<a id="tocsmembershipadjacencylist"></a>

```json
{
  "edges": [
    {
      "createTime": "string",
      "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
      "memberKey": {
        "id": "string",
        "namespace": "string"
      },
      "name": "string",
      "preferredMemberKey": {
        "id": "string",
        "namespace": "string"
      },
      "roles": [
        {
          "expiryDetail": {
            "expireTime": "string"
          },
          "name": "string",
          "restrictionEvaluations": {
            "memberRestrictionEvaluation": {
              "state": "STATE_UNSPECIFIED"
            }
          }
        }
      ],
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "group": "string"
}
```

Membership graph's path information as an adjacency list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edges|[[Membership](#schemamembership)]|false|none|Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields.|
|group|string|false|none|Resource name of the group that the members belong to.|

<h2 id="tocS_MembershipRelation">MembershipRelation</h2>
<!-- backwards compatibility -->
<a id="schemamembershiprelation"></a>
<a id="schema_MembershipRelation"></a>
<a id="tocSmembershiprelation"></a>
<a id="tocsmembershiprelation"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "group": "string",
  "groupKey": {
    "id": "string",
    "namespace": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "membership": "string",
  "roles": [
    {
      "expiryDetail": {
        "expireTime": "string"
      },
      "name": "string",
      "restrictionEvaluations": {
        "memberRestrictionEvaluation": {
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ]
}
```

Message containing membership relation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An extended description to help users determine the purpose of a `Group`.|
|displayName|string|false|none|The display name of the `Group`.|
|group|string|false|none|The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.|
|groupKey|[EntityKey](#schemaentitykey)|false|none|The `EntityKey` of the `Group`.|
|labels|object|false|none|One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.|
|membership|string|false|none|The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.|
|roles|[[MembershipRole](#schemamembershiprole)]|false|none|The `MembershipRole`s that apply to the `Membership`.|

<h2 id="tocS_MembershipRole">MembershipRole</h2>
<!-- backwards compatibility -->
<a id="schemamembershiprole"></a>
<a id="schema_MembershipRole"></a>
<a id="tocSmembershiprole"></a>
<a id="tocsmembershiprole"></a>

```json
{
  "expiryDetail": {
    "expireTime": "string"
  },
  "name": "string",
  "restrictionEvaluations": {
    "memberRestrictionEvaluation": {
      "state": "STATE_UNSPECIFIED"
    }
  }
}
```

A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiryDetail|[ExpiryDetail](#schemaexpirydetail)|false|none|The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.|
|name|string|false|none|The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.|
|restrictionEvaluations|[RestrictionEvaluations](#schemarestrictionevaluations)|false|none|Evaluations of restrictions applied to parent group on this membership.|

<h2 id="tocS_MembershipRoleRestrictionEvaluation">MembershipRoleRestrictionEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemamembershiprolerestrictionevaluation"></a>
<a id="schema_MembershipRoleRestrictionEvaluation"></a>
<a id="tocSmembershiprolerestrictionevaluation"></a>
<a id="tocsmembershiprolerestrictionevaluation"></a>

```json
{
  "state": "STATE_UNSPECIFIED"
}
```

The evaluated state of this restriction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|read-only|Output only. The current state of the restriction|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|COMPLIANT|
|state|FORWARD_COMPLIANT|
|state|NON_COMPLIANT|
|state|EVALUATING|

<h2 id="tocS_ModifyMembershipRolesRequest">ModifyMembershipRolesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifymembershiprolesrequest"></a>
<a id="schema_ModifyMembershipRolesRequest"></a>
<a id="tocSmodifymembershiprolesrequest"></a>
<a id="tocsmodifymembershiprolesrequest"></a>

```json
{
  "addRoles": [
    {
      "expiryDetail": {
        "expireTime": "string"
      },
      "name": "string",
      "restrictionEvaluations": {
        "memberRestrictionEvaluation": {
          "state": "STATE_UNSPECIFIED"
        }
      }
    }
  ],
  "removeRoles": [
    "string"
  ],
  "updateRolesParams": [
    {
      "fieldMask": "string",
      "membershipRole": {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {
            "state": "STATE_UNSPECIFIED"
          }
        }
      }
    }
  ]
}
```

The request message for MembershipsService.ModifyMembershipRoles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addRoles|[[MembershipRole](#schemamembershiprole)]|false|none|The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.|
|removeRoles|[string]|false|none|The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.|
|updateRolesParams|[[UpdateMembershipRolesParams](#schemaupdatemembershiprolesparams)]|false|none|The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.|

<h2 id="tocS_ModifyMembershipRolesResponse">ModifyMembershipRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodifymembershiprolesresponse"></a>
<a id="schema_ModifyMembershipRolesResponse"></a>
<a id="tocSmodifymembershiprolesresponse"></a>
<a id="tocsmodifymembershiprolesresponse"></a>

```json
{
  "membership": {
    "createTime": "string",
    "deliverySetting": "DELIVERY_SETTING_UNSPECIFIED",
    "memberKey": {
      "id": "string",
      "namespace": "string"
    },
    "name": "string",
    "preferredMemberKey": {
      "id": "string",
      "namespace": "string"
    },
    "roles": [
      {
        "expiryDetail": {
          "expireTime": "string"
        },
        "name": "string",
        "restrictionEvaluations": {
          "memberRestrictionEvaluation": {
            "state": "STATE_UNSPECIFIED"
          }
        }
      }
    ],
    "type": "TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

The response message for MembershipsService.ModifyMembershipRoles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|[Membership](#schemamembership)|false|none|The `Membership` resource after modifying its `MembershipRole`s.|

<h2 id="tocS_MoveOrgMembershipRequest">MoveOrgMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemamoveorgmembershiprequest"></a>
<a id="schema_MoveOrgMembershipRequest"></a>
<a id="tocSmoveorgmembershiprequest"></a>
<a id="tocsmoveorgmembershiprequest"></a>

```json
{
  "customer": "string",
  "destinationOrgUnit": "string"
}
```

The request message for OrgMembershipsService.MoveOrgMembership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.|
|destinationOrgUnit|string|false|none|Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).|

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

<h2 id="tocS_OrgMembership">OrgMembership</h2>
<!-- backwards compatibility -->
<a id="schemaorgmembership"></a>
<a id="schema_OrgMembership"></a>
<a id="tocSorgmembership"></a>
<a id="tocsorgmembership"></a>

```json
{
  "member": "string",
  "memberUri": "string",
  "name": "string",
  "type": "ENTITY_TYPE_UNSPECIFIED"
}
```

A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|string|false|none|Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).|
|memberUri|string|false|none|Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).|
|name|string|false|none|Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.|
|type|string|false|none|Immutable. Entity type for the org member.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ENTITY_TYPE_UNSPECIFIED|
|type|SHARED_DRIVE|

<h2 id="tocS_PosixGroup">PosixGroup</h2>
<!-- backwards compatibility -->
<a id="schemaposixgroup"></a>
<a id="schema_PosixGroup"></a>
<a id="tocSposixgroup"></a>
<a id="tocsposixgroup"></a>

```json
{
  "gid": "string",
  "name": "string",
  "systemId": "string"
}
```

POSIX Group definition to represent a group in a POSIX compliant system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gid|string(uint64)|false|none|GID of the POSIX group.|
|name|string|false|none|Name of the POSIX group.|
|systemId|string|false|none|System identifier for which group name and gid apply to. If not specified it will default to empty value.|

<h2 id="tocS_RestrictionEvaluation">RestrictionEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemarestrictionevaluation"></a>
<a id="schema_RestrictionEvaluation"></a>
<a id="tocSrestrictionevaluation"></a>
<a id="tocsrestrictionevaluation"></a>

```json
{
  "state": "STATE_UNSPECIFIED"
}
```

The evaluated state of this restriction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|read-only|Output only. The current state of the restriction|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|EVALUATING|
|state|COMPLIANT|
|state|FORWARD_COMPLIANT|
|state|NON_COMPLIANT|

<h2 id="tocS_RestrictionEvaluations">RestrictionEvaluations</h2>
<!-- backwards compatibility -->
<a id="schemarestrictionevaluations"></a>
<a id="schema_RestrictionEvaluations"></a>
<a id="tocSrestrictionevaluations"></a>
<a id="tocsrestrictionevaluations"></a>

```json
{
  "memberRestrictionEvaluation": {
    "state": "STATE_UNSPECIFIED"
  }
}
```

Evaluations of restrictions applied to parent group on this membership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberRestrictionEvaluation|[MembershipRoleRestrictionEvaluation](#schemamembershiprolerestrictionevaluation)|false|none|Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.|

<h2 id="tocS_RsaPublicKeyInfo">RsaPublicKeyInfo</h2>
<!-- backwards compatibility -->
<a id="schemarsapublickeyinfo"></a>
<a id="schema_RsaPublicKeyInfo"></a>
<a id="tocSrsapublickeyinfo"></a>
<a id="tocsrsapublickeyinfo"></a>

```json
{
  "keySize": 0
}
```

Information of a RSA public key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keySize|integer(int32)|false|none|Key size in bits (size of the modulus).|

<h2 id="tocS_SamlIdpConfig">SamlIdpConfig</h2>
<!-- backwards compatibility -->
<a id="schemasamlidpconfig"></a>
<a id="schema_SamlIdpConfig"></a>
<a id="tocSsamlidpconfig"></a>
<a id="tocssamlidpconfig"></a>

```json
{
  "changePasswordUri": "string",
  "entityId": "string",
  "logoutRedirectUri": "string",
  "singleSignOnServiceUri": "string"
}
```

SAML IDP (identity provider) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changePasswordUri|string|false|none|The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`.|
|entityId|string|false|none|Required. The SAML **Entity ID** of the identity provider.|
|logoutRedirectUri|string|false|none|The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`.|
|singleSignOnServiceUri|string|false|none|Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding.|

<h2 id="tocS_SamlSpConfig">SamlSpConfig</h2>
<!-- backwards compatibility -->
<a id="schemasamlspconfig"></a>
<a id="schema_SamlSpConfig"></a>
<a id="tocSsamlspconfig"></a>
<a id="tocssamlspconfig"></a>

```json
{
  "assertionConsumerServiceUri": "string",
  "entityId": "string"
}
```

SAML SP (service provider) configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assertionConsumerServiceUri|string|false|read-only|Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding.|
|entityId|string|false|read-only|Output only. The SAML **Entity ID** for this service provider.|

<h2 id="tocS_SamlSsoInfo">SamlSsoInfo</h2>
<!-- backwards compatibility -->
<a id="schemasamlssoinfo"></a>
<a id="schema_SamlSsoInfo"></a>
<a id="tocSsamlssoinfo"></a>
<a id="tocssamlssoinfo"></a>

```json
{
  "inboundSamlSsoProfile": "string"
}
```

Details that are applicable when `sso_mode` == `SAML_SSO`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSamlSsoProfile|string|false|none|Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`. |

<h2 id="tocS_SearchDirectGroupsResponse">SearchDirectGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdirectgroupsresponse"></a>
<a id="schema_SearchDirectGroupsResponse"></a>
<a id="tocSsearchdirectgroupsresponse"></a>
<a id="tocssearchdirectgroupsresponse"></a>

```json
{
  "memberships": [
    {
      "description": "string",
      "displayName": "string",
      "group": "string",
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "membership": "string",
      "roles": [
        {
          "expiryDetail": {
            "expireTime": "string"
          },
          "name": "string",
          "restrictionEvaluations": {
            "memberRestrictionEvaluation": {
              "state": "STATE_UNSPECIFIED"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

The response message for MembershipsService.SearchDirectGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[MembershipRelation](#schemamembershiprelation)]|false|none|List of direct groups satisfying the query.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results available for listing.|

<h2 id="tocS_SearchGroupsResponse">SearchGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchgroupsresponse"></a>
<a id="schema_SearchGroupsResponse"></a>
<a id="tocSsearchgroupsresponse"></a>
<a id="tocssearchgroupsresponse"></a>

```json
{
  "groups": [
    {
      "additionalGroupKeys": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "dynamicGroupMetadata": {
        "queries": [
          {
            "query": "string",
            "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
          }
        ],
        "status": {
          "status": "STATUS_UNSPECIFIED",
          "statusTime": "string"
        }
      },
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "parent": "string",
      "posixGroups": [
        {
          "gid": "string",
          "name": "string",
          "systemId": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for GroupsService.SearchGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[Group](#schemagroup)]|false|none|The `Group` resources that match the search query.|
|nextPageToken|string|false|none|A continuation token to retrieve the next page of results, or empty if there are no more results available.|

<h2 id="tocS_SearchTransitiveGroupsResponse">SearchTransitiveGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransitivegroupsresponse"></a>
<a id="schema_SearchTransitiveGroupsResponse"></a>
<a id="tocSsearchtransitivegroupsresponse"></a>
<a id="tocssearchtransitivegroupsresponse"></a>

```json
{
  "memberships": [
    {
      "displayName": "string",
      "group": "string",
      "groupKey": {
        "id": "string",
        "namespace": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "relationType": "RELATION_TYPE_UNSPECIFIED",
      "roles": [
        {
          "role": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

The response message for MembershipsService.SearchTransitiveGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[GroupRelation](#schemagrouprelation)]|false|none|List of transitive groups satisfying the query.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results available for listing.|

<h2 id="tocS_SearchTransitiveMembershipsResponse">SearchTransitiveMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransitivemembershipsresponse"></a>
<a id="schema_SearchTransitiveMembershipsResponse"></a>
<a id="tocSsearchtransitivemembershipsresponse"></a>
<a id="tocssearchtransitivemembershipsresponse"></a>

```json
{
  "memberships": [
    {
      "member": "string",
      "preferredMemberKey": [
        {
          "id": "string",
          "namespace": "string"
        }
      ],
      "relationType": "RELATION_TYPE_UNSPECIFIED",
      "roles": [
        {
          "role": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

The response message for MembershipsService.SearchTransitiveMemberships.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[MemberRelation](#schemamemberrelation)]|false|none|List of transitive memberships satisfying the query.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results.|

<h2 id="tocS_SecuritySettings">SecuritySettings</h2>
<!-- backwards compatibility -->
<a id="schemasecuritysettings"></a>
<a id="schema_SecuritySettings"></a>
<a id="tocSsecuritysettings"></a>
<a id="tocssecuritysettings"></a>

```json
{
  "memberRestriction": {
    "evaluation": {
      "state": "STATE_UNSPECIFIED"
    },
    "query": "string"
  },
  "name": "string"
}
```

The definiion of security settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberRestriction|[MemberRestriction](#schemamemberrestriction)|false|none|The Member Restriction value|
|name|string|false|read-only|Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`.|

<h2 id="tocS_SendUserInvitationRequest">SendUserInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenduserinvitationrequest"></a>
<a id="schema_SendUserInvitationRequest"></a>
<a id="tocSsenduserinvitationrequest"></a>
<a id="tocssenduserinvitationrequest"></a>

```json
{}
```

A request to send email for inviting target user corresponding to the UserInvitation.

<h2 id="tocS_SignInBehavior">SignInBehavior</h2>
<!-- backwards compatibility -->
<a id="schemasigninbehavior"></a>
<a id="schema_SignInBehavior"></a>
<a id="tocSsigninbehavior"></a>
<a id="tocssigninbehavior"></a>

```json
{
  "redirectCondition": "REDIRECT_CONDITION_UNSPECIFIED"
}
```

Controls sign-in behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirectCondition|string|false|none|When to redirect sign-ins to the IdP.|

#### Enumerated Values

|Property|Value|
|---|---|
|redirectCondition|REDIRECT_CONDITION_UNSPECIFIED|
|redirectCondition|NEVER|

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

<h2 id="tocS_TransitiveMembershipRole">TransitiveMembershipRole</h2>
<!-- backwards compatibility -->
<a id="schematransitivemembershiprole"></a>
<a id="schema_TransitiveMembershipRole"></a>
<a id="tocStransitivemembershiprole"></a>
<a id="tocstransitivemembershiprole"></a>

```json
{
  "role": "string"
}
```

Message representing the role of a TransitiveMembership.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`.|

<h2 id="tocS_UpdateInboundSamlSsoProfileOperationMetadata">UpdateInboundSamlSsoProfileOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboundsamlssoprofileoperationmetadata"></a>
<a id="schema_UpdateInboundSamlSsoProfileOperationMetadata"></a>
<a id="tocSupdateinboundsamlssoprofileoperationmetadata"></a>
<a id="tocsupdateinboundsamlssoprofileoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSamlSsoProfilesService.UpdateInboundSamlSsoProfile.

<h2 id="tocS_UpdateInboundSsoAssignmentOperationMetadata">UpdateInboundSsoAssignmentOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboundssoassignmentoperationmetadata"></a>
<a id="schema_UpdateInboundSsoAssignmentOperationMetadata"></a>
<a id="tocSupdateinboundssoassignmentoperationmetadata"></a>
<a id="tocsupdateinboundssoassignmentoperationmetadata"></a>

```json
{}
```

LRO response metadata for InboundSsoAssignmentsService.UpdateInboundSsoAssignment.

<h2 id="tocS_UpdateMembershipRolesParams">UpdateMembershipRolesParams</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemembershiprolesparams"></a>
<a id="schema_UpdateMembershipRolesParams"></a>
<a id="tocSupdatemembershiprolesparams"></a>
<a id="tocsupdatemembershiprolesparams"></a>

```json
{
  "fieldMask": "string",
  "membershipRole": {
    "expiryDetail": {
      "expireTime": "string"
    },
    "name": "string",
    "restrictionEvaluations": {
      "memberRestrictionEvaluation": {
        "state": "STATE_UNSPECIFIED"
      }
    }
  }
}
```

The details of an update to a `MembershipRole`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldMask|string(google-fieldmask)|false|none|The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`.|
|membershipRole|[MembershipRole](#schemamembershiprole)|false|none|The `MembershipRole`s to be updated. Only `MEMBER` `MembershipRoles` can currently be updated. May only contain a `MembershipRole` with `name` `MEMBER`.|

<h2 id="tocS_UserInvitation">UserInvitation</h2>
<!-- backwards compatibility -->
<a id="schemauserinvitation"></a>
<a id="schema_UserInvitation"></a>
<a id="tocSuserinvitation"></a>
<a id="tocsuserinvitation"></a>

```json
{
  "mailsSentCount": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailsSentCount|string(int64)|false|none|Number of invitation emails sent to the user.|
|name|string|false|none|Shall be of the form `customers/{customer}/userinvitations/{user_email_address}`.|
|state|string|false|none|State of the `UserInvitation`.|
|updateTime|string(google-datetime)|false|none|Time when the `UserInvitation` was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NOT_YET_SENT|
|state|INVITED|
|state|ACCEPTED|
|state|DECLINED|

<h2 id="tocS_WipeDeviceRequest">WipeDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemawipedevicerequest"></a>
<a id="schema_WipeDeviceRequest"></a>
<a id="tocSwipedevicerequest"></a>
<a id="tocswipedevicerequest"></a>

```json
{
  "customer": "string",
  "removeResetLock": true
}
```

Request message for wiping all data on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|
|removeResetLock|boolean|false|none|Optional. Specifies if a user is able to factory reset a device after a Device Wipe. On iOS, this is called "Activation Lock", while on Android, this is known as "Factory Reset Protection". If true, this protection will be removed from the device, so that a user can successfully factory reset. If false, the setting is untouched on the device.|

<h2 id="tocS_WipeDeviceResponse">WipeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemawipedeviceresponse"></a>
<a id="schema_WipeDeviceResponse"></a>
<a id="tocSwipedeviceresponse"></a>
<a id="tocswipedeviceresponse"></a>

```json
{
  "device": {
    "androidSpecificAttributes": {
      "enabledUnknownSources": true,
      "ownerProfileAccount": true,
      "ownershipPrivilege": "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
      "supportsWorkProfile": true
    },
    "assetTag": "string",
    "basebandVersion": "string",
    "bootloaderVersion": "string",
    "brand": "string",
    "buildNumber": "string",
    "clientTypes": [
      "CLIENT_TYPE_UNSPECIFIED"
    ],
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "deviceId": "string",
    "deviceType": "DEVICE_TYPE_UNSPECIFIED",
    "enabledDeveloperOptions": true,
    "enabledUsbDebugging": true,
    "encryptionState": "ENCRYPTION_STATE_UNSPECIFIED",
    "endpointVerificationSpecificAttributes": {
      "certificateAttributes": [
        {
          "certificateTemplate": {
            "id": "string",
            "majorVersion": 0,
            "minorVersion": 0
          },
          "fingerprint": "string",
          "issuer": "string",
          "serialNumber": "string",
          "subject": "string",
          "thumbprint": "string",
          "validationState": "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
          "validityExpirationTime": "string",
          "validityStartTime": "string"
        }
      ]
    },
    "hostname": "string",
    "imei": "string",
    "kernelVersion": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "manufacturer": "string",
    "meid": "string",
    "model": "string",
    "name": "string",
    "networkOperator": "string",
    "osVersion": "string",
    "otherAccounts": [
      "string"
    ],
    "ownerType": "DEVICE_OWNERSHIP_UNSPECIFIED",
    "releaseVersion": "string",
    "securityPatchTime": "string",
    "serialNumber": "string",
    "wifiMacAddresses": [
      "string"
    ]
  }
}
```

Response message for wiping all data on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[Device](#schemadevice)|false|none|Resultant Device object for the action. Note that asset tags will not be returned in the device object.|

<h2 id="tocS_WipeDeviceUserRequest">WipeDeviceUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemawipedeviceuserrequest"></a>
<a id="schema_WipeDeviceUserRequest"></a>
<a id="tocSwipedeviceuserrequest"></a>
<a id="tocswipedeviceuserrequest"></a>

```json
{
  "customer": "string"
}
```

Request message for starting an account wipe on device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.|

<h2 id="tocS_WipeDeviceUserResponse">WipeDeviceUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemawipedeviceuserresponse"></a>
<a id="schema_WipeDeviceUserResponse"></a>
<a id="tocSwipedeviceuserresponse"></a>
<a id="tocswipedeviceuserresponse"></a>

```json
{
  "deviceUser": {
    "compromisedState": "COMPROMISED_STATE_UNSPECIFIED",
    "createTime": "string",
    "firstSyncTime": "string",
    "languageCode": "string",
    "lastSyncTime": "string",
    "managementState": "MANAGEMENT_STATE_UNSPECIFIED",
    "name": "string",
    "passwordState": "PASSWORD_STATE_UNSPECIFIED",
    "userAgent": "string",
    "userEmail": "string"
  }
}
```

Response message for wiping the user's account from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceUser|[DeviceUser](#schemadeviceuser)|false|none|Resultant DeviceUser object for the action.|
