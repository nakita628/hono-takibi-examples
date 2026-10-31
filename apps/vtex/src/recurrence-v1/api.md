<h1 id="subscription-v1---deprecated">Subscription (v1 - deprecated) v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api">https://{accountName}.{environment}.com.br/api</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="subscription-v1---deprecated-miscellaneous">Miscellaneous</h1>

## Get Subscriptions

<a id="opIdGetRecurrencebyemail"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions`

Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.

<h3 id="get-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|If you wish to list tasks by email, insert the desired user's email.|
|cycleStatus|query|string|false|If you wish to list tasks by Subscriptions with failures on the last execution cycle, insert the desired cycleStatus.|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="get-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Subscription

<a id="opIdUpdaterecurrence"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "deliveryDay": 26,
    "deliveryWeekday": "Friday",
    "email": "user@vtex.com.br",
    "items": [
      {
        "frequency": {
          "interval": 1,
          "periodicity": "weekly"
        },
        "quantity": 2,
        "seller": "1",
        "shippingAddressId": "-1461618656161",
        "sku": "18"
      }
    ],
    "paymentAccountId": "87FE21B06C0D42908D31A5B11E6FC043"
  }'
```

`PUT /subscriptions`

Updates details of a given Subscription (formerly recurrence).

> Body parameter

```json
{
  "deliveryDay": 26,
  "deliveryWeekday": "Friday",
  "email": "user@vtex.com.br",
  "items": [
    {
      "frequency": {
        "interval": 1,
        "periodicity": "weekly"
      },
      "quantity": 2,
      "seller": "1",
      "shippingAddressId": "-1461618656161",
      "sku": "18"
    }
  ],
  "paymentAccountId": "87FE21B06C0D42908D31A5B11E6FC043"
}
```

