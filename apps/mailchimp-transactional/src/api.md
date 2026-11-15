<h1 id="mailchimp-transactional-api">Mailchimp Transactional API v1.4.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://mandrillapp.com/api/1.4">https://mandrillapp.com/api/1.4</a> - Mailchimp Transactional API v1.4

<h1 id="mailchimp-transactional-api-allowlist">Allowlist</h1>

Operations for managing email allowlist for rejection management

## Add email to allowlist

<a id="opIdallowlists/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/allowlists/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user@example.com",
    "comment": "Internal support address"
  }'
```

`POST /allowlists/add`

Adds an email to your email rejection allowlist. If the address is currently on your denylist, that denylist entry will be removed automatically.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "comment": "Internal support address"
}
```

<h3 id="add-email-to-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AllowlistsAddRequest](#schemaallowlistsaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string(email)|true|An email address to add to the allowlist|
|» comment|body|string|false|An optional description of why the email was added to the allowlist|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "added": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-email-to-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllowlistsAddResponse](#schemaallowlistsaddresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List allowlist entries

<a id="opIdallowlists/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/allowlists/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user"
  }'
```

`POST /allowlists/list`

Retrieves your email rejection allowlist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user"
}
```

<h3 id="list-allowlist-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AllowlistsListRequest](#schemaallowlistslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string|false|An optional email address or prefix to search by|

> Example responses

> 200 Response

```json
[
  {
    "email": "user@example.com",
    "detail": "Internal support address",
    "created_at": "2013-01-01 15:30:32"
  },
  {
    "email": "support@example.com",
    "detail": "Customer support address",
    "created_at": "2013-01-02 10:15:45"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-allowlist-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllowlistsListResponse](#schemaallowlistslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove email from allowlist

<a id="opIdallowlists/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/allowlists/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user@example.com"
  }'
```

`POST /allowlists/delete`

Removes an email address from the allowlist.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com"
}
```

<h3 id="remove-email-from-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AllowlistsDeleteRequest](#schemaallowlistsdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string(email)|true|The email address to remove from the allowlist|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "deleted": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="remove-email-from-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AllowlistsDeleteResponse](#schemaallowlistsdeleteresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-exports">Exports</h1>

Operations for exporting account data including rejection lists, allowlists, and activity history

## Get export job information

<a id="opIdexports/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "2013-01-01 12:20:28.13842"
  }'
```

`POST /exports/info`

Returns information about an export job including status and download URL when complete.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "2013-01-01 12:20:28.13842"
}
```

<h3 id="get-export-job-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsInfoRequest](#schemaexportsinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|Export job identifier|

> Example responses

> 200 Response

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 9,
  "name": "Unknown_Export",
  "message": "Unknown Export: abc123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-export-job-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown export job|[ExportNotFoundError](#schemaexportnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List export jobs

<a id="opIdexports/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /exports/list`

Returns a list of all export jobs for the account.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-export-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsListRequest](#schemaexportslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "id": "2013-01-01 12:20:28.13842",
    "created_at": "2013-01-01 12:30:28",
    "type": "reject",
    "finished_at": "2013-01-01 12:35:28",
    "state": "waiting",
    "result_url": "https://example.com/export-results.zip"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-export-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExportsListResponse](#schemaexportslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export rejection blacklist

<a id="opIdexports/rejects"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/rejects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "notify_email": "admin@example.com"
  }'
```

`POST /exports/rejects`

Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive containing a single file named rejects.csv.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

<h3 id="export-rejection-blacklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsRejectsRequest](#schemaexportsrejectsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» notify_email|body|string(email)|false|Optional email address to notify when the export job has finished|

> Example responses

> 200 Response

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="export-rejection-blacklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export rejection allowlist (legacy)

<a id="opIdexports/whitelist"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/whitelist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "notify_email": "admin@example.com"
  }'
```

`POST /exports/whitelist`

Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

<h3 id="export-rejection-allowlist-legacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsWhitelistRequest](#schemaexportswhitelistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» notify_email|body|string(email)|false|Optional email address to notify when the export job has finished|

> Example responses

> 200 Response

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="export-rejection-allowlist-legacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export rejection allowlist

<a id="opIdexports/allowlist"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/allowlist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "notify_email": "admin@example.com"
  }'
```

`POST /exports/allowlist`

Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

<h3 id="export-rejection-allowlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsAllowlistRequest](#schemaexportsallowlistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» notify_email|body|string(email)|false|Optional email address to notify when the export job has finished|

> Example responses

> 200 Response

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="export-rejection-allowlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Export activity history

<a id="opIdexports/activity"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/exports/activity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": {
      "key": "ONzNrsmbtNXoIKyfPmjnig"
    },
    "notify_email": "admin@example.com",
    "date_from": "2013-01-01 12:53:01",
    "date_to": "2013-01-06 13:42:18",
    "tags": [
      "example-tag"
    ],
    "senders": [
      "test@example.com"
    ],
    "states": [
      "sent"
    ],
    "api_keys": [
      "ONzNrsmbtNXoIKyfPmjnig"
    ]
  }'
```

`POST /exports/activity`

Begins an export of your activity history. The activity will be exported to a zip archive containing a single file named activity.csv with message details and custom metadata fields.

> Body parameter

```json
{
  "key": {
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  },
  "notify_email": "admin@example.com",
  "date_from": "2013-01-01 12:53:01",
  "date_to": "2013-01-06 13:42:18",
  "tags": [
    "example-tag"
  ],
  "senders": [
    "test@example.com"
  ],
  "states": [
    "sent"
  ],
  "api_keys": [
    "ONzNrsmbtNXoIKyfPmjnig"
  ]
}
```

<h3 id="export-activity-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportsActivityRequest](#schemaexportsactivityrequest)|true|none|
|» key|body|[ApiKey](#schemaapikey)|true|API key field included in request bodies.|
|» notify_email|body|string(email)|false|Optional email address to notify when the export job has finished|
|» date_from|body|string|false|Start date as a UTC string in YYYY-MM-DD HH:MM:SS format|
|» date_to|body|string|false|End date as a UTC string in YYYY-MM-DD HH:MM:SS format|
|» tags|body|[string]|false|Array of tag names to narrow the export to; will match messages that contain ANY of the tags|
|» senders|body|[string(email)]|false|Array of sender email addresses to narrow the export to|
|» states|body|[string]|false|Array of message states to narrow the export to; messages with ANY of the states will be included|
|» api_keys|body|[string]|false|Array of API keys to narrow the export to; messages sent with ANY of the keys will be included|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» states|sent|
|» states|rejected|
|» states|bounced|
|» states|soft-bounced|
|» states|spam|
|» states|unsub|

> Example responses

> 200 Response

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="export-activity-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-inbound">Inbound</h1>

Operations for managing inbound email domains and routing

## List inbound domains

<a id="opIdinbound/domains"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /inbound/domains`

List the domains that have been configured for inbound delivery.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-inbound-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundDomainsRequest](#schemainbounddomainsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "domain": "inbound.example.com",
    "created_at": "2025-08-29 18:47:58.03116",
    "valid_mx": true
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-inbound-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundDomainsResponse](#schemainbounddomainsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add inbound domain

<a id="opIdinbound/add-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/add-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "inbound.example.com"
  }'
```

`POST /inbound/add-domain`

Add an inbound domain to your account.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

<h3 id="add-inbound-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundAddDomainRequest](#schemainboundadddomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|A domain name for inbound email delivery|

> Example responses

> 200 Response

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-inbound-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundDomain](#schemainbounddomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Check domain settings

<a id="opIdinbound/check-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/check-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "inbound.example.com"
  }'
```

`POST /inbound/check-domain`

Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

<h3 id="check-domain-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundCheckDomainRequest](#schemainboundcheckdomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|A domain name for inbound email delivery|

> Example responses

> 200 Response

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="check-domain-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundDomain](#schemainbounddomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound domain|[InboundDomainNotFoundError](#schemainbounddomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete inbound domain

<a id="opIdinbound/delete-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/delete-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "inbound.example.com"
  }'
```

`POST /inbound/delete-domain`

Delete an inbound domain from the account. All mail will stop routing for this domain immediately.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

<h3 id="delete-inbound-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundDeleteDomainRequest](#schemainbounddeletedomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|A domain name for inbound email delivery|

> Example responses

> 200 Response

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-inbound-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundDomain](#schemainbounddomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound domain|[InboundDomainNotFoundError](#schemainbounddomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List mailbox routes

<a id="opIdinbound/routes"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "inbound.example.com"
  }'
```

`POST /inbound/routes`

List the mailbox routes defined for an inbound domain.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

<h3 id="list-mailbox-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundRoutesRequest](#schemainboundroutesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|The domain to check|

> Example responses

> 200 Response

```json
[
  {
    "id": "88.214614",
    "pattern": "mailbox-*",
    "url": "https://example.com/webhook-url"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-mailbox-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundRoutesResponse](#schemainboundroutesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound domain|[InboundDomainNotFoundError](#schemainbounddomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add mailbox route

<a id="opIdinbound/add-route"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/add-route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "inbound.example.com",
    "pattern": "mailbox-*",
    "url": "https://example.com/webhook-url"
  }'
```

`POST /inbound/add-route`

Add a new mailbox route to an inbound domain.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

<h3 id="add-mailbox-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundAddRouteRequest](#schemainboundaddrouterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|An existing inbound domain|
|» pattern|body|string|true|The search pattern that the mailbox name should match|
|» url|body|string(active-uri)|true|The webhook URL where the inbound messages will be published|

> Example responses

> 200 Response

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-mailbox-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundRoute](#schemainboundroute)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound domain|[InboundDomainNotFoundError](#schemainbounddomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update mailbox route

<a id="opIdinbound/update-route"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/update-route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "88.2144614",
    "pattern": "*.*",
    "url": "https://example.com/webhook-url"
  }'
```

`POST /inbound/update-route`

Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "88.2144614",
  "pattern": "*.*",
  "url": "https://example.com/webhook-url"
}
```

<h3 id="update-mailbox-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundUpdateRouteRequest](#schemainboundupdaterouterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of an existing mailbox route|
|» pattern|body|string \| null|false|The search pattern that the mailbox name should match (null to leave unchanged)|
|» url|body|string \| null(uri)|false|The webhook URL where the inbound messages will be published (null to leave unchanged)|

> Example responses

> 200 Response

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 22,
  "name": "Unknown_InboundRoute",
  "message": "No route exists with the id 1234"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="update-mailbox-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundRoute](#schemainboundroute)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound route|[InboundRouteNotFoundError](#schemainboundroutenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete mailbox route

<a id="opIdinbound/delete-route"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/delete-route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "88.214614"
  }'
```

`POST /inbound/delete-route`

Delete an existing inbound mailbox route.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "88.214614"
}
```

<h3 id="delete-mailbox-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundDeleteRouteRequest](#schemainbounddeleterouterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of an existing route|

> Example responses

> 200 Response

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 22,
  "name": "Unknown_InboundRoute",
  "message": "No route exists with the id 1234"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-mailbox-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundRoute](#schemainboundroute)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound route|[InboundRouteNotFoundError](#schemainboundroutenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Send mime document

<a id="opIdinbound/send-raw"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/inbound/send-raw \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "raw_message": "From: sender@example.com\\nTo: mailbox-123@inbound.example.com\\nSubject: Some Subject\\n\\nSome content.",
    "to": [
      "mailbox-123@inbound.example.com"
    ],
    "mail_from": "sender@example.com"
  }'
```

`POST /inbound/send-raw`

Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "From: sender@example.com\\nTo: mailbox-123@inbound.example.com\\nSubject: Some Subject\\n\\nSome content.",
  "to": [
    "mailbox-123@inbound.example.com"
  ],
  "mail_from": "sender@example.com"
}
```

<h3 id="send-mime-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboundSendRawRequest](#schemainboundsendrawrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» raw_message|body|string|true|The full MIME document of an email message|
|» to|body|[string(email)]|false|Optionally define the recipients to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document|
|» mail_from|body|string \| null(email)|false|The address specified in the MAIL FROM stage of the SMTP conversation|
|» helo|body|string \| null|false|The hostname provided during HELO|
|» client_address|body|string \| null|false|The remote host's IP address|

> Example responses

> 200 Response

```json
[
  {
    "email": "mailbox-123@inbound.example.com",
    "pattern": "mailbox-*",
    "url": "https://example.com/webhook-url"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-mime-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InboundSendRawResponse](#schemainboundsendrawresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown inbound domain|[InboundDomainNotFoundError](#schemainbounddomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-ips">IPs</h1>

Operations for managing dedicated IPs, IP pools, warmup processes, and custom DNS configuration

## List dedicated IPs

<a id="opIdips/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /ips/list`

Lists your dedicated IPs.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-dedicated-ips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsListRequest](#schemaipslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "ip": "127.0.0.1",
    "created_at": "2013-01-01 15:50:21",
    "pool": "Main Pool",
    "domain": "mail1.example.mandrillapp.com",
    "custom_dns": {
      "enabled": true,
      "valid": true,
      "error": null
    },
    "warmup": {
      "warming_up": true,
      "start_at": "2013-03-01 12:00:01",
      "end_at": "2013-03-31 12:00:01"
    }
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-dedicated-ips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsListResponse](#schemaipslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get dedicated IP information

<a id="opIdips/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1"
  }'
```

`POST /ips/info`

Retrieves information about a single dedicated IP.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

<h3 id="get-dedicated-ip-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsInfoRequest](#schemaipsinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-dedicated-ip-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IP](#schemaip)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Request dedicated IP provisioning

<a id="opIdips/provision"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/provision \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "warmup": false,
    "pool": "Main Pool"
  }'
```

`POST /ips/provision`

Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "warmup": false,
  "pool": "Main Pool"
}
```

<h3 id="request-dedicated-ip-provisioning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsProvisionRequest](#schemaipsprovisionrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» warmup|body|boolean|false|Whether to enable warmup mode for the IP|
|» pool|body|string \| null|false|The ID of the pool to add the dedicated IP to, or null to use your account's default pool|

> Example responses

> 200 Response

```json
{
  "requested_at": "2013-01-01 01:52:21.123456"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 402 Response

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 15,
  "name": "Unknown_Pool",
  "message": "No pool named main-pool"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="request-dedicated-ip-provisioning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsProvisionResponse](#schemaipsprovisionresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|402|Payment Required|A paid plan is required to use this feature.|[PaymentRequiredError](#schemapaymentrequirederror)|
|404|Not Found|Unknown IP pool|[IPPoolNotFoundError](#schemaippoolnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Start IP warmup process

<a id="opIdips/start-warmup"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/start-warmup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1"
  }'
```

`POST /ips/start-warmup`

Begins the warmup process for a dedicated IP. During the warmup process, Mandrill will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

<h3 id="start-ip-warmup-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsStartWarmupRequest](#schemaipsstartwarmuprequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP with address 127.0.0.1"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="start-ip-warmup-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IP](#schemaip)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown dedicated IP|[IPNotFoundError](#schemaipnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel IP warmup process

<a id="opIdips/cancel-warmup"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/cancel-warmup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1"
  }'
```

`POST /ips/cancel-warmup`

Cancels the warmup process for a dedicated IP.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

<h3 id="cancel-ip-warmup-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsCancelWarmupRequest](#schemaipscancelwarmuprequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP with address 127.0.0.1"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="cancel-ip-warmup-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IP](#schemaip)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown dedicated IP|[IPNotFoundError](#schemaipnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Move IP to different pool

<a id="opIdips/set-pool"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/set-pool \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1",
    "pool": "Main Pool",
    "create_pool": false
  }'
```

`POST /ips/set-pool`

Moves a dedicated IP to a different pool.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "pool": "Main Pool",
  "create_pool": false
}
```

<h3 id="move-ip-to-different-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsSetPoolRequest](#schemaipssetpoolrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|
|» pool|body|string|true|The name of the new pool to add the dedicated IP to|
|» create_pool|body|boolean|false|Whether to create the pool if it does not exist; if false and the pool does not exist, an Unknown_Pool will be thrown|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 16,
  "name": "Invalid_EmptyDefaultPool",
  "message": "You cannot remove the last IP from your default pool"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP or pool found"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="move-ip-to-different-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IP](#schemaip)|
|400|Bad Request|Cannot leave default pool empty|[IPInvalidEmptyDefaultPoolError](#schemaipinvalidemptydefaultpoolerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown IP or pool|[IPOrPoolNotFoundError](#schemaiporpoolnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete dedicated IP

<a id="opIdips/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1"
  }'
```

`POST /ips/delete`

Deletes a dedicated IP. This is permanent and cannot be undone.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

<h3 id="delete-dedicated-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsDeleteRequest](#schemaipsdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|The dedicated IP to remove from your account|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "deleted": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-dedicated-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsDeleteResponse](#schemaipsdeleteresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List dedicated IP pools

<a id="opIdips/list-pools"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/list-pools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /ips/list-pools`

Lists your dedicated IP pools.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-dedicated-ip-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsListPoolsRequest](#schemaipslistpoolsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "name": "Main Pool",
    "created_at": "2013-01-01 12:15:12",
    "ips": [
      {
        "ip": "127.0.0.1",
        "created_at": "2013-01-01 15:50:21",
        "pool": "Main Pool",
        "domain": "mail1.example.mandrillapp.com",
        "custom_dns": {
          "enabled": true,
          "valid": true,
          "error": null
        },
        "warmup": {
          "warming_up": false,
          "start_at": null,
          "end_at": null
        }
      }
    ]
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-dedicated-ip-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsListPoolsResponse](#schemaipslistpoolsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get pool information

<a id="opIdips/pool-info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/pool-info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "pool": "Main Pool"
  }'
```

`POST /ips/pool-info`

Describes a single dedicated IP pool.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "Main Pool"
}
```

<h3 id="get-pool-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsPoolInfoRequest](#schemaipspoolinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» pool|body|string|true|A pool name|

> Example responses

> 200 Response

```json
{
  "name": "Main Pool",
  "created_at": "2013-01-01 12:15:12",
  "ips": [
    {
      "ip": "127.0.0.1",
      "created_at": "2013-01-01 15:50:21",
      "pool": "Main Pool",
      "domain": "mail1.example.mandrillapp.com",
      "custom_dns": {
        "enabled": true,
        "valid": true,
        "error": null
      },
      "warmup": {
        "warming_up": false,
        "start_at": null,
        "end_at": null
      }
    }
  ]
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 15,
  "name": "Unknown_Pool",
  "message": "No pool named main-pool"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-pool-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsPool](#schemaipspool)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown IP pool|[IPPoolNotFoundError](#schemaippoolnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create dedicated IP pool

<a id="opIdips/create-pool"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/create-pool \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "pool": "New Pool"
  }'
```

`POST /ips/create-pool`

Creates a pool and returns it. If a pool already exists with this name, no action will be performed.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "New Pool"
}
```

<h3 id="create-dedicated-ip-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsCreatePoolRequest](#schemaipscreatepoolrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» pool|body|string|true|The name of a pool to create|

> Example responses

> 200 Response

```json
{
  "name": "Main Pool",
  "created_at": "2013-01-01 12:15:12",
  "ips": [
    {
      "ip": "127.0.0.1",
      "created_at": "2013-01-01 15:50:21",
      "pool": "Main Pool",
      "domain": "mail1.example.mandrillapp.com",
      "custom_dns": {
        "enabled": true,
        "valid": true,
        "error": null
      },
      "warmup": {
        "warming_up": false,
        "start_at": null,
        "end_at": null
      }
    }
  ]
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="create-dedicated-ip-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsPool](#schemaipspool)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete dedicated IP pool

<a id="opIdips/delete-pool"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/delete-pool \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "pool": "Main Pool"
  }'
```

`POST /ips/delete-pool`

Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "Main Pool"
}
```

<h3 id="delete-dedicated-ip-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsDeletePoolRequest](#schemaipsdeletepoolrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» pool|body|string|true|The name of a pool to delete|

> Example responses

> 200 Response

```json
{
  "pool": "Test Pool",
  "deleted": true
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 17,
  "name": "Invalid_DeleteDefaultPool",
  "message": "You cannot delete your default pool"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 15,
  "name": "Unknown_Pool",
  "message": "No pool named main-pool"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-dedicated-ip-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsDeletePoolResponse](#schemaipsdeletepoolresponse)|
|400|Bad Request|Cannot delete default pool or non-empty pool|[IPInvalidDeletePoolError](#schemaipinvaliddeletepoolerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown IP pool|[IPPoolNotFoundError](#schemaippoolnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Test custom DNS configuration

<a id="opIdips/check-custom-dns"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/check-custom-dns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1",
    "domain": "example.com"
  }'
```

`POST /ips/check-custom-dns`

Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "domain": "example.com"
}
```

<h3 id="test-custom-dns-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsCheckCustomDnsRequest](#schemaipscheckcustomdnsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|
|» domain|body|string(hostname)|true|The domain name to test|

> Example responses

> 200 Response

```json
{
  "valid": true,
  "error": null
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP with address 127.0.0.1"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="test-custom-dns-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IPsCheckCustomDnsResponse](#schemaipscheckcustomdnsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown dedicated IP|[IPNotFoundError](#schemaipnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Configure custom DNS for IP

<a id="opIdips/set-custom-dns"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/ips/set-custom-dns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "ip": "127.0.0.1",
    "domain": "example.com"
  }'
```

`POST /ips/set-custom-dns`

Configures the custom DNS name for a dedicated IP.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "domain": "example.com"
}
```

<h3 id="configure-custom-dns-for-ip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IPsSetCustomDnsRequest](#schemaipssetcustomdnsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» ip|body|string|true|A dedicated IP address|
|» domain|body|string(hostname)|true|A domain name to set as the dedicated IP's custom DNS name|

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 19,
  "name": "Invalid_CustomDNS",
  "message": "The domain name is not configured for use as the dedicated IP's custom reverse DNS."
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP with address 127.0.0.1"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="configure-custom-dns-for-ip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IP](#schemaip)|
|400|Bad Request|Invalid custom DNS configuration|[IPInvalidCustomDnsError](#schemaipinvalidcustomdnserror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown dedicated IP|[IPNotFoundError](#schemaipnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-mc-templates">MC Templates</h1>

Operations for managing and rendering Mailchimp Transactional templates

## Get Mailchimp Transactional template information

<a id="opIdmctemplates/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/mctemplates/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "mc_template_id": 12345
  }'
```

`POST /mctemplates/info`

Returns complete information about a Mailchimp Transactional template including draft and published versions

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345
}
```

<h3 id="get-mailchimp-transactional-template-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MctemplatesInfoRequest](#schemamctemplatesinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» mc_template_id|body|integer|true|The Mailchimp template ID|

> Example responses

> 200 Response

```json
{
  "mc_template_id": 12345,
  "mc_template_name": "Welcome Email",
  "labels": [],
  "code": "<div>Welcome!</div>",
  "subject": "Welcome to our service",
  "from_email": "support@example.com",
  "from_name": "Support Team",
  "text": "Welcome to our service!",
  "publish_code": "<div>Welcome!</div>",
  "publish_text": "Welcome to our service!",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No Mailchimp template found with id 12345"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-mailchimp-transactional-template-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MctemplatesInfoResponse](#schemamctemplatesinforesponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Mailchimp template not found|[MctemplateNotFoundError](#schemamctemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List Mailchimp Transactional templates

<a id="opIdmctemplates/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/mctemplates/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "search_query": "welcome"
  }'
```

`POST /mctemplates/list`

Returns a list of all Mailchimp Transactional templates for the authenticated user

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "search_query": "welcome"
}
```

<h3 id="list-mailchimp-transactional-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MctemplatesListRequest](#schemamctemplateslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» search_query|body|string \| null|false|Optional search query to filter templates|

> Example responses

> 200 Response

```json
[
  {
    "mc_template_id": 12345,
    "mc_template_name": "Welcome Email",
    "labels": [],
    "code": "<div>Welcome!</div>",
    "subject": "Welcome to our service",
    "from_email": "support@example.com",
    "from_name": "Support Team",
    "text": "Welcome to our service!",
    "publish_code": "<div>Welcome!</div>",
    "publish_text": "Welcome to our service!",
    "published_at": "2025-08-29 18:47:40",
    "created_at": "2025-08-29 18:47:40.26276",
    "updated_at": "2025-08-29 18:47:40.26277",
    "draft_updated_at": "2025-08-29 18:47:40",
    "is_broken_template": false
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-mailchimp-transactional-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MctemplatesListResponse](#schemamctemplateslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Render a Mailchimp Transactional template

<a id="opIdmctemplates/render"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/mctemplates/render \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "mc_template_id": 12345,
    "mc_template_version": "published",
    "merge_vars": [
      {
        "name": "FIRSTNAME",
        "content": "John"
      }
    ]
  }'
```

`POST /mctemplates/render`

Renders a Mailchimp Transactional template with optional merge variables

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345,
  "mc_template_version": "published",
  "merge_vars": [
    {
      "name": "FIRSTNAME",
      "content": "John"
    }
  ]
}
```

<h3 id="render-a-mailchimp-transactional-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MctemplatesRenderRequest](#schemamctemplatesrenderrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» mc_template_id|body|integer|true|The Mailchimp template ID|
|» mc_template_version|body|string|false|The template version to render - "published" or "draft"|
|» merge_vars|body|[object]|false|Optional merge variables to inject into the template|
|» » name|body|string|false|Variable name|
|» » content|body|string|false|Variable value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mc_template_version|published|
|» mc_template_version|draft|

> Example responses

> 200 Response

```json
{
  "html": "<div>Welcome, John!</div>"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No Mailchimp template found with id 12345"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": 400,
  "name": "Invalid_Version",
  "message": "mc_template_version must be either \"draft\" or \"published\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="render-a-mailchimp-transactional-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MctemplatesRenderResponse](#schemamctemplatesrenderresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Mailchimp template not found|[MctemplateNotFoundError](#schemamctemplatenotfounderror)|
|422|Unprocessable Entity|Invalid mc_template_version parameter|[MctemplateInvalidVersionError](#schemamctemplateinvalidversionerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Mailchimp Transactional template time series

<a id="opIdmctemplates/time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/mctemplates/time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "mc_template_id": 12345
  }'
```

`POST /mctemplates/time-series`

Returns hourly stats for the last 30 days for a Mailchimp Transactional template. Returns an empty array if the template exists but has never been used to send messages.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345
}
```

<h3 id="get-mailchimp-transactional-template-time-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MctemplatesTimeSeriesRequest](#schemamctemplatestimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» mc_template_id|body|integer|true|The Mailchimp template ID|

> Example responses

> 200 Response

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No Mailchimp template found with id 12345"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-mailchimp-transactional-template-time-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MctemplatesTimeSeriesResponse](#schemamctemplatestimeseriesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Mailchimp template not found|[MctemplateNotFoundError](#schemamctemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-messages">Messages</h1>

Operations related to sending and managing messages

## Send a new transactional message through the Transactional API.

<a id="opIdmessages/send"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "message": {
      "html": "string",
      "text": "string",
      "subject": "string",
      "from_email": "message.from@example.com",
      "from_name": "Example Name",
      "to": [
        {
          "email": "to.email@example.com",
          "name": "Recipient Name",
          "type": "to"
        }
      ],
      "headers": {},
      "important": true,
      "track_opens": true,
      "track_clicks": true,
      "auto_text": true,
      "auto_html": true,
      "inline_css": true,
      "url_strip_qs": true,
      "preserve_recipients": true,
      "view_content_link": true,
      "bcc_address": "user@example.com",
      "tracking_domain": "string",
      "signing_domain": "string",
      "return_path_domain": "string",
      "merge": true,
      "merge_language": "mailchimp",
      "global_merge_vars": [
        {
          "name": "merge1",
          "content": "merge1 content"
        }
      ],
      "merge_vars": [
        {
          "rcpt": "recipient.email@example.com",
          "vars": [
            {
              "name": "merge1",
              "content": "merge1 content"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "subaccount": "string",
      "google_analytics_domains": [
        "string"
      ],
      "google_analytics_campaign": [
        "string"
      ],
      "metadata": {
        "website": "www.example.com"
      },
      "recipient_metadata": [
        {
          "rcpt": "recipient.email@example.com",
          "values": {
            "user_id": 123456
          }
        }
      ],
      "attachments": [
        {
          "type": "text/plain",
          "name": "myfile.txt",
          "content": "string"
        }
      ],
      "images": [
        {
          "type": "image/png",
          "name": "string",
          "content": "string"
        }
      ]
    },
    "async": true,
    "ip_pool": "string",
    "send_at": "1970-01-01T00:00:00Z"
  }'
```

`POST /messages/send`

Send a new transactional message through Mandrill

<table class="simple top30 errors">
     <thead><tr><th colspan="1">Note</th></tr></thead>
     <tbody>
         <tr>
             <td class="param-desc">
                 If you signed up for a Mandrill account on or after December 1st, 2015, you must add SPF and DKIM records and verify ownership of your sending domains before you can send email through your account. Mandrill will not send any email from unverified domains or domains without valid SPF and DKIM records, including public domains like gmail.com, yahoo.com, and more.<br><br>Custom signing domains are only available to Mandrill accounts created before December 1st, 2015. If you signed up for a new Mandrill account on or after December 1st, 2015, the signing_domain parameter will be ignored.<br><br>Mail sent from unverified domains or domains without valid SPF and DKIM records will be rejected with the reject_reason, unsigned.<br><br>Learn more about <a href='https://mailchimp.com/developer/transactional/docs/authentication-delivery/#authentication'>SPF and DKIM</a>, and <a href='https://mailchimp.com/developer/transactional/guides/send-first-email/#verify-domain-ownership'>domain verification</a>
             </td>
         </tr>
     </tbody>
 </table>

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="send-a-new-transactional-message-through-the-transactional-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSendRequest](#schemamessagessendrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» message|body|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|the information on the message to send|
|» async|body|boolean \| null|false|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|» ip_pool|body|string|false|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|» send_at|body|string(date-time)|false|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

> Example responses

