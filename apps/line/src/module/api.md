<h1 id="line-messaging-api">LINE Messaging API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Messaging API.

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="line-messaging-api-line-module">line-module</h1>

## detachModule

<a id="opIddetachModule"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/channel/detach \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "botId": "string"
  }'
```

`POST /v2/bot/channel/detach`

The module channel admin calls the Detach API to detach the module channel from a LINE Official Account.

<a href="https://developers.line.biz/en/reference/partner-docs/#unlink-detach-module-channel-by-operation-mc-admin">External documentation</a>

> Body parameter

```json
{
  "botId": "string"
}
```

<h3 id="detachmodule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DetachModuleRequest](#schemadetachmodulerequest)|false|none|
|» botId|body|string|false|User ID of the LINE Official Account bot attached to the module channel.|

<h3 id="detachmodule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## acquireChatControl

<a id="opIdacquireChatControl"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/chat/string/control/acquire \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expired": true,
    "ttl": 3600
  }'
```

`POST /v2/bot/chat/{chatId}/control/acquire`

If the Standby Channel wants to take the initiative (Chat Control), it calls the Acquire Control API.
The channel that was previously an Active Channel will automatically switch to a Standby Channel.


<a href="https://developers.line.biz/en/reference/partner-docs/#acquire-control-api">External documentation</a>

> Body parameter

```json
{
  "expired": true,
  "ttl": 3600
}
```

<h3 id="acquirechatcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chatId|path|string|true|The `userId`, `roomId`, or `groupId`|
|body|body|[AcquireChatControlRequest](#schemaacquirechatcontrolrequest)|false|none|
|» expired|body|boolean|false|`True`: After the time limit (ttl) has passed, the initiative (Chat Control) will return to the Primary Channel. (Default)<br>`False`: There's no time limit and the initiative (Chat Control) doesn't change over time.<br>|
|» ttl|body|integer(int32)|false|The time it takes for initiative (Chat Control) to return to the Primary Channel (the time that the module channel stays on the Active Channel).<br>The value is specified in seconds. The maximum value is one year (3600 * 24 * 365).<br>The default value is 3600 (1 hour).<br><br>* Ignored if the value of expired is false.<br>|

<h3 id="acquirechatcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## releaseChatControl

<a id="opIdreleaseChatControl"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/chat/string/control/release \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/bot/chat/{chatId}/control/release`

To return the initiative (Chat Control) of Active Channel to Primary Channel, call the Release Control API.


<a href="https://developers.line.biz/en/reference/partner-docs/#release-control-api">External documentation</a>

<h3 id="releasechatcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chatId|path|string|true|The `userId`, `roomId`, or `groupId`|

<h3 id="releasechatcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getModules

<a id="opIdgetModules"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/list`

Gets a list of basic information about the bots of multiple LINE Official Accounts that have attached module channels.

<a href="https://developers.line.biz/en/reference/partner-docs/#get-multiple-bot-info-api">External documentation</a>

<h3 id="getmodules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|string|false|Value of the continuation token found in the next property of the JSON object returned in the response.<br>If you can't get all basic information about the bots in one request, include this parameter to get the remaining array.<br>|
|limit|query|integer(int32)|false|Specify the maximum number of bots that you get basic information from. The default value is 100.<br>Max value: 100<br>|

> Example responses

> 200 Response

```json
{
  "bots": [
    {
      "userId": "Uf2dd6e8b081d2ff9c05c98a8a8b269c9",
      "basicId": "@628...",
      "displayName": "Test01",
      "pictureUrl": "https://profile.line-scdn.net/0hyxytJNAlJldEDQzlatVZAHhIKDoz..."
    },
    {
      "userId": "Ua831d37bfe8232808202b85127663f70",
      "basicId": "@076lu...",
      "displayName": "Test02",
      "pictureUrl": "https://profile.line-scdn.net/0hohnizdyzMEdTECbnVo9PEG9VPiok..."
    },
    {
      "userId": "Ub77ea431fba86f7c159a0c0f5be43d9f",
      "basicId": "@290n...",
      "displayName": "Test03"
    },
    {
      "userId": "Ub8ec80a14e879e9c6833fb4cee0e632b",
      "basicId": "@793j...",
      "displayName": "Test04"
    }
  ]
}
```

<h3 id="getmodules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetModulesResponse](#schemagetmodulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_DetachModuleRequest">DetachModuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachmodulerequest"></a>
<a id="schema_DetachModuleRequest"></a>
<a id="tocSdetachmodulerequest"></a>
<a id="tocsdetachmodulerequest"></a>

```json
{
  "botId": "string"
}
```

Unlink (detach) the module channel by the operation of the module channel administrator

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|botId|string|false|none|User ID of the LINE Official Account bot attached to the module channel.|

<h2 id="tocS_AcquireChatControlRequest">AcquireChatControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacquirechatcontrolrequest"></a>
<a id="schema_AcquireChatControlRequest"></a>
<a id="tocSacquirechatcontrolrequest"></a>
<a id="tocsacquirechatcontrolrequest"></a>

```json
{
  "expired": true,
  "ttl": 3600
}
```

Request entity of the Acquire Control API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expired|boolean|false|none|`True`: After the time limit (ttl) has passed, the initiative (Chat Control) will return to the Primary Channel. (Default)<br>`False`: There's no time limit and the initiative (Chat Control) doesn't change over time.<br>|
|ttl|integer(int32)|false|none|The time it takes for initiative (Chat Control) to return to the Primary Channel (the time that the module channel stays on the Active Channel).<br>The value is specified in seconds. The maximum value is one year (3600 * 24 * 365).<br>The default value is 3600 (1 hour).<br><br>* Ignored if the value of expired is false.<br>|

<h2 id="tocS_GetModulesResponse">GetModulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmodulesresponse"></a>
<a id="schema_GetModulesResponse"></a>
<a id="tocSgetmodulesresponse"></a>
<a id="tocsgetmodulesresponse"></a>

```json
{
  "bots": [
    {
      "userId": "string",
      "basicId": "string",
      "premiumId": "string",
      "displayName": "string",
      "pictureUrl": "string"
    }
  ],
  "next": "string"
}
```

List of bots to which the module is attached

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bots|[[ModuleBot](#schemamodulebot)]|true|none|Array of Bot list Item objects representing basic information about the bot.|
|next|string|false|none|Continuation token.<br>Used to get the next array of basic bot information.<br>This property is only returned if there are more unreturned results.<br>|

<h2 id="tocS_ModuleBot">ModuleBot</h2>
<!-- backwards compatibility -->
<a id="schemamodulebot"></a>
<a id="schema_ModuleBot"></a>
<a id="tocSmodulebot"></a>
<a id="tocsmodulebot"></a>

```json
{
  "userId": "string",
  "basicId": "string",
  "premiumId": "string",
  "displayName": "string",
  "pictureUrl": "string"
}
```

basic information about the bot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|Bot's user ID|
|basicId|string|true|none|Bot's basic ID|
|premiumId|string|false|none|Bot's premium ID. Not included in the response if the premium ID isn't set.|
|displayName|string|true|none|Bot's display name|
|pictureUrl|string|false|none|Profile image URL. Image URL starting with `https://`. Not included in the response if the bot doesn't have a profile image.|
