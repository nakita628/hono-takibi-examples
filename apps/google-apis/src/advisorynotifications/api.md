<h1 id="advisory-notifications-api">Advisory Notifications API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for accessing Advisory Notifications in Google Cloud

Base URLs:

* <a href="https://advisorynotifications.googleapis.com/">https://advisorynotifications.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/advisory-notifications">External documentation</a>

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

<h1 id="advisory-notifications-api-organizations">organizations</h1>

## advisorynotifications.organizations.locations.notifications.get

<a id="opIdadvisorynotifications.organizations.locations.notifications.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a notification.

<h3 id="advisorynotificationsorganizationslocationsnotificationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification}.|
|languageCode|query|string|false|ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "messages": [
    {
      "attachments": [
        {
          "csv": {
            "dataRows": [
              {
                "entries": [
                  "string"
                ]
              }
            ],
            "headers": [
              "string"
            ]
          },
          "displayName": "string"
        }
      ],
      "body": {
        "text": {
          "enText": "string",
          "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
          "localizedText": "string"
        }
      },
      "createTime": "string",
      "localizationTime": "string"
    }
  ],
  "name": "string",
  "notificationType": "NOTIFICATION_TYPE_UNSPECIFIED",
  "subject": {
    "text": {
      "enText": "string",
      "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
      "localizedText": "string"
    }
  }
}
```

<h3 id="advisorynotificationsorganizationslocationsnotificationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAdvisorynotificationsV1Notification](#schemagooglecloudadvisorynotificationsv1notification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## advisorynotifications.organizations.locations.notifications.list

<a id="opIdadvisorynotifications.organizations.locations.notifications.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/notifications`

Lists notifications under a given parent.

<h3 id="advisorynotificationsorganizationslocationsnotificationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}".|
|languageCode|query|string|false|ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.|
|pageSize|query|integer|false|The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.|
|pageToken|query|string|false|A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.|
|view|query|string|false|Specifies which parts of the notification resource should be returned in the response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
|view|NOTIFICATION_VIEW_UNSPECIFIED|
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
  "nextPageToken": "string",
  "notifications": [
    {
      "createTime": "string",
      "messages": [
        {
          "attachments": [
            {
              "csv": {
                "dataRows": [
                  {
                    "entries": [
                      "string"
                    ]
                  }
                ],
                "headers": [
                  "string"
                ]
              },
              "displayName": "string"
            }
          ],
          "body": {
            "text": {
              "enText": "string",
              "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
              "localizedText": "string"
            }
          },
          "createTime": "string",
          "localizationTime": "string"
        }
      ],
      "name": "string",
      "notificationType": "NOTIFICATION_TYPE_UNSPECIFIED",
      "subject": {
        "text": {
          "enText": "string",
          "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
          "localizedText": "string"
        }
      }
    }
  ],
  "totalSize": 0
}
```

<h3 id="advisorynotificationsorganizationslocationsnotificationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAdvisorynotificationsV1ListNotificationsResponse](#schemagooglecloudadvisorynotificationsv1listnotificationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Attachment">GoogleCloudAdvisorynotificationsV1Attachment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1attachment"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Attachment"></a>
<a id="tocSgooglecloudadvisorynotificationsv1attachment"></a>
<a id="tocsgooglecloudadvisorynotificationsv1attachment"></a>

```json
{
  "csv": {
    "dataRows": [
      {
        "entries": [
          "string"
        ]
      }
    ],
    "headers": [
      "string"
    ]
  },
  "displayName": "string"
}
```

Attachment with specific information about the issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv|[GoogleCloudAdvisorynotificationsV1Csv](#schemagooglecloudadvisorynotificationsv1csv)|false|none|A CSV file attachment. Max size is 10 MB.|
|displayName|string|false|none|The title of the attachment.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Csv">GoogleCloudAdvisorynotificationsV1Csv</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1csv"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Csv"></a>
<a id="tocSgooglecloudadvisorynotificationsv1csv"></a>
<a id="tocsgooglecloudadvisorynotificationsv1csv"></a>

```json
{
  "dataRows": [
    {
      "entries": [
        "string"
      ]
    }
  ],
  "headers": [
    "string"
  ]
}
```

A representation of a CSV file attachment, as a list of column headers and a list of data rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRows|[[GoogleCloudAdvisorynotificationsV1CsvCsvRow](#schemagooglecloudadvisorynotificationsv1csvcsvrow)]|false|none|The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.|
|headers|[string]|false|none|The list of headers for data columns in a CSV file.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1CsvCsvRow">GoogleCloudAdvisorynotificationsV1CsvCsvRow</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1csvcsvrow"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1CsvCsvRow"></a>
<a id="tocSgooglecloudadvisorynotificationsv1csvcsvrow"></a>
<a id="tocsgooglecloudadvisorynotificationsv1csvcsvrow"></a>

```json
{
  "entries": [
    "string"
  ]
}
```

A representation of a single data row in a CSV file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[string]|false|none|The data entries in a CSV file row, as a string array rather than a single comma-separated string.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1ListNotificationsResponse">GoogleCloudAdvisorynotificationsV1ListNotificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1listnotificationsresponse"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1ListNotificationsResponse"></a>
<a id="tocSgooglecloudadvisorynotificationsv1listnotificationsresponse"></a>
<a id="tocsgooglecloudadvisorynotificationsv1listnotificationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "notifications": [
    {
      "createTime": "string",
      "messages": [
        {
          "attachments": [
            {
              "csv": {
                "dataRows": [
                  {
                    "entries": [
                      "string"
                    ]
                  }
                ],
                "headers": [
                  "string"
                ]
              },
              "displayName": "string"
            }
          ],
          "body": {
            "text": {
              "enText": "string",
              "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
              "localizedText": "string"
            }
          },
          "createTime": "string",
          "localizationTime": "string"
        }
      ],
      "name": "string",
      "notificationType": "NOTIFICATION_TYPE_UNSPECIFIED",
      "subject": {
        "text": {
          "enText": "string",
          "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
          "localizedText": "string"
        }
      }
    }
  ],
  "totalSize": 0
}
```