> 200 Response

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 402 Response

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-a-new-transactional-message-through-the-transactional-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSendResponse](#schemamessagessendresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|402|Payment Required|A paid plan is required to use this feature.|[PaymentRequiredError](#schemapaymentrequirederror)|
|404|Not Found|Unknown subaccount|[MessageSubaccountNotFoundError](#schemamessagesubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Send a new transactional message using a template

<a id="opIdmessages/send-template"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/send-template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "template_name": "string",
    "template_content": [
      {
        "name": "string",
        "content": "string"
      }
    ],
    "message": {
      "html": "string",
      "text": "string",
      "subject": "string",
      "from_email": "message.from@example.com",
      "from_name": "Example Name",
      "to": [
        {
          "email": "to.email@example.com",
          "name": "Recipient Name",
          "type": "to"
        }
      ],
      "headers": {},
      "important": true,
      "track_opens": true,
      "track_clicks": true,
      "auto_text": true,
      "auto_html": true,
      "inline_css": true,
      "url_strip_qs": true,
      "preserve_recipients": true,
      "view_content_link": true,
      "bcc_address": "user@example.com",
      "tracking_domain": "string",
      "signing_domain": "string",
      "return_path_domain": "string",
      "merge": true,
      "merge_language": "mailchimp",
      "global_merge_vars": [
        {
          "name": "merge1",
          "content": "merge1 content"
        }
      ],
      "merge_vars": [
        {
          "rcpt": "recipient.email@example.com",
          "vars": [
            {
              "name": "merge1",
              "content": "merge1 content"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "subaccount": "string",
      "google_analytics_domains": [
        "string"
      ],
      "google_analytics_campaign": [
        "string"
      ],
      "metadata": {
        "website": "www.example.com"
      },
      "recipient_metadata": [
        {
          "rcpt": "recipient.email@example.com",
          "values": {
            "user_id": 123456
          }
        }
      ],
      "attachments": [
        {
          "type": "text/plain",
          "name": "myfile.txt",
          "content": "string"
        }
      ],
      "images": [
        {
          "type": "image/png",
          "name": "string",
          "content": "string"
        }
      ]
    },
    "async": true,
    "ip_pool": "string",
    "send_at": "1970-01-01T00:00:00Z"
  }'
```

`POST /messages/send-template`

Send a new transactional message using a template. If you signed up for a Mandrill account on or after December 1st, 2015, you must add SPF and DKIM records and verify ownership of your sending domains before you can send email through your account. Mandrill will not send any email from unverified domains or domains without valid SPF and DKIM records, including public domains like gmail.com, yahoo.com, and more. Custom signing domains are only available to Mandrill accounts created before December 1st, 2015. If you signed up for a new Mandrill account on or after December 1st, 2015, the signing_domain parameter will be ignored. Mail sent from unverified domains or domains without valid SPF and DKIM records will be rejected with the reject_reason, unsigned.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "template_name": "string",
  "template_content": [
    {
      "name": "string",
      "content": "string"
    }
  ],
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="send-a-new-transactional-message-using-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSendTemplateRequest](#schemamessagessendtemplaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» template_name|body|string|true|the immutable slug of a template that exists in the user's account. Make sure you don't use the template name as this one might change.|
|» template_content|body|[object]|true|an array of template content to send. Each item in the array should be a struct with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block|
|» » name|body|string|false|the name of the mc:edit editable region to inject into|
|» » content|body|string|false|the content to inject|
|» message|body|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|the other information on the message to send - same as /messages/send, but without the html content|
|» async|body|boolean \| null|false|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|» ip_pool|body|string|false|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|» send_at|body|string(date-time)|false|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

> Example responses

> 200 Response

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 402 Response

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

> 404 Response

```json
{
  "status": "error",
  "code": -100,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-a-new-transactional-message-using-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSendResponse](#schemamessagessendresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|402|Payment Required|A paid plan is required to use this feature.|[PaymentRequiredError](#schemapaymentrequirederror)|
|404|Not Found|Template or subaccount not found|Inline|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<h3 id="send-a-new-transactional-message-using-a-template-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Error](#schemaerror)|false|none|Unknown_Template: Template not found|
|*oneOf*|[Error](#schemaerror)|false|none|Unknown_Subaccount: Subaccount not found|

<aside class="success">
This operation does not require authentication
</aside>

## Send using Mailchimp template

<a id="opIdmessages/send-mc-template"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/send-mc-template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "mc_template_id": 12345,
    "mc_template_version": "published",
    "message": {
      "html": "string",
      "text": "string",
      "subject": "string",
      "from_email": "message.from@example.com",
      "from_name": "Example Name",
      "to": [
        {
          "email": "to.email@example.com",
          "name": "Recipient Name",
          "type": "to"
        }
      ],
      "headers": {},
      "important": true,
      "track_opens": true,
      "track_clicks": true,
      "auto_text": true,
      "auto_html": true,
      "inline_css": true,
      "url_strip_qs": true,
      "preserve_recipients": true,
      "view_content_link": true,
      "bcc_address": "user@example.com",
      "tracking_domain": "string",
      "signing_domain": "string",
      "return_path_domain": "string",
      "merge": true,
      "merge_language": "mailchimp",
      "global_merge_vars": [
        {
          "name": "merge1",
          "content": "merge1 content"
        }
      ],
      "merge_vars": [
        {
          "rcpt": "recipient.email@example.com",
          "vars": [
            {
              "name": "merge1",
              "content": "merge1 content"
            }
          ]
        }
      ],
      "tags": [
        "string"
      ],
      "subaccount": "string",
      "google_analytics_domains": [
        "string"
      ],
      "google_analytics_campaign": [
        "string"
      ],
      "metadata": {
        "website": "www.example.com"
      },
      "recipient_metadata": [
        {
          "rcpt": "recipient.email@example.com",
          "values": {
            "user_id": 123456
          }
        }
      ],
      "attachments": [
        {
          "type": "text/plain",
          "name": "myfile.txt",
          "content": "string"
        }
      ],
      "images": [
        {
          "type": "image/png",
          "name": "string",
          "content": "string"
        }
      ]
    },
    "async": true,
    "ip_pool": "string",
    "send_at": "1970-01-01T00:00:00Z"
  }'
```

`POST /messages/send-mc-template`

Send a new transactional message through Mandrill using a Mailchimp Transactional template.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345,
  "mc_template_version": "published",
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="send-using-mailchimp-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSendMcTemplateRequest](#schemamessagessendmctemplaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» mc_template_id|body|integer|true|the Mailchimp Transactional template ID from the user's account|
|» mc_template_version|body|string|false|which version of the template to use - "draft" for draft content or "published" for published content. Defaults to "published". Note: requesting "published" when the template has not been published will return a 404 error.|
|» message|body|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|the other information on the message to send - same as /messages/send|
|» async|body|boolean \| null|false|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|» ip_pool|body|string|false|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|» send_at|body|string(date-time)|false|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mc_template_version|draft|
|» mc_template_version|published|

> Example responses

> 200 Response

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 402 Response

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

> 404 Response

```json
{
  "status": "error",
  "code": -100,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-using-mailchimp-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSendResponse](#schemamessagessendresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|402|Payment Required|A paid plan is required to use this feature.|[PaymentRequiredError](#schemapaymentrequirederror)|
|404|Not Found|Template or subaccount not found|Inline|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<h3 id="send-using-mailchimp-template-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Error](#schemaerror)|false|none|Unknown_Template: Template not found|
|*oneOf*|[Error](#schemaerror)|false|none|Unknown_Subaccount: Subaccount not found|

<aside class="success">
This operation does not require authentication
</aside>

## Search recently sent messages

<a id="opIdmessages/search"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "query": "*",
    "date_from": "1970-01-01",
    "date_to": "1970-01-01",
    "tags": [
      "string"
    ],
    "senders": [
      "user@example.com"
    ],
    "api_keys": [
      "string"
    ],
    "limit": 100
  }'
```

`POST /messages/search`

Search recently sent messages and optionally narrow by date range, tags, senders, and API keys. Results can include both email and SMS messages. If no date range is specified, results within the last 7 days are returned.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "query": "*",
  "date_from": "1970-01-01",
  "date_to": "1970-01-01",
  "tags": [
    "string"
  ],
  "senders": [
    "user@example.com"
  ],
  "api_keys": [
    "string"
  ],
  "limit": 100
}
```

<h3 id="search-recently-sent-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSearchRequest](#schemamessagessearchrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» query|body|string|false|search terms to find matching messages|
|» date_from|body|string \| null(date)|false|start date|
|» date_to|body|string \| null(date)|false|end date|
|» tags|body|[string]|false|an array of tag names to narrow the search to|
|» senders|body|[string(email)]|false|an array of sender addresses to narrow the search to|
|» api_keys|body|[string]|false|an array of API keys to narrow the search to|
|» limit|body|integer|false|the maximum number of results to return, defaults to 100, upper limit of 1000|

> Example responses

> 200 Response

```json
[
  {
    "ts": 0,
    "_id": "string",
    "tags": [
      "string"
    ],
    "sender": "user@example.com",
    "template": "string",
    "mc_template": "string",
    "subject": "string",
    "email": "user@example.com",
    "opens": 0,
    "clicks": 0,
    "opens_detail": [
      {
        "ts": 0,
        "ip": "string",
        "location": "string",
        "ua": "string"
      }
    ],
    "clicks_detail": [
      {
        "ts": 0,
        "url": "string",
        "ip": "string",
        "location": "string",
        "ua": "string"
      }
    ],
    "state": "sent",
    "metadata": {},
    "smtp_events": [
      {
        "ts": 0,
        "type": "sent",
        "diag": "string",
        "source_ip": "192.0.2.1",
        "destination_ip": "198.2.132.48",
        "size": 0
      }
    ],
    "diag": "string",
    "subaccount": "string",
    "resends": [
      {}
    ],
    "reject": {
      "reason": "string",
      "last_event_at": "string"
    },
    "bounce_description": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

> 503 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ServiceUnavailable",
  "message": "Service Temporarily Unavailable"
}
```

<h3 id="search-recently-sent-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSearchResponse](#schemamessagessearchresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|
|503|Service Unavailable|Service unavailable|[MessageServiceUnavailableError](#schemamessageserviceunavailableerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get time series data for message search

<a id="opIdmessages/search-time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/search-time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "query": "email:gmail.com",
    "date_from": "2013-01-01",
    "date_to": "2013-01-02",
    "tags": [
      "password-reset",
      "welcome"
    ],
    "senders": [
      "sender@example.com"
    ]
  }'
```

`POST /messages/search-time-series`

Search the content of recently sent messages and return the aggregated hourly stats for matching messages.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "query": "email:gmail.com",
  "date_from": "2013-01-01",
  "date_to": "2013-01-02",
  "tags": [
    "password-reset",
    "welcome"
  ],
  "senders": [
    "sender@example.com"
  ]
}
```

<h3 id="get-time-series-data-for-message-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSearchTimeSeriesRequest](#schemamessagessearchtimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» query|body|string|false|the search terms to find matching messages for|
|» date_from|body|string \| null(date)|false|start date|
|» date_to|body|string \| null(date)|false|end date|
|» tags|body|[string]|false|an array of tag names to narrow the search to, will return messages that contain ANY of the tags|
|» senders|body|[string(email)]|false|an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders|

> Example responses

> 200 Response

```json
[
  {
    "time": "2025-08-29 18:00:00",
    "sent": 0,
    "opens": 0,
    "clicks": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "unique_opens": 0,
    "unique_clicks": 0
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

> 503 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ServiceUnavailable",
  "message": "Service Temporarily Unavailable"
}
```

<h3 id="get-time-series-data-for-message-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSearchTimeSeriesResponse](#schemamessagessearchtimeseriesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|
|503|Service Unavailable|Service unavailable|[MessageServiceUnavailableError](#schemamessageserviceunavailableerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get information about a single sent message

<a id="opIdmessages/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "abc123abc123abc123abc123abc123"
  }'
```

`POST /messages/info`

Returns detailed information about a single sent message. Can return either email or SMS message information depending on the message type.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "abc123abc123abc123abc123abc123"
}
```

<h3 id="get-information-about-a-single-sent-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesInfoRequest](#schemamessagesinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls|

> Example responses

> 200 Response

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "sender": "user@example.com",
  "template": "string",
  "mc_template": "string",
  "subject": "string",
  "email": "user@example.com",
  "opens": 0,
  "clicks": 0,
  "opens_detail": [
    {
      "ts": 0,
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "clicks_detail": [
    {
      "ts": 0,
      "url": "string",
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "state": "sent",
  "metadata": {},
  "smtp_events": [
    {
      "ts": 0,
      "type": "sent",
      "diag": "string",
      "source_ip": "192.0.2.1",
      "destination_ip": "198.2.132.48",
      "size": 0
    }
  ],
  "diag": "string",
  "subaccount": "string",
  "resends": [
    {}
  ],
  "reject": {
    "reason": "string",
    "last_event_at": "string"
  },
  "bounce_description": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No message exists with the id McyuzyCS5M3bubeGPP-XVA"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-information-about-a-single-sent-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesInfoResponse](#schemamessagesinforesponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Message not found|[MessageNotFoundError](#schemamessagenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the full content of a sent message

<a id="opIdmessages/content"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/content \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "abc123abc123abc123abc123abc123"
  }'
```

`POST /messages/content`

Returns the full content of a recently sent message. For email messages, includes HTML, text, and attachments. For SMS messages, includes text content and SMS-specific fields.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "abc123abc123abc123abc123abc123"
}
```

<h3 id="get-the-full-content-of-a-sent-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesContentRequest](#schemamessagescontentrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls|

> Example responses

> 200 Response

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "from_email": "user@example.com",
  "from_name": "string",
  "subject": "string",
  "to": {
    "email": "user@example.com",
    "name": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "text": "string",
  "html": "string",
  "attachments": [
    {
      "name": "string",
      "type": "string",
      "content": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No message exists with the id McyuzyCS5M3bubeGPP-XVA"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-the-full-content-of-a-sent-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesContentResponse](#schemamessagescontentresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Message not found|[MessageNotFoundError](#schemamessagenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Parse a MIME message

<a id="opIdmessages/parse"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/parse \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "raw_message": "From: sender@example.com\\nTo: recipient.email@example.com\\nSubject: Some Subject\\n\\nSome content."
  }'
```

`POST /messages/parse`

Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "From: sender@example.com\\nTo: recipient.email@example.com\\nSubject: Some Subject\\n\\nSome content."
}
```

<h3 id="parse-a-mime-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesParseRequest](#schemamessagesparserequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» raw_message|body|string|true|the full MIME document of an email message|

> Example responses

> 200 Response

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "text": "string",
  "text_flowed": true,
  "attachments": [
    {
      "name": "string",
      "type": "string",
      "content": "string",
      "binary": true
    }
  ],
  "from_email": "user@example.com",
  "from_name": "string",
  "html": "string",
  "to": [
    {
      "email": "user@example.com",
      "name": "string"
    }
  ],
  "subject": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="parse-a-mime-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesParseResponse](#schemamessagesparseresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Send a raw MIME message through Mandrill

<a id="opIdmessages/send-raw"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/send-raw \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "raw_message": "string",
    "from_email": "user@example.com",
    "from_name": "string",
    "to": [
      "recipient.email@example.com"
    ],
    "async": true,
    "ip_pool": "string",
    "send_at": "1970-01-01T00:00:00Z",
    "return_path_domain": null
  }'
```

`POST /messages/send-raw`

Send a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "string",
  "from_email": "user@example.com",
  "from_name": "string",
  "to": [
    "recipient.email@example.com"
  ],
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z",
  "return_path_domain": null
}
```

<h3 id="send-a-raw-mime-message-through-mandrill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSendRawRequest](#schemamessagessendrawrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» raw_message|body|string|true|the full MIME document of an email message|
|» from_email|body|string \| null(email)|false|optionally define the sender address - otherwise we'll use the address found in the provided headers|
|» from_name|body|string \| null|false|optionally define the sender alias|
|» to|body|[string(email)]|false|optionally define the recipient to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document|
|» async|body|boolean \| null|false|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|» ip_pool|body|string|false|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|» send_at|body|string(date-time)|false|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|
|» return_path_domain|body|string \| null|false|a custom domain to use for the messages' return-path|

> Example responses

> 200 Response

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 402 Response

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-a-raw-mime-message-through-mandrill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSendResponse](#schemamessagessendresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|402|Payment Required|A paid plan is required to use this feature.|[PaymentRequiredError](#schemapaymentrequirederror)|
|404|Not Found|Unknown subaccount|[MessageSubaccountNotFoundError](#schemamessagesubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get scheduled emails

<a id="opIdmessages/list-scheduled"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/list-scheduled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "to": "test.recipient@example.com"
  }'
```

`POST /messages/list-scheduled`

Queries your scheduled emails.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "to": "test.recipient@example.com"
}
```

<h3 id="get-scheduled-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesListScheduledRequest](#schemamessageslistscheduledrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» to|body|string \| null(email)|false|an optional recipient address to restrict results to|

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "created_at": "2025-08-29 18:47:42",
    "send_at": "2025-09-05 18:47:41",
    "from_email": "user@example.com",
    "to": "user@example.com",
    "subject": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-scheduled-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesListScheduledResponse](#schemamessageslistscheduledresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a scheduled email

<a id="opIdmessages/cancel-scheduled"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/cancel-scheduled \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "I_dtFt2ZNPW5QD9-FaDU1A"
  }'
```

`POST /messages/cancel-scheduled`

Cancels a scheduled email.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "I_dtFt2ZNPW5QD9-FaDU1A"
}
```

<h3 id="cancel-a-scheduled-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesCancelScheduledRequest](#schemamessagescancelscheduledrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "created_at": "2025-08-29 18:47:42",
  "send_at": "2025-09-05 18:47:41",
  "from_email": "user@example.com",
  "to": "user@example.com",
  "subject": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No message exists with the id McyuzyCS5M3bubeGPP-XVA"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="cancel-a-scheduled-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesScheduled](#schemamessagesscheduled)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Message not found|[MessageNotFoundError](#schemamessagenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Reschedule a scheduled email

<a id="opIdmessages/reschedule"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/reschedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "I_dtFt2ZNPW5QD9-FaDU1A",
    "send_at": "2020-06-01 08:15:01"
  }'
```

`POST /messages/reschedule`

Reschedules a scheduled email.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "I_dtFt2ZNPW5QD9-FaDU1A",
  "send_at": "2020-06-01 08:15:01"
}
```

<h3 id="reschedule-a-scheduled-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesRescheduleRequest](#schemamessagesreschedulerequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled|
|» send_at|body|string(date-time)|true|the new UTC timestamp when the message should sent. Mandrill can't time travel, so if you specify a time in past the message will be sent immediately|

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "created_at": "2025-08-29 18:47:42",
  "send_at": "2025-09-05 18:47:41",
  "from_email": "user@example.com",
  "to": "user@example.com",
  "subject": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No message exists with the id McyuzyCS5M3bubeGPP-XVA"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="reschedule-a-scheduled-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesScheduled](#schemamessagesscheduled)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Message not found|[MessageNotFoundError](#schemamessagenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Send SMS message

<a id="opIdmessages/send-sms"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/messages/send-sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "message": {
      "sms": {
        "text": "Hello from Mandrill SMS!",
        "to": [
          "+10000000000",
          "+10000000001"
        ],
        "from": "+10000000000",
        "consent": "onetime",
        "track_clicks": true
      },
      "merge": true,
      "merge_language": "string",
      "global_merge_vars": [
        {
          "name": "merge1",
          "content": "merge1 content"
        }
      ],
      "merge_vars": [
        {
          "rcpt": "+11234567890",
          "vars": [
            {
              "name": "merge1",
              "content": "merge1 content"
            }
          ]
        }
      ]
    },
    "async": true
  }'
```

`POST /messages/send-sms`

Send a new SMS message through Mandrill

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "message": {
    "sms": {
      "text": "Hello from Mandrill SMS!",
      "to": [
        "+10000000000",
        "+10000000001"
      ],
      "from": "+10000000000",
      "consent": "onetime",
      "track_clicks": true
    },
    "merge": true,
    "merge_language": "string",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "+11234567890",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ]
  },
  "async": true
}
```

<h3 id="send-sms-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSendSmsRequest](#schemamessagessendsmsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» message|body|object|true|none|
|» » sms|body|object|true|none|
|» » » text|body|string|true|The SMS message content to be sent.|
|» » » to|body|[string]|true|The phone numbers to send the SMS to.|
|» » » from|body|string|true|The phone number to send the SMS from.|
|» » » consent|body|string|true|The consent type for this SMS|
|» » » track_clicks|body|boolean|false|whether or not to turn on click tracking for the message|
|» » merge|body|boolean|false|Whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.|
|» » merge_language|body|string|false|the merge tag language to use when evaluating merge tags, either mailchimp or handlebars Possible values: "mailchimp" or "handlebars".|
|» » global_merge_vars|body|[[MergeVar](#schemamergevar)]|false|global merge variables to use for all recipients. You can override these per recipient.|
|» » merge_vars|body|[object]|false|per-recipient merge variables, which override global merge variables with the same name.|
|» » » rcpt|body|string|false|Phone number of the recipient|
|» » » vars|body|[[MergeVar](#schemamergevar)]|false|Recipient-specific merge variables|
|» async|body|boolean \| null|false|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send-sms will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » consent|onetime|
|» » » consent|recurring|
|» » » consent|recurring-no-confirm|

> Example responses

> 200 Response

```json
[
  {
    "to": "+10000000000",
    "from": "+10000000000",
    "status": "sent",
    "reject_reason": null,
    "queue_reason": null,
    "_id": "d451905551f64e279440e833d25b7ff0"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="send-sms-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessagesSendSmsResponse](#schemamessagessendsmsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount for SMS message|[MessageSmsSubaccountNotFoundError](#schemamessagesmssubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-metadata">Metadata</h1>

Operations for managing custom metadata fields

## List custom metadata fields

<a id="opIdmetadata/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/metadata/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /metadata/list`

Get the list of custom metadata fields indexed for the account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-custom-metadata-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MetadataListRequest](#schemametadatalistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "name": "group_id",
    "state": "active",
    "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-custom-metadata-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetadataListResponse](#schemametadatalistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add custom metadata field

<a id="opIdmetadata/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/metadata/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "group_id",
    "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
  }'
```

`POST /metadata/add`

Add a new custom metadata field to be indexed for the account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

<h3 id="add-custom-metadata-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MetadataAddRequest](#schemametadataaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|A unique identifier for the metadata field|
|» view_template|body|string \| null|false|Optional Mustache template to control how the metadata is rendered in your activity log|

> Example responses

> 200 Response

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-custom-metadata-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetadataResponseData](#schemametadataresponsedata)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update custom metadata field

<a id="opIdmetadata/update"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/metadata/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "group_id",
    "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
  }'
```

`POST /metadata/update`

Update an existing custom metadata field

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

<h3 id="update-custom-metadata-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MetadataUpdateRequest](#schemametadataupdaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|The unique identifier of the metadata field to update|
|» view_template|body|string|true|Mustache template to control how the metadata is rendered in your activity log|

> Example responses

> 200 Response

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 24,
  "name": "Unknown_MetadataField",
  "message": "Invalid metadata field name: group_id"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="update-custom-metadata-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetadataResponseData](#schemametadataresponsedata)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown metadata field|[MetadataNotFoundError](#schemametadatanotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete custom metadata field

<a id="opIdmetadata/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/metadata/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "group_id"
  }'
```

`POST /metadata/delete`

Delete an existing custom metadata field. Deletion is not instantaneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id"
}
```

<h3 id="delete-custom-metadata-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MetadataDeleteRequest](#schemametadatadeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|The unique identifier of the metadata field to delete|

> Example responses

> 200 Response

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 24,
  "name": "Unknown_MetadataField",
  "message": "Invalid metadata field name: group_id"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-custom-metadata-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetadataResponseData](#schemametadataresponsedata)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown metadata field|[MetadataNotFoundError](#schemametadatanotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-rejects">Rejects</h1>

Operations for managing email rejection blacklist

## Add email to rejection blacklist

<a id="opIdrejects/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user@example.com",
    "comment": "Manually blocked due to spam complaints",
    "subaccount": "cust-123"
  }'
```

`POST /rejects/add`

Adds an email to your email rejection denylist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your denylist. Attempting to denylist an address that has been whitelisted will have no effect.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "comment": "Manually blocked due to spam complaints",
  "subaccount": "cust-123"
}
```

<h3 id="add-email-to-rejection-blacklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsAddRequest](#schemarejectsaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string(email)|true|An email address to block|
|» comment|body|string|false|An optional comment describing the rejection|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the blacklist entry|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "added": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-email-to-rejection-blacklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsAddResponse](#schemarejectsaddresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[RejectSubaccountNotFoundError](#schemarejectsubaccountnotfounderror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add phone number to SMS rejection denylist

<a id="opIdrejects/add-sms"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/add-sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "phone": "+12025551234",
    "comment": "Manually blocked due to spam",
    "subaccount": "cust-123"
  }'
```

`POST /rejects/add-sms`

Adds a phone number to your SMS rejection denylist. Phone numbers that you add manually will never expire and there is no reputation penalty for removing them from your denylist.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "comment": "Manually blocked due to spam",
  "subaccount": "cust-123"
}
```

<h3 id="add-phone-number-to-sms-rejection-denylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsAddSmsRequest](#schemarejectsaddsmsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» phone|body|string|true|A phone number to block in E.164 format|
|» comment|body|string|false|An optional comment describing the rejection|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the denylist entry|

> Example responses

> 200 Response

```json
{
  "phone": "+12025551234",
  "added": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-phone-number-to-sms-rejection-denylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsSmsReject](#schemarejectssmsreject)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[RejectSubaccountNotFoundError](#schemarejectsubaccountnotfounderror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List rejection blacklist entries

<a id="opIdrejects/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user@example.com",
    "include_expired": false,
    "subaccount": "cust-123"
  }'
```

`POST /rejects/list`

Retrieves your email rejection denylist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "include_expired": false,
  "subaccount": "cust-123"
}
```

<h3 id="list-rejection-blacklist-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsListRequest](#schemarejectslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string|false|An optional email address to search by|
|» include_expired|body|boolean|false|Whether to include rejections that have already expired|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the blacklist|

> Example responses

> 200 Response

```json
[
  {
    "email": "user1@example.com",
    "reason": "hard-bounce",
    "detail": "550 5.1.1 User unknown",
    "created_at": "2023-01-15 10:30:00",
    "last_event_at": "2023-01-15 10:30:00",
    "expires_at": "2023-02-15 10:30:00",
    "expired": false,
    "sender": null,
    "subaccount": null
  },
  {
    "email": "user2@example.com",
    "reason": "spam",
    "detail": "Manually blocked due to spam complaints",
    "created_at": "2023-01-10 14:20:00",
    "last_event_at": "2023-01-10 14:20:00",
    "expires_at": "2023-02-10 14:20:00",
    "expired": false,
    "sender": {
      "address": "sender@example.com",
      "created_at": "2023-01-01 00:00:00",
      "sent": 100,
      "hard_bounces": 5,
      "soft_bounces": 2,
      "rejects": 7,
      "complaints": 1,
      "unsubs": 3
    },
    "subaccount": "subaccount-123"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 429 Response

```json
{
  "status": "error",
  "code": 429,
  "name": "RequestLimitExceeded",
  "message": "Too Many Requests attempted recently"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-rejection-blacklist-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsListResponse](#schemarejectslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[RejectSubaccountNotFoundError](#schemarejectsubaccountnotfounderror)|
|429|Too Many Requests|Request rate limit exceeded. Retry after a brief delay.|[RequestLimitExceededError](#schemarequestlimitexceedederror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List SMS rejection denylist entries

<a id="opIdrejects/list-sms"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/list-sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "phone": "+12025551234",
    "include_expired": false,
    "subaccount": "cust-123"
  }'
```

`POST /rejects/list-sms`

Retrieves your SMS rejection denylist. You can provide a phone number to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "include_expired": false,
  "subaccount": "cust-123"
}
```

<h3 id="list-sms-rejection-denylist-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsListSmsRequest](#schemarejectslistsmsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» phone|body|string|false|An optional phone number to search by in E.164 format|
|» include_expired|body|boolean|false|Whether to include rejections that have already expired|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the denylist|

> Example responses

> 200 Response

```json
[
  {
    "phone": "+12025551234",
    "created_at": "2023-01-15 10:30:00",
    "expires_at": null,
    "expired": false,
    "subaccount": null
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 429 Response

```json
{
  "status": "error",
  "code": 429,
  "name": "RequestLimitExceeded",
  "message": "Too Many Requests attempted recently"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-sms-rejection-denylist-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsListSmsResponse](#schemarejectslistsmsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|429|Too Many Requests|Request rate limit exceeded. Retry after a brief delay.|[RequestLimitExceededError](#schemarequestlimitexceedederror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete email from rejection blacklist

<a id="opIdrejects/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "email": "user@example.com",
    "subaccount": "cust-123"
  }'
```

`POST /rejects/delete`

Deletes an email rejection. There is no limit to how many rejections you can remove from your denylist, but keep in mind that each deletion has an affect on your reputation.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "subaccount": "cust-123"
}
```

<h3 id="delete-email-from-rejection-blacklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsDeleteRequest](#schemarejectsdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» email|body|string(email)|true|An email address to remove from the blacklist|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the blacklist deletion|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "deleted": true,
  "subaccount": "cust-123"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 4,
  "name": "Invalid_Reject",
  "message": "Email address is not in the rejection list and is not invalid"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-email-from-rejection-blacklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsDeleteResponse](#schemarejectsdeleteresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Email not found in rejection list or unknown subaccount|[RejectEmailNotFoundError](#schemarejectemailnotfounderror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete phone number from SMS rejection denylist

<a id="opIdrejects/delete-sms"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/rejects/delete-sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "phone": "+12025551234",
    "subaccount": "cust-123"
  }'
```

`POST /rejects/delete-sms`

Deletes an SMS rejection. There is no limit to how many rejections you can remove from your denylist, but keep in mind that each deletion has an affect on your reputation.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "subaccount": "cust-123"
}
```

<h3 id="delete-phone-number-from-sms-rejection-denylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RejectsDeleteSmsRequest](#schemarejectsdeletesmsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» phone|body|string|true|A phone number in E.164 format|
|» subaccount|body|string|false|An optional unique identifier for the subaccount to limit the denylist deletion|

> Example responses

> 200 Response

```json
{
  "phone": "+12025551234",
  "added": true
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 4,
  "name": "Invalid_Reject",
  "message": "Phone number is not in the rejection list"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-phone-number-from-sms-rejection-denylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectsSmsReject](#schemarejectssmsreject)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Phone number not found in rejection list or unknown subaccount|[RejectPhoneNotFoundError](#schemarejectphonenotfounderror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-senders">Senders</h1>

Sender analytics and domain verification operations

## List senders used by this account

<a id="opIdsenders/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /senders/list`

Return the senders that have tried to use this account.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-senders-used-by-this-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersListRequest](#schemasenderslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "address": "sender.example@mandrillapp.com",
    "created_at": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-senders-used-by-this-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersListResponse](#schemasenderslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List sender domains

<a id="opIdsenders/domains"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /senders/domains`

Returns the sender domains that have been added to this account.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-sender-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersDomainsRequest](#schemasendersdomainsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "domain": "example.com",
    "created_at": "1970-01-01T00:00:00Z",
    "last_tested_at": "1970-01-01T00:00:00Z",
    "spf": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dkim": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dkim2": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dmarc": {
      "valid": true,
      "error": "string"
    },
    "verified_at": "1970-01-01T00:00:00Z",
    "valid_signing": true,
    "verify_txt_key": "string"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-sender-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersDomainsResponse](#schemasendersdomainsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a sender domain

<a id="opIdsenders/add-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/add-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "example.com"
  }'
```

`POST /senders/add-domain`

Adds a sender domain to your account. Sender domains are added automatically as you send, but you can add them ahead of time.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

<h3 id="add-a-sender-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersAddDomainRequest](#schemasendersadddomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|none|

> Example responses

> 200 Response

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-a-sender-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersSenderDomain](#schemasenderssenderdomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Check domain SPF and DKIM

<a id="opIdsenders/check-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/check-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "example.com"
  }'
```

`POST /senders/check-domain`

Checks the SPF and DKIM settings for a domain. If it isn't already added to your account, it will be added automatically.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

<h3 id="check-domain-spf-and-dkim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersCheckDomainRequest](#schemasenderscheckdomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|none|

> Example responses

> 200 Response

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="check-domain-spf-and-dkim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersSenderDomain](#schemasenderssenderdomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a sender domain by email

<a id="opIdsenders/verify-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/verify-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "example.com",
    "mailbox": "postmaster"
  }'
```

`POST /senders/verify-domain`

Sends a verification email in order to verify ownership of a domain.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com",
  "mailbox": "postmaster"
}
```

<h3 id="verify-a-sender-domain-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersVerifyDomainRequest](#schemasendersverifydomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|A domain name at which you can receive email|
|» mailbox|body|string(mailbox)|true|A mailbox at the domain where the verification email should be sent|

> Example responses

> 200 Response

```json
{
  "status": "sent",
  "domain": "example.com",
  "email": "postmaster@example.com"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="verify-a-sender-domain-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersVerifyDomainResponse](#schemasendersverifydomainresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get detailed information for a sender

<a id="opIdsenders/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "address": "sender.example@mandrillapp.com"
  }'
```

`POST /senders/info`

Return more detailed information about a single sender, including aggregates of recent stats.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "address": "sender.example@mandrillapp.com"
}
```

<h3 id="get-detailed-information-for-a-sender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersInfoRequest](#schemasendersinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» address|body|string(email)|true|The email address of the sender|

> Example responses

> 200 Response

```json
{
  "address": "sender.example@mandrillapp.com",
  "created_at": "2013-01-01 15:30:27",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "unique_opens": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 2,
  "name": "Unknown_Sender",
  "message": "No such sender \"example@mandrill.com\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-detailed-information-for-a-sender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersInfoResponse](#schemasendersinforesponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown sender|[SenderNotFoundError](#schemasendernotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get hourly stats for a sender

<a id="opIdsenders/time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "address": "sender.example@mandrillapp.com"
  }'
```

`POST /senders/time-series`

Return the recent history (hourly stats for the last 30 days) for a sender.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "address": "sender.example@mandrillapp.com"
}
```

<h3 id="get-hourly-stats-for-a-sender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersTimeSeriesRequest](#schemasenderstimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» address|body|string(email)|true|The email address of the sender|

> Example responses

> 200 Response

```json
[
  {
    "time": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 2,
  "name": "Unknown_Sender",
  "message": "No such sender \"example@mandrill.com\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-hourly-stats-for-a-sender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersTimeSeriesResponse](#schemasenderstimeseriesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown sender|[SenderNotFoundError](#schemasendernotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a sender domain

<a id="opIdsenders/delete-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/senders/delete-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "example.com"
  }'
```

`POST /senders/delete-domain`

Deletes an unverified sender domain from your account. Verified domains cannot be deleted via API and require login confirmation.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

<h3 id="delete-a-sender-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendersDeleteDomainRequest](#schemasendersdeletedomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|the domain name to delete|

> Example responses

> 200 Response

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 403 Response

```json
{
  "status": "error",
  "code": 28,
  "name": "Invalid_Verified_Domain",
  "message": "Cannot delete verified domain \"example.com\" via API - please login to confirm deletion"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_Domain",
  "message": "No such domain \"example.com\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-a-sender-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendersSenderDomain](#schemasenderssenderdomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|403|Forbidden|Cannot delete verified sender domain — please login to confirm deletion|[SenderCannotDeleteVerifiedError](#schemasendercannotdeleteverifiederror)|
|404|Not Found|Unknown sender domain|[SenderDomainNotFoundError](#schemasenderdomainnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-subaccounts">Subaccounts</h1>

Operations for managing subaccounts including creation, configuration, and status control

## List subaccounts

<a id="opIdsubaccounts/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "q": "cust-1"
  }'
```

`POST /subaccounts/list`

Get the list of subaccounts defined for the account, optionally filtered by a prefix. Returns up to a maximum of 1,000 subaccounts.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "q": "cust-1"
}
```

<h3 id="list-subaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsListRequest](#schemasubaccountslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» q|body|string|false|An optional prefix to filter the subaccounts' ids and names|

> Example responses

> 200 Response

```json
[
  {
    "id": "4532345",
    "name": "My Subaccount",
    "created_at": "2025-08-29 18:48:02.82578",
    "first_sent_at": null,
    "status": "active",
    "reputation": 33,
    "sent_weekly": 0,
    "sent_monthly": 0,
    "sent_total": 0,
    "custom_quota": 1
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-subaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsListResponse](#schemasubaccountslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new subaccount

<a id="opIdsubaccounts/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123",
    "name": "ABC Widgets, Inc.",
    "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
    "custom_quota": null
  }'
```

`POST /subaccounts/add`

Create a new subaccount with the specified configuration. The subaccount can be used to organize and track sending for different customers or purposes.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123",
  "name": "ABC Widgets, Inc.",
  "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
  "custom_quota": null
}
```

<h3 id="add-a-new-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsAddRequest](#schemasubaccountsaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|A unique identifier for the subaccount to be used in sending calls|
|» name|body|string \| null|false|An optional display name to further identify the subaccount|
|» notes|body|string \| null|false|Optional extra text to associate with the subaccount|
|» custom_quota|body|integer \| null|false|An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-a-new-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsSubaccount](#schemasubaccountssubaccount)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|One or more request parameters failed validation.|[ValidationError](#schemavalidationerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get subaccount information

<a id="opIdsubaccounts/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123"
  }'
```

`POST /subaccounts/info`

Retrieve detailed information about a specific subaccount including sending statistics and configuration.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

<h3 id="get-subaccount-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsInfoRequest](#schemasubaccountsinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of the subaccount to query|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1,
  "sent_hourly": 0,
  "hourly_quota": 250,
  "notes": "",
  "last_30_days": {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-subaccount-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsInfoResponse](#schemasubaccountsinforesponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[SubaccountNotFoundError](#schemasubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing subaccount

<a id="opIdsubaccounts/update"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123",
    "name": "ABC Widgets, Inc.",
    "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
    "custom_quota": null
  }'
```

`POST /subaccounts/update`

Update the configuration of an existing subaccount including name, notes, and custom quota settings.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123",
  "name": "ABC Widgets, Inc.",
  "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
  "custom_quota": null
}
```

<h3 id="update-an-existing-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsUpdateRequest](#schemasubaccountsupdaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of the subaccount to update|
|» name|body|string \| null|false|An optional display name to further identify the subaccount|
|» notes|body|string \| null|false|Optional extra text to associate with the subaccount|
|» custom_quota|body|integer \| null|false|An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="update-an-existing-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsSubaccount](#schemasubaccountssubaccount)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[SubaccountNotFoundError](#schemasubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a subaccount

<a id="opIdsubaccounts/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123"
  }'
```

`POST /subaccounts/delete`

Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

<h3 id="delete-a-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsDeleteRequest](#schemasubaccountsdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of the subaccount to delete|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-a-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsSubaccount](#schemasubaccountssubaccount)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[SubaccountNotFoundError](#schemasubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Pause a subaccount

<a id="opIdsubaccounts/pause"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123"
  }'
```

`POST /subaccounts/pause`

Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

<h3 id="pause-a-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsPauseRequest](#schemasubaccountspauserequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of the subaccount to pause|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="pause-a-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsSubaccount](#schemasubaccountssubaccount)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[SubaccountNotFoundError](#schemasubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resume a paused subaccount

<a id="opIdsubaccounts/resume"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/subaccounts/resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": "cust-123"
  }'
```

`POST /subaccounts/resume`

Resume a paused subaccount's sending. The subaccount will return to active status and queued emails will be processed.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

<h3 id="resume-a-paused-subaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubaccountsResumeRequest](#schemasubaccountsresumerequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|string|true|The unique identifier of the subaccount to resume|

> Example responses

> 200 Response

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="resume-a-paused-subaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubaccountsSubaccount](#schemasubaccountssubaccount)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown subaccount|[SubaccountNotFoundError](#schemasubaccountnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-tags">Tags</h1>

Operations related to managing and analyzing user-defined tags

## List all user-defined tags

<a id="opIdtags/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/tags/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /tags/list`

Return all of the user-defined tag information

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="list-all-user-defined-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagsListRequest](#schematagslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "user_id": 0,
    "tag": "test",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "content_reviews": 0,
    "content_rejections": 0,
    "reject_resets": 0,
    "unique_opens": 0,
    "unique_clicks": 0,
    "reputation": 0,
    "confidence": 0
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-all-user-defined-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsListResponse](#schematagslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag permanently

<a id="opIdtags/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/tags/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "tag": "example-tag"
  }'
```

`POST /tags/delete`

Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

<h3 id="delete-a-tag-permanently-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagsDeleteRequest](#schematagsdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» tag|body|string|true|An existing tag name|

> Example responses

> 200 Response

```json
{
  "tag": "example-tag",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_opens": 0,
  "unique_clicks": 0,
  "reputation": 0
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 1,
  "name": "Invalid_Tag_Name",
  "message": "no such tag \"mytag\""
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-a-tag-permanently-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsDeleteResponse](#schematagsdeleteresponse)|
|400|Bad Request|Invalid tag name|[TagInvalidNameError](#schemataginvalidnameerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get detailed information about a tag

<a id="opIdtags/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/tags/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "tag": "example-tag"
  }'
```

`POST /tags/info`

Return more detailed information about a single tag, including aggregates of recent stats

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

<h3 id="get-detailed-information-about-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagsInfoRequest](#schematagsinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» tag|body|string|true|An existing tag name|

> Example responses

> 200 Response

```json
{
  "tag": "test",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_opens": 0,
  "unique_clicks": 0,
  "reputation": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 1,
  "name": "Invalid_Tag_Name",
  "message": "no such tag \"mytag\""
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-detailed-information-about-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsInfoResponse](#schematagsinforesponse)|
|400|Bad Request|Invalid tag name|[TagInvalidNameError](#schemataginvalidnameerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get time series data for a specific tag

<a id="opIdtags/time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/tags/time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "tag": "example-tag"
  }'
```

`POST /tags/time-series`

Return the recent history (hourly stats for the last 30 days) for a tag

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

<h3 id="get-time-series-data-for-a-specific-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagsTimeSeriesRequest](#schematagstimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» tag|body|string|true|An existing tag name|

> Example responses

> 200 Response

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00"
  }
]
```

> 400 Response

```json
{
  "status": "error",
  "code": 1,
  "name": "Invalid_Tag_Name",
  "message": "no such tag \"mytag\""
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-time-series-data-for-a-specific-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsTimeSeriesResponse](#schematagstimeseriesresponse)|
|400|Bad Request|Invalid tag name|[TagInvalidNameError](#schemataginvalidnameerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get time series data for all tags

<a id="opIdtags/all-time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/tags/all-time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /tags/all-time-series`

Return the recent history (hourly stats for the last 30 days) for all tags

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="get-time-series-data-for-all-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagsAllTimeSeriesRequest](#schematagsalltimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00",
    "tag": "test"
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-time-series-data-for-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagsAllTimeSeriesResponse](#schematagsalltimeseriesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-templates">Templates</h1>

Operations for managing email templates including creation, updating, publishing, and rendering

## Add a new template

<a id="opIdtemplates/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "Example Template",
    "from_email": "sender@example.com",
    "from_name": "Example Name",
    "subject": "Welcome to our service",
    "code": "<div>example code</div>",
    "text": "Example text content",
    "publish": true,
    "labels": [
      "example-label"
    ]
  }'
```

`POST /templates/add`

Creates a new email template with the specified content and settings.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template",
  "from_email": "sender@example.com",
  "from_name": "Example Name",
  "subject": "Welcome to our service",
  "code": "<div>example code</div>",
  "text": "Example text content",
  "publish": true,
  "labels": [
    "example-label"
  ]
}
```

<h3 id="add-a-new-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesAddRequest](#schematemplatesaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Name for the new template - must be unique|
|» from_email|body|string \| null(email)|false|Default sending address for emails sent using this template|
|» from_name|body|string \| null|false|Default from name to be used|
|» subject|body|string \| null|false|Default subject line to be used|
|» code|body|string \| null|false|HTML code for the template with mc:edit attributes for editable elements|
|» text|body|string \| null|false|Default text part to be used when sending with this template|
|» publish|body|boolean|false|Set to false to add a draft template without publishing|
|» labels|body|[string]|false|Optional array of up to 10 labels to use for filtering templates|

> Example responses

> 200 Response

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 422 Response

```json
{
  "status": "error",
  "code": 6,
  "name": "Invalid_Template",
  "message": "A template with name \"MyTemplate\" already exists"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-a-new-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTemplate](#schematemplatestemplate)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|422|Unprocessable Entity|Invalid template data|[TemplateInvalidDataError](#schematemplateinvaliddataerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get template information

<a id="opIdtemplates/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "Example Template"
  }'
```

`POST /templates/info`

Retrieves information for an existing template.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

<h3 id="get-template-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesInfoRequest](#schematemplatesinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Immutable name of an existing template|

> Example responses

> 200 Response

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-template-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTemplate](#schematemplatestemplate)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing template

<a id="opIdtemplates/update"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "Example Template",
    "from_email": "sender@example.com",
    "from_name": "Example Name",
    "subject": "Welcome to our service",
    "code": "<div>new example code</div>",
    "text": "Example text content",
    "publish": true,
    "labels": [
      "example-label"
    ]
  }'
```

`POST /templates/update`

Updates the code for an existing template. If null is provided for any fields, the values will remain unchanged.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template",
  "from_email": "sender@example.com",
  "from_name": "Example Name",
  "subject": "Welcome to our service",
  "code": "<div>new example code</div>",
  "text": "Example text content",
  "publish": true,
  "labels": [
    "example-label"
  ]
}
```

<h3 id="update-an-existing-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesUpdateRequest](#schematemplatesupdaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Immutable name of an existing template|
|» from_email|body|string \| null(email)|false|New default sending address|
|» from_name|body|string \| null|false|New default from name|
|» subject|body|string \| null|false|New default subject line|
|» code|body|string \| null|false|New code for the template|
|» text|body|string \| null|false|New default text part to be used|
|» publish|body|boolean|false|Set to false to update the draft version without publishing|
|» labels|body|[string]|false|Optional array of up to 10 labels to use for filtering templates|

> Example responses

> 200 Response

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="update-an-existing-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTemplate](#schematemplatestemplate)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a template

<a id="opIdtemplates/publish"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/publish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "Example Template"
  }'
```

`POST /templates/publish`

Publishes the content for the template. Any new messages sent using this template will start using the content that was previously in draft.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

<h3 id="publish-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesPublishRequest](#schematemplatespublishrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Immutable name of an existing template|

> Example responses

> 200 Response

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="publish-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTemplate](#schematemplatestemplate)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a template

<a id="opIdtemplates/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "example-template"
  }'
```

`POST /templates/delete`

Deletes an existing template.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "example-template"
}
```

<h3 id="delete-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesDeleteRequest](#schematemplatesdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Immutable slug of an existing template|

> Example responses

> 200 Response

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTemplate](#schematemplatestemplate)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## List all templates

<a id="opIdtemplates/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "label": "example-label"
  }'
```

`POST /templates/list`

Returns a list of all templates available to this user.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "label": "example-label"
}
```

<h3 id="list-all-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesListRequest](#schematemplateslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» label|body|string \| null|false|Optional label to filter the templates|

> Example responses

> 200 Response

```json
[
  {
    "slug": "test-template",
    "name": "test-template",
    "labels": [],
    "code": "<p>test</p>",
    "subject": "test",
    "from_email": "test@mailchimp.com",
    "from_name": "Freddie",
    "text": "test",
    "publish_name": "test-template",
    "publish_code": "<p>test</p>",
    "publish_subject": "test",
    "publish_from_email": "test@mailchimp.com",
    "publish_from_name": "Freddie",
    "publish_text": "test",
    "published_at": "2025-08-29 18:47:40",
    "created_at": "2025-08-29 18:47:40.26276",
    "updated_at": "2025-08-29 18:47:40.26277",
    "draft_updated_at": "2025-08-29 18:47:40",
    "is_broken_template": false
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="list-all-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesListResponse](#schematemplateslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get template time series data

<a id="opIdtemplates/time-series"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/time-series \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "name": "Example Template"
  }'
```

`POST /templates/time-series`

Returns the recent history (hourly stats for the last 30 days) for a template.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

<h3 id="get-template-time-series-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesTimeSeriesRequest](#schematemplatestimeseriesrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» name|body|string|true|Name of an existing template|

> Example responses

> 200 Response

```json
[
  {
    "time": "2013-01-01 15:00:00",
    "sent": 42,
    "hard_bounces": 1,
    "soft_bounces": 2,
    "rejects": 0,
    "complaints": 0,
    "opens": 15,
    "unique_opens": 12,
    "clicks": 8,
    "unique_clicks": 5
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-template-time-series-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesTimeSeriesResponse](#schematemplatestimeseriesresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Render a template

<a id="opIdtemplates/render"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/templates/render \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "template_name": "example-template",
    "template_content": [
      {
        "name": "editable",
        "content": "content"
      }
    ],
    "merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ]
  }'
```

`POST /templates/render`

Injects content and merge variables into a template, returning the HTML that results.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "template_name": "example-template",
  "template_content": [
    {
      "name": "editable",
      "content": "content"
    }
  ],
  "merge_vars": [
    {
      "name": "merge1",
      "content": "merge1 content"
    }
  ]
}
```

<h3 id="render-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TemplatesRenderRequest](#schematemplatesrenderrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» template_name|body|string|true|Immutable name or slug of a template that exists in the user's account|
|» template_content|body|[[TemplateContent](#schematemplatecontent)]|true|Array of template content to render|
|» merge_vars|body|[[MergeVar](#schemamergevar)]|false|Optional merge variables to use for injecting merge field content|

> Example responses

> 200 Response

```json
{
  "html": "<div>Rendered template content with merge variables</div>"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="render-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TemplatesRenderResponse](#schematemplatesrenderresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Template not found|[TemplateNotFoundError](#schematemplatenotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-urls">URLs</h1>

URL tracking domain management operations

## Get tracking domains

<a id="opIdurls/tracking-domains"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/urls/tracking-domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /urls/tracking-domains`

Get the list of tracking domains set up for your account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="get-tracking-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlsTrackingDomainsRequest](#schemaurlstrackingdomainsrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "domain": "track.example.com",
    "created_at": "2025-08-15 17:01:12.34214",
    "last_tested_at": "2025-08-15 17:01:12.39638",
    "cname": {
      "valid": false,
      "valid_after": null,
      "error": "string"
    },
    "valid_tracking": false
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-tracking-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UrlsTrackingDomainsResponse](#schemaurlstrackingdomainsresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add tracking domain

<a id="opIdurls/add-tracking-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/urls/add-tracking-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "track.example.com"
  }'
```

`POST /urls/add-tracking-domain`

Add a tracking domain to your account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

<h3 id="add-tracking-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlsAddTrackingDomainRequest](#schemaurlsaddtrackingdomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|A domain name to add for tracking|

> Example responses

> 200 Response

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

> 400 Response

```json
{
  "status": "error",
  "code": 400,
  "name": "MC_Exception_InvalidTrackingDomain",
  "message": "'invalid.example.com' contains characters that violate RFC-5321"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-tracking-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrackingDomain](#schematrackingdomain)|
|400|Bad Request|Invalid tracking domain|[UrlInvalidDomainError](#schemaurlinvaliddomainerror)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Check tracking domain

<a id="opIdurls/check-tracking-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/urls/check-tracking-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "track.example.com"
  }'
```

`POST /urls/check-tracking-domain`

Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

<h3 id="check-tracking-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlsCheckTrackingDomainRequest](#schemaurlschecktrackingdomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|An existing tracking domain name|

> Example responses

> 200 Response

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 21,
  "name": "Unknown_TrackingDomain",
  "message": "No tracking domain exists with the name 'track.example.com'"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="check-tracking-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrackingDomain](#schematrackingdomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown tracking domain|[UrlNotFoundError](#schemaurlnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tracking domain

<a id="opIdurls/delete-tracking-domain"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/urls/delete-tracking-domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "domain": "track.example.com"
  }'
```

`POST /urls/delete-tracking-domain`

Deletes an unverified tracking domain from your account. Valid tracking domains cannot be deleted via API and require login confirmation.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

<h3 id="delete-a-tracking-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UrlsDeleteTrackingDomainRequest](#schemaurlsdeletetrackingdomainrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» domain|body|string(hostname)|true|An existing tracking domain name|

> Example responses

> 200 Response

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 403 Response

```json
{
  "status": "error",
  "code": 29,
  "name": "Invalid_Verified_TrackingDomain",
  "message": "Cannot delete verified tracking domain \"track.example.com\" via API - please login to confirm deletion"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 21,
  "name": "Unknown_TrackingDomain",
  "message": "No tracking domain exists with the name 'track.example.com'"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-a-tracking-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrackingDomain](#schematrackingdomain)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|403|Forbidden|Cannot delete verified tracking domain — please login to confirm deletion|[UrlCannotDeleteVerifiedError](#schemaurlcannotdeleteverifiederror)|
|404|Not Found|Unknown tracking domain|[UrlNotFoundError](#schemaurlnotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-users">Users</h1>

Operations related to user account and credentials

## Return the information about the API-connected user

<a id="opIdusers/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/users/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /users/info`

Returns user account information including username, reputation, quota, and historical sending stats

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="return-the-information-about-the-api-connected-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UsersInfoRequest](#schemausersinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
{
  "username": "string",
  "created_at": "2013-01-01 15:30:27",
  "public_id": "string",
  "reputation": 0,
  "hourly_quota": 0,
  "backlog": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "all_time": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="return-the-information-about-the-api-connected-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsersInfoResponse](#schemausersinforesponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate an API key and respond to a ping

<a id="opIdusers/ping"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/users/ping \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /users/ping`

Returns 'PONG!'.

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="validate-an-api-key-and-respond-to-a-ping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UsersPingRequest](#schemauserspingrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
"PONG!"
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="validate-an-api-key-and-respond-to-a-ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsersPingResponse](#schemauserspingresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate an API key and respond to a ping (strict JSON parser version)

<a id="opIdusers/ping2"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/users/ping2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /users/ping2`

Validate an API key and respond to a ping (strict JSON parser version)

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="validate-an-api-key-and-respond-to-a-ping-strict-json-parser-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UsersPing2Request](#schemausersping2request)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
{
  "PING": "PONG!"
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="validate-an-api-key-and-respond-to-a-ping-strict-json-parser-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsersPing2Response](#schemausersping2response)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the senders that have tried to use this account

<a id="opIdusers/senders"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/users/senders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /users/senders`

Returns an array of sender data for each sending address used by the account, both verified and unverified

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="return-the-senders-that-have-tried-to-use-this-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UsersSendersRequest](#schemauserssendersrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "address": "sender.example@mandrillapp.com",
    "created_at": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="return-the-senders-that-have-tried-to-use-this-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsersSendersResponse](#schemauserssendersresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="mailchimp-transactional-api-webhooks">Webhooks</h1>

Operations for managing webhook endpoints and event subscriptions

## Get the list of all webhooks

<a id="opIdwebhooks/list"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/webhooks/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  }'
```

`POST /webhooks/list`

Get the list of all webhooks defined for this account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

<h3 id="get-the-list-of-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhooksListRequest](#schemawebhookslistrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|

> Example responses

> 200 Response

```json
[
  {
    "id": 12345,
    "url": "https://example.com/webhook",
    "description": "Webhook for tracking email events",
    "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
    "events": [
      "send",
      "delivered",
      "deferral",
      "hard_bounce",
      "soft_bounce",
      "open",
      "click",
      "spam",
      "unsub",
      "reject",
      "blacklist",
      "whitelist"
    ],
    "created_at": "2013-01-01 15:30:27.123456",
    "last_sent_at": "2013-01-01 15:30:49",
    "batches_sent": 42,
    "events_sent": 1365,
    "last_error": null
  }
]
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-the-list-of-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WebhooksListResponse](#schemawebhookslistresponse)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new webhook

<a id="opIdwebhooks/add"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/webhooks/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "url": "https://example.com/webhook",
    "description": "My webhook for tracking email events",
    "events": [
      "send",
      "delivered",
      "hard_bounce",
      "soft_bounce",
      "open",
      "click",
      "spam",
      "unsub",
      "reject"
    ]
  }'
```

`POST /webhooks/add`

Create a new webhook to receive event notifications

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "url": "https://example.com/webhook",
  "description": "My webhook for tracking email events",
  "events": [
    "send",
    "delivered",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject"
  ]
}
```

<h3 id="add-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhooksAddRequest](#schemawebhooksaddrequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» url|body|string(active-uri)|true|The URL to POST batches of events|
|» description|body|string \| null|false|An optional description of the webhook|
|» events|body|[string]|false|Optional list of event types that will trigger the webhook|

> Example responses

> 200 Response

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="add-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get webhook information

<a id="opIdwebhooks/info"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/webhooks/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": 12345
  }'
```

`POST /webhooks/info`

Get the data about an existing webhook

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345
}
```

<h3 id="get-webhook-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhooksInfoRequest](#schemawebhooksinforequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|integer|true|The unique identifier of a webhook belonging to this account|

> Example responses

> 200 Response

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 3,
  "name": "Unknown_Webhook",
  "message": "Unknown hook ID 15"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="get-webhook-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown webhook|[WebhookNotFoundError](#schemawebhooknotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing webhook

<a id="opIdwebhooks/update"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/webhooks/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": 12345,
    "url": "https://example.com/webhook",
    "description": "Updated webhook description",
    "events": [
      "send",
      "delivered",
      "hard_bounce",
      "soft_bounce",
      "open",
      "click",
      "spam",
      "unsub",
      "reject"
    ]
  }'
```

`POST /webhooks/update`

Update the configuration of an existing webhook

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Updated webhook description",
  "events": [
    "send",
    "delivered",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject"
  ]
}
```

<h3 id="update-an-existing-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhooksUpdateRequest](#schemawebhooksupdaterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|integer|true|The unique identifier of a webhook belonging to this account|
|» url|body|string(active-uri)|true|The URL to POST batches of events|
|» description|body|string \| null|false|An optional description of the webhook|
|» events|body|[string]|false|Optional list of event types that will trigger the webhook|

> Example responses

> 200 Response

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 3,
  "name": "Unknown_Webhook",
  "message": "Unknown hook ID 15"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="update-an-existing-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown webhook|[WebhookNotFoundError](#schemawebhooknotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing webhook

<a id="opIdwebhooks/delete"></a>

> Code samples

```bash
curl https://mandrillapp.com/api/1.4/webhooks/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "ONzNrsmbtNXoIKyfPmjnig",
    "id": 12345
  }'
```

`POST /webhooks/delete`

Remove a webhook from the account

> Body parameter

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345
}
```

<h3 id="delete-an-existing-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhooksDeleteRequest](#schemawebhooksdeleterequest)|true|none|
|» key|body|string|true|A valid Mandrill API key|
|» id|body|integer|true|The unique identifier of a webhook belonging to this account|

> Example responses

> 200 Response

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

> 401 Response

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

> 404 Response

```json
{
  "status": "error",
  "code": 3,
  "name": "Unknown_Webhook",
  "message": "Unknown hook ID 15"
}
```

> 500 Response

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

<h3 id="delete-an-existing-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|
|401|Unauthorized|Invalid or missing API key.|[InvalidKeyError](#schemainvalidkeyerror)|
|404|Not Found|Unknown webhook|[WebhookNotFoundError](#schemawebhooknotfounderror)|
|500|Internal Server Error|An unexpected internal server error occurred.|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

API key field included in request bodies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status": "error",
  "code": -100,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

Standard error payload returned on API errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_ExportNotFoundError">ExportNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemaexportnotfounderror"></a>
<a id="schema_ExportNotFoundError"></a>
<a id="tocSexportnotfounderror"></a>
<a id="tocsexportnotfounderror"></a>

```json
{
  "status": "error",
  "code": 9,
  "name": "Unknown_Export",
  "message": "Unknown Export: abc123"
}
```

Unknown export job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPInvalidCustomDnsError">IPInvalidCustomDnsError</h2>
<!-- backwards compatibility -->
<a id="schemaipinvalidcustomdnserror"></a>
<a id="schema_IPInvalidCustomDnsError"></a>
<a id="tocSipinvalidcustomdnserror"></a>
<a id="tocsipinvalidcustomdnserror"></a>

```json
{
  "status": "error",
  "code": 19,
  "name": "Invalid_CustomDNS",
  "message": "The domain name is not configured for use as the dedicated IP's custom reverse DNS."
}
```

Invalid custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPInvalidDeletePoolError">IPInvalidDeletePoolError</h2>
<!-- backwards compatibility -->
<a id="schemaipinvaliddeletepoolerror"></a>
<a id="schema_IPInvalidDeletePoolError"></a>
<a id="tocSipinvaliddeletepoolerror"></a>
<a id="tocsipinvaliddeletepoolerror"></a>

```json
{
  "status": "error",
  "code": 17,
  "name": "Invalid_DeleteDefaultPool",
  "message": "You cannot delete your default pool"
}
```

Cannot delete default pool or non-empty pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPInvalidEmptyDefaultPoolError">IPInvalidEmptyDefaultPoolError</h2>
<!-- backwards compatibility -->
<a id="schemaipinvalidemptydefaultpoolerror"></a>
<a id="schema_IPInvalidEmptyDefaultPoolError"></a>
<a id="tocSipinvalidemptydefaultpoolerror"></a>
<a id="tocsipinvalidemptydefaultpoolerror"></a>

```json
{
  "status": "error",
  "code": 16,
  "name": "Invalid_EmptyDefaultPool",
  "message": "You cannot remove the last IP from your default pool"
}
```

Cannot leave default pool empty

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPNotFoundError">IPNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemaipnotfounderror"></a>
<a id="schema_IPNotFoundError"></a>
<a id="tocSipnotfounderror"></a>
<a id="tocsipnotfounderror"></a>

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP with address 127.0.0.1"
}
```

Unknown dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPOrPoolNotFoundError">IPOrPoolNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemaiporpoolnotfounderror"></a>
<a id="schema_IPOrPoolNotFoundError"></a>
<a id="tocSiporpoolnotfounderror"></a>
<a id="tocsiporpoolnotfounderror"></a>

```json
{
  "status": "error",
  "code": 13,
  "name": "Unknown_IP",
  "message": "No dedicated IP or pool found"
}
```

Unknown IP or pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_IPPoolNotFoundError">IPPoolNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemaippoolnotfounderror"></a>
<a id="schema_IPPoolNotFoundError"></a>
<a id="tocSippoolnotfounderror"></a>
<a id="tocsippoolnotfounderror"></a>

```json
{
  "status": "error",
  "code": 15,
  "name": "Unknown_Pool",
  "message": "No pool named main-pool"
}
```

Unknown IP pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_InboundDomainNotFoundError">InboundDomainNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemainbounddomainnotfounderror"></a>
<a id="schema_InboundDomainNotFoundError"></a>
<a id="tocSinbounddomainnotfounderror"></a>
<a id="tocsinbounddomainnotfounderror"></a>

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_InboundDomain",
  "message": "Unknown Inbound Domain: mandrill.com"
}
```

Unknown inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_InboundRouteNotFoundError">InboundRouteNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemainboundroutenotfounderror"></a>
<a id="schema_InboundRouteNotFoundError"></a>
<a id="tocSinboundroutenotfounderror"></a>
<a id="tocsinboundroutenotfounderror"></a>

```json
{
  "status": "error",
  "code": 22,
  "name": "Unknown_InboundRoute",
  "message": "No route exists with the id 1234"
}
```

Unknown inbound route

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_InvalidKeyError">InvalidKeyError</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeyerror"></a>
<a id="schema_InvalidKeyError"></a>
<a id="tocSinvalidkeyerror"></a>
<a id="tocsinvalidkeyerror"></a>

```json
{
  "status": "error",
  "code": 401,
  "name": "Invalid_Key",
  "message": "Invalid API key"
}
```

The provided API key is not valid or is missing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|
|name|string|true|none|none|
|code|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|Invalid_Key|
|code|401|

<h2 id="tocS_MctemplateInvalidVersionError">MctemplateInvalidVersionError</h2>
<!-- backwards compatibility -->
<a id="schemamctemplateinvalidversionerror"></a>
<a id="schema_MctemplateInvalidVersionError"></a>
<a id="tocSmctemplateinvalidversionerror"></a>
<a id="tocsmctemplateinvalidversionerror"></a>

```json
{
  "status": "error",
  "code": 400,
  "name": "Invalid_Version",
  "message": "mc_template_version must be either \"draft\" or \"published\""
}
```

Invalid mc_template_version parameter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MctemplateNotFoundError">MctemplateNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatenotfounderror"></a>
<a id="schema_MctemplateNotFoundError"></a>
<a id="tocSmctemplatenotfounderror"></a>
<a id="tocsmctemplatenotfounderror"></a>

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No Mailchimp template found with id 12345"
}
```

Mailchimp template not found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MessageNotFoundError">MessageNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemamessagenotfounderror"></a>
<a id="schema_MessageNotFoundError"></a>
<a id="tocSmessagenotfounderror"></a>
<a id="tocsmessagenotfounderror"></a>

```json
{
  "status": "error",
  "code": 11,
  "name": "Unknown_Message",
  "message": "No message exists with the id McyuzyCS5M3bubeGPP-XVA"
}
```

Message not found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MessageServiceUnavailableError">MessageServiceUnavailableError</h2>
<!-- backwards compatibility -->
<a id="schemamessageserviceunavailableerror"></a>
<a id="schema_MessageServiceUnavailableError"></a>
<a id="tocSmessageserviceunavailableerror"></a>
<a id="tocsmessageserviceunavailableerror"></a>

```json
{
  "status": "error",
  "code": -2,
  "name": "ServiceUnavailable",
  "message": "Service Temporarily Unavailable"
}
```

Service unavailable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MessageSmsSubaccountNotFoundError">MessageSmsSubaccountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemamessagesmssubaccountnotfounderror"></a>
<a id="schema_MessageSmsSubaccountNotFoundError"></a>
<a id="tocSmessagesmssubaccountnotfounderror"></a>
<a id="tocsmessagesmssubaccountnotfounderror"></a>

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

Unknown subaccount for SMS message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MessageSubaccountNotFoundError">MessageSubaccountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemamessagesubaccountnotfounderror"></a>
<a id="schema_MessageSubaccountNotFoundError"></a>
<a id="tocSmessagesubaccountnotfounderror"></a>
<a id="tocsmessagesubaccountnotfounderror"></a>

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

Unknown subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MessageTemplateOrSubaccountNotFoundError">MessageTemplateOrSubaccountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemamessagetemplateorsubaccountnotfounderror"></a>
<a id="schema_MessageTemplateOrSubaccountNotFoundError"></a>
<a id="tocSmessagetemplateorsubaccountnotfounderror"></a>
<a id="tocsmessagetemplateorsubaccountnotfounderror"></a>

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

Template or subaccount not found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MetadataNotFoundError">MetadataNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemametadatanotfounderror"></a>
<a id="schema_MetadataNotFoundError"></a>
<a id="tocSmetadatanotfounderror"></a>
<a id="tocsmetadatanotfounderror"></a>

```json
{
  "status": "error",
  "code": 24,
  "name": "Unknown_MetadataField",
  "message": "Invalid metadata field name: group_id"
}
```

Unknown metadata field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_PaymentRequiredError">PaymentRequiredError</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrequirederror"></a>
<a id="schema_PaymentRequiredError"></a>
<a id="tocSpaymentrequirederror"></a>
<a id="tocspaymentrequirederror"></a>

```json
{
  "status": "error",
  "code": 10,
  "name": "PaymentRequired",
  "message": "Email scheduling is only available for accounts with a positive balance."
}
```

The account does not have the required paid plan or billing status to perform this action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|
|name|string|true|none|none|
|code|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|PaymentRequired|
|code|10|

<h2 id="tocS_RejectEmailNotFoundError">RejectEmailNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemarejectemailnotfounderror"></a>
<a id="schema_RejectEmailNotFoundError"></a>
<a id="tocSrejectemailnotfounderror"></a>
<a id="tocsrejectemailnotfounderror"></a>

```json
{
  "status": "error",
  "code": 4,
  "name": "Invalid_Reject",
  "message": "Email address is not in the rejection list and is not invalid"
}
```

Email not found in rejection list or unknown subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_RejectPhoneNotFoundError">RejectPhoneNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemarejectphonenotfounderror"></a>
<a id="schema_RejectPhoneNotFoundError"></a>
<a id="tocSrejectphonenotfounderror"></a>
<a id="tocsrejectphonenotfounderror"></a>

```json
{
  "status": "error",
  "code": 4,
  "name": "Invalid_Reject",
  "message": "Phone number is not in the rejection list"
}
```

Phone number not found in rejection list or unknown subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_RejectSubaccountNotFoundError">RejectSubaccountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemarejectsubaccountnotfounderror"></a>
<a id="schema_RejectSubaccountNotFoundError"></a>
<a id="tocSrejectsubaccountnotfounderror"></a>
<a id="tocsrejectsubaccountnotfounderror"></a>

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

Unknown subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_RequestLimitExceededError">RequestLimitExceededError</h2>
<!-- backwards compatibility -->
<a id="schemarequestlimitexceedederror"></a>
<a id="schema_RequestLimitExceededError"></a>
<a id="tocSrequestlimitexceedederror"></a>
<a id="tocsrequestlimitexceedederror"></a>

```json
{
  "status": "error",
  "code": 429,
  "name": "RequestLimitExceeded",
  "message": "Too Many Requests attempted recently"
}
```

The request has been rate-limited. Slow down and retry after a brief delay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|
|name|string|true|none|none|
|code|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RequestLimitExceeded|
|code|429|

<h2 id="tocS_SenderCannotDeleteVerifiedError">SenderCannotDeleteVerifiedError</h2>
<!-- backwards compatibility -->
<a id="schemasendercannotdeleteverifiederror"></a>
<a id="schema_SenderCannotDeleteVerifiedError"></a>
<a id="tocSsendercannotdeleteverifiederror"></a>
<a id="tocssendercannotdeleteverifiederror"></a>

```json
{
  "status": "error",
  "code": 28,
  "name": "Invalid_Verified_Domain",
  "message": "Cannot delete verified domain \"example.com\" via API - please login to confirm deletion"
}
```

Cannot delete verified sender domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_SenderDomainNotFoundError">SenderDomainNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemasenderdomainnotfounderror"></a>
<a id="schema_SenderDomainNotFoundError"></a>
<a id="tocSsenderdomainnotfounderror"></a>
<a id="tocssenderdomainnotfounderror"></a>

```json
{
  "status": "error",
  "code": 8,
  "name": "Unknown_Domain",
  "message": "No such domain \"example.com\""
}
```

Unknown sender domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_SenderNotFoundError">SenderNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemasendernotfounderror"></a>
<a id="schema_SenderNotFoundError"></a>
<a id="tocSsendernotfounderror"></a>
<a id="tocssendernotfounderror"></a>

```json
{
  "status": "error",
  "code": 2,
  "name": "Unknown_Sender",
  "message": "No such sender \"example@mandrill.com\""
}
```

Unknown sender

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_ServerError">ServerError</h2>
<!-- backwards compatibility -->
<a id="schemaservererror"></a>
<a id="schema_ServerError"></a>
<a id="tocSservererror"></a>
<a id="tocsservererror"></a>

```json
{
  "status": "error",
  "code": -1,
  "name": "GeneralError",
  "message": "An unknown error occurred processing your request. Please try again later."
}
```

An unexpected internal server error occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_SubaccountNotFoundError">SubaccountNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountnotfounderror"></a>
<a id="schema_SubaccountNotFoundError"></a>
<a id="tocSsubaccountnotfounderror"></a>
<a id="tocssubaccountnotfounderror"></a>

```json
{
  "status": "error",
  "code": 12,
  "name": "Unknown_Subaccount",
  "message": "No subaccount exists with the id customer-123"
}
```

Unknown subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_TagInvalidNameError">TagInvalidNameError</h2>
<!-- backwards compatibility -->
<a id="schemataginvalidnameerror"></a>
<a id="schema_TagInvalidNameError"></a>
<a id="tocStaginvalidnameerror"></a>
<a id="tocstaginvalidnameerror"></a>

```json
{
  "status": "error",
  "code": 1,
  "name": "Invalid_Tag_Name",
  "message": "no such tag \"mytag\""
}
```

Invalid tag name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_TemplateInvalidDataError">TemplateInvalidDataError</h2>
<!-- backwards compatibility -->
<a id="schematemplateinvaliddataerror"></a>
<a id="schema_TemplateInvalidDataError"></a>
<a id="tocStemplateinvaliddataerror"></a>
<a id="tocstemplateinvaliddataerror"></a>

```json
{
  "status": "error",
  "code": 6,
  "name": "Invalid_Template",
  "message": "A template with name \"MyTemplate\" already exists"
}
```

Invalid template data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_TemplateNotFoundError">TemplateNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schematemplatenotfounderror"></a>
<a id="schema_TemplateNotFoundError"></a>
<a id="tocStemplatenotfounderror"></a>
<a id="tocstemplatenotfounderror"></a>

```json
{
  "status": "error",
  "code": 5,
  "name": "Unknown_Template",
  "message": "No such template \"MyTemplate\""
}
```

Template not found

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_UrlCannotDeleteVerifiedError">UrlCannotDeleteVerifiedError</h2>
<!-- backwards compatibility -->
<a id="schemaurlcannotdeleteverifiederror"></a>
<a id="schema_UrlCannotDeleteVerifiedError"></a>
<a id="tocSurlcannotdeleteverifiederror"></a>
<a id="tocsurlcannotdeleteverifiederror"></a>

```json
{
  "status": "error",
  "code": 29,
  "name": "Invalid_Verified_TrackingDomain",
  "message": "Cannot delete verified tracking domain \"track.example.com\" via API - please login to confirm deletion"
}
```

Cannot delete verified tracking domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_UrlInvalidDomainError">UrlInvalidDomainError</h2>
<!-- backwards compatibility -->
<a id="schemaurlinvaliddomainerror"></a>
<a id="schema_UrlInvalidDomainError"></a>
<a id="tocSurlinvaliddomainerror"></a>
<a id="tocsurlinvaliddomainerror"></a>

```json
{
  "status": "error",
  "code": 400,
  "name": "MC_Exception_InvalidTrackingDomain",
  "message": "'invalid.example.com' contains characters that violate RFC-5321"
}
```

Invalid tracking domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_UrlNotFoundError">UrlNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemaurlnotfounderror"></a>
<a id="schema_UrlNotFoundError"></a>
<a id="tocSurlnotfounderror"></a>
<a id="tocsurlnotfounderror"></a>

```json
{
  "status": "error",
  "code": 21,
  "name": "Unknown_TrackingDomain",
  "message": "No tracking domain exists with the name 'track.example.com'"
}
```

Unknown tracking domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "status": "error",
  "code": -2,
  "name": "ValidationError",
  "message": "Validation error: {\\\"email\\\":\\\"Not a valid email address\\\"}"
}
```

One or more request parameters failed validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|ValidationError|

<h2 id="tocS_WebhookNotFoundError">WebhookNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemawebhooknotfounderror"></a>
<a id="schema_WebhookNotFoundError"></a>
<a id="tocSwebhooknotfounderror"></a>
<a id="tocswebhooknotfounderror"></a>

```json
{
  "status": "error",
  "code": 3,
  "name": "Unknown_Webhook",
  "message": "Unknown hook ID 15"
}
```

Unknown webhook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the response, typically "error"|
|code|integer|true|none|Numeric error code|
|name|string|true|none|Machine-friendly error name|
|message|string|true|none|Human-readable error message|

<h2 id="tocS_MergeVar">MergeVar</h2>
<!-- backwards compatibility -->
<a id="schemamergevar"></a>
<a id="schema_MergeVar"></a>
<a id="tocSmergevar"></a>
<a id="tocsmergevar"></a>

```json
{
  "name": "merge1",
  "content": "merge1 content"
}
```

Merge variable for template content injection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Merge variable name (case-insensitive, may not start with _)|
|content|string|false|none|Content value for the merge variable|

<h2 id="tocS_Sender">Sender</h2>
<!-- backwards compatibility -->
<a id="schemasender"></a>
<a id="schema_Sender"></a>
<a id="tocSsender"></a>
<a id="tocssender"></a>

```json
{
  "address": "sender.example@mandrillapp.com",
  "created_at": "2013-01-01 15:30:27",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "unique_opens": 0
}
```

Information about a sending address used by the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string(email)|false|none|The sender's email address|
|created_at|string(date-time)|false|none|UTC timestamp when first seen|
|sent|integer|false|none|Total messages sent by this sender|
|hard_bounces|integer|false|none|Total number of hard bounces by this sender|
|soft_bounces|integer|false|none|Total number of soft bounces by this sender|
|rejects|integer|false|none|Total number of rejected messages by this sender|
|complaints|integer|false|none|Total number of spam complaints for this sender|
|unsubs|integer|false|none|Total number of unsubscribe requests for this sender|
|opens|integer|false|none|Total number of times messages by this sender have been opened|
|clicks|integer|false|none|Total number of tracked URL clicks by this sender|
|unique_clicks|integer|false|none|Number of unique clicks for emails sent by this sender|
|unique_opens|integer|false|none|Number of unique opens for emails sent by this sender|

<h2 id="tocS_StatsWindow">StatsWindow</h2>
<!-- backwards compatibility -->
<a id="schemastatswindow"></a>
<a id="schema_StatsWindow"></a>
<a id="tocSstatswindow"></a>
<a id="tocsstatswindow"></a>

```json
{
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "unique_opens": 0,
  "clicks": 0,
  "unique_clicks": 0
}
```

Aggregate sending statistics for a time window

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sent|integer|false|none|Number of emails sent|
|hard_bounces|integer|false|none|Number of emails that hard bounced|
|soft_bounces|integer|false|none|Number of emails that soft bounced|
|rejects|integer|false|none|Number of emails rejected|
|complaints|integer|false|none|Number of spam complaints|
|unsubs|integer|false|none|Number of unsubscribe requests|
|opens|integer|false|none|Number of times emails were opened|
|unique_opens|integer|false|none|Number of unique opens|
|clicks|integer|false|none|Number of tracked URL clicks|
|unique_clicks|integer|false|none|Number of unique clicks|

<h2 id="tocS_AllowlistsAddRequest">AllowlistsAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistsaddrequest"></a>
<a id="schema_AllowlistsAddRequest"></a>
<a id="tocSallowlistsaddrequest"></a>
<a id="tocsallowlistsaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "comment": "Internal support address"
}
```

Request payload for adding an email to the allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string(email)|true|none|An email address to add to the allowlist|
|comment|string|false|none|An optional description of why the email was added to the allowlist|

<h2 id="tocS_AllowlistsAddResponse">AllowlistsAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistsaddresponse"></a>
<a id="schema_AllowlistsAddResponse"></a>
<a id="tocSallowlistsaddresponse"></a>
<a id="tocsallowlistsaddresponse"></a>

```json
{
  "email": "user@example.com",
  "added": true
}
```

Response for adding an email to the allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address you provided|
|added|boolean|true|none|Whether the operation succeeded|

<h2 id="tocS_AllowlistsDeleteRequest">AllowlistsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistsdeleterequest"></a>
<a id="schema_AllowlistsDeleteRequest"></a>
<a id="tocSallowlistsdeleterequest"></a>
<a id="tocsallowlistsdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com"
}
```

Request payload for removing an email from the allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string(email)|true|none|The email address to remove from the allowlist|

<h2 id="tocS_AllowlistsDeleteResponse">AllowlistsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistsdeleteresponse"></a>
<a id="schema_AllowlistsDeleteResponse"></a>
<a id="tocSallowlistsdeleteresponse"></a>
<a id="tocsallowlistsdeleteresponse"></a>

```json
{
  "email": "user@example.com",
  "deleted": true
}
```

Response for removing an email from the allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address that was removed from the allowlist|
|deleted|boolean|true|none|Whether the address was deleted successfully|

<h2 id="tocS_AllowlistsListRequest">AllowlistsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistslistrequest"></a>
<a id="schema_AllowlistsListRequest"></a>
<a id="tocSallowlistslistrequest"></a>
<a id="tocsallowlistslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user"
}
```

Request payload for retrieving the allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string|false|none|An optional email address or prefix to search by|

<h2 id="tocS_AllowlistsListResponse">AllowlistsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaallowlistslistresponse"></a>
<a id="schema_AllowlistsListResponse"></a>
<a id="tocSallowlistslistresponse"></a>
<a id="tocsallowlistslistresponse"></a>

```json
[
  {
    "email": "user@example.com",
    "detail": "Internal support address",
    "created_at": "2013-01-01 15:30:32"
  },
  {
    "email": "support@example.com",
    "detail": "Customer support address",
    "created_at": "2013-01-02 10:15:45"
  }
]
```

Response containing up to 1000 allowlist entries

<h2 id="tocS_ExportsActivityRequest">ExportsActivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportsactivityrequest"></a>
<a id="schema_ExportsActivityRequest"></a>
<a id="tocSexportsactivityrequest"></a>
<a id="tocsexportsactivityrequest"></a>

```json
{
  "key": {
    "key": "ONzNrsmbtNXoIKyfPmjnig"
  },
  "notify_email": "admin@example.com",
  "date_from": "2013-01-01 12:53:01",
  "date_to": "2013-01-06 13:42:18",
  "tags": [
    "example-tag"
  ],
  "senders": [
    "test@example.com"
  ],
  "states": [
    "sent"
  ],
  "api_keys": [
    "ONzNrsmbtNXoIKyfPmjnig"
  ]
}
```

Request parameters for exporting activity history with optional filters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[ApiKey](#schemaapikey)|true|none|API key field included in request bodies.|
|notify_email|string(email)|false|none|Optional email address to notify when the export job has finished|
|date_from|string|false|none|Start date as a UTC string in YYYY-MM-DD HH:MM:SS format|
|date_to|string|false|none|End date as a UTC string in YYYY-MM-DD HH:MM:SS format|
|tags|[string]|false|none|Array of tag names to narrow the export to; will match messages that contain ANY of the tags|
|senders|[string(email)]|false|none|Array of sender email addresses to narrow the export to|
|states|[string]|false|none|Array of message states to narrow the export to; messages with ANY of the states will be included|
|api_keys|[string]|false|none|Array of API keys to narrow the export to; messages sent with ANY of the keys will be included|

#### Enumerated Values

|Property|Value|
|---|---|
|states|sent|
|states|rejected|
|states|bounced|
|states|soft-bounced|
|states|spam|
|states|unsub|

<h2 id="tocS_ExportsActivityResponse">ExportsActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportsactivityresponse"></a>
<a id="schema_ExportsActivityResponse"></a>
<a id="tocSexportsactivityresponse"></a>
<a id="tocsexportsactivityresponse"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_ExportsAllowlistRequest">ExportsAllowlistRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportsallowlistrequest"></a>
<a id="schema_ExportsAllowlistRequest"></a>
<a id="tocSexportsallowlistrequest"></a>
<a id="tocsexportsallowlistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

Request payload for exporting the rejection allowlist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|notify_email|string(email)|false|none|Optional email address to notify when the export job has finished|

<h2 id="tocS_ExportsAllowlistResponse">ExportsAllowlistResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportsallowlistresponse"></a>
<a id="schema_ExportsAllowlistResponse"></a>
<a id="tocSexportsallowlistresponse"></a>
<a id="tocsexportsallowlistresponse"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_ExportsInfoRequest">ExportsInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportsinforequest"></a>
<a id="schema_ExportsInfoRequest"></a>
<a id="tocSexportsinforequest"></a>
<a id="tocsexportsinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "2013-01-01 12:20:28.13842"
}
```

Request payload for retrieving export job information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|Export job identifier|

<h2 id="tocS_ExportsInfoResponse">ExportsInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportsinforesponse"></a>
<a id="schema_ExportsInfoResponse"></a>
<a id="tocSexportsinforesponse"></a>
<a id="tocsexportsinforesponse"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_ExportsListRequest">ExportsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportslistrequest"></a>
<a id="schema_ExportsListRequest"></a>
<a id="tocSexportslistrequest"></a>
<a id="tocsexportslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing export jobs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_ExportsListResponse">ExportsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportslistresponse"></a>
<a id="schema_ExportsListResponse"></a>
<a id="tocSexportslistresponse"></a>
<a id="tocsexportslistresponse"></a>

```json
[
  {
    "id": "2013-01-01 12:20:28.13842",
    "created_at": "2013-01-01 12:30:28",
    "type": "reject",
    "finished_at": "2013-01-01 12:35:28",
    "state": "waiting",
    "result_url": "https://example.com/export-results.zip"
  }
]
```

List of export jobs for the account

<h2 id="tocS_ExportsRejectsRequest">ExportsRejectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportsrejectsrequest"></a>
<a id="schema_ExportsRejectsRequest"></a>
<a id="tocSexportsrejectsrequest"></a>
<a id="tocsexportsrejectsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

Request payload for exporting the rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|notify_email|string(email)|false|none|Optional email address to notify when the export job has finished|

<h2 id="tocS_ExportsRejectsResponse">ExportsRejectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportsrejectsresponse"></a>
<a id="schema_ExportsRejectsResponse"></a>
<a id="tocSexportsrejectsresponse"></a>
<a id="tocsexportsrejectsresponse"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_ExportsWhitelistRequest">ExportsWhitelistRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportswhitelistrequest"></a>
<a id="schema_ExportsWhitelistRequest"></a>
<a id="tocSexportswhitelistrequest"></a>
<a id="tocsexportswhitelistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "notify_email": "admin@example.com"
}
```

Request payload for exporting the rejection allowlist (legacy endpoint)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|notify_email|string(email)|false|none|Optional email address to notify when the export job has finished|

<h2 id="tocS_ExportsWhitelistResponse">ExportsWhitelistResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportswhitelistresponse"></a>
<a id="schema_ExportsWhitelistResponse"></a>
<a id="tocSexportswhitelistresponse"></a>
<a id="tocsexportswhitelistresponse"></a>

```json
{
  "id": "2013-01-01 12:20:28.13842",
  "created_at": "2013-01-01 12:30:28",
  "type": "reject",
  "finished_at": "2013-01-01 12:35:28",
  "state": "waiting",
  "result_url": "https://example.com/export-results.zip"
}
```

Export job information including status and download URL when complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for this export job|
|created_at|string|true|none|Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format|
|type|string|true|none|Type of export job|
|finished_at|string \| null|false|none|Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished|
|state|string|true|none|Current state of the export job|
|result_url|string \| null(uri)|false|none|URL to download the export results when job is complete, or null if not ready|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reject|
|type|whitelist|
|type|allowlist|
|type|activity|
|state|waiting|
|state|working|
|state|complete|
|state|error|

<h2 id="tocS_IPsCancelWarmupRequest">IPsCancelWarmupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipscancelwarmuprequest"></a>
<a id="schema_IPsCancelWarmupRequest"></a>
<a id="tocSipscancelwarmuprequest"></a>
<a id="tocsipscancelwarmuprequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

Request payload for cancelling the warmup process for a dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|

<h2 id="tocS_IPsCancelWarmupResponse">IPsCancelWarmupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipscancelwarmupresponse"></a>
<a id="schema_IPsCancelWarmupResponse"></a>
<a id="tocSipscancelwarmupresponse"></a>
<a id="tocsipscancelwarmupresponse"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsCheckCustomDnsRequest">IPsCheckCustomDnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipscheckcustomdnsrequest"></a>
<a id="schema_IPsCheckCustomDnsRequest"></a>
<a id="tocSipscheckcustomdnsrequest"></a>
<a id="tocsipscheckcustomdnsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "domain": "example.com"
}
```

Request payload for testing whether a domain name is valid for use as the custom reverse DNS for a dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|
|domain|string(hostname)|true|none|The domain name to test|

<h2 id="tocS_IPsCheckCustomDnsResponse">IPsCheckCustomDnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipscheckcustomdnsresponse"></a>
<a id="schema_IPsCheckCustomDnsResponse"></a>
<a id="tocSipscheckcustomdnsresponse"></a>
<a id="tocsipscheckcustomdnsresponse"></a>

```json
{
  "valid": true,
  "error": null
}
```

Validation results for custom DNS domain configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|true|none|Whether the domain name has a correctly-configured A record pointing to the IP address|
|error|string \| null|false|none|If valid is false, this will contain details about why the domain's A record is incorrect|

<h2 id="tocS_IPsCreatePoolRequest">IPsCreatePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipscreatepoolrequest"></a>
<a id="schema_IPsCreatePoolRequest"></a>
<a id="tocSipscreatepoolrequest"></a>
<a id="tocsipscreatepoolrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "New Pool"
}
```

Request payload for creating a dedicated IP pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|pool|string|true|none|The name of a pool to create|

<h2 id="tocS_IPsCreatePoolResponse">IPsCreatePoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipscreatepoolresponse"></a>
<a id="schema_IPsCreatePoolResponse"></a>
<a id="tocSipscreatepoolresponse"></a>
<a id="tocsipscreatepoolresponse"></a>

```json
{
  "name": "Main Pool",
  "created_at": "2013-01-01 12:15:12",
  "ips": [
    {
      "ip": "127.0.0.1",
      "created_at": "2013-01-01 15:50:21",
      "pool": "Main Pool",
      "domain": "mail1.example.mandrillapp.com",
      "custom_dns": {
        "enabled": true,
        "valid": true,
        "error": null
      },
      "warmup": {
        "warming_up": false,
        "start_at": null,
        "end_at": null
      }
    }
  ]
}
```

Information about a dedicated IP pool including all IPs in the pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|This pool's name|
|created_at|string|true|none|The date and time that this pool was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format|
|ips|[[IP](#schemaip)]|true|none|The dedicated IPs in this pool|

<h2 id="tocS_IPsDeletePoolRequest">IPsDeletePoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipsdeletepoolrequest"></a>
<a id="schema_IPsDeletePoolRequest"></a>
<a id="tocSipsdeletepoolrequest"></a>
<a id="tocsipsdeletepoolrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "Main Pool"
}
```

Request payload for deleting a dedicated IP pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|pool|string|true|none|The name of a pool to delete|

<h2 id="tocS_IPsDeletePoolResponse">IPsDeletePoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipsdeletepoolresponse"></a>
<a id="schema_IPsDeletePoolResponse"></a>
<a id="tocSipsdeletepoolresponse"></a>
<a id="tocsipsdeletepoolresponse"></a>

```json
{
  "pool": "Test Pool",
  "deleted": true
}
```

Response for dedicated IP pool deletion operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool|string|true|none|The name of the pool that was deleted|
|deleted|boolean|true|none|Whether the pool was successfully deleted|

<h2 id="tocS_IPsDeleteRequest">IPsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipsdeleterequest"></a>
<a id="schema_IPsDeleteRequest"></a>
<a id="tocSipsdeleterequest"></a>
<a id="tocsipsdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

Request payload for deleting a dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|The dedicated IP to remove from your account|

<h2 id="tocS_IPsDeleteResponse">IPsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipsdeleteresponse"></a>
<a id="schema_IPsDeleteResponse"></a>
<a id="tocSipsdeleteresponse"></a>
<a id="tocsipsdeleteresponse"></a>

```json
{
  "ip": "127.0.0.1",
  "deleted": true
}
```

Response for dedicated IP deletion operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string|true|none|The IP address that was deleted|
|deleted|boolean|true|none|Whether the IP was successfully deleted|

<h2 id="tocS_IP">IP</h2>
<!-- backwards compatibility -->
<a id="schemaip"></a>
<a id="schema_IP"></a>
<a id="tocSip"></a>
<a id="tocsip"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsInfoRequest">IPsInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipsinforequest"></a>
<a id="schema_IPsInfoRequest"></a>
<a id="tocSipsinforequest"></a>
<a id="tocsipsinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

Request payload for retrieving information about a single dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|

<h2 id="tocS_IPsInfoResponse">IPsInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipsinforesponse"></a>
<a id="schema_IPsInfoResponse"></a>
<a id="tocSipsinforesponse"></a>
<a id="tocsipsinforesponse"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsListPoolsRequest">IPsListPoolsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipslistpoolsrequest"></a>
<a id="schema_IPsListPoolsRequest"></a>
<a id="tocSipslistpoolsrequest"></a>
<a id="tocsipslistpoolsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing dedicated IP pools

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_IPsListPoolsResponse">IPsListPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipslistpoolsresponse"></a>
<a id="schema_IPsListPoolsResponse"></a>
<a id="tocSipslistpoolsresponse"></a>
<a id="tocsipslistpoolsresponse"></a>

```json
[
  {
    "name": "Main Pool",
    "created_at": "2013-01-01 12:15:12",
    "ips": [
      {
        "ip": "127.0.0.1",
        "created_at": "2013-01-01 15:50:21",
        "pool": "Main Pool",
        "domain": "mail1.example.mandrillapp.com",
        "custom_dns": {
          "enabled": true,
          "valid": true,
          "error": null
        },
        "warmup": {
          "warming_up": false,
          "start_at": null,
          "end_at": null
        }
      }
    ]
  }
]
```

Array of dedicated IP pool information

<h2 id="tocS_IPsListRequest">IPsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipslistrequest"></a>
<a id="schema_IPsListRequest"></a>
<a id="tocSipslistrequest"></a>
<a id="tocsipslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing dedicated IPs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_IPsListResponse">IPsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipslistresponse"></a>
<a id="schema_IPsListResponse"></a>
<a id="tocSipslistresponse"></a>
<a id="tocsipslistresponse"></a>

```json
[
  {
    "ip": "127.0.0.1",
    "created_at": "2013-01-01 15:50:21",
    "pool": "Main Pool",
    "domain": "mail1.example.mandrillapp.com",
    "custom_dns": {
      "enabled": true,
      "valid": true,
      "error": null
    },
    "warmup": {
      "warming_up": true,
      "start_at": "2013-03-01 12:00:01",
      "end_at": "2013-03-31 12:00:01"
    }
  }
]
```

Array of dedicated IP information

<h2 id="tocS_IPsPool">IPsPool</h2>
<!-- backwards compatibility -->
<a id="schemaipspool"></a>
<a id="schema_IPsPool"></a>
<a id="tocSipspool"></a>
<a id="tocsipspool"></a>

```json
{
  "name": "Main Pool",
  "created_at": "2013-01-01 12:15:12",
  "ips": [
    {
      "ip": "127.0.0.1",
      "created_at": "2013-01-01 15:50:21",
      "pool": "Main Pool",
      "domain": "mail1.example.mandrillapp.com",
      "custom_dns": {
        "enabled": true,
        "valid": true,
        "error": null
      },
      "warmup": {
        "warming_up": false,
        "start_at": null,
        "end_at": null
      }
    }
  ]
}
```

Information about a dedicated IP pool including all IPs in the pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|This pool's name|
|created_at|string|true|none|The date and time that this pool was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format|
|ips|[[IP](#schemaip)]|true|none|The dedicated IPs in this pool|

<h2 id="tocS_IPsPoolInfoRequest">IPsPoolInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipspoolinforequest"></a>
<a id="schema_IPsPoolInfoRequest"></a>
<a id="tocSipspoolinforequest"></a>
<a id="tocsipspoolinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "pool": "Main Pool"
}
```

Request payload for describing a single dedicated IP pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|pool|string|true|none|A pool name|

<h2 id="tocS_IPsPoolInfoResponse">IPsPoolInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipspoolinforesponse"></a>
<a id="schema_IPsPoolInfoResponse"></a>
<a id="tocSipspoolinforesponse"></a>
<a id="tocsipspoolinforesponse"></a>

```json
{
  "name": "Main Pool",
  "created_at": "2013-01-01 12:15:12",
  "ips": [
    {
      "ip": "127.0.0.1",
      "created_at": "2013-01-01 15:50:21",
      "pool": "Main Pool",
      "domain": "mail1.example.mandrillapp.com",
      "custom_dns": {
        "enabled": true,
        "valid": true,
        "error": null
      },
      "warmup": {
        "warming_up": false,
        "start_at": null,
        "end_at": null
      }
    }
  ]
}
```

Information about a dedicated IP pool including all IPs in the pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|This pool's name|
|created_at|string|true|none|The date and time that this pool was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format|
|ips|[[IP](#schemaip)]|true|none|The dedicated IPs in this pool|

<h2 id="tocS_IPsProvisionRequest">IPsProvisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipsprovisionrequest"></a>
<a id="schema_IPsProvisionRequest"></a>
<a id="tocSipsprovisionrequest"></a>
<a id="tocsipsprovisionrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "warmup": false,
  "pool": "Main Pool"
}
```

Request payload for provisioning an additional dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|warmup|boolean|false|none|Whether to enable warmup mode for the IP|
|pool|string \| null|false|none|The ID of the pool to add the dedicated IP to, or null to use your account's default pool|

<h2 id="tocS_IPsProvisionResponse">IPsProvisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipsprovisionresponse"></a>
<a id="schema_IPsProvisionResponse"></a>
<a id="tocSipsprovisionresponse"></a>
<a id="tocsipsprovisionresponse"></a>

```json
{
  "requested_at": "2013-01-01 01:52:21.123456"
}
```

Response for dedicated IP provisioning request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requested_at|string|true|none|The date and time that the request was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS[.fraction] format|

<h2 id="tocS_IPsSetCustomDnsRequest">IPsSetCustomDnsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipssetcustomdnsrequest"></a>
<a id="schema_IPsSetCustomDnsRequest"></a>
<a id="tocSipssetcustomdnsrequest"></a>
<a id="tocsipssetcustomdnsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "domain": "example.com"
}
```

Request payload for configuring the custom DNS name for a dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|
|domain|string(hostname)|true|none|A domain name to set as the dedicated IP's custom DNS name|

<h2 id="tocS_IPsSetCustomDnsResponse">IPsSetCustomDnsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipssetcustomdnsresponse"></a>
<a id="schema_IPsSetCustomDnsResponse"></a>
<a id="tocSipssetcustomdnsresponse"></a>
<a id="tocsipssetcustomdnsresponse"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsSetPoolRequest">IPsSetPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipssetpoolrequest"></a>
<a id="schema_IPsSetPoolRequest"></a>
<a id="tocSipssetpoolrequest"></a>
<a id="tocsipssetpoolrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1",
  "pool": "Main Pool",
  "create_pool": false
}
```

Request payload for moving a dedicated IP to a different pool

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|
|pool|string|true|none|The name of the new pool to add the dedicated IP to|
|create_pool|boolean|false|none|Whether to create the pool if it does not exist; if false and the pool does not exist, an Unknown_Pool will be thrown|

<h2 id="tocS_IPsSetPoolResponse">IPsSetPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipssetpoolresponse"></a>
<a id="schema_IPsSetPoolResponse"></a>
<a id="tocSipssetpoolresponse"></a>
<a id="tocsipssetpoolresponse"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsStartWarmupRequest">IPsStartWarmupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipsstartwarmuprequest"></a>
<a id="schema_IPsStartWarmupRequest"></a>
<a id="tocSipsstartwarmuprequest"></a>
<a id="tocsipsstartwarmuprequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "ip": "127.0.0.1"
}
```

Request payload for beginning the warmup process for a dedicated IP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|ip|string|true|none|A dedicated IP address|

<h2 id="tocS_IPsStartWarmupResponse">IPsStartWarmupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaipsstartwarmupresponse"></a>
<a id="schema_IPsStartWarmupResponse"></a>
<a id="tocSipsstartwarmupresponse"></a>
<a id="tocsipsstartwarmupresponse"></a>

```json
{
  "ip": "127.0.0.1",
  "created_at": "2013-01-01 15:50:21",
  "pool": "Main Pool",
  "domain": "mail1.example.mandrillapp.com",
  "custom_dns": {
    "enabled": true,
    "valid": true,
    "error": null
  },
  "warmup": {
    "warming_up": true,
    "start_at": "2013-03-01 12:00:01",
    "end_at": "2013-03-31 12:00:01"
  }
}
```

Information about a dedicated IP address including warmup status and custom DNS configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string(ipv4)|true|none|The IP address (IPv4)|
|created_at|string|true|none|The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format|
|pool|string|true|none|The name of the pool that this dedicated IP belongs to|
|domain|string|true|none|The domain name (reverse DNS) of this dedicated IP|
|custom_dns|object|true|none|Information about the IP's custom DNS configuration|
|warmup|[IPsWarmupStatus](#schemaipswarmupstatus)|true|none|Information about the IP's warmup status|

<h2 id="tocS_IPsWarmupStatus">IPsWarmupStatus</h2>
<!-- backwards compatibility -->
<a id="schemaipswarmupstatus"></a>
<a id="schema_IPsWarmupStatus"></a>
<a id="tocSipswarmupstatus"></a>
<a id="tocsipswarmupstatus"></a>

```json
{
  "warming_up": true,
  "start_at": "2013-03-01 12:00:01",
  "end_at": "2013-03-31 12:00:01"
}
```

Information about an IP's warmup status and schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warming_up|boolean|true|none|Whether the IP is currently in warmup mode|
|start_at|string \| null|false|none|The start time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format|
|end_at|string \| null|false|none|The end date and time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format|

<h2 id="tocS_InboundAddDomainRequest">InboundAddDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundadddomainrequest"></a>
<a id="schema_InboundAddDomainRequest"></a>
<a id="tocSinboundadddomainrequest"></a>
<a id="tocsinboundadddomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

Request payload for adding an inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|A domain name for inbound email delivery|

<h2 id="tocS_InboundAddDomainResponse">InboundAddDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundadddomainresponse"></a>
<a id="schema_InboundAddDomainResponse"></a>
<a id="tocSinboundadddomainresponse"></a>
<a id="tocsinboundadddomainresponse"></a>

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

Inbound email domain configuration and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The inbound domain name|
|created_at|string|true|none|When the domain was added to the account (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|valid_mx|boolean|true|none|Whether the MX records are properly configured for inbound delivery|

<h2 id="tocS_InboundAddRouteRequest">InboundAddRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundaddrouterequest"></a>
<a id="schema_InboundAddRouteRequest"></a>
<a id="tocSinboundaddrouterequest"></a>
<a id="tocsinboundaddrouterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

Request payload for adding a new mailbox route to an inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|An existing inbound domain|
|pattern|string|true|none|The search pattern that the mailbox name should match|
|url|string(active-uri)|true|none|The webhook URL where the inbound messages will be published|

<h2 id="tocS_InboundAddRouteResponse">InboundAddRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundaddrouteresponse"></a>
<a id="schema_InboundAddRouteResponse"></a>
<a id="tocSinboundaddrouteresponse"></a>
<a id="tocsinboundaddrouteresponse"></a>

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

Mailbox routing rule for inbound emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the route|
|pattern|string|true|none|The search pattern that the mailbox name should match|
|url|string(uri)|true|none|The webhook URL where inbound messages will be published|

<h2 id="tocS_InboundCheckDomainRequest">InboundCheckDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundcheckdomainrequest"></a>
<a id="schema_InboundCheckDomainRequest"></a>
<a id="tocSinboundcheckdomainrequest"></a>
<a id="tocsinboundcheckdomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

Request payload for checking an inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|A domain name for inbound email delivery|

<h2 id="tocS_InboundCheckDomainResponse">InboundCheckDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundcheckdomainresponse"></a>
<a id="schema_InboundCheckDomainResponse"></a>
<a id="tocSinboundcheckdomainresponse"></a>
<a id="tocsinboundcheckdomainresponse"></a>

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

Inbound email domain configuration and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The inbound domain name|
|created_at|string|true|none|When the domain was added to the account (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|valid_mx|boolean|true|none|Whether the MX records are properly configured for inbound delivery|

<h2 id="tocS_InboundDeleteDomainRequest">InboundDeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemainbounddeletedomainrequest"></a>
<a id="schema_InboundDeleteDomainRequest"></a>
<a id="tocSinbounddeletedomainrequest"></a>
<a id="tocsinbounddeletedomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

Request payload for deleting an inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|A domain name for inbound email delivery|

<h2 id="tocS_InboundDeleteDomainResponse">InboundDeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemainbounddeletedomainresponse"></a>
<a id="schema_InboundDeleteDomainResponse"></a>
<a id="tocSinbounddeletedomainresponse"></a>
<a id="tocsinbounddeletedomainresponse"></a>

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

Inbound email domain configuration and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The inbound domain name|
|created_at|string|true|none|When the domain was added to the account (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|valid_mx|boolean|true|none|Whether the MX records are properly configured for inbound delivery|

<h2 id="tocS_InboundDeleteRouteRequest">InboundDeleteRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemainbounddeleterouterequest"></a>
<a id="schema_InboundDeleteRouteRequest"></a>
<a id="tocSinbounddeleterouterequest"></a>
<a id="tocsinbounddeleterouterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "88.214614"
}
```

