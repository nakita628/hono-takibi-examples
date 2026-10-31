<h1 id="clicksend-rest-api-v3">ClickSend REST API v3 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the official API documentation for ClickSend.com

Below you will find a current list of the available methods for clicksend.

**NOTE**: You will need to create a free account to use the API.

You can
[**Register Here**](https://dashboard.clicksend.com/#/signup/step1/).

# API URL

The API should always be accessed over SSL.

Base URL: `https://rest.clicksend.com/v3/`

# Authentication

Basic HTTP authentication should be used in the header.

**Either:**

`username`: Your API username

`password`: Your API key

```
You can get your API credentials by clicking 'API Credentials' on the top right of the dashboard.
```

**OR**

`username`: Your account username

`password`: Your account password

```
These are the same credentials that you use to login to the dashboard.
```

### Authorization Header

The Authorization header is constructed as follows:
1. Username and password are combined into a string `username:password`
1. The resulting string is then encoded using Base64 encoding
1. The authorization method and a space i.e. "Basic " is then put before the encoded string.

For example, if the user uses `Aladdin` as the username and `open sesame` as the password then the header is formed as follows:

`Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`

### PHP Authentication Header Example (using cURL)

`curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Basic ' . base64_encode("$username:$password")]);`

# Verbs

The API uses restful verbs.

| Verb | Description |
|---|---|
| `GET` | Select one or more items. Success returns `200` status code. |
| `POST` | Create a new item. Success returns `200` status code. |
| `PUT` | Update an item. Success returns `200` status code. |
| `DELETE` | Delete an item. Success returns `200` status code. |

# Status Codes

The API will respond with one of the following HTTP status codes.

| Code | Response | Description |
|---|---|---|
| `200` | `SUCCESS` | Request completed successfully. |
| `400` | `BAD_REQUEST` | The request was invalid or cannot be otherwise served. An accompanying error message will explain further. |
| `401` | `UNAUTHORIZED` | Authentication credentials were missing or incorrect. |
| `403` | `FORBIDDEN` | The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why. |
| `404` | `NOT_FOUND` | The URI requested is invalid or the resource requested does not exists. |
| `405` | `NOT_FOUND` | Method doesn't exist or is not allowed. |
| `429` | `TOO_MANY_REQUESTS` | Rate Limit Exceeded. Returned when a request cannot be served due to the application’s rate limit having been exhausted for the resource. See Rate Limiting. |
| `500` | `INTERNAL_SERVER_ERROR` | Something is broken |

# Application Status Codes

The following status codes can be returned in addition to the HTTP status code. For example, when using the Send SMS endpoint:

| Response | Description |
|---|---|
| `SUCCESS` | Message added to queue OK. Use delivery reports to get an update on the delivery status.|
| `MISSING_CREDENTIALS` | Not enough information has been supplied for authentication. Please ensure that your Username and Unique Key are supplied in your request.|
| `ACCOUNT_NOT_ACTIVATED` | Your account has not been activated.|
| `INVALID_RECIPIENT` | The destination mobile number is invalid.|
| `THROTTLED` | Identical message body recently sent to the same recipient. Please try again in a few seconds.|
| `INVALID_SENDER_ID` | Invalid Sender ID. Please ensure Sender ID is no longer than 11 characters (if alphanumeric), and contains no spaces.|
| `INSUFFICIENT_CREDIT` | You have reached the end of your message credits. You will need to purchase more message credits.|
| `INVALID_CREDENTIALS` | Your Username or Unique Key is incorrect.|
| `ALREADY_EXISTS` | The resource you're trying to add already exists.|
| `EMPTY_MESSAGE` | Message is empty.|
| `TOO_MANY_RECIPIENTS` | Too many recipients.|
| `MISSING_REQUIRED_FIELDS` | Some required fields are missing.|
| `INVALID_SCHEDULE` | The schedule specified is invalid. Use a unix timestamp e.g. 1429170372.|
| `NOT_ENOUGH_PERMISSION_TO_LIST_ID` | Don't have enough privilege to access or send to a list_id.|
| `INTERNAL_ERROR` | Internal error.|
| `INVALID_LANG` | An invalid language option has been provided.|
| `INVALID_VOICE` | An invalid voice (gender) option has been provided.|
| `SUBJECT_REQUIRED` | Usually happens when MMS Subject is empty.|
| `INVALID_MEDIA_FILE` | Usually MMS media file is invalid file.|
| `SOMETHING_IS_WRONG` | Generic Error happened.|

# Required Headers

You'll need to send some headers when making API calls.

| Header | Value |
|---|---|
| `Content-type` | `application/json` |

# Pagination

Some methods are paginated. By default, 1 page of 15 items will be returned. You can set the pagination parameters by adding `?page={page}&limit={limit}` to the URL.

## Request

| Parameter | Type | Default | Value |
|---|---|---|---|
| `page` | integer | `1` | The page number to return in the response. |
| `limit` | integer | `15` | The number of results per page. Min 15, Max 100. |

## Response

| Attribute | Type | Value |
|---|---|---|---|
| `total` | integer | Total number of results available. |
| `per_page` | integer | Number of results returned per page. |
| `current_page` | integer | Current page number. |
| `last_page` | integer | Last page number. |
| `next_page_url` | string | A URL of the next page. `null` if not available.|
| `prev_page_url` | string | A URL of the previous page. `null` if not available.|
| `from` | integer | Number of the first result in current page. |
| `to` | integer | Number of the last result in current page. |

# Searching and Sorting

Most GET endpoints allow searching and sorting. Searches are **not** case-sensitive.

## Search

To perform a search, add `q` as a query parameter. For example:

`/subaccounts?q=field:value,field2:value`

## Order

To perform a sort, add `order_by` as a query parameter. For example:

`/subaccounts?order_by=field:desc/asc`

## AND / OR

By default, it will search using the `AND` operator. This can be set using `operator` as a query parameter. For example:

`/subaccounts?q=field:value&operator=OR`

**Options:**

- `AN` - returns results matching **all** query fields specified

- `OR` - returns results matching **any** query fields specified

## Example

`/subaccounts?q=first_name:john,last_name:smith&order_by=subaccount_id:asc&operator=AND`

# CORS

When creating your API app, specify the JavaScript (CORS) origins you'll be using. We use these origins to return the headers needed for CORS.

# Date and Time

All date/timestamps will be returned in Unix time (also known as POSIX time or erroneously as Epoch time) with no leap seconds.

For example: `1435255816`

```
(ISO 8601: 2015-06-25T18:10:16Z)
```

More information: [Wikipedia: Unix time](https://en.wikipedia.org/wiki/Unix_time).

There is ony one Unix time and it is created by using the UTC/GMT time zone. This means you might have convert time zones to calculate timestamps. Most programming language have libraries to help you converting time zones.

**The current Unix time can be found here:** [Epoch Converter](http://www.epochconverter.com)

# Testing

## Test Credentials

These API credentials can be used to test specific scenarios.

**Note:** you will need to create a free account to test other scenarios. Refer to introduction.

| API Username | API Key | Description |
|---|---|---|---|
| `nocredit` | `D83DED51-9E35-4D42-9BB9-0E34B7CA85AE` | This account has no credit. |
| `notactive` | `D83DED51-9E35-4D42-9BB9-0E34B7CA85AE` | This account is not active. |
| `banned` | `D83DED51-9E35-4D42-9BB9-0E34B7CA85AE` | This account is banned. |

## Test SMS/MMS Numbers

The following numbers can be used when testing. No messages will be sent, and your account won't be charged. A success response will be returned.

- `+61411111111`

- `+61422222222`

- `+61433333333`

- `+61444444444`

- `+14055555555`

- `+14055555666`

- `+447777777777`

- `+8615555555555`

## Test Voice Numbers

The following numbers can be used when testing. No messages will be sent, and your account won't be charged. A success response will be returned.

- `+61411111111`

- `+61422222222`

- `+61433333333`

- `+61444444444`

- `+14055555555`

- `+14055555666`

- `+447777777777`

- `+8615555555555`

## Test Fax Numbers

The following numbers can be used when testing. No messages will be sent, and your account won't be charged. A success response will be returned.

- `+61261111111`

- `+61262222222`

- `+61263333333`

## Test Email Addresses

The following email addresses can be used when testing. No messages will be sent, and your account won't be charged. A success response will be returned.

- `test1@test.com`

- `test2@test.com`

- `test3@test.com`

## Test Post Letter Addresses

The following Postal Codes (address_postal_code) can be used when testing. No messages will be sent when using these post codes, and your account won't be charged. A success response will be returned.

- `11111`

- `22222`

- `33333`

Base URLs:

* <a href="https://rest.clicksend.com/v3">https://rest.clicksend.com/v3</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="clicksend-rest-api-v3-account">Account</h1>

## Get account

<a id="opIdGet account"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json'
```

`GET /account`

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_email": 0,
      "access_fax": 0,
      "access_mms": 1,
      "access_post": 0,
      "access_reporting": 1,
      "access_reseller": 0,
      "access_settings": 1,
      "access_sms": 0,
      "access_users": 1,
      "access_voice": 0,
      "api_key": "IJVEGTCF-VOHU-GSVF-KNKK-XHTARJXMQTXK",
      "api_username": "KCIHOYEYGM",
      "email": "ICMGR@VBSPT.com",
      "first_name": "Firstname40710",
      "last_name": "Lastname3672",
      "notes": null,
      "phone_number": "+61433333333",
      "share_campaigns": 1,
      "subaccount_id": 1716
    },
    "account": 0,
    "account_billing_email": "XDVXC@SJRJU.com",
    "account_billing_mobile": "+61433333888",
    "account_name": "FTHCQ~!@#$ %^&*()XQMPO",
    "active": 1,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "1117.461060",
    "balance_commission": "2.330130",
    "banned": 0,
    "country": "AU",
    "default_country_sms": "AU",
    "fax_quality": 0,
    "low_credit_amount": "0.00",
    "old_dashboard": 0,
    "private_uploads": 0,
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_hide_business_name": 1,
    "setting_sms_hide_your_number": 0,
    "setting_sms_message_char_limit": 8,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "PNUMB@VAPXX.com",
    "user_first_name": "fffff",
    "user_id": 3819,
    "user_last_name": "llll",
    "user_phone": "+61433333888",
    "username": "ULXHP"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here's your account"
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Account

<a id="opIdUpdate Account"></a>

> Code samples

```bash
curl https://example.com/account \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_name": "The Awesome Company",
    "country": "AU",
    "password": "pass",
    "private_uploads": 1,
    "setting_sms_hide_business_name": 1,
    "setting_sms_hide_your_number": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johndoe@awesome.com",
    "user_first_name": "John",
    "user_last_name": "Doe",
    "user_phone": "518-481-1002",
    "username": "johndoe"
  }'
```

`PUT /account`

> Body parameter

```json
{
  "account_name": "The Awesome Company",
  "country": "AU",
  "password": "pass",
  "private_uploads": 1,
  "setting_sms_hide_business_name": 1,
  "setting_sms_hide_your_number": 0,
  "timezone": "Australia/Melbourne",
  "user_email": "johndoe@awesome.com",
  "user_first_name": "John",
  "user_last_name": "Doe",
  "user_phone": "518-481-1002",
  "username": "johndoe"
}
```

<h3 id="update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account_name|body|string|true|Your delivery to value.|
|» country|body|string|true|Your country.|
|» password|body|string|true|Your password.|
|» private_uploads|body|number|false|Set the private uploads flag. 0 or 1 only.|
|» setting_sms_hide_business_name|body|number|false|Set the private uploads flag. 0 or 1 only.|
|» setting_sms_hide_your_number|body|number|false|Set the private uploads flag. 0 or 1 only.|
|» timezone|body|string|true|Timezone.|
|» user_email|body|string|true|Your email.|
|» user_first_name|body|string|true|Your first name.|
|» user_last_name|body|string|true|Your last name.|
|» user_phone|body|string|true|Your phone number in E.164 format.|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "_subaccount": null,
    "account": 0,
    "account_billing_email": "1@test.com",
    "account_billing_mobile": "+19171234591",
    "account_name": "The Awesome Company",
    "active": 1,
    "auto_recharge": 1,
    "auto_recharge_amount": "20.00",
    "balance": "0.592200",
    "balance_commission": "0.299954",
    "banned": 0,
    "country": "AU",
    "default_country_sms": "AU",
    "delivery_to": "1@test.com",
    "fax_quality": 0,
    "low_credit_amount": "200.00",
    "old_dashboard": 1,
    "private_uploads": 0,
    "reply_to": "11@test.com",
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 1,
    "setting_sms_hide_business_name": 1,
    "setting_sms_hide_your_number": 0,
    "setting_sms_message_char_limit": 8,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johndoe@awesome.com",
    "user_first_name": "John",
    "user_id": 1,
    "user_last_name": "Doe",
    "user_phone": "518-481-1003",
    "username": "johndoe"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your account has been updated."
}
```

<h3 id="update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new account

<a id="opIdCreate a new account"></a>

> Code samples

```bash
curl https://example.com/account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_name": "The Awesome Company",
    "country": "US",
    "password": "pass",
    "user_email": "johndoe1@awesome.com",
    "user_first_name": "John",
    "user_last_name": "Doe",
    "user_phone": "518-481-1001",
    "username": "johndoe1"
  }'
```

`POST /account`

**Note:** *Authentication isn't required to create a new account.*

> Body parameter

```json
{
  "account_name": "The Awesome Company",
  "country": "US",
  "password": "pass",
  "user_email": "johndoe1@awesome.com",
  "user_first_name": "John",
  "user_last_name": "Doe",
  "user_phone": "518-481-1001",
  "username": "johndoe1"
}
```

<h3 id="create-a-new-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account_name|body|string|true|Your delivery to value.|
|» country|body|string|true|Your country.|
|» password|body|string|true|Your password.|
|» user_email|body|string|true|Your email.|
|» user_first_name|body|string|true|Your first name.|
|» user_last_name|body|string|true|Your last name.|
|» user_phone|body|string|true|Your phone number in E.164 format.|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 1,
      "access_email": 1,
      "access_fax": 1,
      "access_mms": 1,
      "access_post": 1,
      "access_reporting": 1,
      "access_reseller": 1,
      "access_settings": 1,
      "access_sms": 1,
      "access_users": 1,
      "access_voice": 1,
      "api_key": "F3702045-EB2C-0091-C211-7728048DCAE2",
      "api_username": "johndoe1",
      "email": "johndoe1@awesome.com",
      "first_name": "John",
      "last_name": "Doe",
      "notes": null,
      "phone_number": "+15184811001",
      "share_campaigns": 0,
      "subaccount_id": 126
    },
    "account": 0,
    "account_billing_email": "johndoe1@awesome.com",
    "account_billing_mobile": "+15184811001",
    "account_name": "The Awesome Company",
    "active": 0,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "4.998000",
    "balance_commission": "0.299954",
    "banned": 0,
    "country": "US",
    "default_country_sms": "US",
    "delivery_to": null,
    "low_credit_amount": "0.00",
    "old_dashboard": 0,
    "reply_to": "originalemail",
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_message_char_limit": 6,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johndoe1@awesome.com",
    "user_first_name": "John",
    "user_id": 116,
    "user_last_name": "Doe",
    "user_phone": "+15184811001",
    "username": "johndoe1"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Successfully created an account."
}
```

<h3 id="create-a-new-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send account activation token

<a id="opIdSend account activation token"></a>

> Code samples

```bash
curl https://example.com/account-verify/send \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "country": "US",
    "type": "sms",
    "user_phone": "352-394-4199"
  }'
```

`PUT /account-verify/send`

> Body parameter

```json
{
  "country": "US",
  "type": "sms",
  "user_phone": "352-394-4199"
}
```

<h3 id="send-account-activation-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» country|body|string|false|none|
|» type|body|string|false|none|
|» user_phone|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "activation_token": "547850",
    "country": "US",
    "type": "sms",
    "user_phone": "+13523944199"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Verification sent."
}
```

<h3 id="send-account-activation-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Verify new account

<a id="opIdVerify new account"></a>

> Code samples

```bash
curl https://example.com/account-verify/verify/1827364 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /account-verify/verify/{activation_token}`

<h3 id="verify-new-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activation_token|path|string|true|The ActivationToken to be used to verify an account.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_reporting": 1,
      "access_settings": 1,
      "access_smpp": 0,
      "access_users": 1,
      "api_key": "FD3259F9D0A35548682ACEA84A6FF26A",
      "api_username": "1",
      "email": "1@test.com",
      "first_name": "John",
      "last_name": "Doe",
      "mobile": "+639171234501",
      "sms_deidentify_message": 0,
      "subaccount_id": 1,
      "user_id": 1
    },
    "account": 1,
    "account_billing_email": "1@test.com",
    "account_billing_mobile": null,
    "account_name": null,
    "active": 1,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "4.041500",
    "banned": 0,
    "country": "US",
    "default_country_sms": "US",
    "delivery_to": null,
    "low_credit_amount": "1.50",
    "reply_to": "1@test.com",
    "setting_beta": 0,
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 1,
    "setting_unicode_sms": 0,
    "unsubscribe_mail": 0,
    "user_email": "1@test.com",
    "user_first_name": "John",
    "user_id": 1,
    "user_last_name": "Doe",
    "user_phone": "+13523944199",
    "username": "1"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "You're account has been verified."
}
```

<h3 id="verify-new-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Account Usage

<a id="opIdAccount Usage"></a>

> Code samples

```bash
curl https://example.com/account/usage/2016/4/subaccount \
  -H 'Accept: application/json'
```

`GET /account/usage/{year}/{month}/{type}`

<h3 id="account-usage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|number|true|Your account usage year.|
|month|path|number|true|Your account usage month.|
|type|path|string|true|The account type. Value can only be either email or subaccount.|

> Example responses

> 200 Response

```json
{
  "data": {
    "email": [
      {
        "subaccount_id": 1039,
        "total_count": 3992,
        "total_price": "9.0020",
        "username": "user1"
      },
      {
        "subaccount_id": 1047,
        "total_count": 998,
        "total_price": "0.0000",
        "username": "user5"
      }
    ],
    "email_total": {
      "count": 4990,
      "price": "9.0020"
    },
    "fax": [
      {
        "subaccount_id": 1039,
        "total_count": "3.00",
        "total_price": "0.6943",
        "username": "user1"
      },
      {
        "subaccount_id": 1047,
        "total_count": "1.00",
        "total_price": "0.2314",
        "username": "user5"
      }
    ],
    "fax_total": {
      "count": 4,
      "price": "0.9257"
    },
    "post": [
      {
        "subaccount_id": 1039,
        "total_count": "10",
        "total_price": "8.5624",
        "username": "user1"
      },
      {
        "subaccount_id": 1047,
        "total_count": "3",
        "total_price": "2.5586",
        "username": "user5"
      }
    ],
    "post_total": {
      "count": 13,
      "price": "11.1210"
    },
    "sms": [
      {
        "subaccount_id": 1039,
        "total_count": "29.00",
        "total_price": "2.1337",
        "username": "gerald"
      },
      {
        "subaccount_id": 1047,
        "total_count": "4.00",
        "total_price": "0.3080",
        "username": "user5"
      }
    ],
    "sms_total": {
      "count": 33,
      "price": "2.4417"
    },
    "voice": [
      {
        "subaccount_id": 1039,
        "total_count": "6.00",
        "total_price": "0.1980",
        "username": "user1"
      },
      {
        "subaccount_id": 1047,
        "total_count": "1.00",
        "total_price": "0.0330",
        "username": "user5"
      }
    ],
    "voice_total": {
      "count": 7,
      "price": "0.2310"
    }
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your usage for this month."
}
```

<h3 id="account-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-account-recharge">Account Recharge</h1>

## Get Credit Card info

<a id="opIdGet Credit Card info"></a>

> Code samples

```bash
curl https://example.com/recharge/credit-card \
  -H 'Accept: application/json'
```

`GET /recharge/credit-card`

> Example responses

> 200 Response

```json
{
  "data": {
    "display_number": "XXXX-XXXX-XXXX-0000",
    "expiry_month": 5,
    "expiry_year": 2016,
    "name": "Roland Robot"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Customer payment info."
}
```

<h3 id="get-credit-card-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Credit Card info

<a id="opIdUpdate Credit Card info"></a>

> Code samples

```bash
curl https://example.com/recharge/credit-card \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bank_name": "Robotic Banking",
    "cvc": "123",
    "expiry_month": "05",
    "expiry_year": "2016",
    "name": "Roland Robot",
    "number": "5520000000000000"
  }'
```

`PUT /recharge/credit-card`

> Body parameter

```json
{
  "bank_name": "Robotic Banking",
  "cvc": "123",
  "expiry_month": "05",
  "expiry_year": "2016",
  "name": "Roland Robot",
  "number": "5520000000000000"
}
```

<h3 id="update-credit-card-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» bank_name|body|string|true|Your bank's name that issued the credit card.|
|» cvc|body|number|true|Your CVC digits.|
|» expiry_month|body|number|true|Your credit card expiry month.|
|» expiry_year|body|number|false|Your credit card expiry year.|
|» name|body|string|true|Your name.|
|» number|body|number|false|Your credit card no.|

> Example responses

> 200 Response

```json
{
  "data": {
    "token": "cus_6Z3mHM9QvQQoJ28WsIWuLA"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your payment info has been updated."
}
```

<h3 id="update-credit-card-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of Packages

<a id="opIdList of Packages"></a>

> Code samples

```bash
curl 'https://example.com/recharge/packages?country=%22AU%22' \
  -H 'Accept: application/json'
```

`GET /recharge/packages?country={country}`

<h3 id="list-of-packages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Your country.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "packages": [
      {
        "email_price": 0.033,
        "email_quantity": 606,
        "fax_price": 0.198,
        "fax_quantity": 101,
        "package_id": 1,
        "package_price": "20.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 13,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 10,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 1,
        "sms_price": 0.099,
        "sms_quantity": 202,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 343,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 202
      },
      {
        "email_price": 0.033,
        "email_quantity": 1515,
        "fax_price": 0.198,
        "fax_quantity": 252,
        "package_id": 2,
        "package_price": "50.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 33,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 26,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 4,
        "sms_price": 0.099,
        "sms_quantity": 505,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 857,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 505
      },
      {
        "email_price": 0.033,
        "email_quantity": 3030,
        "fax_price": 0.198,
        "fax_quantity": 505,
        "package_id": 3,
        "package_price": "100.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 66,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 53,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 9,
        "sms_price": 0.099,
        "sms_quantity": 1010,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 1715,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 1010
      },
      {
        "email_price": 0.011,
        "email_quantity": 18181,
        "fax_price": 0.198,
        "fax_quantity": 1010,
        "package_id": 4,
        "package_price": "200.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 132,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 106,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 18,
        "sms_price": 0.088,
        "sms_quantity": 2272,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 3430,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 2020
      },
      {
        "email_price": 0.011,
        "email_quantity": 45454,
        "fax_price": 0.198,
        "fax_quantity": 2525,
        "package_id": 5,
        "package_price": "500.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 331,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 265,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 45,
        "sms_price": 0.088,
        "sms_quantity": 5681,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 8576,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 5050
      },
      {
        "email_price": 0.0055,
        "email_quantity": 181818,
        "fax_price": 0.198,
        "fax_quantity": 5050,
        "package_id": 6,
        "package_price": "1000.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 663,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 531,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 90,
        "sms_price": 0.077,
        "sms_quantity": 12987,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 17152,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 10101
      },
      {
        "email_price": 0.0055,
        "email_quantity": 272727,
        "fax_price": 0.198,
        "fax_quantity": 7575,
        "package_id": 7,
        "package_price": "1500.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 995,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 797,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 136,
        "sms_price": 0.077,
        "sms_quantity": 19480,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 25728,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 15151
      },
      {
        "email_price": 0.0055,
        "email_quantity": 363636,
        "fax_price": 0.198,
        "fax_quantity": 10101,
        "package_id": 8,
        "package_price": "2000.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 1327,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 1063,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 181,
        "sms_price": 0.077,
        "sms_quantity": 25974,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 34305,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 20202
      },
      {
        "email_price": 0.0055,
        "email_quantity": 545454,
        "fax_price": 0.198,
        "fax_quantity": 15151,
        "package_id": 9,
        "package_price": "3000.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 1990,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 1594,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 272,
        "sms_price": 0.077,
        "sms_quantity": 38961,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 51457,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 30303
      },
      {
        "email_price": 0.0044,
        "email_quantity": 1250000,
        "fax_price": 0.198,
        "fax_quantity": 27777,
        "package_id": 10,
        "package_price": "5500.00",
        "post_direct_mail_a5_price": 0.66,
        "post_direct_mail_dl_price": 0.44,
        "post_direct_mail_min_quantity": 5000,
        "post_letter_black_price": 1.397,
        "post_letter_black_quantity": 3649,
        "post_letter_colour_price": 1.617,
        "post_letter_colour_quantity": 2923,
        "post_page_black_price": 0.11,
        "post_page_colour_price": 0.264,
        "postcard_price": 11,
        "postcard_quantity": 500,
        "sms_price": 0.066,
        "sms_quantity": 83333,
        "voice_landline_price": 0.0583,
        "voice_landline_quantity": 94339,
        "voice_mobile_price": 0.099,
        "voice_mobile_quantity": 55555
      }
    ]
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Packages."
}
```

<h3 id="list-of-packages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Purchase a Package

<a id="opIdPurchase a Package"></a>

> Code samples

```bash
curl https://example.com/recharge/purchase/1 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /recharge/purchase/{package_id}`

<h3 id="purchase-a-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|package_id|path|number|true|Your package id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "amount": "50.00",
    "amount_aud": "61.86",
    "currency": "USD",
    "date": 1442216451,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Successfully purchased a package #1"
}
```

<h3 id="purchase-a-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transactions

<a id="opIdGet Transactions"></a>

> Code samples

```bash
curl https://example.com/recharge/transactions \
  -H 'Accept: application/json'
```

`GET /recharge/transactions`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443420196,
        "invoice_number": "cb726c65-1c65-47fa-aea2-3ded9ed57557"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443420094,
        "invoice_number": "13d35606-5f10-4d31-9de4-065b025aa5b8"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443418982,
        "invoice_number": "4e9fc8af-f514-45b1-86c2-fc85630bb14d"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443403590,
        "invoice_number": "65c0bfe0-168c-4b46-9dbd-6120a18b5efa"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443149774,
        "invoice_number": "902e78dc-9a70-417b-8426-6967f0efc6eb"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443148806,
        "invoice_number": "21571831-ae8f-4605-ac3e-3efe424a2a39"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443147864,
        "invoice_number": "b978f05b-3de0-4d17-9796-a852eb82d820"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1443146363,
        "invoice_number": "180999f7-1928-4137-a7c3-754420fc1235"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442907133,
        "invoice_number": "3d527e8f-03e1-460b-9f7d-5fce9fc2997e"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442902821,
        "invoice_number": "cdee6647-7b82-49b5-b26e-033eadb2a485"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442902477,
        "invoice_number": "0b6c4073-e214-439d-9821-8f0b69ea61f8"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442902394,
        "invoice_number": "e9d48b44-fad1-4d47-94bb-5d11d88f01f4"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442902192,
        "invoice_number": "1ea56734-a540-4ab6-8b10-fc364065c046"
      },
      {
        "amount": "20.00",
        "currency": "AUD",
        "date": 1442896724,
        "invoice_number": "b5031e92-0ca3-47a1-9f66-b14a7eaac9b1"
      },
      {
        "amount": "50.00",
        "currency": "USD",
        "date": 1442216451,
        "invoice_number": "aeb4bff3-ea08-40ba-9f84-3ff000aa9283"
      }
    ],
    "from": 1,
    "last_page": 2,
    "next_page_url": "https://rest.clicksend.com/v3/recharge/transactions/?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 16
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your transactions."
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific transaction

<a id="opIdGet a specific transaction"></a>

> Code samples

```bash
curl https://example.com/recharge/transactions/cb726c65
```

`GET /recharge/transactions/{transaction_id}`

<h3 id="get-a-specific-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|path|string|true|1c65-47fa-aea2-3ded9ed57557 (number, required) - Your transction id.|

> Example responses

> 200 Response

```text
{
}

```

<h3 id="get-a-specific-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-automation-rules">Automation Rules</h1>

## List Rules

> Code samples

```bash
curl https://example.com/automations/email/receipt \
  -H 'Accept: application/json'
```

`GET /automations/email/receipt`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 1,
        "rule_name": "Email Test Rule"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 2,
        "rule_name": "test"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 6,
        "rule_name": "test"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 7,
        "rule_name": "test"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="list-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a New Rule

> Code samples

```bash
curl https://example.com/automations/email/receipt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 0,
    "rule_name": "My Rule"
  }'
```

`POST /automations/email/receipt`

> Body parameter

```json
{
  "action": "URL",
  "action_address": "http://yourdomain.com",
  "enabled": 1,
  "match_type": 0,
  "rule_name": "My Rule"
}
```

<h3 id="create-a-new-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 0,
    "receipt_rule_id": 8,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Automation email receipt rule has been created."
}
```

<h3 id="create-a-new-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Specific Rule

> Code samples

```bash
curl https://example.com/automations/email/receipt/5 \
  -H 'Accept: application/json'
```

`GET /automations/email/receipt/{rule_id}`

<h3 id="get-a-specific-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The rule id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 0,
    "receipt_rule_id": 1,
    "rule_name": "Email Test Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="get-a-specific-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Rule

> Code samples

```bash
curl https://example.com/automations/email/receipt/8 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 0,
    "rule_name": "My Rule"
  }'
```

`PUT /automations/email/receipt/{rule_id}`

> Body parameter

```json
{
  "action": "URL",
  "action_address": "http://yourdomain.com",
  "enabled": 1,
  "match_type": 0,
  "rule_name": "My Rule"
}
```

<h3 id="update-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The email receipt rule id you want to access.|
|body|body|object|false|none|
|» action|body|string|false|Action.|
|» action_address|body|string|false|Action Address.|
|» enabled|body|number|false|Enabled.|
|» match_type|body|number|false|Match Type. 0=All reports.|
|» rule_name|body|string|false|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 0,
    "receipt_rule_id": 8,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Automation email receipt rule has been updated."
}
```

<h3 id="update-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Rule

> Code samples

```bash
curl https://example.com/automations/email/receipt/8 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/email/receipt/{rule_id}`

<h3 id="delete-a-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The email receipt rule id you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": true,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Automation email receipt rule has been deleted."
}
```

<h3 id="delete-a-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List rules

> Code samples

```bash
curl https://example.com/automations/fax/inbound \
  -H 'Accept: application/json'
```

`GET /automations/fax/inbound`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "EMAIL_FIXED",
        "action_address": "test@test.com",
        "dedicated_number": "19",
        "enabled": 1,
        "inbound_rule_id": 1,
        "rule_name": "Email",
        "user_id": 1
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 2,
        "rule_name": "URL",
        "user_id": 1
      },
      {
        "action": "POLL",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 3,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 4,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "NOTHING",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 6,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "NOTHING",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 7,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "NOTHING",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 8,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "NOTHING",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 9,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "POLL",
        "action_address": "http://yourdomain.com",
        "dedicated_number": "19",
        "enabled": 0,
        "inbound_rule_id": 10,
        "rule_name": "POLL",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 12,
        "rule_name": "Rule Name",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 13,
        "rule_name": "Rule Name",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "email@domain.com",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 14,
        "rule_name": "Rule Name",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "email@domain.com",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 15,
        "rule_name": "Rule Name",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "email@domain.com",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 16,
        "rule_name": "Rule Name",
        "user_id": 1
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "email@domain.com",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 17,
        "rule_name": "Rule Name",
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 2,
    "next_page_url": "https://rest.clicksend.com/v3/automations/fax/inbound?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 20
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your inbound fax."
}
```

<h3 id="list-rules-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new rule

> Code samples

```bash
curl https://example.com/automations/fax/inbound \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "email@domain.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "rule_name": "Rule Name"
  }'
```

`POST /automations/fax/inbound`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "email@domain.com",
  "dedicated_number": "+61298441484",
  "enabled": 1,
  "rule_name": "Rule Name"
}
```

<h3 id="create-a-new-rule-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action|
|» action_address|body|string|true|Action Address|
|» dedicated_number|body|string|true|Decicated Number|
|» enabled|body|number|true|Enable|
|» rule_name|body|string|true|Rule Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "email@domain.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 24,
    "rule_name": "My Rule",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New rule has been added."
}
```

<h3 id="create-a-new-rule-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific rule

> Code samples

```bash
curl https://example.com/automations/fax/inbound/14 \
  -H 'Accept: application/json'
```

`GET /automations/fax/inbound/{inbound_rule_id}`

<h3 id="get-a-specific-rule-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Fax inbound rule id|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "email@domain.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 14,
    "rule_name": "Rule Name",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your inbound fax."
}
```

<h3 id="get-a-specific-rule-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

> Code samples

```bash
curl https://example.com/automations/fax/inbound/14 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "email@domain.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "rule_name": "Rule Name"
  }'
```

`PUT /automations/fax/inbound/{inbound_rule_id}`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "email@domain.com",
  "dedicated_number": "+61298441484",
  "enabled": 1,
  "rule_name": "Rule Name"
}
```

<h3 id="update-a-rule-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Fax inbound rule id|
|body|body|object|false|none|
|» action|body|string|true|Action|
|» action_address|body|string|true|Action Address|
|» dedicated_number|body|string|true|Decicated Number|
|» enabled|body|number|true|Enable|
|» rule_name|body|string|true|Rule Name|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "email@domain.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 14,
    "rule_name": "Rule Name",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your inbound fax."
}
```

<h3 id="update-a-rule-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a rule

> Code samples

```bash
curl https://example.com/automations/fax/inbound/14 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/fax/inbound/{inbound_rule_id}`

<h3 id="delete-a-rule-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Fax inbound rule id|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your fax inbound rule has been deleted."
}
```

<h3 id="delete-a-rule-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Rules

<a id="opIdList Rules"></a>

> Code samples

```bash
curl https://example.com/automations/fax/receipts \
  -H 'Accept: application/json'
```

`GET /automations/fax/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 1,
        "rule_name": "Email Test Rule"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 2,
        "rule_name": "test"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 6,
        "rule_name": "test"
      },
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 7,
        "rule_name": "test"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="list-rules-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a New Rule

<a id="opIdCreate a New Rule"></a>

> Code samples

```bash
curl https://example.com/automations/fax/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 2,
    "rule_name": "My Rule"
  }'
```

`POST /automations/fax/receipts`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 2,
  "rule_name": "My Rule"
}
```

<h3 id="create-a-new-rule-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 2,
    "receipt_rule_id": 4,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your new Fax receipt has been added."
}
```

<h3 id="create-a-new-rule-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Specific Rule

<a id="opIdGet a Specific Rule"></a>

> Code samples

```bash
curl https://example.com/automations/fax/receipts/4 \
  -H 'Accept: application/json'
```

`GET /automations/fax/receipts/{rule_id}`

<h3 id="get-a-specific-rule-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The rule id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 2,
    "receipt_rule_id": 4,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming fax receipt."
}
```

<h3 id="get-a-specific-rule-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a Rule

<a id="opIdUpdate a Rule"></a>

> Code samples

```bash
curl https://example.com/automations/fax/receipts/4 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 1,
    "rule_name": "My Rule"
  }'
```

`PUT /automations/fax/receipts/{rule_id}`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 1,
  "rule_name": "My Rule"
}
```

<h3 id="update-a-rule-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The email receipt rule id you want to access.|
|body|body|object|false|none|
|» action|body|string|false|Action.|
|» action_address|body|string|false|Action Address.|
|» enabled|body|number|false|Enabled.|
|» match_type|body|number|false|Match Type. 0=All reports.|
|» rule_name|body|string|false|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 1,
    "receipt_rule_id": 4,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming fax receipt has been updated."
}
```

<h3 id="update-a-rule-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a Rule

<a id="opIdDelete a Rule"></a>

> Code samples

```bash
curl https://example.com/automations/fax/receipts/4 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/fax/receipts/{rule_id}`

<h3 id="delete-a-rule-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The email receipt rule id you want to delete.|

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming fax receipt has been deleted."
}
```

<h3 id="delete-a-rule-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List rules

<a id="opIdList rules"></a>

> Code samples

```bash
curl https://example.com/automations/sms/inbound \
  -H 'Accept: application/json'
```

`GET /automations/sms/inbound`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "CREATE_CONTACT_PLUS_EMAIL",
        "action_address": "430",
        "body": "test@test.com",
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 10,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 10"
      },
      {
        "action": "CREATE_CONTACT",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 9,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 9"
      },
      {
        "action": "MOVE_CONTACT",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 8,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 8"
      },
      {
        "action": "GROUP_SMS",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 7,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 7"
      },
      {
        "action": "POLL",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 6,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 6"
      },
      {
        "action": "SMS",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 5,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 5"
      },
      {
        "action": "URL",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 4,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 4"
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 3,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 3"
      },
      {
        "action": "EMAIL_USER",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 2,
        "message_search_term": "My Search Term",
        "message_search_type": 3,
        "rule_name": "My Rule 2"
      },
      {
        "action": "AUTO_REPLY",
        "action_address": "john@doe.com",
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 1,
        "message_search_term": null,
        "message_search_type": 3,
        "rule_name": "My Rule 1"
      },
      {
        "action": "CREATE_CONTACT_PLUS_NAME",
        "action_address": 534,
        "body": null,
        "dedicated_number": "+61298441484",
        "enabled": 1,
        "inbound_rule_id": 1,
        "message_search_term": null,
        "message_search_type": 3,
        "rule_name": "My Rule 1"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 10,
    "total": 10
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your list of inbound rules."
}
```

