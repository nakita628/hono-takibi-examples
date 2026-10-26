<h1 id="line-messaging-api">LINE Messaging API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Messaging API.

Base URLs:

* <a href="https://api.line.me">https://api.line.me</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="line-messaging-api-manage-audience">manage-audience</h1>

## addAudienceToAudienceGroup

<a id="opIdaddAudienceToAudienceGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/upload \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "audienceGroupId": 0,
    "uploadDescription": "string",
    "audiences": [
      {
        "id": "string"
      }
    ]
  }'
```

`PUT /v2/bot/audienceGroup/upload`

Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)

<a href="https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group">External documentation</a>

> Body parameter

```json
{
  "audienceGroupId": 0,
  "uploadDescription": "string",
  "audiences": [
    {
      "id": "string"
    }
  ]
}
```

<h3 id="addaudiencetoaudiencegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddAudienceToAudienceGroupRequest](#schemaaddaudiencetoaudiencegrouprequest)|true|none|
|» audienceGroupId|body|integer(int64)|false|The audience ID.|
|» uploadDescription|body|string|false|The audience's name.|
|» audiences|body|[[Audience](#schemaaudience)]|false|An array of up to 10,000 user IDs or IFAs.|

<h3 id="addaudiencetoaudiencegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createAudienceGroup

<a id="opIdcreateAudienceGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "isIfaAudience": true,
    "uploadDescription": "string",
    "audiences": [
      {
        "id": "string"
      }
    ]
  }'
```

`POST /v2/bot/audienceGroup/upload`

Create audience for uploading user IDs (by JSON)

<a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">External documentation</a>

> Body parameter

```json
{
  "description": "string",
  "isIfaAudience": true,
  "uploadDescription": "string",
  "audiences": [
    {
      "id": "string"
    }
  ]
}
```

<h3 id="createaudiencegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAudienceGroupRequest](#schemacreateaudiencegrouprequest)|true|none|
|» description|body|string|false|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|
|» isIfaAudience|body|boolean|false|To specify recipients by IFAs: set true.<br>To specify recipients by user IDs: set false or omit isIfaAudience property.<br>|
|» uploadDescription|body|string|false|The description to register for the job (in jobs[].description).<br>|
|» audiences|body|[[Audience](#schemaaudience)]|false|An array of user IDs or IFAs.<br>Max number: 10,000<br>|

> Example responses

> 202 Response

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "UPLOAD",
  "description": "audienceGroupName_01",
  "created": 1613698278,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629250278,
  "isIfaAudience": false
}
```

<h3 id="createaudiencegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|[CreateAudienceGroupResponse](#schemacreateaudiencegroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createClickBasedAudienceGroup

<a id="opIdcreateClickBasedAudienceGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/click \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "requestId": "string",
    "clickUrl": "http://example.com"
  }'
```

`POST /v2/bot/audienceGroup/click`

Create audience for click-based retargeting

<a href="https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group">External documentation</a>

> Body parameter

```json
{
  "description": "string",
  "requestId": "string",
  "clickUrl": "http://example.com"
}
```

<h3 id="createclickbasedaudiencegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateClickBasedAudienceGroupRequest](#schemacreateclickbasedaudiencegrouprequest)|true|none|
|» description|body|string|false|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|
|» requestId|body|string|false|The request ID of a broadcast or narrowcast message sent in the past 60 days.<br>Each Messaging API request has a request ID.<br>|
|» clickUrl|body|string(uri)|false|The URL clicked by the user. If empty, users who clicked any URL in the message are added to the list of recipients.<br>Max character limit: 2,000<br>|

> Example responses

> 202 Response

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "CLICK",
  "description": "audienceGroupName_01",
  "created": 1613705240,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629257239,
  "isIfaAudience": false,
  "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab",
  "clickUrl": "https://developers.line.biz/"
}
```

<h3 id="createclickbasedaudiencegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|[CreateClickBasedAudienceGroupResponse](#schemacreateclickbasedaudiencegroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createImpBasedAudienceGroup

<a id="opIdcreateImpBasedAudienceGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/imp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "requestId": "string"
  }'
```

`POST /v2/bot/audienceGroup/imp`

Create audience for impression-based retargeting

<a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">External documentation</a>

> Body parameter

```json
{
  "description": "string",
  "requestId": "string"
}
```

<h3 id="createimpbasedaudiencegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateImpBasedAudienceGroupRequest](#schemacreateimpbasedaudiencegrouprequest)|true|none|
|» description|body|string|false|The audience's name.<br>This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.<br>Max character limit: 120<br>|
|» requestId|body|string|false|The request ID of a broadcast or narrowcast message sent in the past 60 days.<br>Each Messaging API request has a request ID.<br>|

> Example responses

> 202 Response

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "IMP",
  "description": "audienceGroupName_01",
  "created": 1613707097,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629259095,
  "isIfaAudience": false,
  "requestId": "bb9744f9-47fa-4a29-941e-1234567890ab"
}
```

<h3 id="createimpbasedaudiencegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|[CreateImpBasedAudienceGroupResponse](#schemacreateimpbasedaudiencegroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## updateAudienceGroupDescription

<a id="opIdupdateAudienceGroupDescription"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/0/updateDescription \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string"
  }'
```

