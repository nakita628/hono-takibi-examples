<h1 id="kumpeapps-api">KumpeApps API v5.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

KKid API. Due to security concerns all calls to this API requires authentication. If you have access then you may use your KumpeApps username/password to authenticate. To gain access please use the contact developer link below.

Base URLs:

* <a href="https://restapi.kumpeapps.com/v5">https://restapi.kumpeapps.com/v5</a> - Production Server

* <a href="https://restapi.preprod.kumpeapps.com/v5">https://restapi.preprod.kumpeapps.com/v5</a> - Pre-Production Server

<a href="https://app.termly.io/document/terms-of-use-for-website/27691a60-60fc-4eff-943f-ca52df024bfe">Terms of service</a>
Email: <a href="mailto:helpdesk@kumpeapps.com">helpdesk@kumpeapps.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (app_key)
    - Parameter Name: **X-Auth**, in: header.

* API Key (auth_key)
    - Parameter Name: **X-Auth**, in: header.

<h1 id="kumpeapps-api-authentication">authentication</h1>

Authenticate KumpeApps users (required to get apiKey)

## Deactivate app key

<a id="opIdappkey_put"></a>

> Code samples

```bash
curl 'https://example.com/appkey?app_key=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /appkey`

<aside class="warning">
This operation is deprecated
</aside>

Pass your app key to deactivate the key

