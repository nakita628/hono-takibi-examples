<h1 id="audit-api">Audit API v1.0.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
_Please note that the Audit API is currently in Beta_

Base URLs:

* <a href="https://api.nexmo.com/beta/audit">https://api.nexmo.com/beta/audit</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="audit-api-default">Default</h1>

## Retrieve audit events

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://api.nexmo.com/events \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /events`

Get a series of audit events describing changes made to your Vonage API account over time.


<h3 id="retrieve-audit-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_type|query|[EventTypes](#schemaeventtypes)|false|Filter results by this event type.|
|date_from|query|string|false|Start of time range for audit events. DateTime in ISO-8601 format.|
|date_to|query|string|false|End of time range for audit events. DateTime in ISO-8601 format.|
|search_text|query|string|false|Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.|
|page|query|string|false|Page number starting with page 1.|
|size|query|integer|false|Number of elements per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event_type|USER_STATUS|
|event_type|USER_UPDATE|
|event_type|USER_BILLING_UPDATE|
|event_type|USER_CREATE|
|event_type|USER_LOGIN|
|event_type|USER_LOGOUT|
|event_type|USER_PRODUCT_SEARCH|
|event_type|USER_API_KEYS_UPDATE|
|event_type|ACCOUNT_SECRET_DELETE|
|event_type|ACCOUNT_SECRET_CREATE|
|event_type|ACCOUNT_UPDATE_SPAMMER|
|event_type|ACCOUNT_UPDATE_SETTINGS_API|
|event_type|NUMBER_ASSIGN|
|event_type|NUMBER_UPDATED|
|event_type|NUMBER_RELEASE|
|event_type|NUMBER_LINKED|
|event_type|NUMBER_UNLINKED|
|event_type|APP_CREATE|
|event_type|APP_UPDATE|
|event_type|APP_DELETE|
|event_type|APP_DISABLE|
|event_type|APP_ENABLE|
|event_type|IP_WHITELIST_CREATE|
|event_type|IP_WHITELIST_DELETE|
|event_type|AUTORELOAD_ENABLE|
|event_type|AUTORELOAD_UPDATE|
|event_type|AUTORELOAD_DISABLE|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "events": [
      {
        "_links": {
          "self": {
            "href": "https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
          }
        },
        "account_id": "abcd1234",
        "context": {
          "created": {
            "accountId": "abcdef01",
            "answer_url": {
              "method": "GET",
              "url": "https://example.org/call"
            },
            "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
            "event_url": {
              "method": "POST",
              "url": "https://example.org/event"
            },
            "name": "My voice app",
            "type": "voice"
          }
        },
        "created_at": "2018-07-04T11:41:32",
        "event_type": "APP_CREATE",
        "event_type_description": "Application created.",
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "source": "CD",
        "source_country": "GB",
        "source_description": "Customer Dashboard",
        "source_ip": "192.0.2.0",
        "user_email": "user@example.org",
        "user_id": 1234567
      }
    ]
  },
  "_links": {
    "last": {
      "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
    },
    "next": {
      "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
    },
    "self": {
      "href": "http://api.nexmo.com/beta/audit/events"
    }
  },
  "page": {
    "number": 1,
    "size": 100,
    "totalElements": 120,
    "totalPages": 2
  }
}
```

> 401 Response

```json
{
  "error": "Unauthorized",
  "message": "Full authentication is required. JWT was not found in \"Authorization\" HTTP header.",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Forbidden",
  "message": "An example goes here",
  "status": 403
}
```

> 404 Response

```json
{
  "error": "Not Found",
  "message": "Event with provided id: aaaaaaaa-bbbb-cccc-dddd-0123456789ab was not found",
  "status": 404
}
```

<h3 id="retrieve-audit-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuditResp](#schemaauditresp)|
|401|Unauthorized|Unauthorized|[ErrorUnauthorized](#schemaerrorunauthorized)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|
|404|Not Found|Not Found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve audit event types

<a id="opIdgetEventsOptions"></a>

> Code samples

```bash
curl https://api.nexmo.com/events \
  -X OPTIONS \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`OPTIONS /events`

Get audit event types.


> Example responses

> 200 Response

