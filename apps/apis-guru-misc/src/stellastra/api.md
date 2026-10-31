<h1 id="stellastra">Stellastra v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Stellastra makes it easy to get reviews for your cybersecurity solution in real-time with its platform-agnostic REST API.

Base URLs:

* <a href="https://stellastra.com/api/">https://stellastra.com/api/</a> - Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.

<a href="https://stellastra.com/terms-and-conditions">Terms of service</a>
Email: <a href="mailto:support@stellastra.com">Stellastra</a> 
Web: <a href="https://stellastra.com/contact-us">Stellastra</a> 

<a href="https://stellastra.com/docs/api">Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.</a>

# Authentication

- HTTP Authentication, scheme: basic Basic auth header, a base64 encoding of the auth_email and key, with a simple colon separating. 

1. base64(auth_email + ":" + key)
2. base64("johnsmith@yourcompany.com:77rOjc2Y2UyYTliMDFjMTY2ODMyNTIyYjAyNDE4YjRi)
3. ImpvaG5zbWl0aEB5b3VyY29tcGFueS5jb206NzdyT2pjMlkyVXlZVGxpTURGak1UWTJPRE15TlRJeVlqQXlOREU0WWpSaQ==

This may already be handled by your HTTPS request library, for example, the Python "requests" library allows for , auth=(admin_email, key), while Axios for Node JS allows auth to be specified as {auth:{username: your_auth_email, password: key}}.

<h1 id="stellastra-default">Default</h1>

## Posts the user's review to Stellastra

> Code samples

```bash
curl 'https://example.com/post-review?user_email=johnsmith%40companyxyz.com&rating=5' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "rating": 5,
    "user_email": "johnsmith@usercompanyxyz.com",
    "user_name": "John"
  }'
```

`POST /post-review`

<a href="https://stellastra.com/docs/api">External documentation</a>

> Body parameter

```json
{
  "rating": 5,
  "user_email": "johnsmith@usercompanyxyz.com",
  "user_name": "John"
}
```

<h3 id="posts-the-users-review-to-stellastra-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_email|query|string|true|User's email to which the review verification will be sent. |
|user_name|query|string|false|The user's name, defaults to empty string "".  Thus, if this is omitted, the email to the user will not use the user's name. |
|rating|query|integer|true|The user's star rating, must be a single integer from [1, 2, 3, 4, 5]|
|body|body|object|true|The request body requires the user_email and rating. The parameter use_name is optional. |
|» rating|body|integer|true|none|
|» user_email|body|string|true|none|
|» user_name|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rating|1|
|rating|2|
|rating|3|
|rating|4|
|rating|5|

> Example responses

> 200 Response

```json
{
  "data": "Review posted successfully"
}
```

> 400 Response

```json
{
  "data": "'user_email' is missing"
}
```

> 401 Response

```json
{
  "data": "Not authorized, authorization header missing or malformed"
}
```

> 403 Response

```json
{
  "data": "The syntax of the user's email is invalid."
}
```

<h3 id="posts-the-users-review-to-stellastra-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.|Inline|
|400|Bad Request|A status code of 400 is returned when a required parameter is mising, such as 'rating' or 'user_email'.|Inline|
|401|Unauthorized|This can appear because the authorization header is missing or malformed, or because the auth email and key pair is not authorized.|Inline|
|403|Forbidden|The 403 response can have many detailed response messages related to the user's email address validation|Inline|

<h3 id="posts-the-users-review-to-stellastra-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>
