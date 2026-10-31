<h1 id="mailboxvalidator-email-validation">MailboxValidator Email Validation v0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.

Base URLs:

* <a href="https://api.mailboxvalidator.com">https://api.mailboxvalidator.com</a>

<h1 id="mailboxvalidator-email-validation-default">Default</h1>

## get/v1/validation/single

> Code samples

```bash
curl 'https://example.com/v1/validation/single?email=string&key=string' \
  -H 'Accept: application/json'
```

`GET /v1/validation/single`

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

<h3 id="getv1validationsingle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Return the result in json (default) or xml format.|
|email|query|string|true|The email address to be validated.|
|key|query|string|true|API key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"email_address\":\"\",\"domain\":\"\",\"is_free\":\"\",\"is_syntax\":\"\",\"is_domain\":\"\",\"is_smtp\":\"\",\"is_verified\":\"\",\"is_server_down\":\"\",\"is_greylisted\":\"\",\"is_disposable\":\"\",\"is_suppressed\":\"\",\"is_role\":\"\",\"is_high_risk\":\"\",\"is_catchall\":\"\",\"mailboxvalidator_score\":\"\",\"time_taken\":0,\"status\":\"\",\"credits_available\":\"\",\"error_code\":\"100\",\"error_message\":\"Missing parameter.\"}"
```

<h3 id="getv1validationsingle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|single email validation response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
