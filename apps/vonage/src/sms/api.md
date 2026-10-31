<h1 id="sms-api">SMS API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the SMS API you can send SMS from your account and lookup messages both messages that you've sent as well as messages sent to your virtual numbers. Numbers are specified in E.164 format. More SMS API documentation is at <https://developer.nexmo.com/messaging/sms/overview>

Base URLs:

* <a href="https://rest.nexmo.com/sms">https://rest.nexmo.com/sms</a>

Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 

<h1 id="sms-api-default">Default</h1>

## Send an SMS

<a id="opIdsend-an-sms"></a>

> Code samples

```bash
curl https://api.nexmo.com/json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'account-ref=customer1234&api_key=abcd1234&api_secret=abcdef0123456789&body=0011223344556677&callback=https%3A%2F%2Fexample.com%2Fsms-dlr&client-ref=my-personal-reference&content-id=1107457532145798767&entity-id=1101456324675322134&from=AcmeInc&message-class=0&protocol-id=127&sig=stringstringstri&status-report-req=false&text=Hello%20World!&to=447700900000&ttl=900000&type=text&udh=06050415811581'
```

`POST /{format}`

Send an outbound SMS from your Vonage account

> Body parameter

```yaml
account-ref: customer1234
api_key: abcd1234
api_secret: abcdef0123456789
body: "0011223344556677"
callback: "https://example.com/sms-dlr"
client-ref: my-personal-reference
content-id: "1107457532145798767"
entity-id: "1101456324675322134"
from: AcmeInc
message-class: 0
protocol-id: 127
sig: stringstringstri
status-report-req: false
text: "Hello World!"
to: "447700900000"
ttl: 900000
type: text
udh: "06050415811581"
```

<h3 id="send-an-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The format of the response|
|body|body|[NewMessage](#schemanewmessage)|true|none|
|» account-ref|body|string|false|**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)|
|» api_key|body|string|true|Your API key|
|» api_secret|body|string|false|Your API secret. Required unless `sig` is provided|
|» body|body|string|false|**Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.|
|» callback|body|string|false|**Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters.|
|» client-ref|body|string|false|**Advanced**: You can optionally include your own reference of up to 100 characters.|
|» content-id|body|string|false|**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)|
|» entity-id|body|string|false|**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)|
|» from|body|string|true|The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.|
|» message-class|body|integer|false|**Advanced**: The Data Coding Scheme value of the message|
|» protocol-id|body|integer|false|**Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.|
|» sig|body|string|false|The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.|
|» status-report-req|body|boolean|false|**Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).|
|» text|body|string|false|The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.|
|» to|body|string|true|The number that the message should be sent to. Numbers are specified in E.164 format.|
|» ttl|body|integer|false|**Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.|
|» type|body|string|false|**Advanced**: The format of the message body|
|» udh|body|string|false|**Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|» message-class|0|
|» message-class|1|
|» message-class|2|
|» message-class|3|
|» type|text|
|» type|binary|
|» type|unicode|

> Example responses

> 200 Response

```json
{
  "message-count": "1",
  "messages": [
    {
      "account-ref": "customer1234",
      "client-ref": "my-personal-reference",
      "message-id": "0A0000000123ABCD1",
      "message-price": "0.03330000",
      "network": "12345",
      "remaining-balance": "3.14159265",
      "status": "0",
      "to": "447700900000"
    }
  ]
}
```

