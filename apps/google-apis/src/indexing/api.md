<h1 id="indexing-api">Indexing API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Notifies Google when your web pages change.

Base URLs:

* <a href="https://indexing.googleapis.com/">https://indexing.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/search/apis/indexing-api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/indexing|Submit data to Google for indexing|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/indexing|Submit data to Google for indexing|

<h1 id="indexing-api-urlnotifications">urlNotifications</h1>

## indexing.urlNotifications.getMetadata

<a id="opIdindexing.urlNotifications.getMetadata"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/urlNotifications/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/urlNotifications/metadata`

Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.

<h3 id="indexingurlnotificationsgetmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|URL that is being queried.|
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
  "latestRemove": {
    "notifyTime": "string",
    "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "latestUpdate": {
    "notifyTime": "string",
    "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "url": "string"
}
```

<h3 id="indexingurlnotificationsgetmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UrlNotificationMetadata](#schemaurlnotificationmetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/indexing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/indexing )
</aside>

## indexing.urlNotifications.publish

<a id="opIdindexing.urlNotifications.publish"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3/urlNotifications:publish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notifyTime": "string",
    "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    "url": "string"
  }'
```

`POST /v3/urlNotifications:publish`

Notifies that a URL has been updated or deleted.

> Body parameter

```json
{
  "notifyTime": "string",
  "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
  "url": "string"
}
```

<h3 id="indexingurlnotificationspublish-parameters">Parameters</h3>

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
|body|body|[UrlNotification](#schemaurlnotification)|false|none|
|» notifyTime|body|string(google-datetime)|false|Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.|
|» type|body|string|false|The URL life cycle event that Google is being notified about.|
|» url|body|string|false|The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|URL_NOTIFICATION_TYPE_UNSPECIFIED|
|» type|URL_UPDATED|
|» type|URL_DELETED|

> Example responses

> 200 Response

```json
{
  "urlNotificationMetadata": {
    "latestRemove": {
      "notifyTime": "string",
      "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
      "url": "string"
    },
    "latestUpdate": {
      "notifyTime": "string",
      "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
      "url": "string"
    },
    "url": "string"
  }
}
```

<h3 id="indexingurlnotificationspublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublishUrlNotificationResponse](#schemapublishurlnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/indexing ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/indexing )
</aside>

# Schemas

<h2 id="tocS_PublishUrlNotificationResponse">PublishUrlNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishurlnotificationresponse"></a>
<a id="schema_PublishUrlNotificationResponse"></a>
<a id="tocSpublishurlnotificationresponse"></a>
<a id="tocspublishurlnotificationresponse"></a>

```json
{
  "urlNotificationMetadata": {
    "latestRemove": {
      "notifyTime": "string",
      "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
      "url": "string"
    },
    "latestUpdate": {
      "notifyTime": "string",
      "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
      "url": "string"
    },
    "url": "string"
  }
}
```

Output for PublishUrlNotification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urlNotificationMetadata|[UrlNotificationMetadata](#schemaurlnotificationmetadata)|false|none|Description of the notification events received for this URL.|

<h2 id="tocS_UrlNotification">UrlNotification</h2>
<!-- backwards compatibility -->
<a id="schemaurlnotification"></a>
<a id="schema_UrlNotification"></a>
<a id="tocSurlnotification"></a>
<a id="tocsurlnotification"></a>

```json
{
  "notifyTime": "string",
  "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
  "url": "string"
}
```

`UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifyTime|string(google-datetime)|false|none|Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time.|
|type|string|false|none|The URL life cycle event that Google is being notified about.|
|url|string|false|none|The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|URL_NOTIFICATION_TYPE_UNSPECIFIED|
|type|URL_UPDATED|
|type|URL_DELETED|

<h2 id="tocS_UrlNotificationMetadata">UrlNotificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaurlnotificationmetadata"></a>
<a id="schema_UrlNotificationMetadata"></a>
<a id="tocSurlnotificationmetadata"></a>
<a id="tocsurlnotificationmetadata"></a>

```json
{
  "latestRemove": {
    "notifyTime": "string",
    "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "latestUpdate": {
    "notifyTime": "string",
    "type": "URL_NOTIFICATION_TYPE_UNSPECIFIED",
    "url": "string"
  },
  "url": "string"
}
```

Summary of the most recent Indexing API notifications successfully received, for a given URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestRemove|[UrlNotification](#schemaurlnotification)|false|none|Latest notification received with type `URL_REMOVED`.|
|latestUpdate|[UrlNotification](#schemaurlnotification)|false|none|Latest notification received with type `URL_UPDATED`.|
|url|string|false|none|URL to which this metadata refers.|
