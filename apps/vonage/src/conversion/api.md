<h1 id="nexmo-conversion-api">Nexmo Conversion API v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Conversion API allows you to tell Nexmo about the reliability of your 2FA communications. Sending conversion data back to us means that Nexmo can deliver messages faster and more reliably.
The conversion data you send us is confidential: Nexmo does not share it with third parties.
In order to identify the carriers who provide the best performance, Nexmo continually tests the routes we use to deliver SMS and voice calls. Using Adaptive Routing™, Nexmo actively reroutes messages through different carrier routes and ensures faster and more reliable delivery for your messages. The route choice is made using millions of real-time conversion data points.

Base URLs:

* <a href="https://api.nexmo.com/conversions">https://api.nexmo.com/conversions</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@nexmo.com">Nexmo.com</a> 
Web: <a href="https://developer.nexmo.com/">Nexmo.com</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

<a href="https://developer.nexmo.com/api/conversion">External documentation</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **api_key**, in: query. You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)

* API Key (apiSecret)
    - Parameter Name: **api_secret**, in: query. You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)

* API Key (apiSig)
    - Parameter Name: **sig**, in: query. The hash of the request parameters in alphabetical order, a timestamp and the signature secret. For example: `sig=SIGNATURE`

<h1 id="nexmo-conversion-api-sms-conversion">SMS Conversion</h1>

SMS Conversion Request

## Tell Nexmo if your SMS message was successful

<a id="opIdsmsConversion"></a>

> Code samples

```bash
curl "https://api.nexmo.com/sms?message-id=00A0B0C0&delivered=true&timestamp=2020-01-01%2012%3A00%3A00&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -X POST
```

`POST /sms`

Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

<h3 id="tell-nexmo-if-your-sms-message-was-successful-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message-id|query|string|true|The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`|
|delivered|query|boolean|true|Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.<br>**Note**: for curl, use 0 and 1.|
|timestamp|query|string|true|When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.<br>If you do not set this parameter, Nexmo uses the time it receives this request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|delivered|true|
|delivered|false|
|delivered|0|
|delivered|1|

<h3 id="tell-nexmo-if-your-sms-message-was-successful-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Wrong credentials|None|
|402|Payment Required|Conversion has not been enabled for your account|None|
|420|420|Invalid parameters|None|
|423|Locked|Invalid parameters|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, apiKey & apiSig
</aside>

<h1 id="nexmo-conversion-api-voice-conversion">Voice Conversion</h1>

Voice Conversion Request

## Tell Nexmo if your voice call was successful

<a id="opIdvoiceConversion"></a>

> Code samples

```bash
curl "https://api.nexmo.com/voice?message-id=00A0B0C0&delivered=true&timestamp=2020-01-01%2012%3A00%3A00&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -X POST
```

`POST /voice`

Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

<h3 id="tell-nexmo-if-your-voice-call-was-successful-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message-id|query|string|true|The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`|
|delivered|query|boolean|true|Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.<br>**Note**: for curl, use 0 and 1.|
|timestamp|query|string|true|When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.<br>If you do not set this parameter, Nexmo uses the time it receives this request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|delivered|true|
|delivered|false|
|delivered|0|
|delivered|1|

<h3 id="tell-nexmo-if-your-voice-call-was-successful-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Wrong credentials|None|
|402|Payment Required|Conversion has not been enabled for your account|None|
|420|420|Invalid parameters|None|
|423|Locked|Invalid parameters|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret, apiKey & apiSig
</aside>