```json
{
  "eventTypes": [
    {
      "description": "Application created.",
      "type": "APP_CREATE"
    }
  ]
}
```

> 204 Response

```json
{
  "error": "No Content",
  "message": "No content",
  "status": 204
}
```

> 401 Response

```json
{
  "error": "Unauthorized",
  "message": "Full authentication is required. JWT was not found in \"Authorization\" HTTP header.",
  "status": 401
}
```

> 403 Response

```json
{
  "error": "Forbidden",
  "message": "An example goes here",
  "status": 403
}
```

<h3 id="retrieve-audit-event-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuditEventTypesResp](#schemaauditeventtypesresp)|
|204|No Content|No Content|[NoContent](#schemanocontent)|
|401|Unauthorized|Unauthorized|[ErrorUnauthorized](#schemaerrorunauthorized)|
|403|Forbidden|Forbidden|[ErrorForbidden](#schemaerrorforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Retrieve individual audit event

<a id="opIdgetEvent"></a>

> Code samples

```bash
curl https://api.nexmo.com/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /events/{id}`

Get the specified audit event.


<h3 id="retrieve-individual-audit-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The UUID of the audit event to retrieve|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcd1234",
  "context": {
    "created": {
      "accountId": "abcdef01",
      "answer_url": {
        "method": "GET",
        "url": "https://example.org/call"
      },
      "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "event_url": {
        "method": "POST",
        "url": "https://example.org/event"
      },
      "name": "My voice app",
      "type": "voice"
    }
  },
  "created_at": "2018-07-04T11:41:32",
  "event_type": "APP_CREATE",
  "event_type_description": "Application created.",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "source": "CD",
  "source_country": "GB",
  "source_description": "Customer Dashboard",
  "source_ip": "192.0.2.0",
  "user_email": "user@example.org",
  "user_id": 1234567
}
```

> 401 Response

```json
{
  "error": "Unauthorized",
  "message": "Full authentication is required. JWT was not found in \"Authorization\" HTTP header.",
  "status": 401
}
```

> 404 Response

```json
{
  "error": "Not Found",
  "message": "Event with provided id: aaaaaaaa-bbbb-cccc-dddd-0123456789ab was not found",
  "status": 404
}
```

<h3 id="retrieve-individual-audit-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuditEvent](#schemaauditevent)|
|401|Unauthorized|Unauthorized|[ErrorUnauthorized](#schemaerrorunauthorized)|
|404|Not Found|Not Found|[ErrorNotFound](#schemaerrornotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_AuditEvent">AuditEvent</h2>
<!-- backwards compatibility -->
<a id="schemaauditevent"></a>
<a id="schema_AuditEvent"></a>
<a id="tocSauditevent"></a>
<a id="tocsauditevent"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcd1234",
  "context": {
    "created": {
      "accountId": "abcdef01",
      "answer_url": {
        "method": "GET",
        "url": "https://example.org/call"
      },
      "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "event_url": {
        "method": "POST",
        "url": "https://example.org/event"
      },
      "name": "My voice app",
      "type": "voice"
    }
  },
  "created_at": "2018-07-04T11:41:32",
  "event_type": "APP_CREATE",
  "event_type_description": "Application created.",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "source": "CD",
  "source_country": "GB",
  "source_description": "Customer Dashboard",
  "source_ip": "192.0.2.0",
  "user_email": "user@example.org",
  "user_id": 1234567
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[EventLink](#schemaeventlink)|false|none|A link to this audit event object if you were to retrieve it individually.|
|account_id|string|false|none|The NEXMO_API_KEY of the Vonage API account that the audit event is associated with.|
|context|object|false|none|A valid JSON object with information detailing the context of the audit event.|
|created_at|string(date)|false|none|When the audit event was created.|
|event_type|[EventTypes](#schemaeventtypes)|false|none|The type of the audit event.|
|event_type_description|string|false|none|A description of the event type|
|id|string|false|none|UUID of the audit event|
|source|string|false|none|The source of the event.<br>CD: Customer Dashboard DEVAPI: via Developer API<br>|
|source_country|string|false|none|ISO 3166-1 Alpha-2 country code recorded for the event.|
|source_description|string(A human readable description of the `source`.)|false|none|Description of the audit event source.|
|source_ip|string(ipv4)|false|none|The IP address used to make the account change.|
|user_email|string(email)|false|none|Email of the user whose account the audit event is associated with.|
|user_id|integer|false|none|The ID of the user that the audit event is associated with.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|USER_STATUS|
|event_type|USER_UPDATE|
|event_type|USER_BILLING_UPDATE|
|event_type|USER_CREATE|
|event_type|USER_LOGIN|
|event_type|USER_LOGOUT|
|event_type|USER_PRODUCT_SEARCH|
|event_type|USER_API_KEYS_UPDATE|
|event_type|ACCOUNT_SECRET_DELETE|
|event_type|ACCOUNT_SECRET_CREATE|
|event_type|ACCOUNT_UPDATE_SPAMMER|
|event_type|ACCOUNT_UPDATE_SETTINGS_API|
|event_type|NUMBER_ASSIGN|
|event_type|NUMBER_UPDATED|
|event_type|NUMBER_RELEASE|
|event_type|NUMBER_LINKED|
|event_type|NUMBER_UNLINKED|
|event_type|APP_CREATE|
|event_type|APP_UPDATE|
|event_type|APP_DELETE|
|event_type|APP_DISABLE|
|event_type|APP_ENABLE|
|event_type|IP_WHITELIST_CREATE|
|event_type|IP_WHITELIST_DELETE|
|event_type|AUTORELOAD_ENABLE|
|event_type|AUTORELOAD_UPDATE|
|event_type|AUTORELOAD_DISABLE|
|source|CD|
|source|DEVAPI|
|source_description|Customer Dashboard|
|source_description|Developer API|

<h2 id="tocS_AuditEventType">AuditEventType</h2>
<!-- backwards compatibility -->
<a id="schemaauditeventtype"></a>
<a id="schema_AuditEventType"></a>
<a id="tocSauditeventtype"></a>
<a id="tocsauditeventtype"></a>

```json
{
  "description": "Application created.",
  "type": "APP_CREATE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the event type|
|type|[EventTypes](#schemaeventtypes)|false|none|The type of the audit event.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|USER_STATUS|
|type|USER_UPDATE|
|type|USER_BILLING_UPDATE|
|type|USER_CREATE|
|type|USER_LOGIN|
|type|USER_LOGOUT|
|type|USER_PRODUCT_SEARCH|
|type|USER_API_KEYS_UPDATE|
|type|ACCOUNT_SECRET_DELETE|
|type|ACCOUNT_SECRET_CREATE|
|type|ACCOUNT_UPDATE_SPAMMER|
|type|ACCOUNT_UPDATE_SETTINGS_API|
|type|NUMBER_ASSIGN|
|type|NUMBER_UPDATED|
|type|NUMBER_RELEASE|
|type|NUMBER_LINKED|
|type|NUMBER_UNLINKED|
|type|APP_CREATE|
|type|APP_UPDATE|
|type|APP_DELETE|
|type|APP_DISABLE|
|type|APP_ENABLE|
|type|IP_WHITELIST_CREATE|
|type|IP_WHITELIST_DELETE|
|type|AUTORELOAD_ENABLE|
|type|AUTORELOAD_UPDATE|
|type|AUTORELOAD_DISABLE|

<h2 id="tocS_AuditEventTypesResp">AuditEventTypesResp</h2>
<!-- backwards compatibility -->
<a id="schemaauditeventtypesresp"></a>
<a id="schema_AuditEventTypesResp"></a>
<a id="tocSauditeventtypesresp"></a>
<a id="tocsauditeventtypesresp"></a>

```json
{
  "eventTypes": [
    {
      "description": "Application created.",
      "type": "APP_CREATE"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|[[AuditEventType](#schemaauditeventtype)]|false|none|An array of audit event types.|

<h2 id="tocS_AuditResp">AuditResp</h2>
<!-- backwards compatibility -->
<a id="schemaauditresp"></a>
<a id="schema_AuditResp"></a>
<a id="tocSauditresp"></a>
<a id="tocsauditresp"></a>

```json
{
  "_embedded": {
    "events": [
      {
        "_links": {
          "self": {
            "href": "https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
          }
        },
        "account_id": "abcd1234",
        "context": {
          "created": {
            "accountId": "abcdef01",
            "answer_url": {
              "method": "GET",
              "url": "https://example.org/call"
            },
            "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
            "event_url": {
              "method": "POST",
              "url": "https://example.org/event"
            },
            "name": "My voice app",
            "type": "voice"
          }
        },
        "created_at": "2018-07-04T11:41:32",
        "event_type": "APP_CREATE",
        "event_type_description": "Application created.",
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "source": "CD",
        "source_country": "GB",
        "source_description": "Customer Dashboard",
        "source_ip": "192.0.2.0",
        "user_email": "user@example.org",
        "user_id": 1234567
      }
    ]
  },
  "_links": {
    "last": {
      "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
    },
    "next": {
      "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
    },
    "self": {
      "href": "http://api.nexmo.com/beta/audit/events"
    }
  },
  "page": {
    "number": 1,
    "size": 100,
    "totalElements": 120,
    "totalPages": 2
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|Container containing the `events` array.|
|_links|[PaginationLinks](#schemapaginationlinks)|false|none|Container containing self, next and last page links.|
|page|[PaginationData](#schemapaginationdata)|false|none|Page containing results.|

<h2 id="tocS_CallbackUrl">CallbackUrl</h2>
<!-- backwards compatibility -->
<a id="schemacallbackurl"></a>
<a id="schema_CallbackUrl"></a>
<a id="tocScallbackurl"></a>
<a id="tocscallbackurl"></a>

```json
{
  "method": "GET",
  "url": "https://example.org/my-app-callback"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The HTTP method used to make a callback to your application|
|url|string(url)|false|none|The URL used for a callback to your application|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|

<h2 id="tocS_ContextAppCreate">ContextAppCreate</h2>
<!-- backwards compatibility -->
<a id="schemacontextappcreate"></a>
<a id="schema_ContextAppCreate"></a>
<a id="tocScontextappcreate"></a>
<a id="tocscontextappcreate"></a>

```json
{
  "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "created": {
    "accountId": "abcdef01",
    "answer_url": {
      "method": "GET",
      "url": "https://example.org/my-app-callback"
    },
    "appId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
    "event_url": {
      "method": "GET",
      "url": "https://example.org/my-app-callback"
    },
    "name": "My Voice App",
    "type": "voice"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|UUID of the app that was created|
|created|object|false|none|none|

<h2 id="tocS_ContextNumberLinking">ContextNumberLinking</h2>
<!-- backwards compatibility -->
<a id="schemacontextnumberlinking"></a>
<a id="schema_ContextNumberLinking"></a>
<a id="tocScontextnumberlinking"></a>
<a id="tocscontextnumberlinking"></a>

```json
{
  "account": "abcdef01",
  "applicationId": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "country": "GB",
  "msisdn": "447000123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Which account the number is associated with|
|applicationId|string|false|none|UUID of the app the number is being linked/unlinked to|
|country|string|false|none|The country of the number|
|msisdn|string|false|none|The phone number linked/unlinked to your application|

<h2 id="tocS_ContextNumberUpdate">ContextNumberUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacontextnumberupdate"></a>
<a id="schema_ContextNumberUpdate"></a>
<a id="tocScontextnumberupdate"></a>
<a id="tocscontextnumberupdate"></a>

```json
{
  "country": "string",
  "http": "https://example.org/my-app-callback",
  "msisdn": "447000123456",
  "voice-type": "app",
  "voice-value": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The country of the number|
|http|string(url)|false|none|The URL of the endpoint the number has been forwarded to|
|msisdn|string|false|none|The phone number linked/unlinked to your application|
|voice-type|string|false|none|The type of endpoint the number has been forwarded to|
|voice-value|string|false|none|The value of the endpoint the number has been forwarded to|

#### Enumerated Values

|Property|Value|
|---|---|
|voice-type|tel|
|voice-type|sip|
|voice-type|vxml|
|voice-type|app|

<h2 id="tocS_ErrorBadRequest">ErrorBadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaerrorbadrequest"></a>
<a id="schema_ErrorBadRequest"></a>
<a id="tocSerrorbadrequest"></a>
<a id="tocserrorbadrequest"></a>

```json
{
  "error": "BadRequest",
  "message": "This was a bad request.",
  "status": 400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A human readable description of the error|
|message|string|false|none|A longer description of the error|
|status|integer|false|none|The HTTP Status code of the error|

<h2 id="tocS_ErrorForbidden">ErrorForbidden</h2>
<!-- backwards compatibility -->
<a id="schemaerrorforbidden"></a>
<a id="schema_ErrorForbidden"></a>
<a id="tocSerrorforbidden"></a>
<a id="tocserrorforbidden"></a>

```json
{
  "error": "Forbidden",
  "message": "An example goes here",
  "status": 403
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A human readable description of the error|
|message|string|false|none|A longer description of the error|
|status|integer|false|none|The HTTP Status code of the error|

<h2 id="tocS_ErrorNotFound">ErrorNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaerrornotfound"></a>
<a id="schema_ErrorNotFound"></a>
<a id="tocSerrornotfound"></a>
<a id="tocserrornotfound"></a>

```json
{
  "error": "Not Found",
  "message": "Event with provided id: aaaaaaaa-bbbb-cccc-dddd-0123456789ab was not found",
  "status": 404
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A human readable description of the error XXX|
|message|string|false|none|A longer description of the error YYY|
|status|integer|false|none|The HTTP Status code of the error|

<h2 id="tocS_ErrorUnauthorized">ErrorUnauthorized</h2>
<!-- backwards compatibility -->
<a id="schemaerrorunauthorized"></a>
<a id="schema_ErrorUnauthorized"></a>
<a id="tocSerrorunauthorized"></a>
<a id="tocserrorunauthorized"></a>

```json
{
  "error": "Unauthorized",
  "message": "Full authentication is required. JWT was not found in \"Authorization\" HTTP header.",
  "status": 401
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A human readable description of the error|
|message|string|false|none|A longer description of the error|
|status|integer|false|none|The HTTP Status code of the error|

<h2 id="tocS_EventLink">EventLink</h2>
<!-- backwards compatibility -->
<a id="schemaeventlink"></a>
<a id="schema_EventLink"></a>
<a id="tocSeventlink"></a>
<a id="tocseventlink"></a>

```json
{
  "self": {
    "href": "https://api.nexmo.com/beta/audit/events/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  }
}
```

A link to this audit event object if you were to retrieve it individually.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|false|none|none|

<h2 id="tocS_EventTypes">EventTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypes"></a>
<a id="schema_EventTypes"></a>
<a id="tocSeventtypes"></a>
<a id="tocseventtypes"></a>

```json
"APP_CREATE"
```

The type of the audit event.

<h2 id="tocS_NoContent">NoContent</h2>
<!-- backwards compatibility -->
<a id="schemanocontent"></a>
<a id="schema_NoContent"></a>
<a id="tocSnocontent"></a>
<a id="tocsnocontent"></a>

```json
{
  "error": "No Content",
  "message": "No content",
  "status": 204
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A human readable description of the error AAA|
|message|string|false|none|A longer description of the error BBB|
|status|integer|false|none|The HTTP Status code of the error|

<h2 id="tocS_PaginationData">PaginationData</h2>
<!-- backwards compatibility -->
<a id="schemapaginationdata"></a>
<a id="schema_PaginationData"></a>
<a id="tocSpaginationdata"></a>
<a id="tocspaginationdata"></a>

```json
{
  "number": 1,
  "size": 100,
  "totalElements": 120,
  "totalPages": 2
}
```

Page containing results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|integer|false|none|Which page of the pagination sequence you are looking at.|
|size|integer|false|none|The total number of items in this response (page).|
|totalElements|integer|false|none|The total number of items across all pages.|
|totalPages|integer|false|none|The number of pages of data in the response.|

<h2 id="tocS_PaginationLinks">PaginationLinks</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlinks"></a>
<a id="schema_PaginationLinks"></a>
<a id="tocSpaginationlinks"></a>
<a id="tocspaginationlinks"></a>

```json
{
  "last": {
    "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
  },
  "next": {
    "href": "http://api.nexmo.com/beta/audit/events?page=2&size=30"
  },
  "self": {
    "href": "http://api.nexmo.com/beta/audit/events"
  }
}
```

Container containing self, next and last page links.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last|object|false|none|none|
|next|object|false|none|none|
|self|object|false|none|none|
