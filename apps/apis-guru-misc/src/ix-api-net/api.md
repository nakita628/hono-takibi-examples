<h1 id="ix-api">IX-API v2.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


This API allows to config/change/delete Internet Exchange services.

# Filters

When querying collections, the provided query parameters
are validated. Unknown query parameters are ignored.
Providing invalid filter values should yield a validation error.

Base URLs:

* <a href="https://api.apis.guru/api/v2">https://api.apis.guru/api/v2</a>

Web: <a href="https://ix-api.net">https://ix-api.net</a> 

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="ix-api-accounts">accounts</h1>

An `Account` represents an individual customer account, organization
or partner involved with the IXP. They are used to consume
services from an IXP.

Accounts can have a hierarchy, i.e. an
account can have sub-accounts. The max-depth of
the account-hierarchy may vary by implementer, but it's safe to
assume an account can have sub-accounts.

Each `Account` has a state. Only `Account`s in state `production`
or `production_state_pending` are ready to consume services.

There are `Contact`s associated with each account. Contacts can
be assigned for `Role`s via `RoleAssignment`s. Depending on the
IXP and the services the account wants to use, contacts with
specific roles may be required.
A contact with role `legal` is mandatory for an account to become
operational.

Only accounts with `billing_information` present can be used
as a `billing_account`.

## accounts_list

<a id="opIdaccounts_list"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

Retrieve a list of `Account`s.

This includes all accounts the currently authorized account
is managing and the current account itself.

<h3 id="accountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|managing_account|query|string|false|Filter by managing_account|
|billable|query|integer|false|Filter by billable|
|external_ref|query|string|false|Filter by external_ref|
|name|query|string|false|Filter by name|

> Example responses

> 200 Response

```json
[
  {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "billing_information": {
      "address": {
        "country": "US",
        "locality": "Mountain View",
        "post_office_box_number": "2335232",
        "postal_code": "9409",
        "region": "CA",
        "street_address": "1600 Amphitheatre Pkwy."
      },
      "name": "Moonoc Network Services LLS.",
      "vat_number": "UK2300000042"
    },
    "discoverable": false,
    "external_ref": "IX:Service:23042",
    "id": "string",
    "legal_name": "Moon Network Services LLS.",
    "managing_account": "IX:Account:231",
    "metro_area_network_presence": [
      "14021",
      "12939"
    ],
    "name": "Moonpeer Inc.",
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="accountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Account|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="accountslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## accounts_create

<a id="opIdaccounts_create"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "billing_information": {
      "address": {
        "country": "US",
        "locality": "Mountain View",
        "post_office_box_number": "2335232",
        "postal_code": "9409",
        "region": "CA",
        "street_address": "1600 Amphitheatre Pkwy."
      },
      "name": "Moonoc Network Services LLS.",
      "vat_number": "UK2300000042"
    },
    "discoverable": false,
    "external_ref": "IX:Service:23042",
    "legal_name": "Moon Network Services LLS.",
    "managing_account": "IX:Account:231",
    "metro_area_network_presence": [
      "14021",
      "12939"
    ],
    "name": "Moonpeer Inc."
  }'
```

`POST /accounts`

Create a new account.

> Body parameter

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

