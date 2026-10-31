<h1 id="admin-sdk-api">Admin SDK API vdirectory_v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.

Base URLs:

* <a href="https://admin.googleapis.com/">https://admin.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/admin-sdk/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/admin.chrome.printers|See, add, edit, and permanently delete the printers that your organization can use with Chrome|
|https://www.googleapis.com/auth/admin.chrome.printers.readonly|See the printers that your organization can use with Chrome|
|https://www.googleapis.com/auth/admin.directory.customer|View and manage customer related information|
|https://www.googleapis.com/auth/admin.directory.customer.readonly|View customer related information|
|https://www.googleapis.com/auth/admin.directory.device.chromeos|View and manage your Chrome OS devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly|View your Chrome OS devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.mobile|View and manage your mobile devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.mobile.action|Manage your mobile devices by performing administrative tasks|
|https://www.googleapis.com/auth/admin.directory.device.mobile.readonly|View your mobile devices' metadata|
|https://www.googleapis.com/auth/admin.directory.domain|View and manage the provisioning of domains for your customers|
|https://www.googleapis.com/auth/admin.directory.domain.readonly|View domains related to your customers|
|https://www.googleapis.com/auth/admin.directory.group|View and manage the provisioning of groups on your domain|
|https://www.googleapis.com/auth/admin.directory.group.member|View and manage group subscriptions on your domain|
|https://www.googleapis.com/auth/admin.directory.group.member.readonly|View group subscriptions on your domain|
|https://www.googleapis.com/auth/admin.directory.group.readonly|View groups on your domain|
|https://www.googleapis.com/auth/admin.directory.orgunit|View and manage organization units on your domain|
|https://www.googleapis.com/auth/admin.directory.orgunit.readonly|View organization units on your domain|
|https://www.googleapis.com/auth/admin.directory.resource.calendar|View and manage the provisioning of calendar resources on your domain|
|https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly|View calendar resources on your domain|
|https://www.googleapis.com/auth/admin.directory.rolemanagement|Manage delegated admin roles for your domain|
|https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly|View delegated admin roles for your domain|
|https://www.googleapis.com/auth/admin.directory.user|View and manage the provisioning of users on your domain|
|https://www.googleapis.com/auth/admin.directory.user.alias|View and manage user aliases on your domain|
|https://www.googleapis.com/auth/admin.directory.user.alias.readonly|View user aliases on your domain|
|https://www.googleapis.com/auth/admin.directory.user.readonly|See info about users on your domain|
|https://www.googleapis.com/auth/admin.directory.user.security|Manage data access permissions for users on your domain|
|https://www.googleapis.com/auth/admin.directory.userschema|View and manage the provisioning of user schemas on your domain|
|https://www.googleapis.com/auth/admin.directory.userschema.readonly|View user schemas on your domain|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/admin.chrome.printers|See, add, edit, and permanently delete the printers that your organization can use with Chrome|
|https://www.googleapis.com/auth/admin.chrome.printers.readonly|See the printers that your organization can use with Chrome|
|https://www.googleapis.com/auth/admin.directory.customer|View and manage customer related information|
|https://www.googleapis.com/auth/admin.directory.customer.readonly|View customer related information|
|https://www.googleapis.com/auth/admin.directory.device.chromeos|View and manage your Chrome OS devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly|View your Chrome OS devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.mobile|View and manage your mobile devices' metadata|
|https://www.googleapis.com/auth/admin.directory.device.mobile.action|Manage your mobile devices by performing administrative tasks|
|https://www.googleapis.com/auth/admin.directory.device.mobile.readonly|View your mobile devices' metadata|
|https://www.googleapis.com/auth/admin.directory.domain|View and manage the provisioning of domains for your customers|
|https://www.googleapis.com/auth/admin.directory.domain.readonly|View domains related to your customers|
|https://www.googleapis.com/auth/admin.directory.group|View and manage the provisioning of groups on your domain|
|https://www.googleapis.com/auth/admin.directory.group.member|View and manage group subscriptions on your domain|
|https://www.googleapis.com/auth/admin.directory.group.member.readonly|View group subscriptions on your domain|
|https://www.googleapis.com/auth/admin.directory.group.readonly|View groups on your domain|
|https://www.googleapis.com/auth/admin.directory.orgunit|View and manage organization units on your domain|
|https://www.googleapis.com/auth/admin.directory.orgunit.readonly|View organization units on your domain|
|https://www.googleapis.com/auth/admin.directory.resource.calendar|View and manage the provisioning of calendar resources on your domain|
|https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly|View calendar resources on your domain|
|https://www.googleapis.com/auth/admin.directory.rolemanagement|Manage delegated admin roles for your domain|
|https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly|View delegated admin roles for your domain|
|https://www.googleapis.com/auth/admin.directory.user|View and manage the provisioning of users on your domain|
|https://www.googleapis.com/auth/admin.directory.user.alias|View and manage user aliases on your domain|
|https://www.googleapis.com/auth/admin.directory.user.alias.readonly|View user aliases on your domain|
|https://www.googleapis.com/auth/admin.directory.user.readonly|See info about users on your domain|
|https://www.googleapis.com/auth/admin.directory.user.security|Manage data access permissions for users on your domain|
|https://www.googleapis.com/auth/admin.directory.userschema|View and manage the provisioning of user schemas on your domain|
|https://www.googleapis.com/auth/admin.directory.userschema.readonly|View user schemas on your domain|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="admin-sdk-api-asps">asps</h1>

## directory.asps.list

<a id="opIddirectory.asps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/asps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/asps`

Lists the ASPs issued by a user.

<h3 id="directoryaspslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "codeId": 0,
      "creationTime": "string",
      "etag": "string",
      "kind": "admin#directory#asp",
      "lastTimeUsed": "string",
      "name": "string",
      "userKey": "string"
    }
  ],
  "kind": "admin#directory#aspList"
}
```

<h3 id="directoryaspslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Asps](#schemaasps)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.asps.get

<a id="opIddirectory.asps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/asps/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/asps/{codeId}`

Gets information about an ASP issued by a user.

<h3 id="directoryaspsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|codeId|path|integer|true|The unique ID of the ASP.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "codeId": 0,
  "creationTime": "string",
  "etag": "string",
  "kind": "admin#directory#asp",
  "lastTimeUsed": "string",
  "name": "string",
  "userKey": "string"
}
```

<h3 id="directoryaspsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Asp](#schemaasp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.asps.delete

<a id="opIddirectory.asps.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/asps/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/users/{userKey}/asps/{codeId}`

Deletes an ASP issued by a user.

<h3 id="directoryaspsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|codeId|path|integer|true|The unique ID of the ASP to be deleted.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryaspsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

<h1 id="admin-sdk-api-channels">channels</h1>

## admin.channels.stop

<a id="opIdadmin.channels.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory_v1/channels/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /admin/directory_v1/channels/stop`

Stops watching resources through this channel.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="adminchannelsstop-parameters">Parameters</h3>

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
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="adminchannelsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="admin-sdk-api-chromeosdevices">chromeosdevices</h1>

## directory.chromeosdevices.list

<a id="opIddirectory.chromeosdevices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/devices/chromeos`

Retrieves a paginated list of Chrome OS devices within an account.

<h3 id="directorychromeosdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|includeChildOrgunits|query|boolean|false|Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.|
|maxResults|query|integer|false|Maximum number of results to return.|
|orderBy|query|string|false|Device property to use for sorting results.|
|orgUnitPath|query|string|false|The full path of the organizational unit (minus the leading `/`) or its unique ID.|
|pageToken|query|string|false|The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|query|query|string|false|Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators|
|sortOrder|query|string|false|Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|orderBy|annotatedLocation|
|orderBy|annotatedUser|
|orderBy|lastSync|
|orderBy|notes|
|orderBy|serialNumber|
|orderBy|status|
|projection|BASIC|
|projection|FULL|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "chromeosdevices": [
    {
      "activeTimeRanges": [
        {
          "activeTime": 0,
          "date": "1970-01-01"
        }
      ],
      "annotatedAssetId": "string",
      "annotatedLocation": "string",
      "annotatedUser": "string",
      "autoUpdateExpiration": "string",
      "bootMode": "string",
      "cpuInfo": [
        {
          "architecture": "string",
          "logicalCpus": [
            {
              "cStates": [
                {
                  "displayName": "string",
                  "sessionDuration": "string"
                }
              ],
              "currentScalingFrequencyKhz": 0,
              "idleDuration": "string",
              "maxScalingFrequencyKhz": 0
            }
          ],
          "maxClockSpeedKhz": 0,
          "model": "string"
        }
      ],
      "cpuStatusReports": [
        {
          "cpuTemperatureInfo": [
            {
              "label": "string",
              "temperature": 0
            }
          ],
          "cpuUtilizationPercentageInfo": [
            0
          ],
          "reportTime": "1970-01-01T00:00:00Z"
        }
      ],
      "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
      "deviceFiles": [
        {
          "createTime": "1970-01-01T00:00:00Z",
          "downloadUrl": "string",
          "name": "string",
          "type": "string"
        }
      ],
      "deviceId": "string",
      "deviceLicenseType": "deviceLicenseTypeUnspecified",
      "diskVolumeReports": [
        {
          "volumeInfo": [
            {
              "storageFree": "string",
              "storageTotal": "string",
              "volumeId": "string"
            }
          ]
        }
      ],
      "dockMacAddress": "string",
      "etag": "string",
      "ethernetMacAddress": "string",
      "ethernetMacAddress0": "string",
      "firmwareVersion": "string",
      "firstEnrollmentTime": "string",
      "kind": "admin#directory#chromeosdevice",
      "lastDeprovisionTimestamp": "string",
      "lastEnrollmentTime": "1970-01-01T00:00:00Z",
      "lastKnownNetwork": [
        {
          "ipAddress": "string",
          "wanIpAddress": "string"
        }
      ],
      "lastSync": "1970-01-01T00:00:00Z",
      "macAddress": "string",
      "manufactureDate": "string",
      "meid": "string",
      "model": "string",
      "notes": "string",
      "orderNumber": "string",
      "orgUnitId": "string",
      "orgUnitPath": "string",
      "osUpdateStatus": {
        "rebootTime": "string",
        "state": "updateStateUnspecified",
        "targetKioskAppVersion": "string",
        "targetOsVersion": "string",
        "updateCheckTime": "string",
        "updateTime": "string"
      },
      "osVersion": "string",
      "platformVersion": "string",
      "recentUsers": [
        {
          "email": "string",
          "type": "string"
        }
      ],
      "screenshotFiles": [
        {
          "createTime": "1970-01-01T00:00:00Z",
          "downloadUrl": "string",
          "name": "string",
          "type": "string"
        }
      ],
      "serialNumber": "string",
      "status": "string",
      "supportEndDate": "1970-01-01T00:00:00Z",
      "systemRamFreeReports": [
        {
          "reportTime": "1970-01-01T00:00:00Z",
          "systemRamFreeInfo": [
            "string"
          ]
        }
      ],
      "systemRamTotal": "string",
      "tpmVersionInfo": {
        "family": "string",
        "firmwareVersion": "string",
        "manufacturer": "string",
        "specLevel": "string",
        "tpmModel": "string",
        "vendorSpecific": "string"
      },
      "willAutoRenew": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#chromeosdevices",
  "nextPageToken": "string"
}
```

<h3 id="directorychromeosdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChromeOsDevices](#schemachromeosdevices)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly )
</aside>

## directory.chromeosdevices.moveDevicesToOu

<a id="opIddirectory.chromeosdevices.moveDevicesToOu"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/moveDevicesToOu?orgUnitPath=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deviceIds": [
      "string"
    ]
  }'
```

`POST /admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu`

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

> Body parameter

```json
{
  "deviceIds": [
    "string"
  ]
}
```

<h3 id="directorychromeosdevicesmovedevicestoou-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable. ID of the Google Workspace account|
|orgUnitPath|query|string|true|Full path of the target organizational unit or its ID|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ChromeOsMoveDevicesToOu](#schemachromeosmovedevicestoou)|false|none|
|» deviceIds|body|[string]|false|Chrome OS devices to be moved to OU|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directorychromeosdevicesmovedevicestoou-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

## directory.chromeosdevices.get

<a id="opIddirectory.chromeosdevices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}`

Retrieves a Chrome OS device's properties.

<h3 id="directorychromeosdevicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|deviceId|path|string|true|The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.|
|projection|query|string|false|Determines whether the response contains the full list of properties or only a subset.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|projection|BASIC|
|projection|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "deviceLicenseType": "deviceLicenseTypeUnspecified",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

<h3 id="directorychromeosdevicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChromeOsDevice](#schemachromeosdevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly )
</aside>

## directory.chromeosdevices.update

<a id="opIddirectory.chromeosdevices.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeTimeRanges": [
      {
        "activeTime": 0,
        "date": "1970-01-01"
      }
    ],
    "annotatedAssetId": "string",
    "annotatedLocation": "string",
    "annotatedUser": "string",
    "autoUpdateExpiration": "string",
    "bootMode": "string",
    "cpuInfo": [
      {
        "architecture": "string",
        "logicalCpus": [
          {
            "cStates": [
              {
                "displayName": "string",
                "sessionDuration": "string"
              }
            ],
            "currentScalingFrequencyKhz": 0,
            "idleDuration": "string",
            "maxScalingFrequencyKhz": 0
          }
        ],
        "maxClockSpeedKhz": 0,
        "model": "string"
      }
    ],
    "cpuStatusReports": [
      {
        "cpuTemperatureInfo": [
          {
            "label": "string",
            "temperature": 0
          }
        ],
        "cpuUtilizationPercentageInfo": [
          0
        ],
        "reportTime": "1970-01-01T00:00:00Z"
      }
    ],
    "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
    "deviceFiles": [
      {
        "createTime": "1970-01-01T00:00:00Z",
        "downloadUrl": "string",
        "name": "string",
        "type": "string"
      }
    ],
    "deviceId": "string",
    "diskVolumeReports": [
      {
        "volumeInfo": [
          {
            "storageFree": "string",
            "storageTotal": "string",
            "volumeId": "string"
          }
        ]
      }
    ],
    "dockMacAddress": "string",
    "etag": "string",
    "ethernetMacAddress": "string",
    "ethernetMacAddress0": "string",
    "firmwareVersion": "string",
    "firstEnrollmentTime": "string",
    "kind": "admin#directory#chromeosdevice",
    "lastDeprovisionTimestamp": "string",
    "lastEnrollmentTime": "1970-01-01T00:00:00Z",
    "lastKnownNetwork": [
      {
        "ipAddress": "string",
        "wanIpAddress": "string"
      }
    ],
    "lastSync": "1970-01-01T00:00:00Z",
    "macAddress": "string",
    "manufactureDate": "string",
    "meid": "string",
    "model": "string",
    "notes": "string",
    "orderNumber": "string",
    "orgUnitId": "string",
    "orgUnitPath": "string",
    "osUpdateStatus": {
      "rebootTime": "string",
      "state": "updateStateUnspecified",
      "targetKioskAppVersion": "string",
      "targetOsVersion": "string",
      "updateCheckTime": "string",
      "updateTime": "string"
    },
    "osVersion": "string",
    "platformVersion": "string",
    "recentUsers": [
      {
        "email": "string",
        "type": "string"
      }
    ],
    "screenshotFiles": [
      {
        "createTime": "1970-01-01T00:00:00Z",
        "downloadUrl": "string",
        "name": "string",
        "type": "string"
      }
    ],
    "serialNumber": "string",
    "status": "string",
    "supportEndDate": "1970-01-01T00:00:00Z",
    "systemRamFreeReports": [
      {
        "reportTime": "1970-01-01T00:00:00Z",
        "systemRamFreeInfo": [
          "string"
        ]
      }
    ],
    "systemRamTotal": "string",
    "tpmVersionInfo": {
      "family": "string",
      "firmwareVersion": "string",
      "manufacturer": "string",
      "specLevel": "string",
      "tpmModel": "string",
      "vendorSpecific": "string"
    },
    "willAutoRenew": true
  }'
```

`PUT /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}`

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

> Body parameter

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

<h3 id="directorychromeosdevicesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|deviceId|path|string|true|The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ChromeOsDevice](#schemachromeosdevice)|false|none|
|» activeTimeRanges|body|[object]|false|A list of active time ranges (Read-only).|
|» » activeTime|body|integer(int32)|false|Duration of usage in milliseconds.|
|» » date|body|string(date)|false|Date of usage|
|» annotatedAssetId|body|string|false|The asset identifier as noted by an administrator or specified during enrollment.|
|» annotatedLocation|body|string|false|The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.|
|» annotatedUser|body|string|false|The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.|
|» autoUpdateExpiration|body|string(int64)|false|(Read-only) The timestamp after which the device will stop receiving Chrome updates or support|
|» bootMode|body|string|false|The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).|
|» cpuInfo|body|[object]|false|Information regarding CPU specs in the device.|
|» » architecture|body|string|false|The CPU architecture.|
|» » logicalCpus|body|[object]|false|Information for the Logical CPUs|
|» » » cStates|body|[object]|false|C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.|
|» » » » displayName|body|string|false|Name of the state.|
|» » » » sessionDuration|body|string(google-duration)|false|Time spent in the state since the last reboot.|
|» » » currentScalingFrequencyKhz|body|integer(int32)|false|Current frequency the CPU is running at.|
|» » » idleDuration|body|string(google-duration)|false|Idle time since last boot.|
|» » » maxScalingFrequencyKhz|body|integer(int32)|false|Maximum frequency the CPU is allowed to run at, by policy.|
|» » maxClockSpeedKhz|body|integer(int32)|false|The max CPU clock speed in kHz.|
|» » model|body|string|false|The CPU model name.|
|» cpuStatusReports|body|[object]|false|Reports of CPU utilization and temperature (Read-only)|
|» » cpuTemperatureInfo|body|[object]|false|A list of CPU temperature samples.|
|» » » label|body|string|false|CPU label|
|» » » temperature|body|integer(int32)|false|Temperature in Celsius degrees.|
|» » cpuUtilizationPercentageInfo|body|[integer(int32)]|false|none|
|» » reportTime|body|string(date-time)|false|Date and time the report was received.|
|» deprovisionReason|body|string|false|(Read-only) Deprovision reason.|
|» deviceFiles|body|[object]|false|A list of device files to download (Read-only)|
|» » createTime|body|string(date-time)|false|Date and time the file was created|
|» » downloadUrl|body|string|false|File download URL|
|» » name|body|string|false|File name|
|» » type|body|string|false|File type|
|» deviceId|body|string|false|The unique ID of the Chrome device.|
|» diskVolumeReports|body|[object]|false|Reports of disk space and other info about mounted/connected volumes.|
|» » volumeInfo|body|[object]|false|Disk volumes|
|» » » storageFree|body|string(int64)|false|Free disk space [in bytes]|
|» » » storageTotal|body|string(int64)|false|Total disk space [in bytes]|
|» » » volumeId|body|string|false|Volume id|
|» dockMacAddress|body|string|false|(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|» etag|body|string|false|ETag of the resource.|
|» ethernetMacAddress|body|string|false|The device's MAC address on the ethernet network interface.|
|» ethernetMacAddress0|body|string|false|(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|» firmwareVersion|body|string|false|The Chrome device's firmware version.|
|» firstEnrollmentTime|body|string|false|Date and time for the first time the device was enrolled.|
|» kind|body|string|false|The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.|
|» lastDeprovisionTimestamp|body|string|false|(Read-only) Date and time for the last deprovision of the device.|
|» lastEnrollmentTime|body|string(date-time)|false|Date and time the device was last enrolled (Read-only)|
|» lastKnownNetwork|body|[object]|false|Contains last known network (Read-only)|
|» » ipAddress|body|string|false|The IP address.|
|» » wanIpAddress|body|string|false|The WAN IP address.|
|» lastSync|body|string(date-time)|false|Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)|
|» macAddress|body|string|false|The device's wireless MAC address. If the device does not have this information, it is not included in the response.|
|» manufactureDate|body|string|false|(Read-only) The date the device was manufactured in yyyy-mm-dd format.|
|» meid|body|string|false|The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).|
|» model|body|string|false|The device's model information. If the device does not have this information, this property is not included in the response.|
|» notes|body|string|false|Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.|
|» orderNumber|body|string|false|The device's order number. Only devices directly purchased from Google have an order number.|
|» orgUnitId|body|string|false|The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|» orgUnitPath|body|string|false|The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|» osUpdateStatus|body|[OsUpdateStatus](#schemaosupdatestatus)|false|The status of the OS updates for the device.|
|» osVersion|body|string|false|The Chrome device's operating system version.|
|» platformVersion|body|string|false|The Chrome device's platform version.|
|» recentUsers|body|[object]|false|A list of recent device users, in descending order, by last login time.|
|» » email|body|string|false|The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.|
|» » type|body|string|false|The type of the user.|
|» screenshotFiles|body|[object]|false|A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)|
|» » createTime|body|string(date-time)|false|Date and time the file was created|
|» » downloadUrl|body|string|false|File download URL|
|» » name|body|string|false|File name|
|» » type|body|string|false|File type|
|» serialNumber|body|string|false|The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.|
|» status|body|string|false|The status of the device.|
|» supportEndDate|body|string(date-time)|false|Final date the device will be supported (Read-only)|
|» systemRamFreeReports|body|[object]|false|Reports of amounts of available RAM memory (Read-only)|
|» » reportTime|body|string(date-time)|false|Date and time the report was received.|
|» » systemRamFreeInfo|body|[string(int64)]|false|none|
|» systemRamTotal|body|string(int64)|false|Total RAM on the device [in bytes] (Read-only)|
|» tpmVersionInfo|body|object|false|Trusted Platform Module (TPM) (Read-only)|
|» » family|body|string|false|TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000|
|» » firmwareVersion|body|string|false|TPM firmware version.|
|» » manufacturer|body|string|false|TPM manufacturer code.|
|» » specLevel|body|string|false|TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.|
|» » tpmModel|body|string|false|TPM model number.|
|» » vendorSpecific|body|string|false|Vendor-specific information such as Vendor ID.|
|» willAutoRenew|body|boolean|false|Determines if the device will auto renew its support after the support end date. This is a read-only property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|BASIC|
|projection|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» deprovisionReason|DEPROVISION_REASON_UNSPECIFIED|
|» deprovisionReason|DEPROVISION_REASON_SAME_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE|
|» deprovisionReason|DEPROVISION_REASON_DOMAIN_MOVE|
|» deprovisionReason|DEPROVISION_REASON_SERVICE_EXPIRATION|
|» deprovisionReason|DEPROVISION_REASON_OTHER|
|» deprovisionReason|DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_RETIRING_DEVICE|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE_TRANSFER|
|» deprovisionReason|DEPROVISION_REASON_NOT_REQUIRED|
|» deprovisionReason|DEPROVISION_REASON_REPAIR_CENTER|

> Example responses

> 200 Response

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "deviceLicenseType": "deviceLicenseTypeUnspecified",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

<h3 id="directorychromeosdevicesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChromeOsDevice](#schemachromeosdevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

## directory.chromeosdevices.patch

<a id="opIddirectory.chromeosdevices.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeTimeRanges": [
      {
        "activeTime": 0,
        "date": "1970-01-01"
      }
    ],
    "annotatedAssetId": "string",
    "annotatedLocation": "string",
    "annotatedUser": "string",
    "autoUpdateExpiration": "string",
    "bootMode": "string",
    "cpuInfo": [
      {
        "architecture": "string",
        "logicalCpus": [
          {
            "cStates": [
              {
                "displayName": "string",
                "sessionDuration": "string"
              }
            ],
            "currentScalingFrequencyKhz": 0,
            "idleDuration": "string",
            "maxScalingFrequencyKhz": 0
          }
        ],
        "maxClockSpeedKhz": 0,
        "model": "string"
      }
    ],
    "cpuStatusReports": [
      {
        "cpuTemperatureInfo": [
          {
            "label": "string",
            "temperature": 0
          }
        ],
        "cpuUtilizationPercentageInfo": [
          0
        ],
        "reportTime": "1970-01-01T00:00:00Z"
      }
    ],
    "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
    "deviceFiles": [
      {
        "createTime": "1970-01-01T00:00:00Z",
        "downloadUrl": "string",
        "name": "string",
        "type": "string"
      }
    ],
    "deviceId": "string",
    "diskVolumeReports": [
      {
        "volumeInfo": [
          {
            "storageFree": "string",
            "storageTotal": "string",
            "volumeId": "string"
          }
        ]
      }
    ],
    "dockMacAddress": "string",
    "etag": "string",
    "ethernetMacAddress": "string",
    "ethernetMacAddress0": "string",
    "firmwareVersion": "string",
    "firstEnrollmentTime": "string",
    "kind": "admin#directory#chromeosdevice",
    "lastDeprovisionTimestamp": "string",
    "lastEnrollmentTime": "1970-01-01T00:00:00Z",
    "lastKnownNetwork": [
      {
        "ipAddress": "string",
        "wanIpAddress": "string"
      }
    ],
    "lastSync": "1970-01-01T00:00:00Z",
    "macAddress": "string",
    "manufactureDate": "string",
    "meid": "string",
    "model": "string",
    "notes": "string",
    "orderNumber": "string",
    "orgUnitId": "string",
    "orgUnitPath": "string",
    "osUpdateStatus": {
      "rebootTime": "string",
      "state": "updateStateUnspecified",
      "targetKioskAppVersion": "string",
      "targetOsVersion": "string",
      "updateCheckTime": "string",
      "updateTime": "string"
    },
    "osVersion": "string",
    "platformVersion": "string",
    "recentUsers": [
      {
        "email": "string",
        "type": "string"
      }
    ],
    "screenshotFiles": [
      {
        "createTime": "1970-01-01T00:00:00Z",
        "downloadUrl": "string",
        "name": "string",
        "type": "string"
      }
    ],
    "serialNumber": "string",
    "status": "string",
    "supportEndDate": "1970-01-01T00:00:00Z",
    "systemRamFreeReports": [
      {
        "reportTime": "1970-01-01T00:00:00Z",
        "systemRamFreeInfo": [
          "string"
        ]
      }
    ],
    "systemRamTotal": "string",
    "tpmVersionInfo": {
      "family": "string",
      "firmwareVersion": "string",
      "manufacturer": "string",
      "specLevel": "string",
      "tpmModel": "string",
      "vendorSpecific": "string"
    },
    "willAutoRenew": true
  }'
```

`PATCH /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}`

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

> Body parameter

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

