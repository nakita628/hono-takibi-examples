<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Retrieve a list of Domains for the specified Shopper

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/v1/domains \
  -H 'Accept: application/json'
```

`GET /v1/domains`

<h3 id="retrieve-a-list-of-domains-for-the-specified-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID whose domains are to be retrieved|
|statuses|query|[string]|false|Only include results with `status` value in the specified set|
|statusGroups|query|[string]|false|Only include results with `status` value in any of the specified groups|
|limit|query|integer|false|Maximum number of domains to return|
|marker|query|string|false|Marker Domain to use as the offset in results|
|includes|query|[string]|false|Optional details to be included in the response|
|modifiedDate|query|string(iso-datetime)|false|Only include results that have been modified since the specified date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statuses|ACTIVE|
|statuses|AWAITING_CLAIM_ACK|
|statuses|AWAITING_DOCUMENT_AFTER_TRANSFER|
|statuses|AWAITING_DOCUMENT_AFTER_UPDATE_ACCOUNT|
|statuses|AWAITING_DOCUMENT_UPLOAD|
|statuses|AWAITING_FAILED_TRANSFER_WHOIS_PRIVACY|
|statuses|AWAITING_PAYMENT|
|statuses|AWAITING_RENEWAL_TRANSFER_IN_COMPLETE|
|statuses|AWAITING_TRANSFER_IN_ACK|
|statuses|AWAITING_TRANSFER_IN_AUTH|
|statuses|AWAITING_TRANSFER_IN_AUTO|
|statuses|AWAITING_TRANSFER_IN_WHOIS|
|statuses|AWAITING_TRANSFER_IN_WHOIS_FIX|
|statuses|AWAITING_VERIFICATION_ICANN|
|statuses|AWAITING_VERIFICATION_ICANN_MANUAL|
|statuses|CANCELLED|
|statuses|CANCELLED_HELD|
|statuses|CANCELLED_REDEEMABLE|
|statuses|CANCELLED_TRANSFER|
|statuses|CONFISCATED|
|statuses|DISABLED_SPECIAL|
|statuses|EXCLUDED_INVALID_CLAIM_FIREHOSE|
|statuses|EXPIRED_REASSIGNED|
|statuses|FAILED_BACKORDER_CAPTURE|
|statuses|FAILED_DROP_IMMEDIATE_THEN_ADD|
|statuses|FAILED_PRE_REGISTRATION|
|statuses|FAILED_REDEMPTION|
|statuses|FAILED_REDEMPTION_REPORT|
|statuses|FAILED_REGISTRATION|
|statuses|FAILED_REGISTRATION_FIREHOSE|
|statuses|FAILED_RESTORATION_REDEMPTION_MOCK|
|statuses|FAILED_SETUP|
|statuses|FAILED_TRANSFER_IN|
|statuses|FAILED_TRANSFER_IN_BAD_STATUS|
|statuses|FAILED_TRANSFER_IN_REGISTRY|
|statuses|HELD_COURT_ORDERED|
|statuses|HELD_DISPUTED|
|statuses|HELD_EXPIRATION_PROTECTION|
|statuses|HELD_EXPIRED_REDEMPTION_MOCK|
|statuses|HELD_REGISTRAR_ADD|
|statuses|HELD_REGISTRAR_REMOVE|
|statuses|HELD_SHOPPER|
|statuses|HELD_TEMPORARY|
|statuses|LOCKED_ABUSE|
|statuses|LOCKED_COPYRIGHT|
|statuses|LOCKED_REGISTRY|
|statuses|LOCKED_SUPER|
|statuses|PARKED_AND_HELD|
|statuses|PARKED_EXPIRED|
|statuses|PARKED_VERIFICATION_ICANN|
|statuses|PENDING_ABORT_CANCEL_SETUP|
|statuses|PENDING_AGREEMENT_PRE_REGISTRATION|
|statuses|PENDING_APPLY_RENEWAL_CREDITS|
|statuses|PENDING_BACKORDER_CAPTURE|
|statuses|PENDING_BLOCKED_REGISTRY|
|statuses|PENDING_CANCEL_REGISTRANT_PROFILE|
|statuses|PENDING_COMPLETE_REDEMPTION_WITHOUT_RECEIPT|
|statuses|PENDING_COMPLETE_REGISTRANT_PROFILE|
|statuses|PENDING_COO|
|statuses|PENDING_COO_COMPLETE|
|statuses|PENDING_DNS|
|statuses|PENDING_DNS_ACTIVE|
|statuses|PENDING_DNS_INACTIVE|
|statuses|PENDING_DOCUMENT_VALIDATION|
|statuses|PENDING_DOCUMENT_VERIFICATION|
|statuses|PENDING_DROP_IMMEDIATE|
|statuses|PENDING_DROP_IMMEDIATE_THEN_ADD|
|statuses|PENDING_EPP_CREATE|
|statuses|PENDING_EPP_DELETE|
|statuses|PENDING_EPP_UPDATE|
|statuses|PENDING_ESCALATION_REGISTRY|
|statuses|PENDING_EXPIRATION|
|statuses|PENDING_EXPIRATION_RESPONSE|
|statuses|PENDING_EXPIRATION_SYNC|
|statuses|PENDING_EXPIRED_REASSIGNMENT|
|statuses|PENDING_EXPIRE_AUTO_ADD|
|statuses|PENDING_EXTEND_REGISTRANT_PROFILE|
|statuses|PENDING_FAILED_COO|
|statuses|PENDING_FAILED_EPP_CREATE|
|statuses|PENDING_FAILED_HELD|
|statuses|PENDING_FAILED_PURCHASE_PREMIUM|
|statuses|PENDING_FAILED_RECONCILE_FIREHOSE|
|statuses|PENDING_FAILED_REDEMPTION_WITHOUT_RECEIPT|
|statuses|PENDING_FAILED_RELEASE_PREMIUM|
|statuses|PENDING_FAILED_RENEW_EXPIRATION_PROTECTION|
|statuses|PENDING_FAILED_RESERVE_PREMIUM|
|statuses|PENDING_FAILED_SUBMIT_FIREHOSE|
|statuses|PENDING_FAILED_TRANSFER_ACK_PREMIUM|
|statuses|PENDING_FAILED_TRANSFER_IN_ACK_PREMIUM|
|statuses|PENDING_FAILED_TRANSFER_IN_PREMIUM|
|statuses|PENDING_FAILED_TRANSFER_PREMIUM|
|statuses|PENDING_FAILED_TRANSFER_SUBMIT_PREMIUM|
|statuses|PENDING_FAILED_UNLOCK_PREMIUM|
|statuses|PENDING_FAILED_UPDATE_API|
|statuses|PENDING_FRAUD_VERIFICATION|
|statuses|PENDING_FRAUD_VERIFIED|
|statuses|PENDING_GET_CONTACTS|
|statuses|PENDING_GET_HOSTS|
|statuses|PENDING_GET_NAME_SERVERS|
|statuses|PENDING_GET_STATUS|
|statuses|PENDING_HOLD_ESCROW|
|statuses|PENDING_HOLD_REDEMPTION|
|statuses|PENDING_LOCK_CLIENT_REMOVE|
|statuses|PENDING_LOCK_DATA_QUALITY|
|statuses|PENDING_LOCK_THEN_HOLD_REDEMPTION|
|statuses|PENDING_PARKING_DETERMINATION|
|statuses|PENDING_PARK_INVALID_WHOIS|
|statuses|PENDING_PARK_INVALID_WHOIS_REMOVAL|
|statuses|PENDING_PURCHASE_PREMIUM|
|statuses|PENDING_RECONCILE|
|statuses|PENDING_RECONCILE_FIREHOSE|
|statuses|PENDING_REDEMPTION|
|statuses|PENDING_REDEMPTION_REPORT|
|statuses|PENDING_REDEMPTION_REPORT_COMPLETE|
|statuses|PENDING_REDEMPTION_REPORT_SUBMITTED|
|statuses|PENDING_REDEMPTION_WITHOUT_RECEIPT|
|statuses|PENDING_REDEMPTION_WITHOUT_RECEIPT_MOCK|
|statuses|PENDING_RELEASE_PREMIUM|
|statuses|PENDING_REMOVAL|
|statuses|PENDING_REMOVAL_HELD|
|statuses|PENDING_REMOVAL_PARKED|
|statuses|PENDING_REMOVAL_UNPARK|
|statuses|PENDING_RENEWAL|
|statuses|PENDING_RENEW_EXPIRATION_PROTECTION|
|statuses|PENDING_RENEW_INFINITE|
|statuses|PENDING_RENEW_LOCKED|
|statuses|PENDING_RENEW_WITHOUT_RECEIPT|
|statuses|PENDING_REPORT_REDEMPTION_WITHOUT_RECEIPT|
|statuses|PENDING_RESERVE_PREMIUM|
|statuses|PENDING_RESET_VERIFICATION_ICANN|
|statuses|PENDING_RESPONSE_FIREHOSE|
|statuses|PENDING_RESTORATION|
|statuses|PENDING_RESTORATION_INACTIVE|
|statuses|PENDING_RESTORATION_REDEMPTION_MOCK|
|statuses|PENDING_RETRY_EPP_CREATE|
|statuses|PENDING_RETRY_HELD|
|statuses|PENDING_SEND_AUTH_CODE|
|statuses|PENDING_SETUP|
|statuses|PENDING_SETUP_ABANDON|
|statuses|PENDING_SETUP_AGREEMENT_LANDRUSH|
|statuses|PENDING_SETUP_AGREEMENT_SUNRISE2_A|
|statuses|PENDING_SETUP_AGREEMENT_SUNRISE2_B|
|statuses|PENDING_SETUP_AGREEMENT_SUNRISE2_C|
|statuses|PENDING_SETUP_AUTH|
|statuses|PENDING_SETUP_DNS|
|statuses|PENDING_SETUP_FAILED|
|statuses|PENDING_SETUP_REVIEW|
|statuses|PENDING_SETUP_SUNRISE|
|statuses|PENDING_SETUP_SUNRISE_PRE|
|statuses|PENDING_SETUP_SUNRISE_RESPONSE|
|statuses|PENDING_SUBMIT_FAILURE|
|statuses|PENDING_SUBMIT_FIREHOSE|
|statuses|PENDING_SUBMIT_HOLD_FIREHOSE|
|statuses|PENDING_SUBMIT_HOLD_LANDRUSH|
|statuses|PENDING_SUBMIT_HOLD_SUNRISE|
|statuses|PENDING_SUBMIT_LANDRUSH|
|statuses|PENDING_SUBMIT_RESPONSE_FIREHOSE|
|statuses|PENDING_SUBMIT_RESPONSE_LANDRUSH|
|statuses|PENDING_SUBMIT_RESPONSE_SUNRISE|
|statuses|PENDING_SUBMIT_SUCCESS_FIREHOSE|
|statuses|PENDING_SUBMIT_SUCCESS_LANDRUSH|
|statuses|PENDING_SUBMIT_SUCCESS_SUNRISE|
|statuses|PENDING_SUBMIT_SUNRISE|
|statuses|PENDING_SUBMIT_WAITING_LANDRUSH|
|statuses|PENDING_SUCCESS_PRE_REGISTRATION|
|statuses|PENDING_SUSPENDED_DATA_QUALITY|
|statuses|PENDING_TRANSFER_ACK_PREMIUM|
|statuses|PENDING_TRANSFER_IN|
|statuses|PENDING_TRANSFER_IN_ACK|
|statuses|PENDING_TRANSFER_IN_ACK_PREMIUM|
|statuses|PENDING_TRANSFER_IN_BAD_REGISTRANT|
|statuses|PENDING_TRANSFER_IN_CANCEL|
|statuses|PENDING_TRANSFER_IN_CANCEL_REGISTRY|
|statuses|PENDING_TRANSFER_IN_COMPLETE_ACK|
|statuses|PENDING_TRANSFER_IN_DELETE|
|statuses|PENDING_TRANSFER_IN_LOCK|
|statuses|PENDING_TRANSFER_IN_NACK|
|statuses|PENDING_TRANSFER_IN_NOTIFICATION|
|statuses|PENDING_TRANSFER_IN_PREMIUM|
|statuses|PENDING_TRANSFER_IN_RELEASE|
|statuses|PENDING_TRANSFER_IN_RESPONSE|
|statuses|PENDING_TRANSFER_IN_UNDERAGE|
|statuses|PENDING_TRANSFER_OUT|
|statuses|PENDING_TRANSFER_OUT_ACK|
|statuses|PENDING_TRANSFER_OUT_NACK|
|statuses|PENDING_TRANSFER_OUT_PREMIUM|
|statuses|PENDING_TRANSFER_OUT_UNDERAGE|
|statuses|PENDING_TRANSFER_OUT_VALIDATION|
|statuses|PENDING_TRANSFER_PREMIUM|
|statuses|PENDING_TRANSFER_PREMUIM|
|statuses|PENDING_TRANSFER_SUBMIT_PREMIUM|
|statuses|PENDING_UNLOCK_DATA_QUALITY|
|statuses|PENDING_UNLOCK_PREMIUM|
|statuses|PENDING_UPDATE|
|statuses|PENDING_UPDATED_REGISTRANT_DATA_QUALITY|
|statuses|PENDING_UPDATE_ACCOUNT|
|statuses|PENDING_UPDATE_API|
|statuses|PENDING_UPDATE_API_RESPONSE|
|statuses|PENDING_UPDATE_AUTH|
|statuses|PENDING_UPDATE_CONTACTS|
|statuses|PENDING_UPDATE_CONTACTS_PRIVACY|
|statuses|PENDING_UPDATE_DNS|
|statuses|PENDING_UPDATE_DNS_SECURITY|
|statuses|PENDING_UPDATE_ELIGIBILITY|
|statuses|PENDING_UPDATE_EPP_CONTACTS|
|statuses|PENDING_UPDATE_MEMBERSHIP|
|statuses|PENDING_UPDATE_OWNERSHIP|
|statuses|PENDING_UPDATE_OWNERSHIP_AUTH_AUCTION|
|statuses|PENDING_UPDATE_OWNERSHIP_HELD|
|statuses|PENDING_UPDATE_REGISTRANT|
|statuses|PENDING_UPDATE_REPO|
|statuses|PENDING_VALIDATION_DATA_QUALITY|
|statuses|PENDING_VERIFICATION_FRAUD|
|statuses|PENDING_VERIFICATION_STATUS|
|statuses|PENDING_VERIFY_REGISTRANT_DATA_QUALITY|
|statuses|RESERVED|
|statuses|RESERVED_PREMIUM|
|statuses|REVERTED|
|statuses|SUSPENDED_VERIFICATION_ICANN|
|statuses|TRANSFERRED_OUT|
|statuses|UNLOCKED_ABUSE|
|statuses|UNLOCKED_SUPER|
|statuses|UNPARKED_AND_UNHELD|
|statuses|UPDATED_OWNERSHIP|
|statuses|UPDATED_OWNERSHIP_HELD|
|statusGroups|INACTIVE|
|statusGroups|PRE_REGISTRATION|
|statusGroups|REDEMPTION|
|statusGroups|RENEWABLE|
|statusGroups|VERIFICATION_ICANN|
|statusGroups|VISIBLE|
|includes|authCode|
|includes|contacts|
|includes|nameServers|

> Example responses

> 200 Response

```json
[
  {
    "authCode": "string",
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": "1970-01-01T00:00:00Z",
    "domain": "string",
    "domainId": 0,
    "expirationProtected": true,
    "expires": "1970-01-01T00:00:00Z",
    "exposeWhois": true,
    "holdRegistrar": true,
    "locked": true,
    "nameServers": [
      "string"
    ],
    "privacy": true,
    "registrarCreatedAt": "string",
    "renewAuto": true,
    "renewDeadline": "1970-01-01T00:00:00Z",
    "renewable": true,
    "status": "string",
    "transferAwayEligibleAt": "1970-01-01T00:00:00Z",
    "transferProtected": true
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-domains-for-the-specified-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Limit must have a value no greater than 1000|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-a-list-of-domains-for-the-specified-shopper-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DomainSummary](#schemadomainsummary)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the legal agreement(s) required to purchase the specified TLD and add-ons

<a id="opIdgetAgreement"></a>

> Code samples

```bash
curl 'https://example.com/v1/domains/agreements?tlds=string&privacy=true' \
  -H 'Accept: application/json'
```

`GET /v1/domains/agreements`

<h3 id="retrieve-the-legal-agreements-required-to-purchase-the-specified-tld-and-add-ons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Market-Id|header|string(bcp-47)|false|Unique identifier of the Market used to retrieve/translate Legal Agreements|
|tlds|query|[string]|true|list of TLDs whose legal agreements are to be retrieved|
|privacy|query|boolean|true|Whether or not privacy has been requested|
|forTransfer|query|boolean|false|Whether or not domain tranfer has been requested|

> Example responses

> 200 Response

```json
[
  {
    "agreementKey": "string",
    "content": "string",
    "title": "string",
    "url": "http://example.com"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-legal-agreements-required-to-purchase-the-specified-tld-and-add-ons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-the-legal-agreements-required-to-purchase-the-specified-tld-and-add-ons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LegalAgreement](#schemalegalagreement)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Determine whether or not the specified domain is available for purchase

<a id="opIdavailable"></a>

> Code samples

```bash
curl 'https://example.com/v1/domains/available?domain=string' \
  -H 'Accept: application/json'
```

`GET /v1/domains/available`

<h3 id="determine-whether-or-not-the-specified-domain-is-available-for-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|true|Domain name whose availability is to be checked|
|checkType|query|string|false|Optimize for time ('FAST') or accuracy ('FULL')|
|forTransfer|query|boolean|false|Whether or not to include domains available for transfer. If set to True, checkType is ignored|

#### Enumerated Values

|Parameter|Value|
|---|---|
|checkType|FAST|
|checkType|FULL|
|checkType|fast|
|checkType|full|

> Example responses

> 200 Response

```json
{
  "available": true,
  "currency": "USD",
  "definitive": true,
  "domain": "string",
  "period": 0,
  "price": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="determine-whether-or-not-the-specified-domain-is-available-for-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainAvailableResponse](#schemadomainavailableresponse)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dashbr>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>domain must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Determine whether or not the specified domains are available for purchase

<a id="opIdavailableBulk"></a>

> Code samples

```bash
curl https://example.com/v1/domains/available \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "string"
  ]'
```

`POST /v1/domains/available`

> Body parameter

```json
[
  "string"
]
```

<h3 id="determine-whether-or-not-the-specified-domains-are-available-for-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|checkType|query|string|false|Optimize for time ('FAST') or accuracy ('FULL')|
|body|body|[string]|true|Domain names for which to check availability|

#### Enumerated Values

|Parameter|Value|
|---|---|
|checkType|FAST|
|checkType|FULL|
|checkType|fast|
|checkType|full|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "available": true,
      "currency": "USD",
      "definitive": true,
      "domain": "string",
      "period": 0,
      "price": 0
    }
  ]
}
```

> 203 Response

```json
{
  "domains": [
    {
      "available": true,
      "currency": "USD",
      "definitive": true,
      "domain": "string",
      "period": 0,
      "price": 0
    }
  ],
  "errors": [
    {
      "code": "string",
      "domain": "string",
      "message": "string",
      "path": "string",
      "status": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="determine-whether-or-not-the-specified-domains-are-available-for-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainAvailableBulk](#schemadomainavailablebulk)|
|203|Non-Authoritative Information|Request was partially successful|[DomainAvailableBulkMixed](#schemadomainavailablebulkmixed)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>Reserved name error<br>domain must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate the request body using the Domain Contact Validation Schema for specified domains.

<a id="opIdContactsValidate"></a>

> Code samples

```bash
curl https://example.com/v1/domains/contacts/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactPresence": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "domains": [
      "string"
    ],
    "entityType": "ABORIGINAL"
  }'
```

`POST /v1/domains/contacts/validate`

All contacts specified in request will be validated against all domains specifed in "domains". As an alternative, you can also pass in tlds, with the exception of `uk`, which requires full domain names

> Body parameter

```json
{
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactPresence": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "domains": [
    "string"
  ],
  "entityType": "ABORIGINAL"
}
```

<h3 id="validate-the-request-body-using-the-domain-contact-validation-schema-for-specified-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Private-Label-Id|header|integer|false|PrivateLabelId to operate as, if different from JWT|
|marketId|query|string(bcp-47)|false|MarketId in which the request is being made, and for which responses should be localized|
|body|body|[DomainsContactsBulk](#schemadomainscontactsbulk)|true|An instance document expected for domains contacts validation|
|» contactAdmin|body|[Contact](#schemacontact)|false|none|
|» contactBilling|body|[Contact](#schemacontact)|false|none|
|» contactPresence|body|[Contact](#schemacontact)|false|none|
|» contactRegistrant|body|[Contact](#schemacontact)|false|none|
|» contactTech|body|[Contact](#schemacontact)|false|none|
|» domains|body|[string(domain)]|true|An array of domain names to be validated against. Alternatively, you can specify the extracted tlds. However, full domain names are required if the tld is `uk`|
|» entityType|body|string|false|Canadian Presence Requirement (CA)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» entityType|ABORIGINAL|
|» entityType|ASSOCIATION|
|» entityType|CITIZEN|
|» entityType|CORPORATION|
|» entityType|EDUCATIONAL|
|» entityType|GOVERNMENT|
|» entityType|HOSPITAL|
|» entityType|INDIAN_BAND|
|» entityType|LEGAL_REPRESENTATIVE|
|» entityType|LIBRARY_ARCHIVE_MUSEUM|
|» entityType|MARK_REGISTERED|
|» entityType|MARK_TRADE|
|» entityType|PARTNERSHIP|
|» entityType|POLITICAL_PARTY|
|» entityType|RESIDENT_PERMANENT|
|» entityType|TRUST|
|» entityType|UNION|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "domains": [
        "string"
      ],
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="validate-the-request-body-using-the-domain-contact-validation-schema-for-specified-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|422|Unprocessable Entity|Request body doesn't fulfill schema, see details in `fields`|[ErrorDomainContactsValidate](#schemaerrordomaincontactsvalidate)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Purchase and register the specified Domain

<a id="opIdpurchase"></a>

> Code samples

```bash
curl https://example.com/v1/domains/purchase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "agreementKeys": [
        "string"
      ]
    },
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "domain": "string",
    "nameServers": [
      "string"
    ],
    "period": 1,
    "privacy": false,
    "renewAuto": true
  }'
```

`POST /v1/domains/purchase`

> Body parameter

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  },
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "domain": "string",
  "nameServers": [
    "string"
  ],
  "period": 1,
  "privacy": false,
  "renewAuto": true
}
```

<h3 id="purchase-and-register-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|The Shopper for whom the domain should be purchased|
|body|body|[DomainPurchase](#schemadomainpurchase)|true|An instance document expected to match the JSON schema returned by `./schema/{tld}`|
|» consent|body|[Consent](#schemaconsent)|true|none|
|» contactAdmin|body|[Contact](#schemacontact)|false|none|
|» contactBilling|body|[Contact](#schemacontact)|false|none|
|» contactRegistrant|body|[Contact](#schemacontact)|false|none|
|» contactTech|body|[Contact](#schemacontact)|false|none|
|» domain|body|string(domain)|true|For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked|
|» nameServers|body|[string(host-name)]|false|none|
|» period|body|integer(integer-positive)|false|none|
|» privacy|body|boolean|false|none|
|» renewAuto|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "currency": "USD",
  "itemCount": 0,
  "orderId": 0,
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="purchase-and-register-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainPurchaseResponse](#schemadomainpurchaseresponse)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|domain must be specified<br>Based on restrictions declared in JSON schema returned by `./schema/{tld}`<br>Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>`body` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the schema to be submitted when registering a Domain for the specified TLD

<a id="opIdschema"></a>

> Code samples

```bash
curl https://example.com/v1/domains/purchase/schema/string \
  -H 'Accept: application/json'
```

`GET /v1/domains/purchase/schema/{tld}`

<h3 id="retrieve-the-schema-to-be-submitted-when-registering-a-domain-for-the-specified-tld-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tld|path|string|true|The Top-Level Domain whose schema should be retrieved|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "models": {},
  "properties": {},
  "required": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-schema-to-be-submitted-when-registering-a-domain-for-the-specified-tld-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[JsonSchema](#schemajsonschema)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`tld` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Validate the request body using the Domain Purchase Schema for the specified TLD

<a id="opIdvalidate"></a>

> Code samples

```bash
curl https://example.com/v1/domains/purchase/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "agreementKeys": [
        "string"
      ]
    },
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "domain": "string",
    "nameServers": [
      "string"
    ],
    "period": 1,
    "privacy": false,
    "renewAuto": true
  }'
```

`POST /v1/domains/purchase/validate`

> Body parameter

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  },
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "domain": "string",
  "nameServers": [
    "string"
  ],
  "period": 1,
  "privacy": false,
  "renewAuto": true
}
```

<h3 id="validate-the-request-body-using-the-domain-purchase-schema-for-the-specified-tld-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DomainPurchase](#schemadomainpurchase)|true|An instance document expected to match the JSON schema returned by `./schema/{tld}`|
|» consent|body|[Consent](#schemaconsent)|true|none|
|» contactAdmin|body|[Contact](#schemacontact)|false|none|
|» contactBilling|body|[Contact](#schemacontact)|false|none|
|» contactRegistrant|body|[Contact](#schemacontact)|false|none|
|» contactTech|body|[Contact](#schemacontact)|false|none|
|» domain|body|string(domain)|true|For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked|
|» nameServers|body|[string(host-name)]|false|none|
|» period|body|integer(integer-positive)|false|none|
|» privacy|body|boolean|false|none|
|» renewAuto|body|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="validate-the-request-body-using-the-domain-purchase-schema-for-the-specified-tld-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Based on restrictions declared in JSON schema returned by `./schema/{tld}`|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Suggest alternate Domain names based on a seed Domain, a set of keywords, or the shopper's purchase history

<a id="opIdsuggest"></a>

> Code samples

```bash
curl https://example.com/v1/domains/suggest \
  -H 'Accept: application/json'
```

`GET /v1/domains/suggest`

<h3 id="suggest-alternate-domain-names-based-on-a-seed-domain-a-set-of-keywords-or-the-shoppers-purchase-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID for which the suggestions are being generated|
|query|query|string|false|Domain name or set of keywords for which alternative domain names will be suggested|
|country|query|string(iso-country-code)|false|Two-letter ISO country code to be used as a hint for target region<br/><br/><br>NOTE: These are sample values, there are many<br><a href="http://www.iso.org/iso/country_codes.htm">more</a>|
|city|query|string(city-name)|false|Name of city to be used as a hint for target region|
|sources|query|[string]|false|Sources to be queried<br/><br/><ul><br><li><strong>CC_TLD</strong> - Varies the TLD using Country Codes</li><br><li><strong>EXTENSION</strong> - Varies the TLD</li><br><li><strong>KEYWORD_SPIN</strong> - Identifies keywords and then rotates each one</li><br><li><strong>PREMIUM</strong> - Includes variations with premium prices</li></ul>|
|tlds|query|[string]|false|Top-level domains to be included in suggestions<br/><br/><br>NOTE: These are sample values, there are many<br><a href="http://www.godaddy.com/tlds/gtld.aspx#domain_search_form">more</a>|
|lengthMax|query|integer|false|Maximum length of second-level domain|
|lengthMin|query|integer|false|Minimum length of second-level domain|
|limit|query|integer|false|Maximum number of suggestions to return|
|waitMs|query|integer(integer-positive)|false|Maximum amount of time, in milliseconds, to wait for responses<br>If elapses, return the results compiled up to that point|

#### Enumerated Values

|Parameter|Value|
|---|---|
|country|AC|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KR|
|country|KV|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|ST|
|country|SV|
|country|SX|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TP|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|
|sources|CC_TLD|
|sources|EXTENSION|
|sources|KEYWORD_SPIN|
|sources|PREMIUM|
|sources|cctld|
|sources|extension|
|sources|keywordspin|
|sources|premium|

> Example responses

> 200 Response

```json
[
  {
    "domain": "string"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="suggest-alternate-domain-names-based-on-a-seed-domain-a-set-of-keywords-or-the-shoppers-purchase-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`query` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<h3 id="suggest-alternate-domain-names-based-on-a-seed-domain-a-set-of-keywords-or-the-shoppers-purchase-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DomainSuggestion](#schemadomainsuggestion)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a list of TLDs supported and enabled for sale

<a id="opIdtlds"></a>

> Code samples

```bash
curl https://example.com/v1/domains/tlds \
  -H 'Accept: application/json'
```

`GET /v1/domains/tlds`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": "GENERIC"
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieves-a-list-of-tlds-supported-and-enabled-for-sale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieves-a-list-of-tlds-supported-and-enabled-for-sale-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TldSummary](#schematldsummary)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve details for the specified Domain

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string \
  -H 'Accept: application/json'
```

`GET /v1/domains/{domain}`

<h3 id="retrieve-details-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID expected to own the specified domain|
|domain|path|string|true|Domain name whose details are to be retrieved|

> Example responses

> 200 Response

```json
{
  "authCode": "string",
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "domainId": 0,
  "expirationProtected": true,
  "expires": "1970-01-01T00:00:00Z",
  "exposeWhois": true,
  "holdRegistrar": true,
  "locked": true,
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "renewAuto": true,
  "renewDeadline": "1970-01-01T00:00:00Z",
  "status": "string",
  "subaccountId": "string",
  "transferAwayEligibleAt": "1970-01-01T00:00:00Z",
  "transferProtected": true,
  "verifications": {
    "domainName": {
      "status": "APPROVED"
    },
    "realName": {
      "status": "APPROVED"
    }
  }
}
```

> 203 Response

```json
{
  "authCode": "string",
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "domainId": 0,
  "expirationProtected": true,
  "expires": "1970-01-01T00:00:00Z",
  "exposeWhois": true,
  "holdRegistrar": true,
  "locked": true,
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "renewAuto": true,
  "renewDeadline": "1970-01-01T00:00:00Z",
  "status": "string",
  "subaccountId": "string",
  "transferAwayEligibleAt": "1970-01-01T00:00:00Z",
  "transferProtected": true,
  "verifications": {
    "domainName": {
      "status": "APPROVED"
    },
    "realName": {
      "status": "APPROVED"
    }
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-details-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainDetail](#schemadomaindetail)|
|203|Non-Authoritative Information|Request was partially successful, see verifications.status for further detail|[DomainDetail](#schemadomaindetail)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a purchased domain

<a id="opIdcancel"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/domains/{domain}`

<h3 id="cancel-a-purchased-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Domain to cancel|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="cancel-a-purchased-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|422|Unprocessable Entity|Unknown domain error<br>At least two apex (aka @) `nameServers` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update details for the specified Domain

<a id="opIdupdate"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "agreementKeys": [
        "EXPOSE_WHOIS"
      ]
    },
    "exposeWhois": true,
    "locked": true,
    "nameServers": [
      null
    ],
    "renewAuto": true,
    "subaccountId": "string"
  }'
```

`PATCH /v1/domains/{domain}`

> Body parameter

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "EXPOSE_WHOIS"
    ]
  },
  "exposeWhois": true,
  "locked": true,
  "nameServers": [
    null
  ],
  "renewAuto": true,
  "subaccountId": "string"
}
```

<h3 id="update-details-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Domain whose details are to be updated|
|X-Shopper-Id|header|string|false|Shopper for whom Domain is to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|body|body|[DomainUpdate](#schemadomainupdate)|true|Changes to apply to existing Domain|
|» consent|body|[ConsentDomainUpdate](#schemaconsentdomainupdate)|false|none|
|» exposeWhois|body|boolean|false|Whether or not the domain contact details should be shown in the WHOIS|
|» locked|body|boolean|false|Whether or not the domain should be locked to prevent transfers|
|» nameServers|body|[object(host-name)]|false|Fully-qualified domain names for Name Servers to associate with the domain|
|» renewAuto|body|boolean|false|Whether or not the domain should be configured to automatically renew|
|» subaccountId|body|string|false|Reseller subaccount shopperid who can manage the domain|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="update-details-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Specified Subaccount not owned by authenticated Shopper|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|The given domain is not eligible to have its nameservers changed|[Error](#schemaerror)|
|422|Unprocessable Entity|At least two apex (aka @) `nameServers` must be specified<br>Failed to update nameservers|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update domain

<a id="opIdupdateContacts"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/contacts \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    }
  }'
```

`PATCH /v1/domains/{domain}/contacts`

> Body parameter

```json
{
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  }
}
```

<h3 id="update-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper for whom domain contacts are to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose Contacts are to be updated.|
|body|body|[DomainContacts](#schemadomaincontacts)|true|Changes to apply to existing Contacts|
|» contactAdmin|body|[Contact](#schemacontact)|false|none|
|» contactBilling|body|[Contact](#schemacontact)|false|none|
|» contactRegistrant|body|[Contact](#schemacontact)|true|none|
|» contactTech|body|[Contact](#schemacontact)|false|none|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="update-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Domain not found<br>Identity document not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` is not a valid Domain name|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a privacy cancellation request for the given domain

<a id="opIdcancelPrivacy"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/privacy \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/domains/{domain}/privacy`

<h3 id="submit-a-privacy-cancellation-request-for-the-given-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID of the owner of the domain|
|domain|path|string|true|Domain whose privacy is to be cancelled|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="submit-a-privacy-cancellation-request-for-the-given-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|422|Unprocessable Entity|Customer has purchased Domain Ownership Protection and the domain has expired<br>The domain status does not allow performing the operation<br>Unknown domain error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Purchase privacy for a specified domain

<a id="opIdpurchasePrivacy"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/privacy/purchase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "agreementKeys": [
        "string"
      ]
    }
  }'
```

`POST /v1/domains/{domain}/privacy/purchase`

> Body parameter

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  }
}
```

<h3 id="purchase-privacy-for-a-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID of the owner of the domain|
|domain|path|string|true|Domain for which to purchase privacy|
|body|body|[PrivacyPurchase](#schemaprivacypurchase)|true|Options for purchasing privacy|
|» consent|body|[Consent](#schemaconsent)|true|none|

> Example responses

> 200 Response

```json
{
  "currency": "USD",
  "itemCount": 0,
  "orderId": 0,
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="purchase-privacy-for-a-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainPurchaseResponse](#schemadomainpurchaseresponse)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|The domain status does not allow performing the operation|[Error](#schemaerror)|
|422|Unprocessable Entity|End-user must read and consent to all of the following legal agreements<br>`domain` must match `sld.tld`|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Replace all DNS Records for the specified Domain

<a id="opIdrecordReplace"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "data": "string",
      "name": "string",
      "port": 1,
      "priority": 0,
      "protocol": "string",
      "service": "string",
      "ttl": 0,
      "type": "A",
      "weight": 0
    }
  ]'
```

`PUT /v1/domains/{domain}/records`

> Body parameter

```json
[
  {
    "data": "string",
    "name": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "type": "A",
    "weight": 0
  }
]
```

<h3 id="replace-all-dns-records-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be replaced|
|body|body|[[DNSRecord](#schemadnsrecord)]|true|DNS Records to replace whatever currently exists|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="replace-all-dns-records-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` is not a valid Domain name<br>`record` does not fulfill the schema|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add the specified DNS Records to the specified Domain

<a id="opIdrecordAdd"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "data": "string",
      "name": "string",
      "port": 1,
      "priority": 0,
      "protocol": "string",
      "service": "string",
      "ttl": 0,
      "type": "A",
      "weight": 0
    }
  ]'
```

`PATCH /v1/domains/{domain}/records`

> Body parameter

```json
[
  {
    "data": "string",
    "name": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "type": "A",
    "weight": 0
  }
]
```

<h3 id="add-the-specified-dns-records-to-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be augmented|
|body|body|[ArrayOfDNSRecord](#schemaarrayofdnsrecord)|true|DNS Records to add to whatever currently exists|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="add-the-specified-dns-records-to-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` is not a valid Domain name|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Replace all DNS Records for the specified Domain with the specified Type

<a id="opIdrecordReplaceType"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records/A \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "data": "string",
      "name": "string",
      "port": 1,
      "priority": 0,
      "protocol": "string",
      "service": "string",
      "ttl": 0,
      "weight": 0
    }
  ]'