Request payload for deleting an existing inbound mailbox route

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of an existing route|

<h2 id="tocS_InboundDeleteRouteResponse">InboundDeleteRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemainbounddeleterouteresponse"></a>
<a id="schema_InboundDeleteRouteResponse"></a>
<a id="tocSinbounddeleterouteresponse"></a>
<a id="tocsinbounddeleterouteresponse"></a>

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

Mailbox routing rule for inbound emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the route|
|pattern|string|true|none|The search pattern that the mailbox name should match|
|url|string(uri)|true|none|The webhook URL where inbound messages will be published|

<h2 id="tocS_InboundDomainsRequest">InboundDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemainbounddomainsrequest"></a>
<a id="schema_InboundDomainsRequest"></a>
<a id="tocSinbounddomainsrequest"></a>
<a id="tocsinbounddomainsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing inbound domains

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_InboundDomainsResponse">InboundDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemainbounddomainsresponse"></a>
<a id="schema_InboundDomainsResponse"></a>
<a id="tocSinbounddomainsresponse"></a>
<a id="tocsinbounddomainsresponse"></a>

```json
[
  {
    "domain": "inbound.example.com",
    "created_at": "2025-08-29 18:47:58.03116",
    "valid_mx": true
  }
]
```

List of inbound domains associated with the account