<h3 id="list-rules-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new rule

<a id="opIdCreate a new rule"></a>

> Code samples

```bash
curl https://example.com/automations/sms/inbound/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "message_search_term": "My Search Term",
    "message_search_type": 3,
    "rule_name": "My Rule"
  }'
```

`POST /automations/sms/inbound/`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "dedicated_number": "+61298441484",
  "enabled": 1,
  "message_search_term": "My Search Term",
  "message_search_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="create-a-new-rule-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» dedicated_number|body|number|true|Dedicated Number.|
|» enabled|body|number|true|Enabled.|
|» message_search_term|body|string|true|Message Search Term.|
|» message_search_type|body|number|true|Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 11,
    "message_search_term": "My Search Term",
    "message_search_type": 3,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your record has been added."
}
```

<h3 id="create-a-new-rule-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific rule

<a id="opIdGet a specific rule"></a>

> Code samples

```bash
curl https://example.com/automations/sms/inbound/1 \
  -H 'Accept: application/json'
```

`GET /automations/sms/inbound/{inbound_rule_id}`

<h3 id="get-a-specific-rule-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Inbound Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "body": null,
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 1,
    "message_search_term": null,
    "message_search_type": 3,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your inbound rule."
}
```

<h3 id="get-a-specific-rule-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

<a id="opIdUpdate a rule"></a>

> Code samples

```bash
curl https://example.com/automations/sms/inbound/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "message_search_term": "My Search Term",
    "message_search_type": 3,
    "rule_name": "My Rule"
  }'
```

`PUT /automations/sms/inbound/{inbound_rule_id}`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "dedicated_number": "+61298441484",
  "enabled": 1,
  "message_search_term": "My Search Term",
  "message_search_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="update-a-rule-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Inbound Rule ID.|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» dedicated_number|body|string|true|Dedicated Number|
|» enabled|body|number|true|Enabled.|
|» message_search_term|body|string|true|Message Search Term.|
|» message_search_type|body|number|true|Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "body": null,
    "dedicated_number": "+61298441484",
    "enabled": 1,
    "inbound_rule_id": 1,
    "message_search_term": null,
    "message_search_type": 3,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your record has been updated."
}
```

<h3 id="update-a-rule-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a rule

<a id="opIdDelete a rule"></a>

> Code samples

```bash
curl https://example.com/automations/sms/inbound/1 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/sms/inbound/{inbound_rule_id}`

<h3 id="delete-a-rule-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_rule_id|path|number|true|Inbound Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your record has been deleted."
}
```

<h3 id="delete-a-rule-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List rules

> Code samples

```bash
curl https://example.com/automations/sms/receipts \
  -H 'Accept: application/json'
```

`GET /automations/sms/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "EMAIL_FIXED",
        "action_address": "john@doe.com",
        "enabled": 0,
        "match_type": 0,
        "receipt_rule_id": 5,
        "rule_name": "My Rule"
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "john@doe.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 6,
        "rule_name": "My Rule"
      },
      {
        "action": "EMAIL_FIXED",
        "action_address": "john@doe.com",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 7,
        "rule_name": "My Rule"
      },
      {
        "action": "SMS",
        "action_address": "+61298441484",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 8,
        "rule_name": "My Rule"
      },
      {
        "action": "URL",
        "action_address": "+61298441485",
        "enabled": 1,
        "match_type": 0,
        "receipt_rule_id": 9,
        "rule_name": "My Rule"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your list of rule incoming sms receipt."
}
```

<h3 id="list-rules-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new rule

> Code samples

```bash
curl https://example.com/automations/sms/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "rule_name": "My Rule"
  }'
```

`POST /automations/sms/receipts`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="create-a-new-rule-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports, 1=Only failed, 2=Only successful.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "receipt_rule_id": 10,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your new SMS receipt has been added."
}
```

<h3 id="create-a-new-rule-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific rule

> Code samples

```bash
curl https://example.com/automations/sms/receipts/2 \
  -H 'Accept: application/json'
```

`GET /automations/sms/receipts/{receipt_rule_id}`

<h3 id="get-a-specific-rule-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 0,
    "receipt_rule_id": 6,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming voice receipt."
}
```

<h3 id="get-a-specific-rule-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

> Code samples

```bash
curl https://example.com/automations/sms/receipts/7 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "rule_name": "My Rule"
  }'
```

`PUT /automations/sms/receipts/{receipt_rule_id}`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="update-a-rule-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports, 1=Only failed, 2=Only successful.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 0,
    "receipt_rule_id": 7,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming sms receipt has been updated."
}
```

<h3 id="update-a-rule-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a rule

> Code samples

```bash
curl https://example.com/automations/sms/receipts/7 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/sms/receipts/{receipt_rule_id}`

<h3 id="delete-a-rule-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming sms receipt has been deleted."
}
```

<h3 id="delete-a-rule-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List rules

> Code samples

```bash
curl https://example.com/automations/voice/receipts \
  -H 'Accept: application/json'
```

`GET /automations/voice/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "action": "URL",
        "action_address": "http://yourdomain.com",
        "enabled": 1,
        "match_type": 3,
        "receipt_rule_id": 2,
        "rule_name": "My Rule 2"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your voice receipts."
}
```

<h3 id="list-rules-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new rule

> Code samples

```bash
curl https://example.com/automations/voice/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "rule_name": "My Rule"
  }'
```

`POST /automations/voice/receipts`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="create-a-new-rule-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports, 1=Only failed, 2=Only successful.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "receipt_rule_id": 3,
    "rule_name": "My Rule"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your new voice receipt has been added."
}
```

<h3 id="create-a-new-rule-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific rule

> Code samples

```bash
curl https://example.com/automations/voice/receipts/2 \
  -H 'Accept: application/json'
```

`GET /automations/voice/receipts/{receipt_rule_id}`

<h3 id="get-a-specific-rule-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 3,
    "receipt_rule_id": 2,
    "rule_name": "My Rule 2"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming voice receipt."
}
```

<h3 id="get-a-specific-rule-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

> Code samples

```bash
curl https://example.com/automations/voice/receipts/2 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "EMAIL_FIXED",
    "action_address": "john@doe.com",
    "enabled": 1,
    "match_type": 3,
    "rule_name": "My Rule"
  }'
```

`PUT /automations/voice/receipts/{receipt_rule_id}`

> Body parameter

```json
{
  "action": "EMAIL_FIXED",
  "action_address": "john@doe.com",
  "enabled": 1,
  "match_type": 3,
  "rule_name": "My Rule"
}
```

<h3 id="update-a-rule-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|
|body|body|object|false|none|
|» action|body|string|true|Action.|
|» action_address|body|string|true|Action Address.|
|» enabled|body|number|true|Enabled.|
|» match_type|body|number|true|Match Type. 0=All reports, 1=Only failed, 2=Only successful.|
|» rule_name|body|string|true|Rule Name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "action": "URL",
    "action_address": "http://yourdomain.com",
    "enabled": 1,
    "match_type": 3,
    "receipt_rule_id": 2,
    "rule_name": "My Rule 2"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule incoming voice receipt."
}
```

<h3 id="update-a-rule-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a rule

> Code samples

```bash
curl https://example.com/automations/voice/receipts/2 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /automations/voice/receipts/{receipt_rule_id}`

<h3 id="delete-a-rule-5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|receipt_rule_id|path|number|true|Receipt Rule ID.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your rule voice receipt has been deleted."
}
```

<h3 id="delete-a-rule-5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-contact-lists">Contact Lists</h1>

## Get all Contact Lists

<a id="opIdGet all Contact Lists"></a>

> Code samples

```bash
curl https://example.com/lists \
  -H 'Accept: application/json'
```

`GET /lists`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_contacts_count": 0,
        "list_email_id": "GHPAJCCVGMTD9BLA",
        "list_id": 428,
        "list_name": "List-reFSsJkvRC"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "IIEXAR72O9UAZ7WW",
        "list_id": 429,
        "list_name": "List6eaG4lGIc9"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "HSA3VWFEFCZIF2WT",
        "list_id": 430,
        "list_name": "ListwM4kJrQ7Db"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "HSA3VWFEFCZIF2WT",
        "list_id": 431,
        "list_name": "ListzH6Qs6Uqh5"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "3TCFYRPSW8OXRBK7",
        "list_id": 432,
        "list_name": "ListJaDZPg7SOy"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "BCT20YT185AHVVNI",
        "list_id": 433,
        "list_name": "ListxseEIVS4d5"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "NODYGVDCEVV9Q0CG",
        "list_id": 434,
        "list_name": "ListqX62zF5kan"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "VCYXAZSXNZCVJIPB",
        "list_id": 435,
        "list_name": "ListklPbrd232Z"
      },
      {
        "_contacts_count": 0,
        "list_email_id": "KCDKIEBYPBIYQXJQ",
        "list_id": 436,
        "list_name": "ListFfD3OIiTwJ"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 9,
    "total": 9
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-all-contact-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new contact list

<a id="opIdCreate a new contact list"></a>

> Code samples

```bash
curl https://example.com/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "list_name": "ListCT3QrVL4od"
  }'
```

`POST /lists`

> Body parameter

```json
{
  "list_name": "ListCT3QrVL4od"
}
```

<h3 id="create-a-new-contact-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» list_name|body|string|true|Your contact list name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_contacts_count": 0,
    "list_email_id": "KB0LHD6WXFVHZWTR",
    "list_id": 437,
    "list_name": "ListCT3QrVL4od"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New list has been created."
}
```

<h3 id="create-a-new-contact-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get a specific contact list

<a id="opIdGet a specific contact list"></a>

> Code samples

```bash
curl https://example.com/lists/437 \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}`

<h3 id="get-a-specific-contact-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_contacts_count": 0,
    "list_email_id": "KB0LHD6WXFVHZWTR",
    "list_id": 437,
    "list_name": "ListCT3QrVL4od"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-a-specific-contact-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific contact list

<a id="opIdUpdate a specific contact list"></a>

> Code samples

```bash
curl https://example.com/lists/439 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "list_name": "ListlPJf33ksjP"
  }'
```

`PUT /lists/{list_id}`

> Body parameter

```json
{
  "list_name": "ListlPJf33ksjP"
}
```

<h3 id="update-a-specific-contact-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|
|body|body|object|false|none|
|» list_name|body|string|false|Your new contact list name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_contacts_count": 0,
    "list_email_id": "LINDW2NHNPKHEJB6",
    "list_id": 439,
    "list_name": "ListlPJf33ksjP"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List #439 has been updated."
}
```

<h3 id="update-a-specific-contact-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete a specific contact list

<a id="opIdDelete a specific contact list"></a>

> Code samples

```bash
curl https://example.com/lists/442 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /lists/{list_id}`

<h3 id="delete-a-specific-contact-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List #442 has been deleted."
}
```

<h3 id="delete-a-specific-contact-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export Contacts List

<a id="opIdExport Contacts List"></a>

> Code samples

```bash
curl 'https://example.com/lists/string/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}/export?filename={filename}`

<h3 id="export-contacts-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|
|list_id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-contacts-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Import Contacts to List

<a id="opIdImport Contacts to List"></a>

> Code samples

```bash
curl https://example.com/lists/437/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "field_order": [
      "phone",
      "first_name",
      "last_name",
      "custom1",
      "custom2",
      "custom3",
      "custom4",
      "fax_number",
      "organization_name",
      "email",
      "address_line_1",
      "address_line_2",
      "address_city",
      "address_state",
      "address_postal_code",
      "address_country"
    ],
    "file_url": "http://yourdomain.com/import.csv"
  }'
```

`POST /lists/{list_id}/import`

> Body parameter

```json
{
  "field_order": [
    "phone",
    "first_name",
    "last_name",
    "custom1",
    "custom2",
    "custom3",
    "custom4",
    "fax_number",
    "organization_name",
    "email",
    "address_line_1",
    "address_line_2",
    "address_city",
    "address_state",
    "address_postal_code",
    "address_country"
  ],
  "file_url": "http://yourdomain.com/import.csv"
}
```

<h3 id="import-contacts-to-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|
|body|body|object|false|none|
|» field_order|body|[object]|true|Your field order for your contact import file.|
|» file_url|body|string|true|Path to your CSV import file.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "6254358460638066203",
    "ids": [
      "6254358460638066203"
    ],
    "msg": "Messages put on queue."
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your file is now queued."
}
```

<h3 id="import-contacts-to-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show CSV Import File Preview

<a id="opIdShow CSV Import File Preview"></a>

> Code samples

```bash
curl https://example.com/lists/439/import-csv-preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_url": "http://yourdomain.com/5485EA6144/79E8/import.csv"
  }'
```

`POST /lists/{list_id}/import-csv-preview`

Show first row of the csv import file.

> Body parameter

```json
{
  "file_url": "http://yourdomain.com/5485EA6144/79E8/import.csv"
}
```

<h3 id="show-csv-import-file-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id.|
|body|body|object|false|none|
|» file_url|body|string|true|Path to your CSV import file.|

> Example responses

> 200 Response

```json
{
  "data": {
    "row": [
      "61298444214",
      "John",
      "Doe 1",
      "Custom A 1",
      "Custom B 1",
      "Custom C 1",
      "Custom D 1",
      "61298444214",
      "Organization 1",
      "johndoe1@gmail.com",
      "3842",
      "Worley Avenue",
      "Altavista",
      "VA",
      "24517",
      "PH"
    ]
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your file preview."
}
```

<h3 id="show-csv-import-file-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Acceptable Import Fields

<a id="opIdGet List of Acceptable Import Fields"></a>

> Code samples

```bash
curl https://example.com/lists/string/import-fields \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}/import-fields`

<h3 id="get-list-of-acceptable-import-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "field": "phone",
      "label": "Phone"
    },
    {
      "field": "first_name",
      "label": "First Name"
    },
    {
      "field": "last_name",
      "label": "Last Name"
    },
    {
      "field": "custom1",
      "label": "Custom String 1"
    },
    {
      "field": "custom2",
      "label": "Custom String 2"
    },
    {
      "field": "custom3",
      "label": "Custom String 3"
    },
    {
      "field": "custom4",
      "label": "Custom String 4"
    },
    {
      "field": "fax_number",
      "label": "Fax Number"
    },
    {
      "field": "organization_name",
      "label": "Organization Name"
    },
    {
      "field": "email",
      "label": "Email"
    },
    {
      "field": "address_line_1",
      "label": "Address Line 1"
    },
    {
      "field": "address_line_2",
      "label": "Address Line 2"
    },
    {
      "field": "address_city",
      "label": "City"
    },
    {
      "field": "address_state",
      "label": "State"
    },
    {
      "field": "address_postal_code",
      "label": "Postal Code"
    },
    {
      "field": "address_country",
      "label": "Country"
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of acceptable import fields."
}
```

<h3 id="get-list-of-acceptable-import-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Duplicate Contacts

<a id="opIdRemove Duplicate Contacts"></a>

> Code samples

```bash
curl https://example.com/lists/439/remove-duplicates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fields": [
      "phone_number",
      "first_name",
      "last_name",
      "fax_number",
      "address_country"
    ]
  }'
```

`PUT /lists/{list_id}/remove-duplicates`

> Body parameter

```json
{
  "fields": [
    "phone_number",
    "first_name",
    "last_name",
    "fax_number",
    "address_country"
  ]
}
```

<h3 id="remove-duplicate-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id.|
|body|body|object|false|none|
|» fields|body|[object]|true|List of Contact's fields to be used for checking.|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted": 6
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your list duplicate contacts has been deleted."
}
```

<h3 id="remove-duplicate-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-contact-suggestions">Contact Suggestions</h1>

## List Contact Suggestions

<a id="opIdList Contact Suggestions"></a>

> Code samples

```bash
curl https://example.com/contact-suggestions \
  -H 'Accept: application/json'
```

`GET /contact-suggestions`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 4,
      "custom_1": "Custom A 1",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 5,
      "custom_1": "Custom A 2",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 6,
      "custom_1": "Custom A 3",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 7,
      "custom_1": "Custom A 4",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 8,
      "custom_1": "Custom A 5",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 9,
      "custom_1": "Custom A 6",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 10,
      "custom_1": "Custom A 7",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    },
    {
      "_list_name": "List6eaG4lGIc9",
      "address_city": "Altavista",
      "address_country": "AU",
      "address_line_1": "3842",
      "address_line_2": "Worley Avenue",
      "address_postal_code": "24517",
      "address_state": "VA",
      "contact_id": 11,
      "custom_1": "Custom A 8",
      "custom_2": "Custom B 1",
      "custom_3": "Custom C 1",
      "custom_4": "Custom D 1",
      "date_added": "1462856443",
      "email": "johndoe1@gmail.com",
      "fax_number": "+61298444214",
      "first_name": "John",
      "last_name": "Doe",
      "list_id": 429,
      "organization_name": "Organization 1",
      "phone_number": "+61298444214"
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your results."
}
```

<h3 id="list-contact-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-contacts">Contacts</h1>

## Transfer a Contact

<a id="opIdTransfer a Contact"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts/1/429 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /lists/{from_list_id}/contacts/{contact_id}/{to_list_id}`

Transfers a specific contact to another list.

<h3 id="transfer-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from_list_id|path|number|true|From list id.|
|contact_id|path|number|true|Contact ID.|
|to_list_id|path|number|true|To list id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_list_name": "List6eaG4lGIc9",
    "address_city": "Nashville",
    "address_country": "US",
    "address_line_1": "1554 Buffalo Creek Road",
    "address_line_2": null,
    "address_postal_code": "37214",
    "address_state": "TN",
    "contact_id": 1,
    "custom_1": "Custom 1",
    "custom_2": "Custom 2",
    "custom_3": "Custom 3",
    "custom_4": "Custom 4",
    "date_added": "1456721694",
    "email": "john@doe.com",
    "fax_number": "+61477141888",
    "first_name": "John",
    "last_name": "Doe",
    "list_id": 429,
    "organization_name": "Awesome Company",
    "phone_number": "+61477141888"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Contact #1 has been transferred to List #429"
}
```

<h3 id="transfer-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all Contacts in a List

<a id="opIdGet all Contacts in a List"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}/contacts`

<h3 id="get-all-contacts-in-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id where your contacts belong.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552786,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436157486",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783270696"
      },
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552787,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436157925",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783270697"
      },
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552790,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436158227",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783271811"
      },
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552791,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436158297",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783271975"
      },
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552789,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436158143",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783272925"
      },
      {
        "_list_name": "List6eaG4lGIc9",
        "address_city": null,
        "address_country": null,
        "address_line_1": null,
        "address_line_2": null,
        "address_postal_code": null,
        "address_state": null,
        "contact_id": 552788,
        "custom_1": "",
        "custom_2": "",
        "custom_3": "",
        "custom_4": "",
        "date_added": "1436158047",
        "email": null,
        "fax_number": null,
        "first_name": "Ellen",
        "last_name": "Diaz",
        "list_id": 428,
        "organization_name": null,
        "phone_number": "+16783273589"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-all-contacts-in-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new contact

<a id="opIdCreate a new contact"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "address_city": "Nevada",
    "address_country": "US",
    "address_line_1": "Block 2",
    "address_line_2": "Cool Bldg.",
    "address_postal_code": "36063",
    "address_state": "Las Vegas",
    "custom_1": "Custom 1",
    "custom_2": "Custom 2",
    "custom_3": "Custom 3",
    "custom_4": "Custom 4",
    "email": "ellen@diaz.com",
    "fax_number": "+16783270696",
    "first_name": "Ellen",
    "last_name": "Diaz",
    "organization_name": "Awesome Organization",
    "phone_number": "+16783270696"
  }'
```

`POST /lists/{list_id}/contacts`

Note that the fields `phone_number`, `fax_number` and email` are all optional; however at least one of them must be specified, otherwise the API call will fail.

> Body parameter

```json
{
  "address_city": "Nevada",
  "address_country": "US",
  "address_line_1": "Block 2",
  "address_line_2": "Cool Bldg.",
  "address_postal_code": "36063",
  "address_state": "Las Vegas",
  "custom_1": "Custom 1",
  "custom_2": "Custom 2",
  "custom_3": "Custom 3",
  "custom_4": "Custom 4",
  "email": "ellen@diaz.com",
  "fax_number": "+16783270696",
  "first_name": "Ellen",
  "last_name": "Diaz",
  "organization_name": "Awesome Organization",
  "phone_number": "+16783270696"
}
```

<h3 id="create-a-new-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id where your contact be associated.|
|body|body|object|false|none|
|» address_city|body|string|false|Contact city.|
|» address_country|body|string|false|Contact two-letter country code defined in ISO 3166.|
|» address_line_1|body|string|false|Contact address line 1.|
|» address_line_2|body|string|false|Contact address line 2.|
|» address_postal_code|body|string|false|Contact postal code.|
|» address_state|body|string|false|Contact state.|
|» custom_1|body|string|false|Contact custom 1 text.|
|» custom_2|body|string|false|Contact custom 2 text.|
|» custom_3|body|string|false|Contact custom 3 text.|
|» custom_4|body|string|false|Contact custom 4 text.|
|» email|body|string|false|Contact email.|
|» fax_number|body|string|false|Contact fax number.|
|» first_name|body|string|false|Contact firstname.|
|» last_name|body|string|false|Contact lastname.|
|» organization_name|body|string|false|Your organization name.|
|» phone_number|body|string|true|Contact phone number in E.164 format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_list_name": "List6eaG4lGIc9",
    "address_city": "Nevada",
    "address_country": "US",
    "address_line_1": "Block 2",
    "address_line_2": "Cool Bldg.",
    "address_postal_code": "36063",
    "address_state": "Las Vegas",
    "contact_id": 552802,
    "custom_1": "Custom 1",
    "custom_2": "Custom 2",
    "custom_3": "Custom 3",
    "custom_4": "Custom 4",
    "date_added": "1436160803",
    "email": "ellen@diaz.com",
    "fax_number": "+16783270696",
    "first_name": "Ellen",
    "last_name": "Diaz",
    "list_id": 428,
    "organization_name": "Awesome Organization",
    "phone_number": "+16783270696"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New contact has been created."
}
```

<h3 id="create-a-new-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get a specific contact

<a id="opIdGet a specific contact"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts/552802 \
  -H 'Accept: application/json'
```

`GET /lists/{list_id}/contacts/{contact_id}`

<h3 id="get-a-specific-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|
|contact_id|path|number|true|Your contact id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_list_name": "List6eaG4lGIc9",
    "address_city": "Nevada",
    "address_country": "US",
    "address_line_1": "Block 2",
    "address_line_2": "Cool Bldg.",
    "address_postal_code": "36063",
    "address_state": "Las Vegas",
    "contact_id": 552802,
    "custom_1": "Custom 1",
    "custom_2": "Custom 2",
    "custom_3": "Custom 3",
    "custom_4": "Custom 4",
    "date_added": "1436160803",
    "email": "ellen@diaz.com",
    "fax_number": "+16783270696",
    "first_name": "Ellen",
    "last_name": "Diaz",
    "list_id": 428,
    "organization_name": "Awesome Organization",
    "phone_number": "+16783270696"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-a-specific-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific contact

<a id="opIdUpdate a specific contact"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts/552802 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "address_city": "Nevada",
    "address_country": "US",
    "address_line_1": "Block 6",
    "address_line_2": "Cool Bldg.",
    "address_postal_code": "36063",
    "address_state": "Las Vegas",
    "custom_1": "Custom S72oJ9Teba",
    "custom_2": "Custom NvrRJrKWeq",
    "custom_3": "Custom 2ws94p1Dop",
    "custom_4": "Custom Ku0AaIS5xb",
    "email": "ellen@diaz.com",
    "fax_number": "+16783276356",
    "first_name": "Ellen",
    "last_name": "Diaz",
    "organization_name": "Awesome Organization",
    "phone_number": "+16783275492"
  }'
```

`PUT /lists/{list_id}/contacts/{contact_id}`

> Body parameter

```json
{
  "address_city": "Nevada",
  "address_country": "US",
  "address_line_1": "Block 6",
  "address_line_2": "Cool Bldg.",
  "address_postal_code": "36063",
  "address_state": "Las Vegas",
  "custom_1": "Custom S72oJ9Teba",
  "custom_2": "Custom NvrRJrKWeq",
  "custom_3": "Custom 2ws94p1Dop",
  "custom_4": "Custom Ku0AaIS5xb",
  "email": "ellen@diaz.com",
  "fax_number": "+16783276356",
  "first_name": "Ellen",
  "last_name": "Diaz",
  "organization_name": "Awesome Organization",
  "phone_number": "+16783275492"
}
```

<h3 id="update-a-specific-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Contact list id you want to access.|
|contact_id|path|number|true|Contact id you want to access.|
|body|body|object|false|none|
|» address_city|body|string|false|Contact city.|
|» address_country|body|string|false|Contact two-letter country code defined in ISO 3166.|
|» address_line_1|body|string|false|Contact address line 1.|
|» address_line_2|body|string|false|Contact address line 2.|
|» address_postal_code|body|string|false|Contact postal code.|
|» address_state|body|string|false|Contact state.|
|» custom_1|body|string|false|Contact custom 1 text.|
|» custom_2|body|string|false|Contact custom 2 text.|
|» custom_3|body|string|false|Contact custom 3 text.|
|» custom_4|body|string|false|Contact custom 4 text.|
|» email|body|string|false|Contact email.|
|» fax_number|body|string|false|Contact fax number.|
|» first_name|body|string|false|Contact firstname.|
|» last_name|body|string|false|Contact lastname.|
|» organization_name|body|string|false|Contact organization name.|
|» phone_number|body|string|false|Contact phone number in E.164 format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_list_name": "List6eaG4lGIc9",
    "address_city": "Nevada",
    "address_country": "US",
    "address_line_1": "Block 6",
    "address_line_2": "Cool Bldg.",
    "address_postal_code": "36063",
    "address_state": "Las Vegas",
    "contact_id": 552807,
    "custom_1": "Custom S72oJ9Teba",
    "custom_2": "Custom NvrRJrKWeq",
    "custom_3": "Custom 2ws94p1Dop",
    "custom_4": "Custom Ku0AaIS5xb",
    "date_added": "1436161955",
    "email": "ellen@diaz.com",
    "fax_number": "+16783276356",
    "first_name": "Ellen",
    "last_name": "Diaz",
    "list_id": 428,
    "organization_name": "Awesome Organization",
    "phone_number": "+16783275492"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Contact #552807 has been updated."
}
```

<h3 id="update-a-specific-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete a specific contact

<a id="opIdDelete a specific contact"></a>

> Code samples

```bash
curl https://example.com/lists/428/contacts/552807 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /lists/{list_id}/contacts/{contact_id}`

<h3 id="delete-a-specific-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id you want to access.|
|contact_id|path|number|true|Your contact id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Contact #552807 has been deleted."
}
```

<h3 id="delete-a-specific-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Opted Out Contacts

<a id="opIdRemove Opted Out Contacts"></a>

> Code samples

```bash
curl https://example.com/lists/439/remove-opted-out-contacts/512 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /lists/{list_id}/remove-opted-out-contacts/{opt_out_list_id}`

<h3 id="remove-opted-out-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list_id|path|number|true|Your contact list id.|
|opt_out_list_id|path|number|true|Your opt out list id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted": 6
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Optout contacts has been deleted."
}
```

<h3 id="remove-opted-out-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-countries">Countries</h1>

## Get all Countries

<a id="opIdGet all Countries"></a>

> Code samples

```bash
curl https://example.com/countries \
  -H 'Accept: application/json'
```

`GET /countries`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "AF",
      "value": "Afghanistan"
    },
    {
      "code": "AU",
      "value": "Australia"
    },
    {
      "code": "FI",
      "value": "Finland"
    },
    {
      "code": "FR",
      "value": "France"
    },
    {
      "code": "AE",
      "value": "United Arab Emirates"
    },
    {
      "code": "GB",
      "value": "United Kingdom"
    },
    {
      "code": "US",
      "value": "United States of America"
    },
    {
      "code": "ZW",
      "value": "Zimbabwe"
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Countries."
}
```

<h3 id="get-all-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-delivery-issues">Delivery Issues</h1>

## Get Delivery Issues

<a id="opIdGet Delivery Issues"></a>

> Code samples

```bash
curl https://example.com/delivery-issues \
  -H 'Accept: application/json'
```

`GET /delivery-issues`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "client_comments": null,
        "date_added": 1481610495,
        "description": "this is a test.",
        "email_address": "test@user.com",
        "issue_id": 1,
        "message_id": "B388828B-AD46-4366-8AD3-0305FF5E3FE5",
        "resolved": 0,
        "status": null,
        "support_comments": null,
        "type": "sms",
        "user_id": 3820
      },
      {
        "client_comments": null,
        "date_added": 1481610523,
        "description": "this is a test.",
        "email_address": "test@user.com",
        "issue_id": 2,
        "message_id": "90396A38-146B-46C4-A455-675F620C2E05",
        "resolved": 0,
        "status": null,
        "support_comments": null,
        "type": "sms",
        "user_id": 3820
      },
      {
        "client_comments": null,
        "date_added": 1481611389,
        "description": "this is a test.",
        "email_address": "test@user.com",
        "issue_id": 3,
        "message_id": "4ECFB6CB-0300-45EC-96E1-5AB189432AF5",
        "resolved": 0,
        "status": null,
        "support_comments": null,
        "type": "sms",
        "user_id": 3820
      },
      {
        "client_comments": null,
        "date_added": 1481611467,
        "description": "this is a test.",
        "email_address": "test@user.com",
        "issue_id": 4,
        "message_id": "test",
        "resolved": 0,
        "status": null,
        "support_comments": null,
        "type": "sms",
        "user_id": 3820
      },
      {
        "client_comments": null,
        "date_added": 1481614516,
        "description": "this is a test.",
        "email_address": "test@user.com",
        "issue_id": 5,
        "message_id": "test",
        "resolved": 0,
        "status": null,
        "support_comments": null,
        "type": "SMS",
        "user_id": 3820
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 7,
    "total": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="get-delivery-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Delivery Issue

<a id="opIdCreate Delivery Issue"></a>

> Code samples

```bash
curl https://example.com/delivery-issues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_comments": "test",
    "description": "This is a test",
    "email_address": "john_doe@user.com",
    "message_id": "B388828B-AD46-4366-8AD3-0305FF5E3FE5",
    "type": "SMS"
  }'
```

`POST /delivery-issues`

> Body parameter

```json
{
  "client_comments": "test",
  "description": "This is a test",
  "email_address": "john_doe@user.com",
  "message_id": "B388828B-AD46-4366-8AD3-0305FF5E3FE5",
  "type": "SMS"
}
```

<h3 id="create-delivery-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_comments|body|string|false|The user's comments.|
|» description|body|string|true|The description of the message.|
|» email_address|body|string|true|The user's email address.|
|» message_id|body|string|true|The message id of the message.|
|» type|body|string|true|The type of message, must be one of the following values: `SMS`, `MMS`, `VOICE`, `EMAIL_MARKETING`, `EMAIL_TRANSACTIONAL`, `FAX`, `POST`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "date_added": 1481617579,
    "description": "this is a test.",
    "email_address": "john_doe@user.com",
    "issue_id": 9,
    "message_id": "B388828B-AD46-4366-8AD3-0305FF5E3FE5",
    "type": "SMS",
    "user_id": 3820
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Delivery issue has been created."
}
```

<h3 id="create-delivery-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-email-marketing">Email Marketing</h1>

## Get All Email Campaigns

<a id="opIdGet All Email Campaigns"></a>

> Code samples

```bash
curl https://example.com/email-campaigns \
  -H 'Accept: application/json'
```

`GET /email-campaigns`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "abuse_count": 0,
        "click_count": 0,
        "custom_string": "",
        "date_added": "1455586793",
        "email_campaign_id": 64,
        "from_email_address_id": 2,
        "from_name": "Test name",
        "hard_bounce_count": 0,
        "list_id": 443,
        "name": "test email",
        "open_count": 5,
        "schedule": "",
        "send_count": 0,
        "soft_bounce_count": 0,
        "status": "Sent",
        "subaccount_id": 1038,
        "subject": "My test subject",
        "template_id": 24,
        "unsubscribe_count": 0,
        "user_id": 1201
      },
      {
        "abuse_count": 0,
        "click_count": 0,
        "custom_string": "",
        "date_added": "1455586848",
        "email_campaign_id": 65,
        "from_email_address_id": 2,
        "from_name": "Test name",
        "hard_bounce_count": 0,
        "list_id": 443,
        "name": "test email",
        "open_count": 0,
        "schedule": "",
        "send_count": 0,
        "soft_bounce_count": 0,
        "status": "Queued",
        "subaccount_id": 1038,
        "subject": "My test subject",
        "template_id": 24,
        "unsubscribe_count": 0,
        "user_id": 1201
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your email campaigns"
}
```

<h3 id="get-all-email-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price

<a id="opIdCalculate Price"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "<p>This is a test</p>",
    "from_email_address_id": 2,
    "from_name": "From name",
    "list_id": 456,
    "name": "John Doe",
    "subject": "Lorem Ipsum",
    "template_id": 31
  }'
```

`POST /email-campaigns/price`

> Body parameter

```json
{
  "body": "<p>This is a test</p>",
  "from_email_address_id": 2,
  "from_name": "From name",
  "list_id": 456,
  "name": "John Doe",
  "subject": "Lorem Ipsum",
  "template_id": 31
}
```

<h3 id="calculate-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» from_email_address_id|body|number|true|The allowed email address id.|
|» from_name|body|string|true|The name that will appear on the email.|
|» list_id|body|number|true|The list id you want to access.|
|» name|body|string|true|The name of the sender.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» subject|body|string|true|The subject of the email campaign.|
|» template_id|body|number|true|The template id you want to use.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "data": {
      "body": "<p>This is a test</p>",
      "from_email_address_id": 2,
      "from_name": "From name",
      "list_id": 456,
      "name": "John Doe",
      "subject": "Lorem Ipsum",
      "template_id": 31
    },
    "queued_count": 2,
    "total_count": 6,
    "total_price": "0.0066"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Total price for email campaign."
}
```

<h3 id="calculate-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Email Campaign

<a id="opIdCreate Email Campaign"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "<p>This is a test</p>",
    "from_email_address_id": 2,
    "from_name": "From name",
    "list_id": 456,
    "name": "John Doe",
    "subject": "Lorem Ipsum",
    "template_id": 31
  }'
```

`POST /email-campaigns/send`

> Body parameter

```json
{
  "body": "<p>This is a test</p>",
  "from_email_address_id": 2,
  "from_name": "From name",
  "list_id": 456,
  "name": "John Doe",
  "subject": "Lorem Ipsum",
  "template_id": 31
}
```

<h3 id="create-email-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» from_email_address_id|body|number|true|The allowed email address id.|
|» from_name|body|string|true|The name that will appear on the email.|
|» list_id|body|number|true|The list id you want to access.|
|» name|body|string|true|The name of the sender.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» subject|body|string|true|The subject of the email campaign.|
|» template_id|body|number|true|The template id you want to use.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "data": {
      "abuse_count": 0,
      "body": "<p>This is a test</p>",
      "body_plain_text": "This is a test",
      "click_count": 0,
      "custom_string": "",
      "date_added": "1458011424",
      "email_campaign_id": 69,
      "from_email_address_id": 2,
      "from_name": "From name",
      "hard_bounce_count": 0,
      "list_id": 456,
      "name": "John Doe",
      "open_count": 0,
      "schedule": "",
      "send_count": 0,
      "soft_bounce_count": 0,
      "status": "Queued",
      "subaccount_id": 1038,
      "subject": "Lorem Ipsum",
      "template_id": 31,
      "unsubscribe_count": 0,
      "user_id": 1201
    },
    "queued_count": 2,
    "total_count": 6,
    "total_price": "0.0066"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email campaign has been created."
}
```

<h3 id="create-email-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Email Campaign History

<a id="opIdGet Specific Email Campaign History"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/77/history \
  -H 'Accept: application/json'
```

`GET /email-campaigns/{campaign_id}/history`

<h3 id="get-specific-email-campaign-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|number|true|The email campaign id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "click_count": 0,
        "contact_id": 669105,
        "email_campaign_id": 77,
        "from_address": "4",
        "from_name": "test name",
        "hard_bounce_count": 13,
        "message_id": "7CB3227C-7F8C-4A72-A0CB-36283236D99F",
        "open_count": 0,
        "processed_at": null,
        "soft_bounce_count": 1,
        "status": "SpamReport",
        "subject": "tet subject",
        "to_address": "test2@test.com",
        "to_name": "test2@test.com"
      },
      {
        "click_count": 0,
        "contact_id": 669104,
        "email_campaign_id": 77,
        "from_address": "4",
        "from_name": "test name",
        "hard_bounce_count": 0,
        "message_id": "603C5349-5A24-40B4-89ED-F7619F7CC8A3",
        "open_count": 0,
        "processed_at": null,
        "soft_bounce_count": 0,
        "status": null,
        "subject": "tet subject",
        "to_address": "test@test.com",
        "to_name": "test@test.com"
      },
      {
        "click_count": 0,
        "contact_id": 669105,
        "email_campaign_id": 77,
        "from_address": "4",
        "from_name": "test name",
        "hard_bounce_count": 0,
        "message_id": "5C5C0918-B263-42AA-8B5D-9E8ACECC0C64",
        "open_count": 0,
        "processed_at": null,
        "soft_bounce_count": 0,
        "status": null,
        "subject": "tet subject",
        "to_address": "test2@test.com",
        "to_name": "test2@test.com"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="get-specific-email-campaign-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Email Campaign

<a id="opIdGet Specific Email Campaign"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/1 \
  -H 'Accept: application/json'
```

