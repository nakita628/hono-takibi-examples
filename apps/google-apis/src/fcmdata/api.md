<h1 id="firebase-cloud-messaging-data-api">Firebase Cloud Messaging Data API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Provides additional information about Firebase Cloud Messaging (FCM) message sends and deliveries.

Base URLs:

* <a href="https://fcmdata.googleapis.com/">https://fcmdata.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com/docs/cloud-messaging">External documentation</a>

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

<h1 id="firebase-cloud-messaging-data-api-projects">projects</h1>

## fcmdata.projects.androidApps.deliveryData.list

<a id="opIdfcmdata.projects.androidApps.deliveryData.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/deliveryData \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/deliveryData`

List aggregate delivery data for the given Android application.

<h3 id="fcmdataprojectsandroidappsdeliverydatalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The application for which to list delivery data. Format: `projects/{project_id}/androidApps/{app_id}`|
|pageSize|query|integer|false|The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time.|
|pageToken|query|string|false|A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token.|
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
  "androidDeliveryData": [
    {
      "analyticsLabel": "string",
      "appId": "string",
      "data": {
        "countMessagesAccepted": "string",
        "deliveryPerformancePercents": {
          "delayedDeviceDoze": 0,
          "delayedDeviceOffline": 0,
          "delayedMessageThrottled": 0,
          "delayedUserStopped": 0,
          "deliveredNoDelay": 0
        },
        "messageInsightPercents": {
          "priorityLowered": 0
        },
        "messageOutcomePercents": {
          "delivered": 0,
          "droppedAppForceStopped": 0,
          "droppedDeviceInactive": 0,
          "droppedTooManyPendingMessages": 0,
          "pending": 0
        }
      },
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="fcmdataprojectsandroidappsdeliverydatalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse](#schemagooglefirebasefcmdatav1beta1listandroiddeliverydataresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1AndroidDeliveryData">GoogleFirebaseFcmDataV1beta1AndroidDeliveryData</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1androiddeliverydata"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1AndroidDeliveryData"></a>
<a id="tocSgooglefirebasefcmdatav1beta1androiddeliverydata"></a>
<a id="tocsgooglefirebasefcmdatav1beta1androiddeliverydata"></a>

```json
{
  "analyticsLabel": "string",
  "appId": "string",
  "data": {
    "countMessagesAccepted": "string",
    "deliveryPerformancePercents": {
      "delayedDeviceDoze": 0,
      "delayedDeviceOffline": 0,
      "delayedMessageThrottled": 0,
      "delayedUserStopped": 0,
      "deliveredNoDelay": 0
    },
    "messageInsightPercents": {
      "priorityLowered": 0
    },
    "messageOutcomePercents": {
      "delivered": 0,
      "droppedAppForceStopped": 0,
      "droppedDeviceInactive": 0,
      "droppedTooManyPendingMessages": 0,
      "pending": 0
    }
  },
  "date": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Message delivery data for a given date, app, and analytics label combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsLabel|string|false|none|The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry.|
|appId|string|false|none|The app ID to which the messages were sent.|
|data|[GoogleFirebaseFcmDataV1beta1Data](#schemagooglefirebasefcmdatav1beta1data)|false|none|The data for the specified appId, date, and analyticsLabel.|
|date|[GoogleTypeDate](#schemagoogletypedate)|false|none|The date represented by this entry.|

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1Data">GoogleFirebaseFcmDataV1beta1Data</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1data"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1Data"></a>
<a id="tocSgooglefirebasefcmdatav1beta1data"></a>
<a id="tocsgooglefirebasefcmdatav1beta1data"></a>

```json
{
  "countMessagesAccepted": "string",
  "deliveryPerformancePercents": {
    "delayedDeviceDoze": 0,
    "delayedDeviceOffline": 0,
    "delayedMessageThrottled": 0,
    "delayedUserStopped": 0,
    "deliveredNoDelay": 0
  },
  "messageInsightPercents": {
    "priorityLowered": 0
  },
  "messageOutcomePercents": {
    "delivered": 0,
    "droppedAppForceStopped": 0,
    "droppedDeviceInactive": 0,
    "droppedTooManyPendingMessages": 0,
    "pending": 0
  }
}
```

Data detailing messaging delivery

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countMessagesAccepted|string(int64)|false|none|Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information.|
|deliveryPerformancePercents|[GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents](#schemagooglefirebasefcmdatav1beta1deliveryperformancepercents)|false|none|Additional information about delivery performance for messages that were successfully delivered.|
|messageInsightPercents|[GoogleFirebaseFcmDataV1beta1MessageInsightPercents](#schemagooglefirebasefcmdatav1beta1messageinsightpercents)|false|none|Additional general insights about message delivery.|
|messageOutcomePercents|[GoogleFirebaseFcmDataV1beta1MessageOutcomePercents](#schemagooglefirebasefcmdatav1beta1messageoutcomepercents)|false|none|Mutually exclusive breakdown of message delivery outcomes.|

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents">GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1deliveryperformancepercents"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents"></a>
<a id="tocSgooglefirebasefcmdatav1beta1deliveryperformancepercents"></a>
<a id="tocsgooglefirebasefcmdatav1beta1deliveryperformancepercents"></a>

```json
{
  "delayedDeviceDoze": 0,
  "delayedDeviceOffline": 0,
  "delayedMessageThrottled": 0,
  "delayedUserStopped": 0,
  "deliveredNoDelay": 0
}
```

Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delayedDeviceDoze|number(float)|false|none|The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode.|
|delayedDeviceOffline|number(float)|false|none|The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected.|
|delayedMessageThrottled|number(float)|false|none|The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling).|
|delayedUserStopped|number(float)|false|none|The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again.|
|deliveredNoDelay|number(float)|false|none|The percentage of accepted messages that were delivered to the device without delay from the FCM system.|

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse">GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1listandroiddeliverydataresponse"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse"></a>
<a id="tocSgooglefirebasefcmdatav1beta1listandroiddeliverydataresponse"></a>
<a id="tocsgooglefirebasefcmdatav1beta1listandroiddeliverydataresponse"></a>

```json
{
  "androidDeliveryData": [
    {
      "analyticsLabel": "string",
      "appId": "string",
      "data": {
        "countMessagesAccepted": "string",
        "deliveryPerformancePercents": {
          "delayedDeviceDoze": 0,
          "delayedDeviceOffline": 0,
          "delayedMessageThrottled": 0,
          "delayedUserStopped": 0,
          "deliveredNoDelay": 0
        },
        "messageInsightPercents": {
          "priorityLowered": 0
        },
        "messageOutcomePercents": {
          "delivered": 0,
          "droppedAppForceStopped": 0,
          "droppedDeviceInactive": 0,
          "droppedTooManyPendingMessages": 0,
          "pending": 0
        }
      },
      "date": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListAndroidDeliveryData.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|androidDeliveryData|[[GoogleFirebaseFcmDataV1beta1AndroidDeliveryData](#schemagooglefirebasefcmdatav1beta1androiddeliverydata)]|false|none|The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1MessageInsightPercents">GoogleFirebaseFcmDataV1beta1MessageInsightPercents</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1messageinsightpercents"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1MessageInsightPercents"></a>
<a id="tocSgooglefirebasefcmdatav1beta1messageinsightpercents"></a>
<a id="tocsgooglefirebasefcmdatav1beta1messageinsightpercents"></a>

```json
{
  "priorityLowered": 0
}
```

Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priorityLowered|number(float)|false|none|The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority).|

<h2 id="tocS_GoogleFirebaseFcmDataV1beta1MessageOutcomePercents">GoogleFirebaseFcmDataV1beta1MessageOutcomePercents</h2>
<!-- backwards compatibility -->
<a id="schemagooglefirebasefcmdatav1beta1messageoutcomepercents"></a>
<a id="schema_GoogleFirebaseFcmDataV1beta1MessageOutcomePercents"></a>
<a id="tocSgooglefirebasefcmdatav1beta1messageoutcomepercents"></a>
<a id="tocsgooglefirebasefcmdatav1beta1messageoutcomepercents"></a>

```json
{
  "delivered": 0,
  "droppedAppForceStopped": 0,
  "droppedDeviceInactive": 0,
  "droppedTooManyPendingMessages": 0,
  "pending": 0
}
```

Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivered|number(float)|false|none|The percentage of all accepted messages that were successfully delivered to the device.|
|droppedAppForceStopped|number(float)|false|none|The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful.|
|droppedDeviceInactive|number(float)|false|none|The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.|
|droppedTooManyPendingMessages|number(float)|false|none|The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages.|
|pending|number(float)|false|none|The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect.|

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