<h3 id="send-an-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="send-an-sms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SMS](#schemasms)|false|none|Message sent|
|*oneOf*|[Error](#schemaerror)|false|none|Error|

<h3 id="send-an-sms-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|delivery-receipt|{$request.body#/callback}|POST|Delivery Receipt|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DeliveryReceipt">DeliveryReceipt</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryreceipt"></a>
<a id="schema_DeliveryReceipt"></a>
<a id="tocSdeliveryreceipt"></a>
<a id="tocsdeliveryreceipt"></a>

```json
{
  "api-key": "abcd1234",
  "client-ref": "my-personal-reference",
  "err-code": "0",
  "message-timestamp": "2020-01-01 12:00:00",
  "messageId": "0A0000001234567B",
  "msisdn": "447700900000",
  "network-code": "12345",
  "nonce": "ec11dd3e-1e7f-4db5-9467-82b02cd223b9",
  "price": "0.03330000",
  "scts": "2001011400",
  "sig": "1A20E4E2069B609FDA6CECA9DE18D5CAFE99720DDB628BD6BE8B19942A336E1C",
  "status": "delivered",
  "timestamp": "1582650446",
  "to": "AcmeInc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api-key|string|false|none|The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint.|
|client-ref|string|false|none|If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt|
|err-code|string|false|none|The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details|
|message-timestamp|string|false|none|The time when Vonage started to push this Delivery Receipt to your webhook endpoint.|
|messageId|string|false|none|The Vonage ID for this message.|
|msisdn|string|false|none|The number the message was sent to. Numbers are specified in E.164 format.|
|network-code|string|false|none|The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with.|
|nonce|string|false|none|A random string to be used when calculating the signature. _Only included if you have signatures enabled_|
|price|string|false|none|The cost of the message|
|scts|string|false|none|When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00`|
|sig|string|false|none|The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_|
|status|string|false|none|A code that explains where the message is in the delivery process.|
|timestamp|string|false|none|A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_|
|to|string|false|none|The SenderID you set in `from` in your request.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message-count": "1",
  "messages": [
    {
      "error-text": "Missing to param",
      "status": "2"
    }
  ]
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message-count|string|false|none|The amount of messages in the request|
|messages|[[ErrorMessage](#schemaerrormessage)]|false|none|none|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "error-text": "Missing to param",
  "status": "2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-text|string|false|none|The description of the error|
|status|string|false|none|The error status of the message|

<h2 id="tocS_ErrorXml">ErrorXml</h2>
<!-- backwards compatibility -->
<a id="schemaerrorxml"></a>
<a id="schema_ErrorXml"></a>
<a id="tocSerrorxml"></a>
<a id="tocserrorxml"></a>

```json
{
  "messages": [
    {
      "error-text": "Missing to param",
      "status": "2"
    }
  ]
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[ErrorMessage](#schemaerrormessage)]|false|none|none|

<h2 id="tocS_InboundMessage">InboundMessage</h2>
<!-- backwards compatibility -->
<a id="schemainboundmessage"></a>
<a id="schema_InboundMessage"></a>
<a id="tocSinboundmessage"></a>
<a id="tocsinboundmessage"></a>

```json
{
  "api-key": "abcd1234",
  "concat": "true",
  "concat-part": "2",
  "concat-ref": "1",
  "concat-total": "3",
  "data": "string",
  "keyword": "HELLO",
  "message-timestamp": "2020-01-01 12:00:00",
  "messageId": "0A0000000123ABCD1",
  "msisdn": "447700900001",
  "nonce": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "text": "Hello world",
  "timestamp": "1578787200",
  "to": "447700900000",
  "type": "text",
  "udh": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api-key|string|true|none|The Vonage API Key of the receiving account.|
|concat|string|false|none|True - if this is a concatenated message. This field does not exist if it is a single message|
|concat-part|string|false|none|The number of this part in the message. Counting starts at 1.|
|concat-ref|string|false|none|The transaction reference. All parts of this message share this value.|
|concat-total|string|false|none|The number of parts in this concatenated message.|
|data|string(binary)|false|none|The content of this message, if type is binary.|
|keyword|string|true|none|The first word in the message body. Converted to upper case.|
|message-timestamp|string|true|none|The time when Vonage started to push this Delivery Receipt to your webhook endpoint.|
|messageId|string|true|none|The ID of the message|
|msisdn|string|true|none|The phone number that this inbound message was sent from. Numbers are specified in E.164 format.|
|nonce|string|false|none|A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages.|
|text|string|true|none|The message body for this inbound message.|
|timestamp|string|false|none|A unix timestamp representation of message-timestamp.|
|to|string|true|none|The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format.|
|type|string|true|none|Possible values are:<br><br>  - `text` - standard text.<br>  - `unicode` - URLencoded   unicode  . This is valid for standard GSM, Arabic, Chinese, double-encoded characters and so on.<br>  - `binary` - a binary message.<br>|
|udh|string|false|none|The hex encoded User Data Header, if type is binary|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "account-ref": "customer1234",
  "client-ref": "my-personal-reference",
  "message-id": "0A0000000123ABCD1",
  "message-price": "0.03330000",
  "network": "12345",
  "remaining-balance": "3.14159265",
  "status": "0",
  "to": "447700900000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account-ref|string|false|none|**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)|
|client-ref|string|false|none|If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent.|
|message-id|string|false|none|The ID of the message|
|message-price|string|false|none|The estimated cost of the message|
|network|string|false|none|The estimated ID of the network of the recipient|
|remaining-balance|string|false|none|Your estimated remaining balance|
|status|string|false|none|The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms).|
|to|string|false|none|The number the message was sent to. Numbers are specified in E.164 format.|

<h2 id="tocS_NewMessage">NewMessage</h2>
<!-- backwards compatibility -->
<a id="schemanewmessage"></a>
<a id="schema_NewMessage"></a>
<a id="tocSnewmessage"></a>
<a id="tocsnewmessage"></a>

```json
{
  "account-ref": "customer1234",
  "api_key": "abcd1234",
  "api_secret": "abcdef0123456789",
  "body": "0011223344556677",
  "callback": "https://example.com/sms-dlr",
  "client-ref": "my-personal-reference",
  "content-id": "1107457532145798767",
  "entity-id": "1101456324675322134",
  "from": "AcmeInc",
  "message-class": 0,
  "protocol-id": 127,
  "sig": "stringstringstri",
  "status-report-req": false,
  "text": "Hello World!",
  "to": "447700900000",
  "ttl": 900000,
  "type": "text",
  "udh": "06050415811581"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account-ref|string|false|none|**Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com)|
|api_key|string|true|none|Your API key|
|api_secret|string|false|none|Your API secret. Required unless `sig` is provided|
|body|string|false|none|**Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`.|
|callback|string|false|none|**Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters.|
|client-ref|string|false|none|**Advanced**: You can optionally include your own reference of up to 100 characters.|
|content-id|string|false|none|**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)|
|entity-id|string|false|none|**Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468)|
|from|string|true|none|The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.|
|message-class|integer|false|none|**Advanced**: The Data Coding Scheme value of the message|
|protocol-id|integer|false|none|**Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`.|
|sig|string|false|none|The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.|
|status-report-req|boolean|false|none|**Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt).|
|text|string|false|none|The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`.|
|to|string|true|none|The number that the message should be sent to. Numbers are specified in E.164 format.|
|ttl|integer|false|none|**Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.|
|type|string|false|none|**Advanced**: The format of the message body|
|udh|string|false|none|**Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`.|

#### Enumerated Values

|Property|Value|
|---|---|
|message-class|0|
|message-class|1|
|message-class|2|
|message-class|3|
|type|text|
|type|binary|
|type|unicode|

<h2 id="tocS_SMS">SMS</h2>
<!-- backwards compatibility -->
<a id="schemasms"></a>
<a id="schema_SMS"></a>
<a id="tocSsms"></a>
<a id="tocssms"></a>

```json
{
  "message-count": "1",
  "messages": [
    {
      "account-ref": "customer1234",
      "client-ref": "my-personal-reference",
      "message-id": "0A0000000123ABCD1",
      "message-price": "0.03330000",
      "network": "12345",
      "remaining-balance": "3.14159265",
      "status": "0",
      "to": "447700900000"
    }
  ]
}
```

Message sent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message-count|string|false|none|The amount of messages in the request|
|messages|[[Message](#schemamessage)]|false|none|none|

<h2 id="tocS_SMSXml">SMSXml</h2>
<!-- backwards compatibility -->
<a id="schemasmsxml"></a>
<a id="schema_SMSXml"></a>
<a id="tocSsmsxml"></a>
<a id="tocssmsxml"></a>

```json
{
  "messages": [
    {
      "account-ref": "customer1234",
      "client-ref": "my-personal-reference",
      "message-id": "0A0000000123ABCD1",
      "message-price": "0.03330000",
      "network": "12345",
      "remaining-balance": "3.14159265",
      "status": "0",
      "to": "447700900000"
    }
  ]
}
```

Message sent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|false|none|none|
