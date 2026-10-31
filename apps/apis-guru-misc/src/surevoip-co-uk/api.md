<h1 id="the-surevoip-restful-api">The SureVoIP RESTful API v9dcb0dc8</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
Welcome to the SureVoIP RESTful hypermedia API (sometimes known as a VoIP REST API, Telecom REST API, SIP API, Hypermedia API or just VoIP API.)

The SureVoIP API is a way for you to automate your interaction with the SureVoIP platforms. With the API, you can create your own scripts, applications or mashups which can:
* List calls
* create customers
* search numbers
* provision numbers
* send SMS texts
* create outbound calls
* schedule announcements
* schedule call hangups with an announcement
* subscribe to events/alerts
* track calls
* retrieve invoices
* grab your SIP details
* check your IP address
* be 100% self-sufficient
* and much more!

Base URLs:

* <a href="https://api.surevoip.co.uk">https://api.surevoip.co.uk</a> - Production SureVoIP API (live data)

* <a href="https://sandbox.surevoip.co.uk">https://sandbox.surevoip.co.uk</a> - Sandbox SureVoIP API (data is 24 hours behind production)

<a href="https://www.surevoip.co.uk/about/terms-conditions">Terms of service</a>
Email: <a href="mailto:support@surevoip.co.uk">SureVoIP API Support</a> 
Web: <a href="https://www.surevoip.co.uk/contact-surevoip">SureVoIP API Support</a> 
License: <a href="https://api.surevoip.co.uk">Proprietry</a>

<a href="https://www.surevoip.co.uk/support/wiki/api_documentation">SureVoIP API Wiki</a>

# Authentication

- HTTP Authentication, scheme: basic Basic HTTP Auth

