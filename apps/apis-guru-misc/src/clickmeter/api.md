<h1 id="clickmeter-api">ClickMeter API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Api dashboard for ClickMeter API

Base URLs:

* <a href="http://apiv2.clickmeter.com:80">http://apiv2.clickmeter.com:80</a>

* <a href="https://apiv2.clickmeter.com:80">https://apiv2.clickmeter.com:80</a>

Email: <a href="mailto:api@clickmeter.com">Api Support</a> 
Web: <a href="http://www.clickmeter.com/api">Api Support</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **X-Clickmeter-AuthKey**, in: header. API Key Authentication

<h1 id="clickmeter-api-account">Account</h1>

## Retrieve current account data

<a id="opIdAccount_Get"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account`

> Example responses

> 200 Response

```json
{
  "boGoVal": "string",
  "bonusClicks": 0,
  "companyName": "string",
  "companyRole": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "redirectOnly": true,
  "registrationDate": "20120203120530",
  "timeframeMinDate": "20120203120530",
  "timezone": 0,
  "timezonename": "string"
}
```

<h3 id="retrieve-current-account-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.User](#schemaapi.core.dto.accounting.user)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update current account data

<a id="opIdAccount_Post"></a>

> Code samples

```bash
curl https://example.com/account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "boGoVal": "string",
    "bonusClicks": 0,
    "companyName": "string",
    "companyRole": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "phone": "string",
    "redirectOnly": true,
    "registrationDate": "20120203120530",
    "timeframeMinDate": "20120203120530",
    "timezone": 0,
    "timezonename": "string"
  }'
```

`POST /account`

> Body parameter

```json
{
  "boGoVal": "string",
  "bonusClicks": 0,
  "companyName": "string",
  "companyRole": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "redirectOnly": true,
  "registrationDate": "20120203120530",
  "timeframeMinDate": "20120203120530",
  "timezone": 0,
  "timezonename": "string"
}
```

<h3 id="update-current-account-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Accounting.User](#schemaapi.core.dto.accounting.user)|true|none|
|» boGoVal|body|string|false|none|
|» bonusClicks|body|integer(int64)|false|none|
|» companyName|body|string|false|none|
|» companyRole|body|string|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» phone|body|string|false|none|
|» redirectOnly|body|boolean|false|none|
|» registrationDate|body|string|false| (A date in "YmdHis" format)|
|» timeframeMinDate|body|string|false| (A date in "YmdHis" format)|
|» timezone|body|integer(int32)|false|none|
|» timezonename|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "boGoVal": "string",
  "bonusClicks": 0,
  "companyName": "string",
  "companyRole": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "redirectOnly": true,
  "registrationDate": "20120203120530",
  "timeframeMinDate": "20120203120530",
  "timezone": 0,
  "timezonename": "string"
}
```

<h3 id="update-current-account-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.User](#schemaapi.core.dto.accounting.user)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve list of a domains allowed to redirect in DDU mode

<a id="opIdAccount_GetDomainWhitelist"></a>

> Code samples

```bash
curl https://example.com/account/domainwhitelist \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/domainwhitelist`

<h3 id="retrieve-list-of-a-domains-allowed-to-redirect-in-ddu-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="retrieve-list-of-a-domains-allowed-to-redirect-in-ddu-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.DomainWhitelistEntry_](#schemaapi.core.responses.entitiesresponse_api.core.dto.accounting.domainwhitelistentry_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an domain entry

<a id="opIdAccount_PutDomainWhitelist"></a>

> Code samples

```bash
curl https://example.com/account/domainwhitelist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "id": "string",
    "name": "string"
  }'
```

`POST /account/domainwhitelist`

> Body parameter

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="create-an-domain-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Accounting.DomainWhitelistEntry](#schemaapi.core.dto.accounting.domainwhitelistentry)|true|The entry to add|
|» id|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="create-an-domain-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.DomainWhitelistEntry](#schemaapi.core.dto.accounting.domainwhitelistentry)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete an domain entry

<a id="opIdAccount_DeleteDomainWhitelist"></a>

> Code samples

```bash
curl https://example.com/account/domainwhitelist/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /account/domainwhitelist/{whitelistId}`

<h3 id="delete-an-domain-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|whitelistId|path|string|true|The id of the domain to delete|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="delete-an-domain-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.DomainWhitelistEntry](#schemaapi.core.dto.accounting.domainwhitelistentry)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve list of a guest

<a id="opIdAccount_GetGuests"></a>

> Code samples

```bash
curl https://example.com/account/guests \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/guests`

<h3 id="retrieve-list-of-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|textSearch|query|string|false|Filter fields by this pattern|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="retrieve-list-of-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a guest

<a id="opIdAccount_PutGuest"></a>

> Code samples

```bash
curl https://example.com/account/guests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "apiKey": "string",
    "conversionOptions": {
      "hideComCost": true,
      "hideCost": true,
      "hideCount": true,
      "hideParams": true,
      "hideValue": true,
      "percentCommission": 0,
      "percentValue": 0
    },
    "creationDate": "20120203120530",
    "currentGrant": {
      "DatapointType": "string",
      "Entity": {
        "id": 0,
        "uri": "string"
      },
      "EntityName": "string",
      "EntityType": "string",
      "Type": "string"
    },
    "dateFormat": "string",
    "decimalSeparator": "string",
    "email": "string",
    "extendedGrants": {
      "allowAllGrants": true,
      "allowGroupCreation": true
    },
    "groupGrants": 0,
    "hitOptions": {
      "hideReferrer": true
    },
    "id": 0,
    "key": "string",
    "language": "string",
    "loginCount": 0,
    "name": "string",
    "notes": "string",
    "numberGroupSeparator": "string",
    "password": "string",
    "timeFormat": "AmPm",
    "timeZone": 0,
    "timeframeMinDate": "20120203120530",
    "timezonename": "string",
    "tlGrants": 0,
    "tpGrants": 0,
    "userName": "string"
  }'
```

`POST /account/guests`

> Body parameter

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

<h3 id="create-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Accounting.Guest](#schemaapi.core.dto.accounting.guest)|true|Guest object to create|
|» apiKey|body|string|false|none|
|» conversionOptions|body|[Api.Core.Dto.Accounting.ConversionOptions](#schemaapi.core.dto.accounting.conversionoptions)|false|none|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» currentGrant|body|[Api.Core.Dto.Grants.Grant](#schemaapi.core.dto.grants.grant)|false|none|
|» dateFormat|body|string|false|none|
|» decimalSeparator|body|string|false|none|
|» email|body|string|false|none|
|» extendedGrants|body|[Api.Core.Dto.Accounting.ExtendedGrants](#schemaapi.core.dto.accounting.extendedgrants)|false|none|
|» groupGrants|body|integer(int64)|false|none|
|» hitOptions|body|[Api.Core.Dto.Accounting.HitOptions](#schemaapi.core.dto.accounting.hitoptions)|false|none|
|» id|body|integer(int64)|false|none|
|» key|body|string|false|none|
|» language|body|string|false|none|
|» loginCount|body|integer(int32)|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» numberGroupSeparator|body|string|false|none|
|» password|body|string|false|none|
|» timeFormat|body|string|false|none|
|» timeZone|body|integer(int32)|false|none|
|» timeframeMinDate|body|string|false| (A date in "YmdHis" format)|
|» timezonename|body|string|false|none|
|» tlGrants|body|integer(int64)|false|none|
|» tpGrants|body|integer(int64)|false|none|
|» userName|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeFormat|AmPm|
|» timeFormat|H24|

> Example responses

> 200 Response

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

<h3 id="create-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.Guest](#schemaapi.core.dto.accounting.guest)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve count of guests

<a id="opIdAccount_GetGuestsCount"></a>

> Code samples

```bash
curl https://example.com/account/guests/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/guests/count`

<h3 id="retrieve-count-of-guests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|textSearch|query|string|false|Filter fields by this pattern|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-count-of-guests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a guest

<a id="opIdAccount_GetGuest"></a>

> Code samples

```bash
curl https://example.com/account/guests/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/guests/{guestId}`

<h3 id="retrieve-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|

> Example responses

> 200 Response

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

<h3 id="retrieve-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.Guest](#schemaapi.core.dto.accounting.guest)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a guest

<a id="opIdAccount_PostGuest"></a>

> Code samples

```bash
curl https://example.com/account/guests/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "apiKey": "string",
    "conversionOptions": {
      "hideComCost": true,
      "hideCost": true,
      "hideCount": true,
      "hideParams": true,
      "hideValue": true,
      "percentCommission": 0,
      "percentValue": 0
    },
    "creationDate": "20120203120530",
    "currentGrant": {
      "DatapointType": "string",
      "Entity": {
        "id": 0,
        "uri": "string"
      },
      "EntityName": "string",
      "EntityType": "string",
      "Type": "string"
    },
    "dateFormat": "string",
    "decimalSeparator": "string",
    "email": "string",
    "extendedGrants": {
      "allowAllGrants": true,
      "allowGroupCreation": true
    },
    "groupGrants": 0,
    "hitOptions": {
      "hideReferrer": true
    },
    "id": 0,
    "key": "string",
    "language": "string",
    "loginCount": 0,
    "name": "string",
    "notes": "string",
    "numberGroupSeparator": "string",
    "password": "string",
    "timeFormat": "AmPm",
    "timeZone": 0,
    "timeframeMinDate": "20120203120530",
    "timezonename": "string",
    "tlGrants": 0,
    "tpGrants": 0,
    "userName": "string"
  }'
```

`POST /account/guests/{guestId}`

> Body parameter

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

<h3 id="update-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|
|body|body|[Api.Core.Dto.Accounting.Guest](#schemaapi.core.dto.accounting.guest)|true|Guest object with field updated|
|» apiKey|body|string|false|none|
|» conversionOptions|body|[Api.Core.Dto.Accounting.ConversionOptions](#schemaapi.core.dto.accounting.conversionoptions)|false|none|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» currentGrant|body|[Api.Core.Dto.Grants.Grant](#schemaapi.core.dto.grants.grant)|false|none|
|» dateFormat|body|string|false|none|
|» decimalSeparator|body|string|false|none|
|» email|body|string|false|none|
|» extendedGrants|body|[Api.Core.Dto.Accounting.ExtendedGrants](#schemaapi.core.dto.accounting.extendedgrants)|false|none|
|» groupGrants|body|integer(int64)|false|none|
|» hitOptions|body|[Api.Core.Dto.Accounting.HitOptions](#schemaapi.core.dto.accounting.hitoptions)|false|none|
|» id|body|integer(int64)|false|none|
|» key|body|string|false|none|
|» language|body|string|false|none|
|» loginCount|body|integer(int32)|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» numberGroupSeparator|body|string|false|none|
|» password|body|string|false|none|
|» timeFormat|body|string|false|none|
|» timeZone|body|integer(int32)|false|none|
|» timeframeMinDate|body|string|false| (A date in "YmdHis" format)|
|» timezonename|body|string|false|none|
|» tlGrants|body|integer(int64)|false|none|
|» tpGrants|body|integer(int64)|false|none|
|» userName|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» timeFormat|AmPm|
|» timeFormat|H24|

> Example responses

> 200 Response

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

<h3 id="update-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.Guest](#schemaapi.core.dto.accounting.guest)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a guest

<a id="opIdAccount_DeleteGuest"></a>

> Code samples

```bash
curl https://example.com/account/guests/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /account/guests/{guestId}`

<h3 id="delete-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve permissions for a guest

<a id="opIdAccount_GetPermissions"></a>

> Code samples

```bash
curl https://example.com/account/guests/0/permissions \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/guests/{guestId}/permissions`

<h3 id="retrieve-permissions-for-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|
|entityType|query|string|false|Can be "datapoint" or "group"|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|type|query|string|false|Can be "w" or "r"|
|entityId|query|integer(int64)|false|Optional id of the datapoint/group entity to filter by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entityType|datapoint|
|entityType|group|
|type|r|
|type|w|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "DatapointType": "string",
      "Entity": {
        "id": 0,
        "uri": "string"
      },
      "EntityName": "string",
      "EntityType": "string",
      "Type": "string"
    }
  ]
}
```

<h3 id="retrieve-permissions-for-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Grants.Grant_](#schemaapi.core.responses.entitiesresponse_api.core.dto.grants.grant_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve count of the permissions for a guest

<a id="opIdAccount_GetPermissionsCount"></a>

> Code samples

```bash
curl https://example.com/account/guests/0/permissions/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/guests/{guestId}/permissions/count`

<h3 id="retrieve-count-of-the-permissions-for-a-guest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|
|entityType|query|string|false|Can be "datapoint" or "group"|
|type|query|string|false|Can be "w" or "r"|
|entityId|query|integer(int64)|false|Optional id of the datapoint/group entity to filter by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|entityType|datapoint|
|entityType|group|
|type|r|
|type|w|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-count-of-the-permissions-for-a-guest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Change the permission on a shared object

<a id="opIdAccount_PatchPermissions"></a>

> Code samples

```bash
curl https://example.com/account/guests/0/datapoint/permissions/patch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Action": "string",
    "Id": 0,
    "Verb": "string"
  }'
```

`PUT /account/guests/{guestId}/{type}/permissions/patch`

> Body parameter

```json
{
  "Action": "string",
  "Id": 0,
  "Verb": "string"
}
```

<h3 id="change-the-permission-on-a-shared-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|
|type|path|string|true|Can be "datapoint" or "group"|
|body|body|[Api.Core.Requests.PermissionPatchRequest](#schemaapi.core.requests.permissionpatchrequest)|true|The patch permission request|
|» Action|body|string|false|none|
|» Id|body|integer(int64)|false|none|
|» Verb|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|datapoint|
|type|group|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="change-the-permission-on-a-shared-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Change the permission on a shared object

> Code samples

```bash
curl https://example.com/account/guests/0/datapoint/permissions/patch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Action": "string",
    "Id": 0,
    "Verb": "string"
  }'
```

`POST /account/guests/{guestId}/{type}/permissions/patch`

> Body parameter

```json
{
  "Action": "string",
  "Id": 0,
  "Verb": "string"
}
```

<h3 id="change-the-permission-on-a-shared-object-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guestId|path|integer(int64)|true|Id of the guest|
|type|path|string|true|Can be "datapoint" or "group"|
|body|body|[Api.Core.Requests.PermissionPatchRequest](#schemaapi.core.requests.permissionpatchrequest)|true|The patch permission request|
|» Action|body|string|false|none|
|» Id|body|integer(int64)|false|none|
|» Verb|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|datapoint|
|type|group|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="change-the-permission-on-a-shared-object-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve list of a ip to exclude from event tracking

<a id="opIdAccount_GetIpBlacklist"></a>

> Code samples

```bash
curl https://example.com/account/ipblacklist \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/ipblacklist`

<h3 id="retrieve-list-of-a-ip-to-exclude-from-event-tracking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": "string",
      "ip": "string"
    }
  ]
}
```

<h3 id="retrieve-list-of-a-ip-to-exclude-from-event-tracking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.IpBlacklistEntry_](#schemaapi.core.responses.entitiesresponse_api.core.dto.accounting.ipblacklistentry_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an ip blacklist entry

<a id="opIdAccount_PutIpBlacklist"></a>

> Code samples

```bash
curl https://example.com/account/ipblacklist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "id": "string",
    "ip": "string"
  }'
```

`POST /account/ipblacklist`

> Body parameter

```json
{
  "id": "string",
  "ip": "string"
}
```

<h3 id="create-an-ip-blacklist-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Accounting.IpBlacklistEntry](#schemaapi.core.dto.accounting.ipblacklistentry)|true|The entry to add|
|» id|body|string|false|none|
|» ip|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ip": "string"
}
```

<h3 id="create-an-ip-blacklist-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.IpBlacklistEntry](#schemaapi.core.dto.accounting.ipblacklistentry)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete an ip blacklist entry

<a id="opIdAccount_DeleteIpBlacklist"></a>

> Code samples

```bash
curl https://example.com/account/ipblacklist/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /account/ipblacklist/{blacklistId}`

<h3 id="delete-an-ip-blacklist-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blacklistId|path|string|true|The id of the ip to delete|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "ip": "string"
}
```

<h3 id="delete-an-ip-blacklist-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.IpBlacklistEntry](#schemaapi.core.dto.accounting.ipblacklistentry)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve current account plan

<a id="opIdAccount_GetPlan"></a>

> Code samples

```bash
curl https://example.com/account/plan \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /account/plan`

> Example responses

> 200 Response

```json
{
  "allowedPersonalDomains": 0,
  "allowedPersonalUrls": 0,
  "billingPeriodEnd": "20120203120530",
  "billingPeriodStart": "20120203120530",
  "bonusMonthlyEvents": 0,
  "maximumDatapoints": 0,
  "maximumGuests": 0,
  "monthlyEvents": 0,
  "name": "string",
  "price": 0,
  "profileId": 0,
  "recurring": true,
  "recurringPeriod": 0,
  "usedDatapoints": 0,
  "usedMonthlyEvents": 0
}
```

<h3 id="retrieve-current-account-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.Plan](#schemaapi.core.dto.accounting.plan)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-aggregated">Aggregated</h1>

## Retrieve statistics about this customer for a timeframe

<a id="opIdAggregated_GetStatisticsSingle"></a>

> Code samples

```bash
curl 'https://example.com/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /aggregated`

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|
|onlyFavorites|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdAggregated_GetStatisticsList"></a>

> Code samples

```bash
curl 'https://example.com/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /aggregated/list`

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about a subset of conversions for a timeframe with conversions data

<a id="opIdAggregated_GetConversionsSummary"></a>

> Code samples

```bash
curl 'https://example.com/aggregated/summary/conversions?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /aggregated/summary/conversions`

<h3 id="retrieve-statistics-about-a-subset-of-conversions-for-a-timeframe-with-conversions-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of conversion ("deleted"/"active")|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|textSearch|query|string|false|Filter fields by this pattern|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|status|deleted|
|status|active|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0,
  "result": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-a-subset-of-conversions-for-a-timeframe-with-conversions-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedSummaryResult](#schemaapi.core.dto.aggregated.aggregatedsummaryresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

<a id="opIdAggregated_GetDatapointsSummary"></a>

> Code samples

```bash
curl 'https://example.com/aggregated/summary/datapoints?timeFrame=today&type=tp' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /aggregated/summary/datapoints`

<h3 id="retrieve-statistics-about-a-subset-of-datapoints-for-a-timeframe-with-datapoints-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|type|query|string|true|Type of datapoint ("tl"/"tp")|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the datapoint marked as favourite|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|groupId|query|integer(int64)|false|Filter by this group id|
|textSearch|query|string|false|Filter fields by this pattern|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0,
  "result": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-a-subset-of-datapoints-for-a-timeframe-with-datapoints-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedSummaryResult](#schemaapi.core.dto.aggregated.aggregatedsummaryresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about a subset of groups for a timeframe with groups data

<a id="opIdAggregated_GetGroupsSummary"></a>

> Code samples

```bash
curl 'https://example.com/aggregated/summary/groups?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /aggregated/summary/groups`

<h3 id="retrieve-statistics-about-a-subset-of-groups-for-a-timeframe-with-groups-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of group ("deleted"/"active")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the group marked as favourite|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|textSearch|query|string|false|Filter fields by this pattern|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|status|deleted|
|status|active|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0,
  "result": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-a-subset-of-groups-for-a-timeframe-with-groups-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedSummaryResult](#schemaapi.core.dto.aggregated.aggregatedsummaryresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-clickstream">ClickStream</h1>

## Retrieve the latest list of events of this account. Limited to last 100.

<a id="opIdClickStream_Get"></a>

> Code samples

```bash
curl https://example.com/clickstream \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /clickstream`

<h3 id="retrieve-the-latest-list-of-events-of-this-account-limited-to-last-100-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|query|integer(int64)|false|Filter by this group id (mutually exclusive with "datapoint" and "conversion")|
|datapoint|query|integer(int64)|false|Filter by this datapoint id (mutually exclusive with "group" and "conversion")|
|conversion|query|integer(int64)|false|Filter by this conversion id (mutually exclusive with "datapoint" and "group")|
|pageSize|query|integer(int32)|false|Limit results to this number|
|filter|query|string|false|Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|""|
|filter|spiders|
|filter|uniques|
|filter|nonuniques|
|filter|conversions|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="retrieve-the-latest-list-of-events-of-this-account-limited-to-last-100-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.ClickStream.Hit_](#schemaapi.core.responses.entitiesresponse_api.core.dto.clickstream.hit_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-conversions">Conversions</h1>

## Retrieve a list of conversions

<a id="opIdConversions_Get"></a>

> Code samples

```bash
curl https://example.com/conversions \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions`

<h3 id="retrieve-a-list-of-conversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|status|query|string|false|Status of conversion ("deleted"/"active")|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude conversions created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude conversions created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-conversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a conversion

<a id="opIdConversions_Put"></a>

> Code samples

```bash
curl https://example.com/conversions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "code": "string",
    "creationDate": "20120203120530",
    "deleted": true,
    "description": "string",
    "id": 0,
    "name": "string",
    "protocol": "Http",
    "value": 0
  }'
```

`POST /conversions`

> Body parameter

```json
{
  "code": "string",
  "creationDate": "20120203120530",
  "deleted": true,
  "description": "string",
  "id": 0,
  "name": "string",
  "protocol": "Http",
  "value": 0
}
```

<h3 id="create-a-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Conversions.Conversion](#schemaapi.core.dto.conversions.conversion)|true|The body of the conversion|
|» code|body|string|false|none|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» deleted|body|boolean|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» value|body|number(double)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|Http|
|» protocol|Https|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)

<a id="opIdConversions_GetStatisticsAllList"></a>

> Code samples

```bash
curl 'https://example.com/conversions/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/aggregated/list`

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-related-to-a-subset-of-conversions-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of conversion ("deleted"/"active")|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|status|deleted|
|status|active|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-related-to-a-subset-of-conversions-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a count of conversions

<a id="opIdConversions_Count"></a>

> Code samples

```bash
curl https://example.com/conversions/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/count`

<h3 id="retrieve-a-count-of-conversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Status of conversion ("deleted"/"active")|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude conversions created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude conversions created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-a-count-of-conversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve conversion specified by id

> Code samples

```bash
curl https://example.com/conversions/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}`

<h3 id="retrieve-conversion-specified-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "creationDate": "20120203120530",
  "deleted": true,
  "description": "string",
  "id": 0,
  "name": "string",
  "protocol": "Http",
  "value": 0
}
```

<h3 id="retrieve-conversion-specified-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Conversions.Conversion](#schemaapi.core.dto.conversions.conversion)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update conversion specified by id

<a id="opIdConversions_Post"></a>

> Code samples

```bash
curl https://example.com/conversions/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "code": "string",
    "creationDate": "20120203120530",
    "deleted": true,
    "description": "string",
    "id": 0,
    "name": "string",
    "protocol": "Http",
    "value": 0
  }'
