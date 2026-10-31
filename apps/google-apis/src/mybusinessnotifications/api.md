<h1 id="my-business-notifications-api">My Business Notifications API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Notification Settings API enables managing notification settings for business accounts. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessnotifications.googleapis.com/">https://mybusinessnotifications.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-notifications-api-accounts">accounts</h1>

## mybusinessnotifications.accounts.getNotificationSetting

<a id="opIdmybusinessnotifications.accounts.getNotificationSetting"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Returns the pubsub notification settings for the account.

<h3 id="mybusinessnotificationsaccountsgetnotificationsetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the notification setting we are trying to fetch.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "pubsubTopic": "string"
}
```

<h3 id="mybusinessnotificationsaccountsgetnotificationsetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[NotificationSetting](#schemanotificationsetting)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessnotifications.accounts.updateNotificationSetting

<a id="opIdmybusinessnotifications.accounts.updateNotificationSetting"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "notificationTypes": [
      "NOTIFICATION_TYPE_UNSPECIFIED"
    ],
    "pubsubTopic": "string"
  }'
```

`PATCH /v1/{name}`

Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types

> Body parameter

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "pubsubTopic": "string"
}
```

<h3 id="mybusinessnotificationsaccountsupdatenotificationsetting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`.|
|updateMask|query|string|false|Required. The specific fields that should be updated. The only editable field is notification_setting.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[NotificationSetting](#schemanotificationsetting)|false|none|
|» name|body|string|false|Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`.|
|» notificationTypes|body|[string]|false|The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string.|
|» pubsubTopic|body|string|false|Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» notificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|» notificationTypes|GOOGLE_UPDATE|
|» notificationTypes|NEW_REVIEW|
|» notificationTypes|UPDATED_REVIEW|
|» notificationTypes|NEW_CUSTOMER_MEDIA|
|» notificationTypes|NEW_QUESTION|
|» notificationTypes|UPDATED_QUESTION|
|» notificationTypes|NEW_ANSWER|
|» notificationTypes|UPDATED_ANSWER|
|» notificationTypes|DUPLICATE_LOCATION|
|» notificationTypes|LOSS_OF_VOICE_OF_MERCHANT|
|» notificationTypes|VOICE_OF_MERCHANT_UPDATED|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "pubsubTopic": "string"
}
```

<h3 id="mybusinessnotificationsaccountsupdatenotificationsetting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[NotificationSetting](#schemanotificationsetting)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_NotificationSetting">NotificationSetting</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsetting"></a>
<a id="schema_NotificationSetting"></a>
<a id="tocSnotificationsetting"></a>
<a id="tocsnotificationsetting"></a>

```json
{
  "name": "string",
  "notificationTypes": [
    "NOTIFICATION_TYPE_UNSPECIFIED"
  ],
  "pubsubTopic": "string"
}
```

A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`.|
|notificationTypes|[string]|false|none|The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string.|
|pubsubTopic|string|false|none|Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationTypes|NOTIFICATION_TYPE_UNSPECIFIED|
|notificationTypes|GOOGLE_UPDATE|
|notificationTypes|NEW_REVIEW|
|notificationTypes|UPDATED_REVIEW|
|notificationTypes|NEW_CUSTOMER_MEDIA|
|notificationTypes|NEW_QUESTION|
|notificationTypes|UPDATED_QUESTION|
|notificationTypes|NEW_ANSWER|
|notificationTypes|UPDATED_ANSWER|
|notificationTypes|DUPLICATE_LOCATION|
|notificationTypes|LOSS_OF_VOICE_OF_MERCHANT|
|notificationTypes|VOICE_OF_MERCHANT_UPDATED|
