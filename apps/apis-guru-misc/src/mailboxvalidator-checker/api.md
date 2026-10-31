<h1 id="mailboxvalidator-free-email-checker">MailboxValidator Free Email Checker v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The MailboxValidator Free Email Checker checks if a single email address is from a free email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-freem for further information.

Base URLs:

* <a href="https://api.mailboxvalidator.com/">https://api.mailboxvalidator.com/</a>

<h1 id="mailboxvalidator-free-email-checker-default">Default</h1>

## get/v1/email/free

> Code samples

```bash
curl 'https://example.com/v1/email/free?email=string&key=string' \
  -H 'Accept: application/json'
```

`GET /v1/email/free`

The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

<h3 id="getv1emailfree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Return the result in json (default) or xml format.|
|email|query|string|true|The email address to check if is from a free email provider.|
|key|query|string|true|API key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"email_address\":\"\",\"is_free\":\"\",\"credits_available\":\"\",\"error_code\":\"\",\"error_message\":\"\"}"
```

<h3 id="getv1emailfree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|free email checker response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