```

`POST /conversions/{conversionId}`

> Body parameter

```json
{
  "code": "string",
  "creationDate": "20120203120530",
  "deleted": true,
  "description": "string",
  "id": 0,
  "name": "string",
  "protocol": "Http",
  "value": 0
}
```

<h3 id="update-conversion-specified-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|body|body|[Api.Core.Dto.Conversions.Conversion](#schemaapi.core.dto.conversions.conversion)|true|Updated body of the conversion|
|» code|body|string|false|none|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» deleted|body|boolean|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» protocol|body|string|false|none|
|» value|body|number(double)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|Http|
|» protocol|Https|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="update-conversion-specified-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete conversion specified by id

<a id="opIdConversions_Delete"></a>

> Code samples

```bash
curl https://example.com/conversions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /conversions/{conversionId}`

<h3 id="delete-conversion-specified-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-conversion-specified-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this conversion for a timeframe

<a id="opIdConversions_GetStatisticsSingle"></a>

> Code samples

```bash
curl 'https://example.com/conversions/0/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}/aggregated`

<h3 id="retrieve-statistics-about-this-conversion-for-a-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|tag|query|string|false|Filter by this tag name|
|favourite|query|boolean|false|Is the datapoint marked as favourite|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-conversion-for-a-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdConversions_GetStatisticsList"></a>

> Code samples

```bash
curl 'https://example.com/conversions/0/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}/aggregated/list`

<h3 id="retrieve-statistics-about-this-conversion-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-this-conversion-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a list of datapoints connected to this conversion

<a id="opIdConversions_GetDatapoints"></a>

> Code samples

```bash
curl https://example.com/conversions/0/datapoints \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}/datapoints`

<h3 id="retrieve-a-list-of-datapoints-connected-to-this-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|type|query|string|false|Type of datapoint ("tl"/"tp")|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tags|query|string|false|Filter by this tag name|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-datapoints-connected-to-this-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Modify the association between a conversion and multiple datapoints

> Code samples

```bash
curl https://example.com/conversions/0/datapoints/batch/patch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "PatchRequests": [
      {
        "Action": "string",
        "Id": 0
      }
    ]
  }'
```

`PUT /conversions/{conversionId}/datapoints/batch/patch`

> Body parameter

```json
{
  "PatchRequests": [
    {
      "Action": "string",
      "Id": 0
    }
  ]
}
```

<h3 id="modify-the-association-between-a-conversion-and-multiple-datapoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|body|body|[Api.Core.Requests.PatchBodyBatch](#schemaapi.core.requests.patchbodybatch)|true|Patch requests|
|» PatchRequests|body|[[Api.Core.Requests.PatchBody](#schemaapi.core.requests.patchbody)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="modify-the-association-between-a-conversion-and-multiple-datapoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a count of datapoints connected to this conversion

<a id="opIdConversions_GetDatapointsCount"></a>

> Code samples

```bash
curl https://example.com/conversions/0/datapoints/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}/datapoints/count`

<h3 id="retrieve-a-count-of-datapoints-connected-to-this-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|type|query|string|false|Type of datapoint ("tl"/"tp")|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tags|query|string|false|Filter by this tag name|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-a-count-of-datapoints-connected-to-this-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Modify the association between a conversion and a datapoint

<a id="opIdConversions_Patch"></a>

> Code samples

```bash
curl https://example.com/conversions/0/datapoints/patch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Action": "string",
    "Id": 0,
    "ReplaceId": 0
  }'
```

`PUT /conversions/{conversionId}/datapoints/patch`

> Body parameter

```json
{
  "Action": "string",
  "Id": 0,
  "ReplaceId": 0
}
```

<h3 id="modify-the-association-between-a-conversion-and-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|body|body|[Api.Core.Requests.ConversionPatchBody](#schemaapi.core.requests.conversionpatchbody)|true|Patch request|
|» Action|body|string|false|none|
|» Id|body|integer(int64)|false|none|
|» ReplaceId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="modify-the-association-between-a-conversion-and-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve the list of events related to this conversion.

<a id="opIdConversions_GetHits"></a>

> Code samples

```bash
curl 'https://example.com/conversions/0/hits?timeframe=yesterday' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /conversions/{conversionId}/hits`

<h3 id="retrieve-the-list-of-events-related-to-this-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|timeframe|query|string|true|Timeframe of the request. See list at $timeframeList|
|limit|query|integer(int32)|false|Limit results to this number|
|offset|query|string|false|Offset where to start from (it's the lastKey field in the response object)|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|filter|query|string|false|Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeframe|yesterday|
|timeframe|last7|
|timeframe|last30|
|timeframe|lastmonth|
|timeframe|currentmonth|
|timeframe|previousmonth|
|timeframe|last90|
|timeframe|last120|
|timeframe|last180|
|timeframe|custom|
|filter|spiders|
|filter|uniques|
|filter|nonuniques|
|filter|conversions|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ],
  "lastKey": "string"
}
```

<h3 id="retrieve-the-list-of-events-related-to-this-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.ClickStream.HitListPage](#schemaapi.core.dto.clickstream.hitlistpage)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast patch the &quot;notes&quot; field of a conversion

<a id="opIdConversions_PatchNotes"></a>

> Code samples

```bash
curl https://example.com/conversions/0/notes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Text": "string"
  }'
