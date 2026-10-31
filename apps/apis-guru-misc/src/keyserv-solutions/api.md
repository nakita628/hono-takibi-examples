<h1 id="keyserv">KeyServ v1.4.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

KeyServ API

Base URLs:

* <a href="https://keyserv.solutions">https://keyserv.solutions</a>

<h1 id="keyserv-keysapi">KeysApi</h1>

## KeysApi_Current

<a id="opIdKeysApi_Current"></a>

> Code samples

```bash
curl https://example.com/v1/KeysApi/Current/string \
  -H 'Accept: application/json'
```

`GET /v1/KeysApi/Current/{serial}`

<h3 id="keysapicurrent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string(guid)|true|none|

> Example responses

> 200 Response

```json
{
  "current": true
}
```

<h3 id="keysapicurrent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="keysapicurrent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CurrentKey](#schemacurrentkey)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## KeysApi_Custom

<a id="opIdKeysApi_Custom"></a>

> Code samples

```bash
curl https://example.com/v1/KeysApi/Custom/string
```

`GET /v1/KeysApi/Custom/{serial}`

<h3 id="keysapicustom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string(guid)|true|none|

<h3 id="keysapicustom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="success">
This operation does not require authentication
</aside>

## KeysApi_Expiry

<a id="opIdKeysApi_Expiry"></a>

> Code samples

```bash
curl https://example.com/v1/KeysApi/Expiry/string \
  -H 'Accept: application/json'
```

`GET /v1/KeysApi/Expiry/{serial}`

<h3 id="keysapiexpiry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string(guid)|true|none|

> Example responses

> 200 Response

```json
{
  "expires": "1970-01-01T00:00:00Z",
  "time": "string"
}
```

<h3 id="keysapiexpiry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="keysapiexpiry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Expiry](#schemaexpiry)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## KeysApi_Find

<a id="opIdKeysApi_Find"></a>

> Code samples

```bash
curl https://example.com/v1/KeysApi/Find/string \
  -H 'Accept: application/json'
```

`GET /v1/KeysApi/Find/{serial}`

<h3 id="keysapifind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|string(guid)|true|none|

> Example responses

> 200 Response

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "commenced": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "current": true,
  "custom": null,
  "frequency": "string",
  "name": "string",
  "serial": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="keysapifind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="keysapifind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[KeyView](#schemakeyview)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="keyserv-productsapi">ProductsApi</h1>

## ProductsApi_PatchProduct2

<a id="opIdProductsApi_PatchProduct2"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "custom": null,
    "key": "string",
    "name": "string",
    "serial": "string"
  }'
```

`POST /v1/ProductsApi`

> Body parameter

```json
{
  "custom": null,
  "key": "string",
  "name": "string",
  "serial": "string"
}
```

<h3 id="productsapipatchproduct2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductCreateModify](#schemaproductcreatemodify) \| null|true|none|
|» *oneOf*|body|[ProductCreateModify](#schemaproductcreatemodify)|false|none|

<h3 id="productsapipatchproduct2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_PatchProduct

<a id="opIdProductsApi_PatchProduct"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "custom": null,
    "key": "string",
    "name": "string",
    "serial": "string"
  }'
```

`PATCH /v1/ProductsApi`

> Body parameter

```json
{
  "custom": null,
  "key": "string",
  "name": "string",
  "serial": "string"
}
```

<h3 id="productsapipatchproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductCreateModify](#schemaproductcreatemodify) \| null|true|none|
|» *oneOf*|body|[ProductCreateModify](#schemaproductcreatemodify)|false|none|

<h3 id="productsapipatchproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_Count

<a id="opIdProductsApi_Count"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/Count \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string"
  }'
```

`POST /v1/ProductsApi/Count`

> Body parameter

```json
{
  "key": "string"
}
```

<h3 id="productsapicount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKey](#schemaapikey) \| null|true|none|
|» *oneOf*|body|[ApiKey](#schemaapikey)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="productsapicount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="productsapicount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CountOf](#schemacountof)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_Find

<a id="opIdProductsApi_Find"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/Find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/ProductsApi/Find`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="productsapifind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32) \| null|false|none|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "custom": null,
  "name": "string",
  "serial": "string",
  "subscriptions": [
    {
      "action": "string",
      "callbackOnModify": true,
      "callbackUrl": "http://example.com",
      "commenced": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "custom": null,
      "frequency": "string",
      "keys": [
        {
          "action": "string",
          "callbackOnModify": true,
          "callbackUrl": "http://example.com",
          "commenced": "1970-01-01T00:00:00Z",
          "created": "1970-01-01T00:00:00Z",
          "current": true,
          "custom": null,
          "frequency": "string",
          "name": "string",
          "serial": "string",
          "updated": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="productsapifind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="productsapifind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ProductView](#schemaproductview)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_List

<a id="opIdProductsApi_List"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/List \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string"
  }'
```

`POST /v1/ProductsApi/List`

> Body parameter

```json
{
  "key": "string"
}
```

<h3 id="productsapilist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32) \| null|false|none|
|body|body|[ApiKey](#schemaapikey) \| null|true|none|
|» *oneOf*|body|[ApiKey](#schemaapikey)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "created": "1970-01-01T00:00:00Z",
    "custom": null,
    "name": "string",
    "serial": "string",
    "subscriptions": [
      {
        "action": "string",
        "callbackOnModify": true,
        "callbackUrl": "http://example.com",
        "commenced": "1970-01-01T00:00:00Z",
        "created": "1970-01-01T00:00:00Z",
        "custom": null,
        "frequency": "string",
        "keys": [
          {
            "action": "string",
            "callbackOnModify": true,
            "callbackUrl": "http://example.com",
            "commenced": "1970-01-01T00:00:00Z",
            "created": "1970-01-01T00:00:00Z",
            "current": true,
            "custom": null,
            "frequency": "string",
            "name": "string",
            "serial": "string",
            "updated": "1970-01-01T00:00:00Z"
          }
        ],
        "name": "string",
        "updated": "1970-01-01T00:00:00Z"
      }
    ],
    "updated": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="productsapilist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="productsapilist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProductView](#schemaproductview)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_Save

<a id="opIdProductsApi_Save"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/Save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "custom": null,
    "key": "string",
    "name": "string",
    "serial": "string"
  }'
```

`POST /v1/ProductsApi/Save`

> Body parameter

```json
{
  "custom": null,
  "key": "string",
  "name": "string",
  "serial": "string"
}
```

<h3 id="productsapisave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductCreateModify](#schemaproductcreatemodify) \| null|true|none|
|» *oneOf*|body|[ProductCreateModify](#schemaproductcreatemodify)|false|none|

> Example responses

> 201 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "custom": null,
  "name": "string",
  "serial": "string",
  "subscriptions": [
    {
      "action": "string",
      "callbackOnModify": true,
      "callbackUrl": "http://example.com",
      "commenced": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "custom": null,
      "frequency": "string",
      "keys": [
        {
          "action": "string",
          "callbackOnModify": true,
          "callbackUrl": "http://example.com",
          "commenced": "1970-01-01T00:00:00Z",
          "created": "1970-01-01T00:00:00Z",
          "current": true,
          "custom": null,
          "frequency": "string",
          "name": "string",
          "serial": "string",
          "updated": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="productsapisave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="productsapisave-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ProductView](#schemaproductview)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_DeleteProduct2

<a id="opIdProductsApi_DeleteProduct2"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/string \
  -X POST \
  -H 'X-Api-Key: string'
```

`POST /v1/ProductsApi/{serial}`

<h3 id="productsapideleteproduct2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string(guid)|true|none|
|serial|path|string(guid)|true|none|

<h3 id="productsapideleteproduct2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductsApi_DeleteProduct

<a id="opIdProductsApi_DeleteProduct"></a>

> Code samples

```bash
curl https://example.com/v1/ProductsApi/string \
  -X DELETE \
  -H 'X-Api-Key: string'
```

`DELETE /v1/ProductsApi/{serial}`

<h3 id="productsapideleteproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string(guid)|true|none|
|serial|path|string(guid)|true|none|

<h3 id="productsapideleteproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="keyserv-subscriptionsapi">SubscriptionsApi</h1>

## SubscriptionsApi_PutSubscription

<a id="opIdSubscriptionsApi_PutSubscription"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "string",
    "callbackOnModify": true,
    "callbackUrl": "http://example.com",
    "custom": null,
    "frequency": "string",
    "key": "string",
    "name": "string",
    "serial": "string",
    "startFrom": "string"
  }'
```

`PUT /v1/SubscriptionsApi`

> Body parameter

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "custom": null,
  "frequency": "string",
  "key": "string",
  "name": "string",
  "serial": "string",
  "startFrom": "string"
}
```

<h3 id="subscriptionsapiputsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify) \| null|true|none|
|» *oneOf*|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify)|false|none|

<h3 id="subscriptionsapiputsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_PutSubscription2

<a id="opIdSubscriptionsApi_PutSubscription2"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "string",
    "callbackOnModify": true,
    "callbackUrl": "http://example.com",
    "custom": null,
    "frequency": "string",
    "key": "string",
    "name": "string",
    "serial": "string",
    "startFrom": "string"
  }'
```

`POST /v1/SubscriptionsApi`

> Body parameter

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "custom": null,
  "frequency": "string",
  "key": "string",
  "name": "string",
  "serial": "string",
  "startFrom": "string"
}
```

<h3 id="subscriptionsapiputsubscription2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify) \| null|true|none|
|» *oneOf*|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify)|false|none|

<h3 id="subscriptionsapiputsubscription2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Count

<a id="opIdSubscriptionsApi_Count"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Count \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/SubscriptionsApi/Count`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapicount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiCredentials](#schemaapicredentials) \| null|true|none|
|» *oneOf*|body|[ApiCredentials](#schemaapicredentials)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

<h3 id="subscriptionsapicount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="subscriptionsapicount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CountOf](#schemacountof)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Disable2

<a id="opIdSubscriptionsApi_Disable2"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/SubscriptionsApi/Disable`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapidisable2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

<h3 id="subscriptionsapidisable2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Disable

<a id="opIdSubscriptionsApi_Disable"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Disable \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`PATCH /v1/SubscriptionsApi/Disable`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapidisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

<h3 id="subscriptionsapidisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Enable2

<a id="opIdSubscriptionsApi_Enable2"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/SubscriptionsApi/Enable`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapienable2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

<h3 id="subscriptionsapienable2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Enable

<a id="opIdSubscriptionsApi_Enable"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Enable \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`PATCH /v1/SubscriptionsApi/Enable`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapienable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

<h3 id="subscriptionsapienable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Find

<a id="opIdSubscriptionsApi_Find"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/SubscriptionsApi/Find`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapifind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

> Example responses

> 200 Response

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "commenced": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "custom": null,
  "frequency": "string",
  "keys": [
    {
      "action": "string",
      "callbackOnModify": true,
      "callbackUrl": "http://example.com",
      "commenced": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "current": true,
      "custom": null,
      "frequency": "string",
      "name": "string",
      "serial": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "name": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="subscriptionsapifind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="subscriptionsapifind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SubscriptionView](#schemasubscriptionview)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_List

<a id="opIdSubscriptionsApi_List"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/List \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "key": "string",
    "serial": "string"
  }'
```

`POST /v1/SubscriptionsApi/List`

> Body parameter

```json
{
  "key": "string",
  "serial": "string"
}
```

<h3 id="subscriptionsapilist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32) \| null|false|none|
|body|body|[FindCredentials](#schemafindcredentials) \| null|true|none|
|» *oneOf*|body|[FindCredentials](#schemafindcredentials)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "action": "string",
    "callbackOnModify": true,
    "callbackUrl": "http://example.com",
    "commenced": "1970-01-01T00:00:00Z",
    "created": "1970-01-01T00:00:00Z",
    "custom": null,
    "frequency": "string",
    "keys": [
      {
        "action": "string",
        "callbackOnModify": true,
        "callbackUrl": "http://example.com",
        "commenced": "1970-01-01T00:00:00Z",
        "created": "1970-01-01T00:00:00Z",
        "current": true,
        "custom": null,
        "frequency": "string",
        "name": "string",
        "serial": "string",
        "updated": "1970-01-01T00:00:00Z"
      }
    ],
    "name": "string",
    "updated": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="subscriptionsapilist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="subscriptionsapilist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionView](#schemasubscriptionview)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_Save

<a id="opIdSubscriptionsApi_Save"></a>

> Code samples

```bash
curl https://example.com/v1/SubscriptionsApi/Save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "string",
    "callbackOnModify": true,
    "callbackUrl": "http://example.com",
    "custom": null,
    "frequency": "string",
    "key": "string",
    "name": "string",
    "serial": "string",
    "startFrom": "string"
  }'
```

`POST /v1/SubscriptionsApi/Save`

> Body parameter

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "custom": null,
  "frequency": "string",
  "key": "string",
  "name": "string",
  "serial": "string",
  "startFrom": "string"
}
```

<h3 id="subscriptionsapisave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify) \| null|true|none|
|» *oneOf*|body|[SubscriptionCreateModify](#schemasubscriptioncreatemodify)|false|none|

> Example responses

> 201 Response

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "commenced": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "current": true,
  "custom": null,
  "frequency": "string",
  "name": "string",
  "serial": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="subscriptionsapisave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="subscriptionsapisave-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[KeyView](#schemakeyview)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_DeleteSubscription2

<a id="opIdSubscriptionsApi_DeleteSubscription2"></a>

> Code samples

```bash
curl 'https://example.com/v1/SubscriptionsApi/string?keep=true' \
  -X POST \
  -H 'X-Api-Key: string'
```

`POST /v1/SubscriptionsApi/{serial}`

<h3 id="subscriptionsapideletesubscription2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string(guid)|true|none|
|serial|path|string(guid)|true|none|
|keep|query|boolean \| null|true|none|

<h3 id="subscriptionsapideletesubscription2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

## SubscriptionsApi_DeleteSubscription

<a id="opIdSubscriptionsApi_DeleteSubscription"></a>

> Code samples

```bash
curl 'https://example.com/v1/SubscriptionsApi/string?keep=true' \
  -X DELETE \
  -H 'X-Api-Key: string'
```

`DELETE /v1/SubscriptionsApi/{serial}`

<h3 id="subscriptionsapideletesubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string(guid)|true|none|
|serial|path|string(guid)|true|none|
|keep|query|boolean \| null|true|none|

<h3 id="subscriptionsapideletesubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiCredentials">ApiCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaapicredentials"></a>
<a id="schema_ApiCredentials"></a>
<a id="tocSapicredentials"></a>
<a id="tocsapicredentials"></a>

```json
{
  "key": "string",
  "serial": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(guid)|false|none|none|
|serial|string(guid) \| null|false|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(guid)|false|none|none|

<h2 id="tocS_CountOf">CountOf</h2>
<!-- backwards compatibility -->
<a id="schemacountof"></a>
<a id="schema_CountOf"></a>
<a id="tocScountof"></a>
<a id="tocscountof"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|none|

<h2 id="tocS_CurrentKey">CurrentKey</h2>
<!-- backwards compatibility -->
<a id="schemacurrentkey"></a>
<a id="schema_CurrentKey"></a>
<a id="tocScurrentkey"></a>
<a id="tocscurrentkey"></a>

```json
{
  "current": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|boolean|false|none|none|

<h2 id="tocS_Expiry">Expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_Expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
{
  "expires": "1970-01-01T00:00:00Z",
  "time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires|string(date-time)|false|none|none|
|time|string(time-span)|false|none|none|

<h2 id="tocS_FindCredentials">FindCredentials</h2>
<!-- backwards compatibility -->
<a id="schemafindcredentials"></a>
<a id="schema_FindCredentials"></a>
<a id="tocSfindcredentials"></a>
<a id="tocsfindcredentials"></a>

```json
{
  "key": "string",
  "serial": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(guid)|false|none|none|
|serial|string(guid)|false|none|none|

<h2 id="tocS_KeyView">KeyView</h2>
<!-- backwards compatibility -->
<a id="schemakeyview"></a>
<a id="schema_KeyView"></a>
<a id="tocSkeyview"></a>
<a id="tocskeyview"></a>

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "commenced": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "current": true,
  "custom": null,
  "frequency": "string",
  "name": "string",
  "serial": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|callbackOnModify|boolean|true|none|none|
|callbackUrl|string(uri) \| null|false|none|none|
|commenced|string(date-time)|true|none|none|
|created|string(date-time)|false|none|none|
|current|boolean|false|none|none|
|custom|object \| null|false|none|none|
|frequency|string|true|none|none|
|name|string \| null|false|none|none|
|serial|string(guid)|false|none|none|
|updated|string(date-time) \| null|false|none|none|

<h2 id="tocS_ProductCreateModify">ProductCreateModify</h2>
<!-- backwards compatibility -->
<a id="schemaproductcreatemodify"></a>
<a id="schema_ProductCreateModify"></a>
<a id="tocSproductcreatemodify"></a>
<a id="tocsproductcreatemodify"></a>

```json
{
  "custom": null,
  "key": "string",
  "name": "string",
  "serial": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|object \| null|false|none|none|
|key|string(guid)|false|none|none|
|name|string \| null|false|none|none|
|serial|string(guid) \| null|false|none|none|

<h2 id="tocS_ProductView">ProductView</h2>
<!-- backwards compatibility -->
<a id="schemaproductview"></a>
<a id="schema_ProductView"></a>
<a id="tocSproductview"></a>
<a id="tocsproductview"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "custom": null,
  "name": "string",
  "serial": "string",
  "subscriptions": [
    {
      "action": "string",
      "callbackOnModify": true,
      "callbackUrl": "http://example.com",
      "commenced": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "custom": null,
      "frequency": "string",
      "keys": [
        {
          "action": "string",
          "callbackOnModify": true,
          "callbackUrl": "http://example.com",
          "commenced": "1970-01-01T00:00:00Z",
          "created": "1970-01-01T00:00:00Z",
          "current": true,
          "custom": null,
          "frequency": "string",
          "name": "string",
          "serial": "string",
          "updated": "1970-01-01T00:00:00Z"
        }
      ],
      "name": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|none|none|
|custom|object \| null|false|none|none|
|name|string \| null|false|none|none|
|serial|string(guid)|false|none|none|
|subscriptions|[[SubscriptionView](#schemasubscriptionview)]|false|none|none|
|updated|string(date-time) \| null|false|none|none|

<h2 id="tocS_SubscriptionCreateModify">SubscriptionCreateModify</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncreatemodify"></a>
<a id="schema_SubscriptionCreateModify"></a>
<a id="tocSsubscriptioncreatemodify"></a>
<a id="tocssubscriptioncreatemodify"></a>

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "custom": null,
  "frequency": "string",
  "key": "string",
  "name": "string",
  "serial": "string",
  "startFrom": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|callbackOnModify|boolean \| null|false|none|none|
|callbackUrl|string(uri) \| null|false|none|none|
|custom|object \| null|false|none|none|
|frequency|string|true|none|none|
|key|string(guid)|false|none|none|
|name|string \| null|false|none|none|
|serial|string(guid)|false|none|none|
|startFrom|string \| null|false|none|none|

<h2 id="tocS_SubscriptionView">SubscriptionView</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionview"></a>
<a id="schema_SubscriptionView"></a>
<a id="tocSsubscriptionview"></a>
<a id="tocssubscriptionview"></a>

```json
{
  "action": "string",
  "callbackOnModify": true,
  "callbackUrl": "http://example.com",
  "commenced": "1970-01-01T00:00:00Z",
  "created": "1970-01-01T00:00:00Z",
  "custom": null,
  "frequency": "string",
  "keys": [
    {
      "action": "string",
      "callbackOnModify": true,
      "callbackUrl": "http://example.com",
      "commenced": "1970-01-01T00:00:00Z",
      "created": "1970-01-01T00:00:00Z",
      "current": true,
      "custom": null,
      "frequency": "string",
      "name": "string",
      "serial": "string",
      "updated": "1970-01-01T00:00:00Z"
    }
  ],
  "name": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|callbackOnModify|boolean|true|none|none|
|callbackUrl|string(uri) \| null|false|none|none|
|commenced|string(date-time)|true|none|none|
|created|string(date-time)|false|none|none|
|custom|object \| null|false|none|none|
|frequency|string|true|none|none|
|keys|[[KeyView](#schemakeyview)]|false|none|none|
|name|string \| null|false|none|none|
|updated|string(date-time) \| null|false|none|none|