`PUT /v2/bot/audienceGroup/{audienceGroupId}/updateDescription`

Renames an existing audience.

<a href="https://developers.line.biz/en/reference/messaging-api/#set-description-audience-group">External documentation</a>

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="updateaudiencegroupdescription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audienceGroupId|path|integer(int64)|true|The audience ID.|
|body|body|[UpdateAudienceGroupDescriptionRequest](#schemaupdateaudiencegroupdescriptionrequest)|true|none|
|» description|body|string|false|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|

<h3 id="updateaudiencegroupdescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getAudienceData

<a id="opIdgetAudienceData"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/audienceGroup/{audienceGroupId}`

Gets audience data.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-audience-group">External documentation</a>

<h3 id="getaudiencedata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audienceGroupId|path|integer(int64)|true|The audience ID.|

> Example responses

> 200 Response

```json
{
  "audienceGroup": {
    "audienceGroupId": 1234567890123,
    "createRoute": "OA_MANAGER",
    "type": "UPLOAD",
    "description": "audienceGroupName_01",
    "status": "READY",
    "audienceCount": 1887,
    "created": 1608617466,
    "permission": "READ",
    "isIfaAudience": false,
    "expireTimestamp": 1624342266
  },
  "jobs": [
    {
      "audienceGroupJobId": 12345678,
      "audienceGroupId": 1234567890123,
      "description": "audience_list.txt",
      "type": "DIFF_ADD",
      "status": "FINISHED",
      "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
      "audienceCount": 0,
      "created": 1608617472,
      "jobStatus": "FINISHED"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "audience group not found",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NOT_FOUND"
    }
  ]
}
```

<h3 id="getaudiencedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAudienceDataResponse](#schemagetaudiencedataresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## deleteAudienceGroup

<a id="opIddeleteAudienceGroup"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/bot/audienceGroup/{audienceGroupId}`

Delete audience

<a href="https://developers.line.biz/en/reference/messaging-api/#delete-audience-group">External documentation</a>

<h3 id="deleteaudiencegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audienceGroupId|path|integer(int64)|true|The audience ID.|

<h3 id="deleteaudiencegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getAudienceGroups

<a id="opIdgetAudienceGroups"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/audienceGroup/list?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/audienceGroup/list`

Gets data for more than one audience.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-audience-groups">External documentation</a>

<h3 id="getaudiencegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|true|The page to return when getting (paginated) results. Must be 1 or higher.|
|description|query|string|false|The name of the audience(s) to return.<br>You can search for partial matches.<br>This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>If omitted, the name of the audience(s) will not be used as a search criterion.<br>|
|status|query|[AudienceGroupStatus](#schemaaudiencegroupstatus)|false|The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion.<br>|
|size|query|integer(int64)|false|The number of audiences per page. Default: 20<br>Max: 40<br>|
|includesExternalPublicGroups|query|boolean|false|true (default): Get public audiences created in all channels linked to the same bot.<br>false: Get audiences created in the same channel.<br>|
|createRoute|query|[AudienceGroupCreateRoute](#schemaaudiencegroupcreateroute)|false|How the audience was created. If omitted, all audiences are included.<br><br>`OA_MANAGER`: Return only audiences created with LINE Official Account Manager (opens new window).<br>`MESSAGING_API`: Return only audiences created with Messaging API.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|IN_PROGRESS|
|status|READY|
|status|FAILED|
|status|EXPIRED|
|status|INACTIVE|
|status|ACTIVATING|
|createRoute|OA_MANAGER|
|createRoute|MESSAGING_API|
|createRoute|POINT_AD|
|createRoute|AD_MANAGER|

> Example responses

> 200 Response

```json
{
  "audienceGroups": [
    {
      "audienceGroupId": 1234567890123,
      "createRoute": "OA_MANAGER",
      "type": "CLICK",
      "description": "audienceGroupName_01",
      "status": "IN_PROGRESS",
      "audienceCount": 8619,
      "created": 1611114828,
      "permission": "READ",
      "isIfaAudience": false,
      "expireTimestamp": 1626753228,
      "requestId": "c10c3d86-f565-...",
      "clickUrl": "https://example.com/"
    },
    {
      "audienceGroupId": 2345678901234,
      "createRoute": "AD_MANAGER",
      "type": "APP_EVENT",
      "description": "audienceGroupName_02",
      "status": "READY",
      "audienceCount": 3368,
      "created": 1608619802,
      "permission": "READ",
      "activated": 1610068515,
      "inactiveTimestamp": 1625620516,
      "isIfaAudience": false
    }
  ],
  "hasNextPage": false,
  "totalCount": 2,
  "readWriteAudienceGroupTotalCount": 0,
  "size": 40,
  "page": 1
}
```

<h3 id="getaudiencegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAudienceGroupsResponse](#schemagetaudiencegroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getSharedAudienceData

<a id="opIdgetSharedAudienceData"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/shared/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/audienceGroup/shared/{audienceGroupId}`

Gets audience data.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-shared-audience">External documentation</a>

<h3 id="getsharedaudiencedata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audienceGroupId|path|integer(int64)|true|The audience ID.|

> Example responses

> 200 Response

```json
{
  "audienceGroup": {
    "audienceGroupId": 1234567890123,
    "createRoute": "OA_MANAGER",
    "type": "UPLOAD",
    "description": "audienceGroupName_01",
    "status": "READY",
    "audienceCount": 1887,
    "created": 1608617466,
    "permission": "READ",
    "isIfaAudience": false,
    "expireTimestamp": 1624342266
  },
  "jobs": [
    {
      "audienceGroupJobId": 12345678,
      "audienceGroupId": 1234567890123,
      "description": "audience_list.txt",
      "type": "DIFF_ADD",
      "status": "FINISHED",
      "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
      "audienceCount": 0,
      "created": 1608617472,
      "jobStatus": "FINISHED"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "audience group not found",
  "details": [
    {
      "message": "AUDIENCE_GROUP_NOT_FOUND"
    }
  ]
}
```

<h3 id="getsharedaudiencedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSharedAudienceDataResponse](#schemagetsharedaudiencedataresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## getSharedAudienceGroups

<a id="opIdgetSharedAudienceGroups"></a>

> Code samples

```bash
curl 'https://api.line.me/v2/bot/audienceGroup/shared/list?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bot/audienceGroup/shared/list`

Gets data for more than one audience, including those shared by the Business Manager.

<a href="https://developers.line.biz/en/reference/messaging-api/#get-shared-audience-list">External documentation</a>

<h3 id="getsharedaudiencegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|true|The page to return when getting (paginated) results. Must be 1 or higher.|
|description|query|string|false|The name of the audience(s) to return.<br>You can search for partial matches.<br>This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>If omitted, the name of the audience(s) will not be used as a search criterion.<br>|
|status|query|[AudienceGroupStatus](#schemaaudiencegroupstatus)|false|The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion.<br>|
|size|query|integer(int64)|false|The number of audiences per page. Default: 20<br>Max: 40<br>|
|createRoute|query|[AudienceGroupCreateRoute](#schemaaudiencegroupcreateroute)|false|How the audience was created. If omitted, all audiences are included.<br><br>`OA_MANAGER`: Return only audiences created with LINE Official Account Manager (opens new window).<br>`MESSAGING_API`: Return only audiences created with Messaging API.<br>|
|includesOwnedAudienceGroups|query|boolean|false|true: Include audienceGroups owned by LINE Official Account Manager<br>false: Respond only audienceGroups shared by Business Manager<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|IN_PROGRESS|
|status|READY|
|status|FAILED|
|status|EXPIRED|
|status|INACTIVE|
|status|ACTIVATING|
|createRoute|OA_MANAGER|
|createRoute|MESSAGING_API|
|createRoute|POINT_AD|
|createRoute|AD_MANAGER|

> Example responses

> 200 Response

```json
{
  "audienceGroups": [
    {
      "audienceGroupId": 1234567890123,
      "createRoute": "OA_MANAGER",
      "type": "CLICK",
      "description": "audienceGroupName_01",
      "status": "IN_PROGRESS",
      "audienceCount": 8619,
      "created": 1611114828,
      "permission": "READ",
      "isIfaAudience": false,
      "expireTimestamp": 1626753228,
      "requestId": "c10c3d86-f565-...",
      "clickUrl": "https://example.com/"
    },
    {
      "audienceGroupId": 2345678901234,
      "createRoute": "AD_MANAGER",
      "type": "APP_EVENT",
      "description": "audienceGroupName_02",
      "status": "READY",
      "audienceCount": 3368,
      "created": 1608619802,
      "permission": "READ",
      "activated": 1610068515,
      "inactiveTimestamp": 1625620516,
      "isIfaAudience": false
    }
  ],
  "hasNextPage": false,
  "totalCount": 2,
  "readWriteAudienceGroupTotalCount": 0,
  "size": 40,
  "page": 1
}
```

<h3 id="getsharedaudiencegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSharedAudienceGroupsResponse](#schemagetsharedaudiencegroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="line-messaging-api-manage-audience-blob">manage-audience-blob</h1>

## addUserIdsToAudience

<a id="opIdaddUserIdsToAudience"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/upload/byFile \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'audienceGroupId=0' \
  -F 'uploadDescription=string' \
  -F 'file=@/path/to/file'
```

`PUT /v2/bot/audienceGroup/upload/byFile`

Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file).

<a href="https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file">External documentation</a>

> Body parameter

```yaml
audienceGroupId: 0
uploadDescription: string
file: string
```

<h3 id="adduseridstoaudience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» audienceGroupId|body|integer(int64)|false|The audience ID.|
|» uploadDescription|body|string|false|The description to register with the job|
|» file|body|string(binary)|true|A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1<br>Max number: 1,500,000<br>|

<h3 id="adduseridstoaudience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## createAudienceForUploadingUserIds

<a id="opIdcreateAudienceForUploadingUserIds"></a>

> Code samples

```bash
curl https://api.line.me/v2/bot/audienceGroup/upload/byFile \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'description=string' \
  -F 'isIfaAudience=true' \
  -F 'uploadDescription=string' \
  -F 'file=@/path/to/file'
```

`POST /v2/bot/audienceGroup/upload/byFile`

Create audience for uploading user IDs (by file).

<a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file">External documentation</a>

> Body parameter

```yaml
description: string
isIfaAudience: true
uploadDescription: string
file: string
```

<h3 id="createaudienceforuploadinguserids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» description|body|string|false|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|
|» isIfaAudience|body|boolean|false|To specify recipients by IFAs: set `true`.<br>To specify recipients by user IDs: set `false` or omit isIfaAudience property.<br>|
|» uploadDescription|body|string|false|The description to register for the job (in `jobs[].description`).<br>|
|» file|body|string(binary)|true|A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1<br>Max number: 1,500,000<br>|

> Example responses

> 202 Response

```json
{
  "audienceGroupId": 1234567890123,
  "createRoute": "MESSAGING_API",
  "type": "UPLOAD",
  "description": "audienceGroupName_01",
  "created": 1613700237,
  "permission": "READ_WRITE",
  "expireTimestamp": 1629252237,
  "isIfaAudience": false
}
```

<h3 id="createaudienceforuploadinguserids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|OK|[CreateAudienceGroupResponse](#schemacreateaudiencegroupresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_CreateAudienceGroupRequest">CreateAudienceGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudiencegrouprequest"></a>
<a id="schema_CreateAudienceGroupRequest"></a>
<a id="tocScreateaudiencegrouprequest"></a>
<a id="tocscreateaudiencegrouprequest"></a>

```json
{
  "description": "string",
  "isIfaAudience": true,
  "uploadDescription": "string",
  "audiences": [
    {
      "id": "string"
    }
  ]
}
```

Create audience for uploading user IDs (by JSON)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|
|isIfaAudience|boolean|false|none|To specify recipients by IFAs: set true.<br>To specify recipients by user IDs: set false or omit isIfaAudience property.<br>|
|uploadDescription|string|false|none|The description to register for the job (in jobs[].description).<br>|
|audiences|[[Audience](#schemaaudience)]|false|none|An array of user IDs or IFAs.<br>Max number: 10,000<br>|

<h2 id="tocS_Audience">Audience</h2>
<!-- backwards compatibility -->
<a id="schemaaudience"></a>
<a id="schema_Audience"></a>
<a id="tocSaudience"></a>
<a id="tocsaudience"></a>

```json
{
  "id": "string"
}
```

Audience

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A user ID or IFA. You can specify an empty array.|

<h2 id="tocS_CreateAudienceGroupResponse">CreateAudienceGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudiencegroupresponse"></a>
<a id="schema_CreateAudienceGroupResponse"></a>
<a id="tocScreateaudiencegroupresponse"></a>
<a id="tocscreateaudiencegroupresponse"></a>

```json
{
  "audienceGroupId": 0,
  "createRoute": "MESSAGING_API",
  "type": "UPLOAD",
  "description": "string",
  "created": 0,
  "permission": "READ",
  "expireTimestamp": 0,
  "isIfaAudience": true
}
```

Create audience for uploading user IDs (by JSON)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupId|integer(int64)|false|none|The audience ID.|
|createRoute|string|false|none|How the audience was created.<br><br>`MESSAGING_API`: An audience created with Messaging API.<br>|
|type|[AudienceGroupType](#schemaaudiencegrouptype)|false|none|Audience group type|
|description|string|false|none|The audience's name.|
|created|integer(int64)|false|none|When the audience was created (in UNIX time).|
|permission|string|false|none|Audience's update permission. Audiences linked to the same channel will be READ_WRITE.<br><br>`READ`: Can use only.<br>`READ_WRITE`: Can use and update.<br>|
|expireTimestamp|integer(int64)|false|none|Time of audience expiration. Only returned for specific audiences.<br>|
|isIfaAudience|boolean|false|none|The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:<br><br>`true`: Accounts are specified with IFAs.<br>`false` (default): Accounts are specified with user IDs.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|createRoute|MESSAGING_API|
|type|UPLOAD|
|type|CLICK|
|type|IMP|
|type|CHAT_TAG|
|type|FRIEND_PATH|
|type|RESERVATION|
|type|APP_EVENT|
|type|VIDEO_VIEW|
|type|WEBTRAFFIC|
|type|IMAGE_CLICK|
|type|RICHMENU_IMP|
|type|RICHMENU_CLICK|
|type|POP_AD_IMP|
|type|TRACKINGTAG_WEBTRAFFIC|
|permission|READ|
|permission|READ_WRITE|

<h2 id="tocS_AudienceGroupType">AudienceGroupType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegrouptype"></a>
<a id="schema_AudienceGroupType"></a>
<a id="tocSaudiencegrouptype"></a>
<a id="tocsaudiencegrouptype"></a>

```json
"UPLOAD"
```

Audience group type

<h2 id="tocS_AddAudienceToAudienceGroupRequest">AddAudienceToAudienceGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddaudiencetoaudiencegrouprequest"></a>
<a id="schema_AddAudienceToAudienceGroupRequest"></a>
<a id="tocSaddaudiencetoaudiencegrouprequest"></a>
<a id="tocsaddaudiencetoaudiencegrouprequest"></a>

```json
{
  "audienceGroupId": 0,
  "uploadDescription": "string",
  "audiences": [
    {
      "id": "string"
    }
  ]
}
```

Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupId|integer(int64)|false|none|The audience ID.|
|uploadDescription|string|false|none|The audience's name.|
|audiences|[[Audience](#schemaaudience)]|false|none|An array of up to 10,000 user IDs or IFAs.|

<h2 id="tocS_CreateClickBasedAudienceGroupRequest">CreateClickBasedAudienceGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclickbasedaudiencegrouprequest"></a>
<a id="schema_CreateClickBasedAudienceGroupRequest"></a>
<a id="tocScreateclickbasedaudiencegrouprequest"></a>
<a id="tocscreateclickbasedaudiencegrouprequest"></a>

```json
{
  "description": "string",
  "requestId": "string",
  "clickUrl": "http://example.com"
}
```

Create audience for click-based retargeting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|
|requestId|string|false|none|The request ID of a broadcast or narrowcast message sent in the past 60 days.<br>Each Messaging API request has a request ID.<br>|
|clickUrl|string(uri)|false|none|The URL clicked by the user. If empty, users who clicked any URL in the message are added to the list of recipients.<br>Max character limit: 2,000<br>|

<h2 id="tocS_CreateClickBasedAudienceGroupResponse">CreateClickBasedAudienceGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclickbasedaudiencegroupresponse"></a>
<a id="schema_CreateClickBasedAudienceGroupResponse"></a>
<a id="tocScreateclickbasedaudiencegroupresponse"></a>
<a id="tocscreateclickbasedaudiencegroupresponse"></a>

```json
{
  "audienceGroupId": 0,
  "type": "UPLOAD",
  "description": "string",
  "created": 0,
  "requestId": "string",
  "clickUrl": "http://example.com",
  "createRoute": "MESSAGING_API",
  "permission": "READ",
  "expireTimestamp": 0,
  "isIfaAudience": false
}
```

Create audience for click-based retargeting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupId|integer(int64)|false|none|The audience ID.|
|type|[AudienceGroupType](#schemaaudiencegrouptype)|false|none|Audience group type|
|description|string|false|none|The audience's name.|
|created|integer(int64)|false|none|When the audience was created (in UNIX time).|
|requestId|string|false|none|The request ID that was specified when the audience was created.|
|clickUrl|string(uri)|false|none|The URL that was specified when the audience was created.|
|createRoute|string|false|none|How the audience was created.<br>`MESSAGING_API`: An audience created with Messaging API.<br>|
|permission|string|false|none|Audience's update permission. Audiences linked to the same channel will be READ_WRITE.<br><br>- `READ`: Can use only.<br>- `READ_WRITE`: Can use and update.<br>|
|expireTimestamp|integer(int64)|false|none|Time of audience expiration. Only returned for specific audiences.|
|isIfaAudience|boolean|false|none|The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:<br><br>true: Accounts are specified with IFAs.<br>false (default): Accounts are specified with user IDs.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UPLOAD|
|type|CLICK|
|type|IMP|
|type|CHAT_TAG|
|type|FRIEND_PATH|
|type|RESERVATION|
|type|APP_EVENT|
|type|VIDEO_VIEW|
|type|WEBTRAFFIC|
|type|IMAGE_CLICK|
|type|RICHMENU_IMP|
|type|RICHMENU_CLICK|
|type|POP_AD_IMP|
|type|TRACKINGTAG_WEBTRAFFIC|
|createRoute|MESSAGING_API|
|permission|READ|
|permission|READ_WRITE|

<h2 id="tocS_CreateImpBasedAudienceGroupRequest">CreateImpBasedAudienceGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimpbasedaudiencegrouprequest"></a>
<a id="schema_CreateImpBasedAudienceGroupRequest"></a>
<a id="tocScreateimpbasedaudiencegrouprequest"></a>
<a id="tocscreateimpbasedaudiencegrouprequest"></a>

```json
{
  "description": "string",
  "requestId": "string"
}
```

Create audience for impression-based retargeting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The audience's name.<br>This is case-insensitive, meaning `AUDIENCE` and `audience` are considered identical.<br>Max character limit: 120<br>|
|requestId|string|false|none|The request ID of a broadcast or narrowcast message sent in the past 60 days.<br>Each Messaging API request has a request ID.<br>|

<h2 id="tocS_CreateImpBasedAudienceGroupResponse">CreateImpBasedAudienceGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimpbasedaudiencegroupresponse"></a>
<a id="schema_CreateImpBasedAudienceGroupResponse"></a>
<a id="tocScreateimpbasedaudiencegroupresponse"></a>
<a id="tocscreateimpbasedaudiencegroupresponse"></a>

```json
{
  "audienceGroupId": 0,
  "type": "UPLOAD",
  "description": "string",
  "created": 0,
  "requestId": "string"
}
```

Create audience for impression-based retargeting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupId|integer(int64)|false|none|The audience ID.|
|type|[AudienceGroupType](#schemaaudiencegrouptype)|false|none|Audience group type|
|description|string|false|none|The audience's name.|
|created|integer(int64)|false|none|When the audience was created (in UNIX time).|
|requestId|string|false|none|The request ID that was specified when the audience was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UPLOAD|
|type|CLICK|
|type|IMP|
|type|CHAT_TAG|
|type|FRIEND_PATH|
|type|RESERVATION|
|type|APP_EVENT|
|type|VIDEO_VIEW|
|type|WEBTRAFFIC|
|type|IMAGE_CLICK|
|type|RICHMENU_IMP|
|type|RICHMENU_CLICK|
|type|POP_AD_IMP|
|type|TRACKINGTAG_WEBTRAFFIC|

<h2 id="tocS_UpdateAudienceGroupDescriptionRequest">UpdateAudienceGroupDescriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaudiencegroupdescriptionrequest"></a>
<a id="schema_UpdateAudienceGroupDescriptionRequest"></a>
<a id="tocSupdateaudiencegroupdescriptionrequest"></a>
<a id="tocsupdateaudiencegroupdescriptionrequest"></a>

```json
{
  "description": "string"
}
```

Rename an audience

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The audience's name. This is case-insensitive, meaning AUDIENCE and audience are considered identical.<br>Max character limit: 120<br>|

<h2 id="tocS_GetAudienceDataResponse">GetAudienceDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaudiencedataresponse"></a>
<a id="schema_GetAudienceDataResponse"></a>
<a id="tocSgetaudiencedataresponse"></a>
<a id="tocsgetaudiencedataresponse"></a>

```json
{
  "audienceGroup": {
    "audienceGroupId": 0,
    "type": "UPLOAD",
    "description": "string",
    "status": "IN_PROGRESS",
    "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
    "audienceCount": 0,
    "created": 0,
    "requestId": "string",
    "clickUrl": "http://example.com",
    "isIfaAudience": true,
    "permission": "READ",
    "createRoute": "OA_MANAGER"
  },
  "jobs": [
    {
      "audienceGroupJobId": 0,
      "audienceGroupId": 0,
      "description": "string",
      "type": "DIFF_ADD",
      "jobStatus": "QUEUED",
      "failedType": "INTERNAL_ERROR",
      "audienceCount": 0,
      "created": 0
    }
  ],
  "adaccount": {
    "name": "string"
  }
}
```

Get audience data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroup|[AudienceGroup](#schemaaudiencegroup)|false|none|Audience group|
|jobs|[[AudienceGroupJob](#schemaaudiencegroupjob)]|false|none|An array of jobs.<br>This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs.<br>Empty array is returned for any other type of audience.<br>Max: 50<br>|
|adaccount|[Adaccount](#schemaadaccount)|false|none|Adaccount|

<h2 id="tocS_GetSharedAudienceDataResponse">GetSharedAudienceDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsharedaudiencedataresponse"></a>
<a id="schema_GetSharedAudienceDataResponse"></a>
<a id="tocSgetsharedaudiencedataresponse"></a>
<a id="tocsgetsharedaudiencedataresponse"></a>

```json
{
  "audienceGroup": {
    "audienceGroupId": 0,
    "type": "UPLOAD",
    "description": "string",
    "status": "IN_PROGRESS",
    "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
    "audienceCount": 0,
    "created": 0,
    "requestId": "string",
    "clickUrl": "http://example.com",
    "isIfaAudience": true,
    "permission": "READ",
    "createRoute": "OA_MANAGER"
  },
  "jobs": [
    {
      "audienceGroupJobId": 0,
      "audienceGroupId": 0,
      "description": "string",
      "type": "DIFF_ADD",
      "jobStatus": "QUEUED",
      "failedType": "INTERNAL_ERROR",
      "audienceCount": 0,
      "created": 0
    }
  ],
  "owner": {
    "serviceType": "lap",
    "id": "A012345678",
    "name": "string"
  }
}
```

Get audience data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroup|[AudienceGroup](#schemaaudiencegroup)|false|none|Audience group|
|jobs|[[AudienceGroupJob](#schemaaudiencegroupjob)]|false|none|An array of jobs.<br>This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs.<br>Empty array is returned for any other type of audience.<br>Max: 50<br>|
|owner|[DetailedOwner](#schemadetailedowner)|false|none|Owner of this audience group.|

<h2 id="tocS_AudienceGroup">AudienceGroup</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroup"></a>
<a id="schema_AudienceGroup"></a>
<a id="tocSaudiencegroup"></a>
<a id="tocsaudiencegroup"></a>

```json
{
  "audienceGroupId": 0,
  "type": "UPLOAD",
  "description": "string",
  "status": "IN_PROGRESS",
  "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
  "audienceCount": 0,
  "created": 0,
  "requestId": "string",
  "clickUrl": "http://example.com",
  "isIfaAudience": true,
  "permission": "READ",
  "createRoute": "OA_MANAGER"
}
```

Audience group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupId|integer(int64)|false|none|The audience ID.|
|type|[AudienceGroupType](#schemaaudiencegrouptype)|false|none|Audience group type|
|description|string|false|none|The audience's name.|
|status|[AudienceGroupStatus](#schemaaudiencegroupstatus)|false|none|Status|
|failedType|[AudienceGroupFailedType](#schemaaudiencegroupfailedtype)|false|none|Failed type|
|audienceCount|integer(int64)|false|none|The number of users included in the audience.|
|created|integer(int64)|false|none|When the audience was created (in UNIX time).|
|requestId|string|false|none|The request ID that was specified when the audience was created.<br>This is only included when `audienceGroup.type` is CLICK or IMP.<br>|
|clickUrl|string(uri)|false|none|The URL that was specified when the audience was created.<br>This is only included when `audienceGroup.type` is CLICK and link URL is specified.<br>|
|isIfaAudience|boolean|false|none|The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs.<br>|
|permission|[AudienceGroupPermission](#schemaaudiencegrouppermission)|false|none|Permission|
|createRoute|[AudienceGroupCreateRoute](#schemaaudiencegroupcreateroute)|false|none|How the audience was created. One of:<br><br>- `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/).<br>- `MESSAGING_API`: Audience created with Messaging API.<br>- `POINT_AD`: Audience created with [LINE Points Ads](https://www.linebiz.com/jp/service/line-point-ad/) (Japanese only).<br>- `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UPLOAD|
|type|CLICK|
|type|IMP|
|type|CHAT_TAG|
|type|FRIEND_PATH|
|type|RESERVATION|
|type|APP_EVENT|
|type|VIDEO_VIEW|
|type|WEBTRAFFIC|
|type|IMAGE_CLICK|
|type|RICHMENU_IMP|
|type|RICHMENU_CLICK|
|type|POP_AD_IMP|
|type|TRACKINGTAG_WEBTRAFFIC|
|status|IN_PROGRESS|
|status|READY|
|status|FAILED|
|status|EXPIRED|
|status|INACTIVE|
|status|ACTIVATING|
|failedType|AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT|
|failedType|INTERNAL_ERROR|
|permission|READ|
|permission|READ_WRITE|
|createRoute|OA_MANAGER|
|createRoute|MESSAGING_API|
|createRoute|POINT_AD|
|createRoute|AD_MANAGER|

<h2 id="tocS_AudienceGroupJob">AudienceGroupJob</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupjob"></a>
<a id="schema_AudienceGroupJob"></a>
<a id="tocSaudiencegroupjob"></a>
<a id="tocsaudiencegroupjob"></a>

```json
{
  "audienceGroupJobId": 0,
  "audienceGroupId": 0,
  "description": "string",
  "type": "DIFF_ADD",
  "jobStatus": "QUEUED",
  "failedType": "INTERNAL_ERROR",
  "audienceCount": 0,
  "created": 0
}
```

Audience group job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroupJobId|integer(int64)|false|none|A job ID.|
|audienceGroupId|integer(int64)|false|none|An audience ID.|
|description|string|false|none|The job's description.|
|type|[AudienceGroupJobType](#schemaaudiencegroupjobtype)|false|none|Job Type|
|jobStatus|[AudienceGroupJobStatus](#schemaaudiencegroupjobstatus)|false|none|Job status|
|failedType|[AudienceGroupJobFailedType](#schemaaudiencegroupjobfailedtype)|false|none|Failed type|
|audienceCount|integer(int64)|false|none|The number of accounts (recipients) that were added or removed.|
|created|integer(int64)|false|none|When the job was created (in UNIX time).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DIFF_ADD|
|jobStatus|QUEUED|
|jobStatus|WORKING|
|jobStatus|FINISHED|
|jobStatus|FAILED|
|failedType|INTERNAL_ERROR|
|failedType|AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT|

<h2 id="tocS_Adaccount">Adaccount</h2>
<!-- backwards compatibility -->
<a id="schemaadaccount"></a>
<a id="schema_Adaccount"></a>
<a id="tocSadaccount"></a>
<a id="tocsadaccount"></a>

```json
{
  "name": "string"
}
```

Adaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Ad account name.|

<h2 id="tocS_DetailedOwner">DetailedOwner</h2>
<!-- backwards compatibility -->
<a id="schemadetailedowner"></a>
<a id="schema_DetailedOwner"></a>
<a id="tocSdetailedowner"></a>
<a id="tocsdetailedowner"></a>

```json
{
  "serviceType": "lap",
  "id": "A012345678",
  "name": "string"
}
```

Owner of this audience group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceType|string|false|none|Service name where the audience group has been created.|
|id|string|false|none|Owner ID in the service.|
|name|string|false|none|Owner account name.|

<h2 id="tocS_AudienceGroupStatus">AudienceGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupstatus"></a>
<a id="schema_AudienceGroupStatus"></a>
<a id="tocSaudiencegroupstatus"></a>
<a id="tocsaudiencegroupstatus"></a>

```json
"IN_PROGRESS"
```

Status

<h2 id="tocS_AudienceGroupFailedType">AudienceGroupFailedType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupfailedtype"></a>
<a id="schema_AudienceGroupFailedType"></a>
<a id="tocSaudiencegroupfailedtype"></a>
<a id="tocsaudiencegroupfailedtype"></a>

```json
"AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT"
```

Failed type

<h2 id="tocS_AudienceGroupPermission">AudienceGroupPermission</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegrouppermission"></a>
<a id="schema_AudienceGroupPermission"></a>
<a id="tocSaudiencegrouppermission"></a>
<a id="tocsaudiencegrouppermission"></a>

```json
"READ"
```

Permission

<h2 id="tocS_AudienceGroupCreateRoute">AudienceGroupCreateRoute</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupcreateroute"></a>
<a id="schema_AudienceGroupCreateRoute"></a>
<a id="tocSaudiencegroupcreateroute"></a>
<a id="tocsaudiencegroupcreateroute"></a>

```json
"OA_MANAGER"
```

How the audience was created. One of:

- `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/).
- `MESSAGING_API`: Audience created with Messaging API.
- `POINT_AD`: Audience created with [LINE Points Ads](https://www.linebiz.com/jp/service/line-point-ad/) (Japanese only).
- `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/).

<h2 id="tocS_AudienceGroupJobType">AudienceGroupJobType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupjobtype"></a>
<a id="schema_AudienceGroupJobType"></a>
<a id="tocSaudiencegroupjobtype"></a>
<a id="tocsaudiencegroupjobtype"></a>

```json
"DIFF_ADD"
```

Job Type

<h2 id="tocS_AudienceGroupJobStatus">AudienceGroupJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupjobstatus"></a>
<a id="schema_AudienceGroupJobStatus"></a>
<a id="tocSaudiencegroupjobstatus"></a>
<a id="tocsaudiencegroupjobstatus"></a>

```json
"QUEUED"
```

Job status

<h2 id="tocS_AudienceGroupJobFailedType">AudienceGroupJobFailedType</h2>
<!-- backwards compatibility -->
<a id="schemaaudiencegroupjobfailedtype"></a>
<a id="schema_AudienceGroupJobFailedType"></a>
<a id="tocSaudiencegroupjobfailedtype"></a>
<a id="tocsaudiencegroupjobfailedtype"></a>

```json
"INTERNAL_ERROR"
```

Failed type

<h2 id="tocS_GetAudienceGroupsResponse">GetAudienceGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaudiencegroupsresponse"></a>
<a id="schema_GetAudienceGroupsResponse"></a>
<a id="tocSgetaudiencegroupsresponse"></a>
<a id="tocsgetaudiencegroupsresponse"></a>

```json
{
  "audienceGroups": [
    {
      "audienceGroupId": 0,
      "type": "UPLOAD",
      "description": "string",
      "status": "IN_PROGRESS",
      "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
      "audienceCount": 0,
      "created": 0,
      "requestId": "string",
      "clickUrl": "http://example.com",
      "isIfaAudience": true,
      "permission": "READ",
      "createRoute": "OA_MANAGER"
    }
  ],
  "hasNextPage": true,
  "totalCount": 0,
  "readWriteAudienceGroupTotalCount": 0,
  "page": 0,
  "size": 0
}
```

Gets data for more than one audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroups|[[AudienceGroup](#schemaaudiencegroup)]|false|none|An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.|
|hasNextPage|boolean|false|none|true when this is not the last page.|
|totalCount|integer(int64)|false|none|The total number of audiences that can be returned with the specified filter.|
|readWriteAudienceGroupTotalCount|integer(int64)|false|none|Of the audiences you can get with the specified filter, the number of audiences with the update permission set to READ_WRITE.|
|page|integer(int64)|false|none|The current page number.|
|size|integer(int64)|false|none|The maximum number of audiences on the current page.|

<h2 id="tocS_GetSharedAudienceGroupsResponse">GetSharedAudienceGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsharedaudiencegroupsresponse"></a>
<a id="schema_GetSharedAudienceGroupsResponse"></a>
<a id="tocSgetsharedaudiencegroupsresponse"></a>
<a id="tocsgetsharedaudiencegroupsresponse"></a>

```json
{
  "audienceGroups": [
    {
      "audienceGroupId": 0,
      "type": "UPLOAD",
      "description": "string",
      "status": "IN_PROGRESS",
      "failedType": "AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT",
      "audienceCount": 0,
      "created": 0,
      "requestId": "string",
      "clickUrl": "http://example.com",
      "isIfaAudience": true,
      "permission": "READ",
      "createRoute": "OA_MANAGER"
    }
  ],
  "hasNextPage": true,
  "totalCount": 0,
  "readWriteAudienceGroupTotalCount": 0,
  "page": 0,
  "size": 0
}
```

Gets data for more than one audience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceGroups|[[AudienceGroup](#schemaaudiencegroup)]|false|none|An array of audience data. If there are no audiences that match the specified filter, an empty array will be returned.|
|hasNextPage|boolean|false|none|true when this is not the last page.|
|totalCount|integer(int64)|false|none|The total number of audiences that can be returned with the specified filter.|
|readWriteAudienceGroupTotalCount|integer(int64)|false|none|Of the audiences you can get with the specified filter, the number of audiences with the update permission set to READ_WRITE.|
|page|integer(int64)|false|none|The current page number.|
|size|integer(int64)|false|none|The maximum number of audiences on the current page.|

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