<h3 id="directorychromeosdevicespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|deviceId|path|string|true|The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ChromeOsDevice](#schemachromeosdevice)|false|none|
|» activeTimeRanges|body|[object]|false|A list of active time ranges (Read-only).|
|» » activeTime|body|integer(int32)|false|Duration of usage in milliseconds.|
|» » date|body|string(date)|false|Date of usage|
|» annotatedAssetId|body|string|false|The asset identifier as noted by an administrator or specified during enrollment.|
|» annotatedLocation|body|string|false|The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.|
|» annotatedUser|body|string|false|The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.|
|» autoUpdateExpiration|body|string(int64)|false|(Read-only) The timestamp after which the device will stop receiving Chrome updates or support|
|» bootMode|body|string|false|The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).|
|» cpuInfo|body|[object]|false|Information regarding CPU specs in the device.|
|» » architecture|body|string|false|The CPU architecture.|
|» » logicalCpus|body|[object]|false|Information for the Logical CPUs|
|» » » cStates|body|[object]|false|C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.|
|» » » » displayName|body|string|false|Name of the state.|
|» » » » sessionDuration|body|string(google-duration)|false|Time spent in the state since the last reboot.|
|» » » currentScalingFrequencyKhz|body|integer(int32)|false|Current frequency the CPU is running at.|
|» » » idleDuration|body|string(google-duration)|false|Idle time since last boot.|
|» » » maxScalingFrequencyKhz|body|integer(int32)|false|Maximum frequency the CPU is allowed to run at, by policy.|
|» » maxClockSpeedKhz|body|integer(int32)|false|The max CPU clock speed in kHz.|
|» » model|body|string|false|The CPU model name.|
|» cpuStatusReports|body|[object]|false|Reports of CPU utilization and temperature (Read-only)|
|» » cpuTemperatureInfo|body|[object]|false|A list of CPU temperature samples.|
|» » » label|body|string|false|CPU label|
|» » » temperature|body|integer(int32)|false|Temperature in Celsius degrees.|
|» » cpuUtilizationPercentageInfo|body|[integer(int32)]|false|none|
|» » reportTime|body|string(date-time)|false|Date and time the report was received.|
|» deprovisionReason|body|string|false|(Read-only) Deprovision reason.|
|» deviceFiles|body|[object]|false|A list of device files to download (Read-only)|
|» » createTime|body|string(date-time)|false|Date and time the file was created|
|» » downloadUrl|body|string|false|File download URL|
|» » name|body|string|false|File name|
|» » type|body|string|false|File type|
|» deviceId|body|string|false|The unique ID of the Chrome device.|
|» diskVolumeReports|body|[object]|false|Reports of disk space and other info about mounted/connected volumes.|
|» » volumeInfo|body|[object]|false|Disk volumes|
|» » » storageFree|body|string(int64)|false|Free disk space [in bytes]|
|» » » storageTotal|body|string(int64)|false|Total disk space [in bytes]|
|» » » volumeId|body|string|false|Volume id|
|» dockMacAddress|body|string|false|(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|» etag|body|string|false|ETag of the resource.|
|» ethernetMacAddress|body|string|false|The device's MAC address on the ethernet network interface.|
|» ethernetMacAddress0|body|string|false|(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|» firmwareVersion|body|string|false|The Chrome device's firmware version.|
|» firstEnrollmentTime|body|string|false|Date and time for the first time the device was enrolled.|
|» kind|body|string|false|The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.|
|» lastDeprovisionTimestamp|body|string|false|(Read-only) Date and time for the last deprovision of the device.|
|» lastEnrollmentTime|body|string(date-time)|false|Date and time the device was last enrolled (Read-only)|
|» lastKnownNetwork|body|[object]|false|Contains last known network (Read-only)|
|» » ipAddress|body|string|false|The IP address.|
|» » wanIpAddress|body|string|false|The WAN IP address.|
|» lastSync|body|string(date-time)|false|Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)|
|» macAddress|body|string|false|The device's wireless MAC address. If the device does not have this information, it is not included in the response.|
|» manufactureDate|body|string|false|(Read-only) The date the device was manufactured in yyyy-mm-dd format.|
|» meid|body|string|false|The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).|
|» model|body|string|false|The device's model information. If the device does not have this information, this property is not included in the response.|
|» notes|body|string|false|Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.|
|» orderNumber|body|string|false|The device's order number. Only devices directly purchased from Google have an order number.|
|» orgUnitId|body|string|false|The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|» orgUnitPath|body|string|false|The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|» osUpdateStatus|body|[OsUpdateStatus](#schemaosupdatestatus)|false|The status of the OS updates for the device.|
|» osVersion|body|string|false|The Chrome device's operating system version.|
|» platformVersion|body|string|false|The Chrome device's platform version.|
|» recentUsers|body|[object]|false|A list of recent device users, in descending order, by last login time.|
|» » email|body|string|false|The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.|
|» » type|body|string|false|The type of the user.|
|» screenshotFiles|body|[object]|false|A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)|
|» » createTime|body|string(date-time)|false|Date and time the file was created|
|» » downloadUrl|body|string|false|File download URL|
|» » name|body|string|false|File name|
|» » type|body|string|false|File type|
|» serialNumber|body|string|false|The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.|
|» status|body|string|false|The status of the device.|
|» supportEndDate|body|string(date-time)|false|Final date the device will be supported (Read-only)|
|» systemRamFreeReports|body|[object]|false|Reports of amounts of available RAM memory (Read-only)|
|» » reportTime|body|string(date-time)|false|Date and time the report was received.|
|» » systemRamFreeInfo|body|[string(int64)]|false|none|
|» systemRamTotal|body|string(int64)|false|Total RAM on the device [in bytes] (Read-only)|
|» tpmVersionInfo|body|object|false|Trusted Platform Module (TPM) (Read-only)|
|» » family|body|string|false|TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000|
|» » firmwareVersion|body|string|false|TPM firmware version.|
|» » manufacturer|body|string|false|TPM manufacturer code.|
|» » specLevel|body|string|false|TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.|
|» » tpmModel|body|string|false|TPM model number.|
|» » vendorSpecific|body|string|false|Vendor-specific information such as Vendor ID.|
|» willAutoRenew|body|boolean|false|Determines if the device will auto renew its support after the support end date. This is a read-only property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|projection|BASIC|
|projection|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» deprovisionReason|DEPROVISION_REASON_UNSPECIFIED|
|» deprovisionReason|DEPROVISION_REASON_SAME_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE|
|» deprovisionReason|DEPROVISION_REASON_DOMAIN_MOVE|
|» deprovisionReason|DEPROVISION_REASON_SERVICE_EXPIRATION|
|» deprovisionReason|DEPROVISION_REASON_OTHER|
|» deprovisionReason|DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_RETIRING_DEVICE|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE_TRANSFER|
|» deprovisionReason|DEPROVISION_REASON_NOT_REQUIRED|
|» deprovisionReason|DEPROVISION_REASON_REPAIR_CENTER|

> Example responses

> 200 Response

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "deviceLicenseType": "deviceLicenseTypeUnspecified",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

<h3 id="directorychromeosdevicespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChromeOsDevice](#schemachromeosdevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

## directory.chromeosdevices.action

<a id="opIddirectory.chromeosdevices.action"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string",
    "deprovisionReason": "string"
  }'
```

`POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action`

Use [BatchChangeChromeOsDeviceStatus](/admin-sdk/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

> Body parameter

```json
{
  "action": "string",
  "deprovisionReason": "string"
}
```

<h3 id="directorychromeosdevicesaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|resourceId|path|string|true|The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ChromeOsDeviceAction](#schemachromeosdeviceaction)|false|none|
|» action|body|string|false|Action to be taken on the Chrome OS device.|
|» deprovisionReason|body|string|false|Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directorychromeosdevicesaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

<h1 id="admin-sdk-api-customer">customer</h1>

## admin.customer.devices.chromeos.commands.get

<a id="opIdadmin.customer.devices.chromeos.commands.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string/commands/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}`

Gets command data a specific command issued to the device.

<h3 id="admincustomerdeviceschromeoscommandsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable. ID of the Google Workspace account.|
|deviceId|path|string|true|Immutable. ID of Chrome OS Device.|
|commandId|path|string|true|Immutable. ID of Chrome OS Device Command.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "commandExpireTime": "string",
  "commandId": "string",
  "commandResult": {
    "commandResultPayload": "string",
    "errorMessage": "string",
    "executeTime": "string",
    "result": "COMMAND_RESULT_TYPE_UNSPECIFIED"
  },
  "issueTime": "string",
  "payload": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "COMMAND_TYPE_UNSPECIFIED"
}
```

<h3 id="admincustomerdeviceschromeoscommandsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DirectoryChromeosdevicesCommand](#schemadirectorychromeosdevicescommand)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly )
</aside>

## admin.customer.devices.chromeos.issueCommand

<a id="opIdadmin.customer.devices.chromeos.issueCommand"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos/string:issueCommand \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "commandType": "COMMAND_TYPE_UNSPECIFIED",
    "payload": "string"
  }'
```

`POST /admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand`

Issues a command for the device to execute.

> Body parameter

```json
{
  "commandType": "COMMAND_TYPE_UNSPECIFIED",
  "payload": "string"
}
```

<h3 id="admincustomerdeviceschromeosissuecommand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable. ID of the Google Workspace account.|
|deviceId|path|string|true|Immutable. ID of Chrome OS Device.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[DirectoryChromeosdevicesIssueCommandRequest](#schemadirectorychromeosdevicesissuecommandrequest)|false|none|
|» commandType|body|string|false|The type of command.|
|» payload|body|string|false|The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. * `REBOOT`: Payload is a stringified JSON object in the form: { "user_session_delay_seconds": 300 }. The delay has to be in the range [0, 300]. * `FETCH_SUPPORT_PACKET`: Payload is optionally a stringified JSON object in the form: {"supportPacketDetails":{ "issueCaseId": optional_support_case_id_string, "issueDescription": optional_issue_description_string, "requestedDataCollectors": []}} The list of available `data_collector_enums` are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23). See more details in [help article](https://support.google.com/chrome/a?p=remote-log).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» commandType|COMMAND_TYPE_UNSPECIFIED|
|» commandType|REBOOT|
|» commandType|TAKE_A_SCREENSHOT|
|» commandType|SET_VOLUME|
|» commandType|WIPE_USERS|
|» commandType|REMOTE_POWERWASH|
|» commandType|DEVICE_START_CRD_SESSION|
|» commandType|CAPTURE_LOGS|
|» commandType|FETCH_SUPPORT_PACKET|

> Example responses

> 200 Response

```json
{
  "commandId": "string"
}
```

<h3 id="admincustomerdeviceschromeosissuecommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DirectoryChromeosdevicesIssueCommandResponse](#schemadirectorychromeosdevicesissuecommandresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

## admin.customer.devices.chromeos.batchChangeStatus

<a id="opIdadmin.customer.devices.chromeos.batchChangeStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/chromeos:batchChangeStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "changeChromeOsDeviceStatusAction": "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED",
    "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
    "deviceIds": [
      "string"
    ]
  }'
```

`POST /admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus`

Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).

> Body parameter

```json
{
  "changeChromeOsDeviceStatusAction": "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED",
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceIds": [
    "string"
  ]
}
```

<h3 id="admincustomerdeviceschromeosbatchchangestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Required. Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchChangeChromeOsDeviceStatusRequest](#schemabatchchangechromeosdevicestatusrequest)|false|none|
|» changeChromeOsDeviceStatusAction|body|string|false|Required. The action to take on the ChromeOS device in order to change its status.|
|» deprovisionReason|body|string|false|Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field.|
|» deviceIds|body|[string]|false|Required. List of the IDs of the ChromeOS devices to change. Maximum 50.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED|
|» changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION|
|» changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE|
|» changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE|
|» deprovisionReason|DEPROVISION_REASON_UNSPECIFIED|
|» deprovisionReason|DEPROVISION_REASON_SAME_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE|
|» deprovisionReason|DEPROVISION_REASON_DOMAIN_MOVE|
|» deprovisionReason|DEPROVISION_REASON_SERVICE_EXPIRATION|
|» deprovisionReason|DEPROVISION_REASON_OTHER|
|» deprovisionReason|DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT|
|» deprovisionReason|DEPROVISION_REASON_RETIRING_DEVICE|
|» deprovisionReason|DEPROVISION_REASON_UPGRADE_TRANSFER|
|» deprovisionReason|DEPROVISION_REASON_NOT_REQUIRED|
|» deprovisionReason|DEPROVISION_REASON_REPAIR_CENTER|

> Example responses

> 200 Response

```json
{
  "changeChromeOsDeviceStatusResults": [
    {
      "deviceId": "string",
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
      "response": {}
    }
  ]
}
```

<h3 id="admincustomerdeviceschromeosbatchchangestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchChangeChromeOsDeviceStatusResponse](#schemabatchchangechromeosdevicestatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.chromeos )
</aside>

<h1 id="admin-sdk-api-customers">customers</h1>

## directory.customers.get

<a id="opIddirectory.customers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customers/{customerKey}`

Retrieves a customer.

<h3 id="directorycustomersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerKey|path|string|true|Id of the customer to be retrieved|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

<h3 id="directorycustomersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.customer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.customer ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.customer.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.customer.readonly )
</aside>

## directory.customers.update

<a id="opIddirectory.customers.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "customerCreationTime": "1970-01-01T00:00:00Z",
    "customerDomain": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#customer",
    "language": "string",
    "phoneNumber": "string",
    "postalAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "contactName": "string",
      "countryCode": "string",
      "locality": "string",
      "organizationName": "string",
      "postalCode": "string",
      "region": "string"
    }
  }'
```

`PUT /admin/directory/v1/customers/{customerKey}`

Updates a customer.

> Body parameter

```json
{
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

<h3 id="directorycustomersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerKey|path|string|true|Id of the customer to be updated|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Customer](#schemacustomer)|false|none|
|» alternateEmail|body|string|false|The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`|
|» customerCreationTime|body|string(date-time)|false|The customer's creation time (Readonly)|
|» customerDomain|body|string|false|The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|The unique ID for the customer's Google Workspace account. (Readonly)|
|» kind|body|string|false|Identifies the resource as a customer. Value: `admin#directory#customer`|
|» language|body|string|false|The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.|
|» phoneNumber|body|string|false|The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|» postalAddress|body|[CustomerPostalAddress](#schemacustomerpostaladdress)|false|The customer's postal address information.|

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
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

<h3 id="directorycustomersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.customer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.customer )
</aside>

## directory.customers.patch

<a id="opIddirectory.customers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "customerCreationTime": "1970-01-01T00:00:00Z",
    "customerDomain": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#customer",
    "language": "string",
    "phoneNumber": "string",
    "postalAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "contactName": "string",
      "countryCode": "string",
      "locality": "string",
      "organizationName": "string",
      "postalCode": "string",
      "region": "string"
    }
  }'
```

`PATCH /admin/directory/v1/customers/{customerKey}`

Patches a customer.

> Body parameter

```json
{
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

<h3 id="directorycustomerspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerKey|path|string|true|Id of the customer to be updated|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Customer](#schemacustomer)|false|none|
|» alternateEmail|body|string|false|The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`|
|» customerCreationTime|body|string(date-time)|false|The customer's creation time (Readonly)|
|» customerDomain|body|string|false|The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|The unique ID for the customer's Google Workspace account. (Readonly)|
|» kind|body|string|false|Identifies the resource as a customer. Value: `admin#directory#customer`|
|» language|body|string|false|The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.|
|» phoneNumber|body|string|false|The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|» postalAddress|body|[CustomerPostalAddress](#schemacustomerpostaladdress)|false|The customer's postal address information.|

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
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

<h3 id="directorycustomerspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.customer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.customer )
</aside>

## admin.customers.chrome.printServers.get

<a id="opIdadmin.customers.chrome.printServers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/{name}`

Returns a print server's configuration.

<h3 id="admincustomerschromeprintserversget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

<h3 id="admincustomerschromeprintserversget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PrintServer](#schemaprintserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly )
</aside>

## admin.customers.chrome.printServers.delete

<a id="opIdadmin.customers.chrome.printServers.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/{name}`

Deletes a print server.

<h3 id="admincustomerschromeprintserversdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="admincustomerschromeprintserversdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printServers.patch

<a id="opIdadmin.customers.chrome.printServers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "id": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string"
  }'
```

`PATCH /admin/directory/v1/{name}`

Updates a print server's configuration.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

<h3 id="admincustomerschromeprintserverspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`|
|updateMask|query|string|false|The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PrintServer](#schemaprintserver)|false|none|
|» description|body|string|false|Editable. Description of the print server (as shown in the Admin console).|
|» displayName|body|string|false|Editable. Display name of the print server (as shown in the Admin console).|
|» id|body|string|false|Immutable. ID of the print server. Leave empty when creating.|
|» name|body|string|false|Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`|
|» orgUnitId|body|string|false|ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).|
|» uri|body|string|false|Editable. Print server URI.|

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
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

<h3 id="admincustomerschromeprintserverspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PrintServer](#schemaprintserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printServers.list

<a id="opIdadmin.customers.chrome.printServers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printServers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/{parent}/chrome/printServers`

Lists print server configurations.

<h3 id="admincustomerschromeprintserverslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`|
|filter|query|string|false|Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.|
|orderBy|query|string|false|Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order.|
|orgUnitId|query|string|false|If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.|
|pageSize|query|integer|false|The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.|
|pageToken|query|string|false|A generated token to paginate results (the `next_page_token` from a previous call).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "printServers": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="admincustomerschromeprintserverslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPrintServersResponse](#schemalistprintserversresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly )
</aside>

## admin.customers.chrome.printServers.create

<a id="opIdadmin.customers.chrome.printServers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "id": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string"
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printServers`

Creates a print server.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

<h3 id="admincustomerschromeprintserverscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PrintServer](#schemaprintserver)|false|none|
|» description|body|string|false|Editable. Description of the print server (as shown in the Admin console).|
|» displayName|body|string|false|Editable. Display name of the print server (as shown in the Admin console).|
|» id|body|string|false|Immutable. ID of the print server. Leave empty when creating.|
|» name|body|string|false|Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`|
|» orgUnitId|body|string|false|ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).|
|» uri|body|string|false|Editable. Print server URI.|

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
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

<h3 id="admincustomerschromeprintserverscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PrintServer](#schemaprintserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printServers.batchCreatePrintServers

<a id="opIdadmin.customers.chrome.printServers.batchCreatePrintServers"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printServers:batchCreatePrintServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "parent": "string",
        "printServer": {
          "description": "string",
          "displayName": "string",
          "id": "string",
          "name": "string",
          "orgUnitId": "string",
          "uri": "string"
        }
      }
    ]
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printServers:batchCreatePrintServers`

Creates multiple print servers.

> Body parameter

```json
{
  "requests": [
    {
      "parent": "string",
      "printServer": {
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      }
    }
  ]
}
```

<h3 id="admincustomerschromeprintserversbatchcreateprintservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchCreatePrintServersRequest](#schemabatchcreateprintserversrequest)|false|none|
|» requests|body|[[CreatePrintServerRequest](#schemacreateprintserverrequest)]|false|Required. A list of `PrintServer` resources to be created (max `50` per batch).|

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
  "failures": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printServer": {
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      },
      "printServerId": "string"
    }
  ],
  "printServers": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="admincustomerschromeprintserversbatchcreateprintservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreatePrintServersResponse](#schemabatchcreateprintserversresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printServers.batchDeletePrintServers

<a id="opIdadmin.customers.chrome.printServers.batchDeletePrintServers"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printServers:batchDeletePrintServers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "printServerIds": [
      "string"
    ]
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printServers:batchDeletePrintServers`

Deletes multiple print servers.

> Body parameter

```json
{
  "printServerIds": [
    "string"
  ]
}
```

<h3 id="admincustomerschromeprintserversbatchdeleteprintservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchDeletePrintServersRequest](#schemabatchdeleteprintserversrequest)|false|none|
|» printServerIds|body|[string]|false|A list of print server IDs that should be deleted (max `100` per batch).|

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
  "failedPrintServers": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printServer": {
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      },
      "printServerId": "string"
    }
  ],
  "printServerIds": [
    "string"
  ]
}
```

<h3 id="admincustomerschromeprintserversbatchdeleteprintservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchDeletePrintServersResponse](#schemabatchdeleteprintserversresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printers.list

<a id="opIdadmin.customers.chrome.printers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/{parent}/chrome/printers`

List printers configs.

<h3 id="admincustomerschromeprinterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}|
|filter|query|string|false|Search query. Search syntax is shared between this api and Admin Console printers pages.|
|orderBy|query|string|false|The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.|
|orgUnitId|query|string|false|Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.|
|pageSize|query|integer|false|The maximum number of objects to return. The service may return fewer than this value.|
|pageToken|query|string|false|A page token, received from a previous call.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "printers": [
    {
      "auxiliaryMessages": [
        {
          "auxiliaryMessage": "string",
          "fieldMask": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "makeAndModel": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string",
      "useDriverlessConfig": true
    }
  ]
}
```

<h3 id="admincustomerschromeprinterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPrintersResponse](#schemalistprintersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly )
</aside>

## admin.customers.chrome.printers.create

<a id="opIdadmin.customers.chrome.printers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "id": "string",
    "makeAndModel": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string",
    "useDriverlessConfig": true
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printers`

Creates a printer under given Organization Unit.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "id": "string",
  "makeAndModel": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string",
  "useDriverlessConfig": true
}
```

<h3 id="admincustomerschromeprinterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the customer. Format: customers/{customer_id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Printer](#schemaprinter)|false|none|
|» description|body|string|false|Editable. Description of printer.|
|» displayName|body|string|false|Editable. Name of printer.|
|» id|body|string|false|Id of the printer. (During printer creation leave empty)|
|» makeAndModel|body|string|false|Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.|
|» name|body|string|false|The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)|
|» orgUnitId|body|string|false|Organization Unit that owns this printer (Only can be set during Printer creation)|
|» uri|body|string|false|Editable. Printer URI.|
|» useDriverlessConfig|body|boolean|false|Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored|

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
  "auxiliaryMessages": [
    {
      "auxiliaryMessage": "string",
      "fieldMask": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "id": "string",
  "makeAndModel": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string",
  "useDriverlessConfig": true
}
```

<h3 id="admincustomerschromeprinterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Printer](#schemaprinter)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printers.batchCreatePrinters

<a id="opIdadmin.customers.chrome.printers.batchCreatePrinters"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printers:batchCreatePrinters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "parent": "string",
        "printer": {
          "description": "string",
          "displayName": "string",
          "id": "string",
          "makeAndModel": "string",
          "name": "string",
          "orgUnitId": "string",
          "uri": "string",
          "useDriverlessConfig": true
        }
      }
    ]
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printers:batchCreatePrinters`

Creates printers under given Organization Unit.

> Body parameter

```json
{
  "requests": [
    {
      "parent": "string",
      "printer": {
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      }
    }
  ]
}
```

<h3 id="admincustomerschromeprintersbatchcreateprinters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the customer. Format: customers/{customer_id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchCreatePrintersRequest](#schemabatchcreateprintersrequest)|false|none|
|» requests|body|[[CreatePrinterRequest](#schemacreateprinterrequest)]|false|A list of Printers to be created. Max 50 at a time.|

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
  "failures": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printer": {
        "auxiliaryMessages": [
          {
            "auxiliaryMessage": "string",
            "fieldMask": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      },
      "printerId": "string"
    }
  ],
  "printers": [
    {
      "auxiliaryMessages": [
        {
          "auxiliaryMessage": "string",
          "fieldMask": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "makeAndModel": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string",
      "useDriverlessConfig": true
    }
  ]
}
```

<h3 id="admincustomerschromeprintersbatchcreateprinters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreatePrintersResponse](#schemabatchcreateprintersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printers.batchDeletePrinters

<a id="opIdadmin.customers.chrome.printers.batchDeletePrinters"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printers:batchDeletePrinters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "printerIds": [
      "string"
    ]
  }'
```

`POST /admin/directory/v1/{parent}/chrome/printers:batchDeletePrinters`

Deletes printers in batch.

> Body parameter

```json
{
  "printerIds": [
    "string"
  ]
}
```

<h3 id="admincustomerschromeprintersbatchdeleteprinters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the customer. Format: customers/{customer_id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchDeletePrintersRequest](#schemabatchdeleteprintersrequest)|false|none|
|» printerIds|body|[string]|false|A list of Printer.id that should be deleted. Max 100 at a time.|

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
  "failedPrinters": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printer": {
        "auxiliaryMessages": [
          {
            "auxiliaryMessage": "string",
            "fieldMask": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      },
      "printerId": "string"
    }
  ],
  "printerIds": [
    "string"
  ]
}
```

<h3 id="admincustomerschromeprintersbatchdeleteprinters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchDeletePrintersResponse](#schemabatchdeleteprintersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers )
</aside>

## admin.customers.chrome.printers.listPrinterModels

<a id="opIdadmin.customers.chrome.printers.listPrinterModels"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/string/chrome/printers:listPrinterModels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/{parent}/chrome/printers:listPrinterModels`

Lists the supported printer models.

<h3 id="admincustomerschromeprinterslistprintermodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}|
|filter|query|string|false|Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.|
|pageSize|query|integer|false|The maximum number of objects to return. The service may return fewer than this value.|
|pageToken|query|string|false|A page token, received from a previous call.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "printerModels": [
    {
      "displayName": "string",
      "makeAndModel": "string",
      "manufacturer": "string"
    }
  ]
}
```

<h3 id="admincustomerschromeprinterslistprintermodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPrinterModelsResponse](#schemalistprintermodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.chrome.printers.readonly )
</aside>

<h1 id="admin-sdk-api-domainaliases">domainAliases</h1>

## directory.domainAliases.list

<a id="opIddirectory.domainAliases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domainaliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/domainaliases`

Lists the domain aliases of the customer.

<h3 id="directorydomainaliaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|parentDomainName|query|string|false|Name of the parent domain for which domain aliases are to be fetched.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#domainAliases"
}
```

<h3 id="directorydomainaliaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DomainAliases](#schemadomainaliases)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly )
</aside>

## directory.domainAliases.insert

<a id="opIddirectory.domainAliases.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domainaliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creationTime": "string",
    "domainAliasName": "string",
    "etag": "string",
    "kind": "admin#directory#domainAlias",
    "parentDomainName": "string",
    "verified": true
  }'
```

`POST /admin/directory/v1/customer/{customer}/domainaliases`

Inserts a domain alias of the customer.

> Body parameter

```json
{
  "creationTime": "string",
  "domainAliasName": "string",
  "etag": "string",
  "kind": "admin#directory#domainAlias",
  "parentDomainName": "string",
  "verified": true
}
```

<h3 id="directorydomainaliasesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[DomainAlias](#schemadomainalias)|false|none|
|» creationTime|body|string(int64)|false|The creation time of the domain alias. (Read-only).|
|» domainAliasName|body|string|false|The domain alias name.|
|» etag|body|string|false|ETag of the resource.|
|» kind|body|string|false|Kind of resource this is.|
|» parentDomainName|body|string|false|The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.|
|» verified|body|boolean|false|Indicates the verification state of a domain alias. (Read-only)|

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
  "creationTime": "string",
  "domainAliasName": "string",
  "etag": "string",
  "kind": "admin#directory#domainAlias",
  "parentDomainName": "string",
  "verified": true
}
```

<h3 id="directorydomainaliasesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DomainAlias](#schemadomainalias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain )
</aside>

## directory.domainAliases.get

<a id="opIddirectory.domainAliases.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domainaliases/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}`

Retrieves a domain alias of the customer.

<h3 id="directorydomainaliasesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|domainAliasName|path|string|true|Name of domain alias to be retrieved.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "creationTime": "string",
  "domainAliasName": "string",
  "etag": "string",
  "kind": "admin#directory#domainAlias",
  "parentDomainName": "string",
  "verified": true
}
```

<h3 id="directorydomainaliasesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DomainAlias](#schemadomainalias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly )
</aside>

## directory.domainAliases.delete

<a id="opIddirectory.domainAliases.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domainaliases/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}`

Deletes a domain Alias of the customer.

<h3 id="directorydomainaliasesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|domainAliasName|path|string|true|Name of domain alias to be retrieved.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorydomainaliasesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain )
</aside>

<h1 id="admin-sdk-api-domains">domains</h1>

## directory.domains.list

<a id="opIddirectory.domains.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/domains`

Lists the domains of the customer.

<h3 id="directorydomainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "domains": [
    {
      "creationTime": "string",
      "domainAliases": [
        {
          "creationTime": "string",
          "domainAliasName": "string",
          "etag": "string",
          "kind": "admin#directory#domainAlias",
          "parentDomainName": "string",
          "verified": true
        }
      ],
      "domainName": "string",
      "etag": "string",
      "isPrimary": true,
      "kind": "admin#directory#domain",
      "verified": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#domains"
}
```

<h3 id="directorydomainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Domains2](#schemadomains2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly )
</aside>

## directory.domains.insert

<a id="opIddirectory.domains.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creationTime": "string",
    "domainAliases": [
      {
        "creationTime": "string",
        "domainAliasName": "string",
        "etag": "string",
        "kind": "admin#directory#domainAlias",
        "parentDomainName": "string",
        "verified": true
      }
    ],
    "domainName": "string",
    "etag": "string",
    "isPrimary": true,
    "kind": "admin#directory#domain",
    "verified": true
  }'
```

`POST /admin/directory/v1/customer/{customer}/domains`

Inserts a domain of the customer.

> Body parameter

```json
{
  "creationTime": "string",
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "domainName": "string",
  "etag": "string",
  "isPrimary": true,
  "kind": "admin#directory#domain",
  "verified": true
}
```

