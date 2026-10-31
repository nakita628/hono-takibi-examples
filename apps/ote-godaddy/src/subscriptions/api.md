<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Retrieve a list of Subscriptions for the specified Shopper

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions \
  -H 'Accept: application/json'
```

`GET /v1/subscriptions`

<h3 id="retrieve-a-list-of-subscriptions-for-the-specified-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID to return subscriptions for when not using JWT|
|X-Market-Id|header|string|false|The market that the response should be formatted for|
|productGroupKeys|query|[string]|false|Only return Subscriptions with the specified product groups|
|includes|query|[string]|false|Optional details to be included in the response|
|offset|query|integer|false|Number of Subscriptions to skip before starting to return paged results (must be a multiple of the limit)|
|limit|query|integer|false|Number of Subscriptions to retrieve in this page, starting after offset|
|sort|query|string|false|Property name that will be used to sort results. "-" indicates descending|

#### Enumerated Values

|Parameter|Value|
|---|---|
|includes|addons|
|includes|relations|
|sort|expiresAt|
|sort|-expiresAt|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  },
  "subscriptions": [
    {
      "addons": [
        {
          "commitment": "PAID",
          "pfid": 0,
          "quantity": 0
        }
      ],
      "billing": {
        "commitment": "PAID",
        "pastDueTypes": [
          "ADDON"
        ],
        "renewAt": "string",
        "status": "CURRENT"
      },
      "cancelable": true,
      "createdAt": "string",
      "expiresAt": "string",
      "label": "string",
      "launchUrl": "http://example.com",
      "paymentProfileId": 0,
      "priceLocked": true,
      "product": {
        "label": "string",
        "namespace": "string",
        "pfid": 0,
        "productGroupKey": "string",
        "renewalPeriod": 0,
        "renewalPeriodUnit": "MONTH",
        "renewalPfid": 0,
        "supportBillOn": true
      },
      "relations": {
        "children": [
          "string"
        ],
        "parent": "string"
      },
      "renewAuto": true,
      "renewable": true,
      "status": "ACTIVE",
      "subscriptionId": "string",
      "upgradeable": true
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

<h3 id="retrieve-a-list-of-subscriptions-for-the-specified-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[SubscriptionList](#schemasubscriptionlist)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Invalid query parameter (custom message returned for each parameter)|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of ProductGroups for the specified Shopper

<a id="opIdproductGroups"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/productGroups \
  -H 'Accept: application/json'
```

`GET /v1/subscriptions/productGroups`

<h3 id="retrieve-a-list-of-productgroups-for-the-specified-shopper-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID to return data for when not using JWT|
|X-Market-Id|header|string|false|The market that the response should be formatted for|

> Example responses

> 200 Response

```json
[
  {
    "productGroupKey": "string",
    "subscriptionCount": 0
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

<h3 id="retrieve-a-list-of-productgroups-for-the-specified-shopper-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|Inline|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<h3 id="retrieve-a-list-of-productgroups-for-the-specified-shopper-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductGroup](#schemaproductgroup)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve details for the specified Subscription

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/string \
  -H 'Accept: application/json'
```

`GET /v1/subscriptions/{subscriptionId}`

<h3 id="retrieve-details-for-the-specified-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID to be operated on, if different from JWT|
|X-Market-Id|header|string|false|Unique identifier of the Market in which the request is happening|
|subscriptionId|path|string|true|Unique identifier of the Subscription to retrieve|

> Example responses

> 200 Response

```json
{
  "addons": [
    {
      "commitment": "PAID",
      "pfid": 0,
      "quantity": 0
    }
  ],
  "billing": {
    "commitment": "PAID",
    "pastDueTypes": [
      "ADDON"
    ],
    "renewAt": "string",
    "status": "CURRENT"
  },
  "cancelable": true,
  "createdAt": "string",
  "expiresAt": "string",
  "label": "string",
  "launchUrl": "http://example.com",
  "paymentProfileId": 0,
  "priceLocked": true,
  "product": {
    "label": "string",
    "namespace": "string",
    "pfid": 0,
    "productGroupKey": "string",
    "renewalPeriod": 0,
    "renewalPeriodUnit": "MONTH",
    "renewalPfid": 0,
    "supportBillOn": true
  },
  "relations": {
    "children": [
      "string"
    ],
    "parent": "string"
  },
  "renewAuto": true,
  "renewable": true,
  "status": "ACTIVE",
  "subscriptionId": "string",
  "upgradeable": true
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

<h3 id="retrieve-details-for-the-specified-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[Subscription](#schemasubscription)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Invalid Subscription Id|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel the specified Subscription

<a id="opIdcancel"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/subscriptions/{subscriptionId}`

<h3 id="cancel-the-specified-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Shopper-Id|header|string|false|Shopper ID to cancel subscriptions for when not using JWT|
|subscriptionId|path|string|true|Unique identifier of the Subscription to cancel|

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

