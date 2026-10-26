<h1 id="webhooks-management">Webhooks Management v1.11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PayPal REST APIs use <a href="/docs/api/notifications/webhooks/"/>webhooks</a> for event notification. Webhooks are HTTP callbacks that receive notification messages for events. After you configure a webhook listener for your app, you can <a href="#webhooks_create">create a webhook</a>, which subscribes the webhook listener for your app to events. The <code>notifications</code> namespace contains resource collections for webhooks.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/webhooks/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/applications/webhooks|Access/update Webhooks.|
|https://uri.paypal.com/services/applications/verify-webhook-signature|Verify Webhook Signature|

<h1 id="webhooks-management-webhooks">webhooks</h1>

Use the `/webhooks` resource to subscribe your webhook listener to events, list webhooks for an app, show details for, update, delete, and list event subscriptions for webhooks.

## List webhooks

<a id="opIdwebhooks.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks`

Lists webhooks for an app.

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anchor_type|query|string|false|Filters the webhooks in the response by an `anchor_id` entity type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|anchor_type|APPLICATION|
|anchor_type|ACCOUNT|

> Example responses

> 200 Response

```json
{
  "webhooks": [
    {
      "id": "string",
      "url": "http://example.com",
      "event_types": [
        {
          "name": "string",
          "description": "string",
          "status": "string",
          "resource_versions": [
            "string"
          ]
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhooks with webhook details.|[WebhookList](#schemawebhooklist)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Create webhook

<a id="opIdwebhooks.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://example.com/example_webhook",
    "event_types": [
      {
        "name": "PAYMENT.AUTHORIZATION.CREATED"
      },
      {
        "name": "PAYMENT.AUTHORIZATION.VOIDED"
      }
    ]
  }'
```

`POST /v1/notifications/webhooks`

Subscribes your webhook listener to events.

> Body parameter

```json
{
  "url": "https://example.com/example_webhook",
  "event_types": [
    {
      "name": "PAYMENT.AUTHORIZATION.CREATED"
    },
    {
      "name": "PAYMENT.AUTHORIZATION.VOIDED"
    }
  ]
}
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[webhook](#schemawebhook)|false|none|
|» url|body|string(uri)|true|The URL that is configured to listen on `localhost` for incoming `POST` notification messages that contain event information.|
|» event_types|body|[definitions-event_type_list](#schemadefinitions-event_type_list)|true|An array of events to which to subscribe your webhook. To subscribe to all events, including events as they are added, specify the asterisk wild card. To replace the `event_types` array, specify the asterisk wild card. To list all supported events, <a href="#event-type_list">list available events</a>.|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "url": "http://example.com",
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body with a [`webhook`](/docs/api/webhooks/v1/#definition-webhook) object that includes the webhook ID for later use.|[webhook](#schemawebhook)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Show webhook details

<a id="opIdwebhooks.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks/{webhook_id}`

Shows details for a webhook, by ID.

<h3 id="show-webhook-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string|true|The ID of the webhook for which to list subscriptions.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "url": "http://example.com",
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-webhook-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook details.|[webhook](#schemawebhook)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Delete webhook

<a id="opIdwebhooks.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/notifications/webhooks/{webhook_id}`

Deletes a webhook, by ID.

<h3 id="delete-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string|true|The ID of the webhook for which to list subscriptions.|

> Example responses

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="delete-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Update webhook

<a id="opIdwebhooks.update"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "op": "add",
      "path": "string",
      "value": 0,
      "from": "string"
    }
  ]'
```

`PATCH /v1/notifications/webhooks/{webhook_id}`

Updates a webhook to replace webhook fields with new values. Supports only the `replace` operation. Pass a `json_patch` object with `replace` operation and `path`, which is `/url` for a URL or `/event_types` for events. The `value` is either the URL or a list of events.

> Body parameter

```json
[
  {
    "op": "add",
    "path": "string",
    "value": 0,
    "from": "string"
  }
]
```

<h3 id="update-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string|true|The ID of the webhook for which to list subscriptions.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "url": "http://example.com",
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="update-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook details.|[webhook](#schemawebhook)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## List event subscriptions for webhook

<a id="opIdevent-types.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks/string/event-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks/{webhook_id}/event-types`

Lists event subscriptions for a webhook, by ID.

<h3 id="list-event-subscriptions-for-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_id|path|string|true|The ID of the webhook for which to list subscriptions.|

