<h1 id="chrome-management-api">Chrome Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Chrome Management API is a suite of services that allows Chrome administrators to view, manage and gain insights on their Chrome OS and Chrome Browser devices.

Base URLs:

* <a href="https://chromemanagement.googleapis.com/">https://chromemanagement.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="http://developers.google.com/chrome/management/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chrome.management.appdetails.readonly|See detailed information about apps installed on Chrome browsers and devices managed by your organization|
|https://www.googleapis.com/auth/chrome.management.reports.readonly|See reports about devices and Chrome browsers managed within your organization|
|https://www.googleapis.com/auth/chrome.management.telemetry.readonly|See basic device and telemetry information collected from Chrome OS devices or users managed within your organization|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/chrome.management.appdetails.readonly|See detailed information about apps installed on Chrome browsers and devices managed by your organization|
|https://www.googleapis.com/auth/chrome.management.reports.readonly|See reports about devices and Chrome browsers managed within your organization|
|https://www.googleapis.com/auth/chrome.management.telemetry.readonly|See basic device and telemetry information collected from Chrome OS devices or users managed within your organization|

<h1 id="chrome-management-api-customers">customers</h1>

## chromemanagement.customers.apps.countChromeAppRequests

<a id="opIdchromemanagement.customers.apps.countChromeAppRequests"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps:countChromeAppRequests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/apps:countChromeAppRequests`

Generate summary of app installation requests.

<h3 id="chromemanagementcustomersappscountchromeapprequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|orderBy|query|string|false|Field used to order results. Supported fields: * request_count * latest_request_time|
|orgUnitId|query|string|false|The ID of the organizational unit.|
|pageSize|query|integer|false|Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.|
|pageToken|query|string|false|Token to specify the page of the request to be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "requestedApps": [
    {
      "appDetails": "string",
      "appId": "string",
      "detailUri": "string",
      "displayName": "string",
      "iconUri": "string",
      "latestRequestTime": "string",
      "requestCount": "string"
    }
  ],
  "totalSize": 0
}
```

<h3 id="chromemanagementcustomersappscountchromeapprequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeAppRequestsResponse](#schemagooglechromemanagementv1countchromeapprequestsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.appdetails.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.appdetails.readonly )
</aside>

## chromemanagement.customers.reports.countChromeBrowsersNeedingAttention

<a id="opIdchromemanagement.customers.reports.countChromeBrowsersNeedingAttention"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countChromeBrowsersNeedingAttention \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countChromeBrowsersNeedingAttention`

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

<h3 id="chromemanagementcustomersreportscountchromebrowsersneedingattention-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer ID or "my_customer" prefixed with "customers/".|
|orgUnitId|query|string|false|Optional. The ID of the organizational unit. If omitted, all data will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "noRecentActivityCount": "string",
  "pendingBrowserUpdateCount": "string",
  "recentlyEnrolledCount": "string"
}
```

<h3 id="chromemanagementcustomersreportscountchromebrowsersneedingattention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse](#schemagooglechromemanagementv1countchromebrowsersneedingattentionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.countChromeDevicesReachingAutoExpirationDate

<a id="opIdchromemanagement.customers.reports.countChromeDevicesReachingAutoExpirationDate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countChromeDevicesReachingAutoExpirationDate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate`

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

<h3 id="chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer ID or "my_customer" prefixed with "customers/".|
|maxAueDate|query|string|false|Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.|
|minAueDate|query|string|false|Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.|
|orgUnitId|query|string|false|Optional. The organizational unit ID, if omitted, will return data for all organizational units.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "deviceAueCountReports": [
    {
      "aueMonth": "MONTH_UNSPECIFIED",
      "aueYear": "string",
      "count": "string",
      "expired": true,
      "model": "string"
    }
  ]
}
```

<h3 id="chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse](#schemagooglechromemanagementv1countchromedevicesreachingautoexpirationdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.countChromeDevicesThatNeedAttention

<a id="opIdchromemanagement.customers.reports.countChromeDevicesThatNeedAttention"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countChromeDevicesThatNeedAttention \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countChromeDevicesThatNeedAttention`

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

<h3 id="chromemanagementcustomersreportscountchromedevicesthatneedattention-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer ID or "my_customer" prefixed with "customers/".|
|orgUnitId|query|string|false|Optional. The ID of the organizational unit. If omitted, all data will be returned.|
|readMask|query|string|false|Required. Mask of the fields that should be populated in the returned report.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "noRecentPolicySyncCount": "string",
  "noRecentUserActivityCount": "string",
  "osVersionNotCompliantCount": "string",
  "pendingUpdate": "string",
  "unsupportedPolicyCount": "string"
}
```

<h3 id="chromemanagementcustomersreportscountchromedevicesthatneedattention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse](#schemagooglechromemanagementv1countchromedevicesthatneedattentionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.countChromeHardwareFleetDevices

<a id="opIdchromemanagement.customers.reports.countChromeHardwareFleetDevices"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countChromeHardwareFleetDevices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countChromeHardwareFleetDevices`

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

<h3 id="chromemanagementcustomersreportscountchromehardwarefleetdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. The customer ID or "my_customer".|
|orgUnitId|query|string|false|Optional. The ID of the organizational unit. If omitted, all data will be returned.|
|readMask|query|string|false|Required. Mask of the fields that should be populated in the returned report.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "cpuReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "memoryReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "modelReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "storageReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ]
}
```

<h3 id="chromemanagementcustomersreportscountchromehardwarefleetdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse](#schemagooglechromemanagementv1countchromehardwarefleetdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.countChromeVersions

<a id="opIdchromemanagement.customers.reports.countChromeVersions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countChromeVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countChromeVersions`

Generate report of installed Chrome versions.