<h3 id="cancel-the-specified-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|422|Unprocessable Entity|Failed to determine if the domain is protected (invalid domain ID)<br>Invalid Subscription Id<br>The Office 365 Subscription cannot be cancelled (shopper is migrating)<br>The Subscription cannot be cancelled<br>The Subscription cannot be cancelled (PFID is disabled for cancellation)<br>The Subscription cannot be cancelled (domain is protected)<br>The domain alert Subscription cannot be cancelled|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Failed to determine if the Office 365 account is migrating<br>Failed to determine if the domain alert is cancellable<br>Failed to determine if the domain is protected<br>Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update details for the specified Subscription

<a id="opIdupdate"></a>

> Code samples

```bash
curl https://example.com/v1/subscriptions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "paymentProfileId": 0,
    "renewAuto": true
  }'
```

`PATCH /v1/subscriptions/{subscriptionId}`

Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>

> Body parameter

```json
{
  "paymentProfileId": 0,
  "renewAuto": true
}
```

<h3 id="update-details-for-the-specified-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Unique identifier of the Subscription to update|
|body|body|[SubscriptionUpdate](#schemasubscriptionupdate)|true|Details of the Subscription to change|
|» paymentProfileId|body|integer|false|Unique identifier of the payment profile you want to be used for automatic renewal|
|» renewAuto|body|boolean|false|Whether or not you want the Subscription renew automatically|

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

<h3 id="update-details-for-the-specified-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request was successful|None|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access <br> This method only supports JWT authentication|[Error](#schemaerror)|
|404|Not Found|Subscription not found <br> Payment profile not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

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

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "previous": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|URI to access the first page|
|last|string|false|none|URI to access the last page|
|next|string|false|none|URI to access the next page|
|previous|string|false|none|URI to access the previous page|
|total|integer|false|none|Number of records available|

<h2 id="tocS_ProductGroup">ProductGroup</h2>
<!-- backwards compatibility -->
<a id="schemaproductgroup"></a>
<a id="schema_ProductGroup"></a>
<a id="tocSproductgroup"></a>
<a id="tocsproductgroup"></a>

```json
{
  "productGroupKey": "string",
  "subscriptionCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productGroupKey|string|true|none|Primary key of a grouping of related Subscriptions|
|subscriptionCount|integer|true|none|The number of Subscriptions that the shopper owns in this group|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "addons": [
    {
      "commitment": "PAID",
      "pfid": 0,
      "quantity": 0
    }
  ],
  "billing": {
    "commitment": "PAID",
    "pastDueTypes": [
      "ADDON"
    ],
    "renewAt": "string",
    "status": "CURRENT"
  },
  "cancelable": true,
  "createdAt": "string",
  "expiresAt": "string",
  "label": "string",
  "launchUrl": "http://example.com",
  "paymentProfileId": 0,
  "priceLocked": true,
  "product": {
    "label": "string",
    "namespace": "string",
    "pfid": 0,
    "productGroupKey": "string",
    "renewalPeriod": 0,
    "renewalPeriodUnit": "MONTH",
    "renewalPfid": 0,
    "supportBillOn": true
  },
  "relations": {
    "children": [
      "string"
    ],
    "parent": "string"
  },
  "renewAuto": true,
  "renewable": true,
  "status": "ACTIVE",
  "subscriptionId": "string",
  "upgradeable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addons|[[SubscriptionAddon](#schemasubscriptionaddon)]|false|none|An array of additional products that have been purchased to augment this Subscription|
|billing|[SubscriptionBilling](#schemasubscriptionbilling)|true|none|none|
|cancelable|boolean|false|none|Whether or not the Subscription is allowed to be canceled|
|createdAt|string(iso-datetime)|true|none|When the Subscription was created|
|expiresAt|string(iso-datetime)|false|none|When the Subscription will expire|
|label|string|false|none|A human readable description of this Subscription|
|launchUrl|string(url)|false|none|The url to use or manage this Subscription's active product|
|paymentProfileId|integer|false|none|Unique identifier of the payment profile that will be used to automatically renew this Subscription|
|priceLocked|boolean|true|none|Whether the renewal price will be based from the list price or a locked-in price for this shopper|
|product|[SubscriptionProduct](#schemasubscriptionproduct)|true|none|none|
|relations|[SubscriptionRelations](#schemasubscriptionrelations)|false|none|none|
|renewAuto|boolean|true|none|Whether or not the Subscription is set to be automatically renewed via the billing agent|
|renewable|boolean|true|none|Whether or not the Subscription is allowed to be renewed|
|status|string|true|none|Whether the Subscription is active or the specific non-active state|
|subscriptionId|string|true|none|Unique identifier of the Subscription|
|upgradeable|boolean|true|none|Whether or not the Subscription is allowed to be upgraded|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|PENDING|
|status|CANCELED|

<h2 id="tocS_SubscriptionAddon">SubscriptionAddon</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionaddon"></a>
<a id="schema_SubscriptionAddon"></a>
<a id="tocSsubscriptionaddon"></a>
<a id="tocssubscriptionaddon"></a>

```json
{
  "commitment": "PAID",
  "pfid": 0,
  "quantity": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment|string|true|none|The financial commitment the customer has in the product|
|pfid|integer|true|none|Unique identifier of the add-in product|
|quantity|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|commitment|PAID|
|commitment|FREE|
|commitment|TRIAL|

<h2 id="tocS_SubscriptionBilling">SubscriptionBilling</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionbilling"></a>
<a id="schema_SubscriptionBilling"></a>
<a id="tocSsubscriptionbilling"></a>
<a id="tocssubscriptionbilling"></a>

```json
{
  "commitment": "PAID",
  "pastDueTypes": [
    "ADDON"
  ],
  "renewAt": "string",
  "status": "CURRENT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitment|string|true|none|The financial commitment the customer has in the product|
|pastDueTypes|[string]|false|none|The types of charges that are past due when `status` is PAST_DUE|
|renewAt|string(iso-datetime)|true|none|The point in time after which the Subscription will bill for automatic renewal|
|status|string|true|none|Whether payments are past due|

#### Enumerated Values

|Property|Value|
|---|---|
|commitment|PAID|
|commitment|FREE|
|commitment|TRIAL|
|pastDueTypes|ADDON|
|pastDueTypes|BURST|
|pastDueTypes|SUBSCRIPTION|
|status|CURRENT|
|status|PAST_DUE|

<h2 id="tocS_SubscriptionList">SubscriptionList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlist"></a>
<a id="schema_SubscriptionList"></a>
<a id="tocSsubscriptionlist"></a>
<a id="tocssubscriptionlist"></a>

```json
{
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  },
  "subscriptions": [
    {
      "addons": [
        {
          "commitment": "PAID",
          "pfid": 0,
          "quantity": 0
        }
      ],
      "billing": {
        "commitment": "PAID",
        "pastDueTypes": [
          "ADDON"
        ],
        "renewAt": "string",
        "status": "CURRENT"
      },
      "cancelable": true,
      "createdAt": "string",
      "expiresAt": "string",
      "label": "string",
      "launchUrl": "http://example.com",
      "paymentProfileId": 0,
      "priceLocked": true,
      "product": {
        "label": "string",
        "namespace": "string",
        "pfid": 0,
        "productGroupKey": "string",
        "renewalPeriod": 0,
        "renewalPeriodUnit": "MONTH",
        "renewalPfid": 0,
        "supportBillOn": true
      },
      "relations": {
        "children": [
          "string"
        ],
        "parent": "string"
      },
      "renewAuto": true,
      "renewable": true,
      "status": "ACTIVE",
      "subscriptionId": "string",
      "upgradeable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|true|none|none|
|subscriptions|[[Subscription](#schemasubscription)]|true|none|A collection of subscriptions|

<h2 id="tocS_SubscriptionProduct">SubscriptionProduct</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionproduct"></a>
<a id="schema_SubscriptionProduct"></a>
<a id="tocSsubscriptionproduct"></a>
<a id="tocssubscriptionproduct"></a>

```json
{
  "label": "string",
  "namespace": "string",
  "pfid": 0,
  "productGroupKey": "string",
  "renewalPeriod": 0,
  "renewalPeriodUnit": "MONTH",
  "renewalPfid": 0,
  "supportBillOn": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|A human readable description of the Product that is subscribed|
|namespace|string|true|none|Grouping of related Subscriptions|
|pfid|integer|true|none|Unique identifier of the Product that is subscribed|
|productGroupKey|string|true|none|Primary key of a grouping of related Subscriptions|
|renewalPeriod|integer|true|none|The number of `renewalPeriodUnits` that will be added by the `renewalPfid`|
|renewalPeriodUnit|string|true|none|The unit of time that `renewalPeriod` is measured in|
|renewalPfid|integer|true|none|Unique identifier of the renewal Product|
|supportBillOn|boolean|true|none|Whether the product supports the `billOn` option on the renewal endpoint|

#### Enumerated Values

|Property|Value|
|---|---|
|renewalPeriodUnit|MONTH|
|renewalPeriodUnit|QUARTER|
|renewalPeriodUnit|SEMI_ANNUAL|
|renewalPeriodUnit|YEAR|

<h2 id="tocS_SubscriptionRelations">SubscriptionRelations</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionrelations"></a>
<a id="schema_SubscriptionRelations"></a>
<a id="tocSsubscriptionrelations"></a>
<a id="tocssubscriptionrelations"></a>

```json
{
  "children": [
    "string"
  ],
  "parent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[string]|false|none|A set of related Subscriptions that will be canceled automatically if this Subscription is canceled|
|parent|string|false|none|Unique identifier of this Subscription's parent|

<h2 id="tocS_SubscriptionUpdate">SubscriptionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionupdate"></a>
<a id="schema_SubscriptionUpdate"></a>
<a id="tocSsubscriptionupdate"></a>
<a id="tocssubscriptionupdate"></a>

```json
{
  "paymentProfileId": 0,
  "renewAuto": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentProfileId|integer|false|none|Unique identifier of the payment profile you want to be used for automatic renewal|
|renewAuto|boolean|false|none|Whether or not you want the Subscription renew automatically|