`GET /email-campaigns/{email_campaign_id}`

<h3 id="get-specific-email-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_campaign_id|path|number|true|The email campaign id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "abuse_count": 0,
    "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" \"http://www.w3.org/TR/REC-html40/loose.dtd\">\n<html><body><p>This is a test</p></body></html>\n",
    "body_plain_text": "This is a test",
    "click_count": 0,
    "custom_string": "",
    "date_added": "1455586793",
    "email_campaign_id": 64,
    "from_email_address_id": 2,
    "from_name": "Test name",
    "hard_bounce_count": 0,
    "list_id": 443,
    "name": "test email",
    "open_count": 5,
    "schedule": "",
    "send_count": 0,
    "soft_bounce_count": 0,
    "status": "Sent",
    "subaccount_id": 1038,
    "subject": "My test subject",
    "template_id": 24,
    "unsubscribe_count": 0,
    "user_id": 1201
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your email campaign."
}
```

<h3 id="get-specific-email-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Email Campaign

<a id="opIdUpdate Email Campaign"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "<p>This is a test</p>",
    "from_email_address_id": 2,
    "from_name": "From name",
    "list_id": 456,
    "name": "John Doe",
    "subject": "Lorem Ipsum",
    "template_id": 31
  }'
```

`PUT /email-campaigns/{email_campaign_id}`

> Body parameter

```json
{
  "body": "<p>This is a test</p>",
  "from_email_address_id": 2,
  "from_name": "From name",
  "list_id": 456,
  "name": "John Doe",
  "subject": "Lorem Ipsum",
  "template_id": 31
}
```

<h3 id="update-email-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_campaign_id|path|number|true|The email campaign id you want to access.|
|body|body|object|false|none|
|» from_email_address_id|body|number|false|The allowed email address id.|
|» from_name|body|string|false|The name that will appear on the email.|
|» list_id|body|number|false|The list id you want to access.|
|» name|body|string|false|The name of the sender.|
|» schedule|body|number|false|Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» subject|body|string|false|The subject of the email campaign.|
|» template_id|body|number|false|The template id you want to use.|

> Example responses

> 200 Response

```json
{
  "data": {
    "abuse_count": 0,
    "body": "<p>This is a test</p>",
    "body_plain_text": "This is a test",
    "click_count": 0,
    "custom_string": "",
    "date_added": "1458011424",
    "email_campaign_id": 69,
    "from_email_address_id": 2,
    "from_name": "From name",
    "hard_bounce_count": 0,
    "list_id": 456,
    "name": "John Doe",
    "open_count": 0,
    "schedule": "13213213212",
    "send_count": 0,
    "soft_bounce_count": 0,
    "status": "Scheduled",
    "subaccount_id": 1038,
    "subject": "Lorem Ipsum",
    "template_id": 31,
    "unsubscribe_count": 0,
    "user_id": 1201
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email campaign has been updated."
}
```

<h3 id="update-email-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel Email Campaign

<a id="opIdCancel Email Campaign"></a>

> Code samples

```bash
curl https://example.com/email-campaigns/1/cancel \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /email-campaigns/{email_campaign_id}/cancel`

<h3 id="cancel-email-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_campaign_id|path|number|true|The email campaign id you want to cancel.|

> Example responses

> 200 Response

```json
{
  "data": {
    "abuse_count": 0,
    "body": "<p>This is a test</p>",
    "body_plain_text": "This is a test",
    "click_count": 0,
    "custom_string": "",
    "date_added": "1458011424",
    "email_campaign_id": 69,
    "from_email_address_id": 2,
    "from_name": "From name",
    "hard_bounce_count": 0,
    "list_id": 456,
    "name": "John Doe",
    "open_count": 0,
    "schedule": "13213213212",
    "send_count": 0,
    "soft_bounce_count": 0,
    "status": "Cancelled",
    "subaccount_id": 1038,
    "subject": "Lorem Ipsum",
    "template_id": 31,
    "unsubscribe_count": 0,
    "user_id": 1201
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email campaign has been cancelled."
}
```

<h3 id="cancel-email-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Verification Token

<a id="opIdSend Verification Token"></a>

> Code samples

```bash
curl https://example.com/email/address-verify/1/send \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /email/address-verify/{email_address_id}/send`

<h3 id="send-verification-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|The email addess id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Verification email has been sent."
}
```

<h3 id="send-verification-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Allowed Email Address

<a id="opIdVerify Allowed Email Address"></a>

> Code samples

```bash
curl https://example.com/email/address-verify/5/verify/3BD73304 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /email/address-verify/{email_address_id}/verify/{activation_token}`

<h3 id="verify-allowed-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|The email address id you want to access.|
|activation_token|path|string|true|6E8B-4FDB-99A7-7ED08DF97BCC (required, string) - Your activation token.|

> Example responses

> 200 Response

```json
{
  "data": {
    "date_added": "1458009394",
    "email_address": "test222@user.com",
    "email_address_id": 5,
    "verified": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email address verified."
}
```

<h3 id="verify-allowed-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get All Allowed Email Addresses

<a id="opIdGet All Allowed Email Addresses"></a>

> Code samples

```bash
curl https://example.com/email/addresses \
  -H 'Accept: application/json'
```

`GET /email/addresses`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "date_added": "1447736880",
        "email_address": "test@user.com",
        "email_address_id": 2,
        "verified": 1
      },
      {
        "date_added": "1449042967",
        "email_address": "test2@user.com",
        "email_address_id": 3,
        "verified": 0
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your email addresses"
}
```

<h3 id="get-all-allowed-email-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Allowed Email Address

<a id="opIdCreate Allowed Email Address"></a>

> Code samples

```bash
curl https://example.com/email/addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Body": "",
    "email_address": "johndoe1@user.com"
  }'
```

`POST /email/addresses`

> Body parameter

```json
{
  "Body": "",
  "email_address": "johndoe1@user.com"
}
```

<h3 id="create-allowed-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» Body|body|string|false|{<br>    "email_address" : "test222@user.com"<br>}|
|» email_address|body|string|true|Your email.|

> Example responses

> 200 Response

```json
{
  "data": {
    "date_added": "1458009394",
    "email_address": "test222@user.com",
    "email_address_id": 5,
    "verified": 0
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email address has been created."
}
```

<h3 id="create-allowed-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Allowed Email Address

<a id="opIdGet Specific Allowed Email Address"></a>

> Code samples

```bash
curl https://example.com/email/addresses/4 \
  -H 'Accept: application/json'
```

`GET /email/addresses/{email_address_id}`

<h3 id="get-specific-allowed-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|The email address you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "date_added": "1449043066",
    "email_address": "test3@user.com",
    "email_address_id": 4,
    "verified": 0
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your email address."
}
```

<h3 id="get-specific-allowed-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Allowed Email Address

<a id="opIdDelete Allowed Email Address"></a>

> Code samples

```bash
curl https://example.com/email/addresses/5 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /email/addresses/{email_address_id}`

<h3 id="delete-allowed-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|The email address you want to access.|

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Email address deleted."
}
```

<h3 id="delete-allowed-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get All Master Email Templates

<a id="opIdGet All Master Email Templates"></a>

> Code samples

```bash
curl https://example.com/email/master-templates \
  -H 'Accept: application/json'
```

`GET /email/master-templates`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "date_added": "1458182912",
      "template_id_master": 57,
      "template_name": "Basic 2",
      "thumbnail": {
        "large": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/basic2/thumb-large.jpg",
        "small": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/basic2/thumb-small.jpg"
      }
    },
    {
      "date_added": "1445848821",
      "template_id_master": 1,
      "template_name": "Minty",
      "thumbnail": {
        "large": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/minty/thumb-large.jpg",
        "small": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/minty/thumb-small.jpg"
      }
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Email Master Templates"
}
```

<h3 id="get-all-master-email-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get All Master Template Categories

<a id="opIdGet All Master Template Categories"></a>

> Code samples

```bash
curl https://example.com/email/master-templates-categories \
  -H 'Accept: application/json'
```

`GET /email/master-templates-categories`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "category_id": 2,
      "name": "Alerts/Notificartions"
    },
    {
      "category_id": 3,
      "name": "Art"
    },
    {
      "category_id": 4,
      "name": "Birthday"
    },
    {
      "category_id": 23,
      "name": "Blank Template"
    },
    {
      "category_id": 5,
      "name": "Coupons"
    },
    {
      "category_id": 6,
      "name": "eCommerce"
    },
    {
      "category_id": 7,
      "name": "Education"
    },
    {
      "category_id": 8,
      "name": "Events/Reminders"
    },
    {
      "category_id": 1,
      "name": "Featured"
    },
    {
      "category_id": 9,
      "name": "Fitness"
    },
    {
      "category_id": 11,
      "name": "Holiday/Travel"
    },
    {
      "category_id": 12,
      "name": "Inspirational"
    },
    {
      "category_id": 13,
      "name": "Kids"
    },
    {
      "category_id": 14,
      "name": "Music"
    },
    {
      "category_id": 15,
      "name": "Newsletters"
    },
    {
      "category_id": 16,
      "name": "Non-profit"
    },
    {
      "category_id": 17,
      "name": "Photography"
    },
    {
      "category_id": 18,
      "name": "Real Estate"
    },
    {
      "category_id": 10,
      "name": "Restaurant/Food"
    },
    {
      "category_id": 21,
      "name": "Sports"
    },
    {
      "category_id": 22,
      "name": "Stationery"
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Email Categories"
}
```

<h3 id="get-all-master-template-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Email Template Category

<a id="opIdGet Specific Email Template Category"></a>

> Code samples

```bash
curl https://example.com/email/master-templates-categories/25 \
  -H 'Accept: application/json'
```

`GET /email/master-templates-categories/{category_id}`

<h3 id="get-specific-email-template-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|path|string|true|Your category id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "category_id": 4,
    "name": "Birthday"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Email Categories"
}
```

<h3 id="get-specific-email-template-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get All Templates For Category

<a id="opIdGet All Templates For Category"></a>

> Code samples

```bash
curl https://example.com/email/master-templates-categories/1/master-templates \
  -H 'Accept: application/json'
```

`GET /email/master-templates-categories/{category_id}/master-templates`

<h3 id="get-all-templates-for-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category_id|path|string|true|Your category id.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" ...\n                     </tr>\n                  </tbody>\n               </table>\n            </td>\n         </tr>\n      </tbody>\n   </table>\n</body>\n</html>",
      "category_id": 1,
      "date_added": "1445848821",
      "template_id_master": 1,
      "template_name": "Minty",
      "thumbnail": {
        "large": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/minty/thumb-large.jpg",
        "small": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/minty/thumb-small.jpg"
      }
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of Email Templates By Category"
}
```

<h3 id="get-all-templates-for-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Master Template

<a id="opIdGet Specific Master Template"></a>

> Code samples

```bash
curl https://example.com/email/master-templates/25 \
  -H 'Accept: application/json'
```

`GET /email/master-templates/{template_id}`

<h3 id="get-specific-master-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|Your template id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "date_added": "1458182912",
    "template_id_master": 57,
    "template_name": "Basic 2",
    "thumbnail": {
      "large": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/basic2/thumb-large.jpg",
      "small": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-master/basic2/thumb-small.jpg"
    }
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your email template"
}
```

<h3 id="get-specific-master-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get All Email Templates

<a id="opIdGet All Email Templates"></a>

> Code samples

```bash
curl https://example.com/email/templates \
  -H 'Accept: application/json'
```

`GET /email/templates`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "template_id": 281,
        "template_name": "Test"
      },
      {
        "template_id": 290,
        "template_name": "Minions"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your email templates."
}
```

<h3 id="get-all-email-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create New Email Template from Master Template

<a id="opIdCreate New Email Template from Master Template"></a>

> Code samples

```bash
curl https://example.com/email/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "template_id_master": 57,
    "template_name": "Minions"
  }'
```

`POST /email/templates`

> Body parameter

```json
{
  "template_id_master": 57,
  "template_name": "Minions"
}
```

<h3 id="create-new-email-template-from-master-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» template_id_master|body|number|true|The ID of the master template you want to base on.|
|» template_name|body|string|true|The intended name for the new template.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "<div id=\"nb_wrapper\"><!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"...",
    "template_id": 292,
    "template_id_master": 57,
    "template_name": "new minion template!"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New email template has been saved."
}
```

<h3 id="create-new-email-template-from-master-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upload Image to Specific Template

<a id="opIdUpload Image to Specific Template"></a>

> Code samples

```bash
curl https://example.com/email/templates-images/1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "image": "image.png",
    "url": "http://yourdomain.com/image.png"
  }'
```

`POST /email/templates-images/{template_id}`

> Body parameter

```json
{
  "image": "image.png",
  "url": "http://yourdomain.com/image.png"
}
```

<h3 id="upload-image-to-specific-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|Your template id.|
|body|body|object|false|none|
|» image|body|string|false|Uploads your selected image file.|
|» url|body|string|false|Uploads the image from the supplied URL.|

> Example responses

> 200 Response

```json
{
  "data": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_email-marketing/_templates-user/BEC51696-E923-4998-9249-C9B49DB7571A/2056F933-9C64-4E57-AB19-01F65EBB7C0A.png",
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your uploaded image."
}
```

<h3 id="upload-image-to-specific-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Email Template

<a id="opIdGet Specific Email Template"></a>

> Code samples

```bash
curl https://example.com/email/templates/291 \
  -H 'Accept: application/json'
```

`GET /email/templates/{template_id}`

<h3 id="get-specific-email-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|number|true|The email template id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "<div id=\"nb_wrapper\"><!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"> \n<html xmlns:v=\"urn:schemas-microsoft-com:vml\">\n<head>\n\n   <!-- Define Charset -->\n   ...",
    "template_id": 281,
    "template_id_master": 11,
    "template_name": "Test"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your email template."
}
```

<h3 id="get-specific-email-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an Email Template

<a id="opIdUpdate an Email Template"></a>

> Code samples

```bash
curl https://example.com/email/templates/291 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "body": "string",
    "template_name": "string"
  }'
```

`PUT /email/templates/{template_id}`

> Body parameter

```json
{
  "body": "string",
  "template_name": "string"
}
```

<h3 id="update-an-email-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|number|true|The id of the template to be updated.|
|body|body|object|false|none|
|» body|body|string|true|Your template body.|
|» template_name|body|string|true|The intended name for the new template.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is the new body of your template",
    "template_id": 281,
    "template_id_master": 11,
    "template_name": "NewTemplate"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your email template has been updated."
}
```

<h3 id="update-an-email-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete Email Template

<a id="opIdDelete Email Template"></a>

> Code samples

```bash
curl https://example.com/email/templates/25 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /email/templates/{template_id}`

<h3 id="delete-email-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|number|true|Your template id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your email template has been deleted."
}
```

<h3 id="delete-email-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-email-to-sms-allowed-address">Email-to-SMS Allowed Address</h1>

## List of Email-to-SMS Allowed Address

<a id="opIdList of Email-to-SMS Allowed Address"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms \
  -H 'Accept: application/json'
```

`GET /sms/email-sms`

Get list of allowed email addresses.

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "email_address": "my@email.com",
        "email_address_id": 84,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 85,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 86,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 87,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 88,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 89,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 90,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 91,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 92,
        "from": "+13523944199"
      },
      {
        "email_address": "*@clickssend.com",
        "email_address_id": 93,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com.com",
        "email_address_id": 94,
        "from": "+13523944199"
      },
      {
        "email_address": "my@email.com",
        "email_address_id": 95,
        "from": "+17128848693"
      },
      {
        "email_address": "lOWAW@gmail.com",
        "email_address_id": 96,
        "from": "+17128848252"
      },
      {
        "email_address": "munPM@gmail.com",
        "email_address_id": 97,
        "from": "+17128848867"
      },
      {
        "email_address": "XZKK9@gmail.com",
        "email_address_id": 98,
        "from": "+17128847113"
      }
    ],
    "from": 1,
    "last_page": 2,
    "next_page_url": "https://rest.clicksend.com/v3/sms/email-sms/?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 25
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are some data."
}
```

<h3 id="list-of-email-to-sms-allowed-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Email to SMS Allowed Address

<a id="opIdCreate Email to SMS Allowed Address"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "Cv3p0@gmail.com",
    "from": "+17128845887"
  }'
```

`POST /sms/email-sms`

Create an allowed email address.

> Body parameter

```json
{
  "email_address": "Cv3p0@gmail.com",
  "from": "+17128845887"
}
```

<h3 id="create-email-to-sms-allowed-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email_address|body|string|true|Your email address.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|

> Example responses

> 200 Response

```json
{
  "data": {
    "email_address": "Cv3p0@gmail.com",
    "email_address_id": 107,
    "from": "+17128845887"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New data has been saved."
}
```

<h3 id="create-email-to-sms-allowed-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get specific Email-to-SMS Allowed Address

<a id="opIdGet specific Email-to-SMS Allowed Address"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms/113 \
  -H 'Accept: application/json'
```

`GET /sms/email-sms/{email_address_id}`

Get a specific allowed email address.

<h3 id="get-specific-email-to-sms-allowed-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|Your email address id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "email_address": "RXcMn@gmail.com",
    "email_address_id": 113,
    "from": "+17128843729"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are some data."
}
```

<h3 id="get-specific-email-to-sms-allowed-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Email-to-SMS Allowed Address

<a id="opIdUpdate Email-to-SMS Allowed Address"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms/107 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email_address": "pfvRZ@gmail.com",
    "from": "+17128842283"
  }'
```

`PUT /sms/email-sms/{email_address_id}`

Update a specific allowed email address.

> Body parameter

```json
{
  "email_address": "pfvRZ@gmail.com",
  "from": "+17128842283"
}
```

<h3 id="update-email-to-sms-allowed-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|Your email address id.|
|body|body|object|false|none|
|» email_address|body|string|true|Your email address.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|

> Example responses

> 200 Response

```json
{
  "data": {
    "email_address": "pfvRZ@gmail.com",
    "email_address_id": 107,
    "from": "+17128842283"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your data has been updated."
}
```

<h3 id="update-email-to-sms-allowed-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete Email-to-SMS Allowed Address

<a id="opIdDelete Email-to-SMS Allowed Address"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms/107 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sms/email-sms/{email_address_id}`

Delete a specific allowed email address.

<h3 id="delete-email-to-sms-allowed-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_address_id|path|number|true|Your email address id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Allowed email address was deleted."
}
```

<h3 id="delete-email-to-sms-allowed-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-email-to-sms-stripped-strings">Email-to-SMS Stripped Strings</h1>

## List Stripped Strings

<a id="opIdList Stripped Strings"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms-stripped-strings \
  -H 'Accept: application/json'
```

`GET /sms/email-sms-stripped-strings`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "rule_id": 18,
        "strip_string": "This is a test1."
      },
      {
        "rule_id": 19,
        "strip_string": "This is a test2."
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="list-stripped-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Stripped String

<a id="opIdCreate Stripped String"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms-stripped-strings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "strip_string": "~~~test~~~"
  }'
```

`POST /sms/email-sms-stripped-strings`

> Body parameter

```json
{
  "strip_string": "~~~test~~~"
}
```

<h3 id="create-stripped-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» strip_string|body|string|true|The string that you want to strip from the body of email.|

> Example responses

> 200 Response

```json
{
  "data": {
    "rule_id": 20,
    "strip_string": "~~~~test~~~~"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Strip string has been created."
}
```

<h3 id="create-stripped-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find Specific Stripped String

<a id="opIdFind Specific Stripped String"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms-stripped-strings/18 \
  -H 'Accept: application/json'
```

`GET /sms/email-sms-stripped-strings/{rule_id}`

<h3 id="find-specific-stripped-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The rule id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "rule_id": 18,
    "strip_string": "You've received a reply from."
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="find-specific-stripped-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Stripped String

<a id="opIdUpdate Stripped String"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms-stripped-strings/20 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "strip_string": "~~~test1~~~"
  }'
```

`PUT /sms/email-sms-stripped-strings/{rule_id}`

> Body parameter

```json
{
  "strip_string": "~~~test1~~~"
}
```

<h3 id="update-stripped-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The rule id you want to access.|
|body|body|object|false|none|
|» strip_string|body|string|false|The string that you want to strip from the body of email.|

> Example responses

> 200 Response

```json
{
  "data": {
    "rule_id": 20,
    "strip_string": "~~~~test1~~~~"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Strip string has been updated."
}
```

<h3 id="update-stripped-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Stripped String

<a id="opIdDelete Stripped String"></a>

> Code samples

```bash
curl https://example.com/sms/email-sms-stripped-strings/20 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sms/email-sms-stripped-strings/{rule_id}`

<h3 id="delete-stripped-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rule_id|path|number|true|The rule id you want to access.|

> Example responses

> 200 Response

```json
{
  "data": true,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Strip string has been deleted."
}
```

<h3 id="delete-stripped-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-fax">Fax</h1>

# Supported File Types

- Supported file types are listed below. If you need to convert a file to a supported format, it can be first passed to our uploads endpoint: `/uploads?convert=fax`

- This will return a URL to the converted pdf file that can be used in the /fax/send endpoint.

- Contact us to add support for any other file type.

## Documents

| File type | Required to be passed to uploads endpoint first? |
|---|---|
| pdf | No |
| docx | Yes |
| doc | Yes |
| rtf | Yes |

## Export Fax History

<a id="opIdExport Fax History"></a>

> Code samples

```bash
curl 'https://example.com/fax/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /fax/history/export?filename={filename}`

<h3 id="export-fax-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-fax-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Fax History

<a id="opIdGet Fax History"></a>

> Code samples

```bash
curl 'https://example.com/fax/history?date_from=1457572619&date_to=1457573000&q=status%3ASent%2Cstatus_code%3A201&order_by=subject%3Adesc' \
  -H 'Accept: application/json'
```

`GET /fax/history?date_from={date_from}&date_to={date_to}&q={q}&order_by={order_by}`

Get a list of Fax History.

<h3 id="get-fax-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_from|path|number|true|Customize result by setting from date (timestsamp)|
|date_to|path|number|true|Customize result by setting to date (timestamp)|
|q|path|string|true|Custom query|
|order_by|path|string|true|Order result by|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_api_username": "username",
        "_file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date": null,
        "date_added": 1457572619,
        "from": "+61267132168",
        "from_email": null,
        "list_id": null,
        "message_id": "2FDA7622-FC6E-4D21-B335-32FF860D7E19",
        "message_pages": "6.00",
        "message_price": "13.2000",
        "schedule": "1436874701",
        "status": "Sent",
        "status_code": "201",
        "status_text": "Sent",
        "subaccount_id": 1,
        "to": "+61261111115",
        "user_id": 1
      },
      {
        "_api_username": "username",
        "_file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date": null,
        "date_added": 1457586514,
        "from": "+61267132168",
        "from_email": null,
        "list_id": null,
        "message_id": "A6A20382-8211-46B9-8F09-E7337AE6626D",
        "message_pages": "6.00",
        "message_price": "13.2000",
        "schedule": "1436874701",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61261111115",
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your history."
}
```

<h3 id="get-fax-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price

> Code samples

```bash
curl https://example.com/fax/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
    "messages": [
      {
        "country": "AF",
        "custom_string": "custom_string",
        "from_email": "will@smith.com",
        "schedule": "1436874701",
        "source": "php",
        "to": "+61261111111"
      },
      {
        "country": "AF",
        "custom_string": "custom_string",
        "from_email": "john@doe.com",
        "schedule": "1436874701",
        "source": "php",
        "to": "+61261111122"
      }
    ]
  }'
```

`POST /fax/price`

> Body parameter

```json
{
  "file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
  "messages": [
    {
      "country": "AF",
      "custom_string": "custom_string",
      "from_email": "will@smith.com",
      "schedule": "1436874701",
      "source": "php",
      "to": "+61261111111"
    },
    {
      "country": "AF",
      "custom_string": "custom_string",
      "from_email": "john@doe.com",
      "schedule": "1436874701",
      "source": "php",
      "to": "+61261111122"
    }
  ]
}
```

<h3 id="calculate-price-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» file_url|body|string|true|Your URL to your PDF file.|
|» from|body|string|false|Your sender id. Must be a valid fax number.|
|» from_email|body|string|false|An email address where the reply should be emailed to.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» messages|body|[object]|true|Your messages.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date_added": 1457504350,
        "from": "+61298441484",
        "from_email": "will@smith.com",
        "list_id": null,
        "message_id": "5106363A-AF38-4FB9-AF0E-B5FD38F62BDC",
        "message_pages": 0,
        "message_price": "0.0000",
        "schedule": "1436874701",
        "status": "SUCCESS",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61261111111",
        "user_id": 1
      },
      {
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date_added": 1457504350,
        "from": "+61298441484",
        "from_email": "john@doe.com",
        "list_id": null,
        "message_id": "6BBEB11E-CAA6-4B04-8537-63619F3D6B37",
        "message_pages": 6,
        "message_price": "13.2000",
        "schedule": "1436874701",
        "status": "SUCCESS",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61261111122",
        "user_id": 1
      }
    ],
    "queued_count": 2,
    "total_count": 2,
    "total_price": 13.2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Fax queued for delivery."
}
```

<h3 id="calculate-price-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of Fax Delivery Receipts

<a id="opIdList of Fax Delivery Receipts"></a>

> Code samples

```bash
curl https://example.com/fax/receipts \
  -H 'Accept: application/json'
```

`GET /fax/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "custom_string": "",
        "error_code": "",
        "error_text": "",
        "message_id": "88AB118E-EB1B-478C-98CE-6C73ABA23F67",
        "message_type": "fax",
        "status_code": "Completed",
        "status_text": "",
        "subaccount_id": 1,
        "timestamp": "1451200622",
        "timestamp_send": "1450854013"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your delivery receipts."
}
```

<h3 id="list-of-fax-delivery-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Test Delivery Receipt

<a id="opIdAdd a Test Delivery Receipt"></a>

> Code samples

```bash
curl https://example.com/fax/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "http://yourdomain.com"
  }'
```

`POST /fax/receipts`

> Body parameter

```json
{
  "url": "http://yourdomain.com"
}
```

<h3 id="add-a-test-delivery-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|Your URL if using the push option or 'poll' if using the pull option.|

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_string": null,
    "error_code": null,
    "error_text": null,
    "message_id": "493FFB41-9733-4641-985F-BD79A067B58F",
    "status_code": "201",
    "status_text": "Success: Message received on handset.",
    "timestamp": "1441958441"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipt has been added"
}
```

<h3 id="add-a-test-delivery-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Mark Fax Delivery Receipts as read

<a id="opIdMark Fax Delivery Receipts as read"></a>

> Code samples

```bash
curl https://example.com/fax/receipts-read \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "date_before": 1441958441
  }'
```

`PUT /fax/receipts-read`

> Body parameter

```json
{
  "date_before": 1441958441
}
```

<h3 id="mark-fax-delivery-receipts-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» date_before|body|number|false|An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipts has been marked as read."
}
```

<h3 id="mark-fax-delivery-receipts-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Specific Fax Delivery Receipt

<a id="opIdGet a Specific Fax Delivery Receipt"></a>

> Code samples

```bash
curl https://example.com/fax/receipts/%223FAC74F1 \
  -H 'Accept: application/json'
```

`GET /fax/receipts/{message_id}`

<h3 id="get-a-specific-fax-delivery-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|D2AF-479B-8955-6395D561DEF4" (required, number) - Message ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "carrier": "",
    "country": "AU",
    "custom_string": "custom_string",
    "date_added": 1454394659,
    "from": "+61267132168",
    "list_id": null,
    "message_id": "3FAC74F1-D2AF-479B-8955-6395D561DEF4",
    "message_pages": "1.00",
    "message_price": "1.000000",
    "schedule": "1436874701",
    "status": "WaitApproval",
    "status_code": null,
    "status_text": null,
    "subaccount_id": 1,
    "to": "+61267132168",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your fax receipt."
}
```

<h3 id="get-a-specific-fax-delivery-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Fax

<a id="opIdSend Fax"></a>

> Code samples

```bash
curl https://example.com/fax/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
    "messages": [
      {
        "country": "AF",
        "custom_string": "custom_string",
        "from_email": "will@smith.com",
        "schedule": "1436874701",
        "source": "php",
        "to": "+61261111111"
      },
      {
        "country": "AF",
        "custom_string": "custom_string",
        "from_email": "john@doe.com",
        "schedule": "1436874701",
        "source": "php",
        "to": "+61261111122"
      }
    ]
  }'
```

`POST /fax/send`

**Letter File Options**

**Use existing URL**

With this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.

**Upload File to Our Server**

With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/fax/send` endpoint.

> Body parameter

```json
{
  "file_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
  "messages": [
    {
      "country": "AF",
      "custom_string": "custom_string",
      "from_email": "will@smith.com",
      "schedule": "1436874701",
      "source": "php",
      "to": "+61261111111"
    },
    {
      "country": "AF",
      "custom_string": "custom_string",
      "from_email": "john@doe.com",
      "schedule": "1436874701",
      "source": "php",
      "to": "+61261111122"
    }
  ]
}
```

<h3 id="send-fax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» file_url|body|string|true|Your URL to your PDF file.|
|» from|body|string|false|Your sender id. Must be a valid fax number.|
|» from_email|body|string|false|An email address where the reply should be emailed to.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» messages|body|[object]|true|Your messages.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date_added": 1457504350,
        "from": "+61298441484",
        "from_email": "will@smith.com",
        "list_id": null,
        "message_id": "5106363A-AF38-4FB9-AF0E-B5FD38F62BDC",
        "message_pages": 0,
        "message_price": "0.0000",
        "schedule": "1436874701",
        "status": "SUCCESS",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61261111111",
        "user_id": 1
      },
      {
        "carrier": "",
        "country": "AU",
        "custom_string": "custom_string",
        "date_added": 1457504350,
        "from": "+61298441484",
        "from_email": "john@doe.com",
        "list_id": null,
        "message_id": "6BBEB11E-CAA6-4B04-8537-63619F3D6B37",
        "message_pages": 6,
        "message_price": "13.2000",
        "schedule": "1436874701",
        "status": "SUCCESS",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61261111122",
        "user_id": 1
      }
    ],
    "queued_count": 2,
    "total_count": 2,
    "total_price": 13.2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Fax queued for delivery."
}
```

<h3 id="send-fax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-forgot-account">Forgot Account</h1>

## Forgot Password

<a id="opIdForgot Password"></a>

> Code samples

```bash
curl https://example.com/forgot-password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "0F6pKiiuca"
  }'
```

`PUT /forgot-password`

> Body parameter

```json
{
  "username": "0F6pKiiuca"
}
```

<h3 id="forgot-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "An email notification has been sent."
}
```

<h3 id="forgot-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Forgot Password

<a id="opIdVerify Forgot Password"></a>

> Code samples

```bash
curl https://example.com/forgot-password/verify \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "activation_token": "9C648BAD-EB7F-4E7E-96BC-B433140C4F1F",
    "password": "0F6pKiiuca",
    "subaccount_id": 54
  }'
```

`PUT /forgot-password/verify`

> Body parameter

```json
{
  "activation_token": "9C648BAD-EB7F-4E7E-96BC-B433140C4F1F",
  "password": "0F6pKiiuca",
  "subaccount_id": 54
}
```

<h3 id="verify-forgot-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» activation_token|body|string|true|Your email activation token.|
|» password|body|string|true|Your new password.|
|» subaccount_id|body|number|true|Your subaccount id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your password has been updated."
}
```

<h3 id="verify-forgot-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Forgot Username

<a id="opIdForgot Username"></a>

> Code samples

```bash
curl https://example.com/forgot-username \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "country": "US",
    "phone_number": "3108147982"
  }'
```

`PUT /forgot-username`

> Body parameter

```json
{
  "country": "US",
  "phone_number": "3108147982"
}
```

<h3 id="forgot-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» country|body|string|false|Your country. Used to format phone number. This is required if phone_number is not in international-format.|
|» email|body|string|false|Your email. This is required if phone_number is not present.|
|» phone_number|body|number|false|Your phone number. This is required if email is not present.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "An email notification has been sent."
}
```

<h3 id="forgot-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-mms">MMS</h1>

# How many messages can I send?

## Send MMS Endpoint

You can post **up to 1000 messages** with each API call. You can send to a mix of contacts and contact lists, as long as the total number of recipients is up to 1000. The response contains a status and details for each recipient.

Refer to [**Application Status Codes**](#introduction/application-status-codes) for the possible response message status strings.

# How many characters can I send in a message?

## Standard MMS Message

1500 characters

## Unicode MMS Message

500 characters

If a message is longer the allowed number of characters it will be truncated. If a message contains any characters that aren't in the GSM 03.38 character set, the message type will be treated as unicode. (`https://en.wikipedia.org/wiki/GSM_03.38`)

# Maximum File Size

You can send a single attachment with a size of up to 250 kB. Some older devices can only accept attachments with up to 30 kB.

# Supported File Types

- Supported file types are listed below. If you need to convert a file to a supported format, it can be first passed to our uploads endpoint: `/uploads?convert=mms`

- This will return a URL to the converted image file that can be used in the /mms/send endpoint.

- Contact us to add support for any other file type.

## Images

| File type | Required to be passed to uploads endpoint first? |
|---|---|
| jpg | No |
| gif | No |
| jpeg | Yes |
| png | Yes |
| bmp | Yes |

## Cancel All MMS

<a id="opIdCancel All MMS"></a>

> Code samples

```bash
curl https://example.com/mms/cancel-all \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /mms/cancel-all`

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "2 MMS have been cancelled."
}
```

<h3 id="cancel-all-mms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export MMS History

<a id="opIdExport MMS History"></a>

> Code samples

```bash
curl 'https://example.com/mms/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /mms/history/export?filename={filename}`

<h3 id="export-mms-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-mms-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get MMS History

<a id="opIdGet MMS History"></a>

> Code samples

```bash
curl 'https://example.com/mms/history?q=list_id%3A429%2Cdirection%3Aout&order_by=subject%3Adesc&date_from=1443501617&date_to=1443501727' \
  -H 'Accept: application/json'
```

`GET /mms/history?q={q}&order_by={order_by}&date_from={date_from}&date_to={date_to}`

<h3 id="get-mms-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|path|string|true|A custom query.|
|order_by|path|string|true|Sort records by.|
|date_from|path|string|true|[Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (from) used to show records by date.|
|date_to|path|string|true|[Unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) (to) used to show records by date.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2D789145-3E66-4038-9BA5-EF3DEEE82386.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 7,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467356623,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "2453E085-C1F8-47EC-AD35-B793960B1313",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467356623",
        "status": "Failed",
        "status_code": "301",
        "status_text": "Unable to process your MMS for sending.",
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2D789145-3E66-4038-9BA5-EF3DEEE82386.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 8,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467356623,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "54889DC7-A840-4A21-A977-EBE8C51FC2F8",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467356623",
        "status": "Queued:WaitSend",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2D789145-3E66-4038-9BA5-EF3DEEE82386.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 9,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467356623,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "F2E75443-35A4-4300-9D12-E67682E762DB",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467356623",
        "status": "Queued:WaitSend",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2D789145-3E66-4038-9BA5-EF3DEEE82386.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 10,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467356623,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "26B77CD6-5C98-46C7-A6DF-F76F29B7E09F",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467356623",
        "status": "Queued:WaitSend",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2D789145-3E66-4038-9BA5-EF3DEEE82386.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 11,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467356623,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "70BAB69D-8EA5-417C-A8EA-7F0D843E30F3",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467356623",
        "status": "Sent",
        "status_code": "200",
        "status_text": "Sent",
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 4,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "42E3C025-FD9D-4C9F-B374-C7DF5337F6AF",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 5,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "218D5034-89A0-4C6C-B8F9-006BEF50B92B",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 6,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "EFCF9FAA-1BCA-4C58-884A-257C0D87124E",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 7,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "3E0DC217-7D0F-4C20-A3F2-E3362B938CAF",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 8,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "7827223E-0D73-49A1-95D0-8B85C3F5CC71",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 9,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "0D902342-3873-4EE9-A86A-CA1B0B755BBA",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 10,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "0549ADFD-9D70-4B1A-B62F-875A05B481D9",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
        "body": "John This is a test message.",
        "carrier": "",
        "contact_id": 11,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467358732,
        "direction": "out",
        "from": "+61298444213",
        "from_email": null,
        "list_id": 429,
        "message_id": "1327677D-D2EF-4442-A0F3-B480C7E94359",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467358732",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61298444214",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/C755FD73-AD7A-4EB8-A521-FC10BB37F3B7.gif",
        "body": "This is a test message.",
        "carrier": "Telstra",
        "contact_id": null,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467363093,
        "direction": "out",
        "from": "",
        "from_email": null,
        "list_id": null,
        "message_id": "42ABDB50-3DAE-41B5-8F48-6F227F38DB2E",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467363093",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61437887633",
        "user_id": 1
      },
      {
        "_api_username": "my_api_username",
        "_media_file_url": "http://yourdomain.com/_mms/2289C892-7518-4FBB-9A1C-7C34A93F6328.gif",
        "body": "This is a test message.",
        "carrier": "Telstra",
        "contact_id": null,
        "country": "AU",
        "custom_string": "",
        "date_added": 1467363210,
        "direction": "out",
        "from": "",
        "from_email": null,
        "list_id": null,
        "message_id": "53271F40-EEB2-4DE9-A525-F0620211A4C9",
        "message_parts": "1.00",
        "message_price": "2.4200",
        "priority": 10,
        "schedule": "1467363210",
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "subject": "This is a subject",
        "to": "+61437887633",
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 3,
    "next_page_url": "/?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 31
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your history."
}
```

<h3 id="get-mms-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Price

<a id="opIdGet Price"></a>

> Code samples

```bash
curl https://example.com/mms/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "media_file": "http://yourdomain.com/tpLaX6A.gif",
    "messages": [
      {
        "body": "This is a test body with special character: 英",
        "country": "AU",
        "from": "test",
        "source": "php",
        "subject": "This is a subject",
        "to": "+61437111222"
      }
    ]
  }'