> Example responses

> 200 Response

```json
{
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-event-subscriptions-for-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists event subscriptions for a webhook.|[EventTypeList](#schemaeventtypelist)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

<h1 id="webhooks-management-webhooks-lookup">webhooks-lookup</h1>

Use the `/webhooks-lookup` resource to create, list, show details for, and delete webhook lookups.

## List webhook lookups

<a id="opIdwebhooks-lookup.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks-lookup`

Lists webhook lookups.

> Example responses

> 200 Response

```json
{
  "webhooks_lookups": [
    {
      "id": "string",
      "client_id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-webhook-lookups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhook lookups with webhook lookup details.|[WebhookLookupList](#schemawebhooklookuplist)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Create webhook lookup

<a id="opIdwebhooks-lookup.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-lookup \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/notifications/webhooks-lookup`

Creates a webhook lookup. A webhook lookup ties the API caller's REST API app to the subject account (or, if no subject is specified, to the API caller's account). If a webhook event is generated for an event that is tied to the account but not to a particular REST API app (for example, payments initiated with the NVP/SOAP APIs or through the user interface on PayPal.com), those webhook events will treated as if they were intended for the REST API app registered in the webhook lookup instead. Webhook events will then be delivered to any webhooks registered to that REST API app.

> Example responses

> 201 Response

```json
{
  "id": "string",
  "client_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="create-webhook-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body that shows webhook lookup details.|[webhooks_lookup](#schemawebhooks_lookup)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Show webhook lookup details

<a id="opIdwebhooks-lookup.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-lookup/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks-lookup/{webhook_lookup_id}`

Shows details for a webhook lookup, by ID.

<h3 id="show-webhook-lookup-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_lookup_id|path|string|true|The ID of the webhook lookup to delete.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "client_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-webhook-lookup-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhook lookup details.|[webhooks_lookup](#schemawebhooks_lookup)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Delete webhook lookup

<a id="opIdwebhooks-lookup.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-lookup/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/notifications/webhooks-lookup/{webhook_lookup_id}`

Deletes a webhook lookup, by ID.

<h3 id="delete-webhook-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_lookup_id|path|string|true|The ID of the webhook lookup to delete.|

> Example responses

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="delete-webhook-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

<h1 id="webhooks-management-verify-webhook-signature">verify-webhook-signature</h1>

Use the `/verify-webhook-signature` resource to verify a webhook signature.

## Verify webhook signature

<a id="opIdverify-webhook-signature.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/verify-webhook-signature \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transmission_id": "69cd13f0-d67a-11e5-baa3-778b53f4ae55",
    "transmission_time": "2016-02-18T20:01:35Z",
    "cert_url": "cert_url",
    "auth_algo": "SHA256withRSA",
    "transmission_sig": "lmI95Jx3Y9nhR5SJWlHVIWpg4AgFk7n9bCHSRxbrd8A9zrhdu2rMyFrmz+Zjh3s3boXB07VXCXUZy/UFzUlnGJn0wDugt7FlSvdKeIJenLRemUxYCPVoEZzg9VFNqOa48gMkvF+XTpxBeUx/kWy6B5cp7GkT2+pOowfRK7OaynuxUoKW3JcMWw272VKjLTtTAShncla7tGF+55rxyt2KNZIIqxNMJ48RDZheGU5w1npu9dZHnPgTXB9iomeVRoD8O/jhRpnKsGrDschyNdkeh81BJJMH4Ctc6lnCCquoP/GzCzz33MMsNdid7vL/NIWaCsekQpW26FpWPi/tfj8nLA==",
    "webhook_id": "1JE4291016473214C",
    "webhook_event": {
      "id": "8PT597110X687430LKGECATA",
      "create_time": "2013-06-25T21:41:28Z",
      "resource_type": "authorization",
      "event_type": "PAYMENT.AUTHORIZATION.CREATED",
      "summary": "A payment authorization was created",
      "resource": {
        "id": "2DC87612EK520411B",
        "create_time": "2013-06-25T21:39:15Z",
        "update_time": "2013-06-25T21:39:17Z",
        "state": "authorized",
        "amount": {
          "total": "7.47",
          "currency": "USD",
          "details": {
            "subtotal": "7.47"
          }
        },
        "parent_payment": "PAY-36246664YD343335CKHFA4AY",
        "valid_until": "2013-07-24T21:39:15Z",
        "links": [
          {
            "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B",
            "rel": "self",
            "method": "GET"
          },
          {
            "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/capture",
            "rel": "capture",
            "method": "POST"
          },
          {
            "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/void",
            "rel": "void",
            "method": "POST"
          },
          {
            "href": "https://api-m.paypal.com/v1/payments/payment/PAY-36246664YD343335CKHFA4AY",
            "rel": "parent_payment",
            "method": "GET"
          }
        ]
      }
    }
  }'
