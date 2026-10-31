<h1 id="verify-api">Verify API v1.2.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:

* Protecting against spam, by preventing spammers from creating multiple accounts
* Monitoring suspicious activity, by forcing an account user to verify ownership of a number
* Ensuring that you can reach your users at any time because you have their correct phone number
More information is available at <https://developer.nexmo.com/verify>

Base URLs:

* <a href="https://api.nexmo.com/verify">https://api.nexmo.com/verify</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

<a href="https://developer.nexmo.com/verify">More information on the Verify product on our Developer Portal</a>

<h1 id="verify-api-requests">Requests</h1>

Verify Requests

## Request a Verification

<a id="opIdverifyRequest"></a>

> Code samples

```bash
curl https://api.nexmo.com/json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'api_key=abcd1234&api_secret=Sup3rS3cr3t!!&brand=Acme%20Inc&code_length=6&country=GB&lg=en-us&next_event_wait=120&number=447700900000&pin_code=AKFG-3424&pin_expiry=240&sender_id=ACME&workflow_id=4'
```

`POST /{format}`

Use Verify request to generate and send a PIN to your user:

1. Create a request to send a verification code to your user.

2. Check the `status` field in the response to ensure that your request was successful (zero is success).

3. Use the `request_id` field in the response for the Verify check.

*Note that this endpoint is available by `GET` request as well as `POST`.*

> Body parameter

```yaml
api_key: abcd1234
api_secret: "Sup3rS3cr3t!!"
brand: Acme Inc
code_length: 6
country: GB
lg: en-us
next_event_wait: 120
number: "447700900000"
pin_code: AKFG-3424
pin_expiry: 240
sender_id: ACME
workflow_id: 4
```