```

`POST /mms/price`

> Body parameter

```json
{
  "media_file": "http://yourdomain.com/tpLaX6A.gif",
  "messages": [
    {
      "body": "This is a test body with special character: 英",
      "country": "AU",
      "from": "test",
      "source": "php",
      "subject": "This is a subject",
      "to": "+61437111222"
    }
  ]
}
```

<h3 id="get-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» from_email|body|string|false|An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» media_file|body|string|true|Media file you want to send.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» subject|body|string|true|Subject line. Maximum 20 characters.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 4,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "2E7EFEC7-70FE-4E29-8F80-31A2F59003E8",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 5,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "773DE8EE-DF60-46F5-ADCB-1E28AF5B1FED",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 6,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "52774EFE-4310-4202-AE19-71FDD0086B15",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 7,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "97E06BA5-C106-40ED-ABD1-7B6CF4673278",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 8,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "5FB49B3E-FE94-4556-B5C2-5F874211A04E",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 9,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "AFAC3FCA-B05F-43E5-967F-9F78E206C2C7",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 10,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "E7C11ECB-FC96-42C1-83F9-3AA106D1A183",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/_mms/279FDB02-DC5A-449C-869A-AFB5F0E632B4.gif",
        "body": "John This is a test message.",
        "contact_id": 11,
        "country": "AU",
        "custom_string": "",
        "from": "test",
        "list_id": 429,
        "message_id": "D84AD2E9-DE92-46E0-8A9B-14509496E644",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      }
    ],
    "queued_count": 8,
    "total_count": 8,
    "total_price": 19.36
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Messages queued for delivery."
}
```

<h3 id="get-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get all Delivery Receipts

<a id="opIdGet all Delivery Receipts"></a>

> Code samples

```bash
curl https://example.com/mms/receipts \
  -H 'Accept: application/json'
```

`GET /mms/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "custom_string": "",
        "error_code": "",
        "error_text": "",
        "message_id": "88AB118E-EB1B-478C-98CE-6C73ABA23F67",
        "message_type": "mms",
        "status_code": "Completed",
        "status_text": "",
        "subaccount_id": 1,
        "timestamp": "1451200622",
        "timestamp_send": "1450854013"
      },
      {
        "custom_string": "",
        "error_code": "",
        "error_text": "",
        "message_id": "88AB118E-EB1B-478C-98CE-6C73ABA23F67",
        "message_type": "mms",
        "status_code": "Completed",
        "status_text": "",
        "subaccount_id": 1,
        "timestamp": "1451200622",
        "timestamp_send": "1450854013"
      },
      {
        "custom_string": "",
        "error_code": "",
        "error_text": "",
        "message_id": "88AB118E-EB1B-478C-98CE-6C73ABA23F67",
        "message_type": "mms",
        "status_code": "Completed",
        "status_text": "",
        "subaccount_id": 1,
        "timestamp": "1451200622",
        "timestamp_send": "1450854013"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your delivery receipts."
}
```

<h3 id="get-all-delivery-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Mark Receipts As Read

<a id="opIdMark Receipts As Read"></a>

> Code samples

```bash
curl https://example.com/mms/receipts-read \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /mms/receipts-read`

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipts has been marked as read."
}
```

<h3 id="mark-receipts-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Delivery Receipt

<a id="opIdGet Delivery Receipt"></a>

> Code samples

```bash
curl https://example.com/mms/receipts/3E0DC217-7D0F-4C20-A3F2-E3362B938CAF \
  -H 'Accept: application/json'
```

`GET /mms/receipts/{message_id}`

<h3 id="get-delivery-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|Message ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_media_file_url": "http://yourdomain.com/_mms/601D3E45-49FD-4653-B8F7-ED70B5CB9A43.gif",
    "body": "John This is a test message.",
    "carrier": "",
    "contact_id": 7,
    "country": "AU",
    "custom_string": "",
    "date_added": 1467358732,
    "direction": "out",
    "from": "+61298444213",
    "from_email": null,
    "list_id": 429,
    "message_id": "3E0DC217-7D0F-4C20-A3F2-E3362B938CAF",
    "message_parts": "1.00",
    "message_price": "2.420000",
    "priority": 10,
    "schedule": "1467358732",
    "status": "Queued",
    "status_code": null,
    "status_text": null,
    "subaccount_id": 1,
    "subject": "This is a subject",
    "to": "+61298444214",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your MMS receipt."
}
```

<h3 id="get-delivery-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send MMS

<a id="opIdSend MMS"></a>

> Code samples

```bash
curl https://example.com/mms/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "media_file": "http://yourdomain.com/tpLaX6A.gif",
    "messages": [
      {
        "body": "This is a test body with special character: 英",
        "country": "AU",
        "from": "test",
        "source": "php",
        "subject": "This is a subject",
        "to": "+61437111222"
      }
    ]
  }'
```

`POST /mms/send`

> Body parameter

```json
{
  "media_file": "http://yourdomain.com/tpLaX6A.gif",
  "messages": [
    {
      "body": "This is a test body with special character: 英",
      "country": "AU",
      "from": "test",
      "source": "php",
      "subject": "This is a subject",
      "to": "+61437111222"
    }
  ]
}
```

<h3 id="send-mms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» from|body|string|false|The number to send from. Either leave blank or use a ClickSend number only.|
|» from_email|body|string|false|An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» media_file|body|string|true|Media file you want to send.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» subject|body|string|true|Subject line. Maximum 20 characters.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "_media_file_url": "https://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 4,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "D7A79BF1-4806-43F8-8339-6B9F8385D9A4",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 5,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "73034A6D-4F90-4DE3-9F9B-64F228A30195",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 6,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "A1E139C1-3CB0-42C8-A8EC-070BE5FE2D06",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 7,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "D202B823-C4ED-40F8-8F6E-08BF3EAE24D2",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 8,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "50469507-2C91-4EB0-A628-DEF8A921D53C",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 9,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "AFF1D0A3-1BDC-4A4F-8290-1A112579AB88",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 10,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "81C3CB6D-FD6C-44BF-9542-46FACFC423FB",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      },
      {
        "_media_file_url": "http://yourdomain.com/tpLaX6A.gif",
        "body": "John This is a test message.",
        "contact_id": 11,
        "country": "AU",
        "custom_string": "",
        "from": "+61298444213",
        "list_id": 429,
        "message_id": "55B901D2-38BD-4A3F-839C-E647FC0B4BAB",
        "message_parts": 1,
        "message_price": "2.4200",
        "schedule": "",
        "status": "SUCCESS",
        "subject": "This is a subject",
        "to": "+61298444214"
      }
    ],
    "queued_count": 8,
    "total_count": 8,
    "total_price": 19.36
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Messages queued for delivery."
}
```

<h3 id="send-mms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Cancel MMS

<a id="opIdCancel MMS"></a>

> Code samples

```bash
curl https://example.com/mms/52E3C025-FD9D-4C9F-B374-C7DF5337F6AF/cancel \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /mms/{message_id}/cancel`

<h3 id="cancel-mms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|Message ID.|

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "MMS has been cancelled."
}
```

<h3 id="cancel-mms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-numbers">Numbers</h1>

## Get all Dedicated Numbers

<a id="opIdGet all Dedicated Numbers"></a>

> Code samples

```bash
curl https://example.com/numbers \
  -H 'Accept: application/json'
```

`GET /numbers`

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "current_page": 1,
    "data": [
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61481070206",
        "price": "18.59"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61437887639",
        "price": "18.59"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61481070206",
        "price": "18.59"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61287265298",
        "price": "18.59"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+19403944918",
        "price": "26.94"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61287265842",
        "price": "26.94"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61287265371",
        "price": "26.94"
      },
      {
        "_country_name": "Australia",
        "country": "AU",
        "dedicated_number": "+61287265372",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+16062191029",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060588",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060587",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060586",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060585",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060584",
        "price": "26.94"
      },
      {
        "_country_name": "United States of America",
        "country": "US",
        "dedicated_number": "+12282060583",
        "price": "26.94"
      }
    ],
    "from": 1,
    "last_page": 2,
    "next_page_url": "https://rest.clicksend.com/v3/numbers/?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 22
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are you dedicated numbers."
}
```

<h3 id="get-all-dedicated-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Buy dedicated number

<a id="opIdBuy dedicated number"></a>

> Code samples

```bash
curl https://example.com/numbers/buy/%2B12282060576 \
  -X POST \
  -H 'Accept: application/json'
```

`POST /numbers/buy/{dedicated_number}`

<h3 id="buy-dedicated-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dedicated_number|path|string|true|Your phone number in E.164 format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "_price_monthly": "11.11",
    "_price_setup": "22.22",
    "country": "US",
    "dedicated_number": "+12282060576",
    "price_total": "8.98"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your new number."
}
```

<h3 id="buy-dedicated-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search Dedicated Numbers by Country

<a id="opIdSearch Dedicated Numbers by Country"></a>

> Code samples

```bash
curl 'https://example.com/numbers/search/US?88=1&1=2' \
  -H 'Accept: application/json'
```

`GET /numbers/search/{country}?{search}=1&{search_type}=2`

<h3 id="search-dedicated-numbers-by-country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Your preferred country.|
|search|path|string|true|Your search pattern or query.|
|search_type|path|number|true|Your strategy for searching, 0 = starts with, 1 = anywhere, 2 = ends with.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+12132633745",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+12134657532",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+12134657538",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777962",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777963",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777965",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777967",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777968",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777971",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777973",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777974",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777975",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777976",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777978",
        "price": "26.94"
      },
      {
        "country": "US",
        "country_name": "United States of America",
        "currency": "USD",
        "dedicated_number": "+13235777979",
        "price": "26.94"
      }
    ],
    "from": 1,
    "last_page": 1490,
    "next_page_url": "/?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 22346
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="search-dedicated-numbers-by-country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-pricing">Pricing</h1>

## Get Country Pricing

<a id="opIdGet Country Pricing"></a>

> Code samples

```bash
curl 'https://example.com/pricing/AU?currency=AUD' \
  -H 'Accept: application/json'
```

`GET /pricing/{country}?currency={currency}`

<h3 id="get-country-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Two-letter representation of the country.|
|currency|path|string|true|Three-letter representation of the currency.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "country": "AU",
    "email": {
      "price_rate_0": "0.0100",
      "price_rate_1": "0.0080",
      "price_rate_2": "0.0040",
      "price_rate_3": "0.0010"
    },
    "fax": {
      "dedicated_number_monthly": "30.0000",
      "dedicated_number_setup": "40.0000",
      "price_fax": "0.2000"
    },
    "mms": {
      "dedicated_number_monthly": "10.0000",
      "dedicated_number_setup": "20.0000",
      "price_mms": "0.4500"
    },
    "post": {
      "direct_mail_min_quantity": 5000,
      "price_direct_mail_a5": "0.1200",
      "price_direct_mail_dl": "0.1200",
      "price_letter_black": "1.2700",
      "price_letter_colour": "1.4700",
      "price_letter_large_surcharge": "1.5000",
      "price_letter_large_surcharge_sheet": "0.0400",
      "price_letter_page_black": "0.1000",
      "price_letter_page_colour": "0.2400"
    },
    "postcard": {
      "price_postcard": "10.0000"
    },
    "sms": {
      "dedicated_number_monthly": "19.0000",
      "dedicated_number_setup": "20.0000",
      "dedicated_number_shortcode_monthly": "0.0000",
      "dedicated_number_shortcode_setup": "0.0000",
      "price_rate_0": "0.0700",
      "price_rate_1": "0.0650",
      "price_rate_2": "0.0600",
      "price_rate_3": "0.0550"
    },
    "voice": {
      "price_landline": "0.0530",
      "price_mobile": "0.1730"
    }
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Price Lists."
}
```

<h3 id="get-country-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-post-address-detection">Post Address Detection</h1>

## Detect Address

<a id="opIdDetect Address"></a>

> Code samples

```bash
curl https://example.com/post/letters/detect-address \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "Q29udGVudHMgb2YgZmlsZQ=="
  }'
```

`POST /post/letters/detect-address`

The `detect-address` endpoint accepts either a letter in PDF format or an address string and attempts to convert it to a standard address format. Note that the PDF should be in standard address format, having the recipient's name and address listed at the top.

The endpoint accepts two types of data:
1. A PDF file in `base64` encoding. In this case, submit the `base64`-encoded PDF file contents in the `content` field of the request body.
2. An address string. In this case, submit the address in a string using the `address` field of the request body.

> Body parameter

```json
{
  "content": "Q29udGVudHMgb2YgZmlsZQ=="
}
```

<h3 id="detect-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» content|body|string|true|Your file contents encoded in `base64`.|
|» *anyOf*|body|object|false|none|
|» address|body|string|true|Your file contents encoded in `base64`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "address_city": "Perth",
    "address_country": "AU",
    "address_line_1": "123 Main Street",
    "address_line_2": "",
    "address_name": "John Doe",
    "address_postal_code": "6000",
    "address_state": "WA"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="detect-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-post-direct-mail">Post Direct Mail</h1>

## List Direct Mail Campaigns

<a id="opIdList Direct Mail Campaigns"></a>

> Code samples

```bash
curl https://example.com/post/direct-mail/campaigns \
  -H 'Accept: application/json'
```

`GET /post/direct-mail/campaigns`

Get list of direct mail campaigns.

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 3,
    "data": [
      {
        "_areas": [
          {
            "campaign_id": 34,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 34,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 34,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 34,
        "custom_string": null,
        "date_added": 1477040355,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 35,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 35,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 35,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 35,
        "custom_string": null,
        "date_added": 1477040625,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [],
        "_total_quantity": 0,
        "campaign_id": 37,
        "custom_string": null,
        "date_added": 1477040829,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 38,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 38,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 38,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 38,
        "custom_string": null,
        "date_added": 1477040843,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 39,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 39,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 39,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 39,
        "custom_string": null,
        "date_added": 1477275714,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 40,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 40,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 40,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 40,
        "custom_string": "Custom String",
        "date_added": 1477275760,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 42,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 42,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 42,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 42,
        "custom_string": "Custom String",
        "date_added": 1477276756,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 43,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 43,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 43,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 43,
        "custom_string": "Custom String",
        "date_added": 1477276830,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 49,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 49,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 49,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 49,
        "custom_string": "Custom String",
        "date_added": 1477279662,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 51,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 51,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 51,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 51,
        "custom_string": "Custom String",
        "date_added": 1477279949,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 52,
            "location_id": 1,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 52,
            "location_id": 2,
            "price": null,
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 52,
            "location_id": 3,
            "price": null,
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 52,
        "custom_string": "Custom String",
        "date_added": 1477280021,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 53,
            "location_id": 1,
            "price": "222.00",
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 53,
            "location_id": 2,
            "price": "222.00",
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 53,
            "location_id": 3,
            "price": "111.00",
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 53,
        "custom_string": "Custom String",
        "date_added": 1477280780,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 54,
            "location_id": 1,
            "price": "222.00",
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 54,
            "location_id": 2,
            "price": "222.00",
            "quantity": 100,
            "status": null
          },
          {
            "campaign_id": 54,
            "location_id": 3,
            "price": "111.00",
            "quantity": 50,
            "status": null
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 54,
        "custom_string": "Custom String",
        "date_added": 1477281977,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": null,
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 55,
            "location_id": 1,
            "price": "222.00",
            "quantity": 100,
            "status": "Queued"
          },
          {
            "campaign_id": 55,
            "location_id": 2,
            "price": "222.00",
            "quantity": 100,
            "status": "Queued"
          },
          {
            "campaign_id": 55,
            "location_id": 3,
            "price": "111.00",
            "quantity": 50,
            "status": "Queued"
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 55,
        "custom_string": "Custom String",
        "date_added": 1477284216,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477032023,
        "status": "Queued",
        "user_id": 1
      },
      {
        "_areas": [
          {
            "campaign_id": 56,
            "location_id": 1,
            "price": "222.00",
            "quantity": 100,
            "status": "Scheduled"
          },
          {
            "campaign_id": 56,
            "location_id": 2,
            "price": "222.00",
            "quantity": 100,
            "status": "Scheduled"
          },
          {
            "campaign_id": 56,
            "location_id": 3,
            "price": "111.00",
            "quantity": 50,
            "status": "Scheduled"
          }
        ],
        "_total_quantity": "250",
        "campaign_id": 56,
        "custom_string": "Custom String",
        "date_added": 1477284517,
        "message_id": null,
        "name": "My Campaign",
        "schedule": 1477384503,
        "status": "Scheduled",
        "user_id": 1
      }
    ],
    "from": 31,
    "last_page": 5,
    "next_page_url": "https://rest.clicksend.com/v3/post/direct-mail/campaigns?page=4",
    "per_page": 15,
    "prev_page_url": "https://rest.clicksend.com/v3/post/direct-mail/campaigns?page=2",
    "to": 45,
    "total": 69
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your results."
}
```

<h3 id="list-direct-mail-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Direct Mail Campaign Price

<a id="opIdCalculate Direct Mail Campaign Price"></a>

> Code samples

```bash
curl https://example.com/post/direct-mail/campaigns/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "areas": [
      {
        "location_id": 22,
        "quantity": 12
      },
      {
        "location_id": 21,
        "quantity": 10
      },
      {
        "location_id": 21,
        "quantity": 10
      }
    ],
    "custom_string": "Custom String",
    "file_urls": [
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
      "https://rest.clicksend.com/files/F3CA1167-381B-47FE-A146-3DF87BE7EEC2.pdf"
    ],
    "name": "My Campaign",
    "schedule": 1477384503,
    "size": "A5",
    "source": "My Source"
  }'
```

`POST /post/direct-mail/campaigns/price`

Calculate direct mail campaign price.

> Body parameter

```json
{
  "areas": [
    {
      "location_id": 22,
      "quantity": 12
    },
    {
      "location_id": 21,
      "quantity": 10
    },
    {
      "location_id": 21,
      "quantity": 10
    }
  ],
  "custom_string": "Custom String",
  "file_urls": [
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
    "https://rest.clicksend.com/files/F3CA1167-381B-47FE-A146-3DF87BE7EEC2.pdf"
  ],
  "name": "My Campaign",
  "schedule": 1477384503,
  "size": "A5",
  "source": "My Source"
}
```

<h3 id="calculate-direct-mail-campaign-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» areas|body|[object]|false|List of location where you want to send your campaign, and the quantity per location.|
|» file_urls|body|[object]|true|Campaign file urls. You can submit max 2 file urls.|
|» name|body|string|true|Campaign name.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» size|body|string|true|Campaign file size. It can be A5 or DL.|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "British Pounds",
      "currency_name_short": "GBP",
      "currency_prefix_c": "p",
      "currency_prefix_d": "Â£"
    },
    "data": {
      "_areas": [
        {
          "campaign_id": null,
          "country_code": "AU",
          "country_name": "Australia",
          "location_id": 22,
          "place_name": "AUSTRALIA",
          "postal_code": "1234",
          "price": 133.2,
          "quantity": 12,
          "status": "Queued"
        },
        {
          "campaign_id": null,
          "country_code": "GB",
          "country_name": "United Kingdom",
          "location_id": 21,
          "place_name": "CANDELARIA",
          "postal_code": "1234",
          "price": 11.1,
          "quantity": 10,
          "status": "Queued"
        },
        {
          "campaign_id": null,
          "country_code": "GB",
          "country_name": "United Kingdom",
          "location_id": 21,
          "place_name": "CANDELARIA",
          "postal_code": "1234",
          "price": 11.1,
          "quantity": 10,
          "status": "Queued"
        }
      ],
      "custom_string": "Custom String",
      "date_added": 1478141522,
      "file_name": "79483D26-D9E3-4051-93BB-2B9AFC612F52.pdf",
      "message_id": "C45638E1-62A9-4A31-AABF-E30957151BC5",
      "name": "My Campaign",
      "schedule": 1478141522,
      "size": "A5",
      "source": "My Source.rest.v3",
      "status": "Queued",
      "user_id": 1
    },
    "total_price": 155.4,
    "total_quantity": 32
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New direct mail campaign created."
}
```

<h3 id="calculate-direct-mail-campaign-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create New Campaign

<a id="opIdCreate New Campaign"></a>

> Code samples

```bash
curl https://example.com/post/direct-mail/campaigns/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "areas": [
      {
        "location_id": 1,
        "quantity": 100
      },
      {
        "location_id": 2,
        "quantity": 100
      },
      {
        "location_id": 3,
        "quantity": 50
      }
    ],
    "file_urls": [
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
    ],
    "name": "My Campaign",
    "schedule": 1477032023,
    "size": "A5",
    "source": "wordpress"
  }'
```

`POST /post/direct-mail/campaigns/send`

Create new direct mail campaign.

> Body parameter

```json
{
  "areas": [
    {
      "location_id": 1,
      "quantity": 100
    },
    {
      "location_id": 2,
      "quantity": 100
    },
    {
      "location_id": 3,
      "quantity": 50
    }
  ],
  "file_urls": [
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
  ],
  "name": "My Campaign",
  "schedule": 1477032023,
  "size": "A5",
  "source": "wordpress"
}
```

<h3 id="create-new-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» areas|body|[object]|false|List of location where you want to send your campaign, and the quantity per location.|
|» file_urls|body|[object]|true|Campaign file urls. You can submit max 2 file urls.|
|» name|body|string|true|Campaign name.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» size|body|string|true|Campaign file size. It can be A5 or DL.|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "British Pounds",
      "currency_name_short": "GBP",
      "currency_prefix_c": "p",
      "currency_prefix_d": "Â£"
    },
    "data": {
      "_areas": [
        {
          "campaign_id": 80,
          "location_id": 22,
          "price": "222.00",
          "status": "Scheduled"
        },
        {
          "campaign_id": 80,
          "location_id": 21,
          "price": "22.20",
          "status": "Scheduled"
        },
        {
          "campaign_id": 80,
          "location_id": 21,
          "price": "22.20",
          "status": "Scheduled"
        }
      ],
      "campaign_id": 80,
      "custom_string": "Custom String",
      "date_added": 1477291825,
      "name": "My Campaign",
      "schedule": 1477384503,
      "status": "Scheduled",
      "user_id": 1
    },
    "total_price": 266.4,
    "total_quantity": 30
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New direct mail campaign created."
}
```

<h3 id="create-new-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search Locations

<a id="opIdSearch Locations"></a>

> Code samples

```bash
curl 'https://example.com/post/direct-mail/locations/search/AD/?q=AD100' \
  -H 'Accept: application/json'
```

`GET /post/direct-mail/locations/search/{country}/?q={query}`

<h3 id="search-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string|true|Country code.|
|query|path|string|true|A postal code or place name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "accuracy": 6,
        "admin_code1": "",
        "admin_code2": "",
        "admin_code3": "",
        "admin_name1": "",
        "admin_name2": "",
        "admin_name3": "",
        "country_code": "AD",
        "latitude": "42.583300",
        "location_id": 1,
        "longitude": "1.666700",
        "place_name": "Canillo",
        "postal_code": "AD100"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here's your result."
}
```

<h3 id="search-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-post-letter">Post Letter</h1>

## Get Post Letter History

<a id="opIdGet Post Letter History"></a>

> Code samples

```bash
curl https://example.com/post/letters/history \
  -H 'Accept: application/json'
```

`GET /post/letters/history`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447642486,
        "duplex": 0,
        "list_id": null,
        "message_id": "7C0CF79F-F6E0-471D-8CC8-D7AB34A4D423",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued:Stamped",
        "status_code": "",
        "status_text": "",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447645676,
        "duplex": 0,
        "list_id": null,
        "message_id": "D7E64413-EE22-4E75-9D7D-1653AE5625CB",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued:Stamped",
        "status_code": "",
        "status_text": "",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447742914,
        "duplex": 0,
        "list_id": null,
        "message_id": "0AE161A5-8054-4E4C-B4CC-82E1CAE25D92",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447745108,
        "duplex": 0,
        "list_id": null,
        "message_id": "F18B4ECD-7508-4694-814C-BC87028A8AAE",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447745144,
        "duplex": 0,
        "list_id": null,
        "message_id": "8849F629-F9DB-499E-B084-5088399A51E9",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "130 Scheuvront Drive",
        "address_line_2": null,
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "colour": 0,
        "custom_string": null,
        "date_added": 1447745652,
        "duplex": 0,
        "list_id": null,
        "message_id": "3095F46F-8ED2-49A2-B4CC-DC20786A6209",
        "post_pages": 1,
        "post_price": "1.100000",
        "return_address_id": 4,
        "schedule": null,
        "source": null,
        "status": "Queued",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your history."
}
```

<h3 id="get-post-letter-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export Post Letter History

<a id="opIdExport Post Letter History"></a>

> Code samples

```bash
curl 'https://example.com/post/letters/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /post/letters/history/export?filename={filename}`

<h3 id="export-post-letter-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-post-letter-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price

> Code samples

```bash
curl https://example.com/post/letters/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "colour": 1,
    "duplex": 0,
    "file_url": "http://yourdomain.com/file.pdf",
    "priority_post": 0,
    "recipients": [
      {
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "Address 2",
        "address_name": "My Home Address",
        "address_postal_code": 123456,
        "address_state": "State",
        "custom_string": "Custom kn0ChLhwn6",
        "return_address_id": 1,
        "schedule": 1449573604
      }
    ],
    "template_used": 1
  }'
```

`POST /post/letters/price`

> Body parameter

```json
{
  "colour": 1,
  "duplex": 0,
  "file_url": "http://yourdomain.com/file.pdf",
  "priority_post": 0,
  "recipients": [
    {
      "address_city": "CITY",
      "address_country": "AU",
      "address_line_1": "Address 1",
      "address_line_2": "Address 2",
      "address_name": "My Home Address",
      "address_postal_code": 123456,
      "address_state": "State",
      "custom_string": "Custom kn0ChLhwn6",
      "return_address_id": 1,
      "schedule": 1449573604
    }
  ],
  "template_used": 1
}
```

<h3 id="calculate-price-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» colour|body|number|false|Is it in colored?|
|» duplex|body|number|false|Is it in duplex?|
|» file_url|body|string|true|Your URL to your PDF file.|
|» priority_post|body|number|false|Is it priority? 0 = Not Priority, 1 = Priority.|
|» recipients|body|[object]|false|Your recipients.|
|» template_used|body|number|false|Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "recipients": [
      {
        "address_city": "DENVER",
        "address_country": "AU",
        "address_line_1": "131",
        "address_line_2": "Scheuvront Drive",
        "address_name": "John Smith",
        "address_postal_code": "80202",
        "address_state": "CO",
        "date_added": 1449662203,
        "message_id": "06FAD39C-78FD-4D2F-B606-9846D1979F35",
        "post_pages": 3,
        "post_price": "1.8700",
        "priority_post": 0,
        "return_address_id": 1,
        "schedule": 1449573604,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "user_id": 1
      }
    ],
    "total_cost": 1,
    "total_price": 1.87
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are some results."
}
```

<h3 id="calculate-price-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Post Letter

<a id="opIdSend Post Letter"></a>

> Code samples

```bash
curl https://example.com/post/letters/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "colour": 1,
    "duplex": 0,
    "file_url": "http://yourdomain.com/file.pdf",
    "priority_post": 0,
    "recipients": [
      {
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "Address 2",
        "address_name": "My Home Address",
        "address_postal_code": 123456,
        "address_state": "State",
        "custom_string": "Custom kn0ChLhwn6",
        "return_address_id": 1,
        "schedule": 1449573604
      }
    ],
    "template_used": 1
  }'
```

`POST /post/letters/send`

**Supported File Types**
We support `pdf`, `docx` and `doc` files. Contact us to add support for any other file type. If you're using `docx` or `doc` files, you'll need to convert the file first using our uploads endpoint with the querystring parameter `convert=post` e.g. `POST /uploads?convert=post`. This will return a URL to the converted pdf file that can be used in the `/post/letters/send` endpoint.

**Letter File Options**

**Use existing URL**

With this option, you can use an existing URL to a `pdf` document. For example, you might generate the `pdf` on your server.

**Upload File to Our Server**

With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/letters/send` endpoint.

> Body parameter

```json
{
  "colour": 1,
  "duplex": 0,
  "file_url": "http://yourdomain.com/file.pdf",
  "priority_post": 0,
  "recipients": [
    {
      "address_city": "CITY",
      "address_country": "AU",
      "address_line_1": "Address 1",
      "address_line_2": "Address 2",
      "address_name": "My Home Address",
      "address_postal_code": 123456,
      "address_state": "State",
      "custom_string": "Custom kn0ChLhwn6",
      "return_address_id": 1,
      "schedule": 1449573604
    }
  ],
  "template_used": 1
}
```

<h3 id="send-post-letter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» colour|body|number|false|Is it in colour? 0 = Black and White, 1 = Colour.|
|» duplex|body|number|false|Is it in duplex? 0 = Simplex, 1 = Duplex.|
|» file_url|body|string|true|Your URL to your PDF file.|
|» priority_post|body|number|false|Is it priority? 0 = Not Priority, 1 = Priority.|
|» recipients|body|[object]|false|Your recipients.|
|» template_used|body|number|false|Whether you used our template or not ([More Info](http://help.clicksend.com/13996-Post/post-letter-template)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "queued_count": 1,
    "recipients": [
      {
        "_api_username": "my_api_username",
        "_file_url": "http://yourdomain.com/file.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "colour": 1,
        "custom_string": "kn0ChLhwn6",
        "date_added": 1459131623,
        "duplex": 0,
        "message_id": "A00A1066-BBAE-432B-9B2D-E88969B12C46",
        "post_pages": 7,
        "post_price": "13.4200",
        "priority_post": 0,
        "return_address_id": 1,
        "schedule": 1449573604,
        "source": ".rest.v3",
        "status": "SUCCESS",
        "subaccount_id": 1,
        "user_id": 1
      }
    ],
    "total_count": 1,
    "total_price": 13.42
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Letters queued for delivery."
}
```

<h3 id="send-post-letter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get List of Post Return Addresses

<a id="opIdGet List of Post Return Addresses"></a>

> Code samples

```bash
curl https://example.com/post/return-addresses \
  -H 'Accept: application/json'
```

`GET /post/return-addresses`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 4,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 5,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 6,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 7,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 8,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 9,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 10,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 11,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "My Address",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 12,
        "user_id": 1
      },
      {
        "address_city": "Flynn",
        "address_country": "AU",
        "address_line_1": "Maritime Avenue",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "6302",
        "address_state": "WA",
        "return_address_id": 14,
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 10,
    "total": 10
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your records."
}
```

<h3 id="get-list-of-post-return-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Post Return Address

<a id="opIdCreate a Post Return Address"></a>

> Code samples

```bash
curl https://example.com/post/return-addresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address_city": "Flynn",
    "address_country": "AU",
    "address_line_1": "Maritime Avenue",
    "address_line_2": "",
    "address_name": "John Smith",
    "address_postal_code": 6302,
    "address_state": "WA"
  }'
```

`POST /post/return-addresses`

> Body parameter

```json
{
  "address_city": "Flynn",
  "address_country": "AU",
  "address_line_1": "Maritime Avenue",
  "address_line_2": "",
  "address_name": "John Smith",
  "address_postal_code": 6302,
  "address_state": "WA"
}
```

<h3 id="create-a-post-return-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» address_city|body|string|true|Your address city.|
|» address_country|body|string|true|Two-letter country code defined in ISO 3166.|
|» address_line_1|body|string|true|Your address line 1.|
|» address_line_2|body|string|false|Your address line 2.|
|» address_name|body|string|true|Your address name.|
|» address_postal_code|body|number|true|Your address postal code.|
|» address_state|body|string|true|Your address state.|

> Example responses

> 200 Response

```json
{
  "data": {
    "address_city": "Flynn",
    "address_country": "AU",
    "address_line_1": "Maritime Avenue",
    "address_line_2": "",
    "address_name": "John Smith",
    "address_postal_code": "6302",
    "address_state": "WA",
    "return_address_id": 14,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New return address has been added."
}
```

<h3 id="create-a-post-return-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Post Return Address

<a id="opIdGet Post Return Address"></a>

> Code samples

```bash
curl https://example.com/post/return-addresses/14 \
  -H 'Accept: application/json'
```

`GET /post/return-addresses/{return_address_id}`

<h3 id="get-post-return-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_address_id|path|number|true|Your return address id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "address_city": "Flynn",
    "address_country": "AU",
    "address_line_1": "Maritime Avenue",
    "address_line_2": "",
    "address_name": "John Smith",
    "address_postal_code": "6302",
    "address_state": "WA",
    "return_address_id": 14,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your data."
}
```

<h3 id="get-post-return-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Post Return Address

<a id="opIdUpdate Post Return Address"></a>

> Code samples

```bash
curl https://example.com/post/return-addresses/14 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address_city": "Flynn",
    "address_country": "AU",
    "address_line_1": "Maritime Avenue",
    "address_line_2": "",
    "address_name": "John Smith",
    "address_postal_code": 6302,
    "address_state": "WA"
  }'
```

`PUT /post/return-addresses/{return_address_id}`

> Body parameter

```json
{
  "address_city": "Flynn",
  "address_country": "AU",
  "address_line_1": "Maritime Avenue",
  "address_line_2": "",
  "address_name": "John Smith",
  "address_postal_code": 6302,
  "address_state": "WA"
}
```

<h3 id="update-post-return-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_address_id|path|number|true|Your return address id.|
|body|body|object|false|none|
|» address_city|body|string|true|Your address city.|
|» address_country|body|string|true|Two-letter country code defined in ISO 3166.|
|» address_line_1|body|string|true|Your address line 1.|
|» address_line_2|body|string|false|Your address line 2.|
|» address_name|body|string|true|Your address name.|
|» address_postal_code|body|number|true|Your address postal code.|
|» address_state|body|string|true|Your address state.|

> Example responses

> 200 Response

```json
{
  "data": {
    "address_city": "Flynn",
    "address_country": "AU",
    "address_line_1": "Maritime Avenue",
    "address_line_2": "",
    "address_name": "John Smith",
    "address_postal_code": 6302,
    "address_state": "WA",
    "return_address_id": 14,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your return address has been updated."
}
```

<h3 id="update-post-return-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Post Return Address

<a id="opIdDelete Post Return Address"></a>

> Code samples

```bash
curl https://example.com/post/return-addresses/12 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /post/return-addresses/{return_address_id}`

<h3 id="delete-post-return-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|return_address_id|path|number|true|Your return address id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your return address has been deleted."
}
```

<h3 id="delete-post-return-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-postcards">Postcards</h1>

## Export Postcard History

<a id="opIdExport Postcard History"></a>

> Code samples

```bash
curl 'https://example.com/post/postcards/export?filename=myexport.csv' \
  -H 'Accept: application/json'
```

`GET /post/postcards/export?filename={filename}`

<h3 id="export-postcard-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename for the export file.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/705F80D0-D044-4F85-8617-081988B398E5?filename=myexport.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-postcard-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Postcard History

<a id="opIdGet Postcard History"></a>

> Code samples

```bash
curl https://example.com/post/postcards/history \
  -H 'Accept: application/json'