```

`PUT /conversions/{conversionId}/notes`

> Body parameter

```json
{
  "Text": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversionId|path|integer(int64)|true|Id of the conversion|
|body|body|[Api.Core.Requests.GenericTextPatch](#schemaapi.core.requests.generictextpatch)|true|Patch requests|
|» Text|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-datapoints">DataPoints</h1>

## List of all the datapoints associated to the user

<a id="opIdDataPoints_Get"></a>

> Code samples

```bash
curl https://example.com/datapoints \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints`

<h3 id="list-of-all-the-datapoints-associated-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-datapoints-associated-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a datapoint

<a id="opIdDataPoints_Put"></a>

> Code samples

```bash
curl https://example.com/datapoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  }'
```

`POST /datapoints`

> Body parameter

```json
{
  "creationDate": "20120203120530",
  "encodeIp": true,
  "fifthConversionId": 0,
  "fifthConversionName": "string",
  "firstConversionId": 0,
  "firstConversionName": "string",
  "fourthConversionId": 0,
  "fourthConversionName": "string",
  "groupId": 0,
  "groupName": "string",
  "id": 0,
  "isPublic": true,
  "isSecured": true,
  "lightTracking": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "secondConversionId": 0,
  "secondConversionName": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "thirdConversionId": 0,
  "thirdConversionName": "string",
  "title": "string",
  "trackingCode": "string",
  "type": "TrackingLink",
  "typeTL": {
    "appendQuery": true,
    "browserDestinationItem": {
      "emailDestinationUrl": "string",
      "mobileDestinationUrl": "string",
      "spidersDestinationUrl": "string"
    },
    "destinationMode": "Simple",
    "domainId": 0,
    "encodeUrl": true,
    "expirationClicks": 0,
    "expirationDate": "20120203120530",
    "firstUrl": "string",
    "goDomainId": 0,
    "hideUrl": true,
    "hideUrlTitle": "string",
    "isABTest": true,
    "password": "string",
    "pauseAfterClicksExpiration": true,
    "pauseAfterDateExpiration": true,
    "randomDestinationItems": [
      {
        "url": "string"
      }
    ],
    "redirectType": "PermanentRedirect",
    "referrerClean": "None",
    "scripts": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "sequentialDestinationItems": [
      {
        "url": "string"
      }
    ],
    "spilloverDestinationItems": [
      {
        "url": "string"
      }
    ],
    "uniqueDestinationItem": {
      "firstDestinationUrl": "string"
    },
    "url": "string",
    "urlAfterClicksExpiration": "string",
    "urlAfterDateExpiration": "string",
    "urlsByLanguage": [
      {
        "languageCode": "string",
        "url": "string"
      }
    ],
    "urlsByNation": [
      {
        "nation": "string",
        "url": "string"
      }
    ],
    "weightedDestinationItems": [
      {
        "url": "string",
        "weight": 0
      }
    ]
  },
  "typeTP": {
    "parameterNote": "string"
  },
  "writePermited": true
}
```

<h3 id="create-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)|true|The body of the datapoint|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» encodeIp|body|boolean|false|none|
|» fifthConversionId|body|integer(int64)|false|none|
|» fifthConversionName|body|string|false|none|
|» firstConversionId|body|integer(int64)|false|none|
|» firstConversionName|body|string|false|none|
|» fourthConversionId|body|integer(int64)|false|none|
|» fourthConversionName|body|string|false|none|
|» groupId|body|integer(int64)|false|none|
|» groupName|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» isPublic|body|boolean|false|none|
|» isSecured|body|boolean|false|none|
|» lightTracking|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» preferred|body|boolean|false|none|
|» redirectOnly|body|boolean|false|none|
|» secondConversionId|body|integer(int64)|false|none|
|» secondConversionName|body|string|false|none|
|» status|body|string|false|none|
|» tags|body|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|
|» thirdConversionId|body|integer(int64)|false|none|
|» thirdConversionName|body|string|false|none|
|» title|body|string|false|none|
|» trackingCode|body|string|false|none|
|» type|body|string|false|none|
|» typeTL|body|[Api.Core.Dto.Datapoints.TrackingLinkSpecifics](#schemaapi.core.dto.datapoints.trackinglinkspecifics)|false|none|
|» typeTP|body|[Api.Core.Dto.Datapoints.TrackingPixelSpecifics](#schemaapi.core.dto.datapoints.trackingpixelspecifics)|false|none|
|» writePermited|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Paused|
|» status|Abuse|
|» status|Deleted|
|» type|TrackingLink|
|» type|TrackingPixel|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this customer for a timeframe by groups

<a id="opIdDataPoints_GetStatisticsAggregatedSingle"></a>

> Code samples

```bash
curl 'https://example.com/datapoints/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/aggregated`

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-by-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|type|query|string|false|Type of datapoint ("tl"/"tp")|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the datapoint is marked as favourite|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-by-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdDataPoints_GetStatisticsAllList"></a>

> Code samples

```bash
curl 'https://example.com/datapoints/aggregated/list?type=tp&timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/aggregated/list`

<h3 id="retrieve-statistics-about-all-datapoints-of-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Type of datapoint ("tl"/"tp")|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the datapoint is marked as favourite|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|status|deleted|
|status|active|
|status|paused|
|status|spam|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-all-datapoints-of-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create multiple datapoints

<a id="opIdDataPoints_BatchPut"></a>

> Code samples

```bash
curl https://example.com/datapoints/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "List": [
      {
        "creationDate": "20120203120530",
        "encodeIp": true,
        "fifthConversionId": 0,
        "fifthConversionName": "string",
        "firstConversionId": 0,
        "firstConversionName": "string",
        "fourthConversionId": 0,
        "fourthConversionName": "string",
        "groupId": 0,
        "groupName": "string",
        "id": 0,
        "isPublic": true,
        "isSecured": true,
        "lightTracking": true,
        "name": "string",
        "notes": "string",
        "preferred": true,
        "redirectOnly": true,
        "secondConversionId": 0,
        "secondConversionName": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "thirdConversionId": 0,
        "thirdConversionName": "string",
        "title": "string",
        "trackingCode": "string",
        "type": "TrackingLink",
        "typeTL": {
          "appendQuery": true,
          "browserDestinationItem": {
            "emailDestinationUrl": "string",
            "mobileDestinationUrl": "string",
            "spidersDestinationUrl": "string"
          },
          "destinationMode": "Simple",
          "domainId": 0,
          "encodeUrl": true,
          "expirationClicks": 0,
          "expirationDate": "20120203120530",
          "firstUrl": "string",
          "goDomainId": 0,
          "hideUrl": true,
          "hideUrlTitle": "string",
          "isABTest": true,
          "password": "string",
          "pauseAfterClicksExpiration": true,
          "pauseAfterDateExpiration": true,
          "randomDestinationItems": [
            {
              "url": "string"
            }
          ],
          "redirectType": "PermanentRedirect",
          "referrerClean": "None",
          "scripts": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "sequentialDestinationItems": [
            {
              "url": "string"
            }
          ],
          "spilloverDestinationItems": [
            {
              "url": "string"
            }
          ],
          "uniqueDestinationItem": {
            "firstDestinationUrl": "string"
          },
          "url": "string",
          "urlAfterClicksExpiration": "string",
          "urlAfterDateExpiration": "string",
          "urlsByLanguage": [
            {
              "languageCode": "string",
              "url": "string"
            }
          ],
          "urlsByNation": [
            {
              "nation": "string",
              "url": "string"
            }
          ],
          "weightedDestinationItems": [
            {
              "url": "string",
              "weight": 0
            }
          ]
        },
        "typeTP": {
          "parameterNote": "string"
        },
        "writePermited": true
      }
    ]
  }'
```

`PUT /datapoints/batch`

> Body parameter

```json
{
  "List": [
    {
      "creationDate": "20120203120530",
      "encodeIp": true,
      "fifthConversionId": 0,
      "fifthConversionName": "string",
      "firstConversionId": 0,
      "firstConversionName": "string",
      "fourthConversionId": 0,
      "fourthConversionName": "string",
      "groupId": 0,
      "groupName": "string",
      "id": 0,
      "isPublic": true,
      "isSecured": true,
      "lightTracking": true,
      "name": "string",
      "notes": "string",
      "preferred": true,
      "redirectOnly": true,
      "secondConversionId": 0,
      "secondConversionName": "string",
      "status": "Active",
      "tags": [
        {
          "datapoints": [
            0
          ],
          "groups": [
            0
          ],
          "id": 0,
          "name": "string"
        }
      ],
      "thirdConversionId": 0,
      "thirdConversionName": "string",
      "title": "string",
      "trackingCode": "string",
      "type": "TrackingLink",
      "typeTL": {
        "appendQuery": true,
        "browserDestinationItem": {
          "emailDestinationUrl": "string",
          "mobileDestinationUrl": "string",
          "spidersDestinationUrl": "string"
        },
        "destinationMode": "Simple",
        "domainId": 0,
        "encodeUrl": true,
        "expirationClicks": 0,
        "expirationDate": "20120203120530",
        "firstUrl": "string",
        "goDomainId": 0,
        "hideUrl": true,
        "hideUrlTitle": "string",
        "isABTest": true,
        "password": "string",
        "pauseAfterClicksExpiration": true,
        "pauseAfterDateExpiration": true,
        "randomDestinationItems": [
          {
            "url": "string"
          }
        ],
        "redirectType": "PermanentRedirect",
        "referrerClean": "None",
        "scripts": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "sequentialDestinationItems": [
          {
            "url": "string"
          }
        ],
        "spilloverDestinationItems": [
          {
            "url": "string"
          }
        ],
        "uniqueDestinationItem": {
          "firstDestinationUrl": "string"
        },
        "url": "string",
        "urlAfterClicksExpiration": "string",
        "urlAfterDateExpiration": "string",
        "urlsByLanguage": [
          {
            "languageCode": "string",
            "url": "string"
          }
        ],
        "urlsByNation": [
          {
            "nation": "string",
            "url": "string"
          }
        ],
        "weightedDestinationItems": [
          {
            "url": "string",
            "weight": 0
          }
        ]
      },
      "typeTP": {
        "parameterNote": "string"
      },
      "writePermited": true
    }
  ]
}
```

<h3 id="create-multiple-datapoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Requests.DatapointsBatch](#schemaapi.core.requests.datapointsbatch)|true|A json containing the datapoints to create.|
|» List|body|[[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)]|false|none|

> Example responses

> 200 Response

```json
{
  "entityData": {
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  },
  "errors": [
    {
      "code": {},
      "errorMessage": "string",
      "errorValue": {},
      "property": "string"
    }
  ],
  "result": {
    "id": 0,
    "uri": "string"
  },
  "status": "string"
}
```

<h3 id="create-multiple-datapoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_](#schemaapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update multiple datapoints

<a id="opIdDataPoints_BatchPost"></a>

> Code samples

```bash
curl https://example.com/datapoints/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "List": [
      {
        "creationDate": "20120203120530",
        "encodeIp": true,
        "fifthConversionId": 0,
        "fifthConversionName": "string",
        "firstConversionId": 0,
        "firstConversionName": "string",
        "fourthConversionId": 0,
        "fourthConversionName": "string",
        "groupId": 0,
        "groupName": "string",
        "id": 0,
        "isPublic": true,
        "isSecured": true,
        "lightTracking": true,
        "name": "string",
        "notes": "string",
        "preferred": true,
        "redirectOnly": true,
        "secondConversionId": 0,
        "secondConversionName": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "thirdConversionId": 0,
        "thirdConversionName": "string",
        "title": "string",
        "trackingCode": "string",
        "type": "TrackingLink",
        "typeTL": {
          "appendQuery": true,
          "browserDestinationItem": {
            "emailDestinationUrl": "string",
            "mobileDestinationUrl": "string",
            "spidersDestinationUrl": "string"
          },
          "destinationMode": "Simple",
          "domainId": 0,
          "encodeUrl": true,
          "expirationClicks": 0,
          "expirationDate": "20120203120530",
          "firstUrl": "string",
          "goDomainId": 0,
          "hideUrl": true,
          "hideUrlTitle": "string",
          "isABTest": true,
          "password": "string",
          "pauseAfterClicksExpiration": true,
          "pauseAfterDateExpiration": true,
          "randomDestinationItems": [
            {
              "url": "string"
            }
          ],
          "redirectType": "PermanentRedirect",
          "referrerClean": "None",
          "scripts": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "sequentialDestinationItems": [
            {
              "url": "string"
            }
          ],
          "spilloverDestinationItems": [
            {
              "url": "string"
            }
          ],
          "uniqueDestinationItem": {
            "firstDestinationUrl": "string"
          },
          "url": "string",
          "urlAfterClicksExpiration": "string",
          "urlAfterDateExpiration": "string",
          "urlsByLanguage": [
            {
              "languageCode": "string",
              "url": "string"
            }
          ],
          "urlsByNation": [
            {
              "nation": "string",
              "url": "string"
            }
          ],
          "weightedDestinationItems": [
            {
              "url": "string",
              "weight": 0
            }
          ]
        },
        "typeTP": {
          "parameterNote": "string"
        },
        "writePermited": true
      }
    ]
  }'
```

`POST /datapoints/batch`

> Body parameter

```json
{
  "List": [
    {
      "creationDate": "20120203120530",
      "encodeIp": true,
      "fifthConversionId": 0,
      "fifthConversionName": "string",
      "firstConversionId": 0,
      "firstConversionName": "string",
      "fourthConversionId": 0,
      "fourthConversionName": "string",
      "groupId": 0,
      "groupName": "string",
      "id": 0,
      "isPublic": true,
      "isSecured": true,
      "lightTracking": true,
      "name": "string",
      "notes": "string",
      "preferred": true,
      "redirectOnly": true,
      "secondConversionId": 0,
      "secondConversionName": "string",
      "status": "Active",
      "tags": [
        {
          "datapoints": [
            0
          ],
          "groups": [
            0
          ],
          "id": 0,
          "name": "string"
        }
      ],
      "thirdConversionId": 0,
      "thirdConversionName": "string",
      "title": "string",
      "trackingCode": "string",
      "type": "TrackingLink",
      "typeTL": {
        "appendQuery": true,
        "browserDestinationItem": {
          "emailDestinationUrl": "string",
          "mobileDestinationUrl": "string",
          "spidersDestinationUrl": "string"
        },
        "destinationMode": "Simple",
        "domainId": 0,
        "encodeUrl": true,
        "expirationClicks": 0,
        "expirationDate": "20120203120530",
        "firstUrl": "string",
        "goDomainId": 0,
        "hideUrl": true,
        "hideUrlTitle": "string",
        "isABTest": true,
        "password": "string",
        "pauseAfterClicksExpiration": true,
        "pauseAfterDateExpiration": true,
        "randomDestinationItems": [
          {
            "url": "string"
          }
        ],
        "redirectType": "PermanentRedirect",
        "referrerClean": "None",
        "scripts": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "sequentialDestinationItems": [
          {
            "url": "string"
          }
        ],
        "spilloverDestinationItems": [
          {
            "url": "string"
          }
        ],
        "uniqueDestinationItem": {
          "firstDestinationUrl": "string"
        },
        "url": "string",
        "urlAfterClicksExpiration": "string",
        "urlAfterDateExpiration": "string",
        "urlsByLanguage": [
          {
            "languageCode": "string",
            "url": "string"
          }
        ],
        "urlsByNation": [
          {
            "nation": "string",
            "url": "string"
          }
        ],
        "weightedDestinationItems": [
          {
            "url": "string",
            "weight": 0
          }
        ]
      },
      "typeTP": {
        "parameterNote": "string"
      },
      "writePermited": true
    }
  ]
}
```

<h3 id="update-multiple-datapoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Requests.DatapointsBatch](#schemaapi.core.requests.datapointsbatch)|true|A json containing the datapoints to update.|
|» List|body|[[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)]|false|none|

> Example responses

> 200 Response

```json
{
  "entityData": {
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  },
  "errors": [
    {
      "code": {},
      "errorMessage": "string",
      "errorValue": {},
      "property": "string"
    }
  ],
  "result": {
    "id": 0,
    "uri": "string"
  },
  "status": "string"
}
```

<h3 id="update-multiple-datapoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_](#schemaapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete multiple datapoints

<a id="opIdDataPoints_BatchDelete"></a>

> Code samples

```bash
curl https://example.com/datapoints/batch \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Entities": [
      {
        "id": 0,
        "uri": "string"
      }
    ]
  }'
```

`DELETE /datapoints/batch`

> Body parameter

```json
{
  "Entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="delete-multiple-datapoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Requests.DeleteBatch](#schemaapi.core.requests.deletebatch)|true|A json containing the datapoints to delete.|
|» Entities|body|[[Api.Core.Dto.EntityUriLong](#schemaapi.core.dto.entityurilong)]|false|none|

> Example responses

> 200 Response

```json
{
  "entityData": {
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  },
  "errors": [
    {
      "code": {},
      "errorMessage": "string",
      "errorValue": {},
      "property": "string"
    }
  ],
  "result": {
    "id": 0,
    "uri": "string"
  },
  "status": "string"
}
```

<h3 id="delete-multiple-datapoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_](#schemaapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the datapoints associated to the user

<a id="opIdDataPoints_Count"></a>

> Code samples

```bash
curl https://example.com/datapoints/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/count`

<h3 id="count-the-datapoints-associated-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-datapoints-associated-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a datapoint

> Code samples

```bash
curl https://example.com/datapoints/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/{id}`

<h3 id="get-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the datapoint|

> Example responses

> 200 Response

```json
{
  "creationDate": "20120203120530",
  "encodeIp": true,
  "fifthConversionId": 0,
  "fifthConversionName": "string",
  "firstConversionId": 0,
  "firstConversionName": "string",
  "fourthConversionId": 0,
  "fourthConversionName": "string",
  "groupId": 0,
  "groupName": "string",
  "id": 0,
  "isPublic": true,
  "isSecured": true,
  "lightTracking": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "secondConversionId": 0,
  "secondConversionName": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "thirdConversionId": 0,
  "thirdConversionName": "string",
  "title": "string",
  "trackingCode": "string",
  "type": "TrackingLink",
  "typeTL": {
    "appendQuery": true,
    "browserDestinationItem": {
      "emailDestinationUrl": "string",
      "mobileDestinationUrl": "string",
      "spidersDestinationUrl": "string"
    },
    "destinationMode": "Simple",
    "domainId": 0,
    "encodeUrl": true,
    "expirationClicks": 0,
    "expirationDate": "20120203120530",
    "firstUrl": "string",
    "goDomainId": 0,
    "hideUrl": true,
    "hideUrlTitle": "string",
    "isABTest": true,
    "password": "string",
    "pauseAfterClicksExpiration": true,
    "pauseAfterDateExpiration": true,
    "randomDestinationItems": [
      {
        "url": "string"
      }
    ],
    "redirectType": "PermanentRedirect",
    "referrerClean": "None",
    "scripts": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "sequentialDestinationItems": [
      {
        "url": "string"
      }
    ],
    "spilloverDestinationItems": [
      {
        "url": "string"
      }
    ],
    "uniqueDestinationItem": {
      "firstDestinationUrl": "string"
    },
    "url": "string",
    "urlAfterClicksExpiration": "string",
    "urlAfterDateExpiration": "string",
    "urlsByLanguage": [
      {
        "languageCode": "string",
        "url": "string"
      }
    ],
    "urlsByNation": [
      {
        "nation": "string",
        "url": "string"
      }
    ],
    "weightedDestinationItems": [
      {
        "url": "string",
        "weight": 0
      }
    ]
  },
  "typeTP": {
    "parameterNote": "string"
  },
  "writePermited": true
}
```

<h3 id="get-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a datapoint

<a id="opIdDataPoints_Post"></a>

> Code samples

```bash
curl https://example.com/datapoints/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  }'
```

`POST /datapoints/{id}`

> Body parameter

```json
{
  "creationDate": "20120203120530",
  "encodeIp": true,
  "fifthConversionId": 0,
  "fifthConversionName": "string",
  "firstConversionId": 0,
  "firstConversionName": "string",
  "fourthConversionId": 0,
  "fourthConversionName": "string",
  "groupId": 0,
  "groupName": "string",
  "id": 0,
  "isPublic": true,
  "isSecured": true,
  "lightTracking": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "secondConversionId": 0,
  "secondConversionName": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "thirdConversionId": 0,
  "thirdConversionName": "string",
  "title": "string",
  "trackingCode": "string",
  "type": "TrackingLink",
  "typeTL": {
    "appendQuery": true,
    "browserDestinationItem": {
      "emailDestinationUrl": "string",
      "mobileDestinationUrl": "string",
      "spidersDestinationUrl": "string"
    },
    "destinationMode": "Simple",
    "domainId": 0,
    "encodeUrl": true,
    "expirationClicks": 0,
    "expirationDate": "20120203120530",
    "firstUrl": "string",
    "goDomainId": 0,
    "hideUrl": true,
    "hideUrlTitle": "string",
    "isABTest": true,
    "password": "string",
    "pauseAfterClicksExpiration": true,
    "pauseAfterDateExpiration": true,
    "randomDestinationItems": [
      {
        "url": "string"
      }
    ],
    "redirectType": "PermanentRedirect",
    "referrerClean": "None",
    "scripts": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "sequentialDestinationItems": [
      {
        "url": "string"
      }
    ],
    "spilloverDestinationItems": [
      {
        "url": "string"
      }
    ],
    "uniqueDestinationItem": {
      "firstDestinationUrl": "string"
    },
    "url": "string",
    "urlAfterClicksExpiration": "string",
    "urlAfterDateExpiration": "string",
    "urlsByLanguage": [
      {
        "languageCode": "string",
        "url": "string"
      }
    ],
    "urlsByNation": [
      {
        "nation": "string",
        "url": "string"
      }
    ],
    "weightedDestinationItems": [
      {
        "url": "string",
        "weight": 0
      }
    ]
  },
  "typeTP": {
    "parameterNote": "string"
  },
  "writePermited": true
}
```

<h3 id="update-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the datapoint|
|body|body|[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)|true|The body of the datapoint|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» encodeIp|body|boolean|false|none|
|» fifthConversionId|body|integer(int64)|false|none|
|» fifthConversionName|body|string|false|none|
|» firstConversionId|body|integer(int64)|false|none|
|» firstConversionName|body|string|false|none|
|» fourthConversionId|body|integer(int64)|false|none|
|» fourthConversionName|body|string|false|none|
|» groupId|body|integer(int64)|false|none|
|» groupName|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» isPublic|body|boolean|false|none|
|» isSecured|body|boolean|false|none|
|» lightTracking|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» preferred|body|boolean|false|none|
|» redirectOnly|body|boolean|false|none|
|» secondConversionId|body|integer(int64)|false|none|
|» secondConversionName|body|string|false|none|
|» status|body|string|false|none|
|» tags|body|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|
|» thirdConversionId|body|integer(int64)|false|none|
|» thirdConversionName|body|string|false|none|
|» title|body|string|false|none|
|» trackingCode|body|string|false|none|
|» type|body|string|false|none|
|» typeTL|body|[Api.Core.Dto.Datapoints.TrackingLinkSpecifics](#schemaapi.core.dto.datapoints.trackinglinkspecifics)|false|none|
|» typeTP|body|[Api.Core.Dto.Datapoints.TrackingPixelSpecifics](#schemaapi.core.dto.datapoints.trackingpixelspecifics)|false|none|
|» writePermited|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Paused|
|» status|Abuse|
|» status|Deleted|
|» type|TrackingLink|
|» type|TrackingPixel|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="update-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a datapoint

<a id="opIdDataPoints_Delete"></a>

> Code samples

```bash
curl https://example.com/datapoints/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /datapoints/{id}`

<h3 id="delete-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the datapoint|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this datapoint for a timeframe

<a id="opIdDataPoints_GetStatisticsSingle"></a>

> Code samples

```bash
curl 'https://example.com/datapoints/0/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/{id}/aggregated`

<h3 id="retrieve-statistics-about-this-datapoint-for-a-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the datapoint|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-datapoint-for-a-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdDataPoints_GetStatisticsList"></a>

> Code samples

```bash
curl 'https://example.com/datapoints/0/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/{id}/aggregated/list`

<h3 id="retrieve-statistics-about-this-datapoint-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the datapoint|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-this-datapoint-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast switch the &quot;favourite&quot; field of a datapoint

<a id="opIdDataPoints_PatchFavourite"></a>

> Code samples

```bash
curl https://example.com/datapoints/0/favourite \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`PUT /datapoints/{id}/favourite`

<h3 id="fast-switch-the-favourite-field-of-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the datapoint|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-switch-the-favourite-field-of-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve the list of events related to this datapoint.

<a id="opIdDataPoints_GetHits"></a>

> Code samples

```bash
curl 'https://example.com/datapoints/0/hits?timeframe=yesterday' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /datapoints/{id}/hits`

<h3 id="retrieve-the-list-of-events-related-to-this-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the datapoint|
|timeframe|query|string|true|Timeframe of the request. See list at $timeframeList|
|limit|query|integer(int32)|false|Limit results to this number|
|offset|query|string|false|Offset where to start from (it's the lastKey field in the response object)|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|filter|query|string|false|Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeframe|yesterday|
|timeframe|last7|
|timeframe|last30|
|timeframe|lastmonth|
|timeframe|currentmonth|
|timeframe|previousmonth|
|timeframe|last90|
|timeframe|last120|
|timeframe|last180|
|timeframe|custom|
|filter|spiders|
|filter|uniques|
|filter|nonuniques|
|filter|conversions|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ],
  "lastKey": "string"
}
```

<h3 id="retrieve-the-list-of-events-related-to-this-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.ClickStream.HitListPage](#schemaapi.core.dto.clickstream.hitlistpage)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast patch the &quot;notes&quot; field of a datapoint

<a id="opIdDataPoints_PatchNotes"></a>

> Code samples

```bash
curl https://example.com/datapoints/0/notes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Text": "string"
  }'
```

`PUT /datapoints/{id}/notes`

> Body parameter

```json
{
  "Text": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the datapoint|
|body|body|[Api.Core.Requests.GenericTextPatch](#schemaapi.core.requests.generictextpatch)|true|Patch requests|
|» Text|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-domains">Domains</h1>

## Retrieve a list of domains

<a id="opIdDomains_Get"></a>

> Code samples

```bash
curl https://example.com/domains \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /domains`

<h3 id="retrieve-a-list-of-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|type|query|string|false|Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"|
|name|query|string|false|Filter domains with this anmen|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|system|
|type|go|
|type|personal|
|type|dedicated|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a domain

<a id="opIdDomains_Put"></a>

> Code samples

```bash
curl https://example.com/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "custom404": "string",
    "customHomepage": "string",
    "id": 0,
    "name": "string",
    "type": "System"
  }'
```

`POST /domains`

> Body parameter

```json
{
  "custom404": "string",
  "customHomepage": "string",
  "id": 0,
  "name": "string",
  "type": "System"
}
```

<h3 id="create-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Domains.Domain](#schemaapi.core.dto.domains.domain)|true|The domain to create|
|» custom404|body|string|false|none|
|» customHomepage|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|System|
|» type|Go|
|» type|Dedicated|
|» type|Personal|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve count of domains

<a id="opIdDomains_Count"></a>

> Code samples

```bash
curl https://example.com/domains/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /domains/count`

<h3 id="retrieve-count-of-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"|
|name|query|string|false|Filter domains with this anmen|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|system|
|type|go|
|type|personal|
|type|dedicated|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-count-of-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a domain

> Code samples

```bash
curl https://example.com/domains/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /domains/{id}`

<h3 id="get-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of domain|

> Example responses

> 200 Response

```json
{
  "custom404": "string",
  "customHomepage": "string",
  "id": 0,
  "name": "string",
  "type": "System"
}
```

<h3 id="get-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Domains.Domain](#schemaapi.core.dto.domains.domain)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a domain

<a id="opIdDomains_Update"></a>

> Code samples

```bash
curl https://example.com/domains/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "custom404": "string",
    "customHomepage": "string",
    "id": 0,
    "name": "string",
    "type": "System"
  }'
```

`POST /domains/{id}`

> Body parameter

```json
{
  "custom404": "string",
  "customHomepage": "string",
  "id": 0,
  "name": "string",
  "type": "System"
}
```

<h3 id="update-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of domain|
|body|body|[Api.Core.Dto.Domains.Domain](#schemaapi.core.dto.domains.domain)|true|The domain to update|
|» custom404|body|string|false|none|
|» customHomepage|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|System|
|» type|Go|
|» type|Dedicated|
|» type|Personal|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="update-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a domain

<a id="opIdDomains_Delete"></a>

> Code samples

```bash
curl https://example.com/domains/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /domains/{id}`

<h3 id="delete-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of domain|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-groups">Groups</h1>

## List of all the groups associated to the user.

<a id="opIdGroups_Get"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups`

<h3 id="list-of-all-the-groups-associated-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|status|query|string|false|Status of the group|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude groups created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude groups created after this date (YYYYMMDD)|
|write|query|boolean|false|Write permission|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-groups-associated-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a group

<a id="opIdGroups_Put"></a>

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "creationDate": "20120203120530",
    "deleted": true,
    "id": 0,
    "isPublic": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "writePermited": true
  }'
```

`POST /groups`

> Body parameter

```json
{
  "creationDate": "20120203120530",
  "deleted": true,
  "id": 0,
  "isPublic": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "writePermited": true
}
```

<h3 id="create-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Groups.Group](#schemaapi.core.dto.groups.group)|true|The body of the group|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» deleted|body|boolean|false|none|
|» id|body|integer(int64)|false|none|
|» isPublic|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» preferred|body|boolean|false|none|
|» redirectOnly|body|boolean|false|none|
|» tags|body|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|
|» writePermited|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this customer for a timeframe by groups

<a id="opIdGroups_GetStatisticsAggregatedSingle"></a>

> Code samples

```bash
curl 'https://example.com/groups/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/aggregated`

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-by-groups-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|
|status|query|string|false|Status of group ("deleted"/"active")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the group is marked as favourite|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-customer-for-a-timeframe-by-groups-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdGroups_GetStatisticsAllList"></a>

> Code samples

```bash
curl 'https://example.com/groups/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/aggregated/list`

<h3 id="retrieve-statistics-about-all-groups-of-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of group ("deleted"/"active")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the group is marked as favourite|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|groupBy|deleted|
|groupBy|active|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-all-groups-of-this-customer-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the groups associated to the user.

<a id="opIdGroups_Count"></a>

> Code samples

```bash
curl https://example.com/groups/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/count`

<h3 id="count-the-groups-associated-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude groups created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude groups created after this date (YYYYMMDD)|
|write|query|boolean|false|Write permission|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-groups-associated-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a group

> Code samples

```bash
curl https://example.com/groups/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}`

<h3 id="get-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the group|

> Example responses

> 200 Response

```json
{
  "creationDate": "20120203120530",
  "deleted": true,
  "id": 0,
  "isPublic": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "writePermited": true
}
```

<h3 id="get-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Groups.Group](#schemaapi.core.dto.groups.group)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a group

<a id="opIdGroups_Post"></a>

> Code samples

```bash
curl https://example.com/groups/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "creationDate": "20120203120530",
    "deleted": true,
    "id": 0,
    "isPublic": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "writePermited": true
  }'
```

`POST /groups/{id}`

> Body parameter

```json
{
  "creationDate": "20120203120530",
  "deleted": true,
  "id": 0,
  "isPublic": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "writePermited": true
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the group|
|body|body|[Api.Core.Dto.Groups.Group](#schemaapi.core.dto.groups.group)|true|The body of the group|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» deleted|body|boolean|false|none|
|» id|body|integer(int64)|false|none|
|» isPublic|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» preferred|body|boolean|false|none|
|» redirectOnly|body|boolean|false|none|
|» tags|body|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|
|» writePermited|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete group specified by id

<a id="opIdGroups_Delete"></a>

> Code samples

```bash
curl https://example.com/groups/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /groups/{id}`

<h3 id="delete-group-specified-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-group-specified-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this group for a timeframe

<a id="opIdGroups_GetStatisticsSingle"></a>

> Code samples

```bash
curl 'https://example.com/groups/0/aggregated?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/aggregated`

<h3 id="retrieve-statistics-about-this-group-for-a-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|hourly|query|boolean|false|If using "yesterday" or "today" timeframe you can ask for the hourly detail|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|

> Example responses

> 200 Response

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {},
    "property2": {}
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

<h3 id="retrieve-statistics-about-this-group-for-a-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)

<a id="opIdGroups_GetStatisticsList"></a>

> Code samples

```bash
curl 'https://example.com/groups/0/aggregated/list?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/aggregated/list`

<h3 id="retrieve-statistics-about-this-group-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|groupBy|query|string|false|The temporal entity you want to group by ("week"/"month"). If unspecified is "day".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|groupBy|week|
|groupBy|month|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-this-group-for-a-timeframe-grouped-by-some-temporal-entity-dayweekmonth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_](#schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

<a id="opIdGroups_GetDatapointsSummary"></a>

> Code samples

```bash
curl 'https://example.com/groups/0/aggregated/summary?timeFrame=today' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/aggregated/summary`

<h3 id="retrieve-statistics-about-a-subset-of-datapoints-for-a-timeframe-with-datapoints-data-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Filter by this group id|
|timeFrame|query|string|true|Timeframe of the request. See list at $timeframeList|
|type|query|string|false|Type of datapoint ("tl"/"tp")|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|status|query|string|false|Status of datapoint ("deleted"/"active"/"paused"/"spam")|
|tag|query|string|false|A comma separated list of tags you want to filter with.|
|favourite|query|boolean|false|Is the datapoint marked as favourite|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|offset|query|integer(int32)|false|Offset where to start from|
|limit|query|integer(int32)|false|Limit results to this number|
|textSearch|query|string|false|Filter fields by this pattern|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeFrame|today|
|timeFrame|yesterday|
|timeFrame|last7|
|timeFrame|last30|
|timeFrame|lastmonth|
|timeFrame|currentmonth|
|timeFrame|previousmonth|
|timeFrame|last90|
|timeFrame|last120|
|timeFrame|last180|
|timeFrame|last12months|
|timeFrame|lastyear|
|timeFrame|currentyear|
|timeFrame|beginning|
|timeFrame|custom|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0,
  "result": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

<h3 id="retrieve-statistics-about-a-subset-of-datapoints-for-a-timeframe-with-datapoints-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Aggregated.AggregatedSummaryResult](#schemaapi.core.dto.aggregated.aggregatedsummaryresult)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of all the datapoints associated to the user in this group.

<a id="opIdGroups_GetDatapoints"></a>

> Code samples

```bash
curl https://example.com/groups/0/datapoints \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/datapoints`

<h3 id="list-of-all-the-datapoints-associated-to-the-user-in-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-datapoints-associated-to-the-user-in-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a datapoint in this group

<a id="opIdGroups_PutDatapoint"></a>

> Code samples

```bash
curl https://example.com/groups/0/datapoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  }'
```

`POST /groups/{id}/datapoints`

> Body parameter

```json
{
  "creationDate": "20120203120530",
  "encodeIp": true,
  "fifthConversionId": 0,
  "fifthConversionName": "string",
  "firstConversionId": 0,
  "firstConversionName": "string",
  "fourthConversionId": 0,
  "fourthConversionName": "string",
  "groupId": 0,
  "groupName": "string",
  "id": 0,
  "isPublic": true,
  "isSecured": true,
  "lightTracking": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "secondConversionId": 0,
  "secondConversionName": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "thirdConversionId": 0,
  "thirdConversionName": "string",
  "title": "string",
  "trackingCode": "string",
  "type": "TrackingLink",
  "typeTL": {
    "appendQuery": true,
    "browserDestinationItem": {
      "emailDestinationUrl": "string",
      "mobileDestinationUrl": "string",
      "spidersDestinationUrl": "string"
    },
    "destinationMode": "Simple",
    "domainId": 0,
    "encodeUrl": true,
    "expirationClicks": 0,
    "expirationDate": "20120203120530",
    "firstUrl": "string",
    "goDomainId": 0,
    "hideUrl": true,
    "hideUrlTitle": "string",
    "isABTest": true,
    "password": "string",
    "pauseAfterClicksExpiration": true,
    "pauseAfterDateExpiration": true,
    "randomDestinationItems": [
      {
        "url": "string"
      }
    ],
    "redirectType": "PermanentRedirect",
    "referrerClean": "None",
    "scripts": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "sequentialDestinationItems": [
      {
        "url": "string"
      }
    ],
    "spilloverDestinationItems": [
      {
        "url": "string"
      }
    ],
    "uniqueDestinationItem": {
      "firstDestinationUrl": "string"
    },
    "url": "string",
    "urlAfterClicksExpiration": "string",
    "urlAfterDateExpiration": "string",
    "urlsByLanguage": [
      {
        "languageCode": "string",
        "url": "string"
      }
    ],
    "urlsByNation": [
      {
        "nation": "string",
        "url": "string"
      }
    ],
    "weightedDestinationItems": [
      {
        "url": "string",
        "weight": 0
      }
    ]
  },
  "typeTP": {
    "parameterNote": "string"
  },
  "writePermited": true
}
```

<h3 id="create-a-datapoint-in-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the group|
|body|body|[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)|true|The body of the datapoint|
|» creationDate|body|string|false| (A date in "YmdHis" format)|
|» encodeIp|body|boolean|false|none|
|» fifthConversionId|body|integer(int64)|false|none|
|» fifthConversionName|body|string|false|none|
|» firstConversionId|body|integer(int64)|false|none|
|» firstConversionName|body|string|false|none|
|» fourthConversionId|body|integer(int64)|false|none|
|» fourthConversionName|body|string|false|none|
|» groupId|body|integer(int64)|false|none|
|» groupName|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» isPublic|body|boolean|false|none|
|» isSecured|body|boolean|false|none|
|» lightTracking|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» preferred|body|boolean|false|none|
|» redirectOnly|body|boolean|false|none|
|» secondConversionId|body|integer(int64)|false|none|
|» secondConversionName|body|string|false|none|
|» status|body|string|false|none|
|» tags|body|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|
|» thirdConversionId|body|integer(int64)|false|none|
|» thirdConversionName|body|string|false|none|
|» title|body|string|false|none|
|» trackingCode|body|string|false|none|
|» type|body|string|false|none|
|» typeTL|body|[Api.Core.Dto.Datapoints.TrackingLinkSpecifics](#schemaapi.core.dto.datapoints.trackinglinkspecifics)|false|none|
|» typeTP|body|[Api.Core.Dto.Datapoints.TrackingPixelSpecifics](#schemaapi.core.dto.datapoints.trackingpixelspecifics)|false|none|
|» writePermited|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|Active|
|» status|Paused|
|» status|Abuse|
|» status|Deleted|
|» type|TrackingLink|
|» type|TrackingPixel|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-datapoint-in-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the datapoints associated to the user in this group.

<a id="opIdGroups_GetDatapointsCount"></a>

> Code samples

```bash
curl https://example.com/groups/0/datapoints/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/datapoints/count`

<h3 id="count-the-datapoints-associated-to-the-user-in-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-datapoints-associated-to-the-user-in-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast switch the &quot;favourite&quot; field of a group

<a id="opIdGroups_PatchFavourite"></a>

> Code samples

```bash
curl https://example.com/groups/0/favourite \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`PUT /groups/{id}/favourite`

<h3 id="fast-switch-the-favourite-field-of-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-switch-the-favourite-field-of-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve the list of events related to this group.

<a id="opIdGroups_GetHits"></a>

> Code samples

```bash
curl 'https://example.com/groups/0/hits?timeframe=yesterday' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /groups/{id}/hits`

<h3 id="retrieve-the-list-of-events-related-to-this-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|timeframe|query|string|true|Timeframe of the request. See list at $timeframeList|
|limit|query|integer(int32)|false|Limit results to this number|
|offset|query|string|false|Offset where to start from (it's the lastKey field in the response object)|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|filter|query|string|false|Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeframe|yesterday|
|timeframe|last7|
|timeframe|last30|
|timeframe|lastmonth|
|timeframe|currentmonth|
|timeframe|previousmonth|
|timeframe|last90|
|timeframe|last120|
|timeframe|last180|
|timeframe|custom|
|filter|spiders|
|filter|uniques|
|filter|nonuniques|
|filter|conversions|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ],
  "lastKey": "string"
}
```

<h3 id="retrieve-the-list-of-events-related-to-this-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.ClickStream.HitListPage](#schemaapi.core.dto.clickstream.hitlistpage)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast patch the &quot;notes&quot; field of a group

<a id="opIdGroups_PatchNotes"></a>

> Code samples

```bash
curl https://example.com/groups/0/notes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Text": "string"
  }'
```

`PUT /groups/{id}/notes`

> Body parameter

```json
{
  "Text": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|body|body|[Api.Core.Requests.GenericTextPatch](#schemaapi.core.requests.generictextpatch)|true|Patch requests|
|» Text|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-patch-the-notes-field-of-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-hits">Hits</h1>

## Retrieve the list of events related to this account.

<a id="opIdHits_GetHits"></a>

> Code samples

```bash
curl 'https://example.com/hits?timeframe=yesterday' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /hits`

<h3 id="retrieve-the-list-of-events-related-to-this-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeframe|query|string|true|Timeframe of the request. See list at $timeframeList|
|limit|query|integer(int32)|false|Limit results to this number|
|offset|query|string|false|Offset where to start from (it's the lastKey field in the response object)|
|fromDay|query|string|false|If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)|
|toDay|query|string|false|If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)|
|filter|query|string|false|Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeframe|yesterday|
|timeframe|last7|
|timeframe|last30|
|timeframe|lastmonth|
|timeframe|currentmonth|
|timeframe|previousmonth|
|timeframe|last90|
|timeframe|last120|
|timeframe|last180|
|timeframe|custom|
|filter|spiders|
|filter|uniques|
|filter|nonuniques|
|filter|conversions|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ],
  "lastKey": "string"
}
```

<h3 id="retrieve-the-list-of-events-related-to-this-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.ClickStream.HitListPage](#schemaapi.core.dto.clickstream.hitlistpage)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-me">Me</h1>

## Retrieve current account data

<a id="opIdMe_GetMe"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /me`

> Example responses

> 200 Response

```json
{
  "boGoVal": "string",
  "bonusClicks": 0,
  "companyName": "string",
  "companyRole": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "redirectOnly": true,
  "registrationDate": "20120203120530",
  "timeframeMinDate": "20120203120530",
  "timezone": 0,
  "timezonename": "string"
}
```

<h3 id="retrieve-current-account-data-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.User](#schemaapi.core.dto.accounting.user)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve current account plan

<a id="opIdMe_GetMePlan"></a>

> Code samples

```bash
curl https://example.com/me/plan \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /me/plan`

> Example responses

> 200 Response

```json
{
  "allowedPersonalDomains": 0,
  "allowedPersonalUrls": 0,
  "billingPeriodEnd": "20120203120530",
  "billingPeriodStart": "20120203120530",
  "bonusMonthlyEvents": 0,
  "maximumDatapoints": 0,
  "maximumGuests": 0,
  "monthlyEvents": 0,
  "name": "string",
  "price": 0,
  "profileId": 0,
  "recurring": true,
  "recurringPeriod": 0,
  "usedDatapoints": 0,
  "usedMonthlyEvents": 0
}
```

<h3 id="retrieve-current-account-plan-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Accounting.Plan](#schemaapi.core.dto.accounting.plan)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-retargeting">Retargeting</h1>

## List of all the retargeting scripts associated to the user

<a id="opIdRetargeting_Get"></a>

> Code samples

```bash
curl https://example.com/retargeting \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /retargeting`

<h3 id="list-of-all-the-retargeting-scripts-associated-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-retargeting-scripts-associated-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Creates a retargeting script

<a id="opIdRetargeting_Put"></a>

> Code samples

```bash
curl https://example.com/retargeting \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "script": "string"
  }'
```

`POST /retargeting`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "script": "string"
}
```

<h3 id="creates-a-retargeting-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Retargeting.RetargetingScript](#schemaapi.core.dto.retargeting.retargetingscript)|true|The body of the retargeting script|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» script|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="creates-a-retargeting-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve count of retargeting scripts

<a id="opIdRetargeting_Count"></a>

> Code samples

```bash
curl https://example.com/retargeting/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /retargeting/count`

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="retrieve-count-of-retargeting-scripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a retargeting script object

> Code samples

```bash
curl https://example.com/retargeting/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /retargeting/{id}`

<h3 id="get-a-retargeting-script-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the retargeting script|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "script": "string"
}
```

<h3 id="get-a-retargeting-script-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Retargeting.RetargetingScript](#schemaapi.core.dto.retargeting.retargetingscript)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Updates a retargeting script

<a id="opIdRetargeting_Post"></a>

> Code samples

```bash
curl https://example.com/retargeting/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "script": "string"
  }'
```

`POST /retargeting/{id}`

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "script": "string"
}
```

<h3 id="updates-a-retargeting-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the retargeting script|
|body|body|[Api.Core.Dto.Retargeting.RetargetingScript](#schemaapi.core.dto.retargeting.retargetingscript)|true|The body of the retargeting script|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» script|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="updates-a-retargeting-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Deletes a retargeting script (and remove associations)

<a id="opIdRetargeting_Delete"></a>

> Code samples

```bash
curl https://example.com/retargeting/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /retargeting/{id}`

<h3 id="deletes-a-retargeting-script-and-remove-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the retargeting script|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="deletes-a-retargeting-script-and-remove-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of all the datapoints associated to the retargeting script.

<a id="opIdRetargeting_GetDatapoints"></a>

> Code samples

```bash
curl https://example.com/retargeting/0/datapoints \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /retargeting/{id}/datapoints`

<h3 id="list-of-all-the-datapoints-associated-to-the-retargeting-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the retargeting script|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|sortBy|query|string|false|Field to sort by|
|sortDirection|query|string|false|Direction of sort "asc" or "desc"|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|
|status|paused|
|status|spam|
|sortDirection|asc|
|sortDirection|desc|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-datapoints-associated-to-the-retargeting-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the datapoints associated to the retargeting script.

<a id="opIdRetargeting_GetDatapointsCount"></a>

> Code samples

```bash
curl https://example.com/retargeting/0/datapoints/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /retargeting/{id}/datapoints/count`

<h3 id="count-the-datapoints-associated-to-the-retargeting-script-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of the group|
|status|query|string|false|Status of the datapoint|
|tags|query|string|false|A comma separated list of tags you want to filter with.|
|textSearch|query|string|false|Filter fields by this pattern|
|onlyFavorites|query|boolean|false|Filter fields by favourite status|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-datapoints-associated-to-the-retargeting-script-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="clickmeter-api-tags">Tags</h1>

## List of all the groups associated to the user filtered by this tag.

<a id="opIdTags_Get"></a>

> Code samples

```bash
curl https://example.com/tags \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags`

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|name|query|string|false|Name of the tag|
|datapoints|query|string|false|Comma separated list of datapoints id to filter by|
|groups|query|string|false|Comma separated list of groups id to filter by|
|type|query|string|false|Type of entity related to the tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|type|dp|
|type|gr|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a tag

<a id="opIdTags_Put"></a>

> Code samples

```bash
curl https://example.com/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "datapoints": [
      0
    ],
    "groups": [
      0
    ],
    "id": 0,
    "name": "string"
  }'
```

`POST /tags`

> Body parameter

```json
{
  "datapoints": [
    0
  ],
  "groups": [
    0
  ],
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)|true|The body of the tag|
|» datapoints|body|[integer(int64)]|false|none|
|» groups|body|[integer(int64)]|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="create-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of all the groups associated to the user filtered by this tag.

<a id="opIdTags_Count"></a>

> Code samples

```bash
curl https://example.com/tags/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/count`

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Name of the tag|
|datapoints|query|string|false|Comma separated list of datapoints id to filter by|
|groups|query|string|false|Comma separated list of groups id to filter by|
|type|query|string|false|Type of entity related to the tag|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|type|dp|
|type|gr|

> Example responses

> 200 Response

```json
{}
```

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[System.Object](#schemasystem.object)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a tag

> Code samples

```bash
curl https://example.com/tags/0 \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/{tagId}`

<h3 id="retrieve-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|

> Example responses

> 200 Response

```json
{
  "datapoints": [
    0
  ],
  "groups": [
    0
  ],
  "id": 0,
  "name": "string"
}
```

<h3 id="retrieve-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a tag

<a id="opIdTags_Delete"></a>

> Code samples

```bash
curl https://example.com/tags/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /tags/{tagId}`

<h3 id="delete-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|

> Example responses

> 200 Response

```json
{}
```

<h3 id="delete-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[System.Object](#schemasystem.object)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of all the datapoints associated to the user filtered by this tag

<a id="opIdTags_GetDatapoints"></a>

> Code samples

```bash
curl https://example.com/tags/0/datapoints \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/{tagId}/datapoints`

<h3 id="list-of-all-the-datapoints-associated-to-the-user-filtered-by-this-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag.|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-datapoints-associated-to-the-user-filtered-by-this-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete the association of this tag with all datapoints

<a id="opIdTags_DeleteRelatedDatapoints"></a>

> Code samples

```bash
curl https://example.com/tags/0/datapoints \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /tags/{tagId}/datapoints`

<h3 id="delete-the-association-of-this-tag-with-all-datapoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-the-association-of-this-tag-with-all-datapoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the datapoints associated to the user filtered by this tag

<a id="opIdTags_GetDatapointsCount"></a>

> Code samples

```bash
curl https://example.com/tags/0/datapoints/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/{tagId}/datapoints/count`

<h3 id="count-the-datapoints-associated-to-the-user-filtered-by-this-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag.|
|type|query|string|false|Type of the datapoint ("tp"/"tl")|
|status|query|string|false|Status of the datapoint|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude datapoints created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude datapoints created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tp|
|type|tl|
|status|deleted|
|status|active|
|status|paused|
|status|spam|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-datapoints-associated-to-the-user-filtered-by-this-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Associate/Deassociate a tag with a datapoint

<a id="opIdTags_PatchDataPoint"></a>

> Code samples

```bash
curl https://example.com/tags/0/datapoints/patch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Action": "string",
    "Id": 0
  }'
```

`PUT /tags/{tagId}/datapoints/patch`

> Body parameter

```json
{
  "Action": "string",
  "Id": 0
}
```

<h3 id="associatedeassociate-a-tag-with-a-datapoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|
|body|body|[Api.Core.Requests.PatchBody](#schemaapi.core.requests.patchbody)|true|The body patch|
|» Action|body|string|false|none|
|» Id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="associatedeassociate-a-tag-with-a-datapoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List of all the groups associated to the user filtered by this tag.

<a id="opIdTags_GetGroups"></a>

> Code samples

```bash
curl https://example.com/tags/0/groups \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/{tagId}/groups`

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag.|
|offset|query|integer(int32)|false|Where to start when retrieving elements. Default is 0 if not specified.|
|limit|query|integer(int32)|false|Maximum elements to retrieve. Default to 20 if not specified.|
|status|query|string|false|Status of the datapoint|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude groups created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude groups created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

<h3 id="list-of-all-the-groups-associated-to-the-user-filtered-by-this-tag-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete the association of this tag with all groups

<a id="opIdTags_DeleteRelatedGroups"></a>

> Code samples

```bash
curl https://example.com/tags/0/groups \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`DELETE /tags/{tagId}/groups`

<h3 id="delete-the-association-of-this-tag-with-all-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="delete-the-association-of-this-tag-with-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Count the groups associated to the user filtered by this tag

<a id="opIdTags_GetGroupsCount"></a>

> Code samples

```bash
curl https://example.com/tags/0/groups/count \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}"
```

`GET /tags/{tagId}/groups/count`

<h3 id="count-the-groups-associated-to-the-user-filtered-by-this-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag.|
|status|query|string|false|Status of the datapoint|
|textSearch|query|string|false|Filter fields by this pattern|
|createdAfter|query|string|false|Exclude groups created before this date (YYYYMMDD)|
|createdBefore|query|string|false|Exclude groups created after this date (YYYYMMDD)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|deleted|
|status|active|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="count-the-groups-associated-to-the-user-filtered-by-this-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.CountResponce](#schemaapi.core.responses.countresponce)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Associate/Deassociate a tag with a group

<a id="opIdTags_PatchGroup"></a>

> Code samples

```bash
curl https://example.com/tags/0/groups/patch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Action": "string",
    "Id": 0
  }'
```

`PUT /tags/{tagId}/groups/patch`

> Body parameter

```json
{
  "Action": "string",
  "Id": 0
}
```

<h3 id="associatedeassociate-a-tag-with-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|
|body|body|[Api.Core.Requests.PatchBody](#schemaapi.core.requests.patchbody)|true|The body patch|
|» Action|body|string|false|none|
|» Id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="associatedeassociate-a-tag-with-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Fast patch a tag name

<a id="opIdTags_PatchTagName"></a>

> Code samples

```bash
curl https://example.com/tags/0/name \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Clickmeter-AuthKey: ${API_KEY}" \
  -d '{
    "Text": "string"
  }'
```

`PUT /tags/{tagId}/name`

> Body parameter

```json
{
  "Text": "string"
}
```

<h3 id="fast-patch-a-tag-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|integer(int64)|true|Id of the tag|
|body|body|[Api.Core.Requests.GenericTextPatch](#schemaapi.core.requests.generictextpatch)|true|The body patch|
|» Text|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uri": "string"
}
```

<h3 id="fast-patch-a-tag-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Api.Core.Dto.Accounting.ConversionOptions">Api.Core.Dto.Accounting.ConversionOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.conversionoptions"></a>
<a id="schema_Api.Core.Dto.Accounting.ConversionOptions"></a>
<a id="tocSapi.core.dto.accounting.conversionoptions"></a>
<a id="tocsapi.core.dto.accounting.conversionoptions"></a>

```json
{
  "hideComCost": true,
  "hideCost": true,
  "hideCount": true,
  "hideParams": true,
  "hideValue": true,
  "percentCommission": 0,
  "percentValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hideComCost|boolean|false|none|none|
|hideCost|boolean|false|none|none|
|hideCount|boolean|false|none|none|
|hideParams|boolean|false|none|none|
|hideValue|boolean|false|none|none|
|percentCommission|integer(int32)|false|none|none|
|percentValue|integer(int32)|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.DomainWhitelistEntry">Api.Core.Dto.Accounting.DomainWhitelistEntry</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.domainwhitelistentry"></a>
<a id="schema_Api.Core.Dto.Accounting.DomainWhitelistEntry"></a>
<a id="tocSapi.core.dto.accounting.domainwhitelistentry"></a>
<a id="tocsapi.core.dto.accounting.domainwhitelistentry"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.ExtendedGrants">Api.Core.Dto.Accounting.ExtendedGrants</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.extendedgrants"></a>
<a id="schema_Api.Core.Dto.Accounting.ExtendedGrants"></a>
<a id="tocSapi.core.dto.accounting.extendedgrants"></a>
<a id="tocsapi.core.dto.accounting.extendedgrants"></a>

```json
{
  "allowAllGrants": true,
  "allowGroupCreation": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAllGrants|boolean|false|none|none|
|allowGroupCreation|boolean|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.Guest">Api.Core.Dto.Accounting.Guest</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.guest"></a>
<a id="schema_Api.Core.Dto.Accounting.Guest"></a>
<a id="tocSapi.core.dto.accounting.guest"></a>
<a id="tocsapi.core.dto.accounting.guest"></a>

```json
{
  "apiKey": "string",
  "conversionOptions": {
    "hideComCost": true,
    "hideCost": true,
    "hideCount": true,
    "hideParams": true,
    "hideValue": true,
    "percentCommission": 0,
    "percentValue": 0
  },
  "creationDate": "20120203120530",
  "currentGrant": {
    "DatapointType": "string",
    "Entity": {
      "id": 0,
      "uri": "string"
    },
    "EntityName": "string",
    "EntityType": "string",
    "Type": "string"
  },
  "dateFormat": "string",
  "decimalSeparator": "string",
  "email": "string",
  "extendedGrants": {
    "allowAllGrants": true,
    "allowGroupCreation": true
  },
  "groupGrants": 0,
  "hitOptions": {
    "hideReferrer": true
  },
  "id": 0,
  "key": "string",
  "language": "string",
  "loginCount": 0,
  "name": "string",
  "notes": "string",
  "numberGroupSeparator": "string",
  "password": "string",
  "timeFormat": "AmPm",
  "timeZone": 0,
  "timeframeMinDate": "20120203120530",
  "timezonename": "string",
  "tlGrants": 0,
  "tpGrants": 0,
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|conversionOptions|[Api.Core.Dto.Accounting.ConversionOptions](#schemaapi.core.dto.accounting.conversionoptions)|false|none|none|
|creationDate|string|false|none| (A date in "YmdHis" format)|
|currentGrant|[Api.Core.Dto.Grants.Grant](#schemaapi.core.dto.grants.grant)|false|none|none|
|dateFormat|string|false|none|none|
|decimalSeparator|string|false|none|none|
|email|string|false|none|none|
|extendedGrants|[Api.Core.Dto.Accounting.ExtendedGrants](#schemaapi.core.dto.accounting.extendedgrants)|false|none|none|
|groupGrants|integer(int64)|false|none|none|
|hitOptions|[Api.Core.Dto.Accounting.HitOptions](#schemaapi.core.dto.accounting.hitoptions)|false|none|none|
|id|integer(int64)|false|none|none|
|key|string|false|none|none|
|language|string|false|none|none|
|loginCount|integer(int32)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|numberGroupSeparator|string|false|none|none|
|password|string|false|none|none|
|timeFormat|string|false|none|none|
|timeZone|integer(int32)|false|none|none|
|timeframeMinDate|string|false|none| (A date in "YmdHis" format)|
|timezonename|string|false|none|none|
|tlGrants|integer(int64)|false|none|none|
|tpGrants|integer(int64)|false|none|none|
|userName|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|timeFormat|AmPm|
|timeFormat|H24|

<h2 id="tocS_Api.Core.Dto.Accounting.HitOptions">Api.Core.Dto.Accounting.HitOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.hitoptions"></a>
<a id="schema_Api.Core.Dto.Accounting.HitOptions"></a>
<a id="tocSapi.core.dto.accounting.hitoptions"></a>
<a id="tocsapi.core.dto.accounting.hitoptions"></a>

```json
{
  "hideReferrer": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hideReferrer|boolean|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.IpBlacklistEntry">Api.Core.Dto.Accounting.IpBlacklistEntry</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.ipblacklistentry"></a>
<a id="schema_Api.Core.Dto.Accounting.IpBlacklistEntry"></a>
<a id="tocSapi.core.dto.accounting.ipblacklistentry"></a>
<a id="tocsapi.core.dto.accounting.ipblacklistentry"></a>

```json
{
  "id": "string",
  "ip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|ip|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.Plan">Api.Core.Dto.Accounting.Plan</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.plan"></a>
<a id="schema_Api.Core.Dto.Accounting.Plan"></a>
<a id="tocSapi.core.dto.accounting.plan"></a>
<a id="tocsapi.core.dto.accounting.plan"></a>

```json
{
  "allowedPersonalDomains": 0,
  "allowedPersonalUrls": 0,
  "billingPeriodEnd": "20120203120530",
  "billingPeriodStart": "20120203120530",
  "bonusMonthlyEvents": 0,
  "maximumDatapoints": 0,
  "maximumGuests": 0,
  "monthlyEvents": 0,
  "name": "string",
  "price": 0,
  "profileId": 0,
  "recurring": true,
  "recurringPeriod": 0,
  "usedDatapoints": 0,
  "usedMonthlyEvents": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedPersonalDomains|integer(int32)|false|none|none|
|allowedPersonalUrls|integer(int32)|false|none|none|
|billingPeriodEnd|string|false|none| (A date in "YmdHis" format)|
|billingPeriodStart|string|false|none| (A date in "YmdHis" format)|
|bonusMonthlyEvents|integer(int64)|false|none|none|
|maximumDatapoints|integer(int64)|false|none|none|
|maximumGuests|integer(int64)|false|none|none|
|monthlyEvents|integer(int64)|false|none|none|
|name|string|false|none|none|
|price|number(double)|false|none|none|
|profileId|integer(int64)|false|none|none|
|recurring|boolean|false|none|none|
|recurringPeriod|integer(int32)|false|none|none|
|usedDatapoints|integer(int64)|false|none|none|
|usedMonthlyEvents|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Dto.Accounting.User">Api.Core.Dto.Accounting.User</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.accounting.user"></a>
<a id="schema_Api.Core.Dto.Accounting.User"></a>
<a id="tocSapi.core.dto.accounting.user"></a>
<a id="tocsapi.core.dto.accounting.user"></a>

```json
{
  "boGoVal": "string",
  "bonusClicks": 0,
  "companyName": "string",
  "companyRole": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "redirectOnly": true,
  "registrationDate": "20120203120530",
  "timeframeMinDate": "20120203120530",
  "timezone": 0,
  "timezonename": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boGoVal|string|false|none|none|
|bonusClicks|integer(int64)|false|none|none|
|companyName|string|false|none|none|
|companyRole|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|phone|string|false|none|none|
|redirectOnly|boolean|false|none|none|
|registrationDate|string|false|none| (A date in "YmdHis" format)|
|timeframeMinDate|string|false|none| (A date in "YmdHis" format)|
|timezone|integer(int32)|false|none|none|
|timezonename|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Aggregated.AggregatedResult">Api.Core.Dto.Aggregated.AggregatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.aggregated.aggregatedresult"></a>
<a id="schema_Api.Core.Dto.Aggregated.AggregatedResult"></a>
<a id="tocSapi.core.dto.aggregated.aggregatedresult"></a>
<a id="tocsapi.core.dto.aggregated.aggregatedresult"></a>

```json
{
  "activityDay": "20120203120530",
  "commissionsCost": 0,
  "conversionsCost": 0,
  "conversionsValue": 0,
  "convertedClicks": 0,
  "entityData": {},
  "entityId": "string",
  "fromDay": "20120203120530",
  "hourlyBreakDown": {
    "property1": {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    },
    "property2": {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  },
  "lastHitDate": "20120203120530",
  "spiderHitsCount": 0,
  "toDay": "20120203120530",
  "totalClicks": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueConversions": 0,
  "uniqueViews": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityDay|string|false|none| (A date in "YmdHis" format)|
|commissionsCost|number(double)|false|none|none|
|conversionsCost|number(double)|false|none|none|
|conversionsValue|number(double)|false|none|none|
|convertedClicks|integer(int64)|false|none|none|
|entityData|[System.Object](#schemasystem.object)|false|none|none|
|entityId|string|false|none|none|
|fromDay|string|false|none| (A date in "YmdHis" format)|
|hourlyBreakDown|object|false|none|none|
|lastHitDate|string|false|none| (A date in "YmdHis" format)|
|spiderHitsCount|integer(int64)|false|none|none|
|toDay|string|false|none| (A date in "YmdHis" format)|
|totalClicks|integer(int64)|false|none|none|
|totalViews|integer(int64)|false|none|none|
|uniqueClicks|integer(int64)|false|none|none|
|uniqueConversions|integer(int64)|false|none|none|
|uniqueViews|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Dto.Aggregated.AggregatedSummaryResult">Api.Core.Dto.Aggregated.AggregatedSummaryResult</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.aggregated.aggregatedsummaryresult"></a>
<a id="schema_Api.Core.Dto.Aggregated.AggregatedSummaryResult"></a>
<a id="tocSapi.core.dto.aggregated.aggregatedsummaryresult"></a>
<a id="tocsapi.core.dto.aggregated.aggregatedsummaryresult"></a>

```json
{
  "count": 0,
  "limit": 0,
  "offset": 0,
  "result": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|limit|integer(int32)|false|none|none|
|offset|integer(int64)|false|none|none|
|result|[[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)]|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.Hit">Api.Core.Dto.ClickStream.Hit</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hit"></a>
<a id="schema_Api.Core.Dto.ClickStream.Hit"></a>
<a id="tocSapi.core.dto.clickstream.hit"></a>
<a id="tocsapi.core.dto.clickstream.hit"></a>

```json
{
  "accessTime": "20120203120530",
  "browser": {
    "browserType": "string",
    "familyId": 0,
    "familyName": "string",
    "id": 0,
    "name": "string"
  },
  "clientLanguage": "string",
  "conversion1": {
    "accessTime": "20120203120530",
    "comcost": 0,
    "cost": 0,
    "date": "20120203120530",
    "deleted": true,
    "id": 0,
    "name": "string",
    "parameter": "string",
    "value": 0
  },
  "conversion2": {
    "accessTime": "20120203120530",
    "comcost": 0,
    "cost": 0,
    "date": "20120203120530",
    "deleted": true,
    "id": 0,
    "name": "string",
    "parameter": "string",
    "value": 0
  },
  "conversion3": {
    "accessTime": "20120203120530",
    "comcost": 0,
    "cost": 0,
    "date": "20120203120530",
    "deleted": true,
    "id": 0,
    "name": "string",
    "parameter": "string",
    "value": 0
  },
  "conversion4": {
    "accessTime": "20120203120530",
    "comcost": 0,
    "cost": 0,
    "date": "20120203120530",
    "deleted": true,
    "id": 0,
    "name": "string",
    "parameter": "string",
    "value": 0
  },
  "conversion5": {
    "accessTime": "20120203120530",
    "comcost": 0,
    "cost": 0,
    "date": "20120203120530",
    "deleted": true,
    "id": 0,
    "name": "string",
    "parameter": "string",
    "value": 0
  },
  "conversions": [
    {
      "accessTime": "20120203120530",
      "comcost": 0,
      "cost": 0,
      "date": "20120203120530",
      "deleted": true,
      "id": 0,
      "name": "string",
      "parameter": "string",
      "value": 0
    }
  ],
  "entity": {
    "creationDate": "20120203120530",
    "datapointFavourite": true,
    "datapointId": 0,
    "datapointName": "string",
    "datapointTitle": "string",
    "datapointType": "string",
    "destinationUrl": "string",
    "groupId": 0,
    "groupName": "string",
    "isABTest": true,
    "isPrivateShared": true,
    "isPublic": true,
    "notes": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "trackingCode": "string"
  },
  "ip": "string",
  "isProxy": "string",
  "isSpider": "string",
  "isUnique": "string",
  "location": {
    "areacode": "string",
    "city": "string",
    "country": "string",
    "latitude": 0,
    "longitude": 0,
    "metrocode": "string",
    "organization": "string",
    "postalcode": "string",
    "region": "string",
    "regionName": "string"
  },
  "org": "string",
  "os": {
    "familyId": 0,
    "familyName": "string",
    "id": 0,
    "name": "string"
  },
  "queryParams": "string",
  "realDestinationUrl": "string",
  "referer": "string",
  "source": {
    "id": 0,
    "name": "string",
    "param": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTime|string|false|none| (A date in "YmdHis" format)|
|browser|[Api.Core.Dto.ClickStream.HitBrowserInfo](#schemaapi.core.dto.clickstream.hitbrowserinfo)|false|none|none|
|clientLanguage|string|false|none|none|
|conversion1|[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)|false|none|none|
|conversion2|[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)|false|none|none|
|conversion3|[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)|false|none|none|
|conversion4|[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)|false|none|none|
|conversion5|[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)|false|none|none|
|conversions|[[Api.Core.Dto.ClickStream.HitConversionInfo](#schemaapi.core.dto.clickstream.hitconversioninfo)]|false|none|none|
|entity|[Api.Core.Dto.ClickStream.HitDatapointInfo](#schemaapi.core.dto.clickstream.hitdatapointinfo)|false|none|none|
|ip|string|false|none|none|
|isProxy|string|false|none|none|
|isSpider|string|false|none|none|
|isUnique|string|false|none|none|
|location|[Api.Core.Dto.ClickStream.HitLocationInfo](#schemaapi.core.dto.clickstream.hitlocationinfo)|false|none|none|
|org|string|false|none|none|
|os|[Api.Core.Dto.ClickStream.HitOsInfo](#schemaapi.core.dto.clickstream.hitosinfo)|false|none|none|
|queryParams|string|false|none|none|
|realDestinationUrl|string|false|none|none|
|referer|string|false|none|none|
|source|[Api.Core.Dto.ClickStream.HitSource](#schemaapi.core.dto.clickstream.hitsource)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitBrowserInfo">Api.Core.Dto.ClickStream.HitBrowserInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitbrowserinfo"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitBrowserInfo"></a>
<a id="tocSapi.core.dto.clickstream.hitbrowserinfo"></a>
<a id="tocsapi.core.dto.clickstream.hitbrowserinfo"></a>

```json
{
  "browserType": "string",
  "familyId": 0,
  "familyName": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|browserType|string|false|none|none|
|familyId|integer(int64)|false|none|none|
|familyName|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitConversionInfo">Api.Core.Dto.ClickStream.HitConversionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitconversioninfo"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitConversionInfo"></a>
<a id="tocSapi.core.dto.clickstream.hitconversioninfo"></a>
<a id="tocsapi.core.dto.clickstream.hitconversioninfo"></a>

```json
{
  "accessTime": "20120203120530",
  "comcost": 0,
  "cost": 0,
  "date": "20120203120530",
  "deleted": true,
  "id": 0,
  "name": "string",
  "parameter": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTime|string|false|none| (A date in "YmdHis" format)|
|comcost|number(double)|false|none|none|
|cost|number(double)|false|none|none|
|date|string|false|none| (A date in "YmdHis" format)|
|deleted|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|parameter|string|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitDatapointInfo">Api.Core.Dto.ClickStream.HitDatapointInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitdatapointinfo"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitDatapointInfo"></a>
<a id="tocSapi.core.dto.clickstream.hitdatapointinfo"></a>
<a id="tocsapi.core.dto.clickstream.hitdatapointinfo"></a>

```json
{
  "creationDate": "20120203120530",
  "datapointFavourite": true,
  "datapointId": 0,
  "datapointName": "string",
  "datapointTitle": "string",
  "datapointType": "string",
  "destinationUrl": "string",
  "groupId": 0,
  "groupName": "string",
  "isABTest": true,
  "isPrivateShared": true,
  "isPublic": true,
  "notes": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "trackingCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string|false|none| (A date in "YmdHis" format)|
|datapointFavourite|boolean|false|none|none|
|datapointId|integer(int64)|false|none|none|
|datapointName|string|false|none|none|
|datapointTitle|string|false|none|none|
|datapointType|string|false|none|none|
|destinationUrl|string|false|none|none|
|groupId|integer(int64)|false|none|none|
|groupName|string|false|none|none|
|isABTest|boolean|false|none|none|
|isPrivateShared|boolean|false|none|none|
|isPublic|boolean|false|none|none|
|notes|string|false|none|none|
|status|string|false|none|none|
|tags|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|none|
|trackingCode|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Paused|
|status|Abuse|
|status|Deleted|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitListPage">Api.Core.Dto.ClickStream.HitListPage</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitlistpage"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitListPage"></a>
<a id="tocSapi.core.dto.clickstream.hitlistpage"></a>
<a id="tocsapi.core.dto.clickstream.hitlistpage"></a>

```json
{
  "hits": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ],
  "lastKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[Api.Core.Dto.ClickStream.Hit](#schemaapi.core.dto.clickstream.hit)]|false|none|none|
|lastKey|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitLocationInfo">Api.Core.Dto.ClickStream.HitLocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitlocationinfo"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitLocationInfo"></a>
<a id="tocSapi.core.dto.clickstream.hitlocationinfo"></a>
<a id="tocsapi.core.dto.clickstream.hitlocationinfo"></a>

```json
{
  "areacode": "string",
  "city": "string",
  "country": "string",
  "latitude": 0,
  "longitude": 0,
  "metrocode": "string",
  "organization": "string",
  "postalcode": "string",
  "region": "string",
  "regionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areacode|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|latitude|number(double)|false|none|none|
|longitude|number(double)|false|none|none|
|metrocode|string|false|none|none|
|organization|string|false|none|none|
|postalcode|string|false|none|none|
|region|string|false|none|none|
|regionName|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitOsInfo">Api.Core.Dto.ClickStream.HitOsInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitosinfo"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitOsInfo"></a>
<a id="tocSapi.core.dto.clickstream.hitosinfo"></a>
<a id="tocsapi.core.dto.clickstream.hitosinfo"></a>

```json
{
  "familyId": 0,
  "familyName": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyId|integer(int64)|false|none|none|
|familyName|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.ClickStream.HitSource">Api.Core.Dto.ClickStream.HitSource</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.clickstream.hitsource"></a>
<a id="schema_Api.Core.Dto.ClickStream.HitSource"></a>
<a id="tocSapi.core.dto.clickstream.hitsource"></a>
<a id="tocsapi.core.dto.clickstream.hitsource"></a>

```json
{
  "id": 0,
  "name": "string",
  "param": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|param|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Conversions.Conversion">Api.Core.Dto.Conversions.Conversion</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.conversions.conversion"></a>
<a id="schema_Api.Core.Dto.Conversions.Conversion"></a>
<a id="tocSapi.core.dto.conversions.conversion"></a>
<a id="tocsapi.core.dto.conversions.conversion"></a>

```json
{
  "code": "string",
  "creationDate": "20120203120530",
  "deleted": true,
  "description": "string",
  "id": 0,
  "name": "string",
  "protocol": "Http",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|creationDate|string|false|none| (A date in "YmdHis" format)|
|deleted|boolean|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|protocol|string|false|none|none|
|value|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|Http|
|protocol|Https|

<h2 id="tocS_Api.Core.Dto.Datapoints.BrowserBaseDestinationItem">Api.Core.Dto.Datapoints.BrowserBaseDestinationItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.browserbasedestinationitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.BrowserBaseDestinationItem"></a>
<a id="tocSapi.core.dto.datapoints.browserbasedestinationitem"></a>
<a id="tocsapi.core.dto.datapoints.browserbasedestinationitem"></a>

```json
{
  "emailDestinationUrl": "string",
  "mobileDestinationUrl": "string",
  "spidersDestinationUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailDestinationUrl|string|false|none|none|
|mobileDestinationUrl|string|false|none|none|
|spidersDestinationUrl|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.Datapoint">Api.Core.Dto.Datapoints.Datapoint</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.datapoint"></a>
<a id="schema_Api.Core.Dto.Datapoints.Datapoint"></a>
<a id="tocSapi.core.dto.datapoints.datapoint"></a>
<a id="tocsapi.core.dto.datapoints.datapoint"></a>

```json
{
  "creationDate": "20120203120530",
  "encodeIp": true,
  "fifthConversionId": 0,
  "fifthConversionName": "string",
  "firstConversionId": 0,
  "firstConversionName": "string",
  "fourthConversionId": 0,
  "fourthConversionName": "string",
  "groupId": 0,
  "groupName": "string",
  "id": 0,
  "isPublic": true,
  "isSecured": true,
  "lightTracking": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "secondConversionId": 0,
  "secondConversionName": "string",
  "status": "Active",
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "thirdConversionId": 0,
  "thirdConversionName": "string",
  "title": "string",
  "trackingCode": "string",
  "type": "TrackingLink",
  "typeTL": {
    "appendQuery": true,
    "browserDestinationItem": {
      "emailDestinationUrl": "string",
      "mobileDestinationUrl": "string",
      "spidersDestinationUrl": "string"
    },
    "destinationMode": "Simple",
    "domainId": 0,
    "encodeUrl": true,
    "expirationClicks": 0,
    "expirationDate": "20120203120530",
    "firstUrl": "string",
    "goDomainId": 0,
    "hideUrl": true,
    "hideUrlTitle": "string",
    "isABTest": true,
    "password": "string",
    "pauseAfterClicksExpiration": true,
    "pauseAfterDateExpiration": true,
    "randomDestinationItems": [
      {
        "url": "string"
      }
    ],
    "redirectType": "PermanentRedirect",
    "referrerClean": "None",
    "scripts": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "sequentialDestinationItems": [
      {
        "url": "string"
      }
    ],
    "spilloverDestinationItems": [
      {
        "url": "string"
      }
    ],
    "uniqueDestinationItem": {
      "firstDestinationUrl": "string"
    },
    "url": "string",
    "urlAfterClicksExpiration": "string",
    "urlAfterDateExpiration": "string",
    "urlsByLanguage": [
      {
        "languageCode": "string",
        "url": "string"
      }
    ],
    "urlsByNation": [
      {
        "nation": "string",
        "url": "string"
      }
    ],
    "weightedDestinationItems": [
      {
        "url": "string",
        "weight": 0
      }
    ]
  },
  "typeTP": {
    "parameterNote": "string"
  },
  "writePermited": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string|false|none| (A date in "YmdHis" format)|
|encodeIp|boolean|false|none|none|
|fifthConversionId|integer(int64)|false|none|none|
|fifthConversionName|string|false|none|none|
|firstConversionId|integer(int64)|false|none|none|
|firstConversionName|string|false|none|none|
|fourthConversionId|integer(int64)|false|none|none|
|fourthConversionName|string|false|none|none|
|groupId|integer(int64)|false|none|none|
|groupName|string|false|none|none|
|id|integer(int64)|false|none|none|
|isPublic|boolean|false|none|none|
|isSecured|boolean|false|none|none|
|lightTracking|boolean|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|preferred|boolean|false|none|none|
|redirectOnly|boolean|false|none|none|
|secondConversionId|integer(int64)|false|none|none|
|secondConversionName|string|false|none|none|
|status|string|false|none|none|
|tags|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|none|
|thirdConversionId|integer(int64)|false|none|none|
|thirdConversionName|string|false|none|none|
|title|string|false|none|none|
|trackingCode|string|false|none|none|
|type|string|false|none|none|
|typeTL|[Api.Core.Dto.Datapoints.TrackingLinkSpecifics](#schemaapi.core.dto.datapoints.trackinglinkspecifics)|false|none|none|
|typeTP|[Api.Core.Dto.Datapoints.TrackingPixelSpecifics](#schemaapi.core.dto.datapoints.trackingpixelspecifics)|false|none|none|
|writePermited|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Paused|
|status|Abuse|
|status|Deleted|
|type|TrackingLink|
|type|TrackingPixel|

<h2 id="tocS_Api.Core.Dto.Datapoints.DatapointRetargetingInfo">Api.Core.Dto.Datapoints.DatapointRetargetingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.datapointretargetinginfo"></a>
<a id="schema_Api.Core.Dto.Datapoints.DatapointRetargetingInfo"></a>
<a id="tocSapi.core.dto.datapoints.datapointretargetinginfo"></a>
<a id="tocsapi.core.dto.datapoints.datapointretargetinginfo"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.MultipleDestinationItem">Api.Core.Dto.Datapoints.MultipleDestinationItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.multipledestinationitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.MultipleDestinationItem"></a>
<a id="tocSapi.core.dto.datapoints.multipledestinationitem"></a>
<a id="tocsapi.core.dto.datapoints.multipledestinationitem"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.TrackingLinkSpecifics">Api.Core.Dto.Datapoints.TrackingLinkSpecifics</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.trackinglinkspecifics"></a>
<a id="schema_Api.Core.Dto.Datapoints.TrackingLinkSpecifics"></a>
<a id="tocSapi.core.dto.datapoints.trackinglinkspecifics"></a>
<a id="tocsapi.core.dto.datapoints.trackinglinkspecifics"></a>

```json
{
  "appendQuery": true,
  "browserDestinationItem": {
    "emailDestinationUrl": "string",
    "mobileDestinationUrl": "string",
    "spidersDestinationUrl": "string"
  },
  "destinationMode": "Simple",
  "domainId": 0,
  "encodeUrl": true,
  "expirationClicks": 0,
  "expirationDate": "20120203120530",
  "firstUrl": "string",
  "goDomainId": 0,
  "hideUrl": true,
  "hideUrlTitle": "string",
  "isABTest": true,
  "password": "string",
  "pauseAfterClicksExpiration": true,
  "pauseAfterDateExpiration": true,
  "randomDestinationItems": [
    {
      "url": "string"
    }
  ],
  "redirectType": "PermanentRedirect",
  "referrerClean": "None",
  "scripts": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "sequentialDestinationItems": [
    {
      "url": "string"
    }
  ],
  "spilloverDestinationItems": [
    {
      "url": "string"
    }
  ],
  "uniqueDestinationItem": {
    "firstDestinationUrl": "string"
  },
  "url": "string",
  "urlAfterClicksExpiration": "string",
  "urlAfterDateExpiration": "string",
  "urlsByLanguage": [
    {
      "languageCode": "string",
      "url": "string"
    }
  ],
  "urlsByNation": [
    {
      "nation": "string",
      "url": "string"
    }
  ],
  "weightedDestinationItems": [
    {
      "url": "string",
      "weight": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appendQuery|boolean|false|none|none|
|browserDestinationItem|[Api.Core.Dto.Datapoints.BrowserBaseDestinationItem](#schemaapi.core.dto.datapoints.browserbasedestinationitem)|false|none|none|
|destinationMode|string|false|none|none|
|domainId|integer(int32)|false|none|none|
|encodeUrl|boolean|false|none|none|
|expirationClicks|integer(int64)|false|none|none|
|expirationDate|string|false|none| (A date in "YmdHis" format)|
|firstUrl|string|false|none|none|
|goDomainId|integer(int32)|false|none|none|
|hideUrl|boolean|false|none|none|
|hideUrlTitle|string|false|none|none|
|isABTest|boolean|false|none|none|
|password|string|false|none|none|
|pauseAfterClicksExpiration|boolean|false|none|none|
|pauseAfterDateExpiration|boolean|false|none|none|
|randomDestinationItems|[[Api.Core.Dto.Datapoints.MultipleDestinationItem](#schemaapi.core.dto.datapoints.multipledestinationitem)]|false|none|none|
|redirectType|string|false|none|none|
|referrerClean|string|false|none|none|
|scripts|[[Api.Core.Dto.Datapoints.DatapointRetargetingInfo](#schemaapi.core.dto.datapoints.datapointretargetinginfo)]|false|none|none|
|sequentialDestinationItems|[[Api.Core.Dto.Datapoints.MultipleDestinationItem](#schemaapi.core.dto.datapoints.multipledestinationitem)]|false|none|none|
|spilloverDestinationItems|[[Api.Core.Dto.Datapoints.MultipleDestinationItem](#schemaapi.core.dto.datapoints.multipledestinationitem)]|false|none|none|
|uniqueDestinationItem|[Api.Core.Dto.Datapoints.UniqueDestinationItem](#schemaapi.core.dto.datapoints.uniquedestinationitem)|false|none|none|
|url|string|false|none|none|
|urlAfterClicksExpiration|string|false|none|none|
|urlAfterDateExpiration|string|false|none|none|
|urlsByLanguage|[[Api.Core.Dto.Datapoints.UrlByLanguageItem](#schemaapi.core.dto.datapoints.urlbylanguageitem)]|false|none|none|
|urlsByNation|[[Api.Core.Dto.Datapoints.UrlByNationItem](#schemaapi.core.dto.datapoints.urlbynationitem)]|false|none|none|
|weightedDestinationItems|[[Api.Core.Dto.Datapoints.WeightedDestinationItem](#schemaapi.core.dto.datapoints.weighteddestinationitem)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destinationMode|Simple|
|destinationMode|RandomDestination|
|destinationMode|DestinationByLanguage|
|destinationMode|SpilloverDestination|
|destinationMode|DynamicUrl|
|destinationMode|BrowserDestination|
|destinationMode|DestinationByNation|
|destinationMode|UniqueDestination|
|destinationMode|SequentialDestination|
|destinationMode|WeightedDestination|
|redirectType|PermanentRedirect|
|redirectType|TemporaryRedirect|
|referrerClean|None|
|referrerClean|Clean|
|referrerClean|Myself|

<h2 id="tocS_Api.Core.Dto.Datapoints.TrackingPixelSpecifics">Api.Core.Dto.Datapoints.TrackingPixelSpecifics</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.trackingpixelspecifics"></a>
<a id="schema_Api.Core.Dto.Datapoints.TrackingPixelSpecifics"></a>
<a id="tocSapi.core.dto.datapoints.trackingpixelspecifics"></a>
<a id="tocsapi.core.dto.datapoints.trackingpixelspecifics"></a>

```json
{
  "parameterNote": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameterNote|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.UniqueDestinationItem">Api.Core.Dto.Datapoints.UniqueDestinationItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.uniquedestinationitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.UniqueDestinationItem"></a>
<a id="tocSapi.core.dto.datapoints.uniquedestinationitem"></a>
<a id="tocsapi.core.dto.datapoints.uniquedestinationitem"></a>

```json
{
  "firstDestinationUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstDestinationUrl|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.UrlByLanguageItem">Api.Core.Dto.Datapoints.UrlByLanguageItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.urlbylanguageitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.UrlByLanguageItem"></a>
<a id="tocSapi.core.dto.datapoints.urlbylanguageitem"></a>
<a id="tocsapi.core.dto.datapoints.urlbylanguageitem"></a>

```json
{
  "languageCode": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.UrlByNationItem">Api.Core.Dto.Datapoints.UrlByNationItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.urlbynationitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.UrlByNationItem"></a>
<a id="tocSapi.core.dto.datapoints.urlbynationitem"></a>
<a id="tocsapi.core.dto.datapoints.urlbynationitem"></a>

```json
{
  "nation": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nation|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Datapoints.WeightedDestinationItem">Api.Core.Dto.Datapoints.WeightedDestinationItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.datapoints.weighteddestinationitem"></a>
<a id="schema_Api.Core.Dto.Datapoints.WeightedDestinationItem"></a>
<a id="tocSapi.core.dto.datapoints.weighteddestinationitem"></a>
<a id="tocsapi.core.dto.datapoints.weighteddestinationitem"></a>

```json
{
  "url": "string",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|
|weight|integer(int32)|false|none|none|

<h2 id="tocS_Api.Core.Dto.Domains.Domain">Api.Core.Dto.Domains.Domain</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.domains.domain"></a>
<a id="schema_Api.Core.Dto.Domains.Domain"></a>
<a id="tocSapi.core.dto.domains.domain"></a>
<a id="tocsapi.core.dto.domains.domain"></a>

```json
{
  "custom404": "string",
  "customHomepage": "string",
  "id": 0,
  "name": "string",
  "type": "System"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom404|string|false|none|none|
|customHomepage|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|System|
|type|Go|
|type|Dedicated|
|type|Personal|

<h2 id="tocS_Api.Core.Dto.EntityUriLong">Api.Core.Dto.EntityUriLong</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.entityurilong"></a>
<a id="schema_Api.Core.Dto.EntityUriLong"></a>
<a id="tocSapi.core.dto.entityurilong"></a>
<a id="tocsapi.core.dto.entityurilong"></a>

```json
{
  "id": 0,
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Grants.Grant">Api.Core.Dto.Grants.Grant</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.grants.grant"></a>
<a id="schema_Api.Core.Dto.Grants.Grant"></a>
<a id="tocSapi.core.dto.grants.grant"></a>
<a id="tocsapi.core.dto.grants.grant"></a>

```json
{
  "DatapointType": "string",
  "Entity": {
    "id": 0,
    "uri": "string"
  },
  "EntityName": "string",
  "EntityType": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DatapointType|string|false|none|none|
|Entity|[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|false|none|none|
|EntityName|string|false|none|none|
|EntityType|string|false|none|none|
|Type|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Groups.Group">Api.Core.Dto.Groups.Group</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.groups.group"></a>
<a id="schema_Api.Core.Dto.Groups.Group"></a>
<a id="tocSapi.core.dto.groups.group"></a>
<a id="tocsapi.core.dto.groups.group"></a>

```json
{
  "creationDate": "20120203120530",
  "deleted": true,
  "id": 0,
  "isPublic": true,
  "name": "string",
  "notes": "string",
  "preferred": true,
  "redirectOnly": true,
  "tags": [
    {
      "datapoints": [
        0
      ],
      "groups": [
        0
      ],
      "id": 0,
      "name": "string"
    }
  ],
  "writePermited": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string|false|none| (A date in "YmdHis" format)|
|deleted|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|isPublic|boolean|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|preferred|boolean|false|none|none|
|redirectOnly|boolean|false|none|none|
|tags|[[Api.Core.Dto.Tags.Tag](#schemaapi.core.dto.tags.tag)]|false|none|none|
|writePermited|boolean|false|none|none|

<h2 id="tocS_Api.Core.Dto.Retargeting.RetargetingScript">Api.Core.Dto.Retargeting.RetargetingScript</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.retargeting.retargetingscript"></a>
<a id="schema_Api.Core.Dto.Retargeting.RetargetingScript"></a>
<a id="tocSapi.core.dto.retargeting.retargetingscript"></a>
<a id="tocsapi.core.dto.retargeting.retargetingscript"></a>

```json
{
  "id": 0,
  "name": "string",
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Tags.Tag">Api.Core.Dto.Tags.Tag</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.tags.tag"></a>
<a id="schema_Api.Core.Dto.Tags.Tag"></a>
<a id="tocSapi.core.dto.tags.tag"></a>
<a id="tocsapi.core.dto.tags.tag"></a>

```json
{
  "datapoints": [
    0
  ],
  "groups": [
    0
  ],
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datapoints|[integer(int64)]|false|none|none|
|groups|[integer(int64)]|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Tops.Top">Api.Core.Dto.Tops.Top</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.tops.top"></a>
<a id="schema_Api.Core.Dto.Tops.Top"></a>
<a id="tocSapi.core.dto.tops.top"></a>
<a id="tocsapi.core.dto.tops.top"></a>

```json
{
  "createdAt": "20120203120530",
  "data": [
    {
      "entityData": {},
      "id": "string",
      "lastHitDate": "20120203120530",
      "spiderClicks": 0,
      "spiderHits": 0,
      "spiderViews": 0,
      "totalClicks": 0,
      "totalCommissionsCost": 0,
      "totalConversions": 0,
      "totalConversionsCost": 0,
      "totalConversionsValue": 0,
      "totalHits": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueHits": 0,
      "uniqueViews": 0
    }
  ],
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string|false|none| (A date in "YmdHis" format)|
|data|[[Api.Core.Dto.Tops.TopItem](#schemaapi.core.dto.tops.topitem)]|false|none|none|
|key|string|false|none|none|

<h2 id="tocS_Api.Core.Dto.Tops.TopItem">Api.Core.Dto.Tops.TopItem</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.dto.tops.topitem"></a>
<a id="schema_Api.Core.Dto.Tops.TopItem"></a>
<a id="tocSapi.core.dto.tops.topitem"></a>
<a id="tocsapi.core.dto.tops.topitem"></a>

```json
{
  "entityData": {},
  "id": "string",
  "lastHitDate": "20120203120530",
  "spiderClicks": 0,
  "spiderHits": 0,
  "spiderViews": 0,
  "totalClicks": 0,
  "totalCommissionsCost": 0,
  "totalConversions": 0,
  "totalConversionsCost": 0,
  "totalConversionsValue": 0,
  "totalHits": 0,
  "totalViews": 0,
  "uniqueClicks": 0,
  "uniqueHits": 0,
  "uniqueViews": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityData|[System.Object](#schemasystem.object)|false|none|none|
|id|string|false|none|none|
|lastHitDate|string|false|none| (A date in "YmdHis" format)|
|spiderClicks|integer(int64)|false|none|none|
|spiderHits|integer(int64)|false|none|none|
|spiderViews|integer(int64)|false|none|none|
|totalClicks|integer(int64)|false|none|none|
|totalCommissionsCost|number(double)|false|none|none|
|totalConversions|integer(int64)|false|none|none|
|totalConversionsCost|number(double)|false|none|none|
|totalConversionsValue|number(double)|false|none|none|
|totalHits|integer(int64)|false|none|none|
|totalViews|integer(int64)|false|none|none|
|uniqueClicks|integer(int64)|false|none|none|
|uniqueHits|integer(int64)|false|none|none|
|uniqueViews|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Requests.ConversionPatchBody">Api.Core.Requests.ConversionPatchBody</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.conversionpatchbody"></a>
<a id="schema_Api.Core.Requests.ConversionPatchBody"></a>
<a id="tocSapi.core.requests.conversionpatchbody"></a>
<a id="tocsapi.core.requests.conversionpatchbody"></a>

```json
{
  "Action": "string",
  "Id": 0,
  "ReplaceId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|false|none|none|
|Id|integer(int64)|false|none|none|
|ReplaceId|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Requests.DatapointsBatch">Api.Core.Requests.DatapointsBatch</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.datapointsbatch"></a>
<a id="schema_Api.Core.Requests.DatapointsBatch"></a>
<a id="tocSapi.core.requests.datapointsbatch"></a>
<a id="tocsapi.core.requests.datapointsbatch"></a>

```json
{
  "List": [
    {
      "creationDate": "20120203120530",
      "encodeIp": true,
      "fifthConversionId": 0,
      "fifthConversionName": "string",
      "firstConversionId": 0,
      "firstConversionName": "string",
      "fourthConversionId": 0,
      "fourthConversionName": "string",
      "groupId": 0,
      "groupName": "string",
      "id": 0,
      "isPublic": true,
      "isSecured": true,
      "lightTracking": true,
      "name": "string",
      "notes": "string",
      "preferred": true,
      "redirectOnly": true,
      "secondConversionId": 0,
      "secondConversionName": "string",
      "status": "Active",
      "tags": [
        {
          "datapoints": [
            0
          ],
          "groups": [
            0
          ],
          "id": 0,
          "name": "string"
        }
      ],
      "thirdConversionId": 0,
      "thirdConversionName": "string",
      "title": "string",
      "trackingCode": "string",
      "type": "TrackingLink",
      "typeTL": {
        "appendQuery": true,
        "browserDestinationItem": {
          "emailDestinationUrl": "string",
          "mobileDestinationUrl": "string",
          "spidersDestinationUrl": "string"
        },
        "destinationMode": "Simple",
        "domainId": 0,
        "encodeUrl": true,
        "expirationClicks": 0,
        "expirationDate": "20120203120530",
        "firstUrl": "string",
        "goDomainId": 0,
        "hideUrl": true,
        "hideUrlTitle": "string",
        "isABTest": true,
        "password": "string",
        "pauseAfterClicksExpiration": true,
        "pauseAfterDateExpiration": true,
        "randomDestinationItems": [
          {
            "url": "string"
          }
        ],
        "redirectType": "PermanentRedirect",
        "referrerClean": "None",
        "scripts": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "sequentialDestinationItems": [
          {
            "url": "string"
          }
        ],
        "spilloverDestinationItems": [
          {
            "url": "string"
          }
        ],
        "uniqueDestinationItem": {
          "firstDestinationUrl": "string"
        },
        "url": "string",
        "urlAfterClicksExpiration": "string",
        "urlAfterDateExpiration": "string",
        "urlsByLanguage": [
          {
            "languageCode": "string",
            "url": "string"
          }
        ],
        "urlsByNation": [
          {
            "nation": "string",
            "url": "string"
          }
        ],
        "weightedDestinationItems": [
          {
            "url": "string",
            "weight": 0
          }
        ]
      },
      "typeTP": {
        "parameterNote": "string"
      },
      "writePermited": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|List|[[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)]|false|none|none|

<h2 id="tocS_Api.Core.Requests.DeleteBatch">Api.Core.Requests.DeleteBatch</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.deletebatch"></a>
<a id="schema_Api.Core.Requests.DeleteBatch"></a>
<a id="tocSapi.core.requests.deletebatch"></a>
<a id="tocsapi.core.requests.deletebatch"></a>

```json
{
  "Entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entities|[[Api.Core.Dto.EntityUriLong](#schemaapi.core.dto.entityurilong)]|false|none|none|

<h2 id="tocS_Api.Core.Requests.GenericTextPatch">Api.Core.Requests.GenericTextPatch</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.generictextpatch"></a>
<a id="schema_Api.Core.Requests.GenericTextPatch"></a>
<a id="tocSapi.core.requests.generictextpatch"></a>
<a id="tocsapi.core.requests.generictextpatch"></a>

```json
{
  "Text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|string|false|none|none|

<h2 id="tocS_Api.Core.Requests.PatchBody">Api.Core.Requests.PatchBody</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.patchbody"></a>
<a id="schema_Api.Core.Requests.PatchBody"></a>
<a id="tocSapi.core.requests.patchbody"></a>
<a id="tocsapi.core.requests.patchbody"></a>

```json
{
  "Action": "string",
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|false|none|none|
|Id|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Requests.PatchBodyBatch">Api.Core.Requests.PatchBodyBatch</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.patchbodybatch"></a>
<a id="schema_Api.Core.Requests.PatchBodyBatch"></a>
<a id="tocSapi.core.requests.patchbodybatch"></a>
<a id="tocsapi.core.requests.patchbodybatch"></a>

```json
{
  "PatchRequests": [
    {
      "Action": "string",
      "Id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatchRequests|[[Api.Core.Requests.PatchBody](#schemaapi.core.requests.patchbody)]|false|none|none|

<h2 id="tocS_Api.Core.Requests.PermissionPatchRequest">Api.Core.Requests.PermissionPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.requests.permissionpatchrequest"></a>
<a id="schema_Api.Core.Requests.PermissionPatchRequest"></a>
<a id="tocSapi.core.requests.permissionpatchrequest"></a>
<a id="tocsapi.core.requests.permissionpatchrequest"></a>

```json
{
  "Action": "string",
  "Id": 0,
  "Verb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|string|false|none|none|
|Id|integer(int64)|false|none|none|
|Verb|string|false|none|none|

<h2 id="tocS_Api.Core.Responses.CountResponce">Api.Core.Responses.CountResponce</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.countresponce"></a>
<a id="schema_Api.Core.Responses.CountResponce"></a>
<a id="tocSapi.core.responses.countresponce"></a>
<a id="tocsapi.core.responses.countresponce"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.DomainWhitelistEntry_">Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.DomainWhitelistEntry_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.dto.accounting.domainwhitelistentry_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.DomainWhitelistEntry_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.dto.accounting.domainwhitelistentry_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.dto.accounting.domainwhitelistentry_"></a>

```json
{
  "entities": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Dto.Accounting.DomainWhitelistEntry](#schemaapi.core.dto.accounting.domainwhitelistentry)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.IpBlacklistEntry_">Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.IpBlacklistEntry_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.dto.accounting.ipblacklistentry_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Accounting.IpBlacklistEntry_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.dto.accounting.ipblacklistentry_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.dto.accounting.ipblacklistentry_"></a>

```json
{
  "entities": [
    {
      "id": "string",
      "ip": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Dto.Accounting.IpBlacklistEntry](#schemaapi.core.dto.accounting.ipblacklistentry)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_">Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Aggregated.AggregatedResult_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.dto.aggregated.aggregatedresult_"></a>

```json
{
  "entities": [
    {
      "activityDay": "20120203120530",
      "commissionsCost": 0,
      "conversionsCost": 0,
      "conversionsValue": 0,
      "convertedClicks": 0,
      "entityData": {},
      "entityId": "string",
      "fromDay": "20120203120530",
      "hourlyBreakDown": {
        "property1": {},
        "property2": {}
      },
      "lastHitDate": "20120203120530",
      "spiderHitsCount": 0,
      "toDay": "20120203120530",
      "totalClicks": 0,
      "totalViews": 0,
      "uniqueClicks": 0,
      "uniqueConversions": 0,
      "uniqueViews": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Dto.Aggregated.AggregatedResult](#schemaapi.core.dto.aggregated.aggregatedresult)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.ClickStream.Hit_">Api.Core.Responses.EntitiesResponse_Api.Core.Dto.ClickStream.Hit_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.dto.clickstream.hit_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.ClickStream.Hit_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.dto.clickstream.hit_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.dto.clickstream.hit_"></a>

```json
{
  "entities": [
    {
      "accessTime": "20120203120530",
      "browser": {
        "browserType": "string",
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "clientLanguage": "string",
      "conversion1": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion2": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion3": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion4": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversion5": {
        "accessTime": "20120203120530",
        "comcost": 0,
        "cost": 0,
        "date": "20120203120530",
        "deleted": true,
        "id": 0,
        "name": "string",
        "parameter": "string",
        "value": 0
      },
      "conversions": [
        {
          "accessTime": "20120203120530",
          "comcost": 0,
          "cost": 0,
          "date": "20120203120530",
          "deleted": true,
          "id": 0,
          "name": "string",
          "parameter": "string",
          "value": 0
        }
      ],
      "entity": {
        "creationDate": "20120203120530",
        "datapointFavourite": true,
        "datapointId": 0,
        "datapointName": "string",
        "datapointTitle": "string",
        "datapointType": "string",
        "destinationUrl": "string",
        "groupId": 0,
        "groupName": "string",
        "isABTest": true,
        "isPrivateShared": true,
        "isPublic": true,
        "notes": "string",
        "status": "Active",
        "tags": [
          {
            "datapoints": [
              0
            ],
            "groups": [
              0
            ],
            "id": 0,
            "name": "string"
          }
        ],
        "trackingCode": "string"
      },
      "ip": "string",
      "isProxy": "string",
      "isSpider": "string",
      "isUnique": "string",
      "location": {
        "areacode": "string",
        "city": "string",
        "country": "string",
        "latitude": 0,
        "longitude": 0,
        "metrocode": "string",
        "organization": "string",
        "postalcode": "string",
        "region": "string",
        "regionName": "string"
      },
      "org": "string",
      "os": {
        "familyId": 0,
        "familyName": "string",
        "id": 0,
        "name": "string"
      },
      "queryParams": "string",
      "realDestinationUrl": "string",
      "referer": "string",
      "source": {
        "id": 0,
        "name": "string",
        "param": "string"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Dto.ClickStream.Hit](#schemaapi.core.dto.clickstream.hit)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Grants.Grant_">Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Grants.Grant_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.dto.grants.grant_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Dto.Grants.Grant_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.dto.grants.grant_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.dto.grants.grant_"></a>

```json
{
  "entities": [
    {
      "DatapointType": "string",
      "Entity": {
        "id": 0,
        "uri": "string"
      },
      "EntityName": "string",
      "EntityType": "string",
      "Type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Dto.Grants.Grant](#schemaapi.core.dto.grants.grant)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_">Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_"></a>
<a id="schema_Api.Core.Responses.EntitiesResponse_Api.Core.Responses.EntityUri_System.Int64_"></a>
<a id="tocSapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_"></a>
<a id="tocsapi.core.responses.entitiesresponse_api.core.responses.entityuri_system.int64_"></a>

```json
{
  "entities": [
    {
      "id": 0,
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)]|false|none|none|

<h2 id="tocS_Api.Core.Responses.EntityUri_System.Int64_">Api.Core.Responses.EntityUri_System.Int64_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.entityuri_system.int64_"></a>
<a id="schema_Api.Core.Responses.EntityUri_System.Int64_"></a>
<a id="tocSapi.core.responses.entityuri_system.int64_"></a>
<a id="tocsapi.core.responses.entityuri_system.int64_"></a>

```json
{
  "id": 0,
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_">Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_</h2>
<!-- backwards compatibility -->
<a id="schemaapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_"></a>
<a id="schema_Api.Core.Responses.ModifyBatchItemResponce_Api.Core.Dto.Datapoints.Datapoint_System.Int64_"></a>
<a id="tocSapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_"></a>
<a id="tocsapi.core.responses.modifybatchitemresponce_api.core.dto.datapoints.datapoint_system.int64_"></a>

```json
{
  "entityData": {
    "creationDate": "20120203120530",
    "encodeIp": true,
    "fifthConversionId": 0,
    "fifthConversionName": "string",
    "firstConversionId": 0,
    "firstConversionName": "string",
    "fourthConversionId": 0,
    "fourthConversionName": "string",
    "groupId": 0,
    "groupName": "string",
    "id": 0,
    "isPublic": true,
    "isSecured": true,
    "lightTracking": true,
    "name": "string",
    "notes": "string",
    "preferred": true,
    "redirectOnly": true,
    "secondConversionId": 0,
    "secondConversionName": "string",
    "status": "Active",
    "tags": [
      {
        "datapoints": [
          0
        ],
        "groups": [
          0
        ],
        "id": 0,
        "name": "string"
      }
    ],
    "thirdConversionId": 0,
    "thirdConversionName": "string",
    "title": "string",
    "trackingCode": "string",
    "type": "TrackingLink",
    "typeTL": {
      "appendQuery": true,
      "browserDestinationItem": {
        "emailDestinationUrl": "string",
        "mobileDestinationUrl": "string",
        "spidersDestinationUrl": "string"
      },
      "destinationMode": "Simple",
      "domainId": 0,
      "encodeUrl": true,
      "expirationClicks": 0,
      "expirationDate": "20120203120530",
      "firstUrl": "string",
      "goDomainId": 0,
      "hideUrl": true,
      "hideUrlTitle": "string",
      "isABTest": true,
      "password": "string",
      "pauseAfterClicksExpiration": true,
      "pauseAfterDateExpiration": true,
      "randomDestinationItems": [
        {
          "url": "string"
        }
      ],
      "redirectType": "PermanentRedirect",
      "referrerClean": "None",
      "scripts": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "sequentialDestinationItems": [
        {
          "url": "string"
        }
      ],
      "spilloverDestinationItems": [
        {
          "url": "string"
        }
      ],
      "uniqueDestinationItem": {
        "firstDestinationUrl": "string"
      },
      "url": "string",
      "urlAfterClicksExpiration": "string",
      "urlAfterDateExpiration": "string",
      "urlsByLanguage": [
        {
          "languageCode": "string",
          "url": "string"
        }
      ],
      "urlsByNation": [
        {
          "nation": "string",
          "url": "string"
        }
      ],
      "weightedDestinationItems": [
        {
          "url": "string",
          "weight": 0
        }
      ]
    },
    "typeTP": {
      "parameterNote": "string"
    },
    "writePermited": true
  },
  "errors": [
    {
      "code": {},
      "errorMessage": "string",
      "errorValue": {},
      "property": "string"
    }
  ],
  "result": {
    "id": 0,
    "uri": "string"
  },
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityData|[Api.Core.Dto.Datapoints.Datapoint](#schemaapi.core.dto.datapoints.datapoint)|false|none|none|
|errors|[[ClickMeter.Infrastructure.Validation.ValidationFailure](#schemaclickmeter.infrastructure.validation.validationfailure)]|false|none|none|
|result|[Api.Core.Responses.EntityUri_System.Int64_](#schemaapi.core.responses.entityuri_system.int64_)|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_ClickMeter.Infrastructure.Validation.ValidationFailure">ClickMeter.Infrastructure.Validation.ValidationFailure</h2>
<!-- backwards compatibility -->
<a id="schemaclickmeter.infrastructure.validation.validationfailure"></a>
<a id="schema_ClickMeter.Infrastructure.Validation.ValidationFailure"></a>
<a id="tocSclickmeter.infrastructure.validation.validationfailure"></a>
<a id="tocsclickmeter.infrastructure.validation.validationfailure"></a>

```json
{
  "code": {},
  "errorMessage": "string",
  "errorValue": {},
  "property": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[System.Object](#schemasystem.object)|false|none|none|
|errorMessage|string|false|none|none|
|errorValue|[System.Object](#schemasystem.object)|false|none|none|
|property|string|false|none|none|

<h2 id="tocS_System.Object">System.Object</h2>
<!-- backwards compatibility -->
<a id="schemasystem.object"></a>
<a id="schema_System.Object"></a>
<a id="tocSsystem.object"></a>
<a id="tocssystem.object"></a>

```json
{}
```
