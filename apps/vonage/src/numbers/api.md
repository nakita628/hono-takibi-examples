<h1 id="numbers-api">Numbers API v1.0.20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>

Base URLs:

* <a href="https://rest.nexmo.com">https://rest.nexmo.com</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com">Vonage DevRel</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

<a href="https://developer.nexmo.com/numbers/overview">Numbers product documentation on the Vonage Developer Portal</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **api_key**, in: query. You can find your API key in the [developer dashboard](https://dashboard.nexmo.com)

* API Key (apiSecret)
    - Parameter Name: **api_secret**, in: query. You can find your API secret in the [developer dashboard](https://dashboard.nexmo.com)

<h1 id="numbers-api-default">Default</h1>

## List the numbers you own

<a id="opIdgetOwnedNumbers"></a>

> Code samples

```bash
curl "https://api.nexmo.com/account/numbers?api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /account/numbers`

Retrieve all the inbound numbers associated with your Vonage account.

<h3 id="list-the-numbers-you-own-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|application_id|query|string|false|The Application that you want to return the numbers for.|
|has_application|query|boolean|false|Set this optional field to `true` to restrict your results to numbers<br>associated with an Application (any Application). Set to `false` to<br>find all numbers not associated with any Application. Omit the field<br>to avoid filtering on whether or not the number is assigned to an<br>Application.<br>|
|country|query|[country](#schemacountry)|false|none|
|pattern|query|string|false|The number pattern you want to search for. Use in conjunction with `search_pattern`.|
|search_pattern|query|integer|false|The strategy you want to use for matching:<br><br><br>* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)<br>* `1` - Search for numbers that contain `pattern`<br>* `2` - Search for numbers that end with `pattern`<br>|
|size|query|integer|false|Page size|
|index|query|integer|false|Page index|

#### Enumerated Values

|Parameter|Value|
|---|---|
|search_pattern|0|
|search_pattern|1|
|search_pattern|2|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "numbers": [
    {
      "country": "GB",
      "features": [
        "VOICE",
        "SMS",
        "MMS"
      ],
      "messagesCallbackType": "app",
      "messagesCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "moHttpUrl": "https://example.com/webhooks/inbound-sms",
      "msisdn": "447700900000",
      "type": "mobile-lvn",
      "voiceCallbackType": "app",
      "voiceCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  ]
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="list-the-numbers-you-own-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbound-numbers](#schemainbound-numbers)|
|401|Unauthorized|Unauthorized|[account-unauthorized](#schemaaccount-unauthorized)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Buy a number

<a id="opIdbuyANumber"></a>

> Code samples

```bash
curl "https://api.nexmo.com/number/buy?api_key=${API_KEY}&api_secret=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'country=GB&msisdn=447700900000&target_api_key=1a2345b7'
```

`POST /number/buy`

Request to purchase a specific inbound number.

> Body parameter

```yaml
country: GB
msisdn: "447700900000"
target_api_key: "1a2345b7"
```

<h3 id="buy-a-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[number-details](#schemanumber-details)|true|Number details|
|» country|body|[country](#schemacountry)|true|The two character country code in ISO 3166-1 alpha-2 format|
|» msisdn|body|string|true|An available inbound virtual number.|
|» target_api_key|body|string|false|If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.|

> Example responses

> 200 Response

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

> 420 Response

```json
{
  "error-code": "420",
  "error-code-label": "Numbers from this country can be requested from the Dashboard (https://dashboard.nexmo.com/buy-numbers) as they require a valid local address to be provided before being purchased."
}
```

<h3 id="buy-a-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[response](#schemaresponse)|
|401|Unauthorized|Unauthorized|[unauthorized](#schemaunauthorized)|
|420|420|Action failed|[response420](#schemaresponse420)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Cancel a number

<a id="opIdcancelANumber"></a>

> Code samples

```bash
curl "https://api.nexmo.com/number/cancel?api_key=${API_KEY}&api_secret=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'country=GB&msisdn=447700900000&target_api_key=1a2345b7'
```

`POST /number/cancel`

Cancel your subscription for a specific inbound number.

> Body parameter

```yaml
country: GB
msisdn: "447700900000"
target_api_key: "1a2345b7"
```

<h3 id="cancel-a-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[number-details](#schemanumber-details)|true|Number details|
|» country|body|[country](#schemacountry)|true|The two character country code in ISO 3166-1 alpha-2 format|
|» msisdn|body|string|true|An available inbound virtual number.|
|» target_api_key|body|string|false|If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.|

> Example responses

> 200 Response

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="cancel-a-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[response](#schemaresponse)|
|401|Unauthorized|Unauthorized|[unauthorized](#schemaunauthorized)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Search available numbers

<a id="opIdgetAvailableNumbers"></a>

> Code samples

```bash
curl "https://api.nexmo.com/number/search?country=GB&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /number/search`

Retrieve inbound numbers that are available for the specified country.

<h3 id="search-available-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|[country](#schemacountry)|true|The two character country code to filter on (in ISO 3166-1 alpha-2 format)|
|type|query|string|false|Set this parameter to filter the type of number, such as mobile or landline|
|pattern|query|string|false|The number pattern you want to search for. Use in conjunction with `search_pattern`.|
|search_pattern|query|integer|false|The strategy you want to use for matching:<br><br><br>* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)<br>* `1` - Search for numbers that contain `pattern`<br>* `2` - Search for numbers that end with `pattern`<br>|
|features|query|string|false|Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.|
|size|query|integer|false|Page size|
|index|query|integer|false|Page index|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|landline|
|type|mobile-lvn|
|type|landline-toll-free|
|search_pattern|0|
|search_pattern|1|
|search_pattern|2|
|features|SMS|
|features|VOICE|
|features|SMS,VOICE|
|features|MMS|
|features|SMS,MMS|
|features|VOICE,MMS|
|features|SMS,MMS,VOICE|

> Example responses

> 200 Response

```json
{
  "count": 1234,
  "numbers": [
    {
      "cost": "1.25",
      "country": "GB",
      "features": [
        "VOICE",
        "SMS",
        "MMS"
      ],
      "msisdn": "447700900000",
      "type": "mobile-lvn"
    }
  ]
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="search-available-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[available-numbers](#schemaavailable-numbers)|
|401|Unauthorized|Unauthorized|[account-unauthorized](#schemaaccount-unauthorized)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Update a number

<a id="opIdupdateANumber"></a>

> Code samples

```bash
curl "https://api.nexmo.com/number/update?api_key=${API_KEY}&api_secret=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'app_id=aaaaaaaa-bbbb-cccc-dddd-0123456789abc&country=GB&messagesCallbackType=app&messagesCallbackValue=aaaaaaaa-bbbb-cccc-dddd-0123456789ab&moHttpUrl=https%3A%2F%2Fexample.com%2Fwebhooks%2Finbound-sms&moSmppSysType=inbound&msisdn=447700900000&voiceCallbackType=tel&voiceCallbackValue=447700900000&voiceStatusCallback=https%3A%2F%2Fexample.com%2Fwebhooks%2Fstatus'
```

`POST /number/update`

Change the behaviour of a number that you own.

> Body parameter

```yaml
app_id: aaaaaaaa-bbbb-cccc-dddd-0123456789abc
country: GB
messagesCallbackType: app
messagesCallbackValue: aaaaaaaa-bbbb-cccc-dddd-0123456789ab
moHttpUrl: "https://example.com/webhooks/inbound-sms"
moSmppSysType: inbound
msisdn: "447700900000"
voiceCallbackType: tel
voiceCallbackValue: "447700900000"
voiceStatusCallback: "https://example.com/webhooks/status"
```

<h3 id="update-a-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[number-details-update](#schemanumber-details-update)|true|Number details|
|» app_id|body|string|false|The Application that will handle inbound traffic to this number.|
|» country|body|[country](#schemacountry)|true|The two character country code in ISO 3166-1 alpha-2 format|
|» messagesCallbackType|body|string|false|**Deprecated.** <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.<br><br>Specifies the Messages webhook type (always `app`) associated with this<br>number and must be used with the `messagesCallbackValue` parameter.<br>|
|» messagesCallbackValue|body|string|false|**Deprecated.** <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.<br><br>Specifies the Application ID of your Messages application.<br>It must be used with the `messagesCallbackType` parameter.<br>|
|» moHttpUrl|body|string|false|An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.|
|» moSmppSysType|body|string|false|The associated system type for your SMPP client|
|» msisdn|body|string|true|An available inbound virtual number.|
|» voiceCallbackType|body|string|false|Specify whether inbound voice calls on your number are forwarded<br>to a SIP or a telephone number.  This must be used with the<br>`voiceCallbackValue` parameter. If set, `sip` or `tel` are<br>prioritized over the Voice capability in your Application.<br><br>*Note: The `app` value is deprecated and will be removed in future.*<br>|
|» voiceCallbackValue|body|string|false|A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.|
|» voiceStatusCallback|body|string|false|A webhook URI for Vonage to send a request to when a call ends|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» messagesCallbackType|app|
|» voiceCallbackType|sip|
|» voiceCallbackType|tel|
|» voiceCallbackType|app|

> Example responses

> 200 Response

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="update-a-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[response](#schemaresponse)|
|401|Unauthorized|Unauthorized|[unauthorized](#schemaunauthorized)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

# Schemas

<h2 id="tocS_account-unauthorized">account-unauthorized</h2>
<!-- backwards compatibility -->
<a id="schemaaccount-unauthorized"></a>
<a id="schema_account-unauthorized"></a>
<a id="tocSaccount-unauthorized"></a>
<a id="tocsaccount-unauthorized"></a>

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|string|false|none|The status code of the response. `200` indicates a successful request.|
|error-code-label|string|false|none|The status code description|

<h2 id="tocS_available-numbers">available-numbers</h2>
<!-- backwards compatibility -->
<a id="schemaavailable-numbers"></a>
<a id="schema_available-numbers"></a>
<a id="tocSavailable-numbers"></a>
<a id="tocsavailable-numbers"></a>

```json
{
  "count": 1234,
  "numbers": [
    {
      "cost": "1.25",
      "country": "GB",
      "features": [
        "VOICE",
        "SMS",
        "MMS"
      ],
      "msisdn": "447700900000",
      "type": "mobile-lvn"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total amount of numbers available in the pool.|
|numbers|[[availablenumber](#schemaavailablenumber)]|false|none|A paginated array of available numbers and their details.|

<h2 id="tocS_availablenumber">availablenumber</h2>
<!-- backwards compatibility -->
<a id="schemaavailablenumber"></a>
<a id="schema_availablenumber"></a>
<a id="tocSavailablenumber"></a>
<a id="tocsavailablenumber"></a>

```json
{
  "cost": "1.25",
  "country": "GB",
  "features": [
    "VOICE",
    "SMS",
    "MMS"
  ],
  "msisdn": "447700900000",
  "type": "mobile-lvn"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|string|false|none|The monthly rental cost for this number, in Euros|
|country|[country](#schemacountry)|false|none|The two character country code in ISO 3166-1 alpha-2 format|
|features|[string]|false|none|The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`|
|msisdn|string|false|none|An available inbound virtual number.|
|type|string|false|none|The type of number: `landline`, `landline-toll-free` or `mobile-lvn`|

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"GB"
```

The two character country code in ISO 3166-1 alpha-2 format

<h2 id="tocS_inbound-numbers">inbound-numbers</h2>
<!-- backwards compatibility -->
<a id="schemainbound-numbers"></a>
<a id="schema_inbound-numbers"></a>
<a id="tocSinbound-numbers"></a>
<a id="tocsinbound-numbers"></a>

```json
{
  "count": 1,
  "numbers": [
    {
      "country": "GB",
      "features": [
        "VOICE",
        "SMS",
        "MMS"
      ],
      "messagesCallbackType": "app",
      "messagesCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "moHttpUrl": "https://example.com/webhooks/inbound-sms",
      "msisdn": "447700900000",
      "type": "mobile-lvn",
      "voiceCallbackType": "app",
      "voiceCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The total amount of numbers owned by the account|
|numbers|[[ownednumber](#schemaownednumber)]|false|none|A paginated array of numbers and their details|

<h2 id="tocS_number-details">number-details</h2>
<!-- backwards compatibility -->
<a id="schemanumber-details"></a>
<a id="schema_number-details"></a>
<a id="tocSnumber-details"></a>
<a id="tocsnumber-details"></a>

```json
{
  "country": "GB",
  "msisdn": "447700900000",
  "target_api_key": "1a2345b7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[country](#schemacountry)|true|none|The two character country code in ISO 3166-1 alpha-2 format|
|msisdn|string|true|none|An available inbound virtual number.|
|target_api_key|string|false|none|If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.|

<h2 id="tocS_number-details-update">number-details-update</h2>
<!-- backwards compatibility -->
<a id="schemanumber-details-update"></a>
<a id="schema_number-details-update"></a>
<a id="tocSnumber-details-update"></a>
<a id="tocsnumber-details-update"></a>

```json
{
  "app_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789abc",
  "country": "GB",
  "messagesCallbackType": "app",
  "messagesCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "moHttpUrl": "https://example.com/webhooks/inbound-sms",
  "moSmppSysType": "inbound",
  "msisdn": "447700900000",
  "voiceCallbackType": "tel",
  "voiceCallbackValue": "447700900000",
  "voiceStatusCallback": "https://example.com/webhooks/status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_id|string|false|none|The Application that will handle inbound traffic to this number.|
|country|[country](#schemacountry)|true|none|The two character country code in ISO 3166-1 alpha-2 format|
|messagesCallbackType|string|false|none|**Deprecated.** <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.<br><br>Specifies the Messages webhook type (always `app`) associated with this<br>number and must be used with the `messagesCallbackValue` parameter.<br>|
|messagesCallbackValue|string|false|none|**Deprecated.** <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.<br><br>Specifies the Application ID of your Messages application.<br>It must be used with the `messagesCallbackType` parameter.<br>|
|moHttpUrl|string|false|none|An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.|
|moSmppSysType|string|false|none|The associated system type for your SMPP client|
|msisdn|string|true|none|An available inbound virtual number.|
|voiceCallbackType|string|false|none|Specify whether inbound voice calls on your number are forwarded<br>to a SIP or a telephone number.  This must be used with the<br>`voiceCallbackValue` parameter. If set, `sip` or `tel` are<br>prioritized over the Voice capability in your Application.<br><br>*Note: The `app` value is deprecated and will be removed in future.*<br>|
|voiceCallbackValue|string|false|none|A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.|
|voiceStatusCallback|string|false|none|A webhook URI for Vonage to send a request to when a call ends|

#### Enumerated Values

|Property|Value|
|---|---|
|messagesCallbackType|app|
|voiceCallbackType|sip|
|voiceCallbackType|tel|
|voiceCallbackType|app|

<h2 id="tocS_ownednumber">ownednumber</h2>
<!-- backwards compatibility -->
<a id="schemaownednumber"></a>
<a id="schema_ownednumber"></a>
<a id="tocSownednumber"></a>
<a id="tocsownednumber"></a>

```json
{
  "country": "GB",
  "features": [
    "VOICE",
    "SMS",
    "MMS"
  ],
  "messagesCallbackType": "app",
  "messagesCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "moHttpUrl": "https://example.com/webhooks/inbound-sms",
  "msisdn": "447700900000",
  "type": "mobile-lvn",
  "voiceCallbackType": "app",
  "voiceCallbackValue": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[country](#schemacountry)|false|none|The two character country code in ISO 3166-1 alpha-2 format|
|features|[string]|false|none|The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`|
|messagesCallbackType|string|false|none|The messages webhook type: always `app`|
|messagesCallbackValue|string|false|none|An Application ID|
|moHttpUrl|string(url)|false|none|The URL of the webhook endpoint that handles inbound messages|
|msisdn|string|false|none|An available inbound virtual number.|
|type|string|false|none|The type of number: `landline`, `landline-toll-free` or `mobile-lvn`|
|voiceCallbackType|string|false|none|The voice webhook type: `sip`, `tel`, or `app`|
|voiceCallbackValue|string|false|none|A SIP URI, telephone number or Application ID|

<h2 id="tocS_response">response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|string|false|none|The status code of the response. `200` indicates a successful request.|
|error-code-label|string|false|none|The status code description|

<h2 id="tocS_response420">response420</h2>
<!-- backwards compatibility -->
<a id="schemaresponse420"></a>
<a id="schema_response420"></a>
<a id="tocSresponse420"></a>
<a id="tocsresponse420"></a>

```json
{
  "error-code": "420",
  "error-code-label": "Numbers from this country can be requested from the Dashboard (https://dashboard.nexmo.com/buy-numbers) as they require a valid local address to be provided before being purchased."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|string|false|none|The status code of the response. `200` indicates a successful request.|
|error-code-label|string|false|none|More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number.|

<h2 id="tocS_unauthorized">unauthorized</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorized"></a>
<a id="schema_unauthorized"></a>
<a id="tocSunauthorized"></a>
<a id="tocsunauthorized"></a>

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|string|false|none|The status code of the response. `200` indicates a successful request.|
|error-code-label|string|false|none|The status code description|
