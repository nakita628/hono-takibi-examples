<h1 id="android-management-api">Android Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Android Management API provides remote enterprise management of Android devices and apps.

Base URLs:

* <a href="https://androidmanagement.googleapis.com/">https://androidmanagement.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/android/management">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidmanagement|Manage Android devices and apps for your customers|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidmanagement|Manage Android devices and apps for your customers|

<h1 id="android-management-api-enterprises">enterprises</h1>

## androidmanagement.enterprises.list

<a id="opIdandroidmanagement.enterprises.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/enterprises \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/enterprises`

Lists EMM-managed enterprises. Only BASIC fields are returned.

<h3 id="androidmanagemententerpriseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The requested page size. The actual page size may be fixed to a min or max value.|
|pageToken|query|string|false|A token identifying a page of results returned by the server.|
|projectId|query|string|false|Required. The Cloud project ID of the EMM managing the enterprises.|
|view|query|string|false|Specifies which Enterprise fields to return. This method only supports BASIC.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|view|ENTERPRISE_VIEW_UNSPECIFIED|
|view|BASIC|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "enterprises": [
    {
      "appAutoApprovalEnabled": true,
      "contactInfo": {
        "contactEmail": "string",
        "dataProtectionOfficerEmail": "string",
        "dataProtectionOfficerName": "string",
        "dataProtectionOfficerPhone": "string",
        "euRepresentativeEmail": "string",
        "euRepresentativeName": "string",
        "euRepresentativePhone": "string"
      },
      "enabledNotificationTypes": [
        "NOTIFICATION_TYPE_UNSPECIFIED"
      ],
      "enterpriseDisplayName": "string",
      "logo": {
        "sha256Hash": "string",
        "url": "string"
      },
      "name": "string",
      "primaryColor": 0,
      "pubsubTopic": "string",
      "signinDetails": [
        {
          "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
          "qrCode": "string",
          "signinEnrollmentToken": "string",
          "signinUrl": "string"
        }
      ],
      "termsAndConditions": [
        {
          "content": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          },
          "header": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androidmanagemententerpriseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnterprisesResponse](#schemalistenterprisesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.create

<a id="opIdandroidmanagement.enterprises.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/enterprises \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appAutoApprovalEnabled": true,
    "contactInfo": {
      "contactEmail": "string",
      "dataProtectionOfficerEmail": "string",
      "dataProtectionOfficerName": "string",
      "dataProtectionOfficerPhone": "string",
      "euRepresentativeEmail": "string",
      "euRepresentativeName": "string",
      "euRepresentativePhone": "string"
    },
    "enabledNotificationTypes": [
      "NOTIFICATION_TYPE_UNSPECIFIED"
    ],
    "enterpriseDisplayName": "string",
    "logo": {
      "sha256Hash": "string",
      "url": "string"
    },
    "name": "string",
    "primaryColor": 0,
    "pubsubTopic": "string",
    "signinDetails": [
      {
        "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
        "qrCode": "string",
        "signinEnrollmentToken": "string",
        "signinUrl": "string"
      }
    ],
    "termsAndConditions": [
      {
        "content": {
          "defaultMessage": "string",
          "localizedMessages": {
            "property1": "string",
            "property2": "string"
          }
        },
        "header": {
          "defaultMessage": "string",
          "localizedMessages": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  }'
```

`POST /v1/enterprises`

Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail

> Body parameter

```json
{
  "appAutoApprovalEnabled": true,
  "contactInfo": {
    "contactEmail": "string",
    "dataProtectionOfficerEmail": "string",
    "dataProtectionOfficerName": "string",
    "dataProtectionOfficerPhone": "string",
    "euRepresentativeEmail": "string",
    "euRepresentativeName": "string",
    "euRepresentativePhone": "string"
  },
  "enabledNotificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "enterpriseDisplayName": "string",
  "logo": {
    "sha256Hash": "string",
    "url": "string"
  },
  "name": "string",
  "primaryColor": 0,
  "pubsubTopic": "string",
  "signinDetails": [
    {
      "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
      "qrCode": "string",
      "signinEnrollmentToken": "string",
      "signinUrl": "string"
    }
  ],
  "termsAndConditions": [
    {
      "content": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "header": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

<h3 id="androidmanagemententerprisescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agreementAccepted|query|boolean|false|Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).|
|enterpriseToken|query|string|false|The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).|
|projectId|query|string|false|The ID of the Google Cloud Platform project which will own the enterprise.|
|signupUrlName|query|string|false|The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» appAutoApprovalEnabled|body|boolean|false|Deprecated and unused.|
|» contactInfo|body|[ContactInfo](#schemacontactinfo)|false|The enterprise contact info of an EMM-managed enterprise.|
|» enabledNotificationTypes|body|[string]|false|The types of Google Pub/Sub notifications enabled for the enterprise.|
|» enterpriseDisplayName|body|string|false|The name of the enterprise displayed to users. This field has a maximum length of 100 characters.|
|» logo|body|[ExternalData](#schemaexternaldata)|false|An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.|
|» name|body|string|false|The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}.|
|» primaryColor|body|integer(int32)|false|A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) \| (green << 8) \| blue, where the value of each component is between 0 and 255, inclusive.|
|» pubsubTopic|body|string|false|The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled.|
|» signinDetails|body|[[SigninDetail](#schemasignindetail)]|false|Sign-in details of the enterprise.|
|» termsAndConditions|body|[[TermsAndConditions](#schematermsandconditions)]|false|Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» enabledNotificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|» enabledNotificationTypes|ENROLLMENT|
|» enabledNotificationTypes|COMPLIANCE_REPORT|
|» enabledNotificationTypes|STATUS_REPORT|
|» enabledNotificationTypes|COMMAND|
|» enabledNotificationTypes|USAGE_LOGS|

> Example responses

> 200 Response

```json
{
  "appAutoApprovalEnabled": true,
  "contactInfo": {
    "contactEmail": "string",
    "dataProtectionOfficerEmail": "string",
    "dataProtectionOfficerName": "string",
    "dataProtectionOfficerPhone": "string",
    "euRepresentativeEmail": "string",
    "euRepresentativeName": "string",
    "euRepresentativePhone": "string"
  },
  "enabledNotificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "enterpriseDisplayName": "string",
  "logo": {
    "sha256Hash": "string",
    "url": "string"
  },
  "name": "string",
  "primaryColor": 0,
  "pubsubTopic": "string",
  "signinDetails": [
    {
      "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
      "qrCode": "string",
      "signinEnrollmentToken": "string",
      "signinUrl": "string"
    }
  ],
  "termsAndConditions": [
    {
      "content": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "header": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

<h3 id="androidmanagemententerprisescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Enterprise](#schemaenterprise)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webApps.get

<a id="opIdandroidmanagement.enterprises.webApps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a web app.

<h3 id="androidmanagemententerpriseswebappsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the web app in the form enterprises/{enterpriseId}/webApp/{packageName}.|
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
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

<h3 id="androidmanagemententerpriseswebappsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webApps.delete

<a id="opIdandroidmanagement.enterprises.webApps.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a web app.

<h3 id="androidmanagemententerpriseswebappsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.|
|wipeDataFlags|query|[string]|false|Optional flags that control the device wiping behavior.|
|wipeReasonMessage|query|string|false|Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|wipeDataFlags|WIPE_DATA_FLAG_UNSPECIFIED|
|wipeDataFlags|PRESERVE_RESET_PROTECTION_DATA|
|wipeDataFlags|WIPE_EXTERNAL_STORAGE|
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

<h3 id="androidmanagemententerpriseswebappsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webApps.patch

<a id="opIdandroidmanagement.enterprises.webApps.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayMode": "DISPLAY_MODE_UNSPECIFIED",
    "icons": [
      {
        "imageData": "string"
      }
    ],
    "name": "string",
    "startUrl": "string",
    "title": "string",
    "versionCode": "string"
  }'
```

`PATCH /v1/{name}`

Updates a web app.

> Body parameter

```json
{
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

<h3 id="androidmanagemententerpriseswebappspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.|
|updateMask|query|string|false|The field mask indicating the fields to update. If not set, all modifiable fields will be modified.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» displayMode|body|string|false|The display mode of the web app.|
|» icons|body|[[WebAppIcon](#schemawebappicon)]|false|A list of icons for the web app. Must have at least one element.|
|» name|body|string|false|The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}.|
|» startUrl|body|string|false|The start URL, i.e. the URL that should load when the user opens the application.|
|» title|body|string|false|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|» versionCode|body|string(int64)|false|The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» displayMode|DISPLAY_MODE_UNSPECIFIED|
|» displayMode|MINIMAL_UI|
|» displayMode|STANDALONE|
|» displayMode|FULL_SCREEN|

> Example responses

> 200 Response

```json
{
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

<h3 id="androidmanagemententerpriseswebappspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.devices.operations.cancel

<a id="opIdandroidmanagement.enterprises.devices.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

<h3 id="androidmanagemententerprisesdevicesoperationscancel-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
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

<h3 id="androidmanagemententerprisesdevicesoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.devices.issueCommand

<a id="opIdandroidmanagement.enterprises.devices.issueCommand"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:issueCommand \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clearAppsDataParams": {
      "packageNames": [
        "string"
      ]
    },
    "createTime": "string",
    "duration": "string",
    "errorCode": "COMMAND_ERROR_CODE_UNSPECIFIED",
    "newPassword": "string",
    "resetPasswordFlags": [
      "RESET_PASSWORD_FLAG_UNSPECIFIED"
    ],
    "type": "COMMAND_TYPE_UNSPECIFIED",
    "userName": "string"
  }'
```

`POST /v1/{name}:issueCommand`

Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.

> Body parameter

```json
{
  "clearAppsDataParams": {
    "packageNames": [
      "string"
    ]
  },
  "createTime": "string",
  "duration": "string",
  "errorCode": "COMMAND_ERROR_CODE_UNSPECIFIED",
  "newPassword": "string",
  "resetPasswordFlags": [
    "RESET_PASSWORD_FLAG_UNSPECIFIED"
  ],
  "type": "COMMAND_TYPE_UNSPECIFIED",
  "userName": "string"
}
```

<h3 id="androidmanagemententerprisesdevicesissuecommand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Command](#schemacommand)|false|none|
|» clearAppsDataParams|body|[ClearAppsDataParams](#schemaclearappsdataparams)|false|Parameters for the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to CLEAR_APP_DATA. It is also acceptable to explicitly set type to CLEAR_APP_DATA.|
|» createTime|body|string(google-datetime)|false|The timestamp at which the command was created. The timestamp is automatically generated by the server.|
|» duration|body|string(google-duration)|false|The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.|
|» errorCode|body|string|false|If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller.|
|» newPassword|body|string|false|For commands of type RESET_PASSWORD, optionally specifies the new password.|
|» resetPasswordFlags|body|[string]|false|For commands of type RESET_PASSWORD, optionally specifies flags.|
|» type|body|string|false|The type of the command.|
|» userName|body|string|false|The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» errorCode|COMMAND_ERROR_CODE_UNSPECIFIED|
|» errorCode|UNKNOWN|
|» errorCode|API_LEVEL|
|» errorCode|MANAGEMENT_MODE|
|» errorCode|INVALID_VALUE|
|» errorCode|UNSUPPORTED|
|» resetPasswordFlags|RESET_PASSWORD_FLAG_UNSPECIFIED|
|» resetPasswordFlags|REQUIRE_ENTRY|
|» resetPasswordFlags|DO_NOT_ASK_CREDENTIALS_ON_BOOT|
|» resetPasswordFlags|LOCK_NOW|
|» type|COMMAND_TYPE_UNSPECIFIED|
|» type|LOCK|
|» type|RESET_PASSWORD|
|» type|REBOOT|
|» type|RELINQUISH_OWNERSHIP|
|» type|CLEAR_APP_DATA|

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

<h3 id="androidmanagemententerprisesdevicesissuecommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.devices.list

<a id="opIdandroidmanagement.enterprises.devices.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/devices`

Lists devices for a given enterprise. Deleted devices are not returned in the response.

<h3 id="androidmanagemententerprisesdeviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|pageSize|query|integer|false|The requested page size. The actual page size may be fixed to a min or max value.|
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
  "devices": [
    {
      "apiLevel": 0,
      "applicationReports": [
        {
          "applicationSource": "APPLICATION_SOURCE_UNSPECIFIED",
          "displayName": "string",
          "events": [
            {
              "createTime": "string",
              "eventType": "APPLICATION_EVENT_TYPE_UNSPECIFIED"
            }
          ],
          "installerPackageName": "string",
          "keyedAppStates": [
            {
              "createTime": "string",
              "data": "string",
              "key": "string",
              "lastUpdateTime": "string",
              "message": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ],
          "packageName": "string",
          "packageSha256Hash": "string",
          "signingKeyCertFingerprints": [
            "string"
          ],
          "state": "APPLICATION_STATE_UNSPECIFIED",
          "versionCode": 0,
          "versionName": "string"
        }
      ],
      "appliedPasswordPolicies": [
        {
          "maximumFailedPasswordsForWipe": 0,
          "passwordExpirationTimeout": "string",
          "passwordHistoryLength": 0,
          "passwordMinimumLength": 0,
          "passwordMinimumLetters": 0,
          "passwordMinimumLowerCase": 0,
          "passwordMinimumNonLetter": 0,
          "passwordMinimumNumeric": 0,
          "passwordMinimumSymbols": 0,
          "passwordMinimumUpperCase": 0,
          "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
          "passwordScope": "SCOPE_UNSPECIFIED",
          "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
          "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
        }
      ],
      "appliedPolicyName": "string",
      "appliedPolicyVersion": "string",
      "appliedState": "DEVICE_STATE_UNSPECIFIED",
      "commonCriteriaModeInfo": {
        "commonCriteriaModeStatus": "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
      },
      "deviceSettings": {
        "adbEnabled": true,
        "developmentSettingsEnabled": true,
        "encryptionStatus": "ENCRYPTION_STATUS_UNSPECIFIED",
        "isDeviceSecure": true,
        "isEncrypted": true,
        "unknownSourcesEnabled": true,
        "verifyAppsEnabled": true
      },
      "disabledReason": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displays": [
        {
          "density": 0,
          "displayId": 0,
          "height": 0,
          "name": "string",
          "refreshRate": 0,
          "state": "DISPLAY_STATE_UNSPECIFIED",
          "width": 0
        }
      ],
      "enrollmentTime": "string",
      "enrollmentTokenData": "string",
      "enrollmentTokenName": "string",
      "hardwareInfo": {
        "batteryShutdownTemperatures": [
          0
        ],
        "batteryThrottlingTemperatures": [
          0
        ],
        "brand": "string",
        "cpuShutdownTemperatures": [
          0
        ],
        "cpuThrottlingTemperatures": [
          0
        ],
        "deviceBasebandVersion": "string",
        "enterpriseSpecificId": "string",
        "gpuShutdownTemperatures": [
          0
        ],
        "gpuThrottlingTemperatures": [
          0
        ],
        "hardware": "string",
        "manufacturer": "string",
        "model": "string",
        "serialNumber": "string",
        "skinShutdownTemperatures": [
          0
        ],
        "skinThrottlingTemperatures": [
          0
        ]
      },
      "hardwareStatusSamples": [
        {
          "batteryTemperatures": [
            0
          ],
          "cpuTemperatures": [
            0
          ],
          "cpuUsages": [
            0
          ],
          "createTime": "string",
          "fanSpeeds": [
            0
          ],
          "gpuTemperatures": [
            0
          ],
          "skinTemperatures": [
            0
          ]
        }
      ],
      "lastPolicyComplianceReportTime": "string",
      "lastPolicySyncTime": "string",
      "lastStatusReportTime": "string",
      "managementMode": "MANAGEMENT_MODE_UNSPECIFIED",
      "memoryEvents": [
        {
          "byteCount": "string",
          "createTime": "string",
          "eventType": "MEMORY_EVENT_TYPE_UNSPECIFIED"
        }
      ],
      "memoryInfo": {
        "totalInternalStorage": "string",
        "totalRam": "string"
      },
      "name": "string",
      "networkInfo": {
        "imei": "string",
        "meid": "string",
        "networkOperatorName": "string",
        "telephonyInfos": [
          {
            "carrierName": "string",
            "phoneNumber": "string"
          }
        ],
        "wifiMacAddress": "string"
      },
      "nonComplianceDetails": [
        {
          "currentValue": null,
          "fieldPath": "string",
          "installationFailureReason": "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
          "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
          "packageName": "string",
          "settingName": "string",
          "specificNonComplianceContext": {
            "oncWifiContext": {
              "wifiGuid": "string"
            },
            "passwordPoliciesContext": {
              "passwordPolicyScope": "SCOPE_UNSPECIFIED"
            }
          },
          "specificNonComplianceReason": "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
        }
      ],
      "ownership": "OWNERSHIP_UNSPECIFIED",
      "policyCompliant": true,
      "policyName": "string",
      "powerManagementEvents": [
        {
          "batteryLevel": 0,
          "createTime": "string",
          "eventType": "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
        }
      ],
      "previousDeviceNames": [
        "string"
      ],
      "securityPosture": {
        "devicePosture": "POSTURE_UNSPECIFIED",
        "postureDetails": [
          {
            "advice": [
              {
                "defaultMessage": "string",
                "localizedMessages": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "securityRisk": "SECURITY_RISK_UNSPECIFIED"
          }
        ]
      },
      "softwareInfo": {
        "androidBuildNumber": "string",
        "androidBuildTime": "string",
        "androidDevicePolicyVersionCode": 0,
        "androidDevicePolicyVersionName": "string",
        "androidVersion": "string",
        "bootloaderVersion": "string",
        "deviceBuildSignature": "string",
        "deviceKernelVersion": "string",
        "primaryLanguageCode": "string",
        "securityPatchLevel": "string",
        "systemUpdateInfo": {
          "updateReceivedTime": "string",
          "updateStatus": "UPDATE_STATUS_UNKNOWN"
        }
      },
      "state": "DEVICE_STATE_UNSPECIFIED",
      "systemProperties": {
        "property1": "string",
        "property2": "string"
      },
      "user": {
        "accountIdentifier": "string"
      },
      "userName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androidmanagemententerprisesdeviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDevicesResponse](#schemalistdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.enrollmentTokens.list

<a id="opIdandroidmanagement.enterprises.enrollmentTokens.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/enrollmentTokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/enrollmentTokens`

Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

<h3 id="androidmanagemententerprisesenrollmenttokenslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the enterprise in the form enterprises/{enterpriseId}.|
|pageSize|query|integer|false|The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
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
  "enrollmentTokens": [
    {
      "additionalData": "string",
      "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
      "duration": "string",
      "expirationTimestamp": "string",
      "name": "string",
      "oneTimeOnly": true,
      "policyName": "string",
      "qrCode": "string",
      "user": {
        "accountIdentifier": "string"
      },
      "value": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="androidmanagemententerprisesenrollmenttokenslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnrollmentTokensResponse](#schemalistenrollmenttokensresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.enrollmentTokens.create

<a id="opIdandroidmanagement.enterprises.enrollmentTokens.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/enrollmentTokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalData": "string",
    "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
    "duration": "string",
    "expirationTimestamp": "string",
    "name": "string",
    "oneTimeOnly": true,
    "policyName": "string",
    "qrCode": "string",
    "user": {
      "accountIdentifier": "string"
    },
    "value": "string"
  }'
```

`POST /v1/{parent}/enrollmentTokens`

Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.

> Body parameter

```json
{
  "additionalData": "string",
  "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
  "duration": "string",
  "expirationTimestamp": "string",
  "name": "string",
  "oneTimeOnly": true,
  "policyName": "string",
  "qrCode": "string",
  "user": {
    "accountIdentifier": "string"
  },
  "value": "string"
}
```

<h3 id="androidmanagemententerprisesenrollmenttokenscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[EnrollmentToken](#schemaenrollmenttoken)|false|none|
|» additionalData|body|string|false|Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.|
|» allowPersonalUsage|body|string|false|Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.|
|» duration|body|string(google-duration)|false|The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE.|
|» expirationTimestamp|body|string(google-datetime)|false|The expiration time of the token. This is a read-only field generated by the server.|
|» name|body|string|false|The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.|
|» oneTimeOnly|body|boolean|false|Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration.|
|» policyName|body|string|false|The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.|
|» qrCode|body|string|false|A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.|
|» user|body|[User](#schemauser)|false|The user associated with this enrollment token. If it's specified when the enrollment token is created and the user does not exist, the user will be created. This field must not contain personally identifiable information. Only the account_identifier field needs to be set.|
|» value|body|string|false|The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» allowPersonalUsage|ALLOW_PERSONAL_USAGE_UNSPECIFIED|
|» allowPersonalUsage|PERSONAL_USAGE_ALLOWED|
|» allowPersonalUsage|PERSONAL_USAGE_DISALLOWED|

> Example responses

> 200 Response

```json
{
  "additionalData": "string",
  "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
  "duration": "string",
  "expirationTimestamp": "string",
  "name": "string",
  "oneTimeOnly": true,
  "policyName": "string",
  "qrCode": "string",
  "user": {
    "accountIdentifier": "string"
  },
  "value": "string"
}
```

<h3 id="androidmanagemententerprisesenrollmenttokenscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EnrollmentToken](#schemaenrollmenttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.policies.list

<a id="opIdandroidmanagement.enterprises.policies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/policies`

Lists policies for a given enterprise.

<h3 id="androidmanagemententerprisespolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|pageSize|query|integer|false|The requested page size. The actual page size may be fixed to a min or max value.|
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
  "policies": [
    {
      "accountTypesWithManagementDisabled": [
        "string"
      ],
      "addUserDisabled": true,
      "adjustVolumeDisabled": true,
      "advancedSecurityOverrides": {
        "commonCriteriaMode": "COMMON_CRITERIA_MODE_UNSPECIFIED",
        "developerSettings": "DEVELOPER_SETTINGS_UNSPECIFIED",
        "googlePlayProtectVerifyApps": "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED",
        "personalAppsThatCanReadWorkNotifications": [
          "string"
        ],
        "untrustedAppsPolicy": "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
      },
      "alwaysOnVpnPackage": {
        "lockdownEnabled": true,
        "packageName": "string"
      },
      "androidDevicePolicyTracks": [
        "APP_TRACK_UNSPECIFIED"
      ],
      "appAutoUpdatePolicy": "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
      "applications": [
        {
          "accessibleTrackIds": [
            "string"
          ],
          "alwaysOnVpnLockdownExemption": "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
          "autoUpdateMode": "AUTO_UPDATE_MODE_UNSPECIFIED",
          "connectedWorkAndPersonalApp": "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
          "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
          "delegatedScopes": [
            "DELEGATED_SCOPE_UNSPECIFIED"
          ],
          "disabled": true,
          "extensionConfig": {
            "notificationReceiver": "string",
            "signingKeyFingerprintsSha256": [
              "string"
            ]
          },
          "installType": "INSTALL_TYPE_UNSPECIFIED",
          "lockTaskAllowed": true,
          "managedConfiguration": {
            "property1": null,
            "property2": null
          },
          "managedConfigurationTemplate": {
            "configurationVariables": {
              "property1": "string",
              "property2": "string"
            },
            "templateId": "string"
          },
          "minimumVersionCode": 0,
          "packageName": "string",
          "permissionGrants": [
            {
              "permission": "string",
              "policy": "PERMISSION_POLICY_UNSPECIFIED"
            }
          ],
          "workProfileWidgets": "WORK_PROFILE_WIDGETS_UNSPECIFIED"
        }
      ],
      "autoDateAndTimeZone": "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
      "autoTimeRequired": true,
      "blockApplicationsEnabled": true,
      "bluetoothConfigDisabled": true,
      "bluetoothContactSharingDisabled": true,
      "bluetoothDisabled": true,
      "cameraAccess": "CAMERA_ACCESS_UNSPECIFIED",
      "cameraDisabled": true,
      "cellBroadcastsConfigDisabled": true,
      "choosePrivateKeyRules": [
        {
          "packageNames": [
            "string"
          ],
          "privateKeyAlias": "string",
          "urlPattern": "string"
        }
      ],
      "complianceRules": [
        {
          "apiLevelCondition": {
            "minApiLevel": 0
          },
          "disableApps": true,
          "nonComplianceDetailCondition": {
            "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
            "packageName": "string",
            "settingName": "string"
          },
          "packageNamesToDisable": [
            "string"
          ]
        }
      ],
      "createWindowsDisabled": true,
      "credentialsConfigDisabled": true,
      "crossProfilePolicies": {
        "crossProfileCopyPaste": "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
        "crossProfileDataSharing": "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
        "showWorkContactsInPersonalProfile": "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
        "workProfileWidgetsDefault": "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED"
      },
      "dataRoamingDisabled": true,
      "debuggingFeaturesAllowed": true,
      "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
      "deviceOwnerLockScreenInfo": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "encryptionPolicy": "ENCRYPTION_POLICY_UNSPECIFIED",
      "ensureVerifyAppsEnabled": true,
      "factoryResetDisabled": true,
      "frpAdminEmails": [
        "string"
      ],
      "funDisabled": true,
      "installAppsDisabled": true,
      "installUnknownSourcesAllowed": true,
      "keyguardDisabled": true,
      "keyguardDisabledFeatures": [
        "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
      ],
      "kioskCustomLauncherEnabled": true,
      "kioskCustomization": {
        "deviceSettings": "DEVICE_SETTINGS_UNSPECIFIED",
        "powerButtonActions": "POWER_BUTTON_ACTIONS_UNSPECIFIED",
        "statusBar": "STATUS_BAR_UNSPECIFIED",
        "systemErrorWarnings": "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
        "systemNavigation": "SYSTEM_NAVIGATION_UNSPECIFIED"
      },
      "locationMode": "LOCATION_MODE_UNSPECIFIED",
      "longSupportMessage": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "maximumTimeToLock": "string",
      "microphoneAccess": "MICROPHONE_ACCESS_UNSPECIFIED",
      "minimumApiLevel": 0,
      "mobileNetworksConfigDisabled": true,
      "modifyAccountsDisabled": true,
      "mountPhysicalMediaDisabled": true,
      "name": "string",
      "networkEscapeHatchEnabled": true,
      "networkResetDisabled": true,
      "oncCertificateProviders": [
        {
          "certificateReferences": [
            "string"
          ],
          "contentProviderEndpoint": {
            "packageName": "string",
            "signingCertsSha256": [
              "string"
            ],
            "uri": "string"
          }
        }
      ],
      "openNetworkConfiguration": {
        "property1": null,
        "property2": null
      },
      "outgoingBeamDisabled": true,
      "outgoingCallsDisabled": true,
      "passwordPolicies": [
        {
          "maximumFailedPasswordsForWipe": 0,
          "passwordExpirationTimeout": "string",
          "passwordHistoryLength": 0,
          "passwordMinimumLength": 0,
          "passwordMinimumLetters": 0,
          "passwordMinimumLowerCase": 0,
          "passwordMinimumNonLetter": 0,
          "passwordMinimumNumeric": 0,
          "passwordMinimumSymbols": 0,
          "passwordMinimumUpperCase": 0,
          "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
          "passwordScope": "SCOPE_UNSPECIFIED",
          "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
          "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
        }
      ],
      "passwordRequirements": {
        "maximumFailedPasswordsForWipe": 0,
        "passwordExpirationTimeout": "string",
        "passwordHistoryLength": 0,
        "passwordMinimumLength": 0,
        "passwordMinimumLetters": 0,
        "passwordMinimumLowerCase": 0,
        "passwordMinimumNonLetter": 0,
        "passwordMinimumNumeric": 0,
        "passwordMinimumSymbols": 0,
        "passwordMinimumUpperCase": 0,
        "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
        "passwordScope": "SCOPE_UNSPECIFIED",
        "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
        "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
      },
      "permissionGrants": [
        {
          "permission": "string",
          "policy": "PERMISSION_POLICY_UNSPECIFIED"
        }
      ],
      "permittedAccessibilityServices": {
        "packageNames": [
          "string"
        ]
      },
      "permittedInputMethods": {
        "packageNames": [
          "string"
        ]
      },
      "persistentPreferredActivities": [
        {
          "actions": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "receiverActivity": "string"
        }
      ],
      "personalUsagePolicies": {
        "accountTypesWithManagementDisabled": [
          "string"
        ],
        "cameraDisabled": true,
        "maxDaysWithWorkOff": 0,
        "personalApplications": [
          {
            "installType": "INSTALL_TYPE_UNSPECIFIED",
            "packageName": "string"
          }
        ],
        "personalPlayStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
        "screenCaptureDisabled": true
      },
      "playStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
      "policyEnforcementRules": [
        {
          "blockAction": {
            "blockAfterDays": 0,
            "blockScope": "BLOCK_SCOPE_UNSPECIFIED"
          },
          "settingName": "string",
          "wipeAction": {
            "preserveFrp": true,
            "wipeAfterDays": 0
          }
        }
      ],
      "preferentialNetworkService": "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
      "privateKeySelectionEnabled": true,
      "recommendedGlobalProxy": {
        "excludedHosts": [
          "string"
        ],
        "host": "string",
        "pacUri": "string",
        "port": 0
      },
      "removeUserDisabled": true,
      "safeBootDisabled": true,
      "screenCaptureDisabled": true,
      "setUserIconDisabled": true,
      "setWallpaperDisabled": true,
      "setupActions": [
        {
          "description": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          },
          "launchApp": {
            "packageName": "string"
          },
          "title": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "shareLocationDisabled": true,
      "shortSupportMessage": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "skipFirstUseHintsEnabled": true,
      "smsDisabled": true,
      "statusBarDisabled": true,
      "statusReportingSettings": {
        "applicationReportingSettings": {
          "includeRemovedApps": true
        },
        "applicationReportsEnabled": true,
        "commonCriteriaModeEnabled": true,
        "deviceSettingsEnabled": true,
        "displayInfoEnabled": true,
        "hardwareStatusEnabled": true,
        "memoryInfoEnabled": true,
        "networkInfoEnabled": true,
        "powerManagementEventsEnabled": true,
        "softwareInfoEnabled": true,
        "systemPropertiesEnabled": true
      },
      "stayOnPluggedModes": [
        "BATTERY_PLUGGED_MODE_UNSPECIFIED"
      ],
      "systemUpdate": {
        "endMinutes": 0,
        "freezePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ],
        "startMinutes": 0,
        "type": "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
      },
      "tetheringConfigDisabled": true,
      "uninstallAppsDisabled": true,
      "unmuteMicrophoneDisabled": true,
      "usageLog": {
        "enabledLogTypes": [
          "LOG_TYPE_UNSPECIFIED"
        ],
        "uploadOnCellularAllowed": [
          "LOG_TYPE_UNSPECIFIED"
        ]
      },
      "usbFileTransferDisabled": true,
      "usbMassStorageEnabled": true,
      "version": "string",
      "vpnConfigDisabled": true,
      "wifiConfigDisabled": true,
      "wifiConfigsLockdownEnabled": true
    }
  ]
}
```

<h3 id="androidmanagemententerprisespolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPoliciesResponse](#schemalistpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webApps.list

<a id="opIdandroidmanagement.enterprises.webApps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/webApps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/webApps`

Lists web apps for a given enterprise.

<h3 id="androidmanagemententerpriseswebappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|pageSize|query|integer|false|The requested page size. This is a hint and the actual page size in the response may be different.|
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
  "webApps": [
    {
      "displayMode": "DISPLAY_MODE_UNSPECIFIED",
      "icons": [
        {
          "imageData": "string"
        }
      ],
      "name": "string",
      "startUrl": "string",
      "title": "string",
      "versionCode": "string"
    }
  ]
}
```

<h3 id="androidmanagemententerpriseswebappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWebAppsResponse](#schemalistwebappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webApps.create

<a id="opIdandroidmanagement.enterprises.webApps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/webApps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayMode": "DISPLAY_MODE_UNSPECIFIED",
    "icons": [
      {
        "imageData": "string"
      }
    ],
    "name": "string",
    "startUrl": "string",
    "title": "string",
    "versionCode": "string"
  }'
```

`POST /v1/{parent}/webApps`

Creates a web app.

> Body parameter

```json
{
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

<h3 id="androidmanagemententerpriseswebappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|» displayMode|body|string|false|The display mode of the web app.|
|» icons|body|[[WebAppIcon](#schemawebappicon)]|false|A list of icons for the web app. Must have at least one element.|
|» name|body|string|false|The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}.|
|» startUrl|body|string|false|The start URL, i.e. the URL that should load when the user opens the application.|
|» title|body|string|false|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|» versionCode|body|string(int64)|false|The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» displayMode|DISPLAY_MODE_UNSPECIFIED|
|» displayMode|MINIMAL_UI|
|» displayMode|STANDALONE|
|» displayMode|FULL_SCREEN|

> Example responses

> 200 Response

```json
{
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

<h3 id="androidmanagemententerpriseswebappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebApp](#schemawebapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

## androidmanagement.enterprises.webTokens.create

<a id="opIdandroidmanagement.enterprises.webTokens.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/webTokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabledFeatures": [
      "FEATURE_UNSPECIFIED"
    ],
    "name": "string",
    "parentFrameUrl": "string",
    "permissions": [
      "WEB_TOKEN_PERMISSION_UNSPECIFIED"
    ],
    "value": "string"
  }'
```

`POST /v1/{parent}/webTokens`

Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

> Body parameter

```json
{
  "enabledFeatures": [
    "FEATURE_UNSPECIFIED"
  ],
  "name": "string",
  "parentFrameUrl": "string",
  "permissions": [
    "WEB_TOKEN_PERMISSION_UNSPECIFIED"
  ],
  "value": "string"
}
```

<h3 id="androidmanagemententerpriseswebtokenscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the enterprise in the form enterprises/{enterpriseId}.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[WebToken](#schemawebtoken)|false|none|
|» enabledFeatures|body|[string]|false|The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored |
|» name|body|string|false|The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.|
|» parentFrameUrl|body|string|false|The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.|
|» permissions|body|[string]|false|Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated.|
|» value|body|string|false|The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» enabledFeatures|FEATURE_UNSPECIFIED|
|» enabledFeatures|PLAY_SEARCH|
|» enabledFeatures|PRIVATE_APPS|
|» enabledFeatures|WEB_APPS|
|» enabledFeatures|STORE_BUILDER|
|» enabledFeatures|MANAGED_CONFIGURATIONS|
|» enabledFeatures|ZERO_TOUCH_CUSTOMER_MANAGEMENT|
|» permissions|WEB_TOKEN_PERMISSION_UNSPECIFIED|
|» permissions|APPROVE_APPS|

> Example responses

> 200 Response

```json
{
  "enabledFeatures": [
    "FEATURE_UNSPECIFIED"
  ],
  "name": "string",
  "parentFrameUrl": "string",
  "permissions": [
    "WEB_TOKEN_PERMISSION_UNSPECIFIED"
  ],
  "value": "string"
}
```

<h3 id="androidmanagemententerpriseswebtokenscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebToken](#schemawebtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

<h1 id="android-management-api-signupurls">signupUrls</h1>

## androidmanagement.signupUrls.create

<a id="opIdandroidmanagement.signupUrls.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/signupUrls \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/signupUrls`

Creates an enterprise signup URL.

<h3 id="androidmanagementsignupurlscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callbackUrl|query|string|false|The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.|
|projectId|query|string|false|The ID of the Google Cloud Platform project which will own the enterprise.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "name": "string",
  "url": "string"
}
```

<h3 id="androidmanagementsignupurlscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SignupUrl](#schemasignupurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidmanagement ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidmanagement )
</aside>

# Schemas

<h2 id="tocS_AdbShellCommandEvent">AdbShellCommandEvent</h2>
<!-- backwards compatibility -->
<a id="schemaadbshellcommandevent"></a>
<a id="schema_AdbShellCommandEvent"></a>
<a id="tocSadbshellcommandevent"></a>
<a id="tocsadbshellcommandevent"></a>

```json
{
  "shellCmd": "string"
}
```

A shell command was issued over ADB via “adb shell command”.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shellCmd|string|false|none|Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices.|

<h2 id="tocS_AdbShellInteractiveEvent">AdbShellInteractiveEvent</h2>
<!-- backwards compatibility -->
<a id="schemaadbshellinteractiveevent"></a>
<a id="schema_AdbShellInteractiveEvent"></a>
<a id="tocSadbshellinteractiveevent"></a>
<a id="tocsadbshellinteractiveevent"></a>

```json
{}
```

An ADB interactive shell was opened via “adb shell”. Intentionally empty.

<h2 id="tocS_AdvancedSecurityOverrides">AdvancedSecurityOverrides</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsecurityoverrides"></a>
<a id="schema_AdvancedSecurityOverrides"></a>
<a id="tocSadvancedsecurityoverrides"></a>
<a id="tocsadvancedsecurityoverrides"></a>

```json
{
  "commonCriteriaMode": "COMMON_CRITERIA_MODE_UNSPECIFIED",
  "developerSettings": "DEVELOPER_SETTINGS_UNSPECIFIED",
  "googlePlayProtectVerifyApps": "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED",
  "personalAppsThatCanReadWorkNotifications": [
    "string"
  ],
  "untrustedAppsPolicy": "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
}
```

Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonCriteriaMode|string|false|none|Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required.|
|developerSettings|string|false|none|Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated).|
|googlePlayProtectVerifyApps|string|false|none|Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated).|
|personalAppsThatCanReadWorkNotifications|[string]|false|none|Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name.|
|untrustedAppsPolicy|string|false|none|The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated).|

#### Enumerated Values

|Property|Value|
|---|---|
|commonCriteriaMode|COMMON_CRITERIA_MODE_UNSPECIFIED|
|commonCriteriaMode|COMMON_CRITERIA_MODE_DISABLED|
|commonCriteriaMode|COMMON_CRITERIA_MODE_ENABLED|
|developerSettings|DEVELOPER_SETTINGS_UNSPECIFIED|
|developerSettings|DEVELOPER_SETTINGS_DISABLED|
|developerSettings|DEVELOPER_SETTINGS_ALLOWED|
|googlePlayProtectVerifyApps|GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED|
|googlePlayProtectVerifyApps|VERIFY_APPS_ENFORCED|
|googlePlayProtectVerifyApps|VERIFY_APPS_USER_CHOICE|
|untrustedAppsPolicy|UNTRUSTED_APPS_POLICY_UNSPECIFIED|
|untrustedAppsPolicy|DISALLOW_INSTALL|
|untrustedAppsPolicy|ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY|
|untrustedAppsPolicy|ALLOW_INSTALL_DEVICE_WIDE|

<h2 id="tocS_AlwaysOnVpnPackage">AlwaysOnVpnPackage</h2>
<!-- backwards compatibility -->
<a id="schemaalwaysonvpnpackage"></a>
<a id="schema_AlwaysOnVpnPackage"></a>
<a id="tocSalwaysonvpnpackage"></a>
<a id="tocsalwaysonvpnpackage"></a>

```json
{
  "lockdownEnabled": true,
  "packageName": "string"
}
```

Configuration for an always-on VPN connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lockdownEnabled|boolean|false|none|Disallows networking when the VPN is not connected.|
|packageName|string|false|none|The package name of the VPN app.|

<h2 id="tocS_ApiLevelCondition">ApiLevelCondition</h2>
<!-- backwards compatibility -->
<a id="schemaapilevelcondition"></a>
<a id="schema_ApiLevelCondition"></a>
<a id="tocSapilevelcondition"></a>
<a id="tocsapilevelcondition"></a>

```json
{
  "minApiLevel": 0
}
```

A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minApiLevel|integer(int32)|false|none|The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.|

<h2 id="tocS_AppProcessInfo">AppProcessInfo</h2>
<!-- backwards compatibility -->
<a id="schemaappprocessinfo"></a>
<a id="schema_AppProcessInfo"></a>
<a id="tocSappprocessinfo"></a>
<a id="tocsappprocessinfo"></a>

```json
{
  "apkSha256Hash": "string",
  "packageNames": [
    "string"
  ],
  "pid": 0,
  "processName": "string",
  "seinfo": "string",
  "startTime": "string",
  "uid": 0
}
```

Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apkSha256Hash|string|false|none|SHA-256 hash of the base APK, in hexadecimal format.|
|packageNames|[string]|false|none|Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included.|
|pid|integer(int32)|false|none|Process ID.|
|processName|string|false|none|Process name.|
|seinfo|string|false|none|SELinux policy info.|
|startTime|string(google-datetime)|false|none|Process start time.|
|uid|integer(int32)|false|none|UID of the package.|

<h2 id="tocS_AppProcessStartEvent">AppProcessStartEvent</h2>
<!-- backwards compatibility -->
<a id="schemaappprocessstartevent"></a>
<a id="schema_AppProcessStartEvent"></a>
<a id="tocSappprocessstartevent"></a>
<a id="tocsappprocessstartevent"></a>

```json
{
  "processInfo": {
    "apkSha256Hash": "string",
    "packageNames": [
      "string"
    ],
    "pid": 0,
    "processName": "string",
    "seinfo": "string",
    "startTime": "string",
    "uid": 0
  }
}
```

An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processInfo|[AppProcessInfo](#schemaappprocessinfo)|false|none|Information about a process.|

<h2 id="tocS_AppTrackInfo">AppTrackInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapptrackinfo"></a>
<a id="schema_AppTrackInfo"></a>
<a id="tocSapptrackinfo"></a>
<a id="tocsapptrackinfo"></a>

```json
{
  "trackAlias": "string",
  "trackId": "string"
}
```

Id to name association of a app track.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackAlias|string|false|none|The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console.|
|trackId|string|false|none|The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information.|

<h2 id="tocS_AppVersion">AppVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappversion"></a>
<a id="schema_AppVersion"></a>
<a id="tocSappversion"></a>
<a id="tocsappversion"></a>

```json
{
  "production": true,
  "trackIds": [
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
|production|boolean|false|none|If the value is True, it indicates that this version is a production track.|
|trackIds|[string]|false|none|Track identifiers that the app version is published in. This does not include the production track (see production instead).|
|versionCode|integer(int32)|false|none|Unique increasing identifier for the app version.|
|versionString|string|false|none|The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "appPricing": "APP_PRICING_UNSPECIFIED",
  "appTracks": [
    {
      "trackAlias": "string",
      "trackId": "string"
    }
  ],
  "appVersions": [
    {
      "production": true,
      "trackIds": [
        "string"
      ],
      "versionCode": 0,
      "versionString": "string"
    }
  ],
  "author": "string",
  "availableCountries": [
    "string"
  ],
  "category": "string",
  "contentRating": "CONTENT_RATING_UNSPECIFIED",
  "description": "string",
  "distributionChannel": "DISTRIBUTION_CHANNEL_UNSPECIFIED",
  "features": [
    "APP_FEATURE_UNSPECIFIED"
  ],
  "fullDescription": "string",
  "iconUrl": "string",
  "managedProperties": [
    {
      "defaultValue": null,
      "description": "string",
      "entries": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "key": "string",
      "nestedProperties": [
        {}
      ],
      "title": "string",
      "type": "MANAGED_PROPERTY_TYPE_UNSPECIFIED"
    }
  ],
  "minAndroidSdkVersion": 0,
  "name": "string",
  "permissions": [
    {
      "description": "string",
      "name": "string",
      "permissionId": "string"
    }
  ],
  "playStoreUrl": "string",
  "recentChanges": "string",
  "screenshotUrls": [
    "string"
  ],
  "smallIconUrl": "string",
  "title": "string",
  "updateTime": "string"
}
```

Information about an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appPricing|string|false|none|Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it).|
|appTracks|[[AppTrackInfo](#schemaapptrackinfo)]|false|none|Application tracks visible to the enterprise.|
|appVersions|[[AppVersion](#schemaappversion)]|false|none|Versions currently available for this app.|
|author|string|false|none|The name of the author of the apps (for example, the app developer).|
|availableCountries|[string]|false|none|The countries which this app is available in as per ISO 3166-1 alpha-2.|
|category|string|false|none|The app category (e.g. RACING, SOCIAL, etc.)|
|contentRating|string|false|none|The content rating for this app.|
|description|string|false|none|The localized promotional description, if available.|
|distributionChannel|string|false|none|How and to whom the package is made available.|
|features|[string]|false|none|Noteworthy features (if any) of this app.|
|fullDescription|string|false|none|Full app description, if available.|
|iconUrl|string|false|none|A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512.|
|managedProperties|[[ManagedProperty](#schemamanagedproperty)]|false|none|The set of managed properties available to be pre-configured for the app.|
|minAndroidSdkVersion|integer(int32)|false|none|The minimum Android SDK necessary to run the app.|
|name|string|false|none|The name of the app in the form enterprises/{enterprise}/applications/{package_name}.|
|permissions|[[ApplicationPermission](#schemaapplicationpermission)]|false|none|The permissions required by the app.|
|playStoreUrl|string|false|none|A link to the (consumer) Google Play details page for the app.|
|recentChanges|string|false|none|A localised description of the recent changes made to the app.|
|screenshotUrls|[string]|false|none|A list of screenshot links representing the app.|
|smallIconUrl|string|false|none|A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128.|
|title|string|false|none|The title of the app. Localized.|
|updateTime|string(google-datetime)|false|read-only|Output only. The approximate time (within 7 days) the app was last published.|

#### Enumerated Values

|Property|Value|
|---|---|
|appPricing|APP_PRICING_UNSPECIFIED|
|appPricing|FREE|
|appPricing|FREE_WITH_IN_APP_PURCHASE|
|appPricing|PAID|
|contentRating|CONTENT_RATING_UNSPECIFIED|
|contentRating|THREE_YEARS|
|contentRating|SEVEN_YEARS|
|contentRating|TWELVE_YEARS|
|contentRating|SIXTEEN_YEARS|
|contentRating|EIGHTEEN_YEARS|
|distributionChannel|DISTRIBUTION_CHANNEL_UNSPECIFIED|
|distributionChannel|PUBLIC_GOOGLE_HOSTED|
|distributionChannel|PRIVATE_GOOGLE_HOSTED|
|distributionChannel|PRIVATE_SELF_HOSTED|
|features|APP_FEATURE_UNSPECIFIED|
|features|VPN_APP|

<h2 id="tocS_ApplicationEvent">ApplicationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationevent"></a>
<a id="schema_ApplicationEvent"></a>
<a id="tocSapplicationevent"></a>
<a id="tocsapplicationevent"></a>

```json
{
  "createTime": "string",
  "eventType": "APPLICATION_EVENT_TYPE_UNSPECIFIED"
}
```

An app-related event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the event.|
|eventType|string|false|none|App event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|APPLICATION_EVENT_TYPE_UNSPECIFIED|
|eventType|INSTALLED|
|eventType|CHANGED|
|eventType|DATA_CLEARED|
|eventType|REMOVED|
|eventType|REPLACED|
|eventType|RESTARTED|
|eventType|PINNED|
|eventType|UNPINNED|

<h2 id="tocS_ApplicationPermission">ApplicationPermission</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpermission"></a>
<a id="schema_ApplicationPermission"></a>
<a id="tocSapplicationpermission"></a>
<a id="tocsapplicationpermission"></a>

```json
{
  "description": "string",
  "name": "string",
  "permissionId": "string"
}
```

A permission required by the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A longer description of the permission, providing more detail on what it affects. Localized.|
|name|string|false|none|The name of the permission. Localized.|
|permissionId|string|false|none|An opaque string uniquely identifying the permission. Not localized.|

<h2 id="tocS_ApplicationPolicy">ApplicationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpolicy"></a>
<a id="schema_ApplicationPolicy"></a>
<a id="tocSapplicationpolicy"></a>
<a id="tocsapplicationpolicy"></a>

```json
{
  "accessibleTrackIds": [
    "string"
  ],
  "alwaysOnVpnLockdownExemption": "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
  "autoUpdateMode": "AUTO_UPDATE_MODE_UNSPECIFIED",
  "connectedWorkAndPersonalApp": "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
  "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
  "delegatedScopes": [
    "DELEGATED_SCOPE_UNSPECIFIED"
  ],
  "disabled": true,
  "extensionConfig": {
    "notificationReceiver": "string",
    "signingKeyFingerprintsSha256": [
      "string"
    ]
  },
  "installType": "INSTALL_TYPE_UNSPECIFIED",
  "lockTaskAllowed": true,
  "managedConfiguration": {
    "property1": null,
    "property2": null
  },
  "managedConfigurationTemplate": {
    "configurationVariables": {
      "property1": "string",
      "property2": "string"
    },
    "templateId": "string"
  },
  "minimumVersionCode": 0,
  "packageName": "string",
  "permissionGrants": [
    {
      "permission": "string",
      "policy": "PERMISSION_POLICY_UNSPECIFIED"
    }
  ],
  "workProfileWidgets": "WORK_PROFILE_WIDGETS_UNSPECIFIED"
}
```

Policy for an individual app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibleTrackIds|[string]|false|none|List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo.|
|alwaysOnVpnLockdownExemption|string|false|none|Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy.|
|autoUpdateMode|string|false|none|Controls the auto-update mode for the app.|
|connectedWorkAndPersonalApp|string|false|none|Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent.|
|defaultPermissionPolicy|string|false|none|The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps.|
|delegatedScopes|[string]|false|none|The scopes delegated to the app from Android Device Policy.|
|disabled|boolean|false|none|Whether the app is disabled. When disabled, the app data is still preserved.|
|extensionConfig|[ExtensionConfig](#schemaextensionconfig)|false|none|Configuration to enable this app as an extension app, with the capability of interacting with Android Device Policy offline.This field can be set for at most one app.|
|installType|string|false|none|The type of installation to perform.|
|lockTaskAllowed|boolean|false|none|Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device.|
|managedConfiguration|object|false|none|Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects |
|managedConfigurationTemplate|[ManagedConfigurationTemplate](#schemamanagedconfigurationtemplate)|false|none|The managed configurations template for the app, saved from the managed configurations iframe. This field is ignored if managed_configuration is set.|
|minimumVersionCode|integer(int32)|false|none|The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.|
|packageName|string|false|none|The package name of the app. For example, com.google.android.youtube for the YouTube app.|
|permissionGrants|[[PermissionGrant](#schemapermissiongrant)]|false|none|Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps.|
|workProfileWidgets|string|false|none|Specifies whether the app installed in the work profile is allowed to add widgets to the home screen.|

#### Enumerated Values

|Property|Value|
|---|---|
|alwaysOnVpnLockdownExemption|ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED|
|alwaysOnVpnLockdownExemption|VPN_LOCKDOWN_ENFORCED|
|alwaysOnVpnLockdownExemption|VPN_LOCKDOWN_EXEMPTION|
|autoUpdateMode|AUTO_UPDATE_MODE_UNSPECIFIED|
|autoUpdateMode|AUTO_UPDATE_DEFAULT|
|autoUpdateMode|AUTO_UPDATE_POSTPONED|
|autoUpdateMode|AUTO_UPDATE_HIGH_PRIORITY|
|connectedWorkAndPersonalApp|CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED|
|connectedWorkAndPersonalApp|CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED|
|connectedWorkAndPersonalApp|CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED|
|defaultPermissionPolicy|PERMISSION_POLICY_UNSPECIFIED|
|defaultPermissionPolicy|PROMPT|
|defaultPermissionPolicy|GRANT|
|defaultPermissionPolicy|DENY|
|delegatedScopes|DELEGATED_SCOPE_UNSPECIFIED|
|delegatedScopes|CERT_INSTALL|
|delegatedScopes|MANAGED_CONFIGURATIONS|
|delegatedScopes|BLOCK_UNINSTALL|
|delegatedScopes|PERMISSION_GRANT|
|delegatedScopes|PACKAGE_ACCESS|
|delegatedScopes|ENABLE_SYSTEM_APP|
|delegatedScopes|NETWORK_ACTIVITY_LOGS|
|delegatedScopes|SECURITY_LOGS|
|installType|INSTALL_TYPE_UNSPECIFIED|
|installType|PREINSTALLED|
|installType|FORCE_INSTALLED|
|installType|BLOCKED|
|installType|AVAILABLE|
|installType|REQUIRED_FOR_SETUP|
|installType|KIOSK|
|workProfileWidgets|WORK_PROFILE_WIDGETS_UNSPECIFIED|
|workProfileWidgets|WORK_PROFILE_WIDGETS_ALLOWED|
|workProfileWidgets|WORK_PROFILE_WIDGETS_DISALLOWED|

<h2 id="tocS_ApplicationReport">ApplicationReport</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationreport"></a>
<a id="schema_ApplicationReport"></a>
<a id="tocSapplicationreport"></a>
<a id="tocsapplicationreport"></a>

```json
{
  "applicationSource": "APPLICATION_SOURCE_UNSPECIFIED",
  "displayName": "string",
  "events": [
    {
      "createTime": "string",
      "eventType": "APPLICATION_EVENT_TYPE_UNSPECIFIED"
    }
  ],
  "installerPackageName": "string",
  "keyedAppStates": [
    {
      "createTime": "string",
      "data": "string",
      "key": "string",
      "lastUpdateTime": "string",
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "packageName": "string",
  "packageSha256Hash": "string",
  "signingKeyCertFingerprints": [
    "string"
  ],
  "state": "APPLICATION_STATE_UNSPECIFIED",
  "versionCode": 0,
  "versionName": "string"
}
```

Information reported about an installed app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationSource|string|false|none|The source of the package.|
|displayName|string|false|none|The display name of the app.|
|events|[[ApplicationEvent](#schemaapplicationevent)]|false|none|The list of app events which have occurred in the last 30 hours.|
|installerPackageName|string|false|none|The package name of the app that installed this app.|
|keyedAppStates|[[KeyedAppState](#schemakeyedappstate)]|false|none|List of keyed app states reported by the app.|
|packageName|string|false|none|Package name of the app.|
|packageSha256Hash|string|false|none|The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.|
|signingKeyCertFingerprints|[string]|false|none|The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.|
|state|string|false|none|Application state.|
|versionCode|integer(int32)|false|none|The app version code, which can be used to determine whether one version is more recent than another.|
|versionName|string|false|none|The app version as displayed to the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|applicationSource|APPLICATION_SOURCE_UNSPECIFIED|
|applicationSource|SYSTEM_APP_FACTORY_VERSION|
|applicationSource|SYSTEM_APP_UPDATED_VERSION|
|applicationSource|INSTALLED_FROM_PLAY_STORE|
|state|APPLICATION_STATE_UNSPECIFIED|
|state|REMOVED|
|state|INSTALLED|

<h2 id="tocS_ApplicationReportingSettings">ApplicationReportingSettings</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationreportingsettings"></a>
<a id="schema_ApplicationReportingSettings"></a>
<a id="tocSapplicationreportingsettings"></a>
<a id="tocsapplicationreportingsettings"></a>

```json
{
  "includeRemovedApps": true
}
```

Settings controlling the behavior of application reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeRemovedApps|boolean|false|none|Whether removed apps are included in application reports.|

<h2 id="tocS_BatchUsageLogEvents">BatchUsageLogEvents</h2>
<!-- backwards compatibility -->
<a id="schemabatchusagelogevents"></a>
<a id="schema_BatchUsageLogEvents"></a>
<a id="tocSbatchusagelogevents"></a>
<a id="tocsbatchusagelogevents"></a>

```json
{
  "device": "string",
  "retrievalTime": "string",
  "usageLogEvents": [
    {
      "adbShellCommandEvent": {
        "shellCmd": "string"
      },
      "adbShellInteractiveEvent": {},
      "appProcessStartEvent": {
        "processInfo": {
          "apkSha256Hash": "string",
          "packageNames": [
            "string"
          ],
          "pid": 0,
          "processName": "string",
          "seinfo": "string",
          "startTime": "string",
          "uid": 0
        }
      },
      "certAuthorityInstalledEvent": {
        "certificate": "string",
        "success": true,
        "userId": 0
      },
      "certAuthorityRemovedEvent": {
        "certificate": "string",
        "success": true,
        "userId": 0
      },
      "certValidationFailureEvent": {
        "failureReason": "string"
      },
      "connectEvent": {
        "destinationIpAddress": "string",
        "destinationPort": 0,
        "packageName": "string"
      },
      "cryptoSelfTestCompletedEvent": {
        "success": true
      },
      "dnsEvent": {
        "hostname": "string",
        "ipAddresses": [
          "string"
        ],
        "packageName": "string",
        "totalIpAddressesReturned": "string"
      },
      "eventId": "string",
      "eventTime": "string",
      "eventType": "EVENT_TYPE_UNSPECIFIED",
      "filePulledEvent": {
        "filePath": "string"
      },
      "filePushedEvent": {
        "filePath": "string"
      },
      "keyDestructionEvent": {
        "applicationUid": 0,
        "keyAlias": "string",
        "success": true
      },
      "keyGeneratedEvent": {
        "applicationUid": 0,
        "keyAlias": "string",
        "success": true
      },
      "keyImportEvent": {
        "applicationUid": 0,
        "keyAlias": "string",
        "success": true
      },
      "keyIntegrityViolationEvent": {
        "applicationUid": 0,
        "keyAlias": "string"
      },
      "keyguardDismissAuthAttemptEvent": {
        "strongAuthMethodUsed": true,
        "success": true
      },
      "keyguardDismissedEvent": {},
      "keyguardSecuredEvent": {},
      "logBufferSizeCriticalEvent": {},
      "loggingStartedEvent": {},
      "loggingStoppedEvent": {},
      "mediaMountEvent": {
        "mountPoint": "string",
        "volumeLabel": "string"
      },
      "mediaUnmountEvent": {
        "mountPoint": "string",
        "volumeLabel": "string"
      },
      "osShutdownEvent": {},
      "osStartupEvent": {
        "verifiedBootState": "VERIFIED_BOOT_STATE_UNSPECIFIED",
        "verityMode": "DM_VERITY_MODE_UNSPECIFIED"
      },
      "remoteLockEvent": {
        "adminPackageName": "string",
        "adminUserId": 0,
        "targetUserId": 0
      },
      "wipeFailureEvent": {}
    }
  ],
  "user": "string"
}
```

Batched event logs of events from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|string|false|none|The name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’|
|retrievalTime|string(google-datetime)|false|none|The device timestamp when the batch of events were collected from the device.|
|usageLogEvents|[[UsageLogEvent](#schemausagelogevent)]|false|none|The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time.|
|user|string|false|none|The resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’.|

<h2 id="tocS_BlockAction">BlockAction</h2>
<!-- backwards compatibility -->
<a id="schemablockaction"></a>
<a id="schema_BlockAction"></a>
<a id="tocSblockaction"></a>
<a id="tocsblockaction"></a>

```json
{
  "blockAfterDays": 0,
  "blockScope": "BLOCK_SCOPE_UNSPECIFIED"
}
```

An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockAfterDays|integer(int32)|false|none|Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.|
|blockScope|string|false|none|Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockScope|BLOCK_SCOPE_UNSPECIFIED|
|blockScope|BLOCK_SCOPE_WORK_PROFILE|
|blockScope|BLOCK_SCOPE_DEVICE|

<h2 id="tocS_CertAuthorityInstalledEvent">CertAuthorityInstalledEvent</h2>
<!-- backwards compatibility -->
<a id="schemacertauthorityinstalledevent"></a>
<a id="schema_CertAuthorityInstalledEvent"></a>
<a id="tocScertauthorityinstalledevent"></a>
<a id="tocscertauthorityinstalledevent"></a>

```json
{
  "certificate": "string",
  "success": true,
  "userId": 0
}
```

A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|Subject of the certificate.|
|success|boolean|false|none|Whether the installation event succeeded.|
|userId|integer(int32)|false|none|The user in which the certificate install event happened. Only available for devices running Android 11 and above.|

<h2 id="tocS_CertAuthorityRemovedEvent">CertAuthorityRemovedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacertauthorityremovedevent"></a>
<a id="schema_CertAuthorityRemovedEvent"></a>
<a id="tocScertauthorityremovedevent"></a>
<a id="tocscertauthorityremovedevent"></a>

```json
{
  "certificate": "string",
  "success": true,
  "userId": 0
}
```

A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|Subject of the certificate.|
|success|boolean|false|none|Whether the removal succeeded.|
|userId|integer(int32)|false|none|The user in which the certificate removal event occurred. Only available for devices running Android 11 and above.|

<h2 id="tocS_CertValidationFailureEvent">CertValidationFailureEvent</h2>
<!-- backwards compatibility -->
<a id="schemacertvalidationfailureevent"></a>
<a id="schema_CertValidationFailureEvent"></a>
<a id="tocScertvalidationfailureevent"></a>
<a id="tocscertvalidationfailureevent"></a>

```json
{
  "failureReason": "string"
}
```

An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureReason|string|false|none|The reason why certification validation failed.|

<h2 id="tocS_ChoosePrivateKeyRule">ChoosePrivateKeyRule</h2>
<!-- backwards compatibility -->
<a id="schemachooseprivatekeyrule"></a>
<a id="schema_ChoosePrivateKeyRule"></a>
<a id="tocSchooseprivatekeyrule"></a>
<a id="tocschooseprivatekeyrule"></a>

```json
{
  "packageNames": [
    "string"
  ],
  "privateKeyAlias": "string",
  "urlPattern": "string"
}
```

Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageNames|[string]|false|none|The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias.|
|privateKeyAlias|string|false|none|The alias of the private key to be used.|
|urlPattern|string|false|none|The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern.|

<h2 id="tocS_ClearAppsDataParams">ClearAppsDataParams</h2>
<!-- backwards compatibility -->
<a id="schemaclearappsdataparams"></a>
<a id="schema_ClearAppsDataParams"></a>
<a id="tocSclearappsdataparams"></a>
<a id="tocsclearappsdataparams"></a>

```json
{
  "packageNames": [
    "string"
  ]
}
```

Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageNames|[string]|false|none|The package names of the apps whose data will be cleared when the command is executed.|

<h2 id="tocS_ClearAppsDataStatus">ClearAppsDataStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclearappsdatastatus"></a>
<a id="schema_ClearAppsDataStatus"></a>
<a id="tocSclearappsdatastatus"></a>
<a id="tocsclearappsdatastatus"></a>

```json
{
  "results": {
    "property1": {
      "clearingResult": "CLEARING_RESULT_UNSPECIFIED"
    },
    "property2": {
      "clearingResult": "CLEARING_RESULT_UNSPECIFIED"
    }
  }
}
```

Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|false|none|The per-app results, a mapping from package names to the respective clearing result.|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "clearAppsDataParams": {
    "packageNames": [
      "string"
    ]
  },
  "clearAppsDataStatus": {
    "results": {
      "property1": {
        "clearingResult": "CLEARING_RESULT_UNSPECIFIED"
      },
      "property2": {
        "clearingResult": "CLEARING_RESULT_UNSPECIFIED"
      }
    }
  },
  "createTime": "string",
  "duration": "string",
  "errorCode": "COMMAND_ERROR_CODE_UNSPECIFIED",
  "newPassword": "string",
  "resetPasswordFlags": [
    "RESET_PASSWORD_FLAG_UNSPECIFIED"
  ],
  "type": "COMMAND_TYPE_UNSPECIFIED",
  "userName": "string"
}
```

A command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clearAppsDataParams|[ClearAppsDataParams](#schemaclearappsdataparams)|false|none|Parameters for the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to CLEAR_APP_DATA. It is also acceptable to explicitly set type to CLEAR_APP_DATA.|
|clearAppsDataStatus|[ClearAppsDataStatus](#schemaclearappsdatastatus)|false|none|Output only. Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataStatus.|
|createTime|string(google-datetime)|false|none|The timestamp at which the command was created. The timestamp is automatically generated by the server.|
|duration|string(google-duration)|false|none|The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.|
|errorCode|string|false|none|If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller.|
|newPassword|string|false|none|For commands of type RESET_PASSWORD, optionally specifies the new password.|
|resetPasswordFlags|[string]|false|none|For commands of type RESET_PASSWORD, optionally specifies flags.|
|type|string|false|none|The type of the command.|
|userName|string|false|none|The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|COMMAND_ERROR_CODE_UNSPECIFIED|
|errorCode|UNKNOWN|
|errorCode|API_LEVEL|
|errorCode|MANAGEMENT_MODE|
|errorCode|INVALID_VALUE|
|errorCode|UNSUPPORTED|
|resetPasswordFlags|RESET_PASSWORD_FLAG_UNSPECIFIED|
|resetPasswordFlags|REQUIRE_ENTRY|
|resetPasswordFlags|DO_NOT_ASK_CREDENTIALS_ON_BOOT|
|resetPasswordFlags|LOCK_NOW|
|type|COMMAND_TYPE_UNSPECIFIED|
|type|LOCK|
|type|RESET_PASSWORD|
|type|REBOOT|
|type|RELINQUISH_OWNERSHIP|
|type|CLEAR_APP_DATA|

<h2 id="tocS_CommonCriteriaModeInfo">CommonCriteriaModeInfo</h2>
<!-- backwards compatibility -->
<a id="schemacommoncriteriamodeinfo"></a>
<a id="schema_CommonCriteriaModeInfo"></a>
<a id="tocScommoncriteriamodeinfo"></a>
<a id="tocscommoncriteriamodeinfo"></a>

```json
{
  "commonCriteriaModeStatus": "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
}
```

Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonCriteriaModeStatus|string|false|none|Whether Common Criteria Mode is enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|commonCriteriaModeStatus|COMMON_CRITERIA_MODE_STATUS_UNKNOWN|
|commonCriteriaModeStatus|COMMON_CRITERIA_MODE_DISABLED|
|commonCriteriaModeStatus|COMMON_CRITERIA_MODE_ENABLED|

<h2 id="tocS_ComplianceRule">ComplianceRule</h2>
<!-- backwards compatibility -->
<a id="schemacompliancerule"></a>
<a id="schema_ComplianceRule"></a>
<a id="tocScompliancerule"></a>
<a id="tocscompliancerule"></a>

```json
{
  "apiLevelCondition": {
    "minApiLevel": 0
  },
  "disableApps": true,
  "nonComplianceDetailCondition": {
    "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
    "packageName": "string",
    "settingName": "string"
  },
  "packageNamesToDisable": [
    "string"
  ]
}
```

A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiLevelCondition|[ApiLevelCondition](#schemaapilevelcondition)|false|none|A condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement.|
|disableApps|boolean|false|none|If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.|
|nonComplianceDetailCondition|[NonComplianceDetailCondition](#schemanoncompliancedetailcondition)|false|none|A condition which is satisfied if there exists any matching NonComplianceDetail for the device.|
|packageNamesToDisable|[string]|false|none|If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved.|

<h2 id="tocS_ConnectEvent">ConnectEvent</h2>
<!-- backwards compatibility -->
<a id="schemaconnectevent"></a>
<a id="schema_ConnectEvent"></a>
<a id="tocSconnectevent"></a>
<a id="tocsconnectevent"></a>

```json
{
  "destinationIpAddress": "string",
  "destinationPort": 0,
  "packageName": "string"
}
```

A TCP connect event was initiated through the standard network stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationIpAddress|string|false|none|The destination IP address of the connect call.|
|destinationPort|integer(int32)|false|none|The destination port of the connect call.|
|packageName|string|false|none|The package name of the UID that performed the connect call.|

<h2 id="tocS_ContactInfo">ContactInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontactinfo"></a>
<a id="schema_ContactInfo"></a>
<a id="tocScontactinfo"></a>
<a id="tocscontactinfo"></a>

```json
{
  "contactEmail": "string",
  "dataProtectionOfficerEmail": "string",
  "dataProtectionOfficerName": "string",
  "dataProtectionOfficerPhone": "string",
  "euRepresentativeEmail": "string",
  "euRepresentativeName": "string",
  "euRepresentativePhone": "string"
}
```

Contact details for managed Google Play enterprises.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactEmail|string|false|none|Email address for a point of contact, which will be used to send important announcements related to managed Google Play.|
|dataProtectionOfficerEmail|string|false|none|The email of the data protection officer. The email is validated but not verified.|
|dataProtectionOfficerName|string|false|none|The name of the data protection officer.|
|dataProtectionOfficerPhone|string|false|none|The phone number of the data protection officer The phone number is validated but not verified.|
|euRepresentativeEmail|string|false|none|The email of the EU representative. The email is validated but not verified.|
|euRepresentativeName|string|false|none|The name of the EU representative.|
|euRepresentativePhone|string|false|none|The phone number of the EU representative. The phone number is validated but not verified.|

<h2 id="tocS_ContentProviderEndpoint">ContentProviderEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemacontentproviderendpoint"></a>
<a id="schema_ContentProviderEndpoint"></a>
<a id="tocScontentproviderendpoint"></a>
<a id="tocscontentproviderendpoint"></a>

```json
{
  "packageName": "string",
  "signingCertsSha256": [
    "string"
  ],
  "uri": "string"
}
```

This feature is not generally available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|string|false|none|This feature is not generally available.|
|signingCertsSha256|[string]|false|none|Required. This feature is not generally available.|
|uri|string|false|none|This feature is not generally available.|

<h2 id="tocS_CrossProfilePolicies">CrossProfilePolicies</h2>
<!-- backwards compatibility -->
<a id="schemacrossprofilepolicies"></a>
<a id="schema_CrossProfilePolicies"></a>
<a id="tocScrossprofilepolicies"></a>
<a id="tocscrossprofilepolicies"></a>

```json
{
  "crossProfileCopyPaste": "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
  "crossProfileDataSharing": "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
  "showWorkContactsInPersonalProfile": "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
  "workProfileWidgetsDefault": "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED"
}
```

Cross-profile policies applied on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crossProfileCopyPaste|string|false|none|Whether text copied from one profile (personal or work) can be pasted in the other profile.|
|crossProfileDataSharing|string|false|none|Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately.|
|showWorkContactsInPersonalProfile|string|false|none|Whether contacts stored in the work profile can be shown in personal profile contact searches and incoming calls.|
|workProfileWidgetsDefault|string|false|none|Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here.|

#### Enumerated Values

|Property|Value|
|---|---|
|crossProfileCopyPaste|CROSS_PROFILE_COPY_PASTE_UNSPECIFIED|
|crossProfileCopyPaste|COPY_FROM_WORK_TO_PERSONAL_DISALLOWED|
|crossProfileCopyPaste|CROSS_PROFILE_COPY_PASTE_ALLOWED|
|crossProfileDataSharing|CROSS_PROFILE_DATA_SHARING_UNSPECIFIED|
|crossProfileDataSharing|CROSS_PROFILE_DATA_SHARING_DISALLOWED|
|crossProfileDataSharing|DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED|
|crossProfileDataSharing|CROSS_PROFILE_DATA_SHARING_ALLOWED|
|showWorkContactsInPersonalProfile|SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED|
|showWorkContactsInPersonalProfile|SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED|
|showWorkContactsInPersonalProfile|SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED|
|workProfileWidgetsDefault|WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED|
|workProfileWidgetsDefault|WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED|
|workProfileWidgetsDefault|WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED|

<h2 id="tocS_CryptoSelfTestCompletedEvent">CryptoSelfTestCompletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacryptoselftestcompletedevent"></a>
<a id="schema_CryptoSelfTestCompletedEvent"></a>
<a id="tocScryptoselftestcompletedevent"></a>
<a id="tocscryptoselftestcompletedevent"></a>

```json
{
  "success": true
}
```

Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|Whether the test succeeded.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "apiLevel": 0,
  "applicationReports": [
    {
      "applicationSource": "APPLICATION_SOURCE_UNSPECIFIED",
      "displayName": "string",
      "events": [
        {
          "createTime": "string",
          "eventType": "APPLICATION_EVENT_TYPE_UNSPECIFIED"
        }
      ],
      "installerPackageName": "string",
      "keyedAppStates": [
        {
          "createTime": "string",
          "data": "string",
          "key": "string",
          "lastUpdateTime": "string",
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "packageName": "string",
      "packageSha256Hash": "string",
      "signingKeyCertFingerprints": [
        "string"
      ],
      "state": "APPLICATION_STATE_UNSPECIFIED",
      "versionCode": 0,
      "versionName": "string"
    }
  ],
  "appliedPasswordPolicies": [
    {
      "maximumFailedPasswordsForWipe": 0,
      "passwordExpirationTimeout": "string",
      "passwordHistoryLength": 0,
      "passwordMinimumLength": 0,
      "passwordMinimumLetters": 0,
      "passwordMinimumLowerCase": 0,
      "passwordMinimumNonLetter": 0,
      "passwordMinimumNumeric": 0,
      "passwordMinimumSymbols": 0,
      "passwordMinimumUpperCase": 0,
      "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
      "passwordScope": "SCOPE_UNSPECIFIED",
      "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
      "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
    }
  ],
  "appliedPolicyName": "string",
  "appliedPolicyVersion": "string",
  "appliedState": "DEVICE_STATE_UNSPECIFIED",
  "commonCriteriaModeInfo": {
    "commonCriteriaModeStatus": "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
  },
  "deviceSettings": {
    "adbEnabled": true,
    "developmentSettingsEnabled": true,
    "encryptionStatus": "ENCRYPTION_STATUS_UNSPECIFIED",
    "isDeviceSecure": true,
    "isEncrypted": true,
    "unknownSourcesEnabled": true,
    "verifyAppsEnabled": true
  },
  "disabledReason": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displays": [
    {
      "density": 0,
      "displayId": 0,
      "height": 0,
      "name": "string",
      "refreshRate": 0,
      "state": "DISPLAY_STATE_UNSPECIFIED",
      "width": 0
    }
  ],
  "enrollmentTime": "string",
  "enrollmentTokenData": "string",
  "enrollmentTokenName": "string",
  "hardwareInfo": {
    "batteryShutdownTemperatures": [
      0
    ],
    "batteryThrottlingTemperatures": [
      0
    ],
    "brand": "string",
    "cpuShutdownTemperatures": [
      0
    ],
    "cpuThrottlingTemperatures": [
      0
    ],
    "deviceBasebandVersion": "string",
    "enterpriseSpecificId": "string",
    "gpuShutdownTemperatures": [
      0
    ],
    "gpuThrottlingTemperatures": [
      0
    ],
    "hardware": "string",
    "manufacturer": "string",
    "model": "string",
    "serialNumber": "string",
    "skinShutdownTemperatures": [
      0
    ],
    "skinThrottlingTemperatures": [
      0
    ]
  },
  "hardwareStatusSamples": [
    {
      "batteryTemperatures": [
        0
      ],
      "cpuTemperatures": [
        0
      ],
      "cpuUsages": [
        0
      ],
      "createTime": "string",
      "fanSpeeds": [
        0
      ],
      "gpuTemperatures": [
        0
      ],
      "skinTemperatures": [
        0
      ]
    }
  ],
  "lastPolicyComplianceReportTime": "string",
  "lastPolicySyncTime": "string",
  "lastStatusReportTime": "string",
  "managementMode": "MANAGEMENT_MODE_UNSPECIFIED",
  "memoryEvents": [
    {
      "byteCount": "string",
      "createTime": "string",
      "eventType": "MEMORY_EVENT_TYPE_UNSPECIFIED"
    }
  ],
  "memoryInfo": {
    "totalInternalStorage": "string",
    "totalRam": "string"
  },
  "name": "string",
  "networkInfo": {
    "imei": "string",
    "meid": "string",
    "networkOperatorName": "string",
    "telephonyInfos": [
      {
        "carrierName": "string",
        "phoneNumber": "string"
      }
    ],
    "wifiMacAddress": "string"
  },
  "nonComplianceDetails": [
    {
      "currentValue": null,
      "fieldPath": "string",
      "installationFailureReason": "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
      "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
      "packageName": "string",
      "settingName": "string",
      "specificNonComplianceContext": {
        "oncWifiContext": {
          "wifiGuid": "string"
        },
        "passwordPoliciesContext": {
          "passwordPolicyScope": "SCOPE_UNSPECIFIED"
        }
      },
      "specificNonComplianceReason": "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
    }
  ],
  "ownership": "OWNERSHIP_UNSPECIFIED",
  "policyCompliant": true,
  "policyName": "string",
  "powerManagementEvents": [
    {
      "batteryLevel": 0,
      "createTime": "string",
      "eventType": "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
    }
  ],
  "previousDeviceNames": [
    "string"
  ],
  "securityPosture": {
    "devicePosture": "POSTURE_UNSPECIFIED",
    "postureDetails": [
      {
        "advice": [
          {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "securityRisk": "SECURITY_RISK_UNSPECIFIED"
      }
    ]
  },
  "softwareInfo": {
    "androidBuildNumber": "string",
    "androidBuildTime": "string",
    "androidDevicePolicyVersionCode": 0,
    "androidDevicePolicyVersionName": "string",
    "androidVersion": "string",
    "bootloaderVersion": "string",
    "deviceBuildSignature": "string",
    "deviceKernelVersion": "string",
    "primaryLanguageCode": "string",
    "securityPatchLevel": "string",
    "systemUpdateInfo": {
      "updateReceivedTime": "string",
      "updateStatus": "UPDATE_STATUS_UNKNOWN"
    }
  },
  "state": "DEVICE_STATE_UNSPECIFIED",
  "systemProperties": {
    "property1": "string",
    "property2": "string"
  },
  "user": {
    "accountIdentifier": "string"
  },
  "userName": "string"
}
```

A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiLevel|integer(int32)|false|none|The API level of the Android platform version running on the device.|
|applicationReports|[[ApplicationReport](#schemaapplicationreport)]|false|none|Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.|
|appliedPasswordPolicies|[[PasswordRequirements](#schemapasswordrequirements)]|false|none|The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies.|
|appliedPolicyName|string|false|none|The name of the policy currently applied to the device.|
|appliedPolicyVersion|string(int64)|false|none|The version of the policy currently applied to the device.|
|appliedState|string|false|none|The state currently applied to the device.|
|commonCriteriaModeInfo|[CommonCriteriaModeInfo](#schemacommoncriteriamodeinfo)|false|none|Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.|
|deviceSettings|[DeviceSettings](#schemadevicesettings)|false|none|Device settings information. This information is only available if deviceSettingsEnabled is true in the device's policy.|
|disabledReason|[UserFacingMessage](#schemauserfacingmessage)|false|none|If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field can be modified by a patch request.|
|displays|[[Display](#schemadisplay)]|false|none|Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.|
|enrollmentTime|string(google-datetime)|false|none|The time of device enrollment.|
|enrollmentTokenData|string|false|none|If the device was enrolled with an enrollment token with additional data provided, this field contains that data.|
|enrollmentTokenName|string|false|none|If the device was enrolled with an enrollment token, this field contains the name of the token.|
|hardwareInfo|[HardwareInfo](#schemahardwareinfo)|false|none|Detailed information about the device hardware.|
|hardwareStatusSamples|[[HardwareStatus](#schemahardwarestatus)]|false|none|Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.|
|lastPolicyComplianceReportTime|string(google-datetime)|false|none|Deprecated.|
|lastPolicySyncTime|string(google-datetime)|false|none|The last time the device fetched its policy.|
|lastStatusReportTime|string(google-datetime)|false|none|The last time the device sent a status report.|
|managementMode|string|false|none|The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.|
|memoryEvents|[[MemoryEvent](#schemamemoryevent)]|false|none|Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.|
|memoryInfo|[MemoryInfo](#schemamemoryinfo)|false|none|Memory information: contains information about device memory and storage.|
|name|string|false|none|The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.|
|networkInfo|[NetworkInfo](#schemanetworkinfo)|false|none|Device network information. This information is only available if networkInfoEnabled is true in the device's policy.|
|nonComplianceDetails|[[NonComplianceDetail](#schemanoncompliancedetail)]|false|none|Details about policy settings that the device is not compliant with.|
|ownership|string|false|none|Ownership of the managed device.|
|policyCompliant|boolean|false|none|Whether the device is compliant with its policy.|
|policyName|string|false|none|The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.|
|powerManagementEvents|[[PowerManagementEvent](#schemapowermanagementevent)]|false|none|Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.|
|previousDeviceNames|[string]|false|none|If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.|
|securityPosture|[SecurityPosture](#schemasecurityposture)|false|none|Device's security posture value that reflects how secure the device is.|
|softwareInfo|[SoftwareInfo](#schemasoftwareinfo)|false|none|Detailed information about the device software. This information is only available if softwareInfoEnabled is true in the device's policy.|
|state|string|false|none|The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.|
|systemProperties|object|false|none|Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy.|
|user|[User](#schemauser)|false|none|The user who owns the device.|
|userName|string|false|none|The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.|

#### Enumerated Values

|Property|Value|
|---|---|
|appliedState|DEVICE_STATE_UNSPECIFIED|
|appliedState|ACTIVE|
|appliedState|DISABLED|
|appliedState|DELETED|
|appliedState|PROVISIONING|
|managementMode|MANAGEMENT_MODE_UNSPECIFIED|
|managementMode|DEVICE_OWNER|
|managementMode|PROFILE_OWNER|
|ownership|OWNERSHIP_UNSPECIFIED|
|ownership|COMPANY_OWNED|
|ownership|PERSONALLY_OWNED|
|state|DEVICE_STATE_UNSPECIFIED|
|state|ACTIVE|
|state|DISABLED|
|state|DELETED|
|state|PROVISIONING|

<h2 id="tocS_DeviceSettings">DeviceSettings</h2>
<!-- backwards compatibility -->
<a id="schemadevicesettings"></a>
<a id="schema_DeviceSettings"></a>
<a id="tocSdevicesettings"></a>
<a id="tocsdevicesettings"></a>

```json
{
  "adbEnabled": true,
  "developmentSettingsEnabled": true,
  "encryptionStatus": "ENCRYPTION_STATUS_UNSPECIFIED",
  "isDeviceSecure": true,
  "isEncrypted": true,
  "unknownSourcesEnabled": true,
  "verifyAppsEnabled": true
}
```

Information about security related device settings on device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adbEnabled|boolean|false|none|Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.|
|developmentSettingsEnabled|boolean|false|none|Whether developer mode is enabled on the device.|
|encryptionStatus|string|false|none|Encryption status from DevicePolicyManager.|
|isDeviceSecure|boolean|false|none|Whether the device is secured with PIN/password.|
|isEncrypted|boolean|false|none|Whether the storage encryption is enabled.|
|unknownSourcesEnabled|boolean|false|none|Whether installing apps from unknown sources is enabled.|
|verifyAppsEnabled|boolean|false|none|Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionStatus|ENCRYPTION_STATUS_UNSPECIFIED|
|encryptionStatus|UNSUPPORTED|
|encryptionStatus|INACTIVE|
|encryptionStatus|ACTIVATING|
|encryptionStatus|ACTIVE|
|encryptionStatus|ACTIVE_DEFAULT_KEY|
|encryptionStatus|ACTIVE_PER_USER|

<h2 id="tocS_Display">Display</h2>
<!-- backwards compatibility -->
<a id="schemadisplay"></a>
<a id="schema_Display"></a>
<a id="tocSdisplay"></a>
<a id="tocsdisplay"></a>

```json
{
  "density": 0,
  "displayId": 0,
  "height": 0,
  "name": "string",
  "refreshRate": 0,
  "state": "DISPLAY_STATE_UNSPECIFIED",
  "width": 0
}
```

Device display information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|density|integer(int32)|false|none|Display density expressed as dots-per-inch.|
|displayId|integer(int32)|false|none|Unique display id.|
|height|integer(int32)|false|none|Display height in pixels.|
|name|string|false|none|Name of the display.|
|refreshRate|integer(int32)|false|none|Refresh rate of the display in frames per second.|
|state|string|false|none|State of the display.|
|width|integer(int32)|false|none|Display width in pixels.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|DISPLAY_STATE_UNSPECIFIED|
|state|OFF|
|state|ON|
|state|DOZE|
|state|SUSPENDED|

<h2 id="tocS_DnsEvent">DnsEvent</h2>
<!-- backwards compatibility -->
<a id="schemadnsevent"></a>
<a id="schema_DnsEvent"></a>
<a id="tocSdnsevent"></a>
<a id="tocsdnsevent"></a>

```json
{
  "hostname": "string",
  "ipAddresses": [
    "string"
  ],
  "packageName": "string",
  "totalIpAddressesReturned": "string"
}
```

A DNS lookup event was initiated through the standard network stack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|The hostname that was looked up.|
|ipAddresses|[string]|false|none|The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses).|
|packageName|string|false|none|The package name of the UID that performed the DNS lookup.|
|totalIpAddressesReturned|string(int64)|false|none|The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log.|

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

<h2 id="tocS_EnrollmentToken">EnrollmentToken</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmenttoken"></a>
<a id="schema_EnrollmentToken"></a>
<a id="tocSenrollmenttoken"></a>
<a id="tocsenrollmenttoken"></a>

```json
{
  "additionalData": "string",
  "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
  "duration": "string",
  "expirationTimestamp": "string",
  "name": "string",
  "oneTimeOnly": true,
  "policyName": "string",
  "qrCode": "string",
  "user": {
    "accountIdentifier": "string"
  },
  "value": "string"
}
```

An enrollment token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalData|string|false|none|Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.|
|allowPersonalUsage|string|false|none|Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.|
|duration|string(google-duration)|false|none|The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE.|
|expirationTimestamp|string(google-datetime)|false|none|The expiration time of the token. This is a read-only field generated by the server.|
|name|string|false|none|The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.|
|oneTimeOnly|boolean|false|none|Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration.|
|policyName|string|false|none|The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.|
|qrCode|string|false|none|A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.|
|user|[User](#schemauser)|false|none|The user associated with this enrollment token. If it's specified when the enrollment token is created and the user does not exist, the user will be created. This field must not contain personally identifiable information. Only the account_identifier field needs to be set.|
|value|string|false|none|The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|allowPersonalUsage|ALLOW_PERSONAL_USAGE_UNSPECIFIED|
|allowPersonalUsage|PERSONAL_USAGE_ALLOWED|
|allowPersonalUsage|PERSONAL_USAGE_DISALLOWED|

<h2 id="tocS_Enterprise">Enterprise</h2>
<!-- backwards compatibility -->
<a id="schemaenterprise"></a>
<a id="schema_Enterprise"></a>
<a id="tocSenterprise"></a>
<a id="tocsenterprise"></a>

```json
{
  "appAutoApprovalEnabled": true,
  "contactInfo": {
    "contactEmail": "string",
    "dataProtectionOfficerEmail": "string",
    "dataProtectionOfficerName": "string",
    "dataProtectionOfficerPhone": "string",
    "euRepresentativeEmail": "string",
    "euRepresentativeName": "string",
    "euRepresentativePhone": "string"
  },
  "enabledNotificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "enterpriseDisplayName": "string",
  "logo": {
    "sha256Hash": "string",
    "url": "string"
  },
  "name": "string",
  "primaryColor": 0,
  "pubsubTopic": "string",
  "signinDetails": [
    {
      "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
      "qrCode": "string",
      "signinEnrollmentToken": "string",
      "signinUrl": "string"
    }
  ],
  "termsAndConditions": [
    {
      "content": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "header": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ]
}
```

The configuration applied to an enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appAutoApprovalEnabled|boolean|false|none|Deprecated and unused.|
|contactInfo|[ContactInfo](#schemacontactinfo)|false|none|The enterprise contact info of an EMM-managed enterprise.|
|enabledNotificationTypes|[string]|false|none|The types of Google Pub/Sub notifications enabled for the enterprise.|
|enterpriseDisplayName|string|false|none|The name of the enterprise displayed to users. This field has a maximum length of 100 characters.|
|logo|[ExternalData](#schemaexternaldata)|false|none|An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.|
|name|string|false|none|The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}.|
|primaryColor|integer(int32)|false|none|A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) \| (green << 8) \| blue, where the value of each component is between 0 and 255, inclusive.|
|pubsubTopic|string|false|none|The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled.|
|signinDetails|[[SigninDetail](#schemasignindetail)]|false|none|Sign-in details of the enterprise.|
|termsAndConditions|[[TermsAndConditions](#schematermsandconditions)]|false|none|Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.|

#### Enumerated Values

|Property|Value|
|---|---|
|enabledNotificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|enabledNotificationTypes|ENROLLMENT|
|enabledNotificationTypes|COMPLIANCE_REPORT|
|enabledNotificationTypes|STATUS_REPORT|
|enabledNotificationTypes|COMMAND|
|enabledNotificationTypes|USAGE_LOGS|

<h2 id="tocS_ExtensionConfig">ExtensionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaextensionconfig"></a>
<a id="schema_ExtensionConfig"></a>
<a id="tocSextensionconfig"></a>
<a id="tocsextensionconfig"></a>

```json
{
  "notificationReceiver": "string",
  "signingKeyFingerprintsSha256": [
    "string"
  ]
}
```

Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationReceiver|string|false|none|Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates.|
|signingKeyFingerprintsSha256|[string]|false|none|Hex-encoded SHA-256 hash of the signing certificate of the extension app. Only hexadecimal string representations of 64 characters are valid.If not specified, the signature for the corresponding package name is obtained from the Play Store instead.If this list is empty, the signature of the extension app on the device must match the signature obtained from the Play Store for the app to be able to communicate with Android Device Policy.If this list is not empty, the signature of the extension app on the device must match one of the entries in this list for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty.|

<h2 id="tocS_ExternalData">ExternalData</h2>
<!-- backwards compatibility -->
<a id="schemaexternaldata"></a>
<a id="schema_ExternalData"></a>
<a id="tocSexternaldata"></a>
<a id="tocsexternaldata"></a>

```json
{
  "sha256Hash": "string",
  "url": "string"
}
```

Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256Hash|string|false|none|The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data.|
|url|string|false|none|The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.|

<h2 id="tocS_FilePulledEvent">FilePulledEvent</h2>
<!-- backwards compatibility -->
<a id="schemafilepulledevent"></a>
<a id="schema_FilePulledEvent"></a>
<a id="tocSfilepulledevent"></a>
<a id="tocsfilepulledevent"></a>

```json
{
  "filePath": "string"
}
```

A file was downloaded from the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|The path of the file being pulled.|

<h2 id="tocS_FilePushedEvent">FilePushedEvent</h2>
<!-- backwards compatibility -->
<a id="schemafilepushedevent"></a>
<a id="schema_FilePushedEvent"></a>
<a id="tocSfilepushedevent"></a>
<a id="tocsfilepushedevent"></a>

```json
{
  "filePath": "string"
}
```

A file was uploaded onto the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|The path of the file being pushed.|

<h2 id="tocS_FreezePeriod">FreezePeriod</h2>
<!-- backwards compatibility -->
<a id="schemafreezeperiod"></a>
<a id="schema_FreezePeriod"></a>
<a id="tocSfreezeperiod"></a>
<a id="tocsfreezeperiod"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed. When a device is outside the freeze period, normal update behavior applies. Leap years are ignored in freeze period calculations, in particular: * If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. * When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. * When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|The end date (inclusive) of the freeze period. Must be no later than 90 days from the start date. If the end date is earlier than the start date, the freeze period is considered wrapping year-end. Note: year must not be set. For example, {"month": 1,"date": 30}.|
|startDate|[Date](#schemadate)|false|none|The start date (inclusive) of the freeze period. Note: year must not be set. For example, {"month": 1,"date": 30}.|

<h2 id="tocS_HardwareInfo">HardwareInfo</h2>
<!-- backwards compatibility -->
<a id="schemahardwareinfo"></a>
<a id="schema_HardwareInfo"></a>
<a id="tocShardwareinfo"></a>
<a id="tocshardwareinfo"></a>

```json
{
  "batteryShutdownTemperatures": [
    0
  ],
  "batteryThrottlingTemperatures": [
    0
  ],
  "brand": "string",
  "cpuShutdownTemperatures": [
    0
  ],
  "cpuThrottlingTemperatures": [
    0
  ],
  "deviceBasebandVersion": "string",
  "enterpriseSpecificId": "string",
  "gpuShutdownTemperatures": [
    0
  ],
  "gpuThrottlingTemperatures": [
    0
  ],
  "hardware": "string",
  "manufacturer": "string",
  "model": "string",
  "serialNumber": "string",
  "skinShutdownTemperatures": [
    0
  ],
  "skinThrottlingTemperatures": [
    0
  ]
}
```

Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batteryShutdownTemperatures|[number(float)]|false|none|Battery shutdown temperature thresholds in Celsius for each battery on the device.|
|batteryThrottlingTemperatures|[number(float)]|false|none|Battery throttling temperature thresholds in Celsius for each battery on the device.|
|brand|string|false|none|Brand of the device. For example, Google.|
|cpuShutdownTemperatures|[number(float)]|false|none|CPU shutdown temperature thresholds in Celsius for each CPU on the device.|
|cpuThrottlingTemperatures|[number(float)]|false|none|CPU throttling temperature thresholds in Celsius for each CPU on the device.|
|deviceBasebandVersion|string|false|none|Baseband version. For example, MDM9625_104662.22.05.34p.|
|enterpriseSpecificId|string|false|read-only|Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above.|
|gpuShutdownTemperatures|[number(float)]|false|none|GPU shutdown temperature thresholds in Celsius for each GPU on the device.|
|gpuThrottlingTemperatures|[number(float)]|false|none|GPU throttling temperature thresholds in Celsius for each GPU on the device.|
|hardware|string|false|none|Name of the hardware. For example, Angler.|
|manufacturer|string|false|none|Manufacturer. For example, Motorola.|
|model|string|false|none|The model of the device. For example, Asus Nexus 7.|
|serialNumber|string|false|none|The device serial number.|
|skinShutdownTemperatures|[number(float)]|false|none|Device skin shutdown temperature thresholds in Celsius.|
|skinThrottlingTemperatures|[number(float)]|false|none|Device skin throttling temperature thresholds in Celsius.|

<h2 id="tocS_HardwareStatus">HardwareStatus</h2>
<!-- backwards compatibility -->
<a id="schemahardwarestatus"></a>
<a id="schema_HardwareStatus"></a>
<a id="tocShardwarestatus"></a>
<a id="tocshardwarestatus"></a>

```json
{
  "batteryTemperatures": [
    0
  ],
  "cpuTemperatures": [
    0
  ],
  "cpuUsages": [
    0
  ],
  "createTime": "string",
  "fanSpeeds": [
    0
  ],
  "gpuTemperatures": [
    0
  ],
  "skinTemperatures": [
    0
  ]
}
```

Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batteryTemperatures|[number(float)]|false|none|Current battery temperatures in Celsius for each battery on the device.|
|cpuTemperatures|[number(float)]|false|none|Current CPU temperatures in Celsius for each CPU on the device.|
|cpuUsages|[number(float)]|false|none|CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.|
|createTime|string(google-datetime)|false|none|The time the measurements were taken.|
|fanSpeeds|[number(float)]|false|none|Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.|
|gpuTemperatures|[number(float)]|false|none|Current GPU temperatures in Celsius for each GPU on the device.|
|skinTemperatures|[number(float)]|false|none|Current device skin temperatures in Celsius.|

<h2 id="tocS_IssueCommandResponse">IssueCommandResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuecommandresponse"></a>
<a id="schema_IssueCommandResponse"></a>
<a id="tocSissuecommandresponse"></a>
<a id="tocsissuecommandresponse"></a>

```json
{}
```

Response on issuing a command. This is currently empty as a placeholder.

<h2 id="tocS_KeyDestructionEvent">KeyDestructionEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeydestructionevent"></a>
<a id="schema_KeyDestructionEvent"></a>
<a id="tocSkeydestructionevent"></a>
<a id="tocskeydestructionevent"></a>

```json
{
  "applicationUid": 0,
  "keyAlias": "string",
  "success": true
}
```

A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationUid|integer(int32)|false|none|UID of the application which owns the key.|
|keyAlias|string|false|none|Alias of the key.|
|success|boolean|false|none|Whether the operation was successful.|

<h2 id="tocS_KeyGeneratedEvent">KeyGeneratedEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeygeneratedevent"></a>
<a id="schema_KeyGeneratedEvent"></a>
<a id="tocSkeygeneratedevent"></a>
<a id="tocskeygeneratedevent"></a>

```json
{
  "applicationUid": 0,
  "keyAlias": "string",
  "success": true
}
```

A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationUid|integer(int32)|false|none|UID of the application which generated the key.|
|keyAlias|string|false|none|Alias of the key.|
|success|boolean|false|none|Whether the operation was successful.|

<h2 id="tocS_KeyImportEvent">KeyImportEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeyimportevent"></a>
<a id="schema_KeyImportEvent"></a>
<a id="tocSkeyimportevent"></a>
<a id="tocskeyimportevent"></a>

```json
{
  "applicationUid": 0,
  "keyAlias": "string",
  "success": true
}
```

A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationUid|integer(int32)|false|none|UID of the application which imported the key|
|keyAlias|string|false|none|Alias of the key.|
|success|boolean|false|none|Whether the operation was successful.|

<h2 id="tocS_KeyIntegrityViolationEvent">KeyIntegrityViolationEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeyintegrityviolationevent"></a>
<a id="schema_KeyIntegrityViolationEvent"></a>
<a id="tocSkeyintegrityviolationevent"></a>
<a id="tocskeyintegrityviolationevent"></a>

```json
{
  "applicationUid": 0,
  "keyAlias": "string"
}
```

A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationUid|integer(int32)|false|none|UID of the application which owns the key|
|keyAlias|string|false|none|Alias of the key.|

<h2 id="tocS_KeyedAppState">KeyedAppState</h2>
<!-- backwards compatibility -->
<a id="schemakeyedappstate"></a>
<a id="schema_KeyedAppState"></a>
<a id="tocSkeyedappstate"></a>
<a id="tocskeyedappstate"></a>

```json
{
  "createTime": "string",
  "data": "string",
  "key": "string",
  "lastUpdateTime": "string",
  "message": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

Keyed app state reported by the app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the app state on the device.|
|data|string|false|none|Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”).|
|key|string|false|none|The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key.|
|lastUpdateTime|string(google-datetime)|false|none|The time the app state was most recently updated.|
|message|string|false|none|Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message.|
|severity|string|false|none|The severity of the app state.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|INFO|
|severity|ERROR|

<h2 id="tocS_KeyguardDismissAuthAttemptEvent">KeyguardDismissAuthAttemptEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeyguarddismissauthattemptevent"></a>
<a id="schema_KeyguardDismissAuthAttemptEvent"></a>
<a id="tocSkeyguarddismissauthattemptevent"></a>
<a id="tocskeyguarddismissauthattemptevent"></a>

```json
{
  "strongAuthMethodUsed": true,
  "success": true
}
```

An attempt was made to unlock the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strongAuthMethodUsed|boolean|false|none|Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device.|
|success|boolean|false|none|Whether the unlock attempt was successful.|

<h2 id="tocS_KeyguardDismissedEvent">KeyguardDismissedEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeyguarddismissedevent"></a>
<a id="schema_KeyguardDismissedEvent"></a>
<a id="tocSkeyguarddismissedevent"></a>
<a id="tocskeyguarddismissedevent"></a>

```json
{}
```

The keyguard was dismissed. Intentionally empty.

<h2 id="tocS_KeyguardSecuredEvent">KeyguardSecuredEvent</h2>
<!-- backwards compatibility -->
<a id="schemakeyguardsecuredevent"></a>
<a id="schema_KeyguardSecuredEvent"></a>
<a id="tocSkeyguardsecuredevent"></a>
<a id="tocskeyguardsecuredevent"></a>

```json
{}
```

The device was locked either by user or timeout. Intentionally empty.

<h2 id="tocS_KioskCustomization">KioskCustomization</h2>
<!-- backwards compatibility -->
<a id="schemakioskcustomization"></a>
<a id="schema_KioskCustomization"></a>
<a id="tocSkioskcustomization"></a>
<a id="tocskioskcustomization"></a>

```json
{
  "deviceSettings": "DEVICE_SETTINGS_UNSPECIFIED",
  "powerButtonActions": "POWER_BUTTON_ACTIONS_UNSPECIFIED",
  "statusBar": "STATUS_BAR_UNSPECIFIED",
  "systemErrorWarnings": "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
  "systemNavigation": "SYSTEM_NAVIGATION_UNSPECIFIED"
}
```

Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceSettings|string|false|none|Specifies whether the Settings app is allowed in kiosk mode.|
|powerButtonActions|string|false|none|Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.|
|statusBar|string|false|none|Specifies whether system info and notifications are disabled in kiosk mode.|
|systemErrorWarnings|string|false|none|Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.|
|systemNavigation|string|false|none|Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.|

#### Enumerated Values

|Property|Value|
|---|---|
|deviceSettings|DEVICE_SETTINGS_UNSPECIFIED|
|deviceSettings|SETTINGS_ACCESS_ALLOWED|
|deviceSettings|SETTINGS_ACCESS_BLOCKED|
|powerButtonActions|POWER_BUTTON_ACTIONS_UNSPECIFIED|
|powerButtonActions|POWER_BUTTON_AVAILABLE|
|powerButtonActions|POWER_BUTTON_BLOCKED|
|statusBar|STATUS_BAR_UNSPECIFIED|
|statusBar|NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED|
|statusBar|NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED|
|statusBar|SYSTEM_INFO_ONLY|
|systemErrorWarnings|SYSTEM_ERROR_WARNINGS_UNSPECIFIED|
|systemErrorWarnings|ERROR_AND_WARNINGS_ENABLED|
|systemErrorWarnings|ERROR_AND_WARNINGS_MUTED|
|systemNavigation|SYSTEM_NAVIGATION_UNSPECIFIED|
|systemNavigation|NAVIGATION_ENABLED|
|systemNavigation|NAVIGATION_DISABLED|
|systemNavigation|HOME_BUTTON_ONLY|

<h2 id="tocS_LaunchAppAction">LaunchAppAction</h2>
<!-- backwards compatibility -->
<a id="schemalaunchappaction"></a>
<a id="schema_LaunchAppAction"></a>
<a id="tocSlaunchappaction"></a>
<a id="tocslaunchappaction"></a>

```json
{
  "packageName": "string"
}
```

An action to launch an app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|string|false|none|Package name of app to be launched|

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
      "apiLevel": 0,
      "applicationReports": [
        {
          "applicationSource": "APPLICATION_SOURCE_UNSPECIFIED",
          "displayName": "string",
          "events": [
            {
              "createTime": "string",
              "eventType": "APPLICATION_EVENT_TYPE_UNSPECIFIED"
            }
          ],
          "installerPackageName": "string",
          "keyedAppStates": [
            {
              "createTime": "string",
              "data": "string",
              "key": "string",
              "lastUpdateTime": "string",
              "message": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ],
          "packageName": "string",
          "packageSha256Hash": "string",
          "signingKeyCertFingerprints": [
            "string"
          ],
          "state": "APPLICATION_STATE_UNSPECIFIED",
          "versionCode": 0,
          "versionName": "string"
        }
      ],
      "appliedPasswordPolicies": [
        {
          "maximumFailedPasswordsForWipe": 0,
          "passwordExpirationTimeout": "string",
          "passwordHistoryLength": 0,
          "passwordMinimumLength": 0,
          "passwordMinimumLetters": 0,
          "passwordMinimumLowerCase": 0,
          "passwordMinimumNonLetter": 0,
          "passwordMinimumNumeric": 0,
          "passwordMinimumSymbols": 0,
          "passwordMinimumUpperCase": 0,
          "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
          "passwordScope": "SCOPE_UNSPECIFIED",
          "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
          "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
        }
      ],
      "appliedPolicyName": "string",
      "appliedPolicyVersion": "string",
      "appliedState": "DEVICE_STATE_UNSPECIFIED",
      "commonCriteriaModeInfo": {
        "commonCriteriaModeStatus": "COMMON_CRITERIA_MODE_STATUS_UNKNOWN"
      },
      "deviceSettings": {
        "adbEnabled": true,
        "developmentSettingsEnabled": true,
        "encryptionStatus": "ENCRYPTION_STATUS_UNSPECIFIED",
        "isDeviceSecure": true,
        "isEncrypted": true,
        "unknownSourcesEnabled": true,
        "verifyAppsEnabled": true
      },
      "disabledReason": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displays": [
        {
          "density": 0,
          "displayId": 0,
          "height": 0,
          "name": "string",
          "refreshRate": 0,
          "state": "DISPLAY_STATE_UNSPECIFIED",
          "width": 0
        }
      ],
      "enrollmentTime": "string",
      "enrollmentTokenData": "string",
      "enrollmentTokenName": "string",
      "hardwareInfo": {
        "batteryShutdownTemperatures": [
          0
        ],
        "batteryThrottlingTemperatures": [
          0
        ],
        "brand": "string",
        "cpuShutdownTemperatures": [
          0
        ],
        "cpuThrottlingTemperatures": [
          0
        ],
        "deviceBasebandVersion": "string",
        "enterpriseSpecificId": "string",
        "gpuShutdownTemperatures": [
          0
        ],
        "gpuThrottlingTemperatures": [
          0
        ],
        "hardware": "string",
        "manufacturer": "string",
        "model": "string",
        "serialNumber": "string",
        "skinShutdownTemperatures": [
          0
        ],
        "skinThrottlingTemperatures": [
          0
        ]
      },
      "hardwareStatusSamples": [
        {
          "batteryTemperatures": [
            0
          ],
          "cpuTemperatures": [
            0
          ],
          "cpuUsages": [
            0
          ],
          "createTime": "string",
          "fanSpeeds": [
            0
          ],
          "gpuTemperatures": [
            0
          ],
          "skinTemperatures": [
            0
          ]
        }
      ],
      "lastPolicyComplianceReportTime": "string",
      "lastPolicySyncTime": "string",
      "lastStatusReportTime": "string",
      "managementMode": "MANAGEMENT_MODE_UNSPECIFIED",
      "memoryEvents": [
        {
          "byteCount": "string",
          "createTime": "string",
          "eventType": "MEMORY_EVENT_TYPE_UNSPECIFIED"
        }
      ],
      "memoryInfo": {
        "totalInternalStorage": "string",
        "totalRam": "string"
      },
      "name": "string",
      "networkInfo": {
        "imei": "string",
        "meid": "string",
        "networkOperatorName": "string",
        "telephonyInfos": [
          {
            "carrierName": "string",
            "phoneNumber": "string"
          }
        ],
        "wifiMacAddress": "string"
      },
      "nonComplianceDetails": [
        {
          "currentValue": null,
          "fieldPath": "string",
          "installationFailureReason": "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
          "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
          "packageName": "string",
          "settingName": "string",
          "specificNonComplianceContext": {
            "oncWifiContext": {
              "wifiGuid": "string"
            },
            "passwordPoliciesContext": {
              "passwordPolicyScope": "SCOPE_UNSPECIFIED"
            }
          },
          "specificNonComplianceReason": "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
        }
      ],
      "ownership": "OWNERSHIP_UNSPECIFIED",
      "policyCompliant": true,
      "policyName": "string",
      "powerManagementEvents": [
        {
          "batteryLevel": 0,
          "createTime": "string",
          "eventType": "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
        }
      ],
      "previousDeviceNames": [
        "string"
      ],
      "securityPosture": {
        "devicePosture": "POSTURE_UNSPECIFIED",
        "postureDetails": [
          {
            "advice": [
              {
                "defaultMessage": "string",
                "localizedMessages": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "securityRisk": "SECURITY_RISK_UNSPECIFIED"
          }
        ]
      },
      "softwareInfo": {
        "androidBuildNumber": "string",
        "androidBuildTime": "string",
        "androidDevicePolicyVersionCode": 0,
        "androidDevicePolicyVersionName": "string",
        "androidVersion": "string",
        "bootloaderVersion": "string",
        "deviceBuildSignature": "string",
        "deviceKernelVersion": "string",
        "primaryLanguageCode": "string",
        "securityPatchLevel": "string",
        "systemUpdateInfo": {
          "updateReceivedTime": "string",
          "updateStatus": "UPDATE_STATUS_UNKNOWN"
        }
      },
      "state": "DEVICE_STATE_UNSPECIFIED",
      "systemProperties": {
        "property1": "string",
        "property2": "string"
      },
      "user": {
        "accountIdentifier": "string"
      },
      "userName": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response to a request to list devices for a given enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|The list of devices.|
|nextPageToken|string|false|none|If there are more results, a token to retrieve next page of results.|

<h2 id="tocS_ListEnrollmentTokensResponse">ListEnrollmentTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenrollmenttokensresponse"></a>
<a id="schema_ListEnrollmentTokensResponse"></a>
<a id="tocSlistenrollmenttokensresponse"></a>
<a id="tocslistenrollmenttokensresponse"></a>

```json
{
  "enrollmentTokens": [
    {
      "additionalData": "string",
      "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
      "duration": "string",
      "expirationTimestamp": "string",
      "name": "string",
      "oneTimeOnly": true,
      "policyName": "string",
      "qrCode": "string",
      "user": {
        "accountIdentifier": "string"
      },
      "value": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response to a request to list enrollment tokens for a given enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enrollmentTokens|[[EnrollmentToken](#schemaenrollmenttoken)]|false|none|The list of enrollment tokens.|
|nextPageToken|string|false|none|If there are more results, a token to retrieve next page of results.|

<h2 id="tocS_ListEnterprisesResponse">ListEnterprisesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenterprisesresponse"></a>
<a id="schema_ListEnterprisesResponse"></a>
<a id="tocSlistenterprisesresponse"></a>
<a id="tocslistenterprisesresponse"></a>

```json
{
  "enterprises": [
    {
      "appAutoApprovalEnabled": true,
      "contactInfo": {
        "contactEmail": "string",
        "dataProtectionOfficerEmail": "string",
        "dataProtectionOfficerName": "string",
        "dataProtectionOfficerPhone": "string",
        "euRepresentativeEmail": "string",
        "euRepresentativeName": "string",
        "euRepresentativePhone": "string"
      },
      "enabledNotificationTypes": [
        "NOTIFICATION_TYPE_UNSPECIFIED"
      ],
      "enterpriseDisplayName": "string",
      "logo": {
        "sha256Hash": "string",
        "url": "string"
      },
      "name": "string",
      "primaryColor": 0,
      "pubsubTopic": "string",
      "signinDetails": [
        {
          "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
          "qrCode": "string",
          "signinEnrollmentToken": "string",
          "signinUrl": "string"
        }
      ],
      "termsAndConditions": [
        {
          "content": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          },
          "header": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response to a request to list enterprises.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprises|[[Enterprise](#schemaenterprise)]|false|none|The list of enterprises.|
|nextPageToken|string|false|none|If there are more results, a token to retrieve next page of results.|

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

<h2 id="tocS_ListPoliciesResponse">ListPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpoliciesresponse"></a>
<a id="schema_ListPoliciesResponse"></a>
<a id="tocSlistpoliciesresponse"></a>
<a id="tocslistpoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "policies": [
    {
      "accountTypesWithManagementDisabled": [
        "string"
      ],
      "addUserDisabled": true,
      "adjustVolumeDisabled": true,
      "advancedSecurityOverrides": {
        "commonCriteriaMode": "COMMON_CRITERIA_MODE_UNSPECIFIED",
        "developerSettings": "DEVELOPER_SETTINGS_UNSPECIFIED",
        "googlePlayProtectVerifyApps": "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED",
        "personalAppsThatCanReadWorkNotifications": [
          "string"
        ],
        "untrustedAppsPolicy": "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
      },
      "alwaysOnVpnPackage": {
        "lockdownEnabled": true,
        "packageName": "string"
      },
      "androidDevicePolicyTracks": [
        "APP_TRACK_UNSPECIFIED"
      ],
      "appAutoUpdatePolicy": "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
      "applications": [
        {
          "accessibleTrackIds": [
            "string"
          ],
          "alwaysOnVpnLockdownExemption": "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
          "autoUpdateMode": "AUTO_UPDATE_MODE_UNSPECIFIED",
          "connectedWorkAndPersonalApp": "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
          "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
          "delegatedScopes": [
            "DELEGATED_SCOPE_UNSPECIFIED"
          ],
          "disabled": true,
          "extensionConfig": {
            "notificationReceiver": "string",
            "signingKeyFingerprintsSha256": [
              "string"
            ]
          },
          "installType": "INSTALL_TYPE_UNSPECIFIED",
          "lockTaskAllowed": true,
          "managedConfiguration": {
            "property1": null,
            "property2": null
          },
          "managedConfigurationTemplate": {
            "configurationVariables": {
              "property1": "string",
              "property2": "string"
            },
            "templateId": "string"
          },
          "minimumVersionCode": 0,
          "packageName": "string",
          "permissionGrants": [
            {
              "permission": "string",
              "policy": "PERMISSION_POLICY_UNSPECIFIED"
            }
          ],
          "workProfileWidgets": "WORK_PROFILE_WIDGETS_UNSPECIFIED"
        }
      ],
      "autoDateAndTimeZone": "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
      "autoTimeRequired": true,
      "blockApplicationsEnabled": true,
      "bluetoothConfigDisabled": true,
      "bluetoothContactSharingDisabled": true,
      "bluetoothDisabled": true,
      "cameraAccess": "CAMERA_ACCESS_UNSPECIFIED",
      "cameraDisabled": true,
      "cellBroadcastsConfigDisabled": true,
      "choosePrivateKeyRules": [
        {
          "packageNames": [
            "string"
          ],
          "privateKeyAlias": "string",
          "urlPattern": "string"
        }
      ],
      "complianceRules": [
        {
          "apiLevelCondition": {
            "minApiLevel": 0
          },
          "disableApps": true,
          "nonComplianceDetailCondition": {
            "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
            "packageName": "string",
            "settingName": "string"
          },
          "packageNamesToDisable": [
            "string"
          ]
        }
      ],
      "createWindowsDisabled": true,
      "credentialsConfigDisabled": true,
      "crossProfilePolicies": {
        "crossProfileCopyPaste": "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
        "crossProfileDataSharing": "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
        "showWorkContactsInPersonalProfile": "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
        "workProfileWidgetsDefault": "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED"
      },
      "dataRoamingDisabled": true,
      "debuggingFeaturesAllowed": true,
      "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
      "deviceOwnerLockScreenInfo": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "encryptionPolicy": "ENCRYPTION_POLICY_UNSPECIFIED",
      "ensureVerifyAppsEnabled": true,
      "factoryResetDisabled": true,
      "frpAdminEmails": [
        "string"
      ],
      "funDisabled": true,
      "installAppsDisabled": true,
      "installUnknownSourcesAllowed": true,
      "keyguardDisabled": true,
      "keyguardDisabledFeatures": [
        "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
      ],
      "kioskCustomLauncherEnabled": true,
      "kioskCustomization": {
        "deviceSettings": "DEVICE_SETTINGS_UNSPECIFIED",
        "powerButtonActions": "POWER_BUTTON_ACTIONS_UNSPECIFIED",
        "statusBar": "STATUS_BAR_UNSPECIFIED",
        "systemErrorWarnings": "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
        "systemNavigation": "SYSTEM_NAVIGATION_UNSPECIFIED"
      },
      "locationMode": "LOCATION_MODE_UNSPECIFIED",
      "longSupportMessage": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "maximumTimeToLock": "string",
      "microphoneAccess": "MICROPHONE_ACCESS_UNSPECIFIED",
      "minimumApiLevel": 0,
      "mobileNetworksConfigDisabled": true,
      "modifyAccountsDisabled": true,
      "mountPhysicalMediaDisabled": true,
      "name": "string",
      "networkEscapeHatchEnabled": true,
      "networkResetDisabled": true,
      "oncCertificateProviders": [
        {
          "certificateReferences": [
            "string"
          ],
          "contentProviderEndpoint": {
            "packageName": "string",
            "signingCertsSha256": [
              "string"
            ],
            "uri": "string"
          }
        }
      ],
      "openNetworkConfiguration": {
        "property1": null,
        "property2": null
      },
      "outgoingBeamDisabled": true,
      "outgoingCallsDisabled": true,
      "passwordPolicies": [
        {
          "maximumFailedPasswordsForWipe": 0,
          "passwordExpirationTimeout": "string",
          "passwordHistoryLength": 0,
          "passwordMinimumLength": 0,
          "passwordMinimumLetters": 0,
          "passwordMinimumLowerCase": 0,
          "passwordMinimumNonLetter": 0,
          "passwordMinimumNumeric": 0,
          "passwordMinimumSymbols": 0,
          "passwordMinimumUpperCase": 0,
          "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
          "passwordScope": "SCOPE_UNSPECIFIED",
          "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
          "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
        }
      ],
      "passwordRequirements": {
        "maximumFailedPasswordsForWipe": 0,
        "passwordExpirationTimeout": "string",
        "passwordHistoryLength": 0,
        "passwordMinimumLength": 0,
        "passwordMinimumLetters": 0,
        "passwordMinimumLowerCase": 0,
        "passwordMinimumNonLetter": 0,
        "passwordMinimumNumeric": 0,
        "passwordMinimumSymbols": 0,
        "passwordMinimumUpperCase": 0,
        "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
        "passwordScope": "SCOPE_UNSPECIFIED",
        "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
        "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
      },
      "permissionGrants": [
        {
          "permission": "string",
          "policy": "PERMISSION_POLICY_UNSPECIFIED"
        }
      ],
      "permittedAccessibilityServices": {
        "packageNames": [
          "string"
        ]
      },
      "permittedInputMethods": {
        "packageNames": [
          "string"
        ]
      },
      "persistentPreferredActivities": [
        {
          "actions": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "receiverActivity": "string"
        }
      ],
      "personalUsagePolicies": {
        "accountTypesWithManagementDisabled": [
          "string"
        ],
        "cameraDisabled": true,
        "maxDaysWithWorkOff": 0,
        "personalApplications": [
          {
            "installType": "INSTALL_TYPE_UNSPECIFIED",
            "packageName": "string"
          }
        ],
        "personalPlayStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
        "screenCaptureDisabled": true
      },
      "playStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
      "policyEnforcementRules": [
        {
          "blockAction": {
            "blockAfterDays": 0,
            "blockScope": "BLOCK_SCOPE_UNSPECIFIED"
          },
          "settingName": "string",
          "wipeAction": {
            "preserveFrp": true,
            "wipeAfterDays": 0
          }
        }
      ],
      "preferentialNetworkService": "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
      "privateKeySelectionEnabled": true,
      "recommendedGlobalProxy": {
        "excludedHosts": [
          "string"
        ],
        "host": "string",
        "pacUri": "string",
        "port": 0
      },
      "removeUserDisabled": true,
      "safeBootDisabled": true,
      "screenCaptureDisabled": true,
      "setUserIconDisabled": true,
      "setWallpaperDisabled": true,
      "setupActions": [
        {
          "description": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          },
          "launchApp": {
            "packageName": "string"
          },
          "title": {
            "defaultMessage": "string",
            "localizedMessages": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "shareLocationDisabled": true,
      "shortSupportMessage": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "skipFirstUseHintsEnabled": true,
      "smsDisabled": true,
      "statusBarDisabled": true,
      "statusReportingSettings": {
        "applicationReportingSettings": {
          "includeRemovedApps": true
        },
        "applicationReportsEnabled": true,
        "commonCriteriaModeEnabled": true,
        "deviceSettingsEnabled": true,
        "displayInfoEnabled": true,
        "hardwareStatusEnabled": true,
        "memoryInfoEnabled": true,
        "networkInfoEnabled": true,
        "powerManagementEventsEnabled": true,
        "softwareInfoEnabled": true,
        "systemPropertiesEnabled": true
      },
      "stayOnPluggedModes": [
        "BATTERY_PLUGGED_MODE_UNSPECIFIED"
      ],
      "systemUpdate": {
        "endMinutes": 0,
        "freezePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ],
        "startMinutes": 0,
        "type": "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
      },
      "tetheringConfigDisabled": true,
      "uninstallAppsDisabled": true,
      "unmuteMicrophoneDisabled": true,
      "usageLog": {
        "enabledLogTypes": [
          "LOG_TYPE_UNSPECIFIED"
        ],
        "uploadOnCellularAllowed": [
          "LOG_TYPE_UNSPECIFIED"
        ]
      },
      "usbFileTransferDisabled": true,
      "usbMassStorageEnabled": true,
      "version": "string",
      "vpnConfigDisabled": true,
      "wifiConfigDisabled": true,
      "wifiConfigsLockdownEnabled": true
    }
  ]
}
```

Response to a request to list policies for a given enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there are more results, a token to retrieve next page of results.|
|policies|[[Policy](#schemapolicy)]|false|none|The list of policies.|

<h2 id="tocS_ListWebAppsResponse">ListWebAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebappsresponse"></a>
<a id="schema_ListWebAppsResponse"></a>
<a id="tocSlistwebappsresponse"></a>
<a id="tocslistwebappsresponse"></a>

```json
{
  "nextPageToken": "string",
  "webApps": [
    {
      "displayMode": "DISPLAY_MODE_UNSPECIFIED",
      "icons": [
        {
          "imageData": "string"
        }
      ],
      "name": "string",
      "startUrl": "string",
      "title": "string",
      "versionCode": "string"
    }
  ]
}
```

Response to a request to list web apps for a given enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there are more results, a token to retrieve next page of results.|
|webApps|[[WebApp](#schemawebapp)]|false|none|The list of web apps.|

<h2 id="tocS_LogBufferSizeCriticalEvent">LogBufferSizeCriticalEvent</h2>
<!-- backwards compatibility -->
<a id="schemalogbuffersizecriticalevent"></a>
<a id="schema_LogBufferSizeCriticalEvent"></a>
<a id="tocSlogbuffersizecriticalevent"></a>
<a id="tocslogbuffersizecriticalevent"></a>

```json
{}
```

The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty.

<h2 id="tocS_LoggingStartedEvent">LoggingStartedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaloggingstartedevent"></a>
<a id="schema_LoggingStartedEvent"></a>
<a id="tocSloggingstartedevent"></a>
<a id="tocsloggingstartedevent"></a>

```json
{}
```

usageLog policy has been enabled. Intentionally empty.

<h2 id="tocS_LoggingStoppedEvent">LoggingStoppedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaloggingstoppedevent"></a>
<a id="schema_LoggingStoppedEvent"></a>
<a id="tocSloggingstoppedevent"></a>
<a id="tocsloggingstoppedevent"></a>

```json
{}
```

usageLog policy has been disabled. Intentionally empty.

<h2 id="tocS_ManagedConfigurationTemplate">ManagedConfigurationTemplate</h2>
<!-- backwards compatibility -->
<a id="schemamanagedconfigurationtemplate"></a>
<a id="schema_ManagedConfigurationTemplate"></a>
<a id="tocSmanagedconfigurationtemplate"></a>
<a id="tocsmanagedconfigurationtemplate"></a>

```json
{
  "configurationVariables": {
    "property1": "string",
    "property2": "string"
  },
  "templateId": "string"
}
```

The managed configurations template for the app, saved from the managed configurations iframe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationVariables|object|false|none|Optional, a map containing configuration variables defined for the configuration.|
|templateId|string|false|none|The ID of the managed configurations template.|

<h2 id="tocS_ManagedProperty">ManagedProperty</h2>
<!-- backwards compatibility -->
<a id="schemamanagedproperty"></a>
<a id="schema_ManagedProperty"></a>
<a id="tocSmanagedproperty"></a>
<a id="tocsmanagedproperty"></a>

```json
{
  "defaultValue": null,
  "description": "string",
  "entries": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "key": "string",
  "nestedProperties": [
    {
      "defaultValue": null,
      "description": "string",
      "entries": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "key": "string",
      "nestedProperties": [
        {}
      ],
      "title": "string",
      "type": "MANAGED_PROPERTY_TYPE_UNSPECIFIED"
    }
  ],
  "title": "string",
  "type": "MANAGED_PROPERTY_TYPE_UNSPECIFIED"
}
```

Managed property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|object|false|none|The default value of the property. BUNDLE_ARRAY properties don't have a default value.|
|description|string|false|none|A longer description of the property, providing more detail of what it affects. Localized.|
|entries|[[ManagedPropertyEntry](#schemamanagedpropertyentry)]|false|none|For CHOICE or MULTISELECT properties, the list of possible entries.|
|key|string|false|none|The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname".|
|nestedProperties|[[ManagedProperty](#schemamanagedproperty)]|false|none|For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.|
|title|string|false|none|The name of the property. Localized.|
|type|string|false|none|The type of the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MANAGED_PROPERTY_TYPE_UNSPECIFIED|
|type|BOOL|
|type|STRING|
|type|INTEGER|
|type|CHOICE|
|type|MULTISELECT|
|type|HIDDEN|
|type|BUNDLE|
|type|BUNDLE_ARRAY|

<h2 id="tocS_ManagedPropertyEntry">ManagedPropertyEntry</h2>
<!-- backwards compatibility -->
<a id="schemamanagedpropertyentry"></a>
<a id="schema_ManagedPropertyEntry"></a>
<a id="tocSmanagedpropertyentry"></a>
<a id="tocsmanagedpropertyentry"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

An entry of a managed property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The human-readable name of the value. Localized.|
|value|string|false|none|The machine-readable value of the entry, which should be used in the configuration. Not localized.|

<h2 id="tocS_MediaMountEvent">MediaMountEvent</h2>
<!-- backwards compatibility -->
<a id="schemamediamountevent"></a>
<a id="schema_MediaMountEvent"></a>
<a id="tocSmediamountevent"></a>
<a id="tocsmediamountevent"></a>

```json
{
  "mountPoint": "string",
  "volumeLabel": "string"
}
```

Removable media was mounted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mountPoint|string|false|none|Mount point.|
|volumeLabel|string|false|none|Volume label. Redacted to empty string on organization-owned managed profile devices.|

<h2 id="tocS_MediaUnmountEvent">MediaUnmountEvent</h2>
<!-- backwards compatibility -->
<a id="schemamediaunmountevent"></a>
<a id="schema_MediaUnmountEvent"></a>
<a id="tocSmediaunmountevent"></a>
<a id="tocsmediaunmountevent"></a>

```json
{
  "mountPoint": "string",
  "volumeLabel": "string"
}
```

Removable media was unmounted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mountPoint|string|false|none|Mount point.|
|volumeLabel|string|false|none|Volume label. Redacted to empty string on organization-owned managed profile devices.|

<h2 id="tocS_MemoryEvent">MemoryEvent</h2>
<!-- backwards compatibility -->
<a id="schemamemoryevent"></a>
<a id="schema_MemoryEvent"></a>
<a id="tocSmemoryevent"></a>
<a id="tocsmemoryevent"></a>

```json
{
  "byteCount": "string",
  "createTime": "string",
  "eventType": "MEMORY_EVENT_TYPE_UNSPECIFIED"
}
```

An event related to memory and storage measurements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byteCount|string(int64)|false|none|The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.|
|createTime|string(google-datetime)|false|none|The creation time of the event.|
|eventType|string|false|none|Event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|MEMORY_EVENT_TYPE_UNSPECIFIED|
|eventType|RAM_MEASURED|
|eventType|INTERNAL_STORAGE_MEASURED|
|eventType|EXTERNAL_STORAGE_DETECTED|
|eventType|EXTERNAL_STORAGE_REMOVED|
|eventType|EXTERNAL_STORAGE_MEASURED|

<h2 id="tocS_MemoryInfo">MemoryInfo</h2>
<!-- backwards compatibility -->
<a id="schemamemoryinfo"></a>
<a id="schema_MemoryInfo"></a>
<a id="tocSmemoryinfo"></a>
<a id="tocsmemoryinfo"></a>

```json
{
  "totalInternalStorage": "string",
  "totalRam": "string"
}
```

Information about device memory and storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalInternalStorage|string(int64)|false|none|Total internal storage on device in bytes.|
|totalRam|string(int64)|false|none|Total RAM on device in bytes.|

<h2 id="tocS_NetworkInfo">NetworkInfo</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinfo"></a>
<a id="schema_NetworkInfo"></a>
<a id="tocSnetworkinfo"></a>
<a id="tocsnetworkinfo"></a>

```json
{
  "imei": "string",
  "meid": "string",
  "networkOperatorName": "string",
  "telephonyInfos": [
    {
      "carrierName": "string",
      "phoneNumber": "string"
    }
  ],
  "wifiMacAddress": "string"
}
```

Device network info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imei|string|false|none|IMEI number of the GSM device. For example, A1000031212.|
|meid|string|false|none|MEID number of the CDMA device. For example, A00000292788E1.|
|networkOperatorName|string|false|none|Alphabetic name of current registered operator. For example, Vodafone.|
|telephonyInfos|[[TelephonyInfo](#schematelephonyinfo)]|false|none|Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23.|
|wifiMacAddress|string|false|none|Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.|

<h2 id="tocS_NonComplianceDetail">NonComplianceDetail</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliancedetail"></a>
<a id="schema_NonComplianceDetail"></a>
<a id="tocSnoncompliancedetail"></a>
<a id="tocsnoncompliancedetail"></a>

```json
{
  "currentValue": null,
  "fieldPath": "string",
  "installationFailureReason": "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
  "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
  "packageName": "string",
  "settingName": "string",
  "specificNonComplianceContext": {
    "oncWifiContext": {
      "wifiGuid": "string"
    },
    "passwordPoliciesContext": {
      "passwordPolicyScope": "SCOPE_UNSPECIFIED"
    }
  },
  "specificNonComplianceReason": "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED"
}
```

Provides detail about non-compliance with a policy setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentValue|object|false|none|If the policy setting could not be applied, the current value of the setting on the device.|
|fieldPath|string|false|none|For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url|
|installationFailureReason|string|false|none|If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.|
|nonComplianceReason|string|false|none|The reason the device is not in compliance with the setting.|
|packageName|string|false|none|The package name indicating which app is out of compliance, if applicable.|
|settingName|string|false|none|The name of the policy setting. This is the JSON field name of a top-level Policy field.|
|specificNonComplianceContext|[SpecificNonComplianceContext](#schemaspecificnoncompliancecontext)|false|none|Additional context for specific_non_compliance_reason.|
|specificNonComplianceReason|string|false|none|The policy-specific reason the device is not in compliance with the setting.|

#### Enumerated Values

|Property|Value|
|---|---|
|installationFailureReason|INSTALLATION_FAILURE_REASON_UNSPECIFIED|
|installationFailureReason|INSTALLATION_FAILURE_REASON_UNKNOWN|
|installationFailureReason|IN_PROGRESS|
|installationFailureReason|NOT_FOUND|
|installationFailureReason|NOT_COMPATIBLE_WITH_DEVICE|
|installationFailureReason|NOT_APPROVED|
|installationFailureReason|PERMISSIONS_NOT_ACCEPTED|
|installationFailureReason|NOT_AVAILABLE_IN_COUNTRY|
|installationFailureReason|NO_LICENSES_REMAINING|
|installationFailureReason|NOT_ENROLLED|
|installationFailureReason|USER_INVALID|
|nonComplianceReason|NON_COMPLIANCE_REASON_UNSPECIFIED|
|nonComplianceReason|API_LEVEL|
|nonComplianceReason|MANAGEMENT_MODE|
|nonComplianceReason|USER_ACTION|
|nonComplianceReason|INVALID_VALUE|
|nonComplianceReason|APP_NOT_INSTALLED|
|nonComplianceReason|UNSUPPORTED|
|nonComplianceReason|APP_INSTALLED|
|nonComplianceReason|PENDING|
|nonComplianceReason|APP_INCOMPATIBLE|
|nonComplianceReason|APP_NOT_UPDATED|
|specificNonComplianceReason|SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED|
|specificNonComplianceReason|PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED|
|specificNonComplianceReason|PASSWORD_POLICIES_PASSWORD_EXPIRED|
|specificNonComplianceReason|PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT|
|specificNonComplianceReason|ONC_WIFI_INVALID_VALUE|
|specificNonComplianceReason|ONC_WIFI_API_LEVEL|

<h2 id="tocS_NonComplianceDetailCondition">NonComplianceDetailCondition</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliancedetailcondition"></a>
<a id="schema_NonComplianceDetailCondition"></a>
<a id="tocSnoncompliancedetailcondition"></a>
<a id="tocsnoncompliancedetailcondition"></a>

```json
{
  "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
  "packageName": "string",
  "settingName": "string"
}
```

A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonComplianceReason|string|false|none|The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.|
|packageName|string|false|none|The package name of the app that's out of compliance. If not set, then this condition matches any package name.|
|settingName|string|false|none|The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.|

#### Enumerated Values

|Property|Value|
|---|---|
|nonComplianceReason|NON_COMPLIANCE_REASON_UNSPECIFIED|
|nonComplianceReason|API_LEVEL|
|nonComplianceReason|MANAGEMENT_MODE|
|nonComplianceReason|USER_ACTION|
|nonComplianceReason|INVALID_VALUE|
|nonComplianceReason|APP_NOT_INSTALLED|
|nonComplianceReason|UNSUPPORTED|
|nonComplianceReason|APP_INSTALLED|
|nonComplianceReason|PENDING|
|nonComplianceReason|APP_INCOMPATIBLE|
|nonComplianceReason|APP_NOT_UPDATED|

<h2 id="tocS_OncCertificateProvider">OncCertificateProvider</h2>
<!-- backwards compatibility -->
<a id="schemaonccertificateprovider"></a>
<a id="schema_OncCertificateProvider"></a>
<a id="tocSonccertificateprovider"></a>
<a id="tocsonccertificateprovider"></a>

```json
{
  "certificateReferences": [
    "string"
  ],
  "contentProviderEndpoint": {
    "packageName": "string",
    "signingCertsSha256": [
      "string"
    ],
    "uri": "string"
  }
}
```

This feature is not generally available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateReferences|[string]|false|none|This feature is not generally available.|
|contentProviderEndpoint|[ContentProviderEndpoint](#schemacontentproviderendpoint)|false|none|This feature is not generally available.|

<h2 id="tocS_OncWifiContext">OncWifiContext</h2>
<!-- backwards compatibility -->
<a id="schemaoncwificontext"></a>
<a id="schema_OncWifiContext"></a>
<a id="tocSoncwificontext"></a>
<a id="tocsoncwificontext"></a>

```json
{
  "wifiGuid": "string"
}
```

Additional context for non-compliance related to Wi-Fi configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wifiGuid|string|false|none|The GUID of non-compliant Wi-Fi configuration.|

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

<h2 id="tocS_OsShutdownEvent">OsShutdownEvent</h2>
<!-- backwards compatibility -->
<a id="schemaosshutdownevent"></a>
<a id="schema_OsShutdownEvent"></a>
<a id="tocSosshutdownevent"></a>
<a id="tocsosshutdownevent"></a>

```json
{}
```

Device was shutdown. Intentionally empty.

<h2 id="tocS_OsStartupEvent">OsStartupEvent</h2>
<!-- backwards compatibility -->
<a id="schemaosstartupevent"></a>
<a id="schema_OsStartupEvent"></a>
<a id="tocSosstartupevent"></a>
<a id="tocsosstartupevent"></a>

```json
{
  "verifiedBootState": "VERIFIED_BOOT_STATE_UNSPECIFIED",
  "verityMode": "DM_VERITY_MODE_UNSPECIFIED"
}
```

Device was started.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifiedBootState|string|false|none|Verified Boot state.|
|verityMode|string|false|none|dm-verity mode.|

#### Enumerated Values

|Property|Value|
|---|---|
|verifiedBootState|VERIFIED_BOOT_STATE_UNSPECIFIED|
|verifiedBootState|GREEN|
|verifiedBootState|YELLOW|
|verifiedBootState|ORANGE|
|verityMode|DM_VERITY_MODE_UNSPECIFIED|
|verityMode|ENFORCING|
|verityMode|IO_ERROR|
|verityMode|DISABLED|

<h2 id="tocS_PackageNameList">PackageNameList</h2>
<!-- backwards compatibility -->
<a id="schemapackagenamelist"></a>
<a id="schema_PackageNameList"></a>
<a id="tocSpackagenamelist"></a>
<a id="tocspackagenamelist"></a>

```json
{
  "packageNames": [
    "string"
  ]
}
```

A list of package names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageNames|[string]|false|none|A list of package names.|

<h2 id="tocS_PasswordPoliciesContext">PasswordPoliciesContext</h2>
<!-- backwards compatibility -->
<a id="schemapasswordpoliciescontext"></a>
<a id="schema_PasswordPoliciesContext"></a>
<a id="tocSpasswordpoliciescontext"></a>
<a id="tocspasswordpoliciescontext"></a>

```json
{
  "passwordPolicyScope": "SCOPE_UNSPECIFIED"
}
```

Additional context for non-compliance related to password policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|passwordPolicyScope|string|false|none|The scope of non-compliant password.|

#### Enumerated Values

|Property|Value|
|---|---|
|passwordPolicyScope|SCOPE_UNSPECIFIED|
|passwordPolicyScope|SCOPE_DEVICE|
|passwordPolicyScope|SCOPE_PROFILE|

<h2 id="tocS_PasswordRequirements">PasswordRequirements</h2>
<!-- backwards compatibility -->
<a id="schemapasswordrequirements"></a>
<a id="schema_PasswordRequirements"></a>
<a id="tocSpasswordrequirements"></a>
<a id="tocspasswordrequirements"></a>

```json
{
  "maximumFailedPasswordsForWipe": 0,
  "passwordExpirationTimeout": "string",
  "passwordHistoryLength": 0,
  "passwordMinimumLength": 0,
  "passwordMinimumLetters": 0,
  "passwordMinimumLowerCase": 0,
  "passwordMinimumNonLetter": 0,
  "passwordMinimumNumeric": 0,
  "passwordMinimumSymbols": 0,
  "passwordMinimumUpperCase": 0,
  "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
  "passwordScope": "SCOPE_UNSPECIFIED",
  "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
  "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
}
```

Requirements for the password used to unlock a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximumFailedPasswordsForWipe|integer(int32)|false|none|Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.|
|passwordExpirationTimeout|string(google-duration)|false|none|Password expiration timeout.|
|passwordHistoryLength|integer(int32)|false|none|The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.|
|passwordMinimumLength|integer(int32)|false|none|The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.|
|passwordMinimumLetters|integer(int32)|false|none|Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.|
|passwordMinimumLowerCase|integer(int32)|false|none|Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.|
|passwordMinimumNonLetter|integer(int32)|false|none|Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.|
|passwordMinimumNumeric|integer(int32)|false|none|Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.|
|passwordMinimumSymbols|integer(int32)|false|none|Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.|
|passwordMinimumUpperCase|integer(int32)|false|none|Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.|
|passwordQuality|string|false|none|The required password quality.|
|passwordScope|string|false|none|The scope that the password requirement applies to.|
|requirePasswordUnlock|string|false|none|The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.|
|unifiedLockSettings|string|false|none|Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION.|

#### Enumerated Values

|Property|Value|
|---|---|
|passwordQuality|PASSWORD_QUALITY_UNSPECIFIED|
|passwordQuality|BIOMETRIC_WEAK|
|passwordQuality|SOMETHING|
|passwordQuality|NUMERIC|
|passwordQuality|NUMERIC_COMPLEX|
|passwordQuality|ALPHABETIC|
|passwordQuality|ALPHANUMERIC|
|passwordQuality|COMPLEX|
|passwordQuality|COMPLEXITY_LOW|
|passwordQuality|COMPLEXITY_MEDIUM|
|passwordQuality|COMPLEXITY_HIGH|
|passwordScope|SCOPE_UNSPECIFIED|
|passwordScope|SCOPE_DEVICE|
|passwordScope|SCOPE_PROFILE|
|requirePasswordUnlock|REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED|
|requirePasswordUnlock|USE_DEFAULT_DEVICE_TIMEOUT|
|requirePasswordUnlock|REQUIRE_EVERY_DAY|
|unifiedLockSettings|UNIFIED_LOCK_SETTINGS_UNSPECIFIED|
|unifiedLockSettings|ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK|
|unifiedLockSettings|REQUIRE_SEPARATE_WORK_LOCK|

<h2 id="tocS_PerAppResult">PerAppResult</h2>
<!-- backwards compatibility -->
<a id="schemaperappresult"></a>
<a id="schema_PerAppResult"></a>
<a id="tocSperappresult"></a>
<a id="tocsperappresult"></a>

```json
{
  "clearingResult": "CLEARING_RESULT_UNSPECIFIED"
}
```

The result of an attempt to clear the data of a single app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clearingResult|string|false|none|The result of an attempt to clear the data of a single app.|

#### Enumerated Values

|Property|Value|
|---|---|
|clearingResult|CLEARING_RESULT_UNSPECIFIED|
|clearingResult|SUCCESS|
|clearingResult|APP_NOT_FOUND|
|clearingResult|APP_PROTECTED|
|clearingResult|API_LEVEL|

<h2 id="tocS_PermissionGrant">PermissionGrant</h2>
<!-- backwards compatibility -->
<a id="schemapermissiongrant"></a>
<a id="schema_PermissionGrant"></a>
<a id="tocSpermissiongrant"></a>
<a id="tocspermissiongrant"></a>

```json
{
  "permission": "string",
  "policy": "PERMISSION_POLICY_UNSPECIFIED"
}
```

Configuration for an Android permission and its grant state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|string|false|none|The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR.|
|policy|string|false|none|The policy for granting the permission.|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|PERMISSION_POLICY_UNSPECIFIED|
|policy|PROMPT|
|policy|GRANT|
|policy|DENY|

<h2 id="tocS_PersistentPreferredActivity">PersistentPreferredActivity</h2>
<!-- backwards compatibility -->
<a id="schemapersistentpreferredactivity"></a>
<a id="schema_PersistentPreferredActivity"></a>
<a id="tocSpersistentpreferredactivity"></a>
<a id="tocspersistentpreferredactivity"></a>

```json
{
  "actions": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "receiverActivity": "string"
}
```

A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|false|none|The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.|
|categories|[string]|false|none|The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.|
|receiverActivity|string|false|none|The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.|

<h2 id="tocS_PersonalApplicationPolicy">PersonalApplicationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemapersonalapplicationpolicy"></a>
<a id="schema_PersonalApplicationPolicy"></a>
<a id="tocSpersonalapplicationpolicy"></a>
<a id="tocspersonalapplicationpolicy"></a>

```json
{
  "installType": "INSTALL_TYPE_UNSPECIFIED",
  "packageName": "string"
}
```

Policies for apps in the personal profile of a company-owned device with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installType|string|false|none|The type of installation to perform.|
|packageName|string|false|none|The package name of the application.|

#### Enumerated Values

|Property|Value|
|---|---|
|installType|INSTALL_TYPE_UNSPECIFIED|
|installType|BLOCKED|
|installType|AVAILABLE|

<h2 id="tocS_PersonalUsagePolicies">PersonalUsagePolicies</h2>
<!-- backwards compatibility -->
<a id="schemapersonalusagepolicies"></a>
<a id="schema_PersonalUsagePolicies"></a>
<a id="tocSpersonalusagepolicies"></a>
<a id="tocspersonalusagepolicies"></a>

```json
{
  "accountTypesWithManagementDisabled": [
    "string"
  ],
  "cameraDisabled": true,
  "maxDaysWithWorkOff": 0,
  "personalApplications": [
    {
      "installType": "INSTALL_TYPE_UNSPECIFIED",
      "packageName": "string"
    }
  ],
  "personalPlayStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
  "screenCaptureDisabled": true
}
```

Policies controlling personal usage on a company-owned device with a work profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountTypesWithManagementDisabled|[string]|false|none|Account types that can't be managed by the user.|
|cameraDisabled|boolean|false|none|If true, the camera is disabled on the personal profile.|
|maxDaysWithWorkOff|integer(int32)|false|none|Controls how long the work profile can stay off. The duration must be at least 3 days.|
|personalApplications|[[PersonalApplicationPolicy](#schemapersonalapplicationpolicy)]|false|none|Policy applied to applications in the personal profile.|
|personalPlayStoreMode|string|false|none|Used together with personalApplications to control how apps in the personal profile are allowed or blocked.|
|screenCaptureDisabled|boolean|false|none|If true, screen capture is disabled for all users.|

#### Enumerated Values

|Property|Value|
|---|---|
|personalPlayStoreMode|PLAY_STORE_MODE_UNSPECIFIED|
|personalPlayStoreMode|BLACKLIST|
|personalPlayStoreMode|BLOCKLIST|
|personalPlayStoreMode|ALLOWLIST|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "accountTypesWithManagementDisabled": [
    "string"
  ],
  "addUserDisabled": true,
  "adjustVolumeDisabled": true,
  "advancedSecurityOverrides": {
    "commonCriteriaMode": "COMMON_CRITERIA_MODE_UNSPECIFIED",
    "developerSettings": "DEVELOPER_SETTINGS_UNSPECIFIED",
    "googlePlayProtectVerifyApps": "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED",
    "personalAppsThatCanReadWorkNotifications": [
      "string"
    ],
    "untrustedAppsPolicy": "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
  },
  "alwaysOnVpnPackage": {
    "lockdownEnabled": true,
    "packageName": "string"
  },
  "androidDevicePolicyTracks": [
    "APP_TRACK_UNSPECIFIED"
  ],
  "appAutoUpdatePolicy": "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
  "applications": [
    {
      "accessibleTrackIds": [
        "string"
      ],
      "alwaysOnVpnLockdownExemption": "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
      "autoUpdateMode": "AUTO_UPDATE_MODE_UNSPECIFIED",
      "connectedWorkAndPersonalApp": "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
      "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
      "delegatedScopes": [
        "DELEGATED_SCOPE_UNSPECIFIED"
      ],
      "disabled": true,
      "extensionConfig": {
        "notificationReceiver": "string",
        "signingKeyFingerprintsSha256": [
          "string"
        ]
      },
      "installType": "INSTALL_TYPE_UNSPECIFIED",
      "lockTaskAllowed": true,
      "managedConfiguration": {
        "property1": null,
        "property2": null
      },
      "managedConfigurationTemplate": {
        "configurationVariables": {
          "property1": "string",
          "property2": "string"
        },
        "templateId": "string"
      },
      "minimumVersionCode": 0,
      "packageName": "string",
      "permissionGrants": [
        {
          "permission": "string",
          "policy": "PERMISSION_POLICY_UNSPECIFIED"
        }
      ],
      "workProfileWidgets": "WORK_PROFILE_WIDGETS_UNSPECIFIED"
    }
  ],
  "autoDateAndTimeZone": "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
  "autoTimeRequired": true,
  "blockApplicationsEnabled": true,
  "bluetoothConfigDisabled": true,
  "bluetoothContactSharingDisabled": true,
  "bluetoothDisabled": true,
  "cameraAccess": "CAMERA_ACCESS_UNSPECIFIED",
  "cameraDisabled": true,
  "cellBroadcastsConfigDisabled": true,
  "choosePrivateKeyRules": [
    {
      "packageNames": [
        "string"
      ],
      "privateKeyAlias": "string",
      "urlPattern": "string"
    }
  ],
  "complianceRules": [
    {
      "apiLevelCondition": {
        "minApiLevel": 0
      },
      "disableApps": true,
      "nonComplianceDetailCondition": {
        "nonComplianceReason": "NON_COMPLIANCE_REASON_UNSPECIFIED",
        "packageName": "string",
        "settingName": "string"
      },
      "packageNamesToDisable": [
        "string"
      ]
    }
  ],
  "createWindowsDisabled": true,
  "credentialsConfigDisabled": true,
  "crossProfilePolicies": {
    "crossProfileCopyPaste": "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED",
    "crossProfileDataSharing": "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED",
    "showWorkContactsInPersonalProfile": "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED",
    "workProfileWidgetsDefault": "WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED"
  },
  "dataRoamingDisabled": true,
  "debuggingFeaturesAllowed": true,
  "defaultPermissionPolicy": "PERMISSION_POLICY_UNSPECIFIED",
  "deviceOwnerLockScreenInfo": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "encryptionPolicy": "ENCRYPTION_POLICY_UNSPECIFIED",
  "ensureVerifyAppsEnabled": true,
  "factoryResetDisabled": true,
  "frpAdminEmails": [
    "string"
  ],
  "funDisabled": true,
  "installAppsDisabled": true,
  "installUnknownSourcesAllowed": true,
  "keyguardDisabled": true,
  "keyguardDisabledFeatures": [
    "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
  ],
  "kioskCustomLauncherEnabled": true,
  "kioskCustomization": {
    "deviceSettings": "DEVICE_SETTINGS_UNSPECIFIED",
    "powerButtonActions": "POWER_BUTTON_ACTIONS_UNSPECIFIED",
    "statusBar": "STATUS_BAR_UNSPECIFIED",
    "systemErrorWarnings": "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
    "systemNavigation": "SYSTEM_NAVIGATION_UNSPECIFIED"
  },
  "locationMode": "LOCATION_MODE_UNSPECIFIED",
  "longSupportMessage": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "maximumTimeToLock": "string",
  "microphoneAccess": "MICROPHONE_ACCESS_UNSPECIFIED",
  "minimumApiLevel": 0,
  "mobileNetworksConfigDisabled": true,
  "modifyAccountsDisabled": true,
  "mountPhysicalMediaDisabled": true,
  "name": "string",
  "networkEscapeHatchEnabled": true,
  "networkResetDisabled": true,
  "oncCertificateProviders": [
    {
      "certificateReferences": [
        "string"
      ],
      "contentProviderEndpoint": {
        "packageName": "string",
        "signingCertsSha256": [
          "string"
        ],
        "uri": "string"
      }
    }
  ],
  "openNetworkConfiguration": {
    "property1": null,
    "property2": null
  },
  "outgoingBeamDisabled": true,
  "outgoingCallsDisabled": true,
  "passwordPolicies": [
    {
      "maximumFailedPasswordsForWipe": 0,
      "passwordExpirationTimeout": "string",
      "passwordHistoryLength": 0,
      "passwordMinimumLength": 0,
      "passwordMinimumLetters": 0,
      "passwordMinimumLowerCase": 0,
      "passwordMinimumNonLetter": 0,
      "passwordMinimumNumeric": 0,
      "passwordMinimumSymbols": 0,
      "passwordMinimumUpperCase": 0,
      "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
      "passwordScope": "SCOPE_UNSPECIFIED",
      "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
      "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
    }
  ],
  "passwordRequirements": {
    "maximumFailedPasswordsForWipe": 0,
    "passwordExpirationTimeout": "string",
    "passwordHistoryLength": 0,
    "passwordMinimumLength": 0,
    "passwordMinimumLetters": 0,
    "passwordMinimumLowerCase": 0,
    "passwordMinimumNonLetter": 0,
    "passwordMinimumNumeric": 0,
    "passwordMinimumSymbols": 0,
    "passwordMinimumUpperCase": 0,
    "passwordQuality": "PASSWORD_QUALITY_UNSPECIFIED",
    "passwordScope": "SCOPE_UNSPECIFIED",
    "requirePasswordUnlock": "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
    "unifiedLockSettings": "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
  },
  "permissionGrants": [
    {
      "permission": "string",
      "policy": "PERMISSION_POLICY_UNSPECIFIED"
    }
  ],
  "permittedAccessibilityServices": {
    "packageNames": [
      "string"
    ]
  },
  "permittedInputMethods": {
    "packageNames": [
      "string"
    ]
  },
  "persistentPreferredActivities": [
    {
      "actions": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "receiverActivity": "string"
    }
  ],
  "personalUsagePolicies": {
    "accountTypesWithManagementDisabled": [
      "string"
    ],
    "cameraDisabled": true,
    "maxDaysWithWorkOff": 0,
    "personalApplications": [
      {
        "installType": "INSTALL_TYPE_UNSPECIFIED",
        "packageName": "string"
      }
    ],
    "personalPlayStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
    "screenCaptureDisabled": true
  },
  "playStoreMode": "PLAY_STORE_MODE_UNSPECIFIED",
  "policyEnforcementRules": [
    {
      "blockAction": {
        "blockAfterDays": 0,
        "blockScope": "BLOCK_SCOPE_UNSPECIFIED"
      },
      "settingName": "string",
      "wipeAction": {
        "preserveFrp": true,
        "wipeAfterDays": 0
      }
    }
  ],
  "preferentialNetworkService": "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
  "privateKeySelectionEnabled": true,
  "recommendedGlobalProxy": {
    "excludedHosts": [
      "string"
    ],
    "host": "string",
    "pacUri": "string",
    "port": 0
  },
  "removeUserDisabled": true,
  "safeBootDisabled": true,
  "screenCaptureDisabled": true,
  "setUserIconDisabled": true,
  "setWallpaperDisabled": true,
  "setupActions": [
    {
      "description": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      },
      "launchApp": {
        "packageName": "string"
      },
      "title": {
        "defaultMessage": "string",
        "localizedMessages": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "shareLocationDisabled": true,
  "shortSupportMessage": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "skipFirstUseHintsEnabled": true,
  "smsDisabled": true,
  "statusBarDisabled": true,
  "statusReportingSettings": {
    "applicationReportingSettings": {
      "includeRemovedApps": true
    },
    "applicationReportsEnabled": true,
    "commonCriteriaModeEnabled": true,
    "deviceSettingsEnabled": true,
    "displayInfoEnabled": true,
    "hardwareStatusEnabled": true,
    "memoryInfoEnabled": true,
    "networkInfoEnabled": true,
    "powerManagementEventsEnabled": true,
    "softwareInfoEnabled": true,
    "systemPropertiesEnabled": true
  },
  "stayOnPluggedModes": [
    "BATTERY_PLUGGED_MODE_UNSPECIFIED"
  ],
  "systemUpdate": {
    "endMinutes": 0,
    "freezePeriods": [
      {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ],
    "startMinutes": 0,
    "type": "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
  },
  "tetheringConfigDisabled": true,
  "uninstallAppsDisabled": true,
  "unmuteMicrophoneDisabled": true,
  "usageLog": {
    "enabledLogTypes": [
      "LOG_TYPE_UNSPECIFIED"
    ],
    "uploadOnCellularAllowed": [
      "LOG_TYPE_UNSPECIFIED"
    ]
  },
  "usbFileTransferDisabled": true,
  "usbMassStorageEnabled": true,
  "version": "string",
  "vpnConfigDisabled": true,
  "wifiConfigDisabled": true,
  "wifiConfigsLockdownEnabled": true
}
```

A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountTypesWithManagementDisabled|[string]|false|none|Account types that can't be managed by the user.|
|addUserDisabled|boolean|false|none|Whether adding new users and profiles is disabled.|
|adjustVolumeDisabled|boolean|false|none|Whether adjusting the master volume is disabled. Also mutes the device.|
|advancedSecurityOverrides|[AdvancedSecurityOverrides](#schemaadvancedsecurityoverrides)|false|none|Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.|
|alwaysOnVpnPackage|[AlwaysOnVpnPackage](#schemaalwaysonvpnpackage)|false|none|Configuration for an always-on VPN connection. Use with vpn_config_disabled to prevent modification of this setting.|
|androidDevicePolicyTracks|[string]|false|none|The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track.|
|appAutoUpdatePolicy|string|false|none|Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.|
|applications|[[ApplicationPolicy](#schemaapplicationpolicy)]|false|none|Policy applied to apps.|
|autoDateAndTimeZone|string|false|none|Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.|
|autoTimeRequired|boolean|false|none|Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored.|
|blockApplicationsEnabled|boolean|false|none|Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.|
|bluetoothConfigDisabled|boolean|false|none|Whether configuring bluetooth is disabled.|
|bluetoothContactSharingDisabled|boolean|false|none|Whether bluetooth contact sharing is disabled.|
|bluetoothDisabled|boolean|false|none|Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.|
|cameraAccess|string|false|none|Controls the use of the camera and whether the user has access to the camera access toggle.|
|cameraDisabled|boolean|false|none|If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected.|
|cellBroadcastsConfigDisabled|boolean|false|none|Whether configuring cell broadcast is disabled.|
|choosePrivateKeyRules|[[ChoosePrivateKeyRule](#schemachooseprivatekeyrule)]|false|none|Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details.|
|complianceRules|[[ComplianceRule](#schemacompliancerule)]|false|none|Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead.|
|createWindowsDisabled|boolean|false|none|Whether creating windows besides app windows is disabled.|
|credentialsConfigDisabled|boolean|false|none|Whether configuring user credentials is disabled.|
|crossProfilePolicies|[CrossProfilePolicies](#schemacrossprofilepolicies)|false|none|Cross-profile policies applied on the device.|
|dataRoamingDisabled|boolean|false|none|Whether roaming data services are disabled.|
|debuggingFeaturesAllowed|boolean|false|none|Whether the user is allowed to enable debugging features.|
|defaultPermissionPolicy|string|false|none|The default permission policy for runtime permission requests.|
|deviceOwnerLockScreenInfo|[UserFacingMessage](#schemauserfacingmessage)|false|none|The device owner information to be shown on the lock screen.|
|encryptionPolicy|string|false|none|Whether encryption is enabled|
|ensureVerifyAppsEnabled|boolean|false|none|Whether app verification is force-enabled.|
|factoryResetDisabled|boolean|false|none|Whether factory resetting from settings is disabled.|
|frpAdminEmails|[string]|false|none|Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.|
|funDisabled|boolean|false|none|Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.|
|installAppsDisabled|boolean|false|none|Whether user installation of apps is disabled.|
|installUnknownSourcesAllowed|boolean|false|none|This field has no effect.|
|keyguardDisabled|boolean|false|none|If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays.|
|keyguardDisabledFeatures|[string]|false|none|Disabled keyguard customizations, such as widgets.|
|kioskCustomLauncherEnabled|boolean|false|none|Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior.|
|kioskCustomization|[KioskCustomization](#schemakioskcustomization)|false|none|Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.|
|locationMode|string|false|none|The degree of location detection enabled.|
|longSupportMessage|[UserFacingMessage](#schemauserfacingmessage)|false|none|A message displayed to the user in the device administators settings screen.|
|maximumTimeToLock|string(int64)|false|none|Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.|
|microphoneAccess|string|false|none|Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices.|
|minimumApiLevel|integer(int32)|false|none|The minimum allowed Android API level.|
|mobileNetworksConfigDisabled|boolean|false|none|Whether configuring mobile networks is disabled.|
|modifyAccountsDisabled|boolean|false|none|Whether adding or removing accounts is disabled.|
|mountPhysicalMediaDisabled|boolean|false|none|Whether the user mounting physical external media is disabled.|
|name|string|false|none|The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.|
|networkEscapeHatchEnabled|boolean|false|none|Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details.|
|networkResetDisabled|boolean|false|none|Whether resetting network settings is disabled.|
|oncCertificateProviders|[[OncCertificateProvider](#schemaonccertificateprovider)]|false|none|This feature is not generally available.|
|openNetworkConfiguration|object|false|none|Network configuration for the device. See configure networks for more information.|
|outgoingBeamDisabled|boolean|false|none|Whether using NFC to beam data from apps is disabled.|
|outgoingCallsDisabled|boolean|false|none|Whether outgoing calls are disabled.|
|passwordPolicies|[[PasswordRequirements](#schemapasswordrequirements)]|false|none|Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy.|
|passwordRequirements|[PasswordRequirements](#schemapasswordrequirements)|false|none|Password requirements. The field password_requirements.require_password_unlock must not be set. DEPRECATED - Use passwordPolicies.Note:Complexity-based values of PasswordQuality, that is, COMPLEXITY_LOW, COMPLEXITY_MEDIUM, and COMPLEXITY_HIGH, cannot be used here. unified_lock_settings cannot be used here.|
|permissionGrants|[[PermissionGrant](#schemapermissiongrant)]|false|none|Explicit permission or group grants or denials for all apps. These values override the default_permission_policy.|
|permittedAccessibilityServices|[PackageNameList](#schemapackagenamelist)|false|none|Specifies permitted accessibility services. If the field is not set, any accessibility service can be used. If the field is set, only the accessibility services in this list and the system's built-in accessibility service can be used. In particular, if the field is set to empty, only the system's built-in accessibility servicess can be used. This can be set on fully managed devices and on work profiles. When applied to a work profile, this affects both the personal profile and the work profile.|
|permittedInputMethods|[PackageNameList](#schemapackagenamelist)|false|none|If present, only the input methods provided by packages in this list are permitted. If this field is present, but the list is empty, then only system input methods are permitted.|
|persistentPreferredActivities|[[PersistentPreferredActivity](#schemapersistentpreferredactivity)]|false|none|Default intent handler activities.|
|personalUsagePolicies|[PersonalUsagePolicies](#schemapersonalusagepolicies)|false|none|Policies managing personal usage on a company-owned device.|
|playStoreMode|string|false|none|This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.|
|policyEnforcementRules|[[PolicyEnforcementRule](#schemapolicyenforcementrule)]|false|none|Rules that define the behavior when a particular policy can not be applied on device|
|preferentialNetworkService|string|false|none|Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices.|
|privateKeySelectionEnabled|boolean|false|none|Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable.|
|recommendedGlobalProxy|[ProxyInfo](#schemaproxyinfo)|false|none|The network-independent global HTTP proxy. Typically proxies should be configured per-network in open_network_configuration. However for unusual configurations like general internal filtering a global HTTP proxy may be useful. If the proxy is not accessible, network access may break. The global proxy is only a recommendation and some apps may ignore it.|
|removeUserDisabled|boolean|false|none|Whether removing other users is disabled.|
|safeBootDisabled|boolean|false|none|Whether rebooting the device into safe boot is disabled.|
|screenCaptureDisabled|boolean|false|none|Whether screen capture is disabled.|
|setUserIconDisabled|boolean|false|none|Whether changing the user icon is disabled.|
|setWallpaperDisabled|boolean|false|none|Whether changing the wallpaper is disabled.|
|setupActions|[[SetupAction](#schemasetupaction)]|false|none|Action to take during the setup process. At most one action may be specified.|
|shareLocationDisabled|boolean|false|none|Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles.|
|shortSupportMessage|[UserFacingMessage](#schemauserfacingmessage)|false|none|A message displayed to the user in the settings screen wherever functionality has been disabled by the admin. If the message is longer than 200 characters it may be truncated.|
|skipFirstUseHintsEnabled|boolean|false|none|Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.|
|smsDisabled|boolean|false|none|Whether sending and receiving SMS messages is disabled.|
|statusBarDisabled|boolean|false|none|Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled.|
|statusReportingSettings|[StatusReportingSettings](#schemastatusreportingsettings)|false|none|Status reporting settings|
|stayOnPluggedModes|[string]|false|none|The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.|
|systemUpdate|[SystemUpdate](#schemasystemupdate)|false|none|The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.|
|tetheringConfigDisabled|boolean|false|none|Whether configuring tethering and portable hotspots is disabled.|
|uninstallAppsDisabled|boolean|false|none|Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications|
|unmuteMicrophoneDisabled|boolean|false|none|If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices.|
|usageLog|[UsageLog](#schemausagelog)|false|none|Configuration of device activity logging.|
|usbFileTransferDisabled|boolean|false|none|Whether transferring files over USB is disabled. This is supported only on company-owned devices.|
|usbMassStorageEnabled|boolean|false|none|Whether USB storage is enabled. Deprecated.|
|version|string(int64)|false|none|The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.|
|vpnConfigDisabled|boolean|false|none|Whether configuring VPN is disabled.|
|wifiConfigDisabled|boolean|false|none|Whether configuring Wi-Fi access points is disabled. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled).|
|wifiConfigsLockdownEnabled|boolean|false|none|DEPRECATED - Use wifi_config_disabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|androidDevicePolicyTracks|APP_TRACK_UNSPECIFIED|
|androidDevicePolicyTracks|PRODUCTION|
|androidDevicePolicyTracks|BETA|
|appAutoUpdatePolicy|APP_AUTO_UPDATE_POLICY_UNSPECIFIED|
|appAutoUpdatePolicy|CHOICE_TO_THE_USER|
|appAutoUpdatePolicy|NEVER|
|appAutoUpdatePolicy|WIFI_ONLY|
|appAutoUpdatePolicy|ALWAYS|
|autoDateAndTimeZone|AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED|
|autoDateAndTimeZone|AUTO_DATE_AND_TIME_ZONE_USER_CHOICE|
|autoDateAndTimeZone|AUTO_DATE_AND_TIME_ZONE_ENFORCED|
|cameraAccess|CAMERA_ACCESS_UNSPECIFIED|
|cameraAccess|CAMERA_ACCESS_USER_CHOICE|
|cameraAccess|CAMERA_ACCESS_DISABLED|
|cameraAccess|CAMERA_ACCESS_ENFORCED|
|defaultPermissionPolicy|PERMISSION_POLICY_UNSPECIFIED|
|defaultPermissionPolicy|PROMPT|
|defaultPermissionPolicy|GRANT|
|defaultPermissionPolicy|DENY|
|encryptionPolicy|ENCRYPTION_POLICY_UNSPECIFIED|
|encryptionPolicy|ENABLED_WITHOUT_PASSWORD|
|encryptionPolicy|ENABLED_WITH_PASSWORD|
|keyguardDisabledFeatures|KEYGUARD_DISABLED_FEATURE_UNSPECIFIED|
|keyguardDisabledFeatures|CAMERA|
|keyguardDisabledFeatures|NOTIFICATIONS|
|keyguardDisabledFeatures|UNREDACTED_NOTIFICATIONS|
|keyguardDisabledFeatures|TRUST_AGENTS|
|keyguardDisabledFeatures|DISABLE_FINGERPRINT|
|keyguardDisabledFeatures|DISABLE_REMOTE_INPUT|
|keyguardDisabledFeatures|FACE|
|keyguardDisabledFeatures|IRIS|
|keyguardDisabledFeatures|BIOMETRICS|
|keyguardDisabledFeatures|ALL_FEATURES|
|locationMode|LOCATION_MODE_UNSPECIFIED|
|locationMode|HIGH_ACCURACY|
|locationMode|SENSORS_ONLY|
|locationMode|BATTERY_SAVING|
|locationMode|OFF|
|locationMode|LOCATION_USER_CHOICE|
|locationMode|LOCATION_ENFORCED|
|locationMode|LOCATION_DISABLED|
|microphoneAccess|MICROPHONE_ACCESS_UNSPECIFIED|
|microphoneAccess|MICROPHONE_ACCESS_USER_CHOICE|
|microphoneAccess|MICROPHONE_ACCESS_DISABLED|
|microphoneAccess|MICROPHONE_ACCESS_ENFORCED|
|playStoreMode|PLAY_STORE_MODE_UNSPECIFIED|
|playStoreMode|WHITELIST|
|playStoreMode|BLACKLIST|
|preferentialNetworkService|PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED|
|preferentialNetworkService|PREFERENTIAL_NETWORK_SERVICE_DISABLED|
|preferentialNetworkService|PREFERENTIAL_NETWORK_SERVICE_ENABLED|
|stayOnPluggedModes|BATTERY_PLUGGED_MODE_UNSPECIFIED|
|stayOnPluggedModes|AC|
|stayOnPluggedModes|USB|
|stayOnPluggedModes|WIRELESS|

<h2 id="tocS_PolicyEnforcementRule">PolicyEnforcementRule</h2>
<!-- backwards compatibility -->
<a id="schemapolicyenforcementrule"></a>
<a id="schema_PolicyEnforcementRule"></a>
<a id="tocSpolicyenforcementrule"></a>
<a id="tocspolicyenforcementrule"></a>

```json
{
  "blockAction": {
    "blockAfterDays": 0,
    "blockScope": "BLOCK_SCOPE_UNSPECIFIED"
  },
  "settingName": "string",
  "wipeAction": {
    "preserveFrp": true,
    "wipeAfterDays": 0
  }
}
```

A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockAction|[BlockAction](#schemablockaction)|false|none|An action to block access to apps and data on a company owned device or in a work profile. This action also triggers a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.|
|settingName|string|false|none|The top-level policy to enforce. For example, applications or passwordPolicies.|
|wipeAction|[WipeAction](#schemawipeaction)|false|none|An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.|

<h2 id="tocS_PostureDetail">PostureDetail</h2>
<!-- backwards compatibility -->
<a id="schemaposturedetail"></a>
<a id="schema_PostureDetail"></a>
<a id="tocSposturedetail"></a>
<a id="tocsposturedetail"></a>

```json
{
  "advice": [
    {
      "defaultMessage": "string",
      "localizedMessages": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "securityRisk": "SECURITY_RISK_UNSPECIFIED"
}
```

Additional details regarding the security posture of the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advice|[[UserFacingMessage](#schemauserfacingmessage)]|false|none|Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device.|
|securityRisk|string|false|none|A specific security risk that negatively affects the security posture of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|securityRisk|SECURITY_RISK_UNSPECIFIED|
|securityRisk|UNKNOWN_OS|
|securityRisk|COMPROMISED_OS|
|securityRisk|HARDWARE_BACKED_EVALUATION_FAILED|

<h2 id="tocS_PowerManagementEvent">PowerManagementEvent</h2>
<!-- backwards compatibility -->
<a id="schemapowermanagementevent"></a>
<a id="schema_PowerManagementEvent"></a>
<a id="tocSpowermanagementevent"></a>
<a id="tocspowermanagementevent"></a>

```json
{
  "batteryLevel": 0,
  "createTime": "string",
  "eventType": "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
}
```

A power management event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batteryLevel|number(float)|false|none|For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.|
|createTime|string(google-datetime)|false|none|The creation time of the event.|
|eventType|string|false|none|Event type.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED|
|eventType|BATTERY_LEVEL_COLLECTED|
|eventType|POWER_CONNECTED|
|eventType|POWER_DISCONNECTED|
|eventType|BATTERY_LOW|
|eventType|BATTERY_OKAY|
|eventType|BOOT_COMPLETED|
|eventType|SHUTDOWN|

<h2 id="tocS_ProxyInfo">ProxyInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproxyinfo"></a>
<a id="schema_ProxyInfo"></a>
<a id="tocSproxyinfo"></a>
<a id="tocsproxyinfo"></a>

```json
{
  "excludedHosts": [
    "string"
  ],
  "host": "string",
  "pacUri": "string",
  "port": 0
}
```

Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedHosts|[string]|false|none|For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.|
|host|string|false|none|The host of the direct proxy.|
|pacUri|string|false|none|The URI of the PAC script used to configure the proxy.|
|port|integer(int32)|false|none|The port of the direct proxy.|

<h2 id="tocS_RemoteLockEvent">RemoteLockEvent</h2>
<!-- backwards compatibility -->
<a id="schemaremotelockevent"></a>
<a id="schema_RemoteLockEvent"></a>
<a id="tocSremotelockevent"></a>
<a id="tocsremotelockevent"></a>

```json
{
  "adminPackageName": "string",
  "adminUserId": 0,
  "targetUserId": 0
}
```

The device or profile has been remotely locked via the LOCK command.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminPackageName|string|false|none|Package name of the admin app requesting the change.|
|adminUserId|integer(int32)|false|none|User ID of the admin app from the which the change was requested.|
|targetUserId|integer(int32)|false|none|User ID in which the change was requested in.|

<h2 id="tocS_SecurityPosture">SecurityPosture</h2>
<!-- backwards compatibility -->
<a id="schemasecurityposture"></a>
<a id="schema_SecurityPosture"></a>
<a id="tocSsecurityposture"></a>
<a id="tocssecurityposture"></a>

```json
{
  "devicePosture": "POSTURE_UNSPECIFIED",
  "postureDetails": [
    {
      "advice": [
        {
          "defaultMessage": "string",
          "localizedMessages": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "securityRisk": "SECURITY_RISK_UNSPECIFIED"
    }
  ]
}
```

The security posture of the device, as determined by the current device state and the policies applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePosture|string|false|none|Device's security posture value.|
|postureDetails|[[PostureDetail](#schemaposturedetail)]|false|none|Additional details regarding the security posture of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|devicePosture|POSTURE_UNSPECIFIED|
|devicePosture|SECURE|
|devicePosture|AT_RISK|
|devicePosture|POTENTIALLY_COMPROMISED|

<h2 id="tocS_SetupAction">SetupAction</h2>
<!-- backwards compatibility -->
<a id="schemasetupaction"></a>
<a id="schema_SetupAction"></a>
<a id="tocSsetupaction"></a>
<a id="tocssetupaction"></a>

```json
{
  "description": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "launchApp": {
    "packageName": "string"
  },
  "title": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

An action executed during setup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[UserFacingMessage](#schemauserfacingmessage)|false|none|Description of this action.|
|launchApp|[LaunchAppAction](#schemalaunchappaction)|false|none|An action to launch an app. The app will be launched with an intent containing an extra with key com.google.android.apps.work.clouddpc.EXTRA_LAUNCHED_AS_SETUP_ACTION set to the boolean value true to indicate that this is a setup action flow. If SetupAction references an app, the corresponding installType in the application policy must be set as REQUIRED_FOR_SETUP or said setup will fail.|
|title|[UserFacingMessage](#schemauserfacingmessage)|false|none|Title of this action.|

<h2 id="tocS_SigninDetail">SigninDetail</h2>
<!-- backwards compatibility -->
<a id="schemasignindetail"></a>
<a id="schema_SigninDetail"></a>
<a id="tocSsignindetail"></a>
<a id="tocssignindetail"></a>

```json
{
  "allowPersonalUsage": "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
  "qrCode": "string",
  "signinEnrollmentToken": "string",
  "signinUrl": "string"
}
```

A resource containing sign in details for an enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPersonalUsage|string|false|none|Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.|
|qrCode|string|false|none|A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server.|
|signinEnrollmentToken|string|false|none|An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server.|
|signinUrl|string|false|none|Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login.|

#### Enumerated Values

|Property|Value|
|---|---|
|allowPersonalUsage|ALLOW_PERSONAL_USAGE_UNSPECIFIED|
|allowPersonalUsage|PERSONAL_USAGE_ALLOWED|
|allowPersonalUsage|PERSONAL_USAGE_DISALLOWED|

<h2 id="tocS_SignupUrl">SignupUrl</h2>
<!-- backwards compatibility -->
<a id="schemasignupurl"></a>
<a id="schema_SignupUrl"></a>
<a id="tocSsignupurl"></a>
<a id="tocssignupurl"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

An enterprise signup URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.|
|url|string|false|none|A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.|

<h2 id="tocS_SoftwareInfo">SoftwareInfo</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareinfo"></a>
<a id="schema_SoftwareInfo"></a>
<a id="tocSsoftwareinfo"></a>
<a id="tocssoftwareinfo"></a>

```json
{
  "androidBuildNumber": "string",
  "androidBuildTime": "string",
  "androidDevicePolicyVersionCode": 0,
  "androidDevicePolicyVersionName": "string",
  "androidVersion": "string",
  "bootloaderVersion": "string",
  "deviceBuildSignature": "string",
  "deviceKernelVersion": "string",
  "primaryLanguageCode": "string",
  "securityPatchLevel": "string",
  "systemUpdateInfo": {
    "updateReceivedTime": "string",
    "updateStatus": "UPDATE_STATUS_UNKNOWN"
  }
}
```

Information about device software.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidBuildNumber|string|false|none|Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.|
|androidBuildTime|string(google-datetime)|false|none|Build time.|
|androidDevicePolicyVersionCode|integer(int32)|false|none|The Android Device Policy app version code.|
|androidDevicePolicyVersionName|string|false|none|The Android Device Policy app version as displayed to the user.|
|androidVersion|string|false|none|The user-visible Android version string. For example, 6.0.1.|
|bootloaderVersion|string|false|none|The system bootloader version number, e.g. 0.6.7.|
|deviceBuildSignature|string|false|none|SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.|
|deviceKernelVersion|string|false|none|Kernel version, for example, 2.6.32.9-g103d848.|
|primaryLanguageCode|string|false|none|An IETF BCP 47 language code for the primary locale on the device.|
|securityPatchLevel|string|false|none|Security patch level, e.g. 2016-05-01.|
|systemUpdateInfo|[SystemUpdateInfo](#schemasystemupdateinfo)|false|none|Information about a potential pending system update.|

<h2 id="tocS_SpecificNonComplianceContext">SpecificNonComplianceContext</h2>
<!-- backwards compatibility -->
<a id="schemaspecificnoncompliancecontext"></a>
<a id="schema_SpecificNonComplianceContext"></a>
<a id="tocSspecificnoncompliancecontext"></a>
<a id="tocsspecificnoncompliancecontext"></a>

```json
{
  "oncWifiContext": {
    "wifiGuid": "string"
  },
  "passwordPoliciesContext": {
    "passwordPolicyScope": "SCOPE_UNSPECIFIED"
  }
}
```

Additional context for SpecificNonComplianceReason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oncWifiContext|[OncWifiContext](#schemaoncwificontext)|false|none|Additional context for non-compliance related to Wi-Fi configuration. See ONC_WIFI_INVALID_VALUE and ONC_WIFI_API_LEVEL|
|passwordPoliciesContext|[PasswordPoliciesContext](#schemapasswordpoliciescontext)|false|none|Additional context for non-compliance related to password policies. See PASSWORD_POLICIES_PASSWORD_EXPIRED and PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT.|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_StatusReportingSettings">StatusReportingSettings</h2>
<!-- backwards compatibility -->
<a id="schemastatusreportingsettings"></a>
<a id="schema_StatusReportingSettings"></a>
<a id="tocSstatusreportingsettings"></a>
<a id="tocsstatusreportingsettings"></a>

```json
{
  "applicationReportingSettings": {
    "includeRemovedApps": true
  },
  "applicationReportsEnabled": true,
  "commonCriteriaModeEnabled": true,
  "deviceSettingsEnabled": true,
  "displayInfoEnabled": true,
  "hardwareStatusEnabled": true,
  "memoryInfoEnabled": true,
  "networkInfoEnabled": true,
  "powerManagementEventsEnabled": true,
  "softwareInfoEnabled": true,
  "systemPropertiesEnabled": true
}
```

Settings controlling the behavior of status reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationReportingSettings|[ApplicationReportingSettings](#schemaapplicationreportingsettings)|false|none|Application reporting settings. Only applicable if application_reports_enabled is true.|
|applicationReportsEnabled|boolean|false|none|Whether app reports are enabled.|
|commonCriteriaModeEnabled|boolean|false|none|Whether Common Criteria Mode reporting is enabled.|
|deviceSettingsEnabled|boolean|false|none|Whether device settings reporting is enabled.|
|displayInfoEnabled|boolean|false|none|Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles.|
|hardwareStatusEnabled|boolean|false|none|Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles.|
|memoryInfoEnabled|boolean|false|none|Whether memory event reporting is enabled.|
|networkInfoEnabled|boolean|false|none|Whether network info reporting is enabled.|
|powerManagementEventsEnabled|boolean|false|none|Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles.|
|softwareInfoEnabled|boolean|false|none|Whether software info reporting is enabled.|
|systemPropertiesEnabled|boolean|false|none|Whether system properties reporting is enabled.|

<h2 id="tocS_SystemUpdate">SystemUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasystemupdate"></a>
<a id="schema_SystemUpdate"></a>
<a id="tocSsystemupdate"></a>
<a id="tocssystemupdate"></a>

```json
{
  "endMinutes": 0,
  "freezePeriods": [
    {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "startMinutes": 0,
  "type": "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
}
```

Configuration for managing system updates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endMinutes|integer(int32)|false|none|If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.|
|freezePeriods|[[FreezePeriod](#schemafreezeperiod)]|false|none|An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days.|
|startMinutes|integer(int32)|false|none|If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.|
|type|string|false|none|The type of system update to configure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SYSTEM_UPDATE_TYPE_UNSPECIFIED|
|type|AUTOMATIC|
|type|WINDOWED|
|type|POSTPONE|

<h2 id="tocS_SystemUpdateInfo">SystemUpdateInfo</h2>
<!-- backwards compatibility -->
<a id="schemasystemupdateinfo"></a>
<a id="schema_SystemUpdateInfo"></a>
<a id="tocSsystemupdateinfo"></a>
<a id="tocssystemupdateinfo"></a>

```json
{
  "updateReceivedTime": "string",
  "updateStatus": "UPDATE_STATUS_UNKNOWN"
}
```

Information about a potential pending system update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateReceivedTime|string(google-datetime)|false|none|The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE).|
|updateStatus|string|false|none|The status of an update: whether an update exists and what type it is.|

#### Enumerated Values

|Property|Value|
|---|---|
|updateStatus|UPDATE_STATUS_UNKNOWN|
|updateStatus|UP_TO_DATE|
|updateStatus|UNKNOWN_UPDATE_AVAILABLE|
|updateStatus|SECURITY_UPDATE_AVAILABLE|
|updateStatus|OS_UPDATE_AVAILABLE|

<h2 id="tocS_TelephonyInfo">TelephonyInfo</h2>
<!-- backwards compatibility -->
<a id="schematelephonyinfo"></a>
<a id="schema_TelephonyInfo"></a>
<a id="tocStelephonyinfo"></a>
<a id="tocstelephonyinfo"></a>

```json
{
  "carrierName": "string",
  "phoneNumber": "string"
}
```

Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrierName|string|false|none|The carrier name associated with this SIM card.|
|phoneNumber|string|false|none|The phone number associated with this SIM card.|

<h2 id="tocS_TermsAndConditions">TermsAndConditions</h2>
<!-- backwards compatibility -->
<a id="schematermsandconditions"></a>
<a id="schema_TermsAndConditions"></a>
<a id="tocStermsandconditions"></a>
<a id="tocstermsandconditions"></a>

```json
{
  "content": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  },
  "header": {
    "defaultMessage": "string",
    "localizedMessages": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

A terms and conditions page to be accepted during provisioning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[UserFacingMessage](#schemauserfacingmessage)|false|none|A well-formatted HTML string. It will be parsed on the client with android.text.Html#fromHtml.|
|header|[UserFacingMessage](#schemauserfacingmessage)|false|none|A short header which appears above the HTML content.|

<h2 id="tocS_UsageLog">UsageLog</h2>
<!-- backwards compatibility -->
<a id="schemausagelog"></a>
<a id="schema_UsageLog"></a>
<a id="tocSusagelog"></a>
<a id="tocsusagelog"></a>

```json
{
  "enabledLogTypes": [
    "LOG_TYPE_UNSPECIFIED"
  ],
  "uploadOnCellularAllowed": [
    "LOG_TYPE_UNSPECIFIED"
  ]
}
```

Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledLogTypes|[string]|false|none|Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled.|
|uploadOnCellularAllowed|[string]|false|none|Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi.|

#### Enumerated Values

|Property|Value|
|---|---|
|enabledLogTypes|LOG_TYPE_UNSPECIFIED|
|enabledLogTypes|SECURITY_LOGS|
|enabledLogTypes|NETWORK_ACTIVITY_LOGS|
|uploadOnCellularAllowed|LOG_TYPE_UNSPECIFIED|
|uploadOnCellularAllowed|SECURITY_LOGS|
|uploadOnCellularAllowed|NETWORK_ACTIVITY_LOGS|

<h2 id="tocS_UsageLogEvent">UsageLogEvent</h2>
<!-- backwards compatibility -->
<a id="schemausagelogevent"></a>
<a id="schema_UsageLogEvent"></a>
<a id="tocSusagelogevent"></a>
<a id="tocsusagelogevent"></a>

```json
{
  "adbShellCommandEvent": {
    "shellCmd": "string"
  },
  "adbShellInteractiveEvent": {},
  "appProcessStartEvent": {
    "processInfo": {
      "apkSha256Hash": "string",
      "packageNames": [
        "string"
      ],
      "pid": 0,
      "processName": "string",
      "seinfo": "string",
      "startTime": "string",
      "uid": 0
    }
  },
  "certAuthorityInstalledEvent": {
    "certificate": "string",
    "success": true,
    "userId": 0
  },
  "certAuthorityRemovedEvent": {
    "certificate": "string",
    "success": true,
    "userId": 0
  },
  "certValidationFailureEvent": {
    "failureReason": "string"
  },
  "connectEvent": {
    "destinationIpAddress": "string",
    "destinationPort": 0,
    "packageName": "string"
  },
  "cryptoSelfTestCompletedEvent": {
    "success": true
  },
  "dnsEvent": {
    "hostname": "string",
    "ipAddresses": [
      "string"
    ],
    "packageName": "string",
    "totalIpAddressesReturned": "string"
  },
  "eventId": "string",
  "eventTime": "string",
  "eventType": "EVENT_TYPE_UNSPECIFIED",
  "filePulledEvent": {
    "filePath": "string"
  },
  "filePushedEvent": {
    "filePath": "string"
  },
  "keyDestructionEvent": {
    "applicationUid": 0,
    "keyAlias": "string",
    "success": true
  },
  "keyGeneratedEvent": {
    "applicationUid": 0,
    "keyAlias": "string",
    "success": true
  },
  "keyImportEvent": {
    "applicationUid": 0,
    "keyAlias": "string",
    "success": true
  },
  "keyIntegrityViolationEvent": {
    "applicationUid": 0,
    "keyAlias": "string"
  },
  "keyguardDismissAuthAttemptEvent": {
    "strongAuthMethodUsed": true,
    "success": true
  },
  "keyguardDismissedEvent": {},
  "keyguardSecuredEvent": {},
  "logBufferSizeCriticalEvent": {},
  "loggingStartedEvent": {},
  "loggingStoppedEvent": {},
  "mediaMountEvent": {
    "mountPoint": "string",
    "volumeLabel": "string"
  },
  "mediaUnmountEvent": {
    "mountPoint": "string",
    "volumeLabel": "string"
  },
  "osShutdownEvent": {},
  "osStartupEvent": {
    "verifiedBootState": "VERIFIED_BOOT_STATE_UNSPECIFIED",
    "verityMode": "DM_VERITY_MODE_UNSPECIFIED"
  },
  "remoteLockEvent": {
    "adminPackageName": "string",
    "adminUserId": 0,
    "targetUserId": 0
  },
  "wipeFailureEvent": {}
}
```

An event logged on the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adbShellCommandEvent|[AdbShellCommandEvent](#schemaadbshellcommandevent)|false|none|A shell command was issued over ADB via “adb shell command”. Part of SECURITY_LOGS.|
|adbShellInteractiveEvent|[AdbShellInteractiveEvent](#schemaadbshellinteractiveevent)|false|none|An ADB interactive shell was opened via “adb shell”. Part of SECURITY_LOGS.|
|appProcessStartEvent|[AppProcessStartEvent](#schemaappprocessstartevent)|false|none|An app process was started. Part of SECURITY_LOGS.|
|certAuthorityInstalledEvent|[CertAuthorityInstalledEvent](#schemacertauthorityinstalledevent)|false|none|A new root certificate was installed into the system's trusted credential storage. Part of SECURITY_LOGS.|
|certAuthorityRemovedEvent|[CertAuthorityRemovedEvent](#schemacertauthorityremovedevent)|false|none|A root certificate was removed from the system's trusted credential storage. Part of SECURITY_LOGS.|
|certValidationFailureEvent|[CertValidationFailureEvent](#schemacertvalidationfailureevent)|false|none|An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. Part of SECURITY_LOGS.|
|connectEvent|[ConnectEvent](#schemaconnectevent)|false|none|A TCP connect event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.|
|cryptoSelfTestCompletedEvent|[CryptoSelfTestCompletedEvent](#schemacryptoselftestcompletedevent)|false|none|Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. Part of SECURITY_LOGS.|
|dnsEvent|[DnsEvent](#schemadnsevent)|false|none|A DNS lookup event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.|
|eventId|string(int64)|false|none|Unique id of the event.|
|eventTime|string(google-datetime)|false|none|Device timestamp when the event was logged.|
|eventType|string|false|none|The particular usage log event type that was reported on the device. Use this to determine which event field to access.|
|filePulledEvent|[FilePulledEvent](#schemafilepulledevent)|false|none|A file was downloaded from the device. Part of SECURITY_LOGS.|
|filePushedEvent|[FilePushedEvent](#schemafilepushedevent)|false|none|A file was uploaded onto the device. Part of SECURITY_LOGS.|
|keyDestructionEvent|[KeyDestructionEvent](#schemakeydestructionevent)|false|none|A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. Part of SECURITY_LOGS.|
|keyGeneratedEvent|[KeyGeneratedEvent](#schemakeygeneratedevent)|false|none|A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management. Part of SECURITY_LOGS.|
|keyImportEvent|[KeyImportEvent](#schemakeyimportevent)|false|none|A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. Part of SECURITY_LOGS.|
|keyIntegrityViolationEvent|[KeyIntegrityViolationEvent](#schemakeyintegrityviolationevent)|false|none|A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. Part of SECURITY_LOGS.|
|keyguardDismissAuthAttemptEvent|[KeyguardDismissAuthAttemptEvent](#schemakeyguarddismissauthattemptevent)|false|none|An attempt was made to unlock the device. Part of SECURITY_LOGS.|
|keyguardDismissedEvent|[KeyguardDismissedEvent](#schemakeyguarddismissedevent)|false|none|The keyguard was dismissed. Part of SECURITY_LOGS.|
|keyguardSecuredEvent|[KeyguardSecuredEvent](#schemakeyguardsecuredevent)|false|none|The device was locked either by user or timeout. Part of SECURITY_LOGS.|
|logBufferSizeCriticalEvent|[LogBufferSizeCriticalEvent](#schemalogbuffersizecriticalevent)|false|none|The audit log buffer has reached 90% of its capacity, therefore older events may be dropped. Part of SECURITY_LOGS.|
|loggingStartedEvent|[LoggingStartedEvent](#schemaloggingstartedevent)|false|none|usageLog policy has been enabled. Part of SECURITY_LOGS.|
|loggingStoppedEvent|[LoggingStoppedEvent](#schemaloggingstoppedevent)|false|none|usageLog policy has been disabled. Part of SECURITY_LOGS.|
|mediaMountEvent|[MediaMountEvent](#schemamediamountevent)|false|none|Removable media was mounted. Part of SECURITY_LOGS.|
|mediaUnmountEvent|[MediaUnmountEvent](#schemamediaunmountevent)|false|none|Removable media was unmounted. Part of SECURITY_LOGS.|
|osShutdownEvent|[OsShutdownEvent](#schemaosshutdownevent)|false|none|Device was shutdown. Part of SECURITY_LOGS.|
|osStartupEvent|[OsStartupEvent](#schemaosstartupevent)|false|none|Device was started. Part of SECURITY_LOGS.|
|remoteLockEvent|[RemoteLockEvent](#schemaremotelockevent)|false|none|The device or profile has been remotely locked via the LOCK command. Part of SECURITY_LOGS.|
|wipeFailureEvent|[WipeFailureEvent](#schemawipefailureevent)|false|none|The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Part of SECURITY_LOGS.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|EVENT_TYPE_UNSPECIFIED|
|eventType|ADB_SHELL_COMMAND|
|eventType|ADB_SHELL_INTERACTIVE|
|eventType|APP_PROCESS_START|
|eventType|KEYGUARD_DISMISSED|
|eventType|KEYGUARD_DISMISS_AUTH_ATTEMPT|
|eventType|KEYGUARD_SECURED|
|eventType|FILE_PULLED|
|eventType|FILE_PUSHED|
|eventType|CERT_AUTHORITY_INSTALLED|
|eventType|CERT_AUTHORITY_REMOVED|
|eventType|CERT_VALIDATION_FAILURE|
|eventType|CRYPTO_SELF_TEST_COMPLETED|
|eventType|KEY_DESTRUCTION|
|eventType|KEY_GENERATED|
|eventType|KEY_IMPORT|
|eventType|KEY_INTEGRITY_VIOLATION|
|eventType|LOGGING_STARTED|
|eventType|LOGGING_STOPPED|
|eventType|LOG_BUFFER_SIZE_CRITICAL|
|eventType|MEDIA_MOUNT|
|eventType|MEDIA_UNMOUNT|
|eventType|OS_SHUTDOWN|
|eventType|OS_STARTUP|
|eventType|REMOTE_LOCK|
|eventType|WIPE_FAILURE|
|eventType|CONNECT|
|eventType|DNS|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "accountIdentifier": "string"
}
```

A user belonging to an enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentifier|string|false|none|A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail.|

<h2 id="tocS_UserFacingMessage">UserFacingMessage</h2>
<!-- backwards compatibility -->
<a id="schemauserfacingmessage"></a>
<a id="schema_UserFacingMessage"></a>
<a id="tocSuserfacingmessage"></a>
<a id="tocsuserfacingmessage"></a>

```json
{
  "defaultMessage": "string",
  "localizedMessages": {
    "property1": "string",
    "property2": "string"
  }
}
```

Provides a user-facing message with locale info. The maximum message length is 4096 characters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultMessage|string|false|none|The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.|
|localizedMessages|object|false|none|A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.|

<h2 id="tocS_WebApp">WebApp</h2>
<!-- backwards compatibility -->
<a id="schemawebapp"></a>
<a id="schema_WebApp"></a>
<a id="tocSwebapp"></a>
<a id="tocswebapp"></a>

```json
{
  "displayMode": "DISPLAY_MODE_UNSPECIFIED",
  "icons": [
    {
      "imageData": "string"
    }
  ],
  "name": "string",
  "startUrl": "string",
  "title": "string",
  "versionCode": "string"
}
```

A web app.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayMode|string|false|none|The display mode of the web app.|
|icons|[[WebAppIcon](#schemawebappicon)]|false|none|A list of icons for the web app. Must have at least one element.|
|name|string|false|none|The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}.|
|startUrl|string|false|none|The start URL, i.e. the URL that should load when the user opens the application.|
|title|string|false|none|The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).|
|versionCode|string(int64)|false|none|The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.|

#### Enumerated Values

|Property|Value|
|---|---|
|displayMode|DISPLAY_MODE_UNSPECIFIED|
|displayMode|MINIMAL_UI|
|displayMode|STANDALONE|
|displayMode|FULL_SCREEN|

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

An icon for a web app. Supported formats are: png, jpg and webp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageData|string|false|none|The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. |

<h2 id="tocS_WebToken">WebToken</h2>
<!-- backwards compatibility -->
<a id="schemawebtoken"></a>
<a id="schema_WebToken"></a>
<a id="tocSwebtoken"></a>
<a id="tocswebtoken"></a>

```json
{
  "enabledFeatures": [
    "FEATURE_UNSPECIFIED"
  ],
  "name": "string",
  "parentFrameUrl": "string",
  "permissions": [
    "WEB_TOKEN_PERMISSION_UNSPECIFIED"
  ],
  "value": "string"
}
```

A web token used to access the managed Google Play iframe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabledFeatures|[string]|false|none|The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored |
|name|string|false|none|The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.|
|parentFrameUrl|string|false|none|The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.|
|permissions|[string]|false|none|Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated.|
|value|string|false|none|The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|enabledFeatures|FEATURE_UNSPECIFIED|
|enabledFeatures|PLAY_SEARCH|
|enabledFeatures|PRIVATE_APPS|
|enabledFeatures|WEB_APPS|
|enabledFeatures|STORE_BUILDER|
|enabledFeatures|MANAGED_CONFIGURATIONS|
|enabledFeatures|ZERO_TOUCH_CUSTOMER_MANAGEMENT|
|permissions|WEB_TOKEN_PERMISSION_UNSPECIFIED|
|permissions|APPROVE_APPS|

<h2 id="tocS_WipeAction">WipeAction</h2>
<!-- backwards compatibility -->
<a id="schemawipeaction"></a>
<a id="schema_WipeAction"></a>
<a id="tocSwipeaction"></a>
<a id="tocswipeaction"></a>

```json
{
  "preserveFrp": true,
  "wipeAfterDays": 0
}
```

An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preserveFrp|boolean|false|none|Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles.|
|wipeAfterDays|integer(int32)|false|none|Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.|

<h2 id="tocS_WipeFailureEvent">WipeFailureEvent</h2>
<!-- backwards compatibility -->
<a id="schemawipefailureevent"></a>
<a id="schema_WipeFailureEvent"></a>
<a id="tocSwipefailureevent"></a>
<a id="tocswipefailureevent"></a>

```json
{}
```

The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty.
