<h1 id="firebase-cloud-messaging-api">Firebase Cloud Messaging API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

FCM send API that provides a cross-platform messaging solution to reliably deliver messages at no cost.

Base URLs:

* <a href="https://fcm.googleapis.com/">https://fcm.googleapis.com/</a>

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
|https://www.googleapis.com/auth/firebase.messaging|Send messages and manage messaging subscriptions for your Firebase applications|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/firebase.messaging|Send messages and manage messaging subscriptions for your Firebase applications|

<h1 id="firebase-cloud-messaging-api-projects">projects</h1>

## fcm.projects.messages.send

<a id="opIdfcm.projects.messages.send"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/messages:send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": {
      "android": {
        "collapseKey": "string",
        "data": {
          "property1": "string",
          "property2": "string"
        },
        "directBootOk": true,
        "fcmOptions": {
          "analyticsLabel": "string"
        },
        "notification": {
          "body": "string",
          "bodyLocArgs": [
            "string"
          ],
          "bodyLocKey": "string",
          "bypassProxyNotification": true,
          "channelId": "string",
          "clickAction": "string",
          "color": "string",
          "defaultLightSettings": true,
          "defaultSound": true,
          "defaultVibrateTimings": true,
          "eventTime": "string",
          "icon": "string",
          "image": "string",
          "lightSettings": {
            "color": {
              "alpha": 0,
              "blue": 0,
              "green": 0,
              "red": 0
            },
            "lightOffDuration": "string",
            "lightOnDuration": "string"
          },
          "localOnly": true,
          "notificationCount": 0,
          "notificationPriority": "PRIORITY_UNSPECIFIED",
          "sound": "string",
          "sticky": true,
          "tag": "string",
          "ticker": "string",
          "title": "string",
          "titleLocArgs": [
            "string"
          ],
          "titleLocKey": "string",
          "vibrateTimings": [
            "string"
          ],
          "visibility": "VISIBILITY_UNSPECIFIED"
        },
        "priority": "NORMAL",
        "restrictedPackageName": "string",
        "ttl": "string"
      },
      "apns": {
        "fcmOptions": {
          "analyticsLabel": "string",
          "image": "string"
        },
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "payload": {
          "property1": null,
          "property2": null
        }
      },
      "condition": "string",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "fcmOptions": {
        "analyticsLabel": "string"
      },
      "name": "string",
      "notification": {
        "body": "string",
        "image": "string",
        "title": "string"
      },
      "token": "string",
      "topic": "string",
      "webpush": {
        "data": {
          "property1": "string",
          "property2": "string"
        },
        "fcmOptions": {
          "analyticsLabel": "string",
          "link": "string"
        },
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "notification": {
          "property1": null,
          "property2": null
        }
      }
    },
    "validateOnly": true
  }'