```

`PUT /v1/domains/{domain}/records/{type}`

> Body parameter

```json
[
  {
    "data": "string",
    "name": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "weight": 0
  }
]
```

<h3 id="replace-all-dns-records-for-the-specified-domain-with-the-specified-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be replaced|
|type|path|string|true|DNS Record Type for which DNS Records are to be replaced|
|body|body|[[DNSRecordCreateType](#schemadnsrecordcreatetype)]|true|DNS Records to replace whatever currently exists|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|
|type|MX|
|type|NS|
|type|SOA|
|type|SRV|
|type|TXT|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="replace-all-dns-records-for-the-specified-domain-with-the-specified-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`record` does not fulfill the schema|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve DNS Records for the specified Domain, optionally with the specified Type and/or Name

<a id="opIdrecordGet"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records/A/string \
  -H 'Accept: application/json'
```

`GET /v1/domains/{domain}/records/{type}/{name}`

<h3 id="retrieve-dns-records-for-the-specified-domain-optionally-with-the-specified-type-andor-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be retrieved|
|type|path|string|true|DNS Record Type for which DNS Records are to be retrieved|
|name|path|string|true|DNS Record Name for which DNS Records are to be retrieved|
|offset|query|integer|false|Number of results to skip for pagination|
|limit|query|integer|false|Maximum number of items to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|
|type|MX|
|type|NS|
|type|SOA|
|type|SRV|
|type|TXT|

> Example responses

> 200 Response

```json
[
  {
    "data": "string",
    "name": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "type": "A",
    "weight": 0
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-dns-records-for-the-specified-domain-optionally-with-the-specified-type-andor-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`record` does not fulfill the schema<br>`domain` is not a valid Domain name|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<h3 id="retrieve-dns-records-for-the-specified-domain-optionally-with-the-specified-type-andor-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DNSRecord](#schemadnsrecord)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Replace all DNS Records for the specified Domain with the specified Type and Name

<a id="opIdrecordReplaceTypeName"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records/A/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "data": "string",
      "port": 1,
      "priority": 0,
      "protocol": "string",
      "service": "string",
      "ttl": 0,
      "weight": 0
    }
  ]'
```