Response of ListNotifications endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|notifications|[[GoogleCloudAdvisorynotificationsV1Notification](#schemagooglecloudadvisorynotificationsv1notification)]|false|none|List of notifications under a given parent.|
|totalSize|integer(int32)|false|none|Estimation of a total number of notifications.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Message">GoogleCloudAdvisorynotificationsV1Message</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1message"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Message"></a>
<a id="tocSgooglecloudadvisorynotificationsv1message"></a>
<a id="tocsgooglecloudadvisorynotificationsv1message"></a>

```json
{
  "attachments": [
    {
      "csv": {
        "dataRows": [
          {
            "entries": [
              "string"
            ]
          }
        ],
        "headers": [
          "string"
        ]
      },
      "displayName": "string"
    }
  ],
  "body": {
    "text": {
      "enText": "string",
      "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
      "localizedText": "string"
    }
  },
  "createTime": "string",
  "localizationTime": "string"
}
```

A message which contains notification details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[GoogleCloudAdvisorynotificationsV1Attachment](#schemagooglecloudadvisorynotificationsv1attachment)]|false|none|The attachments to download.|
|body|[GoogleCloudAdvisorynotificationsV1MessageBody](#schemagooglecloudadvisorynotificationsv1messagebody)|false|none|The message content.|
|createTime|string(google-datetime)|false|none|The Message creation timestamp.|
|localizationTime|string(google-datetime)|false|none|Time when Message was localized|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1MessageBody">GoogleCloudAdvisorynotificationsV1MessageBody</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1messagebody"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1MessageBody"></a>
<a id="tocSgooglecloudadvisorynotificationsv1messagebody"></a>
<a id="tocsgooglecloudadvisorynotificationsv1messagebody"></a>

```json
{
  "text": {
    "enText": "string",
    "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
    "localizedText": "string"
  }
}
```

A message body containing text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|[GoogleCloudAdvisorynotificationsV1Text](#schemagooglecloudadvisorynotificationsv1text)|false|none|The text content of the message body.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Notification">GoogleCloudAdvisorynotificationsV1Notification</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1notification"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Notification"></a>
<a id="tocSgooglecloudadvisorynotificationsv1notification"></a>
<a id="tocsgooglecloudadvisorynotificationsv1notification"></a>

```json
{
  "createTime": "string",
  "messages": [
    {
      "attachments": [
        {
          "csv": {
            "dataRows": [
              {
                "entries": [
                  "string"
                ]
              }
            ],
            "headers": [
              "string"
            ]
          },
          "displayName": "string"
        }
      ],
      "body": {
        "text": {
          "enText": "string",
          "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
          "localizedText": "string"
        }
      },
      "createTime": "string",
      "localizationTime": "string"
    }
  ],
  "name": "string",
  "notificationType": "NOTIFICATION_TYPE_UNSPECIFIED",
  "subject": {
    "text": {
      "enText": "string",
      "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
      "localizedText": "string"
    }
  }
}
```

A notification object for notifying customers about security and privacy issues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time the notification was created.|
|messages|[[GoogleCloudAdvisorynotificationsV1Message](#schemagooglecloudadvisorynotificationsv1message)]|false|none|A list of messages in the notification.|
|name|string|false|none|The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification}.|
|notificationType|string|false|none|Type of notification|
|subject|[GoogleCloudAdvisorynotificationsV1Subject](#schemagooglecloudadvisorynotificationsv1subject)|false|none|The subject line of the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationType|NOTIFICATION_TYPE_UNSPECIFIED|
|notificationType|NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY|
|notificationType|NOTIFICATION_TYPE_SENSITIVE_ACTIONS|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Subject">GoogleCloudAdvisorynotificationsV1Subject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1subject"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Subject"></a>
<a id="tocSgooglecloudadvisorynotificationsv1subject"></a>
<a id="tocsgooglecloudadvisorynotificationsv1subject"></a>

```json
{
  "text": {
    "enText": "string",
    "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
    "localizedText": "string"
  }
}
```

A subject line of a notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|[GoogleCloudAdvisorynotificationsV1Text](#schemagooglecloudadvisorynotificationsv1text)|false|none|The text content.|

<h2 id="tocS_GoogleCloudAdvisorynotificationsV1Text">GoogleCloudAdvisorynotificationsV1Text</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudadvisorynotificationsv1text"></a>
<a id="schema_GoogleCloudAdvisorynotificationsV1Text"></a>
<a id="tocSgooglecloudadvisorynotificationsv1text"></a>
<a id="tocsgooglecloudadvisorynotificationsv1text"></a>

```json
{
  "enText": "string",
  "localizationState": "LOCALIZATION_STATE_UNSPECIFIED",
  "localizedText": "string"
}
```

A text object containing the English text and its localized copies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enText|string|false|none|The English copy.|
|localizationState|string|false|none|Status of the localization.|
|localizedText|string|false|none|The requested localized copy (if applicable).|

#### Enumerated Values

|Property|Value|
|---|---|
|localizationState|LOCALIZATION_STATE_UNSPECIFIED|
|localizationState|LOCALIZATION_STATE_NOT_APPLICABLE|
|localizationState|LOCALIZATION_STATE_PENDING|
|localizationState|LOCALIZATION_STATE_COMPLETED|
