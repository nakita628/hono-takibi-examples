<h1 id="xero-webhooks-api">Xero Webhooks API v20.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Xero Webhooks API exposes event notifications relating to entities in the Xero Public API and can be used for a variety of purposes

Base URLs:

* <a href="https://api.xero.com">https://api.xero.com</a> - The Xero Webhooks API exposes event notifications relating to entities in the Xero Public API and can be used for a variety of purposes

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 

<h1 id="xero-webhooks-api-webhooks">Webhooks</h1>

## Invoices Webhook Endpoint

<a id="opIdpublishInvoiceEvent"></a>

`POST invoices`

Invoice (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "CONTACT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

<h3 id="invoices-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookEvent](#schemawebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="invoices-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Subscriptions Webhook Endpoint

<a id="opIdpublishSubscriptionEvent"></a>

`POST subscriptions`

Subscription (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "CONTACT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

<h3 id="subscriptions-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookEvent](#schemawebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="subscriptions-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Contacts Webhook Endpoint

<a id="opIdpublishContactEvent"></a>

`POST contacts`

Contact (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "CONTACT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

<h3 id="contacts-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookEvent](#schemawebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="contacts-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Credit Notes Webhook Endpoint

<a id="opIdpublishCreditNoteEvent"></a>

`POST creditNotes`

Credit Note (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/CreditNotes/55d84274-a3da-4829-a7c0-0cab601b95cc",
      "resourceId": "55d84274-a3da-4829-a7c0-0cab601b95cc",
      "tenantId": "aef86862-2015-4b6b-88bc-d89032cecc50",
      "tenantType": "ORGANISATION",
      "eventCategory": "CREDITNOTE",
      "eventType": "CREATE",
      "eventDateUtc": "2025-12-02T00:44:09.923",
      "data": {
        "Type": "ACCPAYCREDIT",
        "Status": "DRAFT"
      }
    }
  ],
  "firstEventSequence": 76,
  "lastEventSequence": 76,
  "entropy": "FXNGWLCCGVANWHKILRUB"
}
```

<h3 id="credit-notes-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreditNoteWebhookEvent](#schemacreditnotewebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|
|» events|body|[object]|true|none|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» » eventCategory|body|string|true|none|
|» » data|body|object|true|Additional data for credit note events|
|» » » Type|body|string|true|The type of credit note|
|» » » » *oneOf*|body|string|false|An Accounts Payable(supplier) Credit Note|
|» » » » *oneOf*|body|string|false|An Account Receivable(customer) Credit Note|
|» » » Status|body|string|true|The status of the credit note|
|» » » » *oneOf*|body|string|false|Draft credit note|
|» » » » *oneOf*|body|string|false|Submitted credit note|
|» » » » *oneOf*|body|string|false|Deleted credit note|
|» » » » *oneOf*|body|string|false|Authorised credit note|
|» » » » *oneOf*|body|string|false|Paid credit note|
|» » » » *oneOf*|body|string|false|Voided credit note|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="credit-notes-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Prepayments Webhook Endpoint

<a id="opIdpublishPrepaymentEvent"></a>

`POST prepayments`

Prepayment (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Prepayments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION",
      "eventCategory": "PREPAYMENT",
      "eventType": "CREATE",
      "eventDateUtc": "2025-10-21T01:15:39.902",
      "data": {
        "Type": "RECEIVE-PREPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "2025-10-21T01:15:39Z"
      }
    }
  ],
  "firstEventSequence": 76,
  "lastEventSequence": 76,
  "entropy": "FXNGWLCCGVANWHKILRUB"
}
```

<h3 id="prepayments-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrepaymentWebhookEvent](#schemaprepaymentwebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|
|» events|body|[object]|true|none|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» » eventCategory|body|string|true|none|
|» » data|body|object|true|Prepayment document lifecycle events for customer/supplier advance payments|
|» » » Type|body|string|true|The specific type of prepayment|
|» » » » *oneOf*|body|string|false|A customer prepayment|
|» » » » *oneOf*|body|string|false|A supplier prepayment|
|» » » Status|body|string|true|The current lifecycle status of the prepayment|
|» » » » *oneOf*|body|string|false|Authorised prepayment|
|» » » » *oneOf*|body|string|false|Paid prepayment|
|» » » » *oneOf*|body|string|false|Voided prepayment|
|» » » UpdatedDateUTCString|body|string(date-time)|true|The date and time the prepayment was last updated in UTC ISO format|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="prepayments-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Overpayments Webhook Endpoint

<a id="opIdpublishOverpaymentEvent"></a>

`POST overpayments`

Overpayment (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Overpayments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION",
      "eventCategory": "OVERPAYMENT",
      "eventType": "CREATE",
      "eventDateUtc": "2025-10-21T01:15:39.902",
      "data": {
        "Type": "RECEIVE-OVERPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "2025-10-21T01:15:39Z"
      }
    }
  ],
  "firstEventSequence": 76,
  "lastEventSequence": 76,
  "entropy": "FXNGWLCCGVANWHKILRUB"
}
```

<h3 id="overpayments-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OverpaymentWebhookEvent](#schemaoverpaymentwebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|
|» events|body|[object]|true|none|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» » eventCategory|body|string|true|none|
|» » data|body|object|true|Overpayment document lifecycle events for excess customer/supplier payments|
|» » » Type|body|string|true|The specific type of overpayment|
|» » » » *oneOf*|body|string|false|A customer overpayment|
|» » » » *oneOf*|body|string|false|A supplier overpayment|
|» » » Status|body|string|true|The current lifecycle status of the overpayment|
|» » » » *oneOf*|body|string|false|Authorised overpayment|
|» » » » *oneOf*|body|string|false|Paid overpayment|
|» » » » *oneOf*|body|string|false|Voided overpayment|
|» » » UpdatedDateUTCString|body|string(date-time)|true|The date and time the overpayment was last updated in UTC ISO format|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="overpayments-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

## Payments Webhook Endpoint

<a id="opIdpublishPaymentEvent"></a>

`POST payments`

Payment (Create, Update)

> Body parameter

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Payments/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION",
      "eventCategory": "PAYMENT",
      "eventType": "CREATE",
      "eventDateUtc": "2025-10-21T01:15:39.902",
      "data": {
        "PaymentType": "ACCRECPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "2025-10-21T01:15:39Z"
      }
    }
  ],
  "firstEventSequence": 76,
  "lastEventSequence": 76,
  "entropy": "FXNGWLCCGVANWHKILRUB"
}
```

