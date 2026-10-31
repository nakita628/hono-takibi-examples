<h1 id="uber-api">Uber API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Move your app forward with the Uber API

Base URLs:

* <a href="https://api.uber.com/v1">https://api.uber.com/v1</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **server_token**, in: query.

<h1 id="uber-api-products">Products</h1>

## Product Types

> Code samples

```bash
curl "https://example.com/products?latitude=0&longitude=0&server_token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /products`

The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.

<h3 id="product-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|latitude|query|number(double)|true|Latitude component of location.|
|longitude|query|number(double)|true|Longitude component of location.|

> Example responses

> 200 Response

```json
{
  "products": [
    {
      "product_id": "string",
      "description": "string",
      "display_name": "string",
      "capacity": 0,
      "image": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

<h3 id="product-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of products|[ProductList](#schemaproductlist)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

<h1 id="uber-api-estimates">Estimates</h1>

## Price Estimates

> Code samples

```bash
curl 'https://example.com/estimates/price?start_latitude=0&start_longitude=0&end_latitude=0&end_longitude=0' \
  -H 'Accept: application/json'
```

`GET /estimates/price`

The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.

<h3 id="price-estimates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_latitude|query|number(double)|true|Latitude component of start location.|
|start_longitude|query|number(double)|true|Longitude component of start location.|
|end_latitude|query|number(double)|true|Latitude component of end location.|
|end_longitude|query|number(double)|true|Longitude component of end location.|

> Example responses

> 200 Response

```json
[
  {
    "product_id": "string",
    "currency_code": "string",
    "display_name": "string",
    "estimate": "string",
    "low_estimate": 0,
    "high_estimate": 0,
    "surge_multiplier": 0
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

<h3 id="price-estimates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of price estimates by product|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="price-estimates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PriceEstimate](#schemapriceestimate)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Time Estimates

> Code samples

```bash
curl 'https://example.com/estimates/time?start_latitude=0&start_longitude=0' \
  -H 'Accept: application/json'
```

`GET /estimates/time`

The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.

<h3 id="time-estimates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_latitude|query|number(double)|true|Latitude component of start location.|
|start_longitude|query|number(double)|true|Longitude component of start location.|
|customer_uuid|query|string(uuid)|false|Unique customer identifier to be used for experience customization.|
|product_id|query|string|false|Unique identifier representing a specific product for a given latitude & longitude.|

> Example responses

> 200 Response

```json
[
  {
    "product_id": "string",
    "description": "string",
    "display_name": "string",
    "capacity": 0,
    "image": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

<h3 id="time-estimates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of products|Inline|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="time-estimates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Product](#schemaproduct)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="uber-api-user">User</h1>

## User Profile

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json'
```

`GET /me`

The User Profile endpoint returns information about the Uber user that has authorized with the application.

> Example responses

> 200 Response

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "picture": "string",
  "promo_code": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

<h3 id="user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Profile information for a user|[Profile](#schemaprofile)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## User Activity

> Code samples

```bash
curl https://example.com/history \
  -H 'Accept: application/json'
```

`GET /history`

The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.

<h3 id="user-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Offset the list of returned results by this amount. Default is zero.|
|limit|query|integer(int32)|false|Number of items to retrieve. Default is 5, maximum is 100.|

> Example responses

> 200 Response

```json
{
  "offset": 0,
  "limit": 0,
  "count": 0,
  "history": [
    {
      "uuid": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

<h3 id="user-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|History information for the given user|[Activities](#schemaactivities)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "product_id": "string",
  "description": "string",
  "display_name": "string",
  "capacity": 0,
  "image": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product_id|string|false|none|Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.|
|description|string|false|none|Description of product.|
|display_name|string|false|none|Display name of product.|
|capacity|integer|false|none|Capacity of product. For example, 4 people.|
|image|string|false|none|Image URL representing the product.|

<h2 id="tocS_ProductList">ProductList</h2>
<!-- backwards compatibility -->
<a id="schemaproductlist"></a>
<a id="schema_ProductList"></a>
<a id="tocSproductlist"></a>
<a id="tocsproductlist"></a>

```json
{
  "products": [
    {
      "product_id": "string",
      "description": "string",
      "display_name": "string",
      "capacity": 0,
      "image": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[Product](#schemaproduct)]|false|none|Contains the list of products|

<h2 id="tocS_PriceEstimate">PriceEstimate</h2>
<!-- backwards compatibility -->
<a id="schemapriceestimate"></a>
<a id="schema_PriceEstimate"></a>
<a id="tocSpriceestimate"></a>
<a id="tocspriceestimate"></a>

```json
{
  "product_id": "string",
  "currency_code": "string",
  "display_name": "string",
  "estimate": "string",
  "low_estimate": 0,
  "high_estimate": 0,
  "surge_multiplier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product_id|string|false|none|Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles|
|currency_code|string|false|none|[ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.|
|display_name|string|false|none|Display name of product.|
|estimate|string|false|none|Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.|
|low_estimate|number|false|none|Lower bound of the estimated price.|
|high_estimate|number|false|none|Upper bound of the estimated price.|
|surge_multiplier|number|false|none|Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "picture": "string",
  "promo_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|First name of the Uber user.|
|last_name|string|false|none|Last name of the Uber user.|
|email|string|false|none|Email address of the Uber user|
|picture|string|false|none|Image URL of the Uber user.|
|promo_code|string|false|none|Promo code of the Uber user.|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "uuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|Unique identifier for the activity|

<h2 id="tocS_Activities">Activities</h2>
<!-- backwards compatibility -->
<a id="schemaactivities"></a>
<a id="schema_Activities"></a>
<a id="tocSactivities"></a>
<a id="tocsactivities"></a>

```json
{
  "offset": 0,
  "limit": 0,
  "count": 0,
  "history": [
    {
      "uuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int32)|false|none|Position in pagination.|
|limit|integer(int32)|false|none|Number of items to retrieve (100 max).|
|count|integer(int32)|false|none|Total number of items available.|
|history|[[Activity](#schemaactivity)]|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string",
  "fields": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|
|fields|string|false|none|none|
