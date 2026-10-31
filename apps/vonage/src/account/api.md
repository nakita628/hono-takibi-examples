<h1 id="account-api">Account API v1.0.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enables users to manage their Vonage API Account by programmable means. More information is available here: <https://developer.nexmo.com/account/overview>.

Base URLs:

* <a href="https://api.nexmo.com">https://api.nexmo.com</a>

Web: <a href="https://developer.nexmo.com">Vonage.com</a> 

# Authentication

- HTTP Authentication, scheme: basic Provide an `Authorization` header, with a value of "Basic" followed by the result of base64-encoding your Vonage API key and secret separated by a colon. You can find your API key and secret on the [dashboard](https://dashboard.nexmo.com) and more information is available [on the developer portal](https://developer.nexmo.com/concepts/guides/authentication#header-based-api-key-and-secret-authentication).
If your API key were aaa012 and your API secret were abc123456789 then your HTTP header would be: `Authorization: Basic YWFhMDEyOmFiYzEyMzQ1Njc4OQ==`

<h1 id="account-api-balance">Balance</h1>

This section shows how you can query the current balance of your account, and if you have auto-reload enabled how to trigger a top-up to your account without waiting for the next balance check.

## Get Account Balance

<a id="opIdgetAccountBalance"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/account/get-balance?api_key=abcd1234&api_secret=ABCDEFGH01234abc' \
  -H 'Accept: application/json'
```

`GET /account/get-balance`

Retrieve the current balance of your Vonage API account

<h3 id="get-account-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|api_secret|query|string|true|Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)|

> Example responses

> 200 Response

```json
{
  "autoReload": false,
  "value": 10.171275
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="get-account-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current balance of your account|[accountBalance](#schemaaccountbalance)|
|401|Unauthorized|Not Authorised. You must supply your `api_key` and `api_secret` as query parameters to this request|[ErrorAuthenticationFailedAccountBalance](#schemaerrorauthenticationfailedaccountbalance)|

<aside class="success">
This operation does not require authentication
</aside>

## Top Up Account Balance

<a id="opIdtopUpAccountBalance"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/account/top-up?api_key=abcd1234&api_secret=ABCDEFGH01234abc' \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'trx=8ef2447e69604f642ae59363aa5f781b'
```

`POST /account/top-up`

You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled.
Your account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.

<a href="https://help.nexmo.com/hc/en-us/articles/205603248-How-do-I-set-up-automatic-payments-using-PayPal-or-credit-card-">Read more about automatic payments on the Knowledgebase</a>

> Body parameter

```yaml
trx: "8ef2447e69604f642ae59363aa5f781b"
```

<h3 id="top-up-account-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|api_secret|query|string|true|Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|body|body|[topupRequest](#schematopuprequest)|true|none|
|» trx|body|string|true|The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.|

> Example responses

> 200 Response

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

> 401 Response

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

<h3 id="top-up-account-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[success](#schemasuccess)|
|401|Unauthorized|Not Authorised|Inline|

<h3 id="top-up-account-balance-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorAuthenticationFailed](#schemaerrorauthenticationfailed)|false|none|Authentication Failed|
|*oneOf*|[ErrorAutoReloadNotEnabled](#schemaerrorautoreloadnotenabled)|false|none|Auto-Reload not enabled|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="account-api-configuration">Configuration</h1>

Manage the settings on your account

## Register an email sender

<a id="opIdregisterSender"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/account/register-sender?api_key=abcd1234&api_secret=ABCDEFGH01234abc' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "application_ids": [
      "6ec9eb7de1d34e77ac2c0ad597c9554a",
      "5dba5838689f402dba0c77957e2181f3"
    ],
    "name": "my-email-link",
    "provider": "email",
    "value": "bob@company.com"
  }'
```

`POST /account/register-sender`

Register an email sender with an API Key for using email with Verify V2.

> Body parameter

```json
{
  "application_ids": [
    "6ec9eb7de1d34e77ac2c0ad597c9554a",
    "5dba5838689f402dba0c77957e2181f3"
  ],
  "name": "my-email-link",
  "provider": "email",
  "value": "bob@company.com"
}
```

<h3 id="register-an-email-sender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|api_secret|query|string|true|Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|body|body|[registerEmailRequest](#schemaregisteremailrequest)|true|none|
|» application_ids|body|object|false|An optional array of additional ApplicationID's that the value is to be assigned to.|
|» name|body|string|false|An optional name to be attached to this binding|
|» provider|body|string(enum)|true|The delivery method by which the value would be assigned. Always `email`|
|» value|body|string(email)|true|The email adress to attach to the application(s)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|email|

> Example responses

> 200 Response

```json
{
  "application_ids": [
    "6ec9eb7de1d34e77ac2c0ad597c9554a",
    "5dba5838689f402dba0c77957e2181f3"
  ],
  "name": "optionalName",
  "provider": "email",
  "value": "alice@company.com"
}
```

<h3 id="register-an-email-sender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[registerEmailResponse](#schemaregisteremailresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Change Account Settings

<a id="opIdchangeAccountSettings"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/account/settings?api_key=abcd1234&api_secret=ABCDEFGH01234abc' \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'drCallBackUrl=https%3A%2F%2Fexample.com%2Fwebhooks%2Fdelivery-receipt&moCallBackUrl=https%3A%2F%2Fexample.com%2Fwebhooks%2Finbound-sms'
```

`POST /account/settings`

Update the default webhook URLs associated with your account:
  * Callback URL for incoming SMS messages
  * Callback URL for delivery receipts

Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.

> Body parameter

```yaml
drCallBackUrl: "https://example.com/webhooks/delivery-receipt"
moCallBackUrl: "https://example.com/webhooks/inbound-sms"
```

<h3 id="change-account-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|true|Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|api_secret|query|string|true|Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)|
|body|body|[accountSettingsRequest](#schemaaccountsettingsrequest)|false|none|
|» drCallBackUrl|body|string(url)|false|The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.<br>Send an empty string to unset this value.|
|» moCallBackUrl|body|string(url)|false|The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.<br>Send an empty string to unset this value.|

> Example responses

> 200 Response

```json
"{\n  \"mo-callback-url\": \"https:\\/\\/example.com\\/webhooks\\/inbound-sms\",\n  \"dr-callback-url\": \"https:\\/\\/example.com\\/webhooks\\/delivery-receipt\",\n  \"max-outbound-request\": 30,\n  \"max-inbound-request\": 30,\n  \"max-calls-per-second\": 30\n}"
```

<h3 id="change-account-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Settings were updated if supplied, the details of the current settings are included in the response.|[accountSettings](#schemaaccountsettings)|
|401|Unauthorized|Not Authorised. You must supply your `api_key` and `api_secret` as query parameters to this request|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="account-api-secret-management">Secret Management</h1>

Many of the Vonage APIs are accessed using an API key and secret. It is recommended that you change or "rotate" your secrets from time to time for security purposes. This section provides the API interface for achieving this.
Note: to work on secrets for your secondary accounts, you may authenticate with your primary credentials and supply the secondary API keys as URL parameters to these API endpoints.

## Retrieve API Secrets

<a id="opIdretrieveAPISecrets"></a>

> Code samples

```bash
curl https://api.nexmo.com/accounts/abcd1234/secrets \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /accounts/{api_key}/secrets`

<h3 id="retrieve-api-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|The API key to manage secrets for|

> Example responses

> 200 Response

```json
"{\n  \"_links\": {\n    \"self\": {\n      \"href\": \"/accounts/abcd1234/secrets\"\n    }\n  },\n  \"_embedded\": {\n    \"secrets\": [\n      {\n        \"_links\": {\n          \"self\": {\n            \"href\": \"/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef\"\n          }\n        },\n        \"id\": \"01234567-aaaa-bbbb-cccc-defdefdefdef\",\n        \"created_at\": \"2018-12-03T10:07:23Z\"\n      }\n    ]\n  }\n}"
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "API key 'abc123' not found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-api-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of your current API secrets|Inline|
|401|Unauthorized|Credentials are missing or invalid|Inline|
|404|Not Found|Item not found|[ErrorAPIKeyNotFound](#schemaerrorapikeynotfound)|

<h3 id="retrieve-api-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|The single `secrets` key returns an array of API secrets|
|» secrets|[[secretInfo](#schemasecretinfo)]|false|none|Array of API secrets|
|_links|[secretMgmtLinks](#schemasecretmgmtlinks)|false|none|Links related to this resource|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error, including the expected value|
|instance|string|false|none|Internal Trace ID|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create API Secret

<a id="opIdcreateAPISecret"></a>

> Code samples

```bash
curl https://api.nexmo.com/accounts/abcd1234/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "secret": "example-4PI-secret"
  }'
```

`POST /accounts/{api_key}/secrets`

> Body parameter

```json
{
  "secret": "example-4PI-secret"
}
```

<h3 id="create-api-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|The API key to manage secrets for|
|body|body|[createSecretRequest](#schemacreatesecretrequest)|true|none|
|» secret|body|string|true|The new secret must follow these rules:<br><br>* minimum 8 characters<br>* maximum 25 characters<br>* minimum 1 lower case character<br>* minimum 1 upper case character<br>* minimum 1 digit<br>|

> Example responses

> 201 Response

```json
"{\n  \"_links\": {\n    \"self\": {\n      \"href\": \"/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef\"\n    }\n  },\n  \"id\": \"01234567-aaaa-bbbb-cccc-defdefdefdef\",\n  \"created_at\": \"2018-12-03T10:07:23Z\"\n}"
```

> 400 Response

```json
{
  "detail": "The request failed due to secret validation errors",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "invalid_parameters": [
    {
      "name": "secret",
      "reason": "Does not meet complexity requirements"
    }
  ],
  "title": "Bad Request",
  "type": "https://developer.nexmo.com/api-errors/account/secret-management#validation"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "API key 'abc123' not found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="create-api-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Secret created|[secretInfo](#schemasecretinfo)|
|400|Bad Request|Bad request. This usually indicates valid data but can also occur when a user has exceeded the allowed number of secrets on their account.|Inline|
|401|Unauthorized|Credentials are missing or invalid|Inline|
|404|Not Found|Item not found|[ErrorAPIKeyNotFound](#schemaerrorapikeynotfound)|

<h3 id="create-api-secret-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error, including the API key supplied|
|instance|string|false|none|Internal Trace ID|
|invalid_parameters|[object]|false|none|Array of the parameters that are considered invalid, and explanations of why|
|» name|string|false|none|Field name|
|» reason|string|false|none|Explanation of why parameter is considered invalid|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error, including the expected value|
|instance|string|false|none|Internal Trace ID|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve one API Secret

<a id="opIdretrieveAPISecret"></a>

> Code samples

```bash
curl https://api.nexmo.com/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /accounts/{api_key}/secrets/{secret_id}`

<h3 id="retrieve-one-api-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|The API key to manage secrets for|
|secret_id|path|string|true|ID of the API Secret|

> Example responses

> 200 Response

```json
"{\n  \"_links\": {\n    \"self\": {\n      \"href\": \"/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef\"\n    }\n  },\n  \"id\": \"01234567-aaaa-bbbb-cccc-defdefdefdef\",\n  \"created_at\": \"2018-12-03T10:07:23Z\"\n}"
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "API key 'abc123' not found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="retrieve-one-api-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API secret response|[secretInfo](#schemasecretinfo)|
|401|Unauthorized|Credentials are missing or invalid|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="retrieve-one-api-secret-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error, including the expected value|
|instance|string|false|none|Internal Trace ID|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorAPIKeyNotFound](#schemaerrorapikeynotfound)|false|none|This API key was not recognised|
|*oneOf*|[ErrorSecretIDNotFound](#schemaerrorsecretidnotfound)|false|none|This secret ID was not recognised|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Revoke an API Secret

<a id="opIdrevokeAPISecret"></a>

> Code samples

```bash
curl https://api.nexmo.com/accounts/abcd1234/secrets/01234567-aaaa-bbbb-cccc-defdefdefdef \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /accounts/{api_key}/secrets/{secret_id}`

<h3 id="revoke-an-api-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|path|string|true|The API key to manage secrets for|
|secret_id|path|string|true|ID of the API Secret|

> Example responses

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "Can not delete the last secret. The account must always have at least 1 secret active at any time",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Secret Deletion Forbidden",
  "type": "https://developer.nexmo.com/api-errors/account/secret-management#delete-last-secret"
}
```

> 404 Response

```json
{
  "detail": "API key 'abc123' not found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

<h3 id="revoke-an-api-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Revoked secret response (without body content)|None|
|401|Unauthorized|Credentials are missing or invalid|Inline|
|403|Forbidden|Operation forbidden by permissions or because this is the only API secret and you are required to have at least one.|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="revoke-an-api-secret-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error, including the expected value|
|instance|string|false|none|Internal Trace ID|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|More detail regarding this error|
|instance|string|false|none|Internal Trace ID|
|title|string|false|none|Description of the error|
|type|string|false|none|URL for further information|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorAPIKeyNotFound](#schemaerrorapikeynotfound)|false|none|This API key was not recognised|
|*oneOf*|[ErrorSecretIDNotFound](#schemaerrorsecretidnotfound)|false|none|This secret ID was not recognised|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_ErrorAPIKeyNotFound">ErrorAPIKeyNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaerrorapikeynotfound"></a>
<a id="schema_ErrorAPIKeyNotFound"></a>
<a id="tocSerrorapikeynotfound"></a>
<a id="tocserrorapikeynotfound"></a>

```json
{
  "detail": "API key 'abc123' not found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid API Key",
  "type": "https://developer.nexmo.com/api-errors#invalid-api-key"
}
```

This API key was not recognised

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|More detail regarding this error, including the API key supplied|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Description of the error|
|type|string|true|none|URL for further information|

<h2 id="tocS_ErrorAuthenticationFailed">ErrorAuthenticationFailed</h2>
<!-- backwards compatibility -->
<a id="schemaerrorauthenticationfailed"></a>
<a id="schema_ErrorAuthenticationFailed"></a>
<a id="tocSerrorauthenticationfailed"></a>
<a id="tocserrorauthenticationfailed"></a>

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

Authentication Failed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|object|false|none|none|
|error-code-label|object|false|none|none|

<h2 id="tocS_ErrorAuthenticationFailedAccountBalance">ErrorAuthenticationFailedAccountBalance</h2>
<!-- backwards compatibility -->
<a id="schemaerrorauthenticationfailedaccountbalance"></a>
<a id="schema_ErrorAuthenticationFailedAccountBalance"></a>
<a id="tocSerrorauthenticationfailedaccountbalance"></a>
<a id="tocserrorauthenticationfailedaccountbalance"></a>

```json
{
  "error-code": "401",
  "error-code-label": "authentication failed"
}
```

Authentication Failed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|object|false|none|none|
|error-code-label|object|false|none|none|

<h2 id="tocS_ErrorAutoReloadNotEnabled">ErrorAutoReloadNotEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaerrorautoreloadnotenabled"></a>
<a id="schema_ErrorAutoReloadNotEnabled"></a>
<a id="tocSerrorautoreloadnotenabled"></a>
<a id="tocserrorautoreloadnotenabled"></a>

```json
{
  "error-code": "401",
  "error-code-label": "not auto-reload enabled"
}
```

Auto-Reload not enabled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|object|false|none|none|
|error-code-label|object|false|none|none|

<h2 id="tocS_ErrorSecretIDNotFound">ErrorSecretIDNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaerrorsecretidnotfound"></a>
<a id="schema_ErrorSecretIDNotFound"></a>
<a id="tocSerrorsecretidnotfound"></a>
<a id="tocserrorsecretidnotfound"></a>

```json
{
  "detail": "ID '07239aeb-d756-4c32-a1de-cf64f8b21827' could not be found",
  "instance": "bf0ca0bf927b3b52e3cb03217e1a1ddf",
  "title": "Invalid ID",
  "type": "https://developer.nexmo.com/api-errors#invalid-id"
}
```

This secret ID was not recognised

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|More detail regarding this error, including the secret ID supplied|
|instance|string|true|none|Internal Trace ID|
|title|string|true|none|Description of the error|
|type|string|true|none|URL for further information|

<h2 id="tocS_accountBalance">accountBalance</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalance"></a>
<a id="schema_accountBalance"></a>
<a id="tocSaccountbalance"></a>
<a id="tocsaccountbalance"></a>

```json
{
  "autoReload": false,
  "value": 10.28
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoReload|boolean|false|none|Whether the account has auto-reloading enabled|
|value|number|false|none|The balance of the account, in EUR|

#### Enumerated Values

|Property|Value|
|---|---|
|autoReload|true|
|autoReload|false|

<h2 id="tocS_accountSettings">accountSettings</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettings"></a>
<a id="schema_accountSettings"></a>
<a id="tocSaccountsettings"></a>
<a id="tocsaccountsettings"></a>

```json
{
  "dr-callback-url": "https://example.com/webhooks/delivery-receipt",
  "max-calls-per-second": 30,
  "max-inbound-request": 30,
  "max-outbound-request": 30,
  "mo-callback-url": "https://example.com/webhooks/inbound-sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dr-callback-url|string(url)|false|none|The current or updated delivery receipt webhook URI|
|max-calls-per-second|integer|false|none|The maximum number of API calls per second.|
|max-inbound-request|integer|false|none|The maximum number of inbound messages per second.|
|max-outbound-request|integer|false|none|The maximum number of outbound messages per second.|
|mo-callback-url|string(url)|false|none|The current or updated inbound message webhook URI|

<h2 id="tocS_accountSettingsRequest">accountSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsettingsrequest"></a>
<a id="schema_accountSettingsRequest"></a>
<a id="tocSaccountsettingsrequest"></a>
<a id="tocsaccountsettingsrequest"></a>

```json
{
  "drCallBackUrl": "https://example.com/webhooks/delivery-receipt",
  "moCallBackUrl": "https://example.com/webhooks/inbound-sms"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drCallBackUrl|string(url)|false|none|The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.<br>Send an empty string to unset this value.|
|moCallBackUrl|string(url)|false|none|The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.<br>Send an empty string to unset this value.|

<h2 id="tocS_createSecretRequest">createSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesecretrequest"></a>
<a id="schema_createSecretRequest"></a>
<a id="tocScreatesecretrequest"></a>
<a id="tocscreatesecretrequest"></a>

```json
{
  "secret": "example-4PI-secret"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|The new secret must follow these rules:<br><br>* minimum 8 characters<br>* maximum 25 characters<br>* minimum 1 lower case character<br>* minimum 1 upper case character<br>* minimum 1 digit<br>|

<h2 id="tocS_registerEmailRequest">registerEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisteremailrequest"></a>
<a id="schema_registerEmailRequest"></a>
<a id="tocSregisteremailrequest"></a>
<a id="tocsregisteremailrequest"></a>

```json
{
  "application_ids": [
    "6ec9eb7de1d34e77ac2c0ad597c9554a",
    "5dba5838689f402dba0c77957e2181f3"
  ],
  "name": "my-email-link",
  "provider": "email",
  "value": "bob@company.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_ids|object|false|none|An optional array of additional ApplicationID's that the value is to be assigned to.|
|name|string|false|none|An optional name to be attached to this binding|
|provider|string(enum)|true|none|The delivery method by which the value would be assigned. Always `email`|
|value|string(email)|true|none|The email adress to attach to the application(s)|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|email|

<h2 id="tocS_registerEmailResponse">registerEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisteremailresponse"></a>
<a id="schema_registerEmailResponse"></a>
<a id="tocSregisteremailresponse"></a>
<a id="tocsregisteremailresponse"></a>

```json
{
  "application_ids": [
    "6ec9eb7de1d34e77ac2c0ad597c9554a",
    "5dba5838689f402dba0c77957e2181f3"
  ],
  "name": "optionalName",
  "provider": "email",
  "value": "alice@company.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_ids|[string]|false|none|An array of ApplicationID strings attached to the value provided.|
|name|string|false|none|An optional name to be attached to this binding|
|provider|string(enum)|false|none|Enum identifer of provider type.|
|value|string|false|none|Value given to the provider to attach to the Application IDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|email|

<h2 id="tocS_secretInfo">secretInfo</h2>
<!-- backwards compatibility -->
<a id="schemasecretinfo"></a>
<a id="schema_secretInfo"></a>
<a id="tocSsecretinfo"></a>
<a id="tocssecretinfo"></a>

```json
{
  "_links": {
    "self": {
      "href": "string"
    }
  },
  "created_at": "2017-03-02T16:34:49Z",
  "id": "ad6dc56f-07b5-46e1-a527-85530e625800"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[secretMgmtLinks](#schemasecretmgmtlinks)|false|none|Links related to this resource|
|created_at|string|false|none|Creation date/time for this secret|
|id|string|false|none|Secret ID|

<h2 id="tocS_secretMgmtLinks">secretMgmtLinks</h2>
<!-- backwards compatibility -->
<a id="schemasecretmgmtlinks"></a>
<a id="schema_secretMgmtLinks"></a>
<a id="tocSsecretmgmtlinks"></a>
<a id="tocssecretmgmtlinks"></a>

```json
{
  "self": {
    "href": "string"
  }
}
```

Links related to this resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|false|none|This resource|

<h2 id="tocS_success">success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
{
  "error-code": "200",
  "error-code-label": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error-code|object|false|none|none|
|error-code-label|object|false|none|none|

<h2 id="tocS_topupRequest">topupRequest</h2>
<!-- backwards compatibility -->
<a id="schematopuprequest"></a>
<a id="schema_topupRequest"></a>
<a id="tocStopuprequest"></a>
<a id="tocstopuprequest"></a>

```json
{
  "trx": "8ef2447e69604f642ae59363aa5f781b"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trx|string|true|none|The transaction reference of the transaction when balance was added and auto-reload was enabled on your account.|
