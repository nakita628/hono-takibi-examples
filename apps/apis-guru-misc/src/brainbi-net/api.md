<h1 id="brainbi">brainbi v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to the official API of the brainbi platform. Using this API you can freely integrate our analytics platform with any other solution. 
Please refer to the following documentation and in case of any issues, please contact us at service@brainbi.net.

Please note: for this API you will use your email and password from the brainbi.net platform to gather a Bearer Token for any API calls (use Login and get token). Once you are finished with your calls, please do a logout to remove your token and keep your account safe (use logout).

Base URLs:

* <a href=",">,</a>

<h1 id="brainbi-pricing-rules">Pricing Rules</h1>

## Rules

<a id="opIdrules"></a>

> Code samples

```bash
curl https://example.com/api/rule
```

`GET /api/rule`

This resource lists all pricing rules that are currently saved in you account.

<h3 id="rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Rule Data

<a id="opIdruleData"></a>

> Code samples

```bash
curl https://example.com/api/rule/ruleData/1
```

`GET /api/rule/ruleData/1`

This resource lists all data that wa saved for pricing rules.

<h3 id="rule-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="rule-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Rule Data Latest

<a id="opIdruleDataLatest"></a>

> Code samples

```bash
curl https://example.com/api/rule/ruleData/1/latest
```

`GET /api/rule/ruleData/1/latest`

This resource lists only the latest data point that wa saved for a pricing rule.

<h3 id="rule-data-latest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="rule-data-latest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="brainbi-products">Products</h1>

## [BETA] Scrape Product Copy

<a id="opId[beta]ScrapeProductCopy"></a>

> Code samples

```bash
curl https://example.com/api/analyze/pricing \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/analyze/pricing`

To update a product, please use the listed attributes listed underneath. 

<h3 id="beta-scrape-product-copy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|

<h3 id="beta-scrape-product-copy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Products

<a id="opIdproducts"></a>

> Code samples

```bash
curl https://example.com/api/products
```

`GET /api/products`

This resource lists all products that are currently saved in you account.

<h3 id="products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Products

<a id="opIdproducts1"></a>

> Code samples

```bash
curl https://example.com/api/products/1137 \
  -X DELETE \
  -H 'Content-Type: application/octet-stream'
```

`DELETE /api/products/1137`

Products

<h3 id="products-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="products-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="brainbi-customers">Customers</h1>

## Customers

<a id="opIdcustomers"></a>

> Code samples

```bash
curl https://example.com/api/customers
```

`GET /api/customers`

This resource lists all cusomters that are currently saved in your account.

<h3 id="customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="brainbi-orders">Orders</h1>

## Orders

<a id="opIdorders"></a>

> Code samples

```bash
curl https://example.com/api/orders
```

`GET /api/orders`

This resource lists all orders that are currently saved in your account.

<h3 id="orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Orders

<a id="opIdorders1"></a>

> Code samples

```bash
curl https://example.com/api/orders/1137 \
  -X DELETE \
  -H 'Content-Type: application/octet-stream'
```

`DELETE /api/orders/1137`

Orders

<h3 id="orders-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="orders-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="brainbi-seo">SEO</h1>

## SEO Latest Rankings

<a id="opIdseoLatestRankings"></a>

> Code samples

```bash
curl https://example.com/api/seo/ranking/latest
```

`GET /api/seo/ranking/latest`

This resource lists all pricing rules that are currently saved in you account.

<h3 id="seo-latest-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
||query|string|false|none|

<h3 id="seo-latest-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="brainbi-default">Default</h1>

## Login and get bearer token

<a id="opIdloginAndGetBearerToken"></a>

> Code samples

```bash
curl https://example.com/api/login \
  -X POST
```

`POST /api/login`

Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.

<h3 id="login-and-get-bearer-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|The same email you use for our platform.|
|password|query|string|false|The password email you use for our platform.|

<h3 id="login-and-get-bearer-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdlogout"></a>

> Code samples

```bash
curl https://example.com/api/logout \
  -X POST
```

`POST /api/logout`

Once you are done, call this endpoint to lock your account!

<h3 id="logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|The same email you use for our platform.|

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Register

<a id="opIdregister"></a>

> Code samples

```bash
curl https://example.com/api/register \
  -X POST
```

`POST /api/register`

Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.

<h3 id="register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first_name|query|string|false|required|
|last_name|query|string|false|required|
|company_name|query|string|false|required|
|shop_url|query|string|false|required|
|email|query|string|false|required|
|store_name|query|string|false|required|
|store_url|query|string|false|required|
|password|query|string|false|required|
|fromuser|query|string|false|required (always 1)|

<h3 id="register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Register and Create Store Connection for WooCommerce

<a id="opIdregisterAndCreateStoreConnectionForWooCommerce"></a>

> Code samples

```bash
curl https://example.com/api/register_woocommerce \
  -X POST
```

`POST /api/register_woocommerce`

Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.

<h3 id="register-and-create-store-connection-for-woocommerce-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|first_name|query|string|false|required|
|last_name|query|string|false|required|
|company_name|query|string|false|required|
|shop_url|query|string|false|required|
|email|query|string|false|required|
|store_name|query|string|false|required|
|store_url|query|string|false|required|
|password|query|string|false|required|
|fromuser|query|string|false|required (always 1)|
|api_url|query|string|false|required|
|consumer_key|query|string|false|required|
|consumer_secret|query|string|false|required|

<h3 id="register-and-create-store-connection-for-woocommerce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
