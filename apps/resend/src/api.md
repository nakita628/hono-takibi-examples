<h1 id="resend">Resend v1.5.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Resend is the email platform for developers.

Base URLs:

* <a href="https://api.resend.com">https://api.resend.com</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="resend-emails">Emails</h1>

Start sending emails through the Resend API.

## Retrieve a list of emails

<a id="opIdemails/list"></a>

> Code samples

```bash
curl https://api.resend.com/emails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails`

<h3 id="retrieve-a-list-of-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "object": "email",
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "message_id": "<202301010000.4ef9a417@email.example.com>",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "Acme <onboarding@resend.dev>",
      "created_at": "2023-04-03 22:13:42.674981+00",
      "subject": "Hello World",
      "html": "Congrats on sending your <strong>first email</strong>!",
      "text": "string",
      "bcc": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "last_event": "delivered"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListEmailsResponse](#schemalistemailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send an email

<a id="opIdemails/send"></a>

> Code samples

```bash
curl https://api.resend.com/emails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "from": "string",
    "to": "string",
    "subject": "string",
    "bcc": "string",
    "cc": "string",
    "reply_to": "string",
    "html": "string",
    "text": "string",
    "template": {
      "id": "string",
      "variables": {
        "variableName": "Sign up now",
        "variableName2": 123
      }
    },
    "headers": {},
    "scheduled_at": "string",
    "attachments": [
      {
        "content": "string",
        "filename": "string",
        "path": "string",
        "content_type": "string",
        "content_id": "string"
      }
    ],
    "tags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "topic_id": "string"
  }'
```

`POST /emails`

> Body parameter

```json
{
  "from": "string",
  "to": "string",
  "subject": "string",
  "bcc": "string",
  "cc": "string",
  "reply_to": "string",
  "html": "string",
  "text": "string",
  "template": {
    "id": "string",
    "variables": {
      "variableName": "Sign up now",
      "variableName2": 123
    }
  },
  "headers": {},
  "scheduled_at": "string",
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "tags": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "topic_id": "string"
}
```

<h3 id="send-an-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|body|body|[SendEmailRequest](#schemasendemailrequest)|false|none|
|» from|body|string|true|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|» to|body|string \| [string]|true|Recipient email address. For multiple addresses, send as an array of strings. Max 50.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» subject|body|string|true|Email subject.|
|» bcc|body|string \| [string]|false|Bcc recipient email address. For multiple addresses, send as an array of strings.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» cc|body|string \| [string]|false|Cc recipient email address. For multiple addresses, send as an array of strings.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» reply_to|body|string \| [string]|false|Reply-to email address. For multiple addresses, send as an array of strings.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» html|body|string|false|The HTML version of the message.|
|» text|body|string|false|The plain text version of the message.|
|» template|body|object|false|none|
|» » id|body|string|true|The id of the published email template.|
|» » variables|body|object|false|Template variables object with key/value pairs.|
|» » » **additionalProperties**|body|string \| number|false|none|
|» » » » *oneOf*|body|string|false|none|
|» » » » *oneOf*|body|number|false|none|
|» headers|body|object|false|Custom headers to add to the email.|
|» scheduled_at|body|string|false|Schedule email to be sent later. The date should be in ISO 8601 format.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|none|
|» tags|body|[[Tag](#schematag)]|false|none|
|» topic_id|body|string|false|The topic ID to scope the email to. If the recipient is a contact and opted-in to the topic, the email is sent. If opted-out, the email is not sent. If the recipient is not a contact, the email is sent if the topic's default subscription is opt_in.|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="send-an-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SendEmailResponse](#schemasendemailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single email

<a id="opIdemails/get"></a>

> Code samples

```bash
curl https://api.resend.com/emails/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/{email_id}`

<h3 id="retrieve-a-single-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string|true|The ID of the email.|

> Example responses

> 200 Response

```json
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "message_id": "<202301010000.4ef9a417@email.example.com>",
  "to": [
    "delivered@resend.dev"
  ],
  "from": "Acme <onboarding@resend.dev>",
  "created_at": "2023-04-03 22:13:42.674981+00",
  "subject": "Hello World",
  "html": "Congrats on sending your <strong>first email</strong>!",
  "text": "string",
  "bcc": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "reply_to": [
    "string"
  ],
  "last_event": "delivered"
}
```

<h3 id="retrieve-a-single-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Email](#schemaemail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a single email

<a id="opIdemails/update"></a>

> Code samples

```bash
curl https://api.resend.com/emails/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /emails/{email_id}`

<h3 id="update-a-single-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string|true|The ID of the email.|

> Example responses

> 200 Response

```json
{
  "scheduled_at": "string"
}
```

<h3 id="update-a-single-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateEmailOptions](#schemaupdateemailoptions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel the schedule of the e-mail.

<a id="opIdemails/cancel"></a>

> Code samples

```bash
curl https://api.resend.com/emails/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /emails/{email_id}/cancel`

<h3 id="cancel-the-schedule-of-the-e-mail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string|true|The ID of the email.|

> Example responses

> 200 Response

```json
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "message_id": "<202301010000.4ef9a417@email.example.com>",
  "to": [
    "delivered@resend.dev"
  ],
  "from": "Acme <onboarding@resend.dev>",
  "created_at": "2023-04-03 22:13:42.674981+00",
  "subject": "Hello World",
  "html": "Congrats on sending your <strong>first email</strong>!",
  "text": "string",
  "bcc": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "reply_to": [
    "string"
  ],
  "last_event": "delivered"
}
```

<h3 id="cancel-the-schedule-of-the-e-mail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Email](#schemaemail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a shareable link for a sent or received email.

<a id="opIdemails/share"></a>

> Code samples

```bash
curl https://api.resend.com/emails/string/share \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_in": "string"
  }'
```

`POST /emails/{email_id}/share`

> Body parameter

```json
{
  "expires_in": "string"
}
```

<h3 id="create-a-shareable-link-for-a-sent-or-received-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string|true|The ID of the email.|
|body|body|[ShareEmailOptions](#schemashareemailoptions)|false|none|
|» expires_in|body|string|false|How long the link stays valid for, as a duration like `10m`, `2 hours`, or `1 day`. Defaults to `48h` and cannot exceed 48 hours.|

> Example responses

> 200 Response

```json
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "url": "https://resend.com/shared?token=eyJhbGciOiJIUzI1NiJ9..."
}
```

<h3 id="create-a-shareable-link-for-a-sent-or-received-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ShareEmailResponse](#schemashareemailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger up to 100 batch emails at once.

<a id="opIdemails/send-batch"></a>

> Code samples

```bash
curl https://api.resend.com/emails/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "from": "string",
      "to": "string",
      "subject": "string",
      "bcc": "string",
      "cc": "string",
      "reply_to": "string",
      "html": "string",
      "text": "string",
      "template": {
        "id": "string",
        "variables": {
          "variableName": "Sign up now",
          "variableName2": 123
        }
      },
      "headers": {},
      "scheduled_at": "string",
      "attachments": [
        {
          "content": "string",
          "filename": "string",
          "path": "string",
          "content_type": "string",
          "content_id": "string"
        }
      ],
      "tags": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "topic_id": "string"
    }
  ]'
```

`POST /emails/batch`

> Body parameter

```json
[
  {
    "from": "string",
    "to": "string",
    "subject": "string",
    "bcc": "string",
    "cc": "string",
    "reply_to": "string",
    "html": "string",
    "text": "string",
    "template": {
      "id": "string",
      "variables": {
        "variableName": "Sign up now",
        "variableName2": 123
      }
    },
    "headers": {},
    "scheduled_at": "string",
    "attachments": [
      {
        "content": "string",
        "filename": "string",
        "path": "string",
        "content_type": "string",
        "content_id": "string"
      }
    ],
    "tags": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "topic_id": "string"
  }
]
```

<h3 id="trigger-up-to-100-batch-emails-at-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|body|body|[[SendEmailRequest](#schemasendemailrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

<h3 id="trigger-up-to-100-batch-emails-at-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateBatchEmailsResponse](#schemacreatebatchemailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of attachments for a sent email

<a id="opIdemails/list-attachments"></a>

> Code samples

```bash
curl https://api.resend.com/emails/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/{email_id}/attachments`

<h3 id="retrieve-a-list-of-attachments-for-a-sent-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string(uuid)|true|The ID of the email.|
|limit|query|integer|false|Maximum number of attachments to return.|
|after|query|string(uuid)|false|Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.|
|before|query|string(uuid)|false|Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "filename": "document.pdf",
      "content_type": "application/pdf",
      "content_id": "img001",
      "content_disposition": "attachment",
      "download_url": "https://cloudfront.example.com/path?Signature=...",
      "expires_at": "2024-10-27T18:30:00.000Z",
      "size": 2048
    }
  ]
}
```

<h3 id="retrieve-a-list-of-attachments-for-a-sent-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAttachmentsResponse](#schemalistattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single attachment for a sent email

<a id="opIdemails/get-attachment"></a>

> Code samples

```bash
curl https://api.resend.com/emails/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/{email_id}/attachments/{attachment_id}`

<h3 id="retrieve-a-single-attachment-for-a-sent-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string(uuid)|true|The ID of the email.|
|attachment_id|path|string(uuid)|true|The ID of the attachment.|

> Example responses

> 200 Response

```json
{
  "object": "attachment",
  "id": "660e8400-e29b-41d4-a716-446655440000",
  "filename": "document.pdf",
  "content_type": "application/pdf",
  "content_id": "img001",
  "content_disposition": "attachment",
  "download_url": "https://cloudfront.example.com/path?Signature=...",
  "expires_at": "2024-10-27T18:30:00.000Z",
  "size": 2048
}
```

<h3 id="retrieve-a-single-attachment-for-a-sent-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RetrievedAttachment](#schemaretrievedattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve account-level email metrics

<a id="opIdemails/metrics"></a>

> Code samples

```bash
curl https://api.resend.com/emails/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/metrics`

<h3 id="retrieve-account-level-email-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string|false|The start of the date range, as an ISO 8601 date or datetime. Must be on or before `end_date`. Defaults to 6 days before `end_date`.|
|end_date|query|string|false|The end of the date range, as an ISO 8601 date or datetime. Values in the future are clamped to the current time. Defaults to now.|
|timezone|query|string|false|The IANA timezone (e.g. `America/New_York`) used to bucket periods when `period` is in `dimensions`.|
|granularity|query|string|false|The bucket size used when `period` is in `dimensions`. The date range can't produce more than 10,000 periods at the chosen granularity.|
|metrics|query|[string]|false|List of metrics to include in the response. Defaults to all metrics. Accepts a comma-separated value, the parameter repeated, or a mix of both.|
|dimensions|query|[string]|false|List of dimensions to break the response down by. `email` cannot be combined with `broadcast`. Defaults to `[]`, returning a single `totals` row for the whole range, with no `data`. Accepts a comma-separated value, the parameter repeated, or a mix of both.|
|domain_id|query|[string(uuid)]|false|List of sending domain IDs to restrict the response to, up to 100. Accepts a comma-separated value, the parameter repeated, or a mix of both.|
|email_id|query|[string(uuid)]|false|List of email IDs to restrict the response to, up to 100. Cannot be combined with the `broadcast` dimension or `broadcast_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.|
|broadcast_id|query|[string(uuid)]|false|List of broadcast IDs to restrict the response to, up to 100. Cannot be combined with the `email` dimension or `email_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|hourly|
|granularity|daily|
|granularity|weekly|
|granularity|monthly|
|metrics|received|
|metrics|delivered|
|metrics|complained|
|metrics|suppressed|
|metrics|bounced|
|metrics|bounced_transient|
|metrics|bounced_permanent|
|metrics|bounced_undetermined|
|metrics|opened|
|metrics|clicked|
|metrics|unsubscribed|
|metrics|delivery_delayed|
|metrics|failed|
|metrics|sent|
|metrics|unique_opened|
|metrics|unique_clicked|
|metrics|delivery_rate|
|metrics|open_rate|
|metrics|click_rate|
|metrics|bounce_rate|
|metrics|complaint_rate|
|metrics|unsubscribe_rate|
|dimensions|period|
|dimensions|domain|
|dimensions|email|
|dimensions|broadcast|

> Example responses

> 200 Response

```json
{
  "object": "metrics",
  "start_date": "2026-07-01T00:00:00.000Z",
  "end_date": "2026-07-08T00:00:00.000Z",
  "metrics": [
    "string"
  ],
  "dimensions": [
    "period"
  ],
  "granularity": "hourly",
  "totals": {
    "property1": 0,
    "property2": 0
  },
  "data": [
    {
      "period": "string",
      "domain_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "domain_name": "string",
      "email_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "broadcast_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "broadcast_name": "string",
      "property1": 0,
      "property2": 0
    }
  ]
}
```

<h3 id="retrieve-account-level-email-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetEmailsMetricsResponse](#schemagetemailsmetricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-domains">Domains</h1>

Create and manage domains through the Resend API.

## Retrieve a list of domains

<a id="opIddomains/list"></a>

> Code samples

```bash
curl https://api.resend.com/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domains`

<h3 id="retrieve-a-list-of-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "name": "example.com",
      "status": "not_started",
      "created_at": "2023-04-26 20:21:26.347412+00",
      "region": "us-east-1",
      "open_tracking": true,
      "click_tracking": true,
      "capabilities": {
        "sending": "enabled",
        "receiving": "enabled"
      }
    }
  ]
}
```

<h3 id="retrieve-a-list-of-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListDomainsResponse](#schemalistdomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new domain

<a id="opIddomains/create"></a>

> Code samples

```bash
curl https://api.resend.com/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "region": "us-east-1",
    "custom_return_path": "string",
    "open_tracking": true,
    "click_tracking": true,
    "tls": "opportunistic",
    "capabilities": {
      "sending": "enabled",
      "receiving": "enabled"
    },
    "tracking_subdomain": "string"
  }'
```

`POST /domains`

> Body parameter

```json
{
  "name": "string",
  "region": "us-east-1",
  "custom_return_path": "string",
  "open_tracking": true,
  "click_tracking": true,
  "tls": "opportunistic",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "tracking_subdomain": "string"
}
```

<h3 id="create-a-new-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDomainRequest](#schemacreatedomainrequest)|false|none|
|» name|body|string|true|The name of the domain you want to create.|
|» region|body|string|false|The region where emails will be sent from. Possible values are us-east-1 \| eu-west-1 \| sa-east-1 \| ap-northeast-1|
|» custom_return_path|body|string|false|For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).|
|» open_tracking|body|boolean|false|Track the open rate of each email.|
|» click_tracking|body|boolean|false|Track clicks within the body of each HTML email.|
|» tls|body|string|false|TLS mode. Opportunistic attempts secure connection but falls back to unencrypted. Enforced requires TLS or email won't be sent.|
|» capabilities|body|[DomainCapabilities](#schemadomaincapabilities)|false|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|» tracking_subdomain|body|string|false|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|us-east-1|
|» region|eu-west-1|
|» region|sa-east-1|
|» region|ap-northeast-1|
|» tls|opportunistic|
|» tls|enforced|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "created_at": "2023-10-06 23:47:56.678+00",
  "status": "pending",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "records": [
    {
      "record": "SPF",
      "name": "string",
      "type": "MX",
      "ttl": "string",
      "status": "pending",
      "value": "string",
      "priority": 0
    }
  ],
  "region": "string",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string"
}
```

<h3 id="create-a-new-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateDomainResponse](#schemacreatedomainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single domain

<a id="opIddomains/get"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domains/{domain_id}`

<h3 id="retrieve-a-single-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the domain.|

> Example responses

> 200 Response

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "not_started",
  "created_at": "2023-04-26 20:21:26.347412+00",
  "region": "us-east-1",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "records": [
    {
      "record": "SPF",
      "name": "string",
      "type": "MX",
      "ttl": "string",
      "status": "pending",
      "value": "string",
      "priority": 0
    }
  ]
}
```

<h3 id="retrieve-a-single-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Domain](#schemadomain)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing domain

<a id="opIddomains/remove"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /domains/{domain_id}`

<h3 id="remove-an-existing-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the domain.|

> Example responses

> 200 Response

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "deleted": true
}
```

<h3 id="remove-an-existing-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteDomainResponse](#schemadeletedomainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing domain

<a id="opIddomains/update"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "open_tracking": true,
    "click_tracking": true,
    "tls": "opportunistic",
    "capabilities": {
      "sending": "enabled",
      "receiving": "enabled"
    },
    "tracking_subdomain": "string"
  }'
```

`PATCH /domains/{domain_id}`

> Body parameter

```json
{
  "open_tracking": true,
  "click_tracking": true,
  "tls": "opportunistic",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "tracking_subdomain": "string"
}
```

<h3 id="update-an-existing-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the domain.|
|body|body|[UpdateDomainOptions](#schemaupdatedomainoptions)|false|none|
|» open_tracking|body|boolean|false|Track the open rate of each email.|
|» click_tracking|body|boolean|false|Track clicks within the body of each HTML email.|
|» tls|body|string|false|enforced \| opportunistic.|
|» capabilities|body|[DomainCapabilities](#schemadomaincapabilities)|false|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|» tracking_subdomain|body|string|false|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tls|opportunistic|
|» tls|enforced|

> Example responses

> 200 Response

```json
{
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "object": "domain"
}
```

<h3 id="update-an-existing-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateDomainResponseSuccess](#schemaupdatedomainresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify an existing domain

<a id="opIddomains/verify"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string/verify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /domains/{domain_id}/verify`

Triggers verification of the domain's DNS records including DKIM, SPF, and the tracking CNAME (if a tracking subdomain is configured).

<h3 id="verify-an-existing-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the domain.|

> Example responses

> 200 Response

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206"
}
```

<h3 id="verify-an-existing-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerifyDomainResponse](#schemaverifydomainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Claim a domain

<a id="opIddomains/create-claim"></a>

> Code samples

```bash
curl https://api.resend.com/domains/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "region": "us-east-1",
    "custom_return_path": "send",
    "open_tracking": true,
    "click_tracking": true,
    "tracking_subdomain": "string"
  }'
```

`POST /domains/claim`

Start a claim for a domain that another Resend account has already verified. The domain is recreated under your account with fresh DKIM keys, so the previous account's DNS records cannot be reused. Returns a TXT record to add to your DNS to prove ownership. Uses the same request body as creating a domain.

> Body parameter

```json
{
  "name": "string",
  "region": "us-east-1",
  "custom_return_path": "send",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string"
}
```

<h3 id="claim-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDomainClaimRequest](#schemacreatedomainclaimrequest)|false|none|
|» name|body|string|true|The name of the domain you want to claim.|
|» region|body|string|false|The region where emails will be sent from. Possible values are us-east-1 \| eu-west-1 \| sa-east-1 \| ap-northeast-1|
|» custom_return_path|body|string|false|For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).|
|» open_tracking|body|boolean|false|Track the open rate of each email.|
|» click_tracking|body|boolean|false|Track clicks within the body of each HTML email.|
|» tracking_subdomain|body|string|false|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|us-east-1|
|» region|eu-west-1|
|» region|sa-east-1|
|» region|ap-northeast-1|

> Example responses

> 200 Response

```json
{
  "object": "domain_claim",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "pending",
  "domain_id": "a1b2c3d4-1176-453e-8fc1-35364d380206",
  "region": "us-east-1",
  "record": {
    "type": "TXT",
    "name": "example.com",
    "value": "resend-domain-verification=abc123",
    "ttl": "Auto"
  },
  "blocked_reason": null,
  "failure_reason": null,
  "created_at": "2023-04-26 20:21:26.347412+00",
  "expires_at": "2023-05-03 20:21:26.347412+00"
}
```

> 201 Response

```json
{
  "object": "domain_claim",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "pending",
  "domain_id": "a1b2c3d4-1176-453e-8fc1-35364d380206",
  "region": "us-east-1",
  "record": {
    "type": "TXT",
    "name": "example.com",
    "value": "resend-domain-verification=abc123",
    "ttl": "Auto"
  },
  "blocked_reason": null,
  "failure_reason": null,
  "created_at": "2023-04-26 20:21:26.347412+00",
  "expires_at": "2023-05-03 20:21:26.347412+00"
}
```

<h3 id="claim-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An identical pending claim already existed and was returned unchanged.|[DomainClaim](#schemadomainclaim)|
|201|Created|Claim created.|[DomainClaim](#schemadomainclaim)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a domain claim

<a id="opIddomains/get-claim"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string/claim \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /domains/{domain_id}/claim`

Retrieve the latest claim for the placeholder domain created by the claim.

<h3 id="retrieve-a-domain-claim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the placeholder domain created by the claim.|

> Example responses

> 200 Response

```json
{
  "object": "domain_claim",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "pending",
  "domain_id": "a1b2c3d4-1176-453e-8fc1-35364d380206",
  "region": "us-east-1",
  "record": {
    "type": "TXT",
    "name": "example.com",
    "value": "resend-domain-verification=abc123",
    "ttl": "Auto"
  },
  "blocked_reason": null,
  "failure_reason": null,
  "created_at": "2023-04-26 20:21:26.347412+00",
  "expires_at": "2023-05-03 20:21:26.347412+00"
}
```

<h3 id="retrieve-a-domain-claim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DomainClaim](#schemadomainclaim)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Verify a domain claim

<a id="opIddomains/verify-claim"></a>

> Code samples

```bash
curl https://api.resend.com/domains/string/claim/verify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /domains/{domain_id}/claim/verify`

Trigger asynchronous DNS verification and ownership transfer for a domain claim. The claim stays `pending` while verification runs; poll the retrieve endpoint for status. Once `completed`, the transferred domain has new DKIM records that must be added to DNS and verified via the standard domain verify endpoint.

<h3 id="verify-a-domain-claim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|The ID of the placeholder domain created by the claim.|

> Example responses

> 200 Response

```json
{
  "object": "domain_claim",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "pending",
  "domain_id": "a1b2c3d4-1176-453e-8fc1-35364d380206",
  "region": "us-east-1",
  "record": {
    "type": "TXT",
    "name": "example.com",
    "value": "resend-domain-verification=abc123",
    "ttl": "Auto"
  },
  "blocked_reason": null,
  "failure_reason": null,
  "created_at": "2023-04-26 20:21:26.347412+00",
  "expires_at": "2023-05-03 20:21:26.347412+00"
}
```

<h3 id="verify-a-domain-claim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DomainClaim](#schemadomainclaim)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-api-keys">API Keys</h1>

Create and manage API Keys through the Resend API.

## Retrieve a list of API keys

<a id="opIdapi-keys/list"></a>

> Code samples

```bash
curl https://api.resend.com/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api-keys`

<h3 id="retrieve-a-list-of-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "string",
      "name": "string",
      "created_at": "2023-10-06 23:47:56.678+00",
      "last_used_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListApiKeysResponse](#schemalistapikeysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new API key

<a id="opIdapi-keys/create"></a>

> Code samples

```bash
curl https://api.resend.com/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "permission": "full_access",
    "domain_id": "string"
  }'
```

`POST /api-keys`

> Body parameter

```json
{
  "name": "string",
  "permission": "full_access",
  "domain_id": "string"
}
```

<h3 id="create-a-new-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateApiKeyRequest](#schemacreateapikeyrequest)|false|none|
|» name|body|string|true|The API key name.|
|» permission|body|string|false|The API key can have full access to Resend’s API or be only restricted to send emails. * full_access - Can create, delete, get, and update any resource. * sending_access - Can only send emails.|
|» domain_id|body|string|false|Restrict an API key to send emails only from a specific domain. Only used when the permission is sending_access.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission|full_access|
|» permission|sending_access|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "token": "string"
}
```

<h3 id="create-a-new-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateApiKeyResponse](#schemacreateapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing API key

<a id="opIdapi-keys/remove"></a>

> Code samples

```bash
curl https://api.resend.com/api-keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api-keys/{api_key_id}`

<h3 id="remove-an-existing-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key_id|path|string|true|The API key ID.|

> Example responses

> 200 Response

```json
{
  "object": "api_key",
  "id": "string",
  "deleted": true
}
```

<h3 id="remove-an-existing-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteApiKeyResponse](#schemadeleteapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing API key

<a id="opIdapi-keys/update"></a>

> Code samples

```bash
curl https://api.resend.com/api-keys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /api-keys/{api_key_id}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-an-existing-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key_id|path|string|true|The API key ID.|
|body|body|[UpdateApiKeyRequest](#schemaupdateapikeyrequest)|false|none|
|» name|body|string|true|The API key name.|

> Example responses

> 200 Response

```json
{
  "object": "api_key",
  "id": "string"
}
```

<h3 id="update-an-existing-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateApiKeyResponse](#schemaupdateapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-audiences">Audiences</h1>

Deprecated: Use Segments instead. Create and manage Audiences through the Resend API.

## Retrieve a list of audiences

<a id="opIdaudiences/list"></a>

> Code samples

```bash
curl https://api.resend.com/audiences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiences`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "name": "Registered Users",
      "created_at": "2023-10-06 22:59:55.977+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-audiences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAudiencesResponseSuccess](#schemalistaudiencesresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a list of contacts

<a id="opIdaudiences/create"></a>

> Code samples

```bash
curl https://api.resend.com/audiences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /audiences`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-list-of-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAudienceOptions](#schemacreateaudienceoptions)|false|none|
|» name|body|string|true|The name of the audience you want to create.|

> Example responses

> 201 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "name": "Registered Users"
}
```

<h3 id="create-a-list-of-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateAudienceResponseSuccess](#schemacreateaudienceresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single audience

<a id="opIdaudiences/get"></a>

> Code samples

```bash
curl https://api.resend.com/audiences/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audiences/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.

<h3 id="retrieve-a-single-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Audience ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "name": "Registered Users",
  "created_at": "2023-10-06 22:59:55.977+00"
}
```

<h3 id="retrieve-a-single-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAudienceResponseSuccess](#schemagetaudienceresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing audience

<a id="opIdaudiences/remove"></a>

> Code samples

```bash
curl https://api.resend.com/audiences/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /audiences/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.

<h3 id="remove-an-existing-audience-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Audience ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "deleted": true
}
```

<h3 id="remove-an-existing-audience-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveAudienceResponseSuccess](#schemaremoveaudienceresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-contacts">Contacts</h1>

Create and manage Contacts through the Resend API.

## Retrieve a list of contacts

<a id="opIdcontacts/list"></a>

> Code samples

```bash
curl https://api.resend.com/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts`

<h3 id="retrieve-a-list-of-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "first_name": "Steve",
      "last_name": "Wozniak",
      "created_at": "2023-10-06 23:47:56.678+00",
      "unsubscribed": false
    }
  ]
}
```

<h3 id="retrieve-a-list-of-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContactsResponseSuccess](#schemalistcontactsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new contact

<a id="opIdcontacts/create"></a>

> Code samples

```bash
curl https://api.resend.com/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "segments": [
      {
        "id": "string"
      }
    ],
    "topics": [
      {
        "id": "string",
        "subscription": "opt_in"
      }
    ],
    "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
  }'
```

`POST /contacts`

> Body parameter

```json
{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "segments": [
    {
      "id": "string"
    }
  ],
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ],
  "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
}
```

<h3 id="create-a-new-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateContactOptions](#schemacreatecontactoptions)|false|none|
|» email|body|string|true|Email address of the contact.|
|» first_name|body|string|false|First name of the contact.|
|» last_name|body|string|false|Last name of the contact.|
|» unsubscribed|body|boolean|false|The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.|
|» properties|body|object|false|A map of custom property keys and values to create.|
|» » **additionalProperties**|body|string \| number \| null|false|none|
|» segments|body|[object]|false|Array of segment IDs to add the contact to.|
|» » id|body|string|false|The segment ID|
|» topics|body|[object]|false|Array of topic subscriptions for the contact.|
|» » id|body|string|false|The topic ID.|
|» » subscription|body|string|false|The subscription status for this topic.|
|» audience_id|body|string|false|**Deprecated.** Unique identifier of the audience to which the contact belongs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » subscription|opt_in|
|» » subscription|opt_out|

> Example responses

> 201 Response

```json
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

<h3 id="create-a-new-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateContactResponseSuccess](#schemacreatecontactresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of contact imports

<a id="opIdcontacts/list-imports"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/imports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/imports`

<h3 id="retrieve-a-list-of-contact-imports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter contact imports by status.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|in_progress|
|status|completed|
|status|failed|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "object": "contact_import",
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "status": "completed",
      "created_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:50:56.678+00",
      "counts": {
        "total": 100,
        "created": 80,
        "updated": 10,
        "skipped": 5,
        "failed": 5
      }
    }
  ]
}
```

<h3 id="retrieve-a-list-of-contact-imports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContactImportsResponseSuccess](#schemalistcontactimportsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a contact import

<a id="opIdcontacts/create-import"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/imports \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file' \
  -F 'column_map={"email":"Email","first_name":"First Name","last_name":"Last Name","unsubscribed":"Unsubscribed","properties":{"plan":{"column":"Plan","type":"string"}}}' \
  -F 'on_conflict=skip' \
  -F 'segments=[{"id":"78261eea-8f8b-4381-83c6-79fa7120f1cf"}]' \
  -F 'topics=[{"id":"b6d24b8e-af0b-4c3c-be0c-359bbd97381e","subscription":"opt_in"}]'
```

`POST /contacts/imports`

> Body parameter

```yaml
file: string
column_map: "{\"email\":\"Email\",\"first_name\":\"First Name\",\"last_name\":\"Last Name\",\"unsubscribed\":\"Unsubscribed\",\"properties\":{\"plan\":{\"column\":\"Plan\",\"type\":\"string\"}}}"
on_conflict: skip
segments: "[{\"id\":\"78261eea-8f8b-4381-83c6-79fa7120f1cf\"}]"
topics: "[{\"id\":\"b6d24b8e-af0b-4c3c-be0c-359bbd97381e\",\"subscription\":\"opt_in\"}]"
```

<h3 id="create-a-contact-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateContactImportOptions](#schemacreatecontactimportoptions)|true|none|
|» file|body|string(binary)|true|CSV file to import. Maximum size is 50MB.|
|» column_map|body|string|false|JSON-encoded object mapping contact fields and custom property keys to CSV column names. Supports `email`, `first_name`, `last_name`, `unsubscribed`, and `properties`. Custom property mappings can include `type` as `string`, `number`, or `boolean`; defaults to `string`.|
|» on_conflict|body|string|false|Strategy to use when an imported contact already exists.|
|» segments|body|string|false|JSON-encoded array of segments to add imported contacts to.|
|» topics|body|string|false|JSON-encoded array of topic subscriptions to apply to imported contacts. Each `subscription` must be `opt_in` or `opt_out`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» on_conflict|upsert|
|» on_conflict|skip|

> Example responses

> 201 Response

```json
{
  "object": "contact_import",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

<h3 id="create-a-contact-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateContactImportResponseSuccess](#schemacreatecontactimportresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single contact import

<a id="opIdcontacts/get-import"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/imports/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/imports/{id}`

<h3 id="retrieve-a-single-contact-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Contact Import ID.|

> Example responses

> 200 Response

```json
{
  "object": "contact_import",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "status": "completed",
  "created_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:50:56.678+00",
  "counts": {
    "total": 100,
    "created": 80,
    "updated": 10,
    "skipped": 5,
    "failed": 5
  }
}
```

<h3 id="retrieve-a-single-contact-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetContactImportResponseSuccess](#schemagetcontactimportresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single contact by ID or email

<a id="opIdcontacts/get"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}`

<h3 id="retrieve-a-single-contact-by-id-or-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact ID or email address.|

> Example responses

> 200 Response

```json
{
  "object": "contact",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "created_at": "2023-10-06 23:47:56.678+00",
  "unsubscribed": false,
  "properties": {}
}
```

<h3 id="retrieve-a-single-contact-by-id-or-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetContactResponseSuccess](#schemagetcontactresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing contact by ID or email

<a id="opIdcontacts/remove"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /contacts/{id}`

<h3 id="remove-an-existing-contact-by-id-or-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact ID or email address.|

> Example responses

> 200 Response

```json
{
  "object": "contact",
  "id": "520784e2-887d-4c25-b53c-4ad46ad38100",
  "deleted": true
}
```

<h3 id="remove-an-existing-contact-by-id-or-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveContactResponseSuccess](#schemaremovecontactresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a single contact by ID or email

<a id="opIdcontacts/update"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "steve.wozniak@gmail.com",
    "first_name": "Steve",
    "last_name": "Wozniak",
    "unsubscribed": false,
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /contacts/{id}`

> Body parameter

```json
{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-a-single-contact-by-id-or-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact ID or email address.|
|body|body|[UpdateContactOptions](#schemaupdatecontactoptions)|false|none|
|» email|body|string|false|Email address of the contact.|
|» first_name|body|string|false|First name of the contact.|
|» last_name|body|string|false|Last name of the contact.|
|» unsubscribed|body|boolean|false|The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.|
|» properties|body|object|false|A map of custom property keys and values to update.|
|» » **additionalProperties**|body|string \| number \| boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

<h3 id="update-a-single-contact-by-id-or-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateContactResponseSuccess](#schemaupdatecontactresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of segments for a contact

<a id="opIdcontacts/list-segments"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string/segments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{contact_id}/segments`

<h3 id="retrieve-a-list-of-segments-for-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|The Contact ID or email address.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-segments-for-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContactSegmentsResponseSuccess](#schemalistcontactsegmentsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add a contact to a segment

<a id="opIdcontacts/add-segment"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string/segments/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /contacts/{contact_id}/segments/{segment_id}`

<h3 id="add-a-contact-to-a-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|The Contact ID or email address.|
|segment_id|path|string|true|The Segment ID.|

> Example responses

> 200 Response

```json
{
  "object": "contact_segment",
  "contact_id": "string",
  "segment_id": "string"
}
```

<h3 id="add-a-contact-to-a-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AddContactToSegmentResponseSuccess](#schemaaddcontacttosegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a contact from a segment

<a id="opIdcontacts/remove-segment"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string/segments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /contacts/{contact_id}/segments/{segment_id}`

<h3 id="remove-a-contact-from-a-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|The Contact ID or email address.|
|segment_id|path|string|true|The Segment ID.|

> Example responses

> 200 Response

```json
{
  "object": "contact_segment",
  "contact_id": "string",
  "segment_id": "string",
  "deleted": true
}
```

<h3 id="remove-a-contact-from-a-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveContactFromSegmentResponseSuccess](#schemaremovecontactfromsegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve topics for a contact

<a id="opIdcontacts/list-topics"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{contact_id}/topics`

<h3 id="retrieve-topics-for-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|The Contact ID or email address.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "subscription": "opt_in"
    }
  ]
}
```

<h3 id="retrieve-topics-for-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetContactTopicsResponseSuccess](#schemagetcontacttopicsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update topics for a contact

<a id="opIdcontacts/update-topics"></a>

> Code samples

```bash
curl https://api.resend.com/contacts/string/topics \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "topics": [
      {
        "id": "string",
        "subscription": "opt_in"
      }
    ]
  }'
```

`PATCH /contacts/{contact_id}/topics`

> Body parameter

```json
{
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ]
}
```

<h3 id="update-topics-for-a-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contact_id|path|string|true|The Contact ID or email address.|
|body|body|[UpdateContactTopicsOptions](#schemaupdatecontacttopicsoptions)|false|none|
|» topics|body|[object]|true|none|
|» » id|body|string|false|The ID of the topic.|
|» » subscription|body|string|false|The subscription status (opt_in or opt_out).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » subscription|opt_in|
|» » subscription|opt_out|

> Example responses

> 200 Response

```json
{
  "object": "contact_topics",
  "contact_id": "string",
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ]
}
```

<h3 id="update-topics-for-a-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateContactTopicsResponseSuccess](#schemaupdatecontacttopicsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-receiving-emails">Receiving Emails</h1>

Retrieve and manage received emails and attachments through the Resend API.

## Retrieve a list of received emails

<a id="opIdemails/list-receiving"></a>

> Code samples

```bash
curl https://api.resend.com/emails/receiving \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/receiving`

<h3 id="retrieve-a-list-of-received-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of received emails to return.|
|after|query|string(uuid)|false|Pagination cursor to fetch results after this email ID. Cannot be used with 'before'.|
|before|query|string(uuid)|false|Pagination cursor to fetch results before this email ID. Cannot be used with 'after'.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "sender@example.com",
      "subject": "Hello World",
      "message_id": "<message-id@email.example.com>",
      "bcc": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "created_at": "2023-10-06T23:47:56.678Z",
      "attachments": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "filename": "string",
          "content_type": "string",
          "content_id": "string",
          "content_disposition": "inline",
          "size": 0
        }
      ]
    }
  ]
}
```

<h3 id="retrieve-a-list-of-received-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListReceivedEmailsResponse](#schemalistreceivedemailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single received email

<a id="opIdemails/get-receiving"></a>

> Code samples

```bash
curl https://api.resend.com/emails/receiving/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/receiving/{email_id}`

<h3 id="retrieve-a-single-received-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string(uuid)|true|The ID of the received email.|

> Example responses

> 200 Response

```json
{
  "object": "email",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "to": [
    "delivered@resend.dev"
  ],
  "from": "sender@example.com",
  "subject": "Hello World",
  "message_id": "<message-id@email.example.com>",
  "bcc": [],
  "cc": [],
  "reply_to": [],
  "received_for": [
    "forwarded@example.com"
  ],
  "html": "<p>Email content</p>",
  "text": "Email content",
  "headers": {
    "X-Custom-Header": "value"
  },
  "created_at": "2023-10-06T23:47:56.678Z",
  "attachments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "filename": "string",
      "content_type": "string",
      "content_id": "string",
      "content_disposition": "inline",
      "size": 0
    }
  ]
}
```

<h3 id="retrieve-a-single-received-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetReceivedEmailResponse](#schemagetreceivedemailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of attachments for a received email

<a id="opIdemails/list-receiving-attachments"></a>

> Code samples

```bash
curl https://api.resend.com/emails/receiving/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/receiving/{email_id}/attachments`

<h3 id="retrieve-a-list-of-attachments-for-a-received-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string(uuid)|true|The ID of the received email.|
|limit|query|integer|false|Maximum number of attachments to return.|
|after|query|string(uuid)|false|Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.|
|before|query|string(uuid)|false|Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "filename": "document.pdf",
      "content_type": "application/pdf",
      "content_id": "img001",
      "content_disposition": "attachment",
      "download_url": "https://cloudfront.example.com/path?Signature=...",
      "expires_at": "2024-10-27T18:30:00.000Z",
      "size": 2048
    }
  ]
}
```

<h3 id="retrieve-a-list-of-attachments-for-a-received-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAttachmentsResponse](#schemalistattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single attachment for a received email

<a id="opIdemails/get-receiving-attachment"></a>

> Code samples

```bash
curl https://api.resend.com/emails/receiving/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emails/receiving/{email_id}/attachments/{attachment_id}`

<h3 id="retrieve-a-single-attachment-for-a-received-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_id|path|string(uuid)|true|The ID of the received email.|
|attachment_id|path|string(uuid)|true|The ID of the attachment.|

> Example responses

> 200 Response

```json
{
  "object": "attachment",
  "id": "660e8400-e29b-41d4-a716-446655440000",
  "filename": "document.pdf",
  "content_type": "application/pdf",
  "content_id": "img001",
  "content_disposition": "attachment",
  "download_url": "https://cloudfront.example.com/path?Signature=...",
  "expires_at": "2024-10-27T18:30:00.000Z",
  "size": 2048
}
```

<h3 id="retrieve-a-single-attachment-for-a-received-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RetrievedAttachment](#schemaretrievedattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-webhooks">Webhooks</h1>

Create and manage Webhooks through the Resend API.

## Retrieve a list of webhooks

<a id="opIdwebhooks/list"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

<h3 id="retrieve-a-list-of-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of webhooks to return.|
|after|query|string(uuid)|false|Pagination cursor to fetch results after this webhook ID. Cannot be used with 'before'.|
|before|query|string(uuid)|false|Pagination cursor to fetch results before this webhook ID. Cannot be used with 'after'.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "endpoint": "https://webhook.example.com/handler",
      "events": [
        "email.sent"
      ],
      "status": "enabled",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListWebhooksResponse](#schemalistwebhooksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new webhook

<a id="opIdwebhooks/create"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": "https://webhook.example.com/handler",
    "events": [
      "email.sent",
      "email.delivered",
      "email.bounced",
      "email.suppressed"
    ]
  }'
```

`POST /webhooks`

> Body parameter

```json
{
  "endpoint": "https://webhook.example.com/handler",
  "events": [
    "email.sent",
    "email.delivered",
    "email.bounced",
    "email.suppressed"
  ]
}
```

<h3 id="create-a-new-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebhookRequest](#schemacreatewebhookrequest)|false|none|
|» endpoint|body|string|true|The URL where webhook events will be sent.|
|» events|body|[string]|true|Array of event types to subscribe to.|

> Example responses

> 201 Response

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "signing_secret": "whsec_..."
}
```

<h3 id="create-a-new-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CreateWebhookResponse](#schemacreatewebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single webhook

<a id="opIdwebhooks/get"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}`

<h3 id="retrieve-a-single-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|

> Example responses

> 200 Response

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "endpoint": "https://webhook.example.com/handler",
  "events": [
    "email.sent",
    "email.delivered"
  ],
  "status": "enabled",
  "created_at": "2023-10-06 23:47:56.678+00",
  "signing_secret": "whsec_..."
}
```

<h3 id="retrieve-a-single-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetWebhookResponse](#schemagetwebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing webhook

<a id="opIdwebhooks/remove"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{webhook_id}`

<h3 id="remove-an-existing-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|

> Example responses

> 200 Response

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "deleted": true
}
```

<h3 id="remove-an-existing-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteWebhookResponse](#schemadeletewebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing webhook

<a id="opIdwebhooks/update"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": "https://webhook.example.com/new-handler",
    "events": [
      "email.sent",
      "email.delivered"
    ],
    "status": "enabled"
  }'
```

`PATCH /webhooks/{webhook_id}`

> Body parameter

```json
{
  "endpoint": "https://webhook.example.com/new-handler",
  "events": [
    "email.sent",
    "email.delivered"
  ],
  "status": "enabled"
}
```

<h3 id="update-an-existing-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|
|body|body|[UpdateWebhookRequest](#schemaupdatewebhookrequest)|false|none|
|» endpoint|body|string|false|The URL where webhook events will be sent.|
|» events|body|[string]|false|Array of event types to subscribe to.|
|» status|body|string|false|The status of the webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

<h3 id="update-an-existing-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateWebhookResponse](#schemaupdatewebhookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotate a webhook signing secret

<a id="opIdwebhooks/rotate-signing-secret"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/signing-secret/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{webhook_id}/signing-secret/rotate`

Generates a new signing secret for the webhook and returns it. Payloads delivered after the rotation are signed with the new secret. The previous secret keeps verifying payloads for 24 hours, so both secrets are accepted during that window. A webhook that does not exist or was removed returns a 404 not_found.

<h3 id="rotate-a-webhook-signing-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|

> Example responses

> 200 Response

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "signing_secret": "whsec_..."
}
```

<h3 id="rotate-a-webhook-signing-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RotateWebhookSigningSecretResponse](#schemarotatewebhooksigningsecretresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of webhook events

<a id="opIdwebhooks/list-events"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}/events`

<h3 id="retrieve-a-list-of-webhook-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "type": "email.sent",
      "created_at": "2026-08-22T15:28:00.000Z",
      "status": "success"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-webhook-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListWebhookEventsResponse](#schemalistwebhookeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single webhook event

<a id="opIdwebhooks/get-event"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}/events/{event_id}`

<h3 id="retrieve-a-single-webhook-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|
|event_id|path|string|true|The Webhook Event ID.|

> Example responses

> 200 Response

```json
{
  "object": "webhook_event",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "type": "email.sent",
  "created_at": "2026-08-22T15:28:00.000Z",
  "status": "attempting",
  "next_attempt_at": "2026-08-22T15:33:00.000Z",
  "payload": {
    "type": "email.sent",
    "created_at": "2026-08-22T15:28:00.000Z",
    "data": {
      "email_id": "571f1f42-1c2d-4b1f-8f8e-8b3b5b3b5b3b",
      "from": "onboarding@resend.dev",
      "to": [
        "delivered@resend.dev"
      ],
      "subject": "Welcome",
      "created_at": "2026-08-22T15:27:59.000Z"
    }
  }
}
```

<h3 id="retrieve-a-single-webhook-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetWebhookEventResponse](#schemagetwebhookeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Replay a webhook event

<a id="opIdwebhooks/replay-event"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/events/string/replay \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{webhook_id}/events/{event_id}/replay`

Queues one more delivery of the event to the webhook. The event must be retrievable through the get event endpoint and the webhook must be enabled; a disabled webhook returns a 422 validation_error. A manual replay does not schedule automatic retries.

<h3 id="replay-a-webhook-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|
|event_id|path|string|true|The Webhook Event ID.|

> Example responses

> 200 Response

```json
{
  "object": "webhook_event",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
}
```

<h3 id="replay-a-webhook-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReplayWebhookEventResponse](#schemareplaywebhookeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of webhook event attempts

<a id="opIdwebhooks/list-event-attempts"></a>

> Code samples

```bash
curl https://api.resend.com/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/events/string/attempts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhook_id}/events/{event_id}/attempts`

<h3 id="retrieve-a-list-of-webhook-event-attempts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string(uuid)|true|The Webhook ID.|
|event_id|path|string|true|The Webhook Event ID.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "http_status_code": 200,
      "response": "{\"ok\":true}",
      "sent_at": "2026-08-22T15:33:12.000Z"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-webhook-event-attempts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListWebhookEventAttemptsResponse](#schemalistwebhookeventattemptsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-templates">Templates</h1>

Create and manage Templates through the Resend API.

## Retrieve a list of templates

<a id="opIdtemplates/list"></a>

> Code samples

```bash
curl https://api.resend.com/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /templates`

<h3 id="retrieve-a-list-of-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "draft",
      "published_at": "2023-10-06 23:47:56.678+00",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00",
      "alias": "string"
    }
  ],
  "has_more": true
}
```

<h3 id="retrieve-a-list-of-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListTemplatesResponseSuccess](#schemalisttemplatesresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a template

<a id="opIdtemplates/create"></a>

> Code samples

```bash
curl https://api.resend.com/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "alias": "string",
    "from": "string",
    "subject": "string",
    "reply_to": [
      "string"
    ],
    "html": "string",
    "text": "string",
    "variables": [
      {
        "key": "string",
        "type": "string",
        "fallback_value": "string"
      }
    ]
  }'
```

`POST /templates`

> Body parameter

```json
{
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "key": "string",
      "type": "string",
      "fallback_value": "string"
    }
  ]
}
```

<h3 id="create-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTemplateRequest](#schemacreatetemplaterequest)|false|none|
|» name|body|string|true|The name of the template.|
|» alias|body|string|false|The alias of the template.|
|» from|body|string|false|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|» subject|body|string|false|Email subject.|
|» reply_to|body|[string]|false|Reply-to email addresses.|
|» html|body|string|true|The HTML version of the template.|
|» text|body|string|false|The plain text version of the template.|
|» variables|body|[[TemplateVariableInput](#schematemplatevariableinput)]|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "object": "template"
}
```

<h3 id="create-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateTemplateResponseSuccess](#schemacreatetemplateresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single template

<a id="opIdtemplates/get"></a>

> Code samples

```bash
curl https://api.resend.com/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /templates/{id}`

<h3 id="retrieve-a-single-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Template ID or alias.|

> Example responses

> 200 Response

```json
{
  "object": "template",
  "id": "string",
  "current_version_id": "string",
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "id": "string",
      "key": "string",
      "type": "string",
      "fallback_value": "string",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ],
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00",
  "status": "draft",
  "published_at": "2023-10-06 23:47:56.678+00",
  "has_unpublished_versions": true
}
```

<h3 id="retrieve-a-single-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Template](#schematemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing template

<a id="opIdtemplates/remove"></a>

> Code samples

```bash
curl https://api.resend.com/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /templates/{id}`

<h3 id="remove-an-existing-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Template ID or alias.|

> Example responses

> 200 Response

```json
{
  "object": "template",
  "id": "string",
  "deleted": true
}
```

<h3 id="remove-an-existing-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveTemplateResponseSuccess](#schemaremovetemplateresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing template

<a id="opIdtemplates/update"></a>

> Code samples

```bash
curl https://api.resend.com/templates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "alias": "string",
    "from": "string",
    "subject": "string",
    "reply_to": [
      "string"
    ],
    "html": "string",
    "text": "string",
    "variables": [
      {
        "key": "string",
        "type": "string",
        "fallback_value": "string"
      }
    ]
  }'
```

`PATCH /templates/{id}`

> Body parameter

```json
{
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "key": "string",
      "type": "string",
      "fallback_value": "string"
    }
  ]
}
```

<h3 id="update-an-existing-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Template ID or alias.|
|body|body|[UpdateTemplateOptions](#schemaupdatetemplateoptions)|false|none|
|» name|body|string|false|The name of the template.|
|» alias|body|string|false|The alias of the template.|
|» from|body|string|false|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|» subject|body|string|false|Email subject.|
|» reply_to|body|[string]|false|Reply-to email addresses.|
|» html|body|string|false|The HTML version of the template.|
|» text|body|string|false|The plain text version of the template.|
|» variables|body|[[TemplateVariableInput](#schematemplatevariableinput)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "template"
}
```

<h3 id="update-an-existing-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateTemplateResponseSuccess](#schemaupdatetemplateresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Publish a template

<a id="opIdtemplates/publish"></a>

> Code samples

```bash
curl https://api.resend.com/templates/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /templates/{id}/publish`

<h3 id="publish-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Template ID or alias.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "template"
}
```

<h3 id="publish-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PublishTemplateResponseSuccess](#schemapublishtemplateresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Duplicate a template

<a id="opIdtemplates/duplicate"></a>

> Code samples

```bash
curl https://api.resend.com/templates/string/duplicate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /templates/{id}/duplicate`

<h3 id="duplicate-a-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Template ID or alias.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "template"
}
```

<h3 id="duplicate-a-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DuplicateTemplateResponseSuccess](#schemaduplicatetemplateresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-broadcasts">Broadcasts</h1>

Create and manage Broadcasts through the Resend API.

## Retrieve a list of broadcasts

<a id="opIdbroadcasts/list"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /broadcasts`

<h3 id="retrieve-a-list-of-broadcasts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "name": "November announcements",
      "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "status": "draft",
      "created_at": "2023-10-06 22:59:55.977+00",
      "scheduled_at": "2023-10-06 22:59:55.977+00",
      "sent_at": "2023-10-06 22:59:55.977+00",
      "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-broadcasts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListBroadcastsResponseSuccess](#schemalistbroadcastsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a broadcast

<a id="opIdbroadcasts/create"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "segment_id": "string",
    "audience_id": "string",
    "from": "string",
    "subject": "string",
    "reply_to": [
      "string"
    ],
    "preview_text": "Here are our announcements",
    "html": "string",
    "text": "string",
    "topic_id": "string",
    "send": true,
    "scheduled_at": "string"
  }'
```

`POST /broadcasts`

> Body parameter

```json
{
  "name": "string",
  "segment_id": "string",
  "audience_id": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "preview_text": "Here are our announcements",
  "html": "string",
  "text": "string",
  "topic_id": "string",
  "send": true,
  "scheduled_at": "string"
}
```

<h3 id="create-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateBroadcastOptions](#schemacreatebroadcastoptions)|false|none|
|» name|body|string|false|Name of the broadcast.|
|» segment_id|body|string|true|Unique identifier of the segment this broadcast will be sent to.|
|» audience_id|body|string|false|**Deprecated.** Use `segment_id` instead. Unique identifier of the segment this broadcast will be sent to.|
|» from|body|string|true|The email address of the sender.|
|» subject|body|string|true|The subject line of the email.|
|» reply_to|body|[string]|false|The email addresses to which replies should be sent.|
|» preview_text|body|string|false|The preview text of the email.|
|» html|body|string|false|The HTML version of the message.|
|» text|body|string|false|The plain text version of the message.|
|» topic_id|body|string|false|The topic ID that the broadcast will be scoped to.|
|» send|body|boolean|false|Whether to send the broadcast immediately or keep it as a draft.<br>|
|» scheduled_at|body|string|false|Schedule time to send the broadcast. Can only be used if `send` is true.<br>|

> Example responses

> 201 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

<h3 id="create-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateBroadcastResponseSuccess](#schemacreatebroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single broadcast

<a id="opIdbroadcasts/get"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /broadcasts/{id}`

<h3 id="retrieve-a-single-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Broadcast ID.|

> Example responses

> 200 Response

```json
{
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "name": "November announcements",
  "audience_id": "string",
  "segment_id": "string",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello World",
  "reply_to": [
    "string"
  ],
  "preview_text": "Here are our announcements",
  "status": "draft",
  "created_at": "2023-10-06 22:59:55.977+00",
  "scheduled_at": "2023-10-06 22:59:55.977+00",
  "sent_at": "2023-10-06 22:59:55.977+00",
  "text": "Hello {{{FIRST_NAME|there}}}!",
  "html": "<p>Hello {{{FIRST_NAME|there}}}!</p>",
  "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
}
```

<h3 id="retrieve-a-single-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetBroadcastResponseSuccess](#schemagetbroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing broadcast that is in the draft status

<a id="opIdbroadcasts/remove"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /broadcasts/{id}`

<h3 id="remove-an-existing-broadcast-that-is-in-the-draft-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Broadcast ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast",
  "deleted": true
}
```

<h3 id="remove-an-existing-broadcast-that-is-in-the-draft-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveBroadcastResponseSuccess](#schemaremovebroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing broadcast

<a id="opIdbroadcasts/update"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "audience_id": "string",
    "segment_id": "string",
    "from": "string",
    "subject": "string",
    "reply_to": [
      "string"
    ],
    "preview_text": "string",
    "html": "string",
    "text": "string",
    "topic_id": "string"
  }'
```

`PATCH /broadcasts/{id}`

> Body parameter

```json
{
  "name": "string",
  "audience_id": "string",
  "segment_id": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "preview_text": "string",
  "html": "string",
  "text": "string",
  "topic_id": "string"
}
```

<h3 id="update-an-existing-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Broadcast ID.|
|body|body|[UpdateBroadcastOptions](#schemaupdatebroadcastoptions)|false|none|
|» name|body|string|false|Name of the broadcast.|
|» audience_id|body|string|false|**Deprecated.** Use `segment_id` instead. Unique identifier of the audience this broadcast will be sent to.|
|» segment_id|body|string|false|Unique identifier of the segment this broadcast will be sent to.|
|» from|body|string|false|The email address of the sender.|
|» subject|body|string|false|The subject line of the email.|
|» reply_to|body|[string]|false|The email addresses to which replies should be sent.|
|» preview_text|body|string|false|The preview text of the email.|
|» html|body|string|false|The HTML version of the message.|
|» text|body|string|false|The plain text version of the message.|
|» topic_id|body|string|false|The topic ID that the broadcast will be scoped to.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

<h3 id="update-an-existing-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateBroadcastResponseSuccess](#schemaupdatebroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send or schedule a broadcast

<a id="opIdbroadcasts/send"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/string/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "scheduled_at": "string"
  }'
```

`POST /broadcasts/{id}/send`

> Body parameter

```json
{
  "scheduled_at": "string"
}
```

<h3 id="send-or-schedule-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Broadcast ID.|
|body|body|[SendBroadcastOptions](#schemasendbroadcastoptions)|false|none|
|» scheduled_at|body|string|false|Schedule email to be sent later. The date should be in ISO 8601 format.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
}
```

<h3 id="send-or-schedule-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SendBroadcastResponseSuccess](#schemasendbroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a broadcast

<a id="opIdbroadcasts/cancel"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /broadcasts/{id}/cancel`

Cancels a broadcast that is queued or scheduled. Canceling a queued broadcast stops it mid-send; emails already sent are not affected, but no further emails will go out.

<h3 id="cancel-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Broadcast ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

<h3 id="cancel-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CancelBroadcastResponseSuccess](#schemacancelbroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Duplicate a broadcast

<a id="opIdbroadcasts/duplicate"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/497f6eca-6276-4993-bfeb-53cbbbba6f08/duplicate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /broadcasts/{id}/duplicate`

Creates a new draft broadcast with the same segment, topic, sender, subject, reply-to, preview text, and content as the source. The copy is named after the source with " (copy)" appended, truncated to 70 characters.

<h3 id="duplicate-a-broadcast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Broadcast ID.|

> Example responses

> 201 Response

```json
{
  "id": "1f85ae38-f5b9-4c1f-8766-667a53970fea",
  "object": "broadcast"
}
```

<h3 id="duplicate-a-broadcast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[DuplicateBroadcastResponseSuccess](#schemaduplicatebroadcastresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve broadcast recipients

<a id="opIdbroadcasts/recipients"></a>

> Code samples

```bash
curl 'https://api.resend.com/broadcasts/497f6eca-6276-4993-bfeb-53cbbbba6f08/recipients?type=sent' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /broadcasts/{id}/recipients`

Retrieve the recipients of a broadcast for a given event type, such as who opened, clicked, or bounced.

<h3 id="retrieve-broadcast-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Broadcast ID.|
|type|query|string|true|The recipient event type to filter by.|
|email|query|string|false|Filter recipients whose email address contains this value.|
|bounce_type|query|string|false|Filter bounced recipients by bounce type. Only valid when `type` is `bounced`.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sent|
|type|delivered|
|type|opened|
|type|clicked|
|type|bounced|
|type|complained|
|type|unsubscribed|
|type|suppressed|
|bounce_type|permanent|
|bounce_type|transient|
|bounce_type|undetermined|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b2Zmc2V0OjA",
      "contact_id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "count": 3,
      "bounce_type": "permanent",
      "clicked_links": [
        {
          "url": "https://resend.com/pricing",
          "clicks": 2
        }
      ]
    }
  ]
}
```

<h3 id="retrieve-broadcast-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListBroadcastRecipientsResponseSuccess](#schemalistbroadcastrecipientsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a broadcast's clicked links

<a id="opIdbroadcasts/list-clicked-links"></a>

> Code samples

```bash
curl https://api.resend.com/broadcasts/497f6eca-6276-4993-bfeb-53cbbbba6f08/clicked-links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /broadcasts/{id}/clicked-links`

<h3 id="retrieve-a-broadcasts-clicked-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Broadcast ID.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b2Zmc2V0OjA",
      "url": "https://resend.com/pricing",
      "clicks": 42,
      "unique_clicks": 30
    }
  ]
}
```

<h3 id="retrieve-a-broadcasts-clicked-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListBroadcastClickedLinksResponseSuccess](#schemalistbroadcastclickedlinksresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-segments">Segments</h1>

Create and manage Segments through the Resend API.

## Retrieve a list of segments

<a id="opIdsegments/list"></a>

> Code samples

```bash
curl https://api.resend.com/segments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /segments`

<h3 id="retrieve-a-list-of-segments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "audience_id": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSegmentsResponseSuccess](#schemalistsegmentsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new segment

<a id="opIdsegments/create"></a>

> Code samples

```bash
curl https://api.resend.com/segments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "audience_id": "string",
    "filter": {}
  }'
```

`POST /segments`

> Body parameter

```json
{
  "name": "string",
  "audience_id": "string",
  "filter": {}
}
```

<h3 id="create-a-new-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSegmentOptions](#schemacreatesegmentoptions)|false|none|
|» name|body|string|true|The name of the segment.|
|» audience_id|body|string|false|**Deprecated.** The ID of the audience this segment belongs to.|
|» filter|body|object|false|Filter conditions for the segment.|

> Example responses

> 201 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment"
}
```

<h3 id="create-a-new-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateSegmentResponseSuccess](#schemacreatesegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single segment

<a id="opIdsegments/get"></a>

> Code samples

```bash
curl https://api.resend.com/segments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /segments/{id}`

<h3 id="retrieve-a-single-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Segment ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment",
  "name": "Active Users",
  "audience_id": "string",
  "filter": {},
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

<h3 id="retrieve-a-single-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSegmentResponseSuccess](#schemagetsegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing segment

<a id="opIdsegments/remove"></a>

> Code samples

```bash
curl https://api.resend.com/segments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /segments/{id}`

<h3 id="remove-an-existing-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Segment ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment",
  "deleted": true
}
```

<h3 id="remove-an-existing-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveSegmentResponseSuccess](#schemaremovesegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing segment

<a id="opIdsegments/update"></a>

> Code samples

```bash
curl https://api.resend.com/segments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /segments/{id}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-an-existing-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Segment ID.|
|body|body|[UpdateSegmentOptions](#schemaupdatesegmentoptions)|false|none|
|» name|body|string|true|The name of the segment.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment"
}
```

<h3 id="update-an-existing-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateSegmentResponseSuccess](#schemaupdatesegmentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of contacts in a segment

<a id="opIdsegments/list-contacts"></a>

> Code samples

```bash
curl https://api.resend.com/segments/497f6eca-6276-4993-bfeb-53cbbbba6f08/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /segments/{id}/contacts`

<h3 id="retrieve-a-list-of-contacts-in-a-segment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|The Segment ID.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "first_name": "Steve",
      "last_name": "Wozniak",
      "created_at": "2023-10-06 23:47:56.678+00",
      "unsubscribed": false
    }
  ]
}
```

<h3 id="retrieve-a-list-of-contacts-in-a-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContactsResponseSuccess](#schemalistcontactsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-topics">Topics</h1>

Create and manage Topics through the Resend API.

## Retrieve a list of topics

<a id="opIdtopics/list"></a>

> Code samples

```bash
curl https://api.resend.com/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /topics`

<h3 id="retrieve-a-list-of-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "default_subscription": "opt_in",
      "visibility": "public",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListTopicsResponseSuccess](#schemalisttopicsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new topic

<a id="opIdtopics/create"></a>

> Code samples

```bash
curl https://api.resend.com/topics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "default_subscription": "opt_in",
    "description": "string",
    "visibility": "private"
  }'
```

`POST /topics`

> Body parameter

```json
{
  "name": "string",
  "default_subscription": "opt_in",
  "description": "string",
  "visibility": "private"
}
```

<h3 id="create-a-new-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTopicOptions](#schemacreatetopicoptions)|false|none|
|» name|body|string|true|The name of the topic. Max 50 characters.|
|» default_subscription|body|string|true|The default subscription status for the topic. Cannot be changed after creation.|
|» description|body|string|false|A description of the topic. Max 200 characters.|
|» visibility|body|string|false|The visibility of the topic. Public topics are visible to all contacts on the unsubscribe page. Private topics are only visible to opted-in contacts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» default_subscription|opt_in|
|» default_subscription|opt_out|
|» visibility|public|
|» visibility|private|

> Example responses

> 201 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic"
}
```

<h3 id="create-a-new-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateTopicResponseSuccess](#schemacreatetopicresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single topic

<a id="opIdtopics/get"></a>

> Code samples

```bash
curl https://api.resend.com/topics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /topics/{id}`

<h3 id="retrieve-a-single-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Topic ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic",
  "name": "Newsletter",
  "description": "string",
  "default_subscription": "opt_in",
  "visibility": "public",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

<h3 id="retrieve-a-single-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetTopicResponseSuccess](#schemagettopicresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing topic

<a id="opIdtopics/remove"></a>

> Code samples

```bash
curl https://api.resend.com/topics/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /topics/{id}`

<h3 id="remove-an-existing-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Topic ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic",
  "deleted": true
}
```

<h3 id="remove-an-existing-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveTopicResponseSuccess](#schemaremovetopicresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing topic

<a id="opIdtopics/update"></a>

> Code samples

```bash
curl https://api.resend.com/topics/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "visibility": "public"
  }'
```

`PATCH /topics/{id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "visibility": "public"
}
```

<h3 id="update-an-existing-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Topic ID.|
|body|body|[UpdateTopicOptions](#schemaupdatetopicoptions)|false|none|
|» name|body|string|false|The name of the topic. Max 50 characters.|
|» description|body|string|false|A description of the topic. Max 200 characters.|
|» visibility|body|string|false|The visibility of the topic.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|public|
|» visibility|private|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic"
}
```

<h3 id="update-an-existing-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateTopicResponseSuccess](#schemaupdatetopicresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-contact-properties">Contact Properties</h1>

Create and manage Contact Properties through the Resend API.

## Retrieve a list of contact properties

<a id="opIdcontact-properties/list"></a>

> Code samples

```bash
curl https://api.resend.com/contact-properties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contact-properties`

<h3 id="retrieve-a-list-of-contact-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "key": "string",
      "type": "string",
      "fallback_value": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-contact-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListContactPropertiesResponseSuccess](#schemalistcontactpropertiesresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new contact property

<a id="opIdcontact-properties/create"></a>

> Code samples

```bash
curl https://api.resend.com/contact-properties \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "type": "string",
    "fallback_value": "string"
  }'
```

`POST /contact-properties`

> Body parameter

```json
{
  "key": "string",
  "type": "string",
  "fallback_value": "string"
}
```

<h3 id="create-a-new-contact-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateContactPropertyOptions](#schemacreatecontactpropertyoptions)|false|none|
|» key|body|string|true|The property key. Max length is 50 characters. Only alphanumeric characters and underscores are allowed.|
|» type|body|string|true|The property type.|
|» fallback_value|body|string \| number|false|The default value to use when the property is not set for a contact. Must match the type specified in the type field.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|string|
|» type|number|

> Example responses

> 201 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property"
}
```

<h3 id="create-a-new-contact-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateContactPropertyResponseSuccess](#schemacreatecontactpropertyresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single contact property

<a id="opIdcontact-properties/get"></a>

> Code samples

```bash
curl https://api.resend.com/contact-properties/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contact-properties/{id}`

<h3 id="retrieve-a-single-contact-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact Property ID.|

> Example responses

> 200 Response

```json
{
  "object": "contact_property",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
  "key": "company_name",
  "type": "string",
  "fallback_value": "Acme Corp",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

<h3 id="retrieve-a-single-contact-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetContactPropertyResponseSuccess](#schemagetcontactpropertyresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing contact property

<a id="opIdcontact-properties/remove"></a>

> Code samples

```bash
curl https://api.resend.com/contact-properties/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /contact-properties/{id}`

<h3 id="remove-an-existing-contact-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact Property ID.|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property",
  "deleted": true
}
```

<h3 id="remove-an-existing-contact-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveContactPropertyResponseSuccess](#schemaremovecontactpropertyresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing contact property

<a id="opIdcontact-properties/update"></a>

> Code samples

```bash
curl https://api.resend.com/contact-properties/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fallback_value": "string"
  }'
```

`PATCH /contact-properties/{id}`

> Body parameter

```json
{
  "fallback_value": "string"
}
```

<h3 id="update-an-existing-contact-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The Contact Property ID.|
|body|body|[UpdateContactPropertyOptions](#schemaupdatecontactpropertyoptions)|false|none|
|» fallback_value|body|string \| number|false|The default value to use when the property is not set for a contact. Must match the type of the property.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property"
}
```

<h3 id="update-an-existing-contact-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateContactPropertyResponseSuccess](#schemaupdatecontactpropertyresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-suppressions">Suppressions</h1>

Create and manage Suppressions through the Resend API.

## Retrieve a list of suppressions

<a id="opIdsuppressions/list"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /suppressions`

<h3 id="retrieve-a-list-of-suppressions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|origin|query|string|false|Filter suppressions by origin.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|origin|bounce|
|origin|complaint|
|origin|manual|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "origin": "manual",
      "source_id": "479e3145-dd38-476b-932c-529ceb705947",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-suppressions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListSuppressionsResponseSuccess](#schemalistsuppressionsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a suppression

<a id="opIdsuppressions/add"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "steve.wozniak@gmail.com"
  }'
```

`POST /suppressions`

> Body parameter

```json
{
  "email": "steve.wozniak@gmail.com"
}
```

<h3 id="create-a-suppression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSuppressionOptions](#schemacreatesuppressionoptions)|true|none|
|» email|body|string|true|Email address to suppress.|

> Example responses

> 201 Response

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3"
}
```

<h3 id="create-a-suppression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateSuppressionResponseSuccess](#schemacreatesuppressionresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add up to 100 suppressions at once

<a id="opIdsuppressions/batch-add"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions/batch/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emails": [
      "steve.wozniak@gmail.com"
    ]
  }'
```

`POST /suppressions/batch/add`

> Body parameter

```json
{
  "emails": [
    "steve.wozniak@gmail.com"
  ]
}
```

<h3 id="add-up-to-100-suppressions-at-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchAddSuppressionsOptions](#schemabatchaddsuppressionsoptions)|true|none|
|» emails|body|[string]|true|Email addresses to suppress.|

> Example responses

> 201 Response

```json
{
  "data": [
    {
      "object": "suppression",
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3"
    }
  ]
}
```

<h3 id="add-up-to-100-suppressions-at-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[BatchAddSuppressionsResponseSuccess](#schemabatchaddsuppressionsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove up to 100 suppressions at once

<a id="opIdsuppressions/batch-remove"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions/batch/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emails": [
      "steve.wozniak@gmail.com"
    ],
    "ids": [
      "e169aa45-1ecf-4183-9955-b1499d5701d3"
    ]
  }'
```

`POST /suppressions/batch/remove`

> Body parameter

```json
{
  "emails": [
    "steve.wozniak@gmail.com"
  ],
  "ids": [
    "e169aa45-1ecf-4183-9955-b1499d5701d3"
  ]
}
```

<h3 id="remove-up-to-100-suppressions-at-once-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchRemoveSuppressionsOptions](#schemabatchremovesuppressionsoptions)|true|none|
|» emails|body|[string]|false|Email addresses to remove from the suppression list.|
|» ids|body|[string]|false|Suppression IDs to remove from the suppression list.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "object": "suppression",
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "deleted": true
    }
  ]
}
```

<h3 id="remove-up-to-100-suppressions-at-once-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BatchRemoveSuppressionsResponseSuccess](#schemabatchremovesuppressionsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single suppression by ID or email

<a id="opIdsuppressions/get"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /suppressions/{suppression}`

<h3 id="retrieve-a-single-suppression-by-id-or-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suppression|path|string|true|The Suppression ID or email address.|

> Example responses

> 200 Response

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "email": "steve.wozniak@gmail.com",
  "origin": "manual",
  "source_id": "479e3145-dd38-476b-932c-529ceb705947",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

<h3 id="retrieve-a-single-suppression-by-id-or-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSuppressionResponseSuccess](#schemagetsuppressionresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a single suppression by ID or email

<a id="opIdsuppressions/remove"></a>

> Code samples

```bash
curl https://api.resend.com/suppressions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /suppressions/{suppression}`

<h3 id="remove-a-single-suppression-by-id-or-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suppression|path|string|true|The Suppression ID or email address.|

> Example responses

> 200 Response

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "deleted": true
}
```

<h3 id="remove-a-single-suppression-by-id-or-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveSuppressionResponseSuccess](#schemaremovesuppressionresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-logs">Logs</h1>

Retrieve API request logs through the Resend API.

## Retrieve a list of logs

<a id="opIdlogs/list"></a>

> Code samples

```bash
curl https://api.resend.com/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs`

<h3 id="retrieve-a-list-of-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "2023-10-06 23:47:56.678+00",
      "endpoint": "string",
      "method": "GET",
      "response_status": 0,
      "user_agent": "string"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListLogsResponse](#schemalistlogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single log

<a id="opIdlogs/get"></a>

> Code samples

```bash
curl https://api.resend.com/logs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs/{log_id}`

<h3 id="retrieve-a-single-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_id|path|string(uuid)|true|The ID of the log.|

> Example responses

> 200 Response

```json
{
  "object": "log",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "2023-10-06 23:47:56.678+00",
  "endpoint": "string",
  "method": "GET",
  "response_status": 0,
  "user_agent": "string",
  "request_body": {},
  "response_body": {}
}
```

<h3 id="retrieve-a-single-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Log](#schemalog)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-automations">Automations</h1>

Create and manage Automations through the Resend API.

## Retrieve a list of automations

<a id="opIdautomations/list"></a>

> Code samples

```bash
curl https://api.resend.com/automations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /automations`

<h3 id="retrieve-a-list-of-automations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter automations by status.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|enabled|
|status|disabled|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "enabled",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-automations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAutomationsResponse](#schemalistautomationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an automation

<a id="opIdautomations/create"></a>

> Code samples

```bash
curl https://api.resend.com/automations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "status": "disabled",
    "steps": [
      {
        "key": "string",
        "type": "trigger",
        "config": {}
      }
    ],
    "connections": [
      {
        "from": "string",
        "to": "string",
        "type": "default"
      }
    ]
  }'
```

`POST /automations`

> Body parameter

```json
{
  "name": "string",
  "status": "disabled",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

<h3 id="create-an-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAutomationRequest](#schemacreateautomationrequest)|false|none|
|» name|body|string|true|The name of the automation.|
|» status|body|string|false|The initial status of the automation. Defaults to `disabled`.|
|» steps|body|[[AutomationStep](#schemaautomationstep)]|true|The steps that compose the automation workflow. Must include at least one `trigger` step.|
|» connections|body|[[AutomationConnection](#schemaautomationconnection)]|true|The connections between steps in the automation graph.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 201 Response

```json
{
  "object": "automation",
  "id": "string"
}
```

<h3 id="create-an-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateAutomationResponse](#schemacreateautomationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single automation

<a id="opIdautomations/get"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /automations/{automation_id}`

<h3 id="retrieve-a-single-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|

> Example responses

> 200 Response

```json
{
  "object": "automation",
  "id": "string",
  "name": "string",
  "status": "enabled",
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

<h3 id="retrieve-a-single-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Automation](#schemaautomation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an automation

<a id="opIdautomations/remove"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /automations/{automation_id}`

<h3 id="delete-an-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|

> Example responses

> 200 Response

```json
{
  "object": "automation",
  "id": "string",
  "deleted": true
}
```

<h3 id="delete-an-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeleteAutomationResponse](#schemadeleteautomationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an automation

<a id="opIdautomations/update"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "status": "enabled",
    "steps": [
      {
        "key": "string",
        "type": "trigger",
        "config": {}
      }
    ],
    "connections": [
      {
        "from": "string",
        "to": "string",
        "type": "default"
      }
    ]
  }'
```

`PATCH /automations/{automation_id}`

> Body parameter

```json
{
  "name": "string",
  "status": "enabled",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

<h3 id="update-an-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|
|body|body|[PatchAutomationRequest](#schemapatchautomationrequest)|false|none|
|» name|body|string|false|The name of the automation.|
|» status|body|string|false|The status of the automation.|
|» steps|body|[[AutomationStep](#schemaautomationstep)]|false|The steps that compose the automation workflow. Must be provided together with `connections`.|
|» connections|body|[[AutomationConnection](#schemaautomationconnection)]|false|The connections between steps in the automation graph. Must be provided together with `steps`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|enabled|
|» status|disabled|

> Example responses

> 200 Response

```json
{
  "object": "automation",
  "id": "string"
}
```

<h3 id="update-an-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PatchAutomationResponse](#schemapatchautomationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Duplicate an automation

<a id="opIdautomations/duplicate"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08/duplicate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /automations/{automation_id}/duplicate`

<h3 id="duplicate-an-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|

> Example responses

> 201 Response

```json
{
  "object": "automation",
  "id": "string"
}
```

<h3 id="duplicate-an-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[DuplicateAutomationResponse](#schemaduplicateautomationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Stop an automation

<a id="opIdautomations/stop"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /automations/{automation_id}/stop`

<h3 id="stop-an-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|

> Example responses

> 200 Response

```json
{
  "object": "automation",
  "id": "string",
  "status": "disabled"
}
```

<h3 id="stop-an-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StopAutomationResponse](#schemastopautomationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of automation runs

<a id="opIdautomations/list-runs"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /automations/{automation_id}/runs`

<h3 id="retrieve-a-list-of-automation-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|
|status|query|string|false|Filter runs by status. Comma-separated list of: running, completed, failed, cancelled.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "status": "running",
      "started_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:47:56.678+00",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-automation-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAutomationRunsResponse](#schemalistautomationrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single automation run

<a id="opIdautomations/get-run"></a>

> Code samples

```bash
curl https://api.resend.com/automations/497f6eca-6276-4993-bfeb-53cbbbba6f08/runs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /automations/{automation_id}/runs/{run_id}`

<h3 id="retrieve-a-single-automation-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|automation_id|path|string(uuid)|true|The ID of the automation.|
|run_id|path|string(uuid)|true|The ID of the automation run.|

> Example responses

> 200 Response

```json
{
  "object": "automation_run",
  "id": "string",
  "status": "running",
  "started_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:47:56.678+00",
  "created_at": "2023-10-06 23:47:56.678+00",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "status": "string",
      "started_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:47:56.678+00",
      "output": {},
      "error": {},
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-single-automation-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AutomationRun](#schemaautomationrun)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-events">Events</h1>

Create and manage Events through the Resend API.

## Retrieve a list of events

<a id="opIdevents/list"></a>

> Code samples

```bash
curl https://api.resend.com/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events`

<h3 id="retrieve-a-list-of-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "schema": {},
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListEventsResponse](#schemalisteventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an event

<a id="opIdevents/create"></a>

> Code samples

```bash
curl https://api.resend.com/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "schema": {}
  }'
```

`POST /events`

> Body parameter

```json
{
  "name": "string",
  "schema": {}
}
```

<h3 id="create-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateEventRequest](#schemacreateeventrequest)|false|none|
|» name|body|string|true|The name of the event. Cannot start with the reserved `resend:` prefix.|
|» schema|body|object \| null|false|An optional flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.|

> Example responses

> 201 Response

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="create-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateEventResponse](#schemacreateeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send an event

<a id="opIdevents/send"></a>

> Code samples

```bash
curl https://api.resend.com/events/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event": "string",
    "contact_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com",
    "payload": {}
  }'
```

`POST /events/send`

> Body parameter

```json
{
  "event": "string",
  "contact_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com",
  "payload": {}
}
```

<h3 id="send-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendEventRequest](#schemasendeventrequest)|false|none|
|» event|body|string|true|The name of the event to send.|
|» contact_id|body|string(uuid)|false|The ID of the contact to associate with this event. Exactly one of `contact_id` or `email` must be provided.|
|» email|body|string(email)|false|The email address to associate with this event. Exactly one of `contact_id` or `email` must be provided.|
|» payload|body|object|false|An optional payload of key/value pairs to include with the event.|

> Example responses

> 202 Response

```json
{
  "object": "event",
  "event": "string"
}
```

<h3 id="send-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|[SendEventResponse](#schemasendeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single event

<a id="opIdevents/get"></a>

> Code samples

```bash
curl https://api.resend.com/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{identifier}`

<h3 id="retrieve-a-single-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|The event ID (UUID) or event name.|

> Example responses

> 200 Response

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schema": {},
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00"
}
```

<h3 id="retrieve-a-single-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an event

<a id="opIdevents/remove"></a>

> Code samples

```bash
curl https://api.resend.com/events/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /events/{identifier}`

<h3 id="delete-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|The event ID (UUID) or event name.|

> Example responses

> 200 Response

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deleted": true
}
```

<h3 id="delete-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveEventResponse](#schemaremoveeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an event

<a id="opIdevents/update"></a>

> Code samples

```bash
curl https://api.resend.com/events/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "schema": {}
  }'
```

`PATCH /events/{identifier}`

> Body parameter

```json
{
  "schema": {}
}
```

<h3 id="update-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|The event ID (UUID) or event name.|
|body|body|[UpdateEventRequest](#schemaupdateeventrequest)|false|none|
|» schema|body|object \| null|true|A flat key/type map defining the event payload schema. Set to `null` to clear the schema. Supported types are `string`, `number`, `boolean`, and `date`.|

> Example responses

> 200 Response

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="update-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateEventResponse](#schemaupdateeventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-oauth">OAuth</h1>

List and manage OAuth grants through the Resend API.

## Retrieve a list of OAuth grants

<a id="opIdoauth/list-grants"></a>

> Code samples

```bash
curl https://api.resend.com/oauth/grants \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth/grants`

<h3 id="retrieve-a-list-of-oauth-grants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "string",
      "client_id": "string",
      "scopes": [
        "string"
      ],
      "created_at": "2023-10-06 23:47:56.678+00",
      "revoked_at": "2023-10-06 23:47:56.678+00",
      "revoked_reason": "string",
      "client": {
        "name": "string",
        "logo_uri": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-list-of-oauth-grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListOAuthGrantsResponse](#schemalistoauthgrantsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Revoke an OAuth grant

<a id="opIdoauth/revoke-grant"></a>

> Code samples

```bash
curl https://api.resend.com/oauth/grants/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /oauth/grants/{oauth_grant_id}`

<h3 id="revoke-an-oauth-grant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_grant_id|path|string|true|The OAuth grant ID.|

> Example responses

> 200 Response

```json
{
  "object": "oauth_grant",
  "id": "string",
  "revoked_at": "2023-10-06T23:47:56.678Z",
  "revoked_reason": "string"
}
```

<h3 id="revoke-an-oauth-grant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RevokeOAuthGrantResponse](#schemarevokeoauthgrantresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-usage">Usage</h1>

Retrieve your account usage and plan limits through the Resend API.

## Retrieve account usage

<a id="opIdusage/get"></a>

> Code samples

```bash
curl https://api.resend.com/usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /usage`

Retrieve your account's current usage and plan limits.

> Example responses

> 200 Response

```json
{
  "object": "usage",
  "emails": {
    "daily": {
      "used": 0,
      "limit": 0,
      "sent": 0,
      "received": 0,
      "resets_at": "string"
    },
    "monthly": {
      "used": 0,
      "limit": 0,
      "sent": 0,
      "received": 0,
      "resets_at": "string"
    }
  },
  "contacts": {
    "used": 0,
    "limit": 0
  },
  "segments": {
    "used": 0,
    "limit": 0
  },
  "broadcasts": {
    "used": 0,
    "limit": null
  },
  "ai_credits": {
    "used": 0,
    "limit": 0,
    "next_increase_at": "string"
  },
  "automation_runs": {
    "used": 0,
    "limit": 0,
    "resets_at": "string"
  },
  "domains": {
    "used": 0,
    "limit": 0
  },
  "rate_limit": {
    "limit": 0,
    "duration": "string"
  }
}
```

<h3 id="retrieve-account-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetUsageResponseSuccess](#schemagetusageresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-inboxes">Inboxes</h1>

Create and manage Inboxes through the Resend API. A sending access key can call only these Inboxes endpoints: `POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply`, `POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward`, `POST /inboxes/{inbox_id}/drafts` and `POST /inboxes/{inbox_id}/drafts/{draft_id}/send`. When the key is limited to one domain, the inbox address must be on that domain, or the request returns a 403. Every other Inboxes endpoint needs a full access API key, and a sending access key returns a 401 `restricted_api_key`.

## Retrieve a list of inboxes

<a id="opIdinboxes/list"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes`

Returns the inboxes of the team, newest first. The list items carry fewer fields than a single inbox. Retrieve an inbox to get all its fields. The `after` and `before` cursors take an inbox ID, and only one of them can be passed, or the request returns a 422. A value that is not a UUID returns a 422, and an unknown ID returns a 404.

<h3 id="retrieve-a-list-of-inboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "from_name": "Ada from Support",
      "unread": 3,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-inboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListInboxesResponseSuccess](#schemalistinboxesresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an inbox

<a id="opIdinboxes/create"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email_address": "support@acme.com",
    "name": "Customer Support",
    "from_name": "Ada from Support",
    "forwarding": false
  }'
```

`POST /inboxes`

Creates an inbox that sends and receives email at an address on one of your domains. The domain must belong to the team. Without `forwarding`, the domain must have receiving enabled, with DKIM and SPF verified and the inbound MX record verified or pending. With `forwarding` set to `true`, the domain only needs DKIM and SPF verified for sending, and Resend generates a `receiving_address` on the team inbound domain, and a team without an inbound domain gets a 422. A domain that does not meet these rules returns a 422 validation_error. An address or receiving address that is already in use returns a 409. A team that has reached the inbox limit of its plan returns a 403 validation_error. A blocked account returns a 451.

> Body parameter

```json
{
  "email_address": "support@acme.com",
  "name": "Customer Support",
  "from_name": "Ada from Support",
  "forwarding": false
}
```

<h3 id="create-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateInboxOptions](#schemacreateinboxoptions)|true|none|
|» email_address|body|string|true|The inbox email address on one of your domains. The API trims and lowercases it. The part before the `@` is at most 64 characters and contains only letters, numbers, and `. _ % -`. A `+` returns a 422. It cannot start or end with a dot or contain two dots in a row.|
|» name|body|string|false|Internal name for the inbox. Recipients do not see it. Max 64 characters. Defaults to `email_address`.|
|» from_name|body|string|false|The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string leaves it unset.|
|» forwarding|body|boolean|false|When `true`, Resend provisions a receiving address so you can receive mail without adding an MX record. The address is returned in `receiving_address`.|

> Example responses

> 201 Response

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
}
```

<h3 id="create-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateInboxResponseSuccess](#schemacreateinboxresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single inbox by ID or email address

<a id="opIdinboxes/get"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}`

<h3 id="retrieve-a-single-inbox-by-id-or-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|

> Example responses

> 200 Response

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "name": "Customer Support",
  "email_address": "support@acme.com",
  "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "receiving_address": null,
  "from_name": "Ada from Support",
  "unread": 3,
  "drafts": 2,
  "last_received": "2026-08-05T14:03:11.229Z",
  "created_at": "2026-08-01T09:12:44.512Z",
  "updated_at": "2026-08-03T10:20:05.118Z"
}
```

<h3 id="retrieve-a-single-inbox-by-id-or-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Inbox](#schemainbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing inbox by ID or email address

<a id="opIdinboxes/remove"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /inboxes/{inbox_id}`

Removes the inbox. An inbox that does not exist or was already removed returns a 404 not_found.

<h3 id="remove-an-existing-inbox-by-id-or-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|

> Example responses

> 200 Response

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "deleted": true
}
```

<h3 id="remove-an-existing-inbox-by-id-or-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveInboxResponseSuccess](#schemaremoveinboxresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing inbox by ID or email address

<a id="opIdinboxes/update"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Customer Support",
    "from_name": "Ada from Support"
  }'
```

`PATCH /inboxes/{inbox_id}`

Updates the internal name of the inbox or the name recipients see when mail is sent from it. At least one of `name` or `from_name` is required.

> Body parameter

```json
{
  "name": "Customer Support",
  "from_name": "Ada from Support"
}
```

<h3 id="update-an-existing-inbox-by-id-or-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|body|body|[UpdateInboxOptions](#schemaupdateinboxoptions)|true|none|
|» name|body|string|false|New internal name for the inbox. Recipients do not see it. Between 1 and 64 characters after trimming.|
|» from_name|body|string|false|The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string removes it.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
}
```

<h3 id="update-an-existing-inbox-by-id-or-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateInboxResponseSuccess](#schemaupdateinboxresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve the agent settings for an inbox

<a id="opIdinboxes/get-agent"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/agent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/agent`

Returns the agent settings of the inbox. An inbox without a configured agent returns empty settings: `instructions` and `tone` are null and `actions` is an empty array.

<h3 id="retrieve-the-agent-settings-for-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_agent",
  "instructions": "Answer refund questions yourself. Escalate legal threats.",
  "tone": "concise_professional",
  "actions": [
    "draft_reply",
    "add_labels"
  ]
}
```

<h3 id="retrieve-the-agent-settings-for-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxAgent](#schemainboxagent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update the agent settings for an inbox

<a id="opIdinboxes/update-agent"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/agent \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instructions": "Answer refund questions yourself. Escalate legal threats.",
    "tone": "concise_professional",
    "actions": [
      "draft_reply",
      "add_labels"
    ]
  }'
```

`PATCH /inboxes/{inbox_id}/agent`

Updates the agent settings of the inbox. The agent is created when the inbox has none. Omitted fields keep their current value.

> Body parameter

```json
{
  "instructions": "Answer refund questions yourself. Escalate legal threats.",
  "tone": "concise_professional",
  "actions": [
    "draft_reply",
    "add_labels"
  ]
}
```

<h3 id="update-the-agent-settings-for-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|body|body|[UpdateInboxAgentOptions](#schemaupdateinboxagentoptions)|true|none|
|» instructions|body|string \| null|false|Instructions the agent follows when it handles the threads of the inbox. Max 4000 characters. Leading and trailing whitespace is trimmed, and the trimmed value must not be empty. Send null to clear the instructions.|
|» tone|body|string \| null|false|The tone the agent writes in. Send null to clear the tone.|
|» actions|body|[string]|false|The actions the agent can take. Replaces the whole set. Duplicates are removed. Send an empty array to disable all actions. The old names `archive_thread` and `delete_thread` return a 422. Use `archive` and `move_to_trash`.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tone|concise_professional|
|» tone|concise_casual|
|» tone|expanded_professional|
|» tone|expanded_casual|
|» tone|null|
|» actions|draft_reply|
|» actions|forward_thread|
|» actions|add_labels|
|» actions|assign_thread|
|» actions|mark_as_spam|
|» actions|archive|
|» actions|move_to_trash|

> Example responses

> 200 Response

```json
{
  "object": "inbox_agent",
  "id": "a1f84a4e-6f2b-4f0a-9c1d-8a2e5b3c7d90"
}
```

<h3 id="update-the-agent-settings-for-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateInboxAgentResponseSuccess](#schemaupdateinboxagentresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of inbox labels

<a id="opIdinboxes/list-labels"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/labels`

Returns every label on the inbox, oldest first. The list is not paginated.

<h3 id="retrieve-a-list-of-inbox-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82",
      "created_at": "2026-08-05T14:07:42.881Z"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-inbox-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListInboxLabelsResponseSuccess](#schemalistinboxlabelsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a label on an inbox

<a id="opIdinboxes/create-label"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Urgent",
    "color": "#E93D82"
  }'
```

`POST /inboxes/{inbox_id}/labels`

A label is a named, colored tag that belongs to one inbox. An inbox can have at most 100 labels. Label names are unique per inbox, compared without case. A duplicate name or a full inbox returns a 422 validation_error.

> Body parameter

```json
{
  "name": "Urgent",
  "color": "#E93D82"
}
```

<h3 id="create-a-label-on-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|body|body|[CreateInboxLabelOptions](#schemacreateinboxlabeloptions)|true|none|
|» name|body|string|true|The name of the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.|
|» color|body|string|false|The color of the label, as a `#RRGGBB` hex color. It is stored in uppercase. When omitted, a random color from the dashboard palette is used.|

> Example responses

> 201 Response

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
}
```

<h3 id="create-a-label-on-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreateInboxLabelResponseSuccess](#schemacreateinboxlabelresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing inbox label

<a id="opIdinboxes/remove-label"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/labels/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /inboxes/{inbox_id}/labels/{label_id}`

Deletes the label and removes it from every thread that carries it.

<h3 id="remove-an-existing-inbox-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|label_id|path|string(uuid)|true|The Label ID.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
  "deleted": true
}
```

<h3 id="remove-an-existing-inbox-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveInboxLabelResponseSuccess](#schemaremoveinboxlabelresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing inbox label

<a id="opIdinboxes/update-label"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/labels/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Billing",
    "color": "#F76B15"
  }'
```

`PATCH /inboxes/{inbox_id}/labels/{label_id}`

Renames or recolors a label. Omitted fields keep their current value. A new name must not match another label on the inbox, compared without case, or the request returns a 422 validation_error.

> Body parameter

```json
{
  "name": "Billing",
  "color": "#F76B15"
}
```

<h3 id="update-an-existing-inbox-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|label_id|path|string(uuid)|true|The Label ID.|
|body|body|[UpdateInboxLabelOptions](#schemaupdateinboxlabeloptions)|false|none|
|» name|body|string|false|A new name for the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.|
|» color|body|string|false|A new color for the label, as a `#RRGGBB` hex color. It is stored in uppercase.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
}
```

<h3 id="update-an-existing-inbox-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateInboxLabelResponseSuccess](#schemaupdateinboxlabelresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of inbox threads

<a id="opIdinboxes/list-threads"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/threads`

Returns the threads in an inbox, most recently active first. A thread is a conversation made up of one or more emails. The `after` and `before` cursors take a thread ID, and only one of them can be passed. A cursor that is not a UUID, such as a date, returns a 422 validation_error. A cursor thread that is not in the selected folders returns a 404. To find threads by text, sender, recipient, attachment, or date, use the search threads endpoint.

<h3 id="retrieve-a-list-of-inbox-threads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|folders|query|[string]|false|Comma-separated folders to list, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders, so a thread in `inbox` with an email you sent matches both `inbox` and `sent`. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.|
|labels|query|[string(uuid)]|false|Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.|
|read|query|boolean|false|`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|folders|inbox|
|folders|archive|
|folders|spam|
|folders|sent|
|folders|trash|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "from": "ada@example.org",
      "to": [
        "support@example.com"
      ],
      "cc": [],
      "bcc": [],
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "email_count": 2,
      "has_attachment": true,
      "has_draft": false,
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z",
      "folder": "inbox"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-inbox-threads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListInboxThreadsResponseSuccess](#schemalistinboxthreadsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search the threads of an inbox

<a id="opIdinboxes/search-threads"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/threads/search`

Finds threads by the text of their emails, who sent or received them, whether they have attachments, and their dates. Results are ordered by latest activity, newest first, and paginate like the list threads endpoint, so a cursor that is not a thread ID returns a 422. Search can be up to about a minute behind new emails. Different parameters combine, so a thread must match all of them. `folders`, `labels`, and `read` apply to the thread. `query`, `from`, `to`, `cc`, `bcc`, `has_attachment`, `start_date`, and `end_date` must all match the same email in the thread. When any of these email filters is set, the matching email must itself be in one of `folders`. For `sent`, that means an email the inbox sent. When more than 10,000 threads match, search covers the 10,000 with the newest matching email.

<h3 id="search-the-threads-of-an-inbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|query|query|string|false|Free text to search for in the subject, body, sender, recipients, and attachment names. Every word must match. Wrap words in double quotes to match an exact phrase. Start a word or quoted phrase with `-` to exclude it. Max 256 characters and 32 words.|
|from|query|[string]|false|Comma-separated senders. Each value matches part of the sender's address or name, without case. Returns threads that match any of them. Up to 20 values. Repeating the parameter returns a 422 validation_error.|
|to|query|[string]|false|Comma-separated recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.|
|cc|query|[string]|false|Comma-separated CC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.|
|bcc|query|[string]|false|Comma-separated BCC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.|
|has_attachment|query|boolean|false|`true` matches emails with an attachment. `false` matches emails without one. Only the literal values `true` and `false` are accepted.|
|start_date|query|string|false|Matches emails sent on or after this date. Accepts a date like `2026-09-01` or an ISO 8601 timestamp, in UTC unless the timestamp has an offset. An empty value returns a 422.|
|end_date|query|string|false|Matches emails sent on or before this date. Same formats as `start_date`. A date covers that whole day, so `start_date=2026-09-01&end_date=2026-09-30` covers all of September. A timestamp is used as given. An `end_date` before `start_date` returns a 422 validation_error. An empty value returns a 422.|
|folders|query|[string]|false|Comma-separated folders to search, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.|
|labels|query|[string(uuid)]|false|Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.|
|read|query|boolean|false|`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|folders|inbox|
|folders|archive|
|folders|spam|
|folders|sent|
|folders|trash|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "from": "ada@example.org",
      "to": [
        "support@example.com"
      ],
      "cc": [],
      "bcc": [],
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "email_count": 2,
      "has_attachment": true,
      "has_draft": false,
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z",
      "folder": "inbox",
      "matched_email_id": "e8a3f1c6-2b9d-4e5a-a7c4-9d1b6f3e2a80"
    }
  ]
}
```

<h3 id="search-the-threads-of-an-inbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchInboxThreadsResponseSuccess](#schemasearchinboxthreadsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single inbox thread

<a id="opIdinboxes/get-thread"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/threads/{thread_id}`

Returns the thread summary. The emails in the thread are listed with the list thread emails endpoint.

<h3 id="retrieve-a-single-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "folder": "inbox",
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "read": false
}
```

<h3 id="retrieve-a-single-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadSummary](#schemainboxthreadsummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing inbox thread

<a id="opIdinboxes/remove-thread"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /inboxes/{inbox_id}/threads/{thread_id}`

Moves the thread to `trash` and schedules it for deletion in 30 days. This is reversible. To restore the thread, update its `folder` to `inbox`, `archive`, or `spam`, which also clears the deletion deadline.

<h3 id="remove-an-existing-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "deleted": true
}
```

<h3 id="remove-an-existing-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveInboxThreadResponseSuccess](#schemaremoveinboxthreadresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing inbox thread

<a id="opIdinboxes/update-thread"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "read": true,
    "folder": "archive"
  }'
```

`PATCH /inboxes/{inbox_id}/threads/{thread_id}`

Marks a thread read or unread, or moves it to a folder. At least one of `read` or `folder` is required. To change the labels of a thread, use the add, set, and remove thread labels endpoints. This endpoint ignores the removed `add_label_ids` and `remove_label_ids` fields, so a body with only those fields returns a 422 validation_error. Moving a thread out of `trash` restores it and clears its deletion deadline. The changes apply in this order: `read`, then `folder`. They are not atomic.

> Body parameter

```json
{
  "read": true,
  "folder": "archive"
}
```

<h3 id="update-an-existing-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|body|body|[UpdateInboxThreadOptions](#schemaupdateinboxthreadoptions)|true|none|
|» read|body|boolean|false|Marks every email in the thread read or unread.|
|» folder|body|string|false|Moves the thread to this folder. `sent` is assigned automatically and cannot be set.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» folder|inbox|
|» folder|archive|
|» folder|spam|
|» folder|trash|

> Example responses

> 200 Response

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "folder": "inbox",
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "read": false
}
```

<h3 id="update-an-existing-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadSummary](#schemainboxthreadsummary)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set the labels of an inbox thread

<a id="opIdinboxes/set-thread-labels"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": [
      "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
    ]
  }'
```

`PUT /inboxes/{inbox_id}/threads/{thread_id}/labels`

Replaces every label on the thread with the given labels, in one atomic change. Labels on the thread that are not in the list are taken off it. The labels themselves are kept. An empty array takes every label off the thread. The response lists every label on the thread after the change. A label ID that is not a label of the inbox returns a 404 `Label not found.`, and nothing changes. A thread that does not exist in the inbox returns a 404 `Thread not found.`.

> Body parameter

```json
{
  "labels": [
    "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
  ]
}
```

<h3 id="set-the-labels-of-an-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|body|body|[SetInboxThreadLabelsOptions](#schemasetinboxthreadlabelsoptions)|true|none|
|» labels|body|[string(uuid)]|true|The IDs of the labels the thread carries after the change. Up to 100 IDs, each a label of the inbox. Pass an empty array to take every label off the thread.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

<h3 id="set-the-labels-of-an-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadLabelList](#schemainboxthreadlabellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add labels to an inbox thread

<a id="opIdinboxes/add-thread-labels"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": [
      "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
    ]
  }'
```

`POST /inboxes/{inbox_id}/threads/{thread_id}/labels`

Applies one or more labels to the thread. Labels already on the thread stay on it. The response lists every label on the thread after the change. A label ID that is not a label of the inbox returns a 404 `Label not found.`, and nothing changes. A thread that does not exist in the inbox returns a 404 `Thread not found.`. To replace the labels of the thread, use the set thread labels endpoint.

> Body parameter

```json
{
  "labels": [
    "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
  ]
}
```

<h3 id="add-labels-to-an-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|body|body|[AddInboxThreadLabelsOptions](#schemaaddinboxthreadlabelsoptions)|true|none|
|» labels|body|[string(uuid)]|true|The IDs of the labels to apply to the thread. Between 1 and 10 IDs, each a label of the inbox.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

<h3 id="add-labels-to-an-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadLabelList](#schemainboxthreadlabellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a label from an inbox thread

<a id="opIdinboxes/remove-thread-label"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/labels/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /inboxes/{inbox_id}/threads/{thread_id}/labels/{label_id}`

Takes one label off the thread. The label itself is kept, and stays on every other thread that carries it. To delete the label, use the remove inbox label endpoint. The response lists every label on the thread after the change. A label that is not on the thread returns a 200 with the current labels. A label ID that is not a label of the inbox returns a 404 `Label not found.`. A thread that does not exist in the inbox returns a 404 `Thread not found.`.

<h3 id="remove-a-label-from-an-inbox-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|label_id|path|string(uuid)|true|The Label ID.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

<h3 id="remove-a-label-from-an-inbox-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadLabelList](#schemainboxthreadlabellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of thread emails

<a id="opIdinboxes/list-thread-emails"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/emails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/threads/{thread_id}/emails`

Returns the messages of a thread, oldest first. Pass the `id` of the last message as `after` to get the next, newer page. Pass the `id` of the first message as `before` to get the previous, older page. Passing both `after` and `before`, or a cursor that is not a UUID, returns a 422. A cursor that is not a message of the thread returns a 404.

<h3 id="retrieve-a-list-of-thread-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60",
      "direction": "inbound",
      "from": "Ada Lovelace <ada@example.org>",
      "to": [
        "support@acme.com"
      ],
      "cc": [],
      "bcc": [],
      "reply_to": [
        "replies@example.org"
      ],
      "subject": "Refund for order 1041",
      "message_id": "<1041@example.org>",
      "html": "<p>Could I get a refund for order 1041?</p>",
      "text": "Could I get a refund for order 1041?",
      "attachments": [
        {
          "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
          "filename": "receipt.pdf",
          "size": 20841
        }
      ],
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z"
    }
  ]
}
```

<h3 id="retrieve-a-list-of-thread-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListInboxThreadEmailsResponseSuccess](#schemalistinboxthreademailsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single thread email

<a id="opIdinboxes/get-thread-email"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/emails/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}`

<h3 id="retrieve-a-single-thread-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|email_id|path|string(uuid)|true|The Email ID, as returned in `data[].id` by the list thread emails endpoint.|

> Example responses

> 200 Response

```json
{
  "id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60",
  "direction": "inbound",
  "from": "Ada Lovelace <ada@example.org>",
  "to": [
    "support@acme.com"
  ],
  "cc": [],
  "bcc": [],
  "reply_to": [
    "replies@example.org"
  ],
  "subject": "Refund for order 1041",
  "message_id": "<1041@example.org>",
  "html": "<p>Could I get a refund for order 1041?</p>",
  "text": "Could I get a refund for order 1041?",
  "attachments": [
    {
      "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
      "filename": "receipt.pdf",
      "size": 20841
    }
  ],
  "read": false,
  "received_at": "2026-08-05T14:03:11.229Z"
}
```

<h3 id="retrieve-a-single-thread-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxThreadEmail](#schemainboxthreademail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reply to a thread email

<a id="opIdinboxes/reply-thread-email"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/emails/497f6eca-6276-4993-bfeb-53cbbbba6f08/reply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cc": [
      "billing@acme.com"
    ],
    "bcc": [
      "records@acme.com"
    ],
    "html": "<p>Refund issued for order 1041.</p>",
    "text": "Refund issued for order 1041.",
    "subject": "Re: Refund for order 1041",
    "reply_all": false,
    "attachments": [
      {
        "content": "string",
        "filename": "string",
        "path": "string",
        "content_type": "string",
        "content_id": "string"
      }
    ],
    "headers": {
      "X-Ticket-Id": "4821"
    }
  }'
```

`POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply`

Sends a reply from the inbox address right away, with no stored draft. The `to` recipients come from the message you reply to. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has no `Reply-To`. For a message the inbox sent, the reply goes to that message's `to` recipients. Set `reply_all` to also copy the other recipients of the message. The reply threads under the message through the `In-Reply-To` and `References` headers. When no recipient can be found for the reply, the request returns a 422. The whole email, encoded, can be at most 40 MB, or the request returns a 422.

> Body parameter

```json
{
  "cc": [
    "billing@acme.com"
  ],
  "bcc": [
    "records@acme.com"
  ],
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "subject": "Re: Refund for order 1041",
  "reply_all": false,
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

<h3 id="reply-to-a-thread-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique key for the request, so the reply is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|email_id|path|string(uuid)|true|The Email ID of the message to reply to, as returned in `data[].id` by the list thread emails endpoint.|
|body|body|[ReplyInboxThreadEmailOptions](#schemareplyinboxthreademailoptions)|true|none|
|» cc|body|string \| [string] \| null|false|CC recipient email address. For multiple addresses, send as an array of strings. Without `reply_all`, the reply copies only these addresses. With `reply_all`, these addresses are merged with the copied recipients, without duplicates. `cc` and `bcc` combined must be fewer than 50 addresses. After the `to` recipients are added, the reply cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» bcc|body|string \| [string] \| null|false|BCC recipient email address. For multiple addresses, send as an array of strings. BCC recipients of the original message are never copied. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» html|body|string|false|The HTML body of the reply.|
|» text|body|string|false|The plain-text body of the reply.|
|» subject|body|string|false|The subject of the reply. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Re:` if it does not already start with it.|
|» reply_all|body|boolean|false|Reply to everyone on the original message. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has none, and copies the other addresses of its `To` header and its `cc` recipients in `cc`. For a message the inbox sent, the reply goes to that message's `Reply-To` addresses when they are not the inbox address, otherwise to its `to` recipients, and copies its `cc` recipients. The inbox address is always excluded, and duplicates are removed.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Files to attach, as on `POST /emails`. Each one needs `content` or `path`. The `content` of all files can total at most 25 MB. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.|
|» headers|body|object \| null|false|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|
|» » **additionalProperties**|body|string|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

<h3 id="reply-to-a-thread-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReplyInboxThreadEmailResponseSuccess](#schemareplyinboxthreademailresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Forward a thread email

<a id="opIdinboxes/forward-thread-email"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/threads/497f6eca-6276-4993-bfeb-53cbbbba6f08/emails/497f6eca-6276-4993-bfeb-53cbbbba6f08/forward \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": [
      "colleague@example.org"
    ],
    "cc": [
      "billing@acme.com"
    ],
    "bcc": [
      "records@acme.com"
    ],
    "html": "<p>Flagging this refund request for you.</p>",
    "text": "Flagging this refund request for you.",
    "subject": "Fwd: Refund for order 1041",
    "attachments": [
      {
        "content": "string",
        "filename": "string",
        "path": "string",
        "content_type": "string",
        "content_id": "string"
      }
    ],
    "headers": {
      "X-Ticket-Id": "4821"
    }
  }'
```

`POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward`

Forwards a message from the inbox address right away, with no stored draft. The original message is quoted under a forwarded-message banner, below the optional `html` or `text` note. The attachments of the original message are sent with the forward, together with any `attachments` you add. The request returns a 422 when they exceed 25 MB of `content` in total. An original attachment that was sent from a URL (`path`) cannot be forwarded, and the request returns a 422. The whole email, encoded, can be at most 40 MB, or the request returns a 422.

> Body parameter

```json
{
  "to": [
    "colleague@example.org"
  ],
  "cc": [
    "billing@acme.com"
  ],
  "bcc": [
    "records@acme.com"
  ],
  "html": "<p>Flagging this refund request for you.</p>",
  "text": "Flagging this refund request for you.",
  "subject": "Fwd: Refund for order 1041",
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

<h3 id="forward-a-thread-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique key for the request, so the forward is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|thread_id|path|string(uuid)|true|The Thread ID.|
|email_id|path|string(uuid)|true|The Email ID of the message to forward, as returned in `data[].id` by the list thread emails endpoint.|
|body|body|[ForwardInboxThreadEmailOptions](#schemaforwardinboxthreademailoptions)|true|none|
|» to|body|string \| [string]|true|Recipient email address. For multiple addresses, send as an array of strings. Must name at least one address. `to`, `cc` and `bcc` combined cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» cc|body|string \| [string] \| null|false|CC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» bcc|body|string \| [string] \| null|false|BCC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» html|body|string|false|An HTML note sent above the quoted original.|
|» text|body|string|false|A plain-text note sent above the quoted original.|
|» subject|body|string|false|The subject of the forward. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Fwd:` if it does not already start with it.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Files to attach, as on `POST /emails`. Each one needs `content` or `path`. They share one limit with the attachments of the original message, which the forward also sends. Together they can have at most 25 MB of `content`. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.|
|» headers|body|object \| null|false|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

<h3 id="forward-a-thread-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ForwardInboxThreadEmailResponseSuccess](#schemaforwardinboxthreademailresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a list of drafts

<a id="opIdinboxes/list-drafts"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/drafts`

Returns the unsent drafts on the inbox, most recently updated first. The `after` and `before` cursors take a Draft ID from the current page, and only one of them can be passed. A cursor that is not a UUID, or both cursors together, return a 422. A cursor that is not an unsent draft on this inbox returns a 404.

<h3 id="retrieve-a-list-of-drafts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|limit|query|integer|false|Number of items to return.|
|after|query|string|false|Return items after this cursor.|
|before|query|string|false|Return items before this cursor.|

> Example responses

> 200 Response

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
      "type": "standalone",
      "to": [
        "ada@example.org"
      ],
      "cc": [],
      "bcc": [],
      "subject": "Refund for order 1041",
      "snippet": "Refund issued for order 1041.",
      "thread_id": null,
      "reply_to_email_id": null,
      "updated_at": "2026-08-05T14:12:04.110Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  ]
}
```

<h3 id="retrieve-a-list-of-drafts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListInboxDraftsResponseSuccess](#schemalistinboxdraftsresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a draft

<a id="opIdinboxes/create-draft"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": [
      "ada@example.org"
    ],
    "cc": "string",
    "bcc": "string",
    "subject": "Refund for order 1041",
    "html": "<p>Refund issued for order 1041.</p>",
    "text": "Refund issued for order 1041.",
    "attachments": [
      {
        "content": "aGVsbG8gZTJl",
        "filename": "receipt.pdf",
        "content_type": "application/pdf"
      }
    ],
    "thread_id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "reply_to_email_id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60"
  }'
```

`POST /inboxes/{inbox_id}/drafts`

Creates an unsent draft on the inbox. Omit `thread_id` and `reply_to_email_id` for a draft that starts a new thread. Pass both together for a reply draft in an existing thread. A reply draft without `to` is addressed to the sender of the email it replies to, or to its Reply-To when set. For an email the inbox sent, it defaults to that email's `to` recipients. Send `to: []` to leave it empty. At least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments` must be non-empty. The combined recipients of `to`, `cc` and `bcc` cannot exceed 50. Attachments are stored on the draft, so each one needs `content`, `filename` and `content_type`. Returns 201 for a new draft. Only one unsent reply draft can target an email, so a reply draft request for an email that already has one returns 200 with the ID of the existing draft. An unknown `thread_id`, or a `reply_to_email_id` that is not in that thread, returns a 404. That request ignores every other field, except `attachments`, which replaces the attachments of the existing draft when sent. A reply draft created without `subject` stores an empty subject. When it is sent, it takes the thread subject, prefixed with `Re:` when it does not already start with it.

> Body parameter

```json
{
  "to": [
    "ada@example.org"
  ],
  "cc": "string",
  "bcc": "string",
  "subject": "Refund for order 1041",
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "attachments": [
    {
      "content": "aGVsbG8gZTJl",
      "filename": "receipt.pdf",
      "content_type": "application/pdf"
    }
  ],
  "thread_id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "reply_to_email_id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60"
}
```

<h3 id="create-a-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique key for the request, so the draft is created only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|body|body|[CreateInboxDraftOptions](#schemacreateinboxdraftoptions)|true|none|
|» to|body|string \| [string] \| null|false|The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name, for example `Ada Lovelace <ada@example.org>`. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» cc|body|string \| [string] \| null|false|The CC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» bcc|body|string \| [string] \| null|false|The BCC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» subject|body|string \| null|false|The subject. Max 2000 characters. A string that is only whitespace, or that contains a line break, is rejected.|
|» html|body|string \| null|false|The HTML body.|
|» text|body|string \| null|false|The plain text body.|
|» attachments|body|[[InboxDraftAttachmentInput](#schemainboxdraftattachmentinput)]|false|Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422.|
|» thread_id|body|string(uuid)|false|The Thread ID to reply in. Must be sent with `reply_to_email_id`.|
|» reply_to_email_id|body|string(uuid)|false|The Email ID to reply to, as returned in `data[].id` by the list thread emails endpoint. Must be sent with `thread_id`.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32"
}
```

> 201 Response

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32"
}
```

<h3 id="create-a-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The reply draft for this email already exists. The response holds the ID of the existing draft, and the request fields other than `attachments` are not applied.|[CreateInboxDraftResponseSuccess](#schemacreateinboxdraftresponsesuccess)|
|201|Created|OK|[CreateInboxDraftResponseSuccess](#schemacreateinboxdraftresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a single draft

<a id="opIdinboxes/get-draft"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inboxes/{inbox_id}/drafts/{draft_id}`

<h3 id="retrieve-a-single-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|draft_id|path|string(uuid)|true|The Draft ID.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "type": "standalone",
  "to": [
    "ada@example.org"
  ],
  "cc": [],
  "bcc": [],
  "subject": "Refund for order 1041",
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "thread_id": null,
  "reply_to_email_id": null,
  "email_id": null,
  "created_at": "2026-08-05T14:12:04.110Z",
  "updated_at": "2026-08-05T14:12:04.110Z",
  "attachments": [
    {
      "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
      "filename": "receipt.pdf",
      "content_type": "application/pdf",
      "size": 20841
    }
  ]
}
```

<h3 id="retrieve-a-single-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InboxDraft](#schemainboxdraft)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove an existing draft

<a id="opIdinboxes/remove-draft"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /inboxes/{inbox_id}/drafts/{draft_id}`

Discards an unsent draft. A draft that was already sent, or that changed during the request, returns a 409.

<h3 id="remove-an-existing-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|draft_id|path|string(uuid)|true|The Draft ID.|

> Example responses

> 200 Response

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "deleted": true
}
```

<h3 id="remove-an-existing-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RemoveInboxDraftResponseSuccess](#schemaremoveinboxdraftresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing draft

<a id="opIdinboxes/update-draft"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to": [
      "ada@example.org"
    ],
    "cc": "string",
    "bcc": "string",
    "subject": "Refund issued for order 1041",
    "html": "string",
    "text": "string",
    "attachments": [
      {
        "content": "aGVsbG8gZTJl",
        "filename": "receipt.pdf",
        "content_type": "application/pdf"
      }
    ]
  }'
```

`PATCH /inboxes/{inbox_id}/drafts/{draft_id}`

Updates the content of an unsent draft. Omitted fields are left unchanged. Send at least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments`. Sending `attachments` replaces every attachment on the draft. A request that sets `text` or `html` replaces the whole body. The body part you omit from that request becomes `null`. The merged draft must still contain at least one non-empty field, and its combined recipients cannot exceed 50. A draft that was already sent, or that changed during the request, returns a 409. The response holds only the Draft ID. Retrieve the draft to read its content.

> Body parameter

```json
{
  "to": [
    "ada@example.org"
  ],
  "cc": "string",
  "bcc": "string",
  "subject": "Refund issued for order 1041",
  "html": "string",
  "text": "string",
  "attachments": [
    {
      "content": "aGVsbG8gZTJl",
      "filename": "receipt.pdf",
      "content_type": "application/pdf"
    }
  ]
}
```

<h3 id="update-an-existing-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|draft_id|path|string(uuid)|true|The Draft ID.|
|body|body|[UpdateInboxDraftOptions](#schemaupdateinboxdraftoptions)|true|none|
|» to|body|string \| [string] \| null|false|The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name. Pass `null` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» cc|body|string \| [string] \| null|false|The CC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» bcc|body|string \| [string] \| null|false|The BCC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» subject|body|string \| null|false|The subject. Max 2000 characters. Cannot be only whitespace or contain a line break. Pass `null` to clear.|
|» html|body|string \| null|false|The HTML body. Pass `null` to clear.|
|» text|body|string \| null|false|The plain text body. Pass `null` to clear.|
|» attachments|body|[[InboxDraftAttachmentInput](#schemainboxdraftattachmentinput)]|false|Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422. Sending the field replaces every attachment on the draft. Send `[]` to remove them all. `null` also removes them all.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32"
}
```

<h3 id="update-an-existing-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateInboxDraftResponseSuccess](#schemaupdateinboxdraftresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Send a draft

<a id="opIdinboxes/send-draft"></a>

> Code samples

```bash
curl https://api.resend.com/inboxes/b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1/drafts/497f6eca-6276-4993-bfeb-53cbbbba6f08/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "headers": {
      "X-Ticket-Id": "4821"
    }
  }'
```

`POST /inboxes/{inbox_id}/drafts/{draft_id}/send`

Sends the draft from the inbox address. A reply draft is sent in its thread. A draft without a thread starts a new thread. The draft must have at least one `to` recipient and `html` or `text`, or the request returns a 422. A standalone draft also needs a non-empty `subject`. A reply draft with an empty `subject` is sent with the thread subject, prefixed with `Re:` when it does not already start with it. A draft that was already sent returns a 409. The request body is optional and takes only `headers`. The whole email, encoded, can be at most 40 MB, or the request returns a 422.

> Body parameter

```json
{
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

<h3 id="send-a-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique key for the request, so the draft is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)|
|inbox_id|path|string|true|The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.|
|draft_id|path|string(uuid)|true|The Draft ID.|
|body|body|[SendInboxDraftOptions](#schemasendinboxdraftoptions)|false|none|
|» headers|body|object \| null|false|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

<h3 id="send-a-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SendInboxDraftResponseSuccess](#schemasendinboxdraftresponsesuccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="resend-webhooks-1">Webhooks</h1>

## Email sent

`POST email.sent`

Occurs whenever the API request was successful. Resend will attempt to deliver the message to the recipient's mail server.

> Body parameter

```json
{
  "type": "email.sent",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-sent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailSentEvent](#schemaemailsentevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-sent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email delivered

`POST email.delivered`

Occurs whenever Resend successfully delivered the email to the recipient's mail server.

> Body parameter

```json
{
  "type": "email.delivered",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-delivered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailDeliveredEvent](#schemaemaildeliveredevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-delivered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email delivery delayed

`POST email.delivery_delayed`

Occurs whenever the email couldn't be delivered due to a temporary issue, such as the recipient's inbox being full or the receiving server experiencing a transient issue.

> Body parameter

```json
{
  "type": "email.delivery_delayed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-delivery-delayed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailDeliveryDelayedEvent](#schemaemaildeliverydelayedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-delivery-delayed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email bounced

`POST email.bounced`

Occurs whenever the recipient's mail server permanently rejected the email.

> Body parameter

```json
{
  "type": "email.bounced",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "bounce": {
      "diagnosticCode": [
        "string"
      ],
      "message": "string",
      "subType": "Undetermined",
      "type": "Undetermined"
    }
  }
}
```

<h3 id="email-bounced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailBouncedEvent](#schemaemailbouncedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[EmailBouncedEventData](#schemaemailbouncedeventdata)|true|none|

<h3 id="email-bounced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email complained

`POST email.complained`

Occurs whenever the email was successfully delivered, but the recipient marked it as spam.

> Body parameter

```json
{
  "type": "email.complained",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-complained-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailComplainedEvent](#schemaemailcomplainedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-complained-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email opened

`POST email.opened`

Occurs whenever the recipient opened the email. Requires open tracking to be enabled.

> Body parameter

```json
{
  "type": "email.opened",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-opened-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailOpenedEvent](#schemaemailopenedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-opened-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email clicked

`POST email.clicked`

Occurs whenever the recipient clicks on an email link. Requires click tracking to be enabled.

> Body parameter

```json
{
  "type": "email.clicked",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "click": {
      "ipAddress": "string",
      "link": "string",
      "timestamp": "2023-10-06T23:47:56.678Z",
      "userAgent": "string"
    }
  }
}
```

<h3 id="email-clicked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailClickedEvent](#schemaemailclickedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[EmailClickedEventData](#schemaemailclickedeventdata)|true|none|

<h3 id="email-clicked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email failed

`POST email.failed`

Occurs whenever the email failed to send due to an error such as invalid recipients, API key problems, domain verification issues, email quota limits, or other sending failures.

> Body parameter

```json
{
  "type": "email.failed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "failed": {
      "reason": "string"
    }
  }
}
```

<h3 id="email-failed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailFailedEvent](#schemaemailfailedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[EmailFailedEventData](#schemaemailfailedeventdata)|true|none|

<h3 id="email-failed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email scheduled

`POST email.scheduled`

Occurs whenever the email is scheduled to be sent.

> Body parameter

```json
{
  "type": "email.scheduled",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="email-scheduled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailScheduledEvent](#schemaemailscheduledevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|

<h3 id="email-scheduled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email suppressed

`POST email.suppressed`

Occurs whenever the email is suppressed by Resend, such as when the recipient's address is on the account-level suppression list.

> Body parameter

```json
{
  "type": "email.suppressed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "suppressed": {
      "diagnosticCode": [
        "string"
      ],
      "message": "string",
      "reason": "previous_bounce",
      "type": "Suppressed"
    }
  }
}
```

<h3 id="email-suppressed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailSuppressedEvent](#schemaemailsuppressedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[EmailSuppressedEventData](#schemaemailsuppressedeventdata)|true|none|

<h3 id="email-suppressed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Email received

`POST email.received`

Occurs whenever Resend successfully receives an inbound email on a receiving domain.

> Body parameter

```json
{
  "type": "email.received",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "message_id": "string",
    "bcc": [
      "string"
    ],
    "cc": [
      "string"
    ],
    "received_for": [
      "forwarded@example.com"
    ],
    "attachments": [
      {
        "id": "string",
        "filename": "string",
        "content_type": "string",
        "content_disposition": "string",
        "content_id": "string"
      }
    ]
  }
}
```

<h3 id="email-received-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailReceivedEvent](#schemaemailreceivedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[EmailReceivedEventData](#schemaemailreceivedeventdata)|true|none|

<h3 id="email-received-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Contact created

`POST contact.created`

Occurs whenever a contact was successfully created. Note: when importing multiple contacts via CSV, this event is not triggered.

> Body parameter

```json
{
  "type": "contact.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

<h3 id="contact-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContactCreatedEvent](#schemacontactcreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[ContactEventData](#schemacontacteventdata)|true|none|

<h3 id="contact-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Contact updated

`POST contact.updated`

Occurs whenever a contact was successfully updated.

> Body parameter

```json
{
  "type": "contact.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

<h3 id="contact-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContactUpdatedEvent](#schemacontactupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[ContactEventData](#schemacontacteventdata)|true|none|

<h3 id="contact-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Contact deleted

`POST contact.deleted`

Occurs whenever a contact was successfully deleted.

> Body parameter

```json
{
  "type": "contact.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

<h3 id="contact-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContactDeletedEvent](#schemacontactdeletedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[ContactEventData](#schemacontacteventdata)|true|none|

<h3 id="contact-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Contact topics updated

`POST contact.topics.updated`

Occurs whenever a contact's topic subscriptions were updated.

> Body parameter

```json
{
  "type": "contact.topics.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email": "string",
    "topics": [
      {
        "id": "string",
        "subscription": "opt_in"
      }
    ]
  }
}
```

<h3 id="contact-topics-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContactTopicsUpdatedEvent](#schemacontacttopicsupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[ContactTopicsEventData](#schemacontacttopicseventdata)|true|none|

<h3 id="contact-topics-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Domain created

`POST domain.created`

Occurs when a domain was successfully created.

> Body parameter

```json
{
  "type": "domain.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

<h3 id="domain-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DomainCreatedEvent](#schemadomaincreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[DomainEventData](#schemadomaineventdata)|true|none|

<h3 id="domain-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Domain updated

`POST domain.updated`

Occurs when a domain was successfully updated.

> Body parameter

```json
{
  "type": "domain.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

<h3 id="domain-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DomainUpdatedEvent](#schemadomainupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[DomainEventData](#schemadomaineventdata)|true|none|

<h3 id="domain-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Domain deleted

`POST domain.deleted`

Occurs when a domain was successfully deleted.

> Body parameter

```json
{
  "type": "domain.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

<h3 id="domain-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DomainDeletedEvent](#schemadomaindeletedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[DomainEventData](#schemadomaineventdata)|true|none|

<h3 id="domain-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Suppression added

`POST suppression.added`

Occurs whenever an email address was added to the suppression list.

> Body parameter

```json
{
  "type": "suppression.added",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "email": "string",
    "origin": "bounce",
    "source_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z"
  }
}
```

<h3 id="suppression-added-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SuppressionAddedEvent](#schemasuppressionaddedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[SuppressionEventData](#schemasuppressioneventdata)|true|none|

<h3 id="suppression-added-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Suppression removed

`POST suppression.removed`

Occurs whenever an email address was removed from the suppression list.

> Body parameter

```json
{
  "type": "suppression.removed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "email": "string",
    "origin": "bounce",
    "source_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z"
  }
}
```

<h3 id="suppression-removed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SuppressionRemovedEvent](#schemasuppressionremovedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[SuppressionEventData](#schemasuppressioneventdata)|true|none|

<h3 id="suppression-removed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Topic created

`POST topic.created`

Occurs whenever a topic was successfully created.

> Body parameter

```json
{
  "type": "topic.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

<h3 id="topic-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopicCreatedEvent](#schematopiccreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[TopicEventData](#schematopiceventdata)|true|none|

<h3 id="topic-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Topic updated

`POST topic.updated`

Occurs whenever a topic was successfully updated.

> Body parameter

```json
{
  "type": "topic.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

<h3 id="topic-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopicUpdatedEvent](#schematopicupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[TopicEventData](#schematopiceventdata)|true|none|

<h3 id="topic-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Topic deleted

`POST topic.deleted`

Occurs whenever a topic was successfully deleted.

> Body parameter

```json
{
  "type": "topic.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

<h3 id="topic-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TopicDeletedEvent](#schematopicdeletedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[TopicEventData](#schematopiceventdata)|true|none|

<h3 id="topic-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox created

`POST inbox.created`

Occurs whenever an inbox was created.

> Body parameter

```json
{
  "type": "inbox.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "inbox": {
      "object": "inbox",
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "receiving_address": null,
      "from_name": "Ada from Support",
      "unread": 3,
      "drafts": 2,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  }
}
```

<h3 id="inbox-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxCreatedEvent](#schemainboxcreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxEventData](#schemainboxeventdata)|true|The data of an `inbox.created` or `inbox.updated` event.|

<h3 id="inbox-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox updated

`POST inbox.updated`

Occurs whenever the settings of an inbox changed.

> Body parameter

```json
{
  "type": "inbox.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "inbox": {
      "object": "inbox",
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "receiving_address": null,
      "from_name": "Ada from Support",
      "unread": 3,
      "drafts": 2,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  }
}
```

<h3 id="inbox-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxUpdatedEvent](#schemainboxupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxEventData](#schemainboxeventdata)|true|The data of an `inbox.created` or `inbox.updated` event.|

<h3 id="inbox-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox deleted

`POST inbox.deleted`

Occurs whenever an inbox was deleted. The payload carries only the inbox ID.

> Body parameter

```json
{
  "type": "inbox.deleted",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
  }
}
```

<h3 id="inbox-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxDeletedEvent](#schemainboxdeletedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxDeletedEventData](#schemainboxdeletedeventdata)|true|The data of an `inbox.deleted` event.|

<h3 id="inbox-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox thread created

`POST inbox.thread.created`

Occurs whenever the first email of a thread landed in an inbox, inbound or outbound. The `source` is always `system`, because the email pipeline sends this event, even when the API or an agent sent the email.

> Body parameter

```json
{
  "type": "inbox.thread.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

<h3 id="inbox-thread-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxThreadCreatedEvent](#schemainboxthreadcreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h3 id="inbox-thread-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox email received

`POST inbox.email.received`

Occurs whenever an inbound email was added to a thread. The `source` is always `system`.

> Body parameter

```json
{
  "type": "inbox.email.received",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

<h3 id="inbox-email-received-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxEmailReceivedEvent](#schemainboxemailreceivedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h3 id="inbox-email-received-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox email sent

`POST inbox.email.sent`

Occurs whenever an outbound email was accepted for delivery and added to a thread. The `source` is always `system`. When the email comes from a draft, `inbox.draft.sent` is also sent, from the send call. The two events come from separate paths, so their delivery order is not fixed.

> Body parameter

```json
{
  "type": "inbox.email.sent",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

<h3 id="inbox-email-sent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxEmailSentEvent](#schemainboxemailsentevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h3 id="inbox-email-sent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox thread folder updated

`POST inbox.thread.folder.updated`

Occurs whenever a thread moved between folders. Moving a thread to a label can send both this event and `inbox.thread.labels.updated` for the same thread.

> Body parameter

```json
{
  "type": "inbox.thread.folder.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "from": "inbox",
    "to": "archive",
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

<h3 id="inbox-thread-folder-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxThreadFolderUpdatedEvent](#schemainboxthreadfolderupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadFolderUpdatedEventData](#schemainboxthreadfolderupdatedeventdata)|true|The data of an `inbox.thread.folder.updated` event.|

<h3 id="inbox-thread-folder-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox thread assigned

`POST inbox.thread.assigned`

Occurs whenever a thread was assigned or reassigned.

> Body parameter

```json
{
  "type": "inbox.thread.assigned",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "assignee_email": "ada@acme.com",
    "assigned_by_email": "grace@acme.com",
    "previous_assignee_email": null,
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

<h3 id="inbox-thread-assigned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxThreadAssignedEvent](#schemainboxthreadassignedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadAssignedEventData](#schemainboxthreadassignedeventdata)|true|The data of an `inbox.thread.assigned` event.|

<h3 id="inbox-thread-assigned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox thread unassigned

`POST inbox.thread.unassigned`

Occurs whenever a thread was unassigned.

> Body parameter

```json
{
  "type": "inbox.thread.unassigned",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "previous_assignee_email": "ada@acme.com",
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

<h3 id="inbox-thread-unassigned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxThreadUnassignedEvent](#schemainboxthreadunassignedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadUnassignedEventData](#schemainboxthreadunassignedeventdata)|true|The data of an `inbox.thread.unassigned` event.|

<h3 id="inbox-thread-unassigned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox thread labels updated

`POST inbox.thread.labels.updated`

Occurs whenever labels were applied to or removed from a thread. One event lists every label that one request added to or removed from the thread. A request that changes no label sends no event. Deleting a label does not send this event for the threads that had it.

> Body parameter

```json
{
  "type": "inbox.thread.labels.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "added": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "removed": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

<h3 id="inbox-thread-labels-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxThreadLabelsUpdatedEvent](#schemainboxthreadlabelsupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxThreadLabelsUpdatedEventData](#schemainboxthreadlabelsupdatedeventdata)|true|The data of an `inbox.thread.labels.updated` event. Adding labels fills only `added`. Removing one label fills only `removed`. Setting the labels of a thread can fill both.|

<h3 id="inbox-thread-labels-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox draft created

`POST inbox.draft.created`

Occurs whenever a draft was created, standalone or reply.

> Body parameter

```json
{
  "type": "inbox.draft.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

<h3 id="inbox-draft-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxDraftCreatedEvent](#schemainboxdraftcreatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxDraftEventData](#schemainboxdrafteventdata)|true|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|

<h3 id="inbox-draft-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox draft updated

`POST inbox.draft.updated`

Occurs whenever a draft was edited.

> Body parameter

```json
{
  "type": "inbox.draft.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

<h3 id="inbox-draft-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxDraftUpdatedEvent](#schemainboxdraftupdatedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxDraftEventData](#schemainboxdrafteventdata)|true|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|

<h3 id="inbox-draft-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox draft sent

`POST inbox.draft.sent`

Occurs whenever a draft was sent. This event fires from the send call. `inbox.email.sent` follows once the email is accepted for delivery.

> Body parameter

```json
{
  "type": "inbox.draft.sent",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

<h3 id="inbox-draft-sent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxDraftSentEvent](#schemainboxdraftsentevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxDraftSentEventData](#schemainboxdraftsenteventdata)|true|The data of an `inbox.draft.sent` event.|

<h3 id="inbox-draft-sent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Inbox draft deleted

`POST inbox.draft.deleted`

Occurs whenever a draft was discarded. The draft is already gone, so the payload has no `draft` object.

> Body parameter

```json
{
  "type": "inbox.draft.deleted",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

<h3 id="inbox-draft-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InboxDraftDeletedEvent](#schemainboxdraftdeletedevent)|true|none|
|» type|body|string|true|The event type.|
|» created_at|body|string(date-time)|true|Timestamp when the event was emitted.|
|» data|body|[InboxDraftEventData](#schemainboxdrafteventdata)|true|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|

<h3 id="inbox-draft-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|2XX|Successful|Return any 2xx status code to acknowledge receipt of the event.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_SendEmailRequest">SendEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendemailrequest"></a>
<a id="schema_SendEmailRequest"></a>
<a id="tocSsendemailrequest"></a>
<a id="tocssendemailrequest"></a>

```json
{
  "from": "string",
  "to": "string",
  "subject": "string",
  "bcc": "string",
  "cc": "string",
  "reply_to": "string",
  "html": "string",
  "text": "string",
  "template": {
    "id": "string",
    "variables": {
      "variableName": "Sign up now",
      "variableName2": 123
    }
  },
  "headers": {},
  "scheduled_at": "string",
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "tags": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "topic_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|to|string \| [string]|true|none|Recipient email address. For multiple addresses, send as an array of strings. Max 50.|
|subject|string|true|none|Email subject.|
|bcc|string \| [string]|false|none|Bcc recipient email address. For multiple addresses, send as an array of strings.|
|cc|string \| [string]|false|none|Cc recipient email address. For multiple addresses, send as an array of strings.|
|reply_to|string \| [string]|false|none|Reply-to email address. For multiple addresses, send as an array of strings.|
|html|string|false|none|The HTML version of the message.|
|text|string|false|none|The plain text version of the message.|
|template|object|false|none|none|
|headers|object|false|none|Custom headers to add to the email.|
|scheduled_at|string|false|none|Schedule email to be sent later. The date should be in ISO 8601 format.|
|attachments|[[Attachment](#schemaattachment)]|false|none|none|
|tags|[[Tag](#schematag)]|false|none|none|
|topic_id|string|false|none|The topic ID to scope the email to. If the recipient is a contact and opted-in to the topic, the email is sent. If opted-out, the email is not sent. If the recipient is not a contact, the email is sent if the topic's default subscription is opt_in.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "content": "string",
  "filename": "string",
  "path": "string",
  "content_type": "string",
  "content_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(binary)|false|none|Content of an attached file.|
|filename|string|false|none|Name of attached file.|
|path|string|false|none|Path where the attachment file is hosted|
|content_type|string|false|none|Optional content type for the attachment, if not set it will be derived from the filename property|
|content_id|string|false|none|Content ID for embedding inline images using cid references (e.g., cid:image001).|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.|
|value|string|false|none|The value of the email tag.It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.|

<h2 id="tocS_EmailTemplateInput">EmailTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplateinput"></a>
<a id="schema_EmailTemplateInput"></a>
<a id="tocSemailtemplateinput"></a>
<a id="tocsemailtemplateinput"></a>

```json
{
  "id": "string",
  "variables": {
    "variableName": "Sign up now",
    "variableName2": 123
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id of the published email template.|
|variables|object|false|none|Template variables object with key/value pairs.|

<h2 id="tocS_SendEmailResponse">SendEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendemailresponse"></a>
<a id="schema_SendEmailResponse"></a>
<a id="tocSsendemailresponse"></a>
<a id="tocssendemailresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the sent email.|

<h2 id="tocS_UpdateEmailOptions">UpdateEmailOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailoptions"></a>
<a id="schema_UpdateEmailOptions"></a>
<a id="tocSupdateemailoptions"></a>
<a id="tocsupdateemailoptions"></a>

```json
{
  "scheduled_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduled_at|string|false|none|Schedule email to be sent later. The date should be in ISO 8601 format.|

<h2 id="tocS_ShareEmailOptions">ShareEmailOptions</h2>
<!-- backwards compatibility -->
<a id="schemashareemailoptions"></a>
<a id="schema_ShareEmailOptions"></a>
<a id="tocSshareemailoptions"></a>
<a id="tocsshareemailoptions"></a>

```json
{
  "expires_in": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_in|string|false|none|How long the link stays valid for, as a duration like `10m`, `2 hours`, or `1 day`. Defaults to `48h` and cannot exceed 48 hours.|

<h2 id="tocS_ShareEmailResponse">ShareEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemashareemailresponse"></a>
<a id="schema_ShareEmailResponse"></a>
<a id="tocSshareemailresponse"></a>
<a id="tocsshareemailresponse"></a>

```json
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "url": "https://resend.com/shared?token=eyJhbGciOiJIUzI1NiJ9..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the email.|
|url|string|false|none|The shareable link, valid until it expires.|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "object": "email",
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "message_id": "<202301010000.4ef9a417@email.example.com>",
  "to": [
    "delivered@resend.dev"
  ],
  "from": "Acme <onboarding@resend.dev>",
  "created_at": "2023-04-03 22:13:42.674981+00",
  "subject": "Hello World",
  "html": "Congrats on sending your <strong>first email</strong>!",
  "text": "string",
  "bcc": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "reply_to": [
    "string"
  ],
  "last_event": "delivered"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the email.|
|message_id|string|false|none|The Message-ID header value of the email.|
|to|[string]|false|none|none|
|from|string|false|none|The email address of the sender.|
|created_at|string|false|none|The date and time the email was created.|
|subject|string|false|none|The subject line of the email.|
|html|string|false|none|The HTML body of the email.|
|text|string|false|none|The plain text body of the email.|
|bcc|[string]|false|none|The email addresses of the blind carbon copy recipients.|
|cc|[string]|false|none|The email addresses of the carbon copy recipients.|
|reply_to|[string]|false|none|The email addresses to which replies should be sent.|
|last_event|string|false|none|The status of the email.|

#### Enumerated Values

|Property|Value|
|---|---|
|last_event|bounced|
|last_event|canceled|
|last_event|clicked|
|last_event|complained|
|last_event|delivered|
|last_event|delivery_delayed|
|last_event|failed|
|last_event|opened|
|last_event|queued|
|last_event|scheduled|
|last_event|sent|
|last_event|suppressed|

<h2 id="tocS_ListEmailsResponse">ListEmailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistemailsresponse"></a>
<a id="schema_ListEmailsResponse"></a>
<a id="tocSlistemailsresponse"></a>
<a id="tocslistemailsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "object": "email",
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "message_id": "<202301010000.4ef9a417@email.example.com>",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "Acme <onboarding@resend.dev>",
      "created_at": "2023-04-03 22:13:42.674981+00",
      "subject": "Hello World",
      "html": "Congrats on sending your <strong>first email</strong>!",
      "text": "string",
      "bcc": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "last_event": "delivered"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[Email](#schemaemail)]|false|none|Array containing email information.|

<h2 id="tocS_GetEmailsMetricsResponse">GetEmailsMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemailsmetricsresponse"></a>
<a id="schema_GetEmailsMetricsResponse"></a>
<a id="tocSgetemailsmetricsresponse"></a>
<a id="tocsgetemailsmetricsresponse"></a>

```json
{
  "object": "metrics",
  "start_date": "2026-07-01T00:00:00.000Z",
  "end_date": "2026-07-08T00:00:00.000Z",
  "metrics": [
    "string"
  ],
  "dimensions": [
    "period"
  ],
  "granularity": "hourly",
  "totals": {
    "property1": 0,
    "property2": 0
  },
  "data": [
    {
      "period": "string",
      "domain_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "domain_name": "string",
      "email_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "broadcast_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "broadcast_name": "string",
      "property1": 0,
      "property2": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|start_date|string|false|none|The start of the requested date range, as an ISO 8601 datetime.|
|end_date|string|false|none|The end of the requested date range, as an ISO 8601 datetime.|
|metrics|[string]|false|none|The metrics included in the response.|
|dimensions|[string]|false|none|The dimensions the response is broken down by.|
|granularity|string|false|none|The bucket size used when `period` is in `dimensions`.|
|totals|object|false|none|The requested metrics, totaled over the whole date range.|
|data|[[EmailMetricsDataRow](#schemaemailmetricsdatarow)]|false|none|One row per unique combination of the requested `dimensions`. Omitted when `dimensions` is empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|dimensions|period|
|dimensions|domain|
|dimensions|email|
|dimensions|broadcast|
|granularity|hourly|
|granularity|daily|
|granularity|weekly|
|granularity|monthly|

<h2 id="tocS_EmailMetricsDataRow">EmailMetricsDataRow</h2>
<!-- backwards compatibility -->
<a id="schemaemailmetricsdatarow"></a>
<a id="schema_EmailMetricsDataRow"></a>
<a id="tocSemailmetricsdatarow"></a>
<a id="tocsemailmetricsdatarow"></a>

```json
{
  "period": "string",
  "domain_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "domain_name": "string",
  "email_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "broadcast_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "broadcast_name": "string",
  "property1": 0,
  "property2": 0
}
```

A single breakdown row. Which dimension fields are present depends on the requested `dimensions`; which metric fields are present depends on the requested `metrics`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period|string|false|none|Present when `period` is in `dimensions`.|
|domain_id|string(uuid)|false|none|Present when `domain` is in `dimensions`.|
|domain_name|string|false|none|Present when `domain` is in `dimensions`.|
|email_id|string(uuid)|false|none|Present when `email` is in `dimensions`.|
|broadcast_id|string(uuid)|false|none|Present when `broadcast` is in `dimensions`.|
|broadcast_name|string|false|none|Present when `broadcast` is in `dimensions`.|
|**additionalProperties**|number|false|none|none|

<h2 id="tocS_GetUsageResponseSuccess">GetUsageResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetusageresponsesuccess"></a>
<a id="schema_GetUsageResponseSuccess"></a>
<a id="tocSgetusageresponsesuccess"></a>
<a id="tocsgetusageresponsesuccess"></a>

```json
{
  "object": "usage",
  "emails": {
    "daily": {
      "used": 0,
      "limit": 0,
      "sent": 0,
      "received": 0,
      "resets_at": "string"
    },
    "monthly": {
      "used": 0,
      "limit": 0,
      "sent": 0,
      "received": 0,
      "resets_at": "string"
    }
  },
  "contacts": {
    "used": 0,
    "limit": 0
  },
  "segments": {
    "used": 0,
    "limit": 0
  },
  "broadcasts": {
    "used": 0,
    "limit": null
  },
  "ai_credits": {
    "used": 0,
    "limit": 0,
    "next_increase_at": "string"
  },
  "automation_runs": {
    "used": 0,
    "limit": 0,
    "resets_at": "string"
  },
  "domains": {
    "used": 0,
    "limit": 0
  },
  "rate_limit": {
    "limit": 0,
    "duration": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|emails|object|false|none|none|
|contacts|object|false|none|none|
|segments|object|false|none|none|
|broadcasts|object|false|none|none|
|ai_credits|object|false|none|none|
|automation_runs|object|false|none|none|
|domains|object|false|none|none|
|rate_limit|object|false|none|none|

<h2 id="tocS_CreateBatchEmailsResponse">CreateBatchEmailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchemailsresponse"></a>
<a id="schema_CreateBatchEmailsResponse"></a>
<a id="tocScreatebatchemailsresponse"></a>
<a id="tocscreatebatchemailsresponse"></a>

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_DomainCapabilities">DomainCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemadomaincapabilities"></a>
<a id="schema_DomainCapabilities"></a>
<a id="tocSdomaincapabilities"></a>
<a id="tocsdomaincapabilities"></a>

```json
{
  "sending": "enabled",
  "receiving": "enabled"
}
```

Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sending|string|false|none|Enable or disable sending emails from this domain.|
|receiving|string|false|none|Enable or disable receiving emails to this domain.|

#### Enumerated Values

|Property|Value|
|---|---|
|sending|enabled|
|sending|disabled|
|receiving|enabled|
|receiving|disabled|

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "name": "string",
  "region": "us-east-1",
  "custom_return_path": "string",
  "open_tracking": true,
  "click_tracking": true,
  "tls": "opportunistic",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "tracking_subdomain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the domain you want to create.|
|region|string|false|none|The region where emails will be sent from. Possible values are us-east-1 \| eu-west-1 \| sa-east-1 \| ap-northeast-1|
|custom_return_path|string|false|none|For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).|
|open_tracking|boolean|false|none|Track the open rate of each email.|
|click_tracking|boolean|false|none|Track clicks within the body of each HTML email.|
|tls|string|false|none|TLS mode. Opportunistic attempts secure connection but falls back to unencrypted. Enforced requires TLS or email won't be sent.|
|capabilities|[DomainCapabilities](#schemadomaincapabilities)|false|none|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|tracking_subdomain|string|false|none|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|us-east-1|
|region|eu-west-1|
|region|sa-east-1|
|region|ap-northeast-1|
|tls|opportunistic|
|tls|enforced|

<h2 id="tocS_CreateDomainResponse">CreateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainresponse"></a>
<a id="schema_CreateDomainResponse"></a>
<a id="tocScreatedomainresponse"></a>
<a id="tocscreatedomainresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "created_at": "2023-10-06 23:47:56.678+00",
  "status": "pending",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "records": [
    {
      "record": "SPF",
      "name": "string",
      "type": "MX",
      "ttl": "string",
      "status": "pending",
      "value": "string",
      "priority": 0
    }
  ],
  "region": "string",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the domain.|
|name|string|false|none|The name of the domain.|
|created_at|string|false|none|The date and time the domain was created.|
|status|string|false|none|The status of the domain.|
|capabilities|[DomainCapabilities](#schemadomaincapabilities)|false|none|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|records|[[DomainRecord](#schemadomainrecord)]|false|none|none|
|region|string|false|none|The region where the domain is hosted.|
|open_tracking|boolean|false|none|Whether open tracking is enabled for this domain.|
|click_tracking|boolean|false|none|Whether click tracking is enabled for this domain.|
|tracking_subdomain|string|false|none|The subdomain used for click and open tracking.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|verified|
|status|failed|
|status|not_started|
|status|partially_verified|
|status|partially_failed|

<h2 id="tocS_UpdateDomainOptions">UpdateDomainOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainoptions"></a>
<a id="schema_UpdateDomainOptions"></a>
<a id="tocSupdatedomainoptions"></a>
<a id="tocsupdatedomainoptions"></a>

```json
{
  "open_tracking": true,
  "click_tracking": true,
  "tls": "opportunistic",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "tracking_subdomain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|open_tracking|boolean|false|none|Track the open rate of each email.|
|click_tracking|boolean|false|none|Track clicks within the body of each HTML email.|
|tls|string|false|none|enforced \| opportunistic.|
|capabilities|[DomainCapabilities](#schemadomaincapabilities)|false|none|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|tracking_subdomain|string|false|none|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Property|Value|
|---|---|
|tls|opportunistic|
|tls|enforced|

<h2 id="tocS_DomainRecord">DomainRecord</h2>
<!-- backwards compatibility -->
<a id="schemadomainrecord"></a>
<a id="schema_DomainRecord"></a>
<a id="tocSdomainrecord"></a>
<a id="tocsdomainrecord"></a>

```json
{
  "record": "SPF",
  "name": "string",
  "type": "MX",
  "ttl": "string",
  "status": "pending",
  "value": "string",
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|record|string|false|none|The type of record (SPF for sending, DKIM for sending, Receiving for inbound emails, Tracking & TrackingCAA for click and open tracking).|
|name|string|false|none|The name of the DNS record.|
|type|string|false|none|The DNS record type.|
|ttl|string|false|none|The time to live for the record.|
|status|string|false|none|The status of the record.|
|value|string|false|none|The value of the record.|
|priority|integer|false|none|The priority of the record (only applicable for MX records).|

#### Enumerated Values

|Property|Value|
|---|---|
|record|SPF|
|record|DKIM|
|record|Receiving|
|record|Tracking|
|record|TrackingCAA|
|type|MX|
|type|TXT|
|type|CNAME|
|type|CAA|
|status|pending|
|status|verified|
|status|failed|
|status|temporary_failure|
|status|not_started|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "not_started",
  "created_at": "2023-04-26 20:21:26.347412+00",
  "region": "us-east-1",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string",
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  },
  "records": [
    {
      "record": "SPF",
      "name": "string",
      "type": "MX",
      "ttl": "string",
      "status": "pending",
      "value": "string",
      "priority": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the domain.|
|name|string|false|none|The name of the domain.|
|status|string|false|none|The status of the domain.|
|created_at|string|false|none|The date and time the domain was created.|
|region|string|false|none|The region where the domain is hosted.|
|open_tracking|boolean|false|none|Whether open tracking is enabled for this domain.|
|click_tracking|boolean|false|none|Whether click tracking is enabled for this domain.|
|tracking_subdomain|string|false|none|The subdomain used for click and open tracking.|
|capabilities|[DomainCapabilities](#schemadomaincapabilities)|false|none|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|
|records|[[DomainRecord](#schemadomainrecord)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|verified|
|status|failed|
|status|not_started|
|status|partially_verified|
|status|partially_failed|

<h2 id="tocS_CreateDomainClaimRequest">CreateDomainClaimRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainclaimrequest"></a>
<a id="schema_CreateDomainClaimRequest"></a>
<a id="tocScreatedomainclaimrequest"></a>
<a id="tocscreatedomainclaimrequest"></a>

```json
{
  "name": "string",
  "region": "us-east-1",
  "custom_return_path": "send",
  "open_tracking": true,
  "click_tracking": true,
  "tracking_subdomain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the domain you want to claim.|
|region|string|false|none|The region where emails will be sent from. Possible values are us-east-1 \| eu-west-1 \| sa-east-1 \| ap-northeast-1|
|custom_return_path|string|false|none|For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).|
|open_tracking|boolean|false|none|Track the open rate of each email.|
|click_tracking|boolean|false|none|Track clicks within the body of each HTML email.|
|tracking_subdomain|string|false|none|The subdomain to use for click and open tracking.|

#### Enumerated Values

|Property|Value|
|---|---|
|region|us-east-1|
|region|eu-west-1|
|region|sa-east-1|
|region|ap-northeast-1|

<h2 id="tocS_DomainClaimRecord">DomainClaimRecord</h2>
<!-- backwards compatibility -->
<a id="schemadomainclaimrecord"></a>
<a id="schema_DomainClaimRecord"></a>
<a id="tocSdomainclaimrecord"></a>
<a id="tocsdomainclaimrecord"></a>

```json
{
  "type": "TXT",
  "name": "example.com",
  "value": "resend-domain-verification=abc123",
  "ttl": "Auto"
}
```

The TXT record to add to your DNS to prove ownership of the claimed domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The DNS record type. Always TXT for domain claims.|
|name|string|false|none|The name of the DNS record (the domain being claimed).|
|value|string|false|none|The value of the TXT record.|
|ttl|string|false|none|The time to live for the record.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TXT|

<h2 id="tocS_DomainClaim">DomainClaim</h2>
<!-- backwards compatibility -->
<a id="schemadomainclaim"></a>
<a id="schema_DomainClaim"></a>
<a id="tocSdomainclaim"></a>
<a id="tocsdomainclaim"></a>

```json
{
  "object": "domain_claim",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "pending",
  "domain_id": "a1b2c3d4-1176-453e-8fc1-35364d380206",
  "region": "us-east-1",
  "record": {
    "type": "TXT",
    "name": "example.com",
    "value": "resend-domain-verification=abc123",
    "ttl": "Auto"
  },
  "blocked_reason": null,
  "failure_reason": null,
  "created_at": "2023-04-26 20:21:26.347412+00",
  "expires_at": "2023-05-03 20:21:26.347412+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the claim.|
|name|string|false|none|The name of the domain being claimed.|
|status|string|false|none|The status of the claim.|
|domain_id|string \| null|false|none|The ID of the placeholder domain created for the claim.|
|region|string \| null|false|none|The region where the claimed domain will send from.|
|record|[DomainClaimRecord](#schemadomainclaimrecord)|false|none|The TXT record to add to your DNS to prove ownership of the claimed domain.|
|blocked_reason|string \| null|false|none|Why the claim is currently blocked, if applicable.|
|failure_reason|string \| null|false|none|Why the claim failed, if applicable.|
|created_at|string|false|none|The date and time the claim was created.|
|expires_at|string|false|none|The date and time the claim expires if not verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|verified|
|status|completed|
|status|blocked|
|status|expired|
|status|superseded|
|status|canceled|
|status|failed|
|region|us-east-1|
|region|eu-west-1|
|region|sa-east-1|
|region|ap-northeast-1|
|region|null|
|blocked_reason|grace_period|
|blocked_reason|recent_owner_activity|
|blocked_reason|pending_scheduled_emails|
|blocked_reason|null|

<h2 id="tocS_VerifyDomainResponse">VerifyDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifydomainresponse"></a>
<a id="schema_VerifyDomainResponse"></a>
<a id="tocSverifydomainresponse"></a>
<a id="tocsverifydomainresponse"></a>

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the domain.|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "name": "example.com",
      "status": "not_started",
      "created_at": "2023-04-26 20:21:26.347412+00",
      "region": "us-east-1",
      "open_tracking": true,
      "click_tracking": true,
      "capabilities": {
        "sending": "enabled",
        "receiving": "enabled"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[ListDomainsItem](#schemalistdomainsitem)]|false|none|none|

<h2 id="tocS_ListDomainsItem">ListDomainsItem</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsitem"></a>
<a id="schema_ListDomainsItem"></a>
<a id="tocSlistdomainsitem"></a>
<a id="tocslistdomainsitem"></a>

```json
{
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "name": "example.com",
  "status": "not_started",
  "created_at": "2023-04-26 20:21:26.347412+00",
  "region": "us-east-1",
  "open_tracking": true,
  "click_tracking": true,
  "capabilities": {
    "sending": "enabled",
    "receiving": "enabled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the domain.|
|name|string|false|none|The name of the domain.|
|status|string|false|none|The status of the domain.|
|created_at|string|false|none|The date and time the domain was created.|
|region|string|false|none|The region where the domain is hosted.|
|open_tracking|boolean|false|none|Whether open tracking is enabled for this domain.|
|click_tracking|boolean|false|none|Whether click tracking is enabled for this domain.|
|capabilities|[DomainCapabilities](#schemadomaincapabilities)|false|none|Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|verified|
|status|failed|
|status|not_started|
|status|partially_verified|
|status|partially_failed|

<h2 id="tocS_UpdateDomainResponseSuccess">UpdateDomainResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainresponsesuccess"></a>
<a id="schema_UpdateDomainResponseSuccess"></a>
<a id="tocSupdatedomainresponsesuccess"></a>
<a id="tocsupdatedomainresponsesuccess"></a>

```json
{
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "object": "domain"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the updated domain.|
|object|string|false|none|The object type representing the updated domain.|

<h2 id="tocS_DeleteDomainResponse">DeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresponse"></a>
<a id="schema_DeleteDomainResponse"></a>
<a id="tocSdeletedomainresponse"></a>
<a id="tocsdeletedomainresponse"></a>

```json
{
  "object": "domain",
  "id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the domain.|
|deleted|boolean|false|none|Indicates whether the domain was deleted successfully.|

<h2 id="tocS_CreateApiKeyRequest">CreateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyrequest"></a>
<a id="schema_CreateApiKeyRequest"></a>
<a id="tocScreateapikeyrequest"></a>
<a id="tocscreateapikeyrequest"></a>

```json
{
  "name": "string",
  "permission": "full_access",
  "domain_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The API key name.|
|permission|string|false|none|The API key can have full access to Resend’s API or be only restricted to send emails. * full_access - Can create, delete, get, and update any resource. * sending_access - Can only send emails.|
|domain_id|string|false|none|Restrict an API key to send emails only from a specific domain. Only used when the permission is sending_access.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|full_access|
|permission|sending_access|

<h2 id="tocS_CreateApiKeyResponse">CreateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyresponse"></a>
<a id="schema_CreateApiKeyResponse"></a>
<a id="tocScreateapikeyresponse"></a>
<a id="tocscreateapikeyresponse"></a>

```json
{
  "id": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the API key.|
|token|string|false|none|The token of the API key.|

<h2 id="tocS_ListApiKeysResponse">ListApiKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapikeysresponse"></a>
<a id="schema_ListApiKeysResponse"></a>
<a id="tocSlistapikeysresponse"></a>
<a id="tocslistapikeysresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "string",
      "name": "string",
      "created_at": "2023-10-06 23:47:56.678+00",
      "last_used_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[ApiKey](#schemaapikey)]|false|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": "string",
  "name": "string",
  "created_at": "2023-10-06 23:47:56.678+00",
  "last_used_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the API key.|
|name|string|false|none|The name of the API key.|
|created_at|string|false|none|The date and time the API key was created.|
|last_used_at|string \| null|false|none|The date and time the API key was last used.|

<h2 id="tocS_ListOAuthGrantsResponse">ListOAuthGrantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoauthgrantsresponse"></a>
<a id="schema_ListOAuthGrantsResponse"></a>
<a id="tocSlistoauthgrantsresponse"></a>
<a id="tocslistoauthgrantsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "string",
      "client_id": "string",
      "scopes": [
        "string"
      ],
      "created_at": "2023-10-06 23:47:56.678+00",
      "revoked_at": "2023-10-06 23:47:56.678+00",
      "revoked_reason": "string",
      "client": {
        "name": "string",
        "logo_uri": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[OAuthGrant](#schemaoauthgrant)]|false|none|none|

<h2 id="tocS_OAuthGrant">OAuthGrant</h2>
<!-- backwards compatibility -->
<a id="schemaoauthgrant"></a>
<a id="schema_OAuthGrant"></a>
<a id="tocSoauthgrant"></a>
<a id="tocsoauthgrant"></a>

```json
{
  "id": "string",
  "client_id": "string",
  "scopes": [
    "string"
  ],
  "created_at": "2023-10-06 23:47:56.678+00",
  "revoked_at": "2023-10-06 23:47:56.678+00",
  "revoked_reason": "string",
  "client": {
    "name": "string",
    "logo_uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the OAuth grant.|
|client_id|string|false|none|The ID of the OAuth client the grant was issued to.|
|scopes|[string]|false|none|The scopes granted to the OAuth client.|
|created_at|string|false|none|The date and time the OAuth grant was created.|
|revoked_at|string \| null|false|none|The date and time the OAuth grant was revoked, or null if it is still active.|
|revoked_reason|string \| null|false|none|The reason the OAuth grant was revoked, or null if it is still active.|
|client|object|false|none|The OAuth client the grant was issued to.|

<h2 id="tocS_RevokeOAuthGrantResponse">RevokeOAuthGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokeoauthgrantresponse"></a>
<a id="schema_RevokeOAuthGrantResponse"></a>
<a id="tocSrevokeoauthgrantresponse"></a>
<a id="tocsrevokeoauthgrantresponse"></a>

```json
{
  "object": "oauth_grant",
  "id": "string",
  "revoked_at": "2023-10-06T23:47:56.678Z",
  "revoked_reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the OAuth grant.|
|revoked_at|string(date-time)|false|none|The date and time the OAuth grant was revoked.|
|revoked_reason|string|false|none|The reason the OAuth grant was revoked.|

<h2 id="tocS_DeleteApiKeyResponse">DeleteApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapikeyresponse"></a>
<a id="schema_DeleteApiKeyResponse"></a>
<a id="tocSdeleteapikeyresponse"></a>
<a id="tocsdeleteapikeyresponse"></a>

```json
{
  "object": "api_key",
  "id": "string",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the API key.|
|deleted|boolean|false|none|Indicates whether the API key was successfully deleted.|

<h2 id="tocS_UpdateApiKeyRequest">UpdateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyrequest"></a>
<a id="schema_UpdateApiKeyRequest"></a>
<a id="tocSupdateapikeyrequest"></a>
<a id="tocsupdateapikeyrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The API key name.|

<h2 id="tocS_UpdateApiKeyResponse">UpdateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapikeyresponse"></a>
<a id="schema_UpdateApiKeyResponse"></a>
<a id="tocSupdateapikeyresponse"></a>
<a id="tocsupdateapikeyresponse"></a>

```json
{
  "object": "api_key",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the API key.|

<h2 id="tocS_CreateAudienceOptions">CreateAudienceOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudienceoptions"></a>
<a id="schema_CreateAudienceOptions"></a>
<a id="tocScreateaudienceoptions"></a>
<a id="tocscreateaudienceoptions"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the audience you want to create.|

<h2 id="tocS_CreateAudienceResponseSuccess">CreateAudienceResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudienceresponsesuccess"></a>
<a id="schema_CreateAudienceResponseSuccess"></a>
<a id="tocScreateaudienceresponsesuccess"></a>
<a id="tocscreateaudienceresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "name": "Registered Users"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the audience.|
|object|string|false|none|The object of the audience.|
|name|string|false|none|The name of the audience.|

<h2 id="tocS_GetAudienceResponseSuccess">GetAudienceResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetaudienceresponsesuccess"></a>
<a id="schema_GetAudienceResponseSuccess"></a>
<a id="tocSgetaudienceresponsesuccess"></a>
<a id="tocsgetaudienceresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "name": "Registered Users",
  "created_at": "2023-10-06 22:59:55.977+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the audience.|
|object|string|false|none|The object of the audience.|
|name|string|false|none|The name of the audience.|
|created_at|string|false|none|The date that the object was created.|

<h2 id="tocS_RemoveAudienceResponseSuccess">RemoveAudienceResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveaudienceresponsesuccess"></a>
<a id="schema_RemoveAudienceResponseSuccess"></a>
<a id="tocSremoveaudienceresponsesuccess"></a>
<a id="tocsremoveaudienceresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "audience",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the audience.|
|object|string|false|none|The object of the audience.|
|deleted|boolean|false|none|The deleted attribute indicates that the corresponding audience has been deleted.|

<h2 id="tocS_ListAudiencesResponseSuccess">ListAudiencesResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistaudiencesresponsesuccess"></a>
<a id="schema_ListAudiencesResponseSuccess"></a>
<a id="tocSlistaudiencesresponsesuccess"></a>
<a id="tocslistaudiencesresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "name": "Registered Users",
      "created_at": "2023-10-06 22:59:55.977+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|data|[object]|false|none|Array containing audience information.|

<h2 id="tocS_CreateContactOptions">CreateContactOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactoptions"></a>
<a id="schema_CreateContactOptions"></a>
<a id="tocScreatecontactoptions"></a>
<a id="tocscreatecontactoptions"></a>

```json
{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "segments": [
    {
      "id": "string"
    }
  ],
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ],
  "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the contact.|
|first_name|string|false|none|First name of the contact.|
|last_name|string|false|none|Last name of the contact.|
|unsubscribed|boolean|false|none|The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.|
|properties|object|false|none|A map of custom property keys and values to create.|
|segments|[object]|false|none|Array of segment IDs to add the contact to.|
|topics|[object]|false|none|Array of topic subscriptions for the contact.|
|audience_id|string|false|none|**Deprecated.** Unique identifier of the audience to which the contact belongs.|

<h2 id="tocS_CreateContactResponseSuccess">CreateContactResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactresponsesuccess"></a>
<a id="schema_CreateContactResponseSuccess"></a>
<a id="tocScreatecontactresponsesuccess"></a>
<a id="tocscreatecontactresponsesuccess"></a>

```json
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the created contact.|

<h2 id="tocS_GetContactResponseSuccess">GetContactResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactresponsesuccess"></a>
<a id="schema_GetContactResponseSuccess"></a>
<a id="tocSgetcontactresponsesuccess"></a>
<a id="tocsgetcontactresponsesuccess"></a>

```json
{
  "object": "contact",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "created_at": "2023-10-06 23:47:56.678+00",
  "unsubscribed": false,
  "properties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the contact.|
|email|string|false|none|Email address of the contact.|
|first_name|string \| null|false|none|First name of the contact.|
|last_name|string \| null|false|none|Last name of the contact.|
|created_at|string|false|none|Timestamp indicating when the contact was created.|
|unsubscribed|boolean|false|none|Indicates if the contact is unsubscribed.|
|properties|object|false|none|A map of custom property keys and values.|

<h2 id="tocS_UpdateContactOptions">UpdateContactOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactoptions"></a>
<a id="schema_UpdateContactOptions"></a>
<a id="tocSupdatecontactoptions"></a>
<a id="tocsupdatecontactoptions"></a>

```json
{
  "email": "steve.wozniak@gmail.com",
  "first_name": "Steve",
  "last_name": "Wozniak",
  "unsubscribed": false,
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the contact.|
|first_name|string|false|none|First name of the contact.|
|last_name|string|false|none|Last name of the contact.|
|unsubscribed|boolean|false|none|The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.|
|properties|object|false|none|A map of custom property keys and values to update.|

<h2 id="tocS_UpdateContactResponseSuccess">UpdateContactResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactresponsesuccess"></a>
<a id="schema_UpdateContactResponseSuccess"></a>
<a id="tocSupdatecontactresponsesuccess"></a>
<a id="tocsupdatecontactresponsesuccess"></a>

```json
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the updated contact.|

<h2 id="tocS_RemoveContactResponseSuccess">RemoveContactResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovecontactresponsesuccess"></a>
<a id="schema_RemoveContactResponseSuccess"></a>
<a id="tocSremovecontactresponsesuccess"></a>
<a id="tocsremovecontactresponsesuccess"></a>

```json
{
  "object": "contact",
  "id": "520784e2-887d-4c25-b53c-4ad46ad38100",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the removed contact.|
|deleted|boolean|false|none|Indicates whether the contact was successfully deleted.|

<h2 id="tocS_ListContactsResponseSuccess">ListContactsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsresponsesuccess"></a>
<a id="schema_ListContactsResponseSuccess"></a>
<a id="tocSlistcontactsresponsesuccess"></a>
<a id="tocslistcontactsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "first_name": "Steve",
      "last_name": "Wozniak",
      "created_at": "2023-10-06 23:47:56.678+00",
      "unsubscribed": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing contact information.|

<h2 id="tocS_CreateContactImportOptions">CreateContactImportOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactimportoptions"></a>
<a id="schema_CreateContactImportOptions"></a>
<a id="tocScreatecontactimportoptions"></a>
<a id="tocscreatecontactimportoptions"></a>

```json
{
  "file": "string",
  "column_map": "{\"email\":\"Email\",\"first_name\":\"First Name\",\"last_name\":\"Last Name\",\"unsubscribed\":\"Unsubscribed\",\"properties\":{\"plan\":{\"column\":\"Plan\",\"type\":\"string\"}}}",
  "on_conflict": "skip",
  "segments": "[{\"id\":\"78261eea-8f8b-4381-83c6-79fa7120f1cf\"}]",
  "topics": "[{\"id\":\"b6d24b8e-af0b-4c3c-be0c-359bbd97381e\",\"subscription\":\"opt_in\"}]"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|CSV file to import. Maximum size is 50MB.|
|column_map|string|false|none|JSON-encoded object mapping contact fields and custom property keys to CSV column names. Supports `email`, `first_name`, `last_name`, `unsubscribed`, and `properties`. Custom property mappings can include `type` as `string`, `number`, or `boolean`; defaults to `string`.|
|on_conflict|string|false|none|Strategy to use when an imported contact already exists.|
|segments|string|false|none|JSON-encoded array of segments to add imported contacts to.|
|topics|string|false|none|JSON-encoded array of topic subscriptions to apply to imported contacts. Each `subscription` must be `opt_in` or `opt_out`.|

#### Enumerated Values

|Property|Value|
|---|---|
|on_conflict|upsert|
|on_conflict|skip|

<h2 id="tocS_CreateContactImportResponseSuccess">CreateContactImportResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactimportresponsesuccess"></a>
<a id="schema_CreateContactImportResponseSuccess"></a>
<a id="tocScreatecontactimportresponsesuccess"></a>
<a id="tocscreatecontactimportresponsesuccess"></a>

```json
{
  "object": "contact_import",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|Unique identifier for the created contact import.|

<h2 id="tocS_ContactImportCounts">ContactImportCounts</h2>
<!-- backwards compatibility -->
<a id="schemacontactimportcounts"></a>
<a id="schema_ContactImportCounts"></a>
<a id="tocScontactimportcounts"></a>
<a id="tocscontactimportcounts"></a>

```json
{
  "total": 100,
  "created": 80,
  "updated": 10,
  "skipped": 5,
  "failed": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|Total number of rows processed by the import.|
|created|integer|false|none|Number of contacts created by the import.|
|updated|integer|false|none|Number of contacts updated by the import.|
|skipped|integer|false|none|Number of rows skipped by the import.|
|failed|integer|false|none|Number of rows that failed during the import.|

<h2 id="tocS_ContactImport">ContactImport</h2>
<!-- backwards compatibility -->
<a id="schemacontactimport"></a>
<a id="schema_ContactImport"></a>
<a id="tocScontactimport"></a>
<a id="tocscontactimport"></a>

```json
{
  "object": "contact_import",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "status": "completed",
  "created_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:50:56.678+00",
  "counts": {
    "total": 100,
    "created": 80,
    "updated": 10,
    "skipped": 5,
    "failed": 5
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|Unique identifier for the contact import.|
|status|string|false|none|Current status of the contact import.|
|created_at|string|false|none|Timestamp indicating when the contact import was created.|
|completed_at|string \| null|false|none|Timestamp indicating when the contact import completed.|
|counts|[ContactImportCounts](#schemacontactimportcounts)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|in_progress|
|status|completed|
|status|failed|

<h2 id="tocS_GetContactImportResponseSuccess">GetContactImportResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactimportresponsesuccess"></a>
<a id="schema_GetContactImportResponseSuccess"></a>
<a id="tocSgetcontactimportresponsesuccess"></a>
<a id="tocsgetcontactimportresponsesuccess"></a>

```json
{
  "object": "contact_import",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "status": "completed",
  "created_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:50:56.678+00",
  "counts": {
    "total": 100,
    "created": 80,
    "updated": 10,
    "skipped": 5,
    "failed": 5
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|Unique identifier for the contact import.|
|status|string|false|none|Current status of the contact import.|
|created_at|string|false|none|Timestamp indicating when the contact import was created.|
|completed_at|string \| null|false|none|Timestamp indicating when the contact import completed.|
|counts|[ContactImportCounts](#schemacontactimportcounts)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|in_progress|
|status|completed|
|status|failed|

<h2 id="tocS_ListContactImportsResponseSuccess">ListContactImportsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactimportsresponsesuccess"></a>
<a id="schema_ListContactImportsResponseSuccess"></a>
<a id="tocSlistcontactimportsresponsesuccess"></a>
<a id="tocslistcontactimportsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "object": "contact_import",
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "status": "completed",
      "created_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:50:56.678+00",
      "counts": {
        "total": 100,
        "created": 80,
        "updated": 10,
        "skipped": 5,
        "failed": 5
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[ContactImport](#schemacontactimport)]|false|none|Array containing contact imports.|

<h2 id="tocS_CreateBroadcastOptions">CreateBroadcastOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatebroadcastoptions"></a>
<a id="schema_CreateBroadcastOptions"></a>
<a id="tocScreatebroadcastoptions"></a>
<a id="tocscreatebroadcastoptions"></a>

```json
{
  "name": "string",
  "segment_id": "string",
  "audience_id": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "preview_text": "Here are our announcements",
  "html": "string",
  "text": "string",
  "topic_id": "string",
  "send": true,
  "scheduled_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the broadcast.|
|segment_id|string|true|none|Unique identifier of the segment this broadcast will be sent to.|
|audience_id|string|false|none|**Deprecated.** Use `segment_id` instead. Unique identifier of the segment this broadcast will be sent to.|
|from|string|true|none|The email address of the sender.|
|subject|string|true|none|The subject line of the email.|
|reply_to|[string]|false|none|The email addresses to which replies should be sent.|
|preview_text|string|false|none|The preview text of the email.|
|html|string|false|none|The HTML version of the message.|
|text|string|false|none|The plain text version of the message.|
|topic_id|string|false|none|The topic ID that the broadcast will be scoped to.|
|send|boolean|false|none|Whether to send the broadcast immediately or keep it as a draft.<br>|
|scheduled_at|string|false|none|Schedule time to send the broadcast. Can only be used if `send` is true.<br>|

<h2 id="tocS_CreateBroadcastResponseSuccess">CreateBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatebroadcastresponsesuccess"></a>
<a id="schema_CreateBroadcastResponseSuccess"></a>
<a id="tocScreatebroadcastresponsesuccess"></a>
<a id="tocscreatebroadcastresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the broadcast.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_ListBroadcastsResponseSuccess">ListBroadcastsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistbroadcastsresponsesuccess"></a>
<a id="schema_ListBroadcastsResponseSuccess"></a>
<a id="tocSlistbroadcastsresponsesuccess"></a>
<a id="tocslistbroadcastsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "name": "November announcements",
      "audience_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "segment_id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
      "status": "draft",
      "created_at": "2023-10-06 22:59:55.977+00",
      "scheduled_at": "2023-10-06 22:59:55.977+00",
      "sent_at": "2023-10-06 22:59:55.977+00",
      "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing broadcast information.|

<h2 id="tocS_GetBroadcastResponseSuccess">GetBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetbroadcastresponsesuccess"></a>
<a id="schema_GetBroadcastResponseSuccess"></a>
<a id="tocSgetbroadcastresponsesuccess"></a>
<a id="tocsgetbroadcastresponsesuccess"></a>

```json
{
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "name": "November announcements",
  "audience_id": "string",
  "segment_id": "string",
  "from": "Acme <onboarding@resend.dev>",
  "subject": "Hello World",
  "reply_to": [
    "string"
  ],
  "preview_text": "Here are our announcements",
  "status": "draft",
  "created_at": "2023-10-06 22:59:55.977+00",
  "scheduled_at": "2023-10-06 22:59:55.977+00",
  "sent_at": "2023-10-06 22:59:55.977+00",
  "text": "Hello {{{FIRST_NAME|there}}}!",
  "html": "<p>Hello {{{FIRST_NAME|there}}}!</p>",
  "topic_id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the broadcast.|
|name|string|false|none|Name of the broadcast.|
|audience_id|string \| null|false|none|**Deprecated.** Deprecated: use `segment_id` instead. Unique identifier of the segment this broadcast will be sent to.|
|segment_id|string \| null|false|none|Unique identifier of the segment this broadcast will be sent to.|
|from|string|false|none|The email address of the sender.|
|subject|string|false|none|The subject line of the email.|
|reply_to|[string]|false|none|The email addresses to which replies should be sent.|
|preview_text|string|false|none|The preview text of the email.|
|status|string|false|none|The status of the broadcast.|
|created_at|string|false|none|Timestamp indicating when the broadcast was created.|
|scheduled_at|string|false|none|Timestamp indicating when the broadcast is scheduled to be sent.|
|sent_at|string|false|none|Timestamp indicating when the broadcast was sent.|
|text|string \| null|false|none|The plain text version of the broadcast content.|
|html|string \| null|false|none|The HTML version of the broadcast content.|
|topic_id|string \| null|false|none|The topic ID that the broadcast is scoped to.|

<h2 id="tocS_UpdateBroadcastOptions">UpdateBroadcastOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebroadcastoptions"></a>
<a id="schema_UpdateBroadcastOptions"></a>
<a id="tocSupdatebroadcastoptions"></a>
<a id="tocsupdatebroadcastoptions"></a>

```json
{
  "name": "string",
  "audience_id": "string",
  "segment_id": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "preview_text": "string",
  "html": "string",
  "text": "string",
  "topic_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the broadcast.|
|audience_id|string|false|none|**Deprecated.** Use `segment_id` instead. Unique identifier of the audience this broadcast will be sent to.|
|segment_id|string|false|none|Unique identifier of the segment this broadcast will be sent to.|
|from|string|false|none|The email address of the sender.|
|subject|string|false|none|The subject line of the email.|
|reply_to|[string]|false|none|The email addresses to which replies should be sent.|
|preview_text|string|false|none|The preview text of the email.|
|html|string|false|none|The HTML version of the message.|
|text|string|false|none|The plain text version of the message.|
|topic_id|string|false|none|The topic ID that the broadcast will be scoped to.|

<h2 id="tocS_UpdateBroadcastResponseSuccess">UpdateBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebroadcastresponsesuccess"></a>
<a id="schema_UpdateBroadcastResponseSuccess"></a>
<a id="tocSupdatebroadcastresponsesuccess"></a>
<a id="tocsupdatebroadcastresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the broadcast.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_RemoveBroadcastResponseSuccess">RemoveBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovebroadcastresponsesuccess"></a>
<a id="schema_RemoveBroadcastResponseSuccess"></a>
<a id="tocSremovebroadcastresponsesuccess"></a>
<a id="tocsremovebroadcastresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the broadcast.|
|object|string|false|none|Type of the response object.|
|deleted|boolean|false|none|The deleted attribute indicates that the corresponding broadcast has been deleted.|

<h2 id="tocS_SendBroadcastOptions">SendBroadcastOptions</h2>
<!-- backwards compatibility -->
<a id="schemasendbroadcastoptions"></a>
<a id="schema_SendBroadcastOptions"></a>
<a id="tocSsendbroadcastoptions"></a>
<a id="tocssendbroadcastoptions"></a>

```json
{
  "scheduled_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduled_at|string|false|none|Schedule email to be sent later. The date should be in ISO 8601 format.|

<h2 id="tocS_SendBroadcastResponseSuccess">SendBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemasendbroadcastresponsesuccess"></a>
<a id="schema_SendBroadcastResponseSuccess"></a>
<a id="tocSsendbroadcastresponsesuccess"></a>
<a id="tocssendbroadcastresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the broadcast.|

<h2 id="tocS_CancelBroadcastResponseSuccess">CancelBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacancelbroadcastresponsesuccess"></a>
<a id="schema_CancelBroadcastResponseSuccess"></a>
<a id="tocScancelbroadcastresponsesuccess"></a>
<a id="tocscancelbroadcastresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "broadcast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the broadcast.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_DuplicateBroadcastResponseSuccess">DuplicateBroadcastResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatebroadcastresponsesuccess"></a>
<a id="schema_DuplicateBroadcastResponseSuccess"></a>
<a id="tocSduplicatebroadcastresponsesuccess"></a>
<a id="tocsduplicatebroadcastresponsesuccess"></a>

```json
{
  "id": "1f85ae38-f5b9-4c1f-8766-667a53970fea",
  "object": "broadcast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the duplicated broadcast.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_ListBroadcastRecipientsResponseSuccess">ListBroadcastRecipientsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistbroadcastrecipientsresponsesuccess"></a>
<a id="schema_ListBroadcastRecipientsResponseSuccess"></a>
<a id="tocSlistbroadcastrecipientsresponsesuccess"></a>
<a id="tocslistbroadcastrecipientsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b2Zmc2V0OjA",
      "contact_id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "count": 3,
      "bounce_type": "permanent",
      "clicked_links": [
        {
          "url": "https://resend.com/pricing",
          "clicks": 2
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing broadcast recipients.|

<h2 id="tocS_ListBroadcastClickedLinksResponseSuccess">ListBroadcastClickedLinksResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistbroadcastclickedlinksresponsesuccess"></a>
<a id="schema_ListBroadcastClickedLinksResponseSuccess"></a>
<a id="tocSlistbroadcastclickedlinksresponsesuccess"></a>
<a id="tocslistbroadcastclickedlinksresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b2Zmc2V0OjA",
      "url": "https://resend.com/pricing",
      "clicks": 42,
      "unique_clicks": 30
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing the broadcast's clicked links.|

<h2 id="tocS_RetrievedAttachment">RetrievedAttachment</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedattachment"></a>
<a id="schema_RetrievedAttachment"></a>
<a id="tocSretrievedattachment"></a>
<a id="tocsretrievedattachment"></a>

```json
{
  "object": "attachment",
  "id": "660e8400-e29b-41d4-a716-446655440000",
  "filename": "document.pdf",
  "content_type": "application/pdf",
  "content_id": "img001",
  "content_disposition": "attachment",
  "download_url": "https://cloudfront.example.com/path?Signature=...",
  "expires_at": "2024-10-27T18:30:00.000Z",
  "size": 2048
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the attachment.|
|filename|string \| null|false|none|The filename of the attachment.|
|content_type|string|false|none|The MIME type of the attachment.|
|content_id|string|false|none|The content ID for inline attachments.|
|content_disposition|string \| null|false|none|How the attachment should be displayed.|
|download_url|string|false|none|Signed URL to download the attachment content.|
|expires_at|string(date-time)|false|none|Timestamp when the download URL expires.|
|size|integer|false|none|Size of the attachment in bytes.|

#### Enumerated Values

|Property|Value|
|---|---|
|content_disposition|inline|
|content_disposition|attachment|
|content_disposition|null|

<h2 id="tocS_ListAttachmentsResponse">ListAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattachmentsresponse"></a>
<a id="schema_ListAttachmentsResponse"></a>
<a id="tocSlistattachmentsresponse"></a>
<a id="tocslistattachmentsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "660e8400-e29b-41d4-a716-446655440000",
      "filename": "document.pdf",
      "content_type": "application/pdf",
      "content_id": "img001",
      "content_disposition": "attachment",
      "download_url": "https://cloudfront.example.com/path?Signature=...",
      "expires_at": "2024-10-27T18:30:00.000Z",
      "size": 2048
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing attachment information.|

<h2 id="tocS_GetReceivedEmailResponse">GetReceivedEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreceivedemailresponse"></a>
<a id="schema_GetReceivedEmailResponse"></a>
<a id="tocSgetreceivedemailresponse"></a>
<a id="tocsgetreceivedemailresponse"></a>

```json
{
  "object": "email",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "to": [
    "delivered@resend.dev"
  ],
  "from": "sender@example.com",
  "subject": "Hello World",
  "message_id": "<message-id@email.example.com>",
  "bcc": [],
  "cc": [],
  "reply_to": [],
  "received_for": [
    "forwarded@example.com"
  ],
  "html": "<p>Email content</p>",
  "text": "Email content",
  "headers": {
    "X-Custom-Header": "value"
  },
  "created_at": "2023-10-06T23:47:56.678Z",
  "attachments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "filename": "string",
      "content_type": "string",
      "content_id": "string",
      "content_disposition": "inline",
      "size": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the received email.|
|to|[string]|false|none|The recipient email addresses.|
|from|string|false|none|The sender email address.|
|subject|string|false|none|The email subject.|
|message_id|string|false|none|The unique message ID from the email headers.|
|bcc|[string]|false|none|The BCC recipients.|
|cc|[string]|false|none|The CC recipients.|
|reply_to|[string]|false|none|The reply-to addresses.|
|received_for|[string]|false|none|The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers.|
|html|string \| null|false|none|The HTML content of the email.|
|text|string \| null|false|none|The plain text content of the email.|
|headers|object \| null|false|none|The email headers.|
|created_at|string(date-time)|false|none|Timestamp when the email was received.|
|attachments|[object]|false|none|Array of attachments.|

<h2 id="tocS_ListReceivedEmailsResponse">ListReceivedEmailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedemailsresponse"></a>
<a id="schema_ListReceivedEmailsResponse"></a>
<a id="tocSlistreceivedemailsresponse"></a>
<a id="tocslistreceivedemailsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "to": [
        "delivered@resend.dev"
      ],
      "from": "sender@example.com",
      "subject": "Hello World",
      "message_id": "<message-id@email.example.com>",
      "bcc": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "created_at": "2023-10-06T23:47:56.678Z",
      "attachments": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "filename": "string",
          "content_type": "string",
          "content_id": "string",
          "content_disposition": "inline",
          "size": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing received email information.|

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "endpoint": "https://webhook.example.com/handler",
  "events": [
    "email.sent",
    "email.delivered",
    "email.bounced",
    "email.suppressed"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|The URL where webhook events will be sent.|
|events|[string]|true|none|Array of event types to subscribe to.|

<h2 id="tocS_CreateWebhookResponse">CreateWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookresponse"></a>
<a id="schema_CreateWebhookResponse"></a>
<a id="tocScreatewebhookresponse"></a>
<a id="tocscreatewebhookresponse"></a>

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "signing_secret": "whsec_..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the webhook.|
|signing_secret|string|false|none|The secret key used to verify webhook payloads.|

<h2 id="tocS_GetWebhookResponse">GetWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookresponse"></a>
<a id="schema_GetWebhookResponse"></a>
<a id="tocSgetwebhookresponse"></a>
<a id="tocsgetwebhookresponse"></a>

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "endpoint": "https://webhook.example.com/handler",
  "events": [
    "email.sent",
    "email.delivered"
  ],
  "status": "enabled",
  "created_at": "2023-10-06 23:47:56.678+00",
  "signing_secret": "whsec_..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the webhook.|
|endpoint|string|false|none|The URL where webhook events are sent.|
|events|[string]|false|none|Array of event types subscribed to.|
|status|string|false|none|The status of the webhook.|
|created_at|string|false|none|Timestamp indicating when the webhook was created.|
|signing_secret|string|false|none|The secret key used to verify webhook payloads.|

<h2 id="tocS_ListWebhooksResponse">ListWebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhooksresponse"></a>
<a id="schema_ListWebhooksResponse"></a>
<a id="tocSlistwebhooksresponse"></a>
<a id="tocslistwebhooksresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "479e3145-dd38-476b-932c-529ceb705947",
      "endpoint": "https://webhook.example.com/handler",
      "events": [
        "email.sent"
      ],
      "status": "enabled",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing webhook information.|

<h2 id="tocS_UpdateWebhookRequest">UpdateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_UpdateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "endpoint": "https://webhook.example.com/new-handler",
  "events": [
    "email.sent",
    "email.delivered"
  ],
  "status": "enabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|The URL where webhook events will be sent.|
|events|[string]|false|none|Array of event types to subscribe to.|
|status|string|false|none|The status of the webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_UpdateWebhookResponse">UpdateWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookresponse"></a>
<a id="schema_UpdateWebhookResponse"></a>
<a id="tocSupdatewebhookresponse"></a>
<a id="tocsupdatewebhookresponse"></a>

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the updated webhook.|

<h2 id="tocS_RotateWebhookSigningSecretResponse">RotateWebhookSigningSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemarotatewebhooksigningsecretresponse"></a>
<a id="schema_RotateWebhookSigningSecretResponse"></a>
<a id="tocSrotatewebhooksigningsecretresponse"></a>
<a id="tocsrotatewebhooksigningsecretresponse"></a>

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "signing_secret": "whsec_..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the webhook.|
|signing_secret|string|false|none|The new secret key used to verify webhook payloads.|

<h2 id="tocS_DeleteWebhookResponse">DeleteWebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebhookresponse"></a>
<a id="schema_DeleteWebhookResponse"></a>
<a id="tocSdeletewebhookresponse"></a>
<a id="tocsdeletewebhookresponse"></a>

```json
{
  "object": "webhook",
  "id": "479e3145-dd38-476b-932c-529ceb705947",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string(uuid)|false|none|The ID of the deleted webhook.|
|deleted|boolean|false|none|Indicates whether the webhook was successfully deleted.|

<h2 id="tocS_ListWebhookEventsResponse">ListWebhookEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhookeventsresponse"></a>
<a id="schema_ListWebhookEventsResponse"></a>
<a id="tocSlistwebhookeventsresponse"></a>
<a id="tocslistwebhookeventsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "type": "email.sent",
      "created_at": "2026-08-22T15:28:00.000Z",
      "status": "success"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing webhook event information.|

<h2 id="tocS_GetWebhookEventResponse">GetWebhookEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebhookeventresponse"></a>
<a id="schema_GetWebhookEventResponse"></a>
<a id="tocSgetwebhookeventresponse"></a>
<a id="tocsgetwebhookeventresponse"></a>

```json
{
  "object": "webhook_event",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "type": "email.sent",
  "created_at": "2026-08-22T15:28:00.000Z",
  "status": "attempting",
  "next_attempt_at": "2026-08-22T15:33:00.000Z",
  "payload": {
    "type": "email.sent",
    "created_at": "2026-08-22T15:28:00.000Z",
    "data": {
      "email_id": "571f1f42-1c2d-4b1f-8f8e-8b3b5b3b5b3b",
      "from": "onboarding@resend.dev",
      "to": [
        "delivered@resend.dev"
      ],
      "subject": "Welcome",
      "created_at": "2026-08-22T15:27:59.000Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the webhook event.|
|type|string|false|none|The type of the event.|
|created_at|string(date-time)|false|none|Timestamp indicating when the event was created.|
|status|string|false|none|The delivery status of the event for this webhook.|
|next_attempt_at|string \| null(date-time)|false|none|Timestamp of the next scheduled delivery attempt, or null when none is scheduled. Always null once the event has succeeded or permanently failed.|
|payload|object|false|none|The event payload sent to the webhook endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|attempting|
|status|success|
|status|failed|

<h2 id="tocS_ListWebhookEventAttemptsResponse">ListWebhookEventAttemptsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebhookeventattemptsresponse"></a>
<a id="schema_ListWebhookEventAttemptsResponse"></a>
<a id="tocSlistwebhookeventattemptsresponse"></a>
<a id="tocslistwebhookeventattemptsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "http_status_code": 200,
      "response": "{\"ok\":true}",
      "sent_at": "2026-08-22T15:33:12.000Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing webhook event attempt information.|

<h2 id="tocS_ReplayWebhookEventResponse">ReplayWebhookEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemareplaywebhookeventresponse"></a>
<a id="schema_ReplayWebhookEventResponse"></a>
<a id="tocSreplaywebhookeventresponse"></a>
<a id="tocsreplaywebhookeventresponse"></a>

```json
{
  "object": "webhook_event",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the replayed webhook event.|

<h2 id="tocS_TemplateVariable">TemplateVariable</h2>
<!-- backwards compatibility -->
<a id="schematemplatevariable"></a>
<a id="schema_TemplateVariable"></a>
<a id="tocStemplatevariable"></a>
<a id="tocstemplatevariable"></a>

```json
{
  "id": "string",
  "key": "string",
  "type": "string",
  "fallback_value": "string",
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the template variable.|
|key|string|true|none|The key of the variable.|
|type|string|true|none|The type of the variable.|
|fallback_value|string \| number \| boolean \| object \| [object]|false|none|The fallback value of the variable.|
|created_at|string|false|none|Timestamp indicating when the variable was created.|
|updated_at|string|false|none|Timestamp indicating when the variable was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|type|number|
|type|boolean|
|type|object|
|type|list|

<h2 id="tocS_TemplateVariableInput">TemplateVariableInput</h2>
<!-- backwards compatibility -->
<a id="schematemplatevariableinput"></a>
<a id="schema_TemplateVariableInput"></a>
<a id="tocStemplatevariableinput"></a>
<a id="tocstemplatevariableinput"></a>

```json
{
  "key": "string",
  "type": "string",
  "fallback_value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The key of the variable.|
|type|string|true|none|The type of the variable.|
|fallback_value|string \| number \| boolean \| object \| [object]|false|none|The fallback value of the variable.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|type|number|
|type|boolean|
|type|object|
|type|list|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "object": "template",
  "id": "string",
  "current_version_id": "string",
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "id": "string",
      "key": "string",
      "type": "string",
      "fallback_value": "string",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ],
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00",
  "status": "draft",
  "published_at": "2023-10-06 23:47:56.678+00",
  "has_unpublished_versions": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The type of object.|
|id|string|false|none|The ID of the template.|
|current_version_id|string|false|none|The ID of the current version of the template.|
|name|string|false|none|The name of the template.|
|alias|string|false|none|The alias of the template.|
|from|string|false|none|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|subject|string|false|none|Email subject.|
|reply_to|[string]|false|none|Reply-to email addresses.|
|html|string|false|none|The HTML version of the template.|
|text|string|false|none|The plain text version of the template.|
|variables|[[TemplateVariable](#schematemplatevariable)]|false|none|none|
|created_at|string|false|none|Timestamp indicating when the template was created.|
|updated_at|string|false|none|Timestamp indicating when the template was last updated.|
|status|string|false|none|The publication status of the template.|
|published_at|string \| null|false|none|Timestamp indicating when the template was published.|
|has_unpublished_versions|boolean|false|none|Indicates whether the template has unpublished versions.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|published|

<h2 id="tocS_TemplateListItem">TemplateListItem</h2>
<!-- backwards compatibility -->
<a id="schematemplatelistitem"></a>
<a id="schema_TemplateListItem"></a>
<a id="tocStemplatelistitem"></a>
<a id="tocstemplatelistitem"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "draft",
  "published_at": "2023-10-06 23:47:56.678+00",
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00",
  "alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the template.|
|name|string|false|none|The name of the template.|
|status|string|false|none|The publication status of the template.|
|published_at|string \| null|false|none|Timestamp indicating when the template was published.|
|created_at|string|false|none|Timestamp indicating when the template was created.|
|updated_at|string|false|none|Timestamp indicating when the template was last updated.|
|alias|string|false|none|The alias of the template.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|published|

<h2 id="tocS_CreateTemplateRequest">CreateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplaterequest"></a>
<a id="schema_CreateTemplateRequest"></a>
<a id="tocScreatetemplaterequest"></a>
<a id="tocscreatetemplaterequest"></a>

```json
{
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "key": "string",
      "type": "string",
      "fallback_value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the template.|
|alias|string|false|none|The alias of the template.|
|from|string|false|none|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|subject|string|false|none|Email subject.|
|reply_to|[string]|false|none|Reply-to email addresses.|
|html|string|true|none|The HTML version of the template.|
|text|string|false|none|The plain text version of the template.|
|variables|[[TemplateVariableInput](#schematemplatevariableinput)]|false|none|none|

<h2 id="tocS_CreateTemplateResponseSuccess">CreateTemplateResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplateresponsesuccess"></a>
<a id="schema_CreateTemplateResponseSuccess"></a>
<a id="tocScreatetemplateresponsesuccess"></a>
<a id="tocscreatetemplateresponsesuccess"></a>

```json
{
  "id": "string",
  "object": "template"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the template.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_ListTemplatesResponseSuccess">ListTemplatesResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplatesresponsesuccess"></a>
<a id="schema_ListTemplatesResponseSuccess"></a>
<a id="tocSlisttemplatesresponsesuccess"></a>
<a id="tocslisttemplatesresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "draft",
      "published_at": "2023-10-06 23:47:56.678+00",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00",
      "alias": "string"
    }
  ],
  "has_more": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|data|[[TemplateListItem](#schematemplatelistitem)]|false|none|Array containing templates information.|
|has_more|boolean|false|none|Indicates if there are more templates to retrieve.|

<h2 id="tocS_UpdateTemplateOptions">UpdateTemplateOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplateoptions"></a>
<a id="schema_UpdateTemplateOptions"></a>
<a id="tocSupdatetemplateoptions"></a>
<a id="tocsupdatetemplateoptions"></a>

```json
{
  "name": "string",
  "alias": "string",
  "from": "string",
  "subject": "string",
  "reply_to": [
    "string"
  ],
  "html": "string",
  "text": "string",
  "variables": [
    {
      "key": "string",
      "type": "string",
      "fallback_value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the template.|
|alias|string|false|none|The alias of the template.|
|from|string|false|none|Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".|
|subject|string|false|none|Email subject.|
|reply_to|[string]|false|none|Reply-to email addresses.|
|html|string|false|none|The HTML version of the template.|
|text|string|false|none|The plain text version of the template.|
|variables|[[TemplateVariableInput](#schematemplatevariableinput)]|false|none|none|

<h2 id="tocS_UpdateTemplateResponseSuccess">UpdateTemplateResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplateresponsesuccess"></a>
<a id="schema_UpdateTemplateResponseSuccess"></a>
<a id="tocSupdatetemplateresponsesuccess"></a>
<a id="tocsupdatetemplateresponsesuccess"></a>

```json
{
  "id": "string",
  "object": "template"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the template.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_RemoveTemplateResponseSuccess">RemoveTemplateResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovetemplateresponsesuccess"></a>
<a id="schema_RemoveTemplateResponseSuccess"></a>
<a id="tocSremovetemplateresponsesuccess"></a>
<a id="tocsremovetemplateresponsesuccess"></a>

```json
{
  "object": "template",
  "id": "string",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the template.|
|deleted|boolean|false|none|Indicates whether the template was successfully deleted.|

<h2 id="tocS_PublishTemplateResponseSuccess">PublishTemplateResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemapublishtemplateresponsesuccess"></a>
<a id="schema_PublishTemplateResponseSuccess"></a>
<a id="tocSpublishtemplateresponsesuccess"></a>
<a id="tocspublishtemplateresponsesuccess"></a>

```json
{
  "id": "string",
  "object": "template"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the template.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_DuplicateTemplateResponseSuccess">DuplicateTemplateResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaduplicatetemplateresponsesuccess"></a>
<a id="schema_DuplicateTemplateResponseSuccess"></a>
<a id="tocSduplicatetemplateresponsesuccess"></a>
<a id="tocsduplicatetemplateresponsesuccess"></a>

```json
{
  "id": "string",
  "object": "template"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the duplicated template.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_CreateSegmentOptions">CreateSegmentOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatesegmentoptions"></a>
<a id="schema_CreateSegmentOptions"></a>
<a id="tocScreatesegmentoptions"></a>
<a id="tocscreatesegmentoptions"></a>

```json
{
  "name": "string",
  "audience_id": "string",
  "filter": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the segment.|
|audience_id|string|false|none|**Deprecated.** The ID of the audience this segment belongs to.|
|filter|object|false|none|Filter conditions for the segment.|

<h2 id="tocS_CreateSegmentResponseSuccess">CreateSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatesegmentresponsesuccess"></a>
<a id="schema_CreateSegmentResponseSuccess"></a>
<a id="tocScreatesegmentresponsesuccess"></a>
<a id="tocscreatesegmentresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the segment.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_GetSegmentResponseSuccess">GetSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetsegmentresponsesuccess"></a>
<a id="schema_GetSegmentResponseSuccess"></a>
<a id="tocSgetsegmentresponsesuccess"></a>
<a id="tocsgetsegmentresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment",
  "name": "Active Users",
  "audience_id": "string",
  "filter": {},
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the segment.|
|object|string|false|none|The object type.|
|name|string|false|none|The name of the segment.|
|audience_id|string|false|none|**Deprecated.** The ID of the audience this segment belongs to.|
|filter|object|false|none|Filter conditions for the segment.|
|created_at|string|false|none|Timestamp indicating when the segment was created.|

<h2 id="tocS_UpdateSegmentOptions">UpdateSegmentOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesegmentoptions"></a>
<a id="schema_UpdateSegmentOptions"></a>
<a id="tocSupdatesegmentoptions"></a>
<a id="tocsupdatesegmentoptions"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the segment.|

<h2 id="tocS_UpdateSegmentResponseSuccess">UpdateSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesegmentresponsesuccess"></a>
<a id="schema_UpdateSegmentResponseSuccess"></a>
<a id="tocSupdatesegmentresponsesuccess"></a>
<a id="tocsupdatesegmentresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the segment.|
|object|string|false|none|The object type.|

<h2 id="tocS_ListSegmentsResponseSuccess">ListSegmentsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistsegmentsresponsesuccess"></a>
<a id="schema_ListSegmentsResponseSuccess"></a>
<a id="tocSlistsegmentsresponsesuccess"></a>
<a id="tocslistsegmentsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "audience_id": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing segment information.|

<h2 id="tocS_RemoveSegmentResponseSuccess">RemoveSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovesegmentresponsesuccess"></a>
<a id="schema_RemoveSegmentResponseSuccess"></a>
<a id="tocSremovesegmentresponsesuccess"></a>
<a id="tocsremovesegmentresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "segment",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the segment.|
|object|string|false|none|The object type.|
|deleted|boolean|false|none|Indicates whether the segment was successfully deleted.|

<h2 id="tocS_CreateTopicOptions">CreateTopicOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatetopicoptions"></a>
<a id="schema_CreateTopicOptions"></a>
<a id="tocScreatetopicoptions"></a>
<a id="tocscreatetopicoptions"></a>

```json
{
  "name": "string",
  "default_subscription": "opt_in",
  "description": "string",
  "visibility": "private"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the topic. Max 50 characters.|
|default_subscription|string|true|none|The default subscription status for the topic. Cannot be changed after creation.|
|description|string|false|none|A description of the topic. Max 200 characters.|
|visibility|string|false|none|The visibility of the topic. Public topics are visible to all contacts on the unsubscribe page. Private topics are only visible to opted-in contacts.|

#### Enumerated Values

|Property|Value|
|---|---|
|default_subscription|opt_in|
|default_subscription|opt_out|
|visibility|public|
|visibility|private|

<h2 id="tocS_CreateTopicResponseSuccess">CreateTopicResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatetopicresponsesuccess"></a>
<a id="schema_CreateTopicResponseSuccess"></a>
<a id="tocScreatetopicresponsesuccess"></a>
<a id="tocscreatetopicresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the topic.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_GetTopicResponseSuccess">GetTopicResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagettopicresponsesuccess"></a>
<a id="schema_GetTopicResponseSuccess"></a>
<a id="tocSgettopicresponsesuccess"></a>
<a id="tocsgettopicresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic",
  "name": "Newsletter",
  "description": "string",
  "default_subscription": "opt_in",
  "visibility": "public",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the topic.|
|object|string|false|none|The object type.|
|name|string|false|none|The name of the topic.|
|description|string|false|none|A description of the topic.|
|default_subscription|string|false|none|The default subscription status for the topic.|
|visibility|string|false|none|The visibility of the topic.|
|created_at|string|false|none|Timestamp indicating when the topic was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|default_subscription|opt_in|
|default_subscription|opt_out|
|visibility|public|
|visibility|private|

<h2 id="tocS_ListTopicsResponseSuccess">ListTopicsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalisttopicsresponsesuccess"></a>
<a id="schema_ListTopicsResponseSuccess"></a>
<a id="tocSlisttopicsresponsesuccess"></a>
<a id="tocslisttopicsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "default_subscription": "opt_in",
      "visibility": "public",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing topic information.|

<h2 id="tocS_UpdateTopicOptions">UpdateTopicOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetopicoptions"></a>
<a id="schema_UpdateTopicOptions"></a>
<a id="tocSupdatetopicoptions"></a>
<a id="tocsupdatetopicoptions"></a>

```json
{
  "name": "string",
  "description": "string",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the topic. Max 50 characters.|
|description|string|false|none|A description of the topic. Max 200 characters.|
|visibility|string|false|none|The visibility of the topic.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|public|
|visibility|private|

<h2 id="tocS_UpdateTopicResponseSuccess">UpdateTopicResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetopicresponsesuccess"></a>
<a id="schema_UpdateTopicResponseSuccess"></a>
<a id="tocSupdatetopicresponsesuccess"></a>
<a id="tocsupdatetopicresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the topic.|
|object|string|false|none|The object type.|

<h2 id="tocS_RemoveTopicResponseSuccess">RemoveTopicResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovetopicresponsesuccess"></a>
<a id="schema_RemoveTopicResponseSuccess"></a>
<a id="tocSremovetopicresponsesuccess"></a>
<a id="tocsremovetopicresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "topic",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the topic.|
|object|string|false|none|The object type.|
|deleted|boolean|false|none|Indicates whether the topic was successfully deleted.|

<h2 id="tocS_CreateContactPropertyOptions">CreateContactPropertyOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactpropertyoptions"></a>
<a id="schema_CreateContactPropertyOptions"></a>
<a id="tocScreatecontactpropertyoptions"></a>
<a id="tocscreatecontactpropertyoptions"></a>

```json
{
  "key": "string",
  "type": "string",
  "fallback_value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The property key. Max length is 50 characters. Only alphanumeric characters and underscores are allowed.|
|type|string|true|none|The property type.|
|fallback_value|string \| number|false|none|The default value to use when the property is not set for a contact. Must match the type specified in the type field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|type|number|

<h2 id="tocS_CreateContactPropertyResponseSuccess">CreateContactPropertyResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactpropertyresponsesuccess"></a>
<a id="schema_CreateContactPropertyResponseSuccess"></a>
<a id="tocScreatecontactpropertyresponsesuccess"></a>
<a id="tocscreatecontactpropertyresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the contact property.|
|object|string|false|none|The object type of the response.|

<h2 id="tocS_GetContactPropertyResponseSuccess">GetContactPropertyResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactpropertyresponsesuccess"></a>
<a id="schema_GetContactPropertyResponseSuccess"></a>
<a id="tocSgetcontactpropertyresponsesuccess"></a>
<a id="tocsgetcontactpropertyresponsesuccess"></a>

```json
{
  "object": "contact_property",
  "id": "b6d24b8e-af0b-4c3c-be0c-359bbd97381e",
  "key": "company_name",
  "type": "string",
  "fallback_value": "Acme Corp",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The object type.|
|id|string|false|none|The ID of the contact property.|
|key|string|false|none|The property key.|
|type|string|false|none|The property type.|
|fallback_value|string \| number|false|none|The default value when the property is not set for a contact.|
|created_at|string|false|none|Timestamp indicating when the contact property was created.|

<h2 id="tocS_ListContactPropertiesResponseSuccess">ListContactPropertiesResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactpropertiesresponsesuccess"></a>
<a id="schema_ListContactPropertiesResponseSuccess"></a>
<a id="tocSlistcontactpropertiesresponsesuccess"></a>
<a id="tocslistcontactpropertiesresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "key": "string",
      "type": "string",
      "fallback_value": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing contact property information.|

<h2 id="tocS_UpdateContactPropertyOptions">UpdateContactPropertyOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactpropertyoptions"></a>
<a id="schema_UpdateContactPropertyOptions"></a>
<a id="tocSupdatecontactpropertyoptions"></a>
<a id="tocsupdatecontactpropertyoptions"></a>

```json
{
  "fallback_value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fallback_value|string \| number|false|none|The default value to use when the property is not set for a contact. Must match the type of the property.|

<h2 id="tocS_UpdateContactPropertyResponseSuccess">UpdateContactPropertyResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactpropertyresponsesuccess"></a>
<a id="schema_UpdateContactPropertyResponseSuccess"></a>
<a id="tocSupdatecontactpropertyresponsesuccess"></a>
<a id="tocsupdatecontactpropertyresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the contact property.|
|object|string|false|none|The object type.|

<h2 id="tocS_RemoveContactPropertyResponseSuccess">RemoveContactPropertyResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovecontactpropertyresponsesuccess"></a>
<a id="schema_RemoveContactPropertyResponseSuccess"></a>
<a id="tocSremovecontactpropertyresponsesuccess"></a>
<a id="tocsremovecontactpropertyresponsesuccess"></a>

```json
{
  "id": "78261eea-8f8b-4381-83c6-79fa7120f1cf",
  "object": "contact_property",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the contact property.|
|object|string|false|none|The object type.|
|deleted|boolean|false|none|Indicates whether the contact property was successfully deleted.|

<h2 id="tocS_AddContactToSegmentResponseSuccess">AddContactToSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaaddcontacttosegmentresponsesuccess"></a>
<a id="schema_AddContactToSegmentResponseSuccess"></a>
<a id="tocSaddcontacttosegmentresponsesuccess"></a>
<a id="tocsaddcontacttosegmentresponsesuccess"></a>

```json
{
  "object": "contact_segment",
  "contact_id": "string",
  "segment_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The object type.|
|contact_id|string|false|none|The ID of the contact.|
|segment_id|string|false|none|The ID of the segment.|

<h2 id="tocS_ListContactSegmentsResponseSuccess">ListContactSegmentsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsegmentsresponsesuccess"></a>
<a id="schema_ListContactSegmentsResponseSuccess"></a>
<a id="tocSlistcontactsegmentsresponsesuccess"></a>
<a id="tocslistcontactsegmentsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing segment information for this contact.|

<h2 id="tocS_RemoveContactFromSegmentResponseSuccess">RemoveContactFromSegmentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovecontactfromsegmentresponsesuccess"></a>
<a id="schema_RemoveContactFromSegmentResponseSuccess"></a>
<a id="tocSremovecontactfromsegmentresponsesuccess"></a>
<a id="tocsremovecontactfromsegmentresponsesuccess"></a>

```json
{
  "object": "contact_segment",
  "contact_id": "string",
  "segment_id": "string",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The object type.|
|contact_id|string|false|none|The ID of the contact.|
|segment_id|string|false|none|The ID of the segment.|
|deleted|boolean|false|none|Indicates whether the contact was successfully removed from the segment.|

<h2 id="tocS_GetContactTopicsResponseSuccess">GetContactTopicsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetcontacttopicsresponsesuccess"></a>
<a id="schema_GetContactTopicsResponseSuccess"></a>
<a id="tocSgetcontacttopicsresponsesuccess"></a>
<a id="tocsgetcontacttopicsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "subscription": "opt_in"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing topic subscriptions for this contact.|

<h2 id="tocS_UpdateContactTopicsOptions">UpdateContactTopicsOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontacttopicsoptions"></a>
<a id="schema_UpdateContactTopicsOptions"></a>
<a id="tocSupdatecontacttopicsoptions"></a>
<a id="tocsupdatecontacttopicsoptions"></a>

```json
{
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|[object]|true|none|none|

<h2 id="tocS_UpdateContactTopicsResponseSuccess">UpdateContactTopicsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontacttopicsresponsesuccess"></a>
<a id="schema_UpdateContactTopicsResponseSuccess"></a>
<a id="tocSupdatecontacttopicsresponsesuccess"></a>
<a id="tocsupdatecontacttopicsresponsesuccess"></a>

```json
{
  "object": "contact_topics",
  "contact_id": "string",
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|The object type.|
|contact_id|string|false|none|The ID of the contact.|
|topics|[object]|false|none|Array of updated topic subscriptions.|

<h2 id="tocS_LogSummary">LogSummary</h2>
<!-- backwards compatibility -->
<a id="schemalogsummary"></a>
<a id="schema_LogSummary"></a>
<a id="tocSlogsummary"></a>
<a id="tocslogsummary"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "2023-10-06 23:47:56.678+00",
  "endpoint": "string",
  "method": "GET",
  "response_status": 0,
  "user_agent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The log ID.|
|created_at|string|false|none|The date the log was created.|
|endpoint|string|false|none|The API endpoint that was called.|
|method|string|false|none|The HTTP method used.|
|response_status|integer|false|none|The HTTP status code of the response.|
|user_agent|string \| null|false|none|The user agent of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|
|method|OPTIONS|

<h2 id="tocS_Log">Log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_Log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "object": "log",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_at": "2023-10-06 23:47:56.678+00",
  "endpoint": "string",
  "method": "GET",
  "response_status": 0,
  "user_agent": "string",
  "request_body": {},
  "response_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|The log ID.|
|created_at|string|false|none|The date the log was created.|
|endpoint|string|false|none|The API endpoint that was called.|
|method|string|false|none|The HTTP method used.|
|response_status|integer|false|none|The HTTP status code of the response.|
|user_agent|string \| null|false|none|The user agent of the request.|
|request_body|object \| null|false|none|The request body sent to the API.|
|response_body|object \| null|false|none|The response body returned by the API.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|
|method|OPTIONS|

<h2 id="tocS_ListLogsResponse">ListLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogsresponse"></a>
<a id="schema_ListLogsResponse"></a>
<a id="tocSlistlogsresponse"></a>
<a id="tocslistlogsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_at": "2023-10-06 23:47:56.678+00",
      "endpoint": "string",
      "method": "GET",
      "response_status": 0,
      "user_agent": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[LogSummary](#schemalogsummary)]|false|none|Array containing log information.|

<h2 id="tocS_AutomationStep">AutomationStep</h2>
<!-- backwards compatibility -->
<a id="schemaautomationstep"></a>
<a id="schema_AutomationStep"></a>
<a id="tocSautomationstep"></a>
<a id="tocsautomationstep"></a>

```json
{
  "key": "string",
  "type": "trigger",
  "config": {}
}
```

A step in an automation workflow. The `config` object varies based on the step `type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|A unique key for this step within the automation graph.|
|type|string|true|none|The type of automation step.|
|config|object|true|none|Configuration for the step. Shape depends on `type`: - **trigger**: `{ event_name: string }` - **send_email**: `{ template: { id: string, variables?: object }, subject?: string, from?: string, reply_to?: string }` - **delay**: `{ duration: string }` — a human-readable duration (e.g. `"30 minutes"`) - **wait_for_event**: `{ event_name: string, timeout?: string, filter_rule?: object }` — `timeout` is a human-readable duration (e.g. `"1 hour"`) - **condition**: A rule tree with `type` (`rule`, `and`, `or`), `field`, `operator`, and `value` - **contact_update**: `{ first_name?: string\|object, last_name?: string\|object, unsubscribed?: boolean\|object, properties?: object }` - **contact_delete**: `{}` - **add_to_segment**: `{ segment_id: string }`<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|trigger|
|type|send_email|
|type|delay|
|type|wait_for_event|
|type|condition|
|type|contact_update|
|type|contact_delete|
|type|add_to_segment|

<h2 id="tocS_AutomationStepResponse">AutomationStepResponse</h2>
<!-- backwards compatibility -->
<a id="schemaautomationstepresponse"></a>
<a id="schema_AutomationStepResponse"></a>
<a id="tocSautomationstepresponse"></a>
<a id="tocsautomationstepresponse"></a>

```json
{
  "key": "string",
  "type": "trigger",
  "config": {}
}
```

A step as returned when retrieving an automation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The unique key of this step within the automation graph.|
|type|string|false|none|The type of automation step.|
|config|object|false|none|Configuration for the step. Shape depends on `type`. For `delay` steps, config contains `{ duration: string }` with a human-readable duration (e.g. `"30 minutes"`). For `wait_for_event` steps, config contains `{ event_name: string, timeout?: string, filter_rule?: object }` where `timeout` is a human-readable duration.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|trigger|
|type|send_email|
|type|delay|
|type|wait_for_event|
|type|condition|
|type|contact_update|
|type|contact_delete|
|type|add_to_segment|

<h2 id="tocS_AutomationConnection">AutomationConnection</h2>
<!-- backwards compatibility -->
<a id="schemaautomationconnection"></a>
<a id="schema_AutomationConnection"></a>
<a id="tocSautomationconnection"></a>
<a id="tocsautomationconnection"></a>

```json
{
  "from": "string",
  "to": "string",
  "type": "default"
}
```

A connection between two steps in the automation graph.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|The `key` of the source step.|
|to|string|true|none|The `key` of the target step.|
|type|string|false|none|The type of connection. Defaults to `default`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|default|
|type|condition_met|
|type|condition_not_met|
|type|timeout|
|type|event_received|

<h2 id="tocS_CreateAutomationRequest">CreateAutomationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateautomationrequest"></a>
<a id="schema_CreateAutomationRequest"></a>
<a id="tocScreateautomationrequest"></a>
<a id="tocscreateautomationrequest"></a>

```json
{
  "name": "string",
  "status": "disabled",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the automation.|
|status|string|false|none|The initial status of the automation. Defaults to `disabled`.|
|steps|[[AutomationStep](#schemaautomationstep)]|true|none|The steps that compose the automation workflow. Must include at least one `trigger` step.|
|connections|[[AutomationConnection](#schemaautomationconnection)]|true|none|The connections between steps in the automation graph.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_CreateAutomationResponse">CreateAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateautomationresponse"></a>
<a id="schema_CreateAutomationResponse"></a>
<a id="tocScreateautomationresponse"></a>
<a id="tocscreateautomationresponse"></a>

```json
{
  "object": "automation",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the created automation.|

<h2 id="tocS_Automation">Automation</h2>
<!-- backwards compatibility -->
<a id="schemaautomation"></a>
<a id="schema_Automation"></a>
<a id="tocSautomation"></a>
<a id="tocsautomation"></a>

```json
{
  "object": "automation",
  "id": "string",
  "name": "string",
  "status": "enabled",
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the automation.|
|name|string|false|none|The name of the automation.|
|status|string|false|none|The current status of the automation.|
|created_at|string|false|none|The date and time the automation was created.|
|updated_at|string|false|none|The date and time the automation was last updated.|
|steps|[[AutomationStepResponse](#schemaautomationstepresponse)]|false|none|The steps in the active version of the automation.|
|connections|[[AutomationConnection](#schemaautomationconnection)]|false|none|The connections between steps in the active version of the automation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_AutomationListItem">AutomationListItem</h2>
<!-- backwards compatibility -->
<a id="schemaautomationlistitem"></a>
<a id="schema_AutomationListItem"></a>
<a id="tocSautomationlistitem"></a>
<a id="tocsautomationlistitem"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "enabled",
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the automation.|
|name|string|false|none|The name of the automation.|
|status|string|false|none|The current status of the automation.|
|created_at|string|false|none|The date and time the automation was created.|
|updated_at|string|false|none|The date and time the automation was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_ListAutomationsResponse">ListAutomationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistautomationsresponse"></a>
<a id="schema_ListAutomationsResponse"></a>
<a id="tocSlistautomationsresponse"></a>
<a id="tocslistautomationsresponse"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "status": "enabled",
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[AutomationListItem](#schemaautomationlistitem)]|false|none|Array of automations.|

<h2 id="tocS_PatchAutomationRequest">PatchAutomationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchautomationrequest"></a>
<a id="schema_PatchAutomationRequest"></a>
<a id="tocSpatchautomationrequest"></a>
<a id="tocspatchautomationrequest"></a>

```json
{
  "name": "string",
  "status": "enabled",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "config": {}
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "type": "default"
    }
  ]
}
```

At least one of `name`, `status`, or `steps` and `connections` must be provided. When updating the workflow graph, both `steps` and `connections` must be provided together.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the automation.|
|status|string|false|none|The status of the automation.|
|steps|[[AutomationStep](#schemaautomationstep)]|false|none|The steps that compose the automation workflow. Must be provided together with `connections`.|
|connections|[[AutomationConnection](#schemaautomationconnection)]|false|none|The connections between steps in the automation graph. Must be provided together with `steps`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_PatchAutomationResponse">PatchAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatchautomationresponse"></a>
<a id="schema_PatchAutomationResponse"></a>
<a id="tocSpatchautomationresponse"></a>
<a id="tocspatchautomationresponse"></a>

```json
{
  "object": "automation",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the updated automation.|

<h2 id="tocS_DeleteAutomationResponse">DeleteAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautomationresponse"></a>
<a id="schema_DeleteAutomationResponse"></a>
<a id="tocSdeleteautomationresponse"></a>
<a id="tocsdeleteautomationresponse"></a>

```json
{
  "object": "automation",
  "id": "string",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the deleted automation.|
|deleted|boolean|false|none|Indicates whether the automation was successfully deleted.|

<h2 id="tocS_DuplicateAutomationResponse">DuplicateAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateautomationresponse"></a>
<a id="schema_DuplicateAutomationResponse"></a>
<a id="tocSduplicateautomationresponse"></a>
<a id="tocsduplicateautomationresponse"></a>

```json
{
  "object": "automation",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the duplicated automation.|

<h2 id="tocS_StopAutomationResponse">StopAutomationResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopautomationresponse"></a>
<a id="schema_StopAutomationResponse"></a>
<a id="tocSstopautomationresponse"></a>
<a id="tocsstopautomationresponse"></a>

```json
{
  "object": "automation",
  "id": "string",
  "status": "disabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the stopped automation.|
|status|string|false|none|The status of the automation after stopping.|

<h2 id="tocS_AutomationRunStep">AutomationRunStep</h2>
<!-- backwards compatibility -->
<a id="schemaautomationrunstep"></a>
<a id="schema_AutomationRunStep"></a>
<a id="tocSautomationrunstep"></a>
<a id="tocsautomationrunstep"></a>

```json
{
  "key": "string",
  "type": "trigger",
  "status": "string",
  "started_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:47:56.678+00",
  "output": {},
  "error": {},
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

A step execution within an automation run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the automation step.|
|type|string|false|none|The type of automation step.|
|status|string|false|none|The execution status of this step.|
|started_at|string \| null|false|none|The date and time the step started executing.|
|completed_at|string \| null|false|none|The date and time the step completed executing.|
|output|object \| null|false|none|The output produced by the step, if any.|
|error|object \| null|false|none|The error produced by the step, if any.|
|created_at|string|false|none|The date and time the step record was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|trigger|
|type|send_email|
|type|delay|
|type|wait_for_event|
|type|condition|
|type|contact_update|
|type|contact_delete|
|type|add_to_segment|

<h2 id="tocS_AutomationRun">AutomationRun</h2>
<!-- backwards compatibility -->
<a id="schemaautomationrun"></a>
<a id="schema_AutomationRun"></a>
<a id="tocSautomationrun"></a>
<a id="tocsautomationrun"></a>

```json
{
  "object": "automation_run",
  "id": "string",
  "status": "running",
  "started_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:47:56.678+00",
  "created_at": "2023-10-06 23:47:56.678+00",
  "steps": [
    {
      "key": "string",
      "type": "trigger",
      "status": "string",
      "started_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:47:56.678+00",
      "output": {},
      "error": {},
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|The ID of the automation run.|
|status|string|false|none|The current status of the automation run.|
|started_at|string \| null|false|none|The date and time the run started.|
|completed_at|string \| null|false|none|The date and time the run completed.|
|created_at|string|false|none|The date and time the run was created.|
|steps|[[AutomationRunStep](#schemaautomationrunstep)]|false|none|The steps executed in this run, sorted in graph order.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_AutomationRunListItem">AutomationRunListItem</h2>
<!-- backwards compatibility -->
<a id="schemaautomationrunlistitem"></a>
<a id="schema_AutomationRunListItem"></a>
<a id="tocSautomationrunlistitem"></a>
<a id="tocsautomationrunlistitem"></a>

```json
{
  "id": "string",
  "status": "running",
  "started_at": "2023-10-06 23:47:56.678+00",
  "completed_at": "2023-10-06 23:47:56.678+00",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the automation run.|
|status|string|false|none|The current status of the automation run.|
|started_at|string \| null|false|none|The date and time the run started.|
|completed_at|string \| null|false|none|The date and time the run completed.|
|created_at|string|false|none|The date and time the run was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_ListAutomationRunsResponse">ListAutomationRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistautomationrunsresponse"></a>
<a id="schema_ListAutomationRunsResponse"></a>
<a id="tocSlistautomationrunsresponse"></a>
<a id="tocslistautomationrunsresponse"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "string",
      "status": "running",
      "started_at": "2023-10-06 23:47:56.678+00",
      "completed_at": "2023-10-06 23:47:56.678+00",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[AutomationRunListItem](#schemaautomationrunlistitem)]|false|none|Array of automation runs.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schema": {},
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|The event ID.|
|name|string|false|none|The event name.|
|schema|object \| null|false|none|A flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.|
|created_at|string|false|none|The date and time the event was created.|
|updated_at|string \| null|false|none|The date and time the event was last updated.|

<h2 id="tocS_EventSummary">EventSummary</h2>
<!-- backwards compatibility -->
<a id="schemaeventsummary"></a>
<a id="schema_EventSummary"></a>
<a id="tocSeventsummary"></a>
<a id="tocseventsummary"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schema": {},
  "created_at": "2023-10-06 23:47:56.678+00",
  "updated_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|The event ID.|
|name|string|false|none|The event name.|
|schema|object \| null|false|none|A flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.|
|created_at|string|false|none|The date and time the event was created.|
|updated_at|string \| null|false|none|The date and time the event was last updated.|

<h2 id="tocS_CreateEventRequest">CreateEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventrequest"></a>
<a id="schema_CreateEventRequest"></a>
<a id="tocScreateeventrequest"></a>
<a id="tocscreateeventrequest"></a>

```json
{
  "name": "string",
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the event. Cannot start with the reserved `resend:` prefix.|
|schema|object \| null|false|none|An optional flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.|

<h2 id="tocS_CreateEventResponse">CreateEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateeventresponse"></a>
<a id="schema_CreateEventResponse"></a>
<a id="tocScreateeventresponse"></a>
<a id="tocscreateeventresponse"></a>

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|The ID of the created event.|

<h2 id="tocS_ListEventsResponse">ListEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsresponse"></a>
<a id="schema_ListEventsResponse"></a>
<a id="tocSlisteventsresponse"></a>
<a id="tocslisteventsresponse"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "schema": {},
      "created_at": "2023-10-06 23:47:56.678+00",
      "updated_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[[EventSummary](#schemaeventsummary)]|false|none|Array containing event information.|

<h2 id="tocS_UpdateEventRequest">UpdateEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventrequest"></a>
<a id="schema_UpdateEventRequest"></a>
<a id="tocSupdateeventrequest"></a>
<a id="tocsupdateeventrequest"></a>

```json
{
  "schema": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|object \| null|true|none|A flat key/type map defining the event payload schema. Set to `null` to clear the schema. Supported types are `string`, `number`, `boolean`, and `date`.|

<h2 id="tocS_UpdateEventResponse">UpdateEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateeventresponse"></a>
<a id="schema_UpdateEventResponse"></a>
<a id="tocSupdateeventresponse"></a>
<a id="tocsupdateeventresponse"></a>

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|The ID of the updated event.|

<h2 id="tocS_RemoveEventResponse">RemoveEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaremoveeventresponse"></a>
<a id="schema_RemoveEventResponse"></a>
<a id="tocSremoveeventresponse"></a>
<a id="tocsremoveeventresponse"></a>

```json
{
  "object": "event",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string(uuid)|false|none|The ID of the deleted event.|
|deleted|boolean|false|none|Indicates whether the event was deleted.|

<h2 id="tocS_SendEventRequest">SendEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendeventrequest"></a>
<a id="schema_SendEventRequest"></a>
<a id="tocSsendeventrequest"></a>
<a id="tocssendeventrequest"></a>

```json
{
  "event": "string",
  "contact_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com",
  "payload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|The name of the event to send.|
|contact_id|string(uuid)|false|none|The ID of the contact to associate with this event. Exactly one of `contact_id` or `email` must be provided.|
|email|string(email)|false|none|The email address to associate with this event. Exactly one of `contact_id` or `email` must be provided.|
|payload|object|false|none|An optional payload of key/value pairs to include with the event.|

<h2 id="tocS_SendEventResponse">SendEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendeventresponse"></a>
<a id="schema_SendEventResponse"></a>
<a id="tocSsendeventresponse"></a>
<a id="tocssendeventresponse"></a>

```json
{
  "object": "event",
  "event": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|event|string|false|none|The name of the event that was sent.|

<h2 id="tocS_WebhookEventBounce">WebhookEventBounce</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventbounce"></a>
<a id="schema_WebhookEventBounce"></a>
<a id="tocSwebhookeventbounce"></a>
<a id="tocswebhookeventbounce"></a>

```json
{
  "diagnosticCode": [
    "string"
  ],
  "message": "string",
  "subType": "Undetermined",
  "type": "Undetermined"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnosticCode|[string]|true|none|Array of SMTP diagnostic responses from the receiving server, one entry per recipient (e.g., `smtp; 550 5.1.1 user unknown`).|
|message|string|true|none|Detailed bounce message describing why the email bounced.|
|subType|string|true|none|Bounce sub-type.|
|type|string|true|none|Bounce type.|

#### Enumerated Values

|Property|Value|
|---|---|
|subType|Undetermined|
|subType|General|
|subType|NoEmail|
|subType|MailboxFull|
|subType|MessageTooLarge|
|subType|ContentRejected|
|subType|AttachmentRejected|
|type|Undetermined|
|type|Transient|
|type|Permanent|

<h2 id="tocS_WebhookEventClick">WebhookEventClick</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventclick"></a>
<a id="schema_WebhookEventClick"></a>
<a id="tocSwebhookeventclick"></a>
<a id="tocswebhookeventclick"></a>

```json
{
  "ipAddress": "string",
  "link": "string",
  "timestamp": "2023-10-06T23:47:56.678Z",
  "userAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|true|none|IP address of the user who clicked the link.|
|link|string|true|none|The URL that was clicked.|
|timestamp|string(date-time)|true|none|Timestamp when the click occurred.|
|userAgent|string|true|none|User agent string of the browser that clicked the link.|

<h2 id="tocS_WebhookEventFailed">WebhookEventFailed</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventfailed"></a>
<a id="schema_WebhookEventFailed"></a>
<a id="tocSwebhookeventfailed"></a>
<a id="tocswebhookeventfailed"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|Reason for the email failure (e.g., `reached_daily_quota`).|

<h2 id="tocS_WebhookEventSuppressed">WebhookEventSuppressed</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventsuppressed"></a>
<a id="schema_WebhookEventSuppressed"></a>
<a id="tocSwebhookeventsuppressed"></a>
<a id="tocswebhookeventsuppressed"></a>

```json
{
  "diagnosticCode": [
    "string"
  ],
  "message": "string",
  "reason": "previous_bounce",
  "type": "Suppressed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnosticCode|[string]|true|none|Array of SMTP diagnostic responses from the receiving server, one entry per recipient.|
|message|string|true|none|Detailed suppression message describing why the email was suppressed.|
|reason|string|true|none|Reason the address is suppressed.|
|type|string|true|none|Suppression type.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|previous_bounce|
|reason|previous_complaint|
|type|Suppressed|
|type|OnAccountSuppressionList|

<h2 id="tocS_WebhookEventAttachment">WebhookEventAttachment</h2>
<!-- backwards compatibility -->
<a id="schemawebhookeventattachment"></a>
<a id="schema_WebhookEventAttachment"></a>
<a id="tocSwebhookeventattachment"></a>
<a id="tocswebhookeventattachment"></a>

```json
{
  "id": "string",
  "filename": "string",
  "content_type": "string",
  "content_disposition": "string",
  "content_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the attachment.|
|filename|string|false|none|The filename of the attachment.|
|content_type|string|false|none|The MIME type of the attachment.|
|content_disposition|string|false|none|The content disposition (e.g., `inline` or `attachment`).|
|content_id|string|false|none|Content-ID header used for referencing inline images.|

<h2 id="tocS_WebhookDomainRecord">WebhookDomainRecord</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdomainrecord"></a>
<a id="schema_WebhookDomainRecord"></a>
<a id="tocSwebhookdomainrecord"></a>
<a id="tocswebhookdomainrecord"></a>

```json
{
  "record": "SPF",
  "name": "string",
  "value": "string",
  "type": "MX",
  "ttl": "string",
  "status": "pending",
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|record|string|true|none|The purpose of the DNS record (SPF and DKIM for sending; Receiving MX for inbound emails; Tracking and TrackingCAA for click and open tracking).|
|name|string|true|none|DNS record name or subdomain.|
|value|string|true|none|DNS record value to be set.|
|type|string|true|none|DNS record type.|
|ttl|string|true|none|Time to live for the DNS record (e.g., `Auto`, `60`).|
|status|string|true|none|Verification status of this specific record.|
|priority|integer|false|none|Priority value (only applicable for MX records).|

#### Enumerated Values

|Property|Value|
|---|---|
|record|SPF|
|record|DKIM|
|record|Receiving MX|
|record|Tracking|
|record|TrackingCAA|
|type|MX|
|type|TXT|
|type|CNAME|
|type|CAA|
|status|pending|
|status|verified|
|status|failed|
|status|temporary_failure|
|status|not_started|

<h2 id="tocS_OutboundEmailEventData">OutboundEmailEventData</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundemaileventdata"></a>
<a id="schema_OutboundEmailEventData"></a>
<a id="tocSoutboundemaileventdata"></a>
<a id="tocsoutboundemaileventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "broadcast_id": "string",
  "template_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was created.|
|from|string|true|none|Sender email address and name in the format `Name <email@domain.com>`.|
|to|[string]|true|none|Array of impacted recipient email addresses.|
|subject|string|true|none|Email subject line.|
|broadcast_id|string|false|none|Unique identifier for the broadcast campaign, if applicable.|
|template_id|string|false|none|Unique identifier for the template used, if applicable.|
|tags|object|false|none|Tag key-value pairs associated with the email.|
|headers|[object]|false|none|Custom headers included with the email (omitted when no custom headers are set).|

<h2 id="tocS_EmailBouncedEventData">EmailBouncedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaemailbouncedeventdata"></a>
<a id="schema_EmailBouncedEventData"></a>
<a id="tocSemailbouncedeventdata"></a>
<a id="tocsemailbouncedeventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "broadcast_id": "string",
  "template_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "bounce": {
    "diagnosticCode": [
      "string"
    ],
    "message": "string",
    "subType": "Undetermined",
    "type": "Undetermined"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was created.|
|from|string|true|none|Sender email address and name in the format `Name <email@domain.com>`.|
|to|[string]|true|none|Array of impacted recipient email addresses.|
|subject|string|true|none|Email subject line.|
|broadcast_id|string|false|none|Unique identifier for the broadcast campaign, if applicable.|
|template_id|string|false|none|Unique identifier for the template used, if applicable.|
|tags|object|false|none|Tag key-value pairs associated with the email.|
|headers|[object]|false|none|Custom headers included with the email (omitted when no custom headers are set).|
|bounce|[WebhookEventBounce](#schemawebhookeventbounce)|true|none|none|

<h2 id="tocS_EmailClickedEventData">EmailClickedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaemailclickedeventdata"></a>
<a id="schema_EmailClickedEventData"></a>
<a id="tocSemailclickedeventdata"></a>
<a id="tocsemailclickedeventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "broadcast_id": "string",
  "template_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "click": {
    "ipAddress": "string",
    "link": "string",
    "timestamp": "2023-10-06T23:47:56.678Z",
    "userAgent": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was created.|
|from|string|true|none|Sender email address and name in the format `Name <email@domain.com>`.|
|to|[string]|true|none|Array of impacted recipient email addresses.|
|subject|string|true|none|Email subject line.|
|broadcast_id|string|false|none|Unique identifier for the broadcast campaign, if applicable.|
|template_id|string|false|none|Unique identifier for the template used, if applicable.|
|tags|object|false|none|Tag key-value pairs associated with the email.|
|headers|[object]|false|none|Custom headers included with the email (omitted when no custom headers are set).|
|click|[WebhookEventClick](#schemawebhookeventclick)|true|none|none|

<h2 id="tocS_EmailFailedEventData">EmailFailedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaemailfailedeventdata"></a>
<a id="schema_EmailFailedEventData"></a>
<a id="tocSemailfailedeventdata"></a>
<a id="tocsemailfailedeventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "broadcast_id": "string",
  "template_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "failed": {
    "reason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was created.|
|from|string|true|none|Sender email address and name in the format `Name <email@domain.com>`.|
|to|[string]|true|none|Array of impacted recipient email addresses.|
|subject|string|true|none|Email subject line.|
|broadcast_id|string|false|none|Unique identifier for the broadcast campaign, if applicable.|
|template_id|string|false|none|Unique identifier for the template used, if applicable.|
|tags|object|false|none|Tag key-value pairs associated with the email.|
|headers|[object]|false|none|Custom headers included with the email (omitted when no custom headers are set).|
|failed|[WebhookEventFailed](#schemawebhookeventfailed)|true|none|none|

<h2 id="tocS_EmailSuppressedEventData">EmailSuppressedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaemailsuppressedeventdata"></a>
<a id="schema_EmailSuppressedEventData"></a>
<a id="tocSemailsuppressedeventdata"></a>
<a id="tocsemailsuppressedeventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "broadcast_id": "string",
  "template_id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "suppressed": {
    "diagnosticCode": [
      "string"
    ],
    "message": "string",
    "reason": "previous_bounce",
    "type": "Suppressed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was created.|
|from|string|true|none|Sender email address and name in the format `Name <email@domain.com>`.|
|to|[string]|true|none|Array of impacted recipient email addresses.|
|subject|string|true|none|Email subject line.|
|broadcast_id|string|false|none|Unique identifier for the broadcast campaign, if applicable.|
|template_id|string|false|none|Unique identifier for the template used, if applicable.|
|tags|object|false|none|Tag key-value pairs associated with the email.|
|headers|[object]|false|none|Custom headers included with the email (omitted when no custom headers are set).|
|suppressed|[WebhookEventSuppressed](#schemawebhookeventsuppressed)|true|none|none|

<h2 id="tocS_EmailReceivedEventData">EmailReceivedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaemailreceivedeventdata"></a>
<a id="schema_EmailReceivedEventData"></a>
<a id="tocSemailreceivedeventdata"></a>
<a id="tocsemailreceivedeventdata"></a>

```json
{
  "email_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z",
  "from": "string",
  "to": [
    "string"
  ],
  "subject": "string",
  "message_id": "string",
  "bcc": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "received_for": [
    "forwarded@example.com"
  ],
  "attachments": [
    {
      "id": "string",
      "filename": "string",
      "content_type": "string",
      "content_disposition": "string",
      "content_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_id|string|true|none|Unique identifier for the email.|
|created_at|string(date-time)|true|none|Timestamp when the email was received.|
|from|string|true|none|Sender email address.|
|to|[string]|true|none|Array of recipient email addresses.|
|subject|string|true|none|Email subject line.|
|message_id|string|true|none|The unique message ID from the email headers.|
|bcc|[string]|true|none|BCC recipients.|
|cc|[string]|true|none|CC recipients.|
|received_for|[string]|false|none|The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers.|
|attachments|[[WebhookEventAttachment](#schemawebhookeventattachment)]|true|none|Array of attachment metadata.|

<h2 id="tocS_ContactEventData">ContactEventData</h2>
<!-- backwards compatibility -->
<a id="schemacontacteventdata"></a>
<a id="schema_ContactEventData"></a>
<a id="tocScontacteventdata"></a>
<a id="tocscontacteventdata"></a>

```json
{
  "id": "string",
  "audience_id": "string",
  "segment_ids": [
    "string"
  ],
  "created_at": "2023-10-06T23:47:56.678Z",
  "updated_at": "2023-10-06T23:47:56.678Z",
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "unsubscribed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the contact.|
|audience_id|string|false|none|Unique identifier for the audience this contact belongs to.|
|segment_ids|[string]|false|none|Array of segment IDs the contact belongs to.|
|created_at|string(date-time)|true|none|Timestamp when the contact was created.|
|updated_at|string(date-time)|true|none|Timestamp when the contact was last updated.|
|email|string|true|none|Contact's email address.|
|first_name|string \| null|false|none|Contact's first name.|
|last_name|string \| null|false|none|Contact's last name.|
|unsubscribed|boolean|true|none|Whether the contact has unsubscribed from all emails sent from your team.|

<h2 id="tocS_ContactTopicsEventData">ContactTopicsEventData</h2>
<!-- backwards compatibility -->
<a id="schemacontacttopicseventdata"></a>
<a id="schema_ContactTopicsEventData"></a>
<a id="tocScontacttopicseventdata"></a>
<a id="tocscontacttopicseventdata"></a>

```json
{
  "email": "string",
  "topics": [
    {
      "id": "string",
      "subscription": "opt_in"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Contact's email address.|
|topics|[object]|true|none|Topics whose subscription changed in this update.|

<h2 id="tocS_DomainEventData">DomainEventData</h2>
<!-- backwards compatibility -->
<a id="schemadomaineventdata"></a>
<a id="schema_DomainEventData"></a>
<a id="tocSdomaineventdata"></a>
<a id="tocsdomaineventdata"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "verified",
  "created_at": "2023-10-06T23:47:56.678Z",
  "region": "us-east-1",
  "records": [
    {
      "record": "SPF",
      "name": "string",
      "value": "string",
      "type": "MX",
      "ttl": "string",
      "status": "pending",
      "priority": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the domain.|
|name|string|true|none|The domain name (e.g., `example.com`).|
|status|string|true|none|Aggregated verification status of the domain.|
|created_at|string(date-time)|true|none|Timestamp when the domain was created.|
|region|string|true|none|AWS region where the domain is configured.|
|records|[[WebhookDomainRecord](#schemawebhookdomainrecord)]|true|none|DNS records required for domain verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|verified|
|status|partially_verified|
|status|partially_failed|
|status|failed|
|status|pending|
|status|not_started|
|region|us-east-1|
|region|eu-west-1|
|region|sa-east-1|
|region|ap-northeast-1|

<h2 id="tocS_SuppressionEventData">SuppressionEventData</h2>
<!-- backwards compatibility -->
<a id="schemasuppressioneventdata"></a>
<a id="schema_SuppressionEventData"></a>
<a id="tocSsuppressioneventdata"></a>
<a id="tocssuppressioneventdata"></a>

```json
{
  "id": "string",
  "email": "string",
  "origin": "bounce",
  "source_id": "string",
  "created_at": "2023-10-06T23:47:56.678Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the suppression.|
|email|string|true|none|Email address that is suppressed.|
|origin|string|true|none|Origin of the suppression.|
|source_id|string \| null|true|none|Identifier of the event that caused the suppression, such as the email that bounced or complained. Null for manually added suppressions.|
|created_at|string(date-time)|true|none|Timestamp when the suppression was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|origin|bounce|
|origin|complaint|
|origin|manual|

<h2 id="tocS_TopicEventData">TopicEventData</h2>
<!-- backwards compatibility -->
<a id="schematopiceventdata"></a>
<a id="schema_TopicEventData"></a>
<a id="tocStopiceventdata"></a>
<a id="tocstopiceventdata"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "default_subscription": "opt_in",
  "deleted": true,
  "created_at": "2023-10-06T23:47:56.678Z",
  "updated_at": "2023-10-06T23:47:56.678Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the topic.|
|name|string|true|none|The name of the topic.|
|description|string \| null|true|none|A description of the topic.|
|default_subscription|string|true|none|The default subscription status for the topic.|
|deleted|boolean|true|none|Whether the topic has been deleted.|
|created_at|string(date-time)|true|none|Timestamp when the topic was created.|
|updated_at|string(date-time)|true|none|Timestamp when the topic was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|default_subscription|opt_in|
|default_subscription|opt_out|

<h2 id="tocS_EmailSentEvent">EmailSentEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailsentevent"></a>
<a id="schema_EmailSentEvent"></a>
<a id="tocSemailsentevent"></a>
<a id="tocsemailsentevent"></a>

```json
{
  "type": "email.sent",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailDeliveredEvent">EmailDeliveredEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemaildeliveredevent"></a>
<a id="schema_EmailDeliveredEvent"></a>
<a id="tocSemaildeliveredevent"></a>
<a id="tocsemaildeliveredevent"></a>

```json
{
  "type": "email.delivered",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailDeliveryDelayedEvent">EmailDeliveryDelayedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemaildeliverydelayedevent"></a>
<a id="schema_EmailDeliveryDelayedEvent"></a>
<a id="tocSemaildeliverydelayedevent"></a>
<a id="tocsemaildeliverydelayedevent"></a>

```json
{
  "type": "email.delivery_delayed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailBouncedEvent">EmailBouncedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailbouncedevent"></a>
<a id="schema_EmailBouncedEvent"></a>
<a id="tocSemailbouncedevent"></a>
<a id="tocsemailbouncedevent"></a>

```json
{
  "type": "email.bounced",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "bounce": {
      "diagnosticCode": [
        "string"
      ],
      "message": "string",
      "subType": "Undetermined",
      "type": "Undetermined"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[EmailBouncedEventData](#schemaemailbouncedeventdata)|true|none|none|

<h2 id="tocS_EmailComplainedEvent">EmailComplainedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailcomplainedevent"></a>
<a id="schema_EmailComplainedEvent"></a>
<a id="tocSemailcomplainedevent"></a>
<a id="tocsemailcomplainedevent"></a>

```json
{
  "type": "email.complained",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailOpenedEvent">EmailOpenedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailopenedevent"></a>
<a id="schema_EmailOpenedEvent"></a>
<a id="tocSemailopenedevent"></a>
<a id="tocsemailopenedevent"></a>

```json
{
  "type": "email.opened",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailClickedEvent">EmailClickedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailclickedevent"></a>
<a id="schema_EmailClickedEvent"></a>
<a id="tocSemailclickedevent"></a>
<a id="tocsemailclickedevent"></a>

```json
{
  "type": "email.clicked",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "click": {
      "ipAddress": "string",
      "link": "string",
      "timestamp": "2023-10-06T23:47:56.678Z",
      "userAgent": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[EmailClickedEventData](#schemaemailclickedeventdata)|true|none|none|

<h2 id="tocS_EmailFailedEvent">EmailFailedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailfailedevent"></a>
<a id="schema_EmailFailedEvent"></a>
<a id="tocSemailfailedevent"></a>
<a id="tocsemailfailedevent"></a>

```json
{
  "type": "email.failed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "failed": {
      "reason": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[EmailFailedEventData](#schemaemailfailedeventdata)|true|none|none|

<h2 id="tocS_EmailScheduledEvent">EmailScheduledEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailscheduledevent"></a>
<a id="schema_EmailScheduledEvent"></a>
<a id="tocSemailscheduledevent"></a>
<a id="tocsemailscheduledevent"></a>

```json
{
  "type": "email.scheduled",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[OutboundEmailEventData](#schemaoutboundemaileventdata)|true|none|none|

<h2 id="tocS_EmailSuppressedEvent">EmailSuppressedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailsuppressedevent"></a>
<a id="schema_EmailSuppressedEvent"></a>
<a id="tocSemailsuppressedevent"></a>
<a id="tocsemailsuppressedevent"></a>

```json
{
  "type": "email.suppressed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "broadcast_id": "string",
    "template_id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "suppressed": {
      "diagnosticCode": [
        "string"
      ],
      "message": "string",
      "reason": "previous_bounce",
      "type": "Suppressed"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[EmailSuppressedEventData](#schemaemailsuppressedeventdata)|true|none|none|

<h2 id="tocS_EmailReceivedEvent">EmailReceivedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaemailreceivedevent"></a>
<a id="schema_EmailReceivedEvent"></a>
<a id="tocSemailreceivedevent"></a>
<a id="tocsemailreceivedevent"></a>

```json
{
  "type": "email.received",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z",
    "from": "string",
    "to": [
      "string"
    ],
    "subject": "string",
    "message_id": "string",
    "bcc": [
      "string"
    ],
    "cc": [
      "string"
    ],
    "received_for": [
      "forwarded@example.com"
    ],
    "attachments": [
      {
        "id": "string",
        "filename": "string",
        "content_type": "string",
        "content_disposition": "string",
        "content_id": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[EmailReceivedEventData](#schemaemailreceivedeventdata)|true|none|none|

<h2 id="tocS_ContactCreatedEvent">ContactCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontactcreatedevent"></a>
<a id="schema_ContactCreatedEvent"></a>
<a id="tocScontactcreatedevent"></a>
<a id="tocscontactcreatedevent"></a>

```json
{
  "type": "contact.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[ContactEventData](#schemacontacteventdata)|true|none|none|

<h2 id="tocS_ContactUpdatedEvent">ContactUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontactupdatedevent"></a>
<a id="schema_ContactUpdatedEvent"></a>
<a id="tocScontactupdatedevent"></a>
<a id="tocscontactupdatedevent"></a>

```json
{
  "type": "contact.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[ContactEventData](#schemacontacteventdata)|true|none|none|

<h2 id="tocS_ContactDeletedEvent">ContactDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontactdeletedevent"></a>
<a id="schema_ContactDeletedEvent"></a>
<a id="tocScontactdeletedevent"></a>
<a id="tocscontactdeletedevent"></a>

```json
{
  "type": "contact.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "audience_id": "string",
    "segment_ids": [
      "string"
    ],
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z",
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "unsubscribed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[ContactEventData](#schemacontacteventdata)|true|none|none|

<h2 id="tocS_ContactTopicsUpdatedEvent">ContactTopicsUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemacontacttopicsupdatedevent"></a>
<a id="schema_ContactTopicsUpdatedEvent"></a>
<a id="tocScontacttopicsupdatedevent"></a>
<a id="tocscontacttopicsupdatedevent"></a>

```json
{
  "type": "contact.topics.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "email": "string",
    "topics": [
      {
        "id": "string",
        "subscription": "opt_in"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[ContactTopicsEventData](#schemacontacttopicseventdata)|true|none|none|

<h2 id="tocS_DomainCreatedEvent">DomainCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadomaincreatedevent"></a>
<a id="schema_DomainCreatedEvent"></a>
<a id="tocSdomaincreatedevent"></a>
<a id="tocsdomaincreatedevent"></a>

```json
{
  "type": "domain.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[DomainEventData](#schemadomaineventdata)|true|none|none|

<h2 id="tocS_DomainUpdatedEvent">DomainUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadomainupdatedevent"></a>
<a id="schema_DomainUpdatedEvent"></a>
<a id="tocSdomainupdatedevent"></a>
<a id="tocsdomainupdatedevent"></a>

```json
{
  "type": "domain.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[DomainEventData](#schemadomaineventdata)|true|none|none|

<h2 id="tocS_DomainDeletedEvent">DomainDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeletedevent"></a>
<a id="schema_DomainDeletedEvent"></a>
<a id="tocSdomaindeletedevent"></a>
<a id="tocsdomaindeletedevent"></a>

```json
{
  "type": "domain.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "status": "verified",
    "created_at": "2023-10-06T23:47:56.678Z",
    "region": "us-east-1",
    "records": [
      {
        "record": "SPF",
        "name": "string",
        "value": "string",
        "type": "MX",
        "ttl": "string",
        "status": "pending",
        "priority": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[DomainEventData](#schemadomaineventdata)|true|none|none|

<h2 id="tocS_SuppressionAddedEvent">SuppressionAddedEvent</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionaddedevent"></a>
<a id="schema_SuppressionAddedEvent"></a>
<a id="tocSsuppressionaddedevent"></a>
<a id="tocssuppressionaddedevent"></a>

```json
{
  "type": "suppression.added",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "email": "string",
    "origin": "bounce",
    "source_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[SuppressionEventData](#schemasuppressioneventdata)|true|none|none|

<h2 id="tocS_SuppressionRemovedEvent">SuppressionRemovedEvent</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionremovedevent"></a>
<a id="schema_SuppressionRemovedEvent"></a>
<a id="tocSsuppressionremovedevent"></a>
<a id="tocssuppressionremovedevent"></a>

```json
{
  "type": "suppression.removed",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "email": "string",
    "origin": "bounce",
    "source_id": "string",
    "created_at": "2023-10-06T23:47:56.678Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[SuppressionEventData](#schemasuppressioneventdata)|true|none|none|

<h2 id="tocS_TopicCreatedEvent">TopicCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schematopiccreatedevent"></a>
<a id="schema_TopicCreatedEvent"></a>
<a id="tocStopiccreatedevent"></a>
<a id="tocstopiccreatedevent"></a>

```json
{
  "type": "topic.created",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[TopicEventData](#schematopiceventdata)|true|none|none|

<h2 id="tocS_TopicUpdatedEvent">TopicUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schematopicupdatedevent"></a>
<a id="schema_TopicUpdatedEvent"></a>
<a id="tocStopicupdatedevent"></a>
<a id="tocstopicupdatedevent"></a>

```json
{
  "type": "topic.updated",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[TopicEventData](#schematopiceventdata)|true|none|none|

<h2 id="tocS_TopicDeletedEvent">TopicDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schematopicdeletedevent"></a>
<a id="schema_TopicDeletedEvent"></a>
<a id="tocStopicdeletedevent"></a>
<a id="tocstopicdeletedevent"></a>

```json
{
  "type": "topic.deleted",
  "created_at": "2023-10-06T23:47:56.678Z",
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "default_subscription": "opt_in",
    "deleted": true,
    "created_at": "2023-10-06T23:47:56.678Z",
    "updated_at": "2023-10-06T23:47:56.678Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[TopicEventData](#schematopiceventdata)|true|none|none|

<h2 id="tocS_CreateSuppressionOptions">CreateSuppressionOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatesuppressionoptions"></a>
<a id="schema_CreateSuppressionOptions"></a>
<a id="tocScreatesuppressionoptions"></a>
<a id="tocscreatesuppressionoptions"></a>

```json
{
  "email": "steve.wozniak@gmail.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address to suppress.|

<h2 id="tocS_CreateSuppressionResponseSuccess">CreateSuppressionResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreatesuppressionresponsesuccess"></a>
<a id="schema_CreateSuppressionResponseSuccess"></a>
<a id="tocScreatesuppressionresponsesuccess"></a>
<a id="tocscreatesuppressionresponsesuccess"></a>

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the created suppression.|

<h2 id="tocS_BatchAddSuppressionsOptions">BatchAddSuppressionsOptions</h2>
<!-- backwards compatibility -->
<a id="schemabatchaddsuppressionsoptions"></a>
<a id="schema_BatchAddSuppressionsOptions"></a>
<a id="tocSbatchaddsuppressionsoptions"></a>
<a id="tocsbatchaddsuppressionsoptions"></a>

```json
{
  "emails": [
    "steve.wozniak@gmail.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|true|none|Email addresses to suppress.|

<h2 id="tocS_BatchAddSuppressionsResponseSuccess">BatchAddSuppressionsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemabatchaddsuppressionsresponsesuccess"></a>
<a id="schema_BatchAddSuppressionsResponseSuccess"></a>
<a id="tocSbatchaddsuppressionsresponsesuccess"></a>
<a id="tocsbatchaddsuppressionsresponsesuccess"></a>

```json
{
  "data": [
    {
      "object": "suppression",
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array containing the created suppressions.|

<h2 id="tocS_BatchRemoveSuppressionsOptions">BatchRemoveSuppressionsOptions</h2>
<!-- backwards compatibility -->
<a id="schemabatchremovesuppressionsoptions"></a>
<a id="schema_BatchRemoveSuppressionsOptions"></a>
<a id="tocSbatchremovesuppressionsoptions"></a>
<a id="tocsbatchremovesuppressionsoptions"></a>

```json
{
  "emails": [
    "steve.wozniak@gmail.com"
  ],
  "ids": [
    "e169aa45-1ecf-4183-9955-b1499d5701d3"
  ]
}
```

Provide either `emails` or `ids`, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|Email addresses to remove from the suppression list.|
|ids|[string]|false|none|Suppression IDs to remove from the suppression list.|

<h2 id="tocS_BatchRemoveSuppressionsResponseSuccess">BatchRemoveSuppressionsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemabatchremovesuppressionsresponsesuccess"></a>
<a id="schema_BatchRemoveSuppressionsResponseSuccess"></a>
<a id="tocSbatchremovesuppressionsresponsesuccess"></a>
<a id="tocsbatchremovesuppressionsresponsesuccess"></a>

```json
{
  "data": [
    {
      "object": "suppression",
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "deleted": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array containing the removed suppressions.|

<h2 id="tocS_RemoveSuppressionResponseSuccess">RemoveSuppressionResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremovesuppressionresponsesuccess"></a>
<a id="schema_RemoveSuppressionResponseSuccess"></a>
<a id="tocSremovesuppressionresponsesuccess"></a>
<a id="tocsremovesuppressionresponsesuccess"></a>

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the removed suppression.|
|deleted|boolean|false|none|Indicates whether the suppression was successfully deleted.|

<h2 id="tocS_GetSuppressionResponseSuccess">GetSuppressionResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetsuppressionresponsesuccess"></a>
<a id="schema_GetSuppressionResponseSuccess"></a>
<a id="tocSgetsuppressionresponsesuccess"></a>
<a id="tocsgetsuppressionresponsesuccess"></a>

```json
{
  "object": "suppression",
  "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
  "email": "steve.wozniak@gmail.com",
  "origin": "manual",
  "source_id": "479e3145-dd38-476b-932c-529ceb705947",
  "created_at": "2023-10-06 23:47:56.678+00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|id|string|false|none|Unique identifier for the suppression.|
|email|string|false|none|Email address that is suppressed.|
|origin|string|false|none|Origin of the suppression.|
|source_id|string \| null|false|none|Identifier of the event that caused the suppression, such as the email that bounced or complained.|
|created_at|string|false|none|Timestamp indicating when the suppression was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|origin|bounce|
|origin|complaint|
|origin|manual|

<h2 id="tocS_ListSuppressionsResponseSuccess">ListSuppressionsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistsuppressionsresponsesuccess"></a>
<a id="schema_ListSuppressionsResponseSuccess"></a>
<a id="tocSlistsuppressionsresponsesuccess"></a>
<a id="tocslistsuppressionsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "e169aa45-1ecf-4183-9955-b1499d5701d3",
      "email": "steve.wozniak@gmail.com",
      "origin": "manual",
      "source_id": "479e3145-dd38-476b-932c-529ceb705947",
      "created_at": "2023-10-06 23:47:56.678+00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|false|none|Type of the response object.|
|has_more|boolean|false|none|Indicates if there are more results available.|
|data|[object]|false|none|Array containing suppression information.|

<h2 id="tocS_Inbox">Inbox</h2>
<!-- backwards compatibility -->
<a id="schemainbox"></a>
<a id="schema_Inbox"></a>
<a id="tocSinbox"></a>
<a id="tocsinbox"></a>

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "name": "Customer Support",
  "email_address": "support@acme.com",
  "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "receiving_address": null,
  "from_name": "Ada from Support",
  "unread": 3,
  "drafts": 2,
  "last_received": "2026-08-05T14:03:11.229Z",
  "created_at": "2026-08-01T09:12:44.512Z",
  "updated_at": "2026-08-03T10:20:05.118Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox`.|
|id|string(uuid)|true|none|The ID of the inbox.|
|name|string|true|none|Internal name for the inbox. Recipients do not see it. Falls back to the inbox email address.|
|email_address|string|true|none|The address of the inbox.|
|domain_id|string(uuid)|true|none|The ID of the domain that owns the address.|
|receiving_address|string \| null|true|none|The address to forward mail to when forwarding is enabled. `null` otherwise.|
|from_name|string \| null|true|none|The name recipients see when mail is sent from this inbox. `null` when not set.|
|unread|integer|true|none|The number of unread threads in the Inbox folder.|
|drafts|integer|true|none|The number of unsent drafts.|
|last_received|string \| null(date-time)|true|none|ISO 8601 timestamp of the newest received email in the Inbox folder. `null` when the folder has no received email.|
|created_at|string(date-time)|true|none|ISO 8601 timestamp when the inbox was created.|
|updated_at|string(date-time)|true|none|ISO 8601 timestamp when the inbox was last updated.|

<h2 id="tocS_CreateInboxOptions">CreateInboxOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxoptions"></a>
<a id="schema_CreateInboxOptions"></a>
<a id="tocScreateinboxoptions"></a>
<a id="tocscreateinboxoptions"></a>

```json
{
  "email_address": "support@acme.com",
  "name": "Customer Support",
  "from_name": "Ada from Support",
  "forwarding": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string|true|none|The inbox email address on one of your domains. The API trims and lowercases it. The part before the `@` is at most 64 characters and contains only letters, numbers, and `. _ % -`. A `+` returns a 422. It cannot start or end with a dot or contain two dots in a row.|
|name|string|false|none|Internal name for the inbox. Recipients do not see it. Max 64 characters. Defaults to `email_address`.|
|from_name|string|false|none|The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string leaves it unset.|
|forwarding|boolean|false|none|When `true`, Resend provisions a receiving address so you can receive mail without adding an MX record. The address is returned in `receiving_address`.|

<h2 id="tocS_CreateInboxResponseSuccess">CreateInboxResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxresponsesuccess"></a>
<a id="schema_CreateInboxResponseSuccess"></a>
<a id="tocScreateinboxresponsesuccess"></a>
<a id="tocscreateinboxresponsesuccess"></a>

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|id|string(uuid)|true|none|The ID of the inbox.|

<h2 id="tocS_GetInboxResponseSuccess">GetInboxResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetinboxresponsesuccess"></a>
<a id="schema_GetInboxResponseSuccess"></a>
<a id="tocSgetinboxresponsesuccess"></a>
<a id="tocsgetinboxresponsesuccess"></a>

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "name": "Customer Support",
  "email_address": "support@acme.com",
  "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
  "receiving_address": null,
  "from_name": "Ada from Support",
  "unread": 3,
  "drafts": 2,
  "last_received": "2026-08-05T14:03:11.229Z",
  "created_at": "2026-08-01T09:12:44.512Z",
  "updated_at": "2026-08-03T10:20:05.118Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox`.|
|id|string(uuid)|true|none|The ID of the inbox.|
|name|string|true|none|Internal name for the inbox. Recipients do not see it. Falls back to the inbox email address.|
|email_address|string|true|none|The address of the inbox.|
|domain_id|string(uuid)|true|none|The ID of the domain that owns the address.|
|receiving_address|string \| null|true|none|The address to forward mail to when forwarding is enabled. `null` otherwise.|
|from_name|string \| null|true|none|The name recipients see when mail is sent from this inbox. `null` when not set.|
|unread|integer|true|none|The number of unread threads in the Inbox folder.|
|drafts|integer|true|none|The number of unsent drafts.|
|last_received|string \| null(date-time)|true|none|ISO 8601 timestamp of the newest received email in the Inbox folder. `null` when the folder has no received email.|
|created_at|string(date-time)|true|none|ISO 8601 timestamp when the inbox was created.|
|updated_at|string(date-time)|true|none|ISO 8601 timestamp when the inbox was last updated.|

<h2 id="tocS_ListInboxesResponseSuccess">ListInboxesResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistinboxesresponsesuccess"></a>
<a id="schema_ListInboxesResponseSuccess"></a>
<a id="tocSlistinboxesresponsesuccess"></a>
<a id="tocslistinboxesresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "from_name": "Ada from Support",
      "unread": 3,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|has_more|boolean|true|none|Indicates if there are more results available.|
|data|[object]|true|none|Array containing inbox information.|

<h2 id="tocS_UpdateInboxOptions">UpdateInboxOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxoptions"></a>
<a id="schema_UpdateInboxOptions"></a>
<a id="tocSupdateinboxoptions"></a>
<a id="tocsupdateinboxoptions"></a>

```json
{
  "name": "Customer Support",
  "from_name": "Ada from Support"
}
```

Provide at least one of `name` or `from_name`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|New internal name for the inbox. Recipients do not see it. Between 1 and 64 characters after trimming.|
|from_name|string|false|none|The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string removes it.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

<h2 id="tocS_UpdateInboxResponseSuccess">UpdateInboxResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxresponsesuccess"></a>
<a id="schema_UpdateInboxResponseSuccess"></a>
<a id="tocSupdateinboxresponsesuccess"></a>
<a id="tocsupdateinboxresponsesuccess"></a>

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the inbox.|

<h2 id="tocS_RemoveInboxResponseSuccess">RemoveInboxResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveinboxresponsesuccess"></a>
<a id="schema_RemoveInboxResponseSuccess"></a>
<a id="tocSremoveinboxresponsesuccess"></a>
<a id="tocsremoveinboxresponsesuccess"></a>

```json
{
  "object": "inbox",
  "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the inbox.|
|deleted|boolean|true|none|Indicates whether the inbox was successfully deleted.|

<h2 id="tocS_InboxAgent">InboxAgent</h2>
<!-- backwards compatibility -->
<a id="schemainboxagent"></a>
<a id="schema_InboxAgent"></a>
<a id="tocSinboxagent"></a>
<a id="tocsinboxagent"></a>

```json
{
  "object": "inbox_agent",
  "instructions": "Answer refund questions yourself. Escalate legal threats.",
  "tone": "concise_professional",
  "actions": [
    "draft_reply",
    "add_labels"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox_agent`.|
|instructions|string \| null|true|none|Instructions the agent follows when it handles the threads of the inbox. Null when no instructions are set.|
|tone|string \| null|true|none|The tone the agent writes in. Null when no tone is set.|
|actions|[string]|true|none|The actions the agent can take, in the order of the enum. Empty when no actions are enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|tone|concise_professional|
|tone|concise_casual|
|tone|expanded_professional|
|tone|expanded_casual|
|tone|null|
|actions|draft_reply|
|actions|forward_thread|
|actions|add_labels|
|actions|assign_thread|
|actions|mark_as_spam|
|actions|archive|
|actions|move_to_trash|

<h2 id="tocS_GetInboxAgentResponseSuccess">GetInboxAgentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetinboxagentresponsesuccess"></a>
<a id="schema_GetInboxAgentResponseSuccess"></a>
<a id="tocSgetinboxagentresponsesuccess"></a>
<a id="tocsgetinboxagentresponsesuccess"></a>

```json
{
  "object": "inbox_agent",
  "instructions": "Answer refund questions yourself. Escalate legal threats.",
  "tone": "concise_professional",
  "actions": [
    "draft_reply",
    "add_labels"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox_agent`.|
|instructions|string \| null|true|none|Instructions the agent follows when it handles the threads of the inbox. Null when no instructions are set.|
|tone|string \| null|true|none|The tone the agent writes in. Null when no tone is set.|
|actions|[string]|true|none|The actions the agent can take, in the order of the enum. Empty when no actions are enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|tone|concise_professional|
|tone|concise_casual|
|tone|expanded_professional|
|tone|expanded_casual|
|tone|null|
|actions|draft_reply|
|actions|forward_thread|
|actions|add_labels|
|actions|assign_thread|
|actions|mark_as_spam|
|actions|archive|
|actions|move_to_trash|

<h2 id="tocS_UpdateInboxAgentOptions">UpdateInboxAgentOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxagentoptions"></a>
<a id="schema_UpdateInboxAgentOptions"></a>
<a id="tocSupdateinboxagentoptions"></a>
<a id="tocsupdateinboxagentoptions"></a>

```json
{
  "instructions": "Answer refund questions yourself. Escalate legal threats.",
  "tone": "concise_professional",
  "actions": [
    "draft_reply",
    "add_labels"
  ]
}
```

At least one of `instructions`, `tone`, or `actions` must be provided. Omitted fields keep their current value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|string \| null|false|none|Instructions the agent follows when it handles the threads of the inbox. Max 4000 characters. Leading and trailing whitespace is trimmed, and the trimmed value must not be empty. Send null to clear the instructions.|
|tone|string \| null|false|none|The tone the agent writes in. Send null to clear the tone.|
|actions|[string]|false|none|The actions the agent can take. Replaces the whole set. Duplicates are removed. Send an empty array to disable all actions. The old names `archive_thread` and `delete_thread` return a 422. Use `archive` and `move_to_trash`.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tone|concise_professional|
|tone|concise_casual|
|tone|expanded_professional|
|tone|expanded_casual|
|tone|null|
|actions|draft_reply|
|actions|forward_thread|
|actions|add_labels|
|actions|assign_thread|
|actions|mark_as_spam|
|actions|archive|
|actions|move_to_trash|

<h2 id="tocS_UpdateInboxAgentResponseSuccess">UpdateInboxAgentResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxagentresponsesuccess"></a>
<a id="schema_UpdateInboxAgentResponseSuccess"></a>
<a id="tocSupdateinboxagentresponsesuccess"></a>
<a id="tocsupdateinboxagentresponsesuccess"></a>

```json
{
  "object": "inbox_agent",
  "id": "a1f84a4e-6f2b-4f0a-9c1d-8a2e5b3c7d90"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox_agent`.|
|id|string(uuid)|true|none|The ID of the inbox agent.|

<h2 id="tocS_InboxLabel">InboxLabel</h2>
<!-- backwards compatibility -->
<a id="schemainboxlabel"></a>
<a id="schema_InboxLabel"></a>
<a id="tocSinboxlabel"></a>
<a id="tocsinboxlabel"></a>

```json
{
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
  "name": "Urgent",
  "color": "#E93D82",
  "created_at": "2026-08-05T14:07:42.881Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the label.|
|name|string|true|none|The name of the label.|
|color|string|true|none|The color of the label, as a `#RRGGBB` hex color in uppercase.|
|created_at|string(date-time)|true|none|Timestamp when the label was created.|

<h2 id="tocS_ListInboxLabelsResponseSuccess">ListInboxLabelsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistinboxlabelsresponsesuccess"></a>
<a id="schema_ListInboxLabelsResponseSuccess"></a>
<a id="tocSlistinboxlabelsresponsesuccess"></a>
<a id="tocslistinboxlabelsresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82",
      "created_at": "2026-08-05T14:07:42.881Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|data|[[InboxLabel](#schemainboxlabel)]|true|none|The labels on the inbox, oldest first.|

<h2 id="tocS_CreateInboxLabelOptions">CreateInboxLabelOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxlabeloptions"></a>
<a id="schema_CreateInboxLabelOptions"></a>
<a id="tocScreateinboxlabeloptions"></a>
<a id="tocscreateinboxlabeloptions"></a>

```json
{
  "name": "Urgent",
  "color": "#E93D82"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.|
|color|string|false|none|The color of the label, as a `#RRGGBB` hex color. It is stored in uppercase. When omitted, a random color from the dashboard palette is used.|

<h2 id="tocS_CreateInboxLabelResponseSuccess">CreateInboxLabelResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxlabelresponsesuccess"></a>
<a id="schema_CreateInboxLabelResponseSuccess"></a>
<a id="tocScreateinboxlabelresponsesuccess"></a>
<a id="tocscreateinboxlabelresponsesuccess"></a>

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|id|string(uuid)|true|none|The ID of the label.|

<h2 id="tocS_UpdateInboxLabelOptions">UpdateInboxLabelOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxlabeloptions"></a>
<a id="schema_UpdateInboxLabelOptions"></a>
<a id="tocSupdateinboxlabeloptions"></a>
<a id="tocsupdateinboxlabeloptions"></a>

```json
{
  "name": "Billing",
  "color": "#F76B15"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A new name for the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.|
|color|string|false|none|A new color for the label, as a `#RRGGBB` hex color. It is stored in uppercase.|

<h2 id="tocS_UpdateInboxLabelResponseSuccess">UpdateInboxLabelResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxlabelresponsesuccess"></a>
<a id="schema_UpdateInboxLabelResponseSuccess"></a>
<a id="tocSupdateinboxlabelresponsesuccess"></a>
<a id="tocsupdateinboxlabelresponsesuccess"></a>

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|id|string(uuid)|true|none|The ID of the updated label.|

<h2 id="tocS_RemoveInboxLabelResponseSuccess">RemoveInboxLabelResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveinboxlabelresponsesuccess"></a>
<a id="schema_RemoveInboxLabelResponseSuccess"></a>
<a id="tocSremoveinboxlabelresponsesuccess"></a>
<a id="tocsremoveinboxlabelresponsesuccess"></a>

```json
{
  "object": "inbox_label",
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|id|string(uuid)|true|none|The ID of the removed label.|
|deleted|boolean|true|none|Indicates whether the label was deleted.|

<h2 id="tocS_InboxThreadLabel">InboxThreadLabel</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadlabel"></a>
<a id="schema_InboxThreadLabel"></a>
<a id="tocSinboxthreadlabel"></a>
<a id="tocsinboxthreadlabel"></a>

```json
{
  "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
  "name": "Urgent",
  "color": "#E93D82"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the label.|
|name|string|true|none|The name of the label.|
|color|string|true|none|The color of the label, as a `#RRGGBB` hex color in uppercase.|

<h2 id="tocS_InboxThread">InboxThread</h2>
<!-- backwards compatibility -->
<a id="schemainboxthread"></a>
<a id="schema_InboxThread"></a>
<a id="tocSinboxthread"></a>
<a id="tocsinboxthread"></a>

```json
{
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "from": "ada@example.org",
  "to": [
    "support@example.com"
  ],
  "cc": [],
  "bcc": [],
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "email_count": 2,
  "has_attachment": true,
  "has_draft": false,
  "read": false,
  "received_at": "2026-08-05T14:03:11.229Z",
  "folder": "inbox"
}
```

A thread as it appears in the list of an inbox's threads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the thread.|
|subject|string \| null|true|none|The subject of the thread.|
|from|string \| null|true|none|The sender email address. Can include the display name.|
|to|[string]|true|none|The recipients of the most recent email. For a received email, these are the addresses it was delivered to, not the full `To` header.|
|cc|[string]|true|none|The CC recipients of the most recent email.|
|bcc|[string]|true|none|The BCC recipients of the most recent email. Always empty for a received email.|
|labels|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels attached to the thread.|
|email_count|integer|true|none|The number of emails in the thread.|
|has_attachment|boolean|true|none|Whether the most recent email in the thread has an attachment.|
|has_draft|boolean|true|none|Whether the thread has an unsent draft.|
|read|boolean|true|none|True only when every email in the thread is read.|
|received_at|string(date-time)|true|none|Timestamp when the thread was last active.|
|folder|string|true|none|The folder the thread is in. Every thread is in exactly one folder. `inbox` holds threads with at least one received email. `archive` and `spam` hold threads moved there. `trash` holds threads scheduled for deletion in 30 days. `sent` holds threads whose emails are all outbound, and is assigned automatically.|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|sent|
|folder|trash|

<h2 id="tocS_InboxThreadSearchResult">InboxThreadSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadsearchresult"></a>
<a id="schema_InboxThreadSearchResult"></a>
<a id="tocSinboxthreadsearchresult"></a>
<a id="tocsinboxthreadsearchresult"></a>

```json
{
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "from": "ada@example.org",
  "to": [
    "support@example.com"
  ],
  "cc": [],
  "bcc": [],
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "email_count": 2,
  "has_attachment": true,
  "has_draft": false,
  "read": false,
  "received_at": "2026-08-05T14:03:11.229Z",
  "folder": "inbox",
  "matched_email_id": "e8a3f1c6-2b9d-4e5a-a7c4-9d1b6f3e2a80"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the thread.|
|subject|string \| null|true|none|The subject of the thread.|
|from|string \| null|true|none|The sender email address. Can include the display name.|
|to|[string]|true|none|The recipients of the most recent email. For a received email, these are the addresses it was delivered to, not the full `To` header.|
|cc|[string]|true|none|The CC recipients of the most recent email.|
|bcc|[string]|true|none|The BCC recipients of the most recent email. Always empty for a received email.|
|labels|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels attached to the thread.|
|email_count|integer|true|none|The number of emails in the thread.|
|has_attachment|boolean|true|none|Whether the most recent email in the thread has an attachment.|
|has_draft|boolean|true|none|Whether the thread has an unsent draft.|
|read|boolean|true|none|True only when every email in the thread is read.|
|received_at|string(date-time)|true|none|Timestamp when the thread was last active.|
|folder|string|true|none|The folder the thread is in. Every thread is in exactly one folder. `inbox` holds threads with at least one received email. `archive` and `spam` hold threads moved there. `trash` holds threads scheduled for deletion in 30 days. `sent` holds threads whose emails are all outbound, and is assigned automatically.|
|matched_email_id|string \| null(uuid)|true|none|The ID of the email in the thread that matched the search. When `query` has words or phrases, it is the most relevant match. Otherwise, it is the newest. It is the same `id` that the list thread emails endpoint returns, so use it as `email_id` with the get, reply and forward endpoints. Null when the search index returns no matched email for the thread.|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|sent|
|folder|trash|

<h2 id="tocS_InboxThreadSummary">InboxThreadSummary</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadsummary"></a>
<a id="schema_InboxThreadSummary"></a>
<a id="tocSinboxthreadsummary"></a>
<a id="tocsinboxthreadsummary"></a>

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "folder": "inbox",
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "read": false
}
```

The summary of a single thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the thread.|
|subject|string \| null|true|none|The subject of the thread.|
|folder|string|true|none|The folder the thread is in.|
|labels|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels attached to the thread.|
|read|boolean|true|none|True only when every email in the thread is read.|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|sent|
|folder|trash|

<h2 id="tocS_ListInboxThreadsResponseSuccess">ListInboxThreadsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistinboxthreadsresponsesuccess"></a>
<a id="schema_ListInboxThreadsResponseSuccess"></a>
<a id="tocSlistinboxthreadsresponsesuccess"></a>
<a id="tocslistinboxthreadsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "from": "ada@example.org",
      "to": [
        "support@example.com"
      ],
      "cc": [],
      "bcc": [],
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "email_count": 2,
      "has_attachment": true,
      "has_draft": false,
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z",
      "folder": "inbox"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|has_more|boolean|true|none|Indicates if there are more results available.|
|data|[[InboxThread](#schemainboxthread)]|true|none|The matching threads, most recently active first.|

<h2 id="tocS_SearchInboxThreadsResponseSuccess">SearchInboxThreadsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemasearchinboxthreadsresponsesuccess"></a>
<a id="schema_SearchInboxThreadsResponseSuccess"></a>
<a id="tocSsearchinboxthreadsresponsesuccess"></a>
<a id="tocssearchinboxthreadsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": true,
  "data": [
    {
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "from": "ada@example.org",
      "to": [
        "support@example.com"
      ],
      "cc": [],
      "bcc": [],
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "email_count": 2,
      "has_attachment": true,
      "has_draft": false,
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z",
      "folder": "inbox",
      "matched_email_id": "e8a3f1c6-2b9d-4e5a-a7c4-9d1b6f3e2a80"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|has_more|boolean|true|none|Indicates if there are more results available.|
|data|[[InboxThreadSearchResult](#schemainboxthreadsearchresult)]|true|none|The matching threads, most recently active first.|

<h2 id="tocS_GetInboxThreadResponseSuccess">GetInboxThreadResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetinboxthreadresponsesuccess"></a>
<a id="schema_GetInboxThreadResponseSuccess"></a>
<a id="tocSgetinboxthreadresponsesuccess"></a>
<a id="tocsgetinboxthreadresponsesuccess"></a>

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "folder": "inbox",
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "read": false
}
```

The summary of a single thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the thread.|
|subject|string \| null|true|none|The subject of the thread.|
|folder|string|true|none|The folder the thread is in.|
|labels|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels attached to the thread.|
|read|boolean|true|none|True only when every email in the thread is read.|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|sent|
|folder|trash|

<h2 id="tocS_UpdateInboxThreadOptions">UpdateInboxThreadOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxthreadoptions"></a>
<a id="schema_UpdateInboxThreadOptions"></a>
<a id="tocSupdateinboxthreadoptions"></a>
<a id="tocsupdateinboxthreadoptions"></a>

```json
{
  "read": true,
  "folder": "archive"
}
```

At least one of `read` or `folder` is required. Use the thread labels endpoints to change labels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|read|boolean|false|none|Marks every email in the thread read or unread.|
|folder|string|false|none|Moves the thread to this folder. `sent` is assigned automatically and cannot be set.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|trash|

<h2 id="tocS_UpdateInboxThreadResponseSuccess">UpdateInboxThreadResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxthreadresponsesuccess"></a>
<a id="schema_UpdateInboxThreadResponseSuccess"></a>
<a id="tocSupdateinboxthreadresponsesuccess"></a>
<a id="tocsupdateinboxthreadresponsesuccess"></a>

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "subject": "Refund for order 1041",
  "folder": "inbox",
  "labels": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "read": false
}
```

The summary of a single thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the thread.|
|subject|string \| null|true|none|The subject of the thread.|
|folder|string|true|none|The folder the thread is in.|
|labels|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels attached to the thread.|
|read|boolean|true|none|True only when every email in the thread is read.|

#### Enumerated Values

|Property|Value|
|---|---|
|folder|inbox|
|folder|archive|
|folder|spam|
|folder|sent|
|folder|trash|

<h2 id="tocS_AddInboxThreadLabelsOptions">AddInboxThreadLabelsOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaddinboxthreadlabelsoptions"></a>
<a id="schema_AddInboxThreadLabelsOptions"></a>
<a id="tocSaddinboxthreadlabelsoptions"></a>
<a id="tocsaddinboxthreadlabelsoptions"></a>

```json
{
  "labels": [
    "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string(uuid)]|true|none|The IDs of the labels to apply to the thread. Between 1 and 10 IDs, each a label of the inbox.|

<h2 id="tocS_SetInboxThreadLabelsOptions">SetInboxThreadLabelsOptions</h2>
<!-- backwards compatibility -->
<a id="schemasetinboxthreadlabelsoptions"></a>
<a id="schema_SetInboxThreadLabelsOptions"></a>
<a id="tocSsetinboxthreadlabelsoptions"></a>
<a id="tocssetinboxthreadlabelsoptions"></a>

```json
{
  "labels": [
    "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string(uuid)]|true|none|The IDs of the labels the thread carries after the change. Up to 100 IDs, each a label of the inbox. Pass an empty array to take every label off the thread.|

<h2 id="tocS_InboxThreadLabelList">InboxThreadLabelList</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadlabellist"></a>
<a id="schema_InboxThreadLabelList"></a>
<a id="tocSinboxthreadlabellist"></a>
<a id="tocsinboxthreadlabellist"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|data|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|Every label on the thread after the change.|

<h2 id="tocS_AddInboxThreadLabelsResponseSuccess">AddInboxThreadLabelsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaaddinboxthreadlabelsresponsesuccess"></a>
<a id="schema_AddInboxThreadLabelsResponseSuccess"></a>
<a id="tocSaddinboxthreadlabelsresponsesuccess"></a>
<a id="tocsaddinboxthreadlabelsresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|data|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|Every label on the thread after the change.|

<h2 id="tocS_SetInboxThreadLabelsResponseSuccess">SetInboxThreadLabelsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemasetinboxthreadlabelsresponsesuccess"></a>
<a id="schema_SetInboxThreadLabelsResponseSuccess"></a>
<a id="tocSsetinboxthreadlabelsresponsesuccess"></a>
<a id="tocssetinboxthreadlabelsresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|data|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|Every label on the thread after the change.|

<h2 id="tocS_RemoveInboxThreadLabelResponseSuccess">RemoveInboxThreadLabelResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveinboxthreadlabelresponsesuccess"></a>
<a id="schema_RemoveInboxThreadLabelResponseSuccess"></a>
<a id="tocSremoveinboxthreadlabelresponsesuccess"></a>
<a id="tocsremoveinboxthreadlabelresponsesuccess"></a>

```json
{
  "object": "list",
  "data": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|data|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|Every label on the thread after the change.|

<h2 id="tocS_RemoveInboxThreadResponseSuccess">RemoveInboxThreadResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveinboxthreadresponsesuccess"></a>
<a id="schema_RemoveInboxThreadResponseSuccess"></a>
<a id="tocSremoveinboxthreadresponsesuccess"></a>
<a id="tocsremoveinboxthreadresponsesuccess"></a>

```json
{
  "object": "inbox_thread",
  "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the thread.|
|deleted|boolean|true|none|True when this call moved the thread to `trash`. False when the thread was already there.|

<h2 id="tocS_InboxThreadEmailAttachment">InboxThreadEmailAttachment</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreademailattachment"></a>
<a id="schema_InboxThreadEmailAttachment"></a>
<a id="tocSinboxthreademailattachment"></a>
<a id="tocsinboxthreademailattachment"></a>

```json
{
  "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
  "filename": "receipt.pdf",
  "size": 20841
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the attachment.|
|filename|string \| null|true|none|The filename of the attachment.|
|size|integer \| null|true|none|The size of the attachment in bytes.|

<h2 id="tocS_InboxThreadEmail">InboxThreadEmail</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreademail"></a>
<a id="schema_InboxThreadEmail"></a>
<a id="tocSinboxthreademail"></a>
<a id="tocsinboxthreademail"></a>

```json
{
  "id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60",
  "direction": "inbound",
  "from": "Ada Lovelace <ada@example.org>",
  "to": [
    "support@acme.com"
  ],
  "cc": [],
  "bcc": [],
  "reply_to": [
    "replies@example.org"
  ],
  "subject": "Refund for order 1041",
  "message_id": "<1041@example.org>",
  "html": "<p>Could I get a refund for order 1041?</p>",
  "text": "Could I get a refund for order 1041?",
  "attachments": [
    {
      "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
      "filename": "receipt.pdf",
      "size": 20841
    }
  ],
  "read": false,
  "received_at": "2026-08-05T14:03:11.229Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the message.|
|direction|string|true|none|Whether the inbox received the message (`inbound`) or sent it (`outbound`). A message the inbox sent to itself is `inbound`, so a reply to it goes to its sender.|
|from|string|true|none|Sender email address. Includes the display name when the sender has one, in the format "Name <sender@domain.com>".|
|to|[string]|true|none|The recipients of the message. For a received message, these are the addresses it was delivered to, not the full `To` header.|
|cc|[string]|true|none|The CC recipients of the message.|
|bcc|[string]|true|none|The BCC recipients of the message. Always empty for a received message.|
|reply_to|[string]|true|none|The Reply-To addresses of the message.|
|subject|string \| null|true|none|The subject of the message.|
|message_id|string \| null|true|none|The Message-ID header of the message.|
|html|string \| null|true|none|The HTML body.|
|text|string \| null|true|none|The plain-text body.|
|attachments|[[InboxThreadEmailAttachment](#schemainboxthreademailattachment)]|true|none|The attachments of the message.|
|read|boolean|true|none|Whether the message has been read.|
|received_at|string(date-time)|true|none|Timestamp when the inbox received the message, or when the inbox sent it.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_ListInboxThreadEmailsResponseSuccess">ListInboxThreadEmailsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistinboxthreademailsresponsesuccess"></a>
<a id="schema_ListInboxThreadEmailsResponseSuccess"></a>
<a id="tocSlistinboxthreademailsresponsesuccess"></a>
<a id="tocslistinboxthreademailsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60",
      "direction": "inbound",
      "from": "Ada Lovelace <ada@example.org>",
      "to": [
        "support@acme.com"
      ],
      "cc": [],
      "bcc": [],
      "reply_to": [
        "replies@example.org"
      ],
      "subject": "Refund for order 1041",
      "message_id": "<1041@example.org>",
      "html": "<p>Could I get a refund for order 1041?</p>",
      "text": "Could I get a refund for order 1041?",
      "attachments": [
        {
          "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
          "filename": "receipt.pdf",
          "size": 20841
        }
      ],
      "read": false,
      "received_at": "2026-08-05T14:03:11.229Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|has_more|boolean|true|none|Indicates if there are more results available.|
|data|[[InboxThreadEmail](#schemainboxthreademail)]|true|none|The messages of the thread on this page, oldest first.|

<h2 id="tocS_GetInboxThreadEmailResponseSuccess">GetInboxThreadEmailResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetinboxthreademailresponsesuccess"></a>
<a id="schema_GetInboxThreadEmailResponseSuccess"></a>
<a id="tocSgetinboxthreademailresponsesuccess"></a>
<a id="tocsgetinboxthreademailresponsesuccess"></a>

```json
{
  "id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60",
  "direction": "inbound",
  "from": "Ada Lovelace <ada@example.org>",
  "to": [
    "support@acme.com"
  ],
  "cc": [],
  "bcc": [],
  "reply_to": [
    "replies@example.org"
  ],
  "subject": "Refund for order 1041",
  "message_id": "<1041@example.org>",
  "html": "<p>Could I get a refund for order 1041?</p>",
  "text": "Could I get a refund for order 1041?",
  "attachments": [
    {
      "id": "9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90",
      "filename": "receipt.pdf",
      "size": 20841
    }
  ],
  "read": false,
  "received_at": "2026-08-05T14:03:11.229Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the message.|
|direction|string|true|none|Whether the inbox received the message (`inbound`) or sent it (`outbound`). A message the inbox sent to itself is `inbound`, so a reply to it goes to its sender.|
|from|string|true|none|Sender email address. Includes the display name when the sender has one, in the format "Name <sender@domain.com>".|
|to|[string]|true|none|The recipients of the message. For a received message, these are the addresses it was delivered to, not the full `To` header.|
|cc|[string]|true|none|The CC recipients of the message.|
|bcc|[string]|true|none|The BCC recipients of the message. Always empty for a received message.|
|reply_to|[string]|true|none|The Reply-To addresses of the message.|
|subject|string \| null|true|none|The subject of the message.|
|message_id|string \| null|true|none|The Message-ID header of the message.|
|html|string \| null|true|none|The HTML body.|
|text|string \| null|true|none|The plain-text body.|
|attachments|[[InboxThreadEmailAttachment](#schemainboxthreademailattachment)]|true|none|The attachments of the message.|
|read|boolean|true|none|Whether the message has been read.|
|received_at|string(date-time)|true|none|Timestamp when the inbox received the message, or when the inbox sent it.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_ReplyInboxThreadEmailOptions">ReplyInboxThreadEmailOptions</h2>
<!-- backwards compatibility -->
<a id="schemareplyinboxthreademailoptions"></a>
<a id="schema_ReplyInboxThreadEmailOptions"></a>
<a id="tocSreplyinboxthreademailoptions"></a>
<a id="tocsreplyinboxthreademailoptions"></a>

```json
{
  "cc": [
    "billing@acme.com"
  ],
  "bcc": [
    "records@acme.com"
  ],
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "subject": "Re: Refund for order 1041",
  "reply_all": false,
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

At least one of `html` or `text` must contain more than whitespace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cc|string \| [string] \| null|false|none|CC recipient email address. For multiple addresses, send as an array of strings. Without `reply_all`, the reply copies only these addresses. With `reply_all`, these addresses are merged with the copied recipients, without duplicates. `cc` and `bcc` combined must be fewer than 50 addresses. After the `to` recipients are added, the reply cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|bcc|string \| [string] \| null|false|none|BCC recipient email address. For multiple addresses, send as an array of strings. BCC recipients of the original message are never copied. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|html|string|false|none|The HTML body of the reply.|
|text|string|false|none|The plain-text body of the reply.|
|subject|string|false|none|The subject of the reply. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Re:` if it does not already start with it.|
|reply_all|boolean|false|none|Reply to everyone on the original message. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has none, and copies the other addresses of its `To` header and its `cc` recipients in `cc`. For a message the inbox sent, the reply goes to that message's `Reply-To` addresses when they are not the inbox address, otherwise to its `to` recipients, and copies its `cc` recipients. The inbox address is always excluded, and duplicates are removed.|
|attachments|[[Attachment](#schemaattachment)]|false|none|Files to attach, as on `POST /emails`. Each one needs `content` or `path`. The `content` of all files can total at most 25 MB. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.|
|headers|object \| null|false|none|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

<h2 id="tocS_ReplyInboxThreadEmailResponseSuccess">ReplyInboxThreadEmailResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemareplyinboxthreademailresponsesuccess"></a>
<a id="schema_ReplyInboxThreadEmailResponseSuccess"></a>
<a id="tocSreplyinboxthreademailresponsesuccess"></a>
<a id="tocsreplyinboxthreademailresponsesuccess"></a>

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the sent email. Use it with the emails endpoints.|

<h2 id="tocS_ForwardInboxThreadEmailOptions">ForwardInboxThreadEmailOptions</h2>
<!-- backwards compatibility -->
<a id="schemaforwardinboxthreademailoptions"></a>
<a id="schema_ForwardInboxThreadEmailOptions"></a>
<a id="tocSforwardinboxthreademailoptions"></a>
<a id="tocsforwardinboxthreademailoptions"></a>

```json
{
  "to": [
    "colleague@example.org"
  ],
  "cc": [
    "billing@acme.com"
  ],
  "bcc": [
    "records@acme.com"
  ],
  "html": "<p>Flagging this refund request for you.</p>",
  "text": "Flagging this refund request for you.",
  "subject": "Fwd: Refund for order 1041",
  "attachments": [
    {
      "content": "string",
      "filename": "string",
      "path": "string",
      "content_type": "string",
      "content_id": "string"
    }
  ],
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string \| [string]|true|none|Recipient email address. For multiple addresses, send as an array of strings. Must name at least one address. `to`, `cc` and `bcc` combined cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|cc|string \| [string] \| null|false|none|CC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|bcc|string \| [string] \| null|false|none|BCC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|html|string|false|none|An HTML note sent above the quoted original.|
|text|string|false|none|A plain-text note sent above the quoted original.|
|subject|string|false|none|The subject of the forward. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Fwd:` if it does not already start with it.|
|attachments|[[Attachment](#schemaattachment)]|false|none|Files to attach, as on `POST /emails`. Each one needs `content` or `path`. They share one limit with the attachments of the original message, which the forward also sends. Together they can have at most 25 MB of `content`. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.|
|headers|object \| null|false|none|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|

<h2 id="tocS_ForwardInboxThreadEmailResponseSuccess">ForwardInboxThreadEmailResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaforwardinboxthreademailresponsesuccess"></a>
<a id="schema_ForwardInboxThreadEmailResponseSuccess"></a>
<a id="tocSforwardinboxthreademailresponsesuccess"></a>
<a id="tocsforwardinboxthreademailresponsesuccess"></a>

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the sent email. Use it with the emails endpoints.|

<h2 id="tocS_InboxDraftAttachmentInput">InboxDraftAttachmentInput</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftattachmentinput"></a>
<a id="schema_InboxDraftAttachmentInput"></a>
<a id="tocSinboxdraftattachmentinput"></a>
<a id="tocsinboxdraftattachmentinput"></a>

```json
{
  "content": "aGVsbG8gZTJl",
  "filename": "receipt.pdf",
  "content_type": "application/pdf"
}
```

A file to store on a draft. Unlike `POST /emails` attachments, a draft attachment cannot use `path` or `content_id`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The content of the file, encoded in base64. It cannot be empty.|
|filename|string|true|none|The filename of the attachment. A blocked file type returns a 422.|
|content_type|string|true|none|The MIME type of the attachment. It must be a valid MIME type, such as `application/pdf`, or the request returns a 422.|

<h2 id="tocS_InboxDraftAttachment">InboxDraftAttachment</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftattachment"></a>
<a id="schema_InboxDraftAttachment"></a>
<a id="tocSinboxdraftattachment"></a>
<a id="tocsinboxdraftattachment"></a>

```json
{
  "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
  "filename": "receipt.pdf",
  "content_type": "application/pdf",
  "size": 20841
}
```

A file stored on a draft.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the attachment.|
|filename|string|true|none|The filename of the attachment.|
|content_type|string|true|none|The MIME type of the attachment.|
|size|integer|true|none|The size of the attachment in bytes.|

<h2 id="tocS_InboxDraft">InboxDraft</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraft"></a>
<a id="schema_InboxDraft"></a>
<a id="tocSinboxdraft"></a>
<a id="tocsinboxdraft"></a>

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "type": "standalone",
  "to": [
    "ada@example.org"
  ],
  "cc": [],
  "bcc": [],
  "subject": "Refund for order 1041",
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "thread_id": null,
  "reply_to_email_id": null,
  "email_id": null,
  "created_at": "2026-08-05T14:12:04.110Z",
  "updated_at": "2026-08-05T14:12:04.110Z",
  "attachments": [
    {
      "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
      "filename": "receipt.pdf",
      "content_type": "application/pdf",
      "size": 20841
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the draft.|
|type|string|true|none|`reply` when the draft replies to an email in an existing thread. `standalone` when the draft starts a new thread.|
|to|[string]|true|none|The recipients. `null` or empty when no recipients are set.|
|cc|[string]|true|none|The CC recipients.|
|bcc|[string]|true|none|The BCC recipients.|
|subject|string \| null|true|none|The subject.|
|html|string \| null|true|none|The HTML body.|
|text|string \| null|true|none|The plain text body. A reply draft created without a body has an empty string.|
|thread_id|string \| null(uuid)|true|none|The Thread ID when the draft is a reply. `null` otherwise.|
|reply_to_email_id|string \| null(uuid)|true|none|The Email ID the draft replies to. `null` otherwise.|
|email_id|string \| null(uuid)|true|none|The ID of the outbound email queued when the draft was sent. `null` until the draft is sent.|
|created_at|string(date-time)|true|none|Timestamp when the draft was created.|
|updated_at|string(date-time)|true|none|Timestamp when the draft was last saved.|
|attachments|[[InboxDraftAttachment](#schemainboxdraftattachment)]|true|none|The files stored on the draft.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standalone|
|type|reply|

<h2 id="tocS_InboxDraftListItem">InboxDraftListItem</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftlistitem"></a>
<a id="schema_InboxDraftListItem"></a>
<a id="tocSinboxdraftlistitem"></a>
<a id="tocsinboxdraftlistitem"></a>

```json
{
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "type": "standalone",
  "to": [
    "ada@example.org"
  ],
  "cc": [],
  "bcc": [],
  "subject": "Refund for order 1041",
  "snippet": "Refund issued for order 1041.",
  "thread_id": null,
  "reply_to_email_id": null,
  "updated_at": "2026-08-05T14:12:04.110Z",
  "attachments": [
    {
      "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
      "filename": "receipt.pdf",
      "content_type": "application/pdf",
      "size": 20841
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the draft.|
|type|string|true|none|`reply` when the draft replies to an email in an existing thread. `standalone` when the draft starts a new thread.|
|to|[string]|true|none|The recipients. `null` or empty when no recipients are set.|
|cc|[string]|true|none|The CC recipients.|
|bcc|[string]|true|none|The BCC recipients.|
|subject|string \| null|true|none|The subject.|
|snippet|string \| null|true|none|A short preview of the body.|
|thread_id|string \| null(uuid)|true|none|The Thread ID when the draft is a reply. `null` otherwise.|
|reply_to_email_id|string \| null(uuid)|true|none|The Email ID the draft replies to. `null` otherwise.|
|updated_at|string(date-time)|true|none|Timestamp when the draft was last saved.|
|attachments|[[InboxDraftAttachment](#schemainboxdraftattachment)]|true|none|The files stored on the draft.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standalone|
|type|reply|

<h2 id="tocS_ListInboxDraftsResponseSuccess">ListInboxDraftsResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalistinboxdraftsresponsesuccess"></a>
<a id="schema_ListInboxDraftsResponseSuccess"></a>
<a id="tocSlistinboxdraftsresponsesuccess"></a>
<a id="tocslistinboxdraftsresponsesuccess"></a>

```json
{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
      "type": "standalone",
      "to": [
        "ada@example.org"
      ],
      "cc": [],
      "bcc": [],
      "subject": "Refund for order 1041",
      "snippet": "Refund issued for order 1041.",
      "thread_id": null,
      "reply_to_email_id": null,
      "updated_at": "2026-08-05T14:12:04.110Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|has_more|boolean|true|none|Indicates if there are more results available.|
|data|[[InboxDraftListItem](#schemainboxdraftlistitem)]|true|none|The unsent drafts on this page, most recently updated first.|

<h2 id="tocS_CreateInboxDraftOptions">CreateInboxDraftOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxdraftoptions"></a>
<a id="schema_CreateInboxDraftOptions"></a>
<a id="tocScreateinboxdraftoptions"></a>
<a id="tocscreateinboxdraftoptions"></a>

```json
{
  "to": [
    "ada@example.org"
  ],
  "cc": "string",
  "bcc": "string",
  "subject": "Refund for order 1041",
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "attachments": [
    {
      "content": "aGVsbG8gZTJl",
      "filename": "receipt.pdf",
      "content_type": "application/pdf"
    }
  ],
  "thread_id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
  "reply_to_email_id": "5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60"
}
```

At least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments` must be non-empty. The combined recipients of `to`, `cc` and `bcc` cannot exceed 50. `thread_id` and `reply_to_email_id` must be sent together or not at all.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string \| [string] \| null|false|none|The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name, for example `Ada Lovelace <ada@example.org>`. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|cc|string \| [string] \| null|false|none|The CC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|bcc|string \| [string] \| null|false|none|The BCC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|subject|string \| null|false|none|The subject. Max 2000 characters. A string that is only whitespace, or that contains a line break, is rejected.|
|html|string \| null|false|none|The HTML body.|
|text|string \| null|false|none|The plain text body.|
|attachments|[[InboxDraftAttachmentInput](#schemainboxdraftattachmentinput)]|false|none|Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422.|
|thread_id|string(uuid)|false|none|The Thread ID to reply in. Must be sent with `reply_to_email_id`.|
|reply_to_email_id|string(uuid)|false|none|The Email ID to reply to, as returned in `data[].id` by the list thread emails endpoint. Must be sent with `thread_id`.|

<h2 id="tocS_CreateInboxDraftResponseSuccess">CreateInboxDraftResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemacreateinboxdraftresponsesuccess"></a>
<a id="schema_CreateInboxDraftResponseSuccess"></a>
<a id="tocScreateinboxdraftresponsesuccess"></a>
<a id="tocscreateinboxdraftresponsesuccess"></a>

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|Type of the response object.|
|id|string(uuid)|true|none|The ID of the draft.|

<h2 id="tocS_GetInboxDraftResponseSuccess">GetInboxDraftResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemagetinboxdraftresponsesuccess"></a>
<a id="schema_GetInboxDraftResponseSuccess"></a>
<a id="tocSgetinboxdraftresponsesuccess"></a>
<a id="tocsgetinboxdraftresponsesuccess"></a>

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "type": "standalone",
  "to": [
    "ada@example.org"
  ],
  "cc": [],
  "bcc": [],
  "subject": "Refund for order 1041",
  "html": "<p>Refund issued for order 1041.</p>",
  "text": "Refund issued for order 1041.",
  "thread_id": null,
  "reply_to_email_id": null,
  "email_id": null,
  "created_at": "2026-08-05T14:12:04.110Z",
  "updated_at": "2026-08-05T14:12:04.110Z",
  "attachments": [
    {
      "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
      "filename": "receipt.pdf",
      "content_type": "application/pdf",
      "size": 20841
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the draft.|
|type|string|true|none|`reply` when the draft replies to an email in an existing thread. `standalone` when the draft starts a new thread.|
|to|[string]|true|none|The recipients. `null` or empty when no recipients are set.|
|cc|[string]|true|none|The CC recipients.|
|bcc|[string]|true|none|The BCC recipients.|
|subject|string \| null|true|none|The subject.|
|html|string \| null|true|none|The HTML body.|
|text|string \| null|true|none|The plain text body. A reply draft created without a body has an empty string.|
|thread_id|string \| null(uuid)|true|none|The Thread ID when the draft is a reply. `null` otherwise.|
|reply_to_email_id|string \| null(uuid)|true|none|The Email ID the draft replies to. `null` otherwise.|
|email_id|string \| null(uuid)|true|none|The ID of the outbound email queued when the draft was sent. `null` until the draft is sent.|
|created_at|string(date-time)|true|none|Timestamp when the draft was created.|
|updated_at|string(date-time)|true|none|Timestamp when the draft was last saved.|
|attachments|[[InboxDraftAttachment](#schemainboxdraftattachment)]|true|none|The files stored on the draft.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standalone|
|type|reply|

<h2 id="tocS_UpdateInboxDraftOptions">UpdateInboxDraftOptions</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxdraftoptions"></a>
<a id="schema_UpdateInboxDraftOptions"></a>
<a id="tocSupdateinboxdraftoptions"></a>
<a id="tocsupdateinboxdraftoptions"></a>

```json
{
  "to": [
    "ada@example.org"
  ],
  "cc": "string",
  "bcc": "string",
  "subject": "Refund issued for order 1041",
  "html": "string",
  "text": "string",
  "attachments": [
    {
      "content": "aGVsbG8gZTJl",
      "filename": "receipt.pdf",
      "content_type": "application/pdf"
    }
  ]
}
```

Send at least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments`. Omitted fields are left unchanged. Setting `text` or `html` replaces the whole body, so the body part you omit becomes `null`. The merged draft must contain at least one non-empty field, and its combined recipients cannot exceed 50.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|string \| [string] \| null|false|none|The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name. Pass `null` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|cc|string \| [string] \| null|false|none|The CC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|bcc|string \| [string] \| null|false|none|The BCC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.|
|subject|string \| null|false|none|The subject. Max 2000 characters. Cannot be only whitespace or contain a line break. Pass `null` to clear.|
|html|string \| null|false|none|The HTML body. Pass `null` to clear.|
|text|string \| null|false|none|The plain text body. Pass `null` to clear.|
|attachments|[[InboxDraftAttachmentInput](#schemainboxdraftattachmentinput)]|false|none|Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422. Sending the field replaces every attachment on the draft. Send `[]` to remove them all. `null` also removes them all.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|

<h2 id="tocS_UpdateInboxDraftResponseSuccess">UpdateInboxDraftResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinboxdraftresponsesuccess"></a>
<a id="schema_UpdateInboxDraftResponseSuccess"></a>
<a id="tocSupdateinboxdraftresponsesuccess"></a>
<a id="tocsupdateinboxdraftresponsesuccess"></a>

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox_draft`.|
|id|string(uuid)|true|none|The ID of the draft.|

<h2 id="tocS_RemoveInboxDraftResponseSuccess">RemoveInboxDraftResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemaremoveinboxdraftresponsesuccess"></a>
<a id="schema_RemoveInboxDraftResponseSuccess"></a>
<a id="tocSremoveinboxdraftresponsesuccess"></a>
<a id="tocsremoveinboxdraftresponsesuccess"></a>

```json
{
  "object": "inbox_draft",
  "id": "c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32",
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type.|
|id|string(uuid)|true|none|The ID of the draft.|
|deleted|boolean|true|none|Indicates whether the draft was successfully deleted.|

#### Enumerated Values

|Property|Value|
|---|---|
|deleted|true|

<h2 id="tocS_SendInboxDraftOptions">SendInboxDraftOptions</h2>
<!-- backwards compatibility -->
<a id="schemasendinboxdraftoptions"></a>
<a id="schema_SendInboxDraftOptions"></a>
<a id="tocSsendinboxdraftoptions"></a>
<a id="tocssendinboxdraftoptions"></a>

```json
{
  "headers": {
    "X-Ticket-Id": "4821"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object \| null|false|none|Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.|

<h2 id="tocS_SendInboxDraftResponseSuccess">SendInboxDraftResponseSuccess</h2>
<!-- backwards compatibility -->
<a id="schemasendinboxdraftresponsesuccess"></a>
<a id="schema_SendInboxDraftResponseSuccess"></a>
<a id="tocSsendinboxdraftresponsesuccess"></a>
<a id="tocssendinboxdraftresponsesuccess"></a>

```json
{
  "id": "6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the sent email. Use it with the emails endpoints.|

<h2 id="tocS_InboxEventSource">InboxEventSource</h2>
<!-- backwards compatibility -->
<a id="schemainboxeventsource"></a>
<a id="schema_InboxEventSource"></a>
<a id="tocSinboxeventsource"></a>
<a id="tocsinboxeventsource"></a>

```json
"dashboard"
```

What made the change.

<h2 id="tocS_InboxEventEmailAttachment">InboxEventEmailAttachment</h2>
<!-- backwards compatibility -->
<a id="schemainboxeventemailattachment"></a>
<a id="schema_InboxEventEmailAttachment"></a>
<a id="tocSinboxeventemailattachment"></a>
<a id="tocsinboxeventemailattachment"></a>

```json
{
  "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
  "filename": "invoice.pdf",
  "size": 48213
}
```

An attachment on an email in an inbox webhook event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the attachment.|
|filename|string \| null|true|none|The filename of the attachment.|
|size|integer \| null|true|none|The size of the attachment in bytes.|

<h2 id="tocS_InboxEventEmail">InboxEventEmail</h2>
<!-- backwards compatibility -->
<a id="schemainboxeventemail"></a>
<a id="schema_InboxEventEmail"></a>
<a id="tocSinboxeventemail"></a>
<a id="tocsinboxeventemail"></a>

```json
{
  "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "direction": "inbound",
  "from": "Steve Wozniak <steve@acme.com>",
  "to": [
    "support@acme.com"
  ],
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "reply_to": [
    "string"
  ],
  "subject": "Question about my invoice",
  "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
  "attachments": [
    {
      "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
      "filename": "invoice.pdf",
      "size": 48213
    }
  ],
  "read": false,
  "received_at": "2026-09-29T12:00:00.000Z"
}
```

The email carried by an inbox webhook event. It has no `html` or `text`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The ID of the email.|
|direction|string|true|none|Whether the email was received by the inbox or sent from it.|
|from|string|true|none|The sender, as an address or as `Name <address>`.|
|to|[string]|true|none|The recipients of the email.|
|cc|[string]|true|none|The CC recipients of the email.|
|bcc|[string]|true|none|The BCC recipients of the email.|
|reply_to|[string]|true|none|The Reply-To addresses.|
|subject|string \| null|true|none|The subject of the email.|
|message_id|string \| null|true|none|The Message-ID header of the email.|
|attachments|[[InboxEventEmailAttachment](#schemainboxeventemailattachment)]|true|none|The attachments on the email.|
|read|boolean|true|none|Whether the email has been read.|
|received_at|string(date-time)|true|none|Timestamp when the email arrived or was sent.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_InboxEventDraft">InboxEventDraft</h2>
<!-- backwards compatibility -->
<a id="schemainboxeventdraft"></a>
<a id="schema_InboxEventDraft"></a>
<a id="tocSinboxeventdraft"></a>
<a id="tocsinboxeventdraft"></a>

```json
{
  "object": "inbox_draft",
  "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
  "type": "reply",
  "to": [
    "steve@acme.com"
  ],
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "subject": "Re: Question about my invoice",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "email_id": null,
  "created_at": "2026-09-29T11:58:00.000Z",
  "updated_at": "2026-09-29T12:00:00.000Z",
  "attachments": [
    {
      "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
      "filename": "receipt.pdf",
      "content_type": "application/pdf",
      "size": 20841
    }
  ]
}
```

The draft carried by an inbox webhook event. It has no `html` or `text`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|string|true|none|The object type. Always `inbox_draft`.|
|id|string(uuid)|true|none|The ID of the draft.|
|type|string|true|none|`standalone` for a new conversation, or `reply`.|
|to|[string]|true|none|The recipients.|
|cc|[string]|true|none|The CC recipients.|
|bcc|[string]|true|none|The BCC recipients.|
|subject|string \| null|true|none|The subject.|
|thread_id|string \| null(uuid)|true|none|The ID of the thread when this draft is a reply. Null otherwise.|
|reply_to_email_id|string \| null(uuid)|true|none|The ID of the email this draft replies to. Null otherwise.|
|email_id|string \| null(uuid)|true|none|The ID of the queued outbound email after send. Null until then.|
|created_at|string(date-time)|true|none|Timestamp when the draft was created.|
|updated_at|string(date-time)|true|none|Timestamp when the draft was last saved.|
|attachments|[[InboxDraftAttachment](#schemainboxdraftattachment)]|true|none|The files stored on the draft.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standalone|
|type|reply|

<h2 id="tocS_InboxEventData">InboxEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxeventdata"></a>
<a id="schema_InboxEventData"></a>
<a id="tocSinboxeventdata"></a>
<a id="tocsinboxeventdata"></a>

```json
{
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "inbox": {
    "object": "inbox",
    "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "name": "Customer Support",
    "email_address": "support@acme.com",
    "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
    "receiving_address": null,
    "from_name": "Ada from Support",
    "unread": 3,
    "drafts": 2,
    "last_received": "2026-08-05T14:03:11.229Z",
    "created_at": "2026-08-01T09:12:44.512Z",
    "updated_at": "2026-08-03T10:20:05.118Z"
  }
}
```

The data of an `inbox.created` or `inbox.updated` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|inbox|[Inbox](#schemainbox)|false|none|The inbox as it is when the webhook is sent. Absent when the inbox no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxDeletedEventData">InboxDeletedEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxdeletedeventdata"></a>
<a id="schema_InboxDeletedEventData"></a>
<a id="tocSinboxdeletedeventdata"></a>
<a id="tocsinboxdeletedeventdata"></a>

```json
{
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
}
```

The data of an `inbox.deleted` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxThreadEmailEventData">InboxThreadEmailEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreademaileventdata"></a>
<a id="schema_InboxThreadEmailEventData"></a>
<a id="tocSinboxthreademaileventdata"></a>
<a id="tocsinboxthreademaileventdata"></a>

```json
{
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  },
  "email": {
    "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "direction": "inbound",
    "from": "Steve Wozniak <steve@acme.com>",
    "to": [
      "support@acme.com"
    ],
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "reply_to": [
      "string"
    ],
    "subject": "Question about my invoice",
    "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
    "attachments": [
      {
        "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
        "filename": "invoice.pdf",
        "size": 48213
      }
    ],
    "read": false,
    "received_at": "2026-09-29T12:00:00.000Z"
  }
}
```

The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|email_id|string(uuid)|true|none|The ID of the email.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|
|email|[InboxEventEmail](#schemainboxeventemail)|false|none|The email as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Thread Email. Absent when the email no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxThreadFolderUpdatedEventData">InboxThreadFolderUpdatedEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadfolderupdatedeventdata"></a>
<a id="schema_InboxThreadFolderUpdatedEventData"></a>
<a id="tocSinboxthreadfolderupdatedeventdata"></a>
<a id="tocsinboxthreadfolderupdatedeventdata"></a>

```json
{
  "from": "inbox",
  "to": "archive",
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  }
}
```

The data of an `inbox.thread.folder.updated` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|true|none|The folder the thread was in.|
|to|string|true|none|The folder the thread moved to.|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|from|inbox|
|from|archive|
|from|spam|
|from|trash|
|to|inbox|
|to|archive|
|to|spam|
|to|trash|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxThreadAssignedEventData">InboxThreadAssignedEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadassignedeventdata"></a>
<a id="schema_InboxThreadAssignedEventData"></a>
<a id="tocSinboxthreadassignedeventdata"></a>
<a id="tocsinboxthreadassignedeventdata"></a>

```json
{
  "assignee_email": "ada@acme.com",
  "assigned_by_email": "grace@acme.com",
  "previous_assignee_email": null,
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  }
}
```

The data of an `inbox.thread.assigned` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee_email|string \| null|true|none|The email of the member the thread is now assigned to.|
|assigned_by_email|string \| null|true|none|The email of the member who made the assignment. Null when no member made it.|
|previous_assignee_email|string \| null|true|none|The email of the member the thread was assigned to before. Null when it was unassigned.|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxThreadUnassignedEventData">InboxThreadUnassignedEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadunassignedeventdata"></a>
<a id="schema_InboxThreadUnassignedEventData"></a>
<a id="tocSinboxthreadunassignedeventdata"></a>
<a id="tocsinboxthreadunassignedeventdata"></a>

```json
{
  "previous_assignee_email": "ada@acme.com",
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  }
}
```

The data of an `inbox.thread.unassigned` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previous_assignee_email|string \| null|true|none|The email of the member the thread was assigned to.|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxThreadLabelsUpdatedEventData">InboxThreadLabelsUpdatedEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadlabelsupdatedeventdata"></a>
<a id="schema_InboxThreadLabelsUpdatedEventData"></a>
<a id="tocSinboxthreadlabelsupdatedeventdata"></a>
<a id="tocsinboxthreadlabelsupdatedeventdata"></a>

```json
{
  "added": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "removed": [
    {
      "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
      "name": "Urgent",
      "color": "#E93D82"
    }
  ],
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  }
}
```

The data of an `inbox.thread.labels.updated` event. Adding labels fills only `added`. Removing one label fills only `removed`. Setting the labels of a thread can fill both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels applied to the thread.|
|removed|[[InboxThreadLabel](#schemainboxthreadlabel)]|true|none|The labels removed from the thread.|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxDraftEventData">InboxDraftEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxdrafteventdata"></a>
<a id="schema_InboxDraftEventData"></a>
<a id="tocSinboxdrafteventdata"></a>
<a id="tocsinboxdrafteventdata"></a>

```json
{
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  },
  "draft": {
    "object": "inbox_draft",
    "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "type": "reply",
    "to": [
      "steve@acme.com"
    ],
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "subject": "Re: Question about my invoice",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "email_id": null,
    "created_at": "2026-09-29T11:58:00.000Z",
    "updated_at": "2026-09-29T12:00:00.000Z",
    "attachments": [
      {
        "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
        "filename": "receipt.pdf",
        "content_type": "application/pdf",
        "size": 20841
      }
    ]
  }
}
```

The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|false|none|The ID of the thread. Only on reply drafts.|
|draft_id|string(uuid)|true|none|The ID of the draft.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists. Only on reply drafts.|
|draft|[InboxEventDraft](#schemainboxeventdraft)|false|none|The draft as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Draft. Absent when the draft no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxDraftSentEventData">InboxDraftSentEventData</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftsenteventdata"></a>
<a id="schema_InboxDraftSentEventData"></a>
<a id="tocSinboxdraftsenteventdata"></a>
<a id="tocsinboxdraftsenteventdata"></a>

```json
{
  "source": "dashboard",
  "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
  "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
  "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
  "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
  "thread": {
    "object": "inbox_thread",
    "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
    "subject": "Refund for order 1041",
    "folder": "inbox",
    "labels": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "read": false
  },
  "email": {
    "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "direction": "inbound",
    "from": "Steve Wozniak <steve@acme.com>",
    "to": [
      "support@acme.com"
    ],
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "reply_to": [
      "string"
    ],
    "subject": "Question about my invoice",
    "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
    "attachments": [
      {
        "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
        "filename": "invoice.pdf",
        "size": 48213
      }
    ],
    "read": false,
    "received_at": "2026-09-29T12:00:00.000Z"
  },
  "draft": {
    "object": "inbox_draft",
    "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "type": "reply",
    "to": [
      "steve@acme.com"
    ],
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "subject": "Re: Question about my invoice",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "email_id": null,
    "created_at": "2026-09-29T11:58:00.000Z",
    "updated_at": "2026-09-29T12:00:00.000Z",
    "attachments": [
      {
        "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
        "filename": "receipt.pdf",
        "content_type": "application/pdf",
        "size": 20841
      }
    ]
  }
}
```

The data of an `inbox.draft.sent` event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[InboxEventSource](#schemainboxeventsource)|true|none|What made the change.|
|inbox_id|string(uuid)|true|none|The ID of the inbox.|
|thread_id|string(uuid)|true|none|The ID of the thread.|
|email_id|string(uuid)|true|none|The ID of the email.|
|draft_id|string(uuid)|true|none|The ID of the draft.|
|thread|[InboxThreadSummary](#schemainboxthreadsummary)|false|none|The thread as it is when the webhook is sent. Absent when the thread no longer exists.|
|email|[InboxEventEmail](#schemainboxeventemail)|false|none|The email as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Thread Email. Only when the email is already on the thread when the webhook is sent.|
|draft|[InboxEventDraft](#schemainboxeventdraft)|false|none|The draft as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Draft. Absent when the draft no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|api|
|source|dashboard|
|source|agent|
|source|system|

<h2 id="tocS_InboxCreatedEvent">InboxCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxcreatedevent"></a>
<a id="schema_InboxCreatedEvent"></a>
<a id="tocSinboxcreatedevent"></a>
<a id="tocsinboxcreatedevent"></a>

```json
{
  "type": "inbox.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "inbox": {
      "object": "inbox",
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "receiving_address": null,
      "from_name": "Ada from Support",
      "unread": 3,
      "drafts": 2,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxEventData](#schemainboxeventdata)|true|none|The data of an `inbox.created` or `inbox.updated` event.|

<h2 id="tocS_InboxUpdatedEvent">InboxUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxupdatedevent"></a>
<a id="schema_InboxUpdatedEvent"></a>
<a id="tocSinboxupdatedevent"></a>
<a id="tocsinboxupdatedevent"></a>

```json
{
  "type": "inbox.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "inbox": {
      "object": "inbox",
      "id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
      "name": "Customer Support",
      "email_address": "support@acme.com",
      "domain_id": "d91cd9bd-1176-453e-8fc1-35364d380206",
      "receiving_address": null,
      "from_name": "Ada from Support",
      "unread": 3,
      "drafts": 2,
      "last_received": "2026-08-05T14:03:11.229Z",
      "created_at": "2026-08-01T09:12:44.512Z",
      "updated_at": "2026-08-03T10:20:05.118Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxEventData](#schemainboxeventdata)|true|none|The data of an `inbox.created` or `inbox.updated` event.|

<h2 id="tocS_InboxDeletedEvent">InboxDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxdeletedevent"></a>
<a id="schema_InboxDeletedEvent"></a>
<a id="tocSinboxdeletedevent"></a>
<a id="tocsinboxdeletedevent"></a>

```json
{
  "type": "inbox.deleted",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxDeletedEventData](#schemainboxdeletedeventdata)|true|none|The data of an `inbox.deleted` event.|

<h2 id="tocS_InboxThreadCreatedEvent">InboxThreadCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadcreatedevent"></a>
<a id="schema_InboxThreadCreatedEvent"></a>
<a id="tocSinboxthreadcreatedevent"></a>
<a id="tocsinboxthreadcreatedevent"></a>

```json
{
  "type": "inbox.thread.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|none|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h2 id="tocS_InboxEmailReceivedEvent">InboxEmailReceivedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxemailreceivedevent"></a>
<a id="schema_InboxEmailReceivedEvent"></a>
<a id="tocSinboxemailreceivedevent"></a>
<a id="tocsinboxemailreceivedevent"></a>

```json
{
  "type": "inbox.email.received",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|none|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h2 id="tocS_InboxEmailSentEvent">InboxEmailSentEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxemailsentevent"></a>
<a id="schema_InboxEmailSentEvent"></a>
<a id="tocSinboxemailsentevent"></a>
<a id="tocsinboxemailsentevent"></a>

```json
{
  "type": "inbox.email.sent",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadEmailEventData](#schemainboxthreademaileventdata)|true|none|The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.|

<h2 id="tocS_InboxThreadFolderUpdatedEvent">InboxThreadFolderUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadfolderupdatedevent"></a>
<a id="schema_InboxThreadFolderUpdatedEvent"></a>
<a id="tocSinboxthreadfolderupdatedevent"></a>
<a id="tocsinboxthreadfolderupdatedevent"></a>

```json
{
  "type": "inbox.thread.folder.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "from": "inbox",
    "to": "archive",
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadFolderUpdatedEventData](#schemainboxthreadfolderupdatedeventdata)|true|none|The data of an `inbox.thread.folder.updated` event.|

<h2 id="tocS_InboxThreadAssignedEvent">InboxThreadAssignedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadassignedevent"></a>
<a id="schema_InboxThreadAssignedEvent"></a>
<a id="tocSinboxthreadassignedevent"></a>
<a id="tocsinboxthreadassignedevent"></a>

```json
{
  "type": "inbox.thread.assigned",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "assignee_email": "ada@acme.com",
    "assigned_by_email": "grace@acme.com",
    "previous_assignee_email": null,
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadAssignedEventData](#schemainboxthreadassignedeventdata)|true|none|The data of an `inbox.thread.assigned` event.|

<h2 id="tocS_InboxThreadUnassignedEvent">InboxThreadUnassignedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadunassignedevent"></a>
<a id="schema_InboxThreadUnassignedEvent"></a>
<a id="tocSinboxthreadunassignedevent"></a>
<a id="tocsinboxthreadunassignedevent"></a>

```json
{
  "type": "inbox.thread.unassigned",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "previous_assignee_email": "ada@acme.com",
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadUnassignedEventData](#schemainboxthreadunassignedeventdata)|true|none|The data of an `inbox.thread.unassigned` event.|

<h2 id="tocS_InboxThreadLabelsUpdatedEvent">InboxThreadLabelsUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxthreadlabelsupdatedevent"></a>
<a id="schema_InboxThreadLabelsUpdatedEvent"></a>
<a id="tocSinboxthreadlabelsupdatedevent"></a>
<a id="tocsinboxthreadlabelsupdatedevent"></a>

```json
{
  "type": "inbox.thread.labels.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "added": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "removed": [
      {
        "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
        "name": "Urgent",
        "color": "#E93D82"
      }
    ],
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxThreadLabelsUpdatedEventData](#schemainboxthreadlabelsupdatedeventdata)|true|none|The data of an `inbox.thread.labels.updated` event. Adding labels fills only `added`. Removing one label fills only `removed`. Setting the labels of a thread can fill both.|

<h2 id="tocS_InboxDraftCreatedEvent">InboxDraftCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftcreatedevent"></a>
<a id="schema_InboxDraftCreatedEvent"></a>
<a id="tocSinboxdraftcreatedevent"></a>
<a id="tocsinboxdraftcreatedevent"></a>

```json
{
  "type": "inbox.draft.created",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxDraftEventData](#schemainboxdrafteventdata)|true|none|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|

<h2 id="tocS_InboxDraftUpdatedEvent">InboxDraftUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftupdatedevent"></a>
<a id="schema_InboxDraftUpdatedEvent"></a>
<a id="tocSinboxdraftupdatedevent"></a>
<a id="tocsinboxdraftupdatedevent"></a>

```json
{
  "type": "inbox.draft.updated",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxDraftEventData](#schemainboxdrafteventdata)|true|none|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|

<h2 id="tocS_InboxDraftSentEvent">InboxDraftSentEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftsentevent"></a>
<a id="schema_InboxDraftSentEvent"></a>
<a id="tocSinboxdraftsentevent"></a>
<a id="tocsinboxdraftsentevent"></a>

```json
{
  "type": "inbox.draft.sent",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "email": {
      "id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "direction": "inbound",
      "from": "Steve Wozniak <steve@acme.com>",
      "to": [
        "support@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "reply_to": [
        "string"
      ],
      "subject": "Question about my invoice",
      "message_id": "<CAF7c1f0a2e5d3b@mail.acme.com>",
      "attachments": [
        {
          "id": "2a0c9ce0-3112-4728-976e-47ddcd16a318",
          "filename": "invoice.pdf",
          "size": 48213
        }
      ],
      "read": false,
      "received_at": "2026-09-29T12:00:00.000Z"
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxDraftSentEventData](#schemainboxdraftsenteventdata)|true|none|The data of an `inbox.draft.sent` event.|

<h2 id="tocS_InboxDraftDeletedEvent">InboxDraftDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemainboxdraftdeletedevent"></a>
<a id="schema_InboxDraftDeletedEvent"></a>
<a id="tocSinboxdraftdeletedevent"></a>
<a id="tocsinboxdraftdeletedevent"></a>

```json
{
  "type": "inbox.draft.deleted",
  "created_at": "2026-09-29T12:00:00.000Z",
  "data": {
    "source": "dashboard",
    "inbox_id": "b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1",
    "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
    "draft_id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
    "thread": {
      "object": "inbox_thread",
      "id": "4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12",
      "subject": "Refund for order 1041",
      "folder": "inbox",
      "labels": [
        {
          "id": "7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34",
          "name": "Urgent",
          "color": "#E93D82"
        }
      ],
      "read": false
    },
    "draft": {
      "object": "inbox_draft",
      "id": "9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d",
      "type": "reply",
      "to": [
        "steve@acme.com"
      ],
      "cc": [
        "string"
      ],
      "bcc": [
        "string"
      ],
      "subject": "Re: Question about my invoice",
      "thread_id": "7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90",
      "reply_to_email_id": "4ef9a417-02e9-4d39-ad75-9611e0fcc33c",
      "email_id": null,
      "created_at": "2026-09-29T11:58:00.000Z",
      "updated_at": "2026-09-29T12:00:00.000Z",
      "attachments": [
        {
          "id": "5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e",
          "filename": "receipt.pdf",
          "content_type": "application/pdf",
          "size": 20841
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The event type.|
|created_at|string(date-time)|true|none|Timestamp when the event was emitted.|
|data|[InboxDraftEventData](#schemainboxdrafteventdata)|true|none|The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.|