```

`GET /post/postcards/history`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/65889986-E306-4309-B229-FD9215EE1013A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482308357,
        "ip_address": "127.0.0.1",
        "letter_file_name": "65889986-E306-4309-B229-FD9215EE1013A.pdf",
        "list_id": null,
        "message_id": "909D6F4F-FC88-4BB8-AD96-D2F4B3139301",
        "message_id_supplier": "2RXWRVFFG3G8D6TB6V6P6VX7RHR7",
        "post_price": "1.710000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482308357",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/2B306DC3-FD44-488B-92B2-D895934289FCA.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482308357,
        "ip_address": "127.0.0.1",
        "letter_file_name": "2B306DC3-FD44-488B-92B2-D895934289FCA.pdf",
        "list_id": null,
        "message_id": "E4FBBB5F-9E05-45D8-93AF-2C1A3BFD5284",
        "message_id_supplier": "3HKQX79D2CT6DXDRQVRHPW7GDTM6",
        "post_price": "1.710000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482308357",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/81D66A74-E41A-4C9B-AD51-CC932051F486A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482308357,
        "ip_address": "127.0.0.1",
        "letter_file_name": "81D66A74-E41A-4C9B-AD51-CC932051F486A.pdf",
        "list_id": null,
        "message_id": "550CB11B-2D75-4851-8E2C-798F67A0BF9D",
        "message_id_supplier": "B3YCJJRHQ2WD3CJFXKWB4BTFVYW8",
        "post_price": "1.710000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482308357",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/80686068-68A5-42C6-8CD3-DE2FF5914D81A.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482308357,
        "ip_address": "127.0.0.1",
        "letter_file_name": "80686068-68A5-42C6-8CD3-DE2FF5914D81A.pdf",
        "list_id": null,
        "message_id": "65C65D93-C327-45BD-BD6D-3C9682C88533",
        "message_id_supplier": "R8CR92RVJH2Y8JC9JJCGT8RWH8B2",
        "post_price": "1.710000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482308357",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/DD750F79-A44F-4729-AC35-9267FE5AB2EFA.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482308357,
        "ip_address": "127.0.0.1",
        "letter_file_name": "DD750F79-A44F-4729-AC35-9267FE5AB2EFA.pdf",
        "list_id": null,
        "message_id": "B4E256A5-1D25-45D7-9DB5-EEC17761372A",
        "message_id_supplier": "V88MF93C9TVG2VF83T6K2GQVD6DJ",
        "post_price": "1.710000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482308357",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/BB141DB5-57DF-4FA5-A9E4-A13E5AC716E7A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482311889,
        "ip_address": "127.0.0.1",
        "letter_file_name": "BB141DB5-57DF-4FA5-A9E4-A13E5AC716E7A.pdf",
        "list_id": null,
        "message_id": "4BF01D93-8BE5-42E4-AEAF-C9D1B27DCA23",
        "message_id_supplier": "CQK8KTHP3J2B2WG2DW86C2DDH6WW",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482311889",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/BF430552-0581-42DD-BA00-B2228E7FE34BA.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482311889,
        "ip_address": "127.0.0.1",
        "letter_file_name": "BF430552-0581-42DD-BA00-B2228E7FE34BA.pdf",
        "list_id": null,
        "message_id": "BBA4C1F0-5C7C-4A58-9B93-C48FAB2DA649",
        "message_id_supplier": "X9FBM27WHPJJW9JWT2XVJTYXVDY2",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482311889",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/13BB1876-E421-4B5A-8017-81E7F9598FE5AA.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482311889,
        "ip_address": "127.0.0.1",
        "letter_file_name": "13BB1876-E421-4B5A-8017-81E7F9598FE5A.pdf",
        "list_id": null,
        "message_id": "5BC692D1-EC43-4C4F-9E83-8543B52F8B7B",
        "message_id_supplier": "7VW44YDFPJB7WWDRTXPKK9F7Q4RJ",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482311889",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/77A18FEA-8935-430E-B14A-7EBF5E1E19C8AA.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482311889,
        "ip_address": "127.0.0.1",
        "letter_file_name": "77A18FEA-8935-430E-B14A-7EBF5E1E19C8AA.pdf",
        "list_id": null,
        "message_id": "CD2C87AA-D352-4998-BE7F-5EBDF089AF61",
        "message_id_supplier": "GQ8MJ4DBRGQFPQ9K9M239CBVKDP2",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482311889",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/21837EDA-1167-4104-A4D3-4A22FA0585E4A.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482311889,
        "ip_address": "127.0.0.1",
        "letter_file_name": "21837EDA-1167-4104-A4D3-4A22FA0585E4AA.pdf",
        "list_id": null,
        "message_id": "17CD0519-4E91-4EC0-B9AF-F1BE3BC7A485",
        "message_id_supplier": "GFJKTT8CJBCYR3DFFMPPBDQJQP32",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482311889",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/C738FB89-750F-45E4-9E0A-EBD19A8B2884A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482313126,
        "ip_address": "127.0.0.1",
        "letter_file_name": "C738FB89-750F-45E4-9E0A-EBD19A8B2884A.pdf",
        "list_id": null,
        "message_id": "8A2DAFE7-130F-4F9A-820B-85D79F874E05",
        "message_id_supplier": "4F2JH87CP3PX22WRRYWVK8JJKXR2",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482313126",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/5089F9FC-0179-44E8-AC5E-225932FE9500A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482313126,
        "ip_address": "127.0.0.1",
        "letter_file_name": "5089F9FC-0179-44E8-AC5E-225932FE9500A.pdf",
        "list_id": null,
        "message_id": "047CDB95-6C9D-4485-962F-EA28FFD7C0D9",
        "message_id_supplier": "MHPDXPKFJFR9H677TQM8PH4YDMHP",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482313126",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/E17C7CE6-C2C9-476D-8886-E2B8CA6C30E3A.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482313126,
        "ip_address": "127.0.0.1",
        "letter_file_name": "E17C7CE6-C2C9-476D-8886-E2B8CA6C30E3A.pdf",
        "list_id": null,
        "message_id": "653C5ED0-5AAD-4946-8E72-8152E23A6AA5",
        "message_id_supplier": "JYPVGC83PH68XX64QYBHQXRD4V2G",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 1,
        "schedule": "1482313126",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/252678EE-C597-4D20-B1DE-F21629E77831A.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482313126,
        "ip_address": "127.0.0.1",
        "letter_file_name": "252678EE-C597-4D20-B1DE-F21629E77831A.pdf",
        "list_id": null,
        "message_id": "EF4177A7-AE6D-4035-9052-10B2C9DF4564",
        "message_id_supplier": "68TC768BG42TK6Q83VBFVKY87D99",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482313126",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/8B2A85E1-D092-47DC-B70B-983B10AD83D6A.pdf",
        "_return_address": {
          "address_city": "Flynn",
          "address_country": "AU",
          "address_line_1": "Maritime Avenue",
          "address_line_2": "",
          "address_name": "John Smith",
          "address_postal_code": "6302",
          "address_state": "WA",
          "return_address_id": 2,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": null,
        "date_added": 1482313126,
        "ip_address": "127.0.0.1",
        "letter_file_name": "8B2A85E1-D092-47DC-B70B-983B10AD83D6A.pdf",
        "list_id": null,
        "message_id": "E196E8B4-1233-4EF4-8689-C296D55B9DAE",
        "message_id_supplier": "8BF2H8CCDJMHCMCKR3THJ6XDDJ9K",
        "post_price": "1.370000",
        "post_price_supplier": "0.000000",
        "priority": 32,
        "return_address_id": 2,
        "schedule": "1482313126",
        "source": ".rest.v3",
        "status": "Sent",
        "subaccount_id": 13,
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 3,
    "next_page_url": "https://rest.clicksend.com/v3/post/postcards/history?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 32
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your history."
}
```

<h3 id="get-postcard-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Pricing

<a id="opIdCalculate Pricing"></a>

> Code samples

```bash
curl https://example.com/post/postcards/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_urls": [
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
    ],
    "recipients": [
      {
        "address_city": "City",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": "Custom abc123",
        "return_address_id": 1
      }
    ]
  }'
```

`POST /post/postcards/price`

For `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.

- Supply a single pdf with 2 pages (front and back)

- Supply 2 urls to seperate PDFs

> Body parameter

```json
{
  "file_urls": [
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
  ],
  "recipients": [
    {
      "address_city": "City",
      "address_country": "AU",
      "address_line_1": "Address 1",
      "address_line_2": "",
      "address_name": "John Smith",
      "address_postal_code": "123456",
      "address_state": "State",
      "custom_string": "Custom abc123",
      "return_address_id": 1
    }
  ]
}
```

<h3 id="calculate-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file_urls|body|[object]|true|Postcard file urls. You can submit max 2 file urls.|
|» recipients|body|[object]|true|Your recipients.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "queued_count": 1,
    "recipients": [
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/6A559A74-486D-4012-84D7-F3FE11904CB1.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "date_added": 1482473172,
        "ip_address": "127.0.0.1",
        "letter_file_name": "6A559A74-486D-4012-84D7-F3FE11904CB1.pdf",
        "message_id": "C8CAA97A-905A-4A31-99CB-A92C7BA05A97",
        "post_price": 11,
        "priority": 32,
        "return_address_id": 1,
        "schedule": 1482473172,
        "source": ".rest.v3",
        "status": "SUCCESS",
        "subaccount_id": 13,
        "user_id": 1
      }
    ],
    "total_count": 1,
    "total_price": 11
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Postcard queued for delivery."
}
```

<h3 id="calculate-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Postcard

<a id="opIdSend Postcard"></a>

> Code samples

```bash
curl https://example.com/post/postcards/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "file_urls": [
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
      "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
    ],
    "recipients": [
      {
        "address_city": "City",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "custom_string": "Custom abc123",
        "return_address_id": 1
      }
    ]
  }'
```

`POST /post/postcards/send`

**Supported File Types**
We support PDF, docx and doc. Contact us to add support for any other file type. If you're using docx or doc files, you'll need to convert the file first using our uploads endpoint with the querystring parameter ?convert=post. e.g. POST /uploads?convert=post. This will return a URL to the converted pdf file that can be used in the /post/postcards/send endpoint.

**Postcard File Options**

**Use existing URL**

With this option, you can use an existing URL to a PDF document. For example, you might generate the pdf on your server.

For `file_urls` field. You can attach at least 1 and max of 2 PDF file urls.

- Supply a single pdf with 2 pages (front and back)

- Supply 2 urls to seperate PDFs

**Upload File to Our Server**

With this option, you can use the `/uploads` endpoint to upload the document. The `/uploads` endpoint returns a URL that can be used in the `/post/postcards/send` endpoint.

> Body parameter

```json
{
  "file_urls": [
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_front.pdf",
    "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/a5_back.pdf"
  ],
  "recipients": [
    {
      "address_city": "City",
      "address_country": "AU",
      "address_line_1": "Address 1",
      "address_line_2": "",
      "address_name": "John Smith",
      "address_postal_code": "123456",
      "address_state": "State",
      "custom_string": "Custom abc123",
      "return_address_id": 1
    }
  ]
}
```

<h3 id="send-postcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file_urls|body|[object]|true|Postcard file urls. You can submit max 2 file urls.|
|» recipients|body|[object]|true|Your recipients.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "queued_count": 1,
    "recipients": [
      {
        "_api_username": "johndoe",
        "_file_url": "https://rest.clicksend.com/files/6A559A74-486D-4012-84D7-F3FE11904CB1.pdf",
        "_return_address": {
          "address_city": "Perth",
          "address_country": "AU",
          "address_line_1": "123 Test St",
          "address_line_2": "",
          "address_name": "John Doe",
          "address_postal_code": "6000",
          "address_state": "WA",
          "return_address_id": 1,
          "user_id": 1
        },
        "address_city": "CITY",
        "address_country": "AU",
        "address_line_1": "Address 1",
        "address_line_2": "",
        "address_name": "John Smith",
        "address_postal_code": "123456",
        "address_state": "State",
        "date_added": 1482473172,
        "ip_address": "127.0.0.1",
        "letter_file_name": "6A559A74-486D-4012-84D7-F3FE11904CB1.pdf",
        "message_id": "C8CAA97A-905A-4A31-99CB-A92C7BA05A97",
        "post_price": 11,
        "priority": 32,
        "return_address_id": 1,
        "schedule": 1482473172,
        "source": ".rest.v3",
        "status": "SUCCESS",
        "subaccount_id": 13,
        "user_id": 1
      }
    ],
    "total_count": 1,
    "total_price": 11
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Postcard queued for delivery."
}
```

<h3 id="send-postcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-referral-accounts">Referral Accounts</h1>

## Get List of Referral Accounts

<a id="opIdGet List of Referral Accounts"></a>

> Code samples

```bash
curl https://example.com/referral/accounts \
  -H 'Accept: application/json'
```

`GET /referral/accounts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "date_referred": 1438260940,
        "percentage_referral": 5,
        "refered_user_id": 24,
        "referral_rule_id": 1
      },
      {
        "date_referred": 1438260989,
        "percentage_referral": 5,
        "refered_user_id": 25,
        "referral_rule_id": 2
      },
      {
        "date_referred": 1438260992,
        "percentage_referral": 5,
        "refered_user_id": 26,
        "referral_rule_id": 3
      },
      {
        "date_referred": 1438260994,
        "percentage_referral": 5,
        "refered_user_id": 27,
        "referral_rule_id": 4
      },
      {
        "date_referred": 1438260997,
        "percentage_referral": 5,
        "refered_user_id": 28,
        "referral_rule_id": 5
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 5,
    "total": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your referrals."
}
```

<h3 id="get-list-of-referral-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-reseller">Reseller</h1>

## Get Reseller Setting

<a id="opIdGet Reseller Setting"></a>

> Code samples

```bash
curl https://example.com/reseller \
  -H 'Accept: application/json'
```

`GET /reseller`

Get reseller setting.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "allow_public_signups": 1,
      "colour_navigation": "#9999FF",
      "default_margin": 10,
      "default_margin_numbers": 20,
      "logo_url": "http://yourdomain.com",
      "reseller_user_id": 1,
      "subdomain": "subdomain",
      "trial_balance": "500.00"
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your result."
}
```

<h3 id="get-reseller-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Reseller Setting

<a id="opIdUpdate Reseller Setting"></a>

> Code samples

```bash
curl https://example.com/reseller \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allow_public_signups": 1,
    "colour_navigation": "#9999FF",
    "company_name": "MyCompany",
    "default_margin": 100,
    "default_margin_numbers": 150,
    "logo_url_dark": "http://yourdomain.com/dark",
    "logo_url_light": "http://yourdomain.com/light",
    "subdomain": "subdomain",
    "trial_balance": 50
  }'
```

`PUT /reseller`

Update a specific reseller setting.

> Body parameter

```json
{
  "allow_public_signups": 1,
  "colour_navigation": "#9999FF",
  "company_name": "MyCompany",
  "default_margin": 100,
  "default_margin_numbers": 150,
  "logo_url_dark": "http://yourdomain.com/dark",
  "logo_url_light": "http://yourdomain.com/light",
  "subdomain": "subdomain",
  "trial_balance": 50
}
```

<h3 id="update-reseller-setting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» allow_public_signups|body|number|true|Allow public signups.|
|» colour_navigation|body|string|true|Colour navigation.|
|» company_name|body|string|true|Company name.|
|» default_margin|body|number|true|Default margin.|
|» default_margin_numbers|body|number|true|Default margin numbers.|
|» logo_url_dark|body|string|true|Logo URL (dark)|
|» logo_url_light|body|string|true|Logo URL (light)|
|» subdomain|body|string|true|Subdomain.|
|» trial_balance|body|number|true|Trial balance.|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_public_signups": 1,
    "colour_navigation": "#9999FF",
    "company_name": "MyCompany",
    "default_margin": 100,
    "default_margin_numbers": 150,
    "logo_url_dark": "http://yourdomain.com/dark",
    "logo_url_light": "http://yourdomain.com/light",
    "reseller_user_id": 1,
    "subdomain": "subdomain",
    "trial_balance": 50
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your setting has been updated."
}
```

<h3 id="update-reseller-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reseller By Subdomain

<a id="opIdReseller By Subdomain"></a>

> Code samples

```bash
curl https://example.com/reseller/mysubdomain \
  -H 'Accept: application/json'
```

`GET /reseller/{subdomain}`

Get reseller setting by subdomin.

<h3 id="reseller-by-subdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subdomain|path|string|true|Subdomain|

> Example responses

> 200 Response

```json
{
  "data": {
    "allow_public_signups": 1,
    "colour_navigation": "#9999FF",
    "company_name": "MyCompany",
    "logo_url_dark": "http://yourdomain.com/dark",
    "logo_url_light": "http://yourdomain.com/light",
    "reseller_user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here's your result."
}
```

<h3 id="reseller-by-subdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-reseller-accounts">Reseller Accounts</h1>

## List of Reseller Accounts

<a id="opIdList of Reseller Accounts"></a>

> Code samples

```bash
curl https://example.com/reseller/accounts \
  -H 'Accept: application/json'
```

`GET /reseller/accounts`

Get list of Reseller Accounts

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 1,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "D683D2C1-8AAE-881A-78FF-E8577D7BED2D",
          "api_username": "Y3c5zm7z97",
          "email": "oNEDu5ffl8@BP8lY.com",
          "first_name": "JohnNyZWy",
          "last_name": "Doe8ozHX",
          "phone_number": "+61353787526",
          "subaccount_id": 54
        },
        "account": 0,
        "account_billing_email": "AIYkwXgB2c@CzrJB.com",
        "account_billing_mobile": "+61353787961",
        "account_name": "Johnn99YH",
        "active": 1,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261086832",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 1,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 26979,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 1,
        "unsubscribe_mail": 1,
        "user_email": "email86363@gmail.com",
        "user_first_name": "Firstname30529",
        "user_id": 24,
        "user_last_name": "Lastname83402",
        "user_phone": "+61261063776",
        "username": "username75897"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "C9B4AFBA-BDBA-E343-950B-2C63BF6E7901",
          "api_username": "a4CQgqG4lS",
          "email": "fZpbUQfzE0@NQ9Nt.com",
          "first_name": "John19k46",
          "last_name": "DoexkI6a",
          "phone_number": "+61353787898",
          "subaccount_id": 70
        },
        "account": 0,
        "account_billing_email": "fZpbUQfzE0@NQ9Nt.com",
        "account_billing_mobile": "+61353787898",
        "account_name": "JohnkMJLv",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "2273.435000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "I1hq9xrvmcNO24sf",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 0,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 0,
        "user_email": "MEynjL6C3A@2YtIn.com",
        "user_first_name": "JohnjRk3I",
        "user_id": 60,
        "user_last_name": "Doe1uWR5",
        "user_phone": "+61353787971",
        "username": "FHJatAkKXD"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "2E829F76-FB67-D2D6-637E-7DB511D98A85",
          "api_username": "zOgiEZ1TK7",
          "email": "alKdHhfzXI@MvAvZ.com",
          "first_name": "JohnufkdZ",
          "last_name": "DoevmQ93",
          "phone_number": "+61353787282",
          "subaccount_id": 71
        },
        "account": 0,
        "account_billing_email": "alKdHhfzXI@MvAvZ.com",
        "account_billing_mobile": "+61353787282",
        "account_name": "JohnwjvLq",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "iBX9lNMRLM1Dp5QN",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 0,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 0,
        "user_email": "eThbkhkjwi@El2xE.com",
        "user_first_name": "JohnTW9sV",
        "user_id": 61,
        "user_last_name": "DoeBQhRS",
        "user_phone": "+61353787600",
        "username": "e10GrL9GUw"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "E0D3BF7C-F51A-95BF-F80C-A90C546A3AF7",
          "api_username": "lDcRBjpvzc",
          "email": "Y6Q8mpg5PM@DxhTZ.com",
          "first_name": "JohnpIh23",
          "last_name": "Doen7y2c",
          "phone_number": "+61353787685",
          "subaccount_id": 72
        },
        "account": 0,
        "account_billing_email": "Y6Q8mpg5PM@DxhTZ.com",
        "account_billing_mobile": "+61353787685",
        "account_name": "JohnCEUiT",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "WrDhMU4CAwsGvoBn",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 8,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 0,
        "user_email": "J6tOUnclVo@vmAV6.com",
        "user_first_name": "JohnsIbLF",
        "user_id": 62,
        "user_last_name": "DoeWhrkh",
        "user_phone": "+61353787970",
        "username": "FYuLNmYf8K"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "DD87E68D-73B9-91AF-8EEE-F1D3C8FA40F5",
          "api_username": "username_62220",
          "email": "email_96752@gmail.com",
          "first_name": "Firstname6663",
          "last_name": "Lastname95048",
          "phone_number": "+61261061361",
          "subaccount_id": 80
        },
        "account": 0,
        "account_billing_email": "email_96752@gmail.com",
        "account_billing_mobile": "+61261061361",
        "account_name": "Company 99550",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": null,
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 2147483647,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 0,
        "user_email": "email_96752@gmail.com",
        "user_first_name": "Firstname6663",
        "user_id": 70,
        "user_last_name": "Lastname95048",
        "user_phone": "+61261061361",
        "username": "username_62220"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "1219277F-5111-C884-DEE1-7C16681A3655",
          "api_username": "username_38270",
          "email": "email_66764@gmail.com",
          "first_name": "Firstname1371",
          "last_name": "Lastname50417",
          "phone_number": "+61261063404",
          "subaccount_id": 81
        },
        "account": 0,
        "account_billing_email": "email_66764@gmail.com",
        "account_billing_mobile": "+61261063404",
        "account_name": "Company 50249",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261089282",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 1,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 2147483647,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 1,
        "unsubscribe_mail": 0,
        "user_email": "email_66764@gmail.com",
        "user_first_name": "Firstname1371",
        "user_id": 71,
        "user_last_name": "Lastname50417",
        "user_phone": "+61261063404",
        "username": "username_38270"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "631D0E3C-CA0A-E224-BF1B-0070FDACF775",
          "api_username": "username_39016",
          "email": "email_67772@gmail.com",
          "first_name": "Firstname26535",
          "last_name": "Lastname36882",
          "phone_number": "+61261061316",
          "subaccount_id": 82
        },
        "account": 0,
        "account_billing_email": "email_67772@gmail.com",
        "account_billing_mobile": "+61261061316",
        "account_name": "Company 26794",
        "active": 1,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261087712",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 1,
        "setting_fix_sender_id": 87404,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 0,
        "user_email": "email_67772@gmail.com",
        "user_first_name": "Firstname26535",
        "user_id": 72,
        "user_last_name": "Lastname36882",
        "user_phone": "+61261061316",
        "username": "username_39016"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "E236FDFF-4730-F719-85B9-2AC0D4D192F5",
          "api_username": "username_10832",
          "email": "email_28172@gmail.com",
          "first_name": "Firstname10383",
          "last_name": "Lastname11110",
          "phone_number": "+61261064026",
          "subaccount_id": 83
        },
        "account": 0,
        "account_billing_email": "email_28172@gmail.com",
        "account_billing_mobile": "+61261064026",
        "account_name": "Company 28247",
        "active": 1,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261088320",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 1,
        "setting_fix_sender_id": 67684,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 1,
        "unsubscribe_mail": 0,
        "user_email": "email_28172@gmail.com",
        "user_first_name": "Firstname10383",
        "user_id": 73,
        "user_last_name": "Lastname11110",
        "user_phone": "+61261064026",
        "username": "username_10832"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "98AE5B58-141B-1310-AC66-45D34D56CA4C",
          "api_username": "username65302",
          "email": "email1024@gmail.com",
          "first_name": "Firstname42348",
          "last_name": "Lastname45055",
          "phone_number": "+61261067753",
          "subaccount_id": 84
        },
        "account": 0,
        "account_billing_email": "email1024@gmail.com",
        "account_billing_mobile": "+61261067753",
        "account_name": "Company88867",
        "active": 1,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261087647",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 1,
        "setting_fix_sender_id": 93951,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 1,
        "unsubscribe_mail": 1,
        "user_email": "email1024@gmail.com",
        "user_first_name": "Firstname42348",
        "user_id": 74,
        "user_last_name": "Lastname45055",
        "user_phone": "+61261067753",
        "username": "username65302"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "C9E22A8E-88B2-0077-3445-F95A5D501FEA",
          "api_username": "username67428",
          "email": "email13820@gmail.com",
          "first_name": "Firstname70051",
          "last_name": "Lastname35293",
          "phone_number": "+61261062260",
          "subaccount_id": 85
        },
        "account": 0,
        "account_billing_email": "email13820@gmail.com",
        "account_billing_mobile": "+61261062260",
        "account_name": "Company13805",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261088951",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 35625,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 0,
        "unsubscribe_mail": 1,
        "user_email": "email13820@gmail.com",
        "user_first_name": "Firstname70051",
        "user_id": 75,
        "user_last_name": "Lastname35293",
        "user_phone": "+61261062260",
        "username": "username67428"
      },
      {
        "_currency": {
          "currency_name_long": "Australian Dollars",
          "currency_name_short": "AUD",
          "currency_prefix_c": "c",
          "currency_prefix_d": "$"
        },
        "_subaccount": {
          "access_billing": 1,
          "access_contacts": 0,
          "access_email": 0,
          "access_fax": 0,
          "access_post": 0,
          "access_reporting": 1,
          "access_reseller": 0,
          "access_settings": 1,
          "access_sms": 0,
          "access_users": 1,
          "access_voice": 0,
          "api_key": "BBD918C1-DD00-FFFB-CF53-4C3AB9E15F5C",
          "api_username": "username59",
          "email": "email52313@gmail.com",
          "first_name": "Firstname49996",
          "last_name": "Lastname22152",
          "phone_number": "+61261069962",
          "subaccount_id": 86
        },
        "account": 0,
        "account_billing_email": "email52313@gmail.com",
        "account_billing_mobile": "+61261069962",
        "account_name": "Company23060",
        "active": 0,
        "auto_recharge": 0,
        "auto_recharge_amount": "20.00",
        "balance": "115.000000",
        "banned": 0,
        "country": "AU",
        "default_country_sms": "AU",
        "delivery_to": "+61261083784",
        "low_credit_amount": "1.50",
        "reply_to": "originalemail",
        "setting_beta": 0,
        "setting_email_sms_subject": 0,
        "setting_fix_sender_id": 44842,
        "setting_sms_message_char_limit": 140,
        "setting_unicode_sms": 1,
        "unsubscribe_mail": 1,
        "user_email": "email52313@gmail.com",
        "user_first_name": "Firstname49996",
        "user_id": 76,
        "user_last_name": "Lastname22152",
        "user_phone": "+61261069962",
        "username": "username59"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 11,
    "total": 11
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are you data."
}
```

<h3 id="list-of-reseller-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Reseller Account

<a id="opIdCreate Reseller Account"></a>

> Code samples

```bash
curl https://example.com/reseller/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_name": "The Awesome Company",
    "country": "US",
    "password": "pass",
    "user_email": "johndoe2@awesome.com",
    "user_first_name": "John",
    "user_last_name": "Doe",
    "user_phone": "518-481-1002",
    "username": "johndoe2"
  }'
```

`POST /reseller/accounts`

> Body parameter

```json
{
  "account_name": "The Awesome Company",
  "country": "US",
  "password": "pass",
  "user_email": "johndoe2@awesome.com",
  "user_first_name": "John",
  "user_last_name": "Doe",
  "user_phone": "518-481-1002",
  "username": "johndoe2"
}
```

<h3 id="create-reseller-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account_name|body|string|true|Your delivery to value.|
|» country|body|string|true|Client country.|
|» password|body|string|true|Your password.|
|» user_email|body|string|true|Your email.|
|» user_first_name|body|string|true|Your first name.|
|» user_last_name|body|string|true|Your last name.|
|» user_phone|body|string|true|Your phone number in E.164 format.|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_email": 0,
      "access_fax": 0,
      "access_post": 0,
      "access_reporting": 1,
      "access_reseller": 0,
      "access_settings": 1,
      "access_sms": 0,
      "access_users": 1,
      "access_voice": 0,
      "api_key": "A724C6A4-1D1A-93E8-5FB8-62DC1D153CE4",
      "api_username": "johndoe2",
      "email": "johndoe2@awesome.com",
      "first_name": "John",
      "last_name": "Doe",
      "phone_number": "+15184811002",
      "subaccount_id": 127
    },
    "account": 0,
    "account_billing_email": "johndoe2@awesome.com",
    "account_billing_mobile": "+15184811002",
    "account_name": "The Awesome Company",
    "active": 0,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "0.000000",
    "balance_commission": "0.299954",
    "banned": 0,
    "country": "US",
    "default_country_sms": "US",
    "delivery_to": null,
    "low_credit_amount": "0.00",
    "old_dashboard": 0,
    "reply_to": "originalemail",
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_message_char_limit": 6,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johndoe2@awesome.com",
    "user_first_name": "John",
    "user_id": 117,
    "user_last_name": "Doe",
    "user_phone": "+15184811002",
    "username": "johndoe2"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New reseller has been added."
}
```

<h3 id="create-reseller-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Reseller Account - Public

<a id="opIdCreate Reseller Account - Public"></a>

> Code samples

```bash
curl https://example.com/reseller/accounts-public \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_name": "The Awesome Company",
    "country": "AU",
    "password": "pass",
    "reseller_user_id": 1,
    "user_email": "johnis@awesome.com",
    "user_first_name": "John",
    "user_last_name": "Awesome",
    "user_phone": "+61261063270",
    "username": "john_awesome"
  }'
```

`POST /reseller/accounts-public`

> Body parameter

```json
{
  "account_name": "The Awesome Company",
  "country": "AU",
  "password": "pass",
  "reseller_user_id": 1,
  "user_email": "johnis@awesome.com",
  "user_first_name": "John",
  "user_last_name": "Awesome",
  "user_phone": "+61261063270",
  "username": "john_awesome"
}
```

<h3 id="create-reseller-account---public-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account_name|body|string|true|Your delivery to value.|
|» country|body|string|true|Client country.|
|» password|body|string|true|Your password.|
|» reseller_user_id|body|number|true|Reseller User ID.|
|» user_email|body|string|true|Your email.|
|» user_first_name|body|string|true|Your first name.|
|» user_last_name|body|string|true|Your last name.|
|» user_phone|body|string|true|Your phone number in E.164 format.|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_email": 0,
      "access_fax": 0,
      "access_post": 0,
      "access_reporting": 1,
      "access_reseller": 0,
      "access_settings": 1,
      "access_sms": 0,
      "access_users": 1,
      "access_voice": 0,
      "api_key": "A144E6D3-3FF9-F3BF-4495-80AE75A0BF88",
      "api_username": "john_awesome",
      "email": "johnis@awesome.com",
      "first_name": "John",
      "last_name": "Awesome",
      "notes": null,
      "phone_number": "+61261063270",
      "subaccount_id": 146
    },
    "account": 0,
    "account_billing_email": "johnis@awesome.com",
    "account_billing_mobile": "+61261063270",
    "account_name": "The Awesome Company",
    "active": 0,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "0.000000",
    "balance_commission": "0.299954",
    "banned": 0,
    "country": "AU",
    "default_country_sms": "AU",
    "delivery_to": null,
    "low_credit_amount": "0.00",
    "old_dashboard": 0,
    "reply_to": "originalemail",
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_message_char_limit": 8,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johnis@awesome.com",
    "user_first_name": "John",
    "user_id": 130,
    "user_last_name": "Awesome",
    "user_phone": "+61261063270",
    "username": "john_awesome"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New reseller has been added."
}
```

<h3 id="create-reseller-account---public-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Reseller Account

<a id="opIdGet Reseller Account"></a>

> Code samples

```bash
curl https://example.com/reseller/accounts/24 \
  -H 'Accept: application/json'
```

`GET /reseller/accounts/{client_user_id}`

Get a specific reseller account.

<h3 id="get-reseller-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_user_id|path|number|true|The client user id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_email": 0,
      "access_fax": 0,
      "access_post": 0,
      "access_reporting": 1,
      "access_reseller": 0,
      "access_settings": 1,
      "access_sms": 1,
      "access_users": 1,
      "access_voice": 0,
      "api_key": "D683D2C1-8AAE-881A-78FF-E8577D7BED2D",
      "api_username": "Y3c5zm7z97",
      "email": "oNEDu5ffl8@BP8lY.com",
      "first_name": "JohnNyZWy",
      "last_name": "Doe8ozHX",
      "phone_number": "+61353787526",
      "subaccount_id": 54
    },
    "account": 0,
    "account_billing_email": "AIYkwXgB2c@CzrJB.com",
    "account_billing_mobile": "+61353787961",
    "account_name": "Johnn99YH",
    "active": 1,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "115.000000",
    "banned": 0,
    "country": "AU",
    "default_country_sms": "AU",
    "delivery_to": "+61261086832",
    "low_credit_amount": "1.50",
    "reply_to": "originalemail",
    "setting_beta": 1,
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 26979,
    "setting_sms_message_char_limit": 140,
    "setting_unicode_sms": 1,
    "unsubscribe_mail": 1,
    "user_email": "email86363@gmail.com",
    "user_first_name": "Firstname30529",
    "user_id": 24,
    "user_last_name": "Lastname83402",
    "user_phone": "+61261063776",
    "username": "username75897"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-reseller-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Reseller Account

<a id="opIdUpdate Reseller Account"></a>

> Code samples

```bash
curl https://example.com/reseller/accounts/24 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account_name": "The Awesome Company",
    "country": "US",
    "password": "pass",
    "user_email": "johndoe2@awesome.com",
    "user_first_name": "John",
    "user_last_name": "Doe",
    "user_phone": "518-481-1002",
    "username": "johndoe2"
  }'
```

`PUT /reseller/accounts/{client_user_id}`

> Body parameter

```json
{
  "account_name": "The Awesome Company",
  "country": "US",
  "password": "pass",
  "user_email": "johndoe2@awesome.com",
  "user_first_name": "John",
  "user_last_name": "Doe",
  "user_phone": "518-481-1002",
  "username": "johndoe2"
}
```

<h3 id="update-reseller-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_user_id|path|number|true|Your client user id.|
|body|body|object|false|none|
|» account_name|body|string|true|Your delivery to value.|
|» country|body|string|true|Client country.|
|» password|body|string|true|Your password.|
|» user_email|body|string|true|Your email.|
|» user_first_name|body|string|true|Your first name.|
|» user_last_name|body|string|true|Your last name.|
|» user_phone|body|string|true|Your phone number in E.164 format.|
|» username|body|string|true|Your username.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "_subaccount": null,
    "account": 0,
    "account_billing_email": "johndoe2@awesome.com",
    "account_billing_mobile": "+15184811002",
    "account_name": "The Awesome Company",
    "active": 0,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "199.997000",
    "balance_commission": "0.299954",
    "banned": 0,
    "country": "US",
    "default_country_sms": "US",
    "delivery_to": null,
    "low_credit_amount": "0.00",
    "old_dashboard": 0,
    "reply_to": "originalemail",
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_message_char_limit": 6,
    "setting_unicode_sms": 0,
    "timezone": "Australia/Melbourne",
    "user_email": "johndoe2@awesome.com",
    "user_first_name": "John",
    "user_id": 117,
    "user_last_name": "Doe",
    "user_phone": "518-481-1002",
    "username": "johndoe2"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Reseller account has been updated."
}
```

<h3 id="update-reseller-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transfer Credit

<a id="opIdTransfer Credit"></a>

> Code samples

```bash
curl https://example.com/reseller/transfer-credit \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "balance": 12,
    "client_user_id": 60,
    "currency": "USD"
  }'
```

`PUT /reseller/transfer-credit`

> Body parameter

```json
{
  "balance": 12,
  "client_user_id": 60,
  "currency": "USD"
}
```

<h3 id="transfer-credit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» balance|body|number|true|Your amount.|
|» client_user_id|body|string|true|Your client user id.|
|» currency|body|string|true|Your currency.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "_subaccount": {
      "access_billing": 1,
      "access_contacts": 0,
      "access_email": 0,
      "access_fax": 0,
      "access_post": 0,
      "access_reporting": 1,
      "access_reseller": 0,
      "access_settings": 1,
      "access_sms": 0,
      "access_users": 1,
      "access_voice": 0,
      "api_key": "C9B4AFBA-BDBA-E343-950B-2C63BF6E7901",
      "api_username": "a4CQgqG4lS",
      "email": "fZpbUQfzE0@NQ9Nt.com",
      "first_name": "John19k46",
      "last_name": "DoexkI6a",
      "phone_number": "+61353787898",
      "subaccount_id": 70
    },
    "account": 0,
    "account_billing_email": "fZpbUQfzE0@NQ9Nt.com",
    "account_billing_mobile": "+61353787898",
    "account_name": "JohnkMJLv",
    "active": 0,
    "auto_recharge": 0,
    "auto_recharge_amount": "20.00",
    "balance": "170.728701",
    "banned": 0,
    "country": "AU",
    "default_country_sms": "AU",
    "delivery_to": "I1hq9xrvmcNO24sf",
    "low_credit_amount": "1.50",
    "reply_to": "originalemail",
    "setting_beta": 0,
    "setting_email_sms_subject": 0,
    "setting_fix_sender_id": 0,
    "setting_sms_message_char_limit": 140,
    "setting_unicode_sms": 0,
    "unsubscribe_mail": 0,
    "user_email": "MEynjL6C3A@2YtIn.com",
    "user_first_name": "JohnjRk3I",
    "user_id": 60,
    "user_last_name": "Doe1uWR5",
    "user_phone": "+61353787971",
    "username": "FHJatAkKXD"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your balance has been successfully transferred."
}
```

<h3 id="transfer-credit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

<h1 id="clicksend-rest-api-v3-sdk">SDK</h1>

## SDK Download

<a id="opIdSDK Download"></a>

> Code samples

```bash
curl https://example.com/sdk-download/cs%2C%20java%2C%20android%2C%20objectivec%2C%20angular%2C%20ruby%2C%20python%2C%20php%2C%20nodejs%2C%20go
```

`GET /sdk-download/{type}`

<h3 id="sdk-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Supported types.|

<h3 id="sdk-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-search">Search</h1>

## Search Contacts-Lists

<a id="opIdSearch Contacts-Lists"></a>

> Code samples

```bash
curl 'https://example.com/search/contacts-lists?q=Gorne' \
  -H 'Accept: application/json'
```

`GET /search/contacts-lists?q={q}`

<h3 id="search-contacts-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|path|string|true|Your keyword or query.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "contact": "+16783270696",
        "contacts_count": null,
        "id": 552807,
        "name": "Gorne",
        "type": "contact"
      },
      {
        "contact": "GHPAJCCVGMTD9BLA",
        "contacts_count": 3,
        "id": 428,
        "name": "Gorne",
        "type": "list"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are some search result."
}
```

<h3 id="search-contacts-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-sms">SMS</h1>

# How many messages can I send?

## Send SMS Endpoint

You can post **up to 1000 messages** with each API call. You can send to a mix of contacts and contact lists, as long as the total number of recipients is up to 1000. The response contains a status and details for each recipient.

Refer to [**Application Status Codes**](#introduction/application-status-codes) for the possible response message status strings.

## SMS Campaign Endpoint

You can post to a list with **up to 20000 recipients** with each API call. You can only send to a single list containing up to 20,000 recipients. The response is far less detailed than the normal Send SMS endpoint.

# How many characters can I send in a message?

A standard SMS message has a maximum of 160 characters. Longer messages are definitely possible, however please be aware that exceeding 160 characters will constitute a ‘second’ message. The end user will see this as 1 long message on their handset.
When a message is longer than 160 characters, this is referred to as a multi-part message as it contains multiple messages (or multiple-parts). The total SMS limit then becomes 153 characters per ‘part’ as the 7 characters are used up by invisible headers and footers which denote which part of the message is being sent (i.e. Part 1 of 2). For example:
If a message is longer than 6 message parts, it will be truncated (see below). If a message contains any characters that aren't in the GSM 03.38 character set, the message type will be treated as unicode. (`https://en.wikipedia.org/wiki/GSM_03.38`)