`PUT /v1/domains/{domain}/records/{type}/{name}`

> Body parameter

```json
[
  {
    "data": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "weight": 0
  }
]
```

<h3 id="replace-all-dns-records-for-the-specified-domain-with-the-specified-type-and-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be replaced|
|type|path|string|true|DNS Record Type for which DNS Records are to be replaced|
|name|path|string|true|DNS Record Name for which DNS Records are to be replaced|
|body|body|[[DNSRecordCreateTypeName](#schemadnsrecordcreatetypename)]|true|DNS Records to replace whatever currently exists|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|
|type|MX|
|type|NS|
|type|SOA|
|type|SRV|
|type|TXT|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="replace-all-dns-records-for-the-specified-domain-with-the-specified-type-and-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`record` does not fulfill the schema|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete all DNS Records for the specified Domain with the specified Type and Name

<a id="opIdrecordDeleteTypeName"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/records/A/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/domains/{domain}/records/{type}/{name}`

<h3 id="delete-all-dns-records-for-the-specified-domain-with-the-specified-type-and-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose DNS Records are to be deleted|
|type|path|string|true|DNS Record Type for which DNS Records are to be deleted|
|name|path|string|true|DNS Record Name for which DNS Records are to be deleted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|
|type|MX|
|type|SRV|
|type|TXT|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="delete-all-dns-records-for-the-specified-domain-with-the-specified-type-and-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Domain not found|[Error](#schemaerror)|
|409|Conflict|The given domain is not eligible to have its records changed|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` is not a valid Domain name|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Renew the specified Domain

<a id="opIdrenew"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/renew \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "period": 1
  }'
```

`POST /v1/domains/{domain}/renew`

> Body parameter

```json
{
  "period": 1
}
```

<h3 id="renew-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper for whom Domain is to be renewed. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain to renew|
|body|body|[DomainRenew](#schemadomainrenew)|false|Options for renewing existing Domain|
|» period|body|integer(integer-positive)|false|Number of years to extend the Domain. Must not exceed maximum for TLD. When omitted, defaults to `period` specified during original purchase|

> Example responses

> 200 Response

```json
{
  "currency": "USD",
  "itemCount": 0,
  "orderId": 0,
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="renew-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainPurchaseResponse](#schemadomainpurchaseresponse)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|The domain status does not allow performing the operation|[Error](#schemaerror)|
|422|Unprocessable Entity|End-user must read and consent to all of the following legal agreements<br>`domain` must match `sld.tld`|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Purchase and start or restart transfer process

<a id="opIdtransferIn"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "authCode": "string",
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "agreementKeys": [
        "string"
      ]
    },
    "contactAdmin": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactBilling": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactRegistrant": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "contactTech": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "period": 1,
    "privacy": false,
    "renewAuto": true
  }'
```

`POST /v1/domains/{domain}/transfer`

> Body parameter

```json
{
  "authCode": "string",
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  },
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "period": 1,
  "privacy": false,
  "renewAuto": true
}
```

<h3 id="purchase-and-start-or-restart-transfer-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|The Shopper to whom the domain should be transfered|
|domain|path|string|true|Domain to transfer in|
|body|body|[DomainTransferIn](#schemadomaintransferin)|true|Details for domain transfer purchase|
|» authCode|body|string|true|Authorization code from registrar for transferring a domain|
|» consent|body|[Consent](#schemaconsent)|true|none|
|» contactAdmin|body|[Contact](#schemacontact)|false|none|
|» contactBilling|body|[Contact](#schemacontact)|false|none|
|» contactRegistrant|body|[Contact](#schemacontact)|false|none|
|» contactTech|body|[Contact](#schemacontact)|false|none|
|» period|body|integer(integer-positive)|false|Can be more than 1 but no more than 10 years total including current registration length|
|» privacy|body|boolean|false|Whether or not privacy has been requested|
|» renewAuto|body|boolean|false|Whether or not the domain should be configured to automatically renew|

> Example responses

> 200 Response

```json
{
  "currency": "USD",
  "itemCount": 0,
  "orderId": 0,
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="purchase-and-start-or-restart-transfer-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainPurchaseResponse](#schemadomainpurchaseresponse)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|409|Conflict|`domain` (domain) isn't available for transfer|[Error](#schemaerror)|
|422|Unprocessable Entity|Based on restrictions declared in JSON schema returned by `./schema/{tld}`<br>Cannot convert domain label error<br>Domain is missing IDN script<br>Domain segment ends with dash<br>Domain starts with dash<br>Domain uses unsupported IDN script<br>End-user must read and consent to all of the following legal agreements<br>FQDN fails generic validity regex<br>Invalid character(s) error<br>Invalid period range<br>Invalid tld error<br>Non-IDN domain name must not have dashes at the third and fourth position<br>Reserved name error<br>`authCode` cannot be empty<br>`domain` must match `sld.tld`<br>domain must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Re-send Contact E-mail Verification for specified Domain

<a id="opIdverifyEmail"></a>

> Code samples

```bash
curl https://example.com/v1/domains/string/verifyRegistrantEmail \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/domains/{domain}/verifyRegistrantEmail`

<h3 id="re-send-contact-e-mail-verification-for-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper for whom domain contact e-mail should be verified. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you're a Reseller, but purchased a Domain via http://www.godaddy.com|
|domain|path|string|true|Domain whose Contact E-mail should be verified.|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="re-send-contact-e-mail-verification-for-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` is not a valid Domain name|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-domains">Domains</h1>

## Retrieve the forwarding information for the given fqdn

<a id="opIddomainsForwardsGet"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/forwards/string \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/forwards/{fqdn}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="retrieve-the-forwarding-information-for-the-given-fqdn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|fqdn|path|string|true|The fully qualified domain name whose forwarding details are to be retrieved.|
|includeSubs|query|boolean|false|Optionally include all sub domains if the fqdn specified is a domain and not a sub domain.|

> Example responses

> 200 Response

```json
[
  {
    "fqdn": "string",
    "mask": {
      "description": "string",
      "keywords": "string",
      "title": "string"
    },
    "type": "REDIRECT_PERMANENT",
    "url": "http://example.com"
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-forwarding-information-for-the-given-fqdn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|A valid `fqdn` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-the-forwarding-information-for-the-given-fqdn-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DomainForwarding](#schemadomainforwarding)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Modify the forwarding information for the given fqdn

<a id="opIddomainsForwardsPut"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/forwards/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "mask": {
      "description": "string",
      "keywords": "string",
      "title": "string"
    },
    "type": "REDIRECT_PERMANENT",
    "url": "http://example.com"
  }'
```

`PUT /v2/customers/{customerId}/domains/forwards/{fqdn}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

> Body parameter

```json
{
  "mask": {
    "description": "string",
    "keywords": "string",
    "title": "string"
  },
  "type": "REDIRECT_PERMANENT",
  "url": "http://example.com"
}
```

<h3 id="modify-the-forwarding-information-for-the-given-fqdn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|fqdn|path|string|true|The fully qualified domain name whose forwarding details are to be modified.|
|body|body|[DomainForwardingCreate](#schemadomainforwardingcreate)|true|Domain forwarding rule to create or replace on the fqdn|
|» mask|body|[DomainForwardingMask](#schemadomainforwardingmask)|false|none|
|» type|body|string|true|The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>|
|» url|body|string(url)|true|Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|MASKED|
|» type|REDIRECT_PERMANENT|
|» type|REDIRECT_TEMPORARY|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="modify-the-forwarding-information-for-the-given-fqdn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|The domain status does not allow performing the operation|[Error](#schemaerror)|
|422|Unprocessable Entity|Request body doesn't fulfill schema, see details in `fields`|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new forwarding configuration for the given FQDN

<a id="opIddomainsForwardsPost"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/forwards/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "mask": {
      "description": "string",
      "keywords": "string",
      "title": "string"
    },
    "type": "REDIRECT_PERMANENT",
    "url": "http://example.com"
  }'
```

`POST /v2/customers/{customerId}/domains/forwards/{fqdn}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

> Body parameter

```json
{
  "mask": {
    "description": "string",
    "keywords": "string",
    "title": "string"
  },
  "type": "REDIRECT_PERMANENT",
  "url": "http://example.com"
}
```

<h3 id="create-a-new-forwarding-configuration-for-the-given-fqdn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your own customer id.|
|fqdn|path|string|true|The fully qualified domain name whose forwarding details are to be modified.|
|body|body|[DomainForwardingCreate](#schemadomainforwardingcreate)|true|Domain forwarding rule to create for the specified fqdn|
|» mask|body|[DomainForwardingMask](#schemadomainforwardingmask)|false|none|
|» type|body|string|true|The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>|
|» url|body|string(url)|true|Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|MASKED|
|» type|REDIRECT_PERMANENT|
|» type|REDIRECT_TEMPORARY|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="create-a-new-forwarding-configuration-for-the-given-fqdn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|Provided `fqdn` already has forwarding setup|[Error](#schemaerror)|
|422|Unprocessable Entity|Request body doesn't fulfill schema, see details in `fields`|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a forwarding cancellation request for the given fqdn

<a id="opIddomainsForwardsDelete"></a>

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/forwards/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/customers/{customerId}/domains/forwards/{fqdn}`

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

<h3 id="submit-a-forwarding-cancellation-request-for-the-given-fqdn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|fqdn|path|string|true|The fully qualified domain name whose forwarding details are to be deleted.|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="submit-a-forwarding-cancellation-request-for-the-given-fqdn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|409|Conflict|The domain status does not allow performing the operation|[Error](#schemaerror)|
|422|Unprocessable Entity|A valid `fqdn` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve details for the specified Domain

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/string \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/{domain}`

<h3 id="retrieve-details-for-the-specified-domain-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain name whose details are to be retrieved|
|includes|query|[string]|false|Optional details to be included in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includes|actions|
|includes|contacts|
|includes|dnssecRecords|
|includes|registryStatusCodes|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "completedAt": "string",
      "createdAt": "string",
      "modifiedAt": "string",
      "origination": "USER",
      "reason": {
        "code": "string",
        "fields": [
          {
            "code": "string",
            "message": "string",
            "path": "string",
            "pathRelated": "string"
          }
        ],
        "message": "string"
      },
      "requestId": "string",
      "startedAt": "string",
      "status": "ACCEPTED",
      "type": "AUTH_CODE_PURCHASE"
    }
  ],
  "authCode": "string",
  "contacts": {
    "admin": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "billing": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "registrant": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "tech": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    }
  },
  "createdAt": "string",
  "deletedAt": "string",
  "dnssecRecords": [
    {
      "algorithm": "RSAMD5",
      "digest": "string",
      "digestType": "SHA1",
      "flags": "ZSK",
      "keyTag": 0,
      "maxSignatureLife": 0,
      "publicKey": "string"
    }
  ],
  "domain": "string",
  "domainId": "string",
  "expirationProtected": true,
  "expiresAt": "string",
  "holdRegistrar": true,
  "hostnames": [
    "string"
  ],
  "locked": true,
  "modifiedAt": "string",
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "registryStatusCodes": [
    "ADD_PERIOD"
  ],
  "renewAuto": true,
  "renewDeadline": "string",
  "renewal": {
    "currency": "USD",
    "price": 0,
    "renewable": true
  },
  "status": "ACTIVE",
  "subaccountId": "string",
  "transferAwayEligibleAt": "string",
  "transferProtected": true,
  "verifications": {
    "domainName": "APPROVED",
    "icann": "COMPLETED",
    "realName": "APPROVED"
  }
}
```

> 203 Response

```json
{
  "actions": [
    {
      "completedAt": "string",
      "createdAt": "string",
      "modifiedAt": "string",
      "origination": "USER",
      "reason": {
        "code": "string",
        "fields": [
          {
            "code": "string",
            "message": "string",
            "path": "string",
            "pathRelated": "string"
          }
        ],
        "message": "string"
      },
      "requestId": "string",
      "startedAt": "string",
      "status": "ACCEPTED",
      "type": "AUTH_CODE_PURCHASE"
    }
  ],
  "authCode": "string",
  "contacts": {
    "admin": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "billing": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "registrant": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "tech": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    }
  },
  "createdAt": "string",
  "deletedAt": "string",
  "dnssecRecords": [
    {
      "algorithm": "RSAMD5",
      "digest": "string",
      "digestType": "SHA1",
      "flags": "ZSK",
      "keyTag": 0,
      "maxSignatureLife": 0,
      "publicKey": "string"
    }
  ],
  "domain": "string",
  "domainId": "string",
  "expirationProtected": true,
  "expiresAt": "string",
  "holdRegistrar": true,
  "hostnames": [
    "string"
  ],
  "locked": true,
  "modifiedAt": "string",
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "registryStatusCodes": [
    "ADD_PERIOD"
  ],
  "renewAuto": true,
  "renewDeadline": "string",
  "renewal": {
    "currency": "USD",
    "price": 0,
    "renewable": true
  },
  "status": "ACTIVE",
  "subaccountId": "string",
  "transferAwayEligibleAt": "string",
  "transferProtected": true,
  "verifications": {
    "domainName": "APPROVED",
    "icann": "COMPLETED",
    "realName": "APPROVED"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-details-for-the-specified-domain-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainDetailV2](#schemadomaindetailv2)|
|203|Non-Authoritative Information|Request was partially successful, but actions, contacts, and/or verifications may not be included.|[DomainDetailV2](#schemadomaindetailv2)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The contact does not exist|[Error](#schemaerror)|
|422|Unprocessable Entity|`domain` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Purchase a restore for the given domain to bring it out of redemption

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/string/redeem \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "agreedAt": "string",
      "agreedBy": "string",
      "currency": "USD",
      "fee": 0,
      "price": 0
    }
  }'
```

`POST /v2/customers/{customerId}/domains/{domain}/redeem`

> Body parameter

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "currency": "USD",
    "fee": 0,
    "price": 0
  }
}
```

<h3 id="purchase-a-restore-for-the-given-domain-to-bring-it-out-of-redemption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain to request redeem for|
|body|body|[DomainRedeemV2](#schemadomainredeemv2)|false|Options for redeeming existing Domain|
|» consent|body|[ConsentRedemption](#schemaconsentredemption)|true|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="purchase-a-restore-for-the-given-domain-to-bring-it-out-of-redemption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/REDEEM to poll status|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|409|Conflict|There is already a similar action processing|[Error](#schemaerror)|
|422|Unprocessable Entity|Domain invalid|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Initiate transfer out to another registrar for a .uk domain.

> Code samples

```bash
curl 'https://example.com/v2/customers/string/domains/string/transferOut?registrar=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/customers/{customerId}/domains/{domain}/transferOut`

<h3 id="initiate-transfer-out-to-another-registrar-for-a-uk-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain to initiate the transfer out for|
|registrar|query|string|true|Registrar tag to push transfer to|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="initiate-transfer-out-to-another-registrar-for-a-uk-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted. You may use GET /v2/customers/{customerId}/domains/{domain}/actions/TRANSFER_OUT_REQUESTED to poll status|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|409|Conflict|There is already a similar action processing|[Error](#schemaerror)|
|422|Unprocessable Entity|Domain invalid. TLD must be .uk|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of upcoming system Maintenances

> Code samples

```bash
curl https://example.com/v2/domains/maintenances \
  -H 'Accept: application/json'
```

`GET /v2/domains/maintenances`

<h3 id="retrieve-a-list-of-upcoming-system-maintenances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|status|query|string|false|Only include results with the selected `status` value.  Returns all results if omitted<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>|
|modifiedAtAfter|query|string(iso-datetime)|false|Only include results with `modifiedAt` after the supplied date|
|startsAtAfter|query|string(iso-datetime)|false|Only include results with `startsAt` after the supplied date|
|limit|query|integer|false|Maximum number of results to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACTIVE|
|status|CANCELLED|

> Example responses

> 200 Response

```json
{
  "createdAt": "string",
  "endsAt": "string",
  "environment": "OTE",
  "maintenanceId": "string",
  "modifiedAt": "string",
  "reason": "EMERGENCY",
  "startsAt": "string",
  "status": "ACTIVE",
  "summary": "string",
  "tlds": [
    "string"
  ],
  "type": "API"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-upcoming-system-maintenances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[Maintenance](#schemamaintenance)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Filter parameters don't match schema and/or restrictions|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the details for an upcoming system Maintenances

> Code samples

```bash
curl https://example.com/v2/domains/maintenances/string \
  -H 'Accept: application/json'