<h3 id="chromemanagementcustomersreportscountchromeversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|filter|query|string|false|Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date|
|orgUnitId|query|string|false|The ID of the organizational unit.|
|pageSize|query|integer|false|Maximum number of results to return. Maximum and default are 100.|
|pageToken|query|string|false|Token to specify the page of the request to be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "browserVersions": [
    {
      "channel": "RELEASE_CHANNEL_UNSPECIFIED",
      "count": "string",
      "deviceOsVersion": "string",
      "system": "DEVICE_SYSTEM_UNSPECIFIED",
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="chromemanagementcustomersreportscountchromeversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountChromeVersionsResponse](#schemagooglechromemanagementv1countchromeversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.countInstalledApps

<a id="opIdchromemanagement.customers.reports.countInstalledApps"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:countInstalledApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:countInstalledApps`

Generate report of app installations.

<h3 id="chromemanagementcustomersreportscountinstalledapps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|filter|query|string|false|Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id|
|orderBy|query|string|false|Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id|
|orgUnitId|query|string|false|The ID of the organizational unit.|
|pageSize|query|integer|false|Maximum number of results to return. Maximum and default are 100.|
|pageToken|query|string|false|Token to specify the page of the request to be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "installedApps": [
    {
      "appId": "string",
      "appInstallType": "APP_INSTALL_TYPE_UNSPECIFIED",
      "appSource": "APP_SOURCE_UNSPECIFIED",
      "appType": "APP_TYPE_UNSPECIFIED",
      "browserDeviceCount": "string",
      "description": "string",
      "disabled": true,
      "displayName": "string",
      "homepageUri": "string",
      "osUserCount": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="chromemanagementcustomersreportscountinstalledapps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1CountInstalledAppsResponse](#schemagooglechromemanagementv1countinstalledappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.reports.findInstalledAppDevices

<a id="opIdchromemanagement.customers.reports.findInstalledAppDevices"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports:findInstalledAppDevices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{customer}/reports:findInstalledAppDevices`

Generate report of managed Chrome browser devices that have a specified app installed.

<h3 id="chromemanagementcustomersreportsfindinstalledappdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|appId|query|string|false|Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).|
|appType|query|string|false|Type of the app.|
|filter|query|string|false|Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date|
|orderBy|query|string|false|Field used to order results. Supported order by fields: * machine * device_id|
|orgUnitId|query|string|false|The ID of the organizational unit.|
|pageSize|query|integer|false|Maximum number of results to return. Maximum and default are 100.|
|pageToken|query|string|false|Token to specify the page of the request to be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|appType|APP_TYPE_UNSPECIFIED|
|appType|EXTENSION|
|appType|APP|
|appType|THEME|
|appType|HOSTED_APP|
|appType|ANDROID_APP|
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
      "deviceId": "string",
      "machine": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="chromemanagementcustomersreportsfindinstalledappdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1FindInstalledAppDevicesResponse](#schemagooglechromemanagementv1findinstalledappdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.reports.readonly )
</aside>

## chromemanagement.customers.telemetry.users.get

<a id="opIdchromemanagement.customers.telemetry.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Get telemetry user.

<h3 id="chromemanagementcustomerstelemetryusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the `TelemetryUser` to return.|
|readMask|query|string|false|Read mask to specify which fields to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "orgUnitId": "string",
  "userDevice": [
    {
      "audioStatusReport": [
        {
          "inputDevice": "string",
          "inputGain": 0,
          "inputMute": true,
          "outputDevice": "string",
          "outputMute": true,
          "outputVolume": 0,
          "reportTime": "string"
        }
      ],
      "deviceId": "string",
      "peripheralsReport": [
        {
          "reportTime": "string",
          "usbPeripheralReport": [
            {
              "categories": [
                "string"
              ],
              "classId": 0,
              "firmwareVersion": "string",
              "name": "string",
              "pid": 0,
              "subclassId": 0,
              "vendor": "string",
              "vid": 0
            }
          ]
        }
      ]
    }
  ],
  "userEmail": "string",
  "userId": "string"
}
```

<h3 id="chromemanagementcustomerstelemetryusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1TelemetryUser](#schemagooglechromemanagementv1telemetryuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly )
</aside>

## chromemanagement.customers.telemetry.devices.list

<a id="opIdchromemanagement.customers.telemetry.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/telemetry/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/telemetry/devices`

List all telemetry devices.

<h3 id="chromemanagementcustomerstelemetrydeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|filter|query|string|false|Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".|
|pageSize|query|integer|false|Maximum number of results to return. Default value is 100. Maximum value is 1000.|
|pageToken|query|string|false|Token to specify next page in the list.|
|readMask|query|string|false|Required. Read mask to specify which fields to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
      "audioStatusReport": [
        {
          "inputDevice": "string",
          "inputGain": 0,
          "inputMute": true,
          "outputDevice": "string",
          "outputMute": true,
          "outputVolume": 0,
          "reportTime": "string"
        }
      ],
      "batteryInfo": [
        {
          "designCapacity": "string",
          "designMinVoltage": 0,
          "manufactureDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "manufacturer": "string",
          "serialNumber": "string",
          "technology": "string"
        }
      ],
      "batteryStatusReport": [
        {
          "batteryHealth": "BATTERY_HEALTH_UNSPECIFIED",
          "cycleCount": 0,
          "fullChargeCapacity": "string",
          "reportTime": "string",
          "sample": [
            {
              "chargeRate": 0,
              "current": "string",
              "dischargeRate": 0,
              "remainingCapacity": "string",
              "reportTime": "string",
              "status": "string",
              "temperature": 0,
              "voltage": "string"
            }
          ],
          "serialNumber": "string"
        }
      ],
      "bootPerformanceReport": [
        {
          "bootUpDuration": "string",
          "bootUpTime": "string",
          "reportTime": "string",
          "shutdownDuration": "string",
          "shutdownReason": "SHUTDOWN_REASON_UNSPECIFIED",
          "shutdownTime": "string"
        }
      ],
      "cpuInfo": [
        {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "keylockerConfigured": true,
          "keylockerSupported": true,
          "maxClockSpeed": 0,
          "model": "string"
        }
      ],
      "cpuStatusReport": [
        {
          "cpuTemperatureInfo": [
            {
              "label": "string",
              "temperatureCelsius": 0
            }
          ],
          "cpuUtilizationPct": 0,
          "reportTime": "string",
          "sampleFrequency": "string"
        }
      ],
      "customer": "string",
      "deviceId": "string",
      "graphicsInfo": {
        "adapterInfo": {
          "adapter": "string",
          "deviceId": "string",
          "driverVersion": "string"
        },
        "displayDevices": [
          {
            "displayHeightMm": 0,
            "displayName": "string",
            "displayWidthMm": 0,
            "internal": true,
            "manufactureYear": 0,
            "manufacturerId": "string",
            "modelId": 0
          }
        ],
        "eprivacySupported": true,
        "touchScreenInfo": {
          "devices": [
            {
              "displayName": "string",
              "stylusCapable": true,
              "touchPointCount": 0
            }
          ],
          "touchpadLibrary": "string"
        }
      },
      "graphicsStatusReport": [
        {
          "displays": [
            {
              "deviceId": "string",
              "displayName": "string",
              "isInternal": true,
              "refreshRate": 0,
              "resolutionHeight": 0,
              "resolutionWidth": 0
            }
          ],
          "reportTime": "string"
        }
      ],
      "memoryInfo": {
        "availableRamBytes": "string",
        "totalMemoryEncryption": {
          "encryptionAlgorithm": "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
          "encryptionState": "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
          "keyLength": "string",
          "maxKeys": "string"
        },
        "totalRamBytes": "string"
      },
      "memoryStatusReport": [
        {
          "pageFaults": 0,
          "reportTime": "string",
          "sampleFrequency": "string",
          "systemRamFreeBytes": "string"
        }
      ],
      "name": "string",
      "networkDiagnosticsReport": [
        {
          "httpsLatencyData": {
            "latency": "string",
            "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
          },
          "reportTime": "string"
        }
      ],
      "networkInfo": {
        "networkDevices": [
          {
            "iccid": "string",
            "imei": "string",
            "macAddress": "string",
            "mdn": "string",
            "meid": "string",
            "type": "NETWORK_DEVICE_TYPE_UNSPECIFIED"
          }
        ]
      },
      "networkStatusReport": [
        {
          "connectionState": "NETWORK_CONNECTION_STATE_UNSPECIFIED",
          "connectionType": "NETWORK_TYPE_UNSPECIFIED",
          "encryptionOn": true,
          "gatewayIpAddress": "string",
          "guid": "string",
          "lanIpAddress": "string",
          "receivingBitRateMbps": "string",
          "reportTime": "string",
          "sampleFrequency": "string",
          "signalStrengthDbm": 0,
          "transmissionBitRateMbps": "string",
          "transmissionPowerDbm": 0,
          "wifiLinkQuality": "string",
          "wifiPowerManagementEnabled": true
        }
      ],
      "orgUnitId": "string",
      "osUpdateStatus": [
        {
          "lastRebootTime": "string",
          "lastUpdateCheckTime": "string",
          "lastUpdateTime": "string",
          "newPlatformVersion": "string",
          "newRequestedPlatformVersion": "string",
          "updateState": "UPDATE_STATE_UNSPECIFIED"
        }
      ],
      "peripheralsReport": [
        {
          "reportTime": "string",
          "usbPeripheralReport": [
            {
              "categories": [
                "string"
              ],
              "classId": 0,
              "firmwareVersion": "string",
              "name": "string",
              "pid": 0,
              "subclassId": 0,
              "vendor": "string",
              "vid": 0
            }
          ]
        }
      ],
      "serialNumber": "string",
      "storageInfo": {
        "availableDiskBytes": "string",
        "totalDiskBytes": "string",
        "volume": [
          {
            "storageFreeBytes": "string",
            "storageTotalBytes": "string",
            "volumeId": "string"
          }
        ]
      },
      "storageStatusReport": [
        {
          "disk": [
            {
              "bytesReadThisSession": "string",
              "bytesWrittenThisSession": "string",
              "discardTimeThisSession": "string",
              "health": "string",
              "ioTimeThisSession": "string",
              "manufacturer": "string",
              "model": "string",
              "readTimeThisSession": "string",
              "serialNumber": "string",
              "sizeBytes": "string",
              "type": "string",
              "volumeIds": [
                "string"
              ],
              "writeTimeThisSession": "string"
            }
          ],
          "reportTime": "string"
        }
      ],
      "thunderboltInfo": [
        {
          "securityLevel": "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="chromemanagementcustomerstelemetrydeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1ListTelemetryDevicesResponse](#schemagooglechromemanagementv1listtelemetrydevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly )
</aside>

## chromemanagement.customers.telemetry.events.list

<a id="opIdchromemanagement.customers.telemetry.events.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/telemetry/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/telemetry/events`

List telemetry events.

<h3 id="chromemanagementcustomerstelemetryeventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|filter|query|string|false|Optional. Only include resources that match the filter. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".|
|pageSize|query|integer|false|Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.|
|pageToken|query|string|false|Optional. Token to specify next page in the list.|
|readMask|query|string|false|Required. Read mask to specify which fields to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "telemetryEvents": [
    {
      "audioSevereUnderrunEvent": {},
      "device": {
        "deviceId": "string",
        "orgUnitId": "string"
      },
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "httpsLatencyChangeEvent": {
        "httpsLatencyRoutineData": {
          "latency": "string",
          "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
        },
        "httpsLatencyState": "HTTPS_LATENCY_STATE_UNSPECIFIED"
      },
      "name": "string",
      "reportTime": "string",
      "usbPeripheralsEvent": {
        "usbPeripheralReport": [
          {
            "categories": [
              "string"
            ],
            "classId": 0,
            "firmwareVersion": "string",
            "name": "string",
            "pid": 0,
            "subclassId": 0,
            "vendor": "string",
            "vid": 0
          }
        ]
      },
      "user": {
        "email": "string",
        "orgUnitId": "string"
      }
    }
  ]
}
```

<h3 id="chromemanagementcustomerstelemetryeventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1ListTelemetryEventsResponse](#schemagooglechromemanagementv1listtelemetryeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly )
</aside>

## chromemanagement.customers.telemetry.users.list

<a id="opIdchromemanagement.customers.telemetry.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/telemetry/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/telemetry/users`

List all telemetry users.

<h3 id="chromemanagementcustomerstelemetryuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Customer id or "my_customer" to use the customer associated to the account making the request.|
|filter|query|string|false|Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id |
|pageSize|query|integer|false|Maximum number of results to return. Default value is 100. Maximum value is 1000.|
|pageToken|query|string|false|Token to specify next page in the list.|
|readMask|query|string|false|Read mask to specify which fields to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "telemetryUsers": [
    {
      "customer": "string",
      "name": "string",
      "orgUnitId": "string",
      "userDevice": [
        {
          "audioStatusReport": [
            {
              "inputDevice": "string",
              "inputGain": 0,
              "inputMute": true,
              "outputDevice": "string",
              "outputMute": true,
              "outputVolume": 0,
              "reportTime": "string"
            }
          ],
          "deviceId": "string",
          "peripheralsReport": [
            {
              "reportTime": "string",
              "usbPeripheralReport": [
                {
                  "categories": [
                    "string"
                  ],
                  "classId": 0,
                  "firmwareVersion": "string",
                  "name": "string",
                  "pid": 0,
                  "subclassId": 0,
                  "vendor": "string",
                  "vid": 0
                }
              ]
            }
          ]
        }
      ],
      "userEmail": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="chromemanagementcustomerstelemetryuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleChromeManagementV1ListTelemetryUsersResponse](#schemagooglechromemanagementv1listtelemetryusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/chrome.management.telemetry.readonly )
</aside>

# Schemas

<h2 id="tocS_GoogleChromeManagementV1AndroidAppInfo">GoogleChromeManagementV1AndroidAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1androidappinfo"></a>
<a id="schema_GoogleChromeManagementV1AndroidAppInfo"></a>
<a id="tocSgooglechromemanagementv1androidappinfo"></a>
<a id="tocsgooglechromemanagementv1androidappinfo"></a>

```json
{
  "permissions": [
    {
      "type": "string"
    }
  ]
}
```

Android app information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[[GoogleChromeManagementV1AndroidAppPermission](#schemagooglechromemanagementv1androidapppermission)]|false|read-only|Output only. Permissions requested by an Android app.|

<h2 id="tocS_GoogleChromeManagementV1AndroidAppPermission">GoogleChromeManagementV1AndroidAppPermission</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1androidapppermission"></a>
<a id="schema_GoogleChromeManagementV1AndroidAppPermission"></a>
<a id="tocSgooglechromemanagementv1androidapppermission"></a>
<a id="tocsgooglechromemanagementv1androidapppermission"></a>

```json
{
  "type": "string"
}
```

Permission requested by an Android app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|Output only. The type of the permission.|

<h2 id="tocS_GoogleChromeManagementV1AppDetails">GoogleChromeManagementV1AppDetails</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1appdetails"></a>
<a id="schema_GoogleChromeManagementV1AppDetails"></a>
<a id="tocSgooglechromemanagementv1appdetails"></a>
<a id="tocsgooglechromemanagementv1appdetails"></a>

```json
{
  "androidAppInfo": {
    "permissions": [
      {
        "type": "string"
      }
    ]
  },
  "appId": "string",
  "chromeAppInfo": {
    "googleOwned": true,
    "isCwsHosted": true,
    "isExtensionPolicySupported": true,
    "isKioskOnly": true,
    "isTheme": true,
    "kioskEnabled": true,
    "minUserCount": 0,
    "permissions": [
      {
        "accessUserData": true,
        "documentationUri": "string",
        "type": "string"
      }
    ],
    "siteAccess": [
      {
        "hostMatch": "string"
      }
    ],
    "supportEnabled": true,
    "type": "ITEM_TYPE_UNSPECIFIED"
  },
  "description": "string",
  "detailUri": "string",
  "displayName": "string",
  "firstPublishTime": "string",
  "homepageUri": "string",
  "iconUri": "string",
  "isPaidApp": true,
  "latestPublishTime": "string",
  "name": "string",
  "privacyPolicyUri": "string",
  "publisher": "string",
  "reviewNumber": "string",
  "reviewRating": 0,
  "revisionId": "string",
  "serviceError": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "type": "APP_ITEM_TYPE_UNSPECIFIED"
}
```

Resource representing app details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidAppInfo|[GoogleChromeManagementV1AndroidAppInfo](#schemagooglechromemanagementv1androidappinfo)|false|none|Output only. Android app information.|
|appId|string|false|read-only|Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app.|
|chromeAppInfo|[GoogleChromeManagementV1ChromeAppInfo](#schemagooglechromemanagementv1chromeappinfo)|false|none|Output only. Chrome Web Store app information.|
|description|string|false|read-only|Output only. App's description.|
|detailUri|string|false|read-only|Output only. The uri for the detail page of the item.|
|displayName|string|false|read-only|Output only. App's display name.|
|firstPublishTime|string(google-datetime)|false|read-only|Output only. First published time.|
|homepageUri|string|false|read-only|Output only. Home page or Website uri.|
|iconUri|string|false|read-only|Output only. A link to an image that can be used as an icon for the product.|
|isPaidApp|boolean|false|read-only|Output only. Indicates if the app has to be paid for OR has paid content.|
|latestPublishTime|string(google-datetime)|false|read-only|Output only. Latest published time.|
|name|string|false|read-only|Output only. Format: name=customers/{customer_id}/apps/{chrome\|android\|web}/{app_id}@{version}|
|privacyPolicyUri|string|false|read-only|Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found.|
|publisher|string|false|read-only|Output only. The publisher of the item.|
|reviewNumber|string(int64)|false|read-only|Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app.|
|reviewRating|number(float)|false|read-only|Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app.|
|revisionId|string|false|read-only|Output only. App version. A new revision is committed whenever a new version of the app is published.|
|serviceError|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|Output only. Information about a partial service error if applicable.|
|type|string|false|read-only|Output only. App type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|APP_ITEM_TYPE_UNSPECIFIED|
|type|CHROME|
|type|ANDROID|
|type|WEB|

<h2 id="tocS_GoogleChromeManagementV1AudioStatusReport">GoogleChromeManagementV1AudioStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1audiostatusreport"></a>
<a id="schema_GoogleChromeManagementV1AudioStatusReport"></a>
<a id="tocSgooglechromemanagementv1audiostatusreport"></a>
<a id="tocsgooglechromemanagementv1audiostatusreport"></a>

```json
{
  "inputDevice": "string",
  "inputGain": 0,
  "inputMute": true,
  "outputDevice": "string",
  "outputMute": true,
  "outputVolume": 0,
  "reportTime": "string"
}
```

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputDevice|string|false|read-only|Output only. Active input device's name.|
|inputGain|integer(int32)|false|read-only|Output only. Active input device's gain in [0, 100].|
|inputMute|boolean|false|read-only|Output only. Is active input device mute or not.|
|outputDevice|string|false|read-only|Output only. Active output device's name.|
|outputMute|boolean|false|read-only|Output only. Is active output device mute or not.|
|outputVolume|integer(int32)|false|read-only|Output only. Active output device's volume in [0, 100].|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the sample was collected on device.|

<h2 id="tocS_GoogleChromeManagementV1BatteryInfo">GoogleChromeManagementV1BatteryInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1batteryinfo"></a>
<a id="schema_GoogleChromeManagementV1BatteryInfo"></a>
<a id="tocSgooglechromemanagementv1batteryinfo"></a>
<a id="tocsgooglechromemanagementv1batteryinfo"></a>

```json
{
  "designCapacity": "string",
  "designMinVoltage": 0,
  "manufactureDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "manufacturer": "string",
  "serialNumber": "string",
  "technology": "string"
}
```

Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|designCapacity|string(int64)|false|read-only|Output only. Design capacity (mAmpere-hours).|
|designMinVoltage|integer(int32)|false|read-only|Output only. Designed minimum output voltage (mV)|
|manufactureDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|Output only. The date the battery was manufactured.|
|manufacturer|string|false|read-only|Output only. Battery manufacturer.|
|serialNumber|string|false|read-only|Output only. Battery serial number.|
|technology|string|false|read-only|Output only. Technology of the battery. Example: Li-ion|

<h2 id="tocS_GoogleChromeManagementV1BatterySampleReport">GoogleChromeManagementV1BatterySampleReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1batterysamplereport"></a>
<a id="schema_GoogleChromeManagementV1BatterySampleReport"></a>
<a id="tocSgooglechromemanagementv1batterysamplereport"></a>
<a id="tocsgooglechromemanagementv1batterysamplereport"></a>

```json
{
  "chargeRate": 0,
  "current": "string",
  "dischargeRate": 0,
  "remainingCapacity": "string",
  "reportTime": "string",
  "status": "string",
  "temperature": 0,
  "voltage": "string"
}
```

Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargeRate|integer(int32)|false|read-only|Output only. Battery charge percentage.|
|current|string(int64)|false|read-only|Output only. Battery current (mA).|
|dischargeRate|integer(int32)|false|read-only|Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged.|
|remainingCapacity|string(int64)|false|read-only|Output only. Battery remaining capacity (mAmpere-hours).|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the sample was collected on device|
|status|string|false|read-only|Output only. Battery status read from sysfs. Example: Discharging|
|temperature|integer(int32)|false|read-only|Output only. Temperature in Celsius degrees.|
|voltage|string(int64)|false|read-only|Output only. Battery voltage (millivolt).|

<h2 id="tocS_GoogleChromeManagementV1BatteryStatusReport">GoogleChromeManagementV1BatteryStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1batterystatusreport"></a>
<a id="schema_GoogleChromeManagementV1BatteryStatusReport"></a>
<a id="tocSgooglechromemanagementv1batterystatusreport"></a>
<a id="tocsgooglechromemanagementv1batterystatusreport"></a>

```json
{
  "batteryHealth": "BATTERY_HEALTH_UNSPECIFIED",
  "cycleCount": 0,
  "fullChargeCapacity": "string",
  "reportTime": "string",
  "sample": [
    {
      "chargeRate": 0,
      "current": "string",
      "dischargeRate": 0,
      "remainingCapacity": "string",
      "reportTime": "string",
      "status": "string",
      "temperature": 0,
      "voltage": "string"
    }
  ],
  "serialNumber": "string"
}
```

Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batteryHealth|string|false|read-only|Output only. Battery health.|
|cycleCount|integer(int32)|false|read-only|Output only. Cycle count.|
|fullChargeCapacity|string(int64)|false|read-only|Output only. Full charge capacity (mAmpere-hours).|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the sample was collected on device|
|sample|[[GoogleChromeManagementV1BatterySampleReport](#schemagooglechromemanagementv1batterysamplereport)]|false|read-only|Output only. Sampling data for the battery sorted in a decreasing order of report_time.|
|serialNumber|string|false|read-only|Output only. Battery serial number.|

#### Enumerated Values

|Property|Value|
|---|---|
|batteryHealth|BATTERY_HEALTH_UNSPECIFIED|
|batteryHealth|BATTERY_HEALTH_NORMAL|
|batteryHealth|BATTERY_REPLACE_SOON|
|batteryHealth|BATTERY_REPLACE_NOW|

<h2 id="tocS_GoogleChromeManagementV1BootPerformanceReport">GoogleChromeManagementV1BootPerformanceReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1bootperformancereport"></a>
<a id="schema_GoogleChromeManagementV1BootPerformanceReport"></a>
<a id="tocSgooglechromemanagementv1bootperformancereport"></a>
<a id="tocsgooglechromemanagementv1bootperformancereport"></a>

```json
{
  "bootUpDuration": "string",
  "bootUpTime": "string",
  "reportTime": "string",
  "shutdownDuration": "string",
  "shutdownReason": "SHUTDOWN_REASON_UNSPECIFIED",
  "shutdownTime": "string"
}
```

Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootUpDuration|string(google-duration)|false|none|Total time to boot up.|
|bootUpTime|string(google-datetime)|false|none|The timestamp when power came on.|
|reportTime|string(google-datetime)|false|none|Timestamp when the report was collected.|
|shutdownDuration|string(google-duration)|false|none|Total time since shutdown start to power off.|
|shutdownReason|string|false|none|The shutdown reason.|
|shutdownTime|string(google-datetime)|false|none|The timestamp when shutdown.|

#### Enumerated Values

|Property|Value|
|---|---|
|shutdownReason|SHUTDOWN_REASON_UNSPECIFIED|
|shutdownReason|USER_REQUEST|
|shutdownReason|SYSTEM_UPDATE|
|shutdownReason|LOW_BATTERY|
|shutdownReason|OTHER|

<h2 id="tocS_GoogleChromeManagementV1BrowserVersion">GoogleChromeManagementV1BrowserVersion</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1browserversion"></a>
<a id="schema_GoogleChromeManagementV1BrowserVersion"></a>
<a id="tocSgooglechromemanagementv1browserversion"></a>
<a id="tocsgooglechromemanagementv1browserversion"></a>

```json
{
  "channel": "RELEASE_CHANNEL_UNSPECIFIED",
  "count": "string",
  "deviceOsVersion": "string",
  "system": "DEVICE_SYSTEM_UNSPECIFIED",
  "version": "string"
}
```

Describes a browser version and its install count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|read-only|Output only. The release channel of the installed browser.|
|count|string(int64)|false|read-only|Output only. Count grouped by device_system and major version|
|deviceOsVersion|string|false|read-only|Output only. Version of the system-specified operating system.|
|system|string|false|read-only|Output only. The device operating system.|
|version|string|false|read-only|Output only. The full version of the installed browser.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|RELEASE_CHANNEL_UNSPECIFIED|
|channel|CANARY|
|channel|DEV|
|channel|BETA|
|channel|STABLE|
|system|DEVICE_SYSTEM_UNSPECIFIED|
|system|SYSTEM_OTHER|
|system|SYSTEM_ANDROID|
|system|SYSTEM_IOS|
|system|SYSTEM_CROS|
|system|SYSTEM_WINDOWS|
|system|SYSTEM_MAC|
|system|SYSTEM_LINUX|

<h2 id="tocS_GoogleChromeManagementV1ChromeAppInfo">GoogleChromeManagementV1ChromeAppInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1chromeappinfo"></a>
<a id="schema_GoogleChromeManagementV1ChromeAppInfo"></a>
<a id="tocSgooglechromemanagementv1chromeappinfo"></a>
<a id="tocsgooglechromemanagementv1chromeappinfo"></a>

```json
{
  "googleOwned": true,
  "isCwsHosted": true,
  "isExtensionPolicySupported": true,
  "isKioskOnly": true,
  "isTheme": true,
  "kioskEnabled": true,
  "minUserCount": 0,
  "permissions": [
    {
      "accessUserData": true,
      "documentationUri": "string",
      "type": "string"
    }
  ],
  "siteAccess": [
    {
      "hostMatch": "string"
    }
  ],
  "supportEnabled": true,
  "type": "ITEM_TYPE_UNSPECIFIED"
}
```

Chrome Web Store app information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleOwned|boolean|false|read-only|Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found.|
|isCwsHosted|boolean|false|read-only|Output only. Whether the app or extension is in a published state in the Chrome Web Store.|
|isExtensionPolicySupported|boolean|false|read-only|Output only. Whether an app supports policy for extensions.|
|isKioskOnly|boolean|false|read-only|Output only. Whether the app is only for Kiosk mode on ChromeOS devices|
|isTheme|boolean|false|read-only|Output only. Whether the app or extension is a theme.|
|kioskEnabled|boolean|false|read-only|Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices|
|minUserCount|integer(int32)|false|read-only|Output only. The minimum number of users using this app.|
|permissions|[[GoogleChromeManagementV1ChromeAppPermission](#schemagooglechromemanagementv1chromeapppermission)]|false|read-only|Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found.|
|siteAccess|[[GoogleChromeManagementV1ChromeAppSiteAccess](#schemagooglechromemanagementv1chromeappsiteaccess)]|false|read-only|Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found.|
|supportEnabled|boolean|false|read-only|Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found.|
|type|string|false|read-only|Output only. Types of an item in the Chrome Web Store|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ITEM_TYPE_UNSPECIFIED|
|type|EXTENSION|
|type|OTHERS|

<h2 id="tocS_GoogleChromeManagementV1ChromeAppPermission">GoogleChromeManagementV1ChromeAppPermission</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1chromeapppermission"></a>
<a id="schema_GoogleChromeManagementV1ChromeAppPermission"></a>
<a id="tocSgooglechromemanagementv1chromeapppermission"></a>
<a id="tocsgooglechromemanagementv1chromeapppermission"></a>

```json
{
  "accessUserData": true,
  "documentationUri": "string",
  "type": "string"
}
```

Permission requested by a Chrome app or extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessUserData|boolean|false|read-only|Output only. If available, whether this permissions grants the app/extension access to user data.|
|documentationUri|string|false|read-only|Output only. If available, a URI to a page that has documentation for the current permission.|
|type|string|false|read-only|Output only. The type of the permission.|

<h2 id="tocS_GoogleChromeManagementV1ChromeAppRequest">GoogleChromeManagementV1ChromeAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1chromeapprequest"></a>
<a id="schema_GoogleChromeManagementV1ChromeAppRequest"></a>
<a id="tocSgooglechromemanagementv1chromeapprequest"></a>
<a id="tocsgooglechromemanagementv1chromeapprequest"></a>

```json
{
  "appDetails": "string",
  "appId": "string",
  "detailUri": "string",
  "displayName": "string",
  "iconUri": "string",
  "latestRequestTime": "string",
  "requestCount": "string"
}
```

Details of an app installation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appDetails|string|false|read-only|Output only. Format: app_details=customers/{customer_id}/apps/chrome/{app_id}|
|appId|string|false|read-only|Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension.|
|detailUri|string|false|read-only|Output only. The uri for the detail page of the item.|
|displayName|string|false|read-only|Output only. App's display name.|
|iconUri|string|false|read-only|Output only. A link to an image that can be used as an icon for the product.|
|latestRequestTime|string(google-datetime)|false|read-only|Output only. The timestamp of the most recently made request for this app.|
|requestCount|string(int64)|false|read-only|Output only. Total count of requests for this app.|

<h2 id="tocS_GoogleChromeManagementV1ChromeAppSiteAccess">GoogleChromeManagementV1ChromeAppSiteAccess</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1chromeappsiteaccess"></a>
<a id="schema_GoogleChromeManagementV1ChromeAppSiteAccess"></a>
<a id="tocSgooglechromemanagementv1chromeappsiteaccess"></a>
<a id="tocsgooglechromemanagementv1chromeappsiteaccess"></a>

```json
{
  "hostMatch": "string"
}
```

Represent one host permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostMatch|string|false|read-only|Output only. This can contain very specific hosts, or patterns like "*.com" for instance.|

<h2 id="tocS_GoogleChromeManagementV1CountChromeAppRequestsResponse">GoogleChromeManagementV1CountChromeAppRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromeapprequestsresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeAppRequestsResponse"></a>
<a id="tocSgooglechromemanagementv1countchromeapprequestsresponse"></a>
<a id="tocsgooglechromemanagementv1countchromeapprequestsresponse"></a>

```json
{
  "nextPageToken": "string",
  "requestedApps": [
    {
      "appDetails": "string",
      "appId": "string",
      "detailUri": "string",
      "displayName": "string",
      "iconUri": "string",
      "latestRequestTime": "string",
      "requestCount": "string"
    }
  ],
  "totalSize": 0
}
```

Response containing summary of requested app installations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to specify the next page in the list.|
|requestedApps|[[GoogleChromeManagementV1ChromeAppRequest](#schemagooglechromemanagementv1chromeapprequest)]|false|none|Count of requested apps matching request.|
|totalSize|integer(int32)|false|none|Total number of matching app requests.|

<h2 id="tocS_GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse">GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromebrowsersneedingattentionresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse"></a>
<a id="tocSgooglechromemanagementv1countchromebrowsersneedingattentionresponse"></a>
<a id="tocsgooglechromemanagementv1countchromebrowsersneedingattentionresponse"></a>

```json
{
  "noRecentActivityCount": "string",
  "pendingBrowserUpdateCount": "string",
  "recentlyEnrolledCount": "string"
}
```

Response containing counts for browsers that need attention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noRecentActivityCount|string(int64)|false|none|Number of browsers that haven’t had any recent activity|
|pendingBrowserUpdateCount|string(int64)|false|none|Number of browsers that are pending an OS update|
|recentlyEnrolledCount|string(int64)|false|none|Number of browsers that have been recently enrolled|

<h2 id="tocS_GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse">GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromedevicesreachingautoexpirationdateresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse"></a>
<a id="tocSgooglechromemanagementv1countchromedevicesreachingautoexpirationdateresponse"></a>
<a id="tocsgooglechromemanagementv1countchromedevicesreachingautoexpirationdateresponse"></a>

```json
{
  "deviceAueCountReports": [
    {
      "aueMonth": "MONTH_UNSPECIFIED",
      "aueYear": "string",
      "count": "string",
      "expired": true,
      "model": "string"
    }
  ]
}
```

Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceAueCountReports|[[GoogleChromeManagementV1DeviceAueCountReport](#schemagooglechromemanagementv1deviceauecountreport)]|false|none|The list of reports sorted by auto update expiration date in ascending order.|

<h2 id="tocS_GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse">GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromedevicesthatneedattentionresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse"></a>
<a id="tocSgooglechromemanagementv1countchromedevicesthatneedattentionresponse"></a>
<a id="tocsgooglechromemanagementv1countchromedevicesthatneedattentionresponse"></a>

```json
{
  "noRecentPolicySyncCount": "string",
  "noRecentUserActivityCount": "string",
  "osVersionNotCompliantCount": "string",
  "pendingUpdate": "string",
  "unsupportedPolicyCount": "string"
}
```

Response containing counts for devices that need attention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|noRecentPolicySyncCount|string(int64)|false|none|Number of ChromeOS devices have not synced policies in the past 28 days.|
|noRecentUserActivityCount|string(int64)|false|none|Number of ChromeOS devices that have not seen any user activity in the past 28 days.|
|osVersionNotCompliantCount|string(int64)|false|none|Number of devices whose OS version is not compliant.|
|pendingUpdate|string(int64)|false|none|Number of devices that are pending an OS update.|
|unsupportedPolicyCount|string(int64)|false|none|Number of devices that are unable to apply a policy due to an OS version mismatch.|

<h2 id="tocS_GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse">GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromehardwarefleetdevicesresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse"></a>
<a id="tocSgooglechromemanagementv1countchromehardwarefleetdevicesresponse"></a>
<a id="tocsgooglechromemanagementv1countchromehardwarefleetdevicesresponse"></a>

```json
{
  "cpuReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "memoryReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "modelReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ],
  "storageReports": [
    {
      "bucket": "string",
      "count": "string"
    }
  ]
}
```

Response containing a list of devices with a specific type of hardware specification from the requested hardware type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuReports|[[GoogleChromeManagementV1DeviceHardwareCountReport](#schemagooglechromemanagementv1devicehardwarecountreport)]|false|none|The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).|
|memoryReports|[[GoogleChromeManagementV1DeviceHardwareCountReport](#schemagooglechromemanagementv1devicehardwarecountreport)]|false|none|The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).|
|modelReports|[[GoogleChromeManagementV1DeviceHardwareCountReport](#schemagooglechromemanagementv1devicehardwarecountreport)]|false|none|The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).|
|storageReports|[[GoogleChromeManagementV1DeviceHardwareCountReport](#schemagooglechromemanagementv1devicehardwarecountreport)]|false|none|The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).|

<h2 id="tocS_GoogleChromeManagementV1CountChromeVersionsResponse">GoogleChromeManagementV1CountChromeVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countchromeversionsresponse"></a>
<a id="schema_GoogleChromeManagementV1CountChromeVersionsResponse"></a>
<a id="tocSgooglechromemanagementv1countchromeversionsresponse"></a>
<a id="tocsgooglechromemanagementv1countchromeversionsresponse"></a>

```json
{
  "browserVersions": [
    {
      "channel": "RELEASE_CHANNEL_UNSPECIFIED",
      "count": "string",
      "deviceOsVersion": "string",
      "system": "DEVICE_SYSTEM_UNSPECIFIED",
      "version": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response containing requested browser versions details and counts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browserVersions|[[GoogleChromeManagementV1BrowserVersion](#schemagooglechromemanagementv1browserversion)]|false|none|List of all browser versions and their install counts.|
|nextPageToken|string|false|none|Token to specify the next page of the request.|
|totalSize|integer(int32)|false|none|Total number browser versions matching request.|

<h2 id="tocS_GoogleChromeManagementV1CountInstalledAppsResponse">GoogleChromeManagementV1CountInstalledAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1countinstalledappsresponse"></a>
<a id="schema_GoogleChromeManagementV1CountInstalledAppsResponse"></a>
<a id="tocSgooglechromemanagementv1countinstalledappsresponse"></a>
<a id="tocsgooglechromemanagementv1countinstalledappsresponse"></a>

```json
{
  "installedApps": [
    {
      "appId": "string",
      "appInstallType": "APP_INSTALL_TYPE_UNSPECIFIED",
      "appSource": "APP_SOURCE_UNSPECIFIED",
      "appType": "APP_TYPE_UNSPECIFIED",
      "browserDeviceCount": "string",
      "description": "string",
      "disabled": true,
      "displayName": "string",
      "homepageUri": "string",
      "osUserCount": "string",
      "permissions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response containing details of queried installed apps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installedApps|[[GoogleChromeManagementV1InstalledApp](#schemagooglechromemanagementv1installedapp)]|false|none|List of installed apps matching request.|
|nextPageToken|string|false|none|Token to specify the next page of the request.|
|totalSize|integer(int32)|false|none|Total number of installed apps matching request.|

<h2 id="tocS_GoogleChromeManagementV1CpuInfo">GoogleChromeManagementV1CpuInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1cpuinfo"></a>
<a id="schema_GoogleChromeManagementV1CpuInfo"></a>
<a id="tocSgooglechromemanagementv1cpuinfo"></a>
<a id="tocsgooglechromemanagementv1cpuinfo"></a>

```json
{
  "architecture": "ARCHITECTURE_UNSPECIFIED",
  "keylockerConfigured": true,
  "keylockerSupported": true,
  "maxClockSpeed": 0,
  "model": "string"
}
```

CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|string|false|read-only|Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A|
|keylockerConfigured|boolean|false|read-only|Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`.|
|keylockerSupported|boolean|false|read-only|Output only. Whether keylocker is supported.|
|maxClockSpeed|integer(int32)|false|read-only|Output only. The max CPU clock speed in kHz.|
|model|string|false|read-only|Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz|

#### Enumerated Values

|Property|Value|
|---|---|
|architecture|ARCHITECTURE_UNSPECIFIED|
|architecture|X64|

<h2 id="tocS_GoogleChromeManagementV1CpuStatusReport">GoogleChromeManagementV1CpuStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1cpustatusreport"></a>
<a id="schema_GoogleChromeManagementV1CpuStatusReport"></a>
<a id="tocSgooglechromemanagementv1cpustatusreport"></a>
<a id="tocsgooglechromemanagementv1cpustatusreport"></a>

```json
{
  "cpuTemperatureInfo": [
    {
      "label": "string",
      "temperatureCelsius": 0
    }
  ],
  "cpuUtilizationPct": 0,
  "reportTime": "string",
  "sampleFrequency": "string"
}
```

Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuTemperatureInfo|[[GoogleChromeManagementV1CpuTemperatureInfo](#schemagooglechromemanagementv1cputemperatureinfo)]|false|read-only|Output only. CPU temperature sample info per CPU core in Celsius|
|cpuUtilizationPct|integer(int32)|false|read-only|Output only. Sample of CPU utilization (0-100 percent).|
|reportTime|string(google-datetime)|false|read-only|Output only. The timestamp in milliseconds representing time at which this report was sampled.|
|sampleFrequency|string(google-duration)|false|read-only|Output only. Frequency the report is sampled.|

<h2 id="tocS_GoogleChromeManagementV1CpuTemperatureInfo">GoogleChromeManagementV1CpuTemperatureInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1cputemperatureinfo"></a>
<a id="schema_GoogleChromeManagementV1CpuTemperatureInfo"></a>
<a id="tocSgooglechromemanagementv1cputemperatureinfo"></a>
<a id="tocsgooglechromemanagementv1cputemperatureinfo"></a>

```json
{
  "label": "string",
  "temperatureCelsius": 0
}
```

CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|read-only|Output only. CPU label. Example: Core 0|
|temperatureCelsius|integer(int32)|false|read-only|Output only. CPU temperature in Celsius.|

<h2 id="tocS_GoogleChromeManagementV1Device">GoogleChromeManagementV1Device</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1device"></a>
<a id="schema_GoogleChromeManagementV1Device"></a>
<a id="tocSgooglechromemanagementv1device"></a>
<a id="tocsgooglechromemanagementv1device"></a>

```json
{
  "deviceId": "string",
  "machine": "string"
}
```

Describes a device reporting Chrome browser information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|read-only|Output only. The ID of the device that reported this Chrome browser information.|
|machine|string|false|read-only|Output only. The name of the machine within its local network.|

<h2 id="tocS_GoogleChromeManagementV1DeviceAueCountReport">GoogleChromeManagementV1DeviceAueCountReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1deviceauecountreport"></a>
<a id="schema_GoogleChromeManagementV1DeviceAueCountReport"></a>
<a id="tocSgooglechromemanagementv1deviceauecountreport"></a>
<a id="tocsgooglechromemanagementv1deviceauecountreport"></a>

```json
{
  "aueMonth": "MONTH_UNSPECIFIED",
  "aueYear": "string",
  "count": "string",
  "expired": true,
  "model": "string"
}
```

Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aueMonth|string|false|none|Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.|
|aueYear|string(int64)|false|none|Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty.|
|count|string(int64)|false|none|Count of devices of this model.|
|expired|boolean|false|none|Boolean value for whether or not the device has already expired.|
|model|string|false|none|Public model name of the devices.|

#### Enumerated Values

|Property|Value|
|---|---|
|aueMonth|MONTH_UNSPECIFIED|
|aueMonth|JANUARY|
|aueMonth|FEBRUARY|
|aueMonth|MARCH|
|aueMonth|APRIL|
|aueMonth|MAY|
|aueMonth|JUNE|
|aueMonth|JULY|
|aueMonth|AUGUST|
|aueMonth|SEPTEMBER|
|aueMonth|OCTOBER|
|aueMonth|NOVEMBER|
|aueMonth|DECEMBER|

<h2 id="tocS_GoogleChromeManagementV1DeviceHardwareCountReport">GoogleChromeManagementV1DeviceHardwareCountReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1devicehardwarecountreport"></a>
<a id="schema_GoogleChromeManagementV1DeviceHardwareCountReport"></a>
<a id="tocSgooglechromemanagementv1devicehardwarecountreport"></a>
<a id="tocsgooglechromemanagementv1devicehardwarecountreport"></a>

```json
{
  "bucket": "string",
  "count": "string"
}
```

Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|string|false|none|Public name of the hardware specification.|
|count|string(int64)|false|none|Count of devices with a unique hardware specification.|

<h2 id="tocS_GoogleChromeManagementV1DiskInfo">GoogleChromeManagementV1DiskInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1diskinfo"></a>
<a id="schema_GoogleChromeManagementV1DiskInfo"></a>
<a id="tocSgooglechromemanagementv1diskinfo"></a>
<a id="tocsgooglechromemanagementv1diskinfo"></a>

```json
{
  "bytesReadThisSession": "string",
  "bytesWrittenThisSession": "string",
  "discardTimeThisSession": "string",
  "health": "string",
  "ioTimeThisSession": "string",
  "manufacturer": "string",
  "model": "string",
  "readTimeThisSession": "string",
  "serialNumber": "string",
  "sizeBytes": "string",
  "type": "string",
  "volumeIds": [
    "string"
  ],
  "writeTimeThisSession": "string"
}
```

Status of the single storage device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytesReadThisSession|string(int64)|false|read-only|Output only. Number of bytes read since last boot.|
|bytesWrittenThisSession|string(int64)|false|read-only|Output only. Number of bytes written since last boot.|
|discardTimeThisSession|string(google-duration)|false|read-only|Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+.|
|health|string|false|read-only|Output only. Disk health.|
|ioTimeThisSession|string(google-duration)|false|read-only|Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times.|
|manufacturer|string|false|read-only|Output only. Disk manufacturer.|
|model|string|false|read-only|Output only. Disk model.|
|readTimeThisSession|string(google-duration)|false|read-only|Output only. Time spent reading from disk since last boot.|
|serialNumber|string|false|read-only|Output only. Disk serial number.|
|sizeBytes|string(int64)|false|read-only|Output only. Disk size.|
|type|string|false|read-only|Output only. Disk type: eMMC / NVMe / ATA / SCSI.|
|volumeIds|[string]|false|read-only|Output only. Disk volumes.|
|writeTimeThisSession|string(google-duration)|false|read-only|Output only. Time spent writing to disk since last boot.|

<h2 id="tocS_GoogleChromeManagementV1DisplayDevice">GoogleChromeManagementV1DisplayDevice</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1displaydevice"></a>
<a id="schema_GoogleChromeManagementV1DisplayDevice"></a>
<a id="tocSgooglechromemanagementv1displaydevice"></a>
<a id="tocsgooglechromemanagementv1displaydevice"></a>

```json
{
  "displayHeightMm": 0,
  "displayName": "string",
  "displayWidthMm": 0,
  "internal": true,
  "manufactureYear": 0,
  "manufacturerId": "string",
  "modelId": 0
}
```

Information of a display device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayHeightMm|integer(int32)|false|read-only|Output only. Display height in millimeters.|
|displayName|string|false|read-only|Output only. Display device name.|
|displayWidthMm|integer(int32)|false|read-only|Output only. Display width in millimeters.|
|internal|boolean|false|read-only|Output only. Is display internal or not.|
|manufactureYear|integer(int32)|false|read-only|Output only. Year of manufacture.|
|manufacturerId|string|false|read-only|Output only. Three letter manufacturer ID.|
|modelId|integer(int32)|false|read-only|Output only. Manufacturer product code.|

<h2 id="tocS_GoogleChromeManagementV1DisplayInfo">GoogleChromeManagementV1DisplayInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1displayinfo"></a>
<a id="schema_GoogleChromeManagementV1DisplayInfo"></a>
<a id="tocSgooglechromemanagementv1displayinfo"></a>
<a id="tocsgooglechromemanagementv1displayinfo"></a>

```json
{
  "deviceId": "string",
  "displayName": "string",
  "isInternal": true,
  "refreshRate": 0,
  "resolutionHeight": 0,
  "resolutionWidth": 0
}
```

Information for a display.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string(int64)|false|read-only|Output only. Represents the graphics card device id.|
|displayName|string|false|read-only|Output only. Display device name.|
|isInternal|boolean|false|read-only|Output only. Indicates if display is internal or not.|
|refreshRate|integer(int32)|false|read-only|Output only. Refresh rate in Hz.|
|resolutionHeight|integer(int32)|false|read-only|Output only. Resolution height in pixels.|
|resolutionWidth|integer(int32)|false|read-only|Output only. Resolution width in pixels.|

<h2 id="tocS_GoogleChromeManagementV1FindInstalledAppDevicesResponse">GoogleChromeManagementV1FindInstalledAppDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1findinstalledappdevicesresponse"></a>
<a id="schema_GoogleChromeManagementV1FindInstalledAppDevicesResponse"></a>
<a id="tocSgooglechromemanagementv1findinstalledappdevicesresponse"></a>
<a id="tocsgooglechromemanagementv1findinstalledappdevicesresponse"></a>

```json
{
  "devices": [
    {
      "deviceId": "string",
      "machine": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response containing a list of devices with queried app installed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[GoogleChromeManagementV1Device](#schemagooglechromemanagementv1device)]|false|none|A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.|
|nextPageToken|string|false|none|Token to specify the next page of the request.|
|totalSize|integer(int32)|false|none|Total number of devices matching request.|

<h2 id="tocS_GoogleChromeManagementV1GraphicsAdapterInfo">GoogleChromeManagementV1GraphicsAdapterInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1graphicsadapterinfo"></a>
<a id="schema_GoogleChromeManagementV1GraphicsAdapterInfo"></a>
<a id="tocSgooglechromemanagementv1graphicsadapterinfo"></a>
<a id="tocsgooglechromemanagementv1graphicsadapterinfo"></a>

```json
{
  "adapter": "string",
  "deviceId": "string",
  "driverVersion": "string"
}
```

Information of a graphics adapter (GPU).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapter|string|false|read-only|Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).|
|deviceId|string(int64)|false|read-only|Output only. Represents the graphics card device id.|
|driverVersion|string|false|read-only|Output only. Version of the GPU driver.|

<h2 id="tocS_GoogleChromeManagementV1GraphicsInfo">GoogleChromeManagementV1GraphicsInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1graphicsinfo"></a>
<a id="schema_GoogleChromeManagementV1GraphicsInfo"></a>
<a id="tocSgooglechromemanagementv1graphicsinfo"></a>
<a id="tocsgooglechromemanagementv1graphicsinfo"></a>

```json
{
  "adapterInfo": {
    "adapter": "string",
    "deviceId": "string",
    "driverVersion": "string"
  },
  "displayDevices": [
    {
      "displayHeightMm": 0,
      "displayName": "string",
      "displayWidthMm": 0,
      "internal": true,
      "manufactureYear": 0,
      "manufacturerId": "string",
      "modelId": 0
    }
  ],
  "eprivacySupported": true,
  "touchScreenInfo": {
    "devices": [
      {
        "displayName": "string",
        "stylusCapable": true,
        "touchPointCount": 0
      }
    ],
    "touchpadLibrary": "string"
  }
}
```

Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adapterInfo|[GoogleChromeManagementV1GraphicsAdapterInfo](#schemagooglechromemanagementv1graphicsadapterinfo)|false|none|Output only. Information about the graphics adapter (GPU).|
|displayDevices|[[GoogleChromeManagementV1DisplayDevice](#schemagooglechromemanagementv1displaydevice)]|false|read-only|Output only. Information about the display(s) of the device.|
|eprivacySupported|boolean|false|read-only|Output only. Is ePrivacy screen supported or not.|
|touchScreenInfo|[GoogleChromeManagementV1TouchScreenInfo](#schemagooglechromemanagementv1touchscreeninfo)|false|none|Output only. Information about the internal touch screen(s) of the device.|

<h2 id="tocS_GoogleChromeManagementV1GraphicsStatusReport">GoogleChromeManagementV1GraphicsStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1graphicsstatusreport"></a>
<a id="schema_GoogleChromeManagementV1GraphicsStatusReport"></a>
<a id="tocSgooglechromemanagementv1graphicsstatusreport"></a>
<a id="tocsgooglechromemanagementv1graphicsstatusreport"></a>

```json
{
  "displays": [
    {
      "deviceId": "string",
      "displayName": "string",
      "isInternal": true,
      "refreshRate": 0,
      "resolutionHeight": 0,
      "resolutionWidth": 0
    }
  ],
  "reportTime": "string"
}
```

Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displays|[[GoogleChromeManagementV1DisplayInfo](#schemagooglechromemanagementv1displayinfo)]|false|read-only|Output only. Information about the displays for the device.|
|reportTime|string(google-datetime)|false|read-only|Output only. Time at which the graphics data was reported.|

<h2 id="tocS_GoogleChromeManagementV1HttpsLatencyRoutineData">GoogleChromeManagementV1HttpsLatencyRoutineData</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1httpslatencyroutinedata"></a>
<a id="schema_GoogleChromeManagementV1HttpsLatencyRoutineData"></a>
<a id="tocSgooglechromemanagementv1httpslatencyroutinedata"></a>
<a id="tocsgooglechromemanagementv1httpslatencyroutinedata"></a>

```json
{
  "latency": "string",
  "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
}
```

Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latency|string(google-duration)|false|read-only|Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY.|
|problem|string|false|read-only|Output only. HTTPS latency routine problem if a problem occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|problem|HTTPS_LATENCY_PROBLEM_UNSPECIFIED|
|problem|FAILED_DNS_RESOLUTIONS|
|problem|FAILED_HTTPS_REQUESTS|
|problem|HIGH_LATENCY|
|problem|VERY_HIGH_LATENCY|

<h2 id="tocS_GoogleChromeManagementV1InstalledApp">GoogleChromeManagementV1InstalledApp</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1installedapp"></a>
<a id="schema_GoogleChromeManagementV1InstalledApp"></a>
<a id="tocSgooglechromemanagementv1installedapp"></a>
<a id="tocsgooglechromemanagementv1installedapp"></a>

```json
{
  "appId": "string",
  "appInstallType": "APP_INSTALL_TYPE_UNSPECIFIED",
  "appSource": "APP_SOURCE_UNSPECIFIED",
  "appType": "APP_TYPE_UNSPECIFIED",
  "browserDeviceCount": "string",
  "description": "string",
  "disabled": true,
  "displayName": "string",
  "homepageUri": "string",
  "osUserCount": "string",
  "permissions": [
    "string"
  ]
}
```

Describes an installed app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|read-only|Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).|
|appInstallType|string|false|read-only|Output only. How the app was installed.|
|appSource|string|false|read-only|Output only. Source of the installed app.|
|appType|string|false|read-only|Output only. Type of the app.|
|browserDeviceCount|string(int64)|false|read-only|Output only. Count of browser devices with this app installed.|
|description|string|false|read-only|Output only. Description of the installed app.|
|disabled|boolean|false|read-only|Output only. Whether the app is disabled.|
|displayName|string|false|read-only|Output only. Name of the installed app.|
|homepageUri|string|false|read-only|Output only. Homepage uri of the installed app.|
|osUserCount|string(int64)|false|read-only|Output only. Count of ChromeOS users with this app installed.|
|permissions|[string]|false|read-only|Output only. Permissions of the installed app.|

#### Enumerated Values

|Property|Value|
|---|---|
|appInstallType|APP_INSTALL_TYPE_UNSPECIFIED|
|appInstallType|MULTIPLE|
|appInstallType|NORMAL|
|appInstallType|ADMIN|
|appInstallType|DEVELOPMENT|
|appInstallType|SIDELOAD|
|appInstallType|OTHER|
|appSource|APP_SOURCE_UNSPECIFIED|
|appSource|CHROME_WEBSTORE|
|appSource|PLAY_STORE|
|appType|APP_TYPE_UNSPECIFIED|
|appType|EXTENSION|
|appType|APP|
|appType|THEME|
|appType|HOSTED_APP|
|appType|ANDROID_APP|

<h2 id="tocS_GoogleChromeManagementV1ListTelemetryDevicesResponse">GoogleChromeManagementV1ListTelemetryDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1listtelemetrydevicesresponse"></a>
<a id="schema_GoogleChromeManagementV1ListTelemetryDevicesResponse"></a>
<a id="tocSgooglechromemanagementv1listtelemetrydevicesresponse"></a>
<a id="tocsgooglechromemanagementv1listtelemetrydevicesresponse"></a>

```json
{
  "devices": [
    {
      "audioStatusReport": [
        {
          "inputDevice": "string",
          "inputGain": 0,
          "inputMute": true,
          "outputDevice": "string",
          "outputMute": true,
          "outputVolume": 0,
          "reportTime": "string"
        }
      ],
      "batteryInfo": [
        {
          "designCapacity": "string",
          "designMinVoltage": 0,
          "manufactureDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "manufacturer": "string",
          "serialNumber": "string",
          "technology": "string"
        }
      ],
      "batteryStatusReport": [
        {
          "batteryHealth": "BATTERY_HEALTH_UNSPECIFIED",
          "cycleCount": 0,
          "fullChargeCapacity": "string",
          "reportTime": "string",
          "sample": [
            {
              "chargeRate": 0,
              "current": "string",
              "dischargeRate": 0,
              "remainingCapacity": "string",
              "reportTime": "string",
              "status": "string",
              "temperature": 0,
              "voltage": "string"
            }
          ],
          "serialNumber": "string"
        }
      ],
      "bootPerformanceReport": [
        {
          "bootUpDuration": "string",
          "bootUpTime": "string",
          "reportTime": "string",
          "shutdownDuration": "string",
          "shutdownReason": "SHUTDOWN_REASON_UNSPECIFIED",
          "shutdownTime": "string"
        }
      ],
      "cpuInfo": [
        {
          "architecture": "ARCHITECTURE_UNSPECIFIED",
          "keylockerConfigured": true,
          "keylockerSupported": true,
          "maxClockSpeed": 0,
          "model": "string"
        }
      ],
      "cpuStatusReport": [
        {
          "cpuTemperatureInfo": [
            {
              "label": "string",
              "temperatureCelsius": 0
            }
          ],
          "cpuUtilizationPct": 0,
          "reportTime": "string",
          "sampleFrequency": "string"
        }
      ],
      "customer": "string",
      "deviceId": "string",
      "graphicsInfo": {
        "adapterInfo": {
          "adapter": "string",
          "deviceId": "string",
          "driverVersion": "string"
        },
        "displayDevices": [
          {
            "displayHeightMm": 0,
            "displayName": "string",
            "displayWidthMm": 0,
            "internal": true,
            "manufactureYear": 0,
            "manufacturerId": "string",
            "modelId": 0
          }
        ],
        "eprivacySupported": true,
        "touchScreenInfo": {
          "devices": [
            {
              "displayName": "string",
              "stylusCapable": true,
              "touchPointCount": 0
            }
          ],
          "touchpadLibrary": "string"
        }
      },
      "graphicsStatusReport": [
        {
          "displays": [
            {
              "deviceId": "string",
              "displayName": "string",
              "isInternal": true,
              "refreshRate": 0,
              "resolutionHeight": 0,
              "resolutionWidth": 0
            }
          ],
          "reportTime": "string"
        }
      ],
      "memoryInfo": {
        "availableRamBytes": "string",
        "totalMemoryEncryption": {
          "encryptionAlgorithm": "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
          "encryptionState": "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
          "keyLength": "string",
          "maxKeys": "string"
        },
        "totalRamBytes": "string"
      },
      "memoryStatusReport": [
        {
          "pageFaults": 0,
          "reportTime": "string",
          "sampleFrequency": "string",
          "systemRamFreeBytes": "string"
        }
      ],
      "name": "string",
      "networkDiagnosticsReport": [
        {
          "httpsLatencyData": {
            "latency": "string",
            "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
          },
          "reportTime": "string"
        }
      ],
      "networkInfo": {
        "networkDevices": [
          {
            "iccid": "string",
            "imei": "string",
            "macAddress": "string",
            "mdn": "string",
            "meid": "string",
            "type": "NETWORK_DEVICE_TYPE_UNSPECIFIED"
          }
        ]
      },
      "networkStatusReport": [
        {
          "connectionState": "NETWORK_CONNECTION_STATE_UNSPECIFIED",
          "connectionType": "NETWORK_TYPE_UNSPECIFIED",
          "encryptionOn": true,
          "gatewayIpAddress": "string",
          "guid": "string",
          "lanIpAddress": "string",
          "receivingBitRateMbps": "string",
          "reportTime": "string",
          "sampleFrequency": "string",
          "signalStrengthDbm": 0,
          "transmissionBitRateMbps": "string",
          "transmissionPowerDbm": 0,
          "wifiLinkQuality": "string",
          "wifiPowerManagementEnabled": true
        }
      ],
      "orgUnitId": "string",
      "osUpdateStatus": [
        {
          "lastRebootTime": "string",
          "lastUpdateCheckTime": "string",
          "lastUpdateTime": "string",
          "newPlatformVersion": "string",
          "newRequestedPlatformVersion": "string",
          "updateState": "UPDATE_STATE_UNSPECIFIED"
        }
      ],
      "peripheralsReport": [
        {
          "reportTime": "string",
          "usbPeripheralReport": [
            {
              "categories": [
                "string"
              ],
              "classId": 0,
              "firmwareVersion": "string",
              "name": "string",
              "pid": 0,
              "subclassId": 0,
              "vendor": "string",
              "vid": 0
            }
          ]
        }
      ],
      "serialNumber": "string",
      "storageInfo": {
        "availableDiskBytes": "string",
        "totalDiskBytes": "string",
        "volume": [
          {
            "storageFreeBytes": "string",
            "storageTotalBytes": "string",
            "volumeId": "string"
          }
        ]
      },
      "storageStatusReport": [
        {
          "disk": [
            {
              "bytesReadThisSession": "string",
              "bytesWrittenThisSession": "string",
              "discardTimeThisSession": "string",
              "health": "string",
              "ioTimeThisSession": "string",
              "manufacturer": "string",
              "model": "string",
              "readTimeThisSession": "string",
              "serialNumber": "string",
              "sizeBytes": "string",
              "type": "string",
              "volumeIds": [
                "string"
              ],
              "writeTimeThisSession": "string"
            }
          ],
          "reportTime": "string"
        }
      ],
      "thunderboltInfo": [
        {
          "securityLevel": "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[GoogleChromeManagementV1TelemetryDevice](#schemagooglechromemanagementv1telemetrydevice)]|false|none|Telemetry devices returned in the response.|
|nextPageToken|string|false|none|Token to specify next page in the list.|

<h2 id="tocS_GoogleChromeManagementV1ListTelemetryEventsResponse">GoogleChromeManagementV1ListTelemetryEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1listtelemetryeventsresponse"></a>
<a id="schema_GoogleChromeManagementV1ListTelemetryEventsResponse"></a>
<a id="tocSgooglechromemanagementv1listtelemetryeventsresponse"></a>
<a id="tocsgooglechromemanagementv1listtelemetryeventsresponse"></a>

```json
{
  "nextPageToken": "string",
  "telemetryEvents": [
    {
      "audioSevereUnderrunEvent": {},
      "device": {
        "deviceId": "string",
        "orgUnitId": "string"
      },
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "httpsLatencyChangeEvent": {
        "httpsLatencyRoutineData": {
          "latency": "string",
          "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
        },
        "httpsLatencyState": "HTTPS_LATENCY_STATE_UNSPECIFIED"
      },
      "name": "string",
      "reportTime": "string",
      "usbPeripheralsEvent": {
        "usbPeripheralReport": [
          {
            "categories": [
              "string"
            ],
            "classId": 0,
            "firmwareVersion": "string",
            "name": "string",
            "pid": 0,
            "subclassId": 0,
            "vendor": "string",
            "vid": 0
          }
        ]
      },
      "user": {
        "email": "string",
        "orgUnitId": "string"
      }
    }
  ]
}
```

Response message for listing telemetry events for a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to specify next page in the list.|
|telemetryEvents|[[GoogleChromeManagementV1TelemetryEvent](#schemagooglechromemanagementv1telemetryevent)]|false|none|Telemetry events returned in the response.|

<h2 id="tocS_GoogleChromeManagementV1ListTelemetryUsersResponse">GoogleChromeManagementV1ListTelemetryUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1listtelemetryusersresponse"></a>
<a id="schema_GoogleChromeManagementV1ListTelemetryUsersResponse"></a>
<a id="tocSgooglechromemanagementv1listtelemetryusersresponse"></a>
<a id="tocsgooglechromemanagementv1listtelemetryusersresponse"></a>

```json
{
  "nextPageToken": "string",
  "telemetryUsers": [
    {
      "customer": "string",
      "name": "string",
      "orgUnitId": "string",
      "userDevice": [
        {
          "audioStatusReport": [
            {
              "inputDevice": "string",
              "inputGain": 0,
              "inputMute": true,
              "outputDevice": "string",
              "outputMute": true,
              "outputVolume": 0,
              "reportTime": "string"
            }
          ],
          "deviceId": "string",
          "peripheralsReport": [
            {
              "reportTime": "string",
              "usbPeripheralReport": [
                {
                  "categories": [
                    "string"
                  ],
                  "classId": 0,
                  "firmwareVersion": "string",
                  "name": "string",
                  "pid": 0,
                  "subclassId": 0,
                  "vendor": "string",
                  "vid": 0
                }
              ]
            }
          ]
        }
      ],
      "userEmail": "string",
      "userId": "string"
    }
  ]
}
```

Response message for listing telemetry users for a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to specify next page in the list.|
|telemetryUsers|[[GoogleChromeManagementV1TelemetryUser](#schemagooglechromemanagementv1telemetryuser)]|false|none|Telemetry users returned in the response.|

<h2 id="tocS_GoogleChromeManagementV1MemoryInfo">GoogleChromeManagementV1MemoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1memoryinfo"></a>
<a id="schema_GoogleChromeManagementV1MemoryInfo"></a>
<a id="tocSgooglechromemanagementv1memoryinfo"></a>
<a id="tocsgooglechromemanagementv1memoryinfo"></a>

```json
{
  "availableRamBytes": "string",
  "totalMemoryEncryption": {
    "encryptionAlgorithm": "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
    "encryptionState": "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
    "keyLength": "string",
    "maxKeys": "string"
  },
  "totalRamBytes": "string"
}
```

Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableRamBytes|string(int64)|false|read-only|Output only. Amount of available RAM in bytes.|
|totalMemoryEncryption|[GoogleChromeManagementV1TotalMemoryEncryptionInfo](#schemagooglechromemanagementv1totalmemoryencryptioninfo)|false|none|Output only. Total memory encryption info for the device.|
|totalRamBytes|string(int64)|false|read-only|Output only. Total RAM in bytes.|

<h2 id="tocS_GoogleChromeManagementV1MemoryStatusReport">GoogleChromeManagementV1MemoryStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1memorystatusreport"></a>
<a id="schema_GoogleChromeManagementV1MemoryStatusReport"></a>
<a id="tocSgooglechromemanagementv1memorystatusreport"></a>
<a id="tocsgooglechromemanagementv1memorystatusreport"></a>

```json
{
  "pageFaults": 0,
  "reportTime": "string",
  "sampleFrequency": "string",
  "systemRamFreeBytes": "string"
}
```

Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageFaults|integer(int32)|false|read-only|Output only. Number of page faults during this collection|
|reportTime|string(google-datetime)|false|read-only|Output only. The timestamp in milliseconds representing time at which this report was sampled.|
|sampleFrequency|string(google-duration)|false|read-only|Output only. Frequency the report is sampled.|
|systemRamFreeBytes|string(int64)|false|read-only|Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection).|

<h2 id="tocS_GoogleChromeManagementV1NetworkDevice">GoogleChromeManagementV1NetworkDevice</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1networkdevice"></a>
<a id="schema_GoogleChromeManagementV1NetworkDevice"></a>
<a id="tocSgooglechromemanagementv1networkdevice"></a>
<a id="tocsgooglechromemanagementv1networkdevice"></a>

```json
{
  "iccid": "string",
  "imei": "string",
  "macAddress": "string",
  "mdn": "string",
  "meid": "string",
  "type": "NETWORK_DEVICE_TYPE_UNSPECIFIED"
}
```

Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iccid|string|false|read-only|Output only. The integrated circuit card ID associated with the device's sim card.|
|imei|string|false|read-only|Output only. IMEI (if applicable) of the corresponding network device.|
|macAddress|string|false|read-only|Output only. MAC address (if applicable) of the corresponding network device.|
|mdn|string|false|read-only|Output only. The mobile directory number associated with the device's sim card.|
|meid|string|false|read-only|Output only. MEID (if applicable) of the corresponding network device.|
|type|string|false|read-only|Output only. Network device type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NETWORK_DEVICE_TYPE_UNSPECIFIED|
|type|CELLULAR_DEVICE|
|type|ETHERNET_DEVICE|
|type|WIFI_DEVICE|

<h2 id="tocS_GoogleChromeManagementV1NetworkDiagnosticsReport">GoogleChromeManagementV1NetworkDiagnosticsReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1networkdiagnosticsreport"></a>
<a id="schema_GoogleChromeManagementV1NetworkDiagnosticsReport"></a>
<a id="tocSgooglechromemanagementv1networkdiagnosticsreport"></a>
<a id="tocsgooglechromemanagementv1networkdiagnosticsreport"></a>

```json
{
  "httpsLatencyData": {
    "latency": "string",
    "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
  },
  "reportTime": "string"
}
```

Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpsLatencyData|[GoogleChromeManagementV1HttpsLatencyRoutineData](#schemagooglechromemanagementv1httpslatencyroutinedata)|false|none|Output only. HTTPS latency test data.|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the diagnostics were collected.|

<h2 id="tocS_GoogleChromeManagementV1NetworkInfo">GoogleChromeManagementV1NetworkInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1networkinfo"></a>
<a id="schema_GoogleChromeManagementV1NetworkInfo"></a>
<a id="tocSgooglechromemanagementv1networkinfo"></a>
<a id="tocsgooglechromemanagementv1networkinfo"></a>

```json
{
  "networkDevices": [
    {
      "iccid": "string",
      "imei": "string",
      "macAddress": "string",
      "mdn": "string",
      "meid": "string",
      "type": "NETWORK_DEVICE_TYPE_UNSPECIFIED"
    }
  ]
}
```

Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkDevices|[[GoogleChromeManagementV1NetworkDevice](#schemagooglechromemanagementv1networkdevice)]|false|read-only|Output only. List of network devices.|

<h2 id="tocS_GoogleChromeManagementV1NetworkStatusReport">GoogleChromeManagementV1NetworkStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1networkstatusreport"></a>
<a id="schema_GoogleChromeManagementV1NetworkStatusReport"></a>
<a id="tocSgooglechromemanagementv1networkstatusreport"></a>
<a id="tocsgooglechromemanagementv1networkstatusreport"></a>

```json
{
  "connectionState": "NETWORK_CONNECTION_STATE_UNSPECIFIED",
  "connectionType": "NETWORK_TYPE_UNSPECIFIED",
  "encryptionOn": true,
  "gatewayIpAddress": "string",
  "guid": "string",
  "lanIpAddress": "string",
  "receivingBitRateMbps": "string",
  "reportTime": "string",
  "sampleFrequency": "string",
  "signalStrengthDbm": 0,
  "transmissionBitRateMbps": "string",
  "transmissionPowerDbm": 0,
  "wifiLinkQuality": "string",
  "wifiPowerManagementEnabled": true
}
```

State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionState|string|false|read-only|Output only. Current connection state of the network.|
|connectionType|string|false|read-only|Output only. Network connection type.|
|encryptionOn|boolean|false|read-only|Output only. Whether the wifi encryption key is turned off.|
|gatewayIpAddress|string|false|read-only|Output only. Gateway IP address.|
|guid|string|false|read-only|Output only. Network connection guid.|
|lanIpAddress|string|false|read-only|Output only. LAN IP address.|
|receivingBitRateMbps|string(int64)|false|read-only|Output only. Receiving bit rate measured in Megabits per second.|
|reportTime|string(google-datetime)|false|read-only|Output only. Time at which the network state was reported.|
|sampleFrequency|string(google-duration)|false|read-only|Output only. Frequency the report is sampled.|
|signalStrengthDbm|integer(int32)|false|read-only|Output only. Signal strength for wireless networks measured in decibels.|
|transmissionBitRateMbps|string(int64)|false|read-only|Output only. Transmission bit rate measured in Megabits per second.|
|transmissionPowerDbm|integer(int32)|false|read-only|Output only. Transmission power measured in decibels.|
|wifiLinkQuality|string(int64)|false|read-only|Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal.|
|wifiPowerManagementEnabled|boolean|false|read-only|Output only. Wifi power management enabled|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionState|NETWORK_CONNECTION_STATE_UNSPECIFIED|
|connectionState|ONLINE|
|connectionState|CONNECTED|
|connectionState|PORTAL|
|connectionState|CONNECTING|
|connectionState|NOT_CONNECTED|
|connectionType|NETWORK_TYPE_UNSPECIFIED|
|connectionType|CELLULAR|
|connectionType|ETHERNET|
|connectionType|TETHER|
|connectionType|VPN|
|connectionType|WIFI|

<h2 id="tocS_GoogleChromeManagementV1OsUpdateStatus">GoogleChromeManagementV1OsUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1osupdatestatus"></a>
<a id="schema_GoogleChromeManagementV1OsUpdateStatus"></a>
<a id="tocSgooglechromemanagementv1osupdatestatus"></a>
<a id="tocsgooglechromemanagementv1osupdatestatus"></a>

```json
{
  "lastRebootTime": "string",
  "lastUpdateCheckTime": "string",
  "lastUpdateTime": "string",
  "newPlatformVersion": "string",
  "newRequestedPlatformVersion": "string",
  "updateState": "UPDATE_STATE_UNSPECIFIED"
}
```

Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastRebootTime|string(google-datetime)|false|read-only|Output only. Timestamp of the last reboot.|
|lastUpdateCheckTime|string(google-datetime)|false|read-only|Output only. Timestamp of the last update check.|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. Timestamp of the last successful update.|
|newPlatformVersion|string|false|read-only|Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot.|
|newRequestedPlatformVersion|string|false|read-only|Output only. New requested platform version from the pending updated kiosk app.|
|updateState|string|false|read-only|Output only. Current state of the os update.|

#### Enumerated Values

|Property|Value|
|---|---|
|updateState|UPDATE_STATE_UNSPECIFIED|
|updateState|OS_IMAGE_DOWNLOAD_NOT_STARTED|
|updateState|OS_IMAGE_DOWNLOAD_IN_PROGRESS|
|updateState|OS_UPDATE_NEED_REBOOT|

<h2 id="tocS_GoogleChromeManagementV1PeripheralsReport">GoogleChromeManagementV1PeripheralsReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1peripheralsreport"></a>
<a id="schema_GoogleChromeManagementV1PeripheralsReport"></a>
<a id="tocSgooglechromemanagementv1peripheralsreport"></a>
<a id="tocsgooglechromemanagementv1peripheralsreport"></a>

```json
{
  "reportTime": "string",
  "usbPeripheralReport": [
    {
      "categories": [
        "string"
      ],
      "classId": 0,
      "firmwareVersion": "string",
      "name": "string",
      "pid": 0,
      "subclassId": 0,
      "vendor": "string",
      "vid": 0
    }
  ]
}
```

Peripherals report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the report was collected.|
|usbPeripheralReport|[[GoogleChromeManagementV1UsbPeripheralReport](#schemagooglechromemanagementv1usbperipheralreport)]|false|none|Reports of all usb connected devices.|

<h2 id="tocS_GoogleChromeManagementV1StorageInfo">GoogleChromeManagementV1StorageInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1storageinfo"></a>
<a id="schema_GoogleChromeManagementV1StorageInfo"></a>
<a id="tocSgooglechromemanagementv1storageinfo"></a>
<a id="tocsgooglechromemanagementv1storageinfo"></a>

```json
{
  "availableDiskBytes": "string",
  "totalDiskBytes": "string",
  "volume": [
    {
      "storageFreeBytes": "string",
      "storageTotalBytes": "string",
      "volumeId": "string"
    }
  ]
}
```

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableDiskBytes|string(int64)|false|none|The available space for user data storage in the device in bytes.|
|totalDiskBytes|string(int64)|false|none|The total space for user data storage in the device in bytes.|
|volume|[[GoogleChromeManagementV1StorageInfoDiskVolume](#schemagooglechromemanagementv1storageinfodiskvolume)]|false|none|Information for disk volumes|

<h2 id="tocS_GoogleChromeManagementV1StorageInfoDiskVolume">GoogleChromeManagementV1StorageInfoDiskVolume</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1storageinfodiskvolume"></a>
<a id="schema_GoogleChromeManagementV1StorageInfoDiskVolume"></a>
<a id="tocSgooglechromemanagementv1storageinfodiskvolume"></a>
<a id="tocsgooglechromemanagementv1storageinfodiskvolume"></a>

```json
{
  "storageFreeBytes": "string",
  "storageTotalBytes": "string",
  "volumeId": "string"
}
```

Information for disk volumes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storageFreeBytes|string(int64)|false|none|Free storage space in bytes.|
|storageTotalBytes|string(int64)|false|none|Total storage space in bytes.|
|volumeId|string|false|none|Disk volume id.|

<h2 id="tocS_GoogleChromeManagementV1StorageStatusReport">GoogleChromeManagementV1StorageStatusReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1storagestatusreport"></a>
<a id="schema_GoogleChromeManagementV1StorageStatusReport"></a>
<a id="tocSgooglechromemanagementv1storagestatusreport"></a>
<a id="tocsgooglechromemanagementv1storagestatusreport"></a>

```json
{
  "disk": [
    {
      "bytesReadThisSession": "string",
      "bytesWrittenThisSession": "string",
      "discardTimeThisSession": "string",
      "health": "string",
      "ioTimeThisSession": "string",
      "manufacturer": "string",
      "model": "string",
      "readTimeThisSession": "string",
      "serialNumber": "string",
      "sizeBytes": "string",
      "type": "string",
      "volumeIds": [
        "string"
      ],
      "writeTimeThisSession": "string"
    }
  ],
  "reportTime": "string"
}
```

Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disk|[[GoogleChromeManagementV1DiskInfo](#schemagooglechromemanagementv1diskinfo)]|false|read-only|Output only. Reports on disk.|
|reportTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the sample was collected on device|

<h2 id="tocS_GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent">GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryaudiosevereunderrunevent"></a>
<a id="schema_GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent"></a>
<a id="tocSgooglechromemanagementv1telemetryaudiosevereunderrunevent"></a>
<a id="tocsgooglechromemanagementv1telemetryaudiosevereunderrunevent"></a>

```json
{}
```

`TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds.

<h2 id="tocS_GoogleChromeManagementV1TelemetryDevice">GoogleChromeManagementV1TelemetryDevice</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetrydevice"></a>
<a id="schema_GoogleChromeManagementV1TelemetryDevice"></a>
<a id="tocSgooglechromemanagementv1telemetrydevice"></a>
<a id="tocsgooglechromemanagementv1telemetrydevice"></a>

```json
{
  "audioStatusReport": [
    {
      "inputDevice": "string",
      "inputGain": 0,
      "inputMute": true,
      "outputDevice": "string",
      "outputMute": true,
      "outputVolume": 0,
      "reportTime": "string"
    }
  ],
  "batteryInfo": [
    {
      "designCapacity": "string",
      "designMinVoltage": 0,
      "manufactureDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "manufacturer": "string",
      "serialNumber": "string",
      "technology": "string"
    }
  ],
  "batteryStatusReport": [
    {
      "batteryHealth": "BATTERY_HEALTH_UNSPECIFIED",
      "cycleCount": 0,
      "fullChargeCapacity": "string",
      "reportTime": "string",
      "sample": [
        {
          "chargeRate": 0,
          "current": "string",
          "dischargeRate": 0,
          "remainingCapacity": "string",
          "reportTime": "string",
          "status": "string",
          "temperature": 0,
          "voltage": "string"
        }
      ],
      "serialNumber": "string"
    }
  ],
  "bootPerformanceReport": [
    {
      "bootUpDuration": "string",
      "bootUpTime": "string",
      "reportTime": "string",
      "shutdownDuration": "string",
      "shutdownReason": "SHUTDOWN_REASON_UNSPECIFIED",
      "shutdownTime": "string"
    }
  ],
  "cpuInfo": [
    {
      "architecture": "ARCHITECTURE_UNSPECIFIED",
      "keylockerConfigured": true,
      "keylockerSupported": true,
      "maxClockSpeed": 0,
      "model": "string"
    }
  ],
  "cpuStatusReport": [
    {
      "cpuTemperatureInfo": [
        {
          "label": "string",
          "temperatureCelsius": 0
        }
      ],
      "cpuUtilizationPct": 0,
      "reportTime": "string",
      "sampleFrequency": "string"
    }
  ],
  "customer": "string",
  "deviceId": "string",
  "graphicsInfo": {
    "adapterInfo": {
      "adapter": "string",
      "deviceId": "string",
      "driverVersion": "string"
    },
    "displayDevices": [
      {
        "displayHeightMm": 0,
        "displayName": "string",
        "displayWidthMm": 0,
        "internal": true,
        "manufactureYear": 0,
        "manufacturerId": "string",
        "modelId": 0
      }
    ],
    "eprivacySupported": true,
    "touchScreenInfo": {
      "devices": [
        {
          "displayName": "string",
          "stylusCapable": true,
          "touchPointCount": 0
        }
      ],
      "touchpadLibrary": "string"
    }
  },
  "graphicsStatusReport": [
    {
      "displays": [
        {
          "deviceId": "string",
          "displayName": "string",
          "isInternal": true,
          "refreshRate": 0,
          "resolutionHeight": 0,
          "resolutionWidth": 0
        }
      ],
      "reportTime": "string"
    }
  ],
  "memoryInfo": {
    "availableRamBytes": "string",
    "totalMemoryEncryption": {
      "encryptionAlgorithm": "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
      "encryptionState": "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
      "keyLength": "string",
      "maxKeys": "string"
    },
    "totalRamBytes": "string"
  },
  "memoryStatusReport": [
    {
      "pageFaults": 0,
      "reportTime": "string",
      "sampleFrequency": "string",
      "systemRamFreeBytes": "string"
    }
  ],
  "name": "string",
  "networkDiagnosticsReport": [
    {
      "httpsLatencyData": {
        "latency": "string",
        "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
      },
      "reportTime": "string"
    }
  ],
  "networkInfo": {
    "networkDevices": [
      {
        "iccid": "string",
        "imei": "string",
        "macAddress": "string",
        "mdn": "string",
        "meid": "string",
        "type": "NETWORK_DEVICE_TYPE_UNSPECIFIED"
      }
    ]
  },
  "networkStatusReport": [
    {
      "connectionState": "NETWORK_CONNECTION_STATE_UNSPECIFIED",
      "connectionType": "NETWORK_TYPE_UNSPECIFIED",
      "encryptionOn": true,
      "gatewayIpAddress": "string",
      "guid": "string",
      "lanIpAddress": "string",
      "receivingBitRateMbps": "string",
      "reportTime": "string",
      "sampleFrequency": "string",
      "signalStrengthDbm": 0,
      "transmissionBitRateMbps": "string",
      "transmissionPowerDbm": 0,
      "wifiLinkQuality": "string",
      "wifiPowerManagementEnabled": true
    }
  ],
  "orgUnitId": "string",
  "osUpdateStatus": [
    {
      "lastRebootTime": "string",
      "lastUpdateCheckTime": "string",
      "lastUpdateTime": "string",
      "newPlatformVersion": "string",
      "newRequestedPlatformVersion": "string",
      "updateState": "UPDATE_STATE_UNSPECIFIED"
    }
  ],
  "peripheralsReport": [
    {
      "reportTime": "string",
      "usbPeripheralReport": [
        {
          "categories": [
            "string"
          ],
          "classId": 0,
          "firmwareVersion": "string",
          "name": "string",
          "pid": 0,
          "subclassId": 0,
          "vendor": "string",
          "vid": 0
        }
      ]
    }
  ],
  "serialNumber": "string",
  "storageInfo": {
    "availableDiskBytes": "string",
    "totalDiskBytes": "string",
    "volume": [
      {
        "storageFreeBytes": "string",
        "storageTotalBytes": "string",
        "volumeId": "string"
      }
    ]
  },
  "storageStatusReport": [
    {
      "disk": [
        {
          "bytesReadThisSession": "string",
          "bytesWrittenThisSession": "string",
          "discardTimeThisSession": "string",
          "health": "string",
          "ioTimeThisSession": "string",
          "manufacturer": "string",
          "model": "string",
          "readTimeThisSession": "string",
          "serialNumber": "string",
          "sizeBytes": "string",
          "type": "string",
          "volumeIds": [
            "string"
          ],
          "writeTimeThisSession": "string"
        }
      ],
      "reportTime": "string"
    }
  ],
  "thunderboltInfo": [
    {
      "securityLevel": "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED"
    }
  ]
}
```

Telemetry data collected from a managed device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStatusReport|[[GoogleChromeManagementV1AudioStatusReport](#schemagooglechromemanagementv1audiostatusreport)]|false|read-only|Output only. Audio reports collected periodically sorted in a decreasing order of report_time.|
|batteryInfo|[[GoogleChromeManagementV1BatteryInfo](#schemagooglechromemanagementv1batteryinfo)]|false|read-only|Output only. Information on battery specs for the device.|
|batteryStatusReport|[[GoogleChromeManagementV1BatteryStatusReport](#schemagooglechromemanagementv1batterystatusreport)]|false|read-only|Output only. Battery reports collected periodically.|
|bootPerformanceReport|[[GoogleChromeManagementV1BootPerformanceReport](#schemagooglechromemanagementv1bootperformancereport)]|false|read-only|Output only. Boot performance reports of the device.|
|cpuInfo|[[GoogleChromeManagementV1CpuInfo](#schemagooglechromemanagementv1cpuinfo)]|false|read-only|Output only. Information regarding CPU specs for the device.|
|cpuStatusReport|[[GoogleChromeManagementV1CpuStatusReport](#schemagooglechromemanagementv1cpustatusreport)]|false|read-only|Output only. CPU status reports collected periodically sorted in a decreasing order of report_time.|
|customer|string|false|read-only|Output only. Google Workspace Customer whose enterprise enrolled the device.|
|deviceId|string|false|read-only|Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab|
|graphicsInfo|[GoogleChromeManagementV1GraphicsInfo](#schemagooglechromemanagementv1graphicsinfo)|false|none|Output only. Contains information regarding Graphic peripherals for the device.|
|graphicsStatusReport|[[GoogleChromeManagementV1GraphicsStatusReport](#schemagooglechromemanagementv1graphicsstatusreport)]|false|read-only|Output only. Graphics reports collected periodically.|
|memoryInfo|[GoogleChromeManagementV1MemoryInfo](#schemagooglechromemanagementv1memoryinfo)|false|none|Output only. Information regarding memory specs for the device.|
|memoryStatusReport|[[GoogleChromeManagementV1MemoryStatusReport](#schemagooglechromemanagementv1memorystatusreport)]|false|read-only|Output only. Memory status reports collected periodically sorted decreasing by report_time.|
|name|string|false|read-only|Output only. Resource name of the device.|
|networkDiagnosticsReport|[[GoogleChromeManagementV1NetworkDiagnosticsReport](#schemagooglechromemanagementv1networkdiagnosticsreport)]|false|read-only|Output only. Network diagnostics collected periodically.|
|networkInfo|[GoogleChromeManagementV1NetworkInfo](#schemagooglechromemanagementv1networkinfo)|false|none|Output only. Network devices information.|
|networkStatusReport|[[GoogleChromeManagementV1NetworkStatusReport](#schemagooglechromemanagementv1networkstatusreport)]|false|read-only|Output only. Network specs collected periodically.|
|orgUnitId|string|false|read-only|Output only. Organization unit ID of the device.|
|osUpdateStatus|[[GoogleChromeManagementV1OsUpdateStatus](#schemagooglechromemanagementv1osupdatestatus)]|false|read-only|Output only. Contains relevant information regarding ChromeOS update status.|
|peripheralsReport|[[GoogleChromeManagementV1PeripheralsReport](#schemagooglechromemanagementv1peripheralsreport)]|false|read-only|Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.|
|serialNumber|string|false|read-only|Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.|
|storageInfo|[GoogleChromeManagementV1StorageInfo](#schemagooglechromemanagementv1storageinfo)|false|none|Output only. Information of storage specs for the device.|
|storageStatusReport|[[GoogleChromeManagementV1StorageStatusReport](#schemagooglechromemanagementv1storagestatusreport)]|false|read-only|Output only. Storage reports collected periodically.|
|thunderboltInfo|[[GoogleChromeManagementV1ThunderboltInfo](#schemagooglechromemanagementv1thunderboltinfo)]|false|read-only|Output only. Information on Thunderbolt bus.|

<h2 id="tocS_GoogleChromeManagementV1TelemetryDeviceInfo">GoogleChromeManagementV1TelemetryDeviceInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetrydeviceinfo"></a>
<a id="schema_GoogleChromeManagementV1TelemetryDeviceInfo"></a>
<a id="tocSgooglechromemanagementv1telemetrydeviceinfo"></a>
<a id="tocsgooglechromemanagementv1telemetrydeviceinfo"></a>

```json
{
  "deviceId": "string",
  "orgUnitId": "string"
}
```

Information about a device associated with telemetry data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|read-only|Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.|
|orgUnitId|string|false|read-only|Output only. Organization unit ID of the device.|

<h2 id="tocS_GoogleChromeManagementV1TelemetryEvent">GoogleChromeManagementV1TelemetryEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryevent"></a>
<a id="schema_GoogleChromeManagementV1TelemetryEvent"></a>
<a id="tocSgooglechromemanagementv1telemetryevent"></a>
<a id="tocsgooglechromemanagementv1telemetryevent"></a>

```json
{
  "audioSevereUnderrunEvent": {},
  "device": {
    "deviceId": "string",
    "orgUnitId": "string"
  },
  "eventType": "EVENT_TYPE_UNSPECIFIED",
  "httpsLatencyChangeEvent": {
    "httpsLatencyRoutineData": {
      "latency": "string",
      "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
    },
    "httpsLatencyState": "HTTPS_LATENCY_STATE_UNSPECIFIED"
  },
  "name": "string",
  "reportTime": "string",
  "usbPeripheralsEvent": {
    "usbPeripheralReport": [
      {
        "categories": [
          "string"
        ],
        "classId": 0,
        "firmwareVersion": "string",
        "name": "string",
        "pid": 0,
        "subclassId": 0,
        "vendor": "string",
        "vid": 0
      }
    ]
  },
  "user": {
    "email": "string",
    "orgUnitId": "string"
  }
}
```

Telemetry data reported by a managed device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioSevereUnderrunEvent|[GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent](#schemagooglechromemanagementv1telemetryaudiosevereunderrunevent)|false|none|Output only. Payload for audio severe underrun event. Present only when the `event_type` field is `AUDIO_SEVERE_UNDERRUN`.|
|device|[GoogleChromeManagementV1TelemetryDeviceInfo](#schemagooglechromemanagementv1telemetrydeviceinfo)|false|none|Output only. Information about the device associated with the event.|
|eventType|string|false|none|The event type of the current event.|
|httpsLatencyChangeEvent|[GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent](#schemagooglechromemanagementv1telemetryhttpslatencychangeevent)|false|none|Output only. Payload for HTTPS latency change event. Present only when `event_type` is `NETWORK_HTTPS_LATENCY_CHANGE`.|
|name|string|false|read-only|Output only. Resource name of the event.|
|reportTime|string(google-datetime)|false|none|Timestamp that represents when the event was reported.|
|usbPeripheralsEvent|[GoogleChromeManagementV1TelemetryUsbPeripheralsEvent](#schemagooglechromemanagementv1telemetryusbperipheralsevent)|false|none|Output only. Payload for usb peripherals event. Present only when the `event_type` field is either `USB_ADDED` or `USB_REMOVED`.|
|user|[GoogleChromeManagementV1TelemetryUserInfo](#schemagooglechromemanagementv1telemetryuserinfo)|false|none|Output only. Information about the user associated with the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|EVENT_TYPE_UNSPECIFIED|
|eventType|AUDIO_SEVERE_UNDERRUN|
|eventType|USB_ADDED|
|eventType|USB_REMOVED|
|eventType|NETWORK_HTTPS_LATENCY_CHANGE|

<h2 id="tocS_GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent">GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryhttpslatencychangeevent"></a>
<a id="schema_GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent"></a>
<a id="tocSgooglechromemanagementv1telemetryhttpslatencychangeevent"></a>
<a id="tocsgooglechromemanagementv1telemetryhttpslatencychangeevent"></a>

```json
{
  "httpsLatencyRoutineData": {
    "latency": "string",
    "problem": "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
  },
  "httpsLatencyState": "HTTPS_LATENCY_STATE_UNSPECIFIED"
}
```

Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpsLatencyRoutineData|[GoogleChromeManagementV1HttpsLatencyRoutineData](#schemagooglechromemanagementv1httpslatencyroutinedata)|false|none|HTTPS latency routine data that triggered the event.|
|httpsLatencyState|string|false|none|Current HTTPS latency state.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpsLatencyState|HTTPS_LATENCY_STATE_UNSPECIFIED|
|httpsLatencyState|RECOVERY|
|httpsLatencyState|PROBLEM|

<h2 id="tocS_GoogleChromeManagementV1TelemetryUsbPeripheralsEvent">GoogleChromeManagementV1TelemetryUsbPeripheralsEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryusbperipheralsevent"></a>
<a id="schema_GoogleChromeManagementV1TelemetryUsbPeripheralsEvent"></a>
<a id="tocSgooglechromemanagementv1telemetryusbperipheralsevent"></a>
<a id="tocsgooglechromemanagementv1telemetryusbperipheralsevent"></a>

```json
{
  "usbPeripheralReport": [
    {
      "categories": [
        "string"
      ],
      "classId": 0,
      "firmwareVersion": "string",
      "name": "string",
      "pid": 0,
      "subclassId": 0,
      "vendor": "string",
      "vid": 0
    }
  ]
}
```

`TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usbPeripheralReport|[[GoogleChromeManagementV1UsbPeripheralReport](#schemagooglechromemanagementv1usbperipheralreport)]|false|none|List of usb devices that were either added or removed.|

<h2 id="tocS_GoogleChromeManagementV1TelemetryUser">GoogleChromeManagementV1TelemetryUser</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryuser"></a>
<a id="schema_GoogleChromeManagementV1TelemetryUser"></a>
<a id="tocSgooglechromemanagementv1telemetryuser"></a>
<a id="tocsgooglechromemanagementv1telemetryuser"></a>

```json
{
  "customer": "string",
  "name": "string",
  "orgUnitId": "string",
  "userDevice": [
    {
      "audioStatusReport": [
        {
          "inputDevice": "string",
          "inputGain": 0,
          "inputMute": true,
          "outputDevice": "string",
          "outputMute": true,
          "outputVolume": 0,
          "reportTime": "string"
        }
      ],
      "deviceId": "string",
      "peripheralsReport": [
        {
          "reportTime": "string",
          "usbPeripheralReport": [
            {
              "categories": [
                "string"
              ],
              "classId": 0,
              "firmwareVersion": "string",
              "name": "string",
              "pid": 0,
              "subclassId": 0,
              "vendor": "string",
              "vid": 0
            }
          ]
        }
      ]
    }
  ],
  "userEmail": "string",
  "userId": "string"
}
```

Telemetry data collected from a managed user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|string|false|none|G Suite Customer whose enterprise enrolled the device.|
|name|string|false|none|Resource name of the user.|
|orgUnitId|string|false|none|Organization unit of the user.|
|userDevice|[[GoogleChromeManagementV1TelemetryUserDevice](#schemagooglechromemanagementv1telemetryuserdevice)]|false|none|Telemetry data collected from a managed user and device.|
|userEmail|string|false|none|Email address of the user.|
|userId|string|false|none|Directory ID of the user.|

<h2 id="tocS_GoogleChromeManagementV1TelemetryUserDevice">GoogleChromeManagementV1TelemetryUserDevice</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryuserdevice"></a>
<a id="schema_GoogleChromeManagementV1TelemetryUserDevice"></a>
<a id="tocSgooglechromemanagementv1telemetryuserdevice"></a>
<a id="tocsgooglechromemanagementv1telemetryuserdevice"></a>

```json
{
  "audioStatusReport": [
    {
      "inputDevice": "string",
      "inputGain": 0,
      "inputMute": true,
      "outputDevice": "string",
      "outputMute": true,
      "outputVolume": 0,
      "reportTime": "string"
    }
  ],
  "deviceId": "string",
  "peripheralsReport": [
    {
      "reportTime": "string",
      "usbPeripheralReport": [
        {
          "categories": [
            "string"
          ],
          "classId": 0,
          "firmwareVersion": "string",
          "name": "string",
          "pid": 0,
          "subclassId": 0,
          "vendor": "string",
          "vid": 0
        }
      ]
    }
  ]
}
```

Telemetry data collected for a managed user and device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStatusReport|[[GoogleChromeManagementV1AudioStatusReport](#schemagooglechromemanagementv1audiostatusreport)]|false|read-only|Output only. Audio reports collected periodically sorted in a decreasing order of report_time.|
|deviceId|string|false|none|The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.|
|peripheralsReport|[[GoogleChromeManagementV1PeripheralsReport](#schemagooglechromemanagementv1peripheralsreport)]|false|read-only|Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.|

<h2 id="tocS_GoogleChromeManagementV1TelemetryUserInfo">GoogleChromeManagementV1TelemetryUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1telemetryuserinfo"></a>
<a id="schema_GoogleChromeManagementV1TelemetryUserInfo"></a>
<a id="tocSgooglechromemanagementv1telemetryuserinfo"></a>
<a id="tocsgooglechromemanagementv1telemetryuserinfo"></a>

```json
{
  "email": "string",
  "orgUnitId": "string"
}
```

Information about a user associated with telemetry data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|read-only|Output only. User's email.|
|orgUnitId|string|false|read-only|Output only. Organization unit ID of the user.|

<h2 id="tocS_GoogleChromeManagementV1ThunderboltInfo">GoogleChromeManagementV1ThunderboltInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1thunderboltinfo"></a>
<a id="schema_GoogleChromeManagementV1ThunderboltInfo"></a>
<a id="tocSgooglechromemanagementv1thunderboltinfo"></a>
<a id="tocsgooglechromemanagementv1thunderboltinfo"></a>

```json
{
  "securityLevel": "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED"
}
```

Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityLevel|string|false|none|Security level of the Thunderbolt bus.|

#### Enumerated Values

|Property|Value|
|---|---|
|securityLevel|THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED|
|securityLevel|THUNDERBOLT_SECURITY_NONE_LEVEL|
|securityLevel|THUNDERBOLT_SECURITY_USER_LEVEL|
|securityLevel|THUNDERBOLT_SECURITY_SECURE_LEVEL|
|securityLevel|THUNDERBOLT_SECURITY_DP_ONLY_LEVEL|
|securityLevel|THUNDERBOLT_SECURITY_USB_ONLY_LEVEL|
|securityLevel|THUNDERBOLT_SECURITY_NO_PCIE_LEVEL|

<h2 id="tocS_GoogleChromeManagementV1TotalMemoryEncryptionInfo">GoogleChromeManagementV1TotalMemoryEncryptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1totalmemoryencryptioninfo"></a>
<a id="schema_GoogleChromeManagementV1TotalMemoryEncryptionInfo"></a>
<a id="tocSgooglechromemanagementv1totalmemoryencryptioninfo"></a>
<a id="tocsgooglechromemanagementv1totalmemoryencryptioninfo"></a>

```json
{
  "encryptionAlgorithm": "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
  "encryptionState": "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
  "keyLength": "string",
  "maxKeys": "string"
}
```

Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionAlgorithm|string|false|none|Memory encryption algorithm.|
|encryptionState|string|false|none|The state of memory encryption on the device.|
|keyLength|string(int64)|false|none|The length of the encryption keys.|
|maxKeys|string(int64)|false|none|The maximum number of keys that can be used for encryption.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionAlgorithm|MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED|
|encryptionAlgorithm|MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN|
|encryptionAlgorithm|MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128|
|encryptionAlgorithm|MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256|
|encryptionState|MEMORY_ENCRYPTION_STATE_UNSPECIFIED|
|encryptionState|MEMORY_ENCRYPTION_STATE_UNKNOWN|
|encryptionState|MEMORY_ENCRYPTION_STATE_DISABLED|
|encryptionState|MEMORY_ENCRYPTION_STATE_TME|
|encryptionState|MEMORY_ENCRYPTION_STATE_MKTME|

<h2 id="tocS_GoogleChromeManagementV1TouchScreenDevice">GoogleChromeManagementV1TouchScreenDevice</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1touchscreendevice"></a>
<a id="schema_GoogleChromeManagementV1TouchScreenDevice"></a>
<a id="tocSgooglechromemanagementv1touchscreendevice"></a>
<a id="tocsgooglechromemanagementv1touchscreendevice"></a>

```json
{
  "displayName": "string",
  "stylusCapable": true,
  "touchPointCount": 0
}
```

Information of an internal touch screen device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. Touch screen device display name.|
|stylusCapable|boolean|false|read-only|Output only. Touch screen device is stylus capable or not.|
|touchPointCount|integer(int32)|false|read-only|Output only. Number of touch points supported on the device.|

<h2 id="tocS_GoogleChromeManagementV1TouchScreenInfo">GoogleChromeManagementV1TouchScreenInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1touchscreeninfo"></a>
<a id="schema_GoogleChromeManagementV1TouchScreenInfo"></a>
<a id="tocSgooglechromemanagementv1touchscreeninfo"></a>
<a id="tocsgooglechromemanagementv1touchscreeninfo"></a>

```json
{
  "devices": [
    {
      "displayName": "string",
      "stylusCapable": true,
      "touchPointCount": 0
    }
  ],
  "touchpadLibrary": "string"
}
```

Information on the device touch screen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[GoogleChromeManagementV1TouchScreenDevice](#schemagooglechromemanagementv1touchscreendevice)]|false|read-only|Output only. List of the internal touch screen devices.|
|touchpadLibrary|string|false|read-only|Output only. Touchpad library name used by the input stack.|

<h2 id="tocS_GoogleChromeManagementV1UsbPeripheralReport">GoogleChromeManagementV1UsbPeripheralReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglechromemanagementv1usbperipheralreport"></a>
<a id="schema_GoogleChromeManagementV1UsbPeripheralReport"></a>
<a id="tocSgooglechromemanagementv1usbperipheralreport"></a>
<a id="tocsgooglechromemanagementv1usbperipheralreport"></a>

```json
{
  "categories": [
    "string"
  ],
  "classId": 0,
  "firmwareVersion": "string",
  "name": "string",
  "pid": 0,
  "subclassId": 0,
  "vendor": "string",
  "vid": 0
}
```

USB connected peripheral report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|read-only|Output only. Categories the device belongs to https://www.usb.org/defined-class-codes|
|classId|integer(int32)|false|read-only|Output only. Class ID https://www.usb.org/defined-class-codes|
|firmwareVersion|string|false|read-only|Output only. Firmware version|
|name|string|false|read-only|Output only. Device name, model name, or product name|
|pid|integer(int32)|false|read-only|Output only. Product ID|
|subclassId|integer(int32)|false|read-only|Output only. Subclass ID https://www.usb.org/defined-class-codes|
|vendor|string|false|read-only|Output only. Vendor name|
|vid|integer(int32)|false|read-only|Output only. Vendor ID|

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