<h3 id="request-a-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The response format.|
|body|body|[verifyRequest](#schemaverifyrequest)|true|none|
|» api_key|body|[api_key](#schemaapi_key)|true|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|» api_secret|body|[api_secret](#schemaapi_secret)|true|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|» brand|body|string|true|An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."|
|» code_length|body|integer|false|The length of the verification code.|
|» country|body|string|false|If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.|
|» lg|body|string|false|By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>|
|» next_event_wait|body|integer|false|Specifies the wait time in seconds between attempts to deliver the verification code.|
|» number|body|string|true|The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|» pin_code|body|string|false|A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.|
|» pin_expiry|body|integer|false|How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).|
|» sender_id|body|string|false|An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.|
|» workflow_id|body|integer|false|Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|» code_length|4|
|» code_length|6|
|» lg|ar-xa|
|» lg|cs-cz|
|» lg|cy-cy|
|» lg|cy-gb|
|» lg|da-dk|
|» lg|de-de|
|» lg|el-gr|
|» lg|en-au|
|» lg|en-gb|
|» lg|en-in|
|» lg|en-us|
|» lg|es-es|
|» lg|es-mx|
|» lg|es-us|
|» lg|fi-fi|
|» lg|fil-ph|
|» lg|fr-ca|
|» lg|fr-fr|
|» lg|hi-in|
|» lg|hu-hu|
|» lg|id-id|
|» lg|is-is|
|» lg|it-it|
|» lg|ja-jp|
|» lg|ko-kr|
|» lg|nb-no|
|» lg|nl-nl|
|» lg|pl-pl|
|» lg|pt-br|
|» lg|pt-pt|
|» lg|ro-ro|
|» lg|ru-ru|
|» lg|sv-se|
|» lg|th-th|
|» lg|tr-tr|
|» lg|vi-vn|
|» lg|yue-cn|
|» lg|zh-cn|
|» lg|zh-tw|
|» workflow_id|1|
|» workflow_id|2|
|» workflow_id|3|
|» workflow_id|4|
|» workflow_id|5|
|» workflow_id|6|
|» workflow_id|7|

> Example responses

> 200 Response

```json
{
  "error_text": "The api_key you supplied is for an account that has been barred from submitting messages.",
  "status": "8"
}
```

<h3 id="request-a-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="request-a-verification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[requestResponse](#schemarequestresponse)|false|none|Success|
|*oneOf*|[requestErrorResponse](#schemarequesterrorresponse)|false|none|Error|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="verify-api-fraud-management">Fraud Management</h1>

Fraud Management

## Request a network unblock

<a id="opIdnetworkUnblock"></a>

> Code samples

```bash
curl https://api.nexmo.com/network-unblock \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "network": 32526,
    "unblock_duration": "3600"
  }'
```

`POST /network-unblock`

Request to unblock a network that has been blocked due to potential fraud detection
<div class="Vlt-callout Vlt-callout--critical">
  <div class="Vlt-callout__content">
    <h4>Network Unblock is switched off by default.</h4>
    Please contact Sales to enable the Network Unblock API for your account.
  </div>
</div>

> Body parameter

```json
{
  "network": 32526,
  "unblock_duration": "3600"
}
```

<h3 id="request-a-network-unblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[networkUnblock](#schemanetworkunblock)|true|none|
|» network|body|string|false|The Network code|
|» unblock_duration|body|integer|false|An optional duration the unblock will be applied for in seconds|

> Example responses

> 202 Response

```json
{
  "network": "23410",
  "unblocked_until": "2024-04-22T08:34:58Z"
}
```

> 403 Response

```json
{
  "detail": "Your account does not have permission to perform this action.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Forbidden",
  "type": "https://developer.vonage.com/api-errors#forbidden"
}
```

> 404 Response

```json
{
  "detail": "The network you provided does not have an active block.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Not Found",
  "type": "https://developer.vonage.com/api-errors#bad-request"
}
```

> 422 Response

```json
{
  "detail": "Network is not in the request.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "network",
      "reason": "Network not found"
    }
  ],
  "title": "Network not found.",
  "type": "https://developer.vonage.com/api-errors#invalid-paramater"
}
```

> 429 Response

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.vonage.com/api-errors/verify#rate-limit"
}
```

<h3 id="request-a-network-unblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[networkUnblockResponseOk](#schemanetworkunblockresponseok)|
|403|Forbidden|Forbidden|[networkUnblockResponseForbidden](#schemanetworkunblockresponseforbidden)|
|404|Not Found|Not Found|[networkUnblockResponseNotFound](#schemanetworkunblockresponsenotfound)|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|429|Too Many Requests|Rate Limited|[ErrorThrottled](#schemaerrorthrottled)|

<h3 id="request-a-network-unblock-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[networkUnblockResponseUnprocessableNetwork](#schemanetworkunblockresponseunprocessablenetwork)|false|none|Invalid Network|
|*oneOf*|[networkUnblockResponseInvalidDuration](#schemanetworkunblockresponseinvalidduration)|false|none|Invalid Duration|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="verify-api-default">Default</h1>

## Verify Check

<a id="opIdverifyCheck"></a>

> Code samples

```bash
curl https://api.nexmo.com/check/json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'api_key=abcd1234&api_secret=Sup3rS3cr3t!!&code=1234&ip_address=123.0.0.255&request_id=abcdef0123456789abcdef0123456789'
```

`POST /check/{format}`

Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.

1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.

*Note that this endpoint is available by `GET` request as well as `POST`.*

> Body parameter

```yaml
api_key: abcd1234
api_secret: "Sup3rS3cr3t!!"
code: "1234"
ip_address: "123.0.0.255"
request_id: abcdef0123456789abcdef0123456789
```

<h3 id="verify-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The response format.|
|body|body|[checkRequest](#schemacheckrequest)|true|none|
|» api_key|body|[api_key](#schemaapi_key)|true|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|» api_secret|body|[api_secret](#schemaapi_secret)|true|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|» code|body|string|true|The verification code entered by your user.|
|» ip_address|body|string|false|**Deprecated.** (This field is no longer used)|
|» request_id|body|string|true|The Verify request to check. This is the `request_id` you received in the response to the Verify request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "error_text": "The code inserted does not match the expected value",
  "status": "16"
}
```

<h3 id="verify-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="verify-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[checkResponse](#schemacheckresponse)|false|none|Success|
|*oneOf*|[checkErrorResponse](#schemacheckerrorresponse)|false|none|Error|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Control

<a id="opIdverifyControl"></a>

> Code samples

```bash
curl https://api.nexmo.com/control/json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'api_key=abcd1234&api_secret=Sup3rS3cr3t!!&cmd=cancel&request_id=abcdef0123456789abcdef0123456789'
```

`POST /control/{format}`

Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:


1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.

2. Check the `status` in the response.


*Note that this endpoint is available by `GET` request as well as `POST`.*

> Body parameter

```yaml
api_key: abcd1234
api_secret: "Sup3rS3cr3t!!"
cmd: cancel
request_id: abcdef0123456789abcdef0123456789
```

<h3 id="verify-control-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The response format.|
|body|body|[controlRequest](#schemacontrolrequest)|true|none|
|» api_key|body|[api_key](#schemaapi_key)|true|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|» api_secret|body|[api_secret](#schemaapi_secret)|true|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|» cmd|body|string|true|The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.|
|» request_id|body|string|true|The `request_id` you received in the response to the Verify request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|» cmd|cancel|
|» cmd|trigger_next_event|

> Example responses

> 200 Response

```json
{
  "error_text": "Verification request ['abcdef0123456789abcdef0123456789'] can't be cancelled within the first 30 seconds.",
  "status": "19"
}
```

<h3 id="verify-control-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="verify-control-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[controlResponse](#schemacontrolresponse)|false|none|Success|
|*oneOf*|[controlErrorResponse](#schemacontrolerrorresponse)|false|none|Error|

<aside class="success">
This operation does not require authentication
</aside>

## PSD2 (Payment Services Directive 2) Request

<a id="opIdverifyRequestWithPSD2"></a>

> Code samples

```bash
curl https://api.nexmo.com/psd2/json \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'amount=48.00&api_key=abcd1234&api_secret=Sup3rS3cr3t!!&code_length=6&country=GB&lg=es-es&next_event_wait=120&number=447700900000&payee=Acme%20Inc&pin_expiry=240&workflow_id=4'
```

`POST /psd2/{format}`

Use Verify request to generate and send a PIN to your user to authorize a payment:
1. Create a request to send a verification code to your user.
2. Check the `status` field in the response to ensure that your request was successful (zero is success).
3. Use the `request_id` field in the response for the Verify check.
(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)

> Body parameter

```yaml
amount: "48.00"
api_key: abcd1234
api_secret: "Sup3rS3cr3t!!"
code_length: 6
country: GB
lg: es-es
next_event_wait: 120
number: "447700900000"
payee: Acme Inc
pin_expiry: 240
workflow_id: 4
```

<h3 id="psd2-payment-services-directive-2-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The response format.|
|body|body|[psd2Request](#schemapsd2request)|true|none|
|» amount|body|number(float)|true|The decimal amount of the payment to be confirmed, in Euros|
|» api_key|body|[api_key](#schemaapi_key)|true|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|» api_secret|body|[api_secret](#schemaapi_secret)|true|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|» code_length|body|integer|false|The length of the verification code.|
|» country|body|string|false|If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.|
|» lg|body|string|false|By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.<br>*Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`|
|» next_event_wait|body|integer|false|Specifies the wait time in seconds between attempts to deliver the verification code.|
|» number|body|string|true|The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|» payee|body|string|true|An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.|
|» pin_expiry|body|integer|false|How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).|
|» workflow_id|body|integer|false|Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|» code_length|4|
|» code_length|6|
|» lg|en-gb|
|» lg|bg-bg|
|» lg|cs-cz|
|» lg|da-dk|
|» lg|de-de|
|» lg|ee-et|
|» lg|el-gr|
|» lg|es-es|
|» lg|fi-fi|
|» lg|fr-fr|
|» lg|ga-ie|
|» lg|hu-hu|
|» lg|it-it|
|» lg|lv-lv|
|» lg|lt-lt|
|» lg|mt-mt|
|» lg|nl-nl|
|» lg|pl-pl|
|» lg|sk-sk|
|» lg|sl-si|
|» lg|sv-se|
|» workflow_id|1|
|» workflow_id|2|
|» workflow_id|3|
|» workflow_id|4|
|» workflow_id|5|
|» workflow_id|6|
|» workflow_id|7|

> Example responses

> 200 Response

```json
{
  "request_id": "abcdef0123456789abcdef0123456789",
  "status": "0"
}
```

<h3 id="psd2-payment-services-directive-2-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="psd2-payment-services-directive-2-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[requestResponse](#schemarequestresponse)|false|none|Success|
|*oneOf*|[requestErrorResponse](#schemarequesterrorresponse)|false|none|Error|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Search

<a id="opIdverifySearch"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/search/json?api_key=abcd1234&api_secret=Sup3rS3cr3t!!&request_id=abcdef0123456789abcdef0123456789' \
  -H 'Accept: application/json'
```

`GET /search/{format}`

Use Verify search to check the status of past or current verification requests:

1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.

*Note that this endpoint is available by `POST` request as well as `GET`.*

<h3 id="verify-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The response format.|
|api_key|query|[api_key](#schemaapi_key)|true|none|
|api_secret|query|[api_secret](#schemaapi_secret)|true|none|
|request_id|query|string|true|The `request_id` you received in the Verify Request Response. Required if `request_ids` not provided.|
|request_ids|query|[string]|false|More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request. Required if `request_id` not provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "error_text": "Internal Error",
  "status": "5"
}
```

<h3 id="verify-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="verify-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[searchResponse](#schemasearchresponse)|false|none|Success|
|*oneOf*|[searchErrorResponse](#schemasearcherrorresponse)|false|none|Error|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ErrorThrottled">ErrorThrottled</h2>
<!-- backwards compatibility -->
<a id="schemaerrorthrottled"></a>
<a id="schema_ErrorThrottled"></a>
<a id="tocSerrorthrottled"></a>
<a id="tocserrorthrottled"></a>

```json
{
  "detail": "Please wait, then retry your request",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Rate Limit Hit",
  "type": "https://developer.vonage.com/api-errors/verify#rate-limit"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|Additional information about the error|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Generic error message|
|type|string|true|none|Link to error / remediation options|

<h2 id="tocS_api_key">api_key</h2>
<!-- backwards compatibility -->
<a id="schemaapi_key"></a>
<a id="schema_api_key"></a>
<a id="tocSapi_key"></a>
<a id="tocsapi_key"></a>

```json
"abcd1234"
```

You can find your API key in your [account dashboard](https://dashboard.nexmo.com)

<h2 id="tocS_api_secret">api_secret</h2>
<!-- backwards compatibility -->
<a id="schemaapi_secret"></a>
<a id="schema_api_secret"></a>
<a id="tocSapi_secret"></a>
<a id="tocsapi_secret"></a>

```json
"Sup3rS3cr3t!!"
```

You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)

<h2 id="tocS_checkErrorResponse">checkErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckerrorresponse"></a>
<a id="schema_checkErrorResponse"></a>
<a id="tocScheckerrorresponse"></a>
<a id="tocscheckerrorresponse"></a>

```json
{
  "error_text": "The code inserted does not match the expected value",
  "request_id": "abcdef0123456789abcdef0123456789",
  "status": "16"
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_text|string|false|none|If the `status` is non-zero, this explains the error encountered.|
|request_id|string|false|none|The `request_id` that you received in the response to the Verify request and used in the Verify check request.|
|status|string|false|none|Code \| Text \| Description<br>-- \| -- \| --<br>0 \| Success \| The request was successfully accepted by Vonage.<br>1 \| Throttled \| You are trying to send more than the maximum of 30 requests per second.<br>2 \| Your request is incomplete and missing the mandatory parameter `$parameter` \| The stated parameter is missing.<br>3 \| Invalid value for parameter `$parameter` \| Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.<br>4 \| Invalid credentials were provided \| The supplied API key or secret in the request is either invalid or disabled.<br>5 \| Internal Error \| An error occurred processing this request in the Cloud Communications Platform.<br>6 \| The Vonage platform was unable to process this message for the following reason: `$reason` \| The request could not be routed.<br>16 \| The code inserted does not match the expected value \|<br>17 \| The wrong code was provided too many times \| You can run Verify check on a specific `request_id` up to three times unless a new verification code is generated. If you check a request more than three times, it is set to FAILED and you cannot check it again.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|
|status|5|
|status|6|
|status|16|
|status|17|

<h2 id="tocS_checkRequest">checkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckrequest"></a>
<a id="schema_checkRequest"></a>
<a id="tocScheckrequest"></a>
<a id="tocscheckrequest"></a>

```json
{
  "api_key": "abcd1234",
  "api_secret": "Sup3rS3cr3t!!",
  "code": "1234",
  "ip_address": "123.0.0.255",
  "request_id": "abcdef0123456789abcdef0123456789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|[api_key](#schemaapi_key)|true|none|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|api_secret|[api_secret](#schemaapi_secret)|true|none|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|code|string|true|none|The verification code entered by your user.|
|ip_address|string|false|none|**Deprecated.** (This field is no longer used)|
|request_id|string|true|none|The Verify request to check. This is the `request_id` you received in the response to the Verify request.|

<h2 id="tocS_checkResponse">checkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckresponse"></a>
<a id="schema_checkResponse"></a>
<a id="tocScheckresponse"></a>
<a id="tocscheckresponse"></a>

```json
{
  "currency": "EUR",
  "estimated_price_messages_sent": "0.03330000",
  "event_id": "0A00000012345678",
  "price": "0.10000000",
  "request_id": "abcdef0123456789abcdef0123456789",
  "status": "0"
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The currency code.|
|estimated_price_messages_sent|[estimated_price_messages_sent](#schemaestimated_price_messages_sent)|false|none|This field may not be present, depending on your pricing model. The<br>value indicates the cost (in EUR) of the calls made and messages sent<br>for the verification process. This value may be updated during and<br>shortly after the request completes because user input events can<br>overlap with message/call events. When this field is present, the total<br>cost of the verification is the sum of this field and the `price` field.<br>|
|event_id|string|false|none|The ID of the verification event, such as an SMS or TTS call.|
|price|string|false|none|The cost incurred for this request.|
|request_id|string|false|none|The `request_id` that you received in the response to the Verify request and used in the Verify check request.|
|status|string|false|none|A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`.|

<h2 id="tocS_controlErrorResponse">controlErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrolerrorresponse"></a>
<a id="schema_controlErrorResponse"></a>
<a id="tocScontrolerrorresponse"></a>
<a id="tocscontrolerrorresponse"></a>

```json
{
  "error_text": "The requestId 'abcdef0123456789abcdef' does not exist or its no longer active.",
  "status": "6"
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_text|string|false|none|If the `status` is non-zero, this explains the error encountered.|
|status|string|false|none|Code \| Text \| Description<br>-- \| -- \| --<br>0 \| Success \| The request was successfully accepted by Vonage.<br>1 \| Throttled \| You are trying to send more than the maximum of 30 requests per second.<br>2 \| Your request is incomplete and missing the mandatory parameter `$parameter` \| The stated parameter is missing.<br>3 \| Invalid value for parameter `$parameter` \| Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.<br>4 \| Invalid credentials were provided \| The supplied API key or secret in the request is either invalid or disabled.<br>5 \| Internal Error \| An error occurred processing this request in the Cloud Communications Platform.<br>6 \| The Vonage platform was unable to process this message for the following reason: `$reason` \| The request could not be routed.<br>8 \| The api_key you supplied is for an account that has been barred from submitting messages. \|<br>9 \| Partner quota exceeded \| Your account does not have sufficient credit to process this request.<br>19 \| For `cancel`: Either you have not waited at least 30 secs after sending a Verify request before cancelling or Verify has made too many attempts to deliver the verification code for this request and you must now wait for the process to complete. For `trigger_next_event`: All attempts to deliver the verification code for this request have completed and there are no remaining events to advance to.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|
|status|5|
|status|6|
|status|8|
|status|9|
|status|19|

<h2 id="tocS_controlRequest">controlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontrolrequest"></a>
<a id="schema_controlRequest"></a>
<a id="tocScontrolrequest"></a>
<a id="tocscontrolrequest"></a>

```json
{
  "api_key": "abcd1234",
  "api_secret": "Sup3rS3cr3t!!",
  "cmd": "cancel",
  "request_id": "abcdef0123456789abcdef0123456789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|[api_key](#schemaapi_key)|true|none|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|api_secret|[api_secret](#schemaapi_secret)|true|none|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|cmd|string|true|none|The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.|
|request_id|string|true|none|The `request_id` you received in the response to the Verify request.|

#### Enumerated Values

|Property|Value|
|---|---|
|cmd|cancel|
|cmd|trigger_next_event|

<h2 id="tocS_controlResponse">controlResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontrolresponse"></a>
<a id="schema_controlResponse"></a>
<a id="tocScontrolresponse"></a>
<a id="tocscontrolresponse"></a>

```json
{
  "command": "cancel",
  "status": "0"
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|false|none|The `cmd` you sent in the request.|
|status|string|false|none|`cmd` \| Code \| Description<br>-- \| -- \| --<br>Any \| 0 \| Success<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|command|cancel|
|command|trigger_next_event|

<h2 id="tocS_estimated_price_messages_sent">estimated_price_messages_sent</h2>
<!-- backwards compatibility -->
<a id="schemaestimated_price_messages_sent"></a>
<a id="schema_estimated_price_messages_sent"></a>
<a id="tocSestimated_price_messages_sent"></a>
<a id="tocsestimated_price_messages_sent"></a>

```json
"0.03330000"
```

This field may not be present, depending on your pricing model. The
value indicates the cost (in EUR) of the calls made and messages sent
for the verification process. This value may be updated during and
shortly after the request completes because user input events can
overlap with message/call events. When this field is present, the total
cost of the verification is the sum of this field and the `price` field.

<h2 id="tocS_networkUnblock">networkUnblock</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblock"></a>
<a id="schema_networkUnblock"></a>
<a id="tocSnetworkunblock"></a>
<a id="tocsnetworkunblock"></a>

```json
{
  "network": 32526,
  "unblock_duration": "3600"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|The Network code|
|unblock_duration|integer|false|none|An optional duration the unblock will be applied for in seconds|

<h2 id="tocS_networkUnblockResponseForbidden">networkUnblockResponseForbidden</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblockresponseforbidden"></a>
<a id="schema_networkUnblockResponseForbidden"></a>
<a id="tocSnetworkunblockresponseforbidden"></a>
<a id="tocsnetworkunblockresponseforbidden"></a>

```json
{
  "detail": "Your account does not have permission to perform this action.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Forbidden",
  "type": "https://developer.vonage.com/api-errors#forbidden"
}
```

Forbidden

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Verbose description of the server error.|
|instance|string|false|none|The Instance ID|
|title|string|false|none|Full string text of the HTTP error code.|
|type|string|false|none|A URL link to the API documentation for this type of error.|

<h2 id="tocS_networkUnblockResponseInvalidDuration">networkUnblockResponseInvalidDuration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblockresponseinvalidduration"></a>
<a id="schema_networkUnblockResponseInvalidDuration"></a>
<a id="tocSnetworkunblockresponseinvalidduration"></a>
<a id="tocsnetworkunblockresponseinvalidduration"></a>

```json
{
  "detail": "Unblock duration is invalid.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "network",
      "reason": "Network not found"
    }
  ],
  "title": "Invalid unblock_duration parameter",
  "type": "https://developer.vonage.com/api-errors#invalid-paramater"
}
```

Invalid Duration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Verbose description of the server error.|
|instance|string|false|none|The Instance ID|
|invalid_parameters|[object]|false|none|Detailed payload of errors.|
|title|string|false|none|Full string text of the HTTP error code.|
|type|string|false|none|A URL link to the API documentation for this type of error.|

<h2 id="tocS_networkUnblockResponseNotFound">networkUnblockResponseNotFound</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblockresponsenotfound"></a>
<a id="schema_networkUnblockResponseNotFound"></a>
<a id="tocSnetworkunblockresponsenotfound"></a>
<a id="tocsnetworkunblockresponsenotfound"></a>

```json
{
  "detail": "The network you provided does not have an active block.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Not Found",
  "type": "https://developer.vonage.com/api-errors#bad-request"
}
```

Not Found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Verbose description of the server error.|
|instance|string|false|none|InstanceID|
|title|string|false|none|Full string text of the HTTP error code.|
|type|string|false|none|A URL link to the API documentation for this type of error.|

<h2 id="tocS_networkUnblockResponseOk">networkUnblockResponseOk</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblockresponseok"></a>
<a id="schema_networkUnblockResponseOk"></a>
<a id="tocSnetworkunblockresponseok"></a>
<a id="tocsnetworkunblockresponseok"></a>

```json
{
  "network": "23410",
  "unblocked_until": "2024-04-22T08:34:58Z"
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|string|false|none|The unique network ID|
|unblocked_until|string|false|none|Gives the DateTime when the unblock will expire.|

<h2 id="tocS_networkUnblockResponseUnprocessableNetwork">networkUnblockResponseUnprocessableNetwork</h2>
<!-- backwards compatibility -->
<a id="schemanetworkunblockresponseunprocessablenetwork"></a>
<a id="schema_networkUnblockResponseUnprocessableNetwork"></a>
<a id="tocSnetworkunblockresponseunprocessablenetwork"></a>
<a id="tocsnetworkunblockresponseunprocessablenetwork"></a>

```json
{
  "detail": "Network is not in the request.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "network",
      "reason": "Network not found"
    }
  ],
  "title": "Network not found.",
  "type": "https://developer.vonage.com/api-errors#invalid-paramater"
}
```

Invalid Network

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Verbose description of the server error.|
|instance|string|false|none|The Instance ID|
|invalid_parameters|[object]|false|none|Detailed payload of errors.|
|title|string|false|none|Full string text of the HTTP error code.|
|type|string|false|none|A URL link to the API documentation for this type of error.|

<h2 id="tocS_psd2Request">psd2Request</h2>
<!-- backwards compatibility -->
<a id="schemapsd2request"></a>
<a id="schema_psd2Request"></a>
<a id="tocSpsd2request"></a>
<a id="tocspsd2request"></a>

```json
{
  "amount": "48.00",
  "api_key": "abcd1234",
  "api_secret": "Sup3rS3cr3t!!",
  "code_length": 6,
  "country": "GB",
  "lg": "es-es",
  "next_event_wait": 120,
  "number": "447700900000",
  "payee": "Acme Inc",
  "pin_expiry": 240,
  "workflow_id": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(float)|true|none|The decimal amount of the payment to be confirmed, in Euros|
|api_key|[api_key](#schemaapi_key)|true|none|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|api_secret|[api_secret](#schemaapi_secret)|true|none|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|code_length|integer|false|none|The length of the verification code.|
|country|string|false|none|If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.|
|lg|string|false|none|By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.<br>*Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`|
|next_event_wait|integer|false|none|Specifies the wait time in seconds between attempts to deliver the verification code.|
|number|string|true|none|The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|payee|string|true|none|An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.|
|pin_expiry|integer|false|none|How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).|
|workflow_id|integer|false|none|Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).|

#### Enumerated Values

|Property|Value|
|---|---|
|code_length|4|
|code_length|6|
|lg|en-gb|
|lg|bg-bg|
|lg|cs-cz|
|lg|da-dk|
|lg|de-de|
|lg|ee-et|
|lg|el-gr|
|lg|es-es|
|lg|fi-fi|
|lg|fr-fr|
|lg|ga-ie|
|lg|hu-hu|
|lg|it-it|
|lg|lv-lv|
|lg|lt-lt|
|lg|mt-mt|
|lg|nl-nl|
|lg|pl-pl|
|lg|sk-sk|
|lg|sl-si|
|lg|sv-se|
|workflow_id|1|
|workflow_id|2|
|workflow_id|3|
|workflow_id|4|
|workflow_id|5|
|workflow_id|6|
|workflow_id|7|

<h2 id="tocS_requestErrorResponse">requestErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequesterrorresponse"></a>
<a id="schema_requestErrorResponse"></a>
<a id="tocSrequesterrorresponse"></a>
<a id="tocsrequesterrorresponse"></a>

```json
{
  "error_text": "Your request is incomplete and missing the mandatory parameter `number`",
  "network": "244523",
  "request_id": "",
  "status": "2"
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_text|string|false|none|If `status` is non-zero, this explains the error encountered.|
|network|string|false|none|The Network ID of the blocking network, if relevant to the error.|
|request_id|string|false|none|The unique ID of the Verify request. This may be blank in an error situation.|
|status|string|false|none|Code \| Text \| Description<br>-- \| -- \| --<br>0 \| Success \| The request was successfully accepted by Vonage.<br>1 \| Throttled \| You are trying to send more than the maximum of 30 requests per second.<br>2 \| Your request is incomplete and missing the mandatory parameter `$parameter` \| The stated parameter is missing.<br>3 \| Invalid value for parameter `$parameter` \| Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.<br>4 \| Invalid credentials were provided \| The supplied API key or secret in the request is either invalid or disabled.<br>5 \| Internal Error \| An error occurred processing this request in the Cloud Communications Platform.<br>6 \| The Vonage platform was unable to process this message for the following reason: `$reason` \| The request could not be routed.<br>7 \| The number you are trying to verify is blacklisted for verification. \| Returns a `network` property but no `request_id` will be present in the response.<br>8 \| The api_key you supplied is for an account that has been barred from submitting messages. \|<br>9 \| Partner quota exceeded \| Your account does not have sufficient credit to process this request.<br>10 \| Concurrent verifications to the same number are not allowed. \| This will return a `request_id`.<br>15 \| The destination number is not in a supported network \| The request has been rejected. Find out more about this error in the [Knowledge Base](https://help.nexmo.com/hc/en-us/articles/360018406532-Verify-On-demand-Service-to-High-Risk-Countries)<br>20 \| This account does not support the parameter: pin_code. \| Only certain accounts have the ability to set the `pin_code`. Please contact your account manager for more information.<br>29 \| Non-Permitted Destination \| Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status|4|
|status|5|
|status|6|
|status|7|
|status|8|
|status|9|
|status|10|
|status|15|
|status|20|
|status|29|

<h2 id="tocS_requestResponse">requestResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestresponse"></a>
<a id="schema_requestResponse"></a>
<a id="tocSrequestresponse"></a>
<a id="tocsrequestresponse"></a>

```json
{
  "request_id": "abcdef0123456789abcdef0123456789",
  "status": "0"
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|The unique ID of the Verify request. You need this `request_id` for the Verify check.|
|status|string|false|none|Indicates the outcome of the request; zero is success|

<h2 id="tocS_searchErrorResponse">searchErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearcherrorresponse"></a>
<a id="schema_searchErrorResponse"></a>
<a id="tocSsearcherrorresponse"></a>
<a id="tocssearcherrorresponse"></a>

```json
{
  "error_text": "No response found",
  "request_id": "abcdef0123456789abcdef0123456789",
  "status": "IN PROGRESS"
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_text|string|false|none|If `status` is not `SUCCESS`, this message explains the issue encountered.|
|request_id|string|false|none|The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation.|
|status|string|false|none|Code \| Description<br>-- \| --<br>IN PROGRESS \| The search is still in progress.<br>SUCCESS \| Your user entered a correct verification code.<br>FAILED \| Your user entered an incorrect code more than three times.<br>EXPIRED \| Your user did not enter a code before the `pin_expiry` time elapsed.<br>CANCELLED \| The verification process was cancelled by a Verify control request.<br>101 \| You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|IN PROGRESS|
|status|FAILED|
|status|EXPIRED|
|status|CANCELLED|
|status|101|

<h2 id="tocS_searchResponse">searchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_searchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "account_id": "abcdef01",
  "checks": [
    {
      "code": "987654",
      "date_received": "2020-01-01 12:00:00",
      "ip_address": "123.0.0.255",
      "status": "VALID"
    }
  ],
  "currency": "EUR",
  "date_finalized": "2020-01-01 12:00:00",
  "date_submitted": "2020-01-01 12:00:00",
  "estimated_price_messages_sent": "0.03330000",
  "events": [
    {
      "id": "string",
      "type": "tts"
    }
  ],
  "first_event_date": "2020-01-01 12:00:00",
  "last_event_date": "2020-01-01 12:00:00",
  "number": "447700900000",
  "price": "0.10000000",
  "request_id": "abcdef0123456789abcdef0123456789",
  "sender_id": "mySenderId",
  "status": "IN PROGRESS"
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The Vonage account ID the request was for.|
|checks|[object]|false|none|The list of checks made for this verification and their outcomes.|
|currency|string|false|none|The currency code.|
|date_finalized|string|false|none|The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS.|
|date_submitted|string|false|none|The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS.|
|estimated_price_messages_sent|[estimated_price_messages_sent](#schemaestimated_price_messages_sent)|false|none|This field may not be present, depending on your pricing model. The<br>value indicates the cost (in EUR) of the calls made and messages sent<br>for the verification process. This value may be updated during and<br>shortly after the request completes because user input events can<br>overlap with message/call events. When this field is present, the total<br>cost of the verification is the sum of this field and the `price` field.<br>|
|events|[object]|false|none|The events that have taken place to verify this number, and their unique identifiers.|
|first_event_date|string|false|none|The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.|
|last_event_date|string|false|none|The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS.|
|number|string|false|none|The phone number this verification request was used for.|
|price|string|false|none|The cost incurred for this verification request.|
|request_id|string|false|none|The `request_id` that you received in the response to the Verify request and used in the Verify search request.|
|sender_id|string|false|none|The `sender_id` you provided in the Verify request.|
|status|string|false|none|Code \| Description<br>-- \| --<br>IN PROGRESS \| The search is still in progress.<br>SUCCESS \| Your user entered a correct verification code.<br>FAILED \| Your user entered an incorrect code more than three times.<br>EXPIRED \| Your user did not enter a code before the `pin_expiry` time elapsed.<br>CANCELLED \| The verification process was cancelled by a Verify control request.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|IN PROGRESS|
|status|SUCCESS|
|status|FAILED|
|status|EXPIRED|
|status|CANCELLED|

<h2 id="tocS_verifyRequest">verifyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyrequest"></a>
<a id="schema_verifyRequest"></a>
<a id="tocSverifyrequest"></a>
<a id="tocsverifyrequest"></a>

```json
{
  "api_key": "abcd1234",
  "api_secret": "Sup3rS3cr3t!!",
  "brand": "Acme Inc",
  "code_length": 6,
  "country": "GB",
  "lg": "en-us",
  "next_event_wait": 120,
  "number": "447700900000",
  "pin_code": "AKFG-3424",
  "pin_expiry": 240,
  "sender_id": "ACME",
  "workflow_id": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|[api_key](#schemaapi_key)|true|none|You can find your API key in your [account dashboard](https://dashboard.nexmo.com)|
|api_secret|[api_secret](#schemaapi_secret)|true|none|You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)|
|brand|string|true|none|An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."|
|code_length|integer|false|none|The length of the verification code.|
|country|string|false|none|If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you.|
|lg|string|false|none|By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages>|
|next_event_wait|integer|false|none|Specifies the wait time in seconds between attempts to deliver the verification code.|
|number|string|true|none|The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.|
|pin_code|string|false|none|A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.|
|pin_expiry|integer|false|none|How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).|
|sender_id|string|false|none|An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.|
|workflow_id|integer|false|none|Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events).|

#### Enumerated Values

|Property|Value|
|---|---|
|code_length|4|
|code_length|6|
|lg|ar-xa|
|lg|cs-cz|
|lg|cy-cy|
|lg|cy-gb|
|lg|da-dk|
|lg|de-de|
|lg|el-gr|
|lg|en-au|
|lg|en-gb|
|lg|en-in|
|lg|en-us|
|lg|es-es|
|lg|es-mx|
|lg|es-us|
|lg|fi-fi|
|lg|fil-ph|
|lg|fr-ca|
|lg|fr-fr|
|lg|hi-in|
|lg|hu-hu|
|lg|id-id|
|lg|is-is|
|lg|it-it|
|lg|ja-jp|
|lg|ko-kr|
|lg|nb-no|
|lg|nl-nl|
|lg|pl-pl|
|lg|pt-br|
|lg|pt-pt|
|lg|ro-ro|
|lg|ru-ru|
|lg|sv-se|
|lg|th-th|
|lg|tr-tr|
|lg|vi-vn|
|lg|yue-cn|
|lg|zh-cn|
|lg|zh-tw|
|workflow_id|1|
|workflow_id|2|
|workflow_id|3|
|workflow_id|4|
|workflow_id|5|
|workflow_id|6|
|workflow_id|7|