<h3 id="directorydomainsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Domains](#schemadomains)|false|none|
|» creationTime|body|string(int64)|false|Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).|
|» domainAliases|body|[[DomainAlias](#schemadomainalias)]|false|A list of domain alias objects. (Read-only)|
|» domainName|body|string|false|The domain name of the customer.|
|» etag|body|string|false|ETag of the resource.|
|» isPrimary|body|boolean|false|Indicates if the domain is a primary domain (Read-only).|
|» kind|body|string|false|Kind of resource this is.|
|» verified|body|boolean|false|Indicates the verification state of a domain. (Read-only).|

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
  "creationTime": "string",
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "domainName": "string",
  "etag": "string",
  "isPrimary": true,
  "kind": "admin#directory#domain",
  "verified": true
}
```

<h3 id="directorydomainsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Domains](#schemadomains)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain )
</aside>

## directory.domains.get

<a id="opIddirectory.domains.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/domains/{domainName}`

Retrieves a domain of the customer.

<h3 id="directorydomainsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|domainName|path|string|true|Name of domain to be retrieved|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "creationTime": "string",
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "domainName": "string",
  "etag": "string",
  "isPrimary": true,
  "kind": "admin#directory#domain",
  "verified": true
}
```

<h3 id="directorydomainsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Domains](#schemadomains)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain.readonly )
</aside>

## directory.domains.delete

<a id="opIddirectory.domains.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/domains/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/domains/{domainName}`

Deletes a domain of the customer.

<h3 id="directorydomainsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|domainName|path|string|true|Name of domain to be deleted|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorydomainsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.domain ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.domain )
</aside>

<h1 id="admin-sdk-api-groups">groups</h1>

## directory.groups.list

<a id="opIddirectory.groups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups`

Retrieves all groups of a domain or of a user given a userKey (paginated).

<h3 id="directorygroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|query|string|false|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|domain|query|string|false|The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.|
|maxResults|query|integer|false|Maximum number of results to return. Max allowed value is 200.|
|orderBy|query|string|false|Column to use for sorting results|
|pageToken|query|string|false|Token to specify next page in the list|
|query|query|string|false|Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups|
|sortOrder|query|string|false|Whether to return results in ascending or descending order. Only of use when orderBy is also used|
|userKey|query|string|false|Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|orderBy|email|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "groups": [
    {
      "adminCreated": true,
      "aliases": [
        "string"
      ],
      "description": "string",
      "directMembersCount": "string",
      "email": "string",
      "etag": "string",
      "id": "string",
      "kind": "admin#directory#group",
      "name": "string",
      "nonEditableAliases": [
        "string"
      ]
    }
  ],
  "kind": "admin#directory#groups",
  "nextPageToken": "string"
}
```

<h3 id="directorygroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Groups](#schemagroups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.groups.insert

<a id="opIddirectory.groups.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminCreated": true,
    "aliases": [
      "string"
    ],
    "description": "string",
    "directMembersCount": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#group",
    "name": "string",
    "nonEditableAliases": [
      "string"
    ]
  }'
```

`POST /admin/directory/v1/groups`

Creates a group.

> Body parameter

```json
{
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupsinsert-parameters">Parameters</h3>

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
|body|body|[Group](#schemagroup)|false|none|
|» adminCreated|body|boolean|false|Read-only. Value is `true` if this group was created by an administrator rather than a user.|
|» aliases|body|[string]|false|Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.|
|» description|body|string|false|An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.|
|» directMembersCount|body|string(int64)|false|The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.|
|» email|body|string|false|The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.|
|» kind|body|string|false|The type of the API resource. For Groups resources, the value is `admin#directory#group`.|
|» name|body|string|false|The group's display name.|
|» nonEditableAliases|body|[string]|false|Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.|

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
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Group](#schemagroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

## directory.groups.get

<a id="opIddirectory.groups.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups/{groupKey}`

Retrieves a group's properties.

<h3 id="directorygroupsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Group](#schemagroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.groups.update

<a id="opIddirectory.groups.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminCreated": true,
    "aliases": [
      "string"
    ],
    "description": "string",
    "directMembersCount": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#group",
    "name": "string",
    "nonEditableAliases": [
      "string"
    ]
  }'
```

`PUT /admin/directory/v1/groups/{groupKey}`

Updates a group's properties.

> Body parameter

```json
{
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» adminCreated|body|boolean|false|Read-only. Value is `true` if this group was created by an administrator rather than a user.|
|» aliases|body|[string]|false|Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.|
|» description|body|string|false|An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.|
|» directMembersCount|body|string(int64)|false|The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.|
|» email|body|string|false|The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.|
|» kind|body|string|false|The type of the API resource. For Groups resources, the value is `admin#directory#group`.|
|» name|body|string|false|The group's display name.|
|» nonEditableAliases|body|[string]|false|Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.|

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
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Group](#schemagroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

## directory.groups.delete

<a id="opIddirectory.groups.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/groups/{groupKey}`

Deletes a group.

<h3 id="directorygroupsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorygroupsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

## directory.groups.patch

<a id="opIddirectory.groups.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminCreated": true,
    "aliases": [
      "string"
    ],
    "description": "string",
    "directMembersCount": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#group",
    "name": "string",
    "nonEditableAliases": [
      "string"
    ]
  }'
```

`PATCH /admin/directory/v1/groups/{groupKey}`

Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

> Body parameter

```json
{
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» adminCreated|body|boolean|false|Read-only. Value is `true` if this group was created by an administrator rather than a user.|
|» aliases|body|[string]|false|Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.|
|» description|body|string|false|An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.|
|» directMembersCount|body|string(int64)|false|The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.|
|» email|body|string|false|The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.|
|» kind|body|string|false|The type of the API resource. For Groups resources, the value is `admin#directory#group`.|
|» name|body|string|false|The group's display name.|
|» nonEditableAliases|body|[string]|false|Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.|

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
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

<h3 id="directorygroupspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Group](#schemagroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

## directory.groups.aliases.list

<a id="opIddirectory.groups.aliases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups/{groupKey}/aliases`

Lists all aliases for a group.

<h3 id="directorygroupsaliaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "aliases": [
    null
  ],
  "etag": "string",
  "kind": "admin#directory#aliases"
}
```

<h3 id="directorygroupsaliaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Aliases](#schemaaliases)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.groups.aliases.insert

<a id="opIddirectory.groups.aliases.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#alias",
    "primaryEmail": "string"
  }'
```

`POST /admin/directory/v1/groups/{groupKey}/aliases`

Adds an alias for the group.

> Body parameter

```json
{
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#alias",
  "primaryEmail": "string"
}
```

<h3 id="directorygroupsaliasesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Alias](#schemaalias)|false|none|
|» alias|body|string|false|none|
|» etag|body|string|false|none|
|» id|body|string|false|none|
|» kind|body|string|false|none|
|» primaryEmail|body|string|false|none|

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
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#alias",
  "primaryEmail": "string"
}
```

<h3 id="directorygroupsaliasesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alias](#schemaalias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

## directory.groups.aliases.delete

<a id="opIddirectory.groups.aliases.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/aliases/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/groups/{groupKey}/aliases/{alias}`

Removes an alias.

<h3 id="directorygroupsaliasesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|alias|path|string|true|The alias to be removed|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorygroupsaliasesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group )
</aside>

<h1 id="admin-sdk-api-members">members</h1>

## directory.members.hasMember

<a id="opIddirectory.members.hasMember"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/hasMember/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}`

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

<h3 id="directorymembershasmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|memberKey|path|string|true|Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "isMember": true
}
```

<h3 id="directorymembershasmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MembersHasMember](#schemamembershasmember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.members.list

<a id="opIddirectory.members.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups/{groupKey}/members`

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

<h3 id="directorymemberslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|includeDerivedMembership|query|boolean|false|Whether to list indirect memberships. Default: false.|
|maxResults|query|integer|false|Maximum number of results to return. Max allowed value is 200.|
|pageToken|query|string|false|Token to specify next page in the list.|
|roles|query|string|false|The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "kind": "admin#directory#members",
  "members": [
    {
      "delivery_settings": "string",
      "email": "string",
      "etag": "string",
      "id": "string",
      "kind": "admin#directory#member",
      "role": "string",
      "status": "string",
      "type": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="directorymemberslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Members](#schemamembers)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.members.insert

<a id="opIddirectory.members.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delivery_settings": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#member",
    "role": "string",
    "status": "string",
    "type": "string"
  }'
```

`POST /admin/directory/v1/groups/{groupKey}/members`

Adds a user to the specified group.

> Body parameter

```json
{
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymembersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Member](#schemamember)|false|none|
|» delivery_settings|body|string|false|Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.|
|» email|body|string|false|The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.|
|» kind|body|string|false|The type of the API resource. For Members resources, the value is `admin#directory#member`.|
|» role|body|string|false|The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).|
|» status|body|string|false|Status of member (Immutable)|
|» type|body|string|false|The type of group member.|

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
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymembersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member )
</aside>

## directory.members.get

<a id="opIddirectory.members.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/groups/{groupKey}/members/{memberKey}`

Retrieves a group member's properties.

<h3 id="directorymembersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|memberKey|path|string|true|Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymembersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.readonly )
</aside>

## directory.members.update

<a id="opIddirectory.members.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delivery_settings": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#member",
    "role": "string",
    "status": "string",
    "type": "string"
  }'
```

`PUT /admin/directory/v1/groups/{groupKey}/members/{memberKey}`

Updates the membership of a user in the specified group.

> Body parameter

```json
{
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymembersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|memberKey|path|string|true|Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Member](#schemamember)|false|none|
|» delivery_settings|body|string|false|Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.|
|» email|body|string|false|The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.|
|» kind|body|string|false|The type of the API resource. For Members resources, the value is `admin#directory#member`.|
|» role|body|string|false|The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).|
|» status|body|string|false|Status of member (Immutable)|
|» type|body|string|false|The type of group member.|

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
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymembersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member )
</aside>

## directory.members.delete

<a id="opIddirectory.members.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/groups/{groupKey}/members/{memberKey}`

Removes a member from a group.

<h3 id="directorymembersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|memberKey|path|string|true|Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorymembersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member )
</aside>

## directory.members.patch

<a id="opIddirectory.members.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/groups/string/members/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delivery_settings": "string",
    "email": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#member",
    "role": "string",
    "status": "string",
    "type": "string"
  }'
```

`PATCH /admin/directory/v1/groups/{groupKey}/members/{memberKey}`

Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

> Body parameter

```json
{
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymemberspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupKey|path|string|true|Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.|
|memberKey|path|string|true|Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Member](#schemamember)|false|none|
|» delivery_settings|body|string|false|Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.|
|» email|body|string|false|The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.|
|» kind|body|string|false|The type of the API resource. For Members resources, the value is `admin#directory#member`.|
|» role|body|string|false|The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).|
|» status|body|string|false|Status of member (Immutable)|
|» type|body|string|false|The type of group member.|

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
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

<h3 id="directorymemberspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.group.member )
</aside>

<h1 id="admin-sdk-api-mobiledevices">mobiledevices</h1>

## directory.mobiledevices.list

<a id="opIddirectory.mobiledevices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/mobile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/devices/mobile`

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

<h3 id="directorymobiledeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|maxResults|query|integer|false|Maximum number of results to return. Max allowed value is 100.|
|orderBy|query|string|false|Device property to use for sorting results.|
|pageToken|query|string|false|Token to specify next page in the list|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|query|query|string|false|Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators|
|sortOrder|query|string|false|Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|orderBy|deviceId|
|orderBy|email|
|orderBy|lastSync|
|orderBy|model|
|orderBy|name|
|orderBy|os|
|orderBy|status|
|orderBy|type|
|projection|BASIC|
|projection|FULL|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "kind": "admin#directory#mobiledevices",
  "mobiledevices": [
    {
      "adbStatus": true,
      "applications": [
        {
          "displayName": "string",
          "packageName": "string",
          "permission": [
            "string"
          ],
          "versionCode": 0,
          "versionName": "string"
        }
      ],
      "basebandVersion": "string",
      "bootloaderVersion": "string",
      "brand": "string",
      "buildNumber": "string",
      "defaultLanguage": "string",
      "developerOptionsStatus": true,
      "deviceCompromisedStatus": "string",
      "deviceId": "string",
      "devicePasswordStatus": "string",
      "email": [
        "string"
      ],
      "encryptionStatus": "string",
      "etag": "string",
      "firstSync": "1970-01-01T00:00:00Z",
      "hardware": "string",
      "hardwareId": "string",
      "imei": "string",
      "kernelVersion": "string",
      "kind": "admin#directory#mobiledevice",
      "lastSync": "1970-01-01T00:00:00Z",
      "managedAccountIsOnOwnerProfile": true,
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "name": [
        "string"
      ],
      "networkOperator": "string",
      "os": "string",
      "otherAccountsInfo": [
        "string"
      ],
      "privilege": "string",
      "releaseVersion": "string",
      "resourceId": "string",
      "securityPatchLevel": "string",
      "serialNumber": "string",
      "status": "string",
      "supportsWorkProfile": true,
      "type": "string",
      "unknownSourcesStatus": true,
      "userAgent": "string",
      "wifiMacAddress": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="directorymobiledeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MobileDevices](#schemamobiledevices)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.readonly )
</aside>

## directory.mobiledevices.get

<a id="opIddirectory.mobiledevices.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/mobile/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}`

Retrieves a mobile device's properties.

<h3 id="directorymobiledevicesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|resourceId|path|string|true|The unique ID the API service uses to identify the mobile device.|
|projection|query|string|false|Restrict information returned to a set of selected fields.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|projection|BASIC|
|projection|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "adbStatus": true,
  "applications": [
    {
      "displayName": "string",
      "packageName": "string",
      "permission": [
        "string"
      ],
      "versionCode": 0,
      "versionName": "string"
    }
  ],
  "basebandVersion": "string",
  "bootloaderVersion": "string",
  "brand": "string",
  "buildNumber": "string",
  "defaultLanguage": "string",
  "developerOptionsStatus": true,
  "deviceCompromisedStatus": "string",
  "deviceId": "string",
  "devicePasswordStatus": "string",
  "email": [
    "string"
  ],
  "encryptionStatus": "string",
  "etag": "string",
  "firstSync": "1970-01-01T00:00:00Z",
  "hardware": "string",
  "hardwareId": "string",
  "imei": "string",
  "kernelVersion": "string",
  "kind": "admin#directory#mobiledevice",
  "lastSync": "1970-01-01T00:00:00Z",
  "managedAccountIsOnOwnerProfile": true,
  "manufacturer": "string",
  "meid": "string",
  "model": "string",
  "name": [
    "string"
  ],
  "networkOperator": "string",
  "os": "string",
  "otherAccountsInfo": [
    "string"
  ],
  "privilege": "string",
  "releaseVersion": "string",
  "resourceId": "string",
  "securityPatchLevel": "string",
  "serialNumber": "string",
  "status": "string",
  "supportsWorkProfile": true,
  "type": "string",
  "unknownSourcesStatus": true,
  "userAgent": "string",
  "wifiMacAddress": "string"
}
```

<h3 id="directorymobiledevicesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MobileDevice](#schemamobiledevice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.readonly )
</aside>

## directory.mobiledevices.delete

<a id="opIddirectory.mobiledevices.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/mobile/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}`

Removes a mobile device.

<h3 id="directorymobiledevicesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|resourceId|path|string|true|The unique ID the API service uses to identify the mobile device.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorymobiledevicesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile )
</aside>

## directory.mobiledevices.action

<a id="opIddirectory.mobiledevices.action"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/devices/mobile/string/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "string"
  }'
```

`POST /admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action`

Takes an action that affects a mobile device. For example, remotely wiping a device.

> Body parameter

```json
{
  "action": "string"
}
```

<h3 id="directorymobiledevicesaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|resourceId|path|string|true|The unique ID the API service uses to identify the mobile device.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[MobileDeviceAction](#schemamobiledeviceaction)|false|none|
|» action|body|string|false|The action to be performed on the device.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directorymobiledevicesaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.device.mobile.action )
</aside>

<h1 id="admin-sdk-api-orgunits">orgunits</h1>

## directory.orgunits.list

<a id="opIddirectory.orgunits.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/orgunits`

Retrieves a list of all organizational units for an account.

<h3 id="directoryorgunitslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|orgUnitPath|query|string|false|The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.|
|type|query|string|false|Whether to return all sub-organizations or just immediate children.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|type|all|
|type|children|
|type|allIncludingParent|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "kind": "admin#directory#orgUnits",
  "organizationUnits": [
    {
      "blockInheritance": true,
      "description": "string",
      "etag": "string",
      "kind": "admin#directory#orgUnit",
      "name": "string",
      "orgUnitId": "string",
      "orgUnitPath": "string",
      "parentOrgUnitId": "string",
      "parentOrgUnitPath": "string"
    }
  ]
}
```

<h3 id="directoryorgunitslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OrgUnits](#schemaorgunits)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit.readonly )
</aside>

## directory.orgunits.insert

<a id="opIddirectory.orgunits.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blockInheritance": true,
    "description": "string",
    "etag": "string",
    "kind": "admin#directory#orgUnit",
    "name": "string",
    "orgUnitId": "string",
    "orgUnitPath": "string",
    "parentOrgUnitId": "string",
    "parentOrgUnitPath": "string"
  }'
```

`POST /admin/directory/v1/customer/{customerId}/orgunits`

Adds an organizational unit.

> Body parameter

```json
{
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[OrgUnit](#schemaorgunit)|false|none|
|» blockInheritance|body|boolean|false|**Deprecated.** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).|
|» description|body|string|false|Description of the organizational unit.|
|» etag|body|string|false|ETag of the resource.|
|» kind|body|string|false|The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.|
|» name|body|string|false|The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.|
|» orgUnitId|body|string|false|The unique ID of the organizational unit.|
|» orgUnitPath|body|string|false|The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).|
|» parentOrgUnitId|body|string|false|The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.|
|» parentOrgUnitPath|body|string|false|The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.|

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
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OrgUnit](#schemaorgunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit )
</aside>

## directory.orgunits.get

<a id="opIddirectory.orgunits.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}`

Retrieves an organizational unit.

<h3 id="directoryorgunitsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|orgUnitPath|path|string|true|The full path of the organizational unit (minus the leading `/`) or its unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OrgUnit](#schemaorgunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit.readonly )
</aside>

## directory.orgunits.update

<a id="opIddirectory.orgunits.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blockInheritance": true,
    "description": "string",
    "etag": "string",
    "kind": "admin#directory#orgUnit",
    "name": "string",
    "orgUnitId": "string",
    "orgUnitPath": "string",
    "parentOrgUnitId": "string",
    "parentOrgUnitPath": "string"
  }'
```

`PUT /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}`

Updates an organizational unit.

> Body parameter

```json
{
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|orgUnitPath|path|string|true|The full path of the organizational unit (minus the leading `/`) or its unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[OrgUnit](#schemaorgunit)|false|none|
|» blockInheritance|body|boolean|false|**Deprecated.** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).|
|» description|body|string|false|Description of the organizational unit.|
|» etag|body|string|false|ETag of the resource.|
|» kind|body|string|false|The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.|
|» name|body|string|false|The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.|
|» orgUnitId|body|string|false|The unique ID of the organizational unit.|
|» orgUnitPath|body|string|false|The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).|
|» parentOrgUnitId|body|string|false|The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.|
|» parentOrgUnitPath|body|string|false|The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.|

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
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OrgUnit](#schemaorgunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit )
</aside>

## directory.orgunits.delete

<a id="opIddirectory.orgunits.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}`

Removes an organizational unit.

<h3 id="directoryorgunitsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|orgUnitPath|path|string|true|The full path of the organizational unit (minus the leading `/`) or its unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryorgunitsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit )
</aside>

## directory.orgunits.patch

<a id="opIddirectory.orgunits.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/orgunits/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blockInheritance": true,
    "description": "string",
    "etag": "string",
    "kind": "admin#directory#orgUnit",
    "name": "string",
    "orgUnitId": "string",
    "orgUnitPath": "string",
    "parentOrgUnitId": "string",
    "parentOrgUnitPath": "string"
  }'
```

`PATCH /admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}`

Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)

> Body parameter

```json
{
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).|
|orgUnitPath|path|string|true|The full path of the organizational unit (minus the leading `/`) or its unique ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[OrgUnit](#schemaorgunit)|false|none|
|» blockInheritance|body|boolean|false|**Deprecated.** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).|
|» description|body|string|false|Description of the organizational unit.|
|» etag|body|string|false|ETag of the resource.|
|» kind|body|string|false|The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.|
|» name|body|string|false|The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.|
|» orgUnitId|body|string|false|The unique ID of the organizational unit.|
|» orgUnitPath|body|string|false|The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).|
|» parentOrgUnitId|body|string|false|The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.|
|» parentOrgUnitPath|body|string|false|The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.|

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
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

<h3 id="directoryorgunitspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[OrgUnit](#schemaorgunit)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.orgunit )
</aside>

<h1 id="admin-sdk-api-privileges">privileges</h1>

## directory.privileges.list

<a id="opIddirectory.privileges.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles/ALL/privileges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/roles/ALL/privileges`

Retrieves a paginated list of all privileges for a customer.

<h3 id="directoryprivilegeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "childPrivileges": [
        {}
      ],
      "etag": "string",
      "isOuScopable": true,
      "kind": "admin#directory#privilege",
      "privilegeName": "string",
      "serviceId": "string",
      "serviceName": "string"
    }
  ],
  "kind": "admin#directory#privileges"
}
```

<h3 id="directoryprivilegeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Privileges](#schemaprivileges)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly )
</aside>

<h1 id="admin-sdk-api-resources">resources</h1>

## directory.resources.buildings.list

<a id="opIddirectory.resources.buildings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/buildings`

Retrieves a list of buildings for an account.

<h3 id="directoryresourcesbuildingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|maxResults|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|Token to specify the next page in the list.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "buildings": [
    {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "postalCode": "string",
        "regionCode": "string",
        "sublocality": "string"
      },
      "buildingId": "string",
      "buildingName": "string",
      "coordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "description": "string",
      "etags": "string",
      "floorNames": [
        "string"
      ],
      "kind": "admin#directory#resources#buildings#Building"
    }
  ],
  "etag": "string",
  "kind": "admin#directory#resources#buildings#buildingsList",
  "nextPageToken": "string"
}
```

<h3 id="directoryresourcesbuildingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Buildings](#schemabuildings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.buildings.insert

<a id="opIddirectory.resources.buildings.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "postalCode": "string",
      "regionCode": "string",
      "sublocality": "string"
    },
    "buildingId": "string",
    "buildingName": "string",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "description": "string",
    "etags": "string",
    "floorNames": [
      "string"
    ],
    "kind": "admin#directory#resources#buildings#Building"
  }'
```

`POST /admin/directory/v1/customer/{customer}/resources/buildings`

Inserts a building.

> Body parameter

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|coordinatesSource|query|string|false|Source from which Building.coordinates are derived.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Building](#schemabuilding)|false|none|
|» address|body|[BuildingAddress](#schemabuildingaddress)|false|The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.|
|» buildingId|body|string|false|Unique identifier for the building. The maximum length is 100 characters.|
|» buildingName|body|string|false|The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.|
|» coordinates|body|[BuildingCoordinates](#schemabuildingcoordinates)|false|The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.|
|» description|body|string|false|A brief description of the building. For example, "Chelsea Market".|
|» etags|body|string|false|ETag of the resource.|
|» floorNames|body|[string]|false|The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.|
|» kind|body|string|false|Kind of resource this is.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|coordinatesSource|CLIENT_SPECIFIED|
|coordinatesSource|RESOLVED_FROM_ADDRESS|
|coordinatesSource|SOURCE_UNSPECIFIED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Building](#schemabuilding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.buildings.get

<a id="opIddirectory.resources.buildings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}`

Retrieves a building.

<h3 id="directoryresourcesbuildingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|buildingId|path|string|true|The unique ID of the building to retrieve.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Building](#schemabuilding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.buildings.update

<a id="opIddirectory.resources.buildings.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "postalCode": "string",
      "regionCode": "string",
      "sublocality": "string"
    },
    "buildingId": "string",
    "buildingName": "string",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "description": "string",
    "etags": "string",
    "floorNames": [
      "string"
    ],
    "kind": "admin#directory#resources#buildings#Building"
  }'
```

`PUT /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}`

Updates a building.

> Body parameter

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|buildingId|path|string|true|The id of the building to update.|
|coordinatesSource|query|string|false|Source from which Building.coordinates are derived.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Building](#schemabuilding)|false|none|
|» address|body|[BuildingAddress](#schemabuildingaddress)|false|The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.|
|» buildingId|body|string|false|Unique identifier for the building. The maximum length is 100 characters.|
|» buildingName|body|string|false|The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.|
|» coordinates|body|[BuildingCoordinates](#schemabuildingcoordinates)|false|The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.|
|» description|body|string|false|A brief description of the building. For example, "Chelsea Market".|
|» etags|body|string|false|ETag of the resource.|
|» floorNames|body|[string]|false|The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.|
|» kind|body|string|false|Kind of resource this is.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|coordinatesSource|CLIENT_SPECIFIED|
|coordinatesSource|RESOLVED_FROM_ADDRESS|
|coordinatesSource|SOURCE_UNSPECIFIED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Building](#schemabuilding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.buildings.delete

<a id="opIddirectory.resources.buildings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}`

Deletes a building.

<h3 id="directoryresourcesbuildingsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|buildingId|path|string|true|The id of the building to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryresourcesbuildingsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.buildings.patch

<a id="opIddirectory.resources.buildings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/buildings/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "postalCode": "string",
      "regionCode": "string",
      "sublocality": "string"
    },
    "buildingId": "string",
    "buildingName": "string",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "description": "string",
    "etags": "string",
    "floorNames": [
      "string"
    ],
    "kind": "admin#directory#resources#buildings#Building"
  }'
```

`PATCH /admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}`

Patches a building.

> Body parameter

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|buildingId|path|string|true|The id of the building to update.|
|coordinatesSource|query|string|false|Source from which Building.coordinates are derived.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Building](#schemabuilding)|false|none|
|» address|body|[BuildingAddress](#schemabuildingaddress)|false|The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.|
|» buildingId|body|string|false|Unique identifier for the building. The maximum length is 100 characters.|
|» buildingName|body|string|false|The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.|
|» coordinates|body|[BuildingCoordinates](#schemabuildingcoordinates)|false|The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.|
|» description|body|string|false|A brief description of the building. For example, "Chelsea Market".|
|» etags|body|string|false|ETag of the resource.|
|» floorNames|body|[string]|false|The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.|
|» kind|body|string|false|Kind of resource this is.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|coordinatesSource|CLIENT_SPECIFIED|
|coordinatesSource|RESOLVED_FROM_ADDRESS|
|coordinatesSource|SOURCE_UNSPECIFIED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

<h3 id="directoryresourcesbuildingspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Building](#schemabuilding)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.calendars.list

<a id="opIddirectory.resources.calendars.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/calendars`

Retrieves a list of calendar resources for an account.

<h3 id="directoryresourcescalendarslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|maxResults|query|integer|false|Maximum number of results to return.|
|orderBy|query|string|false|Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc\|desc], field [asc\|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.|
|pageToken|query|string|false|Token to specify the next page in the list.|
|query|query|string|false|String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "buildingId": "string",
      "capacity": 0,
      "etags": "string",
      "featureInstances": null,
      "floorName": "string",
      "floorSection": "string",
      "generatedResourceName": "string",
      "kind": "admin#directory#resources#calendars#CalendarResource",
      "resourceCategory": "string",
      "resourceDescription": "string",
      "resourceEmail": "string",
      "resourceId": "string",
      "resourceName": "string",
      "resourceType": "string",
      "userVisibleDescription": "string"
    }
  ],
  "kind": "admin#directory#resources#calendars#calendarResourcesList",
  "nextPageToken": "string"
}
```

<h3 id="directoryresourcescalendarslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarResources](#schemacalendarresources)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.calendars.insert

<a id="opIddirectory.resources.calendars.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildingId": "string",
    "capacity": 0,
    "etags": "string",
    "featureInstances": null,
    "floorName": "string",
    "floorSection": "string",
    "generatedResourceName": "string",
    "kind": "admin#directory#resources#calendars#CalendarResource",
    "resourceCategory": "string",
    "resourceDescription": "string",
    "resourceEmail": "string",
    "resourceId": "string",
    "resourceName": "string",
    "resourceType": "string",
    "userVisibleDescription": "string"
  }'
```

`POST /admin/directory/v1/customer/{customer}/resources/calendars`

Inserts a calendar resource.

> Body parameter

