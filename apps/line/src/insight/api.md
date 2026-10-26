<h1 id="line-messaging-apiinsight">LINE Messaging API(Insight) v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Messaging API(Insight).

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="line-messaging-apiinsight-insight">insight</h1>

## getFriendsDemographics

<a id="opIdgetFriendsDemographics"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/insight/demographic \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/demographic`

Retrieves the demographic attributes for a LINE Official Account's
friends.You can only retrieve information about friends for LINE Official
Accounts created by users in Japan (JP), Thailand (TH), Taiwan (TW) and Indonesia
(ID).


<a href="https://developers.line.biz/en/reference/messaging-api/#get-demographic">External documentation</a>

> Example responses

> 200 Response

```json
{
  "available": true,
  "genders": [
    {
      "gender": "unknown",
      "percentage": 37.6
    },
    {
      "gender": "male",
      "percentage": 31.8
    },
    {
      "gender": "female",
      "percentage": 30.6
    }
  ],
  "ages": [
    {
      "age": "unknown",
      "percentage": 37.6
    },
    {
      "age": "from50",
      "percentage": 17.3
    }
  ],
  "areas": [
    {
      "area": "unknown",
      "percentage": 42.9
    },
    {
      "area": "徳島",
      "percentage": 2.9
    }
  ],
  "appTypes": [
    {
      "appType": "ios",
      "percentage": 62.4
    },
    {
      "appType": "android",
      "percentage": 27.7
    },
    {
      "appType": "others",
      "percentage": 9.9
    }
  ],
  "subscriptionPeriods": [
    {
      "subscriptionPeriod": "over365days",
      "percentage": 96.4
    },
    {
      "subscriptionPeriod": "within365days",
      "percentage": 1.9
    },
    {
      "subscriptionPeriod": "within180days",
      "percentage": 1.2
    },
    {
      "subscriptionPeriod": "within90days",
      "percentage": 0.5
    },
    {
      "subscriptionPeriod": "within30days",
      "percentage": 0.1
    },
    {
      "subscriptionPeriod": "within7days",
      "percentage": 0
    }
  ]
}
```

<h3 id="getfriendsdemographics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetFriendsDemographicsResponse](#schemagetfriendsdemographicsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get number of message deliveries

<a id="opIdgetNumberOfMessageDeliveries"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/insight/message/delivery?date=stringst' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/message/delivery`

Returns the number of messages sent from LINE Official Account
on a specified day.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-delivery-messages">External documentation</a>

<h3 id="get-number-of-message-deliveries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|true|Date for which to retrieve number of sent messages.<br>- Format: yyyyMMdd (e.g. 20191231)<br>- Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "broadcast": 5385,
  "targeting": 522
}
```

<h3 id="get-number-of-message-deliveries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetNumberOfMessageDeliveriesResponse](#schemagetnumberofmessagedeliveriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get number of followers

<a id="opIdgetNumberOfFollowers"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/insight/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/followers`

Returns the number of users who have added the LINE Official Account
on or before a specified date.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-number-of-followers">External documentation</a>

<h3 id="get-number-of-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|Date for which to retrieve the number of followers.<br><br>Format: yyyyMMdd (e.g. 20191231)<br>Timezone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "status": "ready",
  "followers": 7620,
  "targetedReaches": 5848,
  "blocks": 237
}
```

<h3 id="get-number-of-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetNumberOfFollowersResponse](#schemagetnumberoffollowersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get user interaction statistics

<a id="opIdgetMessageEvent"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/insight/message/event?requestId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/message/event`

Returns statistics about how users interact with narrowcast messages
or broadcast messages sent from your LINE Official Account.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-message-event">External documentation</a>

<h3 id="get-user-interaction-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|requestId|query|string|true|Request ID of a narrowcast message or broadcast message.<br>Each Messaging API request has a request ID.<br>|

> Example responses

> 200 Response

```json
{
  "overview": {
    "requestId": "f70dd685-499a-4231-a441-f24b8d4fba21",
    "timestamp": 1568214000,
    "delivered": 320,
    "uniqueImpression": 82,
    "uniqueClick": 51,
    "uniqueMediaPlayed": null,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [
    {
      "seq": 1,
      "impression": 136,
      "mediaPlayed": null,
      "mediaPlayed25Percent": null,
      "mediaPlayed50Percent": null,
      "mediaPlayed75Percent": null,
      "mediaPlayed100Percent": null,
      "uniqueMediaPlayed": null,
      "uniqueMediaPlayed25Percent": null,
      "uniqueMediaPlayed50Percent": null,
      "uniqueMediaPlayed75Percent": null,
      "uniqueMediaPlayed100Percent": null
    }
  ],
  "clicks": [
    {
      "seq": 1,
      "url": "https://line.me/",
      "click": 41,
      "uniqueClick": 30,
      "uniqueClickOfRequest": 30
    },
    {
      "seq": 1,
      "url": "https://www.linebiz.com/",
      "click": 59,
      "uniqueClick": 38,
      "uniqueClickOfRequest": 38
    }
  ]
}
```