<h3 id="accountscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountRequest](#schemaaccountrequest)|false|Account Request|
|» address|body|[Address](#schemaaddress)|true|none|
|» billing_information|body|[BillingInformation](#schemabillinginformation)|false|none|
|» discoverable|body|boolean|false|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» legal_name|body|string \| null|false|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|» managing_account|body|string \| null|false|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|» metro_area_network_presence|body|[string]|false|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|» name|body|string|true|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

> Example responses

> 201 Response

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="accountscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Account|[Account](#schemaaccount)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="accountscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## accounts_read

<a id="opIdaccounts_read"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{id}`

Get a single account.

<h3 id="accountsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="accountsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[Account](#schemaaccount)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="accountsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## accounts_update

<a id="opIdaccounts_update"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "billing_information": {
      "address": {
        "country": "US",
        "locality": "Mountain View",
        "post_office_box_number": "2335232",
        "postal_code": "9409",
        "region": "CA",
        "street_address": "1600 Amphitheatre Pkwy."
      },
      "name": "Moonoc Network Services LLS.",
      "vat_number": "UK2300000042"
    },
    "discoverable": false,
    "external_ref": "IX:Service:23042",
    "legal_name": "Moon Network Services LLS.",
    "managing_account": "IX:Account:231",
    "metro_area_network_presence": [
      "14021",
      "12939"
    ],
    "name": "Moonpeer Inc."
  }'
```

`PUT /accounts/{id}`

Update the entire account.

> Body parameter

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

<h3 id="accountsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[AccountUpdate](#schemaaccountupdate)|false|Account Update Request|
|» address|body|[Address](#schemaaddress)|true|none|
|» billing_information|body|[BillingInformation](#schemabillinginformation)|false|none|
|» discoverable|body|boolean|false|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» legal_name|body|string \| null|false|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|» managing_account|body|string \| null|false|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|» metro_area_network_presence|body|[string]|true|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|» name|body|string|true|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

> Example responses

> 202 Response

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="accountsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Account|[Account](#schemaaccount)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="accountsupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## accounts_destroy

<a id="opIdaccounts_destroy"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{id}`

Accounts can be deleted, when all services and configs
are decommissioned or the account is not longer referenced
e.g. as a `managing_account` or `billing_account`.

Deleting an account will cascade to `contacts` and
`role-assignments`.

The request will immediately fail, if the above preconditions
are not met.

<h3 id="accountsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="accountsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[Account](#schemaaccount)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="accountsdestroy-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## accounts_partial_update

<a id="opIdaccounts_partial_update"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "billing_information": {
      "address": {
        "country": "US",
        "locality": "Mountain View",
        "post_office_box_number": "2335232",
        "postal_code": "9409",
        "region": "CA",
        "street_address": "1600 Amphitheatre Pkwy."
      },
      "name": "Moonoc Network Services LLS.",
      "vat_number": "UK2300000042"
    },
    "discoverable": false,
    "external_ref": "IX:Service:23042",
    "legal_name": "Moon Network Services LLS.",
    "managing_account": "IX:Account:231",
    "metro_area_network_presence": [
      "14021",
      "12939"
    ],
    "name": "Moonpeer Inc."
  }'
```

`PATCH /accounts/{id}`

Update parts of an account.

> Body parameter

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

<h3 id="accountspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[AccountUpdatePartial](#schemaaccountupdatepartial)|false|Account Update Request|
|» address|body|[Address](#schemaaddress)|false|none|
|» billing_information|body|[BillingInformation](#schemabillinginformation)|false|none|
|» discoverable|body|boolean|false|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» legal_name|body|string \| null|false|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|» managing_account|body|string \| null|false|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|» metro_area_network_presence|body|[string]|false|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|» name|body|string|false|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

> Example responses

> 202 Response

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="accountspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Account|[Account](#schemaaccount)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="accountspartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-auth">auth</h1>

Open an authorized session with the IX-API. This is equivalent to
a 'login' endpoint.

Upon success, you will receive an `access_token` and
a `refreh_token`. Both are JWTs and have limited lifetimes. You
can get information like their expiry time directly by parsing
the tokens.

Use the `access_token` as `Bearer` in your `Authorization` header
for getting access to the API.

When the session (i.e. the `access_token`) expires, use the
`refresh_token` (if it's not yet expired) with the
`refresh`-endpoint to reauthenticate and get a fresh `access_token`.

## auth_token_refresh

<a id="opIdauth_token_refresh"></a>

> Code samples

```bash
curl https://example.com/auth/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "refresh_token": "string"
  }'
```

`POST /auth/refresh`

Reauthenticate the API user, issue a new `access_token`
and `refresh_token` pair by providing the `refresh_token`
in the request body.

> Body parameter

```json
{
  "refresh_token": "string"
}
```

<h3 id="authtokenrefresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefreshTokenRequest](#schemarefreshtokenrequest)|false|RefreshTokenRequest|
|» refresh_token|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

<h3 id="authtokenrefresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|AuthToken|[AuthToken](#schemaauthtoken)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|

<h3 id="authtokenrefresh-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|
|type|https://errors.ix-api.net/v2/not-authenticated.html|

<aside class="success">
This operation does not require authentication
</aside>

## auth_token_create

<a id="opIdauth_token_create"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "api_key": "stringstringstri",
    "api_secret": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringst"
  }'
```

`POST /auth/token`

Authenticate an API user identified by `api_key` and
`api_secret`.

> Body parameter

```json
{
  "api_key": "stringstringstri",
  "api_secret": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringst"
}
```

<h3 id="authtokencreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthTokenRequest](#schemaauthtokenrequest)|false|AuthTokenRequest|
|» api_key|body|string|true|none|
|» api_secret|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

<h3 id="authtokencreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|AuthToken|[AuthToken](#schemaauthtoken)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|

<h3 id="authtokencreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|
|type|https://errors.ix-api.net/v2/not-authenticated.html|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ix-api-connections">connections</h1>

A `Connection` is a functional group of physical connections
collected together into a LAG (aka trunk).

A `connection` with only one `port` can be also configured as
standalone which means no LAG configuration on the switch.

## connections_list

<a id="opIdconnections_list"></a>

> Code samples

```bash
curl https://example.com/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections`

List all `connection`s.

<h3 id="connectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|mode|query|string|false|Filter by mode|
|mode__is_not|query|string|false|Filter by mode__is_not|
|name|query|string|false|Filter by name|
|metro_area_network|query|string|false|Filter by metro_area_network|
|pop|query|string|false|Filter by pop|
|facility|query|string|false|Filter by facility|
|external_ref|query|string|false|Filter by external_ref|

> Example responses

> 200 Response

```json
[
  {
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "lacp_timeout": "slow",
    "managing_account": "238189294",
    "mode": "lag_lacp",
    "name": "string",
    "outer_vlan_ethertypes": [
      "0x8100"
    ],
    "ports": [
      "ID23",
      "42",
      "5"
    ],
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "speed": 20000,
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ],
    "vlan_types": [
      "port"
    ]
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="connectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Connection|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="connectionslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Connection](#schemaconnection)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## connections_read

<a id="opIdconnections_read"></a>

> Code samples

```bash
curl https://example.com/connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections/{id}`

Read a `connection`.

<h3 id="connectionsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "name": "string",
  "outer_vlan_ethertypes": [
    "0x8100"
  ],
  "ports": [
    "ID23",
    "42",
    "5"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "vlan_types": [
    "port"
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="connectionsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection|[Connection](#schemaconnection)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="connectionsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-contacts">contacts</h1>

A `Contact` is a role undertaking a specific responsibility
within an account, typically a department or agent of the
customer company.

`Contact`s are assigned multiple roles by `RoleAssignment`s.

A contact is bound to the account by the `consuming_account` property.

## contacts_list

<a id="opIdcontacts_list"></a>

> Code samples

```bash
curl https://example.com/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts`

List available contacts managed by the authorized account.

<h3 id="contactslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|

> Example responses

> 200 Response

```json
[
  {
    "consuming_account": "2381982",
    "email": "info@moon-peer.net",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "managing_account": "238189294",
    "name": "Some A. Name",
    "telephone": "+442071838750"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="contactslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Contact|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="contactslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Contact](#schemacontact)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## contacts_create

<a id="opIdcontacts_create"></a>

> Code samples

```bash
curl https://example.com/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consuming_account": "2381982",
    "email": "info@moon-peer.net",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "name": "Some A. Name",
    "telephone": "+442071838750"
  }'
```

`POST /contacts`

Create a new contact.

> Body parameter

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

<h3 id="contactscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContactRequest](#schemacontactrequest)|false|A contact creation request|
|» consuming_account|body|string|true|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» email|body|string \| null|false|The email of the legal company entity.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» managing_account|body|string|true|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» name|body|string \| null|false|A name of a person or an organisation|
|» telephone|body|string \| null|false|The telephone number in E.164 Phone Number Formatting|

> Example responses

> 201 Response

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="contactscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Contact|[Contact](#schemacontact)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="contactscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## contacts_read

<a id="opIdcontacts_read"></a>

> Code samples

```bash
curl https://example.com/contacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /contacts/{id}`

Get a contact by it's id

<h3 id="contactsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="contactsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contact|[Contact](#schemacontact)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="contactsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## contacts_update

<a id="opIdcontacts_update"></a>

> Code samples

```bash
curl https://example.com/contacts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consuming_account": "2381982",
    "email": "info@moon-peer.net",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "name": "Some A. Name",
    "telephone": "+442071838750"
  }'
```

`PUT /contacts/{id}`

Update a contact

> Body parameter

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

<h3 id="contactsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[ContactRequest](#schemacontactrequest)|false|A contact creation request|
|» consuming_account|body|string|true|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» email|body|string \| null|false|The email of the legal company entity.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» managing_account|body|string|true|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» name|body|string \| null|false|A name of a person or an organisation|
|» telephone|body|string \| null|false|The telephone number in E.164 Phone Number Formatting|

> Example responses

> 200 Response

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="contactsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contact|[Contact](#schemacontact)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="contactsupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## contacts_destroy

<a id="opIdcontacts_destroy"></a>

> Code samples

```bash
curl https://example.com/contacts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /contacts/{id}`

Remove a contact.

Please note, that a contact can only be removed if
it is not longer in use in a network service or config
through a role assignment.

<h3 id="contactsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="contactsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contact|[Contact](#schemacontact)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="contactsdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## contacts_partial_update

<a id="opIdcontacts_partial_update"></a>

> Code samples

```bash
curl https://example.com/contacts/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consuming_account": "2381982",
    "email": "info@moon-peer.net",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "name": "Some A. Name",
    "telephone": "+442071838750"
  }'
```

`PATCH /contacts/{id}`

Update parts of a contact

> Body parameter

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

<h3 id="contactspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[ContactRequestPartial](#schemacontactrequestpartial)|false|A contact creation request|
|» consuming_account|body|string|false|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» email|body|string \| null|false|The email of the legal company entity.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» managing_account|body|string|false|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» name|body|string \| null|false|A name of a person or an organisation|
|» telephone|body|string \| null|false|The telephone number in E.164 Phone Number Formatting|

> Example responses

> 200 Response

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="contactspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contact|[Contact](#schemacontact)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="contactspartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-devices">devices</h1>

A `Device` is a network hardware device, typically a switch, which
is located at a specified facility and inside a `PointOfPresence`.
PoPs.

They may be physically located at their related PoPs.

## devices_list

<a id="opIddevices_list"></a>

> Code samples

```bash
curl https://example.com/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /devices`

List available devices

<h3 id="deviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|name|query|string|false|Filter by name|
|capability_media_type|query|string|false|Filter by capability_media_type|
|capability_speed|query|integer|false|Filter by capability_speed|
|capability_speed__lt|query|integer|false|Filter by capability_speed__lt|
|capability_speed__lte|query|integer|false|Filter by capability_speed__lte|
|capability_speed__gt|query|integer|false|Filter by capability_speed__gt|
|capability_speed__gte|query|integer|false|Filter by capability_speed__gte|
|facility|query|string|false|Filter by facility|
|pop|query|string|false|Filter by pop|
|metro_area_network|query|string|false|Filter by metro_area_network|

> Example responses

> 200 Response

```json
[
  {
    "capabilities": [
      {
        "availability": 23,
        "max_lag": 8,
        "media_type": "1000BASE-LX",
        "speed": 1000
      }
    ],
    "facility": "string",
    "id": "string",
    "name": "edge2.moon.space-ix.net",
    "pop": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="deviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Device|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="deviceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## devices_read

<a id="opIddevices_read"></a>

> Code samples

```bash
curl https://example.com/devices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /devices/{id}`

Get a specific device identified by id

<h3 id="devicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "capabilities": [
    {
      "availability": 23,
      "max_lag": 8,
      "media_type": "1000BASE-LX",
      "speed": 1000
    }
  ],
  "facility": "string",
  "id": "string",
  "name": "edge2.moon.space-ix.net",
  "pop": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="devicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Device|[Device](#schemadevice)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="devicesread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-facilities">facilities</h1>

A `Facility` is a data centre, with a determined physical address,
from which a defined set of PoPs can be accessed

## facilities_list

<a id="opIdfacilities_list"></a>

> Code samples

```bash
curl https://example.com/facilities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /facilities`

Get a (filtered) list of `facilities`.

<h3 id="facilitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|capability_media_type|query|string|false|Filter by capability_media_type|
|capability_speed|query|integer|false|Filter by capability_speed|
|capability_speed__lt|query|integer|false|Filter by capability_speed__lt|
|capability_speed__lte|query|integer|false|Filter by capability_speed__lte|
|capability_speed__gt|query|integer|false|Filter by capability_speed__gt|
|capability_speed__gte|query|integer|false|Filter by capability_speed__gte|
|organisation_name|query|string|false|Filter by organisation_name|
|metro_area|query|string|false|Filter by metro_area|
|metro_area_network|query|string|false|Filter by metro_area_network|
|address_country|query|string|false|Filter by address_country|
|address_locality|query|string|false|Filter by address_locality|
|postal_code|query|string|false|Filter by postal_code|

> Example responses

> 200 Response

```json
[
  {
    "address_country": "US",
    "address_locality": "Mountain View",
    "address_region": "CA",
    "id": "string",
    "metro_area": "met:93214980:BER",
    "name": "Crater DC Moon 1",
    "organisation_name": "Moon Datacenters",
    "peeringdb_facility_id": 103,
    "pops": [
      "string"
    ],
    "postal_code": "9409",
    "street_address": "1600 Amphitheatre Pkwy."
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="facilitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Facility|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="facilitieslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Facility](#schemafacility)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## facilities_read

<a id="opIdfacilities_read"></a>

> Code samples

```bash
curl https://example.com/facilities/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /facilities/{id}`

Retrieve a facility by id

<h3 id="facilitiesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
[
  {
    "address_country": "US",
    "address_locality": "Mountain View",
    "address_region": "CA",
    "id": "string",
    "metro_area": "met:93214980:BER",
    "name": "Crater DC Moon 1",
    "organisation_name": "Moon Datacenters",
    "peeringdb_facility_id": 103,
    "pops": [
      "string"
    ],
    "postal_code": "9409",
    "street_address": "1600 Amphitheatre Pkwy."
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="facilitiesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Facility|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="facilitiesread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Facility](#schemafacility)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-health">health</h1>

This endpoint provides a health status response implementing
https://tools.ietf.org/id/draft-inadarei-api-health-check-04.html

The schema describes the toplevel fields - however the
implementation of health checks is up to the IX-API implementor.

## api_health_read

<a id="opIdapi_health_read"></a>

> Code samples

```bash
curl https://example.com/health \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /health`

Get the IX-API service health status.

> Example responses

> 200 Response

```json
{
  "checks": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "description": "string",
  "links": {
    "property1": "string",
    "property2": "string"
  },
  "notes": [
    "string"
  ],
  "output": "string",
  "releaseId": "1.23.0",
  "serviceId": "string",
  "status": "pass",
  "version": "1"
}
```

<h3 id="apihealthread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status Response|[HealthResponse](#schemahealthresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-implementation">implementation</h1>

This endpoint provides information about the IX-API
implementation of the exchange.

You can find the implemented schema version and
supported types and operations here.

## api_implementation_read

<a id="opIdapi_implementation_read"></a>

> Code samples

```bash
curl https://example.com/implementation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /implementation`

Get the API implementation details.

> Example responses

> 200 Response

```json
{
  "schema_version": "2.0.0",
  "service_version": "1.23.0",
  "supported_network_feature_config_types": [
    "route_server"
  ],
  "supported_network_feature_types": [
    "route_server"
  ],
  "supported_network_service_config_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_network_service_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_operations": [
    "connections_list",
    "connections_read",
    "network_service_configs_create"
  ]
}
```

<h3 id="apiimplementationread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API Implementation|[ImplementationResponse](#schemaimplementationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-ips">ips</h1>

An `IP` is a IPv4 or 6 addresses, with a given validity period.
Some services require IP addresses to work.

When you are joining an `exchange_lan` network service
for example, addresses on the peering lan will be assigned
to you.

## ips_list

<a id="opIdips_list"></a>

> Code samples

```bash
curl https://example.com/ips \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ips`

List all ip addresses (and prefixes).

<h3 id="ipslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|
|network_service|query|string|false|Filter by network_service|
|network_service_config|query|string|false|Filter by network_service_config|
|network_feature|query|string|false|Filter by network_feature|
|network_feature_config|query|string|false|Filter by network_feature_config|
|version|query|integer|false|Filter by version|
|fqdn|query|string|false|Filter by fqdn|
|prefix_length|query|integer|false|Filter by prefix_length|
|valid_not_before|query|string|false|Filter by valid_not_before|
|valid_not_after|query|string|false|Filter by valid_not_after|

> Example responses

> 200 Response

```json
[
  {
    "address": "23.142.52.0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "fqdn": "string",
    "id": "string",
    "managing_account": "238189294",
    "prefix_length": 23,
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z",
    "version": 4
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="ipslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: IP-Address|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="ipslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IpAddress](#schemaipaddress)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ips_create

<a id="opIdips_create"></a>

> Code samples

```bash
curl https://example.com/ips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "23.142.52.0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "fqdn": "string",
    "managing_account": "238189294",
    "prefix_length": 23,
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z",
    "version": 4
  }'
```

`POST /ips`

Add an ip host address or network prefix.

> Body parameter

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

<h3 id="ipscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IpAddressRequest](#schemaipaddressrequest)|false|IP-Address / Prefix allocation Request|
|» address|body|string|true|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|» consuming_account|body|string|true|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» fqdn|body|string \| null|false|none|
|» managing_account|body|string|true|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» prefix_length|body|integer(int32)|true|The CIDR ip prefix length<br>|
|» valid_not_after|body|string(date-time) \| null|false|none|
|» valid_not_before|body|string(date-time) \| null|false|none|
|» version|body|integer|true|The version of the internet protocol.<br>|

> Example responses

> 201 Response

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

<h3 id="ipscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|IP-Address|[IpAddress](#schemaipaddress)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ips_read

<a id="opIdips_read"></a>

> Code samples

```bash
curl https://example.com/ips/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ips/{id}`

Get a single ip addresses by it's id.

<h3 id="ipsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="ipsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP-Address|[IpAddress](#schemaipaddress)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="ipsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ips_update

<a id="opIdips_update"></a>

> Code samples

```bash
curl https://example.com/ips/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "23.142.52.0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "fqdn": "string",
    "managing_account": "238189294",
    "prefix_length": 23,
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z",
    "version": 4
  }'
```

`PUT /ips/{id}`

Update an ip address object.

You can only update
IP addresses within your current scope. Not all
addresses you can read you can update.

If the ip address was allocated for you, you might
not be able to change anything but the `fqdn`.

> Body parameter

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

<h3 id="ipsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[IpAddressUpdate](#schemaipaddressupdate)|false|IP-Address Update|
|» address|body|string|true|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|» consuming_account|body|string|true|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» fqdn|body|string \| null|false|none|
|» managing_account|body|string|true|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» prefix_length|body|integer(int32)|true|The CIDR ip prefix length<br>|
|» valid_not_after|body|string(date-time) \| null|false|none|
|» valid_not_before|body|string(date-time) \| null|false|none|
|» version|body|integer|true|The version of the internet protocol.<br>|

> Example responses

> 200 Response

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="ipsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP-Address|[IpAddress](#schemaipaddress)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="ipsupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ips_partial_update

<a id="opIdips_partial_update"></a>

> Code samples

```bash
curl https://example.com/ips/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "23.142.52.0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "fqdn": "string",
    "managing_account": "238189294",
    "prefix_length": 23,
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z",
    "version": 4
  }'
```

`PATCH /ips/{id}`

Update parts of an ip address.


As with the `PUT` opertaion, IP addresses, where you
don't have update rights, will yield a `resource access denied`
error when attempting an update.

If the ip address was allocated for you, you might
not be able to change anything but the `fqdn`.

> Body parameter

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

<h3 id="ipspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[IpAddressUpdatePartial](#schemaipaddressupdatepartial)|false|IP-Address Update|
|» address|body|string|false|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|» consuming_account|body|string|false|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» fqdn|body|string \| null|false|none|
|» managing_account|body|string|false|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» prefix_length|body|integer(int32)|false|The CIDR ip prefix length<br>|
|» valid_not_after|body|string(date-time) \| null|false|none|
|» valid_not_before|body|string(date-time) \| null|false|none|
|» version|body|integer|false|The version of the internet protocol.<br>|

> Example responses

> 200 Response

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="ipspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IP-Address|[IpAddress](#schemaipaddress)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="ipspartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-macs">macs</h1>

A `MAC` is a MAC addresses with a given validity period.

Some services require MAC addresses to work.
Please note that only *unicast* MAC addresses are allowed.
You are not alllowed to use multicast or broadcast addresses.

The address itself can not be updated after creation.
However: It can be expired by changing the `valid_not_before`
and `valid_not_after` properties.

## macs_list

<a id="opIdmacs_list"></a>

> Code samples

```bash
curl https://example.com/macs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /macs`

List all mac addresses managed by the authorized customer.

<h3 id="macslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|
|network_service_config|query|string|false|Filter by network_service_config|
|address|query|string|false|Filter by address|
|assigned_at|query|string|false|Filter by assigned_at|
|valid_not_before|query|string|false|Filter by valid_not_before|
|valid_not_after|query|string|false|Filter by valid_not_after|

> Example responses

> 200 Response

```json
[
  {
    "address": "42:23:bc:8e:b8:b0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "managing_account": "238189294",
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="macslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: MAC-Address|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="macslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MacAddress](#schemamacaddress)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## macs_create

<a id="opIdmacs_create"></a>

> Code samples

```bash
curl https://example.com/macs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": "42:23:bc:8e:b8:b0",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "valid_not_after": "1970-01-01T00:00:00Z",
    "valid_not_before": "1970-01-01T00:00:00Z"
  }'
```

`POST /macs`

Register a mac address.

> Body parameter

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

<h3 id="macscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MacAddressRequest](#schemamacaddressrequest)|false|MAC-Address Request|
|» address|body|string|true|Unicast MAC address, formatted hexadecimal values with colons.<br>|
|» consuming_account|body|string|true|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|» external_ref|body|string \| null|false|Reference field, free to use for the API user.|
|» managing_account|body|string|true|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|» valid_not_after|body|string(date-time) \| null|false|none|
|» valid_not_before|body|string(date-time) \| null|false|none|

> Example responses

> 201 Response

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="macscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|MAC-Address|[MacAddress](#schemamacaddress)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="macscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## macs_read

<a id="opIdmacs_read"></a>

> Code samples

```bash
curl https://example.com/macs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /macs/{id}`

Get a single mac address by it's id.

<h3 id="macsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="macsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MAC-Address|[MacAddress](#schemamacaddress)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="macsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## macs_destroy

<a id="opIdmacs_destroy"></a>

> Code samples

```bash
curl https://example.com/macs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /macs/{id}`

Remove a mac address.

<h3 id="macsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="macsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MAC-Address|[MacAddress](#schemamacaddress)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="macsdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-member-joining-rules">member-joining-rules</h1>

A `MemberJoiningRule` defines a rule to allow or deny access for
an `Account` to a access a `NetworkService`.

Furthermore, some `NetworkService`s may only be visible if the
querying account is listed in an allow rule.

## member_joining_rules_list

<a id="opIdmember_joining_rules_list"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /member-joining-rules`

Get a list of joining rules

<h3 id="memberjoiningruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|network_service|query|string|false|Filter by network_service|

> Example responses

> 200 Response

```json
[
  {
    "capacity_max": 1,
    "capacity_min": 1,
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "managing_account": "238189294",
    "network_service": "string",
    "type": "allow"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="memberjoiningruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Member Joining Rule|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="memberjoiningruleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MemberJoiningRule](#schemamemberjoiningrule)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## member_joining_rules_create

<a id="opIdmember_joining_rules_create"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacity_max": 1,
    "capacity_min": 1,
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "network_service": "string",
    "type": "allow"
  }'
```

`POST /member-joining-rules`

Create a member joining rule

> Body parameter

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

<h3 id="memberjoiningrulescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MemberJoiningRuleRequest](#schemamemberjoiningrulerequest)|false|Polymorphic Member Joining Rule Request|
|» *oneOf*|body|[AllowMemberJoiningRuleRequest](#schemaallowmemberjoiningrulerequest)|false|none|
|» *oneOf*|body|[DenyMemberJoiningRuleRequest](#schemadenymemberjoiningrulerequest)|false|none|

> Example responses

> 201 Response

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="memberjoiningrulescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Polymorphic Member Joining Rule|[MemberJoiningRule](#schemamemberjoiningrule)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="memberjoiningrulescreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## member_joining_rules_read

<a id="opIdmember_joining_rules_read"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /member-joining-rules/{id}`

Get a single rule

<h3 id="memberjoiningrulesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="memberjoiningrulesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Member Joining Rule|[MemberJoiningRule](#schemamemberjoiningrule)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="memberjoiningrulesread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## member_joining_rules_update

<a id="opIdmember_joining_rules_update"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacity_max": 1,
    "capacity_min": 1,
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "type": "allow"
  }'
```

`PUT /member-joining-rules/{id}`

Update a joining rule

> Body parameter

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

<h3 id="memberjoiningrulesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[MemberJoiningRuleUpdate](#schemamemberjoiningruleupdate)|false|Polymorphic Member Joining Rule Update|
|» *oneOf*|body|[AllowMemberJoiningRuleUpdate](#schemaallowmemberjoiningruleupdate)|false|none|
|» *oneOf*|body|[DenyMemberJoiningRuleUpdate](#schemadenymemberjoiningruleupdate)|false|none|

> Example responses

> 200 Response

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="memberjoiningrulesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Member Joining Rule|[MemberJoiningRule](#schemamemberjoiningrule)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="memberjoiningrulesupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## member_joining_rules_destroy

<a id="opIdmember_joining_rules_destroy"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /member-joining-rules/{id}`

Delete a joining rule

<h3 id="memberjoiningrulesdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="memberjoiningrulesdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Member Joining Rule|[MemberJoiningRule](#schemamemberjoiningrule)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="memberjoiningrulesdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## member_joining_rules_partial_update

<a id="opIdmember_joining_rules_partial_update"></a>

> Code samples

```bash
curl https://example.com/member-joining-rules/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacity_max": 1,
    "capacity_min": 1,
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "managing_account": "238189294",
    "type": "allow"
  }'
```

`PATCH /member-joining-rules/{id}`

Partially update a joining rule

> Body parameter

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

<h3 id="memberjoiningrulespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[MemberJoiningRuleUpdatePartial](#schemamemberjoiningruleupdatepartial)|false|Polymorphic Member Joining Rule Update|
|» *oneOf*|body|[AllowMemberJoiningRuleUpdatePartial](#schemaallowmemberjoiningruleupdatepartial)|false|A vlan member joining rule update|
|» *oneOf*|body|[DenyMemberJoiningRuleUpdatePartial](#schemadenymemberjoiningruleupdatepartial)|false|A vlan member joining rule update|

> Example responses

> 200 Response

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="memberjoiningrulespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Member Joining Rule|[MemberJoiningRule](#schemamemberjoiningrule)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="memberjoiningrulespartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-metro-area-networks">metro-area-networks</h1>

Services are provided directly on or can be consumed
from inside a `MetroAreaNetwork`.

Accounts can indicate their presence in a `MetroAreaNetwork`
to others by adding a list of ids.

## metro_area_networks_list

<a id="opIdmetro_area_networks_list"></a>

> Code samples

```bash
curl https://example.com/metro-area-networks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metro-area-networks`

List all MetroAreaNetworks

<h3 id="metroareanetworkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|name|query|string|false|Filter by name|
|metro_area|query|string|false|Filter by metro_area|
|service_provider|query|string|false|Filter by service_provider|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "metro_area": "met:199399:FRA",
    "name": "MY-IX-FRA1",
    "pops": [
      "string"
    ],
    "service_provider": "MY-IX"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="metroareanetworkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: MetroAreaNetwork|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="metroareanetworkslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetroAreaNetwork](#schemametroareanetwork)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## metro_area_networks_read

<a id="opIdmetro_area_networks_read"></a>

> Code samples

```bash
curl https://example.com/metro-area-networks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metro-area-networks/{id}`

Retrieve a MetroAreaNetwork

<h3 id="metroareanetworksread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "metro_area": "met:199399:FRA",
  "name": "MY-IX-FRA1",
  "pops": [
    "string"
  ],
  "service_provider": "MY-IX"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="metroareanetworksread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MetroAreaNetwork|[MetroAreaNetwork](#schemametroareanetwork)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="metroareanetworksread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-metro-areas">metro-areas</h1>

A MetroArea exists if a `MetroAreaNetwork` or `Facility` is
present in it.

## metro_areas_list

<a id="opIdmetro_areas_list"></a>

> Code samples

```bash
curl https://example.com/metro-areas \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metro-areas`

List all MetroAreas

<h3 id="metroareaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|

> Example responses

> 200 Response

```json
[
  {
    "display_name": "FRA",
    "facilities": [
      "string"
    ],
    "iata_code": "FRA",
    "id": "string",
    "metro_area_networks": [
      "string"
    ],
    "un_locode": "DE FRA"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="metroareaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: MetroArea|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="metroareaslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetroArea](#schemametroarea)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## metro_areas_read

<a id="opIdmetro_areas_read"></a>

> Code samples

```bash
curl https://example.com/metro-areas/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metro-areas/{id}`

Get a single MetroArea

<h3 id="metroareasread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
[
  {
    "display_name": "FRA",
    "facilities": [
      "string"
    ],
    "iata_code": "FRA",
    "id": "string",
    "metro_area_networks": [
      "string"
    ],
    "un_locode": "DE FRA"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="metroareasread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: MetroArea|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="metroareasread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MetroArea](#schemametroarea)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-network-feature-configs">network-feature-configs</h1>

A `NetworkFeatureConfig` is a configuration for
using a `NetworkFeature`.

For certain `NetworkFeature`s, which are marked as required,
one `NetworkFeatureConfig needs to be created in order to move
the `NetworkServiceConfig` into `production`.

## network_feature_configs_list

<a id="opIdnetwork_feature_configs_list"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-feature-configs`

Get all network feature configs.

<h3 id="networkfeatureconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|
|type|query|string|false|Filter by type|
|service_config|query|string|false|Filter by service_config|
|network_feature|query|string|false|Filter by network_feature|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|route_server|

> Example responses

> 200 Response

```json
[
  {
    "as_set_v4": "MOON-AS@RIPE",
    "as_set_v6": "MOON-AS@RIPE",
    "asn": 4200000023,
    "bgp_session_type": "passive",
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "insert_ixp_asn": true,
    "ip": "string",
    "managing_account": "238189294",
    "max_prefix_v4": 5000,
    "max_prefix_v6": 5000,
    "network_feature": "string",
    "network_service_config": "string",
    "password": "bgp-session-test-23",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "session_mode": "public",
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ],
    "type": "route_server"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkfeatureconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Network Feature Config|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkfeatureconfigslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkFeatureConfig](#schemanetworkfeatureconfig)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_feature_configs_create

<a id="opIdnetwork_feature_configs_create"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "as_set_v4": "MOON-AS@RIPE",
    "as_set_v6": "MOON-AS@RIPE",
    "asn": 4200000023,
    "bgp_session_type": "passive",
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "insert_ixp_asn": true,
    "ip": "string",
    "managing_account": "238189294",
    "max_prefix_v4": 5000,
    "max_prefix_v6": 5000,
    "network_feature": "string",
    "network_service_config": "string",
    "password": "bgp-session-test-23",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "session_mode": "public",
    "type": "route_server"
  }'
```

`POST /network-feature-configs`

Create a configuration for a `NetworkFeature`
defined in the `NetworkFeature`s collection.

> Body parameter

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "type": "route_server"
}
```

<h3 id="networkfeatureconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetworkFeatureConfigRequest](#schemanetworkfeatureconfigrequest)|false|Polymorphic Network Feature Config Request|
|» *oneOf*|body|[RouteServerNetworkFeatureConfigRequest](#schemarouteservernetworkfeatureconfigrequest)|false|none|

> Example responses

> 201 Response

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkfeatureconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Polymorphic Network Feature Config|[NetworkFeatureConfig](#schemanetworkfeatureconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkfeatureconfigscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_feature_configs_read

<a id="opIdnetwork_feature_configs_read"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-feature-configs/{id}`

Get a single network feature config.

<h3 id="networkfeatureconfigsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkfeatureconfigsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Network Feature Config|[NetworkFeatureConfig](#schemanetworkfeatureconfig)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkfeatureconfigsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_feature_configs_update

<a id="opIdnetwork_feature_configs_update"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "as_set_v4": "MOON-AS@RIPE",
    "as_set_v6": "MOON-AS@RIPE",
    "asn": 4200000023,
    "bgp_session_type": "passive",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "insert_ixp_asn": true,
    "ip": "string",
    "managing_account": "238189294",
    "max_prefix_v4": 5000,
    "max_prefix_v6": 5000,
    "password": "bgp-session-test-23",
    "session_mode": "public",
    "type": "route_server"
  }'
```

`PUT /network-feature-configs/{id}`

Update a network feature configuration

> Body parameter

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

<h3 id="networkfeatureconfigsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkFeatureConfigUpdate](#schemanetworkfeatureconfigupdate)|false|Polymorphic Network Feauture Config Update|
|» *oneOf*|body|[RouteServerNetworkFeatureConfigUpdate](#schemarouteservernetworkfeatureconfigupdate)|false|none|

> Example responses

> 202 Response

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkfeatureconfigsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Feature Config|[NetworkFeatureConfig](#schemanetworkfeatureconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkfeatureconfigsupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_feature_configs_destroy

<a id="opIdnetwork_feature_configs_destroy"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /network-feature-configs/{id}`

Remove a network feature config.

The network feature config will be marked as
`decommission_requested`.
Decommissioning a network feature config will not
cascade to related services or service configs.

<h3 id="networkfeatureconfigsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 202 Response

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkfeatureconfigsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Feature Config|[NetworkFeatureConfig](#schemanetworkfeatureconfig)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkfeatureconfigsdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_feature_configs_partial_update

<a id="opIdnetwork_feature_configs_partial_update"></a>

> Code samples

```bash
curl https://example.com/network-feature-configs/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "as_set_v4": "MOON-AS@RIPE",
    "as_set_v6": "MOON-AS@RIPE",
    "asn": 4200000023,
    "bgp_session_type": "passive",
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "insert_ixp_asn": true,
    "ip": "string",
    "managing_account": "238189294",
    "max_prefix_v4": 5000,
    "max_prefix_v6": 5000,
    "password": "bgp-session-test-23",
    "session_mode": "public",
    "type": "route_server"
  }'
```

`PATCH /network-feature-configs/{id}`

Update parts of a network feature configuration

> Body parameter

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

<h3 id="networkfeatureconfigspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkFeatureConfigUpdatePartial](#schemanetworkfeatureconfigupdatepartial)|false|Polymorphic Network Feauture Config Update|
|» *oneOf*|body|[RouteServerNetworkFeatureConfigUpdatePartial](#schemarouteservernetworkfeatureconfigupdatepartial)|false|Route Server Network Feature Config Update|

> Example responses

> 202 Response

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkfeatureconfigspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Feature Config|[NetworkFeatureConfig](#schemanetworkfeatureconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkfeatureconfigspartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-network-features">network-features</h1>

A `NetworkFeature` represents additional funcationality of a single
`NetworkService`.

For certain `NetworkFeature`s, which are marked as required,
one `NetworkFeatureConfig needs to be created in order to move
the  `NetworkServiceConfig` into `production`.

## network_features_list

<a id="opIdnetwork_features_list"></a>

> Code samples

```bash
curl https://example.com/network-features \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-features`

List available network features.

<h3 id="networkfeatureslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|type|query|string|false|Filter by type|
|required|query|string|false|Filter by required|
|network_service|query|string|false|Filter by network_service|
|name|query|string|false|Filter by name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|route_server|

> Example responses

> 200 Response

```json
[
  {
    "address_families": [
      "af_inet"
    ],
    "asn": 0,
    "available_bgp_session_types": [
      "passive"
    ],
    "flags": [
      {
        "description": "RPKI reject invalid filtering is available",
        "name": "RPKI"
      }
    ],
    "fqdn": "rs1.moon-ix.net",
    "id": "string",
    "ip_v4": "23.42.0.1",
    "ip_v6": "2001:23:42::1",
    "looking_glass_url": "https://lg.moon-ix.net/rs1",
    "name": "string",
    "network_service": "string",
    "nfc_required_contact_roles": [
      "string"
    ],
    "required": true,
    "session_mode": "public",
    "type": "route_server"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkfeatureslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Network Feature|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkfeatureslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkFeature](#schemanetworkfeature)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_features_read

<a id="opIdnetwork_features_read"></a>

> Code samples

```bash
curl https://example.com/network-features/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-features/{id}`

Get a single network feature by it's id.

<h3 id="networkfeaturesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "address_families": [
    "af_inet"
  ],
  "asn": 0,
  "available_bgp_session_types": [
    "passive"
  ],
  "flags": [
    {
      "description": "RPKI reject invalid filtering is available",
      "name": "RPKI"
    }
  ],
  "fqdn": "rs1.moon-ix.net",
  "id": "string",
  "ip_v4": "23.42.0.1",
  "ip_v6": "2001:23:42::1",
  "looking_glass_url": "https://lg.moon-ix.net/rs1",
  "name": "string",
  "network_service": "string",
  "nfc_required_contact_roles": [
    "string"
  ],
  "required": true,
  "session_mode": "public",
  "type": "route_server"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkfeaturesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Network Feature|[NetworkFeature](#schemanetworkfeature)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkfeaturesread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-network-service-configs">network-service-configs</h1>

A `NetworkServiceConfig` is a customer's configuration for usage
of a `NetworkService`, e.g. the configuration of a (subset of a)
connection for that customer's traffic

The `type` of the config determines the service you are
configuring.

You can find the services available to you on the platform,
by querying the `NetworkService`s resource.

For certain `NetworkFeature`s, which are marked as required,
one `NetworkFeatureConfig needs to be created in order to move
the  `NetworkServiceConfig` into `production`.

## network_service_configs_list

<a id="opIdnetwork_service_configs_list"></a>

> Code samples

```bash
curl https://example.com/network-service-configs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-service-configs`

Get all `network-service-config`s.

<h3 id="networkserviceconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|
|type|query|string|false|Filter by type|
|inner_vlan|query|integer|false|Filter by inner_vlan|
|outer_vlan|query|integer|false|Filter by outer_vlan|
|capacity|query|integer|false|Filter by capacity|
|network_service|query|string|false|Filter by network_service|
|connection|query|string|false|Filter by connection|
|product_offering|query|string|false|Filter by product_offering|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|exchange_lan|
|type|p2p_vc|
|type|p2mp_vc|
|type|mp2mp_vc|
|type|cloud_vc|

> Example responses

> 200 Response

```json
[
  {
    "asns": [
      0
    ],
    "billing_account": "string",
    "capacity": 1,
    "charged_until": "1970-01-01",
    "connection": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "decommission_at": "1970-01-01",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "ips": [
      "string"
    ],
    "listed": true,
    "macs": [
      "string"
    ],
    "managing_account": "238189294",
    "network_feature_configs": [
      "12356",
      "43829"
    ],
    "network_service": "string",
    "product_offering": "string",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ],
    "type": "exchange_lan",
    "vlan_config": {
      "vlan": 23,
      "vlan_ethertype": "0x8100",
      "vlan_type": "dot1q"
    }
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkserviceconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Network Service Config|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkserviceconfigslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkServiceConfig](#schemanetworkserviceconfig)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_configs_create

<a id="opIdnetwork_service_configs_create"></a>

> Code samples

```bash
curl https://example.com/network-service-configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asns": [
      0
    ],
    "billing_account": "string",
    "capacity": 1,
    "connection": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "listed": true,
    "macs": [
      "string"
    ],
    "managing_account": "238189294",
    "network_service": "string",
    "product_offering": "string",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "type": "exchange_lan",
    "vlan_config": {
      "vlan": 23,
      "vlan_ethertype": "0x8100",
      "vlan_type": "dot1q"
    }
  }'
```

`POST /network-service-configs`

Create a `network-service-config`.

> Body parameter

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

<h3 id="networkserviceconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetworkServiceConfigRequest](#schemanetworkserviceconfigrequest)|false|Polymorhic Network Service Config Request|
|» *oneOf*|body|[ExchangeLanNetworkServiceConfigRequest](#schemaexchangelannetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[P2PNetworkServiceConfigRequest](#schemap2pnetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[P2MPNetworkServiceConfigRequest](#schemap2mpnetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[MP2MPNetworkServiceConfigRequest](#schemamp2mpnetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[CloudNetworkServiceConfigRequest](#schemacloudnetworkserviceconfigrequest)|false|none|

> Example responses

> 201 Response

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkserviceconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Polymorphic Network Service Config|[NetworkServiceConfig](#schemanetworkserviceconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkserviceconfigscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_configs_read

<a id="opIdnetwork_service_configs_read"></a>

> Code samples

```bash
curl https://example.com/network-service-configs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-service-configs/{id}`

Get a `network-service-config`

<h3 id="networkserviceconfigsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkserviceconfigsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Network Service Config|[NetworkServiceConfig](#schemanetworkserviceconfig)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkserviceconfigsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_configs_update

<a id="opIdnetwork_service_configs_update"></a>

> Code samples

```bash
curl https://example.com/network-service-configs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asns": [
      0
    ],
    "billing_account": "string",
    "capacity": 1,
    "connection": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "listed": true,
    "macs": [
      "string"
    ],
    "managing_account": "238189294",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "type": "exchange_lan",
    "vlan_config": {
      "vlan": 23,
      "vlan_ethertype": "0x8100",
      "vlan_type": "dot1q"
    }
  }'
```

`PUT /network-service-configs/{id}`

Update an exisiting `network-service-config`

> Body parameter

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

<h3 id="networkserviceconfigsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkServiceConfigUpdate](#schemanetworkserviceconfigupdate)|false|Polymorphic Network Service Config|
|» *oneOf*|body|[ExchangeLanNetworkServiceConfigUpdate](#schemaexchangelannetworkserviceconfigupdate)|false|none|
|» *oneOf*|body|[P2PNetworkServiceConfigUpdate](#schemap2pnetworkserviceconfigupdate)|false|none|
|» *oneOf*|body|[P2MPNetworkServiceConfigRequest](#schemap2mpnetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[MP2MPNetworkServiceConfigRequest](#schemamp2mpnetworkserviceconfigrequest)|false|none|
|» *oneOf*|body|[CloudNetworkServiceConfigUpdate](#schemacloudnetworkserviceconfigupdate)|false|none|

> Example responses

> 202 Response

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkserviceconfigsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Service Config|[NetworkServiceConfig](#schemanetworkserviceconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkserviceconfigsupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_configs_destroy

<a id="opIdnetwork_service_configs_destroy"></a>

> Code samples

```bash
curl https://example.com/network-service-configs/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "decommission_at": "1970-01-01"
  }'
```

`DELETE /network-service-configs/{id}`

Request decommissioning the network service configuration.

The network service config will assume the state
`decommission_requested`.
This will cascade to related resources like
`network-feature-configs`.

> Body parameter

```json
{
  "decommission_at": "1970-01-01"
}
```

<h3 id="networkserviceconfigsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[CancellationRequest](#schemacancellationrequest)|false|Service Cancellation Request|
|» decommission_at|body|string(date)|false|An optional date for scheduling the cancellation<br>and service decommissioning.|

> Example responses

> 202 Response

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Requested cancellation date outside of notice period.",
  "type": "https://errors.ix-api.net/v2/cancellation-policy-error.html",
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkserviceconfigsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Service Config|[NetworkServiceConfig](#schemanetworkserviceconfig)|
|400|Bad Request|CancellationPolicyError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkserviceconfigsdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|
|charged_until|string(date)|false|none|The date until the service is payed for.<br>Typically `≥ decommission_at`.|
|decommission_at|string(date)|false|none|This field denotes the first possible cancellation<br>date of the service.<br><br>See the service `cancellation-policy` for details.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/cancellation-policy-error.html|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_configs_partial_update

<a id="opIdnetwork_service_configs_partial_update"></a>

> Code samples

```bash
curl https://example.com/network-service-configs/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asns": [
      0
    ],
    "billing_account": "string",
    "capacity": 1,
    "connection": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "listed": true,
    "macs": [
      "string"
    ],
    "managing_account": "238189294",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "type": "exchange_lan",
    "vlan_config": {
      "vlan": 23,
      "vlan_ethertype": "0x8100",
      "vlan_type": "dot1q"
    }
  }'
```

`PATCH /network-service-configs/{id}`

Update parts of an exisiting `network-service-config`.

> Body parameter

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

<h3 id="networkserviceconfigspartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkServiceConfigUpdatePartial](#schemanetworkserviceconfigupdatepartial)|false|Polymorphic Network Service Config|
|» *oneOf*|body|[ExchangeLanNetworkServiceConfigUpdatePartial](#schemaexchangelannetworkserviceconfigupdatepartial)|false|Exchange Lan Network Service Config Update|
|» *oneOf*|body|[P2PNetworkServiceConfigUpdatePartial](#schemap2pnetworkserviceconfigupdatepartial)|false|P2P Network Service Config Update|
|» *oneOf*|body|[P2MPNetworkServiceConfigRequestPartial](#schemap2mpnetworkserviceconfigrequestpartial)|false|P2MP Network Service Config Request|
|» *oneOf*|body|[MP2MPNetworkServiceConfigRequestPartial](#schemamp2mpnetworkserviceconfigrequestpartial)|false|MP2MP Network Service Config Request|
|» *oneOf*|body|[CloudNetworkServiceConfigUpdatePartial](#schemacloudnetworkserviceconfigupdatepartial)|false|Cloud Network Service Config Update|

> Example responses

> 202 Response

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkserviceconfigspartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Service Config|[NetworkServiceConfig](#schemanetworkserviceconfig)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkserviceconfigspartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_config_cancellation_policy_read

<a id="opIdnetwork_service_config_cancellation_policy_read"></a>

> Code samples

```bash
curl https://example.com/network-service-configs/string/cancellation-policy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-service-configs/{id}/cancellation-policy`

The cancellation-policy can be queried to answer
the questions:

If I cancel my subscription, *when will it be technically
decommissioned*?
If I cancel my subscription, *until what date will I be charged*?

When the query parameter `decommision_at` is not provided
it will provide the first possible cancellation date
and charge period if cancelled at above date.

The granularity of the date field is a day, the start and end
of which are to be interpreted by the IXP (some may use UTC,
some may use their local time zone).

<h3 id="networkserviceconfigcancellationpolicyread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|decommission_at|query|string|false|By providing a date in the format `YYYY-MM-DD` you can<br>query the policy what would happen if you request a<br>decommissioning on this date.|

> Example responses

> 200 Response

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkserviceconfigcancellationpolicyread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancellation Policy|[CancellationPolicy](#schemacancellationpolicy)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkserviceconfigcancellationpolicyread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-network-services">network-services</h1>

A `NetworkService` represents an instance of a `ProductOffering`.

The exchange lan is a special case in which the `NetworkService` is
managed by the exchange.

All other `NetworkService`s are created and managed by an `Account`.

## network_services_list

<a id="opIdnetwork_services_list"></a>

> Code samples

```bash
curl https://example.com/network-services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-services`

List available `NetworkService`s.

<h3 id="networkserviceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|managing_account|query|string|false|Filter by managing_account|
|consuming_account|query|string|false|Filter by consuming_account|
|external_ref|query|string|false|Filter by external_ref|
|type|query|string|false|Filter by type|
|pop|query|string|false|Filter by pop|
|product_offering|query|string|false|Filter by product_offering|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|exchange_lan|
|type|p2p_vc|
|type|p2mp_vc|
|type|mp2mp_vc|
|type|cloud_vc|

> Example responses

> 200 Response

```json
[
  {
    "consuming_account": "2381982",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "ixfdb_ixid": 0,
    "managing_account": "238189294",
    "metro_area_network": "man:293225:LON2",
    "name": "string",
    "network_features": [
      "string"
    ],
    "nsc_required_contact_roles": [
      "string"
    ],
    "peeringdb_ixid": 0,
    "product_offering": "string",
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ],
    "subnet_v4": "23.142.52.0/21",
    "subnet_v6": "2001:23:42::/48",
    "type": "exchange_lan"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkserviceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Network Services|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkserviceslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkService](#schemanetworkservice)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_services_create

<a id="opIdnetwork_services_create"></a>

> Code samples

```bash
curl https://example.com/network-services \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "joining_member_account": "231829",
    "managing_account": "238189294",
    "product_offering": "string",
    "purchase_order": "Project: DC Moon",
    "type": "p2p_vc"
  }'
```

`POST /network-services`

Create a new network service

> Body parameter

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

<h3 id="networkservicescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NetworkServiceRequest](#schemanetworkservicerequest)|false|Polymorphic Network Service Request|
|» *oneOf*|body|[P2PNetworkServiceRequest](#schemap2pnetworkservicerequest)|false|none|
|» *oneOf*|body|[P2MPNetworkServiceRequest](#schemap2mpnetworkservicerequest)|false|none|
|» *oneOf*|body|[MP2MPNetworkServiceRequest](#schemamp2mpnetworkservicerequest)|false|none|
|» *oneOf*|body|[CloudNetworkServiceRequest](#schemacloudnetworkservicerequest)|false|none|

> Example responses

> 201 Response

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="networkservicescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Polymorphic Network Services|[NetworkService](#schemanetworkservice)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="networkservicescreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_services_read

<a id="opIdnetwork_services_read"></a>

> Code samples

```bash
curl https://example.com/network-services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-services/{id}`

Get a specific `network-service` by id.

<h3 id="networkservicesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Network Services|[NetworkService](#schemanetworkservice)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicesread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_services_update

<a id="opIdnetwork_services_update"></a>

> Code samples

```bash
curl https://example.com/network-services/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "joining_member_account": "231829",
    "managing_account": "238189294",
    "product_offering": "string",
    "purchase_order": "Project: DC Moon",
    "type": "p2p_vc"
  }'
```

`PUT /network-services/{id}`

Update a network service

> Body parameter

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

<h3 id="networkservicesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkServiceRequest](#schemanetworkservicerequest)|false|Polymorphic Network Service Request|
|» *oneOf*|body|[P2PNetworkServiceRequest](#schemap2pnetworkservicerequest)|false|none|
|» *oneOf*|body|[P2MPNetworkServiceRequest](#schemap2mpnetworkservicerequest)|false|none|
|» *oneOf*|body|[MP2MPNetworkServiceRequest](#schemamp2mpnetworkservicerequest)|false|none|
|» *oneOf*|body|[CloudNetworkServiceRequest](#schemacloudnetworkservicerequest)|false|none|

> Example responses

> 202 Response

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Services|[NetworkService](#schemanetworkservice)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicesupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_services_destroy

<a id="opIdnetwork_services_destroy"></a>

> Code samples

```bash
curl https://example.com/network-services/string \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "decommission_at": "1970-01-01"
  }'
```

`DELETE /network-services/{id}`

Request decomissioning of the network service.

The network service will enter the state of
`decommission_requested`. The request will
cascade to related network service and feature
configs.

An *optional request body* can be provided to request
a specific service termination date.

If no date is given in the request body, it is assumed to
be the earliest possible date.

Possible values for `decommission_at` can be queried
through the `network_service_cancellation_policy_read`
operation.

The response will contain the dates on which the
changes will be effected.

> Body parameter

```json
{
  "decommission_at": "1970-01-01"
}
```

<h3 id="networkservicesdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[CancellationRequest](#schemacancellationrequest)|false|Service Cancellation Request|
|» decommission_at|body|string(date)|false|An optional date for scheduling the cancellation<br>and service decommissioning.|

> Example responses

> 202 Response

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Requested cancellation date outside of notice period.",
  "type": "https://errors.ix-api.net/v2/cancellation-policy-error.html",
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicesdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Services|[NetworkService](#schemanetworkservice)|
|400|Bad Request|CancellationPolicyError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicesdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|
|charged_until|string(date)|false|none|The date until the service is payed for.<br>Typically `≥ decommission_at`.|
|decommission_at|string(date)|false|none|This field denotes the first possible cancellation<br>date of the service.<br><br>See the service `cancellation-policy` for details.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/cancellation-policy-error.html|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_services_partial_update

<a id="opIdnetwork_services_partial_update"></a>

> Code samples

```bash
curl https://example.com/network-services/string \
  -X PATCH \
  -H 'Content-Type: application/merge-patch+json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billing_account": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "external_ref": "IX:Service:23042",
    "joining_member_account": "231829",
    "managing_account": "238189294",
    "product_offering": "string",
    "purchase_order": "Project: DC Moon",
    "type": "p2p_vc"
  }'
```

`PATCH /network-services/{id}`

Partially update a network service

> Body parameter

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

<h3 id="networkservicespartialupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkServiceRequestPartial](#schemanetworkservicerequestpartial)|false|Polymorphic Network Service Request|
|» *oneOf*|body|[P2PNetworkServiceRequestPartial](#schemap2pnetworkservicerequestpartial)|false|P2P Network Service Request|
|» *oneOf*|body|[P2MPNetworkServiceRequestPartial](#schemap2mpnetworkservicerequestpartial)|false|P2MP Network Service Request|
|» *oneOf*|body|[MP2MPNetworkServiceRequestPartial](#schemamp2mpnetworkservicerequestpartial)|false|MP2MP Network Service Request|
|» *oneOf*|body|[CloudNetworkServiceRequestPartial](#schemacloudnetworkservicerequestpartial)|false|Cloud Network Service Request|

> Example responses

> 202 Response

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicespartialupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Polymorphic Network Services|[NetworkService](#schemanetworkservice)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicespartialupdate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_cancellation_policy_read

<a id="opIdnetwork_service_cancellation_policy_read"></a>

> Code samples

```bash
curl https://example.com/network-services/string/cancellation-policy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-services/{id}/cancellation-policy`

The cancellation-policy can be queried to answer
the questions:

If I cancel my service, *when will it be technically
decommissioned*?
If I cancel my service, *until what date will I be charged*?

When the query parameter `decommision_at` is not provided
it will provide the first possible cancellation date
and charge period if cancelled at above date.

The granularity of the date field is a day, the start and end
of which are to be interpreted by the IXP (some may use UTC,
some may use their local time zone).

<h3 id="networkservicecancellationpolicyread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|decommission_at|query|string|false|By providing a date in the format `YYYY-MM-DD` you can<br>query the policy what would happen if you request a<br>decommissioning on this date.|

> Example responses

> 200 Response

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicecancellationpolicyread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancellation Policy|[CancellationPolicy](#schemacancellationpolicy)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicecancellationpolicyread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_change_request_read

<a id="opIdnetwork_service_change_request_read"></a>

> Code samples

```bash
curl https://example.com/network-services/string/change-request \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network-services/{id}/change-request`

Get the change request.

<h3 id="networkservicechangerequestread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 202 Response

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicechangerequestread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|NetworkServiceChangeRequest|[NetworkServiceChangeRequest](#schemanetworkservicechangerequest)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicechangerequestread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network-service-change-request_create

<a id="opIdnetwork-service-change-request_create"></a>

> Code samples

```bash
curl https://example.com/network-services/string/change-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "capacity": 1,
    "product_offering": "string"
  }'
```

`POST /network-services/{id}/change-request`

Request a change to the network service.

A participant in a network service of type
`p2p_vc` can issue a change request, expressing a
desired change in the capacity.
The change is accepted when all sides have configured
the network service configs with the new bandwidth.
These changes can sometimes require a change of the
product offering.
The product offering may only differ in regards to
bandwidth.

The network service will change it's state from `production`
into `production_change_pending`.

Only one change request may be issued at a time.

> Body parameter

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

<h3 id="network-service-change-requestcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|body|body|[NetworkServiceChangeRequest](#schemanetworkservicechangerequest)|false|NetworkServiceChangeRequest|
|» capacity|body|integer \| null|false|The desired capacity of the service in Mbps.<br><br>Must be within the range of `bandwidth_min` and<br>`bandwidth_max` of the `ProductOffering`.<br><br>When `null` the maximum capacity wil be used.|
|» product_offering|body|string|true|Migrate to a diffrent product offering. Please note, that<br>the offering only may differ in bandwidth.|

> Example responses

> 202 Response

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="network-service-change-requestcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|NetworkServiceChangeRequest|[NetworkServiceChangeRequest](#schemanetworkservicechangerequest)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="network-service-change-requestcreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## network_service_change_request_destroy

<a id="opIdnetwork_service_change_request_destroy"></a>

> Code samples

```bash
curl https://example.com/network-services/string/change-request \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /network-services/{id}/change-request`

Retract or reject a change to the network service.

<h3 id="networkservicechangerequestdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 202 Response

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="networkservicechangerequestdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|NetworkServiceChangeRequest|[NetworkServiceChangeRequest](#schemanetworkservicechangerequest)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="networkservicechangerequestdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-pops">pops</h1>

A `PointOfPresence` is a technical installation within a Facility
which is connected to a single `MetroAreaNetwork`. A single
`MetroAreaNetwork`, however, may have multiple `PointOfPresence`s.

## pops_list

<a id="opIdpops_list"></a>

> Code samples

```bash
curl https://example.com/pops \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pops`

List all PoPs

<h3 id="popslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|facility|query|string|false|Filter by facility|
|metro_area_network|query|string|false|Filter by metro_area_network|
|capability_media_type|query|string|false|Filter by capability_media_type|
|capability_speed|query|integer|false|Filter by capability_speed|
|capability_speed__lt|query|integer|false|Filter by capability_speed__lt|
|capability_speed__lte|query|integer|false|Filter by capability_speed__lte|
|capability_speed__gt|query|integer|false|Filter by capability_speed__gt|
|capability_speed__gte|query|integer|false|Filter by capability_speed__gte|

> Example responses

> 200 Response

```json
[
  {
    "devices": [
      "string"
    ],
    "facility": "string",
    "id": "string",
    "metro_area_network": "string",
    "name": "string"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="popslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Point Of Presence|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="popslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PointOfPresence](#schemapointofpresence)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## pops_read

<a id="opIdpops_read"></a>

> Code samples

```bash
curl https://example.com/pops/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pops/{id}`

Get a single point of presence

<h3 id="popsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "devices": [
    "string"
  ],
  "facility": "string",
  "id": "string",
  "metro_area_network": "string",
  "name": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="popsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Point Of Presence|[PointOfPresence](#schemapointofpresence)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="popsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-ports">ports</h1>

A `Port` is the point at which subscriber and
IXP networks meet. A port is always associated with
a `device` and `pop`, has a `speed` and a `media_type`.

## ports_list

<a id="opIdports_list"></a>

> Code samples

```bash
curl https://example.com/ports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ports`

List all ports.

<h3 id="portslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|state|query|string|false|Filter by state|
|state__is_not|query|string|false|Filter by state__is_not|
|media_type|query|string|false|Filter by media_type|
|pop|query|string|false|Filter by pop|
|name|query|string|false|Filter by name|
|external_ref|query|string|false|Filter by external_ref|
|device|query|string|false|Filter by device|
|speed|query|string|false|Filter by speed|
|connection|query|string|false|Filter by connection|

> Example responses

> 200 Response

```json
[
  {
    "billing_account": "string",
    "connection": "string",
    "consuming_account": "2381982",
    "contract_ref": "contract:31824",
    "device": "device:29139871",
    "external_ref": "IX:Service:23042",
    "id": "string",
    "managing_account": "238189294",
    "media_type": "10GBASE-LR",
    "name": "",
    "pop": "pop:2913",
    "purchase_order": "Project: DC Moon",
    "role_assignments": [
      "c-impl:123",
      "c-noc:331"
    ],
    "speed": 0,
    "state": "requested",
    "status": [
      {
        "attrs": {},
        "message": "string",
        "severity": 2,
        "tag": "string",
        "timestamp": "1970-01-01T00:00:00Z"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="portslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Port|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="portslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Port](#schemaport)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## ports_read

<a id="opIdports_read"></a>

> Code samples

```bash
curl https://example.com/ports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ports/{id}`

Retrieve a port.

<h3 id="portsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "device": "device:29139871",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "media_type": "10GBASE-LR",
  "name": "",
  "pop": "pop:2913",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="portsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Port|[Port](#schemaport)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="portsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-product-offerings">product-offerings</h1>

A `ProductOffering` is an offer made by an exchange
to be consumed by a client.

## product_offerings_list

<a id="opIdproduct_offerings_list"></a>

> Code samples

```bash
curl https://example.com/product-offerings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /product-offerings`

List all (filtered) products-offerings available on the platform

<h3 id="productofferingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|type|query|string|false|Filter by type|
|name|query|string|false|Filter by name|
|handover_metro_area|query|string|false|Filter by handover_metro_area|
|handover_metro_area_network|query|string|false|Filter by handover_metro_area_network|
|service_metro_area|query|string|false|Filter by service_metro_area|
|service_metro_area_network|query|string|false|Filter by service_metro_area_network|
|service_provider|query|string|false|Filter by service_provider|
|downgrade_allowed|query|string|false|Filter by downgrade_allowed|
|upgrade_allowed|query|string|false|Filter by upgrade_allowed|
|bandwidth|query|integer|false|Find product offerings where bandwidth is<br>within the range of `bandwidth_min` and `bandwidth_max`.|
|physical_port_speed|query|integer|false|Filter by physical_port_speed|
|service_provider_region|query|string|false|Filter by service_provider_region|
|service_provider_pop|query|string|false|Filter by service_provider_pop|
|delivery_method|query|string|false|Filter by delivery_method|
|cloud_key|query|string|false|For product offerings of type `cloud_vc`, if the<br>`service_provider_workflow` is `provider_first` the<br>`cloud_key` will be used for filtering the relevant<br>offerings.|
|fields|query|string|false|Returned objects only have properties which are<br>present in the list of fields.<br>The required `type` property is *implicitly* included.<br>The results are *deduplicated*.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|exchange_lan|
|type|p2p_vc|
|type|mp2mp_vc|
|type|p2mp_vc|
|type|cloud_vc|
|downgrade_allowed|true|
|downgrade_allowed|true|
|upgrade_allowed|true|
|upgrade_allowed|false|
|delivery_method|dedicated|
|delivery_method|shared|

> Example responses

> 200 Response

```json
[
  {
    "bandwidth_max": 0,
    "bandwidth_min": 0,
    "display_name": "string",
    "downgrade_allowed": true,
    "exchange_lan_network_service": "string",
    "handover_metro_area": "met:29381993:NYC",
    "handover_metro_area_network": "191239810",
    "id": "string",
    "name": "string",
    "physical_port_speed": 0,
    "provider_vlans": "single",
    "resource_type": "network_service",
    "service_metro_area": "met:213913485:LON",
    "service_metro_area_network": "9123843",
    "service_provider": "AWS",
    "type": "exchange_lan",
    "upgrade_allowed": true
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="productofferingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: Polymorphic Product Offering|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="productofferingslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductOfferingPartial](#schemaproductofferingpartial)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## product_offerings_read

<a id="opIdproduct_offerings_read"></a>

> Code samples

```bash
curl https://example.com/product-offerings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /product-offerings/{id}`

Get a single products-offering by id.

<h3 id="productofferingsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|

> Example responses

> 200 Response

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "exchange_lan_network_service": "string",
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "exchange_lan",
  "upgrade_allowed": true
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="productofferingsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polymorphic Product Offering|[ProductOffering](#schemaproductoffering)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="productofferingsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-role-assignments">role-assignments</h1>

A `Contact` can be assigned to many `Roles`.

## role_assignments_list

<a id="opIdrole_assignments_list"></a>

> Code samples

```bash
curl https://example.com/role-assignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /role-assignments`

List all role assignments for a contact.

<h3 id="roleassignmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|contact|query|string|false|Filter by contact|
|role|query|string|false|Filter by role|

> Example responses

> 200 Response

```json
[
  {
    "contact": "contact:42b",
    "id": "string",
    "role": "role:23"
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="roleassignmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: A role assignment for a contact|Inline|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="roleassignmentslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleAssignment](#schemaroleassignment)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## role_assignments_create

<a id="opIdrole_assignments_create"></a>

> Code samples

```bash
curl https://example.com/role-assignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contact": "contact:42b",
    "role": "role:23"
  }'
```

`POST /role-assignments`

Assign a `Role` to a `Contact`.

The contact needs to have all fields filled, which the
role requires. If this is not the case a `400`
`UnableToFulfill` will be returned.

> Body parameter

```json
{
  "contact": "contact:42b",
  "role": "role:23"
}
```

<h3 id="roleassignmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RoleAssignmentRequest](#schemaroleassignmentrequest)|false|A role assignment request|
|» contact|body|string|true|The `id` of a contact the role is assigned to.<br>|
|» role|body|string|true|The `id` of a role the contact is assigned to.<br>|

> Example responses

> 201 Response

```json
{
  "contact": "contact:42b",
  "id": "string",
  "role": "role:23"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Some fields did not validate.",
  "type": "https://errors.ix-api.net/v2/validation-error.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

<h3 id="roleassignmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A role assignment for a contact|[RoleAssignment](#schemaroleassignment)|
|400|Bad Request|ValidationError|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|

<h3 id="roleassignmentscreate-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/validation-error.html|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## role_assignments_read

<a id="opIdrole_assignments_read"></a>

> Code samples

```bash
curl https://example.com/role-assignments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /role-assignments/{assignment_id}`

Get a role assignment for a contact.

<h3 id="roleassignmentsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assignment_id|path|string|true|Get by assignment_id|

> Example responses

> 200 Response

```json
{
  "contact": "contact:42b",
  "id": "string",
  "role": "role:23"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="roleassignmentsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A role assignment for a contact|[RoleAssignment](#schemaroleassignment)|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="roleassignmentsread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## role_assignments_destroy

<a id="opIdrole_assignments_destroy"></a>

> Code samples

```bash
curl https://example.com/role-assignments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /role-assignments/{assignment_id}`

Remove a role assignment from a contact.

If the contact is still in use with a given role required,
this will yield an `UnableToFulfill` error.

<h3 id="roleassignmentsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assignment_id|path|string|true|Get by assignment_id|

> Example responses

> 200 Response

```json
{
  "contact": "contact:42b",
  "id": "string",
  "role": "role:23"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 400,
  "title": "Unable to fulfill your request.",
  "type": "https://errors.ix-api.net/v2/unable-to-fulfill.html"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 403,
  "title": "You do not have permission to perform this action.",
  "type": "https://errors.ix-api.net/v2/permission-denied.html"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 404,
  "title": "Not found.",
  "type": "https://errors.ix-api.net/v2/not-found.html"
}
```

<h3 id="roleassignmentsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A role assignment for a contact|[RoleAssignment](#schemaroleassignment)|
|400|Bad Request|UnableToFulfill|Inline|
|401|Unauthorized|Authentication|Inline|
|403|Forbidden|PermissionDenied|Inline|
|404|Not Found|NotFound|Inline|

<h3 id="roleassignmentsdestroy-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/unable-to-fulfill.html|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/permission-denied.html|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/not-found.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="ix-api-roles">roles</h1>

A `Role` enables a `Contact` to act for a specific purpose.

Well-defined roles are: `implementation`, `noc` and `peering`.
An implementer may choose to support them or not or may add
additional ones.

## roles_list

<a id="opIdroles_list"></a>

> Code samples

```bash
curl https://example.com/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /roles`

List all roles available.

<h3 id="roleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Filter by id|
|name|query|string|false|Filter by name|
|contact|query|string|false|Filter by contact|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "noc",
    "required_fields": [
      "name",
      "email"
    ]
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

<h3 id="roleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of: A role for a contact|Inline|
|401|Unauthorized|Authentication|Inline|

<h3 id="roleslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Role](#schemarole)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## roles_read

<a id="opIdroles_read"></a>

> Code samples

```bash
curl https://example.com/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /roles/{id}`

Get a single `Role`.

<h3 id="rolesread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Get by id|
|id|query|[string]|false|Filter by id|
|name|query|string|false|Filter by name|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "string",
  "status": 401,
  "title": "Authentication Credentials Invalid",
  "type": "https://errors.ix-api.net/v2/authentication-error.html"
}
```

<h3 id="rolesread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A role for a contact|[Role](#schemarole)|
|401|Unauthorized|Authentication|Inline|

<h3 id="rolesread-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|
|status|object|false|none|none|
|title|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|https://errors.ix-api.net/v2/authentication-error.html|
|type|https://errors.ix-api.net/v2/signature-expired.html|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|true|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|true|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_AccountPartial">AccountPartial</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpartial"></a>
<a id="schema_AccountPartial"></a>
<a id="tocSaccountpartial"></a>
<a id="tocsaccountpartial"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc.",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|false|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|false|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_AccountRequest">AccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountrequest"></a>
<a id="schema_AccountRequest"></a>
<a id="tocSaccountrequest"></a>
<a id="tocsaccountrequest"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|false|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|true|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

<h2 id="tocS_AccountRequestPartial">AccountRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaaccountrequestpartial"></a>
<a id="schema_AccountRequestPartial"></a>
<a id="tocSaccountrequestpartial"></a>
<a id="tocsaccountrequestpartial"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

Account Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|false|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|false|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

<h2 id="tocS_AccountUpdate">AccountUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdate"></a>
<a id="schema_AccountUpdate"></a>
<a id="tocSaccountupdate"></a>
<a id="tocsaccountupdate"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|true|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|true|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

<h2 id="tocS_AccountUpdatePartial">AccountUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdatepartial"></a>
<a id="schema_AccountUpdatePartial"></a>
<a id="tocSaccountupdatepartial"></a>
<a id="tocsaccountupdatepartial"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "billing_information": {
    "address": {
      "country": "US",
      "locality": "Mountain View",
      "post_office_box_number": "2335232",
      "postal_code": "9409",
      "region": "CA",
      "street_address": "1600 Amphitheatre Pkwy."
    },
    "name": "Moonoc Network Services LLS.",
    "vat_number": "UK2300000042"
  },
  "discoverable": false,
  "external_ref": "IX:Service:23042",
  "legal_name": "Moon Network Services LLS.",
  "managing_account": "IX:Account:231",
  "metro_area_network_presence": [
    "14021",
    "12939"
  ],
  "name": "Moonpeer Inc."
}
```

Account Update Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|billing_information|[BillingInformation](#schemabillinginformation)|false|none|none|
|discoverable|boolean|false|none|The account will be included for all members of the<br>ix in the list of accounts.<br><br>Only `id`, `name` and `present_in_metro_area_networks`<br>are provided to other members.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|legal_name|string \| null|false|none|Legal name of the organisation.<br>Only required when it's different from the account name.<br>|
|managing_account|string \| null|false|none|The `id` of a managing account. Can be used for creating<br>a customer hierachy.<br>|
|metro_area_network_presence|[string]|false|none|Informal list of `MetroAreaNetwork` ids, indicating the<br>presence to other accounts.<br>The list is maintained by the account and can be empty.<br>|
|name|string|false|none|Name of the account, how it gets represented<br>in e.g. a "customers list".<br>|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "country": "US",
  "locality": "Mountain View",
  "post_office_box_number": "2335232",
  "postal_code": "9409",
  "region": "CA",
  "street_address": "1600 Amphitheatre Pkwy."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|ISO 3166-1 alpha-2 country code, for example DE|
|locality|string|true|none|The locality/city. For example, Mountain View.|
|post_office_box_number|string \| null|false|none|The post office box number for PO box addresses.|
|postal_code|string|true|none|A postal code. For example, 9404|
|region|string \| null|false|none|The region. For example, CA|
|street_address|string|true|none|The street address. For example, 1600 Amphitheatre Pkwy.|

<h2 id="tocS_AddressPartial">AddressPartial</h2>
<!-- backwards compatibility -->
<a id="schemaaddresspartial"></a>
<a id="schema_AddressPartial"></a>
<a id="tocSaddresspartial"></a>
<a id="tocsaddresspartial"></a>

```json
{
  "country": "US",
  "locality": "Mountain View",
  "post_office_box_number": "2335232",
  "postal_code": "9409",
  "region": "CA",
  "street_address": "1600 Amphitheatre Pkwy."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|ISO 3166-1 alpha-2 country code, for example DE|
|locality|string|false|none|The locality/city. For example, Mountain View.|
|post_office_box_number|string \| null|false|none|The post office box number for PO box addresses.|
|postal_code|string|false|none|A postal code. For example, 9404|
|region|string \| null|false|none|The region. For example, CA|
|street_address|string|false|none|The street address. For example, 1600 Amphitheatre Pkwy.|

<h2 id="tocS_AllowMemberJoiningRule">AllowMemberJoiningRule</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningrule"></a>
<a id="schema_AllowMemberJoiningRule"></a>
<a id="tocSallowmemberjoiningrule"></a>
<a id="tocsallowmemberjoiningrule"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_AllowMemberJoiningRulePartial">AllowMemberJoiningRulePartial</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningrulepartial"></a>
<a id="schema_AllowMemberJoiningRulePartial"></a>
<a id="tocSallowmemberjoiningrulepartial"></a>
<a id="tocsallowmemberjoiningrulepartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

A rule for members joining a private vlan

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_AllowMemberJoiningRuleRequest">AllowMemberJoiningRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningrulerequest"></a>
<a id="schema_AllowMemberJoiningRuleRequest"></a>
<a id="tocSallowmemberjoiningrulerequest"></a>
<a id="tocsallowmemberjoiningrulerequest"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_AllowMemberJoiningRuleRequestPartial">AllowMemberJoiningRuleRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningrulerequestpartial"></a>
<a id="schema_AllowMemberJoiningRuleRequestPartial"></a>
<a id="tocSallowmemberjoiningrulerequestpartial"></a>
<a id="tocsallowmemberjoiningrulerequestpartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

A new vlan member joining rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_AllowMemberJoiningRuleUpdate">AllowMemberJoiningRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningruleupdate"></a>
<a id="schema_AllowMemberJoiningRuleUpdate"></a>
<a id="tocSallowmemberjoiningruleupdate"></a>
<a id="tocsallowmemberjoiningruleupdate"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|type|string|true|none|none|

<h2 id="tocS_AllowMemberJoiningRuleUpdatePartial">AllowMemberJoiningRuleUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaallowmemberjoiningruleupdatepartial"></a>
<a id="schema_AllowMemberJoiningRuleUpdatePartial"></a>
<a id="tocSallowmemberjoiningruleupdatepartial"></a>
<a id="tocsallowmemberjoiningruleupdatepartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

A vlan member joining rule update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer \| null|false|none|An optional rate limit which has precedence over<br>the capacity set in the network service config.|
|capacity_min|integer \| null|false|none|Require an optional minimum capacity to join<br>the network service.|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|type|string|true|none|none|

<h2 id="tocS_AuthToken">AuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthtoken"></a>
<a id="schema_AuthToken"></a>
<a id="tocSauthtoken"></a>
<a id="tocsauthtoken"></a>

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|refresh_token|string|true|none|none|

<h2 id="tocS_AuthTokenPartial">AuthTokenPartial</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenpartial"></a>
<a id="schema_AuthTokenPartial"></a>
<a id="tocSauthtokenpartial"></a>
<a id="tocsauthtokenpartial"></a>

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
```

AuthToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|none|
|refresh_token|string|false|none|none|

<h2 id="tocS_AuthTokenRequest">AuthTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenrequest"></a>
<a id="schema_AuthTokenRequest"></a>
<a id="tocSauthtokenrequest"></a>
<a id="tocsauthtokenrequest"></a>

```json
{
  "api_key": "stringstringstri",
  "api_secret": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|none|
|api_secret|string|true|none|none|

<h2 id="tocS_AuthTokenRequestPartial">AuthTokenRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenrequestpartial"></a>
<a id="schema_AuthTokenRequestPartial"></a>
<a id="tocSauthtokenrequestpartial"></a>
<a id="tocsauthtokenrequestpartial"></a>

```json
{
  "api_key": "stringstringstri",
  "api_secret": "stringstringstringstringstringstringstringstringstringstringstringstringstringstringst"
}
```

AuthTokenRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|false|none|none|
|api_secret|string|false|none|none|

<h2 id="tocS_BillingInformation">BillingInformation</h2>
<!-- backwards compatibility -->
<a id="schemabillinginformation"></a>
<a id="schema_BillingInformation"></a>
<a id="tocSbillinginformation"></a>
<a id="tocsbillinginformation"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "name": "Moonoc Network Services LLS.",
  "vat_number": "UK2300000042"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|none|
|name|string|true|none|Name of the organisation receiving invoices.<br>|
|vat_number|string \| null|false|none|Value-added tax number, required for<br>european reverse charge system.<br>|

<h2 id="tocS_BillingInformationPartial">BillingInformationPartial</h2>
<!-- backwards compatibility -->
<a id="schemabillinginformationpartial"></a>
<a id="schema_BillingInformationPartial"></a>
<a id="tocSbillinginformationpartial"></a>
<a id="tocsbillinginformationpartial"></a>

```json
{
  "address": {
    "country": "US",
    "locality": "Mountain View",
    "post_office_box_number": "2335232",
    "postal_code": "9409",
    "region": "CA",
    "street_address": "1600 Amphitheatre Pkwy."
  },
  "name": "Moonoc Network Services LLS.",
  "vat_number": "UK2300000042"
}
```

Optional information required for issuing invoices.
Only accounts with `billing_information` present can be used
as a `billing_account`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|name|string|false|none|Name of the organisation receiving invoices.<br>|
|vat_number|string \| null|false|none|Value-added tax number, required for<br>european reverse charge system.<br>|

<h2 id="tocS_Cancelable">Cancelable</h2>
<!-- backwards compatibility -->
<a id="schemacancelable"></a>
<a id="schema_Cancelable"></a>
<a id="tocScancelable"></a>
<a id="tocscancelable"></a>

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|

<h2 id="tocS_CancelablePartial">CancelablePartial</h2>
<!-- backwards compatibility -->
<a id="schemacancelablepartial"></a>
<a id="schema_CancelablePartial"></a>
<a id="tocScancelablepartial"></a>
<a id="tocscancelablepartial"></a>

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

Service or config can be canceled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|

<h2 id="tocS_CancellationPolicy">CancellationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpolicy"></a>
<a id="schema_CancellationPolicy"></a>
<a id="tocScancellationpolicy"></a>
<a id="tocscancellationpolicy"></a>

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charged_until|string(date)|true|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.|
|decommission_at|string(date)|true|none|This field denotes the first possible cancellation<br>date of the service.|

<h2 id="tocS_CancellationPolicyPartial">CancellationPolicyPartial</h2>
<!-- backwards compatibility -->
<a id="schemacancellationpolicypartial"></a>
<a id="schema_CancellationPolicyPartial"></a>
<a id="tocScancellationpolicypartial"></a>
<a id="tocscancellationpolicypartial"></a>

```json
{
  "charged_until": "1970-01-01",
  "decommission_at": "1970-01-01"
}
```

Cancellation Policy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.|
|decommission_at|string(date)|false|none|This field denotes the first possible cancellation<br>date of the service.|

<h2 id="tocS_CancellationRequest">CancellationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancellationrequest"></a>
<a id="schema_CancellationRequest"></a>
<a id="tocScancellationrequest"></a>
<a id="tocscancellationrequest"></a>

```json
{
  "decommission_at": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decommission_at|string(date)|false|none|An optional date for scheduling the cancellation<br>and service decommissioning.|

<h2 id="tocS_CancellationRequestPartial">CancellationRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemacancellationrequestpartial"></a>
<a id="schema_CancellationRequestPartial"></a>
<a id="tocScancellationrequestpartial"></a>
<a id="tocscancellationrequestpartial"></a>

```json
{
  "decommission_at": "1970-01-01"
}
```

Service Cancellation Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decommission_at|string(date)|false|none|An optional date for scheduling the cancellation<br>and service decommissioning.|

<h2 id="tocS_CloudNetworkProductOffering">CloudNetworkProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkproductoffering"></a>
<a id="schema_CloudNetworkProductOffering"></a>
<a id="tocScloudnetworkproductoffering"></a>
<a id="tocscloudnetworkproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "delivery_method": "dedicated",
  "display_name": "string",
  "diversity": 1,
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "service_provider_pop": "INX6",
  "service_provider_region": "eu-central-1",
  "service_provider_workflow": "exchange_first",
  "type": "cloud_vc",
  "upgrade_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|true|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|true|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|delivery_method|string|true|none|The exchange delivers the service over a `shared` or `dedicated` NNI.|
|display_name|string|true|none|none|
|diversity|integer|true|none|The service can be delivered over multiple handovers from<br>the exchange to the `service_provider`.<br>The `diversity` denotes the number of handovers between the<br>exchange and the service provider. A value of two signals a<br>redundant service.<br><br>Only one network service configuration for each `handover` and<br>`cloud_vlan` can be created.|
|downgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|true|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|true|none|none|
|name|string|true|none|Name of the product|
|physical_port_speed|integer \| null|true|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|true|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|true|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|true|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|true|none|The name of the provider providing the service.<br>|
|service_provider_pop|string \| null|true|none|The datacenter description of the partner NNI to the<br>service provider.<br>|
|service_provider_region|string \| null|true|none|The service provider offers the network service for a<br>specific region.<br>|
|service_provider_workflow|string|true|none|When the workflow is `provider_first` the subscriber creates<br>a circuit with the cloud provider and provides a `cloud_key` for filtering<br>the product-offerings.<br><br>If the workflow is `exchange_first` the IX will create<br>the cloud circuit on the provider side.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_method|dedicated|
|delivery_method|shared|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|
|service_provider_workflow|exchange_first|
|service_provider_workflow|provider_first|

<h2 id="tocS_CloudNetworkProductOfferingPartial">CloudNetworkProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkproductofferingpartial"></a>
<a id="schema_CloudNetworkProductOfferingPartial"></a>
<a id="tocScloudnetworkproductofferingpartial"></a>
<a id="tocscloudnetworkproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "delivery_method": "dedicated",
  "display_name": "string",
  "diversity": 1,
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "service_provider_pop": "INX6",
  "service_provider_region": "eu-central-1",
  "service_provider_workflow": "exchange_first",
  "type": "cloud_vc",
  "upgrade_allowed": true
}
```

Cloud Network Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|false|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|false|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|delivery_method|string|false|none|The exchange delivers the service over a `shared` or `dedicated` NNI.|
|display_name|string|false|none|none|
|diversity|integer|false|none|The service can be delivered over multiple handovers from<br>the exchange to the `service_provider`.<br>The `diversity` denotes the number of handovers between the<br>exchange and the service provider. A value of two signals a<br>redundant service.<br><br>Only one network service configuration for each `handover` and<br>`cloud_vlan` can be created.|
|downgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|false|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|false|none|none|
|name|string|false|none|Name of the product|
|physical_port_speed|integer \| null|false|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|false|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|false|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|false|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|false|none|The name of the provider providing the service.<br>|
|service_provider_pop|string \| null|false|none|The datacenter description of the partner NNI to the<br>service provider.<br>|
|service_provider_region|string \| null|false|none|The service provider offers the network service for a<br>specific region.<br>|
|service_provider_workflow|string|false|none|When the workflow is `provider_first` the subscriber creates<br>a circuit with the cloud provider and provides a `cloud_key` for filtering<br>the product-offerings.<br><br>If the workflow is `exchange_first` the IX will create<br>the cloud circuit on the provider side.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_method|dedicated|
|delivery_method|shared|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|
|service_provider_workflow|exchange_first|
|service_provider_workflow|provider_first|

<h2 id="tocS_CloudNetworkService">CloudNetworkService</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkservice"></a>
<a id="schema_CloudNetworkService"></a>
<a id="tocScloudnetworkservice"></a>
<a id="tocscloudnetworkservice"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "cloud_key": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "diversity": 1,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "provider_ref": "331050d5-76fb-498b-b72a-248520278fbd",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "cloud_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|cloud_key|string|true|none|none|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|diversity|integer|true|none|Same value as the corresponding `ProductOffering`.<br><br>The service can be delivered over multiple handovers from<br>the exchange to the `service_provider`.<br><br>The `diversity` denotes the number of handovers between the<br>exchange and the service provider. A value of two signals a<br>redundant service.<br><br>Only one network service configuration for each `handover` and<br>`cloud_vlan` can be created.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|true|none|none|
|provider_ref|string \| null|true|none|For a cloud network service with the exchange first<br>workflow, the `provider_ref` will be a reference<br>to a resource of the cloud provider. (E.g. the UUID of<br>a virtual circuit.)<br><br>The `provider_ref` is managed by the exchange and its<br>meaning may vary between different cloud services.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_CloudNetworkServiceConfig">CloudNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfig"></a>
<a id="schema_CloudNetworkServiceConfig"></a>
<a id="tocScloudnetworkserviceconfig"></a>
<a id="tocscloudnetworkserviceconfig"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|cloud_vlan|integer(int32) \| null|true|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|true|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_CloudNetworkServiceConfigPartial">CloudNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfigpartial"></a>
<a id="schema_CloudNetworkServiceConfigPartial"></a>
<a id="tocScloudnetworkserviceconfigpartial"></a>
<a id="tocscloudnetworkserviceconfigpartial"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Cloud Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|cloud_vlan|integer(int32) \| null|false|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|false|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_CloudNetworkServiceConfigRequest">CloudNetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfigrequest"></a>
<a id="schema_CloudNetworkServiceConfigRequest"></a>
<a id="tocScloudnetworkserviceconfigrequest"></a>
<a id="tocscloudnetworkserviceconfigrequest"></a>

```json
{
  "billing_account": "string",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|cloud_vlan|integer(int32) \| null|true|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|true|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_CloudNetworkServiceConfigRequestPartial">CloudNetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfigrequestpartial"></a>
<a id="schema_CloudNetworkServiceConfigRequestPartial"></a>
<a id="tocScloudnetworkserviceconfigrequestpartial"></a>
<a id="tocscloudnetworkserviceconfigrequestpartial"></a>

```json
{
  "billing_account": "string",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Cloud Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|cloud_vlan|integer(int32) \| null|false|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|false|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_CloudNetworkServiceConfigUpdate">CloudNetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfigupdate"></a>
<a id="schema_CloudNetworkServiceConfigUpdate"></a>
<a id="tocScloudnetworkserviceconfigupdate"></a>
<a id="tocscloudnetworkserviceconfigupdate"></a>

```json
{
  "billing_account": "string",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|cloud_vlan|integer(int32) \| null|true|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|true|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_CloudNetworkServiceConfigUpdatePartial">CloudNetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkserviceconfigupdatepartial"></a>
<a id="schema_CloudNetworkServiceConfigUpdatePartial"></a>
<a id="tocScloudnetworkserviceconfigupdatepartial"></a>
<a id="tocscloudnetworkserviceconfigupdatepartial"></a>

```json
{
  "billing_account": "string",
  "cloud_vlan": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "handover": 1,
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "cloud_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Cloud Network Service Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|cloud_vlan|integer(int32) \| null|false|none|If the `provider_vlans` property of the `ProductOffering` is<br>`multi`, a numeric value refers to a specific vlan on the service<br>provider side.<br><br>Otherwise, if set to `null`, it refers to all unmatched<br>vlan ids on the service provider side. (All vlan ids from the<br>service provider side are presented as tags within any vlans specified<br>in `vlan_config`.)<br><br>If the `provider_vlans` property of the `ProductOffering` is `single`,<br>the `cloud_vlan` MUST be `null` or MUST NOT be provided.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|handover|integer|false|none|The handover enumerates the connection and is<br>required for checking diversity constraints.<br><br>It must be within `1 <= x <= network_service.diversity`.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_CloudNetworkServicePartial">CloudNetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkservicepartial"></a>
<a id="schema_CloudNetworkServicePartial"></a>
<a id="tocScloudnetworkservicepartial"></a>
<a id="tocscloudnetworkservicepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "cloud_key": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "diversity": 1,
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "provider_ref": "331050d5-76fb-498b-b72a-248520278fbd",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "cloud_vc"
}
```

Cloud Network Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|cloud_key|string|false|none|none|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|diversity|integer|false|none|Same value as the corresponding `ProductOffering`.<br><br>The service can be delivered over multiple handovers from<br>the exchange to the `service_provider`.<br><br>The `diversity` denotes the number of handovers between the<br>exchange and the service provider. A value of two signals a<br>redundant service.<br><br>Only one network service configuration for each `handover` and<br>`cloud_vlan` can be created.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|false|none|none|
|provider_ref|string \| null|false|none|For a cloud network service with the exchange first<br>workflow, the `provider_ref` will be a reference<br>to a resource of the cloud provider. (E.g. the UUID of<br>a virtual circuit.)<br><br>The `provider_ref` is managed by the exchange and its<br>meaning may vary between different cloud services.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_CloudNetworkServiceRequest">CloudNetworkServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkservicerequest"></a>
<a id="schema_CloudNetworkServiceRequest"></a>
<a id="tocScloudnetworkservicerequest"></a>
<a id="tocscloudnetworkservicerequest"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "cloud_key": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "cloud_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|cloud_key|string|true|none|none|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|product_offering|string|true|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_CloudNetworkServiceRequestPartial">CloudNetworkServiceRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemacloudnetworkservicerequestpartial"></a>
<a id="schema_CloudNetworkServiceRequestPartial"></a>
<a id="tocScloudnetworkservicerequestpartial"></a>
<a id="tocscloudnetworkservicerequestpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "cloud_key": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "cloud_vc"
}
```

Cloud Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|cloud_key|string|false|none|none|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|product_offering|string|false|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "name": "string",
  "outer_vlan_ethertypes": [
    "0x8100"
  ],
  "ports": [
    "ID23",
    "42",
    "5"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "vlan_types": [
    "port"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|true|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|name|string|true|none|none|
|outer_vlan_ethertypes|[string]|true|none|The ethertype of the outer tag in hexadecimal notation.<br>|
|ports|[string]|false|none|References to the port belonging to this connection. Typically<br>all ports within one connection are distributed over the same<br>device.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|vlan_types|[string]|true|none|A list of vlan config types you can configure using<br>this connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|
|outer_vlan_ethertypes|0x8100|
|outer_vlan_ethertypes|0x88a8|
|outer_vlan_ethertypes|0x9100|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|
|vlan_types|port|
|vlan_types|dot1q|
|vlan_types|qinq|

<h2 id="tocS_ConnectionPartial">ConnectionPartial</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionpartial"></a>
<a id="schema_ConnectionPartial"></a>
<a id="tocSconnectionpartial"></a>
<a id="tocsconnectionpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "name": "string",
  "outer_vlan_ethertypes": [
    "0x8100"
  ],
  "ports": [
    "ID23",
    "42",
    "5"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "vlan_types": [
    "port"
  ]
}
```

Connection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|false|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|name|string|false|none|none|
|outer_vlan_ethertypes|[string]|false|none|The ethertype of the outer tag in hexadecimal notation.<br>|
|ports|[string]|false|none|References to the port belonging to this connection. Typically<br>all ports within one connection are distributed over the same<br>device.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|vlan_types|[string]|false|none|A list of vlan config types you can configure using<br>this connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|
|outer_vlan_ethertypes|0x8100|
|outer_vlan_ethertypes|0x88a8|
|outer_vlan_ethertypes|0x9100|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|
|vlan_types|port|
|vlan_types|dot1q|
|vlan_types|qinq|

<h2 id="tocS_ConnectionRequest">ConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionrequest"></a>
<a id="schema_ConnectionRequest"></a>
<a id="tocSconnectionrequest"></a>
<a id="tocsconnectionrequest"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|true|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|

<h2 id="tocS_ConnectionRequestPartial">ConnectionRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionrequestpartial"></a>
<a id="schema_ConnectionRequestPartial"></a>
<a id="tocSconnectionrequestpartial"></a>
<a id="tocsconnectionrequestpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000
}
```

Connection Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|false|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|

<h2 id="tocS_ConnectionUpdate">ConnectionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionupdate"></a>
<a id="schema_ConnectionUpdate"></a>
<a id="tocSconnectionupdate"></a>
<a id="tocsconnectionupdate"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|true|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|

<h2 id="tocS_ConnectionUpdatePartial">ConnectionUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionupdatepartial"></a>
<a id="schema_ConnectionUpdatePartial"></a>
<a id="tocSconnectionupdatepartial"></a>
<a id="tocsconnectionupdatepartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "lacp_timeout": "slow",
  "managing_account": "238189294",
  "mode": "lag_lacp",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 20000
}
```

Connection Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|lacp_timeout|string \| null|false|none|This sets the LACP Timeout mode. Both ends of the connections need<br>to be configured the same.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|mode|string|false|none|Sets the mode of the connection. The mode can be:<br><br>- `lag_lacp`: connection is build as a LAG with LACP enabled<br>- `lag_static`: connection is build as LAG with static configuration<br>- `flex_ethernet`: connect is build as a FlexEthernet channel<br>- `standalone`: only one port is allowed in this connection without<br>any bundling.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|none|Shows the total bandwidth of the connection in Mbit/s.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|lacp_timeout|slow|
|lacp_timeout|fast|
|mode|lag_lacp|
|mode|lag_static|
|mode|flex_ethernet|
|mode|standalone|

<h2 id="tocS_Consumable">Consumable</h2>
<!-- backwards compatibility -->
<a id="schemaconsumable"></a>
<a id="schema_Consumable"></a>
<a id="tocSconsumable"></a>
<a id="tocsconsumable"></a>

```json
{
  "consuming_account": "2381982"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|

<h2 id="tocS_ConsumablePartial">ConsumablePartial</h2>
<!-- backwards compatibility -->
<a id="schemaconsumablepartial"></a>
<a id="schema_ConsumablePartial"></a>
<a id="tocSconsumablepartial"></a>
<a id="tocsconsumablepartial"></a>

```json
{
  "consuming_account": "2381982"
}
```

Consumable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_ContactPartial">ContactPartial</h2>
<!-- backwards compatibility -->
<a id="schemacontactpartial"></a>
<a id="schema_ContactPartial"></a>
<a id="tocScontactpartial"></a>
<a id="tocscontactpartial"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

Contact

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_ContactRequest">ContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontactrequest"></a>
<a id="schema_ContactRequest"></a>
<a id="tocScontactrequest"></a>
<a id="tocscontactrequest"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_ContactRequestPartial">ContactRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemacontactrequestpartial"></a>
<a id="schema_ContactRequestPartial"></a>
<a id="tocScontactrequestpartial"></a>
<a id="tocscontactrequestpartial"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

A contact creation request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_ContactUpdate">ContactUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacontactupdate"></a>
<a id="schema_ContactUpdate"></a>
<a id="tocScontactupdate"></a>
<a id="tocscontactupdate"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_ContactUpdatePartial">ContactUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemacontactupdatepartial"></a>
<a id="schema_ContactUpdatePartial"></a>
<a id="tocScontactupdatepartial"></a>
<a id="tocscontactupdatepartial"></a>

```json
{
  "consuming_account": "2381982",
  "email": "info@moon-peer.net",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "Some A. Name",
  "telephone": "+442071838750"
}
```

A contact update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|email|string \| null|false|none|The email of the legal company entity.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string \| null|false|none|A name of a person or an organisation|
|telephone|string \| null|false|none|The telephone number in E.164 Phone Number Formatting|

<h2 id="tocS_Contactable">Contactable</h2>
<!-- backwards compatibility -->
<a id="schemacontactable"></a>
<a id="schema_Contactable"></a>
<a id="tocScontactable"></a>
<a id="tocscontactable"></a>

```json
{
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|

<h2 id="tocS_ContactablePartial">ContactablePartial</h2>
<!-- backwards compatibility -->
<a id="schemacontactablepartial"></a>
<a id="schema_ContactablePartial"></a>
<a id="tocScontactablepartial"></a>
<a id="tocscontactablepartial"></a>

```json
{
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ]
}
```

Contactable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|

<h2 id="tocS_DenyMemberJoiningRule">DenyMemberJoiningRule</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningrule"></a>
<a id="schema_DenyMemberJoiningRule"></a>
<a id="tocSdenymemberjoiningrule"></a>
<a id="tocsdenymemberjoiningrule"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "deny"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_DenyMemberJoiningRulePartial">DenyMemberJoiningRulePartial</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningrulepartial"></a>
<a id="schema_DenyMemberJoiningRulePartial"></a>
<a id="tocSdenymemberjoiningrulepartial"></a>
<a id="tocsdenymemberjoiningrulepartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "deny"
}
```

A rule for members joining a private vlan

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_DenyMemberJoiningRuleRequest">DenyMemberJoiningRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningrulerequest"></a>
<a id="schema_DenyMemberJoiningRuleRequest"></a>
<a id="tocSdenymemberjoiningrulerequest"></a>
<a id="tocsdenymemberjoiningrulerequest"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "deny"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_DenyMemberJoiningRuleRequestPartial">DenyMemberJoiningRuleRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningrulerequestpartial"></a>
<a id="schema_DenyMemberJoiningRuleRequestPartial"></a>
<a id="tocSdenymemberjoiningrulerequestpartial"></a>
<a id="tocsdenymemberjoiningrulerequestpartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "deny"
}
```

A new vlan member joining rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_service|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_DenyMemberJoiningRuleUpdate">DenyMemberJoiningRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningruleupdate"></a>
<a id="schema_DenyMemberJoiningRuleUpdate"></a>
<a id="tocSdenymemberjoiningruleupdate"></a>
<a id="tocsdenymemberjoiningruleupdate"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "deny"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|type|string|true|none|none|

<h2 id="tocS_DenyMemberJoiningRuleUpdatePartial">DenyMemberJoiningRuleUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemadenymemberjoiningruleupdatepartial"></a>
<a id="schema_DenyMemberJoiningRuleUpdatePartial"></a>
<a id="tocSdenymemberjoiningruleupdatepartial"></a>
<a id="tocsdenymemberjoiningruleupdatepartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "deny"
}
```

A vlan member joining rule update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account to which access to the<br>network service should be granted or denied.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|type|string|true|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "capabilities": [
    {
      "availability": 23,
      "max_lag": 8,
      "media_type": "1000BASE-LX",
      "speed": 1000
    }
  ],
  "facility": "string",
  "id": "string",
  "name": "edge2.moon.space-ix.net",
  "pop": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[[DeviceCapability](#schemadevicecapability)]|false|none|none|
|facility|string|false|read-only|Identifier of the facility where the device<br>is physically based.|
|id|string|true|none|none|
|name|string|true|none|Name of the device<br>|
|pop|string|true|none|The `PointOfPresence` the device is in.|

<h2 id="tocS_DeviceCapability">DeviceCapability</h2>
<!-- backwards compatibility -->
<a id="schemadevicecapability"></a>
<a id="schema_DeviceCapability"></a>
<a id="tocSdevicecapability"></a>
<a id="tocsdevicecapability"></a>

```json
{
  "availability": 23,
  "max_lag": 8,
  "media_type": "1000BASE-LX",
  "speed": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|integer(int32)|false|read-only|Count of available ports on device<br>|
|max_lag|integer(int32)|false|read-only|Maximum count of ports which can be bundled to a max_lag|
|media_type|string|false|read-only|The media type of the port (e.g. 1000BASE-LX, 10GBASE-LR, ...)<br>|
|speed|integer|false|read-only|Speed of port in Mbit/s<br>|

<h2 id="tocS_DeviceCapabilityPartial">DeviceCapabilityPartial</h2>
<!-- backwards compatibility -->
<a id="schemadevicecapabilitypartial"></a>
<a id="schema_DeviceCapabilityPartial"></a>
<a id="tocSdevicecapabilitypartial"></a>
<a id="tocsdevicecapabilitypartial"></a>

```json
{
  "availability": 23,
  "max_lag": 8,
  "media_type": "1000BASE-LX",
  "speed": 1000
}
```

Device Capability

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|integer(int32)|false|read-only|Count of available ports on device<br>|
|max_lag|integer(int32)|false|read-only|Maximum count of ports which can be bundled to a max_lag|
|media_type|string|false|read-only|The media type of the port (e.g. 1000BASE-LX, 10GBASE-LR, ...)<br>|
|speed|integer|false|read-only|Speed of port in Mbit/s<br>|

<h2 id="tocS_DeviceConnection">DeviceConnection</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconnection"></a>
<a id="schema_DeviceConnection"></a>
<a id="tocSdeviceconnection"></a>
<a id="tocsdeviceconnection"></a>

```json
{
  "capacity_max": 0,
  "connected_device": "string",
  "device": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer(int32)|true|none|none|
|connected_device|string|true|none|none|
|device|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_DeviceConnectionPartial">DeviceConnectionPartial</h2>
<!-- backwards compatibility -->
<a id="schemadeviceconnectionpartial"></a>
<a id="schema_DeviceConnectionPartial"></a>
<a id="tocSdeviceconnectionpartial"></a>
<a id="tocsdeviceconnectionpartial"></a>

```json
{
  "capacity_max": 0,
  "connected_device": "string",
  "device": "string",
  "id": "string"
}
```

Device Connection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity_max|integer(int32)|false|none|none|
|connected_device|string|false|none|none|
|device|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_DevicePartial">DevicePartial</h2>
<!-- backwards compatibility -->
<a id="schemadevicepartial"></a>
<a id="schema_DevicePartial"></a>
<a id="tocSdevicepartial"></a>
<a id="tocsdevicepartial"></a>

```json
{
  "capabilities": [
    {
      "availability": 23,
      "max_lag": 8,
      "media_type": "1000BASE-LX",
      "speed": 1000
    }
  ],
  "facility": "string",
  "id": "string",
  "name": "edge2.moon.space-ix.net",
  "pop": "string"
}
```

Device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[[DeviceCapability](#schemadevicecapability)]|false|none|none|
|facility|string|false|read-only|Identifier of the facility where the device<br>is physically based.|
|id|string|false|none|none|
|name|string|false|none|Name of the device<br>|
|pop|string|false|none|The `PointOfPresence` the device is in.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "account": "string",
  "payload": {},
  "serial": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|read-only|none|
|payload|object|true|none|none|
|serial|integer|true|none|none|
|timestamp|string(date-time)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_EventPartial">EventPartial</h2>
<!-- backwards compatibility -->
<a id="schemaeventpartial"></a>
<a id="schema_EventPartial"></a>
<a id="tocSeventpartial"></a>
<a id="tocseventpartial"></a>

```json
{
  "account": "string",
  "payload": {},
  "serial": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "string"
}
```

Event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|read-only|none|
|payload|object|false|none|none|
|serial|integer|false|none|none|
|timestamp|string(date-time)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_ExchangeLanNetworkProductOffering">ExchangeLanNetworkProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkproductoffering"></a>
<a id="schema_ExchangeLanNetworkProductOffering"></a>
<a id="tocSexchangelannetworkproductoffering"></a>
<a id="tocsexchangelannetworkproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "exchange_lan_network_service": "string",
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "exchange_lan",
  "upgrade_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|true|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|true|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|true|none|none|
|downgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|exchange_lan_network_service|string|true|none|The id of the exchange lan network service.|
|handover_metro_area|string|true|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|true|none|none|
|name|string|true|none|Name of the product|
|physical_port_speed|integer \| null|true|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|true|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|true|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|true|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|true|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_ExchangeLanNetworkProductOfferingPartial">ExchangeLanNetworkProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkproductofferingpartial"></a>
<a id="schema_ExchangeLanNetworkProductOfferingPartial"></a>
<a id="tocSexchangelannetworkproductofferingpartial"></a>
<a id="tocsexchangelannetworkproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "exchange_lan_network_service": "string",
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "exchange_lan",
  "upgrade_allowed": true
}
```

Exchange Lan Network Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|false|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|false|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|false|none|none|
|downgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|exchange_lan_network_service|string|false|none|The id of the exchange lan network service.|
|handover_metro_area|string|false|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|false|none|none|
|name|string|false|none|Name of the product|
|physical_port_speed|integer \| null|false|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|false|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|false|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|false|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|false|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_ExchangeLanNetworkService">ExchangeLanNetworkService</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkservice"></a>
<a id="schema_ExchangeLanNetworkService"></a>
<a id="tocSexchangelannetworkservice"></a>
<a id="tocsexchangelannetworkservice"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|ixfdb_ixid|integer \| null|false|none|id of ixfdb|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|metro_area_network|string|true|none|Id of the `MetroAreaNetwork` where<br>the exchange lan network service is directly provided.<br><br>Same as `service_metro_area_network` on the related<br>`ProductOffering`.<br>|
|name|string|true|none|Exchange-dependent service name, will be shown on the invoice.|
|network_features|[string]|true|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|peeringdb_ixid|integer \| null|false|none|PeeringDB ixid|
|product_offering|string|false|none|*deprecation notice*|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|subnet_v4|string|true|none|IPv4 subnet in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>CIDR notation.<br>|
|subnet_v6|string|true|none|IPv6 subnet in hexadecimal colon separated CIDR notation.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_ExchangeLanNetworkServiceConfig">ExchangeLanNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfig"></a>
<a id="schema_ExchangeLanNetworkServiceConfig"></a>
<a id="tocSexchangelannetworkserviceconfig"></a>
<a id="tocsexchangelannetworkserviceconfig"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|true|none|none|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|true|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the configured network service.|
|product_offering|string|true|none|The product offering must match the type `exchange_lan`<br>and must refer to the related network service through<br>the `exchange_lan_network_service` property.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_ExchangeLanNetworkServiceConfigPartial">ExchangeLanNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfigpartial"></a>
<a id="schema_ExchangeLanNetworkServiceConfigPartial"></a>
<a id="tocSexchangelannetworkserviceconfigpartial"></a>
<a id="tocsexchangelannetworkserviceconfigpartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Exchange Lan Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|false|none|none|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|false|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the configured network service.|
|product_offering|string|false|none|The product offering must match the type `exchange_lan`<br>and must refer to the related network service through<br>the `exchange_lan_network_service` property.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_ExchangeLanNetworkServiceConfigRequest">ExchangeLanNetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfigrequest"></a>
<a id="schema_ExchangeLanNetworkServiceConfigRequest"></a>
<a id="tocSexchangelannetworkserviceconfigrequest"></a>
<a id="tocsexchangelannetworkserviceconfigrequest"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|true|none|none|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|true|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the `NetworkService` to configure.|
|product_offering|string|true|none|The product offering must match the type `exchange_lan`<br>and must refer to the related network service through<br>the `exchange_lan_network_service` property.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_ExchangeLanNetworkServiceConfigRequestPartial">ExchangeLanNetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfigrequestpartial"></a>
<a id="schema_ExchangeLanNetworkServiceConfigRequestPartial"></a>
<a id="tocSexchangelannetworkserviceconfigrequestpartial"></a>
<a id="tocsexchangelannetworkserviceconfigrequestpartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Exchange Lan Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|false|none|none|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|false|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the `NetworkService` to configure.|
|product_offering|string|false|none|The product offering must match the type `exchange_lan`<br>and must refer to the related network service through<br>the `exchange_lan_network_service` property.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_ExchangeLanNetworkServiceConfigUpdate">ExchangeLanNetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfigupdate"></a>
<a id="schema_ExchangeLanNetworkServiceConfigUpdate"></a>
<a id="tocSexchangelannetworkserviceconfigupdate"></a>
<a id="tocsexchangelannetworkserviceconfigupdate"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|true|none|none|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|true|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_ExchangeLanNetworkServiceConfigUpdatePartial">ExchangeLanNetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkserviceconfigupdatepartial"></a>
<a id="schema_ExchangeLanNetworkServiceConfigUpdatePartial"></a>
<a id="tocSexchangelannetworkserviceconfigupdatepartial"></a>
<a id="tocsexchangelannetworkserviceconfigupdatepartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Exchange Lan Network Service Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asns|[integer(int64)]|false|none|none|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|ips|[string]|false|read-only|A list of ip-address IDs.<br><br>Allocation of IP Addresses might be deferred depending on<br>the IXP implementation. No assumption should be made.|
|listed|boolean|false|none|The customer wants to be featured on the member list|
|macs|[string]|false|none|A list of mac-address IDs.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_ExchangeLanNetworkServicePartial">ExchangeLanNetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemaexchangelannetworkservicepartial"></a>
<a id="schema_ExchangeLanNetworkServicePartial"></a>
<a id="tocSexchangelannetworkservicepartial"></a>
<a id="tocsexchangelannetworkservicepartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

Exchange Lan Network Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|ixfdb_ixid|integer \| null|false|none|id of ixfdb|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|metro_area_network|string|false|none|Id of the `MetroAreaNetwork` where<br>the exchange lan network service is directly provided.<br><br>Same as `service_metro_area_network` on the related<br>`ProductOffering`.<br>|
|name|string|false|none|Exchange-dependent service name, will be shown on the invoice.|
|network_features|[string]|false|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|peeringdb_ixid|integer \| null|false|none|PeeringDB ixid|
|product_offering|string|false|none|*deprecation notice*|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|subnet_v4|string|false|none|IPv4 subnet in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>CIDR notation.<br>|
|subnet_v6|string|false|none|IPv6 subnet in hexadecimal colon separated CIDR notation.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_ExternalReference">ExternalReference</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreference"></a>
<a id="schema_ExternalReference"></a>
<a id="tocSexternalreference"></a>
<a id="tocsexternalreference"></a>

```json
{
  "external_ref": "IX:Service:23042"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|

<h2 id="tocS_ExternalReferencePartial">ExternalReferencePartial</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreferencepartial"></a>
<a id="schema_ExternalReferencePartial"></a>
<a id="tocSexternalreferencepartial"></a>
<a id="tocsexternalreferencepartial"></a>

```json
{
  "external_ref": "IX:Service:23042"
}
```

External Reference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|

<h2 id="tocS_Facility">Facility</h2>
<!-- backwards compatibility -->
<a id="schemafacility"></a>
<a id="schema_Facility"></a>
<a id="tocSfacility"></a>
<a id="tocsfacility"></a>

```json
{
  "address_country": "US",
  "address_locality": "Mountain View",
  "address_region": "CA",
  "id": "string",
  "metro_area": "met:93214980:BER",
  "name": "Crater DC Moon 1",
  "organisation_name": "Moon Datacenters",
  "peeringdb_facility_id": 103,
  "pops": [
    "string"
  ],
  "postal_code": "9409",
  "street_address": "1600 Amphitheatre Pkwy."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_country|string|true|none|ISO 3166-1 alpha-2 country code, for example DE<br>|
|address_locality|string|true|none|The locality/city. For example, Mountain View.|
|address_region|string|true|none|The region. For example, CA|
|id|string|true|none|none|
|metro_area|string|true|none|Id of the `MetroArea` the DC is located in.<br>|
|name|string|true|none|Name of the Datacenter as called by the operator<br>|
|organisation_name|string|true|none|Name of Datacenter operator<br>|
|peeringdb_facility_id|integer(int32) \| null|false|none|[PeeringDB](https://www.peeringdb.com) facitlity ID,<br>can be extracted from the url https://www.peeringdb.com/fac/$id<br>|
|pops|[string]|true|none|List of pops in the `Facility`.|
|postal_code|string|true|none|A postal code. For example, 9404|
|street_address|string|true|none|The street address. For example, 1600 Amphitheatre Pkwy.|

<h2 id="tocS_FacilityPartial">FacilityPartial</h2>
<!-- backwards compatibility -->
<a id="schemafacilitypartial"></a>
<a id="schema_FacilityPartial"></a>
<a id="tocSfacilitypartial"></a>
<a id="tocsfacilitypartial"></a>

```json
{
  "address_country": "US",
  "address_locality": "Mountain View",
  "address_region": "CA",
  "id": "string",
  "metro_area": "met:93214980:BER",
  "name": "Crater DC Moon 1",
  "organisation_name": "Moon Datacenters",
  "peeringdb_facility_id": 103,
  "pops": [
    "string"
  ],
  "postal_code": "9409",
  "street_address": "1600 Amphitheatre Pkwy."
}
```

Facility

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_country|string|false|none|ISO 3166-1 alpha-2 country code, for example DE<br>|
|address_locality|string|false|none|The locality/city. For example, Mountain View.|
|address_region|string|false|none|The region. For example, CA|
|id|string|false|none|none|
|metro_area|string|false|none|Id of the `MetroArea` the DC is located in.<br>|
|name|string|false|none|Name of the Datacenter as called by the operator<br>|
|organisation_name|string|false|none|Name of Datacenter operator<br>|
|peeringdb_facility_id|integer(int32) \| null|false|none|[PeeringDB](https://www.peeringdb.com) facitlity ID,<br>can be extracted from the url https://www.peeringdb.com/fac/$id<br>|
|pops|[string]|false|none|List of pops in the `Facility`.|
|postal_code|string|false|none|A postal code. For example, 9404|
|street_address|string|false|none|The street address. For example, 1600 Amphitheatre Pkwy.|

<h2 id="tocS_HealthResponse">HealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthresponse"></a>
<a id="schema_HealthResponse"></a>
<a id="tocShealthresponse"></a>
<a id="tocshealthresponse"></a>

```json
{
  "checks": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "description": "string",
  "links": {
    "property1": "string",
    "property2": "string"
  },
  "notes": [
    "string"
  ],
  "output": "string",
  "releaseId": "1.23.0",
  "serviceId": "string",
  "status": "pass",
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|object|false|none|The "checks" object MAY have a number of unique keys,<br>one for each logical downstream dependency or sub-component.<br><br>Since each sub-component may be backed by several nodes<br>with varying health statuses, these keys point to arrays<br>of objects. In case of a single-node sub-component<br>(or if presence of nodes is not relevant), a single-element<br>array SHOULD be used as the value, for consistency.<br><br>Please see<br>https://tools.ietf.org/id/draft-inadarei-api-health-check-04.html#the-checks-object<br>for details.|
|description|string|false|none|A human-friendly description of the service.|
|links|object|false|none|Is an object containing link relations and URIs [RFC3986]<br>for external links that MAY contain more information about<br>the health of the endpoint.|
|notes|[string]|false|none|Array of notes relevant to current state of health.|
|output|string|false|none|Raw error output, in case of "fail" or "warn" states.|
|releaseId|string|false|none|Release version of the api implementation.<br>|
|serviceId|string|false|none|A unique identifier of the service, in the application scope.|
|status|string|true|none|status indicates whether the service status is<br>acceptable or not.|
|version|string|false|none|Public version of the service.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pass|
|status|fail|
|status|warn|

<h2 id="tocS_HealthResponsePartial">HealthResponsePartial</h2>
<!-- backwards compatibility -->
<a id="schemahealthresponsepartial"></a>
<a id="schema_HealthResponsePartial"></a>
<a id="tocShealthresponsepartial"></a>
<a id="tocshealthresponsepartial"></a>

```json
{
  "checks": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "description": "string",
  "links": {
    "property1": "string",
    "property2": "string"
  },
  "notes": [
    "string"
  ],
  "output": "string",
  "releaseId": "1.23.0",
  "serviceId": "string",
  "status": "pass",
  "version": "1"
}
```

Health Status Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|object|false|none|The "checks" object MAY have a number of unique keys,<br>one for each logical downstream dependency or sub-component.<br><br>Since each sub-component may be backed by several nodes<br>with varying health statuses, these keys point to arrays<br>of objects. In case of a single-node sub-component<br>(or if presence of nodes is not relevant), a single-element<br>array SHOULD be used as the value, for consistency.<br><br>Please see<br>https://tools.ietf.org/id/draft-inadarei-api-health-check-04.html#the-checks-object<br>for details.|
|description|string|false|none|A human-friendly description of the service.|
|links|object|false|none|Is an object containing link relations and URIs [RFC3986]<br>for external links that MAY contain more information about<br>the health of the endpoint.|
|notes|[string]|false|none|Array of notes relevant to current state of health.|
|output|string|false|none|Raw error output, in case of "fail" or "warn" states.|
|releaseId|string|false|none|Release version of the api implementation.<br>|
|serviceId|string|false|none|A unique identifier of the service, in the application scope.|
|status|string|false|none|status indicates whether the service status is<br>acceptable or not.|
|version|string|false|none|Public version of the service.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pass|
|status|fail|
|status|warn|

<h2 id="tocS_IXPSpecificFeatureFlag">IXPSpecificFeatureFlag</h2>
<!-- backwards compatibility -->
<a id="schemaixpspecificfeatureflag"></a>
<a id="schema_IXPSpecificFeatureFlag"></a>
<a id="tocSixpspecificfeatureflag"></a>
<a id="tocsixpspecificfeatureflag"></a>

```json
{
  "description": "RPKI reject invalid filtering is available",
  "name": "RPKI"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|The description of the feature flag.<br>|
|name|string|true|none|The name of the feature flag.<br>|

<h2 id="tocS_IXPSpecificFeatureFlagPartial">IXPSpecificFeatureFlagPartial</h2>
<!-- backwards compatibility -->
<a id="schemaixpspecificfeatureflagpartial"></a>
<a id="schema_IXPSpecificFeatureFlagPartial"></a>
<a id="tocSixpspecificfeatureflagpartial"></a>
<a id="tocsixpspecificfeatureflagpartial"></a>

```json
{
  "description": "RPKI reject invalid filtering is available",
  "name": "RPKI"
}
```

IXP-Specific Feature Flag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the feature flag.<br>|
|name|string|false|none|The name of the feature flag.<br>|

<h2 id="tocS_ImplementationResponse">ImplementationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimplementationresponse"></a>
<a id="schema_ImplementationResponse"></a>
<a id="tocSimplementationresponse"></a>
<a id="tocsimplementationresponse"></a>

```json
{
  "schema_version": "2.0.0",
  "service_version": "1.23.0",
  "supported_network_feature_config_types": [
    "route_server"
  ],
  "supported_network_feature_types": [
    "route_server"
  ],
  "supported_network_service_config_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_network_service_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_operations": [
    "connections_list",
    "connections_read",
    "network_service_configs_create"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema_version|string|true|none|Version of the implemented IX-API schema.<br>|
|service_version|string|false|none|Version of the API service.<br>|
|supported_network_feature_config_types|[string]|true|none|Array of supported network feature config types.<br>|
|supported_network_feature_types|[string]|true|none|Array of supported network feature types.<br>|
|supported_network_service_config_types|[string]|true|none|Array of supported network service config types.<br>|
|supported_network_service_types|[string]|true|none|Array of network service types, supported by the IX.<br>|
|supported_operations|[string]|true|none|Array of implemented operations of the ix-api schema.<br>|

<h2 id="tocS_ImplementationResponsePartial">ImplementationResponsePartial</h2>
<!-- backwards compatibility -->
<a id="schemaimplementationresponsepartial"></a>
<a id="schema_ImplementationResponsePartial"></a>
<a id="tocSimplementationresponsepartial"></a>
<a id="tocsimplementationresponsepartial"></a>

```json
{
  "schema_version": "2.0.0",
  "service_version": "1.23.0",
  "supported_network_feature_config_types": [
    "route_server"
  ],
  "supported_network_feature_types": [
    "route_server"
  ],
  "supported_network_service_config_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_network_service_types": [
    "exchange_lan",
    "p2p_vc",
    "cloud_vc"
  ],
  "supported_operations": [
    "connections_list",
    "connections_read",
    "network_service_configs_create"
  ]
}
```

API Implementation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema_version|string|false|none|Version of the implemented IX-API schema.<br>|
|service_version|string|false|none|Version of the API service.<br>|
|supported_network_feature_config_types|[string]|false|none|Array of supported network feature config types.<br>|
|supported_network_feature_types|[string]|false|none|Array of supported network feature types.<br>|
|supported_network_service_config_types|[string]|false|none|Array of supported network service config types.<br>|
|supported_network_service_types|[string]|false|none|Array of network service types, supported by the IX.<br>|
|supported_operations|[string]|false|none|Array of implemented operations of the ix-api schema.<br>|

<h2 id="tocS_Invoiceable">Invoiceable</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceable"></a>
<a id="schema_Invoiceable"></a>
<a id="tocSinvoiceable"></a>
<a id="tocsinvoiceable"></a>

```json
{
  "billing_account": "string",
  "contract_ref": "contract:31824",
  "purchase_order": "Project: DC Moon"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|

<h2 id="tocS_InvoiceablePartial">InvoiceablePartial</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceablepartial"></a>
<a id="schema_InvoiceablePartial"></a>
<a id="tocSinvoiceablepartial"></a>
<a id="tocsinvoiceablepartial"></a>

```json
{
  "billing_account": "string",
  "contract_ref": "contract:31824",
  "purchase_order": "Project: DC Moon"
}
```

Invoiceable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|true|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|true|none|The version of the internet protocol.<br>|

<h2 id="tocS_IpAddressPartial">IpAddressPartial</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresspartial"></a>
<a id="schema_IpAddressPartial"></a>
<a id="tocSipaddresspartial"></a>
<a id="tocsipaddresspartial"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "id": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

IP-Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|false|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|false|none|The version of the internet protocol.<br>|

<h2 id="tocS_IpAddressRequest">IpAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressrequest"></a>
<a id="schema_IpAddressRequest"></a>
<a id="tocSipaddressrequest"></a>
<a id="tocsipaddressrequest"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|true|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|true|none|The version of the internet protocol.<br>|

<h2 id="tocS_IpAddressRequestPartial">IpAddressRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressrequestpartial"></a>
<a id="schema_IpAddressRequestPartial"></a>
<a id="tocSipaddressrequestpartial"></a>
<a id="tocsipaddressrequestpartial"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

IP-Address / Prefix allocation Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|false|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|false|none|The version of the internet protocol.<br>|

<h2 id="tocS_IpAddressUpdate">IpAddressUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressupdate"></a>
<a id="schema_IpAddressUpdate"></a>
<a id="tocSipaddressupdate"></a>
<a id="tocsipaddressupdate"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|true|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|true|none|The version of the internet protocol.<br>|

<h2 id="tocS_IpAddressUpdatePartial">IpAddressUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressupdatepartial"></a>
<a id="schema_IpAddressUpdatePartial"></a>
<a id="tocSipaddressupdatepartial"></a>
<a id="tocsipaddressupdatepartial"></a>

```json
{
  "address": "23.142.52.0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "fqdn": "string",
  "managing_account": "238189294",
  "prefix_length": 23,
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z",
  "version": 4
}
```

IP-Address Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|IPv4 or IPv6 Address in the following format:<br>- IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>- IPv6: hexadecimal colon separated notation<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|fqdn|string \| null|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|prefix_length|integer(int32)|false|none|The CIDR ip prefix length<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|
|version|integer|false|none|The version of the internet protocol.<br>|

<h2 id="tocS_MP2MPNetworkProductOffering">MP2MPNetworkProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkproductoffering"></a>
<a id="schema_MP2MPNetworkProductOffering"></a>
<a id="tocSmp2mpnetworkproductoffering"></a>
<a id="tocsmp2mpnetworkproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "mp2mp_vc",
  "upgrade_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|true|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|true|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|true|none|none|
|downgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|true|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|true|none|none|
|name|string|true|none|Name of the product|
|physical_port_speed|integer \| null|true|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|true|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|true|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|true|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|true|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_MP2MPNetworkProductOfferingPartial">MP2MPNetworkProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkproductofferingpartial"></a>
<a id="schema_MP2MPNetworkProductOfferingPartial"></a>
<a id="tocSmp2mpnetworkproductofferingpartial"></a>
<a id="tocsmp2mpnetworkproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "mp2mp_vc",
  "upgrade_allowed": true
}
```

MP2MP Network Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|false|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|false|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|false|none|none|
|downgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|false|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|false|none|none|
|name|string|false|none|Name of the product|
|physical_port_speed|integer \| null|false|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|false|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|false|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|false|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|false|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_MP2MPNetworkService">MP2MPNetworkService</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkservice"></a>
<a id="schema_MP2MPNetworkService"></a>
<a id="tocSmp2mpnetworkservice"></a>
<a id="tocsmp2mpnetworkservice"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "member_joining_rules": [
    "string"
  ],
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "mp2mp_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|member_joining_rules|[string]|true|none|none|
|name|string|true|none|Name of the multi-point to multi-point<br>virtual circuit.|
|network_features|[string]|true|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|true|none|none|
|public|boolean|false|none|A public mp2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_MP2MPNetworkServiceConfig">MP2MPNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfig"></a>
<a id="schema_MP2MPNetworkServiceConfig"></a>
<a id="tocSmp2mpnetworkserviceconfig"></a>
<a id="tocsmp2mpnetworkserviceconfig"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|macs|[string]|false|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_MP2MPNetworkServiceConfigPartial">MP2MPNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfigpartial"></a>
<a id="schema_MP2MPNetworkServiceConfigPartial"></a>
<a id="tocSmp2mpnetworkserviceconfigpartial"></a>
<a id="tocsmp2mpnetworkserviceconfigpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

MP2MP Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|macs|[string]|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_MP2MPNetworkServiceConfigRequest">MP2MPNetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfigrequest"></a>
<a id="schema_MP2MPNetworkServiceConfigRequest"></a>
<a id="tocSmp2mpnetworkserviceconfigrequest"></a>
<a id="tocsmp2mpnetworkserviceconfigrequest"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|macs|[string]|false|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_MP2MPNetworkServiceConfigRequestPartial">MP2MPNetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfigrequestpartial"></a>
<a id="schema_MP2MPNetworkServiceConfigRequestPartial"></a>
<a id="tocSmp2mpnetworkserviceconfigrequestpartial"></a>
<a id="tocsmp2mpnetworkserviceconfigrequestpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

MP2MP Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|macs|[string]|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_MP2MPNetworkServiceConfigUpdate">MP2MPNetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfigupdate"></a>
<a id="schema_MP2MPNetworkServiceConfigUpdate"></a>
<a id="tocSmp2mpnetworkserviceconfigupdate"></a>
<a id="tocsmp2mpnetworkserviceconfigupdate"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|macs|[string]|false|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_MP2MPNetworkServiceConfigUpdatePartial">MP2MPNetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkserviceconfigupdatepartial"></a>
<a id="schema_MP2MPNetworkServiceConfigUpdatePartial"></a>
<a id="tocSmp2mpnetworkserviceconfigupdatepartial"></a>
<a id="tocsmp2mpnetworkserviceconfigupdatepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "mp2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

MP2MP Network Service Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|macs|[string]|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_MP2MPNetworkServicePartial">MP2MPNetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkservicepartial"></a>
<a id="schema_MP2MPNetworkServicePartial"></a>
<a id="tocSmp2mpnetworkservicepartial"></a>
<a id="tocsmp2mpnetworkservicepartial"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "member_joining_rules": [
    "string"
  ],
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "mp2mp_vc"
}
```

MP2MP Network Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|member_joining_rules|[string]|false|none|none|
|name|string|false|none|Name of the multi-point to multi-point<br>virtual circuit.|
|network_features|[string]|false|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|false|none|none|
|public|boolean|false|none|A public mp2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_MP2MPNetworkServiceRequest">MP2MPNetworkServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkservicerequest"></a>
<a id="schema_MP2MPNetworkServiceRequest"></a>
<a id="tocSmp2mpnetworkservicerequest"></a>
<a id="tocsmp2mpnetworkservicerequest"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "string",
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "type": "mp2mp_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string|true|none|Name of the multi-point to multi-point<br>virtual circuit.|
|product_offering|string|true|none|none|
|public|boolean|false|none|A public mp2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_MP2MPNetworkServiceRequestPartial">MP2MPNetworkServiceRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemamp2mpnetworkservicerequestpartial"></a>
<a id="schema_MP2MPNetworkServiceRequestPartial"></a>
<a id="tocSmp2mpnetworkservicerequestpartial"></a>
<a id="tocsmp2mpnetworkservicerequestpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "string",
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "type": "mp2mp_vc"
}
```

MP2MP Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string|false|none|Name of the multi-point to multi-point<br>virtual circuit.|
|product_offering|string|false|none|none|
|public|boolean|false|none|A public mp2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_MacAddress">MacAddress</h2>
<!-- backwards compatibility -->
<a id="schemamacaddress"></a>
<a id="schema_MacAddress"></a>
<a id="tocSmacaddress"></a>
<a id="tocsmacaddress"></a>

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Unicast MAC address, formatted hexadecimal values with colons.<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|

<h2 id="tocS_MacAddressPartial">MacAddressPartial</h2>
<!-- backwards compatibility -->
<a id="schemamacaddresspartial"></a>
<a id="schema_MacAddressPartial"></a>
<a id="tocSmacaddresspartial"></a>
<a id="tocsmacaddresspartial"></a>

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

MAC-Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Unicast MAC address, formatted hexadecimal values with colons.<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|

<h2 id="tocS_MacAddressRequest">MacAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemamacaddressrequest"></a>
<a id="schema_MacAddressRequest"></a>
<a id="tocSmacaddressrequest"></a>
<a id="tocsmacaddressrequest"></a>

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|Unicast MAC address, formatted hexadecimal values with colons.<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|

<h2 id="tocS_MacAddressRequestPartial">MacAddressRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemamacaddressrequestpartial"></a>
<a id="schema_MacAddressRequestPartial"></a>
<a id="tocSmacaddressrequestpartial"></a>
<a id="tocsmacaddressrequestpartial"></a>

```json
{
  "address": "42:23:bc:8e:b8:b0",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "valid_not_after": "1970-01-01T00:00:00Z",
  "valid_not_before": "1970-01-01T00:00:00Z"
}
```

MAC-Address Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|Unicast MAC address, formatted hexadecimal values with colons.<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|valid_not_after|string(date-time) \| null|false|none|none|
|valid_not_before|string(date-time) \| null|false|none|none|

<h2 id="tocS_Manageable">Manageable</h2>
<!-- backwards compatibility -->
<a id="schemamanageable"></a>
<a id="schema_Manageable"></a>
<a id="tocSmanageable"></a>
<a id="tocsmanageable"></a>

```json
{
  "managing_account": "238189294"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|

<h2 id="tocS_ManageablePartial">ManageablePartial</h2>
<!-- backwards compatibility -->
<a id="schemamanageablepartial"></a>
<a id="schema_ManageablePartial"></a>
<a id="tocSmanageablepartial"></a>
<a id="tocsmanageablepartial"></a>

```json
{
  "managing_account": "238189294"
}
```

Managed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|

<h2 id="tocS_MemberJoiningRule">MemberJoiningRule</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningrule"></a>
<a id="schema_MemberJoiningRule"></a>
<a id="tocSmemberjoiningrule"></a>
<a id="tocsmemberjoiningrule"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

Polymorphic Member Joining Rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRule](#schemaallowmemberjoiningrule)|false|none|none|
|*oneOf*|[DenyMemberJoiningRule](#schemadenymemberjoiningrule)|false|none|none|

<h2 id="tocS_MemberJoiningRulePartial">MemberJoiningRulePartial</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningrulepartial"></a>
<a id="schema_MemberJoiningRulePartial"></a>
<a id="tocSmemberjoiningrulepartial"></a>
<a id="tocsmemberjoiningrulepartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

Polymorphic Member Joining Rule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRulePartial](#schemaallowmemberjoiningrulepartial)|false|none|A rule for members joining a private vlan|
|*oneOf*|[DenyMemberJoiningRulePartial](#schemadenymemberjoiningrulepartial)|false|none|A rule for members joining a private vlan|

<h2 id="tocS_MemberJoiningRuleRequest">MemberJoiningRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningrulerequest"></a>
<a id="schema_MemberJoiningRuleRequest"></a>
<a id="tocSmemberjoiningrulerequest"></a>
<a id="tocsmemberjoiningrulerequest"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

Polymorphic Member Joining Rule Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRuleRequest](#schemaallowmemberjoiningrulerequest)|false|none|none|
|*oneOf*|[DenyMemberJoiningRuleRequest](#schemadenymemberjoiningrulerequest)|false|none|none|

<h2 id="tocS_MemberJoiningRuleRequestPartial">MemberJoiningRuleRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningrulerequestpartial"></a>
<a id="schema_MemberJoiningRuleRequestPartial"></a>
<a id="tocSmemberjoiningrulerequestpartial"></a>
<a id="tocsmemberjoiningrulerequestpartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_service": "string",
  "type": "allow"
}
```

Polymorphic Member Joining Rule Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRuleRequestPartial](#schemaallowmemberjoiningrulerequestpartial)|false|none|A new vlan member joining rule|
|*oneOf*|[DenyMemberJoiningRuleRequestPartial](#schemadenymemberjoiningrulerequestpartial)|false|none|A new vlan member joining rule|

<h2 id="tocS_MemberJoiningRuleUpdate">MemberJoiningRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningruleupdate"></a>
<a id="schema_MemberJoiningRuleUpdate"></a>
<a id="tocSmemberjoiningruleupdate"></a>
<a id="tocsmemberjoiningruleupdate"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

Polymorphic Member Joining Rule Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRuleUpdate](#schemaallowmemberjoiningruleupdate)|false|none|none|
|*oneOf*|[DenyMemberJoiningRuleUpdate](#schemadenymemberjoiningruleupdate)|false|none|none|

<h2 id="tocS_MemberJoiningRuleUpdatePartial">MemberJoiningRuleUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemamemberjoiningruleupdatepartial"></a>
<a id="schema_MemberJoiningRuleUpdatePartial"></a>
<a id="tocSmemberjoiningruleupdatepartial"></a>
<a id="tocsmemberjoiningruleupdatepartial"></a>

```json
{
  "capacity_max": 1,
  "capacity_min": 1,
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "type": "allow"
}
```

Polymorphic Member Joining Rule Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AllowMemberJoiningRuleUpdatePartial](#schemaallowmemberjoiningruleupdatepartial)|false|none|A vlan member joining rule update|
|*oneOf*|[DenyMemberJoiningRuleUpdatePartial](#schemadenymemberjoiningruleupdatepartial)|false|none|A vlan member joining rule update|

<h2 id="tocS_MetroArea">MetroArea</h2>
<!-- backwards compatibility -->
<a id="schemametroarea"></a>
<a id="schema_MetroArea"></a>
<a id="tocSmetroarea"></a>
<a id="tocsmetroarea"></a>

```json
{
  "display_name": "FRA",
  "facilities": [
    "string"
  ],
  "iata_code": "FRA",
  "id": "string",
  "metro_area_networks": [
    "string"
  ],
  "un_locode": "DE FRA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|true|none|The name of the metro area. Likely the same as the IATA code.<br>|
|facilities|[string]|true|none|List of facilities the metro area network.|
|iata_code|string|true|none|The three letter IATA airport code for identiying the<br>metro area.<br>|
|id|string|true|none|none|
|metro_area_networks|[string]|true|none|List of networks in the metro area.|
|un_locode|string|true|none|The UN/LOCODE for identifying the metro area.<br>|

<h2 id="tocS_MetroAreaNetwork">MetroAreaNetwork</h2>
<!-- backwards compatibility -->
<a id="schemametroareanetwork"></a>
<a id="schema_MetroAreaNetwork"></a>
<a id="tocSmetroareanetwork"></a>
<a id="tocsmetroareanetwork"></a>

```json
{
  "id": "string",
  "metro_area": "met:199399:FRA",
  "name": "MY-IX-FRA1",
  "pops": [
    "string"
  ],
  "service_provider": "MY-IX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|metro_area|string|true|none|The id of the metro area.<br>|
|name|string|true|none|The name of the metro area network.<br>|
|pops|[string]|true|none|List of pops in the metro area network.|
|service_provider|string|true|none|The service provider is operating the network.<br>Usually the exchange.<br>|

<h2 id="tocS_MetroAreaNetworkPartial">MetroAreaNetworkPartial</h2>
<!-- backwards compatibility -->
<a id="schemametroareanetworkpartial"></a>
<a id="schema_MetroAreaNetworkPartial"></a>
<a id="tocSmetroareanetworkpartial"></a>
<a id="tocsmetroareanetworkpartial"></a>

```json
{
  "id": "string",
  "metro_area": "met:199399:FRA",
  "name": "MY-IX-FRA1",
  "pops": [
    "string"
  ],
  "service_provider": "MY-IX"
}
```

MetroAreaNetwork

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|metro_area|string|false|none|The id of the metro area.<br>|
|name|string|false|none|The name of the metro area network.<br>|
|pops|[string]|false|none|List of pops in the metro area network.|
|service_provider|string|false|none|The service provider is operating the network.<br>Usually the exchange.<br>|

<h2 id="tocS_MetroAreaPartial">MetroAreaPartial</h2>
<!-- backwards compatibility -->
<a id="schemametroareapartial"></a>
<a id="schema_MetroAreaPartial"></a>
<a id="tocSmetroareapartial"></a>
<a id="tocsmetroareapartial"></a>

```json
{
  "display_name": "FRA",
  "facilities": [
    "string"
  ],
  "iata_code": "FRA",
  "id": "string",
  "metro_area_networks": [
    "string"
  ],
  "un_locode": "DE FRA"
}
```

MetroArea

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|The name of the metro area. Likely the same as the IATA code.<br>|
|facilities|[string]|false|none|List of facilities the metro area network.|
|iata_code|string|false|none|The three letter IATA airport code for identiying the<br>metro area.<br>|
|id|string|false|none|none|
|metro_area_networks|[string]|false|none|List of networks in the metro area.|
|un_locode|string|false|none|The UN/LOCODE for identifying the metro area.<br>|

<h2 id="tocS_NetworkFeature">NetworkFeature</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeature"></a>
<a id="schema_NetworkFeature"></a>
<a id="tocSnetworkfeature"></a>
<a id="tocsnetworkfeature"></a>

```json
{
  "address_families": [
    "af_inet"
  ],
  "asn": 0,
  "available_bgp_session_types": [
    "passive"
  ],
  "flags": [
    {
      "description": "RPKI reject invalid filtering is available",
      "name": "RPKI"
    }
  ],
  "fqdn": "rs1.moon-ix.net",
  "id": "string",
  "ip_v4": "23.42.0.1",
  "ip_v6": "2001:23:42::1",
  "looking_glass_url": "https://lg.moon-ix.net/rs1",
  "name": "string",
  "network_service": "string",
  "nfc_required_contact_roles": [
    "string"
  ],
  "required": true,
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeature](#schemarouteservernetworkfeature)|false|none|none|

<h2 id="tocS_NetworkFeatureConfig">NetworkFeatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfig"></a>
<a id="schema_NetworkFeatureConfig"></a>
<a id="tocSnetworkfeatureconfig"></a>
<a id="tocsnetworkfeatureconfig"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

Polymorphic Network Feature Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfig](#schemarouteservernetworkfeatureconfig)|false|none|none|

<h2 id="tocS_NetworkFeatureConfigPartial">NetworkFeatureConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfigpartial"></a>
<a id="schema_NetworkFeatureConfigPartial"></a>
<a id="tocSnetworkfeatureconfigpartial"></a>
<a id="tocsnetworkfeatureconfigpartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

Polymorphic Network Feature Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfigPartial](#schemarouteservernetworkfeatureconfigpartial)|false|none|Route Server Network Feature Config|

<h2 id="tocS_NetworkFeatureConfigRequest">NetworkFeatureConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfigrequest"></a>
<a id="schema_NetworkFeatureConfigRequest"></a>
<a id="tocSnetworkfeatureconfigrequest"></a>
<a id="tocsnetworkfeatureconfigrequest"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feature Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfigRequest](#schemarouteservernetworkfeatureconfigrequest)|false|none|none|

<h2 id="tocS_NetworkFeatureConfigRequestPartial">NetworkFeatureConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfigrequestpartial"></a>
<a id="schema_NetworkFeatureConfigRequestPartial"></a>
<a id="tocSnetworkfeatureconfigrequestpartial"></a>
<a id="tocsnetworkfeatureconfigrequestpartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feature Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfigRequestPartial](#schemarouteservernetworkfeatureconfigrequestpartial)|false|none|Route Server Network Feature Config Request|

<h2 id="tocS_NetworkFeatureConfigUpdate">NetworkFeatureConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfigupdate"></a>
<a id="schema_NetworkFeatureConfigUpdate"></a>
<a id="tocSnetworkfeatureconfigupdate"></a>
<a id="tocsnetworkfeatureconfigupdate"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feauture Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfigUpdate](#schemarouteservernetworkfeatureconfigupdate)|false|none|none|

<h2 id="tocS_NetworkFeatureConfigUpdatePartial">NetworkFeatureConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeatureconfigupdatepartial"></a>
<a id="schema_NetworkFeatureConfigUpdatePartial"></a>
<a id="tocSnetworkfeatureconfigupdatepartial"></a>
<a id="tocsnetworkfeatureconfigupdatepartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feauture Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeatureConfigUpdatePartial](#schemarouteservernetworkfeatureconfigupdatepartial)|false|none|Route Server Network Feature Config Update|

<h2 id="tocS_NetworkFeaturePartial">NetworkFeaturePartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfeaturepartial"></a>
<a id="schema_NetworkFeaturePartial"></a>
<a id="tocSnetworkfeaturepartial"></a>
<a id="tocsnetworkfeaturepartial"></a>

```json
{
  "address_families": [
    "af_inet"
  ],
  "asn": 0,
  "available_bgp_session_types": [
    "passive"
  ],
  "flags": [
    {
      "description": "RPKI reject invalid filtering is available",
      "name": "RPKI"
    }
  ],
  "fqdn": "rs1.moon-ix.net",
  "id": "string",
  "ip_v4": "23.42.0.1",
  "ip_v6": "2001:23:42::1",
  "looking_glass_url": "https://lg.moon-ix.net/rs1",
  "name": "string",
  "network_service": "string",
  "nfc_required_contact_roles": [
    "string"
  ],
  "required": true,
  "session_mode": "public",
  "type": "route_server"
}
```

Polymorphic Network Feature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RouteServerNetworkFeaturePartial](#schemarouteservernetworkfeaturepartial)|false|none|Route Server Network Feature|

<h2 id="tocS_NetworkService">NetworkService</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservice"></a>
<a id="schema_NetworkService"></a>
<a id="tocSnetworkservice"></a>
<a id="tocsnetworkservice"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

Polymorphic Network Services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkService](#schemaexchangelannetworkservice)|false|none|none|
|*oneOf*|[P2PNetworkService](#schemap2pnetworkservice)|false|none|none|
|*oneOf*|[P2MPNetworkService](#schemap2mpnetworkservice)|false|none|none|
|*oneOf*|[MP2MPNetworkService](#schemamp2mpnetworkservice)|false|none|none|
|*oneOf*|[CloudNetworkService](#schemacloudnetworkservice)|false|none|none|

<h2 id="tocS_NetworkServiceChangeRequest">NetworkServiceChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicechangerequest"></a>
<a id="schema_NetworkServiceChangeRequest"></a>
<a id="tocSnetworkservicechangerequest"></a>
<a id="tocsnetworkservicechangerequest"></a>

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer \| null|false|none|The desired capacity of the service in Mbps.<br><br>Must be within the range of `bandwidth_min` and<br>`bandwidth_max` of the `ProductOffering`.<br><br>When `null` the maximum capacity wil be used.|
|product_offering|string|true|none|Migrate to a diffrent product offering. Please note, that<br>the offering only may differ in bandwidth.|

<h2 id="tocS_NetworkServiceChangeRequestPartial">NetworkServiceChangeRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicechangerequestpartial"></a>
<a id="schema_NetworkServiceChangeRequestPartial"></a>
<a id="tocSnetworkservicechangerequestpartial"></a>
<a id="tocsnetworkservicechangerequestpartial"></a>

```json
{
  "capacity": 1,
  "product_offering": "string"
}
```

NetworkServiceChangeRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer \| null|false|none|The desired capacity of the service in Mbps.<br><br>Must be within the range of `bandwidth_min` and<br>`bandwidth_max` of the `ProductOffering`.<br><br>When `null` the maximum capacity wil be used.|
|product_offering|string|false|none|Migrate to a diffrent product offering. Please note, that<br>the offering only may differ in bandwidth.|

<h2 id="tocS_NetworkServiceConfig">NetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfig"></a>
<a id="schema_NetworkServiceConfig"></a>
<a id="tocSnetworkserviceconfig"></a>
<a id="tocsnetworkserviceconfig"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorphic Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfig](#schemaexchangelannetworkserviceconfig)|false|none|none|
|*oneOf*|[P2PNetworkServiceConfig](#schemap2pnetworkserviceconfig)|false|none|none|
|*oneOf*|[P2MPNetworkServiceConfig](#schemap2mpnetworkserviceconfig)|false|none|none|
|*oneOf*|[MP2MPNetworkServiceConfig](#schemamp2mpnetworkserviceconfig)|false|none|none|
|*oneOf*|[CloudNetworkServiceConfig](#schemacloudnetworkserviceconfig)|false|none|none|

<h2 id="tocS_NetworkServiceConfigPartial">NetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfigpartial"></a>
<a id="schema_NetworkServiceConfigPartial"></a>
<a id="tocSnetworkserviceconfigpartial"></a>
<a id="tocsnetworkserviceconfigpartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorphic Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfigPartial](#schemaexchangelannetworkserviceconfigpartial)|false|none|Exchange Lan Network Service Config|
|*oneOf*|[P2PNetworkServiceConfigPartial](#schemap2pnetworkserviceconfigpartial)|false|none|P2P Network Service Config|
|*oneOf*|[P2MPNetworkServiceConfigPartial](#schemap2mpnetworkserviceconfigpartial)|false|none|P2MP Network Service Config|
|*oneOf*|[MP2MPNetworkServiceConfigPartial](#schemamp2mpnetworkserviceconfigpartial)|false|none|MP2MP Network Service Config|
|*oneOf*|[CloudNetworkServiceConfigPartial](#schemacloudnetworkserviceconfigpartial)|false|none|Cloud Network Service Config|

<h2 id="tocS_NetworkServiceConfigRequest">NetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfigrequest"></a>
<a id="schema_NetworkServiceConfigRequest"></a>
<a id="tocSnetworkserviceconfigrequest"></a>
<a id="tocsnetworkserviceconfigrequest"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorhic Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfigRequest](#schemaexchangelannetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[P2PNetworkServiceConfigRequest](#schemap2pnetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[P2MPNetworkServiceConfigRequest](#schemap2mpnetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[MP2MPNetworkServiceConfigRequest](#schemamp2mpnetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[CloudNetworkServiceConfigRequest](#schemacloudnetworkserviceconfigrequest)|false|none|none|

<h2 id="tocS_NetworkServiceConfigRequestPartial">NetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfigrequestpartial"></a>
<a id="schema_NetworkServiceConfigRequestPartial"></a>
<a id="tocSnetworkserviceconfigrequestpartial"></a>
<a id="tocsnetworkserviceconfigrequestpartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorhic Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfigRequestPartial](#schemaexchangelannetworkserviceconfigrequestpartial)|false|none|Exchange Lan Network Service Config Request|
|*oneOf*|[P2PNetworkServiceConfigRequestPartial](#schemap2pnetworkserviceconfigrequestpartial)|false|none|P2P Network Service Config Request|
|*oneOf*|[P2MPNetworkServiceConfigRequestPartial](#schemap2mpnetworkserviceconfigrequestpartial)|false|none|P2MP Network Service Config Request|
|*oneOf*|[MP2MPNetworkServiceConfigRequestPartial](#schemamp2mpnetworkserviceconfigrequestpartial)|false|none|MP2MP Network Service Config Request|
|*oneOf*|[CloudNetworkServiceConfigRequestPartial](#schemacloudnetworkserviceconfigrequestpartial)|false|none|Cloud Network Service Config Request|

<h2 id="tocS_NetworkServiceConfigUpdate">NetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfigupdate"></a>
<a id="schema_NetworkServiceConfigUpdate"></a>
<a id="tocSnetworkserviceconfigupdate"></a>
<a id="tocsnetworkserviceconfigupdate"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorphic Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfigUpdate](#schemaexchangelannetworkserviceconfigupdate)|false|none|none|
|*oneOf*|[P2PNetworkServiceConfigUpdate](#schemap2pnetworkserviceconfigupdate)|false|none|none|
|*oneOf*|[P2MPNetworkServiceConfigRequest](#schemap2mpnetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[MP2MPNetworkServiceConfigRequest](#schemamp2mpnetworkserviceconfigrequest)|false|none|none|
|*oneOf*|[CloudNetworkServiceConfigUpdate](#schemacloudnetworkserviceconfigupdate)|false|none|none|

<h2 id="tocS_NetworkServiceConfigUpdatePartial">NetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkserviceconfigupdatepartial"></a>
<a id="schema_NetworkServiceConfigUpdatePartial"></a>
<a id="tocSnetworkserviceconfigupdatepartial"></a>
<a id="tocsnetworkserviceconfigupdatepartial"></a>

```json
{
  "asns": [
    0
  ],
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "ips": [
    "string"
  ],
  "listed": true,
  "macs": [
    "string"
  ],
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "exchange_lan",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

Polymorphic Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServiceConfigUpdatePartial](#schemaexchangelannetworkserviceconfigupdatepartial)|false|none|Exchange Lan Network Service Config Update|
|*oneOf*|[P2PNetworkServiceConfigUpdatePartial](#schemap2pnetworkserviceconfigupdatepartial)|false|none|P2P Network Service Config Update|
|*oneOf*|[P2MPNetworkServiceConfigRequestPartial](#schemap2mpnetworkserviceconfigrequestpartial)|false|none|P2MP Network Service Config Request|
|*oneOf*|[MP2MPNetworkServiceConfigRequestPartial](#schemamp2mpnetworkserviceconfigrequestpartial)|false|none|MP2MP Network Service Config Request|
|*oneOf*|[CloudNetworkServiceConfigUpdatePartial](#schemacloudnetworkserviceconfigupdatepartial)|false|none|Cloud Network Service Config Update|

<h2 id="tocS_NetworkServiceDeleteResponse">NetworkServiceDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicedeleteresponse"></a>
<a id="schema_NetworkServiceDeleteResponse"></a>
<a id="tocSnetworkservicedeleteresponse"></a>
<a id="tocsnetworkservicedeleteresponse"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc"
}
```

Polymorphic Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[P2PNetworkService](#schemap2pnetworkservice)|false|none|none|
|*oneOf*|[P2MPNetworkService](#schemap2mpnetworkservice)|false|none|none|
|*oneOf*|[MP2MPNetworkService](#schemamp2mpnetworkservice)|false|none|none|
|*oneOf*|[CloudNetworkService](#schemacloudnetworkservice)|false|none|none|

<h2 id="tocS_NetworkServiceDeleteResponsePartial">NetworkServiceDeleteResponsePartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicedeleteresponsepartial"></a>
<a id="schema_NetworkServiceDeleteResponsePartial"></a>
<a id="tocSnetworkservicedeleteresponsepartial"></a>
<a id="tocsnetworkservicedeleteresponsepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc"
}
```

Polymorphic Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[P2PNetworkServicePartial](#schemap2pnetworkservicepartial)|false|none|P2P Network Service|
|*oneOf*|[P2MPNetworkServicePartial](#schemap2mpnetworkservicepartial)|false|none|P2MP Network Service|
|*oneOf*|[MP2MPNetworkServicePartial](#schemamp2mpnetworkservicepartial)|false|none|MP2MP Network Service|
|*oneOf*|[CloudNetworkServicePartial](#schemacloudnetworkservicepartial)|false|none|Cloud Network Service|

<h2 id="tocS_NetworkServicePartial">NetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicepartial"></a>
<a id="schema_NetworkServicePartial"></a>
<a id="tocSnetworkservicepartial"></a>
<a id="tocsnetworkservicepartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "ixfdb_ixid": 0,
  "managing_account": "238189294",
  "metro_area_network": "man:293225:LON2",
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "peeringdb_ixid": 0,
  "product_offering": "string",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "subnet_v4": "23.142.52.0/21",
  "subnet_v6": "2001:23:42::/48",
  "type": "exchange_lan"
}
```

Polymorphic Network Services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkServicePartial](#schemaexchangelannetworkservicepartial)|false|none|Exchange Lan Network Service|
|*oneOf*|[P2PNetworkServicePartial](#schemap2pnetworkservicepartial)|false|none|P2P Network Service|
|*oneOf*|[P2MPNetworkServicePartial](#schemap2mpnetworkservicepartial)|false|none|P2MP Network Service|
|*oneOf*|[MP2MPNetworkServicePartial](#schemamp2mpnetworkservicepartial)|false|none|MP2MP Network Service|
|*oneOf*|[CloudNetworkServicePartial](#schemacloudnetworkservicepartial)|false|none|Cloud Network Service|

<h2 id="tocS_NetworkServiceRequest">NetworkServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicerequest"></a>
<a id="schema_NetworkServiceRequest"></a>
<a id="tocSnetworkservicerequest"></a>
<a id="tocsnetworkservicerequest"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

Polymorphic Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[P2PNetworkServiceRequest](#schemap2pnetworkservicerequest)|false|none|none|
|*oneOf*|[P2MPNetworkServiceRequest](#schemap2mpnetworkservicerequest)|false|none|none|
|*oneOf*|[MP2MPNetworkServiceRequest](#schemamp2mpnetworkservicerequest)|false|none|none|
|*oneOf*|[CloudNetworkServiceRequest](#schemacloudnetworkservicerequest)|false|none|none|

<h2 id="tocS_NetworkServiceRequestPartial">NetworkServiceRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemanetworkservicerequestpartial"></a>
<a id="schema_NetworkServiceRequestPartial"></a>
<a id="tocSnetworkservicerequestpartial"></a>
<a id="tocsnetworkservicerequestpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

Polymorphic Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[P2PNetworkServiceRequestPartial](#schemap2pnetworkservicerequestpartial)|false|none|P2P Network Service Request|
|*oneOf*|[P2MPNetworkServiceRequestPartial](#schemap2mpnetworkservicerequestpartial)|false|none|P2MP Network Service Request|
|*oneOf*|[MP2MPNetworkServiceRequestPartial](#schemamp2mpnetworkservicerequestpartial)|false|none|MP2MP Network Service Request|
|*oneOf*|[CloudNetworkServiceRequestPartial](#schemacloudnetworkservicerequestpartial)|false|none|Cloud Network Service Request|

<h2 id="tocS_Ownable">Ownable</h2>
<!-- backwards compatibility -->
<a id="schemaownable"></a>
<a id="schema_Ownable"></a>
<a id="tocSownable"></a>
<a id="tocsownable"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|

<h2 id="tocS_OwnablePartial">OwnablePartial</h2>
<!-- backwards compatibility -->
<a id="schemaownablepartial"></a>
<a id="schema_OwnablePartial"></a>
<a id="tocSownablepartial"></a>
<a id="tocsownablepartial"></a>

```json
{
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294"
}
```

Ownable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|

<h2 id="tocS_P2MPNetworkProductOffering">P2MPNetworkProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkproductoffering"></a>
<a id="schema_P2MPNetworkProductOffering"></a>
<a id="tocSp2mpnetworkproductoffering"></a>
<a id="tocsp2mpnetworkproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "p2mp_vc",
  "upgrade_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|true|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|true|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|true|none|none|
|downgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|true|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|true|none|none|
|name|string|true|none|Name of the product|
|physical_port_speed|integer \| null|true|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|true|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|true|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|true|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|true|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_P2MPNetworkProductOfferingPartial">P2MPNetworkProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkproductofferingpartial"></a>
<a id="schema_P2MPNetworkProductOfferingPartial"></a>
<a id="tocSp2mpnetworkproductofferingpartial"></a>
<a id="tocsp2mpnetworkproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "p2mp_vc",
  "upgrade_allowed": true
}
```

P2MP Network Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|false|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|false|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|false|none|none|
|downgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|false|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|false|none|none|
|name|string|false|none|Name of the product|
|physical_port_speed|integer \| null|false|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|false|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|false|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|false|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|false|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_P2MPNetworkService">P2MPNetworkService</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkservice"></a>
<a id="schema_P2MPNetworkService"></a>
<a id="tocSp2mpnetworkservice"></a>
<a id="tocsp2mpnetworkservice"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "member_joining_rules": [
    "string"
  ],
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2mp_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|member_joining_rules|[string]|true|none|none|
|name|string|true|none|Name of the point to multi-point virtual circuit.|
|network_features|[string]|true|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|true|none|none|
|public|boolean|false|none|A public p2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made<br>available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2MPNetworkServiceConfig">P2MPNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfig"></a>
<a id="schema_P2MPNetworkServiceConfig"></a>
<a id="tocSp2mpnetworkserviceconfig"></a>
<a id="tocsp2mpnetworkserviceconfig"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2MPNetworkServiceConfigPartial">P2MPNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfigpartial"></a>
<a id="schema_P2MPNetworkServiceConfigPartial"></a>
<a id="tocSp2mpnetworkserviceconfigpartial"></a>
<a id="tocsp2mpnetworkserviceconfigpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2MP Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2MPNetworkServiceConfigRequest">P2MPNetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfigrequest"></a>
<a id="schema_P2MPNetworkServiceConfigRequest"></a>
<a id="tocSp2mpnetworkserviceconfigrequest"></a>
<a id="tocsp2mpnetworkserviceconfigrequest"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|

<h2 id="tocS_P2MPNetworkServiceConfigRequestPartial">P2MPNetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfigrequestpartial"></a>
<a id="schema_P2MPNetworkServiceConfigRequestPartial"></a>
<a id="tocSp2mpnetworkserviceconfigrequestpartial"></a>
<a id="tocsp2mpnetworkserviceconfigrequestpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2MP Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|

<h2 id="tocS_P2MPNetworkServiceConfigUpdate">P2MPNetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfigupdate"></a>
<a id="schema_P2MPNetworkServiceConfigUpdate"></a>
<a id="tocSp2mpnetworkserviceconfigupdate"></a>
<a id="tocsp2mpnetworkserviceconfigupdate"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|

<h2 id="tocS_P2MPNetworkServiceConfigUpdatePartial">P2MPNetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkserviceconfigupdatepartial"></a>
<a id="schema_P2MPNetworkServiceConfigUpdatePartial"></a>
<a id="tocSp2mpnetworkserviceconfigupdatepartial"></a>
<a id="tocsp2mpnetworkserviceconfigupdatepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role": "leaf",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2mp_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2MP Network Service Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role|string|false|none|A `leaf` can only reach roots and is<br>isolated from other leafs. A `root` can<br>reach any other point in the virtual circuit<br>including other roots.|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|root|
|role|leaf|

<h2 id="tocS_P2MPNetworkServicePartial">P2MPNetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkservicepartial"></a>
<a id="schema_P2MPNetworkServicePartial"></a>
<a id="tocSp2mpnetworkservicepartial"></a>
<a id="tocsp2mpnetworkservicepartial"></a>

```json
{
  "billing_account": "string",
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "member_joining_rules": [
    "string"
  ],
  "name": "string",
  "network_features": [
    "string"
  ],
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2mp_vc"
}
```

P2MP Network Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|member_joining_rules|[string]|false|none|none|
|name|string|false|none|Name of the point to multi-point virtual circuit.|
|network_features|[string]|false|none|none|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|false|none|none|
|public|boolean|false|none|A public p2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made<br>available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2MPNetworkServiceRequest">P2MPNetworkServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkservicerequest"></a>
<a id="schema_P2MPNetworkServiceRequest"></a>
<a id="tocSp2mpnetworkservicerequest"></a>
<a id="tocsp2mpnetworkservicerequest"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "string",
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "type": "p2mp_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string|true|none|Name of the point to multi-point virtual circuit.|
|product_offering|string|true|none|none|
|public|boolean|false|none|A public p2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made<br>available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_P2MPNetworkServiceRequestPartial">P2MPNetworkServiceRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2mpnetworkservicerequestpartial"></a>
<a id="schema_P2MPNetworkServiceRequestPartial"></a>
<a id="tocSp2mpnetworkservicerequestpartial"></a>
<a id="tocsp2mpnetworkservicerequestpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "name": "string",
  "product_offering": "string",
  "public": false,
  "purchase_order": "Project: DC Moon",
  "type": "p2mp_vc"
}
```

P2MP Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|name|string|false|none|Name of the point to multi-point virtual circuit.|
|product_offering|string|false|none|none|
|public|boolean|false|none|A public p2mp network service can be joined<br>by everyone on the exchange unless denied by<br>a member-joining-rule.<br><br>Public network services are visible to other<br>members of the IXP, however only `name`, `type`,<br>`product_offering`, `consuming_account` and<br>`managing_account` are made<br>available.<br><br>Other required fields are redacted.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_P2PNetworkProductOffering">P2PNetworkProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkproductoffering"></a>
<a id="schema_P2PNetworkProductOffering"></a>
<a id="tocSp2pnetworkproductoffering"></a>
<a id="tocsp2pnetworkproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "p2p_vc",
  "upgrade_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|true|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|true|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|true|none|none|
|downgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|true|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|true|none|none|
|name|string|true|none|Name of the product|
|physical_port_speed|integer \| null|true|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|true|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|true|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|true|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|true|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|true|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|true|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_P2PNetworkProductOfferingPartial">P2PNetworkProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkproductofferingpartial"></a>
<a id="schema_P2PNetworkProductOfferingPartial"></a>
<a id="tocSp2pnetworkproductofferingpartial"></a>
<a id="tocsp2pnetworkproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "p2p_vc",
  "upgrade_allowed": true
}
```

P2P Network Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bandwidth_max|integer \| null|false|none|When not `null`, this value enforces a mandatory<br>rate limit for all network service configs.|
|bandwidth_min|integer \| null|false|none|When configuring access to the network service, at least<br>this `capacity` must be provided.|
|display_name|string|false|none|none|
|downgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a lower bandwidth.|
|handover_metro_area|string|false|none|Id of the `MetroArea`. The network service will be<br>accessed from this metro area.<br>|
|handover_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`. The service will be accessed<br>through the handover metro area network.<br>|
|id|string|false|none|none|
|name|string|false|none|Name of the product|
|physical_port_speed|integer \| null|false|none|If the service is dependent on the speed of<br>the physical port this field denotes the speed.|
|provider_vlans|string|false|none|The `NetworkService` provides `single` or `multi`ple vlans.|
|resource_type|string|false|none|The resource type refers to an ix-api resource.<br>|
|service_metro_area|string|false|none|Id of the `MetroArea`. The service is delivered<br>in this metro area.<br>|
|service_metro_area_network|string|false|none|Id of the `MetroAreaNetwork`.<br>The service is directly provided on the metro area network.<br>|
|service_provider|string|false|none|The name of the provider providing the service.<br>|
|type|string|true|none|none|
|upgrade_allowed|boolean|false|none|Indicates if the service can be migrated to<br>a higher bandwidth.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_vlans|single|
|provider_vlans|multi|
|resource_type|connection|
|resource_type|demarc|
|resource_type|network_service|
|resource_type|network_service_config|

<h2 id="tocS_P2PNetworkService">P2PNetworkService</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkservice"></a>
<a id="schema_P2PNetworkService"></a>
<a id="tocSp2pnetworkservice"></a>
<a id="tocsp2pnetworkservice"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|joining_member_account|string|true|none|The account of the B-side member joining the virtual circuit.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|true|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2PNetworkServiceConfig">P2PNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfig"></a>
<a id="schema_P2PNetworkServiceConfig"></a>
<a id="tocSp2pnetworkserviceconfig"></a>
<a id="tocsp2pnetworkserviceconfig"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2PNetworkServiceConfigPartial">P2PNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfigpartial"></a>
<a id="schema_P2PNetworkServiceConfigPartial"></a>
<a id="tocSp2pnetworkserviceconfigpartial"></a>
<a id="tocsp2pnetworkserviceconfigpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2P Network Service Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the configured network service.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2PNetworkServiceConfigRequest">P2PNetworkServiceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfigrequest"></a>
<a id="schema_P2PNetworkServiceConfigRequest"></a>
<a id="tocSp2pnetworkserviceconfigrequest"></a>
<a id="tocsp2pnetworkserviceconfigrequest"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|true|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_P2PNetworkServiceConfigRequestPartial">P2PNetworkServiceConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfigrequestpartial"></a>
<a id="schema_P2PNetworkServiceConfigRequestPartial"></a>
<a id="tocSp2pnetworkserviceconfigrequestpartial"></a>
<a id="tocsp2pnetworkserviceconfigrequestpartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "network_service": "string",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2P Network Service Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|network_service|string|false|none|The id of the `NetworkService` to configure.|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_P2PNetworkServiceConfigUpdate">P2PNetworkServiceConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfigupdate"></a>
<a id="schema_P2PNetworkServiceConfigUpdate"></a>
<a id="tocSp2pnetworkserviceconfigupdate"></a>
<a id="tocsp2pnetworkserviceconfigupdate"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|true|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|true|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_P2PNetworkServiceConfigUpdatePartial">P2PNetworkServiceConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkserviceconfigupdatepartial"></a>
<a id="schema_P2PNetworkServiceConfigUpdatePartial"></a>
<a id="tocSp2pnetworkserviceconfigupdatepartial"></a>
<a id="tocsp2pnetworkserviceconfigupdatepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "network_feature_configs": [
    "12356",
    "43829"
  ],
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "type": "p2p_vc",
  "vlan_config": {
    "vlan": 23,
    "vlan_ethertype": "0x8100",
    "vlan_type": "dot1q"
  }
}
```

P2P Network Service Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|
|connection|string|false|none|The id of the connection to use for this `NetworkServiceConfig`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|network_feature_configs|[string]|false|read-only|A list of ids of `NetworkFeatureConfig`s.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|type|string|true|none|none|
|vlan_config|[VlanConfig](#schemavlanconfig)|false|none|The vlan configuration defines how the service<br>is made available on the connection.|

<h2 id="tocS_P2PNetworkServicePartial">P2PNetworkServicePartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkservicepartial"></a>
<a id="schema_P2PNetworkServicePartial"></a>
<a id="tocSp2pnetworkservicepartial"></a>
<a id="tocsp2pnetworkservicepartial"></a>

```json
{
  "billing_account": "string",
  "capacity": 1,
  "charged_until": "1970-01-01",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "decommission_at": "1970-01-01",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "nsc_required_contact_roles": [
    "string"
  ],
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "p2p_vc"
}
```

P2P Network Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. When null,<br>the maximum capacity will be used.|
|charged_until|string(date)|false|none|Your obligation to pay for the service will end on this date.<br>Typically `≥ decommission_at`.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|decommission_at|string(date)|false|none|The service will be decommissioned on this date.<br><br>This field is only used when<br>the state is `DECOMMISSION_REQUESTED` or<br>`DECOMMISSIONED`.|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|joining_member_account|string|false|none|The account of the B-side member joining the virtual circuit.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|nsc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The `RoleAssignment` is associated through the<br>`role_assignments` list property of the network service configuration.|
|product_offering|string|false|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_P2PNetworkServiceRequest">P2PNetworkServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkservicerequest"></a>
<a id="schema_P2PNetworkServiceRequest"></a>
<a id="tocSp2pnetworkservicerequest"></a>
<a id="tocsp2pnetworkservicerequest"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|joining_member_account|string|true|none|The account of the B-side member joining the virtual circuit.<br>|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|product_offering|string|true|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_P2PNetworkServiceRequestPartial">P2PNetworkServiceRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemap2pnetworkservicerequestpartial"></a>
<a id="schema_P2PNetworkServiceRequestPartial"></a>
<a id="tocSp2pnetworkservicerequestpartial"></a>
<a id="tocsp2pnetworkservicerequestpartial"></a>

```json
{
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "joining_member_account": "231829",
  "managing_account": "238189294",
  "product_offering": "string",
  "purchase_order": "Project: DC Moon",
  "type": "p2p_vc"
}
```

P2P Network Service Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|joining_member_account|string|false|none|The account of the B-side member joining the virtual circuit.<br>|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|product_offering|string|false|none|none|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|type|string|true|none|none|

<h2 id="tocS_PointOfPresence">PointOfPresence</h2>
<!-- backwards compatibility -->
<a id="schemapointofpresence"></a>
<a id="schema_PointOfPresence"></a>
<a id="tocSpointofpresence"></a>
<a id="tocspointofpresence"></a>

```json
{
  "devices": [
    "string"
  ],
  "facility": "string",
  "id": "string",
  "metro_area_network": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[string]|true|none|none|
|facility|string|true|none|none|
|id|string|true|none|none|
|metro_area_network|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_PointOfPresencePartial">PointOfPresencePartial</h2>
<!-- backwards compatibility -->
<a id="schemapointofpresencepartial"></a>
<a id="schema_PointOfPresencePartial"></a>
<a id="tocSpointofpresencepartial"></a>
<a id="tocspointofpresencepartial"></a>

```json
{
  "devices": [
    "string"
  ],
  "facility": "string",
  "id": "string",
  "metro_area_network": "string",
  "name": "string"
}
```

Point Of Presence

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[string]|false|none|none|
|facility|string|false|none|none|
|id|string|false|none|none|
|metro_area_network|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "device": "device:29139871",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "media_type": "10GBASE-LR",
  "name": "",
  "pop": "pop:2913",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|device|string|true|none|The device the port.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|media_type|string|true|none|The media type of the port.<br>Query the device's capabilities for available types.<br>|
|name|string|false|read-only|Name of the port (set by the exchange)|
|pop|string|true|none|Same as the `pop` of the `device`.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_PortPartial">PortPartial</h2>
<!-- backwards compatibility -->
<a id="schemaportpartial"></a>
<a id="schema_PortPartial"></a>
<a id="tocSportpartial"></a>
<a id="tocsportpartial"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "device": "device:29139871",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "managing_account": "238189294",
  "media_type": "10GBASE-LR",
  "name": "",
  "pop": "pop:2913",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0,
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Port

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|device|string|false|none|The device the port.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|media_type|string|false|none|The media type of the port.<br>Query the device's capabilities for available types.<br>|
|name|string|false|read-only|Name of the port (set by the exchange)|
|pop|string|false|none|Same as the `pop` of the `device`.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_PortRequest">PortRequest</h2>
<!-- backwards compatibility -->
<a id="schemaportrequest"></a>
<a id="schema_PortRequest"></a>
<a id="tocSportrequest"></a>
<a id="tocsportrequest"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "media_type": "10GBASE-LR",
  "pop": "pop:2913",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|media_type|string|true|none|The media type of the interface.<br>See the device's capabilities to see what types<br>are available.<br>|
|pop|string|true|none|Same as the `pop` of the `device`.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|

<h2 id="tocS_PortRequestPartial">PortRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaportrequestpartial"></a>
<a id="schema_PortRequestPartial"></a>
<a id="tocSportrequestpartial"></a>
<a id="tocsportrequestpartial"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "media_type": "10GBASE-LR",
  "pop": "pop:2913",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0
}
```

Port Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|media_type|string|false|none|The media type of the interface.<br>See the device's capabilities to see what types<br>are available.<br>|
|pop|string|false|none|Same as the `pop` of the `device`.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|

<h2 id="tocS_PortUpdate">PortUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaportupdate"></a>
<a id="schema_PortUpdate"></a>
<a id="tocSportupdate"></a>
<a id="tocsportupdate"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|

<h2 id="tocS_PortUpdatePartial">PortUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaportupdatepartial"></a>
<a id="schema_PortUpdatePartial"></a>
<a id="tocSportupdatepartial"></a>
<a id="tocsportupdatepartial"></a>

```json
{
  "billing_account": "string",
  "connection": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "managing_account": "238189294",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "speed": 0
}
```

Port Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|connection|string \| null|false|none|none|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|speed|integer \| null|false|read-only|none|

<h2 id="tocS_ProblemResponse">ProblemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproblemresponse"></a>
<a id="schema_ProblemResponse"></a>
<a id="tocSproblemresponse"></a>
<a id="tocsproblemresponse"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 100,
  "title": "Some fields have validation errors.",
  "type": "about:blank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|true|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|

<h2 id="tocS_ProblemResponsePartial">ProblemResponsePartial</h2>
<!-- backwards compatibility -->
<a id="schemaproblemresponsepartial"></a>
<a id="schema_ProblemResponsePartial"></a>
<a id="tocSproblemresponsepartial"></a>
<a id="tocsproblemresponsepartial"></a>

```json
{
  "detail": "string",
  "instance": "string",
  "status": 100,
  "title": "Some fields have validation errors.",
  "type": "about:blank"
}
```

Encodes a problem into an appropriate response body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this<br>occurrence of the problem.|
|instance|string|false|none|A URI reference that identifies the specific<br>occurrence of the problem.  It may or may not yield<br>further information if dereferenced.|
|status|integer|false|none|The HTTP status code ([RFC7231], Section 6)<br>generated by the origin server for this occurrence<br>of the problem.|
|title|string|false|none|A short, human-readable summary of the problem type.<br><br>It SHOULD NOT change from occurrence to<br>occurrence of the problem, except for purposes<br>of localization (e.g., using proactive content<br>negotiation; see [RFC7231], Section 3.4).<br>|
|type|string|false|none|A URI reference (see RFC3986) that identifies the<br>problem type.<br><br>This specification encourages that, when<br>dereferenced, it provide human-readable documentation<br>for the problem type (e.g., using HTML<br>[W3C.REC-html5-20141028]).<br><br>When this member is not present, its value is assumed<br>to be "about:blank".<br>|

<h2 id="tocS_ProductOffering">ProductOffering</h2>
<!-- backwards compatibility -->
<a id="schemaproductoffering"></a>
<a id="schema_ProductOffering"></a>
<a id="tocSproductoffering"></a>
<a id="tocsproductoffering"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "exchange_lan_network_service": "string",
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "exchange_lan",
  "upgrade_allowed": true
}
```

Polymorphic Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkProductOffering](#schemaexchangelannetworkproductoffering)|false|none|none|
|*oneOf*|[P2PNetworkProductOffering](#schemap2pnetworkproductoffering)|false|none|none|
|*oneOf*|[MP2MPNetworkProductOffering](#schemamp2mpnetworkproductoffering)|false|none|none|
|*oneOf*|[P2MPNetworkProductOffering](#schemap2mpnetworkproductoffering)|false|none|none|
|*oneOf*|[CloudNetworkProductOffering](#schemacloudnetworkproductoffering)|false|none|none|

<h2 id="tocS_ProductOfferingPartial">ProductOfferingPartial</h2>
<!-- backwards compatibility -->
<a id="schemaproductofferingpartial"></a>
<a id="schema_ProductOfferingPartial"></a>
<a id="tocSproductofferingpartial"></a>
<a id="tocsproductofferingpartial"></a>

```json
{
  "bandwidth_max": 0,
  "bandwidth_min": 0,
  "display_name": "string",
  "downgrade_allowed": true,
  "exchange_lan_network_service": "string",
  "handover_metro_area": "met:29381993:NYC",
  "handover_metro_area_network": "191239810",
  "id": "string",
  "name": "string",
  "physical_port_speed": 0,
  "provider_vlans": "single",
  "resource_type": "network_service",
  "service_metro_area": "met:213913485:LON",
  "service_metro_area_network": "9123843",
  "service_provider": "AWS",
  "type": "exchange_lan",
  "upgrade_allowed": true
}
```

Polymorphic Product Offering

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeLanNetworkProductOfferingPartial](#schemaexchangelannetworkproductofferingpartial)|false|none|Exchange Lan Network Product Offering|
|*oneOf*|[P2PNetworkProductOfferingPartial](#schemap2pnetworkproductofferingpartial)|false|none|P2P Network Product Offering|
|*oneOf*|[MP2MPNetworkProductOfferingPartial](#schemamp2mpnetworkproductofferingpartial)|false|none|MP2MP Network Product Offering|
|*oneOf*|[P2MPNetworkProductOfferingPartial](#schemap2mpnetworkproductofferingpartial)|false|none|P2MP Network Product Offering|
|*oneOf*|[CloudNetworkProductOfferingPartial](#schemacloudnetworkproductofferingpartial)|false|none|Cloud Network Product Offering|

<h2 id="tocS_RateLimitedNetworkServiceConfig">RateLimitedNetworkServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitednetworkserviceconfig"></a>
<a id="schema_RateLimitedNetworkServiceConfig"></a>
<a id="tocSratelimitednetworkserviceconfig"></a>
<a id="tocsratelimitednetworkserviceconfig"></a>

```json
{
  "capacity": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|

<h2 id="tocS_RateLimitedNetworkServiceConfigPartial">RateLimitedNetworkServiceConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitednetworkserviceconfigpartial"></a>
<a id="schema_RateLimitedNetworkServiceConfigPartial"></a>
<a id="tocSratelimitednetworkserviceconfigpartial"></a>
<a id="tocsratelimitednetworkserviceconfigpartial"></a>

```json
{
  "capacity": 1
}
```

Rate limited network services include a capacity
property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer \| null|false|none|The capacity of the service in Mbps. If set to Null,<br>the maximum capacity will be used, i.e. the virtual circuit is<br>not rate-limited.<br><br>An exchange may choose to constrain the available capacity range<br>of a `ProductOffering`.<br><br>That means, the service can consume up to the total bandwidth<br>of the `Connection`.<br><br>Typically the service is charged based on the capacity.|

<h2 id="tocS_RefreshTokenRequest">RefreshTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokenrequest"></a>
<a id="schema_RefreshTokenRequest"></a>
<a id="tocSrefreshtokenrequest"></a>
<a id="tocsrefreshtokenrequest"></a>

```json
{
  "refresh_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|true|none|none|

<h2 id="tocS_RefreshTokenRequestPartial">RefreshTokenRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtokenrequestpartial"></a>
<a id="schema_RefreshTokenRequestPartial"></a>
<a id="tocSrefreshtokenrequestpartial"></a>
<a id="tocsrefreshtokenrequestpartial"></a>

```json
{
  "refresh_token": "string"
}
```

RefreshTokenRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|false|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "id": "string",
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|The name of the role.<br>|
|required_fields|[string]|true|none|A list of required field names.<br>|

<h2 id="tocS_RoleAssignment">RoleAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignment"></a>
<a id="schema_RoleAssignment"></a>
<a id="tocSroleassignment"></a>
<a id="tocsroleassignment"></a>

```json
{
  "contact": "contact:42b",
  "id": "string",
  "role": "role:23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|true|none|The `id` of a contact the role is assigned to.<br>|
|id|string|true|none|none|
|role|string|true|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RoleAssignmentPartial">RoleAssignmentPartial</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignmentpartial"></a>
<a id="schema_RoleAssignmentPartial"></a>
<a id="tocSroleassignmentpartial"></a>
<a id="tocsroleassignmentpartial"></a>

```json
{
  "contact": "contact:42b",
  "id": "string",
  "role": "role:23"
}
```

A role assignment for a contact

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|false|none|The `id` of a contact the role is assigned to.<br>|
|id|string|false|none|none|
|role|string|false|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RoleAssignmentRequest">RoleAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignmentrequest"></a>
<a id="schema_RoleAssignmentRequest"></a>
<a id="tocSroleassignmentrequest"></a>
<a id="tocsroleassignmentrequest"></a>

```json
{
  "contact": "contact:42b",
  "role": "role:23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|true|none|The `id` of a contact the role is assigned to.<br>|
|role|string|true|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RoleAssignmentRequestPartial">RoleAssignmentRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignmentrequestpartial"></a>
<a id="schema_RoleAssignmentRequestPartial"></a>
<a id="tocSroleassignmentrequestpartial"></a>
<a id="tocsroleassignmentrequestpartial"></a>

```json
{
  "contact": "contact:42b",
  "role": "role:23"
}
```

A role assignment request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|false|none|The `id` of a contact the role is assigned to.<br>|
|role|string|false|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RoleAssignmentUpdate">RoleAssignmentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignmentupdate"></a>
<a id="schema_RoleAssignmentUpdate"></a>
<a id="tocSroleassignmentupdate"></a>
<a id="tocsroleassignmentupdate"></a>

```json
{
  "contact": "contact:42b",
  "role": "role:23"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|true|none|The `id` of a contact the role is assigned to.<br>|
|role|string|true|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RoleAssignmentUpdatePartial">RoleAssignmentUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaroleassignmentupdatepartial"></a>
<a id="schema_RoleAssignmentUpdatePartial"></a>
<a id="tocSroleassignmentupdatepartial"></a>
<a id="tocsroleassignmentupdatepartial"></a>

```json
{
  "contact": "contact:42b",
  "role": "role:23"
}
```

A role assignemnt update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|false|none|The `id` of a contact the role is assigned to.<br>|
|role|string|false|none|The `id` of a role the contact is assigned to.<br>|

<h2 id="tocS_RolePartial">RolePartial</h2>
<!-- backwards compatibility -->
<a id="schemarolepartial"></a>
<a id="schema_RolePartial"></a>
<a id="tocSrolepartial"></a>
<a id="tocsrolepartial"></a>

```json
{
  "id": "string",
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

A role for a contact

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|The name of the role.<br>|
|required_fields|[string]|false|none|A list of required field names.<br>|

<h2 id="tocS_RoleRequest">RoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemarolerequest"></a>
<a id="schema_RoleRequest"></a>
<a id="tocSrolerequest"></a>
<a id="tocsrolerequest"></a>

```json
{
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role.<br>|
|required_fields|[string]|true|none|A list of required field names.<br>|

<h2 id="tocS_RoleRequestPartial">RoleRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemarolerequestpartial"></a>
<a id="schema_RoleRequestPartial"></a>
<a id="tocSrolerequestpartial"></a>
<a id="tocsrolerequestpartial"></a>

```json
{
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

A new role

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the role.<br>|
|required_fields|[string]|false|none|A list of required field names.<br>|

<h2 id="tocS_RoleUpdate">RoleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaroleupdate"></a>
<a id="schema_RoleUpdate"></a>
<a id="tocSroleupdate"></a>
<a id="tocsroleupdate"></a>

```json
{
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role.<br>|
|required_fields|[string]|true|none|A list of required field names.<br>|

<h2 id="tocS_RoleUpdatePartial">RoleUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemaroleupdatepartial"></a>
<a id="schema_RoleUpdatePartial"></a>
<a id="tocSroleupdatepartial"></a>
<a id="tocsroleupdatepartial"></a>

```json
{
  "name": "noc",
  "required_fields": [
    "name",
    "email"
  ]
}
```

A role update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the role.<br>|
|required_fields|[string]|false|none|A list of required field names.<br>|

<h2 id="tocS_RouteServerNetworkFeature">RouteServerNetworkFeature</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeature"></a>
<a id="schema_RouteServerNetworkFeature"></a>
<a id="tocSrouteservernetworkfeature"></a>
<a id="tocsrouteservernetworkfeature"></a>

```json
{
  "address_families": [
    "af_inet"
  ],
  "asn": 0,
  "available_bgp_session_types": [
    "passive"
  ],
  "flags": [
    {
      "description": "RPKI reject invalid filtering is available",
      "name": "RPKI"
    }
  ],
  "fqdn": "rs1.moon-ix.net",
  "id": "string",
  "ip_v4": "23.42.0.1",
  "ip_v6": "2001:23:42::1",
  "looking_glass_url": "https://lg.moon-ix.net/rs1",
  "name": "string",
  "network_service": "string",
  "nfc_required_contact_roles": [
    "string"
  ],
  "required": true,
  "session_mode": "public",
  "type": "route_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_families|[string]|true|none|When creating a route server feature config, remember<br>to specify which address family or families to use:<br><br>If the route server network feature only supports `af_inet`,<br>then the `as_set_v4` in the network feature config is required.<br><br>If only `af_inet6` is supported, then the `as_set_v6` is required.<br><br>If both `af_inet` and `af_inet6` are supported, either<br>`as_set_v4` or `as_set_v6` is required, but both can be provided<br>in the network service config.<br>|
|asn|integer|true|none|none|
|available_bgp_session_types|[string]|true|none|The route server provides the following session modes.<br>|
|flags|[[IXPSpecificFeatureFlag](#schemaixpspecificfeatureflag)]|true|none|A list of IXP specific feature flags. This can be used<br>to see if e.g. RPKI hard filtering is available.|
|fqdn|string|true|none|The FQDN of the route server.<br>|
|id|string|true|none|none|
|ip_v4|string|true|none|IPv4 address in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>notation.<br>|
|ip_v6|string|true|none|IPv6 address in hexadecimal colon separated notation.<br>|
|looking_glass_url|string|false|none|The url of the looking glass.<br>|
|name|string|true|none|none|
|network_service|string|true|none|none|
|nfc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The role assignments is associated with the network feature<br>config through the `role_assignments` list property.|
|required|boolean|true|none|none|
|session_mode|string|true|none|When creating a route server feature config, remember<br>to specify the same session_mode as the route server.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|address_families|af_inet|
|address_families|af_inet6|
|available_bgp_session_types|active|
|available_bgp_session_types|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_RouteServerNetworkFeatureConfig">RouteServerNetworkFeatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfig"></a>
<a id="schema_RouteServerNetworkFeatureConfig"></a>
<a id="tocSrouteservernetworkfeatureconfig"></a>
<a id="tocsrouteservernetworkfeatureconfig"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|true|none|The ASN of the peer.<br>|
|bgp_session_type|string|true|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|true|none|none|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|true|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|network_feature|string|true|none|none|
|network_service_config|string|true|none|none|
|password|string|false|none|The cleartext BGP session password|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|session_mode|string|true|none|Set the session mode with the routeserver.<br>|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_RouteServerNetworkFeatureConfigPartial">RouteServerNetworkFeatureConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfigpartial"></a>
<a id="schema_RouteServerNetworkFeatureConfigPartial"></a>
<a id="tocSrouteservernetworkfeatureconfigpartial"></a>
<a id="tocsrouteservernetworkfeatureconfigpartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "id": "string",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "type": "route_server"
}
```

Route Server Network Feature Config

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|false|none|The ASN of the peer.<br>|
|bgp_session_type|string|false|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|id|string|false|none|none|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|false|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|network_feature|string|false|none|none|
|network_service_config|string|false|none|none|
|password|string|false|none|The cleartext BGP session password|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|session_mode|string|false|none|Set the session mode with the routeserver.<br>|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_RouteServerNetworkFeatureConfigRequest">RouteServerNetworkFeatureConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfigrequest"></a>
<a id="schema_RouteServerNetworkFeatureConfigRequest"></a>
<a id="tocSrouteservernetworkfeatureconfigrequest"></a>
<a id="tocsrouteservernetworkfeatureconfigrequest"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "type": "route_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|true|none|The ASN of the peer.<br>|
|bgp_session_type|string|true|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|billing_account|string|true|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|true|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|network_feature|string|true|none|none|
|network_service_config|string|true|none|none|
|password|string|false|none|The cleartext BGP session password|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|true|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|session_mode|string|true|none|Set the session mode with the routeserver.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_RouteServerNetworkFeatureConfigRequestPartial">RouteServerNetworkFeatureConfigRequestPartial</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfigrequestpartial"></a>
<a id="schema_RouteServerNetworkFeatureConfigRequestPartial"></a>
<a id="tocSrouteservernetworkfeatureconfigrequestpartial"></a>
<a id="tocsrouteservernetworkfeatureconfigrequestpartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "billing_account": "string",
  "consuming_account": "2381982",
  "contract_ref": "contract:31824",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "network_feature": "string",
  "network_service_config": "string",
  "password": "bgp-session-test-23",
  "purchase_order": "Project: DC Moon",
  "role_assignments": [
    "c-impl:123",
    "c-noc:331"
  ],
  "session_mode": "public",
  "type": "route_server"
}
```

Route Server Network Feature Config Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|false|none|The ASN of the peer.<br>|
|bgp_session_type|string|false|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|billing_account|string|false|none|An account requires billing_information to be used as a `billing_account`.|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|contract_ref|string \| null|false|none|A reference to a contract. If no specific contract is used, a default<br>MAY be chosen by the implementer.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|false|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|network_feature|string|false|none|none|
|network_service_config|string|false|none|none|
|password|string|false|none|The cleartext BGP session password|
|purchase_order|string|false|none|Purchase Order ID which will be displayed on the invoice.<br>|
|role_assignments|[string]|false|none|A set of `RoleAssignment`s. See the documentation<br>on the specific `required_contact_roles`,<br>`nfc_required_contact_roles` or `nsc_required_contact_roles`<br>on what `RoleAssignment`s to provide.<br>|
|session_mode|string|false|none|Set the session mode with the routeserver.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_RouteServerNetworkFeatureConfigUpdate">RouteServerNetworkFeatureConfigUpdate</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfigupdate"></a>
<a id="schema_RouteServerNetworkFeatureConfigUpdate"></a>
<a id="tocSrouteservernetworkfeatureconfigupdate"></a>
<a id="tocsrouteservernetworkfeatureconfigupdate"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|true|none|The ASN of the peer.<br>|
|bgp_session_type|string|true|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|consuming_account|string|true|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|true|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|true|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|password|string|false|none|The cleartext BGP session password|
|session_mode|string|true|none|Set the session mode with the routeserver.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_RouteServerNetworkFeatureConfigUpdatePartial">RouteServerNetworkFeatureConfigUpdatePartial</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeatureconfigupdatepartial"></a>
<a id="schema_RouteServerNetworkFeatureConfigUpdatePartial"></a>
<a id="tocSrouteservernetworkfeatureconfigupdatepartial"></a>
<a id="tocsrouteservernetworkfeatureconfigupdatepartial"></a>

```json
{
  "as_set_v4": "MOON-AS@RIPE",
  "as_set_v6": "MOON-AS@RIPE",
  "asn": 4200000023,
  "bgp_session_type": "passive",
  "consuming_account": "2381982",
  "external_ref": "IX:Service:23042",
  "insert_ixp_asn": true,
  "ip": "string",
  "managing_account": "238189294",
  "max_prefix_v4": 5000,
  "max_prefix_v6": 5000,
  "password": "bgp-session-test-23",
  "session_mode": "public",
  "type": "route_server"
}
```

Route Server Network Feature Config Update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as_set_v4|string \| null|false|none|AS-SET of the customer for IPv4 prefix filtering.<br>This is used to generate filters on the router servers.<br><br>Only valid referenced prefixes within the AS-SET<br>are allowed inbound to the route server. All other routes are<br>filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v6` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|as_set_v6|string \| null|false|none|AS-SET of the customer for IPv6. This is used to generate filters<br>on the router servers. Only valid referenced prefixes within<br>the AS-SET are allowed inbound to the route server.<br>All other routes are filtered.<br><br>This field is *required* if the route server network feature only<br>supports the `af_inet6` address family.<br>If multiple address families are supported, it is optional if the<br>`as_set_v4` is provided.<br><br>Important: The format has to be: "AS-SET@IRR". IRR is the database<br>where the AS-SET is registred. Typically used IRR's are RADB, RIPE,<br>NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC<br>|
|asn|integer(int64)|false|none|The ASN of the peer.<br>|
|bgp_session_type|string|false|none|The session type describes which of the both parties will open the<br>connection. If set to passive, the customer router needs to open<br>the connection. If its set to active, the route server will open<br>the connection. The standard behavior on most exchanges is passive.<br>|
|consuming_account|string|false|none|The `id` of the account consuming a service.<br><br>Used to be `owning_customer`.<br>|
|external_ref|string \| null|false|none|Reference field, free to use for the API user.|
|insert_ixp_asn|boolean|false|none|Insert the ASN of the exchange into the AS path. This function is only<br>used in special cases. In 99% of all cases, it should be false.<br>|
|ip|string|false|none|The BGP session will be established from this IP address.<br>Only IPs assigned to the corresponding network service<br>config can be used.|
|managing_account|string|false|none|The `id` of the account responsible for managing the service via<br>the API. A manager can read and update the state of entities.<br>|
|max_prefix_v4|integer \| null|false|none|Announcing more than `max_prefix` IPv4 prefixes the bgp<br>session will be droped.<br>|
|max_prefix_v6|integer \| null|false|none|Announcing more than `max_prefix` IPv6 prefixes the bgp<br>session will be droped.<br>|
|password|string|false|none|The cleartext BGP session password|
|session_mode|string|false|none|Set the session mode with the routeserver.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bgp_session_type|active|
|bgp_session_type|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_RouteServerNetworkFeaturePartial">RouteServerNetworkFeaturePartial</h2>
<!-- backwards compatibility -->
<a id="schemarouteservernetworkfeaturepartial"></a>
<a id="schema_RouteServerNetworkFeaturePartial"></a>
<a id="tocSrouteservernetworkfeaturepartial"></a>
<a id="tocsrouteservernetworkfeaturepartial"></a>

```json
{
  "address_families": [
    "af_inet"
  ],
  "asn": 0,
  "available_bgp_session_types": [
    "passive"
  ],
  "flags": [
    {
      "description": "RPKI reject invalid filtering is available",
      "name": "RPKI"
    }
  ],
  "fqdn": "rs1.moon-ix.net",
  "id": "string",
  "ip_v4": "23.42.0.1",
  "ip_v6": "2001:23:42::1",
  "looking_glass_url": "https://lg.moon-ix.net/rs1",
  "name": "string",
  "network_service": "string",
  "nfc_required_contact_roles": [
    "string"
  ],
  "required": true,
  "session_mode": "public",
  "type": "route_server"
}
```

Route Server Network Feature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_families|[string]|false|none|When creating a route server feature config, remember<br>to specify which address family or families to use:<br><br>If the route server network feature only supports `af_inet`,<br>then the `as_set_v4` in the network feature config is required.<br><br>If only `af_inet6` is supported, then the `as_set_v6` is required.<br><br>If both `af_inet` and `af_inet6` are supported, either<br>`as_set_v4` or `as_set_v6` is required, but both can be provided<br>in the network service config.<br>|
|asn|integer|false|none|none|
|available_bgp_session_types|[string]|false|none|The route server provides the following session modes.<br>|
|flags|[[IXPSpecificFeatureFlag](#schemaixpspecificfeatureflag)]|false|none|A list of IXP specific feature flags. This can be used<br>to see if e.g. RPKI hard filtering is available.|
|fqdn|string|false|none|The FQDN of the route server.<br>|
|id|string|false|none|none|
|ip_v4|string|false|none|IPv4 address in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation)<br>notation.<br>|
|ip_v6|string|false|none|IPv6 address in hexadecimal colon separated notation.<br>|
|looking_glass_url|string|false|none|The url of the looking glass.<br>|
|name|string|false|none|none|
|network_service|string|false|none|none|
|nfc_required_contact_roles|[string]|false|read-only|The configuration will require at least one of each of the<br>specified roles assigned to contacts.<br><br>The role assignments is associated with the network feature<br>config through the `role_assignments` list property.|
|required|boolean|false|none|none|
|session_mode|string|false|none|When creating a route server feature config, remember<br>to specify the same session_mode as the route server.<br>|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|address_families|af_inet|
|address_families|af_inet6|
|available_bgp_session_types|active|
|available_bgp_session_types|passive|
|session_mode|public|
|session_mode|collector|

<h2 id="tocS_Stateful">Stateful</h2>
<!-- backwards compatibility -->
<a id="schemastateful"></a>
<a id="schema_Stateful"></a>
<a id="tocSstateful"></a>
<a id="tocsstateful"></a>

```json
{
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|true|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_StatefulPartial">StatefulPartial</h2>
<!-- backwards compatibility -->
<a id="schemastatefulpartial"></a>
<a id="schema_StatefulPartial"></a>
<a id="tocSstatefulpartial"></a>
<a id="tocsstatefulpartial"></a>

```json
{
  "state": "requested",
  "status": [
    {
      "attrs": {},
      "message": "string",
      "severity": 2,
      "tag": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A stateful object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|none|
|status|[[Status](#schemastatus)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|requested|
|state|allocated|
|state|testing|
|state|production|
|state|production_change_pending|
|state|decommission_requested|
|state|decommissioned|
|state|archived|
|state|error|
|state|operator|
|state|scheduled|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "attrs": {},
  "message": "string",
  "severity": 2,
  "tag": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attrs|object|true|none|none|
|message|string|true|none|none|
|severity|integer(int32)|true|none|We are using syslog severity levels: 0 = Emergency,<br>1 = Alert, 2 = Critical, 3 = Error, 4 = Warning,<br>5 = Notice, 6 = Informational, 7 = Debug.<br>|
|tag|string|true|none|none|
|timestamp|string(date-time)|true|none|none|

<h2 id="tocS_StatusPartial">StatusPartial</h2>
<!-- backwards compatibility -->
<a id="schemastatuspartial"></a>
<a id="schema_StatusPartial"></a>
<a id="tocSstatuspartial"></a>
<a id="tocsstatuspartial"></a>

```json
{
  "attrs": {},
  "message": "string",
  "severity": 2,
  "tag": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Status Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attrs|object|false|none|none|
|message|string|false|none|none|
|severity|integer(int32)|false|none|We are using syslog severity levels: 0 = Emergency,<br>1 = Alert, 2 = Critical, 3 = Error, 4 = Warning,<br>5 = Notice, 6 = Informational, 7 = Debug.<br>|
|tag|string|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_VLanConfigDot1Q">VLanConfigDot1Q</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigdot1q"></a>
<a id="schema_VLanConfigDot1Q"></a>
<a id="tocSvlanconfigdot1q"></a>
<a id="tocsvlanconfigdot1q"></a>

```json
{
  "vlan": 23,
  "vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vlan|integer(int32)|true|none|A VLAN tag<br>|
|vlan_ethertype|string|false|none|The ethertype of the vlan in hexadecimal notation.|
|vlan_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|vlan_ethertype|0x8100|
|vlan_ethertype|0x88a8|
|vlan_ethertype|0x9100|

<h2 id="tocS_VLanConfigDot1QPartial">VLanConfigDot1QPartial</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigdot1qpartial"></a>
<a id="schema_VLanConfigDot1QPartial"></a>
<a id="tocSvlanconfigdot1qpartial"></a>
<a id="tocsvlanconfigdot1qpartial"></a>

```json
{
  "vlan": 23,
  "vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

A Dot1Q vlan configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vlan|integer(int32)|false|none|A VLAN tag<br>|
|vlan_ethertype|string|false|none|The ethertype of the vlan in hexadecimal notation.|
|vlan_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|vlan_ethertype|0x8100|
|vlan_ethertype|0x88a8|
|vlan_ethertype|0x9100|

<h2 id="tocS_VLanConfigPort">VLanConfigPort</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigport"></a>
<a id="schema_VLanConfigPort"></a>
<a id="tocSvlanconfigport"></a>
<a id="tocsvlanconfigport"></a>

```json
{
  "vlan_type": "port"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vlan_type|string|true|none|none|

<h2 id="tocS_VLanConfigPortPartial">VLanConfigPortPartial</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigportpartial"></a>
<a id="schema_VLanConfigPortPartial"></a>
<a id="tocSvlanconfigportpartial"></a>
<a id="tocsvlanconfigportpartial"></a>

```json
{
  "vlan_type": "port"
}
```

A Port vlan configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vlan_type|string|true|none|none|

<h2 id="tocS_VLanConfigQinQ">VLanConfigQinQ</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigqinq"></a>
<a id="schema_VLanConfigQinQ"></a>
<a id="tocSvlanconfigqinq"></a>
<a id="tocsvlanconfigqinq"></a>

```json
{
  "inner_vlan": 200,
  "outer_vlan": 200,
  "outer_vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inner_vlan|integer(int32)|true|none|The inner VLAN id.<br>|
|outer_vlan|integer(int32)|true|none|The outer VLAN id.<br>|
|outer_vlan_ethertype|string|false|none|The ethertype of the outer tag in hexadecimal notation.|
|vlan_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|outer_vlan_ethertype|0x8100|
|outer_vlan_ethertype|0x88a8|
|outer_vlan_ethertype|0x9100|

<h2 id="tocS_VLanConfigQinQPartial">VLanConfigQinQPartial</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigqinqpartial"></a>
<a id="schema_VLanConfigQinQPartial"></a>
<a id="tocSvlanconfigqinqpartial"></a>
<a id="tocsvlanconfigqinqpartial"></a>

```json
{
  "inner_vlan": 200,
  "outer_vlan": 200,
  "outer_vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

A QinQ vlan configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inner_vlan|integer(int32)|false|none|The inner VLAN id.<br>|
|outer_vlan|integer(int32)|false|none|The outer VLAN id.<br>|
|outer_vlan_ethertype|string|false|none|The ethertype of the outer tag in hexadecimal notation.|
|vlan_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|outer_vlan_ethertype|0x8100|
|outer_vlan_ethertype|0x88a8|
|outer_vlan_ethertype|0x9100|

<h2 id="tocS_VlanConfig">VlanConfig</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfig"></a>
<a id="schema_VlanConfig"></a>
<a id="tocSvlanconfig"></a>
<a id="tocsvlanconfig"></a>

```json
{
  "vlan": 23,
  "vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

The vlan configuration defines how the service
is made available on the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[VLanConfigDot1Q](#schemavlanconfigdot1q)|false|none|none|
|*oneOf*|[VLanConfigQinQ](#schemavlanconfigqinq)|false|none|none|
|*oneOf*|[VLanConfigPort](#schemavlanconfigport)|false|none|none|

<h2 id="tocS_VlanConfigPartial">VlanConfigPartial</h2>
<!-- backwards compatibility -->
<a id="schemavlanconfigpartial"></a>
<a id="schema_VlanConfigPartial"></a>
<a id="tocSvlanconfigpartial"></a>
<a id="tocsvlanconfigpartial"></a>

```json
{
  "vlan": 23,
  "vlan_ethertype": "0x8100",
  "vlan_type": "dot1q"
}
```

The vlan configuration defines how the service
is made available on the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[VLanConfigDot1QPartial](#schemavlanconfigdot1qpartial)|false|none|A Dot1Q vlan configuration|
|*oneOf*|[VLanConfigQinQPartial](#schemavlanconfigqinqpartial)|false|none|A QinQ vlan configuration|
|*oneOf*|[VLanConfigPortPartial](#schemavlanconfigportpartial)|false|none|A Port vlan configuration|