<h2 id="tocS_InboundDomain">InboundDomain</h2>
<!-- backwards compatibility -->
<a id="schemainbounddomain"></a>
<a id="schema_InboundDomain"></a>
<a id="tocSinbounddomain"></a>
<a id="tocsinbounddomain"></a>

```json
{
  "domain": "inbound.example.com",
  "created_at": "2025-08-29 18:47:58.03116",
  "valid_mx": true
}
```

Inbound email domain configuration and status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|The inbound domain name|
|created_at|string|true|none|When the domain was added to the account (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|valid_mx|boolean|true|none|Whether the MX records are properly configured for inbound delivery|

<h2 id="tocS_InboundRoute">InboundRoute</h2>
<!-- backwards compatibility -->
<a id="schemainboundroute"></a>
<a id="schema_InboundRoute"></a>
<a id="tocSinboundroute"></a>
<a id="tocsinboundroute"></a>

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

Mailbox routing rule for inbound emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the route|
|pattern|string|true|none|The search pattern that the mailbox name should match|
|url|string(uri)|true|none|The webhook URL where inbound messages will be published|

<h2 id="tocS_InboundRoutesRequest">InboundRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundroutesrequest"></a>
<a id="schema_InboundRoutesRequest"></a>
<a id="tocSinboundroutesrequest"></a>
<a id="tocsinboundroutesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "inbound.example.com"
}
```

Request payload for listing mailbox routes for an inbound domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|The domain to check|

<h2 id="tocS_InboundRoutesResponse">InboundRoutesResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundroutesresponse"></a>
<a id="schema_InboundRoutesResponse"></a>
<a id="tocSinboundroutesresponse"></a>
<a id="tocsinboundroutesresponse"></a>

```json
[
  {
    "id": "88.214614",
    "pattern": "mailbox-*",
    "url": "https://example.com/webhook-url"
  }
]
```

List of mailbox routes for an inbound domain

<h2 id="tocS_InboundSendRawRequest">InboundSendRawRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundsendrawrequest"></a>
<a id="schema_InboundSendRawRequest"></a>
<a id="tocSinboundsendrawrequest"></a>
<a id="tocsinboundsendrawrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "From: sender@example.com\\nTo: mailbox-123@inbound.example.com\\nSubject: Some Subject\\n\\nSome content.",
  "to": [
    "mailbox-123@inbound.example.com"
  ],
  "mail_from": "sender@example.com"
}
```

