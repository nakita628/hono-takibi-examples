<h1 id="commerce-api">Commerce API v2.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Codat's standardized API for accessing commerce data

Codat's Commerce API allows you to access standardised data from over 11 commerce and POS systems.

Standardize how you connect to your customers’ payment, PoS, and eCommerce systems. Retrieve orders, payouts, payments, and product data in the same way for all the leading commerce platforms.

[Read more...](https://docs.codat.io/commerce-api/overview)

[See our OpenAPI spec](https://github.com/codatio/oas)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a> - Production

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:support@codat.io">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="commerce-api-customers">Customers</h1>

Retrieve standardized data from linked commerce platforms.

## List customers

<a id="opIdlist-customers"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-customers?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-customers`

List all commerce customers for the given company and data connection

<h3 id="list-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "_links": {
    "current": {
      "href": "../dictionary"
    },
    "next": {
      "href": "../dictionary"
    },
    "previous": {
      "href": "../dictionary"
    },
    "self": {
      "href": "../dictionary"
    }
  },
  "pageNumber": 0,
  "pageSize": 0,
  "results": [
    {
      "amount": 194.12,
      "createdDate": "2019-08-24T14:15:22Z",
      "currency": "GBP",
      "dueDate": "2019-08-24T14:15:22Z",
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "modifiedDate": "2019-08-24T14:15:22Z",
      "paymentMethodRef": {
        "id": "EILBDVJVNUAGVKRQ",
        "name": "AliPay"
      },
      "paymentProvider": "Amazon Pay",
      "sourceModifiedDate": "2019-08-24T14:15:22Z",
      "status": "Pending"
    }
  ],
  "totalResults": 0
}
```

<h3 id="list-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Customers](#schemacustomers)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-disputes">Disputes</h1>

Retrieve standardized data from linked commerce platforms.

## List disputes

<a id="opIdlist-disputes"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-disputes?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-disputes`

List commerce disputes

<h3 id="list-disputes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "_links": {
    "current": {
      "href": "../dictionary"
    },
    "next": {
      "href": "../dictionary"
    },
    "previous": {
      "href": "../dictionary"
    },
    "self": {
      "href": "../dictionary"
    }
  },
  "pageNumber": 0,
  "pageSize": 0,
  "results": [
    {
      "createdDate": "2019-08-24T14:15:22Z",
      "currency": "GBP",
      "disputedTransactions": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
        "type": "Fee"
      },
      "dueDate": "2021-03-29T14:39:55",
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "modifiedDate": "2019-08-24T14:15:22Z",
      "reason": "Unhappy with product",
      "sourceModifiedDate": "2019-08-24T14:15:22Z",
      "status": "Won",
      "totalAmount": 194.12
    }
  ],
  "totalResults": 0
}
```

<h3 id="list-disputes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Disputes](#schemadisputes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-company-info">Company info</h1>

Retrieve standardized data from linked commerce platforms.

## Get company info

<a id="opIdget-company-info"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-info \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-info`

Retrieve information about the company, as seen in the commerce platform.

This may include information like addresses, tax registration details and social media or website information.

<h3 id="get-company-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accountBalances": [
    {
      "available": 0,
      "currency": {},
      "pending": 0,
      "reserved": 0
    }
  ],
  "addresses": [
    {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "region": "string",
      "type": "Billing"
    }
  ],
  "baseCurrency": "GBP",
  "commercePlatformRef": "string",
  "companyLegalName": "Codat Limited",
  "companyName": "Codat",
  "phoneNumbers": [
    {
      "number": "+44 25691 154789",
      "type": "Primary"
    }
  ],
  "registrationNumber": 10480375,
  "sourceUrls": {
    "url1": "https://connect.sandbox.com/v2/customers",
    "url2": "https://connect.sandbox.com/v2/disputes"
  },
  "webLinks": [
    {
      "type": "Website",
      "url": "https://codat.io"
    }
  ],
  "createdDate": "2022-10-23T00:00:00Z",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

<h3 id="get-company-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanyInfo](#schemacompanyinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-locations">Locations</h1>

Retrieve standardized data from linked commerce platforms.

## List locations

<a id="opIdlist-locations"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-locations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-locations`

Retrieve a list of locations as seen in the commerce platform.

A `location` is a geographic place at which stocks of products may be held, or from where orders were placed.

<h3 id="list-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "_links": {
    "current": {
      "href": "../dictionary"
    },
    "next": {
      "href": "../dictionary"
    },
    "previous": {
      "href": "../dictionary"
    },
    "self": {
      "href": "../dictionary"
    }
  },
  "pageNumber": 0,
  "pageSize": 0,
  "results": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "region": "string",
        "type": "Billing"
      },
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "modifiedDate": "2019-08-24T14:15:22Z",
      "name": "string",
      "sourceModifiedDate": "2019-08-24T14:15:22Z"
    }
  ],
  "totalResults": 0
}
```

<h3 id="list-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocationsResponse](#schemalocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-orders">Orders</h1>

Retrieve standardized data from linked commerce platforms.

## List orders

<a id="opIdlist-orders"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-orders?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders`

Get a list of orders placed or held on the linked commerce platform

