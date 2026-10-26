<h1 id="mission-stickers-api">Mission Stickers API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Mission Stickers API.

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="mission-stickers-api-shop">shop</h1>

## missionStickerV3

<a id="opIdmissionStickerV3"></a>

> Code samples

```bash
curl https://api.line.me/shop/v3/mission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": "string",
    "productId": "string",
    "productType": "STICKER",
    "sendPresentMessage": false
  }'
```

`POST /shop/v3/mission`

Sends a mission sticker.

<a href="https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3">External documentation</a>

> Body parameter

```json
{
  "to": "string",
  "productId": "string",
  "productType": "STICKER",
  "sendPresentMessage": false
}
```

<h3 id="missionstickerv3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MissionStickerRequest](#schemamissionstickerrequest)|true|none|
|» to|body|string|true|Destination user ID|
|» productId|body|string|true|Package ID for a set of stickers|
|» productType|body|string|true|`STICKER`|
|» sendPresentMessage|body|boolean|true|`false`|

<h3 id="missionstickerv3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns status code 200 and an empty response body.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_MissionStickerRequest">MissionStickerRequest</h2>
<!-- backwards compatibility -->
<a id="schemamissionstickerrequest"></a>
<a id="schema_MissionStickerRequest"></a>
<a id="tocSmissionstickerrequest"></a>
<a id="tocsmissionstickerrequest"></a>

```json
{
  "to": "string",
  "productId": "string",
  "productType": "STICKER",
  "sendPresentMessage": false
}
```

Send mission stickers (v3)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string|true|none|Destination user ID|
|productId|string|true|none|Package ID for a set of stickers|
|productType|string|true|none|`STICKER`|
|sendPresentMessage|boolean|true|none|`false`|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Message containing information about the error.|