## Standard English Characters:

| Number of Characters | Message Credits |
|---|---|
| 1 - 160 | 1 |
| 161 - 306 | 2 |
| 307 - 459 | 3 |
| 460 - 612 | 4 |
| 613 - 765 | 5 |
| 766 - 918 | 6 |
| 919 - 1071 | 7 |
| 1072 - 1224 | 8 |

## Non-GSM (Unicode) characters:

| Number of Characters | Message Credits |
|---|---|
|1 - 70 | 1 |
|71 - 134 | 2 |
|135 - 201 | 3 |
|202 - 268 | 4 |
|269 - 335 | 5 |
|336 - 402 | 6 |
|403 - 469 | 7 |
|470 - 536 | 8 |

## Cancel all Scheduled Messages

<a id="opIdCancel all Scheduled Messages"></a>

> Code samples

```bash
curl https://example.com/sms/cancel-all \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /sms/cancel-all`

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "5 messages has been cancelled."
}
```

<h3 id="cancel-all-scheduled-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export SMS History

<a id="opIdExport SMS History"></a>

> Code samples

```bash
curl 'https://example.com/sms/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /sms/history/export?filename={filename}`

<h3 id="export-sms-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-sms-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all History

<a id="opIdGet all History"></a>

> Code samples

```bash
curl 'https://example.com/sms/history?date_from=1449459940&date_to=1449659940' \
  -H 'Accept: application/json'
```

`GET /sms/history?date_from={date_from}&date_to={date_to}`

**SMS Delivery Status**

**Status (status field)**

| Status | Description |
|---|---|---|
| `Completed` | Added to delivery queue. Waiting to be sent to the network.|
| `Sent` | Message sent to the network.|
| `Cancelled` | Message cancelled.|
| `Scheduled` | Message scheduled.|
| `WaitApproval` | Waiting approval by our team. This is temporary and will change to 'Sent' once approved. This only happens for a few messages that are flagged for approval by our automated spam-detection system.|

**Status Codes (status_code field)**

| Code | Text | Description |
|---|---|---|
| `200` | Sent by network| Temporary success|
| `201` | Received on handset| Permanent success|
| `300` | Delivery failure| Permanent failure|
| `301` | Delivery failure| Permanent failure|
| `302` | Delivery failure| Temporary failure - supplier routing issue|

<h3 id="get-all-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_from|path|string|true|Timestamp (from) used to show records by date.|
|date_to|path|string|true|Timestamp (to) used to show recrods by date.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_api_username": "johndoe",
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton 1iQByXxdLN.",
        "carrier": "",
        "contact_id": 0,
        "country": "US",
        "custom_string": "this is a test",
        "date": "1436932432",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "first_name": "John",
        "from": "sendlist",
        "from_email": null,
        "last_name": "Doe",
        "list_id": null,
        "message_id": "4E90F4C3-43A3-489D-9AB8-DA1F4332A0C3",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436879372",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+16783270696",
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton 1iQByXxdLN.",
        "carrier": "",
        "contact_id": 0,
        "country": "US",
        "custom_string": "this is a test",
        "date": "1436932432",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "first_name": "John",
        "from": "sendlist",
        "from_email": null,
        "last_name": "Doe",
        "list_id": null,
        "message_id": "7DA5EB64-29FF-4E8A-AB6B-FE945EC9B45E",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436879372",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+16783275492",
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "body": "Jelly liquorice marshmallow candy carrot cake fgzOlMXuOI.",
        "carrier": "Telstra",
        "contact_id": 0,
        "country": "AU",
        "custom_string": "this is a test",
        "date": "1436932503",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "from": "sendmobile",
        "from_email": null,
        "list_id": null,
        "message_id": "064AF521-2A27-4B2A-9AB5-C45F555024EA",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436871976",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61411111111",
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton 1iQByXxdLN.",
        "carrier": "Telstra",
        "contact_id": 0,
        "country": "AU",
        "custom_string": "this is a test",
        "date": "1436932503",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "from": "sendlist",
        "from_email": null,
        "list_id": null,
        "message_id": "25DD465D-2286-45AF-AE25-D7AB36587B57",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436879372",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+61411111111",
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton 1iQByXxdLN.",
        "carrier": "",
        "contact_id": 0,
        "country": "US",
        "custom_string": "this is a test",
        "date": "1436932503",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "first_name": "John",
        "from": "sendlist",
        "from_email": null,
        "last_name": "Doe",
        "list_id": null,
        "message_id": "CBC8FCF2-78B2-4C7B-ABFB-76B7AC5CB558",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436879372",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+16783270696",
        "user_id": 1
      },
      {
        "_api_username": "johndoe",
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton 1iQByXxdLN.",
        "carrier": "",
        "contact_id": 0,
        "country": "US",
        "custom_string": "this is a test",
        "date": "1436932503",
        "direction": "out",
        "error_code": null,
        "error_text": null,
        "first_name": "John",
        "from": "sendlist",
        "from_email": null,
        "last_name": "Doe",
        "list_id": null,
        "message_id": "39266530-5430-44AA-B620-FDFC7D4A9184",
        "message_parts": "1.00",
        "message_price": "0.070000",
        "schedule": "1436879372",
        "status": "Completed",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+16783275492",
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 6,
    "total": 6
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-all-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all Inbound SMS - Pull

<a id="opIdGet all Inbound SMS - Pull"></a>

> Code samples

```bash
curl https://example.com/sms/inbound \
  -H 'Accept: application/json'
```

`GET /sms/inbound`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_keyword": "liquorice",
        "body": "Liquorice sweet roll fruitcake gummies. ",
        "custom_string": "22PKU978RF",
        "from": "+61411111111",
        "message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
        "original_body": "Liquorice sweet roll fruitcake gummies. ",
        "original_message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
        "timestamp": "1436174407",
        "to": "SC557B56E-83C0-4070-A74C-9BF05474B418"
      },
      {
        "_keyword": "lemon",
        "body": "Lemon drops brownie pie chocolate bar pie sweet jelly-o chocolate.",
        "custom_string": "2ATQKLETYX",
        "from": "Lemon drops brownie pie chocolate bar pie swe",
        "message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
        "original_body": "Lemon drops brownie pie chocolate bar pie sweet jelly-o chocolate.",
        "original_message_id": "373F7121-8089-42FA-8F5C-8F8F7C18DFAA",
        "timestamp": "1436174406",
        "to": "S373F7121-8089-42FA-8F5C-8F8F7C18DFAA"
      },
      {
        "_keyword": "jelly",
        "body": "Jelly beans jelly cupcake bear claw gummies.",
        "custom_string": "0PZCOGJP0A",
        "from": "Jelly beans jelly cupcake bear claw gummies.",
        "message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
        "original_body": "Jelly beans jelly cupcake bear claw gummies.",
        "original_message_id": "A9F3863C-D88E-4A54-BEF1-BD73A6E42E2E",
        "timestamp": "1436174405",
        "to": "SA9F3863C-D88E-4A54-BEF1-BD73A6E42E2E"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-all-inbound-sms---pull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Test Inbound SMS

<a id="opIdAdd a Test Inbound SMS"></a>

> Code samples

```bash
curl https://example.com/sms/inbound \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "http://yourdomain.com"
  }'
```

`POST /sms/inbound`

> Body parameter

```json
{
  "url": "http://yourdomain.com"
}
```

<h3 id="add-a-test-inbound-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|Your URL if using the push option or 'poll' if using the pull option.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_keyword": "this",
    "body": "This is a test incoming SMS. 5IHHOWWZTB.",
    "custom_string": null,
    "from": "+61468460249",
    "message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
    "original_body": "This is the original message. AA4NN45X7J.",
    "original_message_id": "F35B6DF1-0C9E-488F-954E-2F603B6192F5",
    "timestamp": "1442398236",
    "to": "+61411111111"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your incoming messages."
}
```

<h3 id="add-a-test-inbound-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Mark all Inbound SMS as read

<a id="opIdMark all Inbound SMS as read"></a>

> Code samples

```bash
curl https://example.com/sms/inbound-read \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "date_before": 1442398100
  }'
```

`PUT /sms/inbound-read`

> Body parameter

```json
{
  "date_before": 1442398100
}
```

<h3 id="mark-all-inbound-sms-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» date_before|body|number|true|An optional timestamp - mark all as read before this timestamp. If not given, all messages will be marked as read.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Inbound messages have been marked as read."
}
```

<h3 id="mark-all-inbound-sms-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Mark a specific Inbound SMS as read

<a id="opIdMark a specific Inbound SMS as read"></a>

> Code samples

```bash
curl https://example.com/sms/inbound-read/C557B56E-83C0-4070-A74C-9BF05474B418 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /sms/inbound-read/{message_id}`

<h3 id="mark-a-specific-inbound-sms-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|Message ID. Must be a valid GUID.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Inbound messages have been marked as read."
}
```

<h3 id="mark-a-specific-inbound-sms-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Inbound - Pull

<a id="opIdGet Specific Inbound - Pull"></a>

> Code samples

```bash
curl https://example.com/sms/inbound/C557B56E-83C0-4070-A74C-9BF05474B418 \
  -H 'Accept: application/json'
```

`GET /sms/inbound/{outbound_message_id}`

<h3 id="get-specific-inbound---pull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outbound_message_id|path|string|true|Message ID of the original outbound message, to which the inbound message is a reply. Must be a valid GUID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_keyword": "this",
    "body": "This is a test incoming SMS. IWXTUW9DCH.",
    "custom_string": "custom_string",
    "from": "+61410926433",
    "message_id": "C557B56E-83C0-4070-A74C-9BF05474B418",
    "original_body": "This is the original message. 0CSO0ITKJM.",
    "original_message_id": "5D420421-8715-4461-A9A2-C8F569E41835",
    "timestamp": "1457947468",
    "to": "+61411111111"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here's your result."
}
```

<h3 id="get-specific-inbound---pull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price

> Code samples

```bash
curl https://example.com/sms/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "custom_string": "this is a test",
        "from": "sendmobile",
        "schedule": 1436874701,
        "source": "php",
        "to": "+61411111111"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "custom_string": "this is a test",
        "from": "sendlist",
        "list_id": 428,
        "schedule": 1436876011,
        "source": "php"
      }
    ]
  }'
```

`POST /sms/price`

> Body parameter

```json
{
  "messages": [
    {
      "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
      "custom_string": "this is a test",
      "from": "sendmobile",
      "schedule": 1436874701,
      "source": "php",
      "to": "+61411111111"
    },
    {
      "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
      "custom_string": "this is a test",
      "from": "sendlist",
      "list_id": 428,
      "schedule": 1436876011,
      "source": "php"
    }
  ]
}
```

<h3 id="calculate-price-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "country": "AU",
        "custom_string": "this is a test",
        "from": "sendmobile",
        "message_parts": 1,
        "message_price": "0.0566",
        "schedule": 1436874701,
        "status": "SUCCESS",
        "to": "+61411111111"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "AU",
        "custom_string": "this is a test",
        "from": "sendlist",
        "message_parts": 1,
        "message_price": "0.0566",
        "schedule": 1436876011,
        "status": "SUCCESS",
        "to": "+61411111111"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "US",
        "custom_string": "this is a test",
        "from": "sendlist",
        "message_parts": 1,
        "message_price": "0.0566",
        "schedule": 1436876011,
        "status": "SUCCESS",
        "to": "+16783270696"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "US",
        "custom_string": "this is a test",
        "from": "sendlist",
        "message_parts": 1,
        "message_price": "0.0566",
        "schedule": 1436876011,
        "status": "SUCCESS",
        "to": "+16783275492"
      }
    ],
    "queued_count": 4,
    "total_count": 4,
    "total_price": 0.2264
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="calculate-price-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get all Delivery Receipts

> Code samples

```bash
curl https://example.com/sms/receipts \
  -H 'Accept: application/json'
```

`GET /sms/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_message_type": "sms",
        "custom_string": null,
        "error_code": null,
        "error_text": null,
        "message_id": "31BC271B-1E0C-45F6-9E7E-97186C46BB82",
        "status_code": "201",
        "status_text": "Success: Message received on handset.",
        "timestamp": "1442381791",
        "timestamp_send": "1442381791"
      },
      {
        "_message_type": "sms",
        "custom_string": null,
        "error_code": null,
        "error_text": null,
        "message_id": "23C8ADA3-FD8B-420B-801A-F829BB87AC6F",
        "status_code": "201",
        "status_text": "Success: Message received on handset.",
        "timestamp": "1442381829",
        "timestamp_send": "1442381829"
      },
      {
        "_message_type": "sms",
        "custom_string": null,
        "error_code": null,
        "error_text": null,
        "message_id": "3BD22FAD-A5D3-4D99-B4C0-16BF65BE052C",
        "status_code": "201",
        "status_text": "Success: Message received on handset.",
        "timestamp": "1442381861",
        "timestamp_send": "1442381861"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your delivery receipts."
}
```

<h3 id="get-all-delivery-receipts-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Test Delivery Receipt

> Code samples

```bash
curl https://example.com/sms/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "http://yourdomain.com"
  }'
```

`POST /sms/receipts`

> Body parameter

```json
{
  "url": "http://yourdomain.com"
}
```

<h3 id="add-a-test-delivery-receipt-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|Your URL if using the push option or 'poll' if using the pull option.|

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_string": null,
    "error_code": null,
    "error_text": null,
    "message_id": "493FFB41-9733-4641-985F-BD79A067B58F",
    "status_code": "201",
    "status_text": "Success: Message received on handset.",
    "timestamp": "1441958441"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipt has been added"
}
```

<h3 id="add-a-test-delivery-receipt-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Mark Delivery Receipts as read

<a id="opIdMark Delivery Receipts as read"></a>

> Code samples

```bash
curl https://example.com/sms/receipts-read \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "date_before": 1441958441
  }'
```

`PUT /sms/receipts-read`

> Body parameter

```json
{
  "date_before": 1441958441
}
```

<h3 id="mark-delivery-receipts-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» date_before|body|number|false|An optional timestamp - mark all as read before this timestamp. If not given, all receipts will be marked as read.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipts has been marked as read."
}
```

<h3 id="mark-delivery-receipts-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Specific Delivery Receipt

<a id="opIdGet a Specific Delivery Receipt"></a>

> Code samples

```bash
curl https://example.com/sms/receipts/88AB118E%20EB1B%20478C%2098CE%206C73ABA23F67 \
  -H 'Accept: application/json'
```

`GET /sms/receipts/{message_id}`

<h3 id="get-a-specific-delivery-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|Your message id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_string": "",
    "error_code": "errorcode",
    "error_text": "errortext",
    "message_id": "88AB118E-EB1B-478C-98CE-6C73ABA23F67",
    "message_type": "sms",
    "status_code": "Completed",
    "status_text": "statustext",
    "timestamp": "1451200622",
    "timestamp_send": "1450854013"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your receipt."
}
```

<h3 id="get-a-specific-delivery-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send an SMS

<a id="opIdSend an SMS"></a>

> Code samples

```bash
curl https://example.com/sms/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "custom_string": "this is a test",
        "from": "sendmobile",
        "schedule": 1436874701,
        "source": "php",
        "to": "+61411111111"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "custom_string": "this is a test",
        "from": "sendlist",
        "list_id": 428,
        "schedule": 1436876011,
        "source": "php"
      }
    ]
  }'
```

`POST /sms/send`

You can post **up to 1000 messages** with each API call.

> Body parameter

```json
{
  "messages": [
    {
      "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
      "custom_string": "this is a test",
      "from": "sendmobile",
      "schedule": 1436874701,
      "source": "php",
      "to": "+61411111111"
    },
    {
      "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
      "custom_string": "this is a test",
      "from": "sendlist",
      "list_id": 428,
      "schedule": 1436876011,
      "source": "php"
    }
  ]
}
```

<h3 id="send-an-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|Recipient country.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» from_email|body|string|false|An email address where the reply should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "carrier": "Telstra",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "direction": "out",
        "from": "sendmobile",
        "message_id": "BF7AD270-0DE2-418B-B606-71D527D9C1AE",
        "message_parts": 1,
        "message_price": 0.07,
        "schedule": 1436874701,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "user_id": 1
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "Telstra",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "direction": "out",
        "from": "sendlist",
        "message_id": "D0C273EE-816D-4DF2-8E9D-9D9C65F168F3",
        "message_parts": 1,
        "message_price": 0.07,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "user_id": 1
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "direction": "out",
        "from": "sendlist",
        "message_id": "A1845B61-C404-4793-8661-97890C19C8A2",
        "message_parts": 1,
        "message_price": 0.07,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783270696",
        "user_id": 1
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "direction": "out",
        "from": "sendlist",
        "message_id": "DB545FAA-7325-465F-A696-8BDBFA8C1E49",
        "message_parts": 1,
        "message_price": 0.07,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783275492",
        "user_id": 1
      }
    ],
    "queued_count": 4,
    "total_count": 4,
    "total_price": 0.28
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="send-an-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Cancel a Scheduled Message

<a id="opIdCancel a Scheduled Message"></a>

> Code samples

```bash
curl https://example.com/sms/307EF035/cancel \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /sms/{message_id}/cancel`

<h3 id="cancel-a-scheduled-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|B7CE432193CD-0753597B7293 (string, required) - The message ID you want to cancel.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Message 307EF035-B7CE-4321-93CD-0753597B7293 has been cancelled."
}
```

<h3 id="cancel-a-scheduled-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-sms-campaigns">SMS Campaigns</h1>

## Get list of SMS Campaigns

<a id="opIdGet list of SMS Campaigns"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns \
  -H 'Accept: application/json'
```

`GET /sms-campaigns`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444962803",
        "from": "+61353787447",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "This is my awesome campaign.",
        "schedule": "1444821615",
        "sms_campaign_id": 1,
        "source": null,
        "status": "Cancelled",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444962630",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 7,
        "source": null,
        "status": "Queued",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444893067",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 6,
        "source": null,
        "status": "Queued",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444891837",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 5,
        "source": null,
        "status": "Sent",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444888498",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 4,
        "source": null,
        "status": "Sent",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444882130",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 3,
        "source": null,
        "status": "Sent",
        "subaccount_id": 1,
        "user_id": 1
      },
      {
        "_total_count": 10,
        "body": "This is my new campaign message.",
        "custom_string": null,
        "date_added": "1444882068",
        "from": "+61353787448",
        "ip_address": "192.168.10.1",
        "list_id": 428,
        "name": "My Campaign 1",
        "schedule": "1444821615",
        "sms_campaign_id": 2,
        "source": null,
        "status": "Sent",
        "subaccount_id": 1,
        "user_id": 1
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 20,
    "prev_page_url": null,
    "to": 7,
    "total": 7
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your SMS campaigns."
}
```

<h3 id="get-list-of-sms-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price for SMS Campaign

<a id="opIdCalculate Price for SMS Campaign"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "(First Name), this is your new campaign message.",
    "from": "+61353787448",
    "list_id": 428,
    "name": "My Campaign 1"
  }'
```

`POST /sms-campaigns/price`

> Body parameter

```json
{
  "body": "(First Name), this is your new campaign message.",
  "from": "+61353787448",
  "list_id": 428,
  "name": "My Campaign 1"
}
```

<h3 id="calculate-price-for-sms-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your campaign message.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» list_id|body|number|true|Your list id.|
|» name|body|string|true|Your campaign name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "British Pounds",
      "currency_name_short": "GBP",
      "currency_prefix_c": "p",
      "currency_prefix_d": "£"
    },
    "data": {
      "body": "John, this is your new campaign message.",
      "from": "+61353787448",
      "schedule": 1444381346
    },
    "total_count": 1,
    "total_price": "0.035"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your price for your SMS Campaign."
}
```

<h3 id="calculate-price-for-sms-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Use Short URL

<a id="opIdUse Short URL"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "This is my new campaign message. Visit this url: smsg.us/xxxxx",
    "from": "+61353787448",
    "list_id": 428,
    "name": "My Campaign 1",
    "schedule": 1444821615,
    "url_to_shorten": "http://yourdomain.com/"
  }'
```

`POST /sms-campaigns/send`

This is functionally identical to the **POST /sms-campaigns/send** endpoint, other than adding the `smsg.us/xxxxx` string to the message body additional `url_to_shorten` parameter.

> Body parameter

```json
{
  "body": "This is my new campaign message. Visit this url: smsg.us/xxxxx",
  "from": "+61353787448",
  "list_id": 428,
  "name": "My Campaign 1",
  "schedule": 1444821615,
  "url_to_shorten": "http://yourdomain.com/"
}
```

<h3 id="use-short-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your campaign message.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» list_id|body|number|true|Your list id.|
|» name|body|string|true|Your campaign name.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» url_to_shorten|body|string|true|The URL you want to shorten (only required when using this feature). This must be only `http` or `https`.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is my new campaign message. Visit this url: smsg.us/xxxxx",
    "custom_string": null,
    "date_added": "1444962630",
    "from": "+61353787448",
    "list_id": 428,
    "name": "My Campaign 1",
    "schedule": "1444821615",
    "sms_campaign_id": 7,
    "source": null,
    "status": "Queued",
    "subaccount_id": 1,
    "url_to_shorten": "http://yourdomain.com/",
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your new campaign has been added."
}
```

<h3 id="use-short-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Link Tracking Export

<a id="opIdLink Tracking Export"></a>

> Code samples

```bash
curl 'https://example.com/sms-campaigns/1/link-export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /sms-campaigns/{campaign_id}/link-export?filename={filename}`

Compile all link tracking for the specified campaign into a CSV for download.

<h3 id="link-tracking-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|number|true|Your campaign id.|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/24C16065-FB6F-400A-B922-C814C6A32727?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="link-tracking-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Link Statistics

<a id="opIdLink Statistics"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/1/link-statistics \
  -H 'Accept: application/json'
```

`GET /sms-campaigns/{campaign_id}/link-statistics`

Get the breakdown of statistics for your campaign. Note that the returned values vary depending on your specific customers' interaction, so it's not safe to assume a value will always be specified.

<h3 id="link-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|number|true|Your campaign id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "browser": [
      {
        "count": 95,
        "label": "Chrome"
      },
      {
        "count": 3,
        "label": "Opera"
      },
      {
        "count": 10,
        "label": "Safari"
      }
    ],
    "country": [
      {
        "count": 15,
        "label": "Other"
      },
      {
        "count": 1,
        "label": "AF"
      },
      {
        "count": 2,
        "label": "AR"
      },
      {
        "count": 1,
        "label": "AU"
      },
      {
        "count": 2,
        "label": "BE"
      },
      {
        "count": 4,
        "label": "BR"
      },
      {
        "count": 3,
        "label": "CA"
      },
      {
        "count": 1,
        "label": "CH"
      },
      {
        "count": 11,
        "label": "CN"
      },
      {
        "count": 1,
        "label": "CZ"
      },
      {
        "count": 4,
        "label": "DE"
      },
      {
        "count": 1,
        "label": "DK"
      },
      {
        "count": 1,
        "label": "ES"
      },
      {
        "count": 2,
        "label": "FR"
      },
      {
        "count": 1,
        "label": "GB"
      },
      {
        "count": 3,
        "label": "IN"
      },
      {
        "count": 1,
        "label": "IR"
      },
      {
        "count": 5,
        "label": "JP"
      },
      {
        "count": 3,
        "label": "KR"
      },
      {
        "count": 1,
        "label": "MY"
      },
      {
        "count": 2,
        "label": "PK"
      },
      {
        "count": 1,
        "label": "PL"
      },
      {
        "count": 3,
        "label": "RU"
      },
      {
        "count": 1,
        "label": "SK"
      },
      {
        "count": 2,
        "label": "TW"
      },
      {
        "count": 1,
        "label": "UA"
      },
      {
        "count": 34,
        "label": "US"
      },
      {
        "count": 1,
        "label": "ZA"
      }
    ],
    "device": [
      {
        "count": 98,
        "label": "Desktop"
      },
      {
        "count": 10,
        "label": "Mobile"
      }
    ],
    "links": {
      "opened": 108,
      "unopened": 1
    },
    "os": [
      {
        "count": 10,
        "label": "IOS"
      },
      {
        "count": 98,
        "label": "OS X"
      }
    ]
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="link-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Link Tracking

<a id="opIdLink Tracking"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/1/link-tracking \
  -H 'Accept: application/json'
```

`GET /sms-campaigns/{campaign_id}/link-tracking`

This endpoint gives you a paginated overview of all the links in a particular campaign, and who has and hasn't visited them.

<h3 id="link-tracking-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|path|number|true|Your campaign id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "contact": {
          "contact_id": 1,
          "first_name": "John",
          "last_name": "Smith",
          "phone_number": "+61411111111"
        },
        "date_opened": null,
        "open_count": 0,
        "user_browser": null,
        "user_device": null,
        "user_geo_country": null,
        "user_geo_region": null,
        "user_os": null
      },
      {
        "contact": {
          "contact_id": 2,
          "first_name": "Jane",
          "last_name": "Doe",
          "phone_number": "+61422222222"
        },
        "date_opened": 1508130356,
        "open_count": 2,
        "user_browser": "Chrome",
        "user_device": "desktop",
        "user_geo_country": "US",
        "user_geo_region": "Illinois",
        "user_os": "OS X"
      },
      {
        "contact": {
          "contact_id": 3,
          "first_name": "Jill",
          "last_name": "Smith",
          "phone_number": "+61433333333"
        },
        "date_opened": 1508130333,
        "open_count": 1,
        "user_browser": "Safari",
        "user_device": "phone",
        "user_geo_country": "CA",
        "user_geo_region": "Newfoundland and Labrador",
        "user_os": "iOS"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": "https://rest.clicksend.com/v3/sms-campaigns/1/link-tracking?page=2",
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="link-tracking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get SMS Campaign

<a id="opIdGet SMS Campaign"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/1 \
  -H 'Accept: application/json'
```

`GET /sms-campaigns/{sms_campaign_id}`

<h3 id="get-sms-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sms_campaign_id|path|number|true|Your SMS campaign id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_total_count": 10,
    "body": "This is my new campaign message.",
    "custom_string": null,
    "date_added": "1444882068",
    "from": "+61353787448",
    "ip_address": "192.168.10.1",
    "list_id": 428,
    "name": "My Campaign 1",
    "schedule": "1444821615",
    "sms_campaign_id": 2,
    "source": null,
    "status": "Sent",
    "subaccount_id": 1,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your SMS Campaign."
}
```

<h3 id="get-sms-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update an SMS Campaign

<a id="opIdUpdate an SMS Campaign"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "body": "his is an awesome message.",
    "from": "+61353787447",
    "list_id": 428,
    "name": "Awesome campaign.",
    "schedule": 1444821615
  }'
```

`PUT /sms-campaigns/{sms_campaign_id}`

> Body parameter

```json
{
  "body": "his is an awesome message.",
  "from": "+61353787447",
  "list_id": 428,
  "name": "Awesome campaign.",
  "schedule": 1444821615
}
```

<h3 id="update-an-sms-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sms_campaign_id|path|number|true|Your SMS Campaign id.|
|body|body|object|false|none|
|» body|body|string|true|Your campaign message.|
|» from|body|string|false|Your sender id - [more info](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number).|
|» list_id|body|number|true|Your list id.|
|» name|body|string|true|Your campaign name.|
|» schedule|body|number|false|Leave blank for immediate delivery. Will replace existing schedule (even if left blank). Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is an awesome message.",
    "custom_string": null,
    "date_added": "1444962803",
    "from": "+61353787447",
    "ip_address": "192.168.10.1",
    "list_id": 428,
    "name": "Awesome campaign.",
    "schedule": "1444821615",
    "sms_campaign_id": 1,
    "source": null,
    "status": "Queued",
    "subaccount_id": 1,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your SMS Campaign has been updated."
}
```

<h3 id="update-an-sms-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel an SMS Campaign

<a id="opIdCancel an SMS Campaign"></a>

> Code samples

```bash
curl https://example.com/sms-campaigns/1/cancel \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /sms-campaigns/{sms_campaign_id}/cancel`

<h3 id="cancel-an-sms-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sms_campaign_id|path|number|true|Your SMS Campaign id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is an awesome message.",
    "custom_string": null,
    "date_added": "1444959876",
    "from": "+61353787447",
    "ip_address": "192.168.10.1",
    "list_id": 428,
    "name": "Awesome campaign.",
    "schedule": "1444821615",
    "sms_campaign_id": 1,
    "source": null,
    "status": "Cancelled",
    "subaccount_id": 1,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your SMS Campaign has been cancelled."
}
```

<h3 id="cancel-an-sms-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-sms-templates">SMS Templates</h1>

## List of Templates

<a id="opIdList of Templates"></a>

> Code samples

```bash
curl https://example.com/sms/templates \
  -H 'Accept: application/json'
```

`GET /sms/templates`

Get list of templates.

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "body": "This is a sample template.",
        "template_id": 1,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 2,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 3,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 4,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 5,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 6,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 7,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 8,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 9,
        "template_name": "My Awesome Template"
      },
      {
        "body": "This is a sample template.",
        "template_id": 10,
        "template_name": "My Awesome Template"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 10,
    "total": 10
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="list-of-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Template

<a id="opIdCreate a Template"></a>

> Code samples

```bash
curl https://example.com/sms/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "body": "This is a sample content: H7YI68B3yk for this template.",
    "template_name": "Template 501916"
  }'
```

`POST /sms/templates`

Create new template.

> Body parameter

```json
{
  "body": "This is a sample content: H7YI68B3yk for this template.",
  "template_name": "Template 501916"
}
```

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your template body.|
|» template_name|body|string|true|Your template name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is a sample content: H7YI68B3yk for this template.",
    "template_id": 25,
    "template_name": "Template 501916"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New template has been saved."
}
```

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Update a Template

<a id="opIdUpdate a Template"></a>

> Code samples

```bash
curl https://example.com/sms/templates/25 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "body": "This is a sample content: Sc0KNWgSMG for this template.",
    "template_name": "I am updated"
  }'
```

`PUT /sms/templates/{template_id}`

> Body parameter

```json
{
  "body": "This is a sample content: Sc0KNWgSMG for this template.",
  "template_name": "I am updated"
}
```

<h3 id="update-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|Your template id.|
|body|body|object|false|none|
|» body|body|string|true|Your template body.|
|» template_name|body|string|true|Your template name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "body": "This is a sample content: Sc0KNWgSMG for this template.",
    "template_id": 25,
    "template_name": "I am updated"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your template has been updated."
}
```

<h3 id="update-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete a Template

<a id="opIdDelete a Template"></a>

> Code samples

```bash
curl https://example.com/sms/templates/25 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /sms/templates/{template_id}`

<h3 id="delete-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|Your template id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your template has been deleted."
}
```

<h3 id="delete-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-statistics">Statistics</h1>

## Get SMS Statistics

<a id="opIdGet SMS Statistics"></a>

> Code samples

```bash
curl https://example.com/statistics/sms \
  -H 'Accept: application/json'
```

`GET /statistics/sms`

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "stat": [
      {
        "bounced": {
          "count": 0
        },
        "date": 1434412800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434499200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434585600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434672000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434758400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434844800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1434931200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435017600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435104000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435190400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435276800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435363200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435449600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435536000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435622400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435708800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435795200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435881600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1435968000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436054400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436140800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436227200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436313600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436400000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436486400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436572800,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436659200,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436745600,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436832000,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 49,
          "price": 3.43
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1436918400,
        "inbound": {
          "count": 0
        },
        "outbound": {
          "count": 83,
          "price": 5.81
        }
      }
    ],
    "total": {
      "bounced": {
        "count": 0
      },
      "inbound": {
        "count": 0
      },
      "outbound": {
        "count": 132,
        "price": 9.24
      }
    }
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-sms-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Voice Statistics

<a id="opIdGet Voice Statistics"></a>

> Code samples

```bash
curl https://example.com/statistics/voice \
  -H 'Accept: application/json'
```

`GET /statistics/voice`

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "stats": [
      {
        "bounced": {
          "count": 0
        },
        "date": 1441065600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441152000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441238400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441324800,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441411200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441497600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441584000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441670400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441756800,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441843200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1441929600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442016000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442102400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442188800,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442275200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442361600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442448000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442534400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442620800,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442707200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442793600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442880000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1442966400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443052800,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443139200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443225600,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443312000,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443398400,
        "outbound": {
          "count": 0,
          "price": 0
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443484800,
        "outbound": {
          "count": 4,
          "price": 0.6600252
        }
      },
      {
        "bounced": {
          "count": 0
        },
        "date": 1443571200,
        "outbound": {
          "count": 0,
          "price": 0
        }
      }
    ],
    "total": {
      "bounced": {
        "count": 0
      },
      "outbound": {
        "count": 4,
        "price": 0.6600252
      }
    }
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your statistics."
}
```

<h3 id="get-voice-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-subaccounts">Subaccounts</h1>

## Get all Subaccounts

<a id="opIdGet all Subaccounts"></a>

> Code samples

```bash
curl https://example.com/subaccounts \
  -H 'Accept: application/json'
```

`GET /subaccounts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "E72D09F6-AC80-0A5C-F7F0-1A244A377A5C",
        "api_username": "johndoe",
        "email": "john@doe.com",
        "first_name": "John",
        "last_name": "Doe",
        "notes": null,
        "phone_number": "+13523944199",
        "share_campaigns": 0,
        "subaccount_id": 1
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "B7825E96-6A67-1275-0F35-8DB8AC743B2C",
        "api_username": "name9Fb",
        "email": "testvT9@gmail.com",
        "first_name": "Firstname7JiPG",
        "last_name": "Lastname2olB1",
        "notes": null,
        "phone_number": "+19417516953",
        "share_campaigns": 0,
        "subaccount_id": 27
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "D09BA7BC-546A-C951-6D3D-DAE3FEE6D848",
        "api_username": "nameLXD",
        "email": "testIiq@gmail.com",
        "first_name": "FirstnameSA3tA",
        "last_name": "Lastname22Pam",
        "notes": null,
        "phone_number": "+19417519130",
        "share_campaigns": 0,
        "subaccount_id": 28
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "9415E584-794E-4F90-699D-7ECEF7290E51",
        "api_username": "nameh7m",
        "email": "testxQv.updated@gmail.com",
        "first_name": "Firstname5dgZw Updated",
        "last_name": "Lastname0voRd Updated",
        "notes": null,
        "phone_number": "+19417519640",
        "share_campaigns": 0,
        "subaccount_id": 29
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "6E1491FC-797E-3011-1274-595EAFDE06EE",
        "api_username": "name5XC",
        "email": "testaLj.updated@gmail.com",
        "first_name": "FirstnameZcMSS Updated",
        "last_name": "LastnameDLmEB Updated",
        "notes": null,
        "phone_number": "+19417514461",
        "share_campaigns": 0,
        "subaccount_id": 30
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "2C3B97DD-6C61-94BF-7886-9CA11DF550AF",
        "api_username": "franklinew5",
        "email": "frank@test.com",
        "first_name": "John",
        "last_name": "Doe",
        "notes": null,
        "phone_number": "+13108147982",
        "share_campaigns": 0,
        "subaccount_id": 47
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 1,
        "access_fax": 1,
        "access_mms": 1,
        "access_post": 1,
        "access_reporting": 1,
        "access_reseller": 1,
        "access_settings": 1,
        "access_sms": 1,
        "access_users": 1,
        "access_voice": 1,
        "api_key": "DE5F8C8F-E939-941B-C9E0-2BD542C3FFE3",
        "api_username": "franklinew6",
        "email": "frank@test.com",
        "first_name": "John",
        "last_name": "Doe",
        "notes": null,
        "phone_number": "+13108147982",
        "share_campaigns": 0,
        "subaccount_id": 48
      },
      {
        "access_billing": 1,
        "access_contacts": 1,
        "access_email": 0,
        "access_fax": 0,
        "access_mms": 0,
        "access_post": 0,
        "access_reporting": 1,
        "access_reseller": 0,
        "access_settings": 1,
        "access_sms": 0,
        "access_users": 1,
        "access_voice": 0,
        "api_key": "6279E8E9-8D02-72AE-9824-BF7C0C2E4FE7",
        "api_username": "franklinew7",
        "email": "frank@test.com",
        "first_name": "John",
        "last_name": "Doe",
        "notes": null,
        "phone_number": "+13108147982",
        "share_campaigns": 0,
        "subaccount_id": 49
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 8,
    "total": 8
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "SUCCESS"
}
```

<h3 id="get-all-subaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new subaccount

<a id="opIdCreate a new subaccount"></a>

> Code samples

```bash
curl https://example.com/subaccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "api_username": "nameP99",
    "email": "testvrq@gmail.com",
    "first_name": "FirstnameeGPqV",
    "last_name": "LastnamePvjJp",
    "password": "pass",
    "phone_number": "941-751-3278"
  }'
```

`POST /subaccounts`

> Body parameter