<h3 id="get-user-interaction-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetMessageEventResponse](#schemagetmessageeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getStatisticsPerUnit

<a id="opIdgetStatisticsPerUnit"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/insight/message/event/aggregation?customAggregationUnit=string&from=20210301&to=20210301' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/message/event/aggregation`

You can check the per-unit statistics of how users interact with
push messages and multicast messages sent from your LINE Official Account.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-statistics-per-unit">External documentation</a>

<h3 id="getstatisticsperunit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customAggregationUnit|query|string|true|Name of aggregation unit specified when sending the message. Case-sensitive.<br>For example, `Promotion_a` and `Promotion_A` are regarded as different unit names.<br>|
|from|query|string|true|Start date of aggregation period.<br><br>Format: yyyyMMdd (e.g. 20210301)<br>Time zone: UTC+9<br>|
|to|query|string|true|End date of aggregation period. The end date can be specified for up to 30 days later. For example, if the start date is 20210301, the latest end date is 20210331.<br><br>Format: yyyyMMdd (e.g. 20210301)<br>Time zone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "overview": {
    "uniqueImpression": 40,
    "uniqueClick": 30,
    "uniqueMediaPlayed": 25,
    "uniqueMediaPlayed100Percent": null
  },
  "messages": [
    {
      "seq": 1,
      "impression": 42,
      "mediaPlayed": 30,
      "mediaPlayed25Percent": null,
      "mediaPlayed50Percent": null,
      "mediaPlayed75Percent": null,
      "mediaPlayed100Percent": null,
      "uniqueMediaPlayed": 25,
      "uniqueMediaPlayed25Percent": null,
      "uniqueMediaPlayed50Percent": null,
      "uniqueMediaPlayed75Percent": null,
      "uniqueMediaPlayed100Percent": null
    }
  ],
  "clicks": [
    {
      "seq": 1,
      "url": "https://developers.line.biz/",
      "click": 35,
      "uniqueClick": 25,
      "uniqueClickOfRequest": null
    },
    {
      "seq": 1,
      "url": "https://developers.line.biz/",
      "click": 29,
      "uniqueClick": null,
      "uniqueClickOfRequest": null
    }
  ]
}
```

<h3 id="getstatisticsperunit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetStatisticsPerUnitResponse](#schemagetstatisticsperunitresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get rich menu insight summary

<a id="opIdgetRichMenuInsightSummary"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/insight/richmenu/richmenu-0123456789abcdef0123456789abcdef/summary?from=20260213&to=20260215' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/richmenu/{richMenuId}/summary`

Gets a summary of rich menu statistics for the specified period, for a rich
menu created via the Messaging API. Returns the total impression count for
the whole rich menu and the click count for each tappable area, aggregated
over the entire period as a single result.
When the total number of unique clicks during the period is below the
privacy threshold, only `richMenuId` is returned and the other fields are
omitted.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-summary">External documentation</a>

<h3 id="get-rich-menu-insight-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of the rich menu created via the Messaging API.|
|from|query|string|true|Start date of the aggregation period (inclusive).<br>Must be within the most recent 3 years.<br><br>Format: yyyyMMdd (e.g. 20260213)<br>Time zone: UTC+9<br>|
|to|query|string|true|End date of the aggregation period (inclusive).<br>The end date can be specified for up to 396 days after the start date.<br><br>Format: yyyyMMdd (e.g. 20260215)<br>Time zone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "richMenuId": "richmenu-0123456789abcdef0123456789abcdef",
  "metricsFrom": "20260213",
  "metricsTo": "20260215",
  "impression": {
    "metrics": {
      "count": 567,
      "uniqueUsers": 300
    }
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 400,
        "height": 250
      },
      "metrics": {
        "count": 123,
        "uniqueUsers": 45
      }
    },
    {
      "bounds": {
        "x": 400,
        "y": 0,
        "width": 400,
        "height": 250
      },
      "metrics": {
        "count": 45,
        "uniqueUsers": 24
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ]
}
```

<h3 id="get-rich-menu-insight-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetRichMenuInsightSummaryResponse](#schemagetrichmenuinsightsummaryresponse)|
|400|Bad Request|Bad request. The `from` or `to` parameter is missing or invalid, or the aggregation period exceeds the allowed maximum.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found. The specified rich menu does not exist.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get rich menu insight daily

<a id="opIdgetRichMenuInsightDaily"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/insight/richmenu/richmenu-0123456789abcdef0123456789abcdef/daily?from=20260213&to=20260215' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/insight/richmenu/{richMenuId}/daily`

Gets rich menu statistics broken down by day for the specified period, for a
rich menu created via the Messaging API. Returns the daily impression count
for the whole rich menu and the daily click count for each tappable area.
When the total number of unique clicks during the period is below the
privacy threshold, only `richMenuId` is returned and the other fields are
omitted.


<a href="https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-insight-daily">External documentation</a>

