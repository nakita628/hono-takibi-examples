<h1 id="fraudlabs-pro-sms-verification">FraudLabs Pro SMS Verification v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Send an SMS with verification code and a custom message for authentication purpose. It helps merchants to minimize chargebacks and fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

Base URLs:

* <a href="https://api.fraudlabspro.com">https://api.fraudlabspro.com</a> - Send an SMS with verification code and a custom message for authentication purpose.

* <a href="https://api.fraudlabspro.com">https://api.fraudlabspro.com</a> - Verify that an OTP sent by the Send SMS Verification API is valid.

<h1 id="fraudlabs-pro-sms-verification-default">Default</h1>

## get/v1/verification/result

> Code samples

```bash
curl 'https://example.com/v1/verification/result?tran_id=string&key=string&otp=string' \
  -H 'Accept: application/json'
```

`GET /v1/verification/result`

Verify that an OTP sent by the Send SMS Verification API is valid.

<h3 id="getv1verificationresult-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tran_id|query|string|true|The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.|
|key|query|string|true|FraudLabs Pro API key.|
|format|query|string|false|Returns the API response in json (default) or xml format.|
|otp|query|string|true|The OTP that was sent to the recipient’s phone.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"result\":\"\",\"error\":\"\"}"
```

<h3 id="getv1verificationresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get verification response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## post/v1/verification/send

> Code samples

```bash
curl 'https://example.com/v1/verification/send?tel=string&key=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/verification/send`

Send an SMS with verification code and a custom message for authentication purpose.

<h3 id="postv1verificationsend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country_code|query|string|false|ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.|
|format|query|string|false|Returns the API response in json (default) or xml format.|
|tel|query|string|true|The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.|
|key|query|string|true|FraudLabs Pro API key.|
|mesg|query|string|false|The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"tran_id\":\"\",\"credits_remaining\":\"0\",\"error\":\"\"}"
```

<h3 id="postv1verificationsend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|send verification response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