```json
{
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CalendarResource](#schemacalendarresource)|false|none|
|» buildingId|body|string|false|Unique ID for the building a resource is located in.|
|» capacity|body|integer(int32)|false|Capacity of a resource, number of seats in a room.|
|» etags|body|string|false|ETag of the resource.|
|» featureInstances|body|object|false|Instances of features for the calendar resource.|
|» floorName|body|string|false|Name of the floor a resource is located on.|
|» floorSection|body|string|false|Name of the section within a floor a resource is located in.|
|» generatedResourceName|body|string|false|The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".|
|» kind|body|string|false|The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.|
|» resourceCategory|body|string|false|The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.|
|» resourceDescription|body|string|false|Description of the resource, visible only to admins.|
|» resourceEmail|body|string|false|The read-only email for the calendar resource. Generated as part of creating a new calendar resource.|
|» resourceId|body|string|false|The unique ID for the calendar resource.|
|» resourceName|body|string|false|The name of the calendar resource. For example, "Training Room 1A".|
|» resourceType|body|string|false|The type of the calendar resource, intended for non-room resources.|
|» userVisibleDescription|body|string|false|Description of the resource, visible to users and admins.|

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
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarResource](#schemacalendarresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.calendars.get

<a id="opIddirectory.resources.calendars.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}`

Retrieves a calendar resource.

<h3 id="directoryresourcescalendarsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|calendarResourceId|path|string|true|The unique ID of the calendar resource to retrieve.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarResource](#schemacalendarresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.calendars.update

<a id="opIddirectory.resources.calendars.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildingId": "string",
    "capacity": 0,
    "etags": "string",
    "featureInstances": null,
    "floorName": "string",
    "floorSection": "string",
    "generatedResourceName": "string",
    "kind": "admin#directory#resources#calendars#CalendarResource",
    "resourceCategory": "string",
    "resourceDescription": "string",
    "resourceEmail": "string",
    "resourceId": "string",
    "resourceName": "string",
    "resourceType": "string",
    "userVisibleDescription": "string"
  }'
```

`PUT /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}`

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

> Body parameter

```json
{
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|calendarResourceId|path|string|true|The unique ID of the calendar resource to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CalendarResource](#schemacalendarresource)|false|none|
|» buildingId|body|string|false|Unique ID for the building a resource is located in.|
|» capacity|body|integer(int32)|false|Capacity of a resource, number of seats in a room.|
|» etags|body|string|false|ETag of the resource.|
|» featureInstances|body|object|false|Instances of features for the calendar resource.|
|» floorName|body|string|false|Name of the floor a resource is located on.|
|» floorSection|body|string|false|Name of the section within a floor a resource is located in.|
|» generatedResourceName|body|string|false|The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".|
|» kind|body|string|false|The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.|
|» resourceCategory|body|string|false|The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.|
|» resourceDescription|body|string|false|Description of the resource, visible only to admins.|
|» resourceEmail|body|string|false|The read-only email for the calendar resource. Generated as part of creating a new calendar resource.|
|» resourceId|body|string|false|The unique ID for the calendar resource.|
|» resourceName|body|string|false|The name of the calendar resource. For example, "Training Room 1A".|
|» resourceType|body|string|false|The type of the calendar resource, intended for non-room resources.|
|» userVisibleDescription|body|string|false|Description of the resource, visible to users and admins.|

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
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarResource](#schemacalendarresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.calendars.delete

<a id="opIddirectory.resources.calendars.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}`

Deletes a calendar resource.

<h3 id="directoryresourcescalendarsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|calendarResourceId|path|string|true|The unique ID of the calendar resource to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryresourcescalendarsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.calendars.patch

<a id="opIddirectory.resources.calendars.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/calendars/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buildingId": "string",
    "capacity": 0,
    "etags": "string",
    "featureInstances": null,
    "floorName": "string",
    "floorSection": "string",
    "generatedResourceName": "string",
    "kind": "admin#directory#resources#calendars#CalendarResource",
    "resourceCategory": "string",
    "resourceDescription": "string",
    "resourceEmail": "string",
    "resourceId": "string",
    "resourceName": "string",
    "resourceType": "string",
    "userVisibleDescription": "string"
  }'
```

`PATCH /admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}`

Patches a calendar resource.

> Body parameter

```json
{
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|calendarResourceId|path|string|true|The unique ID of the calendar resource to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CalendarResource](#schemacalendarresource)|false|none|
|» buildingId|body|string|false|Unique ID for the building a resource is located in.|
|» capacity|body|integer(int32)|false|Capacity of a resource, number of seats in a room.|
|» etags|body|string|false|ETag of the resource.|
|» featureInstances|body|object|false|Instances of features for the calendar resource.|
|» floorName|body|string|false|Name of the floor a resource is located on.|
|» floorSection|body|string|false|Name of the section within a floor a resource is located in.|
|» generatedResourceName|body|string|false|The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".|
|» kind|body|string|false|The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.|
|» resourceCategory|body|string|false|The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.|
|» resourceDescription|body|string|false|Description of the resource, visible only to admins.|
|» resourceEmail|body|string|false|The read-only email for the calendar resource. Generated as part of creating a new calendar resource.|
|» resourceId|body|string|false|The unique ID for the calendar resource.|
|» resourceName|body|string|false|The name of the calendar resource. For example, "Training Room 1A".|
|» resourceType|body|string|false|The type of the calendar resource, intended for non-room resources.|
|» userVisibleDescription|body|string|false|Description of the resource, visible to users and admins.|

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
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

<h3 id="directoryresourcescalendarspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CalendarResource](#schemacalendarresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.features.list

<a id="opIddirectory.resources.features.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/features`

Retrieves a list of features for an account.

<h3 id="directoryresourcesfeatureslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|maxResults|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|Token to specify the next page in the list.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "features": [
    {
      "etags": "string",
      "kind": "admin#directory#resources#features#Feature",
      "name": "string"
    }
  ],
  "kind": "admin#directory#resources#features#featuresList",
  "nextPageToken": "string"
}
```

<h3 id="directoryresourcesfeatureslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Features](#schemafeatures)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.features.insert

<a id="opIddirectory.resources.features.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etags": "string",
    "kind": "admin#directory#resources#features#Feature",
    "name": "string"
  }'
```

`POST /admin/directory/v1/customer/{customer}/resources/features`

Inserts a feature.

> Body parameter

```json
{
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Feature](#schemafeature)|false|none|
|» etags|body|string|false|ETag of the resource.|
|» kind|body|string|false|Kind of resource this is.|
|» name|body|string|false|The name of the feature.|

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
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Feature](#schemafeature)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.features.get

<a id="opIddirectory.resources.features.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/resources/features/{featureKey}`

Retrieves a feature.

<h3 id="directoryresourcesfeaturesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|featureKey|path|string|true|The unique ID of the feature to retrieve.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Feature](#schemafeature)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly )
</aside>

## directory.resources.features.update

<a id="opIddirectory.resources.features.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etags": "string",
    "kind": "admin#directory#resources#features#Feature",
    "name": "string"
  }'
```

`PUT /admin/directory/v1/customer/{customer}/resources/features/{featureKey}`

Updates a feature.

> Body parameter

```json
{
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|featureKey|path|string|true|The unique ID of the feature to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Feature](#schemafeature)|false|none|
|» etags|body|string|false|ETag of the resource.|
|» kind|body|string|false|Kind of resource this is.|
|» name|body|string|false|The name of the feature.|

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
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Feature](#schemafeature)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.features.delete

<a id="opIddirectory.resources.features.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/resources/features/{featureKey}`

Deletes a feature.

<h3 id="directoryresourcesfeaturesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|featureKey|path|string|true|The unique ID of the feature to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryresourcesfeaturesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.features.patch

<a id="opIddirectory.resources.features.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etags": "string",
    "kind": "admin#directory#resources#features#Feature",
    "name": "string"
  }'
```

`PATCH /admin/directory/v1/customer/{customer}/resources/features/{featureKey}`

Patches a feature.

> Body parameter

```json
{
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|featureKey|path|string|true|The unique ID of the feature to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Feature](#schemafeature)|false|none|
|» etags|body|string|false|ETag of the resource.|
|» kind|body|string|false|Kind of resource this is.|
|» name|body|string|false|The name of the feature.|

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
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

<h3 id="directoryresourcesfeaturespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Feature](#schemafeature)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

## directory.resources.features.rename

<a id="opIddirectory.resources.features.rename"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/resources/features/string/rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newName": "string"
  }'
```

`POST /admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename`

Renames a feature.

> Body parameter

```json
{
  "newName": "string"
}
```

<h3 id="directoryresourcesfeaturesrename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.|
|oldName|path|string|true|The unique ID of the feature to rename.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[FeatureRename](#schemafeaturerename)|false|none|
|» newName|body|string|false|New name of the feature.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directoryresourcesfeaturesrename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.resource.calendar )
</aside>

<h1 id="admin-sdk-api-roleassignments">roleAssignments</h1>

## directory.roleAssignments.list

<a id="opIddirectory.roleAssignments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roleassignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/roleassignments`

Retrieves a paginated list of all roleAssignments.

<h3 id="directoryroleassignmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|includeIndirectRoleAssignments|query|boolean|false|When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.|
|maxResults|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|Token to specify the next page in the list.|
|roleId|query|string|false|Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.|
|userKey|query|string|false|The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "assignedTo": "string",
      "assigneeType": "user",
      "etag": "string",
      "kind": "admin#directory#roleAssignment",
      "orgUnitId": "string",
      "roleAssignmentId": "string",
      "roleId": "string",
      "scopeType": "string"
    }
  ],
  "kind": "admin#directory#roleAssignments",
  "nextPageToken": "string"
}
```

<h3 id="directoryroleassignmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RoleAssignments](#schemaroleassignments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly )
</aside>

## directory.roleAssignments.insert

<a id="opIddirectory.roleAssignments.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roleassignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assignedTo": "string",
    "etag": "string",
    "kind": "admin#directory#roleAssignment",
    "orgUnitId": "string",
    "roleAssignmentId": "string",
    "roleId": "string",
    "scopeType": "string"
  }'
```

`POST /admin/directory/v1/customer/{customer}/roleassignments`

Creates a role assignment.

> Body parameter

```json
{
  "assignedTo": "string",
  "etag": "string",
  "kind": "admin#directory#roleAssignment",
  "orgUnitId": "string",
  "roleAssignmentId": "string",
  "roleId": "string",
  "scopeType": "string"
}
```

<h3 id="directoryroleassignmentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[RoleAssignment](#schemaroleassignment)|false|none|
|» assignedTo|body|string|false|The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).|
|» etag|body|string|false|ETag of the resource.|
|» kind|body|string|false|The type of the API resource. This is always `admin#directory#roleAssignment`.|
|» orgUnitId|body|string|false|If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.|
|» roleAssignmentId|body|string(int64)|false|ID of this roleAssignment.|
|» roleId|body|string(int64)|false|The ID of the role that is assigned.|
|» scopeType|body|string|false|The scope in which this role is assigned.|

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
  "assignedTo": "string",
  "assigneeType": "user",
  "etag": "string",
  "kind": "admin#directory#roleAssignment",
  "orgUnitId": "string",
  "roleAssignmentId": "string",
  "roleId": "string",
  "scopeType": "string"
}
```

<h3 id="directoryroleassignmentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RoleAssignment](#schemaroleassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

## directory.roleAssignments.get

<a id="opIddirectory.roleAssignments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roleassignments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}`

Retrieves a role assignment.

<h3 id="directoryroleassignmentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|roleAssignmentId|path|string|true|Immutable ID of the role assignment.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "assignedTo": "string",
  "assigneeType": "user",
  "etag": "string",
  "kind": "admin#directory#roleAssignment",
  "orgUnitId": "string",
  "roleAssignmentId": "string",
  "roleId": "string",
  "scopeType": "string"
}
```

<h3 id="directoryroleassignmentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RoleAssignment](#schemaroleassignment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly )
</aside>

## directory.roleAssignments.delete

<a id="opIddirectory.roleAssignments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roleassignments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}`

Deletes a role assignment.

<h3 id="directoryroleassignmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|roleAssignmentId|path|string|true|Immutable ID of the role assignment.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryroleassignmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

<h1 id="admin-sdk-api-roles">roles</h1>

## directory.roles.list

<a id="opIddirectory.roles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/roles`

Retrieves a paginated list of all the roles in a domain.

<h3 id="directoryroleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|maxResults|query|integer|false|Maximum number of results to return.|
|pageToken|query|string|false|Token to specify the next page in the list.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "isSuperAdminRole": true,
      "isSystemRole": true,
      "kind": "admin#directory#role",
      "roleDescription": "string",
      "roleId": "string",
      "roleName": "string",
      "rolePrivileges": [
        {
          "privilegeName": "string",
          "serviceId": "string"
        }
      ]
    }
  ],
  "kind": "admin#directory#roles",
  "nextPageToken": "string"
}
```

<h3 id="directoryroleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Roles](#schemaroles)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly )
</aside>

## directory.roles.insert

<a id="opIddirectory.roles.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "isSuperAdminRole": true,
    "isSystemRole": true,
    "kind": "admin#directory#role",
    "roleDescription": "string",
    "roleId": "string",
    "roleName": "string",
    "rolePrivileges": [
      {
        "privilegeName": "string",
        "serviceId": "string"
      }
    ]
  }'
```

`POST /admin/directory/v1/customer/{customer}/roles`

Creates a role.

> Body parameter

```json
{
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Role](#schemarole)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» isSuperAdminRole|body|boolean|false|Returns `true` if the role is a super admin role.|
|» isSystemRole|body|boolean|false|Returns `true` if this is a pre-defined system role.|
|» kind|body|string|false|The type of the API resource. This is always `admin#directory#role`.|
|» roleDescription|body|string|false|A short description of the role.|
|» roleId|body|string(int64)|false|ID of the role.|
|» roleName|body|string|false|Name of the role.|
|» rolePrivileges|body|[object]|false|The set of privileges that are granted to this role.|
|» » privilegeName|body|string|false|The name of the privilege.|
|» » serviceId|body|string|false|The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).|

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
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

## directory.roles.get

<a id="opIddirectory.roles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customer}/roles/{roleId}`

Retrieves a role.

<h3 id="directoryrolesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|roleId|path|string|true|Immutable ID of the role.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly )
</aside>

## directory.roles.update

<a id="opIddirectory.roles.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "isSuperAdminRole": true,
    "isSystemRole": true,
    "kind": "admin#directory#role",
    "roleDescription": "string",
    "roleId": "string",
    "roleName": "string",
    "rolePrivileges": [
      {
        "privilegeName": "string",
        "serviceId": "string"
      }
    ]
  }'
```

`PUT /admin/directory/v1/customer/{customer}/roles/{roleId}`

Updates a role.

> Body parameter

```json
{
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|roleId|path|string|true|Immutable ID of the role.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Role](#schemarole)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» isSuperAdminRole|body|boolean|false|Returns `true` if the role is a super admin role.|
|» isSystemRole|body|boolean|false|Returns `true` if this is a pre-defined system role.|
|» kind|body|string|false|The type of the API resource. This is always `admin#directory#role`.|
|» roleDescription|body|string|false|A short description of the role.|
|» roleId|body|string(int64)|false|ID of the role.|
|» roleName|body|string|false|Name of the role.|
|» rolePrivileges|body|[object]|false|The set of privileges that are granted to this role.|
|» » privilegeName|body|string|false|The name of the privilege.|
|» » serviceId|body|string|false|The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).|

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
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

## directory.roles.delete

<a id="opIddirectory.roles.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customer}/roles/{roleId}`

Deletes a role.

<h3 id="directoryrolesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|roleId|path|string|true|Immutable ID of the role.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryrolesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

## directory.roles.patch

<a id="opIddirectory.roles.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/roles/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "isSuperAdminRole": true,
    "isSystemRole": true,
    "kind": "admin#directory#role",
    "roleDescription": "string",
    "roleId": "string",
    "roleName": "string",
    "rolePrivileges": [
      {
        "privilegeName": "string",
        "serviceId": "string"
      }
    ]
  }'
```

`PATCH /admin/directory/v1/customer/{customer}/roles/{roleId}`

Patches a role.

> Body parameter

```json
{
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Immutable ID of the Google Workspace account.|
|roleId|path|string|true|Immutable ID of the role.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Role](#schemarole)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» isSuperAdminRole|body|boolean|false|Returns `true` if the role is a super admin role.|
|» isSystemRole|body|boolean|false|Returns `true` if this is a pre-defined system role.|
|» kind|body|string|false|The type of the API resource. This is always `admin#directory#role`.|
|» roleDescription|body|string|false|A short description of the role.|
|» roleId|body|string(int64)|false|ID of the role.|
|» roleName|body|string|false|Name of the role.|
|» rolePrivileges|body|[object]|false|The set of privileges that are granted to this role.|
|» » privilegeName|body|string|false|The name of the privilege.|
|» » serviceId|body|string|false|The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).|

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
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

<h3 id="directoryrolespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Role](#schemarole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.rolemanagement )
</aside>

<h1 id="admin-sdk-api-schemas">schemas</h1>

## directory.schemas.list

<a id="opIddirectory.schemas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/schemas`

Retrieves all schemas for a customer.

<h3 id="directoryschemaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "kind": "admin#directory#schemas",
  "schemas": [
    {
      "displayName": "string",
      "etag": "string",
      "fields": [
        {
          "displayName": "string",
          "etag": "string",
          "fieldId": "string",
          "fieldName": "string",
          "fieldType": "string",
          "indexed": true,
          "kind": "admin#directory#schema#fieldspec",
          "multiValued": true,
          "numericIndexingSpec": {
            "maxValue": 0,
            "minValue": 0
          },
          "readAccessType": "ALL_DOMAIN_USERS"
        }
      ],
      "kind": "admin#directory#schema",
      "schemaId": "string",
      "schemaName": "string"
    }
  ]
}
```

<h3 id="directoryschemaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Schemas](#schemaschemas)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema.readonly )
</aside>

## directory.schemas.insert

<a id="opIddirectory.schemas.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "etag": "string",
    "fields": [
      {
        "displayName": "string",
        "etag": "string",
        "fieldId": "string",
        "fieldName": "string",
        "fieldType": "string",
        "indexed": true,
        "kind": "admin#directory#schema#fieldspec",
        "multiValued": true,
        "numericIndexingSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "readAccessType": "ALL_DOMAIN_USERS"
      }
    ],
    "kind": "admin#directory#schema",
    "schemaId": "string",
    "schemaName": "string"
  }'
```

`POST /admin/directory/v1/customer/{customerId}/schemas`

Creates a schema.

> Body parameter

```json
{
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemasinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable ID of the Google Workspace account.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Schema](#schemaschema)|false|none|
|» displayName|body|string|false|Display name for the schema.|
|» etag|body|string|false|The ETag of the resource.|
|» fields|body|[[SchemaFieldSpec](#schemaschemafieldspec)]|false|A list of fields in the schema.|
|» kind|body|string|false|Kind of resource this is.|
|» schemaId|body|string|false|The unique identifier of the schema (Read-only)|
|» schemaName|body|string|false|The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.|

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
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemasinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Schema](#schemaschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema )
</aside>

## directory.schemas.get

<a id="opIddirectory.schemas.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

Retrieves a schema.

<h3 id="directoryschemasget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|schemaKey|path|string|true|Name or immutable ID of the schema.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemasget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Schema](#schemaschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema.readonly )
</aside>

## directory.schemas.update

<a id="opIddirectory.schemas.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "etag": "string",
    "fields": [
      {
        "displayName": "string",
        "etag": "string",
        "fieldId": "string",
        "fieldName": "string",
        "fieldType": "string",
        "indexed": true,
        "kind": "admin#directory#schema#fieldspec",
        "multiValued": true,
        "numericIndexingSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "readAccessType": "ALL_DOMAIN_USERS"
      }
    ],
    "kind": "admin#directory#schema",
    "schemaId": "string",
    "schemaName": "string"
  }'
```

`PUT /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

Updates a schema.

> Body parameter

```json
{
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemasupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable ID of the Google Workspace account.|
|schemaKey|path|string|true|Name or immutable ID of the schema.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Schema](#schemaschema)|false|none|
|» displayName|body|string|false|Display name for the schema.|
|» etag|body|string|false|The ETag of the resource.|
|» fields|body|[[SchemaFieldSpec](#schemaschemafieldspec)]|false|A list of fields in the schema.|
|» kind|body|string|false|Kind of resource this is.|
|» schemaId|body|string|false|The unique identifier of the schema (Read-only)|
|» schemaName|body|string|false|The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.|

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
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemasupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Schema](#schemaschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema )
</aside>

## directory.schemas.delete

<a id="opIddirectory.schemas.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

Deletes a schema.

<h3 id="directoryschemasdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable ID of the Google Workspace account.|
|schemaKey|path|string|true|Name or immutable ID of the schema.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryschemasdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema )
</aside>

## directory.schemas.patch

<a id="opIddirectory.schemas.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/customer/string/schemas/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "etag": "string",
    "fields": [
      {
        "displayName": "string",
        "etag": "string",
        "fieldId": "string",
        "fieldName": "string",
        "fieldType": "string",
        "indexed": true,
        "kind": "admin#directory#schema#fieldspec",
        "multiValued": true,
        "numericIndexingSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "readAccessType": "ALL_DOMAIN_USERS"
      }
    ],
    "kind": "admin#directory#schema",
    "schemaId": "string",
    "schemaName": "string"
  }'
```

`PATCH /admin/directory/v1/customer/{customerId}/schemas/{schemaKey}`

Patches a schema.

> Body parameter

```json
{
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemaspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|Immutable ID of the Google Workspace account.|
|schemaKey|path|string|true|Name or immutable ID of the schema.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Schema](#schemaschema)|false|none|
|» displayName|body|string|false|Display name for the schema.|
|» etag|body|string|false|The ETag of the resource.|
|» fields|body|[[SchemaFieldSpec](#schemaschemafieldspec)]|false|A list of fields in the schema.|
|» kind|body|string|false|Kind of resource this is.|
|» schemaId|body|string|false|The unique identifier of the schema (Read-only)|
|» schemaName|body|string|false|The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.|

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
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

<h3 id="directoryschemaspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Schema](#schemaschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.userschema )
</aside>

<h1 id="admin-sdk-api-tokens">tokens</h1>

## directory.tokens.list

<a id="opIddirectory.tokens.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/tokens`

Returns the set of tokens specified user has issued to 3rd party applications.

<h3 id="directorytokenslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "anonymous": true,
      "clientId": "string",
      "displayText": "string",
      "etag": "string",
      "kind": "admin#directory#token",
      "nativeApp": true,
      "scopes": [
        "string"
      ],
      "userKey": "string"
    }
  ],
  "kind": "admin#directory#tokenList"
}
```

<h3 id="directorytokenslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tokens](#schematokens)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.tokens.get

<a id="opIddirectory.tokens.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/tokens/{clientId}`

Gets information about an access token issued by a user.

<h3 id="directorytokensget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|clientId|path|string|true|The Client ID of the application the token is issued to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "anonymous": true,
  "clientId": "string",
  "displayText": "string",
  "etag": "string",
  "kind": "admin#directory#token",
  "nativeApp": true,
  "scopes": [
    "string"
  ],
  "userKey": "string"
}
```

<h3 id="directorytokensget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.tokens.delete

<a id="opIddirectory.tokens.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/tokens/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/users/{userKey}/tokens/{clientId}`

Deletes all access tokens issued by a user for an application.

<h3 id="directorytokensdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|clientId|path|string|true|The Client ID of the application the token is issued to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorytokensdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

<h1 id="admin-sdk-api-twostepverification">twoStepVerification</h1>

## directory.twoStepVerification.turnOff

<a id="opIddirectory.twoStepVerification.turnOff"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/twoStepVerification/turnOff \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/directory/v1/users/{userKey}/twoStepVerification/turnOff`

Turns off 2-Step Verification for user.

<h3 id="directorytwostepverificationturnoff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directorytwostepverificationturnoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

<h1 id="admin-sdk-api-users">users</h1>

## directory.users.list

<a id="opIddirectory.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users`

Retrieves a paginated list of either deleted users or all users in a domain.

<h3 id="directoryuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customFieldMask|query|string|false|A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.|
|customer|query|string|false|The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.|
|domain|query|string|false|The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.|
|event|query|string|false|Event on which subscription is intended (if subscribing)|
|maxResults|query|integer|false|Maximum number of results to return.|
|orderBy|query|string|false|Property to use for sorting results.|
|pageToken|query|string|false|Token to specify next page in the list|
|projection|query|string|false|What subset of fields to fetch for this user.|
|query|query|string|false|Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).|
|showDeleted|query|string|false|If set to `true`, retrieves the list of deleted users. (Default: `false`)|
|sortOrder|query|string|false|Whether to return results in ascending or descending order, ignoring case.|
|viewType|query|string|false|Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|event|add|
|event|delete|
|event|makeAdmin|
|event|undelete|
|event|update|
|orderBy|email|
|orderBy|familyName|
|orderBy|givenName|
|projection|basic|
|projection|custom|
|projection|full|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|viewType|admin_view|
|viewType|domain_public|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "kind": "admin#directory#users",
  "nextPageToken": "string",
  "trigger_event": "string",
  "users": [
    {
      "addresses": null,
      "agreedToTerms": true,
      "aliases": [
        "string"
      ],
      "archived": true,
      "changePasswordAtNextLogin": true,
      "creationTime": "1970-01-01T00:00:00Z",
      "customSchemas": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "customerId": "string",
      "deletionTime": "1970-01-01T00:00:00Z",
      "emails": null,
      "etag": "string",
      "externalIds": null,
      "gender": null,
      "hashFunction": "string",
      "id": "string",
      "ims": null,
      "includeInGlobalAddressList": true,
      "ipWhitelisted": true,
      "isAdmin": true,
      "isDelegatedAdmin": true,
      "isEnforcedIn2Sv": true,
      "isEnrolledIn2Sv": true,
      "isMailboxSetup": true,
      "keywords": null,
      "kind": "admin#directory#user",
      "languages": null,
      "lastLoginTime": "1970-01-01T00:00:00Z",
      "locations": null,
      "name": {
        "displayName": "string",
        "familyName": "string",
        "fullName": "string",
        "givenName": "string"
      },
      "nonEditableAliases": [
        "string"
      ],
      "notes": null,
      "orgUnitPath": "string",
      "organizations": null,
      "password": "string",
      "phones": null,
      "posixAccounts": null,
      "primaryEmail": "string",
      "recoveryEmail": "string",
      "recoveryPhone": "string",
      "relations": null,
      "sshPublicKeys": null,
      "suspended": true,
      "suspensionReason": "string",
      "thumbnailPhotoEtag": "string",
      "thumbnailPhotoUrl": "string",
      "websites": null
    }
  ]
}
```

<h3 id="directoryuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Users](#schemausers)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## directory.users.insert

<a id="opIddirectory.users.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addresses": null,
    "archived": true,
    "changePasswordAtNextLogin": true,
    "customSchemas": {
      "property1": {
        "property1": null,
        "property2": null
      },
      "property2": {
        "property1": null,
        "property2": null
      }
    },
    "emails": null,
    "externalIds": null,
    "gender": null,
    "hashFunction": "string",
    "id": "string",
    "ims": null,
    "includeInGlobalAddressList": true,
    "ipWhitelisted": true,
    "keywords": null,
    "languages": null,
    "locations": null,
    "name": {
      "displayName": "string",
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "notes": null,
    "orgUnitPath": "string",
    "organizations": null,
    "password": "string",
    "phones": null,
    "posixAccounts": null,
    "primaryEmail": "string",
    "recoveryEmail": "string",
    "recoveryPhone": "string",
    "relations": null,
    "sshPublicKeys": null,
    "suspended": true,
    "websites": null
  }'
```

`POST /admin/directory/v1/users`

Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case.

> Body parameter

```json
{
  "addresses": null,
  "archived": true,
  "changePasswordAtNextLogin": true,
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "emails": null,
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "keywords": null,
  "languages": null,
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "websites": null
}
```