<h3 id="get-rich-menu-insight-daily-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|richMenuId|path|string|true|ID of the rich menu created via the Messaging API.|
|from|query|string|true|Start date of the aggregation period (inclusive).<br>Must be within the most recent 3 years.<br><br>Format: yyyyMMdd (e.g. 20260213)<br>Time zone: UTC+9<br>|
|to|query|string|true|End date of the aggregation period (inclusive).<br>The end date can be specified for up to 99 days after the start date.<br><br>Format: yyyyMMdd (e.g. 20260215)<br>Time zone: UTC+9<br>|

> Example responses

> 200 Response

```json
{
  "richMenuId": "richmenu-0123456789abcdef0123456789abcdef",
  "metricsFrom": "20260213",
  "metricsTo": "20260215",
  "impression": {
    "metrics": [
      {
        "date": "20260213",
        "count": 300,
        "uniqueUsers": 191
      },
      {
        "date": "20260214",
        "count": 267,
        "uniqueUsers": 222
      }
    ]
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 400,
        "height": 250
      },
      "metrics": [
        {
          "date": "20260213",
          "count": 45,
          "uniqueUsers": 22
        },
        {
          "date": "20260214",
          "count": 78,
          "uniqueUsers": 35
        }
      ]
    },
    {
      "bounds": {
        "x": 400,
        "y": 0,
        "width": 400,
        "height": 250
      },
      "metrics": [
        {
          "date": "20260213",
          "count": 22,
          "uniqueUsers": 21
        },
        {
          "date": "20260214",
          "count": 23,
          "uniqueUsers": 22
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ]
}
```

<h3 id="get-rich-menu-insight-daily-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetRichMenuInsightDailyResponse](#schemagetrichmenuinsightdailyresponse)|
|400|Bad Request|Bad request. The `from` or `to` parameter is missing or invalid, or the aggregation period exceeds the allowed maximum.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found. The specified rich menu does not exist.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_GetFriendsDemographicsResponse">GetFriendsDemographicsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfriendsdemographicsresponse"></a>
<a id="schema_GetFriendsDemographicsResponse"></a>
<a id="tocSgetfriendsdemographicsresponse"></a>
<a id="tocsgetfriendsdemographicsresponse"></a>

```json
{
  "available": true,
  "genders": [
    {
      "gender": "male",
      "percentage": 0
    }
  ],
  "ages": [
    {
      "age": "from0to14",
      "percentage": 0
    }
  ],
  "areas": [
    {
      "area": "string",
      "percentage": 0
    }
  ],
  "appTypes": [
    {
      "appType": "ios",
      "percentage": 0
    }
  ],
  "subscriptionPeriods": [
    {
      "subscriptionPeriod": "within7days",
      "percentage": 0
    }
  ]
}
```

