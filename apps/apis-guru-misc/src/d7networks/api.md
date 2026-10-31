<h1 id="d7sms">D7SMS v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.

Base URLs:

* <a href="https://rest-api.d7networks.com/secure">https://rest-api.d7networks.com/secure</a>

Email: <a href="mailto:int@d7networks.com">Emanuel</a> 
Web: <a href="https://d7networks.com/">Emanuel</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="d7sms-default">Default</h1>

## Balance

<a id="opIdBalanceGet"></a>

> Code samples

```bash
curl https://example.com/balance \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /balance`

Check account balance

> Example responses

> 500 Response

```json
null
```

<h3 id="balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|500|Internal Server Error|Internal Server Error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## SendSMS

<a id="opIdSendPost"></a>

> Code samples

```bash
curl https://example.com/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "content": "Send single SMS Testing",
    "from": "SignSMS",
    "to": 971562316353
  }'
```

`POST /send`

Send SMS  to recipients using D7 SMS Gateway

> Body parameter

```json
{
  "content": "Send single SMS Testing",
  "from": "SignSMS",
  "to": 971562316353
}
```

<h3 id="sendsms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Accept|header|string|true|none|
|body|body|[SendSMSRequest](#schemasendsmsrequest)|true|Message Body|
|» content|body|string|true|Message Content|
|» from|body|string|true|Sender ID / Number|
|» to|body|integer(int64)|true|Destination Mobile Number|

> Example responses

> 500 Response

```json
null
```

<h3 id="sendsms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|
|500|Internal Server Error|Internal Server Error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

## Bulk SMS

<a id="opIdSendbatchPost"></a>

> Code samples

```bash
curl https://example.com/sendbatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": [
      {
        "content": "Same content goes to three numbers",
        "from": "SignSMS",
        "to": [
          "971562316353",
          "971562316354",
          "971562316355"
        ]
      }
    ]
  }'
```

`POST /sendbatch`

Send Bulk SMS  to multiple recipients using D7 SMS Gateway

> Body parameter

```json
{
  "messages": [
    {
      "content": "Same content goes to three numbers",
      "from": "SignSMS",
      "to": [
        "971562316353",
        "971562316354",
        "971562316355"
      ]
    }
  ]
}
```

<h3 id="bulk-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|Accept|header|string|true|none|
|body|body|[BulkSMSRequest](#schemabulksmsrequest)|true|Message Body|
|» messages|body|[[Message](#schemamessage)]|true|Sendbatch message body|

<h3 id="bulk-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth
</aside>

# Schemas

<h2 id="tocS_BulkSMSRequest">BulkSMSRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulksmsrequest"></a>
<a id="schema_BulkSMSRequest"></a>
<a id="tocSbulksmsrequest"></a>
<a id="tocsbulksmsrequest"></a>

```json
{
  "messages": [
    {
      "content": "Same content goes to three numbers",
      "from": "SignSMS",
      "to": [
        "971562316353",
        "971562316354",
        "971562316355"
      ]
    }
  ]
}
```

Bulk SMS Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|true|none|Sendbatch message body|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "content": "Same content goes to three numbers",
  "from": "SignSMS",
  "to": [
    "971562316353",
    "971562316354",
    "971562316355"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|
|from|string|true|none|none|
|to|[string]|true|none|Destination Number|

<h2 id="tocS_SendSMSRequest">SendSMSRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendsmsrequest"></a>
<a id="schema_SendSMSRequest"></a>
<a id="tocSsendsmsrequest"></a>
<a id="tocssendsmsrequest"></a>

```json
{
  "content": "Send single SMS Testing",
  "from": "SignSMS",
  "to": 971562316353
}
```

Send SMS Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|Message Content|
|from|string|true|none|Sender ID / Number|
|to|integer(int64)|true|none|Destination Mobile Number|