```

`POST /v1/{parent}/messages:send`

Send a message to specified target (a registration token, topic or condition).

> Body parameter

```json
{
  "message": {
    "android": {
      "collapseKey": "string",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "directBootOk": true,
      "fcmOptions": {
        "analyticsLabel": "string"
      },
      "notification": {
        "body": "string",
        "bodyLocArgs": [
          "string"
        ],
        "bodyLocKey": "string",
        "bypassProxyNotification": true,
        "channelId": "string",
        "clickAction": "string",
        "color": "string",
        "defaultLightSettings": true,
        "defaultSound": true,
        "defaultVibrateTimings": true,
        "eventTime": "string",
        "icon": "string",
        "image": "string",
        "lightSettings": {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "lightOffDuration": "string",
          "lightOnDuration": "string"
        },
        "localOnly": true,
        "notificationCount": 0,
        "notificationPriority": "PRIORITY_UNSPECIFIED",
        "sound": "string",
        "sticky": true,
        "tag": "string",
        "ticker": "string",
        "title": "string",
        "titleLocArgs": [
          "string"
        ],
        "titleLocKey": "string",
        "vibrateTimings": [
          "string"
        ],
        "visibility": "VISIBILITY_UNSPECIFIED"
      },
      "priority": "NORMAL",
      "restrictedPackageName": "string",
      "ttl": "string"
    },
    "apns": {
      "fcmOptions": {
        "analyticsLabel": "string",
        "image": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "payload": {
        "property1": null,
        "property2": null
      }
    },
    "condition": "string",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "fcmOptions": {
      "analyticsLabel": "string"
    },
    "name": "string",
    "notification": {
      "body": "string",
      "image": "string",
      "title": "string"
    },
    "token": "string",
    "topic": "string",
    "webpush": {
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "fcmOptions": {
        "analyticsLabel": "string",
        "link": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "notification": {
        "property1": null,
        "property2": null
      }
    }
  },
  "validateOnly": true
}
```

<h3 id="fcmprojectsmessagessend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number}`.|
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
|body|body|[SendMessageRequest](#schemasendmessagerequest)|false|none|
|» message|body|[Message](#schemamessage)|false|Required. Message to send.|
|» validateOnly|body|boolean|false|Flag for testing the request without actually delivering the message.|

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
  "android": {
    "collapseKey": "string",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "directBootOk": true,
    "fcmOptions": {
      "analyticsLabel": "string"
    },
    "notification": {
      "body": "string",
      "bodyLocArgs": [
        "string"
      ],
      "bodyLocKey": "string",
      "bypassProxyNotification": true,
      "channelId": "string",
      "clickAction": "string",
      "color": "string",
      "defaultLightSettings": true,
      "defaultSound": true,
      "defaultVibrateTimings": true,
      "eventTime": "string",
      "icon": "string",
      "image": "string",
      "lightSettings": {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "lightOffDuration": "string",
        "lightOnDuration": "string"
      },
      "localOnly": true,
      "notificationCount": 0,
      "notificationPriority": "PRIORITY_UNSPECIFIED",
      "sound": "string",
      "sticky": true,
      "tag": "string",
      "ticker": "string",
      "title": "string",
      "titleLocArgs": [
        "string"
      ],
      "titleLocKey": "string",
      "vibrateTimings": [
        "string"
      ],
      "visibility": "VISIBILITY_UNSPECIFIED"
    },
    "priority": "NORMAL",
    "restrictedPackageName": "string",
    "ttl": "string"
  },
  "apns": {
    "fcmOptions": {
      "analyticsLabel": "string",
      "image": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "payload": {
      "property1": null,
      "property2": null
    }
  },
  "condition": "string",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "fcmOptions": {
    "analyticsLabel": "string"
  },
  "name": "string",
  "notification": {
    "body": "string",
    "image": "string",
    "title": "string"
  },
  "token": "string",
  "topic": "string",
  "webpush": {
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "fcmOptions": {
      "analyticsLabel": "string",
      "link": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "notification": {
      "property1": null,
      "property2": null
    }
  }
}
```

<h3 id="fcmprojectsmessagessend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/firebase.messaging ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/firebase.messaging )
</aside>

# Schemas

<h2 id="tocS_AndroidConfig">AndroidConfig</h2>
<!-- backwards compatibility -->
<a id="schemaandroidconfig"></a>
<a id="schema_AndroidConfig"></a>
<a id="tocSandroidconfig"></a>
<a id="tocsandroidconfig"></a>

```json
{
  "collapseKey": "string",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "directBootOk": true,
  "fcmOptions": {
    "analyticsLabel": "string"
  },
  "notification": {
    "body": "string",
    "bodyLocArgs": [
      "string"
    ],
    "bodyLocKey": "string",
    "bypassProxyNotification": true,
    "channelId": "string",
    "clickAction": "string",
    "color": "string",
    "defaultLightSettings": true,
    "defaultSound": true,
    "defaultVibrateTimings": true,
    "eventTime": "string",
    "icon": "string",
    "image": "string",
    "lightSettings": {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "lightOffDuration": "string",
      "lightOnDuration": "string"
    },
    "localOnly": true,
    "notificationCount": 0,
    "notificationPriority": "PRIORITY_UNSPECIFIED",
    "sound": "string",
    "sticky": true,
    "tag": "string",
    "ticker": "string",
    "title": "string",
    "titleLocArgs": [
      "string"
    ],
    "titleLocKey": "string",
    "vibrateTimings": [
      "string"
    ],
    "visibility": "VISIBILITY_UNSPECIFIED"
  },
  "priority": "NORMAL",
  "restrictedPackageName": "string",
  "ttl": "string"
}
```

Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collapseKey|string|false|none|An identifier of a group of messages that can be collapsed, so that only the last message gets sent when delivery can be resumed. A maximum of 4 different collapse keys is allowed at any given time.|
|data|object|false|none|Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.|
|directBootOk|boolean|false|none|If set to true, messages will be allowed to be delivered to the app while the device is in direct boot mode. See [Support Direct Boot mode](https://developer.android.com/training/articles/direct-boot).|
|fcmOptions|[AndroidFcmOptions](#schemaandroidfcmoptions)|false|none|Options for features provided by the FCM SDK for Android.|
|notification|[AndroidNotification](#schemaandroidnotification)|false|none|Notification to send to android devices.|
|priority|string|false|none|Message priority. Can take "normal" and "high" values. For more information, see [Setting the priority of a message](https://goo.gl/GjONJv).|
|restrictedPackageName|string|false|none|Package name of the application where the registration token must match in order to receive the message.|
|ttl|string(google-duration)|false|none|How long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks if not set. Set it to 0 if want to send the message immediately. In JSON format, the Duration type is encoded as a string rather than an object, where the string ends in the suffix "s" (indicating seconds) and is preceded by the number of seconds, with nanoseconds expressed as fractional seconds. For example, 3 seconds with 0 nanoseconds should be encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should be expressed in JSON format as "3.000000001s". The ttl will be rounded down to the nearest second.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|NORMAL|
|priority|HIGH|

<h2 id="tocS_AndroidFcmOptions">AndroidFcmOptions</h2>
<!-- backwards compatibility -->
<a id="schemaandroidfcmoptions"></a>
<a id="schema_AndroidFcmOptions"></a>
<a id="tocSandroidfcmoptions"></a>
<a id="tocsandroidfcmoptions"></a>

```json
{
  "analyticsLabel": "string"
}
```

Options for features provided by the FCM SDK for Android.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsLabel|string|false|none|Label associated with the message's analytics data.|

<h2 id="tocS_AndroidNotification">AndroidNotification</h2>
<!-- backwards compatibility -->
<a id="schemaandroidnotification"></a>
<a id="schema_AndroidNotification"></a>
<a id="tocSandroidnotification"></a>
<a id="tocsandroidnotification"></a>

```json
{
  "body": "string",
  "bodyLocArgs": [
    "string"
  ],
  "bodyLocKey": "string",
  "bypassProxyNotification": true,
  "channelId": "string",
  "clickAction": "string",
  "color": "string",
  "defaultLightSettings": true,
  "defaultSound": true,
  "defaultVibrateTimings": true,
  "eventTime": "string",
  "icon": "string",
  "image": "string",
  "lightSettings": {
    "color": {
      "alpha": 0,
      "blue": 0,
      "green": 0,
      "red": 0
    },
    "lightOffDuration": "string",
    "lightOnDuration": "string"
  },
  "localOnly": true,
  "notificationCount": 0,
  "notificationPriority": "PRIORITY_UNSPECIFIED",
  "sound": "string",
  "sticky": true,
  "tag": "string",
  "ticker": "string",
  "title": "string",
  "titleLocArgs": [
    "string"
  ],
  "titleLocKey": "string",
  "vibrateTimings": [
    "string"
  ],
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

Notification to send to android devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The notification's body text. If present, it will override google.firebase.fcm.v1.Notification.body.|
|bodyLocArgs|[string]|false|none|Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user's current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.|
|bodyLocKey|string|false|none|The key to the body string in the app's string resources to use to localize the body text to the user's current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.|
|bypassProxyNotification|boolean|false|none|If set, display notifications delivered to the device will be handled by the app instead of the proxy.|
|channelId|string|false|none|The [notification's channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID is received. If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.|
|clickAction|string|false|none|The action associated with a user click on the notification. If specified, an activity with a matching intent filter is launched when a user clicks on the notification.|
|color|string|false|none|The notification's icon color, expressed in #rrggbb format.|
|defaultLightSettings|boolean|false|none|If set to true, use the Android framework's default LED light settings for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_light_settings` is set to true and `light_settings` is also set, the user-specified `light_settings` is used instead of the default value.|
|defaultSound|boolean|false|none|If set to true, use the Android framework's default sound for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).|
|defaultVibrateTimings|boolean|false|none|If set to true, use the Android framework's default vibrate pattern for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_vibrate_timings` is set to true and `vibrate_timings` is also set, the default value is used instead of the user-specified `vibrate_timings`.|
|eventTime|string(google-datetime)|false|none|Set the time that the event in the notification occurred. Notifications in the panel are sorted by this time. A point in time is represented using [protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).|
|icon|string|false|none|The notification's icon. Sets the notification icon to myicon for drawable resource myicon. If you don't send this key in the request, FCM displays the launcher icon specified in your app manifest.|
|image|string|false|none|Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.|
|lightSettings|[LightSettings](#schemalightsettings)|false|none|Settings to control the notification's LED blinking rate and color if LED is available on the device. The total blinking time is controlled by the OS.|
|localOnly|boolean|false|none|Set whether or not this notification is relevant only to the current device. Some notifications can be bridged to other devices for remote display, such as a Wear OS watch. This hint can be set to recommend this notification not be bridged. See [Wear OS guides](https://developer.android.com/training/wearables/notifications/bridger#existing-method-of-preventing-bridging)|
|notificationCount|integer(int32)|false|none|Sets the number of items this notification represents. May be displayed as a badge count for launchers that support badging.See [Notification Badge](https://developer.android.com/training/notify-user/badges). For example, this might be useful if you're using just one notification to represent multiple new messages but you want the count here to represent the number of total new messages. If zero or unspecified, systems that support badging use the default, which is to increment a number displayed on the long-press menu each time a new notification arrives.|
|notificationPriority|string|false|none|Set the relative priority for this notification. Priority is an indication of how much of the user's attention should be consumed by this notification. Low-priority notifications may be hidden from the user in certain situations, while the user might be interrupted for a higher-priority notification. The effect of setting the same priorities may differ slightly on different platforms. Note this priority differs from `AndroidMessagePriority`. This priority is processed by the client after the message has been delivered, whereas [AndroidMessagePriority](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#androidmessagepriority) is an FCM concept that controls when the message is delivered.|
|sound|string|false|none|The sound to play when the device receives the notification. Supports "default" or the filename of a sound resource bundled in the app. Sound files must reside in /res/raw/.|
|sticky|boolean|false|none|When set to false or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to true, the notification persists even when the user clicks it.|
|tag|string|false|none|Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.|
|ticker|string|false|none|Sets the "ticker" text, which is sent to accessibility services. Prior to API level 21 (`Lollipop`), sets the text that is displayed in the status bar when the notification first arrives.|
|title|string|false|none|The notification's title. If present, it will override google.firebase.fcm.v1.Notification.title.|
|titleLocArgs|[string]|false|none|Variable string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user's current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.|
|titleLocKey|string|false|none|The key to the title string in the app's string resources to use to localize the title text to the user's current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.|
|vibrateTimings|[string(google-duration)]|false|none|Set the vibration pattern to use. Pass in an array of [protobuf.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration) to turn on or off the vibrator. The first value indicates the `Duration` to wait before turning the vibrator on. The next value indicates the `Duration` to keep the vibrator on. Subsequent values alternate between `Duration` to turn the vibrator off and to turn the vibrator on. If `vibrate_timings` is set and `default_vibrate_timings` is set to `true`, the default value is used instead of the user-specified `vibrate_timings`.|
|visibility|string|false|none|Set the [Notification.visibility](https://developer.android.com/reference/android/app/Notification.html#visibility) of the notification.|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationPriority|PRIORITY_UNSPECIFIED|
|notificationPriority|PRIORITY_MIN|
|notificationPriority|PRIORITY_LOW|
|notificationPriority|PRIORITY_DEFAULT|
|notificationPriority|PRIORITY_HIGH|
|notificationPriority|PRIORITY_MAX|
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|PRIVATE|
|visibility|PUBLIC|
|visibility|SECRET|

<h2 id="tocS_ApnsConfig">ApnsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapnsconfig"></a>
<a id="schema_ApnsConfig"></a>
<a id="tocSapnsconfig"></a>
<a id="tocsapnsconfig"></a>

```json
{
  "fcmOptions": {
    "analyticsLabel": "string",
    "image": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "payload": {
    "property1": null,
    "property2": null
  }
}
```

[Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fcmOptions|[ApnsFcmOptions](#schemaapnsfcmoptions)|false|none|Options for features provided by the FCM SDK for iOS.|
|headers|object|false|none|HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) for supported headers such as `apns-expiration` and `apns-priority`. The backend sets a default value for `apns-expiration` of 30 days and a default value for `apns-priority` of 10 if not explicitly set.|
|payload|object|false|none|APNs payload as a JSON object, including both `aps` dictionary and custom payload. See [Payload Key Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification). If present, it overrides google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body.|

<h2 id="tocS_ApnsFcmOptions">ApnsFcmOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapnsfcmoptions"></a>
<a id="schema_ApnsFcmOptions"></a>
<a id="tocSapnsfcmoptions"></a>
<a id="tocsapnsfcmoptions"></a>

```json
{
  "analyticsLabel": "string",
  "image": "string"
}
```

Options for features provided by the FCM SDK for iOS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsLabel|string|false|none|Label associated with the message's analytics data.|
|image|string|false|none|Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "alpha": 0,
  "blue": 0,
  "green": 0,
  "red": 0
}
```

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|

<h2 id="tocS_FcmOptions">FcmOptions</h2>
<!-- backwards compatibility -->
<a id="schemafcmoptions"></a>
<a id="schema_FcmOptions"></a>
<a id="tocSfcmoptions"></a>
<a id="tocsfcmoptions"></a>

```json
{
  "analyticsLabel": "string"
}
```

Platform independent options for features provided by the FCM SDKs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsLabel|string|false|none|Label associated with the message's analytics data.|

<h2 id="tocS_LightSettings">LightSettings</h2>
<!-- backwards compatibility -->
<a id="schemalightsettings"></a>
<a id="schema_LightSettings"></a>
<a id="tocSlightsettings"></a>
<a id="tocslightsettings"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "lightOffDuration": "string",
  "lightOnDuration": "string"
}
```

Settings to control notification LED.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|Required. Set `color` of the LED with [google.type.Color](https://github.com/googleapis/googleapis/blob/master/google/type/color.proto).|
|lightOffDuration|string(google-duration)|false|none|Required. Along with `light_on_duration `, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)|
|lightOnDuration|string(google-duration)|false|none|Required. Along with `light_off_duration`, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "android": {
    "collapseKey": "string",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "directBootOk": true,
    "fcmOptions": {
      "analyticsLabel": "string"
    },
    "notification": {
      "body": "string",
      "bodyLocArgs": [
        "string"
      ],
      "bodyLocKey": "string",
      "bypassProxyNotification": true,
      "channelId": "string",
      "clickAction": "string",
      "color": "string",
      "defaultLightSettings": true,
      "defaultSound": true,
      "defaultVibrateTimings": true,
      "eventTime": "string",
      "icon": "string",
      "image": "string",
      "lightSettings": {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "lightOffDuration": "string",
        "lightOnDuration": "string"
      },
      "localOnly": true,
      "notificationCount": 0,
      "notificationPriority": "PRIORITY_UNSPECIFIED",
      "sound": "string",
      "sticky": true,
      "tag": "string",
      "ticker": "string",
      "title": "string",
      "titleLocArgs": [
        "string"
      ],
      "titleLocKey": "string",
      "vibrateTimings": [
        "string"
      ],
      "visibility": "VISIBILITY_UNSPECIFIED"
    },
    "priority": "NORMAL",
    "restrictedPackageName": "string",
    "ttl": "string"
  },
  "apns": {
    "fcmOptions": {
      "analyticsLabel": "string",
      "image": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "payload": {
      "property1": null,
      "property2": null
    }
  },
  "condition": "string",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "fcmOptions": {
    "analyticsLabel": "string"
  },
  "name": "string",
  "notification": {
    "body": "string",
    "image": "string",
    "title": "string"
  },
  "token": "string",
  "topic": "string",
  "webpush": {
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "fcmOptions": {
      "analyticsLabel": "string",
      "link": "string"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "notification": {
      "property1": null,
      "property2": null
    }
  }
}
```

Message to send by Firebase Cloud Messaging Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|android|[AndroidConfig](#schemaandroidconfig)|false|none|Input only. Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).|
|apns|[ApnsConfig](#schemaapnsconfig)|false|none|Input only. [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.|
|condition|string|false|none|Condition to send a message to, e.g. "'foo' in topics && 'bar' in topics".|
|data|object|false|none|Input only. Arbitrary key/value payload, which must be UTF-8 encoded. The key should not be a reserved word ("from", "message_type", or any word starting with "google" or "gcm"). When sending payloads containing only data fields to iOS devices, only normal priority (`"apns-priority": "5"`) is allowed in [`ApnsConfig`](/docs/reference/fcm/rest/v1/projects.messages#apnsconfig).|
|fcmOptions|[FcmOptions](#schemafcmoptions)|false|none|Input only. Template for FCM SDK feature options to use across all platforms.|
|name|string|false|none|Output Only. The identifier of the message sent, in the format of `projects/*/messages/{message_id}`.|
|notification|[Notification](#schemanotification)|false|none|Input only. Basic notification template to use across all platforms.|
|token|string|false|none|Registration token to send a message to.|
|topic|string|false|none|Topic name to send a message to, e.g. "weather". Note: "/topics/" prefix should not be provided.|
|webpush|[WebpushConfig](#schemawebpushconfig)|false|none|Input only. [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "body": "string",
  "image": "string",
  "title": "string"
}
```

Basic notification template to use across all platforms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The notification's body text.|
|image|string|false|none|Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. JPEG, PNG, BMP have full support across platforms. Animated GIF and video only work on iOS. WebP and HEIF have varying levels of support across platforms and platform versions. Android has 1MB image size limit. Quota usage and implications/costs for hosting image on Firebase Storage: https://firebase.google.com/pricing|
|title|string|false|none|The notification's title.|

<h2 id="tocS_SendMessageRequest">SendMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendmessagerequest"></a>
<a id="schema_SendMessageRequest"></a>
<a id="tocSsendmessagerequest"></a>
<a id="tocssendmessagerequest"></a>

```json
{
  "message": {
    "android": {
      "collapseKey": "string",
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "directBootOk": true,
      "fcmOptions": {
        "analyticsLabel": "string"
      },
      "notification": {
        "body": "string",
        "bodyLocArgs": [
          "string"
        ],
        "bodyLocKey": "string",
        "bypassProxyNotification": true,
        "channelId": "string",
        "clickAction": "string",
        "color": "string",
        "defaultLightSettings": true,
        "defaultSound": true,
        "defaultVibrateTimings": true,
        "eventTime": "string",
        "icon": "string",
        "image": "string",
        "lightSettings": {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "lightOffDuration": "string",
          "lightOnDuration": "string"
        },
        "localOnly": true,
        "notificationCount": 0,
        "notificationPriority": "PRIORITY_UNSPECIFIED",
        "sound": "string",
        "sticky": true,
        "tag": "string",
        "ticker": "string",
        "title": "string",
        "titleLocArgs": [
          "string"
        ],
        "titleLocKey": "string",
        "vibrateTimings": [
          "string"
        ],
        "visibility": "VISIBILITY_UNSPECIFIED"
      },
      "priority": "NORMAL",
      "restrictedPackageName": "string",
      "ttl": "string"
    },
    "apns": {
      "fcmOptions": {
        "analyticsLabel": "string",
        "image": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "payload": {
        "property1": null,
        "property2": null
      }
    },
    "condition": "string",
    "data": {
      "property1": "string",
      "property2": "string"
    },
    "fcmOptions": {
      "analyticsLabel": "string"
    },
    "name": "string",
    "notification": {
      "body": "string",
      "image": "string",
      "title": "string"
    },
    "token": "string",
    "topic": "string",
    "webpush": {
      "data": {
        "property1": "string",
        "property2": "string"
      },
      "fcmOptions": {
        "analyticsLabel": "string",
        "link": "string"
      },
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "notification": {
        "property1": null,
        "property2": null
      }
    }
  },
  "validateOnly": true
}
```

Request to send a message to specified target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|Required. Message to send.|
|validateOnly|boolean|false|none|Flag for testing the request without actually delivering the message.|

<h2 id="tocS_WebpushConfig">WebpushConfig</h2>
<!-- backwards compatibility -->
<a id="schemawebpushconfig"></a>
<a id="schema_WebpushConfig"></a>
<a id="tocSwebpushconfig"></a>
<a id="tocswebpushconfig"></a>

```json
{
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "fcmOptions": {
    "analyticsLabel": "string",
    "link": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "notification": {
    "property1": null,
    "property2": null
  }
}
```

[Webpush protocol](https://tools.ietf.org/html/rfc8030) options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.|
|fcmOptions|[WebpushFcmOptions](#schemawebpushfcmoptions)|false|none|Options for features provided by the FCM SDK for Web.|
|headers|object|false|none|HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. "TTL": "15".|
|notification|object|false|none|Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, "title" and "body" fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body].|

<h2 id="tocS_WebpushFcmOptions">WebpushFcmOptions</h2>
<!-- backwards compatibility -->
<a id="schemawebpushfcmoptions"></a>
<a id="schema_WebpushFcmOptions"></a>
<a id="tocSwebpushfcmoptions"></a>
<a id="tocswebpushfcmoptions"></a>

```json
{
  "analyticsLabel": "string",
  "link": "string"
}
```

Options for features provided by the FCM SDK for Web.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsLabel|string|false|none|Label associated with the message's analytics data.|
|link|string|false|none|The link to open when the user clicks on the notification. For all URL values, HTTPS is required.|