```json
{
  "api_username": "nameP99",
  "email": "testvrq@gmail.com",
  "first_name": "FirstnameeGPqV",
  "last_name": "LastnamePvjJp",
  "password": "pass",
  "phone_number": "941-751-3278"
}
```

<h3 id="create-a-new-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» access_billing|body|number|false|Your access billing flag value, must be 1 or 0.|
|» access_contacts|body|number|false|Your access contacts flag value, must be 1 or 0.|
|» access_reporting|body|number|false|Your access reporting flag value, must be 1 or 0.|
|» access_settings|body|number|false|Your access settings flag value, must be 1 or 0.|
|» access_users|body|number|false|Your access users flag value, must be 1 or 0.|
|» api_username|body|string|true|Your new api username.|
|» email|body|string|true|Your new email.|
|» first_name|body|string|true|Your firstname.|
|» last_name|body|string|true|Your lastname.|
|» password|body|string|true|Your new password.|
|» phone_number|body|string|true|Your phone number in E.164 format.|
|» share_campaigns|body|number|false|Your share campaigns flag value, must be 1 or 0.|

> Example responses

> 200 Response

```json
{
  "data": {
    "access_billing": 1,
    "access_contacts": 1,
    "access_email": 1,
    "access_fax": 1,
    "access_mms": 1,
    "access_post": 1,
    "access_reporting": 1,
    "access_reseller": 1,
    "access_settings": 1,
    "access_sms": 1,
    "access_users": 1,
    "access_voice": 1,
    "api_key": "367C506E-FBCA-1EDA-E8E0-1384F9F196D5",
    "api_username": "nameP99",
    "email": "testvrq@gmail.com",
    "first_name": "FirstnameeGPqV",
    "last_name": "LastnamePvjJp",
    "notes": null,
    "phone_number": "+619417513278",
    "share_campaigns": 0,
    "subaccount_id": 59
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "New account has been created."
}
```

<h3 id="create-a-new-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get a specific subaccount

<a id="opIdGet a specific subaccount"></a>

> Code samples

```bash
curl https://example.com/subaccounts/59 \
  -H 'Accept: application/json'
```

`GET /subaccounts/{subaccount_id}`

<h3 id="get-a-specific-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subaccount_id|path|string|true|The subaccount ID you want to access.|

> Example responses

> 200 Response

```json
{
  "data": {
    "access_billing": 1,
    "access_contacts": 1,
    "access_email": 1,
    "access_fax": 1,
    "access_mms": 1,
    "access_post": 1,
    "access_reporting": 1,
    "access_reseller": 1,
    "access_settings": 1,
    "access_sms": 1,
    "access_users": 1,
    "access_voice": 1,
    "api_key": "367C506E-FBCA-1EDA-E8E0-1384F9F196D5",
    "api_username": "nameP99",
    "email": "testvrq@gmail.com",
    "first_name": "FirstnameeGPqV",
    "last_name": "LastnamePvjJp",
    "notes": null,
    "phone_number": "+619417513278",
    "share_campaigns": 0,
    "subaccount_id": 59
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="get-a-specific-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific subaccount

<a id="opIdUpdate a specific subaccount"></a>

> Code samples

```bash
curl https://example.com/subaccounts/59 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "access_billing": 1,
    "access_contacts": 1,
    "access_email": 1,
    "access_fax": 1,
    "access_mms": 1,
    "access_post": 1,
    "access_reporting": 1,
    "access_reseller": 1,
    "access_settings": 1,
    "access_sms": 1,
    "access_users": 1,
    "access_voice": 1,
    "email": "testfP0.updated@gmail.com",
    "first_name": "FirstnameKvdRZUpdated",
    "last_name": "LastnameHUPYGUpdated",
    "notes": null,
    "password": "pass",
    "phone_number": "+19417519130",
    "share_campaigns": 0
  }'
```

`PUT /subaccounts/{subaccount_id}`

> Body parameter

```json
{
  "access_billing": 1,
  "access_contacts": 1,
  "access_email": 1,
  "access_fax": 1,
  "access_mms": 1,
  "access_post": 1,
  "access_reporting": 1,
  "access_reseller": 1,
  "access_settings": 1,
  "access_sms": 1,
  "access_users": 1,
  "access_voice": 1,
  "email": "testfP0.updated@gmail.com",
  "first_name": "FirstnameKvdRZUpdated",
  "last_name": "LastnameHUPYGUpdated",
  "notes": null,
  "password": "pass",
  "phone_number": "+19417519130",
  "share_campaigns": 0
}
```

<h3 id="update-a-specific-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subaccount_id|path|number|true|The subaccount ID you want to access.|
|body|body|object|false|none|
|» access_billing|body|number|false|Your access billing flag value, must be 1 or 0.|
|» access_contacts|body|number|false|Your access contacts flag value, must be 1 or 0.|
|» access_reporting|body|number|false|Your access reporting flag value, must be 1 or 0.|
|» access_settings|body|number|false|Your access settings flag value, must be 1 or 0.|
|» access_users|body|number|false|Your access users flag value, must be 1 or 0.|
|» email|body|string|false|Your new email.|
|» first_name|body|string|false|Your firstname.|
|» last_name|body|string|false|Your lastname.|
|» password|body|string|false|Your new password.|
|» phone_number|body|string|false|Your phone number in E.164 format.|
|» share_campaigns|body|number|false|Your share campaigns flag value, must be 1 or 0.|

> Example responses

> 200 Response

```json
{
  "data": {
    "access_billing": 1,
    "access_contacts": 1,
    "access_email": 1,
    "access_fax": 1,
    "access_mms": 1,
    "access_post": 1,
    "access_reporting": 1,
    "access_reseller": 1,
    "access_settings": 1,
    "access_sms": 1,
    "access_users": 1,
    "access_voice": 1,
    "api_key": "367C506E-FBCA-1EDA-E8E0-1384F9F196D5",
    "api_username": "nameP99",
    "email": "testfP0.updated@gmail.com",
    "first_name": "FirstnameKvdRZ Updated",
    "last_name": "LastnameHUPYG Updated",
    "notes": null,
    "phone_number": "+619417513065",
    "share_campaigns": 0,
    "subaccount_id": 59
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Subaccount #59 has been updated."
}
```

<h3 id="update-a-specific-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Delete a specific subaccount

<a id="opIdDelete a specific subaccount"></a>

> Code samples

```bash
curl https://example.com/subaccounts/59 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subaccounts/{subaccount_id}`

<h3 id="delete-a-specific-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subaccount_id|path|number|true|The subaccount ID you want to access.|

> Example responses

> 200 Response

```json
{
  "data": true,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Subaccount #59 has been deleted"
}
```

<h3 id="delete-a-specific-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate API Key

<a id="opIdRegenerate API Key"></a>

> Code samples

```bash
curl https://example.com/subaccounts/2837/regen-api-key \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /subaccounts/{subaccount_id}/regen-api-key`

<h3 id="regenerate-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subaccount_id|path|number|true|The ID of the subaccount to be accessed.|

> Example responses

> 200 Response

```json
{
  "data": {
    "api_key": "E72D09F6-AC80-0A5C-F7F0-1A244A377A5C"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your API Key has been regenerated."
}
```

<h3 id="regenerate-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-timezones">Timezones</h1>

## Get Timezones

<a id="opIdGet Timezones"></a>

> Code samples

```bash
curl https://example.com/timezones \
  -H 'Accept: application/json'
```

`GET /timezones`

Get supported list of timezones.

> Example responses

> 200 Response

```json
{
  "data": [
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers",
    "Africa/Asmara",
    "Africa/Bamako",
    "Africa/Bangui",
    "Africa/Banjul",
    "Africa/Bissau",
    "Africa/Blantyre",
    "Africa/Brazzaville",
    "Africa/Bujumbura",
    "Africa/Cairo",
    "Africa/Casablanca",
    "Africa/Ceuta",
    "Africa/Conakry",
    "Africa/Dakar",
    "Africa/Dar_es_Salaam",
    "Africa/Djibouti",
    "Africa/Douala",
    "Africa/El_Aaiun",
    "Africa/Freetown",
    "Africa/Gaborone",
    "Africa/Harare",
    "Africa/Johannesburg",
    "Africa/Juba",
    "Africa/Kampala",
    "Africa/Khartoum",
    "Africa/Kigali",
    "Africa/Kinshasa",
    "Africa/Lagos",
    "Africa/Libreville",
    "Africa/Lome",
    "Africa/Luanda",
    "Africa/Lubumbashi",
    "Africa/Lusaka",
    "Africa/Malabo",
    "Africa/Maputo",
    "Africa/Maseru",
    "Africa/Mbabane",
    "Africa/Mogadishu",
    "Africa/Monrovia",
    "Africa/Nairobi",
    "Africa/Ndjamena",
    "Africa/Niamey",
    "Africa/Nouakchott",
    "Africa/Ouagadougou",
    "Africa/Porto-Novo",
    "Africa/Sao_Tome",
    "Africa/Tripoli",
    "Africa/Tunis",
    "Africa/Windhoek",
    "America/Adak",
    "America/Anchorage",
    "America/Anguilla",
    "America/Antigua",
    "America/Araguaina",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Catamarca",
    "America/Argentina/Cordoba",
    "America/Argentina/Jujuy",
    "America/Argentina/La_Rioja",
    "America/Argentina/Mendoza",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Salta",
    "America/Argentina/San_Juan",
    "America/Argentina/San_Luis",
    "America/Argentina/Tucuman",
    "America/Argentina/Ushuaia",
    "America/Aruba",
    "America/Asuncion",
    "America/Atikokan",
    "America/Bahia",
    "America/Bahia_Banderas",
    "America/Barbados",
    "America/Belem",
    "America/Belize",
    "America/Blanc-Sablon",
    "America/Boa_Vista",
    "America/Bogota",
    "America/Boise",
    "America/Cambridge_Bay",
    "America/Campo_Grande",
    "America/Cancun",
    "America/Caracas",
    "America/Cayenne",
    "America/Cayman",
    "America/Chicago",
    "America/Chihuahua",
    "America/Costa_Rica",
    "America/Creston",
    "America/Cuiaba",
    "America/Curacao",
    "America/Danmarkshavn",
    "America/Dawson",
    "America/Dawson_Creek",
    "America/Denver",
    "America/Detroit",
    "America/Dominica",
    "America/Edmonton",
    "America/Eirunepe",
    "America/El_Salvador",
    "America/Fort_Nelson",
    "America/Fortaleza",
    "America/Glace_Bay",
    "America/Godthab",
    "America/Goose_Bay",
    "America/Grand_Turk",
    "America/Grenada",
    "America/Guadeloupe",
    "America/Guatemala",
    "America/Guayaquil",
    "America/Guyana",
    "America/Halifax",
    "America/Havana",
    "America/Hermosillo",
    "America/Indiana/Indianapolis",
    "America/Indiana/Knox",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Tell_City",
    "America/Indiana/Vevay",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Inuvik",
    "America/Iqaluit",
    "America/Jamaica",
    "America/Juneau",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Kralendijk",
    "America/La_Paz",
    "America/Lima",
    "America/Los_Angeles",
    "America/Lower_Princes",
    "America/Maceio",
    "America/Managua",
    "America/Manaus",
    "America/Marigot",
    "America/Martinique",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Menominee",
    "America/Merida",
    "America/Metlakatla",
    "America/Mexico_City",
    "America/Miquelon",
    "America/Moncton",
    "America/Monterrey",
    "America/Montevideo",
    "America/Montserrat",
    "America/Nassau",
    "America/New_York",
    "America/Nipigon",
    "America/Nome",
    "America/Noronha",
    "America/North_Dakota/Beulah",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/Ojinaga",
    "America/Panama",
    "America/Pangnirtung",
    "America/Paramaribo",
    "America/Phoenix",
    "America/Port-au-Prince",
    "America/Port_of_Spain",
    "America/Porto_Velho",
    "America/Puerto_Rico",
    "America/Rainy_River",
    "America/Rankin_Inlet",
    "America/Recife",
    "America/Regina",
    "America/Resolute",
    "America/Rio_Branco",
    "America/Santarem",
    "America/Santiago",
    "America/Santo_Domingo",
    "America/Sao_Paulo",
    "America/Scoresbysund",
    "America/Sitka",
    "America/St_Barthelemy",
    "America/St_Johns",
    "America/St_Kitts",
    "America/St_Lucia",
    "America/St_Thomas",
    "America/St_Vincent",
    "America/Swift_Current",
    "America/Tegucigalpa",
    "America/Thule",
    "America/Thunder_Bay",
    "America/Tijuana",
    "America/Toronto",
    "America/Tortola",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Winnipeg",
    "America/Yakutat",
    "America/Yellowknife",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Macquarie",
    "Antarctica/Mawson",
    "Antarctica/McMurdo",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "Arctic/Longyearbyen",
    "Asia/Aden",
    "Asia/Almaty",
    "Asia/Amman",
    "Asia/Anadyr",
    "Asia/Aqtau",
    "Asia/Aqtobe",
    "Asia/Ashgabat",
    "Asia/Baghdad",
    "Asia/Bahrain",
    "Asia/Baku",
    "Asia/Bangkok",
    "Asia/Barnaul",
    "Asia/Beirut",
    "Asia/Bishkek",
    "Asia/Brunei",
    "Asia/Chita",
    "Asia/Choibalsan",
    "Asia/Colombo",
    "Asia/Damascus",
    "Asia/Dhaka",
    "Asia/Dili",
    "Asia/Dubai",
    "Asia/Dushanbe",
    "Asia/Gaza",
    "Asia/Hebron",
    "Asia/Ho_Chi_Minh",
    "Asia/Hong_Kong",
    "Asia/Hovd",
    "Asia/Irkutsk",
    "Asia/Jakarta",
    "Asia/Jayapura",
    "Asia/Jerusalem",
    "Asia/Kabul",
    "Asia/Kamchatka",
    "Asia/Karachi",
    "Asia/Kathmandu",
    "Asia/Khandyga",
    "Asia/Kolkata",
    "Asia/Krasnoyarsk",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Asia/Kuwait",
    "Asia/Macau",
    "Asia/Magadan",
    "Asia/Makassar",
    "Asia/Manila",
    "Asia/Muscat",
    "Asia/Nicosia",
    "Asia/Novokuznetsk",
    "Asia/Novosibirsk",
    "Asia/Omsk",
    "Asia/Oral",
    "Asia/Phnom_Penh",
    "Asia/Pontianak",
    "Asia/Pyongyang",
    "Asia/Qatar",
    "Asia/Qyzylorda",
    "Asia/Rangoon",
    "Asia/Riyadh",
    "Asia/Sakhalin",
    "Asia/Samarkand",
    "Asia/Seoul",
    "Asia/Shanghai",
    "Asia/Singapore",
    "Asia/Srednekolymsk",
    "Asia/Taipei",
    "Asia/Tashkent",
    "Asia/Tbilisi",
    "Asia/Tehran",
    "Asia/Thimphu",
    "Asia/Tokyo",
    "Asia/Tomsk",
    "Asia/Ulaanbaatar",
    "Asia/Urumqi",
    "Asia/Ust-Nera",
    "Asia/Vientiane",
    "Asia/Vladivostok",
    "Asia/Yakutsk",
    "Asia/Yekaterinburg",
    "Asia/Yerevan",
    "Atlantic/Azores",
    "Atlantic/Bermuda",
    "Atlantic/Canary",
    "Atlantic/Cape_Verde",
    "Atlantic/Faroe",
    "Atlantic/Madeira",
    "Atlantic/Reykjavik",
    "Atlantic/South_Georgia",
    "Atlantic/St_Helena",
    "Atlantic/Stanley",
    "Australia/Adelaide",
    "Australia/Brisbane",
    "Australia/Broken_Hill",
    "Australia/Currie",
    "Australia/Darwin",
    "Australia/Eucla",
    "Australia/Hobart",
    "Australia/Lindeman",
    "Australia/Lord_Howe",
    "Australia/Melbourne",
    "Australia/Perth",
    "Australia/Sydney",
    "Europe/Amsterdam",
    "Europe/Andorra",
    "Europe/Astrakhan",
    "Europe/Athens",
    "Europe/Belgrade",
    "Europe/Berlin",
    "Europe/Bratislava",
    "Europe/Brussels",
    "Europe/Bucharest",
    "Europe/Budapest",
    "Europe/Busingen",
    "Europe/Chisinau",
    "Europe/Copenhagen",
    "Europe/Dublin",
    "Europe/Gibraltar",
    "Europe/Guernsey",
    "Europe/Helsinki",
    "Europe/Isle_of_Man",
    "Europe/Istanbul",
    "Europe/Jersey",
    "Europe/Kaliningrad",
    "Europe/Kiev",
    "Europe/Kirov",
    "Europe/Lisbon",
    "Europe/Ljubljana",
    "Europe/London",
    "Europe/Luxembourg",
    "Europe/Madrid",
    "Europe/Malta",
    "Europe/Mariehamn",
    "Europe/Minsk",
    "Europe/Monaco",
    "Europe/Moscow",
    "Europe/Oslo",
    "Europe/Paris",
    "Europe/Podgorica",
    "Europe/Prague",
    "Europe/Riga",
    "Europe/Rome",
    "Europe/Samara",
    "Europe/San_Marino",
    "Europe/Sarajevo",
    "Europe/Simferopol",
    "Europe/Skopje",
    "Europe/Sofia",
    "Europe/Stockholm",
    "Europe/Tallinn",
    "Europe/Tirane",
    "Europe/Ulyanovsk",
    "Europe/Uzhgorod",
    "Europe/Vaduz",
    "Europe/Vatican",
    "Europe/Vienna",
    "Europe/Vilnius",
    "Europe/Volgograd",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Zaporozhye",
    "Europe/Zurich",
    "Indian/Antananarivo",
    "Indian/Chagos",
    "Indian/Christmas",
    "Indian/Cocos",
    "Indian/Comoro",
    "Indian/Kerguelen",
    "Indian/Mahe",
    "Indian/Maldives",
    "Indian/Mauritius",
    "Indian/Mayotte",
    "Indian/Reunion",
    "Pacific/Apia",
    "Pacific/Auckland",
    "Pacific/Bougainville",
    "Pacific/Chatham",
    "Pacific/Chuuk",
    "Pacific/Easter",
    "Pacific/Efate",
    "Pacific/Enderbury",
    "Pacific/Fakaofo",
    "Pacific/Fiji",
    "Pacific/Funafuti",
    "Pacific/Galapagos",
    "Pacific/Gambier",
    "Pacific/Guadalcanal",
    "Pacific/Guam",
    "Pacific/Honolulu",
    "Pacific/Johnston",
    "Pacific/Kiritimati",
    "Pacific/Kosrae",
    "Pacific/Kwajalein",
    "Pacific/Majuro",
    "Pacific/Marquesas",
    "Pacific/Midway",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Norfolk",
    "Pacific/Noumea",
    "Pacific/Pago_Pago",
    "Pacific/Palau",
    "Pacific/Pitcairn",
    "Pacific/Pohnpei",
    "Pacific/Port_Moresby",
    "Pacific/Rarotonga",
    "Pacific/Saipan",
    "Pacific/Tahiti",
    "Pacific/Tarawa",
    "Pacific/Tongatapu",
    "Pacific/Wake",
    "Pacific/Wallis",
    "UTC"
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "List of timezones."
}
```

<h3 id="get-timezones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-transactional-email">Transactional Email</h1>

## Email History

<a id="opIdEmail History"></a>

> Code samples

```bash
curl https://example.com/email/history \
  -H 'Accept: application/json'
```

`GET /email/history`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "_attachments": [],
        "_currency": {
          "currency_name_long": "Philippine Peso",
          "currency_name_short": "PHP",
          "currency_prefix_c": "c",
          "currency_prefix_d": "?"
        },
        "bcc": null,
        "body": "This is a test content <img src=\"cid:7c65ccc4a134a809db09a839df9b75f055afcb62@click-send.com\" />",
        "body_plain_text": "This is a test content <img src=\"cid:7c65ccc4a134a809db09a839df9b75f055afcb62@click-send.com\" />",
        "cc": null,
        "custom_string": null,
        "date_added": "1469001354",
        "from_email_address_id": 2,
        "from_name": "test",
        "hard_bounce_count": 0,
        "message_id": "BCEBC89E-6993-4F13-B485-942440C62915",
        "price": "0.0000",
        "schedule": "1469001353",
        "soft_bounce_count": 0,
        "status": "Sent",
        "status_text": "Email added to outgoing mail queue for delivery",
        "subaccount_id": 1039,
        "subject": "test email transaction",
        "to": [
          {
            "email": "test1@user.com"
          }
        ],
        "user_id": 1201
      },
      {
        "_attachments": [
          {
            "_attachment_file_url": "https://rest.clicksend.com/files/B5664FA5-CEBD-40B0-BED1-5CFF0CA027BD.jpg",
            "content_disposition": "attachment",
            "content_id": "<cid:PHP-CID-5b3eb73f50a7cf7f423dc97070bb3b5280312308>",
            "content_type": "image/jpeg",
            "file_name": "test.jpg"
          }
        ],
        "_currency": {
          "currency_name_long": "Philippine Peso",
          "currency_name_short": "PHP",
          "currency_prefix_c": "c",
          "currency_prefix_d": "?"
        },
        "bcc": null,
        "body": "This is a test content",
        "body_plain_text": "This is a test content",
        "cc": null,
        "custom_string": null,
        "date_added": "1469002942",
        "from_email_address_id": 2,
        "from_name": "test",
        "hard_bounce_count": 0,
        "message_id": "988067DE-9318-448F-B225-7A5A695B23D1",
        "price": "0.0822",
        "schedule": "1469002942",
        "soft_bounce_count": 0,
        "status": "Queued:WaitSend",
        "status_text": null,
        "subaccount_id": 1039,
        "subject": "test email transaction",
        "to": [
          {
            "email": "test1@user.com"
          }
        ],
        "user_id": 1201
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 15,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="email-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export History

<a id="opIdExport History"></a>

> Code samples

```bash
curl 'https://example.com/email/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /email/history/export?filename={filename}`

<h3 id="export-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Email Price

<a id="opIdEmail Price"></a>

> Code samples

```bash
curl https://example.com/email/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attachments": [
      {
        "content": "<string>",
        "content_id": "<string>",
        "disposition": "<string>",
        "filename": "<string>",
        "type": "<string>"
      }
    ],
    "bcc": [
      {
        "email": "<string>",
        "name": "<string>"
      }
    ],
    "body": "<string>|required",
    "cc": [
      {
        "email": "<string>",
        "name": "<string>"
      }
    ],
    "from": {
      "email_address_id": "<integer>|required",
      "name": "<string>"
    },
    "schedule": "<integer>",
    "subject": "<string>|required",
    "to": [
      {
        "email": "<string>|required",
        "name": "<string>"
      }
    ]
  }'
```

`POST /email/price`

> Body parameter

```json
{
  "attachments": [
    {
      "content": "<string>",
      "content_id": "<string>",
      "disposition": "<string>",
      "filename": "<string>",
      "type": "<string>"
    }
  ],
  "bcc": [
    {
      "email": "<string>",
      "name": "<string>"
    }
  ],
  "body": "<string>|required",
  "cc": [
    {
      "email": "<string>",
      "name": "<string>"
    }
  ],
  "from": {
    "email_address_id": "<integer>|required",
    "name": "<string>"
  },
  "schedule": "<integer>",
  "subject": "<string>|required",
  "to": [
    {
      "email": "<string>|required",
      "name": "<string>"
    }
  ]
}
```

<h3 id="email-price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» attachments|body|[object]|true|The attachments of the email. See sample request for more details.|
|» bcc|body|[object]|false|The bcc of the email. See sample request for more details.|
|» body|body|string|true|The content of the email.|
|» cc|body|[object]|false|The cc of the email. See sample request for more details.|
|» from.email_address_id|body|number|true|The sender's email address id.|
|» from.name|body|string|false|The sender's name.|
|» subject|body|string|true|The subject of the email.|
|» to|body|[object]|true|The recipients of the email. See sample request for more details.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_currency": {
      "currency_name_long": "Australian Dollars",
      "currency_name_short": "AUD",
      "currency_prefix_c": "c",
      "currency_prefix_d": "$"
    },
    "bcc_array": null,
    "body": "This is a test <img src='cid:test'/>",
    "cc_array": [
      {
        "email": "user1@test.com",
        "name": "cc1"
      }
    ],
    "price": 0.002,
    "subject": "test subject",
    "to_array": [
      {
        "email": "test@user",
        "name": "user1"
      }
    ]
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here's the email price."
}
```

<h3 id="email-price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Test Delivery Receipt

> Code samples

```bash
curl https://example.com/email/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "http://yourdomain.com"
  }'
```

`POST /email/receipts`

> Body parameter

```json
{
  "url": "http://yourdomain.com"
}
```

<h3 id="add-a-test-delivery-receipt-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|Your URL if using the push option or 'poll' if using the pull option.|

> Example responses

> 200 Response

```json
{
  "data": {
    "email": "john_doe@user.com",
    "message_id": "73A80623-CFC3-4E7F-856A-880B289242D7@clicksend.com",
    "status": "Delivered",
    "timestamp": 1476870832
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipt has been added."
}
```

<h3 id="add-a-test-delivery-receipt-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Email Send

<a id="opIdEmail Send"></a>

> Code samples

```bash
curl https://example.com/email/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attachments": [
      {
        "content": "ZmlsZSBjb250ZW50cw==",
        "content_id": "text",
        "disposition": "attachment",
        "filename": "text.txt",
        "type": "text/plain"
      }
    ],
    "bcc": [
      {
        "email": "test3@clicksend.com",
        "name": "Joseph Doe"
      }
    ],
    "body": "Lorem ipsum",
    "cc": [
      {
        "email": "test2@clicksend.com",
        "name": "Jane Doe"
      }
    ],
    "from": {
      "email_address_id": 1,
      "name": "Joanne Doe"
    },
    "subject": "Test subject",
    "to": [
      {
        "email": "test@clicksend.com",
        "name": "John Doe"
      }
    ]
  }'
```

`POST /email/send`

> Body parameter

```json
{
  "attachments": [
    {
      "content": "ZmlsZSBjb250ZW50cw==",
      "content_id": "text",
      "disposition": "attachment",
      "filename": "text.txt",
      "type": "text/plain"
    }
  ],
  "bcc": [
    {
      "email": "test3@clicksend.com",
      "name": "Joseph Doe"
    }
  ],
  "body": "Lorem ipsum",
  "cc": [
    {
      "email": "test2@clicksend.com",
      "name": "Jane Doe"
    }
  ],
  "from": {
    "email_address_id": 1,
    "name": "Joanne Doe"
  },
  "subject": "Test subject",
  "to": [
    {
      "email": "test@clicksend.com",
      "name": "John Doe"
    }
  ]
}
```

<h3 id="email-send-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» attachments|body|[object]|false|The attachments of the email.|
|» bcc|body|[object]|false|The bcc of the email. Follows the same structure as `to`.|
|» body|body|string|true|The content of the email.|
|» cc|body|[object]|false|The cc of the email. Follows the same structure as `to`.|
|» from.email_address_id|body|number|true|The sender's email address ID.|
|» from.name|body|string|false|The sender's name.|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» to|body|[object]|true|The recipients of the email.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_attachments": [
      {
        "_attachment_file_url": "https://rest.clicksend.com/files/3C2284DC-7C37-47BA-8C95-3F12A4B987B7.txt",
        "content_disposition": "attachment",
        "content_id": "text",
        "content_type": "text/plain",
        "file_name": "text.txt"
      }
    ],
    "_currency": {
      "currency_name_long": "British Pounds",
      "currency_name_short": "GBP",
      "currency_prefix_c": "p",
      "currency_prefix_d": "£"
    },
    "bcc": [
      {
        "email": "test3@clicksend.com",
        "name": "Joseph Doe"
      }
    ],
    "body": "Lorem ipsum",
    "body_plain_text": "Lorem ipsum",
    "cc": [
      {
        "email": "test2@clicksend.com",
        "name": "Jane Doe"
      }
    ],
    "custom_string": null,
    "date_added": 1507018182,
    "from_email_address_id": 1,
    "from_name": "Joanne Doe",
    "hard_bounce_count": 0,
    "message_id": "21C632C1-3FCC-4EFF-8191-6079244F0142",
    "price": "0.0050",
    "schedule": 1507018182,
    "soft_bounce_count": 0,
    "status": "WaitApproval",
    "status_text": "Accepted for delivery",
    "subaccount_id": 1,
    "subject": "Test subject",
    "to": [
      {
        "email": "test@clicksend.com",
        "name": "John Doe"
      }
    ],
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Transactional email queued for delivery."
}
```

<h3 id="email-send-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-uploads">Uploads</h1>

## Upload a file

<a id="opIdUpload a file"></a>

> Code samples

```bash
curl 'https://example.com/uploads?convert={convert}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "content": "PGh0bWw+PGhlYWQ+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5ib2R5IHsgZm9udC1mYW1pbHk6J0FyaWFsJzsgfTwvc3R5bGU+PHRpdGxlPkhpPC90aXRsZT48L2hlYWQ+PGJvZHk+PGgxPkhlbGxvIHRoZXJlPC9oMT48aDI+SG93IGFyZSB5b3UgdG9kYXk/PC9oMj48L2JvZHk+PC9odG1sPg=="
  }'
```

`POST /uploads?convert={convert}`

> Body parameter

```json
{
  "content": "PGh0bWw+PGhlYWQ+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5ib2R5IHsgZm9udC1mYW1pbHk6J0FyaWFsJzsgfTwvc3R5bGU+PHRpdGxlPkhpPC90aXRsZT48L2hlYWQ+PGJvZHk+PGgxPkhlbGxvIHRoZXJlPC9oMT48aDI+SG93IGFyZSB5b3UgdG9kYXk/PC9oMj48L2JvZHk+PC9odG1sPg=="
}
```

<h3 id="upload-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» content|body|string|true|Your file contents encoded in `base64`.|
|» convert|body|string|true|Conversion type: `fax`, `mms`, `csv` or `post`|
|» *anyOf*|body|object|false|none|
|» convert|body|string|true|Conversion type: `fax`, `mms`, `csv` or `post`|
|» file|body|string|true|Your file.|

> Example responses

> 200 Response

```json
{
  "data": {
    "_url": "https://s3-ap-southeast-2.amazonaws.com/clicksend-api-downloads/_public/_examples/document.pdf",
    "date_added": 1449500640,
    "date_delete": 1450105440,
    "file_name": "161BFA93-3660-4B03-9BCB-7629166F2E91.pdf",
    "upload_id": 15,
    "user_id": 1
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Your file has been uploaded."
}
```

<h3 id="upload-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="clicksend-rest-api-v3-voice">Voice</h1>

Send TTS (Text-to-speech) voice calls

# How many messages can I send?

You can post **up to 1000 messages** with each API call. You can send to a mix of contacts and contact lists, as long as the total number of recipients is up to 1000. The response contains a status and details for each recipient.

# How many characters can I send in a message?

If a message is longer than 4 message parts, it will be truncated (see below). If a message contains any characters that aren't in the GSM 03.38 character set, the message type will be treated as unicode. (`https://en.wikipedia.org/wiki/GSM_03.38`)

## Standard English Characters:

| Number of Characters | Message Credits |
|---|---|
| 1 - 300 | 1 |
| 301 - 600 | 2 |
| 601 - 900 | 3 |
| 901 - 1200 | 4 |

## Non-GSM (Unicode) characters:

| Number of Characters | Message Credits |
|---|---|
|1 - 150 | 1 |
|151 - 300 | 2 |
|301 - 450 | 3 |
|451 - 600 | 4 |

# Allowed Languages

| Language, Locale | lang | voice |
|---|---|---|
| `English`, US | en-us | female (default) / male|
| `English`, Australia | en-au | female (default) / male|
| `English`, UK | en-gb | female (default) / male|
| `English`, India | en-in | female|
| `English`, Wales | en-gb-wls | female (default) / male|
| `Celtic`, Wales | cy-gb-wls | female (default) / male|
| `German`, Germany | de-de | female (default) / male|
| `Spanish`, Spain | es-es | female (default) / male|
| `Spanish`, US | es-us | female (default) / male|
| `French`, Canada | fr-ca | female|
| `French`, France | fr-fr | female (default) / male|
| `Icelandic`, Iceland | is-is | female (default) / male|
| `Italian`, Italy | it-it | female (default) / male|
| `Danish`, Denmark | da-dk | female (default) / male|
| `Dutch`, Netherlands | nl-nl | female (default) / male|
| `Norwegian`, Norway | nb-no | female|
| `Polish`, Poland | pl-pl | female (default) / male|
| `Portuguese`, Portugal | pt-pt | male|
| `Portuguese`, Brazil | pt-br | female (default) / male|
| `Romanian`, Romania | ro-ro | female|
| `Russian`, Russia | ru-ru | female (default) / male|
| `Swedish`, Sweden | sv-se | female|
| `Turkish`, Turkey | tr-tr | female|

# Tips

To introduce a small delay between words or digits you can use a comma (,).

For example:
`Please enter your activation code 9, 0, 9, 0, in the next 20 minutes.`

## Cancel all Voice Calls

<a id="opIdCancel all Voice Calls"></a>

> Code samples

```bash
curl https://example.com/voice/cancel-all \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /voice/cancel-all`

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 5
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "5 messages have been cancelled."
}
```

<h3 id="cancel-all-voice-calls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Export Voice History

<a id="opIdExport Voice History"></a>

> Code samples

```bash
curl 'https://example.com/voice/history/export?filename=export.csv' \
  -H 'Accept: application/json'
```

`GET /voice/history/export?filename={filename}`

<h3 id="export-voice-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Your export filename.|

> Example responses

> 200 Response

```json
{
  "data": {
    "url": "https://rest.clicksend.com/files/22D55AF9-6CF0-476D-A8B3-82A998FD2738?filename=export.csv"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Download your file here."
}
```

<h3 id="export-voice-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Voice History

<a id="opIdGet Voice History"></a>

> Code samples

```bash
curl 'https://example.com/voice/history?date_from=1443501617&date_to=1443501727' \
  -H 'Accept: application/json'
```

`GET /voice/history?date_from={date_from}&date_to={date_to}`

<h3 id="get-voice-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_from|path|string|true|Timestamp (from) used to show records by date.|
|date_to|path|string|true|Timestamp (to) used to show recrods by date.|

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "body": "this is a test.",
        "carrier": "",
        "country": "US",
        "custom_string": "mystring",
        "date_added": 1443501617,
        "digits": null,
        "from": "+19403944918",
        "lang": "en-us",
        "list_id": null,
        "machine_detected": 0,
        "message_id": "D6456F8A-9DF9-46EC-8014-BFE87860F65C",
        "message_parts": "1.00",
        "message_price": "0.17",
        "require_input": 0,
        "schedule": "1538672470",
        "status": "WaitApproval",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+15184811537",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "this is a test.",
        "carrier": "",
        "country": "US",
        "custom_string": "mystring",
        "date_added": 1443501727,
        "digits": null,
        "from": "+19403944918",
        "lang": "en-us",
        "list_id": null,
        "machine_detected": 0,
        "message_id": "25304958-15F2-41D9-8716-CF1F28EF506B",
        "message_parts": "1.00",
        "message_price": "0.17",
        "require_input": 0,
        "schedule": "1538672470",
        "status": "WaitApproval",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+15184811537",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "this is a test.",
        "carrier": "",
        "country": "US",
        "custom_string": "mystring",
        "date_added": 1443501727,
        "digits": null,
        "from": "+19403944918",
        "lang": "en-us",
        "list_id": null,
        "machine_detected": 0,
        "message_id": "0B474459-B75F-4180-9567-7ECA3FC56BD7",
        "message_parts": "1.00",
        "message_price": "0.17",
        "require_input": 0,
        "schedule": "1538672470",
        "status": "WaitApproval",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+15184811538",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "this is a test.",
        "carrier": "",
        "country": "US",
        "custom_string": "mystring",
        "date_added": 1443501727,
        "digits": null,
        "from": "+19403944918",
        "lang": "en-us",
        "list_id": null,
        "machine_detected": 0,
        "message_id": "A991556C-D4A5-47D5-A5E5-C9D251C8743A",
        "message_parts": "1.00",
        "message_price": "0.17",
        "require_input": 0,
        "schedule": "1538672470",
        "status": "WaitApproval",
        "status_code": null,
        "status_text": null,
        "subaccount_id": 1,
        "to": "+15184811539",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 4,
    "total": 4
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your history."
}
```

<h3 id="get-voice-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Voice Languages

<a id="opIdVoice Languages"></a>

> Code samples

```bash
curl https://example.com/voice/lang \
  -H 'Accept: application/json'
```

`GET /voice/lang`

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "code": "en-us",
      "country": "English, US",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "en-au",
      "country": "English, Australia",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "en-gb",
      "country": "English, UK",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "en-in",
      "country": "English, India",
      "gender": "female"
    },
    {
      "code": "de-de",
      "country": "German, Germany",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "es-es",
      "country": "Spanish, Spain",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "es-us",
      "country": "Spanish, US",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "fr-ca",
      "country": "French, Canada",
      "gender": "female"
    },
    {
      "code": "fr-fr",
      "country": "French, France",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "is-is",
      "country": "Icelandic, Iceland",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "it-it",
      "country": "Italian, Italy",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "nl-nl",
      "country": "Dutch, Netherlands",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "pl-pl",
      "country": "Polish-Poland",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "pt-pt",
      "country": "Portuguese, Portugal",
      "gender": "male"
    },
    {
      "code": "pt-br",
      "country": "Portuguese, Brazil",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "ro-ro",
      "country": "Romanian, Romania",
      "gender": "female"
    },
    {
      "code": "ru-ru",
      "country": "Russian, Russia",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "sv-se",
      "country": "Swedish, Sweden",
      "gender": "female"
    },
    {
      "code": "tr-tr",
      "country": "Turkish, Turkey",
      "gender": "female"
    },
    {
      "code": "en-gb-wls",
      "country": "English, Wales",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "cy-gb-wls",
      "country": "Celtic, Wales",
      "gender": [
        "female",
        "male"
      ]
    },
    {
      "code": "nb-no",
      "country": "Norwegian, Norway",
      "gender": "female"
    },
    {
      "code": "da-dk",
      "country": "Danish, Denmark",
      "gender": [
        "female",
        "male"
      ]
    }
  ],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are the possible languages."
}
```

<h3 id="voice-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate Price

> Code samples

```bash
curl https://example.com/voice/price \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "custom_string": "this is a test",
        "lang": "en-au",
        "schedule": 1436874701,
        "source": "php",
        "to": "+61411111111",
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "custom_string": "this is a test",
        "lang": "en-au",
        "list_id": 428,
        "require_input": 1,
        "schedule": 1436876011,
        "source": "php",
        "voice": "female"
      }
    ]
  }'