<h3 id="directoryusersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resolveConflictAccount|query|boolean|false|Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» addresses|body|object|false|The list of the user's addresses. The maximum allowed data size for this field is 10KB.|
|» archived|body|boolean|false|Indicates if user is archived.|
|» changePasswordAtNextLogin|body|boolean|false|Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).|
|» customSchemas|body|object|false|Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.|
|» » **additionalProperties**|body|[UserCustomProperties](#schemausercustomproperties)|false|JSON template for a set of custom properties (i.e. all fields in a particular schema)|
|» emails|body|object|false|The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.|
|» externalIds|body|object|false|The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.|
|» gender|body|object|false|The user's gender. The maximum allowed data size for this field is 1KB.|
|» hashFunction|body|string|false|Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.|
|» id|body|string|false|The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.|
|» ims|body|object|false|The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.|
|» includeInGlobalAddressList|body|boolean|false|Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).|
|» ipWhitelisted|body|boolean|false|If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.|
|» keywords|body|object|false|The list of the user's keywords. The maximum allowed data size for this field is 1KB.|
|» languages|body|object|false|The user's languages. The maximum allowed data size for this field is 1KB.|
|» locations|body|object|false|The user's locations. The maximum allowed data size for this field is 10KB.|
|» name|body|[UserName](#schemausername)|false|Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.|
|» notes|body|object|false|Notes for the user.|
|» orgUnitPath|body|string|false|The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).|
|» organizations|body|object|false|The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.|
|» password|body|string|false|User's password|
|» phones|body|object|false|The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.|
|» posixAccounts|body|object|false|The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.|
|» primaryEmail|body|string|false|The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.|
|» recoveryEmail|body|string|false|Recovery email of the user.|
|» recoveryPhone|body|string|false|Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.|
|» relations|body|object|false|The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.|
|» sshPublicKeys|body|object|false|A list of SSH public keys.|
|» suspended|body|boolean|false|Indicates if user is suspended.|
|» websites|body|object|false|The user's websites. The maximum allowed data size for this field is 2KB.|

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
  "addresses": null,
  "agreedToTerms": true,
  "aliases": [
    "string"
  ],
  "archived": true,
  "changePasswordAtNextLogin": true,
  "creationTime": "1970-01-01T00:00:00Z",
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "customerId": "string",
  "deletionTime": "1970-01-01T00:00:00Z",
  "emails": null,
  "etag": "string",
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "isAdmin": true,
  "isDelegatedAdmin": true,
  "isEnforcedIn2Sv": true,
  "isEnrolledIn2Sv": true,
  "isMailboxSetup": true,
  "keywords": null,
  "kind": "admin#directory#user",
  "languages": null,
  "lastLoginTime": "1970-01-01T00:00:00Z",
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "nonEditableAliases": [
    "string"
  ],
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "suspensionReason": "string",
  "thumbnailPhotoEtag": "string",
  "thumbnailPhotoUrl": "string",
  "websites": null
}
```

<h3 id="directoryusersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.watch

<a id="opIddirectory.users.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /admin/directory/v1/users/watch`

Watches for changes in users list.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="directoryuserswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customFieldMask|query|string|false|Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.|
|customer|query|string|false|Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.|
|domain|query|string|false|Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."|
|event|query|string|false|Events to watch for.|
|maxResults|query|integer|false|Maximum number of results to return.|
|orderBy|query|string|false|Column to use for sorting results|
|pageToken|query|string|false|Token to specify next page in the list|
|projection|query|string|false|What subset of fields to fetch for this user.|
|query|query|string|false|Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users|
|showDeleted|query|string|false|If set to true, retrieves the list of deleted users. (Default: false)|
|sortOrder|query|string|false|Whether to return results in ascending or descending order.|
|viewType|query|string|false|Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event|add|
|event|delete|
|event|makeAdmin|
|event|undelete|
|event|update|
|orderBy|email|
|orderBy|familyName|
|orderBy|givenName|
|projection|basic|
|projection|custom|
|projection|full|
|sortOrder|ASCENDING|
|sortOrder|DESCENDING|
|viewType|admin_view|
|viewType|domain_public|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="directoryuserswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## directory.users.get

<a id="opIddirectory.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}`

Retrieves a user.

<h3 id="directoryusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|customFieldMask|query|string|false|A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.|
|projection|query|string|false|What subset of fields to fetch for this user.|
|viewType|query|string|false|Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|projection|basic|
|projection|custom|
|projection|full|
|viewType|admin_view|
|viewType|domain_public|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "addresses": null,
  "agreedToTerms": true,
  "aliases": [
    "string"
  ],
  "archived": true,
  "changePasswordAtNextLogin": true,
  "creationTime": "1970-01-01T00:00:00Z",
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "customerId": "string",
  "deletionTime": "1970-01-01T00:00:00Z",
  "emails": null,
  "etag": "string",
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "isAdmin": true,
  "isDelegatedAdmin": true,
  "isEnforcedIn2Sv": true,
  "isEnrolledIn2Sv": true,
  "isMailboxSetup": true,
  "keywords": null,
  "kind": "admin#directory#user",
  "languages": null,
  "lastLoginTime": "1970-01-01T00:00:00Z",
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "nonEditableAliases": [
    "string"
  ],
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "suspensionReason": "string",
  "thumbnailPhotoEtag": "string",
  "thumbnailPhotoUrl": "string",
  "websites": null
}
```

<h3 id="directoryusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly )
</aside>

## directory.users.update

<a id="opIddirectory.users.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addresses": null,
    "archived": true,
    "changePasswordAtNextLogin": true,
    "customSchemas": {
      "property1": {
        "property1": null,
        "property2": null
      },
      "property2": {
        "property1": null,
        "property2": null
      }
    },
    "emails": null,
    "externalIds": null,
    "gender": null,
    "hashFunction": "string",
    "id": "string",
    "ims": null,
    "includeInGlobalAddressList": true,
    "ipWhitelisted": true,
    "keywords": null,
    "languages": null,
    "locations": null,
    "name": {
      "displayName": "string",
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "notes": null,
    "orgUnitPath": "string",
    "organizations": null,
    "password": "string",
    "phones": null,
    "posixAccounts": null,
    "primaryEmail": "string",
    "recoveryEmail": "string",
    "recoveryPhone": "string",
    "relations": null,
    "sshPublicKeys": null,
    "suspended": true,
    "websites": null
  }'
```

`PUT /admin/directory/v1/users/{userKey}`

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.

> Body parameter

```json
{
  "addresses": null,
  "archived": true,
  "changePasswordAtNextLogin": true,
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "emails": null,
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "keywords": null,
  "languages": null,
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "websites": null
}
```

<h3 id="directoryusersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» addresses|body|object|false|The list of the user's addresses. The maximum allowed data size for this field is 10KB.|
|» archived|body|boolean|false|Indicates if user is archived.|
|» changePasswordAtNextLogin|body|boolean|false|Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).|
|» customSchemas|body|object|false|Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.|
|» » **additionalProperties**|body|[UserCustomProperties](#schemausercustomproperties)|false|JSON template for a set of custom properties (i.e. all fields in a particular schema)|
|» emails|body|object|false|The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.|
|» externalIds|body|object|false|The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.|
|» gender|body|object|false|The user's gender. The maximum allowed data size for this field is 1KB.|
|» hashFunction|body|string|false|Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.|
|» id|body|string|false|The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.|
|» ims|body|object|false|The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.|
|» includeInGlobalAddressList|body|boolean|false|Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).|
|» ipWhitelisted|body|boolean|false|If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.|
|» keywords|body|object|false|The list of the user's keywords. The maximum allowed data size for this field is 1KB.|
|» languages|body|object|false|The user's languages. The maximum allowed data size for this field is 1KB.|
|» locations|body|object|false|The user's locations. The maximum allowed data size for this field is 10KB.|
|» name|body|[UserName](#schemausername)|false|Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.|
|» notes|body|object|false|Notes for the user.|
|» orgUnitPath|body|string|false|The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).|
|» organizations|body|object|false|The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.|
|» password|body|string|false|User's password|
|» phones|body|object|false|The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.|
|» posixAccounts|body|object|false|The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.|
|» primaryEmail|body|string|false|The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.|
|» recoveryEmail|body|string|false|Recovery email of the user.|
|» recoveryPhone|body|string|false|Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.|
|» relations|body|object|false|The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.|
|» sshPublicKeys|body|object|false|A list of SSH public keys.|
|» suspended|body|boolean|false|Indicates if user is suspended.|
|» websites|body|object|false|The user's websites. The maximum allowed data size for this field is 2KB.|

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
  "addresses": null,
  "agreedToTerms": true,
  "aliases": [
    "string"
  ],
  "archived": true,
  "changePasswordAtNextLogin": true,
  "creationTime": "1970-01-01T00:00:00Z",
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "customerId": "string",
  "deletionTime": "1970-01-01T00:00:00Z",
  "emails": null,
  "etag": "string",
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "isAdmin": true,
  "isDelegatedAdmin": true,
  "isEnforcedIn2Sv": true,
  "isEnrolledIn2Sv": true,
  "isMailboxSetup": true,
  "keywords": null,
  "kind": "admin#directory#user",
  "languages": null,
  "lastLoginTime": "1970-01-01T00:00:00Z",
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "nonEditableAliases": [
    "string"
  ],
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "suspensionReason": "string",
  "thumbnailPhotoEtag": "string",
  "thumbnailPhotoUrl": "string",
  "websites": null
}
```

<h3 id="directoryusersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.delete

<a id="opIddirectory.users.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/users/{userKey}`

Deletes a user.

<h3 id="directoryusersdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryusersdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.patch

<a id="opIddirectory.users.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addresses": null,
    "archived": true,
    "changePasswordAtNextLogin": true,
    "customSchemas": {
      "property1": {
        "property1": null,
        "property2": null
      },
      "property2": {
        "property1": null,
        "property2": null
      }
    },
    "emails": null,
    "externalIds": null,
    "gender": null,
    "hashFunction": "string",
    "id": "string",
    "ims": null,
    "includeInGlobalAddressList": true,
    "ipWhitelisted": true,
    "keywords": null,
    "languages": null,
    "locations": null,
    "name": {
      "displayName": "string",
      "familyName": "string",
      "fullName": "string",
      "givenName": "string"
    },
    "notes": null,
    "orgUnitPath": "string",
    "organizations": null,
    "password": "string",
    "phones": null,
    "posixAccounts": null,
    "primaryEmail": "string",
    "recoveryEmail": "string",
    "recoveryPhone": "string",
    "relations": null,
    "sshPublicKeys": null,
    "suspended": true,
    "websites": null
  }'
```

`PATCH /admin/directory/v1/users/{userKey}`

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

> Body parameter

```json
{
  "addresses": null,
  "archived": true,
  "changePasswordAtNextLogin": true,
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "emails": null,
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "keywords": null,
  "languages": null,
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "websites": null
}
```

<h3 id="directoryuserspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» addresses|body|object|false|The list of the user's addresses. The maximum allowed data size for this field is 10KB.|
|» archived|body|boolean|false|Indicates if user is archived.|
|» changePasswordAtNextLogin|body|boolean|false|Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).|
|» customSchemas|body|object|false|Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.|
|» » **additionalProperties**|body|[UserCustomProperties](#schemausercustomproperties)|false|JSON template for a set of custom properties (i.e. all fields in a particular schema)|
|» emails|body|object|false|The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.|
|» externalIds|body|object|false|The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.|
|» gender|body|object|false|The user's gender. The maximum allowed data size for this field is 1KB.|
|» hashFunction|body|string|false|Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.|
|» id|body|string|false|The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.|
|» ims|body|object|false|The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.|
|» includeInGlobalAddressList|body|boolean|false|Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).|
|» ipWhitelisted|body|boolean|false|If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.|
|» keywords|body|object|false|The list of the user's keywords. The maximum allowed data size for this field is 1KB.|
|» languages|body|object|false|The user's languages. The maximum allowed data size for this field is 1KB.|
|» locations|body|object|false|The user's locations. The maximum allowed data size for this field is 10KB.|
|» name|body|[UserName](#schemausername)|false|Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.|
|» notes|body|object|false|Notes for the user.|
|» orgUnitPath|body|string|false|The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).|
|» organizations|body|object|false|The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.|
|» password|body|string|false|User's password|
|» phones|body|object|false|The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.|
|» posixAccounts|body|object|false|The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.|
|» primaryEmail|body|string|false|The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.|
|» recoveryEmail|body|string|false|Recovery email of the user.|
|» recoveryPhone|body|string|false|Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.|
|» relations|body|object|false|The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.|
|» sshPublicKeys|body|object|false|A list of SSH public keys.|
|» suspended|body|boolean|false|Indicates if user is suspended.|
|» websites|body|object|false|The user's websites. The maximum allowed data size for this field is 2KB.|

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
  "addresses": null,
  "agreedToTerms": true,
  "aliases": [
    "string"
  ],
  "archived": true,
  "changePasswordAtNextLogin": true,
  "creationTime": "1970-01-01T00:00:00Z",
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "customerId": "string",
  "deletionTime": "1970-01-01T00:00:00Z",
  "emails": null,
  "etag": "string",
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "isAdmin": true,
  "isDelegatedAdmin": true,
  "isEnforcedIn2Sv": true,
  "isEnrolledIn2Sv": true,
  "isMailboxSetup": true,
  "keywords": null,
  "kind": "admin#directory#user",
  "languages": null,
  "lastLoginTime": "1970-01-01T00:00:00Z",
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "nonEditableAliases": [
    "string"
  ],
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "suspensionReason": "string",
  "thumbnailPhotoEtag": "string",
  "thumbnailPhotoUrl": "string",
  "websites": null
}
```

<h3 id="directoryuserspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.aliases.list

<a id="opIddirectory.users.aliases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/aliases`

Lists all aliases for a user.

<h3 id="directoryusersaliaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|event|query|string|false|Events to watch for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|event|add|
|event|delete|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "aliases": [
    null
  ],
  "etag": "string",
  "kind": "admin#directory#aliases"
}
```

<h3 id="directoryusersaliaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Aliases](#schemaaliases)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly )
</aside>

## directory.users.aliases.insert

<a id="opIddirectory.users.aliases.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alias": "string",
    "etag": "string",
    "id": "string",
    "kind": "admin#directory#alias",
    "primaryEmail": "string"
  }'
```

`POST /admin/directory/v1/users/{userKey}/aliases`

Adds an alias.

> Body parameter

```json
{
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#alias",
  "primaryEmail": "string"
}
```

<h3 id="directoryusersaliasesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Alias](#schemaalias)|false|none|
|» alias|body|string|false|none|
|» etag|body|string|false|none|
|» id|body|string|false|none|
|» kind|body|string|false|none|
|» primaryEmail|body|string|false|none|

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
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#alias",
  "primaryEmail": "string"
}
```

<h3 id="directoryusersaliasesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alias](#schemaalias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias )
</aside>

## directory.users.aliases.watch

<a id="opIddirectory.users.aliases.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/aliases/watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "string",
    "expiration": "string",
    "id": "string",
    "kind": "api#channel",
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": true,
    "resourceId": "string",
    "resourceUri": "string",
    "token": "string",
    "type": "string"
  }'
```

`POST /admin/directory/v1/users/{userKey}/aliases/watch`

Watches for changes in users list.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="directoryusersaliaseswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Email or immutable ID of the user|
|event|query|string|false|Events to watch for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event|add|
|event|delete|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<h3 id="directoryusersaliaseswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly )
</aside>

## directory.users.aliases.delete

<a id="opIddirectory.users.aliases.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/aliases/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/users/{userKey}/aliases/{alias}`

Removes an alias.

<h3 id="directoryusersaliasesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|alias|path|string|true|The alias to be removed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryusersaliasesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.alias )
</aside>

## directory.users.makeAdmin

<a id="opIddirectory.users.makeAdmin"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/makeAdmin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": true
  }'
```

`POST /admin/directory/v1/users/{userKey}/makeAdmin`

Makes a user a super administrator.

> Body parameter

```json
{
  "status": true
}
```

<h3 id="directoryusersmakeadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UserMakeAdmin](#schemausermakeadmin)|false|none|
|» status|body|boolean|false|Indicates the administrator status of the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directoryusersmakeadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.photos.get

<a id="opIddirectory.users.photos.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/photos/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/photos/thumbnail`

Retrieves the user's photo.

<h3 id="directoryusersphotosget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

<h3 id="directoryusersphotosget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPhoto](#schemauserphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user ), Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.readonly )
</aside>

## directory.users.photos.update

<a id="opIddirectory.users.photos.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/photos/thumbnail \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "height": 0,
    "id": "string",
    "kind": "admin#directory#user#photo",
    "mimeType": "string",
    "photoData": "string",
    "primaryEmail": "string",
    "width": 0
  }'
```

`PUT /admin/directory/v1/users/{userKey}/photos/thumbnail`

Adds a photo for the user.

> Body parameter

```json
{
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

<h3 id="directoryusersphotosupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UserPhoto](#schemauserphoto)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» height|body|integer(int32)|false|Height of the photo in pixels.|
|» id|body|string|false|The ID the API uses to uniquely identify the user.|
|» kind|body|string|false|The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.|
|» mimeType|body|string|false|The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.|
|» photoData|body|string(byte)|false|The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.|
|» primaryEmail|body|string|false|The user's primary email address.|
|» width|body|integer(int32)|false|Width of the photo in pixels.|

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
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

<h3 id="directoryusersphotosupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPhoto](#schemauserphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.photos.delete

<a id="opIddirectory.users.photos.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/photos/thumbnail \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/directory/v1/users/{userKey}/photos/thumbnail`

Removes the user's photo.

<h3 id="directoryusersphotosdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryusersphotosdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.photos.patch

<a id="opIddirectory.users.photos.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/photos/thumbnail \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "height": 0,
    "id": "string",
    "kind": "admin#directory#user#photo",
    "mimeType": "string",
    "photoData": "string",
    "primaryEmail": "string",
    "width": 0
  }'
```

`PATCH /admin/directory/v1/users/{userKey}/photos/thumbnail`

Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

> Body parameter

```json
{
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

<h3 id="directoryusersphotospatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UserPhoto](#schemauserphoto)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» height|body|integer(int32)|false|Height of the photo in pixels.|
|» id|body|string|false|The ID the API uses to uniquely identify the user.|
|» kind|body|string|false|The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.|
|» mimeType|body|string|false|The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.|
|» photoData|body|string(byte)|false|The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.|
|» primaryEmail|body|string|false|The user's primary email address.|
|» width|body|integer(int32)|false|Width of the photo in pixels.|

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
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

<h3 id="directoryusersphotospatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPhoto](#schemauserphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

## directory.users.signOut

<a id="opIddirectory.users.signOut"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/signOut \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/directory/v1/users/{userKey}/signOut`

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

<h3 id="directoryuserssignout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryuserssignout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.users.undelete

<a id="opIddirectory.users.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "orgUnitPath": "string"
  }'
```

`POST /admin/directory/v1/users/{userKey}/undelete`

Undeletes a deleted user.

> Body parameter

```json
{
  "orgUnitPath": "string"
}
```

<h3 id="directoryusersundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|The immutable id of the user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UserUndelete](#schemauserundelete)|false|none|
|» orgUnitPath|body|string|false|OrgUnit of User|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="directoryusersundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user )
</aside>

<h1 id="admin-sdk-api-verificationcodes">verificationCodes</h1>

## directory.verificationCodes.list

<a id="opIddirectory.verificationCodes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/verificationCodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/directory/v1/users/{userKey}/verificationCodes`

Returns the current set of valid backup verification codes for the specified user.

<h3 id="directoryverificationcodeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "kind": "admin#directory#verificationCode",
      "userId": "string",
      "verificationCode": "string"
    }
  ],
  "kind": "admin#directory#verificationCodesList"
}
```

<h3 id="directoryverificationcodeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VerificationCodes](#schemaverificationcodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.verificationCodes.generate

<a id="opIddirectory.verificationCodes.generate"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/verificationCodes/generate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/directory/v1/users/{userKey}/verificationCodes/generate`

Generates new backup verification codes for the user.

<h3 id="directoryverificationcodesgenerate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Email or immutable ID of the user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryverificationcodesgenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

## directory.verificationCodes.invalidate

<a id="opIddirectory.verificationCodes.invalidate"></a>

> Code samples

```bash
curl https://www.googleapis.com/admin/directory/v1/users/string/verificationCodes/invalidate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/directory/v1/users/{userKey}/verificationCodes/invalidate`

Invalidates the current backup verification codes for the user.

<h3 id="directoryverificationcodesinvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userKey|path|string|true|Email or immutable ID of the user|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="directoryverificationcodesinvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/admin.directory.user.security )
</aside>

# Schemas

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
{
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#alias",
  "primaryEmail": "string"
}
```

JSON template for Alias object in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|none|
|etag|string|false|none|none|
|id|string|false|none|none|
|kind|string|false|none|none|
|primaryEmail|string|false|none|none|

<h2 id="tocS_Aliases">Aliases</h2>
<!-- backwards compatibility -->
<a id="schemaaliases"></a>
<a id="schema_Aliases"></a>
<a id="tocSaliases"></a>
<a id="tocsaliases"></a>

```json
{
  "aliases": [
    null
  ],
  "etag": "string",
  "kind": "admin#directory#aliases"
}
```

JSON response template to list aliases in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[object]|false|none|none|
|etag|string|false|none|none|
|kind|string|false|none|none|

<h2 id="tocS_Asp">Asp</h2>
<!-- backwards compatibility -->
<a id="schemaasp"></a>
<a id="schema_Asp"></a>
<a id="tocSasp"></a>
<a id="tocsasp"></a>

```json
{
  "codeId": 0,
  "creationTime": "string",
  "etag": "string",
  "kind": "admin#directory#asp",
  "lastTimeUsed": "string",
  "name": "string",
  "userKey": "string"
}
```

An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeId|integer(int32)|false|none|The unique ID of the ASP.|
|creationTime|string(int64)|false|none|The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.|
|etag|string|false|none|ETag of the ASP.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#asp`.|
|lastTimeUsed|string(int64)|false|none|The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.|
|name|string|false|none|The name of the application that the user, represented by their `userId`, entered when the ASP was created.|
|userKey|string|false|none|The unique ID of the user who issued the ASP.|