Request payload for sending a raw MIME document to the inbound hook

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|raw_message|string|true|none|The full MIME document of an email message|
|to|[string(email)]|false|none|Optionally define the recipients to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document|
|mail_from|string \| null(email)|false|none|The address specified in the MAIL FROM stage of the SMTP conversation|
|helo|string \| null|false|none|The hostname provided during HELO|
|client_address|string \| null|false|none|The remote host's IP address|

<h2 id="tocS_InboundSendRawResponse">InboundSendRawResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundsendrawresponse"></a>
<a id="schema_InboundSendRawResponse"></a>
<a id="tocSinboundsendrawresponse"></a>
<a id="tocsinboundsendrawresponse"></a>

```json
[
  {
    "email": "mailbox-123@inbound.example.com",
    "pattern": "mailbox-*",
    "url": "https://example.com/webhook-url"
  }
]
```

Response from processing raw MIME message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|Array of processing results showing matched routes|
|*oneOf*|object|false|none|Null when no recipients are processed or message is invalid|

<h2 id="tocS_InboundUpdateRouteRequest">InboundUpdateRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemainboundupdaterouterequest"></a>
<a id="schema_InboundUpdateRouteRequest"></a>
<a id="tocSinboundupdaterouterequest"></a>
<a id="tocsinboundupdaterouterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "88.2144614",
  "pattern": "*.*",
  "url": "https://example.com/webhook-url"
}
```

Request payload for updating an existing inbound mailbox route

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of an existing mailbox route|
|pattern|string \| null|false|none|The search pattern that the mailbox name should match (null to leave unchanged)|
|url|string \| null(uri)|false|none|The webhook URL where the inbound messages will be published (null to leave unchanged)|

<h2 id="tocS_InboundUpdateRouteResponse">InboundUpdateRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemainboundupdaterouteresponse"></a>
<a id="schema_InboundUpdateRouteResponse"></a>
<a id="tocSinboundupdaterouteresponse"></a>
<a id="tocsinboundupdaterouteresponse"></a>

```json
{
  "id": "88.214614",
  "pattern": "mailbox-*",
  "url": "https://example.com/webhook-url"
}
```

Mailbox routing rule for inbound emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the route|
|pattern|string|true|none|The search pattern that the mailbox name should match|
|url|string(uri)|true|none|The webhook URL where inbound messages will be published|

<h2 id="tocS_MctemplatesInfoRequest">MctemplatesInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatesinforequest"></a>
<a id="schema_MctemplatesInfoRequest"></a>
<a id="tocSmctemplatesinforequest"></a>
<a id="tocsmctemplatesinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345
}
```

Request payload for getting Mailchimp Transactional template information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|mc_template_id|integer|true|none|The Mailchimp template ID|

<h2 id="tocS_MctemplatesInfoResponse">MctemplatesInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatesinforesponse"></a>
<a id="schema_MctemplatesInfoResponse"></a>
<a id="tocSmctemplatesinforesponse"></a>
<a id="tocsmctemplatesinforesponse"></a>

```json
{
  "mc_template_id": 12345,
  "mc_template_name": "Welcome Email",
  "labels": [],
  "code": "<div>Welcome!</div>",
  "subject": "Welcome to our service",
  "from_email": "support@example.com",
  "from_name": "Support Team",
  "text": "Welcome to our service!",
  "publish_code": "<div>Welcome!</div>",
  "publish_text": "Welcome to our service!",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Mailchimp Transactional template information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mc_template_id|integer|true|none|Mailchimp template ID|
|mc_template_name|string|true|none|Template name|
|labels|[string]|true|none|Array of labels (always empty for transactional templates)|
|code|string|true|none|Template HTML (draft version)|
|subject|string|true|none|Default subject line|
|from_email|string|true|none|Default sending address|
|from_name|string|true|none|Default from name|
|text|string|true|none|Template text (draft version)|
|publish_code|string|true|none|Template HTML (published version)|
|publish_text|string|true|none|Template text (published version)|
|published_at|string(date-time)|true|none|Date and time when template was published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether template has rendering errors|

<h2 id="tocS_MctemplatesListRequest">MctemplatesListRequest</h2>
<!-- backwards compatibility -->
<a id="schemamctemplateslistrequest"></a>
<a id="schema_MctemplatesListRequest"></a>
<a id="tocSmctemplateslistrequest"></a>
<a id="tocsmctemplateslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "search_query": "welcome"
}
```

Request payload for listing Mailchimp Transactional templates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|search_query|string \| null|false|none|Optional search query to filter templates|

<h2 id="tocS_MctemplatesListResponse">MctemplatesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamctemplateslistresponse"></a>
<a id="schema_MctemplatesListResponse"></a>
<a id="tocSmctemplateslistresponse"></a>
<a id="tocsmctemplateslistresponse"></a>

```json
[
  {
    "mc_template_id": 12345,
    "mc_template_name": "Welcome Email",
    "labels": [],
    "code": "<div>Welcome!</div>",
    "subject": "Welcome to our service",
    "from_email": "support@example.com",
    "from_name": "Support Team",
    "text": "Welcome to our service!",
    "publish_code": "<div>Welcome!</div>",
    "publish_text": "Welcome to our service!",
    "published_at": "2025-08-29 18:47:40",
    "created_at": "2025-08-29 18:47:40.26276",
    "updated_at": "2025-08-29 18:47:40.26277",
    "draft_updated_at": "2025-08-29 18:47:40",
    "is_broken_template": false
  }
]
```

Array of Mailchimp Transactional templates

<h2 id="tocS_MctemplatesMcTemplate">MctemplatesMcTemplate</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatesmctemplate"></a>
<a id="schema_MctemplatesMcTemplate"></a>
<a id="tocSmctemplatesmctemplate"></a>
<a id="tocsmctemplatesmctemplate"></a>

```json
{
  "mc_template_id": 12345,
  "mc_template_name": "Welcome Email",
  "labels": [],
  "code": "<div>Welcome!</div>",
  "subject": "Welcome to our service",
  "from_email": "support@example.com",
  "from_name": "Support Team",
  "text": "Welcome to our service!",
  "publish_code": "<div>Welcome!</div>",
  "publish_text": "Welcome to our service!",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Mailchimp Transactional template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mc_template_id|integer|true|none|Mailchimp template ID|
|mc_template_name|string|true|none|Template name|
|labels|[string]|true|none|Array of labels (always empty for transactional templates)|
|code|string|true|none|Template HTML (draft version)|
|subject|string|true|none|Default subject line|
|from_email|string|true|none|Default sending address|
|from_name|string|true|none|Default from name|
|text|string|true|none|Template text (draft version)|
|publish_code|string|true|none|Template HTML (published version)|
|publish_text|string|true|none|Template text (published version)|
|published_at|string(date-time)|true|none|Date and time when template was published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether template has rendering errors|

<h2 id="tocS_MctemplatesRenderRequest">MctemplatesRenderRequest</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatesrenderrequest"></a>
<a id="schema_MctemplatesRenderRequest"></a>
<a id="tocSmctemplatesrenderrequest"></a>
<a id="tocsmctemplatesrenderrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345,
  "mc_template_version": "published",
  "merge_vars": [
    {
      "name": "FIRSTNAME",
      "content": "John"
    }
  ]
}
```

Request payload for rendering a Mailchimp Transactional template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|mc_template_id|integer|true|none|The Mailchimp template ID|
|mc_template_version|string|false|none|The template version to render - "published" or "draft"|
|merge_vars|[object]|false|none|Optional merge variables to inject into the template|

#### Enumerated Values

|Property|Value|
|---|---|
|mc_template_version|published|
|mc_template_version|draft|

<h2 id="tocS_MctemplatesRenderResponse">MctemplatesRenderResponse</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatesrenderresponse"></a>
<a id="schema_MctemplatesRenderResponse"></a>
<a id="tocSmctemplatesrenderresponse"></a>
<a id="tocsmctemplatesrenderresponse"></a>

```json
{
  "html": "<div>Welcome, John!</div>"
}
```

Rendered Mailchimp Transactional template with merge variables applied

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string|true|none|Rendered HTML with merge variables applied|

<h2 id="tocS_MctemplatesTimeSeries">MctemplatesTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatestimeseries"></a>
<a id="schema_MctemplatesTimeSeries"></a>
<a id="tocSmctemplatestimeseries"></a>
<a id="tocsmctemplatestimeseries"></a>

```json
{
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "unique_opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "time": "2025-08-29 15:00:00"
}
```

Hourly statistics for a Mailchimp Transactional template in a specific time period

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sent|integer|true|none|Number of emails sent during the hour|
|hard_bounces|integer|true|none|Number of emails that hard bounced during the hour|
|soft_bounces|integer|true|none|Number of emails that soft bounced during the hour|
|rejects|integer|true|none|Number of emails rejected during the hour|
|complaints|integer|true|none|Number of spam complaints received during the hour|
|unsubs|integer|true|none|Number of unsubscribe requests received during the hour|
|opens|integer|true|none|Number of emails opened during the hour|
|unique_opens|integer|true|none|Number of unique opens generated by messages sent during the hour|
|clicks|integer|true|none|Number of tracked URLs clicked during the hour|
|unique_clicks|integer|true|none|Number of unique clicks generated by messages sent during the hour|
|time|string|true|none|The hour as a UTC date string in YYYY-MM-DD HH:MM:SS format|

<h2 id="tocS_MctemplatesTimeSeriesRequest">MctemplatesTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatestimeseriesrequest"></a>
<a id="schema_MctemplatesTimeSeriesRequest"></a>
<a id="tocSmctemplatestimeseriesrequest"></a>
<a id="tocsmctemplatestimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345
}
```

Request payload for getting Mailchimp Transactional template time series data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|mc_template_id|integer|true|none|The Mailchimp template ID|

<h2 id="tocS_MctemplatesTimeSeriesResponse">MctemplatesTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamctemplatestimeseriesresponse"></a>
<a id="schema_MctemplatesTimeSeriesResponse"></a>
<a id="tocSmctemplatestimeseriesresponse"></a>
<a id="tocsmctemplatestimeseriesresponse"></a>

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00"
  }
]
```

Array of hourly stats for the last 30 days for a Mailchimp Transactional template

<h2 id="tocS_MessagesCancelScheduledRequest">MessagesCancelScheduledRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagescancelscheduledrequest"></a>
<a id="schema_MessagesCancelScheduledRequest"></a>
<a id="tocSmessagescancelscheduledrequest"></a>
<a id="tocsmessagescancelscheduledrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "I_dtFt2ZNPW5QD9-FaDU1A"
}
```

Request body for messages/cancel-scheduled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled|

<h2 id="tocS_MessagesCancelScheduledResponse">MessagesCancelScheduledResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagescancelscheduledresponse"></a>
<a id="schema_MessagesCancelScheduledResponse"></a>
<a id="tocSmessagescancelscheduledresponse"></a>
<a id="tocsmessagescancelscheduledresponse"></a>

```json
{
  "_id": "string",
  "created_at": "2025-08-29 18:47:42",
  "send_at": "2025-09-05 18:47:41",
  "from_email": "user@example.com",
  "to": "user@example.com",
  "subject": "string"
}
```

Information about a scheduled message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|The message unique identifier|
|created_at|string|true|none|When the message was created|
|send_at|string|true|none|When the message is scheduled to be sent|
|from_email|string(email)|true|none|The sender email address|
|to|string(email)|true|none|The recipient email address|
|subject|string|true|none|The message subject|

<h2 id="tocS_MessagesClickDetail">MessagesClickDetail</h2>
<!-- backwards compatibility -->
<a id="schemamessagesclickdetail"></a>
<a id="schema_MessagesClickDetail"></a>
<a id="tocSmessagesclickdetail"></a>
<a id="tocsmessagesclickdetail"></a>

```json
{
  "ts": 0,
  "url": "string",
  "ip": "string",
  "location": "string",
  "ua": "string"
}
```

Details about a message click event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the click occurred|
|url|string|true|none|The URL that was clicked|
|ip|string|true|none|IP address of the clicker|
|location|string|true|none|Geographic location of the clicker|
|ua|string|true|none|User agent of the clicker|

<h2 id="tocS_MessagesContentRequest">MessagesContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagescontentrequest"></a>
<a id="schema_MessagesContentRequest"></a>
<a id="tocSmessagescontentrequest"></a>
<a id="tocsmessagescontentrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "abc123abc123abc123abc123abc123"
}
```

Request body for messages/content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls|

<h2 id="tocS_MessagesContentResponse">MessagesContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagescontentresponse"></a>
<a id="schema_MessagesContentResponse"></a>
<a id="tocSmessagescontentresponse"></a>
<a id="tocsmessagescontentresponse"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "from_email": "user@example.com",
  "from_name": "string",
  "subject": "string",
  "to": {
    "email": "user@example.com",
    "name": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "text": "string",
  "html": "string",
  "attachments": [
    {
      "name": "string",
      "type": "string",
      "content": "string"
    }
  ]
}
```

The content of the message (email or SMS)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[MessagesEmailContent](#schemamessagesemailcontent)|false|none|Email message content|
|*oneOf*|[MessagesSmsContent](#schemamessagessmscontent)|false|none|SMS message content|

<h2 id="tocS_MessagesEmailContent">MessagesEmailContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagesemailcontent"></a>
<a id="schema_MessagesEmailContent"></a>
<a id="tocSmessagesemailcontent"></a>
<a id="tocsmessagesemailcontent"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "from_email": "user@example.com",
  "from_name": "string",
  "subject": "string",
  "to": {
    "email": "user@example.com",
    "name": "string"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "text": "string",
  "html": "string",
  "attachments": [
    {
      "name": "string",
      "type": "string",
      "content": "string"
    }
  ]
}
```

The parsed content of a message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the message was sent|
|_id|string|true|none|The message's unique id|
|tags|[string]|true|none|List of tags associated with the message|
|from_email|string(email)|true|none|The sender email address|
|from_name|string \| null|false|none|The sender name|
|subject|string|true|none|The message subject|
|to|object|true|none|The recipient information|
|headers|object|true|none|The message headers|
|text|string|true|none|The text content of the message|
|html|string|true|none|The full HTML content of the message|
|attachments|[object]|true|none|List of attachments|

<h2 id="tocS_MessagesEmailDetails">MessagesEmailDetails</h2>
<!-- backwards compatibility -->
<a id="schemamessagesemaildetails"></a>
<a id="schema_MessagesEmailDetails"></a>
<a id="tocSmessagesemaildetails"></a>
<a id="tocsmessagesemaildetails"></a>

```json
{
  "sender": "user@example.com",
  "template": "string",
  "mc_template": "string",
  "subject": "string",
  "email": "user@example.com"
}
```

Details for an email

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sender|string(email)|true|none|The sender email address|
|template|string \| null|false|none|Template used if applicable|
|mc_template|string \| null|false|none|Mailchimp template used if applicable|
|subject|string|true|none|The message subject|
|email|string(email)|true|none|The recipient email address|

