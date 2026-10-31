<h1 id="papinet-api">papiNet API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

papinet API is a global initiative for the Forst and Paper supply chain.

Base URLs:

* <a href="https://papinet.papinet.io">https://papinet.papinet.io</a> - papiNet Mock Server

Web: <a href="https://github.com/papinet/papiNet-API/issues">papiNet API CWG</a> 
License: <a href="https://github.com/papinet/papiNet-API/blob/patrice-v1.0.0/LICENSE">Apache 2.0</a>

<h1 id="papinet-api-default">Default</h1>

## List `orders`

> Code samples

```bash
curl https://example.com/orders \
  -H 'Accept: application/json'
```

`GET /orders`

Gets a paginated list of all `orders`.

<h3 id="list-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderStatus|query|string|false|Filter by status|
|offset|query|string|false|The number of items to skip before starting to collect the result set.|
|limit|query|string|false|The maximum number of items to return. If the value exceeds the maximum, then the maximum value will be used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderStatus|Active|
|orderStatus|Cancelled|
|orderStatus|Completed|

> Example responses

> 200 Response

```json
{
  "links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "orders": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfLineItems": 0,
      "orderNumber": "string",
      "orderStatus": "Active"
    }
  ]
}
```

<h3 id="list-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListOfOrders](#schemalistoforders)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an `order`

> Code samples

```bash
curl https://example.com/orders/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json'
```

`GET /orders/{orderId}`

Gets the details of a specific `order`, including a paginated list of all its lines.

<h3 id="get-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string(uuid)|true|UUID of the `order` to get|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfLineItems": 0,
  "orderNumber": "string",
  "orderStatus": "Active",
  "links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "orderLineItems": [
    {
      "changeable": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "orderLineItemNumber": 0,
      "orderLineItemStatus": "Cancelled",
      "quantities": [
        {
          "quantityContext": "Confirmed",
          "quantityType": "Area",
          "quantityUOM": "Bale",
          "quantityValue": 0
        }
      ]
    }
  ]
}
```

<h3 id="get-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Order](#schemaorder)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GetOrder">GetOrder</h2>
<!-- backwards compatibility -->
<a id="schemagetorder"></a>
<a id="schema_GetOrder"></a>
<a id="tocSgetorder"></a>
<a id="tocsgetorder"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfLineItems": 0,
  "orderNumber": "string",
  "orderStatus": "Active",
  "links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "orderLineItems": [
    {
      "changeable": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "orderLineItemNumber": 0,
      "orderLineItemStatus": "Cancelled",
      "quantities": [
        {
          "quantityContext": "Confirmed",
          "quantityType": "Area",
          "quantityUOM": "Bale",
          "quantityValue": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|numberOfLineItems|integer|true|none|none|
|orderNumber|string|true|none|none|
|orderStatus|string|true|none|none|
|links|[PaginationLinks](#schemapaginationlinks)|false|none|none|
|orderLineItems|[[OrderLineItem](#schemaorderlineitem)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orderStatus|Active|
|orderStatus|Cancelled|
|orderStatus|Completed|

<h2 id="tocS_ListOfOrders">ListOfOrders</h2>
<!-- backwards compatibility -->
<a id="schemalistoforders"></a>
<a id="schema_ListOfOrders"></a>
<a id="tocSlistoforders"></a>
<a id="tocslistoforders"></a>

```json
{
  "links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "orders": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "numberOfLineItems": 0,
      "orderNumber": "string",
      "orderStatus": "Active"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[PaginationLinks](#schemapaginationlinks)|false|none|none|
|orders|[[OrderHeader](#schemaorderheader)]|false|none|none|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfLineItems": 0,
  "orderNumber": "string",
  "orderStatus": "Active",
  "links": {
    "first": {
      "href": "string"
    },
    "last": {
      "href": "string"
    },
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "orderLineItems": [
    {
      "changeable": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "orderLineItemNumber": 0,
      "orderLineItemStatus": "Cancelled",
      "quantities": [
        {
          "quantityContext": "Confirmed",
          "quantityType": "Area",
          "quantityUOM": "Bale",
          "quantityValue": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|numberOfLineItems|integer|true|none|none|
|orderNumber|string|true|none|none|
|orderStatus|string|true|none|none|
|links|[PaginationLinks](#schemapaginationlinks)|false|none|none|
|orderLineItems|[[OrderLineItem](#schemaorderlineitem)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orderStatus|Active|
|orderStatus|Cancelled|
|orderStatus|Completed|

<h2 id="tocS_OrderHeader">OrderHeader</h2>
<!-- backwards compatibility -->
<a id="schemaorderheader"></a>
<a id="schema_OrderHeader"></a>
<a id="tocSorderheader"></a>
<a id="tocsorderheader"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "numberOfLineItems": 0,
  "orderNumber": "string",
  "orderStatus": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|numberOfLineItems|integer|true|none|none|
|orderNumber|string|true|none|none|
|orderStatus|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orderStatus|Active|
|orderStatus|Cancelled|
|orderStatus|Completed|

<h2 id="tocS_OrderLineItem">OrderLineItem</h2>
<!-- backwards compatibility -->
<a id="schemaorderlineitem"></a>
<a id="schema_OrderLineItem"></a>
<a id="tocSorderlineitem"></a>
<a id="tocsorderlineitem"></a>

```json
{
  "changeable": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "orderLineItemNumber": 0,
  "orderLineItemStatus": "Cancelled",
  "quantities": [
    {
      "quantityContext": "Confirmed",
      "quantityType": "Area",
      "quantityUOM": "Bale",
      "quantityValue": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeable|boolean|false|none|none|
|id|string(uuid)|true|none|none|
|orderLineItemNumber|number|true|none|none|
|orderLineItemStatus|string|true|none|none|
|quantities|[object]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|orderLineItemStatus|Cancelled|
|orderLineItemStatus|Completed|
|orderLineItemStatus|Confirmed|
|orderLineItemStatus|Pending|
|orderLineItemStatus|ProductionCompleted|
|orderLineItemStatus|ShipmentCompleted|

<h2 id="tocS_PaginationLinks">PaginationLinks</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlinks"></a>
<a id="schema_PaginationLinks"></a>
<a id="tocSpaginationlinks"></a>
<a id="tocspaginationlinks"></a>

```json
{
  "first": {
    "href": "string"
  },
  "last": {
    "href": "string"
  },
  "next": {
    "href": "string"
  },
  "prev": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|object|false|none|none|
|last|object|false|none|none|
|next|object|true|none|none|
|prev|object|false|none|none|