```

`POST /voice/price`

> Body parameter

```json
{
  "messages": [
    {
      "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
      "custom_string": "this is a test",
      "lang": "en-au",
      "schedule": 1436874701,
      "source": "php",
      "to": "+61411111111",
      "voice": "female"
    },
    {
      "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
      "custom_string": "this is a test",
      "lang": "en-au",
      "list_id": 428,
      "require_input": 1,
      "schedule": 1436876011,
      "source": "php",
      "voice": "female"
    }
  ]
}
```

<h3 id="calculate-price-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|The country of the recipient.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» lang|body|string|false|au (string, required) - See section on available languages.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'.|
|» require_input|body|number|false|Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off)|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|
|» voice|body|string|true|Either 'female' or 'male'.|

> Example responses

> 200 Response

```json
{
  "data": {
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "BF7AD270-0DE2-418B-B606-71D527D9C1AE",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 0,
        "schedule": 1436874701,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "D0C273EE-816D-4DF2-8E9D-9D9C65F168F3",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 1,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "A1845B61-C404-4793-8661-97890C19C8A2",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 1,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783270696",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "DB545FAA-7325-465F-A696-8BDBFA8C1E49",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 1,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783275492",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      }
    ],
    "queued_count": 4,
    "total_count": 4,
    "total_price": 0.28
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="calculate-price-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Get Voice receipts

<a id="opIdGet Voice receipts"></a>

> Code samples

```bash
curl https://example.com/voice/receipts \
  -H 'Accept: application/json'
```

`GET /voice/receipts`

> Example responses

> 200 Response

```json
{
  "data": {
    "current_page": 1,
    "data": [
      {
        "custom_string": null,
        "digits": "2",
        "error_code": null,
        "error_text": null,
        "message_id": "31BC271B-1E0C-45F6-9E7E-97186C46BB82",
        "message_type": "voice",
        "status_code": "201",
        "status_text": "Success: Message received on handset.",
        "timestamp": "1442381791",
        "timestamp_send": "1442381791"
      },
      {
        "custom_string": null,
        "digits": "5",
        "error_code": null,
        "error_text": null,
        "message_id": "23C8ADA3-FD8B-420B-801A-F829BB87AC6F",
        "message_type": "voice",
        "status_code": "201",
        "status_text": "Success: Message received on handset.",
        "timestamp": "1442381829",
        "timestamp_send": "1442381829"
      }
    ],
    "from": 1,
    "last_page": 1,
    "next_page_url": null,
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your delivery receipts."
}
```

<h3 id="get-voice-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add a Test Delivery Receipt

> Code samples

```bash
curl https://example.com/voice/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "url": "http://yourdomain.com"
  }'
```

`POST /voice/receipts`

> Body parameter

```json
{
  "url": "http://yourdomain.com"
}
```

<h3 id="add-a-test-delivery-receipt-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|Your URL if using the push option or 'poll' if using the pull option.|

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_string": null,
    "digits": "2",
    "error_code": null,
    "error_text": null,
    "message_id": "CEA5E06A-F4BF-4EC6-8315-B25087352DFA",
    "message_type": "voice",
    "status_code": "201",
    "status_text": "Success: Message received on handset.",
    "subaccount_id": 1746,
    "timestamp": "1489730505",
    "timestamp_send": "1489730505"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Test receipt has been added."
}
```

<h3 id="add-a-test-delivery-receipt-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Marked Voice Receipts as Read

<a id="opIdMarked Voice Receipts as Read"></a>

> Code samples

```bash
curl 'https://example.com/voice/receipts-read?date_before=1461897483' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /voice/receipts-read?date_before={date_before}`

<h3 id="marked-voice-receipts-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_before|path|number|true|An optional [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp) - mark all as read before this timestamp. If not given, all receipts will be marked as read.|

> Example responses

> 200 Response

```json
{
  "data": null,
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Receipts have been marked as read."
}
```

<h3 id="marked-voice-receipts-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific Voice Receipt

<a id="opIdGet Specific Voice Receipt"></a>

> Code samples

```bash
curl https://example.com/voice/receipts/28DD2718 \
  -H 'Accept: application/json'
```

`GET /voice/receipts/{message_id}`

<h3 id="get-specific-voice-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|3055-45F1-9B79-F2C43509FD16 (string, required) - The voice receipt message id.|

> Example responses

> 200 Response

```json
{
  "data": {
    "custom_string": "custom string test",
    "digits": "6",
    "error_code": "",
    "error_text": "",
    "message_id": "1FCFEBBF-90F5-4198-AEBD-5DAEDBA3D7B1",
    "message_type": "voice",
    "status_code": "Sent",
    "status_text": "Sent",
    "subaccount_id": 1039,
    "timestamp": "1461658202",
    "timestamp_send": "1461658202"
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here is your result."
}
```

<h3 id="get-specific-voice-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send a Voice Call

<a id="opIdSend a Voice Call"></a>

> Code samples

```bash
curl https://example.com/voice/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "custom_string": "this is a test",
        "lang": "en-au",
        "machine_detection": 1,
        "require_input": 1,
        "schedule": 1436874701,
        "source": "php",
        "to": "+61411111111",
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "custom_string": "this is a test",
        "lang": "en-au",
        "list_id": 428,
        "schedule": 1436876011,
        "source": "php",
        "voice": "female"
      }
    ]
  }'
```

`POST /voice/send`

You can post **up to 1000 messages** with each API call.

We support some SSML tags allowing custom breaks or pauses to be entered, and the readout rate to be altered. [More info](https://help.clicksend.com/voice/how-to-adjust-tts-voice-calls).

> Body parameter

```json
{
  "messages": [
    {
      "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
      "custom_string": "this is a test",
      "lang": "en-au",
      "machine_detection": 1,
      "require_input": 1,
      "schedule": 1436874701,
      "source": "php",
      "to": "+61411111111",
      "voice": "female"
    },
    {
      "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
      "custom_string": "this is a test",
      "lang": "en-au",
      "list_id": 428,
      "schedule": 1436876011,
      "source": "php",
      "voice": "female"
    }
  ]
}
```

<h3 id="send-a-voice-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Your message.|
|» country|body|string|false|The country of the recipient.|
|» custom_string|body|string|false|Your reference. Will be passed back with all replies and delivery reports.|
|» lang|body|string|false|au (string, required) - See section on available languages.|
|» list_id|body|number|false|Your list ID if sending to a whole list. Can be used instead of 'to'. Will override 'to' if both are used.|
|» machine_detection|body|number|false|Whether to attempt to detect an answering machine or voicemail service and leave a message (1 for on, 0 [default] for off)|
|» require_input|body|number|false|Whether you want to receive a keypress from the call recipient (1 for on, 0 [default] for off)|
|» schedule|body|number|false|Leave blank for immediate delivery. Your schedule time as a [unix timestamp](http://help.clicksend.com/what-is-a-unix-timestamp).|
|» source|body|string|false|Your method of sending e.g. 'wordpress', 'php', 'c#'.|
|» to|body|string|true|Recipient number in E.164 format or local format ([more info](https://help.clicksend.com/SMS/what-format-does-the-recipient-phone-number-need-to-be-in)).|
|» voice|body|string|true|Either 'female' or 'male'.|

> Example responses

> 200 Response

```json
{
  "data": {
    "currency": {
      "currency_name_long": "US Dollars",
      "currency_name_short": "USD",
      "currency_prefix_c": "¢",
      "currency_prefix_d": "$"
    },
    "messages": [
      {
        "body": "Jelly liquorice marshmallow candy carrot cake 4Eyffjs1vL.",
        "carrier": "Telstra",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "BF7AD270-0DE2-418B-B606-71D527D9C1AE",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 1,
        "schedule": 1436874701,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "Telstra",
        "country": "AU",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "D0C273EE-816D-4DF2-8E9D-9D9C65F168F3",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 0,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+61411111111",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "A1845B61-C404-4793-8661-97890C19C8A2",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 0,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783270696",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      },
      {
        "body": "Chocolate bar icing icing oat cake carrot cake jelly cotton MWEvciEPIr.",
        "carrier": "",
        "country": "US",
        "custom_string": "this is a test",
        "date": 1436871253,
        "from": null,
        "lang": "en-au",
        "machine_detection": 0,
        "message_id": "DB545FAA-7325-465F-A696-8BDBFA8C1E49",
        "message_parts": 1,
        "message_price": 0.07,
        "require_input": 0,
        "schedule": 1436876011,
        "status": "SUCCESS",
        "subaccount_id": 1,
        "to": "+16783275492",
        "to_type": "mobile",
        "user_id": 1,
        "voice": "female"
      }
    ],
    "queued_count": 4,
    "total_count": 4,
    "total_price": 0.28
  },
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Here are your data."
}
```

<h3 id="send-a-voice-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic
</aside>

## Cancel a Specific Voice Call

<a id="opIdCancel a Specific Voice Call"></a>

> Code samples

```bash
curl https://example.com/voice/7B5BFC19%2006B7%2049C1%208DCDFB011600E12B/cancel \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /voice/{message_id}/cancel`

<h3 id="cancel-a-specific-voice-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|string|true|Your voice message id.|

> Example responses

> 200 Response

```json
{
  "data": [],
  "http_code": 200,
  "response_code": "SUCCESS",
  "response_msg": "Voice have been cancelled."
}
```

<h3 id="cancel-a-specific-voice-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Acceptable_Import_Fields">Acceptable_Import_Fields</h2>
<!-- backwards compatibility -->
<a id="schemaacceptable_import_fields"></a>
<a id="schema_Acceptable_Import_Fields"></a>
<a id="tocSacceptable_import_fields"></a>
<a id="tocsacceptable_import_fields"></a>

```json
null
```

<h2 id="tocS_Account_Activation">Account_Activation</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_activation"></a>
<a id="schema_Account_Activation"></a>
<a id="tocSaccount_activation"></a>
<a id="tocsaccount_activation"></a>

```json
null
```

<h2 id="tocS_Account_Collection">Account_Collection</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_collection"></a>
<a id="schema_Account_Collection"></a>
<a id="tocSaccount_collection"></a>
<a id="tocsaccount_collection"></a>

```json
null
```

<h2 id="tocS_Allowed_From_Email_Addresses">Allowed_From_Email_Addresses</h2>
<!-- backwards compatibility -->
<a id="schemaallowed_from_email_addresses"></a>
<a id="schema_Allowed_From_Email_Addresses"></a>
<a id="tocSallowed_from_email_addresses"></a>
<a id="tocsallowed_from_email_addresses"></a>

```json
null
```

<h2 id="tocS_Buy_dedicated_number">Buy_dedicated_number</h2>
<!-- backwards compatibility -->
<a id="schemabuy_dedicated_number"></a>
<a id="schema_Buy_dedicated_number"></a>
<a id="tocSbuy_dedicated_number"></a>
<a id="tocsbuy_dedicated_number"></a>

```json
null
```

<h2 id="tocS_CSV_Import_File_Preview">CSV_Import_File_Preview</h2>
<!-- backwards compatibility -->
<a id="schemacsv_import_file_preview"></a>
<a id="schema_CSV_Import_File_Preview"></a>
<a id="tocScsv_import_file_preview"></a>
<a id="tocscsv_import_file_preview"></a>

```json
null
```

<h2 id="tocS_Calculate_Price">Calculate_Price</h2>
<!-- backwards compatibility -->
<a id="schemacalculate_price"></a>
<a id="schema_Calculate_Price"></a>
<a id="tocScalculate_price"></a>
<a id="tocscalculate_price"></a>

```json
null
```

<h2 id="tocS_Calculate_Price_for_SMS_Campaign">Calculate_Price_for_SMS_Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacalculate_price_for_sms_campaign"></a>
<a id="schema_Calculate_Price_for_SMS_Campaign"></a>
<a id="tocScalculate_price_for_sms_campaign"></a>
<a id="tocscalculate_price_for_sms_campaign"></a>

```json
null
```

<h2 id="tocS_Calculate_Pricing">Calculate_Pricing</h2>
<!-- backwards compatibility -->
<a id="schemacalculate_pricing"></a>
<a id="schema_Calculate_Pricing"></a>
<a id="tocScalculate_pricing"></a>
<a id="tocscalculate_pricing"></a>

```json
null
```

<h2 id="tocS_Cancel_Scheduled_Messages">Cancel_Scheduled_Messages</h2>
<!-- backwards compatibility -->
<a id="schemacancel_scheduled_messages"></a>
<a id="schema_Cancel_Scheduled_Messages"></a>
<a id="tocScancel_scheduled_messages"></a>
<a id="tocscancel_scheduled_messages"></a>

```json
null
```

<h2 id="tocS_Cancel_Voice_Calls">Cancel_Voice_Calls</h2>
<!-- backwards compatibility -->
<a id="schemacancel_voice_calls"></a>
<a id="schema_Cancel_Voice_Calls"></a>
<a id="tocScancel_voice_calls"></a>
<a id="tocscancel_voice_calls"></a>

```json
null
```

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
null
```

<h2 id="tocS_Contact_Collection">Contact_Collection</h2>
<!-- backwards compatibility -->
<a id="schemacontact_collection"></a>
<a id="schema_Contact_Collection"></a>
<a id="tocScontact_collection"></a>
<a id="tocscontact_collection"></a>

```json
null
```

<h2 id="tocS_Contact_List">Contact_List</h2>
<!-- backwards compatibility -->
<a id="schemacontact_list"></a>
<a id="schema_Contact_List"></a>
<a id="tocScontact_list"></a>
<a id="tocscontact_list"></a>

```json
null
```

<h2 id="tocS_Contact_List_Collection">Contact_List_Collection</h2>
<!-- backwards compatibility -->
<a id="schemacontact_list_collection"></a>
<a id="schema_Contact_List_Collection"></a>
<a id="tocScontact_list_collection"></a>
<a id="tocscontact_list_collection"></a>

```json
null
```

<h2 id="tocS_Contact_Suggestions">Contact_Suggestions</h2>
<!-- backwards compatibility -->
<a id="schemacontact_suggestions"></a>
<a id="schema_Contact_Suggestions"></a>
<a id="tocScontact_suggestions"></a>
<a id="tocscontact_suggestions"></a>

```json
null
```

<h2 id="tocS_Country_Collection">Country_Collection</h2>
<!-- backwards compatibility -->
<a id="schemacountry_collection"></a>
<a id="schema_Country_Collection"></a>
<a id="tocScountry_collection"></a>
<a id="tocscountry_collection"></a>

```json
null
```

<h2 id="tocS_Create_SMS_Campaign">Create_SMS_Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacreate_sms_campaign"></a>
<a id="schema_Create_SMS_Campaign"></a>
<a id="tocScreate_sms_campaign"></a>
<a id="tocscreate_sms_campaign"></a>

```json
null
```

<h2 id="tocS_Credit_Card_Info">Credit_Card_Info</h2>
<!-- backwards compatibility -->
<a id="schemacredit_card_info"></a>
<a id="schema_Credit_Card_Info"></a>
<a id="tocScredit_card_info"></a>
<a id="tocscredit_card_info"></a>

```json
null
```

<h2 id="tocS_Delivery_Issues">Delivery_Issues</h2>
<!-- backwards compatibility -->
<a id="schemadelivery_issues"></a>
<a id="schema_Delivery_Issues"></a>
<a id="tocSdelivery_issues"></a>
<a id="tocsdelivery_issues"></a>

```json
null
```

<h2 id="tocS_Delivery_Receipts">Delivery_Receipts</h2>
<!-- backwards compatibility -->
<a id="schemadelivery_receipts"></a>
<a id="schema_Delivery_Receipts"></a>
<a id="tocSdelivery_receipts"></a>
<a id="tocsdelivery_receipts"></a>

```json
null
```

<h2 id="tocS_Detect_Address">Detect_Address</h2>
<!-- backwards compatibility -->
<a id="schemadetect_address"></a>
<a id="schema_Detect_Address"></a>
<a id="tocSdetect_address"></a>
<a id="tocsdetect_address"></a>

```json
null
```

<h2 id="tocS_Direct_Mail_Campaign">Direct_Mail_Campaign</h2>
<!-- backwards compatibility -->
<a id="schemadirect_mail_campaign"></a>
<a id="schema_Direct_Mail_Campaign"></a>
<a id="tocSdirect_mail_campaign"></a>
<a id="tocsdirect_mail_campaign"></a>

```json
null
```

<h2 id="tocS_Email-to-SMS_Allowed_Address">Email-to-SMS_Allowed_Address</h2>
<!-- backwards compatibility -->
<a id="schemaemail-to-sms_allowed_address"></a>
<a id="schema_Email-to-SMS_Allowed_Address"></a>
<a id="tocSemail-to-sms_allowed_address"></a>
<a id="tocsemail-to-sms_allowed_address"></a>

```json
null
```

<h2 id="tocS_Email-to-SMS_Allowed_Address_-_Object">Email-to-SMS_Allowed_Address_-_Object</h2>
<!-- backwards compatibility -->
<a id="schemaemail-to-sms_allowed_address_-_object"></a>
<a id="schema_Email-to-SMS_Allowed_Address_-_Object"></a>
<a id="tocSemail-to-sms_allowed_address_-_object"></a>
<a id="tocsemail-to-sms_allowed_address_-_object"></a>

```json
null
```

<h2 id="tocS_Email_Campaigns">Email_Campaigns</h2>
<!-- backwards compatibility -->
<a id="schemaemail_campaigns"></a>
<a id="schema_Email_Campaigns"></a>
<a id="tocSemail_campaigns"></a>
<a id="tocsemail_campaigns"></a>

```json
null
```

<h2 id="tocS_Email_Delivery_Receipt_Rules">Email_Delivery_Receipt_Rules</h2>
<!-- backwards compatibility -->
<a id="schemaemail_delivery_receipt_rules"></a>
<a id="schema_Email_Delivery_Receipt_Rules"></a>
<a id="tocSemail_delivery_receipt_rules"></a>
<a id="tocsemail_delivery_receipt_rules"></a>

```json
null
```

<h2 id="tocS_Existing_SMS_Campaigns">Existing_SMS_Campaigns</h2>
<!-- backwards compatibility -->
<a id="schemaexisting_sms_campaigns"></a>
<a id="schema_Existing_SMS_Campaigns"></a>
<a id="tocSexisting_sms_campaigns"></a>
<a id="tocsexisting_sms_campaigns"></a>

```json
null
```

<h2 id="tocS_Export_Contacts">Export_Contacts</h2>
<!-- backwards compatibility -->
<a id="schemaexport_contacts"></a>
<a id="schema_Export_Contacts"></a>
<a id="tocSexport_contacts"></a>
<a id="tocsexport_contacts"></a>

```json
null
```

<h2 id="tocS_Export_Post_Letter_History">Export_Post_Letter_History</h2>
<!-- backwards compatibility -->
<a id="schemaexport_post_letter_history"></a>
<a id="schema_Export_Post_Letter_History"></a>
<a id="tocSexport_post_letter_history"></a>
<a id="tocsexport_post_letter_history"></a>

```json
null
```

<h2 id="tocS_Export_Postcard_History">Export_Postcard_History</h2>
<!-- backwards compatibility -->
<a id="schemaexport_postcard_history"></a>
<a id="schema_Export_Postcard_History"></a>
<a id="tocSexport_postcard_history"></a>
<a id="tocsexport_postcard_history"></a>

```json
null
```

<h2 id="tocS_Fax_Delivery_Receipt_Rules">Fax_Delivery_Receipt_Rules</h2>
<!-- backwards compatibility -->
<a id="schemafax_delivery_receipt_rules"></a>
<a id="schema_Fax_Delivery_Receipt_Rules"></a>
<a id="tocSfax_delivery_receipt_rules"></a>
<a id="tocsfax_delivery_receipt_rules"></a>

```json
null
```

<h2 id="tocS_Fax_History">Fax_History</h2>
<!-- backwards compatibility -->
<a id="schemafax_history"></a>
<a id="schema_Fax_History"></a>
<a id="tocSfax_history"></a>
<a id="tocsfax_history"></a>

```json
null
```

<h2 id="tocS_Forgot_Password">Forgot_Password</h2>
<!-- backwards compatibility -->
<a id="schemaforgot_password"></a>
<a id="schema_Forgot_Password"></a>
<a id="tocSforgot_password"></a>
<a id="tocsforgot_password"></a>

```json
null
```

<h2 id="tocS_Forgot_Username">Forgot_Username</h2>
<!-- backwards compatibility -->
<a id="schemaforgot_username"></a>
<a id="schema_Forgot_Username"></a>
<a id="tocSforgot_username"></a>
<a id="tocsforgot_username"></a>

```json
null
```

<h2 id="tocS_Get_Country_Pricing">Get_Country_Pricing</h2>
<!-- backwards compatibility -->
<a id="schemaget_country_pricing"></a>
<a id="schema_Get_Country_Pricing"></a>
<a id="tocSget_country_pricing"></a>
<a id="tocsget_country_pricing"></a>

```json
null
```

<h2 id="tocS_Get_Post_Letter_History">Get_Post_Letter_History</h2>
<!-- backwards compatibility -->
<a id="schemaget_post_letter_history"></a>
<a id="schema_Get_Post_Letter_History"></a>
<a id="tocSget_post_letter_history"></a>
<a id="tocsget_post_letter_history"></a>

```json
null
```

<h2 id="tocS_Get_Postcard_History">Get_Postcard_History</h2>
<!-- backwards compatibility -->
<a id="schemaget_postcard_history"></a>
<a id="schema_Get_Postcard_History"></a>
<a id="tocSget_postcard_history"></a>
<a id="tocsget_postcard_history"></a>

```json
null
```

<h2 id="tocS_Get_SMS_Statistics">Get_SMS_Statistics</h2>
<!-- backwards compatibility -->
<a id="schemaget_sms_statistics"></a>
<a id="schema_Get_SMS_Statistics"></a>
<a id="tocSget_sms_statistics"></a>
<a id="tocsget_sms_statistics"></a>

```json
null
```

<h2 id="tocS_Get_Voice_Statistics">Get_Voice_Statistics</h2>
<!-- backwards compatibility -->
<a id="schemaget_voice_statistics"></a>
<a id="schema_Get_Voice_Statistics"></a>
<a id="tocSget_voice_statistics"></a>
<a id="tocsget_voice_statistics"></a>

```json
null
```

<h2 id="tocS_Get_all_Dedicated_Numbers">Get_all_Dedicated_Numbers</h2>
<!-- backwards compatibility -->
<a id="schemaget_all_dedicated_numbers"></a>
<a id="schema_Get_all_Dedicated_Numbers"></a>
<a id="tocSget_all_dedicated_numbers"></a>
<a id="tocsget_all_dedicated_numbers"></a>

```json
null
```

<h2 id="tocS_Import_Contacts">Import_Contacts</h2>
<!-- backwards compatibility -->
<a id="schemaimport_contacts"></a>
<a id="schema_Import_Contacts"></a>
<a id="tocSimport_contacts"></a>
<a id="tocsimport_contacts"></a>

```json
null
```

<h2 id="tocS_Inbound_Fax_Rules">Inbound_Fax_Rules</h2>
<!-- backwards compatibility -->
<a id="schemainbound_fax_rules"></a>
<a id="schema_Inbound_Fax_Rules"></a>
<a id="tocSinbound_fax_rules"></a>
<a id="tocsinbound_fax_rules"></a>

```json
null
```

<h2 id="tocS_Inbound_MMS">Inbound_MMS</h2>
<!-- backwards compatibility -->
<a id="schemainbound_mms"></a>
<a id="schema_Inbound_MMS"></a>
<a id="tocSinbound_mms"></a>
<a id="tocsinbound_mms"></a>

```json
null
```

<h2 id="tocS_Inbound_SMS">Inbound_SMS</h2>
<!-- backwards compatibility -->
<a id="schemainbound_sms"></a>
<a id="schema_Inbound_SMS"></a>
<a id="tocSinbound_sms"></a>
<a id="tocsinbound_sms"></a>

```json
null
```

<h2 id="tocS_Inbound_SMS_Rules">Inbound_SMS_Rules</h2>
<!-- backwards compatibility -->
<a id="schemainbound_sms_rules"></a>
<a id="schema_Inbound_SMS_Rules"></a>
<a id="tocSinbound_sms_rules"></a>
<a id="tocsinbound_sms_rules"></a>

```json
null
```

<h2 id="tocS_MMS_History">MMS_History</h2>
<!-- backwards compatibility -->
<a id="schemamms_history"></a>
<a id="schema_MMS_History"></a>
<a id="tocSmms_history"></a>
<a id="tocsmms_history"></a>

```json
null
```

<h2 id="tocS_Master_Template_Categories">Master_Template_Categories</h2>
<!-- backwards compatibility -->
<a id="schemamaster_template_categories"></a>
<a id="schema_Master_Template_Categories"></a>
<a id="tocSmaster_template_categories"></a>
<a id="tocsmaster_template_categories"></a>

```json
null
```

<h2 id="tocS_Master_Templates">Master_Templates</h2>
<!-- backwards compatibility -->
<a id="schemamaster_templates"></a>
<a id="schema_Master_Templates"></a>
<a id="tocSmaster_templates"></a>
<a id="tocsmaster_templates"></a>

```json
null
```

<h2 id="tocS_Post_Code_Search">Post_Code_Search</h2>
<!-- backwards compatibility -->
<a id="schemapost_code_search"></a>
<a id="schema_Post_Code_Search"></a>
<a id="tocSpost_code_search"></a>
<a id="tocspost_code_search"></a>

```json
null
```

<h2 id="tocS_Post_Return_Address">Post_Return_Address</h2>
<!-- backwards compatibility -->
<a id="schemapost_return_address"></a>
<a id="schema_Post_Return_Address"></a>
<a id="tocSpost_return_address"></a>
<a id="tocspost_return_address"></a>

```json
null
```

<h2 id="tocS_Referral_Accounts">Referral_Accounts</h2>
<!-- backwards compatibility -->
<a id="schemareferral_accounts"></a>
<a id="schema_Referral_Accounts"></a>
<a id="tocSreferral_accounts"></a>
<a id="tocsreferral_accounts"></a>

```json
null
```

<h2 id="tocS_Remove_Duplicate_Contacts">Remove_Duplicate_Contacts</h2>
<!-- backwards compatibility -->
<a id="schemaremove_duplicate_contacts"></a>
<a id="schema_Remove_Duplicate_Contacts"></a>
<a id="tocSremove_duplicate_contacts"></a>
<a id="tocsremove_duplicate_contacts"></a>

```json
null
```

<h2 id="tocS_Remove_Opted_Out_Contacts">Remove_Opted_Out_Contacts</h2>
<!-- backwards compatibility -->
<a id="schemaremove_opted_out_contacts"></a>
<a id="schema_Remove_Opted_Out_Contacts"></a>
<a id="tocSremove_opted_out_contacts"></a>
<a id="tocsremove_opted_out_contacts"></a>

```json
null
```

<h2 id="tocS_Reseller">Reseller</h2>
<!-- backwards compatibility -->
<a id="schemareseller"></a>
<a id="schema_Reseller"></a>
<a id="tocSreseller"></a>
<a id="tocsreseller"></a>

```json
null
```

<h2 id="tocS_Reseller_Account">Reseller_Account</h2>
<!-- backwards compatibility -->
<a id="schemareseller_account"></a>
<a id="schema_Reseller_Account"></a>
<a id="tocSreseller_account"></a>
<a id="tocsreseller_account"></a>

```json
null
```

<h2 id="tocS_Reseller_Accounts">Reseller_Accounts</h2>
<!-- backwards compatibility -->
<a id="schemareseller_accounts"></a>
<a id="schema_Reseller_Accounts"></a>
<a id="tocSreseller_accounts"></a>
<a id="tocsreseller_accounts"></a>

```json
null
```

<h2 id="tocS_Reseller_Subdomain">Reseller_Subdomain</h2>
<!-- backwards compatibility -->
<a id="schemareseller_subdomain"></a>
<a id="schema_Reseller_Subdomain"></a>
<a id="tocSreseller_subdomain"></a>
<a id="tocsreseller_subdomain"></a>

```json
null
```

<h2 id="tocS_SDK_Download">SDK_Download</h2>
<!-- backwards compatibility -->
<a id="schemasdk_download"></a>
<a id="schema_SDK_Download"></a>
<a id="tocSsdk_download"></a>
<a id="tocssdk_download"></a>

```json
null
```

<h2 id="tocS_SMS_Delivery_Receipt_Rules">SMS_Delivery_Receipt_Rules</h2>
<!-- backwards compatibility -->
<a id="schemasms_delivery_receipt_rules"></a>
<a id="schema_SMS_Delivery_Receipt_Rules"></a>
<a id="tocSsms_delivery_receipt_rules"></a>
<a id="tocssms_delivery_receipt_rules"></a>

```json
null
```

<h2 id="tocS_SMS_History">SMS_History</h2>
<!-- backwards compatibility -->
<a id="schemasms_history"></a>
<a id="schema_SMS_History"></a>
<a id="tocSsms_history"></a>
<a id="tocssms_history"></a>

```json
null
```

<h2 id="tocS_Search_Contacts-Lists">Search_Contacts-Lists</h2>
<!-- backwards compatibility -->
<a id="schemasearch_contacts-lists"></a>
<a id="schema_Search_Contacts-Lists"></a>
<a id="tocSsearch_contacts-lists"></a>
<a id="tocssearch_contacts-lists"></a>

```json
null
```

<h2 id="tocS_Search_Dedicated_Numbers_by_Country">Search_Dedicated_Numbers_by_Country</h2>
<!-- backwards compatibility -->
<a id="schemasearch_dedicated_numbers_by_country"></a>
<a id="schema_Search_Dedicated_Numbers_by_Country"></a>
<a id="tocSsearch_dedicated_numbers_by_country"></a>
<a id="tocssearch_dedicated_numbers_by_country"></a>

```json
null
```

<h2 id="tocS_Send_Fax">Send_Fax</h2>
<!-- backwards compatibility -->
<a id="schemasend_fax"></a>
<a id="schema_Send_Fax"></a>
<a id="tocSsend_fax"></a>
<a id="tocssend_fax"></a>

```json
null
```

<h2 id="tocS_Send_Post_Letter">Send_Post_Letter</h2>
<!-- backwards compatibility -->
<a id="schemasend_post_letter"></a>
<a id="schema_Send_Post_Letter"></a>
<a id="tocSsend_post_letter"></a>
<a id="tocssend_post_letter"></a>

```json
null
```

<h2 id="tocS_Send_Postcard">Send_Postcard</h2>
<!-- backwards compatibility -->
<a id="schemasend_postcard"></a>
<a id="schema_Send_Postcard"></a>
<a id="tocSsend_postcard"></a>
<a id="tocssend_postcard"></a>

```json
null
```

<h2 id="tocS_Send_a_Voice_Call_-_Text-to-speech">Send_a_Voice_Call_-_Text-to-speech</h2>
<!-- backwards compatibility -->
<a id="schemasend_a_voice_call_-_text-to-speech"></a>
<a id="schema_Send_a_Voice_Call_-_Text-to-speech"></a>
<a id="tocSsend_a_voice_call_-_text-to-speech"></a>
<a id="tocssend_a_voice_call_-_text-to-speech"></a>

```json
null
```

<h2 id="tocS_Send_an_MMS">Send_an_MMS</h2>
<!-- backwards compatibility -->
<a id="schemasend_an_mms"></a>
<a id="schema_Send_an_MMS"></a>
<a id="tocSsend_an_mms"></a>
<a id="tocssend_an_mms"></a>

```json
null
```

<h2 id="tocS_Send_an_SMS">Send_an_SMS</h2>
<!-- backwards compatibility -->
<a id="schemasend_an_sms"></a>
<a id="schema_Send_an_SMS"></a>
<a id="tocSsend_an_sms"></a>
<a id="tocssend_an_sms"></a>

```json
null
```

<h2 id="tocS_Stripped_Strings">Stripped_Strings</h2>
<!-- backwards compatibility -->
<a id="schemastripped_strings"></a>
<a id="schema_Stripped_Strings"></a>
<a id="tocSstripped_strings"></a>
<a id="tocsstripped_strings"></a>

```json
null
```

<h2 id="tocS_Subaccount">Subaccount</h2>
<!-- backwards compatibility -->
<a id="schemasubaccount"></a>
<a id="schema_Subaccount"></a>
<a id="tocSsubaccount"></a>
<a id="tocssubaccount"></a>

```json
null
```

<h2 id="tocS_Subaccount_Collection">Subaccount_Collection</h2>
<!-- backwards compatibility -->
<a id="schemasubaccount_collection"></a>
<a id="schema_Subaccount_Collection"></a>
<a id="tocSsubaccount_collection"></a>
<a id="tocssubaccount_collection"></a>

```json
null
```

<h2 id="tocS_Templates">Templates</h2>
<!-- backwards compatibility -->
<a id="schematemplates"></a>
<a id="schema_Templates"></a>
<a id="tocStemplates"></a>
<a id="tocstemplates"></a>

```json
null
```

<h2 id="tocS_Timezones">Timezones</h2>
<!-- backwards compatibility -->
<a id="schematimezones"></a>
<a id="schema_Timezones"></a>
<a id="tocStimezones"></a>
<a id="tocstimezones"></a>

```json
null
```

<h2 id="tocS_Transactional_Email">Transactional_Email</h2>
<!-- backwards compatibility -->
<a id="schematransactional_email"></a>
<a id="schema_Transactional_Email"></a>
<a id="tocStransactional_email"></a>
<a id="tocstransactional_email"></a>

```json
null
```

<h2 id="tocS_Transfer_Contact">Transfer_Contact</h2>
<!-- backwards compatibility -->
<a id="schematransfer_contact"></a>
<a id="schema_Transfer_Contact"></a>
<a id="tocStransfer_contact"></a>
<a id="tocstransfer_contact"></a>

```json
null
```

<h2 id="tocS_URL_Shortening">URL_Shortening</h2>
<!-- backwards compatibility -->
<a id="schemaurl_shortening"></a>
<a id="schema_URL_Shortening"></a>
<a id="tocSurl_shortening"></a>
<a id="tocsurl_shortening"></a>

```json
null
```

<h2 id="tocS_Upload_Image">Upload_Image</h2>
<!-- backwards compatibility -->
<a id="schemaupload_image"></a>
<a id="schema_Upload_Image"></a>
<a id="tocSupload_image"></a>
<a id="tocsupload_image"></a>

```json
null
```

<h2 id="tocS_Upload_a_File">Upload_a_File</h2>
<!-- backwards compatibility -->
<a id="schemaupload_a_file"></a>
<a id="schema_Upload_a_File"></a>
<a id="tocSupload_a_file"></a>
<a id="tocsupload_a_file"></a>

```json
null
```

<h2 id="tocS_User_Email_Templates">User_Email_Templates</h2>
<!-- backwards compatibility -->
<a id="schemauser_email_templates"></a>
<a id="schema_User_Email_Templates"></a>
<a id="tocSuser_email_templates"></a>
<a id="tocsuser_email_templates"></a>

```json
null
```

<h2 id="tocS_Verify_Forgot_Password">Verify_Forgot_Password</h2>
<!-- backwards compatibility -->
<a id="schemaverify_forgot_password"></a>
<a id="schema_Verify_Forgot_Password"></a>
<a id="tocSverify_forgot_password"></a>
<a id="tocsverify_forgot_password"></a>

```json
null
```

<h2 id="tocS_Voice_Delivery_Receipt_Rules">Voice_Delivery_Receipt_Rules</h2>
<!-- backwards compatibility -->
<a id="schemavoice_delivery_receipt_rules"></a>
<a id="schema_Voice_Delivery_Receipt_Rules"></a>
<a id="tocSvoice_delivery_receipt_rules"></a>
<a id="tocsvoice_delivery_receipt_rules"></a>

```json
null
```

<h2 id="tocS_Voice_History">Voice_History</h2>
<!-- backwards compatibility -->
<a id="schemavoice_history"></a>
<a id="schema_Voice_History"></a>
<a id="tocSvoice_history"></a>
<a id="tocsvoice_history"></a>

```json
null
```

<h2 id="tocS_Voice_Languages">Voice_Languages</h2>
<!-- backwards compatibility -->
<a id="schemavoice_languages"></a>
<a id="schema_Voice_Languages"></a>
<a id="tocSvoice_languages"></a>
<a id="tocsvoice_languages"></a>

```json
null
```