<h3 id="list-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "country": "CAN",
      "createdDate": "2021-03-28T03:00:14",
      "currency": "CAD",
      "customerRef": {
        "id": "2634d180-7205-43f0-a73d-84af6443a005",
        "name": "Emmy Roberts"
      },
      "id": "01e63721-1205-478e-8503-9d8bf8a93f44",
      "locationRef": {
        "id": "47bbffc7-c045-4b0f-a3bb-ecf1f669edfa"
      },
      "modifiedDate": "2022-02-02T11:02:45Z",
      "orderLineItems": [
        {
          "discountAllocations": [],
          "id": "116113a6-54d3-4624-ba73-26a77a5ffd51",
          "productRef": {
            "id": "ac186646-41f2-4280-afea-1012c59459ab",
            "name": "Intelligent Concrete Salad"
          },
          "productVariantRef": {
            "id": "f9ca9de5-9e31-460d-ac81-368f4e7c8fc0",
            "name": "Small Incredible Wooden Soap"
          },
          "quantity": 1,
          "taxPercentage": 20,
          "taxes": [
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "Sales Tax"
              }
            },
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "City Tax"
              }
            }
          ],
          "totalAmount": 12,
          "totalTaxAmount": 2,
          "unitPrice": 10
        }
      ],
      "orderNumber": "99123956",
      "payments": [
        {
          "amount": 12,
          "createdDate": "2021-03-28T03:00:14",
          "currency": "CAD",
          "dueDate": "2021-04-04T03:00:14",
          "id": "defdceb6-83a3-4b7d-a74e-e9ef947d5f48",
          "modifiedDate": "2022-02-02T11:02:45",
          "status": "Unknown",
          "type": "Paypal"
        }
      ],
      "serviceCharges": [
        {
          "description": "Service Charge",
          "quantity": 1,
          "taxAmount": 0.2,
          "taxPercentage": 20,
          "taxes": [
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "Service Tax"
              }
            }
          ],
          "totalAmount": 1.2,
          "type": "Generic"
        }
      ],
      "sourceModifiedDate": "2021-03-28T03:00:14",
      "totalAmount": 12,
      "totalDiscount": 0,
      "totalGratuity": 1,
      "totalRefund": 0,
      "totalTaxAmount": 2
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Orders](#schemaorders)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-payments">Payments</h1>

Retrieve standardized data from linked commerce platforms.

## List payment methods

<a id="opIdlist-payment-methods"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-paymentMethods?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-paymentMethods`

Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.

<h3 id="list-payment-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "name": "Alipay",
      "status": "Active",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaymentMethods](#schemapaymentmethods)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List payments

<a id="opIdlist-payments"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-payments?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-payments`

List commerce payments for the given company & data connection.

<h3 id="list-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "amount": 194.12,
      "currency": "GBP",
      "dueDate": "2022-10-23T00:00:00Z",
      "paymentMethodRef": {
        "id": "EILBDVJVNUAGVKRQ",
        "name": "AliPay"
      },
      "paymentProvider": "Amazon Pay",
      "status": "Pending",
      "createdDate": "2022-10-23T00:00:00Z",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Payments](#schemapayments)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-products">Products</h1>

Retrieve standardized data from linked commerce platforms.

## List product categories

<a id="opIdlist-product-categories"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-productCategories?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-productCategories`

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

<h3 id="list-product-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "productCategories": [
        {
          "ancestorRefs": [],
          "hasChildren": true,
          "id": "100",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Entertainment",
          "sourceModifiedDate": "2021-10-01T12:53:21Z"
        },
        {
          "ancestorRefs": [
            {
              "id": "100",
              "name": "Entertainment"
            }
          ],
          "hasChildren": true,
          "id": "101",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Cinema",
          "sourceModifiedDate": "2021-10-01T12:55:02Z"
        },
        {
          "ancestorRefs": [
            {
              "id": "100",
              "name": "Entertainment"
            },
            {
              "id": "101",
              "name": "Cinema"
            }
          ],
          "hasChildren": false,
          "id": "102",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Movie",
          "sourceModifiedDate": "2021-12-25T12:00:00Z"
        }
      ]
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-product-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProductCategories](#schemaproductcategories)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List products

<a id="opIdlist-products"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-products?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-products`

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

<h3 id="list-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "categorization": "Hardware",
      "description": "1tb Western Digital Hard Drive",
      "isGiftCard": true,
      "name": "Hard Drive",
      "variants": [
        {
          "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
          "barcode": "564158468416486458646886484",
          "inventory": [
            {
              "locations": [
                {
                  "locationRef": {
                    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
                    "name": "string"
                  },
                  "quantity": 0
                }
              ],
              "totalQuantity": 0
            }
          ],
          "isTaxEnabled": true,
          "name": "Red Coat",
          "prices": [
            {
              "currency": "GBP",
              "unitPrice": 0
            }
          ],
          "shippingRequired": true,
          "sku": "Coat-Red-Lrg",
          "status": "Unknown",
          "unitOfMeasure": "kg",
          "vatPercentage": 12.5,
          "createdDate": "2022-10-23T00:00:00Z",
          "modifiedDate": "2022-10-23T00:00:00Z",
          "sourceModifiedDate": "2022-10-23T00:00:00Z"
        }
      ]
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Products](#schemaproducts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-tax-components">Tax components</h1>

Retrieve standardized data from linked commerce platforms.

## List tax components

<a id="opIdget-tax-components"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-taxComponents \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-taxComponents`

This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

<h3 id="list-tax-components-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "taxComponents": [
    {
      "id": "85b32439-37a0-4085-b710-054732bbcea2",
      "isCompound": false,
      "modifiedDate": "2021-08-06T06:00:27",
      "name": "Sales Tax (10%)",
      "rate": 0.1,
      "sourceModifiedDate": "2021-08-06T06:00:27"
    },
    {
      "id": "687e67ae-80f2-44e0-b17a-6a3e1f9c00f9",
      "isCompound": false,
      "modifiedDate": "2021-08-06T06:00:27",
      "name": "Sales Tax (15%)",
      "rate": 0.15,
      "sourceModifiedDate": "2022-04-25T02:45:27"
    }
  ]
}
```

<h3 id="list-tax-components-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TaxComponents](#schemataxcomponents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="commerce-api-transactions">Transactions</h1>

Retrieve standardized data from linked commerce platforms.

## List transactions

<a id="opIdlist-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/commerce-transactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/commerce-transactions`

Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.

<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "currency": "GBP",
      "subType": "CardPayment",
      "totalAmount": 194.12,
      "transactionSourceRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
        "type": "Fee"
      },
      "type": "Payment",
      "createdDate": "2022-10-23T00:00:00Z",
      "sourceCreatedDate": "2022-10-23T00:00:00Z",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Transactions](#schematransactions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "line1": "string",
  "line2": "string",
  "postalCode": "string",
  "region": "string",
  "type": "Billing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The third line of the address, or city|
|country|string|false|none|The country for the address|
|line1|string|false|none|The first line of the address|
|line2|string|false|none|The second line of the address|
|postalCode|string|false|none|The postal (or zip) code for the address|
|region|string|false|none|The fourth line of the address, or region|
|type|string|false|none|The type of the address|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Billing|
|type|Delivery|
|type|Order|
|type|Inventory|
|type|Unknown|

<h2 id="tocS_CompanyInfo">CompanyInfo</h2>
<!-- backwards compatibility -->
<a id="schemacompanyinfo"></a>
<a id="schema_CompanyInfo"></a>
<a id="tocScompanyinfo"></a>
<a id="tocscompanyinfo"></a>

```json
{
  "accountBalances": [
    {
      "available": 0,
      "currency": {},
      "pending": 0,
      "reserved": 0
    }
  ],
  "addresses": [
    {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "region": "string",
      "type": "Billing"
    }
  ],
  "baseCurrency": "GBP",
  "commercePlatformRef": "string",
  "companyLegalName": "Codat Limited",
  "companyName": "Codat",
  "phoneNumbers": [
    {
      "number": "+44 25691 154789",
      "type": "Primary"
    }
  ],
  "registrationNumber": 10480375,
  "sourceUrls": {
    "url1": "https://connect.sandbox.com/v2/customers",
    "url2": "https://connect.sandbox.com/v2/disputes"
  },
  "webLinks": [
    {
      "type": "Website",
      "url": "https://codat.io"
    }
  ],
  "createdDate": "2022-10-23T00:00:00Z",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

In the Codat system, company information includes standard commercial details about 
a linked company, such as their address, phone number, and company registration.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=companyInfo) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountBalances|[object]|false|none|The available and current cash balances for the company's accounts|
|addresses|[[Address](#schemaaddress)]|false|none|Addresses associated with the company|
|baseCurrency|string(ISO4217)|false|none|The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.<br><br>## Unknown currencies<br><br>In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. <br><br>There are only a very small number of edge cases where this currency code is returned by the Codat system.|
|commercePlatformRef|string|false|none|Identifier or reference for the company in the commerce platform|
|companyLegalName|string|false|none|The full legal name of the company|
|companyName|string|false|none|The name of the company|
|phoneNumbers|[[PhoneNumber](#schemaphonenumber)]|false|none|Phone numbers associated with the company|
|registrationNumber|string|false|none|The registration number of the company|
|sourceUrls|object|false|none|URL addresses for the originating system. For example, potential use cases include 'deeplinking' to the originating system|
|webLinks|[object]|false|none|Weblinks associated with the company|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_CreatedDate">CreatedDate</h2>
<!-- backwards compatibility -->
<a id="schemacreateddate"></a>
<a id="schema_CreatedDate"></a>
<a id="tocScreateddate"></a>
<a id="tocscreateddate"></a>

```json
{
  "createdDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "customers": [
    {
      "addresses": [
        {
          "city": "London",
          "country": "United Kingdom",
          "line1": "301 Duck Pond",
          "line2": "28 Green Street",
          "postalCode": "WX1X 0BE",
          "region": "England",
          "type": "billing"
        },
        {
          "city": "Paris",
          "country": "France",
          "line1": "Bread Street",
          "line2": "Bird Avenue",
          "postalCode": "WDF 123",
          "region": "France",
          "type": "delivery"
        }
      ],
      "createdDate": "0001-01-01T00:00:00",
      "customerName": "Daffy Duck",
      "defaultCurrency": "GBP",
      "emailAddress": "d.duck@warnerbros.com",
      "id": "15",
      "modifiedDate": null,
      "note": "Regular customer",
      "phone": "(877) 492-8687",
      "sourceModifiedDate": "2020-09-15T23:52:28"
    },
    {
      "addresses": [
        {
          "city": "London",
          "country": "United Kingdom",
          "line1": "101 Fire Rooms",
          "line2": "Engine Street",
          "postalCode": "WC1X 0BE",
          "region": "England",
          "type": "billing"
        }
      ],
      "createdDate": "0001-01-01T00:00:00",
      "customerName": "Tasmanian Devil",
      "defaultCurrency": "GBP",
      "emailAddress": "t.devil@warnerbros.com",
      "id": "18",
      "modifiedDate": null,
      "note": "Handle with care",
      "phone": "+1-202-555-0181",
      "sourceModifiedDate": "2020-04-16T02:41:52"
    },
    {
      "addresses": [
        {
          "city": "Yorkshire",
          "country": "United Kingdom",
          "line1": "301 Carrot Street",
          "line2": "Orange Town",
          "postalCode": "WF1X 0BE",
          "region": "England",
          "type": "billing"
        },
        {
          "city": "Paris",
          "country": "France",
          "line1": "424 Field Street",
          "line2": "The Meadow",
          "postalCode": "WDF 123",
          "region": "France",
          "type": "delivery"
        }
      ],
      "createdDate": "0001-01-01T00:00:00",
      "customerName": "Bugs Bunny",
      "defaultCurrency": "GBP",
      "emailAddress": "b.bunny@warnerbros.com",
      "id": "a99f5e0c-a4db-452f-8d2c-8fd15482b384",
      "modifiedDate": null,
      "note": "Regular customer",
      "phone": "",
      "sourceModifiedDate": "2020-08-12T14:37:37"
    }
  ]
}
```

When a customer places an order with the connected commerce store their details are added to the Customers dataset. You can use the data from the Customers endpoints to calculate key metrics, such as customer churn.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-customers) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|addresses|[[Address](#schemaaddress)]|false|none|Addresses of the customer|
|customerName|string|false|none|Name of the customer|
|defaultCurrency|object|false|none|none|
|emailAddress|string|false|none|Email address of the customer|
|note|string|false|none|Any additional information about the customer|
|phone|string \| null|false|none|A phone number.|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_Customers">Customers</h2>
<!-- backwards compatibility -->
<a id="schemacustomers"></a>
<a id="schema_Customers"></a>
<a id="tocScustomers"></a>
<a id="tocscustomers"></a>

```json
{
  "results": [
    {
      "customers": [
        {
          "addresses": [
            {
              "city": "London",
              "country": "United Kingdom",
              "line1": "301 Duck Pond",
              "line2": "28 Green Street",
              "postalCode": "WX1X 0BE",
              "region": "England",
              "type": "billing"
            },
            {
              "city": "Paris",
              "country": "France",
              "line1": "Bread Street",
              "line2": "Bird Avenue",
              "postalCode": "WDF 123",
              "region": "France",
              "type": "delivery"
            }
          ],
          "createdDate": "0001-01-01T00:00:00",
          "customerName": "Daffy Duck",
          "defaultCurrency": "GBP",
          "emailAddress": "d.duck@warnerbros.com",
          "id": "15",
          "modifiedDate": null,
          "note": "Regular customer",
          "phone": "(877) 492-8687",
          "sourceModifiedDate": "2020-09-15T23:52:28"
        },
        {
          "addresses": [
            {
              "city": "London",
              "country": "United Kingdom",
              "line1": "101 Fire Rooms",
              "line2": "Engine Street",
              "postalCode": "WC1X 0BE",
              "region": "England",
              "type": "billing"
            }
          ],
          "createdDate": "0001-01-01T00:00:00",
          "customerName": "Tasmanian Devil",
          "defaultCurrency": "GBP",
          "emailAddress": "t.devil@warnerbros.com",
          "id": "18",
          "modifiedDate": null,
          "note": "Handle with care",
          "phone": "+1-202-555-0181",
          "sourceModifiedDate": "2020-04-16T02:41:52"
        },
        {
          "addresses": [
            {
              "city": "Yorkshire",
              "country": "United Kingdom",
              "line1": "301 Carrot Street",
              "line2": "Orange Town",
              "postalCode": "WF1X 0BE",
              "region": "England",
              "type": "billing"
            },
            {
              "city": "Paris",
              "country": "France",
              "line1": "424 Field Street",
              "line2": "The Meadow",
              "postalCode": "WDF 123",
              "region": "France",
              "type": "delivery"
            }
          ],
          "createdDate": "0001-01-01T00:00:00",
          "customerName": "Bugs Bunny",
          "defaultCurrency": "GBP",
          "emailAddress": "b.bunny@warnerbros.com",
          "id": "a99f5e0c-a4db-452f-8d2c-8fd15482b384",
          "modifiedDate": null,
          "note": "Regular customer",
          "phone": "",
          "sourceModifiedDate": "2020-08-12T14:37:37"
        }
      ]
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Customer](#schemacustomer)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"2022-10-23T00:00:00Z"
```

In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:

```
2020-10-08T22:40:50Z
2021-01-01T00:00:00
```



When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:

- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
- Unqualified local time: `2021-11-15T01:00:00`
- UTC time offsets: `2021-11-15T01:00:00-05:00`

> Time zones
> 
> Not all dates from Codat will contain information about time zones.  
> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.

<h2 id="tocS_Dispute">Dispute</h2>
<!-- backwards compatibility -->
<a id="schemadispute"></a>
<a id="schema_Dispute"></a>
<a id="tocSdispute"></a>
<a id="tocsdispute"></a>

```json
{
  "createdDate": "2021-03-22T14:39:55",
  "currency": "GBP",
  "disputedTransactions": [
    {
      "id": "e63ad857-7e12-4e64-9185-cdfd7c45d09d",
      "type": "Order"
    }
  ],
  "dueDate": "2021-03-29T14:39:55",
  "id": "03e608e3-bd1c-454f-8c2b-fb0133e43b95",
  "modifiedDate": "2022-02-02T11:02:45Z",
  "reason": "Unhappy with product",
  "sourceModifiedDate": "2021-03-22T14:39:55",
  "status": "InquiryEvidenceRequired",
  "totalAmount": -47.66
}
```

A customer may file a payment dispute with their bank or other card issuer when they're unsatisfied with their purchase or believe they have been charged incorrectly. For example:  
- They didn't receive an order.  
- The product they received was different to the commerce store's description.  
- They've been the victim of online fraud.  

You can use data from the Disputes endpoints to calculate key metrics, such as the number of chargebacks.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|currency|string(ISO4217)|true|none|Currency of the disputed transaction.|
|disputedTransactions|object|false|none|Link to the source event which triggered this transaction.|
|dueDate|[DateTime](#schemadatetime)|false|none|Date when the next action in the dispute resolution is due|
|reason|string|false|none|Reason for the dispute|
|status|string|false|none|Current status of the dispute|
|totalAmount|number|false|none|Total transaction amount that is under dispute.|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Won|
|status|Lost|
|status|Accepted|
|status|Processing|
|status|ChargeRefunded|
|status|EvidenceRequired|
|status|InquiryEvidenceRequired|
|status|InquiryProcessing|
|status|InquiryClosed|
|status|WaitingThirdParty|
|status|Unknown|

<h2 id="tocS_Disputes">Disputes</h2>
<!-- backwards compatibility -->
<a id="schemadisputes"></a>
<a id="schema_Disputes"></a>
<a id="tocSdisputes"></a>
<a id="tocsdisputes"></a>

```json
{
  "results": [
    {
      "createdDate": "2021-03-22T14:39:55",
      "currency": "GBP",
      "disputedTransactions": [
        {
          "id": "e63ad857-7e12-4e64-9185-cdfd7c45d09d",
          "type": "Order"
        }
      ],
      "dueDate": "2021-03-29T14:39:55",
      "id": "03e608e3-bd1c-454f-8c2b-fb0133e43b95",
      "modifiedDate": "2022-02-02T11:02:45Z",
      "reason": "Unhappy with product",
      "sourceModifiedDate": "2021-03-22T14:39:55",
      "status": "InquiryEvidenceRequired",
      "totalAmount": -47.66
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Dispute](#schemadispute)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_HRef">HRef</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_HRef"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri-reference)|false|none|none|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "current": {
    "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
  },
  "self": {
    "href": "/companies/{id}/data/{dataType}"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[HRef](#schemahref)|true|none|none|
|next|[HRef](#schemahref)|false|none|none|
|previous|[HRef](#schemahref)|false|none|none|
|self|[HRef](#schemahref)|true|none|none|

<h2 id="tocS_Locations">Locations</h2>
<!-- backwards compatibility -->
<a id="schemalocations"></a>
<a id="schema_Locations"></a>
<a id="tocSlocations"></a>
<a id="tocslocations"></a>

```json
{
  "address": {
    "city": "London",
    "country": "United Kingdom",
    "line1": "Warner House",
    "line2": "98 Theobald's Road",
    "postalCode": "WC1X 8WB",
    "region": "",
    "type": "Inventory"
  },
  "id": "15",
  "modifiedDate": "2020-08-12T14:37:37",
  "name": "London Warehouse",
  "sourceModifiedDate": "2020-08-12T14:37:37"
}
```

The Locations datatype holds information on geographic locations at which stocks of products may be held, as referenced in the Products data type.

Locations also holds information on geographic locations where orders were placed, as referenced in the Orders data type.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|address|[Address](#schemaaddress)|false|none|Address associated with the location|
|name|string|false|none|Name of this location|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_LocationsResponse">LocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalocationsresponse"></a>
<a id="schema_LocationsResponse"></a>
<a id="tocSlocationsresponse"></a>
<a id="tocslocationsresponse"></a>

```json
{
  "results": [
    {
      "address": {
        "city": "London",
        "country": "United Kingdom",
        "line1": "Warner House",
        "line2": "98 Theobald's Road",
        "postalCode": "WC1X 8WB",
        "region": "",
        "type": "Inventory"
      },
      "id": "15",
      "modifiedDate": "2020-08-12T14:37:37",
      "name": "London Warehouse",
      "sourceModifiedDate": "2020-08-12T14:37:37"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Locations](#schemalocations)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_ModifiedDates">ModifiedDates</h2>
<!-- backwards compatibility -->
<a id="schemamodifieddates"></a>
<a id="schema_ModifiedDates"></a>
<a id="tocSmodifieddates"></a>
<a id="tocsmodifieddates"></a>

```json
{
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "country": "CAN",
  "createdDate": "2021-03-28T03:00:14",
  "currency": "CAD",
  "customerRef": {
    "id": "2634d180-7205-43f0-a73d-84af6443a005",
    "name": "Emmy Roberts"
  },
  "id": "01e63721-1205-478e-8503-9d8bf8a93f44",
  "locationRef": {
    "id": "47bbffc7-c045-4b0f-a3bb-ecf1f669edfa"
  },
  "modifiedDate": "2022-02-02T11:02:45Z",
  "orderLineItems": [
    {
      "discountAllocations": [],
      "id": "116113a6-54d3-4624-ba73-26a77a5ffd51",
      "productRef": {
        "id": "ac186646-41f2-4280-afea-1012c59459ab",
        "name": "Intelligent Concrete Salad"
      },
      "productVariantRef": {
        "id": "f9ca9de5-9e31-460d-ac81-368f4e7c8fc0",
        "name": "Small Incredible Wooden Soap"
      },
      "quantity": 1,
      "taxPercentage": 20,
      "taxes": [
        {
          "taxAmount": "",
          "taxComponentRef": {
            "id": "72",
            "name": "Sales Tax"
          }
        },
        {
          "taxAmount": "",
          "taxComponentRef": {
            "id": "72",
            "name": "City Tax"
          }
        }
      ],
      "totalAmount": 12,
      "totalTaxAmount": 2,
      "unitPrice": 10
    }
  ],
  "orderNumber": "99123956",
  "payments": [
    {
      "amount": 12,
      "createdDate": "2021-03-28T03:00:14",
      "currency": "CAD",
      "dueDate": "2021-04-04T03:00:14",
      "id": "defdceb6-83a3-4b7d-a74e-e9ef947d5f48",
      "modifiedDate": "2022-02-02T11:02:45",
      "status": "Unknown",
      "type": "Paypal"
    }
  ],
  "serviceCharges": [
    {
      "description": "Service Charge",
      "quantity": 1,
      "taxAmount": 0.2,
      "taxPercentage": 20,
      "taxes": [
        {
          "taxAmount": "",
          "taxComponentRef": {
            "id": "72",
            "name": "Service Tax"
          }
        }
      ],
      "totalAmount": 1.2,
      "type": "Generic"
    }
  ],
  "sourceModifiedDate": "2021-03-28T03:00:14",
  "totalAmount": 12,
  "totalDiscount": 0,
  "totalGratuity": 1,
  "totalRefund": 0,
  "totalTaxAmount": 2
}
```

Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order. You can use data from the Orders endpoints to calculate key metrics, such as gross sales values and monthly recurring revenue (MRR).

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|closedDate|[DateTime](#schemadatetime)|false|none|Date on which order was closed after the product was shipped, paid for, and any refund period had elapsed.|
|country|string(ISO3166 Alpha-3)|false|none|The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.<br><br>Depending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model. <br><br>For POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://docs.codat.io/codat-api#/operations/get-companies-companyId-connections-connectionId-push) endpoint.|
|currency|object|false|none|none|
|customerRef|object|false|none|Reference to the customer that placed the order.|
|locationRef|object|false|none|Reference to the geographic location where the order was placed.|
|orderLineItems|[object]|false|none|none|
|orderNumber|string|false|none|Friendly reference for the order in the commerce or point of sale platform.|
|payments|[object]|false|none|none|
|serviceCharges|[object]|false|none|none|
|totalAmount|number|false|none|Total amount of the order, including tax, net of any discounts and refunds.|
|totalDiscount|number|false|none|Total amount of discount applied to the order.|
|totalGratuity|number|false|none|Extra amount added to a bill.|
|totalRefund|number|false|none|Total amount refunded issued by a merchant on an order (always a negative value).|
|totalTaxAmount|number|false|none|Total amount of tax applied to the order.|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_Orders">Orders</h2>
<!-- backwards compatibility -->
<a id="schemaorders"></a>
<a id="schema_Orders"></a>
<a id="tocSorders"></a>
<a id="tocsorders"></a>

```json
{
  "results": [
    {
      "country": "CAN",
      "createdDate": "2021-03-28T03:00:14",
      "currency": "CAD",
      "customerRef": {
        "id": "2634d180-7205-43f0-a73d-84af6443a005",
        "name": "Emmy Roberts"
      },
      "id": "01e63721-1205-478e-8503-9d8bf8a93f44",
      "locationRef": {
        "id": "47bbffc7-c045-4b0f-a3bb-ecf1f669edfa"
      },
      "modifiedDate": "2022-02-02T11:02:45Z",
      "orderLineItems": [
        {
          "discountAllocations": [],
          "id": "116113a6-54d3-4624-ba73-26a77a5ffd51",
          "productRef": {
            "id": "ac186646-41f2-4280-afea-1012c59459ab",
            "name": "Intelligent Concrete Salad"
          },
          "productVariantRef": {
            "id": "f9ca9de5-9e31-460d-ac81-368f4e7c8fc0",
            "name": "Small Incredible Wooden Soap"
          },
          "quantity": 1,
          "taxPercentage": 20,
          "taxes": [
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "Sales Tax"
              }
            },
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "City Tax"
              }
            }
          ],
          "totalAmount": 12,
          "totalTaxAmount": 2,
          "unitPrice": 10
        }
      ],
      "orderNumber": "99123956",
      "payments": [
        {
          "amount": 12,
          "createdDate": "2021-03-28T03:00:14",
          "currency": "CAD",
          "dueDate": "2021-04-04T03:00:14",
          "id": "defdceb6-83a3-4b7d-a74e-e9ef947d5f48",
          "modifiedDate": "2022-02-02T11:02:45",
          "status": "Unknown",
          "type": "Paypal"
        }
      ],
      "serviceCharges": [
        {
          "description": "Service Charge",
          "quantity": 1,
          "taxAmount": 0.2,
          "taxPercentage": 20,
          "taxes": [
            {
              "taxAmount": "",
              "taxComponentRef": {
                "id": "72",
                "name": "Service Tax"
              }
            }
          ],
          "totalAmount": 1.2,
          "type": "Generic"
        }
      ],
      "sourceModifiedDate": "2021-03-28T03:00:14",
      "totalAmount": 12,
      "totalDiscount": 0,
      "totalGratuity": 1,
      "totalRefund": 0,
      "totalTaxAmount": 2
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Order](#schemaorder)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_PagingInfo">PagingInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo"></a>
<a id="schema_PagingInfo"></a>
<a id="tocSpaginginfo"></a>
<a id="tocspaginginfo"></a>

```json
{
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "amount": 194.12,
  "currency": "GBP",
  "dueDate": "2022-10-23T00:00:00Z",
  "paymentMethodRef": {
    "id": "EILBDVJVNUAGVKRQ",
    "name": "AliPay"
  },
  "paymentProvider": "Amazon Pay",
  "status": "Pending",
  "createdDate": "2022-10-23T00:00:00Z",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

Payments contain details of all payments made by customers to a company, including: amounts, currency used, payment method, payment provider, and payment status.

Refunds are recorded as separate, negative payments. Note that a refund can only occur in relation to a payment that has been completed (i.e. has a status of `Paid`). When a customer cancels an order _before_ a payment has been completed, the payment shows as `Cancelled`.

You can use data from the Payments endpoints to calculate key metrics, such as gross sales and monthly recurring revenue (MRR).

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|amount|number|false|none|Payment Amount (including gratuity)|
|currency|string(ISO4217)|false|none|Currency in which the payment was made|
|dueDate|[DateTime](#schemadatetime)|false|none|Date by which payment must be made|
|paymentMethodRef|object|false|none|The payment method the payment is linked to in the commerce platform.|
|paymentProvider|string|false|none|Service provider of the payment, if applicable.|
|status|string|false|none|Status of the payment|
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Pending|
|status|Authorized|
|status|Paid|
|status|Failed|
|status|Cancelled|
|status|Unknown|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "name": "Alipay",
  "status": "Active",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

A Payment Method represents the payment method(s) used to make payments.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|name|string|false|none|The name of the PaymentMethod|
|status|string|false|none|Status of the Payment Method|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Archived|
|status|Unknown|

<h2 id="tocS_PaymentMethods">PaymentMethods</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethods"></a>
<a id="schema_PaymentMethods"></a>
<a id="tocSpaymentmethods"></a>
<a id="tocspaymentmethods"></a>

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "name": "Alipay",
      "status": "Active",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PaymentMethod](#schemapaymentmethod)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_Payments">Payments</h2>
<!-- backwards compatibility -->
<a id="schemapayments"></a>
<a id="schema_Payments"></a>
<a id="tocSpayments"></a>
<a id="tocspayments"></a>

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "amount": 194.12,
      "currency": "GBP",
      "dueDate": "2022-10-23T00:00:00Z",
      "paymentMethodRef": {
        "id": "EILBDVJVNUAGVKRQ",
        "name": "AliPay"
      },
      "paymentProvider": "Amazon Pay",
      "status": "Pending",
      "createdDate": "2022-10-23T00:00:00Z",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Payment](#schemapayment)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "number": "+44 25691 154789",
  "type": "Primary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string \| null|true|none|A phone number.|
|type|string|true|none|The type of phone number|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Primary|
|type|Landline|
|type|Mobile|
|type|Fax|
|type|Unknown|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "categorization": "Hardware",
  "description": "1tb Western Digital Hard Drive",
  "isGiftCard": true,
  "name": "Hard Drive",
  "variants": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "barcode": "564158468416486458646886484",
      "inventory": [
        {
          "locations": [
            {
              "locationRef": {
                "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
                "name": "string"
              },
              "quantity": 0
            }
          ],
          "totalQuantity": 0
        }
      ],
      "isTaxEnabled": true,
      "name": "Red Coat",
      "prices": [
        {
          "currency": "GBP",
          "unitPrice": 0
        }
      ],
      "shippingRequired": true,
      "sku": "Coat-Red-Lrg",
      "status": "Unknown",
      "unitOfMeasure": "kg",
      "vatPercentage": 12.5,
      "createdDate": "2022-10-23T00:00:00Z",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ]
}
```

A Product is an item in the company's inventory, and includes information about the price and quantity of all products, and variants thereof, available for sale.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-products) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|categorization|string|false|none|Retail category that the product is assigned to|
|description|string|false|none|Description of the product recorded in the commerce or point of sale platform.|
|isGiftCard|boolean|false|none|Whether the product represents a gift card or voucher that<br>can be redeemed in the commerce or POS platform<br>|
|name|string|false|none|Name of the product in the commerce or POS system|
|variants|[object]|false|none|none|

<h2 id="tocS_ProductCategories">ProductCategories</h2>
<!-- backwards compatibility -->
<a id="schemaproductcategories"></a>
<a id="schema_ProductCategories"></a>
<a id="tocSproductcategories"></a>
<a id="tocsproductcategories"></a>

```json
{
  "results": [
    {
      "productCategories": [
        {
          "ancestorRefs": [],
          "hasChildren": true,
          "id": "100",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Entertainment",
          "sourceModifiedDate": "2021-10-01T12:53:21Z"
        },
        {
          "ancestorRefs": [
            {
              "id": "100",
              "name": "Entertainment"
            }
          ],
          "hasChildren": true,
          "id": "101",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Cinema",
          "sourceModifiedDate": "2021-10-01T12:55:02Z"
        },
        {
          "ancestorRefs": [
            {
              "id": "100",
              "name": "Entertainment"
            },
            {
              "id": "101",
              "name": "Cinema"
            }
          ],
          "hasChildren": false,
          "id": "102",
          "modifiedDate": "2022-01-01T12:00:00Z",
          "name": "Movie",
          "sourceModifiedDate": "2021-12-25T12:00:00Z"
        }
      ]
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ProductCategory](#schemaproductcategory)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_ProductCategory">ProductCategory</h2>
<!-- backwards compatibility -->
<a id="schemaproductcategory"></a>
<a id="schema_ProductCategory"></a>
<a id="tocSproductcategory"></a>
<a id="tocsproductcategory"></a>

```json
{
  "productCategories": [
    {
      "ancestorRefs": [],
      "hasChildren": true,
      "id": "100",
      "modifiedDate": "2022-01-01T12:00:00Z",
      "name": "Entertainment",
      "sourceModifiedDate": "2021-10-01T12:53:21Z"
    },
    {
      "ancestorRefs": [
        {
          "id": "100",
          "name": "Entertainment"
        }
      ],
      "hasChildren": true,
      "id": "101",
      "modifiedDate": "2022-01-01T12:00:00Z",
      "name": "Cinema",
      "sourceModifiedDate": "2021-10-01T12:55:02Z"
    },
    {
      "ancestorRefs": [
        {
          "id": "100",
          "name": "Entertainment"
        },
        {
          "id": "101",
          "name": "Cinema"
        }
      ],
      "hasChildren": false,
      "id": "102",
      "modifiedDate": "2022-01-01T12:00:00Z",
      "name": "Movie",
      "sourceModifiedDate": "2021-12-25T12:00:00Z"
    }
  ]
}
```

Product categories are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-productCategories) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestorRefs|[[RecordRef](#schemarecordref)]|false|none|A collection of parent product categories implicitly ordered with the immediate parent last in the list.|
|hasChildren|boolean|false|none|A boolean indicating whether there are other product categories beneath this one in the hierarchy.|
|id|string|false|none|The unique identifier of the product category|
|name|string|false|none|The name of the product category|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_Products">Products</h2>
<!-- backwards compatibility -->
<a id="schemaproducts"></a>
<a id="schema_Products"></a>
<a id="tocSproducts"></a>
<a id="tocsproducts"></a>

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "categorization": "Hardware",
      "description": "1tb Western Digital Hard Drive",
      "isGiftCard": true,
      "name": "Hard Drive",
      "variants": [
        {
          "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
          "barcode": "564158468416486458646886484",
          "inventory": [
            {
              "locations": [
                {
                  "locationRef": {
                    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
                    "name": "string"
                  },
                  "quantity": 0
                }
              ],
              "totalQuantity": 0
            }
          ],
          "isTaxEnabled": true,
          "name": "Red Coat",
          "prices": [
            {
              "currency": "GBP",
              "unitPrice": 0
            }
          ],
          "shippingRequired": true,
          "sku": "Coat-Red-Lrg",
          "status": "Unknown",
          "unitOfMeasure": "kg",
          "vatPercentage": 12.5,
          "createdDate": "2022-10-23T00:00:00Z",
          "modifiedDate": "2022-10-23T00:00:00Z",
          "sourceModifiedDate": "2022-10-23T00:00:00Z"
        }
      ]
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Product](#schemaproduct)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_RecordRef">RecordRef</h2>
<!-- backwards compatibility -->
<a id="schemarecordref"></a>
<a id="schema_RecordRef"></a>
<a id="tocSrecordref"></a>
<a id="tocsrecordref"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identitifer of the record being referenced|
|type|string|true|none|The type of record being referenced.|

<h2 id="tocS_TaxComponent">TaxComponent</h2>
<!-- backwards compatibility -->
<a id="schemataxcomponent"></a>
<a id="schema_TaxComponent"></a>
<a id="tocStaxcomponent"></a>
<a id="tocstaxcomponent"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "isCompound": true,
  "modifiedDate": "2022-10-23T00:00:00Z",
  "name": "Sales Tax (15%)",
  "rate": 0.15,
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

The Tax Components endpoints return tax rates data from the commerce platform, including tax rate names and values. This is to support the mapping of tax rates from the commerce platform to those in the accounting platform.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|isCompound|boolean|false|none|The Boolean flag to indicate when a Tax Rate Component compounds on a sale.|
|name|string|false|none|Name of the Tax Rate Component in the source commerce platform.|
|rate|number(float)|false|none|Rate of taxation represented as a fraction of the net price (typically in the range 0.00 - 1.00).|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_TaxComponents">TaxComponents</h2>
<!-- backwards compatibility -->
<a id="schemataxcomponents"></a>
<a id="schema_TaxComponents"></a>
<a id="tocStaxcomponents"></a>
<a id="tocstaxcomponents"></a>

```json
{
  "taxComponents": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "isCompound": true,
      "modifiedDate": "2022-10-23T00:00:00Z",
      "name": "Sales Tax (15%)",
      "rate": 0.15,
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxComponents|[[TaxComponent](#schemataxcomponent)]|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
  "currency": "GBP",
  "subType": "CardPayment",
  "totalAmount": 194.12,
  "transactionSourceRef": {
    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
    "type": "Fee"
  },
  "type": "Payment",
  "createdDate": "2022-10-23T00:00:00Z",
  "sourceCreatedDate": "2022-10-23T00:00:00Z",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.

You can use data from the Transactions endpoints to calculate key metrics, such as:  
- Transaction volumes  
- Average transaction volume  
- Average transaction value  
- Returns  
- Payouts

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-transactions) for this data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique, persistent identifier for this record|
|currency|string(ISO4217)|false|none|The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.<br><br>## Unknown currencies<br><br>In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. <br><br>There are only a very small number of edge cases where this currency code is returned by the Codat system.|
|subType|string|false|none|Non-standardised transaction type data from the commerce platform|
|totalAmount|number|false|none|The total transaction amount|
|transactionSourceRef|object|false|none|Link to the source event which triggered this transaction|
|type|string|false|none|The type of the platform transaction:  <br>- `Unknown`  <br>- `FailedPayout` — Failed transfer of funds from the seller's merchant account to their bank account.  <br>- `Payment` — Credit and debit card payments.  <br>- `PaymentFee` — Payment provider's fee on each card payment.  <br>- `PaymentFeeRefund` — Payment provider's fee that has been refunded to the seller.  <br>- `Payout` — Transfer of funds from the seller's merchant account to their bank account.  <br>- `Refund` — Refunds to a customer's credit or debit card.  <br>- `Transfer` — Secure transfer of funds to the seller's bank account.  |
|createdDate|[DateTime](#schemadatetime)|false|none|The date the entity was created.|
|sourceCreatedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was created in the originating system|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Payment|
|type|Refund|
|type|Payout|
|type|FailedPayout|
|type|Transfer|
|type|PaymentFee|
|type|PaymentFeeRefund|
|type|Unknown|

<h2 id="tocS_Transactions">Transactions</h2>
<!-- backwards compatibility -->
<a id="schematransactions"></a>
<a id="schema_Transactions"></a>
<a id="tocStransactions"></a>
<a id="tocstransactions"></a>

```json
{
  "results": [
    {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "currency": "GBP",
      "subType": "CardPayment",
      "totalAmount": 194.12,
      "transactionSourceRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
        "type": "Fee"
      },
      "type": "Payment",
      "createdDate": "2022-10-23T00:00:00Z",
      "sourceCreatedDate": "2022-10-23T00:00:00Z",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Transaction](#schematransaction)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|