```

`GET /v2/domains/maintenances/{maintenanceId}`

<h3 id="retrieve-the-details-for-an-upcoming-system-maintenances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|maintenanceId|path|string|true|The identifier for the system maintenance|

> Example responses

> 200 Response

```json
{
  "createdAt": "string",
  "endsAt": "string",
  "environment": "OTE",
  "maintenanceId": "string",
  "modifiedAt": "string",
  "reason": "EMERGENCY",
  "startsAt": "string",
  "status": "ACTIVE",
  "summary": "string",
  "systems": [
    {
      "impact": [
        "DELAYED"
      ],
      "name": "DOMAIN_CHECKS"
    }
  ],
  "tlds": [
    "string"
  ],
  "type": "API"
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-details-for-an-upcoming-system-maintenances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[MaintenanceDetail](#schemamaintenancedetail)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The maintenance does not exist|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-actions">Actions</h1>

## Retrieves a list of the most recent actions for the specified domain

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/string/actions \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/{domain}/actions`

<h3 id="retrieves-a-list-of-the-most-recent-actions-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain whose actions are to be retrieved|

> Example responses

> 200 Response

```json
[
  {
    "completedAt": "string",
    "createdAt": "string",
    "modifiedAt": "string",
    "origination": "USER",
    "reason": {
      "code": "string",
      "fields": [
        {
          "code": "string",
          "message": "string",
          "path": "string",
          "pathRelated": "string"
        }
      ],
      "message": "string"
    },
    "requestId": "string",
    "startedAt": "string",
    "status": "ACCEPTED",
    "type": "AUTH_CODE_PURCHASE"
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieves-a-list-of-the-most-recent-actions-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieves-a-list-of-the-most-recent-actions-for-the-specified-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Action](#schemaaction)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves the most recent action for the specified domain

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/string/actions/AUTH_CODE_PURCHASE \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/{domain}/actions/{type}`

<h3 id="retrieves-the-most-recent-action-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain whose action is to be retrieved|
|type|path|string|true|The type of action to retrieve|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|AUTH_CODE_PURCHASE|
|type|AUTH_CODE_REGENERATE|
|type|AUTO_RENEWAL|
|type|BACKORDER_PURCHASE|
|type|BACKORDER_DELETE|
|type|BACKORDER_UPDATE|
|type|DNS_VERIFICATION|
|type|DNSSEC_CREATE|
|type|DNSSEC_DELETE|
|type|DOMAIN_DELETE|
|type|DOMAIN_UPDATE|
|type|DOMAIN_UPDATE_CONTACTS|
|type|DOMAIN_UPDATE_NAME_SERVERS|
|type|EXPIRY|
|type|ICANN_VERIFICATION|
|type|MIGRATE|
|type|MIGRATE_IN|
|type|PREMIUM|
|type|PRIVACY_PURCHASE|
|type|PRIVACY_DELETE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|RENEW_UNDO|
|type|TRADE|
|type|TRADE_CANCEL|
|type|TRADE_PURCHASE|
|type|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|type|TRADE_RESEND_AUTH_EMAIL|
|type|TRANSFER|
|type|TRANSFER_IN|
|type|TRANSFER_IN_CANCEL|
|type|TRANSFER_OUT|
|type|TRANSFER_OUT_ACCEPT|
|type|TRANSFER_OUT_REJECT|
|type|TRANSFER_OUT_REQUESTED|
|type|TRANSIT|

> Example responses

> 200 Response

```json
{
  "completedAt": "string",
  "createdAt": "string",
  "modifiedAt": "string",
  "origination": "USER",
  "reason": {
    "code": "string",
    "fields": [
      {
        "code": "string",
        "message": "string",
        "path": "string",
        "pathRelated": "string"
      }
    ],
    "message": "string"
  },
  "requestId": "string",
  "startedAt": "string",
  "status": "ACCEPTED",
  "type": "AUTH_CODE_PURCHASE"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieves-the-most-recent-action-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[Action](#schemaaction)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|409|Conflict|The domain status does not allow performing the operation|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel the most recent user action for the specified domain

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/string/actions/AUTH_CODE_PURCHASE \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v2/customers/{customerId}/domains/{domain}/actions/{type}`

<h3 id="cancel-the-most-recent-user-action-for-the-specified-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|domain|path|string|true|Domain whose action is to be cancelled|
|type|path|string|true|The type of action to cancel|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|AUTH_CODE_PURCHASE|
|type|AUTH_CODE_REGENERATE|
|type|BACKORDER_PURCHASE|
|type|BACKORDER_DELETE|
|type|BACKORDER_UPDATE|
|type|DNSSEC_CREATE|
|type|DNSSEC_DELETE|
|type|DOMAIN_DELETE|
|type|DOMAIN_UPDATE|
|type|DOMAIN_UPDATE_CONTACTS|
|type|DOMAIN_UPDATE_NAME_SERVERS|
|type|MIGRATE|
|type|PRIVACY_PURCHASE|
|type|PRIVACY_DELETE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|RENEW_UNDO|
|type|TRADE|
|type|TRADE_CANCEL|
|type|TRADE_PURCHASE|
|type|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|type|TRADE_RESEND_AUTH_EMAIL|
|type|TRANSFER|
|type|TRANSFER_IN_CANCEL|
|type|TRANSFER_OUT_ACCEPT|
|type|TRANSFER_OUT_REJECT|
|type|TRANSFER_OUT_REQUESTED|
|type|TRANSIT|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="cancel-the-most-recent-user-action-for-the-specified-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|409|Conflict|The action status does not allow performing the operation|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-notifications">Notifications</h1>

## Retrieve the next domain notification

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/notifications \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/notifications`

<h3 id="retrieve-the-next-domain-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|

> Example responses

> 200 Response

```json
{
  "addedAt": "",
  "metadata": "",
  "notificationId": "",
  "requestId": "string",
  "resource": "",
  "resourceType": "CONTACT",
  "status": "AWAITING",
  "type": "AUTH_CODE_PURCHASE"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-next-domain-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[DomainNotification](#schemadomainnotification)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The customer does not exist|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of notification types that are opted in

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/notifications/optIn \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/notifications/optIn`

<h3 id="retrieve-a-list-of-notification-types-that-are-opted-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|

> Example responses

> 200 Response

```json
[
  {
    "addedAt": "",
    "metadata": "",
    "notificationId": "",
    "requestId": "string",
    "resource": "",
    "resourceType": "CONTACT",
    "status": "AWAITING",
    "type": "AUTH_CODE_PURCHASE"
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-notification-types-that-are-opted-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The customer does not exist|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-a-list-of-notification-types-that-are-opted-in-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DomainNotification](#schemadomainnotification)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Opt in to recieve notifications for the submitted notification types

> Code samples

```bash
curl 'https://example.com/v2/customers/string/domains/notifications/optIn?types=AUTH_CODE_PURCHASE' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v2/customers/{customerId}/domains/notifications/optIn`

<h3 id="opt-in-to-recieve-notifications-for-the-submitted-notification-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|types|query|[string]|true|The notification types that should be opted in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|AUTH_CODE_PURCHASE|
|types|AUTH_CODE_REGENERATE|
|types|AUTO_RENEWAL|
|types|BACKORDER|
|types|BACKORDER_PURCHASE|
|types|BACKORDER_DELETE|
|types|BACKORDER_UPDATE|
|types|CONTACT_CREATE|
|types|CONTACT_DELETE|
|types|CONTACT_UPDATE|
|types|DNS_VERIFICATION|
|types|DNSSEC_CREATE|
|types|DNSSEC_DELETE|
|types|DOMAIN_DELETE|
|types|DOMAIN_UPDATE|
|types|DOMAIN_UPDATE_CONTACTS|
|types|DOMAIN_UPDATE_NAME_SERVERS|
|types|EXPIRY|
|types|HOST_CREATE|
|types|HOST_DELETE|
|types|ICANN_VERIFICATION|
|types|MIGRATE|
|types|MIGRATE_IN|
|types|PREMIUM|
|types|PRIVACY_PURCHASE|
|types|PRIVACY_DELETE|
|types|REDEEM|
|types|REGISTER|
|types|RENEW|
|types|RENEW_UNDO|
|types|TRADE|
|types|TRADE_CANCEL|
|types|TRADE_PURCHASE|
|types|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|types|TRADE_RESEND_AUTH_EMAIL|
|types|TRANSFER|
|types|TRANSFER_IN|
|types|TRANSFER_IN_CANCEL|
|types|TRANSFER_OUT|
|types|TRANSFER_OUT_ACCEPT|
|types|TRANSFER_OUT_REJECT|
|types|TRANSFER_OUT_REQUESTED|
|types|TRANSIT|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="opt-in-to-recieve-notifications-for-the-submitted-notification-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Command successful|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The customer does not exist|[Error](#schemaerror)|
|422|Unprocessable Entity|`type` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the schema for the notification data for the specified notification type

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/notifications/schemas/AUTO_RENEWAL \
  -H 'Accept: application/json'
```

`GET /v2/customers/{customerId}/domains/notifications/schemas/{type}`

<h3 id="retrieve-the-schema-for-the-notification-data-for-the-specified-notification-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|type|path|string|true|The notification type whose schema should be retrieved|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|AUTO_RENEWAL|
|type|BACKORDER|
|type|BACKORDER_PURCHASE|
|type|EXPIRY|
|type|PREMIUM|
|type|PRIVACY_PURCHASE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|TRADE|
|type|TRANSFER|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "models": {},
  "properties": {},
  "required": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-the-schema-for-the-notification-data-for-the-specified-notification-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[JsonSchema](#schemajsonschema)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The schema type does not exist|[Error](#schemaerror)|
|422|Unprocessable Entity|`type` must be specified|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Acknowledge a domain notification

> Code samples

```bash
curl https://example.com/v2/customers/string/domains/notifications/string/acknowledge \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge`

<h3 id="acknowledge-a-domain-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|A client provided identifier for tracking this request.|
|customerId|path|string|true|The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you're operating on behalf of; otherwise use your shopper id.|
|notificationId|path|string|true|The notification ID to acknowledge|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="acknowledge-a-domain-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Message acknowledged|None|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|The domain does not exist|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "completedAt": "string",
  "createdAt": "string",
  "modifiedAt": "string",
  "origination": "USER",
  "reason": {
    "code": "string",
    "fields": [
      {
        "code": "string",
        "message": "string",
        "path": "string",
        "pathRelated": "string"
      }
    ],
    "message": "string"
  },
  "requestId": "string",
  "startedAt": "string",
  "status": "ACCEPTED",
  "type": "AUTH_CODE_PURCHASE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(iso-datetime)|false|none|Timestamp indicating when the action was completed|
|createdAt|string(iso-datetime)|true|none|Timestamp indicating when the action was created|
|modifiedAt|string(iso-datetime)|false|none|Timestamp indicating when the action was last modified|
|origination|string|true|none|The origination of the action<br/><ul><li><strong style='margin-left: 12px;'>USER</strong> - These are user requests.</li><li><strong style='margin-left: 12px;'>SYSTEM</strong> - These are system processing actions.</li></ul>|
|reason|[ActionReason](#schemaactionreason)|false|none|none|
|requestId|string|false|none|A client provided identifier (via X-Request-Id header) used for tracking individual requests|
|startedAt|string(iso-datetime)|false|none|Timestamp indicating when the action was started|
|status|string|true|none|The current status of the action<br/><ul><li><strong style='margin-left: 12px;'>ACCEPTED</strong> - The action has been queued, processing has not started.</li><li><strong style='margin-left: 12px;'>AWAITING</strong> - The action is waiting on a user input.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The action has been cancelled by the user.</li><li><strong style='margin-left: 12px;'>FAILED</strong> - An error occurred while the action was processing, no more processing will be performed.</li><li><strong style='margin-left: 12px;'>PENDING</strong> - The action is being processed.</li><li><strong style='margin-left: 12px;'>SUCCESS</strong> - The action has completed, no additional processing is required.</li></ul>|
|type|string|true|none|The type of action being performed<br/><ul><li><strong style='margin-left: 12px;'>AUTH_CODE_PURCHASE</strong> - Request for an auth code for a .de domain via POST /v2/customers/{customerId}/domains/{domain}/purchaseAuthCode.</li><li><strong style='margin-left: 12px;'>AUTH_CODE_REGENERATE</strong> - Request to regenerate the authCode for a domain via POST /v2/customers/{customerId}/domains/{domain}/regenerateAuthCode</li><li><strong style='margin-left: 12px;'>AUTO_RENEWAL</strong> - A Domain Auto Renew is in progress.</li><li><strong style='margin-left: 12px;'>BACKORDER_PURCHASE</strong> - Request to purchase a domain backorder via POST /v2/customers/{customerId}/domains/backorders/purchase.</li><li><strong style='margin-left: 12px;'>BACKORDER_DELETE</strong> - Request to cancel the current domain backorder via DELETE /v2/customers/{customerId}/domains/backorders/{domain}.</li><li><strong style='margin-left: 12px;'>BACKORDER_UPDATE</strong> - Request update the current domain backorder via PATCH /v2/customers/{customerId}/domains/backorders/{domain}.</li><li><strong style='margin-left: 12px;'>CONTACT_CREATE</strong> - Request to create a contact via POST /v2/customers/{customerId}/domains/contacts.</li><li><strong style='margin-left: 12px;'>CONTACT_DELETE</strong> - Request to delete a contact via DELETE /v2/customers/{customerId}/domains/contacts/{contactId}</li><li><strong style='margin-left: 12px;'>CONTACT_UPDATE</strong> - Request to update a contact via PATCH /v2/customers/{customerId}/domains/contacts/{contactId}</li><li><strong style='margin-left: 12px;'>DNS_VERIFICATION</strong> - Domain requires zone file setup.</li><li><strong style='margin-left: 12px;'>DNSSEC_CREATE</strong> - Request to create DNSSEC record for the domain via PATCH /v2/customers/{customerId}/domains/{domain}/dnssecRecords.</li><li><strong style='margin-left: 12px;'>DNSSEC_DELETE</strong> - Request to delete DNSSEC record for the domain via DELETE /v2/customers/{customerId}/domains/{domain}/dnssecRecords.</li><li><strong style='margin-left: 12px;'>DOMAIN_DELETE</strong> - Request to delete the domain via DELETE /v2/customers/{customerId}/domains/{domain}</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE</strong> - Request to update the domain via PATCH /v2/customers/{customerId}/domains/{domain}</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE_CONTACTS</strong> -Request to update the domain contacts via PATCH /v2/customers/{customerId}/domains/{domain}/contacts</li><li><strong style='margin-left: 12px;'>DOMAIN_UPDATE_NAME_SERVERS</strong> - Request to update the domain name servers via PUT /v2/customers/{customerId}/domains/{domain}/nameServers</li><li><strong style='margin-left: 12px;'>EXPIRY</strong> - A Domain Expiration is in progress.</li><li><strong style='margin-left: 12px;'>HOST_CREATE</strong> - Request to create a hostname via PUT /v2/customers/{customerId}/domains/{domain}/hosts/{hostname}</li><li><strong style='margin-left: 12px;'>HOST_DELETE</strong> - Request to delete a hostname via DELETE /v2/customers/{customerId}/domains/{domain}/hosts/{hostname}</li><li><strong style='margin-left: 12px;'>ICANN_VERIFICATION</strong> - Domain requires registrant verification for Icann.</li><li><strong style='margin-left: 12px;'>PREMIUM</strong> - Premium Domain domain sale is in progress.</li><li><strong style='margin-left: 12px;'>PRIVACY_PURCHASE</strong> - Request to purchase privacy for a domain via POST /v2/customers/{customerId}/domains/{domain}/privacy/purchase</li><li><strong style='margin-left: 12px;'>PRIVACY_DELETE</strong> - Request to remove privacy from a domain via DELETE /v2/customers/{customerId}/domains/{domain}/privacy</li><li><strong style='margin-left: 12px;'>REDEEM</strong> - Request to redeem a domain via POST /v2/customers/{customerId}/domains/{domain}/redeem</li><li><strong style='margin-left: 12px;'>REGISTER</strong> - Request to register a domain via POST /v2/customers/{customerId}/domains/{domain}/register</li><li><strong style='margin-left: 12px;'>RENEW</strong> - Request to renew a domain via POST /v2/customers/{customerId}/domains/{domain}/renew</li><li><strong style='margin-left: 12px;'>RENEW_UNDO</strong> - Request to undo a renewal for a uk domain via POST /v2/customers/{customerId}/domains/{domain}/undoRenew</li><li><strong style='margin-left: 12px;'>TRADE</strong> - A domain trade request is in progress</li><li><strong style='margin-left: 12px;'>TRADE_CANCEL</strong> - Request to cancel a trade for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradeCancel</li><li><strong style='margin-left: 12px;'>TRADE_PURCHASE</strong> - Request to purchase a trade for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradePurchase</li><li><strong style='margin-left: 12px;'>TRADE_PURCHASE_AUTH_TEXT_MESSAGE</strong> - Request for a trade purchase text message for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradePurchaseAuthorizationTextMessage</li><li><strong style='margin-left: 12px;'>TRADE_RESEND_AUTH_EMAIL</strong> - Request to resend the trade auth email message for a domain via POST /v2/customers/{customerId}/domains/{domain}/tradeResendAuthorizationEmail</li><li><strong style='margin-left: 12px;'>TRANSFER</strong> - Request to transfer a domain via POST /v2/customers/{customerId}/domains/{domain}/transfer</li><li><strong style='margin-left: 12px;'>TRANSFER_IN</strong> - A domain transfer in request is in progress.</li><li><strong style='margin-left: 12px;'>TRANSFER_IN_CANCEL</strong> - Request to cancel a domain transfer via POST /v2/customers/{customerId}/domains/{domain}/transferInCancel</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT</strong> - A domain transfer out request is in progress.</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_ACCEPT</strong> - Request to accept a transfer out request for a domain via POST /v2/customers/{customerId}/domains/{domain}/transferOutAccept</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_REJECT</strong> - Request to reject a transfer out request for a domain via POST /v2/customers/{customerId}/domains/{domain}/transferOutReject</li><li><strong style='margin-left: 12px;'>TRANSFER_OUT_REQUESTED</strong> - Request to transfer out for a domain (.de) via POST /v2/customers/{customerId}/domains/{domain}/transferOut</li><li><strong style='margin-left: 12px;'>TRANSIT</strong> - Request to transit a de or at domain at the registry via POST /v2/customers/{customerId}/domains/{domain}/transit</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|origination|USER|
|origination|SYSTEM|
|status|ACCEPTED|
|status|AWAITING|
|status|CANCELLED|
|status|FAILED|
|status|PENDING|
|status|SUCCESS|
|type|AUTH_CODE_PURCHASE|
|type|AUTH_CODE_REGENERATE|
|type|AUTO_RENEWAL|
|type|BACKORDER_PURCHASE|
|type|BACKORDER_DELETE|
|type|BACKORDER_UPDATE|
|type|CONTACT_CREATE|
|type|CONTACT_DELETE|
|type|CONTACT_UPDATE|
|type|DNS_VERIFICATION|
|type|DNSSEC_CREATE|
|type|DNSSEC_DELETE|
|type|DOMAIN_DELETE|
|type|DOMAIN_UPDATE|
|type|DOMAIN_UPDATE_CONTACTS|
|type|DOMAIN_UPDATE_NAME_SERVERS|
|type|EXPIRY|
|type|HOST_CREATE|
|type|HOST_DELETE|
|type|ICANN_VERIFICATION|
|type|MIGRATE|
|type|MIGRATE_IN|
|type|PREMIUM|
|type|PRIVACY_PURCHASE|
|type|PRIVACY_DELETE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|RENEW_UNDO|
|type|TRADE|
|type|TRADE_CANCEL|
|type|TRADE_PURCHASE|
|type|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|type|TRADE_RESEND_AUTH_EMAIL|
|type|TRANSFER|
|type|TRANSFER_IN|
|type|TRANSFER_IN_CANCEL|
|type|TRANSFER_OUT|
|type|TRANSFER_OUT_ACCEPT|
|type|TRANSFER_OUT_REJECT|
|type|TRANSFER_OUT_REQUESTED|
|type|TRANSIT|

<h2 id="tocS_ActionReason">ActionReason</h2>
<!-- backwards compatibility -->
<a id="schemaactionreason"></a>
<a id="schema_ActionReason"></a>
<a id="tocSactionreason"></a>
<a id="tocsactionreason"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier, suitable for indicating the reason for the current status and how to handle within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the code|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "city": "string",
  "country": "US",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string(street-address)|true|none|none|
|address2|string(street-address2)|false|none|none|
|city|string(city-name)|true|none|none|
|country|string(iso-country-code)|true|none|Two-letter ISO country code to be used as a hint for target region<br/><br/><br>NOTE: These are sample values, there are many<br><a href='http://www.iso.org/iso/country_codes.htm'>more</a>|
|postalCode|string(postal-code)|true|none|Postal or zip code|
|state|string(state-province-territory)|true|none|State or province or territory|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AC|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KR|
|country|KV|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|ST|
|country|SV|
|country|SX|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TP|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_ArrayOfDNSRecord">ArrayOfDNSRecord</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofdnsrecord"></a>
<a id="schema_ArrayOfDNSRecord"></a>
<a id="tocSarrayofdnsrecord"></a>
<a id="tocsarrayofdnsrecord"></a>

```json
[
  {
    "data": "string",
    "name": "string",
    "port": 1,
    "priority": 0,
    "protocol": "string",
    "service": "string",
    "ttl": 0,
    "type": "A",
    "weight": 0
  }
]
```

<h2 id="tocS_Consent">Consent</h2>
<!-- backwards compatibility -->
<a id="schemaconsent"></a>
<a id="schema_Consent"></a>
<a id="tocSconsent"></a>
<a id="tocsconsent"></a>

```json
{
  "agreedAt": "string",
  "agreedBy": "string",
  "agreementKeys": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreedAt|string(iso-datetime)|true|none|Timestamp indicating when the end-user consented to these legal agreements|
|agreedBy|string|true|none|Originating client IP address of the end-user's computer when they consented to these legal agreements|
|agreementKeys|[string]|true|none|Unique identifiers of the legal agreements to which the end-user has agreed, as returned from the/domains/agreements endpoint|

<h2 id="tocS_ConsentDomainUpdate">ConsentDomainUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaconsentdomainupdate"></a>
<a id="schema_ConsentDomainUpdate"></a>
<a id="tocSconsentdomainupdate"></a>
<a id="tocsconsentdomainupdate"></a>

```json
{
  "agreedAt": "string",
  "agreedBy": "string",
  "agreementKeys": [
    "EXPOSE_WHOIS"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreedAt|string(iso-datetime)|true|none|Timestamp indicating when the end-user consented to these agreements|
|agreedBy|string|true|none|Originating client IP address of the end-user's computer when they consented to the agreements|
|agreementKeys|[string]|true|none|Unique identifiers of the agreements to which the end-user has agreed, as required by the elements being updated<br/><ul><li><strong style='margin-left: 12px;'>EXPOSE_WHOIS</strong> - Required when the exposeWhois field is updated to true</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|agreementKeys|EXPOSE_WHOIS|

<h2 id="tocS_ConsentRedemption">ConsentRedemption</h2>
<!-- backwards compatibility -->
<a id="schemaconsentredemption"></a>
<a id="schema_ConsentRedemption"></a>
<a id="tocSconsentredemption"></a>
<a id="tocsconsentredemption"></a>

```json
{
  "agreedAt": "string",
  "agreedBy": "string",
  "currency": "USD",
  "fee": 0,
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreedAt|string(iso-datetime)|true|none|Timestamp indicating when the end-user consented to these legal agreements|
|agreedBy|string|true|none|Originating client IP address of the end-user's computer when they consented to these legal agreements|
|currency|string(iso-currency-code)|true|none|Currency in which the `price` and `fee` are listed|
|fee|integer(currency-micro-unit)|true|none|Fee charged for the domain redemption. Please use GET /v2/customers/{customerId}/domains/{domain} to retrieve the redemption fee and currency for the domain|
|price|integer(currency-micro-unit)|true|none|Price for the domain renewal (if domain renewal required for redemption). Please use GET /v2/customers/{customerId}/domains/{domain} to retrieve the redemption price and currency for the domain|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "addressMailing": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "US",
    "postalCode": "string",
    "state": "string"
  },
  "email": "user@example.com",
  "fax": "string",
  "jobTitle": "string",
  "nameFirst": "string",
  "nameLast": "string",
  "nameMiddle": "string",
  "organization": "string",
  "phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressMailing|[Address](#schemaaddress)|true|none|none|
|email|string(email)|true|none|none|
|fax|string(phone)|false|none|none|
|jobTitle|string|false|none|none|
|nameFirst|string(person-name)|true|none|none|
|nameLast|string(person-name)|true|none|none|
|nameMiddle|string|false|none|none|
|organization|string(organization-name)|false|none|none|
|phone|string(phone)|true|none|none|

<h2 id="tocS_ContactDomain">ContactDomain</h2>
<!-- backwards compatibility -->
<a id="schemacontactdomain"></a>
<a id="schema_ContactDomain"></a>
<a id="tocScontactdomain"></a>
<a id="tocscontactdomain"></a>

```json
{
  "_createdAt": "string",
  "_deleted": true,
  "_modifiedAt": "string",
  "_revision": 0,
  "addressMailing": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "US",
    "postalCode": "string",
    "state": "string"
  },
  "contactId": "string",
  "email": "user@example.com",
  "encoding": "ASCII",
  "exposeWhois": true,
  "fax": "string",
  "jobTitle": "string",
  "metadata": {},
  "nameFirst": "string",
  "nameLast": "string",
  "nameMiddle": "string",
  "organization": "string",
  "phone": "string",
  "tlds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_createdAt|string(iso-datetime)|false|none|Timestamp indicating when the contact was created|
|_deleted|boolean|false|none|Flag indicating if the contact has been logically deleted in the system|
|_modifiedAt|string(iso-datetime)|false|none|Timestamp indicating when the contact was last modified|
|_revision|integer|false|none|The current revision number of the contact.|
|addressMailing|[Address](#schemaaddress)|true|none|none|
|contactId|string|false|none|Unique identifier for this Contact|
|email|string(email)|true|none|none|
|encoding|string|false|none|The encoding of the contact data<br/><ul><li><strong style='margin-left: 12px;'>ASCII</strong> - Data contains only ASCII characters that are not region or language specific</li><li><strong style='margin-left: 12px;'>UTF-8</strong> - Data contains characters that are specific to a region or language</li></ul>|
|exposeWhois|boolean|true|none|Whether or not the contact details should be shown in the WHOIS|
|fax|string(phone)|false|none|none|
|jobTitle|string|false|none|none|
|metadata|object|false|none|The contact eligibility data fields as specified by GET /v2/customers/{customerId}/domains/contacts/schema/{tld}|
|nameFirst|string(person-name)|true|none|none|
|nameLast|string(person-name)|true|none|none|
|nameMiddle|string|false|none|none|
|organization|string(organization-name)|false|none|none|
|phone|string(phone)|true|none|none|
|tlds|[string]|false|none|The tlds that this contact can be assigned to|

#### Enumerated Values

|Property|Value|
|---|---|
|encoding|ASCII|
|encoding|UTF-8|

<h2 id="tocS_DNSRecord">DNSRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_DNSRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
{
  "data": "string",
  "name": "string",
  "port": 1,
  "priority": 0,
  "protocol": "string",
  "service": "string",
  "ttl": 0,
  "type": "A",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|none|
|name|string(domain)|true|none|none|
|port|integer|false|none|Service port (SRV only)|
|priority|integer(integer-positive)|false|none|Record priority (MX and SRV only)|
|protocol|string|false|none|Service protocol (SRV only)|
|service|string|false|none|Service type (SRV only)|
|ttl|integer(integer-positive)|false|none|none|
|type|string|true|none|none|
|weight|integer(integer-positive)|false|none|Record weight (SRV only)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|A|
|type|AAAA|
|type|CNAME|
|type|MX|
|type|NS|
|type|SOA|
|type|SRV|
|type|TXT|

<h2 id="tocS_DNSRecordCreateType">DNSRecordCreateType</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordcreatetype"></a>
<a id="schema_DNSRecordCreateType"></a>
<a id="tocSdnsrecordcreatetype"></a>
<a id="tocsdnsrecordcreatetype"></a>

```json
{
  "data": "string",
  "name": "string",
  "port": 1,
  "priority": 0,
  "protocol": "string",
  "service": "string",
  "ttl": 0,
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|none|
|name|string(domain)|true|none|none|
|port|integer|false|none|Service port (SRV only)|
|priority|integer(integer-positive)|false|none|Record priority (MX and SRV only)|
|protocol|string|false|none|Service protocol (SRV only)|
|service|string|false|none|Service type (SRV only)|
|ttl|integer(integer-positive)|false|none|none|
|weight|integer(integer-positive)|false|none|Record weight (SRV only)|

<h2 id="tocS_DNSRecordCreateTypeName">DNSRecordCreateTypeName</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordcreatetypename"></a>
<a id="schema_DNSRecordCreateTypeName"></a>
<a id="tocSdnsrecordcreatetypename"></a>
<a id="tocsdnsrecordcreatetypename"></a>

```json
{
  "data": "string",
  "port": 1,
  "priority": 0,
  "protocol": "string",
  "service": "string",
  "ttl": 0,
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|none|
|port|integer|false|none|Service port (SRV only)|
|priority|integer(integer-positive)|false|none|Record priority (MX and SRV only)|
|protocol|string|false|none|Service protocol (SRV only)|
|service|string|false|none|Service type (SRV only)|
|ttl|integer(integer-positive)|false|none|none|
|weight|integer(integer-positive)|false|none|Record weight (SRV only)|

<h2 id="tocS_DomainAvailableBulk">DomainAvailableBulk</h2>
<!-- backwards compatibility -->
<a id="schemadomainavailablebulk"></a>
<a id="schema_DomainAvailableBulk"></a>
<a id="tocSdomainavailablebulk"></a>
<a id="tocsdomainavailablebulk"></a>

```json
{
  "domains": [
    {
      "available": true,
      "currency": "USD",
      "definitive": true,
      "domain": "string",
      "period": 0,
      "price": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[DomainAvailableResponse](#schemadomainavailableresponse)]|true|none|Domain available response array|

<h2 id="tocS_DomainAvailableBulkMixed">DomainAvailableBulkMixed</h2>
<!-- backwards compatibility -->
<a id="schemadomainavailablebulkmixed"></a>
<a id="schema_DomainAvailableBulkMixed"></a>
<a id="tocSdomainavailablebulkmixed"></a>
<a id="tocsdomainavailablebulkmixed"></a>

```json
{
  "domains": [
    {
      "available": true,
      "currency": "USD",
      "definitive": true,
      "domain": "string",
      "period": 0,
      "price": 0
    }
  ],
  "errors": [
    {
      "code": "string",
      "domain": "string",
      "message": "string",
      "path": "string",
      "status": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[DomainAvailableResponse](#schemadomainavailableresponse)]|true|none|Domain available response array|
|errors|[[DomainAvailableError](#schemadomainavailableerror)]|false|none|Errors encountered while performing a domain available check|

<h2 id="tocS_DomainAvailableError">DomainAvailableError</h2>
<!-- backwards compatibility -->
<a id="schemadomainavailableerror"></a>
<a id="schema_DomainAvailableError"></a>
<a id="tocSdomainavailableerror"></a>
<a id="tocsdomainavailableerror"></a>

```json
{
  "code": "string",
  "domain": "string",
  "message": "string",
  "path": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|domain|string|true|none|Domain name|
|message|string|false|none|Human-readable, English description of the error|
|path|string(json-path)|true|none|<ul><br><li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li><br><strong style='margin-left: 12px;'>OR</strong><br><li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li><br></ul>|
|status|integer|true|none|HTTP status code that would return for a single check|

<h2 id="tocS_DomainAvailableResponse">DomainAvailableResponse</h2>
<!-- backwards compatibility -->
<a id="schemadomainavailableresponse"></a>
<a id="schema_DomainAvailableResponse"></a>
<a id="tocSdomainavailableresponse"></a>
<a id="tocsdomainavailableresponse"></a>

```json
{
  "available": true,
  "currency": "USD",
  "definitive": true,
  "domain": "string",
  "period": 0,
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|true|none|Whether or not the domain name is available|
|currency|string(iso-currency-code)|false|none|Currency in which the `price` is listed. Only returned if tld is offered|
|definitive|boolean|true|none|Whether or not the `available` answer has been definitively verified with the registry|
|domain|string|true|none|Domain name|
|period|integer(integer-positive)|false|none|Number of years included in the price. Only returned if tld is offered|
|price|integer(currency-micro-unit)|false|none|Price of the domain excluding taxes or fees. Only returned if tld is offered|

<h2 id="tocS_DomainContacts">DomainContacts</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontacts"></a>
<a id="schema_DomainContacts"></a>
<a id="tocSdomaincontacts"></a>
<a id="tocsdomaincontacts"></a>

```json
{
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactAdmin|[Contact](#schemacontact)|false|none|none|
|contactBilling|[Contact](#schemacontact)|false|none|none|
|contactRegistrant|[Contact](#schemacontact)|true|none|none|
|contactTech|[Contact](#schemacontact)|false|none|none|

<h2 id="tocS_DomainContactsV2">DomainContactsV2</h2>
<!-- backwards compatibility -->
<a id="schemadomaincontactsv2"></a>
<a id="schema_DomainContactsV2"></a>
<a id="tocSdomaincontactsv2"></a>
<a id="tocsdomaincontactsv2"></a>

```json
{
  "admin": {
    "_createdAt": "string",
    "_deleted": true,
    "_modifiedAt": "string",
    "_revision": 0,
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "contactId": "string",
    "email": "user@example.com",
    "encoding": "ASCII",
    "exposeWhois": true,
    "fax": "string",
    "jobTitle": "string",
    "metadata": {},
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string",
    "tlds": [
      "string"
    ]
  },
  "billing": {
    "_createdAt": "string",
    "_deleted": true,
    "_modifiedAt": "string",
    "_revision": 0,
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "contactId": "string",
    "email": "user@example.com",
    "encoding": "ASCII",
    "exposeWhois": true,
    "fax": "string",
    "jobTitle": "string",
    "metadata": {},
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string",
    "tlds": [
      "string"
    ]
  },
  "registrant": {
    "_createdAt": "string",
    "_deleted": true,
    "_modifiedAt": "string",
    "_revision": 0,
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "contactId": "string",
    "email": "user@example.com",
    "encoding": "ASCII",
    "exposeWhois": true,
    "fax": "string",
    "jobTitle": "string",
    "metadata": {},
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string",
    "tlds": [
      "string"
    ]
  },
  "tech": {
    "_createdAt": "string",
    "_deleted": true,
    "_modifiedAt": "string",
    "_revision": 0,
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "contactId": "string",
    "email": "user@example.com",
    "encoding": "ASCII",
    "exposeWhois": true,
    "fax": "string",
    "jobTitle": "string",
    "metadata": {},
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string",
    "tlds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|[ContactDomain](#schemacontactdomain)|false|none|none|
|billing|[ContactDomain](#schemacontactdomain)|false|none|none|
|registrant|[ContactDomain](#schemacontactdomain)|false|none|none|
|tech|[ContactDomain](#schemacontactdomain)|false|none|none|

<h2 id="tocS_DomainDetail">DomainDetail</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetail"></a>
<a id="schema_DomainDetail"></a>
<a id="tocSdomaindetail"></a>
<a id="tocsdomaindetail"></a>

```json
{
  "authCode": "string",
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "domainId": 0,
  "expirationProtected": true,
  "expires": "1970-01-01T00:00:00Z",
  "exposeWhois": true,
  "holdRegistrar": true,
  "locked": true,
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "renewAuto": true,
  "renewDeadline": "1970-01-01T00:00:00Z",
  "status": "string",
  "subaccountId": "string",
  "transferAwayEligibleAt": "1970-01-01T00:00:00Z",
  "transferProtected": true,
  "verifications": {
    "domainName": {
      "status": "APPROVED"
    },
    "realName": {
      "status": "APPROVED"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|true|none|Authorization code for transferring the Domain|
|contactAdmin|[Contact](#schemacontact)|true|none|none|
|contactBilling|[Contact](#schemacontact)|true|none|none|
|contactRegistrant|[Contact](#schemacontact)|true|none|none|
|contactTech|[Contact](#schemacontact)|true|none|none|
|createdAt|string(date-time)|true|none|Date and time when this domain was created|
|deletedAt|string(date-time)|false|none|Date and time when this domain was deleted|
|domain|string|true|none|Name of the domain|
|domainId|number(double)|true|none|Unique identifier for this Domain|
|expirationProtected|boolean|true|none|Whether or not the domain is protected from expiration|
|expires|string(date-time)|false|none|Date and time when this domain will expire|
|exposeWhois|boolean|false|none|Whether or not the domain contact details should be shown in the WHOIS|
|holdRegistrar|boolean|true|none|Whether or not the domain is on-hold by the registrar|
|locked|boolean|true|none|Whether or not the domain is locked to prevent transfers|
|nameServers|[string(host-name)]|true|none|Fully-qualified domain names for DNS servers|
|privacy|boolean|true|none|Whether or not the domain has privacy protection|
|registrarCreatedAt|string(iso-datetime)|false|none|Date and time when this domain was created by the registrar|
|renewAuto|boolean|true|none|Whether or not the domain is configured to automatically renew|
|renewDeadline|string(date-time)|true|none|Date the domain must renew on|
|status|string|true|none|Processing status of the domain<br/><ul><br><li><strong style='margin-left: 12px;'>ACTIVE</strong> - All is well</li><br><li><strong style='margin-left: 12px;'>AWAITING*</strong> - System is waiting for the end-user to complete an action</li><br><li><strong style='margin-left: 12px;'>CANCELLED*</strong> - Domain has been cancelled, and may or may not be reclaimable</li><br><li><strong style='margin-left: 12px;'>CONFISCATED</strong> - Domain has been confiscated, usually for abuse, chargeback, or fraud</li><br><li><strong style='margin-left: 12px;'>DISABLED*</strong> - Domain has been disabled</li><br><li><strong style='margin-left: 12px;'>EXCLUDED*</strong> - Domain has been excluded from Firehose registration</li><br><li><strong style='margin-left: 12px;'>EXPIRED*</strong> - Domain has expired</li><br><li><strong style='margin-left: 12px;'>FAILED*</strong> - Domain has failed a required action, and the system is no longer retrying</li><br><li><strong style='margin-left: 12px;'>HELD*</strong> - Domain has been placed on hold, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>LOCKED*</strong> - Domain has been locked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>PARKED*</strong> - Domain has been parked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>PENDING*</strong> - Domain is working its way through an automated workflow</li><br><li><strong style='margin-left: 12px;'>RESERVED*</strong> - Domain is reserved, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>REVERTED</strong> - Domain has been reverted, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>SUSPENDED*</strong> - Domain has been suspended, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>TRANSFERRED*</strong> - Domain has been transferred out</li><br><li><strong style='margin-left: 12px;'>UNKNOWN</strong> - Domain is in an unknown state</li><br><li><strong style='margin-left: 12px;'>UNLOCKED*</strong> - Domain has been unlocked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>UNPARKED*</strong> - Domain has been unparked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>UPDATED*</strong> - Domain ownership has been transferred to another account</li><br></ul>|
|subaccountId|string|false|none|Reseller subaccount shopperid who can manage the domain|
|transferAwayEligibleAt|string(date-time)|false|none|Date and time when this domain is eligible to transfer|
|transferProtected|boolean|true|none|Whether or not the domain is protected from transfer|
|verifications|[VerificationsDomain](#schemaverificationsdomain)|false|none|none|

<h2 id="tocS_DomainDetailV2">DomainDetailV2</h2>
<!-- backwards compatibility -->
<a id="schemadomaindetailv2"></a>
<a id="schema_DomainDetailV2"></a>
<a id="tocSdomaindetailv2"></a>
<a id="tocsdomaindetailv2"></a>

```json
{
  "actions": [
    {
      "completedAt": "string",
      "createdAt": "string",
      "modifiedAt": "string",
      "origination": "USER",
      "reason": {
        "code": "string",
        "fields": [
          {
            "code": "string",
            "message": "string",
            "path": "string",
            "pathRelated": "string"
          }
        ],
        "message": "string"
      },
      "requestId": "string",
      "startedAt": "string",
      "status": "ACCEPTED",
      "type": "AUTH_CODE_PURCHASE"
    }
  ],
  "authCode": "string",
  "contacts": {
    "admin": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "billing": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "registrant": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    },
    "tech": {
      "_createdAt": "string",
      "_deleted": true,
      "_modifiedAt": "string",
      "_revision": 0,
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "contactId": "string",
      "email": "user@example.com",
      "encoding": "ASCII",
      "exposeWhois": true,
      "fax": "string",
      "jobTitle": "string",
      "metadata": {},
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string",
      "tlds": [
        "string"
      ]
    }
  },
  "createdAt": "string",
  "deletedAt": "string",
  "dnssecRecords": [
    {
      "algorithm": "RSAMD5",
      "digest": "string",
      "digestType": "SHA1",
      "flags": "ZSK",
      "keyTag": 0,
      "maxSignatureLife": 0,
      "publicKey": "string"
    }
  ],
  "domain": "string",
  "domainId": "string",
  "expirationProtected": true,
  "expiresAt": "string",
  "holdRegistrar": true,
  "hostnames": [
    "string"
  ],
  "locked": true,
  "modifiedAt": "string",
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "registryStatusCodes": [
    "ADD_PERIOD"
  ],
  "renewAuto": true,
  "renewDeadline": "string",
  "renewal": {
    "currency": "USD",
    "price": 0,
    "renewable": true
  },
  "status": "ACTIVE",
  "subaccountId": "string",
  "transferAwayEligibleAt": "string",
  "transferProtected": true,
  "verifications": {
    "domainName": "APPROVED",
    "icann": "COMPLETED",
    "realName": "APPROVED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|List of current actions in progress for this domain|
|authCode|string|true|none|Authorization code for transferring the Domain|
|contacts|[DomainContactsV2](#schemadomaincontactsv2)|true|none|none|
|createdAt|string(iso-datetime)|true|none|Date and time when this domain was created|
|deletedAt|string(iso-datetime)|false|none|Date and time when this domain was deleted|
|dnssecRecords|[[DomainDnssec](#schemadomaindnssec)]|false|none|List of active DNSSEC records for this domain|
|domain|string(domain)|true|none|Name of the domain|
|domainId|string|true|none|Unique identifier for this Domain|
|expirationProtected|boolean|true|none|Whether or not the domain is protected from expiration|
|expiresAt|string(iso-datetime)|false|none|Date and time when this domain will expire|
|holdRegistrar|boolean|true|none|Whether or not the domain is on-hold by the registrar|
|hostnames|[string(host-name)]|false|none|Hostnames owned by the domain|
|locked|boolean|true|none|Whether or not the domain is locked to prevent transfers|
|modifiedAt|string(iso-datetime)|false|none|Date and time when this domain was last modified|
|nameServers|[string(host-name)]|true|none|Fully-qualified domain names for DNS servers|
|privacy|boolean|true|none|Whether or not the domain has privacy protection|
|registrarCreatedAt|string(iso-datetime)|false|none|Date and time when this domain was created by the registrar|
|registryStatusCodes|[string]|false|none|The current registry status codes of the domain<br/><ul><li><strong style='margin-left: 12px;'>ADD_PERIOD</strong> - This grace period is provided after the initial registration of a domain name.</li><li><strong style='margin-left: 12px;'>AUTO_RENEW_PERIOD</strong> - This grace period is provided after a domain name registration period expires and is extended (renewed) automatically by the registry.</li><li><strong style='margin-left: 12px;'>CLIENT_DELETE_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to delete the domain.</li><li><strong style='margin-left: 12px;'>CLIENT_HOLD</strong> - This status code tells your domain's registry to not activate your domain in the DNS and as a consequence, it will not resolve.</li><li><strong style='margin-left: 12px;'>CLIENT_RENEW_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to renew your domain.</li><li><strong style='margin-left: 12px;'>CLIENT_TRANSFER_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to transfer the domain from your current registrar to another.</li><li><strong style='margin-left: 12px;'>CLIENT_UPDATE_PROHIBITED</strong> - This status code tells your domain's registry to reject requests to update the domain.</li><li><strong style='margin-left: 12px;'>INACTIVE</strong> - This status code indicates that delegation information (name servers) has not been associated with your domain.</li><li><strong style='margin-left: 12px;'>OK</strong> - This is the standard status for a domain, meaning it has no pending operations or prohibitions.</li><li><strong style='margin-left: 12px;'>PENDING_CREATE</strong> - This status code indicates that a request to create your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_DELETE</strong> - This status code indicates that the domain is either in a redemption period if combined with either REDEMPTION_PERIOD or PENDING_RESTORE, if not combined with these, then indicates that the redemption period for the domain has ended and domain will be be purged and dropped from the registry database.</li><li><strong style='margin-left: 12px;'>PENDING_RENEW</strong> - This status code indicates that a request to renew your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_RESTORE</strong> - This status code indicates that your registrar has asked the registry to restore your domain that was in REDEMPTION_PERIOD status</li><li><strong style='margin-left: 12px;'>PENDING_TRANSFER</strong> - This status code indicates that a request to transfer your domain to a new registrar has been received and is being processed.</li><li><strong style='margin-left: 12px;'>PENDING_UPDATE</strong> - This status code indicates that a request to update your domain has been received and is being processed.</li><li><strong style='margin-left: 12px;'>REDEMPTION_PERIOD</strong> - This status code indicates that your registrar has asked the registry to delete your domain.</li><li><strong style='margin-left: 12px;'>RENEW_PERIOD</strong> - This grace period is provided after a domain name registration period is explicitly extended (renewed) by the registrar.</li><li><strong style='margin-left: 12px;'>SERVER_DELETE_PROHIBITED</strong> - This status code prevents your domain from being deleted. </li><li><strong style='margin-left: 12px;'>SERVER_HOLD</strong> - This status code is set by your domain's Registry Operator. Your domain is not activated in the DNS.</li><li><strong style='margin-left: 12px;'>SERVER_RENEW_PROHIBITED</strong> - This status code indicates your domain's Registry Operator will not allow your registrar to renew your domain.</li><li><strong style='margin-left: 12px;'>SERVER_TRANSFER_PROHIBITED</strong> - This status code prevents your domain from being transferred from your current registrar to another. </li><li><strong style='margin-left: 12px;'>SERVER_UPDATE_PROHIBITED</strong> - This status code locks your domain preventing it from being updated.</li><li><strong style='margin-left: 12px;'>TRANSFER_PERIOD</strong> - This grace period is provided after the successful transfer of a domain name from one registrar to another. </li></ul>|
|renewAuto|boolean|true|none|Whether or not the domain is configured to automatically renew|
|renewDeadline|string(iso-datetime)|true|none|Date the domain must renew on|
|renewal|[RenewalDetails](#schemarenewaldetails)|false|none|none|
|status|string|true|none|The current status of the domain<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - Domain has been registered and is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - Domain has been cancelled by the user or system, and is not be reclaimable.</li><li><strong style='margin-left: 12px;'>DELETED_REDEEMABLE</strong> - Domain is deleted but is redeemable.</li><li><strong style='margin-left: 12px;'>EXPIRED</strong> - Domain has expired.</li><li><strong style='margin-left: 12px;'>FAILED</strong> - Domain registration or transfer error.</li><li><strong style='margin-left: 12px;'>LOCKED_REGISTRAR</strong> - Domain is locked at the registrar - this is usually the result of a spam, abuse, etc.</li><li><strong style='margin-left: 12px;'>PARKED</strong> - Domain has been parked.</li><li><strong style='margin-left: 12px;'>HELD_REGISTRAR</strong> - Domain is held at the registrar and cannot be transferred or modified - this is usually the result of a dispute.</li><li><strong style='margin-left: 12px;'>OWNERSHIP_CHANGED</strong> - Domain has been moved to another account.</li><li><strong style='margin-left: 12px;'>PENDING_TRANSFER</strong> - Domain transfer has been requested and is pending the transfer process.</li><li><strong style='margin-left: 12px;'>PENDING_REGISTRATION</strong> - Domain is pending setup at the registry.</li><li><strong style='margin-left: 12px;'>REPOSSESSED</strong> - Domain has been confiscated - this is usually the result of a chargeback, fraud, abuse, etc.).</li><li><strong style='margin-left: 12px;'>SUSPENDED</strong> - Domain is in violation and has been suspended.</li><li><strong style='margin-left: 12px;'>TRANSFERRED</strong> - Domain has been transferred to another registrar.</li></ul>|
|subaccountId|string|false|none|Reseller subaccount shopperid who can manage the domain|
|transferAwayEligibleAt|string(iso-datetime)|false|none|Date and time when this domain is eligible to transfer|
|transferProtected|boolean|true|none|Whether or not the domain is protected from transfer|
|verifications|[VerificationsDomainV2](#schemaverificationsdomainv2)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|registryStatusCodes|ADD_PERIOD|
|registryStatusCodes|AUTO_RENEW_PERIOD|
|registryStatusCodes|CLIENT_DELETE_PROHIBITED|
|registryStatusCodes|CLIENT_HOLD|
|registryStatusCodes|CLIENT_RENEW_PROHIBITED|
|registryStatusCodes|CLIENT_TRANSFER_PROHIBITED|
|registryStatusCodes|CLIENT_UPDATE_PROHIBITED|
|registryStatusCodes|INACTIVE|
|registryStatusCodes|OK|
|registryStatusCodes|PENDING_CREATE|
|registryStatusCodes|PENDING_DELETE|
|registryStatusCodes|PENDING_RENEW|
|registryStatusCodes|PENDING_RESTORE|
|registryStatusCodes|PENDING_TRANSFER|
|registryStatusCodes|PENDING_UPDATE|
|registryStatusCodes|REDEMPTION_PERIOD|
|registryStatusCodes|RENEW_PERIOD|
|registryStatusCodes|SERVER_DELETE_PROHIBITED|
|registryStatusCodes|SERVER_HOLD|
|registryStatusCodes|SERVER_RENEW_PROHIBITED|
|registryStatusCodes|SERVER_TRANSFER_PROHIBITED|
|registryStatusCodes|SERVER_UPDATE_PROHIBITED|
|registryStatusCodes|TRANSFER_PERIOD|
|status|ACTIVE|
|status|CANCELLED|
|status|DELETED_REDEEMABLE|
|status|EXPIRED|
|status|FAILED|
|status|LOCKED_REGISTRAR|
|status|PARKED|
|status|HELD_REGISTRAR|
|status|OWNERSHIP_CHANGED|
|status|PENDING_TRANSFER|
|status|PENDING_REGISTRATION|
|status|REPOSSESSED|
|status|SUSPENDED|
|status|TRANSFERRED|

<h2 id="tocS_DomainDnssec">DomainDnssec</h2>
<!-- backwards compatibility -->
<a id="schemadomaindnssec"></a>
<a id="schema_DomainDnssec"></a>
<a id="tocSdomaindnssec"></a>
<a id="tocsdomaindnssec"></a>

```json
{
  "algorithm": "RSAMD5",
  "digest": "string",
  "digestType": "SHA1",
  "flags": "ZSK",
  "keyTag": 0,
  "maxSignatureLife": 0,
  "publicKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|true|none|This identifies the cryptographic algorithm used to generate the signature<br/><ul><li><strong style='margin-left: 12px;'>RSAMD5</strong> - [01] DRSA/MD5 </li><li><strong style='margin-left: 12px;'>DSA</strong> - [03] DSA/SHA1</li><li><strong style='margin-left: 12px;'>RSASHA1</strong> - [05] RSA/SHA-1</li><li><strong style='margin-left: 12px;'>DSA_NSEC3_SHA1</strong> - [06] DSA-NSEC3-SHA1</li><li><strong style='margin-left: 12px;'>RSASHA1_NSEC3_SHA1</strong> - [07] RSASHA1-NSEC3-SHA1</li><li><strong style='margin-left: 12px;'>RSASHA256</strong> - [08] RSA/SHA-256</li><li><strong style='margin-left: 12px;'>RSASHA512</strong> - [10] RSA/SHA-512</li><li><strong style='margin-left: 12px;'>ECC_GOST</strong> - [12] GOST R 34.10-2001</li><li><strong style='margin-left: 12px;'>ECDSAP256SHA256</strong> - [13] ECDSA Curve P-256 with SHA-256</li><li><strong style='margin-left: 12px;'>ECDSAP384SHA384</strong> - [14] ECDSA Curve P-384 with SHA-384</li><li><strong style='margin-left: 12px;'>ED25519</strong> - [15] Ed25519</li><li><strong style='margin-left: 12px;'>ED448</strong> - [16] Ed448</li></ul>|
|digest|string|false|none|The digest is an alpha-numeric value|
|digestType|string|false|none|This identifies the algorithm used to construct the digest<br/><ul><li><strong style='margin-left: 12px;'>SHA1</strong> - [01] SHA-1</li><li><strong style='margin-left: 12px;'>SHA256</strong> - [02] SHA-256</li><li><strong style='margin-left: 12px;'>GOST</strong> - [03] GOST R 34.11-94</li><li><strong style='margin-left: 12px;'>SHA384</strong> - [04] SHA-384</li></ul>|
|flags|string|false|none|This identifies the key type; either a Zone-Signing Key or a Key-Signing Key<br/><ul><li><strong style='margin-left: 12px;'>ZSK</strong> - [256] Zone-Signing Key</li><li><strong style='margin-left: 12px;'>KSK</strong> - [257] Key-Signing Key</li></ul>|
|keyTag|integer(integer-positive)|false|none|This is an integer value less than 65536 used to identify the DNSSEC record for the domain name.|
|maxSignatureLife|integer(integer-positive)|false|none|This specifies the validity period for the signature. The value is expressed in seconds. You can use any integer value larger than zero|
|publicKey|string|false|none|Registries use this value to encrypt DS records. Decryption requires a matching public key|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|RSAMD5|
|algorithm|DH|
|algorithm|DSA|
|algorithm|RSASHA1|
|algorithm|DSA_NSEC3_SHA1|
|algorithm|RSASHA1_NSEC3_SHA1|
|algorithm|RSASHA256|
|algorithm|RSASHA512|
|algorithm|ECC_GOST|
|algorithm|ECDSAP256SHA256|
|algorithm|ECDSAP384SHA384|
|algorithm|ED25519|
|algorithm|ED448|
|algorithm|PRIVATEDNS|
|algorithm|PRIVATEOID|
|digestType|SHA1|
|digestType|SHA256|
|digestType|GOST|
|digestType|SHA384|
|flags|ZSK|
|flags|KSK|

<h2 id="tocS_DomainForwarding">DomainForwarding</h2>
<!-- backwards compatibility -->
<a id="schemadomainforwarding"></a>
<a id="schema_DomainForwarding"></a>
<a id="tocSdomainforwarding"></a>
<a id="tocsdomainforwarding"></a>

```json
{
  "fqdn": "string",
  "mask": {
    "description": "string",
    "keywords": "string",
    "title": "string"
  },
  "type": "REDIRECT_PERMANENT",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fqdn|string|true|none|The fqdn (domain or sub domain) to forward (ex somedomain.com or sub.somedomain.com)|
|mask|[DomainForwardingMask](#schemadomainforwardingmask)|false|none|none|
|type|string|true|none|The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>|
|url|string(url)|true|none|Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MASKED|
|type|REDIRECT_PERMANENT|
|type|REDIRECT_TEMPORARY|

<h2 id="tocS_DomainForwardingCreate">DomainForwardingCreate</h2>
<!-- backwards compatibility -->
<a id="schemadomainforwardingcreate"></a>
<a id="schema_DomainForwardingCreate"></a>
<a id="tocSdomainforwardingcreate"></a>
<a id="tocsdomainforwardingcreate"></a>

```json
{
  "mask": {
    "description": "string",
    "keywords": "string",
    "title": "string"
  },
  "type": "REDIRECT_PERMANENT",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mask|[DomainForwardingMask](#schemadomainforwardingmask)|false|none|none|
|type|string|true|none|The type of fowarding to implement<br/><ul><li><strong style='margin-left: 12px;'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser's address bar.</li><li><strong style='margin-left: 12px;'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style='margin-left: 12px;'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>|
|url|string(url)|true|none|Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MASKED|
|type|REDIRECT_PERMANENT|
|type|REDIRECT_TEMPORARY|

<h2 id="tocS_DomainForwardingMask">DomainForwardingMask</h2>
<!-- backwards compatibility -->
<a id="schemadomainforwardingmask"></a>
<a id="schema_DomainForwardingMask"></a>
<a id="tocSdomainforwardingmask"></a>
<a id="tocsdomainforwardingmask"></a>

```json
{
  "description": "string",
  "keywords": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A short description of your website to display in search engine results.|
|keywords|string|false|none|A list of comma-separated keywords that describes the content and purpose of your website.|
|title|string|false|none|Displays at the top of the browser window and in search results.|

<h2 id="tocS_DomainNotification">DomainNotification</h2>
<!-- backwards compatibility -->
<a id="schemadomainnotification"></a>
<a id="schema_DomainNotification"></a>
<a id="tocSdomainnotification"></a>
<a id="tocsdomainnotification"></a>

```json
{
  "addedAt": "",
  "metadata": "",
  "notificationId": "",
  "requestId": "string",
  "resource": "",
  "resourceType": "CONTACT",
  "status": "AWAITING",
  "type": "AUTH_CODE_PURCHASE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedAt|string(iso-datetime)|true|none|The date the notification was added|
|metadata|object|false|none|The notification data for the given type as specifed by GET /v2/customers/{customerId}/domains/notifications/schema|
|notificationId|string|true|none|The notification ID to be used in POST /v2/customers/{customerId}/domains/notifications to acknowledge the notification|
|requestId|string|false|none|A client provided identifier (via X-Request-Id header) indicating the request this notification is for|
|resource|string|true|none|The resource the notification pertains to.|
|resourceType|string|true|none|The type of resource the notification relates to|
|status|string|true|none|The resulting status of the action.|
|type|string|true|none|The type of action the notification relates to|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|CONTACT|
|resourceType|DOMAIN|
|resourceType|HOST|
|status|AWAITING|
|status|CANCELLED|
|status|FAILED|
|status|PENDING|
|status|SUCCESS|
|type|AUTH_CODE_PURCHASE|
|type|AUTH_CODE_REGENERATE|
|type|AUTO_RENEWAL|
|type|BACKORDER|
|type|BACKORDER_PURCHASE|
|type|BACKORDER_DELETE|
|type|BACKORDER_UPDATE|
|type|CONTACT_CREATE|
|type|CONTACT_DELETE|
|type|CONTACT_UPDATE|
|type|DNS_VERIFICATION|
|type|DNSSEC_CREATE|
|type|DNSSEC_DELETE|
|type|DOMAIN_DELETE|
|type|DOMAIN_UPDATE|
|type|DOMAIN_UPDATE_CONTACTS|
|type|DOMAIN_UPDATE_NAME_SERVERS|
|type|EXPIRY|
|type|HOST_CREATE|
|type|HOST_DELETE|
|type|ICANN_VERIFICATION|
|type|MIGRATE|
|type|MIGRATE_IN|
|type|PREMIUM|
|type|PRIVACY_PURCHASE|
|type|PRIVACY_DELETE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|RENEW_UNDO|
|type|TRADE|
|type|TRADE_CANCEL|
|type|TRADE_PURCHASE|
|type|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|type|TRADE_RESEND_AUTH_EMAIL|
|type|TRANSFER|
|type|TRANSFER_IN|
|type|TRANSFER_IN_CANCEL|
|type|TRANSFER_OUT|
|type|TRANSFER_OUT_ACCEPT|
|type|TRANSFER_OUT_REJECT|
|type|TRANSFER_OUT_REQUESTED|
|type|TRANSIT|

<h2 id="tocS_DomainNotificationType">DomainNotificationType</h2>
<!-- backwards compatibility -->
<a id="schemadomainnotificationtype"></a>
<a id="schema_DomainNotificationType"></a>
<a id="tocSdomainnotificationtype"></a>
<a id="tocsdomainnotificationtype"></a>

```json
{
  "type": "AUTH_CODE_PURCHASE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The notification type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AUTH_CODE_PURCHASE|
|type|AUTH_CODE_REGENERATE|
|type|AUTO_RENEWAL|
|type|BACKORDER|
|type|BACKORDER_PURCHASE|
|type|BACKORDER_DELETE|
|type|BACKORDER_UPDATE|
|type|CONTACT_CREATE|
|type|CONTACT_DELETE|
|type|CONTACT_UPDATE|
|type|DNS_VERIFICATION|
|type|DNSSEC_CREATE|
|type|DNSSEC_DELETE|
|type|DOMAIN_DELETE|
|type|DOMAIN_UPDATE|
|type|DOMAIN_UPDATE_CONTACTS|
|type|DOMAIN_UPDATE_NAME_SERVERS|
|type|EXPIRY|
|type|HOST_CREATE|
|type|HOST_DELETE|
|type|ICANN_VERIFICATION|
|type|MIGRATE|
|type|MIGRATE_IN|
|type|PREMIUM|
|type|PRIVACY_PURCHASE|
|type|PRIVACY_DELETE|
|type|REDEEM|
|type|REGISTER|
|type|RENEW|
|type|RENEW_UNDO|
|type|TRADE|
|type|TRADE_CANCEL|
|type|TRADE_PURCHASE|
|type|TRADE_PURCHASE_AUTH_TEXT_MESSAGE|
|type|TRADE_RESEND_AUTH_EMAIL|
|type|TRANSFER|
|type|TRANSFER_IN|
|type|TRANSFER_IN_CANCEL|
|type|TRANSFER_OUT|
|type|TRANSFER_OUT_ACCEPT|
|type|TRANSFER_OUT_REJECT|
|type|TRANSFER_OUT_REQUESTED|
|type|TRANSIT|

<h2 id="tocS_DomainPurchase">DomainPurchase</h2>
<!-- backwards compatibility -->
<a id="schemadomainpurchase"></a>
<a id="schema_DomainPurchase"></a>
<a id="tocSdomainpurchase"></a>
<a id="tocsdomainpurchase"></a>

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  },
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "domain": "string",
  "nameServers": [
    "string"
  ],
  "period": 1,
  "privacy": false,
  "renewAuto": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|[Consent](#schemaconsent)|true|none|none|
|contactAdmin|[Contact](#schemacontact)|false|none|none|
|contactBilling|[Contact](#schemacontact)|false|none|none|
|contactRegistrant|[Contact](#schemacontact)|false|none|none|
|contactTech|[Contact](#schemacontact)|false|none|none|
|domain|string(domain)|true|none|For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked|
|nameServers|[string(host-name)]|false|none|none|
|period|integer(integer-positive)|false|none|none|
|privacy|boolean|false|none|none|
|renewAuto|boolean|false|none|none|

<h2 id="tocS_DomainPurchaseResponse">DomainPurchaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadomainpurchaseresponse"></a>
<a id="schema_DomainPurchaseResponse"></a>
<a id="tocSdomainpurchaseresponse"></a>
<a id="tocsdomainpurchaseresponse"></a>

```json
{
  "currency": "USD",
  "itemCount": 0,
  "orderId": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string(iso-currency-code)|false|none|Currency in which the `total` is listed|
|itemCount|integer(integer-positive)|true|none|Number items included in the order|
|orderId|integer(int64)|true|none|Unique identifier of the order processed to purchase the domain|
|total|integer(currency-micro-unit)|true|none|Total cost of the domain and any selected add-ons|

<h2 id="tocS_DomainRedeemV2">DomainRedeemV2</h2>
<!-- backwards compatibility -->
<a id="schemadomainredeemv2"></a>
<a id="schema_DomainRedeemV2"></a>
<a id="tocSdomainredeemv2"></a>
<a id="tocsdomainredeemv2"></a>

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "currency": "USD",
    "fee": 0,
    "price": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|[ConsentRedemption](#schemaconsentredemption)|true|none|none|

<h2 id="tocS_DomainRenew">DomainRenew</h2>
<!-- backwards compatibility -->
<a id="schemadomainrenew"></a>
<a id="schema_DomainRenew"></a>
<a id="tocSdomainrenew"></a>
<a id="tocsdomainrenew"></a>

```json
{
  "period": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period|integer(integer-positive)|false|none|Number of years to extend the Domain. Must not exceed maximum for TLD. When omitted, defaults to `period` specified during original purchase|

<h2 id="tocS_DomainSuggestion">DomainSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemadomainsuggestion"></a>
<a id="schema_DomainSuggestion"></a>
<a id="tocSdomainsuggestion"></a>
<a id="tocsdomainsuggestion"></a>

```json
{
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|Suggested domain name|

<h2 id="tocS_DomainSummary">DomainSummary</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummary"></a>
<a id="schema_DomainSummary"></a>
<a id="tocSdomainsummary"></a>
<a id="tocsdomainsummary"></a>

```json
{
  "authCode": "string",
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "deletedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "domainId": 0,
  "expirationProtected": true,
  "expires": "1970-01-01T00:00:00Z",
  "exposeWhois": true,
  "holdRegistrar": true,
  "locked": true,
  "nameServers": [
    "string"
  ],
  "privacy": true,
  "registrarCreatedAt": "string",
  "renewAuto": true,
  "renewDeadline": "1970-01-01T00:00:00Z",
  "renewable": true,
  "status": "string",
  "transferAwayEligibleAt": "1970-01-01T00:00:00Z",
  "transferProtected": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|false|none|Authorization code for transferring the Domain|
|contactAdmin|[Contact](#schemacontact)|false|none|none|
|contactBilling|[Contact](#schemacontact)|false|none|none|
|contactRegistrant|[Contact](#schemacontact)|true|none|none|
|contactTech|[Contact](#schemacontact)|false|none|none|
|createdAt|string(date-time)|true|none|Date and time when this domain was created|
|deletedAt|string(date-time)|false|none|Date and time when this domain was deleted|
|domain|string|true|none|Name of the domain|
|domainId|number(double)|true|none|Unique identifier for this Domain|
|expirationProtected|boolean|true|none|Whether or not the domain is protected from expiration|
|expires|string(date-time)|false|none|Date and time when this domain will expire|
|exposeWhois|boolean|false|none|Whether or not the domain contact details should be shown in the WHOIS|
|holdRegistrar|boolean|true|none|Whether or not the domain is on-hold by the registrar|
|locked|boolean|true|none|Whether or not the domain is locked to prevent transfers|
|nameServers|[string(host-name)]|false|none|Fully-qualified domain names for DNS servers|
|privacy|boolean|true|none|Whether or not the domain has privacy protection|
|registrarCreatedAt|string(iso-datetime)|false|none|Date and time when this domain was created by the registrar|
|renewAuto|boolean|true|none|Whether or not the domain is configured to automatically renew|
|renewDeadline|string(date-time)|true|none|Date the domain must renew on|
|renewable|boolean|false|none|Whether or not the domain is eligble for renewal based on status|
|status|string|true|none|Processing status of the domain<br/><ul><br><li><strong style='margin-left: 12px;'>ACTIVE</strong> - All is well</li><br><li><strong style='margin-left: 12px;'>AWAITING*</strong> - System is waiting for the end-user to complete an action</li><br><li><strong style='margin-left: 12px;'>CANCELLED*</strong> - Domain has been cancelled, and may or may not be reclaimable</li><br><li><strong style='margin-left: 12px;'>CONFISCATED</strong> - Domain has been confiscated, usually for abuse, chargeback, or fraud</li><br><li><strong style='margin-left: 12px;'>DISABLED*</strong> - Domain has been disabled</li><br><li><strong style='margin-left: 12px;'>EXCLUDED*</strong> - Domain has been excluded from Firehose registration</li><br><li><strong style='margin-left: 12px;'>EXPIRED*</strong> - Domain has expired</li><br><li><strong style='margin-left: 12px;'>FAILED*</strong> - Domain has failed a required action, and the system is no longer retrying</li><br><li><strong style='margin-left: 12px;'>HELD*</strong> - Domain has been placed on hold, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>LOCKED*</strong> - Domain has been locked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>PARKED*</strong> - Domain has been parked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>PENDING*</strong> - Domain is working its way through an automated workflow</li><br><li><strong style='margin-left: 12px;'>RESERVED*</strong> - Domain is reserved, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>REVERTED</strong> - Domain has been reverted, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>SUSPENDED*</strong> - Domain has been suspended, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>TRANSFERRED*</strong> - Domain has been transferred out</li><br><li><strong style='margin-left: 12px;'>UNKNOWN</strong> - Domain is in an unknown state</li><br><li><strong style='margin-left: 12px;'>UNLOCKED*</strong> - Domain has been unlocked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>UNPARKED*</strong> - Domain has been unparked, and likely requires intervention from Support</li><br><li><strong style='margin-left: 12px;'>UPDATED*</strong> - Domain ownership has been transferred to another account</li><br></ul>|
|transferAwayEligibleAt|string(date-time)|false|none|Date and time when this domain is eligible to transfer|
|transferProtected|boolean|true|none|Whether or not the domain is protected from transfer|

<h2 id="tocS_DomainTransferIn">DomainTransferIn</h2>
<!-- backwards compatibility -->
<a id="schemadomaintransferin"></a>
<a id="schema_DomainTransferIn"></a>
<a id="tocSdomaintransferin"></a>
<a id="tocsdomaintransferin"></a>

```json
{
  "authCode": "string",
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  },
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "period": 1,
  "privacy": false,
  "renewAuto": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|string|true|none|Authorization code from registrar for transferring a domain|
|consent|[Consent](#schemaconsent)|true|none|none|
|contactAdmin|[Contact](#schemacontact)|false|none|none|
|contactBilling|[Contact](#schemacontact)|false|none|none|
|contactRegistrant|[Contact](#schemacontact)|false|none|none|
|contactTech|[Contact](#schemacontact)|false|none|none|
|period|integer(integer-positive)|false|none|Can be more than 1 but no more than 10 years total including current registration length|
|privacy|boolean|false|none|Whether or not privacy has been requested|
|renewAuto|boolean|false|none|Whether or not the domain should be configured to automatically renew|

<h2 id="tocS_DomainUpdate">DomainUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadomainupdate"></a>
<a id="schema_DomainUpdate"></a>
<a id="tocSdomainupdate"></a>
<a id="tocsdomainupdate"></a>

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "EXPOSE_WHOIS"
    ]
  },
  "exposeWhois": true,
  "locked": true,
  "nameServers": [
    null
  ],
  "renewAuto": true,
  "subaccountId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|[ConsentDomainUpdate](#schemaconsentdomainupdate)|false|none|none|
|exposeWhois|boolean|false|none|Whether or not the domain contact details should be shown in the WHOIS|
|locked|boolean|false|none|Whether or not the domain should be locked to prevent transfers|
|nameServers|[object(host-name)]|false|none|Fully-qualified domain names for Name Servers to associate with the domain|
|renewAuto|boolean|false|none|Whether or not the domain should be configured to automatically renew|
|subaccountId|string|false|none|Reseller subaccount shopperid who can manage the domain|

<h2 id="tocS_DomainsContactsBulk">DomainsContactsBulk</h2>
<!-- backwards compatibility -->
<a id="schemadomainscontactsbulk"></a>
<a id="schema_DomainsContactsBulk"></a>
<a id="tocSdomainscontactsbulk"></a>
<a id="tocsdomainscontactsbulk"></a>

```json
{
  "contactAdmin": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactBilling": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactPresence": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactRegistrant": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "contactTech": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "domains": [
    "string"
  ],
  "entityType": "ABORIGINAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactAdmin|[Contact](#schemacontact)|false|none|none|
|contactBilling|[Contact](#schemacontact)|false|none|none|
|contactPresence|[Contact](#schemacontact)|false|none|none|
|contactRegistrant|[Contact](#schemacontact)|false|none|none|
|contactTech|[Contact](#schemacontact)|false|none|none|
|domains|[string(domain)]|true|none|An array of domain names to be validated against. Alternatively, you can specify the extracted tlds. However, full domain names are required if the tld is `uk`|
|entityType|string|false|none|Canadian Presence Requirement (CA)|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|ABORIGINAL|
|entityType|ASSOCIATION|
|entityType|CITIZEN|
|entityType|CORPORATION|
|entityType|EDUCATIONAL|
|entityType|GOVERNMENT|
|entityType|HOSPITAL|
|entityType|INDIAN_BAND|
|entityType|LEGAL_REPRESENTATIVE|
|entityType|LIBRARY_ARCHIVE_MUSEUM|
|entityType|MARK_REGISTERED|
|entityType|MARK_TRADE|
|entityType|PARTNERSHIP|
|entityType|POLITICAL_PARTY|
|entityType|RESIDENT_PERMANENT|
|entityType|TRUST|
|entityType|UNION|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|

<h2 id="tocS_ErrorDomainContactsValidate">ErrorDomainContactsValidate</h2>
<!-- backwards compatibility -->
<a id="schemaerrordomaincontactsvalidate"></a>
<a id="schema_ErrorDomainContactsValidate"></a>
<a id="tocSerrordomaincontactsvalidate"></a>
<a id="tocserrordomaincontactsvalidate"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "domains": [
        "string"
      ],
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorFieldDomainContactsValidate](#schemaerrorfielddomaincontactsvalidate)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|stack|[string]|false|none|Stack trace indicating where the error occurred.<br/>NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments. However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|<ul><br><li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li><br><strong style='margin-left: 12px;'>OR</strong><br><li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li><br></ul>|
|pathRelated|string(json-path)|false|none|JSONPath referring to a field containing an error, which is referenced by `path`|

<h2 id="tocS_ErrorFieldDomainContactsValidate">ErrorFieldDomainContactsValidate</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfielddomaincontactsvalidate"></a>
<a id="schema_ErrorFieldDomainContactsValidate"></a>
<a id="tocSerrorfielddomaincontactsvalidate"></a>
<a id="tocserrorfielddomaincontactsvalidate"></a>

```json
{
  "code": "string",
  "domains": [
    "string"
  ],
  "message": "string",
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|domains|[string]|true|none|An array of domain names the error is for. If tlds are specified in the request, `domains` will contain tlds. For example, if `domains` in request is ["test1.com", "test2.uk", "net"], and the field is invalid for com and net, then one of the `fields` in response will have ["test1.com", "net"] as `domains`|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error|
|pathRelated|string(json-path)|false|none|JSONPath referring to the field on the object referenced by `path` containing an error|

<h2 id="tocS_ErrorLimit">ErrorLimit</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlimit"></a>
<a id="schema_ErrorLimit"></a>
<a id="tocSerrorlimit"></a>
<a id="tocserrorlimit"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|

<h2 id="tocS_JsonDataType">JsonDataType</h2>
<!-- backwards compatibility -->
<a id="schemajsondatatype"></a>
<a id="schema_JsonDataType"></a>
<a id="tocSjsondatatype"></a>
<a id="tocsjsondatatype"></a>

```json
{
  "format": "string",
  "pattern": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|pattern|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_JsonProperty">JsonProperty</h2>
<!-- backwards compatibility -->
<a id="schemajsonproperty"></a>
<a id="schema_JsonProperty"></a>
<a id="tocSjsonproperty"></a>
<a id="tocsjsonproperty"></a>

```json
{
  "defaultValue": "string",
  "format": "string",
  "items": {},
  "maxItems": 0,
  "maximum": 0,
  "minItems": 0,
  "minimum": 0,
  "pattern": "string",
  "required": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultValue|string|false|none|none|
|format|string|false|none|none|
|items|object|false|none|none|
|maxItems|integer|false|none|none|
|maximum|integer|false|none|none|
|minItems|integer|false|none|none|
|minimum|integer|false|none|none|
|pattern|string|false|none|none|
|required|boolean|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_JsonSchema">JsonSchema</h2>
<!-- backwards compatibility -->
<a id="schemajsonschema"></a>
<a id="schema_JsonSchema"></a>
<a id="tocSjsonschema"></a>
<a id="tocsjsonschema"></a>

```json
{
  "id": "string",
  "models": {},
  "properties": {},
  "required": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|models|object|true|none|none|
|properties|object|true|none|none|
|required|[string]|true|none|none|

<h2 id="tocS_LegalAgreement">LegalAgreement</h2>
<!-- backwards compatibility -->
<a id="schemalegalagreement"></a>
<a id="schema_LegalAgreement"></a>
<a id="tocSlegalagreement"></a>
<a id="tocslegalagreement"></a>

```json
{
  "agreementKey": "string",
  "content": "string",
  "title": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreementKey|string|true|none|Unique identifier for the legal agreement|
|content|string|true|none|Contents of the legal agreement, suitable for embedding|
|title|string|true|none|Title of the legal agreement|
|url|string(url)|false|none|URL to a page containing the legal agreement|

<h2 id="tocS_Maintenance">Maintenance</h2>
<!-- backwards compatibility -->
<a id="schemamaintenance"></a>
<a id="schema_Maintenance"></a>
<a id="tocSmaintenance"></a>
<a id="tocsmaintenance"></a>

```json
{
  "createdAt": "string",
  "endsAt": "string",
  "environment": "OTE",
  "maintenanceId": "string",
  "modifiedAt": "string",
  "reason": "EMERGENCY",
  "startsAt": "string",
  "status": "ACTIVE",
  "summary": "string",
  "tlds": [
    "string"
  ],
  "type": "API"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance was created|
|endsAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance will complete|
|environment|string|true|none|The environment on which the maintenance will be performed<br/><ul><li><strong style='margin-left: 12px;'>OTE</strong> - The Operational Testing Environment.</li><li><strong style='margin-left: 12px;'>PRODUCTION</strong> - The Live Production Environment.</li></ul>|
|maintenanceId|string|true|none|The identifier for the system maintenance|
|modifiedAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance was last modified|
|reason|string|true|none|The reason for the maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>EMERGENCY</strong> - Unexpected Emergency maintenance.</li><li><strong style='margin-left: 12px;'>PLANNED</strong> - Planned system maintenance.</li></ul>|
|startsAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance will start|
|status|string|true|none|The status of maintenance<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>|
|summary|string|true|none|A brief description of what is being performed|
|tlds|[string]|false|none|List of tlds that are in maintenance.  Generally only applies when `type` is REGISTRY|
|type|string|true|none|The type of maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>API</strong> - Programmatic Api components.</li><li><strong style='margin-left: 12px;'>REGISTRY</strong> - The underlying Registry providing the tld(s).</li><li><strong style='margin-left: 12px;'>UI</strong> - User Interface components.</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|OTE|
|environment|PRODUCTION|
|reason|EMERGENCY|
|reason|PLANNED|
|status|ACTIVE|
|status|CANCELLED|
|type|API|
|type|REGISTRY|
|type|UI|

<h2 id="tocS_MaintenanceDetail">MaintenanceDetail</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancedetail"></a>
<a id="schema_MaintenanceDetail"></a>
<a id="tocSmaintenancedetail"></a>
<a id="tocsmaintenancedetail"></a>

```json
{
  "createdAt": "string",
  "endsAt": "string",
  "environment": "OTE",
  "maintenanceId": "string",
  "modifiedAt": "string",
  "reason": "EMERGENCY",
  "startsAt": "string",
  "status": "ACTIVE",
  "summary": "string",
  "systems": [
    {
      "impact": [
        "DELAYED"
      ],
      "name": "DOMAIN_CHECKS"
    }
  ],
  "tlds": [
    "string"
  ],
  "type": "API"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance was created|
|endsAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance will complete|
|environment|string|true|none|The environment on which the maintenance will be performed<br/><ul><li><strong style='margin-left: 12px;'>OTE</strong> - The Operational Testing Environment.</li><li><strong style='margin-left: 12px;'>PRODUCTION</strong> - The Live Production Environment.</li></ul>|
|maintenanceId|string|true|none|The identifier for the system maintenance|
|modifiedAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance was last modified|
|reason|string|true|none|The reason for the maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>EMERGENCY</strong> - Unexpected Emergency maintenance.</li><li><strong style='margin-left: 12px;'>PLANNED</strong> - Planned system maintenance.</li></ul>|
|startsAt|string(iso-datetime)|true|none|Date and time (UTC) when this maintenance will start|
|status|string|true|none|The status of maintenance<br/><ul><li><strong style='margin-left: 12px;'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style='margin-left: 12px;'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>|
|summary|string|true|none|A brief description of what is being performed|
|systems|[[MaintenanceSystem](#schemamaintenancesystem)]|false|none|List of systems that are impacted by the maintenance.|
|tlds|[string]|false|none|List of tlds that are in maintenance.  Generally only applies when `type` is REGISTRY|
|type|string|true|none|The type of maintenance being performed<br/><ul><li><strong style='margin-left: 12px;'>API</strong> - Programmatic Api components.</li><li><strong style='margin-left: 12px;'>REGISTRY</strong> - The underlying Registry providing the tld(s).</li><li><strong style='margin-left: 12px;'>UI</strong> - User Interface components.</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|environment|OTE|
|environment|PRODUCTION|
|reason|EMERGENCY|
|reason|PLANNED|
|status|ACTIVE|
|status|CANCELLED|
|type|API|
|type|REGISTRY|
|type|UI|

<h2 id="tocS_MaintenanceSystem">MaintenanceSystem</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancesystem"></a>
<a id="schema_MaintenanceSystem"></a>
<a id="tocSmaintenancesystem"></a>
<a id="tocsmaintenancesystem"></a>

```json
{
  "impact": [
    "DELAYED"
  ],
  "name": "DOMAIN_CHECKS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|impact|[string]|true|none|The impact of the maintenance to the system<br/><ul><li><strong style='margin-left: 12px;'>DELAYED</strong> - This response generally applies to systems where the request is queued up and processed once the system is back online.</li><li><strong style='margin-left: 12px;'>DOWN</strong> - The system will be entirely offline; errors are expected.</li><li><strong style='margin-left: 12px;'>NON_AUTHORITATIVE</strong> - This response generally applies to DOMAIN_CHECKS and DOMAIN_MANAGEMENT `system` values where a cached answer will be supplied.</li><li><strong style='margin-left: 12px;'>PARTIAL</strong> - The system will experience partial feature outages; some errors are expected.</li></ul>|
|name|string|true|none|The name of the system affected by the maintenance<br/><ul><li><strong style='margin-left: 12px;'>DOMAIN_CHECKS</strong> - Refers to domain availability checks.</li><li><strong style='margin-left: 12px;'>DOMAIN_MANAGEMENT</strong> - Refers to domain management options including various update options on the domain, contacts, records, etc.</li><li><strong style='margin-left: 12px;'>DOMAIN_REGISTRATION</strong> - Refers to domain registrations, renewals, transfers.</li><li><strong style='margin-left: 12px;'>DOMAIN_REGISTRATION_DATA</strong> - Refers to RDAP and WHOIS Service queries for domains.</li><li><strong style='margin-left: 12px;'>DOMAIN_RESOLUTION</strong> - Refers to DNS resolution for domains.</li><li><strong style='margin-left: 12px;'>RESELLER_ADMIN_PORTAL</strong> - Refers to Admin portals to manage the reseller account and settings.</li><li><strong style='margin-left: 12px;'>RESELLER_STOREFRONT</strong> - Refers to the Reseller Storefront features (Standard and Custom).</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|impact|DELAYED|
|impact|DOWN|
|impact|NON_AUTHORITATIVE|
|impact|PARTIAL|
|name|DOMAIN_CHECKS|
|name|DOMAIN_MANAGEMENT|
|name|DOMAIN_REGISTRATION|
|name|DOMAIN_REGISTRATION_DATA|
|name|DOMAIN_RESOLUTION|
|name|RESELLER_ADMIN_PORTAL|
|name|RESELLER_STOREFRONT|

<h2 id="tocS_PrivacyPurchase">PrivacyPurchase</h2>
<!-- backwards compatibility -->
<a id="schemaprivacypurchase"></a>
<a id="schema_PrivacyPurchase"></a>
<a id="tocSprivacypurchase"></a>
<a id="tocsprivacypurchase"></a>

```json
{
  "consent": {
    "agreedAt": "string",
    "agreedBy": "string",
    "agreementKeys": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|[Consent](#schemaconsent)|true|none|none|

<h2 id="tocS_RealNameValidation">RealNameValidation</h2>
<!-- backwards compatibility -->
<a id="schemarealnamevalidation"></a>
<a id="schema_RealNameValidation"></a>
<a id="tocSrealnamevalidation"></a>
<a id="tocsrealnamevalidation"></a>

```json
{
  "status": "APPROVED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|PENDING|
|status|PENDING_ASSOCIATION_WITH_DOMAIN|
|status|PENDING_SUBMISSION_TO_VERIFICATION_SERVICE|
|status|PENDING_VERIFICATION_SERVICE_REPLY|
|status|PENDING_SUBMISSION_TO_REGISTRY|
|status|PENDING_REGISTRY_REPLY|
|status|PENDING_DOMAIN_UPDATE|
|status|REJECTED|

<h2 id="tocS_RenewalDetails">RenewalDetails</h2>
<!-- backwards compatibility -->
<a id="schemarenewaldetails"></a>
<a id="schema_RenewalDetails"></a>
<a id="tocSrenewaldetails"></a>
<a id="tocsrenewaldetails"></a>

```json
{
  "currency": "USD",
  "price": 0,
  "renewable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string(iso-currency-code)|true|none|Currency in which the `price` is listed|
|price|integer(currency-micro-unit)|true|none|Price for the domain renewal excluding taxes or fees|
|renewable|boolean|false|none|Whether or not the domain is eligble for renewal based on status|

<h2 id="tocS_TldSummary">TldSummary</h2>
<!-- backwards compatibility -->
<a id="schematldsummary"></a>
<a id="schema_TldSummary"></a>
<a id="tocStldsummary"></a>
<a id="tocstldsummary"></a>

```json
{
  "name": "string",
  "type": "GENERIC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string(tld)|true|none|Name of the top-level domain|
|type|string|true|none|Type of the top-level domain|

#### Enumerated Values

|Property|Value|
|---|---|
|type|COUNTRY_CODE|
|type|GENERIC|

<h2 id="tocS_VerificationDomainName">VerificationDomainName</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdomainname"></a>
<a id="schema_VerificationDomainName"></a>
<a id="tocSverificationdomainname"></a>
<a id="tocsverificationdomainname"></a>

```json
{
  "status": "APPROVED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the domain name verification|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|PENDING|
|status|REJECTED|
|status|UNABLE_TO_RETRIEVE_STATUS|

<h2 id="tocS_VerificationRealName">VerificationRealName</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrealname"></a>
<a id="schema_VerificationRealName"></a>
<a id="tocSverificationrealname"></a>
<a id="tocsverificationrealname"></a>

```json
{
  "status": "APPROVED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of the real name verification<br/><ul> <li><strong style='margin-left: 12px;'>APPROVED</strong> - All is well</li> <li><strong style='margin-left: 12px;'>PENDING</strong> - Real name verification is working its way through the workflow</li> <li><strong style='margin-left: 12px;'>REJECTED_DOCUMENT_OUTDATED</strong> - Local government verification shows there is a newer version of your document.  Upload the latest version of the document and retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_BUSINESS_LICENSE</strong> - Business license is expired</li> <li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_ORGANIZATION_CODE</strong> - Organization code certificate number has expired</li> <li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_DOCUMENT_NAME</strong> - There isn’t a clear name on your uploaded document, please upload a different document to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_IDENTIFICATION</strong> - Registrant identification is not clear.  Upload a better image to retry</li> <li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_IDENTIFICATION</strong> - Registrant identification is incomplete</li> <li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_REGISTRATION_LETTER</strong> - Registration letter is incomplete</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_IDENTITY_CARD</strong> - Provided identity card is inconsistent with the identity card on record</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_ORGANIZATION_CODE</strong> - Provided organization information is inconsistent with the results obtained using the submitted organization code</li> <li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_REGISTRANT_NAME</strong> - Name on the registrant identification does not match the name in the system</li> <li><strong style='margin-left: 12px;'>REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE</strong> - Your document contains an invalid business license or organization code certificate number</li> <li><strong style='margin-left: 12px;'>REJECTED_INVALID_DOCUMENT</strong> - Document is invalid.  Please upload another document to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_ID</strong> - Business id does not match the business id in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_NAME</strong> - Business name does not match the business name in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_ID</strong> - Document id does not match the id in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_NAME</strong> - Document name does not match the name in the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_TYPE</strong> - Document type does not match the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_INFO</strong> - The information provided for the registrant does not match the document</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_LOCALITY</strong> - Registrant region is overseas, but a local identity document was provided</li> <li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_NAME</strong> - Registrant name has been changed, so the request must be resubmitted</li> <li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_OPEN</strong> - Registrant identification could not be opened.  Please upload the document again to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_VERIFY</strong> - Unable to initiate verification.  Please upload the document again to retry real name verification</li> <li><strong style='margin-left: 12px;'>REJECTED_UNKNOWN_ERROR</strong> - Document was rejected due to an unknown error. For more information, contact customer support</li> <li><strong style='margin-left: 12px;'>UNABLE_TO_RETRIEVE_STATUS</strong> - Unable to retrieve status for the real name verification process.  Retry, if this status persists, contact customer support</li> </ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVED|
|status|PENDING|
|status|REJECTED_DOCUMENT_OUTDATED|
|status|REJECTED_EXPIRED_BUSINESS_LICENSE|
|status|REJECTED_EXPIRED_ORGANIZATION_CODE|
|status|REJECTED_ILLEGIBLE_DOCUMENT_NAME|
|status|REJECTED_ILLEGIBLE_IDENTIFICATION|
|status|REJECTED_INCOMPLETE_IDENTIFICATION|
|status|REJECTED_INCOMPLETE_REGISTRATION_LETTER|
|status|REJECTED_INCONSISTENT_IDENTITY_CARD|
|status|REJECTED_INCONSISTENT_ORGANIZATION_CODE|
|status|REJECTED_INCONSISTENT_REGISTRANT_NAME|
|status|REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE|
|status|REJECTED_INVALID_DOCUMENT|
|status|REJECTED_MISMATCH_BUSINESS_ID|
|status|REJECTED_MISMATCH_BUSINESS_NAME|
|status|REJECTED_MISMATCH_DOCUMENT_ID|
|status|REJECTED_MISMATCH_DOCUMENT_NAME|
|status|REJECTED_MISMATCH_DOCUMENT_TYPE|
|status|REJECTED_MISMATCH_REGISTRANT_INFO|
|status|REJECTED_MISMATCH_REGISTRANT_LOCALITY|
|status|REJECTED_MISMATCH_REGISTRANT_NAME|
|status|REJECTED_UNABLE_TO_OPEN|
|status|REJECTED_UNABLE_TO_VERIFY|
|status|REJECTED_UNKNOWN_ERROR|
|status|UNABLE_TO_RETRIEVE_STATUS|

<h2 id="tocS_VerificationsDomain">VerificationsDomain</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsdomain"></a>
<a id="schema_VerificationsDomain"></a>
<a id="tocSverificationsdomain"></a>
<a id="tocsverificationsdomain"></a>

```json
{
  "domainName": {
    "status": "APPROVED"
  },
  "realName": {
    "status": "APPROVED"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|[VerificationDomainName](#schemaverificationdomainname)|false|none|none|
|realName|[VerificationRealName](#schemaverificationrealname)|false|none|none|

<h2 id="tocS_VerificationsDomainV2">VerificationsDomainV2</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsdomainv2"></a>
<a id="schema_VerificationsDomainV2"></a>
<a id="tocSverificationsdomainv2"></a>
<a id="tocsverificationsdomainv2"></a>

```json
{
  "domainName": "APPROVED",
  "icann": "COMPLETED",
  "realName": "APPROVED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|string|false|none|Status of the verification of the domain name against a prohibited list maintained by the government|
|icann|string|false|none|Status of the Icann verification of domain registrant contact by completing email and/or phone verification<br/><ul><li><strong style='margin-left: 12px;'>COMPLETED</strong> - Icann verification has been completed.</li><li><strong style='margin-left: 12px;'>PENDING</strong> - Icann verification has not been completed.</li></ul>|
|realName|string|false|none|Status of the real name verification of an identity by comparing registration data against government issued documents<br/><ul><li><strong style='margin-left: 12px;'>APPROVED</strong> - All is well</li><li><strong style='margin-left: 12px;'>PENDING</strong> - Real name verification is working its way through the workflow</li><li><strong style='margin-left: 12px;'>REJECTED_DOCUMENT_OUTDATED</strong> - Local government verification shows there is a newer version of your document.  Upload the latest version of the document and retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_BUSINESS_LICENSE</strong> - Business license is expired</li><li><strong style='margin-left: 12px;'>REJECTED_EXPIRED_ORGANIZATION_CODE</strong> - Organization code certificate number has expired</li><li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_DOCUMENT_NAME</strong> - There isn’t a clear name on your uploaded document, please upload a different document to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_ILLEGIBLE_IDENTIFICATION</strong> - Registrant identification is not clear.  Upload a better image to retry</li><li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_IDENTIFICATION</strong> - Registrant identification is incomplete</li><li><strong style='margin-left: 12px;'>REJECTED_INCOMPLETE_REGISTRATION_LETTER</strong> - Registration letter is incomplete</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_IDENTITY_CARD</strong> - Provided identity card is inconsistent with the identity card on record</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_ORGANIZATION_CODE</strong> - Provided organization information is inconsistent with the results obtained using the submitted organization code</li><li><strong style='margin-left: 12px;'>REJECTED_INCONSISTENT_REGISTRANT_NAME</strong> - Name on the registrant identification does not match the name in the system</li><li><strong style='margin-left: 12px;'>REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE</strong> - Your document contains an invalid business license or organization code certificate number</li><li><strong style='margin-left: 12px;'>REJECTED_INVALID_DOCUMENT</strong> - Document is invalid.  Please upload another document to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_ID</strong> - Business id does not match the business id in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_BUSINESS_NAME</strong> - Business name does not match the business name in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_ID</strong> - Document id does not match the id in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_NAME</strong> - Document name does not match the name in the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_DOCUMENT_TYPE</strong> - Document type does not match the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_INFO</strong> - The information provided for the registrant does not match the document</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_LOCALITY</strong> - Registrant region is overseas, but a local identity document was provided</li><li><strong style='margin-left: 12px;'>REJECTED_MISMATCH_REGISTRANT_NAME</strong> - Registrant name has been changed, so the request must be resubmitted</li><li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_OPEN</strong> - Registrant identification could not be opened.  Please upload the document again to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_UNABLE_TO_VERIFY</strong> - Unable to initiate verification.  Please upload the document again to retry real name verification</li><li><strong style='margin-left: 12px;'>REJECTED_UNKNOWN_ERROR</strong> - Document was rejected due to an unknown error. For more information, contact customer support</li><li><strong style='margin-left: 12px;'>UNABLE_TO_RETRIEVE_STATUS</strong> - Unable to retrieve status for the real name verification process.  Retry, if this status persists, contact customer support</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|domainName|APPROVED|
|domainName|PENDING|
|domainName|REJECTED|
|domainName|UNABLE_TO_RETRIEVE_STATUS|
|icann|COMPLETED|
|icann|PENDING|
|icann|UNABLE_TO_RETRIEVE_STATUS|
|realName|APPROVED|
|realName|PENDING|
|realName|REJECTED_DOCUMENT_OUTDATED|
|realName|REJECTED_EXPIRED_BUSINESS_LICENSE|
|realName|REJECTED_EXPIRED_ORGANIZATION_CODE|
|realName|REJECTED_ILLEGIBLE_DOCUMENT_NAME|
|realName|REJECTED_ILLEGIBLE_IDENTIFICATION|
|realName|REJECTED_INCOMPLETE_IDENTIFICATION|
|realName|REJECTED_INCOMPLETE_REGISTRATION_LETTER|
|realName|REJECTED_INCONSISTENT_IDENTITY_CARD|
|realName|REJECTED_INCONSISTENT_ORGANIZATION_CODE|
|realName|REJECTED_INCONSISTENT_REGISTRANT_NAME|
|realName|REJECTED_INVALID_BUSINESS_LICENSE_OR_ORGANIZATION_CODE|
|realName|REJECTED_INVALID_DOCUMENT|
|realName|REJECTED_MISMATCH_BUSINESS_ID|
|realName|REJECTED_MISMATCH_BUSINESS_NAME|
|realName|REJECTED_MISMATCH_DOCUMENT_ID|
|realName|REJECTED_MISMATCH_DOCUMENT_NAME|
|realName|REJECTED_MISMATCH_DOCUMENT_TYPE|
|realName|REJECTED_MISMATCH_REGISTRANT_INFO|
|realName|REJECTED_MISMATCH_REGISTRANT_LOCALITY|
|realName|REJECTED_MISMATCH_REGISTRANT_NAME|
|realName|REJECTED_UNABLE_TO_OPEN|
|realName|REJECTED_UNABLE_TO_VERIFY|
|realName|REJECTED_UNKNOWN_ERROR|
|realName|UNABLE_TO_RETRIEVE_STATUS|

<h2 id="tocS_domain">domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number(double)|false|none|none|