<h2 id="tocS_Asps">Asps</h2>
<!-- backwards compatibility -->
<a id="schemaasps"></a>
<a id="schema_Asps"></a>
<a id="tocSasps"></a>
<a id="tocsasps"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "codeId": 0,
      "creationTime": "string",
      "etag": "string",
      "kind": "admin#directory#asp",
      "lastTimeUsed": "string",
      "name": "string",
      "userKey": "string"
    }
  ],
  "kind": "admin#directory#aspList"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[Asp](#schemaasp)]|false|none|A list of ASP resources.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#aspList`.|

<h2 id="tocS_AuxiliaryMessage">AuxiliaryMessage</h2>
<!-- backwards compatibility -->
<a id="schemaauxiliarymessage"></a>
<a id="schema_AuxiliaryMessage"></a>
<a id="tocSauxiliarymessage"></a>
<a id="tocsauxiliarymessage"></a>

```json
{
  "auxiliaryMessage": "string",
  "fieldMask": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auxiliaryMessage|string|false|none|Human readable message in English. Example: "Given printer is invalid or no longer supported."|
|fieldMask|string(google-fieldmask)|false|none|Field that this message concerns.|
|severity|string|false|none|Message severity|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|SEVERITY_INFO|
|severity|SEVERITY_WARNING|
|severity|SEVERITY_ERROR|

<h2 id="tocS_BatchChangeChromeOsDeviceStatusRequest">BatchChangeChromeOsDeviceStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchchangechromeosdevicestatusrequest"></a>
<a id="schema_BatchChangeChromeOsDeviceStatusRequest"></a>
<a id="tocSbatchchangechromeosdevicestatusrequest"></a>
<a id="tocsbatchchangechromeosdevicestatusrequest"></a>

```json
{
  "changeChromeOsDeviceStatusAction": "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED",
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceIds": [
    "string"
  ]
}
```

A request for changing the status of a batch of ChromeOS devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeChromeOsDeviceStatusAction|string|false|none|Required. The action to take on the ChromeOS device in order to change its status.|
|deprovisionReason|string|false|none|Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field.|
|deviceIds|[string]|false|none|Required. List of the IDs of the ChromeOS devices to change. Maximum 50.|

#### Enumerated Values

|Property|Value|
|---|---|
|changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED|
|changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION|
|changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE|
|changeChromeOsDeviceStatusAction|CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE|
|deprovisionReason|DEPROVISION_REASON_UNSPECIFIED|
|deprovisionReason|DEPROVISION_REASON_SAME_MODEL_REPLACEMENT|
|deprovisionReason|DEPROVISION_REASON_UPGRADE|
|deprovisionReason|DEPROVISION_REASON_DOMAIN_MOVE|
|deprovisionReason|DEPROVISION_REASON_SERVICE_EXPIRATION|
|deprovisionReason|DEPROVISION_REASON_OTHER|
|deprovisionReason|DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT|
|deprovisionReason|DEPROVISION_REASON_RETIRING_DEVICE|
|deprovisionReason|DEPROVISION_REASON_UPGRADE_TRANSFER|
|deprovisionReason|DEPROVISION_REASON_NOT_REQUIRED|
|deprovisionReason|DEPROVISION_REASON_REPAIR_CENTER|

<h2 id="tocS_BatchChangeChromeOsDeviceStatusResponse">BatchChangeChromeOsDeviceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchchangechromeosdevicestatusresponse"></a>
<a id="schema_BatchChangeChromeOsDeviceStatusResponse"></a>
<a id="tocSbatchchangechromeosdevicestatusresponse"></a>
<a id="tocsbatchchangechromeosdevicestatusresponse"></a>

```json
{
  "changeChromeOsDeviceStatusResults": [
    {
      "deviceId": "string",
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
      "response": {}
    }
  ]
}
```

The response of changing the status of a batch of ChromeOS devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeChromeOsDeviceStatusResults|[[ChangeChromeOsDeviceStatusResult](#schemachangechromeosdevicestatusresult)]|false|none|The results for each of the ChromeOS devices provided in the request.|

<h2 id="tocS_BatchCreatePrintServersRequest">BatchCreatePrintServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateprintserversrequest"></a>
<a id="schema_BatchCreatePrintServersRequest"></a>
<a id="tocSbatchcreateprintserversrequest"></a>
<a id="tocsbatchcreateprintserversrequest"></a>

```json
{
  "requests": [
    {
      "parent": "string",
      "printServer": {
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      }
    }
  ]
}
```

Request to add multiple new print servers in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreatePrintServerRequest](#schemacreateprintserverrequest)]|false|none|Required. A list of `PrintServer` resources to be created (max `50` per batch).|

<h2 id="tocS_BatchCreatePrintServersResponse">BatchCreatePrintServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateprintserversresponse"></a>
<a id="schema_BatchCreatePrintServersResponse"></a>
<a id="tocSbatchcreateprintserversresponse"></a>
<a id="tocsbatchcreateprintserversresponse"></a>

```json
{
  "failures": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printServer": {
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      },
      "printServerId": "string"
    }
  ],
  "printServers": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failures|[[PrintServerFailureInfo](#schemaprintserverfailureinfo)]|false|none|A list of create failures. `PrintServer` IDs are not populated, as print servers were not created.|
|printServers|[[PrintServer](#schemaprintserver)]|false|none|A list of successfully created print servers with their IDs populated.|

<h2 id="tocS_BatchCreatePrintersRequest">BatchCreatePrintersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateprintersrequest"></a>
<a id="schema_BatchCreatePrintersRequest"></a>
<a id="tocSbatchcreateprintersrequest"></a>
<a id="tocsbatchcreateprintersrequest"></a>

```json
{
  "requests": [
    {
      "parent": "string",
      "printer": {
        "auxiliaryMessages": [
          {
            "auxiliaryMessage": "string",
            "fieldMask": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      }
    }
  ]
}
```

Request for adding new printers in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreatePrinterRequest](#schemacreateprinterrequest)]|false|none|A list of Printers to be created. Max 50 at a time.|

<h2 id="tocS_BatchCreatePrintersResponse">BatchCreatePrintersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreateprintersresponse"></a>
<a id="schema_BatchCreatePrintersResponse"></a>
<a id="tocSbatchcreateprintersresponse"></a>
<a id="tocsbatchcreateprintersresponse"></a>

```json
{
  "failures": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printer": {
        "auxiliaryMessages": [
          {
            "auxiliaryMessage": "string",
            "fieldMask": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      },
      "printerId": "string"
    }
  ],
  "printers": [
    {
      "auxiliaryMessages": [
        {
          "auxiliaryMessage": "string",
          "fieldMask": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "makeAndModel": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string",
      "useDriverlessConfig": true
    }
  ]
}
```

Response for adding new printers in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failures|[[FailureInfo](#schemafailureinfo)]|false|none|A list of create failures. Printer IDs are not populated, as printer were not created.|
|printers|[[Printer](#schemaprinter)]|false|none|A list of successfully created printers with their IDs populated.|

<h2 id="tocS_BatchDeletePrintServersRequest">BatchDeletePrintServersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteprintserversrequest"></a>
<a id="schema_BatchDeletePrintServersRequest"></a>
<a id="tocSbatchdeleteprintserversrequest"></a>
<a id="tocsbatchdeleteprintserversrequest"></a>

```json
{
  "printServerIds": [
    "string"
  ]
}
```

Request to delete multiple existing print servers in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|printServerIds|[string]|false|none|A list of print server IDs that should be deleted (max `100` per batch).|

<h2 id="tocS_BatchDeletePrintServersResponse">BatchDeletePrintServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteprintserversresponse"></a>
<a id="schema_BatchDeletePrintServersResponse"></a>
<a id="tocSbatchdeleteprintserversresponse"></a>
<a id="tocsbatchdeleteprintserversresponse"></a>

```json
{
  "failedPrintServers": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printServer": {
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string"
      },
      "printServerId": "string"
    }
  ],
  "printServerIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedPrintServers|[[PrintServerFailureInfo](#schemaprintserverfailureinfo)]|false|none|A list of update failures.|
|printServerIds|[string]|false|none|A list of print server IDs that were successfully deleted.|

<h2 id="tocS_BatchDeletePrintersRequest">BatchDeletePrintersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteprintersrequest"></a>
<a id="schema_BatchDeletePrintersRequest"></a>
<a id="tocSbatchdeleteprintersrequest"></a>
<a id="tocsbatchdeleteprintersrequest"></a>

```json
{
  "printerIds": [
    "string"
  ]
}
```

Request for deleting existing printers in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|printerIds|[string]|false|none|A list of Printer.id that should be deleted. Max 100 at a time.|

<h2 id="tocS_BatchDeletePrintersResponse">BatchDeletePrintersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteprintersresponse"></a>
<a id="schema_BatchDeletePrintersResponse"></a>
<a id="tocSbatchdeleteprintersresponse"></a>
<a id="tocsbatchdeleteprintersresponse"></a>

```json
{
  "failedPrinters": [
    {
      "errorCode": "OK",
      "errorMessage": "string",
      "printer": {
        "auxiliaryMessages": [
          {
            "auxiliaryMessage": "string",
            "fieldMask": "string",
            "severity": "SEVERITY_UNSPECIFIED"
          }
        ],
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "id": "string",
        "makeAndModel": "string",
        "name": "string",
        "orgUnitId": "string",
        "uri": "string",
        "useDriverlessConfig": true
      },
      "printerId": "string"
    }
  ],
  "printerIds": [
    "string"
  ]
}
```

Response for deleting existing printers in batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedPrinters|[[FailureInfo](#schemafailureinfo)]|false|none|A list of update failures.|
|printerIds|[string]|false|none|A list of Printer.id that were successfully deleted.|

<h2 id="tocS_Building">Building</h2>
<!-- backwards compatibility -->
<a id="schemabuilding"></a>
<a id="schema_Building"></a>
<a id="tocSbuilding"></a>
<a id="tocsbuilding"></a>

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "postalCode": "string",
    "regionCode": "string",
    "sublocality": "string"
  },
  "buildingId": "string",
  "buildingName": "string",
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "description": "string",
  "etags": "string",
  "floorNames": [
    "string"
  ],
  "kind": "admin#directory#resources#buildings#Building"
}
```

Public API: Resources.buildings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[BuildingAddress](#schemabuildingaddress)|false|none|The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.|
|buildingId|string|false|none|Unique identifier for the building. The maximum length is 100 characters.|
|buildingName|string|false|none|The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.|
|coordinates|[BuildingCoordinates](#schemabuildingcoordinates)|false|none|The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.|
|description|string|false|none|A brief description of the building. For example, "Chelsea Market".|
|etags|string|false|none|ETag of the resource.|
|floorNames|[string]|false|none|The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.|
|kind|string|false|none|Kind of resource this is.|

<h2 id="tocS_BuildingAddress">BuildingAddress</h2>
<!-- backwards compatibility -->
<a id="schemabuildingaddress"></a>
<a id="schema_BuildingAddress"></a>
<a id="tocSbuildingaddress"></a>
<a id="tocsbuildingaddress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "postalCode": "string",
  "regionCode": "string",
  "sublocality": "string"
}
```

Public API: Resources.buildings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address.|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known).|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.|
|postalCode|string|false|none|Optional. Postal code of the address.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address.|
|sublocality|string|false|none|Optional. Sublocality of the address.|

<h2 id="tocS_BuildingCoordinates">BuildingCoordinates</h2>
<!-- backwards compatibility -->
<a id="schemabuildingcoordinates"></a>
<a id="schema_BuildingCoordinates"></a>
<a id="tocSbuildingcoordinates"></a>
<a id="tocsbuildingcoordinates"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

Public API: Resources.buildings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|Latitude in decimal degrees.|
|longitude|number(double)|false|none|Longitude in decimal degrees.|

<h2 id="tocS_Buildings">Buildings</h2>
<!-- backwards compatibility -->
<a id="schemabuildings"></a>
<a id="schema_Buildings"></a>
<a id="tocSbuildings"></a>
<a id="tocsbuildings"></a>

```json
{
  "buildings": [
    {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "postalCode": "string",
        "regionCode": "string",
        "sublocality": "string"
      },
      "buildingId": "string",
      "buildingName": "string",
      "coordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "description": "string",
      "etags": "string",
      "floorNames": [
        "string"
      ],
      "kind": "admin#directory#resources#buildings#Building"
    }
  ],
  "etag": "string",
  "kind": "admin#directory#resources#buildings#buildingsList",
  "nextPageToken": "string"
}
```

Public API: Resources.buildings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildings|[[Building](#schemabuilding)]|false|none|The Buildings in this page of results.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_CalendarResource">CalendarResource</h2>
<!-- backwards compatibility -->
<a id="schemacalendarresource"></a>
<a id="schema_CalendarResource"></a>
<a id="tocScalendarresource"></a>
<a id="tocscalendarresource"></a>

```json
{
  "buildingId": "string",
  "capacity": 0,
  "etags": "string",
  "featureInstances": null,
  "floorName": "string",
  "floorSection": "string",
  "generatedResourceName": "string",
  "kind": "admin#directory#resources#calendars#CalendarResource",
  "resourceCategory": "string",
  "resourceDescription": "string",
  "resourceEmail": "string",
  "resourceId": "string",
  "resourceName": "string",
  "resourceType": "string",
  "userVisibleDescription": "string"
}
```

Public API: Resources.calendars

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildingId|string|false|none|Unique ID for the building a resource is located in.|
|capacity|integer(int32)|false|none|Capacity of a resource, number of seats in a room.|
|etags|string|false|none|ETag of the resource.|
|featureInstances|object|false|none|Instances of features for the calendar resource.|
|floorName|string|false|none|Name of the floor a resource is located on.|
|floorSection|string|false|none|Name of the section within a floor a resource is located in.|
|generatedResourceName|string|false|none|The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".|
|kind|string|false|none|The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.|
|resourceCategory|string|false|none|The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.|
|resourceDescription|string|false|none|Description of the resource, visible only to admins.|
|resourceEmail|string|false|none|The read-only email for the calendar resource. Generated as part of creating a new calendar resource.|
|resourceId|string|false|none|The unique ID for the calendar resource.|
|resourceName|string|false|none|The name of the calendar resource. For example, "Training Room 1A".|
|resourceType|string|false|none|The type of the calendar resource, intended for non-room resources.|
|userVisibleDescription|string|false|none|Description of the resource, visible to users and admins.|

<h2 id="tocS_CalendarResources">CalendarResources</h2>
<!-- backwards compatibility -->
<a id="schemacalendarresources"></a>
<a id="schema_CalendarResources"></a>
<a id="tocScalendarresources"></a>
<a id="tocscalendarresources"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "buildingId": "string",
      "capacity": 0,
      "etags": "string",
      "featureInstances": null,
      "floorName": "string",
      "floorSection": "string",
      "generatedResourceName": "string",
      "kind": "admin#directory#resources#calendars#CalendarResource",
      "resourceCategory": "string",
      "resourceDescription": "string",
      "resourceEmail": "string",
      "resourceId": "string",
      "resourceName": "string",
      "resourceType": "string",
      "userVisibleDescription": "string"
    }
  ],
  "kind": "admin#directory#resources#calendars#calendarResourcesList",
  "nextPageToken": "string"
}
```

Public API: Resources.calendars

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[CalendarResource](#schemacalendarresource)]|false|none|The CalendarResources in this page of results.|
|kind|string|false|none|Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_ChangeChromeOsDeviceStatusResult">ChangeChromeOsDeviceStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemachangechromeosdevicestatusresult"></a>
<a id="schema_ChangeChromeOsDeviceStatusResult"></a>
<a id="tocSchangechromeosdevicestatusresult"></a>
<a id="tocschangechromeosdevicestatusresult"></a>

```json
{
  "deviceId": "string",
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
  "response": {}
}
```

The result of a single ChromeOS device for a Change state operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The unique ID of the ChromeOS device.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure.|
|response|[ChangeChromeOsDeviceStatusSucceeded](#schemachangechromeosdevicestatussucceeded)|false|none|The device could change its status successfully.|

<h2 id="tocS_ChangeChromeOsDeviceStatusSucceeded">ChangeChromeOsDeviceStatusSucceeded</h2>
<!-- backwards compatibility -->
<a id="schemachangechromeosdevicestatussucceeded"></a>
<a id="schema_ChangeChromeOsDeviceStatusSucceeded"></a>
<a id="tocSchangechromeosdevicestatussucceeded"></a>
<a id="tocschangechromeosdevicestatussucceeded"></a>

```json
{}
```

Response for a successful ChromeOS device status change.

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

An notification channel used to watch for resource changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address where notifications are delivered for this channel.|
|expiration|string(int64)|false|none|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|id|string|false|none|A UUID or similar unique string that identifies this channel.|
|kind|string|false|none|Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.|
|params|object|false|none|Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.|
|payload|boolean|false|none|A Boolean value to indicate whether payload is wanted. Optional.|
|resourceId|string|false|none|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|resourceUri|string|false|none|A version-specific identifier for the watched resource.|
|token|string|false|none|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|type|string|false|none|The type of delivery mechanism used for this channel.|

<h2 id="tocS_ChromeOsDevice">ChromeOsDevice</h2>
<!-- backwards compatibility -->
<a id="schemachromeosdevice"></a>
<a id="schema_ChromeOsDevice"></a>
<a id="tocSchromeosdevice"></a>
<a id="tocschromeosdevice"></a>

```json
{
  "activeTimeRanges": [
    {
      "activeTime": 0,
      "date": "1970-01-01"
    }
  ],
  "annotatedAssetId": "string",
  "annotatedLocation": "string",
  "annotatedUser": "string",
  "autoUpdateExpiration": "string",
  "bootMode": "string",
  "cpuInfo": [
    {
      "architecture": "string",
      "logicalCpus": [
        {
          "cStates": [
            {
              "displayName": "string",
              "sessionDuration": "string"
            }
          ],
          "currentScalingFrequencyKhz": 0,
          "idleDuration": "string",
          "maxScalingFrequencyKhz": 0
        }
      ],
      "maxClockSpeedKhz": 0,
      "model": "string"
    }
  ],
  "cpuStatusReports": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperature": 0
        }
      ],
      "cpuUtilizationPercentageInfo": [
        0
      ],
      "reportTime": "1970-01-01T00:00:00Z"
    }
  ],
  "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
  "deviceFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "deviceId": "string",
  "deviceLicenseType": "deviceLicenseTypeUnspecified",
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "storageFree": "string",
          "storageTotal": "string",
          "volumeId": "string"
        }
      ]
    }
  ],
  "dockMacAddress": "string",
  "etag": "string",
  "ethernetMacAddress": "string",
  "ethernetMacAddress0": "string",
  "firmwareVersion": "string",
  "firstEnrollmentTime": "string",
  "kind": "admin#directory#chromeosdevice",
  "lastDeprovisionTimestamp": "string",
  "lastEnrollmentTime": "1970-01-01T00:00:00Z",
  "lastKnownNetwork": [
    {
      "ipAddress": "string",
      "wanIpAddress": "string"
    }
  ],
  "lastSync": "1970-01-01T00:00:00Z",
  "macAddress": "string",
  "manufactureDate": "string",
  "meid": "string",
  "model": "string",
  "notes": "string",
  "orderNumber": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "osUpdateStatus": {
    "rebootTime": "string",
    "state": "updateStateUnspecified",
    "targetKioskAppVersion": "string",
    "targetOsVersion": "string",
    "updateCheckTime": "string",
    "updateTime": "string"
  },
  "osVersion": "string",
  "platformVersion": "string",
  "recentUsers": [
    {
      "email": "string",
      "type": "string"
    }
  ],
  "screenshotFiles": [
    {
      "createTime": "1970-01-01T00:00:00Z",
      "downloadUrl": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "serialNumber": "string",
  "status": "string",
  "supportEndDate": "1970-01-01T00:00:00Z",
  "systemRamFreeReports": [
    {
      "reportTime": "1970-01-01T00:00:00Z",
      "systemRamFreeInfo": [
        "string"
      ]
    }
  ],
  "systemRamTotal": "string",
  "tpmVersionInfo": {
    "family": "string",
    "firmwareVersion": "string",
    "manufacturer": "string",
    "specLevel": "string",
    "tpmModel": "string",
    "vendorSpecific": "string"
  },
  "willAutoRenew": true
}
```

Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeTimeRanges|[object]|false|none|A list of active time ranges (Read-only).|
|annotatedAssetId|string|false|none|The asset identifier as noted by an administrator or specified during enrollment.|
|annotatedLocation|string|false|none|The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.|
|annotatedUser|string|false|none|The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.|
|autoUpdateExpiration|string(int64)|false|none|(Read-only) The timestamp after which the device will stop receiving Chrome updates or support|
|bootMode|string|false|none|The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).|
|cpuInfo|[object]|false|none|Information regarding CPU specs in the device.|
|cpuStatusReports|[object]|false|none|Reports of CPU utilization and temperature (Read-only)|
|deprovisionReason|string|false|none|(Read-only) Deprovision reason.|
|deviceFiles|[object]|false|none|A list of device files to download (Read-only)|
|deviceId|string|false|none|The unique ID of the Chrome device.|
|deviceLicenseType|string|false|read-only|Output only. Device license type.|
|diskVolumeReports|[object]|false|none|Reports of disk space and other info about mounted/connected volumes.|
|dockMacAddress|string|false|none|(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|etag|string|false|none|ETag of the resource.|
|ethernetMacAddress|string|false|none|The device's MAC address on the ethernet network interface.|
|ethernetMacAddress0|string|false|none|(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.|
|firmwareVersion|string|false|none|The Chrome device's firmware version.|
|firstEnrollmentTime|string|false|none|Date and time for the first time the device was enrolled.|
|kind|string|false|none|The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.|
|lastDeprovisionTimestamp|string|false|none|(Read-only) Date and time for the last deprovision of the device.|
|lastEnrollmentTime|string(date-time)|false|none|Date and time the device was last enrolled (Read-only)|
|lastKnownNetwork|[object]|false|none|Contains last known network (Read-only)|
|lastSync|string(date-time)|false|none|Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)|
|macAddress|string|false|none|The device's wireless MAC address. If the device does not have this information, it is not included in the response.|
|manufactureDate|string|false|none|(Read-only) The date the device was manufactured in yyyy-mm-dd format.|
|meid|string|false|none|The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).|
|model|string|false|none|The device's model information. If the device does not have this information, this property is not included in the response.|
|notes|string|false|none|Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.|
|orderNumber|string|false|none|The device's order number. Only devices directly purchased from Google have an order number.|
|orgUnitId|string|false|none|The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|orgUnitPath|string|false|none|The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).|
|osUpdateStatus|[OsUpdateStatus](#schemaosupdatestatus)|false|none|The status of the OS updates for the device.|
|osVersion|string|false|none|The Chrome device's operating system version.|
|platformVersion|string|false|none|The Chrome device's platform version.|
|recentUsers|[object]|false|none|A list of recent device users, in descending order, by last login time.|
|screenshotFiles|[object]|false|none|A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)|
|serialNumber|string|false|none|The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.|
|status|string|false|none|The status of the device.|
|supportEndDate|string(date-time)|false|none|Final date the device will be supported (Read-only)|
|systemRamFreeReports|[object]|false|none|Reports of amounts of available RAM memory (Read-only)|
|systemRamTotal|string(int64)|false|none|Total RAM on the device [in bytes] (Read-only)|
|tpmVersionInfo|object|false|none|Trusted Platform Module (TPM) (Read-only)|
|willAutoRenew|boolean|false|none|Determines if the device will auto renew its support after the support end date. This is a read-only property.|

#### Enumerated Values

|Property|Value|
|---|---|
|deprovisionReason|DEPROVISION_REASON_UNSPECIFIED|
|deprovisionReason|DEPROVISION_REASON_SAME_MODEL_REPLACEMENT|
|deprovisionReason|DEPROVISION_REASON_UPGRADE|
|deprovisionReason|DEPROVISION_REASON_DOMAIN_MOVE|
|deprovisionReason|DEPROVISION_REASON_SERVICE_EXPIRATION|
|deprovisionReason|DEPROVISION_REASON_OTHER|
|deprovisionReason|DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT|
|deprovisionReason|DEPROVISION_REASON_RETIRING_DEVICE|
|deprovisionReason|DEPROVISION_REASON_UPGRADE_TRANSFER|
|deprovisionReason|DEPROVISION_REASON_NOT_REQUIRED|
|deprovisionReason|DEPROVISION_REASON_REPAIR_CENTER|
|deviceLicenseType|deviceLicenseTypeUnspecified|
|deviceLicenseType|enterprise|
|deviceLicenseType|enterpriseUpgrade|
|deviceLicenseType|educationUpgrade|
|deviceLicenseType|education|
|deviceLicenseType|kioskUpgrade|

<h2 id="tocS_ChromeOsDeviceAction">ChromeOsDeviceAction</h2>
<!-- backwards compatibility -->
<a id="schemachromeosdeviceaction"></a>
<a id="schema_ChromeOsDeviceAction"></a>
<a id="tocSchromeosdeviceaction"></a>
<a id="tocschromeosdeviceaction"></a>

```json
{
  "action": "string",
  "deprovisionReason": "string"
}
```

Data about an update to the status of a Chrome OS device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action to be taken on the Chrome OS device.|
|deprovisionReason|string|false|none|Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.|

<h2 id="tocS_ChromeOsDevices">ChromeOsDevices</h2>
<!-- backwards compatibility -->
<a id="schemachromeosdevices"></a>
<a id="schema_ChromeOsDevices"></a>
<a id="tocSchromeosdevices"></a>
<a id="tocschromeosdevices"></a>

```json
{
  "chromeosdevices": [
    {
      "activeTimeRanges": [
        {
          "activeTime": 0,
          "date": "1970-01-01"
        }
      ],
      "annotatedAssetId": "string",
      "annotatedLocation": "string",
      "annotatedUser": "string",
      "autoUpdateExpiration": "string",
      "bootMode": "string",
      "cpuInfo": [
        {
          "architecture": "string",
          "logicalCpus": [
            {
              "cStates": [
                {
                  "displayName": "string",
                  "sessionDuration": "string"
                }
              ],
              "currentScalingFrequencyKhz": 0,
              "idleDuration": "string",
              "maxScalingFrequencyKhz": 0
            }
          ],
          "maxClockSpeedKhz": 0,
          "model": "string"
        }
      ],
      "cpuStatusReports": [
        {
          "cpuTemperatureInfo": [
            {
              "label": "string",
              "temperature": 0
            }
          ],
          "cpuUtilizationPercentageInfo": [
            0
          ],
          "reportTime": "1970-01-01T00:00:00Z"
        }
      ],
      "deprovisionReason": "DEPROVISION_REASON_UNSPECIFIED",
      "deviceFiles": [
        {
          "createTime": "1970-01-01T00:00:00Z",
          "downloadUrl": "string",
          "name": "string",
          "type": "string"
        }
      ],
      "deviceId": "string",
      "deviceLicenseType": "deviceLicenseTypeUnspecified",
      "diskVolumeReports": [
        {
          "volumeInfo": [
            {
              "storageFree": "string",
              "storageTotal": "string",
              "volumeId": "string"
            }
          ]
        }
      ],
      "dockMacAddress": "string",
      "etag": "string",
      "ethernetMacAddress": "string",
      "ethernetMacAddress0": "string",
      "firmwareVersion": "string",
      "firstEnrollmentTime": "string",
      "kind": "admin#directory#chromeosdevice",
      "lastDeprovisionTimestamp": "string",
      "lastEnrollmentTime": "1970-01-01T00:00:00Z",
      "lastKnownNetwork": [
        {
          "ipAddress": "string",
          "wanIpAddress": "string"
        }
      ],
      "lastSync": "1970-01-01T00:00:00Z",
      "macAddress": "string",
      "manufactureDate": "string",
      "meid": "string",
      "model": "string",
      "notes": "string",
      "orderNumber": "string",
      "orgUnitId": "string",
      "orgUnitPath": "string",
      "osUpdateStatus": {
        "rebootTime": "string",
        "state": "updateStateUnspecified",
        "targetKioskAppVersion": "string",
        "targetOsVersion": "string",
        "updateCheckTime": "string",
        "updateTime": "string"
      },
      "osVersion": "string",
      "platformVersion": "string",
      "recentUsers": [
        {
          "email": "string",
          "type": "string"
        }
      ],
      "screenshotFiles": [
        {
          "createTime": "1970-01-01T00:00:00Z",
          "downloadUrl": "string",
          "name": "string",
          "type": "string"
        }
      ],
      "serialNumber": "string",
      "status": "string",
      "supportEndDate": "1970-01-01T00:00:00Z",
      "systemRamFreeReports": [
        {
          "reportTime": "1970-01-01T00:00:00Z",
          "systemRamFreeInfo": [
            "string"
          ]
        }
      ],
      "systemRamTotal": "string",
      "tpmVersionInfo": {
        "family": "string",
        "firmwareVersion": "string",
        "manufacturer": "string",
        "specLevel": "string",
        "tpmModel": "string",
        "vendorSpecific": "string"
      },
      "willAutoRenew": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#chromeosdevices",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromeosdevices|[[ChromeOsDevice](#schemachromeosdevice)]|false|none|A list of Chrome OS Device objects.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|nextPageToken|string|false|none|Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request.|

<h2 id="tocS_ChromeOsMoveDevicesToOu">ChromeOsMoveDevicesToOu</h2>
<!-- backwards compatibility -->
<a id="schemachromeosmovedevicestoou"></a>
<a id="schema_ChromeOsMoveDevicesToOu"></a>
<a id="tocSchromeosmovedevicestoou"></a>
<a id="tocschromeosmovedevicestoou"></a>

```json
{
  "deviceIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceIds|[string]|false|none|Chrome OS devices to be moved to OU|

<h2 id="tocS_CreatePrintServerRequest">CreatePrintServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprintserverrequest"></a>
<a id="schema_CreatePrintServerRequest"></a>
<a id="tocScreateprintserverrequest"></a>
<a id="tocscreateprintserverrequest"></a>

```json
{
  "parent": "string",
  "printServer": {
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "id": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string"
  }
}
```

Request for adding a new print server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`|
|printServer|[PrintServer](#schemaprintserver)|false|none|Required. A print server to create. If you want to place the print server under a specific organizational unit (OU), then populate the `org_unit_id`. Otherwise the print server is created under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/admin-sdk/directory/v1/guides/manage-org-units).|

<h2 id="tocS_CreatePrinterRequest">CreatePrinterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprinterrequest"></a>
<a id="schema_CreatePrinterRequest"></a>
<a id="tocScreateprinterrequest"></a>
<a id="tocscreateprinterrequest"></a>

```json
{
  "parent": "string",
  "printer": {
    "auxiliaryMessages": [
      {
        "auxiliaryMessage": "string",
        "fieldMask": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ],
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "id": "string",
    "makeAndModel": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string",
    "useDriverlessConfig": true
  }
}
```

Request for adding a new printer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|Required. The name of the customer. Format: customers/{customer_id}|
|printer|[Printer](#schemaprinter)|false|none|Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU.|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "alternateEmail": "string",
  "customerCreationTime": "1970-01-01T00:00:00Z",
  "customerDomain": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#customer",
  "language": "string",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateEmail|string|false|none|The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`|
|customerCreationTime|string(date-time)|false|none|The customer's creation time (Readonly)|
|customerDomain|string|false|none|The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The unique ID for the customer's Google Workspace account. (Readonly)|
|kind|string|false|none|Identifies the resource as a customer. Value: `admin#directory#customer`|
|language|string|false|none|The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.|
|phoneNumber|string|false|none|The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|postalAddress|[CustomerPostalAddress](#schemacustomerpostaladdress)|false|none|The customer's postal address information.|

<h2 id="tocS_CustomerPostalAddress">CustomerPostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpostaladdress"></a>
<a id="schema_CustomerPostalAddress"></a>
<a id="tocScustomerpostaladdress"></a>
<a id="tocscustomerpostaladdress"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "contactName": "string",
  "countryCode": "string",
  "locality": "string",
  "organizationName": "string",
  "postalCode": "string",
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|A customer's physical address. The address can be composed of one to three lines.|
|addressLine2|string|false|none|Address line 2 of the address.|
|addressLine3|string|false|none|Address line 3 of the address.|
|contactName|string|false|none|The customer contact's name.|
|countryCode|string|false|none|This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm).|
|locality|string|false|none|Name of the locality. An example of a locality value is the city of `San Francisco`.|
|organizationName|string|false|none|The company or company division name.|
|postalCode|string|false|none|The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.|
|region|string|false|none|Name of the region. An example of a region value is `NY` for the state of New York.|

<h2 id="tocS_DirectoryChromeosdevicesCommand">DirectoryChromeosdevicesCommand</h2>
<!-- backwards compatibility -->
<a id="schemadirectorychromeosdevicescommand"></a>
<a id="schema_DirectoryChromeosdevicesCommand"></a>
<a id="tocSdirectorychromeosdevicescommand"></a>
<a id="tocsdirectorychromeosdevicescommand"></a>

```json
{
  "commandExpireTime": "string",
  "commandId": "string",
  "commandResult": {
    "commandResultPayload": "string",
    "errorMessage": "string",
    "executeTime": "string",
    "result": "COMMAND_RESULT_TYPE_UNSPECIFIED"
  },
  "issueTime": "string",
  "payload": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "COMMAND_TYPE_UNSPECIFIED"
}
```

Information regarding a command that was issued to a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandExpireTime|string(google-datetime)|false|none|The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.|
|commandId|string(int64)|false|none|Unique ID of a device command.|
|commandResult|[DirectoryChromeosdevicesCommandResult](#schemadirectorychromeosdevicescommandresult)|false|none|The result of the command execution.|
|issueTime|string(google-datetime)|false|none|The timestamp when the command was issued by the admin.|
|payload|string|false|none|The payload that the command specified, if any.|
|state|string|false|none|Indicates the command state.|
|type|string|false|none|The type of the command.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|EXPIRED|
|state|CANCELLED|
|state|SENT_TO_CLIENT|
|state|ACKED_BY_CLIENT|
|state|EXECUTED_BY_CLIENT|
|type|COMMAND_TYPE_UNSPECIFIED|
|type|REBOOT|
|type|TAKE_A_SCREENSHOT|
|type|SET_VOLUME|
|type|WIPE_USERS|
|type|REMOTE_POWERWASH|
|type|DEVICE_START_CRD_SESSION|
|type|CAPTURE_LOGS|
|type|FETCH_SUPPORT_PACKET|

<h2 id="tocS_DirectoryChromeosdevicesCommandResult">DirectoryChromeosdevicesCommandResult</h2>
<!-- backwards compatibility -->
<a id="schemadirectorychromeosdevicescommandresult"></a>
<a id="schema_DirectoryChromeosdevicesCommandResult"></a>
<a id="tocSdirectorychromeosdevicescommandresult"></a>
<a id="tocsdirectorychromeosdevicescommandresult"></a>

```json
{
  "commandResultPayload": "string",
  "errorMessage": "string",
  "executeTime": "string",
  "result": "COMMAND_RESULT_TYPE_UNSPECIFIED"
}
```

The result of executing a command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandResultPayload|string|false|none|The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The URL provides a link to the Chrome Remote Desktop session.|
|errorMessage|string|false|none|The error message with a short explanation as to why the command failed. Only present if the command failed.|
|executeTime|string(google-datetime)|false|none|The time at which the command was executed or failed to execute.|
|result|string|false|none|The result of the command.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|COMMAND_RESULT_TYPE_UNSPECIFIED|
|result|IGNORED|
|result|FAILURE|
|result|SUCCESS|

<h2 id="tocS_DirectoryChromeosdevicesIssueCommandRequest">DirectoryChromeosdevicesIssueCommandRequest</h2>
<!-- backwards compatibility -->
<a id="schemadirectorychromeosdevicesissuecommandrequest"></a>
<a id="schema_DirectoryChromeosdevicesIssueCommandRequest"></a>
<a id="tocSdirectorychromeosdevicesissuecommandrequest"></a>
<a id="tocsdirectorychromeosdevicesissuecommandrequest"></a>

```json
{
  "commandType": "COMMAND_TYPE_UNSPECIFIED",
  "payload": "string"
}
```

A request for issuing a command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandType|string|false|none|The type of command.|
|payload|string|false|none|The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. * `REBOOT`: Payload is a stringified JSON object in the form: { "user_session_delay_seconds": 300 }. The delay has to be in the range [0, 300]. * `FETCH_SUPPORT_PACKET`: Payload is optionally a stringified JSON object in the form: {"supportPacketDetails":{ "issueCaseId": optional_support_case_id_string, "issueDescription": optional_issue_description_string, "requestedDataCollectors": []}} The list of available `data_collector_enums` are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23). See more details in [help article](https://support.google.com/chrome/a?p=remote-log).|

#### Enumerated Values

|Property|Value|
|---|---|
|commandType|COMMAND_TYPE_UNSPECIFIED|
|commandType|REBOOT|
|commandType|TAKE_A_SCREENSHOT|
|commandType|SET_VOLUME|
|commandType|WIPE_USERS|
|commandType|REMOTE_POWERWASH|
|commandType|DEVICE_START_CRD_SESSION|
|commandType|CAPTURE_LOGS|
|commandType|FETCH_SUPPORT_PACKET|

<h2 id="tocS_DirectoryChromeosdevicesIssueCommandResponse">DirectoryChromeosdevicesIssueCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemadirectorychromeosdevicesissuecommandresponse"></a>
<a id="schema_DirectoryChromeosdevicesIssueCommandResponse"></a>
<a id="tocSdirectorychromeosdevicesissuecommandresponse"></a>
<a id="tocsdirectorychromeosdevicesissuecommandresponse"></a>

```json
{
  "commandId": "string"
}
```

A response for issuing a command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commandId|string(int64)|false|none|The unique ID of the issued command, used to retrieve the command status.|

<h2 id="tocS_DomainAlias">DomainAlias</h2>
<!-- backwards compatibility -->
<a id="schemadomainalias"></a>
<a id="schema_DomainAlias"></a>
<a id="tocSdomainalias"></a>
<a id="tocsdomainalias"></a>

```json
{
  "creationTime": "string",
  "domainAliasName": "string",
  "etag": "string",
  "kind": "admin#directory#domainAlias",
  "parentDomainName": "string",
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(int64)|false|none|The creation time of the domain alias. (Read-only).|
|domainAliasName|string|false|none|The domain alias name.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|parentDomainName|string|false|none|The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.|
|verified|boolean|false|none|Indicates the verification state of a domain alias. (Read-only)|

<h2 id="tocS_DomainAliases">DomainAliases</h2>
<!-- backwards compatibility -->
<a id="schemadomainaliases"></a>
<a id="schema_DomainAliases"></a>
<a id="tocSdomainaliases"></a>
<a id="tocsdomainaliases"></a>

```json
{
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#domainAliases"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAliases|[[DomainAlias](#schemadomainalias)]|false|none|A list of domain alias objects.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|

<h2 id="tocS_Domains">Domains</h2>
<!-- backwards compatibility -->
<a id="schemadomains"></a>
<a id="schema_Domains"></a>
<a id="tocSdomains"></a>
<a id="tocsdomains"></a>

```json
{
  "creationTime": "string",
  "domainAliases": [
    {
      "creationTime": "string",
      "domainAliasName": "string",
      "etag": "string",
      "kind": "admin#directory#domainAlias",
      "parentDomainName": "string",
      "verified": true
    }
  ],
  "domainName": "string",
  "etag": "string",
  "isPrimary": true,
  "kind": "admin#directory#domain",
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(int64)|false|none|Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).|
|domainAliases|[[DomainAlias](#schemadomainalias)]|false|none|A list of domain alias objects. (Read-only)|
|domainName|string|false|none|The domain name of the customer.|
|etag|string|false|none|ETag of the resource.|
|isPrimary|boolean|false|none|Indicates if the domain is a primary domain (Read-only).|
|kind|string|false|none|Kind of resource this is.|
|verified|boolean|false|none|Indicates the verification state of a domain. (Read-only).|

<h2 id="tocS_Domains2">Domains2</h2>
<!-- backwards compatibility -->
<a id="schemadomains2"></a>
<a id="schema_Domains2"></a>
<a id="tocSdomains2"></a>
<a id="tocsdomains2"></a>

```json
{
  "domains": [
    {
      "creationTime": "string",
      "domainAliases": [
        {
          "creationTime": "string",
          "domainAliasName": "string",
          "etag": "string",
          "kind": "admin#directory#domainAlias",
          "parentDomainName": "string",
          "verified": true
        }
      ],
      "domainName": "string",
      "etag": "string",
      "isPrimary": true,
      "kind": "admin#directory#domain",
      "verified": true
    }
  ],
  "etag": "string",
  "kind": "admin#directory#domains"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[Domains](#schemadomains)]|false|none|A list of domain objects.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|

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

<h2 id="tocS_FailureInfo">FailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemafailureinfo"></a>
<a id="schema_FailureInfo"></a>
<a id="tocSfailureinfo"></a>
<a id="tocsfailureinfo"></a>

```json
{
  "errorCode": "OK",
  "errorMessage": "string",
  "printer": {
    "auxiliaryMessages": [
      {
        "auxiliaryMessage": "string",
        "fieldMask": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ],
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "id": "string",
    "makeAndModel": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string",
    "useDriverlessConfig": true
  },
  "printerId": "string"
}
```

Info about failures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Canonical code for why the update failed to apply.|
|errorMessage|string|false|none|Failure reason message.|
|printer|[Printer](#schemaprinter)|false|none|Failed printer.|
|printerId|string|false|none|Id of a failed printer.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|OK|
|errorCode|CANCELLED|
|errorCode|UNKNOWN|
|errorCode|INVALID_ARGUMENT|
|errorCode|DEADLINE_EXCEEDED|
|errorCode|NOT_FOUND|
|errorCode|ALREADY_EXISTS|
|errorCode|PERMISSION_DENIED|
|errorCode|UNAUTHENTICATED|
|errorCode|RESOURCE_EXHAUSTED|
|errorCode|FAILED_PRECONDITION|
|errorCode|ABORTED|
|errorCode|OUT_OF_RANGE|
|errorCode|UNIMPLEMENTED|
|errorCode|INTERNAL|
|errorCode|UNAVAILABLE|
|errorCode|DATA_LOSS|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "etags": "string",
  "kind": "admin#directory#resources#features#Feature",
  "name": "string"
}
```

JSON template for Feature object in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etags|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|name|string|false|none|The name of the feature.|

<h2 id="tocS_FeatureInstance">FeatureInstance</h2>
<!-- backwards compatibility -->
<a id="schemafeatureinstance"></a>
<a id="schema_FeatureInstance"></a>
<a id="tocSfeatureinstance"></a>
<a id="tocsfeatureinstance"></a>

```json
{
  "feature": {
    "etags": "string",
    "kind": "admin#directory#resources#features#Feature",
    "name": "string"
  }
}
```

JSON template for a feature instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|[Feature](#schemafeature)|false|none|The feature that this is an instance of. A calendar resource may have multiple instances of a feature.|

<h2 id="tocS_FeatureRename">FeatureRename</h2>
<!-- backwards compatibility -->
<a id="schemafeaturerename"></a>
<a id="schema_FeatureRename"></a>
<a id="tocSfeaturerename"></a>
<a id="tocsfeaturerename"></a>

```json
{
  "newName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newName|string|false|none|New name of the feature.|

<h2 id="tocS_Features">Features</h2>
<!-- backwards compatibility -->
<a id="schemafeatures"></a>
<a id="schema_Features"></a>
<a id="tocSfeatures"></a>
<a id="tocsfeatures"></a>

```json
{
  "etag": "string",
  "features": [
    {
      "etags": "string",
      "kind": "admin#directory#resources#features#Feature",
      "name": "string"
    }
  ],
  "kind": "admin#directory#resources#features#featuresList",
  "nextPageToken": "string"
}
```

Public API: Resources.features

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|features|[[Feature](#schemafeature)]|false|none|The Features in this page of results.|
|kind|string|false|none|Kind of resource this is.|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "adminCreated": true,
  "aliases": [
    "string"
  ],
  "description": "string",
  "directMembersCount": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#group",
  "name": "string",
  "nonEditableAliases": [
    "string"
  ]
}
```

Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminCreated|boolean|false|none|Read-only. Value is `true` if this group was created by an administrator rather than a user.|
|aliases|[string]|false|none|Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.|
|description|string|false|none|An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.|
|directMembersCount|string(int64)|false|none|The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.|
|email|string|false|none|The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.|
|kind|string|false|none|The type of the API resource. For Groups resources, the value is `admin#directory#group`.|
|name|string|false|none|The group's display name.|
|nonEditableAliases|[string]|false|none|Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.|

<h2 id="tocS_GroupAlias">GroupAlias</h2>
<!-- backwards compatibility -->
<a id="schemagroupalias"></a>
<a id="schema_GroupAlias"></a>
<a id="tocSgroupalias"></a>
<a id="tocsgroupalias"></a>

```json
{
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "primaryEmail": "string"
}
```

The Directory API manages aliases, which are alternative email addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|The alias email address.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The unique ID of the group.|
|kind|string|false|none|The type of the API resource. For Alias resources, the value is `admin#directory#alias`.|
|primaryEmail|string|false|none|The primary email address of the group.|

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
{
  "etag": "string",
  "groups": [
    {
      "adminCreated": true,
      "aliases": [
        "string"
      ],
      "description": "string",
      "directMembersCount": "string",
      "email": "string",
      "etag": "string",
      "id": "string",
      "kind": "admin#directory#group",
      "name": "string",
      "nonEditableAliases": [
        "string"
      ]
    }
  ],
  "kind": "admin#directory#groups",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|groups|[[Group](#schemagroup)]|false|none|A list of group objects.|
|kind|string|false|none|Kind of resource this is.|
|nextPageToken|string|false|none|Token used to access next page of this result.|

<h2 id="tocS_ListPrintServersResponse">ListPrintServersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprintserversresponse"></a>
<a id="schema_ListPrintServersResponse"></a>
<a id="tocSlistprintserversresponse"></a>
<a id="tocslistprintserversresponse"></a>

```json
{
  "nextPageToken": "string",
  "printServers": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|printServers|[[PrintServer](#schemaprintserver)]|false|none|List of print servers.|

<h2 id="tocS_ListPrinterModelsResponse">ListPrinterModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprintermodelsresponse"></a>
<a id="schema_ListPrinterModelsResponse"></a>
<a id="tocSlistprintermodelsresponse"></a>
<a id="tocslistprintermodelsresponse"></a>

```json
{
  "nextPageToken": "string",
  "printerModels": [
    {
      "displayName": "string",
      "makeAndModel": "string",
      "manufacturer": "string"
    }
  ]
}
```

Response for listing allowed printer models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|printerModels|[[PrinterModel](#schemaprintermodel)]|false|none|Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.|

<h2 id="tocS_ListPrintersResponse">ListPrintersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprintersresponse"></a>
<a id="schema_ListPrintersResponse"></a>
<a id="tocSlistprintersresponse"></a>
<a id="tocslistprintersresponse"></a>

```json
{
  "nextPageToken": "string",
  "printers": [
    {
      "auxiliaryMessages": [
        {
          "auxiliaryMessage": "string",
          "fieldMask": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "id": "string",
      "makeAndModel": "string",
      "name": "string",
      "orgUnitId": "string",
      "uri": "string",
      "useDriverlessConfig": true
    }
  ]
}
```

Response for listing printers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|printers|[[Printer](#schemaprinter)]|false|none|List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned.|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "delivery_settings": "string",
  "email": "string",
  "etag": "string",
  "id": "string",
  "kind": "admin#directory#member",
  "role": "string",
  "status": "string",
  "type": "string"
}
```

A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_settings|string|false|none|Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.|
|email|string|false|none|The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.|
|kind|string|false|none|The type of the API resource. For Members resources, the value is `admin#directory#member`.|
|role|string|false|none|The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).|
|status|string|false|none|Status of member (Immutable)|
|type|string|false|none|The type of group member.|

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#members",
  "members": [
    {
      "delivery_settings": "string",
      "email": "string",
      "etag": "string",
      "id": "string",
      "kind": "admin#directory#member",
      "role": "string",
      "status": "string",
      "type": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|members|[[Member](#schemamember)]|false|none|A list of member objects.|
|nextPageToken|string|false|none|Token used to access next page of this result.|

<h2 id="tocS_MembersHasMember">MembersHasMember</h2>
<!-- backwards compatibility -->
<a id="schemamembershasmember"></a>
<a id="schema_MembersHasMember"></a>
<a id="tocSmembershasmember"></a>
<a id="tocsmembershasmember"></a>

```json
{
  "isMember": true
}
```

JSON template for Has Member response in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMember|boolean|false|read-only|Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.|

<h2 id="tocS_MobileDevice">MobileDevice</h2>
<!-- backwards compatibility -->
<a id="schemamobiledevice"></a>
<a id="schema_MobileDevice"></a>
<a id="tocSmobiledevice"></a>
<a id="tocsmobiledevice"></a>

```json
{
  "adbStatus": true,
  "applications": [
    {
      "displayName": "string",
      "packageName": "string",
      "permission": [
        "string"
      ],
      "versionCode": 0,
      "versionName": "string"
    }
  ],
  "basebandVersion": "string",
  "bootloaderVersion": "string",
  "brand": "string",
  "buildNumber": "string",
  "defaultLanguage": "string",
  "developerOptionsStatus": true,
  "deviceCompromisedStatus": "string",
  "deviceId": "string",
  "devicePasswordStatus": "string",
  "email": [
    "string"
  ],
  "encryptionStatus": "string",
  "etag": "string",
  "firstSync": "1970-01-01T00:00:00Z",
  "hardware": "string",
  "hardwareId": "string",
  "imei": "string",
  "kernelVersion": "string",
  "kind": "admin#directory#mobiledevice",
  "lastSync": "1970-01-01T00:00:00Z",
  "managedAccountIsOnOwnerProfile": true,
  "manufacturer": "string",
  "meid": "string",
  "model": "string",
  "name": [
    "string"
  ],
  "networkOperator": "string",
  "os": "string",
  "otherAccountsInfo": [
    "string"
  ],
  "privilege": "string",
  "releaseVersion": "string",
  "resourceId": "string",
  "securityPatchLevel": "string",
  "serialNumber": "string",
  "status": "string",
  "supportsWorkProfile": true,
  "type": "string",
  "unknownSourcesStatus": true,
  "userAgent": "string",
  "wifiMacAddress": "string"
}
```

Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adbStatus|boolean|false|none|Adb (USB debugging) enabled or disabled on device (Read-only)|
|applications|[object]|false|none|The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.|
|basebandVersion|string|false|none|The device's baseband version.|
|bootloaderVersion|string|false|none|Mobile Device Bootloader version (Read-only)|
|brand|string|false|none|Mobile Device Brand (Read-only)|
|buildNumber|string|false|none|The device's operating system build number.|
|defaultLanguage|string|false|none|The default locale used on the device.|
|developerOptionsStatus|boolean|false|none|Developer options enabled or disabled on device (Read-only)|
|deviceCompromisedStatus|string|false|none|The compromised device status.|
|deviceId|string|false|none|The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.|
|devicePasswordStatus|string|false|none|DevicePasswordStatus (Read-only)|
|email|[string]|false|none|The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.|
|encryptionStatus|string|false|none|Mobile Device Encryption Status (Read-only)|
|etag|string|false|none|ETag of the resource.|
|firstSync|string(date-time)|false|none|Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)|
|hardware|string|false|none|Mobile Device Hardware (Read-only)|
|hardwareId|string|false|none|The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.|
|imei|string|false|none|The device's IMEI number.|
|kernelVersion|string|false|none|The device's kernel version.|
|kind|string|false|none|The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.|
|lastSync|string(date-time)|false|none|Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)|
|managedAccountIsOnOwnerProfile|boolean|false|none|Boolean indicating if this account is on owner/primary profile or not.|
|manufacturer|string|false|none|Mobile Device manufacturer (Read-only)|
|meid|string|false|none|The device's MEID number.|
|model|string|false|none|The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).|
|name|[string]|false|none|The list of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).|
|networkOperator|string|false|none|Mobile Device mobile or network operator (if available) (Read-only)|
|os|string|false|none|The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).|
|otherAccountsInfo|[string]|false|none|The list of accounts added on device (Read-only)|
|privilege|string|false|none|DMAgentPermission (Read-only)|
|releaseVersion|string|false|none|Mobile Device release version version (Read-only)|
|resourceId|string|false|none|The unique ID the API service uses to identify the mobile device.|
|securityPatchLevel|string(int64)|false|none|Mobile Device Security patch level (Read-only)|
|serialNumber|string|false|none|The device's serial number.|
|status|string|false|none|The device's status.|
|supportsWorkProfile|boolean|false|none|Work profile supported on device (Read-only)|
|type|string|false|none|The type of mobile device.|
|unknownSourcesStatus|boolean|false|none|Unknown sources enabled or disabled on device (Read-only)|
|userAgent|string|false|none|Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).|
|wifiMacAddress|string|false|none|The device's MAC address on Wi-Fi networks.|

<h2 id="tocS_MobileDeviceAction">MobileDeviceAction</h2>
<!-- backwards compatibility -->
<a id="schemamobiledeviceaction"></a>
<a id="schema_MobileDeviceAction"></a>
<a id="tocSmobiledeviceaction"></a>
<a id="tocsmobiledeviceaction"></a>

```json
{
  "action": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action to be performed on the device.|

<h2 id="tocS_MobileDevices">MobileDevices</h2>
<!-- backwards compatibility -->
<a id="schemamobiledevices"></a>
<a id="schema_MobileDevices"></a>
<a id="tocSmobiledevices"></a>
<a id="tocsmobiledevices"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#mobiledevices",
  "mobiledevices": [
    {
      "adbStatus": true,
      "applications": [
        {
          "displayName": "string",
          "packageName": "string",
          "permission": [
            "string"
          ],
          "versionCode": 0,
          "versionName": "string"
        }
      ],
      "basebandVersion": "string",
      "bootloaderVersion": "string",
      "brand": "string",
      "buildNumber": "string",
      "defaultLanguage": "string",
      "developerOptionsStatus": true,
      "deviceCompromisedStatus": "string",
      "deviceId": "string",
      "devicePasswordStatus": "string",
      "email": [
        "string"
      ],
      "encryptionStatus": "string",
      "etag": "string",
      "firstSync": "1970-01-01T00:00:00Z",
      "hardware": "string",
      "hardwareId": "string",
      "imei": "string",
      "kernelVersion": "string",
      "kind": "admin#directory#mobiledevice",
      "lastSync": "1970-01-01T00:00:00Z",
      "managedAccountIsOnOwnerProfile": true,
      "manufacturer": "string",
      "meid": "string",
      "model": "string",
      "name": [
        "string"
      ],
      "networkOperator": "string",
      "os": "string",
      "otherAccountsInfo": [
        "string"
      ],
      "privilege": "string",
      "releaseVersion": "string",
      "resourceId": "string",
      "securityPatchLevel": "string",
      "serialNumber": "string",
      "status": "string",
      "supportsWorkProfile": true,
      "type": "string",
      "unknownSourcesStatus": true,
      "userAgent": "string",
      "wifiMacAddress": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|mobiledevices|[[MobileDevice](#schemamobiledevice)]|false|none|A list of Mobile Device objects.|
|nextPageToken|string|false|none|Token used to access next page of this result.|

<h2 id="tocS_OrgUnit">OrgUnit</h2>
<!-- backwards compatibility -->
<a id="schemaorgunit"></a>
<a id="schema_OrgUnit"></a>
<a id="tocSorgunit"></a>
<a id="tocsorgunit"></a>

```json
{
  "blockInheritance": true,
  "description": "string",
  "etag": "string",
  "kind": "admin#directory#orgUnit",
  "name": "string",
  "orgUnitId": "string",
  "orgUnitPath": "string",
  "parentOrgUnitId": "string",
  "parentOrgUnitPath": "string"
}
```

Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockInheritance|boolean|false|none|**Deprecated.** Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).|
|description|string|false|none|Description of the organizational unit.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.|
|name|string|false|none|The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.|
|orgUnitId|string|false|none|The unique ID of the organizational unit.|
|orgUnitPath|string|false|none|The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).|
|parentOrgUnitId|string|false|none|The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.|
|parentOrgUnitPath|string|false|none|The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.|

<h2 id="tocS_OrgUnits">OrgUnits</h2>
<!-- backwards compatibility -->
<a id="schemaorgunits"></a>
<a id="schema_OrgUnits"></a>
<a id="tocSorgunits"></a>
<a id="tocsorgunits"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#orgUnits",
  "organizationUnits": [
    {
      "blockInheritance": true,
      "description": "string",
      "etag": "string",
      "kind": "admin#directory#orgUnit",
      "name": "string",
      "orgUnitId": "string",
      "orgUnitPath": "string",
      "parentOrgUnitId": "string",
      "parentOrgUnitPath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.|
|organizationUnits|[[OrgUnit](#schemaorgunit)]|false|none|A list of organizational unit objects.|

<h2 id="tocS_OsUpdateStatus">OsUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemaosupdatestatus"></a>
<a id="schema_OsUpdateStatus"></a>
<a id="tocSosupdatestatus"></a>
<a id="tocsosupdatestatus"></a>

```json
{
  "rebootTime": "string",
  "state": "updateStateUnspecified",
  "targetKioskAppVersion": "string",
  "targetOsVersion": "string",
  "updateCheckTime": "string",
  "updateTime": "string"
}
```

Contains information regarding the current OS update status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rebootTime|string|false|none|Date and time of the last reboot.|
|state|string|false|none|The update state of an OS update.|
|targetKioskAppVersion|string|false|none|New required platform version from the pending updated kiosk app.|
|targetOsVersion|string|false|none|New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.|
|updateCheckTime|string|false|none|Date and time of the last update check.|
|updateTime|string|false|none|Date and time of the last successful OS update.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|updateStateUnspecified|
|state|updateStateNotStarted|
|state|updateStateDownloadInProgress|
|state|updateStateNeedReboot|

<h2 id="tocS_PrintServer">PrintServer</h2>
<!-- backwards compatibility -->
<a id="schemaprintserver"></a>
<a id="schema_PrintServer"></a>
<a id="tocSprintserver"></a>
<a id="tocsprintserver"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "id": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string"
}
```

Configuration for a print server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time when the print server was created.|
|description|string|false|none|Editable. Description of the print server (as shown in the Admin console).|
|displayName|string|false|none|Editable. Display name of the print server (as shown in the Admin console).|
|id|string|false|none|Immutable. ID of the print server. Leave empty when creating.|
|name|string|false|none|Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`|
|orgUnitId|string|false|none|ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).|
|uri|string|false|none|Editable. Print server URI.|

<h2 id="tocS_PrintServerFailureInfo">PrintServerFailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprintserverfailureinfo"></a>
<a id="schema_PrintServerFailureInfo"></a>
<a id="tocSprintserverfailureinfo"></a>
<a id="tocsprintserverfailureinfo"></a>

```json
{
  "errorCode": "OK",
  "errorMessage": "string",
  "printServer": {
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "id": "string",
    "name": "string",
    "orgUnitId": "string",
    "uri": "string"
  },
  "printServerId": "string"
}
```

Info about failures

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Canonical code for why the update failed to apply.|
|errorMessage|string|false|none|Failure reason message.|
|printServer|[PrintServer](#schemaprintserver)|false|none|Failed print server.|
|printServerId|string|false|none|ID of a failed print server.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|OK|
|errorCode|CANCELLED|
|errorCode|UNKNOWN|
|errorCode|INVALID_ARGUMENT|
|errorCode|DEADLINE_EXCEEDED|
|errorCode|NOT_FOUND|
|errorCode|ALREADY_EXISTS|
|errorCode|PERMISSION_DENIED|
|errorCode|UNAUTHENTICATED|
|errorCode|RESOURCE_EXHAUSTED|
|errorCode|FAILED_PRECONDITION|
|errorCode|ABORTED|
|errorCode|OUT_OF_RANGE|
|errorCode|UNIMPLEMENTED|
|errorCode|INTERNAL|
|errorCode|UNAVAILABLE|
|errorCode|DATA_LOSS|

<h2 id="tocS_Printer">Printer</h2>
<!-- backwards compatibility -->
<a id="schemaprinter"></a>
<a id="schema_Printer"></a>
<a id="tocSprinter"></a>
<a id="tocsprinter"></a>

```json
{
  "auxiliaryMessages": [
    {
      "auxiliaryMessage": "string",
      "fieldMask": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "id": "string",
  "makeAndModel": "string",
  "name": "string",
  "orgUnitId": "string",
  "uri": "string",
  "useDriverlessConfig": true
}
```

Printer configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auxiliaryMessages|[[AuxiliaryMessage](#schemaauxiliarymessage)]|false|read-only|Output only. Auxiliary messages about issues with the printer configuration if any.|
|createTime|string(google-datetime)|false|read-only|Output only. Time when printer was created.|
|description|string|false|none|Editable. Description of printer.|
|displayName|string|false|none|Editable. Name of printer.|
|id|string|false|none|Id of the printer. (During printer creation leave empty)|
|makeAndModel|string|false|none|Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.|
|name|string|false|none|The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)|
|orgUnitId|string|false|none|Organization Unit that owns this printer (Only can be set during Printer creation)|
|uri|string|false|none|Editable. Printer URI.|
|useDriverlessConfig|boolean|false|none|Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored|

<h2 id="tocS_PrinterModel">PrinterModel</h2>
<!-- backwards compatibility -->
<a id="schemaprintermodel"></a>
<a id="schema_PrinterModel"></a>
<a id="tocSprintermodel"></a>
<a id="tocsprintermodel"></a>

```json
{
  "displayName": "string",
  "makeAndModel": "string",
  "manufacturer": "string"
}
```

Printer manufacturer and model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name. eq. "Brother MFC-8840D"|
|makeAndModel|string|false|none|Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d"|
|manufacturer|string|false|none|Manufacturer. eq. "Brother"|

<h2 id="tocS_Privilege">Privilege</h2>
<!-- backwards compatibility -->
<a id="schemaprivilege"></a>
<a id="schema_Privilege"></a>
<a id="tocSprivilege"></a>
<a id="tocsprivilege"></a>

```json
{
  "childPrivileges": [
    {
      "childPrivileges": [
        {}
      ],
      "etag": "string",
      "isOuScopable": true,
      "kind": "admin#directory#privilege",
      "privilegeName": "string",
      "serviceId": "string",
      "serviceName": "string"
    }
  ],
  "etag": "string",
  "isOuScopable": true,
  "kind": "admin#directory#privilege",
  "privilegeName": "string",
  "serviceId": "string",
  "serviceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childPrivileges|[[Privilege](#schemaprivilege)]|false|none|A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.|
|etag|string|false|none|ETag of the resource.|
|isOuScopable|boolean|false|none|If the privilege can be restricted to an organization unit.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#privilege`.|
|privilegeName|string|false|none|The name of the privilege.|
|serviceId|string|false|none|The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).|
|serviceName|string|false|none|The name of the service this privilege is for.|

<h2 id="tocS_Privileges">Privileges</h2>
<!-- backwards compatibility -->
<a id="schemaprivileges"></a>
<a id="schema_Privileges"></a>
<a id="tocSprivileges"></a>
<a id="tocsprivileges"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "childPrivileges": [
        {}
      ],
      "etag": "string",
      "isOuScopable": true,
      "kind": "admin#directory#privilege",
      "privilegeName": "string",
      "serviceId": "string",
      "serviceName": "string"
    }
  ],
  "kind": "admin#directory#privileges"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[Privilege](#schemaprivilege)]|false|none|A list of Privilege resources.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#privileges`.|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "etag": "string",
  "isSuperAdminRole": true,
  "isSystemRole": true,
  "kind": "admin#directory#role",
  "roleDescription": "string",
  "roleId": "string",
  "roleName": "string",
  "rolePrivileges": [
    {
      "privilegeName": "string",
      "serviceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|isSuperAdminRole|boolean|false|none|Returns `true` if the role is a super admin role.|
|isSystemRole|boolean|false|none|Returns `true` if this is a pre-defined system role.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#role`.|
|roleDescription|string|false|none|A short description of the role.|
|roleId|string(int64)|false|none|ID of the role.|
|roleName|string|false|none|Name of the role.|
|rolePrivileges|[object]|false|none|The set of privileges that are granted to this role.|

<h2 id="tocS_RoleAssignment">RoleAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignment"></a>
<a id="schema_RoleAssignment"></a>
<a id="tocSroleassignment"></a>
<a id="tocsroleassignment"></a>

```json
{
  "assignedTo": "string",
  "assigneeType": "user",
  "etag": "string",
  "kind": "admin#directory#roleAssignment",
  "orgUnitId": "string",
  "roleAssignmentId": "string",
  "roleId": "string",
  "scopeType": "string"
}
```

Defines an assignment of a role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedTo|string|false|none|The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).|
|assigneeType|string|false|read-only|Output only. The type of the assignee (`USER` or `GROUP`).|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#roleAssignment`.|
|orgUnitId|string|false|none|If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.|
|roleAssignmentId|string(int64)|false|none|ID of this roleAssignment.|
|roleId|string(int64)|false|none|The ID of the role that is assigned.|
|scopeType|string|false|none|The scope in which this role is assigned.|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeType|user|
|assigneeType|group|

<h2 id="tocS_RoleAssignments">RoleAssignments</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignments"></a>
<a id="schema_RoleAssignments"></a>
<a id="tocSroleassignments"></a>
<a id="tocsroleassignments"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "assignedTo": "string",
      "assigneeType": "user",
      "etag": "string",
      "kind": "admin#directory#roleAssignment",
      "orgUnitId": "string",
      "roleAssignmentId": "string",
      "roleId": "string",
      "scopeType": "string"
    }
  ],
  "kind": "admin#directory#roleAssignments",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[RoleAssignment](#schemaroleassignment)]|false|none|A list of RoleAssignment resources.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#roleAssignments`.|
|nextPageToken|string|false|none|none|

<h2 id="tocS_Roles">Roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_Roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "isSuperAdminRole": true,
      "isSystemRole": true,
      "kind": "admin#directory#role",
      "roleDescription": "string",
      "roleId": "string",
      "roleName": "string",
      "rolePrivileges": [
        {
          "privilegeName": "string",
          "serviceId": "string"
        }
      ]
    }
  ],
  "kind": "admin#directory#roles",
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[Role](#schemarole)]|false|none|A list of Role resources.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#roles`.|
|nextPageToken|string|false|none|none|

<h2 id="tocS_Schema">Schema</h2>
<!-- backwards compatibility -->
<a id="schemaschema"></a>
<a id="schema_Schema"></a>
<a id="tocSschema"></a>
<a id="tocsschema"></a>

```json
{
  "displayName": "string",
  "etag": "string",
  "fields": [
    {
      "displayName": "string",
      "etag": "string",
      "fieldId": "string",
      "fieldName": "string",
      "fieldType": "string",
      "indexed": true,
      "kind": "admin#directory#schema#fieldspec",
      "multiValued": true,
      "numericIndexingSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "readAccessType": "ALL_DOMAIN_USERS"
    }
  ],
  "kind": "admin#directory#schema",
  "schemaId": "string",
  "schemaName": "string"
}
```

The type of API resource. For Schema resources, this is always `admin#directory#schema`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name for the schema.|
|etag|string|false|none|The ETag of the resource.|
|fields|[[SchemaFieldSpec](#schemaschemafieldspec)]|false|none|A list of fields in the schema.|
|kind|string|false|none|Kind of resource this is.|
|schemaId|string|false|none|The unique identifier of the schema (Read-only)|
|schemaName|string|false|none|The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.|

<h2 id="tocS_SchemaFieldSpec">SchemaFieldSpec</h2>
<!-- backwards compatibility -->
<a id="schemaschemafieldspec"></a>
<a id="schema_SchemaFieldSpec"></a>
<a id="tocSschemafieldspec"></a>
<a id="tocsschemafieldspec"></a>

```json
{
  "displayName": "string",
  "etag": "string",
  "fieldId": "string",
  "fieldName": "string",
  "fieldType": "string",
  "indexed": true,
  "kind": "admin#directory#schema#fieldspec",
  "multiValued": true,
  "numericIndexingSpec": {
    "maxValue": 0,
    "minValue": 0
  },
  "readAccessType": "ALL_DOMAIN_USERS"
}
```

You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display Name of the field.|
|etag|string|false|none|The ETag of the field.|
|fieldId|string|false|none|The unique identifier of the field (Read-only)|
|fieldName|string|false|none|The name of the field.|
|fieldType|string|false|none|The type of the field.|
|indexed|boolean|false|none|Boolean specifying whether the field is indexed or not. Default: `true`.|
|kind|string|false|none|The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.|
|multiValued|boolean|false|none|A boolean specifying whether this is a multi-valued field or not. Default: `false`.|
|numericIndexingSpec|object|false|none|Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.|
|readAccessType|string|false|none|Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected.|

<h2 id="tocS_Schemas">Schemas</h2>
<!-- backwards compatibility -->
<a id="schemaschemas"></a>
<a id="schema_Schemas"></a>
<a id="tocSschemas"></a>
<a id="tocsschemas"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#schemas",
  "schemas": [
    {
      "displayName": "string",
      "etag": "string",
      "fields": [
        {
          "displayName": "string",
          "etag": "string",
          "fieldId": "string",
          "fieldName": "string",
          "fieldType": "string",
          "indexed": true,
          "kind": "admin#directory#schema#fieldspec",
          "multiValued": true,
          "numericIndexingSpec": {
            "maxValue": 0,
            "minValue": 0
          },
          "readAccessType": "ALL_DOMAIN_USERS"
        }
      ],
      "kind": "admin#directory#schema",
      "schemaId": "string",
      "schemaName": "string"
    }
  ]
}
```

JSON response template for List Schema operation in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|schemas|[[Schema](#schemaschema)]|false|none|A list of UserSchema objects.|

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

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "anonymous": true,
  "clientId": "string",
  "displayText": "string",
  "etag": "string",
  "kind": "admin#directory#token",
  "nativeApp": true,
  "scopes": [
    "string"
  ],
  "userKey": "string"
}
```

JSON template for token resource in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anonymous|boolean|false|none|Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.|
|clientId|string|false|none|The Client ID of the application the token is issued to.|
|displayText|string|false|none|The displayable name of the application the token is issued to.|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#token`.|
|nativeApp|boolean|false|none|Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.|
|scopes|[string]|false|none|A list of authorization scopes the application is granted.|
|userKey|string|false|none|The unique ID of the user that issued the token.|

<h2 id="tocS_Tokens">Tokens</h2>
<!-- backwards compatibility -->
<a id="schematokens"></a>
<a id="schema_Tokens"></a>
<a id="tocStokens"></a>
<a id="tocstokens"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "anonymous": true,
      "clientId": "string",
      "displayText": "string",
      "etag": "string",
      "kind": "admin#directory#token",
      "nativeApp": true,
      "scopes": [
        "string"
      ],
      "userKey": "string"
    }
  ],
  "kind": "admin#directory#tokenList"
}
```

JSON response template for List tokens operation in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[Token](#schematoken)]|false|none|A list of Token resources.|
|kind|string|false|none|The type of the API resource. This is always `admin#directory#tokenList`.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "addresses": null,
  "agreedToTerms": true,
  "aliases": [
    "string"
  ],
  "archived": true,
  "changePasswordAtNextLogin": true,
  "creationTime": "1970-01-01T00:00:00Z",
  "customSchemas": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "customerId": "string",
  "deletionTime": "1970-01-01T00:00:00Z",
  "emails": null,
  "etag": "string",
  "externalIds": null,
  "gender": null,
  "hashFunction": "string",
  "id": "string",
  "ims": null,
  "includeInGlobalAddressList": true,
  "ipWhitelisted": true,
  "isAdmin": true,
  "isDelegatedAdmin": true,
  "isEnforcedIn2Sv": true,
  "isEnrolledIn2Sv": true,
  "isMailboxSetup": true,
  "keywords": null,
  "kind": "admin#directory#user",
  "languages": null,
  "lastLoginTime": "1970-01-01T00:00:00Z",
  "locations": null,
  "name": {
    "displayName": "string",
    "familyName": "string",
    "fullName": "string",
    "givenName": "string"
  },
  "nonEditableAliases": [
    "string"
  ],
  "notes": null,
  "orgUnitPath": "string",
  "organizations": null,
  "password": "string",
  "phones": null,
  "posixAccounts": null,
  "primaryEmail": "string",
  "recoveryEmail": "string",
  "recoveryPhone": "string",
  "relations": null,
  "sshPublicKeys": null,
  "suspended": true,
  "suspensionReason": "string",
  "thumbnailPhotoEtag": "string",
  "thumbnailPhotoUrl": "string",
  "websites": null
}
```

The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|object|false|none|The list of the user's addresses. The maximum allowed data size for this field is 10KB.|
|agreedToTerms|boolean|false|read-only|Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.|
|aliases|[string]|false|read-only|Output only. The list of the user's alias email addresses.|
|archived|boolean|false|none|Indicates if user is archived.|
|changePasswordAtNextLogin|boolean|false|none|Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).|
|creationTime|string(date-time)|false|read-only|User's G Suite account creation time. (Read-only)|
|customSchemas|object|false|none|Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.|
|customerId|string|false|read-only|Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request.|
|deletionTime|string(date-time)|false|read-only|none|
|emails|object|false|none|The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.|
|etag|string|false|read-only|Output only. ETag of the resource.|
|externalIds|object|false|none|The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.|
|gender|object|false|none|The user's gender. The maximum allowed data size for this field is 1KB.|
|hashFunction|string|false|none|Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.|
|id|string|false|none|The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.|
|ims|object|false|none|The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.|
|includeInGlobalAddressList|boolean|false|none|Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).|
|ipWhitelisted|boolean|false|none|If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.|
|isAdmin|boolean|false|read-only|Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.|
|isDelegatedAdmin|boolean|false|read-only|Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).|
|isEnforcedIn2Sv|boolean|false|read-only|Output only. Is 2-step verification enforced (Read-only)|
|isEnrolledIn2Sv|boolean|false|read-only|Output only. Is enrolled in 2-step verification (Read-only)|
|isMailboxSetup|boolean|false|read-only|Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.|
|keywords|object|false|none|The list of the user's keywords. The maximum allowed data size for this field is 1KB.|
|kind|string|false|read-only|Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.|
|languages|object|false|none|The user's languages. The maximum allowed data size for this field is 1KB.|
|lastLoginTime|string(date-time)|false|read-only|User's last login time. (Read-only)|
|locations|object|false|none|The user's locations. The maximum allowed data size for this field is 10KB.|
|name|[UserName](#schemausername)|false|none|Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.|
|nonEditableAliases|[string]|false|read-only|Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.|
|notes|object|false|none|Notes for the user.|
|orgUnitPath|string|false|none|The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).|
|organizations|object|false|none|The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.|
|password|string|false|none|User's password|
|phones|object|false|none|The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.|
|posixAccounts|object|false|none|The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.|
|primaryEmail|string|false|none|The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.|
|recoveryEmail|string|false|none|Recovery email of the user.|
|recoveryPhone|string|false|none|Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.|
|relations|object|false|none|The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.|
|sshPublicKeys|object|false|none|A list of SSH public keys.|
|suspended|boolean|false|none|Indicates if user is suspended.|
|suspensionReason|string|false|read-only|Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.|
|thumbnailPhotoEtag|string|false|read-only|Output only. ETag of the user's photo (Read-only)|
|thumbnailPhotoUrl|string|false|read-only|Output only. The URL of the user's profile photo. The URL might be temporary or private.|
|websites|object|false|none|The user's websites. The maximum allowed data size for this field is 2KB.|

<h2 id="tocS_UserAbout">UserAbout</h2>
<!-- backwards compatibility -->
<a id="schemauserabout"></a>
<a id="schema_UserAbout"></a>
<a id="tocSuserabout"></a>
<a id="tocsuserabout"></a>

```json
{
  "contentType": "string",
  "value": "string"
}
```

JSON template for About (notes) of a user in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text.|
|value|string|false|none|Actual value of notes.|

<h2 id="tocS_UserAddress">UserAddress</h2>
<!-- backwards compatibility -->
<a id="schemauseraddress"></a>
<a id="schema_UserAddress"></a>
<a id="tocSuseraddress"></a>
<a id="tocsuseraddress"></a>

```json
{
  "country": "string",
  "countryCode": "string",
  "customType": "string",
  "extendedAddress": "string",
  "formatted": "string",
  "locality": "string",
  "poBox": "string",
  "postalCode": "string",
  "primary": true,
  "region": "string",
  "sourceIsStructured": true,
  "streetAddress": "string",
  "type": "string"
}
```

JSON template for address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|Country.|
|countryCode|string|false|none|Country code.|
|customType|string|false|none|Custom type.|
|extendedAddress|string|false|none|Extended Address.|
|formatted|string|false|none|Formatted address.|
|locality|string|false|none|Locality.|
|poBox|string|false|none|Other parts of address.|
|postalCode|string|false|none|Postal code.|
|primary|boolean|false|none|If this is user's primary address. Only one entry could be marked as primary.|
|region|string|false|none|Region.|
|sourceIsStructured|boolean|false|none|User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered.|
|streetAddress|string|false|none|Street.|
|type|string|false|none|Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.|

<h2 id="tocS_UserAlias">UserAlias</h2>
<!-- backwards compatibility -->
<a id="schemauseralias"></a>
<a id="schema_UserAlias"></a>
<a id="tocSuseralias"></a>
<a id="tocsuseralias"></a>

```json
{
  "alias": "string",
  "etag": "string",
  "id": "string",
  "kind": "string",
  "primaryEmail": "string"
}
```

The Directory API manages aliases, which are alternative email addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|The alias email address.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The unique ID for the user.|
|kind|string|false|none|The type of the API resource. For Alias resources, the value is `admin#directory#alias`.|
|primaryEmail|string|false|none|The user's primary email address.|

<h2 id="tocS_UserCustomProperties">UserCustomProperties</h2>
<!-- backwards compatibility -->
<a id="schemausercustomproperties"></a>
<a id="schema_UserCustomProperties"></a>
<a id="tocSusercustomproperties"></a>
<a id="tocsusercustomproperties"></a>

```json
{
  "property1": null,
  "property2": null
}
```

JSON template for a set of custom properties (i.e. all fields in a particular schema)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_UserEmail">UserEmail</h2>
<!-- backwards compatibility -->
<a id="schemauseremail"></a>
<a id="schema_UserEmail"></a>
<a id="tocSuseremail"></a>
<a id="tocsuseremail"></a>

```json
{
  "address": "string",
  "customType": "string",
  "primary": true,
  "public_key_encryption_certificates": {
    "certificate": "string",
    "is_default": true,
    "state": "string"
  },
  "type": "string"
}
```

JSON template for an email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Email id of the user.|
|customType|string|false|none|Custom Type.|
|primary|boolean|false|none|If this is user's primary email. Only one entry could be marked as primary.|
|public_key_encryption_certificates|object|false|none|Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.|

<h2 id="tocS_UserExternalId">UserExternalId</h2>
<!-- backwards compatibility -->
<a id="schemauserexternalid"></a>
<a id="schema_UserExternalId"></a>
<a id="tocSuserexternalid"></a>
<a id="tocsuserexternalid"></a>

```json
{
  "customType": "string",
  "type": "string",
  "value": "string"
}
```

JSON template for an externalId entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customType|string|false|none|Custom type.|
|type|string|false|none|The type of the Id.|
|value|string|false|none|The value of the id.|

<h2 id="tocS_UserGender">UserGender</h2>
<!-- backwards compatibility -->
<a id="schemausergender"></a>
<a id="schema_UserGender"></a>
<a id="tocSusergender"></a>
<a id="tocsusergender"></a>

```json
{
  "addressMeAs": "string",
  "customGender": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressMeAs|string|false|none|AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their.|
|customGender|string|false|none|Custom gender.|
|type|string|false|none|Gender.|

<h2 id="tocS_UserIm">UserIm</h2>
<!-- backwards compatibility -->
<a id="schemauserim"></a>
<a id="schema_UserIm"></a>
<a id="tocSuserim"></a>
<a id="tocsuserim"></a>

```json
{
  "customProtocol": "string",
  "customType": "string",
  "im": "string",
  "primary": true,
  "protocol": "string",
  "type": "string"
}
```

JSON template for instant messenger of an user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProtocol|string|false|none|Custom protocol.|
|customType|string|false|none|Custom type.|
|im|string|false|none|Instant messenger id.|
|primary|boolean|false|none|If this is user's primary im. Only one entry could be marked as primary.|
|protocol|string|false|none|Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.|

<h2 id="tocS_UserKeyword">UserKeyword</h2>
<!-- backwards compatibility -->
<a id="schemauserkeyword"></a>
<a id="schema_UserKeyword"></a>
<a id="tocSuserkeyword"></a>
<a id="tocsuserkeyword"></a>

```json
{
  "customType": "string",
  "type": "string",
  "value": "string"
}
```

JSON template for a keyword entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customType|string|false|none|Custom Type.|
|type|string|false|none|Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.|
|value|string|false|none|Keyword.|

<h2 id="tocS_UserLanguage">UserLanguage</h2>
<!-- backwards compatibility -->
<a id="schemauserlanguage"></a>
<a id="schema_UserLanguage"></a>
<a id="tocSuserlanguage"></a>
<a id="tocsuserlanguage"></a>

```json
{
  "customLanguage": "string",
  "languageCode": "string",
  "preference": "string"
}
```

JSON template for a language entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customLanguage|string|false|none|Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set.|
|languageCode|string|false|none|ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set.|
|preference|string|false|none|Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`.|

<h2 id="tocS_UserLocation">UserLocation</h2>
<!-- backwards compatibility -->
<a id="schemauserlocation"></a>
<a id="schema_UserLocation"></a>
<a id="tocSuserlocation"></a>
<a id="tocsuserlocation"></a>

```json
{
  "area": "string",
  "buildingId": "string",
  "customType": "string",
  "deskCode": "string",
  "floorName": "string",
  "floorSection": "string",
  "type": "string"
}
```

JSON template for a location entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.''|
|buildingId|string|false|none|Building Identifier.|
|customType|string|false|none|Custom Type.|
|deskCode|string|false|none|Most specific textual code of individual desk location.|
|floorName|string|false|none|Floor name/number.|
|floorSection|string|false|none|Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value.|

<h2 id="tocS_UserMakeAdmin">UserMakeAdmin</h2>
<!-- backwards compatibility -->
<a id="schemausermakeadmin"></a>
<a id="schema_UserMakeAdmin"></a>
<a id="tocSusermakeadmin"></a>
<a id="tocsusermakeadmin"></a>

```json
{
  "status": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|false|none|Indicates the administrator status of the user.|

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
{
  "displayName": "string",
  "familyName": "string",
  "fullName": "string",
  "givenName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The user's display name. Limit: 256 characters.|
|familyName|string|false|none|The user's last name. Required when creating a user account.|
|fullName|string|false|none|The user's full name formed by concatenating the first and last name values.|
|givenName|string|false|none|The user's first name. Required when creating a user account.|

<h2 id="tocS_UserOrganization">UserOrganization</h2>
<!-- backwards compatibility -->
<a id="schemauserorganization"></a>
<a id="schema_UserOrganization"></a>
<a id="tocSuserorganization"></a>
<a id="tocsuserorganization"></a>

```json
{
  "costCenter": "string",
  "customType": "string",
  "department": "string",
  "description": "string",
  "domain": "string",
  "fullTimeEquivalent": 0,
  "location": "string",
  "name": "string",
  "primary": true,
  "symbol": "string",
  "title": "string",
  "type": "string"
}
```

JSON template for an organization entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costCenter|string|false|none|The cost center of the users department.|
|customType|string|false|none|Custom type.|
|department|string|false|none|Department within the organization.|
|description|string|false|none|Description of the organization.|
|domain|string|false|none|The domain to which the organization belongs to.|
|fullTimeEquivalent|integer(int32)|false|none|The full-time equivalent millipercent within the organization (100000 = 100%).|
|location|string|false|none|Location of the organization. This need not be fully qualified address.|
|name|string|false|none|Name of the organization|
|primary|boolean|false|none|If it user's primary organization.|
|symbol|string|false|none|Symbol of the organization.|
|title|string|false|none|Title (designation) of the user in the organization.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.|

<h2 id="tocS_UserPhone">UserPhone</h2>
<!-- backwards compatibility -->
<a id="schemauserphone"></a>
<a id="schema_UserPhone"></a>
<a id="tocSuserphone"></a>
<a id="tocsuserphone"></a>

```json
{
  "customType": "string",
  "primary": true,
  "type": "string",
  "value": "string"
}
```

JSON template for a phone entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customType|string|false|none|Custom Type.|
|primary|boolean|false|none|If this is user's primary phone or not.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.|
|value|string|false|none|Phone number.|

<h2 id="tocS_UserPhoto">UserPhoto</h2>
<!-- backwards compatibility -->
<a id="schemauserphoto"></a>
<a id="schema_UserPhoto"></a>
<a id="tocSuserphoto"></a>
<a id="tocsuserphoto"></a>

```json
{
  "etag": "string",
  "height": 0,
  "id": "string",
  "kind": "admin#directory#user#photo",
  "mimeType": "string",
  "photoData": "string",
  "primaryEmail": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|height|integer(int32)|false|none|Height of the photo in pixels.|
|id|string|false|none|The ID the API uses to uniquely identify the user.|
|kind|string|false|none|The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.|
|mimeType|string|false|none|The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.|
|photoData|string(byte)|false|none|The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.|
|primaryEmail|string|false|none|The user's primary email address.|
|width|integer(int32)|false|none|Width of the photo in pixels.|

<h2 id="tocS_UserPosixAccount">UserPosixAccount</h2>
<!-- backwards compatibility -->
<a id="schemauserposixaccount"></a>
<a id="schema_UserPosixAccount"></a>
<a id="tocSuserposixaccount"></a>
<a id="tocsuserposixaccount"></a>

```json
{
  "accountId": "string",
  "gecos": "string",
  "gid": "string",
  "homeDirectory": "string",
  "operatingSystemType": "string",
  "primary": true,
  "shell": "string",
  "systemId": "string",
  "uid": "string",
  "username": "string"
}
```

JSON template for a POSIX account entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|A POSIX account field identifier.|
|gecos|string|false|none|The GECOS (user information) for this account.|
|gid|string(uint64)|false|none|The default group ID.|
|homeDirectory|string|false|none|The path to the home directory for this account.|
|operatingSystemType|string|false|none|The operating system type for this account.|
|primary|boolean|false|none|If this is user's primary account within the SystemId.|
|shell|string|false|none|The path to the login shell for this account.|
|systemId|string|false|none|System identifier for which account Username or Uid apply to.|
|uid|string(uint64)|false|none|The POSIX compliant user ID.|
|username|string|false|none|The username of the account.|

<h2 id="tocS_UserRelation">UserRelation</h2>
<!-- backwards compatibility -->
<a id="schemauserrelation"></a>
<a id="schema_UserRelation"></a>
<a id="tocSuserrelation"></a>
<a id="tocsuserrelation"></a>

```json
{
  "customType": "string",
  "type": "string",
  "value": "string"
}
```

JSON template for a relation entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customType|string|false|none|Custom Type.|
|type|string|false|none|The relation of the user. Some of the possible values are mother father sister brother manager assistant partner.|
|value|string|false|none|The name of the relation.|

<h2 id="tocS_UserSshPublicKey">UserSshPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemausersshpublickey"></a>
<a id="schema_UserSshPublicKey"></a>
<a id="tocSusersshpublickey"></a>
<a id="tocsusersshpublickey"></a>

```json
{
  "expirationTimeUsec": "string",
  "fingerprint": "string",
  "key": "string"
}
```

JSON template for a POSIX account entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationTimeUsec|string(int64)|false|none|An expiration time in microseconds since epoch.|
|fingerprint|string|false|read-only|A SHA-256 fingerprint of the SSH public key. (Read-only)|
|key|string|false|none|An SSH public key.|

<h2 id="tocS_UserUndelete">UserUndelete</h2>
<!-- backwards compatibility -->
<a id="schemauserundelete"></a>
<a id="schema_UserUndelete"></a>
<a id="tocSuserundelete"></a>
<a id="tocsuserundelete"></a>

```json
{
  "orgUnitPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orgUnitPath|string|false|none|OrgUnit of User|

<h2 id="tocS_UserWebsite">UserWebsite</h2>
<!-- backwards compatibility -->
<a id="schemauserwebsite"></a>
<a id="schema_UserWebsite"></a>
<a id="tocSuserwebsite"></a>
<a id="tocsuserwebsite"></a>

```json
{
  "customType": "string",
  "primary": true,
  "type": "string",
  "value": "string"
}
```

JSON template for a website entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customType|string|false|none|Custom Type.|
|primary|boolean|false|none|If this is user's primary website or not.|
|type|string|false|none|Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.|
|value|string|false|none|Website.|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#users",
  "nextPageToken": "string",
  "trigger_event": "string",
  "users": [
    {
      "addresses": null,
      "agreedToTerms": true,
      "aliases": [
        "string"
      ],
      "archived": true,
      "changePasswordAtNextLogin": true,
      "creationTime": "1970-01-01T00:00:00Z",
      "customSchemas": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "customerId": "string",
      "deletionTime": "1970-01-01T00:00:00Z",
      "emails": null,
      "etag": "string",
      "externalIds": null,
      "gender": null,
      "hashFunction": "string",
      "id": "string",
      "ims": null,
      "includeInGlobalAddressList": true,
      "ipWhitelisted": true,
      "isAdmin": true,
      "isDelegatedAdmin": true,
      "isEnforcedIn2Sv": true,
      "isEnrolledIn2Sv": true,
      "isMailboxSetup": true,
      "keywords": null,
      "kind": "admin#directory#user",
      "languages": null,
      "lastLoginTime": "1970-01-01T00:00:00Z",
      "locations": null,
      "name": {
        "displayName": "string",
        "familyName": "string",
        "fullName": "string",
        "givenName": "string"
      },
      "nonEditableAliases": [
        "string"
      ],
      "notes": null,
      "orgUnitPath": "string",
      "organizations": null,
      "password": "string",
      "phones": null,
      "posixAccounts": null,
      "primaryEmail": "string",
      "recoveryEmail": "string",
      "recoveryPhone": "string",
      "relations": null,
      "sshPublicKeys": null,
      "suspended": true,
      "suspensionReason": "string",
      "thumbnailPhotoEtag": "string",
      "thumbnailPhotoUrl": "string",
      "websites": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|Kind of resource this is.|
|nextPageToken|string|false|none|Token used to access next page of this result.|
|trigger_event|string|false|none|Event that triggered this response (only used in case of Push Response)|
|users|[[User](#schemauser)]|false|none|A list of user objects.|

<h2 id="tocS_VerificationCode">VerificationCode</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcode"></a>
<a id="schema_VerificationCode"></a>
<a id="tocSverificationcode"></a>
<a id="tocsverificationcode"></a>

```json
{
  "etag": "string",
  "kind": "admin#directory#verificationCode",
  "userId": "string",
  "verificationCode": "string"
}
```

The Directory API allows you to view, generate, and invalidate backup verification codes for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|kind|string|false|none|The type of the resource. This is always `admin#directory#verificationCode`.|
|userId|string|false|none|The obfuscated unique ID of the user.|
|verificationCode|string|false|none|A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.|

<h2 id="tocS_VerificationCodes">VerificationCodes</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcodes"></a>
<a id="schema_VerificationCodes"></a>
<a id="tocSverificationcodes"></a>
<a id="tocsverificationcodes"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "kind": "admin#directory#verificationCode",
      "userId": "string",
      "verificationCode": "string"
    }
  ],
  "kind": "admin#directory#verificationCodesList"
}
```

JSON response template for list verification codes operation in Directory API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|items|[[VerificationCode](#schemaverificationcode)]|false|none|A list of verification code resources.|
|kind|string|false|none|The type of the resource. This is always `admin#directory#verificationCodesList`.|