<h3 id="deactivate-app-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_key|query|string|true|app key to deactivate|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="deactivate-app-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|App key deactivated|[inline_response_202](#schemainline_response_202)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Request app key

<a id="opIdappkey_post"></a>

> Code samples

```bash
curl 'https://example.com/appkey?username=string&password=password&supportsYubikey=true' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /appkey`

<aside class="warning">
This operation is deprecated
</aside>

Request a new app key by passing username and password for app account

<h3 id="request-app-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Username assigned to your app|
|password|query|string(password)|true|Password assigned to your app|
|supportsYubikey|query|boolean|true|App supports YubiKey OTP|

> Example responses

> 201 Response

```json
{
  "app_key": "8765futybkunj98ho7gi6tybkuhj",
  "success": true
}
```

<h3 id="request-app-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|app key created|[inline_response_201](#schemainline_response_201)|

<aside class="success">
This operation does not require authentication
</aside>

## Compromise app key

<a id="opIdappkey_patch"></a>

> Code samples

```bash
curl 'https://example.com/appkey?app_key=string' \
  -X PATCH \
  -H 'Accept: application/json'
```

`PATCH /appkey`

<aside class="warning">
This operation is deprecated
</aside>

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

<h3 id="compromise-app-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_key|query|string|true|compromised app key|
|comments|query|string|false|Comments (like how was this compromised)|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="compromise-app-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|App key deactivated|[inline_response_202](#schemainline_response_202)|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate app key

<a id="opIdauth_appkey_put"></a>

> Code samples

```bash
curl 'https://example.com/authentication/appkey?app_key=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /authentication/appkey`

Pass your app key to deactivate the key

<h3 id="deactivate-app-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_key|query|string|true|app key to deactivate|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="deactivate-app-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|App key deactivated|[inline_response_202](#schemainline_response_202)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Request app key

<a id="opIdauth_appkey_post"></a>

> Code samples

```bash
curl 'https://example.com/authentication/appkey?username=string&password=password&supportsYubikey=true' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /authentication/appkey`

Request a new app key by passing username and password for app account

<h3 id="request-app-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Username assigned to your app|
|password|query|string(password)|true|Password assigned to your app|
|supportsYubikey|query|boolean|true|App supports YubiKey OTP|

> Example responses

> 201 Response

```json
{
  "app_key": "8765futybkunj98ho7gi6tybkuhj",
  "success": true
}
```

<h3 id="request-app-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|app key created|[inline_response_201](#schemainline_response_201)|

<aside class="success">
This operation does not require authentication
</aside>

## Compromise app key

<a id="opIdauth_appkey_patch"></a>

> Code samples

```bash
curl 'https://example.com/authentication/appkey?app_key=string' \
  -X PATCH \
  -H 'Accept: application/json'
```

`PATCH /authentication/appkey`

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

<h3 id="compromise-app-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_key|query|string|true|compromised app key|
|comments|query|string|false|Comments (like how was this compromised)|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="compromise-app-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|App key deactivated|[inline_response_202](#schemainline_response_202)|

<aside class="success">
This operation does not require authentication
</aside>

## Request auth key for user (login user)

<a id="opIdauth_authkey_get"></a>

> Code samples

```bash
curl 'https://example.com/authentication/authkey?username=string&password=password' \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /authentication/authkey`

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

<h3 id="request-auth-key-for-user-login-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Authenticated username|
|password|query|string(password)|true|Authenticated password|
|otp|query|string(password)|false|YubiKey OTP (if configured for user)|
|deviceName|query|string|false|User's device name|
|identifierForVendor|query|string|false|identifierForVendor for User's Device (if app is iOS)|

> Example responses

> 200 Response

```json
{
  "auth_key": "8ou7jyubj878h7iunk",
  "success": true
}
```

> 403 Response

```json
{
  "error": "Access Denied",
  "success": false
}
```

> 449 Response

```json
{
  "message": "OTP Required is configured for this User. Retry login with OTP",
  "success": false
}
```

<h3 id="request-auth-key-for-user-login-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Authenticated Sucessfully|[inline_response_201_1](#schemainline_response_201_1)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|
|403|Forbidden|Access Denied|[403](#schema403)|
|449|449|OTP required but not supplied. Please resubmit request with OTP|[449](#schema449)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Deactivate auth key (logout)

<a id="opIdauth_authkey_put"></a>

> Code samples

```bash
curl 'https://example.com/authentication/authkey?auth_key=password' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /authentication/authkey`

Deactivate auth key for user logging them out of your application

<h3 id="deactivate-auth-key-logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_key|query|string(password)|true|auth key to logout|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="deactivate-auth-key-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[inline_response_202](#schemainline_response_202)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Request auth key for user (login user)

<a id="opIdauth_authkey_post"></a>

> Code samples

```bash
curl 'https://example.com/authentication/authkey?username=string&password=password' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /authentication/authkey`

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

<h3 id="request-auth-key-for-user-login-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Authenticated username|
|password|query|string(password)|true|Authenticated password|
|otp|query|string(password)|false|YubiKey OTP (if configured for user)|

> Example responses

> 200 Response

```json
{
  "auth_key": "8ou7jyubj878h7iunk",
  "success": true
}
```

> 403 Response

```json
{
  "error": "Access Denied",
  "success": false
}
```

> 449 Response

```json
{
  "message": "OTP Required is configured for this User. Retry login with OTP",
  "success": false
}
```

<h3 id="request-auth-key-for-user-login-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Authenticated Sucessfully|[inline_response_201_1](#schemainline_response_201_1)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|
|403|Forbidden|Access Denied|[403](#schema403)|
|449|449|OTP required but not supplied. Please resubmit request with OTP|[449](#schema449)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Compromise auth key

<a id="opIdauth_authkey_patch"></a>

> Code samples

```bash
curl 'https://example.com/authentication/authkey?auth_key=password' \
  -X PATCH \
  -H 'Accept: application/json'
```

`PATCH /authentication/authkey`

Mark user auth key as compromised

<h3 id="compromise-auth-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_key|query|string(password)|true|auth key to mark as compromised|
|comments|query|string|false|Comments (like how was this compromised)|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="compromise-auth-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Auth key marked as compromised and locked|[inline_response_202](#schemainline_response_202)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|

<aside class="success">
This operation does not require authentication
</aside>

## Verifies YubiKey OTP for authenticated user

<a id="opIdauth_verifyotp_get"></a>

> Code samples

```bash
curl 'https://example.com/authentication/verifyotp?otp=string' \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /authentication/verifyotp`

Verifies YubiKey OTP for authenticated user

<h3 id="verifies-yubikey-otp-for-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|otp|query|string|true|YubiKey OTP code|

> Example responses

> 403 Response

```json
{
  "error": "Access Denied",
  "success": false
}
```

<h3 id="verifies-yubikey-otp-for-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Authenticated Sucessfully|None|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey/AuthKey|None|
|403|Forbidden|Access Denied|[403](#schema403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Request auth key for user (login user)

<a id="opIdauthkey_get"></a>

> Code samples

```bash
curl 'https://example.com/authkey?username=string&password=password' \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /authkey`

<aside class="warning">
This operation is deprecated
</aside>

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

<h3 id="request-auth-key-for-user-login-user-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Authenticated username|
|password|query|string(password)|true|Authenticated password|
|otp|query|string(password)|false|YubiKey OTP (if configured for user)|

> Example responses

> 200 Response

```json
{
  "auth_key": "8ou7jyubj878h7iunk",
  "success": true
}
```

> 403 Response

```json
{
  "error": "Access Denied",
  "success": false
}
```

> 449 Response

```json
{
  "message": "OTP Required is configured for this User. Retry login with OTP",
  "success": false
}
```

<h3 id="request-auth-key-for-user-login-user-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Authenticated Sucessfully|[inline_response_201_1](#schemainline_response_201_1)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|
|403|Forbidden|Access Denied|[403](#schema403)|
|449|449|OTP required but not supplied. Please resubmit request with OTP|[449](#schema449)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Deactivate auth key (logout)

<a id="opIdauthkey_put"></a>

> Code samples

```bash
curl 'https://example.com/authkey?auth_key=password' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /authkey`

<aside class="warning">
This operation is deprecated
</aside>

Deactivate auth key for user logging them out of your application

<h3 id="deactivate-auth-key-logout-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_key|query|string(password)|true|auth key to logout|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="deactivate-auth-key-logout-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[inline_response_202](#schemainline_response_202)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Request auth key for user (login user)

<a id="opIdauthkey_post"></a>

> Code samples

```bash
curl 'https://example.com/authkey?username=string&password=password' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /authkey`

<aside class="warning">
This operation is deprecated
</aside>

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

<h3 id="request-auth-key-for-user-login-user-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|Authenticated username|
|password|query|string(password)|true|Authenticated password|
|otp|query|string(password)|false|YubiKey OTP (if configured for user)|

> Example responses

> 200 Response

```json
{
  "auth_key": "8ou7jyubj878h7iunk",
  "success": true
}
```

> 403 Response

```json
{
  "error": "Access Denied",
  "success": false
}
```

> 449 Response

```json
{
  "message": "OTP Required is configured for this User. Retry login with OTP",
  "success": false
}
```

<h3 id="request-auth-key-for-user-login-user-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Authenticated Sucessfully|[inline_response_201_1](#schemainline_response_201_1)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|
|403|Forbidden|Access Denied|[403](#schema403)|
|449|449|OTP required but not supplied. Please resubmit request with OTP|[449](#schema449)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Compromise auth key

<a id="opIdauthkey_patch"></a>

> Code samples

```bash
curl 'https://example.com/authkey?auth_key=password' \
  -X PATCH \
  -H 'Accept: application/json'
```

`PATCH /authkey`

<aside class="warning">
This operation is deprecated
</aside>

Mark user auth key as compromised

<h3 id="compromise-auth-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|auth_key|query|string(password)|true|auth key to mark as compromised|
|comments|query|string|false|Comments (like how was this compromised)|

> Example responses

> 202 Response

```json
{
  "success": true
}
```

<h3 id="compromise-auth-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Auth key marked as compromised and locked|[inline_response_202](#schemainline_response_202)|
|401|Unauthorized|Invalid/Locked/Blocked/Compromised AppKey|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="kumpeapps-api-kkid">KKid</h1>

KKid API Functions

<a href="https://github.com/kumpeapps/kkid">External documentation</a>

## returns allowance balance and allowance transactions

<a id="opIdkkid_allowance_get"></a>

> Code samples

```bash
curl 'https://example.com/kkid/allowance?kidUserId=0' \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/allowance`

By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.


<h3 id="returns-allowance-balance-and-allowance-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUserId|query|integer|true|userID of the kid|
|transactionDays|query|integer|false|number of days you wish to search allowance transactions (default is 90 days)|

> Example responses

> 200 Response

```json
{
  "allowanceTransaction": [
    {
      "amount": 10,
      "date": {},
      "transactionDescription": "Weekly Allowance for Chores",
      "transactionId": 85,
      "transactionType": "Add",
      "userId": 1
    },
    {
      "amount": 10,
      "date": {},
      "transactionDescription": "Weekly Allowance for Chores",
      "transactionId": 85,
      "transactionType": "Add",
      "userId": 1
    }
  ],
  "balance": 0,
  "id": 24,
  "lastUpdated": "{}",
  "success": 1
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="returns-allowance-balance-and-allowance-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[allowance](#schemaallowance)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Returned|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## adds new allowance transaction to kidUserID

<a id="opIdkkid_allowance_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/allowance?kidUserId=0&amount=0&description=string&transactionType=Add' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/allowance`

By passing in the appropriate options, you can add an allowance transaction to a given user.


<h3 id="adds-new-allowance-transaction-to-kiduserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUserId|query|integer|true|userID of the kid|
|amount|query|number|true|amount you wish to Add/Subtract (subtract value should be a negative value)|
|description|query|string|true|Description (reason) of allowance transaction|
|transactionType|query|string|true|Transaction Type (Add/Subtract)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|transactionType|Add|
|transactionType|Subtract|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="adds-new-allowance-transaction-to-kiduserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[success](#schemasuccess)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Returned|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## subscribes/unsubscribes/registers for apns push notifications

<a id="opIdkkid_apns_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/apns?kidUserId=0&tool=register' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/apns`

<h3 id="subscribesunsubscribesregisters-for-apns-push-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUserId|query|integer|true|userID of the kid|
|tool|query|string|true|tool you wish to talk to|
|token|query|string|false|device APNS token (required for register)|
|devicename|query|string|false|Name of device to associate to token (required for register)|
|title|query|string|false|title of APNS message (required for send)|
|message|query|string|false|APNS message body (required for send)|
|badge|query|integer|false|Number for badge icon (optional for send)|
|sound|query|string|false|Name of sound file to play for send notification (optional for send)|
|section|query|string|false|Notification section name (required for send/subscribe/unsubscribe)|
|priority|query|string|false|Notification section name (optional for send, default is active)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tool|register|
|tool|subscribe|
|tool|unsubscribe|
|tool|send|
|section|Chores|
|section|Chores-New|
|section|Chores-Reminders|
|section|Allowance|
|section|Allowance-New|
|section|WishList|
|priority|passive|
|priority|active|
|priority|time-sensitive|
|priority|critical|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="subscribesunsubscribesregisters-for-apns-push-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[success](#schemasuccess)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Returned|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## returns list of chores for given user

<a id="opIdkkid_chorelist_get"></a>

> Code samples

```bash
curl https://example.com/kkid/chorelist \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/chorelist`

By passing in the appropriate options, you can search for
chores assigned to a given user within the authenticated user's master account


<h3 id="returns-list-of-chores-for-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUsername|query|string|false|Username of kid you wish to search|
|day|query|string|false|Day of week for chores (Weekly for weekly chores)|
|status|query|string|false|Status of Chore to search|
|blockDash|query|boolean|false|Filter results by blockDash parameter|
|optional|query|boolean|false|Filter results by optional parameter|
|canSteal|query|boolean|false|Filter results by canSteal parameter|
|includeCalendar|query|boolean|false|include calendar notations (default is false)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|day|Sunday|
|day|Monday|
|day|Tuesday|
|day|Wednesday|
|day|Thursday|
|day|Friday|
|day|Saturday|
|day|Weekly|

> Example responses

> 200 Response

```json
{
  "chore": [
    {
      "aiIcon": "n",
      "altitude": 1,
      "blockDash": false,
      "choreDescription": "Wash dishes and clean off counter",
      "choreName": "Wash Dishes",
      "choreNumber": 1,
      "day": "Monday",
      "extraAllowance": 5,
      "idChoreList": 1,
      "isCalendar": false,
      "kid": "jane",
      "latitude": 0,
      "longitude": 6,
      "nfcTag": "kkids//Chores?washdishestag",
      "notes": "notes",
      "oneTime": false,
      "optional": false,
      "reassignable": true,
      "reassigned": false,
      "requireObjectDetection": "bed",
      "startDate": {},
      "status": "todo",
      "stolen": false,
      "stolenBy": "stolenBy",
      "updated": {},
      "updatedBy": "janedoe"
    },
    {
      "aiIcon": "n",
      "altitude": 1,
      "blockDash": false,
      "choreDescription": "Wash dishes and clean off counter",
      "choreName": "Wash Dishes",
      "choreNumber": 1,
      "day": "Monday",
      "extraAllowance": 5,
      "idChoreList": 1,
      "isCalendar": false,
      "kid": "jane",
      "latitude": 0,
      "longitude": 6,
      "nfcTag": "kkids//Chores?washdishestag",
      "notes": "notes",
      "oneTime": false,
      "optional": false,
      "reassignable": true,
      "reassigned": false,
      "requireObjectDetection": "bed",
      "startDate": {},
      "status": "todo",
      "stolen": false,
      "stolenBy": "stolenBy",
      "updated": {},
      "updatedBy": "janedoe"
    }
  ],
  "success": 1
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="returns-list-of-chores-for-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[chorelist](#schemachorelist)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Found.|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## updates chore for given chore id

<a id="opIdkkid_chorelist_put"></a>

> Code samples

```bash
curl 'https://example.com/kkid/chorelist?idChoreList=0' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /kkid/chorelist`

By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account


<h3 id="updates-chore-for-given-chore-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChoreList|query|integer|true|id number of chore you wish to update|
|status|query|string|false|new status of chore|
|stolen|query|boolean|false|mark chore as stolen by sibling|
|stolenBy|query|string|false|username of sibling that stole the chore (required if stolen is true)|
|nfcTag|query|string|false|text field of NFC tag that is required to be scanned to check off this chore (normally null)|
|notes|query|string|false|notes field for chore|
|latitude|query|integer|false|GPS latitude of where the chore was marked|
|longitude|query|integer|false|GPS longitude of where the chore was marked|
|altitude|query|integer|false|GPS altitude of where the chore was marked|
|updatedByAutomation|query|boolean|false|true if updated via API by automation system|
|whereDay|query|string|false|Where day equals...|
|whereStatus|query|string|false|Where status equals...|
|whereName|query|string|false|Where chore name equals...|

#### Enumerated Values

|Parameter|Value|
|---|---|
|whereDay|Sunday|
|whereDay|Monday|
|whereDay|Tuesday|
|whereDay|Wednesday|
|whereDay|Thursday|
|whereDay|Friday|
|whereDay|Saturday|
|whereDay|Weekly|
|whereDay|Today|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="updates-chore-for-given-chore-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[success](#schemasuccess)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Found.|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## adds chore for given user

<a id="opIdkkid_chorelist_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/chorelist?kidUsername=string&choreName=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/chorelist`

By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account


<h3 id="adds-chore-for-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUsername|query|string|true|username of kid to assign the chore to.|
|day|query|string|false|day of week (Monday, Tuesday....) for the chore. For weekly chores put Weekly or leave blank|
|nfcTag|query|string|false|text field of nfc tag required to check off chore|
|status|query|string|false|status of chore (default is todo)|
|choreName|query|string|true|name of chore|
|choreDescription|query|string|false|optional chore description|
|choreNumber|query|integer|false|number priority of chore (default is 5)|
|blockDash|query|boolean|false|block dash option on this chore|
|oneTime|query|boolean|false|mark as one time chore (does not repeat each week)|
|extraAllowance|query|integer|false|ammount of allowance added at end of week for completing this chore|
|optional|query|boolean|false|mark as optional chore|
|reassignable|query|boolean|false|mark as reassignable (default is true)|
|canSteal|query|boolean|false|mark as sibling can steal chore|
|startDate|query|string|false|date (yyyy-mm-dd) that you wish the chore to start showing up. (default is today)|
|notes|query|string|false|notes added to chore (visable only on reports, kids do not see this note, this is mostly just for the developer)|
|requireObjectDetection|query|boolean|false|require use of camera to detect object detection tag order to check off chore|
|objectDetectionTag|query|string|false|tag for object detection to search for (required if requireObjectDetection is true)|
|updatedByAutomation|query|boolean|false|true if chore updated via API from an Automation System|
|aiIcon|query|string|false|Notes if AI Icons should be used (n for no, y for yes, e for yes- error)|
|isCalendar|query|boolean|false|True if this is a calendar note instead of a chore.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|day|Sunday|
|day|Monday|
|day|Tuesday|
|day|Wednesday|
|day|Thursday|
|day|Friday|
|day|Saturday|
|day|Weekly|
|day|Today|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="adds-chore-for-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[success](#schemasuccess)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Found.|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Conflict- idChoreList parameter was not supplied or is blank|None|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## deletes chore for given chore id

<a id="opIdkkid_chorelist_delete"></a>

> Code samples

```bash
curl 'https://example.com/kkid/chorelist?idChoreList=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`DELETE /kkid/chorelist`

By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account


<h3 id="deletes-chore-for-given-chore-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChoreList|query|integer|true|id of the chore you wish to delete|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

> 206 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="deletes-chore-for-given-chore-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|deletion successful|[success](#schemasuccess)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|206|Partial Content|No Data Found.|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Conflict- idChoreList parameter was not supplied or is blank|None|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## adds new master user account

<a id="opIdkkid_masteruser_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/masteruser?username=string&password=password&email=string&firstName=string&lastName=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/masteruser`

By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)


<h3 id="adds-new-master-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|username of user to create|
|password|query|string(password)|true|password of user to create|
|email|query|string|true|email address of user to create|
|firstName|query|string|true|First Name of user to create|
|lastName|query|string|true|Last Name of user to create|

> Example responses

> 200 Response

```json
{
  "added": {},
  "aff_added": "aff_added",
  "aff_id": "aff_id",
  "aff_payout_type": "aff_payout_type",
  "avatar": "avatar",
  "city": "city",
  "comment": "Added Via KKids API",
  "country": "country",
  "disable_lock_until": "disable_lock_until",
  "email": "jane@doe.com",
  "i_agree": "0",
  "is_affiliate": "is_affiliate",
  "is_locked": "0",
  "lang": "lang",
  "last_login": "last_login",
  "login": "janedoe",
  "name_f": "Jane",
  "name_l": "Doe",
  "pass": "pass",
  "pass_dattm": {},
  "phone": "phone",
  "pin": "0",
  "plain_password": "plain_password",
  "remember_key": "remember_key",
  "remote_addr": "104.237.5.109",
  "require_consent": "require_consent",
  "reseller_id": "reseller_id",
  "saved_form_id": "saved_form_id",
  "state": "state",
  "status": "0",
  "street": "street",
  "street2": "street2",
  "subusers_parent_id": "0",
  "tax_id": "tax_id",
  "unsubscribed": "0",
  "user_agent": "user_agent",
  "user_id": 1,
  "zip": "zip"
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

<h3 id="adds-new-master-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Added|[addUserResponse](#schemaadduserresponse)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
app_key
</aside>

## Create Share Link

<a id="opIdkkid_share_get"></a>

> Code samples

```bash
curl 'https://example.com/kkid/share?linkUserId=string&link=https%3A%2F%2Fkhome.kumpeapps.com%2Fportal%2Fwish-list.php&scope=WishList' \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/share`

Create share link

<h3 id="create-share-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkUserId|query|string|true|User ID that the link should be authenticated to|
|link|query|string|true|Link to share|
|scope|query|string|true|Authentication scope for link|
|scope2|query|string|false|Authentication scope for link|
|scope3|query|string|false|Authentication scope for link|
|scope4|query|string|false|Authentication scope for link|

#### Enumerated Values

|Parameter|Value|
|---|---|
|link|https://khome.kumpeapps.com/portal/wish-list.php|
|link|https://khome.kumpeapps.com/portal/chores-today.php|
|scope|WishList|
|scope|WishListAdmin|
|scope|Chores|
|scope|ChoresAdmin|
|scope2|WishList|
|scope2|WishListAdmin|
|scope2|Chores|
|scope2|ChoresAdmin|
|scope3|WishList|
|scope3|WishListAdmin|
|scope3|Chores|
|scope3|ChoresAdmin|
|scope4|WishList|
|scope4|WishListAdmin|
|scope4|Chores|
|scope4|ChoresAdmin|

> Example responses

> 201 Response

```json
{
  "auth_link": "https://khome.kumpeapps.com/portal/wish-list.php?token=8ou7jyubj878h7iunk",
  "success": true
}
```

<h3 id="create-share-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|authenticated link created|[201_share](#schema201_share)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Gets user info

<a id="opIdkkid_user_get"></a>

> Code samples

```bash
curl https://example.com/kkid/user \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/user`

Gets user info for authenticated user

<h3 id="gets-user-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enableBool|query|boolean|false|Use bool values instead of Int 0/1|

> Example responses

> 200 Response

```json
{
  "success": true,
  "user": [
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    },
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    }
  ]
}
```

<h3 id="gets-user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[userlist](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## returns list of users

<a id="opIdkkid_userlist_get"></a>

> Code samples

```bash
curl https://example.com/kkid/userlist \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/userlist`

By passing in the appropriate options, you can search for
users within the authenticated user's master account


<h3 id="returns-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isChild|query|boolean|false|Filter Search by isChild flag|
|isActive|query|boolean|false|Filter Search by isActive flag|
|isAdmin|query|boolean|false|Filter Search by isAdmin flag|
|enableAllowance|query|boolean|false|Filter Search by enableAllowance flag|
|enableChores|query|boolean|false|Filter Search by enableChores flag|
|userID|query|integer|false|userID of user to search|
|username|query|string|false|Username of user to search|
|email|query|string|false|Email address of user to search|

> Example responses

> 200 Response

```json
{
  "success": true,
  "user": [
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    },
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    }
  ]
}
```

> 204 Response

```json
{
  "error": "No Data Found",
  "status": 0
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="returns-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[userlist](#schemauserlist)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|204|No Content|No Data Returned|[nodata](#schemanodata)|
|400|Bad Request|bad input parameter|None|
|401|Unauthorized|Unauthorized- API credentials not supplied. Ensure you have passed proper Username and Password parameters|None|
|403|Forbidden|Forbidden- User access is denied. API user either does not have access or has been banned/locked.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## updates user

<a id="opIdkkid_userlist_put"></a>

> Code samples

```bash
curl 'https://example.com/kkid/userlist?userID=0&username=string&email=string&firstName=string&lastName=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /kkid/userlist`

By passing in the appropriate variables this method updates the user's profile


<h3 id="updates-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userID|query|integer|true|userID of the user you wish to update|
|username|query|string|true|username of user to create|
|email|query|string|true|email address of user to create|
|firstName|query|string|true|First Name of user to create|
|lastName|query|string|true|Last Name of user to create|
|emoji|query|string|false|emoji character for user|
|tmdbKey|query|string|false|User's TMdB Session Key|
|enableWishList|query|boolean|false|set status of Wish List module enabled|
|enableChores|query|boolean|false|set status of chores module enabled|
|enableAllowance|query|boolean|false|set status of allowance module enabled|
|enableAdmin|query|boolean|false|set status of isAdmin|
|enableTmdb|query|boolean|false|set status of enableTmdb (movie and tv search)|
|enableObjectDetection|query|boolean|false|set status of enableObjectDetection|

> Example responses

> 200 Response

```json
{
  "added": {},
  "aff_added": "aff_added",
  "aff_id": "aff_id",
  "aff_payout_type": "aff_payout_type",
  "avatar": "avatar",
  "city": "city",
  "comment": "Added Via KKids API",
  "country": "country",
  "disable_lock_until": "disable_lock_until",
  "email": "jane@doe.com",
  "i_agree": "0",
  "is_affiliate": "is_affiliate",
  "is_locked": "0",
  "lang": "lang",
  "last_login": "last_login",
  "login": "janedoe",
  "name_f": "Jane",
  "name_l": "Doe",
  "pass": "pass",
  "pass_dattm": {},
  "phone": "phone",
  "pin": "0",
  "plain_password": "plain_password",
  "remember_key": "remember_key",
  "remote_addr": "104.237.5.109",
  "require_consent": "require_consent",
  "reseller_id": "reseller_id",
  "saved_form_id": "saved_form_id",
  "state": "state",
  "status": "0",
  "street": "street",
  "street2": "street2",
  "subusers_parent_id": "0",
  "tax_id": "tax_id",
  "unsubscribed": "0",
  "user_agent": "user_agent",
  "user_id": 1,
  "zip": "zip"
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="updates-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Updated|[addUserResponse](#schemaadduserresponse)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Update user unsuccessful. This could be due to invalid userID, new username already exists, new email already exists, or an unknown error.|None|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## adds new child user

<a id="opIdkkid_userlist_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/userlist?username=string&password=password&email=string&firstName=string&lastName=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/userlist`

By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.


<h3 id="adds-new-child-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|username of user to create|
|password|query|string(password)|true|password of user to create|
|email|query|string|true|email address of user to create|
|firstName|query|string|true|First Name of user to create|
|lastName|query|string|true|Last Name of user to create|

> Example responses

> 200 Response

```json
{
  "added": {},
  "aff_added": "aff_added",
  "aff_id": "aff_id",
  "aff_payout_type": "aff_payout_type",
  "avatar": "avatar",
  "city": "city",
  "comment": "Added Via KKids API",
  "country": "country",
  "disable_lock_until": "disable_lock_until",
  "email": "jane@doe.com",
  "i_agree": "0",
  "is_affiliate": "is_affiliate",
  "is_locked": "0",
  "lang": "lang",
  "last_login": "last_login",
  "login": "janedoe",
  "name_f": "Jane",
  "name_l": "Doe",
  "pass": "pass",
  "pass_dattm": {},
  "phone": "phone",
  "pin": "0",
  "plain_password": "plain_password",
  "remember_key": "remember_key",
  "remote_addr": "104.237.5.109",
  "require_consent": "require_consent",
  "reseller_id": "reseller_id",
  "saved_form_id": "saved_form_id",
  "state": "state",
  "status": "0",
  "street": "street",
  "street2": "street2",
  "subusers_parent_id": "0",
  "tax_id": "tax_id",
  "unsubscribed": "0",
  "user_agent": "user_agent",
  "user_id": 1,
  "zip": "zip"
}
```

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="adds-new-child-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Added|[addUserResponse](#schemaadduserresponse)|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.|None|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## deletes user

<a id="opIdkkid_userlist_delete"></a>

> Code samples

```bash
curl 'https://example.com/kkid/userlist?userID=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`DELETE /kkid/userlist`

By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)


<h3 id="deletes-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userID|query|integer|true|userID of the user you wish to delete|

> Example responses

> 405 Response

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

> 412 Response

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

<h3 id="deletes-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Deleted|None|
|202|Accepted|Accepted- Access Granted but data flow did not complete due to an unknown error.|None|
|405|Method Not Allowed|Method Not Allowed- API user does not have access to use this method|[405](#schema405)|
|409|Conflict|Create user unsuccessful! This is normally because the username or password already exists in the KumpeApps system.|None|
|412|Precondition Failed|API Access Denied! Your API key is invalid, expired, or not supplied!|[412](#schema412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Get list of wishlist items

<a id="opIdkkid_wishlist_get"></a>

> Code samples

```bash
curl https://example.com/kkid/wishlist \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`GET /kkid/wishlist`

<h3 id="get-list-of-wishlist-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUserId|query|integer|false|userID of the kid|

> Example responses

> 200 Response

```json
{
  "success": true,
  "wish": [
    {
      "description": "Pokemon trading cards",
      "id": 1,
      "link": "https://www.google.com",
      "master_id": 1,
      "priority": 1,
      "title": "Pokemon Cards",
      "user_id": 1
    },
    {
      "description": "Pokemon trading cards",
      "id": 1,
      "link": "https://www.google.com",
      "master_id": 1,
      "priority": 1,
      "title": "Pokemon Cards",
      "user_id": 1
    }
  ]
}
```

<h3 id="get-list-of-wishlist-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[wishlist](#schemawishlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Update item on kid's wishlist

<a id="opIdkkid_wishlist_put"></a>

> Code samples

```bash
curl 'https://example.com/kkid/wishlist?wishId=0' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`PUT /kkid/wishlist`

<h3 id="update-item-on-kids-wishlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wishId|query|integer|true|Wish list item ID to update|
|title|query|string|false|Item title|
|description|query|string|false|Item Description|
|priority|query|integer|false|Item Priority|
|link|query|string|false|URL Link to item|

> Example responses

> 201 Response

```json
{
  "message": "success",
  "success": true
}
```

<h3 id="update-item-on-kids-wishlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|search results matching criteria|[success](#schemasuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Add item to kid's wishlist

<a id="opIdkkid_wishlist_post"></a>

> Code samples

```bash
curl 'https://example.com/kkid/wishlist?kidUserId=0&title=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`POST /kkid/wishlist`

<h3 id="add-item-to-kids-wishlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|kidUserId|query|integer|true|userID of the kid|
|title|query|string|true|Item title|
|description|query|string|false|Item Description|
|priority|query|integer|false|Item Priority|
|link|query|string|false|URL Link to item|

> Example responses

> 201 Response

```json
{
  "message": "success",
  "success": true
}
```

<h3 id="add-item-to-kids-wishlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|search results matching criteria|[success](#schemasuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

## Delete item from wishlist

<a id="opIdkkid_wishlist_delete"></a>

> Code samples

```bash
curl 'https://example.com/kkid/wishlist?wishId=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Auth: ${API_KEY}"
```

`DELETE /kkid/wishlist`

<h3 id="delete-item-from-wishlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wishId|query|integer|true|ID of wishlist item to delete|

> Example responses

> 200 Response

```json
{
  "message": "success",
  "success": true
}
```

<h3 id="delete-item-from-wishlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|[success](#schemasuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_key
</aside>

# Schemas

<h2 id="tocS_403">403</h2>
<!-- backwards compatibility -->
<a id="schema403"></a>
<a id="schema_403"></a>
<a id="tocS403"></a>
<a id="tocs403"></a>

```json
{
  "error": "Access Denied",
  "success": false
}
```

Access Denied

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_405">405</h2>
<!-- backwards compatibility -->
<a id="schema405"></a>
<a id="schema_405"></a>
<a id="tocS405"></a>
<a id="tocs405"></a>

```json
{
  "error": "API Access Denied! Your API account does not have access to this Verb Method!",
  "success": 0
}
```

API Access Denied

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|success|integer|false|none|none|

<h2 id="tocS_412">412</h2>
<!-- backwards compatibility -->
<a id="schema412"></a>
<a id="schema_412"></a>
<a id="tocS412"></a>
<a id="tocs412"></a>

```json
{
  "error": "API Access Denied! Your API key is invalid or has expired!",
  "success": 0
}
```

API Key invalid

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|success|integer|false|none|none|

<h2 id="tocS_449">449</h2>
<!-- backwards compatibility -->
<a id="schema449"></a>
<a id="schema_449"></a>
<a id="tocS449"></a>
<a id="tocs449"></a>

```json
{
  "message": "OTP Required is configured for this User. Retry login with OTP",
  "success": false
}
```

OTP Required is configured for this User. Retry login with OTP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_201_share">201_share</h2>
<!-- backwards compatibility -->
<a id="schema201_share"></a>
<a id="schema_201_share"></a>
<a id="tocS201_share"></a>
<a id="tocs201_share"></a>

```json
{
  "auth_link": "https://khome.kumpeapps.com/portal/wish-list.php?token=8ou7jyubj878h7iunk",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_link|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_addUserResponse">addUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadduserresponse"></a>
<a id="schema_addUserResponse"></a>
<a id="tocSadduserresponse"></a>
<a id="tocsadduserresponse"></a>

```json
{
  "added": {},
  "aff_added": "aff_added",
  "aff_id": "aff_id",
  "aff_payout_type": "aff_payout_type",
  "avatar": "avatar",
  "city": "city",
  "comment": "Added Via KKids API",
  "country": "country",
  "disable_lock_until": "disable_lock_until",
  "email": "jane@doe.com",
  "i_agree": "0",
  "is_affiliate": "is_affiliate",
  "is_locked": "0",
  "lang": "lang",
  "last_login": "last_login",
  "login": "janedoe",
  "name_f": "Jane",
  "name_l": "Doe",
  "pass": "pass",
  "pass_dattm": {},
  "phone": "phone",
  "pin": "0",
  "plain_password": "plain_password",
  "remember_key": "remember_key",
  "remote_addr": "104.237.5.109",
  "require_consent": "require_consent",
  "reseller_id": "reseller_id",
  "saved_form_id": "saved_form_id",
  "state": "state",
  "status": "0",
  "street": "street",
  "street2": "street2",
  "subusers_parent_id": "0",
  "tax_id": "tax_id",
  "unsubscribed": "0",
  "user_agent": "user_agent",
  "user_id": 1,
  "zip": "zip"
}
```

add user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|string|false|none|none|
|aff_added|string|false|none|none|
|aff_id|string|false|none|none|
|aff_payout_type|string|false|none|none|
|avatar|string|false|none|none|
|city|string|false|none|none|
|comment|string|false|none|none|
|country|string|false|none|none|
|disable_lock_until|string|false|none|none|
|email|string|false|none|none|
|i_agree|string|false|none|none|
|is_affiliate|string|false|none|none|
|is_locked|string|false|none|none|
|lang|string|false|none|none|
|last_login|string|false|none|none|
|login|string|false|none|none|
|name_f|string|false|none|none|
|name_l|string|false|none|none|
|pass|string|false|none|none|
|pass_dattm|string|false|none|none|
|phone|string|false|none|none|
|pin|string|false|none|none|
|plain_password|string|false|none|none|
|remember_key|string|false|none|none|
|remote_addr|string|false|none|none|
|require_consent|string|false|none|none|
|reseller_id|string|false|none|none|
|saved_form_id|string|false|none|none|
|state|string|false|none|none|
|status|string|false|none|none|
|street|string|false|none|none|
|street2|string|false|none|none|
|subusers_parent_id|string|false|none|none|
|tax_id|string|false|none|none|
|unsubscribed|string|false|none|none|
|user_agent|string|false|none|none|
|user_id|integer|false|none|none|
|zip|string|false|none|none|

<h2 id="tocS_allowance">allowance</h2>
<!-- backwards compatibility -->
<a id="schemaallowance"></a>
<a id="schema_allowance"></a>
<a id="tocSallowance"></a>
<a id="tocsallowance"></a>

```json
{
  "allowanceTransaction": [
    {
      "amount": 10,
      "date": {},
      "transactionDescription": "Weekly Allowance for Chores",
      "transactionId": 85,
      "transactionType": "Add",
      "userId": 1
    },
    {
      "amount": 10,
      "date": {},
      "transactionDescription": "Weekly Allowance for Chores",
      "transactionId": 85,
      "transactionType": "Add",
      "userId": 1
    }
  ],
  "balance": 0,
  "id": 24,
  "lastUpdated": "{}",
  "success": 1
}
```

Allowance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowanceTransaction|[[allowance_allowanceTransaction](#schemaallowance_allowancetransaction)]|false|none|none|
|balance|integer|false|none|none|
|id|integer|false|none|none|
|lastUpdated|string|false|none|none|
|success|integer|false|none|none|

<h2 id="tocS_allowance_allowanceTransaction">allowance_allowanceTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaallowance_allowancetransaction"></a>
<a id="schema_allowance_allowanceTransaction"></a>
<a id="tocSallowance_allowancetransaction"></a>
<a id="tocsallowance_allowancetransaction"></a>

```json
{
  "amount": 10,
  "date": {},
  "transactionDescription": "Weekly Allowance for Chores",
  "transactionId": 85,
  "transactionType": "Add",
  "userId": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|false|none|none|
|date|string|false|none|none|
|transactionDescription|string|false|none|none|
|transactionId|integer|false|none|none|
|transactionType|string|false|none|none|
|userId|integer|false|none|none|

<h2 id="tocS_authentication">authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "apiKey": "67utyuvb7i6ugy9p843erwt3g",
  "success": 1,
  "user": {
    "email": "jane@doe.com",
    "emoji": "🤗",
    "enableAllowance": true,
    "enableBehaviorChart": false,
    "enableChores": true,
    "enableNoAds": false,
    "enableObjectDetection": false,
    "enableTmdb": true,
    "firstName": "Jane",
    "homeId": 1,
    "isActive": true,
    "isAdmin": false,
    "isBanned": false,
    "isChild": true,
    "isDisabled": false,
    "isLocked": false,
    "isMaster": false,
    "lastName": "Doe",
    "masterId": 1,
    "pushAllowance": true,
    "pushAllowanceNew": true,
    "pushChores": true,
    "pushChoresNew": true,
    "pushChoresReminders": true,
    "tmdbKey": "9a87huiufe94r8",
    "userId": 10,
    "username": "janedoe",
    "weeklyAllowance": 5
  }
}
```

authentication

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|success|integer|false|none|none|
|user|[user](#schemauser)|false|none|user|

<h2 id="tocS_chore">chore</h2>
<!-- backwards compatibility -->
<a id="schemachore"></a>
<a id="schema_chore"></a>
<a id="tocSchore"></a>
<a id="tocschore"></a>

```json
{
  "aiIcon": "n",
  "altitude": 1,
  "blockDash": false,
  "choreDescription": "Wash dishes and clean off counter",
  "choreName": "Wash Dishes",
  "choreNumber": 1,
  "day": "Monday",
  "extraAllowance": 5,
  "idChoreList": 1,
  "isCalendar": false,
  "kid": "jane",
  "latitude": 0,
  "longitude": 6,
  "nfcTag": "kkids//Chores?washdishestag",
  "notes": "notes",
  "oneTime": false,
  "optional": false,
  "reassignable": true,
  "reassigned": false,
  "requireObjectDetection": "bed",
  "startDate": {},
  "status": "todo",
  "stolen": false,
  "stolenBy": "stolenBy",
  "updated": {},
  "updatedBy": "janedoe"
}
```

chore

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aiIcon|string|false|none|none|
|altitude|integer|false|none|none|
|blockDash|boolean|false|none|none|
|choreDescription|string|false|none|none|
|choreName|string|false|none|none|
|choreNumber|integer|false|none|none|
|day|string|false|none|none|
|extraAllowance|integer|false|none|none|
|idChoreList|integer|false|none|none|
|isCalendar|boolean|false|none|none|
|kid|string|false|none|none|
|latitude|integer|false|none|none|
|longitude|integer|false|none|none|
|nfcTag|string|false|none|none|
|notes|string|false|none|none|
|oneTime|boolean|false|none|none|
|optional|boolean|false|none|none|
|reassignable|boolean|false|none|none|
|reassigned|boolean|false|none|none|
|requireObjectDetection|string|false|none|none|
|startDate|string|false|none|none|
|status|string|false|none|none|
|stolen|boolean|false|none|none|
|stolenBy|string|false|none|none|
|updated|string|false|none|none|
|updatedBy|string|false|none|none|

<h2 id="tocS_chorelist">chorelist</h2>
<!-- backwards compatibility -->
<a id="schemachorelist"></a>
<a id="schema_chorelist"></a>
<a id="tocSchorelist"></a>
<a id="tocschorelist"></a>

```json
{
  "chore": [
    {
      "aiIcon": "n",
      "altitude": 1,
      "blockDash": false,
      "choreDescription": "Wash dishes and clean off counter",
      "choreName": "Wash Dishes",
      "choreNumber": 1,
      "day": "Monday",
      "extraAllowance": 5,
      "idChoreList": 1,
      "isCalendar": false,
      "kid": "jane",
      "latitude": 0,
      "longitude": 6,
      "nfcTag": "kkids//Chores?washdishestag",
      "notes": "notes",
      "oneTime": false,
      "optional": false,
      "reassignable": true,
      "reassigned": false,
      "requireObjectDetection": "bed",
      "startDate": {},
      "status": "todo",
      "stolen": false,
      "stolenBy": "stolenBy",
      "updated": {},
      "updatedBy": "janedoe"
    },
    {
      "aiIcon": "n",
      "altitude": 1,
      "blockDash": false,
      "choreDescription": "Wash dishes and clean off counter",
      "choreName": "Wash Dishes",
      "choreNumber": 1,
      "day": "Monday",
      "extraAllowance": 5,
      "idChoreList": 1,
      "isCalendar": false,
      "kid": "jane",
      "latitude": 0,
      "longitude": 6,
      "nfcTag": "kkids//Chores?washdishestag",
      "notes": "notes",
      "oneTime": false,
      "optional": false,
      "reassignable": true,
      "reassigned": false,
      "requireObjectDetection": "bed",
      "startDate": {},
      "status": "todo",
      "stolen": false,
      "stolenBy": "stolenBy",
      "updated": {},
      "updatedBy": "janedoe"
    }
  ],
  "success": 1
}
```

chorelist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chore|[[chore](#schemachore)]|false|none|none|
|success|integer|false|none|none|

<h2 id="tocS_inline_response_201">inline_response_201</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_201"></a>
<a id="schema_inline_response_201"></a>
<a id="tocSinline_response_201"></a>
<a id="tocsinline_response_201"></a>

```json
{
  "app_key": "8765futybkunj98ho7gi6tybkuhj",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_key|string|true|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_inline_response_201_1">inline_response_201_1</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_201_1"></a>
<a id="schema_inline_response_201_1"></a>
<a id="tocSinline_response_201_1"></a>
<a id="tocsinline_response_201_1"></a>

```json
{
  "auth_key": "8ou7jyubj878h7iunk",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_key|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_inline_response_202">inline_response_202</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_202"></a>
<a id="schema_inline_response_202"></a>
<a id="tocSinline_response_202"></a>
<a id="tocsinline_response_202"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_invalidateApiKey">invalidateApiKey</h2>
<!-- backwards compatibility -->
<a id="schemainvalidateapikey"></a>
<a id="schema_invalidateApiKey"></a>
<a id="tocSinvalidateapikey"></a>
<a id="tocsinvalidateapikey"></a>

```json
{
  "message": "API Key Set to Expire Immediately",
  "success": 1
}
```

invalidate api key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|integer|false|none|none|

<h2 id="tocS_nodata">nodata</h2>
<!-- backwards compatibility -->
<a id="schemanodata"></a>
<a id="schema_nodata"></a>
<a id="tocSnodata"></a>
<a id="tocsnodata"></a>

```json
{
  "error": "No Data Found",
  "status": 0
}
```

nodata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|status|integer|false|none|none|

<h2 id="tocS_success">success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
{
  "message": "success",
  "success": true
}
```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "jane@doe.com",
  "emoji": "🤗",
  "enableAllowance": true,
  "enableBehaviorChart": false,
  "enableChores": true,
  "enableNoAds": false,
  "enableObjectDetection": false,
  "enableTmdb": true,
  "firstName": "Jane",
  "homeId": 1,
  "isActive": true,
  "isAdmin": false,
  "isBanned": false,
  "isChild": true,
  "isDisabled": false,
  "isLocked": false,
  "isMaster": false,
  "lastName": "Doe",
  "masterId": 1,
  "pushAllowance": true,
  "pushAllowanceNew": true,
  "pushChores": true,
  "pushChoresNew": true,
  "pushChoresReminders": true,
  "tmdbKey": "9a87huiufe94r8",
  "userId": 10,
  "username": "janedoe",
  "weeklyAllowance": 5
}
```

user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|emoji|string|false|none|none|
|enableAllowance|boolean|false|none|none|
|enableBehaviorChart|boolean|false|none|none|
|enableChores|boolean|false|none|none|
|enableNoAds|boolean|false|none|none|
|enableObjectDetection|boolean|false|none|none|
|enableTmdb|boolean|false|none|none|
|firstName|string|false|none|none|
|homeId|integer|false|none|none|
|isActive|boolean|false|none|none|
|isAdmin|boolean|false|none|none|
|isBanned|boolean|false|none|none|
|isChild|boolean|false|none|none|
|isDisabled|boolean|false|none|none|
|isLocked|boolean|false|none|none|
|isMaster|boolean|false|none|none|
|lastName|string|false|none|none|
|masterId|integer|false|none|none|
|pushAllowance|boolean|false|none|none|
|pushAllowanceNew|boolean|false|none|none|
|pushChores|boolean|false|none|none|
|pushChoresNew|boolean|false|none|none|
|pushChoresReminders|boolean|false|none|none|
|tmdbKey|string|false|none|none|
|userId|integer|false|none|none|
|username|string|false|none|none|
|weeklyAllowance|integer|false|none|none|

<h2 id="tocS_userlist">userlist</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_userlist"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
{
  "success": true,
  "user": [
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    },
    {
      "email": "jane@doe.com",
      "emoji": "🤗",
      "enableAllowance": true,
      "enableBehaviorChart": false,
      "enableChores": true,
      "enableNoAds": false,
      "enableObjectDetection": false,
      "enableTmdb": true,
      "firstName": "Jane",
      "homeId": 1,
      "isActive": true,
      "isAdmin": false,
      "isBanned": false,
      "isChild": true,
      "isDisabled": false,
      "isLocked": false,
      "isMaster": false,
      "lastName": "Doe",
      "masterId": 1,
      "pushAllowance": true,
      "pushAllowanceNew": true,
      "pushChores": true,
      "pushChoresNew": true,
      "pushChoresReminders": true,
      "tmdbKey": "9a87huiufe94r8",
      "userId": 10,
      "username": "janedoe",
      "weeklyAllowance": 5
    }
  ]
}
```

userlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|user|[[user](#schemauser)]|false|none|none|

<h2 id="tocS_wish">wish</h2>
<!-- backwards compatibility -->
<a id="schemawish"></a>
<a id="schema_wish"></a>
<a id="tocSwish"></a>
<a id="tocswish"></a>

```json
{
  "description": "Pokemon trading cards",
  "id": 1,
  "link": "https://www.google.com",
  "master_id": 1,
  "priority": 1,
  "title": "Pokemon Cards",
  "user_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer|false|none|none|
|link|string|false|none|none|
|master_id|integer|false|none|none|
|priority|integer|false|none|none|
|title|string|false|none|none|
|user_id|integer|false|none|none|

<h2 id="tocS_wishlist">wishlist</h2>
<!-- backwards compatibility -->
<a id="schemawishlist"></a>
<a id="schema_wishlist"></a>
<a id="tocSwishlist"></a>
<a id="tocswishlist"></a>

```json
{
  "success": true,
  "wish": [
    {
      "description": "Pokemon trading cards",
      "id": 1,
      "link": "https://www.google.com",
      "master_id": 1,
      "priority": 1,
      "title": "Pokemon Cards",
      "user_id": 1
    },
    {
      "description": "Pokemon trading cards",
      "id": 1,
      "link": "https://www.google.com",
      "master_id": 1,
      "priority": 1,
      "title": "Pokemon Cards",
      "user_id": 1
    }
  ]
}
```

Allowance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|wish|[[wish](#schemawish)]|false|none|none|