<h3 id="payments-webhook-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentWebhookEvent](#schemapaymentwebhookevent)|false|none|
|» events|body|[object]|true|A list of events that have occurred|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» lastEventSequence|body|integer|true|The sequence number of the last event in the list|
|» firstEventSequence|body|integer|true|The sequence number of the first event in the list|
|» entropy|body|string|true|A random string used for security or validation purposes|
|» events|body|[object]|true|none|
|» » resourceUrl|body|string(uri)|true|The URL to retrieve the resource that has changed|
|» » resourceId|body|string(uuid)|true|The ID of the resource that has changed (e.g. ContactID)|
|» » eventDateUtc|body|string(date-time)|true|The date and time that event occurred (UTC time)|
|» » eventType|body|string|true|The type of event of that occurred (e.g. UPDATE)|
|» » » *oneOf*|body|string|false|When a new resource is created|
|» » » *oneOf*|body|string|false|When an existing resource is updated (including when they are archived)|
|» » eventCategory|body|string|true|The category of event that occurred (e.g. CONTACT). You will only retrieve events from categories that your webhook is subscribed to|
|» » » *oneOf*|body|string|false|For organisation contact-related events|
|» » » *oneOf*|body|string|false|For organisation invoice-related events|
|» » » *oneOf*|body|string|false|For application subscription-related events|
|» » » *oneOf*|body|string|false|For organisation credit note-related events|
|» » » *oneOf*|body|string|false|For organisation prepayment-related events|
|» » » *oneOf*|body|string|false|For organisation overpayment-related events|
|» » » *oneOf*|body|string|false|For organisation payment-related events|
|» » tenantId|body|string(uuid)|true|The ID of the tenant that the event happened in relation to (OrganisationID or ApplicationID)|
|» » tenantType|body|string|true|The type of tenant|
|» » » *oneOf*|body|string|false|Represents a Xero organisation (for non-Subscription events)|
|» » » *oneOf*|body|string|false|Represents a Xero application (for Subscription events)|
|» » eventCategory|body|string|true|none|
|» » data|body|object|true|Payment lifecycle events for payments applied to and removed from accounting documents|
|» » » PaymentType|body|string|true|The specific type of payment, determined by the type of the document the payment was applied to|
|» » » » *oneOf*|body|string|false|Accounts Receivable Payment|
|» » » » *oneOf*|body|string|false|Accounts Payable Payment|
|» » » » *oneOf*|body|string|false|Accounts Receivable Credit Payment (Refund)|
|» » » » *oneOf*|body|string|false|Accounts Payable Credit Payment (Refund)|
|» » » » *oneOf*|body|string|false|Accounts Receivable Overpayment Payment (Refund)|
|» » » » *oneOf*|body|string|false|Accounts Receivable Prepayment Payment (Refund)|
|» » » » *oneOf*|body|string|false|Accounts Payable Prepayment Payment (Refund)|
|» » » » *oneOf*|body|string|false|Accounts Payable Overpayment Payment (Refund)|
|» » » Status|body|string|true|The current lifecycle status of the payment|
|» » » » *oneOf*|body|string|false|Authorised payment|
|» » » » *oneOf*|body|string|false|Deleted payment|
|» » » UpdatedDateUTCString|body|string(date-time)|true|The date and time the parent document was last updated in UTC ISO format|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "resourceUrl": "https://api.xero.com/api.xro/2.0/Contacts/717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "resourceId": "717f2bfc-c6d4-41fd-b238-3f2f0c0cf777",
      "eventDateUtc": "2024-06-21T01:15:39.902",
      "eventType": "UPDATE",
      "eventCategory": "CONTACT",
      "tenantId": "c2cc9b6e-9458-4c7d-93cc-f02b81b0594f",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "S0m3r4Nd0mt3xt"
}
```

<h3 id="payments-webhook-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook subscription succeeded|[WebhookEvent](#schemawebhookevent)|
|401|Unauthorized|Return a 401 status to indicate that the webhook subscription failed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-xero-signature|string||A hashed signature of the payload is passed along in the headers of each request as x-xero-signature|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_WebhookEvent">WebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemawebhookevent"></a>
<a id="schema_WebhookEvent"></a>
<a id="tocSwebhookevent"></a>
<a id="tocswebhookevent"></a>

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "CONTACT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION"
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|A list of events that have occurred|
|lastEventSequence|integer|true|none|The sequence number of the last event in the list|
|firstEventSequence|integer|true|none|The sequence number of the first event in the list|
|entropy|string|true|none|A random string used for security or validation purposes|

<h2 id="tocS_CreditNoteWebhookEvent">CreditNoteWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemacreditnotewebhookevent"></a>
<a id="schema_CreditNoteWebhookEvent"></a>
<a id="tocScreditnotewebhookevent"></a>
<a id="tocscreditnotewebhookevent"></a>

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "CREDITNOTE",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION",
      "data": {
        "Type": "ACCPAYCREDIT",
        "Status": "DRAFT"
      }
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|A list of events that have occurred|
|lastEventSequence|integer|true|none|The sequence number of the last event in the list|
|firstEventSequence|integer|true|none|The sequence number of the first event in the list|
|entropy|string|true|none|A random string used for security or validation purposes|
|events|[object]|true|none|none|

<h2 id="tocS_PrepaymentWebhookEvent">PrepaymentWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemaprepaymentwebhookevent"></a>
<a id="schema_PrepaymentWebhookEvent"></a>
<a id="tocSprepaymentwebhookevent"></a>
<a id="tocsprepaymentwebhookevent"></a>

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "PREPAYMENT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION",
      "data": {
        "Type": "RECEIVE-PREPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|A list of events that have occurred|
|lastEventSequence|integer|true|none|The sequence number of the last event in the list|
|firstEventSequence|integer|true|none|The sequence number of the first event in the list|
|entropy|string|true|none|A random string used for security or validation purposes|
|events|[object]|true|none|none|

<h2 id="tocS_OverpaymentWebhookEvent">OverpaymentWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemaoverpaymentwebhookevent"></a>
<a id="schema_OverpaymentWebhookEvent"></a>
<a id="tocSoverpaymentwebhookevent"></a>
<a id="tocsoverpaymentwebhookevent"></a>

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "OVERPAYMENT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION",
      "data": {
        "Type": "RECEIVE-OVERPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|A list of events that have occurred|
|lastEventSequence|integer|true|none|The sequence number of the last event in the list|
|firstEventSequence|integer|true|none|The sequence number of the first event in the list|
|entropy|string|true|none|A random string used for security or validation purposes|
|events|[object]|true|none|none|

<h2 id="tocS_PaymentWebhookEvent">PaymentWebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemapaymentwebhookevent"></a>
<a id="schema_PaymentWebhookEvent"></a>
<a id="tocSpaymentwebhookevent"></a>
<a id="tocspaymentwebhookevent"></a>

```json
{
  "events": [
    {
      "resourceUrl": "http://example.com",
      "resourceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventDateUtc": "1970-01-01T00:00:00Z",
      "eventType": "CREATE",
      "eventCategory": "PAYMENT",
      "tenantId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "tenantType": "ORGANISATION",
      "data": {
        "PaymentType": "ACCRECPAYMENT",
        "Status": "AUTHORISED",
        "UpdatedDateUTCString": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "lastEventSequence": 1,
  "firstEventSequence": 1,
  "entropy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[object]|true|none|A list of events that have occurred|
|lastEventSequence|integer|true|none|The sequence number of the last event in the list|
|firstEventSequence|integer|true|none|The sequence number of the first event in the list|
|entropy|string|true|none|A random string used for security or validation purposes|
|events|[object]|true|none|none|