- oAuth2 authentication. OpenID Certified OAuth 2.0 Server and OpenID Connect Provider

    - Flow: authorizationCode
    - Authorization URL = [https://authz.surevoip.co.uk/oauth2/auth](https://authz.surevoip.co.uk/oauth2/auth)
    - Token URL = [https://authz.surevoip.co.uk/oauth2/token](https://authz.surevoip.co.uk/oauth2/token)
    - Refresh URL = [https://authz.surevoip.co.uk/oauth2/token](https://authz.surevoip.co.uk/oauth2/token)

|Scope|Scope Description|
|---|---|
|offline|Include this scope if you wish to receive a refresh token|
|offline_access|Include this scope if you wish to receive a refresh token|
|openid|Include this scope if you wish to perform an OpenID Connect request|

    - Flow: clientCredentials
    - Token URL = [https://authz.surevoip.co.uk/oauth2/token](https://authz.surevoip.co.uk/oauth2/token)

|Scope|Scope Description|
|---|---|
|offline|Include this scope if you wish to receive a refresh token|
|offline_access|Include this scope if you wish to receive a refresh token|
|openid|Include this scope if you wish to perform an OpenID Connect request|

    - Flow: implicit
    - Authorization URL = [https://authz.surevoip.co.uk/oauth2/auth](https://authz.surevoip.co.uk/oauth2/auth)
    - Refresh URL = [https://authz.surevoip.co.uk/oauth2/token](https://authz.surevoip.co.uk/oauth2/token)

|Scope|Scope Description|
|---|---|
|offline|Include this scope if you wish to receive a refresh token|
|offline_access|Include this scope if you wish to receive a refresh token|
|openid|Include this scope if you wish to perform an OpenID Connect request|

- OpenID Connect authentication. OpenID Certified OAuth 2.0 Server and OpenID Connect Provider

    - OpenID Connect URL = [https://authz.surevoip.co.uk/.well-known/openid-configuration](https://authz.surevoip.co.uk/.well-known/openid-configuration)

<h1 id="the-surevoip-restful-api-announcements">announcements</h1>

Announcements that can be played during or before a call

## List global announcements

> Code samples

```bash
curl https://example.com/announcements \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /announcements`

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="list-global-announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return Status OK and/or resource list|Inline|

<h3 id="list-global-announcements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Add a new announcement audio file

> Code samples

```bash
curl https://example.com/announcements \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'description=string' \
  -F 'file=string'
```

`POST /announcements`

> Body parameter

```yaml
description: string
file: string
```

<h3 id="add-a-new-announcement-audio-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Upload a wav file to be used in other parts of the API - 10Mb limit, ending in .wav|
|» description|body|string|false|none|
|» file|body|string(audio/x-wav)|false|none|

> Example responses

> 201 Response

```json
{
  "announcement": {
    "creation_date": "string",
    "description": "string",
    "file_internal": "string",
    "filename": "string",
    "id": "string",
    "size": 0,
    "src_ip_address": "string",
    "url": {
      "download": "string",
      "href": "string",
      "title": "string"
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": [
        "string"
      ]
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string"
}
```

> 500 Response

```json
{
  "message": "string"
}
```

<h3 id="add-a-new-announcement-audio-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File created on filesystem.|Inline|
|400|Bad Request|Bad data|Inline|
|403|Forbidden|Sorry, you have reached your max quota of 10 announcement files. Please delete some.|Inline|
|500|Internal Server Error|Problem saving file|Inline|

<h3 id="add-a-new-announcement-audio-file-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement|object|false|none|none|
|» creation_date|string|false|none|none|
|» description|string|false|none|none|
|» file_internal|string|false|none|none|
|» filename|string|false|none|none|
|» id|string|false|none|none|
|» size|integer|false|none|none|
|» src_ip_address|string|false|none|none|
|» url|object|false|none|none|
|» » download|string|false|none|none|
|» » href|string|false|none|none|
|» » title|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» field|string|true|none|none|
|» message|[string]|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## List of announcement audio files

> Code samples

```bash
curl https://example.com/customers/0/announcements \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /customers/{account}/announcements`

<h3 id="list-of-announcement-audio-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|integer|true|Account ID of customer|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "announcement": {
        "creation_date": "string",
        "description": "string",
        "file_internal": "string",
        "filename": "string",
        "id": "string",
        "size": 0,
        "src_ip_address": "string",
        "url": {
          "download": "string",
          "href": "string",
          "title": "string"
        }
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="list-of-announcement-audio-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not found|Inline|

<h3 id="list-of-announcement-audio-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[object]|false|none|none|
|» announcement|object|false|none|none|
|» » creation_date|string|false|none|none|
|» » description|string|false|none|none|
|» » file_internal|string|false|none|none|
|» » filename|string|false|none|none|
|» » id|string|false|none|none|
|» » size|integer|false|none|none|
|» » src_ip_address|string|false|none|none|
|» » url|object|false|none|none|
|» » » download|string|false|none|none|
|» » » href|string|false|none|none|
|» » » title|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Represents an announcement audio file

> Code samples

```bash
curl https://example.com/customers/0/announcements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /customers/{account}/announcements/{announcement_id}`

<h3 id="represents-an-announcement-audio-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|integer|true|Account ID of customer|
|announcement_id|path|string|true|Announcement ID of audio file|

> Example responses

> 200 Response

```json
{
  "announcement": {
    "creation_date": "string",
    "description": "string",
    "file_internal": "string",
    "filename": "string",
    "id": "string",
    "size": 0,
    "src_ip_address": "string",
    "url": {
      "download": "string",
      "href": "string",
      "title": "string"
    }
  }
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="represents-an-announcement-audio-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not found|Inline|

<h3 id="represents-an-announcement-audio-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|announcement|object|false|none|none|
|» creation_date|string|false|none|none|
|» description|string|false|none|none|
|» file_internal|string|false|none|none|
|» filename|string|false|none|none|
|» id|string|false|none|none|
|» size|integer|false|none|none|
|» src_ip_address|string|false|none|none|
|» url|object|false|none|none|
|» » download|string|false|none|none|
|» » href|string|false|none|none|
|» » title|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Delete an announcement audio file

> Code samples

```bash
curl https://example.com/customers/0/announcements/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /customers/{account}/announcements/{announcement_id}`

<h3 id="delete-an-announcement-audio-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|integer|true|Account ID of customer|
|announcement_id|path|string|true|Announcement ID of audio file|

> Example responses

> 404 Response

```json
{
  "message": "string"
}
```

> 410 Response

```json
{
  "message": "string"
}
```

<h3 id="delete-an-announcement-audio-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not found|Inline|
|410|Gone|Gone|Inline|

<h3 id="delete-an-announcement-audio-file-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

Status Code **410**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-areacodes">areacodes</h1>

Areacodes of numbers that SureVoIP can supply

## List areacodes

> Code samples

```bash
curl https://example.com/areacodes \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /areacodes`

<h3 id="list-areacodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Search available numbers by areacode

> Code samples

```bash
curl https://example.com/numbers/areacodes \
  -H 'Accept: application/json'
```

`GET /numbers/areacodes`

You can search by area name, area code or filter using both.


> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="search-available-numbers-by-areacode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="search-available-numbers-by-areacode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="the-surevoip-restful-api-billing">billing</h1>

Billing details and invoices

## List global billing detail

> Code samples

```bash
curl https://example.com/billing \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /billing`

<h3 id="list-global-billing-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-calls">calls</h1>

Create phone calls via an API

## Validate a phone number by calling it once

> Code samples

```bash
curl https://example.com/calls \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /calls`

<h3 id="validate-a-phone-number-by-calling-it-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validate|query|integer|false|Validate a phone number by calling it for one ring. Note; not 100% proof the number is in service.|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": [
        "string"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "message": "string"
}
```

<h3 id="validate-a-phone-number-by-calling-it-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad query data|Inline|
|404|Not Found|Only partners or admins can list all live calls.|Inline|

<h3 id="validate-a-phone-number-by-calling-it-once-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» field|string|true|none|none|
|» message|[string]|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Create phone calls with or without announcements and scheduled hangups

> Code samples

```bash
curl https://example.com/calls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "announcement_at": 180,
    "announcement_id": "hgCRVfWB4hGRSEAkICyA",
    "caller_id": 1224900123,
    "from": 442035159999,
    "hangup_announcement_id": "RVfWB4hGRSEAkIXYCyA",
    "hangup_at": 300,
    "options": {
      "a_leg_caller_id": 1224900123,
      "a_leg_only": 1,
      "cancel_key": 2,
      "connect_key": 1,
      "play_audio": [
        {
          "announcement_id": "zgL4QmsB6hGmv5YnsW_4lQ"
        }
      ]
    },
    "to": 442035159995
  }'
```

`POST /calls`

> Body parameter

```json
{
  "announcement_at": 180,
  "announcement_id": "hgCRVfWB4hGRSEAkICyA",
  "caller_id": 1224900123,
  "from": 442035159999,
  "hangup_announcement_id": "RVfWB4hGRSEAkIXYCyA",
  "hangup_at": 300,
  "options": {
    "a_leg_caller_id": 1224900123,
    "a_leg_only": 1,
    "cancel_key": 2,
    "connect_key": 1,
    "play_audio": [
      {
        "announcement_id": "zgL4QmsB6hGmv5YnsW_4lQ"
      }
    ]
  },
  "to": 442035159995
}
```

<h3 id="create-phone-calls-with-or-without-announcements-and-scheduled-hangups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Create a phone call and play announcement audio to the "from" party (a leg)|
|» announcement_at|body|string|false|is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required<br>|
|» announcement_id|body|string|false|is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required<br>|
|» caller_id|body|string|true|The caller ID to show the b leg (to).|
|» from|body|string|true|The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung|
|» hangup_announcement_id|body|string|false|the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.<br>|
|» hangup_at|body|string|false|length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup<br>|
|» options|body|object|false|none|
|» » a_leg_caller_id|body|string|false|Change the caller ID shown to the a leg (from)|
|» » a_leg_only|body|integer|false|Do not ring the "to" number, only the from and show "caller_id"|
|» » cancel_key|body|integer|false|The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2|
|» » connect_key|body|integer|false|The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1|
|» » play_audio|body|[object]|false|none|
|» » » announcement_id|body|string|false|Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example. <br>Have lots of audio files in this array to build up a message<br>|
|» to|body|string|true|The b leg of the call, i.e. the person you are calling|

> Example responses

> 202 Response

```json
{
  "Call": "string",
  "Location": "string"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": [
        "string"
      ]
    }
  ]
}
```

> 403 Response

```json
{
  "message": "string"
}
```

<h3 id="create-phone-calls-with-or-without-announcements-and-scheduled-hangups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Call creation request accepted.|Inline|
|400|Bad Request|Bad data|Inline|
|403|Forbidden|Only customer accounts can create calls.|Inline|
|500|Internal Server Error|Issue with API interface to core platform.|None|

<h3 id="create-phone-calls-with-or-without-announcements-and-scheduled-hangups-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Call|string|false|none|none|
|Location|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|true|none|none|
|» field|string|true|none|none|
|» message|[string]|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Location|string||URL of created call to monitor|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-charges">charges</h1>

Create a charge for a customer

## List charges

> Code samples

```bash
curl https://example.com/charges \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /charges`

<h3 id="list-charges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Create charges for invoices

> Code samples

```bash
curl https://example.com/charges \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /charges`

<h3 id="create-charges-for-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created,|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-contacts">contacts</h1>

Create, List, Updated and Delete Contacts

## List contacts

> Code samples

```bash
curl https://example.com/contacts \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /contacts`

<h3 id="list-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-customers">customers</h1>

Create, List, Updated and Delete Customers

## List all customers or find your own account

> Code samples

```bash
curl https://example.com/customers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /customers`

> Example responses

> 302 Response

```json
{
  "location": "string"
}
```

<h3 id="list-all-customers-or-find-your-own-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|Inline|

<h3 id="list-all-customers-or-find-your-own-account-responseschema">Response Schema</h3>

Status Code **302**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||URL of customer account|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

## Represents a customer

<a id="opIdgetCustomer"></a>

> Code samples

```bash
curl https://example.com/customers/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /customers/{account}`

<h3 id="represents-a-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|integer|true|Account ID of customer|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "balance": 0,
  "city": "string",
  "company_name": "string",
  "company_website": "string",
  "country": "string",
  "creditlimit": "string",
  "email": "string",
  "fax": "string",
  "firstname": "string",
  "lastname": "string",
  "phone": "string",
  "postcode": "string",
  "state": "string",
  "username": 0
}
```

<h3 id="represents-a-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Found|Inline|

<h3 id="represents-a-customer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|balance|integer|false|none|none|
|city|string|false|none|none|
|company_name|string|false|none|none|
|company_website|string|false|none|none|
|country|string|false|none|none|
|creditlimit|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|firstname|string|false|none|none|
|lastname|string|false|none|none|
|phone|string|false|none|none|
|postcode|string|false|none|none|
|state|string|false|none|none|
|username|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-echo">echo</h1>

Echo back your payload

## Return your POSTed data for testing

> Code samples

```bash
curl https://example.com/support/echo \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /support/echo`

<h3 id="return-your-posted-data-for-testing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-faxes">faxes</h1>

Send faxes - Not in service

## List global ongoing faxes

> Code samples

```bash
curl https://example.com/faxes \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /faxes`

<h3 id="list-global-ongoing-faxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-hosted">hosted</h1>

Create, List, Updated and Delete Hosted VoIP Customers

## List Hosted VoIP domains

> Code samples

```bash
curl https://example.com/hosted \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /hosted`

<h3 id="list-hosted-voip-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-mobile">mobile</h1>

Create, List, Updated and Delete SIMs

## List mobile accounts

> Code samples

```bash
curl https://example.com/mobile \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /mobile`

<h3 id="list-mobile-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-numbers">numbers</h1>

Create, List, Updated and Delete Numbers (DDIs)

## List available SureVoIP Ofcom number allocations for purchase

> Code samples

```bash
curl https://example.com/numbers
```

`GET /numbers`

<h3 id="list-available-surevoip-ofcom-number-allocations-for-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="the-surevoip-restful-api-partners">partners</h1>

Create, List, Updated and Delete Partners and their customers

## List SureVoIP Partner accounts

> Code samples

```bash
curl https://example.com/partners \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /partners`

<h3 id="list-surevoip-partner-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-porting">porting</h1>

Create, List, Updated and Delete Number Porting requests

## List ported numbers

> Code samples

```bash
curl https://example.com/porting \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /porting`

<h3 id="list-ported-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-sip">sip</h1>

List SIP details

## List all SIP accounts

> Code samples

```bash
curl https://example.com/sip \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sip`

<h3 id="list-all-sip-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-sms">sms</h1>

Send SMS (text messages)

## List SMS

> Code samples

```bash
curl https://example.com/sms \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /sms`

<h3 id="list-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-support">support</h1>

List support details

## Return the IP address from where your API request originated

> Code samples

```bash
curl https://example.com/ip-address
```

`GET /ip-address`

<h3 id="return-the-ip-address-from-where-your-api-request-originated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Service Status messages

> Code samples

```bash
curl https://example.com/service-status
```

`GET /service-status`

<h3 id="list-all-service-status-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return the IP address from where your API request originated

> Code samples

```bash
curl https://example.com/support/ip-address
```

`GET /support/ip-address`

<h3 id="return-the-ip-address-from-where-your-api-request-originated-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## List all Service Status messages

> Code samples

```bash
curl https://example.com/support/service-status
```

`GET /support/service-status`

<h3 id="list-all-service-status-messages-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="the-surevoip-restful-api-topups">topups</h1>

Create call credit topups for customers

## List all account credit topups

> Code samples

```bash
curl https://example.com/topups \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /topups`

<h3 id="list-all-account-credit-topups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>

<h1 id="the-surevoip-restful-api-global">global</h1>

## List global resources

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /`

<h3 id="list-global-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hypermedia|query|string|false|Disable Hypermedia|
|content-type|query|string|false|Content Type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|hypermedia|yes|
|hypermedia|no|
|content-type|application/json|
|content-type|text/html|
|content-type|text/xml|
|content-type|application/xml|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="list-global-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return Status OK and/or resource list|Inline|

<h3 id="list-global-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, OAuth2
</aside>