```

`POST /v1/notifications/verify-webhook-signature`

Verifies a webhook signature.

> Body parameter

```json
{
  "transmission_id": "69cd13f0-d67a-11e5-baa3-778b53f4ae55",
  "transmission_time": "2016-02-18T20:01:35Z",
  "cert_url": "cert_url",
  "auth_algo": "SHA256withRSA",
  "transmission_sig": "lmI95Jx3Y9nhR5SJWlHVIWpg4AgFk7n9bCHSRxbrd8A9zrhdu2rMyFrmz+Zjh3s3boXB07VXCXUZy/UFzUlnGJn0wDugt7FlSvdKeIJenLRemUxYCPVoEZzg9VFNqOa48gMkvF+XTpxBeUx/kWy6B5cp7GkT2+pOowfRK7OaynuxUoKW3JcMWw272VKjLTtTAShncla7tGF+55rxyt2KNZIIqxNMJ48RDZheGU5w1npu9dZHnPgTXB9iomeVRoD8O/jhRpnKsGrDschyNdkeh81BJJMH4Ctc6lnCCquoP/GzCzz33MMsNdid7vL/NIWaCsekQpW26FpWPi/tfj8nLA==",
  "webhook_id": "1JE4291016473214C",
  "webhook_event": {
    "id": "8PT597110X687430LKGECATA",
    "create_time": "2013-06-25T21:41:28Z",
    "resource_type": "authorization",
    "event_type": "PAYMENT.AUTHORIZATION.CREATED",
    "summary": "A payment authorization was created",
    "resource": {
      "id": "2DC87612EK520411B",
      "create_time": "2013-06-25T21:39:15Z",
      "update_time": "2013-06-25T21:39:17Z",
      "state": "authorized",
      "amount": {
        "total": "7.47",
        "currency": "USD",
        "details": {
          "subtotal": "7.47"
        }
      },
      "parent_payment": "PAY-36246664YD343335CKHFA4AY",
      "valid_until": "2013-07-24T21:39:15Z",
      "links": [
        {
          "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B",
          "rel": "self",
          "method": "GET"
        },
        {
          "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/capture",
          "rel": "capture",
          "method": "POST"
        },
        {
          "href": "https://api-m.paypal.com/v1/payments/authorization/2DC87612EK520411B/void",
          "rel": "void",
          "method": "POST"
        },
        {
          "href": "https://api-m.paypal.com/v1/payments/payment/PAY-36246664YD343335CKHFA4AY",
          "rel": "parent_payment",
          "method": "GET"
        }
      ]
    }
  }
}
```

<h3 id="verify-webhook-signature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[verify_webhook_signature](#schemaverify_webhook_signature)|false|none|
|» auth_algo|body|string|true|The algorithm that PayPal uses to generate the signature and that you can use to verify the signature. Extract this value from the `PAYPAL-AUTH-ALGO` response header, which is received with the webhook notification.|
|» cert_url|body|string(uri)|true|The X.509 public key certificate. Download the certificate from this URL and use it to verify the signature. Extract this value from the `PAYPAL-CERT-URL` response header, which is received with the webhook notification.|
|» transmission_id|body|string|true|The ID of the HTTP transmission. Contained in the `PAYPAL-TRANSMISSION-ID` header of the notification message.|
|» transmission_sig|body|string|true|The PayPal-generated asymmetric signature. Appears in the `PAYPAL-TRANSMISSION-SIG` header of the notification message.|
|» transmission_time|body|string(date-time)|true|The date and time of the HTTP transmission, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Appears in the `PAYPAL-TRANSMISSION-TIME` header of the notification message.|
|» webhook_id|body|string|true|The ID of the webhook as configured in your Developer Portal account.|
|» webhook_event|body|[event](#schemaevent)|true|A webhook event notification.|

> Example responses

> 200 Response

```json
{
  "verification_status": "SUCCESS"
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="verify-webhook-signature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the verification status.|[verify_webhook_signature_response](#schemaverify_webhook_signature_response)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks https://uri.paypal.com/services/applications/verify-webhook-signature )
</aside>

<h1 id="webhooks-management-webhooks-event-types">webhooks-event-types</h1>

Use the `/webhooks-event-types` resource to list available events to which any webhook can subscribe.

## List available events

<a id="opIdwebhooks-event-types.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-event-types \
  -H 'Accept: application/json'
```

`GET /v1/notifications/webhooks-event-types`

Lists available events to which any webhook can subscribe. For a list of supported events, see [Webhook event names](/docs/api/notifications/webhooks/event-names/).

> Example responses

> 200 Response

```json
{
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-available-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists available events to which any webhook can subscribe.|[EventTypeList](#schemaeventtypelist)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="webhooks-management-webhooks-events">webhooks-events</h1>

Use the `/webhooks-events` resource to list, show details for, and resend event notifications.

## List event notifications

<a id="opIdwebhooks-events.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks-events`

Lists webhooks event notifications. Use query parameters to filter the response.

<h3 id="list-event-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|The number of webhook event notifications to return in the response.|
|start_time|query|string|false|Filters the webhook event notifications in the response to those created on or after this date and time and on or before the `end_time` value. Both values are in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6) format. Example: `start_time=2013-03-06T11:00:00Z`.|
|end_time|query|string|false|Filters the webhook event notifications in the response to those created on or after the `start_time` and on or before this date and time. Both values are in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6) format. Example: `end_time=2013-03-06T11:00:00Z`.|
|transaction_id|query|string|false|Filters the response to a single transaction, by ID.|
|event_type|query|string|false|Filters the response to a single event.|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "id": "string",
      "create_time": "1970-01-01T00:00:00Z",
      "resource_type": "string",
      "event_version": "string",
      "event_type": "string",
      "summary": "string",
      "resource_version": "string",
      "resource": {},
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "count": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-event-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists webhooks event notifications.|[EventList](#schemaeventlist)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Show event notification details

<a id="opIdwebhooks-events.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/notifications/webhooks-events/{event_id}`

Shows details for a webhooks event notification, by ID.

<h3 id="show-event-notification-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|The ID of the webhook event notification to resend.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "create_time": "1970-01-01T00:00:00Z",
  "resource_type": "string",
  "event_version": "string",
  "event_type": "string",
  "summary": "string",
  "resource_version": "string",
  "resource": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-event-notification-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows webhooks event notification details.|[event](#schemaevent)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

## Resend event notification

<a id="opIdwebhooks-events.resend"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/webhooks-events/string/resend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhook_ids": [
      "string"
    ]
  }'
```

`POST /v1/notifications/webhooks-events/{event_id}/resend`

Resends a webhook event notification, by ID. Any pending notifications are not resent.

> Body parameter

```json
{
  "webhook_ids": [
    "string"
  ]
}
```

<h3 id="resend-event-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|The ID of the webhook event notification to resend.|
|body|body|[event_resend](#schemaevent_resend)|false|none|
|» webhook_ids|body|[webhook_ids_list](#schemawebhook_ids_list)|false|An array of webhook account IDs.|

> Example responses

> 202 Response

```json
{
  "id": "string",
  "create_time": "1970-01-01T00:00:00Z",
  "resource_type": "string",
  "event_version": "string",
  "event_type": "string",
  "summary": "string",
  "resource_version": "string",
  "resource": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="resend-event-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A successful request returns the HTTP `202 Accepted` status code and a JSON response body that shows webhook event notification details.|[event](#schemaevent)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

<h1 id="webhooks-management-simulate-event">simulate-event</h1>

Use the `/simulate-event` resource to use a sample payload to simulate a webhook event. The events that this call generates only serve to validate the connection to the listener URL and to show how webhook events look. <blockquote><strong>Note:</strong> You can also use the <a href="/docs/api/notifications/webhooks/simulator/">Webhooks simulator</a> to simulate webhook events.</blockquote>

## Simulate webhook event

<a id="opIdsimulate-event.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/notifications/simulate-event \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://example.com/example_webhook",
    "event_type": "PAYMENT.AUTHORIZATION.CREATED",
    "resource_version": "1.0"
  }'
```

`POST /v1/notifications/simulate-event`

Simulates a webhook event. In the JSON request body, specify a sample payload.<br>You need to subscribe to the following webhook events for Pay upon Invoice:<br><table><thead><tr><th>Event</th><th>Trigger</th></tr></thead><tbody><tr><td><code>PAYMENT.CAPTURE.COMPLETED</code></td><td>A payment capture completes.</td></tr><tr><td><code>PAYMENT.CAPTURE.DENIED</code></td><td>A payment capture is denied.</td></tr><tr><td><code>CHECKOUT.PAYMENT-APPROVAL.REVERSED</code></td><td>PayPal reverses a payment capture.</td></tr></tbody></table>

> Body parameter

```json
{
  "url": "https://example.com/example_webhook",
  "event_type": "PAYMENT.AUTHORIZATION.CREATED",
  "resource_version": "1.0"
}
```

<h3 id="simulate-webhook-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_event](#schemasimulate_event)|false|none|
|» webhook_id|body|string|false|The ID of the webhook. If omitted, the URL is required.|
|» url|body|string(uri)|false|The URL for the webhook endpoint. If omitted, the webhook ID is required.|
|» event_type|body|string|true|The event name. Specify one of the subscribed events. For each request, provide only one event.|
|» resource_version|body|string|false|The identifier for event type ex: 1.0/2.0 etc.|

> Example responses

> 202 Response

```json
{
  "id": "string",
  "create_time": "1970-01-01T00:00:00Z",
  "resource_type": "string",
  "event_version": "string",
  "event_type": "string",
  "summary": "string",
  "resource_version": "string",
  "resource": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="simulate-webhook-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A successful request returns the HTTP `202 Accepted` status code and a JSON response body that shows details for the mock event.|[event](#schemaevent)|
|default|Default|The error response.|[error-2](#schemaerror-2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/applications/webhooks )
</aside>

# Schemas

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
{
  "events": [
    {
      "id": "string",
      "create_time": "1970-01-01T00:00:00Z",
      "resource_type": "string",
      "event_version": "string",
      "event_type": "string",
      "summary": "string",
      "resource_version": "string",
      "resource": {},
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "count": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

A list of webhooks events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[event_list](#schemaevent_list)|false|none|An array of webhooks events.|
|count|integer|false|none|The number of items in each range of results. Note that the response might have fewer items than the requested `page_size` value.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_EventTypeList">EventTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypelist"></a>
<a id="schema_EventTypeList"></a>
<a id="tocSeventtypelist"></a>
<a id="tocseventtypelist"></a>

```json
{
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ]
}
```

A list of webhook events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_types|[event_type_list](#schemaevent_type_list)|false|none|An array of webhook events.|

<h2 id="tocS_WebhookList">WebhookList</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklist"></a>
<a id="schema_WebhookList"></a>
<a id="tocSwebhooklist"></a>
<a id="tocswebhooklist"></a>

```json
{
  "webhooks": [
    {
      "id": "string",
      "url": "http://example.com",
      "event_types": [
        {
          "name": "string",
          "description": "string",
          "status": "string",
          "resource_versions": [
            "string"
          ]
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ]
}
```

A list of webhooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[webhook_list](#schemawebhook_list)|false|none|An array of webhooks.|

<h2 id="tocS_WebhookLookupList">WebhookLookupList</h2>
<!-- backwards compatibility -->
<a id="schemawebhooklookuplist"></a>
<a id="schema_WebhookLookupList"></a>
<a id="tocSwebhooklookuplist"></a>
<a id="tocswebhooklookuplist"></a>

```json
{
  "webhooks_lookups": [
    {
      "id": "string",
      "client_id": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ]
}
```

A list of webhook lookups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks_lookups|[webhooks_lookup_list](#schemawebhooks_lookup_list)|false|none|An array of webhook lookups.|

<h2 id="tocS_definitions-event_type_list">definitions-event_type_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-event_type_list"></a>
<a id="schema_definitions-event_type_list"></a>
<a id="tocSdefinitions-event_type_list"></a>
<a id="tocsdefinitions-event_type_list"></a>

```json
[
  {
    "name": "string",
    "description": "string",
    "status": "string",
    "resource_versions": [
      "string"
    ]
  }
]
```

An array of events to which to subscribe your webhook. To subscribe to all events, including events as they are added, specify the asterisk wild card. To replace the `event_types` array, specify the asterisk wild card. To list all supported events, <a href="#event-type_list">list available events</a>.

<h2 id="tocS_definitions-link_description_list">definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-link_description_list"></a>
<a id="schema_definitions-link_description_list"></a>
<a id="tocSdefinitions-link_description_list"></a>
<a id="tocsdefinitions-link_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
null
```

<h2 id="tocS_error-2">error-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror-2"></a>
<a id="schema_error-2"></a>
<a id="tocSerror-2"></a>
<a id="tocserror-2"></a>

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The human-readable, unique name of the error.|
|message|string|true|none|The message that describes the error.|
|debug_id|string|true|none|The PayPal internal ID. Used for correlation purposes.|
|information_link|string|false|read-only|The information link, or URI, that shows detailed information about this error for the developer.|
|details|[error_details_list](#schemaerror_details_list)|false|none|An array of additional details about the error.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_details-2">error_details-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details-2"></a>
<a id="schema_error_details-2"></a>
<a id="tocSerror_details-2"></a>
<a id="tocserror_details-2"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|string|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

<h2 id="tocS_error_details_list">error_details_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details_list"></a>
<a id="schema_error_details_list"></a>
<a id="tocSerror_details_list"></a>
<a id="tocserror_details_list"></a>

```json
[
  {
    "field": "string",
    "value": "string",
    "location": "body",
    "issue": "string",
    "description": "string"
  }
]
```

An array of additional details about the error.

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_error_type">error_type</h2>
<!-- backwards compatibility -->
<a id="schemaerror_type"></a>
<a id="schema_error_type"></a>
<a id="tocSerror_type"></a>
<a id="tocserror_type"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string"
}
```

The type of webhook error that occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID for the webhook error type.|
|name|string|true|none|The unique error type name.|
|description|string|false|read-only|A human-readable description of the error type.|

<h2 id="tocS_event">event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "string",
  "create_time": "1970-01-01T00:00:00Z",
  "resource_type": "string",
  "event_version": "string",
  "event_type": "string",
  "summary": "string",
  "resource_version": "string",
  "resource": {},
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

A webhook event notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the webhook event notification.|
|create_time|string(date-time)|false|read-only|The date and time when the webhook event notification was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|resource_type|string|false|read-only|The name of the resource related to the webhook notification event.|
|event_version|[event_version](#schemaevent_version)|false|none|**Deprecated.** The event version in the webhook notification.|
|event_type|string|false|read-only|The event that triggered the webhook event notification.|
|summary|string|false|read-only|A summary description for the event notification.|
|resource_version|[resource_version](#schemaresource_version)|false|none|The resource version in the webhook notification.|
|resource|[resource](#schemaresource)|false|read-only|The resource that triggered the webhook event notification.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_event_list">event_list</h2>
<!-- backwards compatibility -->
<a id="schemaevent_list"></a>
<a id="schema_event_list"></a>
<a id="tocSevent_list"></a>
<a id="tocsevent_list"></a>

```json
[
  {
    "id": "string",
    "create_time": "1970-01-01T00:00:00Z",
    "resource_type": "string",
    "event_version": "string",
    "event_type": "string",
    "summary": "string",
    "resource_version": "string",
    "resource": {},
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of webhooks events.

<h2 id="tocS_event_resend">event_resend</h2>
<!-- backwards compatibility -->
<a id="schemaevent_resend"></a>
<a id="schema_event_resend"></a>
<a id="tocSevent_resend"></a>
<a id="tocsevent_resend"></a>

```json
{
  "webhook_ids": [
    "string"
  ]
}
```

Resends a webhook event notification, by ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_ids|[webhook_ids_list](#schemawebhook_ids_list)|false|none|An array of webhook account IDs.|

<h2 id="tocS_event_type">event_type</h2>
<!-- backwards compatibility -->
<a id="schemaevent_type"></a>
<a id="schema_event_type"></a>
<a id="tocSevent_type"></a>
<a id="tocsevent_type"></a>

```json
{
  "name": "string",
  "description": "string",
  "status": "string",
  "resource_versions": [
    "string"
  ]
}
```

An event type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The unique event name.<blockquote><strong>Note:</strong> To subscribe to all events, including events as they are added, specify an `*` as the value to represent a wildcard.</blockquote>|
|description|string|false|read-only|A human-readable description of the event.|
|status|string|false|read-only|The status of a webhook event.|
|resource_versions|[resource_versions_list](#schemaresource_versions_list)|false|read-only|Identifier for the event type example: 1.0/2.0 etc.|

<h2 id="tocS_event_type_list">event_type_list</h2>
<!-- backwards compatibility -->
<a id="schemaevent_type_list"></a>
<a id="schema_event_type_list"></a>
<a id="tocSevent_type_list"></a>
<a id="tocsevent_type_list"></a>

```json
[
  {
    "name": "string",
    "description": "string",
    "status": "string",
    "resource_versions": [
      "string"
    ]
  }
]
```

An array of webhook events.

<h2 id="tocS_event_version">event_version</h2>
<!-- backwards compatibility -->
<a id="schemaevent_version"></a>
<a id="schema_event_version"></a>
<a id="tocSevent_version"></a>
<a id="tocsevent_version"></a>

```json
"string"
```

The event version in the webhook notification.

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description_list">link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemalink_description_list"></a>
<a id="schema_link_description_list"></a>
<a id="tocSlink_description_list"></a>
<a id="tocslink_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

<h2 id="tocS_patch">patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "op": "add",
  "path": "string",
  "value": 0,
  "from": "string"
}
```

The JSON patch object to apply partial updates to resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|true|none|The operation.|
|path|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.|
|value|number \| integer \| string \| boolean \| null \| array \| object|false|none|The value to apply. The <code>remove</code> operation does not require a value.|
|from|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_patch_request">patch_request</h2>
<!-- backwards compatibility -->
<a id="schemapatch_request"></a>
<a id="schema_patch_request"></a>
<a id="tocSpatch_request"></a>
<a id="tocspatch_request"></a>

```json
[
  {
    "op": "add",
    "path": "string",
    "value": 0,
    "from": "string"
  }
]
```

An array of JSON patch objects to apply partial updates to resources.

<h2 id="tocS_resource">resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{}
```

The resource that triggered the webhook event notification.

<h2 id="tocS_resource_version">resource_version</h2>
<!-- backwards compatibility -->
<a id="schemaresource_version"></a>
<a id="schema_resource_version"></a>
<a id="tocSresource_version"></a>
<a id="tocsresource_version"></a>

```json
"string"
```

The resource version in the webhook notification.

<h2 id="tocS_resource_versions">resource_versions</h2>
<!-- backwards compatibility -->
<a id="schemaresource_versions"></a>
<a id="schema_resource_versions"></a>
<a id="tocSresource_versions"></a>
<a id="tocsresource_versions"></a>

```json
"string"
```

The ID for an event type. For example, `1.0` or `2.0`.

<h2 id="tocS_resource_versions_list">resource_versions_list</h2>
<!-- backwards compatibility -->
<a id="schemaresource_versions_list"></a>
<a id="schema_resource_versions_list"></a>
<a id="tocSresource_versions_list"></a>
<a id="tocsresource_versions_list"></a>

```json
[
  "string"
]
```

Identifier for the event type example: 1.0/2.0 etc.

<h2 id="tocS_simulate_event">simulate_event</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_event"></a>
<a id="schema_simulate_event"></a>
<a id="tocSsimulate_event"></a>
<a id="tocssimulate_event"></a>

```json
{
  "webhook_id": "string",
  "url": "http://example.com",
  "event_type": "string",
  "resource_version": "string"
}
```

Simulates a mock webhook event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_id|string|false|none|The ID of the webhook. If omitted, the URL is required.|
|url|string(uri)|false|none|The URL for the webhook endpoint. If omitted, the webhook ID is required.|
|event_type|string|true|none|The event name. Specify one of the subscribed events. For each request, provide only one event.|
|resource_version|string|false|none|The identifier for event type ex: 1.0/2.0 etc.|

<h2 id="tocS_swagger_link_description">swagger_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaswagger_link_description"></a>
<a id="schema_swagger_link_description"></a>
<a id="tocSswagger_link_description"></a>
<a id="tocsswagger_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_verify_webhook_signature">verify_webhook_signature</h2>
<!-- backwards compatibility -->
<a id="schemaverify_webhook_signature"></a>
<a id="schema_verify_webhook_signature"></a>
<a id="tocSverify_webhook_signature"></a>
<a id="tocsverify_webhook_signature"></a>

```json
{
  "auth_algo": "string",
  "cert_url": "http://example.com",
  "transmission_id": "string",
  "transmission_sig": "string",
  "transmission_time": "1970-01-01T00:00:00Z",
  "webhook_id": "string",
  "webhook_event": {
    "id": "string",
    "create_time": "1970-01-01T00:00:00Z",
    "resource_type": "string",
    "event_version": "string",
    "event_type": "string",
    "summary": "string",
    "resource_version": "string",
    "resource": {},
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
}
```

A verify webhook signature request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_algo|string|true|none|The algorithm that PayPal uses to generate the signature and that you can use to verify the signature. Extract this value from the `PAYPAL-AUTH-ALGO` response header, which is received with the webhook notification.|
|cert_url|string(uri)|true|none|The X.509 public key certificate. Download the certificate from this URL and use it to verify the signature. Extract this value from the `PAYPAL-CERT-URL` response header, which is received with the webhook notification.|
|transmission_id|string|true|none|The ID of the HTTP transmission. Contained in the `PAYPAL-TRANSMISSION-ID` header of the notification message.|
|transmission_sig|string|true|none|The PayPal-generated asymmetric signature. Appears in the `PAYPAL-TRANSMISSION-SIG` header of the notification message.|
|transmission_time|string(date-time)|true|none|The date and time of the HTTP transmission, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Appears in the `PAYPAL-TRANSMISSION-TIME` header of the notification message.|
|webhook_id|string|true|none|The ID of the webhook as configured in your Developer Portal account.|
|webhook_event|[event](#schemaevent)|true|none|A webhook event notification.|

<h2 id="tocS_verify_webhook_signature_response">verify_webhook_signature_response</h2>
<!-- backwards compatibility -->
<a id="schemaverify_webhook_signature_response"></a>
<a id="schema_verify_webhook_signature_response"></a>
<a id="tocSverify_webhook_signature_response"></a>
<a id="tocsverify_webhook_signature_response"></a>

```json
{
  "verification_status": "SUCCESS"
}
```

The verify webhook signature response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification_status|string|true|none|The status of the signature verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|verification_status|SUCCESS|
|verification_status|FAILURE|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": "string",
  "url": "http://example.com",
  "event_types": [
    {
      "name": "string",
      "description": "string",
      "status": "string",
      "resource_versions": [
        "string"
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

One or more webhook objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the webhook.|
|url|string(uri)|true|none|The URL that is configured to listen on `localhost` for incoming `POST` notification messages that contain event information.|
|event_types|[definitions-event_type_list](#schemadefinitions-event_type_list)|true|none|An array of events to which to subscribe your webhook. To subscribe to all events, including events as they are added, specify the asterisk wild card. To replace the `event_types` array, specify the asterisk wild card. To list all supported events, <a href="#event-type_list">list available events</a>.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

<h2 id="tocS_webhook_ids">webhook_ids</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_ids"></a>
<a id="schema_webhook_ids"></a>
<a id="tocSwebhook_ids"></a>
<a id="tocswebhook_ids"></a>

```json
"string"
```

The ID of the webhook event notification to resend.

<h2 id="tocS_webhook_ids_list">webhook_ids_list</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_ids_list"></a>
<a id="schema_webhook_ids_list"></a>
<a id="tocSwebhook_ids_list"></a>
<a id="tocswebhook_ids_list"></a>

```json
[
  "string"
]
```

An array of webhook account IDs.

<h2 id="tocS_webhook_list">webhook_list</h2>
<!-- backwards compatibility -->
<a id="schemawebhook_list"></a>
<a id="schema_webhook_list"></a>
<a id="tocSwebhook_list"></a>
<a id="tocswebhook_list"></a>

```json
[
  {
    "id": "string",
    "url": "http://example.com",
    "event_types": [
      {
        "name": "string",
        "description": "string",
        "status": "string",
        "resource_versions": [
          "string"
        ]
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of webhooks.

<h2 id="tocS_webhooks_lookup">webhooks_lookup</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_lookup"></a>
<a id="schema_webhooks_lookup"></a>
<a id="tocSwebhooks_lookup"></a>
<a id="tocswebhooks_lookup"></a>

```json
{
  "id": "string",
  "client_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The webhook lookup details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the webhook lookup.|
|client_id|string|false|read-only|The application client ID.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

<h2 id="tocS_webhooks_lookup_list">webhooks_lookup_list</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_lookup_list"></a>
<a id="schema_webhooks_lookup_list"></a>
<a id="tocSwebhooks_lookup_list"></a>
<a id="tocswebhooks_lookup_list"></a>

```json
[
  {
    "id": "string",
    "client_id": "string",
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of webhook lookups.
