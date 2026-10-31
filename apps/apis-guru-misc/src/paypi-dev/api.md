<h1 id="emailverify">EmailVerify v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OTP email verification API by PayPI. <br/><br/>
EmailVerify provides a simple way to verify email addresses. We send emails ourselves taking the burden of setting up email systems and tracking codes. <br/><br/>
To learn more about this API, check out [EmailVerify documentation](https://emailverify.paypi.dev/) <br/><br/>

## Authentication
All requests to the EmailVerify API must be authenticated with an API Key. To get an API key, subscribe to the EmailVerify [here](https://app.paypi.dev/subscribe/c2VydmljZTo1OGQxZDNmMy05OWQ5LTQ3ZjYtOWJkNi02OWNkMTY1OGFmOWU=).  \
Set your `Authorization` header to `Bearer YOUR-API-KEY`. 
```
curl
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR-API-KEY" \
...
```

Base URLs:

* <a href="https://ev.apis.paypi.dev">https://ev.apis.paypi.dev</a>

Email: <a href="mailto:hello@paypi.dev">PayPI</a> 
Web: <a href="https://paypi.dev">PayPI</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="emailverify-default">Default</h1>

## Check verification code

> Code samples

```bash
curl https://example.com/checkCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": 123456,
    "email": "test@test.com"
  }'
```

`POST /checkCode`

Checks the user's emailed code is valid. 
If this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.


> Body parameter

```json
{
  "code": 123456,
  "email": "test@test.com"
}
```

<h3 id="check-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» code|body|string|false|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "Given code is not valid",
  "success": false
}
```

> 401 Response

```json
{
  "message": "Authorization header value invalid",
  "success": false
}
```

> 403 Response

```json
{
  "message": "Number of tries exceeded, please request a new code",
  "success": false
}
```

<h3 id="check-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If success is true, the user has given the correct code. If not the code is incorrect. \<br>Check the message for more information<br>|Inline|
|401|Unauthorized|#### Invalid API key<br>|Inline|
|403|Forbidden|#### Tries for this email exceeded. <br>To prevent abuse and brute forcing, we limit the number of checkCode requests for each email address to 20. \<br>This means if more than 20 requests are made you will have to send another code to your user, this will reset the limit.<br>|Inline|

<h3 id="check-verification-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send verification code

> Code samples

```bash
curl https://example.com/sendCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "test@test.com"
  }'
```

`POST /sendCode`

This request send's a code to the given email address, which should be returned to check it is correct.

> Body parameter

```json
{
  "email": "test@test.com"
}
```

<h3 id="send-verification-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "Verification email sent",
  "success": true
}
```

> 400 Response

```json
{
  "message": "Unable to send email - please check the email address and try again",
  "success": false
}
```

> 401 Response

```json
{
  "message": "Authorization header value invalid",
  "success": false
}
```

<h3 id="send-verification-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Email sent|Inline|
|400|Bad Request|Invalid or incorrectly formatted email given|Inline|
|401|Unauthorized|Invalid API key|Inline|

<h3 id="send-verification-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>