Get friend demographics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|true if friend demographic information is available.|
|genders|[[GenderTile](#schemagendertile)]|false|none|Percentage per gender.|
|ages|[[AgeTile](#schemaagetile)]|false|none|Percentage per age group.|
|areas|[[AreaTile](#schemaareatile)]|false|none|Percentage per area.|
|appTypes|[[AppTypeTile](#schemaapptypetile)]|false|none|Percentage by OS.|
|subscriptionPeriods|[[SubscriptionPeriodTile](#schemasubscriptionperiodtile)]|false|none|Percentage per friendship duration.|

<h2 id="tocS_GenderTile">GenderTile</h2>
<!-- backwards compatibility -->
<a id="schemagendertile"></a>
<a id="schema_GenderTile"></a>
<a id="tocSgendertile"></a>
<a id="tocsgendertile"></a>

```json
{
  "gender": "male",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|none|users' gender|
|percentage|number(double)|false|none|Percentage|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|male|
|gender|female|
|gender|unknown|

<h2 id="tocS_AgeTile">AgeTile</h2>
<!-- backwards compatibility -->
<a id="schemaagetile"></a>
<a id="schema_AgeTile"></a>
<a id="tocSagetile"></a>
<a id="tocsagetile"></a>

```json
{
  "age": "from0to14",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|string|false|none|users' age|
|percentage|number(double)|false|none|Percentage|

#### Enumerated Values

|Property|Value|
|---|---|
|age|from0to14|
|age|from15to19|
|age|from20to24|
|age|from25to29|
|age|from30to34|
|age|from35to39|
|age|from40to44|
|age|from45to49|
|age|from50|
|age|from50to54|
|age|from55to59|
|age|from60to64|
|age|from65to69|
|age|from70|
|age|unknown|

<h2 id="tocS_AreaTile">AreaTile</h2>
<!-- backwards compatibility -->
<a id="schemaareatile"></a>
<a id="schema_AreaTile"></a>
<a id="tocSareatile"></a>
<a id="tocsareatile"></a>

```json
{
  "area": "string",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|string|false|none|users' country and region|
|percentage|number(double)|false|none|Percentage|

<h2 id="tocS_AppTypeTile">AppTypeTile</h2>
<!-- backwards compatibility -->
<a id="schemaapptypetile"></a>
<a id="schema_AppTypeTile"></a>
<a id="tocSapptypetile"></a>
<a id="tocsapptypetile"></a>

```json
{
  "appType": "ios",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appType|string|false|none|users' OS|
|percentage|number(double)|false|none|Percentage|

#### Enumerated Values

|Property|Value|
|---|---|
|appType|ios|
|appType|android|
|appType|others|

<h2 id="tocS_SubscriptionPeriodTile">SubscriptionPeriodTile</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionperiodtile"></a>
<a id="schema_SubscriptionPeriodTile"></a>
<a id="tocSsubscriptionperiodtile"></a>
<a id="tocssubscriptionperiodtile"></a>

```json
{
  "subscriptionPeriod": "within7days",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptionPeriod|string|false|none|Subscription period. Possible values: `within7days`, `within90days`, `unknown` etc.|
|percentage|number(double)|false|none|Percentage. Possible values: [0.0,100.0] e.g. 0, 2.9, 37.6.|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptionPeriod|within7days|
|subscriptionPeriod|within30days|
|subscriptionPeriod|within90days|
|subscriptionPeriod|within180days|
|subscriptionPeriod|within365days|
|subscriptionPeriod|over365days|
|subscriptionPeriod|unknown|

<h2 id="tocS_GetNumberOfMessageDeliveriesResponse">GetNumberOfMessageDeliveriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnumberofmessagedeliveriesresponse"></a>
<a id="schema_GetNumberOfMessageDeliveriesResponse"></a>
<a id="tocSgetnumberofmessagedeliveriesresponse"></a>
<a id="tocsgetnumberofmessagedeliveriesresponse"></a>

```json
{
  "status": "ready",
  "broadcast": 0,
  "targeting": 0,
  "autoResponse": 0,
  "welcomeResponse": 0,
  "chat": 0,
  "apiBroadcast": 0,
  "apiPush": 0,
  "apiMulticast": 0,
  "apiNarrowcast": 0,
  "apiReply": 0
}
```

Get number of message deliveries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status of the counting process.|
|broadcast|integer(int64)|false|none|Number of messages sent to all of this LINE Official Account's friends (broadcast messages).|
|targeting|integer(int64)|false|none|Number of messages sent to some of this LINE Official Account's friends, based on specific attributes (targeted messages).|
|autoResponse|integer(int64)|false|none|Number of auto-response messages sent.|
|welcomeResponse|integer(int64)|false|none|Number of greeting messages sent.|
|chat|integer(int64)|false|none|Number of messages sent from LINE Official Account Manager [Chat screen](https://www.linebiz.com/jp/manual/OfficialAccountManager/chats/) (only available in Japanese).|
|apiBroadcast|integer(int64)|false|none|Number of broadcast messages sent with the `Send broadcast message` Messaging API operation.|
|apiPush|integer(int64)|false|none|Number of push messages sent with the `Send push message` Messaging API operation.|
|apiMulticast|integer(int64)|false|none|Number of multicast messages sent with the `Send multicast message` Messaging API operation.|
|apiNarrowcast|integer(int64)|false|none|Number of narrowcast messages sent with the `Send narrowcast message` Messaging API operation.|
|apiReply|integer(int64)|false|none|Number of replies sent with the `Send reply message` Messaging API operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|unready|
|status|out_of_service|

<h2 id="tocS_GetNumberOfFollowersResponse">GetNumberOfFollowersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnumberoffollowersresponse"></a>
<a id="schema_GetNumberOfFollowersResponse"></a>
<a id="tocSgetnumberoffollowersresponse"></a>
<a id="tocsgetnumberoffollowersresponse"></a>

```json
{
  "status": "ready",
  "followers": 0,
  "targetedReaches": 0,
  "blocks": 0
}
```

Get number of followers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Calculation status.|
|followers|integer(int64)|false|none|The number of times, as of the specified date, that a user added this LINE Official Account as a friend for the first time.<br>The number doesn't decrease even if a user later blocks the account or when they delete their LINE account.<br>|
|targetedReaches|integer(int64)|false|none|The number of users, as of the specified date, that the LINE Official Account can reach through targeted messages based on gender, age, and/or region.<br>This number only includes users who are active on LINE or LINE services and whose demographics have a high level of certainty.<br>|
|blocks|integer(int64)|false|none|The number of users blocking the account as of the specified date.<br>The number decreases when a user unblocks the account.<br><br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|unready|
|status|out_of_service|

<h2 id="tocS_GetMessageEventResponse">GetMessageEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmessageeventresponse"></a>
<a id="schema_GetMessageEventResponse"></a>
<a id="tocSgetmessageeventresponse"></a>
<a id="tocsgetmessageeventresponse"></a>

```json
{
  "overview": {
    "requestId": "string",
    "timestamp": 0,
    "delivered": 0,
    "uniqueImpression": 0,
    "uniqueClick": 0,
    "uniqueMediaPlayed": 0,
    "uniqueMediaPlayed100Percent": 0
  },
  "messages": [
    {
      "seq": 0,
      "impression": 0,
      "mediaPlayed": 0,
      "mediaPlayed25Percent": 0,
      "mediaPlayed50Percent": 0,
      "mediaPlayed75Percent": 0,
      "mediaPlayed100Percent": 0,
      "uniqueMediaPlayed": 0,
      "uniqueMediaPlayed25Percent": 0,
      "uniqueMediaPlayed50Percent": 0,
      "uniqueMediaPlayed75Percent": 0,
      "uniqueMediaPlayed100Percent": 0
    }
  ],
  "clicks": [
    {
      "seq": 0,
      "url": "string",
      "click": 0,
      "uniqueClick": 0,
      "uniqueClickOfRequest": 0
    }
  ]
}
```

Statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overview|[GetMessageEventResponseOverview](#schemagetmessageeventresponseoverview)|false|none|Summary of message statistics.|
|messages|[[GetMessageEventResponseMessage](#schemagetmessageeventresponsemessage)]|false|none|Array of information about individual message bubbles.|
|clicks|[[GetMessageEventResponseClick](#schemagetmessageeventresponseclick)]|false|none|Array of information about opened URLs in the message.|

<h2 id="tocS_GetMessageEventResponseOverview">GetMessageEventResponseOverview</h2>
<!-- backwards compatibility -->
<a id="schemagetmessageeventresponseoverview"></a>
<a id="schema_GetMessageEventResponseOverview"></a>
<a id="tocSgetmessageeventresponseoverview"></a>
<a id="tocsgetmessageeventresponseoverview"></a>

```json
{
  "requestId": "string",
  "timestamp": 0,
  "delivered": 0,
  "uniqueImpression": 0,
  "uniqueClick": 0,
  "uniqueMediaPlayed": 0,
  "uniqueMediaPlayed100Percent": 0
}
```

Summary of message statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string|false|none|Request ID.|
|timestamp|integer(int64)|false|none|UNIX timestamp for message delivery time in seconds.|
|delivered|integer(int64)|false|none|Number of messages delivered.<br>This property shows values of less than 20.<br>However, if all messages have not been sent, it will be null.<br>|
|uniqueImpression|integer(int64) \| null|false|none|Number of users who opened the message, meaning they displayed at least 1 bubble.|
|uniqueClick|integer(int64) \| null|false|none|Number of users who opened any URL in the message.|
|uniqueMediaPlayed|integer(int64) \| null|false|none|Number of users who started playing any video or audio in the message.|
|uniqueMediaPlayed100Percent|integer(int64) \| null|false|none|Number of users who played the entirety of any video or audio in the message.|

<h2 id="tocS_GetMessageEventResponseMessage">GetMessageEventResponseMessage</h2>
<!-- backwards compatibility -->
<a id="schemagetmessageeventresponsemessage"></a>
<a id="schema_GetMessageEventResponseMessage"></a>
<a id="tocSgetmessageeventresponsemessage"></a>
<a id="tocsgetmessageeventresponsemessage"></a>

```json
{
  "seq": 0,
  "impression": 0,
  "mediaPlayed": 0,
  "mediaPlayed25Percent": 0,
  "mediaPlayed50Percent": 0,
  "mediaPlayed75Percent": 0,
  "mediaPlayed100Percent": 0,
  "uniqueMediaPlayed": 0,
  "uniqueMediaPlayed25Percent": 0,
  "uniqueMediaPlayed50Percent": 0,
  "uniqueMediaPlayed75Percent": 0,
  "uniqueMediaPlayed100Percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seq|integer(int32)|false|none|Bubble's serial number.|
|impression|integer(int64) \| null|false|none|Number of times the bubble was displayed.|
|mediaPlayed|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing.|
|mediaPlayed25Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 25% of the total time.|
|mediaPlayed50Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 50% of the total time.|
|mediaPlayed75Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 75% of the total time.|
|mediaPlayed100Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 100% of the total time.|
|uniqueMediaPlayed|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble.|
|uniqueMediaPlayed25Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 25% of the total time.|
|uniqueMediaPlayed50Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 50% of the total time.|
|uniqueMediaPlayed75Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 75% of the total time.|
|uniqueMediaPlayed100Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 100% of the total time.|

<h2 id="tocS_GetMessageEventResponseClick">GetMessageEventResponseClick</h2>
<!-- backwards compatibility -->
<a id="schemagetmessageeventresponseclick"></a>
<a id="schema_GetMessageEventResponseClick"></a>
<a id="tocSgetmessageeventresponseclick"></a>
<a id="tocsgetmessageeventresponseclick"></a>

```json
{
  "seq": 0,
  "url": "string",
  "click": 0,
  "uniqueClick": 0,
  "uniqueClickOfRequest": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seq|integer(int32)|false|none|The URL's serial number.|
|url|string|false|none|URL.|
|click|integer(int64) \| null|false|none|Number of times the URL was opened.|
|uniqueClick|integer(int64) \| null|false|none|Number of users that opened the URL.|
|uniqueClickOfRequest|integer(int64) \| null|false|none|Number of users who opened this url through any link in the message. If a message contains two links to the same URL and a user opens both links, they're counted only once.|

<h2 id="tocS_GetStatisticsPerUnitResponse">GetStatisticsPerUnitResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstatisticsperunitresponse"></a>
<a id="schema_GetStatisticsPerUnitResponse"></a>
<a id="tocSgetstatisticsperunitresponse"></a>
<a id="tocsgetstatisticsperunitresponse"></a>

```json
{
  "overview": {
    "uniqueImpression": 0,
    "uniqueClick": 0,
    "uniqueMediaPlayed": 0,
    "uniqueMediaPlayed100Percent": 0
  },
  "messages": [
    {
      "seq": 0,
      "impression": 0,
      "mediaPlayed": 0,
      "mediaPlayed25Percent": 0,
      "mediaPlayed50Percent": 0,
      "mediaPlayed75Percent": 0,
      "mediaPlayed100Percent": 0,
      "uniqueImpression": 0,
      "uniqueMediaPlayed": 0,
      "uniqueMediaPlayed25Percent": 0,
      "uniqueMediaPlayed50Percent": 0,
      "uniqueMediaPlayed75Percent": 0,
      "uniqueMediaPlayed100Percent": 0
    }
  ],
  "clicks": [
    {
      "seq": 0,
      "url": "string",
      "click": 0,
      "uniqueClick": 0,
      "uniqueClickOfRequest": 0
    }
  ]
}
```

Response object for `get statistics per unit`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overview|[GetStatisticsPerUnitResponseOverview](#schemagetstatisticsperunitresponseoverview)|true|none|Statistics related to messages.|
|messages|[[GetStatisticsPerUnitResponseMessage](#schemagetstatisticsperunitresponsemessage)]|true|none|Array of information about individual message bubbles.|
|clicks|[[GetStatisticsPerUnitResponseClick](#schemagetstatisticsperunitresponseclick)]|true|none|Array of information about opened URLs in the message.|

<h2 id="tocS_GetStatisticsPerUnitResponseOverview">GetStatisticsPerUnitResponseOverview</h2>
<!-- backwards compatibility -->
<a id="schemagetstatisticsperunitresponseoverview"></a>
<a id="schema_GetStatisticsPerUnitResponseOverview"></a>
<a id="tocSgetstatisticsperunitresponseoverview"></a>
<a id="tocsgetstatisticsperunitresponseoverview"></a>

```json
{
  "uniqueImpression": 0,
  "uniqueClick": 0,
  "uniqueMediaPlayed": 0,
  "uniqueMediaPlayed100Percent": 0
}
```

Statistics related to messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uniqueImpression|integer(int64) \| null|false|none|Number of users who opened the message, meaning they displayed at least 1 bubble.|
|uniqueClick|integer(int64) \| null|false|none|Number of users who opened any URL in the message.|
|uniqueMediaPlayed|integer(int64) \| null|false|none|Number of users who started playing any video or audio in the message.|
|uniqueMediaPlayed100Percent|integer(int64) \| null|false|none|Number of users who played the entirety of any video or audio in the message.|

<h2 id="tocS_GetStatisticsPerUnitResponseMessage">GetStatisticsPerUnitResponseMessage</h2>
<!-- backwards compatibility -->
<a id="schemagetstatisticsperunitresponsemessage"></a>
<a id="schema_GetStatisticsPerUnitResponseMessage"></a>
<a id="tocSgetstatisticsperunitresponsemessage"></a>
<a id="tocsgetstatisticsperunitresponsemessage"></a>

```json
{
  "seq": 0,
  "impression": 0,
  "mediaPlayed": 0,
  "mediaPlayed25Percent": 0,
  "mediaPlayed50Percent": 0,
  "mediaPlayed75Percent": 0,
  "mediaPlayed100Percent": 0,
  "uniqueImpression": 0,
  "uniqueMediaPlayed": 0,
  "uniqueMediaPlayed25Percent": 0,
  "uniqueMediaPlayed50Percent": 0,
  "uniqueMediaPlayed75Percent": 0,
  "uniqueMediaPlayed100Percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seq|integer(int32)|true|none|Bubble's serial number.|
|impression|integer(int64) \| null|false|none|Number of times the bubble was displayed.|
|mediaPlayed|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing.|
|mediaPlayed25Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 25% of the total time.|
|mediaPlayed50Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 50% of the total time.|
|mediaPlayed75Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 75% of the total time.|
|mediaPlayed100Percent|integer(int64) \| null|false|none|Number of times audio or video in the bubble started playing and was played 100% of the total time.|
|uniqueImpression|integer(int64) \| null|false|none|Number of users the bubble was displayed.|
|uniqueMediaPlayed|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble.|
|uniqueMediaPlayed25Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 25% of the total time.|
|uniqueMediaPlayed50Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 50% of the total time.|
|uniqueMediaPlayed75Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 75% of the total time.|
|uniqueMediaPlayed100Percent|integer(int64) \| null|false|none|Number of users that started playing audio or video in the bubble and played 100% of the total time.|

<h2 id="tocS_GetStatisticsPerUnitResponseClick">GetStatisticsPerUnitResponseClick</h2>
<!-- backwards compatibility -->
<a id="schemagetstatisticsperunitresponseclick"></a>
<a id="schema_GetStatisticsPerUnitResponseClick"></a>
<a id="tocSgetstatisticsperunitresponseclick"></a>
<a id="tocsgetstatisticsperunitresponseclick"></a>

```json
{
  "seq": 0,
  "url": "string",
  "click": 0,
  "uniqueClick": 0,
  "uniqueClickOfRequest": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seq|integer(int64)|true|none|The URL's serial number.|
|url|string|true|none|URL.|
|click|integer(int64) \| null|false|none|Number of times the URL in the bubble was opened.|
|uniqueClick|integer(int64) \| null|false|none|Number of users that opened the URL in the bubble.|
|uniqueClickOfRequest|integer(int64) \| null|false|none|Number of users who opened this url through any link in the message.<br>If another message bubble contains the same URL and a user opens both links, it's counted only once.<br>|

<h2 id="tocS_GetRichMenuInsightSummaryResponse">GetRichMenuInsightSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightsummaryresponse"></a>
<a id="schema_GetRichMenuInsightSummaryResponse"></a>
<a id="tocSgetrichmenuinsightsummaryresponse"></a>
<a id="tocsgetrichmenuinsightsummaryresponse"></a>

```json
{
  "richMenuId": "string",
  "metricsFrom": "20260213",
  "metricsTo": "20260215",
  "impression": {
    "metrics": {
      "count": 0,
      "uniqueUsers": 0
    }
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      },
      "metrics": {
        "count": 0,
        "uniqueUsers": 0
      }
    }
  ]
}
```

Summary of impression and click statistics for a rich menu created via the Messaging API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|Rich menu ID.|
|metricsFrom|string \| null|false|none|Start date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260213).|
|metricsTo|string \| null|false|none|End date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260215).|
|impression|[GetRichMenuInsightSummaryResponseImpression](#schemagetrichmenuinsightsummaryresponseimpression)|false|none|Impression metrics for the whole rich menu.|
|clicks|[[GetRichMenuInsightSummaryResponseClick](#schemagetrichmenuinsightsummaryresponseclick)]|false|none|Click metrics for each tappable area of the rich menu.|

<h2 id="tocS_GetRichMenuInsightSummaryResponseImpression">GetRichMenuInsightSummaryResponseImpression</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightsummaryresponseimpression"></a>
<a id="schema_GetRichMenuInsightSummaryResponseImpression"></a>
<a id="tocSgetrichmenuinsightsummaryresponseimpression"></a>
<a id="tocsgetrichmenuinsightsummaryresponseimpression"></a>

```json
{
  "metrics": {
    "count": 0,
    "uniqueUsers": 0
  }
}
```

Impression metrics for the whole rich menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[GetRichMenuInsightSummaryResponseMetrics](#schemagetrichmenuinsightsummaryresponsemetrics)|true|none|Aggregated number of events and unique users over the whole period.|

<h2 id="tocS_GetRichMenuInsightSummaryResponseClick">GetRichMenuInsightSummaryResponseClick</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightsummaryresponseclick"></a>
<a id="schema_GetRichMenuInsightSummaryResponseClick"></a>
<a id="tocSgetrichmenuinsightsummaryresponseclick"></a>
<a id="tocsgetrichmenuinsightsummaryresponseclick"></a>

```json
{
  "bounds": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "metrics": {
    "count": 0,
    "uniqueUsers": 0
  }
}
```

Click metrics for a single tappable area of the rich menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bounds|[GetRichMenuInsightSummaryResponseBounds](#schemagetrichmenuinsightsummaryresponsebounds)|true|none|Target area of the metrics, represented by the top-left coordinate, width, and height.|
|metrics|[GetRichMenuInsightSummaryResponseMetrics](#schemagetrichmenuinsightsummaryresponsemetrics)|true|none|Aggregated number of events and unique users over the whole period.|

<h2 id="tocS_GetRichMenuInsightSummaryResponseBounds">GetRichMenuInsightSummaryResponseBounds</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightsummaryresponsebounds"></a>
<a id="schema_GetRichMenuInsightSummaryResponseBounds"></a>
<a id="tocSgetrichmenuinsightsummaryresponsebounds"></a>
<a id="tocsgetrichmenuinsightsummaryresponsebounds"></a>

```json
{
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

Target area of the metrics, represented by the top-left coordinate, width, and height.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|The x coordinate of the top-left corner of the target area.|
|y|integer(int32)|true|none|The y coordinate of the top-left corner of the target area.|
|width|integer(int32)|true|none|The width of the target area.|
|height|integer(int32)|true|none|The height of the target area.|

<h2 id="tocS_GetRichMenuInsightSummaryResponseMetrics">GetRichMenuInsightSummaryResponseMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightsummaryresponsemetrics"></a>
<a id="schema_GetRichMenuInsightSummaryResponseMetrics"></a>
<a id="tocSgetrichmenuinsightsummaryresponsemetrics"></a>
<a id="tocsgetrichmenuinsightsummaryresponsemetrics"></a>

```json
{
  "count": 0,
  "uniqueUsers": 0
}
```

Aggregated number of events and unique users over the whole period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|Number of impressions or clicks.|
|uniqueUsers|integer(int64)|true|none|Approximate number of unique users who triggered an impression or click.|

<h2 id="tocS_GetRichMenuInsightDailyResponse">GetRichMenuInsightDailyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightdailyresponse"></a>
<a id="schema_GetRichMenuInsightDailyResponse"></a>
<a id="tocSgetrichmenuinsightdailyresponse"></a>
<a id="tocsgetrichmenuinsightdailyresponse"></a>

```json
{
  "richMenuId": "string",
  "metricsFrom": "20260213",
  "metricsTo": "20260215",
  "impression": {
    "metrics": [
      {
        "date": "20260213",
        "count": 0,
        "uniqueUsers": 0
      }
    ]
  },
  "clicks": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      },
      "metrics": [
        {
          "date": "20260213",
          "count": 0,
          "uniqueUsers": 0
        }
      ]
    }
  ]
}
```

Daily impression and click statistics for a rich menu created via the Messaging API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|richMenuId|string|true|none|Rich menu ID.|
|metricsFrom|string \| null|false|none|Start date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260213).|
|metricsTo|string \| null|false|none|End date (JST) of the period actually covered by the returned metrics. Format: yyyyMMdd (e.g. 20260215).|
|impression|[GetRichMenuInsightDailyResponseImpression](#schemagetrichmenuinsightdailyresponseimpression)|false|none|Daily impression metrics for the whole rich menu.|
|clicks|[[GetRichMenuInsightDailyResponseClick](#schemagetrichmenuinsightdailyresponseclick)]|false|none|Daily click metrics for each tappable area of the rich menu.|

<h2 id="tocS_GetRichMenuInsightDailyResponseImpression">GetRichMenuInsightDailyResponseImpression</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightdailyresponseimpression"></a>
<a id="schema_GetRichMenuInsightDailyResponseImpression"></a>
<a id="tocSgetrichmenuinsightdailyresponseimpression"></a>
<a id="tocsgetrichmenuinsightdailyresponseimpression"></a>

```json
{
  "metrics": [
    {
      "date": "20260213",
      "count": 0,
      "uniqueUsers": 0
    }
  ]
}
```

Daily impression metrics for the whole rich menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[GetRichMenuInsightDailyResponseDailyMetrics](#schemagetrichmenuinsightdailyresponsedailymetrics)]|true|none|Per-day impression metrics.|

<h2 id="tocS_GetRichMenuInsightDailyResponseClick">GetRichMenuInsightDailyResponseClick</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightdailyresponseclick"></a>
<a id="schema_GetRichMenuInsightDailyResponseClick"></a>
<a id="tocSgetrichmenuinsightdailyresponseclick"></a>
<a id="tocsgetrichmenuinsightdailyresponseclick"></a>

```json
{
  "bounds": {
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  },
  "metrics": [
    {
      "date": "20260213",
      "count": 0,
      "uniqueUsers": 0
    }
  ]
}
```

Daily click metrics for a single tappable area of the rich menu.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bounds|[GetRichMenuInsightDailyResponseBounds](#schemagetrichmenuinsightdailyresponsebounds)|true|none|Target area of the metrics, represented by the top-left coordinate, width, and height.|
|metrics|[[GetRichMenuInsightDailyResponseDailyMetrics](#schemagetrichmenuinsightdailyresponsedailymetrics)]|true|none|Per-day click metrics for the target area.|

<h2 id="tocS_GetRichMenuInsightDailyResponseBounds">GetRichMenuInsightDailyResponseBounds</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightdailyresponsebounds"></a>
<a id="schema_GetRichMenuInsightDailyResponseBounds"></a>
<a id="tocSgetrichmenuinsightdailyresponsebounds"></a>
<a id="tocsgetrichmenuinsightdailyresponsebounds"></a>

```json
{
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

Target area of the metrics, represented by the top-left coordinate, width, and height.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|The x coordinate of the top-left corner of the target area.|
|y|integer(int32)|true|none|The y coordinate of the top-left corner of the target area.|
|width|integer(int32)|true|none|The width of the target area.|
|height|integer(int32)|true|none|The height of the target area.|

<h2 id="tocS_GetRichMenuInsightDailyResponseDailyMetrics">GetRichMenuInsightDailyResponseDailyMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagetrichmenuinsightdailyresponsedailymetrics"></a>
<a id="schema_GetRichMenuInsightDailyResponseDailyMetrics"></a>
<a id="tocSgetrichmenuinsightdailyresponsedailymetrics"></a>
<a id="tocsgetrichmenuinsightdailyresponsedailymetrics"></a>

```json
{
  "date": "20260213",
  "count": 0,
  "uniqueUsers": 0
}
```

Aggregated number of events and unique users for a single day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|true|none|The date (JST) of these metrics. Format: yyyyMMdd (e.g. 20260213).|
|count|integer(int64)|true|none|Number of impressions or clicks on this day.|
|uniqueUsers|integer(int64)|true|none|Approximate number of unique users who triggered an impression or click on this day.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "string",
  "details": [
    {
      "message": "string",
      "property": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Message containing information about the error.|
|details|[[ErrorDetail](#schemaerrordetail)]|false|none|An array of error details. If the array is empty, this property will not be included in the response.|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "message": "string",
  "property": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Details of the error. Not included in the response under certain situations.|
|property|string|false|none|Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.|
