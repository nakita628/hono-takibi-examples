<h1 id="mailboxvalidator-disposable-email-checker">MailboxValidator Disposable Email Checker v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The MailboxValidator Disposable Email Checker API checks if a single email address is from a disposable email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-disposable for further information.

Base URLs:

* <a href="https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0">https://virtserver.swaggerhub.com/mailboxvalidator/MailboxValidator-Disposable-Email-Checker/1.0.0</a> - SwaggerHub API Auto Mocking

* <a href="https://api.mailboxvalidator.com/">https://api.mailboxvalidator.com/</a>

<h1 id="mailboxvalidator-disposable-email-checker-default">Default</h1>

## get/v1/email/disposable

> Code samples

```bash
curl 'https://example.com/v1/email/disposable?email=string&key=string' \
  -H 'Accept: application/json'
```

`GET /v1/email/disposable`

The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

<h3 id="getv1emaildisposable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Return the result in json (default) or xml format.|
|email|query|string|true|The email address to check if is from a disposable email provider.|
|key|query|string|true|API key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"email_address\":\"\",\"is_disposable\":\"\",\"credits_available\":\"\",\"error_code\":\"\",\"error_message\":\"\"}"
```

<h3 id="getv1emaildisposable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|disposable email checker response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
