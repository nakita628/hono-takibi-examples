<h1 id="twitch-api-swagger-ui-unofficial">Twitch API Swagger UI (Unofficial) vhelix</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Unofficial Swagger UI for Twitch API.

All endpoints are generated automatically from the [twitch docs](https://dev.twitch.tv/docs/api/reference) page.

__Features:__

* Swagger UI for all Twitch API endpoints
* Schemas for _Request Query Parameters_, _Request Body_, _Response Body_
* Some additional schemas like _Clip_, _ChatBadge_, _Prediction_, _Game_, _Channel_, _Video_ etc.
* Response codes and examples
* Generated types for TypeScript: [ts-twitch-api](https://github.com/DmitryScaletta/ts-twitch-api)

__Repository:__ [github.com/DmitryScaletta/twitch-api-swagger](https://github.com/DmitryScaletta/twitch-api-swagger)

Base URLs:

* <a href="https://api.twitch.tv/helix">https://api.twitch.tv/helix</a> - Helix

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://id.twitch.tv/oauth2/authorize](https://id.twitch.tv/oauth2/authorize)
    - Refresh URL = [https://id.twitch.tv/oauth2/token](https://id.twitch.tv/oauth2/token)

|Scope|Scope Description|
|---|---|
|analytics:read:extensions|View analytics data for the Twitch Extensions owned by the authenticated account.|
|analytics:read:games|View analytics data for the games owned by the authenticated account.|
|bits:read|View Bits-related products and redemptions for a channel.|
|channel:bot|Joins your channel’s chatroom as a bot user, and perform chat-related actions as that user.|
|channel:manage:ads|Manage ads schedule on a channel.|
|channel:read:ads|Read the ads schedule and details on your channel.|
|channel:manage:broadcast|Manage a channel’s broadcast configuration, including updating channel configuration and managing stream markers and stream tags.|
|channel:read:charity|Read charity campaign details and user donations on your channel.|
|channel:manage:clips|Manage Clips for a channel.|
|channel:edit:commercial|Run commercials on a channel.|
|channel:read:editors|View a list of users with the editor role for a channel.|
|channel:manage:extensions|Manage a channel’s Extension configuration, including activating Extensions.|
|channel:read:goals|View Creator Goals for a channel.|
|channel:read:guest_star|Read Guest Star details for your channel.|
|channel:manage:guest_star|Manage Guest Star for your channel.|
|channel:read:hype_train|View Hype Train information for a channel.|
|channel:manage:moderators|Add or remove the moderator role from users in your channel.|
|channel:read:polls|View a channel’s polls.|
|channel:manage:polls|Manage a channel’s polls.|
|channel:read:predictions|View a channel’s Channel Points Predictions.|
|channel:manage:predictions|Manage of channel’s Channel Points Predictions|
|channel:manage:raids|Manage a channel raiding another channel.|
|channel:read:redemptions|View Channel Points custom rewards and their redemptions on a channel.|
|channel:manage:redemptions|Manage Channel Points custom rewards and their redemptions on a channel.|
|channel:manage:schedule|Manage a channel’s stream schedule.|
|channel:read:stream_key|View an authorized user’s stream key.|
|channel:read:subscriptions|View a list of all subscribers to a channel and check if a user is subscribed to a channel.|
|channel:manage:videos|Manage a channel’s videos, including deleting videos.|
|channel:read:vips|Read the list of VIPs in your channel.|
|channel:manage:vips|Add or remove the VIP role from users in your channel.|
|channel:moderate|Perform moderation actions in a channel.|
|clips:edit|Manage Clips for a channel.|
|editor:manage:clips|Manage Clips as an editor.|
|moderation:read|View a channel’s moderation data including Moderators, Bans, Timeouts, and Automod settings.|
|moderator:manage:announcements|Send announcements in channels where you have the moderator role.|
|moderator:manage:automod|Manage messages held for review by AutoMod in channels where you are a moderator.|
|moderator:read:automod_settings|View a broadcaster’s AutoMod settings.|
|moderator:manage:automod_settings|Manage a broadcaster’s AutoMod settings.|
|moderator:read:banned_users|Read the list of bans or unbans in channels where you have the moderator role.|
|moderator:manage:banned_users|Ban and unban users.|
|moderator:read:blocked_terms|View a broadcaster’s list of blocked terms.|
|moderator:manage:blocked_terms|Manage a broadcaster’s list of blocked terms.|
|moderator:read:chat_messages|Read deleted chat messages in channels where you have the moderator role and get pinned chat messages.|
|moderator:manage:chat_messages|Delete chat messages in channels where you have the moderator role and manage pinned chat messages.|
|moderator:read:chat_settings|View a broadcaster’s chat room settings.|
|moderator:manage:chat_settings|Manage a broadcaster’s chat room settings.|
|moderator:read:chatters|View the chatters in a broadcaster’s chat room.|
|moderator:read:followers|Read the followers of a broadcaster.|
|moderator:read:guest_star|Read Guest Star details for channels where you are a Guest Star moderator.|
|moderator:manage:guest_star|Manage Guest Star for channels where you are a Guest Star moderator.|
|moderator:read:moderators|Read the list of moderators in channels where you have the moderator role.|
|moderator:read:shield_mode|View a broadcaster’s Shield Mode status.|
|moderator:manage:shield_mode|Manage a broadcaster’s Shield Mode status.|
|moderator:read:shoutouts|View a broadcaster’s shoutouts.|
|moderator:manage:shoutouts|Manage a broadcaster’s shoutouts.|
|moderator:read:suspicious_users|Read chat messages from suspicious users and see users flagged as suspicious in channels where the user has the moderator role.|
|moderator:manage:suspicious_users|Manage suspicious user statuses in channels where the user has the moderator role.|
|moderator:read:unban_requests|View a broadcaster’s unban requests.|
|moderator:manage:unban_requests|Manage a broadcaster’s unban requests.|
|moderator:read:vips|Read the list of VIPs in channels where you have the moderator role.|
|moderator:read:warnings|Read warnings in channels where you have the moderator role.|
|moderator:manage:warnings|Warn users in channels where you have the moderator role.|
|user:bot|Join a specified chat channel as your user and appear as a bot, and perform chat-related actions as your user.|
|user:edit|Manage a user object.|
|user:edit:broadcast|View and edit a user’s broadcasting configuration, including Extension configurations.|
|user:read:blocked_users|View the block list of a user.|
|user:manage:blocked_users|Manage the block list of a user.|
|user:read:broadcast|View a user’s broadcasting configuration, including Extension configurations.|
|user:read:chat|Receive chatroom messages and informational notifications relating to a channel’s chatroom.|
|user:manage:chat_color|Update the color used for the user’s name in chat.|
|user:read:email|View a user’s email address.|
|user:read:emotes|View emotes available to a user|
|user:read:follows|View the list of channels a user follows.|
|user:read:moderated_channels|Read the list of channels you have moderator privileges in.|
|user:read:subscriptions|View if an authorized user is subscribed to specific channels.|
|user:read:whispers|Receive whispers sent to your user.|
|user:manage:whispers|Receive whispers sent to your user, and send whispers on your user’s behalf.|
|user:write:chat|Send chat messages to a chatroom.|
|chat:edit|Send chat messages to a chatroom using an IRC connection.|
|chat:read|View chat messages sent in a chatroom using an IRC connection.|
|whispers:read|Receive whisper messages for your user using PubSub.|

<h1 id="twitch-api-swagger-ui-unofficial-ads">Ads</h1>

## Starts a commercial on the specified channel.

<a id="opIdstart-commercial"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/channels/commercial \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "141981764",
    "length": 60
  }'
```

`POST /channels/commercial`

Starts a commercial on the specified channel.

**NOTE**: Only partners and affiliates may run commercials and they must be streaming live at the time.

**NOTE**: Only the broadcaster may start a commercial; the broadcaster’s editors and moderators may not start commercials on behalf of the broadcaster.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:edit:commercial** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:edit:commercial** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#start-commercial">Start Commercial</a>

> Body parameter

```json
{
  "broadcaster_id": "141981764",
  "length": 60
}
```

<h3 id="starts-a-commercial-on-the-specified-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StartCommercialBody](#schemastartcommercialbody)|false|none|
|» broadcaster_id|body|string|true|The ID of the partner or affiliate broadcaster that wants to run the commercial. This ID must match the user ID found in the OAuth token.|
|» length|body|integer(int32)|true|The length of the commercial to run, in seconds. Twitch tries to serve a commercial that’s the requested length, but it may be shorter or longer. The maximum length you should request is 180 seconds.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "length": 60,
      "message": "",
      "retry_after": 480
    }
  ]
}
```

<h3 id="starts-a-commercial-on-the-specified-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully started the commercial.|[StartCommercialResponse](#schemastartcommercialresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _length_ query parameter is required.<br>* The ID in _broadcaster\_id_ is not valid.<br>* To start a commercial, the broadcaster must be streaming live.<br>* The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials.|None|
|401|Unauthorized|* The ID in `broadcaster_id` must match the user ID found in the request’s OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:edit:commercial** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|404|Not Found|* The ID in `broadcaster_id` was not found.|None|
|429|Too Many Requests|* The broadcaster may not run another commercial until the cooldown period expires. The `retry_after` field in the previous start commercial response specifies the amount of time the broadcaster must wait between running commercials.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:edit:commercial )
</aside>

## Returns ad schedule related information.

<a id="opIdget-ad-schedule"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/ads?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels/ads`

This endpoint returns ad schedule related information, including snooze, when the last ad was run, when the next ad is scheduled, and if the channel is currently in pre-roll free time. Note that a new ad cannot be run until 8 minutes after running a previous ad.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:ads** scope. The user ID associated with the token must match the `broadcaster_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:read:ads** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-ad-schedule">Get Ad Schedule</a>

<h3 id="returns-ad-schedule-related-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|Provided `broadcaster_id` must match the `user_id` in the auth token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "next_ad_at": "2023-08-01T23:08:18+00:00",
      "last_ad_at": "2023-08-01T23:08:18+00:00",
      "duration": "60",
      "preroll_free_time": "90",
      "snooze_count": "1",
      "snooze_refresh_at": "2023-08-01T23:08:18+00:00"
    }
  ]
}
```

<h3 id="returns-ad-schedule-related-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the ad schedule information for the channel.|[GetAdScheduleResponse](#schemagetadscheduleresponse)|
|400|Bad Request|The broadcaster ID is not valid.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:ads )
</aside>

## Pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes.

<a id="opIdsnooze-next-ad"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/ads/schedule/snooze?broadcaster_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /channels/ads/schedule/snooze`

If available, pushes back the timestamp of the upcoming automatic mid-roll ad by 5 minutes. This endpoint duplicates the snooze functionality in the creator dashboard’s Ads Manager.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:ads** scope. The user ID associated with the token must match the `broadcaster_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **channel:manage:ads** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#snooze-next-ad">Snooze Next Ad</a>

<h3 id="pushes-back-the-timestamp-of-the-upcoming-automatic-mid-roll-ad-by-5-minutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|Provided `broadcaster_id` must match the `user_id` in the auth token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "snooze_count": "1",
      "snooze_refresh_at": "2023-08-01T23:08:18+00:00",
      "next_ad_at": "2023-08-01T23:08:18+00:00"
    }
  ]
}
```

<h3 id="pushes-back-the-timestamp-of-the-upcoming-automatic-mid-roll-ad-by-5-minutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User’s next ad is successfully snoozed. Their _snooze\_count_ is decremented and _snooze\_refresh\_time_ and _next\_ad\_at_ are both updated.|[SnoozeNextAdResponse](#schemasnoozenextadresponse)|
|400|Bad Request|* The channel is not currently live.<br>* The broadcaster ID is not valid.<br>* Channel does not have an upcoming scheduled ad break.|None|
|429|Too Many Requests|Channel has no snoozes left.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:ads )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-analytics">Analytics</h1>

## Gets an analytics report for one or more extensions.

<a id="opIdget-extension-analytics"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/analytics/extensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analytics/extensions`

Gets an analytics report for one or more extensions. The response contains the URLs used to download the reports (CSV files). [Learn More](https://dev.twitch.tv/docs/insights)

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:extensions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-analytics">Get Extension Analytics</a>

<h3 id="gets-an-analytics-report-for-one-or-more-extensions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|false|The extension's client ID. If specified, the response contains a report for the specified extension. If not specified, the response includes a report for each extension that the authenticated user owns.|
|type|query|string|false|The type of analytics report to get. Possible values are:  <br>  <br>* overview\_v2|
|started_at|query|string(date-time)|false|The reporting window's start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z).  <br>  <br>The start date must be on or after January 31, 2018\. If you specify an earlier date, the API ignores it and uses January 31, 2018\. If you specify a start date, you must specify an end date. If you don't specify a start and end date, the report includes all available data since January 31, 2018.  <br>  <br>The report contains one row of data for each day in the reporting window.|
|ended_at|query|string(date-time)|false|The reporting window's end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-27T00:00:00Z). The report is inclusive of the end date.  <br>  <br>Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that's earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.|
|first|query|integer(int32)|false|The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.  <br>  <br>**NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  <br>  <br>This parameter is ignored if the _extension\_id_ parameter is set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|overview_v2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "extension_id": "efgh",
      "URL": "https://twitch-piper-reports.s3-us-west-2.amazonaws.com/dynamic/LoL%20ADC...",
      "type": "overview_v2",
      "date_range": {
        "started_at": "2018-03-01T00:00:00Z",
        "ended_at": "2018-06-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-an-analytics-report-for-one-or-more-extensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster's analytics reports.|[GetExtensionAnalyticsResponse](#schemagetextensionanalyticsresponse)|
|400|Bad Request|* The start and end dates are optional but if you specify one, you must specify the other.<br>* The end date must be equal to or later than the start date.<br>* The cursor specified in the _after_ query parameter is not valid.<br>* The resource supports only forward pagination (use the _after_ query parameter).<br>* The _first_ query parameter is outside the allowed range of values.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **analytics:read:extensions** scope.<br>* The OAuth token is not valid.<br>* The Client-Id header is required.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|404|Not Found|* The extension specified in the _extension\_id_ query parameter was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: analytics:read:extensions )
</aside>

## Gets an analytics report for one or more games.

<a id="opIdget-game-analytics"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/analytics/games \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analytics/games`

Gets an analytics report for one or more games. The response contains the URLs used to download the reports (CSV files). [Learn more](https://dev.twitch.tv/docs/insights)

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **analytics:read:games** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-game-analytics">Get Game Analytics</a>

<h3 id="gets-an-analytics-report-for-one-or-more-games-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|game_id|query|string|false|The game’s client ID. If specified, the response contains a report for the specified game. If not specified, the response includes a report for each of the authenticated user’s games.|
|type|query|string|false|The type of analytics report to get. Possible values are:  <br>  <br>* overview\_v2|
|started_at|query|string(date-time)|false|The reporting window’s start date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). If you specify a start date, you must specify an end date.  <br>  <br>The start date must be within one year of today’s date. If you specify an earlier date, the API ignores it and uses a date that’s one year prior to today’s date. If you don’t specify a start and end date, the report includes all available data for the last 365 days from today.  <br>  <br>The report contains one row of data for each day in the reporting window.|
|ended_at|query|string(date-time)|false|The reporting window’s end date, in RFC3339 format. Set the time portion to zeroes (for example, 2021-10-22T00:00:00Z). The report is inclusive of the end date.  <br>  <br>Specify an end date only if you provide a start date. Because it can take up to two days for the data to be available, you must specify an end date that’s earlier than today minus one to two days. If not, the API ignores your end date and uses an end date that is today minus one to two days.|
|first|query|integer(int32)|false|The maximum number of report URLs to return per page in the response. The minimum page size is 1 URL per page and the maximum is 100 URLs per page. The default is 20.  <br>  <br>**NOTE**: While you may specify a maximum value of 100, the response will contain at most 20 URLs per page.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  <br>  <br>This parameter is ignored if _game\_id_ parameter is set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|overview_v2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "game_id": "493057",
      "URL": "https://twitch-piper-reports.s3-us-west-2.amazonaws.com/games/66170/overview/15183...",
      "type": "overview_v2",
      "date_range": {
        "started_at": "2018-01-01T00:00:00Z",
        "ended_at": "2018-03-01T00:00:00Z"
      }
    }
  ]
}
```

<h3 id="gets-an-analytics-report-for-one-or-more-games-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s analytics reports.|[GetGameAnalyticsResponse](#schemagetgameanalyticsresponse)|
|400|Bad Request|* The start and end dates are optional but if you specify one, you must specify the other.<br>* The end date must be equal to or later than the start date.<br>* The cursor specified in the _after_ query parameter is not valid.<br>* The resource supports only forward pagination (use the _after_ query parameter).<br>* The _first_ query parameter is outside the allowed range of values.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **analytics:read:games** scope.<br>* The OAuth token is not valid.<br>* The Client-Id header is required.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|404|Not Found|* The game specified in the _game\_id_ query parameter was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: analytics:read:games )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-bits">Bits</h1>

## Gets the Bits leaderboard for the authenticated broadcaster.

<a id="opIdget-bits-leaderboard"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/bits/leaderboard \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bits/leaderboard`

Gets the Bits leaderboard for the authenticated broadcaster.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **bits:read** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard">Get Bits Leaderboard</a>

<h3 id="gets-the-bits-leaderboard-for-the-authenticated-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer(int32)|false|The number of results to return. The minimum count is 1 and the maximum is 100\. The default is 10.|
|period|query|string|false|The time period over which data is aggregated (uses the PST time zone). Possible values are:  <br>  <br>* day — A day spans from 00:00:00 on the day specified in _started\_at_ and runs through 00:00:00 of the next day.<br>* week — A week spans from 00:00:00 on the Monday of the week specified in _started\_at_ and runs through 00:00:00 of the next Monday.<br>* month — A month spans from 00:00:00 on the first day of the month specified in _started\_at_ and runs through 00:00:00 of the first day of the next month.<br>* year — A year spans from 00:00:00 on the first day of the year specified in _started\_at_ and runs through 00:00:00 of the first day of the next year.<br>* all — Default. The lifetime of the broadcaster's channel.|
|started_at|query|string(date-time)|false|The start date, in RFC3339 format, used for determining the aggregation period. Specify this parameter only if you specify the _period_ query parameter. The start date is ignored if _period_ is all.  <br>  <br>Note that the date is converted to PST before being used, so if you set the start time to `2022-01-01T00:00:00.0Z` and _period_ to month, the actual reporting period is December 2021, not January 2022\. If you want the reporting period to be January 2022, you must set the start time to `2022-01-01T08:00:00.0Z` or `2022-01-01T00:00:00.0-08:00`.  <br>  <br>If your start date uses the ‘+’ offset operator (for example, `2022-01-01T00:00:00.0+05:00`), you must URL encode the start date.|
|user_id|query|string|false|An ID that identifies a user that cheered bits in the channel. If _count_ is greater than 1, the response may include users ranked above and below the specified user. To get the leaderboard’s top leaders, don’t specify a user ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|day|
|period|week|
|period|month|
|period|year|
|period|all|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "158010205",
      "user_login": "tundracowboy",
      "user_name": "TundraCowboy",
      "rank": 1,
      "score": 12543
    },
    {
      "user_id": "7168163",
      "user_login": "topramens",
      "user_name": "Topramens",
      "rank": 2,
      "score": 6900
    }
  ],
  "date_range": {
    "started_at": "2018-02-05T08:00:00Z",
    "ended_at": "2018-02-12T08:00:00Z"
  },
  "total": 2
}
```

<h3 id="gets-the-bits-leaderboard-for-the-authenticated-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s Bits leaderboard.|[GetBitsLeaderboardResponse](#schemagetbitsleaderboardresponse)|
|400|Bad Request|* The time period specified in the _period_ query parameter is not valid.<br>* The _started\_at_ query parameter is required if _period_ is not set to _all_.<br>* The value in the _count_ query parameter is outside the range of allowed values.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token must include the the **bits:read** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: bits:read )
</aside>

## Gets a list of Cheermotes that users can use to cheer Bits.

<a id="opIdget-cheermotes"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/bits/cheermotes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bits/cheermotes`

Gets a list of Cheermotes that users can use to cheer Bits in any Bits-enabled channel’s chat room. Cheermotes are animated emotes that viewers can assign Bits to.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-cheermotes">Get Cheermotes</a>

<h3 id="gets-a-list-of-cheermotes-that-users-can-use-to-cheer-bits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|false|The ID of the broadcaster whose custom Cheermotes you want to get. Specify the broadcaster’s ID if you want to include the broadcaster’s Cheermotes in the response (not all broadcasters upload Cheermotes). If not specified, the response contains only global Cheermotes.  <br>  <br>If the broadcaster uploaded Cheermotes, the `type` field in the response is set to **channel\_custom**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "prefix": "Cheer",
      "tiers": [
        {
          "min_bits": 1,
          "id": "1",
          "color": "#979797",
          "images": {
            "dark": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif"
              },
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/1.png",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/2.png",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/3.png",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/4.png",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/static/1/1.5.png"
              }
            },
            "light": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif"
              },
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png"
              }
            }
          },
          "can_cheer": true,
          "show_in_bits_card": true
        }
      ],
      "type": "global_first_party",
      "order": 1,
      "last_updated": "2018-05-22T00:06:04Z",
      "is_charitable": false
    }
  ]
}
```

<h3 id="gets-a-list-of-cheermotes-that-users-can-use-to-cheer-bits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the Cheermotes.|[GetCheermotesResponse](#schemagetcheermotesresponse)|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## NEW Gets a list of custom Power-ups that the specified broadcaster created.

<a id="opIdget-custom-power-up"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/bits/custom_power_ups?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bits/custom_power_ups`

NEW Gets a list of custom Power-ups that the specified broadcaster created.

**NOTE**: A channel may offer a maximum of 50 custom Power-ups, which includes both enabled and disabled Power-ups.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **bits:read** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-custom-power-up">Get Custom Power-up</a>

<h3 id="new-gets-a-list-of-custom-power-ups-that-the-specified-broadcaster-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose custom Power-ups you want to get. This ID must match the user ID found in the OAuth token.|
|id|query|[string]|false|A list of IDs to filter the Power-ups by. To specify more than one ID, include this parameter for each Power-up you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.  <br>  <br>Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "92af127c-7326-4483-a52b-b0da0be61c02",
      "image": null,
      "background_color": "#00FF00",
      "is_enabled": true,
      "bits": 100,
      "title": "game analysis",
      "prompt": "",
      "is_user_input_required": false,
      "max_per_stream_setting": {
        "is_enabled": false,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": false,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": false,
        "global_cooldown_seconds": 0
      },
      "is_paused": false,
      "is_in_stock": true,
      "default_image": {
        "url_1x": "https://static-cdn.jtvnw.net/twilight-static-assets/Default-Power-up-Line-Lightshade-28x28.png",
        "url_2x": "https://static-cdn.jtvnw.net/twilight-static-assets/Default-Power-up-Line-Lightshade-56x56.png",
        "url_4x": "https://static-cdn.jtvnw.net/twilight-static-assets/Default-Power-up-Line-Lightshade-112x112.png"
      },
      "redemptions_redeemed_current_stream": null,
      "cooldown_expires_at": null
    }
  ]
}
```

<h3 id="new-gets-a-list-of-custom-power-ups-that-the-specified-broadcaster-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of custom Power-ups.|[GetCustomPowerUpResponse](#schemagetcustompowerupresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The request exceeds the maximum number of _id_ query parameters that you may specify.|None|
|401|Unauthorized|* The Authorization header must specify a user access token.<br>* The user access token must include the **bits:read** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* All of the custom Power-ups specified using the _id_ query parameter were not found.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: bits:read )
</aside>

## Gets an extension’s list of transactions.

<a id="opIdget-extension-transactions"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/transactions?extension_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions/transactions`

Gets an extension’s list of transactions. A transaction records the exchange of a currency (for example, Bits) for a digital product.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-transactions">Get Extension Transactions</a>

<h3 id="gets-an-extensions-list-of-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|true|The ID of the extension whose list of transactions you want to get.|
|id|query|[string]|false|A transaction ID used to filter the list of transactions. Specify this parameter for each transaction you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "74c52265-e214-48a6-91b9-23b6014e8041",
      "timestamp": "2019-01-28T04:15:53.325Z",
      "broadcaster_id": "439964613",
      "broadcaster_login": "chikuseuma",
      "broadcaster_name": "chikuseuma",
      "user_id": "424596340",
      "user_login": "quotrok",
      "user_name": "quotrok",
      "product_type": "BITS_IN_EXTENSION",
      "product_data": {
        "domain": "twitch.ext.uo6dggojyb8d6soh92zknwmi5ej1q2",
        "sku": "testSku100",
        "cost": {
          "amount": 100,
          "type": "bits"
        },
        "inDevelopment": false,
        "displayName": "Test Product 100",
        "expiration": "",
        "broadcast": false
      }
    },
    {
      "id": "8d303dc6-a460-4945-9f48-59c31d6735cb",
      "timestamp": "2019-01-18T09:10:13.397Z",
      "broadcaster_id": "439964613",
      "broadcaster_login": "chikuseuma",
      "broadcaster_name": "chikuseuma",
      "user_id": "439966926",
      "user_login": "liscuit",
      "user_name": "liscuit",
      "product_type": "BITS_IN_EXTENSION",
      "product_data": {
        "domain": "twitch.ext.uo6dggojyb8d6soh92zknwmi5ej1q2",
        "sku": "testSku200",
        "cost": {
          "amount": 200,
          "type": "bits"
        },
        "inDevelopment": false,
        "displayName": "Test Product 200",
        "expiration": "",
        "broadcast": false
      }
    }
  ],
  "pagination": {
    "cursor": "cursorString"
  }
}
```

<h3 id="gets-an-extensions-list-of-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of transactions.|[GetExtensionTransactionsResponse](#schemagetextensiontransactionsresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.<br>* The request specified too many _id_ query parameters.<br>* The pagination cursor is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token.<br>* The access token is not valid.<br>* The ID in the _extension\_id_ query parameter must match the client ID in the access token.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* One or more of the transaction IDs specified using the _id_ query parameter were not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-channels">Channels</h1>

## Gets information about one or more channels.

<a id="opIdget-channel-information"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels`

Gets information about one or more channels.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-information">Get Channel Information</a>

<h3 id="gets-information-about-one-or-more-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|[string]|true|The ID of the broadcaster whose channel you want to get. To specify more than one ID, include this parameter for each broadcaster you want to get. For example, `broadcaster_id=1234&broadcaster_id=5678`. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that are not found.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "141981764",
      "broadcaster_login": "twitchdev",
      "broadcaster_name": "TwitchDev",
      "broadcaster_language": "en",
      "game_id": "509670",
      "game_name": "Science & Technology",
      "title": "TwitchDev Monthly Update // May 6, 2021",
      "delay": 0,
      "tags": [
        "DevsInTheKnow"
      ],
      "content_classification_labels": [
        "Gambling",
        "DrugsIntoxication",
        "MatureGame"
      ],
      "is_branded_content": false
    }
  ]
}
```

<h3 id="gets-information-about-one-or-more-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of channels.|[GetChannelInformationResponse](#schemagetchannelinformationresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The broadcaster ID is not valid.<br>* The number of _broadcaster\_id_ query parameters exceeds the maximum allowed.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|429|Too Many Requests|* The application exceeded the number of calls it may make per minute. For details, see [Rate Limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits).|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates a channel’s properties.

<a id="opIdmodify-channel-information"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels?broadcaster_id=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "game_id": "33214",
    "title": "there are helicopters in the game? REASON TO PLAY FORTNITE found",
    "broadcaster_language": "en",
    "tags": [
      "LevelingUp"
    ]
  }'
```

`PATCH /channels`

Updates a channel’s properties.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.

__Request Body:__

All fields are optional, but you must specify at least one field.

<a href="https://dev.twitch.tv/docs/api/reference#modify-channel-information">Modify Channel Information</a>

> Body parameter

```json
{
  "game_id": "33214",
  "title": "there are helicopters in the game? REASON TO PLAY FORTNITE found",
  "broadcaster_language": "en",
  "tags": [
    "LevelingUp"
  ]
}
```

<h3 id="updates-a-channels-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose channel you want to update. This ID must match the user ID in the user access token.|
|body|body|[ModifyChannelInformationBody](#schemamodifychannelinformationbody)|false|none|
|» game_id|body|string|false|The ID of the game that the user plays. The game is not updated if the ID isn’t a game ID that Twitch recognizes. To unset this field, use “0” or “” (an empty string).|
|» broadcaster_language|body|string|false|The user’s preferred language. Set the value to an ISO 639-1 two-letter language code (for example, _en_ for English). Set to “other” if the user’s preferred language is not a Twitch supported language. The language isn’t updated if the language code isn’t a Twitch supported language.|
|» title|body|string|false|The title of the user’s stream. You may not set this field to an empty string.|
|» delay|body|integer(int32)|false|The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).|
|» tags|body|[string]|false|A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. [Learn More](https://help.twitch.tv/s/article/guide-to-tags)  <br>  <br>A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters.|
|» content_classification_labels|body|[object]|false|List of labels that should be set as the Channel’s CCLs.  <br>**Note:** To clear CCLs for a channel, set all `is_enabled` for all possible CCLs to `false`|
|» » id|body|string|true|ID of the [Content Classification Labels](https://help.twitch.tv/s/article/content-classification-labels) that must be added/removed from the channel. Can be one of the following values:  <br>  <br>* DebatedSocialIssuesAndPolitics<br>* DrugsIntoxication<br>* SexualThemes<br>* ViolentGraphic<br>* Gambling<br>* ProfanityVulgarity|
|» » is_enabled|body|boolean|true|Boolean flag indicating whether the label should be enabled (true) or disabled for the channel.|
|» is_branded_content|body|boolean|false|Boolean flag indicating if the channel has branded content.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » id|DebatedSocialIssuesAndPolitics|
|» » id|DrugsIntoxication|
|» » id|SexualThemes|
|» » id|ViolentGraphic|
|» » id|Gambling|
|» » id|ProfanityVulgarity|

<h3 id="updates-a-channels-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the channel’s properties.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X PATCH 'https://api.twitch.tv/helix/channels?broadcaster_id=41245072' \<br>-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \<br>-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \<br>-H 'Content-Type: application/json' \<br>--data-raw '{"game_id":"33214", "title":"there are helicopters in the game? REASON TO PLAY FORTNITE found", "broadcaster_language":"en", "tags":["LevelingUp"]}'<br>```<br><br>Set CCLs for a Channel<br><br>```bash<br>curl -X PATCH<br>'https://api.twitch.tv/helix/channels?broadcaster_id=41245072' \<br>-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \<br>-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \<br>-H 'Content-Type: application/json' \<br>--data-raw '{ <br>    "game_id": "SomeGameID",<br>    "content_classification_labels": [<br>       {"id": "Gambling", "is_enabled": true}, <br>       {"id": "DrugsIntoxication", "is_enabled": false}  <br>     ],<br>    "is_branded_content": true<br>}'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The request must update at least one property.<br>* The `title` field may not contain an empty string.<br>* The ID in `game_id` is not valid.<br>* To update the `delay` field, the broadcaster must have partner status.<br>* The list in the `tags` field exceeds the maximum number of tags allowed.<br>* A tag in the `tags` field exceeds the maximum length allowed.<br>* A tag in the `tags` field is empty.<br>* A tag in the `tags` field contains special characters or spaces.<br>* One or more tags in the `tags` field failed AutoMod review.<br>* Game restricted for user's age and region<br>* Title exceeds the 140 character limit.|None|
|401|Unauthorized|* User requests CCL for a channel they don’t own<br>* The ID in _broadcaster\_id_ must match the user ID found in the OAuth token.<br>* The Authorization header is required and must specify a user access token.<br>* The OAuth token must include the **channel:manage:broadcast** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* User requested gaming CCLs to be added to their channel<br>* Unallowed CCLs declared for underaged authorized user in a restricted country|None|
|409|Conflict|User set the Branded Content flag too frequently|None|
|500|Internal Server Error||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:broadcast )
</aside>

## Gets the broadcaster’s list editors.

<a id="opIdget-channel-editors"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/editors?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels/editors`

Gets the broadcaster’s list editors.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:editors** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-editors">Get Channel Editors</a>

<h3 id="gets-the-broadcasters-list-editors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the channel. This ID must match the user ID in the access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "182891647",
      "user_name": "mauerbac",
      "created_at": "2019-02-15T21:19:50.380833Z"
    },
    {
      "user_id": "135093069",
      "user_name": "BlueLava",
      "created_at": "2018-03-07T16:28:29.872937Z"
    }
  ]
}
```

<h3 id="gets-the-broadcasters-list-editors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster's list of editors.|[GetChannelEditorsResponse](#schemagetchanneleditorsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID found in the OAuth token.<br>* The Authorization header is required and must specify a user access token.<br>* The OAuth token must include the **channel:read:editors** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:editors )
</aside>

## Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.

<a id="opIdget-followed-channels"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/followed?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels/followed`

Gets a list of broadcasters that the specified user follows. You can also use this endpoint to see whether a user follows a specific broadcaster.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-followed-channels">Get Followed Channels</a>

<h3 id="gets-a-list-of-broadcasters-that-the-specified-user-follows-you-can-also-use-this-endpoint-to-see-whether-a-user-follows-a-specific-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|A user’s ID. Returns the list of broadcasters that this user follows. This ID must match the user ID in the user OAuth token.|
|broadcaster_id|query|string|false|A broadcaster’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this broadcaster if the user follows them. If not specified, the response contains all broadcasters that the user follows.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).|

> Example responses

> 200 Response

```json
{
  "total": 8,
  "data": [
    {
      "broadcaster_id": "11111",
      "broadcaster_login": "userloginname",
      "broadcaster_name": "UserDisplayName",
      "followed_at": "2022-05-24T22:22:08Z"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-a-list-of-broadcasters-that-the-specified-user-follows-you-can-also-use-this-endpoint-to-see-whether-a-user-follows-a-specific-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster's list of followers.|[GetFollowedChannelsResponse](#schemagetfollowedchannelsresponse)|
|400|Bad Request|Possible reasons:  <br>  <br>* The _user\_id_ query parameter is required.<br>* The _broadcaster\_id_ query parameter is not valid.<br>* The _user\_id_ query parameter is required.|None|
|401|Unauthorized|Possible reasons:  <br>  <br>* The ID in the _user\_id_ query parameter must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token is missing the **user:read:follows** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:follows )
</aside>

## Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.

<a id="opIdget-channel-followers"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/followers?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels/followers`

Gets a list of users that follow the specified broadcaster. You can also use this endpoint to see whether a specific user follows the broadcaster.

__Authorization:__

* Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:followers** scope.
* The ID in the broadcaster\_id query parameter must match the user ID in the access token or the user ID in the access token must be a moderator for the specified broadcaster.

This endpoint will return specific follower information only if both of the above are true. If a scope is not provided or the user isn’t the broadcaster or a moderator for the specified channel, only the total follower count will be included in the response.

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-followers">Get Channel Followers</a>

<h3 id="gets-a-list-of-users-that-follow-the-specified-broadcaster-you-can-also-use-this-endpoint-to-see-whether-a-specific-user-follows-the-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|false|A user’s ID. Use this parameter to see whether the user follows this broadcaster. If specified, the response contains this user if they follow the broadcaster. If not specified, the response contains all users that follow the broadcaster.  <br>  <br>Using this parameter requires both a user access token with the **moderator:read:followers** scope and the user ID in the access token match the broadcaster\_id or be the user ID for a moderator of the specified broadcaster.|
|broadcaster_id|query|string|true|The broadcaster’s ID. Returns the list of users that follow this broadcaster.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).|

> Example responses

> 200 Response

```json
{
  "total": 8,
  "data": [
    {
      "user_id": "11111",
      "user_name": "UserDisplayName",
      "user_login": "userloginname",
      "followed_at": "2022-05-24T22:22:08Z"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-a-list-of-users-that-follow-the-specified-broadcaster-you-can-also-use-this-endpoint-to-see-whether-a-specific-user-follows-the-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of followers.|[GetChannelFollowersResponse](#schemagetchannelfollowersresponse)|
|400|Bad Request|Possible reasons:  <br>  <br>* The _broadcaster\_id_ query parameter is required.<br>* The _broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|Possible reasons:  <br>  <br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token or the user must be a moderator for the specified broadcaster.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token is missing the **moderator:read:followers** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.<br>* The _user\_id_ parameter was specified but either the user access token is missing the **moderator:read:followers** scope or the user is not the broadcaster or moderator for the specified channel|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:followers )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-channel-points">Channel Points</h1>

## Gets a list of custom rewards that the specified broadcaster created.

<a id="opIdget-custom-reward"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channel_points/custom_rewards`

Gets a list of custom rewards that the specified broadcaster created.

**NOTE**: A channel may offer a maximum of 50 rewards, which includes both enabled and disabled rewards.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-custom-reward">Get Custom Reward</a>

<h3 id="gets-a-list-of-custom-rewards-that-the-specified-broadcaster-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose custom rewards you want to get. This ID must match the user ID found in the OAuth token.|
|id|query|[string]|false|A list of IDs to filter the rewards by. To specify more than one ID, include this parameter for each reward you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.  <br>  <br>Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.|
|only_manageable_rewards|query|boolean|false|A Boolean value that determines whether the response contains only the custom rewards that the app may manage (the app is identified by the ID in the Client-Id header). Set to **true** to get only the custom rewards that the app may manage. The default is **false**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "92af127c-7326-4483-a52b-b0da0be61c01",
      "image": null,
      "background_color": "#00E5CB",
      "is_enabled": true,
      "cost": 50000,
      "title": "game analysis",
      "prompt": "",
      "is_user_input_required": false,
      "max_per_stream_setting": {
        "is_enabled": false,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": false,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": false,
        "global_cooldown_seconds": 0
      },
      "is_paused": false,
      "is_in_stock": true,
      "default_image": {
        "url_1x": "https://static-cdn.jtvnw.net/custom-reward-images/default-1.png",
        "url_2x": "https://static-cdn.jtvnw.net/custom-reward-images/default-2.png",
        "url_4x": "https://static-cdn.jtvnw.net/custom-reward-images/default-4.png"
      },
      "should_redemptions_skip_request_queue": false,
      "redemptions_redeemed_current_stream": null,
      "cooldown_expires_at": null
    }
  ]
}
```

<h3 id="gets-a-list-of-custom-rewards-that-the-specified-broadcaster-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of custom rewards.|[GetCustomRewardResponse](#schemagetcustomrewardresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The request exceeds the maximum number of _id_ query parameters that you may specify.|None|
|401|Unauthorized|* The Authorization header must specify a user access token.<br>* The user access token must include the **channel:read:redemptions** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* All of the custom rewards specified using the _id_ query parameter were not found.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:redemptions channel:manage:redemptions )
</aside>

## Creates a Custom Reward in the broadcaster’s channel.

<a id="opIdcreate-custom-rewards"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "game analysis 1v1",
    "cost": 50000
  }'
```

`POST /channel_points/custom_rewards`

Creates a Custom Reward in the broadcaster’s channel. The maximum number of custom rewards per channel is 50, which includes both enabled and disabled rewards.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-custom-rewards">Create Custom Rewards</a>

> Body parameter

```json
{
  "title": "game analysis 1v1",
  "cost": 50000
}
```

<h3 id="creates-a-custom-reward-in-the-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster to add the custom reward to. This ID must match the user ID found in the OAuth token.|
|body|body|[CreateCustomRewardsBody](#schemacreatecustomrewardsbody)|false|none|
|» title|body|string|true|The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.|
|» cost|body|integer(int64)|true|The cost of the reward, in Channel Points. The minimum is 1 point.|
|» prompt|body|string|false|The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.|
|» is_enabled|body|boolean|false|A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is **true**.|
|» background_color|body|string|false|The background color to use for the reward. Specify the color using Hex format (for example, #9147FF).|
|» is_user_input_required|body|boolean|false|A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is **false**.|
|» is_max_per_stream_enabled|body|boolean|false|A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is **false**.|
|» max_per_stream|body|integer(int32)|false|The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.|
|» is_max_per_user_per_stream_enabled|body|boolean|false|A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is **false**.|
|» max_per_user_per_stream|body|integer(int32)|false|The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.|
|» is_global_cooldown_enabled|body|boolean|false|A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**.|
|» global_cooldown_seconds|body|integer(int32)|false|The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.|
|» should_redemptions_skip_request_queue|body|boolean|false|A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. The default is **false**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "afaa7e34-6b17-49f0-a19a-d1e76eaaf673",
      "image": null,
      "background_color": "#00E5CB",
      "is_enabled": true,
      "cost": 50000,
      "title": "game analysis 1v1",
      "prompt": "",
      "is_user_input_required": false,
      "max_per_stream_setting": {
        "is_enabled": false,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": false,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": false,
        "global_cooldown_seconds": 0
      },
      "is_paused": false,
      "is_in_stock": true,
      "default_image": {
        "url_1x": "https://static-cdn.jtvnw.net/custom-reward-images/default-1.png",
        "url_2x": "https://static-cdn.jtvnw.net/custom-reward-images/default-2.png",
        "url_4x": "https://static-cdn.jtvnw.net/custom-reward-images/default-4.png"
      },
      "should_redemptions_skip_request_queue": false,
      "redemptions_redeemed_current_stream": null,
      "cooldown_expires_at": null
    }
  ]
}
```

<h3 id="creates-a-custom-reward-in-the-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the custom reward.|[CreateCustomRewardsResponse](#schemacreatecustomrewardsresponse)|
|400|Bad Request|* The request exceeds the maximum number of rewards allowed per channel.<br>* The _broadcaster\_id_ query parameter is required.<br>* The `title` field is required.<br>* The `title` must contain a minimum of 1 character and a maximum of 45 characters.<br>* The `title` must be unique amongst all of the broadcaster's custom rewards.<br>* The `cost` field is required.<br>* The `cost` field must contain a minimum of 1 point.<br>* The `prompt` field is limited to a maximum of 200 characters.<br>* If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.<br>* If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.<br>* If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token is missing the **channel:manage:redemptions** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The broadcaster is not a partner or affiliate.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:redemptions )
</aside>

## Deletes a custom reward that the broadcaster created.

<a id="opIddelete-custom-reward"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=string&id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /channel_points/custom_rewards`

Deletes a custom reward that the broadcaster created.

The app used to create the reward is the only app that may delete it. If the reward’s redemption status is UNFULFILLED at the time the reward is deleted, its redemption status is marked as FULFILLED.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#delete-custom-reward">Delete Custom Reward</a>

<h3 id="deletes-a-custom-reward-that-the-broadcaster-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that created the custom reward. This ID must match the user ID found in the OAuth token.|
|id|query|string|true|The ID of the custom reward to delete.|

<h3 id="deletes-a-custom-reward-that-the-broadcaster-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the custom reward.<br><br>__Examples__<br><br>_Request:_<br><br>Deletes the specified custom reward.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=274637212&id=b045196d-9ce7-4a27-a9b9-279ed341ab28' \<br>-H 'Client-Id: gx2pv4208cff0ig9ou7nk3riccffxt' \<br>-H 'Authorization: Bearer vjxv3i0l4zxru966wsnwji51tmpkj2'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token must include the **channel:manage:redemptions** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The ID in the Client-Id header must match the client ID used to create the custom reward.<br>* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* The custom reward specified in the _id_ query parameter was not found.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:redemptions )
</aside>

## Updates a custom reward.

<a id="opIdupdate-custom-reward"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=string&id=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "is_enabled": false
  }'
```

`PATCH /channel_points/custom_rewards`

Updates a custom reward. The app used to create the reward is the only app that may update the reward.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.

__Request Body:__

The body of the request should contain only the fields you’re updating.

<a href="https://dev.twitch.tv/docs/api/reference#update-custom-reward">Update Custom Reward</a>

> Body parameter

```json
{
  "is_enabled": false
}
```

<h3 id="updates-a-custom-reward-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that’s updating the reward. This ID must match the user ID found in the OAuth token.|
|id|query|string|true|The ID of the reward to update.|
|body|body|[UpdateCustomRewardBody](#schemaupdatecustomrewardbody)|false|none|
|» title|body|string|false|The reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.|
|» prompt|body|string|false|The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.|
|» cost|body|integer(int64)|false|The cost of the reward, in channel points. The minimum is 1 point.|
|» background_color|body|string|false|The background color to use for the reward. Specify the color using Hex format (for example, \\#00E5CB).|
|» is_enabled|body|boolean|false|A Boolean value that indicates whether the reward is enabled. Set to **true** to enable the reward. Viewers see only enabled rewards.|
|» is_user_input_required|body|boolean|false|A Boolean value that determines whether users must enter information to redeem the reward. Set to **true** if user input is required. See the `prompt` field.|
|» is_max_per_stream_enabled|body|boolean|false|A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). Set to **true** to limit redemptions.|
|» max_per_stream|body|integer(int64)|false|The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.|
|» is_max_per_user_per_stream_enabled|body|boolean|false|A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see `max_per_user_per_stream`). The minimum value is 1\. Set to **true** to limit redemptions.|
|» max_per_user_per_stream|body|integer(int64)|false|The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**.|
|» is_global_cooldown_enabled|body|boolean|false|A Boolean value that determines whether to apply a cooldown period between redemptions. Set to **true** to apply a cooldown period. For the duration of the cooldown period, see `global_cooldown_seconds`.|
|» global_cooldown_seconds|body|integer(int64)|false|The cooldown period, in seconds. Applied only if `is_global_cooldown_enabled` is **true**. The minimum value is 1; however, for it to be shown in the Twitch UX, the minimum value is 60.|
|» is_paused|body|boolean|false|A Boolean value that determines whether to pause the reward. Set to **true** to pause the reward. Viewers can’t redeem paused rewards..|
|» should_redemptions_skip_request_queue|body|boolean|false|A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "92af127c-7326-4483-a52b-b0da0be61c01",
      "image": null,
      "background_color": "#00E5CB",
      "is_enabled": false,
      "cost": 30000,
      "title": "game analysis 2v2",
      "prompt": "",
      "is_user_input_required": false,
      "max_per_stream_setting": {
        "is_enabled": true,
        "max_per_stream": 60
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": false,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": false,
        "global_cooldown_seconds": 0
      },
      "is_paused": false,
      "is_in_stock": false,
      "default_image": {
        "url_1x": "https://static-cdn.jtvnw.net/custom-reward-images/default-1.png",
        "url_2x": "https://static-cdn.jtvnw.net/custom-reward-images/default-2.png",
        "url_4x": "https://static-cdn.jtvnw.net/custom-reward-images/default-4.png"
      },
      "should_redemptions_skip_request_queue": true,
      "redemptions_redeemed_current_stream": 60,
      "cooldown_expires_at": null
    }
  ]
}
```

<h3 id="updates-a-custom-reward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the custom reward.|[UpdateCustomRewardResponse](#schemaupdatecustomrewardresponse)|
|400|Bad Request|ul><br>* The _broadcaster\_id_ query parameter is required.<br>* The _id_ query parameter is required.<br>* The `title` must contain a minimum of 1 character and a maximum of 45 characters.<br>* The `title` must be unique amongst all of the broadcaster's custom rewards.<br>* The `cost` field must contain a minimum of 1 point.<br>* The `prompt` field is limited to a maximum of 200 characters.<br>* If `is_max_per_stream_enabled` is **true**, the minimum value for `max_per_stream` is 1.<br>* If `is_max_per_user_per_stream_enabled` is **true**, the minimum value for `max_per_user_per_stream` is 1.<br>* If `is_global_cooldown_enabled` is **true**, the minimum value for `global_cooldown_seconds` is 1 and the maximum is 604800.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token must include the **channel:manage:redemptions** scope.<br>* The OAuth token is not valide.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The ID in the Client-Id header must match the client ID used to create the custom reward.<br>* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* The custom reward specified in the _id_ query parameter was not found.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:redemptions )
</aside>

## Gets a list of redemptions for a custom reward.

<a id="opIdget-custom-reward-redemption"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions?broadcaster_id=string&reward_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channel_points/custom_rewards/redemptions`

Gets a list of redemptions for the specified custom reward. The app used to create the reward is the only app that may get the redemptions.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:redemptions** or **channel:manage:redemptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-custom-reward-redemption">Get Custom Reward Redemption</a>

<h3 id="gets-a-list-of-redemptions-for-a-custom-reward-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the custom reward. This ID must match the user ID found in the user OAuth token.|
|reward_id|query|string|true|The ID that identifies the custom reward whose redemptions you want to get.|
|status|query|string|false|The status of the redemptions to return. The possible case-sensitive values are:  <br>  <br>* CANCELED<br>* FULFILLED<br>* UNFULFILLED<br>  <br>**NOTE**: This field is required only if you don’t specify the _id_ query parameter.  <br>  <br>**NOTE**: Canceled and fulfilled redemptions are returned for only a few days after they’re canceled or fulfilled.|
|id|query|[string]|false|A list of IDs to filter the redemptions by. To specify more than one ID, include this parameter for each redemption you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.  <br>  <br>Duplicate IDs are ignored. The response contains only the IDs that were found. If none of the IDs were found, the response is 404 Not Found.|
|sort|query|string|false|The order to sort redemptions by. The possible case-sensitive values are:  <br>  <br>* OLDEST<br>* NEWEST<br>  <br>The default is OLDEST.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read more](https://dev.twitch.tv/docs/api/guide#pagination)|
|first|query|integer(int32)|false|The maximum number of redemptions to return per page in the response. The minimum page size is 1 redemption per page and the maximum is 50\. The default is 20.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|CANCELED|
|status|FULFILLED|
|status|UNFULFILLED|
|sort|OLDEST|
|sort|NEWEST|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "17fa2df1-ad76-4804-bfa5-a40ef63efe63",
      "user_login": "torpedo09",
      "user_id": "274637212",
      "user_name": "torpedo09",
      "user_input": "",
      "status": "CANCELED",
      "redeemed_at": "2020-07-01T18:37:32Z",
      "reward": {
        "id": "92af127c-7326-4483-a52b-b0da0be61c01",
        "title": "game analysis",
        "prompt": "",
        "cost": 50000
      }
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6Ik1UZG1ZVEprWmpFdFlXUTNOaTAwT0RBMExXSm1ZVFV0WVRRd1pXWTJNMlZtWlRZelgxOHlNREl3TFRBM0xUQXhWREU0T2pNM09qTXlMakl6TXpFeU56RTFOMW89In19"
  }
}
```

<h3 id="gets-a-list-of-redemptions-for-a-custom-reward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of redeemed custom rewards.|[GetCustomRewardRedemptionResponse](#schemagetcustomrewardredemptionresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _reward\_id_ query parameter is required.<br>* The _status_ query parameter is required if you didn't specify the _id_ query parameter.<br>* The value in the _status_ query parameter is not valid.<br>* The value in the _sort_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token must include the **channel:read:redemptions** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The ID in the Client-Id header must match the client ID used to create the custom reward.<br>* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* All of the redemptions specified using the _id_ query parameter were not found.|None|
|500|Internal Server Error||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:redemptions channel:manage:redemptions )
</aside>

## Updates a redemption’s status.

<a id="opIdupdate-redemption-status"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions?id=string&broadcaster_id=string&reward_id=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "CANCELED"
  }'
```

`PATCH /channel_points/custom_rewards/redemptions`

Updates a redemption’s status. You may update a redemption only if its status is UNFULFILLED. The app used to create the reward is the only app that may update the redemption.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:redemptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-redemption-status">Update Redemption Status</a>

> Body parameter

```json
{
  "status": "CANCELED"
}
```

<h3 id="updates-a-redemptions-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|A list of IDs that identify the redemptions to update. To specify more than one ID, include this parameter for each redemption you want to update. For example, `id=1234&id=5678`. You may specify a maximum of 50 IDs.|
|broadcaster_id|query|string|true|The ID of the broadcaster that’s updating the redemption. This ID must match the user ID in the user access token.|
|reward_id|query|string|true|The ID that identifies the reward that’s been redeemed.|
|body|body|[UpdateRedemptionStatusBody](#schemaupdateredemptionstatusbody)|false|none|
|» status|body|string|true|The status to set the redemption to. Possible values are:  <br>  <br>* CANCELED<br>* FULFILLED<br>  <br>Setting the status to CANCELED refunds the user’s channel points.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|CANCELED|
|» status|FULFILLED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "id": "17fa2df1-ad76-4804-bfa5-a40ef63efe63",
      "user_id": "274637212",
      "user_name": "torpedo09",
      "user_login": "torpedo09",
      "user_input": "",
      "status": "CANCELED",
      "redeemed_at": "2020-07-01T18:37:32Z",
      "reward": {
        "id": "92af127c-7326-4483-a52b-b0da0be61c01",
        "title": "game analysis",
        "prompt": "",
        "cost": 50000
      }
    }
  ]
}
```

<h3 id="updates-a-redemptions-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the redemption’s status.|[UpdateRedemptionStatusResponse](#schemaupdateredemptionstatusresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _reward\_id_ query parameter is required.<br>* The _id_ query parameter is required.<br>* The value in the _status_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token.<br>* The user access token must include the **channel:manage:redemptions** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The ID in the Client-Id header must match the client ID used to create the custom reward.<br>* The broadcaster is not a partner or affiliate.|None|
|404|Not Found|* The custom reward specified in the _reward\_id_ query parameter was not found.<br>* The redemptions specified using the _id_ query parameter were not found or their statuses weren't marked as UNFULFILLED.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:redemptions )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-charity">Charity</h1>

## Gets information about the broadcaster’s active charity campaign.

<a id="opIdget-charity-campaign"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/charity/campaigns?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /charity/campaigns`

Gets information about the charity campaign that a broadcaster is running. For example, the campaign’s fundraising goal and the current amount of donations.

To receive events when progress is made towards the campaign’s goal or the broadcaster changes the fundraising goal, subscribe to the [channel.charity\_campaign.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaignprogress) subscription type.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:charity** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-charity-campaign">Get Charity Campaign</a>

<h3 id="gets-information-about-the-broadcasters-active-charity-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "123-abc-456-def",
      "broadcaster_id": "123456",
      "broadcaster_name": "SunnySideUp",
      "broadcaster_login": "sunnysideup",
      "charity_name": "Example name",
      "charity_description": "Example description",
      "charity_logo": "https://abc.cloudfront.net/ppgf/1000/100.png",
      "charity_website": "https://www.example.com",
      "current_amount": {
        "value": 86000,
        "decimal_places": 2,
        "currency": "USD"
      },
      "target_amount": {
        "value": 1500000,
        "decimal_places": 2,
        "currency": "USD"
      }
    }
  ]
}
```

<h3 id="gets-information-about-the-broadcasters-active-charity-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved information about the broadcaster’s active charity campaign.|[GetCharityCampaignResponse](#schemagetcharitycampaignresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:charity** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header must match the client ID specified in the access token.|None|
|403|Forbidden|* The broadcaster is not a partner or affiliate.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:charity )
</aside>

## Gets the list of donations that users have made to the broadcaster’s active charity campaign.

<a id="opIdget-charity-campaign-donations"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/charity/donations?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /charity/donations`

Gets the list of donations that users have made to the broadcaster’s active charity campaign.

To receive events as donations occur, subscribe to the [channel.charity\_campaign.donate](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelcharity%5Fcampaigndonate) subscription type.

__Authorization:__

Requires a user access token that includes the **channel:read:charity** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-charity-campaign-donations">Get Charity Campaign Donations</a>

<h3 id="gets-the-list-of-donations-that-users-have-made-to-the-broadcasters-active-charity-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that’s currently running a charity campaign. This ID must match the user ID in the access token.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "a1b2c3-aabb-4455-d1e2f3",
      "campaign_id": "123-abc-456-def",
      "user_id": "5678",
      "user_login": "cool_user",
      "user_name": "Cool_User",
      "amount": {
        "value": 500,
        "decimal_places": 2,
        "currency": "USD"
      }
    },
    {
      "id": "z1y2x3-ccdd-6677-d1e2f3",
      "campaign_id": "123-abc-456-def",
      "user_id": "8765",
      "user_login": "cool_user2",
      "user_name": "Cool_User2",
      "amount": {
        "value": 10000,
        "decimal_places": 2,
        "currency": "USD"
      }
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-the-list-of-donations-that-users-have-made-to-the-broadcasters-active-charity-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of donations that users contributed to the broadcaster’s charity campaign.|[GetCharityCampaignDonationsResponse](#schemagetcharitycampaigndonationsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:charity** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header must match the client ID specified in the access token.|None|
|403|Forbidden|* The broadcaster is not a partner or affiliate.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:charity )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-chat">Chat</h1>

## Gets the list of users that are connected to the broadcaster’s chat session.

<a id="opIdget-chatters"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/chatters?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/chatters`

Gets the list of users that are connected to the broadcaster’s chat session.

**NOTE**: There is a delay between when users join and leave a chat and when the list is updated accordingly.

To determine whether a user is a moderator or VIP, use the [Get Moderators](https://dev.twitch.tv/docs/api/reference#get-moderators) and [Get VIPs](https://dev.twitch.tv/docs/api/reference#get-vips) endpoints. You can check the roles of up to 100 users.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:chatters** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:chatters** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-chatters">Get Chatters</a>

<h3 id="gets-the-list-of-users-that-are-connected-to-the-broadcasters-chat-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose list of chatters you want to get.|
|moderator_id|query|string|true|The ID of the broadcaster or one of the broadcaster’s moderators. This ID must match the user ID in the user access token.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 1,000\. The default is 100.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "128393656",
      "user_login": "smittysmithers",
      "user_name": "smittysmithers"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  },
  "total": 8
}
```

<h3 id="gets-the-list-of-users-that-are-connected-to-the-broadcasters-chat-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of chatters.|[GetChattersResponse](#schemagetchattersresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _moderator\_id_ query parameter is required.<br>* The ID in the _moderator\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in the _moderator\_id_ query parameter must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:read:chatters** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in the _moderator\_id_ query parameter is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:chatters )
</aside>

## Gets the broadcaster’s list of custom emotes.

<a id="opIdget-channel-emotes"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/emotes?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/emotes`

Gets the broadcaster’s list of custom emotes. Broadcasters create these custom emotes for users who subscribe to or follow the channel or cheer Bits in the channel’s chat window. [Learn More](https://dev.twitch.tv/docs/irc/emotes)

For information about the custom emotes, see [subscriber emotes](https://help.twitch.tv/s/article/subscriber-emote-guide), [Bits tier emotes](https://help.twitch.tv/s/article/custom-bit-badges-guide?language=bg#slots), and [follower emotes](https://blog.twitch.tv/en/2021/06/04/kicking-off-10-years-with-our-biggest-emote-update-ever/).

**NOTE:** With the exception of custom follower emotes, users may use custom emotes in any Twitch chat.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-emotes">Get Channel Emotes</a>

<h3 id="gets-the-broadcasters-list-of-custom-emotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|An ID that identifies the broadcaster whose emotes you want to get.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "304456832",
      "name": "twitchdevPitchfork",
      "images": {
        "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/1.0",
        "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/2.0",
        "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/3.0"
      },
      "tier": "1000",
      "emote_type": "subscriptions",
      "emote_set_id": "301590448",
      "format": [
        "static"
      ],
      "scale": [
        "1.0",
        "2.0",
        "3.0"
      ],
      "theme_mode": [
        "light",
        "dark"
      ]
    },
    {
      "id": "emotesv2_4c3b4ed516de493bbcd2df2f5d450f49",
      "name": "twitchdevHyperPitchfork",
      "images": {
        "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4c3b4ed516de493bbcd2df2f5d450f49/static/light/1.0",
        "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4c3b4ed516de493bbcd2df2f5d450f49/static/light/2.0",
        "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_4c3b4ed516de493bbcd2df2f5d450f49/static/light/3.0"
      },
      "tier": "1000",
      "emote_type": "subscriptions",
      "emote_set_id": "318939165",
      "format": [
        "static",
        "animated"
      ],
      "scale": [
        "1.0",
        "2.0",
        "3.0"
      ],
      "theme_mode": [
        "light",
        "dark"
      ]
    }
  ],
  "template": "https://static-cdn.jtvnw.net/emoticons/v2/{{id}}/{{format}}/{{theme_mode}}/{{scale}}"
}
```

<h3 id="gets-the-broadcasters-list-of-custom-emotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved broadcaster's list of custom emotes.|[GetChannelEmotesResponse](#schemagetchannelemotesresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets all global emotes.

<a id="opIdget-global-emotes"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/chat/emotes/global \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/emotes/global`

Gets the list of [global emotes](https://www.twitch.tv/creatorcamp/en/learn-the-basics/emotes/). Global emotes are Twitch-created emotes that users can use in any Twitch chat.

[Learn More](https://dev.twitch.tv/docs/irc/emotes)

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

__Request Query Parameters:__

None

<a href="https://dev.twitch.tv/docs/api/reference#get-global-emotes">Get Global Emotes</a>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "196892",
      "name": "TwitchUnity",
      "images": {
        "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/196892/static/light/1.0",
        "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/196892/static/light/2.0",
        "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/196892/static/light/3.0"
      },
      "format": [
        "static"
      ],
      "scale": [
        "1.0",
        "2.0",
        "3.0"
      ],
      "theme_mode": [
        "light",
        "dark"
      ]
    }
  ],
  "template": "https://static-cdn.jtvnw.net/emoticons/v2/{{id}}/{{format}}/{{theme_mode}}/{{scale}}"
}
```

<h3 id="gets-all-global-emotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved Twitch's list of global emotes.|[GetGlobalEmotesResponse](#schemagetglobalemotesresponse)|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets emotes for one or more specified emote sets.

<a id="opIdget-emote-sets"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/emotes/set?emote_set_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/emotes/set`

Gets emotes for one or more specified emote sets.

An emote set groups emotes that have a similar context. For example, Twitch places all the subscriber emotes that a broadcaster uploads for their channel in the same emote set.

[Learn More](https://dev.twitch.tv/docs/irc/emotes)

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-emote-sets">Get Emote Sets</a>

<h3 id="gets-emotes-for-one-or-more-specified-emote-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emote_set_id|query|[string]|true|An ID that identifies the emote set to get. Include this parameter for each emote set you want to get. For example, `emote_set_id=1234&emote_set_id=5678`. You may specify a maximum of 25 IDs. The response contains only the IDs that were found and ignores duplicate IDs.  <br>  <br>To get emote set IDs, use the [Get Channel Emotes](https://dev.twitch.tv/docs/api/reference#get-channel-emotes) API.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "304456832",
      "name": "twitchdevPitchfork",
      "images": {
        "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/1.0",
        "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/2.0",
        "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/3.0"
      },
      "emote_type": "subscriptions",
      "emote_set_id": "301590448",
      "owner_id": "141981764",
      "format": [
        "static"
      ],
      "scale": [
        "1.0",
        "2.0",
        "3.0"
      ],
      "theme_mode": [
        "light",
        "dark"
      ]
    }
  ],
  "template": "https://static-cdn.jtvnw.net/emoticons/v2/{{id}}/{{format}}/{{theme_mode}}/{{scale}}"
}
```

<h3 id="gets-emotes-for-one-or-more-specified-emote-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the emotes for the specified emote sets.|[GetEmoteSetsResponse](#schemagetemotesetsresponse)|
|400|Bad Request|* The _emote\_set\_id_ query parameter is required.<br>* The number of _emote\_set\_id_ query parameters exceeds the maximum allowed.|None|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the broadcaster’s list of custom chat badges.

<a id="opIdget-channel-chat-badges"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/badges?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/badges`

Gets the broadcaster’s list of custom chat badges. The list is empty if the broadcaster hasn’t created custom chat badges. For information about custom badges, see [subscriber badges](https://help.twitch.tv/s/article/subscriber-badge-guide) and [Bits badges](https://help.twitch.tv/s/article/custom-bit-badges-guide).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-chat-badges">Get Channel Chat Badges</a>

<h3 id="gets-the-broadcasters-list-of-custom-chat-badges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose chat badges you want to get.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "set_id": "bits",
      "versions": [
        {
          "id": "1",
          "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/1",
          "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/2",
          "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/3",
          "title": "cheer 1",
          "description": "cheer 1",
          "click_action": "visit_url",
          "click_url": "https://bits.twitch.tv"
        }
      ]
    },
    {
      "set_id": "subscriber",
      "versions": [
        {
          "id": "0",
          "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/eb4a8a4c-eacd-4f5e-b9f2-394348310442/1",
          "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/eb4a8a4c-eacd-4f5e-b9f2-394348310442/2",
          "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/eb4a8a4c-eacd-4f5e-b9f2-394348310442/3",
          "title": "Subscriber",
          "description": "Subscriber",
          "click_action": "subscribe_to_channel",
          "click_url": null
        }
      ]
    }
  ]
}
```

<h3 id="gets-the-broadcasters-list-of-custom-chat-badges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s custom chat badges.|[GetChannelChatBadgesResponse](#schemagetchannelchatbadgesresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets Twitch’s list of chat badges.

<a id="opIdget-global-chat-badges"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/chat/badges/global \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/badges/global`

Gets Twitch’s list of chat badges, which users may use in any channel’s chat room. For information about chat badges, see [Twitch Chat Badges Guide](https://help.twitch.tv/s/article/twitch-chat-badges-guide).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

__Request Query Parameters:__

None

<a href="https://dev.twitch.tv/docs/api/reference#get-global-chat-badges">Get Global Chat Badges</a>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "set_id": "vip",
      "versions": [
        {
          "id": "1",
          "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
          "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2",
          "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
          "title": "VIP",
          "description": "VIP",
          "click_action": "visit_url",
          "click_url": "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide"
        }
      ]
    }
  ]
}
```

<h3 id="gets-twitchs-list-of-chat-badges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of global chat badges.|[GetGlobalChatBadgesResponse](#schemagetglobalchatbadgesresponse)|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the broadcaster’s chat settings.

<a id="opIdget-chat-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/settings?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/settings`

Gets the broadcaster’s chat settings.

For an overview of chat settings, see [Chat Commands for Broadcasters and Moderators](https://help.twitch.tv/s/article/chat-commands#AllMods) and [Moderator Preferences](https://help.twitch.tv/s/article/setting-up-moderation-for-your-twitch-channel#modpreferences).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-chat-settings">Get Chat Settings</a>

<h3 id="gets-the-broadcasters-chat-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose chat settings you want to get.|
|moderator_id|query|string|false|The ID of the broadcaster or one of the broadcaster’s moderators.  <br>  <br>This field is required only if you want to include the `non_moderator_chat_delay` and `non_moderator_chat_delay_duration` settings in the response.  <br>  <br>If you specify this field, this ID must match the user ID in the user access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "713936733",
      "slow_mode": false,
      "slow_mode_wait_time": null,
      "follower_mode": true,
      "follower_mode_duration": 0,
      "subscriber_mode": false,
      "emote_mode": false,
      "unique_chat_mode": false,
      "non_moderator_chat_delay": true,
      "non_moderator_chat_delay_duration": 4
    }
  ]
}
```

<h3 id="gets-the-broadcasters-chat-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s chat settings.|[GetChatSettingsResponse](#schemagetchatsettingsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates the broadcaster’s chat settings.

<a id="opIdupdate-chat-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/settings?broadcaster_id=string&moderator_id=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "follower_mode": false
  }'
```

`PATCH /chat/settings`

Updates the broadcaster’s chat settings.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_settings** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:chat\_settings** scope for the user represented by the `moderator_id` query parameter.

__Request Body:__

All fields are optional. Specify only those fields that you want to update.

To set the `slow_mode_wait_time` or `follower_mode_duration` field to its default value, set the corresponding `slow_mode` or `follower_mode` field to **true** (and don’t include the `slow_mode_wait_time` or `follower_mode_duration` field).

To set the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, you must set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **true**.

To remove the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field’s value, set the corresponding `slow_mode`, `follower_mode`, or `non_moderator_chat_delay` field to **false** (and don’t include the `slow_mode_wait_time`, `follower_mode_duration`, or `non_moderator_chat_delay_duration` field).

<a href="https://dev.twitch.tv/docs/api/reference#update-chat-settings">Update Chat Settings</a>

> Body parameter

```json
{
  "follower_mode": false
}
```

<h3 id="updates-the-broadcasters-chat-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose chat settings you want to update.|
|moderator_id|query|string|true|The ID of a user that has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re making the update. This ID must match the user ID in the user access token.|
|body|body|[UpdateChatSettingsBody](#schemaupdatechatsettingsbody)|false|none|
|» emote_mode|body|boolean|false|A Boolean value that determines whether chat messages must contain only emotes.  <br>  <br>Set to **true** if only emotes are allowed; otherwise, **false**. The default is **false**.|
|» follower_mode|body|boolean|false|A Boolean value that determines whether the broadcaster restricts the chat room to followers only.  <br>  <br>Set to **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**. The default is **true**.  <br>  <br>To specify how long users must follow the broadcaster before being able to participate in the chat room, see the `follower_mode_duration` field.|
|» follower_mode_duration|body|integer(int32)|false|The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Set only if `follower_mode` is **true**. Possible values are: 0 (no restriction) through 129600 (3 months). The default is 0.|
|» non_moderator_chat_delay|body|boolean|false|A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message.  <br>  <br>Set to **true** if the broadcaster applies a delay; otherwise, **false**. The default is **false**.  <br>  <br>To specify the length of the delay, see the `non_moderator_chat_delay_duration` field.|
|» non_moderator_chat_delay_duration|body|integer(int32)|false|The amount of time, in seconds, that messages are delayed before appearing in chat. Set only if `non_moderator_chat_delay` is **true**. Possible values are:  <br>  <br>* 2 — 2 second delay (recommended)<br>* 4 — 4 second delay<br>* 6 — 6 second delay|
|» slow_mode|body|boolean|false|A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Set to **true** if the broadcaster applies a wait period between messages; otherwise, **false**. The default is **false**.  <br>  <br>To specify the delay, see the `slow_mode_wait_time` field.|
|» slow_mode_wait_time|body|integer(int32)|false|The amount of time, in seconds, that users must wait between sending messages. Set only if `slow_mode` is **true**.  <br>  <br>Possible values are: 3 (3 second delay) through 120 (2 minute delay). The default is 30 seconds.|
|» subscriber_mode|body|boolean|false|A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.  <br>  <br>Set to **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**. The default is **false**.|
|» unique_chat_mode|body|boolean|false|A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.  <br>  <br>Set to **true** if the broadcaster allows only unique messages; otherwise, **false**. The default is **false**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» non_moderator_chat_delay_duration|2|
|» non_moderator_chat_delay_duration|4|
|» non_moderator_chat_delay_duration|6|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "1234",
      "moderator_id": "5678",
      "slow_mode": true,
      "slow_mode_wait_time": 10,
      "follower_mode": false,
      "follower_mode_duration": null,
      "subscriber_mode": false,
      "emote_mode": false,
      "unique_chat_mode": false,
      "non_moderator_chat_delay": false,
      "non_moderator_chat_delay_duration": null
    }
  ]
}
```

<h3 id="updates-the-broadcasters-chat-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the broadcaster’s chat settings.|[UpdateChatSettingsResponse](#schemaupdatechatsettingsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* If _slow\_mode_ is **true**, the `slow_mode_wait_time` field must be set to a valid value.<br>* If `follower_mode` is **true**, the `follower_mode_duration` field must be set to a valid value.<br>* If `non_moderator_chat_delay` is **true**, the `non_moderator_chat_delay_duration` field must be set to a valid value.|None|
|401|Unauthorized|* The ID in the _moderator\_id_ query parameter must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:chat\_settings** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|403|Forbidden|* The user in the _moderator\_id_ query parameter must have moderator privileges in the broadcaster's channel.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_settings )
</aside>

## Retrieves the active shared chat session for a channel.

<a id="opIdget-shared-chat-session"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/shared_chat/session?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shared_chat/session`

Retrieves the active shared chat session for a channel.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/cli/token-command/#app-access-token) or [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-shared-chat-session">Get Shared Chat Session</a>

<h3 id="retrieves-the-active-shared-chat-session-for-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The User ID of the channel broadcaster.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "session_id": "359bce59-fa4e-41a5-bd6f-9bc0c8360485",
      "host_broadcaster_id": "198704263",
      "participants": [
        {
          "broadcaster_id": "198704263"
        },
        {
          "broadcaster_id": "487263401"
        }
      ],
      "created_at": "2024-09-29T19:45:37Z",
      "updated_at": "2024-09-29T19:45:37Z"
    }
  ]
}
```

<h3 id="retrieves-the-active-shared-chat-session-for-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the shared chat session. Returns an empty array if the broadcaster\_id in the request isn’t in a shared chat session.|[GetSharedChatSessionResponse](#schemagetsharedchatsessionresponse)|
|400|Bad Request|The ID in the `broadcaster_id` query parameter is not valid.|None|
|401|Unauthorized|* The OAuth token is not valid.<br>* The Authorization header is required and must contain a user access token.|None|
|500|Internal Server Error|Internal Server Error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Retrieves emotes available to the user across all channels.

<a id="opIdget-user-emotes"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/emotes/user?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/emotes/user`

Retrieves emotes available to the user across all channels.

__Authorization:__

* Requires a user access token that includes the **user:read:emotes** scope.
* Query parameter `user_id` must match the `user_id` in the user access token.

<a href="https://dev.twitch.tv/docs/api/reference#get-user-emotes">Get User Emotes</a>

<h3 id="retrieves-emotes-available-to-the-user-across-all-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|The ID of the user. This ID must match the user ID in the user access token.|
|after|query|string|false|The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value.|
|broadcaster_id|query|string|false|The User ID of a broadcaster you wish to get follower emotes of. Using this query parameter will guarantee inclusion of the broadcaster’s follower emotes in the response body.   <br>  <br>**Note:** If the user specified in `user_id` is subscribed to the broadcaster specified, their follower emotes will appear in the response body regardless if this query parameter is used.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "emote_set_id": "",
      "emote_type": "hypetrain",
      "format": [
        "static"
      ],
      "id": "304420818",
      "name": "HypeLol",
      "owner_id": "477339272",
      "scale": [
        "1.0",
        "2.0",
        "3.0"
      ],
      "theme_mode": [
        "light",
        "dark"
      ]
    }
  ],
  "template": "https://static-cdn.jtvnw.net/emoticons/v2/{{id}}/{{format}}/{{theme_mode}}/{{scale}}",
  "pagination": {
    "cursor": "eyJiIjpudWxsLJxhIjoiIn0gf5"
  }
}
```

<h3 id="retrieves-emotes-available-to-the-user-across-all-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the emotes.|[GetUserEmotesResponse](#schemagetuseremotesresponse)|
|400|Bad Request|* The _user\_id_ query parameter is required.<br>* The ID in the _user\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in _user\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:emotes** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:emotes )
</aside>

## Sends an announcement to the broadcaster’s chat room.

<a id="opIdsend-chat-announcement"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/announcements?broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "Hello chat!",
    "color": "purple"
  }'
```

`POST /chat/announcements`

Sends an announcement to the broadcaster’s chat room.

**Rate Limits**: One announcement may be sent every 2 seconds.**NOTE:** When sending announcements during a Shared Chat session, behaviors differ depending on your authentication token type:

* When using an _App Access Token_, announcements will only be sent to the source channel (defined by the `broadcaster_id` parameter) by default. Announcements can be sent to all channels by using the `for_source_only` parameter and setting it to `false`.
* When using a _User Access Token_, announcements will be sent to all channels in the shared chat session, including the source channel. This behavior cannot be changed with this token type.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:announcements** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through prior authorizations, has:  
    
* The **moderator:manage:announcements** and **user:bot** scopes for the user represented by the `moderator_id` in the query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#send-chat-announcement">Send Chat Announcement</a>

> Body parameter

```json
{
  "message": "Hello chat!",
  "color": "purple"
}
```

<h3 id="sends-an-announcement-to-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room to send the announcement to.|
|moderator_id|query|string|true|The ID of a user who has permission to moderate the broadcaster’s chat room, or the broadcaster’s ID if they’re sending the announcement.|
|body|body|[SendChatAnnouncementBody](#schemasendchatannouncementbody)|false|none|
|» message|body|string|true|The announcement to make in the broadcaster’s chat room. Announcements are limited to a maximum of 500 characters; announcements longer than 500 characters are truncated.|
|» color|body|string|false|The color used to highlight the announcement. Possible case-sensitive values are:  <br>  <br>* blue<br>* green<br>* orange<br>* purple<br>* primary (default)<br>  <br>If `color` is set to _primary_ or is not set, the channel’s accent color is used to highlight the announcement (see **Profile Accent Color** under [profile settings](https://www.twitch.tv/settings/profile), **Channel and Videos**, and **Brand**).|
|» for_source_only|body|boolean|false|**NOTE:** This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error.  <br>  <br>Determines if the chat announcement is sent only to the source channel (defined by _broadcaster\_id_) during a shared chat session. This has no effect if the announcement is not sent during a shared chat session.  <br>  <br>The default value when using an App Access Token is `true`. If you prefer to send an announcement to all channels in a shared chat session, set this parameter to `false`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» color|blue|
|» color|green|
|» color|orange|
|» color|purple|
|» color|primary|

<h3 id="sends-an-announcement-to-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the announcement.<br><br>__Examples__<br><br>_Request:_<br><br>Sends an announcement to the broadcaster’s chat room.<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/chat/announcements?broadcaster_id=11111&moderator_id=44444' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t' \<br>-H 'Content-Type: application/json' \<br>-d '{"message":"Hello chat!","color":"purple"}'<br>```<br><br>_Request:_<br><br>Sends an announcement to the source channel only (default for app tokens).<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/chat/announcements?broadcaster_id=11111&moderator_id=44444' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t' \<br>-H 'Content-Type: application/json' \<br>-d '{"message":"Hello chat!","color":"purple"}'<br>```|None|
|400|Bad Request|* The `message` field in the request's body is required.<br>* The `message` field may not contain an empty string.<br>* The string in the `message` field failed review.<br>* The specified color is not valid.<br>* Cannot set `for_source_only` if User Access Token is used.|None|
|401|Unauthorized|* The Authorization header is required and must contain an access token.<br>* The user access token is missing the **moderator:manage:announcements** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.<br>* The sender must have authorized the app with the **moderator:manage:announcements** and **user:bot** scopes.<br>* The broadcaster must have authorized the app with the **channel:bot** scope.|None|
|429|Too Many Requests|The sender has exceeded the number of announcements they may send to this **broadcaster\_id** within a given window.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:announcements user:bot channel:bot )
</aside>

## Sends a Shoutout to the specified broadcaster.

<a id="opIdsend-a-shoutout"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/shoutouts?from_broadcaster_id=string&to_broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /chat/shoutouts`

Sends a Shoutout to the specified broadcaster. Typically, you send Shoutouts when you or one of your moderators notice another broadcaster in your chat, the other broadcaster is coming up in conversation, or after they raid your broadcast.

Twitch’s Shoutout feature is a great way for you to show support for other broadcasters and help them grow. Viewers who do not follow the other broadcaster will see a pop-up Follow button in your chat that they can click to follow the other broadcaster. [Learn More](https://help.twitch.tv/s/article/shoutouts)

**Rate Limits**: The broadcaster may send a Shoutout once every 2 minutes. They may send the same broadcaster a Shoutout once every 60 minutes.

To receive notifications when a Shoutout is sent or received, subscribe to the [channel.shoutout.create](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutcreate) and [channel.shoutout.receive](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshoutoutreceive) subscription types. The **channel.shoutout.create** event includes cooldown periods that indicate when the broadcaster may send another Shoutout without exceeding the endpoint’s rate limit.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shoutouts** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through prior authorizations, has:  
    
* The **moderator:manage:shoutouts** and **user:bot** scopes for the user represented by the `moderator_id` in the query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#send-a-shoutout">Send a Shoutout</a>

<h3 id="sends-a-shoutout-to-the-specified-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_broadcaster_id|query|string|true|The ID of the broadcaster that’s sending the Shoutout.|
|to_broadcaster_id|query|string|true|The ID of the broadcaster that’s receiving the Shoutout.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token.|

<h3 id="sends-a-shoutout-to-the-specified-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the specified broadcaster a Shoutout.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/chat/shoutouts?from_broadcaster_id=12345&to_broadcaster_id=626262&moderator_id=98765' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The _from\_broadcaster\_id_ query parameter is required.<br>* The ID in the _from\_broadcaster\_id_ query parameter is not valid.<br>* The _to\_broadcaster\_id_ query parameter is required.<br>* The ID in the _to\_broadcaster\_id_ query parameter is not valid.<br>* The broadcaster may not give themselves a Shoutout.<br>* The broadcaster is not streaming live or does not have one or more viewers.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:shoutouts** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.<br>* The broadcaster may not send the specified broadcaster a Shoutout.|None|
|429|Too Many Requests|* The broadcaster exceeded the number of Shoutouts they may send within a given window. See the endpoint's Rate Limits.<br>* The broadcaster exceeded the number of Shoutouts they may send the same broadcaster within a given window. See the endpoint's Rate Limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:shoutouts user:bot channel:bot )
</aside>

## Sends a message to the broadcaster’s chat room.

<a id="opIdsend-chat-message"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/chat/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "12826",
    "sender_id": "141981764",
    "message": "Hello, world! twitchdevHype",
    "for_source_only": true
  }'
```

`POST /chat/messages`

Sends a message to the broadcaster’s chat room.

**NOTE:** When sending messages to a Shared Chat session, behaviors differ depending on your authentication token type:

* When using an _App Access Token_, messages will only be sent to the source channel (defined by the `broadcaster_id` parameter) by default starting on May 19, 2025\. Messages can be sent to all channels by using the `for_source_only` parameter and setting it to `false`.
* When using a _User Access Token_, messages will be sent to all channels in the shared chat session, including the source channel. This behavior cannot be changed with this token type.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:write:chat** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has:  
    
* The **user:write:chat** scope and the **user:bot** scope for the user represented by the `sender_id` query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter, unless the user represented by the `sender_id` already has moderator status.

<a href="https://dev.twitch.tv/docs/api/reference#send-chat-message">Send Chat Message</a>

> Body parameter

```json
{
  "broadcaster_id": "12826",
  "sender_id": "141981764",
  "message": "Hello, world! twitchdevHype",
  "for_source_only": true
}
```

<h3 id="sends-a-message-to-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendChatMessageBody](#schemasendchatmessagebody)|false|none|
|» broadcaster_id|body|string|true|The ID of the broadcaster whose chat room the message will be sent to.|
|» sender_id|body|string|true|The ID of the user sending the message. This ID must match the user ID in the user access token.|
|» message|body|string|true|The message to send. The message is limited to a maximum of 500 characters. Chat messages can also include emoticons. To include emoticons, use the name of the emote. The names are case sensitive. Don’t include colons around the name (e.g., :bleedPurple:). If Twitch recognizes the name, Twitch converts the name to the emote before writing the chat message to the chat room|
|» reply_parent_message_id|body|string|false|The ID of the chat message being replied to.|
|» for_source_only|body|boolean|false|**NOTE:** This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error.  <br>  <br>Determines if the chat message is sent only to the source channel (defined by _broadcaster\_id_) during a shared chat session. This has no effect if the message is not sent during a shared chat session.  <br>  <br>If this parameter is not set, the default value when using an App Access Token is `false`. On May 19, 2025 the default value for this parameter will be updated to `true`, and chat messages sent using an App Access Token will only be shared with the source channel by default. If you prefer to send a chat message to both channels in a shared chat session, make sure this parameter is explicitly set to `false` in your API request before May 19.|
|» pin|body|boolean|false|NEW If true, the message will be sent and immediately pinned. Default: false. Cannot be combined with `reply_parent_message_id` or `for_source_only`. When `pin` is true, additionally requires the `moderator:manage:chat_messages` scope and the sender must be the broadcaster or a moderator. Messages pinned via this endpoint are always pinned for 20 minutes. If the pin fails, the message is not sent.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "message_id": "abc-123-def",
      "is_sent": true
    }
  ]
}
```

<h3 id="sends-a-message-to-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully sent the specified broadcaster a message.|[SendChatMessageResponse](#schemasendchatmessageresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _sender\_id_ query parameter is required.<br>* The ID in the _sender\_id_ query parameter is not valid.<br>* The _text_ query parameter is required.<br>* The ID in the _reply\_parent\_message\_id_ query parameter is not valid.<br>* Cannot set \*for\_source\_only\* if User Access Token is used.<br>* The _reply\_parent\_message\_id_ parameter is not supported when _pin_ is true.<br>* The _for\_source\_only_ parameter is not supported when _pin_ is true.|None|
|401|Unauthorized|* The ID in the user\_id query parameter must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the user:write:chat scope.<br>* Pinning requires the **moderator:manage:chat\_messages** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|The sender is not permitted to send chat messages to the broadcaster’s chat room.|None|
|422|Unprocessable Entity|The message is too large.|None|
|429|Too Many Requests|The rate limit has been exceeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:write:chat user:bot channel:bot )
</aside>

## NEW Gets the currently pinned message for the broadcaster’s chat room.

<a id="opIdget-pinned-chat-message"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/pins`

NEW Gets the currently pinned message for the specified broadcaster’s chat room, including message fragments. Only one mod-pinned message can be active per channel at a time.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** or **moderator:read:chat\_messages** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has:  
    
* The **moderator:manage:chat\_messages** or **moderator:read:chat\_messages** scope, and the **user:bot** scope for the user represented by the `moderator_id` query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-pinned-chat-message">Get Pinned Chat Message</a>

<h3 id="new-gets-the-currently-pinned-message-for-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "message_id": "abc-def-123-456",
      "broadcaster_id": "197886470",
      "sender_user_id": "12826",
      "sender_user_login": "twitch",
      "sender_user_name": "Twitch",
      "pinned_by_user_id": "141981764",
      "pinned_by_user_login": "twitchdev",
      "pinned_by_user_name": "TwitchDev",
      "message": {
        "text": "Welcome! bleedPurple Type !rules",
        "fragments": [
          {
            "type": "text",
            "text": "Welcome! ",
            "cheermote": null,
            "emote": null,
            "mention": null
          },
          {
            "type": "emote",
            "text": "bleedPurple",
            "cheermote": null,
            "emote": {
              "id": "62835",
              "emote_set_id": "0",
              "owner_id": "0",
              "format": [
                "static"
              ]
            },
            "mention": null
          },
          {
            "type": "text",
            "text": " Type !rules",
            "cheermote": null,
            "emote": null,
            "mention": null
          }
        ]
      },
      "starts_at": "2026-05-06T12:30:00Z",
      "ends_at": "2026-05-06T12:35:00Z",
      "updated_at": "2026-05-06T12:30:00Z"
    }
  ]
}
```

<h3 id="new-gets-the-currently-pinned-message-for-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved pinned message(s).|[GetPinnedChatMessageResponse](#schemagetpinnedchatmessageresponse)|
|400|Bad Request|A required query parameter is missing.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token or app access token.<br>* The access token must include the **moderator:manage:chat\_messages** or **moderator:read:chat\_messages** scope.|None|
|403|Forbidden|The user does not have permission to moderate the broadcaster’s chat room.|None|
|500|Internal Server Error|An unexpected error occurred.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_messages moderator:read:chat_messages user:bot channel:bot )
</aside>

## NEW Pins a chat message to the specified broadcaster’s chat room.

<a id="opIdpin-chat-message"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=string&moderator_id=string&message_id=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /chat/pins`

NEW Pins a chat message to the top of the specified broadcaster’s chat room. Only one mod-pinned message can be active per channel at a time. If a mod-pinned message already exists, it is automatically replaced.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has:  
    
* The **moderator:manage:chat\_messages** and **user:bot** scopes for the user represented by the `moderator_id` query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#pin-chat-message">Pin Chat Message</a>

<h3 id="new-pins-a-chat-message-to-the-specified-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.|
|message_id|query|string|true|The ID of the message to pin.|
|duration_seconds|query|integer(int32)|false|The number of seconds the message should be pinned for. Minimum: 30\. Maximum: 1800\. If not specified, the message will be pinned until the stream ends.|

<h3 id="new-pins-a-chat-message-to-the-specified-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully pinned the message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=197886470&moderator_id=141981764&message_id=abc-def-123&duration_seconds=300' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* A required query parameter is missing or invalid.<br>* The _duration\_seconds_ value is invalid.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token or app access token.<br>* The access token must include the **moderator:manage:chat\_messages** scope.|None|
|403|Forbidden|The user does not have permission to pin messages in this channel.|None|
|404|Not Found|The specified message was not found.|None|
|409|Conflict|The message is already pinned.|None|
|429|Too Many Requests|The rate limit for pinning messages has been exceeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_messages user:bot channel:bot )
</aside>

## NEW Unpins a pinned chat message from the broadcaster’s chat room.

<a id="opIdunpin-chat-message"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=string&moderator_id=string&message_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /chat/pins`

NEW Unpins a pinned chat message from the specified broadcaster’s chat room.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has:  
    
* The **moderator:manage:chat\_messages** and **user:bot** scopes for the user represented by the `moderator_id` query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#unpin-chat-message">Unpin Chat Message</a>

<h3 id="new-unpins-a-pinned-chat-message-from-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.|
|message_id|query|string|true|The ID of the message to unpin.|

<h3 id="new-unpins-a-pinned-chat-message-from-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully unpinned the message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=197886470&moderator_id=141981764&message_id=789-xyz' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|A required query parameter is missing.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token or app access token.<br>* The access token must include the **moderator:manage:chat\_messages** scope.|None|
|403|Forbidden|The user does not have permission to unpin messages in this channel.|None|
|404|Not Found|The specified pinned message was not found.|None|
|429|Too Many Requests|The rate limit for unpinning messages has been exceeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_messages user:bot channel:bot )
</aside>

## NEW Updates the duration of a pinned chat message.

<a id="opIdupdate-pinned-chat-message"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=string&moderator_id=string&message_id=string' \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /chat/pins`

NEW Updates the duration of an existing pinned chat message.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has:  
    
* The **moderator:manage:chat\_messages** and **user:bot** scopes for the user represented by the `moderator_id` query parameter, and  
* The **channel:bot** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#update-pinned-chat-message">Update Pinned Chat Message</a>

<h3 id="new-updates-the-duration-of-a-pinned-chat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room.|
|message_id|query|string|true|The ID of the pinned message to update.|
|duration_seconds|query|integer(int32)|false|The new number of seconds the message should remain pinned, starting from now. Minimum: 30\. Maximum: 1800\. If not specified, the message will be pinned until the stream ends.|

<h3 id="new-updates-the-duration-of-a-pinned-chat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the pinned message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X PATCH 'https://api.twitch.tv/helix/chat/pins?broadcaster_id=197886470&moderator_id=141981764&message_id=789-xyz&duration_seconds=600' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* A required query parameter is missing or invalid.<br>* The _duration\_seconds_ value is invalid.|None|
|401|Unauthorized|* The Authorization header is required and must specify a user access token or app access token.<br>* The access token must include the **moderator:manage:chat\_messages** scope.|None|
|403|Forbidden|The user does not have permission to update pinned messages in this channel.|None|
|404|Not Found|The specified pinned message was not found.|None|
|429|Too Many Requests|The rate limit for updating pinned messages has been exceeded.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_messages user:bot channel:bot )
</aside>

## Gets the color used for the user’s name in chat.

<a id="opIdget-user-chat-color"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/color?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /chat/color`

Gets the color used for the user’s name in chat.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-user-chat-color">Get User Chat Color</a>

<h3 id="gets-the-color-used-for-the-users-name-in-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|[string]|true|The ID of the user whose username color you want to get. To specify more than one user, include the _user\_id_ parameter for each user to get. For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100.  <br>  <br>The API ignores duplicate IDs and IDs that weren’t found.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "11111",
      "user_name": "SpeedySpeedster1",
      "user_login": "speedyspeedster1",
      "color": "#9146FF"
    },
    {
      "user_id": "44444",
      "user_name": "SpeedySpeedster2",
      "user_login": "speedyspeedster2",
      "color": ""
    }
  ]
}
```

<h3 id="gets-the-color-used-for-the-users-name-in-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the chat color used by the specified users.|[GetUserChatColorResponse](#schemagetuserchatcolorresponse)|
|400|Bad Request|* The ID in the _user\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates the color used for the user’s name in chat.

<a id="opIdupdate-user-chat-color"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/chat/color?user_id=string&color=blue' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /chat/color`

Updates the color used for the user’s name in chat.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:chat\_color** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-user-chat-color">Update User Chat Color</a>

<h3 id="updates-the-color-used-for-the-users-name-in-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|The ID of the user whose chat color you want to update. This ID must match the user ID in the access token.|
|color|query|string|true|The color to use for the user's name in chat. All users may specify one of the following named color values.  <br>  <br>* blue<br>* blue\_violet<br>* cadet\_blue<br>* chocolate<br>* coral<br>* dodger\_blue<br>* firebrick<br>* golden\_rod<br>* green<br>* hot\_pink<br>* orange\_red<br>* red<br>* sea\_green<br>* spring\_green<br>* yellow\_green<br>  <br>Turbo and Prime users may specify a named color or a Hex color code like #9146FF. If you use a Hex color code, remember to URL encode it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|blue|
|color|blue_violet|
|color|cadet_blue|
|color|chocolate|
|color|coral|
|color|dodger_blue|
|color|firebrick|
|color|golden_rod|
|color|green|
|color|hot_pink|
|color|orange_red|
|color|red|
|color|sea_green|
|color|spring_green|
|color|yellow_green|

<h3 id="updates-the-color-used-for-the-users-name-in-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the user's chat color.<br><br>__Examples__<br><br>_Request:_<br><br>Uses a named color to change the color that the user uses for their name in chat.<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/chat/color?user_id=123&color=blue' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```<br><br>Uses a color Hex code to change the color that the user uses for their name in chat.<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/chat/color?user_id=123&color=%239146FF' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The ID in the _user\_id_ query parameter is not valid.<br>* The _color_ query parameter is required.<br>* The named color in the _color_ query parameter is not valid.<br>* To specify a Hex color code, the user must be a Turbo or Prime user.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:manage:chat\_color** scope.<br>* The OAuth token is not valid.<br>* The ID in the _user\_id_ query parameter must match the user ID in the access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:manage:chat_color )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-clips">Clips</h1>

## Gets one or more video clips.

<a id="opIdget-clips"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/clips \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /clips`

Gets one or more video clips that were captured from streams. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips).

When using pagination for clips, note that the maximum number of results returned over multiple requests will be approximately 1,000\. If additional results are necessary, paginate over different query parameters such as multiple `started_at` and `ended_at` timeframes to refine the search.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

__Request Query Parameters:__

The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive.

<a href="https://dev.twitch.tv/docs/api/reference#get-clips">Get Clips</a>

<h3 id="gets-one-or-more-video-clips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|false|An ID that identifies the broadcaster whose video clips you want to get. Use this parameter to get clips that were captured from the broadcaster’s streams.|
|game_id|query|string|false|An ID that identifies the game whose clips you want to get. Use this parameter to get clips that were captured from streams that were playing this game.|
|id|query|[string]|false|An ID that identifies the clip to get. To specify more than one ID, include this parameter for each clip you want to get. For example, `id=foo&id=bar`. You may specify a maximum of 100 IDs. The API ignores duplicate IDs and IDs that aren’t found.|
|started_at|query|string(date-time)|false|The start date used to filter clips. The API returns only clips within the start and end date window. Specify the date and time in RFC3339 format.|
|ended_at|query|string(date-time)|false|The end date used to filter clips. If not specified, the time window is the start date plus one week. Specify the date and time in RFC3339 format.|
|first|query|integer(int32)|false|The maximum number of clips to return per page in the response. The minimum page size is 1 clip per page and the maximum is 100\. The default is 20.|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|is_featured|query|boolean|false|A Boolean value that determines whether the response includes featured clips. If **true**, returns only clips that are featured. If **false**, returns only clips that aren’t featured. All clips are returned if this parameter is not present.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "AwkwardHelplessSalamanderSwiftRage",
      "url": "https://clips.twitch.tv/AwkwardHelplessSalamanderSwiftRage",
      "embed_url": "https://clips.twitch.tv/embed?clip=AwkwardHelplessSalamanderSwiftRage",
      "broadcaster_id": "67955580",
      "broadcaster_name": "ChewieMelodies",
      "creator_id": "53834192",
      "creator_name": "BlackNova03",
      "video_id": "205586603",
      "game_id": "488191",
      "language": "en",
      "title": "babymetal",
      "view_count": 10,
      "created_at": "2017-11-30T22:34:18Z",
      "thumbnail_url": "https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg",
      "duration": 60,
      "vod_offset": 480,
      "is_featured": false
    }
  ]
}
```

<h3 id="gets-one-or-more-video-clips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of video clips.|[GetClipsResponse](#schemagetclipsresponse)|
|400|Bad Request|* The _id_ or _game\_id_ or _broadcaster\_id_ query parameter is required.<br>* The _id_, _game\_id_, and _broadcaster\_id_ query parameters are mutually exclusive; you may specify only one of them.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|404|Not Found|* The ID in _game\_id_ was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Creates a clip from the broadcaster’s stream.

<a id="opIdcreate-clip"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/clips?broadcaster_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /clips`

Creates a clip from the broadcaster’s stream.

This API captures up to 90 seconds of the broadcaster’s stream. The 90 seconds spans the point in the stream from when you called the API. For example, if you call the API at the 4:00 minute mark, the API captures from approximately the 2:35 mark to approximately the 4:05 minute mark. Twitch tries its best to capture 90 seconds of the stream, but the actual length may be less. This may occur if you begin capturing the clip near the beginning or end of the stream.

By default, Twitch publishes up to the last 30 seconds of the 90 seconds window and provides a default title for the clip. To specify the title and the portion of the 90 seconds window that’s used for the clip, use the URL in the response’s `edit_url` field. You can specify a clip that’s from 5 seconds to 60 seconds in length. The URL is valid for up to 24 hours or until the clip is published, whichever comes first.

Creating a clip is an asynchronous process that can take a short amount of time to complete. To determine whether the clip was successfully created, call [Get Clips](https://dev.twitch.tv/docs/api/reference#get-clips) using the clip ID that this request returned. If Get Clips returns the clip, the clip was successfully created. If after 60 seconds Get Clips hasn’t returned the clip, assume it failed.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **clips:edit** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-clip">Create Clip</a>

<h3 id="creates-a-clip-from-the-broadcasters-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose stream you want to create a clip from.|
|title|query|string|false|The title of the clip.|
|duration|query|number(float)|false|The length of the clip in seconds. Possible values range from 5 to 60 inclusively with a precision of 0.1\. The default is 30.|

> Example responses

> 202 Response

```json
{
  "data": [
    {
      "id": "FiveWordsForClipSlug",
      "edit_url": "https://www.twitch.tv/twitchdev/clip/FiveWordsForClipSlug"
    }
  ]
}
```

<h3 id="creates-a-clip-from-the-broadcasters-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully started the clip process.|[CreateClipResponse](#schemacreateclipresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter was not found.<br>* The category is not clippable.<br>* The title did not pass AutoMod checks.|None|
|401|Unauthorized|* The Authorization header is required and must specify user access token.<br>* The user access token must include the **clips:edit** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The broadcaster has restricted the ability to capture clips to followers and/or subscribers only.<br>* The specified broadcaster has not enabled clips on their channel.<br>* The user is banned or timed out from the broadcaster’s channel.|None|
|404|Not Found|* The broadcaster in the _broadcaster\_id_ query parameter must be broadcasting live.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: clips:edit )
</aside>

## NEW Creates a clip from the broadcaster’s VOD.

<a id="opIdcreate-clip-from-vod"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/videos/clips?editor_id=string&broadcaster_id=string&vod_id=string&vod_offset=0&title=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /videos/clips`

NEW Creates a clip from a broadcaster’s VOD on behalf of the broadcaster or an editor of the channel. Since a live stream is actively creating a VOD, this endpoint can also be used to create a clip from earlier in the current stream.

The duration of a clip can be from 5 seconds to 60 seconds in length, with a default of 30 seconds if not specified.

`vod_offset` indicates where the clip will end. In other words, the clip will start at (`vod_offset` \- `duration`) and end at `vod_offset`. This means that the value of `vod_offset` must greater than or equal to the value of `duration`.

The URL in the response’s `edit_url` field allows you to edit the clip’s title, feature the clip, create a portrait version of the clip, download the clip media, and share the clip directly to social platforms.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **editor:manage:clips** or **channel:manage:clips** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-clip-from-vod">Create Clip From VOD</a>

<h3 id="new-creates-a-clip-from-the-broadcasters-vod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|editor_id|query|string|true|The user ID of the editor for the channel you want to create a clip for. If using the broadcaster’s auth token, this is the same as broadcaster\_id. This must match the user\_id in the user access token.|
|broadcaster_id|query|string|true|The user ID for the channel you want to create a clip for.|
|vod_id|query|string|true|ID of the VOD the user wants to clip.|
|vod_offset|query|integer(int32)|true|The zero-based offset, in seconds, to where the clip should end in the video (VOD). See this endpoint’s description for more information on how to use this parameter.|
|duration|query|number(float)|false|The length of the clip, in seconds. Precision is 0.1\. Defaults to 30\. Min: 5 seconds, Max: 60 seconds.|
|title|query|string|true|The title of the clip.|

> Example responses

> 202 Response

```json
{
  "data": [
    {
      "id": "FiveWordsForClipSlug",
      "edit_url": "https://www.twitch.tv/twitchdev/clip/FiveWordsForClipSlug"
    }
  ]
}
```

<h3 id="new-creates-a-clip-from-the-broadcasters-vod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully started the clip process.|[CreateClipFromVODResponse](#schemacreateclipfromvodresponse)|
|400|Bad Request|* Validation errors: Invalid source type, missing required fields.<br>* The broadcaster\_id query parameter is required.<br>* The ID in the broadcaster\_id query parameter was not found.<br>* The category is not clippable.<br>* The title did not pass AutoMod checks.<br>* Broadcaster is banned.|None|
|401|Unauthorized|* The Authorization header is required and must specify user access token.<br>* The user access token must include the **editor:manage:clips** or **channel:manage:clips** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The broadcaster has restricted the ability to capture clips to followers and/or subscribers only.<br>* The specified broadcaster has not enabled clips on their channel.<br>* The user defined by the _editor\_id_ is not authorized to create Clips.<br>* The user is banned or timed out from the broadcaster's channel.|None|
|404|Not Found|* The broadcaster in the _broadcaster\_id_ query parameter must be broadcasting live.<br>* The VOD is not found..<br>* The _broadcaster\_id_ or the _editor\_id_ does not exist.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: editor:manage:clips channel:manage:clips )
</aside>

## NEW Provides URLs to download the video file(s) for the specified clips.

<a id="opIdget-clips-download"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/clips/downloads?editor_id=string&broadcaster_id=string&clip_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /clips/downloads`

NEW Provides URLs to download the video file(s) for the specified clips. For information about clips, see [How to use clips](https://help.twitch.tv/s/article/how-to-use-clips). These links are temporary and should have a long-term expectation to expire.

**Rate Limits**: Limited to 100 requests per minute.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the `editor:manage:clips` or `channel:manage:clips` scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-clips-download">Get Clips Download</a>

<h3 id="new-provides-urls-to-download-the-video-files-for-the-specified-clips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|editor_id|query|string|true|The User ID of the editor for the channel you want to download a clip for. If using the broadcaster’s auth token, this is the same as `broadcaster_id`. This must match the `user_id` in the user access token.|
|broadcaster_id|query|string|true|The ID of the broadcaster you want to download clips for.|
|clip_id|query|[string]|true|The ID that identifies the clip you want to download. Include this parameter for each clip you want to download, up to a maximum of 10 clips. For example, `clip_id=SleepyGiftedPeppermintNerfRedBlaster-KbkBXYt3lOk3jy8-&clip_id=WimpyAltruisticKleeKeyboardCat-EiY5yMrEwZ4i4gwC`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "clip_id": "InexpensiveDistinctFoxChefFrank",
      "landscape_download_url": "https://production.assets.clips.twitchcdn.net/yFZG...",
      "portrait_download_url": null
    },
    {
      "clip_id": "SpinelessCloudyLeopardMcaT",
      "landscape_download_url": "https://production.assets.clips.twitchcdn.net/542j...",
      "portrait_download_url": null
    }
  ]
}
```

<h3 id="new-provides-urls-to-download-the-video-files-for-the-specified-clips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the clip download URL(s).|[GetClipsDownloadResponse](#schemagetclipsdownloadresponse)|
|400|Bad Request|The ID in the broadcaster\_id, editor\_id, or clip\_id query parameter is not valid.|None|
|401|Unauthorized|* The OAuth token is not valid.<br>* The Authorization header is required and must contain a user access token or app access token.<br>* The access token must include the editor:manage:clips or channel:manage:clips scope<br>* The access token is not valid<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|The user is not an editor for the specified broadcaster.|None|
|500|Internal Server Error|Internal Server Error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: editor:manage:clips channel:manage:clips )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-conduits">Conduits</h1>

## Gets the conduits for a client ID.

<a id="opIdget-conduits"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/conduits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /eventsub/conduits`

Gets the [conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) for a client ID.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-conduits">Get Conduits</a>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "26b1c993-bfcf-44d9-b876-379dacafe75a",
      "shard_count": 15
    },
    {
      "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
      "shard_count": 5
    }
  ]
}
```

<h3 id="gets-the-conduits-for-a-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved conduits.|[GetConduitsResponse](#schemagetconduitsresponse)|
|401|Unauthorized|Authorization header required with an app access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Creates a new conduit.

<a id="opIdcreate-conduits"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/conduits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "shard_count": 5
  }'
```

`POST /eventsub/conduits`

Creates a new [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#create-conduits">Create Conduits</a>

> Body parameter

```json
{
  "shard_count": 5
}
```

<h3 id="creates-a-new-conduit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateConduitsBody](#schemacreateconduitsbody)|false|none|
|» shard_count|body|integer(int32)|true|The number of shards to create for this conduit.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
      "shard_count": 5
    }
  ]
}
```

<h3 id="creates-a-new-conduit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conduit created.|[CreateConduitsResponse](#schemacreateconduitsresponse)|
|400|Bad Request|Invalid shard count.|None|
|401|Unauthorized|Authorization header required with an app access token.|None|
|429|Too Many Requests|Conduit limit reached.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Deletes a specified conduit.

<a id="opIddelete-conduit"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/eventsub/conduits?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /eventsub/conduits`

Deletes a specified [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/). Note that it may take some time for Eventsub subscriptions on a deleted [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to show as disabled when calling [Get Eventsub Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-eventsub-subscriptions).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#delete-conduit">Delete Conduit</a>

<h3 id="deletes-a-specified-conduit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Conduit ID.|

<h3 id="deletes-a-specified-conduit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the conduit.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/eventsub/conduits?id=bfcfc993-26b1-b876-44d9-afe75a379dac' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|The id query parameter is required.|None|
|401|Unauthorized|Authorization header required with an app access token.|None|
|404|Not Found|* Conduit not found.<br>* Conduit’s owner must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates a conduit’s shard count.

<a id="opIdupdate-conduits"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/conduits \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
    "shard_count": 5
  }'
```

`PATCH /eventsub/conduits`

Updates a [conduit’s](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) shard count. To delete shards, update the count to a lower number, and the shards above the count will be deleted. For example, if the existing shard count is 100, by resetting shard count to 50, shards 50-99 are disabled.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#update-conduits">Update Conduits</a>

> Body parameter

```json
{
  "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
  "shard_count": 5
}
```

<h3 id="updates-a-conduits-shard-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateConduitsBody](#schemaupdateconduitsbody)|false|none|
|» id|body|string|true|Conduit ID.|
|» shard_count|body|integer(int32)|true|The new number of shards for this conduit.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
      "shard_count": 5
    }
  ]
}
```

<h3 id="updates-a-conduits-shard-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conduit updated.|[UpdateConduitsResponse](#schemaupdateconduitsresponse)|
|400|Bad Request|* Invalid shard count<br>* The id query parameter is required.|None|
|401|Unauthorized|Authorization header required with an app access token.|None|
|404|Not Found|* Conduit not found.<br>* Conduit’s owner must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets a lists of all shards for a conduit.

<a id="opIdget-conduit-shards"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/eventsub/conduits/shards?conduit_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /eventsub/conduits/shards`

Gets a lists of all shards for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-conduit-shards">Get Conduit Shards</a>

<h3 id="gets-a-lists-of-all-shards-for-a-conduit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conduit_id|query|string|true|Conduit ID.|
|status|query|string|false|Status to filter by.|
|after|query|string|false|The cursor used to get the next page of results. The pagination object in the response contains the cursor’s value.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "0",
      "status": "enabled",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com"
      }
    },
    {
      "id": "1",
      "status": "webhook_callback_verification_pending",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback-2.com"
      }
    },
    {
      "id": "2",
      "status": "enabled",
      "transport": {
        "method": "websocket",
        "session_id": "9fd5164a-a958-4c60-b7f4-6a7202506ca0",
        "connected_at": "2020-11-10T14:32:18.730260295Z"
      }
    },
    {
      "id": "3",
      "status": "enabled",
      "transport": {
        "method": "websocket",
        "session_id": "238b4b08-13f1-4b8f-8d31-56665a7a9d9f",
        "connected_at": "2020-11-10T14:32:18.730260295Z"
      }
    },
    {
      "id": "4",
      "status": "websocket_disconnected",
      "transport": {
        "method": "websocket",
        "session_id": "ad1c9fc3-0d99-4eb7-8a04-8608e8ff9ec9",
        "connected_at": "2020-11-10T14:32:18.730260295Z",
        "disconnected_at": "2020-11-11T14:32:18.730260295Z"
      }
    }
  ],
  "pagination": {}
}
```

<h3 id="gets-a-lists-of-all-shards-for-a-conduit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved shards.|[GetConduitShardsResponse](#schemagetconduitshardsresponse)|
|400|Bad Request|The id query parameter is required.|None|
|401|Unauthorized|Authorization header required with an app access token.|None|
|404|Not Found|* Conduit not found.<br>* Conduit’s owner must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates shard(s) for a conduit.

<a id="opIdupdate-conduit-shards"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/conduits/shards \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conduit_id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
    "shards": [
      {
        "id": "0",
        "transport": {
          "method": "webhook",
          "callback": "https://this-is-a-callback.com",
          "secret": "s3cre7"
        }
      },
      {
        "id": "1",
        "transport": {
          "method": "webhook",
          "callback": "https://this-is-a-callback-2.com",
          "secret": "s3cre7"
        }
      },
      {
        "id": "3",
        "transport": {
          "method": "webhook",
          "callback": "https://this-is-a-callback-3.com",
          "secret": "s3cre7"
        }
      }
    ]
  }'
```

`PATCH /eventsub/conduits/shards`

Updates shard(s) for a [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/). You can update up to 100 shards in a single request.

**NOTE:** Shard IDs are indexed starting at 0, so a conduit with a `shard_count` of 5 will have shards with IDs 0 through 4.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#update-conduit-shards">Update Conduit Shards</a>

> Body parameter

```json
{
  "conduit_id": "bfcfc993-26b1-b876-44d9-afe75a379dac",
  "shards": [
    {
      "id": "0",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com",
        "secret": "s3cre7"
      }
    },
    {
      "id": "1",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback-2.com",
        "secret": "s3cre7"
      }
    },
    {
      "id": "3",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback-3.com",
        "secret": "s3cre7"
      }
    }
  ]
}
```

<h3 id="updates-shards-for-a-conduit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateConduitShardsBody](#schemaupdateconduitshardsbody)|false|none|
|» conduit_id|body|string|true|Conduit ID.|
|» shards|body|[object]|true|List of shards to update.|
|» » id|body|string|true|Shard ID.|
|» » transport|body|object|true|The transport details that you want Twitch to use when sending you notifications.|
|» » » method|body|string|false|The transport method. Possible values are:   <br>  <br>* webhook<br>* websocket|
|» » » callback|body|string|false|The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443\. See Processing an event. Specify this field only if method is set to webhook. **NOTE:** Redirects are not followed.|
|» » » secret|body|string|false|The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see Verifying the event message. Specify this field only if method is set to webhook.|
|» » » session_id|body|string|false|An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if method is set to websocket.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » method|webhook|
|» » » method|websocket|

> Example responses

> 202 Response

```json
{
  "data": [
    {
      "id": "0",
      "status": "enabled",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com"
      }
    },
    {
      "id": "1",
      "status": "webhook_callback_verification_pending",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback-2.com"
      }
    }
  ],
  "errors": [
    {
      "id": "3",
      "message": "The shard id is outside the conduit's range",
      "code": "invalid_parameter"
    }
  ]
}
```

<h3 id="updates-shards-for-a-conduit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully updated shards.|[UpdateConduitShardsResponse](#schemaupdateconduitshardsresponse)|
|400|Bad Request|* The \`conduit\_id\` query parameter is required.|None|
|401|Unauthorized|Authorization header requires using an App Access Token for this request.|None|
|404|Not Found|* The specified `conduit_id` does not exist.<br>* Conduit's owner must match the Client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-ccls">CCLs</h1>

## Gets information about Twitch content classification labels.

<a id="opIdget-content-classification-labels"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/content_classification_labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /content_classification_labels`

Gets information about Twitch content classification labels.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-content-classification-labels">Get Content Classification Labels</a>

<h3 id="gets-information-about-twitch-content-classification-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|Locale for the Content Classification Labels. You may specify a maximum of 1 locale. Default: `“en-US”`  <br>Supported locales: `"bg-BG", "cs-CZ", "da-DK", "da-DK", "de-DE", "el-GR", "en-GB", "en-US", "es-ES", "es-MX", "fi-FI", "fr-FR", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BT", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sv-SE", "th-TH", "tr-TR", "vi-VN", "zh-CN", "zh-TW"`|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "DebatedSocialIssuesAndPolitics",
      "description": "Discussions or debates about politics or sensitive social issues such as elections, civic integrity, military conflict, and civil rights in a polarizing manner.",
      "name": "Politics and Sensitive Social Issues"
    },
    {
      "id": "DrugsIntoxication",
      "description": "Excessive tobacco glorification or promotion, any marijuana consumption/use, legal drug and alcohol induced intoxication, discussions of illegal drugs.",
      "name": "Drugs, Intoxication, or Excessive Tobacco Use"
    },
    {
      "id": "Gambling",
      "description": "Participating in online or in-person gambling, poker or fantasy sports, that involve the exchange of real money.",
      "name": "Gambling"
    },
    {
      "id": "MatureGame",
      "description": "Games that are rated Mature or less suitable for a younger audience.",
      "name": "Mature-rated game"
    },
    {
      "id": "ProfanityVulgarity",
      "description": "Prolonged, and repeated use of obscenities, profanities, and vulgarities, especially as a regular part of speech.",
      "name": "Significant Profanity or Vulgarity"
    },
    {
      "id": "SexualThemes",
      "description": "Content that focuses on sexualized physical attributes and activities, sexual topics, or experiences.",
      "name": "Sexual Themes"
    },
    {
      "id": "ViolentGraphic",
      "description": "Simulations and/or depictions of realistic violence, gore, extreme injury, or death.",
      "name": "Violent and Graphic Depictions"
    }
  ]
}
```

<h3 id="gets-information-about-twitch-content-classification-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of CCLs available.|[GetContentClassificationLabelsResponse](#schemagetcontentclassificationlabelsresponse)|
|400|Bad Request||None|
|401|Unauthorized||None|
|500|Internal Server Error||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-entitlements">Entitlements</h1>

## Gets an organization’s list of entitlements that have been granted to a game, a user, or both.

<a id="opIdget-drops-entitlements"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/entitlements/drops \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entitlements/drops`

Gets an organization’s list of entitlements that have been granted to a game, a user, or both.

**NOTE:** Entitlements returned in the response body data are not guaranteed to be sorted by any field returned by the API. To retrieve **CLAIMED** or **FULFILLED** entitlements, use the `fulfillment_status` query parameter to filter results. To retrieve entitlements for a specific game, use the `game_id` query parameter to filter results.

The following table identifies the request parameters that you may specify based on the type of access token used.

| Access token type | Parameter | Description |
| - | - | - |
| App | None | If you don’t specify request parameters, the request returns all entitlements that your organization owns. |
| App | user_id | The request returns all entitlements for any game that the organization granted to the specified user. |
| App | user_id, game_id | The request returns all entitlements that the specified game granted to the specified user. |
| App | game_id | The request returns all entitlements that the specified game granted to all entitled users. |
| User | None | If you don’t specify request parameters, the request returns all entitlements for any game that the organization granted to the user identified in the access token. |
| User | user_id | Invalid. |
| User | user_id, game_id | Invalid. |
| User | game_id | The request returns all entitlements that the specified game granted to the user identified in the access token. |


__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The Client ID associated with the access token must be owned by a user who is a member of the [organization](https://dev.twitch.tv/docs/docs/companies/) that holds ownership of the game.

<a href="https://dev.twitch.tv/docs/api/reference#get-drops-entitlements">Get Drops Entitlements</a>

<h3 id="gets-an-organizations-list-of-entitlements-that-have-been-granted-to-a-game-a-user-or-both-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|An ID that identifies the entitlement to get. Include this parameter for each entitlement you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs.|
|user_id|query|string|false|An ID that identifies a user that was granted entitlements.|
|game_id|query|string|false|An ID that identifies a game that offered entitlements.|
|fulfillment_status|query|string|false|The entitlement’s fulfillment status. Used to filter the list to only those with the specified status. Possible values are:   <br>  <br>* CLAIMED<br>* FULFILLED|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|first|query|integer(int32)|false|The maximum number of entitlements to return per page in the response. The minimum page size is 1 entitlement per page and the maximum is 1000\. The default is 20.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fulfillment_status|CLAIMED|
|fulfillment_status|FULFILLED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "fb78259e-fb81-4d1b-8333-34a06ffc24c0",
      "benefit_id": "74c52265-e214-48a6-91b9-23b6014e8041",
      "timestamp": "2019-01-28T04:17:53.325Z",
      "user_id": "25009227",
      "game_id": "33214",
      "fulfillment_status": "CLAIMED",
      "last_updated": "2019-01-28T04:17:53.325Z"
    },
    {
      "id": "862750a5-265e-4ab6-9f0a-c64df3d54dd0",
      "benefit_id": "74c52265-e214-48a6-91b9-23b6014e8041",
      "timestamp": "2019-01-28T04:16:53.325Z",
      "user_id": "25009227",
      "game_id": "33214",
      "fulfillment_status": "CLAIMED",
      "last_updated": "2021-06-15T04:16:53.325Z"
    },
    {
      "id": "d8879baa-3966-4d10-8856-15fdd62cce02",
      "benefit_id": "cdfdc5c3-65a2-43bc-8767-fde06eb4ab2c",
      "timestamp": "2019-01-28T04:15:53.325Z",
      "user_id": "25009227",
      "game_id": "33214",
      "fulfillment_status": "FULFILLED",
      "last_updated": "2019-01-28T04:17:53.325Z"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudW..."
  }
}
```

<h3 id="gets-an-organizations-list-of-entitlements-that-have-been-granted-to-a-game-a-user-or-both-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the entitlements.|[GetDropsEntitlementsResponse](#schemagetdropsentitlementsresponse)|
|400|Bad Request|* The value in the _fulfillment\_status_ query parameter is not valid.<br>* The ID in the _user\_id_ query parameter must match the user ID in the user access token.<br>* The client in the access token is not associated with a known organization.<br>* The owner of the client in the access token is not a member of the organization.|None|
|401|Unauthorized|* The ID in the Client-Id header must match the Client ID in the access token.<br>* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.|None|
|403|Forbidden|* The organization associated with the client in the access token must own the game specified in the _game\_id_ query parameter.<br>* The organization associated with the client in the access token must own the entitlements specified in the _id_ query parameter.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates the Drop entitlement’s fulfillment status.

<a id="opIdupdate-drops-entitlements"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/entitlements/drops \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fulfillment_status": "FULFILLED",
    "entitlement_ids": [
      "fb78259e-fb81-4d1b-8333-34a06ffc24c0",
      "862750a5-265e-4ab6-9f0a-c64df3d54dd0",
      "d8879baa-3966-4d10-8856-15fdd62cce02",
      "9a290126-7e3b-4f66-a9ae-551537893b65"
    ]
  }'
```

`PATCH /entitlements/drops`

Updates the Drop entitlement’s fulfillment status.

The following table identifies which entitlements are updated based on the type of access token used.

| Access token type | Data that’s updated |
| - | - |
| App | Updates all entitlements with benefits owned by the organization in the access token. |
| User | Updates all entitlements owned by the user in the access token and where the benefits are owned by the organization in the access token. |


__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens). The Client ID associated with the access token must be owned by a user who is a member of the [organization](https://dev.twitch.tv/docs/docs/companies/) that holds ownership of the game.

<a href="https://dev.twitch.tv/docs/api/reference#update-drops-entitlements">Update Drops Entitlements</a>

> Body parameter

```json
{
  "fulfillment_status": "FULFILLED",
  "entitlement_ids": [
    "fb78259e-fb81-4d1b-8333-34a06ffc24c0",
    "862750a5-265e-4ab6-9f0a-c64df3d54dd0",
    "d8879baa-3966-4d10-8856-15fdd62cce02",
    "9a290126-7e3b-4f66-a9ae-551537893b65"
  ]
}
```

<h3 id="updates-the-drop-entitlements-fulfillment-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateDropsEntitlementsBody](#schemaupdatedropsentitlementsbody)|false|none|
|» entitlement_ids|body|[string]|false|A list of IDs that identify the entitlements to update. You may specify a maximum of 100 IDs.|
|» fulfillment_status|body|string|false|The fulfillment status to set the entitlements to. Possible values are:  <br>  <br>* CLAIMED — The user claimed the benefit.<br>* FULFILLED — The developer granted the benefit that the user claimed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fulfillment_status|CLAIMED|
|» fulfillment_status|FULFILLED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "status": "SUCCESS",
      "ids": [
        "fb78259e-fb81-4d1b-8333-34a06ffc24c0",
        "862750a5-265e-4ab6-9f0a-c64df3d54dd0"
      ]
    },
    {
      "status": "UNAUTHORIZED",
      "ids": [
        "d8879baa-3966-4d10-8856-15fdd62cce02"
      ]
    },
    {
      "status": "UPDATE_FAILED",
      "ids": [
        "9a290126-7e3b-4f66-a9ae-551537893b65"
      ]
    }
  ]
}
```

<h3 id="updates-the-drop-entitlements-fulfillment-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested the updates. Check the response to determine which updates succeeded.|[UpdateDropsEntitlementsResponse](#schemaupdatedropsentitlementsresponse)|
|400|Bad Request|* The value in the `fulfillment_status` field is not valid.<br>* The client in the access token is not associated with a known organization.<br>* The owner of the client in the access token is not a member of the organization.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the access token.|None|
|500|Internal Server Error|An internal server error occurred. Please report this issue on [our issue tracker](https://github.com/twitchdev/issues/).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-extensions">Extensions</h1>

## Gets the specified configuration segment from the specified extension.

<a id="opIdget-extension-configuration-segment"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/configurations?extension_id=string&segment=broadcaster' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions/configurations`

Gets the specified configuration segment from the specified extension.

**Rate Limits**: You may retrieve each segment a maximum of 20 times per minute.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-configuration-segment">Get Extension Configuration Segment</a>

<h3 id="gets-the-specified-configuration-segment-from-the-specified-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|false|The ID of the broadcaster that installed the extension. This parameter is required if you set the _segment_ parameter to broadcaster or developer. Do not specify this parameter if you set _segment_ to global.|
|extension_id|query|string|true|The ID of the extension that contains the configuration segment you want to get.|
|segment|query|string|true|The type of configuration segment to get. Possible case-sensitive values are:   <br>  <br>* broadcaster<br>* developer<br>* global<br>  <br>You may specify one or more segments. To specify multiple segments, include the `segment` parameter for each segment to get. For example, `segment=broadcaster&segment=developer`. Ignores duplicate segments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|segment|broadcaster|
|segment|developer|
|segment|global|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "segment": "global",
      "content": "hello config!",
      "version": "0.0.1"
    }
  ]
}
```

<h3 id="gets-the-specified-configuration-segment-from-the-specified-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the configurations.|[GetExtensionConfigurationSegmentResponse](#schemagetextensionconfigurationsegmentresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.<br>* The value in the _segment_ query parameter is not valid.<br>* The _broadcaster\_id_ query parameter is required if the _segment_ query parameter is set to broadcaster or developer.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|
|429|Too Many Requests|* The app exceeded the number of requests that it may make per minute. See Rate Limits above.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates a configuration segment.

<a id="opIdset-extension-configuration-segment"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/extensions/configurations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
    "segment": "global",
    "version": "0.0.1",
    "content": "hello config!"
  }'
```

`PUT /extensions/configurations`

Updates a configuration segment. The segment is limited to 5 KB. Extensions that are active on a channel do not receive the updated configuration.

**Rate Limits**: You may update the configuration a maximum of 20 times per minute.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#set-extension-configuration-segment">Set Extension Configuration Segment</a>

> Body parameter

```json
{
  "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
  "segment": "global",
  "version": "0.0.1",
  "content": "hello config!"
}
```

<h3 id="updates-a-configuration-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetExtensionConfigurationSegmentBody](#schemasetextensionconfigurationsegmentbody)|false|none|
|» extension_id|body|string|true|The ID of the extension to update.|
|» segment|body|string|true|The configuration segment to update. Possible case-sensitive values are:  <br>  <br>* broadcaster<br>* developer<br>* global|
|» broadcaster_id|body|string|false|The ID of the broadcaster that installed the extension. Include this field only if the `segment` is set to developer or broadcaster.|
|» content|body|string|false|The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.|
|» version|body|string|false|The version number that identifies this definition of the segment’s data. If not specified, the latest definition is updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» segment|broadcaster|
|» segment|developer|
|» segment|global|

<h3 id="updates-a-configuration-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the configuration.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/extensions/configurations' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \<br>-H 'Content-Type: application/json' \<br>-d '{<br>  "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",<br>  "segment": "global",<br>  "version": "0.0.1",<br>  "content": "hello config!"<br>}'<br>```|None|
|400|Bad Request|* The `broadcaster_id` field is required if `segment` is set to developer or broadcaster.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates the extension’s required_configuration string.

<a id="opIdset-extension-required-configuration"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/required_configuration?broadcaster_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "required_configuration": "RCS",
    "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
    "extension_version": "0.0.1"
  }'
```

`PUT /extensions/required_configuration`

Updates the extension’s required\_configuration string. Use this endpoint if your extension requires the broadcaster to configure the extension before activating it (to require configuration, you must select **Custom/My Own Service** in Extension [Capabilities](https://dev.twitch.tv/docs/extensions/life-cycle/#capabilities)). For more information, see [Required Configurations](https://dev.twitch.tv/docs/extensions/building#required-configurations) and [Setting Required Configuration](https://dev.twitch.tv/docs/extensions/building#setting-required-configuration-with-the-configuration-service-optional).

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an EBS. For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). Set the `role` field to _external_ and the `user_id` field to the ID of the user that owns the extension.

<a href="https://dev.twitch.tv/docs/api/reference#set-extension-required-configuration">Set Extension Required Configuration</a>

> Body parameter

```json
{
  "required_configuration": "RCS",
  "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",
  "extension_version": "0.0.1"
}
```

<h3 id="updates-the-extensions-requiredconfiguration-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that installed the extension on their channel.|
|body|body|[SetExtensionRequiredConfigurationBody](#schemasetextensionrequiredconfigurationbody)|false|none|
|» extension_id|body|string|true|The ID of the extension to update.|
|» extension_version|body|string|true|The version of the extension to update.|
|» required_configuration|body|string|true|The required\_configuration string to use with the extension.|

<h3 id="updates-the-extensions-requiredconfiguration-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the extension’s required\_configuration string.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/extensions/required_configuration?broadcaster_id=274637212' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \<br>-H 'Content-Type: application/json' \<br>-d '{<br>  "required_configuration": "RCS",<br>  "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",<br>  "extension_version": "0.0.1"<br>}'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The `extension_id` field is required.<br>* The `extension_version` field is required.<br>* The `required_configuration` field is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Sends a message to one or more viewers.

<a id="opIdsend-extension-pubsub-message"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/extensions/pubsub \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "hello world!",
    "broadcaster_id": "141981764",
    "target": [
      "broadcast"
    ]
  }'
```

`POST /extensions/pubsub`

Sends a message to one or more viewers. You can send messages to a specific channel or to all channels where your extension is active. This endpoint uses the same mechanism as the [send](https://dev.twitch.tv/docs/extensions/reference#send) JavaScript helper function used to send messages.

**Rate Limits**: You may send a maximum of 100 messages per minute per combination of extension client ID and broadcaster ID.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)) along with the `channel_id` and `pubsub_perms` fields. The `role` field must be set to _external_.

To send the message to a specific channel, set the `channel_id` field in the JWT to the channel’s ID and set the `pubsub_perms.send` array to _broadcast_.

```
{
  "exp": 1503343947,
  "user_id": "27419011",
  "role": "external",
  "channel_id": "27419011",
  "pubsub_perms": {
    "send":[
      "broadcast"
    ]
  }
}

```

To send the message to all channels on which your extension is active, set the `channel_id` field to _all_ and set the `pubsub_perms.send` array to _global_.

```
{
  "exp": 1503343947,
  "user_id": "27419011",
  "role": "external",
  "channel_id": "all",
  "pubsub_perms": {
    "send":[
      "global"
    ]
  }
}

```

<a href="https://dev.twitch.tv/docs/api/reference#send-extension-pubsub-message">Send Extension PubSub Message</a>

> Body parameter

```json
{
  "message": "hello world!",
  "broadcaster_id": "141981764",
  "target": [
    "broadcast"
  ]
}
```

<h3 id="sends-a-message-to-one-or-more-viewers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendExtensionPubSubMessageBody](#schemasendextensionpubsubmessagebody)|false|none|
|» target|body|[string]|true|The target of the message. Possible values are:  <br>  <br>* broadcast<br>* global<br>* whisper-<user-id><br>  <br>If `is_global_broadcast` is **true**, you must set this field to global. The broadcast and global values are mutually exclusive; specify only one of them.|
|» broadcaster_id|body|string|true|The ID of the broadcaster to send the message to. Don’t include this field if `is_global_broadcast` is set to **true**.|
|» is_global_broadcast|body|boolean|false|A Boolean value that determines whether the message should be sent to all channels where your extension is active. Set to **true** if the message should be sent to all channels. The default is **false**.|
|» message|body|string|true|The message to send. The message can be a plain-text string or a string-encoded JSON object. The message is limited to a maximum of 5 KB.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target|broadcast|
|» target|global|
|» target|whisper-<user-id>|

<h3 id="sends-a-message-to-one-or-more-viewers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/extensions/pubsub' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \<br>-H 'Content-Type: application/json' \<br>-d '{<br>  "message": "hello world!",<br>  "broadcaster_id": "141981764",<br>  "target": ["broadcast"]<br>}'<br>```|None|
|400|Bad Request|* The `broadcaster_id` field in the request's body may only be set if the `is_global_broadcast` field is set to **false**.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|
|403|Forbidden|* The channel found in the JWT provided is not the same as the channel specfieid in `broadcaster_id`<br>* JWT could not be verified|None|
|422|Unprocessable Entity|* The message is too large.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets a list of broadcasters that are streaming live and have installed or activated the extension.

<a id="opIdget-extension-live-channels"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/live?extension_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions/live`

Gets a list of broadcasters that are streaming live and have installed or activated the extension.

It may take a few minutes for the list to include or remove broadcasters that have recently gone live or stopped broadcasting.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-live-channels">Get Extension Live Channels</a>

<h3 id="gets-a-list-of-broadcasters-that-are-streaming-live-and-have-installed-or-activated-the-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|true|The ID of the extension to get. Returns the list of broadcasters that are live and that have installed or activated this extension.|
|first|query|integer(int32)|false|The specific maximum number of items per page in the response. The actual number returned may be less than this limit. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|after|query|string|false|The cursor used to get the next page of results. The `pagination` field in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "252766116",
      "broadcaster_name": "swoosh_xii",
      "game_name": "Tom Clancy's Rainbow Six Siege",
      "game_id": "460630",
      "title": "[PS4] ITA/ENG UNRANKED CHILLIN' (SUB 1/15) - !instagram !donation !sens !team !youtube"
    },
    {
      "broadcaster_id": "264525686",
      "broadcaster_name": "gaddem_",
      "game_name": "For Honor",
      "game_id": "490382",
      "title": "any Kätzchen ? - 680 Rep + > Kompetitive Kitten"
    },
    {
      "broadcaster_id": "264787895",
      "broadcaster_name": "LenhadorGameplay",
      "game_name": "For Honor",
      "game_id": "490382",
      "title": "Vazou o novo personagem! *Triste*"
    }
  ],
  "pagination": "YVc1emRHRnNiQ015TmpJek5qazVOVHBoYWpKbGRIZDFaR0Z5YjNCMGN6UTJNMkZ1TUdwM2FHWnBZbm8yYW5rNjoy"
}
```

<h3 id="gets-a-list-of-broadcasters-that-are-streaming-live-and-have-installed-or-activated-the-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of broadcasters.|[GetExtensionLiveChannelsResponse](#schemagetextensionlivechannelsresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.<br>* The pagination cursor is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* The extension specified in the _extension\_id_ query parameter was not found or it's not being used in a live stream.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets an extension’s list of shared secrets.

<a id="opIdget-extension-secrets"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/extensions/jwt/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions/jwt/secrets`

Gets an extension’s list of shared secrets.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-secrets">Get Extension Secrets</a>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "format_version": 1,
      "secrets": [
        {
          "content": "secret",
          "active_at": "2021-03-29T06:58:40.858343036Z",
          "expires_at": "2121-03-05T06:58:40.858343036Z"
        }
      ]
    }
  ]
}
```

<h3 id="gets-an-extensions-list-of-shared-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of secrets.|[GetExtensionSecretsResponse](#schemagetextensionsecretsresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Creates a shared secret used to sign and verify JWT tokens.

<a id="opIdcreate-extension-secret"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/jwt/secrets?extension_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /extensions/jwt/secrets`

Creates a shared secret used to sign and verify JWT tokens. Creating a new secret removes the current secrets from service. Use this function only when you are ready to use the new secret it returns.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role`, `user_id`, and `exp` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#create-extension-secret">Create Extension Secret</a>

<h3 id="creates-a-shared-secret-used-to-sign-and-verify-jwt-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|true|The ID of the extension to apply the shared secret to.|
|delay|query|integer(int32)|false|The amount of time, in seconds, to delay activating the secret. The delay should provide enough time for instances of the extension to gracefully switch over to the new secret. The minimum delay is 300 seconds (5 minutes). The default is 300 seconds.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "format_version": 1,
      "secrets": [
        {
          "content": "old-secret",
          "active_at": "2021-03-29T06:58:40.858343036Z",
          "expires_at": "2021-04-22T05:21:54.99261682Z"
        },
        {
          "content": "new-secret",
          "active_at": "2021-04-22T04:16:54.996365329Z",
          "expires_at": "2121-03-29T04:16:54.996365329Z"
        }
      ]
    }
  ]
}
```

<h3 id="creates-a-shared-secret-used-to-sign-and-verify-jwt-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the new secret.|[CreateExtensionSecretResponse](#schemacreateextensionsecretresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.<br>* The delay specified in the _delay_ query parameter is too short.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Sends a message to the specified broadcaster’s chat room.

<a id="opIdsend-extension-chat-message"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/chat?broadcaster_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "string",
    "extension_id": "string",
    "extension_version": "string"
  }'
```

`POST /extensions/chat`

Sends a message to the specified broadcaster’s chat room. The extension’s name is used as the username for the message in the chat room. To send a chat message, your extension must enable **Chat Capabilities** (under your extension’s **Capabilities** tab).

**Rate Limits**: You may send a maximum of 12 messages per minute per channel.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` and `user_id` fields (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)). The `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#send-extension-chat-message">Send Extension Chat Message</a>

> Body parameter

```json
{
  "text": "string",
  "extension_id": "string",
  "extension_version": "string"
}
```

<h3 id="sends-a-message-to-the-specified-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that has activated the extension.|
|body|body|[SendExtensionChatMessageBody](#schemasendextensionchatmessagebody)|false|none|
|» text|body|string|true|The message. The message may contain a maximum of 280 characters.|
|» extension_id|body|string|true|The ID of the extension that’s sending the chat message.|
|» extension_version|body|string|true|The extension’s version number.|

<h3 id="sends-a-message-to-the-specified-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the chat message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/extensions/chat?broadcaster_id=237757755' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \<br>-H 'Content-Type: application/json' \<br>-d '{<br>  "text": "Hello",<br>  "extension_id": "uo6dggojyb8d6soh92zknwmi5ej1q2",<br>  "extension_version": "0.0.9"<br>}<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The `extension_id` field in the request's body is required.<br>* The `extension_version` field in the request's body is required.<br>* The `text` field in the request's body is required.<br>* The message is too long.|None|
|401|Unauthorized|* The Authorization header is required and must specify a JWT token.<br>* The ID in the _broadcaster\_id_ query parameter must match the `channel_id` claim in the JWT.<br>* The JWT token is not valid.<br>* The Client-Id header is required.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets information about an extension.

<a id="opIdget-extensions"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions?extension_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions`

Gets information about an extension.

__Authorization:__

Requires a signed JSON Web Token (JWT) created by an Extension Backend Service (EBS). For signing requirements, see [Signing the JWT](https://dev.twitch.tv/docs/extensions/building/#signing-the-jwt). The signed JWT must include the `role` field (see [JWT Schema](https://dev.twitch.tv/docs/extensions/reference/#jwt-schema)), and the `role` field must be set to _external_.

<a href="https://dev.twitch.tv/docs/api/reference#get-extensions">Get Extensions</a>

<h3 id="gets-information-about-an-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|true|The ID of the extension to get.|
|extension_version|query|string|false|The version of the extension to get. If not specified, it returns the latest, released version. If you don’t have a released version, you must specify a version; otherwise, the list is empty.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_name": "Twitch Developers",
      "bits_enabled": true,
      "can_install": false,
      "configuration_location": "hosted",
      "description": "An extension for testing all the features that we add to extensions",
      "eula_tos_url": "",
      "has_chat_support": true,
      "icon_url": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
      "icon_urls": {
        "100x100": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
        "24x24": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/taskbar905b19da-e7e5-4d8f-beb7-f543a861ac1e",
        "300x200": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/discoveryd9545b2c-5474-46d7-a523-1c3835d862ce"
      },
      "id": "pgn0bjv51epi7eaekt53tovjnc82qo",
      "name": "Official Developers Demo",
      "privacy_policy_url": "",
      "request_identity_link": true,
      "screenshot_urls": [
        "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/screenshotbdec475d-3d2f-4378-b334-941dfddc897a"
      ],
      "state": "Released",
      "subscriptions_support_level": "optional",
      "summary": "Test ALL the extensions features!",
      "support_email": "dx-extensions-test-dev@justin.tv",
      "version": "0.0.9",
      "viewer_summary": "Test ALL the extensions features!",
      "views": {
        "mobile": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html"
        },
        "panel": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "height": 300,
          "can_link_external_content": false
        },
        "video_overlay": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "can_link_external_content": false
        },
        "component": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "aspect_width": 0,
          "aspect_height": 0,
          "aspect_ratio_x": 48000,
          "aspect_ratio_y": 36000,
          "autoscale": true,
          "scale_pixels": 1024,
          "target_height": 5333,
          "size": 0,
          "zoom": false,
          "zoom_pixels": 0,
          "can_link_external_content": false
        }
      },
      "allowlisted_config_urls": [],
      "allowlisted_panel_urls": []
    }
  ]
}
```

<h3 id="gets-information-about-an-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of extensions.|[GetExtensionsResponse](#schemagetextensionsresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.|None|
|401|Unauthorized|* The request must specify the Authorization header.<br>* The Authorization header is required and must specify a JWT token.<br>* The JWT token is not valid.<br>* The request must specify the Client-Id header.|None|
|404|Not Found|* The extension in the _extension\_id_ query parameter was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets information about a released extension.

<a id="opIdget-released-extensions"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/extensions/released?extension_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /extensions/released`

Gets information about a released extension. Returns the extension if its `state` is Released.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-released-extensions">Get Released Extensions</a>

<h3 id="gets-information-about-a-released-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|extension_id|query|string|true|The ID of the extension to get.|
|extension_version|query|string|false|The version of the extension to get. If not specified, it returns the latest version.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_name": "Twitch Developer Experience",
      "bits_enabled": true,
      "can_install": false,
      "configuration_location": "hosted",
      "description": "An extension for testing all the features that we add to extensions",
      "eula_tos_url": "",
      "has_chat_support": true,
      "icon_url": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
      "icon_urls": {
        "100x100": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
        "24x24": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/taskbar905b19da-e7e5-4d8f-beb7-f543a861ac1e",
        "300x200": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/discoveryd9545b2c-5474-46d7-a523-1c3835d862ce"
      },
      "id": "pgn0bjv51epi7eaekt53tovjnc82qo",
      "name": "Official Developer Experience Demo",
      "privacy_policy_url": "",
      "request_identity_link": true,
      "screenshot_urls": [
        "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/screenshotbdec475d-3d2f-4378-b334-941dfddc897a"
      ],
      "state": "Released",
      "subscriptions_support_level": "optional",
      "summary": "Test ALL the extensions features!",
      "support_email": "dx-extensions-test-dev@justin.tv",
      "version": "0.0.9",
      "viewer_summary": "Test ALL the extensions features!",
      "views": {
        "mobile": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html"
        },
        "panel": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "height": 300,
          "can_link_external_content": false
        },
        "video_overlay": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "can_link_external_content": false
        },
        "component": {
          "viewer_url": "https://pgn0bjv51epi7eaekt53tovjnc82qo.ext-twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.9/f9a0d8aae0f9dd0b2d6ef3416b96bc79/index.html",
          "aspect_width": 0,
          "aspect_height": 0,
          "aspect_ratio_x": 48000,
          "aspect_ratio_y": 36000,
          "autoscale": true,
          "scale_pixels": 1024,
          "target_height": 5333,
          "size": 0,
          "zoom": false,
          "zoom_pixels": 0,
          "can_link_external_content": false
        }
      },
      "allowlisted_config_urls": [],
      "allowlisted_panel_urls": []
    }
  ]
}
```

<h3 id="gets-information-about-a-released-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the extension.|[GetReleasedExtensionsResponse](#schemagetreleasedextensionsresponse)|
|400|Bad Request|* The _extension\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* The extension specified in the _extension\_id_ query parameter was not found or is not released.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the list of Bits products that belongs to the extension.

<a id="opIdget-extension-bits-products"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/bits/extensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bits/extensions`

Gets the list of Bits products that belongs to the extension. The client ID in the app access token identifies the extension.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must be the extension’s client ID.

<a href="https://dev.twitch.tv/docs/api/reference#get-extension-bits-products">Get Extension Bits Products</a>

<h3 id="gets-the-list-of-bits-products-that-belongs-to-the-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|should_include_all|query|boolean|false|A Boolean value that determines whether to include disabled or expired Bits products in the response. The default is **false**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "sku": "1010",
      "cost": {
        "amount": 990,
        "type": "bits"
      },
      "in_development": true,
      "display_name": "Rusty Crate 2",
      "expiration": "2021-05-18T09:10:13.397Z",
      "is_broadcast": false
    }
  ]
}
```

<h3 id="gets-the-list-of-bits-products-that-belongs-to-the-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of products.|[GetExtensionBitsProductsResponse](#schemagetextensionbitsproductsresponse)|
|400|Bad Request|* The ID in the Client-Id header must belong to an extension.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token; you may not specify a user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Adds or updates a Bits product that the extension created.

<a id="opIdupdate-extension-bits-product"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/bits/extensions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sku": "string",
    "cost": {
      "amount": 0,
      "type": "bits"
    },
    "display_name": "string",
    "in_development": true,
    "expiration": "1970-01-01T00:00:00Z",
    "is_broadcast": true
  }'
```

`PUT /bits/extensions`

Adds or updates a Bits product that the extension created. If the SKU doesn’t exist, the product is added. You may update all fields except the `sku` field.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens). The client ID in the app access token must match the extension’s client ID.

<a href="https://dev.twitch.tv/docs/api/reference#update-extension-bits-product">Update Extension Bits Product</a>

> Body parameter

```json
{
  "sku": "string",
  "cost": {
    "amount": 0,
    "type": "bits"
  },
  "display_name": "string",
  "in_development": true,
  "expiration": "1970-01-01T00:00:00Z",
  "is_broadcast": true
}
```

<h3 id="adds-or-updates-a-bits-product-that-the-extension-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateExtensionBitsProductBody](#schemaupdateextensionbitsproductbody)|false|none|
|» sku|body|string|true|The product's SKU. The SKU must be unique within an extension. The product's SKU cannot be changed. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.) and is limited to a maximum of 255 characters. No spaces.|
|» cost|body|object|true|An object that contains the product's cost information.|
|» » amount|body|integer(int32)|true|The product's price.|
|» » type|body|string|true|The type of currency. Possible values are:  <br>  <br>* bits — The minimum price is 1 and the maximum is 10000.|
|» display_name|body|string|true|The product's name as displayed in the extension. The maximum length is 255 characters.|
|» in_development|body|boolean|false|A Boolean value that indicates whether the product is in development. Set to **true** if the product is in development and not available for public use. The default is **false**.|
|» expiration|body|string(date-time)|false|The date and time, in RFC3339 format, when the product expires. If not set, the product does not expire. To disable the product, set the expiration date to a date in the past.|
|» is_broadcast|body|boolean|false|A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. The default is **false**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|bits|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "sku": "1010",
      "cost": {
        "amount": 990,
        "type": "bits"
      },
      "in_development": true,
      "display_name": "Rusty Crate 2",
      "expiration": "2021-05-18T09:10:13.397Z",
      "is_broadcast": true
    }
  ]
}
```

<h3 id="adds-or-updates-a-bits-product-that-the-extension-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the product.|[UpdateExtensionBitsProductResponse](#schemaupdateextensionbitsproductresponse)|
|400|Bad Request|* The `sku` field is required.<br>* The value in the `sku` field is not valid. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.).<br>* The `cost` object's `amount` field is required.<br>* The value in the `cost` object's `amount` field is not valid.<br>* The `cost` object's `type` field is required.<br>* The value in the `cost` object's `type` field is not valid.<br>* The `display_name` field is required.<br>* The ID in the Client-Id header must belong to the extension.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token; you may not specify a user access token.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-eventsub">EventSub</h1>

## Gets a list of EventSub subscriptions that the client in the access token created.

<a id="opIdget-eventsub-subscriptions"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /eventsub/subscriptions`

Gets a list of EventSub subscriptions that the client in the access token created.

__Authorization:__

If you use [Webhooks](https://dev.twitch.tv/docs/eventsub/handling-webhook-events) or [Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to receive events, the request must specify an app access token. The request will fail if you use a user access token.

If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.

__Request Query Parameters:__

Use the _status_, _type_, _user\_id_, _subscription\_id_, and _conduit\_id_ query parameters to filter the list of subscriptions that are returned. The filters are mutually exclusive; the request fails if you specify more than one filter.

<a href="https://dev.twitch.tv/docs/api/reference#get-eventsub-subscriptions">Get EventSub Subscriptions</a>

<h3 id="gets-a-list-of-eventsub-subscriptions-that-the-client-in-the-access-token-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter subscriptions by its status. Possible values are:  <br>  <br>* enabled — The subscription is enabled.<br>* webhook\_callback\_verification\_pending — The subscription is pending verification of the specified callback URL.<br>* webhook\_callback\_verification\_failed — The specified callback URL failed verification.<br>* notification\_failures\_exceeded — The notification delivery failure rate was too high.<br>* authorization\_revoked — The authorization was revoked for one or more users specified in the **Condition** object.<br>* moderator\_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.<br>* user\_removed — One of the users specified in the **Condition** object was removed.<br>* chat\_user\_banned - The user specified in the **Condition** object was banned from the broadcaster's chat.<br>* version\_removed — The subscription to subscription type and version is no longer supported.<br>* beta\_maintenance — The subscription to the beta subscription type was removed due to maintenance.<br>* websocket\_disconnected — The client closed the connection.<br>* websocket\_failed\_ping\_pong — The client failed to respond to a ping message.<br>* websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).<br>* websocket\_connection\_unused — The client failed to subscribe to events within the required time.<br>* websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.<br>* websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.<br>* websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.<br>* websocket\_failed\_to\_reconnect - The client failed to reconnect to the Twitch WebSocket server within the required time after a Reconnect Message.<br>* conduit\_deleted - The conduit associated with the subscription was deleted.|
|type|query|string|false|Filter subscriptions by subscription type. For a list of subscription types, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).|
|user_id|query|string|false|Filter subscriptions by user ID. The response contains subscriptions where this ID matches a user ID that you specified in the **Condition** object when you [created the subscription](https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription).|
|subscription_id|query|string|false|Returns an array with the subscription matching the ID (as long as it is owned by the client making the request), or an empty array if there is no matching subscription.|
|conduit_id|query|string|false|Filter subscriptions by [conduit](https://dev.twitch.tv/docs/eventsub/handling-conduit-events) ID.|
|after|query|string|false|The cursor used to get the next page of results. The `pagination` object in the response contains the cursor’s value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|enabled|
|status|webhook_callback_verification_pending|
|status|webhook_callback_verification_failed|
|status|notification_failures_exceeded|
|status|authorization_revoked|
|status|moderator_removed|
|status|user_removed|
|status|chat_user_banned|
|status|version_removed|
|status|beta_maintenance|
|status|websocket_disconnected|
|status|websocket_failed_ping_pong|
|status|websocket_received_inbound_traffic|
|status|websocket_connection_unused|
|status|websocket_internal_error|
|status|websocket_network_timeout|
|status|websocket_network_error|
|status|websocket_failed_to_reconnect|
|status|conduit_deleted|
|type|automod.message.hold|
|type|automod.message.update|
|type|automod.settings.update|
|type|automod.terms.update|
|type|channel.bits.use|
|type|channel.update|
|type|channel.follow|
|type|channel.ad_break.begin|
|type|channel.chat.clear|
|type|channel.chat.clear_user_messages|
|type|channel.chat.message|
|type|channel.chat.message_delete|
|type|channel.chat.notification|
|type|channel.chat_settings.update|
|type|channel.chat.user_message_hold|
|type|channel.chat.user_message_update|
|type|channel.shared_chat.begin|
|type|channel.shared_chat.update|
|type|channel.shared_chat.end|
|type|channel.subscribe|
|type|channel.subscription.end|
|type|channel.subscription.gift|
|type|channel.subscription.message|
|type|channel.cheer|
|type|channel.raid|
|type|channel.ban|
|type|channel.unban|
|type|channel.unban_request.create|
|type|channel.unban_request.resolve|
|type|channel.moderate|
|type|channel.moderator.add|
|type|channel.moderator.remove|
|type|channel.guest_star_session.begin|
|type|channel.guest_star_session.end|
|type|channel.guest_star_guest.update|
|type|channel.guest_star_settings.update|
|type|channel.channel_points_automatic_reward_redemption.add|
|type|channel.channel_points_custom_reward.add|
|type|channel.channel_points_custom_reward.update|
|type|channel.channel_points_custom_reward.remove|
|type|channel.channel_points_custom_reward_redemption.add|
|type|channel.channel_points_custom_reward_redemption.update|
|type|channel.custom_power_up_redemption.add|
|type|channel.poll.begin|
|type|channel.poll.progress|
|type|channel.poll.end|
|type|channel.prediction.begin|
|type|channel.prediction.progress|
|type|channel.prediction.lock|
|type|channel.prediction.end|
|type|channel.suspicious_user.message|
|type|channel.suspicious_user.update|
|type|channel.vip.add|
|type|channel.vip.remove|
|type|channel.warning.acknowledge|
|type|channel.warning.send|
|type|channel.charity_campaign.donate|
|type|channel.charity_campaign.start|
|type|channel.charity_campaign.progress|
|type|channel.charity_campaign.stop|
|type|conduit.shard.disabled|
|type|drop.entitlement.grant|
|type|extension.bits_transaction.create|
|type|channel.goal.begin|
|type|channel.goal.progress|
|type|channel.goal.end|
|type|channel.hype_train.begin|
|type|channel.hype_train.progress|
|type|channel.hype_train.end|
|type|channel.shield_mode.begin|
|type|channel.shield_mode.end|
|type|channel.shoutout.create|
|type|channel.shoutout.receive|
|type|stream.online|
|type|stream.offline|
|type|user.authorization.grant|
|type|user.authorization.revoke|
|type|user.update|
|type|user.whisper.message|

> Example responses

> 200 Response

```json
{
  "total": 2,
  "data": [
    {
      "id": "26b1c993-bfcf-44d9-b876-379dacafe75a",
      "status": "enabled",
      "type": "stream.online",
      "version": "1",
      "condition": {
        "broadcaster_user_id": "1234"
      },
      "created_at": "2020-11-10T20:08:33.12345678Z",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com"
      },
      "cost": 1
    },
    {
      "id": "35016908-41ff-33ce-7879-61b8dfc2ee16",
      "status": "webhook_callback_verification_pending",
      "type": "user.update",
      "version": "1",
      "condition": {
        "user_id": "1234"
      },
      "created_at": "2020-11-10T14:32:18.730260295Z",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com"
      },
      "cost": 0
    }
  ],
  "total_cost": 1,
  "max_total_cost": 10000,
  "pagination": {}
}
```

<h3 id="gets-a-list-of-eventsub-subscriptions-that-the-client-in-the-access-token-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the subscriptions.|[GetEventSubSubscriptionsResponse](#schemageteventsubsubscriptionsresponse)|
|400|Bad Request|* The request may specify only one filter query parameter. For example, either _type_ or _status_ or _user\_id_.<br>* The value in the _type_ query parameter is not valid.<br>* The value in the _status_ query parameter is not valid.<br>* The cursor specified in the _after_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Creates an EventSub subscription.

<a id="opIdcreate-eventsub-subscription"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/eventsub/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "user.update",
    "version": "1",
    "condition": {
      "user_id": "1234"
    },
    "transport": {
      "method": "webhook",
      "callback": "https://this-is-a-callback.com",
      "secret": "s3cre7"
    }
  }'
```

`POST /eventsub/subscriptions`

Creates an EventSub subscription.

__Authorization:__

If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token. If the subscription type requires user authorization, the user must have granted your app (client ID) permissions to receive those events before you subscribe to them. For example, to subscribe to [channel.subscribe](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelsubscribe) events, your app must get a user access token that includes the `channel:read:subscriptions` scope, which adds the required permission to your app access token’s client ID.

If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. If the subscription type requires user authorization, the token must include the required scope. However, if the subscription type doesn’t include user authorization, the token may include any scopes or no scopes.

If you use [Conduits](https://dev.twitch.tv/docs/eventsub/handling-conduit-events/) to receive events, the request must specify an app access token. The request will fail if you use a user access token.

<a href="https://dev.twitch.tv/docs/api/reference#create-eventsub-subscription">Create EventSub Subscription</a>

> Body parameter

```json
{
  "type": "user.update",
  "version": "1",
  "condition": {
    "user_id": "1234"
  },
  "transport": {
    "method": "webhook",
    "callback": "https://this-is-a-callback.com",
    "secret": "s3cre7"
  }
}
```

<h3 id="creates-an-eventsub-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateEventSubSubscriptionBody](#schemacreateeventsubsubscriptionbody)|false|none|
|» type|body|string|true|The type of subscription to create. For a list of subscriptions that you can create, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types). Set this field to the value in the **Name** column of the Subscription Types table.|
|» version|body|string|true|The version number that identifies the definition of the subscription type that you want the response to use.|
|» condition|body|object|true|A JSON object that contains the parameter values that are specific to the specified subscription type. For the object’s required and optional fields, see the subscription type’s documentation.|
|» transport|body|object|true|The transport details that you want Twitch to use when sending you notifications.|
|» » method|body|string|true|The transport method. Possible values are:  <br>  <br>* webhook<br>* websocket<br>* conduit|
|» » callback|body|string|false|The callback URL where the notifications are sent. The URL must use the HTTPS protocol and port 443\. See [Processing an event](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#processing-an-event). Specify this field only if `method` is set to **webhook**.<br><br>**NOTE**: Redirects are not followed.|
|» » secret|body|string|false|The secret used to verify the signature. The secret must be an ASCII string that’s a minimum of 10 characters long and a maximum of 100 characters long. For information about how the secret is used, see [Verifying the event message](https://dev.twitch.tv/docs/eventsub/handling-webhook-events#verifying-the-event-message). Specify this field only if `method` is set to **webhook**.|
|» » session_id|body|string|false|An ID that identifies the WebSocket to send notifications to. When you connect to EventSub using WebSockets, the server returns the ID in the Welcome message. Specify this field only if `method` is set to **websocket**.|
|» » conduit_id|body|string|false|An ID that identifies the conduit to send notifications to. When you create a conduit, the server returns the conduit ID. Specify this field only if `method` is set to **conduit**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|automod.message.hold|
|» type|automod.message.update|
|» type|automod.settings.update|
|» type|automod.terms.update|
|» type|channel.bits.use|
|» type|channel.update|
|» type|channel.follow|
|» type|channel.ad_break.begin|
|» type|channel.chat.clear|
|» type|channel.chat.clear_user_messages|
|» type|channel.chat.message|
|» type|channel.chat.message_delete|
|» type|channel.chat.notification|
|» type|channel.chat_settings.update|
|» type|channel.chat.user_message_hold|
|» type|channel.chat.user_message_update|
|» type|channel.shared_chat.begin|
|» type|channel.shared_chat.update|
|» type|channel.shared_chat.end|
|» type|channel.subscribe|
|» type|channel.subscription.end|
|» type|channel.subscription.gift|
|» type|channel.subscription.message|
|» type|channel.cheer|
|» type|channel.raid|
|» type|channel.ban|
|» type|channel.unban|
|» type|channel.unban_request.create|
|» type|channel.unban_request.resolve|
|» type|channel.moderate|
|» type|channel.moderator.add|
|» type|channel.moderator.remove|
|» type|channel.guest_star_session.begin|
|» type|channel.guest_star_session.end|
|» type|channel.guest_star_guest.update|
|» type|channel.guest_star_settings.update|
|» type|channel.channel_points_automatic_reward_redemption.add|
|» type|channel.channel_points_custom_reward.add|
|» type|channel.channel_points_custom_reward.update|
|» type|channel.channel_points_custom_reward.remove|
|» type|channel.channel_points_custom_reward_redemption.add|
|» type|channel.channel_points_custom_reward_redemption.update|
|» type|channel.custom_power_up_redemption.add|
|» type|channel.poll.begin|
|» type|channel.poll.progress|
|» type|channel.poll.end|
|» type|channel.prediction.begin|
|» type|channel.prediction.progress|
|» type|channel.prediction.lock|
|» type|channel.prediction.end|
|» type|channel.suspicious_user.message|
|» type|channel.suspicious_user.update|
|» type|channel.vip.add|
|» type|channel.vip.remove|
|» type|channel.warning.acknowledge|
|» type|channel.warning.send|
|» type|channel.charity_campaign.donate|
|» type|channel.charity_campaign.start|
|» type|channel.charity_campaign.progress|
|» type|channel.charity_campaign.stop|
|» type|conduit.shard.disabled|
|» type|drop.entitlement.grant|
|» type|extension.bits_transaction.create|
|» type|channel.goal.begin|
|» type|channel.goal.progress|
|» type|channel.goal.end|
|» type|channel.hype_train.begin|
|» type|channel.hype_train.progress|
|» type|channel.hype_train.end|
|» type|channel.shield_mode.begin|
|» type|channel.shield_mode.end|
|» type|channel.shoutout.create|
|» type|channel.shoutout.receive|
|» type|stream.online|
|» type|stream.offline|
|» type|user.authorization.grant|
|» type|user.authorization.revoke|
|» type|user.update|
|» type|user.whisper.message|
|» » method|webhook|
|» » method|websocket|
|» » method|conduit|

> Example responses

> 202 Response

```json
{
  "data": [
    {
      "id": "26b1c993-bfcf-44d9-b876-379dacafe75a",
      "status": "webhook_callback_verification_pending",
      "type": "user.update",
      "version": "1",
      "condition": {
        "user_id": "1234"
      },
      "created_at": "2020-11-10T14:32:18.730260295Z",
      "transport": {
        "method": "webhook",
        "callback": "https://this-is-a-callback.com"
      },
      "cost": 1
    }
  ],
  "total": 1,
  "total_cost": 1,
  "max_total_cost": 10000
}
```

<h3 id="creates-an-eventsub-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully accepted the subscription request.|[CreateEventSubSubscriptionResponse](#schemacreateeventsubsubscriptionresponse)|
|400|Bad Request|* The `condition` field is required.<br>* The user specified in the `condition` object does not exist.<br>* The `condition` object is missing one or more required fields.<br>* The combination of values in the `version` and `type` fields is not valid.<br>* The length of the string in the `secret` field is not valid.<br>* The URL in the transport's `callback` field is not valid. The URL must use the HTTPS protocol and the 443 port number.<br>* The value specified in the `method` field is not valid.<br>* The `callback` field is required if you specify the webhook transport method.<br>* The `session_id` field is required if you specify the WebSocket transport method.<br>* The combination of subscription type and version is not valid.<br>* The `conduit_id` field is required if you specify the Conduit transport method.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token if the transport method is webhook.<br>* The Authorization header is required and must specify a user access token if the transport method is WebSocket.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|403|Forbidden|The access token is missing the required scopes.|None|
|409|Conflict|A subscription already exists for the specified event type and `condition` combination. The `id` value in the error response represents the existing EventSub subscription.|None|
|410|Gone|The subscription type and version combination has been removed and can no longer be subscribed to.|None|
|429|Too Many Requests|The request exceeds the number of subscriptions that you may create with the same combination of `type` and `condition` values.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:subscriptions )
</aside>

## Deletes an EventSub subscription.

<a id="opIddelete-eventsub-subscription"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/eventsub/subscriptions?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /eventsub/subscriptions`

Deletes an EventSub subscription.

__Authorization:__

If you use [webhooks to receive events](https://dev.twitch.tv/docs/eventsub/handling-webhook-events), the request must specify an app access token. The request will fail if you use a user access token.

If you use [WebSockets to receive events](https://dev.twitch.tv/docs/eventsub/handling-websocket-events), the request must specify a user access token. The request will fail if you use an app access token. The token may include any scopes.

<a href="https://dev.twitch.tv/docs/api/reference#delete-eventsub-subscription">Delete EventSub Subscription</a>

<h3 id="deletes-an-eventsub-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The ID of the subscription to delete.|

<h3 id="deletes-an-eventsub-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the subscription.<br><br>__Examples__<br><br>_Request:_<br><br>Deletes the specified EventSub subscription.<br><br>```bash<br>curl -X DELETE<br>'https://api.twitch.tv/helix/eventsub/subscriptions?id=26b1c993-bfcf-44d9-b876-379dacafe75a' \<br>-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \<br>-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz'<br>```<br><br>```bash<br># Twitch CLI example that deletes the specified subscription.<br><br>twitch api delete /eventsub/subscriptions -q id=c839a466-034a-4d77-8d4d-c9a751516e7<br>```|None|
|400|Bad Request|* The _id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* The subscription was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-games">Games</h1>

## Gets information about all broadcasts on Twitch.

<a id="opIdget-top-games"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/games/top \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/top`

Gets information about all broadcasts on Twitch.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-top-games">Get Top Games</a>

<h3 id="gets-information-about-all-broadcasts-on-twitch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "493057",
      "name": "PUBG: BATTLEGROUNDS",
      "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/493057-{width}x{height}.jpg",
      "igdb_id": "27789"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ=="
  }
}
```

<h3 id="gets-information-about-all-broadcasts-on-twitch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of broadcasts.|[GetTopGamesResponse](#schemagettopgamesresponse)|
|400|Bad Request|* The value in the _first_ query parameter is not valid.<br>* The cursor in the _after_ or _before_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets information about specified games.

<a id="opIdget-games"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/games \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games`

Gets information about specified categories or games.

You may get up to 100 categories or games by specifying their ID or name. You may specify all IDs, all names, or a combination of IDs and names. If you specify a combination of IDs and names, the total number of IDs and names must not exceed 100.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-games">Get Games</a>

<h3 id="gets-information-about-specified-games-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|The ID of the category or game to get. Include this parameter for each category or game you want to get. For example, `&id=1234&id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found.|
|name|query|[string]|false|The name of the category or game to get. The name must exactly match the category’s or game’s title. Include this parameter for each category or game you want to get. For example, `&name=foo&name=bar`. You may specify a maximum of 100 names. The endpoint ignores duplicate names and names that weren’t found.|
|igdb_id|query|[string]|false|The [IGDB](https://www.igdb.com/) ID of the game to get. Include this parameter for each game you want to get. For example, `&igdb_id=1234&igdb_id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate and invalid IDs or IDs that weren’t found.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "33214",
      "name": "Fortnite",
      "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg",
      "igdb_id": "1905"
    }
  ]
}
```

<h3 id="gets-information-about-specified-games-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the specified games.|[GetGamesResponse](#schemagetgamesresponse)|
|400|Bad Request|* The request must specify the _id_ or _name_ or _igdb\_id_ query parameter.<br>* The combined number of game IDs (_id_ and _igdb\_id_) and game names that you specify in the request must not exceed 100.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-goals">Goals</h1>

## Gets the broadcaster’s list of active goals.

<a id="opIdget-creator-goals"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/goals?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /goals`

Gets the broadcaster’s list of active goals. Use this endpoint to get the current progress of each goal.

Instead of polling for the progress of a goal, consider [subscribing](https://dev.twitch.tv/docs/eventsub/manage-subscriptions) to receive notifications when a goal makes progress using the [channel.goal.progress](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelgoalprogress) subscription type. [Read More](https://dev.twitch.tv/docs/api/goals#requesting-event-notifications)

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:goals** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-creator-goals">Get Creator Goals</a>

<h3 id="gets-the-broadcasters-list-of-active-goals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that created the goals. This ID must match the user ID in the user access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "1woowvbkiNv8BRxEWSqmQz6Zk92",
      "broadcaster_id": "141981764",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "type": "follower",
      "description": "Follow goal for Helix testing",
      "current_amount": 27062,
      "target_amount": 30000,
      "created_at": "2021-08-16T17:22:23Z"
    }
  ]
}
```

<h3 id="gets-the-broadcasters-list-of-active-goals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s goals.|[GetCreatorGoalsResponse](#schemagetcreatorgoalsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:goals** scope.<br>* The ID in _broadcaster\_id_ must match the user ID in the user access token.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:goals )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-guest-star">Guest Star</h1>

## BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.

<a id="opIdget-channel-guest-star-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json'
```

`GET /guest_star/channel_settings`

BETA Gets the channel settings for configuration of the Guest Star feature for a particular host.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-guest-star-settings">Get Channel Guest Star Settings</a>

<h3 id="beta-gets-the-channel-settings-for-configuration-of-the-guest-star-feature-for-a-particular-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster you want to get guest star settings for.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "is_moderator_send_live_enabled": true,
      "slot_count": 4,
      "is_browser_source_audio_enabled": true,
      "layout": "TILED_LAYOUT",
      "browser_source_token": "eihq8rew7q3hgierufhi3q"
    }
  ]
}
```

<h3 id="beta-gets-the-channel-settings-for-configuration-of-the-guest-star-feature-for-a-particular-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the Guest Star settings.|[GetChannelGuestStarSettingsResponse](#schemagetchannelgueststarsettingsresponse)|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_|None|
|403|Forbidden|Insufficient authorization for viewing channel’s Guest Star settings|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.

<a id="opIdupdate-channel-guest-star-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "is_moderator_send_live_enabled": true,
    "slot_count": 0,
    "is_browser_source_audio_enabled": true,
    "group_layout": "TILED_LAYOUT",
    "regenerate_browser_sources": true
  }'
```

`PUT /guest_star/channel_settings`

BETA Mutates the channel settings for configuration of the Guest Star feature for a particular host.

__Authorization:__

* Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#update-channel-guest-star-settings">Update Channel Guest Star Settings</a>

> Body parameter

```json
{
  "is_moderator_send_live_enabled": true,
  "slot_count": 0,
  "is_browser_source_audio_enabled": true,
  "group_layout": "TILED_LAYOUT",
  "regenerate_browser_sources": true
}
```

<h3 id="beta-mutates-the-channel-settings-for-configuration-of-the-guest-star-feature-for-a-particular-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster you want to update Guest Star settings for.|
|body|body|[UpdateChannelGuestStarSettingsBody](#schemaupdatechannelgueststarsettingsbody)|false|none|
|» is_moderator_send_live_enabled|body|boolean|false|Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.|
|» slot_count|body|integer(int32)|false|Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.|
|» is_browser_source_audio_enabled|body|boolean|false|Flag determining if Browser Sources subscribed to sessions on this channel should output audio|
|» group_layout|body|string|false|This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values:   <br>  <br>* `TILED_LAYOUT`: All live guests are tiled within the browser source with the same size.<br>* `SCREENSHARE_LAYOUT`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.<br>* `HORIZONTAL_LAYOUT`: All live guests are arranged in a horizontal bar within the browser source<br>* `VERTICAL_LAYOUT`: All live guests are arranged in a vertical bar within the browser source|
|» regenerate_browser_sources|body|boolean|false|Flag determining if Guest Star should regenerate the auth token associated with the channel’s browser sources. Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» group_layout|TILED_LAYOUT|
|» group_layout|SCREENSHARE_LAYOUT|
|» group_layout|HORIZONTAL_LAYOUT|
|» group_layout|VERTICAL_LAYOUT|

<h3 id="beta-mutates-the-channel-settings-for-configuration-of-the-guest-star-feature-for-a-particular-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated channel settings<br><br>__Examples__<br><br>_Request:_<br><br>Update browser source layout settings<br><br>```bash<br>curl -X PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&group_layout=TILED_LAYOUT` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```<br><br>_Request:_<br><br>Disable moderator control of slot live setting<br><br>```bash<br>curl -X PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&is_moderator_send_live_enabled=false` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```<br><br>_Request:_<br><br>Update max slot count<br><br>```bash<br>curl -X PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&slot_count=6` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```<br><br>_Request:_<br><br>Regenerate browser sources<br><br>```bash<br>curl -X PUT `https://api.twitch.tv/helix/guest_star/channel_settings?broadcaster_id=9321049&regenerate_browser_sources=true` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Invalid _slot\_count_<br>* Invalid _group\_layout_|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Gets information about an ongoing Guest Star session for a particular channel.

<a id="opIdget-guest-star-session"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/session?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json'
```

`GET /guest_star/session`

BETA Gets information about an ongoing Guest Star session for a particular channel.

__Authorization:__

* Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`
* Guests must be either invited or assigned a slot within the session

<a href="https://dev.twitch.tv/docs/api/reference#get-guest-star-session">Get Guest Star Session</a>

<h3 id="beta-gets-information-about-an-ongoing-guest-star-session-for-a-particular-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|ID for the user hosting the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2KFRQbFtpmfyD3IevNRnCzOPRJI",
      "guests": [
        {
          "slot_id": "0",
          "user_id": "9321049",
          "user_display_name": "Cool_User",
          "user_login": "cool_user",
          "is_live": true,
          "volume": 100,
          "assigned_at": "2023-01-02T04:16:53.325Z",
          "audio_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          },
          "video_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          }
        },
        {
          "slot_id": "1",
          "user_id": "144601104",
          "user_display_name": "Cool_Guest",
          "user_login": "cool_guest",
          "is_live": true,
          "volume": 100,
          "assigned_at": "2023-01-02T04:20:59.325Z",
          "audio_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          },
          "video_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          }
        }
      ]
    }
  ]
}
```

<h3 id="beta-gets-information-about-an-ongoing-guest-star-session-for-a-particular-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the Guest Star session.|[GetGuestStarSessionResponse](#schemagetgueststarsessionresponse)|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_|None|
|401|Unauthorized|_moderator\_id_ and user token do not match|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Programmatically creates a Guest Star session on behalf of the broadcaster.

<a id="opIdcreate-guest-star-session"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/session?broadcaster_id=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /guest_star/session`

BETA Programmatically creates a Guest Star session on behalf of the broadcaster. Requires the broadcaster to be present in the call interface, or the call will be ended automatically.

__Authorization:__

* Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#create-guest-star-session">Create Guest Star Session</a>

<h3 id="beta-programmatically-creates-a-guest-star-session-on-behalf-of-the-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster you want to create a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2KFRQbFtpmfyD3IevNRnCzOPRJI",
      "guests": [
        {
          "id": "0",
          "user_id": "9321049",
          "user_display_name": "Cool_User",
          "user_login": "cool_user",
          "is_live": true,
          "volume": 100,
          "assigned_at": "2023-01-02T04:16:53.325Z",
          "audio_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          },
          "video_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          }
        }
      ]
    }
  ]
}
```

<h3 id="beta-programmatically-creates-a-guest-star-session-on-behalf-of-the-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully started the Guest Star session.|[CreateGuestStarSessionResponse](#schemacreategueststarsessionresponse)|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Session limit reached (1 active call)|None|
|401|Unauthorized|Phone verification missing|None|
|403|Forbidden|Insufficient authorization for creating session|None|
|409|Conflict|Broadcaster is already in another session|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Programmatically ends a Guest Star session on behalf of the broadcaster.

<a id="opIdend-guest-star-session"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/session?broadcaster_id=string&session_id=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /guest_star/session`

BETA Programmatically ends a Guest Star session on behalf of the broadcaster. Performs the same action as if the host clicked the “End Call” button in the Guest Star UI.

__Authorization:__

* Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#end-guest-star-session">End Guest Star Session</a>

<h3 id="beta-programmatically-ends-a-guest-star-session-on-behalf-of-the-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster you want to end a Guest Star session for. Provided `broadcaster_id` must match the `user_id` in the auth token.|
|session_id|query|string|true|ID for the session to end on behalf of the broadcaster.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2KFRQbFtpmfyD3IevNRnCzOPRJI",
      "guests": [
        {
          "id": "0",
          "user_id": "9321049",
          "user_display_name": "Cool_User",
          "user_login": "cool_user",
          "is_live": true,
          "volume": 100,
          "assigned_at": "2023-01-02T04:16:53.325Z",
          "audio_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          },
          "video_settings": {
            "is_available": true,
            "is_host_enabled": true,
            "is_guest_enabled": true
          }
        }
      ]
    }
  ]
}
```

<h3 id="beta-programmatically-ends-a-guest-star-session-on-behalf-of-the-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully ended the Guest Star session.|[EndGuestStarSessionResponse](#schemaendgueststarsessionresponse)|
|400|Bad Request|* Missing or invalid _broadcaster\_id_<br>* Missing or invalid _session\_id_<br>* Session has already been ended|None|
|403|Forbidden|Insufficient authorization for ending session|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Provides the caller with a list of pending invites to a Guest Star session.

<a id="opIdget-guest-star-invites"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=string&moderator_id=string&session_id=string' \
  -H 'Accept: application/json'
```

`GET /guest_star/invites`

BETA Provides the caller with a list of pending invites to a Guest Star session, including the invitee’s ready status while joining the waiting room.

__Authorization:__

* Query parameter `broadcaster_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:read:guest_star`, `channel:manage:guest_star`, `moderator:read:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#get-guest-star-invites">Get Guest Star Invites</a>

<h3 id="beta-provides-the-caller-with-a-list-of-pending-invites-to-a-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token.|
|session_id|query|string|true|The session ID to query for invite status.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "string",
      "invited_at": "1970-01-01T00:00:00Z",
      "status": "string",
      "is_video_enabled": true,
      "is_audio_enabled": true,
      "is_video_available": true,
      "is_audio_available": true
    }
  ]
}
```

<h3 id="beta-provides-the-caller-with-a-list-of-pending-invites-to-a-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s Guest Star invites.|[GetGuestStarInvitesResponse](#schemagetgueststarinvitesresponse)|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _session\_id_|None|
|403|Forbidden|The user specified in the `moderator_id` is not permitted to view the broadcaster’s invites.|None|
|404|Not Found|Invalid `session_id`|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.

<a id="opIdsend-guest-star-invite"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=string&moderator_id=string&session_id=string&guest_id=string' \
  -X POST
```

`POST /guest_star/invites`

BETA Sends an invite to a specified guest on behalf of the broadcaster for a Guest Star session in progress.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#send-guest-star-invite">Send Guest Star Invite</a>

<h3 id="beta-sends-an-invite-to-a-specified-guest-on-behalf-of-the-broadcaster-for-a-guest-star-session-in-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token.|
|session_id|query|string|true|The session ID for the invite to be sent on behalf of the broadcaster.|
|guest_id|query|string|true|Twitch User ID for the guest to invite to the Guest Star session.|

<h3 id="beta-sends-an-invite-to-a-specified-guest-on-behalf-of-the-broadcaster-for-a-guest-star-session-in-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the Guest Star invite<br><br>__Examples__<br><br>_Request:_<br><br>Invite user to Guest Star session<br><br>```bash<br>curl -X POST `https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_<br>* Missing _session\_id_<br>* Missing _guest\_id_<br>* Invalid _session\_id_|None|
|403|Forbidden|* Unauthorized guest invited<br>* Guest already invited|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Revokes a previously sent invite for a Guest Star session.

<a id="opIddelete-guest-star-invite"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=string&moderator_id=string&session_id=string&guest_id=string' \
  -X DELETE
```

`DELETE /guest_star/invites`

BETA Revokes a previously sent invite for a Guest Star session.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#delete-guest-star-invite">Delete Guest Star Invite</a>

<h3 id="beta-revokes-a-previously-sent-invite-for-a-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token.|
|session_id|query|string|true|The ID of the session for the invite to be revoked on behalf of the broadcaster.|
|guest_id|query|string|true|Twitch User ID for the guest to revoke the Guest Star session invite from.|

<h3 id="beta-revokes-a-previously-sent-invite-for-a-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the Guest Star invite<br><br>__Examples__<br><br>_Request:_<br><br>Remove invite to session<br><br>```bash<br>curl -X DELETE `https://api.twitch.tv/helix/guest_star/invites?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _session\_id_<br>* Missing _guest\_id_<br>* Invalid _session\_id_|None|
|403|Forbidden|The user specified in `moderator_id` is not permitted to delete invites for the broadcaster.|None|
|404|Not Found|No invite exists for specified _guest\_id_|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Allows a previously invited user to be assigned a slot within the active Guest Star session.

<a id="opIdassign-guest-star-slot"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=string&moderator_id=string&session_id=string&guest_id=string&slot_id=string' \
  -X POST
```

`POST /guest_star/slot`

BETA Allows a previously invited user to be assigned a slot within the active Guest Star session, once that guest has indicated they are ready to join.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#assign-guest-star-slot">Assign Guest Star Slot</a>

<h3 id="beta-allows-a-previously-invited-user-to-be-assigned-a-slot-within-the-active-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token.|
|session_id|query|string|true|The ID of the Guest Star session in which to assign the slot.|
|guest_id|query|string|true|The Twitch User ID corresponding to the guest to assign a slot in the session. This user must already have an invite to this session, and have indicated that they are ready to join.|
|slot_id|query|string|true|The slot assignment to give to the user. Must be a numeric identifier between “1” and “N” where N is the max number of slots for the session. Max number of slots allowed for the session is reported by [Get Channel Guest Star Settings](https://dev.twitch.tv/docs/api/reference#get-channel-guest-star-settings).|

<h3 id="beta-allows-a-previously-invited-user-to-be-assigned-a-slot-within-the-active-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfuly assigned guest to slot<br><br>__Examples__<br><br>_Request:_<br><br>Assign invited user to slot<br><br>```bash<br>curl -X POST `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104&slot_id=1` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_<br>* Missing _guest\_id_<br>* Missing or invalid _session\_id_<br>* Missing or invalid _slot\_id_|None|
|401|Unauthorized|_moderator\_id_ is not a guest star moderator|None|
|403|Forbidden|* Cannot assign host slot<br>* Guest not invited to session<br>* Guest already assigned to slot<br>* Guest is not ready to join|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session.

<a id="opIddelete-guest-star-slot"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=string&moderator_id=string&session_id=string&guest_id=string&slot_id=string' \
  -X DELETE
```

`DELETE /guest_star/slot`

BETA Allows a caller to remove a slot assignment from a user participating in an active Guest Star session. This revokes their access to the session immediately and disables their access to publish or subscribe to media within the session.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#delete-guest-star-slot">Delete Guest Star Slot</a>

<h3 id="beta-allows-a-caller-to-remove-a-slot-assignment-from-a-user-participating-in-an-active-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|session_id|query|string|true|The ID of the Guest Star session in which to remove the slot assignment.|
|guest_id|query|string|true|The Twitch User ID corresponding to the guest to remove from the session.|
|slot_id|query|string|true|The slot ID representing the slot assignment to remove from the session.|
|should_reinvite_guest|query|string|false|Flag signaling that the guest should be reinvited to the session, sending them back to the invite queue.|

<h3 id="beta-allows-a-caller-to-remove-a-slot-assignment-from-a-user-participating-in-an-active-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfuly removed user from slot<br><br>__Examples__<br><br>_Request:_<br><br>Remove user from slot<br><br>```bash<br>curl -X DELETE `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&guest_id=144601104&slot_id=1` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_<br>* Missing or invalid _session\_id_<br>* Missing or invalid _slot\_id_|None|
|403|Forbidden|* _moderator\_id_ is not a Guest Star moderator<br>* The request is attempting to modify a restricted slot|None|
|404|Not Found|_guest\_id_ or _slot\_id_ not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.

<a id="opIdupdate-guest-star-slot"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=string&moderator_id=string&session_id=string&source_slot_id=string' \
  -X PATCH
```

`PATCH /guest_star/slot`

BETA Allows a user to update the assigned slot for a particular user within the active Guest Star session.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#update-guest-star-slot">Update Guest Star Slot</a>

<h3 id="beta-allows-a-user-to-update-the-assigned-slot-for-a-particular-user-within-the-active-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the `user_id` in the user access token.|
|session_id|query|string|true|The ID of the Guest Star session in which to update slot settings.|
|source_slot_id|query|string|true|The slot assignment previously assigned to a user.|
|destination_slot_id|query|string|false|The slot to move this user assignment to. If the destination slot is occupied, the user assigned will be swapped into `source_slot_id`.|

<h3 id="beta-allows-a-user-to-update-the-assigned-slot-for-a-particular-user-within-the-active-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfuly updated slot(s)<br><br>__Examples__<br><br>_Request:_<br><br>Move slot assignment to a new slot ID<br><br>```bash<br>curl -X PATCH `https://api.twitch.tv/helix/guest_star/slot?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&source_slot_id=1&destination_slot_id=2` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing or invalid _session\_id_<br>* Missing or invalid _slot\_id_|None|

<aside class="success">
This operation does not require authentication
</aside>

## BETA Allows a user to update slot settings for a particular guest within a Guest Star session.

<a id="opIdupdate-guest-star-slot-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=string&moderator_id=string&session_id=string&slot_id=string' \
  -X PATCH
```

`PATCH /guest_star/slot_settings`

BETA Allows a user to update slot settings for a particular guest within a Guest Star session, such as allowing the user to share audio or video within the call as a host. These settings will be broadcasted to all subscribers which control their view of the guest in that slot. One or more of the optional parameters to this API can be specified at any time.

__Authorization:__

* Query parameter `moderator_id` must match the `user_id` in the [User-Access token](https://dev.twitch.tv/docs/authentication#user-access-tokens)
* Requires OAuth Scope: `channel:manage:guest_star` or `moderator:manage:guest_star`

<a href="https://dev.twitch.tv/docs/api/reference#update-guest-star-slot-settings">Update Guest Star Slot Settings</a>

<h3 id="beta-allows-a-user-to-update-slot-settings-for-a-particular-guest-within-a-guest-star-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster running the Guest Star session.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|session_id|query|string|true|The ID of the Guest Star session in which to update a slot’s settings.|
|slot_id|query|string|true|The slot assignment that has previously been assigned to a user.|
|is_audio_enabled|query|boolean|false|Flag indicating whether the slot is allowed to share their audio with the rest of the session. If false, the slot will be muted in any views containing the slot.|
|is_video_enabled|query|boolean|false|Flag indicating whether the slot is allowed to share their video with the rest of the session. If false, the slot will have no video shared in any views containing the slot.|
|is_live|query|boolean|false|Flag indicating whether the user assigned to this slot is visible/can be heard from any public subscriptions. Generally, this determines whether or not the slot is enabled in any broadcasting software integrations.|
|volume|query|integer(int32)|false|Value from 0-100 that controls the audio volume for shared views containing the slot.|

<h3 id="beta-allows-a-user-to-update-slot-settings-for-a-particular-guest-within-a-guest-star-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfuly updated slot settings<br><br>__Examples__<br><br>_Request:_<br><br>Update slot settings to enable slot in broadcasting software<br><br>```bash<br>curl -X PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_audio_enabled=false` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```<br><br>_Request:_<br><br>Mute a slot’s audio for a guest<br><br>```bash<br>curl -X PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_live=true` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```<br><br>_Request:_<br><br>Allow slot audio to be unmuted by a guest. **NOTE**: This operation does not immediately unmute the guest. The guest will be notified they can unmute themselves when ready.<br><br>```bash<br>curl -X PATCH `https://api.twitch.tv/helix/guest_star/slot_settings?broadcaster_id=9321049&moderator_id=9321049&session_id=2KFRQbFtpmfyD3IevNRnCzOPRJI&slot_id=1&is_audio_enabled=true` \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* Missing _broadcaster\_id_<br>* Missing _moderator\_id_<br>* Missing or invalid _session\_id_<br>* Missing or invalid _slot\_id_|None|
|403|Forbidden|* _moderator\_id_ is not a Guest Star moderator<br>* The request is attempting to modify a restricted slot|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-hype-train">Hype Train</h1>

## Gets the status of a Hype Train for the specified broadcaster.

<a id="opIdget-hype-train-status"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/hypetrain/status?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hypetrain/status`

Get the status of a Hype Train for the specified broadcaster.

__Authorization:__

* Requires an [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).
* Requires OAuth Scope: `channel:read:hype_train`.
* Requires that `broadcaster_id` and `user_id` match in the User-Access token.

<a href="https://dev.twitch.tv/docs/api/reference#get-hype-train-status">Get Hype Train Status</a>

<h3 id="gets-the-status-of-a-hype-train-for-the-specified-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The User ID of the channel broadcaster.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "current": {
        "id": "1b0AsbInCHZW2SQFQkCzqN07Ib2",
        "broadcaster_user_id": "1337",
        "broadcaster_user_login": "cool_user",
        "broadcaster_user_name": "Cool_User",
        "level": 2,
        "total": 700,
        "progress": 200,
        "goal": 1000,
        "top_contributions": [
          {
            "user_id": "123",
            "user_login": "pogchamp",
            "user_name": "PogChamp",
            "type": "bits",
            "total": 50
          },
          {
            "user_id": "456",
            "user_login": "kappa",
            "user_name": "Kappa",
            "type": "subscription",
            "total": 45
          }
        ],
        "shared_train_participants": [
          {
            "broadcaster_user_id": "456",
            "broadcaster_user_login": "pogchamp",
            "broadcaster_user_name": "PogChamp"
          },
          {
            "broadcaster_user_id": "321",
            "broadcaster_user_login": "pogchamp",
            "broadcaster_user_name": "PogChamp"
          }
        ],
        "started_at": "2020-07-15T17:16:03.17106713Z",
        "expires_at": "2020-07-15T17:16:11.17106713Z",
        "type": "golden_kappa",
        "is_shared_train": true
      },
      "all_time_high": {
        "level": 6,
        "total": 2850,
        "achieved_at": "2020-04-24T20:12:21.003802269Z"
      },
      "shared_all_time_high": {
        "level": 16,
        "total": 23850,
        "achieved_at": "2020-04-27T20:12:21.003802269Z"
      }
    }
  ]
}
```

<h3 id="gets-the-status-of-a-hype-train-for-the-specified-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the status object.|[GetHypeTrainStatusResponse](#schemagethypetrainstatusresponse)|
|400|Bad Request|The ID in the `broadcaster_id` query parameter is not valid.|None|
|401|Unauthorized|* The OAuth token is not valid.<br>* The Authorization header is required and must contain a user access token.|None|
|500|Internal Server Error|Internal Server Error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:hype_train )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-moderation">Moderation</h1>

## Checks whether AutoMod would flag the specified message for review.

<a id="opIdcheck-automod-status"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/enforcements/status?broadcaster_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": [
      {
        "msg_id": "123",
        "msg_text": "Hello World!"
      },
      {
        "msg_id": "393",
        "msg_text": "Boooooo!"
      }
    ]
  }'
```

`POST /moderation/enforcements/status`

Checks whether AutoMod would flag the specified message for review.

AutoMod is a moderation tool that holds inappropriate or harassing chat messages for moderators to review. Moderators approve or deny the messages that AutoMod flags; only approved messages are released to chat. AutoMod detects misspellings and evasive language automatically. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).

**Rate Limits**: Rates are limited per channel based on the account type rather than per access token.

| Account type | Limit per minute | Limit per hour |
| - | - | - |
| Normal | 5 | 50 |
| Affiliate | 10 | 100 |
| Partner | 30 | 300 |


The above limits are in addition to the standard [Twitch API rate limits](https://dev.twitch.tv/docs/api/guide#twitch-rate-limits). The rate limit headers in the response represent the Twitch rate limits and not the above limits.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderation:read** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#check-automod-status">Check AutoMod Status</a>

> Body parameter

```json
{
  "data": [
    {
      "msg_id": "123",
      "msg_text": "Hello World!"
    },
    {
      "msg_id": "393",
      "msg_text": "Boooooo!"
    }
  ]
}
```

<h3 id="checks-whether-automod-would-flag-the-specified-message-for-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose AutoMod settings and list of blocked terms are used to check the message. This ID must match the user ID in the access token.|
|body|body|[CheckAutoModStatusBody](#schemacheckautomodstatusbody)|false|none|
|» data|body|[object]|true|The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages.|
|» » msg_id|body|string|true|A caller-defined ID used to correlate this message with the same message in the response.|
|» » msg_text|body|string|true|The message to check.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "msg_id": "123",
      "is_permitted": true
    },
    {
      "msg_id": "393",
      "is_permitted": false
    }
  ]
}
```

<h3 id="checks-whether-automod-would-flag-the-specified-message-for-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully checked the messages.|[CheckAutoModStatusResponse](#schemacheckautomodstatusresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The `data` field is required and the list must contain one or more messages to check.<br>* The `msg_id` field is required.<br>* The `msg_text` field is required.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderation:read** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The ID in _broadcaster\_id_ must match the user ID in the user access token.|None|
|429|Too Many Requests|* The broadcaster exceeded the number of chat message checks that they may make. See the endpoint's rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderation:read )
</aside>

## Allow or deny the message that AutoMod flagged for review.

<a id="opIdmanage-held-automod-messages"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/moderation/automod/message \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": "9327994",
    "msg_id": "836013710",
    "action": "ALLOW"
  }'
```

`POST /moderation/automod/message`

Allow or deny the message that AutoMod flagged for review. For information about AutoMod, see [How to Use AutoMod](https://help.twitch.tv/s/article/how-to-use-automod).

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:automod** scope for the user represented by the `user_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#manage-held-automod-messages">Manage Held AutoMod Messages</a>

> Body parameter

```json
{
  "user_id": "9327994",
  "msg_id": "836013710",
  "action": "ALLOW"
}
```

<h3 id="allow-or-deny-the-message-that-automod-flagged-for-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManageHeldAutoModMessagesBody](#schemamanageheldautomodmessagesbody)|false|none|
|» user_id|body|string|true|The moderator who is approving or denying the held message. This ID must match the user ID in the access token.|
|» msg_id|body|string|true|The ID of the message to allow or deny.|
|» action|body|string|true|The action to take for the message. Possible values are:  <br>  <br>* ALLOW<br>* DENY|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|ALLOW|
|» action|DENY|

<h3 id="allow-or-deny-the-message-that-automod-flagged-for-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully approved or denied the message.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/moderation/automod/message' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2' \<br>-H 'Content-Type: application/json' \<br>-d '{<br>  "user_id": "9327994",<br>  "msg_id": "836013710",<br>  "action": "ALLOW"<br>}'<br>```|None|
|400|Bad Request|* The value in the `action` field is not valid.<br>* The `user_id` field is required.<br>* The `msg_id` field is required.<br>* The `action` field is required.|None|
|401|Unauthorized|* The ID in `user_id` must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:automod** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _user\_id_ is not one of the broadcaster's moderators.|None|
|404|Not Found|* The message specified in the `msg_id` field was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:automod )
</aside>

## Gets the broadcaster’s AutoMod settings.

<a id="opIdget-automod-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/automod/settings?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/automod/settings`

Gets the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:automod\_settings** or **moderator:manage:automod\_settings** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:automod\_settings** or **moderator:manage:automod\_settings** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-automod-settings">Get AutoMod Settings</a>

<h3 id="gets-the-broadcasters-automod-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose AutoMod settings you want to get.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "1234",
      "moderator_id": "5678",
      "overall_level": null,
      "disability": 0,
      "aggression": 0,
      "sexuality_sex_or_gender": 0,
      "misogyny": 0,
      "bullying": 0,
      "swearing": 0,
      "race_ethnicity_or_religion": 0,
      "sex_based_terms": 0
    }
  ]
}
```

<h3 id="gets-the-broadcasters-automod-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s AutoMod settings.|[GetAutoModSettingsResponse](#schemagetautomodsettingsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:read:automod\_settings** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:automod_settings moderator:manage:automod_settings )
</aside>

## Updates the broadcaster’s AutoMod settings.

<a id="opIdupdate-automod-settings"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/automod/settings?broadcaster_id=string&moderator_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "overall_level": 3
  }'
```

`PUT /moderation/automod/settings`

Updates the broadcaster’s AutoMod settings. The settings are used to automatically block inappropriate or harassing messages from appearing in the broadcaster’s chat room.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:automod\_settings** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:automod\_settings** scope for the user represented by the `moderator_id` query parameter.

__Request Body:__

Because PUT is an overwrite operation, you must include all the fields that you want set after the operation completes. Typically, you’ll send a GET request, update the fields you want to change, and pass that object in the PUT request.

You may set either `overall_level` or the individual settings like `aggression`, but not both.

Setting `overall_level` applies default values to the individual settings. However, setting `overall_level` to 4 does not necessarily mean that it applies 4 to all the individual settings. Instead, it applies a set of recommended defaults to the rest of the settings. For example, if you set `overall_level` to 2, Twitch provides some filtering on discrimination and sexual content, but more filtering on hostility (see the first example response).

If `overall_level` is currently set and you update `swearing` to 3, `overall_level` will be set to **null** and all settings other than `swearing` will be set to 0\. The same is true if individual settings are set and you update `overall_level` to 3 — all the individual settings are updated to reflect the default level.

Note that if you set all the individual settings to values that match what `overall_level` would have set them to, Twitch changes AutoMod to use the default AutoMod level instead of using the individual settings.

Valid values for all levels are from 0 (no filtering) through 4 (most aggressive filtering). These levels affect how aggressively AutoMod holds back messages for moderators to review before they appear in chat or are denied (not shown).

<a href="https://dev.twitch.tv/docs/api/reference#update-automod-settings">Update AutoMod Settings</a>

> Body parameter

```json
{
  "overall_level": 3
}
```

<h3 id="updates-the-broadcasters-automod-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose AutoMod settings you want to update.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|body|body|[UpdateAutoModSettingsBody](#schemaupdateautomodsettingsbody)|false|none|
|» aggression|body|integer(int32)|false|The Automod level for hostility involving aggression.|
|» bullying|body|integer(int32)|false|The Automod level for hostility involving name calling or insults.|
|» disability|body|integer(int32)|false|The Automod level for discrimination against disability.|
|» misogyny|body|integer(int32)|false|The Automod level for discrimination against women.|
|» overall_level|body|integer(int32)|false|The default AutoMod level for the broadcaster.|
|» race_ethnicity_or_religion|body|integer(int32)|false|The Automod level for racial discrimination.|
|» sex_based_terms|body|integer(int32)|false|The Automod level for sexual content.|
|» sexuality_sex_or_gender|body|integer(int32)|false|The AutoMod level for discrimination based on sexuality, sex, or gender.|
|» swearing|body|integer(int32)|false|The Automod level for profanity.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "1234",
      "moderator_id": "5678",
      "overall_level": 3,
      "disability": 3,
      "aggression": 3,
      "sexuality_sex_or_gender": 3,
      "misogyny": 3,
      "bullying": 2,
      "swearing": 0,
      "race_ethnicity_or_religion": 3,
      "sex_based_terms": 3
    }
  ]
}
```

<h3 id="updates-the-broadcasters-automod-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the broadcaster’s AutoMod settings.|[UpdateAutoModSettingsResponse](#schemaupdateautomodsettingsresponse)|
|400|Bad Request|* The _broadcaster\_id_ is required.<br>* The _moderator\_id_ is required.<br>* The `overall_level` setting or one or more individual settings like `aggression` is required; the overall and individual settings are mutually exclusive, so don't set both.<br>* The value of one or more AutoMod settings is not valid.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:automod\_settings** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:automod_settings )
</aside>

## Gets all users that the broadcaster banned or put in a timeout.

<a id="opIdget-banned-users"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/banned?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/banned`

Gets all users that the broadcaster banned or put in a timeout.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** or **moderator:manage:banned\_users** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderation:read** or **moderator:manage:banned\_users** scope for the user represented by the `broadcaster_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-banned-users">Get Banned Users</a>

<h3 id="gets-all-users-that-the-broadcaster-banned-or-put-in-a-timeout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose list of banned users you want to get. This ID must match the user ID in the access token.|
|user_id|query|[string]|false|A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each user you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.  <br>  <br>The returned list includes only those users that were banned or put in a timeout. The list is returned in the same order that you specified the IDs.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "423374343",
      "user_login": "glowillig",
      "user_name": "glowillig",
      "expires_at": "2022-03-15T02:00:28Z",
      "created_at": "2022-03-15T01:30:28Z",
      "reason": "Does not like pineapple on pizza.",
      "moderator_id": "141981764",
      "moderator_login": "twitchdev",
      "moderator_name": "TwitchDev"
    },
    {
      "user_id": "424596340",
      "user_login": "quotrok",
      "user_name": "quotrok",
      "expires_at": "2022-08-07T02:07:55Z",
      "created_at": "2022-08-07T02:02:55Z",
      "reason": "Inappropriate words.",
      "moderator_id": "141981764",
      "moderator_login": "twitchdev",
      "moderator_name": "TwitchDev"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6IjEwMDQ3MzA2NDo4NjQwNjU3MToxSVZCVDFKMnY5M1BTOXh3d1E0dUdXMkJOMFcifX0"
  }
}
```

<h3 id="gets-all-users-that-the-broadcaster-banned-or-put-in-a-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of banned users.|[GetBannedUsersResponse](#schemagetbannedusersresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderation:read** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderation:read moderator:manage:banned_users )
</aside>

## Bans a user from participating in a broadcaster’s chat room or puts them in a timeout.

<a id="opIdban-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/bans?broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "user_id": "9876",
      "reason": "no reason"
    }
  }'
```

`POST /moderation/bans`

Bans a user from participating in the specified broadcaster’s chat room or puts them in a timeout.

For information about banning or putting users in a timeout, see [Ban a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheBanFeature) and [Timeout a User](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat#TheTimeoutFeature).

If the user is currently in a timeout, you can call this endpoint to change the duration of the timeout or ban them altogether. If the user is currently banned, you cannot call this method to put them in a timeout instead.

To remove a ban or end a timeout, see [Unban user](https://dev.twitch.tv/docs/api/reference#unban-user).

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:banned\_users** and **user:bot** scopes for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#ban-user">Ban User</a>

> Body parameter

```json
{
  "data": {
    "user_id": "9876",
    "reason": "no reason"
  }
}
```

<h3 id="bans-a-user-from-participating-in-a-broadcasters-chat-room-or-puts-them-in-a-timeout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose chat room the user is being banned from.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|body|body|[BanUserBody](#schemabanuserbody)|false|none|
|» data|body|object|true|Identifies the user and type of ban.|
|» » user_id|body|string|true|The ID of the user to ban or put in a timeout.|
|» » duration|body|integer(int32)|false|To ban a user indefinitely, don’t include this field.  <br>  <br>To put a user in a timeout, include this field and specify the timeout period, in seconds. The minimum timeout is 1 second and the maximum is 1,209,600 seconds (2 weeks).  <br>  <br>To end a user’s timeout early, set this field to 1, or use the [Unban user](https://dev.twitch.tv/docs/api/reference#unban-user) endpoint.|
|» » reason|body|string|false|The reason the you’re banning the user or putting them in a timeout. The text is user defined and is limited to a maximum of 500 characters.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "1234",
      "moderator_id": "5678",
      "user_id": "9876",
      "created_at": "2021-09-28T18:22:31Z",
      "end_time": null
    }
  ]
}
```

> 400 Response

```json
{
  "error": "Bad Request",
  "status": 400,
  "message": "user is already banned"
}
```

<h3 id="bans-a-user-from-participating-in-a-broadcasters-chat-room-or-puts-them-in-a-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully banned the user or placed them in a timeout.|[BanUserResponse](#schemabanuserresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* The `user_id` field is required.<br>* The text in the `reason` field is too long.<br>* The value in the `duration` field is not valid.<br>* The user specified in the `user_id` field may not be banned.<br>* The user specified in the `user_id` field may not be put in a timeout.<br>* The user specified in the `user_id` field is already banned.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:banned\_users** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|
|409|Conflict|* You may not update the user's ban state while someone else is updating the state. For example, someone else is currently banning the user or putting them in a timeout, moving the user from a timeout to a ban, or removing the user from a ban or timeout. Please retry your request.|None|
|429|Too Many Requests|* The app has exceeded the number of requests it may make per minute for this broadcaster.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:banned_users user:bot )
</aside>

## Removes the ban or timeout that was placed on the specified user.

<a id="opIdunban-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/bans?broadcaster_id=string&moderator_id=string&user_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /moderation/bans`

Removes the ban or timeout that was placed on the specified user.

To ban a user, see [Ban user](https://dev.twitch.tv/docs/api/reference#ban-user).

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:banned\_users** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:banned\_users** and **user:bot** scopes for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#unban-user">Unban User</a>

<h3 id="removes-the-ban-or-timeout-that-was-placed-on-the-specified-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose chat room the user is banned from chatting in.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|user_id|query|string|true|The ID of the user to remove the ban or timeout from.|

> Example responses

> 400 Response

```json
{
  "error": "Bad Request",
  "status": 400,
  "message": "user is not banned"
}
```

<h3 id="removes-the-ban-or-timeout-that-was-placed-on-the-specified-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the ban or timeout.<br><br>__Examples__<br><br>_Request:_<br><br>Removes a ban or timeout from a user.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/moderation/bans?broadcaster_id=1234&moderator_id=5678&user_id=5432' \<br>-H 'Authorization: Bearer 4a4x78f5wqvkybms7mxfist3jmzul' \<br>-H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* The _user\_id_ query parameter is required.<br>* The user specified in the _user\_id_ query parameter is not banned.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:banned\_users** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|
|409|Conflict|* You may not update the user's ban state while someone else is updating the state. For example, someone else is currently removing the ban or timeout, or they're moving the user from a timeout to a ban. Please retry your request.|None|
|429|Too Many Requests|* The app has exceeded the number of requests it may make per minute for this broadcaster.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:banned_users user:bot )
</aside>

## Gets a list of unban requests for a broadcaster’s channel.

<a id="opIdget-unban-requests"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/unban_requests?broadcaster_id=string&moderator_id=string&status=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/unban_requests`

Gets a list of unban requests for a broadcaster’s channel.

__Authorization:__

* Requires a user access token that includes the **moderator:read:unban\_requests** or **moderator:manage:unban\_requests** scope.
* Query parameter `moderator_id` must match the `user_id` in the [user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-unban-requests">Get Unban Requests</a>

<h3 id="gets-a-list-of-unban-requests-for-a-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose channel is receiving unban requests.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token.|
|status|query|string|true|Filter by a status.  <br>  <br>* pending<br>* approved<br>* denied<br>* acknowledged<br>* canceled|
|user_id|query|string|false|The ID used to filter what unban requests are returned.|
|after|query|string|false|Cursor used to get next page of results. Pagination object in response contains cursor value.|
|first|query|integer(int32)|false|The maximum number of items to return per page in response|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "92af127c-7326-4483-a52b-b0da0be61c01",
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "moderator_id": "141981764",
      "moderator_login": "twitchdev",
      "moderator_name": "TwitchDev",
      "user_id": "424596340",
      "user_login": "quotrok",
      "user_name": "quotrok",
      "text": "Please unban me from the channel?",
      "status": "pending",
      "created_at": "2022-08-07T02:07:55Z",
      "resolved_at": null,
      "resolution_text": null
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6IjEwMDQ3MzA2NDo4NjQwNjU3MToxSVZCVDFKMnY5M1BTOXh3d1E0dUdXMkJOMFcifX0"
  }
}
```

<h3 id="gets-a-list-of-unban-requests-for-a-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of unban requests.|[GetUnbanRequestsResponse](#schemagetunbanrequestsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _moderator\_id_ query parameter is required.<br>* The ID in the _moderator\_id_ query parameter is not valid.<br>* The pagination cursor is not valid.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:read:unban\_requests** or **moderator:manage:unban\_requests** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:unban_requests moderator:manage:unban_requests )
</aside>

## Resolves an unban request by approving or denying it.

<a id="opIdresolve-unban-requests"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/unban_requests?broadcaster_id=string&moderator_id=string&unban_request_id=string&status=string' \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /moderation/unban_requests`

Resolves an unban request by approving or denying it.

__Authorization:__

* Requires a user access token that includes the **moderator:manage:unban\_requests** scope.
* Query parameter `moderator_id` must match the `user_id` in the[user access token](https://dev.twitch.tv/docs/authentication/#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#resolve-unban-requests">Resolve Unban Requests</a>

<h3 id="resolves-an-unban-request-by-approving-or-denying-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose channel is approving or denying the unban request.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s unban requests. This ID must match the user ID in the user access token.|
|unban_request_id|query|string|true|The ID of the Unban Request to resolve.|
|status|query|string|true|Resolution status.   <br>  <br>* approved<br>* denied|
|resolution_text|query|string|false|Message supplied by the unban request resolver. The message is limited to a maximum of 500 characters.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "92af127c-7326-4483-a52b-b0da0be61c01",
      "broadcaster_name": "torpedo09",
      "broadcaster_login": "torpedo09",
      "broadcaster_id": "274637212",
      "moderator_id": "141981764",
      "moderator_login": "twitchdev",
      "moderator_name": "TwitchDev",
      "user_id": "424596340",
      "user_login": "quotrok",
      "user_name": "quotrok",
      "text": "Please unban me from the channel?",
      "status": "approved",
      "created_at": "2022-08-07T02:07:55Z",
      "resolved_at": "2022-08-09T02:07:55Z",
      "resolution_text": ""
    }
  ]
}
```

<h3 id="resolves-an-unban-request-by-approving-or-denying-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully resolved the unban request.|[ResolveUnbanRequestsResponse](#schemaresolveunbanrequestsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _moderator\_id_ query parameter is required.<br>* The ID in the _moderator\_id_ query parameter is not valid.<br>* The pagination cursor is not valid.<br>* The broadcaster is not receiving unban requests<br>* Invalid requested update|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:unban\_requests** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|The unban request ID was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:unban_requests )
</aside>

## Gets the broadcaster’s list of non-private, blocked words or phrases.

<a id="opIdget-blocked-terms"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/blocked_terms?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/blocked_terms`

Gets the broadcaster’s list of non-private, blocked words or phrases. These are the terms that the broadcaster or moderator added manually or that were denied by AutoMod.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:blocked\_terms** or **moderator:manage:blocked\_terms** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:blocked\_terms** or **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-blocked-terms">Get Blocked Terms</a>

<h3 id="gets-the-broadcasters-list-of-non-private-blocked-words-or-phrases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose blocked terms you’re getting.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "1234",
      "moderator_id": "5678",
      "id": "520e4d4e-0cda-49c7-821e-e5ef4f88c2f2",
      "text": "A phrase I’m not fond of",
      "created_at": "2021-09-29T19:45:37Z",
      "updated_at": "2021-09-29T19:45:37Z",
      "expires_at": null
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6I..."
  }
}
```

<h3 id="gets-the-broadcasters-list-of-non-private-blocked-words-or-phrases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of blocked terms.|[GetBlockedTermsResponse](#schemagetblockedtermsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header must contain a user access token.<br>* The user access token must include the **moderator:read:blocked\_terms** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:blocked_terms moderator:manage:blocked_terms )
</aside>

## Adds a word or phrase to the broadcaster’s list of blocked terms.

<a id="opIdadd-blocked-term"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/blocked_terms?broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "A phrase I’m not fond of"
  }'
```

`POST /moderation/blocked_terms`

Adds a word or phrase to the broadcaster’s list of blocked terms. These are the terms that the broadcaster doesn’t want used in their chat room.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#add-blocked-term">Add Blocked Term</a>

> Body parameter

```json
{
  "text": "A phrase I’m not fond of"
}
```

<h3 id="adds-a-word-or-phrase-to-the-broadcasters-list-of-blocked-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the list of blocked terms.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|body|body|[AddBlockedTermBody](#schemaaddblockedtermbody)|false|none|
|» text|body|string|true|The word or phrase to block from being used in the broadcaster’s chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.  <br>  <br>Terms may include a wildcard character (\*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, \*foo or foo\*.  <br>  <br>If the blocked term already exists, the response contains the existing blocked term.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "713936733",
      "moderator_id": "713936733",
      "id": "3bb6e5d3-afb1-416c-ad4e-21af970ccfe7",
      "text": "A phrase I’m not fond of",
      "created_at": "2021-09-29T15:36:45Z",
      "updated_at": "2021-09-29T15:36:45Z",
      "expires_at": null
    }
  ]
}
```

<h3 id="adds-a-word-or-phrase-to-the-broadcasters-list-of-blocked-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of blocked terms.|[AddBlockedTermResponse](#schemaaddblockedtermresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* The `text` field is required.<br>* The length of the term in the `text` field is either too short or too long.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:blocked\_terms** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:blocked_terms )
</aside>

## Removes the word or phrase from the broadcaster’s list of blocked terms.

<a id="opIdremove-blocked-term"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/blocked_terms?broadcaster_id=string&moderator_id=string&id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /moderation/blocked_terms`

Removes the word or phrase from the broadcaster’s list of blocked terms.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:blocked\_terms** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:blocked\_terms** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#remove-blocked-term">Remove Blocked Term</a>

<h3 id="removes-the-word-or-phrase-from-the-broadcasters-list-of-blocked-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the list of blocked terms.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|id|query|string|true|The ID of the blocked term to remove from the broadcaster’s list of blocked terms.|

<h3 id="removes-the-word-or-phrase-from-the-broadcasters-list-of-blocked-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the blocked term. Also returned if the ID is not found.<br><br>__Examples__<br><br>_Request:_<br><br>Deletes the specified blocked term.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/moderation/blocked_terms?broadcaster_id=1234&moderator_id=5678&id=c9fc79b8-0f63-4ef7-9d38-efd811e74ac2' \ <br>-H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \<br>-H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* The _id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:blocked\_terms** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:blocked_terms )
</aside>

## Removes a single chat message or all chat messages from the broadcaster’s chat room.

<a id="opIddelete-chat-messages"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/chat?broadcaster_id=string&moderator_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /moderation/chat`

Removes a single chat message or all chat messages from the broadcaster’s chat room.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:chat\_messages** scope.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:chat\_messages** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#delete-chat-messages">Delete Chat Messages</a>

<h3 id="removes-a-single-chat-message-or-all-chat-messages-from-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room to remove messages from.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that has permission to moderate the broadcaster’s chat room. This ID must match the user ID in the user access token.|
|message_id|query|string|false|The ID of the message to remove. The `id` tag in the [PRIVMSG](https://dev.twitch.tv/docs/irc/tags#privmsg-tags) tag contains the message’s ID. Restrictions:  <br>  <br>* The message must have been created within the last 6 hours.<br>* The message must not belong to the broadcaster.<br>* The message must not belong to another moderator.<br>  <br>If not specified, the request removes all messages in the broadcaster’s chat room.|

<h3 id="removes-a-single-chat-message-or-all-chat-messages-from-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the specified messages.<br><br>__Examples__<br><br>_Request:_<br><br>Removes all messages from the broadcaster’s chat room (doesn’t include the _message\_id_ query parameter).<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/moderation/chat?broadcaster_id=11111&moderator_id=44444' \<br>-H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \<br>-H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'<br>```<br><br>Removes the specified message from the broadcaster’s chat room.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/moderation/chat?broadcaster_id=11111&moderator_id=44444&message_id=abc-123-def' \ <br>-H 'Authorization: Bearer f4otqljtpbpg24v41v9gechs4yvwy' \<br>-H 'Client-Id: t214nt8z1rdtbj69hyarjvh5mi6fh'<br>```|None|
|400|Bad Request|* You may not delete another moderator's messages.<br>* You may not delete the broadcaster's messages.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token is missing the **moderator:manage:chat\_messages** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|
|404|Not Found|* The ID in _message\_id_ was not found.<br>* The specified message was created more than 6 hours ago.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:chat_messages )
</aside>

## Gets a list of channels that the specified user has moderator privileges in.

<a id="opIdget-moderated-channels"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/channels?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/channels`

Gets a list of channels that the specified user has moderator privileges in.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:moderated\_channels**. The user ID associated with the token must match the `user_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **user:read:moderated\_channels** scope for the user represented by the `user_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-moderated-channels">Get Moderated Channels</a>

<h3 id="gets-a-list-of-channels-that-the-specified-user-has-moderator-privileges-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|A user’s ID. Returns the list of channels that this user has moderator privileges in. This ID must match the user ID in the user OAuth token|
|after|query|string|false|The cursor used to get the next page of results. The Pagination object in the response contains the cursor’s value.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response.  <br>  <br>Minimum page size is 1 item per page and the maximum is 100\. The default is 20.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "12345",
      "broadcaster_login": "grateful_broadcaster",
      "broadcaster_name": "Grateful_Broadcaster"
    },
    {
      "broadcaster_id": "98765",
      "broadcaster_login": "bashfulgamer",
      "broadcaster_name": "BashfulGamer"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6IjEwMDQ3MzA2NDo4NjQwNjU3MToxSVZCVDFKMnY5M1BTOXh3d1E0dUdXMkJOMFcifX0"
  }
}
```

<h3 id="gets-a-list-of-channels-that-the-specified-user-has-moderator-privileges-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of moderated channels.|[GetModeratedChannelsResponse](#schemagetmoderatedchannelsresponse)|
|400|Bad Request||None|
|401|Unauthorized||None|
|500|Internal Server Error||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:moderated_channels )
</aside>

## Gets all users allowed to moderate the broadcaster’s chat room.

<a id="opIdget-moderators"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/moderators`

Gets all users allowed to moderate the broadcaster’s chat room.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderation:read** scope. If your app also adds and removes moderators, you can use the **channel:manage:moderators** scope instead.

<a href="https://dev.twitch.tv/docs/api/reference#get-moderators">Get Moderators</a>

<h3 id="gets-all-users-allowed-to-moderate-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose list of moderators you want to get. This ID must match the user ID in the access token.|
|user_id|query|[string]|false|A list of user IDs used to filter the results. To specify more than one ID, include this parameter for each moderator you want to get. For example, `user_id=1234&user_id=5678`. You may specify a maximum of 100 IDs.  <br>  <br>The returned list includes only the users from the list who are moderators in the broadcaster’s channel. The list is returned in the same order as you specified the IDs.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "424596340",
      "user_login": "quotrok",
      "user_name": "quotrok"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN1cnNvciI6IjEwMDQ3MzA2NDo4NjQwNjU3MToxSVZCVDFKMnY5M1BTOXh3d1E0dUdXMkJOMFcifX0"
  }
}
```

<h3 id="gets-all-users-allowed-to-moderate-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of moderators.|[GetModeratorsResponse](#schemagetmoderatorsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID found in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderation:read** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderation:read channel:manage:moderators )
</aside>

## Adds a moderator to the broadcaster’s chat room.

<a id="opIdadd-channel-moderator"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=string&user_id=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /moderation/moderators`

Adds a moderator to the broadcaster’s chat room.

**Rate Limits**: The broadcaster may add a maximum of 10 moderators within a 10-second window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.

<a href="https://dev.twitch.tv/docs/api/reference#add-channel-moderator">Add Channel Moderator</a>

<h3 id="adds-a-moderator-to-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token.|
|user_id|query|string|true|The ID of the user to add as a moderator in the broadcaster’s chat room.|

<h3 id="adds-a-moderator-to-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully added the moderator.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=11111&user_id=44444' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The ID in _broadcaster\_id_ was not found.<br>* The ID in _user\_id_ was not found.<br>* The user in _user\_id_ is already a moderator in the broadcaster's chat room.<br>* The user in _user\_id_ cannot become a moderator because they're banned from the channel.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:moderators** scope.<br>* The access token is not valid.<br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|422|Unprocessable Entity|* The user in _user\_id_ is a VIP. To make them a moderator, you must first remove them as a VIP (see [Remove Channel VIP](https://dev.twitch.tv/docs/api/reference#remove-channel-vip)).|None|
|429|Too Many Requests|* The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:moderators )
</aside>

## Removes a moderator from the broadcaster’s chat room.

<a id="opIdremove-channel-moderator"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=string&user_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /moderation/moderators`

Removes a moderator from the broadcaster’s chat room.

**Rate Limits**: The broadcaster may remove a maximum of 10 moderators within a 10-second window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:moderators** scope.

<a href="https://dev.twitch.tv/docs/api/reference#remove-channel-moderator">Remove Channel Moderator</a>

<h3 id="removes-a-moderator-from-the-broadcasters-chat-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the chat room. This ID must match the user ID in the access token.|
|user_id|query|string|true|The ID of the user to remove as a moderator from the broadcaster’s chat room.|

<h3 id="removes-a-moderator-from-the-broadcasters-chat-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the moderator.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=11111&user_id=44444' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The ID in _broadcaster\_id_ was not found.<br>* The ID in _user\_id_ was not found.<br>* The user in _user\_id_ is not a moderator in the broadcaster's chat room.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:moderators** scope.<br>* The access token is not valid.<br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|429|Too Many Requests|* The broadcaster has exceeded the number of requests allowed within a 10-second window. See this endpoint's rate limits.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:moderators )
</aside>

## Gets a list of the broadcaster’s VIPs.

<a id="opIdget-vips"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/vips?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /channels/vips`

Gets a list of the broadcaster’s VIPs.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:vips** scope. If your app also adds and removes VIP status, you can use the **channel:manage:vips** scope instead.

<a href="https://dev.twitch.tv/docs/api/reference#get-vips">Get VIPs</a>

<h3 id="gets-a-list-of-the-broadcasters-vips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|[string]|false|Filters the list for specific VIPs. To specify more than one user, include the _user\_id_ parameter for each user to get. For example, `&user_id=1234&user_id=5678`. The maximum number of IDs that you may specify is 100\. Ignores the ID of those users in the list that aren’t VIPs.|
|broadcaster_id|query|string|true|The ID of the broadcaster whose list of VIPs you want to get. This ID must match the user ID in the access token.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "11111",
      "user_name": "UserDisplayName",
      "user_login": "userloginname"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-a-list-of-the-broadcasters-vips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of VIPs.|[GetVIPsResponse](#schemagetvipsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _user\_id_ query parameter is not valid.<br>* The number of _user\_id_ query parameters exceeds the maximum allowed.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:vips** or **channel:manage:vips** scope.<br>* The OAuth token is not valid.<br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:vips channel:manage:vips )
</aside>

## Adds the specified user as a VIP in the broadcaster’s channel.

<a id="opIdadd-channel-vip"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/vips?user_id=string&broadcaster_id=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /channels/vips`

Adds the specified user as a VIP in the broadcaster’s channel.

**Rate Limits**: The broadcaster may add a maximum of 10 VIPs within a 10-second window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.

<a href="https://dev.twitch.tv/docs/api/reference#add-channel-vip">Add Channel VIP</a>

<h3 id="adds-the-specified-user-as-a-vip-in-the-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|The ID of the user to give VIP status to.|
|broadcaster_id|query|string|true|The ID of the broadcaster that’s adding the user as a VIP. This ID must match the user ID in the access token.|

<h3 id="adds-the-specified-user-as-a-vip-in-the-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully added the VIP.<br><br>__Examples__<br><br>_Request:_<br><br>Adds a VIP to the broadcaster’s chat room.<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/channels/vips?broadcaster_id=123&user_id=456' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The user in the _user\_id_ query parameter is blocked from the broadcaster's channel.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The ID in the _user\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:vips** scope.<br>* The OAuth token is not valid.<br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|404|Not Found|* The ID in _broadcaster\_id_ was not found.<br>* The ID in _user\_id_ was not found.|None|
|409|Conflict|The broadcaster doesn’t have available VIP slots. [Read More](https://help.twitch.tv/s/article/Managing-Roles-for-your-Channel?language=en%5FUS#types)|None|
|422|Unprocessable Entity|* The user in _user\_id_ is a moderator. To make them a VIP, you must first remove them as a moderator (see [Remove Channel Moderator](https://dev.twitch.tv/docs/api/reference#remove-channel-moderator)).<br>* The user in the _user\_id_ query parameter is already a VIP.|None|
|425|Too Early|The broadcaster must complete the Build a Community requirement before they may assign VIPs.|None|
|429|Too Many Requests|The broadcaster exceeded the number of VIP that they may add within a 10-second window. See Rate Limits for this endpoint above.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:vips )
</aside>

## Removes the specified user as a VIP in the broadcaster’s channel.

<a id="opIdremove-channel-vip"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/channels/vips?user_id=string&broadcaster_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /channels/vips`

Removes the specified user as a VIP in the broadcaster’s channel.

If the broadcaster is removing the user’s VIP status, the ID in the _broadcaster\_id_ query parameter must match the user ID in the access token; otherwise, if the user is removing their VIP status themselves, the ID in the _user\_id_ query parameter must match the user ID in the access token.

**Rate Limits**: The broadcaster may remove a maximum of 10 VIPs within a 10-second window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:vips** scope.

<a href="https://dev.twitch.tv/docs/api/reference#remove-channel-vip">Remove Channel VIP</a>

<h3 id="removes-the-specified-user-as-a-vip-in-the-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|The ID of the user to remove VIP status from.|
|broadcaster_id|query|string|true|The ID of the broadcaster who owns the channel where the user has VIP status.|

<h3 id="removes-the-specified-user-as-a-vip-in-the-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the VIP status from the user.<br><br>__Examples__<br><br>_Request:_<br><br>Removes the VIP user from the broadcaster’s channel.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/channels/vips?broadcaster_id=123&user_id=456' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The ID in _broadcaster\_id_ is not valid.<br>* The ID in _user\_id_ is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:vips** scope.<br>* The OAuth token is not valid.<br>* The ID in the _broadcaster\_id_ query parameter must match the user ID in the access token, unless the user ID in the access token is removing themselves as a VIP.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the OAuth token.|None|
|403|Forbidden|* The user in _broadcaster\_id_ doesn't have permission to remove the user's VIP status.|None|
|404|Not Found|* The ID in _broadcaster\_id_ was not found.<br>* The ID in _user\_id_ was not found.|None|
|422|Unprocessable Entity|* The user in _user\_id_ is not a VIP in the broadcaster's channel.|None|
|429|Too Many Requests|The broadcaster exceeded the number of VIPs that they may remove within a 10-second window. See Rate Limits for this endpoint above.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:vips )
</aside>

## Gets the broadcaster’s Shield Mode activation status.

<a id="opIdget-shield-mode-status"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/shield_mode?broadcaster_id=string&moderator_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /moderation/shield_mode`

Gets the broadcaster’s Shield Mode activation status.

To receive notification when the broadcaster activates and deactivates Shield Mode, subscribe to the [channel.shield\_mode.begin](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodebegin) and [channel.shield\_mode.end](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelshield%5Fmodeend) subscription types.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#get-shield-mode-status">Get Shield Mode Status</a>

<h3 id="gets-the-broadcasters-shield-mode-activation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose Shield Mode activation status you want to get.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "is_active": true,
      "moderator_id": "98765",
      "moderator_name": "SimplySimple",
      "moderator_login": "simplysimple",
      "last_activated_at": "2022-07-26T17:16:03.123Z"
    }
  ]
}
```

<h3 id="gets-the-broadcasters-shield-mode-activation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s Shield Mode activation status.|[GetShieldModeStatusResponse](#schemagetshieldmodestatusresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:read:shield\_mode** or **moderator:manage:shield\_mode** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:read:shield_mode moderator:manage:shield_mode )
</aside>

## Activates or deactivates the broadcaster’s Shield Mode.

<a id="opIdupdate-shield-mode-status"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/shield_mode?broadcaster_id=string&moderator_id=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "is_active": false
  }'
```

`PUT /moderation/shield_mode`

Activates or deactivates the broadcaster’s Shield Mode.

Twitch’s Shield Mode feature is like a panic button that broadcasters can push to protect themselves from chat abuse coming from one or more accounts. When activated, Shield Mode applies the overrides that the broadcaster configured in the Twitch UX. If the broadcaster hasn’t configured Shield Mode, it applies default overrides.

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:shield\_mode** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:shield\_mode** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#update-shield-mode-status">Update Shield Mode Status</a>

> Body parameter

```json
{
  "is_active": false
}
```

<h3 id="activates-or-deactivates-the-broadcasters-shield-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose Shield Mode you want to activate or deactivate.|
|moderator_id|query|string|true|The ID of the broadcaster or a user that is one of the broadcaster’s moderators. This ID must match the user ID in the access token.|
|body|body|[UpdateShieldModeStatusBody](#schemaupdateshieldmodestatusbody)|false|none|
|» is_active|body|boolean|true|A Boolean value that determines whether to activate Shield Mode. Set to **true** to activate Shield Mode; otherwise, **false** to deactivate Shield Mode.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "is_active": false,
      "moderator_id": "98765",
      "moderator_name": "SimplySimple",
      "moderator_login": "simplysimple",
      "last_activated_at": "2022-07-26T17:16:03.123Z"
    }
  ]
}
```

<h3 id="activates-or-deactivates-the-broadcasters-shield-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the broadcaster’s Shield Mode status.|[UpdateShieldModeStatusResponse](#schemaupdateshieldmodestatusresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The `is_active` field is required.<br>* The value in the `is_active` field is not valid.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:shield\_mode** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* The user in _moderator\_id_ is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:shield_mode )
</aside>

## Warns a user in the specified broadcaster’s chat room, preventing them from chat interaction until the warning is acknowledged.

<a id="opIdwarn-chat-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/warnings?broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "user_id": "9876",
      "reason": "stop doing that!"
    }
  }'
```

`POST /moderation/warnings`

Warns a user in the specified broadcaster’s chat room, preventing them from chat interaction until the warning is acknowledged. New warnings can be issued to a user when they already have a warning in the channel (new warning will replace old warning).

__Authorization:__

Requires one of the following:

* A [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:warnings** scope. The user ID associated with the token must match the `moderator_id` in the query parameter.
* An [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) where the application, through a prior authorization, has the **moderator:manage:warnings** scope for the user represented by the `moderator_id` query parameter.

<a href="https://dev.twitch.tv/docs/api/reference#warn-chat-user">Warn Chat User</a>

> Body parameter

```json
{
  "data": {
    "user_id": "9876",
    "reason": "stop doing that!"
  }
}
```

<h3 id="warns-a-user-in-the-specified-broadcasters-chat-room-preventing-them-from-chat-interaction-until-the-warning-is-acknowledged-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the channel in which the warning will take effect.|
|moderator_id|query|string|true|The ID of the twitch user who requested the warning.|
|body|body|[WarnChatUserBody](#schemawarnchatuserbody)|false|none|
|» data|body|object|true|A list that contains information about the warning.|
|» » user_id|body|string|true|The ID of the twitch user to be warned.|
|» » reason|body|string|true|A custom reason for the warning. **Max 500 chars.**|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "404040",
      "user_id": "9876",
      "moderator_id": "404041",
      "reason": "stop doing that!"
    }
  ]
}
```

<h3 id="warns-a-user-in-the-specified-broadcasters-chat-room-preventing-them-from-chat-interaction-until-the-warning-is-acknowledged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully warn a user.|[WarnChatUserResponse](#schemawarnchatuserresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _moderator\_id_ query parameter is required.<br>* The _user\_id_ query parameter is required.<br>* The _reason_ query parameter is required.<br>* The text in the _reason_ field is too long.<br>* The user specified in the _user\_id_ may not be warned.|None|
|401|Unauthorized|* The ID in _moderator\_id_ must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **moderator:manage:warnings** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|The user in _moderator\_id_ is not one of the broadcaster’s moderators.|None|
|409|Conflict|You may not update the user’s warning state while someone else is updating the state. For example, someone else is currently warning the user or the user is acknowledging an existing warning. Please retry your request.|None|
|429|Too Many Requests|The app has exceeded the number of requests it may make per minute for this broadcaster.|None|
|500|Internal Server Error|Internal Server Error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:warnings )
</aside>

## NEW Adds a suspicious user status to a chatter on the broadcaster’s channel.

<a id="opIdadd-suspicious-status-to-chat-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/suspicious_users?broadcaster_id=string&moderator_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": "9876",
    "status": "RESTRICTED"
  }'
```

`POST /moderation/suspicious_users`

NEW Adds a suspicious user status to a chatter on the broadcaster’s channel.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:suspicious\_users** scope.

<a href="https://dev.twitch.tv/docs/api/reference#add-suspicious-status-to-chat-user">Add Suspicious Status to Chat User</a>

> Body parameter

```json
{
  "user_id": "9876",
  "status": "RESTRICTED"
}
```

<h3 id="new-adds-a-suspicious-user-status-to-a-chatter-on-the-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The user ID of the broadcaster, indicating the channel where the status is being applied.|
|moderator_id|query|string|true|The user ID of the moderator who is applying the status.|
|body|body|[AddSuspiciousStatusToChatUserBody](#schemaaddsuspiciousstatustochatuserbody)|false|none|
|» user_id|body|string|true|The ID of the user being given the suspicious status.|
|» status|body|string|true|The type of suspicious status. Possible values are: ACTIVE\_MONITORING, RESTRICTED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE_MONITORING|
|» status|RESTRICTED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "9876",
      "broadcaster_id": "141981764",
      "moderator_id": "12826",
      "updated_at": "2025-12-01T23:08:18+00:00",
      "status": "RESTRICTED",
      "types": [
        "MANUALLY_ADDED"
      ]
    }
  ]
}
```

<h3 id="new-adds-a-suspicious-user-status-to-a-chatter-on-the-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully applied a suspicious user status.|[AddSuspiciousStatusToChatUserResponse](#schemaaddsuspiciousstatustochatuserresponse)|
|400|Bad Request|* Validation errors: Missing required fields.<br>* The ID in the broadcaster\_id query parameter was not found.<br>* The status specified was invalid. Must either be ACTIVE\_MONITORING or RESTRICTED<br>* The status update is not allowed for this user.|None|
|401|Unauthorized|* The Authorization header is required and must specify user access token.<br>* The user access token must include the **moderator:manage:suspicious\_users** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The user in the moderator\_id query parameter is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:suspicious_users )
</aside>

## NEW Remove a suspicious user status from a chatter on broadcaster’s channel.

<a id="opIdremove-suspicious-status-from-chat-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/moderation/suspicious_users?broadcaster_id=string&moderator_id=string&user_id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /moderation/suspicious_users`

NEW Remove a suspicious user status from a chatter on broadcaster’s channel.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **moderator:manage:suspicious\_users** scope.

<a href="https://dev.twitch.tv/docs/api/reference#remove-suspicious-status-from-chat-user">Remove Suspicious Status From Chat User</a>

<h3 id="new-remove-a-suspicious-user-status-from-a-chatter-on-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The user ID of the broadcaster, indicating the channel where the status is being removed.|
|moderator_id|query|string|true|The user ID of the moderator who is removing the status.|
|user_id|query|string|true|The ID of the user having the suspicious status removed.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "9876",
      "broadcaster_id": "141981764",
      "moderator_id": "12826",
      "updated_at": "2025-12-01T23:08:18+00:00",
      "status": "NO_TREATMENT",
      "types": [
        "MANUALLY_ADDED"
      ]
    }
  ]
}
```

<h3 id="new-remove-a-suspicious-user-status-from-a-chatter-on-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully removed a suspicious user status.|[RemoveSuspiciousStatusFromChatUserResponse](#schemaremovesuspiciousstatusfromchatuserresponse)|
|400|Bad Request|* Validation errors: Missing required fields.<br>* The ID in the broadcaster\_id query parameter was not found.<br>* The status update is not allowed for this user.|None|
|401|Unauthorized|* The Authorization header is required and must specify user access token.<br>* The user access token must include the **moderator:manage:suspicious\_users** scope.<br>* The OAuth token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the OAuth token.|None|
|403|Forbidden|* The user in the moderator\_id query parameter is not one of the broadcaster's moderators.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: moderator:manage:suspicious_users )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-polls">Polls</h1>

## Gets a list of polls that the broadcaster created.

<a id="opIdget-polls"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/polls?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /polls`

Gets a list of polls that the broadcaster created.

Polls are available for 90 days after they’re created.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:polls** or **channel:manage:polls** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-polls">Get Polls</a>

<h3 id="gets-a-list-of-polls-that-the-broadcaster-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that created the polls. This ID must match the user ID in the user access token.|
|id|query|[string]|false|A list of IDs that identify the polls to return. To specify more than one ID, include this parameter for each poll you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 20 IDs.  <br>  <br>Specify this parameter only if you want to filter the list that the request returns. The endpoint ignores duplicate IDs and those not owned by this broadcaster.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 20 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "ed961efd-8a3f-4cf5-a9d0-e616c590cd2a",
      "broadcaster_id": "55696719",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Heads or Tails?",
      "choices": [
        {
          "id": "4c123012-1351-4f33-84b7-43856e7a0f47",
          "title": "Heads",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        },
        {
          "id": "279087e3-54a7-467e-bcd0-c1393fcea4f0",
          "title": "Tails",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": false,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": false,
      "channel_points_per_vote": 0,
      "status": "ACTIVE",
      "duration": 1800,
      "started_at": "2021-03-19T06:08:33.871278372Z"
    }
  ],
  "pagination": {}
}
```

<h3 id="gets-a-list-of-polls-that-the-broadcaster-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster's polls.|[GetPollsResponse](#schemagetpollsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token is missing the **channel:read:polls** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header must match the client ID specified in the access token.|None|
|404|Not Found|* None of the IDs in the _id_ query parameters were found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:polls channel:manage:polls )
</aside>

## Creates a poll that viewers in the broadcaster’s channel can vote on.

<a id="opIdcreate-poll"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/polls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "141981764",
    "title": "Heads or Tails?",
    "choices": [
      {
        "title": "Heads"
      },
      {
        "title": "Tails"
      }
    ],
    "channel_points_voting_enabled": true,
    "channel_points_per_vote": 100,
    "duration": 1800
  }'
```

`POST /polls`

Creates a poll that viewers in the broadcaster’s channel can vote on.

The poll begins as soon as it’s created. You may run only one poll at a time.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-poll">Create Poll</a>

> Body parameter

```json
{
  "broadcaster_id": "141981764",
  "title": "Heads or Tails?",
  "choices": [
    {
      "title": "Heads"
    },
    {
      "title": "Tails"
    }
  ],
  "channel_points_voting_enabled": true,
  "channel_points_per_vote": 100,
  "duration": 1800
}
```

<h3 id="creates-a-poll-that-viewers-in-the-broadcasters-channel-can-vote-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePollBody](#schemacreatepollbody)|false|none|
|» broadcaster_id|body|string|true|The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token.|
|» title|body|string|true|The question that viewers will vote on. For example, _What game should I play next?_ The question may contain a maximum of 60 characters.|
|» choices|body|[object]|true|A list of choices that viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 5 choices.|
|» » title|body|string|true|One of the choices the viewer may select. The choice may contain a maximum of 25 characters.|
|» duration|body|integer(int32)|true|The length of time (in seconds) that the poll will run for. The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes).|
|» channel_points_voting_enabled|body|boolean|false|A Boolean value that indicates whether viewers may cast additional votes using Channel Points. If **true**, the viewer may cast more than one vote but each additional vote costs the number of Channel Points specified in `channel_points_per_vote`. The default is **false** (viewers may cast only one vote). For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).|
|» channel_points_per_vote|body|integer(int32)|false|The number of points that the viewer must spend to cast one additional vote. The minimum is 1 and the maximum is 1000000\. Set only if `ChannelPointsVotingEnabled` is **true**.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "ed961efd-8a3f-4cf5-a9d0-e616c590cd2a",
      "broadcaster_id": "141981764",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Heads or Tails?",
      "choices": [
        {
          "id": "4c123012-1351-4f33-84b7-43856e7a0f47",
          "title": "Heads",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        },
        {
          "id": "279087e3-54a7-467e-bcd0-c1393fcea4f0",
          "title": "Tails",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": false,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": true,
      "channel_points_per_vote": 100,
      "status": "ACTIVE",
      "duration": 1800,
      "started_at": "2021-03-19T06:08:33.871278372Z"
    }
  ]
}
```

<h3 id="creates-a-poll-that-viewers-in-the-broadcasters-channel-can-vote-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the poll.|[CreatePollResponse](#schemacreatepollresponse)|
|400|Bad Request|* The `broadcaster_id` field is required.<br>* The `title` field is required.<br>* The `choices` field is required.<br>* The `duration` field is required.<br>* The value in `duration` is outside the allowed range of values.<br>* The value in `channel_points_per_vote` is outside the allowed range of values.<br>* The value in `bits_per_vote` is outside the allowed range of values.<br>* The poll's `title` is too long.<br>* The choice's `title` is too long.<br>* The choice's `title` failed AutoMod checks.<br>* The number of choices in the poll may not be less than 2 or greater that 5.<br>* The broadcaster already has a poll that's running; you may not create another poll until the current poll completes.|None|
|401|Unauthorized|* The ID in `broadcaster_id` must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token is missing the **channel:manage:polls** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:polls )
</aside>

## End an active poll.

<a id="opIdend-poll"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/polls \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "141981764",
    "id": "ed961efd-8a3f-4cf5-a9d0-e616c590cd2a",
    "status": "TERMINATED"
  }'
```

`PATCH /polls`

Ends an active poll. You have the option to end it or end it and archive it.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:polls** scope.

<a href="https://dev.twitch.tv/docs/api/reference#end-poll">End Poll</a>

> Body parameter

```json
{
  "broadcaster_id": "141981764",
  "id": "ed961efd-8a3f-4cf5-a9d0-e616c590cd2a",
  "status": "TERMINATED"
}
```

<h3 id="end-an-active-poll-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EndPollBody](#schemaendpollbody)|false|none|
|» broadcaster_id|body|string|true|The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token.|
|» id|body|string|true|The ID of the poll to update.|
|» status|body|string|true|The status to set the poll to. Possible case-sensitive values are:  <br>  <br>* TERMINATED — Ends the poll before the poll is scheduled to end. The poll remains publicly visible.<br>* ARCHIVED — Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|TERMINATED|
|» status|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "ed961efd-8a3f-4cf5-a9d0-e616c590cd2a",
      "broadcaster_id": "141981764",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Heads or Tails?",
      "choices": [
        {
          "id": "4c123012-1351-4f33-84b7-43856e7a0f47",
          "title": "Heads",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        },
        {
          "id": "279087e3-54a7-467e-bcd0-c1393fcea4f0",
          "title": "Tails",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": false,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": true,
      "channel_points_per_vote": 100,
      "status": "TERMINATED",
      "duration": 1800,
      "started_at": "2021-03-19T06:08:33.871278372Z",
      "ended_at": "2021-03-19T06:11:26.746889614Z"
    }
  ]
}
```

<h3 id="end-an-active-poll-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully ended the poll.|[EndPollResponse](#schemaendpollresponse)|
|400|Bad Request|* The `broadcaster_id` field is required.<br>* The `id` field is required.<br>* The `status` field is required.<br>* The value in the `status` field is not valid.<br>* The poll must be active to terminate or archive it.|None|
|401|Unauthorized|* The ID in `broadcaster_id` must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:polls** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header must match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:polls )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-predictions">Predictions</h1>

## Gets a list of Channel Points Predictions that the broadcaster created.

<a id="opIdget-predictions"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/predictions?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /predictions`

Gets a list of Channel Points Predictions that the broadcaster created.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:predictions** or **channel:manage:predictions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-predictions">Get Predictions</a>

<h3 id="gets-a-list-of-channel-points-predictions-that-the-broadcaster-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose predictions you want to get. This ID must match the user ID in the user access token.|
|id|query|[string]|false|The ID of the prediction to get. To specify more than one ID, include this parameter for each prediction you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 25 IDs. The endpoint ignores duplicate IDs and those not owned by the broadcaster.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "d6676d5c-c86e-44d2-bfc4-100fb48f0656",
      "broadcaster_id": "55696719",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Will there be any leaks today?",
      "winning_outcome_id": null,
      "outcomes": [
        {
          "id": "021e9234-5893-49b4-982e-cfe9a0aaddd9",
          "title": "Yes",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "BLUE"
        },
        {
          "id": "ded84c26-13cb-4b48-8cb5-5bae3ec3a66e",
          "title": "No",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "PINK"
        }
      ],
      "prediction_window": 600,
      "status": "ACTIVE",
      "created_at": "2021-04-28T16:03:06.320848689Z",
      "ended_at": null,
      "locked_at": null
    }
  ],
  "pagination": {}
}
```

<h3 id="gets-a-list-of-channel-points-predictions-that-the-broadcaster-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of predictions.|[GetPredictionsResponse](#schemagetpredictionsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:predictions** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:predictions channel:manage:predictions )
</aside>

## Create a Channel Points Prediction.

<a id="opIdcreate-prediction"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/predictions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "141981764",
    "title": "Any leeks in the stream?",
    "outcomes": [
      {
        "title": "Yes, give it time."
      },
      {
        "title": "Definitely not."
      }
    ],
    "prediction_window": 120
  }'
```

`POST /predictions`

Creates a Channel Points Prediction.

With a Channel Points Prediction, the broadcaster poses a question and viewers try to predict the outcome. The prediction runs as soon as it’s created. The broadcaster may run only one prediction at a time.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-prediction">Create Prediction</a>

> Body parameter

```json
{
  "broadcaster_id": "141981764",
  "title": "Any leeks in the stream?",
  "outcomes": [
    {
      "title": "Yes, give it time."
    },
    {
      "title": "Definitely not."
    }
  ],
  "prediction_window": 120
}
```

<h3 id="create-a-channel-points-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePredictionBody](#schemacreatepredictionbody)|false|none|
|» broadcaster_id|body|string|true|The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token.|
|» title|body|string|true|The question that the broadcaster is asking. For example, _Will I finish this entire pizza?_ The title is limited to a maximum of 45 characters.|
|» outcomes|body|[object]|true|The list of possible outcomes that the viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 10 choices.|
|» » title|body|string|true|The text of one of the outcomes that the viewer may select. The title is limited to a maximum of 25 characters.|
|» prediction_window|body|integer(int32)|true|The length of time (in seconds) that the prediction will run for. The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "bc637af0-7766-4525-9308-4112f4cbf178",
      "broadcaster_id": "141981764",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Any leeks in the stream?",
      "winning_outcome_id": null,
      "outcomes": [
        {
          "id": "73085848-a94d-4040-9d21-2cb7a89374b7",
          "title": "Yes, give it time.",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "BLUE"
        },
        {
          "id": "906b70ba-1f12-47ea-9e95-e5f93d20e9cc",
          "title": "Definitely not.",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "PINK"
        }
      ],
      "prediction_window": 120,
      "status": "ACTIVE",
      "created_at": "2021-04-28T17:11:22.595914172Z",
      "ended_at": null,
      "locked_at": null
    }
  ]
}
```

<h3 id="create-a-channel-points-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the Channel Points Prediction.|[CreatePredictionResponse](#schemacreatepredictionresponse)|
|400|Bad Request|* The `broadcaster_id` field is required.<br>* The `title` field is required.<br>* The `outcomes` field is required.<br>* The `prediction_window` field is required.<br>* The value in `prediction_window` is outside the allowed range of values.<br>* The prediction's `title` is too long.<br>* The outcome's `title` is too long.<br>* The outcome's `title` failed AutoMod checks.<br>* There must be 2 outcomes in the prediction.<br>* The broadcaster already has a prediction that's running; you may not create another prediction until the current prediction is resolved or canceled.|None|
|401|Unauthorized|* The ID in `broadcaster_id` must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:predictions** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|429|Too Many Requests||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:predictions )
</aside>

## Locks, resolves, or cancels a Channel Points Prediction.

<a id="opIdend-prediction"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/predictions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "broadcaster_id": "string",
    "id": "string",
    "status": "RESOLVED",
    "winning_outcome_id": "string"
  }'
```

`PATCH /predictions`

Locks, resolves, or cancels a Channel Points Prediction.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:predictions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#end-prediction">End Prediction</a>

> Body parameter

```json
{
  "broadcaster_id": "string",
  "id": "string",
  "status": "RESOLVED",
  "winning_outcome_id": "string"
}
```

<h3 id="locks-resolves-or-cancels-a-channel-points-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EndPredictionBody](#schemaendpredictionbody)|false|none|
|» broadcaster_id|body|string|true|The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token.|
|» id|body|string|true|The ID of the prediction to update.|
|» status|body|string|true|The status to set the prediction to. Possible case-sensitive values are:  <br>  <br>* RESOLVED — The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome.<br>* CANCELED — The broadcaster is canceling the prediction and sending refunds to the participants.<br>* LOCKED — The broadcaster is locking the prediction, which means viewers may no longer make predictions.<br>  <br>The broadcaster can update an active prediction to LOCKED, RESOLVED, or CANCELED; and update a locked prediction to RESOLVED or CANCELED.  <br>  <br>The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction. If not, Twitch sets the status to CANCELED and returns the points.|
|» winning_outcome_id|body|string|false|The ID of the winning outcome. You must set this parameter if you set `status` to RESOLVED.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|RESOLVED|
|» status|CANCELED|
|» status|LOCKED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "bc637af0-7766-4525-9308-4112f4cbf178",
      "broadcaster_id": "141981764",
      "broadcaster_name": "TwitchDev",
      "broadcaster_login": "twitchdev",
      "title": "Will we win all the games?",
      "winning_outcome_id": "73085848-a94d-4040-9d21-2cb7a89374b7",
      "outcomes": [
        {
          "id": "73085848-a94d-4040-9d21-2cb7a89374b7",
          "title": "yes",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "BLUE"
        },
        {
          "id": "86010b2e-9764-4136-9359-fd1c9c5a8033",
          "title": "no",
          "users": 0,
          "channel_points": 0,
          "top_predictors": null,
          "color": "PINK"
        }
      ],
      "prediction_window": 120,
      "status": "RESOLVED",
      "created_at": "2021-04-28T21:48:19.480371331Z",
      "ended_at": "2021-04-28T21:54:24.026833954Z",
      "locked_at": "2021-04-28T21:48:34.636685705Z"
    }
  ]
}
```

<h3 id="locks-resolves-or-cancels-a-channel-points-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully ended the prediction.|[EndPredictionResponse](#schemaendpredictionresponse)|
|400|Bad Request|* The `broadcaster_id` field is required.<br>* The `id` field is required.<br>* The `status` field is required.<br>* The `winning_outcome_id` field is required if `status` is RESOLVED.<br>* The value in the `status` field is not valid.<br>* To update the prediction's status to RESOLVED or CANCELED, its current status must be ACTIVE or LOCKED.<br>* To update the prediction's status to LOCKED, its current status must be ACTIVE.|None|
|401|Unauthorized|* The ID in `broadcaster_id` must match the user ID in the OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:predictions** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The prediction in the `id` field was not found.<br>* The outcome in the `winning_outcome_id` field was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:predictions )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-raids">Raids</h1>

## Raid another channel by sending the broadcaster’s viewers to the targeted channel.

<a id="opIdstart-a-raid"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/raids \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /raids`

Raid another channel by sending the broadcaster’s viewers to the targeted channel.

When you call the API from a chat bot or extension, the Twitch UX pops up a window at the top of the chat room that identifies the number of viewers in the raid. The raid occurs when the broadcaster clicks **Raid Now** or after the 90-second countdown expires.

To determine whether the raid successfully occurred, you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event. For more information, see [Get notified when a raid begins](https://dev.twitch.tv/docs/api/raids#get-notified-when-a-raid-begins).

To cancel a pending raid, use the [Cancel a raid](https://dev.twitch.tv/docs/api/reference#cancel-a-raid) endpoint.

**Rate Limit**: The limit is 10 requests within a 10-minute window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.

<a href="https://dev.twitch.tv/docs/api/reference#start-a-raid">Start a raid</a>

<h3 id="raid-another-channel-by-sending-the-broadcasters-viewers-to-the-targeted-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_broadcaster_id|query|string|false|The ID of the broadcaster that’s sending the raiding party. This ID must match the user ID in the user access token.|
|to_broadcaster_id|query|string|false|The ID of the broadcaster to raid.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2022-02-18T07:20:50.52Z",
      "is_mature": false
    }
  ]
}
```

<h3 id="raid-another-channel-by-sending-the-broadcasters-viewers-to-the-targeted-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully requested to start a raid. To determine whether the raid successfully occurred (that is, the broadcaster clicked **Raid Now** or the countdown expired), you must subscribe to the [Channel Raid](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#channelraid) event.|[StartARaidResponse](#schemastartaraidresponse)|
|400|Bad Request|* The raiding broadcaster is blocked from the targeted channel.<br>* The targeted channel doesn't accept raids from this broadcaster.<br>* There are too many viewers in the raiding party.<br>* The IDs in _from\_broadcaster\_id_ and _to\_broadcaster\_id_ cannot be the same ID.<br>* The ID in the _from\_broadcaster\_id_ query parameter is not valid.<br>* The ID in the _to\_broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in _from\_broadcaster\_id_ must match the user ID found in the request’s OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:raids** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The targeted channel was not found.|None|
|409|Conflict|* The broadcaster is already in the process of raiding another channel.|None|
|429|Too Many Requests|* The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:raids )
</aside>

## Cancel a pending raid.

<a id="opIdcancel-a-raid"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/raids?broadcaster_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /raids`

Cancel a pending raid.

You can cancel a raid at any point up until the broadcaster clicks **Raid Now** in the Twitch UX or the 90-second countdown expires.

**Rate Limit**: The limit is 10 requests within a 10-minute window.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:raids** scope.

<a href="https://dev.twitch.tv/docs/api/reference#cancel-a-raid">Cancel a raid</a>

<h3 id="cancel-a-pending-raid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that initiated the raid. This ID must match the user ID in the user access token.|

<h3 id="cancel-a-pending-raid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The pending raid was successfully canceled.<br><br>__Examples__<br><br>_Request:_<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/raids?broadcaster_id=12345678' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t'<br>```|None|
|400|Bad Request|* The ID in the _broadcaster\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:raids** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The broadcaster doesn't have a pending raid to cancel.|None|
|429|Too Many Requests|* The broadcaster exceeded the number of raid requests that they may make. The limit is 10 requests within a 10-minute window.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:raids )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-schedule">Schedule</h1>

## Gets the broadcaster’s streaming schedule.

<a id="opIdget-channel-stream-schedule"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /schedule`

Gets the broadcaster’s streaming schedule. You can get the entire schedule or specific segments of the schedule. [Learn More](https://help.twitch.tv/s/article/channel-page-setup#Schedule)

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-stream-schedule">Get Channel Stream Schedule</a>

<h3 id="gets-the-broadcasters-streaming-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the streaming schedule you want to get.|
|id|query|[string]|false|The ID of the scheduled segment to return. To specify more than one segment, include the ID of each segment you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs.|
|start_time|query|string(date-time)|false|The UTC date and time that identifies when in the broadcaster’s schedule to start returning segments. If not specified, the request returns segments starting after the current UTC date and time. Specify the date and time in RFC3339 format (for example, `2022-09-01T00:00:00Z`).|
|utc_offset|query|string|false|Not supported.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 25 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": {
    "segments": [
      {
        "id": "eyJzZWdtZW50SUQiOiJlNGFjYzcyNC0zNzFmLTQwMmMtODFjYS0yM2FkYTc5NzU5ZDQiLCJpc29ZZWFyIjoyMDIxLCJpc29XZWVrIjoyNn0=",
        "start_time": "2021-07-01T18:00:00Z",
        "end_time": "2021-07-01T19:00:00Z",
        "title": "TwitchDev Monthly Update // July 1, 2021",
        "canceled_until": null,
        "category": {
          "id": "509670",
          "name": "Science & Technology"
        },
        "is_recurring": false
      }
    ],
    "broadcaster_id": "141981764",
    "broadcaster_name": "TwitchDev",
    "broadcaster_login": "twitchdev",
    "vacation": null
  },
  "pagination": {}
}
```

<h3 id="gets-the-broadcasters-streaming-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s streaming schedule.|[GetChannelStreamScheduleResponse](#schemagetchannelstreamscheduleresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The ID in the _id_ query parameter is not valid.<br>* The format of the date and time in the _start\_time_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify a valid app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the access token.|None|
|403|Forbidden|* Only partners and affiliates may add non-recurring broadcast segments.|None|
|404|Not Found|* The broadcaster has not created a streaming schedule.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the broadcaster’s streaming schedule as an iCalendar.

<a id="opIdget-channel-icalendar"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule/icalendar?broadcaster_id=string'
```

`GET /schedule/icalendar`

Gets the broadcaster’s streaming schedule as an [iCalendar](https://datatracker.ietf.org/doc/html/rfc5545).

__Authorization:__

The Client-Id and Authorization headers are not required.

__Response Body:__

The response body contains the iCalendar data (see [RFC5545](https://datatracker.ietf.org/doc/html/rfc5545)).

The Content-Type response header is set to `text/calendar`.

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-icalendar">Get Channel iCalendar</a>

<h3 id="gets-the-broadcasters-streaming-schedule-as-an-icalendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the streaming schedule you want to get.|

> Example responses

> 200 Response

```text
BEGIN:VCALENDAR
PRODID:-//twitch.tv//StreamSchedule//1.0
VERSION:2.0
CALSCALE:GREGORIAN
REFRESH-INTERVAL;VALUE=DURATION:PT1H
NAME:TwitchDev
BEGIN:VEVENT
UID:e4acc724-371f-402c-81ca-23ada79759d4
DTSTAMP:20210323T040131Z
DTSTART;TZID=/America/New_York:20210701T140000
DTEND;TZID=/America/New_York:20210701T150000
SUMMARY:TwitchDev Monthly Update // July 1, 2021
DESCRIPTION:Science & Technology.
CATEGORIES:Science & Technology
END:VEVENT
END:VCALENDAR%
```

<h3 id="gets-the-broadcasters-streaming-schedule-as-an-icalendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s schedule as an iCalendar.|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the broadcaster’s schedule settings, such as scheduling a vacation.

<a id="opIdupdate-channel-stream-schedule"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule/settings?broadcaster_id=string' \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /schedule/settings`

Updates the broadcaster’s schedule settings, such as scheduling a vacation.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-channel-stream-schedule">Update Channel Stream Schedule</a>

<h3 id="updates-the-broadcasters-schedule-settings-such-as-scheduling-a-vacation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose schedule settings you want to update. The ID must match the user ID in the user access token.|
|is_vacation_enabled|query|boolean|false|A Boolean value that indicates whether the broadcaster has scheduled a vacation. Set to **true** to enable Vacation Mode and add vacation dates, or **false** to cancel a previously scheduled vacation.|
|vacation_start_time|query|string(date-time)|false|The UTC date and time of when the broadcaster’s vacation starts. Specify the date and time in RFC3339 format (for example, 2021-05-16T00:00:00Z). Required if _is\_vacation\_enabled_ is **true**.|
|vacation_end_time|query|string(date-time)|false|The UTC date and time of when the broadcaster’s vacation ends. Specify the date and time in RFC3339 format (for example, 2021-05-30T23:59:59Z). Required if _is\_vacation\_enabled_ is **true**.|
|timezone|query|string|false|The time zone that the broadcaster broadcasts from. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York). Required if _is\_vacation\_enabled_ is **true**.|

<h3 id="updates-the-broadcasters-schedule-settings-such-as-scheduling-a-vacation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the broadcaster’s schedule settings.<br><br>__Examples__<br><br>_Request:_<br><br>Schedules the broadcaster’s vacation.<br><br>```bash<br>curl -X PATCH 'https://api.twitch.tv/helix/schedule/settings?broadcaster_id=141981764&is_vacation_enabled=true&vacation_start_time=2021-05-16T00:00:00Z&vacation_end_time=2021-05-23T00:00:00Z&timezone=America/New_York' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The format of the string in _vacation\_start\_time_ is not valid.<br>* The format of the string in _vacation\_end\_time_ is not valid.<br>* The date in _vacation\_end\_time_ must be later than the date in _vacation\_start\_time_.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:schedule** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* The broadcaster's schedule was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:schedule )
</aside>

## Adds a single or recurring broadcast to the broadcaster’s streaming schedule.

<a id="opIdcreate-channel-stream-schedule-segment"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule/segment?broadcaster_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "start_time": "2021-07-01T18:00:00Z",
    "timezone": "America/New_York",
    "is_recurring": false,
    "duration": "60",
    "category_id": "509670",
    "title": "TwitchDev Monthly Update // July 1, 2021"
  }'
```

`POST /schedule/segment`

Adds a single or recurring broadcast to the broadcaster’s streaming schedule. For information about scheduling broadcasts, see [Stream Schedule](https://help.twitch.tv/s/article/channel-page-setup#Schedule).

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-channel-stream-schedule-segment">Create Channel Stream Schedule Segment</a>

> Body parameter

```json
{
  "start_time": "2021-07-01T18:00:00Z",
  "timezone": "America/New_York",
  "is_recurring": false,
  "duration": "60",
  "category_id": "509670",
  "title": "TwitchDev Monthly Update // July 1, 2021"
}
```

<h3 id="adds-a-single-or-recurring-broadcast-to-the-broadcasters-streaming-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the schedule to add the broadcast segment to. This ID must match the user ID in the user access token.|
|body|body|[CreateChannelStreamScheduleSegmentBody](#schemacreatechannelstreamschedulesegmentbody)|false|none|
|» start_time|body|string(date-time)|true|The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z).|
|» timezone|body|string|true|The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York).|
|» duration|body|string|true|The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).|
|» is_recurring|body|boolean|false|A Boolean value that determines whether the broadcast recurs weekly. Is **true** if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts.|
|» category_id|body|string|false|The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.|
|» title|body|string|false|The broadcast’s title. The title may contain a maximum of 140 characters.|

> Example responses

> 200 Response

```json
{
  "data": {
    "segments": [
      {
        "id": "eyJzZWdtZW50SUQiOiJlNGFjYzcyNC0zNzFmLTQwMmMtODFjYS0yM2FkYTc5NzU5ZDQiLCJpc29ZZWFyIjoyMDIxLCJpc29XZWVrIjoyNn0=",
        "start_time": "2021-07-01T18:00:00Z",
        "end_time": "2021-07-01T19:00:00Z",
        "title": "TwitchDev Monthly Update // July 1, 2021",
        "canceled_until": null,
        "category": {
          "id": "509670",
          "name": "Science & Technology"
        },
        "is_recurring": false
      }
    ],
    "broadcaster_id": "141981764",
    "broadcaster_name": "TwitchDev",
    "broadcaster_login": "twitchdev",
    "vacation": null
  }
}
```

<h3 id="adds-a-single-or-recurring-broadcast-to-the-broadcasters-streaming-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added the broadcast segment.|[CreateChannelStreamScheduleSegmentResponse](#schemacreatechannelstreamschedulesegmentresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The format of the date and time in the `start_time` field is not valid.<br>* The value in the `timezone` field is not valid.<br>* The value in the `duration` field is not valid.<br>* The ID in the `category_id` field is not valid.<br>* The string in the `title` field is too long.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:schedule** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|403|Forbidden|* Only partners and affiliates may add non-recurring broadcast segments.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:schedule )
</aside>

## Deletes a broadcast from the broadcaster’s streaming schedule.

<a id="opIddelete-channel-stream-schedule-segment"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule/segment?broadcaster_id=string&id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /schedule/segment`

Removes a broadcast segment from the broadcaster’s streaming schedule.

**NOTE**: For recurring segments, removing a segment removes all segments in the recurring schedule.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.

<a href="https://dev.twitch.tv/docs/api/reference#delete-channel-stream-schedule-segment">Delete Channel Stream Schedule Segment</a>

<h3 id="deletes-a-broadcast-from-the-broadcasters-streaming-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the streaming schedule. This ID must match the user ID in the user access token.|
|id|query|string|true|The ID of the broadcast segment to remove.|

<h3 id="deletes-a-broadcast-from-the-broadcasters-streaming-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the broadcast segment.<br><br>__Examples__<br><br>_Request:_<br><br>Removes the segment from the broadcaster’s streaming schedule.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/schedule/segment?broadcaster_id=141981764&id=eyJzZWdtZW50SUQiOiI4Y2EwN2E2NC0xYTZkLTRjYWItYWE5Ni0xNjIyYzNjYWUzZDkiLCJpc29ZZWFyIjoyMDIxLCJpc29XZWVrIjoyMX0=' \<br>-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \<br>-H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'<br>```|None|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _id_ query parameter is required.<br>* The ID in the _id_ query parameter is not valid.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:schedule** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the OAuth token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:schedule )
</aside>

## Updates a scheduled broadcast segment.

<a id="opIdupdate-channel-stream-schedule-segment"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/schedule/segment?broadcaster_id=string&id=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "duration": "120"
  }'
```

`PATCH /schedule/segment`

Updates a scheduled broadcast segment.

For recurring segments, updating a segment’s title, category, duration, and timezone, changes all segments in the recurring schedule, not just the specified segment.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:schedule** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-channel-stream-schedule-segment">Update Channel Stream Schedule Segment</a>

> Body parameter

```json
{
  "duration": "120"
}
```

<h3 id="updates-a-scheduled-broadcast-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster who owns the broadcast segment to update. This ID must match the user ID in the user access token.|
|id|query|string|true|The ID of the broadcast segment to update.|
|body|body|[UpdateChannelStreamScheduleSegmentBody](#schemaupdatechannelstreamschedulesegmentbody)|false|none|
|» start_time|body|string(date-time)|false|The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z).  <br>  <br>**NOTE**: Only partners and affiliates may update a broadcast’s start time and only for non-recurring segments.|
|» duration|body|string|false|The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).|
|» category_id|body|string|false|The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.|
|» title|body|string|false|The broadcast’s title. The title may contain a maximum of 140 characters.|
|» is_canceled|body|boolean|false|A Boolean value that indicates whether the broadcast is canceled. Set to **true** to cancel the segment.  <br>  <br>**NOTE**: For recurring segments, the API cancels the first segment after the current UTC date and time and not the specified segment (unless the specified segment is the next segment after the current UTC date and time).|
|» timezone|body|string|false|The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York).|

> Example responses

> 200 Response

```json
{
  "data": {
    "segments": [
      {
        "id": "eyJzZWdtZW50SUQiOiJlNGFjYzcyNC0zNzFmLTQwMmMtODFjYS0yM2FkYTc5NzU5ZDQiLCJpc29ZZWFyIjoyMDIxLCJpc29XZWVrIjoyNn0=",
        "start_time": "2021-07-01T18:00:00Z",
        "end_time": "2021-07-01T20:00:00Z",
        "title": "TwitchDev Monthly Update // July 1, 2021",
        "canceled_until": null,
        "category": {
          "id": "509670",
          "name": "Science & Technology"
        },
        "is_recurring": false
      }
    ],
    "broadcaster_id": "141981764",
    "broadcaster_name": "TwitchDev",
    "broadcaster_login": "twitchdev",
    "vacation": null
  }
}
```

<h3 id="updates-a-scheduled-broadcast-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the broadcast segment.|[UpdateChannelStreamScheduleSegmentResponse](#schemaupdatechannelstreamschedulesegmentresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The ID in the _broadcaster\_id_ query parameter is not valid.<br>* The _id_ query parameter is required.<br>* The ID in the _id_ query parameter is not valid.<br>* The format of the date and time in the `start_time` field is not valid.<br>* The value in the `timezone` field is not valid.<br>* The value in the `duration` field is not valid.<br>* The ID in the `category_id` field is not valid.<br>* The string in the `title` field is too long.|None|
|401|Unauthorized|* The ID in the _broadcaster\_id_ query parameter must match the user ID in the user access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:schedule** scope.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the client ID in the access token.|None|
|404|Not Found|* The specified broadcast segment was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:schedule )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-search">Search</h1>

## Gets the games or categories that match the specified query.

<a id="opIdsearch-categories"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/search/categories?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/categories`

Gets the games or categories that match the specified query.

To match, the category’s name must contain all parts of the query string. For example, if the query string is 42, the response includes any category name that contains 42 in the title. If the query string is a phrase like _love computer_, the response includes any category name that contains the words love and computer anywhere in the name. The comparison is case insensitive.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#search-categories">Search Categories</a>

<h3 id="gets-the-games-or-categories-that-match-the-specified-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The URI-encoded search string. For example, encode _#archery_ as `%23archery` and search strings like _angel of death_ as `angel%20of%20death`.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "33214",
      "name": "Fortnite",
      "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/33214-52x72.jpg"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7IkN"
  }
}
```

<h3 id="gets-the-games-or-categories-that-match-the-specified-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of category names that matched the specified query string.|[SearchCategoriesResponse](#schemasearchcategoriesresponse)|
|400|Bad Request|* The _query_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the channels that match the specified query and have streamed content within the past 6 months.

<a id="opIdsearch-channels"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/search/channels?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/channels`

Gets the channels that match the specified query and have streamed content within the past 6 months.

The fields that the API uses for comparison depends on the value that the _live\_only_ query parameter is set to. If _live\_only_ is **false**, the API matches on the broadcaster’s login name. However, if _live\_only_ is **true**, the API matches on the broadcaster’s name and category name.

To match, the beginning of the broadcaster’s name or category must match the query string. The comparison is case insensitive. If the query string is angel\_of\_death, it matches all names that begin with angel\_of\_death. However, if the query string is a phrase like _angel of death_, it matches to names starting with angelofdeath or names starting with angel\_of\_death.

By default, the results include both live and offline channels. To get only live channels set the _live\_only_ query parameter to **true**.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#search-channels">Search Channels</a>

<h3 id="gets-the-channels-that-match-the-specified-query-and-have-streamed-content-within-the-past-6-months-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The URI-encoded search string. For example, encode search strings like _angel of death_ as `angel%20of%20death`.|
|live_only|query|boolean|false|A Boolean value that determines whether the response includes only channels that are currently streaming live. Set to **true** to get only channels that are streaming live; otherwise, **false** to get live and offline channels. The default is **false**.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_language": "en",
      "broadcaster_login": "twitchdev",
      "display_name": "TwitchDev",
      "game_id": "1469308723",
      "game_name": "Software and Game Development",
      "id": "141981764",
      "is_live": false,
      "tag_ids": [],
      "tags": [
        "WebDevelopment",
        "GameDevelopment",
        "SoftwareDevelopment",
        "English"
      ],
      "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-300x300.png",
      "title": "Standard Output",
      "started_at": ""
    }
  ],
  "pagination": {
    "cursor": "Mg=="
  }
}
```

<h3 id="gets-the-channels-that-match-the-specified-query-and-have-streamed-content-within-the-past-6-months-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of category names that matched the specified query string.|[SearchChannelsResponse](#schemasearchchannelsresponse)|
|400|Bad Request|* The _query_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-streams">Streams</h1>

## Gets the channel’s stream key.

<a id="opIdget-stream-key"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/streams/key?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /streams/key`

Gets the channel’s stream key.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:stream\_key** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-stream-key">Get Stream Key</a>

<h3 id="gets-the-channels-stream-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster that owns the channel. The ID must match the user ID in the access token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "stream_key": "live_44322889_a34ub37c8ajv98a0"
    }
  ]
}
```

<h3 id="gets-the-channels-stream-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the stream’s key.|[GetStreamKeyResponse](#schemagetstreamkeyresponse)|
|400|Bad Request|* The _broadcaster\_id_ field is required.<br>* The ID in the _broadcaster\_id_ field is not valid.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:stream\_key** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header must match the client ID specified in the access token.|None|
|403|Forbidden|The user must complete additional steps in order to stream. Present the user with the returned error message.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:stream_key )
</aside>

## Gets a list of all streams.

<a id="opIdget-streams"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/streams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /streams`

Gets a list of all streams. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-streams">Get Streams</a>

<h3 id="gets-a-list-of-all-streams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|[string]|false|A user ID used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 IDs. To specify multiple IDs, include the _user\_id_ parameter for each user. For example, `&user_id=1234&user_id=5678`.|
|user_login|query|[string]|false|A user login name used to filter the list of streams. Returns only the streams of those users that are broadcasting. You may specify a maximum of 100 login names. To specify multiple names, include the _user\_login_ parameter for each user. For example, `&user_login=foo&user_login=bar`.|
|game_id|query|[string]|false|A game (category) ID used to filter the list of streams. Returns only the streams that are broadcasting the game (category). You may specify a maximum of 100 IDs. To specify multiple IDs, include the _game\_id_ parameter for each game. For example, `&game_id=9876&game_id=5432`.|
|type|query|string|false|The type of stream to filter the list of streams by. Possible values are:  <br>  <br>* all<br>* live<br>  <br>The default is _all_.|
|language|query|[string]|false|A language code used to filter the list of streams. Returns only streams that broadcast in the specified language. Specify the language using an ISO 639-1 two-letter language code or _other_ if the broadcast uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang).  <br>  <br>You may specify a maximum of 100 language codes. To specify multiple languages, include the _language_ parameter for each language. For example, `&language=de&language=fr`.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|live|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "123456789",
      "user_id": "98765",
      "user_login": "sandysanderman",
      "user_name": "SandySanderman",
      "game_id": "494131",
      "game_name": "Little Nightmares",
      "type": "live",
      "title": "hablamos y le damos a Little Nightmares 1",
      "tags": [
        "Español"
      ],
      "viewer_count": 78365,
      "started_at": "2021-03-10T15:04:21Z",
      "language": "es",
      "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_auronplay-{width}x{height}.jpg",
      "tag_ids": [],
      "is_mature": false
    }
  ],
  "pagination": {
    "cursor": "eyJiIjp7IkN1cnNvciI6ImV5SnpJam8zT0RNMk5TNDBORFF4TlRjMU1UY3hOU3dpWkNJNlptRnNjMlVzSW5RaU9uUnlkV1Y5In0sImEiOnsiQ3Vyc29yIjoiZXlKeklqb3hOVGs0TkM0MU56RXhNekExTVRZNU1ESXNJbVFpT21aaGJITmxMQ0owSWpwMGNuVmxmUT09In19"
  }
}
```

<h3 id="gets-a-list-of-all-streams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of streams.|[GetStreamsResponse](#schemagetstreamsresponse)|
|400|Bad Request|* The value in the _type_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the list of broadcasters that the user follows and that are streaming live.

<a id="opIdget-followed-streams"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/streams/followed?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /streams/followed`

Gets the list of broadcasters that the user follows and that are streaming live.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:follows** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-followed-streams">Get Followed Streams</a>

<h3 id="gets-the-list-of-broadcasters-that-the-user-follows-and-that-are-streaming-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|true|The ID of the user whose list of followed streams you want to get. This ID must match the user ID in the access token.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 100.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "42170724654",
      "user_id": "132954738",
      "user_login": "aws",
      "user_name": "AWS",
      "game_id": "417752",
      "game_name": "Talk Shows & Podcasts",
      "type": "live",
      "title": "AWS Howdy Partner! Y'all welcome ExtraHop to the show!",
      "viewer_count": 20,
      "started_at": "2021-03-31T20:57:26Z",
      "language": "en",
      "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_aws-{width}x{height}.jpg",
      "tag_ids": [],
      "tags": [
        "English"
      ]
    }
  ],
  "pagination": {
    "cursor": "eyJiIjp7IkN1cnNvciI6ImV5SnpJam8zT0RNMk5TNDBORFF4TlRjMU1UY3hOU3dpWkNJNlptRnNjMlVzSW5RaU9uUnlkV1Y5In0sImEiOnsiQ3Vyc29yIjoiZXlKeklqb3hOVGs0TkM0MU56RXhNekExTVRZNU1ESXNJbVFpT21aaGJITmxMQ0owSWpwMGNuVmxmUT09In19"
  }
}
```

<h3 id="gets-the-list-of-broadcasters-that-the-user-follows-and-that-are-streaming-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of broadcasters that the user follows and that are streaming live.|[GetFollowedStreamsResponse](#schemagetfollowedstreamsresponse)|
|400|Bad Request|* The _user\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _user\_id_ must match the user ID found in the access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:follows** scope.<br>* The OAuth token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:follows )
</aside>

## Gets a list of markers from the user’s most recent stream or from the specified VOD/video.

<a id="opIdget-stream-markers"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/streams/markers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /streams/markers`

Gets a list of markers from the user’s most recent stream or from the specified VOD/video. A marker is an arbitrary point in a live stream that the broadcaster or editor marked, so they can return to that spot later to create video highlights. For more information on these features, see [Creating Highlights and Stream Markers](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers).

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **channel:manage:broadcast** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-stream-markers">Get Stream Markers</a>

<h3 id="gets-a-list-of-markers-from-the-users-most-recent-stream-or-from-the-specified-vodvideo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|false|A user ID. The request returns the markers from this user’s most recent video. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors.  <br>  <br>This parameter and the _video\_id_ query parameter are mutually exclusive.|
|video_id|query|string|false|A video on demand (VOD)/video ID. The request returns the markers from this VOD/video. The user in the access token must own the video or the user must be one of the broadcaster’s editors.  <br>  <br>This parameter and the _user\_id_ query parameter are mutually exclusive.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "123",
      "user_name": "TwitchName",
      "user_login": "twitchname",
      "videos": [
        {
          "video_id": "456",
          "markers": [
            {
              "id": "106b8d6243a4f883d25ad75e6cdffdc4",
              "created_at": "2018-08-20T20:10:03Z",
              "description": "hello, this is a marker!",
              "position_seconds": 244,
              "URL": "https://twitch.tv/twitchname/manager/highlighter/456?t=0h4m06s"
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjoiMjk1MjA0Mzk3OjI1Mzpib29rbWFyazoxMDZiOGQ1Y"
  }
}
```

<h3 id="gets-a-list-of-markers-from-the-users-most-recent-stream-or-from-the-specified-vodvideo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of markers.|[GetStreamMarkersResponse](#schemagetstreammarkersresponse)|
|400|Bad Request|* The request must specify either the _user\_id_ or _video\_id_ query parameter, but not both.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:broadcast** or **channel:manage:broadcast** scope.<br>* The access token is not valid.<br>* The Client ID specified in the Client-Id header does not match the Client ID specified in the access token.|None|
|403|Forbidden|* The user in the access token is not authorized to get the video's markers. The user in the access token must own the video or be one of the broadcaster's editors.|None|
|404|Not Found|* The user specified in the _user\_id_ query parameter doesn't have videos.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:broadcast channel:manage:broadcast )
</aside>

## Adds a marker to a live stream.

<a id="opIdcreate-stream-marker"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/streams/markers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": "123",
    "description": "hello, this is a marker!"
  }'
```

`POST /streams/markers`

Adds a marker to a live stream. A marker is an arbitrary point in a live stream that the broadcaster or editor wants to mark, so they can return to that spot later to create video highlights. For more information on these features, see [Creating Highlights and Stream Markers](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers).

You may not add markers:

* If the stream is not live.
* If the stream has not enabled video on demand (VOD).
* If the stream is a rerun of a past broadcast.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:broadcast** scope.

<a href="https://dev.twitch.tv/docs/api/reference#create-stream-marker">Create Stream Marker</a>

> Body parameter

```json
{
  "user_id": "123",
  "description": "hello, this is a marker!"
}
```

<h3 id="adds-a-marker-to-a-live-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateStreamMarkerBody](#schemacreatestreammarkerbody)|false|none|
|» user_id|body|string|true|The ID of the broadcaster that’s streaming content. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors.|
|» description|body|string|false|A short description of the marker to help the user remember why they marked the location. The maximum length of the description is 140 characters.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 123,
      "created_at": "2018-08-20T20:10:03Z",
      "description": "hello, this is a marker!",
      "position_seconds": 244
    }
  ]
}
```

<h3 id="adds-a-marker-to-a-live-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully created the marker.|[CreateStreamMarkerResponse](#schemacreatestreammarkerresponse)|
|400|Bad Request|* The `user_id` field is required.<br>* The length of the string in the `description` field is too long.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:broadcast** scope.<br>* The access token is not valid.<br>* The Client ID specified in the Client-Id header does not match the Client ID specified in the access token.|None|
|403|Forbidden|* The user in the access token is not authorized to create video markers for the user in the `user_id` field. The user in the access token must own the video or they must be one of the broadcaster's editors.|None|
|404|Not Found|* The user in the `user_id` field is not streaming live.<br>* The ID in the user\_id field is not valid.<br>* The user hasn't enabled video on demand (VOD).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:broadcast )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-subscriptions">Subscriptions</h1>

## Gets a list of users that subscribe to the specified broadcaster.

<a id="opIdget-broadcaster-subscriptions"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/subscriptions?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions`

Gets a list of users that subscribe to the specified broadcaster.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:read:subscriptions** scope.

A Twitch extensions may use an app access token if the broadcaster has granted the **channel:read:subscriptions** scope from within the Twitch Extensions manager.

<a href="https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions">Get Broadcaster Subscriptions</a>

<h3 id="gets-a-list-of-users-that-subscribe-to-the-specified-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The broadcaster’s ID. This ID must match the user ID in the access token.|
|user_id|query|[string]|false|Filters the list to include only the specified subscribers. To specify more than one subscriber, include this parameter for each subscriber. For example, `&user_id=1234&user_id=5678`. You may specify a maximum of 100 subscribers.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100 items per page. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. Do not specify if you set the _user\_id_ query parameter. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|before|query|string|false|The cursor used to get the previous page of results. Do not specify if you set the _user\_id_ query parameter. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "141981764",
      "broadcaster_login": "twitchdev",
      "broadcaster_name": "TwitchDev",
      "gifter_id": "12826",
      "gifter_login": "twitch",
      "gifter_name": "Twitch",
      "is_gift": true,
      "tier": "1000",
      "plan_name": "Channel Subscription (twitchdev)",
      "user_id": "527115020",
      "user_name": "twitchgaming",
      "user_login": "twitchgaming"
    }
  ],
  "pagination": {
    "cursor": "xxxx"
  },
  "total": 13,
  "points": 13
}
```

<h3 id="gets-a-list-of-users-that-subscribe-to-the-specified-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster’s list of subscribers.|[GetBroadcasterSubscriptionsResponse](#schemagetbroadcastersubscriptionsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID found in the request’s OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:read:subscriptions** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:read:subscriptions )
</aside>

## Checks whether the user subscribes to the broadcaster’s channel.

<a id="opIdcheck-user-subscription"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=string&user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /subscriptions/user`

Checks whether the user subscribes to the broadcaster’s channel.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:subscriptions** scope.

<a href="https://dev.twitch.tv/docs/api/reference#check-user-subscription">Check User Subscription</a>

<h3 id="checks-whether-the-user-subscribes-to-the-broadcasters-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of a partner or affiliate broadcaster.|
|user_id|query|string|true|The ID of the user that you’re checking to see whether they subscribe to the broadcaster in _broadcaster\_id_. This ID must match the user ID in the access Token.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "149747285",
      "broadcaster_name": "TwitchPresents",
      "broadcaster_login": "twitchpresents",
      "is_gift": false,
      "tier": "1000"
    }
  ]
}
```

<h3 id="checks-whether-the-user-subscribes-to-the-broadcasters-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user subscribes to the broadcaster.|[CheckUserSubscriptionResponse](#schemacheckusersubscriptionresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.<br>* The _user\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _user\_id_ must match the user ID found in the request’s OAuth token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:subscriptions** scope.<br>* The access token is not valid.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The user in _user\_id_ does not subscribe to the broadcaster in _broadcaster\_id_.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:subscriptions )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-tags">Tags</h1>

## Gets the list of all stream tags that Twitch defines. You can also filter the list by one or more tag IDs.

<a id="opIdget-all-stream-tags"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/tags/streams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tags/streams`

<aside class="warning">
This operation is deprecated
</aside>

**IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response.

Gets a list of all stream tags that Twitch defines. The broadcaster may apply any of these to their channel except automatic tags. For an online list of the possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags).

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-all-stream-tags">Get All Stream Tags</a>

<h3 id="gets-the-list-of-all-stream-tags-that-twitch-defines-you-can-also-filter-the-list-by-one-or-more-tag-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|query|[string]|false|The ID of the tag to get. Used to filter the list of tags. To specify more than one tag, include the _tag\_id_ parameter for each tag to get. For example, `tag_id=1234&tag_id=5678`. The maximum number of IDs you may specify is 100\. Ignores invalid IDs but not duplicate IDs.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "tag_id": "621fb5bf-5498-4d8f-b4ac-db4d40d401bf",
      "is_auto": false,
      "localization_names": {
        "bg-bg": "Изчистване на 1 кредит",
        "cs-cz": "1 čistý kredit",
        "da-dk": "1 credit klaret",
        "de-de": "Mit 1 Leben abschließen",
        "el-gr": "1 μόνο πίστωση",
        "en-us": "1 Credit Clear"
      },
      "localization_descriptions": {
        "bg-bg": "За потоци с акцент върху завършване на аркадна игра с монети, в която не се използва продължаване",
        "cs-cz": "Pro vysílání s důrazem na plnění mincových arkádových her bez použití pokračování.",
        "da-dk": "Til streams med vægt på at gennemføre et arkadespil uden at bruge continues",
        "de-de": "Für Streams mit dem Ziel, ein Coin-op-Arcade-Game mit nur einem Leben abzuschließen.",
        "el-gr": "Για μεταδόσεις με έμφαση στην ολοκλήρωση παλαιού τύπου ηλεκτρονικών παιχνιδιών που λειτουργούν με κέρμα, χωρίς να χρησιμοποιούν συνέχειες",
        "en-us": "For streams with an emphasis on completing a coin-op arcade game without using any continues"
      }
    }
  ],
  "pagination": {
    "cursor": "eyJiI..."
  }
}
```

<h3 id="gets-the-list-of-all-stream-tags-that-twitch-defines-you-can-also-filter-the-list-by-one-or-more-tag-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of tags.|[GetAllStreamTagsResponse](#schemagetallstreamtagsresponse)|
|400|Bad Request|* The _tag\_id_ query parameter is empty (for example, `&tag_id=`).<br>* The list of tag IDs is too long.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the list of stream tags that the broadcaster or Twitch added to their channel.

<a id="opIdget-stream-tags"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/streams/tags?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /streams/tags`

<aside class="warning">
This operation is deprecated
</aside>

**IMPORTANT** Twitch is moving from Twitch-defined tags to channel-defined tags. **IMPORTANT** As of February 28, 2023, this endpoint returns an empty array. On July 13, 2023, it will return a 410 response. If you use this endpoint, please update your code to use [Get Channel Information](https://dev.twitch.tv/docs/api/reference#get-channel-information).

Gets the list of stream tags that the broadcaster or Twitch added to their channel.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-stream-tags">Get Stream Tags</a>

<h3 id="gets-the-list-of-stream-tags-that-the-broadcaster-or-twitch-added-to-their-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose stream tags you want to get.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "tag_id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
      "is_auto": true,
      "localization_names": {
        "bg-bg": "английски",
        "cs-cz": "Angličtina",
        "da-dk": "Engelsk",
        "de-de": "Englisch",
        "el-gr": "Αγγλικά",
        "en-us": "English"
      },
      "localization_descriptions": {
        "bg-bg": "За потоци с използване на английски",
        "cs-cz": "Pro vysílání obsahující angličtinu.",
        "da-dk": "Til streams, hvori der indgår engelsk",
        "de-de": "Für Streams auf Englisch.",
        "el-gr": "Για μεταδόσεις που περιλαμβάνουν τη χρήση Αγγλικών",
        "en-us": "For streams featuring the use of English"
      }
    }
  ]
}
```

<h3 id="gets-the-list-of-stream-tags-that-the-broadcaster-or-twitch-added-to-their-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of tags.|[GetStreamTagsResponse](#schemagetstreamtagsresponse)|
|400|Bad Request|* The _broadcaster\_id_ field is required.<br>* The ID in the _broadcaster\_id_ field is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must specify an app access token or user access token.<br>* The access token is not valid.<br>* The ID in the Client-Id header must match the Client ID in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-teams">Teams</h1>

## Gets the list of Twitch teams that the broadcaster is a member of.

<a id="opIdget-channel-teams"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/teams/channel?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/channel`

Gets the list of Twitch teams that the broadcaster is a member of.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-channel-teams">Get Channel Teams</a>

<h3 id="gets-the-list-of-twitch-teams-that-the-broadcaster-is-a-member-of-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose teams you want to get.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "broadcaster_id": "96909659",
      "broadcaster_name": "CSharpFritz",
      "broadcaster_login": "csharpfritz",
      "background_image_url": null,
      "banner": null,
      "created_at": "2019-02-11T12:09:22Z",
      "updated_at": "2020-11-18T15:56:41Z",
      "info": "<p>An outgoing and enthusiastic group of friendly channels that write code, teach about technology, and promote the technical community.</p>",
      "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-livecoders-team_logo_image-bf1d9a87ca81432687de60e24ad9593d-600x600.png",
      "team_name": "livecoders",
      "team_display_name": "Live Coders",
      "id": "6358"
    }
  ]
}
```

<h3 id="gets-the-list-of-twitch-teams-that-the-broadcaster-is-a-member-of-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of teams.|[GetChannelTeamsResponse](#schemagetchannelteamsresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is missing or invalid.|None|
|401|Unauthorized|* The Authorization header must contain an app access token or user access token.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The broadcaster was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets information about the specified Twitch team.

<a id="opIdget-teams"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/teams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams`

Gets information about the specified Twitch team. [Read More](https://help.twitch.tv/s/article/twitch-teams)

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-teams">Get Teams</a>

<h3 id="gets-information-about-the-specified-twitch-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the team to get. This parameter and the _id_ parameter are mutually exclusive; you must specify the team’s name or ID but not both.|
|id|query|string|false|The ID of the team to get. This parameter and the _name_ parameter are mutually exclusive; you must specify the team’s name or ID but not both.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "users": [
        {
          "user_id": "278217731",
          "user_name": "mastermndio",
          "user_login": "mastermndio"
        },
        {
          "user_id": "41284990",
          "user_name": "jenninexus",
          "user_login": "jenninexus"
        }
      ],
      "background_image_url": null,
      "banner": null,
      "created_at": "2019-02-11T12:09:22Z",
      "updated_at": "2020-11-18T15:56:41Z",
      "info": "<p>An outgoing and enthusiastic group of friendly channels that write code, teach about technology, and promote the technical community.</p>",
      "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-livecoders-team_logo_image-bf1d9a87ca81432687de60e24ad9593d-600x600.png",
      "team_name": "livecoders",
      "team_display_name": "Live Coders",
      "id": "6358"
    }
  ]
}
```

<h3 id="gets-information-about-the-specified-twitch-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the team's information.|[GetTeamsResponse](#schemagetteamsresponse)|
|400|Bad Request|* The _name_ or _id_ query parameter is required.<br>* Specify either the _name_ or _id_ query parameter but not both.<br>* The ID in the _id_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header must contain an app access token or user access token.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The specified team was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-users">Users</h1>

## Gets information about one or more users.

<a id="opIdget-users"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

Gets information about one or more users.  
  
You may look up users using their user ID, login name, or both but the sum total of the number of users you may look up is 100\. For example, you may specify 50 IDs and 50 names or 100 IDs or names, but you cannot specify 100 IDs and 100 names.  
  
If you don’t specify IDs or login names, the request returns information about the user in the access token if you specify a user access token.  
  
To include the user’s verified email address in the response, you must use a user access token that includes the **user:read:email** scope.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-users">Get Users</a>

<h3 id="gets-information-about-one-or-more-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|The ID of the user to get. To specify more than one user, include the _id_ parameter for each user to get. For example, `id=1234&id=5678`. The maximum number of IDs you may specify is 100.|
|login|query|[string]|false|The login name of the user to get. To specify more than one user, include the _login_ parameter for each user to get. For example, `login=foo&login=bar`. The maximum number of login names you may specify is 100.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "141981764",
      "login": "twitchdev",
      "display_name": "TwitchDev",
      "type": "",
      "broadcaster_type": "partner",
      "description": "Supporting third-party developers building Twitch integrations from chatbots to game integrations.",
      "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-300x300.png",
      "offline_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/3f13ab61-ec78-4fe6-8481-8682cb3b0ac2-channel_offline_image-1920x1080.png",
      "view_count": 0,
      "email": "not-real@email.com",
      "created_at": "2016-12-14T20:32:28Z"
    }
  ]
}
```

<h3 id="gets-information-about-one-or-more-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the specified users’ information.|[GetUsersResponse](#schemagetusersresponse)|
|400|Bad Request|* The \*id\* or \*login\* query parameter is required unless the request uses a user access token.<br>* The request exceeded the maximum allowed number of \*id\* and/or \*login\* query parameters.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates the user’s information.

<a id="opIdupdate-user"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/users \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /users`

Updates the specified user’s information. The user ID in the OAuth token identifies the user whose information you want to update.

To include the user’s verified email address in the response, the user access token must also include the **user:read:email** scope.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-user">Update User</a>

<h3 id="updates-the-users-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|The string to update the channel’s description to. The description is limited to a maximum of 300 characters.  <br>  <br>To remove the description, specify this parameter but don’t set it’s value (for example, `?description=`).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "44322889",
      "login": "dallas",
      "display_name": "dallas",
      "type": "staff",
      "broadcaster_type": "affiliate",
      "description": "BaldAngel",
      "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/4d1f36cbf1f0072d-profile_image-300x300.png",
      "offline_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-channel_offline_image-2e82c1df2a464df7-1920x1080.jpeg",
      "view_count": 6995,
      "email": "not-real@email.com",
      "created_at": "2013-06-03T19:12:02.580593Z"
    }
  ]
}
```

<h3 id="updates-the-users-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the specified user's information.|[UpdateUserResponse](#schemaupdateuserresponse)|
|400|Bad Request|* The string in the _description_ query parameter is too long.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:edit** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|429|Too Many Requests|The app exceeded the number of requests that it may make.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:edit )
</aside>

## NEW Gets the authorization scopes that the specified user has granted the application.

<a id="opIdget-authorization-by-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/authorization/users?user_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /authorization/users`

NEW Gets the authorization scopes that the specified user(s) have granted the application.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-authorization-by-user">Get Authorization By User</a>

<h3 id="new-gets-the-authorization-scopes-that-the-specified-user-has-granted-the-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|[string]|true|The ID of the user(s) you want to check authorization for. To specify more than one user, include the user\_id parameter for each user to get. For example, `user_id=1234&user_id=5678`. The maximum number of IDs you may specify is 10.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "141981764",
      "user_name": "TwitchDev",
      "user_login": "twitchdev",
      "scopes": [
        "bits:read",
        "channel:bot",
        "channel:manage:predictions"
      ],
      "has_authorized": true
    },
    {
      "user_id": "197886470",
      "user_name": "TwitchRivals",
      "user_login": "twitchrivals",
      "scopes": [],
      "has_authorized": false
    }
  ]
}
```

<h3 id="new-gets-the-authorization-scopes-that-the-specified-user-has-granted-the-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved user authorization.|[GetAuthorizationByUserResponse](#schemagetauthorizationbyuserresponse)|
|400|Bad Request|Request is malformed - invalid parameters or missing parameters.|None|
|401|Unauthorized|* The access token is not valid.<br>* Authorization header is required and must specify an app access token.|None|
|403|Forbidden|The client-id in the header must match the client ID in the access token.|None|
|500|Internal Server Error|Internal Server Error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Gets the list of users that the broadcaster has blocked.

<a id="opIdget-user-block-list"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/users/blocks?broadcaster_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/blocks`

Gets the list of users that the broadcaster has blocked. [Read More](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers)

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:blocked\_users** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-user-block-list">Get User Block List</a>

<h3 id="gets-the-list-of-users-that-the-broadcaster-has-blocked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcaster_id|query|string|true|The ID of the broadcaster whose list of blocked users you want to get.|
|first|query|integer(int32)|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "user_id": "135093069",
      "user_login": "bluelava",
      "display_name": "BlueLava"
    },
    {
      "user_id": "27419011",
      "user_login": "travistyoj",
      "display_name": "TravistyOJ"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6NX19"
  }
}
```

<h3 id="gets-the-list-of-users-that-the-broadcaster-has-blocked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the broadcaster's list of blocked users.|[GetUserBlockListResponse](#schemagetuserblocklistresponse)|
|400|Bad Request|* The _broadcaster\_id_ query parameter is required.|None|
|401|Unauthorized|* The ID in _broadcaster\_id_ must match the user ID found in the request’s access token.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:blocked\_users** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:blocked_users )
</aside>

## Blocks the specified user from interacting with or having contact with the broadcaster.

<a id="opIdblock-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/users/blocks?target_user_id=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /users/blocks`

Blocks the specified user from interacting with or having contact with the broadcaster. The user ID in the OAuth token identifies the broadcaster who is blocking the user.

To learn more about blocking users, see [Block Other Users on Twitch](https://help.twitch.tv/s/article/how-to-manage-harassment-in-chat?language=en%5FUS#BlockWhispersandMessagesfromStrangers).

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.

<a href="https://dev.twitch.tv/docs/api/reference#block-user">Block User</a>

<h3 id="blocks-the-specified-user-from-interacting-with-or-having-contact-with-the-broadcaster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_user_id|query|string|true|The ID of the user to block. The API ignores the request if the broadcaster has already blocked the user.|
|source_context|query|string|false|The location where the harassment took place that is causing the brodcaster to block the user. Possible values are:  <br>  <br>* chat<br>* whisper<br>  <br>.|
|reason|query|string|false|The reason that the broadcaster is blocking the user. Possible values are:  <br>  <br>* harassment<br>* spam<br>* other|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_context|chat|
|source_context|whisper|
|reason|harassment|
|reason|spam|
|reason|other|

<h3 id="blocks-the-specified-user-from-interacting-with-or-having-contact-with-the-broadcaster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully blocked the user.<br><br>__Examples__<br><br>_Request:_<br><br>Blocks the specified user.<br><br>```bash<br>curl -X PUT 'https://api.twitch.tv/helix/users/blocks?target_user_id=198704263' \<br>-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \<br>-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \<br>```|None|
|400|Bad Request|* The _target\_user\_id_ query parameter is required.<br>* The ID in _target\_user\_id_ cannot be the same as the user ID in the access token.<br>* The value in _source\_context_ is not valid.<br>* The value in _reason_ is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:manage:blocked\_users** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:manage:blocked_users )
</aside>

## Removes the user from the broadcaster’s list of blocked users.

<a id="opIdunblock-user"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/users/blocks?target_user_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/blocks`

Removes the user from the broadcaster’s list of blocked users. The user ID in the OAuth token identifies the broadcaster who’s removing the block.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:blocked\_users** scope.

<a href="https://dev.twitch.tv/docs/api/reference#unblock-user">Unblock User</a>

<h3 id="removes-the-user-from-the-broadcasters-list-of-blocked-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target_user_id|query|string|true|The ID of the user to remove from the broadcaster’s list of blocked users. The API ignores the request if the broadcaster hasn’t blocked the user.|

<h3 id="removes-the-user-from-the-broadcasters-list-of-blocked-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed the block.<br><br>__Examples__<br><br>_Request:_<br><br>Unblocks the specified user.<br><br>```bash<br>curl -X DELETE 'https://api.twitch.tv/helix/users/blocks?target_user_id=198704263' \<br>-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \<br>-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \<br>```|None|
|400|Bad Request|* The _target\_user\_id_ query parameter is required.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:blocked\_users** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:manage:blocked_users )
</aside>

## Gets a list of all extensions (both active and inactive) that the broadcaster has installed.

<a id="opIdget-user-extensions"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/users/extensions/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/extensions/list`

Gets a list of all extensions (both active and inactive) that the broadcaster has installed. The user ID in the access token identifies the broadcaster.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:read:broadcast** or **user:edit:broadcast** scope. To include inactive extensions, you must include the **user:edit:broadcast** scope.

<a href="https://dev.twitch.tv/docs/api/reference#get-user-extensions">Get User Extensions</a>

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
      "version": "1.1.8",
      "name": "Streamlabs Leaderboard",
      "can_activate": true,
      "type": [
        "panel"
      ]
    },
    {
      "id": "d4uvtfdr04uq6raoenvj7m86gdk16v",
      "version": "2.0.2",
      "name": "Prime Subscription and Loot Reminder",
      "can_activate": true,
      "type": [
        "overlay"
      ]
    },
    {
      "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
      "version": "1.1.0",
      "name": "TopClip",
      "can_activate": true,
      "type": [
        "mobile",
        "panel"
      ]
    },
    {
      "id": "zfh2irvx2jb4s60f02jq0ajm8vwgka",
      "version": "1.0.19",
      "name": "Streamlabs",
      "can_activate": true,
      "type": [
        "mobile",
        "overlay"
      ]
    },
    {
      "id": "lqnf3zxk0rv0g7gq92mtmnirjz2cjj",
      "version": "0.0.1",
      "name": "Dev Experience Test",
      "can_activate": true,
      "type": [
        "component",
        "mobile",
        "panel",
        "overlay"
      ]
    }
  ]
}
```

<h3 id="gets-a-list-of-all-extensions-both-active-and-inactive-that-the-broadcaster-has-installed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the user's installed extensions.|[GetUserExtensionsResponse](#schemagetuserextensionsresponse)|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:read:broadcast** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:read:broadcast user:edit:broadcast )
</aside>

## Gets the active extensions that the broadcaster has installed for each configuration.

<a id="opIdget-user-active-extensions"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/users/extensions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/extensions`

Gets the active extensions that the broadcaster has installed for each configuration.

NOTE: To include extensions that you have under development, you must specify a user access token that includes the **user:read:broadcast** or **user:edit:broadcast** scope.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-user-active-extensions">Get User Active Extensions</a>

<h3 id="gets-the-active-extensions-that-the-broadcaster-has-installed-for-each-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|string|false|The ID of the broadcaster whose active extensions you want to get.  <br>  <br>This parameter is required if you specify an app access token and is optional if you specify a user access token. If you specify a user access token and don’t specify this parameter, the API uses the user ID from the access token.|

> Example responses

> 200 Response

```json
{
  "data": {
    "panel": {
      "1": {
        "active": true,
        "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
        "version": "1.1.0",
        "name": "TopClip"
      },
      "2": {
        "active": true,
        "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
        "version": "1.1.8",
        "name": "Streamlabs Leaderboard"
      },
      "3": {
        "active": true,
        "id": "naty2zwfp7vecaivuve8ef1hohh6bo",
        "version": "1.0.9",
        "name": "Streamlabs Stream Schedule & Countdown"
      }
    },
    "overlay": {
      "1": {
        "active": true,
        "id": "zfh2irvx2jb4s60f02jq0ajm8vwgka",
        "version": "1.0.19",
        "name": "Streamlabs"
      }
    },
    "component": {
      "1": {
        "active": true,
        "id": "lqnf3zxk0rv0g7gq92mtmnirjz2cjj",
        "version": "0.0.1",
        "name": "Dev Experience Test",
        "x": 0,
        "y": 0
      },
      "2": {
        "active": false
      }
    }
  }
}
```

<h3 id="gets-the-active-extensions-that-the-broadcaster-has-installed-for-each-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the user's active extensions.|[GetUserActiveExtensionsResponse](#schemagetuseractiveextensionsresponse)|
|400|Bad Request|* The _user\_id_ query parameter is required if you specify an app access token.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Updates an installed extension’s information.

<a id="opIdupdate-user-extensions"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/users/extensions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": {
      "panel": {
        "1": {
          "active": true,
          "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
          "version": "1.1.0"
        },
        "2": {
          "active": true,
          "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
          "version": "1.1.8"
        },
        "3": {
          "active": true,
          "id": "naty2zwfp7vecaivuve8ef1hohh6bo",
          "version": "1.0.9"
        }
      },
      "overlay": {
        "1": {
          "active": true,
          "id": "zfh2irvx2jb4s60f02jq0ajm8vwgka",
          "version": "1.0.19"
        }
      },
      "component": {
        "1": {
          "active": true,
          "id": "lqnf3zxk0rv0g7gq92mtmnirjz2cjj",
          "version": "0.0.1",
          "x": 0,
          "y": 0
        },
        "2": {
          "active": false
        }
      }
    }
  }'
```

`PUT /users/extensions`

Updates an installed extension’s information. You can update the extension’s activation state, ID, and version number. The user ID in the access token identifies the broadcaster whose extensions you’re updating.

NOTE: If you try to activate an extension under multiple extension types, the last write wins (and there is no guarantee of write order).

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:edit:broadcast** scope.

<a href="https://dev.twitch.tv/docs/api/reference#update-user-extensions">Update User Extensions</a>

> Body parameter

```json
{
  "data": {
    "panel": {
      "1": {
        "active": true,
        "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
        "version": "1.1.0"
      },
      "2": {
        "active": true,
        "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
        "version": "1.1.8"
      },
      "3": {
        "active": true,
        "id": "naty2zwfp7vecaivuve8ef1hohh6bo",
        "version": "1.0.9"
      }
    },
    "overlay": {
      "1": {
        "active": true,
        "id": "zfh2irvx2jb4s60f02jq0ajm8vwgka",
        "version": "1.0.19"
      }
    },
    "component": {
      "1": {
        "active": true,
        "id": "lqnf3zxk0rv0g7gq92mtmnirjz2cjj",
        "version": "0.0.1",
        "x": 0,
        "y": 0
      },
      "2": {
        "active": false
      }
    }
  }
}
```

<h3 id="updates-an-installed-extensions-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserExtensionsBody](#schemaupdateuserextensionsbody)|false|none|
|» data|body|object|true|The extensions to update. The `data` field is a dictionary of extension types. The dictionary’s possible keys are: panel, overlay, or component. The key’s value is a dictionary of extensions.  <br>  <br>For the extension’s dictionary, the key is a sequential number beginning with 1\. For panel and overlay extensions, the key’s value is an object that contains the following fields: `active` (true/false), `id` (the extension’s ID), and `version` (the extension’s version).  <br>  <br>For component extensions, the key’s value includes the above fields plus the `x` and `y` fields, which identify the coordinate where the extension is placed.|
|» » panel|body|object|false|none|
|» » » **additionalProperties**|body|[UserExtensionPanelUpdate](#schemauserextensionpanelupdate)|false|none|
|» » overlay|body|object|false|none|
|» » » **additionalProperties**|body|[UserExtensionOverlayUpdate](#schemauserextensionoverlayupdate)|false|none|
|» » component|body|object|false|none|
|» » » **additionalProperties**|body|[UserExtensionComponentUpdate](#schemauserextensioncomponentupdate)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "panel": {
      "1": {
        "active": true,
        "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
        "version": "1.1.0",
        "name": "TopClip"
      },
      "2": {
        "active": true,
        "id": "wi08ebtatdc7oj83wtl9uxwz807l8b",
        "version": "1.1.8",
        "name": "Streamlabs Leaderboard"
      },
      "3": {
        "active": true,
        "id": "naty2zwfp7vecaivuve8ef1hohh6bo",
        "version": "1.0.9",
        "name": "Streamlabs Stream Schedule & Countdown"
      }
    },
    "overlay": {
      "1": {
        "active": true,
        "id": "zfh2irvx2jb4s60f02jq0ajm8vwgka",
        "version": "1.0.19",
        "name": "Streamlabs"
      }
    },
    "component": {
      "1": {
        "active": true,
        "id": "lqnf3zxk0rv0g7gq92mtmnirjz2cjj",
        "version": "0.0.1",
        "name": "Dev Experience Test",
        "x": 0,
        "y": 0
      },
      "2": {
        "active": false
      }
    }
  }
}
```

<h3 id="updates-an-installed-extensions-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the active extensions.|[UpdateUserExtensionsResponse](#schemaupdateuserextensionsresponse)|
|400|Bad Request|* The JSON payload is malformed.|None|
|401|Unauthorized|* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:edit:broadcast** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* An extension with the specified `id` and `version` values was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:edit:broadcast )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-videos">Videos</h1>

## Gets information about one or more published videos.

<a id="opIdget-videos"></a>

> Code samples

```bash
curl https://api.twitch.tv/helix/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos`

Gets information about one or more published videos. You may get videos by ID, by user, or by game/category.

You may apply several filters to get a subset of the videos. The filters are applied as an AND operation to each video. For example, if _language_ is set to ‘de’ and _game\_id_ is set to 21779, the response includes only videos that show playing League of Legends by users that stream in German. The filters apply only if you get videos by user ID or game ID.

__Authorization:__

Requires an [app access token](https://dev.twitch.tv/docs/authentication#app-access-tokens) or [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens).

<a href="https://dev.twitch.tv/docs/api/reference#get-videos">Get Videos</a>

<h3 id="gets-information-about-one-or-more-published-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|A list of IDs that identify the videos you want to get. To get more than one video, include this parameter for each video you want to get. For example, `id=1234&id=5678`. You may specify a maximum of 100 IDs. The endpoint ignores duplicate IDs and IDs that weren't found (if there's at least one valid ID).  <br>  <br>The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.|
|user_id|query|string|false|The ID of the user whose list of videos you want to get.  <br>  <br>The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.|
|game_id|query|string|false|A category or game ID. The response contains a maximum of 500 videos that show this content. To get category/game IDs, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.  <br>  <br>The _id_, _user\_id_, and _game\_id_ parameters are mutually exclusive.|
|language|query|string|false|A filter used to filter the list of videos by the language that the video owner broadcasts in. For example, to get videos that were broadcast in German, set this parameter to the ISO 639-1 two-letter code for German (i.e., DE). For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). If the language is not supported, use “other.”  <br>  <br>Specify this parameter only if you specify the _game\_id_ query parameter.|
|period|query|string|false|A filter used to filter the list of videos by when they were published. For example, videos published in the last week. Possible values are:  <br>  <br>* all<br>* day<br>* month<br>* week<br>  <br>The default is "all," which returns videos published in all periods.  <br>  <br>Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.|
|sort|query|string|false|The order to sort the returned videos in. Possible values are:  <br>  <br>* time — Sort the results in descending order by when they were created (i.e., latest video first).<br>* trending — Sort the results in descending order by biggest gains in viewership (i.e., highest trending video first).<br>* views — Sort the results in descending order by most views (i.e., highest number of views first).<br>  <br>The default is "time."  <br>  <br>Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.|
|type|query|string|false|A filter used to filter the list of videos by the video's type. Possible case-sensitive values are:  <br>  <br>* all<br>* archive — On-demand videos (VODs) of past streams.<br>* highlight — Highlight reels of past streams.<br>* upload — External videos that the broadcaster uploaded using the Video Producer.<br>  <br>The default is "all," which returns all video types.  <br>  <br>Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.|
|first|query|string|false|The maximum number of items to return per page in the response. The minimum page size is 1 item per page and the maximum is 100\. The default is 20.  <br>  <br>Specify this parameter only if you specify the _game\_id_ or _user\_id_ query parameter.|
|after|query|string|false|The cursor used to get the next page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  <br>  <br>Specify this parameter only if you specify the _user\_id_ query parameter.|
|before|query|string|false|The cursor used to get the previous page of results. The **Pagination** object in the response contains the cursor’s value. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)  <br>  <br>Specify this parameter only if you specify the _user\_id_ query parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|all|
|period|day|
|period|month|
|period|week|
|sort|time|
|sort|trending|
|sort|views|
|type|all|
|type|archive|
|type|highlight|
|type|upload|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "335921245",
      "stream_id": null,
      "user_id": "141981764",
      "user_login": "twitchdev",
      "user_name": "TwitchDev",
      "title": "Twitch Developers 101",
      "description": "Welcome to Twitch development! Here is a quick overview of our products and information to help you get started.",
      "created_at": "2018-11-14T21:30:18Z",
      "published_at": "2018-11-14T22:04:30Z",
      "url": "https://www.twitch.tv/videos/335921245",
      "thumbnail_url": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/twitchdev/335921245/ce0f3a7f-57a3-4152-bc06-0c6610189fb3/thumb/index-0000000000-%{width}x%{height}.jpg",
      "viewable": "public",
      "view_count": 1863062,
      "language": "en",
      "type": "upload",
      "duration": "3m21s",
      "muted_segments": [
        {
          "duration": 30,
          "offset": 120
        }
      ]
    }
  ],
  "pagination": {}
}
```

<h3 id="gets-information-about-one-or-more-published-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the list of videos.|[GetVideosResponse](#schemagetvideosresponse)|
|400|Bad Request|* The request must specify either the _id_ or _user\_id_ or _game\_id_ query parameter.<br>* The _id_, _user\_id_, and _game\_id_ query parameters are mutually exclusive; you must specify only one of them.<br>* The value in the _id_ query parameter is not valid.<br>* The ID in the _game\_id_ query parameter is not valid.<br>* The value in the _type_ query parameter is not valid.<br>* The value in the _period_ query parameter is not valid.<br>* The value in the _sort_ query parameter is not valid.|None|
|401|Unauthorized|* The Authorization header is required and must contain an app access token or user access token.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|404|Not Found|* The ID in the _game\_id_ query parameter was not found.<br>* The ID in the _id_ query parameter was not found. Returned only if all the IDs were not found; otherwise, the ID is ignored.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth
</aside>

## Deletes one or more videos.

<a id="opIddelete-videos"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/videos?id=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /videos`

Deletes one or more videos. You may delete past broadcasts, highlights, or uploads.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **channel:manage:videos** scope.

<a href="https://dev.twitch.tv/docs/api/reference#delete-videos">Delete Videos</a>

<h3 id="deletes-one-or-more-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|The list of videos to delete. To specify more than one video, include the _id_ parameter for each video to delete. For example, `id=1234&id=5678`. You can delete a maximum of 5 videos per request. Ignores invalid video IDs.  <br>  <br>If the user doesn’t have permission to delete one of the videos in the list, none of the videos are deleted.|

> Example responses

> 200 Response

```json
{
  "data": [
    "1234",
    "9876"
  ]
}
```

<h3 id="deletes-one-or-more-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted the list of videos.|[DeleteVideosResponse](#schemadeletevideosresponse)|
|400|Bad Request|* The _id_ query parameter is required.<br>* The request exceeded the number of allowed _id_ query parameters.|None|
|401|Unauthorized|* The caller is not authorized to delete the specified video.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **channel:manage:videos** scope.<br>* The access token is not valid.<br>* The ID specified in the Client-Id header does not match the client ID specified in the access token.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: channel:manage:videos )
</aside>

<h1 id="twitch-api-swagger-ui-unofficial-whispers">Whispers</h1>

## Sends a whisper message to the specified user.

<a id="opIdsend-whisper"></a>

> Code samples

```bash
curl 'https://api.twitch.tv/helix/whispers?from_user_id=string&to_user_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "hello"
  }'
```

`POST /whispers`

Sends a whisper message to the specified user.

NOTE: The user sending the whisper must have a verified phone number (see the **Phone Number** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).

NOTE: The API may silently drop whispers that it suspects of violating Twitch policies. (The API does not indicate that it dropped the whisper; it returns a 204 status code as if it succeeded.)

**Rate Limits**: You may whisper to a maximum of 40 unique recipients per day. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.

__Authorization:__

Requires a [user access token](https://dev.twitch.tv/docs/authentication#user-access-tokens) that includes the **user:manage:whispers** scope.

<a href="https://dev.twitch.tv/docs/api/reference#send-whisper">Send Whisper</a>

> Body parameter

```json
{
  "message": "hello"
}
```

<h3 id="sends-a-whisper-message-to-the-specified-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_user_id|query|string|true|The ID of the user sending the whisper. This user must have a verified phone number. This ID must match the user ID in the user access token.|
|to_user_id|query|string|true|The ID of the user to receive the whisper.|
|body|body|[SendWhisperBody](#schemasendwhisperbody)|false|none|
|» message|body|string|true|The whisper message to send. The message must not be empty.  <br>  <br>The maximum message lengths are:  <br>  <br>* 500 characters if the user you're sending the message to hasn't whispered you before.<br>* 10,000 characters if the user you're sending the message to has whispered you before.<br>  <br>Messages that exceed the maximum length are truncated.|

<h3 id="sends-a-whisper-message-to-the-specified-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully sent the whisper message or the message was silently dropped.<br><br>__Examples__<br><br>_Request:_<br><br>Send the user a whisper message.<br><br>```bash<br>curl -X POST 'https://api.twitch.tv/helix/whispers?from_user_id=123&to_user_id=456' \<br>-H 'Authorization: Bearer kpvy3cjboyptmdkiacwr0c19hotn5s' \<br>-H 'Client-Id: hof5gwx0su6owfnys0nyan9c87zr6t' \<br>-H 'Content-Type: application/json' \<br>-d '{"message":"hello"}'<br>```|None|
|400|Bad Request|* The ID in the _from\_user\_id_ and _to\_user\_id_ query parameters must be different.<br>* The `message` field must not contain an empty string.<br>* The user that you're sending the whisper to doesn't allow whisper messages (see the **Block Whispers from Strangers** setting in your [Security and Privacy](https://www.twitch.tv/settings/security) settings).<br>* Whisper messages may not be sent to suspended users.<br>* The ID in the _from\_user\_id_ query parameter is not valid.<br>* The ID in the _to\_user\_id_ query parameter is not valid.|None|
|401|Unauthorized|* The user in the _from\_user\_id_ query parameter must have a verified phone number.<br>* The Authorization header is required and must contain a user access token.<br>* The user access token must include the **user:manage:whispers** scope.<br>* The access token is not valid.<br>* This ID in _from\_user\_id_ must match the user ID in the user access token.<br>* The client ID specified in the Client-Id header does not match the client ID specified in the access token.|None|
|403|Forbidden|* Suspended users may not send whisper messages.<br>* The account that's sending the message doesn't allow sending whispers.|None|
|404|Not Found|* The ID in _to\_user\_id_ was not found.|None|
|429|Too Many Requests|* The sending user exceeded the number of whisper requests that they may make. See Rate Limits for this endpoint above.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
twitch_auth ( Scopes: user:manage:whispers )
</aside>

# Schemas

<h2 id="tocS_StartCommercialBody">StartCommercialBody</h2>
<!-- backwards compatibility -->
<a id="schemastartcommercialbody"></a>
<a id="schema_StartCommercialBody"></a>
<a id="tocSstartcommercialbody"></a>
<a id="tocsstartcommercialbody"></a>

```json
{
  "broadcaster_id": "string",
  "length": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the partner or affiliate broadcaster that wants to run the commercial. This ID must match the user ID found in the OAuth token.|
|length|integer(int32)|true|none|The length of the commercial to run, in seconds. Twitch tries to serve a commercial that’s the requested length, but it may be shorter or longer. The maximum length you should request is 180 seconds.|

<h2 id="tocS_StartCommercialResponse">StartCommercialResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartcommercialresponse"></a>
<a id="schema_StartCommercialResponse"></a>
<a id="tocSstartcommercialresponse"></a>
<a id="tocsstartcommercialresponse"></a>

```json
{
  "data": [
    {
      "length": 0,
      "message": "string",
      "retry_after": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|An array that contains a single object with the status of your start commercial request.|

<h2 id="tocS_GetAdScheduleResponse">GetAdScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetadscheduleresponse"></a>
<a id="schema_GetAdScheduleResponse"></a>
<a id="tocSgetadscheduleresponse"></a>
<a id="tocsgetadscheduleresponse"></a>

```json
{
  "data": [
    {
      "snooze_count": 0,
      "snooze_refresh_at": 0,
      "next_ad_at": 0,
      "duration": 0,
      "last_ad_at": 0,
      "preroll_free_time": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains information related to the channel’s ad schedule.|

<h2 id="tocS_SnoozeNextAdResponse">SnoozeNextAdResponse</h2>
<!-- backwards compatibility -->
<a id="schemasnoozenextadresponse"></a>
<a id="schema_SnoozeNextAdResponse"></a>
<a id="tocSsnoozenextadresponse"></a>
<a id="tocssnoozenextadresponse"></a>

```json
{
  "data": [
    {
      "snooze_count": 0,
      "snooze_refresh_at": 0,
      "next_ad_at": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains information about the channel’s snoozes and next upcoming ad after successfully snoozing.|

<h2 id="tocS_ExtensionAnalytics">ExtensionAnalytics</h2>
<!-- backwards compatibility -->
<a id="schemaextensionanalytics"></a>
<a id="schema_ExtensionAnalytics"></a>
<a id="tocSextensionanalytics"></a>
<a id="tocsextensionanalytics"></a>

```json
{
  "extension_id": "string",
  "URL": "string",
  "type": "string",
  "date_range": {
    "started_at": "1970-01-01T00:00:00Z",
    "ended_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension_id|string|true|none|An ID that identifies the extension that the report was generated for.|
|URL|string|true|none|The URL that you use to download the report. The URL is valid for 5 minutes.|
|type|string|true|none|The type of report.|
|date_range|object|true|none|The reporting window’s start and end dates, in RFC3339 format.|

<h2 id="tocS_GetExtensionAnalyticsResponse">GetExtensionAnalyticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionanalyticsresponse"></a>
<a id="schema_GetExtensionAnalyticsResponse"></a>
<a id="tocSgetextensionanalyticsresponse"></a>
<a id="tocsgetextensionanalyticsresponse"></a>

```json
{
  "data": [
    {
      "extension_id": "string",
      "URL": "string",
      "type": "string",
      "date_range": {
        "started_at": "1970-01-01T00:00:00Z",
        "ended_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionAnalytics](#schemaextensionanalytics)]|true|none|A list of reports. The reports are returned in no particular order; however, the data within each report is in ascending order by date (newest first). The report contains one row of data per day of the reporting window; the report contains rows for only those days that the extension was used. The array is empty if there are no reports.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GameAnalytics">GameAnalytics</h2>
<!-- backwards compatibility -->
<a id="schemagameanalytics"></a>
<a id="schema_GameAnalytics"></a>
<a id="tocSgameanalytics"></a>
<a id="tocsgameanalytics"></a>

```json
{
  "game_id": "string",
  "URL": "string",
  "type": "string",
  "date_range": {
    "started_at": "1970-01-01T00:00:00Z",
    "ended_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_id|string|true|none|An ID that identifies the game that the report was generated for.|
|URL|string|true|none|The URL that you use to download the report. The URL is valid for 5 minutes.|
|type|string|true|none|The type of report.|
|date_range|object|true|none|The reporting window’s start and end dates, in RFC3339 format.|

<h2 id="tocS_GetGameAnalyticsResponse">GetGameAnalyticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgameanalyticsresponse"></a>
<a id="schema_GetGameAnalyticsResponse"></a>
<a id="tocSgetgameanalyticsresponse"></a>
<a id="tocsgetgameanalyticsresponse"></a>

```json
{
  "data": [
    {
      "game_id": "string",
      "URL": "string",
      "type": "string",
      "date_range": {
        "started_at": "1970-01-01T00:00:00Z",
        "ended_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GameAnalytics](#schemagameanalytics)]|true|none|A list of reports. The reports are returned in no particular order; however, the data within each report is in ascending order by date (newest first). The report contains one row of data per day of the reporting window; the report contains rows for only those days that the game was used. A report is available only if the game was broadcast for at least 5 hours over the reporting period. The array is empty if there are no reports.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_BitsLeaderboard">BitsLeaderboard</h2>
<!-- backwards compatibility -->
<a id="schemabitsleaderboard"></a>
<a id="schema_BitsLeaderboard"></a>
<a id="tocSbitsleaderboard"></a>
<a id="tocsbitsleaderboard"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "rank": 0,
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|An ID that identifies a user on the leaderboard.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|
|rank|integer(int32)|true|none|The user’s position on the leaderboard.|
|score|integer(int32)|true|none|The number of Bits the user has cheered.|

<h2 id="tocS_GetBitsLeaderboardResponse">GetBitsLeaderboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbitsleaderboardresponse"></a>
<a id="schema_GetBitsLeaderboardResponse"></a>
<a id="tocSgetbitsleaderboardresponse"></a>
<a id="tocsgetbitsleaderboardresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "rank": 0,
      "score": 0
    }
  ],
  "date_range": {
    "started_at": "1970-01-01T00:00:00Z",
    "ended_at": "1970-01-01T00:00:00Z"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BitsLeaderboard](#schemabitsleaderboard)]|true|none|A list of leaderboard leaders. The leaders are returned in rank order by how much they’ve cheered. The array is empty if nobody has cheered bits.|
|date_range|object|true|none|The reporting window’s start and end dates, in RFC3339 format. The dates are calculated by using the _started\_at_ and _period_ query parameters. If you don’t specify the _started\_at_ query parameter, the fields contain empty strings.|
|total|integer(int32)|true|none|The number of ranked users in `data`. This is the value in the _count_ query parameter or the total number of entries on the leaderboard, whichever is less.|

<h2 id="tocS_CheermoteImageFormat">CheermoteImageFormat</h2>
<!-- backwards compatibility -->
<a id="schemacheermoteimageformat"></a>
<a id="schema_CheermoteImageFormat"></a>
<a id="tocScheermoteimageformat"></a>
<a id="tocscheermoteimageformat"></a>

```json
{
  "1": "string",
  "2": "string",
  "3": "string",
  "4": "string",
  "1.5": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|1|string|false|none|none|
|2|string|false|none|none|
|3|string|false|none|none|
|4|string|false|none|none|
|1.5|string|false|none|none|

<h2 id="tocS_CheermoteImageTheme">CheermoteImageTheme</h2>
<!-- backwards compatibility -->
<a id="schemacheermoteimagetheme"></a>
<a id="schema_CheermoteImageTheme"></a>
<a id="tocScheermoteimagetheme"></a>
<a id="tocscheermoteimagetheme"></a>

```json
{
  "animated": {
    "1": "string",
    "2": "string",
    "3": "string",
    "4": "string",
    "1.5": "string"
  },
  "static": {
    "1": "string",
    "2": "string",
    "3": "string",
    "4": "string",
    "1.5": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animated|[CheermoteImageFormat](#schemacheermoteimageformat)|false|none|none|
|static|[CheermoteImageFormat](#schemacheermoteimageformat)|false|none|none|

<h2 id="tocS_CheermoteImages">CheermoteImages</h2>
<!-- backwards compatibility -->
<a id="schemacheermoteimages"></a>
<a id="schema_CheermoteImages"></a>
<a id="tocScheermoteimages"></a>
<a id="tocscheermoteimages"></a>

```json
{
  "light": {
    "animated": {
      "1": "string",
      "2": "string",
      "3": "string",
      "4": "string",
      "1.5": "string"
    },
    "static": {
      "1": "string",
      "2": "string",
      "3": "string",
      "4": "string",
      "1.5": "string"
    }
  },
  "dark": {
    "animated": {
      "1": "string",
      "2": "string",
      "3": "string",
      "4": "string",
      "1.5": "string"
    },
    "static": {
      "1": "string",
      "2": "string",
      "3": "string",
      "4": "string",
      "1.5": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|light|[CheermoteImageTheme](#schemacheermoteimagetheme)|false|none|none|
|dark|[CheermoteImageTheme](#schemacheermoteimagetheme)|false|none|none|

<h2 id="tocS_Cheermote">Cheermote</h2>
<!-- backwards compatibility -->
<a id="schemacheermote"></a>
<a id="schema_Cheermote"></a>
<a id="tocScheermote"></a>
<a id="tocscheermote"></a>

```json
{
  "prefix": "string",
  "tiers": [
    {
      "min_bits": 0,
      "id": "1",
      "color": "string",
      "images": {
        "light": {
          "animated": {
            "1": "string",
            "2": "string",
            "3": "string",
            "4": "string",
            "1.5": "string"
          },
          "static": {
            "1": "string",
            "2": "string",
            "3": "string",
            "4": "string",
            "1.5": "string"
          }
        },
        "dark": {
          "animated": {
            "1": "string",
            "2": "string",
            "3": "string",
            "4": "string",
            "1.5": "string"
          },
          "static": {
            "1": "string",
            "2": "string",
            "3": "string",
            "4": "string",
            "1.5": "string"
          }
        }
      },
      "can_cheer": true,
      "show_in_bits_card": true
    }
  ],
  "type": "global_first_party",
  "order": 0,
  "last_updated": "1970-01-01T00:00:00Z",
  "is_charitable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|true|none|The name portion of the Cheermote string that you use in chat to cheer Bits. The full Cheermote string is the concatenation of {prefix} + {number of Bits}. For example, if the prefix is “Cheer” and you want to cheer 100 Bits, the full Cheermote string is Cheer100\. When the Cheermote string is entered in chat, Twitch converts it to the image associated with the Bits tier that was cheered.|
|tiers|[object]|true|none|A list of tier levels that the Cheermote supports. Each tier identifies the range of Bits that you can cheer at that tier level and an image that graphically identifies the tier level.|
|type|string|true|none|The type of Cheermote. Possible values are:  <br>  <br>* global\_first\_party — A Twitch-defined Cheermote that is shown in the Bits card.<br>* global\_third\_party — A Twitch-defined Cheermote that is not shown in the Bits card.<br>* channel\_custom — A broadcaster-defined Cheermote.<br>* display\_only — Do not use; for internal use only.<br>* sponsored — A sponsor-defined Cheermote. When used, the sponsor adds additional Bits to the amount that the user cheered. For example, if the user cheered Terminator100, the broadcaster might receive 110 Bits, which includes the sponsor's 10 Bits contribution.|
|order|integer(int32)|true|none|The order that the Cheermotes are shown in the Bits card. The numbers may not be consecutive. For example, the numbers may jump from 1 to 7 to 13\. The order numbers are unique within a Cheermote type (for example, global\_first\_party) but may not be unique amongst all Cheermotes in the response.|
|last_updated|string(date-time)|true|none|The date and time, in RFC3339 format, when this Cheermote was last updated.|
|is_charitable|boolean|true|none|A Boolean value that indicates whether this Cheermote provides a charitable contribution match during charity campaigns.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|global_first_party|
|type|global_third_party|
|type|channel_custom|
|type|display_only|
|type|sponsored|

<h2 id="tocS_GetCheermotesResponse">GetCheermotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcheermotesresponse"></a>
<a id="schema_GetCheermotesResponse"></a>
<a id="tocSgetcheermotesresponse"></a>
<a id="tocsgetcheermotesresponse"></a>

```json
{
  "data": [
    {
      "prefix": "string",
      "tiers": [
        {
          "min_bits": 0,
          "id": "1",
          "color": "string",
          "images": {
            "light": {
              "animated": {
                "1": "string",
                "2": "string",
                "3": "string",
                "4": "string",
                "1.5": "string"
              },
              "static": {
                "1": "string",
                "2": "string",
                "3": "string",
                "4": "string",
                "1.5": "string"
              }
            },
            "dark": {
              "animated": {
                "1": "string",
                "2": "string",
                "3": "string",
                "4": "string",
                "1.5": "string"
              },
              "static": {
                "1": "string",
                "2": "string",
                "3": "string",
                "4": "string",
                "1.5": "string"
              }
            }
          },
          "can_cheer": true,
          "show_in_bits_card": true
        }
      ],
      "type": "global_first_party",
      "order": 0,
      "last_updated": "1970-01-01T00:00:00Z",
      "is_charitable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Cheermote](#schemacheermote)]|true|none|The list of Cheermotes. The list is in ascending order by the `order` field’s value.|

<h2 id="tocS_GetCustomPowerUpResponse">GetCustomPowerUpResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustompowerupresponse"></a>
<a id="schema_GetCustomPowerUpResponse"></a>
<a id="tocSgetcustompowerupresponse"></a>
<a id="tocsgetcustompowerupresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "title": "string",
      "prompt": "string",
      "bits": 0,
      "image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "default_image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "background_color": "string",
      "is_enabled": true,
      "is_user_input_required": true,
      "max_per_stream_setting": {
        "is_enabled": true,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": true,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": true,
        "global_cooldown_seconds": 0
      },
      "is_paused": true,
      "is_in_stock": true,
      "redemptions_redeemed_current_stream": 0,
      "cooldown_expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list of custom Power-ups. The list is in ascending order by `id`. If the broadcaster hasn’t created custom Power-ups, the list is empty.|

<h2 id="tocS_ExtensionTransaction">ExtensionTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaextensiontransaction"></a>
<a id="schema_ExtensionTransaction"></a>
<a id="tocSextensiontransaction"></a>
<a id="tocsextensiontransaction"></a>

```json
{
  "id": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "product_type": "BITS_IN_EXTENSION",
  "product_data": {
    "sku": "string",
    "domain": "string",
    "cost": {
      "amount": 0,
      "type": "bits"
    },
    "inDevelopment": true,
    "displayName": "string",
    "expiration": "string",
    "broadcast": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the transaction.|
|timestamp|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of the transaction.|
|broadcaster_id|string|true|none|The ID of the broadcaster that owns the channel where the transaction occurred.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|user_id|string|true|none|The ID of the user that purchased the digital product.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|
|product_type|string|true|none|The type of transaction. Possible values are:  <br>  <br>* BITS\_IN\_EXTENSION|
|product_data|object|true|none|Contains details about the digital product.|

#### Enumerated Values

|Property|Value|
|---|---|
|product_type|BITS_IN_EXTENSION|

<h2 id="tocS_GetExtensionTransactionsResponse">GetExtensionTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensiontransactionsresponse"></a>
<a id="schema_GetExtensionTransactionsResponse"></a>
<a id="tocSgetextensiontransactionsresponse"></a>
<a id="tocsgetextensiontransactionsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "product_type": "BITS_IN_EXTENSION",
      "product_data": {
        "sku": "string",
        "domain": "string",
        "cost": {
          "amount": 0,
          "type": "bits"
        },
        "inDevelopment": true,
        "displayName": "string",
        "expiration": "string",
        "broadcast": true
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionTransaction](#schemaextensiontransaction)]|true|none|The list of transactions.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_ChannelInformation">ChannelInformation</h2>
<!-- backwards compatibility -->
<a id="schemachannelinformation"></a>
<a id="schema_ChannelInformation"></a>
<a id="tocSchannelinformation"></a>
<a id="tocschannelinformation"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "broadcaster_language": "string",
  "game_name": "string",
  "game_id": "string",
  "title": "string",
  "delay": 0,
  "tags": [
    "string"
  ],
  "content_classification_labels": [
    "string"
  ],
  "is_branded_content": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|An ID that uniquely identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|broadcaster_language|string|true|none|The broadcaster’s preferred language. The value is an ISO 639-1 two-letter language code (for example, _en_ for English). The value is set to “other” if the language is not a Twitch supported language.|
|game_name|string|true|none|The name of the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.|
|game_id|string|true|none|An ID that uniquely identifies the game that the broadcaster is playing or last played. The value is an empty string if the broadcaster has never played a game.|
|title|string|true|none|The title of the stream that the broadcaster is currently streaming or last streamed. The value is an empty string if the broadcaster has never streamed.|
|delay|integer(int32)|true|none|The value of the broadcaster’s stream delay setting, in seconds. This field’s value defaults to zero unless 1) the request specifies a user access token, 2) the ID in the _broadcaster\_id_ query parameter matches the user ID in the access token, and 3) the broadcaster has partner status and they set a non-zero stream delay value.|
|tags|[string]|true|none|The tags applied to the channel.|
|content_classification_labels|[string]|true|none|The CCLs applied to the channel.|
|is_branded_content|boolean|true|none|Boolean flag indicating if the channel has branded content.|

<h2 id="tocS_GetChannelInformationResponse">GetChannelInformationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelinformationresponse"></a>
<a id="schema_GetChannelInformationResponse"></a>
<a id="tocSgetchannelinformationresponse"></a>
<a id="tocsgetchannelinformationresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "broadcaster_language": "string",
      "game_name": "string",
      "game_id": "string",
      "title": "string",
      "delay": 0,
      "tags": [
        "string"
      ],
      "content_classification_labels": [
        "string"
      ],
      "is_branded_content": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChannelInformation](#schemachannelinformation)]|true|none|A list that contains information about the specified channels. The list is empty if the specified channels weren’t found.|

<h2 id="tocS_ModifyChannelInformationBody">ModifyChannelInformationBody</h2>
<!-- backwards compatibility -->
<a id="schemamodifychannelinformationbody"></a>
<a id="schema_ModifyChannelInformationBody"></a>
<a id="tocSmodifychannelinformationbody"></a>
<a id="tocsmodifychannelinformationbody"></a>

```json
{
  "game_id": "string",
  "broadcaster_language": "string",
  "title": "string",
  "delay": 0,
  "tags": [
    "string"
  ],
  "content_classification_labels": [
    {
      "id": "DebatedSocialIssuesAndPolitics",
      "is_enabled": true
    }
  ],
  "is_branded_content": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_id|string|false|none|The ID of the game that the user plays. The game is not updated if the ID isn’t a game ID that Twitch recognizes. To unset this field, use “0” or “” (an empty string).|
|broadcaster_language|string|false|none|The user’s preferred language. Set the value to an ISO 639-1 two-letter language code (for example, _en_ for English). Set to “other” if the user’s preferred language is not a Twitch supported language. The language isn’t updated if the language code isn’t a Twitch supported language.|
|title|string|false|none|The title of the user’s stream. You may not set this field to an empty string.|
|delay|integer(int32)|false|none|The number of seconds you want your broadcast buffered before streaming it live. The delay helps ensure fairness during competitive play. Only users with Partner status may set this field. The maximum delay is 900 seconds (15 minutes).|
|tags|[string]|false|none|A list of channel-defined tags to apply to the channel. To remove all tags from the channel, set tags to an empty array. Tags help identify the content that the channel streams. [Learn More](https://help.twitch.tv/s/article/guide-to-tags)  <br>  <br>A channel may specify a maximum of 10 tags. Each tag is limited to a maximum of 25 characters and may not be an empty string or contain spaces or special characters.|
|content_classification_labels|[object]|false|none|List of labels that should be set as the Channel’s CCLs.  <br>**Note:** To clear CCLs for a channel, set all `is_enabled` for all possible CCLs to `false`|
|is_branded_content|boolean|false|none|Boolean flag indicating if the channel has branded content.|

<h2 id="tocS_ChannelEditor">ChannelEditor</h2>
<!-- backwards compatibility -->
<a id="schemachanneleditor"></a>
<a id="schema_ChannelEditor"></a>
<a id="tocSchanneleditor"></a>
<a id="tocschanneleditor"></a>

```json
{
  "user_id": "string",
  "user_name": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|An ID that uniquely identifies a user with editor permissions.|
|user_name|string|true|none|The user’s display name.|
|created_at|string(date-time)|true|none|The date and time, in RFC3339 format, when the user became one of the broadcaster’s editors.|

<h2 id="tocS_GetChannelEditorsResponse">GetChannelEditorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchanneleditorsresponse"></a>
<a id="schema_GetChannelEditorsResponse"></a>
<a id="tocSgetchanneleditorsresponse"></a>
<a id="tocsgetchanneleditorsresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_name": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChannelEditor](#schemachanneleditor)]|true|none|A list of users that are editors for the specified broadcaster. The list is empty if the broadcaster doesn’t have editors.|

<h2 id="tocS_GetFollowedChannelsResponse">GetFollowedChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfollowedchannelsresponse"></a>
<a id="schema_GetFollowedChannelsResponse"></a>
<a id="tocSgetfollowedchannelsresponse"></a>
<a id="tocsgetfollowedchannelsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "followed_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The list of broadcasters that the user follows. The list is in descending order by `followed_at` (with the most recently followed broadcaster first). The list is empty if the user doesn’t follow anyone.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).|
|total|integer(int32)|true|none|The total number of broadcasters that the user follows. As someone pages through the list, the number may change as the user follows or unfollows broadcasters.|

<h2 id="tocS_GetChannelFollowersResponse">GetChannelFollowersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelfollowersresponse"></a>
<a id="schema_GetChannelFollowersResponse"></a>
<a id="tocSgetchannelfollowersresponse"></a>
<a id="tocsgetchannelfollowersresponse"></a>

```json
{
  "data": [
    {
      "followed_at": "1970-01-01T00:00:00Z",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The list of users that follow the specified broadcaster. The list is in descending order by `followed_at` (with the most recent follower first). The list is empty if nobody follows the broadcaster, the specified `user_id` isn’t in the follower list, the user access token is missing the **moderator:read:followers** scope, or the user isn’t the broadcaster or moderator for the channel.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read more](https://dev.twitch.tv/docs/api/guide#pagination).|
|total|integer(int32)|true|none|The total number of users that follow this broadcaster. As someone pages through the list, the number of users may change as users follow or unfollow the broadcaster.|

<h2 id="tocS_CreateCustomRewardsBody">CreateCustomRewardsBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomrewardsbody"></a>
<a id="schema_CreateCustomRewardsBody"></a>
<a id="tocScreatecustomrewardsbody"></a>
<a id="tocscreatecustomrewardsbody"></a>

```json
{
  "title": "string",
  "cost": 0,
  "prompt": "string",
  "is_enabled": true,
  "background_color": "string",
  "is_user_input_required": true,
  "is_max_per_stream_enabled": true,
  "max_per_stream": 0,
  "is_max_per_user_per_stream_enabled": true,
  "max_per_user_per_stream": 0,
  "is_global_cooldown_enabled": true,
  "global_cooldown_seconds": 0,
  "should_redemptions_skip_request_queue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|The custom reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.|
|cost|integer(int64)|true|none|The cost of the reward, in Channel Points. The minimum is 1 point.|
|prompt|string|false|none|The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.|
|is_enabled|boolean|false|none|A Boolean value that determines whether the reward is enabled. Viewers see only enabled rewards. The default is **true**.|
|background_color|string|false|none|The background color to use for the reward. Specify the color using Hex format (for example, #9147FF).|
|is_user_input_required|boolean|false|none|A Boolean value that determines whether the user needs to enter information when redeeming the reward. See the `prompt` field. The default is **false**.|
|is_max_per_stream_enabled|boolean|false|none|A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). The default is **false**.|
|max_per_stream|integer(int32)|false|none|The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.|
|is_max_per_user_per_stream_enabled|boolean|false|none|A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see the `max_per_user_per_stream` field). The default is **false**.|
|max_per_user_per_stream|integer(int32)|false|none|The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**. The minimum value is 1.|
|is_global_cooldown_enabled|boolean|false|none|A Boolean value that determines whether to apply a cooldown period between redemptions (see the `global_cooldown_seconds` field for the duration of the cooldown period). The default is **false**.|
|global_cooldown_seconds|integer(int32)|false|none|The cooldown period, in seconds. Applied only if the `is_global_cooldown_enabled` field is **true**. The minimum value is 1; however, the minimum value is 60 for it to be shown in the Twitch UX.|
|should_redemptions_skip_request_queue|boolean|false|none|A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process. The default is **false**.|

<h2 id="tocS_CustomReward">CustomReward</h2>
<!-- backwards compatibility -->
<a id="schemacustomreward"></a>
<a id="schema_CustomReward"></a>
<a id="tocScustomreward"></a>
<a id="tocscustomreward"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "id": "string",
  "title": "string",
  "prompt": "string",
  "cost": 0,
  "image": {
    "url_1x": "string",
    "url_2x": "string",
    "url_4x": "string"
  },
  "default_image": {
    "url_1x": "string",
    "url_2x": "string",
    "url_4x": "string"
  },
  "background_color": "string",
  "is_enabled": true,
  "is_user_input_required": true,
  "max_per_stream_setting": {
    "is_enabled": true,
    "max_per_stream": 0
  },
  "max_per_user_per_stream_setting": {
    "is_enabled": true,
    "max_per_user_per_stream": 0
  },
  "global_cooldown_setting": {
    "is_enabled": true,
    "global_cooldown_seconds": 0
  },
  "is_paused": true,
  "is_in_stock": true,
  "should_redemptions_skip_request_queue": true,
  "redemptions_redeemed_current_stream": 0,
  "cooldown_expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID that uniquely identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|id|string|true|none|The ID that uniquely identifies this custom reward.|
|title|string|true|none|The title of the reward.|
|prompt|string|true|none|The prompt shown to the viewer when they redeem the reward if user input is required. See the `is_user_input_required` field.|
|cost|integer(int64)|true|none|The cost of the reward in Channel Points.|
|image|object|true|none|A set of custom images for the reward. This field is **null** if the broadcaster didn’t upload images.|
|default_image|object|true|none|A set of default images for the reward.|
|background_color|string|true|none|The background color to use for the reward. The color is in Hex format (for example, #00E5CB).|
|is_enabled|boolean|true|none|A Boolean value that determines whether the reward is enabled. Is **true** if enabled; otherwise, **false**. Disabled rewards aren’t shown to the user.|
|is_user_input_required|boolean|true|none|A Boolean value that determines whether the user must enter information when they redeem the reward. Is **true** if the user is prompted.|
|max_per_stream_setting|object|true|none|The settings used to determine whether to apply a maximum to the number of redemptions allowed per live stream.|
|max_per_user_per_stream_setting|object|true|none|The settings used to determine whether to apply a maximum to the number of redemptions allowed per user per live stream.|
|global_cooldown_setting|object|true|none|The settings used to determine whether to apply a cooldown period between redemptions and the length of the cooldown.|
|is_paused|boolean|true|none|A Boolean value that determines whether the reward is currently paused. Is **true** if the reward is paused. Viewers can’t redeem paused rewards.|
|is_in_stock|boolean|true|none|A Boolean value that determines whether the reward is currently in stock. Is **true** if the reward is in stock. Viewers can’t redeem out of stock rewards.|
|should_redemptions_skip_request_queue|boolean|true|none|A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process.|
|redemptions_redeemed_current_stream|integer(int32) \| null|true|none|The number of redemptions redeemed during the current live stream. The number counts against the `max_per_stream_setting` limit. This field is **null** if the broadcaster’s stream isn’t live or _max\_per\_stream\_setting_ isn’t enabled.|
|cooldown_expires_at|string(date-time) \| null|true|none|The timestamp of when the cooldown period expires. Is **null** if the reward isn’t in a cooldown state. See the `global_cooldown_setting` field.|

<h2 id="tocS_CreateCustomRewardsResponse">CreateCustomRewardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomrewardsresponse"></a>
<a id="schema_CreateCustomRewardsResponse"></a>
<a id="tocScreatecustomrewardsresponse"></a>
<a id="tocscreatecustomrewardsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "title": "string",
      "prompt": "string",
      "cost": 0,
      "image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "default_image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "background_color": "string",
      "is_enabled": true,
      "is_user_input_required": true,
      "max_per_stream_setting": {
        "is_enabled": true,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": true,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": true,
        "global_cooldown_seconds": 0
      },
      "is_paused": true,
      "is_in_stock": true,
      "should_redemptions_skip_request_queue": true,
      "redemptions_redeemed_current_stream": 0,
      "cooldown_expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomReward](#schemacustomreward)]|true|none|A list that contains the single custom reward you created.|

<h2 id="tocS_GetCustomRewardResponse">GetCustomRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomrewardresponse"></a>
<a id="schema_GetCustomRewardResponse"></a>
<a id="tocSgetcustomrewardresponse"></a>
<a id="tocsgetcustomrewardresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "title": "string",
      "prompt": "string",
      "cost": 0,
      "image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "default_image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "background_color": "string",
      "is_enabled": true,
      "is_user_input_required": true,
      "max_per_stream_setting": {
        "is_enabled": true,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": true,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": true,
        "global_cooldown_seconds": 0
      },
      "is_paused": true,
      "is_in_stock": true,
      "should_redemptions_skip_request_queue": true,
      "redemptions_redeemed_current_stream": 0,
      "cooldown_expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomReward](#schemacustomreward)]|true|none|A list of custom rewards. The list is in ascending order by `id`. If the broadcaster hasn’t created custom rewards, the list is empty.|

<h2 id="tocS_CustomRewardRedemption">CustomRewardRedemption</h2>
<!-- backwards compatibility -->
<a id="schemacustomrewardredemption"></a>
<a id="schema_CustomRewardRedemption"></a>
<a id="tocScustomrewardredemption"></a>
<a id="tocscustomrewardredemption"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "id": "string",
  "user_id": "string",
  "user_name": "string",
  "user_login": "string",
  "reward": {
    "id": "string",
    "title": "string",
    "prompt": "string",
    "cost": 0
  },
  "user_input": "string",
  "status": "CANCELED",
  "redeemed_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID that uniquely identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|id|string|true|none|The ID that uniquely identifies this redemption..|
|user_id|string|true|none|The ID of the user that redeemed the reward.|
|user_name|string|true|none|The user’s display name.|
|user_login|string|true|none|The user’s login name.|
|reward|object|true|none|An object that describes the reward that the user redeemed.|
|user_input|string|true|none|The text that the user entered at the prompt when they redeemed the reward; otherwise, an empty string if user input was not required.|
|status|string|true|none|The state of the redemption. Possible values are:  <br>  <br>* CANCELED<br>* FULFILLED<br>* UNFULFILLED|
|redeemed_at|string(date-time)|true|none|The date and time of when the reward was redeemed, in RFC3339 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|FULFILLED|
|status|UNFULFILLED|

<h2 id="tocS_GetCustomRewardRedemptionResponse">GetCustomRewardRedemptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomrewardredemptionresponse"></a>
<a id="schema_GetCustomRewardRedemptionResponse"></a>
<a id="tocSgetcustomrewardredemptionresponse"></a>
<a id="tocsgetcustomrewardredemptionresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "user_id": "string",
      "user_name": "string",
      "user_login": "string",
      "reward": {
        "id": "string",
        "title": "string",
        "prompt": "string",
        "cost": 0
      },
      "user_input": "string",
      "status": "CANCELED",
      "redeemed_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomRewardRedemption](#schemacustomrewardredemption)]|true|none|The list of redemptions for the specified reward. The list is empty if there are no redemptions that match the redemption criteria.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_UpdateCustomRewardBody">UpdateCustomRewardBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomrewardbody"></a>
<a id="schema_UpdateCustomRewardBody"></a>
<a id="tocSupdatecustomrewardbody"></a>
<a id="tocsupdatecustomrewardbody"></a>

```json
{
  "title": "string",
  "prompt": "string",
  "cost": 0,
  "background_color": "string",
  "is_enabled": true,
  "is_user_input_required": true,
  "is_max_per_stream_enabled": true,
  "max_per_stream": 0,
  "is_max_per_user_per_stream_enabled": true,
  "max_per_user_per_stream": 0,
  "is_global_cooldown_enabled": true,
  "global_cooldown_seconds": 0,
  "is_paused": true,
  "should_redemptions_skip_request_queue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The reward’s title. The title may contain a maximum of 45 characters and it must be unique amongst all of the broadcaster’s custom rewards.|
|prompt|string|false|none|The prompt shown to the viewer when they redeem the reward. Specify a prompt if `is_user_input_required` is **true**. The prompt is limited to a maximum of 200 characters.|
|cost|integer(int64)|false|none|The cost of the reward, in channel points. The minimum is 1 point.|
|background_color|string|false|none|The background color to use for the reward. Specify the color using Hex format (for example, \\#00E5CB).|
|is_enabled|boolean|false|none|A Boolean value that indicates whether the reward is enabled. Set to **true** to enable the reward. Viewers see only enabled rewards.|
|is_user_input_required|boolean|false|none|A Boolean value that determines whether users must enter information to redeem the reward. Set to **true** if user input is required. See the `prompt` field.|
|is_max_per_stream_enabled|boolean|false|none|A Boolean value that determines whether to limit the maximum number of redemptions allowed per live stream (see the `max_per_stream` field). Set to **true** to limit redemptions.|
|max_per_stream|integer(int64)|false|none|The maximum number of redemptions allowed per live stream. Applied only if `is_max_per_stream_enabled` is **true**. The minimum value is 1.|
|is_max_per_user_per_stream_enabled|boolean|false|none|A Boolean value that determines whether to limit the maximum number of redemptions allowed per user per stream (see `max_per_user_per_stream`). The minimum value is 1\. Set to **true** to limit redemptions.|
|max_per_user_per_stream|integer(int64)|false|none|The maximum number of redemptions allowed per user per stream. Applied only if `is_max_per_user_per_stream_enabled` is **true**.|
|is_global_cooldown_enabled|boolean|false|none|A Boolean value that determines whether to apply a cooldown period between redemptions. Set to **true** to apply a cooldown period. For the duration of the cooldown period, see `global_cooldown_seconds`.|
|global_cooldown_seconds|integer(int64)|false|none|The cooldown period, in seconds. Applied only if `is_global_cooldown_enabled` is **true**. The minimum value is 1; however, for it to be shown in the Twitch UX, the minimum value is 60.|
|is_paused|boolean|false|none|A Boolean value that determines whether to pause the reward. Set to **true** to pause the reward. Viewers can’t redeem paused rewards..|
|should_redemptions_skip_request_queue|boolean|false|none|A Boolean value that determines whether redemptions should be set to FULFILLED status immediately when a reward is redeemed. If **false**, status is set to UNFULFILLED and follows the normal request queue process.|

<h2 id="tocS_UpdateCustomRewardResponse">UpdateCustomRewardResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomrewardresponse"></a>
<a id="schema_UpdateCustomRewardResponse"></a>
<a id="tocSupdatecustomrewardresponse"></a>
<a id="tocsupdatecustomrewardresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "title": "string",
      "prompt": "string",
      "cost": 0,
      "image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "default_image": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "background_color": "string",
      "is_enabled": true,
      "is_user_input_required": true,
      "max_per_stream_setting": {
        "is_enabled": true,
        "max_per_stream": 0
      },
      "max_per_user_per_stream_setting": {
        "is_enabled": true,
        "max_per_user_per_stream": 0
      },
      "global_cooldown_setting": {
        "is_enabled": true,
        "global_cooldown_seconds": 0
      },
      "is_paused": true,
      "is_in_stock": true,
      "should_redemptions_skip_request_queue": true,
      "redemptions_redeemed_current_stream": 0,
      "cooldown_expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomReward](#schemacustomreward)]|true|none|The list contains the single reward that you updated.|

<h2 id="tocS_UpdateRedemptionStatusBody">UpdateRedemptionStatusBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateredemptionstatusbody"></a>
<a id="schema_UpdateRedemptionStatusBody"></a>
<a id="tocSupdateredemptionstatusbody"></a>
<a id="tocsupdateredemptionstatusbody"></a>

```json
{
  "status": "CANCELED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status to set the redemption to. Possible values are:  <br>  <br>* CANCELED<br>* FULFILLED<br>  <br>Setting the status to CANCELED refunds the user’s channel points.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|FULFILLED|

<h2 id="tocS_UpdateRedemptionStatusResponse">UpdateRedemptionStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateredemptionstatusresponse"></a>
<a id="schema_UpdateRedemptionStatusResponse"></a>
<a id="tocSupdateredemptionstatusresponse"></a>
<a id="tocsupdateredemptionstatusresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "id": "string",
      "user_id": "string",
      "user_name": "string",
      "user_login": "string",
      "reward": {
        "id": "string",
        "title": "string",
        "prompt": "string",
        "cost": 0
      },
      "user_input": "string",
      "status": "CANCELED",
      "redeemed_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomRewardRedemption](#schemacustomrewardredemption)]|true|none|The list contains the single redemption that you updated.|

<h2 id="tocS_CharityCampaign">CharityCampaign</h2>
<!-- backwards compatibility -->
<a id="schemacharitycampaign"></a>
<a id="schema_CharityCampaign"></a>
<a id="tocScharitycampaign"></a>
<a id="tocscharitycampaign"></a>

```json
{
  "id": "string",
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "charity_name": "string",
  "charity_description": "string",
  "charity_logo": "string",
  "charity_website": "string",
  "current_amount": {
    "value": 0,
    "decimal_places": 0,
    "currency": "string"
  },
  "target_amount": {
    "value": 0,
    "decimal_places": 0,
    "currency": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the charity campaign.|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster that’s running the campaign.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|charity_name|string|true|none|The charity’s name.|
|charity_description|string|true|none|A description of the charity.|
|charity_logo|string|true|none|A URL to an image of the charity’s logo. The image’s type is PNG and its size is 100px X 100px.|
|charity_website|string|true|none|A URL to the charity’s website.|
|current_amount|object|true|none|The current amount of donations that the campaign has received.|
|target_amount|object|true|none|The campaign’s fundraising goal. This field is **null** if the broadcaster has not defined a fundraising goal.|

<h2 id="tocS_GetCharityCampaignResponse">GetCharityCampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcharitycampaignresponse"></a>
<a id="schema_GetCharityCampaignResponse"></a>
<a id="tocSgetcharitycampaignresponse"></a>
<a id="tocsgetcharitycampaignresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "charity_name": "string",
      "charity_description": "string",
      "charity_logo": "string",
      "charity_website": "string",
      "current_amount": {
        "value": 0,
        "decimal_places": 0,
        "currency": "string"
      },
      "target_amount": {
        "value": 0,
        "decimal_places": 0,
        "currency": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CharityCampaign](#schemacharitycampaign)]|true|none|A list that contains the charity campaign that the broadcaster is currently running. The list is empty if the broadcaster is not running a charity campaign; the campaign information is not available after the campaign ends.|

<h2 id="tocS_CharityCampaignDonation">CharityCampaignDonation</h2>
<!-- backwards compatibility -->
<a id="schemacharitycampaigndonation"></a>
<a id="schema_CharityCampaignDonation"></a>
<a id="tocScharitycampaigndonation"></a>
<a id="tocscharitycampaigndonation"></a>

```json
{
  "id": "string",
  "campaign_id": "string",
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "amount": {
    "value": 0,
    "decimal_places": 0,
    "currency": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the donation. The ID is unique across campaigns.|
|campaign_id|string|true|none|An ID that identifies the charity campaign that the donation applies to.|
|user_id|string|true|none|An ID that identifies a user that donated money to the campaign.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|
|amount|object|true|none|An object that contains the amount of money that the user donated.|

<h2 id="tocS_GetCharityCampaignDonationsResponse">GetCharityCampaignDonationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcharitycampaigndonationsresponse"></a>
<a id="schema_GetCharityCampaignDonationsResponse"></a>
<a id="tocSgetcharitycampaigndonationsresponse"></a>
<a id="tocsgetcharitycampaigndonationsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "campaign_id": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "amount": {
        "value": 0,
        "decimal_places": 0,
        "currency": "string"
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CharityCampaignDonation](#schemacharitycampaigndonation)]|true|none|A list that contains the donations that users have made to the broadcaster’s charity campaign. The list is empty if the broadcaster is not currently running a charity campaign; the donation information is not available after the campaign ends.|
|pagination|object|false|none|An object that contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_Chatter">Chatter</h2>
<!-- backwards compatibility -->
<a id="schemachatter"></a>
<a id="schema_Chatter"></a>
<a id="tocSchatter"></a>
<a id="tocschatter"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of a user that’s connected to the broadcaster’s chat room.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|

<h2 id="tocS_GetChattersResponse">GetChattersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchattersresponse"></a>
<a id="schema_GetChattersResponse"></a>
<a id="tocSgetchattersresponse"></a>
<a id="tocsgetchattersresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  },
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Chatter](#schemachatter)]|true|none|The list of users that are connected to the broadcaster’s chat room. The list is empty if no users are connected to the chat room.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|total|integer(int32)|true|none|The total number of users that are connected to the broadcaster’s chat room. As you page through the list, the number of users may change as users join and leave the chat room.|

<h2 id="tocS_ChannelEmote">ChannelEmote</h2>
<!-- backwards compatibility -->
<a id="schemachannelemote"></a>
<a id="schema_ChannelEmote"></a>
<a id="tocSchannelemote"></a>
<a id="tocschannelemote"></a>

```json
{
  "id": "string",
  "name": "string",
  "images": {
    "url_1x": "string",
    "url_2x": "string",
    "url_4x": "string"
  },
  "tier": "string",
  "emote_type": "bitstier",
  "emote_set_id": "string",
  "format": [
    "animated"
  ],
  "scale": [
    "1.0"
  ],
  "theme_mode": [
    "dark"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this emote.|
|name|string|true|none|The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.|
|images|object|true|none|The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.  <br>  <br>**NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.|
|tier|string|true|none|The subscriber tier at which the emote is unlocked. This field contains the tier information only if `emote_type` is set to `subscriptions`, otherwise, it's an empty string.|
|emote_type|string|true|none|The type of emote. The possible values are:  <br>  <br>* bitstier — A custom Bits tier emote.<br>* follower — A custom follower emote.<br>* subscriptions — A custom subscriber emote.|
|emote_set_id|string|true|none|An ID that identifies the emote set that the emote belongs to.|
|format|[string]|true|none|The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:  <br>  <br>* animated — An animated GIF is available for this emote.<br>* static — A static PNG file is available for this emote.|
|scale|[string]|true|none|The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:  <br>  <br>* 1.0 — A small version (28px x 28px) is available.<br>* 2.0 — A medium version (56px x 56px) is available.<br>* 3.0 — A large version (112px x 112px) is available.|
|theme_mode|[string]|true|none|The background themes that the emote is available in. Possible themes are:  <br>  <br>* dark<br>* light|

#### Enumerated Values

|Property|Value|
|---|---|
|emote_type|bitstier|
|emote_type|follower|
|emote_type|subscriptions|
|format|animated|
|format|static|
|scale|1.0|
|scale|2.0|
|scale|3.0|
|theme_mode|dark|
|theme_mode|light|

<h2 id="tocS_GetChannelEmotesResponse">GetChannelEmotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelemotesresponse"></a>
<a id="schema_GetChannelEmotesResponse"></a>
<a id="tocSgetchannelemotesresponse"></a>
<a id="tocsgetchannelemotesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "images": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "tier": "string",
      "emote_type": "bitstier",
      "emote_set_id": "string",
      "format": [
        "animated"
      ],
      "scale": [
        "1.0"
      ],
      "theme_mode": [
        "dark"
      ]
    }
  ],
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChannelEmote](#schemachannelemote)]|true|none|The list of emotes that the specified broadcaster created. If the broadcaster hasn't created custom emotes, the list is empty.|
|template|string|true|none|A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object.|

<h2 id="tocS_GlobalEmote">GlobalEmote</h2>
<!-- backwards compatibility -->
<a id="schemaglobalemote"></a>
<a id="schema_GlobalEmote"></a>
<a id="tocSglobalemote"></a>
<a id="tocsglobalemote"></a>

```json
{
  "id": "string",
  "name": "string",
  "images": {
    "url_1x": "string",
    "url_2x": "string",
    "url_4x": "string"
  },
  "format": [
    "animated"
  ],
  "scale": [
    "1.0"
  ],
  "theme_mode": [
    "dark"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this emote.|
|name|string|true|none|The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.|
|images|object|true|none|The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.  <br>  <br>**NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.|
|format|[string]|true|none|The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:  <br>  <br>* animated — An animated GIF is available for this emote.<br>* static — A static PNG file is available for this emote.|
|scale|[string]|true|none|The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:  <br>  <br>* 1.0 — A small version (28px x 28px) is available.<br>* 2.0 — A medium version (56px x 56px) is available.<br>* 3.0 — A large version (112px x 112px) is available.|
|theme_mode|[string]|true|none|The background themes that the emote is available in. Possible themes are:  <br>  <br>* dark<br>* light|

#### Enumerated Values

|Property|Value|
|---|---|
|format|animated|
|format|static|
|scale|1.0|
|scale|2.0|
|scale|3.0|
|theme_mode|dark|
|theme_mode|light|

<h2 id="tocS_GetGlobalEmotesResponse">GetGlobalEmotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetglobalemotesresponse"></a>
<a id="schema_GetGlobalEmotesResponse"></a>
<a id="tocSgetglobalemotesresponse"></a>
<a id="tocsgetglobalemotesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "images": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "format": [
        "animated"
      ],
      "scale": [
        "1.0"
      ],
      "theme_mode": [
        "dark"
      ]
    }
  ],
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GlobalEmote](#schemaglobalemote)]|true|none|The list of global emotes.|
|template|string|true|none|A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object.|

<h2 id="tocS_Emote">Emote</h2>
<!-- backwards compatibility -->
<a id="schemaemote"></a>
<a id="schema_Emote"></a>
<a id="tocSemote"></a>
<a id="tocsemote"></a>

```json
{
  "id": "string",
  "name": "string",
  "images": {
    "url_1x": "string",
    "url_2x": "string",
    "url_4x": "string"
  },
  "emote_type": "bitstier",
  "emote_set_id": "string",
  "owner_id": "string",
  "format": [
    "animated"
  ],
  "scale": [
    "1.0"
  ],
  "theme_mode": [
    "dark"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that uniquely identifies this emote.|
|name|string|true|none|The name of the emote. This is the name that viewers type in the chat window to get the emote to appear.|
|images|object|true|none|The image URLs for the emote. These image URLs always provide a static, non-animated emote image with a light background.  <br>  <br>**NOTE:** You should use the templated URL in the `template` field to fetch the image instead of using these URLs.|
|emote_type|string|true|none|The type of emote. The possible values are:   <br>  <br>* bitstier — A Bits tier emote.<br>* follower — A follower emote.<br>* subscriptions — A subscriber emote.|
|emote_set_id|string|true|none|An ID that identifies the emote set that the emote belongs to.|
|owner_id|string|true|none|The ID of the broadcaster who owns the emote.|
|format|[string]|true|none|The formats that the emote is available in. For example, if the emote is available only as a static PNG, the array contains only `static`. But if the emote is available as a static PNG and an animated GIF, the array contains `static` and `animated`. The possible formats are:   <br>  <br>* animated — An animated GIF is available for this emote.<br>* static — A static PNG file is available for this emote.|
|scale|[string]|true|none|The sizes that the emote is available in. For example, if the emote is available in small and medium sizes, the array contains 1.0 and 2.0\. Possible sizes are:   <br>  <br>* 1.0 — A small version (28px x 28px) is available.<br>* 2.0 — A medium version (56px x 56px) is available.<br>* 3.0 — A large version (112px x 112px) is available.|
|theme_mode|[string]|true|none|The background themes that the emote is available in. Possible themes are:   <br>  <br>* dark<br>* light|

#### Enumerated Values

|Property|Value|
|---|---|
|emote_type|bitstier|
|emote_type|follower|
|emote_type|subscriptions|
|format|animated|
|format|static|
|scale|1.0|
|scale|2.0|
|scale|3.0|
|theme_mode|dark|
|theme_mode|light|

<h2 id="tocS_GetEmoteSetsResponse">GetEmoteSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemotesetsresponse"></a>
<a id="schema_GetEmoteSetsResponse"></a>
<a id="tocSgetemotesetsresponse"></a>
<a id="tocsgetemotesetsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "images": {
        "url_1x": "string",
        "url_2x": "string",
        "url_4x": "string"
      },
      "emote_type": "bitstier",
      "emote_set_id": "string",
      "owner_id": "string",
      "format": [
        "animated"
      ],
      "scale": [
        "1.0"
      ],
      "theme_mode": [
        "dark"
      ]
    }
  ],
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Emote](#schemaemote)]|true|none|The list of emotes found in the specified emote sets. The list is empty if none of the IDs were found. The list is in the same order as the set IDs specified in the request. Each set contains one or more emoticons.|
|template|string|true|none|A templated URL. Use the values from the `id`, `format`, `scale`, and `theme_mode` fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote. For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL format](https://dev.twitch.tv/docs/irc/emotes#cdn-template). You should use this template instead of using the URLs in the `images` object.|

<h2 id="tocS_ChatBadge">ChatBadge</h2>
<!-- backwards compatibility -->
<a id="schemachatbadge"></a>
<a id="schema_ChatBadge"></a>
<a id="tocSchatbadge"></a>
<a id="tocschatbadge"></a>

```json
{
  "set_id": "string",
  "versions": [
    {
      "id": "string",
      "image_url_1x": "string",
      "image_url_2x": "string",
      "image_url_4x": "string",
      "title": "string",
      "description": "string",
      "click_action": "string",
      "click_url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|set_id|string|true|none|An ID that identifies this set of chat badges. For example, Bits or Subscriber.|
|versions|[object]|true|none|The list of chat badges in this set.|

<h2 id="tocS_GetChannelChatBadgesResponse">GetChannelChatBadgesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelchatbadgesresponse"></a>
<a id="schema_GetChannelChatBadgesResponse"></a>
<a id="tocSgetchannelchatbadgesresponse"></a>
<a id="tocsgetchannelchatbadgesresponse"></a>

```json
{
  "data": [
    {
      "set_id": "string",
      "versions": [
        {
          "id": "string",
          "image_url_1x": "string",
          "image_url_2x": "string",
          "image_url_4x": "string",
          "title": "string",
          "description": "string",
          "click_action": "string",
          "click_url": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChatBadge](#schemachatbadge)]|true|none|The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`.|

<h2 id="tocS_GetGlobalChatBadgesResponse">GetGlobalChatBadgesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetglobalchatbadgesresponse"></a>
<a id="schema_GetGlobalChatBadgesResponse"></a>
<a id="tocSgetglobalchatbadgesresponse"></a>
<a id="tocsgetglobalchatbadgesresponse"></a>

```json
{
  "data": [
    {
      "set_id": "string",
      "versions": [
        {
          "id": "string",
          "image_url_1x": "string",
          "image_url_2x": "string",
          "image_url_4x": "string",
          "title": "string",
          "description": "string",
          "click_action": "string",
          "click_url": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChatBadge](#schemachatbadge)]|true|none|The list of chat badges. The list is sorted in ascending order by `set_id`, and within a set, the list is sorted in ascending order by `id`.|

<h2 id="tocS_ChatSettings">ChatSettings</h2>
<!-- backwards compatibility -->
<a id="schemachatsettings"></a>
<a id="schema_ChatSettings"></a>
<a id="tocSchatsettings"></a>
<a id="tocschatsettings"></a>

```json
{
  "broadcaster_id": "string",
  "emote_mode": true,
  "follower_mode": true,
  "follower_mode_duration": 0,
  "moderator_id": "string",
  "non_moderator_chat_delay": true,
  "non_moderator_chat_delay_duration": 0,
  "slow_mode": true,
  "slow_mode_wait_time": 0,
  "subscriber_mode": true,
  "unique_chat_mode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster specified in the request.|
|emote_mode|boolean|true|none|A Boolean value that determines whether chat messages must contain only emotes. Is **true** if chat messages may contain only emotes; otherwise, **false**.|
|follower_mode|boolean|true|none|A Boolean value that determines whether the broadcaster restricts the chat room to followers only.  <br>  <br>Is **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.  <br>  <br>See the `follower_mode_duration` field for how long users must follow the broadcaster before being able to participate in the chat room.|
|follower_mode_duration|integer(int32) \| null|true|none|The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is **null** if `follower_mode` is **false**.|
|moderator_id|string|false|none|The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope.|
|non_moderator_chat_delay|boolean|false|none|A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is **true** if the broadcaster applies a delay; otherwise, **false**.  <br>  <br>The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope and the user in the _moderator\_id_ query parameter is one of the broadcaster’s moderators.|
|non_moderator_chat_delay_duration|integer(int32) \| null|false|none|The amount of time, in seconds, that messages are delayed before appearing in chat. Is **null** if `non_moderator_chat_delay` is **false**.  <br>  <br>The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope and the user in the _moderator\_id_ query parameter is one of the broadcaster’s moderators.|
|slow_mode|boolean|true|none|A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.  <br>  <br>Is **true** if the broadcaster applies a delay; otherwise, **false**.  <br>  <br>See the `slow_mode_wait_time` field for the delay.|
|slow_mode_wait_time|integer(int32) \| null|true|none|The amount of time, in seconds, that users must wait between sending messages.  <br>  <br>Is **null** if slow\_mode is **false**.|
|subscriber_mode|boolean|true|none|A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.  <br>  <br>Is **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.|
|unique_chat_mode|boolean|true|none|A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.  <br>  <br>Is **true** if the broadcaster requires unique messages only; otherwise, **false**.|

<h2 id="tocS_GetChatSettingsResponse">GetChatSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchatsettingsresponse"></a>
<a id="schema_GetChatSettingsResponse"></a>
<a id="tocSgetchatsettingsresponse"></a>
<a id="tocsgetchatsettingsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "emote_mode": true,
      "follower_mode": true,
      "follower_mode_duration": 0,
      "moderator_id": "string",
      "non_moderator_chat_delay": true,
      "non_moderator_chat_delay_duration": 0,
      "slow_mode": true,
      "slow_mode_wait_time": 0,
      "subscriber_mode": true,
      "unique_chat_mode": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChatSettings](#schemachatsettings)]|true|none|The list of chat settings. The list contains a single object with all the settings.|

<h2 id="tocS_GetSharedChatSessionResponse">GetSharedChatSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsharedchatsessionresponse"></a>
<a id="schema_GetSharedChatSessionResponse"></a>
<a id="tocSgetsharedchatsessionresponse"></a>
<a id="tocsgetsharedchatsessionresponse"></a>

```json
{
  "data": [
    {
      "session_id": "string",
      "host_broadcaster_id": "string",
      "participants": [
        {
          "broadcaster_id": "string"
        }
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_GetUserEmotesResponse">GetUserEmotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuseremotesresponse"></a>
<a id="schema_GetUserEmotesResponse"></a>
<a id="tocSgetuseremotesresponse"></a>
<a id="tocsgetuseremotesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "emote_type": "none",
      "emote_set_id": "string",
      "owner_id": "string",
      "format": [
        "string"
      ],
      "scale": [
        "string"
      ],
      "theme_mode": [
        "string"
      ]
    }
  ],
  "template": "string",
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|template|string|true|none|A templated URL. Uses the values from the _id_, _format_, _scale_, and _theme\_mode_ fields to replace the like-named placeholder strings in the templated URL to create a CDN (content delivery network) URL that you use to fetch the emote.   <br>  <br> For information about what the template looks like and how to use it to fetch emotes, see [Emote CDN URL](https://dev.twitch.tv/docs/irc/emotes#cdn-template) format.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.   <br>  <br> For more information about pagination support, see [Twitch API Guide - Pagination](https://dev.twitch.tv/docs/api/guide#pagination).|

<h2 id="tocS_UpdateChatSettingsBody">UpdateChatSettingsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechatsettingsbody"></a>
<a id="schema_UpdateChatSettingsBody"></a>
<a id="tocSupdatechatsettingsbody"></a>
<a id="tocsupdatechatsettingsbody"></a>

```json
{
  "emote_mode": true,
  "follower_mode": true,
  "follower_mode_duration": 0,
  "non_moderator_chat_delay": true,
  "non_moderator_chat_delay_duration": 2,
  "slow_mode": true,
  "slow_mode_wait_time": 0,
  "subscriber_mode": true,
  "unique_chat_mode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emote_mode|boolean|false|none|A Boolean value that determines whether chat messages must contain only emotes.  <br>  <br>Set to **true** if only emotes are allowed; otherwise, **false**. The default is **false**.|
|follower_mode|boolean|false|none|A Boolean value that determines whether the broadcaster restricts the chat room to followers only.  <br>  <br>Set to **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**. The default is **true**.  <br>  <br>To specify how long users must follow the broadcaster before being able to participate in the chat room, see the `follower_mode_duration` field.|
|follower_mode_duration|integer(int32)|false|none|The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Set only if `follower_mode` is **true**. Possible values are: 0 (no restriction) through 129600 (3 months). The default is 0.|
|non_moderator_chat_delay|boolean|false|none|A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message.  <br>  <br>Set to **true** if the broadcaster applies a delay; otherwise, **false**. The default is **false**.  <br>  <br>To specify the length of the delay, see the `non_moderator_chat_delay_duration` field.|
|non_moderator_chat_delay_duration|integer(int32)|false|none|The amount of time, in seconds, that messages are delayed before appearing in chat. Set only if `non_moderator_chat_delay` is **true**. Possible values are:  <br>  <br>* 2 — 2 second delay (recommended)<br>* 4 — 4 second delay<br>* 6 — 6 second delay|
|slow_mode|boolean|false|none|A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages. Set to **true** if the broadcaster applies a wait period between messages; otherwise, **false**. The default is **false**.  <br>  <br>To specify the delay, see the `slow_mode_wait_time` field.|
|slow_mode_wait_time|integer(int32)|false|none|The amount of time, in seconds, that users must wait between sending messages. Set only if `slow_mode` is **true**.  <br>  <br>Possible values are: 3 (3 second delay) through 120 (2 minute delay). The default is 30 seconds.|
|subscriber_mode|boolean|false|none|A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.  <br>  <br>Set to **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**. The default is **false**.|
|unique_chat_mode|boolean|false|none|A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.  <br>  <br>Set to **true** if the broadcaster allows only unique messages; otherwise, **false**. The default is **false**.|

#### Enumerated Values

|Property|Value|
|---|---|
|non_moderator_chat_delay_duration|2|
|non_moderator_chat_delay_duration|4|
|non_moderator_chat_delay_duration|6|

<h2 id="tocS_ChatSettingsUpdated">ChatSettingsUpdated</h2>
<!-- backwards compatibility -->
<a id="schemachatsettingsupdated"></a>
<a id="schema_ChatSettingsUpdated"></a>
<a id="tocSchatsettingsupdated"></a>
<a id="tocschatsettingsupdated"></a>

```json
{
  "broadcaster_id": "string",
  "emote_mode": true,
  "follower_mode": true,
  "follower_mode_duration": 0,
  "moderator_id": "string",
  "non_moderator_chat_delay": true,
  "non_moderator_chat_delay_duration": 0,
  "slow_mode": true,
  "slow_mode_wait_time": 0,
  "subscriber_mode": true,
  "unique_chat_mode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster specified in the request.|
|emote_mode|boolean|true|none|A Boolean value that determines whether chat messages must contain only emotes. Is **true** if chat messages may contain only emotes; otherwise, **false**.|
|follower_mode|boolean|true|none|A Boolean value that determines whether the broadcaster restricts the chat room to followers only.  <br>  <br>Is **true** if the broadcaster restricts the chat room to followers only; otherwise, **false**.  <br>  <br>See the `follower_mode_duration` field for how long users must follow the broadcaster before being able to participate in the chat room.|
|follower_mode_duration|integer(int32) \| null|true|none|The length of time, in minutes, that users must follow the broadcaster before being able to participate in the chat room. Is **null** if `follower_mode` is **false**.|
|moderator_id|string|false|none|The moderator’s ID. The response includes this field only if the request specifies a user access token that includes the **moderator:read:chat\_settings** scope.|
|non_moderator_chat_delay|boolean|true|none|A Boolean value that determines whether the broadcaster adds a short delay before chat messages appear in the chat room. This gives chat moderators and bots a chance to remove them before viewers can see the message. See the `non_moderator_chat_delay_duration` field for the length of the delay. Is **true** if the broadcaster applies a delay; otherwise, **false**.|
|non_moderator_chat_delay_duration|integer(int32) \| null|true|none|The amount of time, in seconds, that messages are delayed before appearing in chat. Is **null** if `non_moderator_chat_delay` is **false**.|
|slow_mode|boolean|true|none|A Boolean value that determines whether the broadcaster limits how often users in the chat room are allowed to send messages.  <br>  <br>Is **true** if the broadcaster applies a delay; otherwise, **false**.  <br>  <br>See the `slow_mode_wait_time` field for the delay.|
|slow_mode_wait_time|integer(int32) \| null|true|none|The amount of time, in seconds, that users must wait between sending messages.  <br>  <br>Is **null** if slow\_mode is **false**.|
|subscriber_mode|boolean|true|none|A Boolean value that determines whether only users that subscribe to the broadcaster’s channel may talk in the chat room.  <br>  <br>Is **true** if the broadcaster restricts the chat room to subscribers only; otherwise, **false**.|
|unique_chat_mode|boolean|true|none|A Boolean value that determines whether the broadcaster requires users to post only unique messages in the chat room.  <br>  <br>Is **true** if the broadcaster requires unique messages only; otherwise, **false**.|

<h2 id="tocS_UpdateChatSettingsResponse">UpdateChatSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechatsettingsresponse"></a>
<a id="schema_UpdateChatSettingsResponse"></a>
<a id="tocSupdatechatsettingsresponse"></a>
<a id="tocsupdatechatsettingsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "emote_mode": true,
      "follower_mode": true,
      "follower_mode_duration": 0,
      "moderator_id": "string",
      "non_moderator_chat_delay": true,
      "non_moderator_chat_delay_duration": 0,
      "slow_mode": true,
      "slow_mode_wait_time": 0,
      "subscriber_mode": true,
      "unique_chat_mode": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChatSettingsUpdated](#schemachatsettingsupdated)]|true|none|The list of chat settings. The list contains a single object with all the settings.|

<h2 id="tocS_SendChatAnnouncementBody">SendChatAnnouncementBody</h2>
<!-- backwards compatibility -->
<a id="schemasendchatannouncementbody"></a>
<a id="schema_SendChatAnnouncementBody"></a>
<a id="tocSsendchatannouncementbody"></a>
<a id="tocssendchatannouncementbody"></a>

```json
{
  "message": "string",
  "color": "primary",
  "for_source_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The announcement to make in the broadcaster’s chat room. Announcements are limited to a maximum of 500 characters; announcements longer than 500 characters are truncated.|
|color|string|false|none|The color used to highlight the announcement. Possible case-sensitive values are:  <br>  <br>* blue<br>* green<br>* orange<br>* purple<br>* primary (default)<br>  <br>If `color` is set to _primary_ or is not set, the channel’s accent color is used to highlight the announcement (see **Profile Accent Color** under [profile settings](https://www.twitch.tv/settings/profile), **Channel and Videos**, and **Brand**).|
|for_source_only|boolean|false|none|**NOTE:** This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error.  <br>  <br>Determines if the chat announcement is sent only to the source channel (defined by _broadcaster\_id_) during a shared chat session. This has no effect if the announcement is not sent during a shared chat session.  <br>  <br>The default value when using an App Access Token is `true`. If you prefer to send an announcement to all channels in a shared chat session, set this parameter to `false`.|

#### Enumerated Values

|Property|Value|
|---|---|
|color|blue|
|color|green|
|color|orange|
|color|purple|
|color|primary|

<h2 id="tocS_SendChatMessageBody">SendChatMessageBody</h2>
<!-- backwards compatibility -->
<a id="schemasendchatmessagebody"></a>
<a id="schema_SendChatMessageBody"></a>
<a id="tocSsendchatmessagebody"></a>
<a id="tocssendchatmessagebody"></a>

```json
{
  "broadcaster_id": "string",
  "sender_id": "string",
  "message": "string",
  "reply_parent_message_id": "string",
  "for_source_only": true,
  "pin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster whose chat room the message will be sent to.|
|sender_id|string|true|none|The ID of the user sending the message. This ID must match the user ID in the user access token.|
|message|string|true|none|The message to send. The message is limited to a maximum of 500 characters. Chat messages can also include emoticons. To include emoticons, use the name of the emote. The names are case sensitive. Don’t include colons around the name (e.g., :bleedPurple:). If Twitch recognizes the name, Twitch converts the name to the emote before writing the chat message to the chat room|
|reply_parent_message_id|string|false|none|The ID of the chat message being replied to.|
|for_source_only|boolean|false|none|**NOTE:** This parameter can only be set when utilizing an App Access Token. It cannot be specified when a User Access Token is used, and will instead result in an HTTP 400 error.  <br>  <br>Determines if the chat message is sent only to the source channel (defined by _broadcaster\_id_) during a shared chat session. This has no effect if the message is not sent during a shared chat session.  <br>  <br>If this parameter is not set, the default value when using an App Access Token is `false`. On May 19, 2025 the default value for this parameter will be updated to `true`, and chat messages sent using an App Access Token will only be shared with the source channel by default. If you prefer to send a chat message to both channels in a shared chat session, make sure this parameter is explicitly set to `false` in your API request before May 19.|
|pin|boolean|false|none|NEW If true, the message will be sent and immediately pinned. Default: false. Cannot be combined with `reply_parent_message_id` or `for_source_only`. When `pin` is true, additionally requires the `moderator:manage:chat_messages` scope and the sender must be the broadcaster or a moderator. Messages pinned via this endpoint are always pinned for 20 minutes. If the pin fails, the message is not sent.|

<h2 id="tocS_SendChatMessageResponse">SendChatMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendchatmessageresponse"></a>
<a id="schema_SendChatMessageResponse"></a>
<a id="tocSsendchatmessageresponse"></a>
<a id="tocssendchatmessageresponse"></a>

```json
{
  "data": [
    {
      "message_id": "string",
      "is_sent": true,
      "drop_reason": {
        "code": "string",
        "message": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_GetPinnedChatMessageResponse">GetPinnedChatMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpinnedchatmessageresponse"></a>
<a id="schema_GetPinnedChatMessageResponse"></a>
<a id="tocSgetpinnedchatmessageresponse"></a>
<a id="tocsgetpinnedchatmessageresponse"></a>

```json
{
  "data": [
    {
      "message_id": "string",
      "broadcaster_id": "string",
      "sender_user_id": "string",
      "sender_user_login": "string",
      "sender_user_name": "string",
      "pinned_by_user_id": "string",
      "pinned_by_user_login": "string",
      "pinned_by_user_name": "string",
      "message": {
        "text": "string",
        "fragments": [
          {
            "type": "string",
            "text": "string",
            "cheermote": {},
            "prefix": "string",
            "bits": 0,
            "tier": 0,
            "emote": {},
            "id": "string",
            "emote_set_id": "string",
            "owner_id": "string",
            "format": [
              "string"
            ],
            "mention": {},
            "user_id": "string",
            "user_login": "string",
            "user_name": "string"
          }
        ]
      },
      "starts_at": "1970-01-01T00:00:00Z",
      "ends_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|Pinned messages. Empty if none pinned.|

<h2 id="tocS_UserChatColor">UserChatColor</h2>
<!-- backwards compatibility -->
<a id="schemauserchatcolor"></a>
<a id="schema_UserChatColor"></a>
<a id="tocSuserchatcolor"></a>
<a id="tocsuserchatcolor"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "color": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|An ID that uniquely identifies the user.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|
|color|string|true|none|The Hex color code that the user uses in chat for their name. If the user hasn’t specified a color in their settings, the string is empty.|

<h2 id="tocS_GetUserChatColorResponse">GetUserChatColorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserchatcolorresponse"></a>
<a id="schema_GetUserChatColorResponse"></a>
<a id="tocSgetuserchatcolorresponse"></a>
<a id="tocsgetuserchatcolorresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "color": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserChatColor](#schemauserchatcolor)]|true|none|The list of users and the color code they use for their name.|

<h2 id="tocS_CreateClipResponse">CreateClipResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclipresponse"></a>
<a id="schema_CreateClipResponse"></a>
<a id="tocScreateclipresponse"></a>
<a id="tocscreateclipresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "edit_url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list containing the created clip.|

<h2 id="tocS_CreateClipFromVODResponse">CreateClipFromVODResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclipfromvodresponse"></a>
<a id="schema_CreateClipFromVODResponse"></a>
<a id="tocScreateclipfromvodresponse"></a>
<a id="tocscreateclipfromvodresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "edit_url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list containing the created clip.|

<h2 id="tocS_Clip">Clip</h2>
<!-- backwards compatibility -->
<a id="schemaclip"></a>
<a id="schema_Clip"></a>
<a id="tocSclip"></a>
<a id="tocsclip"></a>

```json
{
  "id": "string",
  "url": "string",
  "embed_url": "string",
  "broadcaster_id": "string",
  "broadcaster_name": "string",
  "creator_id": "string",
  "creator_name": "string",
  "video_id": "string",
  "game_id": "string",
  "language": "string",
  "title": "string",
  "view_count": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "thumbnail_url": "string",
  "duration": 0,
  "vod_offset": 0,
  "is_featured": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that uniquely identifies the clip.|
|url|string|true|none|A URL to the clip.|
|embed_url|string|true|none|A URL that you can use in an iframe to embed the clip (see [Embedding Video and Clips](https://dev.twitch.tv/docs/embed/video-and-clips/)).|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster that the video was clipped from.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|creator_id|string|true|none|An ID that identifies the user that created the clip.|
|creator_name|string|true|none|The user’s display name.|
|video_id|string|true|none|An ID that identifies the video that the clip came from. This field contains an empty string if the video is not available.|
|game_id|string|true|none|The ID of the game that was being played when the clip was created.|
|language|string|true|none|The ISO 639-1 two-letter language code that the broadcaster broadcasts in. For example, _en_ for English. The value is _other_ if the broadcaster uses a language that Twitch doesn’t support.|
|title|string|true|none|The title of the clip.|
|view_count|integer(int32)|true|none|The number of times the clip has been viewed.|
|created_at|string(date-time)|true|none|The date and time of when the clip was created. The date and time is in RFC3339 format.|
|thumbnail_url|string|true|none|A URL to a thumbnail image of the clip.|
|duration|number(float)|true|none|The length of the clip, in seconds. Precision is 0.1.|
|vod_offset|integer(int32) \| null|true|none|The zero-based offset, in seconds, to where the clip starts in the video (VOD). Is **null** if the video is not available or hasn’t been created yet from the live stream (see `video_id`).  <br>  <br>Note that there’s a delay between when a clip is created during a broadcast and when the offset is set. During the delay period, `vod_offset` is **null**. The delay is indeterminant but is typically minutes long.|
|is_featured|boolean|true|none|A Boolean value that indicates if the clip is featured or not.|

<h2 id="tocS_GetClipsResponse">GetClipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclipsresponse"></a>
<a id="schema_GetClipsResponse"></a>
<a id="tocSgetclipsresponse"></a>
<a id="tocsgetclipsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "url": "string",
      "embed_url": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "creator_id": "string",
      "creator_name": "string",
      "video_id": "string",
      "game_id": "string",
      "language": "string",
      "title": "string",
      "view_count": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "thumbnail_url": "string",
      "duration": 0,
      "vod_offset": 0,
      "is_featured": true
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Clip](#schemaclip)]|true|none|The list of video clips. For clips returned by _game\_id_ or _broadcaster\_id_, the list is in descending order by view count. For lists returned by _id_, the list is in the same order as the input IDs.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GetClipsDownloadResponse">GetClipsDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclipsdownloadresponse"></a>
<a id="schema_GetClipsDownloadResponse"></a>
<a id="tocSgetclipsdownloadresponse"></a>
<a id="tocsgetclipsdownloadresponse"></a>

```json
{
  "data": [
    {
      "clip_id": "string",
      "landscape_download_url": "string",
      "portrait_download_url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of clips and their download URLs.|

<h2 id="tocS_GetConduitsResponse">GetConduitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconduitsresponse"></a>
<a id="schema_GetConduitsResponse"></a>
<a id="tocSgetconduitsresponse"></a>
<a id="tocsgetconduitsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "shard_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of information about the client’s conduits.|

<h2 id="tocS_CreateConduitsBody">CreateConduitsBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateconduitsbody"></a>
<a id="schema_CreateConduitsBody"></a>
<a id="tocScreateconduitsbody"></a>
<a id="tocscreateconduitsbody"></a>

```json
{
  "shard_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard_count|integer(int32)|true|none|The number of shards to create for this conduit.|

<h2 id="tocS_CreateConduitsResponse">CreateConduitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconduitsresponse"></a>
<a id="schema_CreateConduitsResponse"></a>
<a id="tocScreateconduitsresponse"></a>
<a id="tocscreateconduitsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "shard_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of information about the client’s conduits.|

<h2 id="tocS_UpdateConduitsBody">UpdateConduitsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconduitsbody"></a>
<a id="schema_UpdateConduitsBody"></a>
<a id="tocSupdateconduitsbody"></a>
<a id="tocsupdateconduitsbody"></a>

```json
{
  "id": "string",
  "shard_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Conduit ID.|
|shard_count|integer(int32)|true|none|The new number of shards for this conduit.|

<h2 id="tocS_UpdateConduitsResponse">UpdateConduitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconduitsresponse"></a>
<a id="schema_UpdateConduitsResponse"></a>
<a id="tocSupdateconduitsresponse"></a>
<a id="tocsupdateconduitsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "shard_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of information about the client’s conduits.|

<h2 id="tocS_GetConduitShardsResponse">GetConduitShardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconduitshardsresponse"></a>
<a id="schema_GetConduitShardsResponse"></a>
<a id="tocSgetconduitshardsresponse"></a>
<a id="tocsgetconduitshardsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "status": "enabled",
      "transport": {
        "method": "webhook",
        "callback": "string",
        "session_id": "string",
        "connected_at": "1970-01-01T00:00:00Z",
        "disconnected_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of information about a conduit's shards.|
|pagination|object|false|none|Contains information used to page through a list of results. The object is empty if there are no more pages left to page through.|

<h2 id="tocS_UpdateConduitShardsBody">UpdateConduitShardsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconduitshardsbody"></a>
<a id="schema_UpdateConduitShardsBody"></a>
<a id="tocSupdateconduitshardsbody"></a>
<a id="tocsupdateconduitshardsbody"></a>

```json
{
  "conduit_id": "string",
  "shards": [
    {
      "id": "string",
      "transport": {
        "method": "webhook",
        "callback": "string",
        "secret": "string",
        "session_id": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conduit_id|string|true|none|Conduit ID.|
|shards|[object]|true|none|List of shards to update.|

<h2 id="tocS_UpdateConduitShardsResponse">UpdateConduitShardsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconduitshardsresponse"></a>
<a id="schema_UpdateConduitShardsResponse"></a>
<a id="tocSupdateconduitshardsresponse"></a>
<a id="tocsupdateconduitshardsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "status": "enabled",
      "transport": {
        "method": "webhook",
        "callback": "string",
        "session_id": "string",
        "connected_at": "1970-01-01T00:00:00Z",
        "disconnected_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "errors": [
    {
      "id": "string",
      "message": "string",
      "code": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of successful shard updates.|
|errors|[object]|true|none|List of unsuccessful updates.|

<h2 id="tocS_ContentClassificationLabel">ContentClassificationLabel</h2>
<!-- backwards compatibility -->
<a id="schemacontentclassificationlabel"></a>
<a id="schema_ContentClassificationLabel"></a>
<a id="tocScontentclassificationlabel"></a>
<a id="tocscontentclassificationlabel"></a>

```json
{
  "id": "string",
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the CCL.|
|description|string|true|none|Localized description of the CCL.|
|name|string|true|none|Localized name of the CCL.|

<h2 id="tocS_GetContentClassificationLabelsResponse">GetContentClassificationLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontentclassificationlabelsresponse"></a>
<a id="schema_GetContentClassificationLabelsResponse"></a>
<a id="tocSgetcontentclassificationlabelsresponse"></a>
<a id="tocsgetcontentclassificationlabelsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "description": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ContentClassificationLabel](#schemacontentclassificationlabel)]|true|none|A list that contains information about the available content classification labels.|

<h2 id="tocS_DropsEntitlement">DropsEntitlement</h2>
<!-- backwards compatibility -->
<a id="schemadropsentitlement"></a>
<a id="schema_DropsEntitlement"></a>
<a id="tocSdropsentitlement"></a>
<a id="tocsdropsentitlement"></a>

```json
{
  "id": "string",
  "benefit_id": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "user_id": "string",
  "game_id": "string",
  "fulfillment_status": "CLAIMED",
  "last_updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the entitlement.|
|benefit_id|string|true|none|An ID that identifies the benefit (reward).|
|timestamp|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the entitlement was granted.|
|user_id|string|true|none|An ID that identifies the user who was granted the entitlement.|
|game_id|string|true|none|An ID that identifies the game the user was playing when the reward was entitled.|
|fulfillment_status|string|true|none|The entitlement’s fulfillment status. Possible values are:   <br>  <br>* CLAIMED<br>* FULFILLED|
|last_updated|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the entitlement was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|fulfillment_status|CLAIMED|
|fulfillment_status|FULFILLED|

<h2 id="tocS_GetDropsEntitlementsResponse">GetDropsEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdropsentitlementsresponse"></a>
<a id="schema_GetDropsEntitlementsResponse"></a>
<a id="tocSgetdropsentitlementsresponse"></a>
<a id="tocsgetdropsentitlementsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "benefit_id": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "user_id": "string",
      "game_id": "string",
      "fulfillment_status": "CLAIMED",
      "last_updated": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DropsEntitlement](#schemadropsentitlement)]|true|none|The list of entitlements.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_UpdateDropsEntitlementsBody">UpdateDropsEntitlementsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedropsentitlementsbody"></a>
<a id="schema_UpdateDropsEntitlementsBody"></a>
<a id="tocSupdatedropsentitlementsbody"></a>
<a id="tocsupdatedropsentitlementsbody"></a>

```json
{
  "entitlement_ids": [
    "string"
  ],
  "fulfillment_status": "CLAIMED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entitlement_ids|[string]|false|none|A list of IDs that identify the entitlements to update. You may specify a maximum of 100 IDs.|
|fulfillment_status|string|false|none|The fulfillment status to set the entitlements to. Possible values are:  <br>  <br>* CLAIMED — The user claimed the benefit.<br>* FULFILLED — The developer granted the benefit that the user claimed.|

#### Enumerated Values

|Property|Value|
|---|---|
|fulfillment_status|CLAIMED|
|fulfillment_status|FULFILLED|

<h2 id="tocS_DropsEntitlementUpdated">DropsEntitlementUpdated</h2>
<!-- backwards compatibility -->
<a id="schemadropsentitlementupdated"></a>
<a id="schema_DropsEntitlementUpdated"></a>
<a id="tocSdropsentitlementupdated"></a>
<a id="tocsdropsentitlementupdated"></a>

```json
{
  "status": "INVALID_ID",
  "ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|A string that indicates whether the status of the entitlements in the `ids` field were successfully updated. Possible values are:  <br>  <br>* INVALID\_ID — The entitlement IDs in the `ids` field are not valid.<br>* NOT\_FOUND — The entitlement IDs in the `ids` field were not found.<br>* SUCCESS — The status of the entitlements in the `ids` field were successfully updated.<br>* UNAUTHORIZED — The user or organization identified by the user access token is not authorized to update the entitlements.<br>* UPDATE\_FAILED — The update failed. These are considered transient errors and the request should be retried later.|
|ids|[string]|true|none|The list of entitlements that the status in the `status` field applies to.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|INVALID_ID|
|status|NOT_FOUND|
|status|SUCCESS|
|status|UNAUTHORIZED|
|status|UPDATE_FAILED|

<h2 id="tocS_UpdateDropsEntitlementsResponse">UpdateDropsEntitlementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedropsentitlementsresponse"></a>
<a id="schema_UpdateDropsEntitlementsResponse"></a>
<a id="tocSupdatedropsentitlementsresponse"></a>
<a id="tocsupdatedropsentitlementsresponse"></a>

```json
{
  "data": [
    {
      "status": "INVALID_ID",
      "ids": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DropsEntitlementUpdated](#schemadropsentitlementupdated)]|true|none|A list that indicates which entitlements were successfully updated and those that weren’t.|

<h2 id="tocS_ExtensionConfigurationSegment">ExtensionConfigurationSegment</h2>
<!-- backwards compatibility -->
<a id="schemaextensionconfigurationsegment"></a>
<a id="schema_ExtensionConfigurationSegment"></a>
<a id="tocSextensionconfigurationsegment"></a>
<a id="tocsextensionconfigurationsegment"></a>

```json
{
  "segment": "broadcaster",
  "broadcaster_id": "string",
  "content": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|string|true|none|The type of segment. Possible values are:   <br>  <br>* broadcaster<br>* developer<br>* global|
|broadcaster_id|string|false|none|The ID of the broadcaster that installed the extension. The object includes this field only if the `segment` query parameter is set to developer or broadcaster.|
|content|string|true|none|The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.|
|version|string|true|none|The version number that identifies this definition of the segment’s data.|

#### Enumerated Values

|Property|Value|
|---|---|
|segment|broadcaster|
|segment|developer|
|segment|global|

<h2 id="tocS_GetExtensionConfigurationSegmentResponse">GetExtensionConfigurationSegmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionconfigurationsegmentresponse"></a>
<a id="schema_GetExtensionConfigurationSegmentResponse"></a>
<a id="tocSgetextensionconfigurationsegmentresponse"></a>
<a id="tocsgetextensionconfigurationsegmentresponse"></a>

```json
{
  "data": [
    {
      "segment": "broadcaster",
      "broadcaster_id": "string",
      "content": "string",
      "version": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionConfigurationSegment](#schemaextensionconfigurationsegment)]|true|none|The list of requested configuration segments. The list is returned in the same order that you specified the list of segments in the request.|

<h2 id="tocS_SetExtensionConfigurationSegmentBody">SetExtensionConfigurationSegmentBody</h2>
<!-- backwards compatibility -->
<a id="schemasetextensionconfigurationsegmentbody"></a>
<a id="schema_SetExtensionConfigurationSegmentBody"></a>
<a id="tocSsetextensionconfigurationsegmentbody"></a>
<a id="tocssetextensionconfigurationsegmentbody"></a>

```json
{
  "extension_id": "string",
  "segment": "broadcaster",
  "broadcaster_id": "string",
  "content": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension_id|string|true|none|The ID of the extension to update.|
|segment|string|true|none|The configuration segment to update. Possible case-sensitive values are:  <br>  <br>* broadcaster<br>* developer<br>* global|
|broadcaster_id|string|false|none|The ID of the broadcaster that installed the extension. Include this field only if the `segment` is set to developer or broadcaster.|
|content|string|false|none|The contents of the segment. This string may be a plain-text string or a string-encoded JSON object.|
|version|string|false|none|The version number that identifies this definition of the segment’s data. If not specified, the latest definition is updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|segment|broadcaster|
|segment|developer|
|segment|global|

<h2 id="tocS_SetExtensionRequiredConfigurationBody">SetExtensionRequiredConfigurationBody</h2>
<!-- backwards compatibility -->
<a id="schemasetextensionrequiredconfigurationbody"></a>
<a id="schema_SetExtensionRequiredConfigurationBody"></a>
<a id="tocSsetextensionrequiredconfigurationbody"></a>
<a id="tocssetextensionrequiredconfigurationbody"></a>

```json
{
  "extension_id": "string",
  "extension_version": "string",
  "required_configuration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension_id|string|true|none|The ID of the extension to update.|
|extension_version|string|true|none|The version of the extension to update.|
|required_configuration|string|true|none|The required\_configuration string to use with the extension.|

<h2 id="tocS_SendExtensionPubSubMessageBody">SendExtensionPubSubMessageBody</h2>
<!-- backwards compatibility -->
<a id="schemasendextensionpubsubmessagebody"></a>
<a id="schema_SendExtensionPubSubMessageBody"></a>
<a id="tocSsendextensionpubsubmessagebody"></a>
<a id="tocssendextensionpubsubmessagebody"></a>

```json
{
  "target": [
    "broadcast"
  ],
  "broadcaster_id": "string",
  "is_global_broadcast": true,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[string]|true|none|The target of the message. Possible values are:  <br>  <br>* broadcast<br>* global<br>* whisper-<user-id><br>  <br>If `is_global_broadcast` is **true**, you must set this field to global. The broadcast and global values are mutually exclusive; specify only one of them.|
|broadcaster_id|string|true|none|The ID of the broadcaster to send the message to. Don’t include this field if `is_global_broadcast` is set to **true**.|
|is_global_broadcast|boolean|false|none|A Boolean value that determines whether the message should be sent to all channels where your extension is active. Set to **true** if the message should be sent to all channels. The default is **false**.|
|message|string|true|none|The message to send. The message can be a plain-text string or a string-encoded JSON object. The message is limited to a maximum of 5 KB.|

#### Enumerated Values

|Property|Value|
|---|---|
|target|broadcast|
|target|global|
|target|whisper-<user-id>|

<h2 id="tocS_ExtensionLiveChannel">ExtensionLiveChannel</h2>
<!-- backwards compatibility -->
<a id="schemaextensionlivechannel"></a>
<a id="schema_ExtensionLiveChannel"></a>
<a id="tocSextensionlivechannel"></a>
<a id="tocsextensionlivechannel"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_name": "string",
  "game_name": "string",
  "game_id": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster that is streaming live and has installed or activated the extension.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|game_name|string|true|none|The name of the category or game being streamed.|
|game_id|string|true|none|The ID of the category or game being streamed.|
|title|string|true|none|The title of the broadcaster’s stream. May be an empty string if not specified.|

<h2 id="tocS_GetExtensionLiveChannelsResponse">GetExtensionLiveChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionlivechannelsresponse"></a>
<a id="schema_GetExtensionLiveChannelsResponse"></a>
<a id="tocSgetextensionlivechannelsresponse"></a>
<a id="tocsgetextensionlivechannelsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "game_name": "string",
      "game_id": "string",
      "title": "string"
    }
  ],
  "pagination": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionLiveChannel](#schemaextensionlivechannel)]|true|none|The list of broadcasters that are streaming live and that have installed or activated the extension.|
|pagination|string|false|none|This field contains the cursor used to page through the results. The field is empty if there are no more pages left to page through. Note that this field is a string compared to other endpoints that use a **Pagination** object. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_ExtensionSecret">ExtensionSecret</h2>
<!-- backwards compatibility -->
<a id="schemaextensionsecret"></a>
<a id="schema_ExtensionSecret"></a>
<a id="tocSextensionsecret"></a>
<a id="tocsextensionsecret"></a>

```json
{
  "format_version": 0,
  "secrets": [
    {
      "content": "string",
      "active_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format_version|integer(int32)|true|none|The version number that identifies this definition of the secret’s data.|
|secrets|[object]|true|none|The list of secrets.|

<h2 id="tocS_GetExtensionSecretsResponse">GetExtensionSecretsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionsecretsresponse"></a>
<a id="schema_GetExtensionSecretsResponse"></a>
<a id="tocSgetextensionsecretsresponse"></a>
<a id="tocsgetextensionsecretsresponse"></a>

```json
{
  "data": [
    {
      "format_version": 0,
      "secrets": [
        {
          "content": "string",
          "active_at": "1970-01-01T00:00:00Z",
          "expires_at": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionSecret](#schemaextensionsecret)]|true|none|The list of shared secrets that the extension created.|

<h2 id="tocS_CreateExtensionSecretResponse">CreateExtensionSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateextensionsecretresponse"></a>
<a id="schema_CreateExtensionSecretResponse"></a>
<a id="tocScreateextensionsecretresponse"></a>
<a id="tocscreateextensionsecretresponse"></a>

```json
{
  "data": [
    {
      "format_version": 0,
      "secrets": [
        {
          "content": "string",
          "active_at": "1970-01-01T00:00:00Z",
          "expires_at": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionSecret](#schemaextensionsecret)]|true|none|A list that contains the newly added secrets.|

<h2 id="tocS_SendExtensionChatMessageBody">SendExtensionChatMessageBody</h2>
<!-- backwards compatibility -->
<a id="schemasendextensionchatmessagebody"></a>
<a id="schema_SendExtensionChatMessageBody"></a>
<a id="tocSsendextensionchatmessagebody"></a>
<a id="tocssendextensionchatmessagebody"></a>

```json
{
  "text": "string",
  "extension_id": "string",
  "extension_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The message. The message may contain a maximum of 280 characters.|
|extension_id|string|true|none|The ID of the extension that’s sending the chat message.|
|extension_version|string|true|none|The extension’s version number.|

<h2 id="tocS_ExtensionIconUrls">ExtensionIconUrls</h2>
<!-- backwards compatibility -->
<a id="schemaextensioniconurls"></a>
<a id="schema_ExtensionIconUrls"></a>
<a id="tocSextensioniconurls"></a>
<a id="tocsextensioniconurls"></a>

```json
{
  "100x100": "string",
  "24x24": "string",
  "300x200": "string"
}
```

A dictionary that contains URLs to different sizes of the default icon. The dictionary’s key identifies the icon’s size (for example, 24x24), and the dictionary’s value contains the URL to the icon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|100x100|string|false|none|none|
|24x24|string|false|none|none|
|300x200|string|false|none|none|

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
{
  "author_name": "string",
  "bits_enabled": true,
  "can_install": true,
  "configuration_location": "hosted",
  "description": "string",
  "eula_tos_url": "string",
  "has_chat_support": true,
  "icon_url": "string",
  "icon_urls": {
    "100x100": "string",
    "24x24": "string",
    "300x200": "string"
  },
  "id": "string",
  "name": "string",
  "privacy_policy_url": "string",
  "request_identity_link": true,
  "screenshot_urls": [
    "string"
  ],
  "state": "Approved",
  "subscriptions_support_level": "none",
  "summary": "string",
  "support_email": "string",
  "version": "string",
  "viewer_summary": "string",
  "views": {
    "mobile": {
      "viewer_url": "string"
    },
    "panel": {
      "viewer_url": "string",
      "height": 0,
      "can_link_external_content": true
    },
    "video_overlay": {
      "viewer_url": "string",
      "can_link_external_content": true
    },
    "component": {
      "viewer_url": "string",
      "aspect_ratio_x": 0,
      "aspect_ratio_y": 0,
      "autoscale": true,
      "scale_pixels": 0,
      "target_height": 0,
      "can_link_external_content": true
    },
    "config": {
      "viewer_url": "string",
      "can_link_external_content": true
    }
  },
  "allowlisted_config_urls": [
    "string"
  ],
  "allowlisted_panel_urls": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author_name|string|true|none|The name of the user or organization that owns the extension.|
|bits_enabled|boolean|true|none|A Boolean value that determines whether the extension has features that use Bits. Is **true** if the extension has features that use Bits.|
|can_install|boolean|true|none|A Boolean value that determines whether a user can install the extension on their channel. Is **true** if a user can install the extension.  <br>  <br>Typically, this is set to **false** if the extension is currently in testing mode and requires users to be allowlisted (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Access**).|
|configuration_location|string|true|none|The location of where the extension’s configuration is stored. Possible values are:  <br>  <br>* hosted — The Extensions Configuration Service hosts the configuration.<br>* custom — The Extension Backend Service (EBS) hosts the configuration.<br>* none — The extension doesn't require configuration.|
|description|string|true|none|A longer description of the extension. It appears on the details page.|
|eula_tos_url|string|true|none|A URL to the extension’s Terms of Service.|
|has_chat_support|boolean|true|none|A Boolean value that determines whether the extension can communicate with the installed channel’s chat. Is **true** if the extension can communicate with the channel’s chat room.|
|icon_url|string|true|none|A URL to the default icon that’s displayed in the Extensions directory.|
|icon_urls|[ExtensionIconUrls](#schemaextensioniconurls)|true|none|A dictionary that contains URLs to different sizes of the default icon. The dictionary’s key identifies the icon’s size (for example, 24x24), and the dictionary’s value contains the URL to the icon.|
|id|string|true|none|The extension’s ID.|
|name|string|true|none|The extension’s name.|
|privacy_policy_url|string|true|none|A URL to the extension’s privacy policy.|
|request_identity_link|boolean|true|none|A Boolean value that determines whether the extension wants to explicitly ask viewers to link their Twitch identity.|
|screenshot_urls|[string]|true|none|A list of URLs to screenshots that are shown in the Extensions marketplace.|
|state|string|true|none|The extension’s state. Possible values are:  <br>  <br>* Approved<br>* AssetsUploaded<br>* Deleted<br>* Deprecated<br>* InReview<br>* InTest<br>* PendingAction<br>* Rejected<br>* Released|
|subscriptions_support_level|string|true|none|Indicates whether the extension can view the user’s subscription level on the channel that the extension is installed on. Possible values are:  <br>  <br>* none — The extension can't view the user’s subscription level.<br>* optional — The extension can view the user’s subscription level.|
|summary|string|true|none|A short description of the extension that streamers see when hovering over the discovery splash screen in the Extensions manager.|
|support_email|string|true|none|The email address that users use to get support for the extension.|
|version|string|true|none|The extension’s version number.|
|viewer_summary|string|true|none|A brief description displayed on the channel to explain how the extension works.|
|views|object|true|none|Describes all views-related information such as how the extension is displayed on mobile devices.|
|allowlisted_config_urls|[string]|true|none|Allowlisted configuration URLs for displaying the extension (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Capabilities**).|
|allowlisted_panel_urls|[string]|true|none|Allowlisted panel URLs for displaying the extension (the allowlist is configured on Twitch’s [developer site](https://dev.twitch.tv/console/extensions) under the **Extensions** \-> **Extension** \-> **Version** \-> **Capabilities**).|

#### Enumerated Values

|Property|Value|
|---|---|
|configuration_location|hosted|
|configuration_location|custom|
|configuration_location|none|
|state|Approved|
|state|AssetsUploaded|
|state|Deleted|
|state|Deprecated|
|state|InReview|
|state|InTest|
|state|PendingAction|
|state|Rejected|
|state|Released|
|subscriptions_support_level|none|
|subscriptions_support_level|optional|

<h2 id="tocS_GetExtensionsResponse">GetExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionsresponse"></a>
<a id="schema_GetExtensionsResponse"></a>
<a id="tocSgetextensionsresponse"></a>
<a id="tocsgetextensionsresponse"></a>

```json
{
  "data": [
    {
      "author_name": "string",
      "bits_enabled": true,
      "can_install": true,
      "configuration_location": "hosted",
      "description": "string",
      "eula_tos_url": "string",
      "has_chat_support": true,
      "icon_url": "string",
      "icon_urls": {
        "100x100": "string",
        "24x24": "string",
        "300x200": "string"
      },
      "id": "string",
      "name": "string",
      "privacy_policy_url": "string",
      "request_identity_link": true,
      "screenshot_urls": [
        "string"
      ],
      "state": "Approved",
      "subscriptions_support_level": "none",
      "summary": "string",
      "support_email": "string",
      "version": "string",
      "viewer_summary": "string",
      "views": {
        "mobile": {
          "viewer_url": "string"
        },
        "panel": {
          "viewer_url": "string",
          "height": 0,
          "can_link_external_content": true
        },
        "video_overlay": {
          "viewer_url": "string",
          "can_link_external_content": true
        },
        "component": {
          "viewer_url": "string",
          "aspect_ratio_x": 0,
          "aspect_ratio_y": 0,
          "autoscale": true,
          "scale_pixels": 0,
          "target_height": 0,
          "can_link_external_content": true
        },
        "config": {
          "viewer_url": "string",
          "can_link_external_content": true
        }
      },
      "allowlisted_config_urls": [
        "string"
      ],
      "allowlisted_panel_urls": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Extension](#schemaextension)]|true|none|A list that contains the specified extension.|

<h2 id="tocS_GetReleasedExtensionsResponse">GetReleasedExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreleasedextensionsresponse"></a>
<a id="schema_GetReleasedExtensionsResponse"></a>
<a id="tocSgetreleasedextensionsresponse"></a>
<a id="tocsgetreleasedextensionsresponse"></a>

```json
{
  "data": [
    {
      "author_name": "string",
      "bits_enabled": true,
      "can_install": true,
      "configuration_location": "hosted",
      "description": "string",
      "eula_tos_url": "string",
      "has_chat_support": true,
      "icon_url": "string",
      "icon_urls": {
        "100x100": "string",
        "24x24": "string",
        "300x200": "string"
      },
      "id": "string",
      "name": "string",
      "privacy_policy_url": "string",
      "request_identity_link": true,
      "screenshot_urls": [
        "string"
      ],
      "state": "Approved",
      "subscriptions_support_level": "none",
      "summary": "string",
      "support_email": "string",
      "version": "string",
      "viewer_summary": "string",
      "views": {
        "mobile": {
          "viewer_url": "string"
        },
        "panel": {
          "viewer_url": "string",
          "height": 0,
          "can_link_external_content": true
        },
        "video_overlay": {
          "viewer_url": "string",
          "can_link_external_content": true
        },
        "component": {
          "viewer_url": "string",
          "aspect_ratio_x": 0,
          "aspect_ratio_y": 0,
          "autoscale": true,
          "scale_pixels": 0,
          "target_height": 0,
          "can_link_external_content": true
        },
        "config": {
          "viewer_url": "string",
          "can_link_external_content": true
        }
      },
      "allowlisted_config_urls": [
        "string"
      ],
      "allowlisted_panel_urls": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Extension](#schemaextension)]|true|none|A list that contains the specified extension.|

<h2 id="tocS_ExtensionBitsProduct">ExtensionBitsProduct</h2>
<!-- backwards compatibility -->
<a id="schemaextensionbitsproduct"></a>
<a id="schema_ExtensionBitsProduct"></a>
<a id="tocSextensionbitsproduct"></a>
<a id="tocsextensionbitsproduct"></a>

```json
{
  "sku": "string",
  "cost": {
    "amount": 0,
    "type": "bits"
  },
  "in_development": true,
  "display_name": "string",
  "expiration": "1970-01-01T00:00:00Z",
  "is_broadcast": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|string|true|none|The product's SKU. The SKU is unique across an extension's products.|
|cost|object|true|none|An object that contains the product's cost information.|
|in_development|boolean|true|none|A Boolean value that indicates whether the product is in development. If **true**, the product is not available for public use.|
|display_name|string|true|none|The product's name as displayed in the extension.|
|expiration|string(date-time)|true|none|The date and time, in RFC3339 format, when the product expires.|
|is_broadcast|boolean|true|none|A Boolean value that determines whether Bits product purchase events are broadcast to all instances of an extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. Is **true** if the event is broadcast to all instances.|

<h2 id="tocS_GetExtensionBitsProductsResponse">GetExtensionBitsProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetextensionbitsproductsresponse"></a>
<a id="schema_GetExtensionBitsProductsResponse"></a>
<a id="tocSgetextensionbitsproductsresponse"></a>
<a id="tocsgetextensionbitsproductsresponse"></a>

```json
{
  "data": [
    {
      "sku": "string",
      "cost": {
        "amount": 0,
        "type": "bits"
      },
      "in_development": true,
      "display_name": "string",
      "expiration": "1970-01-01T00:00:00Z",
      "is_broadcast": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionBitsProduct](#schemaextensionbitsproduct)]|true|none|A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn’t created any products or they’re all expired or disabled.|

<h2 id="tocS_UpdateExtensionBitsProductBody">UpdateExtensionBitsProductBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateextensionbitsproductbody"></a>
<a id="schema_UpdateExtensionBitsProductBody"></a>
<a id="tocSupdateextensionbitsproductbody"></a>
<a id="tocsupdateextensionbitsproductbody"></a>

```json
{
  "sku": "string",
  "cost": {
    "amount": 0,
    "type": "bits"
  },
  "display_name": "string",
  "in_development": true,
  "expiration": "1970-01-01T00:00:00Z",
  "is_broadcast": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sku|string|true|none|The product's SKU. The SKU must be unique within an extension. The product's SKU cannot be changed. The SKU may contain only alphanumeric characters, dashes (-), underscores (\_), and periods (.) and is limited to a maximum of 255 characters. No spaces.|
|cost|object|true|none|An object that contains the product's cost information.|
|display_name|string|true|none|The product's name as displayed in the extension. The maximum length is 255 characters.|
|in_development|boolean|false|none|A Boolean value that indicates whether the product is in development. Set to **true** if the product is in development and not available for public use. The default is **false**.|
|expiration|string(date-time)|false|none|The date and time, in RFC3339 format, when the product expires. If not set, the product does not expire. To disable the product, set the expiration date to a date in the past.|
|is_broadcast|boolean|false|none|A Boolean value that determines whether Bits product purchase events are broadcast to all instances of the extension on a channel. The events are broadcast via the `onTransactionComplete` helper callback. The default is **false**.|

<h2 id="tocS_UpdateExtensionBitsProductResponse">UpdateExtensionBitsProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateextensionbitsproductresponse"></a>
<a id="schema_UpdateExtensionBitsProductResponse"></a>
<a id="tocSupdateextensionbitsproductresponse"></a>
<a id="tocsupdateextensionbitsproductresponse"></a>

```json
{
  "data": [
    {
      "sku": "string",
      "cost": {
        "amount": 0,
        "type": "bits"
      },
      "in_development": true,
      "display_name": "string",
      "expiration": "1970-01-01T00:00:00Z",
      "is_broadcast": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExtensionBitsProduct](#schemaextensionbitsproduct)]|true|none|A list of Bits products that the extension created. The list is in ascending SKU order. The list is empty if the extension hasn't created any products or they're all expired or disabled.|

<h2 id="tocS_CreateEventSubSubscriptionBody">CreateEventSubSubscriptionBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubsubscriptionbody"></a>
<a id="schema_CreateEventSubSubscriptionBody"></a>
<a id="tocScreateeventsubsubscriptionbody"></a>
<a id="tocscreateeventsubsubscriptionbody"></a>

```json
{
  "type": "automod.message.hold",
  "version": "string",
  "condition": {},
  "transport": {
    "method": "webhook",
    "callback": "string",
    "secret": "string",
    "session_id": "string",
    "conduit_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of subscription to create. For a list of subscriptions that you can create, see [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types). Set this field to the value in the **Name** column of the Subscription Types table.|
|version|string|true|none|The version number that identifies the definition of the subscription type that you want the response to use.|
|condition|object|true|none|A JSON object that contains the parameter values that are specific to the specified subscription type. For the object’s required and optional fields, see the subscription type’s documentation.|
|transport|object|true|none|The transport details that you want Twitch to use when sending you notifications.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|automod.message.hold|
|type|automod.message.update|
|type|automod.settings.update|
|type|automod.terms.update|
|type|channel.bits.use|
|type|channel.update|
|type|channel.follow|
|type|channel.ad_break.begin|
|type|channel.chat.clear|
|type|channel.chat.clear_user_messages|
|type|channel.chat.message|
|type|channel.chat.message_delete|
|type|channel.chat.notification|
|type|channel.chat_settings.update|
|type|channel.chat.user_message_hold|
|type|channel.chat.user_message_update|
|type|channel.shared_chat.begin|
|type|channel.shared_chat.update|
|type|channel.shared_chat.end|
|type|channel.subscribe|
|type|channel.subscription.end|
|type|channel.subscription.gift|
|type|channel.subscription.message|
|type|channel.cheer|
|type|channel.raid|
|type|channel.ban|
|type|channel.unban|
|type|channel.unban_request.create|
|type|channel.unban_request.resolve|
|type|channel.moderate|
|type|channel.moderator.add|
|type|channel.moderator.remove|
|type|channel.guest_star_session.begin|
|type|channel.guest_star_session.end|
|type|channel.guest_star_guest.update|
|type|channel.guest_star_settings.update|
|type|channel.channel_points_automatic_reward_redemption.add|
|type|channel.channel_points_custom_reward.add|
|type|channel.channel_points_custom_reward.update|
|type|channel.channel_points_custom_reward.remove|
|type|channel.channel_points_custom_reward_redemption.add|
|type|channel.channel_points_custom_reward_redemption.update|
|type|channel.custom_power_up_redemption.add|
|type|channel.poll.begin|
|type|channel.poll.progress|
|type|channel.poll.end|
|type|channel.prediction.begin|
|type|channel.prediction.progress|
|type|channel.prediction.lock|
|type|channel.prediction.end|
|type|channel.suspicious_user.message|
|type|channel.suspicious_user.update|
|type|channel.vip.add|
|type|channel.vip.remove|
|type|channel.warning.acknowledge|
|type|channel.warning.send|
|type|channel.charity_campaign.donate|
|type|channel.charity_campaign.start|
|type|channel.charity_campaign.progress|
|type|channel.charity_campaign.stop|
|type|conduit.shard.disabled|
|type|drop.entitlement.grant|
|type|extension.bits_transaction.create|
|type|channel.goal.begin|
|type|channel.goal.progress|
|type|channel.goal.end|
|type|channel.hype_train.begin|
|type|channel.hype_train.progress|
|type|channel.hype_train.end|
|type|channel.shield_mode.begin|
|type|channel.shield_mode.end|
|type|channel.shoutout.create|
|type|channel.shoutout.receive|
|type|stream.online|
|type|stream.offline|
|type|user.authorization.grant|
|type|user.authorization.revoke|
|type|user.update|
|type|user.whisper.message|

<h2 id="tocS_EventSubSubscription">EventSubSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubsubscription"></a>
<a id="schema_EventSubSubscription"></a>
<a id="tocSeventsubsubscription"></a>
<a id="tocseventsubsubscription"></a>

```json
{
  "id": "string",
  "status": "enabled",
  "type": "automod.message.hold",
  "version": "string",
  "condition": {},
  "created_at": "1970-01-01T00:00:00Z",
  "transport": {
    "method": "webhook",
    "callback": "string",
    "session_id": "string",
    "connected_at": "1970-01-01T00:00:00Z",
    "disconnected_at": "1970-01-01T00:00:00Z"
  },
  "cost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the subscription.|
|status|string|true|none|The subscription's status. The subscriber receives events only for **enabled** subscriptions. Possible values are:  <br>  <br>* enabled — The subscription is enabled.<br>* webhook\_callback\_verification\_pending — The subscription is pending verification of the specified callback URL.<br>* webhook\_callback\_verification\_failed — The specified callback URL failed verification.<br>* notification\_failures\_exceeded — The notification delivery failure rate was too high.<br>* authorization\_revoked — The authorization was revoked for one or more users specified in the **Condition** object.<br>* moderator\_removed — The moderator that authorized the subscription is no longer one of the broadcaster's moderators.<br>* user\_removed — One of the users specified in the **Condition** object was removed.<br>* version\_removed — The subscription to subscription type and version is no longer supported.<br>* beta\_maintenance — The subscription to the beta subscription type was removed due to maintenance.<br>* websocket\_disconnected — The client closed the connection.<br>* websocket\_failed\_ping\_pong — The client failed to respond to a ping message.<br>* websocket\_received\_inbound\_traffic — The client sent a non-pong message. Clients may only send pong messages (and only in response to a ping message).<br>* websocket\_connection\_unused — The client failed to subscribe to events within the required time.<br>* websocket\_internal\_error — The Twitch WebSocket server experienced an unexpected error.<br>* websocket\_network\_timeout — The Twitch WebSocket server timed out writing the message to the client.<br>* websocket\_network\_error — The Twitch WebSocket server experienced a network error writing the message to the client.|
|type|string|true|none|The subscription's type. See [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types#subscription-types).|
|version|string|true|none|The version number that identifies this definition of the subscription's data.|
|condition|object|true|none|The subscription's parameter values. This is a string-encoded JSON object whose contents are determined by the subscription type.|
|created_at|string(date-time)|true|none|The date and time (in RFC3339 format) of when the subscription was created.|
|transport|object|true|none|The transport details used to send the notifications.|
|cost|integer(int32)|true|none|The amount that the subscription counts against your limit. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|webhook_callback_verification_pending|
|status|webhook_callback_verification_failed|
|status|notification_failures_exceeded|
|status|authorization_revoked|
|status|moderator_removed|
|status|user_removed|
|status|version_removed|
|status|beta_maintenance|
|status|websocket_disconnected|
|status|websocket_failed_ping_pong|
|status|websocket_received_inbound_traffic|
|status|websocket_connection_unused|
|status|websocket_internal_error|
|status|websocket_network_timeout|
|status|websocket_network_error|
|type|automod.message.hold|
|type|automod.message.update|
|type|automod.settings.update|
|type|automod.terms.update|
|type|channel.bits.use|
|type|channel.update|
|type|channel.follow|
|type|channel.ad_break.begin|
|type|channel.chat.clear|
|type|channel.chat.clear_user_messages|
|type|channel.chat.message|
|type|channel.chat.message_delete|
|type|channel.chat.notification|
|type|channel.chat_settings.update|
|type|channel.chat.user_message_hold|
|type|channel.chat.user_message_update|
|type|channel.shared_chat.begin|
|type|channel.shared_chat.update|
|type|channel.shared_chat.end|
|type|channel.subscribe|
|type|channel.subscription.end|
|type|channel.subscription.gift|
|type|channel.subscription.message|
|type|channel.cheer|
|type|channel.raid|
|type|channel.ban|
|type|channel.unban|
|type|channel.unban_request.create|
|type|channel.unban_request.resolve|
|type|channel.moderate|
|type|channel.moderator.add|
|type|channel.moderator.remove|
|type|channel.guest_star_session.begin|
|type|channel.guest_star_session.end|
|type|channel.guest_star_guest.update|
|type|channel.guest_star_settings.update|
|type|channel.channel_points_automatic_reward_redemption.add|
|type|channel.channel_points_custom_reward.add|
|type|channel.channel_points_custom_reward.update|
|type|channel.channel_points_custom_reward.remove|
|type|channel.channel_points_custom_reward_redemption.add|
|type|channel.channel_points_custom_reward_redemption.update|
|type|channel.custom_power_up_redemption.add|
|type|channel.poll.begin|
|type|channel.poll.progress|
|type|channel.poll.end|
|type|channel.prediction.begin|
|type|channel.prediction.progress|
|type|channel.prediction.lock|
|type|channel.prediction.end|
|type|channel.suspicious_user.message|
|type|channel.suspicious_user.update|
|type|channel.vip.add|
|type|channel.vip.remove|
|type|channel.warning.acknowledge|
|type|channel.warning.send|
|type|channel.charity_campaign.donate|
|type|channel.charity_campaign.start|
|type|channel.charity_campaign.progress|
|type|channel.charity_campaign.stop|
|type|conduit.shard.disabled|
|type|drop.entitlement.grant|
|type|extension.bits_transaction.create|
|type|channel.goal.begin|
|type|channel.goal.progress|
|type|channel.goal.end|
|type|channel.hype_train.begin|
|type|channel.hype_train.progress|
|type|channel.hype_train.end|
|type|channel.shield_mode.begin|
|type|channel.shield_mode.end|
|type|channel.shoutout.create|
|type|channel.shoutout.receive|
|type|stream.online|
|type|stream.offline|
|type|user.authorization.grant|
|type|user.authorization.revoke|
|type|user.update|
|type|user.whisper.message|

<h2 id="tocS_CreateEventSubSubscriptionResponse">CreateEventSubSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventsubsubscriptionresponse"></a>
<a id="schema_CreateEventSubSubscriptionResponse"></a>
<a id="tocScreateeventsubsubscriptionresponse"></a>
<a id="tocscreateeventsubsubscriptionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "status": "enabled",
      "type": "automod.message.hold",
      "version": "string",
      "condition": {},
      "created_at": "1970-01-01T00:00:00Z",
      "transport": {
        "method": "webhook",
        "callback": "string",
        "session_id": "string",
        "connected_at": "1970-01-01T00:00:00Z",
        "disconnected_at": "1970-01-01T00:00:00Z"
      },
      "cost": 0
    }
  ],
  "total": 0,
  "total_cost": 0,
  "max_total_cost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EventSubSubscription](#schemaeventsubsubscription)]|true|none|A list that contains the single subscription that you created.|
|total|integer(int32)|true|none|The total number of subscriptions you’ve created.|
|total_cost|integer(int32)|true|none|The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)|
|max_total_cost|integer(int32)|true|none|The maximum total cost that you’re allowed to incur for all subscriptions you create.|

<h2 id="tocS_GetEventSubSubscriptionsResponse">GetEventSubSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemageteventsubsubscriptionsresponse"></a>
<a id="schema_GetEventSubSubscriptionsResponse"></a>
<a id="tocSgeteventsubsubscriptionsresponse"></a>
<a id="tocsgeteventsubsubscriptionsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "status": "enabled",
      "type": "automod.message.hold",
      "version": "string",
      "condition": {},
      "created_at": "1970-01-01T00:00:00Z",
      "transport": {
        "method": "webhook",
        "callback": "string",
        "session_id": "string",
        "connected_at": "1970-01-01T00:00:00Z",
        "disconnected_at": "1970-01-01T00:00:00Z"
      },
      "cost": 0
    }
  ],
  "total": 0,
  "total_cost": 0,
  "max_total_cost": 0,
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EventSubSubscription](#schemaeventsubsubscription)]|true|none|The list of subscriptions. The list is ordered by the oldest subscription first. The list is empty if the client hasn't created subscriptions or there are no subscriptions that match the specified filter criteria.|
|total|integer(int32)|true|none|The total number of subscriptions that you've created.|
|total_cost|integer(int32)|true|none|The sum of all of your subscription costs. [Learn More](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/#subscription-limits)|
|max_total_cost|integer(int32)|true|none|The maximum total cost that you're allowed to incur for all subscriptions that you create.|
|pagination|object|false|none|An object that contains the cursor used to get the next page of subscriptions. The object is empty if there are no more pages to get. The number of subscriptions returned per page is undertermined.|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "id": "string",
  "name": "string",
  "box_art_url": "string",
  "igdb_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the category or game.|
|name|string|true|none|The category’s or game’s name.|
|box_art_url|string|true|none|A URL to the category’s or game’s box art. You must replace the `{width}x{height}` placeholder with the size of image you want.|
|igdb_id|string|true|none|The ID that [IGDB](https://www.igdb.com/) uses to identify this game. If the IGDB ID is not available to Twitch, this field is set to an empty string.|

<h2 id="tocS_GetTopGamesResponse">GetTopGamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettopgamesresponse"></a>
<a id="schema_GetTopGamesResponse"></a>
<a id="tocSgettopgamesresponse"></a>
<a id="tocsgettopgamesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "box_art_url": "string",
      "igdb_id": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Game](#schemagame)]|true|none|The list of broadcasts. The broadcasts are sorted by the number of viewers, with the most popular first.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GetGamesResponse">GetGamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgamesresponse"></a>
<a id="schema_GetGamesResponse"></a>
<a id="tocSgetgamesresponse"></a>
<a id="tocsgetgamesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "box_art_url": "string",
      "igdb_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Game](#schemagame)]|true|none|The list of categories and games. The list is empty if the specified categories and games weren’t found.|

<h2 id="tocS_CreatorGoal">CreatorGoal</h2>
<!-- backwards compatibility -->
<a id="schemacreatorgoal"></a>
<a id="schema_CreatorGoal"></a>
<a id="tocScreatorgoal"></a>
<a id="tocscreatorgoal"></a>

```json
{
  "id": "string",
  "broadcaster_id": "string",
  "broadcaster_name": "string",
  "broadcaster_login": "string",
  "type": "follower",
  "description": "string",
  "current_amount": 0,
  "target_amount": 0,
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this goal.|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster that created the goal.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|type|string|true|none|The type of goal. Possible values are:   <br>  <br>* follower — The goal is to increase followers.<br>* subscription — The goal is to increase subscriptions. This type shows the net increase or decrease in tier points associated with the subscriptions.<br>* subscription\_count — The goal is to increase subscriptions. This type shows the net increase or decrease in the number of subscriptions.<br>* new\_subscription — The goal is to increase subscriptions. This type shows only the net increase in tier points associated with the subscriptions (it does not account for users that unsubscribed since the goal started).<br>* new\_subscription\_count — The goal is to increase subscriptions. This type shows only the net increase in the number of subscriptions (it does not account for users that unsubscribed since the goal started).<br>* new\_bit — The goal is to increase the amount of Bits used on the channel.<br>* new\_cheerer — The goal is to increase the amount of unique Cheerers on to Cheer on the channel.|
|description|string|true|none|A description of the goal. Is an empty string if not specified.|
|current_amount|integer(int32)|true|none|The goal’s current value.  <br>  <br>The goal’s `type` determines how this value is increased or decreased.   <br>  <br>* If `type` is follower, this field is set to the broadcaster's current number of followers. This number increases with new followers and decreases when users unfollow the broadcaster.<br>* If `type` is subscription, this field is increased and decreased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased or decreased by 2, not 1.<br>* If `type` is subscription\_count, this field is increased by 1 for each new subscription and decreased by 1 for each user that unsubscribes.<br>* If `type` is new\_subscription, this field is increased by the points value associated with the subscription tier. For example, if a tier-two subscription is worth 2 points, this field is increased by 2, not 1.<br>* If `type` is new\_subscription\_count, this field is increased by 1 for each new subscription.|
|target_amount|integer(int32)|true|none|The goal’s target value. For example, if the broadcaster has 200 followers before creating the goal, and their goal is to double that number, this field is set to 400.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) that the broadcaster created the goal.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|follower|
|type|subscription|
|type|subscription_count|
|type|new_subscription|
|type|new_subscription_count|
|type|new_bit|
|type|new_cheerer|

<h2 id="tocS_GetCreatorGoalsResponse">GetCreatorGoalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcreatorgoalsresponse"></a>
<a id="schema_GetCreatorGoalsResponse"></a>
<a id="tocSgetcreatorgoalsresponse"></a>
<a id="tocsgetcreatorgoalsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "type": "follower",
      "description": "string",
      "current_amount": 0,
      "target_amount": 0,
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CreatorGoal](#schemacreatorgoal)]|true|none|The list of goals. The list is empty if the broadcaster hasn’t created goals.|

<h2 id="tocS_GetChannelGuestStarSettingsResponse">GetChannelGuestStarSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelgueststarsettingsresponse"></a>
<a id="schema_GetChannelGuestStarSettingsResponse"></a>
<a id="tocSgetchannelgueststarsettingsresponse"></a>
<a id="tocsgetchannelgueststarsettingsresponse"></a>

```json
{
  "is_moderator_send_live_enabled": true,
  "slot_count": 0,
  "is_browser_source_audio_enabled": true,
  "group_layout": "TILED_LAYOUT",
  "browser_source_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_moderator_send_live_enabled|boolean|true|none|Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.|
|slot_count|integer(int32)|true|none|Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.|
|is_browser_source_audio_enabled|boolean|true|none|Flag determining if Browser Sources subscribed to sessions on this channel should output audio|
|group_layout|string|true|none|This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values:   <br>  <br>* `TILED_LAYOUT`: All live guests are tiled within the browser source with the same size.<br>* `SCREENSHARE_LAYOUT`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.|
|browser_source_token|string|true|none|View only token to generate browser source URLs|

#### Enumerated Values

|Property|Value|
|---|---|
|group_layout|TILED_LAYOUT|
|group_layout|SCREENSHARE_LAYOUT|

<h2 id="tocS_UpdateChannelGuestStarSettingsBody">UpdateChannelGuestStarSettingsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelgueststarsettingsbody"></a>
<a id="schema_UpdateChannelGuestStarSettingsBody"></a>
<a id="tocSupdatechannelgueststarsettingsbody"></a>
<a id="tocsupdatechannelgueststarsettingsbody"></a>

```json
{
  "is_moderator_send_live_enabled": true,
  "slot_count": 0,
  "is_browser_source_audio_enabled": true,
  "group_layout": "TILED_LAYOUT",
  "regenerate_browser_sources": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_moderator_send_live_enabled|boolean|false|none|Flag determining if Guest Star moderators have access to control whether a guest is live once assigned to a slot.|
|slot_count|integer(int32)|false|none|Number of slots the Guest Star call interface will allow the host to add to a call. Required to be between 1 and 6.|
|is_browser_source_audio_enabled|boolean|false|none|Flag determining if Browser Sources subscribed to sessions on this channel should output audio|
|group_layout|string|false|none|This setting determines how the guests within a session should be laid out within the browser source. Can be one of the following values:   <br>  <br>* `TILED_LAYOUT`: All live guests are tiled within the browser source with the same size.<br>* `SCREENSHARE_LAYOUT`: All live guests are tiled within the browser source with the same size. If there is an active screen share, it is sized larger than the other guests.<br>* `HORIZONTAL_LAYOUT`: All live guests are arranged in a horizontal bar within the browser source<br>* `VERTICAL_LAYOUT`: All live guests are arranged in a vertical bar within the browser source|
|regenerate_browser_sources|boolean|false|none|Flag determining if Guest Star should regenerate the auth token associated with the channel’s browser sources. Providing a true value for this will immediately invalidate all browser sources previously configured in your streaming software.|

#### Enumerated Values

|Property|Value|
|---|---|
|group_layout|TILED_LAYOUT|
|group_layout|SCREENSHARE_LAYOUT|
|group_layout|HORIZONTAL_LAYOUT|
|group_layout|VERTICAL_LAYOUT|

<h2 id="tocS_Guest">Guest</h2>
<!-- backwards compatibility -->
<a id="schemaguest"></a>
<a id="schema_Guest"></a>
<a id="tocSguest"></a>
<a id="tocsguest"></a>

```json
{
  "slot_id": "string",
  "is_live": true,
  "user_id": "string",
  "user_display_name": "string",
  "user_login": "string",
  "volume": 0,
  "assigned_at": "1970-01-01T00:00:00Z",
  "audio_settings": {
    "is_host_enabled": true,
    "is_guest_enabled": true,
    "is_available": true
  },
  "video_settings": {
    "is_host_enabled": true,
    "is_guest_enabled": true,
    "is_available": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slot_id|string|true|none|ID representing this guest’s slot assignment.   <br>  <br>* Host is always in slot "0"<br>* Guests are assigned the following consecutive IDs (e.g, "1", "2", "3", etc)<br>* Screen Share is represented as a special guest with the ID "SCREENSHARE"<br>* The identifier here matches the ID referenced in browser source links used in broadcasting software.|
|is_live|boolean|true|none|Flag determining whether or not the guest is visible in the browser source in the host’s streaming software.|
|user_id|string|true|none|User ID of the guest assigned to this slot.|
|user_display_name|string|true|none|Display name of the guest assigned to this slot.|
|user_login|string|true|none|Login of the guest assigned to this slot.|
|volume|integer(int32)|true|none|Value from 0 to 100 representing the host’s volume setting for this guest.|
|assigned_at|string(date-time)|true|none|Timestamp when this guest was assigned a slot in the session.|
|audio_settings|object|true|none|Information about the guest’s audio settings|
|video_settings|object|true|none|Information about the guest’s video settings|

<h2 id="tocS_GuestStarSession">GuestStarSession</h2>
<!-- backwards compatibility -->
<a id="schemagueststarsession"></a>
<a id="schema_GuestStarSession"></a>
<a id="tocSgueststarsession"></a>
<a id="tocsgueststarsession"></a>

```json
{
  "id": "string",
  "guests": [
    {
      "slot_id": "string",
      "is_live": true,
      "user_id": "string",
      "user_display_name": "string",
      "user_login": "string",
      "volume": 0,
      "assigned_at": "1970-01-01T00:00:00Z",
      "audio_settings": {
        "is_host_enabled": true,
        "is_guest_enabled": true,
        "is_available": true
      },
      "video_settings": {
        "is_host_enabled": true,
        "is_guest_enabled": true,
        "is_available": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID uniquely representing the Guest Star session.|
|guests|[[Guest](#schemaguest)]|true|none|List of guests currently interacting with the Guest Star session.|

<h2 id="tocS_GetGuestStarSessionResponse">GetGuestStarSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgueststarsessionresponse"></a>
<a id="schema_GetGuestStarSessionResponse"></a>
<a id="tocSgetgueststarsessionresponse"></a>
<a id="tocsgetgueststarsessionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "guests": [
        {
          "slot_id": "string",
          "is_live": true,
          "user_id": "string",
          "user_display_name": "string",
          "user_login": "string",
          "volume": 0,
          "assigned_at": "1970-01-01T00:00:00Z",
          "audio_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          },
          "video_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GuestStarSession](#schemagueststarsession)]|true|none|Summary of the session details|

<h2 id="tocS_CreateGuestStarSessionResponse">CreateGuestStarSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategueststarsessionresponse"></a>
<a id="schema_CreateGuestStarSessionResponse"></a>
<a id="tocScreategueststarsessionresponse"></a>
<a id="tocscreategueststarsessionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "guests": [
        {
          "slot_id": "string",
          "is_live": true,
          "user_id": "string",
          "user_display_name": "string",
          "user_login": "string",
          "volume": 0,
          "assigned_at": "1970-01-01T00:00:00Z",
          "audio_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          },
          "video_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GuestStarSession](#schemagueststarsession)]|true|none|Summary of the session details.|

<h2 id="tocS_EndGuestStarSessionResponse">EndGuestStarSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaendgueststarsessionresponse"></a>
<a id="schema_EndGuestStarSessionResponse"></a>
<a id="tocSendgueststarsessionresponse"></a>
<a id="tocsendgueststarsessionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "guests": [
        {
          "slot_id": "string",
          "is_live": true,
          "user_id": "string",
          "user_display_name": "string",
          "user_login": "string",
          "volume": 0,
          "assigned_at": "1970-01-01T00:00:00Z",
          "audio_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          },
          "video_settings": {
            "is_host_enabled": true,
            "is_guest_enabled": true,
            "is_available": true
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GuestStarSession](#schemagueststarsession)]|true|none|Summary of the session details when the session was ended.|

<h2 id="tocS_GuestStarInvite">GuestStarInvite</h2>
<!-- backwards compatibility -->
<a id="schemagueststarinvite"></a>
<a id="schema_GuestStarInvite"></a>
<a id="tocSgueststarinvite"></a>
<a id="tocsgueststarinvite"></a>

```json
{
  "user_id": "string",
  "invited_at": "1970-01-01T00:00:00Z",
  "status": "string",
  "is_video_enabled": true,
  "is_audio_enabled": true,
  "is_video_available": true,
  "is_audio_available": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|Twitch User ID corresponding to the invited guest|
|invited_at|string(date-time)|true|none|Timestamp when this user was invited to the session.|
|status|string|true|none|Status representing the invited user’s join state. Can be one of the following:   <br>  <br>* `INVITED`: The user has been invited to the session but has not acknowledged it.<br>* `ACCEPTED`: The invited user has acknowledged the invite and joined the waiting room, but may still be setting up their media devices or otherwise preparing to join the call.<br>* `READY`: The invited user has signaled they are ready to join the call from the waiting room.|
|is_video_enabled|boolean|true|none|Flag signaling that the invited user has chosen to disable their local video device. The user has hidden themselves, but they may choose to reveal their video feed upon joining the session.|
|is_audio_enabled|boolean|true|none|Flag signaling that the invited user has chosen to disable their local audio device. The user has muted themselves, but they may choose to unmute their audio feed upon joining the session.|
|is_video_available|boolean|true|none|Flag signaling that the invited user has a video device available for sharing.|
|is_audio_available|boolean|true|none|Flag signaling that the invited user has an audio device available for sharing.|

<h2 id="tocS_GetGuestStarInvitesResponse">GetGuestStarInvitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgueststarinvitesresponse"></a>
<a id="schema_GetGuestStarInvitesResponse"></a>
<a id="tocSgetgueststarinvitesresponse"></a>
<a id="tocsgetgueststarinvitesresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "invited_at": "1970-01-01T00:00:00Z",
      "status": "string",
      "is_video_enabled": true,
      "is_audio_enabled": true,
      "is_video_available": true,
      "is_audio_available": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GuestStarInvite](#schemagueststarinvite)]|true|none|A list of invite objects describing the invited user as well as their ready status.|

<h2 id="tocS_GetHypeTrainStatusResponse">GetHypeTrainStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethypetrainstatusresponse"></a>
<a id="schema_GetHypeTrainStatusResponse"></a>
<a id="tocSgethypetrainstatusresponse"></a>
<a id="tocsgethypetrainstatusresponse"></a>

```json
{
  "data": [
    {
      "current": {
        "id": "string",
        "broadcaster_user_id": "string",
        "broadcaster_user_login": "string",
        "broadcaster_user_name": "string",
        "level": 0,
        "total": 0,
        "progress": 0,
        "goal": 0,
        "top_contributions": [
          {
            "user_id": "string",
            "user_login": "string",
            "user_name": "string",
            "type": "treasure",
            "total": 0,
            "shared_train_participants": [
              {
                "broadcaster_user_id": "string",
                "broadcaster_user_login": "string",
                "broadcaster_user_name": "string"
              }
            ],
            "started_at": "1970-01-01T00:00:00Z",
            "expires_at": "1970-01-01T00:00:00Z",
            "is_shared_train": true
          }
        ]
      }
    }
  ],
  "all_time_high": {
    "level": 0,
    "total": 0,
    "achieved_at": "1970-01-01T00:00:00Z"
  },
  "shared_all_time_high": {
    "level": 0,
    "total": 0,
    "achieved_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains information related to the channel’s Hype Train.|
|all_time_high|object|true|none|An object with information about the channel’s Hype Train records. Null if a Hype Train has not occurred.|
|shared_all_time_high|object|true|none|An object with information about the channel’s shared Hype Train records. Null if a Hype Train has not occurred.|

<h2 id="tocS_CheckAutoModStatusBody">CheckAutoModStatusBody</h2>
<!-- backwards compatibility -->
<a id="schemacheckautomodstatusbody"></a>
<a id="schema_CheckAutoModStatusBody"></a>
<a id="tocScheckautomodstatusbody"></a>
<a id="tocscheckautomodstatusbody"></a>

```json
{
  "data": [
    {
      "msg_id": "string",
      "msg_text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The list of messages to check. The list must contain at least one message and may contain up to a maximum of 100 messages.|

<h2 id="tocS_AutoModStatus">AutoModStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautomodstatus"></a>
<a id="schema_AutoModStatus"></a>
<a id="tocSautomodstatus"></a>
<a id="tocsautomodstatus"></a>

```json
{
  "msg_id": "string",
  "is_permitted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg_id|string|true|none|The caller-defined ID passed in the request.|
|is_permitted|boolean|true|none|A Boolean value that indicates whether Twitch would approve the message for chat or hold it for moderator review or block it from chat. Is **true** if Twitch would approve the message; otherwise, **false** if Twitch would hold the message for moderator review or block it from chat.|

<h2 id="tocS_CheckAutoModStatusResponse">CheckAutoModStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckautomodstatusresponse"></a>
<a id="schema_CheckAutoModStatusResponse"></a>
<a id="tocScheckautomodstatusresponse"></a>
<a id="tocscheckautomodstatusresponse"></a>

```json
{
  "data": [
    {
      "msg_id": "string",
      "is_permitted": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AutoModStatus](#schemaautomodstatus)]|true|none|The list of messages and whether Twitch would approve them for chat.|

<h2 id="tocS_ManageHeldAutoModMessagesBody">ManageHeldAutoModMessagesBody</h2>
<!-- backwards compatibility -->
<a id="schemamanageheldautomodmessagesbody"></a>
<a id="schema_ManageHeldAutoModMessagesBody"></a>
<a id="tocSmanageheldautomodmessagesbody"></a>
<a id="tocsmanageheldautomodmessagesbody"></a>

```json
{
  "user_id": "string",
  "msg_id": "string",
  "action": "ALLOW"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The moderator who is approving or denying the held message. This ID must match the user ID in the access token.|
|msg_id|string|true|none|The ID of the message to allow or deny.|
|action|string|true|none|The action to take for the message. Possible values are:  <br>  <br>* ALLOW<br>* DENY|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ALLOW|
|action|DENY|

<h2 id="tocS_AutoModSettings">AutoModSettings</h2>
<!-- backwards compatibility -->
<a id="schemaautomodsettings"></a>
<a id="schema_AutoModSettings"></a>
<a id="tocSautomodsettings"></a>
<a id="tocsautomodsettings"></a>

```json
{
  "broadcaster_id": "string",
  "moderator_id": "string",
  "overall_level": 0,
  "disability": 0,
  "aggression": 0,
  "sexuality_sex_or_gender": 0,
  "misogyny": 0,
  "bullying": 0,
  "swearing": 0,
  "race_ethnicity_or_religion": 0,
  "sex_based_terms": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The broadcaster’s ID.|
|moderator_id|string|true|none|The moderator’s ID.|
|overall_level|integer(int32) \| null|true|none|The default AutoMod level for the broadcaster. This field is **null** if the broadcaster has set one or more of the individual settings.|
|disability|integer(int32)|true|none|The Automod level for discrimination against disability.|
|aggression|integer(int32)|true|none|The Automod level for hostility involving aggression.|
|sexuality_sex_or_gender|integer(int32)|true|none|The AutoMod level for discrimination based on sexuality, sex, or gender.|
|misogyny|integer(int32)|true|none|The Automod level for discrimination against women.|
|bullying|integer(int32)|true|none|The Automod level for hostility involving name calling or insults.|
|swearing|integer(int32)|true|none|The Automod level for profanity.|
|race_ethnicity_or_religion|integer(int32)|true|none|The Automod level for racial discrimination.|
|sex_based_terms|integer(int32)|true|none|The Automod level for sexual content.|

<h2 id="tocS_GetAutoModSettingsResponse">GetAutoModSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetautomodsettingsresponse"></a>
<a id="schema_GetAutoModSettingsResponse"></a>
<a id="tocSgetautomodsettingsresponse"></a>
<a id="tocsgetautomodsettingsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "moderator_id": "string",
      "overall_level": 0,
      "disability": 0,
      "aggression": 0,
      "sexuality_sex_or_gender": 0,
      "misogyny": 0,
      "bullying": 0,
      "swearing": 0,
      "race_ethnicity_or_religion": 0,
      "sex_based_terms": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AutoModSettings](#schemaautomodsettings)]|true|none|The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings.|

<h2 id="tocS_UpdateAutoModSettingsBody">UpdateAutoModSettingsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomodsettingsbody"></a>
<a id="schema_UpdateAutoModSettingsBody"></a>
<a id="tocSupdateautomodsettingsbody"></a>
<a id="tocsupdateautomodsettingsbody"></a>

```json
{
  "aggression": 0,
  "bullying": 0,
  "disability": 0,
  "misogyny": 0,
  "overall_level": 0,
  "race_ethnicity_or_religion": 0,
  "sex_based_terms": 0,
  "sexuality_sex_or_gender": 0,
  "swearing": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggression|integer(int32)|false|none|The Automod level for hostility involving aggression.|
|bullying|integer(int32)|false|none|The Automod level for hostility involving name calling or insults.|
|disability|integer(int32)|false|none|The Automod level for discrimination against disability.|
|misogyny|integer(int32)|false|none|The Automod level for discrimination against women.|
|overall_level|integer(int32)|false|none|The default AutoMod level for the broadcaster.|
|race_ethnicity_or_religion|integer(int32)|false|none|The Automod level for racial discrimination.|
|sex_based_terms|integer(int32)|false|none|The Automod level for sexual content.|
|sexuality_sex_or_gender|integer(int32)|false|none|The AutoMod level for discrimination based on sexuality, sex, or gender.|
|swearing|integer(int32)|false|none|The Automod level for profanity.|

<h2 id="tocS_UpdateAutoModSettingsResponse">UpdateAutoModSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateautomodsettingsresponse"></a>
<a id="schema_UpdateAutoModSettingsResponse"></a>
<a id="tocSupdateautomodsettingsresponse"></a>
<a id="tocsupdateautomodsettingsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "moderator_id": "string",
      "overall_level": 0,
      "disability": 0,
      "aggression": 0,
      "sexuality_sex_or_gender": 0,
      "misogyny": 0,
      "bullying": 0,
      "swearing": 0,
      "race_ethnicity_or_religion": 0,
      "sex_based_terms": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AutoModSettings](#schemaautomodsettings)]|true|none|The list of AutoMod settings. The list contains a single object that contains all the AutoMod settings.|

<h2 id="tocS_BannedUser">BannedUser</h2>
<!-- backwards compatibility -->
<a id="schemabanneduser"></a>
<a id="schema_BannedUser"></a>
<a id="tocSbanneduser"></a>
<a id="tocsbanneduser"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "expires_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "reason": "string",
  "moderator_id": "string",
  "moderator_login": "string",
  "moderator_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the banned user.|
|user_login|string|true|none|The banned user’s login name.|
|user_name|string|true|none|The banned user’s display name.|
|expires_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the timeout expires, or an empty string if the user is permanently banned.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the user was banned.|
|reason|string|true|none|The reason the user was banned or put in a timeout if the moderator provided one.|
|moderator_id|string|true|none|The ID of the moderator that banned the user or put them in a timeout.|
|moderator_login|string|true|none|The moderator’s login name.|
|moderator_name|string|true|none|The moderator’s display name.|

<h2 id="tocS_GetBannedUsersResponse">GetBannedUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbannedusersresponse"></a>
<a id="schema_GetBannedUsersResponse"></a>
<a id="tocSgetbannedusersresponse"></a>
<a id="tocsgetbannedusersresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "expires_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "reason": "string",
      "moderator_id": "string",
      "moderator_login": "string",
      "moderator_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BannedUser](#schemabanneduser)]|true|none|The list of users that were banned or put in a timeout.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_BanUserBody">BanUserBody</h2>
<!-- backwards compatibility -->
<a id="schemabanuserbody"></a>
<a id="schema_BanUserBody"></a>
<a id="tocSbanuserbody"></a>
<a id="tocsbanuserbody"></a>

```json
{
  "data": {
    "user_id": "string",
    "duration": 0,
    "reason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|Identifies the user and type of ban.|

<h2 id="tocS_BanUserResponse">BanUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanuserresponse"></a>
<a id="schema_BanUserResponse"></a>
<a id="tocSbanuserresponse"></a>
<a id="tocsbanuserresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "moderator_id": "string",
      "user_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains the user you successfully banned or put in a timeout.|

<h2 id="tocS_GetUnbanRequestsResponse">GetUnbanRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetunbanrequestsresponse"></a>
<a id="schema_GetUnbanRequestsResponse"></a>
<a id="tocSgetunbanrequestsresponse"></a>
<a id="tocsgetunbanrequestsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "moderator_id": "string",
      "moderator_login": "string",
      "moderator_name": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "text": "string",
      "status": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "resolved_at": "1970-01-01T00:00:00Z",
      "resolution_text": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains information about the channel's unban requests.|
|pagination|object|false|none|Contains information used to page through a list of results. The object is empty if there are no more pages left to page through.|

<h2 id="tocS_ResolveUnbanRequestsResponse">ResolveUnbanRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolveunbanrequestsresponse"></a>
<a id="schema_ResolveUnbanRequestsResponse"></a>
<a id="tocSresolveunbanrequestsresponse"></a>
<a id="tocsresolveunbanrequestsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "moderator_id": "string",
      "moderator_login": "string",
      "moderator_name": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "text": "string",
      "status": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "resolved_at": "1970-01-01T00:00:00Z",
      "resolution_text": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|

<h2 id="tocS_BlockedTerm">BlockedTerm</h2>
<!-- backwards compatibility -->
<a id="schemablockedterm"></a>
<a id="schema_BlockedTerm"></a>
<a id="tocSblockedterm"></a>
<a id="tocsblockedterm"></a>

```json
{
  "broadcaster_id": "string",
  "moderator_id": "string",
  "id": "string",
  "text": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The broadcaster that owns the list of blocked terms.|
|moderator_id|string|true|none|The moderator that blocked the word or phrase from being used in the broadcaster’s chat room.|
|id|string|true|none|An ID that identifies this blocked term.|
|text|string|true|none|The blocked word or phrase.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) that the term was blocked.|
|updated_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) that the term was updated.  <br>  <br>When the term is added, this timestamp is the same as `created_at`. The timestamp changes as AutoMod continues to deny the term.|
|expires_at|string(date-time) \| null|true|none|The UTC date and time (in RFC3339 format) that the blocked term is set to expire. After the block expires, users may use the term in the broadcaster’s chat room.  <br>  <br>This field is **null** if the term was added manually or was permanently blocked by AutoMod.|

<h2 id="tocS_GetBlockedTermsResponse">GetBlockedTermsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetblockedtermsresponse"></a>
<a id="schema_GetBlockedTermsResponse"></a>
<a id="tocSgetblockedtermsresponse"></a>
<a id="tocsgetblockedtermsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "moderator_id": "string",
      "id": "string",
      "text": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BlockedTerm](#schemablockedterm)]|true|none|The list of blocked terms. The list is in descending order of when they were created (see the `created_at` timestamp).|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_AddBlockedTermBody">AddBlockedTermBody</h2>
<!-- backwards compatibility -->
<a id="schemaaddblockedtermbody"></a>
<a id="schema_AddBlockedTermBody"></a>
<a id="tocSaddblockedtermbody"></a>
<a id="tocsaddblockedtermbody"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The word or phrase to block from being used in the broadcaster’s chat room. The term must contain a minimum of 2 characters and may contain up to a maximum of 500 characters.  <br>  <br>Terms may include a wildcard character (\*). The wildcard character must appear at the beginning or end of a word or set of characters. For example, \*foo or foo\*.  <br>  <br>If the blocked term already exists, the response contains the existing blocked term.|

<h2 id="tocS_AddBlockedTermResponse">AddBlockedTermResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddblockedtermresponse"></a>
<a id="schema_AddBlockedTermResponse"></a>
<a id="tocSaddblockedtermresponse"></a>
<a id="tocsaddblockedtermresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "moderator_id": "string",
      "id": "string",
      "text": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BlockedTerm](#schemablockedterm)]|true|none|A list that contains the single blocked term that the broadcaster added.|

<h2 id="tocS_GetModeratedChannelsResponse">GetModeratedChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmoderatedchannelsresponse"></a>
<a id="schema_GetModeratedChannelsResponse"></a>
<a id="tocSgetmoderatedchannelsresponse"></a>
<a id="tocsgetmoderatedchannelsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The list of channels that the user has moderator privileges in.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.|

<h2 id="tocS_UserModerator">UserModerator</h2>
<!-- backwards compatibility -->
<a id="schemausermoderator"></a>
<a id="schema_UserModerator"></a>
<a id="tocSusermoderator"></a>
<a id="tocsusermoderator"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the user that has permission to moderate the broadcaster’s channel.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|

<h2 id="tocS_GetModeratorsResponse">GetModeratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmoderatorsresponse"></a>
<a id="schema_GetModeratorsResponse"></a>
<a id="tocSgetmoderatorsresponse"></a>
<a id="tocsgetmoderatorsresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserModerator](#schemausermoderator)]|true|none|The list of moderators.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_UserVip">UserVip</h2>
<!-- backwards compatibility -->
<a id="schemauservip"></a>
<a id="schema_UserVip"></a>
<a id="tocSuservip"></a>
<a id="tocsuservip"></a>

```json
{
  "user_id": "string",
  "user_name": "string",
  "user_login": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|An ID that uniquely identifies the VIP user.|
|user_name|string|true|none|The user’s display name.|
|user_login|string|true|none|The user’s login name.|

<h2 id="tocS_GetVIPsResponse">GetVIPsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvipsresponse"></a>
<a id="schema_GetVIPsResponse"></a>
<a id="tocSgetvipsresponse"></a>
<a id="tocsgetvipsresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_name": "string",
      "user_login": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserVip](#schemauservip)]|true|none|The list of VIPs. The list is empty if the broadcaster doesn’t have VIP users.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_UpdateShieldModeStatusBody">UpdateShieldModeStatusBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshieldmodestatusbody"></a>
<a id="schema_UpdateShieldModeStatusBody"></a>
<a id="tocSupdateshieldmodestatusbody"></a>
<a id="tocsupdateshieldmodestatusbody"></a>

```json
{
  "is_active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_active|boolean|true|none|A Boolean value that determines whether to activate Shield Mode. Set to **true** to activate Shield Mode; otherwise, **false** to deactivate Shield Mode.|

<h2 id="tocS_UpdateShieldModeStatusResponse">UpdateShieldModeStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateshieldmodestatusresponse"></a>
<a id="schema_UpdateShieldModeStatusResponse"></a>
<a id="tocSupdateshieldmodestatusresponse"></a>
<a id="tocsupdateshieldmodestatusresponse"></a>

```json
{
  "data": [
    {
      "is_active": true,
      "moderator_id": "string",
      "moderator_login": "string",
      "moderator_name": "string",
      "last_activated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains a single object with the broadcaster’s updated Shield Mode status.|

<h2 id="tocS_GetShieldModeStatusResponse">GetShieldModeStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetshieldmodestatusresponse"></a>
<a id="schema_GetShieldModeStatusResponse"></a>
<a id="tocSgetshieldmodestatusresponse"></a>
<a id="tocsgetshieldmodestatusresponse"></a>

```json
{
  "data": [
    {
      "is_active": true,
      "moderator_id": "string",
      "moderator_login": "string",
      "moderator_name": "string",
      "last_activated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains a single object with the broadcaster’s Shield Mode status.|

<h2 id="tocS_WarnChatUserBody">WarnChatUserBody</h2>
<!-- backwards compatibility -->
<a id="schemawarnchatuserbody"></a>
<a id="schema_WarnChatUserBody"></a>
<a id="tocSwarnchatuserbody"></a>
<a id="tocswarnchatuserbody"></a>

```json
{
  "data": {
    "user_id": "string",
    "reason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|A list that contains information about the warning.|

<h2 id="tocS_WarnChatUserResponse">WarnChatUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemawarnchatuserresponse"></a>
<a id="schema_WarnChatUserResponse"></a>
<a id="tocSwarnchatuserresponse"></a>
<a id="tocswarnchatuserresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "user_id": "string",
      "moderator_id": "string",
      "reason": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains information about the warning.|

<h2 id="tocS_AddSuspiciousStatusToChatUserBody">AddSuspiciousStatusToChatUserBody</h2>
<!-- backwards compatibility -->
<a id="schemaaddsuspiciousstatustochatuserbody"></a>
<a id="schema_AddSuspiciousStatusToChatUserBody"></a>
<a id="tocSaddsuspiciousstatustochatuserbody"></a>
<a id="tocsaddsuspiciousstatustochatuserbody"></a>

```json
{
  "user_id": "string",
  "status": "ACTIVE_MONITORING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the user being given the suspicious status.|
|status|string|true|none|The type of suspicious status. Possible values are: ACTIVE\_MONITORING, RESTRICTED|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE_MONITORING|
|status|RESTRICTED|

<h2 id="tocS_AddSuspiciousStatusToChatUserResponse">AddSuspiciousStatusToChatUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddsuspiciousstatustochatuserresponse"></a>
<a id="schema_AddSuspiciousStatusToChatUserResponse"></a>
<a id="tocSaddsuspiciousstatustochatuserresponse"></a>
<a id="tocsaddsuspiciousstatustochatuserresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "broadcaster_id": "string",
      "moderator_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "status": "ACTIVE_MONITORING",
      "types": [
        "MANUALLY_ADDED"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|An array with one object containing information about the suspicious user action.|

<h2 id="tocS_RemoveSuspiciousStatusFromChatUserResponse">RemoveSuspiciousStatusFromChatUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremovesuspiciousstatusfromchatuserresponse"></a>
<a id="schema_RemoveSuspiciousStatusFromChatUserResponse"></a>
<a id="tocSremovesuspiciousstatusfromchatuserresponse"></a>
<a id="tocsremovesuspiciousstatusfromchatuserresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "broadcaster_id": "string",
      "moderator_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "status": "NO_TREATMENT",
      "types": [
        "MANUALLY_ADDED"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|An array with one object containing information about the suspicious user action.|

<h2 id="tocS_Poll">Poll</h2>
<!-- backwards compatibility -->
<a id="schemapoll"></a>
<a id="schema_Poll"></a>
<a id="tocSpoll"></a>
<a id="tocspoll"></a>

```json
{
  "id": "string",
  "broadcaster_id": "string",
  "broadcaster_name": "string",
  "broadcaster_login": "string",
  "title": "string",
  "choices": [
    {
      "id": "string",
      "title": "string",
      "votes": 0,
      "channel_points_votes": 0,
      "bits_votes": 0
    }
  ],
  "bits_voting_enabled": true,
  "bits_per_vote": 0,
  "channel_points_voting_enabled": true,
  "channel_points_per_vote": 0,
  "status": "ACTIVE",
  "duration": 0,
  "started_at": "1970-01-01T00:00:00Z",
  "ended_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the poll.|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster that created the poll.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|title|string|true|none|The question that viewers are voting on. For example, _What game should I play next?_ The title may contain a maximum of 60 characters.|
|choices|[object]|true|none|A list of choices that viewers can choose from. The list will contain a minimum of two choices and up to a maximum of five choices.|
|bits_voting_enabled|boolean|true|none|Not used; will be set to **false**.|
|bits_per_vote|integer(int32)|true|none|Not used; will be set to 0.|
|channel_points_voting_enabled|boolean|true|none|A Boolean value that indicates whether viewers may cast additional votes using Channel Points. For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).|
|channel_points_per_vote|integer(int32)|true|none|The number of points the viewer must spend to cast one additional vote.|
|status|string|true|none|The poll’s status. Valid values are:  <br>  <br>* ACTIVE — The poll is running.<br>* COMPLETED — The poll ended on schedule (see the `duration` field).<br>* TERMINATED — The poll was terminated before its scheduled end.<br>* ARCHIVED — The poll has been archived and is no longer visible on the channel.<br>* MODERATED — The poll was deleted.<br>* INVALID — Something went wrong while determining the state.|
|duration|integer(int32)|true|none|The length of time (in seconds) that the poll will run for.|
|started_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the poll began.|
|ended_at|string(date-time) \| null|true|none|The UTC date and time (in RFC3339 format) of when the poll ended. If `status` is ACTIVE, this field is set to **null**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|COMPLETED|
|status|TERMINATED|
|status|ARCHIVED|
|status|MODERATED|
|status|INVALID|

<h2 id="tocS_GetPollsResponse">GetPollsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpollsresponse"></a>
<a id="schema_GetPollsResponse"></a>
<a id="tocSgetpollsresponse"></a>
<a id="tocsgetpollsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "choices": [
        {
          "id": "string",
          "title": "string",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": true,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": true,
      "channel_points_per_vote": 0,
      "status": "ACTIVE",
      "duration": 0,
      "started_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Poll](#schemapoll)]|true|none|A list of polls. The polls are returned in descending order of start time unless you specify IDs in the request, in which case they're returned in the same order as you passed them in the request. The list is empty if the broadcaster hasn't created polls.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_CreatePollBody">CreatePollBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepollbody"></a>
<a id="schema_CreatePollBody"></a>
<a id="tocScreatepollbody"></a>
<a id="tocscreatepollbody"></a>

```json
{
  "broadcaster_id": "string",
  "title": "string",
  "choices": [
    {
      "title": "string"
    }
  ],
  "duration": 0,
  "channel_points_voting_enabled": true,
  "channel_points_per_vote": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token.|
|title|string|true|none|The question that viewers will vote on. For example, _What game should I play next?_ The question may contain a maximum of 60 characters.|
|choices|[object]|true|none|A list of choices that viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 5 choices.|
|duration|integer(int32)|true|none|The length of time (in seconds) that the poll will run for. The minimum is 15 seconds and the maximum is 1800 seconds (30 minutes).|
|channel_points_voting_enabled|boolean|false|none|A Boolean value that indicates whether viewers may cast additional votes using Channel Points. If **true**, the viewer may cast more than one vote but each additional vote costs the number of Channel Points specified in `channel_points_per_vote`. The default is **false** (viewers may cast only one vote). For information about Channel Points, see [Channel Points Guide](https://help.twitch.tv/s/article/channel-points-guide).|
|channel_points_per_vote|integer(int32)|false|none|The number of points that the viewer must spend to cast one additional vote. The minimum is 1 and the maximum is 1000000\. Set only if `ChannelPointsVotingEnabled` is **true**.|

<h2 id="tocS_CreatePollResponse">CreatePollResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepollresponse"></a>
<a id="schema_CreatePollResponse"></a>
<a id="tocScreatepollresponse"></a>
<a id="tocscreatepollresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "choices": [
        {
          "id": "string",
          "title": "string",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": true,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": true,
      "channel_points_per_vote": 0,
      "status": "ACTIVE",
      "duration": 0,
      "started_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Poll](#schemapoll)]|true|none|A list that contains the single poll that you created.|

<h2 id="tocS_EndPollBody">EndPollBody</h2>
<!-- backwards compatibility -->
<a id="schemaendpollbody"></a>
<a id="schema_EndPollBody"></a>
<a id="tocSendpollbody"></a>
<a id="tocsendpollbody"></a>

```json
{
  "broadcaster_id": "string",
  "id": "string",
  "status": "TERMINATED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster that’s running the poll. This ID must match the user ID in the user access token.|
|id|string|true|none|The ID of the poll to update.|
|status|string|true|none|The status to set the poll to. Possible case-sensitive values are:  <br>  <br>* TERMINATED — Ends the poll before the poll is scheduled to end. The poll remains publicly visible.<br>* ARCHIVED — Ends the poll before the poll is scheduled to end, and then archives it so it's no longer publicly visible.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|TERMINATED|
|status|ARCHIVED|

<h2 id="tocS_EndPollResponse">EndPollResponse</h2>
<!-- backwards compatibility -->
<a id="schemaendpollresponse"></a>
<a id="schema_EndPollResponse"></a>
<a id="tocSendpollresponse"></a>
<a id="tocsendpollresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "choices": [
        {
          "id": "string",
          "title": "string",
          "votes": 0,
          "channel_points_votes": 0,
          "bits_votes": 0
        }
      ],
      "bits_voting_enabled": true,
      "bits_per_vote": 0,
      "channel_points_voting_enabled": true,
      "channel_points_per_vote": 0,
      "status": "ACTIVE",
      "duration": 0,
      "started_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Poll](#schemapoll)]|true|none|A list that contains the poll that you ended.|

<h2 id="tocS_PredictionOutcome">PredictionOutcome</h2>
<!-- backwards compatibility -->
<a id="schemapredictionoutcome"></a>
<a id="schema_PredictionOutcome"></a>
<a id="tocSpredictionoutcome"></a>
<a id="tocspredictionoutcome"></a>

```json
{
  "id": "string",
  "title": "string",
  "users": 0,
  "channel_points": 0,
  "top_predictors": [
    {
      "user_id": "string",
      "user_name": "string",
      "user_login": "string",
      "channel_points_used": 0,
      "channel_points_won": 0
    }
  ],
  "color": "BLUE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this outcome.|
|title|string|true|none|The outcome’s text.|
|users|integer(int32)|true|none|The number of unique viewers that chose this outcome.|
|channel_points|integer(int32)|true|none|The number of Channel Points spent by viewers on this outcome.|
|top_predictors|[object]|true|none|A list of viewers who were the top predictors; otherwise, **null** if none.|
|color|string|true|none|The color that visually identifies this outcome in the UX. Possible values are:  <br>  <br>* BLUE<br>* PINK<br>  <br>If the number of outcomes is two, the color is BLUE for the first outcome and PINK for the second outcome. If there are more than two outcomes, the color is BLUE for all outcomes.|

#### Enumerated Values

|Property|Value|
|---|---|
|color|BLUE|
|color|PINK|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "id": "string",
  "broadcaster_id": "string",
  "broadcaster_name": "string",
  "broadcaster_login": "string",
  "title": "string",
  "winning_outcome_id": "string",
  "outcomes": [
    {
      "id": "string",
      "title": "string",
      "users": 0,
      "channel_points": 0,
      "top_predictors": [
        {
          "user_id": "string",
          "user_name": "string",
          "user_login": "string",
          "channel_points_used": 0,
          "channel_points_won": 0
        }
      ],
      "color": "BLUE"
    }
  ],
  "prediction_window": 0,
  "status": "ACTIVE",
  "created_at": "1970-01-01T00:00:00Z",
  "ended_at": "1970-01-01T00:00:00Z",
  "locked_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this prediction.|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster that created the prediction.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|title|string|true|none|The question that the prediction asks. For example, _Will I finish this entire pizza?_|
|winning_outcome_id|string \| null|true|none|The ID of the winning outcome. Is **null** unless `status` is RESOLVED.|
|outcomes|[[PredictionOutcome](#schemapredictionoutcome)]|true|none|The list of possible outcomes for the prediction.|
|prediction_window|integer(int32)|true|none|The length of time (in seconds) that the prediction will run for.|
|status|string|true|none|The prediction’s status. Valid values are:  <br>  <br>* ACTIVE — The Prediction is running and viewers can make predictions.<br>* CANCELED — The broadcaster canceled the Prediction and refunded the Channel Points to the participants.<br>* LOCKED — The broadcaster locked the Prediction, which means viewers can no longer make predictions.<br>* RESOLVED — The winning outcome was determined and the Channel Points were distributed to the viewers who predicted the correct outcome.|
|created_at|string(date-time)|true|none|The UTC date and time of when the Prediction began.|
|ended_at|string(date-time) \| null|true|none|The UTC date and time of when the Prediction ended. If `status` is ACTIVE, this is set to **null**.|
|locked_at|string(date-time) \| null|true|none|The UTC date and time of when the Prediction was locked. If `status` is not LOCKED, this is set to **null**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|CANCELED|
|status|LOCKED|
|status|RESOLVED|

<h2 id="tocS_GetPredictionsResponse">GetPredictionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpredictionsresponse"></a>
<a id="schema_GetPredictionsResponse"></a>
<a id="tocSgetpredictionsresponse"></a>
<a id="tocsgetpredictionsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "winning_outcome_id": "string",
      "outcomes": [
        {
          "id": "string",
          "title": "string",
          "users": 0,
          "channel_points": 0,
          "top_predictors": [
            {
              "user_id": "string",
              "user_name": "string",
              "user_login": "string",
              "channel_points_used": 0,
              "channel_points_won": 0
            }
          ],
          "color": "BLUE"
        }
      ],
      "prediction_window": 0,
      "status": "ACTIVE",
      "created_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z",
      "locked_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Prediction](#schemaprediction)]|true|none|The broadcaster’s list of Channel Points Predictions. The list is sorted in descending ordered by when the prediction began (the most recent prediction is first). The list is empty if the broadcaster hasn’t created predictions.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_CreatePredictionBody">CreatePredictionBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictionbody"></a>
<a id="schema_CreatePredictionBody"></a>
<a id="tocScreatepredictionbody"></a>
<a id="tocscreatepredictionbody"></a>

```json
{
  "broadcaster_id": "string",
  "title": "string",
  "outcomes": [
    {
      "title": "string"
    }
  ],
  "prediction_window": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token.|
|title|string|true|none|The question that the broadcaster is asking. For example, _Will I finish this entire pizza?_ The title is limited to a maximum of 45 characters.|
|outcomes|[object]|true|none|The list of possible outcomes that the viewers may choose from. The list must contain a minimum of 2 choices and up to a maximum of 10 choices.|
|prediction_window|integer(int32)|true|none|The length of time (in seconds) that the prediction will run for. The minimum is 30 seconds and the maximum is 1800 seconds (30 minutes).|

<h2 id="tocS_CreatePredictionResponse">CreatePredictionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepredictionresponse"></a>
<a id="schema_CreatePredictionResponse"></a>
<a id="tocScreatepredictionresponse"></a>
<a id="tocscreatepredictionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "winning_outcome_id": "string",
      "outcomes": [
        {
          "id": "string",
          "title": "string",
          "users": 0,
          "channel_points": 0,
          "top_predictors": [
            {
              "user_id": "string",
              "user_name": "string",
              "user_login": "string",
              "channel_points_used": 0,
              "channel_points_won": 0
            }
          ],
          "color": "BLUE"
        }
      ],
      "prediction_window": 0,
      "status": "ACTIVE",
      "created_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z",
      "locked_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Prediction](#schemaprediction)]|true|none|A list that contains the single prediction that you created.|

<h2 id="tocS_EndPredictionBody">EndPredictionBody</h2>
<!-- backwards compatibility -->
<a id="schemaendpredictionbody"></a>
<a id="schema_EndPredictionBody"></a>
<a id="tocSendpredictionbody"></a>
<a id="tocsendpredictionbody"></a>

```json
{
  "broadcaster_id": "string",
  "id": "string",
  "status": "RESOLVED",
  "winning_outcome_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|The ID of the broadcaster that’s running the prediction. This ID must match the user ID in the user access token.|
|id|string|true|none|The ID of the prediction to update.|
|status|string|true|none|The status to set the prediction to. Possible case-sensitive values are:  <br>  <br>* RESOLVED — The winning outcome is determined and the Channel Points are distributed to the viewers who predicted the correct outcome.<br>* CANCELED — The broadcaster is canceling the prediction and sending refunds to the participants.<br>* LOCKED — The broadcaster is locking the prediction, which means viewers may no longer make predictions.<br>  <br>The broadcaster can update an active prediction to LOCKED, RESOLVED, or CANCELED; and update a locked prediction to RESOLVED or CANCELED.  <br>  <br>The broadcaster has up to 24 hours after the prediction window closes to resolve the prediction. If not, Twitch sets the status to CANCELED and returns the points.|
|winning_outcome_id|string|false|none|The ID of the winning outcome. You must set this parameter if you set `status` to RESOLVED.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|RESOLVED|
|status|CANCELED|
|status|LOCKED|

<h2 id="tocS_EndPredictionResponse">EndPredictionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaendpredictionresponse"></a>
<a id="schema_EndPredictionResponse"></a>
<a id="tocSendpredictionresponse"></a>
<a id="tocsendpredictionresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "broadcaster_id": "string",
      "broadcaster_name": "string",
      "broadcaster_login": "string",
      "title": "string",
      "winning_outcome_id": "string",
      "outcomes": [
        {
          "id": "string",
          "title": "string",
          "users": 0,
          "channel_points": 0,
          "top_predictors": [
            {
              "user_id": "string",
              "user_name": "string",
              "user_login": "string",
              "channel_points_used": 0,
              "channel_points_won": 0
            }
          ],
          "color": "BLUE"
        }
      ],
      "prediction_window": 0,
      "status": "ACTIVE",
      "created_at": "1970-01-01T00:00:00Z",
      "ended_at": "1970-01-01T00:00:00Z",
      "locked_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Prediction](#schemaprediction)]|true|none|A list that contains the single prediction that you updated.|

<h2 id="tocS_StartARaidResponse">StartARaidResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartaraidresponse"></a>
<a id="schema_StartARaidResponse"></a>
<a id="tocSstartaraidresponse"></a>
<a id="tocsstartaraidresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "is_mature": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains a single object with information about the pending raid.|

<h2 id="tocS_ChannelStreamScheduleSegment">ChannelStreamScheduleSegment</h2>
<!-- backwards compatibility -->
<a id="schemachannelstreamschedulesegment"></a>
<a id="schema_ChannelStreamScheduleSegment"></a>
<a id="tocSchannelstreamschedulesegment"></a>
<a id="tocschannelstreamschedulesegment"></a>

```json
{
  "id": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "title": "string",
  "canceled_until": "string",
  "category": {
    "id": "string",
    "name": "string"
  },
  "is_recurring": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this broadcast segment.|
|start_time|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the broadcast starts.|
|end_time|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the broadcast ends.|
|title|string|true|none|The broadcast segment’s title.|
|canceled_until|string \| null|true|none|Indicates whether the broadcaster canceled this segment of a recurring broadcast. If the broadcaster canceled this segment, this field is set to the same value that’s in the `end_time` field; otherwise, it’s set to **null**.|
|category|object|true|none|The type of content that the broadcaster plans to stream or **null** if not specified.|
|is_recurring|boolean|true|none|A Boolean value that determines whether the broadcast is part of a recurring series that streams at the same time each week or is a one-time broadcast. Is **true** if the broadcast is part of a recurring series.|

<h2 id="tocS_GetChannelStreamScheduleResponse">GetChannelStreamScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelstreamscheduleresponse"></a>
<a id="schema_GetChannelStreamScheduleResponse"></a>
<a id="tocSgetchannelstreamscheduleresponse"></a>
<a id="tocsgetchannelstreamscheduleresponse"></a>

```json
{
  "data": {
    "segments": [
      {
        "id": "string",
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z",
        "title": "string",
        "canceled_until": "string",
        "category": {
          "id": "string",
          "name": "string"
        },
        "is_recurring": true
      }
    ],
    "broadcaster_id": "string",
    "broadcaster_name": "string",
    "broadcaster_login": "string",
    "vacation": {
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    },
    "pagination": {
      "cursor": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The broadcaster’s streaming schedule.|

<h2 id="tocS_CreateChannelStreamScheduleSegmentBody">CreateChannelStreamScheduleSegmentBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelstreamschedulesegmentbody"></a>
<a id="schema_CreateChannelStreamScheduleSegmentBody"></a>
<a id="tocScreatechannelstreamschedulesegmentbody"></a>
<a id="tocscreatechannelstreamschedulesegmentbody"></a>

```json
{
  "start_time": "1970-01-01T00:00:00Z",
  "timezone": "string",
  "duration": "string",
  "is_recurring": true,
  "category_id": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_time|string(date-time)|true|none|The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2021-07-01T18:00:00Z).|
|timezone|string|true|none|The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York).|
|duration|string|true|none|The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).|
|is_recurring|boolean|false|none|A Boolean value that determines whether the broadcast recurs weekly. Is **true** if the broadcast recurs weekly. Only partners and affiliates may add non-recurring broadcasts.|
|category_id|string|false|none|The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.|
|title|string|false|none|The broadcast’s title. The title may contain a maximum of 140 characters.|

<h2 id="tocS_CreateChannelStreamScheduleSegmentResponse">CreateChannelStreamScheduleSegmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelstreamschedulesegmentresponse"></a>
<a id="schema_CreateChannelStreamScheduleSegmentResponse"></a>
<a id="tocScreatechannelstreamschedulesegmentresponse"></a>
<a id="tocscreatechannelstreamschedulesegmentresponse"></a>

```json
{
  "data": {
    "segments": [
      {
        "id": "string",
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z",
        "title": "string",
        "canceled_until": "string",
        "category": {
          "id": "string",
          "name": "string"
        },
        "is_recurring": true
      }
    ],
    "broadcaster_id": "string",
    "broadcaster_name": "string",
    "broadcaster_login": "string",
    "vacation": {
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The broadcaster’s streaming scheduled.|

<h2 id="tocS_UpdateChannelStreamScheduleSegmentBody">UpdateChannelStreamScheduleSegmentBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelstreamschedulesegmentbody"></a>
<a id="schema_UpdateChannelStreamScheduleSegmentBody"></a>
<a id="tocSupdatechannelstreamschedulesegmentbody"></a>
<a id="tocsupdatechannelstreamschedulesegmentbody"></a>

```json
{
  "start_time": "1970-01-01T00:00:00Z",
  "duration": "string",
  "category_id": "string",
  "title": "string",
  "is_canceled": true,
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_time|string(date-time)|false|none|The date and time that the broadcast segment starts. Specify the date and time in RFC3339 format (for example, 2022-08-02T06:00:00Z).  <br>  <br>**NOTE**: Only partners and affiliates may update a broadcast’s start time and only for non-recurring segments.|
|duration|string|false|none|The length of time, in minutes, that the broadcast is scheduled to run. The duration must be in the range 30 through 1380 (23 hours).|
|category_id|string|false|none|The ID of the category that best represents the broadcast’s content. To get the category ID, use the [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories) endpoint.|
|title|string|false|none|The broadcast’s title. The title may contain a maximum of 140 characters.|
|is_canceled|boolean|false|none|A Boolean value that indicates whether the broadcast is canceled. Set to **true** to cancel the segment.  <br>  <br>**NOTE**: For recurring segments, the API cancels the first segment after the current UTC date and time and not the specified segment (unless the specified segment is the next segment after the current UTC date and time).|
|timezone|string|false|none|The time zone where the broadcast takes place. Specify the time zone using [IANA time zone database](https://www.iana.org/time-zones) format (for example, America/New\_York).|

<h2 id="tocS_UpdateChannelStreamScheduleSegmentResponse">UpdateChannelStreamScheduleSegmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelstreamschedulesegmentresponse"></a>
<a id="schema_UpdateChannelStreamScheduleSegmentResponse"></a>
<a id="tocSupdatechannelstreamschedulesegmentresponse"></a>
<a id="tocsupdatechannelstreamschedulesegmentresponse"></a>

```json
{
  "data": {
    "segments": [
      {
        "id": "string",
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z",
        "title": "string",
        "canceled_until": "string",
        "category": {
          "id": "string",
          "name": "string"
        },
        "is_recurring": true
      }
    ],
    "broadcaster_id": "string",
    "broadcaster_name": "string",
    "broadcaster_login": "string",
    "vacation": {
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The broadcaster’s streaming scheduled.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "box_art_url": "string",
  "name": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|box_art_url|string|true|none|A URL to an image of the game’s box art or streaming category.|
|name|string|true|none|The name of the game or category.|
|id|string|true|none|An ID that uniquely identifies the game or category.|

<h2 id="tocS_SearchCategoriesResponse">SearchCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchcategoriesresponse"></a>
<a id="schema_SearchCategoriesResponse"></a>
<a id="tocSsearchcategoriesresponse"></a>
<a id="tocssearchcategoriesresponse"></a>

```json
{
  "data": [
    {
      "box_art_url": "string",
      "name": "string",
      "id": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Category](#schemacategory)]|true|none|The list of games or categories that match the query. The list is empty if there are no matches.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "broadcaster_language": "string",
  "broadcaster_login": "string",
  "display_name": "string",
  "game_id": "string",
  "game_name": "string",
  "id": "string",
  "is_live": true,
  "tag_ids": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "thumbnail_url": "string",
  "title": "string",
  "started_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_language|string|true|none|The ISO 639-1 two-letter language code of the language used by the broadcaster. For example, _en_ for English. If the broadcaster uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang), the value is _other_.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|display_name|string|true|none|The broadcaster’s display name.|
|game_id|string|true|none|The ID of the game that the broadcaster is playing or last played.|
|game_name|string|true|none|The name of the game that the broadcaster is playing or last played.|
|id|string|true|none|An ID that uniquely identifies the channel (this is the broadcaster’s ID).|
|is_live|boolean|true|none|A Boolean value that determines whether the broadcaster is streaming live. Is **true** if the broadcaster is streaming live; otherwise, **false**.|
|tag_ids|[string]|true|none|**Deprecated.** **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field.  <br>  <br>The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn’t include Category Tags.|
|tags|[string]|true|none|The tags applied to the channel.|
|thumbnail_url|string|true|none|A URL to a thumbnail of the broadcaster’s profile image.|
|title|string|true|none|The stream’s title. Is an empty string if the broadcaster didn’t set it.|
|started_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the broadcaster started streaming. The string is empty if the broadcaster is not streaming live.|

<h2 id="tocS_SearchChannelsResponse">SearchChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchchannelsresponse"></a>
<a id="schema_SearchChannelsResponse"></a>
<a id="tocSsearchchannelsresponse"></a>
<a id="tocssearchchannelsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_language": "string",
      "broadcaster_login": "string",
      "display_name": "string",
      "game_id": "string",
      "game_name": "string",
      "id": "string",
      "is_live": true,
      "tag_ids": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "thumbnail_url": "string",
      "title": "string",
      "started_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Channel](#schemachannel)]|true|none|The list of channels that match the query. The list is empty if there are no matches.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GetStreamKeyResponse">GetStreamKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamkeyresponse"></a>
<a id="schema_GetStreamKeyResponse"></a>
<a id="tocSgetstreamkeyresponse"></a>
<a id="tocsgetstreamkeyresponse"></a>

```json
{
  "data": [
    {
      "stream_key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|A list that contains the channel’s stream key.|

<h2 id="tocS_Stream">Stream</h2>
<!-- backwards compatibility -->
<a id="schemastream"></a>
<a id="schema_Stream"></a>
<a id="tocSstream"></a>
<a id="tocsstream"></a>

```json
{
  "id": "string",
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "game_id": "string",
  "game_name": "string",
  "type": "live",
  "title": "string",
  "viewer_count": 0,
  "started_at": "1970-01-01T00:00:00Z",
  "language": "string",
  "thumbnail_url": "string",
  "tag_ids": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "is_mature": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the stream. You can use this ID later to look up the video on demand (VOD).|
|user_id|string|true|none|The ID of the user that’s broadcasting the stream.|
|user_login|string|true|none|The user’s login name.|
|user_name|string|true|none|The user’s display name.|
|game_id|string|true|none|The ID of the category or game being played.|
|game_name|string|true|none|The ID of the category or game being played.|
|type|string|true|none|The type of stream. Possible values are:  <br>  <br>* live<br>  <br>If an error occurs, this field is set to an empty string.|
|title|string|true|none|The stream’s title. Is an empty string if not set.|
|viewer_count|integer(int32)|true|none|The number of users watching the stream.|
|started_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the broadcast began.|
|language|string|true|none|The language that the stream uses. This is an ISO 639-1 two-letter language code or _other_ if the stream uses a language not in the list of [supported stream languages](https://help.twitch.tv/s/article/languages-on-twitch#streamlang).|
|thumbnail_url|string|true|none|A URL to an image of a frame from the last 5 minutes of the stream. Replace the width and height placeholders in the URL (`{width}x{height}`) with the size of the image you want, in pixels.|
|tag_ids|[string]|true|none|**Deprecated.** **IMPORTANT** As of February 28, 2023, this field is deprecated and returns only an empty array. If you use this field, please update your code to use the `tags` field.  <br>  <br>The list of tags that apply to the stream. The list contains IDs only when the channel is steaming live. For a list of possible tags, see [List of All Tags](https://www.twitch.tv/directory/all/tags). The list doesn’t include Category Tags.|
|tags|[string]|true|none|The tags applied to the stream.|
|is_mature|boolean|true|none|**IMPORTANT** This field is deprecated and returns only `false`.  <br>  <br>A Boolean value that indicates whether the stream is meant for mature audiences.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|live|

<h2 id="tocS_GetStreamsResponse">GetStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamsresponse"></a>
<a id="schema_GetStreamsResponse"></a>
<a id="tocSgetstreamsresponse"></a>
<a id="tocsgetstreamsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "game_id": "string",
      "game_name": "string",
      "type": "live",
      "title": "string",
      "viewer_count": 0,
      "started_at": "1970-01-01T00:00:00Z",
      "language": "string",
      "thumbnail_url": "string",
      "tag_ids": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "is_mature": true
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Stream](#schemastream)]|true|none|The list of streams.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GetFollowedStreamsResponse">GetFollowedStreamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfollowedstreamsresponse"></a>
<a id="schema_GetFollowedStreamsResponse"></a>
<a id="tocSgetfollowedstreamsresponse"></a>
<a id="tocsgetfollowedstreamsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "game_id": "string",
      "game_name": "string",
      "type": "live",
      "title": "string",
      "viewer_count": 0,
      "started_at": "1970-01-01T00:00:00Z",
      "language": "string",
      "thumbnail_url": "string",
      "tag_ids": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "is_mature": true
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Stream](#schemastream)]|true|none|The list of live streams of broadcasters that the specified user follows. The list is in descending order by the number of viewers watching the stream. Because viewers come and go during a stream, it’s possible to find duplicate or missing streams in the list as you page through the results. The list is empty if none of the followed broadcasters are streaming live.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_CreateStreamMarkerBody">CreateStreamMarkerBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreammarkerbody"></a>
<a id="schema_CreateStreamMarkerBody"></a>
<a id="tocScreatestreammarkerbody"></a>
<a id="tocscreatestreammarkerbody"></a>

```json
{
  "user_id": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the broadcaster that’s streaming content. This ID must match the user ID in the access token or the user in the access token must be one of the broadcaster’s editors.|
|description|string|false|none|A short description of the marker to help the user remember why they marked the location. The maximum length of the description is 140 characters.|

<h2 id="tocS_StreamMarkerCreated">StreamMarkerCreated</h2>
<!-- backwards compatibility -->
<a id="schemastreammarkercreated"></a>
<a id="schema_StreamMarkerCreated"></a>
<a id="tocSstreammarkercreated"></a>
<a id="tocsstreammarkercreated"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "position_seconds": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies this marker.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the user created the marker.|
|position_seconds|integer(int32)|true|none|The relative offset (in seconds) of the marker from the beginning of the stream.|
|description|string|true|none|A description that the user gave the marker to help them remember why they marked the location.|

<h2 id="tocS_CreateStreamMarkerResponse">CreateStreamMarkerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreammarkerresponse"></a>
<a id="schema_CreateStreamMarkerResponse"></a>
<a id="tocScreatestreammarkerresponse"></a>
<a id="tocscreatestreammarkerresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "position_seconds": 0,
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StreamMarkerCreated](#schemastreammarkercreated)]|true|none|A list that contains the single marker that you added.|

<h2 id="tocS_StreamMarkers">StreamMarkers</h2>
<!-- backwards compatibility -->
<a id="schemastreammarkers"></a>
<a id="schema_StreamMarkers"></a>
<a id="tocSstreammarkers"></a>
<a id="tocsstreammarkers"></a>

```json
{
  "user_id": "string",
  "user_name": "string",
  "user_login": "string",
  "videos": [
    {
      "video_id": "string",
      "markers": [
        {
          "id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "position_seconds": 0,
          "url": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the user that created the marker.|
|user_name|string|true|none|The user’s display name.|
|user_login|string|true|none|The user’s login name.|
|videos|[object]|true|none|A list of videos that contain markers. The list contains a single video.|

<h2 id="tocS_GetStreamMarkersResponse">GetStreamMarkersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreammarkersresponse"></a>
<a id="schema_GetStreamMarkersResponse"></a>
<a id="tocSgetstreammarkersresponse"></a>
<a id="tocsgetstreammarkersresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_name": "string",
      "user_login": "string",
      "videos": [
        {
          "video_id": "string",
          "markers": [
            {
              "id": "string",
              "created_at": "1970-01-01T00:00:00Z",
              "description": "string",
              "position_seconds": 0,
              "url": "string"
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StreamMarkers](#schemastreammarkers)]|true|none|The list of markers grouped by the user that created the marks.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_BroadcasterSubscription">BroadcasterSubscription</h2>
<!-- backwards compatibility -->
<a id="schemabroadcastersubscription"></a>
<a id="schema_BroadcasterSubscription"></a>
<a id="tocSbroadcastersubscription"></a>
<a id="tocsbroadcastersubscription"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "gifter_id": "string",
  "gifter_login": "string",
  "gifter_name": "string",
  "is_gift": true,
  "plan_name": "string",
  "tier": "1000",
  "user_id": "string",
  "user_name": "string",
  "user_login": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|gifter_id|string|true|none|The ID of the user that gifted the subscription to the user. Is an empty string if `is_gift` is **false**.|
|gifter_login|string|true|none|The gifter’s login name. Is an empty string if `is_gift` is **false**.|
|gifter_name|string|true|none|The gifter’s display name. Is an empty string if `is_gift` is **false**.|
|is_gift|boolean|true|none|A Boolean value that determines whether the subscription is a gift subscription. Is **true** if the subscription was gifted.|
|plan_name|string|true|none|The name of the subscription.|
|tier|string|true|none|The type of subscription. Possible values are:  <br>  <br>* 1000 — Tier 1<br>* 2000 — Tier 2<br>* 3000 — Tier 3|
|user_id|string|true|none|An ID that identifies the subscribing user.|
|user_name|string|true|none|The user’s display name.|
|user_login|string|true|none|The user’s login name.|

#### Enumerated Values

|Property|Value|
|---|---|
|tier|1000|
|tier|2000|
|tier|3000|

<h2 id="tocS_GetBroadcasterSubscriptionsResponse">GetBroadcasterSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbroadcastersubscriptionsresponse"></a>
<a id="schema_GetBroadcasterSubscriptionsResponse"></a>
<a id="tocSgetbroadcastersubscriptionsresponse"></a>
<a id="tocsgetbroadcastersubscriptionsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "gifter_id": "string",
      "gifter_login": "string",
      "gifter_name": "string",
      "is_gift": true,
      "plan_name": "string",
      "tier": "1000",
      "user_id": "string",
      "user_name": "string",
      "user_login": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  },
  "points": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BroadcasterSubscription](#schemabroadcastersubscription)]|true|none|The list of users that subscribe to the broadcaster. The list is empty if the broadcaster has no subscribers.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|
|points|integer(int32)|true|none|The current number of subscriber points earned by this broadcaster. Points are based on the subscription tier of each user that subscribes to this broadcaster. For example, a Tier 1 subscription is worth 1 point, Tier 2 is worth 2 points, and Tier 3 is worth 6 points. The number of points determines the number of emote slots that are unlocked for the broadcaster (see [Subscriber Emote Slots](https://help.twitch.tv/s/article/subscriber-emote-guide#emoteslots)).  <br>  <br>If the `user_id` query parameter is used, this field will be null.|
|total|integer(int32)|true|none|The total number of users that subscribe to this broadcaster.  <br>  <br>If the `user_id` query parameter is used, this field will be null.|

<h2 id="tocS_UserSubscription">UserSubscription</h2>
<!-- backwards compatibility -->
<a id="schemausersubscription"></a>
<a id="schema_UserSubscription"></a>
<a id="tocSusersubscription"></a>
<a id="tocsusersubscription"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "gifter_id": "string",
  "gifter_login": "string",
  "gifter_name": "string",
  "is_gift": true,
  "tier": "1000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|gifter_id|string|false|none|The ID of the user that gifted the subscription. The object includes this field only if `is_gift` is **true**.|
|gifter_login|string|false|none|The gifter’s login name. The object includes this field only if `is_gift` is **true**.|
|gifter_name|string|false|none|The gifter’s display name. The object includes this field only if `is_gift` is **true**.|
|is_gift|boolean|true|none|A Boolean value that determines whether the subscription is a gift subscription. Is **true** if the subscription was gifted.|
|tier|string|true|none|The type of subscription. Possible values are:  <br>  <br>* 1000 — Tier 1<br>* 2000 — Tier 2<br>* 3000 — Tier 3|

#### Enumerated Values

|Property|Value|
|---|---|
|tier|1000|
|tier|2000|
|tier|3000|

<h2 id="tocS_CheckUserSubscriptionResponse">CheckUserSubscriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckusersubscriptionresponse"></a>
<a id="schema_CheckUserSubscriptionResponse"></a>
<a id="tocScheckusersubscriptionresponse"></a>
<a id="tocscheckusersubscriptionresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "gifter_id": "string",
      "gifter_login": "string",
      "gifter_name": "string",
      "is_gift": true,
      "tier": "1000"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserSubscription](#schemausersubscription)]|true|none|A list that contains a single object with information about the user’s subscription.|

<h2 id="tocS_StreamTag">StreamTag</h2>
<!-- backwards compatibility -->
<a id="schemastreamtag"></a>
<a id="schema_StreamTag"></a>
<a id="tocSstreamtag"></a>
<a id="tocsstreamtag"></a>

```json
{
  "tag_id": "string",
  "is_auto": true,
  "localization_names": {
    "property1": "string",
    "property2": "string"
  },
  "localization_descriptions": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_id|string|true|none|An ID that identifies this tag.|
|is_auto|boolean|true|none|A Boolean value that determines whether the tag is an automatic tag. An automatic tag is one that Twitch adds to the stream. Broadcasters may not add automatic tags to their channel. The value is **true** if the tag is an automatic tag; otherwise, **false**.|
|localization_names|object|true|none|A dictionary that contains the localized names of the tag. The key is in the form, <locale>-<coutry/region>. For example, en-us. The value is the localized name.|
|localization_descriptions|object|true|none|A dictionary that contains the localized descriptions of the tag. The key is in the form, <locale>-<coutry/region>. For example, en-us. The value is the localized description.|

<h2 id="tocS_GetAllStreamTagsResponse">GetAllStreamTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallstreamtagsresponse"></a>
<a id="schema_GetAllStreamTagsResponse"></a>
<a id="tocSgetallstreamtagsresponse"></a>
<a id="tocsgetallstreamtagsresponse"></a>

```json
{
  "data": [
    {
      "tag_id": "string",
      "is_auto": true,
      "localization_names": {
        "property1": "string",
        "property2": "string"
      },
      "localization_descriptions": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StreamTag](#schemastreamtag)]|true|none|The list of stream tags that the broadcaster can apply to their channel.|
|pagination|object|false|none|The information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_GetStreamTagsResponse">GetStreamTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamtagsresponse"></a>
<a id="schema_GetStreamTagsResponse"></a>
<a id="tocSgetstreamtagsresponse"></a>
<a id="tocsgetstreamtagsresponse"></a>

```json
{
  "data": [
    {
      "tag_id": "string",
      "is_auto": true,
      "localization_names": {
        "property1": "string",
        "property2": "string"
      },
      "localization_descriptions": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[StreamTag](#schemastreamtag)]|true|none|The list of stream tags. The list is empty if the broadcaster or Twitch hasn’t added tags to the broadcaster’s channel.|

<h2 id="tocS_ChannelTeam">ChannelTeam</h2>
<!-- backwards compatibility -->
<a id="schemachannelteam"></a>
<a id="schema_ChannelTeam"></a>
<a id="tocSchannelteam"></a>
<a id="tocschannelteam"></a>

```json
{
  "broadcaster_id": "string",
  "broadcaster_login": "string",
  "broadcaster_name": "string",
  "background_image_url": "string",
  "banner": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "info": "string",
  "thumbnail_url": "string",
  "team_name": "string",
  "team_display_name": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcaster_id|string|true|none|An ID that identifies the broadcaster.|
|broadcaster_login|string|true|none|The broadcaster’s login name.|
|broadcaster_name|string|true|none|The broadcaster’s display name.|
|background_image_url|string \| null|true|none|A URL to the team’s background image. This field is **null** if the team does not have a background image set.|
|banner|string \| null|true|none|A URL to the team’s banner. This field is **null** if the team does not have a banner set.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the team was created.|
|updated_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of the last time the team was updated.|
|info|string|true|none|The team’s description. The description may contain formatting such as Markdown, HTML, newline (\\n) characters, etc.|
|thumbnail_url|string|true|none|A URL to a thumbnail image of the team’s logo.|
|team_name|string|true|none|The team’s name.|
|team_display_name|string|true|none|The team’s display name.|
|id|string|true|none|An ID that identifies the team.|

<h2 id="tocS_GetChannelTeamsResponse">GetChannelTeamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchannelteamsresponse"></a>
<a id="schema_GetChannelTeamsResponse"></a>
<a id="tocSgetchannelteamsresponse"></a>
<a id="tocsgetchannelteamsresponse"></a>

```json
{
  "data": [
    {
      "broadcaster_id": "string",
      "broadcaster_login": "string",
      "broadcaster_name": "string",
      "background_image_url": "string",
      "banner": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "info": "string",
      "thumbnail_url": "string",
      "team_name": "string",
      "team_display_name": "string",
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ChannelTeam](#schemachannelteam)]|true|none|The list of teams that the broadcaster is a member of. Returns an empty array if the broadcaster is not a member of a team.|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "users": [
    {
      "user_id": "string",
      "user_login": "string",
      "user_name": "string"
    }
  ],
  "background_image_url": "string",
  "banner": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "info": "string",
  "thumbnail_url": "string",
  "team_name": "string",
  "team_display_name": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|true|none|The list of team members.|
|background_image_url|string \| null|true|none|A URL to the team’s background image. This field is **null** if the team does not have a background image set.|
|banner|string \| null|true|none|A URL to the team’s banner. This field is **null** if the team does not have a banner image set.|
|created_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of when the team was created.|
|updated_at|string(date-time)|true|none|The UTC date and time (in RFC3339 format) of the last time the team was updated.|
|info|string|true|none|The team’s description. The description may contain formatting such as Markdown, HTML, newline (\\n) characters, etc.|
|thumbnail_url|string|true|none|A URL to a thumbnail image of the team’s logo.|
|team_name|string|true|none|The team’s name.|
|team_display_name|string|true|none|The team’s display name.|
|id|string|true|none|An ID that identifies the team.|

<h2 id="tocS_GetTeamsResponse">GetTeamsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetteamsresponse"></a>
<a id="schema_GetTeamsResponse"></a>
<a id="tocSgetteamsresponse"></a>
<a id="tocsgetteamsresponse"></a>

```json
{
  "data": [
    {
      "users": [
        {
          "user_id": "string",
          "user_login": "string",
          "user_name": "string"
        }
      ],
      "background_image_url": "string",
      "banner": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "info": "string",
      "thumbnail_url": "string",
      "team_name": "string",
      "team_display_name": "string",
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Team](#schemateam)]|true|none|A list that contains the single team that you requested.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "string",
  "login": "string",
  "display_name": "string",
  "type": "admin",
  "broadcaster_type": "affiliate",
  "description": "string",
  "profile_image_url": "string",
  "offline_image_url": "string",
  "view_count": 0,
  "email": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the user.|
|login|string|true|none|The user's login name.|
|display_name|string|true|none|The user's display name.|
|type|string|true|none|The type of user. Possible values are:  <br>  <br>* admin — Twitch administrator<br>* global\_mod<br>* staff — Twitch staff<br>* "" — Normal user|
|broadcaster_type|string|true|none|The type of broadcaster. Possible values are:  <br>  <br>* affiliate — An [affiliate broadcaster](https://help.twitch.tv/s/article/joining-the-affiliate-program)<br>* partner — A [partner broadcaster](https://help.twitch.tv/s/article/partner-program-overview)<br>* "" — A normal broadcaster|
|description|string|true|none|The user's description of their channel.|
|profile_image_url|string|true|none|A URL to the user's profile image.|
|offline_image_url|string|true|none|A URL to the user's offline image.|
|view_count|integer(int32)|true|none|**Deprecated.** The number of times the user's channel has been viewed.  <br>  <br>**NOTE**: This field has been deprecated (see [Get Users API endpoint – "view\_count" deprecation](https://discuss.dev.twitch.tv/t/get-users-api-endpoint-view-count-deprecation/37777)). Any data in this field is not valid and should not be used.|
|email|string|false|none|The user's verified email address. The object includes this field only if the user access token includes the **user:read:email** scope.  <br>  <br>If the request contains more than one user, only the user associated with the access token that provided consent will include an email address — the email address for all other users will be empty.|
|created_at|string(date-time)|true|none|The UTC date and time that the user's account was created. The timestamp is in RFC3339 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|admin|
|type|global_mod|
|type|staff|
|type|""|
|broadcaster_type|affiliate|
|broadcaster_type|partner|
|broadcaster_type|""|

<h2 id="tocS_GetUsersResponse">GetUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusersresponse"></a>
<a id="schema_GetUsersResponse"></a>
<a id="tocSgetusersresponse"></a>
<a id="tocsgetusersresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "login": "string",
      "display_name": "string",
      "type": "admin",
      "broadcaster_type": "affiliate",
      "description": "string",
      "profile_image_url": "string",
      "offline_image_url": "string",
      "view_count": 0,
      "email": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|true|none|The list of users.|

<h2 id="tocS_UpdateUserResponse">UpdateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserresponse"></a>
<a id="schema_UpdateUserResponse"></a>
<a id="tocSupdateuserresponse"></a>
<a id="tocsupdateuserresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "login": "string",
      "display_name": "string",
      "type": "admin",
      "broadcaster_type": "affiliate",
      "description": "string",
      "profile_image_url": "string",
      "offline_image_url": "string",
      "view_count": 0,
      "email": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|true|none|A list contains the single user that you updated.|

<h2 id="tocS_GetAuthorizationByUserResponse">GetAuthorizationByUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationbyuserresponse"></a>
<a id="schema_GetAuthorizationByUserResponse"></a>
<a id="tocSgetauthorizationbyuserresponse"></a>
<a id="tocsgetauthorizationbyuserresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_name": "string",
      "user_login": "string",
      "scopes": [
        "analytics:read:extensions"
      ],
      "has_authorized": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|List of users and their authorized scopes.|

<h2 id="tocS_UserBlockList">UserBlockList</h2>
<!-- backwards compatibility -->
<a id="schemauserblocklist"></a>
<a id="schema_UserBlockList"></a>
<a id="tocSuserblocklist"></a>
<a id="tocsuserblocklist"></a>

```json
{
  "user_id": "string",
  "user_login": "string",
  "display_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|An ID that identifies the blocked user.|
|user_login|string|true|none|The blocked user’s login name.|
|display_name|string|true|none|The blocked user’s display name.|

<h2 id="tocS_GetUserBlockListResponse">GetUserBlockListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserblocklistresponse"></a>
<a id="schema_GetUserBlockListResponse"></a>
<a id="tocSgetuserblocklistresponse"></a>
<a id="tocsgetuserblocklistresponse"></a>

```json
{
  "data": [
    {
      "user_id": "string",
      "user_login": "string",
      "display_name": "string"
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserBlockList](#schemauserblocklist)]|true|none|The list of blocked users. The list is in descending order by when the user was blocked.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.[Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_UserExtension">UserExtension</h2>
<!-- backwards compatibility -->
<a id="schemauserextension"></a>
<a id="schema_UserExtension"></a>
<a id="tocSuserextension"></a>
<a id="tocsuserextension"></a>

```json
{
  "id": "string",
  "version": "string",
  "name": "string",
  "can_activate": true,
  "type": [
    "component"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the extension.|
|version|string|true|none|The extension's version.|
|name|string|true|none|The extension's name.|
|can_activate|boolean|true|none|A Boolean value that determines whether the extension is configured and can be activated. Is **true** if the extension is configured and can be activated.|
|type|[string]|true|none|The extension types that you can activate for this extension. Possible values are:  <br>  <br>* component<br>* mobile<br>* overlay<br>* panel|

#### Enumerated Values

|Property|Value|
|---|---|
|type|component|
|type|mobile|
|type|overlay|
|type|panel|

<h2 id="tocS_GetUserExtensionsResponse">GetUserExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuserextensionsresponse"></a>
<a id="schema_GetUserExtensionsResponse"></a>
<a id="tocSgetuserextensionsresponse"></a>
<a id="tocsgetuserextensionsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "version": "string",
      "name": "string",
      "can_activate": true,
      "type": [
        "component"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserExtension](#schemauserextension)]|true|none|The list of extensions that the user has installed.|

<h2 id="tocS_UserExtensionPanel">UserExtensionPanel</h2>
<!-- backwards compatibility -->
<a id="schemauserextensionpanel"></a>
<a id="schema_UserExtensionPanel"></a>
<a id="tocSuserextensionpanel"></a>
<a id="tocsuserextensionpanel"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a panel extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|
|name|string|false|none|The extension’s name.|

<h2 id="tocS_UserExtensionPanelUpdate">UserExtensionPanelUpdate</h2>
<!-- backwards compatibility -->
<a id="schemauserextensionpanelupdate"></a>
<a id="schema_UserExtensionPanelUpdate"></a>
<a id="tocSuserextensionpanelupdate"></a>
<a id="tocsuserextensionpanelupdate"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a panel extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|

<h2 id="tocS_UserExtensionOverlay">UserExtensionOverlay</h2>
<!-- backwards compatibility -->
<a id="schemauserextensionoverlay"></a>
<a id="schema_UserExtensionOverlay"></a>
<a id="tocSuserextensionoverlay"></a>
<a id="tocsuserextensionoverlay"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured an overlay extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|
|name|string|false|none|The extension’s name.|

<h2 id="tocS_UserExtensionOverlayUpdate">UserExtensionOverlayUpdate</h2>
<!-- backwards compatibility -->
<a id="schemauserextensionoverlayupdate"></a>
<a id="schema_UserExtensionOverlayUpdate"></a>
<a id="tocSuserextensionoverlayupdate"></a>
<a id="tocsuserextensionoverlayupdate"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured an overlay extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|

<h2 id="tocS_UserExtensionComponent">UserExtensionComponent</h2>
<!-- backwards compatibility -->
<a id="schemauserextensioncomponent"></a>
<a id="schema_UserExtensionComponent"></a>
<a id="tocSuserextensioncomponent"></a>
<a id="tocsuserextensioncomponent"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string",
  "name": "string",
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a component extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|
|name|string|false|none|The extension’s name.|
|x|integer(int32)|false|none|The x-coordinate where the extension is placed.|
|y|integer(int32)|false|none|The y-coordinate where the extension is placed.|

<h2 id="tocS_UserExtensionComponentUpdate">UserExtensionComponentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemauserextensioncomponentupdate"></a>
<a id="schema_UserExtensionComponentUpdate"></a>
<a id="tocSuserextensioncomponentupdate"></a>
<a id="tocsuserextensioncomponentupdate"></a>

```json
{
  "active": true,
  "id": "string",
  "version": "string",
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|A Boolean value that determines the extension’s activation state. If **false**, the user has not configured a component extension.|
|id|string|false|none|An ID that identifies the extension.|
|version|string|false|none|The extension’s version.|
|x|integer(int32)|false|none|The x-coordinate where the extension is placed.|
|y|integer(int32)|false|none|The y-coordinate where the extension is placed.|

<h2 id="tocS_GetUserActiveExtensionsResponse">GetUserActiveExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuseractiveextensionsresponse"></a>
<a id="schema_GetUserActiveExtensionsResponse"></a>
<a id="tocSgetuseractiveextensionsresponse"></a>
<a id="tocsgetuseractiveextensionsresponse"></a>

```json
{
  "data": {
    "panel": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      }
    },
    "overlay": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      }
    },
    "component": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string",
        "x": 0,
        "y": 0
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string",
        "x": 0,
        "y": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|The active extensions that the broadcaster has installed.|

<h2 id="tocS_UpdateUserExtensionsBody">UpdateUserExtensionsBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserextensionsbody"></a>
<a id="schema_UpdateUserExtensionsBody"></a>
<a id="tocSupdateuserextensionsbody"></a>
<a id="tocsupdateuserextensionsbody"></a>

```json
{
  "data": {
    "panel": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string"
      }
    },
    "overlay": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string"
      }
    },
    "component": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "x": 0,
        "y": 0
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "x": 0,
        "y": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The extensions to update. The `data` field is a dictionary of extension types. The dictionary’s possible keys are: panel, overlay, or component. The key’s value is a dictionary of extensions.  <br>  <br>For the extension’s dictionary, the key is a sequential number beginning with 1\. For panel and overlay extensions, the key’s value is an object that contains the following fields: `active` (true/false), `id` (the extension’s ID), and `version` (the extension’s version).  <br>  <br>For component extensions, the key’s value includes the above fields plus the `x` and `y` fields, which identify the coordinate where the extension is placed.|

<h2 id="tocS_UpdateUserExtensionsResponse">UpdateUserExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserextensionsresponse"></a>
<a id="schema_UpdateUserExtensionsResponse"></a>
<a id="tocSupdateuserextensionsresponse"></a>
<a id="tocsupdateuserextensionsresponse"></a>

```json
{
  "data": {
    "panel": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      }
    },
    "overlay": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string"
      }
    },
    "component": {
      "property1": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string",
        "x": 0,
        "y": 0
      },
      "property2": {
        "active": true,
        "id": "string",
        "version": "string",
        "name": "string",
        "x": 0,
        "y": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The extensions that the broadcaster updated.|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "id": "string",
  "stream_id": "string",
  "user_id": "string",
  "user_login": "string",
  "user_name": "string",
  "title": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "published_at": "1970-01-01T00:00:00Z",
  "url": "string",
  "thumbnail_url": "string",
  "viewable": "string",
  "view_count": 0,
  "language": "string",
  "type": "archive",
  "duration": "string",
  "muted_segments": [
    {
      "duration": 0,
      "offset": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|An ID that identifies the video.|
|stream_id|string \| null|true|none|The ID of the stream that the video originated from if the video's type is "archive;" otherwise, **null**.|
|user_id|string|true|none|The ID of the broadcaster that owns the video.|
|user_login|string|true|none|The broadcaster's login name.|
|user_name|string|true|none|The broadcaster's display name.|
|title|string|true|none|The video's title.|
|description|string|true|none|The video's description.|
|created_at|string(date-time)|true|none|The date and time, in UTC, of when the video was created. The timestamp is in RFC3339 format.|
|published_at|string(date-time)|true|none|The date and time, in UTC, of when the video was published. The timestamp is in RFC3339 format.|
|url|string|true|none|The video's URL.|
|thumbnail_url|string|true|none|A URL to a thumbnail image of the video. Before using the URL, you must replace the `%{width}` and `%{height}` placeholders with the width and height of the thumbnail you want returned. Due to current limitations, `${width}` must be 320 and `${height}` must be 180.|
|viewable|string|true|none|The video's viewable state. Always set to **public**.|
|view_count|integer(int32)|true|none|The number of times that users have watched the video.|
|language|string|true|none|The ISO 639-1 two-letter language code that the video was broadcast in. For example, the language code is DE if the video was broadcast in German. For a list of supported languages, see [Supported Stream Language](https://help.twitch.tv/s/article/languages-on-twitch#streamlang). The language value is "other" if the video was broadcast in a language not in the list of supported languages.|
|type|string|true|none|The video's type. Possible values are:  <br>  <br>* archive — An on-demand video (VOD) of one of the broadcaster's past streams.<br>* highlight — A highlight reel of one of the broadcaster's past streams. See [Creating Highlights](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers).<br>* upload — A video that the broadcaster uploaded to their video library. See Upload under [Video Producer](https://help.twitch.tv/s/article/video-on-demand?language=en%5FUS#videoproducer).|
|duration|string|true|none|The video's length in ISO 8601 duration format. For example, 3m21s represents 3 minutes, 21 seconds.|
|muted_segments|[object]|true|none|The segments that Twitch Audio Recognition muted; otherwise, **null**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|archive|
|type|highlight|
|type|upload|

<h2 id="tocS_GetVideosResponse">GetVideosResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetvideosresponse"></a>
<a id="schema_GetVideosResponse"></a>
<a id="tocSgetvideosresponse"></a>
<a id="tocsgetvideosresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "stream_id": "string",
      "user_id": "string",
      "user_login": "string",
      "user_name": "string",
      "title": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "published_at": "1970-01-01T00:00:00Z",
      "url": "string",
      "thumbnail_url": "string",
      "viewable": "string",
      "view_count": 0,
      "language": "string",
      "type": "archive",
      "duration": "string",
      "muted_segments": [
        {
          "duration": 0,
          "offset": 0
        }
      ]
    }
  ],
  "pagination": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Video](#schemavideo)]|true|none|The list of published videos that match the filter criteria.|
|pagination|object|false|none|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through. [Read More](https://dev.twitch.tv/docs/api/guide#pagination)|

<h2 id="tocS_DeleteVideosResponse">DeleteVideosResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevideosresponse"></a>
<a id="schema_DeleteVideosResponse"></a>
<a id="tocSdeletevideosresponse"></a>
<a id="tocsdeletevideosresponse"></a>

```json
{
  "data": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|true|none|The list of IDs of the videos that were deleted.|

<h2 id="tocS_SendWhisperBody">SendWhisperBody</h2>
<!-- backwards compatibility -->
<a id="schemasendwhisperbody"></a>
<a id="schema_SendWhisperBody"></a>
<a id="tocSsendwhisperbody"></a>
<a id="tocssendwhisperbody"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The whisper message to send. The message must not be empty.  <br>  <br>The maximum message lengths are:  <br>  <br>* 500 characters if the user you're sending the message to hasn't whispered you before.<br>* 10,000 characters if the user you're sending the message to has whispered you before.<br>  <br>Messages that exceed the maximum length are truncated.|