<h2 id="tocS_MessagesEmailInfo">MessagesEmailInfo</h2>
<!-- backwards compatibility -->
<a id="schemamessagesemailinfo"></a>
<a id="schema_MessagesEmailInfo"></a>
<a id="tocSmessagesemailinfo"></a>
<a id="tocsmessagesemailinfo"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "sender": "user@example.com",
  "template": "string",
  "mc_template": "string",
  "subject": "string",
  "email": "user@example.com",
  "opens": 0,
  "clicks": 0,
  "opens_detail": [
    {
      "ts": 0,
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "clicks_detail": [
    {
      "ts": 0,
      "url": "string",
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "state": "sent",
  "metadata": {},
  "smtp_events": [
    {
      "ts": 0,
      "type": "sent",
      "diag": "string",
      "source_ip": "192.0.2.1",
      "destination_ip": "198.2.132.48",
      "size": 0
    }
  ],
  "diag": "string",
  "subaccount": "string",
  "resends": [
    {}
  ],
  "reject": {
    "reason": "string",
    "last_event_at": "string"
  },
  "bounce_description": "string"
}
```

Detailed information about a sent email message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the message was sent|
|_id|string|true|none|The message's unique id|
|tags|[string]|true|none|List of tags associated with the message|
|sender|string(email)|true|none|The sender email address|
|template|string \| null|false|none|Template used if applicable|
|mc_template|string \| null|false|none|Mailchimp template used if applicable|
|subject|string|true|none|The message subject|
|email|string(email)|true|none|The recipient email address|
|opens|integer|true|none|Number of times the message has been opened|
|clicks|integer|true|none|Number of times links in the message have been clicked|
|opens_detail|[[MessagesOpenDetail](#schemamessagesopendetail)]|true|none|Details about opens, if captured|
|clicks_detail|[[MessagesClickDetail](#schemamessagesclickdetail)]|true|none|Details about clicks, if captured|
|state|string|true|none|Sending status of this message|
|metadata|object|false|none|Any custom metadata provided when the message was sent|
|smtp_events|[[MessagesSmtpEvent](#schemamessagessmtpevent)]|true|none|SMTP events related to the message|
|diag|string \| null|true|none|Diagnostic information about why the message was rejected|
|subaccount|string \| null|true|none|The subaccount used to send the message|
|resends|[object]|true|none|Array of resend attempts|
|reject|object \| null|true|none|Rejection details if message was rejected|
|bounce_description|string|false|none|Description of bounce/rejection reason (only present for rejected messages)|

#### Enumerated Values

|Property|Value|
|---|---|
|state|sent|
|state|bounced|
|state|rejected|
|state|queued|
|state|scheduled|
|state|canceled|

<h2 id="tocS_MessagesInfoRequest">MessagesInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesinforequest"></a>
<a id="schema_MessagesInfoRequest"></a>
<a id="tocSmessagesinforequest"></a>
<a id="tocsmessagesinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "abc123abc123abc123abc123abc123"
}
```

Request body for messages/info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls|

<h2 id="tocS_MessagesInfoResponse">MessagesInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagesinforesponse"></a>
<a id="schema_MessagesInfoResponse"></a>
<a id="tocSmessagesinforesponse"></a>
<a id="tocsmessagesinforesponse"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "sender": "user@example.com",
  "template": "string",
  "mc_template": "string",
  "subject": "string",
  "email": "user@example.com",
  "opens": 0,
  "clicks": 0,
  "opens_detail": [
    {
      "ts": 0,
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "clicks_detail": [
    {
      "ts": 0,
      "url": "string",
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "state": "sent",
  "metadata": {},
  "smtp_events": [
    {
      "ts": 0,
      "type": "sent",
      "diag": "string",
      "source_ip": "192.0.2.1",
      "destination_ip": "198.2.132.48",
      "size": 0
    }
  ],
  "diag": "string",
  "subaccount": "string",
  "resends": [
    {}
  ],
  "reject": {
    "reason": "string",
    "last_event_at": "string"
  },
  "bounce_description": "string"
}
```

Information about the message (email or SMS)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[MessagesEmailInfo](#schemamessagesemailinfo)|false|none|Email message information|
|*oneOf*|[MessagesSmsInfo](#schemamessagessmsinfo)|false|none|SMS message information|

<h2 id="tocS_MessagesListScheduledRequest">MessagesListScheduledRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessageslistscheduledrequest"></a>
<a id="schema_MessagesListScheduledRequest"></a>
<a id="tocSmessageslistscheduledrequest"></a>
<a id="tocsmessageslistscheduledrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "to": "test.recipient@example.com"
}
```

Request body for messages/list-scheduled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|to|string \| null(email)|false|none|an optional recipient address to restrict results to|

<h2 id="tocS_MessagesListScheduledResponse">MessagesListScheduledResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageslistscheduledresponse"></a>
<a id="schema_MessagesListScheduledResponse"></a>
<a id="tocSmessageslistscheduledresponse"></a>
<a id="tocsmessageslistscheduledresponse"></a>

```json
[
  {
    "_id": "string",
    "created_at": "2025-08-29 18:47:42",
    "send_at": "2025-09-05 18:47:41",
    "from_email": "user@example.com",
    "to": "user@example.com",
    "subject": "string"
  }
]
```

Array of scheduled messages

<h2 id="tocS_MessagesMessageBase">MessagesMessageBase</h2>
<!-- backwards compatibility -->
<a id="schemamessagesmessagebase"></a>
<a id="schema_MessagesMessageBase"></a>
<a id="tocSmessagesmessagebase"></a>
<a id="tocsmessagesmessagebase"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ]
}
```

Core message information returned by Mandrill API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the message was sent|
|_id|string|true|none|The message's unique id|
|tags|[string]|true|none|List of tags associated with the message|

<h2 id="tocS_MessagesOpenDetail">MessagesOpenDetail</h2>
<!-- backwards compatibility -->
<a id="schemamessagesopendetail"></a>
<a id="schema_MessagesOpenDetail"></a>
<a id="tocSmessagesopendetail"></a>
<a id="tocsmessagesopendetail"></a>

```json
{
  "ts": 0,
  "ip": "string",
  "location": "string",
  "ua": "string"
}
```

Details about a message open event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the open occurred|
|ip|string|true|none|IP address of the opener|
|location|string|true|none|Geographic location of the opener|
|ua|string|true|none|User agent of the opener|

<h2 id="tocS_MessagesParseRequest">MessagesParseRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesparserequest"></a>
<a id="schema_MessagesParseRequest"></a>
<a id="tocSmessagesparserequest"></a>
<a id="tocsmessagesparserequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "From: sender@example.com\\nTo: recipient.email@example.com\\nSubject: Some Subject\\n\\nSome content."
}
```

Request body for messages/parse

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|raw_message|string|true|none|the full MIME document of an email message|

<h2 id="tocS_MessagesParseResponse">MessagesParseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagesparseresponse"></a>
<a id="schema_MessagesParseResponse"></a>
<a id="tocSmessagesparseresponse"></a>
<a id="tocsmessagesparseresponse"></a>

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "text": "string",
  "text_flowed": true,
  "attachments": [
    {
      "name": "string",
      "type": "string",
      "content": "string",
      "binary": true
    }
  ],
  "from_email": "user@example.com",
  "from_name": "string",
  "html": "string",
  "to": [
    {
      "email": "user@example.com",
      "name": "string"
    }
  ],
  "subject": "string"
}
```

The parsed components of a raw MIME message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|The parsed message headers|
|text|string|true|none|The text content of the message|
|text_flowed|boolean|true|none|Whether the text content uses format=flowed|
|attachments|[object]|true|none|List of parsed attachments|
|from_email|string(email)|true|none|The sender email address|
|from_name|string|true|none|The sender name|
|html|string \| null|false|none|The HTML content if present|
|to|[object]|false|none|List of recipients|
|subject|string \| null|false|none|The message subject|

<h2 id="tocS_MessagesRequestComponent">MessagesRequestComponent</h2>
<!-- backwards compatibility -->
<a id="schemamessagesrequestcomponent"></a>
<a id="schema_MessagesRequestComponent"></a>
<a id="tocSmessagesrequestcomponent"></a>
<a id="tocsmessagesrequestcomponent"></a>

```json
{
  "html": "string",
  "text": "string",
  "subject": "string",
  "from_email": "message.from@example.com",
  "from_name": "Example Name",
  "to": [
    {
      "email": "to.email@example.com",
      "name": "Recipient Name",
      "type": "to"
    }
  ],
  "headers": {},
  "important": true,
  "track_opens": true,
  "track_clicks": true,
  "auto_text": true,
  "auto_html": true,
  "inline_css": true,
  "url_strip_qs": true,
  "preserve_recipients": true,
  "view_content_link": true,
  "bcc_address": "user@example.com",
  "tracking_domain": "string",
  "signing_domain": "string",
  "return_path_domain": "string",
  "merge": true,
  "merge_language": "mailchimp",
  "global_merge_vars": [
    {
      "name": "merge1",
      "content": "merge1 content"
    }
  ],
  "merge_vars": [
    {
      "rcpt": "recipient.email@example.com",
      "vars": [
        {
          "name": "merge1",
          "content": "merge1 content"
        }
      ]
    }
  ],
  "tags": [
    "string"
  ],
  "subaccount": "string",
  "google_analytics_domains": [
    "string"
  ],
  "google_analytics_campaign": [
    "string"
  ],
  "metadata": {
    "website": "www.example.com"
  },
  "recipient_metadata": [
    {
      "rcpt": "recipient.email@example.com",
      "values": {
        "user_id": 123456
      }
    }
  ],
  "attachments": [
    {
      "type": "text/plain",
      "name": "myfile.txt",
      "content": "string"
    }
  ],
  "images": [
    {
      "type": "image/png",
      "name": "string",
      "content": "string"
    }
  ]
}
```

Mandrill message payload for transactional email

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string \| null|false|none|the full HTML content to be sent|
|text|string \| null|false|none|optional full text content to be sent|
|subject|string \| null|false|none|the message subject|
|from_email|string \| null(email)|false|none|the sender email address|
|from_name|string \| null|false|none|optional from name to be used|
|to|[object]|false|none|an array of recipient information.|
|headers|object|false|none|optional extra headers to add to the message (most headers are allowed)|
|important|boolean \| null|false|none|whether or not this message is important, and should be delivered ahead of non-important messages|
|track_opens|boolean \| null|false|none|whether or not to turn on open tracking for the message|
|track_clicks|boolean \| null|false|none|whether or not to turn on click tracking for the message|
|auto_text|boolean \| null|false|none|whether or not to automatically generate a text part for messages that are not given text|
|auto_html|boolean \| null|false|none|whether or not to automatically generate an HTML part for messages that are not given HTML|
|inline_css|boolean \| null|false|none|whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size|
|url_strip_qs|boolean \| null|false|none|whether or not to strip the query string from URLs when aggregating tracked URL data|
|preserve_recipients|boolean \| null|false|none|whether or not to expose all recipients in to "To" header for each email|
|view_content_link|boolean \| null|false|none|set to false to remove content logging for sensitive emails|
|bcc_address|string \| null(email)|false|none|an optional address to receive an exact copy of each recipient's email|
|tracking_domain|string \| null|false|none|a custom domain to use for tracking opens and clicks instead of mandrillapp.com|
|signing_domain|string \| null|false|none|a custom domain to use for SPF/DKIM signing instead of mandrill (for "via" or "on behalf of" in email clients)|
|return_path_domain|string \| null|false|none|a custom domain to use for the messages's return-path|
|merge|boolean \| null|false|none|whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.|
|merge_language|string \| null|false|none|the merge tag language to use when evaluating merge tags, either mailchimp or handlebars Possible values: "mailchimp" or "handlebars".|
|global_merge_vars|[[MergeVar](#schemamergevar)]|false|none|global merge variables to use for all recipients. You can override these per recipient.|
|merge_vars|[object]|false|none|per-recipient merge variables, which override global merge variables with the same name.|
|tags|[string]|false|none|an array of string to tag the message with. Stats are accumulated using tags, though we only store the first 100 we see, so this should not be unique or change frequently. Tags should be 50 characters or less. Any tags starting with an underscore are reserved for internal use and will cause errors.|
|subaccount|string \| null|false|none|the unique id of a subaccount for this message - must already exist or will fail with an error|
|google_analytics_domains|[string]|false|none|an array of strings indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically.|
|google_analytics_campaign|[string] \| string|false|none|optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.|
|metadata|object|false|none|metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.|
|recipient_metadata|[object]|false|none|Per-recipient metadata that will override the global values specified in the metadata parameter.|
|attachments|[object]|false|none|an array of supported attachments to add to the message|
|images|[object]|false|none|an array of embedded images to add to the message|

#### Enumerated Values

|Property|Value|
|---|---|
|merge_language|mailchimp|
|merge_language|handlebars|

<h2 id="tocS_MessagesRescheduleRequest">MessagesRescheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesreschedulerequest"></a>
<a id="schema_MessagesRescheduleRequest"></a>
<a id="tocSmessagesreschedulerequest"></a>
<a id="tocsmessagesreschedulerequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "I_dtFt2ZNPW5QD9-FaDU1A",
  "send_at": "2020-06-01 08:15:01"
}
```

Request body for messages/reschedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled|
|send_at|string(date-time)|true|none|the new UTC timestamp when the message should sent. Mandrill can't time travel, so if you specify a time in past the message will be sent immediately|

<h2 id="tocS_MessagesRescheduleResponse">MessagesRescheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagesrescheduleresponse"></a>
<a id="schema_MessagesRescheduleResponse"></a>
<a id="tocSmessagesrescheduleresponse"></a>
<a id="tocsmessagesrescheduleresponse"></a>

```json
{
  "_id": "string",
  "created_at": "2025-08-29 18:47:42",
  "send_at": "2025-09-05 18:47:41",
  "from_email": "user@example.com",
  "to": "user@example.com",
  "subject": "string"
}
```

Information about a scheduled message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|The message unique identifier|
|created_at|string|true|none|When the message was created|
|send_at|string|true|none|When the message is scheduled to be sent|
|from_email|string(email)|true|none|The sender email address|
|to|string(email)|true|none|The recipient email address|
|subject|string|true|none|The message subject|

<h2 id="tocS_MessagesScheduled">MessagesScheduled</h2>
<!-- backwards compatibility -->
<a id="schemamessagesscheduled"></a>
<a id="schema_MessagesScheduled"></a>
<a id="tocSmessagesscheduled"></a>
<a id="tocsmessagesscheduled"></a>

```json
{
  "_id": "string",
  "created_at": "2025-08-29 18:47:42",
  "send_at": "2025-09-05 18:47:41",
  "from_email": "user@example.com",
  "to": "user@example.com",
  "subject": "string"
}
```

Information about a scheduled message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|The message unique identifier|
|created_at|string|true|none|When the message was created|
|send_at|string|true|none|When the message is scheduled to be sent|
|from_email|string(email)|true|none|The sender email address|
|to|string(email)|true|none|The recipient email address|
|subject|string|true|none|The message subject|

<h2 id="tocS_MessagesSearchRequest">MessagesSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchrequest"></a>
<a id="schema_MessagesSearchRequest"></a>
<a id="tocSmessagessearchrequest"></a>
<a id="tocsmessagessearchrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "query": "*",
  "date_from": "1970-01-01",
  "date_to": "1970-01-01",
  "tags": [
    "string"
  ],
  "senders": [
    "user@example.com"
  ],
  "api_keys": [
    "string"
  ],
  "limit": 100
}
```

Request body for messages/search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|query|string|false|none|search terms to find matching messages|
|date_from|string \| null(date)|false|none|start date|
|date_to|string \| null(date)|false|none|end date|
|tags|[string]|false|none|an array of tag names to narrow the search to|
|senders|[string(email)]|false|none|an array of sender addresses to narrow the search to|
|api_keys|[string]|false|none|an array of API keys to narrow the search to|
|limit|integer|false|none|the maximum number of results to return, defaults to 100, upper limit of 1000|

<h2 id="tocS_MessagesSearchResponse">MessagesSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchresponse"></a>
<a id="schema_MessagesSearchResponse"></a>
<a id="tocSmessagessearchresponse"></a>
<a id="tocsmessagessearchresponse"></a>

```json
[
  {
    "ts": 0,
    "_id": "string",
    "tags": [
      "string"
    ],
    "sender": "user@example.com",
    "template": "string",
    "mc_template": "string",
    "subject": "string",
    "email": "user@example.com",
    "opens": 0,
    "clicks": 0,
    "opens_detail": [
      {
        "ts": 0,
        "ip": "string",
        "location": "string",
        "ua": "string"
      }
    ],
    "clicks_detail": [
      {
        "ts": 0,
        "url": "string",
        "ip": "string",
        "location": "string",
        "ua": "string"
      }
    ],
    "state": "sent",
    "metadata": {},
    "smtp_events": [
      {
        "ts": 0,
        "type": "sent",
        "diag": "string",
        "source_ip": "192.0.2.1",
        "destination_ip": "198.2.132.48",
        "size": 0
      }
    ],
    "diag": "string",
    "subaccount": "string",
    "resends": [
      {}
    ],
    "reject": {
      "reason": "string",
      "last_event_at": "string"
    },
    "bounce_description": "string"
  }
]
```

Array of messages matching the search query (can include both email and SMS messages)

<h2 id="tocS_MessagesSearchTimeSeries">MessagesSearchTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchtimeseries"></a>
<a id="schema_MessagesSearchTimeSeries"></a>
<a id="tocSmessagessearchtimeseries"></a>
<a id="tocsmessagessearchtimeseries"></a>

```json
{
  "time": "2025-08-29 18:00:00",
  "sent": 0,
  "opens": 0,
  "clicks": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "unique_opens": 0,
  "unique_clicks": 0
}
```

Time series data point for message search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string|true|none|The hour that the statistic occurred|
|sent|integer|true|none|The number of emails sent during the time period|
|opens|integer|true|none|The number of emails opened during the time period|
|clicks|integer|true|none|The number of clicks during the time period|
|hard_bounces|integer|true|none|The number of hard bounces during the time period|
|soft_bounces|integer|true|none|The number of soft bounces during the time period|
|rejects|integer|true|none|The number of emails rejected during the time period|
|complaints|integer|true|none|The number of spam complaints during the time period|
|unsubs|integer|true|none|The number of unsubscribes during the time period|
|unique_opens|integer|true|none|The number of unique opens during the time period|
|unique_clicks|integer|true|none|The number of unique clicks during the time period|

<h2 id="tocS_MessagesSearchTimeSeriesRequest">MessagesSearchTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchtimeseriesrequest"></a>
<a id="schema_MessagesSearchTimeSeriesRequest"></a>
<a id="tocSmessagessearchtimeseriesrequest"></a>
<a id="tocsmessagessearchtimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "query": "email:gmail.com",
  "date_from": "2013-01-01",
  "date_to": "2013-01-02",
  "tags": [
    "password-reset",
    "welcome"
  ],
  "senders": [
    "sender@example.com"
  ]
}
```

Request body for messages/search-time-series

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|query|string|false|none|the search terms to find matching messages for|
|date_from|string \| null(date)|false|none|start date|
|date_to|string \| null(date)|false|none|end date|
|tags|[string]|false|none|an array of tag names to narrow the search to, will return messages that contain ANY of the tags|
|senders|[string(email)]|false|none|an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders|

<h2 id="tocS_MessagesSearchTimeSeriesResponse">MessagesSearchTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchtimeseriesresponse"></a>
<a id="schema_MessagesSearchTimeSeriesResponse"></a>
<a id="tocSmessagessearchtimeseriesresponse"></a>
<a id="tocsmessagessearchtimeseriesresponse"></a>

```json
[
  {
    "time": "2025-08-29 18:00:00",
    "sent": 0,
    "opens": 0,
    "clicks": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "unique_opens": 0,
    "unique_clicks": 0
  }
]
```

Array of hourly message stats matching the search query

<h2 id="tocS_MessagesSendMcTemplateRequest">MessagesSendMcTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendmctemplaterequest"></a>
<a id="schema_MessagesSendMcTemplateRequest"></a>
<a id="tocSmessagessendmctemplaterequest"></a>
<a id="tocsmessagessendmctemplaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "mc_template_id": 12345,
  "mc_template_version": "published",
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

Request body for messages/send-mc-template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|mc_template_id|integer|true|none|the Mailchimp Transactional template ID from the user's account|
|mc_template_version|string|false|none|which version of the template to use - "draft" for draft content or "published" for published content. Defaults to "published". Note: requesting "published" when the template has not been published will return a 404 error.|
|message|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|none|the other information on the message to send - same as /messages/send|
|async|boolean \| null|false|none|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|ip_pool|string|false|none|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|send_at|string(date-time)|false|none|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

#### Enumerated Values

|Property|Value|
|---|---|
|mc_template_version|draft|
|mc_template_version|published|

<h2 id="tocS_MessagesSendMcTemplateResponse">MessagesSendMcTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendmctemplateresponse"></a>
<a id="schema_MessagesSendMcTemplateResponse"></a>
<a id="tocSmessagessendmctemplateresponse"></a>
<a id="tocsmessagessendmctemplateresponse"></a>

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

Array of send results, one per recipient

<h2 id="tocS_MessagesSendRawRequest">MessagesSendRawRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendrawrequest"></a>
<a id="schema_MessagesSendRawRequest"></a>
<a id="tocSmessagessendrawrequest"></a>
<a id="tocsmessagessendrawrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "raw_message": "string",
  "from_email": "user@example.com",
  "from_name": "string",
  "to": [
    "recipient.email@example.com"
  ],
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z",
  "return_path_domain": null
}
```

Request body for messages/send-raw

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|raw_message|string|true|none|the full MIME document of an email message|
|from_email|string \| null(email)|false|none|optionally define the sender address - otherwise we'll use the address found in the provided headers|
|from_name|string \| null|false|none|optionally define the sender alias|
|to|[string(email)]|false|none|optionally define the recipient to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document|
|async|boolean \| null|false|none|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|ip_pool|string|false|none|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|send_at|string(date-time)|false|none|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|
|return_path_domain|string \| null|false|none|a custom domain to use for the messages' return-path|

<h2 id="tocS_MessagesSendRawResponse">MessagesSendRawResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendrawresponse"></a>
<a id="schema_MessagesSendRawResponse"></a>
<a id="tocSmessagessendrawresponse"></a>
<a id="tocsmessagessendrawresponse"></a>

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

Array of send results, one per recipient

<h2 id="tocS_MessagesSendRequest">MessagesSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendrequest"></a>
<a id="schema_MessagesSendRequest"></a>
<a id="tocSmessagessendrequest"></a>
<a id="tocsmessagessendrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

Request body for messages/send

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|message|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|none|the information on the message to send|
|async|boolean \| null|false|none|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|ip_pool|string|false|none|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|send_at|string(date-time)|false|none|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

<h2 id="tocS_MessagesSendResponse">MessagesSendResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendresponse"></a>
<a id="schema_MessagesSendResponse"></a>
<a id="tocSmessagessendresponse"></a>
<a id="tocsmessagessendresponse"></a>

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

Array of send results, one per recipient

<h2 id="tocS_MessagesSendResult">MessagesSendResult</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendresult"></a>
<a id="schema_MessagesSendResult"></a>
<a id="tocSmessagessendresult"></a>
<a id="tocsmessagessendresult"></a>

```json
{
  "email": "recipient.email@example.com",
  "status": "sent",
  "reject_reason": null,
  "queued_reason": null,
  "_id": "string"
}
```

The sending results for a single recipient

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address of the recipient|
|status|string|true|none|The sending status of the recipient|
|reject_reason|string \| null|false|none|The reason for the rejection if the recipient status is rejected|
|queued_reason|string \| null|false|none|The reason for the queuing if the recipient status is queued|
|_id|string|true|none|The message's unique id|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|queued|
|status|scheduled|
|status|rejected|
|status|invalid|
|reject_reason|hard-bounce|
|reject_reason|soft-bounce|
|reject_reason|spam|
|reject_reason|unsub|
|reject_reason|custom|
|reject_reason|invalid-sender|
|reject_reason|invalid|
|reject_reason|test-mode-limit|
|reject_reason|unsigned|
|reject_reason|rule|
|queued_reason|attachments|
|queued_reason|multiple-recipients|
|queued_reason|free-trial-sends-exhausted|
|queued_reason|hourly-quota-exhausted|
|queued_reason|monthly-limit-reached|
|queued_reason|sending-paused|
|queued_reason|sending-suspended|
|queued_reason|account-suspended|
|queued_reason|sending-backlogged|

<h2 id="tocS_MessagesSendSmsRequest">MessagesSendSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendsmsrequest"></a>
<a id="schema_MessagesSendSmsRequest"></a>
<a id="tocSmessagessendsmsrequest"></a>
<a id="tocsmessagessendsmsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "message": {
    "sms": {
      "text": "Hello from Mandrill SMS!",
      "to": [
        "+10000000000",
        "+10000000001"
      ],
      "from": "+10000000000",
      "consent": "onetime",
      "track_clicks": true
    },
    "merge": true,
    "merge_language": "string",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "+11234567890",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ]
  },
  "async": true
}
```

Request body for messages/send-sms

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|message|object|true|none|none|
|async|boolean \| null|false|none|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send-sms will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|

<h2 id="tocS_MessagesSendSmsResponse">MessagesSendSmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendsmsresponse"></a>
<a id="schema_MessagesSendSmsResponse"></a>
<a id="tocSmessagessendsmsresponse"></a>
<a id="tocsmessagessendsmsresponse"></a>

```json
[
  {
    "to": "+10000000000",
    "from": "+10000000000",
    "status": "sent",
    "reject_reason": null,
    "queue_reason": null,
    "_id": "d451905551f64e279440e833d25b7ff0"
  }
]
```

Array of SMS send results, one per recipient

<h2 id="tocS_MessagesSendTemplateRequest">MessagesSendTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendtemplaterequest"></a>
<a id="schema_MessagesSendTemplateRequest"></a>
<a id="tocSmessagessendtemplaterequest"></a>
<a id="tocsmessagessendtemplaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "template_name": "string",
  "template_content": [
    {
      "name": "string",
      "content": "string"
    }
  ],
  "message": {
    "html": "string",
    "text": "string",
    "subject": "string",
    "from_email": "message.from@example.com",
    "from_name": "Example Name",
    "to": [
      {
        "email": "to.email@example.com",
        "name": "Recipient Name",
        "type": "to"
      }
    ],
    "headers": {},
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "auto_html": true,
    "inline_css": true,
    "url_strip_qs": true,
    "preserve_recipients": true,
    "view_content_link": true,
    "bcc_address": "user@example.com",
    "tracking_domain": "string",
    "signing_domain": "string",
    "return_path_domain": "string",
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [
      {
        "name": "merge1",
        "content": "merge1 content"
      }
    ],
    "merge_vars": [
      {
        "rcpt": "recipient.email@example.com",
        "vars": [
          {
            "name": "merge1",
            "content": "merge1 content"
          }
        ]
      }
    ],
    "tags": [
      "string"
    ],
    "subaccount": "string",
    "google_analytics_domains": [
      "string"
    ],
    "google_analytics_campaign": [
      "string"
    ],
    "metadata": {
      "website": "www.example.com"
    },
    "recipient_metadata": [
      {
        "rcpt": "recipient.email@example.com",
        "values": {
          "user_id": 123456
        }
      }
    ],
    "attachments": [
      {
        "type": "text/plain",
        "name": "myfile.txt",
        "content": "string"
      }
    ],
    "images": [
      {
        "type": "image/png",
        "name": "string",
        "content": "string"
      }
    ]
  },
  "async": true,
  "ip_pool": "string",
  "send_at": "1970-01-01T00:00:00Z"
}
```

Request body for messages/send-template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|template_name|string|true|none|the immutable slug of a template that exists in the user's account. Make sure you don't use the template name as this one might change.|
|template_content|[object]|true|none|an array of template content to send. Each item in the array should be a struct with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block|
|message|[MessagesRequestComponent](#schemamessagesrequestcomponent)|true|none|the other information on the message to send - same as /messages/send, but without the html content|
|async|boolean \| null|false|none|enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.|
|ip_pool|string|false|none|the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.|
|send_at|string(date-time)|false|none|when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.|

<h2 id="tocS_MessagesSendTemplateResponse">MessagesSendTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagessendtemplateresponse"></a>
<a id="schema_MessagesSendTemplateResponse"></a>
<a id="tocSmessagessendtemplateresponse"></a>
<a id="tocsmessagessendtemplateresponse"></a>

```json
[
  {
    "email": "recipient.email@example.com",
    "status": "sent",
    "reject_reason": null,
    "queued_reason": null,
    "_id": "string"
  }
]
```

Array of send results, one per recipient

<h2 id="tocS_MessagesSmsContent">MessagesSmsContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagessmscontent"></a>
<a id="schema_MessagesSmsContent"></a>
<a id="tocSmessagessmscontent"></a>
<a id="tocsmessagessmscontent"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "channel": "sms",
  "to": "+10000000000",
  "from": "",
  "text": "string",
  "state": "canceled"
}
```

The content of an SMS message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the message was sent|
|_id|string|true|none|The message's unique id|
|tags|[string]|true|none|List of tags associated with the message|
|channel|string|true|none|The channel type for this message|
|to|string|true|none|The recipient phone number|
|from|string|true|none|The SMS sender identifier|
|text|string|true|none|The SMS message text content|
|state|string|true|none|Sending status of this message|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|sms|
|state|sent|
|state|bounced|
|state|rejected|
|state|queued|
|state|scheduled|
|state|canceled|

<h2 id="tocS_MessagesSmsEvent">MessagesSmsEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessagessmsevent"></a>
<a id="schema_MessagesSmsEvent"></a>
<a id="tocSmessagessmsevent"></a>
<a id="tocsmessagessmsevent"></a>

```json
{
  "ts": 1757080445,
  "state": "canceled",
  "sub_state": "NOT_SUBSCRIBED"
}
```

Details about an SMS event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the event occurred|
|state|string|true|none|The state of the SMS event|
|sub_state|string \| null|false|none|Additional state details|

#### Enumerated Values

|Property|Value|
|---|---|
|state|sent|
|state|delivered|
|state|failed|
|state|canceled|

<h2 id="tocS_MessagesSmsInfo">MessagesSmsInfo</h2>
<!-- backwards compatibility -->
<a id="schemamessagessmsinfo"></a>
<a id="schema_MessagesSmsInfo"></a>
<a id="tocSmessagessmsinfo"></a>
<a id="tocsmessagessmsinfo"></a>

```json
{
  "ts": 0,
  "_id": "string",
  "tags": [
    "string"
  ],
  "opens": 0,
  "clicks": 0,
  "opens_detail": [
    {
      "ts": 0,
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "clicks_detail": [
    {
      "ts": 0,
      "url": "string",
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "state": "sent",
  "metadata": {},
  "channel": "sms",
  "to": "+10000000000",
  "from": "",
  "text": "string",
  "consent": "onetime",
  "sms_events": [
    {
      "ts": 1757080445,
      "state": "canceled",
      "sub_state": "NOT_SUBSCRIBED"
    }
  ],
  "subaccount": "string",
  "reject": {
    "reason": "string",
    "last_event_at": "string"
  }
}
```