<h3 id="update-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|[UpdaterecurrenceRequest](#schemaupdaterecurrencerequest)|true|none|
|» deliveryDay|body|integer(int32)|true|none|
|» deliveryWeekday|body|string|true|none|
|» email|body|string|true|none|
|» items|body|[[Item](#schemaitem)]|true|none|
|» paymentAccountId|body|string|true|none|

<h3 id="update-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get self Subscription

<a id="opIdGetselfrecurrence"></a>

> Code samples

```bash
curl https://example.com/subscriptions/me \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/me`

Lists details of your self Subscription (formerly Recurrence).

<h3 id="get-self-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="get-self-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subscription settings

<a id="opIdGetrecurrencesettings"></a>

> Code samples

```bash
curl https://example.com/subscriptions/settings \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/settings`

Retrieves your store's Subscriptions' (formerly recurrence) settings.

<h3 id="get-subscription-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="get-subscription-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Subscription settings

<a id="opIdUpdaterecurrencesettings"></a>

> Code samples

```bash
curl https://example.com/subscriptions/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "defaultSLA": "Normal",
    "salesChannel": "1"
  }'
```

`PUT /subscriptions/settings`

Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.

> Body parameter

```json
{
  "defaultSLA": "Normal",
  "salesChannel": "1"
}
```

<h3 id="update-subscription-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|[UpdaterecurrencesettingsRequest](#schemaupdaterecurrencesettingsrequest)|true|none|
|» defaultSLA|body|string|true|none|
|» salesChannel|body|string|true|none|

<h3 id="update-subscription-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subscription by recurrenceId

<a id="opIdGetRecurrencebyrecurrenceId"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/{recurrenceId}`

Retrieves a given Subscription (formerly recurrence) by recurrenceId.

<h3 id="get-subscription-by-recurrenceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|recurrenceId|path|string|true|none|

<h3 id="get-subscription-by-recurrenceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update partial Subscription

<a id="opIdUpdatepartialrecurrence"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "deliveryDay": 18,
    "deliveryWeekday": "Monday",
    "status": "inactive"
  }'
```

`PATCH /subscriptions/{recurrenceId}`

Updates partial information of a given subscription (formerly Recurrence).

> Body parameter

```json
{
  "deliveryDay": 18,
  "deliveryWeekday": "Monday",
  "status": "inactive"
}
```

<h3 id="update-partial-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recurrenceId|path|string|true|none|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|[UpdatepartialrecurrenceRequest](#schemaupdatepartialrecurrencerequest)|true|none|
|» deliveryDay|body|integer(int32)|true|none|
|» deliveryWeekday|body|string|true|none|
|» status|body|string|true|none|

<h3 id="update-partial-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Subscription addresses

<a id="opIdGetrecurrenceaddresses"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string/addresses \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/{recurrenceId}/addresses`

Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.

<h3 id="get-subscription-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|recurrenceId|path|string|true|none|

<h3 id="get-subscription-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add Subscription item

<a id="opIdAddrecurrenceitem"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "frequency": {
        "interval": 1,
        "periodicity": "monthly"
      },
      "quantity": 2,
      "seller": "1",
      "shippingAddressId": "-1461618656161",
      "sku": "20"
    }
  ]'
```

`POST /subscriptions/{recurrenceId}/items`

Adds an item to a Subscription (formerly Recurrence).

> Body parameter

```json
[
  {
    "frequency": {
      "interval": 1,
      "periodicity": "monthly"
    },
    "quantity": 2,
    "seller": "1",
    "shippingAddressId": "-1461618656161",
    "sku": "20"
  }
]
```

<h3 id="add-subscription-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|recurrenceId|path|string|true|none|
|body|body|[[AddrecurrenceitemRequest](#schemaaddrecurrenceitemrequest)]|true|none|

<h3 id="add-subscription-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Reindex Subscription

<a id="opIdReindexrecurrence"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string/reindex \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "frequency": {
        "interval": 1,
        "periodicity": "yearly"
      }
    }
  ]'
```

`PATCH /subscriptions/{recurrenceId}/reindex`

Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.

> Body parameter

```json
[
  {
    "frequency": {
      "interval": 1,
      "periodicity": "yearly"
    }
  }
]
```

<h3 id="reindex-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recurrenceId|path|string|true|none|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|
|body|body|[[ReindexrecurrenceRequest](#schemareindexrecurrencerequest)]|true|none|

<h3 id="reindex-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get payment accounts

<a id="opIdGetpaymentaccounts"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string/accounts \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /subscriptions/{recurrenceid}/accounts`

Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.

<h3 id="get-payment-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recurrenceid|path|string|true|none|
|Content-Type|header|string|true|Type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand|

<h3 id="get-payment-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AddrecurrenceitemRequest">AddrecurrenceitemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddrecurrenceitemrequest"></a>
<a id="schema_AddrecurrenceitemRequest"></a>
<a id="tocSaddrecurrenceitemrequest"></a>
<a id="tocsaddrecurrenceitemrequest"></a>

```json
{
  "frequency": {
    "interval": 1,
    "periodicity": "monthly"
  },
  "quantity": 2,
  "seller": "1",
  "shippingAddressId": "-1461618656161",
  "sku": "20"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Frequency](#schemafrequency)|true|none|none|
|quantity|integer(int32)|true|none|none|
|seller|string|true|none|none|
|shippingAddressId|string|true|none|none|
|sku|string|true|none|none|

<h2 id="tocS_Frequency">Frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_Frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
{
  "interval": 1,
  "periodicity": "monthly"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|integer(int32)|true|none|none|
|periodicity|string|true|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "frequency": {
    "interval": 1,
    "periodicity": "weekly"
  },
  "quantity": 2,
  "seller": "1",
  "shippingAddressId": "-1461618656161",
  "sku": "18"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Frequency](#schemafrequency)|true|none|none|
|quantity|integer(int32)|true|none|none|
|seller|string|true|none|none|
|shippingAddressId|string|true|none|none|
|sku|string|true|none|none|

<h2 id="tocS_ReindexrecurrenceRequest">ReindexrecurrenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemareindexrecurrencerequest"></a>
<a id="schema_ReindexrecurrenceRequest"></a>
<a id="tocSreindexrecurrencerequest"></a>
<a id="tocsreindexrecurrencerequest"></a>

```json
{
  "frequency": {
    "interval": 1,
    "periodicity": "yearly"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Frequency](#schemafrequency)|true|none|none|

<h2 id="tocS_UpdatepartialrecurrenceRequest">UpdatepartialrecurrenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepartialrecurrencerequest"></a>
<a id="schema_UpdatepartialrecurrenceRequest"></a>
<a id="tocSupdatepartialrecurrencerequest"></a>
<a id="tocsupdatepartialrecurrencerequest"></a>

```json
{
  "deliveryDay": 18,
  "deliveryWeekday": "Monday",
  "status": "inactive"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryDay|integer(int32)|true|none|none|
|deliveryWeekday|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_UpdaterecurrenceRequest">UpdaterecurrenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecurrencerequest"></a>
<a id="schema_UpdaterecurrenceRequest"></a>
<a id="tocSupdaterecurrencerequest"></a>
<a id="tocsupdaterecurrencerequest"></a>

```json
{
  "deliveryDay": 26,
  "deliveryWeekday": "Friday",
  "email": "user@vtex.com.br",
  "items": [
    {
      "frequency": {
        "interval": 1,
        "periodicity": "weekly"
      },
      "quantity": 2,
      "seller": "1",
      "shippingAddressId": "-1461618656161",
      "sku": "18"
    }
  ],
  "paymentAccountId": "87FE21B06C0D42908D31A5B11E6FC043"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryDay|integer(int32)|true|none|none|
|deliveryWeekday|string|true|none|none|
|email|string|true|none|none|
|items|[[Item](#schemaitem)]|true|none|none|
|paymentAccountId|string|true|none|none|

<h2 id="tocS_UpdaterecurrencesettingsRequest">UpdaterecurrencesettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterecurrencesettingsrequest"></a>
<a id="schema_UpdaterecurrencesettingsRequest"></a>
<a id="tocSupdaterecurrencesettingsrequest"></a>
<a id="tocsupdaterecurrencesettingsrequest"></a>

```json
{
  "defaultSLA": "Normal",
  "salesChannel": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSLA|string|true|none|none|
|salesChannel|string|true|none|none|