Detailed information about a sent SMS message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the message was sent|
|_id|string|true|none|The message's unique id|
|tags|[string]|true|none|List of tags associated with the message|
|opens|integer|true|none|Number of times the message has been opened|
|clicks|integer|true|none|Number of times links in the message have been clicked|
|opens_detail|[[MessagesOpenDetail](#schemamessagesopendetail)]|true|none|Details about opens, if captured|
|clicks_detail|[[MessagesClickDetail](#schemamessagesclickdetail)]|true|none|Details about clicks, if captured|
|state|string|true|none|Sending status of this message|
|metadata|object|false|none|Any custom metadata provided when the message was sent|
|channel|string|true|none|The channel type for this message|
|to|string|true|none|The recipient phone number|
|from|string|true|none|The SMS sender identifier|
|text|string|true|none|The SMS message text content|
|consent|string|true|none|The consent type for this SMS|
|sms_events|[[MessagesSmsEvent](#schemamessagessmsevent)]|true|none|SMS events related to the message|
|subaccount|string \| null|false|none|The subaccount used to send the message|
|reject|object \| null|false|none|Rejection details if message was rejected|

#### Enumerated Values

|Property|Value|
|---|---|
|state|sent|
|state|bounced|
|state|rejected|
|state|queued|
|state|scheduled|
|state|canceled|
|channel|sms|
|consent|onetime|
|consent|recurring|
|consent|recurring-no-confirm|

<h2 id="tocS_MessagesSmsMessage">MessagesSmsMessage</h2>
<!-- backwards compatibility -->
<a id="schemamessagessmsmessage"></a>
<a id="schema_MessagesSmsMessage"></a>
<a id="tocSmessagessmsmessage"></a>
<a id="tocsmessagessmsmessage"></a>

```json
{
  "to": "+10000000000",
  "from": "+10000000000",
  "status": "sent",
  "reject_reason": null,
  "queue_reason": null,
  "_id": "d451905551f64e279440e833d25b7ff0"
}
```

The sending results for a single SMS recipient

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string|true|none|The phone number of the recipient|
|from|string|true|none|The phone number of the sender|
|status|string|true|none|The sending status of the recipient|
|reject_reason|string \| null|false|none|The reason for the rejection if the recipient status is rejected|
|queue_reason|string \| null|false|none|The reason for the queuing if the recipient status is queued|
|_id|string|true|none|The message's unique id|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|queued|
|status|scheduled|
|status|rejected|
|status|invalid|
|reject_reason|hard-bounce|
|reject_reason|soft-bounce|
|reject_reason|spam|
|reject_reason|unsub|
|reject_reason|custom|
|reject_reason|invalid-sender|
|reject_reason|invalid|
|reject_reason|test-mode-limit|
|reject_reason|unsigned|
|reject_reason|rule|
|queue_reason|async requested by user|
|queue_reason|multiple recipients|

<h2 id="tocS_MessagesSmtpEvent">MessagesSmtpEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessagessmtpevent"></a>
<a id="schema_MessagesSmtpEvent"></a>
<a id="tocSmessagessmtpevent"></a>
<a id="tocsmessagessmtpevent"></a>

```json
{
  "ts": 0,
  "type": "sent",
  "diag": "string",
  "source_ip": "192.0.2.1",
  "destination_ip": "198.2.132.48",
  "size": 0
}
```

Details about an SMTP event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ts|integer|true|none|Unix timestamp when the event occurred|
|type|string|true|none|The type of SMTP event|
|diag|string|true|none|The SMTP response from the recipient's server or internal diagnostic|
|source_ip|string(ipv4)|true|none|The IP address that sent the message|
|destination_ip|string|true|none|The IP address of the recipient's server (empty string for internal processing)|
|size|integer|true|none|The size of the message in bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sent|
|type|bounced|
|type|rejected|
|type|delivered|

<h2 id="tocS_MessagesTrackingFields">MessagesTrackingFields</h2>
<!-- backwards compatibility -->
<a id="schemamessagestrackingfields"></a>
<a id="schema_MessagesTrackingFields"></a>
<a id="tocSmessagestrackingfields"></a>
<a id="tocsmessagestrackingfields"></a>

```json
{
  "opens": 0,
  "clicks": 0,
  "opens_detail": [
    {
      "ts": 0,
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "clicks_detail": [
    {
      "ts": 0,
      "url": "string",
      "ip": "string",
      "location": "string",
      "ua": "string"
    }
  ],
  "state": "sent",
  "metadata": {}
}
```

Fields for tracking activity of a message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|opens|integer|true|none|Number of times the message has been opened|
|clicks|integer|true|none|Number of times links in the message have been clicked|
|opens_detail|[[MessagesOpenDetail](#schemamessagesopendetail)]|true|none|Details about opens, if captured|
|clicks_detail|[[MessagesClickDetail](#schemamessagesclickdetail)]|true|none|Details about clicks, if captured|
|state|string|true|none|Sending status of this message|
|metadata|object|false|none|Any custom metadata provided when the message was sent|

#### Enumerated Values

|Property|Value|
|---|---|
|state|sent|
|state|bounced|
|state|rejected|
|state|queued|
|state|scheduled|
|state|canceled|

<h2 id="tocS_MetadataAddRequest">MetadataAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemametadataaddrequest"></a>
<a id="schema_MetadataAddRequest"></a>
<a id="tocSmetadataaddrequest"></a>
<a id="tocsmetadataaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Request payload for adding a custom metadata field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|A unique identifier for the metadata field|
|view_template|string \| null|false|none|Optional Mustache template to control how the metadata is rendered in your activity log|

<h2 id="tocS_MetadataAddResponse">MetadataAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadataaddresponse"></a>
<a id="schema_MetadataAddResponse"></a>
<a id="tocSmetadataaddresponse"></a>
<a id="tocsmetadataaddresponse"></a>

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Response data for metadata field operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique identifier for the metadata field|
|state|string|true|none|Current state of the metadata field|
|view_template|string \| null|false|none|Mustache template to control how the metadata is rendered in activity logs|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|delete|
|state|index|
|state|failed|

<h2 id="tocS_MetadataDeleteRequest">MetadataDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemametadatadeleterequest"></a>
<a id="schema_MetadataDeleteRequest"></a>
<a id="tocSmetadatadeleterequest"></a>
<a id="tocsmetadatadeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id"
}
```

Request payload for deleting a custom metadata field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|The unique identifier of the metadata field to delete|

<h2 id="tocS_MetadataDeleteResponse">MetadataDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadatadeleteresponse"></a>
<a id="schema_MetadataDeleteResponse"></a>
<a id="tocSmetadatadeleteresponse"></a>
<a id="tocsmetadatadeleteresponse"></a>

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Response data for metadata field operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique identifier for the metadata field|
|state|string|true|none|Current state of the metadata field|
|view_template|string \| null|false|none|Mustache template to control how the metadata is rendered in activity logs|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|delete|
|state|index|
|state|failed|

<h2 id="tocS_MetadataListRequest">MetadataListRequest</h2>
<!-- backwards compatibility -->
<a id="schemametadatalistrequest"></a>
<a id="schema_MetadataListRequest"></a>
<a id="tocSmetadatalistrequest"></a>
<a id="tocsmetadatalistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing custom metadata fields

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_MetadataListResponse">MetadataListResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadatalistresponse"></a>
<a id="schema_MetadataListResponse"></a>
<a id="tocSmetadatalistresponse"></a>
<a id="tocsmetadatalistresponse"></a>

```json
[
  {
    "name": "group_id",
    "state": "active",
    "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
  }
]
```

List of custom metadata fields for the account

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Response data for metadata field operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique identifier for the metadata field|
|state|string|true|none|Current state of the metadata field|
|view_template|string \| null|false|none|Mustache template to control how the metadata is rendered in activity logs|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|delete|
|state|index|
|state|failed|

<h2 id="tocS_MetadataResponseData">MetadataResponseData</h2>
<!-- backwards compatibility -->
<a id="schemametadataresponsedata"></a>
<a id="schema_MetadataResponseData"></a>
<a id="tocSmetadataresponsedata"></a>
<a id="tocsmetadataresponsedata"></a>

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Response data for metadata field operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique identifier for the metadata field|
|state|string|true|none|Current state of the metadata field|
|view_template|string \| null|false|none|Mustache template to control how the metadata is rendered in activity logs|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|delete|
|state|index|
|state|failed|

<h2 id="tocS_MetadataUpdateRequest">MetadataUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemametadataupdaterequest"></a>
<a id="schema_MetadataUpdateRequest"></a>
<a id="tocSmetadataupdaterequest"></a>
<a id="tocsmetadataupdaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "group_id",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Request payload for updating a custom metadata field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|The unique identifier of the metadata field to update|
|view_template|string|true|none|Mustache template to control how the metadata is rendered in your activity log|

<h2 id="tocS_MetadataUpdateResponse">MetadataUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadataupdateresponse"></a>
<a id="schema_MetadataUpdateResponse"></a>
<a id="tocSmetadataupdateresponse"></a>
<a id="tocsmetadataupdateresponse"></a>

```json
{
  "name": "group_id",
  "state": "active",
  "view_template": "<a href=\"http://yourapplication.com/user/{{value}}\">{{value}}</a>"
}
```

Response data for metadata field operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique identifier for the metadata field|
|state|string|true|none|Current state of the metadata field|
|view_template|string \| null|false|none|Mustache template to control how the metadata is rendered in activity logs|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|delete|
|state|index|
|state|failed|

<h2 id="tocS_RejectsAddRequest">RejectsAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectsaddrequest"></a>
<a id="schema_RejectsAddRequest"></a>
<a id="tocSrejectsaddrequest"></a>
<a id="tocsrejectsaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "comment": "Manually blocked due to spam complaints",
  "subaccount": "cust-123"
}
```

Request payload for adding an email to the rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string(email)|true|none|An email address to block|
|comment|string|false|none|An optional comment describing the rejection|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the blacklist entry|

<h2 id="tocS_RejectsAddResponse">RejectsAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectsaddresponse"></a>
<a id="schema_RejectsAddResponse"></a>
<a id="tocSrejectsaddresponse"></a>
<a id="tocsrejectsaddresponse"></a>

```json
{
  "email": "user@example.com",
  "added": true
}
```

Response for adding an email to the rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address you provided|
|added|boolean|true|none|Whether the operation succeeded|

<h2 id="tocS_RejectsAddSmsRequest">RejectsAddSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectsaddsmsrequest"></a>
<a id="schema_RejectsAddSmsRequest"></a>
<a id="tocSrejectsaddsmsrequest"></a>
<a id="tocsrejectsaddsmsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "comment": "Manually blocked due to spam",
  "subaccount": "cust-123"
}
```

Request payload for adding a phone number to the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|phone|string|true|none|A phone number to block in E.164 format|
|comment|string|false|none|An optional comment describing the rejection|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the denylist entry|

<h2 id="tocS_RejectsAddSmsResponse">RejectsAddSmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectsaddsmsresponse"></a>
<a id="schema_RejectsAddSmsResponse"></a>
<a id="tocSrejectsaddsmsresponse"></a>
<a id="tocsrejectsaddsmsresponse"></a>

```json
{
  "phone": "+12025551234",
  "added": true
}
```

Response for adding or deleting a phone number from the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|The phone number you provided|
|added|boolean|false|none|Whether the add operation succeeded|
|deleted|boolean|false|none|Whether the delete operation succeeded|
|subaccount|string \| null|false|none|The subaccount denylist that the phone number was affected in, if any|

<h2 id="tocS_RejectsDeleteRequest">RejectsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectsdeleterequest"></a>
<a id="schema_RejectsDeleteRequest"></a>
<a id="tocSrejectsdeleterequest"></a>
<a id="tocsrejectsdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "subaccount": "cust-123"
}
```

Request payload for deleting an email from the rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string(email)|true|none|An email address to remove from the blacklist|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the blacklist deletion|

<h2 id="tocS_RejectsDeleteResponse">RejectsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectsdeleteresponse"></a>
<a id="schema_RejectsDeleteResponse"></a>
<a id="tocSrejectsdeleteresponse"></a>
<a id="tocsrejectsdeleteresponse"></a>

```json
{
  "email": "user@example.com",
  "deleted": true,
  "subaccount": "cust-123"
}
```

Response for deleting an email from the rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address that was removed from the blacklist|
|deleted|boolean|true|none|Whether the address was deleted successfully|
|subaccount|string|false|none|The subaccount blacklist that the address was removed from, if any|

<h2 id="tocS_RejectsDeleteSmsRequest">RejectsDeleteSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectsdeletesmsrequest"></a>
<a id="schema_RejectsDeleteSmsRequest"></a>
<a id="tocSrejectsdeletesmsrequest"></a>
<a id="tocsrejectsdeletesmsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "subaccount": "cust-123"
}
```

Request payload for deleting a phone number from the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|phone|string|true|none|A phone number in E.164 format|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the denylist deletion|

<h2 id="tocS_RejectsDeleteSmsResponse">RejectsDeleteSmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectsdeletesmsresponse"></a>
<a id="schema_RejectsDeleteSmsResponse"></a>
<a id="tocSrejectsdeletesmsresponse"></a>
<a id="tocsrejectsdeletesmsresponse"></a>

```json
{
  "phone": "+12025551234",
  "added": true
}
```

Response for adding or deleting a phone number from the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|The phone number you provided|
|added|boolean|false|none|Whether the add operation succeeded|
|deleted|boolean|false|none|Whether the delete operation succeeded|
|subaccount|string \| null|false|none|The subaccount denylist that the phone number was affected in, if any|

<h2 id="tocS_RejectsListRequest">RejectsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectslistrequest"></a>
<a id="schema_RejectsListRequest"></a>
<a id="tocSrejectslistrequest"></a>
<a id="tocsrejectslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "email": "user@example.com",
  "include_expired": false,
  "subaccount": "cust-123"
}
```

Request payload for retrieving email rejection blacklist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|email|string|false|none|An optional email address to search by|
|include_expired|boolean|false|none|Whether to include rejections that have already expired|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the blacklist|

<h2 id="tocS_RejectsListResponse">RejectsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectslistresponse"></a>
<a id="schema_RejectsListResponse"></a>
<a id="tocSrejectslistresponse"></a>
<a id="tocsrejectslistresponse"></a>

```json
[
  {
    "email": "user1@example.com",
    "reason": "hard-bounce",
    "detail": "550 5.1.1 User unknown",
    "created_at": "2023-01-15 10:30:00",
    "last_event_at": "2023-01-15 10:30:00",
    "expires_at": "2023-02-15 10:30:00",
    "expired": false,
    "sender": null,
    "subaccount": null
  },
  {
    "email": "user2@example.com",
    "reason": "spam",
    "detail": "Manually blocked due to spam complaints",
    "created_at": "2023-01-10 14:20:00",
    "last_event_at": "2023-01-10 14:20:00",
    "expires_at": "2023-02-10 14:20:00",
    "expired": false,
    "sender": {
      "address": "sender@example.com",
      "created_at": "2023-01-01 00:00:00",
      "sent": 100,
      "hard_bounces": 5,
      "soft_bounces": 2,
      "rejects": 7,
      "complaints": 1,
      "unsubs": 3
    },
    "subaccount": "subaccount-123"
  }
]
```

Response containing up to 1000 rejection blacklist entries

<h2 id="tocS_RejectsListSmsRequest">RejectsListSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectslistsmsrequest"></a>
<a id="schema_RejectsListSmsRequest"></a>
<a id="tocSrejectslistsmsrequest"></a>
<a id="tocsrejectslistsmsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "phone": "+12025551234",
  "include_expired": false,
  "subaccount": "cust-123"
}
```

Request payload for retrieving the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|phone|string|false|none|An optional phone number to search by in E.164 format|
|include_expired|boolean|false|none|Whether to include rejections that have already expired|
|subaccount|string|false|none|An optional unique identifier for the subaccount to limit the denylist|

<h2 id="tocS_RejectsListSmsResponse">RejectsListSmsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectslistsmsresponse"></a>
<a id="schema_RejectsListSmsResponse"></a>
<a id="tocSrejectslistsmsresponse"></a>
<a id="tocsrejectslistsmsresponse"></a>

```json
[
  {
    "phone": "+12025551234",
    "created_at": "2023-01-15 10:30:00",
    "expires_at": null,
    "expired": false,
    "subaccount": null
  }
]
```

Response containing up to 1000 SMS rejection denylist entries

<h2 id="tocS_RejectsSmsReject">RejectsSmsReject</h2>
<!-- backwards compatibility -->
<a id="schemarejectssmsreject"></a>
<a id="schema_RejectsSmsReject"></a>
<a id="tocSrejectssmsreject"></a>
<a id="tocsrejectssmsreject"></a>

```json
{
  "phone": "+12025551234",
  "added": true
}
```

Response for adding or deleting a phone number from the SMS rejection denylist

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|true|none|The phone number you provided|
|added|boolean|false|none|Whether the add operation succeeded|
|deleted|boolean|false|none|Whether the delete operation succeeded|
|subaccount|string \| null|false|none|The subaccount denylist that the phone number was affected in, if any|

<h2 id="tocS_SendersAddDomainRequest">SendersAddDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendersadddomainrequest"></a>
<a id="schema_SendersAddDomainRequest"></a>
<a id="tocSsendersadddomainrequest"></a>
<a id="tocssendersadddomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

Request body for adding a sender domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|none|

<h2 id="tocS_SendersAddDomainResponse">SendersAddDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendersadddomainresponse"></a>
<a id="schema_SendersAddDomainResponse"></a>
<a id="tocSsendersadddomainresponse"></a>
<a id="tocssendersadddomainresponse"></a>

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

A domain used for sending by the account, including verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|false|none|none|
|created_at|string(date-time)|false|none|The date and time that the sending domain was first seen.|
|last_tested_at|string(date-time)|false|none|The date and time that the sending domain was last tested.|
|spf|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's SPF record.|
|dkim|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's DKIM record.|
|dkim2|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's second DKIM record.|
|dmarc|[DmarcDetail](#schemadmarcdetail)|false|none|Details about the domain's DMARC record.|
|verified_at|string(date-time)|false|none|The date and time that the sending domain was verified.|
|valid_signing|boolean|false|none|Whether this domain can be used to sign messages.|
|verify_txt_key|string|false|none|The key for the TXT record used to verify the domain.|

<h2 id="tocS_SendersCheckDomainRequest">SendersCheckDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenderscheckdomainrequest"></a>
<a id="schema_SendersCheckDomainRequest"></a>
<a id="tocSsenderscheckdomainrequest"></a>
<a id="tocssenderscheckdomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

Request body for checking a sender domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|none|

<h2 id="tocS_SendersCheckDomainResponse">SendersCheckDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenderscheckdomainresponse"></a>
<a id="schema_SendersCheckDomainResponse"></a>
<a id="tocSsenderscheckdomainresponse"></a>
<a id="tocssenderscheckdomainresponse"></a>

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

A domain used for sending by the account, including verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|false|none|none|
|created_at|string(date-time)|false|none|The date and time that the sending domain was first seen.|
|last_tested_at|string(date-time)|false|none|The date and time that the sending domain was last tested.|
|spf|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's SPF record.|
|dkim|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's DKIM record.|
|dkim2|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's second DKIM record.|
|dmarc|[DmarcDetail](#schemadmarcdetail)|false|none|Details about the domain's DMARC record.|
|verified_at|string(date-time)|false|none|The date and time that the sending domain was verified.|
|valid_signing|boolean|false|none|Whether this domain can be used to sign messages.|
|verify_txt_key|string|false|none|The key for the TXT record used to verify the domain.|

<h2 id="tocS_SendersDeleteDomainRequest">SendersDeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendersdeletedomainrequest"></a>
<a id="schema_SendersDeleteDomainRequest"></a>
<a id="tocSsendersdeletedomainrequest"></a>
<a id="tocssendersdeletedomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com"
}
```

Request body for deleting a sender domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|the domain name to delete|

<h2 id="tocS_SendersDeleteDomainResponse">SendersDeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendersdeletedomainresponse"></a>
<a id="schema_SendersDeleteDomainResponse"></a>
<a id="tocSsendersdeletedomainresponse"></a>
<a id="tocssendersdeletedomainresponse"></a>

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

A domain used for sending by the account, including verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|false|none|none|
|created_at|string(date-time)|false|none|The date and time that the sending domain was first seen.|
|last_tested_at|string(date-time)|false|none|The date and time that the sending domain was last tested.|
|spf|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's SPF record.|
|dkim|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's DKIM record.|
|dkim2|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's second DKIM record.|
|dmarc|[DmarcDetail](#schemadmarcdetail)|false|none|Details about the domain's DMARC record.|
|verified_at|string(date-time)|false|none|The date and time that the sending domain was verified.|
|valid_signing|boolean|false|none|Whether this domain can be used to sign messages.|
|verify_txt_key|string|false|none|The key for the TXT record used to verify the domain.|

<h2 id="tocS_DmarcDetail">DmarcDetail</h2>
<!-- backwards compatibility -->
<a id="schemadmarcdetail"></a>
<a id="schema_DmarcDetail"></a>
<a id="tocSdmarcdetail"></a>
<a id="tocsdmarcdetail"></a>

```json
{
  "valid": true,
  "error": "string"
}
```

Details about the DMARC status of a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|false|none|Whether this verification is valid.|
|error|string|false|none|An error message indicating why the verification failed.|

<h2 id="tocS_SendersDomainsRequest">SendersDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendersdomainsrequest"></a>
<a id="schema_SendersDomainsRequest"></a>
<a id="tocSsendersdomainsrequest"></a>
<a id="tocssendersdomainsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing sender domains

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_SendersDomainsResponse">SendersDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendersdomainsresponse"></a>
<a id="schema_SendersDomainsResponse"></a>
<a id="tocSsendersdomainsresponse"></a>
<a id="tocssendersdomainsresponse"></a>

```json
[
  {
    "domain": "example.com",
    "created_at": "1970-01-01T00:00:00Z",
    "last_tested_at": "1970-01-01T00:00:00Z",
    "spf": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dkim": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dkim2": {
      "valid": true,
      "valid_after": "1970-01-01T00:00:00Z",
      "error": "string"
    },
    "dmarc": {
      "valid": true,
      "error": "string"
    },
    "verified_at": "1970-01-01T00:00:00Z",
    "valid_signing": true,
    "verify_txt_key": "string"
  }
]
```

Array of sender domain information for each sending domain used by the account

<h2 id="tocS_SendersHourStat">SendersHourStat</h2>
<!-- backwards compatibility -->
<a id="schemasendershourstat"></a>
<a id="schema_SendersHourStat"></a>
<a id="tocSsendershourstat"></a>
<a id="tocssendershourstat"></a>

```json
{
  "time": "2013-01-01 15:30:27",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "opens": 0,
  "unique_opens": 0,
  "clicks": 0,
  "unique_clicks": 0
}
```

Hourly stats row for a sender over the last 30 days.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|false|none|UTC hour in YYYY-MM-DD HH:MM:SS|
|sent|integer|false|none|none|
|hard_bounces|integer|false|none|none|
|soft_bounces|integer|false|none|none|
|rejects|integer|false|none|none|
|complaints|integer|false|none|none|
|opens|integer|false|none|none|
|unique_opens|integer|false|none|none|
|clicks|integer|false|none|none|
|unique_clicks|integer|false|none|none|

<h2 id="tocS_SendersInfoRequest">SendersInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendersinforequest"></a>
<a id="schema_SendersInfoRequest"></a>
<a id="tocSsendersinforequest"></a>
<a id="tocssendersinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "address": "sender.example@mandrillapp.com"
}
```

Request payload for retrieving detailed information about a single sender

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|address|string(email)|true|none|The email address of the sender|

<h2 id="tocS_SendersInfoResponse">SendersInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendersinforesponse"></a>
<a id="schema_SendersInfoResponse"></a>
<a id="tocSsendersinforesponse"></a>
<a id="tocssendersinforesponse"></a>

```json
{
  "address": "sender.example@mandrillapp.com",
  "created_at": "2013-01-01 15:30:27",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "unique_opens": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

Detailed sender info including time-window stats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string(email)|false|none|The sender's email address|
|created_at|string(date-time)|false|none|UTC timestamp when first seen|
|sent|integer|false|none|Total messages sent by this sender|
|hard_bounces|integer|false|none|Total number of hard bounces by this sender|
|soft_bounces|integer|false|none|Total number of soft bounces by this sender|
|rejects|integer|false|none|Total number of rejected messages by this sender|
|complaints|integer|false|none|Total number of spam complaints for this sender|
|unsubs|integer|false|none|Total number of unsubscribe requests for this sender|
|opens|integer|false|none|Total number of times messages by this sender have been opened|
|clicks|integer|false|none|Total number of tracked URL clicks by this sender|
|unique_clicks|integer|false|none|Number of unique clicks for emails sent by this sender|
|unique_opens|integer|false|none|Number of unique opens for emails sent by this sender|
|stats|object|false|none|none|

<h2 id="tocS_SendersListRequest">SendersListRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenderslistrequest"></a>
<a id="schema_SendersListRequest"></a>
<a id="tocSsenderslistrequest"></a>
<a id="tocssenderslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing senders used by this account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_SendersListResponse">SendersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenderslistresponse"></a>
<a id="schema_SendersListResponse"></a>
<a id="tocSsenderslistresponse"></a>
<a id="tocssenderslistresponse"></a>

```json
[
  {
    "address": "sender.example@mandrillapp.com",
    "created_at": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  }
]
```

Array of sender information for each sending address used by the account

<h2 id="tocS_SendersSenderDomain">SendersSenderDomain</h2>
<!-- backwards compatibility -->
<a id="schemasenderssenderdomain"></a>
<a id="schema_SendersSenderDomain"></a>
<a id="tocSsenderssenderdomain"></a>
<a id="tocssenderssenderdomain"></a>

```json
{
  "domain": "example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "last_tested_at": "1970-01-01T00:00:00Z",
  "spf": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dkim2": {
    "valid": true,
    "valid_after": "1970-01-01T00:00:00Z",
    "error": "string"
  },
  "dmarc": {
    "valid": true,
    "error": "string"
  },
  "verified_at": "1970-01-01T00:00:00Z",
  "valid_signing": true,
  "verify_txt_key": "string"
}
```

A domain used for sending by the account, including verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|false|none|none|
|created_at|string(date-time)|false|none|The date and time that the sending domain was first seen.|
|last_tested_at|string(date-time)|false|none|The date and time that the sending domain was last tested.|
|spf|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's SPF record.|
|dkim|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's DKIM record.|
|dkim2|[VerificationDetail](#schemaverificationdetail)|false|none|Details about the domain's second DKIM record.|
|dmarc|[DmarcDetail](#schemadmarcdetail)|false|none|Details about the domain's DMARC record.|
|verified_at|string(date-time)|false|none|The date and time that the sending domain was verified.|
|valid_signing|boolean|false|none|Whether this domain can be used to sign messages.|
|verify_txt_key|string|false|none|The key for the TXT record used to verify the domain.|

<h2 id="tocS_SendersTimeSeriesRequest">SendersTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenderstimeseriesrequest"></a>
<a id="schema_SendersTimeSeriesRequest"></a>
<a id="tocSsenderstimeseriesrequest"></a>
<a id="tocssenderstimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "address": "sender.example@mandrillapp.com"
}
```

Request payload for retrieving hourly stats for a sender

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|address|string(email)|true|none|The email address of the sender|

<h2 id="tocS_SendersTimeSeriesResponse">SendersTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenderstimeseriesresponse"></a>
<a id="schema_SendersTimeSeriesResponse"></a>
<a id="tocSsenderstimeseriesresponse"></a>
<a id="tocssenderstimeseriesresponse"></a>

```json
[
  {
    "time": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0
  }
]
```

Array of hourly stats for a sender over the last 30 days

<h2 id="tocS_VerificationDetail">VerificationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdetail"></a>
<a id="schema_VerificationDetail"></a>
<a id="tocSverificationdetail"></a>
<a id="tocsverificationdetail"></a>

```json
{
  "valid": true,
  "valid_after": "1970-01-01T00:00:00Z",
  "error": "string"
}
```

Details about the verification status of a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|false|none|Whether this verification is valid.|
|valid_after|string(date-time)|false|none|The date and time that this verification was last tested.|
|error|string|false|none|An error message indicating why the verification failed.|

<h2 id="tocS_SendersVerifyDomainRequest">SendersVerifyDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendersverifydomainrequest"></a>
<a id="schema_SendersVerifyDomainRequest"></a>
<a id="tocSsendersverifydomainrequest"></a>
<a id="tocssendersverifydomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "example.com",
  "mailbox": "postmaster"
}
```

Request payload for sending a verification email to verify ownership of a domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|A domain name at which you can receive email|
|mailbox|string(mailbox)|true|none|A mailbox at the domain where the verification email should be sent|

<h2 id="tocS_SendersVerifyDomainResponse">SendersVerifyDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendersverifydomainresponse"></a>
<a id="schema_SendersVerifyDomainResponse"></a>
<a id="tocSsendersverifydomainresponse"></a>
<a id="tocssendersverifydomainresponse"></a>

```json
{
  "status": "sent",
  "domain": "example.com",
  "email": "postmaster@example.com"
}
```

Result of a sender domain verification email request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|domain|string(hostname)|true|none|none|
|email|string(email)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|sent|
|status|already_verified|

<h2 id="tocS_SubaccountsAddRequest">SubaccountsAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsaddrequest"></a>
<a id="schema_SubaccountsAddRequest"></a>
<a id="tocSsubaccountsaddrequest"></a>
<a id="tocssubaccountsaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123",
  "name": "ABC Widgets, Inc.",
  "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
  "custom_quota": null
}
```

Request payload for creating a new subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|A unique identifier for the subaccount to be used in sending calls|
|name|string \| null|false|none|An optional display name to further identify the subaccount|
|notes|string \| null|false|none|Optional extra text to associate with the subaccount|
|custom_quota|integer \| null|false|none|An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation|

<h2 id="tocS_SubaccountsAddResponse">SubaccountsAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsaddresponse"></a>
<a id="schema_SubaccountsAddResponse"></a>
<a id="tocSsubaccountsaddresponse"></a>
<a id="tocssubaccountsaddresponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsDeleteRequest">SubaccountsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsdeleterequest"></a>
<a id="schema_SubaccountsDeleteRequest"></a>
<a id="tocSsubaccountsdeleterequest"></a>
<a id="tocssubaccountsdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

Request payload for deleting a subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of the subaccount to delete|

<h2 id="tocS_SubaccountsDeleteResponse">SubaccountsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsdeleteresponse"></a>
<a id="schema_SubaccountsDeleteResponse"></a>
<a id="tocSsubaccountsdeleteresponse"></a>
<a id="tocssubaccountsdeleteresponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsInfoRequest">SubaccountsInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsinforequest"></a>
<a id="schema_SubaccountsInfoRequest"></a>
<a id="tocSsubaccountsinforequest"></a>
<a id="tocssubaccountsinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

Request payload for subaccount operations requiring only a subaccount ID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of the subaccount to query|

<h2 id="tocS_SubaccountsInfoResponse">SubaccountsInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsinforesponse"></a>
<a id="schema_SubaccountsInfoResponse"></a>
<a id="tocSsubaccountsinforesponse"></a>
<a id="tocssubaccountsinforesponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1,
  "sent_hourly": 0,
  "hourly_quota": 250,
  "notes": "",
  "last_30_days": {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0
  }
}
```

Complete subaccount information including sending statistics and configuration (returned by info endpoint)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|
|sent_hourly|integer|true|none|Number of emails the subaccount has sent in the last hour|
|hourly_quota|integer|true|none|Current hourly quota for the subaccount, either manual or reputation-based|
|notes|string|true|none|Optional extra text to associate with the subaccount|
|last_30_days|[StatsWindow](#schemastatswindow)|true|none|Sending statistics for this subaccount in the last 30 days|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsListRequest">SubaccountsListRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountslistrequest"></a>
<a id="schema_SubaccountsListRequest"></a>
<a id="tocSsubaccountslistrequest"></a>
<a id="tocssubaccountslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "q": "cust-1"
}
```

Request payload for listing subaccounts, optionally filtered by a prefix

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|q|string|false|none|An optional prefix to filter the subaccounts' ids and names|

<h2 id="tocS_SubaccountsListResponse">SubaccountsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountslistresponse"></a>
<a id="schema_SubaccountsListResponse"></a>
<a id="tocSsubaccountslistresponse"></a>
<a id="tocssubaccountslistresponse"></a>

```json
[
  {
    "id": "4532345",
    "name": "My Subaccount",
    "created_at": "2025-08-29 18:48:02.82578",
    "first_sent_at": null,
    "status": "active",
    "reputation": 33,
    "sent_weekly": 0,
    "sent_monthly": 0,
    "sent_total": 0,
    "custom_quota": 1
  }
]
```

List of subaccounts for the account, up to a maximum of 1,000

<h2 id="tocS_SubaccountsPauseRequest">SubaccountsPauseRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountspauserequest"></a>
<a id="schema_SubaccountsPauseRequest"></a>
<a id="tocSsubaccountspauserequest"></a>
<a id="tocssubaccountspauserequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

Request payload for pausing a subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of the subaccount to pause|

<h2 id="tocS_SubaccountsPauseResponse">SubaccountsPauseResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountspauseresponse"></a>
<a id="schema_SubaccountsPauseResponse"></a>
<a id="tocSsubaccountspauseresponse"></a>
<a id="tocssubaccountspauseresponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsResumeRequest">SubaccountsResumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsresumerequest"></a>
<a id="schema_SubaccountsResumeRequest"></a>
<a id="tocSsubaccountsresumerequest"></a>
<a id="tocssubaccountsresumerequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123"
}
```

Request payload for resuming a paused subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of the subaccount to resume|

<h2 id="tocS_SubaccountsResumeResponse">SubaccountsResumeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsresumeresponse"></a>
<a id="schema_SubaccountsResumeResponse"></a>
<a id="tocSsubaccountsresumeresponse"></a>
<a id="tocssubaccountsresumeresponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsSubaccount">SubaccountsSubaccount</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountssubaccount"></a>
<a id="schema_SubaccountsSubaccount"></a>
<a id="tocSsubaccountssubaccount"></a>
<a id="tocssubaccountssubaccount"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_SubaccountsUpdateRequest">SubaccountsUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsupdaterequest"></a>
<a id="schema_SubaccountsUpdateRequest"></a>
<a id="tocSsubaccountsupdaterequest"></a>
<a id="tocssubaccountsupdaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": "cust-123",
  "name": "ABC Widgets, Inc.",
  "notes": "Free plan user, signed up on 2013-01-01 12:00:00",
  "custom_quota": null
}
```

Request payload for updating an existing subaccount

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|string|true|none|The unique identifier of the subaccount to update|
|name|string \| null|false|none|An optional display name to further identify the subaccount|
|notes|string \| null|false|none|Optional extra text to associate with the subaccount|
|custom_quota|integer \| null|false|none|An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation|

<h2 id="tocS_SubaccountsUpdateResponse">SubaccountsUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubaccountsupdateresponse"></a>
<a id="schema_SubaccountsUpdateResponse"></a>
<a id="tocSsubaccountsupdateresponse"></a>
<a id="tocssubaccountsupdateresponse"></a>

```json
{
  "id": "4532345",
  "name": "My Subaccount",
  "created_at": "2025-08-29 18:48:02.82578",
  "first_sent_at": null,
  "status": "active",
  "reputation": 33,
  "sent_weekly": 0,
  "sent_monthly": 0,
  "sent_total": 0,
  "custom_quota": 1
}
```

Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the subaccount|
|name|string|false|none|Optional display name for the subaccount|
|created_at|string|true|none|Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format|
|first_sent_at|string \| null|false|none|Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format|
|status|string|true|none|Current sending status of the subaccount|
|reputation|integer|true|none|Subaccount reputation on a scale from 0 to 100|
|sent_weekly|integer|true|none|Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)|
|sent_monthly|integer|true|none|Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)|
|sent_total|integer|true|none|Number of emails the subaccount has sent since it was created|
|custom_quota|integer|false|none|Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_TagsAllTimeSeriesRequest">TagsAllTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schematagsalltimeseriesrequest"></a>
<a id="schema_TagsAllTimeSeriesRequest"></a>
<a id="tocStagsalltimeseriesrequest"></a>
<a id="tocstagsalltimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for retrieving time series data for all tags

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_TagsAllTimeSeriesResponse">TagsAllTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schematagsalltimeseriesresponse"></a>
<a id="schema_TagsAllTimeSeriesResponse"></a>
<a id="tocStagsalltimeseriesresponse"></a>
<a id="tocstagsalltimeseriesresponse"></a>

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00",
    "tag": "test"
  }
]
```

Array of hourly stats across all tags for the last 30 days

<h2 id="tocS_TagsDeleteRequest">TagsDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schematagsdeleterequest"></a>
<a id="schema_TagsDeleteRequest"></a>
<a id="tocStagsdeleterequest"></a>
<a id="tocstagsdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

Request payload for deleting a tag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|tag|string|true|none|An existing tag name|

<h2 id="tocS_TagsDeleteResponse">TagsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schematagsdeleteresponse"></a>
<a id="schema_TagsDeleteResponse"></a>
<a id="tocStagsdeleteresponse"></a>
<a id="tocstagsdeleteresponse"></a>

```json
{
  "tag": "example-tag",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_opens": 0,
  "unique_clicks": 0,
  "reputation": 0
}
```

Response containing information about a deleted tag including its final statistics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|The name of the tag that was deleted|
|sent|integer|true|none|Total number of emails sent with this tag before deletion|
|hard_bounces|integer|true|none|Total number of hard bounces for emails with this tag before deletion|
|soft_bounces|integer|true|none|Total number of soft bounces for emails with this tag before deletion|
|rejects|integer|true|none|Total number of rejected emails with this tag before deletion|
|complaints|integer|true|none|Total number of spam complaints for emails with this tag before deletion|
|unsubs|integer|true|none|Total number of unsubscribe requests for emails with this tag before deletion|
|opens|integer|true|none|Total number of times emails with this tag were opened before deletion|
|clicks|integer|true|none|Total number of tracked URLs clicked in emails with this tag before deletion|
|unique_opens|integer|true|none|Total number of unique opens for emails with this tag before deletion|
|unique_clicks|integer|true|none|Total number of unique clicks for emails with this tag before deletion|
|reputation|integer|true|none|Final reputation score of the tag before deletion|

<h2 id="tocS_TagsInfoRequest">TagsInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schematagsinforequest"></a>
<a id="schema_TagsInfoRequest"></a>
<a id="tocStagsinforequest"></a>
<a id="tocstagsinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

Request payload for getting tag info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|tag|string|true|none|An existing tag name|

<h2 id="tocS_TagsInfoResponse">TagsInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schematagsinforesponse"></a>
<a id="schema_TagsInfoResponse"></a>
<a id="tocStagsinforesponse"></a>
<a id="tocstagsinforesponse"></a>

```json
{
  "tag": "test",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "unique_opens": 0,
  "unique_clicks": 0,
  "reputation": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

Detailed tag information including aggregate statistics across different time windows

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|Tag name|
|sent|integer|true|none|Total number of emails sent with this tag|
|hard_bounces|integer|true|none|Total number of hard bounces for emails with this tag|
|soft_bounces|integer|true|none|Total number of soft bounces for emails with this tag|
|rejects|integer|true|none|Total number of rejected emails with this tag|
|complaints|integer|true|none|Total number of spam complaints for emails with this tag|
|unsubs|integer|true|none|Total number of unsubscribe requests for emails with this tag|
|opens|integer|true|none|Total number of times emails with this tag have been opened|
|clicks|integer|true|none|Total number of tracked URLs clicked in emails with this tag|
|unique_opens|integer|true|none|Total number of unique opens for emails with this tag|
|unique_clicks|integer|true|none|Total number of unique clicks for emails with this tag|
|reputation|integer|true|none|Tag reputation score on scale 0-100|
|stats|object|true|none|Aggregate summary of the tag's sending stats across different time windows|

<h2 id="tocS_TagsListRequest">TagsListRequest</h2>
<!-- backwards compatibility -->
<a id="schematagslistrequest"></a>
<a id="schema_TagsListRequest"></a>
<a id="tocStagslistrequest"></a>
<a id="tocstagslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing all user-defined tags

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_TagsListResponse">TagsListResponse</h2>
<!-- backwards compatibility -->
<a id="schematagslistresponse"></a>
<a id="schema_TagsListResponse"></a>
<a id="tocStagslistresponse"></a>
<a id="tocstagslistresponse"></a>

```json
[
  {
    "user_id": 0,
    "tag": "test",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "content_reviews": 0,
    "content_rejections": 0,
    "reject_resets": 0,
    "unique_opens": 0,
    "unique_clicks": 0,
    "reputation": 0,
    "confidence": 0
  }
]
```

Array of tags used in the account

<h2 id="tocS_TagsTag">TagsTag</h2>
<!-- backwards compatibility -->
<a id="schematagstag"></a>
<a id="schema_TagsTag"></a>
<a id="tocStagstag"></a>
<a id="tocstagstag"></a>

```json
{
  "user_id": 0,
  "tag": "test",
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "clicks": 0,
  "content_reviews": 0,
  "content_rejections": 0,
  "reject_resets": 0,
  "unique_opens": 0,
  "unique_clicks": 0,
  "reputation": 0,
  "confidence": 0
}
```

Tag information including sending statistics and reputation metrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|integer|true|none|User ID associated with this tag|
|tag|string|true|none|Tag name|
|sent|integer|true|none|Total number of emails sent with this tag|
|hard_bounces|integer|true|none|Total number of hard bounces for emails with this tag|
|soft_bounces|integer|true|none|Total number of soft bounces for emails with this tag|
|rejects|integer|true|none|Total number of rejected emails with this tag|
|complaints|integer|true|none|Total number of spam complaints for emails with this tag|
|unsubs|integer|true|none|Total number of unsubscribe requests for emails with this tag|
|opens|integer|true|none|Total number of times emails with this tag have been opened|
|clicks|integer|true|none|Total number of tracked URLs clicked in emails with this tag|
|content_reviews|integer|true|none|Number of content reviews for this tag|
|content_rejections|integer|true|none|Number of content rejections for this tag|
|reject_resets|integer|true|none|Number of reject resets for this tag|
|unique_opens|integer|true|none|Total number of unique opens for emails with this tag|
|unique_clicks|integer|true|none|Total number of unique clicks for emails with this tag|
|reputation|integer|true|none|Tag reputation score on scale 0-100|
|confidence|integer|true|none|Confidence score for this tag|

<h2 id="tocS_TagsTagTimeSeries">TagsTagTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schematagstagtimeseries"></a>
<a id="schema_TagsTagTimeSeries"></a>
<a id="tocStagstagtimeseries"></a>
<a id="tocstagstagtimeseries"></a>

```json
{
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "unique_opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "time": "2025-08-29 15:00:00"
}
```

Hourly statistics for a tag in a specific time period

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sent|integer|true|none|Number of emails sent during the hour|
|hard_bounces|integer|true|none|Number of emails that hard bounced during the hour|
|soft_bounces|integer|true|none|Number of emails that soft bounced during the hour|
|rejects|integer|true|none|Number of emails rejected during the hour|
|complaints|integer|true|none|Number of spam complaints received during the hour|
|unsubs|integer|true|none|Number of unsubscribe requests received during the hour|
|opens|integer|true|none|Number of emails opened during the hour|
|unique_opens|integer|true|none|Number of unique opens generated by messages sent during the hour|
|clicks|integer|true|none|Number of tracked URLs clicked during the hour|
|unique_clicks|integer|true|none|Number of unique clicks generated by messages sent during the hour|
|time|string|true|none|The hour as a UTC date string in YYYY-MM-DD HH:MM:SS format|

<h2 id="tocS_TagsTimeSeriesRequest">TagsTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schematagstimeseriesrequest"></a>
<a id="schema_TagsTimeSeriesRequest"></a>
<a id="tocStagstimeseriesrequest"></a>
<a id="tocstagstimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "tag": "example-tag"
}
```

Request payload for getting tag time series data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|tag|string|true|none|An existing tag name|

<h2 id="tocS_TagsTimeSeriesResponse">TagsTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schematagstimeseriesresponse"></a>
<a id="schema_TagsTimeSeriesResponse"></a>
<a id="tocStagstimeseriesresponse"></a>
<a id="tocstagstimeseriesresponse"></a>

```json
[
  {
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "unique_opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "time": "2025-08-29 15:00:00"
  }
]
```

Array of hourly stats for the last 30 days for a tag

<h2 id="tocS_TagsTimeSeriesWithTag">TagsTimeSeriesWithTag</h2>
<!-- backwards compatibility -->
<a id="schematagstimeserieswithtag"></a>
<a id="schema_TagsTimeSeriesWithTag"></a>
<a id="tocStagstimeserieswithtag"></a>
<a id="tocstagstimeserieswithtag"></a>

```json
{
  "sent": 0,
  "hard_bounces": 0,
  "soft_bounces": 0,
  "rejects": 0,
  "complaints": 0,
  "unsubs": 0,
  "opens": 0,
  "unique_opens": 0,
  "clicks": 0,
  "unique_clicks": 0,
  "time": "2025-08-29 15:00:00",
  "tag": "test"
}
```

Hourly statistics for a tag in a specific time period, including the tag name

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sent|integer|true|none|Number of emails sent during the hour|
|hard_bounces|integer|true|none|Number of emails that hard bounced during the hour|
|soft_bounces|integer|true|none|Number of emails that soft bounced during the hour|
|rejects|integer|true|none|Number of emails rejected during the hour|
|complaints|integer|true|none|Number of spam complaints received during the hour|
|unsubs|integer|true|none|Number of unsubscribe requests received during the hour|
|opens|integer|true|none|Number of emails opened during the hour|
|unique_opens|integer|true|none|Number of unique opens generated by messages sent during the hour|
|clicks|integer|true|none|Number of tracked URLs clicked during the hour|
|unique_clicks|integer|true|none|Number of unique clicks generated by messages sent during the hour|
|time|string|true|none|The hour as a UTC date string in YYYY-MM-DD HH:MM:SS format|
|tag|string|true|none|Tag name for this time series entry|

<h2 id="tocS_TemplatesAddRequest">TemplatesAddRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatesaddrequest"></a>
<a id="schema_TemplatesAddRequest"></a>
<a id="tocStemplatesaddrequest"></a>
<a id="tocstemplatesaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template",
  "from_email": "sender@example.com",
  "from_name": "Example Name",
  "subject": "Welcome to our service",
  "code": "<div>example code</div>",
  "text": "Example text content",
  "publish": true,
  "labels": [
    "example-label"
  ]
}
```

Request payload for adding a new template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Name for the new template - must be unique|
|from_email|string \| null(email)|false|none|Default sending address for emails sent using this template|
|from_name|string \| null|false|none|Default from name to be used|
|subject|string \| null|false|none|Default subject line to be used|
|code|string \| null|false|none|HTML code for the template with mc:edit attributes for editable elements|
|text|string \| null|false|none|Default text part to be used when sending with this template|
|publish|boolean|false|none|Set to false to add a draft template without publishing|
|labels|[string]|false|none|Optional array of up to 10 labels to use for filtering templates|

<h2 id="tocS_TemplatesAddResponse">TemplatesAddResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesaddresponse"></a>
<a id="schema_TemplatesAddResponse"></a>
<a id="tocStemplatesaddresponse"></a>
<a id="tocstemplatesaddresponse"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_TemplatesDeleteRequest">TemplatesDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatesdeleterequest"></a>
<a id="schema_TemplatesDeleteRequest"></a>
<a id="tocStemplatesdeleterequest"></a>
<a id="tocstemplatesdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "example-template"
}
```

Request payload for deleting a template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Immutable slug of an existing template|

<h2 id="tocS_TemplatesDeleteResponse">TemplatesDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesdeleteresponse"></a>
<a id="schema_TemplatesDeleteResponse"></a>
<a id="tocStemplatesdeleteresponse"></a>
<a id="tocstemplatesdeleteresponse"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_TemplatesInfoRequest">TemplatesInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatesinforequest"></a>
<a id="schema_TemplatesInfoRequest"></a>
<a id="tocStemplatesinforequest"></a>
<a id="tocstemplatesinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

Request payload for getting template information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Immutable name of an existing template|

<h2 id="tocS_TemplatesInfoResponse">TemplatesInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesinforesponse"></a>
<a id="schema_TemplatesInfoResponse"></a>
<a id="tocStemplatesinforesponse"></a>
<a id="tocstemplatesinforesponse"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_TemplatesListRequest">TemplatesListRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplateslistrequest"></a>
<a id="schema_TemplatesListRequest"></a>
<a id="tocStemplateslistrequest"></a>
<a id="tocstemplateslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "label": "example-label"
}
```

Request payload for listing templates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|label|string \| null|false|none|Optional label to filter the templates|

<h2 id="tocS_TemplatesListResponse">TemplatesListResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateslistresponse"></a>
<a id="schema_TemplatesListResponse"></a>
<a id="tocStemplateslistresponse"></a>
<a id="tocstemplateslistresponse"></a>

```json
[
  {
    "slug": "test-template",
    "name": "test-template",
    "labels": [],
    "code": "<p>test</p>",
    "subject": "test",
    "from_email": "test@mailchimp.com",
    "from_name": "Freddie",
    "text": "test",
    "publish_name": "test-template",
    "publish_code": "<p>test</p>",
    "publish_subject": "test",
    "publish_from_email": "test@mailchimp.com",
    "publish_from_name": "Freddie",
    "publish_text": "test",
    "published_at": "2025-08-29 18:47:40",
    "created_at": "2025-08-29 18:47:40.26276",
    "updated_at": "2025-08-29 18:47:40.26277",
    "draft_updated_at": "2025-08-29 18:47:40",
    "is_broken_template": false
  }
]
```

Array of templates available to the account

<h2 id="tocS_TemplatesPublishRequest">TemplatesPublishRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatespublishrequest"></a>
<a id="schema_TemplatesPublishRequest"></a>
<a id="tocStemplatespublishrequest"></a>
<a id="tocstemplatespublishrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

Request payload for publishing a template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Immutable name of an existing template|

<h2 id="tocS_TemplatesPublishResponse">TemplatesPublishResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatespublishresponse"></a>
<a id="schema_TemplatesPublishResponse"></a>
<a id="tocStemplatespublishresponse"></a>
<a id="tocstemplatespublishresponse"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_TemplatesRenderRequest">TemplatesRenderRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatesrenderrequest"></a>
<a id="schema_TemplatesRenderRequest"></a>
<a id="tocStemplatesrenderrequest"></a>
<a id="tocstemplatesrenderrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "template_name": "example-template",
  "template_content": [
    {
      "name": "editable",
      "content": "content"
    }
  ],
  "merge_vars": [
    {
      "name": "merge1",
      "content": "merge1 content"
    }
  ]
}
```

Request payload for rendering a template with content and merge variables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|template_name|string|true|none|Immutable name or slug of a template that exists in the user's account|
|template_content|[[TemplateContent](#schematemplatecontent)]|true|none|Array of template content to render|
|merge_vars|[[MergeVar](#schemamergevar)]|false|none|Optional merge variables to use for injecting merge field content|

<h2 id="tocS_TemplatesRenderResponse">TemplatesRenderResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesrenderresponse"></a>
<a id="schema_TemplatesRenderResponse"></a>
<a id="tocStemplatesrenderresponse"></a>
<a id="tocstemplatesrenderresponse"></a>

```json
{
  "html": "<div>Rendered template content with merge variables</div>"
}
```

Result of rendering a template with content and merge variables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html|string|true|none|Rendered HTML as a string with content and merge variables injected|

<h2 id="tocS_TemplatesTemplate">TemplatesTemplate</h2>
<!-- backwards compatibility -->
<a id="schematemplatestemplate"></a>
<a id="schema_TemplatesTemplate"></a>
<a id="tocStemplatestemplate"></a>
<a id="tocstemplatestemplate"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_TemplateContent">TemplateContent</h2>
<!-- backwards compatibility -->
<a id="schematemplatecontent"></a>
<a id="schema_TemplateContent"></a>
<a id="tocStemplatecontent"></a>
<a id="tocstemplatecontent"></a>

```json
{
  "name": "editable",
  "content": "content"
}
```

Content injection for template editable regions. Fields are optional to allow empty objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Name of the mc:edit editable region to inject into|
|content|string \| null|false|none|Content to inject into the editable region|

<h2 id="tocS_TemplatesTemplateHistory">TemplatesTemplateHistory</h2>
<!-- backwards compatibility -->
<a id="schematemplatestemplatehistory"></a>
<a id="schema_TemplatesTemplateHistory"></a>
<a id="tocStemplatestemplatehistory"></a>
<a id="tocstemplatestemplatehistory"></a>

```json
{
  "time": "2013-01-01 15:00:00",
  "sent": 42,
  "hard_bounces": 1,
  "soft_bounces": 2,
  "rejects": 0,
  "complaints": 0,
  "opens": 15,
  "unique_opens": 12,
  "clicks": 8,
  "unique_clicks": 5
}
```

Hourly statistics for template usage

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(date-time)|true|none|Hour as a UTC date string in YYYY-MM-DD HH:MM:SS format|
|sent|integer|true|none|Number of emails sent during the hour|
|hard_bounces|integer|true|none|Number of emails that hard bounced during the hour|
|soft_bounces|integer|true|none|Number of emails that soft bounced during the hour|
|rejects|integer|true|none|Number of emails that were rejected during the hour|
|complaints|integer|true|none|Number of spam complaints received during the hour|
|opens|integer|true|none|Number of emails opened during the hour|
|unique_opens|integer|true|none|Number of unique opens generated by messages sent during the hour|
|clicks|integer|true|none|Number of tracked URLs clicked during the hour|
|unique_clicks|integer|true|none|Number of unique clicks generated by messages sent during the hour|

<h2 id="tocS_TemplatesTimeSeriesRequest">TemplatesTimeSeriesRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatestimeseriesrequest"></a>
<a id="schema_TemplatesTimeSeriesRequest"></a>
<a id="tocStemplatestimeseriesrequest"></a>
<a id="tocstemplatestimeseriesrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template"
}
```

Request payload for getting template time series data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Name of an existing template|

<h2 id="tocS_TemplatesTimeSeriesResponse">TemplatesTimeSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatestimeseriesresponse"></a>
<a id="schema_TemplatesTimeSeriesResponse"></a>
<a id="tocStemplatestimeseriesresponse"></a>
<a id="tocstemplatestimeseriesresponse"></a>

```json
[
  {
    "time": "2013-01-01 15:00:00",
    "sent": 42,
    "hard_bounces": 1,
    "soft_bounces": 2,
    "rejects": 0,
    "complaints": 0,
    "opens": 15,
    "unique_opens": 12,
    "clicks": 8,
    "unique_clicks": 5
  }
]
```

Array of hourly stats for the last 30 days for a template

<h2 id="tocS_TemplatesUpdateRequest">TemplatesUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplatesupdaterequest"></a>
<a id="schema_TemplatesUpdateRequest"></a>
<a id="tocStemplatesupdaterequest"></a>
<a id="tocstemplatesupdaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "name": "Example Template",
  "from_email": "sender@example.com",
  "from_name": "Example Name",
  "subject": "Welcome to our service",
  "code": "<div>new example code</div>",
  "text": "Example text content",
  "publish": true,
  "labels": [
    "example-label"
  ]
}
```

Request payload for updating an existing template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|name|string|true|none|Immutable name of an existing template|
|from_email|string \| null(email)|false|none|New default sending address|
|from_name|string \| null|false|none|New default from name|
|subject|string \| null|false|none|New default subject line|
|code|string \| null|false|none|New code for the template|
|text|string \| null|false|none|New default text part to be used|
|publish|boolean|false|none|Set to false to update the draft version without publishing|
|labels|[string]|false|none|Optional array of up to 10 labels to use for filtering templates|

<h2 id="tocS_TemplatesUpdateResponse">TemplatesUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesupdateresponse"></a>
<a id="schema_TemplatesUpdateResponse"></a>
<a id="tocStemplatesupdateresponse"></a>
<a id="tocstemplatesupdateresponse"></a>

```json
{
  "slug": "test-template",
  "name": "test-template",
  "labels": [],
  "code": "<p>test</p>",
  "subject": "test",
  "from_email": "test@mailchimp.com",
  "from_name": "Freddie",
  "text": "test",
  "publish_name": "test-template",
  "publish_code": "<p>test</p>",
  "publish_subject": "test",
  "publish_from_email": "test@mailchimp.com",
  "publish_from_name": "Freddie",
  "publish_text": "test",
  "published_at": "2025-08-29 18:47:40",
  "created_at": "2025-08-29 18:47:40.26276",
  "updated_at": "2025-08-29 18:47:40.26277",
  "draft_updated_at": "2025-08-29 18:47:40",
  "is_broken_template": false
}
```

Template information including content, metadata, and settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|Immutable unique identifier for the template|
|name|string|true|none|Human-readable name of the template|
|labels|[string]|true|none|Array of labels for filtering templates|
|code|string \| null|true|none|Draft HTML code for the template with mc:edit attributes|
|subject|string \| null|true|none|Draft default subject line|
|from_email|string \| null(email)|true|none|Draft default sending address|
|from_name|string \| null|true|none|Draft default from name|
|text|string \| null|true|none|Draft default text part|
|publish_name|string|true|none|Published name of the template|
|publish_code|string \| null|true|none|Published HTML code for the template|
|publish_subject|string \| null|true|none|Published default subject line|
|publish_from_email|string \| null(email)|true|none|Published default sending address|
|publish_from_name|string \| null|true|none|Published default from name|
|publish_text|string \| null|true|none|Published default text part|
|published_at|string \| null(date-time)|true|none|Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format|
|created_at|string(date-time)|true|none|Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format|
|updated_at|string(date-time)|true|none|Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|draft_updated_at|string(date-time)|true|none|Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format|
|is_broken_template|boolean|true|none|Whether the template has broken syntax or references|

<h2 id="tocS_UrlsAddTrackingDomainRequest">UrlsAddTrackingDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaurlsaddtrackingdomainrequest"></a>
<a id="schema_UrlsAddTrackingDomainRequest"></a>
<a id="tocSurlsaddtrackingdomainrequest"></a>
<a id="tocsurlsaddtrackingdomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

Request payload for adding a tracking domain to your account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|A domain name to add for tracking|

<h2 id="tocS_UrlsAddTrackingDomainResponse">UrlsAddTrackingDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaurlsaddtrackingdomainresponse"></a>
<a id="schema_UrlsAddTrackingDomainResponse"></a>
<a id="tocSurlsaddtrackingdomainresponse"></a>
<a id="tocsurlsaddtrackingdomainresponse"></a>

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

Tracking domain configuration and verification status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|true|none|The tracking domain name|
|created_at|string|true|none|When the domain was added to the account|
|last_tested_at|string|true|none|When the domain was last tested for CNAME configuration|
|cname|object|true|none|CNAME record verification status and details|
|valid_tracking|boolean|true|none|Whether this domain is ready to be used for tracking|

<h2 id="tocS_UrlsCheckTrackingDomainRequest">UrlsCheckTrackingDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaurlschecktrackingdomainrequest"></a>
<a id="schema_UrlsCheckTrackingDomainRequest"></a>
<a id="tocSurlschecktrackingdomainrequest"></a>
<a id="tocsurlschecktrackingdomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

Request payload for checking the CNAME settings for a tracking domain

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|An existing tracking domain name|

<h2 id="tocS_UrlsCheckTrackingDomainResponse">UrlsCheckTrackingDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaurlschecktrackingdomainresponse"></a>
<a id="schema_UrlsCheckTrackingDomainResponse"></a>
<a id="tocSurlschecktrackingdomainresponse"></a>
<a id="tocsurlschecktrackingdomainresponse"></a>

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

Tracking domain configuration and verification status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|true|none|The tracking domain name|
|created_at|string|true|none|When the domain was added to the account|
|last_tested_at|string|true|none|When the domain was last tested for CNAME configuration|
|cname|object|true|none|CNAME record verification status and details|
|valid_tracking|boolean|true|none|Whether this domain is ready to be used for tracking|

<h2 id="tocS_UrlsDeleteTrackingDomainRequest">UrlsDeleteTrackingDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaurlsdeletetrackingdomainrequest"></a>
<a id="schema_UrlsDeleteTrackingDomainRequest"></a>
<a id="tocSurlsdeletetrackingdomainrequest"></a>
<a id="tocsurlsdeletetrackingdomainrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "domain": "track.example.com"
}
```

Request payload for deleting a tracking domain from your account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|domain|string(hostname)|true|none|An existing tracking domain name|

<h2 id="tocS_UrlsDeleteTrackingDomainResponse">UrlsDeleteTrackingDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaurlsdeletetrackingdomainresponse"></a>
<a id="schema_UrlsDeleteTrackingDomainResponse"></a>
<a id="tocSurlsdeletetrackingdomainresponse"></a>
<a id="tocsurlsdeletetrackingdomainresponse"></a>

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

Tracking domain configuration and verification status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|true|none|The tracking domain name|
|created_at|string|true|none|When the domain was added to the account|
|last_tested_at|string|true|none|When the domain was last tested for CNAME configuration|
|cname|object|true|none|CNAME record verification status and details|
|valid_tracking|boolean|true|none|Whether this domain is ready to be used for tracking|

<h2 id="tocS_TrackingDomain">TrackingDomain</h2>
<!-- backwards compatibility -->
<a id="schematrackingdomain"></a>
<a id="schema_TrackingDomain"></a>
<a id="tocStrackingdomain"></a>
<a id="tocstrackingdomain"></a>

```json
{
  "domain": "track.example.com",
  "created_at": "2025-08-15 17:01:12.34214",
  "last_tested_at": "2025-08-15 17:01:12.39638",
  "cname": {
    "valid": false,
    "valid_after": null,
    "error": "string"
  },
  "valid_tracking": false
}
```

Tracking domain configuration and verification status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string(hostname)|true|none|The tracking domain name|
|created_at|string|true|none|When the domain was added to the account|
|last_tested_at|string|true|none|When the domain was last tested for CNAME configuration|
|cname|object|true|none|CNAME record verification status and details|
|valid_tracking|boolean|true|none|Whether this domain is ready to be used for tracking|

<h2 id="tocS_UrlsTrackingDomainsRequest">UrlsTrackingDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaurlstrackingdomainsrequest"></a>
<a id="schema_UrlsTrackingDomainsRequest"></a>
<a id="tocSurlstrackingdomainsrequest"></a>
<a id="tocsurlstrackingdomainsrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing tracking domains

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_UrlsTrackingDomainsResponse">UrlsTrackingDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaurlstrackingdomainsresponse"></a>
<a id="schema_UrlsTrackingDomainsResponse"></a>
<a id="tocSurlstrackingdomainsresponse"></a>
<a id="tocsurlstrackingdomainsresponse"></a>

```json
[
  {
    "domain": "track.example.com",
    "created_at": "2025-08-15 17:01:12.34214",
    "last_tested_at": "2025-08-15 17:01:12.39638",
    "cname": {
      "valid": false,
      "valid_after": null,
      "error": "string"
    },
    "valid_tracking": false
  }
]
```

Array of tracking domains and their status

<h2 id="tocS_UsersInfoRequest">UsersInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemausersinforequest"></a>
<a id="schema_UsersInfoRequest"></a>
<a id="tocSusersinforequest"></a>
<a id="tocsusersinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for retrieving user account information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_UsersInfoResponse">UsersInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersinforesponse"></a>
<a id="schema_UsersInfoResponse"></a>
<a id="tocSusersinforesponse"></a>
<a id="tocsusersinforesponse"></a>

```json
{
  "username": "string",
  "created_at": "2013-01-01 15:30:27",
  "public_id": "string",
  "reputation": 0,
  "hourly_quota": 0,
  "backlog": 0,
  "stats": {
    "today": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_7_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_30_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_60_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "last_90_days": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    },
    "all_time": {
      "sent": 0,
      "hard_bounces": 0,
      "soft_bounces": 0,
      "rejects": 0,
      "complaints": 0,
      "unsubs": 0,
      "opens": 0,
      "unique_opens": 0,
      "clicks": 0,
      "unique_clicks": 0
    }
  }
}
```

Authenticated user account information including sending stats

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Username for SMTP authentication|
|created_at|string|true|none|Account creation date in UTC YYYY-MM-DD HH:MM:SS format|
|public_id|string|true|none|Unique permanent identifier for this user|
|reputation|integer|true|none|User reputation on scale 0-100, 75+ is generally good|
|hourly_quota|integer|true|none|Maximum emails delivered per hour. Any emails beyond that will be accepted and queued for later delivery. Users with higher reputations will have higher hourly quotas|
|backlog|integer|true|none|Number of emails queued due to quota limits|
|stats|object|true|none|Aggregate sending statistics across different time windows|

<h2 id="tocS_UsersPing2Request">UsersPing2Request</h2>
<!-- backwards compatibility -->
<a id="schemausersping2request"></a>
<a id="schema_UsersPing2Request"></a>
<a id="tocSusersping2request"></a>
<a id="tocsusersping2request"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for validating an API key with a ping (strict JSON parser version)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_UsersPing2Response">UsersPing2Response</h2>
<!-- backwards compatibility -->
<a id="schemausersping2response"></a>
<a id="schema_UsersPing2Response"></a>
<a id="tocSusersping2response"></a>
<a id="tocsusersping2response"></a>

```json
{
  "PING": "PONG!"
}
```

Static JSON payload with PING: PONG!

<h2 id="tocS_UsersPingRequest">UsersPingRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserspingrequest"></a>
<a id="schema_UsersPingRequest"></a>
<a id="tocSuserspingrequest"></a>
<a id="tocsuserspingrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for validating an API key with a ping

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_UsersPingResponse">UsersPingResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserspingresponse"></a>
<a id="schema_UsersPingResponse"></a>
<a id="tocSuserspingresponse"></a>
<a id="tocsuserspingresponse"></a>

```json
"PONG!"
```

The string 'PONG!'

<h2 id="tocS_UsersSendersRequest">UsersSendersRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserssendersrequest"></a>
<a id="schema_UsersSendersRequest"></a>
<a id="tocSuserssendersrequest"></a>
<a id="tocsuserssendersrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for retrieving senders associated with this account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_UsersSendersResponse">UsersSendersResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserssendersresponse"></a>
<a id="schema_UsersSendersResponse"></a>
<a id="tocSuserssendersresponse"></a>
<a id="tocsuserssendersresponse"></a>

```json
[
  {
    "address": "sender.example@mandrillapp.com",
    "created_at": "2013-01-01 15:30:27",
    "sent": 0,
    "hard_bounces": 0,
    "soft_bounces": 0,
    "rejects": 0,
    "complaints": 0,
    "unsubs": 0,
    "opens": 0,
    "clicks": 0,
    "unique_clicks": 0,
    "unique_opens": 0
  }
]
```

Array of sender information for each sending address used by the account

<h2 id="tocS_WebhooksAddRequest">WebhooksAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksaddrequest"></a>
<a id="schema_WebhooksAddRequest"></a>
<a id="tocSwebhooksaddrequest"></a>
<a id="tocswebhooksaddrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "url": "https://example.com/webhook",
  "description": "My webhook for tracking email events",
  "events": [
    "send",
    "delivered",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject"
  ]
}
```

Request payload for creating a new webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|url|string(active-uri)|true|none|The URL to POST batches of events|
|description|string \| null|false|none|An optional description of the webhook|
|events|[string]|false|none|Optional list of event types that will trigger the webhook|

<h2 id="tocS_WebhooksAddResponse">WebhooksAddResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksaddresponse"></a>
<a id="schema_WebhooksAddResponse"></a>
<a id="tocSwebhooksaddresponse"></a>
<a id="tocswebhooksaddresponse"></a>

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

Webhook configuration for receiving event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the webhook|
|url|string(uri)|true|none|The URL where webhook events will be posted|
|auth_key|string \| null|false|none|The key used for webhook authentication|
|description|string \| null|false|none|Optional description of the webhook|
|events|[string]|true|none|Array of event types that will trigger the webhook|
|created_at|string|true|none|When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|last_sent_at|string \| null|false|none|When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)|
|batches_sent|integer|true|none|Number of batches sent to this webhook|
|events_sent|integer|true|none|Total number of events sent to this webhook|
|last_error|string \| null|false|none|Last error message received when attempting to call the webhook|

<h2 id="tocS_WebhooksDeleteRequest">WebhooksDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksdeleterequest"></a>
<a id="schema_WebhooksDeleteRequest"></a>
<a id="tocSwebhooksdeleterequest"></a>
<a id="tocswebhooksdeleterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345
}
```

Request payload for deleting a webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|integer|true|none|The unique identifier of a webhook belonging to this account|

<h2 id="tocS_WebhooksDeleteResponse">WebhooksDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksdeleteresponse"></a>
<a id="schema_WebhooksDeleteResponse"></a>
<a id="tocSwebhooksdeleteresponse"></a>
<a id="tocswebhooksdeleteresponse"></a>

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

Webhook configuration for receiving event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the webhook|
|url|string(uri)|true|none|The URL where webhook events will be posted|
|auth_key|string \| null|false|none|The key used for webhook authentication|
|description|string \| null|false|none|Optional description of the webhook|
|events|[string]|true|none|Array of event types that will trigger the webhook|
|created_at|string|true|none|When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|last_sent_at|string \| null|false|none|When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)|
|batches_sent|integer|true|none|Number of batches sent to this webhook|
|events_sent|integer|true|none|Total number of events sent to this webhook|
|last_error|string \| null|false|none|Last error message received when attempting to call the webhook|

<h2 id="tocS_WebhooksInfoRequest">WebhooksInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksinforequest"></a>
<a id="schema_WebhooksInfoRequest"></a>
<a id="tocSwebhooksinforequest"></a>
<a id="tocswebhooksinforequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345
}
```

Request payload for getting webhook info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|integer|true|none|The unique identifier of a webhook belonging to this account|

<h2 id="tocS_WebhooksInfoResponse">WebhooksInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksinforesponse"></a>
<a id="schema_WebhooksInfoResponse"></a>
<a id="tocSwebhooksinforesponse"></a>
<a id="tocswebhooksinforesponse"></a>

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

Webhook configuration for receiving event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the webhook|
|url|string(uri)|true|none|The URL where webhook events will be posted|
|auth_key|string \| null|false|none|The key used for webhook authentication|
|description|string \| null|false|none|Optional description of the webhook|
|events|[string]|true|none|Array of event types that will trigger the webhook|
|created_at|string|true|none|When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|last_sent_at|string \| null|false|none|When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)|
|batches_sent|integer|true|none|Number of batches sent to this webhook|
|events_sent|integer|true|none|Total number of events sent to this webhook|
|last_error|string \| null|false|none|Last error message received when attempting to call the webhook|

<h2 id="tocS_WebhooksListRequest">WebhooksListRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhookslistrequest"></a>
<a id="schema_WebhooksListRequest"></a>
<a id="tocSwebhookslistrequest"></a>
<a id="tocswebhookslistrequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig"
}
```

Request payload for listing all webhooks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|

<h2 id="tocS_WebhooksListResponse">WebhooksListResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookslistresponse"></a>
<a id="schema_WebhooksListResponse"></a>
<a id="tocSwebhookslistresponse"></a>
<a id="tocswebhookslistresponse"></a>

```json
[
  {
    "id": 12345,
    "url": "https://example.com/webhook",
    "description": "Webhook for tracking email events",
    "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
    "events": [
      "send",
      "delivered",
      "deferral",
      "hard_bounce",
      "soft_bounce",
      "open",
      "click",
      "spam",
      "unsub",
      "reject",
      "blacklist",
      "whitelist"
    ],
    "created_at": "2013-01-01 15:30:27.123456",
    "last_sent_at": "2013-01-01 15:30:49",
    "batches_sent": 42,
    "events_sent": 1365,
    "last_error": null
  }
]
```

Array of webhooks configured for the account

<h2 id="tocS_WebhooksUpdateRequest">WebhooksUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksupdaterequest"></a>
<a id="schema_WebhooksUpdateRequest"></a>
<a id="tocSwebhooksupdaterequest"></a>
<a id="tocswebhooksupdaterequest"></a>

```json
{
  "key": "ONzNrsmbtNXoIKyfPmjnig",
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Updated webhook description",
  "events": [
    "send",
    "delivered",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject"
  ]
}
```

Request payload for updating an existing webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A valid Mandrill API key|
|id|integer|true|none|The unique identifier of a webhook belonging to this account|
|url|string(active-uri)|true|none|The URL to POST batches of events|
|description|string \| null|false|none|An optional description of the webhook|
|events|[string]|false|none|Optional list of event types that will trigger the webhook|

<h2 id="tocS_WebhooksUpdateResponse">WebhooksUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksupdateresponse"></a>
<a id="schema_WebhooksUpdateResponse"></a>
<a id="tocSwebhooksupdateresponse"></a>
<a id="tocswebhooksupdateresponse"></a>

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

Webhook configuration for receiving event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the webhook|
|url|string(uri)|true|none|The URL where webhook events will be posted|
|auth_key|string \| null|false|none|The key used for webhook authentication|
|description|string \| null|false|none|Optional description of the webhook|
|events|[string]|true|none|Array of event types that will trigger the webhook|
|created_at|string|true|none|When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|last_sent_at|string \| null|false|none|When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)|
|batches_sent|integer|true|none|Number of batches sent to this webhook|
|events_sent|integer|true|none|Total number of events sent to this webhook|
|last_error|string \| null|false|none|Last error message received when attempting to call the webhook|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": 12345,
  "url": "https://example.com/webhook",
  "description": "Webhook for tracking email events",
  "auth_key": "gplJ8yWptFTqCoq5S1SHPA",
  "events": [
    "send",
    "delivered",
    "deferral",
    "hard_bounce",
    "soft_bounce",
    "open",
    "click",
    "spam",
    "unsub",
    "reject",
    "blacklist",
    "whitelist"
  ],
  "created_at": "2013-01-01 15:30:27.123456",
  "last_sent_at": "2013-01-01 15:30:49",
  "batches_sent": 42,
  "events_sent": 1365,
  "last_error": null
}
```

Webhook configuration for receiving event notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Unique identifier for the webhook|
|url|string(uri)|true|none|The URL where webhook events will be posted|
|auth_key|string \| null|false|none|The key used for webhook authentication|
|description|string \| null|false|none|Optional description of the webhook|
|events|[string]|true|none|Array of event types that will trigger the webhook|
|created_at|string|true|none|When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)|
|last_sent_at|string \| null|false|none|When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)|
|batches_sent|integer|true|none|Number of batches sent to this webhook|
|events_sent|integer|true|none|Total number of events sent to this webhook|
|last_error|string \| null|false|none|Last error message received when attempting to call the webhook|
